import omit from 'omit.js';
import React from 'react';
import './index.scss';

interface WebViewProp {
  src: string;
  callbacks: any;
  onLoad?: (e: Event) => void;
  onError?: (e: Event) => void;
}

class WebView extends React.Component<WebViewProp> {
  iframeRef: any = null;

  onLoad = (e: Event) => {
    console.log('[webview load] ', e);
    const { onLoad } = this.props;
    onLoad && onLoad(e);
    // 通知h5
    this.postMessage({
      action: 'deviceReady',
    });
  };

  onError = (e: Event) => {
    console.log('[webview error] ', e);
    const { onError } = this.props;
    onError && onError(e);
  };

  componentDidMount() {
    window.addEventListener('message', this.onMessage, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.onMessage);
  }

  postMessage = (value: any) => {
    // console.log('[postMessage] ', value)
    try {
      this.iframeRef.contentWindow.postMessage(value, '*');
    } catch (e) {
      console.log('[postMessage error] ', e);
    }
  };

  taskCallback(taskKey: string, callbacks: any) {
    this.postMessage({
      action: 'onBridgeMsg',
      name: taskKey,
      value: JSON.stringify(callbacks),
    });
  }

  emitEvent = (eventName: any, eventData = {}) => {
    this.postMessage({
      action: 'emitEvent',
      name: eventName,
      value: JSON.stringify(eventData),
    });
  };

  onMessage = (event: MessageEvent) => {
    console.log('receive bridge msg:', event.data);
    if (!event) return;
    try {
      console.log(1, event.data);
      let message = JSON.parse(event.data);
      switch (message.taskName) {
        case 'execCallback':
          if (
            message.props.funcName &&
            this.props.callbacks &&
            typeof this.props.callbacks === 'object' &&
            this.props.callbacks[message.props.funcName] &&
            typeof this.props.callbacks[message.props.funcName] === 'function'
          ) {
            let res = this.props.callbacks[message.props.funcName](message.props.params || {});
            if (res && res.then && typeof res.then === 'function') {
              res
                .then((ret: any) => {
                  console.log('resolve', ret);
                  this.taskCallback(message.taskKey, {
                    onSuccess: ret || {},
                  });
                })
                .catch((ret: any) => {
                  this.taskCallback(message.taskKey, {
                    onError: ret || {},
                  });
                });
            }
          }
          break;
        default:
          break;
      }
    } catch (e) {
      // console.warn(e)
    }
  };

  render() {
    const { src, ...other } = this.props;
    console.log('[src] ', src);
    return (
      <iframe
        ref={(ref) => (this.iframeRef = ref)}
        className="taro-webview"
        width="100%"
        height="100%"
        onLoad={this.onLoad}
        onError={this.onError}
        {...omit(this.props, ['src', 'className'])}
        src={src}
        {...other}
      />
    );
  }
}

export default WebView;
