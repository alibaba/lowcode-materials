declare const _exports: {
    mode: string;
    devtool: boolean;
    entry: {
        "excalidraw.development": string;
    };
    output: {
        path: string;
        library: string;
        libraryTarget: string;
        filename: string;
        chunkFilename: string;
        assetModuleFilename: string;
        publicPath: string;
    };
    resolve: {
        extensions: string[];
    };
    module: {
        rules: ({
            test: RegExp;
            exclude: RegExp;
            use: (string | {
                loader: string;
            } | {
                loader: string;
                options: {
                    postcssOptions: {
                        plugins: (import("postcss").Plugin & import("autoprefixer").ExportedAPI)[];
                    };
                };
            })[];
        } | {
            test: RegExp;
            resolve: {
                fullySpecified: boolean;
            };
        } | {
            test: RegExp;
            exclude: RegExp;
            use: ({
                loader: string;
            } | {
                loader: string;
                options: {
                    transpileOnly: boolean;
                    configFile: string;
                };
            })[];
        } | {
            test: RegExp;
            type: string;
        })[];
    };
    optimization: {
        splitChunks: {
            chunks: string;
            cacheGroups: {
                vendors: {
                    test: RegExp;
                    name: string;
                };
            };
        };
    };
    plugins: (import("webpack").EvalSourceMapDevToolPlugin | import("webpack").DefinePlugin)[];
    externals: {
        react: {
            root: string;
            commonjs2: string;
            commonjs: string;
            amd: string;
        };
        "react-dom": {
            root: string;
            commonjs2: string;
            commonjs: string;
            amd: string;
        };
    };
} | {
    mode: string;
    entry: {
        "excalidraw.production.min": string;
    };
    output: {
        path: string;
        library: string;
        libraryTarget: string;
        filename: string;
        chunkFilename: string;
        assetModuleFilename: string;
        publicPath: string;
    };
    resolve: {
        extensions: string[];
    };
    module: {
        rules: ({
            test: RegExp;
            exclude: RegExp;
            use: (string | {
                loader: string;
            } | {
                loader: string;
                options: {
                    postcssOptions: {
                        plugins: (import("postcss").Plugin & import("autoprefixer").ExportedAPI)[];
                    };
                };
            })[];
        } | {
            test: RegExp;
            resolve: {
                fullySpecified: boolean;
            };
        } | {
            test: RegExp;
            exclude: RegExp;
            use: ({
                loader: string;
            } | {
                loader: string;
                options: {
                    transpileOnly: boolean;
                    configFile: string;
                };
            } | {
                loader: string;
                options: {
                    presets: (string | (string | {
                        runtime: string;
                    })[])[];
                    plugins: string[];
                };
            })[];
        } | {
            test: RegExp;
            type: string;
        })[];
    };
    optimization: {
        minimize: boolean;
        minimizer: import("terser-webpack-plugin")<import("terser").MinifyOptions>[];
        splitChunks: {
            chunks: string;
            cacheGroups: {
                vendors: {
                    test: RegExp;
                    name: string;
                };
            };
        };
    };
    plugins: any[];
    externals: {
        react: {
            root: string;
            commonjs2: string;
            commonjs: string;
            amd: string;
        };
        "react-dom": {
            root: string;
            commonjs2: string;
            commonjs: string;
            amd: string;
        };
    };
};
export = _exports;
