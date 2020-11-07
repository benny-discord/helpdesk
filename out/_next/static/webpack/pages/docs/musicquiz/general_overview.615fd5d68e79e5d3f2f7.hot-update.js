webpackHotUpdate_N_E("pages/docs/musicquiz/general_overview",{

/***/ "./pages/docs/musicquiz/general_overview.md":
/*!**************************************************!*\
  !*** ./pages/docs/musicquiz/general_overview.md ***!
  \**************************************************/
/*! exports provided: info, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\pages\\docs\\musicquiz\\general_overview.md";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var info = {
  name: "What is Music quiz?",
  description: "A little bit of detail on our Music Quiz module"
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 14
      }
    }));
  };
};

var PageToolBar = makeShortcode("PageToolBar");
_c = PageToolBar;
var Alert = makeShortcode("Alert");
_c2 = Alert;
var DiscordMessages = makeShortcode("DiscordMessages");
_c3 = DiscordMessages;
var DiscordMessage = makeShortcode("DiscordMessage");
_c4 = DiscordMessage;
var DiscordEmbed = makeShortcode("DiscordEmbed");
_c5 = DiscordEmbed;
var layoutProps = {
  info: info
};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(PageToolBar, {
    title: "Music Quiz",
    mdxType: "PageToolBar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "what-is-music-quiz"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), "What is Music Quiz?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "Music Quiz is a fun module for your users to interact and have fun with one another. It can be fast paced and challenging but that is what makes it fun."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Alert, {
    style: "info",
    mdxType: "Alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "Note: You can earn up to 45 points in total by guessing the Song Title and Author"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Alert, {
    style: "destructive",
    mdxType: "Alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "Note: A lot of messages are sent when playing the game so it is advised to have a different channel for this plugin!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessages, {
    mdxType: "DiscordMessages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessage, {
    author: "Discord User",
    key: 1,
    mdxType: "DiscordMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Hi"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordEmbed, {
    slot: "embeds",
    color: "#1abc9c",
    title: "Welcome to the Music Quiz",
    fields: [],
    mdxType: "DiscordEmbed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "This is a fun game where I will play you a list of songs, and you have to guess what they are.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "You will get 1 point if you guess the author of the song, 1 point if you guess the title, and 3 points if you guess both!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "To guess, just write a message in this channel.")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "src": "/docs/musicquiz/intro.png",
    "alt": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }))));
}
_c6 = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "PageToolBar");
$RefreshReg$(_c2, "Alert");
$RefreshReg$(_c3, "DiscordMessages");
$RefreshReg$(_c4, "DiscordMessage");
$RefreshReg$(_c5, "DiscordEmbed");
$RefreshReg$(_c6, "MDXContent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9tdXNpY3F1aXovZ2VuZXJhbF9vdmVydmlldy5tZCJdLCJuYW1lcyI6WyJpbmZvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFrZVNob3J0Y29kZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiUGFnZVRvb2xCYXIiLCJBbGVydCIsIkRpc2NvcmRNZXNzYWdlcyIsIkRpc2NvcmRNZXNzYWdlIiwiRGlzY29yZEVtYmVkIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUVPLElBQU1BLElBQUksR0FBRztBQUNsQkMsTUFBSSxFQUFFLHFCQURZO0FBRWxCQyxhQUFXLEVBQUU7QUFGSyxDQUFiOztBQUlQLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUYsSUFBSTtBQUFBLFNBQUksU0FBU0csbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQzVEQyxXQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlTixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFdBQU8sd0pBQVNJLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0QsR0FIcUI7QUFBQSxDQUExQjs7QUFJQSxJQUFNRyxXQUFXLEdBQUdMLGFBQWEsQ0FBQyxhQUFELENBQWpDO0tBQU1LLFc7QUFDTixJQUFNQyxLQUFLLEdBQUdOLGFBQWEsQ0FBQyxPQUFELENBQTNCO01BQU1NLEs7QUFDTixJQUFNQyxlQUFlLEdBQUdQLGFBQWEsQ0FBQyxpQkFBRCxDQUFyQztNQUFNTyxlO0FBQ04sSUFBTUMsY0FBYyxHQUFHUixhQUFhLENBQUMsZ0JBQUQsQ0FBcEM7TUFBTVEsYztBQUNOLElBQU1DLFlBQVksR0FBR1QsYUFBYSxDQUFDLGNBQUQsQ0FBbEM7TUFBTVMsWTtBQUNOLElBQU1DLFdBQVcsR0FBRztBQUNsQmIsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1jLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVYLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlUSxXQUFmLEVBQWdDUixLQUFoQztBQUF1QyxjQUFVLEVBQUVXLFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUwsMERBQUMsV0FBRDtBQUFhLFNBQUssRUFBQyxZQUFuQjtBQUFnQyxXQUFPLEVBQUMsYUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZLLEVBR0wsbUpBQVE7QUFDTixVQUFNO0FBREEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnS0FOSyxFQU9MLDBEQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUMsTUFBYjtBQUFvQixXQUFPLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkFQSyxFQVFMLDBEQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUMsYUFBYjtBQUEyQixXQUFPLEVBQUMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0SEFSSyxFQVNMLDBEQUFDLGVBQUQ7QUFBaUIsV0FBTyxFQUFDLGlCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsY0FBRDtBQUFnQixVQUFNLEVBQUMsY0FBdkI7QUFBc0MsT0FBRyxFQUFFLENBQTNDO0FBQThDLFdBQU8sRUFBQyxnQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFLDBEQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUMsUUFBbkI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQTRDLFNBQUssRUFBQywyQkFBbEQ7QUFBOEUsVUFBTSxFQUFFLEVBQXRGO0FBQTBGLFdBQU8sRUFBQyxjQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVHQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUlBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQUhGLENBRkYsQ0FERixDQVRLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUF3QjtBQUN2QixXQUFPLDJCQURnQjtBQUV2QixXQUFPO0FBRmdCLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSCxDQW5CSyxDQUFQO0FBd0JEO01BNUJ1QkQsVTtBQThCeEI7QUFDQUEsVUFBVSxDQUFDRSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvbXVzaWNxdWl6L2dlbmVyYWxfb3ZlcnZpZXcuNjE1ZmQ1ZDY4ZTc5ZTVkM2YyZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cblxuZXhwb3J0IGNvbnN0IGluZm8gPSB7XG4gIG5hbWU6IFwiV2hhdCBpcyBNdXNpYyBxdWl6P1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIGxpdHRsZSBiaXQgb2YgZGV0YWlsIG9uIG91ciBNdXNpYyBRdWl6IG1vZHVsZVwiXG59O1xuY29uc3QgbWFrZVNob3J0Y29kZSA9IG5hbWUgPT4gZnVuY3Rpb24gTURYRGVmYXVsdFNob3J0Y29kZShwcm9wcykge1xuICAgICAgY29uc29sZS53YXJuKFwiQ29tcG9uZW50IFwiICsgbmFtZSArIFwiIHdhcyBub3QgaW1wb3J0ZWQsIGV4cG9ydGVkLCBvciBwcm92aWRlZCBieSBNRFhQcm92aWRlciBhcyBnbG9iYWwgc2NvcGVcIilcbiAgICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxuICAgIH07XG5jb25zdCBQYWdlVG9vbEJhciA9IG1ha2VTaG9ydGNvZGUoXCJQYWdlVG9vbEJhclwiKTtcbmNvbnN0IEFsZXJ0ID0gbWFrZVNob3J0Y29kZShcIkFsZXJ0XCIpO1xuY29uc3QgRGlzY29yZE1lc3NhZ2VzID0gbWFrZVNob3J0Y29kZShcIkRpc2NvcmRNZXNzYWdlc1wiKTtcbmNvbnN0IERpc2NvcmRNZXNzYWdlID0gbWFrZVNob3J0Y29kZShcIkRpc2NvcmRNZXNzYWdlXCIpO1xuY29uc3QgRGlzY29yZEVtYmVkID0gbWFrZVNob3J0Y29kZShcIkRpc2NvcmRFbWJlZFwiKTtcbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBpbmZvXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPFBhZ2VUb29sQmFyIHRpdGxlPVwiTXVzaWMgUXVpelwiIG1keFR5cGU9XCJQYWdlVG9vbEJhclwiIC8+XG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwid2hhdC1pcy1tdXNpYy1xdWl6XCJcbiAgICB9fT57YFdoYXQgaXMgTXVzaWMgUXVpej9gfTwvaDE+XG4gICAgPHA+e2BNdXNpYyBRdWl6IGlzIGEgZnVuIG1vZHVsZSBmb3IgeW91ciB1c2VycyB0byBpbnRlcmFjdCBhbmQgaGF2ZSBmdW4gd2l0aCBvbmUgYW5vdGhlci4gSXQgY2FuIGJlIGZhc3QgcGFjZWQgYW5kIGNoYWxsZW5naW5nIGJ1dCB0aGF0IGlzIHdoYXQgbWFrZXMgaXQgZnVuLmB9PC9wPlxuICAgIDxBbGVydCBzdHlsZT1cImluZm9cIiBtZHhUeXBlPVwiQWxlcnRcIj5Ob3RlOiBZb3UgY2FuIGVhcm4gdXAgdG8gNDUgcG9pbnRzIGluIHRvdGFsIGJ5IGd1ZXNzaW5nIHRoZSBTb25nIFRpdGxlIGFuZCBBdXRob3I8L0FsZXJ0PlxuICAgIDxBbGVydCBzdHlsZT1cImRlc3RydWN0aXZlXCIgbWR4VHlwZT1cIkFsZXJ0XCI+Tm90ZTogQSBsb3Qgb2YgbWVzc2FnZXMgYXJlIHNlbnQgd2hlbiBwbGF5aW5nIHRoZSBnYW1lIHNvIGl0IGlzIGFkdmlzZWQgdG8gaGF2ZSBhIGRpZmZlcmVudCBjaGFubmVsIGZvciB0aGlzIHBsdWdpbiE8L0FsZXJ0PlxuICAgIDxEaXNjb3JkTWVzc2FnZXMgbWR4VHlwZT1cIkRpc2NvcmRNZXNzYWdlc1wiPlxuICAgICAgPERpc2NvcmRNZXNzYWdlIGF1dGhvcj1cIkRpc2NvcmQgVXNlclwiIGtleT17MX0gbWR4VHlwZT1cIkRpc2NvcmRNZXNzYWdlXCI+XG4gICAgICAgIDxwPntgSGlgfTwvcD5cbiAgICAgICAgPERpc2NvcmRFbWJlZCBzbG90PVwiZW1iZWRzXCIgY29sb3I9XCIjMWFiYzljXCIgdGl0bGU9XCJXZWxjb21lIHRvIHRoZSBNdXNpYyBRdWl6XCIgZmllbGRzPXtbXX0gbWR4VHlwZT1cIkRpc2NvcmRFbWJlZFwiPlxuVGhpcyBpcyBhIGZ1biBnYW1lIHdoZXJlIEkgd2lsbCBwbGF5IHlvdSBhIGxpc3Qgb2Ygc29uZ3MsIGFuZCB5b3UgaGF2ZSB0byBndWVzcyB3aGF0IHRoZXkgYXJlLlxuICAgICAgICAgIDxwPntgWW91IHdpbGwgZ2V0IDEgcG9pbnQgaWYgeW91IGd1ZXNzIHRoZSBhdXRob3Igb2YgdGhlIHNvbmcsIDEgcG9pbnQgaWYgeW91IGd1ZXNzIHRoZSB0aXRsZSwgYW5kIDMgcG9pbnRzIGlmIHlvdSBndWVzcyBib3RoIWB9PC9wPlxuICAgICAgICAgIDxwPntgVG8gZ3Vlc3MsIGp1c3Qgd3JpdGUgYSBtZXNzYWdlIGluIHRoaXMgY2hhbm5lbC5gfTwvcD5cbiAgICAgICAgPC9EaXNjb3JkRW1iZWQ+XG4gICAgICA8L0Rpc2NvcmRNZXNzYWdlPlxuICAgIDwvRGlzY29yZE1lc3NhZ2VzPlxuICAgIDxwPjxpbWcgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcInNyY1wiOiBcIi9kb2NzL211c2ljcXVpei9pbnRyby5wbmdcIixcbiAgICAgICAgXCJhbHRcIjogbnVsbFxuICAgICAgfX0+PC9pbWc+PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==