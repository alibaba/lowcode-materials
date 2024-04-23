import * as React from 'react';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { Boot } from '@wangeditor/editor';
import markdownModule from '@wangeditor/plugin-md';

Boot.registerModule(markdownModule);

export interface editorProps {

  saveField?(vditor: any): void;
  onBeforeUpload(file: any) :void;
  picture?:object;
  content?:any;
  leftcontent?:any;
  rightcontent?:any;
  type?:string;
}

const editorComponent = (props: editorProps, ref: any) => {
  const {leftcontent,rightcontent, onBeforeUpload,type,ToolBarStyle,ContentStyle,inContentStyle,toolbarConfig,editorConfig,content,..._otherProps } = props;
  const [editor, setEditor] = React.useState(null); // 存储 editor 实例


  function createEditor(editor: any){
    setEditor(editor)
    if (_otherProps.saveField) {
      _otherProps.saveField(editor);      
    }
  }

  return (
      <div>
      <Toolbar
         {..._otherProps}
         defaultConfig={toolbarConfig}
        editor={editor}
        style={ToolBarStyle}
      /> 

      <div style={ContentStyle}>
      <div style={{display:'flex'}}>
        <div>{leftcontent}</div>
        <div>
        {content}
      <Editor
        defaultConfig={editorConfig}
        onCreated={createEditor}

        {..._otherProps}
      />
        </div>
        <div>{rightcontent}</div>


      </div>

            </div>
      </div>

  );
};



export default editorComponent;


