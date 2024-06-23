class StyleManager {
  constructor() {
    if (!StyleManager.instance) {
      this.styleElements = {};
      StyleManager.instance = this;
    }
    return StyleManager.instance;
  }

  set(id, css) {
    let styleElement = this.styleElements[id];
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = id;
      styleElement.type = 'text/css';
      document.head.appendChild(styleElement);
      this.styleElements[id] = styleElement;
    }
    styleElement.innerHTML = css;
  }

  remove(id) {
    const styleElement = this.styleElements[id];
    if (styleElement) {
      document.head.removeChild(styleElement);
      delete this.styleElements[id];
    }
  }
}

const styleManager = new StyleManager();

export default styleManager;