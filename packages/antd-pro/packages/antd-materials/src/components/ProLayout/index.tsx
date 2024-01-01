import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import {  ProLayout as ManProLayout, SettingDrawer } from '@ant-design/pro-components';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { useState } from 'react';

import type { ProSettings } from '@ant-design/pro-components';


export default (props) => {
  const [pathname, setPathname] = useState('/');
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(props?.settingsdata || {
  });



  const content = () => {
    return props?.content
  }

  return (
    <ProConfigProvider  >
      <ManProLayout
        {...props}


        {...settings}
        splitMenus
        location={{
          pathname,
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