import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { Boot } from '@wangeditor/editor';
import markdownModule from '@wangeditor/plugin-md';
import {  IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

Boot.registerModule(markdownModule);

export interface editorProps {

  saveField?(vditor: any): void;
  onBeforeUpload(file: any) :void;
  picture:object
}

const editorComponent = (props: editorProps, ref: any) => {
  const { onBeforeUpload,ToolBarStyle,ContentStyle,inContentStyle,toolbarConfig,editorConfig,..._otherProps } = props;
  const [editor, setEditor] = React.useState(null); // 存储 editor 实例


  function createEditor(editor: any){
    setEditor(editor)
    if (_otherProps.saveField) {
      _otherProps.saveField(editor);      
    }
  }
   // 工具栏配置
//    const toolbarConfig: Partial<IToolbarConfig> = { }  // TS 语法
//    toolbarConfig.excludeKeys = [
//     'group-video',
// ]

    // 编辑器配置
// 初始化 MENU_CONF 属性
  // const editorConfig: Partial<IEditorConfig> = {  // TS 语法
  // // const editorConfig = {                       // JS 语法
  //     MENU_CONF: {
  //       'uploadImage':{..._otherProps.picture}
  //     }


  // }

  // 修改 uploadImage 菜单配置
  // editorConfig.MENU_CONF['uploadImage'] = {..._otherProps.picture}

   


  return (
      <div>
      <Toolbar
         {..._otherProps}
         defaultConfig={toolbarConfig}
        editor={editor}
        style={ToolBarStyle}
      /> 
      <div style={ContentStyle}>



      <Editor
        defaultConfig={editorConfig}
        onCreated={createEditor}

        {..._otherProps}
      />
            </div>
      </div>

  );
};

export default editorComponent;


// const RefExampleComponent = forwardRef(
//   ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>,
// );
// RefExampleComponent.displayName = 'ExampleComponent';

// export default RefExampleComponent;
