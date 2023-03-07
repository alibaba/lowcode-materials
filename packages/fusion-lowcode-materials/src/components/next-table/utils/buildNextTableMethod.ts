import type { NextTable } from "..";
import { IEditableMethods } from "../mixin/editableMethods";

const methodList: (keyof Omit<IEditableMethods, 'init'> | 'getDataSource')[] = [
  'editRow',
  'saveRow',
  'resetRow',
  'validateRow',
  'getDataSource',
];

export default function buildNextTableMethod(instance: NextTable) {
  methodList.forEach((name) => {
    instance[name] = function () {
      const { tableRef } = instance;
      const { current } = tableRef;
      if (current) {
        const method = current[name];
        if (method) {
          return method.apply(current, arguments as any);
        }
      }

    };
  });
}
