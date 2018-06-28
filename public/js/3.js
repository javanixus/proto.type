webpackJsonp([3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_filepond__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_filepond___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_filepond__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_filepond_dist_filepond_min_css__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_filepond_dist_filepond_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_filepond_dist_filepond_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_filepond_plugin_file_encode__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_filepond_plugin_file_encode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_filepond_plugin_file_encode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_filepond_plugin_file_validate_type__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_filepond_plugin_file_validate_type___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_filepond_plugin_file_validate_type__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_filepond_plugin_image_exif_orientation__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_filepond_plugin_image_exif_orientation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_filepond_plugin_image_exif_orientation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_filepond_plugin_image_preview__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_filepond_plugin_image_preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_filepond_plugin_image_preview__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// Import FilePond styles


// Import image preview plugin styles


// Import image preview and file type validation plugins




var FilePond = __WEBPACK_IMPORTED_MODULE_0_vue_filepond___default()(__WEBPACK_IMPORTED_MODULE_4_filepond_plugin_file_validate_type___default.a, __WEBPACK_IMPORTED_MODULE_6_filepond_plugin_image_preview___default.a, __WEBPACK_IMPORTED_MODULE_3_filepond_plugin_file_encode___default.a, __WEBPACK_IMPORTED_MODULE_5_filepond_plugin_image_exif_orientation___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notifIsShow: true,
      myFiles: []
    };
  },
  methods: {
    notifClose: function notifClose() {
      if (this.notifIsShow === true) {
        return this.notifIsShow = false;
      }
    }
  },
  components: {
    FilePond: FilePond
  }
});

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-filepond v2.1.3
 * A handy FilePond adapter component for Vue
 * 
 * Copyright (c) 2018 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setOptions = undefined;

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _filepond = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Methods not made available to the component
var filteredComponentMethods = ['setOptions', 'on', 'off', 'onOnce', 'appendTo', 'insertAfter', 'insertBefore', 'isAttachedTo', 'replaceElement', 'restoreElement', 'destroy'];

// Test if is supported on this client
var isSupported = (0, _filepond.supported)();

// Setup initial prop types and update when plugins are added
var getNativeConstructorFromType = function getNativeConstructorFromType(type) {
    return {
        string: String,
        boolean: Boolean,
        array: Array,
        function: Function,
        int: Number,
        serverapi: Object
    }[type];
};

// Activated props
var props = {};

// Events that need to be mapped to emitters
var events = [];

// Props to watch
var watch = {};

// all active instances
var instances = [];

// global options
var globalOptions = {};
var setOptions = exports.setOptions = function setOptions(options) {
    globalOptions = Object.assign(globalOptions, options);
    instances.forEach(function (instance) {
        instance.setOptions(globalOptions);
    });
};

exports.default = function () {

    // register plugins in FilePond
    _filepond.registerPlugin.apply(undefined, arguments);

    // build events and props array
    events.length = 0;

    var _loop = function _loop(prop) {
        // don't add events to the props array
        if (/^on/.test(prop)) {
            events.push(prop);
            return 'continue';
        }

        // get property type ( can be either a String or the type defined within FilePond )
        props[prop] = [String, getNativeConstructorFromType(_filepond.OptionTypes[prop])];

        // setup watcher
        watch[prop] = function (value) {
            this._pond[prop] = value;
        };
    };

    for (var prop in _filepond.OptionTypes) {
        var _ret = _loop(prop);

        if (_ret === 'continue') continue;
    }

    // create 
    return _vue2.default.component('FilePond', {
        name: 'FilePond',
        props: props,
        watch: watch,
        render: function render(h) {
            return h('div', {
                'class': {
                    'filepond--wrapper': true
                }
            }, [h('input', {
                attrs: {
                    id: this.id,
                    name: this.name,
                    type: 'file',
                    'class': this.className,
                    required: this.required,
                    multiple: this.allowMultiple,
                    accept: this.acceptedFileTypes,
                    capture: this.captureMethod
                }
            })]);
        },

        // Will setup FilePond instance when mounted
        mounted: function mounted() {
            var _this = this;

            // exit here if not supported
            if (!isSupported) {
                return;
            }

            // get pond element
            this._element = this.$el.querySelector('input');

            // Map FilePond callback methods to Vue $emitters
            var options = events.reduce(function (obj, value) {
                obj[value] = function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _this.$emit.apply(_this, [value.substr(2)].concat(args));
                };
                return obj;
            }, {});

            // Scoop up attributes that might not have been caught by Vue ( because the props object is extended dynamically )
            var attrs = Object.assign({}, this.$attrs);

            // Create our pond
            this._pond = (0, _filepond.create)(this._element, Object.assign(globalOptions, options, attrs, this.$options.propsData));

            // Copy instance method references to component instance
            Object.keys(this._pond).filter(function (key) {
                return !filteredComponentMethods.includes(key);
            }).forEach(function (key) {
                _this[key] = _this._pond[key];
            });

            // Add to instances so we can apply global options when used
            instances.push(this._pond);
        },


        // Will clean up FilePond instance when unmounted
        beforeDestroy: function beforeDestroy() {
            // exit when no pond defined
            if (!this._pond) {
                return;
            }

            // bye bye pond
            this._pond.destroy();

            // remove from instances
            var index = instances.indexOf(this._pond);
            if (index >= 0) {
                instances.splice(index, 1);
            }
        }
    });
};




/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

