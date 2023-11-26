import * as React from 'react';
import classNames from 'classnames';

export const createTitle = (Tag) => {
  /**
   * Typography.Title
   * @description 分为 H1, H2, H3, H4, H5, H6 不同的组件，表示不同层级，继承 Typography.Text API
   * @order 1
   */
  class Title extends React.Component {
    static defaultProps = {
      prefix: 'next-',
    };

    render() {
      const { prefix, className, ...others } = this.props;
      return (
        <Text
          {...others}
          component={Tag}
          className={`${className || ''} ${prefix}typography-title`}
        />
      );
    }
  }

  Title.displayName = Tag.toUpperCase();
  return Title;
};

/**
 * 判断是否是生产环境
 * @type {Boolean}
 */
export const isProduction = () => {
  const PRODUCTION_ENV = 'production';
  let result = false;
  try {
    if (process.env.NODE_ENV === PRODUCTION_ENV) {
      result = true;
    }
  } catch (err) {
    //
  }

  return result;
};

// 兼容老逻辑
export const textTypeMap = {
  'body-1': 'body2',
  'body-2': 'body1',
  subhead: 'h6',
  title: 'h5',
  headline: 'h4',
  'display-1': 'h3',
  'display-2': 'h2',
  'display-3': 'h1',
};

interface TextProps {
  prefix?: string;
  className?: string;
  // type?: 'overline' | 'caption' | 'body-1' | 'body-2' | 'subhead' | 'title' | 'headline' | 'display-1' | 'display-2' | 'display-3';
  // title === h5
  // des === description
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'title'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'inherit';
  children?: React.ReactNode;
  /**
   * 添加删除线样式
   */
  delete?: boolean;
  /**
   * 添加标记样式
   */
  mark?: boolean;
  /**
   * 添加下划线样式
   */
  underline?: boolean;
  /**
   * 是否加粗
   */
  strong?: boolean;
  /**
   * 添加代码样式
   */
  code?: boolean;
  /**
   * 设置标签类型
   */
  component?: React.ElementType;
}

/**
 * 文字 字体、大小、行高
 * @param props
 */
const Text: React.FC<TextProps> = (props, ref) => {
  const {
    prefix,
    className,
    type,
    component = 'span',
    strong,
    underline,
    delete: deleteProp,
    code,
    mark,
    ...others
  } = props;

  let { children } = props;
  const newType = textTypeMap[type] || type;

  const cls = classNames(className, {
    [`${prefix}text`]: true,
    [`${prefix}text-${newType}`]: newType,
  });

  if (typeof children === 'string' && children.indexOf('\n') !== -1) {
    const childrenList = children.split('\n');
    const newChildren: any = [];
    childrenList.forEach((child) => {
      newChildren.push(child);
      newChildren.push(<br />);
    });
    newChildren.pop();

    children = newChildren;
  }

  const Tag = component;

  if (strong) {
    children = <strong>{children}</strong>;
  }

  if (underline) {
    children = <u>{children}</u>;
  }

  if (deleteProp) {
    children = <del>{children}</del>;
  }

  if (code) {
    children = <code>{children}</code>;
  }

  if (mark) {
    children = <mark>{children}</mark>;
  }

  return (
    <Tag {...others} className={cls} ref={ref}>
      {children}
    </Tag>
  );
};

const RefText = React.forwardRef(Text);

RefText.defaultProps = {
  prefix: 'next-',
};

const Paragraph: React.FC<TextProps> = (props) => {
  const { prefix, className, component, ...others } = props;

  const cls = classNames(`${prefix}text-paragraph`, className);

  if (!isProduction()) {
    console.warn('Warning: Text.Paragraph is deprecated, use P instead');
  }
  return <Text {...others} className={cls} component={component} />;
};
// 为了保证兼容性，@alifd/next基础组件中 Typography 组件有的所有子组件、功能，Text也有，但是均不建议使用
RefText.H1 = createTitle('h1');
RefText.H2 = createTitle('h2');
RefText.H3 = createTitle('h3');
RefText.H4 = createTitle('h4');
RefText.H5 = createTitle('h5');
RefText.H6 = createTitle('h6');
RefText.Paragraph = Paragraph;

export default RefText;
