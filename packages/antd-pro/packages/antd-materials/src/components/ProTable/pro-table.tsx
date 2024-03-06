import * as React from 'react'
import { Component, createRef } from 'react'
import {
  ProTable as OriginalProTable,
  ActionType,
  ProColumnType
} from '@ant-design/pro-components'
import type { ProFormInstance } from '@ant-design/pro-components'
import type { TablePaginationConfig } from 'antd'
import { Tag, ConfigProvider } from 'antd'
import zhCNIntl from 'antd/es/locale/zh_CN'
import enUSIntl from 'antd/es/locale/en_US'
import { defineGetterProperties, isPlainObj } from '../../shared/index'
import { FormProps } from 'rc-field-form/lib/Form'

interface IValueEnum {
  text: string
  value: string
  status: string
}

type IExtendsColType = ProColumnType & {
  valueEnum?: IValueEnum[]
  renderTag?: boolean
}

export type IProTableProps = React.ComponentProps<typeof OriginalProTable> & {
  columns?: IExtendsColType
  intl?: string
  onValuesChange?: FormProps['onValuesChange']
}

const intlMap = {
  zhCNIntl,
  enUSIntl
}

class ProTable extends Component<IProTableProps, any> {
  // pro-table 未对批量操作进行封装，自己封了
  state = {
    selectedRowKeys: (this.props.rowSelection as any)?.selectedRowKeys ?? [],
    selectedRows: [],
    collapsed:
      this.props.search === false
        ? undefined
        : this.props.search?.defaultCollapsed // 之前设置的this.props.search.collapsed会失效，但问题不大
  }

  actionRef = createRef<ActionType>()

  formRef = createRef<ProFormInstance>()

  onSelectRowsChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedRowKeys,
      selectedRows
    })
  }

  getSelectedRowKeys() {
    return this.state.selectedRowKeys
  }

  getSelectedRows() {
    return this.state.selectedRows
  }

  setSelectedRowKeys(selectedRowKeys) {
    this.setState({
      selectedRowKeys: Array.isArray(selectedRowKeys)
        ? selectedRowKeys
        : [selectedRowKeys]
    })
  }

  componentDidMount() {
    // 把操作方法挂载到 class instance 上，可通过 this.$ 调用
    defineGetterProperties(this, [this.actionRef, this.formRef])
  }

  render() {
    const { columns, rowSelection, intl, onValuesChange, toolBarRender, toolBarRenderOpen } = this.props

    const { selectedRowKeys, collapsed } = this.state

    // 劫持渲染标签类型的列
    columns?.map((item) => {
      if (isPlainObj(item.valueEnum) && (item as any).renderTag === true) {
        item.render = (_, record) => {
          const colValue = record[item.dataIndex as string]

          const target = item.valueEnum[colValue]

          return target?.text ? (
            <Tag color={target?.status?.toLowerCase()}>{target?.text}</Tag>
          ) : (
            '-'
          )
        }
      }
    })

    const pagination = this.props.pagination as TablePaginationConfig

    // current 让用户自己配置的话，用户需要自己监听 onChange 事件去修改，对低代码平台不友好
    if (typeof pagination?.current === 'number') {
      delete pagination.current
    }

    if (typeof pagination?.total === 'number') {
      delete pagination.total
    }
    let data = this.props.dataSource
    if(!Array.isArray(this.props.dataSource)){
      data = []
    }
    console.log(this.props)
    const toolBarRenderFunc = () => {
      if (toolBarRenderOpen) {
        if (toolBarRender === false) {
          return null;
        } else {
          return toolBarRender;
        }
      } else {
        return false;
      }
    };

    return (
      <ConfigProvider locale={intlMap[intl || 'zhCNIntl']}>
        <OriginalProTable
          {...this.props}
          dataSource = {data}
          search={
            typeof this.props.search === 'boolean'
              ? this.props.search
              : {
                  ...this.props.search,
                  collapsed,
                  onCollapse: () => {
                    if (this.props.search === false) return
                    this.setState({
                      collapsed: !collapsed
                    })
                    if (this.props.search.onCollapse) {
                      // 如果设置了函数则继续执行
                      this.props.search.onCollapse(!collapsed)
                    }
                  }
                }
          }
          rowSelection={
            rowSelection
              ? {
                  ...rowSelection,
                  defaultSelectedRowKeys: selectedRowKeys,
                  selectedRowKeys,
                  onChange: (...args) => {
                    rowSelection?.onChange?.(...args)
                    this.onSelectRowsChange(...args)
                  }
                }
              : false
          }
          columns={columns}
          actionRef={this.actionRef}
          formRef={this.formRef}
          form={{ onValuesChange: onValuesChange }}
          toolBarRender={toolBarRenderFunc()}
        />
      </ConfigProvider>
    )
  }
}

export default ProTable
