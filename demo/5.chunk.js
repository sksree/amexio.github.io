webpackJsonp([5],{Bvi8:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=e("TMwh"),a=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/layout/carousel/carousel.html").subscribe(function(n){l=n.text()},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/layout/carousel/carousel.text").subscribe(function(l){n=l.text()},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),i=function(){},_=e("tfJK"),o=e("drlO"),d=e("KhCp"),r=e("kL+h"),c=e("Un6q"),p=t._1({encapsulation:2,styles:[],data:{}});function s(l){return t._27(0,[(l()(),t._25(-1,null,["\n                   "])),(l()(),t._3(1,0,null,null,1,"amexio-image",[],null,null,null,_._97,_._9)),t._2(2,114688,null,0,o._36,[],{path:[0,"path"],height:[1,"height"]},null),(l()(),t._25(-1,null,["\n             "]))],function(l,n){l(n,2,0,t._6(1,"assets/images/carousel/set1/",n.context.$implicit,".jpg"),"300px")},null)}function m(l){return t._27(0,[(l()(),t._25(-1,null,["\n                 "])),(l()(),t._3(1,0,null,null,1,"amexio-image",[],null,null,null,_._97,_._9)),t._2(2,114688,null,0,o._36,[],{path:[0,"path"],height:[1,"height"]},null),(l()(),t._25(-1,null,["\n             "]))],function(l,n){l(n,2,0,t._6(1,"assets/images/carousel/set2/",n.context.$implicit,".jpg"),"300px")},null)}function h(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                   "])),(l()(),t._25(-1,null,["\n                   "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t._2(4,4243456,null,0,r.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                 "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function f(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                   "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,d.b,d.a)),t._2(3,4243456,null,0,r.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                 "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function y(l){return t._27(0,[(l()(),t._25(-1,null,["\n   "])),(l()(),t._3(1,0,null,null,121,"amexio-card",[["header","true"]],null,null,null,_._41,_.f)),t._2(2,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),t._25(-1,null,["\n     "])),(l()(),t._3(4,0,null,0,2,"amexio-header",[],null,null,null,_._46,_.k)),t._2(5,114688,null,0,o.q,[],null,null),(l()(),t._25(-1,0,["\n        Carousel \n     "])),(l()(),t._25(-1,null,["\n     "])),(l()(),t._3(8,0,null,1,113,"amexio-body",[],null,null,null,_._38,_.c)),t._2(9,114688,null,0,o.d,[],null,null),(l()(),t._25(-1,0,["\n       "])),(l()(),t._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["The CarouselView displays a collection of images or other content in a horizontal layout with built-in navigation between the items."])),(l()(),t._25(-1,0,["\n       "])),(l()(),t._3(14,0,null,0,106,"amexio-tab-view",[],null,null,null,_._55,_.t)),t._2(15,5357568,null,1,o.D,[t.B],null,null),t._23(603979776,1,{queryTabs:1}),(l()(),t._25(-1,0,["\n         "])),(l()(),t._3(18,0,null,0,27,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,_._56,_.u)),t._2(19,114688,[[1,4]],0,o.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n           "])),(l()(),t._3(22,0,null,0,7,"amexio-carousel",[["mode","multiple"]],null,null,null,_._42,_.g)),t._2(23,1163264,null,1,o.h,[],{header:[0,"header"],mode:[1,"mode"],data:[2,"data"]},null),t._23(603979776,2,{templates:1}),t._18(25,12),(l()(),t._25(-1,null,["\n             "])),(l()(),t.Y(0,null,null,1,null,s)),t._2(28,16384,[[2,4]],0,o.F,[t.J],{name:[0,"name"]},null),(l()(),t._25(-1,null,["\n           "])),(l()(),t._25(-1,0,["\n           "])),(l()(),t._3(31,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._3(32,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n           \n           "])),(l()(),t._3(34,0,null,0,7,"amexio-carousel",[["mode","multiple"],["shuffle-interval","2000"]],null,null,null,_._42,_.g)),t._2(35,1163264,null,1,o.h,[],{header:[0,"header"],mode:[1,"mode"],data:[2,"data"],shuffleinterval:[3,"shuffleinterval"]},null),t._23(603979776,3,{templates:1}),t._18(37,11),(l()(),t._25(-1,null,["\n             "])),(l()(),t.Y(0,null,null,1,null,m)),t._2(40,16384,[[3,4]],0,o.F,[t.J],{name:[0,"name"]},null),(l()(),t._25(-1,null,["\n           "])),(l()(),t._25(-1,0,["\n           "])),(l()(),t._3(43,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._3(44,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n           \n           \n         "])),(l()(),t._25(-1,0,["\n         "])),(l()(),t._3(47,0,null,0,42,"amexio-tab",[["title","API Reference"]],null,null,null,_._56,_.u)),t._2(48,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n           "])),(l()(),t._3(50,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,_._103,_._15)),t._2(51,1425408,null,1,o._44,[o.Y,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,4,{columnRef:1}),(l()(),t._25(-1,null,["\n             "])),(l()(),t._3(54,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),t._2(55,49152,[[4,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,5,{headerTemplate:0}),t._23(335544320,6,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),t._2(60,49152,[[4,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,7,{headerTemplate:0}),t._23(335544320,8,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(64,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),t._2(65,49152,[[4,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,9,{headerTemplate:0}),t._23(335544320,10,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),t._2(70,49152,[[4,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,11,{headerTemplate:0}),t._23(335544320,12,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n           "])),(l()(),t._25(-1,0,["\n\n\n           "])),(l()(),t._3(75,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,_._103,_._15)),t._2(76,1425408,null,1,o._44,[o.Y,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,13,{columnRef:1}),(l()(),t._25(-1,null,["\n             "])),(l()(),t._3(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),t._2(80,49152,[[13,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,14,{headerTemplate:0}),t._23(335544320,15,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(84,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),t._2(85,49152,[[13,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,16,{headerTemplate:0}),t._23(335544320,17,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n           "])),(l()(),t._25(-1,0,["\n\n\n         "])),(l()(),t._25(-1,0,["\n         "])),(l()(),t._3(91,0,null,0,24,"amexio-tab",[["title","Source"]],null,null,null,_._56,_.u)),t._2(92,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n           "])),(l()(),t._3(94,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n             "])),(l()(),t._3(96,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,_._58,_.w)),t._2(97,5357568,null,1,o.I,[t.B],null,null),t._23(603979776,18,{queryTabs:1}),(l()(),t._25(-1,0,["\n               "])),(l()(),t._3(100,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,_._56,_.u)),t._2(101,114688,[[18,4]],0,o.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                 "])),(l()(),t.Y(16777216,null,0,1,null,h)),t._2(104,16384,null,0,c.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n               "])),(l()(),t._25(-1,0,["\n               "])),(l()(),t._3(107,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,_._56,_.u)),t._2(108,114688,[[18,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                 "])),(l()(),t.Y(16777216,null,0,1,null,f)),t._2(111,16384,null,0,c.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n               "])),(l()(),t._25(-1,0,["\n             "])),(l()(),t._25(-1,null,["   \n           "])),(l()(),t._25(-1,0,["\n          \n         "])),(l()(),t._25(-1,0,["\n         "])),(l()(),t._3(117,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,_._56,_.u)),t._2(118,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n           Work in Progress\n         "])),(l()(),t._25(-1,0,["\n       "])),(l()(),t._25(-1,0,["\n     "])),(l()(),t._25(-1,null,["\n   "])),(l()(),t._25(-1,null,["\n "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,23,0,"Gallery","multiple",l(n,25,1,[1,2,3,4,5,6,7,8,9,10,11,12])),l(n,28,0,"item"),l(n,35,0,"Gallery With Auto Shuffle (2 seconds)","multiple",l(n,37,1,[1,2,3,4,5,6,7,8,9,10,11]),"2000"),l(n,40,0,"item"),l(n,48,0,"API Reference"),l(n,51,0,"Properties","assets/apireference/layout/accordion/acc.json","get","properties",!1,!1),l(n,55,0,"Name","name",!1,"string",15),l(n,60,0,"Type","type",!1,"string",10),l(n,65,0,"Default","default",!1,"string",10),l(n,70,0,"Description","description",!1,"string",65),l(n,76,0,"Events","assets/apireference/layout/accordion/acc_event.json","get","properties",!1,!1),l(n,80,0,"Name","name",!1,"string",15),l(n,85,0,"Description","description",!1,"string",65),l(n,92,0,"Source"),l(n,97,0),l(n,101,0,"HTML",!0),l(n,104,0,e.htmlCode),l(n,108,0,"Type Script"),l(n,111,0,e.typeScriptCode),l(n,118,0,"Live")},null)}var g=t.Z("carousel-demo",a,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"carousel-demo",[],null,null,null,y,p)),t._2(1,49152,null,0,a,[u.e],null,null)],null,null)},{},{},[]),x=e("0nO6"),b=e("UHIZ");e.d(n,"CarouselDemoModuleNgFactory",function(){return v});var v=t._0(i,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[g]],[3,t.j],t.v]),t._13(4608,c.n,c.m,[t.s,[2,c.u]]),t._13(4608,u.c,u.c,[]),t._13(4608,u.h,u.b,[]),t._13(5120,u.j,u.k,[]),t._13(4608,u.i,u.i,[u.c,u.h,u.j]),t._13(4608,u.g,u.a,[]),t._13(5120,u.e,u.l,[u.i,u.g]),t._13(4608,x.n,x.n,[]),t._13(4608,o.a,o.a,[]),t._13(4608,o._14,o._14,[]),t._13(512,c.b,c.b,[]),t._13(512,u.f,u.f,[]),t._13(512,x.k,x.k,[]),t._13(512,x.d,x.d,[]),t._13(512,r.b,r.b,[]),t._13(512,b.m,b.m,[[2,b.r],[2,b.k]]),t._13(512,o.r,o.r,[]),t._13(512,o.p,o.p,[]),t._13(512,o._34,o._34,[]),t._13(512,o.v,o.v,[]),t._13(512,o.y,o.y,[]),t._13(512,o.l,o.l,[]),t._13(512,o.J,o.J,[]),t._13(512,i,i,[]),t._13(1024,b.i,function(){return[[{path:"",component:a}]]},[])])})}});