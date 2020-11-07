webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Load; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_AppBar */ "./components/_AppBar/index.js");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _components_PageToolBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageToolBar */ "./components/PageToolBar/index.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_flexbox_grid_dist_react_flexbox_grid_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-flexbox-grid/dist/react-flexbox-grid.css */ "./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css");
/* harmony import */ var react_flexbox_grid_dist_react_flexbox_grid_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid_dist_react_flexbox_grid_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_discord_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-discord-message */ "./node_modules/react-discord-message/dist/index.es.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // import dynamic from 'next/dynamic'
// const DiscordMessage = dynamic( () => import('react-discord-message').then(r=>({DiscordMessage: r.DiscordMessage, DiscordMessages: r.DiscordMessages, Mention: r.Mention})), { ssr: false } )
// console.log(DiscordMessage)


var components = {
  wrapper: function wrapper(props) {
    return __jsx("div", {
      style: {
        padding: '4%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, __jsx("main", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    })));
  },
  Alert: _components_Alert__WEBPACK_IMPORTED_MODULE_3__["default"],
  Button: _components_Button__WEBPACK_IMPORTED_MODULE_4__["default"],
  PageToolBar: _components_PageToolBar__WEBPACK_IMPORTED_MODULE_5__["default"],
  code: function code(props) {
    return __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, props.children);
  },
  inlineCode: function inlineCode(props) {
    return __jsx("pre", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, props.children);
  },
  blockquote: function blockquote(props) {
    return __jsx("blockquote", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, props.children);
  },
  DiscordMessages: react_discord_message__WEBPACK_IMPORTED_MODULE_9__["DiscordMessages"],
  DiscordMessage: react_discord_message__WEBPACK_IMPORTED_MODULE_9__["DiscordMessage"],
  DiscordEmbed: react_discord_message__WEBPACK_IMPORTED_MODULE_9__["DiscordEmbed"],
  Mention: react_discord_message__WEBPACK_IMPORTED_MODULE_9__["Mention"]
};
function Load(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["MDXProvider"], {
    components: components,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }))));
}
_c = Load;

var _c;

$RefreshReg$(_c, "Load");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwid3JhcHBlciIsInByb3BzIiwicGFkZGluZyIsIkFsZXJ0IiwiQnV0dG9uIiwiUGFnZVRvb2xCYXIiLCJjb2RlIiwiY2hpbGRyZW4iLCJpbmxpbmVDb2RlIiwiYmxvY2txdW90ZSIsIkRpc2NvcmRNZXNzYWdlcyIsIkRpc2NvcmRNZXNzYWdlIiwiRGlzY29yZEVtYmVkIiwiTWVudGlvbiIsIkxvYWQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFFQTtBQUNBOztBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2ZDLFNBQU8sRUFBRSxpQkFBQUMsS0FBSztBQUFBLFdBQ1Y7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0kscUdBQVVELEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBRFU7QUFBQSxHQURDO0FBTWZFLE9BQUssRUFBRUEseURBTlE7QUFPZkMsUUFBTSxFQUFFQSwwREFQTztBQVFmQyxhQUFXLEVBQUVBLCtEQVJFO0FBU2ZDLE1BQUksRUFBRSxjQUFBTCxLQUFLO0FBQUEsV0FDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tBLEtBQUssQ0FBQ00sUUFEWCxDQURPO0FBQUEsR0FUSTtBQWNmQyxZQUFVLEVBQUUsb0JBQUFQLEtBQUs7QUFBQSxXQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0EsS0FBSyxDQUFDTSxRQURYLENBRGE7QUFBQSxHQWRGO0FBbUJmRSxZQUFVLEVBQUUsb0JBQUFSLEtBQUs7QUFBQSxXQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0EsS0FBSyxDQUFDTSxRQURYLENBRGE7QUFBQSxHQW5CRjtBQXdCZkcsaUJBQWUsRUFBRUEscUVBeEJGO0FBeUJmQyxnQkFBYyxFQUFFQSxvRUF6QkQ7QUEwQmZDLGNBQVksRUFBRUEsa0VBMUJDO0FBMkJmQyxTQUFPLEVBQUVBLDZEQUFPQTtBQTNCRCxDQUFuQjtBQThCZSxTQUFTQyxJQUFULE9BQXdDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNuRCxTQUNJLG1FQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0ksTUFBQyx5REFBRDtBQUFhLGNBQVUsRUFBRWpCLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQseUZBQWVpQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQUhKLENBREo7QUFTSDtLQVZ1QkYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ5Zjg2Mzk5OGI2NWY5MTJiMjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcEJhcidcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCBQYWdlVG9vbEJhciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUb29sQmFyJ1xyXG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXHJcbmltcG9ydCAnLi4vc3R5bGVzLmNzcydcclxuaW1wb3J0ICdyZWFjdC1mbGV4Ym94LWdyaWQvZGlzdC9yZWFjdC1mbGV4Ym94LWdyaWQuY3NzJ1xyXG5cclxuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5cclxuLy8gY29uc3QgRGlzY29yZE1lc3NhZ2UgPSBkeW5hbWljKCAoKSA9PiBpbXBvcnQoJ3JlYWN0LWRpc2NvcmQtbWVzc2FnZScpLnRoZW4ocj0+KHtEaXNjb3JkTWVzc2FnZTogci5EaXNjb3JkTWVzc2FnZSwgRGlzY29yZE1lc3NhZ2VzOiByLkRpc2NvcmRNZXNzYWdlcywgTWVudGlvbjogci5NZW50aW9ufSkpLCB7IHNzcjogZmFsc2UgfSApXHJcbi8vIGNvbnNvbGUubG9nKERpc2NvcmRNZXNzYWdlKVxyXG5pbXBvcnQge0Rpc2NvcmRNZXNzYWdlcyxEaXNjb3JkRW1iZWQsRGlzY29yZE1lc3NhZ2UsTWVudGlvbixFbWJlZEZpZWxkfSBmcm9tICdyZWFjdC1kaXNjb3JkLW1lc3NhZ2UnXHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgd3JhcHBlcjogcHJvcHMgPT4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzQlJyB9fT5cclxuICAgICAgICAgICAgPG1haW4gey4uLnByb3BzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICAgIEFsZXJ0OiBBbGVydCxcclxuICAgIEJ1dHRvbjogQnV0dG9uLFxyXG4gICAgUGFnZVRvb2xCYXI6IFBhZ2VUb29sQmFyLFxyXG4gICAgY29kZTogcHJvcHMgPT4gKFxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgKSxcclxuICAgIGlubGluZUNvZGU6IHByb3BzID0+IChcclxuICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICApLFxyXG4gICAgYmxvY2txdW90ZTogcHJvcHMgPT4gKFxyXG4gICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgKSxcclxuICAgIERpc2NvcmRNZXNzYWdlczogRGlzY29yZE1lc3NhZ2VzLFxyXG4gICAgRGlzY29yZE1lc3NhZ2U6IERpc2NvcmRNZXNzYWdlLFxyXG4gICAgRGlzY29yZEVtYmVkOiBEaXNjb3JkRW1iZWQsXHJcbiAgICBNZW50aW9uOiBNZW50aW9uLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXBwQmFyIC8+XHJcblxyXG4gICAgICAgICAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17Y29tcG9uZW50c30+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvTURYUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9