import {
  Video as TVideo,
  WebView as TWebView,
  Canvas as TCanvas,
  RichText as TRichText,
} from '@tarojs/components';

import { configure } from 'mobx';
import React from 'react';

import { portalRef } from './components/root-portal/auto-portal';

export { default as AtAvatar } from './components/avatar';
export { default as AtBadge } from './components/badge';
// export { default as AtDrawer } from './components/drawer'
// export { default as AtFloatLayout } from './components/float-layout'
// export { default as AtForm } from './components/form'
// export { default as AtGrid } from './components/grid'
export { default as AtIcon } from './components/icon';
// export { default as AtInput } from './components/input'
// export { default as AtList } from './components/list'
// export { default as AtListItem } from './components/list/item'
// export { default as AtModal } from './components/modal'
// export { default as AtModalHeader } from './components/modal/header'
// export { default as AtModalContent } from './components/modal/content'
// export { default as AtModalAction } from './components/modal/action'
// export { default as AtNavBar } from './components/nav-bar'
export { default as AtNoticebar } from './components/noticebar';
// export { default as AtPagination } from './components/pagination'
// export { default as AtProgress } from './components/progress'
// export { default as AtSegmentedControl } from './components/segmented-control'
// export { default as AtTabBar } from './components/tab-bar'
// export { default as AtTabs } from './components/tabs'
// export { default as AtTabsPane } from './components/tabs-pane'
export { default as AtTag } from './components/tag';
// export { default as AtTextarea } from './components/textarea'
// export { default as AtTimeline } from './components/timeline'
// export { default as AtToast } from './components/toast'
// export { default as AtAccordion } from './components/accordion'
// export { default as AtSwipeAction } from './components/swipe-action'
// export { default as AtLoadMore } from './components/load-more'
// export { default as AtCountdown } from './components/countdown'
// export { default as AtSteps } from './components/steps'
// export { default as AtCurtain } from './components/curtain'
// export { default as AtMessage } from './components/message'
// export { default as AtImagePicker } from './components/image-picker'
// export { default as AtRange } from './components/range'
// export { default as AtIndexes } from './components/indexes'
// export { default as AtFab } from './components/fab'

/* 私有的组件  */
// export { default as AtLoading } from './components/loading'
// export { default as AtComponent } from './common/component'

export { default as Text } from './components/base/Text';
export { default as Image } from './components/base/Image';
export { default as ImageBackground } from './components/base/ImageBackground';
export { default as View } from './components/base/View';
export { default as ScrollView } from './components/base/ScrollView';

export { default as Sortable } from './components/sortable';

export { default as Page } from './components/base/Layout/Page';
export { default as Modal } from './components/base/Modal';
export { default as AutoList } from './components/base/List/AutoList';

export { default as Component } from './components/base/Layout/Component';
export { SlotRender } from './components/slot-render';

export const Video = TVideo;
export const WebView = TWebView;
export const Canvas = TCanvas;
export const RichText = TRichText;

export {
  addPortal,
  removePortal,
  registerPartalComponent,
  showComponentModal,
  renderComponentPortal,
  renderComponent,
} from './components/root-portal/auto-portal';

export const getComponent = (componentName: string) => {
  const PartalComponent = portalRef.componentMap[componentName];
  if (!PartalComponent) throw new Error(`${componentName} is not registered`);
  return PartalComponent;
};

// export { event } from './utils/event';

export { default as withRouter } from './components/react-router/withRouter';

configure({ isolateGlobalState: true });
