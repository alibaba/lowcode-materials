import {
  Picker as TPicker,
  Swiper as TSwiper,
  SwiperItem as TSwiperItem,
  PickerView as TPickerView,
  PickerViewColumn as IPickerViewColumn,
  Switch as TSwitch,
  Video as TVideo,
  WebView as TWebView,
  RichText as TRichText,
} from '@tarojs/components';
import { configure } from 'mobx';

// export { default as AtActionSheet } from './components/action-sheet'
// export { default as AtActionSheetItem } from './components/action-sheet/body/item'
export { default as AtActivityIndicator } from './components/activity-indicator'
export { default as AtAvatar } from './components/avatar'
// export { default as AtBadge } from './components/badge'
export { default as AtButton } from './components/button'
// export { default as AtCard } from './components/card'
export { default as AtCheckbox } from './components/checkbox'
// export { default as AtDrawer } from './components/drawer'
// export { default as AtFloatLayout } from './components/float-layout'
// export { default as AtForm } from './components/form'
// export { default as AtGrid } from './components/grid'
export { default as AtIcon } from './components/icon'
// export { default as AtInput } from './components/input'
export { default as AtInputNumber } from './components/input-number'
// export { default as AtList } from './components/list'
// export { default as AtListItem } from './components/list/item'
// export { default as AtModal } from './components/modal'
// export { default as AtModalHeader } from './components/modal/header'
// export { default as AtModalContent } from './components/modal/content'
// export { default as AtModalAction } from './components/modal/action'
// export { default as AtNavBar } from './components/nav-bar'
export { default as AtNoticebar } from './components/noticebar'
// export { default as AtPagination } from './components/pagination'
// export { default as AtProgress } from './components/progress'
export { default as AtRadio } from './components/radio'
export { default as AtRate } from './components/rate'
// export { default as AtSegmentedControl } from './components/segmented-control'
// export { default as AtSwitch } from './components/switch'
// export { default as AtTabBar } from './components/tab-bar'
// export { default as AtTabs } from './components/tabs'
// export { default as AtTabsPane } from './components/tabs-pane'
export { default as AtTag } from './components/tag'
// export { default as AtTextarea } from './components/textarea'
// export { default as AtTimeline } from './components/timeline'
// export { default as AtToast } from './components/toast'
// export { default as AtAccordion } from './components/accordion'
export { default as AtSlider } from './components/slider'
export { default as AtSwipeAction } from './components/swipe-action'
export { default as AtSearchBar } from './components/search-bar'
// export { default as AtLoadMore } from './components/load-more'
export { default as AtDivider } from './components/divider'
// export { default as AtCountdown } from './components/countdown'
// export { default as AtSteps } from './components/steps'
// export { default as AtCurtain } from './components/curtain'
// export { default as AtMessage } from './components/message'
// export { default as AtImagePicker } from './components/image-picker'
// export { default as AtRange } from './components/range'
// export { default as AtIndexes } from './components/indexes'
export { default as AtCalendar } from './components/calendar'
// export { default as AtFab } from './components/fab'

// /* 私有的组件  */
// export { default as AtLoading } from './components/loading'
// export { default as AtComponent } from './common/component'


export { default as Text } from './components/base/Text';
export { default as Image } from './components/base/Image';
export { default as ImageBackground } from './components/base/ImageBackground';
export { default as View } from './components/base/View';
export { default as ScrollView } from './components/base/ScrollView';
export { default as Input } from './components/base/Form/Input';
export { default as Textarea } from './components/base/Form/Textarea';

export { default as Page } from './components/base/Layout/Page';
export { default as HeaderBar } from './components/base/Bar/HeaderBar';
export { default as SafeView } from './components/base/Bar/SafeView';
export { default as Modal } from './components/base/Modal';
export { default as TopView } from './utils/overlay/TopView';
export { default as Overlay } from './utils/overlay/Overlay';
export { default as AutoList } from './components/base/List/AutoList';

export { default as FooterBar } from './components/base/Bar/FooterBar';
export { default as TabView } from './components/base/Layout/Tabview';
export { Component } from './components/base/Layout/Component';
export const Picker = TPicker;
export const Switch = TSwitch;
export const Swiper = TSwiper;
export const SwiperItem = TSwiperItem;
export const PickerView = TPickerView;
export const PickerViewColumn = IPickerViewColumn;
export const Video = TVideo;
export const WebView = TWebView;
export const RichText = TRichText;

export { default as config } from './config';

configure({ isolateGlobalState: true });
