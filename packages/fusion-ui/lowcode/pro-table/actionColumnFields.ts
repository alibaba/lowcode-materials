import { IProps } from '../types/index';
import { buttonGroupConfigureProp } from '../common/button-groups';

export const actionColumnField: IProps = {
  name: 'actionColumnProps',
  title: '操作列',
  extraProps: {
    display: 'accordion',
    defaultCollapsed: true,
  },
  setter: {
    componentName: 'ObjectSetter',
    props: {
      display: 'drawer',
      config: {
        items: [
          {
            name: 'title',
            title: '标题',
            extraProps: {
              display: 'inline',
              defaultValue: '操作',
            },
            setter: {
              componentName: 'StringSetter',
            },
          },
          {
            type: 'field',
            name: 'width',
            title: '宽度',
            extraProps: {
              display: 'inline',
              defaultValue: 120,
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                units: 'px',
              },
            },
          },
          {
            name: 'lock',
            title: '锁列',
            display: 'inline',
            initialValue: 'none',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '左侧',
                    value: 'left',
                    tip: 'left',
                  },
                  {
                    title: '不锁',
                    value: 'none',
                    tip: 'none',
                  },
                  {
                    title: '右侧',
                    value: 'right',
                    tip: 'right',
                  },
                ],
                compact: false,
              },
            },
          },
        ],
      },
    },
  },
};
export const actionColumnButtonField: IProps = {
  ...buttonGroupConfigureProp,
  name: 'actionColumnButtons',
  title: '操作列按钮',
};
