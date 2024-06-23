import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';

const pixelSize = StyleSheet.hairlineWidth;

const Theme = {
  popoverColor: '#fff',
  popoverBorderColor: 'rgba(0, 0, 0, 0.15)',
  popoverBorderRadius: 4,
  popoverBorderWidth: pixelSize,
  popoverPaddingCorner: 8,
}

export default class Popover extends Component {
  // static propTypes = {
  //   ...ViewPropTypes,
  //   arrow: PropTypes.oneOf([
  //     'none',
  //     'topLeft',
  //     'top',
  //     'topRight',
  //     'rightTop',
  //     'right',
  //     'rightBottom',
  //     'bottomRight',
  //     'bottom',
  //     'bottomLeft',
  //     'leftBottom',
  //     'left',
  //     'leftTop',
  //   ]),
  //   paddingCorner: PropTypes.number,
  // };

  static defaultProps = {
    ...View.defaultProps,
    arrow: 'none',
  };

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  filterPopoverStyle(fs, includeRadius) {
    let {
      flexDirection,
      alignItems,
      justifyContent,
      margin,
      marginBottom,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
      padding,
      paddingBottom,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingVertical,
      backgroundColor,
      borderBottomColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderBottomWidth,
      borderColor,
      borderLeftColor,
      borderLeftWidth,
      borderRadius,
      borderRightColor,
      borderRightWidth,
      borderStyle,
      borderTopColor,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderTopWidth,
      borderWidth,
      ...others
    } = fs;
    let style = includeRadius
      ? {
          borderBottomLeftRadius,
          borderBottomRightRadius,
          borderRadius,
          borderTopLeftRadius,
          borderTopRightRadius,
          ...others,
        }
      : { ...others };
    for (let key in style) {
      if (style[key] === undefined && style.hasOwnProperty(key)) {
        delete style[key];
      }
    }
    return style;
  }

  filterContentStyle(fs) {
    let {
      flexDirection,
      alignItems,
      justifyContent,
      margin,
      marginBottom,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
      padding,
      paddingBottom,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingVertical,
      backgroundColor,
      borderBottomColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderBottomWidth,
      borderColor,
      borderLeftColor,
      borderLeftWidth,
      borderRadius,
      borderRightColor,
      borderRightWidth,
      borderStyle,
      borderTopColor,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderTopWidth,
      borderWidth,
    } = fs;
    let style = {
      flexDirection,
      alignItems,
      justifyContent,
      margin,
      marginBottom,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
      padding,
      paddingBottom,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingVertical,
      backgroundColor,
      borderBottomColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderBottomWidth,
      borderColor,
      borderLeftColor,
      borderLeftWidth,
      borderRadius,
      borderRightColor,
      borderRightWidth,
      borderStyle,
      borderTopColor,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderTopWidth,
      borderWidth,
    };
    for (let key in style) {
      if (style[key] === undefined && style.hasOwnProperty(key)) {
        delete style[key];
      }
    }
    return style;
  }

