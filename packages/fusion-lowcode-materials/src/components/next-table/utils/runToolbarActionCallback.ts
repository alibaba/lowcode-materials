import { IAction } from "../component/webToolbar";

export default function runToolbarActionCallback(param: { action: IAction }) {
  const { action } = param;
  const { callback } = action;

  try {
    return callback && callback(action);
  } catch (e) {
    if (e instanceof Error) {
      console.warn(e.stack);
    }
  }
};
