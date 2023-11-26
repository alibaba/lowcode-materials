import * as React from 'react';
import { bizCssPrefix } from '../../variables';
import { createElement } from 'react';
import { HexColorPicker } from "react-colorful";


export interface ColorfulProps {
  colors?: 'string';
  onChange?: (value: string) => void;
}

const Colorful: React.FC<ColorfulProps> = function ColorfulProps({
  colors,
  onChange
}) {

  return (<div><HexColorPicker color={colors
  }  onChange={onChange} /></div>);

};

export default Colorful;
