import React, { FC, useState, useCallback } from 'react'
import { Drawer, Button, Spin } from 'antd'
import { event } from '@alilc/lowcode-engine'
import './index.less'
import ReactRenderer from '@alilc/lowcode-react-renderer'
import {
  buildComponents,
  assetBundle,
  AssetLevel,
  AssetLoader
} from '@alilc/lowcode-utils'
import { injectComponents } from '@alilc/lowcode-plugin-inject'
import { getProjectSchema, getPagePackages } from '../../../../helper'

const Renderer: FC = () => {
  const [data, setData] = useState<any>({})

  async function init() {
    const packages = getPagePackages()
    const projectSchema = getProjectSchema()

    const { componentsMap: componentsMapArray, componentsTree } = projectSchema

    const componentsMap: any = {}

    componentsMapArray.forEach((component: any) => {
      componentsMap[component.componentName] = component
    })

    const schema = componentsTree[0]

    const libraryMap = {}
    const libraryAsset = []
    packages.forEach(({ package: _package, library, urls, renderUrls }) => {
      libraryMap[_package] = library
      if (renderUrls) {
        libraryAsset.push(renderUrls)
      } else if (urls) {
        libraryAsset.push(urls)
      }
    })

    const vendors = [assetBundle(libraryAsset, AssetLevel.Library)]

    // TODO asset may cause pollution
    const assetLoader = new AssetLoader()
    await assetLoader.load(libraryAsset)
    const components = await injectComponents(
      buildComponents(libraryMap, componentsMap)
    )

    setData({
      schema,
      components
    })
  }

  const { schema, components } = data

  if (!schema || !components) {
    init()
    return <Spin />
  }

  return (
    <ReactRenderer schema={schema} components={components} appHelper={{}} />
  )
}

export const PreviewModal: FC = () => {
  const [visible, setVisible] = useState(false)

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  const openModal = useCallback(() => {
    event.emit('save')
    setVisible(true)
  }, [])

  return (
    <React.Fragment>
      <Button onClick={openModal} style={{ marginRight: '8px' }}>
        预览
      </Button>
      {visible && (
        <Drawer
          destroyOnClose
          title="本地预览"
          visible={visible}
          onClose={closeModal}
          width="94vw"
          bodyStyle={{ padding: 0 }}
          footer={null}
        >
          <Renderer />
        </Drawer>
      )}
    </React.Fragment>
  )
}
