(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{163:function(e,t,a){"use strict";var n=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,t.default=n.fetch.bind(n),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},164:function(e,t,a){e.exports={topHeader:"Anime_topHeader__128BG",second:"Anime_second__NqBAQ",topSearchBar:"Anime_topSearchBar__2Udxw",loadMore:"Anime_loadMore__gHEn6",requestParent:"Anime_requestParent__3kt9b",request:"Anime_request__3uE0X",flag:"Anime_flag__P9NFh",time:"Anime_time__36hNh",initial:"Anime_initial__TC9er",parentHead:"Anime_parentHead__mTCqC",parent:"Anime_parent__2-Mri",image:"Anime_image__BtZoE",title:"Anime_title__3qQYe"}},166:function(e,t,a){e.exports={searchParent:"SearchBar_searchParent__1y4XH",goIcon:"SearchBar_goIcon__20AqR"}},168:function(e,t,a){e.exports={clear:"Button_clear__3C1T-",fullWidth:"Button_fullWidth__2I08G",hide:"Button_hide__2Exo_",show:"Button_show__S_Nsx",cursor:"Button_cursor__yrjQ6",capitalize:"Button_capitalize__h7aV-",whiteBG:"Button_whiteBG__GmMQh",blueBG:"Button_blueBG__2tNhU",uppercase:"Button_uppercase__1N4oF",row:"Button_row__CNuS9",col:"Button_col__3ZGiE",BB:"Button_BB__1t0Jr",Bfull:"Button_Bfull__2duha",BT:"Button_BT__3qyhz",checkmark:"Button_checkmark__eAGRU",checkmark_circle:"Button_checkmark_circle__2qTM0",checkmark_stem:"Button_checkmark_stem__2wYvs",checkmark_kick:"Button_checkmark_kick__3uxEW",btn:"Button_btn__3knBD","is-primary":"Button_is-primary__RWIJo","is-secondary":"Button_is-secondary__11BB4","is-transparent":"Button_is-transparent__2tWaW","is-smallRounded":"Button_is-smallRounded__RToa0","is-type3":"Button_is-type3__hoIRV","is-medium":"Button_is-medium__3O485","is-large":"Button_is-large__3zqPN","is-small":"Button_is-small__3tzE_","is-active":"Button_is-active__1E4i-","is-disabled":"Button_is-disabled__Izn5v",button:"Button_button__RpVJL"}},170:function(e,t,a){e.exports={border:"ImageCard_border__1swvq",image:"ImageCard_image__21ols",title:"ImageCard_title__3B9Ga"}},175:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(179),o=a(17),i=a(24),s=a(163),c=a.n(s),l=function(e){if(e.status>=200&&e.status<305)return e;410!==e.status&&401!==e.status&&403!==e.status||console.log("Unauthorized.");var t=new Error(e.statusText);throw t.response=e,t},u=function(e,t){return{url:e}},_=a(91),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(arguments.length>2&&arguments[2],u(e,t));return new Promise(function(t,n){var r=setTimeout(function(){n(new Error(_.a.REQUEST_TIME_OUT))},3e4),o=null;window.navigator.onLine?c()(a.url,a.params).then(function(e){return console.log("ress",e),e}).then(l).then(function(e){return clearTimeout(r),t(e.json())}).catch(function(t){clearTimeout(r),console.log("Not able to fetch response for ",e,t),"TypeError: Failed to fetch"===t.toString()?(o={msg:_.a.REQUEST_TIME_OUT,url:a.url,params:a.params},n(o)):n(t)}):(o={msg:_.a.NO_NETWORK,url:a.url,params:a.params},n(o))})};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t="https://api.jikan.moe/v3/search/anime?q=".concat(e.query,"&limit=16&page=").concat(e.pageNo);return{types:[i.c,i.e,i.b],promise:function(){return m(t)}}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t="https://api.jikan.moe/v3/search/anime?q=".concat(e.query,"&limit=16&page=").concat(e.pageNo);return{types:[i.d,i.e,i.b],promise:function(){return m(t)}}}var p=a(10),f=a(11),g=a(13),v=a(12),b=a(14),E=a(1),B=a.n(E),y=a(164),k=a.n(y),w=a(166),T=a.n(w),N=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).goSearch=function(){a.props.onClick(!0)},a.handlerInput=function(e){a.props.onInput(e.target.value)},a.handleEnterEvent=function(e){"Enter"===e.key&&a.props.onKeyDown(!0)},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.placeholder,a=e.id,n=e.name,r=e.value;return B.a.createElement("div",{className:T.a.searchParent},B.a.createElement("input",{placeholder:t,id:a,name:n,type:"text",value:r,onChange:this.handlerInput,onKeyDown:this.handleEnterEvent}),B.a.createElement("button",{className:T.a.goIcon,onClick:this.goSearch,id:"search"},"Go"))}}]),t}(B.a.PureComponent),j=a(168),q=a.n(j),O=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClickHandler,a=e.isDisabled,n=e.btnText,r=e.btnType,o=e.opaqueFactor,i=e.id;return B.a.createElement("button",{id:i,onClick:t,disabled:a,className:q.a.button,type:r,opacity:o},n)}}]),t}(E.PureComponent);O.defaultProps={classNamesStr:"",isDisabled:!1,type:"primary",size:"large",btnType:"button"};var S=a(170),C=a.n(S),D=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imgurl,a=e.title;return B.a.createElement("div",{className:C.a.border},B.a.createElement("div",{className:C.a.image},B.a.createElement("img",{src:t,alt:"img"})),B.a.createElement("div",{className:C.a.title},a))}}]),t}(B.a.PureComponent),I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={searchQuery:"",loadMore:!1,flag:!0,time:"300ms",startTime:null,endTime:null,pageCount:1,totalPage:"",elementHeight:0},a.handlerInput=function(e){a.setState({searchQuery:e})},a.goSearch=function(e){var t=a.props.getListData,n=a.state,r={query:n.searchQuery,pageNo:n.pageCount};e&&(a.setState({startTime:(new Date).getTime()}),t(r))},a.loadMoreListData=function(){var e=a.props.getListDataMore,t=a.state,n=t.pageCount,r=t.totalPage,o=t.searchQuery,i=parseInt(n)+1,s=document.getElementById("listView"),c={query:o,pageNo:i};i<r+1?(a.setState({pageCount:i,elementHeight:s.offsetHeight}),e(c)):a.setState({loadMore:!1})},a.renderSearchDataList=function(){var e=a.props.listData;if(!e.loading&&e.data){var t=e.data.results&&e.data.results;return t.length>0?B.a.createElement(B.a.Fragment,null,B.a.createElement("div",{className:k.a.parentHead,id:"listView"},t.map(function(e,t){return B.a.createElement("a",{className:k.a.parent,key:"_parent".concat(t),href:"".concat(e.url),id:"_parent".concat(t)},B.a.createElement(D,{imgurl:e.image_url,title:e.title}))})),a.state.loadMore&&B.a.createElement("div",{className:k.a.loadMore,id:"loadMore"},B.a.createElement(O,{btnText:"Load More...",onClickHandler:function(){return a.loadMoreListData()}}))):B.a.createElement("div",null,B.a.createElement("div",null,"We're Sorry!"),B.a.createElement("div",null,"We can't seem to find any anime that match your search for \"".concat(a.state.searchQuery,'"')))}},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.listData;e.listData.loading&&!a.loading&&a.data&&(this.setState({endTime:(new Date).getTime()}),this.setState({flag:a.data.request_cached,totalPage:a.data.last_page}),a.data.last_page>16&&this.setState({loadMore:!0})),t.elementHeight!==this.state.elementHeight&&window.scrollTo({top:t.elementHeight,left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.flag,n=e.startTime,r=e.endTime,o=r-n>0?r-n:"-";return B.a.createElement("main",null,B.a.createElement("section",null,B.a.createElement("div",{className:k.a.topHeader},B.a.createElement("div",{className:k.a.second},B.a.createElement("div",{className:k.a.topSearchBar},B.a.createElement(N,{placeholder:"search for an anime, e.g Naruto",id:"project",name:"project",value:t,onInput:this.handlerInput,onClick:this.goSearch,onKeyDown:this.goSearch})),B.a.createElement("div",{className:k.a.requestParent},B.a.createElement("div",{className:k.a.request},"Requesting: ",B.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"search_query_url",href:"https://api.jikan.moe/v3/search/anime?q=nhhh"},"https://api.jikan.moe/v3/search/anime?q=nhhh")),B.a.createElement("div",{className:k.a.flag},"Request Cached: ",B.a.createElement("span",null,"".concat(a))),B.a.createElement("div",{className:k.a.time},"Time Taken ",B.a.createElement("span",null,o,"ms"))),0===t.length&&B.a.createElement("div",{className:k.a.initial},"Input Text and Press Enter to Search ..."),t.length>0&&this.renderSearchDataList()))))}}]),t}(B.a.Component);t.default=Object(r.a)(Object(n.b)(function(e,t){return{listData:e.animeReducer.listData}},function(e){return Object(o.b)({getListData:d,getListDataMore:h},e)})(I))}}]);
//# sourceMappingURL=Spinny_platform_details.ac22d5ab.chunk.js.map