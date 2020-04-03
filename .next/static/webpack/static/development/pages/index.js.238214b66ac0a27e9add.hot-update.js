webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_Restlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Restlist */ "./components/Restlist.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ricea\\Homework\\Project3\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("all"),
      choice = _useState[0],
      setChoice = _useState[1];

  var values = {
    all: [{
      title: "Juliet's",
      name: "Juliet's",
      position: {
        lat: "30.261653",
        lng: "-97.760059"
      },
      img: __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 18
        }
      }, __jsx("img", {
        src: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 23
        }
      })),
      url: "http://www.juliet-austin.com/"
    }, {
      title: "Intero",
      name: "Intero",
      position: {
        lat: "30.253737",
        lng: "-97.714451"
      },
      url: "https://www.interorestaurant.com/"
    }, {
      title: "Le Politique",
      name: "Le Politique",
      position: {
        lat: "30.265560",
        lng: "-97.749093"
      },
      url: "https://lepolitiqueaustin.com/"
    }, {
      title: "Red Ash",
      name: "Red Ash",
      position: {
        lat: "30.265690",
        lng: "-97.744799"
      },
      url: "http://www.redashgrill.com/"
    }, {
      title: "Flyrite",
      name: "Flyrite",
      position: {
        lat: "30.261338",
        lng: "-97.718455"
      },
      url: "https://www.flyritechicken.com/"
    }, {
      title: "Koriente",
      name: "Koriente",
      position: {
        lat: "30.267016",
        lng: "-97.735982"
      },
      url: "https://www.koriente.com/"
    }, {
      title: "El Chilito",
      name: "El Chilito",
      position: {
        lat: "30.263022",
        lng: "-97.724423"
      },
      url: "https://www.elchilito.com/menu-3/"
    }],
    vegan: [{
      title: "Mr.Natural",
      name: "Mr.Natural",
      position: {
        lat: "30.256824",
        lng: "-97.724522"
      },
      url: "https://www.mrnatural-austin.com/"
    }, {
      title: "Counter Culture",
      name: "Counter Culture",
      position: {
        lat: "30.254679",
        lng: "-97.717912"
      },
      url: "http://countercultureaustin.com/"
    }, {
      title: "Vegan Nom",
      name: "Vegan Nom",
      position: {
        lat: "30.255139",
        lng: "-97.718182"
      },
      url: "https://www.thevegannom.com/"
    }, {
      title: "Bouldin Creek Cafe",
      name: "Bouldin Creek Cafe",
      position: {
        lat: "30.246495",
        lng: "-97.756786"
      },
      url: "http://bouldincreekcafe.com/"
    }, {
      title: "Mother's Cafe",
      name: "Mother's Cafe",
      position: {
        lat: "30.304367",
        lng: "-97.725968"
      },
      url: "http://bouldincreekcafe.com/"
    }, {
      title: "Citizen's Eatery",
      name: "Citizen's Eatery",
      position: {
        lat: "30.321724",
        lng: "-97.739028"
      },
      url: "https://www.citizeneatery.com/"
    }, {
      title: "Conscious Cravings",
      name: "Conscious Cravings",
      position: {
        lat: "30.250725",
        lng: "-97.754297"
      },
      url: "https://www.consciouscravingsaustin.com/"
    }, {
      title: "Arlo's",
      name: "Arlo's",
      position: {
        lat: "30.269616",
        lng: "-97.736356"
      },
      url: "https://www.arloscurbside.com/"
    }, {
      title: "The Beer Plant",
      name: "The Beer Plant",
      position: {
        lat: "30.296630",
        lng: "-97.767746"
      },
      url: "https://www.citizeneatery.com/"
    }, {
      title: "Citizen's Eatery",
      name: "Citizen's Eatery",
      position: {
        lat: "30.321724",
        lng: "-97.739028"
      },
      url: "https://www.citizeneatery.com/"
    }]
  };
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/journal/bootstrap.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, "Welcome to Vegan Gems"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx("button", {
    id: "veganMap",
    type: "button",
    className: "btn btn-success",
    onClick: function onClick() {
      return setChoice("vegan");
    },
    style: {
      marginRight: 40,
      marginLeft: 20,
      marginBottom: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "Completly Vegan"), __jsx("button", {
    id: "mixedMap",
    type: "button",
    className: "btn btn-success",
    onClick: function onClick() {
      return setChoice("all");
    },
    style: {
      marginBottom: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, "Mixed")), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    style: {
      height: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx(_components_Restlist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    markers: values,
    choice: choice,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.238214b66ac0a27e9add.hot-update.js.map