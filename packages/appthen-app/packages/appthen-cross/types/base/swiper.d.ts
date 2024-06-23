import { CSSProperties, ComponentClass } from "react"

export type EventOnChange = {
  detail: {
    current: number
  }
}

export type EventOnAnimationFinish = {
  detail: {
    current: number
  }
}

export interface SwiperItemProps {
  children?: React.ReactNode;
  style?: any;
}

export interface ISwiperProps {
  children?: React.ReactNode;
  style?: any;

  /** 是否显示指示点 */
  indicatorDots?: boolean;
  indicatorColor: string;
  indicatorActiveColor: string;
  /** 自动播放 */
  autoplay?: boolean;
  /** 自动播放间隔时间 */
  interval?: number;
  /** 滑动动画时长 */
  duration?: number;
  /**	当前所在滑块的 index */
  current: number;
  /** 是否采用衔接滑动 */
  circular?: boolean;
  /** 是否垂直滑动 */
  vertical?: boolean;
  onChange?: (evt: EventOnChange) => void;
  onAnimationFinish?: (evt: EventOnAnimationFinish) => void;
}


declare const Swiper: ComponentClass<ISwiperProps>;

export default Swiper;

