webpackJsonp([10],{"60z6":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("gGbG"),o={components:{Cell:a.k,Field:a.u,Button:a.f,CellGroup:a.l},data:function(){return{demo1:{v1:"",v2:""},demo2:{v1:"",v2:"",v3:"",v4:""},demo3:{v1:"",v2:""},demo4:{v1:""},demo5:{v2:""},demo6:{v1:""},demo7:{v1:"",v2:""},rule:[{rule:/\^1[0-9]{10}/,error:"手机号码不正确"}]}},watch:{"demo6.v1":function(e){console.log(e)}},methods:{show:function(){Toast({message:"请勿重复提交订单"})}}},d={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"page-field"},[t("CellGroup",{attrs:{title:"基础用法"}},[t("Field",{attrs:{label:"登录账户",placeholder:"输入账户"},model:{value:e.demo1.v1,callback:function(l){e.$set(e.demo1,"v1",l)},expression:"demo1.v1"}}),e._v(" "),t("Field",{attrs:{label:"登录密码",type:"password",placeholder:"输入密码"},model:{value:e.demo1.v2,callback:function(l){e.$set(e.demo1,"v2",l)},expression:"demo1.v2"}})],1),e._v(" "),t("div",{staticClass:"value"},[e._v(e._s(e.demo1))]),e._v(" "),t("CellGroup",{attrs:{title:"自定义类型"}},[t("Field",{attrs:{label:"text",placeholder:"输入账户",type:"text"},model:{value:e.demo2.v1,callback:function(l){e.$set(e.demo2,"v1",l)},expression:"demo2.v1"}}),e._v(" "),t("Field",{attrs:{label:"number",placeholder:"输入账户",type:"number"},model:{value:e.demo2.v2,callback:function(l){e.$set(e.demo2,"v2",l)},expression:"demo2.v2"}}),e._v(" "),t("Field",{attrs:{label:"password",placeholder:"请输入密码",type:"password"},model:{value:e.demo2.v3,callback:function(l){e.$set(e.demo2,"v3",l)},expression:"demo2.v3"}}),e._v(" "),t("Field",{attrs:{label:"textarea",placeholder:"个人简介",type:"textarea"},model:{value:e.demo2.v4,callback:function(l){e.$set(e.demo2,"v4",l)},expression:"demo2.v4"}})],1),e._v(" "),t("div",{staticClass:"value"},[e._v(e._s(e.demo2))]),e._v(" "),t("CellGroup",{attrs:{title:"显示清除按钮"}},[t("Field",{attrs:{label:"默认显示",placeholder:"输入账户"},model:{value:e.demo3.v1,callback:function(l){e.$set(e.demo3,"v1",l)},expression:"demo3.v1"}}),e._v(" "),t("Field",{attrs:{label:"clearable=false",placeholder:"输入账户",clearable:!1},model:{value:e.demo3.v2,callback:function(l){e.$set(e.demo3,"v2",l)},expression:"demo3.v2"}})],1),e._v(" "),t("div",{staticClass:"value"},[e._v(e._s(e.demo3))]),e._v(" "),t("CellGroup",{attrs:{title:"不使用label"}},[t("Field",{attrs:{placeholder:"不使用label"},model:{value:e.demo4.v1,callback:function(l){e.$set(e.demo4,"v1",l)},expression:"demo4.v1"}})],1),e._v(" "),t("div",{staticClass:"value"},[e._v(e._s(e.demo4))]),e._v(" "),t("CellGroup",{attrs:{title:"禁用输入框"}},[t("Field",{attrs:{placeholder:"输入账户",disabled:""},model:{value:e.demo5.v1,callback:function(l){e.$set(e.demo5,"v1",l)},expression:"demo5.v1"}})],1),e._v(" "),t("div",{staticClass:"value"},[e._v(e._s(e.demo5))]),e._v(" "),t("CellGroup",{attrs:{title:"长度限制"}},[t("Field",{attrs:{label:"max=10",placeholder:"请输入手机号码",max:10,type:"number"},model:{value:e.demo6.v1,callback:function(l){e.$set(e.demo6,"v1",l)},expression:"demo6.v1"}})],1),e._v(" "),t("CellGroup",{attrs:{title:"autosize"}},[t("Field",{attrs:{label:"autosize=true",autosize:!0,placeholder:"个人简介",type:"textarea"},model:{value:e.demo7.v1,callback:function(l){e.$set(e.demo7,"v1",l)},expression:"demo7.v1"}}),e._v(" "),t("Field",{attrs:{label:"autosize=false",autosize:!1,placeholder:"个人简介",type:"textarea"},model:{value:e.demo7.v2,callback:function(l){e.$set(e.demo7,"v2",l)},expression:"demo7.v2"}})],1)],1)},staticRenderFns:[]};var s=t("C7Lr")(o,d,!1,function(e){t("YqAz")},"data-v-710cc49f",null);l.default=s.exports},YqAz:function(e,l){}});
//# sourceMappingURL=10.6fb4686b1df45f9de0eb.js.map