import React, { useEffect, useMemo, useState } from 'react'
import { Button, Collapse, Divider, Empty, Modal, Popconfirm } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { isArr, isStr } from '@formily/shared'
import { createForm } from '@formily/core'
import { Form } from '@formily/antd'
import { cloneDeep } from 'lodash'
import { SchemaField } from './components/SchemaField'
import { Header } from './components/Header'
import { ActionType, IAction, IEventsSetterProps } from './types'
import { builtInActions, customActions } from './const'
import './index.less'

const { Panel } = Collapse

/**
 * 事件属性配置组件，支持在一个事件中配置多个动作
 * @param props
 * @returns
 */
const EventsSetter: React.FC<IEventsSetterProps> = ({
  value,
  definition,
  onChange
}) => {
  const [selectedEvent, setSelectedEvent] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const [selectedAction, setSelectedAction] = useState<IAction>()
  const [events, setEvents] = useState<
    Array<string | { label: string; value: string }>
  >([])
  const [curEditIndex, setCurEditIndex] = useState<number>(-1)

  const form = useMemo(
    () =>
      createForm({
        values: selectedAction?.value
      }),
    [selectedAction]
  )

  useEffect(() => {
    // 初始化事件列表
    if (!Array.isArray(definition) || !definition.length) return
    setEvents(
      definition.reduce((prev, val) => {
        return prev.concat(val.list.map((item) => item.name))
      }, [])
    )
  }, [])

  useEffect(() => {
    if (!visible) {
      resetModal()
    }
  }, [visible])

  const resetModal = () => {
    setSelectedAction(null)
    setSelectedEvent('')
    setCurEditIndex(-1)
  }

  /**
   * 显示事件配置modal
   */
  const showModal = () => {
    setVisible(true)
  }

  const handleEditAction = (
    eventName: string,
    index: number,
    action: IAction
  ) => {
    setSelectedEvent(eventName)
    setSelectedAction(action)
    setCurEditIndex(index)
    showModal()
  }

  const handleRemoveAction = (eventIdx: number, actionIdx: number) => {
    const copied = cloneDeep(value)
    copied[eventIdx].actions.splice(actionIdx)
    if (!copied[eventIdx].actions.length) {
      // 如果把所有的动作都删除了，这个事件也删除掉
      copied.splice(eventIdx)
    }
    onChange?.(copied)
  }

  /**
   * 渲染已经配置的动作列表
   */
  const renderActionList = () => {
    if (!isArr(value) || !value.length) {
      return (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据" />
      )
    }
    return (
      <Collapse>
        {value.map((item, eventIdx) => {
          const { eventName, actions } = item
          return (
            <Panel header={eventName} key={`event_${eventName}`}>
              {actions.map((action, actionIdx) => {
                const { name } = action
                return (
                  <div className="action-item" key={`action_${name}`}>
                    <div className="action-item__label">{action.name}</div>
                    <div className="action-item__action">
                      <EditOutlined
                        onClick={() =>
                          handleEditAction(eventName, actionIdx, action)
                        }
                      />
                      <Popconfirm
                        title="确认删除吗?"
                        placement="topRight"
                        onConfirm={(e) => {
                          e.stopPropagation()
                          handleRemoveAction(eventIdx, actionIdx)
                        }}
                      >
                        <DeleteOutlined />
                      </Popconfirm>
                    </div>
                  </div>
                )
              })}
            </Panel>
          )
        })}
      </Collapse>
    )
  }

  const handleSelectEvent = (eventName: string) => {
    setSelectedEvent(eventName)
  }

  /**
   * 选中动作触发
   * @param action 动作数据
   */
  const handleSelectAction = (action: IAction) => {
    setSelectedAction(action)
  }

  const hideModal = () => {
    setVisible(false)
  }

  const handleOk = async () => {
    // 校验表单
    try {
      await form.validate()
      // 校验通过
      const { values } = form
      const action: IAction = { ...selectedAction, value: { ...values } }
      const copied = cloneDeep(value) || []
      const idx = copied.findIndex((val) => val.eventName === selectedEvent)
      if (idx === -1) {
        // 新增一个事件
        copied.push({
          eventName: selectedEvent,
          actions: [action]
        })
        onChange?.(copied)
        hideModal()
        return
      }
      if (curEditIndex === -1) {
        // 往对应事件添加一个动作
        copied[idx].actions.push(action)
      } else {
        // 此时是编辑动作，修改curEditIndex的值
        copied[idx].actions[curEditIndex] = action
      }
      onChange?.(copied)
      hideModal()
    } catch (e) {
      console.error('校验失败：', e)
    }
  }

  return (
    <>
      <div className="lc-block-setter">
        <div className="action-list">{renderActionList()}</div>
        <Button type="primary" block onClick={() => showModal()}>
          <PlusOutlined />
          添加动作
        </Button>
      </div>
      <Modal
        visible={visible}
        maskClosable={false}
        title="事件配置"
        onCancel={hideModal}
        onOk={handleOk}
        className="events-setter-modal"
        width={1060}
        okButtonProps={{ disabled: !selectedEvent || !selectedAction }}
        okText="确定"
        cancelText="取消"
      >
        <div className="events-setter__left">
          <Header title="1.触发事件" />
          {events.length ? (
            <ul className="list">
              {events.map((item) => {
                const key = isStr(item) ? item : item.value
                return (
                  <li
                    className={`${selectedEvent === key ? 'is-selected' : ''}`}
                    key={key}
                    onClick={() => handleSelectEvent(key)}
                  >
                    <strong>{isStr(item) ? item : item.label}</strong>
                  </li>
                )
              })}
            </ul>
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="暂无可配置事件"
            />
          )}
        </div>
        <div className="events-setter__middle">
          <Header title="2.执行动作" />
          {/* 选中了触发事件才显示动作列表 */}
          {selectedEvent ? (
            <div className="list-container">
              <ul className="list">
                {/* 这里显示内置事件 */}
                {builtInActions.map((item) => {
                  const { name, desc } = item
                  const { name: selectedActionName, type } =
                    selectedAction || {}
                  return (
                    <li
                      className={`${
                        type === ActionType.BuiltIn &&
                        selectedActionName === name
                          ? 'is-selected'
                          : ''
                      }`}
                      onClick={() => handleSelectAction(item)}
                      key={`built_in_${name}`}
                    >
                      {desc || name}
                    </li>
                  )
                })}
              </ul>
              <Divider className="action-divider" />
              <ul className="list">
                {/* 这里显示自定义事件 */}
                <li
                  className={`${
                    selectedAction?.type === ActionType.Custom
                      ? 'is-selected'
                      : ''
                  }`}
                  onClick={() => handleSelectAction(customActions[0])}
                >
                  自定义代码
                </li>
              </ul>
            </div>
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="请选择触发事件"
            />
          )}
        </div>
        <div className="events-setter__right">
          <Header title="3.参数/代码配置" />
          {!selectedAction?.params ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={!selectedAction ? '请选择执行动作' : '暂无配置项'}
            />
          ) : (
            <div className="config-container">
              <Form form={form} labelAlign="left" size="small" labelWidth={80}>
                <SchemaField
                  components={{ Empty }}
                  schema={selectedAction?.params || {}}
                />
              </Form>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

EventsSetter.displayName = 'EventsSetter'

export default EventsSetter
