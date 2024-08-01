import MODERN_BROWSERSLIST_TARGET from './modern-browserslist-target';
export { MODERN_BROWSERSLIST_TARGET };
export type ValueOf<T> = Required<T>[keyof T];
export declare const COMPILER_NAMES: {
    readonly client: "client";
    readonly server: "server";
    readonly edgeServer: "edge-server";
};
/**
 * Headers that are set by the Next.js server and should be stripped from the
 * request headers going to the user's application.
 */
export declare const INTERNAL_HEADERS: readonly ["x-invoke-error", "x-invoke-output", "x-invoke-path", "x-invoke-query", "x-invoke-status", "x-middleware-invoke"];
export type CompilerNameValues = ValueOf<typeof COMPILER_NAMES>;
export declare const COMPILER_INDEXES: {
    [compilerKey in CompilerNameValues]: number;
};
export declare const UNDERSCORE_NOT_FOUND_ROUTE = "/_not-found";
export declare const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "/_not-found/page";
export declare const PHASE_EXPORT = "phase-export";
export declare const PHASE_PRODUCTION_BUILD = "phase-production-build";
export declare const PHASE_PRODUCTION_SERVER = "phase-production-server";
export declare const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
export declare const PHASE_TEST = "phase-test";
export declare const PHASE_INFO = "phase-info";
export declare const PAGES_MANIFEST = "pages-manifest.json";
export declare const APP_PATHS_MANIFEST = "app-paths-manifest.json";
export declare const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
export declare const BUILD_MANIFEST = "build-manifest.json";
export declare const APP_BUILD_MANIFEST = "app-build-manifest.json";
export declare const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
export declare const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
export declare const NEXT_FONT_MANIFEST = "next-font-manifest";
export declare const EXPORT_MARKER = "export-marker.json";
export declare const EXPORT_DETAIL = "export-detail.json";
export declare const PRERENDER_MANIFEST = "prerender-manifest.json";
export declare const ROUTES_MANIFEST = "routes-manifest.json";
export declare const IMAGES_MANIFEST = "images-manifest.json";
export declare const SERVER_FILES_MANIFEST = "required-server-files.json";
export declare const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
export declare const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
export declare const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
export declare const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
export declare const AUTOMATIC_FONT_OPTIMIZATION_MANIFEST = "font-manifest.json";
export declare const SERVER_DIRECTORY = "server";
export declare const CONFIG_FILES: string[];
export declare const BUILD_ID_FILE = "BUILD_ID";
export declare const BLOCKED_PAGES: string[];
export declare const CLIENT_PUBLIC_FILES_PATH = "public";
export declare const CLIENT_STATIC_FILES_PATH = "static";
export declare const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
export declare const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
export declare const BARREL_OPTIMIZATION_PREFIX = "__barrel_optimize__";
export declare const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
export declare const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
export declare const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
export declare const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
export declare const INTERCEPTION_ROUTE_REWRITE_MANIFEST = "interception-route-rewrite-manifest";
export declare const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
export declare const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "main-app";
export declare const APP_CLIENT_INTERNALS = "app-pages-internals";
export declare const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
export declare const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
export declare const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
export declare const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
export declare const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: unique symbol;
export declare const DEFAULT_RUNTIME_WEBPACK = "webpack-runtime";
export declare const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
export declare const STATIC_PROPS_ID = "__N_SSG";
export declare const SERVER_PROPS_ID = "__N_SSP";
export declare const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
export declare const OPTIMIZED_FONT_PROVIDERS: {
    url: string;
    preconnect: string;
}[];
export declare const DEFAULT_SERIF_FONT: {
    name: string;
    xAvgCharWidth: number;
    azAvgWidth: number;
    unitsPerEm: number;
};
export declare const DEFAULT_SANS_SERIF_FONT: {
    name: string;
    xAvgCharWidth: number;
    azAvgWidth: number;
    unitsPerEm: number;
};
export declare const STATIC_STATUS_PAGES: string[];
export declare const TRACE_OUTPUT_VERSION = 1;
export declare const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
export declare const RSC_MODULE_TYPES: {
    readonly client: "client";
    readonly server: "server";
};
export declare const EDGE_UNSUPPORTED_NODE_APIS: string[];
export declare const SYSTEM_ENTRYPOINTS: Set<string>;
