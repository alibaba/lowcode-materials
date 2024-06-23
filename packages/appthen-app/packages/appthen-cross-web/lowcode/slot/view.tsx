import { Component } from 'react';

class Slot extends Component {
  static displayName = 'SlotRender';

  static componentMetadata = {
    componentName: 'SlotRender',
    configure: {
      props: [
        {
          name: 'children',
          title: {
            type: 'i18n',
            'en-US': 'Field',
            'zh-CN': '属性绑定',
          },
          type: 'field',
          setter: 'ExpressionSetter',
        },
      ],
      component: {
        isContainer: true,
      },
      // events/className/style/general/directives
      supports: false,
    },
  };

  render() {
    const { children } = this.props;
    // @ts-ignore
    return <>{children}</>;
  }
}

export default Slot;
