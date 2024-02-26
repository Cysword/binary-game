import{r as U,s as A,a as j,d as R,o as D,c as B,b as me,w as ae,e as Q,u as m,f as x,_ as F,g as Ue,t as H,h as Ce,i as Ve,v as je,n as de,j as Ge,k as Me,l as Ye,F as $e,m as Ie,p as P,q,x as Le,y as he}from"./index-By7hHe-i.js";import{u as X,g as W,B as pe,a as He,b as Ne}from"./Button-DJbLl46T.js";var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function We(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ke={exports:{}};(function(l,i){(function(c,u){l.exports=u()})(Ee,function(){var c=1e3,u=6e4,p=36e5,M="millisecond",v="second",y="minute",h="hour",w="day",T="week",g="month",G="quarter",C="year",N="date",ve="Invalid Date",De=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Te=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Oe={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],e=s%100;return"["+s+(r[(e-20)%10]||r[e]||r[0])+"]"}},oe=function(s,r,e){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(e)+s},Be={s:oe,z:function(s){var r=-s.utcOffset(),e=Math.abs(r),n=Math.floor(e/60),t=e%60;return(r<=0?"+":"-")+oe(n,2,"0")+":"+oe(t,2,"0")},m:function s(r,e){if(r.date()<e.date())return-s(e,r);var n=12*(e.year()-r.year())+(e.month()-r.month()),t=r.clone().add(n,g),a=e-t<0,o=r.clone().add(n+(a?-1:1),g);return+(-(n+(e-t)/(a?t-o:o-t))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:g,y:C,w:T,d:w,D:N,h,m:y,s:v,ms:M,Q:G}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},z="en",Y={};Y[z]=Oe;var ye="$isDayjsObject",ie=function(s){return s instanceof re||!(!s||!s[ye])},te=function s(r,e,n){var t;if(!r)return z;if(typeof r=="string"){var a=r.toLowerCase();Y[a]&&(t=a),e&&(Y[a]=e,t=a);var o=r.split("-");if(!t&&o.length>1)return s(o[0])}else{var d=r.name;Y[d]=r,t=d}return!n&&t&&(z=t),t||!n&&z},$=function(s,r){if(ie(s))return s.clone();var e=typeof r=="object"?r:{};return e.date=s,e.args=arguments,new re(e)},f=Be;f.l=te,f.i=ie,f.w=function(s,r){return $(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var re=function(){function s(e){this.$L=te(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ye]=!0}var r=s.prototype;return r.parse=function(e){this.$d=function(n){var t=n.date,a=n.utc;if(t===null)return new Date(NaN);if(f.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var o=t.match(De);if(o){var d=o[2]-1||0,_=(o[7]||"0").substring(0,3);return a?new Date(Date.UTC(o[1],d,o[3]||1,o[4]||0,o[5]||0,o[6]||0,_)):new Date(o[1],d,o[3]||1,o[4]||0,o[5]||0,o[6]||0,_)}}return new Date(t)}(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return f},r.isValid=function(){return this.$d.toString()!==ve},r.isSame=function(e,n){var t=$(e);return this.startOf(n)<=t&&t<=this.endOf(n)},r.isAfter=function(e,n){return $(e)<this.startOf(n)},r.isBefore=function(e,n){return this.endOf(n)<$(e)},r.$g=function(e,n,t){return f.u(e)?this[n]:this.set(t,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,n){var t=this,a=!!f.u(n)||n,o=f.p(e),d=function(L,k){var V=f.w(t.$u?Date.UTC(t.$y,k,L):new Date(t.$y,k,L),t);return a?V:V.endOf(w)},_=function(L,k){return f.w(t.toDate()[L].apply(t.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(k)),t)},S=this.$W,b=this.$M,O=this.$D,E="set"+(this.$u?"UTC":"");switch(o){case C:return a?d(1,0):d(31,11);case g:return a?d(1,b):d(0,b+1);case T:var I=this.$locale().weekStart||0,J=(S<I?S+7:S)-I;return d(a?O-J:O+(6-J),b);case w:case N:return _(E+"Hours",0);case h:return _(E+"Minutes",1);case y:return _(E+"Seconds",2);case v:return _(E+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,n){var t,a=f.p(e),o="set"+(this.$u?"UTC":""),d=(t={},t[w]=o+"Date",t[N]=o+"Date",t[g]=o+"Month",t[C]=o+"FullYear",t[h]=o+"Hours",t[y]=o+"Minutes",t[v]=o+"Seconds",t[M]=o+"Milliseconds",t)[a],_=a===w?this.$D+(n-this.$W):n;if(a===g||a===C){var S=this.clone().set(N,1);S.$d[d](_),S.init(),this.$d=S.set(N,Math.min(this.$D,S.daysInMonth())).$d}else d&&this.$d[d](_);return this.init(),this},r.set=function(e,n){return this.clone().$set(e,n)},r.get=function(e){return this[f.p(e)]()},r.add=function(e,n){var t,a=this;e=Number(e);var o=f.p(n),d=function(b){var O=$(a);return f.w(O.date(O.date()+Math.round(b*e)),a)};if(o===g)return this.set(g,this.$M+e);if(o===C)return this.set(C,this.$y+e);if(o===w)return d(1);if(o===T)return d(7);var _=(t={},t[y]=u,t[h]=p,t[v]=c,t)[o]||1,S=this.$d.getTime()+e*_;return f.w(S,this)},r.subtract=function(e,n){return this.add(-1*e,n)},r.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||ve;var a=e||"YYYY-MM-DDTHH:mm:ssZ",o=f.z(this),d=this.$H,_=this.$m,S=this.$M,b=t.weekdays,O=t.months,E=t.meridiem,I=function(k,V,K,ne){return k&&(k[V]||k(n,a))||K[V].slice(0,ne)},J=function(k){return f.s(d%12||12,k,"0")},L=E||function(k,V,K){var ne=k<12?"AM":"PM";return K?ne.toLowerCase():ne};return a.replace(Te,function(k,V){return V||function(K){switch(K){case"YY":return String(n.$y).slice(-2);case"YYYY":return f.s(n.$y,4,"0");case"M":return S+1;case"MM":return f.s(S+1,2,"0");case"MMM":return I(t.monthsShort,S,O,3);case"MMMM":return I(O,S);case"D":return n.$D;case"DD":return f.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return I(t.weekdaysMin,n.$W,b,2);case"ddd":return I(t.weekdaysShort,n.$W,b,3);case"dddd":return b[n.$W];case"H":return String(d);case"HH":return f.s(d,2,"0");case"h":return J(1);case"hh":return J(2);case"a":return L(d,_,!0);case"A":return L(d,_,!1);case"m":return String(_);case"mm":return f.s(_,2,"0");case"s":return String(n.$s);case"ss":return f.s(n.$s,2,"0");case"SSS":return f.s(n.$ms,3,"0");case"Z":return o}return null}(k)||o.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,n,t){var a,o=this,d=f.p(n),_=$(e),S=(_.utcOffset()-this.utcOffset())*u,b=this-_,O=function(){return f.m(o,_)};switch(d){case C:a=O()/12;break;case g:a=O();break;case G:a=O()/3;break;case T:a=(b-S)/6048e5;break;case w:a=(b-S)/864e5;break;case h:a=b/p;break;case y:a=b/u;break;case v:a=b/c;break;default:a=b}return t?a:f.a(a)},r.daysInMonth=function(){return this.endOf(g).$D},r.$locale=function(){return Y[this.$L]},r.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),a=te(e,n,!0);return a&&(t.$L=a),t},r.clone=function(){return f.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),ge=re.prototype;return $.prototype=ge,[["$ms",M],["$s",v],["$m",y],["$H",h],["$W",w],["$M",g],["$y",C],["$D",N]].forEach(function(s){ge[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),$.extend=function(s,r){return s.$i||(s(r,re,$),s.$i=!0),$},$.locale=te,$.isDayjs=ie,$.unix=function(s){return $(1e3*s)},$.en=Y[z],$.Ls=Y,$.p={},$})})(ke);var Ae=ke.exports;const Se=We(Ae),ce=U(),ue=U(!1),Re=U(),we=U("00:00"),Z=U(),le=U(!1),Fe=1e3;function ee(){const l=X(),{gameTime:i}=A(l),c=h=>h.toString().padStart(2,"0"),u=()=>W(Z)?W(Z).diff(Se(),"seconds"):0,p=()=>{const h=u(),w=Math.floor(h/60),T=h%60;we.value=`${w}:${c(T)}`},M=()=>{ue.value=!1,p(),ce.value=setInterval(()=>{p()},Fe),ce.value=setInterval(()=>{y()},W(i))},v=()=>{le.value=!0,Z.value=Se().add(W(i),"ms"),M()},y=()=>{ue.value=!0,le.value=!1,Z.value=null,clearInterval(ce.value),clearInterval(Re.value)};return{timerRunning:j(le),end:j(Z),timeLeft:j(we),gameEnded:j(ue),startTimer:v,stopTimer:y}}const ze={class:"w-full flex flex-col p-4 max-w-xl"},Je=x("h1",{class:"mb-8 text-3xl"},"Binary game",-1),Ke=x("p",{class:"mb-8 text-xl"}," Try to guess the binary number with the switches. You can also use the keyboard to change the switches. ",-1),Ze=R({__name:"StartScreen",setup(l){const{startTimer:i}=ee();return(c,u)=>(D(),B("div",ze,[Je,Ke,me(pe,{onClick:m(i),class:"self-center text-xl"},{default:ae(()=>[Q(" Start ")]),_:1},8,["onClick"])]))}}),Pe=F(Ze,[["__file","/Users/remcohorters/projects/binary/src/Views/Game/StartScreen.vue"]]),qe=Ue("score",()=>{const l=U(0),i=He("highScore",0),c=u=>{l.value=u,u>i.value&&(i.value=u)};return{score:j(l),highScore:j(i),setScore:c}});function xe(){const l=qe(),{score:i,highScore:c}=A(l),u=()=>{l.setScore(i.value+1)};return{score:j(i),highScore:j(c),incrementScore:u}}const Qe={class:"mb-4"},Xe=x("h1",null,"Game over",-1),et=R({__name:"ScoreScreen",setup(l){const{score:i,highScore:c}=xe(),{startTimer:u}=ee();return(p,M)=>(D(),B("div",null,[x("div",Qe,[Xe,x("h2",null,"Your score: "+H(m(i)),1),x("h2",null,"Your high score: "+H(m(c)),1)]),me(pe,{onClick:m(u)},{default:ae(()=>[Q(" Restart ")]),_:1},8,["onClick"])]))}}),tt=F(et,[["__file","/Users/remcohorters/projects/binary/src/Views/Game/ScoreScreen.vue"]]),be=l=>{const i=l.split("");let c=0;return i.forEach((u,p)=>{const M=Math.pow(2,p);c+=parseInt(u)*M}),c},rt=R({__name:"Switch",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(l){const i=Ce(l,"modelValue",{get:c=>c==="1"});return(c,u)=>(D(),B("div",null,[x("label",{class:de(["p-4 flex rounded-full items-center justify-center leading-none text-xl",{"bg-green-300":i.value,"bg-red-900":!i.value}])},[Ve(x("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>i.value=p),type:"checkbox",class:"appearance-none"},null,512),[[je,i.value]]),x("span",{class:de(["font-bold",{"text-green-800":i.value,"text-red-300":!i.value}])},[Ge(c.$slots,"default")],2)],2)]))}}),nt=F(rt,[["__file","/Users/remcohorters/projects/binary/src/Components/Switch/Switch.vue"]]),st=l=>{let i="";for(let c=0;c<l;c++)i+=Math.floor(Math.random()*2);return i},fe=U(""),se=U("");function _e(){const l=X(),{amountOfBits:i}=A(l),c=()=>{se.value="0".repeat(W(i))},u=()=>{const v=st(W(i));v===fe.value?u():fe.value=v,c()},p=Me(()=>se.value.split(""));return{binaryTarget:fe,userBinary:se,splitUserBinary:p,generateBinaryTarget:u,generateUserBinary:c,updateUserBinary:(v,y)=>{const h=p.value;h[y]=v?"1":"0",se.value=h.join("")}}}const at=R({__name:"SwitchGroup",setup(l){Ye(h=>({"df3af78f-gridRows":y.value}));const i=X(),{showSwitchValues:c,amountOfBits:u,reversedOrder:p}=A(i),{splitUserBinary:M,updateUserBinary:v}=_e(),y=Me(()=>Math.min(u.value,4));return(h,w)=>(D(),B("div",{class:de(["grid grid-container w-full",{rtl:m(p)}])},[m(u)?(D(!0),B($e,{key:0},Ie(m(u),(T,g)=>(D(),q(nt,{class:"w-full",key:g,checked:m(M)[g],"model-value":m(M)[g],"onUpdate:modelValue":G=>m(v)(G,g)},{default:ae(()=>[m(c)?(D(),B($e,{key:0},[Q(H(Math.pow(2,g)),1)],64)):P("v-if",!0)]),_:2},1032,["checked","model-value","onUpdate:modelValue"]))),128)):P("v-if",!0)],2))}}),ot=F(at,[["__scopeId","data-v-df3af78f"],["__file","/Users/remcohorters/projects/binary/src/Components/SwitchGroup/SwitchGroup.vue"]]),it={class:"p-4"},ct={class:"w-full text-center"},ut={class:"text-3xl mb-2 block"},lt={key:0,class:"text-xl"},ft={class:"text-yellow-500 font-bold"},dt={class:"text-center flex justify-center flex-col"},ht={key:0,class:"mb-2"},mt=R({__name:"GameScreen",setup(l){const i=X(),{showUserScore:c,allowSkips:u}=A(i),{score:p,incrementScore:M}=xe(),{timeLeft:v}=ee(),{binaryTarget:y,userBinary:h,generateUserBinary:w,generateBinaryTarget:T}=_e();return Le(()=>{T(),w()}),he(h,()=>{h.value===y.value&&(M(),T())}),(g,G)=>(D(),B("div",it,[x("div",ct,[x("strong",ut,H(m(v)),1),m(y)?(D(),B("p",lt,[Q(" Target: "),x("span",ft,H(m(be)(m(y))),1)])):P("v-if",!0)]),me(ot,{class:"my-8"}),x("div",dt,[x("strong",null,"Score: "+H(m(p)),1),m(c)?(D(),B("h3",ht,"Your input: "+H(m(be)(m(h))),1)):P("v-if",!0),m(u)?(D(),q(pe,{key:1,onClick:m(T),class:"bg-yellow-500"},{default:ae(()=>[Q(" Skip ")]),_:1},8,["onClick"])):P("v-if",!0)])]))}}),pt=F(mt,[["__file","/Users/remcohorters/projects/binary/src/Views/Game/GameScreen.vue"]]);function _t(){const{updateUserBinary:l,splitUserBinary:i}=_e(),c=X(),{keybindings:u}=A(c),p=Ne();u.value.map(h=>p[h]).forEach((h,w)=>{he(h,T=>{if(!T)return;const G=i.value[w]==="0";l(G,w)})});const{startTimer:v,timerRunning:y}=ee();he([p.space,p.enter],()=>{y.value||v()})}const vt=R({__name:"GameIndex",setup(l){const{timerRunning:i,gameEnded:c}=ee();return _t(),(u,p)=>!m(i)&&!m(c)?(D(),q(Pe,{key:0})):m(c)?(D(),q(tt,{key:1})):(D(),q(pt,{key:2}))}}),$t=F(vt,[["__file","/Users/remcohorters/projects/binary/src/Views/Game/GameIndex.vue"]]);export{$t as default};