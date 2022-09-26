---
title: Link
order: 1
---

超链接组件。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@alilc/lowcode-materials';

class App extends Component {
  render() {
    return (
      <div className="mock-body">
        <Link>这是一个超链接</Link>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
