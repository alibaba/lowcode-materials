import defaultRender from './defaultRender';

export default function errorRender() {
    return defaultRender('数据格式不合法', 'error-cell');
}
