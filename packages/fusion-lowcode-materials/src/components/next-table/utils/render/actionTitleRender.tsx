import type { IActionColumnItem } from "../../component/webDeepTableActionCell";

export default function actionTitleRender(action: IActionColumnItem, rowData: any) {
  const { title, render } = action;

  if (render) {
    try {
      return render(title, rowData);
    } catch (e) {
      if (e instanceof Error) {
        console.warn(e.stack);
      }
      return title;
    }

  } else {
    return title;
  }
}
