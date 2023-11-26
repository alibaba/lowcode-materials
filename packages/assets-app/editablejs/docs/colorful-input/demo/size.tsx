import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ColorfulInput } from 'editablejs';

export default { title: 'ColorfulInput' };

export const Size = () => {

  return (
    <div>
      Size demo
      <ColorfulInput size="large"/>
    </div>
  );
}

Size.storyName = '尺寸';
Size.desc = '多彩按钮的用法，ColorfulInput演示自己控制数据的用法。`code`试一下能不能用';

