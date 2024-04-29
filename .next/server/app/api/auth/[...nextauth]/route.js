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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            // Email/Password authentication provider\n            credentials: {\n                async authorize (credentials) {\n                    try {\n                        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_4__.connectToDB)();\n                        const { email, password } = credentials;\n                        // Find user by email\n                        const user = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                            email\n                        });\n                        // If user not found or password doesn't match, return null\n                        if (!user || !await user.isCorrectPassword(password)) {\n                            return null;\n                        }\n                        // Return the user object if authentication is successful\n                        return {\n                            id: user._id.toString(),\n                            email: user.email\n                        };\n                    } catch (error) {\n                        console.error(error);\n                        return null;\n                    }\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            // Google OAuth provider\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session }) {\n            if (session.user) {\n                // Fetch user data from the database based on session email\n                const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: session.user.email\n                });\n                session.user.id = sessionUser._id.toString();\n            }\n            return session;\n        },\n        async signIn ([profile, credentials]) {\n            try {\n                await (0,_utils_database__WEBPACK_IMPORTED_MODULE_4__.connectToDB)();\n                // Check if user exists using Google OAuth\n                const userExist = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: profile.email\n                });\n                // If user doesn't exist, create a new account\n                if (!userExist) {\n                    await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                        email: profile.email,\n                        username: profile.name.replace(\" \", \"\").toLowerCase(),\n                        image: profile.picture\n                    });\n                }\n                // Continue with the sign-in process\n                return true;\n            } catch (error) {\n                console.error(error);\n                return false;\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDVjtBQUN4QjtBQUNjO0FBRTlDLE1BQU1LLFVBQVVMLGdEQUFRQSxDQUFDO0lBQ3ZCTSxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQix5Q0FBeUM7WUFDekNNLGFBQWE7Z0JBQ1gsTUFBTUMsV0FBVUQsV0FBVztvQkFDekIsSUFBSTt3QkFDRixNQUFNSCw0REFBV0E7d0JBQ2pCLE1BQU0sRUFBRUssS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0g7d0JBRTVCLHFCQUFxQjt3QkFDckIsTUFBTUksT0FBTyxNQUFNUixvREFBSUEsQ0FBQ1MsT0FBTyxDQUFDOzRCQUFFSDt3QkFBTTt3QkFFeEMsMkRBQTJEO3dCQUMzRCxJQUFJLENBQUNFLFFBQVEsQ0FBRSxNQUFNQSxLQUFLRSxpQkFBaUIsQ0FBQ0gsV0FBWTs0QkFDdEQsT0FBTzt3QkFDVDt3QkFFQSx5REFBeUQ7d0JBQ3pELE9BQU87NEJBQUVJLElBQUlILEtBQUtJLEdBQUcsQ0FBQ0MsUUFBUTs0QkFBSVAsT0FBT0UsS0FBS0YsS0FBSzt3QkFBQztvQkFDdEQsRUFBRSxPQUFPUSxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO3dCQUNkLE9BQU87b0JBQ1Q7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FmLHNFQUFjQSxDQUFDO1lBQ2Isd0JBQXdCO1lBQ3hCaUIsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUU7WUFDdkIsSUFBSUEsUUFBUWYsSUFBSSxFQUFFO2dCQUNoQiwyREFBMkQ7Z0JBQzNELE1BQU1nQixjQUFjLE1BQU14QixvREFBSUEsQ0FBQ1MsT0FBTyxDQUFDO29CQUFFSCxPQUFPaUIsUUFBUWYsSUFBSSxDQUFDRixLQUFLO2dCQUFDO2dCQUNuRWlCLFFBQVFmLElBQUksQ0FBQ0csRUFBRSxHQUFHYSxZQUFZWixHQUFHLENBQUNDLFFBQVE7WUFDNUM7WUFDQSxPQUFPVTtRQUNUO1FBQ0EsTUFBTUUsUUFBTyxDQUFDQyxTQUFTdEIsWUFBWTtZQUNqQyxJQUFJO2dCQUNGLE1BQU1ILDREQUFXQTtnQkFFakIsMENBQTBDO2dCQUMxQyxNQUFNMEIsWUFBWSxNQUFNM0Isb0RBQUlBLENBQUNTLE9BQU8sQ0FBQztvQkFBRUgsT0FBT29CLFFBQVFwQixLQUFLO2dCQUFDO2dCQUU1RCw4Q0FBOEM7Z0JBQzlDLElBQUksQ0FBQ3FCLFdBQVc7b0JBQ2QsTUFBTTNCLG9EQUFJQSxDQUFDNEIsTUFBTSxDQUFDO3dCQUNoQnRCLE9BQU9vQixRQUFRcEIsS0FBSzt3QkFDcEJ1QixVQUFVSCxRQUFRSSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxLQUFLLElBQUlDLFdBQVc7d0JBQ25EQyxPQUFPUCxRQUFRUSxPQUFPO29CQUN4QjtnQkFDRjtnQkFFQSxvQ0FBb0M7Z0JBQ3BDLE9BQU87WUFDVCxFQUFFLE9BQU9wQixPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO2dCQUNkLE9BQU87WUFDVDtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlWixPQUFPQSxFQUFDO0FBR21CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGpzLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkB1dGlscy9kYXRhYmFzZVwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIC8vIEVtYWlsL1Bhc3N3b3JkIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscztcblxuICAgICAgICAgICAgLy8gRmluZCB1c2VyIGJ5IGVtYWlsXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIHVzZXIgbm90IGZvdW5kIG9yIHBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2gsIHJldHVybiBudWxsXG4gICAgICAgICAgICBpZiAoIXVzZXIgfHwgIShhd2FpdCB1c2VyLmlzQ29ycmVjdFBhc3N3b3JkKHBhc3N3b3JkKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgaWYgYXV0aGVudGljYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksIGVtYWlsOiB1c2VyLmVtYWlsIH07XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgLy8gR29vZ2xlIE9BdXRoIHByb3ZpZGVyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUXG4gICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAvLyBGZXRjaCB1c2VyIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UgYmFzZWQgb24gc2Vzc2lvbiBlbWFpbFxuICAgICAgICBjb25zdCBzZXNzaW9uVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHNlc3Npb25Vc2VyLl9pZC50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBzaWduSW4oW3Byb2ZpbGUsIGNyZWRlbnRpYWxzXSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB1c2VyIGV4aXN0cyB1c2luZyBHb29nbGUgT0F1dGhcbiAgICAgICAgY29uc3QgdXNlckV4aXN0ID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHByb2ZpbGUuZW1haWwgfSk7XG5cbiAgICAgICAgLy8gSWYgdXNlciBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgYSBuZXcgYWNjb3VudFxuICAgICAgICBpZiAoIXVzZXJFeGlzdCkge1xuICAgICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUubmFtZS5yZXBsYWNlKFwiIFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgaW1hZ2U6IHByb2ZpbGUucGljdHVyZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgc2lnbi1pbiBwcm9jZXNzXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuXG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIlVzZXIiLCJjb25uZWN0VG9EQiIsImhhbmRsZXIiLCJwcm92aWRlcnMiLCJjcmVkZW50aWFscyIsImF1dGhvcml6ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwiZmluZE9uZSIsImlzQ29ycmVjdFBhc3N3b3JkIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwic2Vzc2lvblVzZXIiLCJzaWduSW4iLCJwcm9maWxlIiwidXNlckV4aXN0IiwiY3JlYXRlIiwidXNlcm5hbWUiLCJuYW1lIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiaW1hZ2UiLCJwaWN0dXJlIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exist\"\n        ],\n        required: [\n            true,\n            \"Email is needed\"\n        ]\n    },\n    username: {\n        type: String,\n        unique: [\n            true,\n            \"username already exist\"\n        ],\n        required: [\n            true,\n            \"username is needed\"\n        ]\n    },\n    password: {\n        type: String,\n        require: [\n            true,\n            \"password is required\"\n        ],\n        minlength: [\n            8,\n            \"password must be at least 8 charachters\"\n        ]\n    },\n    image: {\n        type: String\n    }\n});\nuserSchema.pre(\"save\", async function(next) {\n    if (this.isNew || this.isModified(\"password\")) {\n        const saltRounds = 10;\n        this.password = await bcrypt.hash(this.password, saltRounds);\n    }\n    next();\n});\n// compare the incoming password with the hashed password\nuserSchema.methods.isCorrectPassword = async function(password) {\n    return await bcrypt.compare(password, this.password);\n};\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUMxQkksT0FBTztRQUNIQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUFzQjtRQUNyQ0MsVUFBVTtZQUFDO1lBQU07U0FBa0I7SUFDdkM7SUFDQUMsVUFBVTtRQUNOSixNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF5QjtRQUN4Q0MsVUFBVTtZQUFDO1lBQU07U0FBcUI7SUFDMUM7SUFDQUUsVUFBVTtRQUNOTCxNQUFNQztRQUNOSyxTQUFTO1lBQUM7WUFBTTtTQUF1QjtRQUN2Q0MsV0FBVztZQUFDO1lBQUc7U0FBMEM7SUFDN0Q7SUFDQUMsT0FBTztRQUNIUixNQUFNQztJQUNWO0FBQ0o7QUFDQUgsV0FBV1csR0FBRyxDQUFDLFFBQVEsZUFBZUMsSUFBSTtJQUN0QyxJQUFJLElBQUksQ0FBQ0MsS0FBSyxJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDLGFBQWE7UUFDN0MsTUFBTUMsYUFBYTtRQUNuQixJQUFJLENBQUNSLFFBQVEsR0FBRyxNQUFNUyxPQUFPQyxJQUFJLENBQUMsSUFBSSxDQUFDVixRQUFRLEVBQUVRO0lBQ25EO0lBRUFIO0FBQ0Y7QUFFQSx5REFBeUQ7QUFDekRaLFdBQVdrQixPQUFPLENBQUNDLGlCQUFpQixHQUFHLGVBQWVaLFFBQVE7SUFDNUQsT0FBTyxNQUFNUyxPQUFPSSxPQUFPLENBQUNiLFVBQVUsSUFBSSxDQUFDQSxRQUFRO0FBQ3JEO0FBRUYsTUFBTWMsT0FBT3RCLDRDQUFNQSxDQUFDc0IsSUFBSSxJQUFJdkIsK0NBQUtBLENBQUMsUUFBUUU7QUFDMUMsaUVBQWVxQixJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGpzLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgJ0VtYWlsIGFscmVhZHkgZXhpc3QnXSxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW1haWwgaXMgbmVlZGVkJ10sXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHVuaXF1ZTogW3RydWUsICd1c2VybmFtZSBhbHJlYWR5IGV4aXN0J10sXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ3VzZXJuYW1lIGlzIG5lZWRlZCddLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlOiBbdHJ1ZSwgJ3Bhc3N3b3JkIGlzIHJlcXVpcmVkJ10sXG4gICAgICAgIG1pbmxlbmd0aDogWzgsICdwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjaHRlcnMnXVxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxufSlcbnVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24obmV4dCkge1xuICAgIGlmICh0aGlzLmlzTmV3IHx8IHRoaXMuaXNNb2RpZmllZCgncGFzc3dvcmQnKSkge1xuICAgICAgY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuICAgICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHRSb3VuZHMpO1xuICAgIH1cbiAgXG4gICAgbmV4dCgpO1xuICB9KTtcbiAgXG4gIC8vIGNvbXBhcmUgdGhlIGluY29taW5nIHBhc3N3b3JkIHdpdGggdGhlIGhhc2hlZCBwYXNzd29yZFxuICB1c2VyU2NoZW1hLm1ldGhvZHMuaXNDb3JyZWN0UGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbihwYXNzd29yZCkge1xuICAgIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XG4gIH07XG5cbmNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpIFxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXF1aXJlIiwibWlubGVuZ3RoIiwiaW1hZ2UiLCJwcmUiLCJuZXh0IiwiaXNOZXciLCJpc01vZGlmaWVkIiwic2FsdFJvdW5kcyIsImJjcnlwdCIsImhhc2giLCJtZXRob2RzIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJjb21wYXJlIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"Already connected to the database.\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MOONGODB_URI || \"mongodb://127.0.0.1:27017/\", {\n            dbName: \"tetsdb\",\n            useNewUrlParser: true,\n            useCreateIndex: true,\n            useUnifiedTopology: true,\n            useFindAndModify: false\n        });\n        isConnected = true;\n        console.log(\"Connected to the database.\");\n    } catch (error) {\n        console.error(\"Error connecting to the database:\", error);\n        throw error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYztBQUVYLE1BQU1DLGNBQWM7SUFDdkJGLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFJQyxhQUFhO1FBQ2JHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFDQSxJQUFJO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxJQUFJLDhCQUE4QjtZQUM3RUMsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLGdCQUFnQjtZQUNoQkMsb0JBQW9CO1lBQ3BCQyxrQkFBa0I7UUFDdEI7UUFDQWIsY0FBYztRQUNkRyxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPVSxPQUFPO1FBQ1pYLFFBQVFXLEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ25ELE1BQU1BO0lBQ1Y7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGpzLy4vdXRpbHMvZGF0YWJhc2UuanM/MmI5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIHRydWUpO1xyXG5cclxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuJylcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT09OR09EQl9VUkkgfHwgJ21vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvJywge1xyXG4gICAgICAgICAgICBkYk5hbWU6ICd0ZXRzZGInLFxyXG4gICAgICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuJylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6JywgZXJyb3IpXHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT09OR09EQl9VUkkiLCJkYk5hbWUiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5Cbootcamp%5Ccss-minip%5Cnext-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();