import deepcopy from "lodash/cloneDeep";
import isFunction from "lodash/isFunction";

export default function delegateFunctions(list: any[] | undefined, key: string, context: any, newArgPosition?: number) {
    if (list && list.length) {
        const result = deepcopy(list);

        result.forEach((item) => {
            const func = item && item[key];

            if (func && isFunction(func)) {
                item[key] = function () {
                    const ARGS = Array.prototype.slice.call(arguments);
                    if (newArgPosition === undefined) {
                        ARGS.push(context);
                    } else {
                        ARGS.splice(newArgPosition, 0, context);
                    }

                    return func.apply(context, ARGS);
                };
            }
        });

        return result;
    }
}
