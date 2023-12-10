import React, { CSSProperties, useMemo, useState } from 'react'
import naturalCompare from 'string-natural-compare'
import Editor from '@alilc/lowcode-plugin-base-monaco-editor'
import '@alilc/lowcode-plugin-base-monaco-editor/lib/style'
import { Tree } from 'antd'
import { DataNode, TreeProps } from 'antd/lib/tree'
import './index.less'
import { Code, IFile } from '../../types'

interface ISourceViewProps {
  code?: Code
  height?: CSSProperties['height']
}

const SourceView: React.FC<ISourceViewProps> = ({ code, height }) => {
  const [state, setState] = useState(() => {
    const allFiles = Object.values(code?.modules)
    const currentFile = [
      allFiles.find((val) => /pages.+(js|ts)x?$/.test(val.fpath)),
      allFiles.find((val) => val.entry)
    ].filter(Boolean)[0]
    return {
      currentFile,
      selectedKeys: currentFile?.fpath ? [currentFile.fpath] : undefined
    }
  })

  function calcHeightInPx(height) {
    const div = document.createElement('div')
    div.setAttribute(
      'style',
      'position:fixed;top:0;left:0;width:0;height:' + height + ';'
    )
    document.body.appendChild(div)
    return Number(div.getBoundingClientRect().height.toFixed(0))
  }

  const addFileToNodes = (
    currentNodes: DataNode[],
    basePath: string,
    path: string,
    file: IFile
  ) => {
    const pathArr = path.split('/').filter(Boolean)
    const head = pathArr[0]
    const tail = pathArr.slice(1)
    if (!tail.length) {
      currentNodes.push({
        title: head,
        key: file.fpath,
        children: [],
        icon: null // TODO: 后续再把这个icon加上吧
      })
    } else {
      let parentNode = currentNodes.find((node) => node.title === head)
      if (!parentNode) {
        parentNode = {
          title: head,
          key: `${basePath}/${head}`,
          children: [],
          icon: null
        }
        currentNodes.push(parentNode)
      }
      parentNode.children = parentNode.children || []
      addFileToNodes(
        parentNode.children,
        `${basePath}/${head}`,
        tail.join('/'),
        file
      )
    }
  }

  // 对节点排序
  const sortNodes = (nodes: DataNode[]) => {
    return nodes
      .sort((aNode, bNode) => {
        const aChildren = aNode.children
        const bChildren = bNode.children
        if (
          Array.isArray(aChildren) &&
          aChildren.length &&
          !(Array.isArray(bChildren) && bChildren.length)
        ) {
          // 将a节点放到b节点之前
          return -1
        }
        if (
          Array.isArray(bChildren) &&
          bChildren.length &&
          !(Array.isArray(aChildren) && aChildren.length)
        ) {
          // 将b节点放到a节点之前
          return 1
        }
        return naturalCompare(aNode.title, bNode.title)
      })
      .map((node) => {
        if (Array.isArray(node?.children) && node.children.length) {
          node.children = sortNodes(node.children)
        }
        return node
      })
  }

  const fileTreeNodes: DataNode[] = useMemo(() => {
    const files = Object.values(code.modules)
    const rootNodes: DataNode[] = []
    files.forEach((file) => addFileToNodes(rootNodes, '/', file.fpath, file))
    return sortNodes(rootNodes)
  }, [code])

  const defaultExpandedKeys = useMemo(() => {
    return Array.from(
      new Set(
        [].concat(
          fileTreeNodes
            .filter(
              (node) => Array.isArray(node?.children) && node.children.length
            )
            .map((node) => node.key),
          state.selectedKeys,
          ['src', 'src/pages']
        )
      ).values()
    )
  }, [fileTreeNodes, state.selectedKeys])

  function getFileLanguage(path: string) {
    switch ((path || '').split('.').pop()) {
      case 'ts':
      case 'tsx':
        return 'typescript'
      case 'js':
      case 'jsx':
        return 'javascript'
      case 'css':
        return 'css'
      case 'scss':
        return 'scss'
      case 'less':
        return 'less'
      case 'json':
        return 'json'
      case 'md':
        return 'markdown'
      case 'html':
        return 'html'
      default:
        return 'text'
    }
  }

  const handleSelect: TreeProps['onSelect'] = (selectedKeys: string[]) => {
    setState((prev) => {
      return {
        selectedKeys,
        currentFile: code.modules[selectedKeys[0]] || prev.currentFile
      }
    })
  }

  return (
    <div className="code-gen-sources-view" style={{ height }}>
      <div className="tree-pane">
        <Tree treeData={fileTreeNodes} onSelect={handleSelect} />
      </div>
      <div className="source-code-pane">
        <Editor
          height={calcHeightInPx(height) - 2}
          language={getFileLanguage(state.currentFile.fpath)}
          defaultValue={
            typeof state.currentFile?.code === 'string'
              ? state.currentFile.code
              : undefined
          }
          path={state.currentFile?.fpath || undefined}
        />
      </div>
    </div>
  )
}

export default SourceView
