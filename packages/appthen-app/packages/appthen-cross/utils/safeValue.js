import { createRef } from 'react';
export function $eval(expr) {
    try {
        return expr();
        // eslint-disable-next-line no-empty
    }
    catch (error) { }
}
export function $evalArray(expr) {
    const res = $eval(expr);
    return Array.isArray(res) ? res : [];
}
export function $createChildContext(oldContext, ext) {
    const childContext = Object.assign(Object.assign({}, oldContext), ext);
    // eslint-disable-next-line no-proto
    childContext.__proto__ = oldContext;
    return childContext;
}
export class RefsManager {
    constructor() {
        this.refInsStore = {};
    }
    clearNullRefs() {
        Object.keys(this.refInsStore).forEach((refName) => {
            const filteredInsList = this.refInsStore[refName].filter((insRef) => !!insRef.current);
            if (filteredInsList.length > 0) {
                this.refInsStore[refName] = filteredInsList;
            }
            else {
                delete this.refInsStore[refName];
            }
        });
    }
    get(refName) {
        this.clearNullRefs();
        if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
            return this.refInsStore[refName][0].current;
        }
        return null;
    }
    getAll(refName) {
        this.clearNullRefs();
        if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
            return this.refInsStore[refName].map((i) => i.current);
        }
        return [];
    }
    linkRef(refName) {
        const refIns = createRef();
        this.refInsStore[refName] = this.refInsStore[refName] || [];
        this.refInsStore[refName].push(refIns);
        return refIns;
    }
}
//# sourceMappingURL=safeValue.js.map