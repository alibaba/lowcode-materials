import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { Balloon } from '@alifd/next';

const targetClass = 'render-wrapper-target';
const rootClass = 'render-wrapper-root done-note-wrapper';

// 获取DOM真实style的方法
const getStyle = (obj, attr) => {
  if (obj.currentStyle) {
    // 兼容IE
    return obj.currentStyle[attr];
  } else {
    return window.getComputedStyle(obj, null)[attr];
  }
};

interface NoteProps {
  note?: string;
  id?: string;
}

const NoteWrapper: React.ForwardRefRenderFunction<HTMLElement, NoteProps> = (props, ref) => {
  const el = document.createElement('div');
  let innerRef = null;
  el.className = rootClass;
  el.id = props.id;
  el.ref = ref;

  const _renderLayer = function() {
    const { note } = props;
    const defaultTrigger = <div className="render-wrapper-note">N</div>;
    const node = (
      <Balloon.Tooltip
        trigger={defaultTrigger}
        align="rb"
        triggerType="click"
        popupStyle={{ fontSize: '12px', lineHeight: '1.6', background: '#fff' }}
      >
        {note}
      </Balloon.Tooltip>
    );
    ReactDom.render(node, el);
  };

  useEffect(() => {
    _renderLayer();
    if (innerRef) {
      const refDom = ReactDom.findDOMNode(innerRef);
      if (refDom.className.indexOf(targetClass) === -1) {
        if (getStyle(refDom, 'position') === 'static') {
          refDom.style.position = 'relative'; // 当target目标组件的position为static时, 则使用relative, 方便内层元素定位
        }
        refDom.className += ` ${targetClass}`;
        refDom.appendChild(el);
      }
    }
  });
  const { children } = props;
  const _children = React.Children.map(children, (child) => {
    let c = child;
    if (typeof child === 'string') c = <span>{child}</span>;
    return React.cloneElement(c, { ref: (ref) => (innerRef = ref) });
  });
  return _children || <></>;
};

const RefNoteWrapper = React.forwardRef(NoteWrapper);

RefNoteWrapper.displayName = 'Wrapper';

export default RefNoteWrapper;
