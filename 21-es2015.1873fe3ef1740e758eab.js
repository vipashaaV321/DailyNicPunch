(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"k+ul":function(n,t,i){"use strict";i.r(t),i.d(t,"Tab3PageModule",(function(){return f}));var c=i("TEn/"),e=i("tyNb"),o=i("ofXK"),r=i("3Pt+"),b=i("fXoL"),s=i("H/yF");function a(n,t){if(1&n){const n=b.Nb();b.Mb(0,"ion-card",4),b.Ub("click",(function(){b.dc(n);const i=t.$implicit;return b.Wb().onGoTo(i)})),b.Kb(1,"img",5),b.Mb(2,"ion-card-header"),b.Mb(3,"ion-card-subtitle"),b.Mb(4,"ion-chip",6),b.Kb(5,"ion-icon",7),b.Mb(6,"ion-label"),b.hc(7),b.Xb(8,"date"),b.Lb(),b.Lb(),b.Lb(),b.Mb(9,"ion-card-title"),b.hc(10),b.Lb(),b.Lb(),b.Mb(11,"ion-card-content"),b.hc(12),b.Lb(),b.Lb()}if(2&n){const n=t.$implicit;b.zb(1),b.bc("src",n.urlToImage,b.ec),b.zb(6),b.ic(b.Yb(8,4,n.publishedAt,"medium")),b.zb(3),b.ic(n.title),b.zb(2),b.jc(" ",n.description," ")}}let l=(()=>{class n{constructor(n,t){this.newsService=n,this.router=t}ngOnInit(){this.newsService.getdata("everything?domains=wsj.com").subscribe(n=>{console.log(n),this.data=n})}onGoTo(n){this.newsService.currentArticle=n,this.router.navigate(["/news-single2"])}}return n.\u0275fac=function(t){return new(t||n)(b.Jb(s.a),b.Jb(e.g))},n.\u0275cmp=b.Db({type:n,selectors:[["app-tab3"]],decls:6,vars:3,consts:[[3,"translucent"],["color","primary"],[3,"fullscreen"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"src"],["outline","","color","primary"],["name","today-outline"]],template:function(n,t){1&n&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar",1),b.Mb(2,"ion-title"),b.hc(3," DailyNicPunch "),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content",2),b.gc(5,a,13,7,"ion-card",3),b.Lb()),2&n&&(b.bc("translucent",!0),b.zb(4),b.bc("fullscreen",!0),b.zb(1),b.bc("ngForOf",null==t.data?null:t.data.articles))},directives:[c.i,c.q,c.p,c.h,o.i,c.b,c.d,c.e,c.g,c.j,c.k,c.f,c.c],pipes:[o.d],styles:[""]}),n})();var u=i("qtYk");const d=[{path:"",component:l}];let p=(()=>{class n{}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(t){return new(t||n)},imports:[[e.i.forChild(d)],e.i]}),n})(),f=(()=>{class n{}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(t){return new(t||n)},imports:[[c.r,o.b,r.a,u.a,e.i.forChild([{path:"",component:l}]),p]]}),n})()}}]);