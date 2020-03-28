webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./components/Card.js":
false,

/***/ "./components/Dropdown.js":
/*!********************************!*\
  !*** ./components/Dropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\Users\\ricea\\ClassStuff\\practice\\React\\my-app\\components\\Dropdown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Dropdown = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dropdown);

    _this = _super.call(this);
    _this.state = {
      showMenu: false
    };
    _this.showMenu = _this.showMenu.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.closeMenu = _this.closeMenu.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dropdown, [{
    key: "showMenu",
    value: function showMenu(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        showMenu: true
      }, function () {
        document.addEventListener('click', _this2.closeMenu);
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu(event) {
      var _this3 = this;

      if (!this.dropdownMenu.contains(event.target)) {
        this.setState({
          showMenu: false
        }, function () {
          document.removeEventListener('click', _this3.closeMenu);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, __jsx("button", {
        onClick: this.showMenu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, "Show menu"), this.state.showMenu ? __jsx("div", {
        className: "menu",
        ref: function ref(element) {
          _this4.dropdownMenu = element;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      }, __jsx("button", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }, " Menu item 1 "), __jsx("button", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, " Menu item 2 "), __jsx("button", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, " Menu item 3 ")) : null);
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dropdown */ "./components/Dropdown.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ricea\\ClassStuff\\practice\\React\\my-app\\pages\\user.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var User = function User() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "register page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Welcome to Vegan Gems"), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("input", {
    placeholder: "First Name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("input", {
    placeholder: "Last Name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("input", {
    placeholder: "Username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=user.js.04eac007f66cbf5e9f30.hot-update.js.map