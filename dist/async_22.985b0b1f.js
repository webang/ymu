(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{109:function(i,t,s){"use strict";s.r(t);var n=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"yus-demo yus-demo-swiper"},[s("div",{staticClass:"yus-demo-block__hd"},[i._v("基本用法")]),s("div",{staticClass:"yus-demo-block__bd"},[s("div",{staticClass:"swiper-01"},[s("yus-swiper",{ref:"swiper01",staticClass:"swiper",attrs:{"auto-play":!1,active:i.v1},on:{"index-change":i.onIndexChange1}},[s("yus-swiper-item",[s("div",{staticClass:"item"},[i._v("1")])]),s("yus-swiper-item",[s("div",{staticClass:"item"},[i._v("2")])]),s("yus-swiper-item",[s("div",{staticClass:"item"},[i._v("3")])])],1),s("div",{staticClass:"yus-demo-row",staticStyle:{"margin-top":"10px"}},[s("yus-button",{attrs:{block:"",type:"primary"},on:{click:i.onClick01SlideNext}},[i._v("slideNext")])],1),s("div",{staticClass:"yus-demo-row"},[s("yus-button",{attrs:{block:"",type:"primary"},on:{click:i.onClick01SlidePrev}},[i._v("slidePrev")])],1)],1)]),s("div",{staticClass:"yus-demo-block__hd"},[i._v("自定义指示器")]),s("div",{staticClass:"yus-demo-block__bd"},[s("yus-swiper",{ref:"swiper02",staticClass:"swiper swiper-02",attrs:{"auto-play":!1,active:i.v2},on:{"index-change":i.onIndexChange2}},[s("yus-swiper-item",[s("div",{staticClass:"item"},[i._v("1")])]),s("yus-swiper-item",[s("div",{staticClass:"item"},[i._v("2")])]),s("div",{staticClass:"indicator",attrs:{slot:"indicator"},slot:"indicator"},[i._v(i._s(i.v2+1)+"/2")])],1)],1),s("div",{staticClass:"yus-demo-block__hd"},[i._v("垂直方向")]),s("div",{staticClass:"yus-demo-block__bd"},[s("yus-swiper",{ref:"swiper03",staticClass:"swiper swiper-03",attrs:{direction:"vertical","auto-play":!1,active:i.v3},on:{"index-change":i.onIndexChange3}},[s("yus-swiper-item",[s("div",{staticClass:"item"},[i._v("1")])]),s("yus-swiper-item",[s("div",{staticClass:"item"},[i._v("2")])]),s("div",{staticClass:"indicator",attrs:{slot:"indicator"},slot:"indicator"},[i._v(i._s(i.v3+1)+"/2")])],1)],1)])};n._withStripped=!0;var e={data:function(){return{v1:0,v2:0,v3:0,v4:0}},methods:{onClick01SlideTo:function(){this.$refs.swiper01.slideTo(this.v1)},onClick01SlideNext:function(){this.$refs.swiper01.slideNext()},onClick01SlidePrev:function(){this.$refs.swiper01.slidePrev()},onIndexChange3:function(i){this.v3=i},onIndexChange2:function(i){this.v2=i},onIndexChange1:function(i){this.v1=i}}},a=(s(204),s(13)),r=Object(a.a)(e,n,[],!1,null,"78a63189",null);r.options.__file="packages/swiper/demo/index.vue";t.default=r.exports},156:function(i,t,s){var n=s(205);"string"==typeof n&&(n=[[i.i,n,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};s(16)(n,e);n.locals&&(i.exports=n.locals)},204:function(i,t,s){"use strict";var n=s(156);s.n(n).a},205:function(i,t,s){(i.exports=s(15)(!1)).push([i.i,".swiper-4[data-v-78a63189] {\n  width: 100%;\n  height: 180px;\n}\n.swiper-4 img[data-v-78a63189] {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n.swiper-01 .swiper[data-v-78a63189] {\n  height: 150px;\n}\n.swiper-01 .item[data-v-78a63189] {\n  font-size: 30px;\n  line-height: 150px;\n  text-align: center;\n}\n.swiper-01[data-v-78a63189] .yus-swiper-item:nth-child(1) {\n  background: #f8591a;\n}\n.swiper-01[data-v-78a63189] .yus-swiper-item:nth-child(2) {\n  background: #03a9f4;\n}\n.swiper-01[data-v-78a63189] .yus-swiper-item:nth-child(3) {\n  background: #00bcd4;\n}\n.swiper-01 .input-wrap[data-v-78a63189] {\n  display: inline-block;\n}\n.swiper-02[data-v-78a63189] {\n  height: 150px;\n}\n.swiper-02 .item[data-v-78a63189] {\n    font-size: 30px;\n    line-height: 150px;\n    text-align: center;\n}\n.swiper-02[data-v-78a63189] .yus-swiper-item:nth-child(1) {\n    background: #f8591a;\n}\n.swiper-02[data-v-78a63189] .yus-swiper-item:nth-child(2) {\n    background: #03a9f4;\n}\n.swiper-02[data-v-78a63189] .yus-swiper-item:nth-child(3) {\n    background: #00bcd4;\n}\n.swiper-02 .indicator[data-v-78a63189] {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    padding: 3px 8px;\n    font-size: 12px;\n    color: #fff;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n}\n.swiper-03[data-v-78a63189] {\n  height: 150px;\n}\n.swiper-03 .item[data-v-78a63189] {\n    font-size: 30px;\n    line-height: 150px;\n    text-align: center;\n}\n.swiper-03[data-v-78a63189] .yus-swiper-item:nth-child(1) {\n    background: #f8591a;\n}\n.swiper-03[data-v-78a63189] .yus-swiper-item:nth-child(2) {\n    background: #03a9f4;\n}\n.swiper-03[data-v-78a63189] .yus-swiper-item:nth-child(3) {\n    background: #00bcd4;\n}\n.swiper-03 .indicator[data-v-78a63189] {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    padding: 3px 8px;\n    font-size: 12px;\n    color: #fff;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n}\n",""])}}]);