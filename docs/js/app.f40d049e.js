(function(e){function n(n){for(var o,i,c=n[0],s=n[1],u=n[2],p=0,d=[];p<c.length;p++)i=c[p],r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(o=!1)}o&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},a=[];function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/micro-component-templete/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"07bb":function(e,n,t){},1473:function(e,n,t){"use strict";var o=t("93d0"),r=t.n(o);r.a},"1f84":function(e,n,t){},3786:function(e,n){e.exports=Prism},5880:function(e,n){e.exports=Vuex},"5ad0":function(e,n){e.exports='<h1 id="micro-component-templete-微组件模板">Micro Component Templete 微组件模板</h1>\n<blockquote>\n<p>使用此模板为微门户 (Micro Portal) 开发组件</p>\n</blockquote>\n<h2 id="基本思路">基本思路</h2>\n<p>因Vue Router 支持异步组件, 将组件编译为UMD模块, 上传至CDN, 通过配置组件的链接与内存地址, 实现组件的动态变换.</p>\n<h2 id="项目设置">项目设置</h2>\n<pre><code class="language-shell">$ git clone https://github.com/myWsq/micro-component-templete.git\n$ cd micro-component-templete\n$ yarn # or npm install</code></pre>\n<p>开发前, 首先要明确当前项目的<code>namespace</code>, \b一般情况下就是<code>package.json</code>的<code>name</code>字段. 根据当前的项目进行修改.</p>\n<pre><code class="language-json">// package.json\n{\n    &quot;name&quot;:&quot;foo&quot;\n    ...\n}</code></pre>\n<p>一个项目可以编译出多个相互独立的微组件, \b\b在<code>src/components</code>文件夹下新建组件并在<code>index.ts</code>中导出.</p>\n<h3 id="play">Play</h3>\n<pre><code class="language-shell">$ yarn serve</code></pre>\n<p>项目会识别<code>src/components/index.ts</code>中导出的组件并自动生成路由与导航.</p>\n<h3 id="build">Build</h3>\n<pre><code class="language-shell">$ yarn build</code></pre>\n<p>微门户会根据配置引入组件的脚本与样式文件. \b<code>{namespace}.{componentMame}</code> 即为组件的内存地址(path)</p>\n<p>注意: 为了及时更新组件缓存与控制组件版本, 编译出的UMD模块文件名应含有版本号.</p>\n<pre><code class="language-shell">$ yarn build --filename foo@0.0.1</code></pre>\n<p>此方法为组件回滚机制提供了有效途径.\b</p>\n<h3 id="deploy">Deploy</h3>\n<p>组件的发布很简单, 将编译出的UMD模块上传至CDN, 更新微门户的配置即可. 发布时, 需要填写组件的脚本文件链接, 样式文件链接(可选), 组件内存地址.</p>\n<h2 id="tip">Tip</h2>\n<p>\b微组件是独立开发, 独立编译, 独立部署的, 但是由于组件将嵌套在微门户内, 需要约定一些特性.</p>\n<h3 id="router">Router</h3>\n<p>Playground中同样注入了<code>vue-router</code>, 需要注意的是, 开发阶段的路由实例与微门户环境不同, 使用<code>vm.$router</code>或<code>vm.$route</code>时需特别注意, 以微门户为主.</p>\n<h3 id="依赖">依赖</h3>\n<p>通用第三方依赖版本应与微门户使用的依赖版本相同, 使用新特性时, 需要查阅微门户依赖版本. </p>\n'},"5f72":function(e,n){e.exports=ELEMENT},6389:function(e,n){e.exports=VueRouter},"6b57":function(e,n,t){},"8bbf":function(e,n){e.exports=Vue},"93d0":function(e,n,t){},b0a0:function(e,n,t){"use strict";var o=t("07bb"),r=t.n(o);r.a},b40e:function(e,n,t){"use strict";var o=t("6b57"),r=t.n(o);r.a},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("8bbf"),r=t.n(o),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main",class:{pt:e.navVisible}},[t("div",{staticClass:"components-nav",class:{show:e.navVisible}},[e._l(e.routes,function(n){return t("router-link",{key:n.name,staticClass:"nav",attrs:{to:n.path}},[e._v("\n      "+e._s(n.name)+"\n    ")])}),t("div",{staticClass:"trigger",class:{show:e.navVisible},on:{click:e.onTrigger}},[t("i",{staticClass:"el-icon-caret-bottom"})])],2),t("div",{staticClass:"component-container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isOnHome,expression:"isOnHome"}],staticClass:"readme",domProps:{innerHTML:e._s(e.readme)}}),t("router-view")],1),t("transition",{attrs:{name:"jelly"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isOnHome,expression:"!isOnHome"}],staticClass:"fixed-btn",on:{click:function(n){return e.$router.push("/")}}})])],1)},i=[],c=t("6389"),s=t.n(c),u=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v("Hello! Micro Component")])])}],p={name:"HelloWorld",props:{msg:String}},d=p,f=(t("b40e"),t("2877")),m=Object(f["a"])(d,u,l,!1,null,"6191e550",null),h=m.exports,v={HelloWorld:h},b=t("dd61"),g=t.n(b),y=t("6806"),w=t.n(y);r.a.use(s.a);var x=new s.a,_=g()(v,function(e,n){return{path:"/".concat(w()(n)),name:n,component:e}});x.addRoutes(_);var O=x,j=t("3786"),$=t.n(j),C=(t("f393"),t("8009"),t("1f84"),"componentNavHidden"),M=r.a.extend({data:function(){return{navVisible:!0}},computed:{routes:function(){return _},isOnHome:function(){return"/"===this.$route.path},readme:function(){return t("5ad0")}},created:function(){var e=localStorage.getItem(C);e&&(this.navVisible=!1)},mounted:function(){$.a.highlightAll()},methods:{onTrigger:function(){this.navVisible=!this.navVisible,this.navVisible?localStorage.removeItem(C):localStorage.setItem(C,"true")}}}),V=M,k=(t("1473"),t("b0a0"),Object(f["a"])(V,a,i,!1,null,"24aa92f4",null)),P=k.exports,H=t("5880"),S=t.n(H);r.a.use(S.a);var T=new S.a.Store({state:{},mutations:{},actions:{}}),q=t("5f72"),D=t.n(q);r.a.use(D.a),r.a.config.productionTip=!1,new r.a({router:O,store:T,render:function(e){return e(P)}}).$mount("#app")}});
//# sourceMappingURL=app.f40d049e.js.map