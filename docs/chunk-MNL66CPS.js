import{a as A}from"./chunk-5TH3GW3C.js";import{K as R,L as T,T as $,U as q,e as U,g as j,p as B}from"./chunk-AAGIW7UB.js";import{Eb as n,Fb as P,Gb as C,Hb as k,Ma as b,Mb as E,Ob as M,Pb as O,Qa as i,Ra as m,fb as u,hb as _,ib as d,kc as I,mb as t,mc as z,nb as e,oa as f,ob as o,oc as D,rb as w,s as x,tb as y,vb as S,xa as h,ya as v}from"./chunk-BMDSJO4Z.js";function F(s,a){s&1&&o(0,"mat-progress-bar",3)}function N(s,a){if(s&1){let r=w();t(0,"div",4)(1,"div",5)(2,"div",6),o(3,"span",7),t(4,"div",8),o(5,"img",9),e()(),t(6,"div",10)(7,"h1",11),n(8),e(),t(9,"p",12),n(10," ID: "),t(11,"span",13),n(12),e()(),t(13,"p",14),n(14," Email: "),t(15,"span",13),n(16),e()(),t(17,"div",15)(18,"p")(19,"strong"),n(20,"Location:"),e(),n(21," New York, USA"),e(),t(22,"p")(23,"strong"),n(24,"Phone:"),e(),n(25," +20 111 774 1844"),e(),t(26,"p")(27,"strong"),n(28,"Joined:"),e(),n(29," December 1, 1999"),e()(),t(30,"button",16),y("click",function(){h(r);let c=S();return v(c.goBack())}),o(31,"i",17),n(32,"Back "),e()()(),t(33,"div",18)(34,"h2"),n(35," About\xA0\xA0 "),t(36,"span"),n(37),e()(),t(38,"p",19),n(39),e(),t(40,"h3"),n(41,"Interests"),e(),t(42,"ul",20)(43,"li"),n(44," Programming "),t(45,"div",21),o(46,"div",22),e()(),t(47,"li"),n(48," Gaming "),t(49,"div",21),o(50,"div",22),e()(),t(51,"li"),n(52," Nutrition "),t(53,"div",21),o(54,"div",22),e()(),t(55,"li"),n(56," Photography "),t(57,"div",21),o(58,"div",22),e()()(),t(59,"h3"),n(60,"Social Media"),e(),t(61,"div",23)(62,"a",24),o(63,"i",25),e(),t(64,"a"),o(65,"i",26),e(),t(66,"a"),o(67,"i",27),e(),t(68,"a",28),o(69,"i",29),e()()()()}if(s&2){let r=a.ngIf;i(5),_("src",r.avatar,b),i(3),k("",r.first_name," ",r.last_name,""),i(4),P(r.id),i(4),P(r.email),i(21),C(" ",r.first_name,""),i(2),C(" ",r.first_name," is a software engineer with a passion for developing innovative solutions. His expertise lies in optimizing performance and contributing to the effectiveness of the organizations he works with. "),i(7),d("width","95%"),i(4),d("width","50%"),i(4),d("width","80%"),i(4),d("width","30%")}}var X=(()=>{let a=class a{constructor(g,c,p){this.activeRoute=g,this.store=c,this.router=p,this.idSubscription=this.activeRoute.params.pipe(x(l=>l.id)).subscribe(l=>{this.id=l,this.store.dispatch($({ID:+this.id}))})}ngOnInit(){this.searchedUser$=this.store.select(R),this.status$=this.store.select(T)}goBack(){this.router.navigateByUrl("/Friends")}ngOnDestroy(){this.idSubscription.unsubscribe(),this.store.dispatch(q())}};a.\u0275fac=function(c){return new(c||a)(m(U),m(B),m(j))},a.\u0275cmp=f({type:a,selectors:[["app-user-details"]],standalone:!0,features:[E],decls:5,vars:6,consts:[[1,"all"],["mode","indeterminate",4,"ngIf"],["class","container user-details",4,"ngIf"],["mode","indeterminate"],[1,"container","user-details"],[1,"main-part"],[1,"image-content"],[1,"overlay"],[1,"card-image"],["alt","User image",3,"src"],[1,"user-info"],[1,"user-name"],[1,"user-id"],[1,"orange"],[1,"user-email"],[1,"additional-details"],["aria-label","Go back to user list",1,"btn",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"extra-info"],[1,"user-bio"],[1,"user-interests"],[1,"bar"],[1,"skill"],[1,"social-links"],["href","https://www.linkedin.com/in/mohamed-hazem-dev/","target","_blank"],[1,"fa-brands","fa-linkedin"],[1,"fa-brands","fa-square-facebook"],[1,"fa-brands","fa-square-twitter"],["href","https://github.com/Mohamed-Hazem-projects","target","_blank"],[1,"fa-brands","fa-square-github"]],template:function(c,p){if(c&1&&(t(0,"div",0),u(1,F,1,0,"mat-progress-bar",1),M(2,"async"),u(3,N,70,15,"div",2),M(4,"async"),e()),c&2){let l;i(),_("ngIf",O(2,2,p.status$)=="loading"),i(2),_("ngIf",(l=O(4,4,p.searchedUser$))==null?null:l.data)}},dependencies:[D,I,z,A],styles:['.all[_ngcontent-%COMP%]{min-height:calc(100vh - 91px);display:flex}.user-details[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:auto;gap:20px;padding:20px}@media (max-width: 767px){.user-details[_ngcontent-%COMP%]{padding:15px}}@media (max-width: 990px){.user-details[_ngcontent-%COMP%]{flex-wrap:wrap}}.user-details[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:var(--whitetemp);box-shadow:0 4px 8px #0000001a;border-radius:10px;min-height:450px}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]{display:flex;flex:1;border-radius:25px 10px 10px 25px}@media (max-width: 990px){.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]{flex-direction:column;border-radius:25px 25px 10px 10px}}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{padding:30px}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{padding:20px;min-width:275px;text-align:center}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin-bottom:10px;color:var(--blue2)}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-id[_ngcontent-%COMP%], .user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]{font-size:17px;margin-bottom:5px}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-id[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%], .user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%]{color:var(--orange);font-weight:700}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .additional-details[_ngcontent-%COMP%]{margin-top:20px;text-align:left}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .additional-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:8px}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;row-gap:15px}@media (max-width: 767px){.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{row-gap:5px}}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]{position:relative;height:150px;width:150px;border-radius:50%;background-color:var(--greylight2);padding:3px}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;border-radius:50%;border:4px solid var(--blue2)}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:var(--blue2);border-radius:25px 0 25px 25px}@media (max-width: 990px){.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{border-radius:25px 25px 0}}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:before, .user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:after{content:"";position:absolute;right:-40px;height:40px;width:40px;background-color:var(--blue2)}@media (max-width: 990px){.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:before, .user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:after{right:0;bottom:-40px}}.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:after{border-radius:25px 0 0;background-color:var(--whitetemp)}@media (max-width: 990px){.user-details[_ngcontent-%COMP%]   .main-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]:after{border-radius:0 25px 0 0}}.user-details[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;flex-direction:column;justify-content:space-evenly}.user-details[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:500;margin-bottom:10px;text-align:center;display:flex;border-bottom:3px solid var(--blue2)}.user-details[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--blue);font-weight:700}.user-details[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]   .user-bio[_ngcontent-%COMP%]{font-size:14px;text-align:center}.user-details[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.user-details[_ngcontent-%COMP%]   .user-interests[_ngcontent-%COMP%]{margin:0;align-self:flex-start;width:100%}.user-details[_ngcontent-%COMP%]   .user-interests[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;margin-bottom:5px;padding:0 10px;display:flex;align-items:center;justify-content:space-between}.user-details[_ngcontent-%COMP%]   .user-interests[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:var(--background);border-radius:15px;width:60%;height:10px;margin-left:5px}.user-details[_ngcontent-%COMP%]   .user-interests[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]{background-color:var(--blue2);border-radius:15px;height:10px}.user-details[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{text-align:center}.user-details[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin:0 10px}.user-details[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;color:#0073e6;text-decoration:none;cursor:pointer}@media (max-width: 480px){.user-name[_ngcontent-%COMP%]{font-size:26px}.user-id[_ngcontent-%COMP%], .user-email[_ngcontent-%COMP%]{font-size:14px}.additional-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .user-bio[_ngcontent-%COMP%], .user-interests[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px}}.btn[_ngcontent-%COMP%]{padding:6px 12px;background-color:#ff6961d1;border:none;color:#fff;font-size:20px;font-weight:700;border-radius:10px;margin-top:10px;cursor:pointer;transition:background-color .3s;display:flex;align-items:center}.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;margin-right:4px;font-size:19px}.btn[_ngcontent-%COMP%]:hover{background-color:#f44034}']});let s=a;return s})();export{X as UserDetailsComponent};
