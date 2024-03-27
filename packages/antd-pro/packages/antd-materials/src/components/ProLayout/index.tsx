import { ProLayout, SettingDrawer } from '@ant-design/pro-components'
import { ProConfigProvider } from '@ant-design/pro-provider'
import React, { useState } from 'react'

import { ProSettings } from '@ant-design/pro-components'

export default props => {
  const [pathname, setPathname] = useState(props?.location?.pathname)
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
    props?.settingsdata || {}
  )

  const content = () => {
    return props?.content
  }

  return (
    <ProConfigProvider dark={props?.dark}>
      <ProLayout
        prefixCls="my-prefix"
        {...props}
        {...settings}
        splitMenus
        location={{
          pathname
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome')
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
            onSettingChange={changeSetting => {
              setSetting(changeSetting)
            }}
            // disableUrlParams={false}
          />
        )}
      </ProLayout>
    </ProConfigProvider>
  )
}
