import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { $event } from '../../utils';
import { useDidHide, useDidShow } from '@tarojs/taro';
import Modal from '../base/Modal';
import { ModalProps } from '../base/Modal/Modal.PropType';
// import { observer } from 'mobx-react';
import { View } from '@tarojs/components';

// @observer
// export class AutoPortal extends React.Component {
//   render() {
//     return <AutoPortalFuck />;
//   }
// }

const AutoPortal = () => {
  const [focus, setFocus] = useState(true);
  useDidShow(() => {
    setFocus(true);
  });

  useDidHide(() => {
    setFocus(false);
  });

  useEffect(() => {
    const eid = $event.$on('PORTAL_CONTROL', (params) => {
      // console.log('EVENT ON PORTAL_CONTROL: ', params);
      const { action, id, element } = params;
      if (action === 'add' && focus) {
        addElement(id, element);
      }
      if (action === 'remove') {
        removeElement(id);
      }
    });

    return () => {
      $event.$off(eid);
    };
  }, [focus]);

  const [elements, setElements] = useState<
    Array<{
      id: string;
      ref?: any;
      element: React.ReactNode;
    }>
  >([]);

  const addElement = useCallback((id: string, element: React.ReactNode) => {
    const newElement = {
      id,
      element,
    };
    // console.log('newElement: ', newElement);
    setElements((prevElements) => [...prevElements, newElement]);
    return id;
  }, []);

  const removeElement = useCallback((id: string) => {
    setElements((prevElements) => prevElements.filter((item) => item.id !== id));
  }, []);
  // console.log('elements: ', elements);
  return (
    <View>
      {/* <RootPortal enable={elements.length > 0}> */}
      {elements.map((item) => (
        <React.Fragment key={item.id}>{item.element}</React.Fragment>
      ))}
      {/* </RootPortal> */}
    </View>
  );
};

let uuid = 0;

export const addPortal = (element: React.ReactNode) => {
  uuid++;
  const id = String(uuid);
  $event.$emit('PORTAL_CONTROL', {
    action: 'add',
    id,
    element,
  });
  return () => {
    removePortal(id);
  };
};

export const removePortal = (id: string) => {
  $event.$emit('PORTAL_CONTROL', {
    action: 'remove',
    id,
  });
};

const portalRef = {
  componentMap: {},
};

export const registerPartalComponent = function (componentMap) {
  portalRef.componentMap = componentMap;
};

export const renderComponentPortal = (componentName: string, props?: Record<string, any>) => {
  const PartalComponent = portalRef.componentMap[componentName];
  return addPortal(<PartalComponent {...props} />);
};

export const renderComponent = (componentName: string, props?: Record<string, any>) => {
  const PartalComponent = portalRef.componentMap[componentName];
  return React.createElement(PartalComponent, props);
};

export const showComponentModal = (
  componentName: string,
  props?: Record<string, any>,
  modalProps: ModalProps<any> = {
    animate: 'slide-bottom',
    style: {
      height: '60%',
    },
  },
) => {
  const PartalComponent = portalRef.componentMap[componentName];
  if (PartalComponent) {
    let modal;
    const destory = addPortal(
      <Modal
        {...modalProps}
        ref={(node) => {
          modalProps?.ref?.(node);
          modal = node;
          setTimeout(() => {
            node?.open?.();
          }, 100);
        }}
        onClose={() => {
          modalProps.onClose?.();
          destory();
          modal = null;
        }}
        renderView={(_) => <PartalComponent emitClose={() => modal?.close()} {...props} />}
      />,
    );
  }
};

export default AutoPortal;
