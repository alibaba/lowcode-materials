import isPlainObject from "lodash/isPlainObject";

export default function loadMethods(target: {[propKey: string]: any}, source: {[propKey: string]: any}) {
    if (!source || !isPlainObject(source)) {
        return;
    }

    const { init, ...srcMethods } = source;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const methodName in srcMethods) {
        target[methodName] = source[methodName];
    }

    if (typeof init === 'function') {
        init.call(target);
    }
}
