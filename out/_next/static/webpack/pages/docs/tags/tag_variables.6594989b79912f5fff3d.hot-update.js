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
  }, {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 10
    }
  }), "<:BennySip:731922765246103562> Some information of this server:\n**Server Name:** {server}\nServer ID: {server.id}\n**Server Icon:** {server.icon}\n**Server Owner:** {server.owner}\n**Server Region:** {server.region}```\npoints to: ![ServerVariables](/docs/tags/server_variables.PNG)\n\n**User Variables**\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, "Hey, {user}! Did you know, that your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 49
    }
  }, "User ID"), " is {user.id}? Isn\u2019t that cool? I also know this information about you <:BennyWizard:734809658325205124>:\nYour ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 8
    }
  }, "discriminator"), " is {user.tag} and your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 85
    }
  }, "Username"), " is {user.name}.\nYou also have a cool avatar: {user.avatar}\nHave a nice day! <:BennyLove:732658898216943737>"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy90YWdzL3RhZ192YXJpYWJsZXMubWQiXSwibmFtZXMiOlsiaW5mbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1ha2VTaG9ydGNvZGUiLCJNRFhEZWZhdWx0U2hvcnRjb2RlIiwicHJvcHMiLCJjb25zb2xlIiwid2FybiIsIlBhZ2VUb29sYmFyIiwiQWxlcnQiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRU8sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUUsZUFEWTtBQUVsQkMsYUFBVyxFQUFFO0FBRkssQ0FBYjs7QUFJUCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLElBQUk7QUFBQSxTQUFJLFNBQVNHLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUM1REMsV0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBZU4sSUFBZixHQUFzQix5RUFBbkM7QUFDQSxXQUFPLHdKQUFTSSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBSHFCO0FBQUEsQ0FBMUI7O0FBSUEsSUFBTUcsV0FBVyxHQUFHTCxhQUFhLENBQUMsYUFBRCxDQUFqQztLQUFNSyxXO0FBQ04sSUFBTUMsS0FBSyxHQUFHTixhQUFhLENBQUMsT0FBRCxDQUEzQjtNQUFNTSxLO0FBQ04sSUFBTUMsV0FBVyxHQUFHO0FBQ2xCVixNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTVcsU0FBUyxHQUFHLFNBQWxCO0FBQ2UsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERVIsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVLLFdBQWYsRUFBZ0NMLEtB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N0NLLENBQVA7QUFpREQ7TUFyRHVCRCxVO0FBdUR4QjtBQUNBQSxVQUFVLENBQUNFLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy90YWdzL3RhZ192YXJpYWJsZXMuNjU5NDk4OWI3OTkxMmY1ZmZmM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cblxuZXhwb3J0IGNvbnN0IGluZm8gPSB7XG4gIG5hbWU6IFwiVGFnIFZhcmlhYmxlc1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIGd1aWRlIG9uIHVzaW5nIGNvb2wgdmFyaWFibGVzIGluIHlvdXIgVGFncyFcIlxufTtcbmNvbnN0IG1ha2VTaG9ydGNvZGUgPSBuYW1lID0+IGZ1bmN0aW9uIE1EWERlZmF1bHRTaG9ydGNvZGUocHJvcHMpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gICAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9Lz5cbiAgICB9O1xuY29uc3QgUGFnZVRvb2xiYXIgPSBtYWtlU2hvcnRjb2RlKFwiUGFnZVRvb2xiYXJcIik7XG5jb25zdCBBbGVydCA9IG1ha2VTaG9ydGNvZGUoXCJBbGVydFwiKTtcbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBpbmZvXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPFBhZ2VUb29sYmFyIHRpdGxlPVwiVGFnc1wiIG1keFR5cGU9XCJQYWdlVG9vbGJhclwiIC8+XG4gICAgPHA+e2BCZW5ueSBoYXMgbXVsdGlwbGUgdmFyaWFibGVzIHlvdSBjYW4gdXNlIGluIHlvdXIgdGFncy4gVGhlcmUgYXJlIHR3byB0eXBlcyBvZiB2YXJpYWJsZXMuYH08L3A+XG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwic2VydmVyLXZhcmlhYmxlc1wiXG4gICAgfX0+e2BTZXJ2ZXIgVmFyaWFibGVzYH08L2gxPlxuICAgIDxwPntgU2VydmVyIFZhcmlhYmxlcyBkZXNjcmliZSBzZXJ2ZXIgaW5mb3JtYXRpb24uYH08L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgU2VydmVyIE5hbWU6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7c2VydmVyfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BTZXJ2ZXIgSUQ6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7c2VydmVyLmlkfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BTZXJ2ZXIgSWNvbjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHtzZXJ2ZXIuaWNvbn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgU2VydmVyIE93bmVyOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3NlcnZlci5vd25lcn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgU2VydmVyIFJlZ2lvbjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHtzZXJ2ZXIucmVnaW9ufWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgPC91bD5cbiAgICA8aDEgey4uLntcbiAgICAgIFwiaWRcIjogXCJ1c2VyLXZhcmlhYmxlc1wiXG4gICAgfX0+e2BVc2VyIFZhcmlhYmxlc2B9PC9oMT5cbiAgICA8cD57YFVzZXIgVmFyaWFibGVzIGRlc2NyaWJlIGluZm9ybWF0aW9uIG9mIHRoZSB1c2VyIHdobyByYW4gdGhlIHRhZyBjb21tYW5kLmB9PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFVzZXIgTWVudGlvbjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHt1c2VyfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VyIERpc2NyaW1pbmF0b3I6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7dXNlci50YWd9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFVzZXIgQXZhdGFyOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3VzZXIuYXZhdGFyfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VybmFtZTogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHt1c2VyLm5hbWV9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFVzZXIgSUQ6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7dXNlci5pZH1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgIDwvdWw+XG4gICAgPEFsZXJ0IHN0eWxlPVwiaW5mb1wiIG1keFR5cGU9XCJBbGVydFwiPk5vdGU6IFlvdSBjYW4gY29uZmlndXJlIHlvdXIgdGFncyBieSBnb2luZyB0byB5b3VyIFtkYXNoYm9hcmRdKGh0dHBzOi8vYmVubnlib3QuZGV2L2Rhc2hib2FyZCkgPiBUYWdzPC9BbGVydD5cbiAgICA8aDEgey4uLntcbiAgICAgIFwiaWRcIjogXCJleGFtcGxlc1wiXG4gICAgfX0+e2BFeGFtcGxlc2B9PC9oMT5cbiAgICA8cD48c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BTZXJ2ZXIgVmFyaWFibGVzYH08L3N0cm9uZz48L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YDw6QmVubnlTaXA6NzMxOTIyNzY1MjQ2MTAzNTYyPiBTb21lIGluZm9ybWF0aW9uIG9mIHRoaXMgc2VydmVyOlxuKipTZXJ2ZXIgTmFtZToqKiB7c2VydmVyfVxuU2VydmVyIElEOiB7c2VydmVyLmlkfVxuKipTZXJ2ZXIgSWNvbjoqKiB7c2VydmVyLmljb259XG4qKlNlcnZlciBPd25lcjoqKiB7c2VydmVyLm93bmVyfVxuKipTZXJ2ZXIgUmVnaW9uOioqIHtzZXJ2ZXIucmVnaW9ufVxcYFxcYFxcYFxucG9pbnRzIHRvOiAhW1NlcnZlclZhcmlhYmxlc10oL2RvY3MvdGFncy9zZXJ2ZXJfdmFyaWFibGVzLlBORylcblxuKipVc2VyIFZhcmlhYmxlcyoqXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEhleSwge3VzZXJ9ISBEaWQgeW91IGtub3csIHRoYXQgeW91ciBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFVzZXIgSURgfTwvc3Ryb25nPntgIGlzIHt1c2VyLmlkfT8gSXNu4oCZdCB0aGF0IGNvb2w/IEkgYWxzbyBrbm93IHRoaXMgaW5mb3JtYXRpb24gYWJvdXQgeW91IDw6QmVubnlXaXphcmQ6NzM0ODA5NjU4MzI1MjA1MTI0PjpcbllvdXIgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BkaXNjcmltaW5hdG9yYH08L3N0cm9uZz57YCBpcyB7dXNlci50YWd9IGFuZCB5b3VyIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgVXNlcm5hbWVgfTwvc3Ryb25nPntgIGlzIHt1c2VyLm5hbWV9LlxuWW91IGFsc28gaGF2ZSBhIGNvb2wgYXZhdGFyOiB7dXNlci5hdmF0YXJ9XG5IYXZlIGEgbmljZSBkYXkhIDw6QmVubnlMb3ZlOjczMjY1ODg5ODIxNjk0MzczNz5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgcG9pbnRzIHRvOiAhW1VzZXJWYXJpYWJsZXNdKC9kb2NzL3RhZ3MvdXNlcl92YXJpYWJsZXMuanBnKVxuXG5gfTwvY29kZT48L3ByZT5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=