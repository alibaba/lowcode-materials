import React, { ReactNode } from 'react';
import { Select, Icon } from '@alifd/next';
import { SelectProps } from '@alifd/next/types/select';

const Option = Select.Option;

export interface IWebRowOrderProps {
  items: {
    value: string;
    text: ReactNode;
  }[];
  nextTablePrefix: any;
  defaultValue: any;
  onChange: SelectProps['onChange'];
}

export default class WebRowOrder extends React.Component<IWebRowOrderProps> {

  render() {
    const { items, nextTablePrefix, defaultValue, onChange } = this.props;

    return (
      <div className={`${nextTablePrefix}row-order`}>
        <Select defaultValue={defaultValue.value} onChange={onChange} hasBorder={false} autoWidth={false}
          hasArrow={false}
          valueRender={(item) => {
            return <span className={`${nextTablePrefix}row-order-v`}>
              <Icon type="order-by" size="small" />
              {item.label}
            </span>;
          }}>
          {
            items.map((item) => {
              return <Option key={item.value} value={item.value}>{item.text}</Option>;
            })
          }
        </Select>
      </div>
    );
  }
}
