import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import {AiEditor} from "aieditor";
// import "aieditor/dist/style.css;

interface aiEditorComponentProps {
  title: string;
  content: string;
}

const aiEditorComponent = (props: aiEditorComponentProps, ref: any) => {
  const { title, content, ...others } = props;
 //定义 ref
 const divRef = React.useRef(null);

 //初始化 AiEditor
 React.useEffect(() => {
     if (divRef.current) {
         const aiEditor = new AiEditor({
             element: divRef.current,
             placeholder: "点击输入内容...",
             content: 'AiEditor 是一个面向 AI 的开源富文本编辑器。 ',
         })
         return ()=>{
             aiEditor.destroy();
         }
     }
 }, [])

  return (
    <>
    <div>
        <h1>AiEditor，一个面向 AI 的富文本编辑器</h1>
    </div>
    <div ref={divRef} style={{height: "600px"}} />
</>
  );
};

const RefaiEditorComponent = forwardRef(aiEditorComponent as ForwardRefRenderFunction<any, aiEditorComponentProps>);
RefaiEditorComponent.displayName = 'RefaiEditorComponent';

export default RefaiEditorComponent;
