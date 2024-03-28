import React from "react";

export class SlotRender extends React.Component {
  render() {
    // @ts-ignore
    if (this.props.__designMode === 'design' && !this.props.children) return <div className="M-f-s-12">插槽占位</div>
    return Array.isArray(this.props.children) ? this.props.children.map((item, index) => {
      return <React.Fragment key={index}>{item}</React.Fragment> }) : this.props.children;
  }
}