/*
 * FilePond 1.8.0
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
(function(global, factory) {
   true
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : factory((global.FilePond = {}));
})(this, function(exports) {
  'use strict';

  var isNode = function isNode(value) {
    return value instanceof HTMLElement;
  };

  var _typeof =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(obj) {
          return typeof obj;
        }
      : function(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj;
        };

  var asyncGenerator = (function() {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function(resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(
              function(arg) {
                resume('next', arg);
              },
              function(arg) {
                resume('throw', arg);
              }
            );
          } else {
            settle(result.done ? 'return' : 'normal', result.value);
          }
        } catch (err) {
          settle('throw', err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case 'return':
            front.resolve({
              value: value,
              done: true
            });
            break;

          case 'throw':
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== 'function') {
        this.return = undefined;
      }
    }

    if (typeof Symbol === 'function' && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function(arg) {
      return this._invoke('next', arg);
    };

    AsyncGenerator.prototype.throw = function(arg) {
      return this._invoke('throw', arg);
    };

    AsyncGenerator.prototype.return = function(arg) {
      return this._invoke('return', arg);
    };

    return {
      wrap: function(fn) {
        return function() {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function(value) {
        return new AwaitValue(value);
      }
    };
  })();

  var _extends =
    Object.assign ||
    function(target) {
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

  var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var createStore = function createStore(initialState) {
    var queries =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var actions =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    // internal state
    var state = _extends({}, initialState);

    // contains all actions for next frame, is clear when actions are requested
    var actionQueue = [];
    var dispatchQueue = [];

    // returns a duplicate of the current state
    var getState = function getState() {
      return _extends({}, state);
    };

    // returns a duplicate of the actions array and clears the actions array
    var processActionQueue = function processActionQueue() {
      // create copy of actions queue
      var queue = [].concat(actionQueue);

      // clear actions queue (we don't want no double actions)
      actionQueue.length = 0;

      return queue;
    };

    // processes actions that might block the main UI thread
    var processDispatchQueue = function processDispatchQueue() {
      // create copy of actions queue
      var queue = [].concat(dispatchQueue);

      // clear actions queue (we don't want no double actions)
      dispatchQueue.length = 0;

      // now dispatch these actions
      queue.forEach(function(_ref) {
        var type = _ref.type,
          data = _ref.data;

        dispatch(type, data);
      });
    };

    // adds a new action, calls its handler and
    var dispatch = function dispatch(type, data, isBlocking) {
      // is blocking action
      if (isBlocking) {
        dispatchQueue.push({
          type: type,
          data: data
        });
        return;
      }

      // if this action has a handler, handle the action
      if (actionHandlers[type]) {
        actionHandlers[type](data);
      }

      // now add action
      actionQueue.push({
        type: type,
        data: data
      });
    };

    var query = function query(str) {
      var _queryHandles;

      for (
        var _len = arguments.length,
          args = Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }

      return queryHandles[str]
        ? (_queryHandles = queryHandles)[str].apply(_queryHandles, args)
        : null;
    };

    var api = {
      getState: getState,
      processActionQueue: processActionQueue,
      processDispatchQueue: processDispatchQueue,
      dispatch: dispatch,
      query: query
    };

    var queryHandles = {};
    queries.forEach(function(query) {
      queryHandles = _extends({}, query(state), queryHandles);
    });

    var actionHandlers = {};
    actions.forEach(function(action) {
      actionHandlers = _extends(
        {},
        action(dispatch, query, state),
        actionHandlers
      );
    });

    return api;
  };

  var defineProperty$1 = function defineProperty$$1(obj, property, definition) {
    if (typeof definition === 'function') {
      obj[property] = definition;
      return;
    }
    Object.defineProperty(obj, property, _extends({}, definition));
  };

  var forin = function forin(obj, cb) {
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }

      cb(key, obj[key]);
    }
  };

  var createObject = function createObject(definition) {
    var obj = {};
    forin(definition, function(property) {
      defineProperty$1(obj, property, definition[property]);
    });
    return obj;
  };

  var attr = function attr(node, name) {
    var value =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (value === null) {
      return node.getAttribute(name) || node.hasAttribute(name);
    }
    node.setAttribute(name, value);
  };

  var ns = 'http://www.w3.org/2000/svg';
  var svgElements = ['svg', 'path']; // only svg elements used

  var isSVGElement = function isSVGElement(tag) {
    return svgElements.includes(tag);
  };

  var createElement = function createElement(tag, className) {
    var attributes =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (
      (typeof className === 'undefined' ? 'undefined' : _typeof(className)) ===
      'object'
    ) {
      attributes = className;
      className = null;
    }
    var element = isSVGElement(tag)
      ? document.createElementNS(ns, tag)
      : document.createElement(tag);
    if (className) {
      if (isSVGElement(tag)) {
        attr(element, 'class', className);
      } else {
        element.className = className;
      }
    }
    forin(attributes, function(name, value) {
      attr(element, name, value);
    });
    return element;
  };

  var appendChild = function appendChild(parent) {
    return function(child, index) {
      if (typeof index !== 'undefined' && parent.children[index]) {
        parent.insertBefore(child, parent.children[index]);
      } else {
        parent.appendChild(child);
      }
    };
  };

  var appendChildView = function appendChildView(parent, childViews) {
    return function(view, index) {
      // todo: expand with location and target option (child, 'before', target)

      if (typeof index !== 'undefined') {
        childViews.splice(index, 0, view);
      } else {
        childViews.push(view);
      }

      return view;
    };
  };

  var removeChildView = function removeChildView(parent, childViews) {
    return function(view) {
      // remove from child views
      childViews.splice(childViews.indexOf(view), 1);

      // remove the element
      if (view.element.parentNode) {
        parent.removeChild(view.element);
      }

      return view;
    };
  };

  var getViewRect = function getViewRect(
    elementRect,
    childViews,
    offset,
    scale
  ) {
    var left = offset[0] || elementRect.left;
    var top = offset[1] || elementRect.top;
    var right = left + elementRect.width;
    var bottom = top + elementRect.height * (scale[1] || 1);

    var rect = {
      // the rectangle of the element itself
      element: _extends({}, elementRect),

      // the rectangle of the element expanded to contain its children, does not include any margins
      inner: {
        left: elementRect.left,
        top: elementRect.top,
        right: elementRect.right,
        bottom: elementRect.bottom
      },

      // the rectangle of the element expanded to contain its children including own margin and child margins
      // margins will be added after we've recalculated the size
      outer: {
        left: left,
        top: top,
        right: right,
        bottom: bottom
      }
    };

    // expand rect to fit all child rectangles
    childViews
      .filter(function(childView) {
        return !childView.isRectIgnored();
      })
      .map(function(childView) {
        return childView.rect;
      })
      .forEach(function(childViewRect) {
        expandRect(rect.inner, _extends({}, childViewRect.inner));
        expandRect(rect.outer, _extends({}, childViewRect.outer));
      });

    // calculate inner width and height
    calculateRectSize(rect.inner);

    // append additional margin (top and left margins are included in top and left automatically)
    rect.outer.bottom += rect.element.marginBottom;
    rect.outer.right += rect.element.marginRight;

    // calculate outer width and height
    calculateRectSize(rect.outer);

    return rect;
  };

  var expandRect = function expandRect(parent, child) {
    // adjust for parent offset
    child.top += parent.top;
    child.right += parent.left;
    child.bottom += parent.top;
    child.left += parent.left;

    if (child.bottom > parent.bottom) {
      parent.bottom = child.bottom;
    }

    if (child.right > parent.right) {
      parent.right = child.right;
    }
  };

  var calculateRectSize = function calculateRectSize(rect) {
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
  };

  var isNumber = function isNumber(value) {
    return typeof value === 'number';
  };

  /**
   * Determines if position is at destination
   * @param position
   * @param destination
   * @param velocity
   * @param errorMargin
   * @returns {boolean}
   */
  var thereYet = function thereYet(position, destination, velocity) {
    var errorMargin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.001;

    return (
      Math.abs(position - destination) < errorMargin &&
      Math.abs(velocity) < errorMargin
    );
  };

  /**
   * Spring animation
   */
  var spring =
    // default options
    function spring() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$stiffness = _ref.stiffness,
        stiffness = _ref$stiffness === undefined ? 0.5 : _ref$stiffness,
        _ref$damping = _ref.damping,
        damping = _ref$damping === undefined ? 0.75 : _ref$damping,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 10 : _ref$mass;

      var target = null;
      var position = null;
      var velocity = 0;
      var resting = false;

      // updates spring state
      var interpolate = function interpolate() {
        // in rest, don't animate
        if (resting) {
          return;
        }

        // need at least a target or position to do springy things
        if (!(isNumber(target) && isNumber(position))) {
          resting = true;
          velocity = 0;
          return;
        }

        // calculate spring force
        var f = -(position - target) * stiffness;

        // update velocity by adding force based on mass
        velocity += f / mass;

        // update position by adding velocity
        position += velocity;

        // slow down based on amount of damping
        velocity *= damping;

        // we've arrived if we're near target and our velocity is near zero
        if (thereYet(position, target, velocity)) {
          position = target;
          velocity = 0;
          resting = true;

          // we done
          api.onupdate(position);
          api.oncomplete(position);
        } else {
          // progress update
          api.onupdate(position);
        }
      };

      /**
       * Set new target value
       * @param value
       */
      var setTarget = function setTarget(value) {
        // if currently has no position, set target and position to this value
        if (isNumber(value) && !isNumber(position)) {
          position = value;
        }

        // let start moving to target
        target = value;

        // already at target
        if (position === target || typeof target === 'undefined') {
          // now resting as target is current position, stop moving
          resting = true;
          velocity = 0;

          // done!
          api.onupdate(position);
          api.oncomplete(position);

          return;
        }

        resting = false;
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          set: setTarget,
          get: function get() {
            return target;
          }
        },
        resting: {
          get: function get() {
            return resting;
          }
        },
        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var easeInOutQuad = function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  var tween =
    // default values
    function tween() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 500 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === undefined ? easeInOutQuad : _ref$easing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay;

      var start = null;
      var t = void 0;
      var p = void 0;
      var resting = true;
      var reverse = false;
      var target = null;

      var interpolate = function interpolate(ts) {
        if (resting || target === null) {
          return;
        }

        if (start === null) {
          start = ts;
        }

        if (ts - start < delay) {
          return;
        }

        t = ts - start - delay;

        if (t < duration) {
          p = t / duration;
          api.onupdate((t >= 0 ? easing(reverse ? 1 - p : p) : 0) * target);
        } else {
          t = 1;
          resting = true;
          p = reverse ? 0 : 1;
          api.onupdate(p * target);
          api.oncomplete(p * target);
        }
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          get: function get() {
            return reverse ? 0 : target;
          },
          set: function set(value) {
            // is initial value
            if (target === null) {
              target = value;
              api.onupdate(value);
              api.oncomplete(value);
              return;
            }

            // want to tween to a smaller value and have a current value
            if (value < target) {
              target = 1;
              reverse = true;
            } else {
              // not tweening to a smaller value
              reverse = false;
              target = value;
            }

            // let's go!
            resting = false;
            start = null;
          }
        },
        resting: {
          get: function get() {
            return resting;
          }
        },
        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var animator = {
    spring: spring,
    tween: tween
  };

  /*
 { type: 'spring', stiffness: .5, damping: .75, mass: 10 };
 { translation: { type: 'spring', ... }, ... }
 { translation: { x: { type: 'spring', ... } } }
*/
  var createAnimator = function createAnimator(definition, category, property) {
    // default is single definition
    // we check if transform is set, if so, we check if property is set
    var def =
      definition[category] &&
      _typeof(definition[category][property]) === 'object'
        ? definition[category][property]
        : definition[category] || definition;

    var type = typeof def === 'string' ? def : def.type;
    var props =
      (typeof def === 'undefined' ? 'undefined' : _typeof(def)) === 'object'
        ? _extends({}, def)
        : {};

    return animator[type] ? animator[type](props) : null;
  };

  var addGetSet = function addGetSet(keys, obj, props) {
    var overwrite =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    obj = Array.isArray(obj) ? obj : [obj];
    obj.forEach(function(o) {
      keys.forEach(function(key) {
        var name = key;
        var getter = function getter() {
          return props[key];
        };
        var setter = function setter(value) {
          return (props[key] = value);
        };

        if (
          (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object'
        ) {
          name = key.key;
          getter = key.getter || getter;
          setter = key.setter || setter;
        }

        if (o[name] && !overwrite) {
          return;
        }

        o[name] = {
          get: getter,
          set: setter
        };
      });
    });
  };

  var isEmpty = function isEmpty(value) {
    return value == null;
  };

  var isDefined = function isDefined(value) {
    return !isEmpty(value);
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // setup animators

  var animations = function animations(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI;

    // initial properties
    var initialProps = _extends({}, viewProps);

    // list of all active animations
    var animations = [];

    // setup animators
    forin(mixinConfig, function(property, animation) {
      var animator = createAnimator(animation);
      if (!animator) {
        return;
      }

      // when the animator updates, update the view state value
      animator.onupdate = function(value) {
        viewProps[property] = value;
      };

      // set animator target
      animator.target = initialProps[property];

      // when value is set, set the animator target value
      var prop = {
        key: property,
        setter: function setter(value) {
          // if already at target, we done!
          if (animator.target === value) {
            return;
          }

          animator.target = value;
        },
        getter: function getter() {
          return viewProps[property];
        }
      };

      // add getters and setters
      addGetSet([prop], [viewInternalAPI, viewExternalAPI], viewProps, true);

      // add it to the list for easy updating from the _write method
      animations.push(animator);
    });

    // expose internal write api
    return {
      write: function write(ts) {
        var resting = true;
        animations.forEach(function(animation) {
          animation.interpolate(ts);
          if (!animation.resting) {
            resting = false;
          }
        });
        return resting;
      },
      destroy: function destroy() {}
    };
  };

  var addEvent = function addEvent(element) {
    return function(type, fn) {
      element.addEventListener(type, fn);
    };
  };

  var removeEvent = function removeEvent(element) {
    return function(type, fn) {
      element.removeEventListener(type, fn);
    };
  };

  // mixin
  var listeners = function listeners(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      viewState = _ref.viewState,
      view = _ref.view;

    var events = [];

    var add = addEvent(view.element);
    var remove = removeEvent(view.element);

    viewExternalAPI.on = function(type, fn) {
      events.push({
        type: type,
        fn: fn
      });
      add(type, fn);
    };

    viewExternalAPI.off = function(type, fn) {
      events.splice(
        events.findIndex(function(event) {
          return event.type === type && event.fn === fn;
        }),
        1
      );
      remove(type, fn);
    };

    return {
      write: function write() {
        // not busy
        return true;
      },
      destroy: function destroy() {
        events.forEach(function(event) {
          remove(event.type, event.fn);
        });
      }
    };
  };

  // add to external api and link to props

  var apis = function apis(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewExternalAPI = _ref.viewExternalAPI;

    addGetSet(mixinConfig, viewExternalAPI, viewProps);
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // set initial state based on props in viewProps
  // apply as transforms each frame

  var defaults$1 = {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  };

  var styles = function styles(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      view = _ref.view;

    // initial props
    var initialProps = _extends({}, viewProps);

    // current props
    var currentProps = {};

    // we will add those properties to the external API and link them to the viewState
    addGetSet(mixinConfig, [viewInternalAPI, viewExternalAPI], viewProps);

    // override rect on internal and external rect getter so it takes in account transforms
    var getOffset = function getOffset() {
      return [viewProps['translateX'] || 0, viewProps['translateY'] || 0];
    };
    var getScale = function getScale() {
      return [viewProps['scaleX'] || 0, viewProps['scaleY'] || 0];
    };
    var getRect = function getRect() {
      return view.rect
        ? getViewRect(view.rect, view.childViews, getOffset(), getScale())
        : null;
    };
    viewInternalAPI.rect = { get: getRect };
    viewExternalAPI.rect = { get: getRect };

    // apply view props
    mixinConfig.forEach(function(key) {
      viewProps[key] =
        typeof initialProps[key] === 'undefined'
          ? defaults$1[key]
          : initialProps[key];
    });

    // expose api
    return {
      write: function write() {
        // see if props have changed
        if (!propsHaveChanged(currentProps, viewProps)) {
          return;
        }

        // moves element to correct position on screen
        applyStyles(view.element, viewProps);

        // store new transforms
        Object.assign.apply(
          Object,
          [currentProps].concat(toConsumableArray(viewProps))
        );

        // no longer busy
        return true;
      },
      destroy: function destroy() {}
    };
  };

  var propsHaveChanged = function propsHaveChanged(currentProps, newProps) {
    // different amount of keys
    if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
      return true;
    }

    // lets analyze the individual props
    for (var prop in newProps) {
      if (newProps[prop] !== currentProps[prop]) {
        return true;
      }
    }

    return false;
  };

  var applyStyles = function applyStyles(element, _ref2) {
    var opacity = _ref2.opacity,
      translateX = _ref2.translateX,
      translateY = _ref2.translateY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      rotateX = _ref2.rotateX,
      rotateY = _ref2.rotateY,
      rotateZ = _ref2.rotateZ,
      height = _ref2.height;

    var transforms = [];
    var styles = [];

    // transform order is relevant

    // 1. translate
    if (isDefined(translateX) || isDefined(translateY)) {
      transforms.push(
        'translate3d(' +
          (translateX || 0) +
          'px, ' +
          (translateY || 0) +
          'px, 0)'
      );
    }

    // 2. scale
    if (isDefined(scaleX) || isDefined(scaleY)) {
      transforms.push(
        'scale3d(' +
          (isDefined(scaleX) ? scaleX : 1) +
          ', ' +
          (isDefined(scaleY) ? scaleY : 1) +
          ', 1)'
      );
    }

    // 3. rotate
    if (isDefined(rotateZ) || isDefined(rotateY) || isDefined(rotateX)) {
      transforms.push(
        'rotate3d(' +
          (rotateX || 0) +
          ', ' +
          (rotateY || 0) +
          ', ' +
          (rotateZ || 0) +
          ', 360deg)'
      );
    }

    // add transforms
    if (transforms.length) {
      styles.push('transform:' + transforms.join(' '));
    }

    // add opacity
    if (isDefined(opacity)) {
      styles.push('opacity:' + opacity);

      // if we reach zero, we make the element inaccessible
      if (opacity === 0) {
        styles.push('visibility:hidden');
      }

      // if we're below 100% opacity this element can't be clicked
      if (opacity < 1) {
        styles.push('pointer-events:none;');
      }
    }

    // add height
    if (isDefined(height)) {
      styles.push('height:' + height + 'px');
    }

    // apply styles
    var currentStyles = element.getAttribute('style') || '';
    var newStyles = styles.join(';');

    // if new styles does not match current styles, lets update!
    if (
      newStyles.length !== currentStyles.length ||
      newStyles !== currentStyles
    ) {
      element.setAttribute('style', newStyles);
    }
  };

  var Mixins = {
    styles: styles,
    listeners: listeners,
    animations: animations,
    apis: apis
  };

  var updateRect = function updateRect() {
    var rect =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var element =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var style =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
    rect.marginTop = parseInt(style.marginTop, 10) || 0;
    rect.marginRight = parseInt(style.marginRight, 10) || 0;
    rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
    rect.marginLeft = parseInt(style.marginLeft, 10) || 0;

    rect.left = element.offsetLeft || 0;
    rect.top = element.offsetTop || 0;
    rect.width = element.offsetWidth || 0;
    rect.height = element.offsetHeight || 0;

    rect.right = rect.left + rect.width;
    rect.bottom = rect.top + rect.height;

    rect.scrollTop = element.scrollTop;

    rect.hidden = element.offsetParent === null;

    return rect;
  };

  var createView =
    // default view definition
    function createView() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$tag = _ref.tag,
        tag = _ref$tag === undefined ? 'div' : _ref$tag,
        _ref$name = _ref.name,
        name = _ref$name === undefined ? null : _ref$name,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === undefined ? {} : _ref$attributes,
        _ref$read = _ref.read,
        read = _ref$read === undefined ? function() {} : _ref$read,
        _ref$write = _ref.write,
        write = _ref$write === undefined ? function() {} : _ref$write,
        _ref$create = _ref.create,
        create = _ref$create === undefined ? function() {} : _ref$create,
        _ref$destroy = _ref.destroy,
        destroy = _ref$destroy === undefined ? function() {} : _ref$destroy,
        _ref$filterFrameActio = _ref.filterFrameActionsForChild,
        filterFrameActionsForChild =
          _ref$filterFrameActio === undefined
            ? function(child, actions) {
                return actions;
              }
            : _ref$filterFrameActio,
        _ref$didCreateView = _ref.didCreateView,
        didCreateView =
          _ref$didCreateView === undefined ? function() {} : _ref$didCreateView,
        _ref$ignoreRect = _ref.ignoreRect,
        ignoreRect = _ref$ignoreRect === undefined ? false : _ref$ignoreRect,
        _ref$mixins = _ref.mixins,
        mixins = _ref$mixins === undefined ? [] : _ref$mixins;

      return function(
        // each view requires reference to store
        store
      ) {
        var props =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};

        // root element should not be changed
        var element = createElement(tag, 'filepond--' + name, attributes);

        // style reference should also not be changed
        var style = window.getComputedStyle(element, null);

        // element rectangle
        var rect = updateRect();
        var frameRect = null;

        // pretty self explanatory
        var childViews = [];

        // loaded mixins
        var activeMixins = [];

        // references to created children
        var ref = {};

        // state used for each instance
        var state = {};

        // list of writers that will be called to update this view
        var writers = [
          write // default writer
        ];

        var readers = [
          read // default reader
        ];

        var destroyers = [
          destroy // default destroy
        ];

        // core view methods
        var getElement = function getElement() {
          return element;
        };
        var getChildViews = function getChildViews() {
          return [].concat(childViews);
        };
        var getReference = function getReference() {
          return ref;
        };
        var createChildView = function createChildView(store) {
          return function(view, props) {
            return view(store, props);
          };
        };
        var getRect = function getRect() {
          if (frameRect) {
            return frameRect;
          }
          frameRect = getViewRect(rect, childViews, [0, 0], [1, 1]);
          return frameRect;
        };
        var getStyle = function getStyle() {
          return style;
        };

        /**
         * Read data from DOM
         * @private
         */
        var _read = function _read() {
          frameRect = null;

          // read child views
          childViews.forEach(function(child) {
            return child._read();
          });

          // update my rectangle
          updateRect(rect, element, style);

          // writers
          readers.forEach(function(reader) {
            return reader({ root: internalAPI, props: props, rect: rect });
          });
        };

        /**
         * Write data to DOM
         * @private
         */
        var _write = function _write(ts) {
          var frameActions =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];

          // if no actions, we assume that the view is resting
          var resting = frameActions.length === 0;

          // writers
          writers.forEach(function(writer) {
            var writerResting = writer({
              props: props,
              root: internalAPI,
              actions: frameActions,
              timestamp: ts
            });
            if (writerResting === false) {
              resting = false;
            }
          });

          // run mixins
          activeMixins.forEach(function(mixin) {
            // if one of the mixins is still busy after write operation, we are not resting
            var mixinResting = mixin.write(ts);
            if (mixinResting === false) {
              resting = false;
            }
          });

          // updates child views that are currently attached to the DOM
          childViews
            .filter(function(child) {
              return !!child.element.parentNode;
            })
            .forEach(function(child) {
              // if a child view is not resting, we are not resting
              var childResting = child._write(
                ts,
                filterFrameActionsForChild(child, frameActions)
              );
              if (!childResting) {
                resting = false;
              }
            });

          // append new elements to DOM and update those
          childViews
            .filter(function(child) {
              return !child.element.parentNode;
            })
            .forEach(function(child, index) {
              // append to DOM
              internalAPI.appendChild(child.element, index);

              // call read (need to know the size of these elements)
              child._read();

              // re-call write
              child._write(ts, filterFrameActionsForChild(child, frameActions));

              // we just added somthing to the dom, no rest
              resting = false;
            });

          // let parent know if we are resting
          return resting;
        };

        var _destroy = function _destroy() {
          activeMixins.forEach(function(mixin) {
            return mixin.destroy();
          });
          destroyers.forEach(function(destroyer) {
            return destroyer({ root: internalAPI });
          });
          childViews.forEach(function(child) {
            return child._destroy();
          });
        };

        // sharedAPI
        var sharedAPIDefinition = {
          element: {
            get: getElement
          },
          style: {
            get: getStyle
          },
          childViews: {
            get: getChildViews
          }
        };

        // private API definition
        var internalAPIDefinition = _extends({}, sharedAPIDefinition, {
          rect: {
            get: getRect
          },

          // access to custom children references
          ref: {
            get: getReference
          },

          // dom modifiers
          is: function is(needle) {
            return name === needle;
          },
          appendChild: appendChild(element),
          createChildView: createChildView(store),
          appendChildView: appendChildView(element, childViews),
          removeChildView: removeChildView(element, childViews),
          registerWriter: function registerWriter(writer) {
            return writers.push(writer);
          },
          registerReader: function registerReader(reader) {
            return readers.push(reader);
          },

          // access to data store
          dispatch: store.dispatch,
          query: store.query
        });

        // public view API methods
        var externalAPIDefinition = {
          element: {
            get: getElement
          },
          childViews: {
            get: getChildViews
          },
          rect: {
            get: getRect
          },
          isRectIgnored: function isRectIgnored() {
            return ignoreRect;
          },
          _read: _read,
          _write: _write,
          _destroy: _destroy
        };

        // mixin API methods
        var mixinAPIDefinition = _extends({}, sharedAPIDefinition, {
          rect: {
            get: function get$$1() {
              return rect;
            }
          }
        });

        // add mixin functionality
        Object.keys(mixins)
          .sort(function(a, b) {
            // move styles to the back of the mixin list (so adjustments of other mixins are applied to the props correctly)
            if (a === 'styles') {
              return 1;
            } else if (b === 'styles') {
              return -1;
            }
            return 0;
          })
          .forEach(function(key) {
            var mixinAPI = Mixins[key]({
              mixinConfig: mixins[key],
              viewProps: props,
              viewState: state,
              viewInternalAPI: internalAPIDefinition,
              viewExternalAPI: externalAPIDefinition,
              view: createObject(mixinAPIDefinition)
            });

            if (mixinAPI) {
              activeMixins.push(mixinAPI);
            }
          });

        // construct private api
        var internalAPI = createObject(internalAPIDefinition);

        // create the view
        create({
          root: internalAPI,
          props: props
        });

        // append created child views to root node
        var childCount = element.children.length; // need to know the current child count so appending happens in correct order
        childViews.forEach(function(child, index) {
          internalAPI.appendChild(child.element, childCount + index);
        });

        // call did create
        didCreateView(internalAPI);

        // expose public api
        return createObject(externalAPIDefinition, props);
      };
    };

  var createPainter = function createPainter(update) {
    var fps =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

    var interval = 1000 / fps;
    var last = null;
    var frame = null;

    var tick = function tick(ts) {
      // queue next tick
      frame = window.requestAnimationFrame(tick);

      // limit fps
      if (!last) {
        last = ts;
      }

      var delta = ts - last;

      if (delta <= interval) {
        // skip frame
        return;
      }

      // align next frame
      last = ts - delta % interval;

      // update view
      update(ts);
    };

    tick(performance.now());

    return {
      pause: function pause() {
        window.cancelAnimationFrame(frame);
      }
    };
  };

  var createUpdater = function createUpdater(apps, reader, writer) {
    return function(ts) {
      // all reads first (as these are free at the start of the frame)
      apps.forEach(function(app) {
        return app[reader]();
      });

      // now update the DOM
      apps.forEach(function(app) {
        return app[writer](ts);
      });
    };
  };

  var createRoute = function createRoute(routes) {
    return function(_ref) {
      var root = _ref.root,
        props = _ref.props,
        _ref$actions = _ref.actions,
        actions = _ref$actions === undefined ? [] : _ref$actions;

      actions
        .filter(function(action) {
          return routes[action.type];
        })
        .forEach(function(action) {
          return routes[action.type]({
            root: root,
            props: props,
            action: action.data
          });
        });
    };
  };

  var insertBefore = function insertBefore(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode);
  };

  var insertAfter = function insertAfter(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(
      newNode,
      referenceNode.nextSibling
    );
  };

  var isArray = function isArray(value) {
    return Array.isArray(value);
  };

  var trim = function trim(str) {
    return str.trim();
  };

  var toString = function toString(value) {
    return '' + value;
  };

  var toArray$1 = function toArray(value) {
    var splitter =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

    if (isEmpty(value)) {
      return [];
    }
    if (isArray(value)) {
      return value;
    }
    return toString(value)
      .split(splitter)
      .map(trim)
      .filter(function(str) {
        return str.length;
      });
  };

  var isBoolean = function isBoolean(value) {
    return typeof value === 'boolean';
  };

  var toBoolean = function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true';
  };

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var toNumber = function toNumber(value) {
    return isNumber(value)
      ? value
      : isString(value) ? toString(value).replace(/[a-z]+/gi, '') : 0;
  };

  var toInt = function toInt(value) {
    return parseInt(toNumber(value), 10);
  };

  var toFloat = function toFloat(value) {
    return parseFloat(toNumber(value));
  };

  var isInt = function isInt(value) {
    return isNumber(value) && isFinite(value) && Math.floor(value) === value;
  };

  var toBytes = function toBytes(value) {
    // is in bytes
    if (isInt(value)) {
      return value;
    }

    // is natural file size
    var naturalFileSize = toString(value).trim();

    // if is value in megabytes
    if (/MB$/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/MB$i/, '').trim();
      return toInt(naturalFileSize) * 1000 * 1000;
    }

    // if is value in kilobytes
    if (/KB/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/KB$i/, '').trim();
      return toInt(naturalFileSize) * 1000;
    }

    return toInt(naturalFileSize);
  };

  var toFunctionReference = function toFunctionReference(string) {
    var ref = self;
    var levels = string.split('.');
    var level = null;
    while ((level = levels.shift())) {
      ref = ref[level];
      if (!ref) {
        return null;
      }
    }
    return ref;
  };

  var methods = {
    process: 'POST',
    revert: 'DELETE',
    fetch: 'GET',
    restore: 'GET',
    load: 'GET'
  };

  var createServerAPI = function createServerAPI(outline) {
    var api = {};

    api.url = isString(outline) ? outline : outline.url || '';
    api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 7000;

    forin(methods, function(key) {
      api[key] = createAction(key, outline[key], methods[key], api.timeout);
    });

    return api;
  };

  var createAction = function createAction(name, outline, method, timeout) {
    // is explicitely set to null so disable
    if (outline === null) {
      return null;
    }

    // if is custom function, done! Dev handles everything.
    if (typeof outline === 'function') {
      return outline;
    }

    // build action object
    var action = {
      url: method === 'GET' ? '?' + name + '=' : '',
      method: method,
      headers: {},
      withCredentials: false,
      timeout: timeout,
      onload: null,
      onerror: null
    };

    // is a single url
    if (isString(outline)) {
      action.url = outline;
      return action;
    }

    // overwrite
    Object.assign(action, outline);

    // see if should reformat headers;
    if (isString(action.headers)) {
      var parts = action.headers.split(/:(.+)/);
      action.headers = {
        header: parts[0],
        value: parts[1]
      };
    }

    // if is bool withCredentials
    action.withCredentials = toBoolean(action.withCredentials);

    return action;
  };

  var toServerAPI = function toServerAPI(value) {
    return createServerAPI(value);
  };

  var isNull = function isNull(value) {
    return value === null;
  };

  var isObject = function isObject(value) {
    return (
      (typeof value === 'undefined' ? 'undefined' : _typeof(value)) ===
        'object' && value !== null
    );
  };

  var isAPI = function isAPI(value) {
    return (
      isObject(value) &&
      isString(value.url) &&
      isObject(value.process) &&
      isObject(value.revert) &&
      isObject(value.restore) &&
      isObject(value.fetch)
    );
  };

  var getType = function getType(value) {
    if (isArray(value)) {
      return 'array';
    }

    if (isNull(value)) {
      return 'null';
    }

    if (isInt(value)) {
      return 'int';
    }

    if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
      return 'bytes';
    }

    if (isAPI(value)) {
      return 'api';
    }

    return typeof value === 'undefined' ? 'undefined' : _typeof(value);
  };

  var replaceSingleQuotes = function replaceSingleQuotes(str) {
    return str
      .replace(/{\s*'/g, '{"')
      .replace(/'\s*}/g, '"}')
      .replace(/'\s*:/g, '":')
      .replace(/:\s*'/g, ':"')
      .replace(/,\s*'/g, ',"')
      .replace(/'\s*,/g, '",');
  };

  var conversionTable = {
    array: toArray$1,
    boolean: toBoolean,
    int: function int(value) {
      return getType(value) === 'bytes' ? toBytes(value) : toInt(value);
    },
    float: toFloat,
    bytes: toBytes,
    string: toString,
    serverapi: toServerAPI,
    object: function object(value) {
      try {
        return JSON.parse(replaceSingleQuotes(value));
      } catch (e) {
        return null;
      }
    },
    function: function _function(value) {
      return toFunctionReference(value);
    }
  };

  var convertTo = function convertTo(value, type) {
    return conversionTable[type](value);
  };

  var getValueByType = function getValueByType(
    newValue,
    defaultValue,
    valueType
  ) {
    // can always assign default value
    if (newValue === defaultValue) {
      return newValue;
    }

    // get the type of the new value
    var newValueType = getType(newValue);

    // is valid type?
    if (newValueType !== valueType) {
      // is string input, let's attempt to convert
      var convertedValue = convertTo(newValue, valueType);

      // what is the type now
      newValueType = getType(convertedValue);

      // no valid conversions found
      if (convertedValue === null) {
        throw 'Trying to assign value with incorrect type to "' +
          option +
          '", allowed type: "' +
          valueType +
          '"';
      } else {
        newValue = convertedValue;
      }
    }

    // assign new value
    return newValue;
  };

  var createOption = function createOption(option, defaultValue, valueType) {
    var currentValue = defaultValue;

    return {
      get: function get() {
        return currentValue;
      },
      set: function set(newValue) {
        currentValue = getValueByType(newValue, defaultValue, valueType);
      }
    };
  };

  var createOptions = function createOptions(options) {
    var obj = {};
    forin(options, function(prop) {
      var optionDefinition = options[prop];
      obj[prop] = createOption(prop, optionDefinition[0], optionDefinition[1]);
    });
    return createObject(obj);
  };

  var createInitialState = function createInitialState(options) {
    return {
      // model
      items: [],

      // options
      options: createOptions(options)
    };
  };

  var fromCamels = function fromCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string
      .split(/(?=[A-Z])/)
      .map(function(part) {
        return part.toLowerCase();
      })
      .join(separator);
  };

  var createOptionAPI = function createOptionAPI(store, options) {
    var obj = {};
    forin(options, function(key) {
      obj[key] = {
        get: function get() {
          return store.getState().options[key];
        },
        set: function set(value) {
          store.dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        }
      };
    });
    return obj;
  };

  var createOptionActions = function createOptionActions(options) {
    return function(dispatch, query, state) {
      var obj = {};
      forin(options, function(key) {
        var name = fromCamels(key, '_').toUpperCase();
        obj['SET_' + name] = function(action) {
          try {
            state.options[key] = action.value;
          } catch (e) {}
          // nope, failed

          // we successfully set the value of this option
          dispatch('DID_SET_' + name, { value: state.options[key] });
        };
      });
      return obj;
    };
  };

  var createOptionQueries = function createOptionQueries(options) {
    return function(state) {
      var obj = {};
      forin(options, function(key) {
        obj['GET_' + fromCamels(key, '_').toUpperCase()] = function(action) {
          return state.options[key];
        };
      });
      return obj;
    };
  };

  var InteractionMethod = {
    API: 1,
    DROP: 2,
    BROWSE: 3,
    PASTE: 4,
    NONE: 5
  };

  var getUniqueId = function getUniqueId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  var forEachDelayed = function forEachDelayed(items, cb) {
    var delay =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 75;
    return items.map(function(item, index) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          cb(item);
          resolve();
        }, delay * index);
      });
    });
  };

  var arrayRemove = function arrayRemove(arr, index) {
    return arr.splice(index, 1);
  };

  var on = function on() {
    var listeners = [];
    var off = function off(event, cb) {
      arrayRemove(
        listeners,
        listeners.findIndex(function(listener) {
          return listener.event === event && (listener.cb === cb || !cb);
        })
      );
    };
    return {
      fire: function fire(event) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        setTimeout(function() {
          listeners
            .filter(function(listener) {
              return listener.event === event;
            })
            .map(function(listener) {
              return listener.cb;
            })
            .forEach(function(cb) {
              cb.apply(undefined, args);
            });
        }, 0);
      },
      on: function on(event, cb) {
        listeners.push({ event: event, cb: cb });
      },
      onOnce: function onOnce(event, _cb) {
        listeners.push({
          event: event,
          cb: function cb() {
            off(event, _cb);
            _cb.apply(undefined, arguments);
          }
        });
      },
      off: off
    };
  };

  var copyObjectPropertiesToObject = function copyObjectPropertiesToObject(
    src,
    target,
    excluded
  ) {
    Object.getOwnPropertyNames(src)
      .filter(function(property) {
        return !excluded.includes(property);
      })
      .forEach(function(key) {
        return Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(src, key)
        );
      });
  };

  var PRIVATE_METHODS = [
    'fire',
    'process',
    'revert',
    'load',
    'on',
    'off',
    'onOnce',
    'retryLoad'
  ];

  var createItemAPI = function createItemAPI(item) {
    var api = {};
    copyObjectPropertiesToObject(item, api, PRIVATE_METHODS);
    return api;
  };

  var getNonNumeric = function getNonNumeric(str) {
    return /[^0-9]+/.exec(str);
  };

  var getDecimalSeparator = function getDecimalSeparator() {
    return getNonNumeric((1.1).toLocaleString())[0];
  };

  var getThousandsSeparator = function getThousandsSeparator() {
    // Added for browsers that do not return the thousands separator (happend on native browser Android 4.4.4)
    // We check against the normal toString output and if they're the same return a comma when decimal separator is a dot
    var decimalSeparator = getDecimalSeparator();
    var thousandsStringWithSeparator = (1000.0).toLocaleString();
    var thousandsStringWithoutSeparator = (1000.0).toString();
    if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
      return getNonNumeric(thousandsStringWithSeparator)[0];
    }
    return decimalSeparator === '.' ? ',' : '.';
  };

  var Type = {
    BOOLEAN: 'boolean',
    INT: 'int',
    STRING: 'string',
    ARRAY: 'array',
    OBJECT: 'object',
    FUNCTION: 'function',
    ACTION: 'action',
    SERVER_API: 'serverapi',
    REGEX: 'regex'
  };

  // all registered filters
  var filters = [];

  // loops over matching filters and passes options to each filter, returning the mapped results
  var applyFilterChain = function applyFilterChain(key, value, utils) {
    return new Promise(function(resolve, reject) {
      // find matching filters for this key
      var matchingFilters = filters
        .filter(function(f) {
          return f.key === key;
        })
        .map(function(f) {
          return f.cb;
        });

      // resolve now
      if (matchingFilters.length === 0) {
        resolve(value);
        return;
      }

      // first filter to kick things of
      var initialFilter = matchingFilters.shift();

      // chain filters
      matchingFilters
        .reduce(
          // loop over promises passing value to next promise
          function(current, next) {
            return current.then(function(value) {
              return next(value, utils);
            });
          },

          // call initial filter, will return a promise
          initialFilter(value, utils)

          // all executed
        )
        .then(function(value) {
          return resolve(value);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };

  var applyFilters = function applyFilters(key, value, utils) {
    return filters
      .filter(function(f) {
        return f.key === key;
      })
      .map(function(f) {
        return f.cb(value, utils);
      });
  };

  // adds a new filter to the list
  var addFilter = function addFilter(key, cb) {
    return filters.push({ key: key, cb: cb });
  };

  var extendDefaultOptions = function extendDefaultOptions(additionalOptions) {
    return Object.assign(defaultOptions, additionalOptions);
  };

  var getOptions$1 = function getOptions() {
    return _extends({}, defaultOptions);
  };

  var setOptions$1 = function setOptions(opts) {
    forin(opts, function(key, value) {
      // key does not exist, so this option cannot be set
      if (!defaultOptions[key]) {
        return;
      }
      defaultOptions[key][0] = getValueByType(
        value,
        defaultOptions[key][0],
        defaultOptions[key][1]
      );
    });
  };

  // default options on app
  var defaultOptions = {
    // the id to add to the root element
    id: [null, Type.STRING],

    // input field name to use
    name: ['filepond', Type.STRING],

    // classname to put on wrapper
    className: [null, Type.STRING],

    // is the field required
    required: [false, Type.BOOLEAN],

    // Allow media capture when value is set
    captureMethod: [null, Type.STRING],
    // - "camera", "microphone" or "camcorder",
    // - Does not work with multiple on apple devices
    // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"

    // Feature toggles
    allowDrop: [true, Type.BOOLEAN], // Allow dropping of files
    allowBrowse: [true, Type.BOOLEAN], // Allow browsing the file system
    allowPaste: [true, Type.BOOLEAN], // Allow pasting files
    allowMultiple: [false, Type.BOOLEAN], // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
    allowReplace: [true, Type.BOOLEAN], // Allow dropping a file on other file to replace it (only works when multiple is set to false)
    allowRevert: [true, Type.BOOLEAN], // Allows user to revert file upload
    // TODO: allowDrag: [true, Type.BOOLEAN],					// Allow dragging files
    // TODO: allowSwipe: [true, Type.BOOLEAN],					// Allow swipe to remove files
    // TODO: allowRemoveAll: [true, Type.BOOLEAN],				// Allow removing all items at once
    // TODO: allowUploadAll: [true, Type.BOOLEAN],				// Allow uploading all items at once

    // Input requirements
    maxFiles: [null, Type.INT], // Max number of files

    // Drag 'n Drop related
    dropOnPage: [false, Type.BOOLEAN], // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
    dropOnElement: [true, Type.BOOLEAN], // Drop needs to happen on element (set to false to also load drops outside of Up)
    dropValidation: [false, Type.BOOLEAN], // Enable or disable validating files on drop
    ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], Type.ARRAY],
    // catchDirectories: [true, Type.BOOLEAN],					// Allow dropping directories in modern browsers

    // Upload related
    instantUpload: [true, Type.BOOLEAN], // Should upload files immidiately on drop
    // TODO: parallel: [1, Type.INT],							// Maximum files to upload in parallel
    // TODO: chunks: [false, Type.BOOLEAN],						// Use chunk uploading
    // TODO: chunkSize: [.5 * (1024 * 1024), Type.INT],			// Upload in 512KB chunks

    // by default no async api is supplied
    /* expected format
    {
    url: '',
    timeout: 1000,
    process: {
    url: '',
    method: 'POST',
            withCredentials: false,
    headers: {},
            onload: (response) => {
                return response.id
            }
    },
    revert: {
    url: '',
    method: 'DELETE',
    withCredentials: false,
    headers: {},
            onload: null
    },
    fetch: {
    url: '',
    method: 'GET',
    withCredentials: false,
    headers: {},
            onload: null
    },
    restore: {
    url: '',
    method: 'GET',
    withCredentials: false,
    headers: {},
            onload: null
    }
    }
    */
    server: [null, Type.SERVER_API],

    // Labels and status messages
    labelDecimalSeparator: [getDecimalSeparator(), Type.STRING], // Default is locale separator
    labelThousandsSeparator: [getThousandsSeparator(), Type.STRING], // Default is locale separator

    labelIdle: [
      'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
      Type.STRING
    ],

    labelFileWaitingForSize: ['Waiting for size', Type.STRING],
    labelFileSizeNotAvailable: ['Size not available', Type.STRING],
    labelFileCountSingular: ['file in list', Type.STRING],
    labelFileCountPlural: ['files in list', Type.STRING],
    labelFileLoading: ['Loading', Type.STRING],
    labelFileAdded: ['Added', Type.STRING], // assistive only
    labelFileRemoved: ['Removed', Type.STRING], // assistive only
    labelFileLoadError: ['Error during load', Type.STRING],
    labelFileProcessing: ['Uploading', Type.STRING],
    labelFileProcessingComplete: ['Upload complete', Type.STRING],
    labelFileProcessingAborted: ['Upload cancelled', Type.STRING],
    labelFileProcessingError: ['Error during upload', Type.STRING],
    // labelFileProcessingPaused: ['Upload paused', Type.STRING],

    labelTapToCancel: ['tap to cancel', Type.STRING],
    labelTapToRetry: ['tap to retry', Type.STRING],
    labelTapToUndo: ['tap to undo', Type.STRING],
    // labelTapToPause: ['tap to pause', Type.STRING],
    // labelTapToResume: ['tap to resume', Type.STRING],

    labelButtonRemoveItem: ['Remove', Type.STRING],
    labelButtonAbortItemLoad: ['Abort', Type.STRING],
    labelButtonRetryItemLoad: ['Retry', Type.STRING],
    labelButtonAbortItemProcessing: ['Cancel', Type.STRING],
    labelButtonUndoItemProcessing: ['Undo', Type.STRING],
    labelButtonRetryItemProcessing: ['Retry', Type.STRING],
    labelButtonProcessItem: ['Upload', Type.STRING],

    // make sure width and height plus viewpox are even numbers so icons are nicely centered
    iconRemove: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],
    iconProcess: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
      Type.STRING
    ],
    iconRetry: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],
    iconUndo: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],
    iconDone: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    // event handlers
    oninit: [null, Type.FUNCTION],
    onwarning: [null, Type.FUNCTION],
    onerror: [null, Type.FUNCTION],
    onaddfilestart: [null, Type.FUNCTION],
    onaddfileprogress: [null, Type.FUNCTION],
    onaddfile: [null, Type.FUNCTION],
    onprocessfilestart: [null, Type.FUNCTION],
    onprocessfileprogress: [null, Type.FUNCTION],
    onprocessfileabort: [null, Type.FUNCTION],
    onprocessfilerevert: [null, Type.FUNCTION],
    onprocessfile: [null, Type.FUNCTION],
    onremovefile: [null, Type.FUNCTION],

    // custom initial files array
    files: [[], Type.ARRAY]
  };

  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };

  var getItemByQuery = function getItemByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return items[0] || null;
    }

    // query is index
    if (isInt(query)) {
      return items[query] || null;
    }

    // if query is item, get the id
    if (
      (typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object'
    ) {
      query = query.id;
    }

    // assume query is a string and return item by id
    return (
      items.find(function(item) {
        return item.id === query;
      }) || null
    );
  };

  var queries = function queries(state) {
    return {
      GET_ITEM: function GET_ITEM(query) {
        return getItemByQuery(state.items, query);
      },

      GET_ITEMS: function GET_ITEMS(query) {
        return [].concat(toConsumableArray(state.items));
      },

      GET_ITEM_NAME: function GET_ITEM_NAME(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.filename : null;
      },

      GET_ITEM_SIZE: function GET_ITEM_SIZE(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.fileSize : null;
      },

      GET_TOTAL_ITEMS: function GET_TOTAL_ITEMS() {
        return state.items.length;
      },

      IS_ASYNC: function IS_ASYNC() {
        return (
          isObject(state.options.server) &&
          (isObject(state.options.server.process) ||
            isFunction(state.options.server.process))
        );
      }
    };
  };

  var hasRoomForItem = function hasRoomForItem(state) {
    var count = state.items.length;

    // if cannot have multiple items, to add one item it should currently not contain items
    if (!state.options.allowMultiple) {
      return count === 0;
    }

    // if allows multiple items, we check if a max item count has been set, if not, there's no limit
    var maxFileCount = state.options.maxFiles;
    if (maxFileCount === null) {
      return true;
    }

    // we check if the current count is smaller than the max count, if so, another file can still be added
    if (count < maxFileCount) {
      return true;
    }

    // no more room for another file
    return false;
  };

  var limit = function limit(value, min, max) {
    return Math.max(Math.min(max, value), min);
  };

  var arrayInsert = function arrayInsert(arr, index, item) {
    return arr.splice(index, 0, item);
  };

  var insertItem = function insertItem(items, item, index) {
    if (isEmpty(item)) {
      return null;
    }

    // if index is undefined, append
    if (typeof index === 'undefined') {
      items.push(item);
      return item;
    }

    // limit the index to the size of the items array
    index = limit(index, 0, items.length);

    // add item to array
    arrayInsert(items, index, item);

    // expose
    return item;
  };

  var leftPad = function leftPad(value) {
    var padding =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return (padding + value).slice(-padding.length);
  };

  var getDateString = function getDateString() {
    var date =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : new Date();
    return (
      date.getFullYear() +
      '-' +
      leftPad(date.getMonth() + 1, '00') +
      '-' +
      leftPad(date.getDate(), '00') +
      '_' +
      leftPad(date.getHours(), '00') +
      '-' +
      leftPad(date.getMinutes(), '00') +
      '-' +
      leftPad(date.getSeconds(), '00')
    );
  };

  var isBase64DataURI = function isBase64DataURI(str) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
      str
    );
  };

  var getFilenameFromURL = function getFilenameFromURL(url) {
    return url
      .split('/')
      .pop()
      .split('?')
      .shift();
  };

  var getExtensionFromFilename = function getExtensionFromFilename(name) {
    return name.split('.').pop();
  };

  var guesstimateExtension = function guesstimateExtension(type) {
    // if no extension supplied, exit here
    if (typeof type !== 'string') {
      return '';
    }

    // get subtype
    var subtype = type.split('/').pop();

    // is svg subtype
    if (/svg/.test(subtype)) {
      return 'svg';
    }

    if (/zip|compressed/.test(subtype)) {
      return 'zip';
    }

    if (/plain/.test(subtype)) {
      return 'txt';
    }

    if (/msword/.test(subtype)) {
      return 'doc';
    }

    // if is valid subtype
    if (/[a-z]+/.test(subtype)) {
      // always use jpg extension
      if (subtype === 'jpeg') {
        return 'jpg';
      }

      // return subtype
      return subtype;
    }

    return '';
  };

  var getFileFromBlob = function getFileFromBlob(blob, filename) {
    var type =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var extension =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var file =
      typeof type === 'string'
        ? blob.slice(0, blob.size, type)
        : blob.slice(0, blob.size, blob.type);
    file.lastModifiedDate = new Date();

    // if filename supplied but no extension and filename has extension
    if (filename && extension === null && getExtensionFromFilename(filename)) {
      file.name = filename;
    } else {
      extension = extension || guesstimateExtension(file.type);
      file.name = filename + (extension ? '.' + extension : '');
    }
    return file;
  };

  var getBlobBuilder = function getBlobBuilder() {
    return (window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder);
  };

  var createBlob = function createBlob(arrayBuffer, mimeType) {
    var BB = getBlobBuilder();

    if (BB) {
      var bb = new BB();
      bb.append(arrayBuffer);
      return bb.getBlob(mimeType);
    }

    return new Blob([arrayBuffer], {
      type: mimeType
    });
  };

  var getBlobFromByteStringWithMimeType = function getBlobFromByteStringWithMimeType(
    byteString,
    mimeType
  ) {
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return createBlob(ab, mimeType);
  };

  var getMimeTypeFromBase64DataURI = function getMimeTypeFromBase64DataURI(
    dataURI
  ) {
    return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
  };

  var getBase64DataFromBase64DataURI = function getBase64DataFromBase64DataURI(
    dataURI
  ) {
    // get data part of string (remove data:image/jpeg...,)
    var data = dataURI.split(',')[1];

    // remove any whitespace as that causes InvalidCharacterError in IE
    return data.replace(/\s/g, '');
  };

  var getByteStringFromBase64DataURI = function getByteStringFromBase64DataURI(
    dataURI
  ) {
    return atob(getBase64DataFromBase64DataURI(dataURI));
  };

  var getBlobFromBase64DataURI = function getBlobFromBase64DataURI(dataURI) {
    var mimeType = getMimeTypeFromBase64DataURI(dataURI);
    var byteString = getByteStringFromBase64DataURI(dataURI);

    return getBlobFromByteStringWithMimeType(byteString, mimeType);
  };

  var getFileFromBase64DataURI = function getFileFromBase64DataURI(
    dataURI,
    filename,
    extension
  ) {
    return getFileFromBlob(
      getBlobFromBase64DataURI(dataURI),
      filename,
      null,
      extension
    );
  };

  var getFilenameFromHeaders = function getFilenameFromHeaders(headers) {
    var rows = headers.split('\n');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (
        var _iterator = rows[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var header = _step.value;

        var matches = header.match(/filename="(.+)"/);
        if (!matches || !matches[1]) {
          continue;
        }
        return matches[1];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return null;
  };

  var renameFile = function renameFile(file, name) {
    var renamedFile = file.slice(0, file.size, file.type);
    renamedFile.lastModifiedDate = file.lastModifiedDate;
    renamedFile.name = name;
    return renamedFile;
  };

  var createFileLoader = function createFileLoader(fetchFn) {
    var state = {
      source: null,
      complete: false,
      progress: 0,
      size: null,
      timestamp: null,
      duration: 0,
      request: null
    };

    var getProgress = function getProgress() {
      return state.progress;
    };
    var abort = function abort() {
      if (!state.request) {
        return;
      }
      state.request.abort();
    };

    // load source
    var load = function load() {
      // get quick reference
      var source = state.source;

      api.fire('init', source);

      // Load Files
      if (source instanceof File) {
        api.fire('load', source);
      } else if (source instanceof Blob) {
        // Load blobs, set default name to current date
        api.fire('load', getFileFromBlob(source, getDateString()));
      } else if (isBase64DataURI(source)) {
        // Load base 64, set default name to current date
        api.fire('load', getFileFromBase64DataURI(source, getDateString()));
      } else {
        // Deal as if is external URL, let's load it!
        loadURL(source);
      }
    };

    // loads a url
    var loadURL = function loadURL(url) {
      // is remote url and no fetch method supplied
      if (!fetchFn) {
        api.fire('error', {
          type: 'error',
          body: "Can't load URL",
          code: 400
        });
        return;
      }

      // set request start
      state.timestamp = Date.now();

      // load file
      state.request = fetchFn(
        url,
        function(response) {
          // update duration
          state.duration = Date.now() - state.timestamp;

          // done!
          state.complete = true;

          // turn blob response into a file
          if (response instanceof Blob) {
            response = getFileFromBlob(
              response,
              getFilenameFromURL(url) || getDateString()
            );
          }

          api.fire('load', response instanceof Blob ? response : response.body);
        },
        function(error) {
          api.fire(
            'error',
            typeof error === 'string'
              ? {
                  type: 'error',
                  code: 0,
                  body: error
                }
              : error
          );
        },
        function(computable, current, total) {
          // collected some meta data already
          if (total) {
            state.size = total;
          }

          // update duration
          state.duration = Date.now() - state.timestamp;

          // if we can't compute progress, we're not going to fire progress events
          if (!computable) {
            state.progress = null;
            return;
          }

          // update progress percentage
          state.progress = current / total;

          // expose
          api.fire('progress', state.progress);
        },
        function() {
          api.fire('abort');
        },
        function(response) {
          api.fire('meta', {
            size: state.size,
            filename: getFilenameFromHeaders(
              typeof response === 'string' ? response : response.headers
            )
          });
        }
      );
    };

    var api = _extends({}, on(), {
      setSource: function setSource(source) {
        return (state.source = source);
      },
      getProgress: getProgress, // file load progress
      abort: abort, // abort file load
      load: load // start load
    });

    return api;
  };

  var createResponse$1 = function createResponse(type, code, body, headers) {
    return {
      type: type,
      code: code,
      body: body,
      headers: headers
    };
  };

  var sendRequest = function sendRequest(data, url, options) {
    var api = {
      onheaders: function onheaders() {},
      onprogress: function onprogress() {},
      onload: function onload() {},
      ontimeout: function ontimeout() {},
      onerror: function onerror() {},
      onabort: function onabort() {},
      abort: function abort() {
        aborted = true;
        xhr.abort();
      }
    };

    // timeout identifier, only used when timeout is defined
    var timeoutId = null;
    var timedOut = false;
    var aborted = false;
    var headersReceived = false;

    // set default options
    options = _extends(
      {
        method: 'POST',
        headers: {},
        withCredentials: false
      },
      options
    );

    // if method is GET, add any received data to url
    if (/GET/i.test(options.method) && data) {
      //url = `${ url }${ hasQueryString(url) ? '&' : '?' }data=${ encodeURIComponent(typeof data === 'string' ? data : JSON.stringify(data)) }`;
      url =
        '' +
        url +
        encodeURIComponent(
          typeof data === 'string' ? data : JSON.stringify(data)
        );
    }

    // create request
    var xhr = new XMLHttpRequest();

    // progress of load
    var process = /GET/i.test(options.method) ? xhr : xhr.upload;
    process.onprogress = function(e) {
      // progress event received, timeout no longer needed
      clearTimeout(timeoutId);

      // no progress event when aborted ( onprogress is called once after abort() )
      if (aborted || timedOut) {
        return;
      }

      api.onprogress(e.lengthComputable, e.loaded, e.total);
    };

    // tries to get header info to the app as fast as possible
    xhr.onreadystatechange = function() {
      // not interesting in these states ('unsent' and 'openend' as they don't give us any additional info)
      if (xhr.readyState < 2) {
        return;
      }

      // no server response
      if (xhr.readyState === 4 && xhr.status === 0) {
        return;
      }

      // timeout no longer needed as connection is setup
      clearTimeout(timeoutId);

      if (headersReceived) {
        return;
      }

      headersReceived = true;

      // we've probably received some useful data in response headers
      api.onheaders(xhr);
    };

    // load successful
    xhr.onload = function() {
      // is classified as valid response
      if (xhr.status >= 200 && xhr.status < 300) {
        api.onload(xhr);
      } else {
        api.onerror(xhr);
      }
    };

    // error during load
    xhr.onerror = function() {
      api.onerror(xhr);
    };

    // request aborted
    xhr.onabort = function() {
      if (timedOut) {
        return;
      }
      aborted = true;
      api.onabort();
    };

    // set timeout if defined
    if (isInt(options.timeout)) {
      timeoutId = setTimeout(function() {
        timedOut = true;
        api.ontimeout(xhr);
        api.abort();
      }, options.timeout);
    }

    // add headers
    xhr.open(options.method, url, true);
    Object.keys(options.headers).forEach(function(key) {
      xhr.setRequestHeader(key, options.headers[key]);
    });

    // set type of response
    if (options.responseType) {
      xhr.responseType = options.responseType;
    }

    // set credentials
    if (options.withCredentials) {
      xhr.withCredentials = true;
    }

    // let's send our data
    xhr.send(data);

    return api;
  };

  var createTimeoutResponse = function createTimeoutResponse(cb) {
    return function(xhr) {
      cb(createResponse('error', 0, 'Timeout', xhr.getAllResponseHeaders()));
    };
  };

  var createFetchFunction = function createFetchFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // set onload hanlder
    var onload =
      action.onload ||
      function(res) {
        return res;
      };
    var onerror =
      action.onerror ||
      function(res) {
        return null;
      };

    // internal handler
    return function(url, load, error, progress, abort, headers) {
      // do local or remote request based on if the url is external
      var request = sendRequest(
        url,
        apiUrl + action.url,
        _extends({}, action, {
          responseType: 'blob'
        })
      );

      request.onload = function(xhr) {
        // get headers
        var headers = xhr.getAllResponseHeaders();

        // get filename
        var filename =
          getFilenameFromHeaders(headers) ||
          getFilenameFromURL(url) ||
          getDateString();

        // create response
        load(
          createResponse$1(
            'load',
            xhr.status,
            getFileFromBlob(onload(xhr.response), filename),
            headers
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse$1(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onheaders = function(xhr) {
        headers(
          createResponse$1(
            'headers',
            xhr.status,
            null,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);
      request.onprogress = progress;
      request.onabort = abort;

      // should return request
      return request;
    };
  };

  /*
function signature:
  (file, metadata, load, error, progress, abort) => {
    return {
    abort:() => {}
  }
}
*/
  var createProcessorFunction = function createProcessorFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];
    var name = arguments[2];

    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return function() {
        for (
          var _len = arguments.length, params = Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          params[_key] = arguments[_key];
        }

        return action.apply(undefined, [name].concat(params));
      };
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // internal handler
    return function(file, metadata, load, error, progress, abort) {
      // no file received
      if (!file) {
        return;
      }

      // create formdata object
      var formData = new FormData();
      formData.append(name, file, file.name);

      // add metadata under same name
      if (isObject(metadata)) {
        formData.append(name, JSON.stringify(metadata));
      }

      // set onload hanlder
      var onload =
        action.onload ||
        function(res) {
          return res;
        };
      var onerror =
        action.onerror ||
        function(res) {
          return null;
        };

      // send request object
      var request = sendRequest(formData, apiUrl + action.url, action);
      request.onload = function(xhr) {
        load(
          createResponse$1(
            'load',
            xhr.status,
            onload(xhr.response),
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse$1(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);
      request.onprogress = progress;
      request.onabort = abort;

      // should return request
      return request;
    };
  };

  /*
 function signature:
 (uniqueFileId, load, error) => { }
 */
  var createRevertFunction = function createRevertFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    // is custom implementation
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied, return stub function, interface will work, but file won't be removed
    if (!action || !isString(action.url)) {
      return function(uniqueFileId, load) {
        return load();
      };
    }

    // set onload hanlder
    var onload =
      action.onload ||
      function(res) {
        return res;
      };
    var onerror =
      action.onerror ||
      function(res) {
        return null;
      };

    // internal implementation
    return function(uniqueFileId, load, error) {
      var request = sendRequest(
        uniqueFileId,
        apiUrl + action.url,
        action // contains method, headers and withCredentials properties
      );
      request.onload = function(xhr) {
        load(
          createResponse$1(
            'load',
            xhr.status,
            onload(xhr.response),
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.onerror = function(xhr) {
        error(
          createResponse$1(
            'error',
            xhr.status,
            onerror(xhr.response) || xhr.statusText,
            xhr.getAllResponseHeaders()
          )
        );
      };

      request.ontimeout = createTimeoutResponse(error);

      return request;
    };
  };

  var getRandomNumber = function getRandomNumber() {
    var min =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return min + Math.random() * (max - min);
  };

  var createPerceivedPerformanceUpdater = function createPerceivedPerformanceUpdater(
    cb
  ) {
    var duration =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var tickMin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
    var tickMax =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;

    var timeout = null;
    var start = Date.now();

    var tick = function tick() {
      var runtime = Date.now() - start;
      var delay = getRandomNumber(tickMin, tickMax);

      if (runtime + delay > duration) {
        delay = runtime + delay - duration;
      }

      var progress = runtime / duration;
      if (progress >= 1) {
        cb(1);
        return;
      }

      cb(progress);

      timeout = setTimeout(tick, delay);
    };

    tick();

    return {
      clear: function clear() {
        clearTimeout(timeout);
      }
    };
  };

  var createFileProcessor = function createFileProcessor(processFn) {
    var state = {
      complete: false,
      perceivedProgress: 0,
      perceivedPerformanceUpdater: null,
      progress: null,
      timestamp: null,
      perceivedDuration: 0,
      duration: 0,
      request: null,
      response: null
    };

    var process = function process(file, metadata) {
      var progressFn = function progressFn() {
        // we've not yet started the real download, stop here
        // the request might not go through, for instance, there might be some server trouble
        // if state.progress is null, the server does not allow computing progress and we show the spinner instead
        if (state.duration === 0 || state.progress === null) {
          return;
        }

        // as we're now processing, fire the progress event
        api.fire('progress', api.getProgress());
      };

      var completeFn = function completeFn() {
        state.complete = true;

        api.fire('load', state.response.body);
      };

      // let's start processing
      api.fire('start');

      // set request start
      state.timestamp = Date.now();

      // create perceived performance progress indicator
      state.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater(
        function(progress) {
          state.perceivedProgress = progress;
          state.perceivedDuration = Date.now() - state.timestamp;

          progressFn();

          // if fake progress is done, and a response has been received,
          // and we've not yet called the complete method
          if (
            state.response &&
            state.perceivedProgress === 1 &&
            !state.complete
          ) {
            // we done!
            completeFn();
          }
        },
        // random delay as in a list of files you start noticing
        // files uploading at the exact same speed
        getRandomNumber(750, 1500)
      );

      // remember request so we can abort it later
      state.request = processFn(
        // the file to process
        file,

        // the metadata to send along
        metadata,

        // callbacks (load, error, progress, abort)
        // load expects the body to be a server id if
        // you want to make use of revert
        function(response) {
          // we put the response in state so we can access
          // it outside of this method
          state.response =
            typeof response === 'string'
              ? {
                  type: 'load',
                  code: 200,
                  body: response,
                  headers: {}
                }
              : response;

          // update duration
          state.duration = Date.now() - state.timestamp;

          // force progress to 1 as we're now done
          state.progress = 1;

          // we are really done
          // if perceived progress is 1 ( wait for perceived progress to complete )
          // or if server does not support progress ( null )
          if (state.perceivedProgress === 1) {
            completeFn();
          }
        },

        // error is expected to be an object with type, code, body
        function(error) {
          // cancel updater
          state.perceivedPerformanceUpdater.clear();

          // update others about this error
          api.fire(
            'error',
            typeof error === 'string'
              ? {
                  type: 'error',
                  code: 0,
                  body: error
                }
              : error
          );
        },

        // actual processing progress
        function(computable, current, total) {
          // update actual duration
          state.duration = Date.now() - state.timestamp;

          // update actual progress
          state.progress = computable ? current / total : null;

          progressFn();
        },

        // abort does not expect a value
        function() {
          // stop updater
          state.perceivedPerformanceUpdater.clear();

          // fire the abort event so we can switch visuals
          api.fire('abort');
        }
      );
    };

    var abort = function abort() {
      // no request running, can't abort
      if (!state.request) {
        return;
      }

      // stop updater
      state.perceivedPerformanceUpdater.clear();

      // abort actual request
      state.request.abort();

      // if has response object, we've completed the request
      state.complete = true;

      // now aborted, if server returned a response, let's pass it along
      api.fire('abort', state.response ? state.response.body : null);
    };

    var reset = function reset() {
      abort();
      state.complete = false;
      state.perceivedProgress = 0;
      state.progress = 0;
      state.timestamp = null;
      state.perceivedDuration = 0;
      state.duration = 0;
      state.request = null;
      state.response = null;
    };

    var getProgress = function getProgress() {
      return state.progress
        ? Math.min(state.progress, state.perceivedProgress)
        : null;
    };
    var getDuration = function getDuration() {
      return Math.min(state.duration, state.perceivedDuration);
    };

    var api = _extends({}, on(), {
      process: process, // start processing file
      abort: abort, // abort active process request
      getProgress: getProgress,
      getDuration: getDuration,
      reset: reset
    });

    return api;
  };

  var getFilenameWithoutExtension = function getFilenameWithoutExtension(name) {
    return name.substr(0, name.lastIndexOf('.')) || name;
  };

  var ItemStatus = {
    INIT: 1,
    IDLE: 2,
    PROCESSING: 3,
    PROCESSING_PAUSED: 4,
    PROCESSING_COMPLETE: 5,
    PROCESSING_ERROR: 6,
    LOADING: 7,
    LOAD_ERROR: 8
  };

  var createFileStub = function createFileStub(source) {
    var data = [source.name, source.size, source.type];

    // is blob or base64, then we need to set the name
    if (source instanceof Blob || isBase64DataURI(source)) {
      data[0] = getDateString();
    } else if (isBase64DataURI(source)) {
      // if is base64 data uri we need to determine the average size and type
      data[1] = source.length;
      data[2] = getMimeTypeFromBase64DataURI(source);
    } else if (isString(source)) {
      // url
      data[0] = getFilenameFromURL(source);
      data[1] = 0;
      data[2] = 'application/octet-stream';
    }

    return {
      name: data[0],
      size: data[1],
      type: data[2]
    };
  };

  var FileOrigin = {
    INPUT: 1,
    LIMBO: 2,
    LOCAL: 3
  };

  var createItem = function createItem() {
    var origin =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var serverFileReference =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var file =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    // unique id for this item, is used to identify the item across views
    var id = getUniqueId();

    /**
     * Internal item state
     */
    var state = {
      // original source
      source: null,

      // file model reference
      file: file,

      // id of file on server
      serverFileReference: serverFileReference,

      // current item status
      status: serverFileReference
        ? ItemStatus.PROCESSING_COMPLETE
        : ItemStatus.INIT,

      // active processes
      activeLoader: null,
      activeProcessor: null
    };

    /**
     * Externally added item metadata
     */
    var metadata = {};

    // item data
    var setStatus = function setStatus(status) {
      return (state.status = status);
    };

    // file data
    var getFileExtension = function getFileExtension() {
      return getExtensionFromFilename(state.file.name);
    };
    var getFileType = function getFileType() {
      return state.file.type;
    };
    var getFileSize = function getFileSize() {
      return state.file.size;
    };
    var getFile = function getFile() {
      return state.file;
    };

    // loads files
    var load = function load(source, loader, onload) {
      // remember the original item source
      state.source = source;

      // file stub is already there
      if (state.file) {
        api.fire('load-skip');
        return;
      }

      // set a stub file object while loading the actual data
      state.file = createFileStub(source);

      // starts loading
      loader.on('init', function() {
        api.fire('load-init');
      });

      // we'eve received a size indication, let's update the stub
      loader.on('meta', function(meta) {
        // set size of file stub
        state.file.size = meta.size;

        // set name of file stub
        state.file.filename = meta.filename;

        // size has been updated
        api.fire('load-meta');
      });

      // the file is now loading we need to update the progress indicators
      loader.on('progress', function(progress) {
        setStatus(ItemStatus.LOADING);

        api.fire('load-progress', progress);
      });

      // an error was thrown while loading the file, we need to switch to error state
      loader.on('error', function(error) {
        setStatus(ItemStatus.LOAD_ERROR);

        api.fire('load-request-error', error);
      });

      // user or another process aborted the file load (cannot retry)
      loader.on('abort', function() {
        setStatus(ItemStatus.INIT);

        api.fire('load-abort');
      });

      // done loading
      loader.on('load', function(file) {
        // as we've now loaded the file the loader is no longer required
        state.activeLoader = null;

        // called when file has loaded succesfully
        var success = function success(result) {
          // set (possibly) transformed file
          state.file = result;

          // file received
          if (origin === FileOrigin.LIMBO && state.serverFileReference) {
            setStatus(ItemStatus.PROCESSING_COMPLETE);
          } else {
            setStatus(ItemStatus.IDLE);
          }

          api.fire('load');
        };

        var error = function error(result) {
          // set original file
          state.file = file;
          api.fire('load-meta');

          setStatus(ItemStatus.LOAD_ERROR);
          api.fire('load-file-error', result);
        };

        // if we already have a server file reference, we don't need to call the onload method
        if (state.serverFileReference) {
          success(file);
          return;
        }

        // no server id, let's give this file the full treatment
        onload(file, success, error);
      });

      // set loader source data
      loader.setSource(source);

      // set as active loader
      state.activeLoader = loader;

      // load the source data
      loader.load();
    };

    // file processor
    var process = function process(processor, onprocess) {
      // if no file loaded we'll wait for the load event
      if (!(state.file instanceof Blob)) {
        api.on('load', function() {
          process(processor, onprocess);
        });
        return;
      }

      // setup processor

      processor.on('load', function(serverFileReference) {
        // no longer required
        state.activeProcessor = null;

        // need this id to be able to rever the upload
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.PROCESSING_COMPLETE);
        api.fire('process-complete', serverFileReference);
      });

      processor.on('start', function() {
        api.fire('process-start');
      });

      processor.on('error', function(error) {
        state.activeProcessor = null;
        setStatus(ItemStatus.PROCESSING_ERROR);
        api.fire('process-error', error);
      });

      processor.on('abort', function(serverFileReference) {
        state.activeProcessor = null;

        // if file was uploaded but processing was cancelled during perceived processor time store file reference
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.IDLE);
        api.fire('process-abort');
      });

      processor.on('progress', function(progress) {
        setStatus(ItemStatus.PROCESSING);
        api.fire('process-progress', progress);
      });

      // when successfully transformed
      var success = function success(file) {
        processor.process(file, _extends({}, metadata));
      };

      // something went wrong during transform phase
      var error = function error(result) {};

      // start processing the file
      onprocess(state.file, success, error);

      // set as active processor
      state.activeProcessor = processor;
    };

    var revert = function revert(revertFileUpload) {
      // cannot revert without a server id for this process
      if (state.serverFileReference === null) {
        return;
      }

      // revert the upload (fire and forget)
      revertFileUpload(
        state.serverFileReference,
        function() {
          // reset file server id as now it's no available on the server
          state.serverFileReference = null;
        },
        function(error) {
          // TODO: handle revert error
        }
      );

      // fire event
      setStatus(ItemStatus.IDLE);
      api.fire('process-revert');
    };

    var abortLoad = function abortLoad() {
      if (!state.activeLoader) {
        return;
      }
      state.activeLoader.abort();
    };

    var retryLoad = function retryLoad() {
      if (!state.activeLoader) {
        return;
      }
      state.activeLoader.load();
    };

    var abortProcessing = function abortProcessing() {
      if (!state.activeProcessor) {
        return;
      }
      state.activeProcessor.abort();
    };

    // exposed methods

    var api = _extends(
      {
        id: {
          get: function get$$1() {
            return id;
          }
        },
        origin: {
          get: function get$$1() {
            return origin;
          }
        },
        serverId: {
          get: function get$$1() {
            return state.serverFileReference;
          }
        },
        status: {
          get: function get$$1() {
            return state.status;
          }
        },
        filename: {
          get: function get$$1() {
            return state.file.name;
          }
        },
        filenameWithoutExtension: {
          get: function get$$1() {
            return getFilenameWithoutExtension(state.file.name);
          }
        },
        fileExtension: { get: getFileExtension },
        fileType: { get: getFileType },
        fileSize: { get: getFileSize },
        file: { get: getFile },

        source: {
          get: function get$$1() {
            return state.source;
          }
        },

        getMetadata: function getMetadata(name) {
          return name ? metadata[name] : _extends({}, metadata);
        },
        setMetadata: function setMetadata(name, value) {
          return (metadata[name] = value);
        },

        abortLoad: abortLoad,
        retryLoad: retryLoad,
        abortProcessing: abortProcessing,

        load: load,
        process: process,
        revert: revert
      },
      on()
    );

    return createObject(api);
  };

  var getItemIndexByQuery = function getItemIndexByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return 0;
    }

    // invalid queries
    if (!isString(query)) {
      return -1;
    }

    // return item by id (or -1 if not found)
    return items.findIndex(function(item) {
      return item.id === query;
    });
  };

  var getItemById = function getItemById(items, itemId) {
    var index = getItemIndexByQuery(items, itemId);
    if (index < 0) {
      return;
    }
    return items[index] || null;
  };

  var removeIndex = function removeIndex(arr, index) {
    return arr.splice(index, 1);
  };

  var removeItem = function removeItem(items, needle) {
    // get index of item
    var index = items.findIndex(function(item) {
      return item === needle;
    });

    // remove it from array
    removeIndex(items, index);

    // return removed item
    return needle;
  };

  var fetchLocal = function fetchLocal(
    url,
    load,
    error,
    progress,
    abort,
    headers
  ) {
    var request = sendRequest(null, url, {
      method: 'GET',
      responseType: 'blob'
    });

    request.onload = function(xhr) {
      // get headers
      var headers = xhr.getAllResponseHeaders();

      // get filename
      var filename =
        getFilenameFromHeaders(headers) ||
        getFilenameFromURL(url) ||
        getDateString();

      // create response
      load(
        createResponse$1(
          'load',
          xhr.status,
          getFileFromBlob(xhr.response, filename),
          headers
        )
      );
    };

    request.onerror = function(xhr) {
      error(
        createResponse$1(
          'error',
          xhr.status,
          xhr.statusText,
          xhr.getAllResponseHeaders()
        )
      );
    };

    request.onheaders = function(xhr) {
      headers(
        createResponse$1(
          'headers',
          xhr.status,
          null,
          xhr.getAllResponseHeaders()
        )
      );
    };

    request.ontimeout = createTimeoutResponse(error);
    request.onprogress = progress;
    request.onabort = abort;

    // should return request
    return request;
  };

  var getDomainFromURL = function getDomainFromURL(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url
      .toLowerCase()
      .replace(/([a-z])?:\/\//, '$1')
      .split('/')[0];
  };

  var isExternalURL = function isExternalURL(url) {
    return (
      (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
      getDomainFromURL(location.href) !== getDomainFromURL(url)
    );
  };

  // returns item based on state
  var getItemByQueryFromState = function getItemByQueryFromState(
    state,
    itemHandler
  ) {
    return function() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        query = _ref.query,
        _ref$success = _ref.success,
        success = _ref$success === undefined ? function() {} : _ref$success,
        _ref$failure = _ref.failure,
        failure = _ref$failure === undefined ? function() {} : _ref$failure;

      var item = getItemByQuery(state.items, query);
      if (!item) {
        failure({
          error: createResponse$1('error', 0, 'Item not found'),
          file: null
        });
        return;
      }
      itemHandler(item, success, failure);
    };
  };

  var actions = function actions(dispatch, query, state) {
    return {
      /**
       * Aborts all ongoing processes
       */
      ABORT_ALL: function ABORT_ALL() {
        query('GET_ITEMS').forEach(function(item) {
          item.abortLoad();
          item.abortProcessing();
        });
      },

      /**
       * Sets initial files
       */
      DID_SET_FILES: function DID_SET_FILES(_ref2) {
        var _ref2$value = _ref2.value,
          value = _ref2$value === undefined ? [] : _ref2$value;

        // map values to file objects
        var files = value.map(function(file) {
          return {
            source: file.source ? file.source : file,
            options: file.options
          };
        });

        // loop over files, if file is in list, leave it be, if not, remove

        // test if items should be moved
        [].concat(toConsumableArray(state.items)).forEach(function(item) {
          // if item not is in new value, remove
          if (
            !files.find(function(file) {
              return file.source === item.source;
            })
          ) {
            dispatch('REMOVE_ITEM', { query: item });
          }
        });

        // add new files
        files.forEach(function(file, index) {
          // if file is already in list
          if (
            [].concat(toConsumableArray(state.items)).find(function(item) {
              return item.source === file.source;
            })
          ) {
            return;
          }

          // not in list, add
          dispatch(
            'ADD_ITEM',
            _extends({}, file, {
              interactionMethod: InteractionMethod.NONE,
              index: index
            })
          );
        });
      },

      /**
       * @param source
       * @param index
       * @param interactionMethod
       */
      ADD_ITEM: function ADD_ITEM(_ref3) {
        var source = _ref3.source,
          index = _ref3.index,
          interactionMethod = _ref3.interactionMethod,
          _ref3$success = _ref3.success,
          success = _ref3$success === undefined ? function() {} : _ref3$success,
          _ref3$failure = _ref3.failure,
          failure = _ref3$failure === undefined ? function() {} : _ref3$failure,
          _ref3$options = _ref3.options,
          options = _ref3$options === undefined ? {} : _ref3$options;

        // if no source supplied
        if (isEmpty(source)) {
          failure({
            error: createResponse$1('error', 0, 'No source'),
            file: null
          });
          return;
        }

        // filter out invalid file items, used to filter dropped directory contents
        if (source instanceof Blob) {
          if (state.options.ignoredFiles.includes(source.name.toLowerCase())) {
            // fail silently
            return;
          }
        }

        // test if there's still room in the list of files
        if (!hasRoomForItem(state)) {
          // if multiple allowed, we can't replace
          // or if only a single item is allowed but we're not allowed to replace it we exit
          if (
            state.options.allowMultiple ||
            (!state.options.allowMultiple && !state.options.allowReplace)
          ) {
            var error = createResponse$1('warning', 0, 'Max files');

            dispatch('DID_THROW_MAX_FILES', {
              source: source,
              error: error
            });

            failure({ error: error, file: null });
            return;
          }

          // id of first item we're about to remove
          var _item = state.items[0];

          // if has been processed remove it from the server as well
          if (_item.status === ItemStatus.PROCESSING_COMPLETE) {
            dispatch('REVERT_ITEM_PROCESSING', { query: _item.id });
          }

          // remove first item as it will be replaced by this item
          dispatch('REMOVE_ITEM', { query: _item.id });
        }

        // where did the file originate
        var origin =
          options.type === 'local'
            ? FileOrigin.LOCAL
            : options.type === 'limbo' ? FileOrigin.LIMBO : FileOrigin.INPUT;

        // create a new blank item
        var item = createItem(
          origin,
          origin === FileOrigin.INPUT ? null : source,
          options.file
        );

        // set initial meta data
        Object.keys(options.metadata || {}).forEach(function(key) {
          item.setMetadata(key, options.metadata[key]);
        });

        // add item to list
        insertItem(state.items, item, index);

        // get a quick reference to the item id
        var id = item.id;

        // observe item events
        item.on('load-init', function() {
          dispatch('DID_START_ITEM_LOAD', { id: id });
        });

        item.on('load-meta', function() {
          dispatch('DID_UPDATE_ITEM_META', { id: id });
        });

        item.on('load-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_LOAD_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('load-request-error', function(error) {
          // is client error, no way to recover
          if (error.code >= 400 && error.code < 500) {
            dispatch('DID_THROW_ITEM_INVALID', {
              id: id,
              error: error,
              status: {
                main: state.options.labelFileLoadError,
                sub: error.code + ' (' + error.body + ')'
              }
            });

            // reject the file so can be dealt with through API
            failure({ error: error, file: createItemAPI(item) });
            return;
          }

          // is possible server error, so might be possible to retry
          dispatch('DID_THROW_ITEM_LOAD_ERROR', {
            id: id,
            error: error,
            status: {
              main: state.options.labelFileLoadError,
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('load-file-error', function(error) {
          dispatch('DID_THROW_ITEM_INVALID', _extends({}, error, { id: id }));
        });

        item.on('load-abort', function() {
          dispatch('REMOVE_ITEM', { query: id });
        });

        item.on('load-skip', function() {
          dispatch('COMPLETE_LOAD_ITEM', {
            query: id,
            item: item,
            data: {
              source: source,
              success: success
            }
          });
        });

        item.on('load', function() {
          // item loaded, allow plugins to
          // - read data (quickly)
          // - add metadata
          applyFilterChain('DID_LOAD_ITEM', item, { query: query }).then(
            function() {
              // let plugins decide if the output data should be prepared at this point
              // means we'll do this and wait for idle state
              applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
                item: item,
                query: query
              }).then(function(shouldPrepareOutput) {
                var data = {
                  source: source,
                  success: success

                  // exit
                };
                if (shouldPrepareOutput) {
                  // wait for idle state and then run PREPARE_OUTPUT
                  dispatch(
                    'REQUEST_PREPARE_LOAD_ITEM',
                    {
                      query: id,
                      item: item,
                      data: data
                    },
                    true
                  );

                  return;
                }

                dispatch('COMPLETE_LOAD_ITEM', {
                  query: id,
                  item: item,
                  data: data
                });
              });
            }
          );
        });

        item.on('process-start', function() {
          dispatch('DID_START_ITEM_PROCESSING', { id: id });
        });

        item.on('process-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_PROCESS_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('process-error', function(error) {
          dispatch('DID_THROW_ITEM_PROCESSING_ERROR', {
            id: id,
            error: error,
            status: {
              main: state.options.labelFileProcessingError,
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('process-abort', function(serverFileReference) {
          // we'll revert any processed items
          dispatch('REVERT_ITEM_PROCESSING', { query: id });

          // if we're instant uploading, the item is removed
          if (state.options.instantUpload) {
            dispatch('REMOVE_ITEM', { query: id });
          } else {
            // we stopped processing
            dispatch('DID_ABORT_ITEM_PROCESSING', { id: id });
          }
        });

        item.on('process-complete', function(serverFileReference) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: id,
            error: null,
            serverFileReference: serverFileReference
          });
        });

        item.on('process-revert', function() {
          // if is instant upload remove the item
          // or is a fake file
          if (state.options.instantUpload || options.file) {
            dispatch('REMOVE_ITEM', { query: id });
          } else {
            dispatch('DID_REVERT_ITEM_PROCESSING', { id: id });
          }
        });

        // let view know the item has been inserted
        dispatch('DID_ADD_ITEM', {
          id: id,
          index: index,
          interactionMethod: interactionMethod
        });

        // start loading the source

        var _ref4 = state.options.server || {},
          url = _ref4.url,
          load = _ref4.load,
          restore = _ref4.restore,
          fetch = _ref4.fetch;

        item.load(
          source,

          // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
          createFileLoader(
            origin === FileOrigin.INPUT
              ? // input
                isString(source) && isExternalURL(source)
                ? createFetchFunction(url, fetch) // remote url
                : fetchLocal // local url
              : // limbo or local
                origin === FileOrigin.LIMBO
                ? createFetchFunction(url, restore) // limbo
                : createFetchFunction(url, load) // local
          ),

          // called when the file is loaded so it can be piped through the filters
          function(file, success, error) {
            // let's process the file
            applyFilterChain('LOAD_FILE', file, { query: query })
              .then(success)
              .catch(error);
          }
        );
      },

      REQUEST_PREPARE_LOAD_ITEM: function REQUEST_PREPARE_LOAD_ITEM(_ref5) {
        var item = _ref5.item,
          data = _ref5.data;

        // allow plugins to alter the file data
        applyFilterChain('PREPARE_OUTPUT', item.file, {
          query: query,
          item: item
        }).then(function(result) {
          applyFilterChain('COMPLETE_PREPARE_OUTPUT', result, {
            query: query,
            item: item
          }).then(function(result) {
            dispatch('COMPLETE_LOAD_ITEM', {
              item: item,
              data: data
            });
          });
        });
      },

      COMPLETE_LOAD_ITEM: function COMPLETE_LOAD_ITEM(_ref6) {
        var item = _ref6.item,
          data = _ref6.data;
        var success = data.success,
          source = data.source;

        // let interface know the item has loaded

        dispatch('DID_LOAD_ITEM', {
          id: item.id,
          error: null,
          serverFileReference: item.origin === FileOrigin.INPUT ? null : source
        });

        // item has been successfully loaded and added to the
        // list of items so can now be safely returned for use
        success(createItemAPI(item));

        // if this is a local server file we need to show a different state
        if (item.origin === FileOrigin.LOCAL) {
          dispatch('DID_LOAD_LOCAL_ITEM', { id: item.id });
          return;
        }

        // if is a temp server file we prevent async upload call here (as the file is already on the server)
        if (item.origin === FileOrigin.LIMBO) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: item.id,
            error: null,
            serverFileReference: source
          });
          return;
        }

        // id we are allowed to upload the file immidiately, lets do it
        if (query('IS_ASYNC') && state.options.instantUpload) {
          dispatch('REQUEST_ITEM_PROCESSING', { query: item.id });
        }
      },

      RETRY_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        // try loading the source one more time
        item.retryLoad();
      }),

      REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        var id = item.id;

        dispatch('DID_REQUEST_ITEM_PROCESSING', { id: id });

        dispatch('PROCESS_ITEM', { query: item }, true);
      }),

      PROCESS_ITEM: getItemByQueryFromState(state, function(
        item,
        success,
        failure
      ) {
        // we done function
        item.onOnce('process-complete', function() {
          success(createItemAPI(item));
        });

        // we error function
        item.onOnce('process-error', function(error) {
          failure({ error: error, file: createItemAPI(item) });
        });

        // start file processing
        item.process(
          createFileProcessor(
            createProcessorFunction(
              state.options.server.url,
              state.options.server.process,
              state.options.name
            )
          ),
          // called when the file is about to be processed so it can be piped through the transform filters
          function(file, success, error) {
            // allow plugins to alter the file data
            applyFilterChain('PREPARE_OUTPUT', file, {
              query: query,
              item: item
            })
              .then(success)
              .catch(error);
          }
        );
      }),

      RETRY_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        dispatch('REQUEST_ITEM_PROCESSING', { query: item });
      }),

      REMOVE_ITEM: getItemByQueryFromState(state, function(item, success) {
        // get id reference
        var id = item.id;

        // tell the view the item has been removed
        dispatch('DID_REMOVE_ITEM', { id: id, item: item });

        // now remove it from the item list,
        // we remove it from the list after the view has been updated
        // to make sure the item is available for view rendering till removed
        dispatch('SPLICE_ITEM', { id: id, item: item });

        // correctly removed
        success(createItemAPI(item));
      }),

      // private action for timing the removal of an item from the items list
      SPLICE_ITEM: function SPLICE_ITEM(_ref7) {
        var id = _ref7.id;
        return removeItem(state.items, getItemById(state.items, id));
      },

      ABORT_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        // stop loading this file
        item.abortLoad();

        // the file will throw an event and that will take
        // care of removing the item from the list
      }),

      ABORT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        // stop processing this file
        item.abortProcessing();

        // the file will throw an event and that will take
        // care of removing the item from the list
      }),

      REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        // remove from server
        item.revert(
          createRevertFunction(
            state.options.server.url,
            state.options.server.revert
          )
        );
      }),

      SET_OPTIONS: function SET_OPTIONS(_ref8) {
        var options = _ref8.options;

        forin(options, function(key, value) {
          dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        });
      }
    };
  };

  var createElement$1 = function createElement(tagName) {
    return document.createElement(tagName);
  };

  var formatFilename = function formatFilename(name) {
    return decodeURI(name);
  };

  var text = function text(node, value) {
    var textNode = node.childNodes[0];
    if (!textNode) {
      textNode = document.createTextNode(value);
      node.appendChild(textNode);
    } else if (value !== textNode.nodeValue) {
      textNode.nodeValue = value;
    }
  };

  var polarToCartesian = function polarToCartesian(
    centerX,
    centerY,
    radius,
    angleInDegrees
  ) {
    var angleInRadians = (angleInDegrees % 360 - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    arcSweep
  ) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      arcSweep,
      0,
      end.x,
      end.y
    ].join(' ');
  };

  var percentageArc = function percentageArc(x, y, radius, from, to) {
    var arcSweep = 1;
    if (to > from && to - from <= 0.5) {
      arcSweep = 0;
    }
    if (from > to && from - to >= 0.5) {
      arcSweep = 0;
    }
    return describeArc(
      x,
      y,
      radius,
      Math.min(0.9999, from) * 360,
      Math.min(0.9999, to) * 360,
      arcSweep
    );
  };

  var create$7 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // start at 0
    props.spin = false;
    props.progress = 0;
    props.opacity = 0;

    // svg
    var svg = createElement('svg');
    root.ref.path = createElement('path', {
      'stroke-width': 2,
      'stroke-linecap': 'round'
    });
    svg.appendChild(root.ref.path);

    root.ref.svg = svg;

    root.appendChild(svg);
  };

  var write$5 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (props.opacity === 0) {
      return;
    }

    // get width of stroke
    var ringStrokeWidth = parseInt(attr(root.ref.path, 'stroke-width'), 10);

    // calculate size of ring
    var size = root.rect.element.width * 0.5;

    // ring state
    var ringFrom = 0;
    var ringTo = 0;

    // now in busy mode
    if (props.spin) {
      ringFrom = 0;
      ringTo = 0.5;
    } else {
      ringFrom = 0;
      ringTo = props.progress;
    }

    // get arc path
    var coordinates = percentageArc(
      size,
      size,
      size - ringStrokeWidth,
      ringFrom,
      ringTo
    );

    // update progress bar
    attr(root.ref.path, 'd', coordinates);

    // hide while contains 0 value
    attr(
      root.ref.path,
      'stroke-opacity',
      props.spin || props.progress > 0 ? 1 : 0
    );
  };

  var progressIndicator = createView({
    tag: 'div',
    name: 'progress-indicator',
    ignoreRect: true,
    create: create$7,
    write: write$5,
    mixins: {
      apis: ['progress', 'spin'],
      styles: ['opacity'],
      animations: {
        opacity: { type: 'tween', duration: 500 },
        progress: {
          type: 'spring',
          stiffness: 0.95,
          damping: 0.65,
          mass: 10
        }
      }
    }
  });

  var create$8 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    root.element.title = props.label;
    root.element.innerHTML = props.icon || '';
    props.disabled = false;
  };

  var write$6 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (props.opacity === 0 && !props.disabled) {
      props.disabled = true;
      attr(root.element, 'disabled', 'disabled');
    } else if (props.opacity > 0 && props.disabled) {
      props.disabled = false;
      root.element.removeAttribute('disabled');
    }
  };

  var fileActionButton = createView({
    tag: 'button',
    attributes: {
      type: 'button'
    },
    ignoreRect: true,
    name: 'file-action-button',
    mixins: {
      apis: ['label'],
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      },
      listeners: true
    },
    create: create$8,
    write: write$6
  });

  var toNaturalFileSize = function toNaturalFileSize(bytes) {
    var decimalSeparator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

    // nope, no negative byte sizes
    bytes = Math.round(Math.abs(bytes));

    // just bytes
    if (bytes < 1000) {
      return bytes + ' bytes';
    }

    // kilobytes
    if (bytes < MB) {
      return Math.floor(bytes / KB) + ' KB';
    }

    // megabytes
    if (bytes < GB) {
      return removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator) + ' MB';
    }

    // gigabytes
    return removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator) + ' GB';
  };

  var KB = 1000;
  var MB = 1000000;
  var GB = 1000000000;

  var removeDecimalsWhenZero = function removeDecimalsWhenZero(
    value,
    decimalCount,
    separator
  ) {
    return value
      .toFixed(decimalCount)
      .split('.')
      .filter(function(part) {
        return part !== '0';
      })
      .join(separator);
  };

  var create$9 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // filename
    var fileName = createElement$1('span');
    fileName.className = 'filepond--file-info-main';
    // hide for screenreaders
    // the file is contained in a fieldset with legend that contains the filename
    // no need to read it twice
    attr(fileName, 'aria-hidden', 'true');
    root.appendChild(fileName);
    root.ref.fileName = fileName;

    // filesize
    var fileSize = createElement$1('span');
    fileSize.className = 'filepond--file-info-sub';
    root.appendChild(fileSize);
    root.ref.fileSize = fileSize;

    // set initial values
    text(fileSize, root.query('GET_LABEL_FILE_WAITING_FOR_SIZE'));
    text(fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
  };

  var updateFile = function updateFile(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    text(
      root.ref.fileSize,
      toNaturalFileSize(root.query('GET_ITEM_SIZE', props.id))
    );
    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var updateFileSizeOnError = function updateFileSizeOnError(_ref3) {
    var root = _ref3.root,
      props = _ref3.props;

    // if size is available don't fallback to unknown size message
    if (isInt(root.query('GET_ITEM_SIZE', props.id))) {
      return;
    }

    text(root.ref.fileSize, root.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'));
  };

  var fileInfo = createView({
    name: 'file-info',
    ignoreRect: true,
    write: createRoute({
      DID_LOAD_ITEM: updateFile,
      DID_UPDATE_ITEM_META: updateFile,
      DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
      DID_THROW_ITEM_INVALID: updateFileSizeOnError
    }),
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', _extends({}, root, { view: root }));
    },
    create: create$9,
    mixins: {
      styles: ['translateX', 'translateY'],
      animations: {
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var toPercentage = function toPercentage(value) {
    return Math.round(value * 100);
  };

  var create$10 = function create(_ref) {
    var root = _ref.root;

    // main status
    var main = createElement$1('span');
    main.className = 'filepond--file-status-main';
    root.appendChild(main);
    root.ref.main = main;

    // sub status
    var sub = createElement$1('span');
    sub.className = 'filepond--file-status-sub';
    root.appendChild(sub);
    root.ref.sub = sub;

    didSetItemLoadProgress({ root: root, action: { progress: null } });
  };

  var didSetItemLoadProgress = function didSetItemLoadProgress(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_LOADING')
        : root.query('GET_LABEL_FILE_LOADING') +
          ' ' +
          toPercentage(action.progress) +
          '%';
    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didSetItemProcessProgress = function didSetItemProcessProgress(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;

    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_PROCESSING')
        : root.query('GET_LABEL_FILE_PROCESSING') +
          ' ' +
          toPercentage(action.progress) +
          '%';
    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didRequestItemProcessing = function didRequestItemProcessing(_ref4) {
    var root = _ref4.root;

    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didAbortItemProcessing = function didAbortItemProcessing(_ref5) {
    var root = _ref5.root;

    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_ABORTED'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_RETRY'));
  };

  var didCompleteItemProcessing$1 = function didCompleteItemProcessing(_ref6) {
    var root = _ref6.root;

    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_COMPLETE'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_UNDO'));
  };

  var clear = function clear(_ref7) {
    var root = _ref7.root;

    text(root.ref.main, '');
    text(root.ref.sub, '');
  };

  var error = function error(_ref8) {
    var root = _ref8.root,
      action = _ref8.action;

    text(root.ref.main, action.status.main);
    text(root.ref.sub, action.status.sub);
  };

  var fileStatus = createView({
    name: 'file-status',
    ignoreRect: true,
    write: createRoute({
      DID_LOAD_ITEM: clear,
      DID_REVERT_ITEM_PROCESSING: clear,
      DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
      DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing$1,
      DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
      DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
      DID_THROW_ITEM_LOAD_ERROR: error,
      DID_THROW_ITEM_INVALID: error,
      DID_THROW_ITEM_PROCESSING_ERROR: error
    }),
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', _extends({}, root, { view: root }));
    },
    create: create$10,
    mixins: {
      styles: ['translateX', 'translateY', 'opacity'],
      animations: {
        opacity: { type: 'tween', duration: 250 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  /**
   * Button definitions for the file view
   */
  var Buttons = {
    AbortItemLoad: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
      action: 'ABORT_ITEM_LOAD',
      className: 'filepond--action-abort-item-load'
    },
    RetryItemLoad: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
      action: 'RETRY_ITEM_LOAD',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-load'
    },
    RemoveItem: {
      label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
      action: 'REMOVE_ITEM',
      icon: 'GET_ICON_REMOVE',
      className: 'filepond--action-remove-item'
    },
    ProcessItem: {
      label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
      action: 'REQUEST_ITEM_PROCESSING',
      icon: 'GET_ICON_PROCESS',
      className: 'filepond--action-process-item'
    },
    AbortItemProcessing: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
      action: 'ABORT_ITEM_PROCESSING',
      className: 'filepond--action-abort-item-processing'
    },
    RetryItemProcessing: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
      action: 'RETRY_ITEM_PROCESSING',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-processing'
    },
    RevertItemProcessing: {
      label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
      action: 'REVERT_ITEM_PROCESSING',
      icon: 'GET_ICON_UNDO',
      className: 'filepond--action-revert-item-processing'
    }
  };

  // make a list of buttons, we can then remove buttons from this list if they're disabled
  var ButtonKeys = [];
  forin(Buttons, function(key) {
    ButtonKeys.push(key);
  });

  var calculateFileInfoOffset = function calculateFileInfoOffset(root) {
    return (
      root.ref.buttonRemoveItem.rect.element.width +
      root.ref.buttonRemoveItem.rect.element.left
    );
  };

  // Force on full pixels so text stays crips
  var calculateFileVerticalCenterOffset = function calculateFileVerticalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.height / 4);
  };
  var calculateFileHorizontalCenterOffset = function calculateFileHorizontalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.left / 2);
  };

  var DefaultStyle = {
    buttonAbortItemLoad: { opacity: 0 },
    buttonRetryItemLoad: { opacity: 0 },
    buttonRemoveItem: { opacity: 0 },
    buttonProcessItem: { opacity: 0 },
    buttonAbortItemProcessing: { opacity: 0 },
    buttonRetryItemProcessing: { opacity: 0 },
    buttonRevertItemProcessing: { opacity: 0 },
    loadProgressIndicator: { opacity: 0 },
    processProgressIndicator: { opacity: 0 },
    processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
    info: { translateX: 0, translateY: 0, opacity: 0 },
    status: { translateX: 0, translateY: 0, opacity: 0 }
  };

  var IdleStyle = {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { translateX: calculateFileInfoOffset }
  };

  var ProcessingStyle = {
    buttonAbortItemProcessing: { opacity: 1 },
    processProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  };

  var StyleMap = {
    DID_THROW_ITEM_INVALID: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset, opacity: 1 }
    },
    DID_START_ITEM_LOAD: {
      buttonAbortItemLoad: { opacity: 1 },
      loadProgressIndicator: { opacity: 1 },
      status: { opacity: 1 }
    },
    DID_THROW_ITEM_LOAD_ERROR: {
      buttonRetryItemLoad: { opacity: 1 },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },
    DID_LOAD_ITEM: IdleStyle,
    DID_LOAD_LOCAL_ITEM: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset }
    },
    DID_START_ITEM_PROCESSING: ProcessingStyle,
    DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
    DID_COMPLETE_ITEM_PROCESSING: {
      buttonRevertItemProcessing: { opacity: 1 },
      info: { opacity: 1 },
      status: { opacity: 1 }
    },
    DID_THROW_ITEM_PROCESSING_ERROR: {
      buttonRemoveItem: { opacity: 1 },
      buttonRetryItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset }
    },
    DID_ABORT_ITEM_PROCESSING: {
      buttonRemoveItem: { opacity: 1 },
      buttonProcessItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },
    DID_REVERT_ITEM_PROCESSING: IdleStyle
  };

  // complete indicator view
  var processingCompleteIndicatorView = createView({
    create: function create(_ref) {
      var root = _ref.root;

      root.element.innerHTML = root.query('GET_ICON_DONE');
    },
    name: 'processing-complete-indicator',
    ignoreRect: true,
    mixins: {
      styles: ['scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  /**
   * Creates the file view
   */
  var create$6 = function create(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    // allow reverting upload
    var allowRevert = root.query('GET_ALLOW_REVERT');

    // enabled buttons array
    var enabledButtons = root.query('IS_ASYNC')
      ? ButtonKeys.concat()
      : ButtonKeys.filter(function(key) {
          return !/Process/.test(key);
        });

    // remove last button (revert) if not allowed
    if (!allowRevert) {
      enabledButtons.splice(-1, 1);
      var map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
      map.info.translateX = calculateFileHorizontalCenterOffset;
      map.info.translateY = calculateFileVerticalCenterOffset;
      map.status.translateY = calculateFileVerticalCenterOffset;
      map.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
    }

    // create the button views
    forin(Buttons, function(key, definition) {
      // create button
      var buttonView = root.createChildView(fileActionButton, {
        label: root.query(definition.label),
        icon: root.query(definition.icon),
        opacity: 0
      });

      // should be appended?
      if (enabledButtons.includes(key)) {
        root.appendChildView(buttonView);
      }

      // add class
      buttonView.element.classList.add(definition.className);

      // handle interactions
      buttonView.on('click', function() {
        root.dispatch(definition.action, { query: props.id });
      });

      // set reference
      root.ref['button' + key] = buttonView;
    });

    // create file info view
    root.ref.info = root.appendChildView(
      root.createChildView(fileInfo, { id: props.id })
    );

    // create file status view
    root.ref.status = root.appendChildView(
      root.createChildView(fileStatus, { id: props.id })
    );

    // checkmark
    root.ref.processingCompleteIndicator = root.appendChildView(
      root.createChildView(processingCompleteIndicatorView)
    );

    // add progress indicators
    root.ref.loadProgressIndicator = root.appendChildView(
      root.createChildView(progressIndicator, { opacity: 0 })
    );
    root.ref.loadProgressIndicator.element.classList.add(
      'filepond--load-indicator'
    );

    root.ref.processProgressIndicator = root.appendChildView(
      root.createChildView(progressIndicator, { opacity: 0 })
    );

    root.ref.processProgressIndicator.element.classList.add(
      'filepond--process-indicator'
    );
  };

  var write$4 = function write(_ref3) {
    var root = _ref3.root,
      actions = _ref3.actions,
      props = _ref3.props;

    // route actions
    route$3({ root: root, actions: actions, props: props });

    // select last state change action
    var action = []
      .concat(toConsumableArray(actions))
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StyleMap[action.type];
      });

    // no need to set same state twice
    if (!action || (action && action.type === props.currentStyle)) {
      return;
    }

    // set current state
    props.currentStyle = action.type;
    var newStyles = StyleMap[props.currentStyle];

    forin(DefaultStyle, function(name, defaultStyles) {
      // get reference to control
      var control = root.ref[name];

      // loop over all styles for this control
      forin(defaultStyles, function(key, defaultValue) {
        var value =
          newStyles[name] && typeof newStyles[name][key] !== 'undefined'
            ? newStyles[name][key]
            : defaultValue;
        control[key] = typeof value === 'function' ? value(root) : value;
      });
    });
  };

  var route$3 = createRoute({
    DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(
      _ref4
    ) {
      var root = _ref4.root,
        action = _ref4.action;

      root.ref.buttonAbortItemProcessing.label = action.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(
      _ref5
    ) {
      var root = _ref5.root,
        action = _ref5.action;

      root.ref.buttonAbortItemLoad.label = action.value;
    },
    DID_REQUEST_ITEM_PROCESSING: function DID_REQUEST_ITEM_PROCESSING(_ref6) {
      var root = _ref6.root;

      root.ref.processProgressIndicator.spin = true;
      root.ref.processProgressIndicator.progress = 0;
    },
    DID_START_ITEM_LOAD: function DID_START_ITEM_LOAD(_ref7) {
      var root = _ref7.root;

      root.ref.loadProgressIndicator.spin = true;
      root.ref.loadProgressIndicator.progress = 0;
    },
    DID_UPDATE_ITEM_LOAD_PROGRESS: function DID_UPDATE_ITEM_LOAD_PROGRESS(
      _ref8
    ) {
      var root = _ref8.root,
        action = _ref8.action;

      root.ref.loadProgressIndicator.spin = false;
      root.ref.loadProgressIndicator.progress = action.progress;
    },
    DID_UPDATE_ITEM_PROCESS_PROGRESS: function DID_UPDATE_ITEM_PROCESS_PROGRESS(
      _ref9
    ) {
      var root = _ref9.root,
        action = _ref9.action;

      root.ref.processProgressIndicator.spin = false;
      root.ref.processProgressIndicator.progress = action.progress;
    }
  });

  var file = createView({
    create: create$6,
    write: write$4,
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', _extends({}, root, { view: root }));
    },
    name: 'file'
  });

  /**
   * Creates the file view
   */
  var create$5 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // filename
    root.ref.fileName = createElement$1('legend');
    root.appendChild(root.ref.fileName);

    // file view
    root.ref.file = root.appendChildView(
      root.createChildView(file, { id: props.id })
    );

    // create data container
    var dataContainer = createElement$1('input');
    dataContainer.type = 'hidden';
    dataContainer.name = root.query('GET_NAME');
    root.ref.data = dataContainer;
    root.appendChild(dataContainer);
  };

  /**
   * Data storage
   */
  var didLoadItem = function didLoadItem(_ref2) {
    var root = _ref2.root,
      action = _ref2.action,
      props = _ref2.props;

    root.ref.data.value = action.serverFileReference;

    // updates the legend of the fieldset so screenreaders can better group buttons
    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var didRemoveItem = function didRemoveItem(_ref3) {
    var root = _ref3.root;

    root.ref.data.removeAttribute('value');
  };

  var didCompleteItemProcessing = function didCompleteItemProcessing(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;

    root.ref.data.value = action.serverFileReference;
  };

  var didRevertItemProcessing = function didRevertItemProcessing(_ref5) {
    var root = _ref5.root;

    root.ref.data.removeAttribute('value');
  };

  var fileWrapper = createView({
    create: create$5,
    write: createRoute({
      DID_LOAD_ITEM: didLoadItem,
      DID_REMOVE_ITEM: didRemoveItem,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
      DID_REVERT_ITEM_PROCESSING: didRevertItemProcessing
    }),
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', _extends({}, root, { view: root }));
    },
    tag: 'fieldset',
    name: 'file-wrapper'
  });

  var PANEL_SPRING_PROPS = { type: 'spring', damping: 0.6, mass: 7 };

  var create$11 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    [
      {
        name: 'top'
      },
      {
        name: 'center',
        props: {
          translateY: null,
          scaleY: null
        },
        mixins: {
          animations: {
            scaleY: PANEL_SPRING_PROPS
          },
          styles: ['translateY', 'scaleY']
        }
      },
      {
        name: 'bottom',
        props: {
          translateY: null
        },
        mixins: {
          animations: {
            translateY: PANEL_SPRING_PROPS
          },
          styles: ['translateY']
        }
      }
    ].forEach(function(section) {
      createSection(root, section, props.name);
    });

    root.element.classList.add('filepond--' + props.name);
  };

  var createSection = function createSection(root, section, className) {
    var viewConstructor = createView({
      name: 'panel-' + section.name + ' filepond--' + className,
      mixins: section.mixins
    });

    var view = root.createChildView(viewConstructor, section.props);

    root.ref[section.name] = root.appendChildView(view);
  };

  var write$7 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (!props.height) {
      return;
    }

    // can it scale?
    root.element.dataset.scalable = isBoolean(props.scalable)
      ? props.scalable
      : true;

    // get child rects
    var topRect = root.ref.top.rect.element;
    var bottomRect = root.ref.bottom.rect.element;

    // make sure height never is smaller than bottom and top seciton heights combined (will probably never happen, but who knows)
    var height = Math.max(topRect.height + bottomRect.height, props.height);

    // offset center part
    root.ref.center.translateY = topRect.height;

    // scale center part
    // use math ceil to prevent transparent lines because of rounding errors
    root.ref.center.scaleY =
      (height - topRect.height - bottomRect.height) / 100;

    // offset bottom part
    root.ref.bottom.translateY = height - bottomRect.height;
  };

  var panel = createView({
    name: 'panel',
    write: write$7,
    create: create$11,
    ignoreRect: true,
    mixins: {
      apis: ['height', 'scalable']
    }
  });

  /**
   * Creates the file view
   */
  var create$4 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // file view
    root.ref.controls = root.appendChildView(
      root.createChildView(fileWrapper, { id: props.id })
    );

    // file panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'item-panel' })
    );

    // default start height
    root.ref.panel.height = 0;

    // by default not marked for removal
    props.markedForRemoval = false;
  };

  var StateMap = {
    DID_START_ITEM_LOAD: 'busy',
    DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
    DID_THROW_ITEM_INVALID: 'load-invalid',
    DID_THROW_ITEM_LOAD_ERROR: 'load-error',
    DID_LOAD_ITEM: 'idle',
    DID_START_ITEM_PROCESSING: 'busy',
    DID_REQUEST_ITEM_PROCESSING: 'busy',
    DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
    DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
    DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
    DID_ABORT_ITEM_PROCESSING: 'cancelled',
    DID_REVERT_ITEM_PROCESSING: 'idle'
  };

  var write$3 = function write(_ref2) {
    var root = _ref2.root,
      actions = _ref2.actions,
      props = _ref2.props;

    // update panel height
    root.ref.panel.height = root.ref.controls.rect.inner.height;

    // set panel height
    root.height = root.ref.controls.rect.inner.height;

    // select last state change action
    var action = []
      .concat(toConsumableArray(actions))
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StateMap[action.type];
      });

    // no need to set same state twice
    if (!action || (action && action.type === props.currentState)) {
      return;
    }

    // set current state
    props.currentState = action.type;

    // set state
    root.element.dataset.filepondItemState = StateMap[props.currentState] || '';
  };

  var item = createView({
    create: create$4,
    write: write$3,
    tag: 'li',
    name: 'item',
    mixins: {
      apis: ['id', 'markedForRemoval'],
      styles: [
        'translateX',
        'translateY',
        'scaleX',
        'scaleY',
        'opacity',
        'height'
      ],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  var create$3 = function create(_ref) {
    var root = _ref.root;

    // need to set role to list as otherwise it won't be read as a list by VoiceOver
    attr(root.element, 'role', 'list');
  };

  /**
   * Inserts a new item
   * @param root
   * @param action
   */
  var addItemView = function addItemView(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    var id = action.id,
      index = action.index,
      interactionMethod = action.interactionMethod;

    var animation = {
      opacity: 0
    };

    if (interactionMethod === InteractionMethod.NONE) {
      animation.translateY = null;
    }

    if (interactionMethod === InteractionMethod.DROP) {
      animation.scaleX = 0.8;
      animation.scaleY = 0.8;
      animation.translateY = null;
    }

    if (interactionMethod === InteractionMethod.BROWSE) {
      animation.translateY = -30;
    }

    if (interactionMethod === InteractionMethod.API) {
      animation.translateX = -100;
      animation.translateY = null;
    }

    root.appendChildView(
      root.createChildView(
        // view type
        item,

        // props
        _extends(
          {
            id: id
          },
          animation
        )
      ),
      index
    );
  };

  /**
   * Removes an existing item
   * @param root
   * @param action
   */
  var removeItemView = function removeItemView(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    var id = action.id;

    // get the view matching the given id

    var view = root.childViews.find(function(child) {
      return child.id === id;
    });

    // if no view found, exit
    if (!view) {
      return;
    }

    // animate view out of view
    view.scaleX = 0.9;
    view.scaleY = 0.9;
    view.opacity = 0;

    // mark for removal
    view.markedForRemoval = true;
  };

  /**
   * Setup action routes
   */
  var route$2 = createRoute({
    DID_ADD_ITEM: addItemView,
    DID_REMOVE_ITEM: removeItemView
  });

  var dragTranslation = function dragTranslation(
    childIndex,
    dragIndex,
    itemMargin
  ) {
    if (childIndex - 1 === dragIndex) {
      return itemMargin / 6;
    }

    if (childIndex === dragIndex) {
      return itemMargin / 2;
    }

    if (childIndex + 1 === dragIndex) {
      return -itemMargin / 2;
    }

    if (childIndex + 2 === dragIndex) {
      return -itemMargin / 6;
    }

    return 0;
  };

  /**
   * Write to view
   * @param root
   * @param actions
   * @param props
   */
  var write$2 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions;

    // route actions
    route$2({ root: root, props: props, actions: actions });

    var resting = true;

    // update item positions
    var offset = 0;
    root.childViews
      .filter(function(child) {
        return child.rect.outer.height;
      })
      .forEach(function(child, childIndex) {
        var childRect = child.rect;

        // set this child offset
        child.translateX = 0;
        child.translateY =
          offset +
          (props.dragIndex > -1
            ? dragTranslation(childIndex, props.dragIndex, 10)
            : 0);

        // show child if it's not marked for removal
        if (!child.markedForRemoval) {
          child.scaleX = 1;
          child.scaleY = 1;
          child.opacity = 1;
        }

        // calculate next child offset (reduce height by y scale for views that are being removed)
        offset += childRect.outer.height;
      });

    // remove marked views
    root.childViews
      .filter(function(view) {
        return view.markedForRemoval && view.opacity === 0;
      })
      .forEach(function(view) {
        root.removeChildView(view);
        resting = false;
      });

    return resting;
  };

  /**
   * Filters actions that are meant specifically for a certain child of the list
   * @param child
   * @param actions
   */
  var filterSetItemActions = function filterSetItemActions(child, actions) {
    return actions.filter(function(action) {
      // if action has an id, filter out actions that don't have this child id
      if (action.data && action.data.id) {
        return child.id === action.data.id;
      }

      // allow all other actions
      return true;
    });
  };

  var list = createView({
    create: create$3,
    write: write$2,
    tag: 'ul',
    name: 'list',
    filterFrameActionsForChild: filterSetItemActions,
    mixins: {
      apis: ['dragIndex']
    }
  });

  var getItemIndexByPosition = function getItemIndexByPosition(
    view,
    positionInView
  ) {
    var i = 0;
    var childViews = view.childViews;
    var l = childViews.length;
    for (; i < l; i++) {
      var item = childViews[i];
      var itemRect = item.rect.outer;
      var itemRectMid = itemRect.top + itemRect.height * 0.5;

      if (positionInView.top < itemRectMid) {
        return i;
      }
    }

    return l;
  };

  var create$2 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    root.ref.list = root.appendChildView(root.createChildView(list));

    props.dragCoordinates = null;
    props.overflowing = false;
  };

  var storeDragCoordinates = function storeDragCoordinates(_ref2) {
    var root = _ref2.root,
      props = _ref2.props,
      action = _ref2.action;

    props.dragCoordinates = {
      left: action.position.scopeLeft,
      top:
        action.position.scopeTop -
        root.rect.outer.top +
        root.rect.element.scrollTop
    };
  };

  var clearDragCoordinates = function clearDragCoordinates(_ref3) {
    var props = _ref3.props;

    props.dragCoordinates = null;
  };

  var route$1 = createRoute({
    DID_DRAG: storeDragCoordinates,
    DID_END_DRAG: clearDragCoordinates
  });

  var write$1 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions;

    // route actions
    route$1({ root: root, props: props, actions: actions });

    // current drag position
    root.ref.list.dragIndex = props.dragCoordinates
      ? getItemIndexByPosition(root.ref.list, props.dragCoordinates)
      : -1;

    // if currently overflowing but no longer received overflow
    if (props.overflowing && !props.overflow) {
      props.overflowing = false;

      // reset overflow state
      root.element.dataset.state = '';
      root.height = null;
    }

    // if is not overflowing currently but does receive overflow value
    if (!props.overflowing && props.overflow) {
      props.overflowing = true;
      root.element.dataset.state = 'overflow';
      root.height = props.overflow - root.translateY;
    }
  };

  var listScroller = createView({
    create: create$2,
    write: write$1,
    name: 'list-scroller',
    mixins: {
      apis: ['overflow'],
      styles: ['height', 'translateY']
    }
  });

  var attrToggle = function attrToggle(element, name, state) {
    var enabledValue =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    if (state) {
      attr(element, name, enabledValue);
    } else {
      element.removeAttribute(name);
    }
  };

  var resetFileInput = function resetFileInput(input) {
    // no value, no need to reset
    if (!input || input.value === '') {
      return;
    }

    try {
      // for modern browsers
      input.value = '';
    } catch (err) {}

    // for IE10
    if (input.value) {
      // quickly append input to temp form and reset form
      var form = createElement$1('form');
      var parentNode = input.parentNode;
      var ref = input.nextSibling;
      form.appendChild(input);
      form.reset();

      // re-inject input where it originally was
      if (ref) {
        parentNode.insertBefore(input, ref);
      } else {
        parentNode.appendChild(input);
      }
    }
  };

  var create$12 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // set id so can be referenced from outside labels
    root.element.id = 'filepond--browser-' + props.id;

    // we have to link this element to the status element
    attr(root.element, 'aria-controls', 'filepond--assistant-' + props.id);

    // set label, we use labelled by as otherwise the screenreader does not read the "browse" text in the label (as it has tabindex: 0)
    attr(root.element, 'aria-labelledby', 'filepond--drop-label-' + props.id);

    // handle changes to the input field
    root.element.addEventListener('change', function() {
      if (!root.element.value) {
        return;
      }

      // extract files
      var files = [].concat(toConsumableArray(root.element.files));

      // we add a little delay so the OS file select window can move out of the way before we add our file
      setTimeout(function() {
        // load files
        props.onload(files);

        // reset input, it's just for exposing a method to drop files, should not retain any state
        resetFileInput(root.element);
      }, 250);
    });
  };

  var setAcceptedFileTypes = function setAcceptedFileTypes(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    attrToggle(
      root.element,
      'accept',
      !!action.value,
      action.value ? action.value.join(',') : ''
    );
  };

  var toggleAllowMultiple = function toggleAllowMultiple(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;

    attrToggle(root.element, 'multiple', action.value);
  };

  var toggleAllowBrowse$1 = function toggleAllowBrowse(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;

    attrToggle(root.element, 'disabled', !action.value);
  };

  var toggleRequired = function toggleRequired(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;

    // want to remove required, always possible
    if (!action.value) {
      attrToggle(root.element, 'required', false);
    } else if (root.query('GET_TOTAL_ITEMS') === 0) {
      // if want to make required, only possible when zero items
      attrToggle(root.element, 'required', true);
    }
  };

  var setCaptureMethod = function setCaptureMethod(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;

    attrToggle(
      root.element,
      'capture',
      !!action.value,
      action.value === true ? '' : action.value
    );
  };

  var updateRequiredStatus = function updateRequiredStatus(_ref8) {
    var root = _ref8.root;

    // always remove the required attribute when more than zero items
    if (root.query('GET_TOTAL_ITEMS') > 0) {
      attrToggle(root.element, 'required', false);
    } else if (root.query('GET_REQUIRED')) {
      // if zero items, we only add it if the field is required
      attrToggle(root.element, 'required', true);
    }
  };

  var browser = createView({
    tag: 'input',
    name: 'browser',
    ignoreRect: true,
    attributes: {
      type: 'file'
    },
    create: create$12,
    write: createRoute({
      DID_ADD_ITEM: updateRequiredStatus,
      DID_REMOVE_ITEM: updateRequiredStatus,
      DID_SET_ALLOW_BROWSE: toggleAllowBrowse$1,
      DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
      DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
      DID_SET_CAPTURE_METHOD: setCaptureMethod,
      DID_SET_REQUIRED: toggleRequired
    })
  });

  var Key = {
    ENTER: 13,
    SPACE: 32
  };

  var create$13 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // create the label and link it to the file browser
    var label = createElement$1('label');
    attr(label, 'for', 'filepond--browser-' + props.id);

    // use for labeling file input (aria-labelledby on file input)
    attr(label, 'id', 'filepond--drop-label-' + props.id);

    // hide the label from screenreaders, the input element has an aria-label
    attr(label, 'aria-hidden', 'true');

    // handle keys
    label.addEventListener('keydown', function(e) {
      if (e.keyCode === Key.ENTER || e.keyCode === Key.SPACE) {
        // stops from triggering the element a second time
        e.preventDefault();

        // click link (will then in turn activate file input)
        root.ref.label.click();
      }
    });

    // add!
    root.appendChild(label);
    root.ref.label = label;
  };

  var updateLabelValue = function updateLabelValue(label, value) {
    label.innerHTML = value;
    var clickable = label.querySelector('.filepond--label-action');
    if (clickable) {
      attr(clickable, 'tabindex', '0');
    }
    return value;
  };

  var dropLabel = createView({
    name: 'drop-label',
    create: create$13,
    write: createRoute({
      DID_SET_LABEL_IDLE: function DID_SET_LABEL_IDLE(_ref2) {
        var root = _ref2.root,
          action = _ref2.action,
          props = _ref2.props;

        props.caption = updateLabelValue(root.ref.label, action.value);
      }
    }),
    mixins: {
      apis: ['caption'],
      styles: ['opacity', 'translateX', 'translateY'],
      animations: {
        opacity: { type: 'tween', duration: 150 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var blob = createView({
    name: 'drip-blob',
    ignoreRect: true,
    mixins: {
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  var addBlob = function addBlob(_ref) {
    var root = _ref.root;

    var centerX = root.rect.element.width * 0.5;
    var centerY = root.rect.element.height * 0.5;

    root.ref.blob = root.appendChildView(
      root.createChildView(blob, {
        opacity: 0,
        scaleX: 2.5,
        scaleY: 2.5,
        translateX: centerX,
        translateY: centerY
      })
    );
  };

  var moveBlob = function moveBlob(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    if (!root.ref.blob) {
      addBlob({ root: root });
      return;
    }

    root.ref.blob.translateX = action.position.scopeLeft;
    root.ref.blob.translateY = action.position.scopeTop;
    root.ref.blob.scaleX = 1;
    root.ref.blob.scaleY = 1;
    root.ref.blob.opacity = 1;
  };

  var hideBlob = function hideBlob(_ref3) {
    var root = _ref3.root;

    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.opacity = 0;
  };

  var explodeBlob = function explodeBlob(_ref4) {
    var root = _ref4.root;

    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.scaleX = 2.5;
    root.ref.blob.scaleY = 2.5;
    root.ref.blob.opacity = 0;
  };

  var write$8 = function write(_ref5) {
    var root = _ref5.root,
      props = _ref5.props,
      actions = _ref5.actions;

    route$4({ root: root, props: props, actions: actions });

    var blob$$1 = root.ref.blob;

    if (actions.length === 0 && blob$$1 && blob$$1.opacity === 0) {
      root.removeChildView(blob$$1);
      root.ref.blob = null;
    }
  };

  var route$4 = createRoute({
    DID_DRAG: moveBlob,
    DID_DROP: explodeBlob,
    DID_END_DRAG: hideBlob
  });

  var drip = createView({
    ignoreRect: true,
    name: 'drip',
    write: write$8
  });

  var getRootNode = function getRootNode(element) {
    return 'getRootNode' in element ? element.getRootNode() : document;
  };

  var requestDataTransferItems = function requestDataTransferItems(
    dataTransfer
  ) {
    return new Promise(function(resolve, reject) {
      // try to get links from transfer, if found, we'll exit immidiately
      // as only one link can be dragged at once
      var links = getLinks(dataTransfer);
      if (links.length) {
        resolve(links);
        return;
      }

      // try to get files from the transfer
      getFiles(dataTransfer).then(resolve);
    });
  };

  /**
   * Extracts files from a DataTransfer object
   */
  var getFiles = function getFiles(dataTransfer) {
    return new Promise(function(resolve, reject) {
      // get the transfer items as promises
      var promisedFiles = (dataTransfer.items
        ? [].concat(toConsumableArray(dataTransfer.items))
        : []
      )
        // only keep file system items (files and directories)
        .filter(function(item) {
          return isFileSystemItem(item);
        })

        // map each item to promise
        .map(function(item) {
          return getFilesFromItem(item);
        });

      // if is empty, see if we can extract some info from the files property as a fallback
      if (!promisedFiles.length) {
        // TODO: test for directories (should not be allowed)
        // Use FileReader, problem is that the files property gets lost in the process

        resolve(
          dataTransfer.files
            ? [].concat(toConsumableArray(dataTransfer.files))
            : []
        );
        return;
      }

      // done!
      Promise.all(promisedFiles).then(function(returendFileGroups) {
        // flatten groups
        var files = [];
        returendFileGroups.forEach(function(group) {
          files.push.apply(files, toConsumableArray(group));
        });

        // done (filter out empty files)!
        resolve(
          files.filter(function(file) {
            return file;
          })
        );
      });
    });
  };

  var isFileSystemItem = function isFileSystemItem(item) {
    if (isEntry(item)) {
      var entry = getAsEntry(item);
      if (entry) {
        return entry.isFile || entry.isDirectory;
      }
    }
    return item.kind === 'file';
  };

  var getFilesFromItem = function getFilesFromItem(item) {
    return new Promise(function(resolve, reject) {
      if (isDirectoryEntry(item)) {
        getFilesInDirectory(getAsEntry(item)).then(resolve);
        return;
      }

      resolve([item.getAsFile()]);
    });
  };

  var getFilesInDirectory = function getFilesInDirectory(entry) {
    return new Promise(function(resolve, reject) {
      var files = [];

      // the total entries to read
      var totalFilesFound = 0;

      // the recursive function
      var readEntries = function readEntries(dirEntry) {
        var directoryReader = dirEntry.createReader();
        directoryReader.readEntries(function(entries) {
          entries.forEach(function(entry) {
            // recursively read more directories
            if (entry.isDirectory) {
              readEntries(entry);
            } else {
              // read as file
              totalFilesFound++;
              entry.file(function(file) {
                files.push(file);

                if (totalFilesFound === files.length) {
                  resolve(files);
                }
              });
            }
          });
        });
      };

      // go!
      readEntries(entry);
    });
  };

  var isDirectoryEntry = function isDirectoryEntry(item) {
    return isEntry(item) && (getAsEntry(item) || {}).isDirectory;
  };

  var isEntry = function isEntry(item) {
    return 'webkitGetAsEntry' in item;
  };

  var getAsEntry = function getAsEntry(item) {
    return item.webkitGetAsEntry();
  };

  /**
   * Extracts links from a DataTransfer object
   */
  var getLinks = function getLinks(dataTransfer) {
    var links = [];
    try {
      // look in meta data property
      links = getLinksFromTransferMetaData(dataTransfer);
      if (links.length) {
        return links;
      }
      links = getLinksFromTransferURLData(dataTransfer);
    } catch (e) {
      // nope nope nope (probably IE trouble)
    }
    return links;
  };

  var getLinksFromTransferURLData = function getLinksFromTransferURLData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('url');
    if (typeof data === 'string' && data.length) {
      return [data];
    }
    return [];
  };

  var getLinksFromTransferMetaData = function getLinksFromTransferMetaData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('text/html');
    if (typeof data === 'string' && data.length) {
      var matches = data.match(/src\s*=\s*"(.+?)"/);
      if (matches) {
        return [matches[1]];
      }
    }
    return [];
  };

  var dragNDropObservers = [];

  var eventPosition = function eventPosition(e) {
    return {
      pageLeft: e.pageX,
      pageTop: e.pageY,
      scopeLeft: e.layerX || e.offsetX,
      scopeTop: e.layerY || e.offsetY
    };
  };

  var createDragNDropClient = function createDragNDropClient(
    element,
    scopeToObserve,
    filterElement
  ) {
    var observer = getDragNDropObserver(scopeToObserve);

    var client = {
      element: element,
      filterElement: filterElement,
      state: null,
      ondrop: function ondrop() {},
      onenter: function onenter() {},
      ondrag: function ondrag() {},
      onexit: function onexit() {},
      onload: function onload() {},
      allowdrop: function allowdrop() {}
    };

    client.destroy = observer.addListener(client);

    return client;
  };

  var getDragNDropObserver = function getDragNDropObserver(element) {
    // see if already exists, if so, return
    var observer = dragNDropObservers.find(function(item) {
      return item.element === element;
    });
    if (observer) {
      return observer;
    }

    // create new observer, does not yet exist for this element
    var newObserver = createDragNDropObserver(element);
    dragNDropObservers.push(newObserver);
    return newObserver;
  };

  var createDragNDropObserver = function createDragNDropObserver(element) {
    var clients = [];

    var routes = {
      dragenter: dragenter,
      dragover: dragover,
      dragleave: dragleave,
      drop: drop
    };

    var handlers = {};

    forin(routes, function(event, createHandler) {
      handlers[event] = createHandler(element, clients);
      element.addEventListener(event, handlers[event], false);
    });

    var observer = {
      element: element,
      addListener: function addListener(client) {
        // add as client
        clients.push(client);

        // return removeListener function
        return function() {
          // remove client
          clients.splice(clients.indexOf(client), 1);

          // if no more clients, clean up observer
          if (clients.length === 0) {
            dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);

            forin(routes, function(event) {
              element.removeEventListener(event, handlers[event], false);
            });
          }
        };
      }
    };

    return observer;
  };

  var isEventTarget = function isEventTarget(e, target) {
    // get root
    var root = getRootNode(target);

    // get element at position
    var elementAtPosition = root.elementFromPoint(
      e.pageX - window.pageXOffset,
      e.pageY - window.pageYOffset
    );

    // test if target is the element or if one of its children is
    return elementAtPosition === target || target.contains(elementAtPosition);
  };

  var initialTarget = null;

  var setDropEffect = function setDropEffect(dataTransfer, effect) {
    // is in try catch as IE11 will throw error if not
    try {
      dataTransfer.dropEffect = effect;
    } catch (e) {}
  };

  var dragenter = function dragenter(root, clients) {
    return function(e) {
      e.preventDefault();

      initialTarget = e.target;

      clients.forEach(function(client) {
        var element = client.element,
          onenter = client.onenter;

        if (isEventTarget(e, element)) {
          client.state = 'enter';

          // fire enter event
          onenter(eventPosition(e));
        }
      });
    };
  };

  var dragover = function dragover(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;

      requestDataTransferItems(dataTransfer).then(function(items) {
        var overDropTarget = false;

        clients.some(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            onenter = client.onenter,
            onexit = client.onexit,
            ondrag = client.ondrag,
            allowdrop = client.allowdrop;

          // by default we can drop

          setDropEffect(dataTransfer, 'copy');

          // allow transfer of these items
          var allowsTransfer = allowdrop(items);

          // only used when can be dropped on page
          if (!allowsTransfer) {
            setDropEffect(dataTransfer, 'none');
            return;
          }

          // targetting this client
          if (isEventTarget(e, element)) {
            overDropTarget = true;

            // had no previous state, means we are entering this client
            if (client.state === null) {
              client.state = 'enter';
              onenter(eventPosition(e));
              return;
            }

            // now over element (no matter if it allows the drop or not)
            client.state = 'over';

            // needs to allow transfer
            if (filterElement && !allowsTransfer) {
              setDropEffect(dataTransfer, 'none');
              return;
            }

            // dragging
            ondrag(eventPosition(e));
          } else {
            // should be over an element to drop
            if (filterElement && !overDropTarget) {
              setDropEffect(dataTransfer, 'none');
            }

            // might have just left this client?
            if (client.state) {
              client.state = null;
              onexit(eventPosition(e));
            }
          }
        });
      });
    };
  };

  var drop = function drop(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;
      requestDataTransferItems(dataTransfer).then(function(items) {
        clients.forEach(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            ondrop = client.ondrop,
            onexit = client.onexit,
            allowdrop = client.allowdrop;

          client.state = null;

          var allowsTransfer = allowdrop(items);

          // no transfer for this client
          if (!allowsTransfer) {
            onexit(eventPosition(e));
            return;
          }

          // if we're filtering on element we need to be over the element to drop
          if (filterElement && !isEventTarget(e, element)) {
            return;
          }

          ondrop(eventPosition(e), items);
        });
      });
    };
  };

  var dragleave = function dragleave(root, clients) {
    return function(e) {
      if (initialTarget !== e.target) {
        return;
      }

      clients.forEach(function(client) {
        var onexit = client.onexit;

        client.state = null;

        onexit(eventPosition(e));
      });
    };
  };

  var createHopper = function createHopper(scope, validateItems, options) {
    // is now hopper scope
    scope.classList.add('filepond--hopper');

    // shortcuts
    var catchesDropsOnPage = options.catchesDropsOnPage,
      requiresDropOnElement = options.requiresDropOnElement;

    // create a dnd client

    var client = createDragNDropClient(
      scope,
      catchesDropsOnPage ? document.documentElement : scope,
      requiresDropOnElement
    );

    // current client state
    var lastState = '';
    var currentState = '';

    // determines if a file may be dropped
    client.allowdrop = function(items) {
      // TODO: if we can, throw error to indicate the items cannot by dropped

      return validateItems(items);
    };

    client.ondrop = function(position, items) {
      if (!validateItems(items)) {
        api.ondragend(position);
        return;
      }

      currentState = 'drag-drop';

      api.onload(items, position);
    };

    client.ondrag = function(position) {
      api.ondrag(position);
    };

    client.onenter = function(position) {
      currentState = 'drag-over';

      api.ondragstart(position);
    };

    client.onexit = function(position) {
      currentState = 'drag-exit';

      api.ondragend(position);
    };

    var api = {
      updateHopperState: function updateHopperState() {
        if (lastState !== currentState) {
          scope.dataset.hopperState = currentState;
          lastState = currentState;
        }
      },
      onload: function onload() {},
      ondragstart: function ondragstart() {},
      ondrag: function ondrag() {},
      ondragend: function ondragend() {},
      destroy: function destroy() {
        // destroy client
        client.destroy();
      }
    };

    return api;
  };

  var listening = false;
  var listeners$1 = [];

  var handlePaste = function handlePaste(e) {
    requestDataTransferItems(e.clipboardData).then(function(files) {
      // no files received
      if (!files.length) {
        return;
      }

      // notify listeners of received files
      listeners$1.forEach(function(listener) {
        return listener(files);
      });
    });
  };

  var listen = function listen(cb) {
    // can't add twice
    if (listeners$1.includes(cb)) {
      return;
    }

    // add initial listener
    listeners$1.push(cb);

    // setup paste listener for entire page
    if (listening) {
      return;
    }

    listening = true;
    document.addEventListener('paste', handlePaste);
  };

  var unlisten = function unlisten(listener) {
    arrayRemove(listeners$1, listeners$1.indexOf(listener));

    // clean up
    if (listeners$1.length === 0) {
      document.removeEventListener('paste', handlePaste);
      listening = false;
    }
  };

  var createPaster = function createPaster() {
    var cb = function cb(files) {
      api.onload(files);
    };

    var api = {
      destroy: function destroy() {
        unlisten(cb);
      },
      onload: function onload() {}
    };

    listen(cb);

    return api;
  };

  var debounce = function debounce(func) {
    var interval =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
    var immidiateOnly =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var last = Date.now();
    var timeout = null;

    return function() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      clearTimeout(timeout);

      var dist = Date.now() - last;

      var fn = function fn() {
        last = Date.now();
        func.apply(undefined, args);
      };

      if (dist < interval) {
        // we need to delay by the difference between interval and dist
        // for example: if distance is 10 ms and interval is 16 ms,
        // we need to wait an additional 6ms before calling the function)
        if (!immidiateOnly) {
          timeout = setTimeout(fn, interval - dist);
        }
      } else {
        // go!
        fn();
      }
    };
  };

  /**
   * Creates the file view
   */
  var create$14 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    root.element.id = 'filepond--assistant-' + props.id;
    attr(root.element, 'role', 'status');
    attr(root.element, 'aria-live', 'polite');
    attr(root.element, 'aria-relevant', 'additions');
  };

  var addFilesNotificationTimeout = null;
  var notificationClearTimeout = null;

  var filenames = [];

  var assist = function assist(root, message) {
    root.element.textContent = message;
  };

  var clear$1 = function clear(root) {
    root.element.textContent = '';
  };

  var listModified = function listModified(root, filename, label) {
    var total = root.query('GET_TOTAL_ITEMS');
    assist(
      root,
      label +
        ' ' +
        filename +
        ', ' +
        total +
        ' ' +
        (total === 1
          ? root.query('GET_LABEL_FILE_COUNT_SINGULAR')
          : root.query('GET_LABEL_FILE_COUNT_PLURAL'))
    );

    // clear group after set amount of time so the status is not read twice
    clearTimeout(notificationClearTimeout);
    notificationClearTimeout = setTimeout(function() {
      clear$1(root);
    }, 1500);
  };

  var isUsingFilePond = function isUsingFilePond(root) {
    return root.element.parentNode.contains(document.activeElement);
  };

  var itemAdded = function itemAdded(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    if (!isUsingFilePond(root)) {
      return;
    }

    root.element.textContent = '';
    var item = root.query('GET_ITEM', action.id);
    filenames.push(item.filename);

    clearTimeout(addFilesNotificationTimeout);
    addFilesNotificationTimeout = setTimeout(function() {
      listModified(
        root,
        filenames.join(', '),
        root.query('GET_LABEL_FILE_ADDED')
      );
      filenames.length = 0;
    }, 750);
  };

  var itemRemoved = function itemRemoved(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;

    if (!isUsingFilePond(root)) {
      return;
    }

    var item = action.item;
    listModified(root, item.filename, root.query('GET_LABEL_FILE_REMOVED'));
  };

  var itemProcessed = function itemProcessed(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;

    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_COMPLETE');

    assist(root, filename + ' ' + label);
  };

  var itemProcessedUndo = function itemProcessedUndo(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_ABORTED');

    assist(root, filename + ' ' + label);
  };

  var itemError = function itemError(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;

    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    assist(root, action.status.main + ' ' + filename + ' ' + action.status.sub);
  };

  var assistant = createView({
    create: create$14,
    ignoreRect: true,
    write: createRoute({
      DID_LOAD_ITEM: itemAdded,
      DID_REMOVE_ITEM: itemRemoved,
      DID_COMPLETE_ITEM_PROCESSING: itemProcessed,

      DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
      DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,

      DID_THROW_ITEM_LOAD_ERROR: itemError,
      DID_THROW_ITEM_INVALID: itemError,
      DID_THROW_ITEM_PROCESSING_ERROR: itemError
    }),
    tag: 'span',
    name: 'assistant'
  });

  var create$1 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // Add id
    var id = root.query('GET_ID');
    if (id) {
      root.element.id = id;
    }

    // Add className
    var className = root.query('GET_CLASS_NAME');
    if (className) {
      className.split(' ').forEach(function(name) {
        root.element.classList.add(name);
      });
    }

    // Field label
    root.ref.label = root.appendChildView(
      root.createChildView(dropLabel, _extends({}, props, { translateY: null }))
    );

    // List of items
    root.ref.list = root.appendChildView(
      root.createChildView(listScroller, { translateY: null })
    );

    // Background panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'panel-root' })
    );

    // Assistant notifies assistive tech when content changes
    root.ref.assistant = root.appendChildView(
      root.createChildView(assistant, _extends({}, props))
    );

    // Measure (tests if fixed height was set)
    // DOCTYPE needs to be set for this to work
    root.ref.measure = createElement$1('div');
    root.ref.measure.style.height = '100%';
    root.element.appendChild(root.ref.measure);
  };

  var write = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props,
      actions = _ref2.actions;

    // route actions
    route({ root: root, props: props, actions: actions });

    // get quick references to various high level parts of the upload tool
    var _root$ref = root.ref,
      hopper = _root$ref.hopper,
      label = _root$ref.label,
      list = _root$ref.list,
      panel$$1 = _root$ref.panel;

    // bool to indicate if we're full or not

    var isMultiItem = root.query('GET_ALLOW_MULTIPLE');
    var totalItems = root.query('GET_TOTAL_ITEMS');
    var maxItems = root.query('GET_MAX_FILES');
    var atMaxCapacity = isMultiItem
      ? totalItems === maxItems
      : totalItems === 1;

    // views not used in height calculation
    var childrenUsedForBoundingCalculation = [].concat(
      toConsumableArray(list.childViews[0].childViews)
    );

    // views used to calculate the visual height of the container (which is passed to panel)
    var childrenUsedForVisualHeightCalculation = [list];

    // action used to add item
    var addAction = actions.find(function(action) {
      return action.type === 'DID_ADD_ITEM';
    });

    // if at max capacity hide the label
    if (atMaxCapacity && addAction) {
      // get interaction type
      var interactionMethod = addAction.data.interactionMethod;

      // hide label
      label.opacity = 0;

      // if is multi-item, the label is always moved upwards
      if (isMultiItem) {
        label.translateY = -label.rect.element.height;
      } else {
        // based on interaction method we move label in different directions
        if (interactionMethod === InteractionMethod.API) {
          label.translateX = 40;
        } else if (interactionMethod === InteractionMethod.BROWSE) {
          label.translateY = 40;
        } else {
          label.translateY = -40;
        }
      }
    } else if (!atMaxCapacity) {
      // reveal label
      label.opacity = 1;
      label.translateY = root.rect.element.paddingTop;
      label.translateX = 0;

      // we use label for bounding box
      childrenUsedForVisualHeightCalculation.push(label);
      childrenUsedForBoundingCalculation.push(label);
    }

    // sets correct state to hopper scope
    if (hopper) {
      hopper.updateHopperState();
    }

    // need a label to do anything
    if (!label.caption) {
      return;
    }

    // link list to label bottom position (including bottom margin)
    list.translateY = isMultiItem
      ? label.rect.outer.bottom
      : root.rect.element.paddingTop;

    // update bounding box if has changed
    var boxBounding = calculateRootBoundingBoxHeight(root, props);
    var childrenBoundingHeight = calculateChildrenBoundingBoxHeight(
      childrenUsedForBoundingCalculation
    );
    var visualHeight = calculateChildrenVisualHeight(
      childrenUsedForVisualHeightCalculation
    );
    var bottomPadding = totalItems > 0 ? root.rect.element.paddingTop * 0.5 : 0;

    if (boxBounding.fixedHeight) {
      // fixed height

      // fixed height panel
      panel$$1.scalable = false;

      // link panel height to box bounding
      panel$$1.height = boxBounding.fixedHeight + root.rect.element.paddingTop;

      // set overflow
      list.overflow =
        childrenBoundingHeight > panel$$1.height && isMultiItem
          ? panel$$1.height
          : null;
    } else if (boxBounding.cappedHeight) {
      // max-height

      // not a fixed height panel
      panel$$1.scalable = true;

      // limit children bounding height to the set capped height
      var cappedChildrenBoundingHeight = Math.min(
        boxBounding.cappedHeight,
        childrenBoundingHeight
      );

      // update root height
      root.height = cappedChildrenBoundingHeight + bottomPadding;

      // set visual height
      panel$$1.height = Math.min(
        boxBounding.cappedHeight + root.rect.element.paddingTop,
        visualHeight + bottomPadding
      );

      // if can overflow, test if is currently overflowing
      list.overflow =
        childrenBoundingHeight > panel$$1.height && isMultiItem
          ? panel$$1.height
          : null;
    } else {
      // flexible height

      // not a fixed height panel
      panel$$1.scalable = true;

      // set to new bounding
      root.height =
        childrenBoundingHeight + bottomPadding + root.rect.element.paddingTop;

      // set height to new visual height
      panel$$1.height = visualHeight + bottomPadding;
    }
  };

  var calculateChildrenVisualHeight = function calculateChildrenVisualHeight(
    children
  ) {
    return (
      children

        // calculate the total height occupied by all children
        .reduce(function(max, child) {
          var bottom = child.rect.outer.bottom;

          if (bottom > max) {
            max = bottom;
          }

          return max;
        }, 0)
    );
  };

  var calculateRootBoundingBoxHeight = function calculateRootBoundingBoxHeight(
    root,
    props
  ) {
    // only calculate first time
    if (props.boxBounding) {
      return props.boxBounding;
    }

    var height = root.ref.measureHeight || null;
    var cappedHeight = parseInt(root.style.maxHeight, 10) || null;
    var fixedHeight = height === 0 ? null : height;

    props.boxBounding = {
      cappedHeight: cappedHeight,
      fixedHeight: fixedHeight
    };

    // destroy measure element
    root.element.removeChild(root.ref.measure);
    root.ref.measure = null;

    // done!
    return props.boxBounding;
  };

  var calculateChildrenBoundingBoxHeight = function calculateChildrenBoundingBoxHeight(
    children
  ) {
    return (
      children

        // no use of outer and inner as that includes translations
        .reduce(function(height, child) {
          return (
            height + child.rect.inner.bottom + child.rect.element.marginBottom
          );
        }, 0)
    );
  };

  var toggleAllowDrop = function toggleAllowDrop(_ref3) {
    var root = _ref3.root,
      props = _ref3.props,
      action = _ref3.action;

    if (action.value && !root.ref.hopper) {
      var hopper = createHopper(
        root.element,
        function(items) {
          var allowReplace = root.query('GET_ALLOW_REPLACE');
          var allowMultiple = root.query('GET_ALLOW_MULTIPLE');
          var totalItems = root.query('GET_TOTAL_ITEMS');
          var dropValidation = root.query('GET_DROP_VALIDATION');
          var maxItems = root.query('GET_MAX_TOTAL_ITEMS');

          // total amount of items being dragged
          var totalDragItems = items.length;

          // if does not allow multiple items and dragging more than one item
          if (!allowMultiple && totalDragItems > 1) {
            return false;
          }

          // limit max items to one if not allowed to drop multiple items
          maxItems = allowMultiple ? maxItems : allowReplace ? maxItems : 1;

          // no more room?
          var hasMaxItems = isInt(maxItems);
          if (hasMaxItems && totalItems + totalDragItems > maxItems) {
            return false;
          }

          // all items should be validated by all filters as valid
          return dropValidation
            ? items.every(function(item) {
                return applyFilters('ALLOW_HOPPER_ITEM', item, {
                  query: root.query
                }).every(function(result) {
                  return result === true;
                });
              })
            : true;
        },
        {
          catchesDropsOnPage: root.query('GET_DROP_ON_PAGE'),
          requiresDropOnElement: root.query('GET_DROP_ON_ELEMENT')
        }
      );

      hopper.onload = function(items, position) {
        var itemList = root.ref.list.childViews[0];
        var index = getItemIndexByPosition(itemList, {
          left: position.scopeLeft,
          top:
            position.scopeTop -
            root.ref.list.rect.outer.top +
            root.ref.list.element.scrollTop
        });

        forEachDelayed(items, function(source) {
          root.dispatch('ADD_ITEM', {
            interactionMethod: InteractionMethod.DROP,
            source: source,
            index: index
          });
        });

        root.dispatch('DID_DROP', { position: position });

        root.dispatch('DID_END_DRAG', { position: position });
      };

      hopper.ondragstart = function(position) {
        root.dispatch('DID_START_DRAG', { position: position });
      };

      hopper.ondrag = debounce(function(position) {
        root.dispatch('DID_DRAG', { position: position });
      });

      hopper.ondragend = function(position) {
        root.dispatch('DID_END_DRAG', { position: position });
      };

      root.ref.hopper = hopper;

      root.ref.drip = root.appendChildView(root.createChildView(drip));
    } else if (!action.value && root.ref.hopper) {
      root.ref.hopper.destroy();
      root.ref.hopper = null;
      root.removeChildView(root.ref.drip);
    }
  };

  /**
   * Enable or disable browse functionality
   */
  var toggleAllowBrowse = function toggleAllowBrowse(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      action = _ref4.action;

    if (action.value) {
      root.ref.browser = root.appendChildView(
        root.createChildView(
          browser,
          _extends({}, props, {
            onload: function onload(items) {
              forEachDelayed(items, function(source) {
                root.dispatch('ADD_ITEM', {
                  interactionMethod: InteractionMethod.BROWSE,
                  source: source,
                  index: 0
                });
              });
            }
          })
        ),
        0
      );
    } else if (root.ref.browser) {
      root.removeChildView(root.ref.browser);
    }
  };

  /**
   * Enable or disable paste functionality
   */
  var toggleAllowPaste = function toggleAllowPaste(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;

    if (action.value) {
      root.ref.paster = createPaster();
      root.ref.paster.onload = function(items) {
        forEachDelayed(items, function(source) {
          root.dispatch('ADD_ITEM', {
            interactionMethod: InteractionMethod.PASTE,
            source: source,
            index: 0
          });
        });
      };
    } else if (root.ref.paster) {
      root.ref.paster.destroy();
      root.ref.paster = null;
    }
  };

  /**
   * Route actions
   */
  var route = createRoute({
    DID_SET_ALLOW_BROWSE: toggleAllowBrowse,
    DID_SET_ALLOW_DROP: toggleAllowDrop,
    DID_SET_ALLOW_PASTE: toggleAllowPaste
  });

  var root = createView({
    name: 'root',
    read: function read(_ref6) {
      var root = _ref6.root;

      if (root.ref.measure) {
        root.ref.measureHeight = root.ref.measure.offsetHeight;
      }
    },
    create: create$1,
    write: write,
    destroy: function destroy(_ref7) {
      var root = _ref7.root;

      if (root.ref.paster) {
        root.ref.paster.destroy();
      }
      if (root.ref.hopper) {
        root.ref.hopper.destroy();
      }
    },
    mixins: {
      styles: ['height']
    }
  });

  // defaults
  // view
  // creates the app
  var createApp$1 = function createApp() {
    var initialOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // let element
    var originalElement = null;

    // get default options
    var defaultOptions$$1 = getOptions$1();

    // create the data store, this will contain all our app info
    var store = createStore(
      // initial state (should be serializable)
      createInitialState(defaultOptions$$1),

      // queries
      [queries, createOptionQueries(defaultOptions$$1)],

      // action handlers
      [actions, createOptionActions(defaultOptions$$1)]
    );

    // set initial options
    store.dispatch('SET_OPTIONS', { options: initialOptions });

    // render initial view
    var view = root(store, { id: getUniqueId() });

    //
    // PRIVATE API -------------------------------------------------------------------------------------
    //
    var resting = false;
    var hidden = false;
    var readWriteApi = {
      // necessary for update loop

      /**
       * Reads from dom (never call manually)
       * @private
       */
      _read: function _read() {
        // if resting, no need to read as numbers will still all be correct
        if (resting) {
          return;
        }

        // read view data
        view._read();

        // if root is hidden
        hidden = view.rect.element.hidden;
      },

      /**
       * Writes to dom (never call manually)
       * @private
       */
      _write: function _write(ts) {
        // don't do anything while hidden
        if (hidden) {
          return;
        }

        // get all actions from store
        var actions$$1 = store
          .processActionQueue()

          // filter out set actions (will trigger DID_SET)
          .filter(function(action) {
            return !/^SET_/.test(action.type);
          });

        // if was idling and no actions stop here
        if (resting && !actions$$1.length) {
          return;
        }

        // some actions might trigger events
        routeActionsToEvents(actions$$1);

        // update the view
        resting = view._write(ts, actions$$1);

        // now idling
        if (resting) {
          store.processDispatchQueue();
        }
      }
    };

    //
    // EXPOSE EVENTS -------------------------------------------------------------------------------------
    //
    var createEvent = function createEvent(name) {
      return function(data) {
        // create default event
        var event = {
          type: name
        };

        // no data to add
        if (!data) {
          return event;
        }

        // copy relevant props
        if (data.hasOwnProperty('error')) {
          event.error = data.error ? _extends({}, data.error) : null;
        }

        if (data.status) {
          event.status = _extends({}, data.status);
        }

        // only source is available, else add item if possible
        if (data.source) {
          event.file = data.source;
        } else if (data.item || data.id) {
          var item = data.item ? data.item : store.query('GET_ITEM', data.id);
          event.file = item ? createItemAPI(item) : null;
        }

        // if this is a progress event add the progress amount
        if (/progress/.test(name)) {
          event.progress = data.progress;
        }

        return event;
      };
    };

    var eventRoutes = {
      DID_DESTROY: createEvent('destroy'),

      DID_INIT: createEvent('init'),

      DID_THROW_MAX_FILES: createEvent('warning'),

      DID_START_ITEM_LOAD: createEvent('addfilestart'),
      DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent('addfileprogress'),
      DID_LOAD_ITEM: createEvent('addfile'),

      DID_THROW_ITEM_INVALID: [createEvent('error'), createEvent('addfile')],

      DID_THROW_ITEM_LOAD_ERROR: [createEvent('error'), createEvent('addfile')],

      DID_START_ITEM_PROCESSING: createEvent('processfilestart'),
      DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent('processfileprogress'),
      DID_ABORT_ITEM_PROCESSING: createEvent('processfileabort'),
      DID_COMPLETE_ITEM_PROCESSING: createEvent('processfile'),
      DID_REVERT_ITEM_PROCESSING: createEvent('processfilerevert'),

      DID_THROW_ITEM_PROCESSING_ERROR: [
        createEvent('error'),
        createEvent('processfile')
      ],

      SPLICE_ITEM: createEvent('removefile')
    };

    var exposeEvent = function exposeEvent(event) {
      // create event object to be dispatched
      var detail = _extends({ pond: exports }, event);
      delete detail.type;
      view.element.dispatchEvent(
        new CustomEvent('FilePond:' + event.type, {
          // event info
          detail: detail,

          // event behaviour
          bubbles: true,
          cancelable: true,
          composed: true // triggers listeners outside of shadow root
        })
      );

      // event object to params used for `on()` event handlers and callbacks `oninit()`
      var params = [];

      // if is possible error event, make it the first param
      if (event.hasOwnProperty('error')) {
        params.push(event.error);
      }
      // file is always section
      if (event.hasOwnProperty('file')) {
        params.push(event.file);
      }

      // append otherp props
      var filtered = ['type', 'error', 'file'];
      Object.keys(event)
        .filter(function(key) {
          return !filtered.includes(key);
        })
        .forEach(function(key) {
          return params.push(event[key]);
        });

      // on(type, () => { })
      exports.fire.apply(exports, [event.type].concat(params));

      // oninit = () => {}
      var handler = store.query('GET_ON' + event.type.toUpperCase());
      if (handler) {
        handler.apply(undefined, params);
      }
    };

    var routeActionsToEvents = function routeActionsToEvents(actions$$1) {
      if (!actions$$1.length) {
        return;
      }

      actions$$1.forEach(function(action) {
        if (!eventRoutes[action.type]) {
          return;
        }
        var routes = eventRoutes[action.type];
        (Array.isArray(routes) ? routes : [routes]).forEach(function(route) {
          setTimeout(function() {
            exposeEvent(route(action.data));
          }, 0);
        });
      });
    };

    //
    // PUBLIC API -------------------------------------------------------------------------------------
    //
    var setOptions = function setOptions(options) {
      return store.dispatch('SET_OPTIONS', { options: options });
    };

    var getFile = function getFile(query) {
      return store.query('GET_ITEM', query);
    };

    var addFile = function addFile(source) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function(resolve, reject) {
        store.dispatch('ADD_ITEM', {
          interactionMethod: InteractionMethod.API,
          source: source,
          index: options.index,
          success: resolve,
          failure: reject
        });
      });
    };

    var removeFile = function removeFile(query) {
      // request item removal
      store.dispatch('REMOVE_ITEM', { query: query });

      // see if item has been removed
      return store.query('GET_ITEM', query) === null;
    };

    var addFiles = function addFiles() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      return new Promise(function(resolve, reject) {
        var sources = [];
        var options = {};

        // user passed a sources array
        if (isArray(args[0])) {
          sources.push.apply(sources, toConsumableArray(args[0]));
          Object.assign(options, args[1] || {});
        } else {
          // user passed sources as arguments, last one might be options object
          var lastArgument = args[args.length - 1];
          if (
            (typeof lastArgument === 'undefined'
              ? 'undefined'
              : _typeof(lastArgument)) === 'object' &&
            !(lastArgument instanceof Blob)
          ) {
            Object.assign(options, args.pop());
          }

          // add rest to sources
          sources.push.apply(sources, args);
        }

        var sourcePromises = [];
        var delayPromises = forEachDelayed(sources, function(source) {
          sourcePromises.push(addFile(source, options));
        });

        Promise.all(delayPromises).then(function() {
          Promise.all(sourcePromises).then(function(results) {
            resolve(results);
          });
        });
      });
    };

    var getFiles = function getFiles() {
      return store.query('GET_ITEMS');
    };

    var processFile = function processFile(query) {
      return new Promise(function(resolve, reject) {
        store.dispatch('PROCESS_ITEM', {
          query: query,
          success: resolve,
          failure: reject
        });
      });
    };

    var processFiles = function processFiles() {
      for (
        var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }

      var queries$$1 = Array.isArray(args[0]) ? args[0] : args;
      if (!queries$$1.length) {
        return Promise.all(getFiles().map(processFile));
      }
      return Promise.all(queries$$1.map(processFile));
    };

    var removeFiles = function removeFiles() {
      for (
        var _len3 = arguments.length, args = Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3];
      }

      var queries$$1 = Array.isArray(args[0]) ? args[0] : args;
      var files = getFiles();

      if (!queries$$1.length) {
        return Promise.all(files.map(removeFile));
      }

      // when removing by index the indexes shift after each file removal so we need to convert indexes to ids
      var mappedQueries = queries$$1
        .map(function(query) {
          return isNumber(query)
            ? files[query] ? files[query].id : null
            : query;
        })
        .filter(function(query) {
          return query;
        });

      return mappedQueries.map(removeFile);
    };

    var exports = _extends(
      {},
      on(),
      readWriteApi,
      createOptionAPI(store, defaultOptions$$1),
      {
        /**
         * Override options defined in options object
         * @param options
         */
        setOptions: setOptions,

        /**
         * Load the given file
         * @param source - the source of the file (either a File, base64 data uri or url)
         * @param options - object, { index: 0 }
         */
        addFile: addFile,

        /**
         * Load the given files
         * @param sources - the sources of the files to load
         * @param options - object, { index: 0 }
         */
        addFiles: addFiles,

        /**
         * Returns the file objects matching the given query
         * @param query { string, number, null }
         */
        getFile: getFile,

        /**
         * Upload file with given name
         * @param query { string, number, null  }
         */
        processFile: processFile,

        /**
         * Removes a file by its name
         * @param query { string, number, null  }
         */
        removeFile: removeFile,

        /**
         * Returns all files (wrapped in public api)
         */
        getFiles: getFiles,

        /**
         * Starts uploading all files
         */
        processFiles: processFiles,

        /**
         * Clears all files from the files list
         */
        removeFiles: removeFiles,

        /**
         * Browse the file system for a file
         */
        browse: function browse() {
          // needs to be trigger directly as user action needs to be traceable (is not traceable in requestAnimationFrame)
          var input = view.element.querySelector('input[type=file]');
          if (input) {
            input.click();
          }
        },

        /**
         * Destroys the app
         */
        destroy: function destroy() {
          // request destruction
          exports.fire('destroy', view.element);

          // stop active processes (file uploads, fetches, stuff like that)
          // loop over items and depending on states call abort for ongoing processes
          store.dispatch('ABORT_ALL');

          // destroy view
          view._destroy();

          // dispatch destroy
          store.dispatch('DID_DESTROY');
        },

        /**
         * Inserts the plugin before the target element
         */
        insertBefore: function insertBefore$$1(element) {
          return insertBefore(view.element, element);
        },

        /**
         * Inserts the plugin after the target element
         */
        insertAfter: function insertAfter$$1(element) {
          return insertAfter(view.element, element);
        },

        /**
         * Appends the plugin to the target element
         */
        appendTo: function appendTo(element) {
          return element.appendChild(view.element);
        },

        /**
         * Replaces an element with the app
         */
        replaceElement: function replaceElement(element) {
          // insert the app before the element
          insertBefore(view.element, element);

          // remove the original element
          element.parentNode.removeChild(element);

          // remember original element
          originalElement = element;
        },

        /**
         * Restores the original element
         */
        restoreElement: function restoreElement() {
          if (!originalElement) {
            return; // no element to restore
          }

          // restore original element
          insertAfter(originalElement, view.element);

          // remove our element
          view.element.parentNode.removeChild(view.element);

          // remove reference
          originalElement = null;
        },

        /**
         * Returns true if the app root is attached to given element
         * @param element
         */
        isAttachedTo: function isAttachedTo(element) {
          return view.element === element || originalElement === element;
        },

        /**
         * Returns the root element
         */
        element: {
          get: function get$$1() {
            return view.element;
          }
        }
      }
    );

    // Done!
    store.dispatch('DID_INIT');

    // create actual api object
    return createObject(exports);
  };

  var createAppObject = function createAppObject() {
    var customOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // default options
    var defaultOptions$$1 = {};
    forin(getOptions$1(), function(key, value) {
      defaultOptions$$1[key] = value[0];
    });

    // set app options
    var app = createApp$1(_extends({}, defaultOptions$$1, customOptions));

    // return the plugin instance
    return app;
  };

  var toCamels = function toCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string.replace(new RegExp(separator + '.', 'g'), function(sub) {
      return sub.charAt(1).toUpperCase();
    });
  };

  var lowerCaseFirstLetter = function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  var attributeNameToPropertyName = function attributeNameToPropertyName(
    attributeName
  ) {
    return toCamels(attributeName.replace(/^data-/, ''));
  };

  var mapObject = function mapObject(object, propertyMap) {
    // remove unwanted
    forin(propertyMap, function(selector, mapping) {
      forin(object, function(property, value) {
        // create regexp shortcut
        var selectorRegExp = new RegExp(selector);

        // tests if
        var matches = selectorRegExp.test(property);

        // no match, skip
        if (!matches) {
          return;
        }

        // if there's a mapping, the original property is always removed
        delete object[property];

        // should only remove, we done!
        if (mapping === false) {
          return;
        }

        // move value to new property
        if (isString(mapping)) {
          object[mapping] = value;
          return;
        }

        // move to group
        var group = mapping.group;
        if (isObject(mapping) && !object[group]) {
          object[group] = {};
        }

        object[group][
          lowerCaseFirstLetter(property.replace(selectorRegExp, ''))
        ] = value;
      });

      // do submapping
      if (mapping.mapping) {
        mapObject(object[mapping.group], mapping.mapping);
      }
    });
  };

  var getAttributesAsObject = function getAttributesAsObject(node) {
    var attributeMapping =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // turn attributes into object
    var output = []
      .concat(toConsumableArray(node.attributes))
      .reduce(function(obj, attribute) {
        obj[attributeNameToPropertyName(attribute.name)] = attr(
          node,
          attribute.name
        );
        return obj;
      }, {});

    // do mapping of object properties
    mapObject(output, attributeMapping);

    return output;
  };

  var createAppAtElement = function createAppAtElement(element) {
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // how attributes of the input element are mapped to the options for the plugin
    var attributeMapping = {
      // translate to other name
      '^class$': 'className',
      '^multiple$': 'allowMultiple',
      '^capture$': 'captureMethod',

      // group under single property
      '^server': {
        group: 'server',
        mapping: {
          '^process': {
            group: 'process'
          },
          '^revert': {
            group: 'revert'
          },
          '^fetch': {
            group: 'fetch'
          },
          '^restore': {
            group: 'restore'
          },
          '^load': {
            group: 'load'
          }
        }
      },

      // don't include in object
      '^type$': false,
      '^files$': false
    };

    // add additional option translators
    applyFilters('SET_ATTRIBUTE_TO_OPTION_MAP', attributeMapping);

    // create final options object by extracting options from element
    // and then overriding with options object
    var mergedOptions = _extends(
      {},
      getAttributesAsObject(
        element.nodeName === 'FIELDSET'
          ? element.querySelector('input[type=file]')
          : element,
        attributeMapping
      ),
      options
    );

    // if parent is a fieldset, get files from parent by selecting all input fields that are not file upload fields
    // these will then be automatically set to the initial files
    mergedOptions.files = (options.files || []).concat(
      []
        .concat(
          toConsumableArray(element.querySelectorAll('input:not([type=file])'))
        )
        .map(function(input) {
          return {
            source: input.value,
            options: {
              type: input.dataset.type
            }
          };
        })
    );

    // build plugin
    var app = createAppObject(mergedOptions);

    // add already selected files
    if (element.files) {
      [].concat(toConsumableArray(element.files)).forEach(function(file) {
        app.addFile(file);
      });
    }

    // replace the target element
    app.replaceElement(element);

    // expose
    return app;
  };

  // if an element is passed, we create the instance at that element, if not, we just create an up object
  var createApp = function createApp() {
    return isNode(arguments.length <= 0 ? undefined : arguments[0])
      ? createAppAtElement.apply(undefined, arguments)
      : createAppObject.apply(undefined, arguments);
  };

  var PRIVATE_METHODS$1 = ['fire', '_read', '_write'];

  var createAppAPI = function createAppAPI(app) {
    var api = {};

    copyObjectPropertiesToObject(app, api, PRIVATE_METHODS$1);

    return api;
  };

  /**
   * Replaces placeholders in given string with replacements
   * @param string - "Foo {bar}""
   * @param replacements - { "bar": 10 }
   */
  var replaceInString = function replaceInString(string, replacements) {
    return string.replace(/(?:{([a-zA-Z]+)})/g, function(match, group) {
      return replacements[group];
    });
  };

  var images = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
  var text$1 = ['css', 'csv', 'html', 'txt'];
  var map = {
    zip: 'zip|compressed',
    epub: 'application/epub+zip'
  };

  var guesstimateMimeType = function guesstimateMimeType() {
    var extension =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    extension = extension.toLowerCase();
    if (images.includes(extension)) {
      return (
        'image/' +
        (extension === 'jpg'
          ? 'jpeg'
          : extension === 'svg' ? 'svg+xml' : extension)
      );
    }
    if (text$1.includes(extension)) {
      return 'text/' + extension;
    }
    return map[extension] || null;
  };

  var createWorker = function createWorker(fn) {
    var workerBlob = new Blob(['(', fn.toString(), ')()'], {
      type: 'application/javascript'
    });
    var workerURL = URL.createObjectURL(workerBlob);
    var worker = new Worker(workerURL);

    return {
      transfer: function transfer(message, cb) {},
      post: function post(message, cb, transferList) {
        var id = getUniqueId();

        worker.onmessage = function(e) {
          if (e.data.id === id) {
            cb(e.data.message);
          }
        };

        worker.postMessage(
          {
            id: id,
            message: message
          },
          transferList
        );
      },
      terminate: function terminate() {
        worker.terminate();
        URL.revokeObjectURL(workerURL);
      }
    };
  };

  var loadImage = function loadImage(url, cb) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(e) {
        reject(e);
      };
      img.src = url;
    });
  };

  var copyFile = function copyFile(file) {
    return renameFile(file, file.name);
  };

  var isFile = function isFile(value) {
    return value instanceof File || (value instanceof Blob && value.name);
  };

  // utilities exposed to plugins
  // already registered plugins (can't register twice)
  var registeredPlugins = [];

  // pass utils to plugin
  var createAppPlugin = function createAppPlugin(plugin) {
    // already registered
    if (registeredPlugins.includes(plugin)) {
      return;
    }

    // remember this plugin
    registeredPlugins.push(plugin);

    // setup!
    var pluginOutline = plugin({
      addFilter: addFilter,
      utils: {
        Type: Type,
        forin: forin,
        isString: isString,
        isFile: isFile,
        toNaturalFileSize: toNaturalFileSize,
        replaceInString: replaceInString,
        getExtensionFromFilename: getExtensionFromFilename,
        getFilenameWithoutExtension: getFilenameWithoutExtension,
        guesstimateMimeType: guesstimateMimeType,
        getFileFromBlob: getFileFromBlob,
        getFilenameFromURL: getFilenameFromURL,
        createRoute: createRoute,
        createWorker: createWorker,
        createView: createView,
        loadImage: loadImage,
        copyFile: copyFile,
        renameFile: renameFile,
        applyFilterChain: applyFilterChain
      }
    });

    // add plugin options to default options
    extendDefaultOptions(pluginOutline.options);
  };

  /**
   * Plugin internal state (over all instances)
   */
  var state = {
    // active app instances, used to redraw the apps and to find the later
    apps: []
  };

  // plugin name
  var name = 'filepond';

  // is in browser
  var hasNavigator = typeof navigator !== 'undefined';

  // app painter, cannot be paused or stopped at the moment
  var painter =
    hasNavigator &&
    createPainter(createUpdater(state.apps, '_read', '_write'), 60);

  // fire load event
  if (hasNavigator) {
    // fire loaded event so we know when FilePond is available
    var dispatch = function dispatch() {
      // let others know we have area ready
      document.dispatchEvent(
        new CustomEvent('FilePond:loaded', {
          detail: {
            supported: supported,
            create: create,
            destroy: destroy,
            parse: parse,
            find: find,
            registerPlugin: registerPlugin,
            setOptions: setOptions$$1
          }
        })
      );

      // clean up event
      document.removeEventListener('DOMContentLoaded', dispatch);
    };

    if (document.readyState !== 'loading') {
      // move to back of execution queue, FilePond should have been exported by then
      setTimeout(function() {
        return dispatch();
      }, 0);
    } else {
      document.addEventListener('DOMContentLoaded', dispatch);
    }
  }

  // updates the OptionTypes object based on the current options
  var updateOptionTypes = function updateOptionTypes() {
    return forin(getOptions$1(), function(key, value) {
      OptionTypes[key] = value[1];
    });
  };

  /**
   * Public Plugin methods
   */
  var FileStatus = _extends({}, ItemStatus);

  var OptionTypes = {};
  updateOptionTypes();

  // create method, creates apps and adds them to the app array
  var create = function create() {
    var app = createApp.apply(undefined, arguments);
    app.on('destroy', destroy);
    state.apps.push(app);
    return createAppAPI(app);
  };

  // destroys apps and removes them from the app array
  var destroy = function destroy(hook) {
    // returns true if the app was destroyed successfully
    var indexToRemove = state.apps.findIndex(function(app) {
      return app.isAttachedTo(hook);
    });
    if (indexToRemove >= 0) {
      // remove from apps
      var app = state.apps.splice(indexToRemove, 1)[0];

      // restore original dom element
      app.restoreElement();

      return true;
    }

    return false;
  };

  // parses the given context for plugins (does not include the context element itself)
  var parse = function parse(context) {
    // get all possible hooks
    var matchedHooks = [].concat(
      toConsumableArray(context.querySelectorAll('.' + name))
    );

    // filter out already active hooks
    var newHooks = matchedHooks.filter(function(newHook) {
      return !state.apps.find(function(app) {
        return app.isAttachedTo(newHook);
      });
    });

    // create new instance for each hook
    return newHooks.map(function(hook) {
      return create(hook);
    });
  };

  // returns an app based on the given element hook
  var find = function find(hook) {
    var app = state.apps.find(function(app) {
      return app.isAttachedTo(hook);
    });
    if (!app) {
      return null;
    }
    return createAppAPI(app);
  };

  // returns true if plugin is supported
  var isOperaMini = function isOperaMini() {
    return (
      Object.prototype.toString.call(window.operamini) === '[object OperaMini]'
    );
  };
  var hasPromises = function hasPromises() {
    return 'Promise' in window;
  };
  var hasBlobSlice = function hasBlobSlice() {
    return 'slice' in Blob.prototype;
  };
  var hasCreateObjectURL = function hasCreateObjectURL() {
    return 'URL' in window && 'createObjectURL' in window.URL;
  };
  var hasVisibility = function hasVisibility() {
    return 'visibilityState' in document;
  };
  var hasTiming = function hasTiming() {
    return 'performance' in window;
  }; // iOS 8.x

  var supported = function supported() {
    if (!hasNavigator) {
      return false;
    }
    return !(
      isOperaMini() ||
      !hasVisibility() ||
      !hasPromises() ||
      !hasBlobSlice() ||
      !hasCreateObjectURL() ||
      !hasTiming()
    );
  };

  // adds a plugin extension
  var registerPlugin = function registerPlugin() {
    for (
      var _len = arguments.length, plugins = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      plugins[_key] = arguments[_key];
    }

    // register plugins
    plugins.forEach(createAppPlugin);

    // update OptionTypes, each plugin might have extended the default options
    updateOptionTypes();
  };

  var getOptions$$1 = function getOptions$$1() {
    var opts = {};
    forin(getOptions$1(), function(key, value) {
      opts[key] = value[0];
    });
    return opts;
  };

  var setOptions$$1 = function setOptions$$1(opts) {
    if (isObject(opts)) {
      // update existing plugins
      state.apps.forEach(function(app) {
        app.setOptions(opts);
      });

      // override defaults
      setOptions$1(opts);
    }

    // return new options
    return getOptions$$1();
  };

  exports.FileStatus = FileStatus;
  exports.OptionTypes = OptionTypes;
  exports.create = create;
  exports.destroy = destroy;
  exports.parse = parse;
  exports.find = find;
  exports.supported = supported;
  exports.registerPlugin = registerPlugin;
  exports.getOptions = getOptions$$1;
  exports.setOptions = setOptions$$1;
  exports.FileOrigin = FileOrigin;

  Object.defineProperty(exports, '__esModule', { value: true });
});


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(35)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./filepond.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./filepond.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/*\n * FilePond 1.8.0\n * Licensed under MIT, https://opensource.org/licenses/MIT\n * Please visit https://pqina.nl/filepond for details.\n */\n.filepond--assistant{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--browser{position:absolute;margin:0;padding:0;left:1em;top:1.75em;width:calc(100% - 2em);opacity:0;font-size:0}.filepond--drip{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;opacity:.1;pointer-events:none;border-radius:.5em;background:rgba(0,0,0,.01)}.filepond--drip-blob{-webkit-transform-origin:center center;transform-origin:center center;left:0;width:8em;height:8em;margin-left:-4em;margin-top:-4em;background:#292625;border-radius:50%}.filepond--drip-blob,.filepond--drop-label{position:absolute;top:0;will-change:transform,opacity}.filepond--drop-label{left:1em;right:1em;margin:0 0 1em;color:#4f4f4f}.filepond--drop-label label{display:block;padding:1em 0;margin:0;cursor:default;font-size:.875em;font-weight:400;text-align:center;line-height:1.5}.filepond--label-action{text-decoration:underline;-webkit-text-decoration-skip:ink;text-decoration-skip:ink;-webkit-text-decoration-color:#a7a4a4;text-decoration-color:#a7a4a4;cursor:pointer}.filepond--file-action-button{font-size:1em;width:1.625em;height:1.625em;cursor:auto;font-family:inherit;line-height:inherit;margin:0;padding:0;border:none;color:#fff;outline:none;border-radius:50%;background-color:rgba(0,0,0,.5);background-image:none;will-change:transform,opacity;box-shadow:0 0 0 0 hsla(0,0%,100%,0);transition:box-shadow .25s ease-in}.filepond--file-action-button svg{width:100%;height:100%}.filepond--file-action-button:focus,.filepond--file-action-button:hover{box-shadow:0 0 0 .125em hsla(0,0%,100%,.9)}.filepond--file-info{position:static;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex:1;flex:1;margin:0 .5em 0 0;min-width:0;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-info *{margin:0}.filepond--file-info .filepond--file-info-main{font-size:.75em;line-height:1.2;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.filepond--file-info .filepond--file-info-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out;white-space:nowrap}.filepond--file-info .filepond--file-info-sub:empty{display:none}.filepond--file-status{position:static;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin:0;min-width:2.25em;text-align:right;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-status *{margin:0;white-space:nowrap}.filepond--file-status .filepond--file-status-main{font-size:.75em;line-height:1.2}.filepond--file-status .filepond--file-status-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out}.filepond--file-wrapper{border:none;margin:0;padding:0;min-width:0;height:100%}.filepond--file-wrapper>legend{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file{position:static;display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:start;align-items:flex-start;padding:.5625em;color:#fff;border-radius:.5em}.filepond--file .filepond--file-status{margin-left:auto;margin-right:2.25em}.filepond--file .filepond--processing-complete-indicator{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.filepond--file .filepond--file-action-button,.filepond--file .filepond--processing-complete-indicator{position:absolute}.filepond--file .filepond--progress-indicator{position:absolute;top:.75em;right:.75em}.filepond--file .filepond--action-remove-item{left:.5625em}.filepond--file .filepond--file-action-button:not(.filepond--action-remove-item),.filepond--file .filepond--processing-complete-indicator{right:.5625em}[data-filepond-item-state*=error] .filepond--file-info,[data-filepond-item-state*=invalid] .filepond--file-info,[data-filepond-item-state=cancelled] .filepond--file-info{margin-right:2.25em}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing svg{-webkit-animation:fall .5s .125s linear both;animation:fall .5s .125s linear both}[data-filepond-item-state=processing-complete] .filepond--file-info-sub,[data-filepond-item-state=processing-complete] .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-info .filepond--file-info-sub,[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state*=error] .filepond--file-wrapper,[data-filepond-item-state*=error] .filepond--panel,[data-filepond-item-state*=invalid] .filepond--file-wrapper,[data-filepond-item-state*=invalid] .filepond--panel{-webkit-animation:shake .65s linear both;animation:shake .65s linear both}[data-filepond-item-state*=busy] .filepond--progress-indicator svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@-webkit-keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.filepond--hopper[data-hopper-state=drag-over]>*{pointer-events:none}.filepond--progress-indicator{z-index:103}.filepond--file-action-button{z-index:102}.filepond--file-status{z-index:101}.filepond--file-info{z-index:100}.filepond--item{position:absolute;top:0;left:0;right:0;padding:0;margin:0 0 .5em;will-change:transform,opacity}.filepond--item>.filepond--panel{z-index:1}.filepond--item>.filepond--panel .filepond--panel-bottom{box-shadow:0 .0625em .125em -.0625em rgba(0,0,0,.25)}.filepond--item>.filepond--file-wrapper{position:relative;z-index:2}.filepond--item-panel{background-color:#64605e}[data-filepond-item-state=processing-complete] .filepond--item-panel{background-color:#369763}[data-filepond-item-state*=error] .filepond--item-panel,[data-filepond-item-state*=invalid] .filepond--item-panel{background-color:#c44e47}.filepond--item-panel{border-radius:.5em;transition:background-color .25s}.filepond--list-scroller{position:absolute;top:0;left:0;right:0;margin:0;will-change:transform}.filepond--list-scroller[data-state=overflow]{overflow-y:scroll;overflow-x:visible;-webkit-overflow-scrolling:touch}.filepond--list-scroller[data-state=overflow] .filepond--list{bottom:0;right:0}.filepond--list-scroller::-webkit-scrollbar{background:transparent}.filepond--list-scroller::-webkit-scrollbar:vertical{width:1em}.filepond--list-scroller::-webkit-scrollbar:horizontal{height:0}.filepond--list-scroller::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.3);border-radius:99999px;border:.3125em solid transparent;background-clip:content-box}.filepond--list{position:absolute;top:0;left:1em;right:1em;margin:0;padding:0;list-style-type:none;will-change:transform}.filepond--panel-root{border-radius:.5em;background-color:#f1f0ef}.filepond--panel{position:absolute;left:0;top:0;right:0;margin:0;height:auto!important;pointer-events:none}.filepond--panel[data-scalable=true]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;background-color:transparent!important;border:none!important}.filepond--panel[data-scalable=false]{bottom:0}.filepond--panel[data-scalable=false]>div{display:none}.filepond--panel-bottom,.filepond--panel-center,.filepond--panel-top{position:absolute;left:0;top:0;right:0;margin:0;padding:0}.filepond--panel-bottom,.filepond--panel-top{height:.5em}.filepond--panel-top{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:none!important}.filepond--panel-top:after{content:\"\";position:absolute;height:2px;left:0;right:0;bottom:-1px;background-color:inherit}.filepond--panel-bottom,.filepond--panel-center{will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:translate3d(0,.5em,0);transform:translate3d(0,.5em,0)}.filepond--panel-bottom{border-top-left-radius:0!important;border-top-right-radius:0!important;border-top:none!important}.filepond--panel-bottom:before{content:\"\";position:absolute;height:2px;left:0;right:0;top:-1px;background-color:inherit}.filepond--panel-center{height:100px!important;border-top:none!important;border-bottom:none!important;border-radius:0!important}.filepond--panel-center:not([style]){visibility:hidden}.filepond--progress-indicator{position:static;width:1.25em;height:1.25em;color:#fff;margin:0;pointer-events:none;will-change:transform,opacity}.filepond--progress-indicator svg{width:100%;height:100%}.filepond--progress-indicator path{fill:none;stroke:currentColor}.filepond--list-scroller{z-index:6}.filepond--drop-label{z-index:5}.filepond--drip{z-index:3}.filepond--root>.filepond--panel{z-index:2}.filepond--browser{z-index:1}.filepond--root{box-sizing:border-box;position:relative;margin-bottom:1em;padding-top:1em;font-size:1rem;line-height:normal;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-weight:450;text-align:left;text-rendering:optimizeLegibility;direction:ltr;contain:layout style size}.filepond--root *{font-size:inherit;box-sizing:inherit;line-height:inherit}", ""]);

// exports


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(35)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./filepond-plugin-image-preview.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./filepond-plugin-image-preview.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/*\n * FilePondPluginImagePreview 1.0.10\n * Licensed under MIT, https://opensource.org/licenses/MIT\n * Please visit https://pqina.nl/filepond for details.\n */\n.filepond--image-preview-wrapper{z-index:2}.filepond--image-preview-overlay{display:block;position:absolute;left:0;top:0;width:100%;min-height:5rem;max-height:7rem;margin:0;opacity:0;z-index:1;mix-blend-mode:multiply;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--image-preview-overlay:nth-of-type(2),.filepond--image-preview-overlay:nth-of-type(3){mix-blend-mode:normal}@supports (-webkit-marquee-repetition:infinite) and (object-fit:fill){.filepond--image-preview-overlay{mix-blend-mode:normal}}.filepond--image-preview-wrapper{pointer-events:none;position:absolute;left:0;top:0;right:0;margin:0;border-radius:.45em;overflow:hidden;background:rgba(0,0,0,.01)}.filepond--image-preview{position:relative;z-index:1;display:block;width:100%;height:auto;pointer-events:none;-webkit-transform-origin:center center;transform-origin:center center;background:#222;will-change:transform,opacity}.filepond--image-preview div{position:relative;overflow:hidden;margin:0 auto}.filepond--image-preview canvas{position:absolute;left:0;top:0;will-change:transform}", ""]);

// exports


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

/*
 * FilePondPluginFileEncode 1.0.5
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
(function(global, factory) {
   true
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global.FilePondPluginFileEncode = factory());
})(this, function() {
  'use strict';

  /**
   * DataURI Worker
   */
  var DataURIWorker = function DataURIWorker() {
    // route messages
    self.onmessage = function(e) {
      convert(e.data.message, function(response) {
        self.postMessage({ id: e.data.id, message: response });
      });
    };

    // convert file to data uri
    var convert = function convert(options, cb) {
      var file = options.file;

      var reader = new FileReader();
      reader.onloadend = function() {
        cb(reader.result.replace('data:', '').replace(/^.+,/, ''));
      };
      reader.readAsDataURL(file);
    };
  };

  var plugin$1 = function(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;

    // get quick reference to Type utils
    var Type = utils.Type,
      createWorker = utils.createWorker,
      createRoute = utils.createRoute,
      isFile = utils.isFile;

    addFilter('SHOULD_PREPARE_OUTPUT', function(shouldPrepareOutput) {
      return new Promise(function(resolve, reject) {
        // should alway prepare output
        resolve(true);
      });
    });

    addFilter('COMPLETE_PREPARE_OUTPUT', function(file, _ref2) {
      var item = _ref2.item;
      return new Promise(function(resolve, reject) {
        // this is not a file, continue
        if (!isFile(file)) {
          resolve(file);
          return;
        }

        var metadata = item.getMetadata();
        delete metadata.base64;

        var worker = createWorker(DataURIWorker);
        worker.post({ file: file }, function(data) {
          // store in item metadata
          item.setMetadata('base64', data);

          // done dealing with prepared output
          resolve(file);
        });
      });
    });

    // called for each view that is created right after the 'create' method
    addFilter('CREATE_VIEW', function(viewAPI) {
      // get reference to created view
      var is = viewAPI.is,
        view = viewAPI.view,
        query = viewAPI.query;

      // only hook up to item view

      if (!is('file-wrapper') || !query('GET_ALLOW_FILE_ENCODE')) {
        return;
      }

      view.registerWriter(
        createRoute({
          DID_LOAD_ITEM: function DID_LOAD_ITEM(_ref3) {
            var root = _ref3.root,
              action = _ref3.action;

            // only do this if is not uploading async
            if (query('IS_ASYNC')) {
              return;
            }

            var item = query('GET_ITEM', action.id);

            // extract base64 string
            var metadata = item.getMetadata();
            var data = metadata.base64;
            delete metadata.base64;

            // create JSON string from encoded data and stores in the hidden input field
            root.ref.data.value = JSON.stringify({
              id: item.id,
              name: item.file.name,
              type: item.file.type,
              size: item.file.size,
              metadata: metadata,
              data: data
            });
          }
        })
      );
    });

    return {
      options: {
        // Enable or disable file encoding
        allowFileEncode: [true, Type.BOOLEAN]
      }
    };
  };

  if (typeof navigator !== 'undefined' && document) {
    // plugin has loaded
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin$1 })
    );
  }

  return plugin$1;
});


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

