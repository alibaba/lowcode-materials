---
title: NoteWrapper
order: 4
---

备注容器组件

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NoteWrapper } from '@ali/ali-lowcode-materials';

class App extends Component {
  render() {
    return (
      <div>
        <NoteWrapper note="这是一个备注">hello world</NoteWrapper>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
