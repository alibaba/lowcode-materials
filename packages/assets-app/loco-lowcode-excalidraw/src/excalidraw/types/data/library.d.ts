import { LibraryItems, ExcalidrawImperativeAPI, LibraryItemsSource } from "../types";
import type App from "../components/App";
import { ExcalidrawElement } from "../element/types";
export declare const libraryItemsAtom: import("jotai").PrimitiveAtom<{
    status: "loading" | "loaded";
    isInitialized: boolean;
    libraryItems: LibraryItems;
}> & {
    init: {
        status: "loading" | "loaded";
        isInitialized: boolean;
        libraryItems: LibraryItems;
    };
};
/** Merges otherItems into localItems. Unique items in otherItems array are
    sorted first. */
export declare const mergeLibraryItems: (localItems: LibraryItems, otherItems: LibraryItems) => LibraryItems;
declare class Library {
    /** latest libraryItems */
    private lastLibraryItems;
    /** indicates whether library is initialized with library items (has gone
     * though at least one update) */
    private isInitialized;
    private app;
    constructor(app: App);
    private updateQueue;
    private getLastUpdateTask;
    private notifyListeners;
    /** call on excalidraw instance unmount */
    destroy: () => void;
    resetLibrary: () => Promise<LibraryItems>;
    /**
     * @returns latest cloned libraryItems. Awaits all in-progress updates first.
     */
    getLatestLibrary: () => Promise<LibraryItems>;
    updateLibrary: ({ libraryItems, prompt, merge, openLibraryMenu, defaultStatus, }: {
        libraryItems: LibraryItemsSource;
        merge?: boolean | undefined;
        prompt?: boolean | undefined;
        openLibraryMenu?: boolean | undefined;
        defaultStatus?: "published" | "unpublished" | undefined;
    }) => Promise<LibraryItems>;
    setLibrary: (libraryItems: LibraryItems | Promise<LibraryItems> | ((latestLibraryItems: LibraryItems) => LibraryItems | Promise<LibraryItems>)) => Promise<LibraryItems>;
}
export default Library;
export declare const distributeLibraryItemsOnSquareGrid: (libraryItems: LibraryItems) => ExcalidrawElement[];
export declare const parseLibraryTokensFromUrl: () => {
    libraryUrl: string;
    idToken: string | null;
} | null;
export declare const useHandleLibrary: ({ excalidrawAPI, getInitialLibraryItems, }: {
    excalidrawAPI: ExcalidrawImperativeAPI | null;
    getInitialLibraryItems?: (() => LibraryItemsSource) | undefined;
}) => void;
