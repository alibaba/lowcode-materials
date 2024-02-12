import { NonDeletedExcalidrawElement } from "../element/types";
export declare const hasBackground: (type: string) => boolean;
export declare const hasStrokeColor: (type: string) => boolean;
export declare const hasStrokeWidth: (type: string) => boolean;
export declare const hasStrokeStyle: (type: string) => boolean;
export declare const canChangeRoundness: (type: string) => boolean;
export declare const canHaveArrowheads: (type: string) => boolean;
export declare const getElementAtPosition: (elements: readonly NonDeletedExcalidrawElement[], isAtPositionFn: (element: NonDeletedExcalidrawElement) => boolean) => NonDeletedExcalidrawElement | null;
export declare const getElementsAtPosition: (elements: readonly NonDeletedExcalidrawElement[], isAtPositionFn: (element: NonDeletedExcalidrawElement) => boolean) => NonDeletedExcalidrawElement[];
