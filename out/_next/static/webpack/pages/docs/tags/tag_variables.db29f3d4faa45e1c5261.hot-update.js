webpackHotUpdate_N_E("pages/docs/tags/tag_variables",{

/***/ "./pages/docs/tags/tag_variables.md":
/*!******************************************!*\
  !*** ./pages/docs/tags/tag_variables.md ***!
  \******************************************/
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


var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\pages\\docs\\tags\\tag_variables.md";
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

var PageToolBar = makeShortcode("PageToolBar");
_c = PageToolBar;
var Alert = makeShortcode("Alert");
_c2 = Alert;
var DiscordMessages = makeShortcode("DiscordMessages");
_c3 = DiscordMessages;
var DiscordMessage = makeShortcode("DiscordMessage");
_c4 = DiscordMessage;
var Mention = makeShortcode("Mention");
_c5 = Mention;
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
    title: "Tag Variables",
    mdxType: "PageToolBar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "table-of-contents"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), "Table of Contents"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#server-variables"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 28
    }
  }), "Server Variables"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#user-variables"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 28
    }
  }), "User Variables"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#examples"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 28
    }
  }), "Examples")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "#server-variables-1"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 31
    }
  }), "Server Variables")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "#user-variables-1"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 31
    }
  }), "User Variables"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "server-variables"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), "Server Variables"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, "Server Variables describe server information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "Server Name: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 44
    }
  }, "{server}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, "Server ID: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 42
    }
  }, "{server.id}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Server Icon: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 44
    }
  }, "{server.icon}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "Server Owner: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 45
    }
  }, "{server.owner}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "Server Region: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 46
    }
  }, "{server.region}"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "user-variables"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }), "User Variables"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, "User Variables describe information of the user who ran the tag command."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "User Mention: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 45
    }
  }, "{user}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "User Discriminator: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 51
    }
  }, "{user.tag}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "User Avatar: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 44
    }
  }, "{user.avatar}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "Username: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, "{user.name}")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "User ID: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 40
    }
  }, "{user.id}"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Alert, {
    style: "info",
    mdxType: "Alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "Note: You can configure your tags by going to your dashboard and choosing the tags module."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "examples"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }), "Examples"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "server-variables-1"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }), "Server Variables"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 10
    }
  }), "**Some information about this server:**\n**Server Name:** {server}\n**Server ID**: {server.id}\n**Server Icon:** {server.icon}\n**Server Owner:** {server.owner}\n**Server Region:** {server.region}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessages, {
    mdxType: "DiscordMessages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessage, {
    author: "Benny",
    bot: true,
    avatar: "https://bennybot.dev/icon.png",
    key: 2,
    mdxType: "DiscordMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 12
    }
  }, "Some information about this server:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 83
    }
  }), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 3
    }
  }, "Server Name:"), " Benny Support", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 69
    }
  }), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 3
    }
  }, "Server ID"), ": 523525264517496834", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 72
    }
  }), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 3
    }
  }, "Server Icon:"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://cdn.discordapp.com/icons/523525264517496834/1190e1523f5cb03c8bfa309c23753189.png?size=2048"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 56
    }
  }), "https://cdn.discordapp.com/icons/523525264517496834/1190e1523f5cb03c8bfa309c23753189.png?size=2048"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 120
    }
  }), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 3
    }
  }, "Server Owner:"), " AR#3616", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 64
    }
  }), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 3
    }
  }, "Server Region:"), " europe"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "id": "user-variables-1"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }), "User Variables"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 10
    }
  }), "Hey, {user}! Did you know, that your **User ID** is {user.id}?\nIsn\u2019t that cool? I also know this information about you:\nYour **discriminator** is {user.tag} and your **Username** is {user.name}.\nYou also have a cool avatar: {user.avatar}\nHave a nice day!\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessages, {
    mdxType: "DiscordMessages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(DiscordMessage, {
    author: "Benny",
    bot: true,
    avatar: "https://bennybot.dev/icon.png",
    key: 2,
    mdxType: "DiscordMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, "Hey, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(Mention, {
    highlight: true,
    mdxType: "Mention",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, "Discord User"), "! Did you know, that your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 121
    }
  }, "User ID"), " is 123456789012345678?", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 191
    }
  }), "\nIsn\u2019t that cool? I also know this information about you:", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 59
    }
  }), "\nYour ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 8
    }
  }, "discriminator"), " is Discord User#0000 and your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 92
    }
  }, "Username"), " is Discord User.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 157
    }
  }), "\nYou also have a cool avatar: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://cdn.discordapp.com/embed/avatars/0.png"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 32
    }
  }), "https://cdn.discordapp.com/embed/avatars/0.png"), "\nHave a nice day!"))));
}
_c6 = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "PageToolBar");
$RefreshReg$(_c2, "Alert");
$RefreshReg$(_c3, "DiscordMessages");
$RefreshReg$(_c4, "DiscordMessage");
$RefreshReg$(_c5, "Mention");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy90YWdzL3RhZ192YXJpYWJsZXMubWQiXSwibmFtZXMiOlsiaW5mbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1ha2VTaG9ydGNvZGUiLCJNRFhEZWZhdWx0U2hvcnRjb2RlIiwicHJvcHMiLCJjb25zb2xlIiwid2FybiIsIlBhZ2VUb29sQmFyIiwiQWxlcnQiLCJEaXNjb3JkTWVzc2FnZXMiLCJEaXNjb3JkTWVzc2FnZSIsIk1lbnRpb24iLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRU8sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUUsZUFEWTtBQUVsQkMsYUFBVyxFQUFFO0FBRkssQ0FBYjs7QUFJUCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLElBQUk7QUFBQSxTQUFJLFNBQVNHLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUM1REMsV0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBZU4sSUFBZixHQUFzQix5RUFBbkM7QUFDQSxXQUFPLHdKQUFTSSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBSHFCO0FBQUEsQ0FBMUI7O0FBSUEsSUFBTUcsV0FBVyxHQUFHTCxhQUFhLENBQUMsYUFBRCxDQUFqQztLQUFNSyxXO0FBQ04sSUFBTUMsS0FBSyxHQUFHTixhQUFhLENBQUMsT0FBRCxDQUEzQjtNQUFNTSxLO0FBQ04sSUFBTUMsZUFBZSxHQUFHUCxhQUFhLENBQUMsaUJBQUQsQ0FBckM7TUFBTU8sZTtBQUNOLElBQU1DLGNBQWMsR0FBR1IsYUFBYSxDQUFDLGdCQUFELENBQXBDO01BQU1RLGM7QUFDTixJQUFNQyxPQUFPLEdBQUdULGFBQWEsQ0FBQyxTQUFE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QURsRCxhQUVEO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkMscUNBRW1GO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRm5GLHVCQUVvSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnBKLHFDQUd1QjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3pDLFlBQVE7QUFEaUMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFIdkIsdUJBREYsQ0FERixDQXhGSyxDQUFQO0FBb0dEO01BeEd1QkQsVTtBQTBHeEI7QUFDQUEsVUFBVSxDQUFDRSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvdGFncy90YWdfdmFyaWFibGVzLmRiMjlmM2Q0ZmFhNDVlMWM1MjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5cbmV4cG9ydCBjb25zdCBpbmZvID0ge1xuICBuYW1lOiBcIlRhZyBWYXJpYWJsZXNcIixcbiAgZGVzY3JpcHRpb246IFwiQSBndWlkZSBvbiB1c2luZyBjb29sIHZhcmlhYmxlcyBpbiB5b3VyIFRhZ3MhXCJcbn07XG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJDb21wb25lbnQgXCIgKyBuYW1lICsgXCIgd2FzIG5vdCBpbXBvcnRlZCwgZXhwb3J0ZWQsIG9yIHByb3ZpZGVkIGJ5IE1EWFByb3ZpZGVyIGFzIGdsb2JhbCBzY29wZVwiKVxuICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG4gICAgfTtcbmNvbnN0IFBhZ2VUb29sQmFyID0gbWFrZVNob3J0Y29kZShcIlBhZ2VUb29sQmFyXCIpO1xuY29uc3QgQWxlcnQgPSBtYWtlU2hvcnRjb2RlKFwiQWxlcnRcIik7XG5jb25zdCBEaXNjb3JkTWVzc2FnZXMgPSBtYWtlU2hvcnRjb2RlKFwiRGlzY29yZE1lc3NhZ2VzXCIpO1xuY29uc3QgRGlzY29yZE1lc3NhZ2UgPSBtYWtlU2hvcnRjb2RlKFwiRGlzY29yZE1lc3NhZ2VcIik7XG5jb25zdCBNZW50aW9uID0gbWFrZVNob3J0Y29kZShcIk1lbnRpb25cIik7XG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgaW5mb1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxQYWdlVG9vbEJhciB0aXRsZT1cIlRhZyBWYXJpYWJsZXNcIiBtZHhUeXBlPVwiUGFnZVRvb2xCYXJcIiAvPlxuICAgIDxoMSB7Li4ue1xuICAgICAgXCJpZFwiOiBcInRhYmxlLW9mLWNvbnRlbnRzXCJcbiAgICB9fT57YFRhYmxlIG9mIENvbnRlbnRzYH08L2gxPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiI3NlcnZlci12YXJpYWJsZXNcIlxuICAgICAgICAgIH19PntgU2VydmVyIFZhcmlhYmxlc2B9PC9hPjwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgIDxwIHBhcmVudE5hbWU9XCJsaVwiPjxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcIiN1c2VyLXZhcmlhYmxlc1wiXG4gICAgICAgICAgfX0+e2BVc2VyIFZhcmlhYmxlc2B9PC9hPjwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgIDxwIHBhcmVudE5hbWU9XCJsaVwiPjxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcIiNleGFtcGxlc1wiXG4gICAgICAgICAgfX0+e2BFeGFtcGxlc2B9PC9hPjwvcD5cbiAgICAgICAgPHVsIHBhcmVudE5hbWU9XCJsaVwiPlxuICAgICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgICAgICBcImhyZWZcIjogXCIjc2VydmVyLXZhcmlhYmxlcy0xXCJcbiAgICAgICAgICAgIH19PntgU2VydmVyIFZhcmlhYmxlc2B9PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiaHJlZlwiOiBcIiN1c2VyLXZhcmlhYmxlcy0xXCJcbiAgICAgICAgICAgIH19PntgVXNlciBWYXJpYWJsZXNgfTwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxoMSB7Li4ue1xuICAgICAgXCJpZFwiOiBcInNlcnZlci12YXJpYWJsZXNcIlxuICAgIH19PntgU2VydmVyIFZhcmlhYmxlc2B9PC9oMT5cbiAgICA8cD57YFNlcnZlciBWYXJpYWJsZXMgZGVzY3JpYmUgc2VydmVyIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBOYW1lOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3NlcnZlcn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgU2VydmVyIElEOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3NlcnZlci5pZH1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgU2VydmVyIEljb246IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7c2VydmVyLmljb259YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBPd25lcjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHtzZXJ2ZXIub3duZXJ9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBSZWdpb246IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7c2VydmVyLnJlZ2lvbn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgIDwvdWw+XG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwidXNlci12YXJpYWJsZXNcIlxuICAgIH19PntgVXNlciBWYXJpYWJsZXNgfTwvaDE+XG4gICAgPHA+e2BVc2VyIFZhcmlhYmxlcyBkZXNjcmliZSBpbmZvcm1hdGlvbiBvZiB0aGUgdXNlciB3aG8gcmFuIHRoZSB0YWcgY29tbWFuZC5gfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VyIE1lbnRpb246IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7dXNlcn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXNlciBEaXNjcmltaW5hdG9yOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3VzZXIudGFnfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VyIEF2YXRhcjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHt1c2VyLmF2YXRhcn1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXNlcm5hbWU6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7dXNlci5uYW1lfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BVc2VyIElEOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3VzZXIuaWR9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICA8L3VsPlxuICAgIDxBbGVydCBzdHlsZT1cImluZm9cIiBtZHhUeXBlPVwiQWxlcnRcIj5Ob3RlOiBZb3UgY2FuIGNvbmZpZ3VyZSB5b3VyIHRhZ3MgYnkgZ29pbmcgdG8geW91ciBkYXNoYm9hcmQgYW5kIGNob29zaW5nIHRoZSB0YWdzIG1vZHVsZS48L0FsZXJ0PlxuICAgIDxoMSB7Li4ue1xuICAgICAgXCJpZFwiOiBcImV4YW1wbGVzXCJcbiAgICB9fT57YEV4YW1wbGVzYH08L2gxPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInNlcnZlci12YXJpYWJsZXMtMVwiXG4gICAgfX0+e2BTZXJ2ZXIgVmFyaWFibGVzYH08L2gyPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2AqKlNvbWUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBzZXJ2ZXI6KipcbioqU2VydmVyIE5hbWU6Kioge3NlcnZlcn1cbioqU2VydmVyIElEKio6IHtzZXJ2ZXIuaWR9XG4qKlNlcnZlciBJY29uOioqIHtzZXJ2ZXIuaWNvbn1cbioqU2VydmVyIE93bmVyOioqIHtzZXJ2ZXIub3duZXJ9XG4qKlNlcnZlciBSZWdpb246Kioge3NlcnZlci5yZWdpb259XG5gfTwvY29kZT48L3ByZT5cbiAgICA8RGlzY29yZE1lc3NhZ2VzIG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZXNcIj5cbiAgICAgIDxEaXNjb3JkTWVzc2FnZSBhdXRob3I9XCJCZW5ueVwiIGJvdD17dHJ1ZX0gYXZhdGFyPVwiaHR0cHM6Ly9iZW5ueWJvdC5kZXYvaWNvbi5wbmdcIiBrZXk9ezJ9IG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZVwiPlxuICAgICAgICA8cD48c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BTb21lIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgc2VydmVyOmB9PC9zdHJvbmc+PGJyIC8+e2BcbmB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgU2VydmVyIE5hbWU6YH08L3N0cm9uZz57YCBCZW5ueSBTdXBwb3J0YH08YnIgLz57YFxuYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BTZXJ2ZXIgSURgfTwvc3Ryb25nPntgOiA1MjM1MjUyNjQ1MTc0OTY4MzRgfTxiciAvPntgXG5gfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFNlcnZlciBJY29uOmB9PC9zdHJvbmc+e2AgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9pY29ucy81MjM1MjUyNjQ1MTc0OTY4MzQvMTE5MGUxNTIzZjVjYjAzYzhiZmEzMDljMjM3NTMxODkucG5nP3NpemU9MjA0OFwiXG4gICAgICAgICAgfX0+e2BodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9pY29ucy81MjM1MjUyNjQ1MTc0OTY4MzQvMTE5MGUxNTIzZjVjYjAzYzhiZmEzMDljMjM3NTMxODkucG5nP3NpemU9MjA0OGB9PC9hPjxiciAvPntgXG5gfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFNlcnZlciBPd25lcjpgfTwvc3Ryb25nPntgIEFSIzM2MTZgfTxiciAvPntgXG5gfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFNlcnZlciBSZWdpb246YH08L3N0cm9uZz57YCBldXJvcGVgfTwvcD5cbiAgICAgIDwvRGlzY29yZE1lc3NhZ2U+XG4gICAgPC9EaXNjb3JkTWVzc2FnZXM+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwidXNlci12YXJpYWJsZXMtMVwiXG4gICAgfX0+e2BVc2VyIFZhcmlhYmxlc2B9PC9oMj5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgSGV5LCB7dXNlcn0hIERpZCB5b3Uga25vdywgdGhhdCB5b3VyICoqVXNlciBJRCoqIGlzIHt1c2VyLmlkfT9cbklzbuKAmXQgdGhhdCBjb29sPyBJIGFsc28ga25vdyB0aGlzIGluZm9ybWF0aW9uIGFib3V0IHlvdTpcbllvdXIgKipkaXNjcmltaW5hdG9yKiogaXMge3VzZXIudGFnfSBhbmQgeW91ciAqKlVzZXJuYW1lKiogaXMge3VzZXIubmFtZX0uXG5Zb3UgYWxzbyBoYXZlIGEgY29vbCBhdmF0YXI6IHt1c2VyLmF2YXRhcn1cbkhhdmUgYSBuaWNlIGRheSFcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxEaXNjb3JkTWVzc2FnZXMgbWR4VHlwZT1cIkRpc2NvcmRNZXNzYWdlc1wiPlxuICAgICAgPERpc2NvcmRNZXNzYWdlIGF1dGhvcj1cIkJlbm55XCIgYm90PXt0cnVlfSBhdmF0YXI9XCJodHRwczovL2Jlbm55Ym90LmRldi9pY29uLnBuZ1wiIGtleT17Mn0gbWR4VHlwZT1cIkRpc2NvcmRNZXNzYWdlXCI+XG4gICAgICAgIDxwPntgSGV5LCBgfTxNZW50aW9uIGhpZ2hsaWdodD17dHJ1ZX0gbWR4VHlwZT1cIk1lbnRpb25cIj57YERpc2NvcmQgVXNlcmB9PC9NZW50aW9uPntgISBEaWQgeW91IGtub3csIHRoYXQgeW91ciBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFVzZXIgSURgfTwvc3Ryb25nPntgIGlzIDEyMzQ1Njc4OTAxMjM0NTY3OD9gfTxiciAvPntgXG5Jc27igJl0IHRoYXQgY29vbD8gSSBhbHNvIGtub3cgdGhpcyBpbmZvcm1hdGlvbiBhYm91dCB5b3U6YH08YnIgLz57YFxuWW91ciBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YGRpc2NyaW1pbmF0b3JgfTwvc3Ryb25nPntgIGlzIERpc2NvcmQgVXNlciMwMDAwIGFuZCB5b3VyIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgVXNlcm5hbWVgfTwvc3Ryb25nPntgIGlzIERpc2NvcmQgVXNlci5gfTxiciAvPntgXG5Zb3UgYWxzbyBoYXZlIGEgY29vbCBhdmF0YXI6IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZ1wiXG4gICAgICAgICAgfX0+e2BodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nYH08L2E+e2BcbkhhdmUgYSBuaWNlIGRheSFgfTwvcD5cbiAgICAgIDwvRGlzY29yZE1lc3NhZ2U+XG4gICAgPC9EaXNjb3JkTWVzc2FnZXM+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9