import { ComponentClass } from "react";

export interface IImageProps {
  src: string;
  className?: string;
  style?: any;
  fit?: boolean;

  /* 远程图片（不出码到本地） */
  remote?: boolean;
}

declare const Image: ComponentClass<IImageProps>

export default Image
