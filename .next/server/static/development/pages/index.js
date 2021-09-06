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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Charts.js":
/*!******************************!*\
  !*** ./components/Charts.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _styles_ChartsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ChartsStyles */ "./components/styles/ChartsStyles.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/components/Charts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Charts = ({
  langData,
  repoData
}) => {
  // Create chart with langData
  const {
    0: langChartData,
    1: setLangChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const initLangChart = () => {
    const ctx = document.getElementById('langChart');
    const labels = langData.map(lang => lang.label);
    const data = langData.map(lang => lang.value);
    setLangChartData(data);

    if (data.length > 0) {
      const backgroundColor = langData.map(({
        color
      }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`);
      const borderColor = langData.map(lang => `${lang.color}`);
      const chartType = 'pie';
      const axes = false;
      const legend = true;
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend
      };
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["buildChart"])(config);
    }
  }; // Create Most Starred chart


  const {
    0: starChartData,
    1: setStarChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const initStarChart = () => {
    const ctx = document.getElementById('starChart');
    const LIMIT = 5;
    const sortProperty = 'stargazers_count';
    const mostStarredRepos = repoData.filter(repo => !repo.fork).sort((a, b) => b[sortProperty] - a[sortProperty]).slice(0, LIMIT);
    const labels = mostStarredRepos.map(repo => repo.name);
    const data = mostStarredRepos.map(repo => repo[sortProperty]);
    setStarChartData(data);

    if (data.length > 0) {
      const chartType = 'bar';
      const axes = true;
      const legend = false;
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_2__["backgroundColor"],
        borderColor: _utils__WEBPACK_IMPORTED_MODULE_2__["borderColor"],
        axes,
        legend
      };
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["buildChart"])(config);
    }
  }; // Create Stars per language chart


  const {
    0: thirdChartData,
    1: setThirdChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const initThirdChart = () => {
    const ctx = document.getElementById('thirdChart');
    const filteredRepos = repoData.filter(repo => !repo.fork && repo.stargazers_count > 0);
    const uniqueLangs = new Set(filteredRepos.map(repo => repo.language));
    const labels = Array.from(uniqueLangs.values()).filter(l => l);
    const data = labels.map(lang => {
      const repos = filteredRepos.filter(repo => repo.language === lang);
      const starsArr = repos.map(r => r.stargazers_count);
      const starSum = starsArr.reduce((a, b) => a + b, 0);
      return starSum;
    });
    setThirdChartData(data);

    if (data.length > 0) {
      const chartType = 'doughnut';
      const axes = false;
      const legend = true;
      const borderColor = labels.map(label => _utils__WEBPACK_IMPORTED_MODULE_2__["langColors"][label]);
      const backgroundColor = borderColor.map(color => `${color}B3`);
      const config = {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend
      };
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["buildChart"])(config);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (langData.length && repoData.length) {
      initLangChart();
      initStarChart();
      initThirdChart();
    }
  }, []);
  const chartSize = 300;
  const langChartError = !(langChartData && langChartData.length > 0);
  const starChartError = !(starChartData && starChartData.length > 0);
  const thirdChartError = !(thirdChartData && thirdChartData.length > 0);
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_styles_ChartsStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("div", {
    className: "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Top Languages")), __jsx("div", {
    className: "chart-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, langChartError && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Nothing to see here!"), __jsx("canvas", {
    id: "langChart",
    width: chartSize,
    height: chartSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }))), __jsx("div", {
    className: "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Most Starred")), __jsx("div", {
    className: "chart-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, starChartError && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Nothing to see here!"), __jsx("canvas", {
    id: "starChart",
    width: chartSize,
    height: chartSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))), __jsx("div", {
    className: "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "Stars per Language")), __jsx("div", {
    className: "chart-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, thirdChartError && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Nothing to see here!"), __jsx("canvas", {
    id: "thirdChart",
    width: chartSize,
    height: chartSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })))));
};

Charts.propTypes = {
  langData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  repoData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Charts);

/***/ }),

/***/ "./components/Corner.js":
/*!******************************!*\
  !*** ./components/Corner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/components/Corner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_2__["theme"];
const CornerStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  .github-corner {
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    &:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
    svg {
      fill: ${colors.blue};
      color: ${colors.offWhite};
      .octo-arm {
        transform-origin: 130px 106px;
      }
    }
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    .github-corner {
      &:hover .octo-arm {
        animation: none;
      }
      .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
    }
  }
`;

const Corner = () => __jsx(CornerStyles, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/bchiang7/octoprofile",
  target: "_blank",
  rel: "noopener noreferrer",
  className: "github-corner",
  "aria-label": "View source on GitHub",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("svg", {
  width: "80",
  height: "80",
  viewBox: "0 0 250 250",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("path", {
  d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("path", {
  d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
  fill: "currentColor",
  className: "octo-arm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx("path", {
  d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
  fill: "currentColor",
  className: "octo-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (Corner);

/***/ }),

/***/ "./components/Error.js":
/*!*****************************!*\
  !*** ./components/Error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @primer/octicons-react */ "@primer/octicons-react");
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/components/Error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_5__["theme"];
const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  ${_style__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexCenter};
  flex-direction: column;
  background-color: ${colors.black};
  background-image: linear-gradient(${colors.black} 0%, ${colors.darkGrey} 100%);
  color: ${colors.offWhite};
  height: 100vh;
  padding-bottom: 20vh;
  font-size: 1.5rem;
  svg {
    color: ${colors.blue};
    margin-bottom: 3rem;
  }
  p {
    font-size: 1rem;
  }
  a {
    color: ${colors.lightblue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Error = ({
  error
}) => __jsx(ErrorStyles, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Head"], {
  title: "OctoProfile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Corner"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
  icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_3__["MarkGithub"],
  size: "large",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "OctoProfile"), error && __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, error.type === 403 ? __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "Oh no, you hit the", ' ', __jsx("a", {
  href: "https://developer.github.com/v3/rate_limit/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "rate limit"), "! Try again later.") : error.type === 404 ? __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "User not found!") : __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Oh no! Something went wrong. Try again later!")));

Error.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_2__["theme"];
const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer`
  ${_style__WEBPACK_IMPORTED_MODULE_2__["mixins"].flexCenter};
  padding: 2rem 5rem;
  color: ${colors.grey};
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  ${_style__WEBPACK_IMPORTED_MODULE_2__["media"].bp900`
    padding: 2rem;
  `};
  ${_style__WEBPACK_IMPORTED_MODULE_2__["media"].bp400`
    padding: 1rem;
  `};

  a {
    padding: 5px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Footer = () => __jsx(StyledFooter, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Built with"), __jsx("a", {
  href: "https://nextjs.org/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Next.js"), "\xB7", __jsx("a", {
  href: "https://www.chartjs.org/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Chart.js"), "\xB7", __jsx("a", {
  href: "https://github.com/IonicaBizau/node-gh-polyglot",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "GitHub Polyglot"), "\xB7", __jsx("a", {
  href: "https://www.styled-components.com/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Styled Components"), "\xB7", __jsx("a", {
  href: "https://github.com/joshwcomeau/react-flip-move",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "React Flip Move"), "and more!"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/muttaki/sdfsa/components/Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultTitle = 'OctoProfile';
const defaultDescription = 'A nicer look at your GitHub profile. With charts!';
const defaultOGURL = 'https://octoprofile.bchiang7.now.sh';
const defaultOGImage = 'https://octoprofile.bchiang7.now.sh/static/og.png';

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, props.title || defaultTitle), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicons/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "120x120",
  href: "/static/favicons/apple-touch-icon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/static/favicons/favicon-32x32.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/static/favicons/favicon-16x16.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("link", {
  rel: "manifest",
  href: "/static/favicons/site.webmanifest",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("link", {
  rel: "mask-icon",
  href: "/static/favicons/safari-pinned-tab.svg",
  color: "#1A1E22",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#1A1E22",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("meta", {
  name: "theme-color",
  content: "#0070f3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:title",
  content: props.title || defaultTitle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:creator",
  content: '@bchiang7',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:title",
  content: props.title || defaultTitle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:height",
  content: "630",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}));

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/RateLimit.js":
/*!*********************************!*\
  !*** ./components/RateLimit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/components/RateLimit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_3__["theme"];
const LimitStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main`
  .limit {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
  }
  .num {
    color: ${colors.grey};
    font-size: 20px;
    margin-bottom: 0.5rem;
  }
  p {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    margin: 0;
    color: ${colors.grey2};
  }
`;

const RateLimit = ({
  rateLimit
}) => __jsx(LimitStyles, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, rateLimit && __jsx("div", {
  className: "limit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("div", {
  className: "num",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, `${rateLimit.remaining} / ${rateLimit.limit}`), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Requests Left")));

RateLimit.propTypes = {
  rateLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RateLimit);

/***/ }),

/***/ "./components/Repos.js":
/*!*****************************!*\
  !*** ./components/Repos.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @primer/octicons-react */ "@primer/octicons-react");
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flip-move */ "react-flip-move");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flip_move__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _styles_ReposStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ReposStyles */ "./components/styles/ReposStyles.js");
/* harmony import */ var _styles_DropdownStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/DropdownStyles */ "./components/styles/DropdownStyles.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/components/Repos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Repos = ({
  repoData
}) => {
  const {
    0: topRepos,
    1: setTopRepos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: sortType,
    1: setSortType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('stars');
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const getTopRepos = type => {
    const LIMIT = 8;
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size'
    };
    const sortProperty = map[type];
    const sorted = repoData.filter(repo => !repo.fork).sort((a, b) => b[sortProperty] - a[sortProperty]).slice(0, LIMIT);
    setTopRepos(sorted);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (repoData.length) {
      getTopRepos();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => getTopRepos(sortType), [sortType]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = sortType => {
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ['stars', 'forks', 'size'];
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_styles_ReposStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Top Repos"), __jsx("div", {
    className: "dropdown-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "by"), __jsx(_styles_DropdownStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    active: dropdownOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("button", {
    className: "dropdown__button",
    onClick: () => toggleDropdown(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, sortType), __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["TriangleDown"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), __jsx("ul", {
    className: "dropdown__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, sortTypes.map((type, i) => __jsx("li", {
    className: "dropdown__list-item",
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => changeRepoSort(type),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, type))))))), __jsx("div", {
    className: "repo-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, topRepos.length > 0 ? __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_3___default.a, {
    typeName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, topRepos.map(repo => __jsx("li", {
    key: repo.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("a", {
    href: repo.html_url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "repo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: "repo__top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "repo__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Repo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, repo.name)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, repo.description)), __jsx("div", {
    className: "repo__stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("div", {
    className: "repo__stats--left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("div", {
    className: "language",
    style: {
      backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_4__["langColors"][repo.language]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), repo.language), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Star"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), repo.stargazers_count.toLocaleString()), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["RepoForked"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), repo.forks.toLocaleString())), __jsx("div", {
    className: "repo__stats--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, repo.size.toLocaleString(), " KB"))))))) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "No available repositories!"))));
};

Repos.propTypes = {
  repoData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Repos);

/***/ }),

/***/ "./components/UserInfo.js":
/*!********************************!*\
  !*** ./components/UserInfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @primer/octicons-react */ "@primer/octicons-react");
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_UserInfoStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/UserInfoStyles */ "./components/styles/UserInfoStyles.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/components/UserInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const UserInfo = ({
  userData
}) => __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["Section"], {
  dark: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, userData && __jsx(_styles_UserInfoStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, userData.avatar_url && __jsx("div", {
  className: "avatar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("img", {
  src: userData.avatar_url,
  alt: "avatar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), userData.name && __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, userData.name), userData.login && __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("a", {
  href: userData.html_url,
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "@", userData.login)), __jsx("div", {
  className: "info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, userData.company && __jsx("span", {
  className: "info__item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
  icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Briefcase"],
  size: "small",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), userData.company), userData.location && __jsx("span", {
  className: "info__item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
  icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Location"],
  size: "small",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), userData.location), userData.created_at && __jsx("span", {
  className: "info__item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
  icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Calendar"],
  size: "small",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), "Joined", ' ', new Date(userData.created_at).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}))), __jsx("div", {
  className: "stats",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("div", {
  className: "stats__item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("span", {
  className: "num",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, userData.public_repos.toLocaleString()), __jsx("span", {
  className: "num-label",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "Repositories")), __jsx("div", {
  className: "stats__item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("span", {
  className: "num",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, userData.followers.toLocaleString()), __jsx("span", {
  className: "num-label",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, "Followers")), __jsx("div", {
  className: "stats__item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("span", {
  className: "num",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, userData.following.toLocaleString()), __jsx("span", {
  className: "num-label",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, "Following")))));

UserInfo.propTypes = {
  userData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Head, Corner, UserInfo, Charts, Repos, Footer, Error, RateLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _Head__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Corner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Corner */ "./components/Corner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Corner", function() { return _Corner__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserInfo */ "./components/UserInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _UserInfo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Charts */ "./components/Charts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Charts", function() { return _Charts__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Repos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Repos */ "./components/Repos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repos", function() { return _Repos__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Error */ "./components/Error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return _Error__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _RateLimit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RateLimit */ "./components/RateLimit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RateLimit", function() { return _RateLimit__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./components/styles/ChartsStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/ChartsStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "./style/index.js");


const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_1__["theme"];
const ChartsStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  max-width: 1200px !important;
  margin-top: -8rem !important;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp900`
    justify-items: center;
  `};

  .chart {
    background-color: ${colors.white};
    max-width: 500px;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp400`
      padding: 2rem 1rem;
    `};

    header {
      ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexBetween};
      h2 {
        font-size: 1.5rem;
      }
    }
    p {
      color: ${colors.grey2};
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (ChartsStyles);

/***/ }),

/***/ "./components/styles/DropdownStyles.js":
/*!*********************************************!*\
  !*** ./components/styles/DropdownStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "./style/index.js");


const {
  colors
} = _style__WEBPACK_IMPORTED_MODULE_1__["theme"];
const DropdownStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: relative;
  width: 100px;
  font-size: 14px;
  font-weight: 500;

  .dropdown__button {
    ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexBetween};
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-align: left;
    color: ${colors.blue};
    background-color: transparent;
    border: 1px solid rgba(0, 118, 255, 0.1);
    padding: 10px 7px;
    border-radius: 5px;

    &:hover,
    &:focus {
      color: ${colors.blue};
      background: rgba(0, 118, 255, 0.1);
      border-color: rgba(0, 118, 255, 0.1);
    }
    svg {
      margin-left: 0.5rem;
    }
    label {
      transition: ${_style__WEBPACK_IMPORTED_MODULE_1__["theme"].transition};
      cursor: pointer;
    }
  }
  .dropdown__list {
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    transition: ${_style__WEBPACK_IMPORTED_MODULE_1__["theme"].transition};
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    background-color: ${colors.offWhite};
  }
  .dropdown__list-item {
    border-radius: 0;
    transition: ${_style__WEBPACK_IMPORTED_MODULE_1__["theme"].transition};
    &:hover,
    &:focus {
      background-color: ${colors.lightestBlue};
    }
    &:first-of-type {
      button {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &:last-of-type {
      button {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    button {
      color: ${colors.blue};
      background: rgba(0, 118, 255, 0.1);
      padding: 10px 7px;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      text-align: left;
    }
  }
  ${props => props.active && styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .dropdown__list {
        opacity: 1;
        visibility: visible;
      }
      .dropdown__button {
        background: rgba(0, 118, 255, 0.1);
        svg {
          transform: rotate(0.5turn);
        }
      }
    `}
`;
/* harmony default export */ __webpack_exports__["default"] = (DropdownStyles);

/***/ }),

/***/ "./components/styles/ReposStyles.js":
/*!******************************************!*\
  !*** ./components/styles/ReposStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "./style/index.js");


const {
  colors,
  fonts
} = _style__WEBPACK_IMPORTED_MODULE_1__["theme"];
const ReposStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  .dropdown-wrapper {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${colors.grey};

    .label {
      margin: 0 1rem;
    }
  }
  .repo-list {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;

      li {
        .repo {
          ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexBetween};
          flex-direction: column;
          padding: 2rem;
          height: 100%;
          color: ${colors.grey2};
          background-color: ${colors.white};
          border-radius: 0.25rem;
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
          transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
          ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp600`
            padding: 1.5rem;
          `};

          &:hover,
          &:focus {
            box-shadow: 0 8px 20px -15px rgba(0, 0, 0, 0.2);
          }

          h3 {
            ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].ellipsis};
            color: ${colors.darkGrey};
            margin-bottom: 0.75rem;
            font-size: 20px;
            font-family: ${fonts.mono};
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          p {
            font-size: 14px;
            margin-bottom: 2rem;
          }

          &__header {
            margin-bottom: 2rem;
          }

          &__name {
            display: flex;
            align-items: center;
            svg {
              margin-right: 0.5rem;
              min-width: 16px;
            }
            h3 {
              margin: 0;
            }
          }

          &__stats {
            ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexBetween};
            font-size: 13px;
            color: ${colors.grey};

            &--left {
              flex-grow: 1;
              display: flex;

              span {
                display: flex;
                align-items: center;
                margin-right: 0.75rem;
                svg {
                  margin-right: 0.25rem;
                }
                .language {
                  border-radius: 100%;
                  width: 10px;
                  height: 10px;
                  background-color: blue;
                  margin-right: 0.25rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (ReposStyles);

/***/ }),

/***/ "./components/styles/UserInfoStyles.js":
/*!*********************************************!*\
  !*** ./components/styles/UserInfoStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style */ "./style/index.js");


const {
  colors,
  fonts
} = _style__WEBPACK_IMPORTED_MODULE_1__["theme"];
const UserInfoStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexCenter};
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;

  ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp600`
    padding-top: 4rem;
  `};

  .avatar {
    ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexCenter};
    margin-bottom: 1.5rem;
    border: 0.5rem solid ${colors.blue};
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
    ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp400`
      font-size: 2rem;
    `};
  }
  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    a {
      color: ${colors.blue};
    }
  }
  h3 {
    color: ${colors.lightblue};
  }

  a {
    color: ${colors.lightestBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .info {
    ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexCenter};
    ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp600`
      display: block;
    `};

    &__item {
      ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexCenter};
      margin: 0 1rem 0.5rem;
      white-space: nowrap;

      svg {
        margin-right: 10px;
      }
    }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;

    &__item {
      ${_style__WEBPACK_IMPORTED_MODULE_1__["mixins"].flexCenter};
      flex-direction: column;
      background-color: ${colors.darkGrey};
      padding: 1rem;
      border-radius: 0.25rem;
      text-align: center;
      ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp400`
        padding: 1rem 0.5rem;
      `};

      .num {
        color: ${colors.offWhite};
        font-size: 1.5rem;
        ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp400`
          font-size: 1rem;
        `};
      }
      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 0.75rem;
        color: rgba(200, 225, 255, 0.7);
        ${_style__WEBPACK_IMPORTED_MODULE_1__["media"].bp400`
          font-size: 0.5rem;
        `};
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (UserInfoStyles);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @primer/octicons-react */ "@primer/octicons-react");
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style */ "./style/index.js");
var _jsxFileName = "/home/muttaki/sdfsa/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  colors,
  fonts
} = _style__WEBPACK_IMPORTED_MODULE_5__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  ${_style__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexCenter};
  background-color: ${colors.black};
  background-image: linear-gradient(${colors.black} 0%, ${colors.darkGrey} 100%);
  color: ${colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;
    svg {
      color: ${colors.blue};
    }
    label {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      margin: 2rem;
    }
    input {
      background-color: #26303c;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: ${colors.lightblue};
      font-family: ${fonts.mono};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }

    .submit {
      ${_style__WEBPACK_IMPORTED_MODULE_5__["mixins"].blueButton};
      margin-top: 3rem;
      filter: none;
    }
  }
`;

const Home = () => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleChange = e => setUsername(e.target.value);

  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Head"], {
    title: "Git Profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(StyledContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
        pathname: '/user',
        query: {
          id: username
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    icon: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["MarkGithub"],
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Find Your GitHub Profile"), __jsx("input", {
    name: "username",
    type: "text",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./utils/buildChart.js":
/*!*****************************!*\
  !*** ./utils/buildChart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style */ "./style/index.js");


const {
  fonts
} = _style__WEBPACK_IMPORTED_MODULE_1__["theme"];

const buildScales = axes => {
  const scales = {
    xAxes: [{
      ticks: {
        fontFamily: fonts.inter,
        fontSize: 12
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontFamily: fonts.inter,
        fontSize: 12
      }
    }]
  };
  return axes ? scales : null;
};

const buildLegend = legend => {
  const leg = {
    position: 'right',
    labels: {
      fontFamily: fonts.inter
    }
  };
  return legend ? leg : null;
};

const buildChart = config => {
  const {
    ctx,
    chartType,
    labels,
    data,
    backgroundColor,
    borderColor,
    axes,
    legend
  } = config;
  return new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(ctx, {
    type: chartType,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor,
        borderColor,
        borderWidth: 1
      }]
    },
    options: {
      scales: buildScales(axes),
      legend: buildLegend(legend),
      tooltips: {
        titleFontFamily: fonts.inter,
        bodyFontFamily: fonts.inter,
        cornerRadius: 3
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (buildChart);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: mockUserData, mockRepoData, mockLangData, langColors, backgroundColor, borderColor, buildChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor", function() { return backgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony import */ var _mockUserData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mockUserData */ "./utils/mockUserData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockUserData", function() { return _mockUserData__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mockRepoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockRepoData */ "./utils/mockRepoData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockRepoData", function() { return _mockRepoData__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mockLangData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockLangData */ "./utils/mockLangData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockLangData", function() { return _mockLangData__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _langColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./langColors */ "./utils/langColors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "langColors", function() { return _langColors__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _buildChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildChart */ "./utils/buildChart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildChart", function() { return _buildChart__WEBPACK_IMPORTED_MODULE_4__["default"]; });






const backgroundColor = ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 159, 64, 0.7)'];
const borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];


/***/ }),

/***/ "./utils/langColors.js":
/*!*****************************!*\
  !*** ./utils/langColors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const langColors = {
  Mercury: '#ff2b2b',
  TypeScript: '#2b7489',
  PureBasic: '#5a6986',
  'Objective-C++': '#6866fb',
  Self: '#0579aa',
  edn: '#db5855',
  NewLisp: '#87AED7',
  'Jupyter Notebook': '#DA5B0B',
  Rebol: '#358a5b',
  Frege: '#00cafe',
  Dart: '#00B4AB',
  AspectJ: '#a957b0',
  Shell: '#89e051',
  'Web Ontology Language': '#9cc9dd',
  xBase: '#403a40',
  Eiffel: '#946d57',
  Nix: '#7e7eff',
  RAML: '#77d9fb',
  MTML: '#b7e1f4',
  Racket: '#22228f',
  Elixir: '#6e4a7e',
  SAS: '#B34936',
  Agda: '#315665',
  wisp: '#7582D1',
  D: '#ba595e',
  Kotlin: '#F18E33',
  Opal: '#f7ede0',
  Crystal: '#776791',
  'Objective-C': '#438eff',
  'ColdFusion CFC': '#ed2cd6',
  Oz: '#fab738',
  Mirah: '#c7a938',
  'Objective-J': '#ff0c5a',
  Gosu: '#82937f',
  FreeMarker: '#0050b2',
  Ruby: '#701516',
  'Component Pascal': '#b0ce4e',
  Arc: '#aa2afe',
  Brainfuck: '#2F2530',
  Nit: '#009917',
  APL: '#5A8164',
  Go: '#375eab',
  'Visual Basic': '#945db7',
  PHP: '#4F5D95',
  Cirru: '#ccccff',
  SQF: '#3F3F3F',
  Glyph: '#e4cc98',
  Java: '#b07219',
  MAXScript: '#00a6a6',
  Scala: '#DC322F',
  Makefile: '#427819',
  ColdFusion: '#ed2cd6',
  Perl: '#0298c3',
  Lua: '#000080',
  Vue: '#2c3e50',
  Verilog: '#b2b7f8',
  Factor: '#636746',
  Haxe: '#df7900',
  'Pure Data': '#91de79',
  Forth: '#341708',
  Red: '#ee0000',
  Hy: '#7790B2',
  Volt: '#1F1F1F',
  LSL: '#3d9970',
  eC: '#913960',
  CoffeeScript: '#244776',
  HTML: '#e44b23',
  Lex: '#DBCA00',
  'API Blueprint': '#2ACCA8',
  Swift: '#ffac45',
  C: '#555555',
  AutoHotkey: '#6594b9',
  Isabelle: '#FEFE00',
  Metal: '#8f14e9',
  Clarion: '#db901e',
  JSONiq: '#40d47e',
  Boo: '#d4bec1',
  AutoIt: '#1C3552',
  Clojure: '#db5855',
  Rust: '#dea584',
  Prolog: '#74283c',
  SourcePawn: '#5c7611',
  AMPL: '#E6EFBB',
  FORTRAN: '#4d41b1',
  ANTLR: '#9DC3FF',
  Harbour: '#0e60e3',
  Tcl: '#e4cc98',
  BlitzMax: '#cd6400',
  PigLatin: '#fcd7de',
  Lasso: '#999999',
  ECL: '#8a1267',
  VHDL: '#adb2cb',
  Elm: '#60B5CC',
  'Propeller Spin': '#7fa2a7',
  X10: '#4B6BEF',
  IDL: '#a3522f',
  ATS: '#1ac620',
  Ada: '#02f88c',
  'Unity3D Asset': '#ab69a1',
  Nu: '#c9df40',
  LFE: '#004200',
  SuperCollider: '#46390b',
  Oxygene: '#cdd0e3',
  ASP: '#6a40fd',
  Assembly: '#6E4C13',
  Gnuplot: '#f0a9f0',
  JFlex: '#DBCA00',
  NetLinx: '#0aa0ff',
  Turing: '#45f715',
  Vala: '#fbe5cd',
  Processing: '#0096D8',
  Arduino: '#bd79d1',
  FLUX: '#88ccff',
  NetLogo: '#ff6375',
  'C Sharp': '#178600',
  CSS: '#563d7c',
  'Emacs Lisp': '#c065db',
  Stan: '#b2011d',
  SaltStack: '#646464',
  QML: '#44a51c',
  Pike: '#005390',
  LOLCODE: '#cc9900',
  ooc: '#b0b77e',
  Handlebars: '#01a9d6',
  J: '#9EEDFF',
  Mask: '#f97732',
  EmberScript: '#FFF4F3',
  TeX: '#3D6117',
  Nemerle: '#3d3c6e',
  KRL: '#28431f',
  'Ren\'Py': '#ff7f7f',
  'Unified Parallel C': '#4e3617',
  Golo: '#88562A',
  Fancy: '#7b9db4',
  OCaml: '#3be133',
  Shen: '#120F14',
  Pascal: '#b0ce4e',
  'F#': '#b845fc',
  Puppet: '#302B6D',
  ActionScript: '#882B0F',
  Diff: '#88dddd',
  'Ragel in Ruby Host': '#9d5200',
  Fantom: '#dbded5',
  Zephir: '#118f9e',
  Click: '#E4E6F3',
  Smalltalk: '#596706',
  DM: '#447265',
  Ioke: '#078193',
  PogoScript: '#d80074',
  LiveScript: '#499886',
  JavaScript: '#f1e05a',
  VimL: '#199f4b',
  PureScript: '#1D222D',
  ABAP: '#E8274B',
  Matlab: '#bb92ac',
  Slash: '#007eff',
  R: '#198ce7',
  Erlang: '#B83998',
  Pan: '#cc0000',
  LookML: '#652B81',
  Eagle: '#814C05',
  Scheme: '#1e4aec',
  PLSQL: '#dad8d8',
  Python: '#3572A5',
  Max: '#c4a79c',
  'Common Lisp': '#3fb68b',
  Latte: '#A8FF97',
  XQuery: '#5232e7',
  Omgrofl: '#cabbff',
  XC: '#99DA07',
  Nimrod: '#37775b',
  SystemVerilog: '#DAE1C2',
  Chapel: '#8dc63f',
  Groovy: '#e69f56',
  Dylan: '#6c616e',
  E: '#ccce35',
  Parrot: '#f3ca0a',
  'Grammatical Framework': '#79aa7a',
  'Game Maker Language': '#8fb200',
  Papyrus: '#6600cc',
  'NetLinx+ERB': '#747faa',
  Clean: '#3F85AF',
  Alloy: '#64C800',
  Squirrel: '#800000',
  PAWN: '#dbb284',
  UnrealScript: '#a54c4d',
  'Standard ML': '#dc566d',
  Slim: '#ff8f77',
  Perl6: '#0000fb',
  Julia: '#a270ba',
  Haskell: '#29b544',
  NCL: '#28431f',
  Io: '#a9188d',
  Rouge: '#cc0088',
  cpp: '#f34b7d',
  'AGS Script': '#B9D9FF',
  Dogescript: '#cca760',
  nesC: '#94B0C7'
};
/* harmony default export */ __webpack_exports__["default"] = (langColors);

/***/ }),

/***/ "./utils/mockLangData.js":
/*!*******************************!*\
  !*** ./utils/mockLangData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: 'JavaScript',
  value: 16,
  color: '#f1e05a'
}, {
  label: 'CSS',
  value: 9,
  color: '#563d7c'
}, {
  label: 'HTML',
  value: 7,
  color: '#e34c26'
}, {
  label: 'Vue',
  value: 5,
  color: '#2c3e50'
}, {
  label: 'Others',
  value: 2,
  color: '#ccc'
}, {
  label: 'Shell',
  value: 2,
  color: '#89e051'
}]);

/***/ }),

/***/ "./utils/mockRepoData.js":
/*!*******************************!*\
  !*** ./utils/mockRepoData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 168088328,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNjgwODgzMjg=',
  name: 'Advanced-React',
  full_name: 'bchiang7/Advanced-React',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Advanced-React',
  description: 'Starter Files and Solutions for Full Stack Advanced React and GraphQL ',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/Advanced-React',
  forks_url: 'https://api.github.com/repos/bchiang7/Advanced-React/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Advanced-React/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Advanced-React/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Advanced-React/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Advanced-React/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Advanced-React/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Advanced-React/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Advanced-React/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Advanced-React/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Advanced-React/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Advanced-React/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Advanced-React/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Advanced-React/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Advanced-React/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Advanced-React/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Advanced-React/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Advanced-React/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Advanced-React/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Advanced-React/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Advanced-React/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Advanced-React/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Advanced-React/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Advanced-React/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Advanced-React/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Advanced-React/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Advanced-React/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Advanced-React/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Advanced-React/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Advanced-React/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Advanced-React/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Advanced-React/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Advanced-React/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Advanced-React/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Advanced-React/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Advanced-React/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Advanced-React/deployments',
  created_at: '2019-01-29T04:21:52Z',
  updated_at: '2019-04-09T03:36:55Z',
  pushed_at: '2019-04-09T03:36:52Z',
  git_url: 'git://github.com/bchiang7/Advanced-React.git',
  ssh_url: 'git@github.com:bchiang7/Advanced-React.git',
  clone_url: 'https://github.com/bchiang7/Advanced-React.git',
  svn_url: 'https://github.com/bchiang7/Advanced-React',
  homepage: 'https://AdvancedReact.com',
  size: 5132,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 75871112,
  node_id: 'MDEwOlJlcG9zaXRvcnk3NTg3MTExMg==',
  name: 'bchiang7.github.io',
  full_name: 'bchiang7/bchiang7.github.io',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/bchiang7.github.io',
  description: 'Third iteration of my personal site built with Jekyll',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io',
  forks_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/bchiang7.github.io/deployments',
  created_at: '2016-12-07T20:01:55Z',
  updated_at: '2019-06-11T13:33:13Z',
  pushed_at: '2019-01-19T17:43:31Z',
  git_url: 'git://github.com/bchiang7/bchiang7.github.io.git',
  ssh_url: 'git@github.com:bchiang7/bchiang7.github.io.git',
  clone_url: 'https://github.com/bchiang7/bchiang7.github.io.git',
  svn_url: 'https://github.com/bchiang7/bchiang7.github.io',
  homepage: 'https://bchiang7.github.io/',
  size: 57230,
  stargazers_count: 94,
  watchers_count: 94,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 43,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 1,
  license: null,
  forks: 43,
  open_issues: 1,
  watchers: 94,
  default_branch: 'master'
}, {
  id: 44138961,
  node_id: 'MDEwOlJlcG9zaXRvcnk0NDEzODk2MQ==',
  name: 'Bookmarks',
  full_name: 'bchiang7/Bookmarks',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Bookmarks',
  description: 'A Collection of Links',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/Bookmarks',
  forks_url: 'https://api.github.com/repos/bchiang7/Bookmarks/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Bookmarks/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Bookmarks/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Bookmarks/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Bookmarks/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Bookmarks/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Bookmarks/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Bookmarks/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Bookmarks/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Bookmarks/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Bookmarks/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Bookmarks/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Bookmarks/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Bookmarks/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Bookmarks/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Bookmarks/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Bookmarks/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Bookmarks/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Bookmarks/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Bookmarks/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Bookmarks/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Bookmarks/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Bookmarks/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Bookmarks/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Bookmarks/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Bookmarks/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Bookmarks/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Bookmarks/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Bookmarks/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Bookmarks/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Bookmarks/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Bookmarks/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Bookmarks/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Bookmarks/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Bookmarks/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Bookmarks/deployments',
  created_at: '2015-10-12T23:05:42Z',
  updated_at: '2015-10-16T17:24:43Z',
  pushed_at: '2015-10-21T00:34:13Z',
  git_url: 'git://github.com/bchiang7/Bookmarks.git',
  ssh_url: 'git@github.com:bchiang7/Bookmarks.git',
  clone_url: 'https://github.com/bchiang7/Bookmarks.git',
  svn_url: 'https://github.com/bchiang7/Bookmarks',
  homepage: 'http://brittanychiang.com/bookmarks',
  size: 1604,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'HTML',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 43024992,
  node_id: 'MDEwOlJlcG9zaXRvcnk0MzAyNDk5Mg==',
  name: 'Calendr',
  full_name: 'bchiang7/Calendr',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Calendr',
  description: 'HCI Term Project: an all-in-one calendar/homework assignment/to-do list application PROTOTYPE',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/Calendr',
  forks_url: 'https://api.github.com/repos/bchiang7/Calendr/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Calendr/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Calendr/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Calendr/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Calendr/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Calendr/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Calendr/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Calendr/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Calendr/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Calendr/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Calendr/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Calendr/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Calendr/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Calendr/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Calendr/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Calendr/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Calendr/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Calendr/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Calendr/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Calendr/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Calendr/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Calendr/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Calendr/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Calendr/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Calendr/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Calendr/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Calendr/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Calendr/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Calendr/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Calendr/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Calendr/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Calendr/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Calendr/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Calendr/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Calendr/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Calendr/deployments',
  created_at: '2015-09-23T20:28:48Z',
  updated_at: '2015-09-24T13:35:02Z',
  pushed_at: '2015-09-24T00:19:04Z',
  git_url: 'git://github.com/bchiang7/Calendr.git',
  ssh_url: 'git@github.com:bchiang7/Calendr.git',
  clone_url: 'https://github.com/bchiang7/Calendr.git',
  svn_url: 'https://github.com/bchiang7/Calendr',
  homepage: 'http://www.ccs.neu.edu/home/bchiang7/calendr/login.html',
  size: 704,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'HTML',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 50710824,
  node_id: 'MDEwOlJlcG9zaXRvcnk1MDcxMDgyNA==',
  name: 'cardculator',
  full_name: 'bchiang7/cardculator',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/cardculator',
  description: 'Credit card point calculator prototype',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/cardculator',
  forks_url: 'https://api.github.com/repos/bchiang7/cardculator/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/cardculator/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/cardculator/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/cardculator/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/cardculator/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/cardculator/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/cardculator/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/cardculator/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/cardculator/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/cardculator/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/cardculator/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/cardculator/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/cardculator/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/cardculator/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/cardculator/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/cardculator/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/cardculator/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/cardculator/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/cardculator/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/cardculator/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/cardculator/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/cardculator/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/cardculator/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/cardculator/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/cardculator/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/cardculator/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/cardculator/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/cardculator/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/cardculator/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/cardculator/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/cardculator/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/cardculator/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/cardculator/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/cardculator/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/cardculator/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/cardculator/deployments',
  created_at: '2016-01-30T05:35:09Z',
  updated_at: '2018-09-28T14:11:40Z',
  pushed_at: '2016-01-30T05:35:33Z',
  git_url: 'git://github.com/bchiang7/cardculator.git',
  ssh_url: 'git@github.com:bchiang7/cardculator.git',
  clone_url: 'https://github.com/bchiang7/cardculator.git',
  svn_url: 'https://github.com/bchiang7/cardculator',
  homepage: '',
  size: 7,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 58243673,
  node_id: 'MDEwOlJlcG9zaXRvcnk1ODI0MzY3Mw==',
  name: 'chrome-tabs',
  full_name: 'bchiang7/chrome-tabs',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/chrome-tabs',
  description: 'Chrome-like tabs with bootstrap & angular',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/chrome-tabs',
  forks_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/chrome-tabs/deployments',
  created_at: '2016-05-07T01:31:13Z',
  updated_at: '2016-10-08T00:21:10Z',
  pushed_at: '2016-05-07T02:24:42Z',
  git_url: 'git://github.com/bchiang7/chrome-tabs.git',
  ssh_url: 'git@github.com:bchiang7/chrome-tabs.git',
  clone_url: 'https://github.com/bchiang7/chrome-tabs.git',
  svn_url: 'https://github.com/bchiang7/chrome-tabs',
  homepage: '',
  size: 2797,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 1,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 93652050,
  node_id: 'MDEwOlJlcG9zaXRvcnk5MzY1MjA1MA==',
  name: 'CS3200-Project',
  full_name: 'bchiang7/CS3200-Project',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/CS3200-Project',
  description: 'Final Project for CS 3200 Database Design, Summer 1 2017',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/CS3200-Project',
  forks_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/CS3200-Project/deployments',
  created_at: '2017-06-07T15:41:31Z',
  updated_at: '2019-05-13T08:13:38Z',
  pushed_at: '2017-06-22T19:30:24Z',
  git_url: 'git://github.com/bchiang7/CS3200-Project.git',
  ssh_url: 'git@github.com:bchiang7/CS3200-Project.git',
  clone_url: 'https://github.com/bchiang7/CS3200-Project.git',
  svn_url: 'https://github.com/bchiang7/CS3200-Project',
  homepage: '',
  size: 1538,
  stargazers_count: 2,
  watchers_count: 2,
  language: 'HTML',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 2,
  default_branch: 'master'
}, {
  id: 70996751,
  node_id: 'MDEwOlJlcG9zaXRvcnk3MDk5Njc1MQ==',
  name: 'DemoWebApp',
  full_name: 'bchiang7/DemoWebApp',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/DemoWebApp',
  description: 'Simple weather web app using OpenWeatherMap API and Google Maps API',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/DemoWebApp',
  forks_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/DemoWebApp/deployments',
  created_at: '2016-10-15T15:38:53Z',
  updated_at: '2019-05-17T09:16:40Z',
  pushed_at: '2016-11-04T13:52:42Z',
  git_url: 'git://github.com/bchiang7/DemoWebApp.git',
  ssh_url: 'git@github.com:bchiang7/DemoWebApp.git',
  clone_url: 'https://github.com/bchiang7/DemoWebApp.git',
  svn_url: 'https://github.com/bchiang7/DemoWebApp',
  homepage: 'http://quiet-dusk-89245.herokuapp.com/',
  size: 242,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'JavaScript',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 2,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 2,
  open_issues: 0,
  watchers: 1,
  default_branch: 'master'
}, {
  id: 93670007,
  node_id: 'MDEwOlJlcG9zaXRvcnk5MzY3MDAwNw==',
  name: 'dotfiles',
  full_name: 'bchiang7/dotfiles',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/dotfiles',
  description: 'To make life easier when setting up a new computer',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/dotfiles',
  forks_url: 'https://api.github.com/repos/bchiang7/dotfiles/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/dotfiles/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/dotfiles/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/dotfiles/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/dotfiles/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/dotfiles/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/dotfiles/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/dotfiles/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/dotfiles/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/dotfiles/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/dotfiles/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/dotfiles/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/dotfiles/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/dotfiles/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/dotfiles/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/dotfiles/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/dotfiles/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/dotfiles/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/dotfiles/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/dotfiles/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/dotfiles/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/dotfiles/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/dotfiles/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/dotfiles/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/dotfiles/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/dotfiles/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/dotfiles/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/dotfiles/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/dotfiles/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/dotfiles/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/dotfiles/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/dotfiles/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/dotfiles/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/dotfiles/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/dotfiles/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/dotfiles/deployments',
  created_at: '2017-06-07T19:05:44Z',
  updated_at: '2019-03-19T18:44:10Z',
  pushed_at: '2019-03-12T18:58:00Z',
  git_url: 'git://github.com/bchiang7/dotfiles.git',
  ssh_url: 'git@github.com:bchiang7/dotfiles.git',
  clone_url: 'https://github.com/bchiang7/dotfiles.git',
  svn_url: 'https://github.com/bchiang7/dotfiles',
  homepage: '',
  size: 84057,
  stargazers_count: 6,
  watchers_count: 6,
  language: 'Shell',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 6,
  default_branch: 'master'
}, {
  id: 56264391,
  node_id: 'MDEwOlJlcG9zaXRvcnk1NjI2NDM5MQ==',
  name: 'feedback-loop',
  full_name: 'bchiang7/feedback-loop',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/feedback-loop',
  description: 'Final project for 5D Foundations',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/feedback-loop',
  forks_url: 'https://api.github.com/repos/bchiang7/feedback-loop/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/feedback-loop/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/feedback-loop/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/feedback-loop/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/feedback-loop/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/feedback-loop/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/feedback-loop/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/feedback-loop/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/feedback-loop/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/feedback-loop/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/feedback-loop/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/feedback-loop/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/feedback-loop/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/feedback-loop/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/feedback-loop/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/feedback-loop/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/feedback-loop/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/feedback-loop/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/feedback-loop/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/feedback-loop/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/feedback-loop/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/feedback-loop/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/feedback-loop/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/feedback-loop/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/feedback-loop/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/feedback-loop/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/feedback-loop/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/feedback-loop/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/feedback-loop/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/feedback-loop/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/feedback-loop/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/feedback-loop/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/feedback-loop/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/feedback-loop/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/feedback-loop/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/feedback-loop/deployments',
  created_at: '2016-04-14T19:26:20Z',
  updated_at: '2018-09-28T14:12:15Z',
  pushed_at: '2016-04-16T19:09:10Z',
  git_url: 'git://github.com/bchiang7/feedback-loop.git',
  ssh_url: 'git@github.com:bchiang7/feedback-loop.git',
  clone_url: 'https://github.com/bchiang7/feedback-loop.git',
  svn_url: 'https://github.com/bchiang7/feedback-loop',
  homepage: '',
  size: 9591,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 1,
  open_issues: 0,
  watchers: 1,
  default_branch: 'master'
}, {
  id: 49181490,
  node_id: 'MDEwOlJlcG9zaXRvcnk0OTE4MTQ5MA==',
  name: 'fontipsums',
  full_name: 'bchiang7/fontipsums',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/fontipsums',
  description: 'Pretty fonts and funny ipsums',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/fontipsums',
  forks_url: 'https://api.github.com/repos/bchiang7/fontipsums/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/fontipsums/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/fontipsums/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/fontipsums/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/fontipsums/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/fontipsums/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/fontipsums/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/fontipsums/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/fontipsums/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/fontipsums/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/fontipsums/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/fontipsums/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/fontipsums/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/fontipsums/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/fontipsums/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/fontipsums/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/fontipsums/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/fontipsums/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/fontipsums/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/fontipsums/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/fontipsums/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/fontipsums/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/fontipsums/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/fontipsums/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/fontipsums/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/fontipsums/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/fontipsums/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/fontipsums/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/fontipsums/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/fontipsums/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/fontipsums/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/fontipsums/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/fontipsums/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/fontipsums/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/fontipsums/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/fontipsums/deployments',
  created_at: '2016-01-07T04:41:11Z',
  updated_at: '2016-10-08T00:20:54Z',
  pushed_at: '2016-02-15T02:28:19Z',
  git_url: 'git://github.com/bchiang7/fontipsums.git',
  ssh_url: 'git@github.com:bchiang7/fontipsums.git',
  clone_url: 'https://github.com/bchiang7/fontipsums.git',
  svn_url: 'https://github.com/bchiang7/fontipsums',
  homepage: 'http://brittanychiang.com/fontipsums/',
  size: 16448,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 114931330,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMTQ5MzEzMzA=',
  name: 'frequency-bars',
  full_name: 'bchiang7/frequency-bars',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/frequency-bars',
  description: 'p5.js experiment for frequency bars that react to audio',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/frequency-bars',
  forks_url: 'https://api.github.com/repos/bchiang7/frequency-bars/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/frequency-bars/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/frequency-bars/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/frequency-bars/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/frequency-bars/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/frequency-bars/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/frequency-bars/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/frequency-bars/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/frequency-bars/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/frequency-bars/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/frequency-bars/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/frequency-bars/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/frequency-bars/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/frequency-bars/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/frequency-bars/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/frequency-bars/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/frequency-bars/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/frequency-bars/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/frequency-bars/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/frequency-bars/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/frequency-bars/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/frequency-bars/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/frequency-bars/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/frequency-bars/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/frequency-bars/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/frequency-bars/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/frequency-bars/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/frequency-bars/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/frequency-bars/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/frequency-bars/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/frequency-bars/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/frequency-bars/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/frequency-bars/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/frequency-bars/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/frequency-bars/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/frequency-bars/deployments',
  created_at: '2017-12-20T21:08:34Z',
  updated_at: '2019-01-19T17:32:54Z',
  pushed_at: '2017-12-20T21:09:49Z',
  git_url: 'git://github.com/bchiang7/frequency-bars.git',
  ssh_url: 'git@github.com:bchiang7/frequency-bars.git',
  clone_url: 'https://github.com/bchiang7/frequency-bars.git',
  svn_url: 'https://github.com/bchiang7/frequency-bars',
  homepage: '',
  size: 12225,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 151175255,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNTExNzUyNTU=',
  name: 'gatsby',
  full_name: 'bchiang7/gatsby',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/gatsby',
  description: 'Build blazing fast, modern apps and websites with React',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/gatsby',
  forks_url: 'https://api.github.com/repos/bchiang7/gatsby/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/gatsby/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/gatsby/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/gatsby/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/gatsby/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/gatsby/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/gatsby/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/gatsby/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/gatsby/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/gatsby/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/gatsby/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/gatsby/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/gatsby/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/gatsby/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/gatsby/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/gatsby/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/gatsby/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/gatsby/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/gatsby/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/gatsby/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/gatsby/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/gatsby/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/gatsby/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/gatsby/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/gatsby/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/gatsby/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/gatsby/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/gatsby/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/gatsby/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/gatsby/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/gatsby/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/gatsby/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/gatsby/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/gatsby/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/gatsby/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/gatsby/deployments',
  created_at: '2018-10-01T23:38:16Z',
  updated_at: '2018-11-03T12:53:14Z',
  pushed_at: '2018-10-02T16:17:05Z',
  git_url: 'git://github.com/bchiang7/gatsby.git',
  ssh_url: 'git@github.com:bchiang7/gatsby.git',
  clone_url: 'https://github.com/bchiang7/gatsby.git',
  svn_url: 'https://github.com/bchiang7/gatsby',
  homepage: 'https://www.gatsbyjs.org',
  size: 428856,
  stargazers_count: 2,
  watchers_count: 2,
  language: 'JavaScript',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 0,
  open_issues: 0,
  watchers: 2,
  default_branch: 'master'
}, {
  id: 151643916,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNTE2NDM5MTY=',
  name: 'gatsby-starter-styled-components',
  full_name: 'bchiang7/gatsby-starter-styled-components',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/gatsby-starter-styled-components',
  description: 'Gatsby\'s V2 Default Starter with Styled Components',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components',
  forks_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/gatsby-starter-styled-components/deployments',
  created_at: '2018-10-04T22:31:30Z',
  updated_at: '2018-12-04T15:02:23Z',
  pushed_at: '2018-12-04T15:02:22Z',
  git_url: 'git://github.com/bchiang7/gatsby-starter-styled-components.git',
  ssh_url: 'git@github.com:bchiang7/gatsby-starter-styled-components.git',
  clone_url: 'https://github.com/bchiang7/gatsby-starter-styled-components.git',
  svn_url: 'https://github.com/bchiang7/gatsby-starter-styled-components',
  homepage: '',
  size: 271,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 3,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 3,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 163032832,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNjMwMzI4MzI=',
  name: 'google-keep-vue-firebase',
  full_name: 'bchiang7/google-keep-vue-firebase',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/google-keep-vue-firebase',
  description: 'Google Keep clone with Vue.js and Firebase',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase',
  forks_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/google-keep-vue-firebase/deployments',
  created_at: '2018-12-25T01:01:07Z',
  updated_at: '2019-05-21T14:01:13Z',
  pushed_at: '2019-03-25T01:16:48Z',
  git_url: 'git://github.com/bchiang7/google-keep-vue-firebase.git',
  ssh_url: 'git@github.com:bchiang7/google-keep-vue-firebase.git',
  clone_url: 'https://github.com/bchiang7/google-keep-vue-firebase.git',
  svn_url: 'https://github.com/bchiang7/google-keep-vue-firebase',
  homepage: 'https://keep-vue.netlify.com/',
  size: 665,
  stargazers_count: 9,
  watchers_count: 9,
  language: 'Vue',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 9,
  default_branch: 'master'
}, {
  id: 78293540,
  node_id: 'MDEwOlJlcG9zaXRvcnk3ODI5MzU0MA==',
  name: 'hackernews-userstyles',
  full_name: 'bchiang7/hackernews-userstyles',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/hackernews-userstyles',
  description: 'Modern HackerNews userstyles for Stylish',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles',
  forks_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/hackernews-userstyles/deployments',
  created_at: '2017-01-07T17:36:28Z',
  updated_at: '2017-01-07T17:36:31Z',
  pushed_at: '2017-01-07T23:59:54Z',
  git_url: 'git://github.com/bchiang7/hackernews-userstyles.git',
  ssh_url: 'git@github.com:bchiang7/hackernews-userstyles.git',
  clone_url: 'https://github.com/bchiang7/hackernews-userstyles.git',
  svn_url: 'https://github.com/bchiang7/hackernews-userstyles',
  homepage: null,
  size: 464,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'CSS',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 76398126,
  node_id: 'MDEwOlJlcG9zaXRvcnk3NjM5ODEyNg==',
  name: 'Halcyon',
  full_name: 'bchiang7/Halcyon',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Halcyon',
  description: 'Halcyon Theme for Sublime Text',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/Halcyon',
  forks_url: 'https://api.github.com/repos/bchiang7/Halcyon/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Halcyon/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Halcyon/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Halcyon/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Halcyon/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Halcyon/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Halcyon/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Halcyon/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Halcyon/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Halcyon/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Halcyon/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Halcyon/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Halcyon/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Halcyon/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Halcyon/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Halcyon/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Halcyon/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Halcyon/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Halcyon/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Halcyon/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Halcyon/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Halcyon/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Halcyon/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Halcyon/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Halcyon/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Halcyon/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Halcyon/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Halcyon/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Halcyon/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Halcyon/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Halcyon/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Halcyon/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Halcyon/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Halcyon/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Halcyon/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Halcyon/deployments',
  created_at: '2016-12-13T21:03:11Z',
  updated_at: '2019-06-04T02:09:08Z',
  pushed_at: '2019-06-04T02:10:12Z',
  git_url: 'git://github.com/bchiang7/Halcyon.git',
  ssh_url: 'git@github.com:bchiang7/Halcyon.git',
  clone_url: 'https://github.com/bchiang7/Halcyon.git',
  svn_url: 'https://github.com/bchiang7/Halcyon',
  homepage: 'https://packagecontrol.io/packages/Halcyon%20Theme',
  size: 3316,
  stargazers_count: 4,
  watchers_count: 4,
  language: null,
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 1,
  open_issues: 0,
  watchers: 4,
  default_branch: 'master'
}, {
  id: 116731710,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMTY3MzE3MTA=',
  name: 'halcyon-atom-syntax',
  full_name: 'bchiang7/halcyon-atom-syntax',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/halcyon-atom-syntax',
  description: 'Halcyon Syntax Theme for Atom',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax',
  forks_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/halcyon-atom-syntax/deployments',
  created_at: '2018-01-08T21:45:08Z',
  updated_at: '2019-04-01T23:58:40Z',
  pushed_at: '2019-04-01T23:58:38Z',
  git_url: 'git://github.com/bchiang7/halcyon-atom-syntax.git',
  ssh_url: 'git@github.com:bchiang7/halcyon-atom-syntax.git',
  clone_url: 'https://github.com/bchiang7/halcyon-atom-syntax.git',
  svn_url: 'https://github.com/bchiang7/halcyon-atom-syntax',
  homepage: 'https://atom.io/packages/halcyon-syntax',
  size: 878,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 121163834,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjExNjM4MzQ=',
  name: 'halcyon-hyper',
  full_name: 'bchiang7/halcyon-hyper',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/halcyon-hyper',
  description: 'Halcyon Theme for Hyper Terminal',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/halcyon-hyper',
  forks_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/halcyon-hyper/deployments',
  created_at: '2018-02-11T20:26:21Z',
  updated_at: '2019-06-06T02:46:11Z',
  pushed_at: '2019-06-06T02:46:09Z',
  git_url: 'git://github.com/bchiang7/halcyon-hyper.git',
  ssh_url: 'git@github.com:bchiang7/halcyon-hyper.git',
  clone_url: 'https://github.com/bchiang7/halcyon-hyper.git',
  svn_url: 'https://github.com/bchiang7/halcyon-hyper',
  homepage: 'https://www.npmjs.com/package/hyper-halcyon-theme',
  size: 1766,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 0,
  open_issues: 0,
  watchers: 1,
  default_branch: 'master'
}, {
  id: 121087813,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjEwODc4MTM=',
  name: 'halcyon-iterm',
  full_name: 'bchiang7/halcyon-iterm',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/halcyon-iterm',
  description: 'Halcyon Theme for iTerm2',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/halcyon-iterm',
  forks_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/halcyon-iterm/deployments',
  created_at: '2018-02-11T05:19:26Z',
  updated_at: '2019-05-21T13:25:03Z',
  pushed_at: '2019-04-01T23:55:39Z',
  git_url: 'git://github.com/bchiang7/halcyon-iterm.git',
  ssh_url: 'git@github.com:bchiang7/halcyon-iterm.git',
  clone_url: 'https://github.com/bchiang7/halcyon-iterm.git',
  svn_url: 'https://github.com/bchiang7/halcyon-iterm',
  homepage: '',
  size: 2235,
  stargazers_count: 4,
  watchers_count: 4,
  language: null,
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 4,
  default_branch: 'master'
}, {
  id: 121058704,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjEwNTg3MDQ=',
  name: 'halcyon-site',
  full_name: 'bchiang7/halcyon-site',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/halcyon-site',
  description: 'Site for all Halcyon themes',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/halcyon-site',
  forks_url: 'https://api.github.com/repos/bchiang7/halcyon-site/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/halcyon-site/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/halcyon-site/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/halcyon-site/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/halcyon-site/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/halcyon-site/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/halcyon-site/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/halcyon-site/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/halcyon-site/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/halcyon-site/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/halcyon-site/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/halcyon-site/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/halcyon-site/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/halcyon-site/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/halcyon-site/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/halcyon-site/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/halcyon-site/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/halcyon-site/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/halcyon-site/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/halcyon-site/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/halcyon-site/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/halcyon-site/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/halcyon-site/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/halcyon-site/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/halcyon-site/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/halcyon-site/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/halcyon-site/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/halcyon-site/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/halcyon-site/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/halcyon-site/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/halcyon-site/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/halcyon-site/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/halcyon-site/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/halcyon-site/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/halcyon-site/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/halcyon-site/deployments',
  created_at: '2018-02-10T22:09:53Z',
  updated_at: '2019-05-22T17:00:47Z',
  pushed_at: '2019-04-01T23:45:10Z',
  git_url: 'git://github.com/bchiang7/halcyon-site.git',
  ssh_url: 'git@github.com:bchiang7/halcyon-site.git',
  clone_url: 'https://github.com/bchiang7/halcyon-site.git',
  svn_url: 'https://github.com/bchiang7/halcyon-site',
  homepage: 'https://halcyon-theme.netlify.com/',
  size: 3569,
  stargazers_count: 5,
  watchers_count: 5,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 5,
  default_branch: 'master'
}, {
  id: 112642801,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMTI2NDI4MDE=',
  name: 'halcyon-vscode',
  full_name: 'bchiang7/halcyon-vscode',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/halcyon-vscode',
  description: 'A dark blue theme for VS Code based on the Ayu Mirage theme',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/halcyon-vscode',
  forks_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/halcyon-vscode/deployments',
  created_at: '2017-11-30T17:55:38Z',
  updated_at: '2019-06-04T02:25:25Z',
  pushed_at: '2019-06-04T02:25:24Z',
  git_url: 'git://github.com/bchiang7/halcyon-vscode.git',
  ssh_url: 'git@github.com:bchiang7/halcyon-vscode.git',
  clone_url: 'https://github.com/bchiang7/halcyon-vscode.git',
  svn_url: 'https://github.com/bchiang7/halcyon-vscode',
  homepage: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
  size: 7793,
  stargazers_count: 20,
  watchers_count: 20,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 3,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 3,
  open_issues: 0,
  watchers: 20,
  default_branch: 'master'
}, {
  id: 43025075,
  node_id: 'MDEwOlJlcG9zaXRvcnk0MzAyNTA3NQ==',
  name: 'IS4300_website',
  full_name: 'bchiang7/IS4300_website',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/IS4300_website',
  description: 'Course website for my HCI class',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/IS4300_website',
  forks_url: 'https://api.github.com/repos/bchiang7/IS4300_website/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/IS4300_website/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/IS4300_website/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/IS4300_website/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/IS4300_website/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/IS4300_website/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/IS4300_website/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/IS4300_website/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/IS4300_website/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/IS4300_website/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/IS4300_website/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/IS4300_website/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/IS4300_website/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/IS4300_website/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/IS4300_website/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/IS4300_website/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/IS4300_website/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/IS4300_website/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/IS4300_website/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/IS4300_website/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/IS4300_website/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/IS4300_website/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/IS4300_website/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/IS4300_website/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/IS4300_website/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/IS4300_website/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/IS4300_website/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/IS4300_website/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/IS4300_website/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/IS4300_website/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/IS4300_website/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/IS4300_website/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/IS4300_website/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/IS4300_website/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/IS4300_website/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/IS4300_website/deployments',
  created_at: '2015-09-23T20:30:26Z',
  updated_at: '2015-09-24T00:10:27Z',
  pushed_at: '2015-09-24T00:11:59Z',
  git_url: 'git://github.com/bchiang7/IS4300_website.git',
  ssh_url: 'git@github.com:bchiang7/IS4300_website.git',
  clone_url: 'https://github.com/bchiang7/IS4300_website.git',
  svn_url: 'https://github.com/bchiang7/IS4300_website',
  homepage: 'http://www.ccs.neu.edu/home/bchiang7/is4300.html',
  size: 836,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'HTML',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 85106778,
  node_id: 'MDEwOlJlcG9zaXRvcnk4NTEwNjc3OA==',
  name: 'jekyll-gulp-sass-browser-sync',
  full_name: 'bchiang7/jekyll-gulp-sass-browser-sync',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/jekyll-gulp-sass-browser-sync',
  description: 'A starter project including full setup for Jekyll, Gulp, Sass & BrowserSync',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync',
  forks_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/jekyll-gulp-sass-browser-sync/deployments',
  created_at: '2017-03-15T18:22:26Z',
  updated_at: '2017-03-25T03:38:09Z',
  pushed_at: '2018-02-27T21:56:32Z',
  git_url: 'git://github.com/bchiang7/jekyll-gulp-sass-browser-sync.git',
  ssh_url: 'git@github.com:bchiang7/jekyll-gulp-sass-browser-sync.git',
  clone_url: 'https://github.com/bchiang7/jekyll-gulp-sass-browser-sync.git',
  svn_url: 'https://github.com/bchiang7/jekyll-gulp-sass-browser-sync',
  homepage: '',
  size: 107,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'HTML',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 1,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 165442032,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNjU0NDIwMzI=',
  name: 'Learn-Node',
  full_name: 'bchiang7/Learn-Node',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Learn-Node',
  description: 'Starter Files + Stepped Solutions for the Learn Node course',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/Learn-Node',
  forks_url: 'https://api.github.com/repos/bchiang7/Learn-Node/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Learn-Node/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Learn-Node/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Learn-Node/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Learn-Node/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Learn-Node/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Learn-Node/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Learn-Node/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Learn-Node/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Learn-Node/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Learn-Node/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Learn-Node/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Learn-Node/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Learn-Node/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Learn-Node/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Learn-Node/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Learn-Node/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Learn-Node/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Learn-Node/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Learn-Node/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Learn-Node/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Learn-Node/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Learn-Node/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Learn-Node/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Learn-Node/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Learn-Node/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Learn-Node/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Learn-Node/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Learn-Node/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Learn-Node/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Learn-Node/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Learn-Node/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Learn-Node/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Learn-Node/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Learn-Node/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Learn-Node/deployments',
  created_at: '2019-01-12T22:26:51Z',
  updated_at: '2019-01-29T03:29:04Z',
  pushed_at: '2019-01-29T03:29:02Z',
  git_url: 'git://github.com/bchiang7/Learn-Node.git',
  ssh_url: 'git@github.com:bchiang7/Learn-Node.git',
  clone_url: 'https://github.com/bchiang7/Learn-Node.git',
  svn_url: 'https://github.com/bchiang7/Learn-Node',
  homepage: null,
  size: 13820,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 177474161,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNzc0NzQxNjE=',
  name: 'lint-me',
  full_name: 'bchiang7/lint-me',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/lint-me',
  description: 'A script to install Upstatement ESLint & Prettier linting configs to your project',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/lint-me',
  forks_url: 'https://api.github.com/repos/bchiang7/lint-me/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/lint-me/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/lint-me/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/lint-me/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/lint-me/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/lint-me/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/lint-me/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/lint-me/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/lint-me/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/lint-me/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/lint-me/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/lint-me/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/lint-me/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/lint-me/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/lint-me/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/lint-me/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/lint-me/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/lint-me/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/lint-me/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/lint-me/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/lint-me/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/lint-me/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/lint-me/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/lint-me/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/lint-me/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/lint-me/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/lint-me/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/lint-me/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/lint-me/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/lint-me/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/lint-me/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/lint-me/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/lint-me/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/lint-me/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/lint-me/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/lint-me/deployments',
  created_at: '2019-03-24T21:57:20Z',
  updated_at: '2019-03-27T15:34:02Z',
  pushed_at: '2019-03-24T21:58:06Z',
  git_url: 'git://github.com/bchiang7/lint-me.git',
  ssh_url: 'git@github.com:bchiang7/lint-me.git',
  clone_url: 'https://github.com/bchiang7/lint-me.git',
  svn_url: 'https://github.com/bchiang7/lint-me',
  homepage: '',
  size: 34,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'Shell',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 1,
  default_branch: 'master'
}, {
  id: 167217986,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNjcyMTc5ODY=',
  name: 'nativescript-vue-playground',
  full_name: 'bchiang7/nativescript-vue-playground',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/nativescript-vue-playground',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground',
  forks_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-playground/deployments',
  created_at: '2019-01-23T16:47:30Z',
  updated_at: '2019-02-21T17:22:59Z',
  pushed_at: '2019-03-07T16:16:44Z',
  git_url: 'git://github.com/bchiang7/nativescript-vue-playground.git',
  ssh_url: 'git@github.com:bchiang7/nativescript-vue-playground.git',
  clone_url: 'https://github.com/bchiang7/nativescript-vue-playground.git',
  svn_url: 'https://github.com/bchiang7/nativescript-vue-playground',
  homepage: null,
  size: 3743,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 166290493,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNjYyOTA0OTM=',
  name: 'nativescript-vue-todo',
  full_name: 'bchiang7/nativescript-vue-todo',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/nativescript-vue-todo',
  description: 'https://nativescript-vue.org/en/docs/getting-started/playground-tutorial/',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo',
  forks_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/nativescript-vue-todo/deployments',
  created_at: '2019-01-17T20:16:07Z',
  updated_at: '2019-01-19T17:28:08Z',
  pushed_at: '2019-01-17T20:47:14Z',
  git_url: 'git://github.com/bchiang7/nativescript-vue-todo.git',
  ssh_url: 'git@github.com:bchiang7/nativescript-vue-todo.git',
  clone_url: 'https://github.com/bchiang7/nativescript-vue-todo.git',
  svn_url: 'https://github.com/bchiang7/nativescript-vue-todo',
  homepage: '',
  size: 1978,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 58689209,
  node_id: 'MDEwOlJlcG9zaXRvcnk1ODY4OTIwOQ==',
  name: 'node-markdown-editor',
  full_name: 'bchiang7/node-markdown-editor',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/node-markdown-editor',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/node-markdown-editor',
  forks_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/node-markdown-editor/deployments',
  created_at: '2016-05-13T01:28:18Z',
  updated_at: '2016-05-13T01:29:45Z',
  pushed_at: '2016-05-13T01:29:44Z',
  git_url: 'git://github.com/bchiang7/node-markdown-editor.git',
  ssh_url: 'git@github.com:bchiang7/node-markdown-editor.git',
  clone_url: 'https://github.com/bchiang7/node-markdown-editor.git',
  svn_url: 'https://github.com/bchiang7/node-markdown-editor',
  homepage: null,
  size: 3921,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 180494481,
  node_id: 'MDEwOlJlcG9zaXRvcnkxODA0OTQ0ODE=',
  name: 'nuxt-starter',
  full_name: 'bchiang7/nuxt-starter',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/nuxt-starter',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/nuxt-starter',
  forks_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/nuxt-starter/deployments',
  created_at: '2019-04-10T03:26:57Z',
  updated_at: '2019-04-11T15:12:13Z',
  pushed_at: '2019-04-20T18:43:29Z',
  git_url: 'git://github.com/bchiang7/nuxt-starter.git',
  ssh_url: 'git@github.com:bchiang7/nuxt-starter.git',
  clone_url: 'https://github.com/bchiang7/nuxt-starter.git',
  svn_url: 'https://github.com/bchiang7/nuxt-starter',
  homepage: null,
  size: 539,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'Vue',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 190296121,
  node_id: 'MDEwOlJlcG9zaXRvcnkxOTAyOTYxMjE=',
  name: 'octoprofile',
  full_name: 'bchiang7/octoprofile',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/octoprofile',
  description: 'A nicer look at your GitHub Profile! With charts!',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/octoprofile',
  forks_url: 'https://api.github.com/repos/bchiang7/octoprofile/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/octoprofile/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/octoprofile/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/octoprofile/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/octoprofile/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/octoprofile/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/octoprofile/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/octoprofile/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/octoprofile/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/octoprofile/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/octoprofile/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/octoprofile/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/octoprofile/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/octoprofile/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/octoprofile/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/octoprofile/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/octoprofile/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/octoprofile/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/octoprofile/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/octoprofile/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/octoprofile/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/octoprofile/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/octoprofile/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/octoprofile/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/octoprofile/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/octoprofile/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/octoprofile/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/octoprofile/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/octoprofile/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/octoprofile/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/octoprofile/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/octoprofile/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/octoprofile/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/octoprofile/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/octoprofile/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/octoprofile/deployments',
  created_at: '2019-06-04T23:58:30Z',
  updated_at: '2019-06-15T21:12:31Z',
  pushed_at: '2019-06-15T21:12:30Z',
  git_url: 'git://github.com/bchiang7/octoprofile.git',
  ssh_url: 'git@github.com:bchiang7/octoprofile.git',
  clone_url: 'https://github.com/bchiang7/octoprofile.git',
  svn_url: 'https://github.com/bchiang7/octoprofile',
  homepage: 'https://octoprofile.bchiang7.now.sh/',
  size: 7609,
  stargazers_count: 6,
  watchers_count: 6,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 6,
  default_branch: 'master'
}, {
  id: 116434101,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMTY0MzQxMDE=',
  name: 'package_control_channel',
  full_name: 'bchiang7/package_control_channel',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/package_control_channel',
  description: 'Default channel file for Package Control. Follow the directions at:',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/package_control_channel',
  forks_url: 'https://api.github.com/repos/bchiang7/package_control_channel/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/package_control_channel/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/package_control_channel/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/package_control_channel/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/package_control_channel/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/package_control_channel/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/package_control_channel/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/package_control_channel/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/package_control_channel/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/package_control_channel/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/package_control_channel/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/package_control_channel/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/package_control_channel/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/package_control_channel/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/package_control_channel/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/package_control_channel/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/package_control_channel/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/package_control_channel/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/package_control_channel/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/package_control_channel/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/package_control_channel/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/package_control_channel/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/package_control_channel/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/package_control_channel/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/package_control_channel/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/package_control_channel/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/package_control_channel/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/package_control_channel/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/package_control_channel/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/package_control_channel/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/package_control_channel/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/package_control_channel/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/package_control_channel/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/package_control_channel/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/package_control_channel/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/package_control_channel/deployments',
  created_at: '2018-01-05T22:40:13Z',
  updated_at: '2018-03-23T04:09:50Z',
  pushed_at: '2018-03-23T04:09:48Z',
  git_url: 'git://github.com/bchiang7/package_control_channel.git',
  ssh_url: 'git@github.com:bchiang7/package_control_channel.git',
  clone_url: 'https://github.com/bchiang7/package_control_channel.git',
  svn_url: 'https://github.com/bchiang7/package_control_channel',
  homepage: 'https://packagecontrol.io/docs/developers',
  size: 13925,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'Python',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 170567723,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNzA1Njc3MjM=',
  name: 'pin-simple',
  full_name: 'bchiang7/pin-simple',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/pin-simple',
  description: 'Pinterest, but just the pictures',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/pin-simple',
  forks_url: 'https://api.github.com/repos/bchiang7/pin-simple/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/pin-simple/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/pin-simple/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/pin-simple/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/pin-simple/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/pin-simple/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/pin-simple/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/pin-simple/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/pin-simple/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/pin-simple/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/pin-simple/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/pin-simple/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/pin-simple/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/pin-simple/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/pin-simple/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/pin-simple/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/pin-simple/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/pin-simple/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/pin-simple/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/pin-simple/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/pin-simple/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/pin-simple/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/pin-simple/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/pin-simple/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/pin-simple/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/pin-simple/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/pin-simple/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/pin-simple/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/pin-simple/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/pin-simple/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/pin-simple/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/pin-simple/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/pin-simple/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/pin-simple/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/pin-simple/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/pin-simple/deployments',
  created_at: '2019-02-13T19:35:22Z',
  updated_at: '2019-04-07T21:58:10Z',
  pushed_at: '2019-04-07T21:58:08Z',
  git_url: 'git://github.com/bchiang7/pin-simple.git',
  ssh_url: 'git@github.com:bchiang7/pin-simple.git',
  clone_url: 'https://github.com/bchiang7/pin-simple.git',
  svn_url: 'https://github.com/bchiang7/pin-simple',
  homepage: 'https://pin-simple.herokuapp.com/',
  size: 925,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'Vue',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 50265821,
  node_id: 'MDEwOlJlcG9zaXRvcnk1MDI2NTgyMQ==',
  name: 'RAGTAG',
  full_name: 'bchiang7/RAGTAG',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/RAGTAG',
  description: 'RAGTAG Static site template (HackBeanpot 2016)',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/RAGTAG',
  forks_url: 'https://api.github.com/repos/bchiang7/RAGTAG/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/RAGTAG/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/RAGTAG/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/RAGTAG/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/RAGTAG/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/RAGTAG/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/RAGTAG/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/RAGTAG/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/RAGTAG/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/RAGTAG/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/RAGTAG/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/RAGTAG/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/RAGTAG/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/RAGTAG/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/RAGTAG/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/RAGTAG/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/RAGTAG/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/RAGTAG/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/RAGTAG/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/RAGTAG/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/RAGTAG/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/RAGTAG/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/RAGTAG/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/RAGTAG/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/RAGTAG/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/RAGTAG/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/RAGTAG/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/RAGTAG/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/RAGTAG/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/RAGTAG/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/RAGTAG/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/RAGTAG/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/RAGTAG/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/RAGTAG/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/RAGTAG/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/RAGTAG/deployments',
  created_at: '2016-01-24T00:42:23Z',
  updated_at: '2016-01-24T01:35:28Z',
  pushed_at: '2016-01-24T01:35:27Z',
  git_url: 'git://github.com/bchiang7/RAGTAG.git',
  ssh_url: 'git@github.com:bchiang7/RAGTAG.git',
  clone_url: 'https://github.com/bchiang7/RAGTAG.git',
  svn_url: 'https://github.com/bchiang7/RAGTAG',
  homepage: null,
  size: 4145,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 124788837,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjQ3ODg4Mzc=',
  name: 'react-boilerplate',
  full_name: 'bchiang7/react-boilerplate',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/react-boilerplate',
  description: 'Create React App v2 with Styled Components v4',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/react-boilerplate',
  forks_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/react-boilerplate/deployments',
  created_at: '2018-03-11T19:04:38Z',
  updated_at: '2019-03-19T16:31:57Z',
  pushed_at: '2019-02-09T20:40:54Z',
  git_url: 'git://github.com/bchiang7/react-boilerplate.git',
  ssh_url: 'git@github.com:bchiang7/react-boilerplate.git',
  clone_url: 'https://github.com/bchiang7/react-boilerplate.git',
  svn_url: 'https://github.com/bchiang7/react-boilerplate',
  homepage: '',
  size: 628,
  stargazers_count: 2,
  watchers_count: 2,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 2,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 2,
  open_issues: 0,
  watchers: 2,
  default_branch: 'master'
}, {
  id: 70214603,
  node_id: 'MDEwOlJlcG9zaXRvcnk3MDIxNDYwMw==',
  name: 'react-profile',
  full_name: 'bchiang7/react-profile',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/react-profile',
  description: 'Online resume made with React.js',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/react-profile',
  forks_url: 'https://api.github.com/repos/bchiang7/react-profile/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/react-profile/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/react-profile/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/react-profile/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/react-profile/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/react-profile/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/react-profile/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/react-profile/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/react-profile/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/react-profile/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/react-profile/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/react-profile/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/react-profile/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/react-profile/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/react-profile/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/react-profile/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/react-profile/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/react-profile/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/react-profile/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/react-profile/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/react-profile/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/react-profile/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/react-profile/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/react-profile/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/react-profile/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/react-profile/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/react-profile/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/react-profile/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/react-profile/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/react-profile/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/react-profile/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/react-profile/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/react-profile/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/react-profile/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/react-profile/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/react-profile/deployments',
  created_at: '2016-10-07T04:10:29Z',
  updated_at: '2019-05-10T19:27:17Z',
  pushed_at: '2017-08-08T16:37:36Z',
  git_url: 'git://github.com/bchiang7/react-profile.git',
  ssh_url: 'git@github.com:bchiang7/react-profile.git',
  clone_url: 'https://github.com/bchiang7/react-profile.git',
  svn_url: 'https://github.com/bchiang7/react-profile',
  homepage: 'http://brittanychiang.com/react-profile/',
  size: 2469,
  stargazers_count: 5,
  watchers_count: 5,
  language: 'HTML',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 1,
  open_issues: 0,
  watchers: 5,
  default_branch: 'master'
}, {
  id: 85233900,
  node_id: 'MDEwOlJlcG9zaXRvcnk4NTIzMzkwMA==',
  name: 'Redesign-myNEU',
  full_name: 'bchiang7/Redesign-myNEU',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Redesign-myNEU',
  description: 'Redesigned myNEU web prototype',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU',
  forks_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Redesign-myNEU/deployments',
  created_at: '2017-03-16T19:25:53Z',
  updated_at: '2018-09-28T14:10:48Z',
  pushed_at: '2017-04-04T03:34:34Z',
  git_url: 'git://github.com/bchiang7/Redesign-myNEU.git',
  ssh_url: 'git@github.com:bchiang7/Redesign-myNEU.git',
  clone_url: 'https://github.com/bchiang7/Redesign-myNEU.git',
  svn_url: 'https://github.com/bchiang7/Redesign-myNEU',
  homepage: 'http://brittanychiang.com/Redesign-myNEU/',
  size: 4665,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'HTML',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 70358962,
  node_id: 'MDEwOlJlcG9zaXRvcnk3MDM1ODk2Mg==',
  name: 'Resources',
  full_name: 'bchiang7/Resources',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Resources',
  description: 'A list of handy resources',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/Resources',
  forks_url: 'https://api.github.com/repos/bchiang7/Resources/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Resources/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Resources/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Resources/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Resources/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Resources/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Resources/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Resources/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Resources/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Resources/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Resources/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Resources/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Resources/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Resources/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Resources/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Resources/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Resources/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Resources/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Resources/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Resources/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Resources/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Resources/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Resources/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Resources/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Resources/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Resources/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Resources/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Resources/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Resources/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Resources/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Resources/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Resources/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Resources/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Resources/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Resources/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Resources/deployments',
  created_at: '2016-10-08T21:42:06Z',
  updated_at: '2016-10-07T22:49:04Z',
  pushed_at: '2016-10-09T00:42:47Z',
  git_url: 'git://github.com/bchiang7/Resources.git',
  ssh_url: 'git@github.com:bchiang7/Resources.git',
  clone_url: 'https://github.com/bchiang7/Resources.git',
  svn_url: 'https://github.com/bchiang7/Resources',
  homepage: '',
  size: 123,
  stargazers_count: 0,
  watchers_count: 0,
  language: null,
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 1,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 48522612,
  node_id: 'MDEwOlJlcG9zaXRvcnk0ODUyMjYxMg==',
  name: 'single-page-todo-app',
  full_name: 'bchiang7/single-page-todo-app',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/single-page-todo-app',
  description: 'Just...DO IT',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/single-page-todo-app',
  forks_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/single-page-todo-app/deployments',
  created_at: '2015-12-24T03:18:44Z',
  updated_at: '2016-10-08T00:21:43Z',
  pushed_at: '2015-12-25T02:57:43Z',
  git_url: 'git://github.com/bchiang7/single-page-todo-app.git',
  ssh_url: 'git@github.com:bchiang7/single-page-todo-app.git',
  clone_url: 'https://github.com/bchiang7/single-page-todo-app.git',
  svn_url: 'https://github.com/bchiang7/single-page-todo-app',
  homepage: '',
  size: 1055,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 138958416,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMzg5NTg0MTY=',
  name: 'spotify-profile',
  full_name: 'bchiang7/spotify-profile',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/spotify-profile',
  description: 'A web app for visualizing personalized Spotify data',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/spotify-profile',
  forks_url: 'https://api.github.com/repos/bchiang7/spotify-profile/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/spotify-profile/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/spotify-profile/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/spotify-profile/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/spotify-profile/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/spotify-profile/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/spotify-profile/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/spotify-profile/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/spotify-profile/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/spotify-profile/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/spotify-profile/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/spotify-profile/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/spotify-profile/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/spotify-profile/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/spotify-profile/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/spotify-profile/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/spotify-profile/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/spotify-profile/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/spotify-profile/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/spotify-profile/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/spotify-profile/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/spotify-profile/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/spotify-profile/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/spotify-profile/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/spotify-profile/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/spotify-profile/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/spotify-profile/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/spotify-profile/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/spotify-profile/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/spotify-profile/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/spotify-profile/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/spotify-profile/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/spotify-profile/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/spotify-profile/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/spotify-profile/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/spotify-profile/deployments',
  created_at: '2018-06-28T02:53:16Z',
  updated_at: '2019-05-17T05:16:41Z',
  pushed_at: '2019-04-03T04:00:31Z',
  git_url: 'git://github.com/bchiang7/spotify-profile.git',
  ssh_url: 'git@github.com:bchiang7/spotify-profile.git',
  clone_url: 'https://github.com/bchiang7/spotify-profile.git',
  svn_url: 'https://github.com/bchiang7/spotify-profile',
  homepage: 'https://spotify-profile.herokuapp.com/',
  size: 2802,
  stargazers_count: 14,
  watchers_count: 14,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 1,
  open_issues: 0,
  watchers: 14,
  default_branch: 'master'
}, {
  id: 128799749,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjg3OTk3NDk=',
  name: 'spotify-top-tracks-2017',
  full_name: 'bchiang7/spotify-top-tracks-2017',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/spotify-top-tracks-2017',
  description: 'Analysis of Spotify\'s Top Tracks of 2017 in R',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017',
  forks_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/spotify-top-tracks-2017/deployments',
  created_at: '2018-04-09T16:14:56Z',
  updated_at: '2019-01-19T17:32:37Z',
  pushed_at: '2018-04-17T18:26:10Z',
  git_url: 'git://github.com/bchiang7/spotify-top-tracks-2017.git',
  ssh_url: 'git@github.com:bchiang7/spotify-top-tracks-2017.git',
  clone_url: 'https://github.com/bchiang7/spotify-top-tracks-2017.git',
  svn_url: 'https://github.com/bchiang7/spotify-top-tracks-2017',
  homepage: '',
  size: 3976,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'HTML',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 105949355,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMDU5NDkzNTU=',
  name: 'static-starter',
  full_name: 'bchiang7/static-starter',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/static-starter',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/static-starter',
  forks_url: 'https://api.github.com/repos/bchiang7/static-starter/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/static-starter/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/static-starter/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/static-starter/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/static-starter/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/static-starter/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/static-starter/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/static-starter/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/static-starter/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/static-starter/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/static-starter/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/static-starter/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/static-starter/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/static-starter/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/static-starter/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/static-starter/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/static-starter/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/static-starter/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/static-starter/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/static-starter/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/static-starter/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/static-starter/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/static-starter/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/static-starter/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/static-starter/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/static-starter/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/static-starter/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/static-starter/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/static-starter/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/static-starter/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/static-starter/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/static-starter/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/static-starter/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/static-starter/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/static-starter/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/static-starter/deployments',
  created_at: '2017-10-05T23:09:55Z',
  updated_at: '2018-07-25T03:00:34Z',
  pushed_at: '2018-07-25T03:00:33Z',
  git_url: 'git://github.com/bchiang7/static-starter.git',
  ssh_url: 'git@github.com:bchiang7/static-starter.git',
  clone_url: 'https://github.com/bchiang7/static-starter.git',
  svn_url: 'https://github.com/bchiang7/static-starter',
  homepage: null,
  size: 88,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 123620700,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjM2MjA3MDA=',
  name: 'Surf-Videos',
  full_name: 'bchiang7/Surf-Videos',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Surf-Videos',
  description: null,
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/Surf-Videos',
  forks_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Surf-Videos/deployments',
  created_at: '2018-03-02T19:19:41Z',
  updated_at: '2019-05-21T21:49:41Z',
  pushed_at: '2018-10-10T20:27:23Z',
  git_url: 'git://github.com/bchiang7/Surf-Videos.git',
  ssh_url: 'git@github.com:bchiang7/Surf-Videos.git',
  clone_url: 'https://github.com/bchiang7/Surf-Videos.git',
  svn_url: 'https://github.com/bchiang7/Surf-Videos',
  homepage: null,
  size: 143,
  stargazers_count: 4,
  watchers_count: 4,
  language: 'JavaScript',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 1,
  open_issues: 0,
  watchers: 4,
  default_branch: 'master'
}, {
  id: 152526150,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNTI1MjYxNTA=',
  name: 'Syntax',
  full_name: 'bchiang7/Syntax',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/Syntax',
  description: 'A website for the Syntax Podcast',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/Syntax',
  forks_url: 'https://api.github.com/repos/bchiang7/Syntax/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/Syntax/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/Syntax/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/Syntax/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/Syntax/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/Syntax/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/Syntax/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/Syntax/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/Syntax/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/Syntax/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/Syntax/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/Syntax/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/Syntax/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/Syntax/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/Syntax/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/Syntax/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/Syntax/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/Syntax/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/Syntax/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/Syntax/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/Syntax/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/Syntax/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/Syntax/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/Syntax/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/Syntax/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/Syntax/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/Syntax/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/Syntax/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/Syntax/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/Syntax/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/Syntax/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/Syntax/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/Syntax/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/Syntax/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/Syntax/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/Syntax/deployments',
  created_at: '2018-10-11T03:33:25Z',
  updated_at: '2019-01-16T18:15:22Z',
  pushed_at: '2019-01-16T18:15:13Z',
  git_url: 'git://github.com/bchiang7/Syntax.git',
  ssh_url: 'git@github.com:bchiang7/Syntax.git',
  clone_url: 'https://github.com/bchiang7/Syntax.git',
  svn_url: 'https://github.com/bchiang7/Syntax',
  homepage: null,
  size: 3204,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 116715407,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMTY3MTU0MDc=',
  name: 'ui-theme-template',
  full_name: 'bchiang7/ui-theme-template',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/ui-theme-template',
  description: 'A starter template for creating Atom UI themes.',
  fork: true,
  url: 'https://api.github.com/repos/bchiang7/ui-theme-template',
  forks_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/ui-theme-template/deployments',
  created_at: '2018-01-08T18:56:03Z',
  updated_at: '2018-01-08T18:56:05Z',
  pushed_at: '2017-12-02T06:46:50Z',
  git_url: 'git://github.com/bchiang7/ui-theme-template.git',
  ssh_url: 'git@github.com:bchiang7/ui-theme-template.git',
  clone_url: 'https://github.com/bchiang7/ui-theme-template.git',
  svn_url: 'https://github.com/bchiang7/ui-theme-template',
  homepage: '',
  size: 16,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'CSS',
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 97530888,
  node_id: 'MDEwOlJlcG9zaXRvcnk5NzUzMDg4OA==',
  name: 'v1',
  full_name: 'bchiang7/v1',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/v1',
  description: 'First iteration of my personal website',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/v1',
  forks_url: 'https://api.github.com/repos/bchiang7/v1/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/v1/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/v1/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/v1/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/v1/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/v1/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/v1/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/v1/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/v1/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/v1/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/v1/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/v1/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/v1/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/v1/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/v1/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/v1/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/v1/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/v1/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/v1/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/v1/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/v1/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/v1/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/v1/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/v1/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/v1/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/v1/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/v1/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/v1/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/v1/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/v1/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/v1/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/v1/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/v1/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/v1/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/v1/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/v1/deployments',
  created_at: '2017-07-17T23:24:36Z',
  updated_at: '2018-02-09T15:26:55Z',
  pushed_at: '2017-08-06T22:54:00Z',
  git_url: 'git://github.com/bchiang7/v1.git',
  ssh_url: 'git@github.com:bchiang7/v1.git',
  clone_url: 'https://github.com/bchiang7/v1.git',
  svn_url: 'https://github.com/bchiang7/v1',
  homepage: 'https://brittanychiang.com/v1/',
  size: 24165,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 97529184,
  node_id: 'MDEwOlJlcG9zaXRvcnk5NzUyOTE4NA==',
  name: 'v2',
  full_name: 'bchiang7/v2',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/v2',
  description: 'Second iteration of my personal website built with Jekyll',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/v2',
  forks_url: 'https://api.github.com/repos/bchiang7/v2/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/v2/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/v2/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/v2/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/v2/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/v2/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/v2/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/v2/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/v2/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/v2/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/v2/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/v2/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/v2/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/v2/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/v2/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/v2/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/v2/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/v2/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/v2/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/v2/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/v2/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/v2/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/v2/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/v2/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/v2/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/v2/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/v2/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/v2/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/v2/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/v2/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/v2/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/v2/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/v2/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/v2/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/v2/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/v2/deployments',
  created_at: '2017-07-17T22:52:04Z',
  updated_at: '2019-03-25T23:27:26Z',
  pushed_at: '2017-07-20T01:49:02Z',
  git_url: 'git://github.com/bchiang7/v2.git',
  ssh_url: 'git@github.com:bchiang7/v2.git',
  clone_url: 'https://github.com/bchiang7/v2.git',
  svn_url: 'https://github.com/bchiang7/v2',
  homepage: 'https://bchiang7.github.io/v2/',
  size: 5873,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 2,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 2,
  open_issues: 0,
  watchers: 1,
  default_branch: 'master'
}, {
  id: 93288438,
  node_id: 'MDEwOlJlcG9zaXRvcnk5MzI4ODQzOA==',
  name: 'v3',
  full_name: 'bchiang7/v3',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/v3',
  description: 'Third iteration of my personal website',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/v3',
  forks_url: 'https://api.github.com/repos/bchiang7/v3/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/v3/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/v3/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/v3/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/v3/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/v3/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/v3/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/v3/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/v3/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/v3/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/v3/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/v3/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/v3/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/v3/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/v3/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/v3/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/v3/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/v3/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/v3/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/v3/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/v3/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/v3/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/v3/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/v3/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/v3/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/v3/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/v3/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/v3/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/v3/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/v3/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/v3/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/v3/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/v3/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/v3/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/v3/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/v3/deployments',
  created_at: '2017-06-04T03:45:56Z',
  updated_at: '2019-06-08T21:28:41Z',
  pushed_at: '2018-09-18T00:48:24Z',
  git_url: 'git://github.com/bchiang7/v3.git',
  ssh_url: 'git@github.com:bchiang7/v3.git',
  clone_url: 'https://github.com/bchiang7/v3.git',
  svn_url: 'https://github.com/bchiang7/v3',
  homepage: '',
  size: 9909,
  stargazers_count: 6,
  watchers_count: 6,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 3,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 3,
  open_issues: 0,
  watchers: 6,
  default_branch: 'master'
}, {
  id: 144926753,
  node_id: 'MDEwOlJlcG9zaXRvcnkxNDQ5MjY3NTM=',
  name: 'v4',
  full_name: 'bchiang7/v4',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/v4',
  description: 'Fourth iteration of my personal website built with Gatsby',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/v4',
  forks_url: 'https://api.github.com/repos/bchiang7/v4/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/v4/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/v4/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/v4/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/v4/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/v4/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/v4/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/v4/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/v4/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/v4/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/v4/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/v4/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/v4/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/v4/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/v4/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/v4/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/v4/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/v4/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/v4/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/v4/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/v4/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/v4/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/v4/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/v4/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/v4/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/v4/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/v4/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/v4/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/v4/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/v4/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/v4/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/v4/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/v4/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/v4/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/v4/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/v4/deployments',
  created_at: '2018-08-16T02:33:48Z',
  updated_at: '2019-06-15T19:42:49Z',
  pushed_at: '2019-05-27T23:10:06Z',
  git_url: 'git://github.com/bchiang7/v4.git',
  ssh_url: 'git@github.com:bchiang7/v4.git',
  clone_url: 'https://github.com/bchiang7/v4.git',
  svn_url: 'https://github.com/bchiang7/v4',
  homepage: 'https://brittanychiang.com/',
  size: 9444,
  stargazers_count: 145,
  watchers_count: 145,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 71,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  forks: 71,
  open_issues: 0,
  watchers: 145,
  default_branch: 'master'
}, {
  id: 182855568,
  node_id: 'MDEwOlJlcG9zaXRvcnkxODI4NTU1Njg=',
  name: 'vue-cli-boilerplate',
  full_name: 'bchiang7/vue-cli-boilerplate',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/vue-cli-boilerplate',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate',
  forks_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/vue-cli-boilerplate/deployments',
  created_at: '2019-04-22T19:38:16Z',
  updated_at: '2019-04-22T19:39:13Z',
  pushed_at: '2019-04-22T19:39:11Z',
  git_url: 'git://github.com/bchiang7/vue-cli-boilerplate.git',
  ssh_url: 'git@github.com:bchiang7/vue-cli-boilerplate.git',
  clone_url: 'https://github.com/bchiang7/vue-cli-boilerplate.git',
  svn_url: 'https://github.com/bchiang7/vue-cli-boilerplate',
  homepage: null,
  size: 619,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'Vue',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 180460550,
  node_id: 'MDEwOlJlcG9zaXRvcnkxODA0NjA1NTA=',
  name: 'vue-prismic-demo',
  full_name: 'bchiang7/vue-prismic-demo',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/vue-prismic-demo',
  description: null,
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo',
  forks_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/vue-prismic-demo/deployments',
  created_at: '2019-04-09T22:45:19Z',
  updated_at: '2019-04-13T22:36:42Z',
  pushed_at: '2019-04-13T22:36:41Z',
  git_url: 'git://github.com/bchiang7/vue-prismic-demo.git',
  ssh_url: 'git@github.com:bchiang7/vue-prismic-demo.git',
  clone_url: 'https://github.com/bchiang7/vue-prismic-demo.git',
  svn_url: 'https://github.com/bchiang7/vue-prismic-demo',
  homepage: null,
  size: 9701,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'Vue',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 49673023,
  node_id: 'MDEwOlJlcG9zaXRvcnk0OTY3MzAyMw==',
  name: 'WebDevSpring2016',
  full_name: 'bchiang7/WebDevSpring2016',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/WebDevSpring2016',
  description: 'Repo for my spring 2016 web dev class',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016',
  forks_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/WebDevSpring2016/deployments',
  created_at: '2016-01-14T20:25:08Z',
  updated_at: '2016-10-11T03:52:22Z',
  pushed_at: '2016-04-21T04:24:56Z',
  git_url: 'git://github.com/bchiang7/WebDevSpring2016.git',
  ssh_url: 'git@github.com:bchiang7/WebDevSpring2016.git',
  clone_url: 'https://github.com/bchiang7/WebDevSpring2016.git',
  svn_url: 'https://github.com/bchiang7/WebDevSpring2016',
  homepage: 'http://webdevspring2016-chiangbrittany.rhcloud.com/',
  size: 6986,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}, {
  id: 127957308,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjc5NTczMDg=',
  name: 'writing',
  full_name: 'bchiang7/writing',
  private: false,
  owner: {
    login: 'bchiang7',
    id: 6599979,
    node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bchiang7',
    html_url: 'https://github.com/bchiang7',
    followers_url: 'https://api.github.com/users/bchiang7/followers',
    following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
    gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
    organizations_url: 'https://api.github.com/users/bchiang7/orgs',
    repos_url: 'https://api.github.com/users/bchiang7/repos',
    events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bchiang7/received_events',
    type: 'User',
    site_admin: false
  },
  html_url: 'https://github.com/bchiang7/writing',
  description: 'Writing Portfolio for ENGW 3302',
  fork: false,
  url: 'https://api.github.com/repos/bchiang7/writing',
  forks_url: 'https://api.github.com/repos/bchiang7/writing/forks',
  keys_url: 'https://api.github.com/repos/bchiang7/writing/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/bchiang7/writing/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/bchiang7/writing/teams',
  hooks_url: 'https://api.github.com/repos/bchiang7/writing/hooks',
  issue_events_url: 'https://api.github.com/repos/bchiang7/writing/issues/events{/number}',
  events_url: 'https://api.github.com/repos/bchiang7/writing/events',
  assignees_url: 'https://api.github.com/repos/bchiang7/writing/assignees{/user}',
  branches_url: 'https://api.github.com/repos/bchiang7/writing/branches{/branch}',
  tags_url: 'https://api.github.com/repos/bchiang7/writing/tags',
  blobs_url: 'https://api.github.com/repos/bchiang7/writing/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/bchiang7/writing/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/bchiang7/writing/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/bchiang7/writing/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/bchiang7/writing/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/bchiang7/writing/languages',
  stargazers_url: 'https://api.github.com/repos/bchiang7/writing/stargazers',
  contributors_url: 'https://api.github.com/repos/bchiang7/writing/contributors',
  subscribers_url: 'https://api.github.com/repos/bchiang7/writing/subscribers',
  subscription_url: 'https://api.github.com/repos/bchiang7/writing/subscription',
  commits_url: 'https://api.github.com/repos/bchiang7/writing/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/bchiang7/writing/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/bchiang7/writing/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/bchiang7/writing/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/bchiang7/writing/contents/{+path}',
  compare_url: 'https://api.github.com/repos/bchiang7/writing/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/bchiang7/writing/merges',
  archive_url: 'https://api.github.com/repos/bchiang7/writing/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/bchiang7/writing/downloads',
  issues_url: 'https://api.github.com/repos/bchiang7/writing/issues{/number}',
  pulls_url: 'https://api.github.com/repos/bchiang7/writing/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/bchiang7/writing/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/bchiang7/writing/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/bchiang7/writing/labels{/name}',
  releases_url: 'https://api.github.com/repos/bchiang7/writing/releases{/id}',
  deployments_url: 'https://api.github.com/repos/bchiang7/writing/deployments',
  created_at: '2018-04-03T19:18:21Z',
  updated_at: '2018-04-10T03:02:23Z',
  pushed_at: '2018-04-10T03:02:22Z',
  git_url: 'git://github.com/bchiang7/writing.git',
  ssh_url: 'git@github.com:bchiang7/writing.git',
  clone_url: 'https://github.com/bchiang7/writing.git',
  svn_url: 'https://github.com/bchiang7/writing',
  homepage: 'http://writing.brittanychiang.com/',
  size: 14093,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'CSS',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master'
}]);

/***/ }),

/***/ "./utils/mockUserData.js":
/*!*******************************!*\
  !*** ./utils/mockUserData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  login: 'bchiang7',
  id: 6599979,
  node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
  avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/bchiang7',
  html_url: 'https://github.com/bchiang7',
  followers_url: 'https://api.github.com/users/bchiang7/followers',
  following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
  gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
  organizations_url: 'https://api.github.com/users/bchiang7/orgs',
  repos_url: 'https://api.github.com/users/bchiang7/repos',
  events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
  received_events_url: 'https://api.github.com/users/bchiang7/received_events',
  type: 'User',
  site_admin: false,
  name: 'Brittany Chiang',
  company: '@Upstatement ',
  blog: 'https://brittanychiang.com',
  location: 'Boston, MA',
  email: null,
  hireable: true,
  bio: null,
  public_repos: 53,
  public_gists: 4,
  followers: 248,
  following: 12,
  created_at: '2014-02-05T23:22:59Z',
  updated_at: '2019-04-17T03:18:31Z'
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/muttaki/sdfsa/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@primer/octicons-react":
/*!*****************************************!*\
  !*** external "@primer/octicons-react" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@primer/octicons-react");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-flip-move":
/*!**********************************!*\
  !*** external "react-flip-move" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-flip-move");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map