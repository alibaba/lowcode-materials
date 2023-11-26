import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ColorfulButton } from 'editablejs';

export default { title: 'ColorfulButton' };

export const Size = () => {

  return (
    <div>
      Size demo
      <ColorfulButton size="large" color="yellow"/>
    </div>
  );
}

Size.storyName = '尺寸';
Size.desc = '多彩按钮的用法，演示自己控制数据的用法。`code`试一下能不能用';

