---
title: Video
order: 3
---

视频组件。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Video } from '@ali/ali-lowcode-materials';

class App extends Component {
  render() {
    return (
      <div>
        <Video loop width="600" muted />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
