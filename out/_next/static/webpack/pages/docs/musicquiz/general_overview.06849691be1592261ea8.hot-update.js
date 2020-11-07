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
  }, "This is a fun game where I will play you a list of songs, and you have to guess what they are.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 95
    }
  }), "You will get 1 point if you guess the author of the song, 1 point if you guess the title, and 3 points if you guess both!", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 222
    }
  }), "To guess, just write a message in this channel."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9tdXNpY3F1aXovZ2VuZXJhbF9vdmVydmlldy5tZCJdLCJuYW1lcyI6WyJpbmZvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFrZVNob3J0Y29kZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiUGFnZVRvb2xCYXIiLCJBbGVydCIsIkRpc2NvcmRNZXNzYWdlcyIsIkRpc2NvcmRNZXNzYWdlIiwiRGlzY29yZEVtYmVkIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUVPLElBQU1BLElBQUksR0FBRztBQUNsQkMsTUFBSSxFQUFFLHFCQURZO0FBRWxCQyxhQUFXLEVBQUU7QUFGSyxDQUFiOztBQUlQLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUYsSUFBSTtBQUFBLFNBQUksU0FBU0csbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQzVEQyxXQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlTixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFdBQU8sd0pBQVNJLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0QsR0FIcUI7QUFBQSxDQUExQjs7QUFJQSxJQUFNRyxXQUFXLEdBQUdMLGFBQWEsQ0FBQyxhQUFELENBQWpDO0tBQU1LLFc7QUFDTixJQUFNQyxLQUFLLEdBQUdOLGFBQWEsQ0FBQyxPQUFELENBQTNCO01BQU1NLEs7QUFDTixJQUFNQyxlQUFlLEdBQUdQLGFBQWEsQ0FBQyxpQkFBRCxDQUFyQztNQUFNTyxlO0FBQ04sSUFBTUMsY0FBYyxHQUFHUixhQUFhLENBQUMsZ0JBQUQsQ0FBcEM7TUFBTVEsYztBQUNOLElBQU1DLFlBQVksR0FBR1QsYUFBYSxDQUFDLGNBQUQsQ0FBbEM7TUFBTVMsWTtBQUNOLElBQU1DLFdBQVcsR0FBRztBQUNsQmIsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1jLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVYLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlUSxXQUFmLEVBQWdDUixLQUFoQztBQUF1QyxjQUFVLEVBQUVXLFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUwsMERBQUMsV0FBRDtBQUFhLFNBQUssRUFBQyxZQUFuQjtBQUFnQyxXQUFPLEVBQUMsYUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZLLEVBR0wsbUpBQVE7QUFDTixVQUFNO0FBREEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnS0FOSyxFQU9MLDBEQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUMsTUFBYjtBQUFvQixXQUFPLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkFQSyxFQVFMLDBEQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUMsYUFBYjtBQUEyQixXQUFPLEVBQUMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0SEFSSyxFQVNMLDBEQUFDLGVBQUQ7QUFBaUIsV0FBTyxFQUFDLGlCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsY0FBRDtBQUFnQixVQUFNLEVBQUMsY0FBdkI7QUFBc0MsT0FBRyxFQUFFLENBQTNDO0FBQThDLFdBQU8sRUFBQyxnQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFLDBEQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUMsUUFBbkI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQTRDLFNBQUssRUFBQywyQkFBbEQ7QUFBOEUsVUFBTSxFQUFFLEVBQXRGO0FBQTBGLFdBQU8sRUFBQyxjQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVHQUNzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHRGLCtIQUNxTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHJOLG9EQUZGLENBREYsQ0FUSyxFQWlCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBd0I7QUFDdkIsV0FBTywyQkFEZ0I7QUFFdkIsV0FBTztBQUZnQixHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUgsQ0FqQkssQ0FBUDtBQXNCRDtNQTFCdUJELFU7QUE0QnhCO0FBQ0FBLFVBQVUsQ0FBQ0UsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL211c2ljcXVpei9nZW5lcmFsX292ZXJ2aWV3LjA2ODQ5NjkxYmUxNTkyMjYxZWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5cbmV4cG9ydCBjb25zdCBpbmZvID0ge1xuICBuYW1lOiBcIldoYXQgaXMgTXVzaWMgcXVpej9cIixcbiAgZGVzY3JpcHRpb246IFwiQSBsaXR0bGUgYml0IG9mIGRldGFpbCBvbiBvdXIgTXVzaWMgUXVpeiBtb2R1bGVcIlxufTtcbmNvbnN0IG1ha2VTaG9ydGNvZGUgPSBuYW1lID0+IGZ1bmN0aW9uIE1EWERlZmF1bHRTaG9ydGNvZGUocHJvcHMpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gICAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9Lz5cbiAgICB9O1xuY29uc3QgUGFnZVRvb2xCYXIgPSBtYWtlU2hvcnRjb2RlKFwiUGFnZVRvb2xCYXJcIik7XG5jb25zdCBBbGVydCA9IG1ha2VTaG9ydGNvZGUoXCJBbGVydFwiKTtcbmNvbnN0IERpc2NvcmRNZXNzYWdlcyA9IG1ha2VTaG9ydGNvZGUoXCJEaXNjb3JkTWVzc2FnZXNcIik7XG5jb25zdCBEaXNjb3JkTWVzc2FnZSA9IG1ha2VTaG9ydGNvZGUoXCJEaXNjb3JkTWVzc2FnZVwiKTtcbmNvbnN0IERpc2NvcmRFbWJlZCA9IG1ha2VTaG9ydGNvZGUoXCJEaXNjb3JkRW1iZWRcIik7XG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgaW5mb1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxQYWdlVG9vbEJhciB0aXRsZT1cIk11c2ljIFF1aXpcIiBtZHhUeXBlPVwiUGFnZVRvb2xCYXJcIiAvPlxuICAgIDxoMSB7Li4ue1xuICAgICAgXCJpZFwiOiBcIndoYXQtaXMtbXVzaWMtcXVpelwiXG4gICAgfX0+e2BXaGF0IGlzIE11c2ljIFF1aXo/YH08L2gxPlxuICAgIDxwPntgTXVzaWMgUXVpeiBpcyBhIGZ1biBtb2R1bGUgZm9yIHlvdXIgdXNlcnMgdG8gaW50ZXJhY3QgYW5kIGhhdmUgZnVuIHdpdGggb25lIGFub3RoZXIuIEl0IGNhbiBiZSBmYXN0IHBhY2VkIGFuZCBjaGFsbGVuZ2luZyBidXQgdGhhdCBpcyB3aGF0IG1ha2VzIGl0IGZ1bi5gfTwvcD5cbiAgICA8QWxlcnQgc3R5bGU9XCJpbmZvXCIgbWR4VHlwZT1cIkFsZXJ0XCI+Tm90ZTogWW91IGNhbiBlYXJuIHVwIHRvIDQ1IHBvaW50cyBpbiB0b3RhbCBieSBndWVzc2luZyB0aGUgU29uZyBUaXRsZSBhbmQgQXV0aG9yPC9BbGVydD5cbiAgICA8QWxlcnQgc3R5bGU9XCJkZXN0cnVjdGl2ZVwiIG1keFR5cGU9XCJBbGVydFwiPk5vdGU6IEEgbG90IG9mIG1lc3NhZ2VzIGFyZSBzZW50IHdoZW4gcGxheWluZyB0aGUgZ2FtZSBzbyBpdCBpcyBhZHZpc2VkIHRvIGhhdmUgYSBkaWZmZXJlbnQgY2hhbm5lbCBmb3IgdGhpcyBwbHVnaW4hPC9BbGVydD5cbiAgICA8RGlzY29yZE1lc3NhZ2VzIG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZXNcIj5cbiAgICAgIDxEaXNjb3JkTWVzc2FnZSBhdXRob3I9XCJEaXNjb3JkIFVzZXJcIiBrZXk9ezF9IG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZVwiPlxuICAgICAgICA8cD57YEhpYH08L3A+XG4gICAgICAgIDxEaXNjb3JkRW1iZWQgc2xvdD1cImVtYmVkc1wiIGNvbG9yPVwiIzFhYmM5Y1wiIHRpdGxlPVwiV2VsY29tZSB0byB0aGUgTXVzaWMgUXVpelwiIGZpZWxkcz17W119IG1keFR5cGU9XCJEaXNjb3JkRW1iZWRcIj5cblRoaXMgaXMgYSBmdW4gZ2FtZSB3aGVyZSBJIHdpbGwgcGxheSB5b3UgYSBsaXN0IG9mIHNvbmdzLCBhbmQgeW91IGhhdmUgdG8gZ3Vlc3Mgd2hhdCB0aGV5IGFyZS48YnIgLz5Zb3Ugd2lsbCBnZXQgMSBwb2ludCBpZiB5b3UgZ3Vlc3MgdGhlIGF1dGhvciBvZiB0aGUgc29uZywgMSBwb2ludCBpZiB5b3UgZ3Vlc3MgdGhlIHRpdGxlLCBhbmQgMyBwb2ludHMgaWYgeW91IGd1ZXNzIGJvdGghPGJyIC8+VG8gZ3Vlc3MsIGp1c3Qgd3JpdGUgYSBtZXNzYWdlIGluIHRoaXMgY2hhbm5lbC5cbiAgICAgICAgPC9EaXNjb3JkRW1iZWQ+XG4gICAgICA8L0Rpc2NvcmRNZXNzYWdlPlxuICAgIDwvRGlzY29yZE1lc3NhZ2VzPlxuICAgIDxwPjxpbWcgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcInNyY1wiOiBcIi9kb2NzL211c2ljcXVpei9pbnRyby5wbmdcIixcbiAgICAgICAgXCJhbHRcIjogbnVsbFxuICAgICAgfX0+PC9pbWc+PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==