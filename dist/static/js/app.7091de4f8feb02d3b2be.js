webpackJsonp([1],{"/H5V":function(t,a){},"4+hh":function(t,a){},"59Ba":function(t,a){},"8jnJ":function(t,a){},DA5l:function(t,a){},"J+rL":function(t,a){},JLQb:function(t,a){},KkCx:function(t,a){},L7uL:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Dd8w"),i=s.n(e),n=s("7+uW"),o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"viewport"},[a("transition",{attrs:{name:this.slideName}},[a("router-view")],1)],1)])},staticRenderFns:[]},r=s("VU/8")({data:function(){return{slideName:"slide-left"}},watch:{$route:function(t,a){var s=t.path.split("/"),e=a.path.split("/");s.length>e.length?this.slideName="slide-left":s.length===e.length?this.slideName="":this.slideName="slide-right"}}},o,!1,function(t){s("mTSp")},null,null).exports,c=s("/ocq"),l={props:["rating"],computed:{ratingObj:function(){var t=Math.floor(this.rating),a=Math.floor(t/2),s=t%2;return{star:a,half:s,left:5-a-s}}}},u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"star"},[t._l(t.ratingObj.star,function(a){return s("i",{staticClass:"material-icons md-size orange"},[t._v("star")])}),t._v(" "),t._l(t.ratingObj.half,function(a){return s("i",{staticClass:"material-icons md-size orange"},[t._v("star_half")])}),t._v(" "),t._l(t.ratingObj.left,function(a){return s("i",{staticClass:"material-icons md-size orange"},[t._v("star_border")])}),t._v(" "),s("span",[t._v(t._s(t.rating))])],2)},staticRenderFns:[]},v=s("VU/8")(l,u,!1,function(t){s("T4u+")},null,null).exports,d={components:{Star:v},props:["tabName","navName"],computed:{subjects:function(){return this.$store.state[this.navName+"s"][this.tabName].subjects}}},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-container"},[s("div",{staticClass:"md-layout md-alignment-left"},t._l(t.subjects,function(a){return s("div",{key:a.id,staticClass:"md-layout-item md-size-33"},[s("md-card",{staticClass:"card"},[s("md-ripple",[s("router-link",{staticClass:"card-link",attrs:{to:{path:t.navName+"/detail/"+a.id}}},[s("md-card-media",[s("div",{staticClass:"card-img",style:{backgroundImage:"url("+a.imgUrl+")"}})]),t._v(" "),s("div",{staticClass:"card-info"},[s("div",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"card-rating"},[0!==a.rating?s("Star",{attrs:{rating:a.rating}}):t._e(),t._v(" "),0===a.rating?s("span",[t._v("暂无评分")]):t._e()],1)])],1)],1)],1)],1)})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.subjects.length,expression:"subjects.length"}],staticClass:"nomore-info"},[t._v("- 已将到底啦 -")])])},staticRenderFns:[]},_=s("VU/8")(d,m,!1,function(t){s("dmsC")},null,null).exports,h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"md-layout md-alignment-center-center",staticStyle:{background:"transparent"}},[a("md-progress-spinner",{staticStyle:{margin:"20px 0"},attrs:{"md-mode":"indeterminate","md-diameter":26,"md-stroke":2.5}})],1)},staticRenderFns:[]},b=s("VU/8")(null,h,!1,function(t){s("KkCx")},null,null).exports,f={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("md-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"2"}},[s("md-button",{staticClass:"md-icon-button",on:{click:function(a){t.showDrawer=!t.showDrawer}}},[s("md-icon",[t._v("menu")])],1),t._v(" "),s("span",{staticClass:"md-title nav-title"},[t._v(t._s(t.navName))]),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[s("router-link",{attrs:{to:"/search/"+t.navName}},[s("md-button",{staticClass:"md-icon-button",on:{click:function(a){t.cleanQuery()}}},[s("md-icon",[t._v("search")])],1)],1)],1)],1),t._v(" "),s("md-drawer",{staticClass:"drawer",attrs:{"md-active":t.showDrawer},on:{"update:mdActive":function(a){t.showDrawer=a}}},[s("div",{staticClass:"drawer-title"},[t._v("MyDou V1.0")]),t._v(" "),s("md-list",[s("md-list-item",{attrs:{to:"/movie"},on:{click:function(a){t.showDrawer=!t.showDrawer}}},[s("md-icon",{class:{"md-primary":t.iconActive.movie}},[t._v("movie")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("电影")])],1),t._v(" "),s("md-list-item",{attrs:{to:"/book"},on:{click:function(a){t.showDrawer=!t.showDrawer}}},[s("md-icon",{class:{"md-primary":t.iconActive.book}},[t._v("book")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("图书")])],1),t._v(" "),s("md-list-item",{attrs:{to:"/favor"}},[s("md-icon",{class:{"md-primary":t.iconActive.favor}},[t._v("favorite")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("收藏")]),t._v(" "),s("span",{staticClass:"cs"},[t._v("( coming soon )")])],1),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),s("md-list-item",{attrs:{to:"/about/info"},on:{click:function(a){t.showDrawer=!t.showDrawer}}},[s("md-icon",[t._v("info")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("关于")])],1)],1)],1)],1)},staticRenderFns:[]},p=s("VU/8")({props:["navName"],data:function(){return{iconActive:{movie:"",book:"",favor:""}}},computed:{showDrawer:{get:function(){return this.$store.state.showDrawer},set:function(t){this.$store.state.showDrawer=t}}},methods:{cleanQuery:function(){this.$store.commit("CLEAN_FETCH_QUERY"),this.$store.commit("CHANGE_QUERY_INPUT",{q:""})}},mounted:function(){this.iconActive[this.navName]=!0}},f,!1,function(t){s("59Ba")},null,null).exports,g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab-container"},[s("div",{staticClass:"tabs"},t._l(t.tabs,function(a,e){return s("div",{staticClass:"tab",class:{active:t.activeTabName===a.tabName},style:t.tabStyle,on:{click:function(s){t.changeTab(a.tabName,a.label)}}},[s("md-ripple",[s("div",{staticClass:"label"},[t._v(t._s(a.label))])])],1)})),t._v(" "),s("div",{staticClass:"indicator",style:t.indicatorStyle})])},staticRenderFns:[]},C=s("VU/8")({props:["tabs","navName"],data:function(){return{tabIndex:0}},computed:{tabStyle:function(){return{width:1/this.tabs.length*100+"%"}},indicatorStyle:function(){var t,a=this,s=this.tabs.length;return this.tabs.map(function(s,e){s.tabName===a.activeTabName&&(t=e)},this),{width:1/s*100+"%",left:1/s*100*t+"%"}},activeTabName:function(){return this.$store.state[this.navName+"TabName"]}},methods:{changeTab:function(t,a){0===this.$store.state[this.navName+"s"][t].count&&this.$store.dispatch("fetch_"+this.navName,{tabName:t,tag:a}),this.$store.commit("CHANGE_TAB_"+this.navName.toUpperCase(),{tabName:t})}}},g,!1,function(t){s("mXw/")},null,null).exports,k={components:{Card:_,Loading:b,Nav:p,Tabs:C},data:function(){return{tabs:[{tabName:"in_theaters",label:"正在热映"},{tabName:"coming_soon",label:"即将上映"}]}},computed:{showDrawer:function(){return this.$store.state.showDrawer},showLoading:function(){return this.$store.state.showLoading},movieTabName:function(){return this.$store.state.movieTabName},showError:function(){return this.$store.state.showError}},methods:{toggleDrawer:function(){this.$store.commit("TOGGLE_DRAWER")}},mounted:function(){0===this.$store.state.movies.in_theaters.count&&this.$store.dispatch("fetch_movie",{tabName:"in_theaters"})}},w={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"index-container",class:{hide:this.showDrawer}},[a("div",{staticClass:"head"},[a("Nav",{attrs:{navName:"movie",showDrawer:this.showDrawer}}),this._v(" "),a("Tabs",{attrs:{tabs:this.tabs,navName:"movie"}})],1),this._v(" "),a("div",{staticClass:"index-loading"},[a("transition",{attrs:{name:"loading-fade"}},[this.showLoading?a("Loading"):this._e()],1),this._v(" "),this.showError?a("div",{staticStyle:{"text-align":"center",color:"#ccc"}},[this._v(this._s(this.showError))]):this._e()],1),this._v(" "),a("div",{staticClass:"cards"},["in_theaters"===this.movieTabName?a("Card",{attrs:{tabName:"in_theaters",navName:"movie"}}):this._e(),this._v(" "),"coming_soon"===this.movieTabName?a("Card",{attrs:{tabName:"coming_soon",navName:"movie"}}):this._e()],1)])},staticRenderFns:[]},y=s("VU/8")(k,w,!1,function(t){s("J+rL")},null,null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn"},[a("i",{staticClass:"material-icons md-size"},[this._v("arrow_back")])])}]},T=s("VU/8")(null,N,!1,function(t){s("gvpG")},"data-v-574b56bc",null).exports,E={components:{Star:v,BtnBack:T},data:function(){return{movie:{title:"",rating:{average:0},images:{small:""},original_title:"",year:"",genres:[""],countries:[""],aka:[""],summary:"",directors:[{name:"",avatars:{small:""}}],casts:[{name:"",avatars:{small:""}}]}}},computed:{},methods:{fetchMovieDetail:function(){var t="https://api.douban.com/v2/movie/subject/"+this.$route.params.id,a=this;$.ajax({url:t,dataType:"jsonp",success:function(t){a.movie=t},error:function(t,a){console.log(a)}})},back:function(){this.$router.go(-1)}},created:function(){this.fetchMovieDetail()}},j={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"m-detail-container"},[s("div",{staticClass:"head"},[s("div",{staticClass:"post md-elevation-24",style:{backgroundImage:"url("+t.movie.images.small+")"}}),t._v(" "),s("div",{staticClass:"btn-back",on:{click:function(a){t.back()}}},[s("BtnBack")],1)]),t._v(" "),s("div",{staticClass:"main-title"},[s("div",{staticClass:"title"},[t._v(t._s(t.movie.title))]),t._v(" "),s("div",{staticClass:"rating"},[0!==t.movie.rating.average?s("Star",{attrs:{rating:t.movie.rating.average}}):t._e(),t._v(" "),0===t.movie.rating.average?s("span",[t._v("暂无评分")]):t._e()],1)]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("原名：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.movie.original_title))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("类型：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.genres)))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("年代：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.movie.year))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("地区：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.countries)))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("又名：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.movie.aka)))])])]),t._v(" "),s("div",[s("md-ripple",[s("div",{staticClass:"summary"},[s("span",{staticClass:"start"},[t._v("剧情简介：")]),t._v(" "),s("p",[t._v(t._s(t.movie.summary))])])])],1),t._v(" "),s("div",{staticClass:"staff"},[s("div",{staticClass:"directors"},[s("p",{staticClass:"key"},[t._v("导演：")]),t._v(" "),s("div",{staticClass:"person-viewbox"},[s("div",{staticClass:"person-wrap"},t._l(t.movie.directors,function(a){return s("div",{staticClass:"person"},[s("div",{staticClass:"img md-elevation-1",style:{backgroundImage:"url("+a.avatars.small+"),url(/mydou/dist/static/img/cast_default.png)"}}),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])}))])]),t._v(" "),s("div",{staticClass:"clear"}),t._v(" "),s("div",{staticClass:"casts"},[s("p",{staticClass:"key"},[t._v("主演：")]),t._v(" "),s("div",{staticClass:"person-viewbox"},[s("div",{staticClass:"person-wrap",style:{width:100*t.movie.casts.length+30+"px"}},t._l(t.movie.casts,function(a){return s("div",{staticClass:"person"},[s("div",{staticClass:"img  md-elevation-1",style:{backgroundImage:"url("+a.avatars.small+"),url(/mydou/dist/static/img/cast_default.png)"}}),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])}))])])])])},staticRenderFns:[]},x=s("VU/8")(E,j,!1,function(t){s("DA5l")},null,null).exports,D={components:{Nav:p,Card:_,Loading:b,Tabs:C},data:function(){return{tabs:[{tabName:"hot",label:"热门"},{tabName:"scifi",label:"科幻"},{tabName:"detective",label:"推理"},{tabName:"kongfu",label:"武侠"},{tabName:"romantic",label:"言情"}]}},computed:{showDrawer:function(){return this.$store.state.showDrawer},bookTabName:function(){return this.$store.state.bookTabName},showLoading:function(){return this.$store.state.showLoading},showError:function(){return this.$store.state.showError}},methods:{fetchBook:function(t,a){this.$store.dispatch("fetch_book",{tag:a,tabName:t})}},mounted:function(){0===this.$store.state.books.hot.count&&this.fetchBook("hot","2017")}},L={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"index-container",class:{hide:this.showDrawer}},[a("div",{staticClass:"head"},[a("Nav",{attrs:{navName:"book",showDrawer:this.showDrawer}}),this._v(" "),a("Tabs",{attrs:{tabs:this.tabs,navName:"book"}})],1),this._v(" "),a("div",{staticClass:"index-loading"},[a("transition",{attrs:{name:"loading-fade"}},[this.showLoading?a("Loading"):this._e()],1),this._v(" "),this.showError?a("div",{staticStyle:{"text-align":"center",color:"#ccc"}},[this._v(this._s(this.showError))]):this._e()],1),this._v(" "),"hot"===this.bookTabName?a("Card",{attrs:{tabName:"hot",navName:"book"}}):this._e(),this._v(" "),"scifi"===this.bookTabName?a("Card",{attrs:{tabName:"scifi",navName:"book"}}):this._e(),this._v(" "),"detective"===this.bookTabName?a("Card",{attrs:{tabName:"detective",navName:"book"}}):this._e(),this._v(" "),"kongfu"===this.bookTabName?a("Card",{attrs:{tabName:"kongfu",navName:"book"}}):this._e(),this._v(" "),"romantic"===this.bookTabName?a("Card",{attrs:{tabName:"romantic",navName:"book"}}):this._e()],1)},staticRenderFns:[]},Q=s("VU/8")(D,L,!1,function(t){s("JLQb")},null,null).exports,S={components:{Star:v,BtnBack:T},data:function(){return{book:{title:"",rating:{average:""},images:{large:""},author:[],publisher:"",subtitle:"",pubdate:"",binding:"",price:"",pages:"",summary:"",author_intro:"",tags:[]}}},computed:{},methods:{fetchBookDetail:function(){var t="https://api.douban.com/v2/book/"+this.$route.params.id,a=this;$.ajax({url:t,dataType:"jsonp",success:function(t){a.book=t},error:function(t,a){console.log(a)}})},back:function(){this.$router.go(-1)}},created:function(){this.fetchBookDetail()}},B={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"b-detail-container"},[s("div",{staticClass:"head"},[s("div",{staticClass:"post md-elevation-24",style:{backgroundImage:"url("+t.book.images.large+")"}}),t._v(" "),s("div",{staticClass:"btn-back",on:{click:function(a){t.back()}}},[s("BtnBack")],1)]),t._v(" "),s("div",{staticClass:"main-title"},[s("div",{staticClass:"title"},[t._v(t._s(t.book.title))]),t._v(" "),s("div",{staticClass:"rating"},[0!==t.book.rating.average?s("Star",{attrs:{rating:t.book.rating.average}}):t._e(),t._v(" "),0===t.book.rating.average?s("span",[t._v("暂无评分")]):t._e()],1)]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("作者：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t._f("arrToString")(t.book.author)))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("出版社：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.book.publisher))])]),t._v(" "),t.book.subtitle?s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("副标题：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.book.subtitle))])]):t._e(),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("出版年：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.book.pubdate))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("页数：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.book.pages))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("定价：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.book.price))])]),t._v(" "),s("div",{staticClass:"info-group"},[s("span",{staticClass:"key"},[t._v("装帧：")]),t._v(" "),s("div",{staticClass:"value"},[t._v(t._s(t.book.binding))])])]),t._v(" "),s("div",[s("md-ripple",[s("div",{staticClass:"summary"},[s("span",{staticClass:"start"},[t._v("内容简介：")]),t._v(" "),s("p",[t._v(t._s(t.book.summary))])])])],1),t._v(" "),s("div",{staticClass:"tags"},[s("p",[t._v("标签：")]),t._v(" "),t._l(t.book.tags,function(a){return s("span",{staticClass:"tag"},[t._v(t._s(a.name))])})],2),t._v(" "),s("div",[s("md-ripple",[s("div",{staticClass:"summary"},[s("span",{staticClass:"start"},[t._v("作者简介：")]),t._v(" "),s("p",[t._v(t._s(t.book.author_intro))])])])],1)])},staticRenderFns:[]},U=s("VU/8")(S,B,!1,function(t){s("L7uL")},null,null).exports,F={components:{Star:v,Loading:b},data:function(){return{placeholder:"请输入搜索信息"}},computed:{dataQuery:function(){return this.$store.state.dataQuery.subjects},showBtn:function(){return this.$store.state.dataQuery.showBtn},showLoading:function(){return this.$store.state.showLoading},showError:function(){return this.$store.state.showError},queryInput:{get:function(){return this.$store.state.dataQuery.q},set:function(t){this.$store.state.dataQuery.q=t}},queryType:function(){return this.$route.params.nav}},methods:{back:function(){this.$router.go(-1)},fetchQuery:function(){this.$store.dispatch("fetchQuery",{queryType:this.queryType})},newFetch:function(){this.$store.commit("CLEAN_FETCH_QUERY"),this.$store.dispatch("fetchQuery",{queryType:this.queryType})}}},R={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search-container"},[s("div",{staticClass:"search-bar"},[s("md-toolbar",[s("div",{staticClass:"md-toolbar-row"},[s("md-button",{staticClass:"md-primary md-icon-button",on:{click:function(a){t.back()}}},[s("md-icon",[t._v("arrow_back")])],1),t._v(" "),s("md-field",[s("md-input",{ref:"movieSearch",attrs:{placeholder:t.placeholder},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.newFetch()},focus:function(a){t.placeholder=""},blur:function(a){t.placeholder="请输入搜索信息"}},model:{value:t.queryInput,callback:function(a){t.queryInput=a},expression:"queryInput"}})],1),t._v(" "),s("md-button",{staticClass:"md-icon-button md-primary",on:{click:function(a){t.newFetch()}}},[s("md-icon",[t._v("search")])],1)],1)])],1),t._v(" "),s("div",{staticClass:"result-box"},[s("div",{staticClass:"result"},[s("transition-group",{attrs:{tag:"div",name:"cardSlide"}},t._l(t.dataQuery,function(a){return s("div",{key:a.id,staticClass:"card-box md-elevation-2"},[s("md-ripple",[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{path:"/"+t.queryType+"/detail/"+a.id}}},[s("div",{staticClass:"img",style:{backgroundImage:"url("+a.images.large+")"}}),t._v(" "),s("div",{staticClass:"info"},[s("div",[s("div",{staticClass:"title"},[t._v(t._s(a.title)),a.year?s("span",[t._v(" "+t._s(a.year))]):t._e()]),t._v(" "),s("div",{staticClass:"rating"},[0!==a.rating.average?s("Star",{attrs:{rating:a.rating.average}}):t._e(),t._v(" "),0===a.rating.average?s("span",[t._v("暂无评分")]):t._e()],1),t._v(" "),"movie"===t.queryType?s("div",{staticClass:"subinfo"},[s("p",{staticClass:"type"},[t._v("类型："+t._s(t._f("arrToString")(a.genres)))]),t._v(" "),s("p",{staticClass:"director"},[t._v("导演："+t._s(t._f("arrToString")(a.directors.map(function(t){return t.name}))))]),t._v(" "),s("p",{staticClass:"casts"},[t._v("主演："+t._s(t._f("arrToString")(a.casts.map(function(t){return t.name}))))])]):t._e(),t._v(" "),"book"===t.queryType?s("div",{staticClass:"subinfo"},[s("p",[t._v(t._s(t._f("arrToString")(a.author)))]),t._v(" "),s("p",[t._v(t._s(a.publisher)+" / "+t._s(a.pubdate))]),t._v(" "),s("p",[t._v(t._s(a.price))])]):t._e()])])])],1)],1)})),t._v(" "),t.showError?s("div",{staticStyle:{"text-align":"center",color:"#ccc"}},[t._v(t._s(t.showError))]):t._e(),t._v(" "),s("transition",{attrs:{name:"loading"}},[t.showLoading?s("Loading"):t._e()],1),t._v(" "),s("div",{staticClass:"md-layout md-alignment-center-center"},[t.showBtn&&t.dataQuery.length&&t.queryInput&&!t.showLoading?s("md-button",{staticClass:"md-primary",on:{click:function(a){t.fetchQuery()}}},[t._v("加载更多")]):t._e(),t._v(" "),t.showBtn?t._e():s("md-button",{attrs:{disabled:""}},[t._v("- 没有更多内容啦 -")])],1)],1)])])},staticRenderFns:[]},q=s("VU/8")(F,R,!1,function(t){s("hpPW")},null,null).exports,A={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about-container"},[s("md-toolbar",{staticClass:"md-primary"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(a){t.back()}}},[s("md-icon",[t._v("arrow_back")])],1),t._v(" "),s("span",{staticClass:"md-title"},[t._v("ABOUT")])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"info-box"},[s("div",{staticClass:"info"},[s("div",{staticClass:"item key"},[t._v("View Source Code")]),t._v(" "),s("div",{staticClass:"md-elevation-1"},[s("md-ripple",[s("a",{staticClass:"item value",attrs:{href:"https://github.com/greysalt/mydou",target:"_blank"}},[s("md-icon",[t._v("link")]),t._v(" "),s("span",[t._v("GitHub")])],1)])],1),t._v(" "),s("div",{staticClass:"item key"},[t._v("Contact Me")]),t._v(" "),s("div",{staticClass:"md-elevation-1"},[s("md-ripple",[s("div",{staticClass:"item value last"},[s("md-icon",[t._v("email")]),t._v(" "),s("span",[t._v("richard216@163.com")])],1)])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"head"},[a("p",{staticClass:"title"},[this._v("MyDou V1.0")]),this._v(" "),a("p",{staticClass:"sub"},[this._v("移动端豆瓣WEB应用")])])}]},O=s("VU/8")({methods:{back:function(){this.$router.go(-1)}}},A,!1,function(t){s("8jnJ")},null,null).exports;n.default.use(c.a);var V=new c.a({scrollBehavior:function(t,a,s){return s||{x:0,y:0}},routes:[{path:"/",redirect:"/movie"},{path:"/movie",name:"movie",component:y},{path:"/movie/detail/:id",name:"movieDetail",component:x},{path:"/book",name:"book",component:Q},{path:"/book/detail/:id",name:"bookDetail",component:U},{path:"/search/:nav",name:"search",component:q},{path:"/about/info",name:"about",component:O},{path:"*",redirect:"/"}]}),H=s("Lgyv"),I=s.n(H),G=(s("4+hh"),s("/H5V"),s("Gu7T")),M=s.n(G),Y=s("NYxO"),J="https://api.douban.com/v2",W={fetch_movie:function(t,a){if(0===t.state.movies.coming_soon.count){t.state.showLoading=!0,t.state.showError="";var s=J+"/movie/"+a.tabName+"?count=15";$.ajax({url:s,dataType:"jsonp",success:function(s){var e=[];s.subjects.map(function(t){var a={};a.id=t.id,a.title=t.title,a.rating=t.rating.average,a.imgUrl=t.images.large,e.push(a)}),t.state.showLoading=!1,t.commit("FETCH_MOVIE",{subjects:e,tabName:a.tabName})},error:function(a,s){t.state.showLoading=!1,t.state.showError="Opps~"+s}})}},fetch_book:function(t,a){var s=J+"/book/search?tag="+a.tag+"&count=12";t.state.showError="",t.state.showLoading=!0,$.ajax({url:s,dataType:"jsonp",success:function(s){var e=[];s.books.map(function(t){var a={};a.id=t.id,a.title=t.title,a.rating=t.rating.average,a.imgUrl=t.images.large,e.push(a)}),t.state.showLoading=!1,t.commit("FETCH_BOOK",{tabName:a.tabName,subjects:e})},error:function(a,s){t.state.showLoading=!1,t.state.showError="Opps~"+s}})},fetchQuery:function(t,a){var s=t.state.dataQuery,e=J+"/"+a.queryType+"/search?q="+s.q+"&count=10&start="+s.count;t.state.showError="",t.state.showLoading=!0,$.ajax({url:e,dataType:"jsonp",success:function(a){t.state.showLoading=!1,t.commit("FETCH_QUERY",{subjects:a.subjects||a.books})},error:function(a,s){t.state.showLoading=!1,t.state.showError="Opps~"+s}})}};n.default.use(Y.a);var z={TOGGLE_DRAWER:function(t){t.showDrawer=!t.showDrawer},FETCH_MOVIE:function(t,a){t.movies[a.tabName].count=a.subjects.length,t.movies[a.tabName].subjects=a.subjects},CHANGE_TAB_MOVIE:function(t,a){t.movieTabName=a.tabName},FETCH_BOOK:function(t,a){t.books[a.tabName].subjects=a.subjects,t.books[a.tabName].count=a.subjects.length},CHANGE_TAB_BOOK:function(t,a){t.bookTabName=a.tabName},FETCH_QUERY:function(t,a){var s;(s=t.dataQuery.subjects).push.apply(s,M()(a.subjects)),a.subjects.length<10&&(t.dataQuery.showBtn=!1),t.dataQuery.count+=10,console.log(t.dataQuery)},CLEAN_FETCH_QUERY:function(t){t.dataQuery.count=0,t.dataQuery.subjects=[],t.dataQuery.showBtn=!0},CHANGE_QUERY_INPUT:function(t,a){t.dataQuery.q=a.q}},K=new Y.a.Store({state:{movieTabName:"in_theaters",movies:{in_theaters:{count:0,subjects:[]},coming_soon:{count:0,subjects:[]}},bookTabName:"hot",books:{hot:{count:0,subjects:[]},scifi:{count:0,subjects:[]},detective:{count:0,subjects:[]},kongfu:{count:0,subjects:[]},romantic:{count:0,subjects:[]}},dataQuery:{count:0,subjects:[],q:"",showBtn:!0},showDrawer:!1,showLoading:!1,showError:""},actions:W,mutations:z});n.default.use(I.a),n.default.config.productionTip=!1,n.default.filter("arrToString",function(t){return t.join(" / ")}),new n.default(i()({el:"#app",router:V,store:K},r))},"T4u+":function(t,a){},dmsC:function(t,a){},gvpG:function(t,a){},hpPW:function(t,a){},mTSp:function(t,a){},"mXw/":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.7091de4f8feb02d3b2be.js.map