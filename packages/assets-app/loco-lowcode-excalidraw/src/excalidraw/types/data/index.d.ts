import { ExcalidrawElement, ExcalidrawFrameElement, NonDeletedExcalidrawElement } from "../element/types";
import { ExportType } from "../scene/types";
import { AppState, BinaryFiles } from "../types";
import { FileSystemHandle } from "./filesystem";
export { loadFromBlob } from "./blob";
export { loadFromJSON, saveAsJSON } from "./json";
export type ExportedElements = readonly NonDeletedExcalidrawElement[] & {
    _brand: "exportedElements";
};
export declare const prepareElementsForExport: (elements: readonly ExcalidrawElement[], { selectedElementIds }: Pick<AppState, "selectedElementIds">, exportSelectionOnly: boolean) => {
    exportingFrame: ExcalidrawFrameElement | null;
    exportedElements: ExportedElements;
};
export declare const exportCanvas: (type: Omit<ExportType, "backend">, elements: ExportedElements, appState: AppState, files: BinaryFiles, { exportBackground, exportPadding, viewBackgroundColor, name, fileHandle, exportingFrame, }: {
    exportBackground: boolean;
    exportPadding?: number | undefined;
    viewBackgroundColor: string;
    name: string;
    fileHandle?: FileSystemHandle | null | undefined;
    exportingFrame: ExcalidrawFrameElement | null;
}) => Promise<FileSystemHandle | null | undefined>;
