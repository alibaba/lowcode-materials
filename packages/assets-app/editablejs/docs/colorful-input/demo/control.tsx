import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ColorfulInput } from 'editablejs';

export default { title: 'ColorfulInput' };

export const Control = () => {

  return (
    <div>
      Control demo
      <ColorfulInput value="control"/>
    </div>
  );
}

Control.storyName = '受控用法';
Control.desc = '多彩按钮的受控用法，ColorfulInput演示自己控制数据的用法。`code`试一下能不能用';

