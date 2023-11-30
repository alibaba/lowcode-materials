import React, { Ref } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';


const customNav: any = (props: any, ref: Ref<any>) => {
  const {items,icon,...otherProps} = props

  const IconFont = createFromIconfontCN({
    scriptUrl: icon?.url,
  });

  function renderMenuItems(data) {
    return data.map(item => {
      if (item.children) {
        return (
          <Menu.SubMenu  key={item.key} title={item.label} icon={ <IconFont type={item?.icon} style={icon?.style} />}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return <Menu.Item key={item.key} icon={ <IconFont type={item?.icon} style={icon?.style} />}>{item.label}</Menu.Item>;
      }
    });
  }

  return (
   <Menu
    {...otherProps}
    >
        {renderMenuItems(items||[])}
      </Menu>

  );
};

  

  export default customNav;

