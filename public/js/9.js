webpackJsonp([9],{127:function(e,t,i){var r=i(7)(i(85),i(86),!1,null,null,null);e.exports=r.exports},85:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isHasProjects:!1,profile:{namebind:"Fahmi irsyad k",quotebind:"JVNX Co-founder & Front End Dev",emailbind:"fahmiirsyad11@icloud.com",phonebind:"",oldpassbind:"",newpassbind:"",confirmnewind:""}}},methods:{isNumber:function(e){var t=(e=e||window.event).which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)))return!0;e.preventDefault()}}}},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"profile"},[i("div",{staticClass:"profile__sidebar"},[i("div",{staticClass:"profileSidebar__header"},[i("div",{staticClass:"avatar avatar--xl marginMagic",staticStyle:{"background-image":"url(/images/sample.jpg)"}}),e._v(" "),i("div",{staticClass:"profileSidebarHeader__title"},[i("h3",[e._v(e._s(e.profile.namebind))]),e._v(" "),i("p",[e._v(e._s(e.profile.quotebind))]),e._v(" "),i("p",{staticClass:"emailtitle"},[e._v(e._s(e.profile.emailbind))])])]),e._v(" "),i("div",{staticClass:"profileSidebar__content"},[i("p",{staticClass:"profileSidebarContent__title"},[e._v("My projects:")]),e._v(" "),e.isHasProjects?i("div",{staticClass:"profileSidebarContent__core--alter"},[e._m(0),e._v(" "),e._m(1)]):i("div",{staticClass:"profileSidebarContent__core"},[i("img",{attrs:{src:"/images/nocard.svg",alt:""}}),e._v(" "),i("p",[e._v("You dont have any project.")])])])]),e._v(" "),i("div",{staticClass:"profile__core"},[e._m(2),e._v(" "),i("div",{staticClass:"profileCore__content"},[i("div",{staticClass:"preference"},[i("div",{staticClass:"preference__general"},[i("h2",[e._v("General")]),e._v(" "),i("section",{staticClass:"preference__content"},[i("fieldset",{staticClass:"preference__form"},[i("label",{attrs:{for:"preferenceName"}},[e._v("Name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.namebind,expression:"profile.namebind"}],attrs:{type:"text",maxlength:"30",id:"preferenceName",placeholder:"Fill name"},domProps:{value:e.profile.namebind},on:{input:function(t){t.target.composing||e.$set(e.profile,"namebind",t.target.value)}}})]),e._v(" "),i("fieldset",{staticClass:"preference__form"},[i("label",{attrs:{for:"preferenceStatus"}},[e._v("Quotes")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.quotebind,expression:"profile.quotebind"}],attrs:{type:"text",maxlength:"50",id:"preferenceStatus",placeholder:"Ar u seriously dude ? ah nvm"},domProps:{value:e.profile.quotebind},on:{input:function(t){t.target.composing||e.$set(e.profile,"quotebind",t.target.value)}}})]),e._v(" "),i("fieldset",{staticClass:"preference__form"},[i("label",{attrs:{for:"preferenceEmail"}},[e._v("Email address")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.emailbind,expression:"profile.emailbind"}],attrs:{type:"text",maxlength:"50",id:"preferenceEmail",placeholder:"Fill email address"},domProps:{value:e.profile.emailbind},on:{input:function(t){t.target.composing||e.$set(e.profile,"emailbind",t.target.value)}}})]),e._v(" "),i("fieldset",{staticClass:"preference__form"},[i("label",{attrs:{for:"preferencePhone"}},[e._v("Phone")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.phonebind,expression:"profile.phonebind"}],attrs:{type:"text",maxlength:"12",id:"preferencePhone",placeholder:"Fill your phone number here"},domProps:{value:e.profile.phonebind},on:{keypress:function(t){e.isNumber(e.event)},input:function(t){t.target.composing||e.$set(e.profile,"phonebind",t.target.value)}}})]),e._v(" "),e._m(3)])]),e._v(" "),i("div",{staticClass:"preference__privacy"},[i("h2",[e._v("Privacy")]),e._v(" "),i("section",{staticClass:"preference__content"},[i("fieldset",{staticClass:"preference__form"},[i("label",{attrs:{for:"preferencePassOld"}},[e._v("Old password")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.oldpassbind,expression:"profile.oldpassbind"}],attrs:{type:"password",id:"preferencePassOld",placeholder:"•••••••••••••••••"},domProps:{value:e.profile.oldpassbind},on:{input:function(t){t.target.composing||e.$set(e.profile,"oldpassbind",t.target.value)}}})]),e._v(" "),i("fieldset",{staticClass:"preference__form"},[i("label",{attrs:{for:"preferencePassNew"}},[e._v("New password")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.newpassbind,expression:"profile.newpassbind"}],attrs:{type:"password",id:"preferencePassNew",placeholder:"•••••••••••••••••"},domProps:{value:e.profile.newpassbind},on:{input:function(t){t.target.composing||e.$set(e.profile,"newpassbind",t.target.value)}}})]),e._v(" "),i("fieldset",{staticClass:"preference__form"},[i("label",{attrs:{for:"preferencePassNew"}},[e._v("Confirm new password")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.confirmnewpassbind,expression:"profile.confirmnewpassbind"}],attrs:{type:"password",id:"preferenceConfirmPassNew",placeholder:"•••••••••••••••••"},domProps:{value:e.profile.confirmnewpassbind},on:{input:function(t){t.target.composing||e.$set(e.profile,"confirmnewpassbind",t.target.value)}}})])]),e._v(" "),e._m(4)])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"projectSidebar--item"},[t("h4",[this._v("Project A")]),this._v(" "),t("p",[this._v("5 peoples on project")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"projectSidebar--item"},[t("h4",[this._v("Project B")]),this._v(" "),t("p",[this._v("3 peoples on project")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"profileCore__header"},[t("h4",[this._v("Account Preferences")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preference__submit"},[t("button",{staticClass:"btn btn--primary"},[this._v("Save changes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preference__submit"},[t("button",{staticClass:"btn btn--primary"},[this._v("Save changes")])])}]}}});