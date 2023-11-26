import { hideProp } from '../utils';
import {customButton} from './button';

export const operationConfig = {
  name: 'operationConfig',
  display: 'accordion',
  title: '底部操作',
  setter: {
    componentName: 'ObjectSetter',
    props: {
      config: {
        items: [
          {
            name: 'visibleButtonCount',
            title: {
              label: '可见数量',
              tip: '超过会收起到”更多“菜单中',
            },
            extraProps: {
              defaultValue: 3,
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                max: 6,
                min: 1,
              },
            },
          },
          {
            name: 'fixed',
            title: '吸底',
            setter: 'BoolSetter',
          },
          {
            name: 'showSaveTime',
            title: '显示时间',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'align',
            title: '布局',
            defaultValue: 'center',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '居左',
                    value: 'left',
                  },
                  {
                    title: '居中',
                    value: 'center',
                  },
                  {
                    title: '居右',
                    value: 'right',
                  },
                ],
              },
            },
          },
        ],
      },
    },
  },
};

export const operations = {
  name: 'operations',
  display: 'block',
  title: '操作项',
  getValue: (target, value) => {
    return value || [];
  },
  setter: {
    componentName: 'MixedSetter',
    props: {
      setters: [
        {
          componentName: 'SlotSetter',
          defaultValue: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'Box',
              },
            ],
          },
        },
        customButton,
      ],
    },
  },
};

export const operationProps = [operationConfig, operations];
