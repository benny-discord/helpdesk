webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_CategoryList */ "./components/_CategoryList/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.module.css */ "./styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Projects\\benny-things\\helpdesk\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _this = this;

  var props = _ref.props,
      categories = _ref.categories;
  var additions = {
    gettingstarted: [{
      name: "Support Server",
      color: "brand",
      link: "https://discord.gg/RDeNrrY"
    }],
    notfound: [{
      name: "Support Server",
      color: "brand",
      link: "https://discord.gg/RDeNrrY"
    }]
  };
  return __jsx("div", {
    style: {
      textAlign: "center",
      padding: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Benny Help")), __jsx("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["hero-box"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("h1", {
    style: {
      fontSize: 42
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Benny ", __jsx("span", {
    style: {
      fontWeight: 400
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 27
    }
  }, "Help")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Your top-level special function and utility bot. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 70
    }
  }), "Find all the information you need to use Benny."), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "categories",
    smooth: true,
    offset: 50,
    duration: 500,
    className: "prevDefault",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Help Categories")), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "light",
    onClick: function onClick() {
      return window.location.href = 'https://bennybot.dev/dashboard';
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "Dashboard"))), additions.gettingstarted.length != 0 && __jsx(_components_CategoryList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: additions.gettingstarted,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    name: "categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "All Categories")), __jsx(_components_CategoryList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Can't find what you're looking for?"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, additions.notfound.map(function (c, i) {
    return __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      disabled: c.disabled === true,
      onClick: function onClick() {
        return window.location.href = c.link;
      },
      color: c.color,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, c.name);
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.4165a3983fc233273dfe.hot-update.js.map