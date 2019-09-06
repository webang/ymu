(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{209:function(s,r,t){"use strict";t.r(r);var a=function(){var s=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var e=t(13),n=Object(e.a)({},a,[function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("section",[t("h1",[s._v("快速上手")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 安装 Vue Cli")]),s._v("\nnpm install -g @vue/cli\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 创建一个项目")]),s._v("\nvue create hello-world\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 安装 yus")]),s._v("\nnpm i yus -S\n")])]),t("h2",[s._v("引入组件")]),t("p",[s._v("yus 支持多种引入方式。")]),t("h3",[s._v("按需导入")]),t("p",[s._v("安装插件:")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm i babel-plugin-import -D\n")])]),t("p",[s._v("babel 配置:")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(": [\n    ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'import'")]),s._v(", {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("libraryName")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yus'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("libraryDirectory")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'es'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }, "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yus'")]),s._v("]\n  ]\n};\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 接着你可以在代码中直接引入 yus 组件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yus'")]),s._v(";\n")])]),t("h3",[s._v("手动按需导入")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Button "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yus/lib/button'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yus/lib/button/style'")]),s._v(";\n")])]),t("h3",[s._v("导入所有组件")]),t("p",[s._v("yus 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" yus "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yus'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yus/lib/index.css'")]),s._v(";\n\nVue.use(yus);\n")])])])}],!1,null,null,null);n.options.__file="docs/docs/markdown/quickstart.md";r.default=n.exports}}]);