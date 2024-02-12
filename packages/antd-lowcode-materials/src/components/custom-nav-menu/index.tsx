import React, { Ref } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';


const customNav: any = (props: any, ref: Ref<any>) => {
  const {items,icon,svg,...otherProps} = props

  const IconFont = createFromIconfontCN({
    scriptUrl: icon?.url,
  });


  


  function renderMenuItems(data) {

    if (!Array.isArray(data) || data.length === 0) {
      return null; // 或者返回一个默认的菜单项
    }
    
    return     data?.map(item => {
      if (item.children) {
        return (
          <Menu.SubMenu  key={item.key} title={item.label} icon={svg ?<span  style={icon?.style } dangerouslySetInnerHTML={{ __html: item?.icon }} /> : <IconFont type={item?.icon} style={icon?.style} />}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return <Menu.Item key={item.key} icon={svg ?<span  style={icon?.style } dangerouslySetInnerHTML={{ __html: item?.icon }} /> : <IconFont type={item?.icon} style={icon?.style} />}>{item.label}</Menu.Item>;
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

