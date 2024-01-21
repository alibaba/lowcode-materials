import { ElementConstructorOpts } from "../element/newElement";
import { ExcalidrawBindableElement, ExcalidrawElement, ExcalidrawEmbeddableElement, ExcalidrawFrameElement, ExcalidrawFreeDrawElement, ExcalidrawGenericElement, ExcalidrawImageElement, ExcalidrawLinearElement, ExcalidrawSelectionElement, ExcalidrawTextElement, FileId, FontFamilyValues, TextAlign, VerticalAlign } from "../element/types";
import { MarkOptional } from "../utility-types";
export type ValidLinearElement = {
    type: "arrow" | "line";
    x: number;
    y: number;
    label?: {
        text: string;
        fontSize?: number;
        fontFamily?: FontFamilyValues;
        textAlign?: TextAlign;
        verticalAlign?: VerticalAlign;
    } & MarkOptional<ElementConstructorOpts, "x" | "y">;
    end?: (({
        type: Exclude<ExcalidrawBindableElement["type"], "image" | "text" | "frame" | "embeddable">;
        id?: ExcalidrawGenericElement["id"];
    } | {
        id: ExcalidrawGenericElement["id"];
        type?: Exclude<ExcalidrawBindableElement["type"], "image" | "text" | "frame" | "embeddable">;
    }) | (({
        type: "text";
        text: string;
    } | {
        type?: "text";
        id: ExcalidrawTextElement["id"];
        text: string;
    }) & Partial<ExcalidrawTextElement>)) & MarkOptional<ElementConstructorOpts, "x" | "y">;
    start?: (({
        type: Exclude<ExcalidrawBindableElement["type"], "image" | "text" | "frame" | "embeddable">;
        id?: ExcalidrawGenericElement["id"];
    } | {
        id: ExcalidrawGenericElement["id"];
        type?: Exclude<ExcalidrawBindableElement["type"], "image" | "text" | "frame" | "embeddable">;
    }) | (({
        type: "text";
        text: string;
    } | {
        type?: "text";
        id: ExcalidrawTextElement["id"];
        text: string;
    }) & Partial<ExcalidrawTextElement>)) & MarkOptional<ElementConstructorOpts, "x" | "y">;
} & Partial<ExcalidrawLinearElement>;
export type ValidContainer = {
    type: Exclude<ExcalidrawGenericElement["type"], "selection">;
    id?: ExcalidrawGenericElement["id"];
    label?: {
        text: string;
        fontSize?: number;
        fontFamily?: FontFamilyValues;
        textAlign?: TextAlign;
        verticalAlign?: VerticalAlign;
    } & MarkOptional<ElementConstructorOpts, "x" | "y">;
} & ElementConstructorOpts;
export type ExcalidrawElementSkeleton = Extract<Exclude<ExcalidrawElement, ExcalidrawSelectionElement>, ExcalidrawEmbeddableElement | ExcalidrawFreeDrawElement> | ({
    type: Extract<ExcalidrawLinearElement["type"], "line">;
    x: number;
    y: number;
} & Partial<ExcalidrawLinearElement>) | ValidContainer | ValidLinearElement | ({
    type: "text";
    text: string;
    x: number;
    y: number;
    id?: ExcalidrawTextElement["id"];
} & Partial<ExcalidrawTextElement>) | ({
    type: Extract<ExcalidrawImageElement["type"], "image">;
    x: number;
    y: number;
    fileId: FileId;
} & Partial<ExcalidrawImageElement>) | ({
    type: "frame";
    children: readonly ExcalidrawElement["id"][];
    name?: string;
} & Partial<ExcalidrawFrameElement>);
export declare const convertToExcalidrawElements: (elementsSkeleton: ExcalidrawElementSkeleton[] | null, opts?: {
    regenerateIds: boolean;
}) => ExcalidrawElement[];
