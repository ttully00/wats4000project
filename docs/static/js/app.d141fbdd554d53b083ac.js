webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),s=n("mtWM"),a=n.n(s),i={name:"Itunes",data:function(){return{results:null,errors:[],entity:"",atribute:"",artist:"",msg:"Itunes Search"}},methods:{findmusic:function(){var t=this;a.a.get("https://itunes.apple.com/search",{params:{term:this.artist,limit:"25"}}).then(function(e){t.results=e.data.results}).catch(function(e){t.errors.push(e)})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"itunes"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h1"),t._v(" "),n("h2"),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.findmusic(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],attrs:{type:"text",id:"myInput",placeholder:"Search Favorite Artist..",title:"Type in a name"},domProps:{value:t.artist},on:{input:function(e){e.target.composing||(t.artist=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),n("ul",{attrs:{id:"results"}},t._l(t.results,function(e){return n("li",[n("span",[n("a",{attrs:{href:e.trackViewUrl}},[t._v(t._s(e.trackCensoredName))])]),t._v(" "),n("span",[n("a",{attrs:{href:e.artistViewUrl}},[t._v(t._s(e.artistName))])])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("input",{attrs:{type:"submit",value:"Submit"}})])}]};var o=n("VU/8")(i,u,!1,function(t){n("bk1F")},"data-v-067e5afd",null).exports,c={name:"App",components:{Itunes:o}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:n("djYQ")}}),this._v(" "),e("Itunes"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")(c,p,!1,function(t){n("PcTH")},null,null).exports,m=n("/ocq");r.a.use(m.a);var f=new m.a({routes:[{path:"/itunes",name:"Itunes",component:o}]}),v=n("e6fC");n("Jmt5"),n("9M+g");r.a.use(v.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:f,components:{App:l},template:"<App/>"})},PcTH:function(t,e){},bk1F:function(t,e){},djYQ:function(t,e,n){t.exports=n.p+"static/img/ituneslogo.f47c556.jpg"},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d141fbdd554d53b083ac.js.map