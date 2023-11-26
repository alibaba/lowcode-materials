import * as React from 'react';
import { createElement } from 'react';
import { Nav } from '@alifd/next';
const { Item, SubNav } = Nav;


export interface NavProps {
  /**
   * 类型
   */
  data?: 'String';
}


// export const delTreeData = (treeArr: any, id: any, parentId: any, childrenList: any) => {
//   // 数据克隆
//   let cloneData = JSON.parse(JSON.stringify(treeArr));
//   return cloneData.filter((fatherItem: any) => {
//     let warpArr = cloneData.filter((sonItem: any) => fatherItem[id] == sonItem[parentId]);
//     warpArr.length ? (fatherItem[childrenList] = warpArr) : (fatherItem[childrenList] = []);
//     return !fatherItem[parentId];
//   });
// };

const navapi: React.FC<NavProps> = function NavProps(props) {

  const renderMenuData = (data: any) => {
    return data.map((item: any) => {
        if (item.children) {
          return (
            <SubNav key={item.value} label={item.label} >
              {renderMenuData(item.children)}
            </SubNav>
          );
        }
        return (
          <Item key={item.value}>
            {item.label}
          </Item>
        );
      
    });
  };

  return  (
    <Nav 
    {...props}
    >
    {props.data.length ? renderMenuData(props.data) : null}
  </Nav>
  );
};

export default navapi;
