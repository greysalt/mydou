webpackJsonp([1],{"4+hh":function(t,s){},KkCx:function(t,s){},LX6Y:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Dd8w"),i=a.n(e),n=a("7+uW"),o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"viewport"},[s("transition",{attrs:{name:this.slideName}},[s("router-view")],1)],1)])},staticRenderFns:[]},r=a("VU/8")({data:function(){return{slideName:"slide-left"}},watch:{$route:function(t,s){var a=t.path.split("/"),e=s.path.split("/");a.length>e.length?this.slideName="slide-left":a.length===e.length?this.slideName="":this.slideName="slide-right"}}},o,!1,function(t){a("mTSp")},null,null).exports,c=a("/ocq"),l={props:["rating"],computed:{ratingObj:function(){var t=Math.floor(this.rating),s=Math.floor(t/2),a=t%2;return{star:s,half:a,left:5-s-a}}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"star"},[t._l(t.ratingObj.star,function(s){return a("i",{staticClass:"material-icons md-size orange"},[t._v("star")])}),t._v(" "),t._l(t.ratingObj.half,function(s){return a("i",{staticClass:"material-icons md-size orange"},[t._v("star_half")])}),t._v(" "),t._l(t.ratingObj.left,function(s){return a("i",{staticClass:"material-icons md-size orange"},[t._v("star_border")])}),t._v(" "),a("span",[t._v(t._s(t.rating))])],2)},staticRenderFns:[]},d=a("VU/8")(l,v,!1,function(t){a("mHJc")},null,null).exports,m={components:{Star:d},data:function(){return{}},props:["tabName"],computed:{subjects:function(){return this.$store.state.movies["movie_"+this.tabName].subjects}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"md-layout md-alignment-left"},t._l(t.subjects,function(s){return a("div",{key:s.id,staticClass:"md-layout-item md-size-33"},[a("md-card",{staticClass:"card"},[a("md-ripple",[a("router-link",{staticClass:"card-link",attrs:{to:{path:"movie/detail/"+s.id}}},[a("md-card-media",[a("div",{staticClass:"card-img",style:{backgroundImage:"url("+s.imgUrl+")"}})]),t._v(" "),a("div",{staticClass:"card-info"},[a("div",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"card-rating"},[0!==s.rating?a("Star",{attrs:{rating:s.rating}}):t._e(),t._v(" "),0===s.rating?a("span",[t._v("暂无评分")]):t._e()],1)])],1)],1)],1)],1)})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.subjects.length,expression:"subjects.length"}],staticClass:"nomore-info"},[t._v("- 已将到底啦 -")])])},staticRenderFns:[]},_=a("VU/8")(m,u,!1,function(t){a("cLKK")},null,null).exports,h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"md-layout md-alignment-center-center",staticStyle:{background:"transparent"}},[s("md-progress-spinner",{staticStyle:{margin:"20px 0"},attrs:{"md-mode":"indeterminate","md-diameter":26,"md-stroke":2.5}})],1)},staticRenderFns:[]},p=a("VU/8")(null,h,!1,function(t){a("KkCx")},null,null).exports,f={components:{Card:_,Loading:p},data:function(){return{showNav:!1}},computed:{showLoading:function(){return this.$store.state.showLoading},movieTabName:function(){return this.$store.state.movieTabName},showError:function(){return this.$store.state.showError}},methods:{changeTab:function(t){0===this.$store.state.movies["movie_"+t].count&&this.$store.dispatch("fetchMovies",{tabName:t}),this.$store.commit("CHANGE_MOVIE_TAB",{tabName:t})}},mounted:function(){0===this.$store.state.movies.movie_in_theaters.count&&(this.$store.dispatch("fetchMovies",{tabName:"in_theaters"}),console.log("fetched"))}},g={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-container"},[a("div",{staticClass:"head"},[a("md-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"2"}},[a("md-button",{staticClass:"md-icon-button",on:{click:function(s){t.showNav=!t.showNav}}},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("span",{staticClass:"md-title"},[t._v("MOVIE")]),t._v(" "),a("div",{staticClass:"md-toolbar-section-end"},[a("router-link",{attrs:{to:"/movie/search"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("search")])],1)],1)],1)],1),t._v(" "),a("md-tabs",{staticClass:"index-tab",attrs:{"md-alignment":"fixed","md-active-tab":"tab_"+t.movieTabName}},[a("md-tab",{attrs:{id:"tab_in_theaters","md-label":"正在热映"},on:{click:function(s){t.changeTab("in_theaters")}}}),t._v(" "),a("md-tab",{attrs:{id:"tab_coming_soon","md-label":"即将上映"},on:{click:function(s){t.changeTab("coming_soon")}}})],1)],1),t._v(" "),a("div",{staticClass:"index-loading"},[a("transition",{attrs:{name:"loading-fade"}},[t.showLoading?a("Loading"):t._e()],1),t._v(" "),t.showError?a("div",{staticStyle:{"text-align":"center",color:"#ccc"}},[t._v(t._s(t.showError))]):t._e()],1),t._v(" "),a("div",{staticClass:"cards"},["in_theaters"===t.movieTabName?a("Card",{attrs:{"tab-name":"in_theaters"}}):t._e(),t._v(" "),"coming_soon"===t.movieTabName?a("Card",{attrs:{"tab-name":"coming_soon"}}):t._e()],1),t._v(" "),a("md-drawer",{staticClass:"drawer",attrs:{"md-active":t.showNav},on:{"update:mdActive":function(s){t.showNav=s}}},[a("div",{staticClass:"drawer-title"},[t._v("MyDou V1.0")]),t._v(" "),a("md-list",[a("md-list-item",{attrs:{to:"/movie"},on:{click:function(s){t.showNav=!t.showNav}}},[a("md-icon",{staticClass:"md-primary"},[t._v("movie")]),t._v(" "),a("span",{staticClass:"md-list-item-text"},[t._v("电影")])],1),t._v(" "),a("md-list-item",{attrs:{to:"/book"}},[a("md-icon",[t._v("book")]),t._v(" "),a("span",{staticClass:"md-list-item-text"},[t._v("图书")]),t._v(" "),a("span",{staticClass:"cs"},[t._v("( coming soon )")])],1),t._v(" "),a("md-list-item",{attrs:{to:"/favor"}},[a("md-icon",[t._v("favorite")]),t._v(" "),a("span",{staticClass:"md-list-item-text"},[t._v("收藏")]),t._v(" "),a("span",{staticClass:"cs"},[t._v("( coming soon )")])],1),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("md-list-item",{attrs:{to:"/about/info"}},[a("md-icon",[t._v("info")]),t._v(" "),a("span",{staticClass:"md-list-item-text"},[t._v("关于")])],1)],1)],1)],1)},staticRenderFns:[]},C=a("VU/8")(f,g,!1,function(t){a("mqob")},null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"btn"},[s("i",{staticClass:"material-icons md-size"},[this._v("arrow_back")])])}]},y={components:{Star:d,BtnBack:a("VU/8")(null,b,!1,function(t){a("gvpG")},"data-v-574b56bc",null).exports},data:function(){return{movie:{title:"",rating:{average:0},images:{small:""},original_title:"",year:"",genres:[""],countries:[""],aka:[""],summary:"",directors:[{name:"",avatars:{small:""}}],casts:[{name:"",avatars:{small:""}}]}}},computed:{},methods:{fetchMovieDetail:function(){var t="https://api.douban.com/v2/movie/subject/"+this.$route.params.id,s=this;$.ajax({url:t,dataType:"jsonp",success:function(t){s.movie=t},error:function(t,s){console.log(s)}})},back:function(){this.$router.go(-1)}},created:function(){this.fetchMovieDetail()}},w={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-detail-container"},[a("div",{staticClass:"head"},[a("div",{staticClass:"post md-elevation-24",style:{backgroundImage:"url("+t.movie.images.small.replace(".jpg",".webp")+")"}}),t._v(" "),a("div",{staticClass:"btn-back",on:{click:function(s){t.back()}}},[a("BtnBack")],1)]),t._v(" "),a("div",{staticClass:"main-title"},[a("div",{staticClass:"title"},[t._v(t._s(t.movie.title))]),t._v(" "),a("div",{staticClass:"rating"},[0!==t.movie.rating.average?a("Star",{attrs:{rating:t.movie.rating.average}}):t._e(),t._v(" "),0===t.movie.rating.average?a("span",[t._v("暂无评分")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"info-group"},[a("span",{staticClass:"key"},[t._v("原名：")]),t._v(" "),a("div",{staticClass:"value"},[t._v(t._s(t.movie.original_title))])]),t._v(" "),a("div",{staticClass:"info-group"},[a("span",{staticClass:"key"},[t._v("类型：")]),t._v(" "),a("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.genres)))])]),t._v(" "),a("div",{staticClass:"info-group"},[a("span",{staticClass:"key"},[t._v("年代：")]),t._v(" "),a("div",{staticClass:"value"},[t._v(t._s(t.movie.year))])]),t._v(" "),a("div",{staticClass:"info-group"},[a("span",{staticClass:"key"},[t._v("地区：")]),t._v(" "),a("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.countries)))])]),t._v(" "),a("div",{staticClass:"info-group"},[a("span",{staticClass:"key"},[t._v("又名：")]),t._v(" "),a("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.aka)))])])]),t._v(" "),a("div",[a("md-ripple",[a("div",{staticClass:"summary"},[a("span",{staticClass:"start"},[t._v("剧情简介：")]),t._v(" "),a("p",[t._v(t._s(t.movie.summary))])])])],1),t._v(" "),a("div",{staticClass:"staff"},[a("div",{staticClass:"directors"},[a("p",{staticClass:"key"},[t._v("导演：")]),t._v(" "),a("div",{staticClass:"person-viewbox"},[a("div",{staticClass:"person-wrap"},t._l(t.movie.directors,function(s){return a("div",{staticClass:"person"},[a("a",{attrs:{href:s.avatars.small,target:"_blank"}},[a("div",{staticClass:"img md-elevation-1",style:{backgroundImage:"url("+s.avatars.small.replace(".jpg",".webp")+")"}}),t._v(" "),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])])}))])]),t._v(" "),a("div",{staticClass:"clear"}),t._v(" "),a("div",{staticClass:"casts"},[a("p",{staticClass:"key"},[t._v("主演：")]),t._v(" "),a("div",{staticClass:"person-viewbox"},[a("div",{staticClass:"person-wrap",style:{width:100*t.movie.casts.length+30+"px"}},t._l(t.movie.casts,function(s){return a("div",{staticClass:"person"},[a("a",{attrs:{href:s.avatars.small,target:"_blank"}},[a("div",{staticClass:"img  md-elevation-1",style:{backgroundImage:"url("+s.avatars.small.replace(".jpg",".webp")+")"}})]),t._v(" "),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])}))])])])])},staticRenderFns:[]},k=a("VU/8")(y,w,!1,function(t){a("SMx5")},null,null).exports,E={components:{Star:d,Loading:p},data:function(){return{placeholder:"请输入搜索信息"}},computed:{moviesQuery:function(){return this.$store.state.moviesQuery.subjects},showBtn:function(){return this.$store.state.moviesQuery.showBtn},showLoading:function(){return this.$store.state.showLoading},showError:function(){return this.$store.state.showError},queryInput:{get:function(){return this.$store.state.moviesQuery.q},set:function(t){this.$store.state.moviesQuery.q=t}}},methods:{back:function(){this.$router.go(-1)},fetchQuery:function(){this.$store.dispatch("fetchMoviesQuery")},newFetch:function(){this.$store.commit("CLEAR_FETCH_MOVIES_QUERY"),this.$store.dispatch("fetchMoviesQuery")}}},N={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"search-container"},[a("div",{staticClass:"search-bar"},[a("md-toolbar",[a("div",{staticClass:"md-toolbar-row"},[a("md-button",{staticClass:"md-primary md-icon-button",on:{click:function(s){t.back()}}},[a("md-icon",[t._v("arrow_back")])],1),t._v(" "),a("md-field",[a("md-input",{ref:"movieSearch",attrs:{placeholder:t.placeholder},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key))return null;t.newFetch()},focus:function(s){t.placeholder=""},blur:function(s){t.placeholder="请输入要搜索的电影信息"}},model:{value:t.queryInput,callback:function(s){t.queryInput=s},expression:"queryInput"}})],1),t._v(" "),a("md-button",{staticClass:"md-icon-button md-primary",on:{click:function(s){t.newFetch()}}},[a("md-icon",[t._v("search")])],1)],1)])],1),t._v(" "),a("div",{staticClass:"result-box"},[a("div",{staticClass:"result"},[a("transition-group",{attrs:{tag:"div",name:"cardSlide"}},t._l(t.moviesQuery,function(s){return a("div",{key:s.id,staticClass:"card-box md-elevation-2"},[a("md-ripple",[a("router-link",{staticClass:"card",attrs:{tag:"div",to:{path:"/movie/detail/"+s.id}}},[a("div",{staticClass:"img",style:{backgroundImage:"url("+s.images.small+")"}}),t._v(" "),a("div",{staticClass:"info"},[a("div",[a("div",{staticClass:"title"},[t._v(t._s(s.title)),a("span",[t._v(" "+t._s(s.year))])]),t._v(" "),a("div",{staticClass:"rating"},[0!==s.rating.average?a("Star",{attrs:{rating:s.rating.average}}):t._e(),t._v(" "),0===s.rating.average?a("span",[t._v("暂无评分")]):t._e()],1),t._v(" "),a("p",{staticClass:"type"},[t._v("类型："+t._s(t._f("arrToString")(s.genres)))]),t._v(" "),a("p",{staticClass:"director"},[t._v("导演："+t._s(t._f("arrToString")(s.directors.map(function(t){return t.name}))))]),t._v(" "),a("p",{staticClass:"casts"},[t._v("主演："+t._s(t._f("arrToString")(s.casts.map(function(t){return t.name}))))])])])])],1)],1)})),t._v(" "),t.showError?a("div",{staticStyle:{"text-align":"center",color:"#ccc"}},[t._v(t._s(t.showError))]):t._e(),t._v(" "),a("transition",{attrs:{name:"loading"}},[t.showLoading?a("Loading"):t._e()],1),t._v(" "),a("div",{staticClass:"md-layout md-alignment-center-center"},[t.showBtn&&t.moviesQuery.length&&t.queryInput&&!t.showLoading?a("md-button",{staticClass:"md-primary",on:{click:function(s){t.fetchQuery()}}},[t._v("加载更多")]):t._e(),t._v(" "),t.showBtn?t._e():a("md-button",{attrs:{disabled:""}},[t._v("- 没有更多内容啦 -")])],1)],1)])])},staticRenderFns:[]},j=a("VU/8")(E,N,!1,function(t){a("zFPh")},null,null).exports,x={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about-container"},[a("md-toolbar",{staticClass:"md-primary"},[a("md-button",{staticClass:"md-icon-button",on:{click:function(s){t.back()}}},[a("md-icon",[t._v("arrow_back")])],1),t._v(" "),a("span",{staticClass:"md-title"},[t._v("ABOUT")])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"info-box"},[a("div",{staticClass:"info"},[a("div",{staticClass:"item key"},[t._v("View Source Code")]),t._v(" "),a("div",{staticClass:"md-elevation-1"},[a("md-ripple",[a("router-link",{staticClass:"item value",attrs:{tag:"div",to:"#"}},[a("md-icon",[t._v("link")]),t._v(" "),a("span",[t._v("GitHub")])],1)],1)],1),t._v(" "),a("div",{staticClass:"item key"},[t._v("Contact Me")]),t._v(" "),a("div",{staticClass:"md-elevation-1"},[a("md-ripple",[a("div",{staticClass:"item value last"},[a("md-icon",[t._v("email")]),t._v(" "),a("span",[t._v("richard216@163.com")])],1)])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"head"},[s("p",{staticClass:"title"},[this._v("MyDou V1.0")]),this._v(" "),s("p",{staticClass:"sub"},[this._v("移动端豆瓣WEB应用")])])}]},T=a("VU/8")({methods:{back:function(){this.$router.go(-1)}}},x,!1,function(t){a("LX6Y")},null,null).exports;n.default.use(c.a);var S=new c.a({routes:[{path:"/",redirect:"/movie"},{path:"/movie",name:"movie",component:C},{path:"/movie/detail/:id",name:"movieDetail",component:k},{path:"/movie/search",name:"movieSearch",component:j},{path:"/about/info",name:"about",component:T},{path:"*",redirect:"/"}]}),Q=a("Lgyv"),L=a.n(Q),M=(a("4+hh"),a("yH0d"),a("Gu7T")),V=a.n(M),F=a("NYxO");n.default.use(F.a);var I={FETCH_MOVIES:function(t,s){t.movies["movie_"+s.tabName].count=s.subjects.length,t.movies["movie_"+s.tabName].subjects=s.subjects},CHANGE_MOVIE_TAB:function(t,s){t.movieTabName=s.tabName},FETCH_MOVIES_QUERY:function(t,s){var a;(a=t.moviesQuery.subjects).push.apply(a,V()(s.subjects)),s.subjects.length<10&&(t.moviesQuery.showBtn=!1),t.moviesQuery.count+=10},CLEAR_FETCH_MOVIES_QUERY:function(t){t.moviesQuery.count=0,t.moviesQuery.subjects=[],t.moviesQuery.showBtn=!0},CHANGE_QUERY_INPUT:function(t,s){t.moviesQuery.q=s.q}},O={fetchMovies:function(t,s){if(0===t.state.movies.movie_coming_soon.count){t.state.showLoading=!0,t.state.showError="";var a="https://api.douban.com/v2/movie/"+s.tabName+"?count=12";$.ajax({url:a,dataType:"jsonp",success:function(a){var e=[];a.subjects.map(function(t){var s={};s.id=t.id,s.title=t.title,s.rating=t.rating.average,s.imgUrl=t.images.large,e.push(s)}),t.state.showLoading=!1,t.commit("FETCH_MOVIES",{subjects:e,tabName:s.tabName})},error:function(s,a){t.state.showLoading=!1,t.state.showError="Opps~"+a}})}},fetchMoviesQuery:function(t,s){var a=t.state.moviesQuery,e="https://api.douban.com/v2/movie/search?q="+a.q+"&count=10&start="+a.count;t.state.showError="",t.state.showLoading=!0,$.ajax({url:e,dataType:"jsonp",success:function(s){t.state.showLoading=!1,t.commit("FETCH_MOVIES_QUERY",{subjects:s.subjects})},error:function(s,a){t.state.showLoading=!1,t.state.showError="Opps~"+a}})}},U=new F.a.Store({state:{movies:{movie_in_theaters:{count:0,subjects:[]},movie_coming_soon:{count:0,subjects:[]}},moviesQuery:{count:0,subjects:[],q:"",showBtn:!0},showLoading:!1,showError:"",movieTabName:"in_theaters"},actions:O,mutations:I});n.default.use(L.a),n.default.config.productionTip=!1,n.default.filter("arrToString",function(t){return t.join(" / ")}),new n.default(i()({el:"#app",router:S,store:U},r))},SMx5:function(t,s){},cLKK:function(t,s){},gvpG:function(t,s){},mHJc:function(t,s){},mTSp:function(t,s){},mqob:function(t,s){},yH0d:function(t,s){},zFPh:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b5560b1121d5436cf106.js.map