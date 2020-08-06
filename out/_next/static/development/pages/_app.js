(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./components/Alert/index.js":
/*!***********************************!*\
  !*** ./components/Alert/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ "./components/Alert/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\components\\Alert\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Alert = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Alert, _Component);

  var _super = _createSuper(Alert);

  function Alert() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Alert);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Alert, [{
    key: "render",
    value: function render() {
      var _classNames;

      var AlertClasses = classnames__WEBPACK_IMPORTED_MODULE_7___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a["alert"], true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a[this.props.style], true), _classNames));
      return __jsx("div", {
        className: AlertClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      }, this.props.title != undefined && __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }
      }, this.props.title), this.props.children);
    }
  }]);

  return Alert;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Alert.defaultProps = {
  style: "info"
};
Alert.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['info', 'warn', 'destructive', 'success'])
};
/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./components/Alert/index.module.scss":
/*!********************************************!*\
  !*** ./components/Alert/index.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Alert/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Alert/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Alert/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.module.scss */ "./components/Button/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\components\\Button\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Button = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Button);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Button, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          disabled = _this$props.disabled,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["children", "color", "disabled"]);

      var ButtonClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button"], true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a[color], true), _classNames));
      return __jsx("button", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: ButtonClasses,
        disabled: disabled
      }, other, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }), children);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Button.defaultProps = {
  color: "brand",
  disabled: false,
  onClick: function onClick() {}
};
Button.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOf(['brand', 'secondary', 'destructive', 'light']),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/index.module.scss":
/*!*********************************************!*\
  !*** ./components/Button/index.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Button/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Button/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Button/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/NButton/index.js":
/*!*************************************!*\
  !*** ./components/NButton/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ "./components/NButton/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\components\\NButton\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Button = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Button);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Button, [{
    key: "render",
    value: function render() {
      var _classNames;

      var ButtonClasses = classnames__WEBPACK_IMPORTED_MODULE_7___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a["button"], true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a[this.props.color], true), _classNames));
      return __jsx("button", {
        className: ButtonClasses,
        disabled: this.props.disabled,
        onClick: this.props.onClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      }, this.props.children);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Button.defaultProps = {
  color: "brand",
  disabled: false,
  onClick: function onClick() {}
};
Button.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['brand', 'secondary', 'destructive', 'light']),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/NButton/index.module.scss":
/*!**********************************************!*\
  !*** ./components/NButton/index.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/NButton/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/NButton/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/NButton/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/PageToolBar/index.js":
/*!*****************************************!*\
  !*** ./components/PageToolBar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./components/PageToolBar/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_BackButton */ "./components/_BackButton/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\components\\PageToolBar\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var PageToolBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PageToolBar, _Component);

  var _super = _createSuper(PageToolBar);

  function PageToolBar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageToolBar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PageToolBar, [{
    key: "back",
    value: function back() {
      this.router.back();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["appbar"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      }, __jsx(_BackButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }
      }), __jsx("span", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["title"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }
      }, this.props.title));
    }
  }]);

  return PageToolBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

PageToolBar.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(PageToolBar));

/***/ }),

/***/ "./components/PageToolBar/index.module.scss":
/*!**************************************************!*\
  !*** ./components/PageToolBar/index.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/PageToolBar/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/PageToolBar/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/PageToolBar/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/_AppBar/index.js":
/*!*************************************!*\
  !*** ./components/_AppBar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./components/_AppBar/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _NButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NButton */ "./components/NButton/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\components\\_AppBar\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var AppBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AppBar, _Component);

  var _super = _createSuper(AppBar);

  function AppBar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppBar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppBar, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a["appbar"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a["title"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }
      }, "Benny", __jsx("span", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a["title-alt"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }
      }, "Help"))), __jsx("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a["spacer"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }), __jsx(_NButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        color: "light",
        onClick: function onClick() {
          return window.location.href = 'https://bennybot.dev/dashboard';
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }, "Dashboard"));
    }
  }]);

  return AppBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ }),

/***/ "./components/_AppBar/index.module.scss":
/*!**********************************************!*\
  !*** ./components/_AppBar/index.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_AppBar/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_AppBar/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_AppBar/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/_BackButton/index.js":
/*!*****************************************!*\
  !*** ./components/_BackButton/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./components/_BackButton/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\components\\_BackButton\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function BackButton(props) {
  var _classNames;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function back() {
    router.back();
  }

  var ButtonClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["back-link"], true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["text"], props.text == true), _classNames));
  return __jsx("a", {
    className: ButtonClasses,
    onClick: back,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, "\u2190 Back");
}

/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./components/_BackButton/index.module.scss":
/*!**************************************************!*\
  !*** ./components/_BackButton/index.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_BackButton/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_BackButton/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_BackButton/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/esm.js ***!
  \************************************************/