  buildStyle() {
    let {
      style,
      arrow,
      paddingCorner,
      headerStyle,
      arrowStyle,
      contentStyle,
      popoverStyle,
    } = this.props;

    style = [
      {
        backgroundColor: Theme.popoverColor,
        borderColor: Theme.popoverBorderColor,
        borderRadius: Theme.popoverBorderRadius,
        borderWidth: Theme.popoverBorderWidth,
      },
    ].concat(style);

    let fs = StyleSheet.flatten(style);
    let { backgroundColor, borderColor, borderWidth } = fs;

    let arrowSize = 7; //Square side length
    let halfSquareSize = Math.sqrt(arrowSize * arrowSize * 2) / 2; //The half-length of the square diagonal: sqrt(7^2 + 7^2) / 2 = 4.95
    halfSquareSize =
      Math.ceil(halfSquareSize / pixelSize) * pixelSize;
    let headerSize = halfSquareSize + borderWidth;
    let headerPadding = headerSize - arrowSize / 2; //Let the center of square on the edge: 5 - (7 / 2) = 1.5
    let headerPaddingCorner = paddingCorner
      ? paddingCorner
      : Theme.popoverPaddingCorner;
    let contentPadding = halfSquareSize;

    let headerLayouts = {
      none: {},
      topLeft: {
        top: 0,
        left: 0,
        right: 0,
        height: headerSize,
        paddingTop: headerPadding,
        alignItems: 'flex-start',
        paddingLeft: headerPaddingCorner,
      },
      top: {
        top: 0,
        left: 0,
        right: 0,
        height: headerSize,
        paddingTop: headerPadding,
        alignItems: 'center',
      },
      topRight: {
        top: 0,
        left: 0,
        right: 0,
        height: headerSize,
        paddingTop: headerPadding,
        alignItems: 'flex-end',
        paddingRight: headerPaddingCorner,
      },
      rightTop: {
        top: 0,
        bottom: 0,
        right: 0,
        width: headerSize,
        paddingRight: headerPadding,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingTop: headerPaddingCorner,
      },
      right: {
        top: 0,
        bottom: 0,
        right: 0,
        width: headerSize,
        paddingRight: headerPadding,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      rightBottom: {
        top: 0,
        bottom: 0,
        right: 0,
        width: headerSize,
        paddingRight: headerPadding,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingBottom: headerPaddingCorner,
      },
      bottomRight: {
        bottom: 0,
        left: 0,
        right: 0,
        height: headerSize,
        paddingBottom: headerPadding,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: headerPaddingCorner,
      },
      bottom: {
        bottom: 0,
        left: 0,
        right: 0,
        height: headerSize,
        paddingBottom: headerPadding,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      bottomLeft: {
        bottom: 0,
        left: 0,
        right: 0,
        height: headerSize,
        paddingBottom: headerPadding,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: headerPaddingCorner,
      },
      leftBottom: {
        top: 0,
        bottom: 0,
        left: 0,
        width: headerSize,
        paddingLeft: headerPadding,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingBottom: headerPaddingCorner,
      },
      left: {
        top: 0,
        bottom: 0,
        left: 0,
        width: headerSize,
        paddingLeft: headerPadding,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      leftTop: {
        top: 0,
        bottom: 0,
        left: 0,
        width: headerSize,
        paddingLeft: headerPadding,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: headerPaddingCorner,
      },
    };
    let arrowLayouts = {
      none: {},
      topLeft: { transform: [{ rotate: '45deg' }] },
      top: { transform: [{ rotate: '45deg' }] },
      topRight: { transform: [{ rotate: '45deg' }] },
      rightTop: { transform: [{ rotate: '135deg' }] },
      right: { transform: [{ rotate: '135deg' }] },
      rightBottom: { transform: [{ rotate: '135deg' }] },
      bottomRight: { transform: [{ rotate: '225deg' }] },
      bottom: { transform: [{ rotate: '225deg' }] },
      bottomLeft: { transform: [{ rotate: '225deg' }] },
      leftBottom: { transform: [{ rotate: '315deg' }] },
      left: { transform: [{ rotate: '315deg' }] },
      leftTop: { transform: [{ rotate: '315deg' }] },
    };
    let popoverLayouts = {
      none: {},
      topLeft: { paddingTop: contentPadding },
      top: { paddingTop: contentPadding },
      topRight: { paddingTop: contentPadding },
      rightTop: { paddingRight: contentPadding },
      right: { paddingRight: contentPadding },
      rightBottom: { paddingRight: contentPadding },
      bottomRight: { paddingBottom: contentPadding },
      bottom: { paddingBottom: contentPadding },
      bottomLeft: { paddingBottom: contentPadding },
      leftBottom: { paddingLeft: contentPadding },
      left: { paddingLeft: contentPadding },
      leftTop: { paddingLeft: contentPadding },
    };

    if (!arrow) {
      arrow = 'none';
    }
    let useArrow = arrow;
    switch (arrow) {
      case 'topLeft':
      case 'topRight':
        if (headerPaddingCorner + contentPadding > this.state.width / 2) {
          useArrow = 'top';
        }
        break;
      case 'rightTop':
      case 'rightBottom':
        if (headerPaddingCorner + contentPadding > this.state.height / 2) {
          useArrow = 'right';
        }
        break;
      case 'bottomRight':
      case 'bottomLeft':
        if (headerPaddingCorner + contentPadding > this.state.width / 2) {
          useArrow = 'bottom';
        }
        break;
      case 'leftBottom':
      case 'leftTop':
        if (headerPaddingCorner + contentPadding > this.state.height / 2) {
          useArrow = 'left';
        }
        break;
    }

    headerStyle = Object.assign(
      {
        position: 'absolute',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
      headerLayouts[useArrow],
    );
    arrowStyle = Object.assign(
      {
        backgroundColor,
        width: arrowSize,
        height: arrowSize,
        borderColor,
        borderTopWidth: borderWidth,
        borderLeftWidth: borderWidth,
      },
      arrowLayouts[useArrow],
    );
    contentStyle = this.filterContentStyle(fs);
    popoverStyle = [
      this.filterPopoverStyle(fs, useArrow === 'none'),
      {
        backgroundColor:
          useArrow === 'none' ? Theme.popoverColor : 'rgba(0, 0, 0, 0)', //Transparent background will cause a warning at debug mode
      },
    ].concat(popoverLayouts[useArrow]);

    return { popoverStyle, contentStyle, headerStyle, arrowStyle };
  }

  onLayout(e) {
    let { width, height } = e.nativeEvent.layout;
    if (width !== this.state.width || height !== this.state.height) {
      this.setState({ width, height });
    }
    this.props.onLayout && this.props.onLayout(e);
  }

  render() {
    let {
      style,
      children,
      arrow,
      paddingCorner,
      onLayout,
      ...others
    } = this.props;
    let {
      popoverStyle,
      contentStyle,
      headerStyle,
      arrowStyle,
    } = this.buildStyle();
    return (
      <View style={popoverStyle} onLayout={e => this.onLayout(e)} {...others}>
        <View style={contentStyle}>{children}</View>
        {!arrow || arrow === 'none' ? null : (
          <View style={headerStyle}>
            <View style={arrowStyle} />
          </View>
        )}
      </View>
    );
  }
}