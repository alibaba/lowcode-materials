import { GroupId, ExcalidrawElement, NonDeleted, NonDeletedExcalidrawElement } from "./element/types";
import { AppClassProperties, AppState, InteractiveCanvasAppState } from "./types";
import { Mutable } from "./utility-types";
export declare const selectGroup: (groupId: GroupId, appState: InteractiveCanvasAppState, elements: readonly NonDeleted<ExcalidrawElement>[]) => Pick<InteractiveCanvasAppState, "selectedGroupIds" | "selectedElementIds" | "editingGroupId">;
export declare const selectGroupsForSelectedElements: {
    (appState: Pick<AppState, "selectedElementIds" | "editingGroupId">, elements: readonly NonDeletedExcalidrawElement[], prevAppState: InteractiveCanvasAppState, app: AppClassProperties | null): Mutable<Pick<InteractiveCanvasAppState, "selectedGroupIds" | "editingGroupId" | "selectedElementIds">>;
    clearCache(): void;
};
/**
 * If the element's group is selected, don't render an individual
 * selection border around it.
 */
export declare const isSelectedViaGroup: (appState: InteractiveCanvasAppState, element: ExcalidrawElement) => boolean;
export declare const getSelectedGroupForElement: (appState: InteractiveCanvasAppState, element: ExcalidrawElement) => string | undefined;
export declare const getSelectedGroupIds: (appState: InteractiveCanvasAppState) => GroupId[];
export declare const selectGroupsFromGivenElements: (elements: readonly NonDeleted<ExcalidrawElement>[], appState: InteractiveCanvasAppState) => {
    [groupId: string]: boolean;
};
export declare const editGroupForSelectedElement: (appState: AppState, element: NonDeleted<ExcalidrawElement>) => AppState;
export declare const isElementInGroup: (element: ExcalidrawElement, groupId: string) => boolean;
export declare const getElementsInGroup: (elements: readonly ExcalidrawElement[], groupId: string) => ExcalidrawElement[];
export declare const getSelectedGroupIdForElement: (element: ExcalidrawElement, selectedGroupIds: {
    [groupId: string]: boolean;
}) => string | undefined;
export declare const getNewGroupIdsForDuplication: (groupIds: ExcalidrawElement["groupIds"], editingGroupId: AppState["editingGroupId"], mapper: (groupId: GroupId) => GroupId) => string[];
export declare const addToGroup: (prevGroupIds: ExcalidrawElement["groupIds"], newGroupId: GroupId, editingGroupId: AppState["editingGroupId"]) => string[];
export declare const removeFromSelectedGroups: (groupIds: ExcalidrawElement["groupIds"], selectedGroupIds: {
    [groupId: string]: boolean;
}) => string[];
export declare const getMaximumGroups: (elements: ExcalidrawElement[]) => ExcalidrawElement[][];
export declare const elementsAreInSameGroup: (elements: ExcalidrawElement[]) => boolean;
