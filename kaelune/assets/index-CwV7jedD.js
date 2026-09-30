var $g=Object.defineProperty;var Zg=(r,e,t)=>e in r?$g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Je=(r,e,t)=>Zg(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ar(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},_f,Mn,Bt,Ti=1e8,Dt=1/Ti,Ku=Math.PI*2,Kg=Ku/4,Jg=0,Pm=Math.sqrt,Qg=Math.cos,jg=Math.sin,vn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},pr=function(e){return typeof e=="number"},vf=function(e){return typeof e>"u"},Ji=function(e){return typeof e=="object"},Zn=function(e){return e!==!1},xf=function(){return typeof window<"u"},Jo=function(e){return Xt(e)||vn(e)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,e_=/random\([^)]+\)/g,t_=/,\s*/g,Td=/(?:-?\.?\d|\.)+/gi,Dm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Im=/[+-]=-?[.\d]+/,n_=/[^,'"\[\]\s]+/gi,i_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,ki,Ju,Sf,gi={},fc={},Nm,Um=function(e){return(fc=ba(e,gi))&&jn},Mf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Co=function(e,t){return!t&&console.warn(e)},Fm=function(e,t){return e&&(gi[e]=t)&&fc&&(fc[e]=t)||gi},Ro=function(){return 0},r_={suppressEvents:!0,isStart:!0,kill:!1},$l={suppressEvents:!0,kill:!1},s_={suppressEvents:!0},yf={},Fr=[],Qu={},Om,ri={},Yc={},Ed=30,Zl=[],bf="",Tf=function(e){var t=e[0],n,i;if(Ji(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zl.length;i--&&!Zl[i].targetTest(t););n=Zl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new s0(e[i],n)))||e.splice(i,1);return e},as=function(e){return e._gsap||Tf(Ei(e))[0]._gsap},Bm=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():vf(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},pa=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},a_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},dc=function(){var e=Fr.length,t=Fr.slice(0),n,i;for(Qu={},Fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ef=function(e){return!!(e._initted||e._startAt||e.add)},zm=function(e,t,n,i){Fr.length&&!Mn&&dc(),e.render(t,n,!!(Mn&&t<0&&Ef(e))),Fr.length&&!Mn&&dc()},km=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(n_).length<2?t:vn(e)?e.trim():e},Vm=function(e){return e},_i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},o_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ba=function(e,t){for(var n in t)e[n]=t[n];return e},wd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ji(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},pc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},uo=function(e){var t=e.parent||kt,n=e.keyframes?o_(Ln(e.keyframes)):_i;if(Zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},l_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Hm=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Fc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},os=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},c_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ju=function(e,t,n,i){return e._startAt&&(Mn?e._startAt.revert($l):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},u_=function r(e){return!e||e._ts&&r(e.parent)},Ad=function(e){return e._repeat?Ta(e._tTime,e=e.duration()+e._rDelay)*e:0},Ta=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},mc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Oc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},Bc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Oc(e),n._dirty||os(n,e)),e},Gm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=mc(e.rawTime(),t),(!t._dur||Zo(0,t.totalDuration(),n)-t._tTime>Dt)&&t.render(n,!0)),os(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Dt}},Gi=function(e,t,n,i){return t.parent&&zr(t),t._start=zt((pr(n)?n:n||e!==kt?Mi(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hm(e,t,"_first","_last",e._sort?"_start":0),eh(t)||(e._recent=t),i||Gm(e,t),e._ts<0&&Bc(e,e._tTime),e},Wm=function(e,t){return(gi.ScrollTrigger||Mf("scrollTrigger",t))&&gi.ScrollTrigger.create(t,e)},Xm=function(e,t,n,i,s){if(Af(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Om!==li.frame)return Fr.push(e),e._lazy=[s,i],1},h_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},eh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},f_=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&h_(e)&&!(!e._initted&&eh(e))||(e._ts<0||e._dp._ts<0)&&!eh(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Zo(0,e._tDur,t),u=Ta(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ta(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Mn||i||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&Xm(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Dt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ju(e,t,n,!0),e._onUpdate&&!n&&fi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&fi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&zr(e,1),!n&&!Mn&&(fi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},d_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ea=function(e,t,n,i){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Bc(e,e._tTime=e._tDur*o),e.parent&&Oc(e),n||os(e.parent,e),e},Cd=function(e){return e instanceof $n?os(e):Ea(e,e._dur)},p_={_start:0,endTime:Ro,totalDuration:Ro},Mi=function r(e,t,n){var i=e.labels,s=e._recent||p_,a=e.duration()>=Ti?s.endTime(!1):e._dur,o,l,c;return vn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ln(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ho=function(e,t,n){var i=pr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;a.immediateRender=Zn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new rn(t[0],a,t[s+1])},Gr=function(e,t){return e||e===0?t(e):t},Zo=function(e,t,n){return n<e?e:n>t?t:n},Cn=function(e,t){return!vn(e)||!(t=i_.exec(e))?"":t[1]},m_=function(e,t,n){return Gr(n,function(i){return Zo(e,t,i)})},th=[].slice,qm=function(e,t){return e&&Ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ji(e[0]))&&!e.nodeType&&e!==ki},g_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return vn(i)&&!t||qm(i,1)?(s=n).push.apply(s,Ei(i)):n.push(i)})||n},Ei=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):vn(e)&&!n&&(Ju||!wa())?th.call((t||Sf).querySelectorAll(e),0):Ln(e)?g_(e,n):qm(e)?th.call(e,0):e?[e]:[]},nh=function(e){return e=Ei(e)[0]||Co("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ei(t,n.querySelectorAll?n:n===e?Co("Invalid scope")||Sf.createElement("div"):e)}},Ym=function(e){return e.sort(function(){return .5-Math.random()})},$m=function(e){if(Xt(e))return e;var t=Ji(e)?e:{each:e},n=ls(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return vn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,p){var _=(p||t).length,m=a[_],g,M,T,v,y,w,E,x,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!b){for(E=-Ti;E<(E=p[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=a[_]=[],g=l?Math.min(b,_)*u-.5:i%b,M=b===Ti?0:l?_*d/b-.5:i/b|0,E=0,x=Ti,w=0;w<_;w++)T=w%b-g,v=M-(w/b|0),m[w]=y=c?Math.abs(c==="y"?v:T):Pm(T*T+v*v),y>E&&(E=y),y<x&&(x=y);i==="random"&&Ym(m),m.max=E-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Cn(t.amount||t.each)||0,n=n&&_<0?R_(n):n}return _=(m[h]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},ih=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(pr(n)?0:Cn(n))}},Zm=function(e,t){var n=Ln(e),i,s;return!n&&Ji(e)&&(i=n=e.radius||Ti,e.values?(e=Ei(e.values),(s=!pr(e[0]))&&(i*=i)):e=ih(e.increment)),Gr(t,n?Xt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||pr(a)?u:u+Cn(a)}:ih(e))},Km=function(e,t,n,i){return Gr(Ln(e)?!t:n===!0?!!(n=0):!i,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},__=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},v_=function(e,t){return function(n){return e(parseFloat(n))+(t||Cn(n))}},x_=function(e,t,n){return Qm(e,t,0,1,n)},Jm=function(e,t,n){return Gr(n,function(i){return e[~~t(i)]})},S_=function r(e,t,n){var i=t-e;return Ln(e)?Jm(e,r(0,e.length),t):Gr(n,function(s){return(i+(s-e)%i)%i+e})},M_=function r(e,t,n){var i=t-e,s=i*2;return Ln(e)?Jm(e,r(0,e.length-1),t):Gr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Po=function(e){return e.replace(e_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(t_);return Km(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qm=function(e,t,n,i,s){var a=t-e,o=i-n;return Gr(s,function(l){return n+((l-e)/a*o||0)})},y_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=vn(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=ba(Ln(e)?[]:{},e));if(!u){for(l in t)wf.call(o,e,l,"get",t[l]);s=function(p){return Pf(p,o)||(a?e.p:e)}}}return Gr(n,s)},Rd=function(e,t,n){var i=e.labels,s=Ti,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},fi=function(e,t,n){var i=e.vars,s=i[t],a=Bt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Fr.length&&dc(),o&&(Bt=o),u=l?s.apply(c,l):s.call(c),Bt=a,u},Qa=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&fi(e,"onInterrupt"),e},la,jm=[],e0=function(e){if(e)if(e=!e.name&&e.default||e,xf()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ro,render:Pf,add:wf,kill:z_,modifier:B_,rawVars:0},a={targetTest:0,get:0,getSetter:Rf,aliases:{},register:0};if(wa(),e!==i){if(ri[t])return;_i(i,_i(pc(e,s),a)),ba(i.prototype,ba(s,pc(e,a))),ri[i.prop=t]=i,e.targetTest&&(Zl.push(i),yf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fm(t,i),e.register&&e.register(jn,i,Jn)}else jm.push(e)},Lt=255,ja={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},$c=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},t0=function(e,t,n){var i=e?pr(e)?[e>>16,e>>8&Lt,e&Lt]:0:ja.black,s,a,o,l,c,u,d,h,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ja[e])i=ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Td),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=$c(l+1/3,s,a),i[1]=$c(l,s,a),i[2]=$c(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Dm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Td)||ja.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Lt,a=i[1]/Lt,o=i[2]/Lt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},n0=function(e){var t=[],n=[],i=-1;return e.split(Or).forEach(function(s){var a=s.match(oa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Pd=function(e,t,n){var i="",s=(e+i).match(Or),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=t0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=n0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Or,"1").split(oa),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Or),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Or=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ja)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),b_=/hsl[a]?\(/,i0=function(e){var t=e.join(" "),n;if(Or.lastIndex=0,Or.test(t))return n=b_.test(t),e[1]=Pd(e[1],n),e[0]=Pd(e[0],n,n0(e[1])),!0},Lo,li=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,p=function _(m){var g=r()-i,M=m===!0,T,v,y,w;if((g>e||g<0)&&(n+=g-t),i+=g,y=i-n,T=y-a,(T>0||M)&&(w=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,a+=T+(T>=s?4:s-T),v=1),M||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](y,h,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Nm&&(!Ju&&xf()&&(ki=Ju=window,Sf=ki.document||{},gi.gsap=jn,(ki.gsapVersions||(ki.gsapVersions=[])).push(jn.version),Um(fc||ki.GreenSockGlobals||!ki.gsap&&ki||{}),jm.forEach(e0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Lo=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Lo=0,c=Ro},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,g,M){var T=g?function(v,y,w,E){m(v,y,w,E),d.remove(T)}:m;return d.remove(m),o[M?"unshift":"push"](T),wa(),T},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d})(),wa=function(){return!Lo&&li.wake()},_t={},T_=/^[\d.\-M][\d.\-,\s]/,E_=/["']/g,w_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(E_,"").trim():+c,i=l.substr(o+1).trim();return t},A_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},C_=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[w_(t[1])]:A_(e).split(",").map(km)):_t._CE&&T_.test(e)?_t._CE("",e):n},R_=function(e){return function(t){return 1-e(1-t)}},ls=function(e,t){return e&&(Xt(e)?e:_t[e]||C_(e))||t},Ms=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Kn(e,function(o){_t[o]=gi[o]=s,_t[a=o.toLowerCase()]=n;for(var l in s)_t[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[o+"."+l]=s[l]}),s},r0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ku*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*jg((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:r0(o);return s=Ku/s,l.config=function(c,u){return r(e,c,u)},l},Kc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:r0(n);return i.config=function(s){return r(e,s)},i};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ms(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Ms("Elastic",Zc("in"),Zc("out"),Zc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ms("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ms("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ms("Circ",function(r){return-(Pm(1-r*r)-1)});Ms("Sine",function(r){return r===1?1:-Qg(r*Kg)+1});Ms("Back",Kc("in"),Kc("out"),Kc());_t.SteppedEase=_t.steps=gi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Dt;return function(o){return((i*Zo(0,a,o)|0)+s)*n}}};Ao.ease=_t["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return bf+=r+","+r+"Params,"});var s0=function(e,t){this.id=Jg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Bm,this.set=t?t.getSetter:Rf},Do=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ea(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Lo||li.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bc(this,n),!s._dp||s.parent||Gm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ad(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ad(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ta(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?mc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Dt?0:this._rts,this.totalTime(Zo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Oc(this),c_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=s_);var i=Mn;return Mn=n,Ef(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mi(this,n),Zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-Dt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Dt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Xt(n)?n:Vm,l=function(){var u=i.then;i.then=null,s&&s(),Xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Qa(this)},r})();_i(Do.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var $n=(function(r){Rm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zn(n.sortChildren),kt&&Gi(n.parent||kt,ar(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Wm(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ho(0,arguments,this),this},t.from=function(i,s,a){return ho(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ho(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,uo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(i,s,Mi(this,a),1),this},t.call=function(i,s,a){return Gi(this,rn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new rn(i,a,Mi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,uo(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,uo(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,p,_,m,g,M,T,v,y,w,E;if(this!==kt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,T=this._ts,g=!T,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=zt(u%m),u===l?(_=this._repeat,h=c):(y=zt(u/m),_=~~y,_&&_===y&&(h=c,_--),h>c&&(h=c)),y=Ta(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),w&&_&1&&(h=c-h,E=1),_!==y&&!this._lock){var x=w&&y&1,b=x===(w&&_&1);if(_<y&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(E?0:zt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&fi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=d_(this,zt(o),zt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!y&&(fi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!g){M=0,p&&(u+=this._zTime=-Dt);break}}f=p}else{f=this._last;for(var C=i<0?i:h;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||Mn&&Ef(f)),h!==this._time||!this._ts&&!g){M=0,p&&(u+=this._zTime=C?-Dt:Dt);break}}f=p}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-Dt)._zTime=h>=o?1:-1,this._ts))return this._start=v,Oc(this),this.render(i,s,a);this._onUpdate&&!s&&fi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(fi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(pr(s)||(s=Mi(this,s,i)),!(i instanceof Do)){if(Ln(i))return i.forEach(function(o){return a.add(o,s)}),this;if(vn(i))return this.addLabel(i,s);if(Xt(i))i=rn.delayedCall(0,i);else return this}return this!==i?Gi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof rn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return vn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&Fc(this,i),i===this._recent&&(this._recent=this._last),os(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Mi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=rn.delayedCall(0,s||Ro,a);return o.data="isPause",this._hasPause=1,Gi(this,o,Mi(this,i))},t.removePause=function(i){var s=this._first;for(i=Mi(this,i);s;)s._start===i&&s.data==="isPause"&&zr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Pr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ei(i),l=this._first,c=pr(s),u;l;)l instanceof rn?a_(l._targets,o)&&(c?(!Pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Mi(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,p=rn.to(a,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Dt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&Ea(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,d||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,_i({startAt:{time:Mi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Rd(this,Mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Rd(this,Mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=zt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return os(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),os(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ti,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=zt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ea(a,a===kt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(kt._ts&&(zm(kt,mc(i,kt)),Om=li.frame),li.frame>=Ed){Ed+=pi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&pi.autoSleep&&li._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||li.sleep()}}},e})(Do);_i($n.prototype,{_lock:0,_hasPause:0,_forcing:0});var P_=function(e,t,n,i,s,a,o){var l=new Jn(this._pt,e,t,0,1,h0,null,s),c=0,u=0,d,h,f,p,_,m,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Po(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(qc)||[];d=qc.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?pa(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=qc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Im.test(i)||g)&&(l.e=0),this._pt=l,l},wf=function(e,t,n,i,s,a,o,l,c,u){Xt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Xt(d)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Xt(d)?c?U_:c0:Cf,p;if(vn(i)&&(~i.indexOf("random(")&&(i=Po(i)),i.charAt(1)==="="&&(p=pa(h,i)+(Cn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||rh)return!isNaN(h*i)&&i!==""?(p=new Jn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?O_:u0,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&Mf(t,i),P_.call(this,e,t,h,i,f,l||pi.stringFilter,c))},L_=function(e,t,n,i,s){if(Xt(e)&&(e=fo(e,s,t,n,i)),!Ji(e)||e.style&&e.nodeType||Ln(e)||Lm(e))return vn(e)?fo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=fo(e[o],s,t,n,i);return a},a0=function(e,t,n,i,s,a){var o,l,c,u;if(ri[e]&&(o=new ri[e]).init(s,o.rawVars?t[e]:L_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Jn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==la))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Pr,rh,Af=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,M=g&&g.data==="nested"?g.vars.targets:m,T=e._overwrite==="auto"&&!_f,v=e.timeline,y=i.easeReverse||d,w,E,x,b,C,D,L,H,N,z,X,B,Q;if(v&&(!h||!s)&&(s="none"),e._ease=ls(s,Ao.ease),e._rEase=y&&(ls(y)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||h&&!i.stagger){if(H=m[0]?as(m[0]).harness:0,B=H&&i[H.prop],w=pc(i,yf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&p?$l:r_),_._lazy=0),a){if(zr(e._startAt=rn.set(m,_i({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return fi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!o&&!f)&&e._startAt.revert($l),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(o=!1),x=_i({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Zn(l),immediateRender:o,stagger:0,parent:g},w),B&&(x[H.prop]=B),zr(e._startAt=rn.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert($l):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Zn(l)||l&&!p,E=0;E<m.length;E++){if(C=m[E],L=C._gsap||Tf(m)[E]._gsap,e._ptLookup[E]=z={},Qu[L.id]&&Fr.length&&dc(),X=M===m?E:M.indexOf(C),H&&(N=new H).init(C,B||w,e,X,M)!==!1&&(e._pt=b=new Jn(e._pt,C,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(W){z[W]=b}),N.priority&&(D=1)),!H||B)for(x in w)ri[x]&&(N=a0(x,w,e,X,C,M))?N.priority&&(D=1):z[x]=b=wf.call(e,C,x,"get",w[x],X,M,0,i.stringFilter);e._op&&e._op[E]&&e.kill(C,e._op[E]),T&&e._pt&&(Pr=e,kt.killTweensOf(C,z,e.globalTime(t)),Q=!e.parent,Pr=0),e._pt&&l&&(Qu[L.id]=1)}D&&f0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,h&&t<=0&&v.render(Ti,!0,!0)},D_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return rh=1,e.vars[t]="+=0",Af(e,o),rh=0,l?Co(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Zt(n)+Cn(d.e)),d.b&&(d.b=u.s+Cn(d.b))},I_=function(e,t){var n=e[0]?as(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ba({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},N_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ln(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},fo=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):vn(e)&&~e.indexOf("random(")?Po(e):e},o0=bf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",l0={};Kn(o0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return l0[r]=1});var rn=(function(r){Rm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:uo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||kt,M=(Ln(n)||Lm(n)?pr(n[0]):"length"in i)?[n]:Ei(n),T,v,y,w,E,x,b,C;if(o._targets=M.length?Tf(M):Co("GSAP target "+n+" not found. https://gsap.com",!pi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||h||Jo(c)||Jo(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(T=o.timeline=new $n({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:M}),T.kill(),T.parent=T._dp=ar(o),T._start=0,h||Jo(c)||Jo(u)){if(w=M.length,b=h&&$m(h),Ji(h))for(E in h)~o0.indexOf(E)&&(C||(C={}),C[E]=h[E]);for(v=0;v<w;v++)y=pc(i,l0),y.stagger=0,D&&(y.easeReverse=D),C&&ba(y,C),x=M[v],y.duration=+fo(c,ar(o),v,x,M),y.delay=(+fo(u,ar(o),v,x,M)||0)-o._delay,!h&&w===1&&y.delay&&(o._delay=u=y.delay,o._start+=u,y.delay=0),T.to(x,y,b?b(v,x,M):0),T._ease=_t.none;T.duration()?c=u=0:o.timeline=0}else if(p){uo(_i(T.vars.defaults,{ease:"none"})),T._ease=ls(p.ease||i.ease||"none");var L=0,H,N,z;if(Ln(p))p.forEach(function(X){return T.to(M,X,">")}),T.duration();else{y={};for(E in p)E==="ease"||E==="easeEach"||N_(E,p[E],y,p.easeEach);for(E in y)for(H=y[E].sort(function(X,B){return X.t-B.t}),L=0,v=0;v<H.length;v++)N=H[v],z={ease:N.e,duration:(N.t-(v?H[v-1].t:0))/100*c},z[E]=N.v,T.to(M,z,L),L+=z.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!_f&&(Pr=ar(o),kt.killTweensOf(M),Pr=0),Gi(g,ar(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===zt(g._time)&&Zn(d)&&u_(ar(o))&&g.data!=="nested")&&(o._tTime=-Dt,o.render(Math.max(0,-u)||0)),m&&Wm(ar(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Dt&&!u?l:i<Dt?0:i,h,f,p,_,m,g,M,T;if(!c)f_(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=zt(d%_),d===l?(p=this._repeat,h=c):(m=zt(d/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(h=c-h),m=Ta(this._tTime,_),h===o&&!a&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(zt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Xm(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=h<o;if(v!==this._inv){var y=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(v?-1:1)/y:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(fi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ju(this,i,s,a),fi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&fi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ju(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&zr(this,1),!s&&!(u&&!o)&&(d||o||g)&&(fi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Lo||li.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Af(this,c),u=this._ease(c/this._dur),D_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Bc(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Pr&&Pr.vars.overwrite!==!0)._first||Qa(this),this.parent&&a!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ei(i):o,c=this._ptLookup,u=this._pt,d,h,f,p,_,m,g;if((!s||s==="all")&&l_(o,l))return s==="all"&&(this._pt=0),Qa(this);for(d=this._op=this._op||[],s!=="all"&&(vn(s)&&(_={},Kn(s,function(M){return _[M]=1}),s=_),s=I_(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(d[g]=s,p=h,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Fc(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Qa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ho(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ho(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return kt.killTweensOf(i,s,a)},e})(Do);_i(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(r){rn[r]=function(){var e=new $n,t=th.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Cf=function(e,t,n){return e[t]=n},c0=function(e,t,n){return e[t](n)},U_=function(e,t,n,i){return e[t](i.fp,n)},F_=function(e,t,n){return e.setAttribute(t,n)},Rf=function(e,t){return Xt(e[t])?c0:vf(e[t])&&e.setAttribute?F_:Cf},u0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},O_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},h0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Pf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},B_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},z_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},k_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},f0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Jn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||u0,this.d=l||this,this.set=c||Cf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=k_,this.m=n,this.mt=s,this.tween=i},r})();Kn(bf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return yf[r]=1});gi.TweenMax=gi.TweenLite=rn;gi.TimelineLite=gi.TimelineMax=$n;kt=new $n({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pi.stringFilter=i0;var cs=[],Kl={},V_=[],Ld=0,H_=0,Jc=function(e){return(Kl[e]||V_).map(function(t){return t()})},sh=function(){var e=Date.now(),t=[];e-Ld>2&&(Jc("matchMediaInit"),cs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ki.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Jc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ld=e,Jc("matchMedia"))},d0=(function(){function r(t,n){this.selector=n&&nh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=H_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var a=this,o=function(){var c=Bt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=nh(s)),Bt=a,d=i.apply(a,arguments),Xt(d)&&a._r.push(d),Bt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof rn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof $n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof rn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=cs.length;a--;)cs[a].id===this.id&&cs.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),G_=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ji(n)||(n={matches:n});var a=new d0(0,s||this.scope),o=a.conditions={},l,c,u;Bt&&!a.selector&&(a.selector=Bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ki.matchMedia(n[c]),l&&(cs.indexOf(a)<0&&cs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(sh):l.addEventListener("change",sh)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),gc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return e0(i)})},timeline:function(e){return new $n(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){vn(e)&&(e=Ei(e)[0]);var s=as(e||{}).get,a=n?Vm:km;return n==="native"&&(n=""),e&&(t?a((ri[t]&&ri[t].get||s)(e,t,n,i)):function(o,l,c){return a((ri[o]&&ri[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ei(e),e.length>1){var i=e.map(function(u){return jn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=ri[t],o=as(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;la._pt=0,d.init(e,n?u+n:u,la,0,[e]),d.render(1,d),la._pt&&Pf(1,la)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=jn.to(e,_i((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ls(e.ease,Ao.ease)),wd(Ao,e||{})},config:function(e){return wd(pi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ri[o]&&!gi[o]&&Co(t+" effect requires "+o+" plugin.")}),Yc[t]=function(o,l,c){return n(Ei(o),_i(l||{},s),c)},a&&($n.prototype[t]=function(o,l,c){return this.add(Yc[t](o,Ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=ls(t)},parseEase:function(e,t){return arguments.length?ls(e,t):_t},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $n(e),i,s;for(n.smoothChildTiming=Zn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof rn&&i.vars.onComplete===i._targets[0]))&&Gi(n,i,i._start-i._delay),i=s;return Gi(kt,n,0),n},context:function(e,t){return e?new d0(e,t):Bt},matchMedia:function(e){return new G_(e)},matchMediaRefresh:function(){return cs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||sh()},addEventListener:function(e,t){var n=Kl[e]||(Kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:S_,wrapYoyo:M_,distribute:$m,random:Km,snap:Zm,normalize:x_,getUnit:Cn,clamp:m_,splitColor:t0,toArray:Ei,selector:nh,mapRange:Qm,pipe:__,unitize:v_,interpolate:y_,shuffle:Ym},install:Um,effects:Yc,ticker:li,updateRoot:$n.updateRoot,plugins:ri,globalTimeline:kt,core:{PropTween:Jn,globals:Fm,Tween:rn,Timeline:$n,Animation:Do,getCache:as,_removeLinkedListItem:Fc,reverting:function(){return Mn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return _f=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return gc[r]=rn[r]});li.add($n.updateRoot);la=gc.to({},{duration:0});var W_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},X_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=W_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Qc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(vn(s)&&(l={},Kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}X_(o,s)}}}},jn=gc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qc("roundProps",ih),Qc("modifiers"),Qc("snap",Zm))||gc;rn.version=$n.version=jn.version="3.15.0";Nm=1;xf()&&wa();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dd,Lr,ma,Lf,ts,Id,Df,q_=function(){return typeof window<"u"},mr={},Jr=180/Math.PI,ga=Math.PI/180,Ls=Math.atan2,Nd=1e8,If=/([A-Z])/g,Y_=/(left|right|width|margin|padding|x)/i,$_=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ah=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Z_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},K_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},J_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Q_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},p0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},m0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},j_=function(e,t,n){return e.style[t]=n},ev=function(e,t,n){return e.style.setProperty(t,n)},tv=function(e,t,n){return e._gsap[t]=n},nv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},rv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Vt="transform",Qn=Vt+"Origin",sv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in mr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=or(i,o)}):this.tfm[e]=a.x?a[e]:or(i,e),e===Qn&&(this.tfm.zOrigin=a.zOrigin);else return Xi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},g0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},av=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(If,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Df(),(!s||!s.isStart)&&!n[Vt]&&(g0(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_0=function(e,t){var n={target:e,props:[],revert:av,save:sv};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},v0,oh=function(e,t){var n=Lr.createElementNS?Lr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Lr.createElement(e);return n&&n.style?n:Lr.createElement(e)},di=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(If,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Aa(t)||t,1)||""},Ud="O,Moz,ms,Ms,Webkit".split(","),Aa=function(e,t,n){var i=t||ts,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ud[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ud[a]:"")+e},lh=function(){q_()&&window.document&&(Dd=window,Lr=Dd.document,ma=Lr.documentElement,ts=oh("div")||{style:{}},oh("div"),Vt=Aa(Vt),Qn=Vt+"Origin",ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",v0=!!Aa("perspective"),Df=jn.core.reverting,Lf=1)},Fd=function(e){var t=e.ownerSVGElement,n=oh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ma.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ma.removeChild(n),s},Od=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},x0=function(e){var t,n;try{t=e.getBBox()}catch{t=Fd(e),n=1}return t&&(t.width||t.height)||n||(t=Fd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Od(e,["x","cx","x1"])||0,y:+Od(e,["y","cy","y1"])||0,width:0,height:0}:t},S0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&x0(e))},kr=function(e,t){if(t){var n=e.style,i;t in mr&&t!==Qn&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(If,"-$1").toLowerCase())):n.removeAttribute(t)}},Dr=function(e,t,n,i,s,a){var o=new Jn(e._pt,t,n,0,1,a?m0:p0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Bd={deg:1,rad:1,turn:1},ov={grid:1,flex:1},Vr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ts.style,l=Y_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",p,_,m,g;if(i===a||!s||Bd[i]||Bd[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&S0(e),(f||a==="%")&&(mr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Zt(f?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Lr||!_.appendChild)&&(_=Lr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===li.time&&!m.uncache)return Zt(s/m.width*d);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=d+i,p=e[u],M?e.style[t]=M:kr(e,t)}else(f||a==="%")&&!ov[di(_,"display")]&&(o.position=di(e,"position")),_===e&&(o.position="static"),_.appendChild(ts),p=ts[u],_.removeChild(ts),o.position="absolute";return l&&f&&(m=as(_),m.time=li.time,m.width=_[u]),Zt(h?p*s/d:p&&s?d/p*s:0)},or=function(e,t,n,i){var s;return Lf||lh(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),mr[t]&&t!=="transform"?(s=No(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vc(di(e,Qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=_c[t]&&_c[t](e,t,n)||di(e,t)||Bm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vr(e,t,s,n)+n:s},lv=function(e,t,n,i){if(!n||n==="none"){var s=Aa(t,e,1),a=s&&di(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=di(e,"borderTopColor"))}var o=new Jn(this._pt,e.style,t,0,1,h0),l=0,c=0,u,d,h,f,p,_,m,g,M,T,v,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=di(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=di(e,t)||i,_?e.style[t]=_:kr(e,t)),u=[n,i],i0(u),n=u[0],i=u[1],h=n.match(oa)||[],y=i.match(oa)||[],y.length){for(;d=oa.exec(i);)m=d[0],M=i.substring(l,d.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=pa(f,m)+v),g=parseFloat(m),T=m.substr((g+"").length),l=oa.lastIndex-T.length,T||(T=T||pi.units[t]||v,l===i.length&&(i+=T,o.e+=T)),v!==T&&(f=Vr(e,t,_,T)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?m0:p0;return Im.test(i)&&(o.e=0),this._pt=o,o},zd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=zd[n]||n,t[1]=zd[i]||i,t.join(" ")},uv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],mr[o]&&(l=1,o=o==="transformOrigin"?Qn:Vt),kr(n,o);l&&(kr(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",No(n,1),a.uncache=1,g0(i)))}},_c={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Jn(e._pt,t,n,0,0,uv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Io=[1,0,0,1,0,0],M0={},y0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kd=function(e){var t=di(e,Vt);return y0(t)?Io:t.substr(7).match(Dm).map(Zt)},Nf=function(e,t){var n=e._gsap||as(e),i=e.style,s=kd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Io:s):(s===Io&&!e.offsetParent&&e!==ma&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ma.appendChild(e)),s=kd(e),l?i.display=l:kr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ma.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ch=function(e,t,n,i,s,a){var o=e._gsap,l=s||Nf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],M=l[5],T=t.split(" "),v=parseFloat(T[0])||0,y=parseFloat(T[1])||0,w,E,x,b;n?l!==Io&&(E=f*m-p*_)&&(x=v*(m/E)+y*(-_/E)+(_*M-m*g)/E,b=v*(-p/E)+y*(f/E)-(f*M-p*g)/E,v=x,y=b):(w=x0(e),v=w.x+(~T[0].indexOf("%")?v/100*w.width:v),y=w.y+(~(T[1]||T[0]).indexOf("%")?y/100*w.height:y)),i||i!==!1&&o.smooth?(g=v-c,M=y-u,o.xOffset=d+(g*f+M*_)-g,o.yOffset=h+(g*p+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Qn]="0px 0px",a&&(Dr(a,o,"xOrigin",c,v),Dr(a,o,"yOrigin",u,y),Dr(a,o,"xOffset",d,o.xOffset),Dr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},No=function(e,t){var n=e._gsap||new s0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=di(e,Qn)||"0",u,d,h,f,p,_,m,g,M,T,v,y,w,E,x,b,C,D,L,H,N,z,X,B,Q,W,R,Z,Se,Te,We,De;return u=d=h=_=m=g=M=T=v=0,f=p=1,n.svg=!!(e.getCTM&&S0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),E=Nf(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),ch(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,E)),y=n.xOrigin||0,w=n.yOrigin||0,E!==Io&&(D=E[0],L=E[1],H=E[2],N=E[3],u=z=E[4],d=X=E[5],E.length===6?(f=Math.sqrt(D*D+L*L),p=Math.sqrt(N*N+H*H),_=D||L?Ls(L,D)*Jr:0,M=H||N?Ls(H,N)*Jr+_:0,M&&(p*=Math.abs(Math.cos(M*ga))),n.svg&&(u-=y-(y*D+w*H),d-=w-(y*L+w*N))):(De=E[6],Te=E[7],R=E[8],Z=E[9],Se=E[10],We=E[11],u=E[12],d=E[13],h=E[14],x=Ls(De,Se),m=x*Jr,x&&(b=Math.cos(-x),C=Math.sin(-x),B=z*b+R*C,Q=X*b+Z*C,W=De*b+Se*C,R=z*-C+R*b,Z=X*-C+Z*b,Se=De*-C+Se*b,We=Te*-C+We*b,z=B,X=Q,De=W),x=Ls(-H,Se),g=x*Jr,x&&(b=Math.cos(-x),C=Math.sin(-x),B=D*b-R*C,Q=L*b-Z*C,W=H*b-Se*C,We=N*C+We*b,D=B,L=Q,H=W),x=Ls(L,D),_=x*Jr,x&&(b=Math.cos(x),C=Math.sin(x),B=D*b+L*C,Q=z*b+X*C,L=L*b-D*C,X=X*b-z*C,D=B,z=Q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Zt(Math.sqrt(D*D+L*L+H*H)),p=Zt(Math.sqrt(X*X+De*De)),x=Ls(z,X),M=Math.abs(x)>2e-4?x*Jr:0,v=We?1/(We<0?-We:We):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!y0(di(e,Vt)),B&&e.setAttribute("transform",B))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Zt(f),n.scaleY=Zt(p),n.rotation=Zt(_)+o,n.rotationX=Zt(m)+o,n.rotationY=Zt(g)+o,n.skewX=M+o,n.skewY=T+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Qn]=vc(c)),n.xOffset=n.yOffset=0,n.force3D=pi.force3D,n.renderTransform=n.svg?fv:v0?b0:hv,n.uncache=0,n},vc=function(e){return(e=e.split(" "))[0]+" "+e[1]},jc=function(e,t,n){var i=Cn(t);return Zt(parseFloat(t)+parseFloat(Vr(e,"x",n+"px",i)))+i},hv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,b0(e,t)},Wr="0deg",Fa="0px",Xr=") ",b0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,M=n.target,T=n.zOrigin,v="",y=g==="auto"&&e&&e!==1||g===!0;if(T&&(d!==Wr||u!==Wr)){var w=parseFloat(u)*ga,E=Math.sin(w),x=Math.cos(w),b;w=parseFloat(d)*ga,b=Math.cos(w),a=jc(M,a,E*b*-T),o=jc(M,o,-Math.sin(w)*-T),l=jc(M,l,x*b*-T+T)}m!==Fa&&(v+="perspective("+m+Xr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||a!==Fa||o!==Fa||l!==Fa)&&(v+=l!==Fa||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Xr),c!==Wr&&(v+="rotate("+c+Xr),u!==Wr&&(v+="rotateY("+u+Xr),d!==Wr&&(v+="rotateX("+d+Xr),(h!==Wr||f!==Wr)&&(v+="skew("+h+", "+f+Xr),(p!==1||_!==1)&&(v+="scale("+p+", "+_+Xr),M.style[Vt]=v||"translate(0, 0)"},fv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,M=n.forceCSS,T=parseFloat(a),v=parseFloat(o),y,w,E,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ga,c*=ga,y=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=ga,b=Math.tan(c-u),b=Math.sqrt(1+b*b),E*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),y*=b,w*=b)),y=Zt(y),w=Zt(w),E=Zt(E),x=Zt(x)):(y=d,x=h,w=E=0),(T&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(T=Vr(f,"x",a,"px"),v=Vr(f,"y",o,"px")),(p||_||m||g)&&(T=Zt(T+p-(p*y+_*E)+m),v=Zt(v+_-(p*w+_*x)+g)),(i||s)&&(b=f.getBBox(),T=Zt(T+i/100*b.width),v=Zt(v+s/100*b.height)),b="matrix("+y+","+w+","+E+","+x+","+T+","+v+")",f.setAttribute("transform",b),M&&(f.style[Vt]=b)},dv=function(e,t,n,i,s){var a=360,o=vn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Jr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Nd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Nd)%a-~~(c/a)*a)),e._pt=h=new Jn(e._pt,t,n,i,c,Z_),h.e=u,h.u="deg",e._props.push(n),h},Vd=function(e,t){for(var n in t)e[n]=t[n];return e},pv=function(e,t,n){var i=Vd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=No(n,1),kr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],a[Vt]=t,o=No(n,1),a[Vt]=c);for(l in mr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Cn(c),p=Cn(u),d=f!==p?Vr(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Jn(e._pt,o,l,d,h-d,ah),e._pt.u=p||0,e._props.push(l));Vd(o,i)};Kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});_c[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(p){return or(o,p,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(p,_){return f[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var T0={name:"css",register:lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,p,_,m,g,M,T,v,y,w,E,x,b;Lf||lh(),this.styles=this.styles||_0(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ri[_]&&a0(_,t,n,i,e,s)))){if(f=typeof u,p=_c[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Po(u)),p)p(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Or.lastIndex=0,Or.test(c)||(m=Cn(c),g=Cn(u),g?m!==g&&(c=Vr(e,_,c,g)+g):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],vn(c)&&~c.indexOf("random(")&&(c=Po(c)),Cn(c+"")||c==="auto"||(c+=pi.units[_]||Cn(or(e,_))||""),(c+"").charAt(1)==="="&&(c=or(e,_))):c=or(e,_),h=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),_ in Xi&&(_==="autoAlpha"&&(h===1&&or(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),Dr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in mr,T){if(this.styles.save(_),b=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=di(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=di(e,"perspective"),C?e.style.perspective=C:kr(e,"perspective")}d=parseFloat(u)}if(v||(y=e._gsap,y.renderTransform&&!t.parseTransform||No(e,t.parseTransform),w=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Jn(this._pt,o,Vt,0,1,y.renderTransform,y,0,-1),v.dep=1),_==="scale")this._pt=new Jn(this._pt,y,"scaleY",y.scaleY,(M?pa(y.scaleY,M+d):d)-y.scaleY||0,ah),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Qn,0,o[Qn]),u=cv(u),y.svg?ch(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==y.zOrigin&&Dr(this,y,"zOrigin",y.zOrigin,g),Dr(this,o,_,vc(c),vc(u)));continue}else if(_==="svgOrigin"){ch(e,u,1,w,0,this);continue}else if(_ in M0){dv(this,y,_,h,M?pa(h,M+u):u);continue}else if(_==="smoothOrigin"){Dr(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){pv(this,u,e);continue}}else _ in o||(_=Aa(_)||_);if(T||(d||d===0)&&(h||h===0)&&!$_.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),g=Cn(u)||(_ in pi.units?pi.units[_]:m),m!==g&&(h=Vr(e,_,c,g)),this._pt=new Jn(this._pt,T?y:o,_,h,(M?pa(h,M+d):d)-h,!T&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Q_:ah),this._pt.u=g||0,T&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=J_):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=K_);else if(_ in o)lv.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Mf(_,u);continue}T||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}E&&f0(this)},render:function(e,t){if(t.tween._time||!Df())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:or,aliases:Xi,getSetter:function(e,t,n){var i=Xi[t];return i&&i.indexOf(",")<0&&(t=i),t in mr&&t!==Qn&&(e._gsap.x||or(e,"x"))?n&&Id===n?t==="scale"?nv:tv:(Id=n||{})&&(t==="scale"?iv:rv):e.style&&!vf(e.style[t])?j_:~t.indexOf("-")?ev:Rf(e,t)},core:{_removeProperty:kr,_getMatrix:Nf}};jn.utils.checkPrefix=Aa;jn.core.getStyleSaver=_0;(function(r,e,t,n){var i=Kn(r+","+e+","+t,function(s){mr[s]=1});Kn(e,function(s){pi.units[s]="deg",M0[s]=1}),Xi[i[13]]=r+","+e,Kn(n,function(s){var a=s.split(":");Xi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pi.units[r]="px"});jn.registerPlugin(T0);var qe=jn.registerPlugin(T0)||jn;qe.core.Tween;function mv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gv(r,e,t){return e&&mv(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Jl,ci,Ir,Nr,_a,E0,Qr,va,w0,ur,Li,A0,C0=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},R0=1,ca=[],ht=[],$i=[],po=Date.now,uh=function(e,t){return t},_v=function(){var e=va.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ht),i.push.apply(i,$i),ht=n,$i=i,uh=function(a,o){return t[a](o)}},Br=function(e,t){return~$i.indexOf(e)&&$i[$i.indexOf(e)+1][t]},mo=function(e){return!!~w0.indexOf(e)},zn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},On=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qo="scrollLeft",jo="scrollTop",hh=function(){return ur&&ur.isPressed||ht.cache++},xc=function(e,t){var n=function i(s){if(s||s===0){R0&&(ci.history.scrollRestoration="manual");var a=ur&&ur.isPressed;s=i.v=Math.round(s)||(ur&&ur.iOS?1:0),e(s),i.cacheID=ht.cache,a&&uh("ss",s)}else(t||ht.cache!==i.cacheID||uh("ref"))&&(i.cacheID=ht.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Wn={s:Qo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xc(function(r){return arguments.length?ci.scrollTo(r,on.sc()):ci.pageXOffset||Ir[Qo]||Nr[Qo]||_a[Qo]||0})},on={s:jo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wn,sc:xc(function(r){return arguments.length?ci.scrollTo(Wn.sc(),r):ci.pageYOffset||Ir[jo]||Nr[jo]||_a[jo]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},vv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Hr=function(e,t){var n=t.s,i=t.sc;mo(e)&&(e=Ir.scrollingElement||Nr);var s=ht.indexOf(e),a=i===on.sc?1:2;!~s&&(s=ht.push(e)-1),ht[s+a]||zn(e,"scroll",hh);var o=ht[s+a],l=o||(ht[s+a]=xc(Br(e,n),!0)||(mo(e)?i:xc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),l},fh=function(e,t,n){var i=e,s=e,a=po(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,_){var m=po();_||m-a>l?(s=i,i=p,o=a,a=m):n?i+=p:i=s+(p-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(p){var _=o,m=s,g=po();return(p||p===0)&&p!==i&&u(p),a===o||g-o>c?0:(i+(n?m:-m))/((n?g:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Oa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Hd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},P0=function(){va=xn.core.globals().ScrollTrigger,va&&va.core&&_v()},L0=function(e){return xn=e||C0(),!Jl&&xn&&typeof document<"u"&&document.body&&(ci=window,Ir=document,Nr=Ir.documentElement,_a=Ir.body,w0=[ci,Ir,Nr,_a],xn.utils.clamp,A0=xn.core.context||function(){},Qr="onpointerenter"in _a?"pointer":"mouse",E0=Kt.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Li=Kt.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return R0=0},500),Jl=1),va||P0(),Jl};Wn.op=on;ht.cache=0;var Kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Jl||L0(xn)||console.warn("Please gsap.registerPlugin(Observer)"),va||P0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,M=n.onDrag,T=n.onPress,v=n.onRelease,y=n.onRight,w=n.onLeft,E=n.onUp,x=n.onDown,b=n.onChangeX,C=n.onChangeY,D=n.onChange,L=n.onToggleX,H=n.onToggleY,N=n.onHover,z=n.onHoverEnd,X=n.onMove,B=n.ignoreCheck,Q=n.isNormalizer,W=n.onGestureStart,R=n.onGestureEnd,Z=n.onWheel,Se=n.onEnable,Te=n.onDisable,We=n.onClick,De=n.scrollSpeed,Oe=n.capture,q=n.allowClicks,ee=n.lockAxis,ve=n.onLockAxis;this.target=o=Yn(o)||Nr,this.vars=n,f&&(f=xn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,De=De||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ci.getComputedStyle(_a).lineHeight)||22);var He,me,Re,Ie,J,oe,ue,I=this,ge=0,Ne=0,Ue=n.passive||!u&&n.passive!==!1,Ae=Hr(o,Wn),Xe=Hr(o,on),U=Ae(),st=Xe(),Ye=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Li[0]==="pointerdown",P=mo(o),S=o.ownerDocument||Ir,V=[0,0,0],G=[0,0,0],j=0,_e=function(){return j=po()},pe=function(ce,Ke){return(I.event=ce)&&f&&vv(ce.target,f)||Ke&&Ye&&ce.pointerType!=="touch"||B&&B(ce,Ke)},te=function(){I._vx.reset(),I._vy.reset(),me.pause(),d&&d(I)},ae=function(){var ce=I.deltaX=Hd(V),Ke=I.deltaY=Hd(G),fe=Math.abs(ce)>=i,je=Math.abs(Ke)>=i;D&&(fe||je)&&D(I,ce,Ke,V,G),fe&&(y&&I.deltaX>0&&y(I),w&&I.deltaX<0&&w(I),b&&b(I),L&&I.deltaX<0!=ge<0&&L(I),ge=I.deltaX,V[0]=V[1]=V[2]=0),je&&(x&&I.deltaY>0&&x(I),E&&I.deltaY<0&&E(I),C&&C(I),H&&I.deltaY<0!=Ne<0&&H(I),Ne=I.deltaY,G[0]=G[1]=G[2]=0),(Ie||Re)&&(X&&X(I),Re&&(m&&Re===1&&m(I),M&&M(I),Re=0),Ie=!1),oe&&!(oe=!1)&&ve&&ve(I),J&&(Z(I),J=!1),He=0},ye=function(ce,Ke,fe){V[fe]+=ce,G[fe]+=Ke,I._vx.update(ce),I._vy.update(Ke),c?He||(He=requestAnimationFrame(ae)):ae()},Be=function(ce,Ke){ee&&!ue&&(I.axis=ue=Math.abs(ce)>Math.abs(Ke)?"x":"y",oe=!0),ue!=="y"&&(V[2]+=ce,I._vx.update(ce,!0)),ue!=="x"&&(G[2]+=Ke,I._vy.update(Ke,!0)),c?He||(He=requestAnimationFrame(ae)):ae()},se=function(ce){if(!pe(ce,1)){ce=Oa(ce,u);var Ke=ce.clientX,fe=ce.clientY,je=Ke-I.x,ke=fe-I.y,we=I.isDragging;I.x=Ke,I.y=fe,(we||(je||ke)&&(Math.abs(I.startX-Ke)>=s||Math.abs(I.startY-fe)>=s))&&(Re||(Re=we?2:1),we||(I.isDragging=!0),Be(je,ke))}},ne=I.onPress=function(de){pe(de,1)||de&&de.button||(I.axis=ue=null,me.pause(),I.isPressed=!0,de=Oa(de),ge=Ne=0,I.startX=I.x=de.clientX,I.startY=I.y=de.clientY,I._vx.reset(),I._vy.reset(),zn(Q?o:S,Li[1],se,Ue,!0),I.deltaX=I.deltaY=0,T&&T(I))},ie=I.onRelease=function(de){if(!pe(de,1)){On(Q?o:S,Li[1],se,!0);var ce=!isNaN(I.y-I.startY),Ke=I.isDragging,fe=Ke&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),je=Oa(de);!fe&&ce&&(I._vx.reset(),I._vy.reset(),u&&q&&xn.delayedCall(.08,function(){if(po()-j>300&&!de.defaultPrevented){if(de.target.click)de.target.click();else if(S.createEvent){var ke=S.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,ci,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),de.target.dispatchEvent(ke)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,d&&Ke&&!Q&&me.restart(!0),Re&&ae(),g&&Ke&&g(I),v&&v(I,fe)}},Le=function(ce){return ce.touches&&ce.touches.length>1&&(I.isGesturing=!0)&&W(ce,I.isDragging)},ze=function(){return(I.isGesturing=!1)||R(I)},O=function(ce){if(!pe(ce)){var Ke=Ae(),fe=Xe();ye((Ke-U)*De,(fe-st)*De,1),U=Ke,st=fe,d&&me.restart(!0)}},xe=function(ce){if(!pe(ce)){ce=Oa(ce,u),Z&&(J=!0);var Ke=(ce.deltaMode===1?l:ce.deltaMode===2?ci.innerHeight:1)*p;ye(ce.deltaX*Ke,ce.deltaY*Ke,0),d&&!Q&&me.restart(!0)}},re=function(ce){if(!pe(ce)){var Ke=ce.clientX,fe=ce.clientY,je=Ke-I.x,ke=fe-I.y;I.x=Ke,I.y=fe,Ie=!0,d&&me.restart(!0),(je||ke)&&Be(je,ke)}},Me=function(ce){I.event=ce,N(I)},be=function(ce){I.event=ce,z(I)},le=function(ce){return pe(ce)||Oa(ce,u)&&We(I)};me=I._dc=xn.delayedCall(h||.25,te).pause(),I.deltaX=I.deltaY=0,I._vx=fh(0,50,!0),I._vy=fh(0,50,!0),I.scrollX=Ae,I.scrollY=Xe,I.isDragging=I.isGesturing=I.isPressed=!1,A0(this),I.enable=function(de){return I.isEnabled||(zn(P?S:o,"scroll",hh),a.indexOf("scroll")>=0&&zn(P?S:o,"scroll",O,Ue,Oe),a.indexOf("wheel")>=0&&zn(o,"wheel",xe,Ue,Oe),(a.indexOf("touch")>=0&&E0||a.indexOf("pointer")>=0)&&(zn(o,Li[0],ne,Ue,Oe),zn(S,Li[2],ie),zn(S,Li[3],ie),q&&zn(o,"click",_e,!0,!0),We&&zn(o,"click",le),W&&zn(S,"gesturestart",Le),R&&zn(S,"gestureend",ze),N&&zn(o,Qr+"enter",Me),z&&zn(o,Qr+"leave",be),X&&zn(o,Qr+"move",re)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=Ie=Re=!1,I._vx.reset(),I._vy.reset(),U=Ae(),st=Xe(),de&&de.type&&ne(de),Se&&Se(I)),I},I.disable=function(){I.isEnabled&&(ca.filter(function(de){return de!==I&&mo(de.target)}).length||On(P?S:o,"scroll",hh),I.isPressed&&(I._vx.reset(),I._vy.reset(),On(Q?o:S,Li[1],se,!0)),On(P?S:o,"scroll",O,Oe),On(o,"wheel",xe,Oe),On(o,Li[0],ne,Oe),On(S,Li[2],ie),On(S,Li[3],ie),On(o,"click",_e,!0),On(o,"click",le),On(S,"gesturestart",Le),On(S,"gestureend",ze),On(o,Qr+"enter",Me),On(o,Qr+"leave",be),On(o,Qr+"move",re),I.isEnabled=I.isPressed=I.isDragging=!1,Te&&Te(I))},I.kill=I.revert=function(){I.disable();var de=ca.indexOf(I);de>=0&&ca.splice(de,1),ur===I&&(ur=0)},ca.push(I),Q&&mo(o)&&(ur=I),I.enable(_)},gv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Kt.version="3.15.0";Kt.create=function(r){return new Kt(r)};Kt.register=L0;Kt.getAll=function(){return ca.slice()};Kt.getById=function(r){return ca.filter(function(e){return e.vars.id===r})[0]};C0()&&xn.registerPlugin(Kt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ge,ra,ut,At,ai,Tt,Uf,Sc,Uo,go,eo,el,wn,zc,dh,Hn,Gd,Wd,sa,D0,eu,I0,Vn,ph,N0,U0,Ar,mh,Ff,xa,Of,_o,gh,tu,tl=1,An=Date.now,nu=An(),Ai=0,to=0,Xd=function(e,t,n){var i=ii(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},qd=function(e,t){return t&&(!ii(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},xv=function r(){return to&&requestAnimationFrame(r)},Yd=function(){return zc=1},$d=function(){return zc=0},Vi=function(e){return e},no=function(e){return Math.round(e*1e5)/1e5||0},F0=function(){return typeof window<"u"},O0=function(){return Ge||F0()&&(Ge=window.gsap)&&Ge.registerPlugin&&Ge},ps=function(e){return!!~Uf.indexOf(e)},B0=function(e){return(e==="Height"?Of:ut["inner"+e])||ai["client"+e]||Tt["client"+e]},z0=function(e){return Br(e,"getBoundingClientRect")||(ps(e)?function(){return nc.width=ut.innerWidth,nc.height=Of,nc}:function(){return lr(e)})},Sv=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Br(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?B0(s):e["client"+s])||0}},Mv=function(e,t){return!t||~$i.indexOf(e)?z0(e):function(){return nc}},qi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Br(e,n))?a()-z0(e)()[s]:ps(e)?(ai[n]||Tt[n])-B0(i):e[n]-e["offset"+i])},nl=function(e,t){for(var n=0;n<sa.length;n+=3)(!t||~t.indexOf(sa[n+1]))&&e(sa[n],sa[n+1],sa[n+2])},ii=function(e){return typeof e=="string"},Rn=function(e){return typeof e=="function"},io=function(e){return typeof e=="number"},jr=function(e){return typeof e=="object"},Ba=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ds=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Is=Math.abs,k0="left",V0="top",Bf="right",zf="bottom",us="width",hs="height",vo="Right",xo="Left",So="Top",Mo="Bottom",nn="padding",yi="margin",Ca="Width",kf="Height",an="px",bi=function(e){return ut.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},yv=function(e){var t=bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Zd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lr=function(e,t){var n=t&&bi(e)[dh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ge.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Mc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},H0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},bv=function(e){return function(t){return Ge.utils.snap(H0(e),t)}},Vf=function(e){var t=Ge.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Tv=function(e){return function(t,n){return Vf(H0(e))(t,n.direction)}},il=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},rl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sl={toggleActions:"play",anticipatePin:0},yc={top:0,left:0,center:.5,bottom:1,right:1},Ql=function(e,t){if(ii(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in yc?yc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},al=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,p=At.createElement("div"),_=ps(n)||Br(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,T=M?c:u,v="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===on?Bf:zf)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],jl(p,0,i,M),p},jl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ca]=1,s["border"+o+Ca]=0,s[n.p]=t+"px",Ge.set(e,s)},ct=[],_h={},Fo,Jd=function(){return An()-Ai>34&&(Fo||(Fo=requestAnimationFrame(hr)))},Ns=function(){(!Vn||!Vn.isPressed||Vn.startX>Tt.clientWidth)&&(ht.cache++,Vn?Fo||(Fo=requestAnimationFrame(hr)):hr(),Ai||gs("scrollStart"),Ai=An())},iu=function(){U0=ut.innerWidth,N0=ut.innerHeight},ro=function(e){ht.cache++,(e===!0||!wn&&!I0&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!ph||U0!==ut.innerWidth||Math.abs(ut.innerHeight-N0)>ut.innerHeight*.25))&&Sc.restart(!0)},ms={},Ev=[],G0=function r(){return dn(rt,"scrollEnd",r)||ns(!0)},gs=function(e){return ms[e]&&ms[e].map(function(t){return t()})||Ev},ni=[],W0=function(e){for(var t=0;t<ni.length;t+=5)(!e||ni[t+4]&&ni[t+4].query===e)&&(ni[t].style.cssText=ni[t+1],ni[t].getBBox&&ni[t].setAttribute("transform",ni[t+2]||""),ni[t+3].uncache=1)},X0=function(){return ht.forEach(function(e){return Rn(e)&&++e.cacheID&&(e.rec=e())})},Hf=function(e,t){var n;for(Hn=0;Hn<ct.length;Hn++)n=ct[Hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));_o=!0,t&&W0(t),t||gs("revert")},q0=function(e,t){ht.cache++,(t||!Gn)&&ht.forEach(function(n){return Rn(n)&&n.cacheID++&&(n.rec=0)}),ii(e)&&(ut.history.scrollRestoration=Ff=e)},Gn,fs=0,Qd,wv=function(){if(Qd!==fs){var e=Qd=fs;requestAnimationFrame(function(){return e===fs&&ns(!0)})}},Y0=function(){Tt.appendChild(xa),Of=!Vn&&xa.offsetHeight||ut.innerHeight,Tt.removeChild(xa)},jd=function(e){return Uo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ns=function(e,t){if(ai=At.documentElement,Tt=At.body,Uf=[ut,At,ai,Tt],Ai&&!e&&!_o){pn(rt,"scrollEnd",G0);return}Y0(),Gn=rt.isRefreshing=!0,_o||X0();var n=gs("refreshInit");D0&&rt.sort(),t||Hf(),ht.forEach(function(i){Rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),_o=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),gh=1,jd(!0),ct.forEach(function(i){var s=qi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),jd(!1),gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ht.forEach(function(i){Rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),q0(Ff,1),Sc.pause(),fs++,Gn=2,hr(2),ct.forEach(function(i){return Rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=rt.isRefreshing=!1,gs("refresh")},vh=0,ec=1,yo,hr=function(e){if(e===2||!Gn&&!_o){rt.isUpdating=!0,yo&&yo.update(0);var t=ct.length,n=An(),i=n-nu>=50,s=t&&ct[0].scroll();if(ec=vh>s?-1:1,Gn||(vh=s),i&&(Ai&&!zc&&n-Ai>200&&(Ai=0,gs("scrollEnd")),eo=nu,nu=n),ec<0){for(Hn=t;Hn-- >0;)ct[Hn]&&ct[Hn].update(0,i);ec=1}else for(Hn=0;Hn<t;Hn++)ct[Hn]&&ct[Hn].update(0,i);rt.isUpdating=!1}Fo=0},xh=[k0,V0,zf,Bf,yi+Mo,yi+vo,yi+So,yi+xo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tc=xh.concat([us,hs,"boxSizing","max"+Ca,"max"+kf,"position",yi,nn,nn+So,nn+vo,nn+Mo,nn+xo]),Av=function(e,t,n){Sa(n);var i=e._gsap;if(i.spacerIsNative)Sa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ru=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=xh.length,a=t.style,o=e.style,l;s--;)l=xh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[zf]=o[Bf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[us]=Mc(e,Wn)+an,a[hs]=Mc(e,on)+an,a[nn]=o[yi]=o[V0]=o[k0]="0",Sa(i),o[us]=o["max"+Ca]=n[us],o[hs]=o["max"+kf]=n[hs],o[nn]=n[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Cv=/([A-Z])/g,Sa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ge.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Cv,"-$1").toLowerCase())}},ol=function(e){for(var t=tc.length,n=e.style,i=[],s=0;s<t;s++)i.push(tc[s],n[tc[s]]);return i.t=e,i},Rv=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},nc={left:0,top:0},ep=function(e,t,n,i,s,a,o,l,c,u,d,h,f,p){Rn(e)&&(e=e(l)),ii(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Ql("0"+e.substr(3),n):0));var _=f?f.time():0,m,g,M;if(f&&f.seek(0),isNaN(e)||(e=+e),io(e))f&&(e=Ge.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&jl(o,n,i,!0);else{Rn(t)&&(t=t(l));var T=(e||"0").split(" "),v,y,w,E;M=Yn(t,l)||Tt,v=lr(M)||{},(!v||!v.left&&!v.top)&&bi(M).display==="none"&&(E=M.style.display,M.style.display="block",v=lr(M),E?M.style.display=E:M.style.removeProperty("display")),y=Ql(T[0],v[i.d]),w=Ql(T[1]||"0",n),e=v[i.p]-c[i.p]-u+y+s-w,o&&jl(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var x=e+n,b=a._isStart;m="scroll"+i.d2,jl(a,x,i,b&&x>20||!b&&(d?Math.max(Tt[m],ai[m]):a.parentNode[m])<=x+1),d&&(c=lr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+an))}return f&&M&&(m=lr(M),f.seek(h),g=lr(M),f._caScrollDist=m[i.p]-g[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},Pv=/(webkit|moz|length|cssText|inset)/i,tp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===Tt){e._stOrig=s.cssText,o=bi(e);for(a in o)!+a&&!Pv.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ge.core.getCache(e).uncache=1,t.appendChild(e)}},$0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ll=function(e,t,n){var i={};i[t.p]="+="+n,Ge.set(e,i)},np=function(e,t){var n=Hr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,p={};c=c||n();var _=$0(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ht.cache++,a.tween&&hr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ge.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pn(e,"wheel",n.wheelHandler),rt.isTouch&&pn(e,"touchmove",n.wheelHandler),s},rt=(function(){function r(t,n){ra||r.register(Ge)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!to){this.update=this.refresh=this.kill=Vi;return}n=Zd(ii(n)||io(n)||n.nodeType?{trigger:n}:n,sl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,M=s.onSnapComplete,T=s.once,v=s.snap,y=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Wn:on,D=!d&&d!==0,L=Yn(n.scroller||ut),H=Ge.core.getCache(L),N=ps(L),z=("pinType"in n?n.pinType:Br(L,"pinType")||N&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=D&&n.toggleActions.split(" "),Q="markers"in n?n.markers:sl.markers,W=N?0:parseFloat(bi(L)["border"+C.p2+Ca])||0,R=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Se=Sv(L,N,C),Te=Mv(L,N),We=0,De=0,Oe=0,q=Hr(L,C),ee,ve,He,me,Re,Ie,J,oe,ue,I,ge,Ne,Ue,Ae,Xe,U,st,Ye,P,S,V,G,j,_e,pe,te,ae,ye,Be,se,ne,ie,Le,ze,O,xe,re,Me,be;if(R._startClamp=R._endClamp=!1,R._dir=C,m*=45,R.scroller=L,R.scroll=E?E.time.bind(E):q,me=q(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(D0=1,n.refreshPriority===-9999&&(yo=R)),H.tweenScroll=H.tweenScroll||{top:np(L,on),left:np(L,Wn)},R.tweenTo=ee=H.tweenScroll[C.p],R.scrubDuration=function(fe){Le=io(fe)&&fe,Le?ie?ie.duration(fe):ie=Ge.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Le,paused:!0,onComplete:function(){return g&&g(R)}}):(ie&&ie.progress(1).kill(),ie=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),se=0,l||(l=i.vars.id)),v&&((!jr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Tt.style&&Ge.set(N?[Tt,ai]:L,{scrollBehavior:"auto"}),ht.forEach(function(fe){return Rn(fe)&&fe.target===(N?At.scrollingElement||ai:L)&&(fe.smooth=!1)}),He=Rn(v.snapTo)?v.snapTo:v.snapTo==="labels"?bv(i):v.snapTo==="labelsDirectional"?Tv(i):v.directional!==!1?function(fe,je){return Vf(v.snapTo)(fe,An()-De<500?0:je.direction)}:Ge.utils.snap(v.snapTo),ze=v.duration||{min:.1,max:2},ze=jr(ze)?go(ze.min,ze.max):go(ze,ze),O=Ge.delayedCall(v.delay||Le/2||.1,function(){var fe=q(),je=An()-De<500,ke=ee.tween;if((je||Math.abs(R.getVelocity())<10)&&!ke&&!zc&&We!==fe){var we=(fe-Ie)/Ae,wt=i&&!D?i.totalProgress():we,et=je?0:(wt-ne)/(An()-eo)*1e3||0,tt=Ge.utils.clamp(-we,1-we,Is(et/2)*et/.185),Ut=we+(v.inertia===!1?0:tt),St,Mt,gt=v,Nn=gt.onStart,It=gt.onInterrupt,yn=gt.onComplete;if(St=He(Ut,R),io(St)||(St=Ut),Mt=Math.max(0,Math.round(Ie+St*Ae)),fe<=J&&fe>=Ie&&Mt!==fe){if(ke&&!ke._initted&&ke.data<=Is(Mt-fe))return;v.inertia===!1&&(tt=St-we),ee(Mt,{duration:ze(Is(Math.max(Is(Ut-wt),Is(St-wt))*.185/et/.05||0)),ease:v.ease||"power3",data:Is(Mt-fe),onInterrupt:function(){return O.restart(!0)&&It&&Ds(R,It)},onComplete:function(){R.update(),We=q(),i&&!D&&(ie?ie.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),se=ne=i&&!D?i.totalProgress():R.progress,M&&M(R),yn&&Ds(R,yn)}},fe,tt*Ae,Mt-fe-tt*Ae),Nn&&Ds(R,Nn,ee.tween)}}else R.isActive&&We!==fe&&O.restart(!0)}).pause()),l&&(_h[l]=R),h=R.trigger=Yn(h||f!==!0&&f),be=h&&h._gsap&&h._gsap.stRevert,be&&(be=be(R)),f=f===!0?h:Yn(f),ii(o)&&(o={targets:h,className:o}),f&&(p===!1||p===yi||(p=!p&&f.parentNode&&f.parentNode.style&&bi(f.parentNode).display==="flex"?!1:nn),R.pin=f,ve=Ge.core.getCache(f),ve.spacer?Xe=ve.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ve.spacerIsNative=!!w,w&&(ve.spacerState=ol(w))),ve.spacer=Ye=w||At.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),ve.pinState=Xe=ol(f)),n.force3D!==!1&&Ge.set(f,{force3D:!0}),R.spacer=Ye=ve.spacer,Be=bi(f),_e=Be[p+C.os2],S=Ge.getProperty(f),V=Ge.quickSetter(f,C.a,an),ru(f,Ye,Be),st=ol(f)),Q){Ne=jr(Q)?Zd(Q,Kd):Kd,I=al("scroller-start",l,L,C,Ne,0),ge=al("scroller-end",l,L,C,Ne,0,I),P=I["offset"+C.op.d2];var le=Yn(Br(L,"content")||L);oe=this.markerStart=al("start",l,le,C,Ne,P,0,E),ue=this.markerEnd=al("end",l,le,C,Ne,P,0,E),E&&(Me=Ge.quickSetter([oe,ue],C.a,an)),!z&&!($i.length&&Br(L,"fixedMarkers")===!0)&&(yv(N?Tt:L),Ge.set([I,ge],{force3D:!0}),te=Ge.quickSetter(I,C.a,an),ye=Ge.quickSetter(ge,C.a,an))}if(E){var de=E.vars.onUpdate,ce=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),de&&de.apply(E,ce||[])})}if(R.previous=function(){return ct[ct.indexOf(R)-1]},R.next=function(){return ct[ct.indexOf(R)+1]},R.revert=function(fe,je){if(!je)return R.kill(!0);var ke=fe!==!1||!R.enabled,we=wn;ke!==R.isReverted&&(ke&&(xe=Math.max(q(),R.scroll.rec||0),Oe=R.progress,re=i&&i.progress()),oe&&[oe,ue,I,ge].forEach(function(wt){return wt.style.display=ke?"none":"block"}),ke&&(wn=R,R.update(ke)),f&&(!y||!R.isActive)&&(ke?Av(f,Ye,Xe):ru(f,Ye,bi(f),pe)),ke||R.update(ke),wn=we,R.isReverted=ke)},R.refresh=function(fe,je,ke,we){if(!((wn||!R.enabled)&&!je)){if(f&&fe&&Ai){pn(r,"scrollEnd",G0);return}!Gn&&Z&&Z(R),wn=R,ee.tween&&!ke&&(ee.tween.kill(),ee.tween=0),ie&&ie.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var wt=Se(),et=Te(),tt=E?E.duration():qi(L,C),Ut=Ae<=.01||!Ae,St=0,Mt=we||0,gt=jr(ke)?ke.end:n.end,Nn=n.endTrigger||h,It=jr(ke)?ke.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),yn=R.pinnedContainer=n.pinnedContainer&&Yn(n.pinnedContainer,R),Un=h&&Math.max(0,ct.indexOf(R))||0,Qt=Un,Wt,sn,Fi,As,hn,Yt,vi,Cs,A,k,K,Y,$;for(Q&&jr(ke)&&(Y=Ge.getProperty(I,C.p),$=Ge.getProperty(ge,C.p));Qt-- >0;)Yt=ct[Qt],Yt.end||Yt.refresh(0,1)||(wn=R),vi=Yt.pin,vi&&(vi===h||vi===f||vi===yn)&&!Yt.isReverted&&(k||(k=[]),k.unshift(Yt),Yt.revert(!0,!0)),Yt!==ct[Qt]&&(Un--,Qt--);for(Rn(It)&&(It=It(R)),It=Xd(It,"start",R),Ie=ep(It,h,wt,C,q(),oe,I,R,et,W,z,tt,E,R._startClamp&&"_startClamp")||(f?-.001:0),Rn(gt)&&(gt=gt(R)),ii(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(ii(It)?It.split(" ")[0]:"")+gt:(St=Ql(gt.substr(2),wt),gt=ii(It)?It:(E?Ge.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ie):Ie)+St,Nn=h)),gt=Xd(gt,"end",R),J=Math.max(Ie,ep(gt||(Nn?"100% 0":tt),Nn,wt,C,q()+St,ue,ge,R,et,W,z,tt,E,R._endClamp&&"_endClamp"))||-.001,St=0,Qt=Un;Qt--;)Yt=ct[Qt]||{},vi=Yt.pin,vi&&Yt.start-Yt._pinPush<=Ie&&!E&&Yt.end>0&&(Wt=Yt.end-(R._startClamp?Math.max(0,Yt.start):Yt.start),(vi===h&&Yt.start-Yt._pinPush<Ie||vi===yn)&&isNaN(It)&&(St+=Wt*(1-Yt.progress)),vi===f&&(Mt+=Wt));if(Ie+=St,J+=St,R._startClamp&&(R._startClamp+=St),R._endClamp&&!Gn&&(R._endClamp=J||-.001,J=Math.min(J,qi(L,C))),Ae=J-Ie||(Ie-=.01)&&.001,Ut&&(Oe=Ge.utils.clamp(0,1,Ge.utils.normalize(Ie,J,xe))),R._pinPush=Mt,oe&&St&&(Wt={},Wt[C.a]="+="+St,yn&&(Wt[C.p]="-="+q()),Ge.set([oe,ue],Wt)),f&&!(gh&&R.end>=qi(L,C)))Wt=bi(f),As=C===on,Fi=q(),G=parseFloat(S(C.a))+Mt,!tt&&J>1&&(K=(N?At.scrollingElement||ai:L).style,K={style:K,value:K["overflow"+C.a.toUpperCase()]},N&&bi(Tt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(K.style["overflow"+C.a.toUpperCase()]="scroll")),ru(f,Ye,Wt),st=ol(f),sn=lr(f,!0),Cs=z&&Hr(L,As?Wn:on)(),p?(pe=[p+C.os2,Ae+Mt+an],pe.t=Ye,Qt=p===nn?Mc(f,C)+Ae+Mt:0,Qt&&(pe.push(C.d,Qt+an),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=Qt+an)),Sa(pe),yn&&ct.forEach(function(Ee){Ee.pin===yn&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),z&&q(xe)):(Qt=Mc(f,C),Qt&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=Qt+an)),z&&(hn={top:sn.top+(As?Fi-Ie:Cs)+an,left:sn.left+(As?Cs:Fi-Ie)+an,boxSizing:"border-box",position:"fixed"},hn[us]=hn["max"+Ca]=Math.ceil(sn.width)+an,hn[hs]=hn["max"+kf]=Math.ceil(sn.height)+an,hn[yi]=hn[yi+So]=hn[yi+vo]=hn[yi+Mo]=hn[yi+xo]="0",hn[nn]=Wt[nn],hn[nn+So]=Wt[nn+So],hn[nn+vo]=Wt[nn+vo],hn[nn+Mo]=Wt[nn+Mo],hn[nn+xo]=Wt[nn+xo],U=Rv(Xe,hn,y),Gn&&q(0)),i?(A=i._initted,eu(1),i.render(i.duration(),!0,!0),j=S(C.a)-G+Ae+Mt,ae=Math.abs(Ae-j)>1,z&&ae&&U.splice(U.length-2,2),i.render(0,!0,!0),A||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),eu(0)):j=Ae,K&&(K.value?K.style["overflow"+C.a.toUpperCase()]=K.value:K.style.removeProperty("overflow-"+C.a));else if(h&&q()&&!E)for(sn=h.parentNode;sn&&sn!==Tt;)sn._pinOffset&&(Ie-=sn._pinOffset,J-=sn._pinOffset),sn=sn.parentNode;k&&k.forEach(function(Ee){return Ee.revert(!1,!0)}),R.start=Ie,R.end=J,me=Re=Gn?xe:q(),!E&&!Gn&&(me<xe&&q(xe),R.scroll.rec=0),R.revert(!1,!0),De=An(),O&&(We=-1,O.restart(!0)),wn=0,i&&D&&(i._initted||re)&&i.progress()!==re&&i.progress(re||0,!0).render(i.time(),!0,!0),(Ut||Oe!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||Oe||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ie<-.001&&!Oe?Ge.utils.normalize(Ie,J,0):Oe,!0),R.progress=Ut||(me-Ie)/Ae===Oe?0:Oe),f&&p&&(Ye._pinOffset=Math.round(R.progress*j)),ie&&ie.invalidate(),isNaN(Y)||(Y-=Ge.getProperty(I,C.p),$-=Ge.getProperty(ge,C.p),ll(I,C,Y),ll(oe,C,Y-(we||0)),ll(ge,C,$),ll(ue,C,$-(we||0))),Ut&&!Gn&&R.update(),u&&!Gn&&!Ue&&(Ue=!0,u(R),Ue=!1)}},R.getVelocity=function(){return(q()-Re)/(An()-eo)*1e3||0},R.endAnimation=function(){Ba(R.callbackAnimation),i&&(ie?ie.progress(1):i.paused()?D||Ba(i,R.direction<0,1):Ba(i,i.reversed()))},R.labelToScroll=function(fe){return i&&i.labels&&(Ie||R.refresh()||Ie)+i.labels[fe]/i.duration()*Ae||0},R.getTrailing=function(fe){var je=ct.indexOf(R),ke=R.direction>0?ct.slice(0,je).reverse():ct.slice(je+1);return(ii(fe)?ke.filter(function(we){return we.vars.preventOverlaps===fe}):ke).filter(function(we){return R.direction>0?we.end<=Ie:we.start>=J})},R.update=function(fe,je,ke){if(!(E&&!ke&&!fe)){var we=Gn===!0?xe:R.scroll(),wt=fe?0:(we-Ie)/Ae,et=wt<0?0:wt>1?1:wt||0,tt=R.progress,Ut,St,Mt,gt,Nn,It,yn,Un;if(je&&(Re=me,me=E?q():we,v&&(ne=se,se=i&&!D?i.totalProgress():et)),m&&f&&!wn&&!tl&&Ai&&(!et&&Ie<we+(we-Re)/(An()-eo)*m?et=1e-4:et===1&&J>we+(we-Re)/(An()-eo)*m&&(et=.9999)),et!==tt&&R.enabled){if(Ut=R.isActive=!!et&&et<1,St=!!tt&&tt<1,It=Ut!==St,Nn=It||!!et!=!!tt,R.direction=et>tt?1:-1,R.progress=et,Nn&&!wn&&(Mt=et&&!tt?0:et===1?1:tt===1?2:3,D&&(gt=!It&&B[Mt+1]!=="none"&&B[Mt+1]||B[Mt],Un=i&&(gt==="complete"||gt==="reset"||gt in i))),b&&(It||Un)&&(Un||d||!i)&&(Rn(b)?b(R):R.getTrailing(b).forEach(function(Fi){return Fi.endAnimation()})),D||(ie&&!wn&&!tl?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",et,i._tTime/i._tDur):(ie.vars.totalProgress=et,ie.invalidate().restart())):i&&i.totalProgress(et,!!(wn&&(De||fe)))),f){if(fe&&p&&(Ye.style[p+C.os2]=_e),!z)V(no(G+j*et));else if(Nn){if(yn=!fe&&et>tt&&J+1>we&&we+1>=qi(L,C),y)if(!fe&&(Ut||yn)){var Qt=lr(f,!0),Wt=we-Ie;tp(f,Tt,Qt.top+(C===on?Wt:0)+an,Qt.left+(C===on?0:Wt)+an)}else tp(f,Ye);Sa(Ut||yn?U:st),ae&&et<1&&Ut||V(G+(et===1&&!yn?j:0))}}v&&!ee.tween&&!wn&&!tl&&O.restart(!0),o&&(It||T&&et&&(et<1||!tu))&&Uo(o.targets).forEach(function(Fi){return Fi.classList[Ut||T?"add":"remove"](o.className)}),a&&!D&&!fe&&a(R),Nn&&!wn?(D&&(Un&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),a&&a(R)),(It||!tu)&&(c&&It&&Ds(R,c),X[Mt]&&Ds(R,X[Mt]),T&&(et===1?R.kill(!1,1):X[Mt]=0),It||(Mt=et===1?1:3,X[Mt]&&Ds(R,X[Mt]))),x&&!Ut&&Math.abs(R.getVelocity())>(io(x)?x:2500)&&(Ba(R.callbackAnimation),ie?ie.progress(1):Ba(i,gt==="reverse"?1:!et,1))):D&&a&&!wn&&a(R)}if(ye){var sn=E?we/E.duration()*(E._caScrollDist||0):we;te(sn+(I._isFlipped?1:0)),ye(sn)}Me&&Me(-we/E.duration()*(E._caScrollDist||0))}},R.enable=function(fe,je){R.enabled||(R.enabled=!0,pn(L,"resize",ro),N||pn(L,"scroll",Ns),Z&&pn(r,"refreshInit",Z),fe!==!1&&(R.progress=Oe=0,me=Re=We=q()),je!==!1&&R.refresh())},R.getTween=function(fe){return fe&&ee?ee.tween:ie},R.setPositions=function(fe,je,ke,we){if(E){var wt=E.scrollTrigger,et=E.duration(),tt=wt.end-wt.start;fe=wt.start+tt*fe/et,je=wt.start+tt*je/et}R.refresh(!1,!1,{start:qd(fe,ke&&!!R._startClamp),end:qd(je,ke&&!!R._endClamp)},we),R.update()},R.adjustPinSpacing=function(fe){if(pe&&fe){var je=pe.indexOf(C.d)+1;pe[je]=parseFloat(pe[je])+fe+an,pe[1]=parseFloat(pe[1])+fe+an,Sa(pe)}},R.disable=function(fe,je){if(fe!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,je||ie&&ie.pause(),xe=0,ve&&(ve.uncache=1),Z&&dn(r,"refreshInit",Z),O&&(O.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!N)){for(var ke=ct.length;ke--;)if(ct[ke].scroller===L&&ct[ke]!==R)return;dn(L,"resize",ro),N||dn(L,"scroll",Ns)}},R.kill=function(fe,je){R.disable(fe,je),ie&&!je&&ie.kill(),l&&delete _h[l];var ke=ct.indexOf(R);ke>=0&&ct.splice(ke,1),ke===Hn&&ec>0&&Hn--,ke=0,ct.forEach(function(we){return we.scroller===R.scroller&&(ke=1)}),ke||Gn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,fe&&i.revert({kill:!1}),je||i.kill()),oe&&[oe,ue,I,ge].forEach(function(we){return we.parentNode&&we.parentNode.removeChild(we)}),yo===R&&(yo=0),f&&(ve&&(ve.uncache=1),ke=0,ct.forEach(function(we){return we.pin===f&&ke++}),ke||(ve.spacer=0)),n.onKill&&n.onKill(R)},ct.push(R),R.enable(!1,!1),be&&be(R),i&&i.add&&!Ae){var Ke=R.update;R.update=function(){R.update=Ke,ht.cache++,Ie||J||R.refresh()},Ge.delayedCall(.01,R.update),Ae=.01,Ie=J=0}else R.refresh();f&&wv()},r.register=function(n){return ra||(Ge=n||O0(),F0()&&window.document&&r.enable(),ra=to),ra},r.defaults=function(n){if(n)for(var i in n)sl[i]=n[i];return sl},r.disable=function(n,i){to=0,ct.forEach(function(a){return a[i?"kill":"disable"](n)}),dn(ut,"wheel",Ns),dn(At,"scroll",Ns),clearInterval(el),dn(At,"touchcancel",Vi),dn(Tt,"touchstart",Vi),il(dn,At,"pointerdown,touchstart,mousedown",Yd),il(dn,At,"pointerup,touchend,mouseup",$d),Sc.kill(),nl(dn);for(var s=0;s<ht.length;s+=3)rl(dn,ht[s],ht[s+1]),rl(dn,ht[s],ht[s+2])},r.enable=function(){if(ut=window,At=document,ai=At.documentElement,Tt=At.body,Ge){if(Uo=Ge.utils.toArray,go=Ge.utils.clamp,mh=Ge.core.context||Vi,eu=Ge.core.suppressOverwrites||Vi,Ff=ut.history.scrollRestoration||"auto",vh=ut.pageYOffset||0,Ge.core.globals("ScrollTrigger",r),Tt){to=1,xa=document.createElement("div"),xa.style.height="100vh",xa.style.position="absolute",Y0(),xv(),Kt.register(Ge),r.isTouch=Kt.isTouch,Ar=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ph=Kt.isTouch===1,pn(ut,"wheel",Ns),Uf=[ut,At,ai,Tt],Ge.matchMedia?(r.matchMedia=function(u){var d=Ge.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Ge.addEventListener("matchMediaInit",function(){X0(),Hf()}),Ge.addEventListener("matchMediaRevert",function(){return W0()}),Ge.addEventListener("matchMedia",function(){ns(0,1),gs("matchMedia")}),Ge.matchMedia().add("(orientation: portrait)",function(){return iu(),iu})):console.warn("Requires GSAP 3.11.0 or later"),iu(),pn(At,"scroll",Ns);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,a=Ge.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=lr(Tt),on.m=Math.round(o.top+on.sc())||0,Wn.m=Math.round(o.left+Wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),el=setInterval(Jd,250),Ge.delayedCall(.5,function(){return tl=0}),pn(At,"touchcancel",Vi),pn(Tt,"touchstart",Vi),il(pn,At,"pointerdown,touchstart,mousedown",Yd),il(pn,At,"pointerup,touchend,mouseup",$d),dh=Ge.utils.checkPrefix("transform"),tc.push(dh),ra=An(),Sc=Ge.delayedCall(.2,ns).pause(),sa=[At,"visibilitychange",function(){var u=ut.innerWidth,d=ut.innerHeight;At.hidden?(Gd=u,Wd=d):(Gd!==u||Wd!==d)&&ro()},At,"DOMContentLoaded",ns,ut,"load",ns,ut,"resize",ro],nl(pn),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<ht.length;l+=3)rl(dn,ht[l],ht[l+1]),rl(dn,ht[l],ht[l+2])}else if(At){var c=function u(){r.enable(),At.removeEventListener("DOMContentLoaded",u)};At.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(tu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(el)||(el=i)&&setInterval(Jd,i),"ignoreMobileResize"in n&&(ph=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(nl(dn)||nl(pn,n.autoRefreshEvents||"none"),I0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Yn(n),a=ht.indexOf(s),o=ps(s);~a&&ht.splice(a,o?6:2),i&&(o?$i.unshift(ut,i,Tt,i,ai,i):$i.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ii(n)?Yn(n):n).getBoundingClientRect(),o=a[s?us:hs]*i||0;return s?a.right-o>0&&a.left+o<ut.innerWidth:a.bottom-o>0&&a.top+o<ut.innerHeight},r.positionInViewport=function(n,i,s){ii(n)&&(n=Yn(n));var a=n.getBoundingClientRect(),o=a[s?us:hs],l=i==null?o/2:i in yc?yc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ut.innerWidth:(a.top+l)/ut.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ms.killAll||[];ms={},i.forEach(function(s){return s()})}},r})();rt.version="3.15.0";rt.saveStyles=function(r){return r?Uo(r).forEach(function(e){if(e&&e.style){var t=ni.indexOf(e);t>=0&&ni.splice(t,5),ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ge.core.getCache(e),mh())}}):ni};rt.revert=function(r,e){return Hf(!r,e)};rt.create=function(r,e){return new rt(r,e)};rt.refresh=function(r){return r?ro(!0):(ra||rt.register())&&ns(!0)};rt.update=function(r){return++ht.cache&&hr(r===!0?2:0)};rt.clearScrollMemory=q0;rt.maxScroll=function(r,e){return qi(r,e?Wn:on)};rt.getScrollFunc=function(r,e){return Hr(Yn(r),e?Wn:on)};rt.getById=function(r){return _h[r]};rt.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Ai};rt.snapDirectional=Vf;rt.addEventListener=function(r,e){var t=ms[r]||(ms[r]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(r,e){var t=ms[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};rt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ge.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),h.push(p),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Rn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Rn(s)&&(s=s(),pn(rt,"refresh",function(){return s=e.batchMax()})),Uo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(rt.create(c))}),t};var ip=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},su=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===ai&&r(Tt,t)},cl={auto:1,scroll:1},Lv=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ge.core.getCache(s),o=An(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(cl[(l=bi(s)).overflowY]||cl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ps(s)&&(cl[(l=bi(s)).overflowY]||cl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Z0=function(e,t,n,i){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Lv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&pn(At,Kt.eventTypes[0],sp,!1,!0)},onDisable:function(){return dn(At,Kt.eventTypes[0],sp,!0)}})},Dv=/(input|label|select|textarea)/i,rp,sp=function(e){var t=Dv.test(e.target.tagName);(t||rp)&&(e._gsapAllow=!0,rp=t)},Iv=function(e){jr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Yn(e.target)||ai,u=Ge.core.globals().ScrollSmoother,d=u&&u.get(),h=Ar&&(e.content&&Yn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Hr(c,on),p=Hr(c,Wn),_=1,m=(Kt.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,g=0,M=Rn(i)?function(){return i(o)}:function(){return i||2.8},T,v,y=Z0(c,e.type,!0,s),w=function(){return v=!1},E=Vi,x=Vi,b=function(){l=qi(c,on),x=go(Ar?1:0,l),n&&(E=go(0,qi(c,Wn))),T=fs},C=function(){h._gsap.y=no(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(w);var Q=no(o.deltaY/2),W=x(f.v-Q);if(h&&W!==f.v+f.offset){f.offset=W-f.v;var R=no((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",f.cacheID=ht.cache,hr()}return!0}f.offset&&C(),v=!0},L,H,N,z,X=function(){b(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return h&&Ge.set(h,{y:"+=0"}),e.ignoreCheck=function(B){return Ar&&B.type==="touchmove"&&D()||_>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){v=!1;var B=_;_=no((ut.visualViewport&&ut.visualViewport.scale||1)/m),L.pause(),B!==_&&su(c,_>1.01?!0:n?!1:"x"),H=p(),N=f(),b(),T=fs},e.onRelease=e.onGestureStart=function(B,Q){if(f.offset&&C(),!Q)z.restart(!0);else{ht.cache++;var W=M(),R,Z;n&&(R=p(),Z=R+W*.05*-B.velocityX/.227,W*=ip(p,R,Z,qi(c,Wn)),L.vars.scrollX=E(Z)),R=f(),Z=R+W*.05*-B.velocityY/.227,W*=ip(f,R,Z,qi(c,on)),L.vars.scrollY=x(Z),L.invalidate().duration(W).play(.01),(Ar&&L.vars.scrollY>=l||R>=l-1)&&Ge.to({},{onUpdate:X,duration:W})}a&&a(B)},e.onWheel=function(){L._ts&&L.pause(),An()-g>1e3&&(T=0,g=An())},e.onChange=function(B,Q,W,R,Z){if(fs!==T&&b(),Q&&n&&p(E(R[2]===Q?H+(B.startX-B.x):p()+Q-R[1])),W){f.offset&&C();var Se=Z[2]===W,Te=Se?N+B.startY-B.y:f()+W-Z[1],We=x(Te);Se&&Te!==We&&(N+=We-Te),f(We)}(W||Q)&&hr()},e.onEnable=function(){su(c,n?!1:"x"),rt.addEventListener("refresh",X),pn(ut,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),y.enable()},e.onDisable=function(){su(c,!0),dn(ut,"resize",X),rt.removeEventListener("refresh",X),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new Kt(e),o.iOS=Ar,Ar&&!f()&&f(1),Ar&&Ge.ticker.add(Vi),z=o._dc,L=Ge.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$0(f,f(),function(){return L.pause()})},onUpdate:hr,onComplete:z.vars.onComplete}),o};rt.sort=function(r){if(Rn(r))return ct.sort(r);var e=ut.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};rt.observe=function(r){return new Kt(r)};rt.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var e=r instanceof Kt?r:Iv(r);return Vn&&Vn.target===e.target&&Vn.kill(),ps(e.target)&&(Vn=e),e};rt.core={_getVelocityProp:fh,_inputObserver:Z0,_scrollers:ht,_proxies:$i,bridge:{ss:function(){Ai||gs("scrollStart"),Ai=An()},ref:function(){return wn}}};O0()&&Ge.registerPlugin(rt);const Xn=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),is=(r,e,t)=>r+(e-r)*t,Nv=(r,e,t,n)=>is(r,e,1-Math.exp(-5.5*n)),es=(r,e,t)=>Xn((r-e)/(t-e)),Us=(r,e,t)=>{const n=es(t,r,e);return n*n*(3-2*n)},ap=r=>1-Math.pow(1-r,3),op=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,lp=r=>r>=1?1:1-Math.pow(2,-10*r);function Gf(r){let e=r>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ys=matchMedia("(pointer: coarse)").matches,Ui=matchMedia("(prefers-reduced-motion: reduce)").matches,Uv=navigator.webdriver===!0;function kc(r,e="0px"){const t={visible:!0};return new IntersectionObserver(i=>{t.visible=i[i.length-1].isIntersecting},{rootMargin:e}).observe(r),t}const cp=r=>new Promise(e=>setTimeout(e,r)),pt={x:innerWidth*.62,y:innerHeight*.45,sx:innerWidth*.62,sy:innerHeight*.45,vx:0,vy:0,moved:!1,lastMove:-1e9,down:!1};let up=pt.x,hp=pt.y;addEventListener("pointermove",r=>{pt.x=r.clientX,pt.y=r.clientY,pt.moved=!0,pt.lastMove=performance.now()},{passive:!0});addEventListener("pointerdown",()=>{pt.down=!0},{passive:!0});addEventListener("pointerup",()=>{pt.down=!1},{passive:!0});function Fv(r){const e=1-Math.exp(-14*r);pt.sx+=(pt.x-pt.sx)*e,pt.sy+=(pt.y-pt.sy)*e;const t=(pt.x-up)/Math.max(r,.001),n=(pt.y-hp)/Math.max(r,.001);up=pt.x,hp=pt.y;const i=1-Math.exp(-9*r);pt.vx+=(t-pt.vx)*i,pt.vy+=(n-pt.vy)*i}const K0=()=>performance.now()-pt.lastMove;var fp="1.3.26";function J0(r,e,t){return Math.max(r,Math.min(e,t))}function Ov(r,e,t){return(1-t)*r+t*e}function Bv(r,e,t,n){return Ov(r,e,1-Math.exp(-t*n))}function zv(r,e){return(r%e+e)%e}var kv=class{constructor(){Je(this,"isRunning",!1);Je(this,"value",0);Je(this,"from",0);Je(this,"to",0);Je(this,"currentTime",0);Je(this,"lerp");Je(this,"duration");Je(this,"easing");Je(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=J0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Bv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function Vv(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Hv=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Je(this,"width",0);Je(this,"height",0);Je(this,"scrollHeight",0);Je(this,"scrollWidth",0);Je(this,"debouncedResize");Je(this,"wrapperResizeObserver");Je(this,"contentResizeObserver");Je(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Je(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Je(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Vv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Q0=class{constructor(){Je(this,"events",{})}emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const Gv=100/6,Mr={passive:!1};function dp(r,e){return r===1?Gv:r===2?e:1}var Wv=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Je(this,"touchStart",{x:0,y:0});Je(this,"lastDelta",{x:0,y:0});Je(this,"window",{width:0,height:0});Je(this,"emitter",new Q0);Je(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Je(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Je(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Je(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=dp(n,this.window.width),s=dp(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Je(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Mr),this.element.addEventListener("touchstart",this.onTouchStart,Mr),this.element.addEventListener("touchmove",this.onTouchMove,Mr),this.element.addEventListener("touchend",this.onTouchEnd,Mr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Mr),this.element.removeEventListener("touchstart",this.onTouchStart,Mr),this.element.removeEventListener("touchmove",this.onTouchMove,Mr),this.element.removeEventListener("touchend",this.onTouchEnd,Mr)}};const pp=r=>Math.min(1,1.001-2**(-10*r));var Xv=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:M=!0,autoRaf:T=!1,anchors:v=!1,autoToggle:y=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:x=E,stopInertiaOnNavigate:b=!1,respectReducedMotion:C=!0}={}){Je(this,"_isScrolling",!1);Je(this,"_isStopped",!1);Je(this,"_isLocked",!1);Je(this,"_preventNextNativeScrollEvent",!1);Je(this,"_resetVelocityTimeout",null);Je(this,"_rafId",null);Je(this,"_isDraggingSelection",!1);Je(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Je(this,"isTouching");Je(this,"isIos");Je(this,"time",0);Je(this,"userData",{});Je(this,"lastVelocity",0);Je(this,"velocity",0);Je(this,"direction",0);Je(this,"options");Je(this,"targetScroll");Je(this,"animatedScroll");Je(this,"animate",new kv);Je(this,"emitter",new Q0);Je(this,"dimensions");Je(this,"virtualScroll");Je(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Je(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Je(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Je(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Je(this,"onPointerDown",r=>{r.button===1&&this.reset()});Je(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Je(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Je(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=fp,window.lenis||(window.lenis={}),window.lenis.version=fp,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=pp:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:M,autoRaf:T,anchors:v,autoToggle:y,allowNestedScroll:w,naiveDimensions:x,stopInertiaOnNavigate:b,respectReducedMotion:C},this.dimensions=new Hv(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Wv(t,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,f=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let p=null;if(typeof h=="string"?(p=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),p||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(p=h),p){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}const _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(T)?0:T)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=h-this.animatedScroll;p>this.limit/2?h-=this.limit:p<-this.limit/2&&(h+=this.limit)}}else h=J0(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=pp:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,d,h,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),a=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,o=d>f,l=h>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,g,M,T,v,y;if(_==="horizontal")m=Math.round(r.scrollLeft),g=d-f,M=e,T=s,v=o,y=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=h-p,M=t,T=a,v=l,y=u;else return!1;return!y&&(m>=g||m<=0)?!0:(M>0?m<g:m>0)&&T&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?zv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const ua={y:0,v:0,dir:1};let ha=null;function qv(){!Uv&&!Ui&&!ys&&(ha=new Xv({lerp:.085,wheelMultiplier:.95,smoothWheel:!0}),ha.on("scroll",rt.update),qe.ticker.add(t=>ha.raf(t*1e3))),qe.ticker.lagSmoothing(0);let e=window.scrollY;return qe.ticker.add(()=>{const t=window.scrollY,n=Math.max(qe.ticker.deltaRatio()/60,1/240),i=(t-e)/n;ua.v+=(i-ua.v)*.14,Math.abs(i)>4&&(ua.dir=Math.sign(i)),ua.y=t,e=t}),{lenis:ha}}function Yv(r,e={}){const t=typeof r=="string"?document.querySelector(r):r;if(!t)return;const n=t.getBoundingClientRect().top+window.scrollY;ha?ha.scrollTo(n,{duration:1.8,easing:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,...e}):window.scrollTo({top:n,behavior:Ui?"auto":"smooth"})}function j0(r){const e=[];return(function t(n){[...n.childNodes].forEach(i=>{if(i.nodeType===3){const s=i.textContent;if(!s)return;const a=document.createDocumentFragment();s.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o)){a.appendChild(document.createTextNode(" "));return}const l=document.createElement("span");l.className="word",[...o].forEach(c=>{const u=document.createElement("span");u.className="ch",u.textContent=c,l.appendChild(u),e.push(u)}),a.appendChild(l)}),i.replaceWith(a)}else i.nodeType===1&&i.tagName!=="BR"&&t(i)})})(r),e}function $v(r){const e=[];return(function t(n,i){[...n.childNodes].forEach(s=>{if(s.nodeType===3){const a=document.createDocumentFragment();s.textContent.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o)){a.appendChild(document.createTextNode(" "));return}const l=document.createElement("span");l.className="w"+(i?" is-em":""),l.textContent=o,a.appendChild(l),e.push(l)}),s.replaceWith(a)}else s.nodeType===1&&(s.tagName==="EM"?t(s,!0):(s.classList.add("w"),e.push(s)))})})(r,!1),e}function Zv(r){const e=r.textContent.replace(/\s+/g," ").trim(),t=j0(r);r.setAttribute("aria-label",e),t.forEach(n=>n.setAttribute("aria-hidden","true")),!Ui&&(qe.set(t,{yPercent:118,opacity:0,"--w":200,"--d":76}),rt.create({trigger:r,start:"top 86%",once:!0,onEnter:()=>qe.to(t,{yPercent:0,opacity:1,"--w":600,"--d":94,duration:1.3,ease:"expo.out",stagger:{each:.02}})}))}function Kv(r){const e=j0(r);e.forEach(l=>l.setAttribute("aria-hidden","true"));const t=e.map((l,c)=>({el:l,i:c,w:560,d:88,cx:0,cy:0}));let n=!1,i=0;const s=()=>{t.forEach(l=>{const c=l.el.getBoundingClientRect();l.cx=c.left+c.width/2,l.cy=c.top+c.height/2})};qe.set(e,{yPercent:118,rotate:7,opacity:0,"--w":180,"--d":75});function a(l=0){return qe.to(e,{yPercent:0,rotate:0,opacity:1,"--w":560,"--d":88,duration:1.6,ease:"expo.out",stagger:{each:.035},delay:l,onComplete:()=>{n=!0}})}function o(l){if(!n||Ui)return;l-i>.25&&(s(),i=l);const c=pt.moved&&!ys&&K0()<6e3,u=230;t.forEach((d,h)=>{let f=0;if(c){const T=d.cx-pt.sx,v=d.cy-pt.sy;f=Math.exp(-(T*T+v*v)/(u*u))}const _=(.5+.5*Math.sin(l*.9-h*.42))*.34,m=Math.max(f,_*(c?.5:1)),g=is(430,830,m),M=is(80,100,m);d.w=is(d.w,g,.14),d.d=is(d.d,M,.14),d.el.style.setProperty("--w",d.w.toFixed(1)),d.el.style.setProperty("--d",d.d.toFixed(1))})}return rt.create({trigger:"#hero",start:"top top",end:"bottom top",scrub:!0,onUpdate:l=>{const c=l.progress;r.querySelectorAll(".line").forEach((u,d)=>{u.style.transform=`translate3d(${(d%2?1:-1)*c*120}px, ${c*-40}px, 0)`,u.style.opacity=String(Xn(1-c*1.25))})}}),{intro:a,update:o,chars:e}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="186",Jv=0,mp=1,Qv=2,ic=1,jv=2,so=3,_s=0,qn=1,cr=2,Zi=0,bo=1,ds=2,gp=3,_p=4,ex=5,aa=100,tx=101,nx=102,ix=103,rx=104,sx=200,ax=201,ox=202,lx=203,eg=204,tg=205,cx=206,ux=207,hx=208,fx=209,dx=210,px=211,mx=212,gx=213,_x=214,Sh=0,Mh=1,yh=2,Oo=3,bh=4,Th=5,Eh=6,wh=7,Xf=0,vx=1,xx=2,Ki=0,qf=1,Yf=2,$f=3,Vc=4,Zf=5,Kf=6,Jf=7,ng=300,vs=301,Ra=302,au=303,ou=304,Hc=306,Ah=1e3,Ii=1001,Ch=1002,Sn=1003,Sx=1004,ul=1005,mn=1006,lu=1007,rs=1008,ui=1009,ig=1010,rg=1011,Bo=1012,Qf=1013,Qi=1014,Ni=1015,Dn=1016,jf=1017,ed=1018,zo=1020,sg=35902,ag=35899,og=1021,lg=1022,wi=1023,gr=1026,ss=1027,td=1028,nd=1029,xs=1030,id=1031,rd=1033,rc=33776,sc=33777,ac=33778,oc=33779,Rh=35840,Ph=35841,Lh=35842,Dh=35843,Ih=36196,Nh=37492,Uh=37496,Fh=37488,Oh=37489,bc=37490,Bh=37491,zh=37808,kh=37809,Vh=37810,Hh=37811,Gh=37812,Wh=37813,Xh=37814,qh=37815,Yh=37816,$h=37817,Zh=37818,Kh=37819,Jh=37820,Qh=37821,jh=36492,ef=36494,tf=36495,nf=36283,rf=36284,Tc=36285,sf=36286,Mx=3200,Ec=0,yx=1,Rr="",si="srgb",wc="srgb-linear",Ac="linear",bt="srgb",cu=7680,bx=519,Tx=512,Ex=513,wx=514,sd=515,Ax=516,Cx=517,ad=518,Rx=519,cg=35044,vp=35048,xp="300 es",Yi=2e3,ko=2001;function Px(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Cc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Lx(){const r=Cc("canvas");return r.style.display="block",r}const Sp={};function Rc(...r){const e="THREE."+r.shift();console.log(e,...r)}function ug(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function nt(...r){r=ug(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function vt(...r){r=ug(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ma(...r){const e=r.join(" ");e in Sp||(Sp[e]=!0,nt(...r))}function Dx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ix={[Sh]:Mh,[yh]:Eh,[bh]:wh,[Oo]:Th,[Mh]:Sh,[Eh]:yh,[wh]:bh,[Th]:Oo};class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lc=Math.PI/180,af=180/Math.PI;function fr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function Nx(r,e){return(r%e+e)%e}function uu(r,e,t){return(1-t)*r+t*e}function Wi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vd=class vd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vd.prototype.isVector2=!0;let he=vd;class ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*_;m<0&&(h=-h,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);g=Math.sin(g*M)/T,o=Math.sin(o*M)/T,l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+_*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+_*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xd=class xd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xd.prototype.isVector3=!0;let F=xd;const hu=new F,Mp=new ji,Sd=class Sd{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],T=i[4],v=i[7],y=i[2],w=i[5],E=i[8];return s[0]=a*_+o*M+l*y,s[3]=a*m+o*T+l*w,s[6]=a*g+o*v+l*E,s[1]=c*_+u*M+d*y,s[4]=c*m+u*T+d*w,s[7]=c*g+u*v+d*E,s[2]=h*_+f*M+p*y,s[5]=h*m+f*T+p*w,s[8]=h*g+f*v+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fu.makeScale(e,t)),this}rotate(e){return Ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return Ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sd.prototype.isMatrix3=!0;let at=Sd;const fu=new at,yp=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ux(){const r={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(i.r=ya(i.r),i.g=ya(i.g),i.b=ya(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rr?Ac:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[wc]:{primaries:e,whitePoint:n,transfer:Ac,toXYZ:yp,fromXYZ:bp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:yp,fromXYZ:bp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const mt=Ux();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ya(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fs;class Fx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=Cc("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=dr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ox=0;class od{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(du(i[a].image)):s.push(du(i[a]))}else s=du(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function du(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let Bx=0;const pu=new F;class In extends bs{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,n=Ii,i=Ii,s=mn,a=rs,o=wi,l=ui,c=In.DEFAULT_ANISOTROPY,u=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=fr(),this.name="",this.source=new od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pu).x}get height(){return this.source.getSize(pu).y}get depth(){return this.source.getSize(pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=ng;In.DEFAULT_ANISOTROPY=1;const Md=class Md{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(f+1)/2,y=(g+1)/2,w=(u+h)/4,E=(d+_)/4,x=(p+m)/4;return T>v&&T>y?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=E/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=x/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=E/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Md.prototype.isVector4=!0;let Ht=Md;class zx extends bs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new In(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new od(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends zx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hg extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kx extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uc=class Uc{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vx,e,Hx)}lookAt(e,t,n){const i=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),yr.crossVectors(n,ei),yr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),yr.crossVectors(n,ei)),yr.normalize(),hl.crossVectors(ei,yr),i[0]=yr.x,i[4]=hl.x,i[8]=ei.x,i[1]=yr.y,i[5]=hl.y,i[9]=ei.y,i[2]=yr.z,i[6]=hl.z,i[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],T=n[7],v=n[11],y=n[15],w=i[0],E=i[4],x=i[8],b=i[12],C=i[1],D=i[5],L=i[9],H=i[13],N=i[2],z=i[6],X=i[10],B=i[14],Q=i[3],W=i[7],R=i[11],Z=i[15];return s[0]=a*w+o*C+l*N+c*Q,s[4]=a*E+o*D+l*z+c*W,s[8]=a*x+o*L+l*X+c*R,s[12]=a*b+o*H+l*B+c*Z,s[1]=u*w+d*C+h*N+f*Q,s[5]=u*E+d*D+h*z+f*W,s[9]=u*x+d*L+h*X+f*R,s[13]=u*b+d*H+h*B+f*Z,s[2]=p*w+_*C+m*N+g*Q,s[6]=p*E+_*D+m*z+g*W,s[10]=p*x+_*L+m*X+g*R,s[14]=p*b+_*H+m*B+g*Z,s[3]=M*w+T*C+v*N+y*Q,s[7]=M*E+T*D+v*z+y*W,s[11]=M*x+T*L+v*X+y*R,s[15]=M*b+T*H+v*B+y*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],M=l*f-c*h,T=o*f-c*d,v=o*h-l*d,y=a*f-c*u,w=a*h-l*u,E=a*d-o*u;return t*(_*M-m*T+g*v)-n*(p*M-m*y+g*w)+i*(p*T-_*y+g*E)-s*(p*v-_*w+m*E)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],M=t*o-n*a,T=t*l-i*a,v=t*c-s*a,y=n*l-i*o,w=n*c-s*o,E=i*c-s*l,x=u*_-d*p,b=u*m-h*p,C=u*g-f*p,D=d*m-h*_,L=d*g-f*_,H=h*g-f*m,N=M*H-T*L+v*D+y*C-w*b+E*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=(o*H-l*L+c*D)*z,e[1]=(i*L-n*H-s*D)*z,e[2]=(_*E-m*w+g*y)*z,e[3]=(h*w-d*E-f*y)*z,e[4]=(l*C-a*H-c*b)*z,e[5]=(t*H-i*C+s*b)*z,e[6]=(m*v-p*E-g*T)*z,e[7]=(u*E-h*v+f*T)*z,e[8]=(a*L-o*C+c*x)*z,e[9]=(n*C-t*L-s*x)*z,e[10]=(p*w-_*v+g*M)*z,e[11]=(d*v-u*w-f*M)*z,e[12]=(o*b-a*D-l*x)*z,e[13]=(t*D-n*b+i*x)*z,e[14]=(_*T-p*y-m*M)*z,e[15]=(u*y-d*T+h*M)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,p=s*d,_=a*u,m=a*d,g=o*d,M=l*c,T=l*u,v=l*d,y=n.x,w=n.y,E=n.z;return i[0]=(1-(_+g))*y,i[1]=(f+v)*y,i[2]=(p-T)*y,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(h+g))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(p+T)*E,i[9]=(m-M)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Os.set(i[0],i[1],i[2]).length();const o=Os.set(i[4],i[5],i[6]).length(),l=Os.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ci.copy(this);const c=1/a,u=1/o,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,t.setFromRotationMatrix(Ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Yi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Yi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ko)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Yi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Yi)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===ko)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Uc.prototype.isMatrix4=!0;let Et=Uc;const Os=new F,Ci=new Et,Vx=new F(0,0,0),Hx=new F(1,1,1),yr=new F,hl=new F,ei=new F,Tp=new Et,Ep=new ji;class mi{constructor(e=0,t=0,n=0,i=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gx=0;const wp=new F,Bs=new ji,tr=new Et,fl=new F,za=new F,Wx=new F,Xx=new ji,Ap=new F(1,0,0),Cp=new F(0,1,0),Rp=new F(0,0,1),Pp={type:"added"},qx={type:"removed"},zs={type:"childadded",child:null},mu={type:"childremoved",child:null};class _n extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new F,t=new mi,n=new ji,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new at}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,t){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fl.copy(e):fl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(za,fl,this.up):tr.lookAt(fl,za,this.up),this.quaternion.setFromRotationMatrix(tr),i&&(tr.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(tr),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),zs.child=e,this.dispatchEvent(zs),zs.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qx),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,Wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}_n.DEFAULT_UP=new F(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ur extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yx={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},dl={h:0,s:0,l:0};function _u(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Nx(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_u(a,s,e+1/3),this.g=_u(a,s,e),this.b=_u(a,s,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=si){function n(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const n=dg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return mt.workingToColorSpace(En.copy(this),e),Math.round(ft(En.r*255,0,255))*65536+Math.round(ft(En.g*255,0,255))*256+Math.round(ft(En.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(En.copy(this),t);const n=En.r,i=En.g,s=En.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=si){mt.workingToColorSpace(En.copy(this),e);const t=En.r,n=En.g,i=En.b;return e!==si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(dl);const n=uu(br.h,dl.h,t),i=uu(br.s,dl.s,t),s=uu(br.l,dl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new it;it.NAMES=dg;class ld{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new ld(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vo extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new F,nr=new F,vu=new F,ir=new F,ks=new F,Vs=new F,Lp=new F,xu=new F,Su=new F,Mu=new F,yu=new Ht,bu=new Ht,Tu=new Ht;class hi{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ri.subVectors(i,t),nr.subVectors(n,t),vu.subVectors(e,t);const a=Ri.dot(Ri),o=Ri.dot(nr),l=Ri.dot(vu),c=nr.dot(nr),u=nr.dot(vu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(a,ir.y),l.addScaledVector(o,ir.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return yu.setScalar(0),bu.setScalar(0),Tu.setScalar(0),yu.fromBufferAttribute(e,t),bu.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(yu,s.x),a.addScaledVector(bu,s.y),a.addScaledVector(Tu,s.z),a}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),nr.subVectors(e,t),Ri.cross(nr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Ri.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return hi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ks.subVectors(i,n),Vs.subVectors(s,n),xu.subVectors(e,n);const l=ks.dot(xu),c=Vs.dot(xu);if(l<=0&&c<=0)return t.copy(n);Su.subVectors(e,i);const u=ks.dot(Su),d=Vs.dot(Su);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ks,a);Mu.subVectors(e,s);const f=ks.dot(Mu),p=Vs.dot(Mu);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Vs,o);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Lp.subVectors(s,i),o=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(Lp,o);const g=1/(m+_+h);return a=_*g,o=h*g,t.copy(n).addScaledVector(ks,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ts{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pl.copy(n.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),ml.subVectors(this.max,ka),Hs.subVectors(e.a,ka),Gs.subVectors(e.b,ka),Ws.subVectors(e.c,ka),Tr.subVectors(Gs,Hs),Er.subVectors(Ws,Gs),qr.subVectors(Hs,Ws);let t=[0,-Tr.z,Tr.y,0,-Er.z,Er.y,0,-qr.z,qr.y,Tr.z,0,-Tr.x,Er.z,0,-Er.x,qr.z,0,-qr.x,-Tr.y,Tr.x,0,-Er.y,Er.x,0,-qr.y,qr.x,0];return!Eu(t,Hs,Gs,Ws,ml)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,Hs,Gs,Ws,ml))?!1:(gl.crossVectors(Tr,Er),t=[gl.x,gl.y,gl.z],Eu(t,Hs,Gs,Ws,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new F,new F,new F,new F,new F,new F,new F,new F],Pi=new F,pl=new Ts,Hs=new F,Gs=new F,Ws=new F,Tr=new F,Er=new F,qr=new F,ka=new F,ml=new F,gl=new F,Yr=new F;function Eu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Yr.fromArray(r,s);const o=i.x*Math.abs(Yr.x)+i.y*Math.abs(Yr.y)+i.z*Math.abs(Yr.z),l=e.dot(Yr),c=t.dot(Yr),u=n.dot(Yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const en=new F,_l=new he;let $x=0;class Pn extends bs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cg,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class pg extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mg extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Zx=new Ts,Va=new F,wu=new F;class Es{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(wu)),this.expandByPoint(Va.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kx=0;const Si=new Et,Au=new _n,Xs=new F,ti=new Ts,Ha=new Ts,fn=new F;class un extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Px(e)?mg:pg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(ti.min,Ha.min),ti.expandByPoint(fn),fn.addVectors(ti.max,Ha.max),ti.expandByPoint(fn)):(ti.expandByPoint(Ha.min),ti.expandByPoint(Ha.max))}ti.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)fn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fn.fromBufferAttribute(o,c),l&&(Xs.fromBufferAttribute(e,c),fn.add(Xs)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;const c=new F,u=new F,d=new F,h=new he,f=new he,p=new he,_=new F,m=new F;function g(x,b,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,C),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),o[x].add(_),o[b].add(_),o[C].add(_),l[x].add(m),l[b].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){const C=M[x],D=C.start,L=C.count;for(let H=D,N=D+L;H<N;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new F,v=new F,y=new F,w=new F;function E(x){y.fromBufferAttribute(i,x),w.copy(y);const b=o[x];T.copy(b),T.sub(y.multiplyScalar(y.dot(b))).normalize(),v.crossVectors(w,b);const D=v.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,D)}for(let x=0,b=M.length;x<b;++x){const C=M[x],D=C.start,L=C.count;for(let H=D,N=D+L;H<N;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Pn(h,u,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cg,this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Bn=new F;class Pc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Rc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Rc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cu=new F,Qx=new F,jx=new at;class Cr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cu.subVectors(n,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Cu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jx.getNormalMatrix(e),i=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let eS=0;class _r extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=bo,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eg,this.blendDst=tg,this.blendEquation=aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cu,this.stencilZFail=cu,this.stencilZPass=cu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Cr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gg extends _r{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qs;const Ga=new F,Ys=new F,$s=new F,Zs=new he,Wa=new he,_g=new Et,vl=new F,Xa=new F,xl=new F,Dp=new he,Ru=new he,Ip=new he;class tS extends _n{constructor(e=new gg){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jx(t,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new Pc(n,3,0,!1)),qs.setAttribute("uv",new Pc(n,2,3,!1))}this.geometry=qs,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),_g.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-$s.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Sl(vl.set(-.5,-.5,0),$s,a,Ys,i,s),Sl(Xa.set(.5,-.5,0),$s,a,Ys,i,s),Sl(xl.set(.5,.5,0),$s,a,Ys,i,s),Dp.set(0,0),Ru.set(1,0),Ip.set(1,1);let o=e.ray.intersectTriangle(vl,Xa,xl,!1,Ga);if(o===null&&(Sl(Xa.set(-.5,.5,0),$s,a,Ys,i,s),Ru.set(0,1),o=e.ray.intersectTriangle(vl,xl,Xa,!1,Ga),o===null))return;const l=e.ray.origin.distanceTo(Ga);l<e.near||l>e.far||t.push({distance:l,point:Ga.clone(),uv:hi.getInterpolation(Ga,vl,Xa,xl,Dp,Ru,Ip,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sl(r,e,t,n,i,s){Zs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Wa.x=s*Zs.x-i*Zs.y,Wa.y=i*Zs.x+s*Zs.y):Wa.copy(Zs),r.copy(e),r.x+=Wa.x,r.y+=Wa.y,r.applyMatrix4(_g)}const sr=new F,Pu=new F,Ml=new F,yl=new F;class cd{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pu.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),yl.copy(this.origin).sub(Pu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ml),o=yl.dot(this.direction),l=-yl.dot(Ml),c=yl.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pu).addScaledVector(Ml,h),f}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),i=sr.dot(sr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=n.x-a.x,M=n.y-a.y,T=n.z-a.z,v=Math.abs(l),y=Math.abs(c),w=Math.abs(u);let E,x,b,C,D,L,H,N,z,X,B,Q;if(v>=y&&v>=w?(b=l,L=d,z=p,Q=g,l>=0?(E=c,x=u,C=h,D=f,H=_,N=m,X=M,B=T):(E=u,x=c,C=f,D=h,H=m,N=_,X=T,B=M)):y>=w?(b=c,L=h,z=_,Q=M,c>=0?(E=u,x=l,C=f,D=d,H=m,N=p,X=T,B=g):(E=l,x=u,C=d,D=f,H=p,N=m,X=g,B=T)):(b=u,L=f,z=m,Q=T,u>=0?(E=l,x=c,C=d,D=h,H=p,N=_,X=g,B=M):(E=c,x=l,C=h,D=d,H=_,N=p,X=M,B=g)),b===0)return null;const W=E/b,R=x/b,Z=1/b,Se=C-W*L,Te=D-R*L,We=H-W*z,De=N-R*z,Oe=X-W*Q,q=B-R*Q,ee=Oe*De-q*We,ve=Se*q-Te*Oe,He=We*Te-De*Se;if(i){if(ee<0||ve<0||He<0)return null}else if((ee<0||ve<0||He<0)&&(ee>0||ve>0||He>0))return null;const me=ee+ve+He;if(me===0)return null;const Re=Z*(ee*L+ve*z+He*Q);return(me>0?Re<0:Re>0)?null:this.at(Re/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ho extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Np=new Et,$r=new cd,bl=new Es,Up=new F,Tl=new F,El=new F,wl=new F,Lu=new F,Al=new F,Fp=new F,Cl=new F;class Ot extends _n{constructor(e=new un,t=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Lu.fromBufferAttribute(d,e),a?Al.addScaledVector(Lu,u):Al.addScaledVector(Lu.sub(t),u))}t.add(Al)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(bl.containsPoint($r.origin)===!1&&($r.intersectSphere(bl,Up)===null||$r.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Np.copy(s).invert(),$r.copy(e.ray).applyMatrix4(Np),!(n.boundingBox!==null&&$r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,y=T;v<y;v+=3){const w=o.getX(v),E=o.getX(v+1),x=o.getX(v+2);i=Rl(this,g,e,n,c,u,d,w,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);i=Rl(this,a,e,n,c,u,d,M,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,y=T;v<y;v+=3){const w=v,E=v+1,x=v+2;i=Rl(this,g,e,n,c,u,d,w,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=m,T=m+1,v=m+2;i=Rl(this,a,e,n,c,u,d,M,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function nS(r,e,t,n,i,s,a,o){let l;if(e.side===qn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===_s,o),l===null)return null;Cl.copy(o),Cl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:r}}function Rl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Tl),r.getVertexPosition(l,El),r.getVertexPosition(c,wl);const u=nS(r,e,t,n,Tl,El,wl,Fp);if(u){const d=new F;hi.getBarycoord(Fp,Tl,El,wl,d),i&&(u.uv=hi.getInterpolatedAttribute(i,o,l,c,d,new he)),s&&(u.uv1=hi.getInterpolatedAttribute(s,o,l,c,d,new he)),a&&(u.normal=hi.getInterpolatedAttribute(a,o,l,c,d,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};hi.getNormal(Tl,El,wl,h.normal),u.face=h,u.barycoord=d}return u}class vg extends In{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Sn,u=Sn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Op extends Pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new Et,Bp=new Et,Pl=[],zp=new Ts,iS=new Et,qa=new Ot,Ya=new Es;class ao extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Op(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,iS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),zp.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(zp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Ya.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qa.geometry=this.geometry,qa.material=this.material,qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(n),e.ray.intersectsSphere(Ya)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ks),Bp.multiplyMatrices(n,Ks),qa.matrixWorld=Bp,qa.raycast(e,Pl);for(let a=0,o=Pl.length;a<o;a++){const l=Pl[a];l.instanceId=s,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Op(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new vg(new Float32Array(i*this.count),i,this.count,td,Ni));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zr=new Es,rS=new he(.5,.5),Ll=new F;class ud{constructor(e=new Cr,t=new Cr,n=new Cr,i=new Cr,s=new Cr,a=new Cr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],M=s[12],T=s[13],v=s[14],y=s[15];if(i[0].setComponents(c-a,f-u,g-p,y-M).normalize(),i[1].setComponents(c+a,f+u,g+p,y+M).normalize(),i[2].setComponents(c+o,f+d,g+_,y+T).normalize(),i[3].setComponents(c-o,f-d,g-_,y-T).normalize(),n)i[4].setComponents(l,h,m,v).normalize(),i[5].setComponents(c-l,f-h,g-m,y-v).normalize();else if(i[4].setComponents(c-l,f-h,g-m,y-v).normalize(),t===Yi)i[5].setComponents(c+l,f+h,g+m,y+v).normalize();else if(t===ko)i[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const t=rS.distanceTo(e.center);return Zr.radius=.7071067811865476+t,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ll.x=i.normal.x>0?e.max.x:e.min.x,Ll.y=i.normal.y>0?e.max.y:e.min.y,Ll.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xg extends _r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new F,Dc=new F,kp=new Et,$a=new cd,Dl=new Es,Du=new F,Vp=new F;class sS extends _n{constructor(e=new un,t=new xg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Lc.fromBufferAttribute(t,i-1),Dc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Dc);e.setAttribute("lineDistance",new qt(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(i),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;kp.copy(i).invert(),$a.copy(e.ray).applyMatrix4(kp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=u.getX(_),M=u.getX(_+1),T=Il(this,e,$a,l,g,M,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(f),g=Il(this,e,$a,l,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=Il(this,e,$a,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Il(this,e,$a,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Il(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Lc.fromBufferAttribute(o,i),Dc.fromBufferAttribute(o,s),t.distanceSqToSegment(Lc,Dc,Du,Vp)>n)return;Du.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Du);if(!(c<e.near||c>e.far))return{distance:c,point:Vp.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Hp=new F,Gp=new F;class aS extends sS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Hp.fromBufferAttribute(t,i),Gp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hp.distanceTo(Gp);e.setAttribute("lineDistance",new qt(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sg extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wp=new Et,of=new cd,Nl=new Es,Ul=new F;class Mg extends _n{constructor(e=new un,t=new Sg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(i),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;Wp.copy(i).invert(),of.copy(e.ray).applyMatrix4(Wp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,_=f;p<_;p++){const m=c.getX(p);Ul.fromBufferAttribute(d,m),Xp(Ul,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,_=f;p<_;p++)Ul.fromBufferAttribute(d,p),Xp(Ul,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xp(r,e,t,n,i,s,a){const o=of.distanceSqToPoint(r);if(o<t){const l=new F;of.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yg extends In{constructor(e=[],t=vs,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oS extends In{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Go extends In{constructor(e,t,n=Qi,i,s,a,o=Sn,l=Sn,c,u=gr,d=1){if(u!==gr&&u!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new od(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class lS extends Go{constructor(e,t=Qi,n=vs,i,s,a=Sn,o=Sn,l,c=gr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bg extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ws extends un{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function p(_,m,g,M,T,v,y,w,E,x,b){const C=v/E,D=y/x,L=v/2,H=y/2,N=w/2,z=E+1,X=x+1;let B=0,Q=0;const W=new F;for(let R=0;R<X;R++){const Z=R*D-H;for(let Se=0;Se<z;Se++){const Te=Se*C-L;W[_]=Te*M,W[m]=Z*T,W[g]=N,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[g]=w>0?1:-1,u.push(W.x,W.y,W.z),d.push(Se/E),d.push(1-R/x),B+=1}}for(let R=0;R<x;R++)for(let Z=0;Z<E;Z++){const Se=h+Z+z*R,Te=h+Z+z*(R+1),We=h+(Z+1)+z*(R+1),De=h+(Z+1)+z*R;l.push(Se,Te,De),l.push(Te,We,De),Q+=6}o.addGroup(f,Q,b),f+=Q,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gc extends un{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new F,v=new F,y=new F;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],v),f(t[w+2],y),l(T,v,y,M)}function l(M,T,v,y){const w=y+1,E=[];for(let x=0;x<=w;x++){E[x]=[];const b=M.clone().lerp(v,x/w),C=T.clone().lerp(v,x/w),D=w-x;for(let L=0;L<=D;L++)L===0&&x===w?E[x][L]=b:E[x][L]=b.clone().lerp(C,L/D)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){const C=Math.floor(b/2);b%2===0?(h(E[x][C+1]),h(E[x+1][C]),h(E[x][C])):(h(E[x][C+1]),h(E[x+1][C+1]),h(E[x+1][C]))}}function c(M){const T=new F;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(M),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function u(){const M=new F;for(let T=0;T<s.length;T+=3){M.x=s[T+0],M.y=s[T+1],M.z=s[T+2];const v=m(M)/2/Math.PI+.5,y=g(M)/Math.PI+.5;a.push(v,1-y)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){const T=a[M+0],v=a[M+2],y=a[M+4],w=Math.max(T,v,y),E=Math.min(T,v,y);w>.9&&E<.1&&(T<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),y<.2&&(a[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function f(M,T){const v=M*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function p(){const M=new F,T=new F,v=new F,y=new F,w=new he,E=new he,x=new he;for(let b=0,C=0;b<s.length;b+=9,C+=6){M.set(s[b+0],s[b+1],s[b+2]),T.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),w.set(a[C+0],a[C+1]),E.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),y.copy(M).add(T).add(v).divideScalar(3);const D=m(y);_(w,C+0,M,D),_(E,C+2,T,D),_(x,C+4,v,D)}}function _(M,T,v,y){y<0&&M.x===1&&(a[T]=M.x-1),v.x===0&&v.z===0&&(a[T]=y/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.vertices,e.indices,e.radius,e.detail)}}const Fl=new F,Ol=new F,Iu=new F,Bl=new hi;class cS extends un{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(lc*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=Bl;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Bl.getNormal(Iu),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const T=(M+1)%3,v=d[M],y=d[T],w=Bl[u[M]],E=Bl[u[T]],x=`${v}_${y}`,b=`${y}_${v}`;b in h&&h[b]?(Iu.dot(h[b].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),h[b]=null):x in h||(h[x]={index0:c[M],index1:c[T],normal:Iu.clone()})}}for(const p in h)if(h[p]){const{index0:_,index1:m}=h[p];Fl.fromBufferAttribute(o,_),Ol.fromBufferAttribute(o,m),f.push(Fl.x,Fl.y,Fl.z),f.push(Ol.x,Ol.y,Ol.z)}this.setAttribute("position",new qt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class er{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new he:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,i=[],s=[],a=[],o=new F,l=new Et;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ft(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ft(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hd extends er{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uS extends hd{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fd(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const qp=new F,Yp=new F,Nu=new fd,Uu=new fd,Fu=new fd;class hS extends er{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Yp.subVectors(i[0],i[1]).add(i[0]),c=Yp);const d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(qp.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=qp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Nu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,m),Uu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,m),Fu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(Nu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Uu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Fu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Nu.calc(l),Uu.calc(l),Fu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $p(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function fS(r,e){const t=1-r;return t*t*e}function dS(r,e){return 2*(1-r)*r*e}function pS(r,e){return r*r*e}function To(r,e,t,n){return fS(r,e)+dS(r,t)+pS(r,n)}function mS(r,e){const t=1-r;return t*t*t*e}function gS(r,e){const t=1-r;return 3*t*t*r*e}function _S(r,e){return 3*(1-r)*r*r*e}function vS(r,e){return r*r*r*e}function Eo(r,e,t,n,i){return mS(r,e)+gS(r,t)+_S(r,n)+vS(r,i)}class Tg extends er{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Eo(e,i.x,s.x,a.x,o.x),Eo(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xS extends er{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Eo(e,i.x,s.x,a.x,o.x),Eo(e,i.y,s.y,a.y,o.y),Eo(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Eg extends er{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SS extends er{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wg extends er{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(To(e,i.x,s.x,a.x),To(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MS extends er{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(To(e,i.x,s.x,a.x),To(e,i.y,s.y,a.y),To(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ag extends er{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set($p(o,l.x,c.x,u.x,d.x),$p(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var lf=Object.freeze({__proto__:null,ArcCurve:uS,CatmullRomCurve3:hS,CubicBezierCurve:Tg,CubicBezierCurve3:xS,EllipseCurve:hd,LineCurve:Eg,LineCurve3:SS,QuadraticBezierCurve:wg,QuadraticBezierCurve3:MS,SplineCurve:Ag});class yS extends er{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new lf[i.type]().fromJSON(i))}return this}}class cf extends yS{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Eg(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new wg(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Tg(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ag(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new hd(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cg extends cf{constructor(e){super(e),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new cf().fromJSON(i))}return this}}function bS(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Rg(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=CS(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let u=o,d=l;for(let h=t;h<i;h+=t){const f=r[h],p=r[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Wo(s,a,t,o,l,c,0),a}function Rg(r,e,t,n,i){let s;if(i===zS(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Zp(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Zp(a/n|0,r[a],r[a+1],s);return s&&Pa(s,s.next)&&(qo(s),s=s.next),s}function Ss(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Pa(t,t.next)||Gt(t.prev,t,t.next)===0)){if(qo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wo(r,e,t,n,i,s,a){if(!r)return;!a&&s&&IS(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?ES(r,n,i,s):TS(r)){e.push(l.i,r.i,c.i),qo(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=wS(Ss(r),e),Wo(r,e,t,n,i,s,2)):a===2&&AS(r,e,t,n,i,s):Wo(Ss(r),e,t,n,i,s,1);break}}}function TS(r){const e=r.prev,t=r,n=r.next;if(Gt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,s,a),d=Math.min(o,l,c),h=Math.max(i,s,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&oo(i,o,s,l,a,c,p.x,p.y)&&Gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ES(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Gt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,d=s.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),_=Math.max(o,l,c),m=Math.max(u,d,h),g=uf(f,p,e,t,n),M=uf(_,m,e,t,n);let T=r.prevZ,v=r.nextZ;for(;T&&T.z>=g&&v&&v.z<=M;){if(T.x>=f&&T.x<=_&&T.y>=p&&T.y<=m&&T!==i&&T!==a&&oo(o,u,l,d,c,h,T.x,T.y)&&Gt(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&oo(o,u,l,d,c,h,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=g;){if(T.x>=f&&T.x<=_&&T.y>=p&&T.y<=m&&T!==i&&T!==a&&oo(o,u,l,d,c,h,T.x,T.y)&&Gt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&oo(o,u,l,d,c,h,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wS(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Pa(n,i)&&Lg(n,t,t.next,i)&&Xo(n,i)&&Xo(i,n)&&(e.push(n.i,t.i,i.i),qo(t),qo(t.next),t=r=i),t=t.next}while(t!==r);return Ss(t)}function AS(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&FS(a,o)){let l=Dg(a,o);a=Ss(a,a.next),l=Ss(l,l.next),Wo(a,e,t,n,i,s,0),Wo(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function CS(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Rg(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(US(c))}i.sort(RS);for(let s=0;s<i.length;s++)t=PS(i[s],t);return t}function RS(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function PS(r,e){const t=LS(r,e);if(!t)return e;const n=Dg(t,r);return Ss(n,n.next),Ss(t,t.next)}function LS(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Pa(r,t))return t;do{if(Pa(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Pg(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Xo(t,r)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&DS(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function DS(r,e){return Gt(r.prev,r,e.prev)<0&&Gt(e.next,r,r.next)<0}function IS(r,e,t,n){let i=r;do i.z===0&&(i.z=uf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,NS(i)}function NS(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function uf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function US(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Pg(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function oo(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Pg(r,e,t,n,i,s,a,o)}function FS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!OS(r,e)&&(Xo(r,e)&&Xo(e,r)&&BS(r,e)&&(Gt(r.prev,r,e.prev)||Gt(r,e.prev,e))||Pa(r,e)&&Gt(r.prev,r,r.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Pa(r,e){return r.x===e.x&&r.y===e.y}function Lg(r,e,t,n){const i=kl(Gt(r,e,t)),s=kl(Gt(r,e,n)),a=kl(Gt(t,n,r)),o=kl(Gt(t,n,e));return!!(i!==s&&a!==o||i===0&&zl(r,t,e)||s===0&&zl(r,n,e)||a===0&&zl(t,r,n)||o===0&&zl(t,e,n))}function zl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function kl(r){return r>0?1:r<0?-1:0}function OS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Lg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Xo(r,e){return Gt(r.prev,r,r.next)<0?Gt(r,e,r.next)>=0&&Gt(r,r.prev,e)>=0:Gt(r,e,r.prev)<0||Gt(r,r.next,e)<0}function BS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Dg(r,e){const t=hf(r.i,r.x,r.y),n=hf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Zp(r,e,t,n){const i=hf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function hf(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zS(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class kS{static triangulate(e,t,n=2){return bS(e,t,n)}}class fa{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return fa.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Kp(e),Jp(n,e);let a=e.length;t.forEach(Kp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Jp(n,t[l]);const o=kS.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Kp(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Jp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class dd extends un{constructor(e=new Cg([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:VS;let T,v=!1,y,w,E,x;if(g){T=g.getSpacedPoints(u),v=!0,h=!1;const J=g.isCatmullRomCurve3?g.closed:!1;y=g.computeFrenetFrames(u,J),w=new F,E=new F,x=new F}h||(m=0,f=0,p=0,_=0);const b=o.extractPoints(c);let C=b.shape;const D=b.holes;if(!fa.isClockWise(C)){C=C.reverse();for(let J=0,oe=D.length;J<oe;J++){const ue=D[J];fa.isClockWise(ue)&&(D[J]=ue.reverse())}}function H(J){const ue=10000000000000001e-36;let I=J[0];for(let ge=1;ge<=J.length;ge++){const Ne=ge%J.length,Ue=J[Ne],Ae=Ue.x-I.x,Xe=Ue.y-I.y,U=Ae*Ae+Xe*Xe,st=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(I.x),Math.abs(I.y)),Ye=ue*st*st;if(U<=Ye){J.splice(Ne,1),ge--;continue}I=Ue}}H(C),D.forEach(H);const N=D.length,z=C;for(let J=0;J<N;J++){const oe=D[J];C=C.concat(oe)}function X(J,oe,ue){return oe||vt("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(oe,ue)}const B=C.length;function Q(J,oe,ue){let I,ge,Ne;const Ue=J.x-oe.x,Ae=J.y-oe.y,Xe=ue.x-J.x,U=ue.y-J.y,st=Ue*Ue+Ae*Ae,Ye=Ue*U-Ae*Xe;if(Math.abs(Ye)>Number.EPSILON){const P=Math.sqrt(st),S=Math.sqrt(Xe*Xe+U*U),V=oe.x-Ae/P,G=oe.y+Ue/P,j=ue.x-U/S,_e=ue.y+Xe/S,pe=((j-V)*U-(_e-G)*Xe)/(Ue*U-Ae*Xe);I=V+Ue*pe-J.x,ge=G+Ae*pe-J.y;const te=I*I+ge*ge;if(te<=2)return new he(I,ge);Ne=Math.sqrt(te/2)}else{let P=!1;Ue>Number.EPSILON?Xe>Number.EPSILON&&(P=!0):Ue<-Number.EPSILON?Xe<-Number.EPSILON&&(P=!0):Math.sign(Ae)===Math.sign(U)&&(P=!0),P?(I=-Ae,ge=Ue,Ne=Math.sqrt(st)):(I=Ue,ge=Ae,Ne=Math.sqrt(st/2))}return new he(I/Ne,ge/Ne)}const W=[];for(let J=0,oe=z.length,ue=oe-1,I=J+1;J<oe;J++,ue++,I++)ue===oe&&(ue=0),I===oe&&(I=0),W[J]=Q(z[J],z[ue],z[I]);const R=[];let Z,Se=W.concat();for(let J=0,oe=N;J<oe;J++){const ue=D[J];Z=[];for(let I=0,ge=ue.length,Ne=ge-1,Ue=I+1;I<ge;I++,Ne++,Ue++)Ne===ge&&(Ne=0),Ue===ge&&(Ue=0),Z[I]=Q(ue[I],ue[Ne],ue[Ue]);R.push(Z),Se=Se.concat(Z)}let Te;if(m===0)Te=fa.triangulateShape(z,D);else{const J=[],oe=[];for(let ue=0;ue<m;ue++){const I=ue/m,ge=f*Math.cos(I*Math.PI/2),Ne=p*Math.sin(I*Math.PI/2)+_;for(let Ue=0,Ae=z.length;Ue<Ae;Ue++){const Xe=X(z[Ue],W[Ue],Ne);ve(Xe.x,Xe.y,-ge),I===0&&J.push(Xe)}for(let Ue=0,Ae=N;Ue<Ae;Ue++){const Xe=D[Ue];Z=R[Ue];const U=[];for(let st=0,Ye=Xe.length;st<Ye;st++){const P=X(Xe[st],Z[st],Ne);ve(P.x,P.y,-ge),I===0&&U.push(P)}I===0&&oe.push(U)}}Te=fa.triangulateShape(J,oe)}const We=Te.length,De=p+_;for(let J=0;J<B;J++){const oe=h?X(C[J],Se[J],De):C[J];v?(E.copy(y.normals[0]).multiplyScalar(oe.x),w.copy(y.binormals[0]).multiplyScalar(oe.y),x.copy(T[0]).add(E).add(w),ve(x.x,x.y,x.z)):ve(oe.x,oe.y,0)}for(let J=1;J<=u;J++)for(let oe=0;oe<B;oe++){const ue=h?X(C[oe],Se[oe],De):C[oe];v?(E.copy(y.normals[J]).multiplyScalar(ue.x),w.copy(y.binormals[J]).multiplyScalar(ue.y),x.copy(T[J]).add(E).add(w),ve(x.x,x.y,x.z)):ve(ue.x,ue.y,d/u*J)}for(let J=m-1;J>=0;J--){const oe=J/m,ue=f*Math.cos(oe*Math.PI/2),I=p*Math.sin(oe*Math.PI/2)+_;for(let ge=0,Ne=z.length;ge<Ne;ge++){const Ue=X(z[ge],W[ge],I);ve(Ue.x,Ue.y,d+ue)}for(let ge=0,Ne=D.length;ge<Ne;ge++){const Ue=D[ge];Z=R[ge];for(let Ae=0,Xe=Ue.length;Ae<Xe;Ae++){const U=X(Ue[Ae],Z[Ae],I);v?ve(U.x,U.y+T[u-1].y,T[u-1].x+ue):ve(U.x,U.y,d+ue)}}}Oe(),q();function Oe(){const J=i.length/3;if(h){let oe=0,ue=B*oe;for(let I=0;I<We;I++){const ge=Te[I];He(ge[2]+ue,ge[1]+ue,ge[0]+ue)}oe=u+m*2,ue=B*oe;for(let I=0;I<We;I++){const ge=Te[I];He(ge[0]+ue,ge[1]+ue,ge[2]+ue)}}else{for(let oe=0;oe<We;oe++){const ue=Te[oe];He(ue[2],ue[1],ue[0])}for(let oe=0;oe<We;oe++){const ue=Te[oe];He(ue[0]+B*u,ue[1]+B*u,ue[2]+B*u)}}n.addGroup(J,i.length/3-J,0)}function q(){const J=i.length/3;let oe=0;ee(z,oe),oe+=z.length;for(let ue=0,I=D.length;ue<I;ue++){const ge=D[ue];ee(ge,oe),oe+=ge.length}n.addGroup(J,i.length/3-J,1)}function ee(J,oe){let ue=J.length;for(;--ue>=0;){const I=ue;let ge=ue-1;ge<0&&(ge=J.length-1);for(let Ne=0,Ue=u+m*2;Ne<Ue;Ne++){const Ae=B*Ne,Xe=B*(Ne+1),U=oe+I+Ae,st=oe+ge+Ae,Ye=oe+ge+Xe,P=oe+I+Xe;me(U,st,Ye,P)}}}function ve(J,oe,ue){l.push(J),l.push(oe),l.push(ue)}function He(J,oe,ue){Re(J),Re(oe),Re(ue);const I=i.length/3,ge=M.generateTopUV(n,i,I-3,I-2,I-1);Ie(ge[0]),Ie(ge[1]),Ie(ge[2])}function me(J,oe,ue,I){Re(J),Re(oe),Re(I),Re(oe),Re(ue),Re(I);const ge=i.length/3,Ne=M.generateSideWallUV(n,i,ge-6,ge-3,ge-2,ge-1);Ie(Ne[0]),Ie(Ne[1]),Ie(Ne[3]),Ie(Ne[1]),Ie(Ne[2]),Ie(Ne[3])}function Re(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Ie(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return HS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new lf[i.type]().fromJSON(i)),new dd(n,e.options)}}const VS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(s,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-d),new he(h,1-p),new he(_,1-g)]:[new he(o,1-l),new he(u,1-d),new he(f,1-p),new he(m,1-g)]}};function HS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ic extends Gc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ic(e.radius,e.detail)}}class Nc extends Gc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nc(e.radius,e.detail)}}class Ia extends un{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const M=g*h-a;for(let T=0;T<c;T++){const v=T*d-s;p.push(v,-M,0),_.push(0,0,1),m.push(T/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const T=M+c*g,v=M+c*(g+1),y=M+1+c*(g+1),w=M+1+c*g;f.push(T,v,w),f.push(v,y,w)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class pd extends un{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new F,f=new F,p=new F;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let g=0;g<=i;g++){const M=g/i*s;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,M=(i+1)*(_-1)+m-1,T=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(g,M,v),l.push(M,T,v)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function La(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Qp(i))i.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Qp(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const n=La(r[t]);for(const i in n)e[i]=n[i]}return e}function Qp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function GS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ig(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Yo={clone:La,merge:kn};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(i.value);break;case"v2":this.uniforms[n].value=new he().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new at().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ng extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $o extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qS extends $o{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class YS extends _r{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Xf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $S extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZS extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ug extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ou=new Et,jp=new F,em=new F;class KS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(jp),em.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(em),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ou.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ou,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===ko||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new F,Hl=new ji,Bi=new F;class Fg extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Hl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vl,Hl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new F,tm=new he,nm=new he;class oi extends Fg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=af*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return af*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,tm,nm),t.subVectors(nm,tm)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class JS extends KS{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class lo extends Ug{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new JS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ko extends Fg{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QS extends Ug{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Js=-90,Qs=1;class jS extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new oi(Js,Qs,e,t);i.layers=this.layers,this.add(i);const s=new oi(Js,Qs,e,t);s.layers=this.layers,this.add(s);const a=new oi(Js,Qs,e,t);a.layers=this.layers,this.add(a);const o=new oi(Js,Qs,e,t);o.layers=this.layers,this.add(o);const l=new oi(Js,Qs,e,t);l.layers=this.layers,this.add(l);const c=new oi(Js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class eM extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=nM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function nM(){this._document.hidden===!1&&this.reset()}const yd=class yd{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};yd.prototype.isMatrix2=!0;let im=yd;function rm(r,e,t,n){const i=iM(n);switch(t){case og:return r*e;case td:return r*e/i.components*i.byteLength;case nd:return r*e/i.components*i.byteLength;case xs:return r*e*2/i.components*i.byteLength;case id:return r*e*2/i.components*i.byteLength;case lg:return r*e*3/i.components*i.byteLength;case wi:return r*e*4/i.components*i.byteLength;case rd:return r*e*4/i.components*i.byteLength;case rc:case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ac:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Dh:return Math.max(r,16)*Math.max(e,8)/4;case Rh:case Lh:return Math.max(r,8)*Math.max(e,8)/2;case Ih:case Nh:case Fh:case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uh:case bc:case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jh:case ef:case tf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Tc:case sf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iM(r){switch(r){case ui:case ig:return{byteLength:1,components:1};case Bo:case rg:case Dn:return{byteLength:2,components:1};case jf:case ed:return{byteLength:2,components:4};case Qi:case Qf:case Ni:return{byteLength:4,components:1};case sg:case ag:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Og(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rM(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var sM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",FM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,JM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:sM,alphahash_pars_fragment:aM,alphamap_fragment:oM,alphamap_pars_fragment:lM,alphatest_fragment:cM,alphatest_pars_fragment:uM,aomap_fragment:hM,aomap_pars_fragment:fM,batching_pars_vertex:dM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:xM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:bM,color_fragment:TM,color_pars_fragment:EM,color_pars_vertex:wM,color_vertex:AM,common:CM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:PM,displacementmap_pars_vertex:LM,displacementmap_vertex:DM,emissivemap_fragment:IM,emissivemap_pars_fragment:NM,colorspace_fragment:UM,colorspace_pars_fragment:FM,envmap_fragment:OM,envmap_common_pars_fragment:BM,envmap_pars_fragment:zM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:JM,envmap_vertex:VM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:WM,fog_pars_fragment:XM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:YM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:ZM,lights_pars_begin:KM,lights_toon_fragment:QM,lights_toon_pars_fragment:jM,lights_phong_fragment:ey,lights_phong_pars_fragment:ty,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:sy,lights_fragment_end:ay,lightprobes_pars_fragment:oy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:hy,map_fragment:fy,map_pars_fragment:dy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphinstance_vertex:vy,morphcolor_vertex:xy,morphnormal_vertex:Sy,morphtarget_pars_vertex:My,morphtarget_vertex:yy,normal_fragment_begin:by,normal_fragment_maps:Ty,normal_pars_fragment:Ey,normal_pars_vertex:wy,normal_vertex:Ay,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Iy,packing:Ny,premultiplied_alpha_fragment:Uy,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:By,roughnessmap_fragment:zy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Hy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:qy,skinning_vertex:Yy,skinnormal_vertex:$y,specularmap_fragment:Zy,specularmap_pars_fragment:Ky,tonemapping_fragment:Jy,tonemapping_pars_fragment:Qy,transmission_fragment:jy,transmission_pars_fragment:e1,uv_pars_fragment:t1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:r1,background_vert:s1,background_frag:a1,backgroundCube_vert:o1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:h1,depth_frag:f1,distance_vert:d1,distance_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:_1,linedashed_frag:v1,meshbasic_vert:x1,meshbasic_frag:S1,meshlambert_vert:M1,meshlambert_frag:y1,meshmatcap_vert:b1,meshmatcap_frag:T1,meshnormal_vert:E1,meshnormal_frag:w1,meshphong_vert:A1,meshphong_frag:C1,meshphysical_vert:R1,meshphysical_frag:P1,meshtoon_vert:L1,meshtoon_frag:D1,points_vert:I1,points_frag:N1,shadow_vert:U1,shadow_frag:F1,sprite_vert:O1,sprite_frag:B1},Ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Hi={basic:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:kn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:kn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:kn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:kn([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:kn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:kn([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:kn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:kn([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:kn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:kn([Ce.lights,Ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Hi.physical={uniforms:kn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Gl={r:0,b:0,g:0},z1=new Et,Bg=new at;Bg.set(-1,0,0,0,1,0,0,0,1);function k1(r,e,t,n,i,s){const a=new it(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const v=M.backgroundBlurriness>0;T=e.get(T,v)}return T}function p(M){let T=!1;const v=f(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,T){const v=f(T);v&&(v.isCubeTexture||v.mapping===Hc)?(c===void 0&&(c=new Ot(new ws(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:La(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z1.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bg),c.material.toneMapped=mt.getTransfer(v.colorSpace)!==bt,(u!==v||d!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ot(new Ia(2,2),new Jt({name:"BackgroundMaterial",uniforms:La(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=mt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(Gl,Ig(r)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:_,dispose:g}}function V1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(D,L,H,N,z){let X=!1;const B=d(D,N,H,L);s!==B&&(s=B,c(s.object)),X=f(D,N,H,z),X&&p(D,N,H,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(D,L,H,N),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function d(D,L,H,N){const z=N.wireframe===!0;let X=n[L.id];X===void 0&&(X={},n[L.id]=X);const B=D.isInstancedMesh===!0?D.id:0;let Q=X[B];Q===void 0&&(Q={},X[B]=Q);let W=Q[H.id];W===void 0&&(W={},Q[H.id]=W);let R=W[z];return R===void 0&&(R=h(l()),W[z]=R),R}function h(D){const L=[],H=[],N=[];for(let z=0;z<t;z++)L[z]=0,H[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:N,object:D,attributes:{},index:null}}function f(D,L,H,N){const z=s.attributes,X=L.attributes;let B=0;const Q=H.getAttributes();for(const W in Q)if(Q[W].location>=0){const Z=z[W];let Se=X[W];if(Se===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Z===void 0||Z.attribute!==Se||Se&&Z.data!==Se.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function p(D,L,H,N){const z={},X=L.attributes;let B=0;const Q=H.getAttributes();for(const W in Q)if(Q[W].location>=0){let Z=X[W];Z===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const Se={};Se.attribute=Z,Z&&Z.data&&(Se.data=Z.data),z[W]=Se,B++}s.attributes=z,s.attributesNum=B,s.index=N}function _(){const D=s.newAttributes;for(let L=0,H=D.length;L<H;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){const H=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;H[D]=1,N[D]===0&&(r.enableVertexAttribArray(D),N[D]=1),z[D]!==L&&(r.vertexAttribDivisor(D,L),z[D]=L)}function M(){const D=s.newAttributes,L=s.enabledAttributes;for(let H=0,N=L.length;H<N;H++)L[H]!==D[H]&&(r.disableVertexAttribArray(H),L[H]=0)}function T(D,L,H,N,z,X,B){B===!0?r.vertexAttribIPointer(D,L,H,z,X):r.vertexAttribPointer(D,L,H,N,z,X)}function v(D,L,H,N){_();const z=N.attributes,X=H.getAttributes(),B=L.defaultAttributeValues;for(const Q in X){const W=X[Q];if(W.location>=0){let R=z[Q];if(R===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){const Z=R.normalized,Se=R.itemSize,Te=e.get(R);if(Te===void 0)continue;const We=Te.buffer,De=Te.type,Oe=Te.bytesPerElement,q=De===r.INT||De===r.UNSIGNED_INT||R.gpuType===Qf;if(R.isInterleavedBufferAttribute){const ee=R.data,ve=ee.stride,He=R.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<W.locationSize;me++)g(W.location+me,ee.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<W.locationSize;me++)m(W.location+me);r.bindBuffer(r.ARRAY_BUFFER,We);for(let me=0;me<W.locationSize;me++)T(W.location+me,Se/W.locationSize,De,Z,ve*Oe,(He+Se/W.locationSize*me)*Oe,q)}else{if(R.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)g(W.location+ee,R.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);r.bindBuffer(r.ARRAY_BUFFER,We);for(let ee=0;ee<W.locationSize;ee++)T(W.location+ee,Se/W.locationSize,De,Z,Se*Oe,Se/W.locationSize*ee*Oe,q)}}else if(B!==void 0){const Z=B[Q];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(W.location,Z);break;case 3:r.vertexAttrib3fv(W.location,Z);break;case 4:r.vertexAttrib4fv(W.location,Z);break;default:r.vertexAttrib1fv(W.location,Z)}}}}M()}function y(){b();for(const D in n){const L=n[D];for(const H in L){const N=L[H];for(const z in N){const X=N[z];for(const B in X)u(X[B].object),delete X[B];delete N[z]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const H in L){const N=L[H];for(const z in N){const X=N[z];for(const B in X)u(X[B].object),delete X[B];delete N[z]}}delete n[D.id]}function E(D){for(const L in n){const H=n[L];for(const N in H){const z=H[N];if(z[D.id]===void 0)continue;const X=z[D.id];for(const B in X)u(X[B].object),delete X[B];delete z[D.id]}}}function x(D){for(const L in n){const H=n[L],N=D.isInstancedMesh===!0?D.id:0,z=H[N];if(z!==void 0){for(const X in z){const B=z[X];for(const Q in B)u(B[Q].object),delete B[Q];delete z[X]}delete H[N],Object.keys(H).length===0&&delete n[L]}}}function b(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function H1(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function G1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==wi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const x=E===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ui&&E!==Ni&&!x&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:y,samples:w}}function W1(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Cr,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,T=M*4;let v=g.clippingState||null;l.value=v,v=u(p,h,T,f);for(let y=0;y!==T;++y)v[y]=t[y];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,v=f;T!==_;++T,v+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const da=4,X1=6,q1=20,Y1=256,Za=new Ko,sm=new it;let Bu=null,zu=0,ku=0,Vu=!1;const $1=new F,Kr=new F;class ff{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=$1}=s;Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,zu,ku),this._renderer.xr.enabled=Vu,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Dn,format:wi,colorSpace:wc,depthBuffer:!1},i=am(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z1(s)),this._blurMaterial=J1(s,e,t),this._ggxMaterial=K1(s,e,t)}return i}_compileMaterial(e){const t=new Ot(new un,e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,i,s){const l=new oi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(sm),d.toneMapping=Ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new ws,new Ho({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(sm),g=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const y=this._cubeSize;js(i,v*y,T>2?y:0,y,y),d.setRenderTarget(i),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vs||e.mapping===Ra;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-da?n-p+da:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,js(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(o,Za),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,js(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,Za)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-da?i-this._lodMax+da:0),h=4*(this._cubeSize-u);js(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Za)}}function Z1(r){const e=[],t=[];let n=r;const i=r-da+1+X1;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let g=0;g<d;g++){const M=g%3*2/3-1,T=g>2?0:-1,v=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];p.set(v,f*h*g);for(let y=0;y<h;y++){const w=u[y*2]*2-1,E=u[y*2+1]*2-1;g===0?Kr.set(1,E,w):g===1?Kr.set(-w,1,-E):g===2?Kr.set(-w,E,1):g===3?Kr.set(-1,E,-w):g===4?Kr.set(-w,-1,E):Kr.set(w,E,-1),Kr.toArray(_,(g*h+y)*f)}}const m=new un;m.setAttribute("position",new Pn(p,f)),m.setAttribute("outputDirection",new Pn(_,f)),t.push(new Ot(m,null)),n>da&&n--}return{lodMeshes:t,sizeLods:e}}function am(r,e,t){const n=new gn(r,e,t);return n.texture.mapping=Hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function K1(r,e,t){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function J1(r,e,t){return new Jt({name:"SphericalGaussianBlur",defines:{SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function om(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function lm(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class zg extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ws(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:La(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:Zi});s.uniforms.tEquirect.value=t;const a=new Ot(i,s),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=mn),new jS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Q1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===au||f===ou)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new zg(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===au||f===ou,_=f===vs||f===Ra;if(p||_){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new ff(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new ff(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===au?h.mapping=vs:f===ou&&(h.mapping=Ra),h}function l(h){let f=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function j1(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ma("WebGLRenderer: "+n+" extension not supported."),i}}}function eb(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let T=0,v=M.length;T<v;T+=3){const y=M[T+0],w=M[T+1],E=M[T+2];h.push(y,w,w,E,E,y)}}else{const M=p.array;_=p.version;for(let T=0,v=M.length/3-1;T<v;T+=3){const y=T+0,w=T+1,E=T+2;h.push(y,w,w,E,E,y)}}const m=new(p.count>=65535?mg:pg)(h,1);m.version=_;const g=s.get(d);g&&e.remove(g),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function tb(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function nb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:vt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ib(r,e,t){const n=new WeakMap,i=new Ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let C=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let y=o.attributes.position.count*v,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*w*4*d),x=new hg(E,y,w,d);x.type=Ni,x.needsUpdate=!0;const b=v*4;for(let D=0;D<d;D++){const L=g[D],H=M[D],N=T[D],z=y*w*4*D;for(let X=0;X<L.count;X++){const B=X*b;p===!0&&(i.fromBufferAttribute(L,X),E[z+B+0]=i.x,E[z+B+1]=i.y,E[z+B+2]=i.z,E[z+B+3]=0),_===!0&&(i.fromBufferAttribute(H,X),E[z+B+4]=i.x,E[z+B+5]=i.y,E[z+B+6]=i.z,E[z+B+7]=0),m===!0&&(i.fromBufferAttribute(N,X),E[z+B+8]=i.x,E[z+B+9]=i.y,E[z+B+10]=i.z,E[z+B+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new he(y,w)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function rb(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const sb={[qf]:"LINEAR_TONE_MAPPING",[Yf]:"REINHARD_TONE_MAPPING",[$f]:"CINEON_TONE_MAPPING",[Vc]:"ACES_FILMIC_TONE_MAPPING",[Kf]:"AGX_TONE_MAPPING",[Jf]:"NEUTRAL_TONE_MAPPING",[Zf]:"CUSTOM_TONE_MAPPING"};function ab(r,e,t,n,i,s){const a=new gn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new un;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));const u=new Ng({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(c,u),h=new Ko(-1,1,1,-1,0,1);let f=null,p=null,_=!1,m,g=null,M=[],T=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),l!==null&&l.setSize(v,y);for(let w=0;w<M.length;w++){const E=M[w];E.setSize&&E.setSize(v,y)}},this.setEffects=function(v){M=v,T=M.length>0&&M[0].isRenderPass===!0;const y=a.width,w=a.height;M.length>0&&o===null&&(o=new gn(y,w,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(y,w,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){const x=M[E];x.setSize&&x.setSize(y,w)}},this.begin=function(v,y){if(_||v.toneMapping===Ki&&M.length===0)return!1;if(g=y,y!==null){const w=y.width,E=y.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Ki,!0},this.hasRenderPass=function(){return T},this.end=function(v,y){v.toneMapping=m,_=!0;let w=a,E=o;for(let x=0;x<M.length;x++){const b=M[x];b.enabled!==!1&&(b.render(v,E,w,y),b.needsSwap!==!1&&(w=E,E=E===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,u.defines={},mt.getTransfer(f)===bt&&(u.defines.SRGB_TRANSFER="");const x=sb[p];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(g),v.render(d,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const kg=new In,df=new Go(1,1),Vg=new hg,Hg=new kx,Gg=new yg,cm=[],um=[],hm=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Na(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=cm[i];if(s===void 0&&(s=new Float32Array(i),cm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xc(r,e){let t=um[e];t===void 0&&(t=new Int32Array(e),um[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ob(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function hb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;dm.set(n),r.uniformMatrix2fv(this.addr,!1,dm),cn(t,n)}}function fb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;fm.set(n),r.uniformMatrix3fv(this.addr,!1,fm),cn(t,n)}}function db(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;hm.set(n),r.uniformMatrix4fv(this.addr,!1,hm),cn(t,n)}}function pb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function vb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function Sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function Mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function yb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(df.compareFunction=t.isReversedDepthBuffer()?ad:sd,s=df):s=kg,t.setTexture2D(e||s,i)}function bb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hg,i)}function Tb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gg,i)}function Eb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vg,i)}function wb(r){switch(r){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return hb;case 35675:return fb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return xb;case 36295:return Sb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Ab(r,e){r.uniform1fv(this.addr,e)}function Cb(r,e){const t=Na(e,this.size,2);r.uniform2fv(this.addr,t)}function Rb(r,e){const t=Na(e,this.size,3);r.uniform3fv(this.addr,t)}function Pb(r,e){const t=Na(e,this.size,4);r.uniform4fv(this.addr,t)}function Lb(r,e){const t=Na(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Db(r,e){const t=Na(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ib(r,e){const t=Na(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Nb(r,e){r.uniform1iv(this.addr,e)}function Ub(r,e){r.uniform2iv(this.addr,e)}function Fb(r,e){r.uniform3iv(this.addr,e)}function Ob(r,e){r.uniform4iv(this.addr,e)}function Bb(r,e){r.uniform1uiv(this.addr,e)}function zb(r,e){r.uniform2uiv(this.addr,e)}function kb(r,e){r.uniform3uiv(this.addr,e)}function Vb(r,e){r.uniform4uiv(this.addr,e)}function Hb(r,e,t){const n=this.cache,i=e.length,s=Xc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=df:a=kg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Gb(r,e,t){const n=this.cache,i=e.length,s=Xc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hg,s[a])}function Wb(r,e,t){const n=this.cache,i=e.length,s=Xc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Gg,s[a])}function Xb(r,e,t){const n=this.cache,i=e.length,s=Xc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vg,s[a])}function qb(r){switch(r){case 5126:return Ab;case 35664:return Cb;case 35665:return Rb;case 35666:return Pb;case 35674:return Lb;case 35675:return Db;case 35676:return Ib;case 5124:case 35670:return Nb;case 35667:case 35671:return Ub;case 35668:case 35672:return Fb;case 35669:case 35673:return Ob;case 5125:return Bb;case 36294:return zb;case 36295:return kb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return Xb}}class Yb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wb(t.type)}}class $b{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qb(t.type)}}class Zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function pm(r,e){r.seq.push(e),r.map[e.id]=e}function Kb(r,e,t){const n=r.name,i=n.length;for(Hu.lastIndex=0;;){const s=Hu.exec(n),a=Hu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pm(t,c===void 0?new Yb(o,r,e):new $b(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Zb(o),pm(t,d)),t=d}}}class cc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Kb(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function mm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jb=37297;let Qb=0;function jb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gm=new at;function eT(r){mt._getMatrix(gm,mt.workingColorSpace,r);const e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case Ac:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _m(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+jb(r.getShaderSource(e),o)}else return s}function tT(r,e){const t=eT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nT={[qf]:"Linear",[Yf]:"Reinhard",[$f]:"Cineon",[Vc]:"ACESFilmic",[Kf]:"AgX",[Jf]:"Neutral",[Zf]:"Custom"};function iT(r,e){const t=nT[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new F;function rT(){mt.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function aT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function co(r){return r!==""}function vm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lT=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(r){return r.replace(lT,uT)}const cT=new Map;function uT(r,e){let t=lt[e];if(t===void 0){const n=cT.get(e);if(n!==void 0)t=lt[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pf(t)}const hT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(r){return r.replace(hT,fT)}function fT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dT={[ic]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function pT(r){return dT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mT={[vs]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function gT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _T={[Ra]:"ENVMAP_MODE_REFRACTION"};function vT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_T[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xT={[Xf]:"ENVMAP_BLENDING_MULTIPLY",[vx]:"ENVMAP_BLENDING_MIX",[xx]:"ENVMAP_BLENDING_ADD"};function ST(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":xT[r.combine]||"ENVMAP_BLENDING_NONE"}function MT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yT(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pT(t),c=gT(t),u=vT(t),d=ST(t),h=MT(t),f=sT(t),p=aT(s),_=i.createProgram();let m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(co).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(co).join(`
`),g.length>0&&(g+=`
`)):(m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),g=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?iT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,tT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),a=pf(a),a=vm(a,t),a=xm(a,t),o=pf(o),o=vm(o,t),o=xm(o,t),a=Sm(a),o=Sm(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=M+m+a,v=M+g+o,y=mm(i,i.VERTEX_SHADER,T),w=mm(i,i.FRAGMENT_SHADER,v);i.attachShader(_,y),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(y)||"",N=i.getShaderInfoLog(w)||"",z=L.trim(),X=H.trim(),B=N.trim();let Q=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,w);else{const R=_m(i,y,"vertex"),Z=_m(i,w,"fragment");vt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+R+`
`+Z)}else z!==""?nt("WebGLProgram: Program Info Log:",z):(X===""||B==="")&&(W=!1);W&&(D.diagnostics={runnable:Q,programLog:z,vertexShader:{log:X,prefix:m},fragmentShader:{log:B,prefix:g}})}i.deleteShader(y),i.deleteShader(w),x=new cc(i,_),b=oT(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,Jb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}let bT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ET(e),t.set(e,n)),n}}class ET{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function wT(r){return r===xs||r===bc||r===Tc}function AT(r,e,t,n,i,s){const a=new fg,o=new TT,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,C,D,L,H){const N=D.fog,z=L.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||X,B),W=Q&&Q.mapping===Hc?Q.image.height:null,R=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&nt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Se=Z!==void 0?Z.length:0;let Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let We,De,Oe,q;if(R){const Ke=Hi[R];We=Ke.vertexShader,De=Ke.fragmentShader}else{We=x.vertexShader,De=x.fragmentShader;const Ke=o.getVertexShaderStage(x),fe=o.getFragmentShaderStage(x);o.update(x,Ke,fe),Oe=Ke.id,q=fe.id}const ee=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),He=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,Re=!!x.map,Ie=!!x.matcap,J=!!Q,oe=!!x.aoMap,ue=!!x.lightMap,I=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,Ne=!!x.displacementMap,Ue=!!x.emissiveMap,Ae=!!x.metalnessMap,Xe=!!x.roughnessMap,U=x.anisotropy>0,st=x.clearcoat>0,Ye=x.dispersion>0,P=x.retroreflectivity>0,S=x.iridescence>0,V=x.sheen>0,G=x.transmission>0,j=U&&!!x.anisotropyMap,_e=st&&!!x.clearcoatMap,pe=st&&!!x.clearcoatNormalMap,te=st&&!!x.clearcoatRoughnessMap,ae=S&&!!x.iridescenceMap,ye=S&&!!x.iridescenceThicknessMap,Be=V&&!!x.sheenColorMap,se=V&&!!x.sheenRoughnessMap,ne=!!x.specularMap,ie=!!x.specularColorMap,Le=!!x.specularIntensityMap,ze=G&&!!x.transmissionMap,O=G&&!!x.thicknessMap,xe=!!x.gradientMap,re=!!x.alphaMap,Me=x.alphaTest>0,be=!!x.alphaHash,le=!!x.extensions;let de=Ki;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(de=r.toneMapping);const ce={shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:De,defines:x.defines,customVertexShaderID:Oe,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:He,instancingColor:He&&L.instanceColor!==null,instancingMorph:He&&L.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:Ie,envMap:J,envMapMode:J&&Q.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:ue,bumpMap:I,normalMap:ge,displacementMap:Ne,emissiveMap:Ue,normalMapObjectSpace:ge&&x.normalMapType===yx,normalMapTangentSpace:ge&&x.normalMapType===Ec,packedNormalMap:ge&&x.normalMapType===Ec&&wT(x.normalMap.format),metalnessMap:Ae,roughnessMap:Xe,anisotropy:U,anisotropyMap:j,clearcoat:st,clearcoatMap:_e,clearcoatNormalMap:pe,clearcoatRoughnessMap:te,dispersion:Ye,retroreflection:P,iridescence:S,iridescenceMap:ae,iridescenceThicknessMap:ye,sheen:V,sheenColorMap:Be,sheenRoughnessMap:se,specularMap:ne,specularColorMap:ie,specularIntensityMap:Le,transmission:G,transmissionMap:ze,thicknessMap:O,gradientMap:xe,opaque:x.transparent===!1&&x.blending===bo&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:Me,alphaHash:be,combine:x.combine,mapUv:Re&&p(x.map.channel),aoMapUv:oe&&p(x.aoMap.channel),lightMapUv:ue&&p(x.lightMap.channel),bumpMapUv:I&&p(x.bumpMap.channel),normalMapUv:ge&&p(x.normalMap.channel),displacementMapUv:Ne&&p(x.displacementMap.channel),emissiveMapUv:Ue&&p(x.emissiveMap.channel),metalnessMapUv:Ae&&p(x.metalnessMap.channel),roughnessMapUv:Xe&&p(x.roughnessMap.channel),anisotropyMapUv:j&&p(x.anisotropyMap.channel),clearcoatMapUv:_e&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&p(x.sheenRoughnessMap.channel),specularMapUv:ne&&p(x.specularMap.channel),specularColorMapUv:ie&&p(x.specularColorMap.channel),specularIntensityMapUv:Le&&p(x.specularIntensityMap.channel),transmissionMapUv:ze&&p(x.transmissionMap.channel),thicknessMapUv:O&&p(x.thicknessMap.channel),alphaMapUv:re&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ge||U),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Re||re),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:de,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&mt.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&mt.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cr,flipSided:x.side===qn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){const b=f[x.type];let C;if(b){const D=Hi[b];C=Yo.clone(D.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new yT(r,b,x,i),c.push(C),u.set(b,C)),C}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function CT(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function RT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,m,g){let M=r[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=p,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=g),e++,M}function l(h,f,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);const T=o(h,f,p,_,m,g);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):t.push(T)}function c(h,f,p,_,m,g){const M=o(h,f,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||RT),n.length>1&&n.sort(f||ym),i.length>1&&i.sort(f||ym)}function d(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function PT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new bm,r.set(n,[a])):i>=s.length?(a=new bm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function LT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new it};break;case"SpotLight":t={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function DT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let IT=0;function NT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function UT(r){const e=new LT,t=DT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new Et,a=new Et;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,T=0,v=0,y=0,w=0,E=0,x=0,b=0,C=0;c.sort(NT);for(let L=0,H=c.length;L<H;L++){const N=c[L],z=N.color,X=N.intensity,B=N.distance;let Q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===xs?Q=N.shadow.map.texture:Q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=z.r*X,d+=z.g*X,h+=z.b*X;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],X);C++}else if(N.isSunLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const R=N.shadow,Z=t.get(N);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=Q;const Se=R.getViewportCount();for(let Te=0;Te<Se;Te++)n.sunShadowMatrix[_+Te]=R.getMatrix(Te),n.sunShadowCascade[_+Te]=R._cascadeData[Te];_+=Se,p++}n.sun[f]=W,f++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const R=N.shadow,Z=t.get(N);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=N.shadow.matrix,y++}n.directional[m]=W,m++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(z).multiplyScalar(X),W.distance=B,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[M]=W;const R=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,R.updateMatrices(N),N.castShadow&&b++),n.spotLightMatrix[M]=R.matrix,N.castShadow){const Z=t.get(N);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.spotShadow[M]=Z,n.spotShadowMap[M]=Q,E++}M++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(z).multiplyScalar(X),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=W,T++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const R=N.shadow,Z=t.get(N);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,Z.shadowCameraNear=R.camera.near,Z.shadowCameraFar=R.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=W,g++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(X),W.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[v]=W,v++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==E||D.numSpotMaps!==x||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=E,D.numSpotMaps=x,D.numLightProbes=C,n.version=IT++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0,m=0;const g=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const v=c[M];if(v.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),d++}else if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Tm(r){const e=new UT(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function FT(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Tm(r),e.set(i,[o])):s>=a.length?(o=new Tm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],kT=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Em=new Et,Ka=new F,Gu=new F;function VT(r,e,t){let n=new ud;const i=new he,s=new he,a=new Ht,o=new $S,l=new ZS,c={},u=t.maxTextureSize,d={[_s]:qn,[qn]:_s,[cr]:cr},h=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:OT,fragmentShader:BT}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new un;p.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ot(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let g=this.type;this.render=function(w,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===jv&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ic);const b=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const H=g!==this.type;H&&E.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=w.length;N<z;N++){const X=w[N],B=X.shadow;if(B===void 0){nt("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Q=B.getFrameExtents();i.multiply(Q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,B.mapSize.y=s.y));const W=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===so){if(X.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new gn(i.x,i.y,{format:xs,type:Dn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new Go(i.x,i.y,Ni),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=gr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn}else X.isPointLight?(B.map=new zg(i.x),B.map.depthTexture=new lS(i.x,Qi)):(B.map=new gn(i.x,i.y),B.map.depthTexture=new Go(i.x,i.y,Qi)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=gr,this.type===ic?(B.map.depthTexture.compareFunction=W?ad:sd,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const R=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();X.isPointLight!==!0&&B.updateMatrices(X,x);for(let Z=0;Z<R;Z++){const Se=B.getCamera(Z);if(X.isPointLight){const Te=B.camera,We=B.matrix,De=X.distance||Te.far;De!==Te.far&&(Te.far=De,Te.updateProjectionMatrix()),Ka.setFromMatrixPosition(X.matrixWorld),Te.position.copy(Ka),Gu.copy(Te.position),Gu.add(zT[Z]),Te.up.copy(kT[Z]),Te.lookAt(Gu),Te.updateMatrixWorld(),We.makeTranslation(-Ka.x,-Ka.y,-Ka.z),Em.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Em,Te.coordinateSystem,Te.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,Z),r.clear();else{Z===0&&(r.setRenderTarget(B.map),r.clear());const Te=B.getViewport(Z);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),L.viewport(a)}n=B.getFrustum(Z),v(E,x,Se,X,this.type)}B.isPointLightShadow!==!0&&this.type===so&&M(B,x),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(b,C,D)};function M(w,E){const x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new gn(i.x,i.y,{format:xs,type:Dn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function T(w,E,x,b){let C=null;const D=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=C.uuid,H=E.uuid;let N=c[L];N===void 0&&(N={},c[L]=N);let z=N[H];z===void 0&&(z=C.clone(),N[H]=z,E.addEventListener("dispose",y)),C=z}if(C.visible=E.visible,C.wireframe=E.wireframe,b===so?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=r.properties.get(C);L.light=x}return C}function v(w,E,x,b,C){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===so)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const H=e.update(w),N=w.material;if(Array.isArray(N)){const z=H.groups;for(let X=0,B=z.length;X<B;X++){const Q=z[X],W=N[Q.materialIndex];if(W&&W.visible){const R=T(w,W,b,C);w.onBeforeShadow(r,w,E,x,H,R,Q),r.renderBufferDirect(x,null,H,R,w,Q),w.onAfterShadow(r,w,E,x,H,R,Q)}}}else if(N.visible){const z=T(w,N,b,C);w.onBeforeShadow(r,w,E,x,H,z,null),r.renderBufferDirect(x,null,H,z,w,null),w.onAfterShadow(r,w,E,x,H,z,null)}}const L=w.children;for(let H=0,N=L.length;H<N;H++)v(L[H],E,x,b,C)}function y(w){w.target.removeEventListener("dispose",y);for(const x in c){const b=c[x],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function HT(r,e){function t(){let O=!1;const xe=new Ht;let re=null;const Me=new Ht(0,0,0,0);return{setMask:function(be){re!==be&&!O&&(r.colorMask(be,be,be,be),re=be)},setLocked:function(be){O=be},setClear:function(be,le,de,ce,Ke){Ke===!0&&(be*=ce,le*=ce,de*=ce),xe.set(be,le,de,ce),Me.equals(xe)===!1&&(r.clearColor(be,le,de,ce),Me.copy(xe))},reset:function(){O=!1,re=null,Me.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,re=null,Me=null,be=null;return{setReversed:function(le){if(xe!==le){const de=e.get("EXT_clip_control");le?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),xe=le;const ce=be;be=null,this.setClear(ce)}},getReversed:function(){return xe},setTest:function(le){le?ee(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(le){re!==le&&!O&&(r.depthMask(le),re=le)},setFunc:function(le){if(xe&&(le=Ix[le]),Me!==le){switch(le){case Sh:r.depthFunc(r.NEVER);break;case Mh:r.depthFunc(r.ALWAYS);break;case yh:r.depthFunc(r.LESS);break;case Oo:r.depthFunc(r.LEQUAL);break;case bh:r.depthFunc(r.EQUAL);break;case Th:r.depthFunc(r.GEQUAL);break;case Eh:r.depthFunc(r.GREATER);break;case wh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=le}},setLocked:function(le){O=le},setClear:function(le){be!==le&&(be=le,xe&&(le=1-le),r.clearDepth(le))},reset:function(){O=!1,re=null,Me=null,be=null,xe=!1}}}function i(){let O=!1,xe=null,re=null,Me=null,be=null,le=null,de=null,ce=null,Ke=null;return{setTest:function(fe){O||(fe?ee(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(fe){xe!==fe&&!O&&(r.stencilMask(fe),xe=fe)},setFunc:function(fe,je,ke){(re!==fe||Me!==je||be!==ke)&&(r.stencilFunc(fe,je,ke),re=fe,Me=je,be=ke)},setOp:function(fe,je,ke){(le!==fe||de!==je||ce!==ke)&&(r.stencilOp(fe,je,ke),le=fe,de=je,ce=ke)},setLocked:function(fe){O=fe},setClear:function(fe){Ke!==fe&&(r.clearStencil(fe),Ke=fe)},reset:function(){O=!1,xe=null,re=null,Me=null,be=null,le=null,de=null,ce=null,Ke=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,T=null,v=null,y=null,w=null,E=null,x=new it(0,0,0),b=0,C=!1,D=null,L=null,H=null,N=null,z=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Q>=2);let R=null,Z={};const Se=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),We=new Ht().fromArray(Se),De=new Ht().fromArray(Te);function Oe(O,xe,re,Me){const be=new Uint8Array(4),le=r.createTexture();r.bindTexture(O,le),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<re;de++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(xe+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return le}const q={};q[r.TEXTURE_2D]=Oe(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(Oo),I(!1),ge(mp),ee(r.CULL_FACE),oe(Zi);function ee(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function ve(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function He(O,xe){return h[O]!==xe?(r.bindFramebuffer(O,xe),h[O]=xe,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=xe),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function me(O,xe){let re=p,Me=!1;if(O){re=f.get(xe),re===void 0&&(re=[],f.set(xe,re));const be=O.textures;if(re.length!==be.length||re[0]!==r.COLOR_ATTACHMENT0){for(let le=0,de=be.length;le<de;le++)re[le]=r.COLOR_ATTACHMENT0+le;re.length=be.length,Me=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,Me=!0);Me&&r.drawBuffers(re)}function Re(O){return _!==O?(r.useProgram(O),_=O,!0):!1}const Ie={[aa]:r.FUNC_ADD,[tx]:r.FUNC_SUBTRACT,[nx]:r.FUNC_REVERSE_SUBTRACT};Ie[ix]=r.MIN,Ie[rx]=r.MAX;const J={[sx]:r.ZERO,[ax]:r.ONE,[ox]:r.SRC_COLOR,[eg]:r.SRC_ALPHA,[dx]:r.SRC_ALPHA_SATURATE,[hx]:r.DST_COLOR,[cx]:r.DST_ALPHA,[lx]:r.ONE_MINUS_SRC_COLOR,[tg]:r.ONE_MINUS_SRC_ALPHA,[fx]:r.ONE_MINUS_DST_COLOR,[ux]:r.ONE_MINUS_DST_ALPHA,[px]:r.CONSTANT_COLOR,[mx]:r.ONE_MINUS_CONSTANT_COLOR,[gx]:r.CONSTANT_ALPHA,[_x]:r.ONE_MINUS_CONSTANT_ALPHA};function oe(O,xe,re,Me,be,le,de,ce,Ke,fe){if(O===Zi){m===!0&&(ve(r.BLEND),m=!1);return}if(m===!1&&(ee(r.BLEND),m=!0),O!==ex){if(O!==g||fe!==C){if((M!==aa||y!==aa)&&(r.blendEquation(r.FUNC_ADD),M=aa,y=aa),fe)switch(O){case bo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ds:r.blendFunc(r.ONE,r.ONE);break;case gp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _p:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:vt("WebGLState: Invalid blending: ",O);break}else switch(O){case bo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gp:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _p:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",O);break}T=null,v=null,w=null,E=null,x.set(0,0,0),b=0,g=O,C=fe}return}be=be||xe,le=le||re,de=de||Me,(xe!==M||be!==y)&&(r.blendEquationSeparate(Ie[xe],Ie[be]),M=xe,y=be),(re!==T||Me!==v||le!==w||de!==E)&&(r.blendFuncSeparate(J[re],J[Me],J[le],J[de]),T=re,v=Me,w=le,E=de),(ce.equals(x)===!1||Ke!==b)&&(r.blendColor(ce.r,ce.g,ce.b,Ke),x.copy(ce),b=Ke),g=O,C=!1}function ue(O,xe){O.side===cr?ve(r.CULL_FACE):ee(r.CULL_FACE);let re=O.side===qn;xe&&(re=!re),I(re),O.blending===bo&&O.transparent===!1?oe(Zi):oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const Me=O.stencilWrite;o.setTest(Me),Me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function I(O){D!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),D=O)}function ge(O){O!==Jv?(ee(r.CULL_FACE),O!==L&&(O===mp?r.cullFace(r.BACK):O===Qv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),L=O}function Ne(O){O!==H&&(B&&r.lineWidth(O),H=O)}function Ue(O,xe,re){O?(ee(r.POLYGON_OFFSET_FILL),(N!==xe||z!==re)&&(N=xe,z=re,a.getReversed()&&(xe=-xe),r.polygonOffset(xe,re))):ve(r.POLYGON_OFFSET_FILL)}function Ae(O){O?ee(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function Xe(O){O===void 0&&(O=r.TEXTURE0+X-1),R!==O&&(r.activeTexture(O),R=O)}function U(O,xe,re){re===void 0&&(R===null?re=r.TEXTURE0+X-1:re=R);let Me=Z[re];Me===void 0&&(Me={type:void 0,texture:void 0},Z[re]=Me),(Me.type!==O||Me.texture!==xe)&&(R!==re&&(r.activeTexture(re),R=re),r.bindTexture(O,xe||q[O]),Me.type=O,Me.texture=xe)}function st(){const O=Z[R];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ye(){try{r.compressedTexImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function S(){try{r.texSubImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function V(){try{r.texSubImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function j(){try{r.compressedTexSubImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function _e(){try{r.texStorage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function pe(){try{r.texStorage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function te(){try{r.texImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function ae(){try{r.texImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function ye(O){return d[O]!==void 0?d[O]:r.getParameter(O)}function Be(O,xe){d[O]!==xe&&(r.pixelStorei(O,xe),d[O]=xe)}function se(O){We.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),We.copy(O))}function ne(O){De.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),De.copy(O))}function ie(O,xe){let re=c.get(xe);re===void 0&&(re=new WeakMap,c.set(xe,re));let Me=re.get(O);Me===void 0&&(Me=r.getUniformBlockIndex(xe,O.name),re.set(O,Me))}function Le(O,xe){const Me=c.get(xe).get(O);l.get(xe)!==Me&&(r.uniformBlockBinding(xe,Me,O.__bindingPointIndex),l.set(xe,Me))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},R=null,Z={},h={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,T=null,v=null,y=null,w=null,E=null,x=new it(0,0,0),b=0,C=!1,D=null,L=null,H=null,N=null,z=null,We.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ve,bindFramebuffer:He,drawBuffers:me,useProgram:Re,setBlending:oe,setMaterial:ue,setFlipSided:I,setCullFace:ge,setLineWidth:Ne,setPolygonOffset:Ue,setScissorTest:Ae,activeTexture:Xe,bindTexture:U,unbindTexture:st,compressedTexImage2D:Ye,compressedTexImage3D:P,texImage2D:te,texImage3D:ae,pixelStorei:Be,getParameter:ye,updateUBOMapping:ie,uniformBlockBinding:Le,texStorage2D:_e,texStorage3D:pe,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:se,viewport:ne,reset:ze}}function GT(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return p?new OffscreenCanvas(P,S):Cc("canvas")}function m(P,S,V){let G=1;const j=Ye(P);if((j.width>V||j.height>V)&&(G=V/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const _e=Math.floor(G*j.width),pe=Math.floor(G*j.height);h===void 0&&(h=_(_e,pe));const te=S?_(_e,pe):h;return te.width=_e,te.height=pe,te.getContext("2d").drawImage(P,0,0,_e,pe),nt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+_e+"x"+pe+")."),te}else return"data"in P&&nt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function g(P){return P.generateMipmaps}function M(P){r.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(P,S,V,G,j,_e=!1){if(P!==null){if(r[P]!==void 0)return r[P];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;G&&(pe=e.get("EXT_texture_norm16"),pe||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=S;if(S===r.RED&&(V===r.FLOAT&&(te=r.R32F),V===r.HALF_FLOAT&&(te=r.R16F),V===r.UNSIGNED_BYTE&&(te=r.R8),V===r.UNSIGNED_SHORT&&pe&&(te=pe.R16_EXT),V===r.SHORT&&pe&&(te=pe.R16_SNORM_EXT)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(te=r.R8UI),V===r.UNSIGNED_SHORT&&(te=r.R16UI),V===r.UNSIGNED_INT&&(te=r.R32UI),V===r.BYTE&&(te=r.R8I),V===r.SHORT&&(te=r.R16I),V===r.INT&&(te=r.R32I)),S===r.RG&&(V===r.FLOAT&&(te=r.RG32F),V===r.HALF_FLOAT&&(te=r.RG16F),V===r.UNSIGNED_BYTE&&(te=r.RG8),V===r.UNSIGNED_SHORT&&pe&&(te=pe.RG16_EXT),V===r.SHORT&&pe&&(te=pe.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(te=r.RG8UI),V===r.UNSIGNED_SHORT&&(te=r.RG16UI),V===r.UNSIGNED_INT&&(te=r.RG32UI),V===r.BYTE&&(te=r.RG8I),V===r.SHORT&&(te=r.RG16I),V===r.INT&&(te=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(te=r.RGB8UI),V===r.UNSIGNED_SHORT&&(te=r.RGB16UI),V===r.UNSIGNED_INT&&(te=r.RGB32UI),V===r.BYTE&&(te=r.RGB8I),V===r.SHORT&&(te=r.RGB16I),V===r.INT&&(te=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(te=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(te=r.RGBA16UI),V===r.UNSIGNED_INT&&(te=r.RGBA32UI),V===r.BYTE&&(te=r.RGBA8I),V===r.SHORT&&(te=r.RGBA16I),V===r.INT&&(te=r.RGBA32I)),S===r.RGB&&(V===r.UNSIGNED_SHORT&&pe&&(te=pe.RGB16_EXT),V===r.SHORT&&pe&&(te=pe.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(te=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(te=r.R11F_G11F_B10F)),S===r.RGBA){const ae=_e?Ac:mt.getTransfer(j);V===r.FLOAT&&(te=r.RGBA32F),V===r.HALF_FLOAT&&(te=r.RGBA16F),V===r.UNSIGNED_BYTE&&(te=ae===bt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&pe&&(te=pe.RGBA16_EXT),V===r.SHORT&&pe&&(te=pe.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(P,S){let V;return P?S===null||S===Qi||S===zo?V=r.DEPTH24_STENCIL8:S===Ni?V=r.DEPTH32F_STENCIL8:S===Bo&&(V=r.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qi||S===zo?V=r.DEPTH_COMPONENT24:S===Ni?V=r.DEPTH_COMPONENT32F:S===Bo&&(V=r.DEPTH_COMPONENT16),V}function w(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function E(P){const S=P.target;S.removeEventListener("dispose",E),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(P){const S=P.target;S.removeEventListener("dispose",x),D(S)}function b(P){const S=n.get(P);if(S.__webglInit===void 0)return;const V=P.source,G=f.get(V);if(G){const j=G[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(P),Object.keys(G).length===0&&f.delete(V)}n.remove(P)}function C(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const V=P.source,G=f.get(V);delete G[S.__cacheKey],a.memory.textures--}function D(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let j=0;j<S.__webglFramebuffer[G].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[G][j]);else r.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)r.deleteFramebuffer(S.__webglFramebuffer[G]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=P.textures;for(let G=0,j=V.length;G<j;G++){const _e=n.get(V[G]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(V[G])}n.remove(P)}let L=0;function H(){L=0}function N(){return L}function z(P){L=P}function X(){const P=L;return P>=i.maxTextures&&nt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function B(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Q(P,S){const V=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const G=P.image;if(G===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,P,S);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function W(P,S){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){ve(V,P,S);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function R(P,S){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){ve(V,P,S);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function Z(P,S){const V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){He(V,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const Se={[Ah]:r.REPEAT,[Ii]:r.CLAMP_TO_EDGE,[Ch]:r.MIRRORED_REPEAT},Te={[Sn]:r.NEAREST,[Sx]:r.NEAREST_MIPMAP_NEAREST,[ul]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[lu]:r.LINEAR_MIPMAP_NEAREST,[rs]:r.LINEAR_MIPMAP_LINEAR},We={[Tx]:r.NEVER,[Rx]:r.ALWAYS,[Ex]:r.LESS,[sd]:r.LEQUAL,[wx]:r.EQUAL,[ad]:r.GEQUAL,[Ax]:r.GREATER,[Cx]:r.NOTEQUAL};function De(P,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===lu||S.magFilter===ul||S.magFilter===rs||S.minFilter===mn||S.minFilter===lu||S.minFilter===ul||S.minFilter===rs)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Se[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Se[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Se[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Te[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Te[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,We[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Sn||S.minFilter!==ul&&S.minFilter!==rs||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(P,S){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",E));const G=S.source;let j=f.get(G);j===void 0&&(j={},f.set(G,j));const _e=B(S);if(_e!==P.__cacheKey){j[_e]===void 0&&(j[_e]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[_e].usedTimes++;const pe=j[P.__cacheKey];pe!==void 0&&(j[P.__cacheKey].usedTimes--,pe.usedTimes===0&&C(S)),P.__cacheKey=_e,P.__webglTexture=j[_e].texture}return V}function q(P,S,V){return Math.floor(Math.floor(P/V)/S)}function ee(P,S,V,G){const _e=P.updateRanges;if(_e.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,G,S.data);else{_e.sort((Be,se)=>Be.start-se.start);let pe=0;for(let Be=1;Be<_e.length;Be++){const se=_e[pe],ne=_e[Be],ie=se.start+se.count,Le=q(ne.start,S.width,4),ze=q(se.start,S.width,4);ne.start<=ie+1&&Le===ze&&q(ne.start+ne.count-1,S.width,4)===Le?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++pe,_e[pe]=ne)}_e.length=pe+1;const te=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),ye=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Be=0,se=_e.length;Be<se;Be++){const ne=_e[Be],ie=Math.floor(ne.start/4),Le=Math.ceil(ne.count/4),ze=ie%S.width,O=Math.floor(ie/S.width),xe=Le,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,ze,O,xe,re,V,G,S.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,te),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function ve(P,S,V){let G=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=r.TEXTURE_3D);const j=Oe(P,S),_e=S.source;t.bindTexture(G,P.__webglTexture,r.TEXTURE0+V);const pe=n.get(_e);if(_e.version!==pe.__version||j===!0){if(t.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const re=mt.getPrimaries(mt.workingColorSpace),Me=S.colorSpace===Rr?null:mt.getPrimaries(S.colorSpace),be=S.colorSpace===Rr||re===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let ae=m(S.image,!1,i.maxTextureSize);ae=st(S,ae);const ye=s.convert(S.format,S.colorSpace),Be=s.convert(S.type);let se=v(S.internalFormat,ye,Be,S.normalized,S.colorSpace,S.isVideoTexture);De(G,S);let ne;const ie=S.mipmaps,Le=S.isVideoTexture!==!0,ze=pe.__version===void 0||j===!0,O=_e.dataReady,xe=w(S,ae);if(S.isDepthTexture)se=y(S.format===ss,S.type),ze&&(Le?t.texStorage2D(r.TEXTURE_2D,1,se,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,se,ae.width,ae.height,0,ye,Be,null));else if(S.isDataTexture)if(ie.length>0){Le&&ze&&t.texStorage2D(r.TEXTURE_2D,xe,se,ie[0].width,ie[0].height);for(let re=0,Me=ie.length;re<Me;re++)ne=ie[re],Le?O&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ne.width,ne.height,ye,Be,ne.data):t.texImage2D(r.TEXTURE_2D,re,se,ne.width,ne.height,0,ye,Be,ne.data);S.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(r.TEXTURE_2D,xe,se,ae.width,ae.height),O&&ee(S,ae,ye,Be)):t.texImage2D(r.TEXTURE_2D,0,se,ae.width,ae.height,0,ye,Be,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,se,ie[0].width,ie[0].height,ae.depth);for(let re=0,Me=ie.length;re<Me;re++)if(ne=ie[re],S.format!==wi)if(ye!==null)if(Le){if(O)if(S.layerUpdates.size>0){const be=rm(ne.width,ne.height,S.format,S.type);for(const le of S.layerUpdates){const de=ne.data.subarray(le*be/ne.data.BYTES_PER_ELEMENT,(le+1)*be/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,le,ne.width,ne.height,1,ye,de)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,ae.depth,ye,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,se,ne.width,ne.height,ae.depth,0,ne.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,ae.depth,ye,Be,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,se,ne.width,ne.height,ae.depth,0,ye,Be,ne.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Le&&ze&&t.texStorage2D(r.TEXTURE_2D,xe,se,ie[0].width,ie[0].height);for(let re=0,Me=ie.length;re<Me;re++)ne=ie[re],S.format!==wi?ye!==null?Le?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ne.width,ne.height,ye,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,re,se,ne.width,ne.height,0,ne.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?O&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ne.width,ne.height,ye,Be,ne.data):t.texImage2D(r.TEXTURE_2D,re,se,ne.width,ne.height,0,ye,Be,ne.data)}else if(S.isDataArrayTexture)if(Le){if(ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,se,ae.width,ae.height,ae.depth),O)if(S.layerUpdates.size>0){const re=rm(ae.width,ae.height,S.format,S.type);for(const Me of S.layerUpdates){const be=ae.data.subarray(Me*re/ae.data.BYTES_PER_ELEMENT,(Me+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,ae.width,ae.height,1,ye,Be,be)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ye,Be,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,ae.width,ae.height,ae.depth,0,ye,Be,ae.data);else if(S.isData3DTexture)Le?(ze&&t.texStorage3D(r.TEXTURE_3D,xe,se,ae.width,ae.height,ae.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ye,Be,ae.data)):t.texImage3D(r.TEXTURE_3D,0,se,ae.width,ae.height,ae.depth,0,ye,Be,ae.data);else if(S.isFramebufferTexture){if(ze)if(Le)t.texStorage2D(r.TEXTURE_2D,xe,se,ae.width,ae.height);else{let re=ae.width,Me=ae.height;for(let be=0;be<xe;be++)t.texImage2D(r.TEXTURE_2D,be,se,re,Me,0,ye,Be,null),re>>=1,Me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),d.add(S),re.onpaint=Me=>{const be=Me.changedElements;for(const le of d)be.includes(le.image)&&(le.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{const be=r.RGBA,le=r.RGBA,de=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,be,le,de,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ie.length>0){if(Le&&ze){const re=Ye(ie[0]);t.texStorage2D(r.TEXTURE_2D,xe,se,re.width,re.height)}for(let re=0,Me=ie.length;re<Me;re++)ne=ie[re],Le?O&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ye,Be,ne):t.texImage2D(r.TEXTURE_2D,re,se,ye,Be,ne);S.generateMipmaps=!1}else if(Le){if(ze){const re=Ye(ae);t.texStorage2D(r.TEXTURE_2D,xe,se,re.width,re.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Be,ae)}else t.texImage2D(r.TEXTURE_2D,0,se,ye,Be,ae);g(S)&&M(G),pe.__version=_e.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function He(P,S,V){if(S.image.length!==6)return;const G=Oe(P,S),j=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const _e=n.get(j);if(j.version!==_e.__version||G===!0){t.activeTexture(r.TEXTURE0+V);const pe=mt.getPrimaries(mt.workingColorSpace),te=S.colorSpace===Rr?null:mt.getPrimaries(S.colorSpace),ae=S.colorSpace===Rr||pe===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,se=[];for(let le=0;le<6;le++)!ye&&!Be?se[le]=m(S.image[le],!0,i.maxCubemapSize):se[le]=Be?S.image[le].image:S.image[le],se[le]=st(S,se[le]);const ne=se[0],ie=s.convert(S.format,S.colorSpace),Le=s.convert(S.type),ze=v(S.internalFormat,ie,Le,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,xe=_e.__version===void 0||G===!0,re=j.dataReady;let Me=w(S,ne);De(r.TEXTURE_CUBE_MAP,S);let be;if(ye){O&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,ze,ne.width,ne.height);for(let le=0;le<6;le++){be=se[le].mipmaps;for(let de=0;de<be.length;de++){const ce=be[de];S.format!==wi?ie!==null?O?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de,0,0,ce.width,ce.height,ie,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de,ze,ce.width,ce.height,0,ce.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de,0,0,ce.width,ce.height,ie,Le,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de,ze,ce.width,ce.height,0,ie,Le,ce.data)}}}else{if(be=S.mipmaps,O&&xe){be.length>0&&Me++;const le=Ye(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,ze,le.width,le.height)}for(let le=0;le<6;le++)if(Be){O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,se[le].width,se[le].height,ie,Le,se[le].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,se[le].width,se[le].height,0,ie,Le,se[le].data);for(let de=0;de<be.length;de++){const Ke=be[de].image[le].image;O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de+1,0,0,Ke.width,Ke.height,ie,Le,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de+1,ze,Ke.width,Ke.height,0,ie,Le,Ke.data)}}else{O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie,Le,se[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,ie,Le,se[le]);for(let de=0;de<be.length;de++){const ce=be[de];O?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de+1,0,0,ie,Le,ce.image[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de+1,ze,ie,Le,ce.image[le])}}}g(S)&&M(r.TEXTURE_CUBE_MAP),_e.__version=j.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function me(P,S,V,G,j,_e){const pe=s.convert(V.format,V.colorSpace),te=s.convert(V.type),ae=v(V.internalFormat,pe,te,V.normalized,V.colorSpace),ye=n.get(S),Be=n.get(V);if(Be.__renderTarget=S,!ye.__hasExternalTextures){const se=Math.max(1,S.width>>_e),ne=Math.max(1,S.height>>_e);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,_e,ae,se,ne,S.depth,0,pe,te,null):t.texImage2D(j,_e,ae,se,ne,0,pe,te,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Xe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,j,Be.__webglTexture,0,Ae(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,j,Be.__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(P,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const G=S.depthTexture,j=G&&G.isDepthTexture?G.type:null,_e=y(S.stencilBuffer,j),pe=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae(S),_e,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae(S),_e,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,_e,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,P)}else{const G=S.textures;for(let j=0;j<G.length;j++){const _e=G[j],pe=s.convert(_e.format,_e.colorSpace),te=s.convert(_e.type),ae=v(_e.internalFormat,pe,te,_e.normalized,_e.colorSpace);Xe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae(S),ae,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae(S),ae,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ae,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(P,S,V){const G=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),De(r.TEXTURE_CUBE_MAP,S.depthTexture);const ye=s.convert(S.depthTexture.format),Be=s.convert(S.depthTexture.type);let se;S.depthTexture.format===gr?se=r.DEPTH_COMPONENT24:S.depthTexture.format===ss&&(se=r.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,S.width,S.height,0,ye,Be,null)}}else Q(S.depthTexture,0);const _e=j.__webglTexture,pe=Ae(S),te=G?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,ae=S.depthTexture.format===ss?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===gr)Xe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,te,_e,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,ae,te,_e,0);else if(S.depthTexture.format===ss)Xe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,te,_e,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,ae,te,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(P){const S=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const G=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=G}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let G=0;G<6;G++)Ie(S.__webglFramebuffer[G],P,G);else{const G=P.texture.mipmaps;G&&G.length>0?Ie(S.__webglFramebuffer[0],P,0):Ie(S.__webglFramebuffer,P,0)}else if(V){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=r.createRenderbuffer(),Re(S.__webglDepthbuffer[G],P,!1);else{const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,_e)}}else{const G=P.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Re(S.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,_e)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(P,S,V){const G=n.get(P);S!==void 0&&me(G.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&J(P)}function ue(P){const S=P.texture,V=n.get(P),G=n.get(S);P.addEventListener("dispose",x);const j=P.textures,_e=P.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=S.version,a.memory.textures++),_e){V.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[te]=[];for(let ae=0;ae<S.mipmaps.length;ae++)V.__webglFramebuffer[te][ae]=r.createFramebuffer()}else V.__webglFramebuffer[te]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)V.__webglFramebuffer[te]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(pe)for(let te=0,ae=j.length;te<ae;te++){const ye=n.get(j[te]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&Xe(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let te=0;te<j.length;te++){const ae=j[te];V.__webglColorRenderbuffer[te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[te]);const ye=s.convert(ae.format,ae.colorSpace),Be=s.convert(ae.type),se=v(ae.internalFormat,ye,Be,ae.normalized,ae.colorSpace,P.isXRRenderTarget===!0),ne=Ae(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,se,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,V.__webglColorRenderbuffer[te])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),De(r.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)me(V.__webglFramebuffer[te][ae],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ae);else me(V.__webglFramebuffer[te],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(S)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let te=0,ae=j.length;te<ae;te++){const ye=j[te],Be=n.get(ye);let se=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Be.__webglTexture),De(se,ye),me(V.__webglFramebuffer,P,ye,r.COLOR_ATTACHMENT0+te,se,0),g(ye)&&M(se)}t.unbindTexture()}else{let te=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(te,G.__webglTexture),De(te,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)me(V.__webglFramebuffer[ae],P,S,r.COLOR_ATTACHMENT0,te,ae);else me(V.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,te,0);g(S)&&M(te),t.unbindTexture()}P.depthBuffer&&J(P)}function I(P){const S=P.textures;for(let V=0,G=S.length;V<G;V++){const j=S[V];if(g(j)){const _e=T(P),pe=n.get(j).__webglTexture;t.bindTexture(_e,pe),M(_e),t.unbindTexture()}}}const ge=[],Ne=[];function Ue(P){if(P.samples>0){if(Xe(P)===!1){const S=P.textures,V=P.width,G=P.height;let j=r.COLOR_BUFFER_BIT;const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(P),te=S.length>1;if(te)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ae=P.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),te){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Be=n.get(S[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,V,G,0,0,V,G,j,r.NEAREST),l===!0&&(ge.length=0,Ne.length=0,ge.push(r.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ge.push(_e),Ne.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),te)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Be=n.get(S[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ae(P){return Math.min(i.maxSamples,P.samples)}function Xe(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(P){const S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function st(P,S){const V=P.colorSpace,G=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==wc&&V!==Rr&&(mt.getTransfer(V)===bt?(G!==wi||j!==ui)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",V)),S}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=R,this.setTextureCube=Z,this.rebindTextures=oe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WT(r,e){function t(n,i=Rr){let s;const a=mt.getTransfer(i);if(n===ui)return r.UNSIGNED_BYTE;if(n===jf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ed)return r.UNSIGNED_SHORT_5_5_5_1;if(n===sg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ag)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ig)return r.BYTE;if(n===rg)return r.SHORT;if(n===Bo)return r.UNSIGNED_SHORT;if(n===Qf)return r.INT;if(n===Qi)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===Dn)return r.HALF_FLOAT;if(n===og)return r.ALPHA;if(n===lg)return r.RGB;if(n===wi)return r.RGBA;if(n===gr)return r.DEPTH_COMPONENT;if(n===ss)return r.DEPTH_STENCIL;if(n===td)return r.RED;if(n===nd)return r.RED_INTEGER;if(n===xs)return r.RG;if(n===id)return r.RG_INTEGER;if(n===rd)return r.RGBA_INTEGER;if(n===rc||n===sc||n===ac||n===oc)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rh||n===Ph||n===Lh||n===Dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ih||n===Nh||n===Uh||n===Fh||n===Oh||n===bc||n===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ih||n===Nh)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fh)return s.COMPRESSED_R11_EAC;if(n===Oh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===bc)return s.COMPRESSED_RG11_EAC;if(n===Bh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zh||n===kh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh||n===Yh||n===$h||n===Zh||n===Kh||n===Jh||n===Qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$h)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jh||n===ef||n===tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jh)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ef)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nf||n===rf||n===Tc||n===sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jt({vertexShader:XT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new Ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $T extends bs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new YT,g={},M=t.getContextAttributes();let T=null,v=null;const y=[],w=[],E=new he;let x=null,b=null;const C=new oi;C.viewport=new Ht;const D=new oi;D.viewport=new Ht;const L=[C,D],H=new eM;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=y[q];return ee===void 0&&(ee=new gu,y[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=y[q];return ee===void 0&&(ee=new gu,y[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=y[q];return ee===void 0&&(ee=new gu,y[q]=ee),ee.getHandSpace()};function X(q){const ee=w.indexOf(q.inputSource);if(ee===-1)return;const ve=y[ee];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||a),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Q);for(let q=0;q<y.length;q++){const ee=w[q];ee!==null&&(w[q]=null,y[q].disconnect(ee))}N=null,z=null,m.reset();for(const q in g)delete g[q];if(e.setRenderTarget(T),f=null,h=null,d=null,i=null,v=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),b!==null){const q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?ss:gr,He=M.stencil?zo:Qi);const Re={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Re),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new gn(h.textureWidth,h.textureHeight,{format:wi,type:ui,depthTexture:new Go(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new gn(f.framebufferWidth,f.framebufferHeight,{format:wi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(q){for(let ee=0;ee<q.removed.length;ee++){const ve=q.removed[ee],He=w.indexOf(ve);He>=0&&(w[He]=null,y[He].disconnect(ve))}for(let ee=0;ee<q.added.length;ee++){const ve=q.added[ee];let He=w.indexOf(ve);if(He===-1){for(let Re=0;Re<y.length;Re++)if(Re>=w.length){w.push(ve),He=Re;break}else if(w[Re]===null){w[Re]=ve,He=Re;break}if(He===-1)break}const me=y[He];me&&me.connect(ve)}}const W=new F,R=new F;function Z(q,ee,ve){W.setFromMatrixPosition(ee.matrixWorld),R.setFromMatrixPosition(ve.matrixWorld);const He=W.distanceTo(R),me=ee.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Ie=me[14]/(me[10]-1),J=me[14]/(me[10]+1),oe=(me[9]+1)/me[5],ue=(me[9]-1)/me[5],I=(me[8]-1)/me[0],ge=(Re[8]+1)/Re[0],Ne=Ie*I,Ue=Ie*ge,Ae=He/(-I+ge),Xe=Ae*-I;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xe),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const U=Ie+Ae,st=J+Ae,Ye=Ne-Xe,P=Ue+(He-Xe),S=oe*J/st*U,V=ue*J/st*U;q.projectionMatrix.makePerspective(Ye,P,S,V,U,st),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Se(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,ve=q.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),H.near=D.near=C.near=ee,H.far=D.far=C.far=ve,(N!==H.near||z!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,z=H.far),H.layers.mask=q.layers.mask|6,C.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;const He=q.parent,me=H.cameras;Se(H,He);for(let Re=0;Re<me.length;Re++)Se(me[Re],He);me.length===2?Z(H,C,D):H.projectionMatrix.copy(C.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),Te(q,H,He)};function Te(q,ee,ve){ve===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=af*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(q){return g[q]};let We=null;function De(q,ee){if(u=ee.getViewerPose(c||a),p=ee,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let He=!1;ve.length!==H.cameras.length&&(H.cameras.length=0,He=!0);for(let J=0;J<ve.length;J++){const oe=ve[J];let ue=null;if(f!==null)ue=f.getViewport(oe);else{const ge=d.getViewSubImage(h,oe);ue=ge.viewport,J===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let I=L[J];I===void 0&&(I=new oi,I.layers.enable(J),I.viewport=new Ht,L[J]=I),I.matrix.fromArray(oe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(oe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ue.x,ue.y,ue.width,ue.height),J===0&&(H.matrix.copy(I.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),He===!0&&H.cameras.push(I)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const J=d.getDepthInformation(ve[0]);J&&J.isValid&&J.texture&&m.init(J,i.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let J=0;J<ve.length;J++){const oe=ve[J].camera;if(oe){let ue=g[oe];ue||(ue=new bg,g[oe]=ue);const I=d.getCameraImage(oe);ue.sourceTexture=I}}}}for(let ve=0;ve<y.length;ve++){const He=w[ve],me=y[ve];He!==null&&me!==void 0&&me.update(He,ee,c||a)}We&&We(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Oe=new Og;Oe.setAnimationLoop(De),this.setAnimationLoop=function(q){We=q},this.dispose=function(){}}}const ZT=new Et,Wg=new at;Wg.set(-1,0,0,0,1,0,0,0,1);function KT(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ig(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,T,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===qn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===qn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),T=M.envMap,v=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JT(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const w=y.program;n.uniformBlockBinding(v,w)}function c(v,y){let w=i[v.id];w===void 0&&(m(v),w=u(v),i[v.id]=w,v.addEventListener("dispose",M));const E=y.program;n.updateUBOMapping(v,E);const x=e.render.frame;s[v.id]!==x&&(h(v),s[v.id]=x)}function u(v){const y=d();v.__bindingPointIndex=y;const w=r.createBuffer(),E=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],w=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let x=0,b=w.length;x<b;x++){const C=w[x];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)f(C[D],x,D,E);else f(C,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,w,E){if(_(v,y,w,E)===!0){const x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){const L=b[D],H=g(L);p(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function p(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function _(v,y,w,E){const x=v.value,b=y+"_"+w;if(E[b]===void 0)return typeof x=="number"||typeof x=="boolean"?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{const C=E[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){const y=v.uniforms;let w=0;const E=16;for(let b=0,C=y.length;b<C;b++){const D=Array.isArray(y[b])?y[b]:[y[b]];for(let L=0,H=D.length;L<H;L++){const N=D[L],z=Array.isArray(N.value)?N.value:[N.value];for(let X=0,B=z.length;X<B;X++){const Q=z[X],W=g(Q),R=w%E,Z=R%W.boundary,Se=R+Z;w+=Z,Se!==0&&E-Se<W.storage&&(w+=E-Se),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=W.storage}}}const x=w%E;return x>0&&(w+=E-x),v.__size=w,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function T(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:T}}const QT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function jT(){return zi===null&&(zi=new vg(QT,16,16,xs,Dn),zi.name="DFG_LUT",zi.minFilter=mn,zi.magFilter=mn,zi.wrapS=Ii,zi.wrapT=Ii,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class md{constructor(e={}){const{canvas:t=Lx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ui}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([rd,id,nd]),g=new Set([ui,Qi,Bo,zo,jf,ed]),M=new Uint32Array(4),T=new Int32Array(4),v=new F;let y=null,w=null;const E=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,L=null,H=null,N=null,z=null;this._outputColorSpace=si;let X=0,B=0,Q=null,W=-1,R=null;const Z=new Ht,Se=new Ht;let Te=null;const We=new it(0);let De=0,Oe=t.width,q=t.height,ee=1,ve=null,He=null;const me=new Ht(0,0,Oe,q),Re=new Ht(0,0,Oe,q);let Ie=!1;const J=new ud;let oe=!1,ue=!1;const I=new Et,ge=new F,Ne=new Ht,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Xe(){return Q===null?ee:1}let U=n;function st(A,k){return t.getContext(A,k)}let Ye,P,S,V,G,j,_e,pe,te,ae,ye,Be,se,ne,ie,Le,ze,O,xe,re,Me,be,le;try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wf}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",je,!1),U===null){const k="webgl2";if(U=st(k,A),U===null)throw st(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}de()}catch(A){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",je,!1),vt("WebGLRenderer: "+A.message),A}function de(){Ye=new j1(U),Ye.init(),Me=new WT(U,Ye),P=new G1(U,Ye,e,Me),S=new HT(U,Ye),P.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),H=U.createFramebuffer(),N=U.createFramebuffer(),z=U.createFramebuffer(),V=new nb(U),G=new CT,j=new GT(U,Ye,S,G,P,Me,V),_e=new Q1(C),pe=new rM(U),be=new V1(U,pe),te=new eb(U,pe,V,be),ae=new rb(U,te,pe,be,V),O=new ib(U,P,j),ie=new W1(G),ye=new AT(C,_e,Ye,P,be,ie),Be=new KT(C,G),se=new PT,ne=new FT(Ye),ze=new k1(C,_e,S,ae,p,l),Le=new VT(C,ae,P),le=new JT(U,V,P,S),xe=new H1(U,Ye,V),re=new tb(U,Ye,V),V.programs=ye.programs,C.capabilities=P,C.extensions=Ye,C.properties=G,C.renderLists=se,C.shadowMap=Le,C.state=S,C.info=V}_!==ui&&(b=new ab(_,t.width,t.height,o,i,s));const ce=new $T(C,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(Oe,q,!1))},this.getSize=function(A){return A.set(Oe,q)},this.setSize=function(A,k,K=!0){if(ce.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=A,q=k,t.width=Math.floor(A*ee),t.height=Math.floor(k*ee),K===!0&&(t.style.width=A+"px",t.style.height=k+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Oe*ee,q*ee).floor()},this.setDrawingBufferSize=function(A,k,K){Oe=A,q=k,ee=K,t.width=Math.floor(A*K),t.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(_===ui){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,k,K,Y){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,k,K,Y),S.viewport(Z.copy(me).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,k,K,Y){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,k,K,Y),S.scissor(Se.copy(Re).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){S.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){ve=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,K=!0){let Y=0;if(A){let $=!1;if(Q!==null){const Ee=Q.texture.format;$=m.has(Ee)}if($){const Ee=Q.texture.type,Ve=g.has(Ee),Pe=ze.getClearColor(),$e=ze.getClearAlpha(),Qe=Pe.r,ot=Pe.g,dt=Pe.b;Ve?(M[0]=Qe,M[1]=ot,M[2]=dt,M[3]=$e,U.clearBufferuiv(U.COLOR,0,M)):(T[0]=Qe,T[1]=ot,T[2]=dt,T[3]=$e,U.clearBufferiv(U.COLOR,0,T))}else Y|=U.COLOR_BUFFER_BIT}k&&(Y|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",je,!1),ze.dispose(),se.dispose(),ne.dispose(),G.dispose(),_e.dispose(),ae.dispose(),be.dispose(),le.dispose(),ye.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",St),ce.removeEventListener("sessionend",Mt),gt.stop()};function Ke(A){A.preventDefault(),Rc("WebGLRenderer: Context Lost."),D=!0}function fe(){Rc("WebGLRenderer: Context Restored."),D=!1;const A=V.autoReset,k=Le.enabled,K=Le.autoUpdate,Y=Le.needsUpdate,$=Le.type;de(),V.autoReset=A,Le.enabled=k,Le.autoUpdate=K,Le.needsUpdate=Y,Le.type=$}function je(A){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const k=A.target;k.removeEventListener("dispose",ke),we(k)}function we(A){wt(A),G.remove(A)}function wt(A){const k=G.get(A).programs;k!==void 0&&(k.forEach(function(K){ye.releaseProgram(K)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,Y,$,Ee){k===null&&(k=Ue);const Ve=$.isMesh&&$.matrixWorld.determinantAffine()<0,Pe=hn(A,k,K,Y,$);S.setMaterial(Y,Ve);let $e=K.index,Qe=1;if(Y.wireframe===!0){if($e=te.getWireframeAttribute(K),$e===void 0)return;Qe=2}const ot=K.drawRange,dt=K.attributes.position;let Ze=ot.start*Qe,yt=(ot.start+ot.count)*Qe;Ee!==null&&(Ze=Math.max(Ze,Ee.start*Qe),yt=Math.min(yt,(Ee.start+Ee.count)*Qe)),$e!==null?(Ze=Math.max(Ze,0),yt=Math.min(yt,$e.count)):dt!=null&&(Ze=Math.max(Ze,0),yt=Math.min(yt,dt.count));const jt=yt-Ze;if(jt<0||jt===1/0)return;be.setup($,Y,Pe,K,$e);let Ft,Pt=xe;if($e!==null&&(Ft=pe.get($e),Pt=re,Pt.setIndex(Ft)),$.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Xe()),Pt.setMode(U.LINES)):Pt.setMode(U.TRIANGLES);else if($.isLine){let bn=Y.linewidth;bn===void 0&&(bn=1),S.setLineWidth(bn*Xe()),$.isLineSegments?Pt.setMode(U.LINES):$.isLineLoop?Pt.setMode(U.LINE_LOOP):Pt.setMode(U.LINE_STRIP)}else $.isPoints?Pt.setMode(U.POINTS):$.isSprite&&Pt.setMode(U.TRIANGLES);if($.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const bn=$._multiDrawStarts,Fe=$._multiDrawCounts,Fn=$._multiDrawCount,xt=$e?pe.get($e).bytesPerElement:1,xi=G.get(Y).currentProgram.getUniforms();for(let Oi=0;Oi<Fn;Oi++)xi.setValue(U,"_gl_DrawID",Oi),Pt.render(bn[Oi]/xt,Fe[Oi])}else if($.isInstancedMesh)Pt.renderInstances(Ze,jt,$.count);else if(K.isInstancedBufferGeometry){const bn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Fe=Math.min(K.instanceCount,bn);Pt.renderInstances(Ze,jt,Fe)}else Pt.render(Ze,jt)};function et(A,k,K,Y){L!==null&&A.isNodeMaterial&&L.setObject(Y,A),oe===!0&&ie.setState(A,K,!1),A.transparent===!0&&A.side===cr&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Wt(A,k,Y),A.side=_s,A.needsUpdate=!0,Wt(A,k,Y),A.side=cr):Wt(A,k,Y)}this.compile=function(A,k,K=null){K===null&&(K=A),L!==null&&L.renderStart(A,k,K),w=ne.get(K),w.init(k),x.push(w),K.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),A!==K&&A.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),ue=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,ue),oe===!0&&ie.setGlobalState(this.clippingPlanes,k),L!==null&&Le.render(w.state.shadowsArray,K,k);const Y=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Ve=0;Ve<Ee.length;Ve++){const Pe=Ee[Ve];et(Pe,K,k,$),Y.add(Pe)}else et(Ee,K,k,$),Y.add(Ee)}),w=x.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(A,k,K=null){const Y=this.compile(A,k,K);return new Promise($=>{function Ee(){if(Y.forEach(function(Ve){const $e=G.get(Ve).currentProgram;($e===void 0||$e.isReady())&&Y.delete(Ve)}),Y.size===0){$(A);return}setTimeout(Ee,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let tt=null;function Ut(A){tt&&tt(A)}function St(){gt.stop()}function Mt(){gt.start()}const gt=new Og;gt.setAnimationLoop(Ut),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(A){tt=A,ce.setAnimationLoop(A),A===null?gt.stop():gt.start()},ce.addEventListener("sessionstart",St),ce.addEventListener("sessionend",Mt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(A,k);const K=ce.enabled===!0&&ce.isPresenting===!0,Y=b!==null&&(Q===null||K)&&b.begin(C,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,k,Q),w=ne.get(A,x.length),w.init(k),w.state.textureUnits=j.getTextureUnits(),x.push(w),I.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(I,Yi,k.reversedDepth),ue=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,ue),y=se.get(A,E.length),y.init(),E.push(y),ce.enabled===!0&&ce.isPresenting===!0){const Ve=C.xr.getDepthSensingMesh();Ve!==null&&Nn(Ve,k,-1/0,C.sortObjects)}Nn(A,k,0,C.sortObjects),y.finish(),L!==null&&L.updateLights(w.state.lightsArray),C.sortObjects===!0&&y.sort(ve,He),Ae=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ae&&ze.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&ie.beginShadows();const $=w.state.shadowsArray;if(Le.render($,A,k),oe===!0&&ie.endShadows(),(Y&&b.hasRenderPass())===!1){const Ve=y.opaque,Pe=y.transmissive;if(w.setupLights(),k.isArrayCamera){const $e=k.cameras;if(Pe.length>0)for(let Qe=0,ot=$e.length;Qe<ot;Qe++){const dt=$e[Qe];yn(Ve,Pe,A,dt)}Ae&&ze.render(A);for(let Qe=0,ot=$e.length;Qe<ot;Qe++){const dt=$e[Qe];It(y,A,dt,dt.viewport)}}else Pe.length>0&&yn(Ve,Pe,A,k),Ae&&ze.render(A),It(y,A,k)}Q!==null&&B===0&&(j.updateMultisampleRenderTarget(Q),j.updateRenderTargetMipmap(Q)),Y&&b.end(C),A.isScene===!0&&A.onAfterRender(C,A,k),be.resetDefaultState(),W=-1,R=null,x.pop(),x.length>0?(w=x[x.length-1],j.setTextureUnits(w.state.textureUnits),oe===!0&&ie.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,L!==null&&L.renderEnd()};function Nn(A,k,K,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(J)){Y&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(I);const Ve=ae.update(A),Pe=A.material;Pe.visible&&y.push(A,Ve,Pe,K,Ne.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(J))){const Ve=ae.update(A),Pe=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ne.copy(Ve.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(I)),Array.isArray(Pe)){const $e=Ve.groups;for(let Qe=0,ot=$e.length;Qe<ot;Qe++){const dt=$e[Qe],Ze=Pe[dt.materialIndex];Ze&&Ze.visible&&y.push(A,Ve,Ze,K,Ne.z,dt,k)}}else Pe.visible&&y.push(A,Ve,Pe,K,Ne.z,null,k)}}const Ee=A.children;for(let Ve=0,Pe=Ee.length;Ve<Pe;Ve++)Nn(Ee[Ve],k,K,Y)}function It(A,k,K,Y){const{opaque:$,transmissive:Ee,transparent:Ve}=A;w.setupLightsView(K),oe===!0&&ie.setGlobalState(C.clippingPlanes,K),Y&&S.viewport(Z.copy(Y)),$.length>0&&Un($,k,K),Ee.length>0&&Un(Ee,k,K),Ve.length>0&&Un(Ve,k,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function yn(A,k,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const Ze=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new gn(1,1,{generateMipmaps:!0,type:Ze?Dn:ui,minFilter:rs,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[Y.id],Ve=Y.viewport||Z;Ee.setSize(Ve.z*C.transmissionResolutionScale,Ve.w*C.transmissionResolutionScale);const Pe=C.getRenderTarget(),$e=C.getActiveCubeFace(),Qe=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(We),De=C.getClearAlpha(),De<1&&C.setClearColor(16777215,.5),C.clear(),Ae&&ze.render(K);const ot=C.toneMapping;C.toneMapping=Ki;const dt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),oe===!0&&ie.setGlobalState(C.clippingPlanes,Y),Un(A,K,Y),j.updateMultisampleRenderTarget(Ee),j.updateRenderTargetMipmap(Ee),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let yt=0,jt=k.length;yt<jt;yt++){const Ft=k[yt],{object:Pt,geometry:bn,material:Fe,group:Fn}=Ft;if(Fe.side===cr&&Pt.layers.test(Y.layers)){const xt=Fe.side;Fe.side=qn,Fe.needsUpdate=!0,Qt(Pt,K,Y,bn,Fe,Fn),Fe.side=xt,Fe.needsUpdate=!0,Ze=!0}}Ze===!0&&(j.updateMultisampleRenderTarget(Ee),j.updateRenderTargetMipmap(Ee))}C.setRenderTarget(Pe,$e,Qe),C.setClearColor(We,De),dt!==void 0&&(Y.viewport=dt),C.toneMapping=ot}function Un(A,k,K){const Y=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Ee=A.length;$<Ee;$++){const Ve=A[$],{object:Pe,geometry:$e,group:Qe}=Ve;let ot=Ve.material;ot.allowOverride===!0&&Y!==null&&(ot=Y),Pe.layers.test(K.layers)&&Qt(Pe,k,K,$e,ot,Qe)}}function Qt(A,k,K,Y,$,Ee){L!==null&&$.isNodeMaterial&&L.setObject(A,$),A.onBeforeRender(C,k,K,Y,$,Ee),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(C,k,K,Y,A,Ee),$.transparent===!0&&$.side===cr&&$.forceSinglePass===!1?($.side=qn,$.needsUpdate=!0,C.renderBufferDirect(K,k,Y,$,A,Ee),$.side=_s,$.needsUpdate=!0,C.renderBufferDirect(K,k,Y,$,A,Ee),$.side=cr):C.renderBufferDirect(K,k,Y,$,A,Ee),A.onAfterRender(C,k,K,Y,$,Ee)}function Wt(A,k,K){k.isScene!==!0&&(k=Ue);const Y=G.get(A),$=w.state.lights,Ee=w.state.shadowsArray,Ve=$.state.version,Pe=ye.getParameters(A,$.state,Ee,k,K,w.state.lightProbeGridArray),$e=ye.getProgramCacheKey(Pe);let Qe=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=_e.get(A.envMap||Y.environment,ot),Y.envMapRotation=Y.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",ke),Qe=new Map,Y.programs=Qe);let dt=Qe.get($e);if(dt!==void 0){if(Y.currentProgram===dt&&Y.lightsStateVersion===Ve)return Fi(A,Pe),dt}else Pe.uniforms=ye.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,K,Pe),A.onBeforeCompile(Pe,C),dt=ye.acquireProgram(Pe,$e),Qe.set($e,dt),Y.uniforms=Pe.uniforms;const Ze=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=ie.uniform),Fi(A,Pe),Y.needsLights=vi(A),Y.lightsStateVersion=Ve,Y.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.sunLights.value=$.state.sun,Ze.sunLightShadows.value=$.state.sunShadow,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.sunShadowMatrix.value=$.state.sunShadowMatrix,Ze.sunShadowCascade.value=$.state.sunShadowCascade,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=dt,Y.uniformsList=null,dt}function sn(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=cc.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Fi(A,k){const K=G.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function As(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let K=0,Y=A.length;K<Y;K++){const $=A[K];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function hn(A,k,K,Y,$){k.isScene!==!0&&(k=Ue),j.resetTextureUnits();const Ee=k.fog,Ve=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Pe=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:mt.workingColorSpace,$e=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Qe=_e.get(Y.envMap||Ve,$e),ot=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,dt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ze=!!K.morphAttributes.position,yt=!!K.morphAttributes.normal,jt=!!K.morphAttributes.color;let Ft=Ki;Y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=C.toneMapping);const Pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bn=Pt!==void 0?Pt.length:0,Fe=G.get(Y),Fn=w.state.lights;if(oe===!0&&(ue===!0||A!==R)){const Nt=A===R&&Y.id===W;ie.setState(Y,A,Nt)}let xt=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Fn.state.version||Fe.outputColorSpace!==Pe||$.isBatchedMesh&&Fe.batching===!1||!$.isBatchedMesh&&Fe.batching===!0||$.isBatchedMesh&&Fe.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Fe.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Fe.instancing===!1||!$.isInstancedMesh&&Fe.instancing===!0||$.isSkinnedMesh&&Fe.skinning===!1||!$.isSkinnedMesh&&Fe.skinning===!0||$.isInstancedMesh&&Fe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Fe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Fe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Fe.instancingMorph===!1&&$.morphTexture!==null||Fe.envMap!==Qe||Y.fog===!0&&Fe.fog!==Ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ie.numPlanes||Fe.numIntersection!==ie.numIntersection)||Fe.vertexAlphas!==ot||Fe.vertexTangents!==dt||Fe.morphTargets!==Ze||Fe.morphNormals!==yt||Fe.morphColors!==jt||Fe.toneMapping!==Ft||Fe.morphTargetsCount!==bn||!!Fe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Fe.__version=Y.version);let xi=Fe.currentProgram;xt===!0&&(xi=Wt(Y,k,$),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,xi,Fe));let Oi=!1,vr=!1,Rs=!1;const Ct=xi.getUniforms(),$t=Fe.uniforms;if(S.useProgram(xi.program)&&(Oi=!0,vr=!0,Rs=!0),Y.id!==W&&(W=Y.id,vr=!0),Fe.needsLights){const Nt=As(w.state.lightProbeGridArray,$);Fe.lightProbeGrid!==Nt&&(Fe.lightProbeGrid=Nt,vr=!0)}if(Oi||R!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ct.setValue(U,"projectionMatrix",A.projectionMatrix),Ct.setValue(U,"viewMatrix",A.matrixWorldInverse);const Sr=Ct.map.cameraPosition;Sr!==void 0&&Sr.setValue(U,ge.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ct.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ct.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,vr=!0,Rs=!0)}if(Fe.needsLights&&(Fn.state.sunShadowMap.length>0&&Ct.setValue(U,"sunShadowMap",Fn.state.sunShadowMap,j),Fn.state.directionalShadowMap.length>0&&Ct.setValue(U,"directionalShadowMap",Fn.state.directionalShadowMap,j),Fn.state.spotShadowMap.length>0&&Ct.setValue(U,"spotShadowMap",Fn.state.spotShadowMap,j),Fn.state.pointShadowMap.length>0&&Ct.setValue(U,"pointShadowMap",Fn.state.pointShadowMap,j)),$.isSkinnedMesh){Ct.setOptional(U,$,"bindMatrix"),Ct.setOptional(U,$,"bindMatrixInverse");const Nt=$.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(U,"boneTexture",Nt.boneTexture,j))}$.isBatchedMesh&&(Ct.setOptional(U,$,"batchingTexture"),Ct.setValue(U,"batchingTexture",$._matricesTexture,j),Ct.setOptional(U,$,"batchingIdTexture"),Ct.setValue(U,"batchingIdTexture",$._indirectTexture,j),Ct.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&Ct.setValue(U,"batchingColorTexture",$._colorsTexture,j));const xr=K.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&O.update($,K,xi),(vr||Fe.receiveShadow!==$.receiveShadow)&&(Fe.receiveShadow=$.receiveShadow,Ct.setValue(U,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&($t.envMapIntensity.value=k.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=jT()),vr){if(Ct.setValue(U,"toneMappingExposure",C.toneMappingExposure),Fe.needsLights&&Yt($t,Rs),Ee&&Y.fog===!0&&Be.refreshFogUniforms($t,Ee),Be.refreshMaterialUniforms($t,Y,ee,q,w.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.lightProbeGrid){const Nt=Fe.lightProbeGrid;$t.probesSH.value=Nt.texture,$t.probesMin.value.copy(Nt.boundingBox.min),$t.probesMax.value.copy(Nt.boundingBox.max),$t.probesResolution.value.copy(Nt.resolution)}cc.upload(U,sn(Fe),$t,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(cc.upload(U,sn(Fe),$t,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ct.setValue(U,"center",$.center),Ct.setValue(U,"modelViewMatrix",$.modelViewMatrix),Ct.setValue(U,"normalMatrix",$.normalMatrix),Ct.setValue(U,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const Nt=Y.uniformsGroups;for(let Sr=0,Ps=Nt.length;Sr<Ps;Sr++){const bd=Nt[Sr];le.update(bd,xi),le.bind(bd,xi)}}return xi}function Yt(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function vi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,k,K){const Y=G.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),G.get(A.texture).__webglTexture=k,G.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const K=G.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,K=0){Q=A,X=k,B=K;let Y=null,$=!1,Ee=!1;if(A){const Pe=G.get(A);if(Pe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,Pe.__webglFramebuffer),Z.copy(A.viewport),Se.copy(A.scissor),Te=A.scissorTest,S.viewport(Z),S.scissor(Se),S.setScissorTest(Te),W=-1;return}else if(Pe.__webglFramebuffer===void 0)j.setupRenderTarget(A);else if(Pe.__hasExternalTextures)j.rebindTextures(A,G.get(A.texture).__webglTexture,G.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Pe.__boundDepthTexture!==ot){if(ot!==null&&G.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ee=!0);const Qe=G.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[k])?Y=Qe[k][K]:Y=Qe[k],$=!0):A.samples>0&&j.useMultisampledRTT(A)===!1?Y=G.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[K]:Y=Qe,Z.copy(A.viewport),Se.copy(A.scissor),Te=A.scissorTest}else Z.copy(me).multiplyScalar(ee).floor(),Se.copy(Re).multiplyScalar(ee).floor(),Te=Ie;if(K!==0&&(Y=H),S.bindFramebuffer(U.FRAMEBUFFER,Y)&&S.drawBuffers(A,Y),S.viewport(Z),S.scissor(Se),S.setScissorTest(Te),$){const Pe=G.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,K)}else if(Ee){const Pe=k;for(let $e=0;$e<A.textures.length;$e++){const Qe=G.get(A.textures[$e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+$e,Qe.__webglTexture,K,Pe)}}else if(A!==null&&K!==0){const Pe=G.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pe.__webglTexture,K)}W=-1};function Cs(A){const k=G.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=P.textureFormatReadable(A.format),k.__typeReadable=P.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,K,Y,$,Ee,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){S.bindFramebuffer(U.FRAMEBUFFER,$e);try{const Qe=A.textures[Pe],ot=Qe.format,dt=Qe.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pe);const Ze=Cs(Qe);if(Ze.__formatReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&K>=0&&K<=A.height-$&&U.readPixels(k,K,Y,$,Me.convert(ot),Me.convert(dt),Ee)}finally{const Qe=Q!==null?G.get(Q).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,k,K,Y,$,Ee,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e)if(k>=0&&k<=A.width-Y&&K>=0&&K<=A.height-$){S.bindFramebuffer(U.FRAMEBUFFER,$e);const Qe=A.textures[Pe],ot=Qe.format,dt=Qe.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pe);const Ze=Cs(Qe);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(k,K,Y,$,Me.convert(ot),Me.convert(dt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const jt=Q!==null?G.get(Q).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,jt);const Ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Dx(U,Ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(yt),U.deleteSync(Ft),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,K=0){const Y=Math.pow(2,-K),$=Math.floor(A.image.width*Y),Ee=Math.floor(A.image.height*Y),Ve=k!==null?k.x:0,Pe=k!==null?k.y:0;j.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ve,Pe,$,Ee),S.unbindTexture()},this.copyTextureToTexture=function(A,k,K=null,Y=null,$=0,Ee=0){let Ve,Pe,$e,Qe,ot,dt,Ze,yt,jt;const Ft=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(K!==null)Ve=K.max.x-K.min.x,Pe=K.max.y-K.min.y,$e=K.isBox3?K.max.z-K.min.z:1,Qe=K.min.x,ot=K.min.y,dt=K.isBox3?K.min.z:0;else{const $t=Math.pow(2,-$);Ve=Math.floor(Ft.width*$t),Pe=Math.floor(Ft.height*$t),A.isDataArrayTexture?$e=Ft.depth:A.isData3DTexture?$e=Math.floor(Ft.depth*$t):$e=1,Qe=0,ot=0,dt=0}Y!==null?(Ze=Y.x,yt=Y.y,jt=Y.z):(Ze=0,yt=0,jt=0);const Pt=Me.convert(k.format),bn=Me.convert(k.type);let Fe;k.isData3DTexture?(j.setTexture3D(k,0),Fe=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),Fe=U.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),Fe=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Fn=S.getParameter(U.UNPACK_ROW_LENGTH),xt=S.getParameter(U.UNPACK_IMAGE_HEIGHT),xi=S.getParameter(U.UNPACK_SKIP_PIXELS),Oi=S.getParameter(U.UNPACK_SKIP_ROWS),vr=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Ft.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ft.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),S.pixelStorei(U.UNPACK_SKIP_ROWS,ot),S.pixelStorei(U.UNPACK_SKIP_IMAGES,dt);const Rs=A.isDataArrayTexture||A.isData3DTexture,Ct=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const $t=G.get(A),xr=G.get(k),Nt=G.get($t.__renderTarget),Sr=G.get(xr.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,Nt.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Ps=0;Ps<$e;Ps++)Rs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(A).__webglTexture,$,dt+Ps),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(k).__webglTexture,Ee,jt+Ps)),U.blitFramebuffer(Qe,ot,Ve,Pe,Ze,yt,Ve,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||G.has(A)){const $t=G.get(A),xr=G.get(k);S.bindFramebuffer(U.READ_FRAMEBUFFER,N),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let Nt=0;Nt<$e;Nt++)Rs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$t.__webglTexture,$,dt+Nt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$t.__webglTexture,$),Ct?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xr.__webglTexture,Ee,jt+Nt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xr.__webglTexture,Ee),$!==0?U.blitFramebuffer(Qe,ot,Ve,Pe,Ze,yt,Ve,Pe,U.COLOR_BUFFER_BIT,U.NEAREST):Ct?U.copyTexSubImage3D(Fe,Ee,Ze,yt,jt+Nt,Qe,ot,Ve,Pe):U.copyTexSubImage2D(Fe,Ee,Ze,yt,Qe,ot,Ve,Pe);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ct?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Fe,Ee,Ze,yt,jt,Ve,Pe,$e,Pt,bn,Ft.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Fe,Ee,Ze,yt,jt,Ve,Pe,$e,Pt,Ft.data):U.texSubImage3D(Fe,Ee,Ze,yt,jt,Ve,Pe,$e,Pt,bn,Ft):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,Ze,yt,Ve,Pe,Pt,bn,Ft.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,Ze,yt,Ft.width,Ft.height,Pt,Ft.data):U.texSubImage2D(U.TEXTURE_2D,Ee,Ze,yt,Ve,Pe,Pt,bn,Ft);S.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),S.pixelStorei(U.UNPACK_SKIP_PIXELS,xi),S.pixelStorei(U.UNPACK_SKIP_ROWS,Oi),S.pixelStorei(U.UNPACK_SKIP_IMAGES,vr),Ee===0&&k.generateMipmaps&&U.generateMipmap(Fe),S.unbindTexture()},this.initRenderTarget=function(A){G.get(A).__webglFramebuffer===void 0&&j.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?j.setTextureCube(A,0):A.isData3DTexture?j.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?j.setTexture2DArray(A,0):j.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){X=0,B=0,Q=null,S.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const wm=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Xg=`
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
`,eE=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uPrev;
uniform vec2 uMouse;  uniform vec2 uVel;  uniform float uPow;
uniform vec2 uAuto;   uniform vec2 uAutoVel; uniform float uAutoPow;
uniform float uAspect; uniform float uTime; uniform float uDt;
${Xg}
vec2 curl(vec2 p) {
  float e = 0.02;
  float a = noise(p + vec2(0.0, e)) - noise(p - vec2(0.0, e));
  float b = noise(p + vec2(e, 0.0)) - noise(p - vec2(e, 0.0));
  return vec2(a, -b) / (2.0 * e);
}
void main() {
  vec2 uv = vUv;
  vec4 s = texture2D(uPrev, uv);
  vec2 back = uv - vec2(s.x / uAspect, s.y) * uDt * 2.2;
  vec4 a = texture2D(uPrev, back);
  a.xy *= 0.983; a.z *= 0.978;
  a.xy += curl(uv * vec2(uAspect, 1.0) * 2.4 + uTime * 0.09) * 0.55 * uDt * (0.25 + a.z);

  vec2 d = (uv - uMouse) * vec2(uAspect, 1.0);
  float g = exp(-dot(d, d) / 0.0052);
  a.xy += uVel * g * uPow * uDt * 10.0;
  a.z  += g * uPow * min(1.0, length(uVel) * 0.55) * uDt * 9.0;

  vec2 d2 = (uv - uAuto) * vec2(uAspect, 1.0);
  float g2 = exp(-dot(d2, d2) / 0.0075);
  a.xy += uAutoVel * g2 * uAutoPow * uDt * 10.0;
  a.z  += g2 * uAutoPow * min(1.0, length(uAutoVel) * 0.55) * uDt * 9.0;

  a.xy = clamp(a.xy, vec2(-4.0), vec2(4.0));
  a.z = min(a.z, 1.4);
  gl_FragColor = a;
}
`,tE=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uField;
uniform float uTime; uniform float uAspect; uniform float uIntro; uniform vec2 uMouse; uniform float uQuality;
${Xg}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5; mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) { if (float(i) >= uQuality) break; v += a * noise(p); p = m * p; a *= 0.5; }
  return v;
}
vec3 ramp(float t) {
  vec3 c0 = vec3(0.012, 0.010, 0.030);
  vec3 c1 = vec3(0.105, 0.045, 0.420);
  vec3 c2 = vec3(0.700, 0.120, 0.420);
  vec3 c3 = vec3(1.000, 0.330, 0.170);
  vec3 c4 = vec3(1.000, 0.720, 0.380);
  vec3 c5 = vec3(1.000, 0.950, 0.880);
  if (t < 0.22) return mix(c0, c1, t / 0.22);
  if (t < 0.45) return mix(c1, c2, (t - 0.22) / 0.23);
  if (t < 0.68) return mix(c2, c3, (t - 0.45) / 0.23);
  if (t < 0.88) return mix(c3, c4, (t - 0.68) / 0.20);
  return mix(c4, c5, (t - 0.88) / 0.12);
}
void main() {
  vec2 uv = vUv;
  vec4 f = texture2D(uField, uv);
  vec2 p = (uv - 0.5) * vec2(uAspect, 1.0) * 1.85;
  p += f.xy * 0.2;
  float t = uTime * 0.05;
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - vec2(t, 0.0)));
  vec2 r = vec2(fbm(p + 3.1 * q + vec2(1.7, 9.2) + t * 1.4), fbm(p + 3.1 * q + vec2(8.3, 2.8) - t * 1.2));
  float n = fbm(p + 3.3 * r);

  float ridge = pow(1.0 - abs(n * 2.0 - 1.0), 3.2);
  float body = smoothstep(0.30, 0.90, n);
  float lum = body * 0.46 + ridge * 0.86;

  float side = smoothstep(-0.35, 0.95, uv.x + (uv.y - 0.5) * 0.18);
  lum *= mix(0.30, 1.0, side);
  lum += f.z * 0.6;

  vec3 col = ramp(clamp(lum * 0.94, 0.0, 1.0));
  vec2 dm = (uv - uMouse) * vec2(uAspect, 1.0);
  col += vec3(1.0, 0.42, 0.22) * exp(-dot(dm, dm) * 16.0) * 0.10;
  col += vec3(1.0, 0.55, 0.3) * f.z * 0.12;

  float vg = smoothstep(1.35, 0.15, length((uv - 0.5) * vec2(uAspect * 0.78, 1.0)));
  col *= mix(0.22, 1.0, vg);

  // intro: light opens from the centre-right
  float dist = length((uv - vec2(0.62, 0.5)) * vec2(uAspect, 1.0));
  float open = smoothstep(uIntro * 2.2, uIntro * 2.2 - 0.5, dist);
  col *= open * clamp(uIntro * 1.6, 0.0, 1.0);

  col = pow(col, vec3(0.96));
  gl_FragColor = vec4(col, 1.0);
}
`;function nE({canvas:r,section:e}){const t=new md({canvas:r,antialias:!1,alpha:!1,powerPreference:"high-performance"}),n=innerWidth<760,i=Math.min(window.devicePixelRatio||1,1)*(n?.8:.92);t.setPixelRatio(i),t.setClearColor(460554,1);const s=new Ko(-1,1,1,-1,0,1),a=new Ia(2,2),o={type:Dn,format:wi,minFilter:mn,magFilter:mn,depthBuffer:!1,stencilBuffer:!1,wrapS:Ii,wrapT:Ii};let l=new gn(2,2,o),c=new gn(2,2,o);const u=new Jt({vertexShader:wm,fragmentShader:eE,depthTest:!1,depthWrite:!1,uniforms:{uPrev:{value:null},uMouse:{value:new he(.6,.5)},uVel:{value:new he},uPow:{value:0},uAuto:{value:new he(.6,.5)},uAutoVel:{value:new he},uAutoPow:{value:0},uAspect:{value:1.78},uTime:{value:0},uDt:{value:.016}}}),d=new Jt({vertexShader:wm,fragmentShader:tE,depthTest:!1,depthWrite:!1,uniforms:{uField:{value:null},uTime:{value:0},uAspect:{value:1.78},uIntro:{value:0},uMouse:{value:new he(.6,.5)},uQuality:{value:n?4:5}}}),h=new Vo;h.add(new Ot(a,u));const f=new Vo;f.add(new Ot(a,d));const p=kc(e,"100px"),_=new he(.6,.5),m=new he(.6,.5),g=new he,M=new he(.6,.5),T=new he(.6,.5),v=new he,y={intro:0};let w=0;function E(){const b=e.clientWidth,C=e.clientHeight;t.setSize(b,C,!1);const D=b/C;u.uniforms.uAspect.value=D,d.uniforms.uAspect.value=D;const L=240,H=Math.round(L*D);l.setSize(H,L),c.setSize(H,L),t.setRenderTarget(l),t.clear(),t.setRenderTarget(c),t.clear(),t.setRenderTarget(null)}E(),addEventListener("resize",E);function x(b,C,D=!1){if(!p.visible)return;b=Xn(b,.001,.05),w+=b;const L=e.getBoundingClientRect(),H=pt.moved&&!ys&&K0()<4e3,N=Xn((pt.sx-L.left)/L.width),z=Xn(1-(pt.sy-L.top)/L.height);_.set(N,z),g.set((_.x-m.x)*(L.width/L.height)/b,(_.y-m.y)/b),g.clampLength(0,3.2),m.copy(_);const X=H?.28:1;M.set(.62+.26*Math.sin(w*.55)+.06*Math.sin(w*1.7),.5+.2*Math.sin(w*.71+1.3)+.05*Math.cos(w*1.9)),v.set((M.x-T.x)*(L.width/L.height)/b,(M.y-T.y)/b),v.clampLength(0,2.4),T.copy(M);const B=u.uniforms;if(B.uPrev.value=l.texture,B.uMouse.value.copy(_),B.uVel.value.copy(g),B.uPow.value=H?pt.down?2.8:1:0,B.uAuto.value.copy(M),B.uAutoVel.value.copy(v),B.uAutoPow.value=X*.55,B.uTime.value=w,B.uDt.value=b,t.setRenderTarget(c),t.render(h,s),[l,c]=[c,l],D){t.setRenderTarget(null);return}const Q=d.uniforms;Q.uField.value=l.texture,Q.uTime.value=w,Q.uIntro.value=y.intro,Q.uMouse.value.set(H?_.x:M.x,H?_.y:M.y),t.setRenderTarget(null),t.render(f,s)}for(let b=0;b<40;b++)x(.02,0,!0);return{state:y,update:x,setIntro:b=>{y.intro=b}}}class iE extends Vo{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ws;e.deleteAttribute("uv");const t=new $o({side:qn}),n=new $o,i=new lo(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Ot(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new ao(e,n,6),o=new _n;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Ot(e,ea(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ot(e,ea(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Ot(e,ea(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new Ot(e,ea(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const h=new Ot(e,ea(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new Ot(e,ea(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ea(r){return new YS({color:0,emissive:16777215,emissiveIntensity:r})}const uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ua{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rE=new Ko(-1,1,1,-1,0,1);class sE extends un{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const aE=new sE;class gd{constructor(e){this._mesh=new Ot(aE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class oE extends Ua{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yo.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Am extends Ua{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class lE extends Ua{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oE(uc),this.copyPass.material.blending=Zi,this.timer=new tM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Am!==void 0&&(a instanceof Am?n=!0:a instanceof lE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class uE extends Ua{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new it}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const hE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Da extends Ua{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new it(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,a,{type:Dn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new gn(s,a,{type:Dn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new gn(s,a,{type:Dn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=hE;this.highPassUniforms=Yo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yo.clone(uc.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,premultipliedAlpha:!0,blending:ds,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new it,this._oldClearAlpha=1,this._basic=new Ho,this._fsQuad=new gd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Da.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Da.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new Jt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Da.BlurDirectionX=new he(1,0);Da.BlurDirectionY=new he(0,1);const Xl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class fE extends Ua{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yo.clone(Xl.uniforms),this.material=new Ng({name:Xl.name,uniforms:this.uniforms,vertexShader:Xl.vertexShader,fragmentShader:Xl.fragmentShader}),this._fsQuad=new gd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$f?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const dE=`
varying vec3 vView;
void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vView = mv.xyz; gl_Position = projectionMatrix * mv; }
`,pE=`
uniform float uTime; uniform float uPow; uniform float uPulse;
varying vec3 vView;
vec3 ramp(float t) {
  vec3 c0 = vec3(0.10, 0.04, 0.42); vec3 c1 = vec3(0.70, 0.12, 0.42); vec3 c2 = vec3(1.00, 0.33, 0.17);
  vec3 c3 = vec3(1.00, 0.72, 0.38); vec3 c4 = vec3(1.00, 0.95, 0.88);
  if (t < 0.25) return mix(c0, c1, t / 0.25); if (t < 0.5) return mix(c1, c2, (t - 0.25) / 0.25);
  if (t < 0.78) return mix(c2, c3, (t - 0.5) / 0.28); return mix(c3, c4, (t - 0.78) / 0.22);
}
void main() {
  vec3 n = normalize(cross(dFdx(vView), dFdy(vView)));
  vec3 v = normalize(-vView);
  float fres = pow(1.0 - abs(dot(n, v)), 2.2);
  float k = 0.5 + 0.5 * sin(dot(n, vec3(0.35, 0.8, 0.45)) * 3.6 + uTime * 0.7);
  float lum = 0.30 + 0.42 * k + fres * 0.5;
  vec3 col = ramp(clamp(lum, 0.0, 1.0)) * (0.5 + uPow * 1.0 + uPulse * 1.5);
  col += vec3(1.0, 0.55, 0.30) * fres * (0.4 + uPow);
  gl_FragColor = vec4(col, 1.0);
}
`,mE=`
varying vec2 vUv; uniform float uI; uniform float uTime;
void main() {
  vec2 p = vUv - 0.5; float d = length(p);
  float g = exp(-d * d * 22.0);
  vec3 c = mix(vec3(0.30, 0.10, 0.95), vec3(1.0, 0.36, 0.16), smoothstep(0.35, 0.0, d));
  gl_FragColor = vec4(c * g * uI * (0.85 + 0.15 * sin(uTime * 0.5)), 1.0);
}
`,Wu=new F(0,0,1),Xu=new Et,ta=new F,na=new ji,ia=new F(1,1,1),ql=new F,Yl=new ji,mf=new mi;new it;function hc(r){const e=r()*2-1,t=r()*Math.PI*2,n=Math.sqrt(1-e*e);return new F(n*Math.cos(t),e,n*Math.sin(t))}function qu(r,e,t){const n=hc(r).multiplyScalar(e+r()*(t-e));return n.z*=.3,n}function Yu(r){return new ji().setFromEuler(mf.set(r()*6.28,r()*6.28,r()*6.28))}function gE(){const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,190,120,0.65)"),t.addColorStop(.5,"rgba(255,90,44,0.16)"),t.addColorStop(1,"rgba(255,90,44,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new oS(r);return n.colorSpace=si,n}function _E({section:r,canvas:e}){const t=r.querySelector(".engine-sticky"),n=[...r.querySelectorAll(".step")],i=[...r.querySelectorAll(".rail li")],s=r.querySelector(".rail"),a=r.querySelector("#hud-pct"),o=r.querySelector("#hud-parts"),l=r.querySelector("#hud-total"),c=r.querySelector("#hud-round"),u=new md({canvas:e,antialias:!1,powerPreference:"high-performance"}),d=Math.min(window.devicePixelRatio||1,1.5);u.setPixelRatio(d),u.setClearColor(460554,1),u.toneMapping=Vc,u.toneMappingExposure=1.08;const h=new Vo;h.fog=new ld(460554,.03);const f=new oi(32,1,.1,90),p=new ff(u);h.environment=p.fromScene(new iE,.04).texture,h.environmentIntensity=.6,h.add(new QS(1709616,.7));const _=new lo(16738874,70,30,2);_.position.set(5,3.5,6),h.add(_);const m=new lo(6966271,62,30,2);m.position.set(-6,-2.5,4),h.add(m);const g=new lo(16757852,46,30,2);g.position.set(1,3,-6),h.add(g);const M=new lo(16747082,0,14,2);h.add(M);const T=new Ur;h.add(T);const v=new Ur;T.add(v);const y=new Jt({uniforms:{uI:{value:0},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:mE,blending:ds,transparent:!0,depthWrite:!1}),w=new Ot(new Ia(30,30),y);w.position.set(0,0,-7),T.add(w);const E=Gf(20260930),x=new Jt({uniforms:{uTime:{value:0},uPow:{value:0},uPulse:{value:0}},vertexShader:dE,fragmentShader:pE}),b=new Ot(new Ic(.95,1),x);v.add(b);const C=new xg({color:16765616,transparent:!0,opacity:0,depthWrite:!1}),D=new aS(new cS(new Ic(1.3,1)),C);v.add(D);const L=new gg({map:gE(),color:16742970,blending:ds,transparent:!0,depthWrite:!1,opacity:0}),H=new tS(L);H.scale.setScalar(7),v.add(H);const N=new Cg;N.moveTo(0,-.1),N.bezierCurveTo(.55,-.5,1.55,-.58,2.15,-.06),N.bezierCurveTo(2.25,.02,2.22,.1,2.12,.14),N.bezierCurveTo(1.45,.52,.6,.46,0,.24),N.bezierCurveTo(-.1,.18,-.1,-.04,0,-.1);const z=new cf;z.absarc(.13,.07,.05,0,Math.PI*2,!0),N.holes.push(z);const X=new dd(N,{depth:.03,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2,curveSegments:24});X.translate(0,0,-.015);const B=new qS({color:1052694,metalness:.92,roughness:.3,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.5}),Q=12,W=1.62,R=[];for(let se=0;se<Q;se++){const ne=new Ot(X,B);v.add(ne),R.push({mesh:ne,a:se/Q*Math.PI*2,z:se*.024,sp:qu(E,5.5,11),sq:Yu(E),ph:E()*6.28,start:.2+se*.0095})}const Z=[{R:2.75,tube:.034,n:10,tilt:new mi(1.15,.2,0),spin:.16,flat:1,start:.47},{R:3.2,tube:.058,n:14,tilt:new mi(.3,1.05,.35),spin:-.11,flat:.45,start:.52},{R:3.68,tube:.03,n:18,tilt:new mi(-.55,-.3,.6),spin:.085,flat:1,start:.57}],Se=new ws(.014,.11,.014),Te=new Ho({color:16757370,transparent:!0,opacity:.9}),We=new $o({color:1513247,metalness:1,roughness:.26,envMapIntensity:1.6}),De=Z.map((se,ne)=>{const ie=new Ur;ie.rotation.copy(se.tilt),v.add(ie);const Le=new Ur;ie.add(Le);const ze=Math.PI*2/se.n*.86,O=new pd(se.R,se.tube,12,36,ze),xe=new ao(O,We,se.n);xe.frustumCulled=!1,Le.add(xe);const re=[];for(let le=0;le<se.n;le++)re.push({sp:qu(E,5,10),sq:Yu(E),hq:new ji().setFromAxisAngle(Wu,le/se.n*Math.PI*2),ph:E()*6.28,st:se.start+le/se.n*.1});const Me=72,be=new ao(Se,Te,Me);be.frustumCulled=!1;for(let le=0;le<Me;le++){const de=le/Me*Math.PI*2,ce=se.R+.13;ta.set(Math.cos(de)*ce,Math.sin(de)*ce,0),na.setFromAxisAngle(Wu,de-Math.PI/2),ia.set(1,le%6===0?1.9:1,1),be.setMatrixAt(le,Xu.compose(ta,na,ia))}return be.instanceMatrix.needsUpdate=!0,Le.add(be),{d:se,tilt:ie,spin:Le,mesh:xe,segs:re,ticks:be,ri:ne}}),Oe=64,q=14,ee=new $o({color:1776420,metalness:1,roughness:.22,envMapIntensity:1.7}),ve=new ao(new Nc(.12,0),ee,Oe);ve.frustumCulled=!1,v.add(ve);const He=new Ho({color:new it(1.9,.78,.36)}),me=new ao(new Nc(.085,0),He,q);me.frustumCulled=!1,v.add(me);function Re(se,ne){const ie=hc(E),Le=hc(E),ze=new F().crossVectors(ie,Le).normalize();return{u:ie,v:ze,r:4.5+E()*1.9,a0:E()*6.28,w:(.08+E()*.16)*(E()<.5?-1:1),sp:qu(E,7,15),sq:Yu(E),spin:new F(E()-.5,E()-.5,E()-.5).multiplyScalar(1.6),k:.6+E()*.9,st:.66+se/ne*.16}}const Ie=Array.from({length:Oe},(se,ne)=>Re(ne,Oe)),J=Array.from({length:q},(se,ne)=>Re(ne,q)),oe=1600,ue=new Float32Array(oe*3);for(let se=0;se<oe;se++){const ne=hc(E).multiplyScalar(4+Math.pow(E(),.6)*9);ue.set([ne.x,ne.y,ne.z],se*3)}const I=new un;I.setAttribute("position",new Pn(ue,3));const ge=new Mg(I,new Sg({color:16766909,size:.028,transparent:!0,opacity:.55,blending:ds,depthWrite:!1,sizeAttenuation:!0}));T.add(ge);const Ne=1+Q+De.reduce((se,ne)=>se+ne.d.n,0)+Oe+q;l.textContent=String(Ne).padStart(3,"0");const Ue=new he(1,1),Ae=new gn(2,2,{type:Dn,samples:4}),Xe=new cE(u,Ae);Xe.addPass(new uE(h,f));const U=new Da(new he(2,2),.5,.55,.2);Xe.addPass(U),Xe.addPass(new fE);let st=!1;function Ye(){const se=t.clientWidth,ne=t.clientHeight;Ue.set(se,ne),u.setSize(se,ne,!1),Xe.setPixelRatio(d),Xe.setSize(se,ne),f.aspect=se/ne,f.updateProjectionMatrix(),st=se/ne<.85,st?(T.position.set(0,1.45,0),v.scale.setScalar(Xn(.3+se/ne*.6,.5,.85))):(T.position.set(Xn((se/ne-1)*1.6,.4,2.6),0,0),v.scale.setScalar(1)),w.position.x=0}Ye(),addEventListener("resize",Ye);let P=0,S=0,V=!0,G=-1,j="";const _e=rt.create({id:"engine",trigger:r,start:"top top",end:"bottom bottom",onUpdate:se=>{P=se.progress}});P=_e.progress;const pe=kc(r,"80px"),te=[0,.26,.52,.76];function ae(se){n.forEach((ne,ie)=>{ne.classList.toggle("is-active",ie===se),ne.classList.toggle("is-past",ie<se)}),i.forEach((ne,ie)=>{ne.classList.toggle("is-active",ie===se),ne.classList.toggle("is-done",ie<se)}),c.textContent=String(se+1).padStart(2,"0")}const ye=new F;function Be(se,ne){if(!pe.visible)return;se=Xn(se,.001,.05),V&&(S=P,V=!1),S=Nv(S,P,5.5,se);const ie=Xn(S);let Le=0;const ze=lp(es(ie,0,.2));b.scale.setScalar(Math.max(1e-4,ze)),D.scale.setScalar(Math.max(1e-4,ze*(1+.02*Math.sin(ne*1.3)))),D.rotation.set(ne*.11,ne*.17,0),b.rotation.set(ne*.06,-ne*.09,0),C.opacity=ze*.5,ze>.995&&Le++;const O=op(es(ie,.8,.96)),xe=is(1.22,.24,O);R.forEach((we,wt)=>{const et=op(es(ie,we.start,we.start+.2));Yl.setFromAxisAngle(Wu,we.a+Math.PI/2+xe),ql.set(Math.cos(we.a)*W,Math.sin(we.a)*W,we.z),ye.set(Math.sin(ne*.5+we.ph),Math.cos(ne*.43+we.ph*1.3),Math.sin(ne*.37+we.ph*.7)).multiplyScalar(.45*(1-et)),we.mesh.position.lerpVectors(we.sp,ql,et).add(ye),we.mesh.quaternion.slerpQuaternions(we.sq,Yl,et),et>.995&&Le++}),De.forEach(we=>{we.spin.rotation.z=ne*we.d.spin+ie*2.4*Math.sign(we.d.spin);for(let et=0;et<we.segs.length;et++){const tt=we.segs[et],Ut=ap(es(ie,tt.st,tt.st+.15));ye.set(Math.sin(ne*.6+tt.ph),Math.cos(ne*.5+tt.ph*1.7),Math.sin(ne*.4+tt.ph*.6)).multiplyScalar(.55*(1-Ut)),ta.copy(tt.sp).multiplyScalar(1-Ut).add(ye),na.slerpQuaternions(tt.sq,tt.hq,Ut),ia.set(1,1,we.d.flat),we.mesh.setMatrixAt(et,Xu.compose(ta,na,ia)),Ut>.995&&Le++}we.mesh.instanceMatrix.needsUpdate=!0;const wt=lp(es(ie,we.d.start+.14,we.d.start+.3));we.ticks.scale.setScalar(Math.max(1e-4,wt)),we.ticks.visible=wt>.002});const re=(we,wt,et)=>{we.forEach((tt,Ut)=>{const St=ap(es(ie,tt.st,tt.st+.16)),Mt=tt.a0+ne*tt.w;ql.copy(tt.u).multiplyScalar(Math.cos(Mt)*tt.r).addScaledVector(tt.v,Math.sin(Mt)*tt.r),ta.copy(tt.sp).lerp(ql,St),mf.set(ne*tt.spin.x+tt.k,ne*tt.spin.y,ne*tt.spin.z),Yl.setFromEuler(mf),na.slerpQuaternions(tt.sq,Yl,St),ia.setScalar(is(.6,1,St)),wt.setMatrixAt(Ut,Xu.compose(ta,na,ia)),St>.995&&Le++}),wt.instanceMatrix.needsUpdate=!0};re(Ie,ve),re(J,me);const Me=Math.exp(-Math.max(0,ie-.5)*16)*(ie>.5?1:0),be=Math.exp(-Math.max(0,ie-.78)*16)*(ie>.78?1:0),le=Math.max(Me*.6,be*.5)+O*.5;x.uniforms.uTime.value=ne,x.uniforms.uPow.value=ze*(.35+.65*Us(.2,.5,ie)),x.uniforms.uPulse.value=le,L.opacity=ze*(.16+.3*Us(.45,.9,ie)+O*.22),H.scale.setScalar(3.4+O*2.2+le*.6),M.intensity=ze*(1.5+7*Us(.3,.85,ie)+8*O),U.strength=.4+le*.35+O*.15,y.uniforms.uI.value=.04+.15*Us(0,.9,ie)+O*.14,y.uniforms.uTime.value=ne,v.rotation.y=-.5+ie*1.5+Math.sin(ne*.17)*.06,v.rotation.x=-.12+Math.sin(ie*Math.PI)*.22,ge.rotation.y=ne*.012+ie*.6,ge.position.z=ie*1.5;const de=pt.sx/innerWidth-.5,ce=pt.sy/innerHeight-.5,Ke=st?17.4:13.6;f.position.set(de*.9,-ce*.6,Ke-1.6*Us(0,.6,ie)+1.4*Us(.82,1,ie)),f.lookAt(0,st?.4:0,0);const fe=te.reduce((we,wt,et)=>ie>=wt-1e-4?et:we,0);fe!==G&&(G=fe,ae(fe));const je=Math.round(ie*100),ke=je+"|"+Le;ke!==j&&(j=ke,a.textContent=String(je).padStart(3,"0"),o.textContent=String(Le).padStart(3,"0"),s.style.setProperty("--p",ie.toFixed(3)),r.classList.toggle("is-started",ie>.015)),Xe.render(se)}return{update:Be,getProgress:()=>S,scrollTrigger:_e}}const $u=[{name:"Paperwing",cls:"l-wide",svg:'<path d="M3 19 12 4l9 15-9-4.5z" fill="currentColor"/>'},{name:"Nightshift",cls:"l-tight",svg:'<path d="M16 3a9 9 0 1 0 5 15A8 8 0 0 1 16 3z" fill="currentColor"/>'},{name:"Oak & Ember",cls:"l-serif",svg:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>'},{name:"Coda Works",cls:"l-mono",svg:'<path d="M4 5h16v4H4zM4 11h10v4H4zM4 17h16v3H4z" fill="currentColor"/>'},{name:"Meridian Vale",cls:"l-serif",svg:'<path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"/>'},{name:"Hollow Pine",cls:"l-wide",svg:'<path d="M12 2 5 12h4l-4 7h14l-4-7h4z" fill="currentColor"/>'},{name:"Studio Tenfold",cls:"l-tight",svg:'<rect x="3" y="3" width="8" height="8" fill="currentColor"/><rect x="13" y="13" width="8" height="8" fill="currentColor"/><rect x="13" y="3" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2"/>'},{name:"Sundial",cls:"l-serif",svg:'<path d="M12 12 4 4M12 12V2M12 12l8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 20a9 9 0 0 1 18 0z" fill="currentColor"/>'},{name:"fieldnote",cls:"l-mono",svg:'<path d="M4 4h16v16H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" stroke-width="2"/>'},{name:"Brightwater",cls:"l-wide",svg:'<path d="M2 14c3-5 5-5 8 0s5 5 8 0 3-3 4-2v8H2z" fill="currentColor"/>'},{name:"Lantern & Co",cls:"l-serif",svg:'<path d="M9 3h6l2 4v10l-2 4H9l-2-4V7z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/>'},{name:"QUIETLOOP",cls:"l-mono",svg:'<path d="M12 3a9 9 0 1 0 9 9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="18" cy="6" r="2.6" fill="currentColor"/>'}];function vE(r){const e=[...r.querySelectorAll(".marquee-row")].map((s,a)=>{const o=s.querySelector(".marquee-track"),c=(a?[...$u.slice(5),...$u.slice(0,5)].reverse():$u).map(u=>`<span class="logo ${u.cls}"><svg viewBox="0 0 24 24" aria-hidden="true">${u.svg}</svg><span>${u.name}</span></span>`).join("");return o.innerHTML=c+c,o.setAttribute("aria-hidden","true"),{row:s,trackEl:o,dir:Number(s.dataset.dir)||-1,x:0,period:1,hover:!1}});e.forEach(s=>{s.row.addEventListener("pointerenter",()=>{s.hover=!0}),s.row.addEventListener("pointerleave",()=>{s.hover=!1})});const t=()=>e.forEach(s=>{const a=s.trackEl.children,o=a.length/2;s.period=a[o].offsetLeft-a[0].offsetLeft,s.dir>0&&s.x===0&&(s.x=-s.period/2)});t(),addEventListener("resize",t);const n=kc(r,"200px");let i=1;qe.ticker.add((s,a)=>{if(!n.visible||Ui)return;const o=Math.min(a,50)/1e3,l=1+Math.min(Math.abs(ua.v)/380,5),c=Xn(-ua.v*.006,-14,14);e.forEach(u=>{i+=((u.hover?.12:1)-i)*.02,u.x+=u.dir*58*l*i*o,u.dir<0&&u.x<=-u.period&&(u.x+=u.period),u.dir>0&&u.x>=0&&(u.x-=u.period),u.trackEl.style.transform=`translate3d(${u.x.toFixed(2)}px,0,0) skewX(${(c*u.dir*-1).toFixed(2)}deg)`})})}const xE=[["#ff5a2c","#ffb45c"],["#5a2bff","#ff3d6e"],["#8a6bff","#2b1a66"],["#ffb45c","#ff3d6e"],["#1d1330","#5a2bff"],["#ff3d6e","#5a2bff"],["#ece9e1","#8a6bff"],["#2a2a36","#ff5a2c"],["#ff8a4a","#7a1f5c"],["#12121a","#ff5a2c"]],Zu=["#ff5a2c","#ffb45c","#8a6bff","#ff3d6e","#ece9e1","#5a2bff"],wo=Gf(77),Di=r=>r[Math.floor(wo()*r.length)],gf=()=>{const[r,e]=Di(xE);return`--c1:${r};--c2:${e};--a:${Math.floor(wo()*360)}deg`};function _d(r,e,t=0,n=1.2){const i={v:t};qe.to(i,{v:e,duration:n,ease:"power3.out",onUpdate:()=>{r.textContent=Math.round(i.v)},onComplete:()=>{r.textContent=e}})}function SE(r){const e=[...r.querySelectorAll(".card")];Ui||(qe.set(e,{opacity:0,y:70,scale:.96}),rt.create({trigger:"#bento",start:"top 84%",once:!0,onEnter:()=>qe.to(e,{opacity:1,y:0,scale:1,duration:1.2,ease:"expo.out",stagger:.09})})),e.forEach(t=>{t.addEventListener("pointerenter",()=>t.classList.add("is-hover")),t.addEventListener("pointerleave",()=>t.classList.remove("is-hover"))}),ME(r.querySelector("#feature-brand")),yE(r.querySelector("#feature-variants")),bE(r.querySelector("#feature-review")),TE(r.querySelector("#feature-speed")),EE(r.querySelector("#feature-timeline"))}function ME(r){const e=r.querySelector(".tiles");e.innerHTML=Array.from({length:12},()=>`<i class="tile" style="${gf()}"></i>`).join("");const t=[...e.children],n=r.querySelector(".chip b");r.addEventListener("pointerenter",()=>{t.forEach(i=>i.setAttribute("style",gf())),qe.fromTo(t,{scale:.5,rotate:()=>qe.utils.random(-16,16),opacity:0},{scale:1,rotate:0,opacity:1,duration:1,ease:"back.out(2.2)",stagger:{each:.04,from:"random"},overwrite:!0}),_d(n,94,58,1.3)})}function yE(r){const e=r.querySelector(".shapes"),t=28;e.innerHTML=Array.from({length:t},()=>"<i></i>").join("");const n=[...e.children],i=["50%","0%","50% 0 50% 0","0 50% 0 50%","50% 50% 0 0","12%"],s=l=>qe.to(l,{borderRadius:Di(i),rotate:Di([0,45,90,135,180]),scale:.45+wo()*.6,backgroundColor:Di(Zu),duration:.9,ease:"expo.out",overwrite:!0});n.forEach(l=>qe.set(l,{borderRadius:Di(i),rotate:Di([0,45,90]),scale:.45+wo()*.55,backgroundColor:Di(Zu),opacity:.92}));const a=r.querySelector(".chip b");let o=null;r.addEventListener("pointerenter",()=>{qe.to(n,{borderRadius:()=>Di(i),rotate:()=>Di([0,45,90,135,180]),scale:()=>.45+wo()*.6,backgroundColor:()=>Di(Zu),duration:.9,ease:"expo.out",stagger:{each:.014,from:"center",grid:[14,2]},overwrite:!0}),_d(a,128,12,1.4),clearInterval(o),o=setInterval(()=>{for(let l=0;l<9;l++)s(Di(n))},700)}),r.addEventListener("pointerleave",()=>clearInterval(o))}function bE(r){const e=r.querySelector(".frame"),n=[...e.querySelectorAll(".rcursor")].map((i,s)=>{const a=()=>e.clientWidth,o=()=>e.clientHeight;qe.set(i,{x:a()*(.2+.25*s),y:o()*(.2+.2*s)});const l=qe.timeline({repeat:-1,defaults:{ease:"sine.inOut"}});for(let c=0;c<5;c++)l.to(i,{x:()=>qe.utils.random(a()*.08,a()*.78),y:()=>qe.utils.random(o()*.1,o()*.66),duration:qe.utils.random(1.3,2.4)});return l});r.addEventListener("pointerenter",()=>n.forEach(i=>qe.to(i,{timeScale:2.8,duration:.4}))),r.addEventListener("pointerleave",()=>n.forEach(i=>qe.to(i,{timeScale:1,duration:.6})))}function TE(r){const e=r.querySelector(".speed-num b"),t=r.querySelector(".spark path"),n=t.getTotalLength?t.getTotalLength():240;qe.set(t,{strokeDasharray:n,strokeDashoffset:0});const i=()=>{qe.fromTo(t,{strokeDashoffset:n},{strokeDashoffset:0,duration:1.4,ease:"power3.inOut",overwrite:!0}),_d(e,12,1,1.3)};r.addEventListener("pointerenter",i),rt.create({trigger:r,start:"top 80%",once:!0,onEnter:i})}function EE(r){const e=r.querySelector(".film"),t=r.querySelector(".frames"),n=r.querySelector(".playhead"),i=r.querySelector(".timecode"),s=18;t.innerHTML=Array.from({length:s},()=>`<i class="frame-cell" style="${gf()}"></i>`).join("");const a=[...t.children],o=a.map(p=>qe.quickSetter(p,"scaleY")),l=qe.quickTo(n,"x",{duration:.25,ease:"power3.out"}),c=48;let u=!1;const d={f:0},h=p=>{const _=e.clientWidth;l(Xn(p)*(_-2));const m=Xn(p)*c;i.textContent=`00:${String(Math.floor(m)).padStart(2,"0")}:${String(Math.floor(m%1*24)).padStart(2,"0")}`;const g=_/s;a.forEach((M,T)=>{const v=Math.abs((T+.5)*g-p*_);o[T](1+.55*Math.exp(-((v/(g*1.8))**2)))})},f=qe.to(d,{f:1,duration:7,ease:"none",repeat:-1,onUpdate:()=>{u||h(d.f)}});r.addEventListener("pointermove",p=>{const _=e.getBoundingClientRect();u=!0,f.pause(),d.f=Xn((p.clientX-_.left)/_.width),h(d.f)},{passive:!0}),r.addEventListener("pointerleave",()=>{u=!1,f.progress(d.f%1).play()}),h(0)}const qg=2,Yg=["","0","1","2","3","4","5","6","7","8","9"];function wE(r){r.innerHTML="";const e=[];for(let t=0;t<qg;t++){const n=document.createElement("span");n.className="odo-col";const i=document.createElement("span");i.className="odo-strip",i.innerHTML=Yg.map(s=>`<span class="odo-cell">${s||"&nbsp;"}</span>`).join(""),n.appendChild(i),r.appendChild(n),e.push({col:n,strip:i})}return e}function Cm(r,e,t){const n=String(e).padStart(qg," ");r.forEach((i,s)=>{const a=n[s],o=a===" ",l=o?0:Number(a)+1,c=t?1.15:0;qe.to(i.strip,{yPercent:-l*(100/Yg.length),duration:c,ease:"expo.out",delay:t?s*.08:0,overwrite:!0}),qe.to(i.col,{width:o?"0em":"0.6em",duration:t?.7:0,ease:"expo.out",overwrite:"auto"})})}function AE(r){const e=r.querySelector("#billing-toggle"),t=r.querySelector(".switch-thumb"),n=[...r.querySelectorAll(".billing-label")],i=[...r.querySelectorAll(".plan")],s=i.map(l=>{const c=l.querySelector("[data-odo]"),u=wE(c),d=Number(l.dataset.monthly),h=Number(l.dataset.yearly);return Cm(u,d,!1),{plan:l,odo:c,cols:u,m:d,y:h,price:l.querySelector(".price")}});let a=!1;const o=(l=!0)=>{e.setAttribute("aria-checked",String(a)),r.classList.toggle("is-yearly",a),n.forEach(c=>c.classList.toggle("is-on",c.dataset.for==="yearly"===a)),qe.to(t,{x:a?30:0,duration:l?.7:0,ease:"expo.out"}),s.forEach((c,u)=>{const d=a?c.y:c.m;Cm(c.cols,d,l),c.price.setAttribute("aria-label",`$${d} per seat per month`),l&&d>0&&(qe.fromTo(c.price,{scale:.95},{scale:1,duration:1.1,ease:"elastic.out(1, 0.45)",delay:u*.05}),qe.fromTo(c.odo,{color:"#ff5a2c"},{color:"#ece9e1",duration:1.4,ease:"power2.out",clearProps:"color",delay:u*.05}))})};e.addEventListener("click",()=>{a=!a,o(!0)}),o(!1),!ys&&!Ui&&s.forEach(({plan:l})=>{const c=qe.quickTo(l,"rotationX",{duration:.7,ease:"power3.out"}),u=qe.quickTo(l,"rotationY",{duration:.7,ease:"power3.out"});l.addEventListener("pointermove",d=>{const h=l.getBoundingClientRect(),f=(d.clientX-h.left)/h.width-.5,p=(d.clientY-h.top)/h.height-.5;u(f*9),c(-p*7)},{passive:!0}),l.addEventListener("pointerleave",()=>{c(0),u(0)})}),Ui||(qe.set(i,{opacity:0,y:90}),rt.create({trigger:".plans",start:"top 86%",once:!0,onEnter:()=>qe.to(i,{opacity:1,y:0,duration:1.3,ease:"expo.out",stagger:.12})}))}const CE=`
attribute float aSeed; attribute float aHeat; attribute vec3 aColor;
varying vec3 vColor; varying float vHeat;
uniform float uSize;
void main() {
  vColor = aColor; vHeat = aHeat;
  gl_PointSize = uSize * (0.7 + aSeed * 0.9 + aHeat * 1.8);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,RE=`
varying vec3 vColor; varying float vHeat;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d); a *= a;
  vec3 col = mix(vColor, vec3(1.0, 0.78, 0.5), vHeat);
  gl_FragColor = vec4(col * (1.0 + vHeat * 1.1), a * (0.9 + vHeat * 0.1));
}
`,Ja=[[.35,.18,1],[1,.24,.43],[1,.45,.17],[1,.71,.36]];function PE(r,e){const t=Xn(r)*(Ja.length-1),n=Math.min(Ja.length-2,Math.floor(t)),i=t-n;for(let s=0;s<3;s++)e[s]=Ja[n][s]+(Ja[n+1][s]-Ja[n][s])*i}function LE({section:r,canvas:e,form:t,input:n,button:i,status:s,flash:a}){const o=new md({canvas:e,antialias:!1,alpha:!0,powerPreference:"high-performance"}),l=Math.min(window.devicePixelRatio||1,1.5);o.setPixelRatio(l),o.setClearColor(0,0);const c=new Vo,u=new Ko(-1,1,1,-1,-10,10),d=new Jt({vertexShader:CE,fragmentShader:RE,transparent:!0,depthWrite:!1,blending:ds,uniforms:{uSize:{value:3.3*l}}});let h=1,f=1,p=0,_,m,g,M,T,v,y,w,E;const x=Gf(4242),b={k:10,awake:!1},C=kc(r,"0px"),D=[0,0,0];function L(){h=r.clientWidth,f=r.clientHeight,o.setSize(h,f,!1),u.left=-h/2,u.right=h/2,u.top=f/2,u.bottom=-f/2,u.updateProjectionMatrix();const R=document.createElement("canvas");R.width=h,R.height=f;const Z=R.getContext("2d",{willReadFrequently:!0}),Se=h<700,Te=Se?h*.4:Math.min(h*.27,f*.4);"fontStretch"in Z&&(Z.fontStretch=Se?"condensed":"normal"),Z.font=`800 ${Te}px "Bricolage Grotesque Variable", "Helvetica Neue", Arial, sans-serif`,Z.textAlign="center",Z.textBaseline="middle",Z.fillStyle="#fff",Z.fillText("BEGIN",h/2,f*.505);const We=Z.getImageData(0,0,h,f).data,De=4,Oe=[];for(let me=0;me<f;me+=De)for(let Re=0;Re<h;Re+=De)We[(me*h+Re)*4+3]>140&&Oe.push(Re+(x()-.5)*De*.7,me+(x()-.5)*De*.7);const q=Oe.length/2,ee=y;p=q,m=new Float32Array(Oe),_=new Float32Array(q*2),g=new Float32Array(q*2),M=new Float32Array(q),T=new Float32Array(q);const ve=new Float32Array(q*3),He=new Float32Array(q*3);for(let me=0;me<q;me++)_[me*2]=h/2+(x()-.5)*h*1.7,_[me*2+1]=f*.5+(x()-.5)*f*1.3,M[me]=x(),PE((m[me*2]-h*.12)/(h*.76)+(x()-.5)*.12,D),He.set(D,me*3);v=new un,w=new Pn(ve,3),w.setUsage(vp),E=new Pn(T,1),E.setUsage(vp),v.setAttribute("position",w),v.setAttribute("aColor",new Pn(He,3)),v.setAttribute("aSeed",new Pn(M,1)),v.setAttribute("aHeat",E),y=new Mg(v,d),y.frustumCulled=!1,ee&&(c.remove(ee),ee.geometry.dispose()),c.add(y)}(document.fonts&&document.fonts.load?document.fonts.load('800 200px "Bricolage Grotesque Variable"'):Promise.resolve()).catch(()=>{}).then(()=>{L()});let N;addEventListener("resize",()=>{clearTimeout(N),N=setTimeout(L,250)}),new IntersectionObserver(R=>{R[0].isIntersecting&&!b.awake&&(b.awake=!0,b.k=2.2,qe.to(b,{k:10,duration:2.2,ease:"power2.in"}))},{threshold:.12}).observe(r);function z(){if(!p)return;const R=h/2,Z=f*.505;for(let Se=0;Se<p;Se++){const Te=_[Se*2]-R,We=_[Se*2+1]-Z,De=Math.hypot(Te,We)+.01,Oe=500+x()*1500;g[Se*2]+=Te/De*Oe+(x()-.5)*500-We/De*260,g[Se*2+1]+=We/De*Oe+(x()-.5)*500+Te/De*260,T[Se]=1}b.k=.9,qe.to(b,{k:10,duration:2.4,ease:"power3.in",delay:.25}),qe.fromTo(a,{opacity:0},{opacity:.85,duration:.14,ease:"power2.out",yoyo:!0,repeat:1})}let X=0;function B(R){if(!C.visible||!p)return;R=Xn(R,.001,.035),X+=R;const Z=r.getBoundingClientRect(),Se=pt.sx-Z.left,Te=pt.sy-Z.top,We=!ys&&pt.moved&&Se>-200&&Se<h+200&&Te>-200&&Te<f+200,De=Math.hypot(pt.vx,pt.vy),Oe=120+Math.min(110,De*.05),q=Oe*Oe,ee=b.k,ve=2*Math.sqrt(ee)*.82,He=17e3,me=h/2,Re=f/2,Ie=w.array;for(let J=0;J<p;J++){const oe=J*2;let ue=_[oe],I=_[oe+1],ge=g[oe],Ne=g[oe+1];const Ue=M[J]*12,Ae=m[oe]+Math.sin(X*.8+Ue)*1.6,Xe=m[oe+1]+Math.cos(X*.7+Ue)*1.6;let U=(Ae-ue)*ee-ge*ve,st=(Xe-I)*ee-Ne*ve;if(We){const P=ue-Se,S=I-Te,V=P*P+S*S;if(V<q){const G=Math.sqrt(V)+.001,j=1-G/Oe,_e=j*j*He;U+=P/G*_e-S/G*_e*.35,st+=S/G*_e+P/G*_e*.35,T[J]=Math.min(.85,T[J]+j*.22)}}ge+=U*R,Ne+=st*R,ue+=ge*R,I+=Ne*R,_[oe]=ue,_[oe+1]=I,g[oe]=ge,g[oe+1]=Ne;const Ye=T[J]*(1-2.4*R);T[J]=Ye>.002?Ye:0,Ie[J*3]=ue-me,Ie[J*3+1]=Re-I,Ie[J*3+2]=0}w.needsUpdate=!0,E.needsUpdate=!0,o.render(c,u)}const Q=(R,Z)=>{s.textContent=R,s.classList.remove("is-error","is-ok"),Z&&s.classList.add(Z)};let W=!1;return t.addEventListener("submit",R=>{if(R.preventDefault(),W)return;const Z=n.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(Z)){Q("That email looks off. Try name@studio.com","is-error"),t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake"),n.focus();return}W=!0,z(),t.classList.add("is-done"),n.disabled=!0,i.disabled=!0,i.querySelector(".btn-label").textContent="You're on the list",Q("Welcome in. (Concept project: nothing was sent.)","is-ok")}),n.addEventListener("input",()=>{s.classList.contains("is-error")&&Q("Free for 14 days. No card needed.")}),{update:B,burst:z,count:()=>p}}function DE(){if(ys)return;const r=document.getElementById("cursor-ring"),e=r.querySelector(".cursor-label"),t=qe.quickTo(r,"x",{duration:.5,ease:"power3.out"}),n=qe.quickTo(r,"y",{duration:.5,ease:"power3.out"});addEventListener("pointermove",i=>{r.classList.add("is-visible"),t(i.clientX),n(i.clientY)},{passive:!0}),document.addEventListener("pointerover",i=>{const s=i.target.closest&&i.target.closest("a, button, input, [data-cursor]"),a=!!s&&s.matches("a, button, [data-cursor]"),o=s&&s.dataset?s.dataset.cursor:"";r.classList.toggle("is-link",a),r.classList.toggle("has-label",!!o),e.textContent=o||""},{passive:!0}),addEventListener("pointerdown",()=>r.classList.add("is-down"),{passive:!0}),addEventListener("pointerup",()=>r.classList.remove("is-down"),{passive:!0}),document.addEventListener("pointerleave",()=>r.classList.remove("is-visible"))}function IE(){const r=[...document.querySelectorAll(".magnetic")],e=(n,i)=>{const s=n.getBoundingClientRect();n.style.setProperty("--fx",((i.clientX-s.left)/s.width*100).toFixed(1)+"%"),n.style.setProperty("--fy",((i.clientY-s.top)/s.height*100).toFixed(1)+"%")};if(r.forEach(n=>{n.addEventListener("pointerenter",i=>e(n,i)),n.addEventListener("pointerleave",i=>e(n,i))}),ys)return;const t=r.map(n=>{const i=n.querySelector(".btn-label");return{el:n,inside:!1,x:qe.quickTo(n,"x",{duration:.6,ease:"power3.out"}),y:qe.quickTo(n,"y",{duration:.6,ease:"power3.out"}),lx:qe.quickTo(i,"x",{duration:.6,ease:"power3.out"}),ly:qe.quickTo(i,"y",{duration:.6,ease:"power3.out"})}});addEventListener("pointermove",n=>{t.forEach(i=>{const s=i.el.getBoundingClientRect();if(s.bottom<-100||s.top>innerHeight+100)return;const a=s.left+s.width/2,o=s.top+s.height/2,l=n.clientX-a,c=n.clientY-o,u=Math.max(s.width,s.height)*.75+34;Math.hypot(l,c)<u?(i.inside=!0,i.x(l*.3),i.y(c*.38),i.lx(l*.14),i.ly(c*.2)):i.inside&&(i.inside=!1,i.x(0),i.y(0),i.lx(0),i.ly(0))})},{passive:!0})}function NE(){document.querySelectorAll("[data-card], .plan").forEach(r=>{r.addEventListener("pointermove",e=>{const t=r.getBoundingClientRect();r.style.setProperty("--mx",(e.clientX-t.left).toFixed(0)+"px"),r.style.setProperty("--my",(e.clientY-t.top).toFixed(0)+"px")},{passive:!0})})}function UE(){const r=document.getElementById("nav");let e=window.scrollY;addEventListener("scroll",()=>{const t=window.scrollY;r.classList.toggle("is-solid",t>40),t>240&&t>e+4?r.classList.add("is-hidden"):(t<e-4||t<240)&&r.classList.remove("is-hidden"),e=t},{passive:!0})}function FE(){document.addEventListener("click",r=>{const e=r.target.closest("[data-scroll]");if(e){r.preventDefault(),Yv(e.dataset.scroll);return}r.target.closest("[data-noop]")&&r.preventDefault()})}qe.registerPlugin(rt);"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);const tn=(r,e=document)=>e.querySelector(r);function OE(){const e=document.createElement("canvas");e.width=e.height=220;const t=e.getContext("2d"),n=t.createImageData(220,220);for(let i=0;i<n.data.length;i+=4){const s=Math.random();n.data[i]=n.data[i+1]=n.data[i+2]=255,n.data[i+3]=s<.5?0:Math.floor(s*150)}t.putImageData(n,0,0),tn(".grain").style.backgroundImage=`url(${e.toDataURL("image/png")})`}function BE(){const r=tn("#statement-text"),e=$v(r);Ui?qe.set(e,{opacity:1}):qe.fromTo(e,{opacity:.14},{opacity:1,ease:"none",stagger:{each:.12},scrollTrigger:{trigger:r,start:"top 80%",end:"bottom 48%",scrub:.6}}),document.querySelectorAll(".stat-num").forEach(t=>{const n=Number(t.dataset.count),i=Number(t.dataset.dec||0),s={v:0};rt.create({trigger:t,start:"top 90%",once:!0,onEnter:()=>qe.to(s,{v:n,duration:1.8,ease:"power3.out",onUpdate:()=>{t.textContent=s.v.toFixed(i)}})})}),qe.from(".stat",{opacity:0,y:40,duration:1,ease:"expo.out",stagger:.12,scrollTrigger:{trigger:".stats",start:"top 88%",once:!0}})}async function zE(){document.body.classList.add("is-loading"),OE();const r=['600 1em "Bricolage Grotesque Variable"','800 1em "Bricolage Grotesque Variable"','italic 400 1em "Fraunces Variable"','400 1em "JetBrains Mono Variable"'].map(u=>(document.fonts&&document.fonts.load?document.fonts.load(u):Promise.resolve()).catch(()=>{}));await Promise.race([Promise.all(r),cp(2500)]),document.fonts&&document.fonts.ready&&await Promise.race([document.fonts.ready,cp(800)]),qv(),FE(),UE(),DE(),IE(),NE();const e=nE({canvas:tn("#hero-canvas"),section:tn("#hero")}),t=Kv(tn("#hero-title"));vE(tn("#marquee")),BE();const n=_E({section:tn("#engine"),canvas:tn("#engine-canvas")});SE(tn("#features")),AE(tn("#pricing"));const i=LE({section:tn("#final-cta"),canvas:tn("#cta-canvas"),form:tn("#cta-form"),input:tn("#email"),button:tn("#cta-button"),status:tn("#cta-status"),flash:tn(".final-flash")});["#engine-title","#features-title","#pricing-title","#final-title"].forEach(u=>Zv(tn(u))),qe.ticker.add((u,d)=>{const h=Math.min(d,50)/1e3;Fv(h),e.update(h,u),t.update(u),n.update(h,u),i.update(h)}),rt.refresh(),addEventListener("load",()=>rt.refresh()),window.__kaelune={ScrollTrigger:rt,engine:n,hero:e,cta:i,version:"1.0.0"};const s=tn("#loader"),a=()=>{if(document.body.classList.remove("is-loading"),t.intro(.1),Ui){e.setIntro(1),qe.set([".eyebrow",".hero-sub",".hero-actions",".hero-badge",".hero-scroll"],{opacity:1});return}const u={v:0};qe.to(u,{v:1,duration:2.6,ease:"power2.out",onUpdate:()=>e.setIntro(u.v)}),qe.fromTo(".eyebrow",{opacity:0,y:20},{opacity:1,y:0,duration:1.2,ease:"expo.out",delay:.05}),qe.fromTo(".hero-sub",{opacity:0,y:26},{opacity:1,y:0,duration:1.3,ease:"expo.out",delay:.75}),qe.fromTo(".hero-actions .btn",{opacity:0,y:30},{opacity:1,y:0,duration:1.3,ease:"expo.out",delay:.9,stagger:.1}),qe.fromTo(".hero-badge",{opacity:0,scale:.7,rotate:-40},{opacity:1,scale:1,rotate:0,duration:1.6,ease:"expo.out",delay:1.1}),qe.fromTo(".nav",{opacity:0},{opacity:1,duration:1.2,ease:"power2.out",delay:1})};if(Ui){s.remove(),a();return}qe.set([".eyebrow",".hero-sub",".hero-actions .btn",".hero-badge",".nav"],{opacity:0});const o={v:0},l=tn("#loader-num");qe.timeline().to(o,{v:100,duration:1,ease:"power2.inOut",onUpdate:()=>{l.textContent=String(Math.round(o.v)).padStart(3,"0")}}).to(".loader-bar i",{scaleX:1,duration:1,ease:"power2.inOut"},0).to(".loader-inner",{y:-24,opacity:0,duration:.45,ease:"power2.in"},">+0.05").to(s,{yPercent:-100,duration:.95,ease:"expo.inOut"},"<0.1").add(a,"<0.3").add(()=>s.remove())}zE();
