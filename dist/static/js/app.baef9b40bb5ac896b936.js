webpackJsonp([1],{"4+hh":function(t,a){},"5uUX":function(t,a){},"7QFO":function(t,a){},KkCx:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Dd8w"),i=s.n(e),n=s("7+uW"),o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"viewport"},[a("transition",{attrs:{name:this.slideName}},[a("router-view")],1)],1)])},staticRenderFns:[]},r=s("VU/8")({data:function(){return{slideName:"slide-left"}},watch:{$route:function(t,a){var s=t.path.split("/"),e=a.path.split("/");s.length>e.length?this.slideName="slide-left":s.length===e.length?this.slideName="":this.slideName="slide-right"}}},o,!1,function(t){s("QEXB")},null,null).exports,c=s("/ocq"),l={props:["rating"],computed:{ratingObj:function(){var t=Math.floor(this.rating),a=Math.floor(t/2),s=t%2;return{star:a,half:s,left:5-a-s}}}},v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"star"},[t._l(t.ratingObj.star,function(a){return s("i",{staticClass:"material-icons md-size orange"},[t._v("star")])}),t._v(" "),t._l(t.ratingObj.half,function(a){return s("i",{staticClass:"material-icons md-size orange"},[t._v("star_half")])}),t._v(" "),t._l(t.ratingObj.left,function(a){return s("i",{staticClass:"material-icons md-size orange"},[t._v("star_border")])}),t._v(" "),s("span",[t._v(t._s(t.rating))])],2)},staticRenderFns:[]},m=s("VU/8")(l,v,!1,function(t){s("mHJc")},null,null).exports,d={components:{Star:m},data:function(){return{}},props:["tabName"],computed:{subjects:function(){return this.$store.state.movies["movie_"+this.tabName].subjects}}},u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-container"},[s("div",{staticClass:"md-layout md-alignment-left"},t._l(t.subjects,function(a){return s("div",{key:a.id,staticClass:"md-layout-item md-size-33"},[s("md-card",{staticClass:"card"},[s("md-ripple",[s("router-link",{staticClass:"card-link",attrs:{to:{path:"movie/detail/"+a.id}}},[s("md-card-media",[s("div",{staticClass:"card-img",style:{backgroundImage:"url("+a.imgUrl+")"}})]),t._v(" "),s("div",{staticClass:"card-info"},[s("div",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"card-rating"},[0!==a.rating?s("Star",{attrs:{rating:a.rating}}):t._e(),t._v(" "),0===a.rating?s("span",[t._v("暂无评分")]):t._e()],1)])],1)],1)],1)],1)}))])},staticRenderFns:[]},_=s("VU/8")(d,u,!1,function(t){s("OCSc")},null,null).exports,h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"md-layout md-alignment-center-center",staticStyle:{background:"transparent"}},[a("md-progress-spinner",{staticStyle:{margin:"20px 0"},attrs:{"md-mode":"indeterminate","md-diameter":26,"md-stroke":2.5}})],1)},staticRenderFns:[]},f=s("VU/8")(null,h,!1,function(t){s("KkCx")},null,null).exports,p={components:{Card:_,Loading:f},data:function(){return{showNav:!1}},computed:{showLoading:function(){return this.$store.state.showLoading},movieTabName:function(){return this.$store.state.movieTabName}},methods:{changeTab:function(t){0===this.$store.state.movies["movie_"+t].count&&this.$store.dispatch("fetchMovies",{tabName:t}),this.$store.commit("CHANGE_MOVIE_TAB",{tabName:t})}},mounted:function(){0===this.$store.state.movies.movie_in_theaters.count&&(this.$store.dispatch("fetchMovies",{tabName:"in_theaters"}),console.log("fetched"))}},g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index-container"},[s("md-toolbar",{staticClass:"header md-primary",attrs:{"md-elevation":"2"}},[s("md-button",{staticClass:"md-icon-button",on:{click:function(a){t.showNav=!t.showNav}}},[s("md-icon",[t._v("menu")])],1),t._v(" "),s("span",{staticClass:"md-title"},[t._v("MOVIE")]),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[s("router-link",{attrs:{to:"/movie/search"}},[s("md-button",{staticClass:"md-icon-button"},[s("md-icon",[t._v("search")])],1)],1)],1)],1),t._v(" "),s("md-tabs",{staticClass:"index-tab",attrs:{"md-alignment":"fixed","md-active-tab":"tab_"+t.movieTabName}},[s("md-tab",{attrs:{id:"tab_in_theaters","md-label":"正在热映"},on:{click:function(a){t.changeTab("in_theaters")}}}),t._v(" "),s("md-tab",{attrs:{id:"tab_coming_soon","md-label":"即将上映"},on:{click:function(a){t.changeTab("coming_soon")}}})],1),t._v(" "),s("div",{staticClass:"index-loading"},[s("transition",{attrs:{name:"loading-fade"}},[t.showLoading?s("Loading"):t._e()],1)],1),t._v(" "),"in_theaters"===t.movieTabName?s("Card",{attrs:{"tab-name":"in_theaters"}}):t._e(),t._v(" "),"coming_soon"===t.movieTabName?s("Card",{attrs:{"tab-name":"coming_soon"}}):t._e(),t._v(" "),s("md-drawer",{staticClass:"drawer",attrs:{"md-active":t.showNav},on:{"update:mdActive":function(a){t.showNav=a}}},[s("div",{staticClass:"drawer-title"},[t._v("MyDou V1.0")]),t._v(" "),s("md-list",[s("md-list-item",{attrs:{to:"/movie"},on:{click:function(a){t.showNav=!t.showNav}}},[s("md-icon",{staticClass:"md-primary"},[t._v("movie")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("电影")])],1),t._v(" "),s("md-list-item",{attrs:{to:"/book"}},[s("md-icon",[t._v("book")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("图书")]),t._v(" "),s("span",{staticClass:"cs"},[t._v("( coming soon )")])],1),t._v(" "),s("md-list-item",{attrs:{to:"/favor"}},[s("md-icon",[t._v("favorite")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("收藏")]),t._v(" "),s("span",{staticClass:"cs"},[t._v("( coming soon )")])],1),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),s("md-list-item",{attrs:{to:"/about/info"}},[s("md-icon",[t._v("info")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("关于")])],1)],1)],1)],1)},staticRenderFns:[]},C=s("VU/8")(p,g,!1,function(t){s("cjhw")},null,null).exports,b=s("mtWM"),y=s.n(b),k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn"},[a("i",{staticClass:"material-icons md-size"},[this._v("arrow_back")])])}]},w={components:{Star:m,BtnBack:s("VU/8")(null,k,!1,function(t){s("gvpG")},"data-v-574b56bc",null).exports},data:function(){return{movie:{title:"",rating:{average:0},images:{small:""},original_title:"",year:"",genres:[""],countries:[""],aka:[""],summary:"",directors:[{name:"",avatars:{small:""}}],casts:[{name:"",avatars:{small:""}}]}}},computed:{},methods:{fetchMovieDetail:function(){var t="https://api.douban.com/v2/movie/subject/"+this.$route.params.id,a=this;y.a.get(t).then(function(t){console.log(t.data),a.movie=t.data})},back:function(){this.$router.go(-1)}},created:function(){this.fetchMovieDetail()}},E={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"m-detail-container"},[s("div",{staticClass:"head"},[s("div",{staticClass:"post md-elevation-24",style:{backgroundImage:"url("+t.movie.images.small+")"}}),t._v(" "),s("div",{staticClass:"btn-back",on:{click:function(a){t.back()}}},[s("BtnBack")],1)]),t._v(" "),s("div",{staticClass:"main-title"},[s("div",{staticClass:"title"},[t._v(t._s(t.movie.title))]),t._v(" "),s("div",{staticClass:"rating"},[0!==t.movie.rating.average?s("Star",{attrs:{rating:t.movie.rating.average}}):t._e(),t._v(" "),0===t.movie.rating.average?s("span",[t._v("暂无评分")]):t._e()],1)]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("原名：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.movie.original_title))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("类型：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.genres)))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("年代：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.movie.year))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("地区：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.countries)))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("又名：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.aka)))])])]),t._v(" "),s("div",[s("md-ripple",[s("div",{staticClass:"summary"},[s("span",{staticClass:"start"},[t._v("剧情简介：")]),t._v(" "),s("p",[t._v(t._s(t.movie.summary))])])])],1),t._v(" "),s("div",{staticClass:"staff"},[s("div",{staticClass:"directors"},[s("p",{staticClass:"key"},[t._v("导演：")]),t._v(" "),s("div",{staticClass:"person-viewbox"},[s("div",{staticClass:"person-wrap"},t._l(t.movie.directors,function(a){return s("div",{staticClass:"person"},[s("a",{attrs:{href:a.avatars.small,target:"_blank"}},[s("div",{staticClass:"img md-elevation-1",style:{backgroundImage:"url("+a.avatars.small+")"}}),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])])}))])]),t._v(" "),s("div",{staticClass:"clear"}),t._v(" "),s("div",{staticClass:"casts"},[s("p",{staticClass:"key"},[t._v("主演：")]),t._v(" "),s("div",{staticClass:"person-viewbox"},[s("div",{staticClass:"person-wrap",style:{width:100*t.movie.casts.length+30+"px"}},t._l(t.movie.casts,function(a){return s("div",{staticClass:"person"},[s("a",{attrs:{href:a.avatars.small,target:"_blank"}},[s("div",{staticClass:"img  md-elevation-1",style:{backgroundImage:"url("+a.avatars.small+")"}})]),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])}))])])])])},staticRenderFns:[]},N=s("VU/8")(w,E,!1,function(t){s("5uUX")},null,null).exports,$={components:{Star:m,Loading:f},data:function(){return{placeholder:"请输入搜索信息"}},computed:{moviesQuery:function(){return this.$store.state.moviesQuery.subjects},showBtn:function(){return this.$store.state.moviesQuery.showBtn},showLoading:function(){return this.$store.state.showLoading},queryInput:{get:function(){return this.$store.state.moviesQuery.q},set:function(t){this.$store.state.moviesQuery.q=t}}},methods:{back:function(){this.$router.go(-1)},fetchQuery:function(){this.$store.dispatch("fetchMoviesQuery")},newFetch:function(){this.$store.commit("CLEAR_FETCH_MOVIES_QUERY"),this.$store.dispatch("fetchMoviesQuery")}}},Q={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search-container"},[s("div",{staticClass:"search-bar"},[s("md-toolbar",[s("div",{staticClass:"md-toolbar-row"},[s("md-button",{staticClass:"md-primary md-icon-button",on:{click:function(a){t.back()}}},[s("md-icon",[t._v("arrow_back")])],1),t._v(" "),s("md-field",[s("md-input",{ref:"movieSearch",attrs:{placeholder:t.placeholder},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.newFetch()},focus:function(a){t.placeholder=""},blur:function(a){t.placeholder="请输入要搜索的电影信息"}},model:{value:t.queryInput,callback:function(a){t.queryInput=a},expression:"queryInput"}})],1),t._v(" "),s("md-button",{staticClass:"md-icon-button md-primary",on:{click:function(a){t.queryInput=""}}},[s("md-icon",[t._v("clear")])],1)],1)])],1),t._v(" "),s("div",{staticClass:"result-box"},[s("div",{staticClass:"result"},[s("transition-group",{attrs:{tag:"div",name:"cardSlide"}},t._l(t.moviesQuery,function(a){return s("div",{key:a.id,staticClass:"card-box md-elevation-2"},[s("md-ripple",[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{path:"/movie/detail/"+a.id}}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+a.images.small+")"}}),t._v(" "),s("div",{staticClass:"info"},[s("div",[s("div",{staticClass:"title"},[t._v(t._s(a.title)),s("span",[t._v(" "+t._s(a.year))])]),t._v(" "),s("div",{staticClass:"rating"},[0!==a.rating.average?s("Star",{attrs:{rating:a.rating.average}}):t._e(),t._v(" "),0===a.rating.average?s("span",[t._v("暂无评分")]):t._e()],1),t._v(" "),s("p",{staticClass:"type"},[t._v("类型："+t._s(t._f("arrToString")(a.genres)))]),t._v(" "),s("p",{staticClass:"director"},[t._v("导演："+t._s(t._f("arrToString")(a.directors.map(function(t){return t.name}))))]),t._v(" "),s("p",{staticClass:"casts"},[t._v("主演："+t._s(t._f("arrToString")(a.casts.map(function(t){return t.name}))))])])])])],1)],1)})),t._v(" "),s("transition",{attrs:{name:"loading"}},[t.showLoading?s("Loading"):t._e()],1),t._v(" "),s("div",{staticClass:"md-layout md-alignment-center-center"},[t.showBtn&&t.moviesQuery.length&&t.queryInput&&!t.showLoading?s("md-button",{staticClass:"md-primary",on:{click:function(a){t.fetchQuery()}}},[t._v("加载更多")]):t._e(),t._v(" "),t.showBtn?t._e():s("md-button",{attrs:{disabled:""}},[t._v("- 没有更多内容啦 -")])],1)],1)])])},staticRenderFns:[]},j=s("VU/8")($,Q,!1,function(t){s("j+4F")},null,null).exports,T={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about-container"},[s("md-toolbar",{staticClass:"md-primary"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(a){t.back()}}},[s("md-icon",[t._v("arrow_back")])],1),t._v(" "),s("span",{staticClass:"md-title"},[t._v("ABOUT")])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"info-box"},[s("div",{staticClass:"info"},[s("div",{staticClass:"item key"},[t._v("View Source Code")]),t._v(" "),s("div",{staticClass:"md-elevation-1"},[s("md-ripple",[s("router-link",{staticClass:"item value",attrs:{tag:"div",to:"#"}},[s("md-icon",[t._v("link")]),t._v(" "),s("span",[t._v("GitHub")])],1)],1)],1),t._v(" "),s("div",{staticClass:"item key"},[t._v("Contact Me")]),t._v(" "),s("div",{staticClass:"md-elevation-1"},[s("md-ripple",[s("div",{staticClass:"item value last"},[s("md-icon",[t._v("email")]),t._v(" "),s("span",[t._v("richard216@163.com")])],1)])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"head"},[a("p",{staticClass:"title"},[this._v("MyDou V1.0")]),this._v(" "),a("p",{staticClass:"sub"},[this._v("移动端豆瓣WEB应用")])])}]},x=s("VU/8")({methods:{back:function(){this.$router.go(-1)}}},T,!1,function(t){s("7QFO")},null,null).exports;n.default.use(c.a);var S=new c.a({routes:[{path:"/",redirect:"/movie"},{path:"/movie",name:"movie",component:C},{path:"/movie/detail/:id",name:"movieDetail",component:N},{path:"/movie/search",name:"movieSearch",component:j},{path:"/about/info",name:"about",component:x},{path:"*",redirect:"/"}]}),M=s("Lgyv"),F=s.n(M),I=(s("4+hh"),s("yH0d"),s("Gu7T")),V=s.n(I),O=s("NYxO");n.default.use(O.a);var U={FETCH_MOVIES:function(t,a){t.movies["movie_"+a.tabName].count=a.subjects.length,t.movies["movie_"+a.tabName].subjects=a.subjects},CHANGE_MOVIE_TAB:function(t,a){t.movieTabName=a.tabName},FETCH_MOVIES_QUERY:function(t,a){var s;(s=t.moviesQuery.subjects).push.apply(s,V()(a.subjects)),a.subjects.length<10&&(t.moviesQuery.showBtn=!1),t.moviesQuery.count+=10},CLEAR_FETCH_MOVIES_QUERY:function(t){t.moviesQuery.count=0,t.moviesQuery.subjects=[],t.moviesQuery.showBtn=!0},CHANGE_QUERY_INPUT:function(t,a){t.moviesQuery.q=a.q}},L={fetchMovies:function(t,a){if(0===t.state.movies.movie_coming_soon.count){t.state.showLoading=!0;var s="https://api.douban.com/v2/movie/"+a.tabName+"?count=12";y.a.get(s).then(function(s){var e=[];s.data.subjects.map(function(t){var a={};a.id=t.id,a.title=t.title,a.rating=t.rating.average,a.imgUrl=t.images.large,e.push(a)}),t.state.showLoading=!1,t.commit("FETCH_MOVIES",{subjects:e,tabName:a.tabName})})}},fetchMoviesQuery:function(t,a){var s=t.state.moviesQuery,e="https://api.douban.com/v2/movie/search?q="+s.q+"&count=10&start="+s.count;t.state.showLoading=!0,y.a.get(e).then(function(a){t.state.showLoading=!1,t.commit("FETCH_MOVIES_QUERY",{subjects:a.data.subjects})}).catch(function(t){console.log(t)})}},B=new O.a.Store({state:{movies:{movie_in_theaters:{count:0,subjects:[]},movie_coming_soon:{count:0,subjects:[]}},moviesQuery:{count:0,subjects:[],q:"",showBtn:!0},showLoading:!1,movieTabName:"in_theaters"},actions:L,mutations:U});n.default.use(F.a),n.default.config.productionTip=!1,n.default.filter("arrToString",function(t){return t.join(" / ")}),new n.default(i()({el:"#app",router:S,store:B},r))},OCSc:function(t,a){},QEXB:function(t,a){},cjhw:function(t,a){},gvpG:function(t,a){},"j+4F":function(t,a){},mHJc:function(t,a){},yH0d:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.baef9b40bb5ac896b936.js.map