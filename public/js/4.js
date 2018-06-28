webpackJsonp([4],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(90)
/* template */
var __vue_template__ = __webpack_require__(99)
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
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__students_popup_createproject__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__students_popup_createproject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__students_popup_createproject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__students_popup_menuprofile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__students_popup_menuprofile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__students_popup_menuprofile__);
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

// import newPopup from './../students/popup/new';



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loading: true
        };
    },
    components: {
        // 'new-popup' : newPopup,
        'create-project-popup': __WEBPACK_IMPORTED_MODULE_0__students_popup_createproject___default.a,
        'menu-profile-popup': __WEBPACK_IMPORTED_MODULE_1__students_popup_menuprofile___default.a
    },
    created: function created() {
        var _this = this;

        setTimeout(function () {
            _this.loading = false;
        }, 100);
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

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(94)
/* template */
var __vue_template__ = __webpack_require__(95)
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
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("0b15e3ea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737a428\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./createproject.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737a428\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./createproject.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 94:
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
            projectTitle: 'Name your new project 😍',
            secretPharse: 'pampam',
            output: '',
            dataFlow: 1,
            dataProcess: false,
            data: {
                dataLinked: false,
                dataEncrypt: true
            },
            encrypted: false
        };
    },
    methods: {
        close: function close() {
            this.$modal.hide('create-project');
        },
        swapData: function swapData(val) {
            this.dataFlow = val;
            console.log(this.data);
        },
        swapDataValidate: function swapDataValidate(val) {
            if (this.data.dataLinked === true) {
                this.dataFlow = val;
            } else {
                this.dataFlow = 4;
            }
        },
        create: function create() {
            console.log('create');
        }
    }
});

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      attrs: {
        name: "create-project",
        classes: "nice-modal",
        transition: "scale",
        reset: true,
        width: "500px",
        height: "auto",
        maxHeight: 500,
        clickToClose: false
      }
    },
    [
      _vm.dataFlow === 1
        ? _c("div", [
            _c("div", { staticClass: "createProjectPopup__header" }, [
              _c(
                "button",
                { staticClass: "btn--close", on: { click: _vm.close } },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "26",
                        height: "26",
                        viewBox: "0 0 26 26",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z",
                          fill: "currentColor",
                          "fill-rule": "nonzero"
                        }
                      })
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "createProjectPopup__content" }, [
              _c("div", { staticClass: "createProjectPopup__content__cover" }, [
                _c("img", { attrs: { src: "/images/block.svg", alt: "" } }),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.projectTitle))]),
                _vm._v(" "),
                _c("div", { staticClass: "createProjectCover--tips" }, [
                  _c("span", [
                    _vm._v(
                      "You can add emoticon 👏 beside your project title, make unique as possible regrads 🍻."
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("form", [
                _c(
                  "div",
                  { staticClass: "createProjectPopup__content__title" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.projectTitle,
                          expression: "projectTitle"
                        }
                      ],
                      staticClass: "input input--primary",
                      attrs: {
                        type: "text",
                        value: "Project title",
                        placeholder: "fill project title"
                      },
                      domProps: { value: _vm.projectTitle },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.projectTitle = $event.target.value
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "createProjectPopup__content__desc" },
                  [
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
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "createProjectPopup__footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn--primary paddingLeft-m paddingRight-m",
                  on: {
                    click: function($event) {
                      _vm.swapData(2)
                    }
                  }
                },
                [_vm._v("Next")]
              )
            ])
          ])
        : _vm.dataFlow === 2
          ? _c("div", [
              _c("div", { staticClass: "createProjectPopup__header" }, [
                _c(
                  "button",
                  { staticClass: "btn--close", on: { click: _vm.close } },
                  [
                    _c(
                      "svg",
                      {
                        attrs: {
                          width: "26",
                          height: "26",
                          viewBox: "0 0 26 26",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z",
                            fill: "currentColor",
                            "fill-rule": "nonzero"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "createProjectPopup__content" }, [
                _c(
                  "div",
                  { staticClass: "createProjectPopup__content__cover" },
                  [
                    _c("p", [_vm._v("This is about stacking the blocks.")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "createProjectCover--tips" }, [
                      _c("span", [
                        _vm._v(
                          "Some settings can be change anytime 😎 so dont be confused about it 👌."
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("form", [
                  _c(
                    "div",
                    { staticClass: "createProjectPopup__content__select" },
                    [
                      _c("label", [
                        _c("div", { staticClass: "checkbox--circle" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.dataLinked,
                                expression: "data.dataLinked"
                              }
                            ],
                            staticClass: "circle",
                            attrs: { type: "checkbox", id: "checkbox-linked" },
                            domProps: {
                              checked: Array.isArray(_vm.data.dataLinked)
                                ? _vm._i(_vm.data.dataLinked, null) > -1
                                : _vm.data.dataLinked
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.data.dataLinked,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.data,
                                        "dataLinked",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.data,
                                        "dataLinked",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.data, "dataLinked", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox-linked" } })
                        ]),
                        _vm._v(
                          "\n                        Enable linked project\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "select-details" }, [
                        _vm._v(
                          "\n                        When you enable linked project you grant to share your project to who you person linked.\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("label", [
                        _c("div", { staticClass: "checkbox--circle" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.dataEncrypt,
                                expression: "data.dataEncrypt"
                              }
                            ],
                            staticClass: "circle",
                            attrs: { type: "checkbox", id: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.data.dataEncrypt)
                                ? _vm._i(_vm.data.dataEncrypt, null) > -1
                                : _vm.data.dataEncrypt
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.data.dataEncrypt,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.data,
                                        "dataEncrypt",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.data,
                                        "dataEncrypt",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.data, "dataEncrypt", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox" } })
                        ]),
                        _vm._v(
                          "\n                        Enable encrypt 1.0 🔒\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "select-details" }, [
                        _vm._v(
                          "\n                        This is part of our services to secure your privacy from the hacker. We recommend to enable this if you have private project.\n                    "
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "createProjectPopup__footer" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn--primary btn--grey paddingLeft-m paddingRight-m",
                    on: {
                      click: function($event) {
                        _vm.swapData(1)
                      }
                    }
                  },
                  [_vm._v("Back")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn--primary paddingLeft-m paddingRight-m",
                    on: {
                      click: function($event) {
                        _vm.swapDataValidate(3)
                      }
                    }
                  },
                  [_vm._v("Next")]
                )
              ])
            ])
          : _vm.dataFlow === 3
            ? _c("div", [
                _c("div", { staticClass: "createProjectPopup__header" }, [
                  _c(
                    "button",
                    { staticClass: "btn--close", on: { click: _vm.close } },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            width: "26",
                            height: "26",
                            viewBox: "0 0 26 26",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z",
                              fill: "currentColor",
                              "fill-rule": "nonzero"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "createProjectPopup__content" }, [
                  _c(
                    "div",
                    { staticClass: "createProjectPopup__content__cover" },
                    [
                      _c("div", { staticClass: "connectBadge" }, [
                        _c("div", { staticClass: "avatar--heartbeat" }, [
                          _c("div", {
                            staticClass: "avatar marginMagic avatar--l",
                            staticStyle: {
                              "background-image": "url(/images/sample.jpg)"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticStyle: { width: "30px" } }),
                        _vm._v(" "),
                        _c("div", { staticClass: "avatar--heartbeat" }, [
                          _c("div", {
                            staticClass: "avatar avatar--l marginMagic",
                            staticStyle: {
                              "background-image":
                                "url(/images/avatar/people1.png)"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("Now choose person who want you connect.")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "createProjectCover--tips" }, [
                        _c("span", [
                          _vm._v(
                            "This setting will be applied permanently. In the future we acctualy make dis customizable / not longer permanently , so be carefull in taking action."
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("form", [
                    _c(
                      "div",
                      { staticClass: "createProjectPopup__content__select" },
                      [
                        _c("div", { staticClass: "select--item" }, [
                          _c("p", [_vm._v("Mentor select:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "select select--primary",
                              attrs: { name: "", id: "teacherSelect" }
                            },
                            [
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("Ires sapa lupa saya")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Melanoke Pramanik")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Bu Flowchart")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "4" } }, [
                                _vm._v("Javanixus")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select--item" }, [
                          _c("p", [_vm._v("Task select:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "select select--primary",
                              attrs: { name: "", id: "projectSelect" }
                            },
                            [
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("C++ projects")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Tugas akhir")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v("Php design")
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "createProjectPopup__footer" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn--primary btn--grey paddingLeft-m paddingRight-m",
                      on: {
                        click: function($event) {
                          _vm.swapData(2)
                        }
                      }
                    },
                    [_vm._v("Back")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn--primary paddingLeft-m paddingRight-m",
                      on: {
                        click: function($event) {
                          _vm.swapData(4)
                        }
                      }
                    },
                    [_vm._v("Next")]
                  )
                ])
              ])
            : _vm.dataFlow === 4
              ? _c("div", [
                  _c("div", { staticClass: "createProjectPopup__header" }, [
                    _vm.dataProcess === false
                      ? _c(
                          "button",
                          {
                            staticClass: "btn--close",
                            on: { click: _vm.close }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  width: "26",
                                  height: "26",
                                  viewBox: "0 0 26 26",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z",
                                    fill: "currentColor",
                                    "fill-rule": "nonzero"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.dataProcess
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "createProjectPopup__content" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "createProjectPopup__content__cover"
                              },
                              [
                                _c("p", [_vm._v("Almost done Hooray!")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "createProjectCover--tips" },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "Wait for a seconds , we are encrypting your project."
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "shield-pulse",
                                    staticStyle: { "padding-bottom": "100px" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "shield-pulse--core" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: "/images/blackShield.svg",
                                            alt: ""
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    : _c("div", [
                        _c(
                          "div",
                          { staticClass: "createProjectPopup__content" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "createProjectPopup__content__cover"
                              },
                              [
                                _c("p", [_vm._v(_vm._s(this.output))]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "createProjectCover--tips" },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "Now you can choose close the dialog popup or redirect to the project have you been created."
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "createProjectPopup__footer",
                            staticStyle: {
                              "text-align": "center!important",
                              "margin-top": "30px!important"
                            }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn--primary paddingLeft-m paddingRight-m",
                                on: { click: _vm.postData }
                              },
                              [_vm._v("Go to project")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn--primary paddingLeft-m paddingRight-m",
                                on: { click: _vm.getData }
                              },
                              [_vm._v("Get Decrypted Data")]
                            )
                          ]
                        )
                      ])
                ])
              : _vm._e()
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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(97)
/* template */
var __vue_template__ = __webpack_require__(98)
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
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 97:
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

/***/ 98:
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
        classes: "nice-modal",
        pivotX: 0.971,
        pivotY: 0.14,
        transition: "scale",
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
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "studentprofile" } } },
                  [_vm._v("Account Preferences")]
                )
              ],
              1
            ),
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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loading
    ? _c("div", [_vm._v("\n    loading...\n")])
    : _c("div", { attrs: { id: "dashstudent" } }, [
        _c("div", { staticClass: "dashstudent__content" }, [
          _c(
            "div",
            { staticClass: "nav navbar--primary", attrs: { id: "appHeader" } },
            [
              _c("div", { staticClass: "appHeader__content" }, [
                _c("div", { staticClass: "appHeader__content__navigation" }, [
                  _vm._m(0),
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
                          [_vm._v("Todos")]
                        )
                      ],
                      1
                    )
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
                          return _vm.createproject($event)
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
                      _vm._m(1),
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
                                return _vm.menuProfileClick($event)
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
    return _c(
      "div",
      { staticClass: "appHeader__content__logo", attrs: { role: "button" } },
      [
        _c("div", { staticClass: "logo-tag tag--red" }, [
          _vm._v("\n                            PT\n                        ")
        ])
      ]
    )
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