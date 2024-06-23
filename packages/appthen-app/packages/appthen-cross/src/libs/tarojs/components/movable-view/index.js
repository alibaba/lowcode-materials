import React from 'react'

class MovableView extends React.Component {
  componentDidMount () {
    // console.error('H5 暂不支持 MovableView 组件！')
  }

  render () {
    const { ...reset } = this.props
    return <div {...reset}>{this.props.children}</div>
  }
}

class MovableArea extends React.Component {
  componentDidMount () {
    // console.error('H5 暂不支持 MovableArea 组件！')
  }

  render () {
    const { ...reset } = this.props
    return <div {...reset}>{this.props.children}</div>
  }
}

export { MovableArea, MovableView }