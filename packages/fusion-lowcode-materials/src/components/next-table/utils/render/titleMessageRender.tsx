import { Balloon, Icon } from '@alifd/next';
import React, { ReactNode } from 'react';
export default function titleMessageRender(title: ReactNode, message: ReactNode, prefix?: string) {
  if (!message) {
    return title;
  } else {
    return <span className={`${prefix}column-title`}>
      {title}
      <Balloon.Tooltip
        trigger={<Icon type="prompt-filling" className={`${prefix}column-tooltip`} size="small" />}
        align="t"
      >
        {message}
      </Balloon.Tooltip>
    </span>
  }
}