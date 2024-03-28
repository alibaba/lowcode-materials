import * as React from 'react';

// 新结构
interface IContent {
  aone?: {
    // 可能未绑定
    url: string;
    priorityId: string;
    project: { id: string; name: string };
    creator: { empId: string; name: string };
    assigner: { empId: string; name: string };
  };
  subject: string;
  description: string;
  hideTitle?: boolean;
  id?: string;
}
interface IStoryPlaceholderProps {
  content?: IContent | string;
  className?: string;
  maxHeight?: string;
}

/**
 * 文字 字体、大小、行高
 * @param props
 */
const StoryPlaceholder: React.ForwardRefRenderFunction<HTMLImageElement, IStoryPlaceholderProps> = (
  props,
  ref,
) => {
  const {
    content = { subject: '', description: '' },
    maxHeight = 'auto',
    ...others
  }: IStoryPlaceholderProps = props;
  const oldType = typeof content === 'string';
  const desc = oldType ? content : content?.description || '';
  const title = (!oldType && content?.subject) || '';
  const hideTitle = oldType || content?.hideTitle;
  return (
    <div {...others} ref={ref}>
      {!hideTitle && (
        <div style={{ fontSize: '30px', color: '#333', lineHeight: '32px' }}>
          <span>{title}</span>
        </div>
      )}
      <div
        style={{ maxHeight, overflowY: 'scroll' }}
        className="message-content"
        dangerouslySetInnerHTML={{
          __html: desc,
        }}
      />
    </div>
  );
};

const RefStoryPlaceholder = React.forwardRef(StoryPlaceholder);

RefStoryPlaceholder.defaultProps = {
  content: {
    subject: '需求标题',
    hideTitle: false,
    description:
      '<div><span>- 你可以在这里描述需求</span><br /><span>- 或者粘贴需求截图</span></div>',
  },
  className: '',
};

export default RefStoryPlaceholder;
