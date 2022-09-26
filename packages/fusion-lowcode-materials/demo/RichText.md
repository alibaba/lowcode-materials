---
title: RichText
order: 3
---

需求占位组件

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { RichText } from '@alilc/lowcode-materials';

class App extends Component {
  render() {
    return (
      <div>
        <RichText
          maxHeight="300px"
          content='<div><span style="font-size: 18pt; color: #333;"><strong>需求占位</strong></span></div><div><span>- 你可以在这里描述需求</span><br /><span>- 或者粘贴需求截图</span></div>'
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
