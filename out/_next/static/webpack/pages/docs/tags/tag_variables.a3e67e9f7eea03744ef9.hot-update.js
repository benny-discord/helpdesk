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
    type: "user",
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
      columnNumber: 133
    }
  }, "User ID"), " is 123456789012345678?", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 203
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy90YWdzL3RhZ192YXJpYWJsZXMubWQiXSwibmFtZXMiOlsiaW5mbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1ha2VTaG9ydGNvZGUiLCJNRFhEZWZhdWx0U2hvcnRjb2RlIiwicHJvcHMiLCJjb25zb2xlIiwid2FybiIsIlBhZ2VUb29sQmFyIiwiQWxlcnQiLCJEaXNjb3JkTWVzc2FnZXMiLCJEaXNjb3JkTWVzc2FnZSIsIk1lbnRpb24iLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRU8sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUUsZUFEWTtBQUVsQkMsYUFBVyxFQUFFO0FBRkssQ0FBYjs7QUFJUCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLElBQUk7QUFBQSxTQUFJLFNBQVNHLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUM1REMsV0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBZU4sSUFBZixHQUFzQix5RUFBbkM7QUFDQSxXQUFPLHdKQUFTSSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNELEdBSHFCO0FBQUEsQ0FBMUI7O0FBSUEsSUFBTUcsV0FBVyxHQUFHTCxhQUFhLENBQUMsYUFBRCxDQUFqQztLQUFNSyxXO0FBQ04sSUFBTUMsS0FBSyxHQUFHTixhQUFhLENBQUMsT0FBRCxDQUEzQjtNQUFNTSxLO0FBQ04sSUFBTUMsZUFBZSxHQUFHUCxhQUFhLENBQUMsaUJBQUQsQ0FBckM7TUFBTU8sZTtBQUNOLElBQU1DLGNBQWMsR0FBR1IsYUFBYSxDQUFDLGdCQUFELENBQXBDO01BQU1RLGM7QUFDTixJQUFNQyxPQUFPLEdBQUdULGFBQWEsQ0FBQyxTQUFE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O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbEQsYUFFRDtBQUFRLGNBQVUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZDLHFDQUVtRjtBQUFRLGNBQVUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZuRix1QkFFb0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZwSixxQ0FHdUI7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUN6QyxZQUFRO0FBRGlDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBSHZCLHVCQURGLENBREYsQ0F4RkssQ0FBUDtBQW9HRDtNQXhHdUJELFU7QUEwR3hCO0FBQ0FBLFVBQVUsQ0FBQ0UsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL3RhZ3MvdGFnX3ZhcmlhYmxlcy5hM2U2N2U5ZjdlZWEwMzc0NGVmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuXG5leHBvcnQgY29uc3QgaW5mbyA9IHtcbiAgbmFtZTogXCJUYWcgVmFyaWFibGVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgZ3VpZGUgb24gdXNpbmcgY29vbCB2YXJpYWJsZXMgaW4geW91ciBUYWdzIVwiXG59O1xuY29uc3QgbWFrZVNob3J0Y29kZSA9IG5hbWUgPT4gZnVuY3Rpb24gTURYRGVmYXVsdFNob3J0Y29kZShwcm9wcykge1xuICAgICAgY29uc29sZS53YXJuKFwiQ29tcG9uZW50IFwiICsgbmFtZSArIFwiIHdhcyBub3QgaW1wb3J0ZWQsIGV4cG9ydGVkLCBvciBwcm92aWRlZCBieSBNRFhQcm92aWRlciBhcyBnbG9iYWwgc2NvcGVcIilcbiAgICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxuICAgIH07XG5jb25zdCBQYWdlVG9vbEJhciA9IG1ha2VTaG9ydGNvZGUoXCJQYWdlVG9vbEJhclwiKTtcbmNvbnN0IEFsZXJ0ID0gbWFrZVNob3J0Y29kZShcIkFsZXJ0XCIpO1xuY29uc3QgRGlzY29yZE1lc3NhZ2VzID0gbWFrZVNob3J0Y29kZShcIkRpc2NvcmRNZXNzYWdlc1wiKTtcbmNvbnN0IERpc2NvcmRNZXNzYWdlID0gbWFrZVNob3J0Y29kZShcIkRpc2NvcmRNZXNzYWdlXCIpO1xuY29uc3QgTWVudGlvbiA9IG1ha2VTaG9ydGNvZGUoXCJNZW50aW9uXCIpO1xuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIGluZm9cbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8UGFnZVRvb2xCYXIgdGl0bGU9XCJUYWcgVmFyaWFibGVzXCIgbWR4VHlwZT1cIlBhZ2VUb29sQmFyXCIgLz5cbiAgICA8aDEgey4uLntcbiAgICAgIFwiaWRcIjogXCJ0YWJsZS1vZi1jb250ZW50c1wiXG4gICAgfX0+e2BUYWJsZSBvZiBDb250ZW50c2B9PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgIDxwIHBhcmVudE5hbWU9XCJsaVwiPjxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcIiNzZXJ2ZXItdmFyaWFibGVzXCJcbiAgICAgICAgICB9fT57YFNlcnZlciBWYXJpYWJsZXNgfTwvYT48L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPlxuICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj48YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgICBcImhyZWZcIjogXCIjdXNlci12YXJpYWJsZXNcIlxuICAgICAgICAgIH19PntgVXNlciBWYXJpYWJsZXNgfTwvYT48L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPlxuICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj48YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgICBcImhyZWZcIjogXCIjZXhhbXBsZXNcIlxuICAgICAgICAgIH19PntgRXhhbXBsZXNgfTwvYT48L3A+XG4gICAgICAgIDx1bCBwYXJlbnROYW1lPVwibGlcIj5cbiAgICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICAgICAgXCJocmVmXCI6IFwiI3NlcnZlci12YXJpYWJsZXMtMVwiXG4gICAgICAgICAgICB9fT57YFNlcnZlciBWYXJpYWJsZXNgfTwvYT48L2xpPlxuICAgICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgICAgICBcImhyZWZcIjogXCIjdXNlci12YXJpYWJsZXMtMVwiXG4gICAgICAgICAgICB9fT57YFVzZXIgVmFyaWFibGVzYH08L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8aDEgey4uLntcbiAgICAgIFwiaWRcIjogXCJzZXJ2ZXItdmFyaWFibGVzXCJcbiAgICB9fT57YFNlcnZlciBWYXJpYWJsZXNgfTwvaDE+XG4gICAgPHA+e2BTZXJ2ZXIgVmFyaWFibGVzIGRlc2NyaWJlIHNlcnZlciBpbmZvcm1hdGlvbi5gfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BTZXJ2ZXIgTmFtZTogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHtzZXJ2ZXJ9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBJRDogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHtzZXJ2ZXIuaWR9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlcnZlciBJY29uOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3NlcnZlci5pY29ufWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BTZXJ2ZXIgT3duZXI6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7c2VydmVyLm93bmVyfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BTZXJ2ZXIgUmVnaW9uOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3NlcnZlci5yZWdpb259YH08L2lubGluZUNvZGU+PC9saT5cbiAgICA8L3VsPlxuICAgIDxoMSB7Li4ue1xuICAgICAgXCJpZFwiOiBcInVzZXItdmFyaWFibGVzXCJcbiAgICB9fT57YFVzZXIgVmFyaWFibGVzYH08L2gxPlxuICAgIDxwPntgVXNlciBWYXJpYWJsZXMgZGVzY3JpYmUgaW5mb3JtYXRpb24gb2YgdGhlIHVzZXIgd2hvIHJhbiB0aGUgdGFnIGNvbW1hbmQuYH08L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXNlciBNZW50aW9uOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3VzZXJ9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFVzZXIgRGlzY3JpbWluYXRvcjogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHt1c2VyLnRhZ31gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXNlciBBdmF0YXI6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2B7dXNlci5hdmF0YXJ9YH08L2lubGluZUNvZGU+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFVzZXJuYW1lOiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntge3VzZXIubmFtZX1gfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXNlciBJRDogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHt1c2VyLmlkfWB9PC9pbmxpbmVDb2RlPjwvbGk+XG4gICAgPC91bD5cbiAgICA8QWxlcnQgc3R5bGU9XCJpbmZvXCIgbWR4VHlwZT1cIkFsZXJ0XCI+Tm90ZTogWW91IGNhbiBjb25maWd1cmUgeW91ciB0YWdzIGJ5IGdvaW5nIHRvIHlvdXIgZGFzaGJvYXJkIGFuZCBjaG9vc2luZyB0aGUgdGFncyBtb2R1bGUuPC9BbGVydD5cbiAgICA8aDEgey4uLntcbiAgICAgIFwiaWRcIjogXCJleGFtcGxlc1wiXG4gICAgfX0+e2BFeGFtcGxlc2B9PC9oMT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzZXJ2ZXItdmFyaWFibGVzLTFcIlxuICAgIH19PntgU2VydmVyIFZhcmlhYmxlc2B9PC9oMj5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgKipTb21lIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgc2VydmVyOioqXG4qKlNlcnZlciBOYW1lOioqIHtzZXJ2ZXJ9XG4qKlNlcnZlciBJRCoqOiB7c2VydmVyLmlkfVxuKipTZXJ2ZXIgSWNvbjoqKiB7c2VydmVyLmljb259XG4qKlNlcnZlciBPd25lcjoqKiB7c2VydmVyLm93bmVyfVxuKipTZXJ2ZXIgUmVnaW9uOioqIHtzZXJ2ZXIucmVnaW9ufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPERpc2NvcmRNZXNzYWdlcyBtZHhUeXBlPVwiRGlzY29yZE1lc3NhZ2VzXCI+XG4gICAgICA8RGlzY29yZE1lc3NhZ2UgYXV0aG9yPVwiQmVubnlcIiBib3Q9e3RydWV9IGF2YXRhcj1cImh0dHBzOi8vYmVubnlib3QuZGV2L2ljb24ucG5nXCIga2V5PXsyfSBtZHhUeXBlPVwiRGlzY29yZE1lc3NhZ2VcIj5cbiAgICAgICAgPHA+PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgU29tZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHNlcnZlcjpgfTwvc3Ryb25nPjxiciAvPntgXG5gfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFNlcnZlciBOYW1lOmB9PC9zdHJvbmc+e2AgQmVubnkgU3VwcG9ydGB9PGJyIC8+e2BcbmB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgU2VydmVyIElEYH08L3N0cm9uZz57YDogNTIzNTI1MjY0NTE3NDk2ODM0YH08YnIgLz57YFxuYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BTZXJ2ZXIgSWNvbjpgfTwvc3Ryb25nPntgIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vaWNvbnMvNTIzNTI1MjY0NTE3NDk2ODM0LzExOTBlMTUyM2Y1Y2IwM2M4YmZhMzA5YzIzNzUzMTg5LnBuZz9zaXplPTIwNDhcIlxuICAgICAgICAgIH19PntgaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vaWNvbnMvNTIzNTI1MjY0NTE3NDk2ODM0LzExOTBlMTUyM2Y1Y2IwM2M4YmZhMzA5YzIzNzUzMTg5LnBuZz9zaXplPTIwNDhgfTwvYT48YnIgLz57YFxuYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BTZXJ2ZXIgT3duZXI6YH08L3N0cm9uZz57YCBBUiMzNjE2YH08YnIgLz57YFxuYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BTZXJ2ZXIgUmVnaW9uOmB9PC9zdHJvbmc+e2AgZXVyb3BlYH08L3A+XG4gICAgICA8L0Rpc2NvcmRNZXNzYWdlPlxuICAgIDwvRGlzY29yZE1lc3NhZ2VzPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInVzZXItdmFyaWFibGVzLTFcIlxuICAgIH19PntgVXNlciBWYXJpYWJsZXNgfTwvaDI+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEhleSwge3VzZXJ9ISBEaWQgeW91IGtub3csIHRoYXQgeW91ciAqKlVzZXIgSUQqKiBpcyB7dXNlci5pZH0/XG5Jc27igJl0IHRoYXQgY29vbD8gSSBhbHNvIGtub3cgdGhpcyBpbmZvcm1hdGlvbiBhYm91dCB5b3U6XG5Zb3VyICoqZGlzY3JpbWluYXRvcioqIGlzIHt1c2VyLnRhZ30gYW5kIHlvdXIgKipVc2VybmFtZSoqIGlzIHt1c2VyLm5hbWV9LlxuWW91IGFsc28gaGF2ZSBhIGNvb2wgYXZhdGFyOiB7dXNlci5hdmF0YXJ9XG5IYXZlIGEgbmljZSBkYXkhXG5gfTwvY29kZT48L3ByZT5cbiAgICA8RGlzY29yZE1lc3NhZ2VzIG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZXNcIj5cbiAgICAgIDxEaXNjb3JkTWVzc2FnZSBhdXRob3I9XCJCZW5ueVwiIGJvdD17dHJ1ZX0gYXZhdGFyPVwiaHR0cHM6Ly9iZW5ueWJvdC5kZXYvaWNvbi5wbmdcIiBrZXk9ezJ9IG1keFR5cGU9XCJEaXNjb3JkTWVzc2FnZVwiPlxuICAgICAgICA8cD57YEhleSwgYH08TWVudGlvbiBoaWdobGlnaHQ9e3RydWV9IHR5cGU9XCJ1c2VyXCIgbWR4VHlwZT1cIk1lbnRpb25cIj57YERpc2NvcmQgVXNlcmB9PC9NZW50aW9uPntgISBEaWQgeW91IGtub3csIHRoYXQgeW91ciBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YFVzZXIgSURgfTwvc3Ryb25nPntgIGlzIDEyMzQ1Njc4OTAxMjM0NTY3OD9gfTxiciAvPntgXG5Jc27igJl0IHRoYXQgY29vbD8gSSBhbHNvIGtub3cgdGhpcyBpbmZvcm1hdGlvbiBhYm91dCB5b3U6YH08YnIgLz57YFxuWW91ciBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YGRpc2NyaW1pbmF0b3JgfTwvc3Ryb25nPntgIGlzIERpc2NvcmQgVXNlciMwMDAwIGFuZCB5b3VyIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgVXNlcm5hbWVgfTwvc3Ryb25nPntgIGlzIERpc2NvcmQgVXNlci5gfTxiciAvPntgXG5Zb3UgYWxzbyBoYXZlIGEgY29vbCBhdmF0YXI6IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZ1wiXG4gICAgICAgICAgfX0+e2BodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nYH08L2E+e2BcbkhhdmUgYSBuaWNlIGRheSFgfTwvcD5cbiAgICAgIDwvRGlzY29yZE1lc3NhZ2U+XG4gICAgPC9EaXNjb3JkTWVzc2FnZXM+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9