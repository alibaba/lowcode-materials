import { ExcalidrawElement } from "./types";
import { AppState, Zoom } from "../types";
export declare const isInvisiblySmallElement: (element: ExcalidrawElement) => boolean;
export declare const isElementInViewport: (element: ExcalidrawElement, width: number, height: number, viewTransformations: {
    zoom: Zoom;
    offsetLeft: number;
    offsetTop: number;
    scrollX: number;
    scrollY: number;
}) => boolean;
/**
 * Makes a perfect shape or diagonal/horizontal/vertical line
 */
export declare const getPerfectElementSize: (elementType: AppState["activeTool"]["type"], width: number, height: number) => {
    width: number;
    height: number;
};
export declare const getLockedLinearCursorAlignSize: (originX: number, originY: number, x: number, y: number) => {
    width: number;
    height: number;
};
export declare const resizePerfectLineForNWHandler: (element: ExcalidrawElement, x: number, y: number) => void;
export declare const getNormalizedDimensions: (element: Pick<ExcalidrawElement, "width" | "height" | "x" | "y">) => {
    width: ExcalidrawElement["width"];
    height: ExcalidrawElement["height"];
    x: ExcalidrawElement["x"];
    y: ExcalidrawElement["y"];
};
