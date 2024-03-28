import { ProjectSchema } from '@alilc/lowcode-types'
import { cloneDeep } from 'lodash'
import coerce from 'semver/functions/coerce'

/**
 * 修正schema，添加一些额外信息，否则信息不足会导致出码方法报错
 * @param schema 源schema
 * @returns
 */
export function fixSchema(schema: ProjectSchema): ProjectSchema {
  const copied = cloneDeep(schema)
  copied.componentsMap = copied.componentsMap
    // 去掉没有package的组件
    .filter((item) => item['package'])
    .map((item) => {
      // 修正版本号，对于没有有效版本号的组件，默认使用latest
      return item
    })
  copied.componentsTree[0].meta = {
    title: '测试',
    router: '/test',
    ...copied.componentsTree[0].meta
  }
  copied.componentsTree[0].fileName =
    copied.componentsTree[0].fileName || 'test'
  return copied
}

export async function createCodeSandbox(parameters) {
  const res = await fetch(
    'https://codesandbox.io/api/v1/sandboxes/define?json=1',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(parameters)
    }
  )
  return res.json()
}

export function isValidVersion(version) {
  if (
    !version ||
    version === '{{version}}' ||
    version === 'null' ||
    version === 'undefined'
  ) {
    return false
  }
  // 对于 latest/beta/rc 这样的 tag 版本号要支持下
  if (/^[a-z][a-z0-9]+([a-z0-9-]+)?$/i.test(version)) {
    return true
  }
  // 支持所有 semver 能识别的版本
  return coerce(version) !== null
}

export function pickKeys(data, keys) {
  return keys.reduce(function (acc, key) {
    if (data[key]) {
      return {
        ...acc,
        [key]: data[key]
      }
    }
    return acc
  }, {})
}
