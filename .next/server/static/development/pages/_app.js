module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    } // exposes the query to the user


    pageProps.query = ctx.query;
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: _style__WEBPACK_IMPORTED_MODULE_3__["theme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["GlobalStyle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./style/GlobalStyle.js":
/*!******************************!*\
  !*** ./style/GlobalStyle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./style/theme.js");


const {
  colors,
  fonts
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-BlackItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Bold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraLightBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraLightBETA.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-SemiBoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ThinBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ThinBETA.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-BoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraBold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-LightItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-LightItalicBETA.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Italic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ThinItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ThinItalicBETA.woff') format('woff');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraBoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-LightBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-LightBETA.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Black.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-SemiBold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter/Inter-ExtraLightItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter/Inter-ExtraLightItalicBETA.woff') format('woff');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: ${colors.blue};
    color: ${colors.white};
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.inter};
    color: ${colors.darkGrey};
    background-color: ${colors.offWhite};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
    color: ${colors.blue};
    display: inline-block;

    &:hover,
    &:focus {
    }
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
    &:focus,
    &:active {
      outline: 0;
    }
  }

  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./style/Section.js":
/*!**************************!*\
  !*** ./style/Section.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style */ "./style/index.js");


const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_1__["theme"];
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
  padding: 3rem 5rem;

  ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp900`
    padding: 2rem;
  `};
  ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp400`
    padding: 1rem;
  `};

  ${props => props.dark && styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
      background-color: ${colors.black};
      color: ${colors.lightestBlue};
      padding-bottom: 10rem;
      ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp900`
        padding-top: 2rem;
        padding-bottom: 10rem;
      `};
    `};

  & > div {
    max-width: 1400px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      display: inline-block;
      margin: 0;
      font-size: 1.75rem;
      background-image: linear-gradient(90deg, #d1d5da 50%, hsla(0, 0%, 100%, 0) 0);
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 10px 2px;
      padding-bottom: 6px;
      ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp600`
        font-size: 1.5rem;
      `};
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./style/index.js":
/*!************************!*\
  !*** ./style/index.js ***!
  \************************/
/*! exports provided: theme, mixins, media, GlobalStyle, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./style/theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins */ "./style/mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./style/media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _media__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyle */ "./style/GlobalStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _GlobalStyle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section */ "./style/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./style/media.js":
/*!************************!*\
  !*** ./style/media.js ***!
  \************************/
/*! exports provided: media, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const sizes = {
  bp900: 900,
  bp600: 600,
  bp400: 400
}; // iterate through the sizes and create a media template

const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    @media (max-width: ${emSize}em) {
      ${Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(...args)};
    }
  `;

  return accumulator;
}, {});
/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./style/mixins.js":
/*!*************************!*\
  !*** ./style/mixins.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style */ "./style/index.js");


const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_1__["theme"];
const mixins = {
  flexCenter: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    display: flex;
    justify-content: space-between;
  `,
  outline: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    outline: 1px solid red;
  `,
  ellipsis: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  blueButton: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    color: ${colors.white};
    background-color: ${colors.blue};
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0px 10px 30px -8px rgba(39, 88, 184, 0.5);
    filter: contrast(1.25);
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover,
    &:focus {
      box-shadow: 0px 6px 20px rgba(0, 118, 255, 0.23);
      background: rgba(0, 118, 255, 0.9);
    }
  `
};
/* harmony default export */ __webpack_exports__["default"] = (mixins);

/***/ }),

/***/ "./style/theme.js":
/*!************************!*\
  !*** ./style/theme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  colors: {
    orange: '#f66a0a',
    green: '#28a745',
    blue: '#0070f3',
    lightblue: '#79b8ff',
    lightestBlue: '#c8e1ff',
    offWhite: '#f6f8fa',
    grey: '#6a737d',
    grey2: '#586069',
    black: '#1A1E22',
    darkGrey: '#24292e',
    white: '#FFFFFF'
  },
  fonts: {
    inter: 'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
    mono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace'
  },
  transition: `all 0.2s ease-in-out`
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map