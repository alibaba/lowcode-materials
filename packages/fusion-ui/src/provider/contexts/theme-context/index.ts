import { createContext, useContext, useEffect, useState, useRef } from 'react';

export type ThemeType = 'light' | 'dark';
export interface ThemeContextValue {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  setTheme: () => {},
});

export const useThemeContextValue = (defaultTheme: ThemeType = 'light'): ThemeContextValue => {
  const [theme, setTheme] = useState(defaultTheme);
  const stylePoolsRef = useRef([]);
  // 加载样式
  const loadStyle = (styleString) => {
    const oStyle = document.createElement('style');
    oStyle.innerHTML = styleString;
    document.head.appendChild(oStyle);
    stylePoolsRef.current.push(oStyle);
    return oStyle;
  };
  // 主题样式清理
  const cleanup = () => {
    while (stylePoolsRef.current.length) {
      stylePoolsRef.current.pop().remove();
    }
  };
  useEffect(() => {
    return cleanup;
  });
  // 主题切换
  useEffect(() => {
    const DARK_THEME_VERSION = '0.4.2';
    const THEME_CDN_PREFIX = 'https://unpkg.alibaba-inc.com/@alifd/next';
    if (theme === 'dark') {
      document.body.classList.add('dark');
      fetch(`${THEME_CDN_PREFIX}@${DARK_THEME_VERSION}/variables.css`)
        .then((res) => res.text())
        .then((tokens) => {
          loadStyle(tokens);
          loadStyle(`
          :root {
            color-scheme: dark;
          }`);
        });
    } else {
      document.body.classList.remove('dark');
      cleanup();
    }
  }, [theme]);
  return {
    theme,
    setTheme,
  };
};

export const useTheme = () => useContext(ThemeContext).theme;
