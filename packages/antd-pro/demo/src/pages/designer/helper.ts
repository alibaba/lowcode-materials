import { material, project } from '@alilc/lowcode-engine'
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { TransformStage } from '@alilc/lowcode-types'
import { message } from 'antd'
import schemaJSON from './schema.json'

/**
 * 将schema和package保存到本地localStorage
 */
export const saveSchema = async () => {
  // 保存schema到localStorage
  window.localStorage.setItem(
    'schema',
    JSON.stringify(project.exportSchema(TransformStage.Save))
  )
  // 保存packages到localStorage
  const packages = await filterPackages(material.getAssets().packages)
  window.localStorage.setItem('packages', JSON.stringify(packages))
  message.success('保存成功')
}

export const getPagePackages = () => {
  return JSON.parse(window.localStorage.getItem('packages') || '{}')
}

export const getProjectSchema = () => {
  return JSON.parse(window.localStorage.getItem('schema') || '{}')
}

/**
 * 获取页面schema，用于初始化
 */
export const getPageSchema = () => {
  const localSchema = getProjectSchema()
  const pageSchema = localSchema?.componentsTree?.[0] || schemaJSON
  return pageSchema
}