/*
 * FilePondPluginFileValidateType 1.1.0
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
(function(global, factory) {
   true
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global.FilePondPluginFileValidateType = factory());
})(this, function() {
  'use strict';

  var plugin$1 = function(_ref) {
    var addFilter = _ref.addFilter,
      utils = _ref.utils;

    // get quick reference to Type utils
    var Type = utils.Type,
      isString = utils.isString,
      replaceInString = utils.replaceInString,
      guesstimateMimeType = utils.guesstimateMimeType,
      getExtensionFromFilename = utils.getExtensionFromFilename,
      getFilenameFromURL = utils.getFilenameFromURL;

    var mimeTypeMatchesWildCard = function mimeTypeMatchesWildCard(
      mimeType,
      wildcard
    ) {
      var mimeTypeGroup = (/^[^/]+/.exec(mimeType) || []).pop(); // image/png -> image
      var wildcardGroup = wildcard.slice(0, -2); // image/* -> image
      return mimeTypeGroup === wildcardGroup;
    };

    var isValidMIMEType = function isValidMIMEType(
      acceptedTypes,
      userInputType
    ) {
      return acceptedTypes.some(function(acceptedType) {
        // accepted is wildcard mime type
        if (/\*$/.test(acceptedType)) {
          return mimeTypeMatchesWildCard(userInputType, acceptedType);
        }

        // is normal mime type
        return acceptedType === userInputType;
      });
    };

    var validateFile = function validateFile(item, acceptedFileTypes) {
      // no types defined, everything is allowed \o/
      if (acceptedFileTypes.length === 0) {
        return true;
      }

      // if the item is a url we guess the mime type by the extension
      var type = '';
      if (isString(item)) {
        var filename = getFilenameFromURL(item);
        var extension = getExtensionFromFilename(filename);
        if (extension) {
          type = guesstimateMimeType(extension);
        } else {
          return true;
        }
      } else {
        type = item.type;
      }

      // validate file type
      return isValidMIMEType(acceptedFileTypes, type);
    };

    var applyMimeTypeMap = function applyMimeTypeMap(map) {
      return function(acceptedFileType) {
        return map[acceptedFileType] === null
          ? false
          : map[acceptedFileType] || acceptedFileType;
      };
    };

    // setup attribute mapping for accept
    addFilter('SET_ATTRIBUTE_TO_OPTION_MAP', function(map) {
      return Object.assign(map, {
        accept: 'acceptedFileTypes'
      });
    });

    // filtering if an item is allowed in hopper
    addFilter('ALLOW_HOPPER_ITEM', function(file, _ref2) {
      var query = _ref2.query;

      // if we are not doing file type validation exit
      if (!query('GET_ALLOW_FILE_TYPE_VALIDATION')) {
        return true;
      }

      // we validate the file against the accepted file types
      return validateFile(file, query('GET_ACCEPTED_FILE_TYPES'));
    });

    // called for each file that is loaded
    // right before it is set to the item state
    // should return a promise
    addFilter('LOAD_FILE', function(file, _ref3) {
      var query = _ref3.query;
      return new Promise(function(resolve, reject) {
        var allowFileTypeValidation = query('GET_ALLOW_FILE_TYPE_VALIDATION');
        if (!allowFileTypeValidation) {
          resolve(file);
          return;
        }

        var acceptedFileTypes = query('GET_ACCEPTED_FILE_TYPES');

        // if invalid, exit here
        if (!validateFile(file, acceptedFileTypes)) {
          var acceptedFileTypesMapped = acceptedFileTypes
            .map(
              applyMimeTypeMap(
                query('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP')
              )
            )
            .filter(function(label) {
              return label !== false;
            });

          reject({
            status: {
              main: query('GET_LABEL_FILE_TYPE_NOT_ALLOWED'),
              sub: replaceInString(
                query('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES'),
                {
                  allTypes: acceptedFileTypesMapped.join(', '),
                  allButLastType: acceptedFileTypesMapped
                    .slice(0, -1)
                    .join(', '),
                  lastType:
                    acceptedFileTypesMapped[acceptedFileTypesMapped.length - 1]
                }
              )
            }
          });
          return;
        }

        // all fine
        resolve(file);
      });
    });

    // expose plugin
    return {
      // default options
      options: {
        // Enable or disable file type validation
        allowFileTypeValidation: [true, Type.BOOLEAN],

        // What file types to accept
        acceptedFileTypes: [[], Type.ARRAY],
        // - must be comma separated
        // - mime types: image/png, image/jpeg, image/gif
        // - extensions: .png, .jpg, .jpeg ( not enabled yet )
        // - wildcards: image/*

        // label to show when a type is not allowed
        labelFileTypeNotAllowed: ['File is of invalid type', Type.STRING],

        // nicer label
        fileValidateTypeLabelExpectedTypes: [
          'Expects {allButLastType} or {lastType}',
          Type.STRING
        ],

        // map mime types to extensions
        fileValidateTypeLabelExpectedTypesMap: [{}, Type.OBJECT]
      }
    };
  };

  if (typeof navigator !== 'undefined' && document) {
    // plugin has loaded
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin$1 })
    );
  }

  return plugin$1;
});


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

/*
 * FilePondPluginImageExifOrientation 1.0.2
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
(function(global, factory) {
   true
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global.FilePondPluginImageExifOrientation = factory());
})(this, function() {
  'use strict';

  // test if file is of type image
  var isJPEG = function isJPEG(file) {
    return /^image\/jpeg/.test(file.type);
  };

  var Marker = {
    JPEG: 0xffd8,
    APP1: 0xffe1,
    EXIF: 0x45786966,
    TIFF: 0x4949,
    Orientation: 0x0112,
    Unknown: 0xff00
  };

  var getUint16 = function getUint16(view, offset) {
    var little =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return view.getUint16(offset, little);
  };
  var getUint32 = function getUint32(view, offset) {
    var little =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return view.getUint32(offset, little);
  };

  var getImageOrientation = function getImageOrientation(file) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var view = new DataView(e.target.result);

        // Every JPEG file starts from binary value '0xFFD8'
        if (getUint16(view, 0) !== Marker.JPEG) {
          // This aint no JPEG
          resolve(-1);
          return;
        }

        var length = view.byteLength;
        var offset = 2;

        while (offset < length) {
          var marker = getUint16(view, offset);
          offset += 2;

          // There's or APP1 Marker
          if (marker === Marker.APP1) {
            if (getUint32(view, (offset += 2)) !== Marker.EXIF) {
              // no EXIF info defined
              break;
            }

            // Get TIFF Header
            var little = getUint16(view, (offset += 6)) === Marker.TIFF;
            offset += getUint32(view, offset + 4, little);

            var tags = getUint16(view, offset, little);
            offset += 2;

            for (var i = 0; i < tags; i++) {
              // found the orientation tag
              if (
                getUint16(view, offset + i * 12, little) === Marker.Orientation
              ) {
                resolve(getUint16(view, offset + i * 12 + 8, little));
                return;
              }
            }
          } else if ((marker & Marker.Unknown) !== Marker.Unknown) {
            // Invalid
            break;
          } else {
            offset += getUint16(view, offset);
          }
        }

        // Nothing found
        resolve(-1);
      };

      // we don't need to read the entire file to get the orientation
      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    });
  };

  /**
   * Read Image Orientation Plugin
   */
  var plugin$1 = function(_) {
    var addFilter = _.addFilter,
      utils = _.utils;
    var Type = utils.Type,
      isFile = utils.isFile;

    // subscribe to file load and append required info

    addFilter('DID_LOAD_ITEM', function(item, _ref) {
      var query = _ref.query;
      return new Promise(function(resolve, reject) {
        // get file reference
        var file = item.file;

        // if this is not a jpeg image we are not interested
        if (
          !isFile(file) ||
          !isJPEG(file) ||
          !query('GET_ALLOW_IMAGE_EXIF_ORIENTATION')
        ) {
          // continue with the unaltered dataset
          return resolve(item);
        }

        // get orientation from exif data
        getImageOrientation(file).then(function(orientation) {
          item.setMetadata('exif', {
            orientation: orientation
          });

          resolve(item);
        });
      });
    });

    // Expose plugin options
    return {
      options: {
        // Enable or disable image orientation reading
        allowImageExifOrientation: [true, Type.BOOLEAN]
      }
    };
  };

  if (typeof navigator !== 'undefined' && document) {
    // plugin has loaded
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin$1 })
    );
  }

  return plugin$1;
});


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

