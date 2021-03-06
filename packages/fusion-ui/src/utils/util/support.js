'use strict';

exports.__esModule = true;
exports.flex = exports.transition = exports.animation = undefined;

const _dom = require('./dom');

const _object = require('./object');

const animationEndEventNames = {
  WebkitAnimation: 'webkitAnimationEnd',
  OAnimation: 'oAnimationEnd',
  animation: 'animationend',
};

const transitionEventNames = {
  WebkitTransition: 'webkitTransitionEnd',
  OTransition: 'oTransitionEnd',
  transition: 'transitionend',
};

/**
 * 是否支持某些动效事件，如果支持，返回相应的end事件名
 * @private
 * @param  {Object<String>} names
 * @return {Object|false}
 */
function _supportEnd(names) {
  /* istanbul ignore if */
  if (!_dom.hasDOM) {
    return false;
  }

  const el = document.createElement('div');
  let ret = false;

  (0, _object.each)(names, (val, key) => {
    /* istanbul ignore else */
    if (el.style[key] !== undefined) {
      ret = { end: val };
      return false;
    }
  });

  return ret;
}

/**
 * 是否支持某些CSS属性
 * @private
 * @param  {Object<Array<String>>} names
 * @return {Boolean}       is support
 */
function _supportCSS(names) {
  /* istanbul ignore if */
  if (!_dom.hasDOM) {
    return false;
  }

  const el = document.createElement('div');
  let ret = false;

  (0, _object.each)(names, (val, key) => {
    (0, _object.each)(val, (item) => {
      try {
        el.style[key] = item;
        ret = ret || el.style[key] === item;
      } catch (e) {
        // It will be throw error when set unknown property under IE8
      }
      return !ret; // 如果有一个支持就返回false，后面不需要再判断
    });

    return !ret;
  });

  return ret;
}

/**
 * 是否支持animation以及动画结束事件名
 * @type {Object|false}
 * @property {String} end 动画结束事件名
 */
const animation = (exports.animation = _supportEnd(animationEndEventNames));

/**
 * 是否支持transition以及过滤效果结束事件名
 * @type {Object|false}
 * @property {String} end 过渡效果结束事件名
 */
const transition = (exports.transition = _supportEnd(transitionEventNames));

/**
 * 是否支持flex属性
 * @type {Boolean}
 */
const flex = (exports.flex = _supportCSS({
  display: ['flex', '-webkit-flex', '-moz-flex', '-ms-flexbox'],
}));
