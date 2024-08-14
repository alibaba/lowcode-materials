import React, { Ref } from 'react';
import { Menu } from 'antd';
// import Icon from '@ant-design/icons/lib/components/Icon';
import * as icons from '@ant-design/icons';

const CustomNav: any = (props: any, ref: Ref<any>) => {
  const { icon, type, ...otherProps } = props;

  const data = [...otherProps?.items];

  function processMenuItems(menuItems:any) {
    return menuItems?.map((item: any) => {
      const menuItem = { ...item };
      // 处理当前菜单项
      if (menuItem?.icon) {
        const IconComp = ((icons || {}) as any)[menuItem?.icon];
        if (IconComp) {
          menuItem.icon = <IconComp {...icon} />;
        } else {
          menuItem.icon = '';
        }
      }
      // 处理子菜单项
      if (menuItem?.children) {
        menuItem.children = processMenuItems(menuItem.children);
      }
      return menuItem;
    });
  }
  otherProps.items = processMenuItems(data);

  return <Menu {...otherProps} />;
};

export default CustomNav;
