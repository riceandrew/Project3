webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\ricea\\Homework\\Project3\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // import GoogleMapReact from 'google-map-react';
// import Marker from 'google-maps-react';


var MapContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MapContainer, _Component);

  var _super = _createSuper(MapContainer);

  function MapContainer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MapContainer);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MapContainer, [{
    key: "render",
    value: function render() {
      return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_6__["Map"], {
        google: this.props.google,
        zoom: 14,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7
        }
      }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_6__["Marker"], {
        onClick: this.onMarkerClick,
        name: 'Current location',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_6__["GoogleApiWrapper"])({
  apiKey: "AIzaSyAuyheENMul3n_eUNnx_bKEV7BFrpMaSGE"
})(MapContainer)); // const AnyReactComponent = ({ text }) => <div>{text}</div>;
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
//# sourceMappingURL=index.js.b186a35473c3d0db4ed3.hot-update.js.map