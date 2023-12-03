import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction, useEffect, useRef, useState } from 'react';
import Engine, { EngineInterface } from '@aomao/engine';
import Bold from '@aomao/plugin-bold';
import CodeBlock, { CodeBlockComponent } from '@aomao/plugin-codeblock';
import Toolbar, { ToolbarPlugin, ToolbarComponent, ToolbarOptions } from '@aomao/toolbar';
import Backcolor from '@aomao/plugin-backcolor';
import Table, { TableComponent } from '@aomao/plugin-table';
import Fontsize from '@aomao/plugin-fontsize';
import Alignment from '@aomao/plugin-alignment';
import Hr, { HrComponent } from '@aomao/plugin-hr';
import Tasklist, { CheckboxComponent } from '@aomao/plugin-tasklist';
import Underline from '@aomao/plugin-underline';
// import Video, { VideoComponent, VideoUploader } from '@aomao/plugin-video';
import Unorderedlist from '@aomao/plugin-unorderedlist';
import Undo from '@aomao/plugin-undo';
import Strikethrough from '@aomao/plugin-strikethrough';
import Paintformat from '@aomao/plugin-paintformat';
import Image, { ImageComponent, ImageUploader } from '@aomao/plugin-image';
import Fontcolor from '@aomao/plugin-fontcolor';
import Code from '@aomao/plugin-code';
import Embed, { EmbedComponent } from '@aomao/plugin-embed';
// import File, { FileComponent, FileUploader } from '@aomao/plugin-file';
import { fontFamilyDefaultData } from '@aomao/toolbar'; // 或 @aomao/toolbar-vue
import Fontfamily from '@aomao/plugin-fontfamily';

import Link from '@aomao/plugin-link';
import Lineheight from '@aomao/plugin-line-height';
import lightblock, { LightblockComponent } from '@aomao/plugin-lightblock';
import Mention, { MentionComponent } from '@aomao/plugin-mention';
// import Mermaid , { MermaidComponent } from '@aomao/plugin-mermaid';
import Orderedlist from '@aomao/plugin-orderedlist';
import Quote from '@aomao/plugin-quote';
import Redo from '@aomao/plugin-redo';
import Removeformat from '@aomao/plugin-removeformat';
import Selectall from '@aomao/plugin-selectall';
import Status, { StatusComponent } from '@aomao/plugin-status';
import Heading from '@aomao/plugin-heading';
import Italic from '@aomao/plugin-italic';
import { Loading } from '@alifd/next';

//缩进插件没有
// import Indent from '@aomao/plugin-indent';


interface ComponentProps {
  title: string;
  // data:Object,
  saveField?(vditor: any): void;
  Images: Object
}
const toolbarOptions: ToolbarOptions = {
  popup: {
    items: [
      ['undo', 'redo'],
      {
        icon: 'text',
        items: [
          'bold',
          'italic',
          'strikethrough',
          'underline',
          'backcolor',
          'moremark',
        ],
      },
    ],
  },
};

const ExampleComponent = (props: ComponentProps) => {
  const { saveField, Images, ..._otherProps } = props;
  console.error("_otherProps", Images)
  const [engine, setEngine] = useState<EngineInterface>();

  const ref = useRef<HTMLDivElement | null>(null);
  // const [content, setContent] = useState<string>('Hello word!');

  useEffect(() => {
    if (!ref.current) return;
    const engines = new Engine(ref.current, {
      plugins: [lightblock, Italic, Heading, Status, Selectall, Removeformat, Redo, Quote, Orderedlist, Mention, Lineheight, Link, Fontfamily, Embed, Code, Fontcolor, Image, ImageUploader, Paintformat, Bold, ToolbarPlugin, CodeBlock, Table, Fontsize, Alignment, Backcolor, Hr, Tasklist, Underline, Unorderedlist, Undo, Strikethrough],
      cards: [StatusComponent, LightblockComponent, MentionComponent, EmbedComponent, ImageComponent, ToolbarComponent, CodeBlockComponent, HrComponent, TableComponent, CheckboxComponent],
      ..._otherProps,

      config: {

        [ToolbarPlugin.pluginName]: toolbarOptions,

        // 字体大小配置
        [Fontsize.pluginName]: {

          //配置粘贴后需要过滤的字体大小
          filter: (fontSize: string) => {
            return (
              [
                '12px',
                '13px',
                '14px',
                '15px',
                '16px',
                '19px',
                '22px',
                '24px',
                '29px',
                '32px',
                '40px',
                '48px',
              ].indexOf(fontSize) > -1
            );
          },
        },
        [Fontfamily.pluginName]: {
          //配置粘贴后需要过滤的字体
          filter: (fontfamily: string) => {
            // fontFamilyDefaultData 从toolbar包中导出的默认字体数据
            const item = fontFamilyDefaultData.find(item => fontfamily.split(",").some(name => item.value.toLowerCase().indexOf(name.replace(/"/, "").toLowerCase()) > -1))
            return item ? item.value : false
          }
        },
        [Lineheight.pluginName]: {
          //配置粘贴后需要过滤的行高
          filter: (lineHeight: string) => {
            if (lineHeight === "14px") return "1"
            if (lineHeight === "16px") return "1.15"
            if (lineHeight === "21px") return "1.5"
            if (lineHeight === "28px") return "2"
            if (lineHeight === "35px") return "2.5"
            if (lineHeight === "42px") return "3"
            return ["1", "1.15", "1.5", "2", "2.5", "3"].indexOf(lineHeight) > -1
          }
        },
        [ImageUploader.pluginName]: {
          file: {
            ...Images
          },
          remote: {
            ...Images
          },
        }







      },
      // cards: [CodeBlockComponent],
    });

    if (saveField) {
      saveField(engines);
    }

    // if (data){
    //      engines.setValue(data);
    // }
    // engines.setValue(content);
    // engines.on('change', () => {
    //   const value = engines.getValue();
    //   setContent(value);
    //   console.log(`value:${value}`);
    // });



    setEngine(engines);
  }, []);

  return (
    <Loading visible={_otherProps?.visible || false} shape="fusion-reactor" className='Aomao_loading'>
      <div>
        <div style={_otherProps?.navStyle} >
          {engine && <Toolbar engine={engine} items={[['collapse'], ['undo', 'redo', 'removeformat', 'paintformat'],
          ['heading', 'fontfamily', 'fontsize',], ['fontcolor', 'backcolor', 'image', 'bold', 'italic', 'strikethrough', 'underline', 'icon'],
          ['orderedlist', 'unorderedlist', 'mention', 'lightblock', 'lineheight', 'code', 'alignment', 'tasklist', 'codeblock'], ['quote', 'status', 'selectall', 'hr', 'link']]} />}
        

        </div>

          <div style={_otherProps?.contentStyle} 
            ref={ref}
          />
  
      </div>
    </Loading>
  );
};

const RefExampleComponent = forwardRef(
  ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>,
);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
