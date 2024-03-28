import * as React from 'react';
import { Switch } from '@alifd/next';
import './style.less';

class EditorSeter extends React.Component<{
  onChange: (any) => void,
  value: boolean,
  defaultValue: boolean,
}> {
  static displayName = 'EditorSeter';

  render() {
    const { onChange, value, defaultValue } = this.props;
    const props: any = {
      defaultChecked: defaultValue,
      onChange,
    };
    if (typeof value !== 'undefined') {
      props.checked = value;
    }
    return <Switch {...props} className="lowcode-setter-@Appthen/editorSeter" />;
  }
}

export default EditorSeter;
