import ReactDOM from 'react-dom';
import { useLayoutEffect, useState } from "react";
// 此文件无用
const RootPortal = ({ children, enable = true }) => {
  const [dom, setDom] = useState<HTMLElement | null>()

  useLayoutEffect(() => {
    const _dom = document.getElementById('root');
    _dom && setDom(_dom)
  }, [])

  return (enable && dom) ? ReactDOM.createPortal(children, dom) : children
}

export default RootPortal