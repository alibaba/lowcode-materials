## 何时使用

ColumnChart 的基础用法。

## 示例

```tsx
import React from 'react';

import { ColumnChart } from '@alifd/fusion-ui';

const props = {
  data: [
    { year: '1991', value: 72345678 },
    { year: '1992', value: 4321132 },
    { year: '1993', value: 33121112.5 },
    { year: '1994', value: 45227221 },
    { year: '1995', value: 4321221.9 },
    { year: '1996', value: 6322121 },
    { year: '1997', value: 78312213 },
    { year: '1998', value: 4192312 },
    { year: '1999', value: 6212332 },
    { year: '2000', value: 3192312 },
  ],
  xField: 'year',
  yField: 'value',
  color: '#0079f2',
  label: {
    visible: true,
    position: 'middle',
  },
};

export default () => {
  return (
    <div>
      basic demo
      <ColumnChart {...props} />
    </div>
  );
};
```

## API

<API hideTitle src="@/components/column-chart/index.tsx" />
