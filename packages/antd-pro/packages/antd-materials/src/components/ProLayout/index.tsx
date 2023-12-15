import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProLayout as ManProLayout,SettingDrawer,ProCard } from '@ant-design/pro-components';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { useState } from 'react';
import {
  ConfigProvider,

} from 'antd';
import type { ProSettings } from '@ant-design/pro-components';


import { MenuDataItem } from '@ant-design/pro-components'
export default (props) => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(props?.settingsdata ||{
  });

  // alert(props?.devops)
  // if (props?.devops){
  //   setSetting({
  //     fixSiderbar: true,
  //     layout: 'mix',
  //     splitMenus: true,
  //   })
  // }

  const content = () =>{

    return props?.content 
  }

  return (
    <ProConfigProvider  >
      <ManProLayout
      {...props}

      
      {...settings}
        // {...defaultProps}
        splitMenus
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: 'disscode',
        }}
        token={{
          header: {
            colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
          },
        }}


        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
      >

{content()}


        {!props?.devops ? null : (
  <SettingDrawer
    pathname={pathname}
    settings={settings}
    onSettingChange={(changeSetting) => {
      setSetting(changeSetting);
    }}
    disableUrlParams={false}
  />
)}
          




      </ManProLayout>
    </ProConfigProvider>
  );
};