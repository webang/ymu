webpackJsonp([23],{"6R4q":function(t,e){},ABuK:function(t,e){},"Ed4/":function(t,e){},KYgS:function(t,e){},cj6F:function(t,e,n){"use strict";var l={name:"ym-navbar",components:{Button:n("lkey").a},props:{title:String,leftText:{type:String,default:"返回"},rightText:String,leftArrow:{type:Boolean,default:!0},fixed:Boolean,goBack:{Boolean:Boolean,default:!0}},methods:{handleClickLeft:function(){this.$emit("on-click-left"),this.goBack&&this.$router.back()},handleClickRight:function(){this.$emit("on-click-right")}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ym-navbar"},[n("div",{staticClass:"ym-navbar-left"},[t._t("left",[n("div",{staticClass:"ym-navbar-button",on:{click:t.handleClickLeft}},[t.leftArrow?n("i",{staticClass:"ym-navbar-button__icon iconfont icon-left"}):t._e(),t._v(" "),n("span",{staticClass:"ym-navbar-button__text",domProps:{textContent:t._s(t.leftText)}})])])],2),t._v(" "),n("div",{staticClass:"ym-navbar-title"},[t._t("default",[t._v(t._s(t.title))])],2),t._v(" "),n("div",{staticClass:"ym-navbar-right"},[t._t("right",[n("div",{staticClass:"ym-navbar__right-button",on:{click:t.handleClickRight}},[t._v(t._s(t.rightText))])])],2)])},staticRenderFns:[]};var o=n("C7Lr")(l,a,!1,function(t){n("ABuK")},null,null).exports;o.install=function(t){t.component(o.name,o)};e.a=o},lkey:function(t,e,n){"use strict";var l={name:"ym-button",props:{type:{type:String,default:"light"},size:{type:String,default:"normal"},radius:{type:Boolean,default:!0},inline:{type:Boolean,default:!0},"click-effect":{type:Boolean,default:!0},clickable:{type:Boolean,default:!0},text:String,block:Boolean,disabled:Boolean,plain:Boolean,clear:Boolean,round:Boolean,full:Boolean,showLoading:Boolean},methods:{onClick:function(t){this.disabled||this.$emit("click",t)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"ym-button",class:["ym-button--"+t.type,"ym-button--"+t.size,{"ym-button--radius":t.radius,"ym-button--disabled":t.disabled,"ym-button--plain":t.plain,"ym-button--block":t.block,"ym-button--inline":!t.block&&t.inline,"ym-button--round":t.round,"ym-button--clear":t.clear,"ym-button--unfeedback":!t.clickEffect,"ym-button--clickable":!t.disabled&&t.clickable}],attrs:{disabled:t.disabled},on:{click:t.onClick}},[t.showLoading?n("i",{staticClass:"ym-loading"}):t._e(),t._v(" "),t._t("default",[n("span",{staticClass:"yum-button-text"},[t._v(t._s(t.text))])])],2)},staticRenderFns:[]};var o=n("C7Lr")(l,a,!1,function(t){n("6R4q")},null,null).exports;o.install=function(t){t.component(o.name,o)};e.a=o},mUtA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n("IvJb"),a={name:"App",components:{Navbar:n("cj6F").a}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},["/"!==this.$route.path?e("Navbar",[this._v(this._s(this.$route.meta.title))]):this._e(),this._v(" "),e("router-view")],1)},staticRenderFns:[]},i=n("C7Lr")(a,o,!1,null,null,null).exports,c=n("zO6J");l.a.use(c.a);var r=new c.a({routes:[{path:"/",name:"Welcome",component:()=>Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"S4fG")),meta:{title:"ym"}},{path:"/Collapse",name:"Collapse",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"9R2l")),meta:{title:"Collapse 折叠面板"}},{path:"/Backtop",name:"Backtop",component:()=>n.e(10).then(n.bind(null,"6QDX")),meta:{title:"Backtop 返回顶部"}},{path:"/Confirm",name:"Confirm",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"JOlX")),meta:{title:"Confirm 确认框"}},{path:"/Radio",name:"Radio",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"d0/X")),meta:{title:"Radio 单选框"}},{path:"/Slider",name:"Slider",component:()=>n.e(9).then(n.bind(null,"fQyn")),meta:{title:"Slider 滑块"}},{path:"/RegionSlider",name:"RegionSlider",component:()=>n.e(11).then(n.bind(null,"cUvw")),meta:{title:"RegionSlider 双向滑块"}},{path:"/Popup",name:"Popup",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"SXmi")),meta:{title:"Popup 弹出层"}},{path:"/Checkbox",name:"Checkbox",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"xYtC")),meta:{title:"Checkbox 复选框"}},{path:"/Field",name:"Field",component:()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"60z6")),meta:{title:"Field 输入框"}},{path:"/NoticeBar",name:"NoticeBar",component:()=>n.e(18).then(n.bind(null,"9s4I")),meta:{title:"NoticeBar 通告栏"}},{path:"/Marquee",name:"Marquee",component:()=>n.e(6).then(n.bind(null,"trf8")),meta:{title:"Marquee 跑马灯"}},{path:"/Toast",name:"Toast",component:()=>Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"v50Z")),meta:{title:"Toast 轻提示"}},{path:"/Tabbar",name:"Tabbar",component:()=>n.e(1).then(n.bind(null,"88lq")),meta:{title:"Tabbar 标签栏"}},{path:"/Flow",name:"Flow",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"ruY1")),meta:{title:"Flow 步骤条"}},{path:"/Progress",name:"Progress",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"c9Ae")),meta:{title:"Progress 进度条"}},{path:"/Button",name:"Button",component:()=>n.e(14).then(n.bind(null,"tzn9")),meta:{title:"Button 按钮"}},{path:"/Navbar",name:"Navbar",component:()=>n.e(16).then(n.bind(null,"DMNl")),meta:{title:"Navbar 导航"}},{path:"/Actionsheet",name:"Actionsheet",component:()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"Kegi")),meta:{title:"Actionsheet 上拉菜单"}},{path:"/Alert",name:"Alert",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"Q5MC")),meta:{title:"Alert 提示窗"}},{path:"/Cell",name:"Cell",component:()=>Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"DYvd")),meta:{title:"Cell 单元格"}},{path:"/Switch",name:"Switch",component:()=>Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"BbOi")),meta:{title:"Switch 开关"}}]});n("Ed4/"),n("KYgS");l.a.config.productionTip=!1,new l.a({el:"#app",router:r,components:{App:i},template:"<App/>"})}},["mUtA"]);
//# sourceMappingURL=app.d985891ac515293d2443.js.map