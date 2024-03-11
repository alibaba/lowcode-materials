import React from 'react';
import { TreeSelect as OriginTreeSelect } from 'antd';
import * as icons from '@ant-design/icons';

const CustomTreeSelect: any = (props: any) => {
  const {icon,...otherProps} = props

  const data = otherProps?.treeData ||[]

  function processMenuItems(menuItems) {
    return menuItems?.map((item:any) => {

      const menuItem={...item };
      // 处理当前菜单项
      if (menuItem?.icon) {
        const IconComp = ((icons || {}) as any)[menuItem?.icon];
        if (IconComp){
          menuItem.icon =  <IconComp {...icon} />;
        }else{
          menuItem.icon =  '';

        }
      }
      // 处理子菜单项
      if (menuItem?.children) {
        menuItem.children = processMenuItems(menuItem.children);
      }
      return menuItem;
    });
  }
  const newdata = processMenuItems(data);
  otherProps.treeData = newdata;


  return <OriginTreeSelect {...props} />;
};

export default CustomTreeSelect;
