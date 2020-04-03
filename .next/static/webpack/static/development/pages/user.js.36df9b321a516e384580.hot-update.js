webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\ricea\\Homework\\Project3\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // import GoogleMapReact from 'google-map-react';
// import Marker from 'google-maps-react';


var MapContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MapContainer, _Component);

  var _super = _createSuper(MapContainer);

  function MapContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      choice: "all"
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onMarkerClick", function (props, marker, e) {
      return _this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onMapClicked", function (props) {
      if (_this.state.showingInfoWindow) {
        _this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MapContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["Map"], {
        google: this.props.google,
        style: {
          height: 600,
          width: 700
        },
        initialCenter: {
          lat: 30.2672,
          lng: -97.7431
        },
        zoom: 14,
        onClick: this.onMapClicked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, this.props.markers[this.state.choice].map(function (marker) {
        var _jsx;

        return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["Marker"], (_jsx = {
          title: marker.title,
          name: marker.name,
          position: marker.position,
          url: marker.url,
          onClick: _this2.onMapClicked
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "onClick", _this2.onMarkerClick), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__self", _this2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__source", {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }), _jsx));
      }), __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, this.state.selectedPlace.name), __jsx("a", {
        href: this.state.selectedPlace.picture,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }, this.state.selectedPlace.picture), __jsx("a", {
        href: this.state.selectedPlace.url,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }
      }, this.state.selectedPlace.url))));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_8__["GoogleApiWrapper"])({
  apiKey: "AIzaSyAuyheENMul3n_eUNnx_bKEV7BFrpMaSGE"
})(MapContainer)); //BACKUP MAP
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 30.2672,
//       lng: -97.7431
//     },
//     zoom: 15
//   };
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div className="col-8">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyAuyheENMul3n_eUNnx_bKEV7BFrpMaSGE" }}
//           defaultCenter={ {
//             lat: 30.2672,
//             lng: -97.7431
//           }}
//           defaultZoom={15}
//         >
//         <AnyReactComponent
//             lat={30.261653}
//             lng={-97.760059}
//             text="Juliet's"
//           />
//         <AnyReactComponent
//             lat={30.253737}
//             lng={-97.714451}
//             text="Intero"
//         />
//         <AnyReactComponent
//             lat={30.265560}
//             lng={-97.749093}
//             text="Le Politique"
//         />
//         <AnyReactComponent
//             lat={30.265690}
//             lng={-97.744799}
//             text="Red Ash"
//         />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
// export default Map;

/***/ })

})
//# sourceMappingURL=user.js.36df9b321a516e384580.hot-update.js.map