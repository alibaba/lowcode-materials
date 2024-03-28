import React, { useContext, useMemo, createContext, useState, useCallback } from 'react';
import { locales as defaultI18nBundles } from '@/utils/locales';
import { getCookieLanguage, toISOLanguage } from './util';

export type LanguageType = 'zh-CN' | 'en-US';
const DEFAULT_LANGUAGE: LanguageType = 'zh-CN';
type I18nBundlesType = typeof defaultI18nBundles;

/**
 * 所有定义文案的组件名字
 */
export type I18nBundlesNames = keyof I18nBundlesType;

/** 某一组的文案集合类型 */
export type ComponentI18nBundleType<Name extends I18nBundlesNames> = I18nBundlesType[Name]['zh-CN'];

/**
 * 用户定义的多语言文案
 */
export type CustomI18nBundles = {
  [Name in I18nBundlesNames]?: Partial<ComponentI18nBundleType<Name>>;
};

/**
 * 传入组件名字获取文案集合
 *
 * @example
 * ``` ts
 * const i18nBundle = getI18nBundle('card', 'zh-CN', { collapse: '收起abc' });
 * i18nBundle.collapse // '收起abc'
 * i18nBundle.open // '打开'
 * ```
 * @param componentName 组件名称，如tablex
 * @param lang 需要的语言，默认是中文
 * @param customI18nBundle 自定义文案
 * @returns 当前组件的文案集合
 */
const getI18nBundleBase = <Name extends I18nBundlesNames>(
  componentName: Name,
  lang: 'zh-CN' | 'en-US' = 'zh-CN',
  customI18nBundle?: Partial<ComponentI18nBundleType<Name>>,
): ComponentI18nBundleType<Name> => {
  const componentBundles = defaultI18nBundles[componentName];
  if (!componentBundles) {
    return {} as any;
  }
  if (lang === 'en-US') {
    return {
      ...componentBundles['zh-CN'],
      ...componentBundles['en-US'],
      ...customI18nBundle,
    };
  }

  if (customI18nBundle) {
    return {
      ...componentBundles['zh-CN'],
      ...customI18nBundle,
    };
  }
  return componentBundles['zh-CN'];
};

export interface LocaleContextValue {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  i18nBundles?: CustomI18nBundles;
  getI18nBundle: <Name extends I18nBundlesNames>(
    componentName: Name,
  ) => ComponentI18nBundleType<Name>;
}

export const LocaleContext = createContext<LocaleContextValue>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  getI18nBundle: (componentName) => getI18nBundleBase(componentName, DEFAULT_LANGUAGE),
  i18nBundles: {},
});

export const useLanguage = () => useContext(LocaleContext).language;

export const useLocaleContextValue = (
  defaultLanguage: LanguageType = DEFAULT_LANGUAGE,
  i18nBundles?: CustomI18nBundles,
): LocaleContextValue => {
  const [language, setLanguage] = useState(
    defaultLanguage ? toISOLanguage(defaultLanguage) : getCookieLanguage(),
  );
  const getI18nBundleCtx = useCallback(
    <Name extends I18nBundlesNames>(componentName: Name): ComponentI18nBundleType<Name> =>
      getI18nBundleBase(componentName, language, i18nBundles?.[componentName]),
    [i18nBundles, language],
  );
  return {
    language,
    setLanguage,
    i18nBundles,
    getI18nBundle: getI18nBundleCtx,
  };
};

/**
 * Hooks: 传入组件名字获取文案集合
 *
 * @example
 * ``` ts
 * const i18nBundle = useI18nBundle('card');
 * i18nBundle.collapse // '收起'
 * ```
 * @param componentName 组件名称，如tablex
 * @returns 当前组件的文案集合
 */
export const useI18nBundle = <Name extends I18nBundlesNames>(componentName: Name) => {
  const { getI18nBundle } = useContext(LocaleContext);
  return useMemo<ComponentI18nBundleType<Name>>(
    () => getI18nBundle(componentName),
    [componentName, getI18nBundle],
  );
};
