import { events } from '@/utils/util';
import debounce from 'lodash/debounce';

let timeout: number;
/**
 * 用于监听当前页面到达哪一个锚点
 * @param dataSource 数据源
 * @param container 函数，返回监听容器
 * @param cb 锚点改变时触发
 * @param external 放置额外参数，例如 offsetY
 */
export const startListen = (dataSource, container, cb, external: { offsetY: number }) => {
  updateNodePosition(dataSource, container, cb, external);
  timeout = window.setTimeout(() => {
    setEventHandlerForContainer(dataSource, container, cb, external);
  });
};
const setEventHandlerForContainer = (dataSource, container, cb, external) => {
  const affixContainer = container();
  if (affixContainer) {
    events.on(
      affixContainer,
      'scroll',
      updateNodePosition.bind(null, dataSource, container, cb, external),
      false,
    );
    events.on(
      affixContainer,
      'resize',
      updateNodePosition.bind(null, dataSource, container, cb, external),
      false,
    );
  }
};

/**
 * 解除 startListen 带来的监听功能
 */
export const removeListen = (dataSource, container) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  removeEventHandlerForContainer(dataSource, container);
};
const removeEventHandlerForContainer = (dataSource, container) => {
  const affixContainer = container();
  if (affixContainer) {
    events.off(affixContainer, 'scroll', updateNodePosition.bind(null, dataSource, container));
    events.off(affixContainer, 'resize', updateNodePosition.bind(null, dataSource, container));
  }
};

/**
 * 获取节点已经滚动的距离
 */
export function getScroll(node, isVertical) {
  if (typeof window === 'undefined') {
    return 0;
  }
  const windowProp = isVertical ? 'pageYOffset' : 'pageXOffset';
  const elementProp = isVertical ? 'scrollTop' : 'scrollLeft';
  return node === window ? node[windowProp] : node[elementProp];
}

/**
 * 滚动时触发，判断所有在页面中的节点中的”第一个“，并通过 cb 返回此 htmlId
 */
export const updateNodePosition = debounce((dataSource, container, cb?, external?) => {
  const { offsetY } = external || {};
  const affixContainer = container();

  if (affixContainer) {
    const containerScrollTop = getScroll(affixContainer, true); // 容器在垂直位置上的滚动 offset
    let findEl;
    const predicateItem = (item) => {
      const el = item?.htmlId && document.getElementById(item.htmlId);
      if (el) {
        if (el.offsetTop >= containerScrollTop + offsetY) {
          findEl = item.htmlId;
          return true;
        }
      }
      return false;
    };
    dataSource.some((item) => {
      const status = predicateItem(item);
      if (!status && Array.isArray(item.children)) {
        item.children.some((subItem) => {
          const subStatus = predicateItem(subItem);
          return subStatus;
        });
      }

      return !!findEl;
    });

    if (findEl) {
      cb && cb(findEl);
    }
  }
}, 100);

/**
 * 用于在特定容器内跳转到对应的锚点位置
 * 增加 offsetY，用于跳转的偏移，防止部分元素 fixed 遮挡锚点
 */
export const jumpToNode = (htmlId) => {
  const el = htmlId && document.getElementById(htmlId);
  el.scrollIntoView({ behavior: 'smooth' });
};
