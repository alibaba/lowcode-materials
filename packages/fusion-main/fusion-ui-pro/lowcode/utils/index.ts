export const hideProp = () => false;

export function isJSExpression(data: any) {
  return data && data.type === 'JSExpression';
}

export const deepEqual = function (x, y) {
  if (x === y) {
    return true;
  } else if (typeof x === 'object' && x != null && typeof y === 'object' && y !== null) {
    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (const prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
};

export const showWithLabelAlign = (target) => {
  const parentLabelAlign = target && target.parent.node.parent.getPropValue('labelAlign');
  const labelAlign = parentLabelAlign || (target && target.parent.getPropValue('labelAlign'));
  if (labelAlign === 'top') {
    const enableLabelTip = target.parent.getPropValue('labelTip.enable');
    if (enableLabelTip) {
      return target.name.startsWith('labelTip');
    }
    return target.name === 'labelTip.enable';
  }
  if (labelAlign === 'inset') {
    return target.name.startsWith('wrapper');
  }
  if (labelAlign === 'left') {
    return !target.name.startsWith('labelTip');
  }
  return true;
};

export const showWithLabelAlignShortcut = (target) => {
  const { labelAlign: parentLabelAlign } = target && target.parent.node.propsData;
  const labelAlign = parentLabelAlign || (target && target.parent.getPropValue('labelAlign'));
  if (labelAlign === 'top') {
    const enableLabelTip = target.parent.getPropValue('labelTip.enable');
    if (enableLabelTip) {
      return target.name.startsWith('labelTip');
    }
    return target.name === 'labelTip.enable';
  }
  if (labelAlign === 'inset') {
    return target.name.startsWith('wrapper');
  }
  if (labelAlign === 'left') {
    return !target.name.startsWith('labelTip');
  }
  return true;
};

export const showWithFormItemType = (target, type) => {
  const formItemType = target && target.getProps().getPropValue('type');
  return formItemType === type;
};

export const propsFormWrapper = (props, formItemType) => {
  return props.map((item) => {
    item.condition = (target) => {
      return showWithFormItemType(target, formItemType);
    };
    item.name = `componentPorps.${item.name}`;
    return item;
  });
};

export const getParentValue = (target) => {
  return target.getProps().node.parent.getPropValue(target.name);
};

export const uuid = () => Math.random().toString(36).substr(-6);
export const mockId = () => `id-${uuid()}`;
