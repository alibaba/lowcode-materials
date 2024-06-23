// import { useRouter } from '@tarojs/taro'
// import { createPortal } from "@tarojs/react";
// import { useLayoutEffect, useState } from "react";

// const RootPortal = ({ children, enable = true }) => {
//   const router = useRouter() as any;
//   const [dom, setDom] = useState<HTMLElement | null>()

//   useLayoutEffect(() => {
//     const _dom = document.getElementById(router.$taroPath);
//     _dom && setDom(_dom)
//   }, [router.$taroPath])

//   return (enable && dom) ? createPortal(children, dom) : children
// }

// export default RootPortal