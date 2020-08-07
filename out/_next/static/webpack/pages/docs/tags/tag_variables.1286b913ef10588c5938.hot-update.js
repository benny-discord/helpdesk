webpackHotUpdate_N_E("pages/docs/tags/tag_variables",{

/***/ "./pages/docs/tags/tag_variables.md":
/*!******************************************!*\
  !*** ./pages/docs/tags/tag_variables.md ***!
  \******************************************/
/*! exports provided: info, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var _jsxFileName = "F:\\Projects\\benny-things\\helpdesk\\pages\\docs\\tags\\tag_variables.md";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var info = {
  name: "Tag Variables",
  description: "A guide on using cool variables in your Tags!"
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

var PageToolbar = makeShortcode("PageToolbar");
_c = PageToolbar;
var Alert = makeShortcode("Alert");
_c2 = Alert;
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
      lineNumber: 25,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(PageToolbar, {
    title: "Tags",
    mdxType: "PageToolbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, "Benny has multiple variables you can use in your tags. There are two types of variables."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "server-variables"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), "Server Variables"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "Server Variables describe server information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Server Name: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 44
    }
  }, "{server}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Server ID: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 42
    }
  }, "{server.id}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Server Icon: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 44
    }
  }, "{server.icon}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Server Owner: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  }, "{server.owner}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Server Region: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 46
    }
  }, "{server.region}"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "user-variables"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), "User Variables"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "User Variables describe information of the user who ran the tag command."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "User Mention: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 45
    }
  }, "{user}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "User Discriminator: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 51
    }
  }, "{user.tag}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "User Avatar: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 44
    }
  }, "{user.avatar}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "Username: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, "{user.name}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "User ID: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 40
    }
  }, "{user.id}"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Alert, {
    style: "info",
    mdxType: "Alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Note: You can configure your tags by going to your [dashboard](https://bennybot.dev/dashboard) > Tags"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "examples"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), "Examples"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }
  }, "Server Variables")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-<:BennySip:731922765246103562>",
    "metastring": "Some information of this server:",
    "Some": true,
    "information": true,
    "of": true,
    "this": true,
    "server:": true
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 10
    }
  }), "**Server Name:** {server}\nServer ID: {server.id}\n**Server Icon:** {server.icon}\n**Server Owner:** {server.owner}\n**Server Region:** {server.region}```\npoints to: ![ServerVariables](/docs/tags/server_variables.PNG)\n\n**User Variables**\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, "Hey, {user}! Did you know, that your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 49
    }
  }, "User ID"), " is {user.id}? Isn\u2019t that cool? I also know this information about you <:BennyWizard:734809658325205124>:\nYour ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, "discriminator"), " is {user.tag} and your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 85
    }
  }, "Username"), " is {user.name}.\nYou also have a cool avatar: {user.avatar}\nHave a nice day! <:BennyLove:732658898216943737>"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  }), "points to: ![UserVariables](/docs/tags/user_variables.jpg)\n\n")));
}
_c3 = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c, _c2, _c3;

$RefreshReg$(_c, "PageToolbar");
$RefreshReg$(_c2, "Alert");
$RefreshReg$(_c3, "MDXContent");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy90YWdzL3RhZ192YXJpYWJsZXMubWQiXSwibmFtZXMiOlsiaW5mbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1ha2VTaG9ydGNvZGUiLCJNRFhEZWZhdWx0U2hvcnRjb2RlIiwicHJvcHMiLCJjb25zb2xlIiwid2FybiIsIlBhZ2VUb29sYmFyIiwiQWxlcnQiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRU8sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUUsZUFEWTtBQUVsQkMsYUFBVyxFQUFFO0FBRkssQ0FBYjs7QUFJUCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLElBQUk7QUFBQSxTQUFJLFNBQVNHLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUM1REMsV0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBZU4sSUFBZixHQUFzQix5RUFBbkM7QUFDQSxXQUFPLHdKQUFTSSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBSHFCO0FBQUEsQ0FBMUI7O0FBSUEsSUFBTUcsV0FBVyxHQUFHTCxhQUFhLENBQUMsYUFBRCxDQUFqQztLQUFNSyxXO0FBQ04sSUFBTUMsS0FBSyxHQUFHTixhQUFhLENBQUMsT0FBRCxDQUEzQjtNQUFNTSxLO0FBQ04sSUFBTUMsV0FBVyxHQUFHO0FBQ2xCVixNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTVcsU0FBUyxHQUFHLFNBQWxCO0FBQ2UsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERVIsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVLLFdBQWYsRUFBZ0NMLEtB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QW9ETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkIsRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFBTCxDQXBESyxDQUFQO0FBd0REO01BNUR1QkQsVTtBQThEeEI7QUFDQUEsVUFBVSxDQUFDRSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvdGFncy90YWdfdmFyaWFibGVzLjEyODZiOTEzZWYxMDU4OGM1OTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5cbmV4cG9ydCBjb25zdCBpbmZvID0ge1xuICBuYW1lOiBcIlRhZyBWYXJpYWJsZXNcIixcbiAgZGVzY3JpcHRpb246IFwiQSBndWlkZSBvbiB1c2luZyBjb29sIHZhcmlhYmxlcyBpbiB5b3VyIFRhZ3MhXCJcbn07XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG4gICAgfTtcbmNvbnN0IFBhZ2VUb29sYmFyID0gbWFrZVNob3J0Y29kZShcIlBhZ2VUb29sYmFyXCIpO1xuY29uc3QgQWxlcnQgPSBtYWtlU2hvcnRjb2RlKFwiQWxlcnRcIik7XG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgaW5mb1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxQYWdlVG9vbGJhciB0aXRsZT1cIlRhZ3NcIiBtZHhUeXBlPVwiUGFnZVRvb2xiYXJcIiAvPlxuICAgIDxwPntgQmVubnkgaGFzIG11bHRpcGxlIHZhcmlhYmxlcyB5b3UgY2FuIHVzZSBpbiB5b3VyIHRhZ3MuIFRoZXJlIGFyZSB0d28gdHlwZXMgb2YgdmFyaWFibGVzLmB9PC9wPlxuICAgIDxoMSB7Li4ue1xuICAgICAgXCJpZFwiOiBcInNlcnZlci12YXJpYWJsZXNcIlxuICAgIH19PntgU2VydmVyIFZhcmlhYmxlc2B9PC9oMT5cbiAgICA8cD57YFNlcnZlciBWYXJpYWJsZXMgZGVzY3JpYmUgc2VydmVyIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBOYW1lOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3NlcnZlcn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgU2VydmVyIElEOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3NlcnZlci5pZH1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgU2VydmVyIEljb246IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7c2VydmVyLmljb259YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBPd25lcjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHtzZXJ2ZXIub3duZXJ9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBSZWdpb246IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7c2VydmVyLnJlZ2lvbn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgIDwvdWw+XG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwidXNlci12YXJpYWJsZXNcIlxuICAgIH19PntgVXNlciBWYXJpYWJsZXNgfTwvaDE+XG4gICAgPHA+e2BVc2VyIFZhcmlhYmxlcyBkZXNjcmliZSBpbmZvcm1hdGlvbiBvZiB0aGUgdXNlciB3aG8gcmFuIHRoZSB0YWcgY29tbWFuZC5gfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VyIE1lbnRpb246IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7dXNlcn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXNlciBEaXNjcmltaW5hdG9yOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3VzZXIudGFnfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VyIEF2YXRhcjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHt1c2VyLmF2YXRhcn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXNlcm5hbWU6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7dXNlci5uYW1lfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VyIElEOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3VzZXIuaWR9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICA8L3VsPlxuICAgIDxBbGVydCBzdHlsZT1cImluZm9cIiBtZHhUeXBlPVwiQWxlcnRcIj5Ob3RlOiBZb3UgY2FuIGNvbmZpZ3VyZSB5b3VyIHRhZ3MgYnkgZ29pbmcgdG8geW91ciBbZGFzaGJvYXJkXShodHRwczovL2Jlbm55Ym90LmRldi9kYXNoYm9hcmQpID4gVGFnczwvQWxlcnQ+XG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwiZXhhbXBsZXNcIlxuICAgIH19PntgRXhhbXBsZXNgfTwvaDE+XG4gICAgPHA+PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgU2VydmVyIFZhcmlhYmxlc2B9PC9zdHJvbmc+PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtPDpCZW5ueVNpcDo3MzE5MjI3NjUyNDYxMDM1NjI+XCIsXG4gICAgICAgIFwibWV0YXN0cmluZ1wiOiBcIlNvbWUgaW5mb3JtYXRpb24gb2YgdGhpcyBzZXJ2ZXI6XCIsXG4gICAgICAgIFwiU29tZVwiOiB0cnVlLFxuICAgICAgICBcImluZm9ybWF0aW9uXCI6IHRydWUsXG4gICAgICAgIFwib2ZcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aGlzXCI6IHRydWUsXG4gICAgICAgIFwic2VydmVyOlwiOiB0cnVlXG4gICAgICB9fT57YCoqU2VydmVyIE5hbWU6Kioge3NlcnZlcn1cblNlcnZlciBJRDoge3NlcnZlci5pZH1cbioqU2VydmVyIEljb246Kioge3NlcnZlci5pY29ufVxuKipTZXJ2ZXIgT3duZXI6Kioge3NlcnZlci5vd25lcn1cbioqU2VydmVyIFJlZ2lvbjoqKiB7c2VydmVyLnJlZ2lvbn1cXGBcXGBcXGBcbnBvaW50cyB0bzogIVtTZXJ2ZXJWYXJpYWJsZXNdKC9kb2NzL3RhZ3Mvc2VydmVyX3ZhcmlhYmxlcy5QTkcpXG5cbioqVXNlciBWYXJpYWJsZXMqKlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BIZXksIHt1c2VyfSEgRGlkIHlvdSBrbm93LCB0aGF0IHlvdXIgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BVc2VyIElEYH08L3N0cm9uZz57YCBpcyB7dXNlci5pZH0/IElzbuKAmXQgdGhhdCBjb29sPyBJIGFsc28ga25vdyB0aGlzIGluZm9ybWF0aW9uIGFib3V0IHlvdSA8OkJlbm55V2l6YXJkOjczNDgwOTY1ODMyNTIwNTEyND46XG5Zb3VyIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgZGlzY3JpbWluYXRvcmB9PC9zdHJvbmc+e2AgaXMge3VzZXIudGFnfSBhbmQgeW91ciBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFVzZXJuYW1lYH08L3N0cm9uZz57YCBpcyB7dXNlci5uYW1lfS5cbllvdSBhbHNvIGhhdmUgYSBjb29sIGF2YXRhcjoge3VzZXIuYXZhdGFyfVxuSGF2ZSBhIG5pY2UgZGF5ISA8OkJlbm55TG92ZTo3MzI2NTg4OTgyMTY5NDM3Mzc+YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YHBvaW50cyB0bzogIVtVc2VyVmFyaWFibGVzXSgvZG9jcy90YWdzL3VzZXJfdmFyaWFibGVzLmpwZylcblxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9