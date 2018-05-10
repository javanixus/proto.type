webpackJsonp([2],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(59)
/* template */
var __vue_template__ = __webpack_require__(71)
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
Component.options.__file = "resources/assets/js/components/dashboards/students/dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24a67586", Component.options)
  } else {
    hotAPI.reload("data-v-24a67586", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__students_popup_new__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__students_popup_new___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__students_popup_new__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__students_popup_createproject__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__students_popup_createproject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__students_popup_createproject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_popup_menuprofile__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_popup_menuprofile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__students_popup_menuprofile__);
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
    components: {
        'new-popup': __WEBPACK_IMPORTED_MODULE_0__students_popup_new___default.a,
        'create-project-popup': __WEBPACK_IMPORTED_MODULE_1__students_popup_createproject___default.a,
        'menu-profile-popup': __WEBPACK_IMPORTED_MODULE_2__students_popup_menuprofile___default.a
    },
    mounted: function mounted() {
        this.$modal.show('new');
    },

    methods: {
        createproject: function createproject() {
            this.$modal.show('create-project');
        },
        menuProfileClick: function menuProfileClick() {
            this.$modal.show('menu-profile');
        }
    }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(61)
/* template */
var __vue_template__ = __webpack_require__(62)
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
Component.options.__file = "resources/assets/js/components/dashboards/students/popup/new.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-258f102f", Component.options)
  } else {
    hotAPI.reload("data-v-258f102f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        close: function close() {
            this.$modal.hide('new');
        }
    }
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      staticClass: "overflow-disable",
      attrs: {
        name: "new",
        transtition: "nice-modal-fade",
        "min-width": 300,
        "min-height": 200,
        adaptive: true,
        reset: true,
        width: "30%",
        height: "auto",
        clickToClose: false
      }
    },
    [
      _c("div", { staticClass: "popupContent" }, [
        _c("div", { staticClass: "popupContent__images" }, [
          _c("div", { staticClass: "popupClose" }, [
            _c(
              "span",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.close($event)
                  }
                }
              },
              [_vm._v("x")]
            )
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "img-default",
            attrs: { src: "/images/image.png", alt: "our time" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "popupContent__images__dp" }, [
            _c("div", {
              staticClass: "avatar avatar--xl avatar--border-white--5",
              staticStyle: { "background-image": "url(/images/sample.jpg)" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "popupContent__desc" }, [
          _c("label", { attrs: { for: "information" } }, [
            _vm._v("\n                What's new ?\n            ")
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "informations" } }, [
            _c("span", [
              _vm._v(
                "\n                    flexible tools are designed for any project or workflow. Plan ahead, set priorities and track projects from start to finish.\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "informations__button" }, [
          _c(
            "button",
            { staticClass: "btn btn--big", attrs: { type: "submit" } },
            [_vm._v("More infos")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-258f102f", module.exports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(66)
/* template */
var __vue_template__ = __webpack_require__(67)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/components/dashboards/students/popup/createproject.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8737a428", Component.options)
  } else {
    hotAPI.reload("data-v-8737a428", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("4234fb0c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737a428\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./createproject.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737a428\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./createproject.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 66:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        close: function close() {
            this.$modal.hide('create-project');
        },
        create: function create() {
            console.log('create');
        }
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      staticClass: "overflow-disable",
      attrs: {
        name: "create-project",
        transtition: "nice-modal-fade",
        "min-width": 300,
        "min-height": 200,
        adaptive: true,
        reset: true,
        width: "38%",
        height: "auto",
        clickToClose: false
      }
    },
    [
      _c("div", { staticClass: "createProjectPopup__header" }, [
        _c("p", [_vm._v("Create a project")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "createProjectPopup__content" }, [
        _c("div", {
          staticClass: "createProjectPopup__content__cover",
          staticStyle: { "background-image": "url(/images/wallpaper.jpg)" }
        }),
        _vm._v(" "),
        _c("form", [
          _c("div", { staticClass: "createProjectPopup__content__title" }, [
            _c("input", {
              attrs: {
                type: "text",
                value: "Project title",
                placeholder: "fill project title"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "createProjectPopup__content__desc" }, [
            _c(
              "textarea",
              {
                attrs: {
                  name: "",
                  id: "",
                  rows: "8",
                  placeholder: "fill the desc"
                }
              },
              [
                _vm._v(
                  "We need to create a few different alternative for a colorfull, fun and vibrant sidebar. So far our best sources of inspirations are in bucket on the team."
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "createProjectPopup__footer" }, [
        _c(
          "button",
          {
            staticClass: "btn btn--big btn--danger",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.close($event)
              }
            }
          },
          [_vm._v("Cancel")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn--big", attrs: { type: "submit" } },
          [_vm._v("Create")]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8737a428", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(69)
/* template */
var __vue_template__ = __webpack_require__(70)
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
Component.options.__file = "resources/assets/js/components/dashboards/students/popup/menuprofile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-506905f9", Component.options)
  } else {
    hotAPI.reload("data-v-506905f9", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 69:
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      staticClass: "overflow-disable",
      attrs: {
        name: "menu-profile",
        pivotX: 0.971,
        pivotY: 0.24,
        transtition: "nice-modal-fade",
        "min-width": 270,
        "min-height": 200,
        adaptive: true,
        reset: true,
        width: "200px",
        height: "auto",
        clickToClose: true
      }
    },
    [
      _c("div", { staticClass: "menuProfile" }, [
        _c("div", { staticClass: "menuProfile__header" }, [
          _c("h5", [_vm._v("Fahmi irsyad k")]),
          _vm._v(" "),
          _c("p", [_vm._v("fahmiirsyad10@gmail.com")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "menuProfile__content" }, [
          _c("ul", [
            _c("li", [
              _c("a", { attrs: { href: "" } }, [_vm._v("Account Preferences")])
            ]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("Settings")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("Support")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("Logout")])])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-506905f9", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "dashstudent" } }, [
    _c("div", { staticClass: "dashstudent__content" }, [
      _vm._m(0, false, false),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "nav navbar--primary", attrs: { id: "appHeader" } },
        [
          _c("div", { staticClass: "appHeader__content" }, [
            _c("div", { staticClass: "appHeader__content__navigation" }, [
              _vm._m(1, false, false),
              _vm._v(" "),
              _c("ul", { staticClass: "navigationWrap-items" }, [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: { name: "studentproject" },
                          "active-class": "nav-active",
                          exact: ""
                        }
                      },
                      [_vm._v("Project")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: { name: "studentteam" },
                          "active-class": "nav-active"
                        }
                      },
                      [_vm._v("Team")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(2, false, false)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "appHeader__content__project" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn--primary",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.createproject($event)
                    }
                  }
                },
                [_vm._v("Create new project")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "appHeader__content__navigation--secondary" },
              [
                _c("ul", [
                  _vm._m(3, false, false),
                  _vm._v(" "),
                  _c("li", [
                    _c("div", { staticClass: "avatarWrap" }, [
                      _c("div", {
                        staticClass: "avatar avatar--xs avatarWrap",
                        staticStyle: {
                          "background-image": "url(/images/sample.jpg)"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.menuProfileClick($event)
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "appContent" } },
        [
          _c("router-view"),
          _vm._v(" "),
          _c("new-popup"),
          _vm._v(" "),
          _c("create-project-popup"),
          _vm._v(" "),
          _c("menu-profile-popup")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notif notif--primary" }, [
      _c("p", [
        _vm._v("Thanks you for using prototype 🎉 , here some "),
        _c("a", { attrs: { href: "javascript:void(0)" } }, [_vm._v("reward")]),
        _vm._v(" for you 🙌.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "appHeader__content__logo", attrs: { role: "button" } },
      [
        _c("div", { staticClass: "logo-tag tag--red" }, [
          _vm._v("\n                          PT\n                      ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("span", [_vm._v("Tasks")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("div", { staticClass: "searchWrap" }, [
        _c("div", { staticClass: "searchicon" }),
        _vm._v(" "),
        _c("input", {
          staticClass: "search",
          attrs: { type: "text", disabled: "", placeholder: "Search here..." }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24a67586", module.exports)
  }
}

/***/ })

});