import React, { useContext } from 'react';
import type { IApiComponentProps } from 'dumi/theme';
import { context, useApiData } from 'dumi/theme';

import './index.scss';

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '参数',
    description: '说明',
    type: '类型',
    default: '默认值',
    required: '(必选)',
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)',
  },
};

export default ({ identifier, export: expt }: IApiComponentProps) => {
  const data = useApiData(identifier);
  const { locale = '' } = useContext(context);

  const texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];

  const defaultComponentName = identifier
    ?.replace(/-([a-z])/g, function (all, i) {
      return i.toUpperCase();
    })
    ?.replace(/^\S/, (s) => s.toUpperCase());

  return (
    <>
      {data && (
        <>
          <h3 id={expt} className="apiTitle">
            <a aria-hidden="true" data-tabindex="-1" href={`/${identifier}#${expt}`}>
              <span className="icon icon-link" />
            </a>
            {expt === 'default' ? defaultComponentName : expt}
          </h3>
          <table className="apiContainer">
            <thead>
              <tr>
                <th>{texts.name}</th>
                <th>{texts.description}</th>
                <th>{texts.type}</th>
                <th>{texts.default}</th>
              </tr>
            </thead>
            <tbody>
              {data[expt]?.map((row) => (
                <tr key={row.identifier}>
                  <td>{row.identifier}</td>
                  <td>{row.description || '--'}</td>
                  <td>
                    <code>{row.type}</code>
                  </td>
                  <td>
                    <code>{row.default || (row.required && texts.required) || '--'}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
