webpackJsonp([20],{v50Z:function(t,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=l("gGbG"),o={components:{Cell:e.f,Button:e.e,CellGroup:e.g},data:function(){return{demo1:{position:"middle"}}},methods:{show:function(){Object(e.D)({message:"请勿重复提交订单"})},show2:function(){Object(e.D)({position:"top",message:"请勿重复提交订单"})},show3:function(){Object(e.D)({position:"bottom",message:"请勿重复提交订单"})},show4:function(){Object(e.D)({type:"success",message:"操作成功"})},show5:function(){Object(e.D)({type:"fail",message:"操作失败"})},show6:function(){Object(e.D)({type:"warn",message:"操作失败"})},show7:function(){Object(e.D)({type:"error",message:"服务器出错"})},show8:function(){if(this.toast)return e.D.clear(this.toast),void(this.toast=null);this.toast=Object(e.D)({type:"error",message:"服务器出错",autoClose:!1})}}},a={render:function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("div",{staticClass:"page-toast"},[l("div",{staticClass:"ym-doc-block"},[l("div",{staticClass:"ym-doc-block__title"},[t._v("基础用法-position")]),t._v(" "),l("div",{staticClass:"ym-doc-block__content"},[l("CellGroup",[l("Cell",{attrs:{label:"middle"}},[l("Button",{attrs:{slot:"value",size:"mini",plain:"",type:"primary"},on:{click:t.show},slot:"value"},[t._v("显示")])],1),t._v(" "),l("Cell",{attrs:{label:"top"}},[l("Button",{attrs:{slot:"value",size:"mini",plain:"",type:"primary"},on:{click:t.show2},slot:"value"},[t._v("显示")])],1),t._v(" "),l("Cell",{attrs:{label:"bottom"}},[l("Button",{attrs:{slot:"value",size:"mini",plain:"",type:"primary"},on:{click:t.show3},slot:"value"},[t._v("显示")])],1)],1)],1)]),t._v(" "),l("div",{staticClass:"ym-doc-block"},[l("div",{staticClass:"ym-doc-block__title"},[t._v("设置-type")]),t._v(" "),l("div",{staticClass:"ym-doc-block__content"},[l("CellGroup",[l("Cell",{attrs:{label:"success"}},[l("Button",{attrs:{slot:"value",size:"mini",plain:"",type:"primary"},on:{click:t.show4},slot:"value"},[t._v("显示")])],1),t._v(" "),l("Cell",{attrs:{label:"fail"}},[l("Button",{attrs:{slot:"value",size:"mini",plain:"",type:"primary"},on:{click:t.show5},slot:"value"},[t._v("显示")])],1),t._v(" "),l("Cell",{attrs:{label:"warn"}},[l("Button",{attrs:{slot:"value",size:"mini",plain:"",type:"primary"},on:{click:t.show6},slot:"value"},[t._v("显示")])],1),t._v(" "),l("Cell",{attrs:{label:"error"}},[l("Button",{attrs:{slot:"value",size:"mini",plain:"",type:"primary"},on:{click:t.show7},slot:"value"},[t._v("显示")])],1)],1)],1)]),t._v(" "),l("div",{staticClass:"ym-doc-block"},[l("div",{staticClass:"ym-doc-block__title"},[t._v("不自己关闭-autoClose")]),t._v(" "),l("div",{staticClass:"ym-doc-block__content"},[l("CellGroup",[l("Cell",{attrs:{label:"false"}},[l("Button",{attrs:{slot:"value",size:"mini",type:"primary",plain:""},on:{click:t.show8},slot:"value"},[t._v("切换")])],1)],1)],1)])])},staticRenderFns:[]},i=l("C7Lr")(o,a,!1,null,null,null);s.default=i.exports}});
//# sourceMappingURL=20.d7c7d1dba5de133d1e62.js.map