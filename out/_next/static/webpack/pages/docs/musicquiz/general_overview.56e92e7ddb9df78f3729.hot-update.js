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
    timestamp: new Date().get,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9tdXNpY3F1aXovZ2VuZXJhbF9vdmVydmlldy5tZCJdLCJuYW1lcyI6WyJpbmZvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFrZVNob3J0Y29kZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiUGFnZVRvb2xCYXIiLCJBbGVydCIsIkRpc2NvcmRNZXNzYWdlcyIsIkRpc2NvcmRNZXNzYWdlIiwiRGlzY29yZEVtYmVkIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsIkRhdGUiLCJnZXQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFFTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE1BQUksRUFBRSxxQkFEWTtBQUVsQkMsYUFBVyxFQUFFO0FBRkssQ0FBYjs7QUFJUCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLElBQUk7QUFBQSxTQUFJLFNBQVNHLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUM1REMsV0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBZU4sSUFBZixHQUFzQix5RUFBbkM7QUFDQSxXQUFPLHdKQUFTSSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBSHFCO0FBQUEsQ0FBMUI7O0FBSUEsSUFBTUcsV0FBVyxHQUFHTCxhQUFhLENBQUMsYUFBRCxDQUFqQztLQUFNSyxXO0FBQ04sSUFBTUMsS0FBSyxHQUFHTixhQUFhLENBQUMsT0FBRCxDQUEzQjtNQUFNTSxLO0FBQ04sSUFBTUMsZUFBZSxHQUFHUCxhQUFhLENBQUMsaUJBQUQsQ0FBckM7TUFBTU8sZTtBQUNOLElBQU1DLGNBQWMsR0FBR1IsYUFBYSxDQUFDLGdCQUFELENBQXBDO01BQU1RLGM7QUFDTixJQUFNQyxZQUFZLEdBQUdULGFBQWEsQ0FBQyxjQUFELENBQWxDO01BQU1TLFk7QUFDTixJQUFNQyxXQUFXLEdBQUc7QUFDbEJiLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNYyxTQUFTLEdBQUcsU0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFWCxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZVEsV0FBZixFQUFnQ1IsS0FBaEM7QUFBdUMsY0FBVSxFQUFFVyxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVMLDBEQUFDLFdBQUQ7QUFBYSxTQUFLLEVBQUMsWUFBbkI7QUFBZ0MsV0FBTyxFQUFDLGFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSyxFQUdMLG1KQUFRO0FBQ04sVUFBTTtBQURBLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFISyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0tBTkssRUFPTCwwREFBQyxLQUFEO0FBQU8sU0FBSyxFQUFDLE1BQWI7QUFBb0IsV0FBTyxFQUFDLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUZBUEssRUFRTCwwREFBQyxLQUFEO0FBQU8sU0FBSyxFQUFDLGFBQWI7QUFBMkIsV0FBTyxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEhBUkssRUFTTCwwREFBQyxlQUFEO0FBQWlCLFdBQU8sRUFBQyxpQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLGNBQUQ7QUFBZ0IsVUFBTSxFQUFDLGNBQXZCO0FBQXNDLE9BQUcsRUFBRSxDQUEzQztBQUE4QyxXQUFPLEVBQUMsZ0JBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFFRSwwREFBQyxZQUFEO0FBQWMsUUFBSSxFQUFDLFFBQW5CO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUE0QyxTQUFLLEVBQUMsMkJBQWxEO0FBQThFLFVBQU0sRUFBRSxFQUF0RjtBQUEwRixhQUFTLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxHQUFoSDtBQUFxSCxXQUFPLEVBQUMsY0FBN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1R0FDc0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUR0RiwrSEFDcU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURyTixvREFGRixDQURGLENBVEssRUFpQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQXdCO0FBQ3ZCLFdBQU8sMkJBRGdCO0FBRXZCLFdBQU87QUFGZ0IsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFILENBakJLLENBQVA7QUFzQkQ7TUExQnVCSCxVO0FBNEJ4QjtBQUNBQSxVQUFVLENBQUNJLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9tdXNpY3F1aXovZ2VuZXJhbF9vdmVydmlldy41NmU5MmU3ZGRiOWRmNzhmMzcyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuXG5leHBvcnQgY29uc3QgaW5mbyA9IHtcbiAgbmFtZTogXCJXaGF0IGlzIE11c2ljIHF1aXo/XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbGl0dGxlIGJpdCBvZiBkZXRhaWwgb24gb3VyIE11c2ljIFF1aXogbW9kdWxlXCJcbn07XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG4gICAgfTtcbmNvbnN0IFBhZ2VUb29sQmFyID0gbWFrZVNob3J0Y29kZShcIlBhZ2VUb29sQmFyXCIpO1xuY29uc3QgQWxlcnQgPSBtYWtlU2hvcnRjb2RlKFwiQWxlcnRcIik7XG5jb25zdCBEaXNjb3JkTWVzc2FnZXMgPSBtYWtlU2hvcnRjb2RlKFwiRGlzY29yZE1lc3NhZ2VzXCIpO1xuY29uc3QgRGlzY29yZE1lc3NhZ2UgPSBtYWtlU2hvcnRjb2RlKFwiRGlzY29yZE1lc3NhZ2VcIik7XG5jb25zdCBEaXNjb3JkRW1iZWQgPSBtYWtlU2hvcnRjb2RlKFwiRGlzY29yZEVtYmVkXCIpO1xuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIGluZm9cbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8UGFnZVRvb2xCYXIgdGl0bGU9XCJNdXNpYyBRdWl6XCIgbWR4VHlwZT1cIlBhZ2VUb29sQmFyXCIgLz5cbiAgICA8aDEgey4uLntcbiAgICAgIFwiaWRcIjogXCJ3aGF0LWlzLW11c2ljLXF1aXpcIlxuICAgIH19PntgV2hhdCBpcyBNdXNpYyBRdWl6P2B9PC9oMT5cbiAgICA8cD57YE11c2ljIFF1aXogaXMgYSBmdW4gbW9kdWxlIGZvciB5b3VyIHVzZXJzIHRvIGludGVyYWN0IGFuZCBoYXZlIGZ1biB3aXRoIG9uZSBhbm90aGVyLiBJdCBjYW4gYmUgZmFzdCBwYWNlZCBhbmQgY2hhbGxlbmdpbmcgYnV0IHRoYXQgaXMgd2hhdCBtYWtlcyBpdCBmdW4uYH08L3A+XG4gICAgPEFsZXJ0IHN0eWxlPVwiaW5mb1wiIG1keFR5cGU9XCJBbGVydFwiPk5vdGU6IFlvdSBjYW4gZWFybiB1cCB0byA0NSBwb2ludHMgaW4gdG90YWwgYnkgZ3Vlc3NpbmcgdGhlIFNvbmcgVGl0bGUgYW5kIEF1dGhvcjwvQWxlcnQ+XG4gICAgPEFsZXJ0IHN0eWxlPVwiZGVzdHJ1Y3RpdmVcIiBtZHhUeXBlPVwiQWxlcnRcIj5Ob3RlOiBBIGxvdCBvZiBtZXNzYWdlcyBhcmUgc2VudCB3aGVuIHBsYXlpbmcgdGhlIGdhbWUgc28gaXQgaXMgYWR2aXNlZCB0byBoYXZlIGEgZGlmZmVyZW50IGNoYW5uZWwgZm9yIHRoaXMgcGx1Z2luITwvQWxlcnQ+XG4gICAgPERpc2NvcmRNZXNzYWdlcyBtZHhUeXBlPVwiRGlzY29yZE1lc3NhZ2VzXCI+XG4gICAgICA8RGlzY29yZE1lc3NhZ2UgYXV0aG9yPVwiRGlzY29yZCBVc2VyXCIga2V5PXsxfSBtZHhUeXBlPVwiRGlzY29yZE1lc3NhZ2VcIj5cbiAgICAgICAgPHA+e2BIaWB9PC9wPlxuICAgICAgICA8RGlzY29yZEVtYmVkIHNsb3Q9XCJlbWJlZHNcIiBjb2xvcj1cIiMxYWJjOWNcIiB0aXRsZT1cIldlbGNvbWUgdG8gdGhlIE11c2ljIFF1aXpcIiBmaWVsZHM9e1tdfSB0aW1lc3RhbXA9e25ldyBEYXRlKCkuZ2V0fSBtZHhUeXBlPVwiRGlzY29yZEVtYmVkXCI+XG5UaGlzIGlzIGEgZnVuIGdhbWUgd2hlcmUgSSB3aWxsIHBsYXkgeW91IGEgbGlzdCBvZiBzb25ncywgYW5kIHlvdSBoYXZlIHRvIGd1ZXNzIHdoYXQgdGhleSBhcmUuPGJyIC8+WW91IHdpbGwgZ2V0IDEgcG9pbnQgaWYgeW91IGd1ZXNzIHRoZSBhdXRob3Igb2YgdGhlIHNvbmcsIDEgcG9pbnQgaWYgeW91IGd1ZXNzIHRoZSB0aXRsZSwgYW5kIDMgcG9pbnRzIGlmIHlvdSBndWVzcyBib3RoITxiciAvPlRvIGd1ZXNzLCBqdXN0IHdyaXRlIGEgbWVzc2FnZSBpbiB0aGlzIGNoYW5uZWwuXG4gICAgICAgIDwvRGlzY29yZEVtYmVkPlxuICAgICAgPC9EaXNjb3JkTWVzc2FnZT5cbiAgICA8L0Rpc2NvcmRNZXNzYWdlcz5cbiAgICA8cD48aW1nIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJzcmNcIjogXCIvZG9jcy9tdXNpY3F1aXovaW50cm8ucG5nXCIsXG4gICAgICAgIFwiYWx0XCI6IG51bGxcbiAgICAgIH19PjwvaW1nPjwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=