/*! exports provided: MDXContext, MDXProvider, mdx, useMDXComponents, withMDXComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXContext", function() { return MDXContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdx", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXComponents", function() { return useMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDXComponents", function() { return withMDXComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".flexboxgrid2__container___3skQK {\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.flexboxgrid2__container-fluid___XKLhm {\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\n@media only screen and (min-width: 576px) {\n  .flexboxgrid2__container___3skQK {\n    width: 560px;\n    max-width: 100%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .flexboxgrid2__container___3skQK {\n    width: 752px;\n    max-width: 100%;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .flexboxgrid2__container___3skQK {\n    width: 976px;\n    max-width: 100%;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .flexboxgrid2__container___3skQK {\n    width: 1184px;\n    max-width: 100%;\n  }\n}\n\n.flexboxgrid2__row___ZtOZv {\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: -8px;\n  margin-left: -8px;\n}\n\n.flexboxgrid2__row___ZtOZv.flexboxgrid2__reverse___3oCGT {\n  flex-direction: row-reverse;\n}\n\n.flexboxgrid2__col___2Z6TW.flexboxgrid2__reverse___3oCGT {\n  flex-direction: column-reverse;\n}\n\n.flexboxgrid2__col-xs___2PLFU,\n.flexboxgrid2__col-xs-1___1ys2K,\n.flexboxgrid2__col-xs-2___1oFs0,\n.flexboxgrid2__col-xs-3___1Q5cW,\n.flexboxgrid2__col-xs-4___3pHqi,\n.flexboxgrid2__col-xs-5___3JeAf,\n.flexboxgrid2__col-xs-6___1Zplx,\n.flexboxgrid2__col-xs-7___2rjoo,\n.flexboxgrid2__col-xs-8___3Pbgu,\n.flexboxgrid2__col-xs-9___zDP7a,\n.flexboxgrid2__col-xs-10___Zo7_E,\n.flexboxgrid2__col-xs-11___mXqV2,\n.flexboxgrid2__col-xs-12___AdoKE,\n.flexboxgrid2__col-xs-offset-0___3NAsN,\n.flexboxgrid2__col-xs-offset-1___3K_gC,\n.flexboxgrid2__col-xs-offset-2___2Ga73,\n.flexboxgrid2__col-xs-offset-3___3c_Ft,\n.flexboxgrid2__col-xs-offset-4___3TWUy,\n.flexboxgrid2__col-xs-offset-5___1yWoT,\n.flexboxgrid2__col-xs-offset-6___al_7H,\n.flexboxgrid2__col-xs-offset-7___2J_G7,\n.flexboxgrid2__col-xs-offset-8___1RGyW,\n.flexboxgrid2__col-xs-offset-9___3OtIT,\n.flexboxgrid2__col-xs-offset-10___109SK,\n.flexboxgrid2__col-xs-offset-11___1fcLq,\n.flexboxgrid2__col-xs-offset-12___3UGEQ,\n.flexboxgrid2__col-sm___3UNLq,\n.flexboxgrid2__col-sm-1___2u7Tq,\n.flexboxgrid2__col-sm-2___39LGZ,\n.flexboxgrid2__col-sm-3___1HPMt,\n.flexboxgrid2__col-sm-4___3SO93,\n.flexboxgrid2__col-sm-5___2Buhm,\n.flexboxgrid2__col-sm-6___1l2Kt,\n.flexboxgrid2__col-sm-7___d6sUa,\n.flexboxgrid2__col-sm-8___g6l7V,\n.flexboxgrid2__col-sm-9___etIBb,\n.flexboxgrid2__col-sm-10___Bxvht,\n.flexboxgrid2__col-sm-11___PiXUP,\n.flexboxgrid2__col-sm-12___2sYMg,\n.flexboxgrid2__col-sm-offset-0___oljZ3,\n.flexboxgrid2__col-sm-offset-1___1ywTD,\n.flexboxgrid2__col-sm-offset-2___1X0hd,\n.flexboxgrid2__col-sm-offset-3___2QOr2,\n.flexboxgrid2__col-sm-offset-4___3inAM,\n.flexboxgrid2__col-sm-offset-5___2Ihhn,\n.flexboxgrid2__col-sm-offset-6___21xzL,\n.flexboxgrid2__col-sm-offset-7___1ypYV,\n.flexboxgrid2__col-sm-offset-8___ymjV3,\n.flexboxgrid2__col-sm-offset-9___1SxN0,\n.flexboxgrid2__col-sm-offset-10___2qwiO,\n.flexboxgrid2__col-sm-offset-11___3zRYq,\n.flexboxgrid2__col-sm-offset-12___2fnwd,\n.flexboxgrid2__col-md___srMeB,\n.flexboxgrid2__col-md-1___3RdWY,\n.flexboxgrid2__col-md-2___3j8qs,\n.flexboxgrid2__col-md-3___2Th4S,\n.flexboxgrid2__col-md-4___3pbbS,\n.flexboxgrid2__col-md-5___1Svz9,\n.flexboxgrid2__col-md-6___1wIAi,\n.flexboxgrid2__col-md-7___3z1EO,\n.flexboxgrid2__col-md-8___2Dm-W,\n.flexboxgrid2__col-md-9___1nXvw,\n.flexboxgrid2__col-md-10___3Br2r,\n.flexboxgrid2__col-md-11___3gKDL,\n.flexboxgrid2__col-md-12___2t4Kh,\n.flexboxgrid2__col-md-offset-0___1twEm,\n.flexboxgrid2__col-md-offset-1___12ZU0,\n.flexboxgrid2__col-md-offset-2___1dGCS,\n.flexboxgrid2__col-md-offset-3___XMXnG,\n.flexboxgrid2__col-md-offset-4___3TnIN,\n.flexboxgrid2__col-md-offset-5___EGfBj,\n.flexboxgrid2__col-md-offset-6___3Kb3E,\n.flexboxgrid2__col-md-offset-7___21XFw,\n.flexboxgrid2__col-md-offset-8___qnljU,\n.flexboxgrid2__col-md-offset-9___kdDX2,\n.flexboxgrid2__col-md-offset-10___284iF,\n.flexboxgrid2__col-md-offset-11___WXAgk,\n.flexboxgrid2__col-md-offset-12___2XYlU,\n.flexboxgrid2__col-lg___3u7lk,\n.flexboxgrid2__col-lg-1___2y0lP,\n.flexboxgrid2__col-lg-2___1x6vt,\n.flexboxgrid2__col-lg-3___37wpY,\n.flexboxgrid2__col-lg-4___RwCNM,\n.flexboxgrid2__col-lg-5___37365,\n.flexboxgrid2__col-lg-6___NeTjn,\n.flexboxgrid2__col-lg-7___3bixv,\n.flexboxgrid2__col-lg-8___2YhQ1,\n.flexboxgrid2__col-lg-9___2e0uZ,\n.flexboxgrid2__col-lg-10___3X-8g,\n.flexboxgrid2__col-lg-11___1Ymgu,\n.flexboxgrid2__col-lg-12___p4dm-,\n.flexboxgrid2__col-lg-offset-0___YMDi3,\n.flexboxgrid2__col-lg-offset-1___2mUfM,\n.flexboxgrid2__col-lg-offset-2___2PSlK,\n.flexboxgrid2__col-lg-offset-3___2ZEsJ,\n.flexboxgrid2__col-lg-offset-4___oUBjv,\n.flexboxgrid2__col-lg-offset-5___2_pNE,\n.flexboxgrid2__col-lg-offset-6___1bZES,\n.flexboxgrid2__col-lg-offset-7___26quH,\n.flexboxgrid2__col-lg-offset-8___3kkd3,\n.flexboxgrid2__col-lg-offset-9___22Nlu,\n.flexboxgrid2__col-lg-offset-10___32R4D,\n.flexboxgrid2__col-lg-offset-11___3mcm9,\n.flexboxgrid2__col-lg-offset-12___1CzWw,\n.flexboxgrid2__col-xl___3OIWS,\n.flexboxgrid2__col-xl-1___1x-yZ,\n.flexboxgrid2__col-xl-2___oe1yn,\n.flexboxgrid2__col-xl-3___1DZkD,\n.flexboxgrid2__col-xl-4___e7X-g,\n.flexboxgrid2__col-xl-5___1K3om,\n.flexboxgrid2__col-xl-6___pj3oz,\n.flexboxgrid2__col-xl-7___2lbXv,\n.flexboxgrid2__col-xl-8___2T9rc,\n.flexboxgrid2__col-xl-9___4Cdy9,\n.flexboxgrid2__col-xl-10___pgLUE,\n.flexboxgrid2__col-xl-11___fOAzP,\n.flexboxgrid2__col-xl-12___1lxVN,\n.flexboxgrid2__col-xl-offset-0___rTVg4,\n.flexboxgrid2__col-xl-offset-1___1KRTF,\n.flexboxgrid2__col-xl-offset-2___3XTdA,\n.flexboxgrid2__col-xl-offset-3___1u7VM,\n.flexboxgrid2__col-xl-offset-4___1U3cj,\n.flexboxgrid2__col-xl-offset-5___1m-Bk,\n.flexboxgrid2__col-xl-offset-6___zqsMR,\n.flexboxgrid2__col-xl-offset-7___8fHBq,\n.flexboxgrid2__col-xl-offset-8___1LruZ,\n.flexboxgrid2__col-xl-offset-9___3oTGD,\n.flexboxgrid2__col-xl-offset-10___2eReq,\n.flexboxgrid2__col-xl-offset-11___kuo4A,\n.flexboxgrid2__col-xl-offset-12___1WvjR {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  flex-basis: 100%;\n  padding-right: 8px;\n  padding-left: 8px;\n  max-width: 100%;\n}\n\n.flexboxgrid2__col-xs___2PLFU {\n  flex-grow: 1;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.flexboxgrid2__col-xs-1___1ys2K {\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.flexboxgrid2__col-xs-2___1oFs0 {\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.flexboxgrid2__col-xs-3___1Q5cW {\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.flexboxgrid2__col-xs-4___3pHqi {\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.flexboxgrid2__col-xs-5___3JeAf {\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.flexboxgrid2__col-xs-6___1Zplx {\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.flexboxgrid2__col-xs-7___2rjoo {\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.flexboxgrid2__col-xs-8___3Pbgu {\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.flexboxgrid2__col-xs-9___zDP7a {\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.flexboxgrid2__col-xs-10___Zo7_E {\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.flexboxgrid2__col-xs-11___mXqV2 {\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.flexboxgrid2__col-xs-12___AdoKE {\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.flexboxgrid2__col-xs-offset-0___3NAsN {\n  margin-left: 0;\n}\n\n.flexboxgrid2__col-xs-offset-1___3K_gC {\n  margin-left: 8.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-2___2Ga73 {\n  margin-left: 16.66666667%;\n}\n\n.flexboxgrid2__col-xs-offset-3___3c_Ft {\n  margin-left: 25%;\n}\n\n.flexboxgrid2__col-xs-offset-4___3TWUy {\n  margin-left: 33.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-5___1yWoT {\n  margin-left: 41.66666667%;\n}\n\n.flexboxgrid2__col-xs-offset-6___al_7H {\n  margin-left: 50%;\n}\n\n.flexboxgrid2__col-xs-offset-7___2J_G7 {\n  margin-left: 58.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-8___1RGyW {\n  margin-left: 66.66666667%;\n}\n\n.flexboxgrid2__col-xs-offset-9___3OtIT {\n  margin-left: 75%;\n}\n\n.flexboxgrid2__col-xs-offset-10___109SK {\n  margin-left: 83.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-11___1fcLq {\n  margin-left: 91.66666667%;\n}\n\n.flexboxgrid2__start-xs___2gtAf {\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.flexboxgrid2__center-xs___2GJwn {\n  justify-content: center;\n  text-align: center;\n}\n\n.flexboxgrid2__end-xs___1Jy9a {\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.flexboxgrid2__top-xs___3ApF9 {\n  align-items: flex-start;\n}\n\n.flexboxgrid2__middle-xs___2qJAd {\n  align-items: center;\n}\n\n.flexboxgrid2__bottom-xs___2sMuK {\n  align-items: flex-end;\n}\n\n.flexboxgrid2__around-xs___1h6nu {\n  justify-content: space-around;\n}\n\n.flexboxgrid2__between-xs___1Bml9 {\n  justify-content: space-between;\n}\n\n.flexboxgrid2__first-xs___2ydrY {\n  order: -1;\n}\n\n.flexboxgrid2__last-xs___1TmDf {\n  order: 1;\n}\n\n.flexboxgrid2__initial-order-xs___1lJw5 {\n  order: initial;\n}\n\n@media only screen and (min-width: 576px) {\n  .flexboxgrid2__col-sm___3UNLq {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-sm-1___2u7Tq {\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-2___39LGZ {\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-3___1HPMt {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-sm-4___3SO93 {\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-5___2Buhm {\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-6___1l2Kt {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-sm-7___d6sUa {\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-8___g6l7V {\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-9___etIBb {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-sm-10___Bxvht {\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-11___PiXUP {\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-12___2sYMg {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-sm-offset-0___oljZ3 {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-sm-offset-1___1ywTD {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-2___1X0hd {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-offset-3___2QOr2 {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-sm-offset-4___3inAM {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-5___2Ihhn {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-offset-6___21xzL {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-sm-offset-7___1ypYV {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-8___ymjV3 {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-offset-9___1SxN0 {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-sm-offset-10___2qwiO {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-11___3zRYq {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-sm___3I0F0 {\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-sm___2tfwT {\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-sm___1Dqio {\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-sm___NTmPJ {\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-sm___QLrL0 {\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-sm___3iRAD {\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-sm___2DXbH {\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-sm___1GD_q {\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-sm___AlKeI {\n    order: -1;\n  }\n\n  .flexboxgrid2__last-sm___1GaXQ {\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-sm___3Ar7f {\n    order: initial;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .flexboxgrid2__col-md___srMeB,\n  .flexboxgrid2__col-md-1___3RdWY,\n  .flexboxgrid2__col-md-2___3j8qs,\n  .flexboxgrid2__col-md-3___2Th4S,\n  .flexboxgrid2__col-md-4___3pbbS,\n  .flexboxgrid2__col-md-5___1Svz9,\n  .flexboxgrid2__col-md-6___1wIAi,\n  .flexboxgrid2__col-md-7___3z1EO,\n  .flexboxgrid2__col-md-8___2Dm-W,\n  .flexboxgrid2__col-md-9___1nXvw,\n  .flexboxgrid2__col-md-10___3Br2r,\n  .flexboxgrid2__col-md-11___3gKDL,\n  .flexboxgrid2__col-md-12___2t4Kh,\n  .flexboxgrid2__col-md-offset-0___1twEm,\n  .flexboxgrid2__col-md-offset-1___12ZU0,\n  .flexboxgrid2__col-md-offset-2___1dGCS,\n  .flexboxgrid2__col-md-offset-3___XMXnG,\n  .flexboxgrid2__col-md-offset-4___3TnIN,\n  .flexboxgrid2__col-md-offset-5___EGfBj,\n  .flexboxgrid2__col-md-offset-6___3Kb3E,\n  .flexboxgrid2__col-md-offset-7___21XFw,\n  .flexboxgrid2__col-md-offset-8___qnljU,\n  .flexboxgrid2__col-md-offset-9___kdDX2,\n  .flexboxgrid2__col-md-offset-10___284iF,\n  .flexboxgrid2__col-md-offset-11___WXAgk,\n  .flexboxgrid2__col-md-offset-12___2XYlU {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n\n  .flexboxgrid2__col-md___srMeB {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-md-1___3RdWY {\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-md-2___3j8qs {\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-md-3___2Th4S {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-md-4___3pbbS {\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-md-5___1Svz9 {\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-md-6___1wIAi {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-md-7___3z1EO {\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-md-8___2Dm-W {\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-md-9___1nXvw {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-md-10___3Br2r {\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-md-11___3gKDL {\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-md-12___2t4Kh {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-md-offset-0___1twEm {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-md-offset-1___12ZU0 {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-2___1dGCS {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-md-offset-3___XMXnG {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-md-offset-4___3TnIN {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-5___EGfBj {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-md-offset-6___3Kb3E {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-md-offset-7___21XFw {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-8___qnljU {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-md-offset-9___kdDX2 {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-md-offset-10___284iF {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-11___WXAgk {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-md___3M-iK {\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-md___3Ql1d {\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-md___STrsQ {\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-md___2FX25 {\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-md___YZ6CJ {\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-md___2Ruw8 {\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-md___1G_h0 {\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-md___1ik_I {\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-md___yFUKj {\n    order: -1;\n  }\n\n  .flexboxgrid2__last-md___1PHhp {\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-md___3UvRN {\n    order: initial;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .flexboxgrid2__col-lg___3u7lk,\n  .flexboxgrid2__col-lg-1___2y0lP,\n  .flexboxgrid2__col-lg-2___1x6vt,\n  .flexboxgrid2__col-lg-3___37wpY,\n  .flexboxgrid2__col-lg-4___RwCNM,\n  .flexboxgrid2__col-lg-5___37365,\n  .flexboxgrid2__col-lg-6___NeTjn,\n  .flexboxgrid2__col-lg-7___3bixv,\n  .flexboxgrid2__col-lg-8___2YhQ1,\n  .flexboxgrid2__col-lg-9___2e0uZ,\n  .flexboxgrid2__col-lg-10___3X-8g,\n  .flexboxgrid2__col-lg-11___1Ymgu,\n  .flexboxgrid2__col-lg-12___p4dm-,\n  .flexboxgrid2__col-lg-offset-0___YMDi3,\n  .flexboxgrid2__col-lg-offset-1___2mUfM,\n  .flexboxgrid2__col-lg-offset-2___2PSlK,\n  .flexboxgrid2__col-lg-offset-3___2ZEsJ,\n  .flexboxgrid2__col-lg-offset-4___oUBjv,\n  .flexboxgrid2__col-lg-offset-5___2_pNE,\n  .flexboxgrid2__col-lg-offset-6___1bZES,\n  .flexboxgrid2__col-lg-offset-7___26quH,\n  .flexboxgrid2__col-lg-offset-8___3kkd3,\n  .flexboxgrid2__col-lg-offset-9___22Nlu,\n  .flexboxgrid2__col-lg-offset-10___32R4D,\n  .flexboxgrid2__col-lg-offset-11___3mcm9,\n  .flexboxgrid2__col-lg-offset-12___1CzWw {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n\n  .flexboxgrid2__col-lg___3u7lk {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-lg-1___2y0lP {\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-2___1x6vt {\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-3___37wpY {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-lg-4___RwCNM {\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-5___37365 {\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-6___NeTjn {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-lg-7___3bixv {\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-8___2YhQ1 {\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-9___2e0uZ {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-lg-10___3X-8g {\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-11___1Ymgu {\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-12___p4dm- {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-lg-offset-0___YMDi3 {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-lg-offset-1___2mUfM {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-2___2PSlK {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-offset-3___2ZEsJ {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-lg-offset-4___oUBjv {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-5___2_pNE {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-offset-6___1bZES {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-lg-offset-7___26quH {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-8___3kkd3 {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-offset-9___22Nlu {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-lg-offset-10___32R4D {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-11___3mcm9 {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-lg___m0vFF {\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-lg___1ppmu {\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-lg___1Cene {\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-lg___3R_GA {\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-lg___2vRr_ {\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-lg___1FxHX {\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-lg___24PfH {\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-lg___2a-N0 {\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-lg___351pp {\n    order: -1;\n  }\n\n  .flexboxgrid2__last-lg___2GWNG {\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-lg___3ajeo {\n    order: initial;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .flexboxgrid2__col-xl___3OIWS,\n  .flexboxgrid2__col-xl-1___1x-yZ,\n  .flexboxgrid2__col-xl-2___oe1yn,\n  .flexboxgrid2__col-xl-3___1DZkD,\n  .flexboxgrid2__col-xl-4___e7X-g,\n  .flexboxgrid2__col-xl-5___1K3om,\n  .flexboxgrid2__col-xl-6___pj3oz,\n  .flexboxgrid2__col-xl-7___2lbXv,\n  .flexboxgrid2__col-xl-8___2T9rc,\n  .flexboxgrid2__col-xl-9___4Cdy9,\n  .flexboxgrid2__col-xl-10___pgLUE,\n  .flexboxgrid2__col-xl-11___fOAzP,\n  .flexboxgrid2__col-xl-12___1lxVN,\n  .flexboxgrid2__col-xl-offset-0___rTVg4,\n  .flexboxgrid2__col-xl-offset-1___1KRTF,\n  .flexboxgrid2__col-xl-offset-2___3XTdA,\n  .flexboxgrid2__col-xl-offset-3___1u7VM,\n  .flexboxgrid2__col-xl-offset-4___1U3cj,\n  .flexboxgrid2__col-xl-offset-5___1m-Bk,\n  .flexboxgrid2__col-xl-offset-6___zqsMR,\n  .flexboxgrid2__col-xl-offset-7___8fHBq,\n  .flexboxgrid2__col-xl-offset-8___1LruZ,\n  .flexboxgrid2__col-xl-offset-9___3oTGD,\n  .flexboxgrid2__col-xl-offset-10___2eReq,\n  .flexboxgrid2__col-xl-offset-11___kuo4A,\n  .flexboxgrid2__col-xl-offset-12___1WvjR {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n\n  .flexboxgrid2__col-xl___3OIWS {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-xl-1___1x-yZ {\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-2___oe1yn {\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-3___1DZkD {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-xl-4___e7X-g {\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-5___1K3om {\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-6___pj3oz {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-xl-7___2lbXv {\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-8___2T9rc {\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-9___4Cdy9 {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-xl-10___pgLUE {\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-11___fOAzP {\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-12___1lxVN {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-xl-offset-0___rTVg4 {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-xl-offset-1___1KRTF {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-2___3XTdA {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-offset-3___1u7VM {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-xl-offset-4___1U3cj {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-5___1m-Bk {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-offset-6___zqsMR {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-xl-offset-7___8fHBq {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-8___1LruZ {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-offset-9___3oTGD {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-xl-offset-10___2eReq {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-11___kuo4A {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-xl___2Ur_r {\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-xl___3C4Vx {\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-xl___2UqlC {\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-xl___1tLbF {\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-xl___31-ID {\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-xl___p1SvR {\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-xl___2j28w {\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-xl___xff2E {\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-xl___2QxqG {\n    order: -1;\n  }\n\n  .flexboxgrid2__last-xl___1v5wI {\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-xl___IYbgP {\n    order: initial;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .flexboxgrid2__hidden-xs___3MgtY {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .flexboxgrid2__hidden-sm___2YMAO {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .flexboxgrid2__hidden-md___FbTYO {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .flexboxgrid2__hidden-lg___2fkvW {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .flexboxgrid2__hidden-xl___3hzYJ {\n    display: none;\n  }\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/node_modules/react-flexbox-grid/dist/react-flexbox-grid.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE;IACE,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA;EACE;IACE,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,eAAe;EACjB;AACF;;AAEA;EACE,sBAAsB;EAGtB,aAAa;EAGb,cAAc;EAId,mBAAmB;EAEnB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EAIE,2BAA2B;AAC7B;;AAEA;EAIE,8BAA8B;AAChC;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkIE,sBAAsB;EAGtB,cAAc;EAEd,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EAGE,YAAY;EAEZ,aAAa;EACb,eAAe;AACjB;;AAEA;EAEE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EAEE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;EAEE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EAEE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;EAEE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EAEE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;EAEE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EAEE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EAEE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EAGE,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA;EAGE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EAGE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EAGE,uBAAuB;AACzB;;AAEA;EAGE,mBAAmB;AACrB;;AAEA;EAGE,qBAAqB;AACvB;;AAEA;EAEE,6BAA6B;AAC/B;;AAEA;EAGE,8BAA8B;AAChC;;AAEA;EAGE,SAAS;AACX;;AAEA;EAGE,QAAQ;AACV;;AAEA;EAGE,cAAc;AAChB;;AAEA;EACE;IAGE,YAAY;IAEZ,aAAa;IACb,eAAe;EACjB;;EAEA;IAEE,uBAAuB;IACvB,sBAAsB;EACxB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IAGE,2BAA2B;IAC3B,iBAAiB;EACnB;;EAEA;IAGE,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IAGE,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IAGE,uBAAuB;EACzB;;EAEA;IAGE,mBAAmB;EACrB;;EAEA;IAGE,qBAAqB;EACvB;;EAEA;IAEE,6BAA6B;EAC/B;;EAEA;IAGE,8BAA8B;EAChC;;EAEA;IAGE,SAAS;EACX;;EAEA;IAGE,QAAQ;EACV;;EAEA;IAGE,cAAc;EAChB;AACF;;AAEA;EACE;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BE,sBAAsB;IAGtB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IAGE,YAAY;IAEZ,aAAa;IACb,eAAe;EACjB;;EAEA;IAEE,uBAAuB;IACvB,sBAAsB;EACxB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IAGE,2BAA2B;IAC3B,iBAAiB;EACnB;;EAEA;IAGE,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IAGE,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IAGE,uBAAuB;EACzB;;EAEA;IAGE,mBAAmB;EACrB;;EAEA;IAGE,qBAAqB;EACvB;;EAEA;IAEE,6BAA6B;EAC/B;;EAEA;IAGE,8BAA8B;EAChC;;EAEA;IAGE,SAAS;EACX;;EAEA;IAGE,QAAQ;EACV;;EAEA;IAGE,cAAc;EAChB;AACF;;AAEA;EACE;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BE,sBAAsB;IAGtB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IAGE,YAAY;IAEZ,aAAa;IACb,eAAe;EACjB;;EAEA;IAEE,uBAAuB;IACvB,sBAAsB;EACxB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IAGE,2BAA2B;IAC3B,iBAAiB;EACnB;;EAEA;IAGE,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IAGE,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IAGE,uBAAuB;EACzB;;EAEA;IAGE,mBAAmB;EACrB;;EAEA;IAGE,qBAAqB;EACvB;;EAEA;IAEE,6BAA6B;EAC/B;;EAEA;IAGE,8BAA8B;EAChC;;EAEA;IAGE,SAAS;EACX;;EAEA;IAGE,QAAQ;EACV;;EAEA;IAGE,cAAc;EAChB;AACF;;AAEA;EACE;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BE,sBAAsB;IAGtB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IAGE,YAAY;IAEZ,aAAa;IACb,eAAe;EACjB;;EAEA;IAEE,uBAAuB;IACvB,sBAAsB;EACxB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,wBAAwB;IACxB,uBAAuB;EACzB;;EAEA;IAEE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IAGE,2BAA2B;IAC3B,iBAAiB;EACnB;;EAEA;IAGE,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IAGE,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IAGE,uBAAuB;EACzB;;EAEA;IAGE,mBAAmB;EACrB;;EAEA;IAGE,qBAAqB;EACvB;;EAEA;IAEE,6BAA6B;EAC/B;;EAEA;IAGE,8BAA8B;EAChC;;EAEA;IAGE,SAAS;EACX;;EAEA;IAGE,QAAQ;EACV;;EAEA;IAGE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF","file":"react-flexbox-grid.css","sourcesContent":[".flexboxgrid2__container___3skQK {\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.flexboxgrid2__container-fluid___XKLhm {\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\n@media only screen and (min-width: 576px) {\n  .flexboxgrid2__container___3skQK {\n    width: 560px;\n    max-width: 100%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .flexboxgrid2__container___3skQK {\n    width: 752px;\n    max-width: 100%;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .flexboxgrid2__container___3skQK {\n    width: 976px;\n    max-width: 100%;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .flexboxgrid2__container___3skQK {\n    width: 1184px;\n    max-width: 100%;\n  }\n}\n\n.flexboxgrid2__row___ZtOZv {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -8px;\n  margin-left: -8px;\n}\n\n.flexboxgrid2__row___ZtOZv.flexboxgrid2__reverse___3oCGT {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.flexboxgrid2__col___2Z6TW.flexboxgrid2__reverse___3oCGT {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.flexboxgrid2__col-xs___2PLFU,\n.flexboxgrid2__col-xs-1___1ys2K,\n.flexboxgrid2__col-xs-2___1oFs0,\n.flexboxgrid2__col-xs-3___1Q5cW,\n.flexboxgrid2__col-xs-4___3pHqi,\n.flexboxgrid2__col-xs-5___3JeAf,\n.flexboxgrid2__col-xs-6___1Zplx,\n.flexboxgrid2__col-xs-7___2rjoo,\n.flexboxgrid2__col-xs-8___3Pbgu,\n.flexboxgrid2__col-xs-9___zDP7a,\n.flexboxgrid2__col-xs-10___Zo7_E,\n.flexboxgrid2__col-xs-11___mXqV2,\n.flexboxgrid2__col-xs-12___AdoKE,\n.flexboxgrid2__col-xs-offset-0___3NAsN,\n.flexboxgrid2__col-xs-offset-1___3K_gC,\n.flexboxgrid2__col-xs-offset-2___2Ga73,\n.flexboxgrid2__col-xs-offset-3___3c_Ft,\n.flexboxgrid2__col-xs-offset-4___3TWUy,\n.flexboxgrid2__col-xs-offset-5___1yWoT,\n.flexboxgrid2__col-xs-offset-6___al_7H,\n.flexboxgrid2__col-xs-offset-7___2J_G7,\n.flexboxgrid2__col-xs-offset-8___1RGyW,\n.flexboxgrid2__col-xs-offset-9___3OtIT,\n.flexboxgrid2__col-xs-offset-10___109SK,\n.flexboxgrid2__col-xs-offset-11___1fcLq,\n.flexboxgrid2__col-xs-offset-12___3UGEQ,\n.flexboxgrid2__col-sm___3UNLq,\n.flexboxgrid2__col-sm-1___2u7Tq,\n.flexboxgrid2__col-sm-2___39LGZ,\n.flexboxgrid2__col-sm-3___1HPMt,\n.flexboxgrid2__col-sm-4___3SO93,\n.flexboxgrid2__col-sm-5___2Buhm,\n.flexboxgrid2__col-sm-6___1l2Kt,\n.flexboxgrid2__col-sm-7___d6sUa,\n.flexboxgrid2__col-sm-8___g6l7V,\n.flexboxgrid2__col-sm-9___etIBb,\n.flexboxgrid2__col-sm-10___Bxvht,\n.flexboxgrid2__col-sm-11___PiXUP,\n.flexboxgrid2__col-sm-12___2sYMg,\n.flexboxgrid2__col-sm-offset-0___oljZ3,\n.flexboxgrid2__col-sm-offset-1___1ywTD,\n.flexboxgrid2__col-sm-offset-2___1X0hd,\n.flexboxgrid2__col-sm-offset-3___2QOr2,\n.flexboxgrid2__col-sm-offset-4___3inAM,\n.flexboxgrid2__col-sm-offset-5___2Ihhn,\n.flexboxgrid2__col-sm-offset-6___21xzL,\n.flexboxgrid2__col-sm-offset-7___1ypYV,\n.flexboxgrid2__col-sm-offset-8___ymjV3,\n.flexboxgrid2__col-sm-offset-9___1SxN0,\n.flexboxgrid2__col-sm-offset-10___2qwiO,\n.flexboxgrid2__col-sm-offset-11___3zRYq,\n.flexboxgrid2__col-sm-offset-12___2fnwd,\n.flexboxgrid2__col-md___srMeB,\n.flexboxgrid2__col-md-1___3RdWY,\n.flexboxgrid2__col-md-2___3j8qs,\n.flexboxgrid2__col-md-3___2Th4S,\n.flexboxgrid2__col-md-4___3pbbS,\n.flexboxgrid2__col-md-5___1Svz9,\n.flexboxgrid2__col-md-6___1wIAi,\n.flexboxgrid2__col-md-7___3z1EO,\n.flexboxgrid2__col-md-8___2Dm-W,\n.flexboxgrid2__col-md-9___1nXvw,\n.flexboxgrid2__col-md-10___3Br2r,\n.flexboxgrid2__col-md-11___3gKDL,\n.flexboxgrid2__col-md-12___2t4Kh,\n.flexboxgrid2__col-md-offset-0___1twEm,\n.flexboxgrid2__col-md-offset-1___12ZU0,\n.flexboxgrid2__col-md-offset-2___1dGCS,\n.flexboxgrid2__col-md-offset-3___XMXnG,\n.flexboxgrid2__col-md-offset-4___3TnIN,\n.flexboxgrid2__col-md-offset-5___EGfBj,\n.flexboxgrid2__col-md-offset-6___3Kb3E,\n.flexboxgrid2__col-md-offset-7___21XFw,\n.flexboxgrid2__col-md-offset-8___qnljU,\n.flexboxgrid2__col-md-offset-9___kdDX2,\n.flexboxgrid2__col-md-offset-10___284iF,\n.flexboxgrid2__col-md-offset-11___WXAgk,\n.flexboxgrid2__col-md-offset-12___2XYlU,\n.flexboxgrid2__col-lg___3u7lk,\n.flexboxgrid2__col-lg-1___2y0lP,\n.flexboxgrid2__col-lg-2___1x6vt,\n.flexboxgrid2__col-lg-3___37wpY,\n.flexboxgrid2__col-lg-4___RwCNM,\n.flexboxgrid2__col-lg-5___37365,\n.flexboxgrid2__col-lg-6___NeTjn,\n.flexboxgrid2__col-lg-7___3bixv,\n.flexboxgrid2__col-lg-8___2YhQ1,\n.flexboxgrid2__col-lg-9___2e0uZ,\n.flexboxgrid2__col-lg-10___3X-8g,\n.flexboxgrid2__col-lg-11___1Ymgu,\n.flexboxgrid2__col-lg-12___p4dm-,\n.flexboxgrid2__col-lg-offset-0___YMDi3,\n.flexboxgrid2__col-lg-offset-1___2mUfM,\n.flexboxgrid2__col-lg-offset-2___2PSlK,\n.flexboxgrid2__col-lg-offset-3___2ZEsJ,\n.flexboxgrid2__col-lg-offset-4___oUBjv,\n.flexboxgrid2__col-lg-offset-5___2_pNE,\n.flexboxgrid2__col-lg-offset-6___1bZES,\n.flexboxgrid2__col-lg-offset-7___26quH,\n.flexboxgrid2__col-lg-offset-8___3kkd3,\n.flexboxgrid2__col-lg-offset-9___22Nlu,\n.flexboxgrid2__col-lg-offset-10___32R4D,\n.flexboxgrid2__col-lg-offset-11___3mcm9,\n.flexboxgrid2__col-lg-offset-12___1CzWw,\n.flexboxgrid2__col-xl___3OIWS,\n.flexboxgrid2__col-xl-1___1x-yZ,\n.flexboxgrid2__col-xl-2___oe1yn,\n.flexboxgrid2__col-xl-3___1DZkD,\n.flexboxgrid2__col-xl-4___e7X-g,\n.flexboxgrid2__col-xl-5___1K3om,\n.flexboxgrid2__col-xl-6___pj3oz,\n.flexboxgrid2__col-xl-7___2lbXv,\n.flexboxgrid2__col-xl-8___2T9rc,\n.flexboxgrid2__col-xl-9___4Cdy9,\n.flexboxgrid2__col-xl-10___pgLUE,\n.flexboxgrid2__col-xl-11___fOAzP,\n.flexboxgrid2__col-xl-12___1lxVN,\n.flexboxgrid2__col-xl-offset-0___rTVg4,\n.flexboxgrid2__col-xl-offset-1___1KRTF,\n.flexboxgrid2__col-xl-offset-2___3XTdA,\n.flexboxgrid2__col-xl-offset-3___1u7VM,\n.flexboxgrid2__col-xl-offset-4___1U3cj,\n.flexboxgrid2__col-xl-offset-5___1m-Bk,\n.flexboxgrid2__col-xl-offset-6___zqsMR,\n.flexboxgrid2__col-xl-offset-7___8fHBq,\n.flexboxgrid2__col-xl-offset-8___1LruZ,\n.flexboxgrid2__col-xl-offset-9___3oTGD,\n.flexboxgrid2__col-xl-offset-10___2eReq,\n.flexboxgrid2__col-xl-offset-11___kuo4A,\n.flexboxgrid2__col-xl-offset-12___1WvjR {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  padding-right: 8px;\n  padding-left: 8px;\n  max-width: 100%;\n}\n\n.flexboxgrid2__col-xs___2PLFU {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.flexboxgrid2__col-xs-1___1ys2K {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.flexboxgrid2__col-xs-2___1oFs0 {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.flexboxgrid2__col-xs-3___1Q5cW {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.flexboxgrid2__col-xs-4___3pHqi {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.flexboxgrid2__col-xs-5___3JeAf {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.flexboxgrid2__col-xs-6___1Zplx {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.flexboxgrid2__col-xs-7___2rjoo {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.flexboxgrid2__col-xs-8___3Pbgu {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.flexboxgrid2__col-xs-9___zDP7a {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.flexboxgrid2__col-xs-10___Zo7_E {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.flexboxgrid2__col-xs-11___mXqV2 {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.flexboxgrid2__col-xs-12___AdoKE {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.flexboxgrid2__col-xs-offset-0___3NAsN {\n  margin-left: 0;\n}\n\n.flexboxgrid2__col-xs-offset-1___3K_gC {\n  margin-left: 8.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-2___2Ga73 {\n  margin-left: 16.66666667%;\n}\n\n.flexboxgrid2__col-xs-offset-3___3c_Ft {\n  margin-left: 25%;\n}\n\n.flexboxgrid2__col-xs-offset-4___3TWUy {\n  margin-left: 33.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-5___1yWoT {\n  margin-left: 41.66666667%;\n}\n\n.flexboxgrid2__col-xs-offset-6___al_7H {\n  margin-left: 50%;\n}\n\n.flexboxgrid2__col-xs-offset-7___2J_G7 {\n  margin-left: 58.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-8___1RGyW {\n  margin-left: 66.66666667%;\n}\n\n.flexboxgrid2__col-xs-offset-9___3OtIT {\n  margin-left: 75%;\n}\n\n.flexboxgrid2__col-xs-offset-10___109SK {\n  margin-left: 83.33333333%;\n}\n\n.flexboxgrid2__col-xs-offset-11___1fcLq {\n  margin-left: 91.66666667%;\n}\n\n.flexboxgrid2__start-xs___2gtAf {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.flexboxgrid2__center-xs___2GJwn {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.flexboxgrid2__end-xs___1Jy9a {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.flexboxgrid2__top-xs___3ApF9 {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.flexboxgrid2__middle-xs___2qJAd {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.flexboxgrid2__bottom-xs___2sMuK {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.flexboxgrid2__around-xs___1h6nu {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.flexboxgrid2__between-xs___1Bml9 {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.flexboxgrid2__first-xs___2ydrY {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.flexboxgrid2__last-xs___1TmDf {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.flexboxgrid2__initial-order-xs___1lJw5 {\n  -webkit-box-ordinal-group: NaN;\n  -ms-flex-order: initial;\n  order: initial;\n}\n\n@media only screen and (min-width: 576px) {\n  .flexboxgrid2__col-sm___3UNLq {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-sm-1___2u7Tq {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-2___39LGZ {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-3___1HPMt {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-sm-4___3SO93 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-5___2Buhm {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-6___1l2Kt {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-sm-7___d6sUa {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-8___g6l7V {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-9___etIBb {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-sm-10___Bxvht {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-11___PiXUP {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-12___2sYMg {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-sm-offset-0___oljZ3 {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-sm-offset-1___1ywTD {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-2___1X0hd {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-offset-3___2QOr2 {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-sm-offset-4___3inAM {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-5___2Ihhn {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-offset-6___21xzL {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-sm-offset-7___1ypYV {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-8___ymjV3 {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-sm-offset-9___1SxN0 {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-sm-offset-10___2qwiO {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-sm-offset-11___3zRYq {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-sm___3I0F0 {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-sm___2tfwT {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-sm___1Dqio {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-sm___NTmPJ {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-sm___QLrL0 {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-sm___3iRAD {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-sm___2DXbH {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-sm___1GD_q {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-sm___AlKeI {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid2__last-sm___1GaXQ {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-sm___3Ar7f {\n    -webkit-box-ordinal-group: NaN;\n    -ms-flex-order: initial;\n    order: initial;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .flexboxgrid2__col-md___srMeB,\n  .flexboxgrid2__col-md-1___3RdWY,\n  .flexboxgrid2__col-md-2___3j8qs,\n  .flexboxgrid2__col-md-3___2Th4S,\n  .flexboxgrid2__col-md-4___3pbbS,\n  .flexboxgrid2__col-md-5___1Svz9,\n  .flexboxgrid2__col-md-6___1wIAi,\n  .flexboxgrid2__col-md-7___3z1EO,\n  .flexboxgrid2__col-md-8___2Dm-W,\n  .flexboxgrid2__col-md-9___1nXvw,\n  .flexboxgrid2__col-md-10___3Br2r,\n  .flexboxgrid2__col-md-11___3gKDL,\n  .flexboxgrid2__col-md-12___2t4Kh,\n  .flexboxgrid2__col-md-offset-0___1twEm,\n  .flexboxgrid2__col-md-offset-1___12ZU0,\n  .flexboxgrid2__col-md-offset-2___1dGCS,\n  .flexboxgrid2__col-md-offset-3___XMXnG,\n  .flexboxgrid2__col-md-offset-4___3TnIN,\n  .flexboxgrid2__col-md-offset-5___EGfBj,\n  .flexboxgrid2__col-md-offset-6___3Kb3E,\n  .flexboxgrid2__col-md-offset-7___21XFw,\n  .flexboxgrid2__col-md-offset-8___qnljU,\n  .flexboxgrid2__col-md-offset-9___kdDX2,\n  .flexboxgrid2__col-md-offset-10___284iF,\n  .flexboxgrid2__col-md-offset-11___WXAgk,\n  .flexboxgrid2__col-md-offset-12___2XYlU {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n\n  .flexboxgrid2__col-md___srMeB {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-md-1___3RdWY {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-md-2___3j8qs {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-md-3___2Th4S {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-md-4___3pbbS {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-md-5___1Svz9 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-md-6___1wIAi {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-md-7___3z1EO {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-md-8___2Dm-W {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-md-9___1nXvw {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-md-10___3Br2r {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-md-11___3gKDL {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-md-12___2t4Kh {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-md-offset-0___1twEm {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-md-offset-1___12ZU0 {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-2___1dGCS {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-md-offset-3___XMXnG {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-md-offset-4___3TnIN {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-5___EGfBj {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-md-offset-6___3Kb3E {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-md-offset-7___21XFw {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-8___qnljU {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-md-offset-9___kdDX2 {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-md-offset-10___284iF {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-md-offset-11___WXAgk {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-md___3M-iK {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-md___3Ql1d {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-md___STrsQ {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-md___2FX25 {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-md___YZ6CJ {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-md___2Ruw8 {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-md___1G_h0 {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-md___1ik_I {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-md___yFUKj {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid2__last-md___1PHhp {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-md___3UvRN {\n    -webkit-box-ordinal-group: NaN;\n    -ms-flex-order: initial;\n    order: initial;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .flexboxgrid2__col-lg___3u7lk,\n  .flexboxgrid2__col-lg-1___2y0lP,\n  .flexboxgrid2__col-lg-2___1x6vt,\n  .flexboxgrid2__col-lg-3___37wpY,\n  .flexboxgrid2__col-lg-4___RwCNM,\n  .flexboxgrid2__col-lg-5___37365,\n  .flexboxgrid2__col-lg-6___NeTjn,\n  .flexboxgrid2__col-lg-7___3bixv,\n  .flexboxgrid2__col-lg-8___2YhQ1,\n  .flexboxgrid2__col-lg-9___2e0uZ,\n  .flexboxgrid2__col-lg-10___3X-8g,\n  .flexboxgrid2__col-lg-11___1Ymgu,\n  .flexboxgrid2__col-lg-12___p4dm-,\n  .flexboxgrid2__col-lg-offset-0___YMDi3,\n  .flexboxgrid2__col-lg-offset-1___2mUfM,\n  .flexboxgrid2__col-lg-offset-2___2PSlK,\n  .flexboxgrid2__col-lg-offset-3___2ZEsJ,\n  .flexboxgrid2__col-lg-offset-4___oUBjv,\n  .flexboxgrid2__col-lg-offset-5___2_pNE,\n  .flexboxgrid2__col-lg-offset-6___1bZES,\n  .flexboxgrid2__col-lg-offset-7___26quH,\n  .flexboxgrid2__col-lg-offset-8___3kkd3,\n  .flexboxgrid2__col-lg-offset-9___22Nlu,\n  .flexboxgrid2__col-lg-offset-10___32R4D,\n  .flexboxgrid2__col-lg-offset-11___3mcm9,\n  .flexboxgrid2__col-lg-offset-12___1CzWw {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n\n  .flexboxgrid2__col-lg___3u7lk {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-lg-1___2y0lP {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-2___1x6vt {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-3___37wpY {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-lg-4___RwCNM {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-5___37365 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-6___NeTjn {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-lg-7___3bixv {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-8___2YhQ1 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-9___2e0uZ {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-lg-10___3X-8g {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-11___1Ymgu {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-12___p4dm- {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-lg-offset-0___YMDi3 {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-lg-offset-1___2mUfM {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-2___2PSlK {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-offset-3___2ZEsJ {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-lg-offset-4___oUBjv {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-5___2_pNE {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-offset-6___1bZES {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-lg-offset-7___26quH {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-8___3kkd3 {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-lg-offset-9___22Nlu {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-lg-offset-10___32R4D {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-lg-offset-11___3mcm9 {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-lg___m0vFF {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-lg___1ppmu {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-lg___1Cene {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-lg___3R_GA {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-lg___2vRr_ {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-lg___1FxHX {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-lg___24PfH {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-lg___2a-N0 {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-lg___351pp {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid2__last-lg___2GWNG {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-lg___3ajeo {\n    -webkit-box-ordinal-group: NaN;\n    -ms-flex-order: initial;\n    order: initial;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .flexboxgrid2__col-xl___3OIWS,\n  .flexboxgrid2__col-xl-1___1x-yZ,\n  .flexboxgrid2__col-xl-2___oe1yn,\n  .flexboxgrid2__col-xl-3___1DZkD,\n  .flexboxgrid2__col-xl-4___e7X-g,\n  .flexboxgrid2__col-xl-5___1K3om,\n  .flexboxgrid2__col-xl-6___pj3oz,\n  .flexboxgrid2__col-xl-7___2lbXv,\n  .flexboxgrid2__col-xl-8___2T9rc,\n  .flexboxgrid2__col-xl-9___4Cdy9,\n  .flexboxgrid2__col-xl-10___pgLUE,\n  .flexboxgrid2__col-xl-11___fOAzP,\n  .flexboxgrid2__col-xl-12___1lxVN,\n  .flexboxgrid2__col-xl-offset-0___rTVg4,\n  .flexboxgrid2__col-xl-offset-1___1KRTF,\n  .flexboxgrid2__col-xl-offset-2___3XTdA,\n  .flexboxgrid2__col-xl-offset-3___1u7VM,\n  .flexboxgrid2__col-xl-offset-4___1U3cj,\n  .flexboxgrid2__col-xl-offset-5___1m-Bk,\n  .flexboxgrid2__col-xl-offset-6___zqsMR,\n  .flexboxgrid2__col-xl-offset-7___8fHBq,\n  .flexboxgrid2__col-xl-offset-8___1LruZ,\n  .flexboxgrid2__col-xl-offset-9___3oTGD,\n  .flexboxgrid2__col-xl-offset-10___2eReq,\n  .flexboxgrid2__col-xl-offset-11___kuo4A,\n  .flexboxgrid2__col-xl-offset-12___1WvjR {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n\n  .flexboxgrid2__col-xl___3OIWS {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-xl-1___1x-yZ {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-2___oe1yn {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-3___1DZkD {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .flexboxgrid2__col-xl-4___e7X-g {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-5___1K3om {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-6___pj3oz {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .flexboxgrid2__col-xl-7___2lbXv {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-8___2T9rc {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-9___4Cdy9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flexboxgrid2__col-xl-10___pgLUE {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-11___fOAzP {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-12___1lxVN {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .flexboxgrid2__col-xl-offset-0___rTVg4 {\n    margin-left: 0;\n  }\n\n  .flexboxgrid2__col-xl-offset-1___1KRTF {\n    margin-left: 8.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-2___3XTdA {\n    margin-left: 16.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-offset-3___1u7VM {\n    margin-left: 25%;\n  }\n\n  .flexboxgrid2__col-xl-offset-4___1U3cj {\n    margin-left: 33.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-5___1m-Bk {\n    margin-left: 41.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-offset-6___zqsMR {\n    margin-left: 50%;\n  }\n\n  .flexboxgrid2__col-xl-offset-7___8fHBq {\n    margin-left: 58.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-8___1LruZ {\n    margin-left: 66.66666667%;\n  }\n\n  .flexboxgrid2__col-xl-offset-9___3oTGD {\n    margin-left: 75%;\n  }\n\n  .flexboxgrid2__col-xl-offset-10___2eReq {\n    margin-left: 83.33333333%;\n  }\n\n  .flexboxgrid2__col-xl-offset-11___kuo4A {\n    margin-left: 91.66666667%;\n  }\n\n  .flexboxgrid2__start-xl___2Ur_r {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .flexboxgrid2__center-xl___3C4Vx {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .flexboxgrid2__end-xl___2UqlC {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .flexboxgrid2__top-xl___1tLbF {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .flexboxgrid2__middle-xl___31-ID {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .flexboxgrid2__bottom-xl___p1SvR {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .flexboxgrid2__around-xl___2j28w {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .flexboxgrid2__between-xl___xff2E {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .flexboxgrid2__first-xl___2QxqG {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .flexboxgrid2__last-xl___1v5wI {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n\n  .flexboxgrid2__initial-order-xl___IYbgP {\n    -webkit-box-ordinal-group: NaN;\n    -ms-flex-order: initial;\n    order: initial;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .flexboxgrid2__hidden-xs___3MgtY {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .flexboxgrid2__hidden-sm___2YMAO {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .flexboxgrid2__hidden-md___FbTYO {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .flexboxgrid2__hidden-lg___2fkvW {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .flexboxgrid2__hidden-xl___3hzYJ {\n    display: none;\n  }\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Alert/index.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Alert/index.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Alert_alert__3oaAJ {\n  margin-bottom: 10px;\n  border-left: solid 4px;\n  border-radius: 4px;\n  padding: 0.8rem;\n}\n.Alert_alert__3oaAJ .Alert_title__2laiL {\n  margin: 0 0 10px;\n  font-size: 20px;\n}\n.Alert_alert__3oaAJ.Alert_info__VSINI {\n  border-color: #2ba9cd;\n  background-color: rgba(43, 169, 205, 0.15);\n}\n.Alert_alert__3oaAJ.Alert_info__VSINI .Alert_title__2laiL {\n  color: #196379;\n}\n.Alert_alert__3oaAJ.Alert_success__u2nyy {\n  border-color: #43b581;\n  background-color: rgba(67, 181, 129, 0.15);\n}\n.Alert_alert__3oaAJ.Alert_success__u2nyy .Alert_title__2laiL {\n  color: #276b4c;\n}\n.Alert_alert__3oaAJ.Alert_destructive__2CqVz {\n  border-color: #f04747;\n  background-color: rgba(240, 71, 71, 0.15);\n}\n.Alert_alert__3oaAJ.Alert_destructive__2CqVz .Alert_title__2laiL {\n  color: #c11010;\n}\n.Alert_alert__3oaAJ.Alert_warn__2khMU {\n  border-color: #FF8300;\n  background-color: rgba(255, 131, 0, 0.15);\n}\n.Alert_alert__3oaAJ.Alert_warn__2khMU .Alert_title__2laiL {\n  color: #994f00;\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/components/Alert/index.module.scss"],"names":[],"mappings":"AAcA;EACC,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AAbD;AAeC;EACC,gBAAA;EACA,eAAA;AAbF;AAgBC;EAnBA,qBAHM;EAIN,0CAAA;AAMD;AAJC;EACC,cAAA;AAMF;AAaC;EAvBA,qBAJS;EAKT,0CAAA;AAaD;AAXC;EACC,cAAA;AAaF;AAUC;EA3BA,qBALa;EAMb,yCAAA;AAoBD;AAlBC;EACC,cAAA;AAoBF;AAOC;EA/BA,qBANS;EAOT,yCAAA;AA2BD;AAzBC;EACC,cAAA;AA2BF","file":"index.module.scss","sourcesContent":["$warning: #FF8300;\r\n$destructive: #f04747;\r\n$success: #43b581;\r\n$info: #2ba9cd;\r\n\r\n@mixin alert($color) {\r\n\tborder-color: $color;\r\n\tbackground-color: change-color($color, $alpha: 0.15);\r\n\t\r\n\t.title {\r\n\t\tcolor: darken($color, 20%);\r\n\t}\r\n}\r\n\r\n.alert {\r\n\tmargin-bottom: 10px;\r\n\tborder-left: solid 4px;\r\n\tborder-radius: 4px;\r\n\tpadding: 0.8rem;\r\n\t\r\n\t.title {\r\n\t\tmargin: 0 0 10px;\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t\r\n\t&.info {\r\n\t\t@include alert($info);\r\n\t}\r\n\t\r\n\t&.success {\r\n\t\t@include alert($success);\r\n\t}\r\n\t\r\n\t&.destructive {\r\n\t\t@include alert($destructive);\r\n\t}\r\n\t\r\n\t&.warn {\r\n\t\t@include alert($warning);\r\n\t}\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"alert": "Alert_alert__3oaAJ",
	"title": "Alert_title__2laiL",
	"info": "Alert_info__VSINI",
	"success": "Alert_success__u2nyy",
	"destructive": "Alert_destructive__2CqVz",
	"warn": "Alert_warn__2khMU"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Button/index.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Button/index.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Button_button__zD4S2 {\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6rem 1.2rem;\n  min-height: 42px;\n  min-width: 86px;\n  border-radius: 4px;\n  border: solid 1px;\n  font-size: 16px;\n  margin: 10px;\n  transition: all 120ms;\n  text-decoration: none;\n}\n.Button_button__zD4S2:active {\n  background-position: 0 0%;\n}\n.Button_button__zD4S2.Button_brand__FMaDj {\n  background-color: #40c9dd;\n  border-color: #25bacf;\n  color: #ffffff;\n}\n.Button_button__zD4S2.Button_brand__FMaDj:active {\n  box-shadow: inset 0 1px 3px #209eb1;\n}\n.Button_button__zD4S2.Button_secondary__1jscB {\n  background-color: #333;\n  border-color: #1f1f1f;\n  color: #ffffff;\n}\n.Button_button__zD4S2.Button_secondary__1jscB:active {\n  box-shadow: inset 0 1px 3px #0d0d0d;\n}\n.Button_button__zD4S2.Button_destructive__1-I2d {\n  background-color: #f04747;\n  border-color: #ed2121;\n  color: #ffffff;\n}\n.Button_button__zD4S2.Button_destructive__1-I2d:active {\n  box-shadow: inset 0 1px 3px #d91212;\n}\n.Button_button__zD4S2.Button_light__3cWNm {\n  background-color: #ffffff;\n  border-color: #ebebeb;\n  color: #464c4f;\n}\n.Button_button__zD4S2.Button_light__3cWNm:active {\n  box-shadow: inset 0 1px 3px #d9d9d9;\n}\n.Button_button__zD4S2:disabled {\n  background-image: none;\n  background-color: rgba(255, 255, 255, 0.12) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: rgba(255, 255, 255, 0.34) !important;\n  cursor: not-allowed;\n  box-shadow: none !important;\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/components/Button/index.module.scss"],"names":[],"mappings":"AAUA;EACC,eAAA;EACA,sBAAA;EACA,UAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,qBAAA;EACA,qBAAA;AATD;AAWC;EACC,yBAAA;AATF;AAYC;EACC,yBAhCY;EAiCZ,qBAAA;EACA,cA7Bc;AAmBhB;AAYE;EACC,mCAAA;AAVH;AAcC;EACC,sBAzCgB;EA0ChB,qBAAA;EACA,cAtCkB;AA0BpB;AAcE;EACC,mCAAA;AAZH;AAgBC;EACC,yBAlDkB;EAmDlB,qBAAA;EACA,cA/CoB;AAiCtB;AAgBE;EACC,mCAAA;AAdH;AAkBC;EACC,yBA3DY;EA4DZ,qBAAA;EACA,cAxDc;AAwChB;AAkBE;EACC,mCAAA;AAhBH;AAoBC;EACC,sBAAA;EACA,sDAAA;EACA,kDAAA;EACA,2CAAA;EACA,mBAAA;EACA,2BAAA;AAlBF","file":"index.module.scss","sourcesContent":["$color-brand: #40c9dd;\r\n$color-secondary: #333;\r\n$color-destructive: #f04747;\r\n$color-light: #ffffff;\r\n\r\n$text-on-brand: #ffffff;\r\n$text-on-secondary: #ffffff;\r\n$text-on-destructive: #ffffff;\r\n$text-on-light: #464c4f;\r\n\r\n.button {\r\n\tcursor: pointer;\r\n\tbox-sizing: border-box;\r\n\toutline: 0;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 0.6rem 1.2rem;\r\n\tmin-height: 42px;\r\n\tmin-width: 86px;\r\n\tborder-radius: 4px;\r\n\tborder: solid 1px;\r\n\tfont-size: 16px;\r\n\tmargin: 10px;\r\n\ttransition: all 120ms;\r\n\ttext-decoration: none;\r\n\r\n\t&:active {\r\n\t\tbackground-position: 0 0%;\r\n\t}\r\n\r\n\t&.brand {\r\n\t\tbackground-color: $color-brand;\r\n\t\tborder-color: darken($color-brand, 8%);\r\n\t\tcolor: $text-on-brand;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-brand, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.secondary {\r\n\t\tbackground-color: $color-secondary;\r\n\t\tborder-color: darken($color-secondary, 8%);\r\n\t\tcolor: $text-on-secondary;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-secondary, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.destructive {\r\n\t\tbackground-color: $color-destructive;\r\n\t\tborder-color: darken($color-destructive, 8%);\r\n\t\tcolor: $text-on-destructive;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-destructive, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.light {\r\n\t\tbackground-color: $color-light;\r\n\t\tborder-color: darken($color-light, 8%);\r\n\t\tcolor: $text-on-light;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-light, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tbackground-image: none;\r\n\t\tbackground-color: rgba(255, 255, 255, 0.12) !important;\r\n\t\tborder-color: rgba(255, 255, 255, 0.12) !important;\r\n\t\tcolor: rgba(255, 255, 255, 0.34) !important;\r\n\t\tcursor: not-allowed;\r\n\t\tbox-shadow: none !important;\r\n\t}\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"button": "Button_button__zD4S2",
	"brand": "Button_brand__FMaDj",
	"secondary": "Button_secondary__1jscB",
	"destructive": "Button_destructive__1-I2d",
	"light": "Button_light__3cWNm"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/NButton/index.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/NButton/index.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".NButton_button__1z5N0 {\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6rem 1.2rem;\n  min-height: 42px;\n  min-width: 86px;\n  border-radius: 4px;\n  border: solid 1px;\n  font-size: 16px;\n  margin: 10px;\n  transition: all 120ms;\n}\n.NButton_button__1z5N0:active {\n  background-position: 0 0%;\n}\n.NButton_button__1z5N0.NButton_brand__1IjXJ {\n  background-color: #40c9dd;\n  border-color: #25bacf;\n  color: #ffffff;\n}\n.NButton_button__1z5N0.NButton_brand__1IjXJ:active {\n  box-shadow: inset 0 1px 3px #209eb1;\n}\n.NButton_button__1z5N0.NButton_secondary__2VUhR {\n  background-color: #333;\n  border-color: #1f1f1f;\n  color: #ffffff;\n}\n.NButton_button__1z5N0.NButton_secondary__2VUhR:active {\n  box-shadow: inset 0 1px 3px #0d0d0d;\n}\n.NButton_button__1z5N0.NButton_destructive__28M85 {\n  background-color: #f04747;\n  border-color: #ed2121;\n  color: #ffffff;\n}\n.NButton_button__1z5N0.NButton_destructive__28M85:active {\n  box-shadow: inset 0 1px 3px #d91212;\n}\n.NButton_button__1z5N0.NButton_light__1UVSA {\n  background-color: #ffffff;\n  border-color: #ebebeb;\n  color: #464c4f;\n}\n.NButton_button__1z5N0.NButton_light__1UVSA:active {\n  box-shadow: inset 0 1px 3px #d9d9d9;\n}\n.NButton_button__1z5N0:disabled {\n  background-image: none;\n  background-color: rgba(255, 255, 255, 0.12) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: rgba(255, 255, 255, 0.34) !important;\n  cursor: not-allowed;\n  box-shadow: none !important;\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/components/NButton/index.module.scss"],"names":[],"mappings":"AAUA;EACC,eAAA;EACA,sBAAA;EACA,UAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,qBAAA;AATD;AAWC;EACC,yBAAA;AATF;AAYC;EACC,yBA/BY;EAgCZ,qBAAA;EACA,cA5Bc;AAkBhB;AAYE;EACC,mCAAA;AAVH;AAcC;EACC,sBAxCgB;EAyChB,qBAAA;EACA,cArCkB;AAyBpB;AAcE;EACC,mCAAA;AAZH;AAgBC;EACC,yBAjDkB;EAkDlB,qBAAA;EACA,cA9CoB;AAgCtB;AAgBE;EACC,mCAAA;AAdH;AAkBC;EACC,yBA1DY;EA2DZ,qBAAA;EACA,cAvDc;AAuChB;AAkBE;EACC,mCAAA;AAhBH;AAoBC;EACC,sBAAA;EACA,sDAAA;EACA,kDAAA;EACA,2CAAA;EACA,mBAAA;EACA,2BAAA;AAlBF","file":"index.module.scss","sourcesContent":["$color-brand: #40c9dd;\r\n$color-secondary: #333;\r\n$color-destructive: #f04747;\r\n$color-light: #ffffff;\r\n\r\n$text-on-brand: #ffffff;\r\n$text-on-secondary: #ffffff;\r\n$text-on-destructive: #ffffff;\r\n$text-on-light: #464c4f;\r\n\r\n.button {\r\n\tcursor: pointer;\r\n\tbox-sizing: border-box;\r\n\toutline: 0;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 0.6rem 1.2rem;\r\n\tmin-height: 42px;\r\n\tmin-width: 86px;\r\n\tborder-radius: 4px;\r\n\tborder: solid 1px;\r\n\tfont-size: 16px;\r\n\tmargin: 10px;\r\n\ttransition: all 120ms;\r\n\r\n\t&:active {\r\n\t\tbackground-position: 0 0%;\r\n\t}\r\n\r\n\t&.brand {\r\n\t\tbackground-color: $color-brand;\r\n\t\tborder-color: darken($color-brand, 8%);\r\n\t\tcolor: $text-on-brand;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-brand, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.secondary {\r\n\t\tbackground-color: $color-secondary;\r\n\t\tborder-color: darken($color-secondary, 8%);\r\n\t\tcolor: $text-on-secondary;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-secondary, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.destructive {\r\n\t\tbackground-color: $color-destructive;\r\n\t\tborder-color: darken($color-destructive, 8%);\r\n\t\tcolor: $text-on-destructive;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-destructive, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&.light {\r\n\t\tbackground-color: $color-light;\r\n\t\tborder-color: darken($color-light, 8%);\r\n\t\tcolor: $text-on-light;\r\n\r\n\t\t&:active {\r\n\t\t\tbox-shadow: inset 0 1px 3px darken($color-light, 15%);\r\n\t\t}\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tbackground-image: none;\r\n\t\tbackground-color: rgba(255, 255, 255, 0.12) !important;\r\n\t\tborder-color: rgba(255, 255, 255, 0.12) !important;\r\n\t\tcolor: rgba(255, 255, 255, 0.34) !important;\r\n\t\tcursor: not-allowed;\r\n\t\tbox-shadow: none !important;\r\n\t}\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"button": "NButton_button__1z5N0",
	"brand": "NButton_brand__1IjXJ",
	"secondary": "NButton_secondary__2VUhR",
	"destructive": "NButton_destructive__28M85",
	"light": "NButton_light__1UVSA"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/PageToolBar/index.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/PageToolBar/index.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".PageToolBar_appbar__3_nzB {\n  box-sizing: border-box;\n  padding: 28px 16px;\n  padding-bottom: 60px;\n}\n.PageToolBar_appbar__3_nzB .PageToolBar_spacer__2sf3_ {\n  flex: 1 0 auto;\n}\n.PageToolBar_appbar__3_nzB .PageToolBar_title__3fYW1 {\n  text-align: center;\n  color: #ffffff;\n  font-size: 32px;\n  font-weight: 700;\n  display: block;\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/components/PageToolBar/index.module.scss"],"names":[],"mappings":"AAMA;EACC,sBAAA;EACA,kBAAA;EACA,oBAAA;AALD;AAOC;EACC,cAAA;AALF;AAQC;EACC,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AANF","file":"index.module.scss","sourcesContent":["$background-primary: #363438;\r\n$background-secondary: #272629;\r\n$background-secondary-alt: #222124;\r\n$background-tertiary: #18171a;\r\n$background-priority: #344556;\r\n\r\n.appbar {\r\n\tbox-sizing: border-box;\r\n\tpadding: 28px 16px;\r\n\tpadding-bottom: 60px;\r\n\r\n\t.spacer {\r\n\t\tflex: 1 0 auto;\r\n\t}\r\n\r\n\t.title {\r\n\t\ttext-align: center;\r\n\t\tcolor: #ffffff;\r\n\t\tfont-size: 32px;\r\n\t\tfont-weight: 700;\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"appbar": "PageToolBar_appbar__3_nzB",
	"spacer": "PageToolBar_spacer__2sf3_",
	"title": "PageToolBar_title__3fYW1"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_AppBar/index.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/_AppBar/index.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._AppBar_appbar__fETpV {\n  box-sizing: border-box;\n  height: 64px;\n  padding: 16px;\n  background-color: #18171a;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n._AppBar_appbar__fETpV ._AppBar_spacer__ZE0l- {\n  flex: 1 0 auto;\n}\n._AppBar_appbar__fETpV ._AppBar_title__sohqj {\n  color: #ffffff;\n  font-size: 28px;\n  font-weight: 700;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 120ms;\n}\n._AppBar_appbar__fETpV ._AppBar_title__sohqj:hover {\n  opacity: 1;\n}\n._AppBar_appbar__fETpV ._AppBar_title__sohqj ._AppBar_title-alt__loIVg {\n  margin-left: 8px;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 400;\n}\n\n@media screen and (max-width: 575px) {\n  ._AppBar_appbar__fETpV ._AppBar_title__sohqj {\n    font-size: 22px;\n  }\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/components/_AppBar/index.module.scss"],"names":[],"mappings":"AAMA;EACC,sBAAA;EACA,YAAA;EACA,aAAA;EACA,yBAPqB;EAQrB,aAAA;EACA,mBAAA;EACA,mBAAA;AALD;AAOC;EACC,cAAA;AALF;AAQC;EACC,cAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;AANF;AAQE;EACC,UAAA;AANH;AASE;EACC,gBAAA;EACA,+BAAA;EACA,gBAAA;AAPH;;AAYA;EACC;IACC,eAAA;EATA;AACF","file":"index.module.scss","sourcesContent":["$background-primary: #363438;\r\n$background-secondary: #272629;\r\n$background-secondary-alt: #222124;\r\n$background-tertiary: #18171a;\r\n$background-priority: #344556;\r\n\r\n.appbar {\r\n\tbox-sizing: border-box;\r\n\theight: 64px;\r\n\tpadding: 16px;\r\n\tbackground-color: $background-tertiary;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\t\r\n\t.spacer {\r\n\t\tflex: 1 0 auto;\r\n\t}\r\n\t\r\n\t.title {\r\n\t\tcolor: #ffffff;\r\n\t\tfont-size: 28px;\r\n\t\tfont-weight: 700;\r\n\t\tcursor: pointer;\r\n\t\topacity: .8;\r\n\t\ttransition: opacity 120ms;\r\n\r\n\t\t&:hover {\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t\t\r\n\t\t.title-alt {\r\n\t\t\tmargin-left: 8px;\r\n\t\t\tcolor: rgba(255, 255, 255, .5);\r\n\t\t\tfont-weight: 400;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n\t.appbar .title {\r\n\t\tfont-size: 22px;\r\n\t}\r\n}"]}]);
// Exports
exports.locals = {
	"appbar": "_AppBar_appbar__fETpV",
	"spacer": "_AppBar_spacer__ZE0l-",
	"title": "_AppBar_title__sohqj",
	"title-alt": "_AppBar_title-alt__loIVg"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/_BackButton/index.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/_BackButton/index.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "._BackButton_back-link__276kY {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 10px 14px;\n  border: solid 1px #ffffff !important;\n  border-radius: 4px;\n  opacity: 0.6;\n  color: #ffffff;\n  text-decoration: none;\n  transition: opacity 150ms;\n}\n._BackButton_back-link__276kY:hover {\n  opacity: 1;\n}\n._BackButton_back-link__276kY._BackButton_text__9Bu0Q {\n  border: 0 !important;\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/components/_BackButton/index.module.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,kBAAA;EACA,oCAAA;EACA,kBAAA;EACA,YAAA;EACA,cAAA;EACA,qBAAA;EACA,yBAAA;AACD;AACC;EACC,UAAA;AACF;AAEC;EACC,oBAAA;AAAF","file":"index.module.scss","sourcesContent":[".back-link {\r\n\tcursor: pointer;\r\n\tuser-select: none;\r\n\tpadding: 10px 14px;\r\n\tborder: solid 1px #ffffff !important;\r\n\tborder-radius: 4px;\r\n\topacity: 0.6;\r\n\tcolor: #ffffff;\r\n\ttext-decoration: none;\r\n\ttransition: opacity 150ms;\r\n\t\r\n\t&:hover {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t&.text {\r\n\t\tborder: 0 !important;\r\n\t}\r\n}"]}]);
// Exports
exports.locals = {
	"back-link": "_BackButton_back-link__276kY",
	"text": "_BackButton_text__9Bu0Q"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\r\n        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\r\n    background-color: #222124;\r\n    color: #ffffff;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh2 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh3 {\r\n    margin-top: 20px;\r\n}\r\n\r\ncode {\r\n    display: block;\r\n    margin: 4px 0;\r\n    border: solid 1px rgba(0, 0, 0, 0.1);\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    padding: 8px;\r\n}\r\n\r\npre {\r\n    display: inline;\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    padding: 3px;\r\n}\r\n\r\nblockquote {\r\n    font-size: 16px;\r\n    position: relative;\r\n    margin-left: 0;\r\n    padding: 4px 0;\r\n    padding-left: 18px;\r\n}\r\n\r\nblockquote p {\r\n    margin: 0;\r\n}\r\n\r\nblockquote::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 10px;\r\n    width: 6px;\r\n    height: 100%;\r\n    background-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\n#table-of-contents + ul li {\r\n    opacity: 0.6;\r\n    transition: opacity 120ms;\r\n}\r\n\r\n#table-of-contents + ul li a {\r\n    opacity: 1 !important;\r\n    color: #ffffff !important;\r\n    border-bottom: none !important;\r\n    text-decoration: none;\r\n}\r\n\r\n#table-of-contents + ul li:hover {\r\n    opacity: 1;\r\n}\r\n\r\nimg.emoji {\r\n    width: 1.375em;\r\n    height: 1.375em;\r\n    margin: 0;\r\n    box-shadow: none !important;\r\n}\r\n\r\na:not(.prevDefault) {\r\n    color: #40c9dd;\r\n    opacity: .7;\r\n    text-decoration: none;\r\n    border-bottom: dotted 1px #93d6bd;\r\n    transition: opacity 150ms;\r\n}\r\n\r\na:not(.prevDefault):hover {\r\n    opacity: 1;\r\n    border-bottom: solid 1px #40c9dd;\r\n}\r\n\r\nth, td {\r\n    padding: 10px;\r\n    border: solid 1px rgba(255, 255, 255, .1);\r\n}\r\n\r\nthead {\r\n    background-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),\r\n        0 1px 10px 0 rgba(0, 0, 0, 0.12);\r\n    border-radius: 4px;\r\n    margin: 10px 0;\r\n}", "",{"version":3,"sources":["C:/Users/alexr/Desktop/Code Things/benny-docs/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT;4EACwE;IACxE,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;;;;;;IAOI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,oCAAoC;IACpC,kBAAkB;IAClB,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,eAAe;IACf,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,WAAW;IACX,qBAAqB;IACrB,iCAAiC;IACjC,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf;wCACoC;IACpC,kBAAkB;IAClB,cAAc;AAClB","file":"styles.css","sourcesContent":["body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\r\n        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\r\n    background-color: #222124;\r\n    color: #ffffff;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh2 {\r\n    margin-top: 20px;\r\n}\r\n\r\nh3 {\r\n    margin-top: 20px;\r\n}\r\n\r\ncode {\r\n    display: block;\r\n    margin: 4px 0;\r\n    border: solid 1px rgba(0, 0, 0, 0.1);\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    padding: 8px;\r\n}\r\n\r\npre {\r\n    display: inline;\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    padding: 3px;\r\n}\r\n\r\nblockquote {\r\n    font-size: 16px;\r\n    position: relative;\r\n    margin-left: 0;\r\n    padding: 4px 0;\r\n    padding-left: 18px;\r\n}\r\n\r\nblockquote p {\r\n    margin: 0;\r\n}\r\n\r\nblockquote::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 10px;\r\n    width: 6px;\r\n    height: 100%;\r\n    background-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\n#table-of-contents + ul li {\r\n    opacity: 0.6;\r\n    transition: opacity 120ms;\r\n}\r\n\r\n#table-of-contents + ul li a {\r\n    opacity: 1 !important;\r\n    color: #ffffff !important;\r\n    border-bottom: none !important;\r\n    text-decoration: none;\r\n}\r\n\r\n#table-of-contents + ul li:hover {\r\n    opacity: 1;\r\n}\r\n\r\nimg.emoji {\r\n    width: 1.375em;\r\n    height: 1.375em;\r\n    margin: 0;\r\n    box-shadow: none !important;\r\n}\r\n\r\na:not(.prevDefault) {\r\n    color: #40c9dd;\r\n    opacity: .7;\r\n    text-decoration: none;\r\n    border-bottom: dotted 1px #93d6bd;\r\n    transition: opacity 150ms;\r\n}\r\n\r\na:not(.prevDefault):hover {\r\n    opacity: 1;\r\n    border-bottom: solid 1px #40c9dd;\r\n}\r\n\r\nth, td {\r\n    padding: 10px;\r\n    border: solid 1px rgba(255, 255, 255, .1);\r\n}\r\n\r\nthead {\r\n    background-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),\r\n        0 1px 10px 0 rgba(0, 0, 0, 0.12);\r\n    border-radius: 4px;\r\n    margin: 10px 0;\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css":
/*!*********************************************************************!*\
  !*** ./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./react-flexbox-grid.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./react-flexbox-grid.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css",
      function () {
        var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader??__nextjs_postcss!./react-flexbox-grid.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/react-flexbox-grid/dist/react-flexbox-grid.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


var _this = undefined,
    _jsxFileName = "C:\\Users\\alexr\\Desktop\\Code Things\\benny-docs\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // h

var components = {
  wrapper: function wrapper(props) {
    return __jsx("div", {
      style: {
        padding: '4%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("main", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
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
        lineNumber: 21,
        columnNumber: 9
      }
    }, props.children);
  },
  inlineCode: function inlineCode(props) {
    return __jsx("pre", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, props.children);
  },
  blockquote: function blockquote(props) {
    return __jsx("blockquote", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, props.children);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__["MDXProvider"], {
    components: components,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }))));
});

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css",
      function () {
        var newContent = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\Users\alexr\Desktop\Code Things\benny-docs\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map