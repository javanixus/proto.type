webpackJsonp([1],{

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = __webpack_require__(74)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboards/students/project.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b4eda0b", Component.options)
  } else {
    hotAPI.reload("data-v-5b4eda0b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      hover: false,
      hasProject: true
    };
  }
});

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "project" } }, [
    _c("div", { staticClass: "project__content" }, [
      _c("div", { staticClass: "projectCore" }, [
        _vm.hasProject
          ? _c("div", { staticClass: "projectContentTitle" }, [
              _c("label", { attrs: { for: "projectItems" } }, [
                _vm._v("5 project showed")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.hasProject
          ? _c(
              "div",
              { staticClass: "marginTop-s", attrs: { id: "projectItems" } },
              [
                _vm._m(0, false, false),
                _vm._v(" "),
                _vm._m(1, false, false),
                _vm._v(" "),
                _vm._m(2, false, false),
                _vm._v(" "),
                _vm._m(3, false, false)
              ]
            )
          : _c("div", [_vm._m(4, false, false)])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "projectItems__item" }, [
      _c("div", {
        staticClass: "project__item__header",
        staticStyle: { "background-image": "url(/images/wallpaper.jpg)" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "project__item__content" }, [
        _c("div", { staticClass: "project__item__core__title" }, [
          _c("h5", [_vm._v("\n                  Project A\n                ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__content" }),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__footer" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "projectItems__item" }, [
      _c("span", { staticClass: "headlineProjectItem" }, [
        _vm._v("28 days left")
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "project__item__header",
        staticStyle: { "background-image": "url(/images/image.png)" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "project__item__content" }, [
        _c("div", { staticClass: "project__item__core__title" }, [
          _c("h5", [_vm._v("\n                  Project B\n                ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__content" }, [
          _c("div", { staticClass: "projectPeople" }, [
            _c("div", {
              staticClass: "avatar avatar--xxs avatar--border-white--2",
              staticStyle: { "background-image": "url(/images/avatar/1.jpg)" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "avatar avatar--xxs avatar--border-white--2",
              staticStyle: { "background-image": "url(/images/avatar/3.jpg)" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "avatar avatar--xxs avatar--border-white--2",
              staticStyle: { "background-image": "url(/images/avatar/2.jpg)" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__footer" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "projectItems__item" }, [
      _c("div", {
        staticClass: "project__item__header",
        staticStyle: { "background-image": "url(/images/image2.jpg)" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "project__item__content" }, [
        _c("div", { staticClass: "project__item__core__title" }, [
          _c("h5", [_vm._v("\n                  Project C\n                ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__content" }),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__footer" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "projectItems__item" }, [
      _c("div", {
        staticClass: "project__item__header",
        staticStyle: { "background-image": "url(/images/sample2.png)" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "project__item__content" }, [
        _c("div", { staticClass: "project__item__core__title" }, [
          _c("h5", [_vm._v("\n                  Project D\n                ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__content" }),
        _vm._v(" "),
        _c("div", { staticClass: "project__item__core__footer" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nothingShow" }, [
      _c("span", [_vm._v("Nothing to show")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b4eda0b", module.exports)
  }
}

/***/ })

});