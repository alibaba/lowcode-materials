import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction, useEffect, useRef, useState } from 'react';
import Engine, { EngineInterface } from '@aomao/engine';
import Bold from '@aomao/plugin-bold';
import CodeBlock, { CodeBlockComponent } from '@aomao/plugin-codeblock';
import Toolbar, { ToolbarPlugin, ToolbarComponent,ToolbarOptions } from '@aomao/toolbar';
import Backcolor from '@aomao/plugin-backcolor';
import Table, { TableComponent } from '@aomao/plugin-table';
import Fontsize from '@aomao/plugin-fontsize';
import Alignment from '@aomao/plugin-alignment';
import Hr , { HrComponent } from '@aomao/plugin-hr';
// import Fontfamily from'@aomao/plugin-fontfamily';
import Tasklist, {CheckboxComponent} from'@aomao/plugin-tasklist';
import Underline from'@aomao/plugin-underline';
import Video, {VideoComponent, VideoUploader} from'@aomao/plugin-video';
import Unorderedlist from'@aomao/plugin-unorderedlist';
import Undo from'@aomao/plugin-undo';
import Strikethrough from'@aomao/plugin-strikethrough';
import Paintformat from'@aomao/plugin-paintformat';
import Image , { ImageComponent , ImageUploader } from '@aomao/plugin-image';
import Fontcolor from '@aomao/plugin-fontcolor';
import Code from '@aomao/plugin-code';
import Embed , { EmbedComponent } from '@aomao/plugin-embed';
import File , { FileComponent , FileUploader } from '@aomao/plugin-file';
import Fontfamily from '@aomao/plugin-fontfamily';
import Link from '@aomao/plugin-link';
import Lineheight from '@aomao/plugin-line-height';
import lightblock from '@aomao/plugin-lightblock';
import Mention, {MentionComponent} from'@aomao/plugin-mention';
// import Mermaid , { MermaidComponent } from '@aomao/plugin-mermaid';
import Orderedlist from'@aomao/plugin-orderedlist';
import Quote from '@aomao/plugin-quote';
import Redo from '@aomao/plugin-redo';
import Removeformat from '@aomao/plugin-removeformat';
import Selectall from '@aomao/plugin-selectall';
import Status , { StatusComponent } from '@aomao/plugin-status';
import Heading from '@aomao/plugin-heading';
import Italic from '@aomao/plugin-italic';


interface ComponentProps {
  title: string;
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
  const { title } = props;
  const [engine, setEngine] = useState<EngineInterface>();

  const ref = useRef<HTMLDivElement | null>(null);
  const [content, setContent] = useState<string>('Hello word!');

  useEffect(() => {
    if (!ref.current) return;
    const engines = new Engine(ref.current, {
      plugins: [Italic,Heading,Status,Selectall,Removeformat,Redo,Quote,Orderedlist,Mention,lightblock,Lineheight,Link,Fontfamily,File , FileUploader ,Embed,Code,Fontcolor,Image , ImageUploader,Paintformat,Bold, ToolbarPlugin, CodeBlock , Table , Fontsize,Alignment,Backcolor,Hr,Tasklist,Underline, Video, VideoUploader,Unorderedlist,Undo,Strikethrough],
      cards: [StatusComponent,MentionComponent,FileComponent,EmbedComponent,ImageComponent,ToolbarComponent, CodeBlockComponent, HrComponent, TableComponent,CheckboxComponent,VideoComponent],
      lang: 'zh-CN',
      
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
      },
      // cards: [CodeBlockComponent],
    });
    engines.setValue(content);
    engines.on('change', () => {
      const value = engines.getValue();
      setContent(value);
      console.log(`value:${value}`);
    });
    // engine.on('markdown-it', (markdown) => {
    //   // 使用 markdown-it api 启用插件
    //   markdown.enable('markdown-it');

    // });

    
    setEngine(engines);
  }, []);

  return (
    
      <div>
        <div className='nav'>
        {engine && <Toolbar engine={engine} items={[['link','undo','collapse'], ['status','selectall','removeformat','redo','quote','orderedlist','mention','lightblock','lineheight','fontfamily','code','alignment','fontcolor','image','bold','paintformat', 'italic', 'backcolor','icon','fontsize','hr','tasklist','underline','unorderedlist','strikethrough']]} />}

        </div>
        <div  className='content'>
          <div
            ref={ref}
          
          />
        </div>
      </div>

 
  );
};

const RefExampleComponent = forwardRef(
  ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>,
);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
