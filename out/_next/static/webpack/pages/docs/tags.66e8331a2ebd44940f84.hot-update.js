webpackHotUpdate_N_E("pages/docs/tags",{

/***/ "./components/ActionCard/index.js":
/*!****************************************!*\
  !*** ./components/ActionCard/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.scss */ "./components/ActionCard/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "F:\\Projects\\benny-things\\helpdesk\\components\\ActionCard\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ActionCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ActionCard, _Component);

  var _super = _createSuper(ActionCard);

  function ActionCard() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ActionCard);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ActionCard, [{
    key: "render",
    value: function render() {
      var _classNames;

      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a["action-card"], true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a["disabled"], this.props.disabled), _classNames));
      return __jsx("div", {
        className: classes,
        style: {
          height: "100%"
        },
        onClick: this.props.onClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a["title"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }
      }, this.props.title), __jsx("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a["description"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }, this.props.children));
    }
  }]);

  return ActionCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ActionCard.defaultProps = {
  title: "Container",
  onClick: function onClick() {},
  disabled: false
};
ActionCard.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ActionCard);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3Rpb25DYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbkNhcmQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsInByb3BzIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJvbkNsaWNrIiwidGl0bGUiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs2QkFDUTtBQUFBOztBQUNOLFVBQUlDLE9BQU8sR0FBR0MsaURBQVUsMkhBQ25CQyx5REFBTSxDQUFDLGFBQUQsQ0FEYSxFQUNLLElBREwsMEdBRW5CQSx5REFBTSxDQUFDLFVBQUQsQ0FGYSxFQUVFLEtBQUtDLEtBQUwsQ0FBV0MsUUFGYixnQkFBeEI7QUFLQSxhQUNJO0FBQUssaUJBQVMsRUFBRUosT0FBaEI7QUFBeUIsYUFBSyxFQUFFO0FBQUVLLGdCQUFNLEVBQUU7QUFBVixTQUFoQztBQUFvRCxlQUFPLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxPQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFFSix5REFBTSxDQUFDLE9BQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtDLEtBQUwsQ0FBV0ksS0FEaEIsQ0FESixFQUtJO0FBQUssaUJBQVMsRUFBRUwseURBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLQyxLQUFMLENBQVdLLFFBRGhCLENBTEosQ0FESjtBQVdIOzs7O0VBbEJvQkMsK0M7O0FBcUJ6QlYsVUFBVSxDQUFDVyxZQUFYLEdBQTBCO0FBQ3RCSCxPQUFLLEVBQUUsV0FEZTtBQUV0QkQsU0FGc0IscUJBRVgsQ0FBRSxDQUZTO0FBR3RCRixVQUFRLEVBQUU7QUFIWSxDQUExQjtBQU1BTCxVQUFVLENBQUNZLFNBQVgsR0FBdUI7QUFDbkJKLE9BQUssRUFBRUssaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETDtBQUVuQlIsU0FBTyxFQUFFTSxpREFBUyxDQUFDRyxJQUZBO0FBR25CWCxVQUFRLEVBQUVRLGlEQUFTLENBQUNJO0FBSEQsQ0FBdkI7QUFNZWpCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvdGFncy42NmU4MzMxYTJlYmQ0NDk0MGY4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuXHJcbmNsYXNzIEFjdGlvbkNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICBbc3R5bGVzW1wiYWN0aW9uLWNhcmRcIl1dOiB0cnVlLFxyXG4gICAgICAgICAgICBbc3R5bGVzW1wiZGlzYWJsZWRcIl1dOiB0aGlzLnByb3BzLmRpc2FibGVkXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ0aXRsZVwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZGVzY3JpcHRpb25cIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuQWN0aW9uQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0aXRsZTogXCJDb250YWluZXJcIixcclxuICAgIG9uQ2xpY2sgKCkge30sXHJcbiAgICBkaXNhYmxlZDogZmFsc2VcclxufVxyXG5cclxuQWN0aW9uQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=