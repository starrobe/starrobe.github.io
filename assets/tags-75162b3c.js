import{f as x,o as s,h as C,a as i,t as _,a9 as j,aa as q,u as A,a2 as D,s as E,k as I,D as R,ao as z,Y as v,a4 as H,v as O,ab as W,a0 as G,l as J,c as m,w as a,d as r,j as t,i as K,F as M,m as Q,a8 as U,n as X}from"./app-2781ddff.js";import{_ as Z}from"./YunCard.vue_vue_type_script_setup_true_lang-7e7da48c.js";import{_ as tt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-b338c858.js";import{_ as et}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-ebad1ef6.js";const st={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},nt={"inline-flex":""},ot={"inline-flex":"",text:"xs"},at=x({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(w){return(n,p)=>(s(),C("span",st,[i("span",nt,"#"+_(n.title),1),i("span",ot,"["+_(n.count)+"]",1)]))}}),rt={class:"yun-text-light",text:"center",p:"2"},it={class:"justify-center items-end",flex:"~ wrap",gap:"1"},pt=x({__name:"tags",setup(w){j([q({"@type":"CollectionPage"})]);const n=A(),p=D(),T=E(),{t:f}=I(),l=R(),{tags:g,getTagStyle:$}=z({primary:T.value.colors.primary}),o=v(()=>n.query.tag||""),P=H(),S=v(()=>P.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===o.value:e.tags.includes(o.value):!1)),d=O(),{show:Y}=W(d);function b(c){p.push({query:{tag:c}}),Y()}const k=G(l);return(c,e)=>{const y=et,L=at,B=J("router-view"),F=tt,N=Z,V=U;return s(),m(V,null,{"main-header":a(()=>[r(y,{title:t(k)||t(f)("menu.tags"),icon:t(l).icon||"i-ri-tag-line",color:t(l).color},null,8,["title","icon","color"])]),"main-content":a(()=>[i("div",rt,_(t(f)("counter.tags",Array.from(t(g)).length)),1),i("div",it,[(s(!0),C(M,null,K(Array.from(t(g)).sort(),([u,h])=>(s(),m(L,{key:u,title:u,count:h.count,style:X(t($)(h.count)),onClick:lt=>b(u.toString())},null,8,["title","count","style","onClick"]))),128))]),r(B)]),"main-nav-before":a(()=>[o.value?(s(),m(N,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:a(()=>[r(y,{title:o.value,icon:"i-ri-hashtag"},null,8,["title"]),r(F,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:S.value},null,8,["posts"])]),_:1},512)):Q("v-if",!0)]),_:1})}}});export{pt as default};