/*
 * FilePondPluginImagePreview 1.0.10
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
(function(global, factory) {
   true
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global.FilePondPluginImagePreview = factory());
})(this, function() {
  'use strict';

  // test if file is of type image and can be viewed in canvas
  var isPreviewableImage = function isPreviewableImage(file) {
    return /^image/.test(file.type) && !/svg/.test(file.type);
  };

  var asyncGenerator = (function() {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function(resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(
              function(arg) {
                resume('next', arg);
              },
              function(arg) {
                resume('throw', arg);
              }
            );
          } else {
            settle(result.done ? 'return' : 'normal', result.value);
          }
        } catch (err) {
          settle('throw', err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case 'return':
            front.resolve({
              value: value,
              done: true
            });
            break;

          case 'throw':
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== 'function') {
        this.return = undefined;
      }
    }

    if (typeof Symbol === 'function' && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function(arg) {
      return this._invoke('next', arg);
    };

    AsyncGenerator.prototype.throw = function(arg) {
      return this._invoke('throw', arg);
    };

    AsyncGenerator.prototype.return = function(arg) {
      return this._invoke('return', arg);
    };

    return {
      wrap: function(fn) {
        return function() {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function(value) {
        return new AwaitValue(value);
      }
    };
  })();

  var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var transforms = {
    1: function _() {
      return [1, 0, 0, 1, 0, 0];
    },
    2: function _(width) {
      return [-1, 0, 0, 1, width, 0];
    },
    3: function _(width, height) {
      return [-1, 0, 0, -1, width, height];
    },
    4: function _(width, height) {
      return [1, 0, 0, -1, 0, height];
    },
    5: function _() {
      return [0, 1, 1, 0, 0, 0];
    },
    6: function _(width, height) {
      return [0, 1, -1, 0, height, 0];
    },
    7: function _(width, height) {
      return [0, -1, -1, 0, height, width];
    },
    8: function _(width) {
      return [0, -1, 1, 0, 0, width];
    }
  };

  var fixImageOrientation = function fixImageOrientation(
    ctx,
    width,
    height,
    orientation
  ) {
    // no orientation supplied
    if (orientation === -1) {
      return;
    }

    ctx.transform.apply(
      ctx,
      toConsumableArray(transforms[orientation](width, height))
    );
  };

  // draws the preview image
  var createPreviewImage = function createPreviewImage(
    data,
    width,
    height,
    orientation
  ) {
    // round
    width = Math.round(width);
    height = Math.round(height);

    // width and height have already been swapped earlier
    // if orientation was in range below, let's swap back to make
    // this code a bit more readable
    if (orientation >= 5 && orientation <= 8) {
      var _ref = [height, width];
      width = _ref[0];
      height = _ref[1];
    }

    // draw image
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // if is rotated incorrectly swap width and height
    if (orientation >= 5 && orientation <= 8) {
      canvas.width = height;
      canvas.height = width;
    } else {
      canvas.width = width;
      canvas.height = height;
    }

    // correct image orientation
    ctx.save();
    fixImageOrientation(ctx, width, height, orientation);

    // draw the image
    ctx.drawImage(data, 0, 0, width, height);

    // end draw image
    ctx.restore();

    // data has been transferred to canvas ( if was ImageBitmap )
    if ('close' in data) {
      data.close();
    }

    return canvas;
  };

  var IMAGE_SCALE_SPRING_PROPS = {
    type: 'spring',
    stiffness: 0.5,
    damping: 0.45,
    mass: 10
  };

  var createImageView = function createImageView(fpAPI) {
    return fpAPI.utils.createView({
      name: 'image-preview',
      tag: 'div',
      ignoreRect: true,
      create: function create(_ref) {
        var root = _ref.root;

        root.ref.clip = document.createElement('div');
        root.element.appendChild(root.ref.clip);
      },
      write: fpAPI.utils.createRoute({
        DID_IMAGE_PREVIEW_LOAD: function DID_IMAGE_PREVIEW_LOAD(_ref2) {
          var root = _ref2.root,
            props = _ref2.props,
            action = _ref2.action;
          var id = props.id;

          // get item

          var item = root.query('GET_ITEM', { id: props.id });

          // orientation info
          var exif = item.getMetadata('exif') || {};
          var orientation = exif.orientation || -1;

          // get width and height from action, and swap of orientation is incorrect
          var _action$data = action.data,
            width = _action$data.width,
            height = _action$data.height;

          if (orientation >= 5 && orientation <= 8) {
            var _ref3 = [height, width];
            width = _ref3[0];
            height = _ref3[1];
          }

          // get item props
          var crop = item.getMetadata('crop') || {
            rect: {
              x: 0,
              y: 0,
              width: 1,
              height: 1
            },
            aspectRatio: height / width
          };

          // scale canvas based on pixel density
          var pixelDensityFactor = window.devicePixelRatio;

          // the max height of the preview container
          var fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
          var minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
          var maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

          // calculate scaled preview image size
          var containerWidth = root.rect.inner.width;
          var previewImageRatio = height / width;
          var previewWidth = containerWidth;
          var previewHeight = containerWidth * previewImageRatio;

          // calculate image preview height and width
          var imageHeight =
            fixedPreviewHeight !== null
              ? fixedPreviewHeight
              : Math.max(minPreviewHeight, Math.min(height, maxPreviewHeight));
          var imageWidth = imageHeight / previewImageRatio;

          // render scaled preview image
          var previewImage = createPreviewImage(
            action.data,
            imageWidth * pixelDensityFactor,
            imageHeight * pixelDensityFactor,
            orientation
          );

          // calculate crop container size
          var clipHeight =
            fixedPreviewHeight !== null
              ? fixedPreviewHeight
              : Math.max(
                  minPreviewHeight,
                  Math.min(containerWidth * crop.aspectRatio, maxPreviewHeight)
                );

          var clipWidth = clipHeight / crop.aspectRatio;
          if (clipWidth > previewWidth) {
            clipWidth = previewWidth;
            clipHeight = clipWidth * crop.aspectRatio;
          }

          // calculate scalar based on if the clip rectangle has been scaled down
          var previewScalar = clipHeight / (previewHeight * crop.rect.height);

          width = previewWidth * previewScalar;
          height = previewHeight * previewScalar;
          var x = -crop.rect.x * previewWidth * previewScalar;
          var y = -crop.rect.y * previewHeight * previewScalar;

          // apply styles
          root.ref.clip.style.cssText =
            '\n                    width: ' +
            Math.round(clipWidth) +
            'px;\n                    height: ' +
            Math.round(clipHeight) +
            'px;\n                ';

          // position image
          previewImage.style.cssText =
            '\n                    width: ' +
            Math.round(width) +
            'px;\n                    height: ' +
            Math.round(height) +
            'px;\n                    transform: translate(' +
            Math.round(x) +
            'px, ' +
            Math.round(y) +
            'px) rotateZ(0.00001deg);\n                ';
          root.ref.clip.appendChild(previewImage);

          // let others know of our fabulous achievement (so the image can be faded in)
          root.dispatch('DID_IMAGE_PREVIEW_DRAW', { id: id });
        }
      }),
      mixins: {
        styles: ['scaleX', 'scaleY', 'opacity'],
        animations: {
          scaleX: IMAGE_SCALE_SPRING_PROPS,
          scaleY: IMAGE_SCALE_SPRING_PROPS,
          opacity: { type: 'tween', duration: 750 }
        }
      }
    });
  };

  var applyTemplate = function applyTemplate(source, target) {
    // copy width and height
    target.width = source.width;
    target.height = source.height;

    // draw the template
    var ctx = target.getContext('2d');
    ctx.drawImage(source, 0, 0);
  };

  var createImageOverlayView = function createImageOverlayView(fpAPI) {
    return fpAPI.utils.createView({
      name: 'image-preview-overlay',
      tag: 'canvas',
      ignoreRect: true,
      create: function create(_ref) {
        var root = _ref.root,
          props = _ref.props;

        applyTemplate(props.template, root.element);
      },
      mixins: {
        styles: ['opacity'],
        animations: {
          opacity: { type: 'spring', mass: 25 }
        }
      }
    });
  };

  /**
   * Bitmap Worker
   */
  var BitmapWorker = function BitmapWorker() {
    // route messages
    self.onmessage = function(e) {
      toBitmap(e.data.message, function(response) {
        // imageBitmap is sent back as transferable
        self.postMessage({ id: e.data.id, message: response }, [response]);
      });
    };

    // resize image data
    var toBitmap = function toBitmap(options, cb) {
      fetch(options.file)
        .then(function(response) {
          return response.blob();
        })
        .then(function(blob) {
          return createImageBitmap(blob);
        })
        .then(function(imageBitmap) {
          return cb(imageBitmap);
        });
    };
  };

  var getImageSize = function getImageSize(url, cb) {
    var image = new Image();
    image.onload = function() {
      var width = image.naturalWidth;
      var height = image.naturalHeight;
      image = null;
      cb(width, height);
    };
    image.src = url;
  };

  var easeInOutSine = function easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  };

  var addGradientSteps = function addGradientSteps(gradient, color) {
    var alpha =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var easeFn =
      arguments.length > 3 && arguments[3] !== undefined
        ? arguments[3]
        : easeInOutSine;
    var steps =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
    var offset =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    var range = 1 - offset;
    var rgb = color.join(',');
    for (var i = 0; i <= steps; i++) {
      var p = i / steps;
      var stop = offset + range * p;
      gradient.addColorStop(
        stop,
        'rgba(' + rgb + ', ' + easeFn(p) * alpha + ')'
      );
    }
  };

  var drawTemplate = function drawTemplate(
    canvas,
    width,
    height,
    color,
    alphaTarget
  ) {
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');

    var horizontalCenter = width * 0.5;

    var grad = ctx.createRadialGradient(
      horizontalCenter,
      height + 110,
      height - 100,
      horizontalCenter,
      height + 110,
      height + 100
    );

    addGradientSteps(grad, color, alphaTarget, undefined, 8, 0.4);

    ctx.save();
    ctx.translate(-width * 0.5, 0);
    ctx.scale(2, 1);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  };

  var hasNavigator = typeof navigator !== 'undefined';

  var width = 500;
  var height = 200;

  var overlayTemplateShadow = hasNavigator && document.createElement('canvas');
  var overlayTemplateError = hasNavigator && document.createElement('canvas');
  var overlayTemplateSuccess = hasNavigator && document.createElement('canvas');

  if (hasNavigator) {
    drawTemplate(overlayTemplateShadow, width, height, [40, 40, 40], 0.85);
    drawTemplate(overlayTemplateError, width, height, [196, 78, 71], 1);
    drawTemplate(overlayTemplateSuccess, width, height, [54, 151, 99], 1);
  }

  var createImageWrapperView = function createImageWrapperView(fpAPI) {
    // create overlay view
    var overlay = createImageOverlayView(fpAPI);

    /**
     * Write handler for when preview container has been created
     */
    var didCreatePreviewContainer = function didCreatePreviewContainer(_ref) {
      var root = _ref.root,
        props = _ref.props;
      var utils = fpAPI.utils;
      var createView = utils.createView,
        createWorker = utils.createWorker,
        loadImage = utils.loadImage;
      var id = props.id;

      // we need to get the file data to determine the eventual image size

      var item = root.query('GET_ITEM', id);

      // get url to file (we'll revoke it later on when done)
      var fileURL = URL.createObjectURL(item.file);

      // fallback
      var loadPreviewFallback = function loadPreviewFallback(
        item,
        width,
        height,
        orientation
      ) {
        // let's scale the image in the main thread :(
        loadImage(fileURL).then(previewImageLoaded);
      };

      // image is now ready
      var previewImageLoaded = function previewImageLoaded(data) {
        // the file url is no longer needed
        URL.revokeObjectURL(fileURL);

        // the preview is now ready to be drawn
        root.dispatch('DID_IMAGE_PREVIEW_LOAD', {
          id: id,
          data: data
        });
      };

      // determine image size of this item
      getImageSize(fileURL, function(width, height) {
        // we can now scale the panel to the final size
        root.dispatch('DID_IMAGE_PREVIEW_CALCULATE_SIZE', {
          id: id,
          width: width,
          height: height
        });

        // if we support scaling using createImageBitmap we use a worker
        if ('createImageBitmap' in window) {
          // let's scale the image in a worker
          var worker = createWorker(BitmapWorker);
          worker.post(
            {
              file: fileURL
            },
            function(imageBitmap) {
              // destroy worker
              worker.terminate();

              // no bitmap returned, must be something wrong,
              // try the oldschool way
              if (!imageBitmap) {
                loadPreviewFallback(item);
                return;
              }

              // yay we got our bitmap, let's continue showing the preview
              previewImageLoaded(imageBitmap);
            }
          );
        } else {
          // create fallback preview
          loadPreviewFallback(item);
        }
      });
    };

    /**
     * Write handler for when the preview has been loaded
     */
    var didLoadPreview = function didLoadPreview(_ref2) {
      var root = _ref2.root;

      root.ref.overlayShadow.opacity = 1;
    };

    /**
     * Write handler for when the preview image is ready to be animated
     */
    var didDrawPreview = function didDrawPreview(_ref3) {
      var root = _ref3.root;
      var image = root.ref.image;

      // reveal image

      image.scaleX = 1.0;
      image.scaleY = 1.0;
      image.opacity = 1;
    };

    /**
     * Write handler for when the preview has been loaded
     */
    var restoreOverlay = function restoreOverlay(_ref4) {
      var root = _ref4.root;

      root.ref.overlayShadow.opacity = 1;
      root.ref.overlayError.opacity = 0;
      root.ref.overlaySuccess.opacity = 0;
    };

    var didThrowError = function didThrowError(_ref5) {
      var root = _ref5.root;

      root.ref.overlayShadow.opacity = 0.25;
      root.ref.overlayError.opacity = 1;
    };

    var didCompleteProcessing = function didCompleteProcessing(_ref6) {
      var root = _ref6.root;

      root.ref.overlayShadow.opacity = 0.25;
      root.ref.overlaySuccess.opacity = 1;
    };

    /**
     * Constructor
     */
    var create = function create(_ref7) {
      var root = _ref7.root,
        props = _ref7.props;
      var image = createImageView(fpAPI);

      // append image presenter
      root.ref.image = root.appendChildView(
        root.createChildView(image, {
          id: props.id,
          scaleX: 1.25,
          scaleY: 1.25,
          opacity: 0
        })
      );

      // image overlays
      root.ref.overlayShadow = root.appendChildView(
        root.createChildView(overlay, {
          template: overlayTemplateShadow,
          opacity: 0
        })
      );

      root.ref.overlaySuccess = root.appendChildView(
        root.createChildView(overlay, {
          template: overlayTemplateSuccess,
          opacity: 0
        })
      );

      root.ref.overlayError = root.appendChildView(
        root.createChildView(overlay, {
          template: overlayTemplateError,
          opacity: 0
        })
      );
    };

    return fpAPI.utils.createView({
      name: 'image-preview-wrapper',
      create: create,
      write: fpAPI.utils.createRoute({
        // image preview stated
        DID_IMAGE_PREVIEW_LOAD: didLoadPreview,
        DID_IMAGE_PREVIEW_DRAW: didDrawPreview,
        DID_IMAGE_PREVIEW_CONTAINER_CREATE: didCreatePreviewContainer,

        // file states
        DID_THROW_ITEM_LOAD_ERROR: didThrowError,
        DID_THROW_ITEM_PROCESSING_ERROR: didThrowError,
        DID_THROW_ITEM_INVALID: didThrowError,
        DID_COMPLETE_ITEM_PROCESSING: didCompleteProcessing,
        DID_START_ITEM_PROCESSING: restoreOverlay,
        DID_REVERT_ITEM_PROCESSING: restoreOverlay
      })
    });
  };

  /**
   * Image Preview Plugin
   */
  var plugin$1 = function(fpAPI) {
    var addFilter = fpAPI.addFilter,
      utils = fpAPI.utils;
    var Type = utils.Type,
      createRoute = utils.createRoute,
      isFile = utils.isFile;

    // imagePreviewView

    var imagePreviewView = createImageWrapperView(fpAPI);

    // called for each view that is created right after the 'create' method
    addFilter('CREATE_VIEW', function(viewAPI) {
      // get reference to created view
      var is = viewAPI.is,
        view = viewAPI.view,
        query = viewAPI.query;

      // only hook up to item view and only if is enabled for this cropper

      if (!is('file') || !query('GET_ALLOW_IMAGE_PREVIEW')) {
        return;
      }

      // create the image preview plugin, but only do so if the item is an image
      var didLoadItem = function didLoadItem(_ref) {
        var root = _ref.root,
          props = _ref.props;
        var id = props.id;

        var item = query('GET_ITEM', id);

        // item could theoretically have been removed in the mean time
        if (!item || !isFile(item.file)) {
          return;
        }

        // get the file object
        var file = item.file;

        // exit if this is not an image
        if (!isPreviewableImage(file)) {
          return;
        }

        // exit if image size is too high and no createImageBitmap support
        // this would simply bring the browser to its knees and that is not what we want
        var supportsCreateImageBitmap = 'createImageBitmap' in (window || {});
        var maxPreviewFileSize = query('GET_IMAGE_PREVIEW_MAX_FILE_SIZE');
        if (
          !supportsCreateImageBitmap &&
          maxPreviewFileSize &&
          file.size > maxPreviewFileSize
        ) {
          return;
        }

        // set preview view
        root.ref.imagePreview = view.appendChildView(
          view.createChildView(imagePreviewView, { id: id })
        );

        // now ready
        root.dispatch('DID_IMAGE_PREVIEW_CONTAINER_CREATE', { id: id });
      };

      var didCalculatePreviewSize = function didCalculatePreviewSize(_ref2) {
        var root = _ref2.root,
          props = _ref2.props,
          action = _ref2.action;

        // get item
        var item = root.query('GET_ITEM', { id: props.id });

        // orientation info
        var exif = item.getMetadata('exif') || {};
        var orientation = exif.orientation || -1;

        // get width and height from action, and swap of orientation is incorrect
        var width = action.width,
          height = action.height;

        if (orientation >= 5 && orientation <= 8) {
          var _ref3 = [height, width];
          width = _ref3[0];
          height = _ref3[1];
        }

        // we need the item to get to the crop size
        var crop = item.getMetadata('crop') || {
          rect: {
            x: 0,
            y: 0,
            width: 1,
            height: 1
          },
          aspectRatio: height / width
        };

        // get height min and max
        var fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        var minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
        var maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

        // const crop width
        height =
          fixedPreviewHeight !== null
            ? fixedPreviewHeight
            : Math.max(minPreviewHeight, Math.min(height, maxPreviewHeight));

        width = height / crop.aspectRatio;
        if (width > root.rect.element.width) {
          width = root.rect.element.width;
          height = width * crop.aspectRatio;
        }

        // set height
        root.ref.imagePreview.element.style.cssText =
          'height:' + Math.round(height) + 'px';
      };

      // start writing
      view.registerWriter(
        createRoute({
          DID_LOAD_ITEM: didLoadItem,
          DID_IMAGE_PREVIEW_CALCULATE_SIZE: didCalculatePreviewSize
        })
      );
    });

    // expose plugin
    return {
      options: {
        // Enable or disable image preview
        allowImagePreview: [true, Type.BOOLEAN],

        // Fixed preview height
        imagePreviewHeight: [null, Type.INT],

        // Min image height
        imagePreviewMinHeight: [44, Type.INT],

        // Max image height
        imagePreviewMaxHeight: [256, Type.INT],

        // Max size of preview file for when createImageBitmap is not supported
        imagePreviewMaxFileSize: [null, Type.INT]
      }
    };
  };

  if (typeof navigator !== 'undefined' && document) {
    // plugin has loaded
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin$1 })
    );
  }

  return plugin$1;
});


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "boardStorage" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "boardStorage__content" }, [
      _vm.notifIsShow
        ? _c("div", { staticClass: "boardStorage__content--notif" }, [
            _c("span", [
              _c("span", { staticClass: "iconCircle circle--heart" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      height: "16",
                      width: "16",
                      fill: "currentColor",
                      viewBox: "0 0 16 16"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("b", [_vm._v("Tips:")]),
              _vm._v(
                "   You can upload more than one item, drop your files on second box."
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn--close", on: { click: _vm.notifClose } },
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
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "boardStorage__content--core" }, [
        _c(
          "div",
          { staticClass: "projectUpload", attrs: { id: "project-upload" } },
          [
            _c(
              "label",
              {
                staticClass: "project-upload--label",
                attrs: { for: "project-upload" }
              },
              [_vm._v("Project data drops :")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "projectUploadWrap" }, [
              _c(
                "div",
                { staticClass: "projectUpload__core" },
                [
                  _c("file-pond", {
                    ref: "pond",
                    staticClass: "storageFile",
                    attrs: {
                      name: "projectUpload",
                      instantUpload: "false",
                      "label-idle": "Drop or click upload project here",
                      "label-file-waiting-for-size": "calculate size",
                      "accepted-file-types":
                        "application/zip, application/x-rar-compressed",
                      server: "https://httpbin.org/post",
                      files: _vm.myFiles
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "projectUpload__misc" },
                [
                  _c("file-pond", {
                    ref: "pond",
                    staticClass: "storageFile",
                    attrs: {
                      name: "miscUpload",
                      "allow-multiple": "true",
                      instantUpload: "false",
                      "label-idle": "Drop or click to upload files here",
                      "label-file-waiting-for-size": "calculate size",
                      server: "https://httpbin.org/post",
                      files: _vm.myFiles
                    }
                  })
                ],
                1
              )
            ])
          ]
        ),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "boardStorage__sidebar" }, [
      _c("ul", [
        _c("li", [_vm._v("Upload center")]),
        _vm._v(" "),
        _c("li", [_vm._v("Track files")]),
        _vm._v(" "),
        _c("li", [_vm._v("Issues")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "storageExtend" }, [
      _c("div", { staticClass: "storageExtend__item" }, [
        _c("div", { staticClass: "lastUpdate" }, [
          _c("span", [_vm._v("Last update: ")]),
          _vm._v(" "),
          _c("div", { staticClass: "lastUpdate__content" }, [
            _c("p", [_vm._v("project-jvnx.zip")]),
            _vm._v(" "),
            _c("span", [_vm._v("at 3 june 2018")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lastUpdate__footer" }, [
            _c("button", { staticClass: "btn btn--primary" }, [
              _vm._v("See all")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "storageExtend__item" }, [
        _c("div", { staticClass: "lastIssue" }, [
          _c("span", [_vm._v("Lastest issue: ")]),
          _vm._v(" "),
          _c("div", { staticClass: "lastIssue__content" }, [
            _c("p", [
              _c("b", [_vm._v("#13l2 - ")]),
              _vm._v("Can't deliver extend data")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Opened by Pampam")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lastIssue__footer" }, [
            _c("button", { staticClass: "btn btn--primary" }, [
              _vm._v("See all")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "storageExtend__item" }, [
        _c("div", { staticClass: "projectProgress" }, [
          _c("span", [_vm._v("Project status:")]),
          _vm._v(" "),
          _c("div", { staticClass: "projectProgress__card green" }, [
            _c("h2", [_vm._v("Passed")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e083178", module.exports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(114)
/* template */
var __vue_template__ = __webpack_require__(125)
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
Component.options.__file = "resources/assets/js/components/dashboards/students/board/storage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e083178", Component.options)
  } else {
    hotAPI.reload("data-v-2e083178", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});