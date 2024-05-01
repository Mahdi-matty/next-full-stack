"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Lenovo_bootcamp_css_minip_next_full_stack_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Lenovo\\\\bootcamp\\\\css-minip\\\\next-full-stack\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Lenovo_bootcamp_css_minip_next_full_stack_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNMZW5vdm8lNUNib290Y2FtcCU1Q2Nzcy1taW5pcCU1Q25leHQtZnVsbC1zdGFjayU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDTGVub3ZvJTVDYm9vdGNhbXAlNUNjc3MtbWluaXAlNUNuZXh0LWZ1bGwtc3RhY2smaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGpzLz9hYmRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxib290Y2FtcFxcXFxjc3MtbWluaXBcXFxcbmV4dC1mdWxsLXN0YWNrXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxib290Y2FtcFxcXFxjc3MtbWluaXBcXFxcbmV4dC1mdWxsLXN0YWNrXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            // Email/Password authentication provider\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    await (0,_utils_database__WEBPACK_IMPORTED_MODULE_3__.connectToDB)();\n                    const user = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                        username: credentials.username\n                    });\n                    if (!user) throw new Error(\"Wrong credentials! no such a user\");\n                    console.log(\"Provided password:\", credentials.password);\n                    console.log(\"Stored password:\", user.password);\n                    if (!user || !await user.isCorrectPassword(credentials.password)) {\n                        return null;\n                    }\n                    return user;\n                } catch (error) {\n                    console.log(error);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session }) {\n            try {\n                const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: session?.user?.email\n                });\n                if (sessionUser) {\n                    session.user.id = sessionUser._id.toString();\n                }\n            } catch (error) {\n                console.error(\"Error in session callback:\", error);\n            }\n            return session;\n        },\n        async signIn (user) {\n            try {\n                await (0,_utils_database__WEBPACK_IMPORTED_MODULE_3__.connectToDB)();\n                return true;\n            } catch (error) {\n                console.error(error);\n                return false;\n            }\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lDO0FBQ2xDO0FBQ2M7QUFDaEI7QUFDa0I7QUFDaEQsTUFBTU0sVUFBVU4sZ0RBQVFBLENBQUM7SUFDdkJPLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCLHlDQUF5QztZQUN6Q08sYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtvQkFBUUMsYUFBYTtnQkFBUztnQkFDbkVDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6QixJQUFJO29CQUNGLE1BQU1MLDREQUFXQTtvQkFDakIsTUFBTVksT0FBTyxNQUFNYixvREFBSUEsQ0FBQ2MsT0FBTyxDQUFDO3dCQUFFUCxVQUFVRCxZQUFZQyxRQUFRO29CQUFDO29CQUVqRSxJQUFJLENBQUNNLE1BQU0sTUFBTSxJQUFJRSxNQUFNO29CQUMzQkMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQlgsWUFBWUssUUFBUTtvQkFDdERLLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JKLEtBQUtGLFFBQVE7b0JBQzdDLElBQUksQ0FBQ0UsUUFBUSxDQUFFLE1BQU1BLEtBQUtLLGlCQUFpQixDQUFDWixZQUFZSyxRQUFRLEdBQUk7d0JBQ2xFLE9BQU87b0JBQ1Q7b0JBQ0EsT0FBT0U7Z0JBQ1QsRUFBRSxPQUFPTSxPQUFPO29CQUNkSCxRQUFRQyxHQUFHLENBQUNFO2dCQUNkO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRTtZQUN2QixJQUFJO2dCQUNGLE1BQU1DLGNBQWMsTUFBTXRCLG9EQUFJQSxDQUFDYyxPQUFPLENBQUM7b0JBQUVTLE9BQU9GLFNBQVNSLE1BQU1VO2dCQUFNO2dCQUNyRSxJQUFJRCxhQUFhO29CQUNmRCxRQUFRUixJQUFJLENBQUNXLEVBQUUsR0FBR0YsWUFBWUcsR0FBRyxDQUFDQyxRQUFRO2dCQUM1QztZQUNGLEVBQUUsT0FBT1AsT0FBTztnQkFDZEgsUUFBUUcsS0FBSyxDQUFDLDhCQUE4QkE7WUFDOUM7WUFDQSxPQUFPRTtRQUNUO1FBQ0EsTUFBTU0sUUFBT2QsSUFBSTtZQUNmLElBQUk7Z0JBQ0YsTUFBTVosNERBQVdBO2dCQUNqQixPQUFPO1lBQ1QsRUFBRSxPQUFPa0IsT0FBTztnQkFDZEgsUUFBUUcsS0FBSyxDQUFDQTtnQkFDZCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0FBQ0Y7QUFFMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0anMvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz9kYTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkBtb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgY29ubmVjdFRvREIgfSBmcm9tIFwiQHV0aWxzL2RhdGFiYXNlXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IEdpdEh1YiBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgLy8gRW1haWwvUGFzc3dvcmQgYXV0aGVudGljYXRpb24gcHJvdmlkZXJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSB9KTtcblxuICAgICAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgY3JlZGVudGlhbHMhIG5vIHN1Y2ggYSB1c2VyXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvdmlkZWQgcGFzc3dvcmQ6XCIsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3JlZCBwYXNzd29yZDpcIiwgdXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICEoYXdhaXQgdXNlci5pc0NvcnJlY3RQYXNzd29yZChjcmVkZW50aWFscy5wYXNzd29yZCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwgfSk7XG4gICAgICAgIGlmIChzZXNzaW9uVXNlcikge1xuICAgICAgICAgIHNlc3Npb24udXNlci5pZCA9IHNlc3Npb25Vc2VyLl9pZC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gc2Vzc2lvbiBjYWxsYmFjazpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBzaWduSW4odXNlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfVxuXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiVXNlciIsImNvbm5lY3RUb0RCIiwiYmNyeXB0IiwiR2l0SHViIiwiaGFuZGxlciIsInByb3ZpZGVycyIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpc0NvcnJlY3RQYXNzd29yZCIsImVycm9yIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInNlc3Npb25Vc2VyIiwiZW1haWwiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwic2lnbkluIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exist\"\n        ],\n        required: [\n            true,\n            \"Email is needed\"\n        ]\n    },\n    username: {\n        type: String,\n        unique: [\n            true,\n            \"username already exist\"\n        ],\n        required: [\n            true,\n            \"username is needed\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"password is required\"\n        ],\n        minlength: [\n            8,\n            \"password must be at least 8 charachters\"\n        ]\n    },\n    image: {\n        type: String\n    }\n});\nuserSchema.pre(\"save\", async function(next) {\n    if (this.isNew || this.isModified(\"password\")) {\n        const saltRounds = 10;\n        this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, saltRounds);\n    }\n    next();\n});\n// compare the incoming password with the hashed password\nuserSchema.methods.isCorrectPassword = async function(password) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, this.password);\n};\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNwQjtBQUU3QixNQUFNSSxhQUFhLElBQUlKLDRDQUFNQSxDQUFDO0lBQzFCSyxPQUFPO1FBQ0hDLE1BQU1DO1FBQ05DLFFBQVE7WUFBQztZQUFNO1NBQXNCO1FBQ3JDQyxVQUFVO1lBQUM7WUFBTTtTQUFrQjtJQUN2QztJQUNBQyxVQUFVO1FBQ05KLE1BQU1DO1FBQ05DLFFBQVE7WUFBQztZQUFNO1NBQXlCO1FBQ3hDQyxVQUFVO1lBQUM7WUFBTTtTQUFxQjtJQUMxQztJQUNBRSxVQUFVO1FBQ05MLE1BQU1DO1FBQ05FLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDRyxXQUFXO1lBQUM7WUFBRztTQUEwQztJQUM3RDtJQUNBQyxPQUFPO1FBQ0hQLE1BQU1DO0lBQ1Y7QUFDSjtBQUNBSCxXQUFXVSxHQUFHLENBQUMsUUFBUSxlQUFlQyxJQUFJO0lBQ3RDLElBQUksSUFBSSxDQUFDQyxLQUFLLElBQUksSUFBSSxDQUFDQyxVQUFVLENBQUMsYUFBYTtRQUM3QyxNQUFNQyxhQUFhO1FBQ25CLElBQUksQ0FBQ1AsUUFBUSxHQUFHLE1BQU1SLG9EQUFXLENBQUMsSUFBSSxDQUFDUSxRQUFRLEVBQUVPO0lBQ25EO0lBRUFIO0FBQ0Y7QUFFQSx5REFBeUQ7QUFDekRYLFdBQVdnQixPQUFPLENBQUNDLGlCQUFpQixHQUFHLGVBQWVWLFFBQVE7SUFDNUQsT0FBTyxNQUFNUix1REFBYyxDQUFDUSxVQUFVLElBQUksQ0FBQ0EsUUFBUTtBQUNyRDtBQUVGLE1BQU1ZLE9BQU9yQiw0Q0FBTUEsQ0FBQ3FCLElBQUksSUFBSXRCLCtDQUFLQSxDQUFDLFFBQVFHO0FBQzFDLGlFQUFlbUIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Rqcy8uL21vZGVscy91c2VyLmpzPzY1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB1bmlxdWU6IFt0cnVlLCAnRW1haWwgYWxyZWFkeSBleGlzdCddLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdFbWFpbCBpcyBuZWVkZWQnXSxcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgJ3VzZXJuYW1lIGFscmVhZHkgZXhpc3QnXSxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAndXNlcm5hbWUgaXMgbmVlZGVkJ10sXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ3Bhc3N3b3JkIGlzIHJlcXVpcmVkJ10sXG4gICAgICAgIG1pbmxlbmd0aDogWzgsICdwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjaHRlcnMnXVxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxufSlcbnVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24obmV4dCkge1xuICAgIGlmICh0aGlzLmlzTmV3IHx8IHRoaXMuaXNNb2RpZmllZCgncGFzc3dvcmQnKSkge1xuICAgICAgY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuICAgICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHRSb3VuZHMpO1xuICAgIH1cbiAgXG4gICAgbmV4dCgpO1xuICB9KTtcbiAgXG4gIC8vIGNvbXBhcmUgdGhlIGluY29taW5nIHBhc3N3b3JkIHdpdGggdGhlIGhhc2hlZCBwYXNzd29yZFxuICB1c2VyU2NoZW1hLm1ldGhvZHMuaXNDb3JyZWN0UGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbihwYXNzd29yZCkge1xuICAgIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XG4gIH07XG5cbmNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpIFxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsImJjcnlwdCIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtaW5sZW5ndGgiLCJpbWFnZSIsInByZSIsIm5leHQiLCJpc05ldyIsImlzTW9kaWZpZWQiLCJzYWx0Um91bmRzIiwiaGFzaCIsIm1ldGhvZHMiLCJpc0NvcnJlY3RQYXNzd29yZCIsImNvbXBhcmUiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"Already connected to the database.\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MOONGODB_URI || \"mongodb://127.0.0.1:27017/\", {\n            dbName: \"Mahdi\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"Connected to the database.\");\n    } catch (error) {\n        console.error(\"Error connecting to the database:\", error);\n        throw error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYztBQUVYLE1BQU1DLGNBQWM7SUFDdkJGLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFJQyxhQUFhO1FBQ2JHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFDQSxJQUFJO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxJQUFJLDhCQUE4QjtZQUM3RUMsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN4QjtRQUNBWCxjQUFjO1FBQ2RHLFFBQVFDLEdBQUcsQ0FBQztJQUNoQixFQUFFLE9BQU9RLE9BQU87UUFDWlQsUUFBUVMsS0FBSyxDQUFDLHFDQUFxQ0E7UUFDbkQsTUFBTUE7SUFDVjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0anMvLi91dGlscy9kYXRhYmFzZS5qcz8yYjllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBtb25nb29zZS5zZXQoJ3N0cmljdFF1ZXJ5JywgdHJ1ZSk7XHJcblxyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZS4nKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy8nLCB7XHJcbiAgICAgICAgICAgIGRiTmFtZTogJ01haGRpJyxcclxuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuJylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6JywgZXJyb3IpXHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT09OR09EQl9VUkkiLCJkYk5hbWUiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();