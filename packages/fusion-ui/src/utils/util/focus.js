'use strict';

exports.__esModule = true;
exports.getFocusNodeList = getFocusNodeList;
exports.saveLastFocusNode = saveLastFocusNode;
exports.clearLastFocusNode = clearLastFocusNode;
exports.backLastFocusNode = backLastFocusNode;
exports.limitTabRange = limitTabRange;

const _keycode = require('./keycode');

const _keycode2 = _interopRequireDefault(_keycode);

const _object = require('./object');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 用于切换页面元素的焦点
 */

/**
 * 元素是否可见
 * @private
 * @param   {Element}  node
 * @return  {Boolean}
 */
function _isVisible(node) {
  while (node) {
    if (node === document.body || node === document.documentElement) {
      break;
    }
    if (node.style.display === 'none' || node.style.visibility === 'hidden') {
      return false;
    }
    node = node.parentNode;
  }
  return true;
}

/**
 * 元素是否可以获取焦点
 * @private
 * @param   {Element}  node
 * @return  {Boolean}
 */
function _isFocusable(node) {
  const nodeName = node.nodeName.toLowerCase();
  const tabIndex = parseInt(node.getAttribute('tabindex'), 10);
  const hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;

  if (_isVisible(node)) {
    if (nodeName === 'input') {
      return !node.disabled && node.type !== 'hidden';
    } else if (['select', 'textarea', 'button'].indexOf(nodeName) > -1) {
      return !node.disabled;
    } else if (nodeName === 'a') {
      return node.getAttribute('href') || hasTabIndex;
    } else {
      return hasTabIndex;
    }
  }
  return false;
}

/**
 * 列出能获取焦点的子节点
 * @param  {Element} node 容器节点
 * @return {Array<Element>}
 */
function getFocusNodeList(node) {
  const res = [];
  const nodeList = node.querySelectorAll('*');

  (0, _object.each)(nodeList, (item) => {
    if (_isFocusable(item)) {
      const method = item.getAttribute('data-auto-focus') ? 'unshift' : 'push';
      res[method](item);
    }
  });

  if (_isFocusable(node)) {
    res.unshift(node);
  }

  return res;
}

// 用于记录上一次获得焦点的无素
let lastFocusElement = null;

/**
 * 保存最近一次获得焦点的无素
 */
function saveLastFocusNode() {
  lastFocusElement = document.activeElement;
}

/**
 * 清除焦点记录
 */
function clearLastFocusNode() {
  lastFocusElement = null;
}

/**
 * 尝试将焦点切换到上一个元素
 */
function backLastFocusNode() {
  if (lastFocusElement) {
    try {
      // 元素可能已经被移动了
      lastFocusElement.focus();
    } catch (e) {
      // ignore ...
    }
  }
}

/**
 * 在限制的范围内切换焦点
 * @param  {Element} node 容器节点
 * @param  {Event} e      键盘事件
 */
function limitTabRange(node, e) {
  if (e.keyCode === _keycode2.default.TAB) {
    const tabNodeList = getFocusNodeList(node);
    const maxIndex = tabNodeList.length - 1;
    const index = tabNodeList.indexOf(document.activeElement);

    if (index > -1) {
      let targetIndex = index + (e.shiftKey ? -1 : 1);
      targetIndex < 0 && (targetIndex = maxIndex);
      targetIndex > maxIndex && (targetIndex = 0);
      tabNodeList[targetIndex].focus();
      e.preventDefault();
    }
  }
}
