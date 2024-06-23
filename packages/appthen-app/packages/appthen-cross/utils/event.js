const eventCallbacks = {};
let n = 0;
/**
 * 记录等待事件是否已执行
 */
const afterEventMap = {};
/**
 * 存储等待队列
 */
const afterEventQuene = {};
export const $event = {
    pageData: {},
    eventCallbacks,
    $on: (eventName, callback) => {
        if (!eventName || typeof eventName !== 'string') {
            console.warn('[Event Bus] eventName is master required');
            return '';
        }
        if (!callback || typeof callback !== 'function') {
            console.warn('[Event Bus] callback is master required');
            return '';
        }
        n = n + 1;
        const eid = eventName + ':' + n;
        if (eventCallbacks[eventName]) {
            eventCallbacks[eventName].push({
                eid,
                callback,
            });
        }
        else {
            eventCallbacks[eventName] = [
                {
                    eid,
                    callback,
                },
            ];
        }
        return eid;
    },
    $off: (eid) => {
        const _arr = eid.split(':');
        if (_arr.length !== 2)
            return console.warn('[Event Bus] eid is not ok');
        const eventName = _arr[0];
        if (eventCallbacks[eventName]) {
            for (let i = 0; i < eventCallbacks[eventName].length; i++) {
                const cbItem = eventCallbacks[eventName][i];
                if (cbItem.eid === eid)
                    eventCallbacks[eventName].splice(i, 1);
            }
        }
    },
    $emit: (eventName, value) => {
        console.log('[EventBus emit] ', eventName, value, eventCallbacks[eventName]);
        if (eventCallbacks[eventName] && eventCallbacks[eventName].length > 0) {
            eventCallbacks[eventName].forEach((cbItem) => {
                if (cbItem.callback && typeof cbItem.callback === 'function')
                    cbItem.callback(value);
            });
        }
    },
    /**
     * 等待执行（如果已执行则执行否则插入队列）
     * @param eventName 事件名称
     */
    $after: (eventName, cb) => {
        console.log('[$after] ', eventName);
        n = n + 1;
        const eid = eventName + ':' + n;
        // 事件已执行直接执行
        console.log('[afterEventMap[eventName]] ', afterEventMap[eventName]);
        if (afterEventMap[eventName]) {
            cb(afterEventMap[eventName].value);
            return eid;
        }
        else if (afterEventQuene[eventName]) {
            // 插入队列
            afterEventQuene[eventName].push({
                eid,
                cb,
            });
        }
        else {
            afterEventQuene[eventName] = [{ eid, cb }];
        }
        return eid;
    },
    $emitAfter: (eventName, value) => {
        console.log('[emitAfter] ', eventName, value);
        afterEventMap[eventName] = {
            time: Date.now(),
            value,
        };
        const quene = afterEventQuene[eventName];
        if (quene && quene.length) {
            quene
                .filter((item) => !item.isResolve)
                .forEach((item) => {
                item.isResolve = true;
                item.cb && item.cb(value);
            });
        }
    },
    $offAfter: (eid) => {
        const _arr = eid.split(':');
        if (_arr.length !== 2)
            return console.warn('[Event Bus] eid is not ok');
        const eventName = _arr[0];
        if (afterEventQuene[eventName]) {
            const index = afterEventQuene[eventName].findIndex((item) => item.eid === eid);
            if (index > -1) {
                afterEventQuene[eventName].splice(index, 1);
            }
        }
    },
};
export const event = $event;
//# sourceMappingURL=event.js.map