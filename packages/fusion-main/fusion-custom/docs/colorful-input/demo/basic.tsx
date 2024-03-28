import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ColorfulInput } from 'customMaterial';

export default { title: 'ColorfulInput' };

export const Basic = () => {

  return (
    <div>
      basic demo
      <ColorfulInput color="orange"/>
    </div>
  );
}

Basic.storyName = '基础用法';
Basic.desc = '多彩按钮的基础用法，ColorfulInput`code`试一下能不能用';
