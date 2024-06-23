import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { $event } from '../../utils';
import Modal from '../base/Modal';
import { ModalProps } from '../base/Modal/Modal.PropType';

const AutoPortal = () => {

  useEffect(() => {
    // @ts-ignore
    window.AutoPortalCount = (window.AutoPortalCount || 0) + 1;
    const eid = $event.$on('PORTAL_CONTROL', (params) => {
      console.log('on PORTAL_CONTROL: ', params);
      const { action, id, element } = params;
      if (action === 'add') {
        addElement(id, element);
      }
      if (action === 'remove') {
        removeElement(id);
      }
    });

    return () => {
      // @ts-ignore
      window.AutoPortalCount = (window.AutoPortalCount || 0) - 1;
      $event.$off(eid);
    };
  }, []);

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
    <div>
      {elements.map((item) => (
        <React.Fragment key={item.id}>{item.element}</React.Fragment>
      ))}
    </div>
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

export const portalRef = {
  componentMap: {},
};

export const registerPartalComponent = function (componentMap) {
  portalRef.componentMap = componentMap;
};

export const renderComponentPortal = (componentName: string, props?: Record<string, any>) => {
  const PartalComponent = portalRef.componentMap[componentName];
  if (!PartalComponent) throw new Error(`${componentName} is not registered`);
  return addPortal(<PartalComponent {...props} />);
};

export const renderComponent = (componentName: string, props?: Record<string, any>) => {
  const PartalComponent = portalRef.componentMap[componentName];
  if (!PartalComponent) throw new Error(`${componentName} is not registered`);
  return <PartalComponent {...props} />;
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
  if (!PartalComponent) throw new Error(`${componentName} is not registered`);
  if (PartalComponent) {
    let modal;
    const destory = addPortal(
      <Modal
        {...modalProps}
        ref={(node) => {
          modal = node;
          // @ts-ignore
          modalProps?.ref?.(node);
          setTimeout(() => {
            node?.open?.();
          }, 100);
        }}
        onClose={() => {
          modalProps.onClose?.();
          destory();
        }}
        renderView={(_) => <PartalComponent emitClose={() => modal?.close()} {...props} />}
      />,
    );
  }
};

export default AutoPortal;
