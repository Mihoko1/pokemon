(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports={pokeDetail:"PokeDetail_pokeDetail__-nS_o",image:"PokeDetail_image__2m-aC",name:"PokeDetail_name__28_br",statName:"PokeDetail_statName__3dPng",tableContainer:"PokeDetail_tableContainer__356vw",goBack:"PokeDetail_goBack__Ed4f8",typeContainer:"PokeDetail_typeContainer__1cZLl",typeHeading:"PokeDetail_typeHeading__3oEAa",normal:"PokeDetail_normal__1drch",fighting:"PokeDetail_fighting__Nv_F0",flying:"PokeDetail_flying__3PEIb",poison:"PokeDetail_poison__EFmQS",ground:"PokeDetail_ground__-2Gpr",rock:"PokeDetail_rock__3xz4w",bug:"PokeDetail_bug__2-fXP",ghost:"PokeDetail_ghost__19vQF",steel:"PokeDetail_steel__2qyyP",fire:"PokeDetail_fire__2zL2h",water:"PokeDetail_water__2C5lK",grass:"PokeDetail_grass__3IQCl",electric:"PokeDetail_electric__2SDrD",psychic:"PokeDetail_psychic__3u3ue",ice:"PokeDetail_ice__2wfvP",dragon:"PokeDetail_dragon__1wkeO",dark:"PokeDetail_dark__3Cspg",fairy:"PokeDetail_fairy__f3fkt",shadow:"PokeDetail_shadow__u002A",type:"PokeDetail_type__13leM"}},14:function(e,a,t){e.exports={pokeDex:"PokeDex_pokeDex__1KCYa",image:"PokeDex_image__i3FGD",name:"PokeDex_name__3qnlv",link:"PokeDex_link__2tJZy"}},16:function(e,a,t){e.exports={header:"Header_header__1VCKf",logoImg:"Header_logoImg__2dmRS",name:"Header_name__2-9cn"}},18:function(e,a,t){e.exports={card:"Card_card__1eE8R",grid:"Card_grid__awgOO",detail:"Card_detail__38d4G"}},19:function(e,a,t){e.exports={loading:"Loading_loading__2JaUi",listLoading:"Loading_listLoading__3_hRd",detailsLoading:"Loading_detailsLoading__1zEW7"}},33:function(e,a,t){e.exports=t.p+"static/media/logo.efc287d2.png"},34:function(e,a,t){e.exports=t.p+"static/media/loadingImg.c4eab4ae.gif"},36:function(e,a,t){e.exports=t(66)},41:function(e,a,t){},42:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),s=t.n(c),l=t(9),i=(t(41),t(2)),o=(t(42),t(33)),m=t.n(o),p=t(16),_=t.n(p),d=function(){return r.a.createElement("header",{className:_.a.header},r.a.createElement("h1",null,r.a.createElement("img",{className:_.a.logoImg,src:m.a,alt:"pokemon"}),r.a.createElement("span",{className:_.a.name},"Pokemon Directory")))},u=t(11),g=t.n(u),y=t(15),h=t(8),E=t(13),k=t.n(E),f=t(14),v=t.n(f),N=t(18),D=t.n(N),b=function(e){var a=e.children,t=e.size;return r.a.createElement("div",{className:"".concat(D.a.card," ").concat(D.a[t])},a)},C=t(19),P=t.n(C),w=t(34),A=t.n(w),x=function(e){var a=e.loadingAnimation;return r.a.createElement("div",{className:P.a.loading},r.a.createElement("img",{className:P.a[a],src:A.a,alt:"Loading..."}))},U=function(){var e=Object(n.useState)(!0),a=Object(h.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)([]),i=Object(h.a)(s,2),o=i[0],m=i[1],p=Object(n.useState)([]),_=Object(h.a)(p,2),d=_[0],u=_[1],E=[];return Object(n.useEffect)(function(){function e(){return(e=Object(y.a)(g.a.mark(function e(){var a,t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("https://pokeapi.co/api/v2/pokemon?limit=151");case 2:a=e.sent,console.log(a.data.results),m(a.data.results),t=0;case 6:if(!(t<a.data.results.length)){e.next=15;break}return e.next=9,k.a.get(a.data.results[t].url);case 9:n=e.sent,E.push(n.data),u(E);case 12:t++,e.next=6;break;case 15:c(!1);case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement("div",{className:v.a.pokeDex},r.a.createElement(r.a.Fragment,null,o.map(function(e,a){return r.a.createElement(b,{size:"grid",key:a},t?r.a.createElement(x,{loadingAnimation:"listLoading"}):r.a.createElement(r.a.Fragment,null,d.map(function(t,n){return e.name==t.name&&r.a.createElement(r.a.Fragment,{key:n},r.a.createElement("p",{className:v.a.image},r.a.createElement("img",{src:t.sprites.front_default,alt:o[a].name})),r.a.createElement(l.b,{className:v.a.link,to:"/".concat(t.id)}))}),r.a.createElement("h2",{className:v.a.name},e.name.charAt(0).toUpperCase()+e.name.slice(1))))})))},O=t(1),j=t.n(O),L=function(e){var a=Object(n.useState)(!0),t=Object(h.a)(a,2),c=t[0],s=t[1],i=Object(n.useState)({}),o=Object(h.a)(i,2),m=o[0],p=o[1],_=Object(n.useState)({}),d=Object(h.a)(_,2),u=(d[0],d[1],Object(n.useState)([])),E=Object(h.a)(u,2),f=E[0],v=E[1],N=Object(n.useState)([]),D=Object(h.a)(N,2),C=D[0],P=D[1];return console.log(e),Object(n.useEffect)(function(){function a(){return(a=Object(y.a)(g.a.mark(function a(){var t,n,r;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.match.params.charaId,n="https://pokeapi.co/api/v2/pokemon/".concat(t),console.log(n),a.next=6,k()(n);case 6:r=a.sent,p(r.data),v(r.data.stats),P(r.data.types),s(!1);case 11:case"end":return a.stop()}},a)}))).apply(this,arguments)}!function(){a.apply(this,arguments)}()},[]),r.a.createElement("div",{className:j.a.pokeDetail},r.a.createElement(b,{size:"detail",className:j.a.detailContainer},c?r.a.createElement(x,{loadingAnimation:"detailsLoading"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:j.a.image},r.a.createElement("img",{src:m.sprites.front_default,alt:m.name})),r.a.createElement("h2",{className:j.a.name},m.name.charAt(0).toUpperCase()+m.name.slice(1)),r.a.createElement("div",{className:j.a.typeContainer},r.a.createElement("div",{className:j.a.typeHeading},"Type :"),C.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:a},function(){switch(e.type.name){case"normal":return r.a.createElement("div",{className:j.a.normal},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"fighting":return r.a.createElement("div",{className:j.a.fighting},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"flying":return r.a.createElement("div",{className:j.a.flying},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"poison":return r.a.createElement("div",{className:j.a.poison},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"ground":return r.a.createElement("div",{className:j.a.ground},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"rock":return r.a.createElement("div",{className:j.a.rock},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"bug":return r.a.createElement("div",{className:j.a.bug},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"ghost":return r.a.createElement("div",{className:j.a.ghost},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"steel":return r.a.createElement("div",{className:j.a.steel},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"fire":return r.a.createElement("div",{className:j.a.fire},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"water":return r.a.createElement("div",{className:j.a.water},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"grass":return r.a.createElement("div",{className:j.a.grass},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"electric":return r.a.createElement("div",{className:j.a.electric},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"psychic":return r.a.createElement("div",{className:j.a.psychic},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"ice":return r.a.createElement("div",{className:j.a.ice},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"dragon":return r.a.createElement("div",{className:j.a.dragon},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"dark":return r.a.createElement("div",{className:j.a.dark},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"fairy":return r.a.createElement("div",{className:j.a.fairy},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));case"shadow":return r.a.createElement("div",{className:j.a.shadow},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1));default:return r.a.createElement("div",{className:j.a.type},e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1))}}())})),r.a.createElement("div",{className:j.a.tableContainer},r.a.createElement("table",null,r.a.createElement("tbody",null,f.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("tr",null,r.a.createElement("th",{className:j.a.statName},e.stat.name.charAt(0).toUpperCase()+e.stat.name.slice(1)),r.a.createElement("td",null,e.base_stat)))})))),r.a.createElement(l.b,{className:j.a.goBack,to:"/"},"Go Back"))))};var S=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"header"},r.a.createElement(d,null)),r.a.createElement("div",{className:"content"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(i.a,{path:"/:charaId",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.388273c0.chunk.js.map