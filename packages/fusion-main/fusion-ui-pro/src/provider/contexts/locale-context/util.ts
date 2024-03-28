import Cookies from 'js-cookie';

export const toSSOLanguage = (language: 'zh-CN' | 'en-US'): 'zh-CN' | 'en' => {
  return language.toLowerCase().includes('en') ? 'en' : 'zh-CN';
};

export const toISOLanguage = (language: string): 'zh-CN' | 'en-US' => {
  return language.toLowerCase().includes('en') ? 'en-US' : 'zh-CN';
};

export const getCookieLanguageKey = () => {
  // 首先从全局作用域中获取 _i18nCookieName_ 变量值作为 cookie 名称，便于可能由于历史原因而暂无法统一 cookie 名称的场景
  // 如果没全局设定，那么使用实参
  // 如果无实参，那么使用默认值 SSO_LANG_V2
  let _cookieName;
  if (typeof window !== 'undefined') {
    _cookieName = (window as any)._i18nCookieName_;
  }
  if (!_cookieName) {
    _cookieName = 'SSO_LANG_V2';
  }
  return _cookieName;
};
/**
 * 获取页面所用的多语言 locale
 *
 * 首先从 cookie 中获取，cookie 名称优先通过 window._i18nCookieName_ 来获取，如果为空且无显式传参时，默认是 SSO_LANG_V2
 * 没有，从 navigator 中获取；
 * 没有，最后使用默认值 zh-CN
 */
export function getCookieLanguage() {
  let language = Cookies.get(getCookieLanguageKey());

  if (!language && typeof navigator === 'object') {
    language = navigator.language;
  }

  return toISOLanguage(language || 'zh-CN');
}
