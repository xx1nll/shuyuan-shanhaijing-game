var np=Object.defineProperty;var ip=(i,t,e)=>t in i?np(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ge=(i,t,e)=>ip(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="170",sp=0,yu=1,rp=2,Ld=1,op=2,Qn=3,Hn=0,Je=1,fn=2,Ri=0,Gs=1,Mu=2,Su=3,bu=4,ap=5,Qi=100,cp=101,lp=102,up=103,hp=104,dp=200,fp=201,pp=202,mp=203,Pc=204,Lc=205,gp=206,_p=207,xp=208,vp=209,yp=210,Mp=211,Sp=212,bp=213,wp=214,Ic=0,Dc=1,Uc=2,Ys=3,Nc=4,Fc=5,Bc=6,zc=7,Ul=0,Ep=1,Tp=2,Pi=0,Ap=1,Cp=2,Rp=3,Nl=4,Pp=5,Lp=6,Ip=7,Id=300,Zs=301,$s=302,Oc=303,kc=304,Sa=306,Hc=1e3,Ai=1001,Vc=1002,pn=1003,Dp=1004,Qr=1005,yn=1006,Na=1007,es=1008,Ln=1009,Dd=1010,Ud=1011,Vr=1012,Fl=1013,Ii=1014,Mn=1015,jr=1016,Bl=1017,zl=1018,Ks=1020,Nd=35902,Fd=1021,Bd=1022,Ke=1023,zd=1024,Od=1025,Ws=1026,Js=1027,Ol=1028,ba=1029,kd=1030,kl=1031,Hl=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,Gc=35840,Wc=35841,Xc=35842,qc=35843,jc=36196,Yc=37492,Zc=37496,$c=37808,Kc=37809,Jc=37810,Qc=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,cl=37820,ll=37821,na=36492,ul=36494,hl=36495,Hd=36283,dl=36284,fl=36285,pl=36286,Up=3200,Np=3201,Vl=0,Fp=1,Ei="",an="srgb",sr="srgb-linear",wa="linear",ae="srgb",as=7680,wu=519,Bp=512,zp=513,Op=514,Vd=515,kp=516,Hp=517,Vp=518,Gp=519,Eu=35044,Tu="300 es",oi=2e3,ua=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Au=1234567;const Nr=Math.PI/180,Gr=180/Math.PI;function or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function Gl(i,t){return(i%t+t)%t}function Wp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xp(i,t,e){return i!==t?(e-i)/(t-i):0}function Fr(i,t,e){return(1-e)*i+e*t}function qp(i,t,e,n){return Fr(i,t,1-Math.exp(-e*n))}function jp(i,t=1){return t-Math.abs(Gl(i,t*2)-t)}function Yp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $p(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kp(i,t){return i+Math.random()*(t-i)}function Jp(i){return i*(.5-Math.random())}function Qp(i){i!==void 0&&(Au=i);let t=Au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(i){return i*Nr}function em(i){return i*Gr}function nm(i){return(i&i-1)===0&&i!==0}function im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),l=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*l,c*h,c*d,a*u);break;case"YZY":i.set(c*d,a*l,c*h,a*u);break;case"ZXZ":i.set(c*h,c*d,a*l,a*u);break;case"XZX":i.set(a*l,c*g,c*f,a*u);break;case"YXY":i.set(c*f,a*l,c*g,a*u);break;case"ZYZ":i.set(c*g,c*f,a*l,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cu={DEG2RAD:Nr,RAD2DEG:Gr,generateUUID:or,clamp:qe,euclideanModulo:Gl,mapLinear:Wp,inverseLerp:Xp,lerp:Fr,damp:qp,pingpong:jp,smoothstep:Yp,smootherstep:Zp,randInt:$p,randFloat:Kp,randFloatSpread:Jp,seededRandom:Qp,degToRad:tm,radToDeg:em,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:sm,setQuaternionFromProperEuler:rm,normalize:Ze,denormalize:Us};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,c,u){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],l=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],b=s[2],E=s[5],w=s[8];return r[0]=o*_+a*v+c*b,r[3]=o*m+a*y+c*E,r[6]=o*p+a*x+c*w,r[1]=u*_+l*v+h*b,r[4]=u*m+l*y+h*E,r[7]=u*p+l*x+h*w,r[2]=d*_+f*v+g*b,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8];return e*o*l-e*a*u-n*r*l+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],h=l*o-a*u,d=a*c-l*r,f=u*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*u-l*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(l*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-u*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Wt;function Gd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function om(){const i=ha("canvas");return i.style.display="block",i}const Ru={};function Ir(i){i in Ru||(Ru[i]=!0,console.warn(i))}function am(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Pu=[.64,.33,.3,.6,.15,.06],Lu=[.2126,.7152,.0722],Iu=[.3127,.329],Du=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[sr]:{primaries:Pu,whitePoint:Iu,transfer:wa,toXYZ:Du,fromXYZ:Uu,luminanceCoefficients:Lu,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:Pu,whitePoint:Iu,transfer:ae,toXYZ:Du,fromXYZ:Uu,luminanceCoefficients:Lu,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});let cs;class um{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=ha("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hm=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?um.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;class Qe extends rr{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Ai,s=Ai,r=yn,o=es,a=Ke,c=Ln,u=Qe.DEFAULT_ANISOTROPY,l=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=or(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hc:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hc:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Id;Qe.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],l=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,x=(f+1)/2,b=(p+1)/2,E=(l+d)/4,w=(h+_)/4,A=(g+m)/4;return y>x&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=w/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=A/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=A/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-l)*(d-l));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-l)/v,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fm extends rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends fm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xd extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pm extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],l=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||u!==f||l!==g){let m=1-a;const p=c*d+u*f+l*g+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),E=Math.atan2(b,p*v);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const x=a*v;if(c=c*m+d*x,u=u*m+f*x,l=l*m+g*x,h=h*m+_*x,m===1-a){const b=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=b,u*=b,l*=b,h*=b}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],l=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+l*h+c*f-u*d,t[e+1]=c*g+l*d+u*h-a*f,t[e+2]=u*g+l*f+a*d-c*h,t[e+3]=l*g-a*h-c*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),l=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*h+u*f*g,this._y=u*f*h-d*l*g,this._z=u*l*g+d*f*h,this._w=u*l*h-d*f*g;break;case"YXZ":this._x=d*l*h+u*f*g,this._y=u*f*h-d*l*g,this._z=u*l*g-d*f*h,this._w=u*l*h+d*f*g;break;case"ZXY":this._x=d*l*h-u*f*g,this._y=u*f*h+d*l*g,this._z=u*l*g+d*f*h,this._w=u*l*h-d*f*g;break;case"ZYX":this._x=d*l*h-u*f*g,this._y=u*f*h+d*l*g,this._z=u*l*g-d*f*h,this._w=u*l*h+d*f*g;break;case"YZX":this._x=d*l*h+u*f*g,this._y=u*f*h+d*l*g,this._z=u*l*g-d*f*h,this._w=u*l*h-d*f*g;break;case"XZY":this._x=d*l*h-u*f*g,this._y=u*f*h-d*l*g,this._z=u*l*g+d*f*h,this._w=u*l*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],l=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(l-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+o*a+s*u-r*c,this._y=s*l+o*c+r*a-n*u,this._z=r*l+o*u+n*c-s*a,this._w=o*l-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,a),h=Math.sin((1-e)*l)/u,d=Math.sin(e*l)/u;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),l=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*u+o*h-a*l,this.y=n+c*l+a*u-r*h,this.z=s+c*h+r*l-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new I,Nu=new ar;class we{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),eo.subVectors(this.max,fr),ls.subVectors(t.a,fr),us.subVectors(t.b,fr),hs.subVectors(t.c,fr),mi.subVectors(us,ls),gi.subVectors(hs,us),zi.subVectors(ls,hs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-zi.z,zi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,zi.z,0,-zi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-zi.y,zi.x,0];return!Oa(e,ls,us,hs,eo)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,ls,us,hs,eo))?!1:(no.crossVectors(mi,gi),e=[no.x,no.y,no.z],Oa(e,ls,us,hs,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,to=new we,ls=new I,us=new I,hs=new I,mi=new I,gi=new I,zi=new I,fr=new I,eo=new I,no=new I,Oi=new I;function Oa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),u=e.dot(Oi),l=n.dot(Oi);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>a)return!1}return!0}const mm=new we,pr=new I,ka=new I;class bn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(ka)),this.expandByPoint(pr.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new I,Ha=new I,io=new I,_i=new I,Va=new I,so=new I,Ga=new I;class Yr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ha.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Ha);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=_i.dot(this.direction),c=-_i.dot(io),u=_i.lengthSq(),l=Math.abs(1-o*o);let h,d,f,g;if(l>0)if(h=o*c-a,d=o*a-c,g=r*l,h>=0)if(d>=-g)if(d<=g){const _=1/l;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+u}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+u;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+u;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+u):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ha).addScaledVector(io,d),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){Va.subVectors(e,t),so.subVectors(n,t),Ga.crossVectors(Va,so);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);const c=a*this.direction.dot(so.crossVectors(_i,so));if(c<0)return null;const u=a*this.direction.dot(Va.cross(_i));if(u<0||c+u>o)return null;const l=-a*_i.dot(Ga);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(t,e,n,s,r,o,a,c,u,l,h,d,f,g,_,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,l,h,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,u,l,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=u,p[6]=l,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),l=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=c*l,e[4]=-c*h,e[8]=u,e[1]=f+g*u,e[5]=d-_*u,e[9]=-a*c,e[2]=_-d*u,e[6]=g+f*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*l,f=c*h,g=u*l,_=u*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*u,e[1]=o*h,e[5]=o*l,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*l,f=c*h,g=u*l,_=u*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*l,e[9]=_-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=c*l,e[4]=g*u-f,e[8]=d*u+_,e[1]=c*h,e[5]=_*u+d,e[9]=f*u-g,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=c*l,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*l,e[9]=-a*l,e[2]=-u*l,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=c*l,e[4]=-h,e[8]=u*l,e[1]=d*h+_,e[5]=o*l,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*l,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gm,t,_m)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),xi.crossVectors(n,un),xi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),xi.crossVectors(n,un)),xi.normalize(),ro.crossVectors(un,xi),s[0]=xi.x,s[4]=ro.x,s[8]=un.x,s[1]=xi.y,s[5]=ro.y,s[9]=un.y,s[2]=xi.z,s[6]=ro.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],l=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],b=n[15],E=s[0],w=s[4],A=s[8],S=s[12],M=s[1],R=s[5],L=s[9],U=s[13],D=s[2],N=s[6],B=s[10],G=s[14],V=s[3],it=s[7],at=s[11],lt=s[15];return r[0]=o*E+a*M+c*D+u*V,r[4]=o*w+a*R+c*N+u*it,r[8]=o*A+a*L+c*B+u*at,r[12]=o*S+a*U+c*G+u*lt,r[1]=l*E+h*M+d*D+f*V,r[5]=l*w+h*R+d*N+f*it,r[9]=l*A+h*L+d*B+f*at,r[13]=l*S+h*U+d*G+f*lt,r[2]=g*E+_*M+m*D+p*V,r[6]=g*w+_*R+m*N+p*it,r[10]=g*A+_*L+m*B+p*at,r[14]=g*S+_*U+m*G+p*lt,r[3]=v*E+y*M+x*D+b*V,r[7]=v*w+y*R+x*N+b*it,r[11]=v*A+y*L+x*B+b*at,r[15]=v*S+y*U+x*G+b*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],l=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*u*h-r*a*d+n*u*d+s*a*f-n*c*f)+_*(+e*c*f-e*u*d+r*o*d-s*o*f+s*u*l-r*c*l)+m*(+e*u*h-e*a*f-r*o*h+n*o*f+r*a*l-n*u*l)+p*(-s*a*l-e*c*h+e*a*d+s*o*h-n*o*d+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=h*m*u-_*d*u+_*c*f-a*m*f-h*c*p+a*d*p,y=g*d*u-l*m*u-g*c*f+o*m*f+l*c*p-o*d*p,x=l*_*u-g*h*u+g*a*f-o*_*f-l*a*p+o*h*p,b=g*h*c-l*_*c-g*a*d+o*_*d+l*a*m-o*h*m,E=e*v+n*y+s*x+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*w,t[2]=(a*m*r-_*c*r+_*s*u-n*m*u-a*s*p+n*c*p)*w,t[3]=(h*c*r-a*d*r-h*s*u+n*d*u+a*s*f-n*c*f)*w,t[4]=y*w,t[5]=(l*m*r-g*d*r+g*s*f-e*m*f-l*s*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*s*u+e*m*u+o*s*p-e*c*p)*w,t[7]=(o*d*r-l*c*r+l*s*u-e*d*u-o*s*f+e*c*f)*w,t[8]=x*w,t[9]=(g*h*r-l*_*r-g*n*f+e*_*f+l*n*p-e*h*p)*w,t[10]=(o*_*r-g*a*r+g*n*u-e*_*u-o*n*p+e*a*p)*w,t[11]=(l*a*r-o*h*r-l*n*u+e*h*u+o*n*f-e*a*f)*w,t[12]=b*w,t[13]=(l*_*s-g*h*s+g*n*d-e*_*d-l*n*m+e*h*m)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*h*s-l*a*s+l*n*c-e*h*c-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,l=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,l*a+n,l*c-s*o,0,u*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,l=o+o,h=a+a,d=r*u,f=r*l,g=r*h,_=o*l,m=o*h,p=a*h,v=c*u,y=c*l,x=c*h,b=n.x,E=n.y,w=n.z;return s[0]=(1-(_+p))*b,s[1]=(f+x)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+y)*w,s[9]=(m-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const u=1/r,l=1/o,h=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=l,An.elements[5]*=l,An.elements[6]*=l,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){const c=this.elements,u=2*r/(e-t),l=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===oi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ua)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){const c=this.elements,u=1/(e-t),l=1/(n-s),h=1/(o-r),d=(e+t)*u,f=(n+s)*l;let g,_;if(a===oi)g=(o+r)*h,_=-2*h;else if(a===ua)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new I,An=new Yt,gm=new I(0,0,0),_m=new I(1,1,1),xi=new I,ro=new I,un=new I,Fu=new Yt,Bu=new ar;class In{constructor(t=0,e=0,n=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],l=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xm=0;const zu=new I,fs=new ar,Yn=new Yt,oo=new I,mr=new I,vm=new I,ym=new ar,Ou=new I(1,0,0),ku=new I(0,1,0),Hu=new I(0,0,1),Vu={type:"added"},Mm={type:"removed"},ps={type:"childadded",child:null},Wa={type:"childremoved",child:null};class ve extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new I,e=new In,n=new ar,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Wt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Ou,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ou,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(mr,oo,this.up):Yn.lookAt(oo,mr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Yn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mm),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,vm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,ym,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const h=c[u];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),l=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const u in a){const l=a[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new I(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new I,Zn=new I,Xa=new I,$n=new I,ms=new I,gs=new I,Gu=new I,qa=new I,ja=new I,Ya=new I,Za=new be,$a=new be,Ka=new be;class ke{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Zn.subVectors(n,e),Xa.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(Zn),c=Cn.dot(Xa),u=Zn.dot(Zn),l=Zn.dot(Xa),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(u*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Za.setScalar(0),$a.setScalar(0),Ka.setScalar(0),Za.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ka.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ka,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Zn.subVectors(t,e),Cn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,n),gs.subVectors(r,n),qa.subVectors(t,n);const c=ms.dot(qa),u=gs.dot(qa);if(c<=0&&u<=0)return e.copy(n);ja.subVectors(t,s);const l=ms.dot(ja),h=gs.dot(ja);if(l>=0&&h<=l)return e.copy(s);const d=c*h-l*u;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(ms,o);Ya.subVectors(t,r);const f=ms.dot(Ya),g=gs.dot(Ya);if(g>=0&&f<=g)return e.copy(r);const _=f*u-c*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(gs,a);const m=l*g-f*h;if(m<=0&&h-l>=0&&f-g>=0)return Gu.subVectors(r,s),a=(h-l)/(h-l+(f-g)),e.copy(s).addScaledVector(Gu,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Gl(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Jt.fromWorkingColorSpace(We.copy(this),t),Math.round(qe(We.r*255,0,255))*65536+Math.round(qe(We.g*255,0,255))*256+Math.round(qe(We.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const l=(a+o)/2;if(a===o)c=0,u=0;else{const h=o-a;switch(u=l<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=an){Jt.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(ao);const n=Fr(vi.h,ao.h,e),s=Fr(vi.s,ao.s,e),r=Fr(vi.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Rt;Rt.NAMES=qd;let Sm=0;class Fi extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=or(),this.name="",this.blending=Gs,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Lc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Lc&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jd extends Fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new I,co=new Ft;class ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eu&&(t.usage=this.usage),t}}class Yd extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zd extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class tn extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bm=0;const _n=new Yt,Qa=new ve,_s=new I,hn=new we,gr=new we,Fe=new I;class Ae extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gd(t)?Zd:Yd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new we);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(hn.min,gr.min),hn.expandByPoint(Fe),Fe.addVectors(hn.max,gr.max),hn.expandByPoint(Fe)):(hn.expandByPoint(gr.min),hn.expandByPoint(gr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,l=a.count;u<l;u++)Fe.fromBufferAttribute(a,u),c&&(_s.fromBufferAttribute(t,u),Fe.add(_s)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new I,c[A]=new I;const u=new I,l=new I,h=new I,d=new Ft,f=new Ft,g=new Ft,_=new I,m=new I;function p(A,S,M){u.fromBufferAttribute(n,A),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),l.sub(u),h.sub(u),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(R),a[A].add(_),a[S].add(_),a[M].add(_),c[A].add(m),c[S].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,S=v.length;A<S;++A){const M=v[A],R=M.start,L=M.count;for(let U=R,D=R+L;U<D;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new I,x=new I,b=new I,E=new I;function w(A){b.fromBufferAttribute(s,A),E.copy(b);const S=a[A];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(E,S);const R=x.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,R)}for(let A=0,S=v.length;A<S;++A){const M=v[A],R=M.start,L=M.count;for(let U=R,D=R+L;U<D;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,u=new I,l=new I,h=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(l),c.add(l),u.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const u=a.array,l=a.itemSize,h=a.normalized,d=new u.constructor(c.length*l);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*l;for(let p=0;p<l;p++)d[g++]=u[f++]}return new ye(d,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let l=0,h=u.length;l<h;l++){const d=u[l],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];l.push(f.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const l=s[u];this.setAttribute(u,l.clone(e))}const r=t.morphAttributes;for(const u in r){const l=[],h=r[u];for(let d=0,f=h.length;d<f;d++)l.push(h[d].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,l=o.length;u<l;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new Yt,ki=new Yr,lo=new bn,Xu=new I,uo=new I,ho=new I,fo=new I,tc=new I,po=new I,qu=new I,mo=new I;class ce extends ve{constructor(t=new Ae,e=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const l=a[c],h=r[c];l!==0&&(tc.fromBufferAttribute(h,t),o?po.addScaledVector(tc,l):po.addScaledVector(tc.sub(e),l))}e.add(po)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(lo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(lo,Xu)===null||ki.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(Wu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,b=y;x<b;x+=3){const E=a.getX(x),w=a.getX(x+1),A=a.getX(x+2);s=go(this,p,t,n,u,l,h,E,w,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=go(this,o,t,n,u,l,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,b=y;x<b;x+=3){const E=x,w=x+1,A=x+2;s=go(this,p,t,n,u,l,h,E,w,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=go(this,o,t,n,u,l,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wm(i,t,e,n,s,r,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Hn,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(mo);return u<e.near||u>e.far?null:{distance:u,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,uo),i.getVertexPosition(c,ho),i.getVertexPosition(u,fo);const l=wm(i,t,e,n,uo,ho,fo,qu);if(l){const h=new I;ke.getBarycoord(qu,uo,ho,fo,h),s&&(l.uv=ke.getInterpolatedAttribute(s,a,c,u,h,new Ft)),r&&(l.uv1=ke.getInterpolatedAttribute(r,a,c,u,h,new Ft)),o&&(l.normal=ke.getInterpolatedAttribute(o,a,c,u,h,new I),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new I,materialIndex:0};ke.getNormal(uo,ho,fo,d.normal),l.face=d,l.barycoord=h}return l}class Di extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],l=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tn(u,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(h,2));function g(_,m,p,v,y,x,b,E,w,A,S){const M=x/w,R=b/A,L=x/2,U=b/2,D=E/2,N=w+1,B=A+1;let G=0,V=0;const it=new I;for(let at=0;at<B;at++){const lt=at*R-U;for(let yt=0;yt<N;yt++){const kt=yt*M-L;it[_]=kt*v,it[m]=lt*y,it[p]=D,u.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=E>0?1:-1,l.push(it.x,it.y,it.z),h.push(yt/w),h.push(1-at/A),G+=1}}for(let at=0;at<A;at++)for(let lt=0;lt<w;lt++){const yt=d+lt+N*at,kt=d+lt+N*(at+1),Z=d+(lt+1)+N*(at+1),K=d+(lt+1)+N*at;c.push(yt,kt,K),c.push(kt,Z,K),V+=6}a.addGroup(f,V,S),f+=V,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Qs(i[e]);for(const s in n)t[s]=n[s]}return t}function Em(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $d(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Tm={clone:Qs,merge:$e};var Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=Em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kd extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new I,ju=new Ft,Yu=new Ft;class dn extends Kd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,ju,Yu),e.subVectors(Yu,ju)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,vs=1;class Rm extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(xs,vs,t,e);s.layers=this.layers,this.add(s);const r=new dn(xs,vs,t,e);r.layers=this.layers,this.add(r);const o=new dn(xs,vs,t,e);o.layers=this.layers,this.add(o);const a=new dn(xs,vs,t,e);a.layers=this.layers,this.add(a);const c=new dn(xs,vs,t,e);c.layers=this.layers,this.add(c);const u=new dn(xs,vs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,l]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jd extends Qe{constructor(t,e,n,s,r,o,a,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:Zs,super(t,e,n,s,r,o,a,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pm extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Di(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Ri});r.uniforms.tEquirect.value=e;const o=new ce(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=yn),new Rm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ec=new I,Lm=new I,Im=new Wt;class ei{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ec.subVectors(n,e).cross(Lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Im.getNormalMatrix(t),s=this.coplanarPoint(ec).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new bn,_o=new I;class Ea{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],l=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-u,m-f,x-p).normalize(),n[1].setComponents(c+r,d+u,m+f,x+p).normalize(),n[2].setComponents(c+o,d+l,m+g,x+v).normalize(),n[3].setComponents(c-o,d-l,m-g,x-v).normalize(),n[4].setComponents(c-a,d-h,m-_,x-y).normalize(),e===oi)n[5].setComponents(c+a,d+h,m+_,x+y).normalize();else if(e===ua)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_o.x=s.normal.x>0?t.max.x:t.min.x,_o.y=s.normal.y>0?t.max.y:t.min.y,_o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dm(i){const t=new WeakMap;function e(a,c){const u=a.array,l=a.usage,h=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,l),a.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,u){const l=c.array,h=c.updateRanges;if(i.bindBuffer(u,a),h.length===0)i.bufferSubData(u,0,l);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(u,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}class Zr extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,l=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<l;p++){const v=p*d-o;for(let y=0;y<u;y++){const x=y*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+u*p,x=v+u*(p+1),b=v+1+u*(p+1),E=v+1+u*p;f.push(y,x,E),f.push(x,b,E)}this.setIndex(f),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,i0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,T0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,I0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hg=`#define DISTANCE
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
}`,Vg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#define LAMBERT
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
}`,$g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Kg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,t_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e_=`#define PHONG
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
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,i_=`#define STANDARD
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
}`,s_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,r_=`#define TOON
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
}`,o_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,a_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,u_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,h_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Um,alphahash_pars_fragment:Nm,alphamap_fragment:Fm,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:Om,aomap_fragment:km,aomap_pars_fragment:Hm,batching_pars_vertex:Vm,batching_vertex:Gm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:jm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Jm,color_fragment:Qm,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:c0,emissivemap_pars_fragment:l0,colorspace_fragment:u0,colorspace_pars_fragment:h0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:T0,envmap_vertex:g0,fog_vertex:_0,fog_pars_vertex:x0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:S0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:w0,lights_pars_begin:E0,lights_toon_fragment:A0,lights_toon_pars_fragment:C0,lights_phong_fragment:R0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:I0,lights_fragment_begin:D0,lights_fragment_maps:U0,lights_fragment_end:N0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:O0,map_fragment:k0,map_pars_fragment:H0,map_particle_fragment:V0,map_particle_pars_fragment:G0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:j0,morphnormal_vertex:Y0,morphtarget_pars_vertex:Z0,morphtarget_vertex:$0,normal_fragment_begin:K0,normal_fragment_maps:J0,normal_pars_fragment:Q0,normal_pars_vertex:tg,normal_vertex:eg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:rg,iridescence_pars_fragment:og,opaque_fragment:ag,packing:cg,premultiplied_alpha_fragment:lg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:dg,roughnessmap_fragment:fg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:_g,shadowmask_pars_fragment:xg,skinbase_vertex:vg,skinning_pars_vertex:yg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:bg,specularmap_pars_fragment:wg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Tg,transmission_fragment:Ag,transmission_pars_fragment:Cg,uv_pars_fragment:Rg,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Ig,background_vert:Dg,background_frag:Ug,backgroundCube_vert:Ng,backgroundCube_frag:Fg,cube_vert:Bg,cube_frag:zg,depth_vert:Og,depth_frag:kg,distanceRGBA_vert:Hg,distanceRGBA_frag:Vg,equirect_vert:Gg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:jg,meshbasic_frag:Yg,meshlambert_vert:Zg,meshlambert_frag:$g,meshmatcap_vert:Kg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:t_,meshphong_vert:e_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:r_,meshtoon_frag:o_,points_vert:a_,points_frag:c_,shadow_vert:l_,shadow_frag:u_,sprite_vert:h_,sprite_frag:d_},ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},zn={basic:{uniforms:$e([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:$e([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:$e([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:$e([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:$e([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:$e([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:$e([ct.points,ct.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:$e([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:$e([ct.common,ct.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:$e([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:$e([ct.sprite,ct.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:$e([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:$e([ct.lights,ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};zn.physical={uniforms:$e([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const xo={r:0,b:0,g:0},Vi=new In,f_=new Yt;function p_(i,t,e,n,s,r,o){const a=new Rt(0);let c=r===!0?0:1,u,l,h=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Sa)?(l===void 0&&(l=new ce(new Di(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Qs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Vi.copy(y.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Vi)),l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ae,(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ce(new Zr(2,2),new li({name:"BackgroundMaterial",uniforms:Qs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function p(v,y){v.getRGB(xo,$d(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function m_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,R,L,U,D){let N=!1;const B=h(U,L,R);r!==B&&(r=B,u(r.object)),N=f(M,U,L,D),N&&g(M,U,L,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,x(M,R,L,U),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function l(M){return i.deleteVertexArray(M)}function h(M,R,L){const U=L.wireframe===!0;let D=n[M.id];D===void 0&&(D={},n[M.id]=D);let N=D[R.id];N===void 0&&(N={},D[R.id]=N);let B=N[U];return B===void 0&&(B=d(c()),N[U]=B),B}function d(M){const R=[],L=[],U=[];for(let D=0;D<e;D++)R[D]=0,L[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,R,L,U){const D=r.attributes,N=R.attributes;let B=0;const G=L.getAttributes();for(const V in G)if(G[V].location>=0){const at=D[V];let lt=N[V];if(lt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),at===void 0||at.attribute!==lt||lt&&at.data!==lt.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(M,R,L,U){const D={},N=R.attributes;let B=0;const G=L.getAttributes();for(const V in G)if(G[V].location>=0){let at=N[V];at===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const lt={};lt.attribute=at,at&&at.data&&(lt.data=at.data),D[V]=lt,B++}r.attributes=D,r.attributesNum=B,r.index=U}function _(){const M=r.newAttributes;for(let R=0,L=M.length;R<L;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const L=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;L[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),D[M]!==R&&(i.vertexAttribDivisor(M,R),D[M]=R)}function v(){const M=r.newAttributes,R=r.enabledAttributes;for(let L=0,U=R.length;L<U;L++)R[L]!==M[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function y(M,R,L,U,D,N,B){B===!0?i.vertexAttribIPointer(M,R,L,D,N):i.vertexAttribPointer(M,R,L,U,D,N)}function x(M,R,L,U){_();const D=U.attributes,N=L.getAttributes(),B=R.defaultAttributeValues;for(const G in N){const V=N[G];if(V.location>=0){let it=D[G];if(it===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const at=it.normalized,lt=it.itemSize,yt=t.get(it);if(yt===void 0)continue;const kt=yt.buffer,Z=yt.type,K=yt.bytesPerElement,gt=Z===i.INT||Z===i.UNSIGNED_INT||it.gpuType===Fl;if(it.isInterleavedBufferAttribute){const j=it.data,nt=j.stride,Mt=it.offset;if(j.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)p(V.location+Lt,j.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)m(V.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Lt=0;Lt<V.locationSize;Lt++)y(V.location+Lt,lt/V.locationSize,Z,at,nt*K,(Mt+lt/V.locationSize*Lt)*K,gt)}else{if(it.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)p(V.location+j,it.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let j=0;j<V.locationSize;j++)y(V.location+j,lt/V.locationSize,Z,at,lt*K,lt/V.locationSize*j*K,gt)}}else if(B!==void 0){const at=B[G];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(V.location,at);break;case 3:i.vertexAttrib3fv(V.location,at);break;case 4:i.vertexAttrib4fv(V.location,at);break;default:i.vertexAttrib1fv(V.location,at)}}}}v()}function b(){A();for(const M in n){const R=n[M];for(const L in R){const U=R[L];for(const D in U)l(U[D].object),delete U[D];delete R[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const L in R){const U=R[L];for(const D in U)l(U[D].object),delete U[D];delete R[L]}delete n[M.id]}function w(M){for(const R in n){const L=n[R];if(L[M.id]===void 0)continue;const U=L[M.id];for(const D in U)l(U[D].object),delete U[D];delete L[M.id]}}function A(){S(),o=!0,r!==s&&(r=s,u(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function g_(i,t,e){let n;function s(u){n=u}function r(u,l){i.drawArrays(n,u,l),e.update(l,n,1)}function o(u,l,h){h!==0&&(i.drawArraysInstanced(n,u,l,h),e.update(l,n,h))}function a(u,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,h);let f=0;for(let g=0;g<h;g++)f+=l[g];e.update(f,n,1)}function c(u,l,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)o(u[g],l[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,l,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=l[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function __(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Ke&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mn&&!A)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:E}}function x_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=l(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?l(null):u();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=l(g,d,y,f);for(let b=0;b!==y;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function v_(i){let t=new WeakMap;function e(o,a){return a===Oc?o.mapping=Zs:a===kc&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oc||a===kc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Pm(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class tf extends Kd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fs=4,Zu=[.125,.215,.35,.446,.526,.582],ts=20,nc=new tf,$u=new Rt;let ic=null,sc=0,rc=0,oc=!1;const Ki=(1+Math.sqrt(5))/2,ys=1/Ki,Ku=[new I(-Ki,ys,0),new I(Ki,ys,0),new I(-ys,0,Ki),new I(ys,0,Ki),new I(0,Ki,-ys),new I(0,Ki,ys),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ic,sc,rc),this._renderer.xr.enabled=oc,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:jr,format:Ke,colorSpace:sr,depthBuffer:!1},s=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(r)),this._blurMaterial=M_(r,t,e)}return s}_compileMaterial(t){const e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,nc)}_sceneToCubeUV(t,e,n,s){const a=new dn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor($u),l.toneMapping=Pi,l.autoClear=!1;const f=new jd({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new ce(new Di,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy($u),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;vo(s,v*y,p>2?y:0,y,y),l.setRenderTarget(s),_&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zs||t.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;vo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,nc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ku[(s-r-1)%Ku.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new ce(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const p=[];let v=0;for(let w=0;w<ts;++w){const A=w/_,S=Math.exp(-A*A/2);p.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],b=3*x*(s>y-Fs?s-y+Fs:0),E=4*(this._cubeSize-x);vo(e,b,E,3*x,2*x),c.setRenderTarget(e),c.render(h,nc)}}function y_(i){const t=[],e=[],n=[];let s=i;const r=i-Fs+1+Zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Fs?c=Zu[o-i+Fs-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),l=-u,h=1+u,d=[l,l,h,l,h,h,l,l,h,h,l,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,A=E>2?0:-1,S=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(S,_*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const b=new Ae;b.setAttribute("position",new ye(v,_)),b.setAttribute("uv",new ye(y,m)),b.setAttribute("faceIndex",new ye(x,p)),t.push(b),s>Fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qu(i,t,e){const n=new ns(i,t,e);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M_(i,t,e){const n=new Float32Array(ts),s=new I(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function th(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function eh(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===Oc||c===kc,l=c===Zs||c===$s;if(u||l){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ju(i)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return u&&f&&f.height>0||l&&f&&s(f)?(e===null&&(e=new Ju(i)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const u=6;for(let l=0;l<u;l++)a[l]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function b_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function w_(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function u(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],E=v[y+1],w=v[y+2];d.push(b,E,E,w,w,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,E=y+1,w=y+2;d.push(b,E,E,w,w,b)}}else return;const m=new(Gd(d)?Zd:Yd)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function l(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:l}}function E_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function u(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function l(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function T_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A_(i,t,e){const n=new WeakMap,s=new be;function r(o,a,c){const u=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*E*4*h),A=new Xd(w,b,E,h);A.type=Mn,A.needsUpdate=!0;const S=x*4;for(let R=0;R<h;R++){const L=p[R],U=v[R],D=y[R],N=b*E*4*R;for(let B=0;B<L.count;B++){const G=B*S;g===!0&&(s.fromBufferAttribute(L,B),w[N+G+0]=s.x,w[N+G+1]=s.y,w[N+G+2]=s.z,w[N+G+3]=0),_===!0&&(s.fromBufferAttribute(U,B),w[N+G+4]=s.x,w[N+G+5]=s.y,w[N+G+6]=s.z,w[N+G+7]=0),m===!0&&(s.fromBufferAttribute(D,B),w[N+G+8]=s.x,w[N+G+9]=s.y,w[N+G+10]=s.z,w[N+G+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Ft(b,E)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function C_(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,l=c.geometry,h=t.get(c,l);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}class ef extends Qe{constructor(t,e,n,s,r,o,a,c,u,l=Ws){if(l!==Ws&&l!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Ws&&(n=Ii),n===void 0&&l===Js&&(n=Ks),super(null,s,r,o,a,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nf=new Qe,nh=new ef(1,1),sf=new Xd,rf=new pm,of=new Jd,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ta(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function D_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Ne(e,n)}}function U_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Ne(e,n)}}function N_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Ne(e,n)}}function F_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function B_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function k_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function W_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=Vd,r=nh):r=nf,e.setTexture2D(t||r,s)}function X_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rf,s)}function q_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||of,s)}function j_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sf,s)}function Y_(i){switch(i){case 5126:return R_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return O_;case 5125:return k_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return j_}}function Z_(i,t){i.uniform1fv(this.addr,t)}function $_(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function K_(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function J_(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function Q_(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tx(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ex(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nx(i,t){i.uniform1iv(this.addr,t)}function ix(i,t){i.uniform2iv(this.addr,t)}function sx(i,t){i.uniform3iv(this.addr,t)}function rx(i,t){i.uniform4iv(this.addr,t)}function ox(i,t){i.uniform1uiv(this.addr,t)}function ax(i,t){i.uniform2uiv(this.addr,t)}function cx(i,t){i.uniform3uiv(this.addr,t)}function lx(i,t){i.uniform4uiv(this.addr,t)}function ux(i,t,e){const n=this.cache,s=t.length,r=Ta(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nf,r[o])}function hx(i,t,e){const n=this.cache,s=t.length,r=Ta(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rf,r[o])}function dx(i,t,e){const n=this.cache,s=t.length,r=Ta(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||of,r[o])}function fx(i,t,e){const n=this.cache,s=t.length,r=Ta(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sf,r[o])}function px(i){switch(i){case 5126:return Z_;case 35664:return $_;case 35665:return K_;case 35666:return J_;case 35674:return Q_;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return cx;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}class mx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}}class gx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=px(e.type)}}class _x{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function xx(i,t,e){const n=i.name,s=n.length;for(ac.lastIndex=0;;){const r=ac.exec(n),o=ac.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){ch(e,u===void 0?new mx(a,i,t):new gx(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new _x(a),ch(e,h)),e=h}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);xx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vx=37297;let yx=0;function Mx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const uh=new Wt;function Sx(i){Jt._getMatrix(uh,Jt.workingColorSpace,i);const t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case wa:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mx(i.getShaderSource(t),o)}else return s}function bx(i,t){const e=Sx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wx(i,t){let e;switch(t){case Ap:e="Linear";break;case Cp:e="Reinhard";break;case Rp:e="Cineon";break;case Nl:e="ACESFilmic";break;case Lp:e="AgX";break;case Ip:e="Neutral";break;case Pp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yo=new I;function Ex(){Jt.getLuminanceCoefficients(yo);const i=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Ax(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Dr(i){return i!==""}function dh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(i){return i.replace(Rx,Lx)}const Px=new Map;function Lx(i,t){let e=jt[t];if(e===void 0){const n=Px.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ml(e)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(Ix,Dx)}function Dx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ux(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===op?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case $s:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function Bx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Ep:t="ENVMAP_BLENDING_MIX";break;case Tp:t="ENVMAP_BLENDING_ADD";break}return t}function zx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ox(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ux(e),u=Nx(e),l=Fx(e),h=Bx(e),d=zx(e),f=Tx(e),g=Ax(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,bx("linearToOutputTexel",e.outputColorSpace),Ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=ml(o),o=dh(o,e),o=fh(o,e),a=ml(a),a=dh(a,e),a=fh(a,e),o=ph(o),a=ph(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,b=lh(s,s.VERTEX_SHADER,y),E=lh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(b).trim(),D=s.getShaderInfoLog(E).trim();let N=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,E);else{const G=hh(s,b,"vertex"),V=hh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+G+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||D==="")&&(B=!1);B&&(R.diagnostics={runnable:N,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:D,prefix:p}})}s.deleteShader(b),s.deleteShader(E),A=new ia(s,_),S=Cx(s,_)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,vx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let kx=0;class Hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vx(t),e.set(t,n)),n}}class Vx{constructor(t){this.id=kx++,this.code=t,this.usedTimes=0}}function Gx(i,t,e,n,s,r,o){const a=new Wl,c=new Hx,u=new Set,l=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,L,U){const D=L.fog,N=U.geometry,B=S.isMeshStandardMaterial?L.environment:null,G=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),V=G&&G.mapping===Sa?G.image.height:null,it=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const at=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,lt=at!==void 0?at.length:0;let yt=0;N.morphAttributes.position!==void 0&&(yt=1),N.morphAttributes.normal!==void 0&&(yt=2),N.morphAttributes.color!==void 0&&(yt=3);let kt,Z,K,gt;if(it){const oe=zn[it];kt=oe.vertexShader,Z=oe.fragmentShader}else kt=S.vertexShader,Z=S.fragmentShader,c.update(S),K=c.getVertexShaderID(S),gt=c.getFragmentShaderID(S);const j=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),Mt=U.isInstancedMesh===!0,Lt=U.isBatchedMesh===!0,ee=!!S.map,zt=!!S.matcap,le=!!G,H=!!S.aoMap,mn=!!S.lightMap,Zt=!!S.bumpMap,$t=!!S.normalMap,Ut=!!S.displacementMap,fe=!!S.emissiveMap,It=!!S.metalnessMap,P=!!S.roughnessMap,T=S.anisotropy>0,W=S.clearcoat>0,J=S.dispersion>0,et=S.iridescence>0,$=S.sheen>0,Tt=S.transmission>0,dt=T&&!!S.anisotropyMap,_t=W&&!!S.clearcoatMap,Qt=W&&!!S.clearcoatNormalMap,rt=W&&!!S.clearcoatRoughnessMap,xt=et&&!!S.iridescenceMap,Nt=et&&!!S.iridescenceThicknessMap,Bt=$&&!!S.sheenColorMap,vt=$&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,qt=!!S.specularColorMap,ue=!!S.specularIntensityMap,F=Tt&&!!S.transmissionMap,ut=Tt&&!!S.thicknessMap,Y=!!S.gradientMap,Q=!!S.alphaMap,mt=S.alphaTest>0,ft=!!S.alphaHash,Vt=!!S.extensions;let Me=Pi;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Ve={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:kt,fragmentShader:Z,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&U._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&U.instanceColor!==null,instancingMorph:Mt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:sr,alphaToCoverage:!!S.alphaToCoverage,map:ee,matcap:zt,envMap:le,envMapMode:le&&G.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:mn,bumpMap:Zt,normalMap:$t,displacementMap:d&&Ut,emissiveMap:fe,normalMapObjectSpace:$t&&S.normalMapType===Fp,normalMapTangentSpace:$t&&S.normalMapType===Vl,metalnessMap:It,roughnessMap:P,anisotropy:T,anisotropyMap:dt,clearcoat:W,clearcoatMap:_t,clearcoatNormalMap:Qt,clearcoatRoughnessMap:rt,dispersion:J,iridescence:et,iridescenceMap:xt,iridescenceThicknessMap:Nt,sheen:$,sheenColorMap:Bt,sheenRoughnessMap:vt,specularMap:Kt,specularColorMap:qt,specularIntensityMap:ue,transmission:Tt,transmissionMap:F,thicknessMap:ut,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:ft,combine:S.combine,mapUv:ee&&_(S.map.channel),aoMapUv:H&&_(S.aoMap.channel),lightMapUv:mn&&_(S.lightMap.channel),bumpMapUv:Zt&&_(S.bumpMap.channel),normalMapUv:$t&&_(S.normalMap.channel),displacementMapUv:Ut&&_(S.displacementMap.channel),emissiveMapUv:fe&&_(S.emissiveMap.channel),metalnessMapUv:It&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Kt&&_(S.specularMap.channel),specularColorMapUv:qt&&_(S.specularColorMap.channel),specularIntensityMapUv:ue&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:ut&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&($t||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(ee||Q),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:nt,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:ee&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ve.vertexUv1s=u.has(1),Ve.vertexUv2s=u.has(2),Ve.vertexUv3s=u.has(3),u.clear(),Ve}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let R;if(M){const L=zn[M];R=Tm.clone(L.uniforms)}else R=S.uniforms;return R}function b(S,M){let R;for(let L=0,U=l.length;L<U;L++){const D=l[L];if(D.cacheKey===M){R=D,++R.usedTimes;break}}return R===void 0&&(R=new Ox(i,M,S,r),l.push(R)),R}function E(S){if(--S.usedTimes===0){const M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),S.destroy()}}function w(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:A}}function Wx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _h(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function u(h,d){e.length>1&&e.sort(h||Xx),n.length>1&&n.sort(d||gh),s.length>1&&s.sort(d||gh)}function l(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:u}}function qx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _h,i.set(n,[o])):s>=r.length?(o=new _h,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Rt};break;case"SpotLight":e={position:new I,direction:new I,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Yx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zx=0;function $x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kx(i){const t=new jx,e=Yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new I);const s=new I,r=new Yt,o=new Yt;function a(u){let l=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,b=0,E=0,w=0;u.sort($x);for(let S=0,M=u.length;S<M;S++){const R=u[S],L=R.color,U=R.intensity,D=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)l+=L.r*U,h+=L.g*U,d+=L.b*U;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],U);w++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,V=e.get(R);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=B,f++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(L).multiplyScalar(U),B.distance=D,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;const G=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,G.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=G.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=N,x++}_++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(L).multiplyScalar(U),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const G=R.shadow,V=e.get(R);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(U),B.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==b||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=b,A.numLightProbes=w,n.version=Zx++)}function c(u,l){let h=0,d=0,f=0,g=0,_=0;const m=l.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const y=u[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function xh(i){const t=new Kx(i),e=[],n=[];function s(l){u.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xh(i),t.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qx extends Fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tv extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iv(i,t,e){let n=new Ea;const s=new Ft,r=new Ft,o=new be,a=new Qx({depthPacking:Np}),c=new tv,u={},l=e.maxTextureSize,h={[Hn]:Je,[Je]:Hn,[fn]:fn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:ev,fragmentShader:nv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(E,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ri),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==Qn&&this.type===Qn,D=p===Qn&&this.type!==Qn;for(let N=0,B=E.length;N<B;N++){const G=E[N],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||U===!0||D===!0){const lt=this.type!==Qn?{minFilter:pn,magFilter:pn}:{};V.map!==null&&V.map.dispose(),V.map=new ns(s.x,s.y,lt),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const at=V.getViewportCount();for(let lt=0;lt<at;lt++){const yt=V.getViewport(lt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),L.viewport(o),V.updateMatrices(G,lt),n=V.getFrustum(),x(w,A,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===Qn&&v(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function v(E,w){const A=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ns(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,A,f,_,null)}function y(E,w,A,S){let M=null;const R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=A.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const L=M.uuid,U=w.uuid;let D=u[L];D===void 0&&(D={},u[L]=D);let N=D[U];N===void 0&&(N=M.clone(),D[U]=N,w.addEventListener("dispose",b)),M=N}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Qn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=A}return M}function x(E,w,A,S,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const U=t.update(E),D=E.material;if(Array.isArray(D)){const N=U.groups;for(let B=0,G=N.length;B<G;B++){const V=N[B],it=D[V.materialIndex];if(it&&it.visible){const at=y(E,it,S,M);E.onBeforeShadow(i,E,w,A,U,at,V),i.renderBufferDirect(A,null,U,at,E,V),E.onAfterShadow(i,E,w,A,U,at,V)}}}else if(D.visible){const N=y(E,D,S,M);E.onBeforeShadow(i,E,w,A,U,N,null),i.renderBufferDirect(A,null,U,N,E,null),E.onAfterShadow(i,E,w,A,U,N,null)}}const L=E.children;for(let U=0,D=L.length;U<D;U++)x(L[U],w,A,S,M)}function b(E){E.target.removeEventListener("dispose",b);for(const A in u){const S=u[A],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const sv={[Ic]:Dc,[Uc]:Bc,[Nc]:zc,[Ys]:Fc,[Dc]:Ic,[Bc]:Uc,[zc]:Nc,[Fc]:Ys};function rv(i,t){function e(){let F=!1;const ut=new be;let Y=null;const Q=new be(0,0,0,0);return{setMask:function(mt){Y!==mt&&!F&&(i.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){F=mt},setClear:function(mt,ft,Vt,Me,Ve){Ve===!0&&(mt*=Me,ft*=Me,Vt*=Me),ut.set(mt,ft,Vt,Me),Q.equals(ut)===!1&&(i.clearColor(mt,ft,Vt,Me),Q.copy(ut))},reset:function(){F=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,ut=!1,Y=null,Q=null,mt=null;return{setReversed:function(ft){if(ut!==ft){const Vt=t.get("EXT_clip_control");ut?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Me=mt;mt=null,this.setClear(Me)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?j(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!F&&(i.depthMask(ft),Y=ft)},setFunc:function(ft){if(ut&&(ft=sv[ft]),Q!==ft){switch(ft){case Ic:i.depthFunc(i.NEVER);break;case Dc:i.depthFunc(i.ALWAYS);break;case Uc:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case Nc:i.depthFunc(i.EQUAL);break;case Fc:i.depthFunc(i.GEQUAL);break;case Bc:i.depthFunc(i.GREATER);break;case zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ft}},setLocked:function(ft){F=ft},setClear:function(ft){mt!==ft&&(ut&&(ft=1-ft),i.clearDepth(ft),mt=ft)},reset:function(){F=!1,Y=null,Q=null,mt=null,ut=!1}}}function s(){let F=!1,ut=null,Y=null,Q=null,mt=null,ft=null,Vt=null,Me=null,Ve=null;return{setTest:function(oe){F||(oe?j(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(oe){ut!==oe&&!F&&(i.stencilMask(oe),ut=oe)},setFunc:function(oe,wn,Wn){(Y!==oe||Q!==wn||mt!==Wn)&&(i.stencilFunc(oe,wn,Wn),Y=oe,Q=wn,mt=Wn)},setOp:function(oe,wn,Wn){(ft!==oe||Vt!==wn||Me!==Wn)&&(i.stencilOp(oe,wn,Wn),ft=oe,Vt=wn,Me=Wn)},setLocked:function(oe){F=oe},setClear:function(oe){Ve!==oe&&(i.clearStencil(oe),Ve=oe)},reset:function(){F=!1,ut=null,Y=null,Q=null,mt=null,ft=null,Vt=null,Me=null,Ve=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let l={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,b=null,E=null,w=new Rt(0,0,0),A=0,S=!1,M=null,R=null,L=null,U=null,D=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=G>=2);let it=null,at={};const lt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),kt=new be().fromArray(lt),Z=new be().fromArray(yt);function K(F,ut,Y,Q){const mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(F,ft),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<Y;Vt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ut+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ft}const gt={};gt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Ys),Zt(!1),$t(yu),j(i.CULL_FACE),H(Ri);function j(F){l[F]!==!0&&(i.enable(F),l[F]=!0)}function nt(F){l[F]!==!1&&(i.disable(F),l[F]=!1)}function Mt(F,ut){return h[F]!==ut?(i.bindFramebuffer(F,ut),h[F]=ut,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Lt(F,ut){let Y=f,Q=!1;if(F){Y=d.get(ut),Y===void 0&&(Y=[],d.set(ut,Y));const mt=F.textures;if(Y.length!==mt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Vt=mt.length;ft<Vt;ft++)Y[ft]=i.COLOR_ATTACHMENT0+ft;Y.length=mt.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function ee(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const zt={[Qi]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[lp]:i.FUNC_REVERSE_SUBTRACT};zt[up]=i.MIN,zt[hp]=i.MAX;const le={[dp]:i.ZERO,[fp]:i.ONE,[pp]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[yp]:i.SRC_ALPHA_SATURATE,[xp]:i.DST_COLOR,[gp]:i.DST_ALPHA,[mp]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[_p]:i.ONE_MINUS_DST_ALPHA,[Mp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[bp]:i.CONSTANT_ALPHA,[wp]:i.ONE_MINUS_CONSTANT_ALPHA};function H(F,ut,Y,Q,mt,ft,Vt,Me,Ve,oe){if(F===Ri){_===!0&&(nt(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),F!==ap){if(F!==m||oe!==S){if((p!==Qi||x!==Qi)&&(i.blendEquation(i.FUNC_ADD),p=Qi,x=Qi),oe)switch(F){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mu:i.blendFunc(i.ONE,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,y=null,b=null,E=null,w.set(0,0,0),A=0,m=F,S=oe}return}mt=mt||ut,ft=ft||Y,Vt=Vt||Q,(ut!==p||mt!==x)&&(i.blendEquationSeparate(zt[ut],zt[mt]),p=ut,x=mt),(Y!==v||Q!==y||ft!==b||Vt!==E)&&(i.blendFuncSeparate(le[Y],le[Q],le[ft],le[Vt]),v=Y,y=Q,b=ft,E=Vt),(Me.equals(w)===!1||Ve!==A)&&(i.blendColor(Me.r,Me.g,Me.b,Ve),w.copy(Me),A=Ve),m=F,S=!1}function mn(F,ut){F.side===fn?nt(i.CULL_FACE):j(i.CULL_FACE);let Y=F.side===Je;ut&&(Y=!Y),Zt(Y),F.blending===Gs&&F.transparent===!1?H(Ri):H(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function $t(F){F!==sp?(j(i.CULL_FACE),F!==R&&(F===yu?i.cullFace(i.BACK):F===rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),R=F}function Ut(F){F!==L&&(B&&i.lineWidth(F),L=F)}function fe(F,ut,Y){F?(j(i.POLYGON_OFFSET_FILL),(U!==ut||D!==Y)&&(i.polygonOffset(ut,Y),U=ut,D=Y)):nt(i.POLYGON_OFFSET_FILL)}function It(F){F?j(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function P(F){F===void 0&&(F=i.TEXTURE0+N-1),it!==F&&(i.activeTexture(F),it=F)}function T(F,ut,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+N-1:Y=it);let Q=at[Y];Q===void 0&&(Q={type:void 0,texture:void 0},at[Y]=Q),(Q.type!==F||Q.texture!==ut)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(F,ut||gt[F]),Q.type=F,Q.texture=ut)}function W(){const F=at[it];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(F){kt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),kt.copy(F))}function vt(F){Z.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function Kt(F,ut){let Y=u.get(ut);Y===void 0&&(Y=new WeakMap,u.set(ut,Y));let Q=Y.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(ut,F.name),Y.set(F,Q))}function qt(F,ut){const Q=u.get(ut).get(F);c.get(ut)!==Q&&(i.uniformBlockBinding(ut,Q,F.__bindingPointIndex),c.set(ut,Q))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},it=null,at={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,b=null,E=null,w=new Rt(0,0,0),A=0,S=!1,M=null,R=null,L=null,U=null,D=null,kt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:nt,bindFramebuffer:Mt,drawBuffers:Lt,useProgram:ee,setBlending:H,setMaterial:mn,setFlipSided:Zt,setCullFace:$t,setLineWidth:Ut,setPolygonOffset:fe,setScissorTest:It,activeTexture:P,bindTexture:T,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:xt,texImage3D:Nt,updateUBOMapping:Kt,uniformBlockBinding:qt,texStorage2D:Qt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Bt,viewport:vt,reset:ue}}function vh(i,t,e,n){const s=ov(n);switch(e){case Fd:return i*t;case zd:return i*t;case Od:return i*t*2;case Ol:return i*t/s.components*s.byteLength;case ba:return i*t/s.components*s.byteLength;case kd:return i*t*2/s.components*s.byteLength;case kl:return i*t*2/s.components*s.byteLength;case Bd:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case Hl:return i*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wc:case qc:return Math.max(i,16)*Math.max(t,8)/4;case Gc:case Xc:return Math.max(i,8)*Math.max(t,8)/2;case jc:case Yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case na:case ul:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hd:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ov(i){switch(i){case Ln:case Dd:return{byteLength:1,components:1};case Vr:case Ud:case jr:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case Ii:case Fl:case Mn:return{byteLength:4,components:1};case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function av(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ft,l=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return f?new OffscreenCanvas(P,T):ha("canvas")}function _(P,T,W){let J=1;const et=It(P);if((et.width>W||et.height>W)&&(J=W/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(J*et.width),Tt=Math.floor(J*et.height);h===void 0&&(h=g($,Tt));const dt=T?g($,Tt):h;return dt.width=$,dt.height=Tt,dt.getContext("2d").drawImage(P,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+Tt+")."),dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,T,W,J,et=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=T;if(T===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),T===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),T===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),T===i.RGBA){const Tt=et?wa:Jt.getTransfer(J);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=Tt===ae?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(P,T){let W;return P?T===null||T===Ii||T===Ks?W=i.DEPTH24_STENCIL8:T===Mn?W=i.DEPTH32F_STENCIL8:T===Vr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ii||T===Ks?W=i.DEPTH_COMPONENT24:T===Mn?W=i.DEPTH_COMPONENT32F:T===Vr&&(W=i.DEPTH_COMPONENT16),W}function b(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){const T=P.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&l.delete(T)}function w(P){const T=P.target;T.removeEventListener("dispose",w),M(T)}function A(P){const T=n.get(P);if(T.__webglInit===void 0)return;const W=P.source,J=d.get(W);if(J){const et=J[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(P),Object.keys(J).length===0&&d.delete(W)}n.remove(P)}function S(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const W=P.source,J=d.get(W);delete J[T.__cacheKey],o.memory.textures--}function M(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let et=0;et<T.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(T.__webglFramebuffer[J][et]);else i.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)i.deleteFramebuffer(T.__webglFramebuffer[J]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let J=0,et=W.length;J<et;J++){const $=n.get(W[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(P)}let R=0;function L(){R=0}function U(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function D(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function N(P,T){const W=n.get(P);if(P.isVideoTexture&&Ut(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,P,T);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function B(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Z(W,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function G(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Z(W,P,T);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function V(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){K(W,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const it={[Hc]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Vc]:i.MIRRORED_REPEAT},at={[pn]:i.NEAREST,[Dp]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},lt={[Bp]:i.NEVER,[Gp]:i.ALWAYS,[zp]:i.LESS,[Vd]:i.LEQUAL,[Op]:i.EQUAL,[Vp]:i.GEQUAL,[kp]:i.GREATER,[Hp]:i.NOTEQUAL};function yt(P,T){if(T.type===Mn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===Na||T.magFilter===Qr||T.magFilter===es||T.minFilter===yn||T.minFilter===Na||T.minFilter===Qr||T.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,it[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,it[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,it[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,at[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,at[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==Qr&&T.minFilter!==es||T.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function kt(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));const J=T.source;let et=d.get(J);et===void 0&&(et={},d.set(J,et));const $=D(T);if($!==P.__cacheKey){et[$]===void 0&&(et[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),et[$].usedTimes++;const Tt=et[P.__cacheKey];Tt!==void 0&&(et[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(T)),P.__cacheKey=$,P.__webglTexture=et[$].texture}return W}function Z(P,T,W){let J=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=i.TEXTURE_3D);const et=kt(P,T),$=T.source;e.bindTexture(J,P.__webglTexture,i.TEXTURE0+W);const Tt=n.get($);if($.version!==Tt.__version||et===!0){e.activeTexture(i.TEXTURE0+W);const dt=Jt.getPrimaries(Jt.workingColorSpace),_t=T.colorSpace===Ei?null:Jt.getPrimaries(T.colorSpace),Qt=T.colorSpace===Ei||dt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let rt=_(T.image,!1,s.maxTextureSize);rt=fe(T,rt);const xt=r.convert(T.format,T.colorSpace),Nt=r.convert(T.type);let Bt=y(T.internalFormat,xt,Nt,T.colorSpace,T.isVideoTexture);yt(J,T);let vt;const Kt=T.mipmaps,qt=T.isVideoTexture!==!0,ue=Tt.__version===void 0||et===!0,F=$.dataReady,ut=b(T,rt);if(T.isDepthTexture)Bt=x(T.format===Js,T.type),ue&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,xt,Nt,null));else if(T.isDataTexture)if(Kt.length>0){qt&&ue&&e.texStorage2D(i.TEXTURE_2D,ut,Bt,Kt[0].width,Kt[0].height);for(let Y=0,Q=Kt.length;Y<Q;Y++)vt=Kt[Y],qt?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,Nt,vt.data):e.texImage2D(i.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,xt,Nt,vt.data);T.generateMipmaps=!1}else qt?(ue&&e.texStorage2D(i.TEXTURE_2D,ut,Bt,rt.width,rt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,Nt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,xt,Nt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qt&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Bt,Kt[0].width,Kt[0].height,rt.depth);for(let Y=0,Q=Kt.length;Y<Q;Y++)if(vt=Kt[Y],T.format!==Ke)if(xt!==null)if(qt){if(F)if(T.layerUpdates.size>0){const mt=vh(vt.width,vt.height,T.format,T.type);for(const ft of T.layerUpdates){const Vt=vt.data.subarray(ft*mt/vt.data.BYTES_PER_ELEMENT,(ft+1)*mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ft,vt.width,vt.height,1,xt,Vt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,rt.depth,xt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Bt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,rt.depth,xt,Nt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Bt,vt.width,vt.height,rt.depth,0,xt,Nt,vt.data)}else{qt&&ue&&e.texStorage2D(i.TEXTURE_2D,ut,Bt,Kt[0].width,Kt[0].height);for(let Y=0,Q=Kt.length;Y<Q;Y++)vt=Kt[Y],T.format!==Ke?xt!==null?qt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,xt,Nt,vt.data):e.texImage2D(i.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,xt,Nt,vt.data)}else if(T.isDataArrayTexture)if(qt){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Bt,rt.width,rt.height,rt.depth),F)if(T.layerUpdates.size>0){const Y=vh(rt.width,rt.height,T.format,T.type);for(const Q of T.layerUpdates){const mt=rt.data.subarray(Q*Y/rt.data.BYTES_PER_ELEMENT,(Q+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,xt,Nt,mt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Nt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,rt.width,rt.height,rt.depth,0,xt,Nt,rt.data);else if(T.isData3DTexture)qt?(ue&&e.texStorage3D(i.TEXTURE_3D,ut,Bt,rt.width,rt.height,rt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Nt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,rt.width,rt.height,rt.depth,0,xt,Nt,rt.data);else if(T.isFramebufferTexture){if(ue)if(qt)e.texStorage2D(i.TEXTURE_2D,ut,Bt,rt.width,rt.height);else{let Y=rt.width,Q=rt.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,Bt,Y,Q,0,xt,Nt,null),Y>>=1,Q>>=1}}else if(Kt.length>0){if(qt&&ue){const Y=It(Kt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Bt,Y.width,Y.height)}for(let Y=0,Q=Kt.length;Y<Q;Y++)vt=Kt[Y],qt?F&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt,Nt,vt):e.texImage2D(i.TEXTURE_2D,Y,Bt,xt,Nt,vt);T.generateMipmaps=!1}else if(qt){if(ue){const Y=It(rt);e.texStorage2D(i.TEXTURE_2D,ut,Bt,Y.width,Y.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Nt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,xt,Nt,rt);m(T)&&p(J),Tt.__version=$.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function K(P,T,W){if(T.image.length!==6)return;const J=kt(P,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const $=n.get(et);if(et.version!==$.__version||J===!0){e.activeTexture(i.TEXTURE0+W);const Tt=Jt.getPrimaries(Jt.workingColorSpace),dt=T.colorSpace===Ei?null:Jt.getPrimaries(T.colorSpace),_t=T.colorSpace===Ei||Tt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Qt&&!rt?xt[Q]=_(T.image[Q],!0,s.maxCubemapSize):xt[Q]=rt?T.image[Q].image:T.image[Q],xt[Q]=fe(T,xt[Q]);const Nt=xt[0],Bt=r.convert(T.format,T.colorSpace),vt=r.convert(T.type),Kt=y(T.internalFormat,Bt,vt,T.colorSpace),qt=T.isVideoTexture!==!0,ue=$.__version===void 0||J===!0,F=et.dataReady;let ut=b(T,Nt);yt(i.TEXTURE_CUBE_MAP,T);let Y;if(Qt){qt&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Kt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){Y=xt[Q].mipmaps;for(let mt=0;mt<Y.length;mt++){const ft=Y[mt];T.format!==Ke?Bt!==null?qt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,ft.width,ft.height,Bt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Kt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,ft.width,ft.height,Bt,vt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Kt,ft.width,ft.height,0,Bt,vt,ft.data)}}}else{if(Y=T.mipmaps,qt&&ue){Y.length>0&&ut++;const Q=It(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Bt,vt,xt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,xt[Q].width,xt[Q].height,0,Bt,vt,xt[Q].data);for(let mt=0;mt<Y.length;mt++){const Vt=Y[mt].image[Q].image;qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Vt.width,Vt.height,Bt,vt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Kt,Vt.width,Vt.height,0,Bt,vt,Vt.data)}}else{qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Bt,vt,xt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Bt,vt,xt[Q]);for(let mt=0;mt<Y.length;mt++){const ft=Y[mt];qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Bt,vt,ft.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Kt,Bt,vt,ft.image[Q])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),$.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function gt(P,T,W,J,et,$){const Tt=r.convert(W.format,W.colorSpace),dt=r.convert(W.type),_t=y(W.internalFormat,Tt,dt,W.colorSpace),Qt=n.get(T),rt=n.get(W);if(rt.__renderTarget=T,!Qt.__hasExternalTextures){const xt=Math.max(1,T.width>>$),Nt=Math.max(1,T.height>>$);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,$,_t,xt,Nt,T.depth,0,Tt,dt,null):e.texImage2D(et,$,_t,xt,Nt,0,Tt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),$t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,rt.__webglTexture,0,Zt(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,rt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(P,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const J=T.depthTexture,et=J&&J.isDepthTexture?J.type:null,$=x(T.stencilBuffer,et),Tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Zt(T);$t(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,P)}else{const J=T.textures;for(let et=0;et<J.length;et++){const $=J[et],Tt=r.convert($.format,$.colorSpace),dt=r.convert($.type),_t=y($.internalFormat,Tt,dt,$.colorSpace),Qt=Zt(T);W&&$t(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,_t,T.width,T.height):$t(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,_t,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_t,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const et=J.__webglTexture,$=Zt(T);if(T.depthTexture.format===Ws)$t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(T.depthTexture.format===Js)$t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Mt(P){const T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=J}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");nt(T.__webglFramebuffer,P)}else if(W){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=i.createRenderbuffer(),j(T.__webglDepthbuffer[J],P,!1);else{const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),j(T.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(P,T,W){const J=n.get(P);T!==void 0&&gt(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Mt(P)}function ee(P){const T=P.texture,W=n.get(P),J=n.get(T);P.addEventListener("dispose",w);const et=P.textures,$=P.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=T.version,o.memory.textures++),$){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let _t=0;_t<T.mipmaps.length;_t++)W.__webglFramebuffer[dt][_t]=i.createFramebuffer()}else W.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)W.__webglFramebuffer[dt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let dt=0,_t=et.length;dt<_t;dt++){const Qt=n.get(et[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&$t(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const _t=et[dt];W.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);const Qt=r.convert(_t.format,_t.colorSpace),rt=r.convert(_t.type),xt=y(_t.internalFormat,Qt,rt,_t.colorSpace,P.isXRRenderTarget===!0),Nt=Zt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,xt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),j(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),yt(i.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)gt(W.__webglFramebuffer[dt][_t],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else gt(W.__webglFramebuffer[dt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,_t=et.length;dt<_t;dt++){const Qt=et[dt],rt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),yt(i.TEXTURE_2D,Qt),gt(W.__webglFramebuffer,P,Qt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),yt(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)gt(W.__webglFramebuffer[_t],P,T,i.COLOR_ATTACHMENT0,dt,_t);else gt(W.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,dt,0);m(T)&&p(dt),e.unbindTexture()}P.depthBuffer&&Mt(P)}function zt(P){const T=P.textures;for(let W=0,J=T.length;W<J;W++){const et=T[W];if(m(et)){const $=v(P),Tt=n.get(et).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}const le=[],H=[];function mn(P){if(P.samples>0){if($t(P)===!1){const T=P.textures,W=P.width,J=P.height;let et=i.COLOR_BUFFER_BIT;const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(P),dt=T.length>1;if(dt)for(let _t=0;_t<T.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<T.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Qt=n.get(T[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,et,i.NEAREST),c===!0&&(le.length=0,H.length=0,le.push(i.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(le.push($),H.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<T.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Qt=n.get(T[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Zt(P){return Math.min(s.maxSamples,P.samples)}function $t(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ut(P){const T=o.render.frame;l.get(P)!==T&&(l.set(P,T),P.update())}function fe(P,T){const W=P.colorSpace,J=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==sr&&W!==Ei&&(Jt.getTransfer(W)===ae?(J!==Ke||et!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function It(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=Lt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=$t}function cv(i,t){function e(n,s=Ei){let r;const o=Jt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dd)return i.BYTE;if(n===Ud)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===Fl)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===jr)return i.HALF_FLOAT;if(n===Fd)return i.ALPHA;if(n===Bd)return i.RGB;if(n===Ke)return i.RGBA;if(n===zd)return i.LUMINANCE;if(n===Od)return i.LUMINANCE_ALPHA;if(n===Ws)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===ba)return i.RED_INTEGER;if(n===kd)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===Jo||n===Qo||n===ta||n===ea)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Wc||n===Xc||n===qc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Yc||n===Zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jc||n===Yc)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$c||n===Kc||n===Jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$c)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===ul||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hd||n===dl||n===fl||n===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lv extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class te extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=l.position.distanceTo(h.position),f=.02,g=.005;u.inputState.pinching&&d>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
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

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:hv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends rr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,l=null,h=null,d=null,f=null,g=null;const _=new fv,m=e.getContextAttributes();let p=null,v=null;const y=[],x=[],b=new Ft;let E=null;const w=new dn;w.viewport=new be;const A=new dn;A.viewport=new be;const S=[w,A],M=new lv;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=y[Z];return K===void 0&&(K=new cc,y[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=y[Z];return K===void 0&&(K=new cc,y[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=y[Z];return K===void 0&&(K=new cc,y[Z]=K),K.getHandSpace()};function U(Z){const K=x.indexOf(Z.inputSource);if(K===-1)return;const gt=y[K];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,u||o),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",N);for(let Z=0;Z<y.length;Z++){const K=x[Z];K!==null&&(x[Z]=null,y[Z].disconnect(K))}R=null,L=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",D),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ns(f.framebufferWidth,f.framebufferHeight,{format:Ke,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,gt=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Js:Ws,gt=m.stencil?Ks:Ii);const nt={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ns(d.textureWidth,d.textureHeight,{format:Ke,type:Ln,depthTexture:new ef(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(Z){for(let K=0;K<Z.removed.length;K++){const gt=Z.removed[K],j=x.indexOf(gt);j>=0&&(x[j]=null,y[j].disconnect(gt))}for(let K=0;K<Z.added.length;K++){const gt=Z.added[K];let j=x.indexOf(gt);if(j===-1){for(let Mt=0;Mt<y.length;Mt++)if(Mt>=x.length){x.push(gt),j=Mt;break}else if(x[Mt]===null){x[Mt]=gt,j=Mt;break}if(j===-1)break}const nt=y[j];nt&&nt.connect(gt)}}const B=new I,G=new I;function V(Z,K,gt){B.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(gt.matrixWorld);const j=B.distanceTo(G),nt=K.projectionMatrix.elements,Mt=gt.projectionMatrix.elements,Lt=nt[14]/(nt[10]-1),ee=nt[14]/(nt[10]+1),zt=(nt[9]+1)/nt[5],le=(nt[9]-1)/nt[5],H=(nt[8]-1)/nt[0],mn=(Mt[8]+1)/Mt[0],Zt=Lt*H,$t=Lt*mn,Ut=j/(-H+mn),fe=Ut*-H;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(fe),Z.translateZ(Ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),nt[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const It=Lt+Ut,P=ee+Ut,T=Zt-fe,W=$t+(j-fe),J=zt*ee/P*It,et=le*ee/P*It;Z.projectionMatrix.makePerspective(T,W,J,et,It,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let K=Z.near,gt=Z.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=A.near=w.near=K,M.far=A.far=w.far=gt,(R!==M.near||L!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,L=M.far),w.layers.mask=Z.layers.mask|2,A.layers.mask=Z.layers.mask|4,M.layers.mask=w.layers.mask|A.layers.mask;const j=Z.parent,nt=M.cameras;it(M,j);for(let Mt=0;Mt<nt.length;Mt++)it(nt[Mt],j);nt.length===2?V(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),at(Z,M,j)};function at(Z,K,gt){gt===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let lt=null;function yt(Z,K){if(l=K.getViewerPose(u||o),g=K,l!==null){const gt=l.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let j=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let Mt=0;Mt<gt.length;Mt++){const Lt=gt[Mt];let ee=null;if(f!==null)ee=f.getViewport(Lt);else{const le=h.getViewSubImage(d,Lt);ee=le.viewport,Mt===0&&(t.setRenderTargetTextures(v,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(v))}let zt=S[Mt];zt===void 0&&(zt=new dn,zt.layers.enable(Mt),zt.viewport=new be,S[Mt]=zt),zt.matrix.fromArray(Lt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Lt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ee.x,ee.y,ee.width,ee.height),Mt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(zt)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const Mt=h.getDepthInformation(gt[0]);Mt&&Mt.isValid&&Mt.texture&&_.init(t,Mt,s.renderState)}}for(let gt=0;gt<y.length;gt++){const j=x[gt],nt=y[gt];j!==null&&nt!==void 0&&nt.update(j,K,u||o)}lt&&lt(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const kt=new Qd;kt.setAnimationLoop(yt),this.setAnimationLoop=function(Z){lt=Z},this.dispose=function(){}}}const Gi=new In,mv=new Yt;function gv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$d(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Gi.copy(x),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function u(v,y){let x=s[v.id];x===void 0&&(g(v),x=l(v),s[v.id]=x,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function l(v){const y=h();v.__bindingPointIndex=y;const x=i.createBuffer(),b=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){const A=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=A.length;S<M;S++){const R=A[S];if(f(R,E,S,b)===!0){const L=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let N=0;N<U.length;N++){const B=U[N],G=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,L+D,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,D),D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,b){const E=v.value,w=y+"_"+x;if(b[w]===void 0)return typeof E=="number"||typeof E=="boolean"?b[w]=E:b[w]=E.clone(),!0;{const A=b[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return b[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;for(let w=0,A=y.length;w<A;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,R=S.length;M<R;M++){const L=S[M],U=Array.isArray(L.value)?L.value:[L.value];for(let D=0,N=U.length;D<N;D++){const B=U[D],G=_(B),V=x%b,it=V%G.boundary,at=V+it;x+=it,at!==0&&b-at<G.storage&&(x+=b-at),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=G.storage}}}const E=x%b;return E>0&&(x+=b-E),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:u,dispose:p}}class af{constructor(t={}){const{canvas:e=om(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Pi,this.toneMappingExposure=1;const x=this;let b=!1,E=0,w=0,A=null,S=-1,M=null;const R=new be,L=new be;let U=null;const D=new Rt(0);let N=0,B=e.width,G=e.height,V=1,it=null,at=null;const lt=new be(0,0,B,G),yt=new be(0,0,B,G);let kt=!1;const Z=new Ea;let K=!1,gt=!1;const j=new Yt,nt=new Yt,Mt=new I,Lt=new be,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function le(){return A===null?V:1}let H=n;function mn(C,z){return e.getContext(C,z)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qr}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),H===null){const z="webgl2";if(H=mn(z,C),H===null)throw mn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Zt,$t,Ut,fe,It,P,T,W,J,et,$,Tt,dt,_t,Qt,rt,xt,Nt,Bt,vt,Kt,qt,ue,F;function ut(){Zt=new b_(H),Zt.init(),qt=new cv(H,Zt),$t=new __(H,Zt,t,qt),Ut=new rv(H,Zt),$t.reverseDepthBuffer&&d&&Ut.buffers.depth.setReversed(!0),fe=new T_(H),It=new Wx,P=new av(H,Zt,Ut,It,$t,qt,fe),T=new v_(x),W=new S_(x),J=new Dm(H),ue=new m_(H,J),et=new w_(H,J,fe,ue),$=new C_(H,et,J,fe),Bt=new A_(H,$t,P),rt=new x_(It),Tt=new Gx(x,T,W,Zt,$t,ue,rt),dt=new gv(x,It),_t=new qx,Qt=new Jx(Zt),Nt=new p_(x,T,W,Ut,$,f,c),xt=new iv(x,$,$t),F=new _v(H,fe,$t,Ut),vt=new g_(H,Zt,fe),Kt=new E_(H,Zt,fe),fe.programs=Tt.programs,x.capabilities=$t,x.extensions=Zt,x.properties=It,x.renderLists=_t,x.shadowMap=xt,x.state=Ut,x.info=fe}ut();const Y=new pv(x,H);this.xr=Y,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Zt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Zt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(B,G,!1))},this.getSize=function(C){return C.set(B,G)},this.setSize=function(C,z,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,G=z,e.width=Math.floor(C*V),e.height=Math.floor(z*V),X===!0&&(e.style.width=C+"px",e.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(B*V,G*V).floor()},this.setDrawingBufferSize=function(C,z,X){B=C,G=z,V=X,e.width=Math.floor(C*X),e.height=Math.floor(z*X),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(lt)},this.setViewport=function(C,z,X,q){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,z,X,q),Ut.viewport(R.copy(lt).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(yt)},this.setScissor=function(C,z,X,q){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,z,X,q),Ut.scissor(L.copy(yt).multiplyScalar(V).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(C){Ut.setScissorTest(kt=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){at=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(C=!0,z=!0,X=!0){let q=0;if(C){let O=!1;if(A!==null){const ot=A.texture.format;O=ot===Hl||ot===kl||ot===ba}if(O){const ot=A.texture.type,pt=ot===Ln||ot===Ii||ot===Vr||ot===Ks||ot===Bl||ot===zl,St=Nt.getClearColor(),bt=Nt.getClearAlpha(),Ot=St.r,Gt=St.g,wt=St.b;pt?(g[0]=Ot,g[1]=Gt,g[2]=wt,g[3]=bt,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=Ot,_[1]=Gt,_[2]=wt,_[3]=bt,H.clearBufferiv(H.COLOR,0,_))}else q|=H.COLOR_BUFFER_BIT}z&&(q|=H.DEPTH_BUFFER_BIT),X&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Qt.dispose(),It.dispose(),T.dispose(),W.dispose(),$.dispose(),ue.dispose(),F.dispose(),Tt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",du),Y.removeEventListener("sessionend",fu),Bi.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=fe.autoReset,z=xt.enabled,X=xt.autoUpdate,q=xt.needsUpdate,O=xt.type;ut(),fe.autoReset=C,xt.enabled=z,xt.autoUpdate=X,xt.needsUpdate=q,xt.type=O}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Vt(C){const z=C.target;z.removeEventListener("dispose",Vt),Me(z)}function Me(C){Ve(C),It.remove(C)}function Ve(C){const z=It.get(C).programs;z!==void 0&&(z.forEach(function(X){Tt.releaseProgram(X)}),C.isShaderMaterial&&Tt.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,X,q,O,ot){z===null&&(z=ee);const pt=O.isMesh&&O.matrixWorld.determinant()<0,St=Qf(C,z,X,q,O);Ut.setMaterial(q,pt);let bt=X.index,Ot=1;if(q.wireframe===!0){if(bt=et.getWireframeAttribute(X),bt===void 0)return;Ot=2}const Gt=X.drawRange,wt=X.attributes.position;let ne=Gt.start*Ot,he=(Gt.start+Gt.count)*Ot;ot!==null&&(ne=Math.max(ne,ot.start*Ot),he=Math.min(he,(ot.start+ot.count)*Ot)),bt!==null?(ne=Math.max(ne,0),he=Math.min(he,bt.count)):wt!=null&&(ne=Math.max(ne,0),he=Math.min(he,wt.count));const pe=he-ne;if(pe<0||pe===1/0)return;ue.setup(O,q,St,X,bt);let nn,se=vt;if(bt!==null&&(nn=J.get(bt),se=Kt,se.setIndex(nn)),O.isMesh)q.wireframe===!0?(Ut.setLineWidth(q.wireframeLinewidth*le()),se.setMode(H.LINES)):se.setMode(H.TRIANGLES);else if(O.isLine){let At=q.linewidth;At===void 0&&(At=1),Ut.setLineWidth(At*le()),O.isLineSegments?se.setMode(H.LINES):O.isLineLoop?se.setMode(H.LINE_LOOP):se.setMode(H.LINE_STRIP)}else O.isPoints?se.setMode(H.POINTS):O.isSprite&&se.setMode(H.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)se.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const At=O._multiDrawStarts,Xn=O._multiDrawCounts,re=O._multiDrawCount,En=bt?J.get(bt).bytesPerElement:1,os=It.get(q).currentProgram.getUniforms();for(let ln=0;ln<re;ln++)os.setValue(H,"_gl_DrawID",ln),se.render(At[ln]/En,Xn[ln])}else if(O.isInstancedMesh)se.renderInstances(ne,pe,O.count);else if(X.isInstancedBufferGeometry){const At=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Xn=Math.min(X.instanceCount,At);se.renderInstances(ne,pe,Xn)}else se.render(ne,pe)};function oe(C,z,X){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=Je,C.needsUpdate=!0,Jr(C,z,X),C.side=Hn,C.needsUpdate=!0,Jr(C,z,X),C.side=fn):Jr(C,z,X)}this.compile=function(C,z,X=null){X===null&&(X=C),p=Qt.get(X),p.init(z),y.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),C!==X&&C.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const q=new Set;return C.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const St=ot[pt];oe(St,X,O),q.add(St)}else oe(ot,X,O),q.add(ot)}),y.pop(),p=null,q},this.compileAsync=function(C,z,X=null){const q=this.compile(C,z,X);return new Promise(O=>{function ot(){if(q.forEach(function(pt){It.get(pt).currentProgram.isReady()&&q.delete(pt)}),q.size===0){O(C);return}setTimeout(ot,10)}Zt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let wn=null;function Wn(C){wn&&wn(C)}function du(){Bi.stop()}function fu(){Bi.start()}const Bi=new Qd;Bi.setAnimationLoop(Wn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(C){wn=C,Y.setAnimationLoop(C),C===null?Bi.stop():Bi.start()},Y.addEventListener("sessionstart",du),Y.addEventListener("sessionend",fu),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,z,A),p=Qt.get(C,y.length),p.init(z),y.push(p),nt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(nt),gt=this.localClippingEnabled,K=rt.init(this.clippingPlanes,gt),m=_t.get(C,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Ua(ot,z,-1/0,x.sortObjects)}Ua(C,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(it,at),zt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,zt&&Nt.addToRenderList(m,C),this.info.render.frame++,K===!0&&rt.beginShadows();const X=p.state.shadowsArray;xt.render(X,C,z),K===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,O=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ot=z.cameras;if(O.length>0)for(let pt=0,St=ot.length;pt<St;pt++){const bt=ot[pt];mu(q,O,C,bt)}zt&&Nt.render(C);for(let pt=0,St=ot.length;pt<St;pt++){const bt=ot[pt];pu(m,C,bt,bt.viewport)}}else O.length>0&&mu(q,O,C,z),zt&&Nt.render(C),pu(m,C,z);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,z),ue.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ua(C,z,X,q){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){q&&Lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nt);const pt=$.update(C),St=C.material;St.visible&&m.push(C,pt,St,X,Lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const pt=$.update(C),St=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Lt.copy(C.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Lt.copy(pt.boundingSphere.center)),Lt.applyMatrix4(C.matrixWorld).applyMatrix4(nt)),Array.isArray(St)){const bt=pt.groups;for(let Ot=0,Gt=bt.length;Ot<Gt;Ot++){const wt=bt[Ot],ne=St[wt.materialIndex];ne&&ne.visible&&m.push(C,pt,ne,X,Lt.z,wt)}}else St.visible&&m.push(C,pt,St,X,Lt.z,null)}}const ot=C.children;for(let pt=0,St=ot.length;pt<St;pt++)Ua(ot[pt],z,X,q)}function pu(C,z,X,q){const O=C.opaque,ot=C.transmissive,pt=C.transparent;p.setupLightsView(X),K===!0&&rt.setGlobalState(x.clippingPlanes,X),q&&Ut.viewport(R.copy(q)),O.length>0&&Kr(O,z,X),ot.length>0&&Kr(ot,z,X),pt.length>0&&Kr(pt,z,X),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function mu(C,z,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ns(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?jr:Ln,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ot=p.state.transmissionRenderTarget[q.id],pt=q.viewport||R;ot.setSize(pt.z,pt.w);const St=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(D),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear(),zt&&Nt.render(X);const bt=x.toneMapping;x.toneMapping=Pi;const Ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),K===!0&&rt.setGlobalState(x.clippingPlanes,q),Kr(C,X,q),P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let wt=0,ne=z.length;wt<ne;wt++){const he=z[wt],pe=he.object,nn=he.geometry,se=he.material,At=he.group;if(se.side===fn&&pe.layers.test(q.layers)){const Xn=se.side;se.side=Je,se.needsUpdate=!0,gu(pe,X,q,nn,se,At),se.side=Xn,se.needsUpdate=!0,Gt=!0}}Gt===!0&&(P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot))}x.setRenderTarget(St),x.setClearColor(D,N),Ot!==void 0&&(q.viewport=Ot),x.toneMapping=bt}function Kr(C,z,X){const q=z.isScene===!0?z.overrideMaterial:null;for(let O=0,ot=C.length;O<ot;O++){const pt=C[O],St=pt.object,bt=pt.geometry,Ot=q===null?pt.material:q,Gt=pt.group;St.layers.test(X.layers)&&gu(St,z,X,bt,Ot,Gt)}}function gu(C,z,X,q,O,ot){C.onBeforeRender(x,z,X,q,O,ot),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.onBeforeRender(x,z,X,q,C,ot),O.transparent===!0&&O.side===fn&&O.forceSinglePass===!1?(O.side=Je,O.needsUpdate=!0,x.renderBufferDirect(X,z,q,O,C,ot),O.side=Hn,O.needsUpdate=!0,x.renderBufferDirect(X,z,q,O,C,ot),O.side=fn):x.renderBufferDirect(X,z,q,O,C,ot),C.onAfterRender(x,z,X,q,O,ot)}function Jr(C,z,X){z.isScene!==!0&&(z=ee);const q=It.get(C),O=p.state.lights,ot=p.state.shadowsArray,pt=O.state.version,St=Tt.getParameters(C,O.state,ot,z,X),bt=Tt.getProgramCacheKey(St);let Ot=q.programs;q.environment=C.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(C.isMeshStandardMaterial?W:T).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Ot===void 0&&(C.addEventListener("dispose",Vt),Ot=new Map,q.programs=Ot);let Gt=Ot.get(bt);if(Gt!==void 0){if(q.currentProgram===Gt&&q.lightsStateVersion===pt)return xu(C,St),Gt}else St.uniforms=Tt.getUniforms(C),C.onBeforeCompile(St,x),Gt=Tt.acquireProgram(St,bt),Ot.set(bt,Gt),q.uniforms=St.uniforms;const wt=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(wt.clippingPlanes=rt.uniform),xu(C,St),q.needsLights=ep(C),q.lightsStateVersion=pt,q.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.directionalShadowMap.value=O.state.directionalShadowMap,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotShadowMap.value=O.state.spotShadowMap,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMap.value=O.state.pointShadowMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Gt,q.uniformsList=null,Gt}function _u(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=ia.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function xu(C,z){const X=It.get(C);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Qf(C,z,X,q,O){z.isScene!==!0&&(z=ee),P.resetTextureUnits();const ot=z.fog,pt=q.isMeshStandardMaterial?z.environment:null,St=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:sr,bt=(q.isMeshStandardMaterial?W:T).get(q.envMap||pt),Ot=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,he=!!X.morphAttributes.color;let pe=Pi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=x.toneMapping);const nn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=nn!==void 0?nn.length:0,At=It.get(q),Xn=p.state.lights;if(K===!0&&(gt===!0||C!==M)){const gn=C===M&&q.id===S;rt.setState(q,C,gn)}let re=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Xn.state.version||At.outputColorSpace!==St||O.isBatchedMesh&&At.batching===!1||!O.isBatchedMesh&&At.batching===!0||O.isBatchedMesh&&At.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&At.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&At.instancing===!1||!O.isInstancedMesh&&At.instancing===!0||O.isSkinnedMesh&&At.skinning===!1||!O.isSkinnedMesh&&At.skinning===!0||O.isInstancedMesh&&At.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&At.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&At.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&At.instancingMorph===!1&&O.morphTexture!==null||At.envMap!==bt||q.fog===!0&&At.fog!==ot||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==rt.numPlanes||At.numIntersection!==rt.numIntersection)||At.vertexAlphas!==Ot||At.vertexTangents!==Gt||At.morphTargets!==wt||At.morphNormals!==ne||At.morphColors!==he||At.toneMapping!==pe||At.morphTargetsCount!==se)&&(re=!0):(re=!0,At.__version=q.version);let En=At.currentProgram;re===!0&&(En=Jr(q,z,O));let os=!1,ln=!1,hr=!1;const me=En.getUniforms(),Nn=At.uniforms;if(Ut.useProgram(En.program)&&(os=!0,ln=!0,hr=!0),q.id!==S&&(S=q.id,ln=!0),os||M!==C){Ut.buffers.depth.getReversed()?(j.copy(C.projectionMatrix),cm(j),lm(j),me.setValue(H,"projectionMatrix",j)):me.setValue(H,"projectionMatrix",C.projectionMatrix),me.setValue(H,"viewMatrix",C.matrixWorldInverse);const fi=me.map.cameraPosition;fi!==void 0&&fi.setValue(H,Mt.setFromMatrixPosition(C.matrixWorld)),$t.logarithmicDepthBuffer&&me.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,ln=!0,hr=!0)}if(O.isSkinnedMesh){me.setOptional(H,O,"bindMatrix"),me.setOptional(H,O,"bindMatrixInverse");const gn=O.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),me.setValue(H,"boneTexture",gn.boneTexture,P))}O.isBatchedMesh&&(me.setOptional(H,O,"batchingTexture"),me.setValue(H,"batchingTexture",O._matricesTexture,P),me.setOptional(H,O,"batchingIdTexture"),me.setValue(H,"batchingIdTexture",O._indirectTexture,P),me.setOptional(H,O,"batchingColorTexture"),O._colorsTexture!==null&&me.setValue(H,"batchingColorTexture",O._colorsTexture,P));const dr=X.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Bt.update(O,X,En),(ln||At.receiveShadow!==O.receiveShadow)&&(At.receiveShadow=O.receiveShadow,me.setValue(H,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Nn.envMap.value=bt,Nn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(Nn.envMapIntensity.value=z.environmentIntensity),ln&&(me.setValue(H,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&tp(Nn,hr),ot&&q.fog===!0&&dt.refreshFogUniforms(Nn,ot),dt.refreshMaterialUniforms(Nn,q,V,G,p.state.transmissionRenderTarget[C.id]),ia.upload(H,_u(At),Nn,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ia.upload(H,_u(At),Nn,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(H,"center",O.center),me.setValue(H,"modelViewMatrix",O.modelViewMatrix),me.setValue(H,"normalMatrix",O.normalMatrix),me.setValue(H,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const gn=q.uniformsGroups;for(let fi=0,pi=gn.length;fi<pi;fi++){const vu=gn[fi];F.update(vu,En),F.bind(vu,En)}}return En}function tp(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function ep(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,z,X){It.get(C.texture).__webglTexture=z,It.get(C.depthTexture).__webglTexture=X;const q=It.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){const X=It.get(C);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,X=0){A=C,E=z,w=X;let q=!0,O=null,ot=!1,pt=!1;if(C){const bt=It.get(C);if(bt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(H.FRAMEBUFFER,null),q=!1;else if(bt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(bt.__hasExternalTextures)P.rebindTextures(C,It.get(C.texture).__webglTexture,It.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const wt=C.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&It.has(wt)&&(C.width!==wt.image.width||C.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Ot=C.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(pt=!0);const Gt=It.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?O=Gt[z][X]:O=Gt[z],ot=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?O=It.get(C).__webglMultisampledFramebuffer:Array.isArray(Gt)?O=Gt[X]:O=Gt,R.copy(C.viewport),L.copy(C.scissor),U=C.scissorTest}else R.copy(lt).multiplyScalar(V).floor(),L.copy(yt).multiplyScalar(V).floor(),U=kt;if(Ut.bindFramebuffer(H.FRAMEBUFFER,O)&&q&&Ut.drawBuffers(C,O),Ut.viewport(R),Ut.scissor(L),Ut.setScissorTest(U),ot){const bt=It.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,X)}else if(pt){const bt=It.get(C.texture),Ot=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,bt.__webglTexture,X||0,Ot)}S=-1},this.readRenderTargetPixels=function(C,z,X,q,O,ot,pt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){Ut.bindFramebuffer(H.FRAMEBUFFER,St);try{const bt=C.texture,Ot=bt.format,Gt=bt.type;if(!$t.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-q&&X>=0&&X<=C.height-O&&H.readPixels(z,X,q,O,qt.convert(Ot),qt.convert(Gt),ot)}finally{const bt=A!==null?It.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(H.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(C,z,X,q,O,ot,pt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){const bt=C.texture,Ot=bt.format,Gt=bt.type;if(!$t.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=C.width-q&&X>=0&&X<=C.height-O){Ut.bindFramebuffer(H.FRAMEBUFFER,St);const wt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,wt),H.bufferData(H.PIXEL_PACK_BUFFER,ot.byteLength,H.STREAM_READ),H.readPixels(z,X,q,O,qt.convert(Ot),qt.convert(Gt),0);const ne=A!==null?It.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(H.FRAMEBUFFER,ne);const he=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await am(H,he,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,wt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ot),H.deleteBuffer(wt),H.deleteSync(he),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,z=null,X=0){C.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-X),O=Math.floor(C.image.width*q),ot=Math.floor(C.image.height*q),pt=z!==null?z.x:0,St=z!==null?z.y:0;P.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,pt,St,O,ot),Ut.unbindTexture()},this.copyTextureToTexture=function(C,z,X=null,q=null,O=0){C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],z=arguments[2],O=arguments[3]||0,X=null);let ot,pt,St,bt,Ot,Gt,wt,ne,he;const pe=C.isCompressedTexture?C.mipmaps[O]:C.image;X!==null?(ot=X.max.x-X.min.x,pt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,bt=X.min.x,Ot=X.min.y,Gt=X.isBox3?X.min.z:0):(ot=pe.width,pt=pe.height,St=pe.depth||1,bt=0,Ot=0,Gt=0),q!==null?(wt=q.x,ne=q.y,he=q.z):(wt=0,ne=0,he=0);const nn=qt.convert(z.format),se=qt.convert(z.type);let At;z.isData3DTexture?(P.setTexture3D(z,0),At=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),At=H.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),At=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);const Xn=H.getParameter(H.UNPACK_ROW_LENGTH),re=H.getParameter(H.UNPACK_IMAGE_HEIGHT),En=H.getParameter(H.UNPACK_SKIP_PIXELS),os=H.getParameter(H.UNPACK_SKIP_ROWS),ln=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,bt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ot),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gt);const hr=C.isDataArrayTexture||C.isData3DTexture,me=z.isDataArrayTexture||z.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Nn=It.get(C),dr=It.get(z),gn=It.get(Nn.__renderTarget),fi=It.get(dr.__renderTarget);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let pi=0;pi<St;pi++)hr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(C).__webglTexture,O,Gt+pi),C.isDepthTexture?(me&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(z).__webglTexture,O,he+pi),H.blitFramebuffer(bt,Ot,ot,pt,wt,ne,ot,pt,H.DEPTH_BUFFER_BIT,H.NEAREST)):me?H.copyTexSubImage3D(At,O,wt,ne,he+pi,bt,Ot,ot,pt):H.copyTexSubImage2D(At,O,wt,ne,he+pi,bt,Ot,ot,pt);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else me?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(At,O,wt,ne,he,ot,pt,St,nn,se,pe.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(At,O,wt,ne,he,ot,pt,St,nn,pe.data):H.texSubImage3D(At,O,wt,ne,he,ot,pt,St,nn,se,pe):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,O,wt,ne,ot,pt,nn,se,pe.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,O,wt,ne,pe.width,pe.height,nn,pe.data):H.texSubImage2D(H.TEXTURE_2D,O,wt,ne,ot,pt,nn,se,pe);H.pixelStorei(H.UNPACK_ROW_LENGTH,Xn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,re),H.pixelStorei(H.UNPACK_SKIP_PIXELS,En),H.pixelStorei(H.UNPACK_SKIP_ROWS,os),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ln),O===0&&z.generateMipmaps&&H.generateMipmap(At),Ut.unbindTexture()},this.copyTextureToTexture3D=function(C,z,X=null,q=null,O=0){return C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,C=arguments[2],z=arguments[3],O=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,z,X,q,O)},this.initRenderTarget=function(C){It.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ut.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,Ut.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class ql{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new ql(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cf extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qs extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,c,u=pn,l=pn,h,d){super(null,o,a,c,u,l,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yh extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new Yt,Mh=new Yt,Mo=[],Sh=new we,xv=new Yt,_r=new ce,xr=new bn;class Vn extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new we),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Sh.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),xr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Mh.multiplyMatrices(n,Ms),_r.matrixWorld=Mh,_r.raycast(t,Mo);for(let o=0,a=Mo.length;o<a;o++){const c=Mo[o];c.instanceId=r,c.object=this,e.push(c)}Mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(s*this.count),s,this.count,Ol,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function lc(i,t){return i-t}function vv(i,t){return i.z-t.z}function yv(i,t){return t.z-i.z}class Mv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const sn=new Yt,Sv=new Rt(1,1,1),uc=new Ea,So=new we,Wi=new bn,vr=new I,bh=new I,bv=new I,hc=new Mv,Xe=new ce,bo=[];function wv(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function Xi(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class Ev extends ce{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,s){super(new Ae,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new qs(e,t,t,Ke,Mn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new qs(e,t,t,ba,Ii);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new qs(e,t,t,Ke,Mn);n.colorSpace=Jt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:u}=o,l=new a.constructor(n*c),h=new ye(l,c,u);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new ye(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new we);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,sn),this.getBoundingBoxAt(r,So).applyMatrix4(sn),t.union(So)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,sn),this.getBoundingSphereAt(r,Wi).applyMatrix4(sn),t.union(Wi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(lc),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;sn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(Sv.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(lc),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,u=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const l in n.attributes){const h=e.getAttribute(l),d=n.getAttribute(l);wv(h,d,c);const f=h.itemSize;for(let g=h.count,_=u;g<_;g++){const m=c+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,u*f)}if(s){const l=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(l+d,c+o.getX(d));for(let d=o.count,f=h;d<f;d++)r.setX(l+d,c);r.needsUpdate=!0,r.addUpdateRange(l,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=s[o],u=n[c];if(u.active!==!1){if(r.index!==null){if(u.indexStart!==e){const{indexStart:l,vertexStart:h,reservedIndexCount:d}=u,f=r.index,g=f.array,_=t-h;for(let m=l;m<l+d;m++)g[m]=g[m]+_;f.array.copyWithin(e,l,l+d),f.addUpdateRange(e,d),u.indexStart=e}e+=u.reservedIndexCount}if(u.vertexStart!==t){const{vertexStart:l,reservedVertexCount:h}=u,d=r.attributes;for(const f in d){const g=d[f],{array:_,itemSize:m}=g;_.copyWithin(t*m,l*m,(l+h)*m),g.addUpdateRange(t*m,h*m)}u.vertexStart=t}t+=u.reservedVertexCount,u.start=r.index?u.indexStart:u.vertexStart,this._nextIndexStart=r.index?u.indexStart+u.reservedIndexCount:0,this._nextVertexStart=u.vertexStart+u.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new we,o=n.index,a=n.attributes.position;for(let c=s.start,u=s.start+s.count;c<u;c++){let l=c;o&&(l=o.getX(l)),r.expandByPoint(vr.fromBufferAttribute(a,l))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new bn;this.getBoundingBoxAt(t,So),So.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let u=s.start,l=s.start+s.count;u<l;u++){let h=u;o&&(h=o.getX(h)),vr.fromBufferAttribute(a,h),c=Math.max(c,r.center.distanceToSquared(vr))}r.radius=Math.sqrt(c),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._instanceInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,s=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=s.length||s[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(lc);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);Xi(this._multiDrawCounts,s),Xi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Xi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Xi(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Xi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ae,this._initializeGeometry(r));const o=this.geometry;r.index&&Xi(r.index.array,o.index.array);for(const a in r.attributes)Xi(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Xe.material=this.material,Xe.geometry.index=o.index,Xe.geometry.attributes=o.attributes,Xe.geometry.boundingBox===null&&(Xe.geometry.boundingBox=new we),Xe.geometry.boundingSphere===null&&(Xe.geometry.boundingSphere=new bn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const u=n[a].geometryIndex,l=s[u];Xe.geometry.setDrawRange(l.start,l.count),this.getMatrixAt(a,Xe.matrixWorld).premultiply(r),this.getBoundingBoxAt(u,Xe.geometry.boundingBox),this.getBoundingSphereAt(u,Xe.geometry.boundingSphere),Xe.raycast(t,bo);for(let h=0,d=bo.length;h<d;h++){const f=bo[h];f.object=this,f.batchId=a,e.push(f)}bo.length=0}Xe.material=null,Xe.geometry.index=null,Xe.geometry.attributes={},Xe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,u=this._multiDrawStarts,l=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(sn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),uc.setFromProjectionMatrix(sn,t.coordinateSystem));let _=0;if(this.sortObjects){sn.copy(this.matrixWorld).invert(),vr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(sn),bh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(sn);for(let v=0,y=c.length;v<y;v++)if(c[v].visible&&c[v].active){const x=c[v].geometryIndex;this.getMatrixAt(v,sn),this.getBoundingSphereAt(x,Wi).applyMatrix4(sn);let b=!1;if(d&&(b=!uc.intersectsSphere(Wi)),!b){const E=h[x],w=bv.subVectors(Wi.center,vr).dot(bh);hc.push(E.start,E.count,w,v)}}const m=hc.list,p=this.customSort;p===null?m.sort(r.transparent?yv:vv):p.call(this,m,n);for(let v=0,y=m.length;v<y;v++){const x=m[v];u[_]=x.start*a,l[_]=x.count,g[_]=x.index,_++}hc.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const v=c[m].geometryIndex;let y=!1;if(d&&(this.getMatrixAt(m,sn),this.getBoundingSphereAt(v,Wi).applyMatrix4(sn),y=!uc.intersectsSphere(Wi)),!y){const x=h[v];u[_]=x.start*a,l[_]=x.count,g[_]=m,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class Tv extends Fi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const da=new I,fa=new I,wh=new Yt,yr=new Yr,wo=new bn,dc=new I,Eh=new I;class Aa extends ve{constructor(t=new Ae,e=new Tv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;wh.copy(s).invert(),yr.copy(t.ray).applyMatrix4(wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=u){const p=l.getX(_),v=l.getX(_+1),y=Eo(this,t,yr,c,p,v);y&&e.push(y)}if(this.isLineLoop){const _=l.getX(g-1),m=l.getX(f),p=Eo(this,t,yr,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=u){const p=Eo(this,t,yr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Eo(this,t,yr,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,dc,Eh)>n)return;dc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(dc);if(!(c<t.near||c>t.far))return{distance:c,point:Eh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Th=new I,Ah=new I;class lf extends Aa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Th.fromBufferAttribute(e,s),Ah.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Th.distanceTo(Ah);t.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uf extends Aa{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Av extends Fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ch=new Yt,gl=new Yr,To=new bn,Ao=new I;class hf extends ve{constructor(t=new Ae,e=new Av){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Ch.copy(s).invert(),gl.copy(t.ray).applyMatrix4(Ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=u.getX(g);Ao.fromBufferAttribute(h,m),Rh(Ao,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ao.fromBufferAttribute(h,g),Rh(Ao,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rh(i,t,e,n,s,r,o){const a=gl.distanceSqToPoint(i);if(a<e){const c=new I;gl.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Un extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const l=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(f,2));function v(){const x=new I,b=new I;let E=0;const w=(e-t)/n;for(let A=0;A<=r;A++){const S=[],M=A/r,R=M*(e-t)+t;for(let L=0;L<=s;L++){const U=L/s,D=U*c+a,N=Math.sin(D),B=Math.cos(D);b.x=R*N,b.y=-M*n+m,b.z=R*B,h.push(b.x,b.y,b.z),x.set(N,w,B).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-M),S.push(g++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const M=_[S][A],R=_[S+1][A],L=_[S+1][A+1],U=_[S][A+1];(t>0||S!==0)&&(l.push(M,R,U),E+=3),(e>0||S!==r-1)&&(l.push(R,L,U),E+=3)}u.addGroup(p,E,0),p+=E}function y(x){const b=g,E=new Ft,w=new I;let A=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const R=g;for(let L=0;L<=s;L++){const D=L/s*c+a,N=Math.cos(D),B=Math.sin(D);w.x=S*B,w.y=m*M,w.z=S*N,h.push(w.x,w.y,w.z),d.push(0,M,0),E.x=N*.5+.5,E.y=B*.5*M+.5,f.push(E.x,E.y),g++}for(let L=0;L<s;L++){const U=b+L,D=R+L;x===!0?l.push(D,D+1,U):l.push(D+1,D,U),A+=3}u.addGroup(p,A,x===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jl extends Un{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new jl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yl extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),u(n),l(),this.setAttribute("position",new tn(r,3)),this.setAttribute("normal",new tn(r.slice(),3)),this.setAttribute("uv",new tn(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new I,x=new I,b=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],x),f(e[E+2],b),c(y,x,b,v)}function c(v,y,x,b){const E=b+1,w=[];for(let A=0;A<=E;A++){w[A]=[];const S=v.clone().lerp(x,A/E),M=y.clone().lerp(x,A/E),R=E-A;for(let L=0;L<=R;L++)L===0&&A===E?w[A][L]=S:w[A][L]=S.clone().lerp(M,L/R)}for(let A=0;A<E;A++)for(let S=0;S<2*(E-A)-1;S++){const M=Math.floor(S/2);S%2===0?(d(w[A][M+1]),d(w[A+1][M]),d(w[A][M])):(d(w[A][M+1]),d(w[A+1][M+1]),d(w[A+1][M]))}}function u(v){const y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function l(){const v=new I;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(x,1-b)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],b=o[v+4],E=Math.max(y,x,b),w=Math.min(y,x,b);E>.9&&w<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const v=new I,y=new I,x=new I,b=new I,E=new Ft,w=new Ft,A=new Ft;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),b.copy(v).add(y).add(x).divideScalar(3);const R=m(b);_(E,M+0,v,R),_(w,M+2,y,R),_(A,M+4,x,R)}}function _(v,y,x,b){b<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.vertices,t.indices,t.radius,t.details)}}class Zl extends Yl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zl(t.radius,t.detail)}}class Ph extends Fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ca extends Fi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class df extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ff extends df{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fc=new Yt,Lh=new I,Ih=new I;class Cv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rv extends Cv{constructor(){super(new tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pa extends df{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Rv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Pv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dh(){return performance.now()}const Uh=new Yt;class Ra{constructor(t,e,n=0,s=1/0){this.ray=new Yr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(t,e=!0,n=[]){return _l(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_l(t[s],this,n,e);return n.sort(Nh),n}}function Nh(i,t){return i.distance-t.distance}function _l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)_l(r[o],t,e,!0)}}const Fh=new I,Co=new I;class ui{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Fh.subVectors(t,this.start),Co.subVectors(this.end,this.start);const n=Co.dot(Co);let r=Co.dot(Fh)/n;return e&&(r=qe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);const tt={sand:"#e2b57a",ridge:"#c47a4a",sea:"#5aa8b5",seaDeep:"#2e6d7a",sky:"#8ec8e8",cloud:"#f4f1ea",grass:"#5a8f3c",moss:"#6a7c32",jade:"#2f7a62",rock:"#8a7a68",gold:"#d4b45a",shadow:"#3d4a32",guiBark:"#c46a42",guiLeaf:"#4a8a40",miguBark:"#5a4a40",miguLeaf:"#5a7a3c",miguGlow:"#f0d56a",songBark:"#6e5846",songLeaf:"#3d7a40",baiBark:"#7a6a56",baiLeaf:"#3a6a3c",zongBark:"#9a724c",zongFrond:"#5a8a3c",tanBark:"#6a4038",tanLeaf:"#4a6a38",yanBark:"#6e5c50",yanLeaf:"#6a8a48",yanFruit:"#d24a28",yanCalyx:"#3a5a28",taoBark:"#7a5848",taoLeaf:"#4a8a3c",taoFruit:"#e07048",ziBark:"#6a5a48",ziLeaf:"#4a7a38",ziPod:"#8a7a48",liuBark:"#6e5a46",liuLeaf:"#6a9a40",zhuBark:"#7a8a48",zhuLeaf:"#4a8a38",shanBark:"#6a5244",shanLeaf:"#3a6e3c",zhuyuBlade:"#3a6a40",zhuyuFloret:"#7ec8b8",lacquerBark:"#8a3a28",lacquer:"#5a1c14",furTiger:"#c46a28",furCow:"#6b5a3a",furCowSpot:"#f0e6d4",furHorse:"#c4a06a",furFox:"#b85a28",furWhite:"#f2efe8",furMacaque:"#8a5a38",furPink:"#e39a88",furSheep:"#e8dcc8",furCivet:"#7a6248",scale:"#3d6a48",carp:"#b03a32",shell:"#4a5a3a",skin:"#e8c9a8",beak:"#c4a35a",horn:"#d8c9a8",wing:"#d8c9a0",eye:"#1a1510",eyeWhite:"#f4f0e6"};class Bh{constructor(t,e){ge(this,"renderer");ge(this,"scene");ge(this,"camera");ge(this,"clock",new Pv);ge(this,"frame",null);ge(this,"raf",0);ge(this,"fpsEl",null);ge(this,"fpsFrames",0);ge(this,"fpsAcc",0);ge(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});this.renderer=new af({canvas:t,antialias:e==="high",powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e==="high"?1.5:1.1)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=an,this.renderer.toneMapping=Nl,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!1,this.scene=new cf,this.scene.background=new Rt(tt.sky),this.renderer.setClearColor(new Rt(tt.sky),1),this.camera=new dn(58,window.innerWidth/window.innerHeight,.12,8e3),this.camera.position.set(0,12,18);const n=t.parentElement;if(n){const s=document.createElement("div");s.className="fps-meter",s.textContent="— FPS",n.appendChild(s),this.fpsEl=s}window.addEventListener("resize",this.onResize)}setFrame(t){this.frame=t}start(){const t=()=>{var s;this.raf=requestAnimationFrame(t);const e=Math.min(this.clock.getDelta(),.05),n=this.clock.elapsedTime;(s=this.frame)==null||s.call(this,e,n),this.renderer.render(this.scene,this.camera),this.tickFps(e)};t()}stop(){cancelAnimationFrame(this.raf)}dispose(){var t;this.stop(),window.removeEventListener("resize",this.onResize),(t=this.fpsEl)==null||t.remove(),this.fpsEl=null,this.renderer.dispose()}tickFps(t){if(this.fpsFrames+=1,this.fpsAcc+=t,this.fpsAcc<.4)return;const e=Math.round(this.fpsFrames/this.fpsAcc);this.fpsFrames=0,this.fpsAcc=0,this.fpsEl&&(this.fpsEl.textContent=`${e} FPS`)}}const pf="kunlun-quality";function tr(){return localStorage.getItem(pf)==="low"?"low":"high"}function Lv(i){localStorage.setItem(pf,i)}function Iv(i){return i==="high"?3:2}const mf="kunlun-mute",gf=.12;function er(){return localStorage.getItem(mf)==="1"}function Dv(i){localStorage.setItem(mf,i?"1":"0")}let sa=null;function Uv(i){sa=i,$l()}function _f(){return Dv(!er()),$l(),er()}function $l(){sa==null||sa.setGain(er()?0:gf)}class Nv{constructor(){ge(this,"ctx",null);ge(this,"master",null)}start(){if(this.ctx)return;const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=er()?0:gf,this.master.connect(t.destination),this.noise(t,180,.35,.7),this.noise(t,80,.22,.45)}setGain(t){this.master&&(this.master.gain.value=t)}noise(t,e,n,s){const r=t.createBuffer(1,t.sampleRate*2,t.sampleRate),o=r.getChannelData(0);for(let l=0;l<o.length;l+=1)o[l]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=r,a.loop=!0;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=e,c.Q.value=n;const u=t.createGain();u.gain.value=s,a.connect(c).connect(u).connect(this.master),a.start()}}function Fv(i,t){i.innerHTML=`
    <section class="hub">
      <h1>崑崙</h1>
      <div class="sub">南山經 · 草木與海</div>
      <div class="modes">
        <button class="mode-card" data-mode="explore">
          <h2>探南山</h2>
          <p>沿招搖至箕尾步行。桂、祝餘、迷穀依經文所記而生。</p>
        </button>
        <button class="mode-card" data-mode="workshop">
          <h2>造島</h2>
          <p>堆土、開海，把山海草木拖到自己的島上。</p>
        </button>
      </div>
      <p style="margin-top:2rem;opacity:.75">
        畫質
        <button class="ghost" id="q">${tr()==="high"?"細緻":"流暢"}</button>
        ·
        <button class="ghost" id="mute">${er()?"靜音中":"靜音"}</button>
        · WASD · 觸控搖桿
      </p>
    </section>
  `,i.querySelectorAll("[data-mode]").forEach(e=>{e.addEventListener("click",()=>{t(e.dataset.mode)})}),i.querySelector("#q").addEventListener("click",e=>{const n=tr()==="high"?"low":"high";Lv(n),e.currentTarget.textContent=n==="high"?"細緻":"流暢"}),i.querySelector("#mute").addEventListener("click",e=>{const n=_f();e.currentTarget.textContent=n?"靜音中":"靜音"})}const zh=new Map;function ht(i,t={}){const e=i+JSON.stringify(t),n=zh.get(e);if(n)return n;const s=new Ca({color:i,flatShading:!0,...t});return zh.set(e,s),s}function cn(i){return ht(i,{side:fn})}function nr(i,t,e=6){const n=new Un(i,i,t,e,1);return n.translate(0,t/2,0),n}function $r(i,t,e,n=6){const s=new Un(t,i,e,n,1);return s.translate(0,e/2,0),s}function ra(i,t,e=6){const n=new jl(i,t,e,1);return n.translate(0,t/2,0),n}function is(i){return new Zl(i,0)}function Et(i,t,e){const n=new Di(i,t,e);return n.translate(0,t/2,0),n}function He(i,t){const e=i*.5,n=t*.58,s=t*.42,r=new Float32Array([0,n,0,e,0,0,0,-s,0,-e,0,0,0,0,i*.04]),o=[0,1,4,1,2,4,2,3,4,3,0,4,0,3,2,0,2,1],a=new Ae;return a.setAttribute("position",new ye(r,3)),a.setIndex(o),a.computeVertexNormals(),a}function ma(i,t=5){const e=[0,0,i*.05],n=[],s=t*2;for(let o=0;o<s;o+=1){const a=o/s*Math.PI*2-Math.PI/2,c=o%2===0?i:i*.38;e.push(Math.cos(a)*c,Math.sin(a)*c,0)}for(let o=0;o<s;o+=1)n.push(0,o+1,(o+1)%s+1);const r=new Ae;return r.setAttribute("position",new ye(new Float32Array(e),3)),r.setIndex(n),r.computeVertexNormals(),r}function Kl(i,t){const e=i*.5,n=new Float32Array([-e,0,0,e,0,0,0,t,i*.08]),s=new Ae;return s.setAttribute("position",new ye(n,3)),s.setIndex([0,1,2,0,2,1]),s.computeVertexNormals(),s}function Br(i,t,e=.04){const n=i*.5,s=e*.5,r=new Float32Array([0,0,s,n,-t*.35,s,0,-t,s,-n,-t*.35,s,0,0,-s,n,-t*.35,-s,0,-t,-s,-n,-t*.35,-s]),o=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0],a=new Ae;return a.setAttribute("position",new ye(r,3)),a.setIndex(o),a.computeVertexNormals(),a}function Oh(i,t,e,n=.62,s=6){const r=new Un(e,t,i,s,1);return r.rotateX(Math.PI/2),r.scale(1,n,1),r.translate(0,Math.max(t,e)*n,0),r}function on(i,t,e,n,s,r){const o=e.x-t.x,a=e.y-t.y,c=e.z-t.z,u=Math.hypot(o,a,c)||.04,l=new ce($r(n,s,u,6),r);return l.castShadow=!1,l.receiveShadow=!1,Bv(l,t,e),i.add(l),l}function Bv(i,t,e){const n=t.x,s=t.y,r=t.z;i.position.set(n,s,r);const o=e.x-n,a=e.y-s,c=e.z-r,u=Math.hypot(o,a,c)||1;return i.quaternion.setFromUnitVectors(new I(0,1,0),new I(o/u,a/u,c/u)),i}function st(i,t,e,n=0,s=0,r=0){const o=new ce(t,e);return o.position.set(n,s,r),o.castShadow=!1,o.receiveShadow=!1,i.add(o),o}const zv=()=>ht(tt.guiBark),xf=()=>ht(tt.miguBark),Ov=()=>ht(tt.yanBark),kv=()=>ht(tt.lacquerBark),Hv=()=>ht(tt.songBark),Vv=()=>ht(tt.baiBark),Gv=()=>ht(tt.zongBark),Wv=()=>ht(tt.tanBark),Xv=()=>ht(tt.taoBark),qv=()=>ht(tt.ziBark),jv=()=>ht(tt.liuBark),Yv=()=>ht(tt.zhuBark),Zv=()=>ht(tt.shanBark),$v=()=>cn(tt.guiLeaf),vf=()=>cn(tt.miguLeaf),Kv=()=>cn(tt.yanLeaf),Jv=()=>cn(tt.songLeaf),Qv=()=>cn(tt.baiLeaf),ty=()=>cn(tt.zongFrond),ey=()=>cn(tt.tanLeaf),ny=()=>cn(tt.taoLeaf),iy=()=>cn(tt.ziLeaf),sy=()=>cn(tt.liuLeaf),ry=()=>cn(tt.zhuLeaf),oy=()=>cn(tt.shanLeaf),ay=()=>ht(tt.yanFruit),cy=()=>ht(tt.taoFruit),ly=()=>ht(tt.ziPod),uy=()=>ht(tt.miguGlow,{emissive:tt.miguGlow,emissiveIntensity:.45,side:fn}),hy=()=>ht(tt.lacquer),dy=()=>cn(tt.zhuyuBlade),fy=()=>cn(tt.zhuyuFloret),Jl={gui:{id:"gui",name:"桂",analogue:"肉桂 Cinnamomum cassia",floraId:"gui"},song:{id:"song",name:"松",analogue:"馬尾松 Pinus massoniana"},bai:{id:"bai",name:"柏",analogue:"側柏 Platycladus orientalis"},zong:{id:"zong",name:"棕",analogue:"棕櫚 Trachycarpus fortunei"},tan:{id:"tan",name:"檀",analogue:"青檀 Pteroceltis tatarinowii"},sang:{id:"sang",name:"桑",analogue:"桑 / 構 Morus · Broussonetia"},yan:{id:"yan",name:"棪",analogue:"君遷子 Diospyros lotus",floraId:"yanmu"},tao:{id:"tao",name:"桃",analogue:"桃 Prunus persica"},zi:{id:"zi",name:"梓",analogue:"梓 Catalpa ovata"},liu:{id:"liu",name:"柳",analogue:"垂柳 Salix babylonica"},zhu:{id:"zhu",name:"竹",analogue:"毛竹 Phyllostachys edulis"},shan:{id:"shan",name:"杉",analogue:"杉木 Cunninghamia lanceolata"}},Ql=["gui","song","bai","zong","tan","sang","yan","tao","zi","liu","zhu","shan"];function py(i,t){return t!=null&&t.glowSiZhao?"migu":t!=null&&t.lacquer?"baigao":Jl[i].floraId}const yf=[{mountainId:"zhaoyao",scatter:[{kind:"gui",count:48,radius:70,xCenter:-40,zCenter:-4},{kind:"gui",count:28,radius:50,xCenter:40,zCenter:90},{kind:"gui",count:28,radius:50,xCenter:30,zCenter:-80}],specimens:[{kind:"sang",overlay:{glowSiZhao:!0},x:70,z:20,yaw:.4},{kind:"sang",overlay:{glowSiZhao:!0},x:76,z:16,yaw:1.1},{kind:"sang",overlay:{glowSiZhao:!0},x:64,z:24,yaw:2},{kind:"sang",overlay:{glowSiZhao:!0},x:72,z:28,yaw:2.6},{kind:"sang",overlay:{glowSiZhao:!0},x:68,z:12,yaw:3.2}],zhuyu:{count:12,minX:-58,spanX:16,minZ:4,spanZ:16}},{mountainId:"yuanyi",scatter:[{kind:"sang",overlay:{strange:!0},count:16,radius:40,xCenter:44,zCenter:-110},{kind:"sang",overlay:{strange:!0},count:16,radius:40,xCenter:50,zCenter:110}]},{mountainId:"qingqiu",scatter:[{kind:"bai",count:8,radius:30,xCenter:36,zCenter:110}]},{mountainId:"danxue",scatter:[{kind:"tan",count:6,radius:24,xCenter:80,zCenter:40}]},{mountainId:"ji-nanshan",scatter:[{kind:"song",count:8,radius:30,xCenter:100,zCenter:-50}]},{mountainId:"fajiu",scatter:[{kind:"sang",count:36,radius:80,xCenter:0,zCenter:0}]},{mountainId:"jingwei",scatter:[]},{mountainId:"zhurong",scatter:[]},{mountainId:"hundun",scatter:[]},{mountainId:"court",scatter:[],specimens:[{kind:"sang",x:0,z:30,yaw:.2},{kind:"sang",x:-16,z:32,yaw:1.1},{kind:"sang",x:16,z:32,yaw:2}]},{mountainId:"buzhou",scatter:[{kind:"tao",count:8,radius:22,xCenter:40,zCenter:50}]},{mountainId:"kiln",scatter:[{kind:"tan",count:6,radius:12,xCenter:-18,zCenter:10}]},{mountainId:"xiayi",scatter:[{kind:"liu",count:12,radius:28,xCenter:8,zCenter:-6}]},{mountainId:"kunlun-qiu",scatter:[{kind:"tao",count:22,radius:45,xCenter:-8,zCenter:50},{kind:"tao",count:22,radius:40,xCenter:22,zCenter:-40}]},{mountainId:"kunlun-xu",scatter:[{kind:"bai",count:10,radius:24,xCenter:-24,zCenter:-50}],specimens:[{kind:"yan",overlay:{lacquer:!0},x:-14,z:-60,yaw:.3},{kind:"yan",overlay:{lacquer:!0},x:-20,z:-65,yaw:1.1},{kind:"yan",overlay:{glowSiZhao:!0},x:10,z:-68,yaw:2},{kind:"sang",overlay:{strange:!0},x:-8,z:-75,yaw:.8},{kind:"sang",overlay:{strange:!0},x:-10,z:-60,yaw:1.6},{kind:"bai",x:12,z:90,yaw:.2},{kind:"bai",x:-12,z:90,yaw:1.1},{kind:"yan",x:0,z:102,yaw:2},{kind:"yan",x:0,z:78,yaw:2.8}]},{mountainId:"yushan",scatter:[]},{mountainId:"changyang",scatter:[]},{mountainId:"kuafu",scatter:[{kind:"tao",count:40,radius:70,xCenter:62,zCenter:-42},{kind:"tao",count:20,radius:40,xCenter:380,zCenter:-340}]},{mountainId:"heichi",scatter:[{kind:"yan",count:4,radius:12,xCenter:16,zCenter:-24}]},{mountainId:"tanggu",scatter:[]},{mountainId:"ganyuan",scatter:[]},{mountainId:"liubo",scatter:[{kind:"sang",overlay:{strange:!0},count:6,radius:20,xCenter:-12,zCenter:8}]}],Pa=[{id:"liji",name:"麗𪊨之水",kind:"line",color:"#6a8aaa",width:12,depth:8,points:[[20,60],[-40,48],[-100,40],[-180,36]]},{id:"ying",name:"英水",kind:"line",color:"#5a7a6a",width:11,depth:6.5,points:[[1036,56],[1048,132]]},{id:"jiyi",name:"即翼之澤",kind:"disk",color:"#4a6a58",width:48,depth:6,points:[[1048,132]],r:48},{id:"dan",name:"丹水",kind:"line",color:"#6a2018",width:12,depth:10,points:[[1560,-2],[1560,200],[1560,280]]},{id:"ji-hei",name:"鷄山黑水",kind:"line",color:"#1a1410",width:14,depth:16,points:[[2072,24],[2072,80],[2092,156],[2100,240]]},{id:"zhang",name:"漳水",kind:"line",color:"#4a6a7a",width:8,depth:6,points:[[420,-980],[620,-980],[720,-980]]},{id:"he",name:"河",kind:"disk",color:"#5a7a8a",width:24,depth:8,points:[[320,-720]],r:24},{id:"wei",name:"渭",kind:"disk",color:"#5a7a8a",width:22,depth:8,points:[[620,-980]],r:22},{id:"daze",name:"大澤",kind:"disk",color:"#3a5a6a",width:40,depth:6,points:[[500,-1320]],r:40},{id:"fengyuan",name:"封淵",kind:"disk",color:"#7a2418",width:18,depth:8,points:[[-1720,-300]],r:18},{id:"shenyuan",name:"沈淵",kind:"disk",color:"#3a4a58",width:14,depth:7,points:[[-1780,-340]],r:14},{id:"youze",name:"泑澤",kind:"disk",color:"#4a6a78",width:22,depth:8,points:[[-1600,36]],r:22},{id:"hanshu",name:"寒暑之水",kind:"line",color:"#5a7080",width:8,depth:6,points:[[-1700,20],[-1660,20]]},{id:"yinshui",name:"淫水殘",kind:"disk",color:"#6a6860",width:16,depth:5,points:[[-1440,100]],r:16},{id:"xiayi-wa",name:"下邑窪水",kind:"disk",color:"#6a6458",width:20,depth:5,points:[[-1224,280]],r:20},{id:"kunlun-he",name:"崑崙河水",kind:"line",color:"#c4b48a",width:16,depth:10,points:[[-2940,-240],[-2940,-80],[-2940,80]]},{id:"kunlun-chi",name:"崑崙赤水",kind:"line",color:"#7a2418",width:16,depth:10,points:[[-2940,60],[-2800,140],[-2600,220]]},{id:"kunlun-yang",name:"崑崙洋水",kind:"line",color:"#7aa0b0",width:14,depth:8,points:[[-3300,-240],[-3400,-120],[-3480,20]]},{id:"kunlun-hei",name:"崑崙黑水",kind:"line",color:"#0a0a0c",width:22,depth:14,points:[[-3300,-240],[-3420,-240],[-3560,-250]]},{id:"ruo",name:"弱水",kind:"sheet",color:"#3a4a40",width:40,depth:4,points:[[-2990,-250]],sheetW:40,sheetD:80},{id:"qing",name:"青水",kind:"line",color:"#3a6a58",width:12,depth:7,points:[[-2960,-240],[-2860,-280],[-2780,-340]]},{id:"nanyuan",name:"南淵",kind:"disk",color:"#0c1418",width:28,depth:18,points:[[-2840,-310]],r:28},{id:"ganshui",name:"甘水",kind:"disk",color:"#7aa090",width:6,depth:4,points:[[-2830,-435]],r:6},{id:"biaochi",name:"表池",kind:"disk",color:"#4a6860",width:12,depth:5,points:[[-2840,-290]],r:12},{id:"yuanyi-tarn",name:"怪魚潭",kind:"disk",color:"#2a3830",width:10,depth:7,points:[[500,60]],r:10},{id:"dan-pool",name:"丹池",kind:"disk",color:"#6a2018",width:22,depth:8,points:[[1560,8]],r:22},{id:"wenyuan",name:"湯谷溫源",kind:"disk",color:"#8a5040",width:40,depth:3,points:[[3520,4]],r:40}];function my(i,t,e,n,s,r){const o=s-e,a=r-n,c=Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/(o*o+a*a||1)));return Math.hypot(i-(e+o*c),t-(n+a*c))}function Mf(i,t,e){const n=e.points;let s=1/0;for(let o=0;o<n.length-1;o+=1){const a=n[o],c=n[o+1];s=Math.min(s,my(i,t,a[0],a[1],c[0],c[1]))}if(s>e.width*1.4)return 0;const r=e.width;return e.depth*Math.exp(-(s*s)/(2*r*r))}function Sf(i,t,e){const n=e.points[0];if(!n)return 0;const s=e.r??e.width,r=Math.hypot(i-n[0],t-n[1])/s;if(r>=1)return 0;const o=(1-r*r)*(1-r*r);return e.depth*o}function bf(i,t,e){const n=e.points[0];if(!n)return 0;const s=(e.sheetW??40)*.5,r=(e.sheetD??80)*.5,o=Math.abs(i-n[0]),a=Math.abs(t-n[1]);if(o>s||a>r)return 0;const c=1-o/s,u=1-a/r;return e.depth*c*u}function gy(i,t){let e=0;for(const n of Pa)n.kind==="line"?e=Math.max(e,Mf(i,t,n)):n.kind==="sheet"?e=Math.max(e,bf(i,t,n)):e=Math.max(e,Sf(i,t,n));return e}function wf(i,t){let e,n=1.6;for(const s of Pa){let r=0;s.kind==="line"?r=Mf(i,t,s):s.kind==="sheet"?r=bf(i,t,s):r=Sf(i,t,s),r>n&&(n=r,e=s)}return e}const oa={x:1048,z:132,r:48},La=[{id:"zhaoyao",name:"招搖之山",x:0,z:40,peak:78,rx:220,rz:240,radius:220,biome:"cassia",padX:-80,padZ:36,quote:"其首曰招搖之山，臨於西海之上，多桂，多金玉。",modern:"南山首山，西臨大海，桂樹林立。"},{id:"yuanyi",name:"猨翼之山",x:520,z:20,peak:92,rx:90,rz:220,radius:90,biome:"forbidden",padX:580,padZ:8,quote:"又東三百八十里，曰猨翼之山，其中多怪獸，水多怪魚，多白玉，多腹虫，多怪蛇，多怪木，不可以上。",modern:"怪木怪蛇，山霧濃重，難以攀登。"},{id:"qingqiu",name:"青丘之山",x:1040,z:40,peak:70,rx:240,rz:220,radius:240,biome:"jade",padX:1046,padZ:12,quote:"又東三百里，曰青丘之山，其陽多玉，其陰多青雘。有獸焉，其狀如狐而九尾。",modern:"青雘之陰，九尾狐與灌灌鳥。"},{id:"danxue",name:"丹穴之山",x:1560,z:-10,peak:75,rx:160,rz:160,radius:160,biome:"ore",padX:1560,padZ:50,quote:"又東五百里，曰丹穴之山，其上多金玉。丹水出焉，而南流注于渤海。",modern:"金玉之山，丹水南注，有鳳皇。"},{id:"ji-nanshan",name:"鷄山",x:2080,z:16,peak:72,rx:180,rz:180,radius:180,biome:"ore",padX:2100,padZ:40,quote:"又東五百里，曰鷄山，其上多金，其下多丹雘。黑水出焉，而南流注于海。",modern:"上金下丹雘，黑水南流。"},{id:"jingwei",name:"精衛灘",x:2240,z:480,peak:10,rx:220,rz:160,radius:220,biome:"sand",padX:2240,padZ:498,quote:"常銜西山之木石，以堙于東海。",modern:"東海未滿，木石三堆。"},{id:"zhurong",name:"祝融岬",x:1560,z:520,peak:52,rx:160,rz:140,radius:160,biome:"ore",padX:1560,padZ:548,quote:"南方祝融，獸身人面，乘兩龍。",modern:"丹穴以南火岬。"},{id:"hundun",name:"渾沌",x:-1080,z:8,peak:52,rx:110,rz:96,radius:110,biome:"hollow",padX:-1080,padZ:18,quote:"天地渾沌如雞子。有神焉，其狀如黃囊，赤如丹火，六足四翼，渾敦無面目，實惟帝江也。",modern:"卵殼窪地。帝江居其中。"},{id:"court",name:"顓頊廷丘",x:-1720,z:-340,peak:52,rx:160,rz:120,radius:160,biome:"crown",padX:-1720,padZ:-362,quote:"昔者共工與顓頊爭為帝。丘方圓三百里。竹南有赤澤水，名曰封淵。",modern:"北丘為廷。封淵與沈淵。"},{id:"buzhou",name:"不周主柱",x:-1680,z:36,peak:100,rx:80,rz:90,radius:80,biome:"barren",padX:-1640,padZ:72,quote:"有山而不合，名曰不周負子。怒而觸不周之山。天柱折，地維絕。",modern:"不合之柱。東南麓可上。"},{id:"kiln",name:"窑谷",x:-1440,z:70,peak:38,rx:140,rz:110,radius:140,biome:"quarry",padX:-1432,padZ:76,quote:"煉五色石以補蒼天，斷鰲足以立四極。",modern:"窑臺與四色石。第五空。"},{id:"xiayi",name:"下邑",x:-1260,z:260,peak:16,rx:160,rz:120,radius:160,biome:"sand",padX:-1260,padZ:260,quote:"地不滿東南，故水潦塵埃歸焉。",modern:"東南低地。柳與茅屋。"},{id:"kunlun-qiu",name:"崑崙之丘",x:-3120,z:-90,peak:130,rx:180,rz:150,radius:180,biome:"jade",padX:-3162,padZ:-82,quote:"崑崙之丘，是實惟帝之下都，神陸吾司之。黑水出焉，而西流於大杅。",modern:"陸吾與沙棠。四水出隅。"},{id:"kunlun-xu",name:"崑崙之墟",x:-2840,z:-380,peak:150,rx:200,rz:170,radius:200,biome:"crown",padX:-2840,padZ:-344,quote:"海內崑崙之墟，方八百里，高萬仞。面有九井，以玉為檻。面有九門。非仁羿莫能上岡之巖。",modern:"開明東嚮。南淵與弱水。"},{id:"yushan",name:"玉山",x:-2540,z:-660,peak:110,rx:160,rz:140,radius:160,biome:"ore",padX:-2530,padZ:-668,quote:"玉山，是西王母所居也。西王母其狀如人，豹尾虎齒而善嘯，蓬髮戴勝。",modern:"西王母之几。玉峯無林。"},{id:"changyang",name:"常羊之山",x:-1880,z:380,peak:48,rx:160,rz:140,radius:160,biome:"barren",padX:-1880,padZ:380,quote:"刑天與帝爭神，帝斷其首，葬之常羊之山，乃以乳為目，以臍為口，操干戚以舞。",modern:"刑天仍在此舞。無林木。"},{id:"kuafu",name:"夸父之路",x:500,z:-940,peak:28,rx:280,rz:220,radius:280,biome:"foothill",padX:80,padZ:-560,quote:"夸父與日逐走，入日。渴，欲得飲，飲於河渭；河渭不足，北飲大澤。棄其杖，化為鄧林。",modern:"河渭與鄧林。"},{id:"heichi",name:"黑齒岸",x:3200,z:90,peak:28,rx:200,rz:140,radius:200,biome:"barren",padX:3080,padZ:48,quote:"黑齒國在其北，為人黑，食稻啖蛇，一赤一青在其旁。",modern:"旱岸。羿營與月臺在此岸，不另傳。"},{id:"tanggu",name:"湯谷",x:3520,z:4,peak:8,rx:160,rz:120,radius:160,biome:"sand",padX:3468,padZ:4,quote:"湯谷上有扶桑，十日所浴，在黑齒北。居水中，有大木，九日居下枝，一日居上枝。",modern:"扶桑是木，不是山。"},{id:"ganyuan",name:"甘淵",x:3780,z:260,peak:26,rx:120,rz:100,radius:120,biome:"sand",padX:3762,padZ:282,quote:"有女子名曰羲和，方浴日于甘淵。羲和者，帝俊之妻，生十日。",modern:"十槽淺盆。常羲不在此。"},{id:"liubo",name:"流波山",x:3960,z:-420,peak:62,rx:140,rz:120,radius:140,biome:"strange",padX:3952,padZ:-420,quote:"東海中有流波山，入海七千里。其上有獸，狀如牛，蒼身而無角，一足，其名曰夔。",modern:"黃帝鼓在岸。"},{id:"fajiu",name:"發鳩之山",x:420,z:-980,peak:36,rx:140,rz:120,radius:140,biome:"foothill",padX:420,padZ:-980,quote:"又北二百里，曰發鳩之山，其上多柘木。有鳥焉，其狀如烏，文首、白喙、赤足，名曰精衛。",modern:"柘林。精衛舊巢。"}];La.map(i=>i.id);const zr={x:0,z:40,peak:78},js={x:520,z:20,peak:92},Ti={x:1040,z:40,peak:70},Pn={x:1560,z:-10,peak:75,radius:400},Bs={x:2080,z:16},Ss=oa;function Li(i,t,e,n){const s=i/e,r=t/n;return Math.exp(-(s*s+r*r))}function Ee(i,t,e,n,s,r,o){return Li(i-e,t-n,s,r)*o}function tu(i,t,e,n=.2){if(i<t)return i;const s=Math.floor((i-t)/e)*e+t;return s+(i-s)*n}function _y(i,t){const e=i-zr.x,n=t-zr.z,s=e<-8?180:310;let r=Li(e,n,s,240)*zr.peak;return r+=Ee(e,n,90,-80,90,70,28),r+=Ee(e,n,40,90,80,64,26),r+=Ee(e,n,70,20,56,48,18),r+=Ee(e,n,-70,30,70,50,16),r+=Ee(e,n,20,8,48,40,14),r=tu(r,16,5.5,.16),e>-88&&e<-36&&r>18&&(r=26+(r-26)*.14),e<-130&&(r*=.38),r}function xy(i,t){const e=i-js.x,n=t-js.z,s=e<0?36:90;let r=Li(e,n,s,280)*js.peak;const o=Math.hypot(e/42,n/70);return o<1&&(r+=(1-o)*(1-o)*22),r+=Ee(e,n,40,-110,60,70,36),r+=Ee(e,n,36,110,56,64,32),r+=Ee(e,n,80,8,48,40,16),r+=Ee(e,n,-70,0,50,44,14),r}function vy(i,t){const e=i-Ti.x,n=t-Ti.z,s=n>0?280:180;let r=Li(e,n,240,s)*Ti.peak;return r+=Ee(e,n,-90,18,80,64,28),r+=Ee(e,n,90,52,76,60,26),r+=Ee(e,n,36,110,70,50,16),r+=Ee(e,n,-20,-80,64,48,14),n>4&&(r=tu(r,12,5,.16)),n>70&&(r*=.42),r}function yy(i,t){const e=i-Pn.x,n=t-Pn.z,s=Math.hypot(e/Pn.radius,n/(Pn.radius*.92)),r=Math.exp(-((s-.52)*(s-.52))/.07)*Pn.peak,o=Math.exp(-s*s*2.4)*22,a=Math.exp(-s*s*7.5)*36;let c=Math.max(0,r+o-a);return c+=Ee(e,n,80,90,70,56,28),c+=Ee(e,n,-90,40,64,52,22),c+=Ee(e,n,18,120,80,60,26),c+=Ee(e,n,0,-90,70,50,18),c}function My(i,t){const e=i-Bs.x,n=t-Bs.z;let s=Li(e,n,300,240)*46;const r=Math.hypot(e/90,n/72);return r<1?s=58+(1-r)*3.5:r<1.18&&(s=Math.max(s,58-(r-1)*48)),s+=Ee(e,n,-110,20,90,70,30),s+=Ee(e,n,100,-50,80,64,22),s+=Ee(e,n,20,110,76,60,20),s+=Ee(e,n,-40,-90,70,50,16),s}function Sy(i,t){const e=Math.abs(Math.sin(i*.062+t*.018))*1.7+Math.abs(Math.cos(i*.029-t*.071))*1.3,n=Math.sin(i*.14+t*.11)*.85+Math.sin(i*.21-t*.16)*.42+Math.sin(i*.33+t*.27)*.22;return e+n}function by(i,t){const e=i-zr.x,n=t-zr.z;let s=0;e<-36&&e>-88&&(s+=Math.sin(n*.22)*.55),s+=Li(i-js.x+10,t-js.z,28,70)*Math.sin((t-js.z)*.18)*2.4,t>Ti.z+8&&t<Ti.z+90&&(s+=Math.sin(i*.12)*.7),t>Ti.z+16&&(s-=Li(i-Ti.x,t-Ti.z-70,40,28)*4.5);const r=Math.hypot((i-Pn.x)/Pn.radius,(t-Pn.z)/(Pn.radius*.92));return r>.38&&r<.62&&(s+=Math.sin(Math.atan2(t-Pn.z,i-Pn.x)*6)*1.4),t>Bs.z+18&&Math.abs(i-Bs.x)<90&&(s+=tu(Li(i-Bs.x,t-Bs.z-50,50,36)*10,2,2.2,.12)),s}const wy=-180,Ey=-280,Ty=4,Ay=341,Cy=126,Ry=[],Py={originX:wy,originZ:Ey,cell:Ty,cols:Ay,rows:Cy,delta:Ry};function Ly(i){return{originX:i.originX,originZ:i.originZ,cell:i.cell,cols:i.cols,rows:i.rows,delta:i.delta.length===i.cols*i.rows?i.delta.slice():new Array(i.cols*i.rows).fill(0)}}let rn=Ly(Py);function ii(i,t){return t*rn.cols+i}function Iy(i,t){const{originX:e,originZ:n,cell:s,cols:r,rows:o,delta:a}=rn;if(a.length!==r*o)return 0;const c=(i-e)/s,u=(t-n)/s,l=Math.floor(c),h=Math.floor(u);if(l<0||h<0||l>=r-1||h>=o-1)return 0;const d=c-l,f=u-h,g=a[ii(l,h)]??0,_=a[ii(l+1,h)]??0,m=a[ii(l,h+1)]??0,p=a[ii(l+1,h+1)]??0;return g*(1-d)*(1-f)+_*d*(1-f)+m*(1-d)*f+p*d*f}function Dy(i,t,e,n=7,s=.55){const{originX:r,originZ:o,cell:a,cols:c,rows:u}=rn;rn.delta.length!==c*u&&(rn.delta=new Array(c*u).fill(0));const l=Math.max(0,Math.floor((i-n-r)/a)),h=Math.min(c-1,Math.ceil((i+n-r)/a)),d=Math.max(0,Math.floor((t-n-o)/a)),f=Math.min(u-1,Math.ceil((t+n-o)/a));for(let g=d;g<=f;g+=1)for(let _=l;_<=h;_+=1){const m=r+_*a,p=o+g*a,v=Math.hypot(m-i,p-t);if(v>n)continue;const y=1-v/n,x=ii(_,g),b=rn.delta[x]??0;if(e==="raise")rn.delta[x]=b+s*y;else if(e==="lower")rn.delta[x]=b-s*y;else{const E=((rn.delta[ii(Math.max(0,_-1),g)]??b)+(rn.delta[ii(Math.min(c-1,_+1),g)]??b)+(rn.delta[ii(_,Math.max(0,g-1))]??b)+(rn.delta[ii(_,Math.min(u-1,g+1))]??b))/4;rn.delta[x]=b+(E-b)*.4*y}}}function Uy(){const i=new Blob([JSON.stringify(rn)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download="nanshan-sculpt.json",t.click(),URL.revokeObjectURL(t.href)}const Pt={hundun:{x:-1080,z:8},buzhou:{x:-1680,z:36},court:{x:-1720,z:-340},kiln:{x:-1440,z:70},xiaYi:{x:-1260,z:260},kunlunQiu:{x:-3120,z:-90},kunlunXu:{x:-2840,z:-380},yushan:{x:-2540,z:-660},changyang:{x:-1880,z:380},kuafuStart:{x:80,z:-560},kuafuEnd:{x:920,z:-1320},jingwei:{x:2240,z:480},zhurong:{x:1560,z:520},yiCamp:{x:3080,z:48},heichi:{x:3200,z:90},moonTai:{x:2980,z:-70},fusang:{x:3520,z:4},ganyuan:{x:3780,z:260},liubo:{x:3960,z:-420},fajiu:{x:420,z:-980}},Ny=[{id:"hundun-floor",x:Pt.hundun.x,z:Pt.hundun.z,r:28,floor:6.2,water:7.4},{id:"he-pool",x:320,z:-720,r:24,floor:4.2,water:5.6},{id:"wei-pool",x:620,z:-980,r:22,floor:4,water:5.4},{id:"ganyuan",x:Pt.ganyuan.x,z:Pt.ganyuan.z,r:32,floor:3.8,water:5.2}];function de(i,t,e,n){const s=i/e,r=t/n;return Math.exp(-(s*s+r*r))}function xe(i,t,e,n,s,r,o){return de(i-e,t-n,s,r)*o}function lr(i,t,e,n=.18){if(i<t)return i;const s=Math.floor((i-t)/e)*e+t;return s+(i-s)*n}function Fy(i,t){const e=i-Pt.hundun.x,n=t-Pt.hundun.z,s=de(e,n,110,96)*58,r=de(e,n,48,42)*64;return Math.max(0,s-r+10*de(e,n,58,50))}function By(i,t){const e=i-Pt.court.x,n=t-Pt.court.z;let s=de(e,n,160,120)*52;return s=lr(s,14,5.5,.14),s+=xe(e,n,0,-40,60,40,14),s+=xe(e,n,-70,10,48,36,10),s+=xe(e,n,70,10,48,36,10),s+=xe(e,n,0,18,40,28,8),s+=xe(e,n,16,36,36,30,10),s}function zy(i,t){const e=i-Pt.buzhou.x,n=t-Pt.buzhou.z,s=Math.hypot(e/42,n/52);let r=de(e,n,42,52)*100;s<1&&(r+=(1-s)*(1-s)*18),r+=xe(e,n,70,80,90,70,28),r+=xe(e,n,-50,-90,64,52,22),r+=xe(i,t,-1740,20,40,28,18),r+=xe(i,t,-1620,20,36,26,16),r+=xe(i,t,-1760,10,48,36,22);const o=Math.atan2(n,e);s>.35&&s<1.15&&(r+=Math.sin(o*5+s*8)*2.2);const a=(e*.02-n*.012)*de(e,n,110,96);return e<-10&&n<-8&&(r-=18),Math.max(0,r+a)}function Oy(i,t){const e=i-Pt.kiln.x,n=t-Pt.kiln.z;let s=de(e,n,140,110)*38;return s=lr(s,10,4.5,.16),s+=xe(e,n,28,18,48,36,12),s+=xe(e,n,-40,-20,40,32,8),s}function ky(i,t){const e=i-Pt.xiaYi.x,n=t-Pt.xiaYi.z;return de(e,n,160,120)*16+xe(e,n,36,20,56,42,6)}function Hy(i,t){const e=i-Pt.kunlunQiu.x,n=t-Pt.kunlunQiu.z;let s=de(e,n,180,150)*130;return s=lr(s,18,8,.16),s+=xe(e,n,70,-40,70,55,24),s+=xe(e,n,-60,50,60,48,18),s+=xe(e,n,20,80,48,40,12),s}function Vy(i,t){const e=i-Pt.kunlunXu.x,n=t-Pt.kunlunXu.z;let s=de(e,n,150,130)*150;return Math.abs(e)<70&&Math.abs(n)<70&&(s=Math.max(s,96)),e>12&&(s+=(1-Math.min(1,Math.abs(n)/55))*18),s=lr(s,24,7,.14),s+=xe(e,n,40,20,50,40,14),s}function Gy(i,t){const e=i-Pt.yushan.x,n=t-Pt.yushan.z;let s=de(e,n,120,100)*110;const r=Math.hypot(e/36,n/30);return r<1&&(s-=(1-r)*(1-r)*22),s=lr(s,26,6,.2),Math.max(0,s)}function Wy(i,t){const e=i-Pt.changyang.x,n=t-Pt.changyang.z;let s=de(e,n,140,110)*48;return s+=xe(e,n,0,40,50,40,12),s}function Xy(i,t){const e=(i-Pt.kuafuStart.x)/(Pt.kuafuEnd.x-Pt.kuafuStart.x);if(e<-.06||e>1.08)return 0;const n=Pt.kuafuStart.z+e*(Pt.kuafuEnd.z-Pt.kuafuStart.z),s=de(0,t-n,22,80)*28,r=de(i-(Pt.kuafuStart.x+Pt.kuafuEnd.x)*.5,t-n,420,48)*8;return Math.max(s,r)}function qy(i,t){const e=i-Pt.heichi.x,n=t-Pt.heichi.z;let s=de(e,n,200,150)*28;return s=lr(s,8,4,.2),s+=xe(i,t,Pt.yiCamp.x,Pt.yiCamp.z,90,70,14),s+=xe(i,t,Pt.moonTai.x,Pt.moonTai.z,60,44,18),s}function jy(i,t){const e=i-Pt.fusang.x,n=t-Pt.fusang.z;let s=de(e,n,90,70)*8;return e<-16&&(s*=.78),s+=de(e-40,n,28,22)*4,s+=de(e+36,n+24,22,18)*3.5,s+=de(e+20,n-30,20,16)*3.2,s}function Yy(i,t){const e=i-Pt.ganyuan.x,n=t-Pt.ganyuan.z,s=de(e,n,100,80)*26,r=de(e,n,40,34)*28;return Math.max(0,s-r+6*de(e,n,50,42))}function Zy(i,t){const e=i-Pt.liubo.x,n=t-Pt.liubo.z;let s=de(e,n,110,90)*62;return s+=xe(e,n,36,22,48,36,16),s+=xe(e,n,-30,-40,40,32,12),s}function $y(i,t){return de(i-Pt.jingwei.x,t-Pt.jingwei.z,220,90)*10+xe(i,t,Pt.jingwei.x+90,Pt.jingwei.z+10,50,28,4)}function Ky(i,t){const e=i-Pt.zhurong.x,n=t-Pt.zhurong.z,s=Math.hypot(e/120,n/96),r=Math.exp(-((s-.5)*(s-.5))/.08)*52,o=Math.exp(-s*s*2.2)*22,a=Math.exp(-s*s*7)*30;return Math.max(0,r+o-a)}function Jy(i,t){const e=i-Pt.fajiu.x,n=t-Pt.fajiu.z;return de(e,n,90,70)*36+xe(i,t,Pt.fajiu.x+18,Pt.fajiu.z-12,40,32,8)}function Qy(i,t,e){return i==="hundun"?Fy(t,e):i==="court"?By(t,e):i==="buzhou"?zy(t,e):i==="kiln"?Oy(t,e):i==="xiayi"?ky(t,e):i==="kunlun-qiu"?Hy(t,e):i==="kunlun-xu"?Vy(t,e):i==="yushan"?Gy(t,e):i==="changyang"?Wy(t,e):i==="kuafu"?Xy(t,e):i==="heichi"?qy(t,e):i==="tanggu"?jy(t,e):i==="ganyuan"?Yy(t,e):i==="liubo"?Zy(t,e):i==="jingwei"?$y(t,e):i==="zhurong"?Ky(t,e):i==="fajiu"?Jy(t,e):0}function tM(i,t,e){let n=e;for(const s of Ny){const r=Math.hypot(i-s.x,t-s.z)/s.r;if(r>=1)continue;const o=s.floor+r*r*5.5;n=Math.min(n,o)}return n}const eM=[{id:"nuchuang",name:"女床之山",x:-2360,z:-180,peak:22,jing:"西山經",quote:"西南三百里，曰女床之山。"},{id:"tianshan-ridge",name:"天山脊",x:-2580,z:-520,peak:22,jing:"西山經",quote:"又西三百五十里，曰天山。"},{id:"kuang",name:"狂山",x:180,z:-1120,peak:22,jing:"北山經",quote:"又北三百八十里，曰狂山，無草木。"},{id:"gouwu",name:"鉤吾之山",x:640,z:-1220,peak:24,jing:"北山經",quote:"又北三百五十里，曰鉤吾之山。"},{id:"xuanyuan",name:"軒轅之山",x:920,z:-1080,peak:24,jing:"北山經",quote:"又東北二百里，曰軒轅之山。"},{id:"beihao",name:"北號之山",x:2760,z:-920,peak:26,jing:"東山經",quote:"東次四經之首，曰北號之山，臨于北海。"},{id:"dongshi",name:"東始之山",x:3020,z:-180,peak:22,jing:"東山經",quote:"又南三百二十里，曰東始之山。"},{id:"cangwu",name:"蒼梧之山",x:380,z:720,peak:26,jing:"海內南經",quote:"蒼梧之山，帝舜葬于陽。"},{id:"youdu",name:"幽都之山",x:-180,z:-1420,peak:24,jing:"海內經",quote:"北海之內，有山，名曰幽都之山。"},{id:"lingshan",name:"靈山",x:-3040,z:-820,peak:28,jing:"大荒西經",quote:"有靈山……十巫，從此升降。"},{id:"chengdu",name:"成都載天",x:520,z:-1480,peak:26,jing:"大荒北經",quote:"大荒之中，有山名曰成都載天。"}],Re=.55,On=-3700,si=4400,kn=-1650,ri=900,hi=La;function eu(i){return hi.find(t=>t.id===i)}function kh(i){i&&eu(i)}function nM(i,t,e){if(i==="zhaoyao")return _y(t,e);if(i==="yuanyi")return xy(t,e);if(i==="qingqiu")return vy(t,e);if(i==="danxue")return yy(t,e);if(i==="ji-nanshan")return My(t,e);const n=Qy(i,t,e);if(n!==0)return n;const s=eu(i);if(!s)return 0;const r=(t-s.x)/(s.rx*.55),o=(e-s.z)/(s.rz*.55);return Math.exp(-(r*r+o*o))*s.peak}function iM(i,t){let e=0;for(const n of eM){const s=(i-n.x)/70,r=(t-n.z)/56,o=Math.exp(-(s*s+r*r))*n.peak;o>e&&(e=o)}return e}function sM(i,t){return Math.sin(i*.021+t*.017)*1.6+Math.sin(i*.053-t*.041)*.85+Math.sin(i*.11+t*.09)*.32}const rM=new Set(["zhaoyao","yuanyi","qingqiu","danxue","ji-nanshan"]);function Bn(i,t){let e=Re-1.7+Math.sin(i*.08+t*.05)*.12,n=!1;for(const r of hi){const o=i-r.x,a=t-r.z,c=o/(r.rx*1.45),u=a/(r.rz*1.45),l=Math.exp(-(c*c+u*u));if(l<.015)continue;n=!0;let h=7.4+sM(i,t)*1.55+Sy(i,t);h+=nM(r.id,i,t),rM.has(r.id)&&(h+=by(i,t)),h=tM(i,t,h),h+=Iy(i,t),h=Re-1.4+(h-(Re-1.4))*l,h>e&&(e=h)}const s=iM(i,t);if(s>.4&&(n=!0,Re-1.2+s>e&&(e=Re-1.2+s)),!n)return e;if(e-=gy(i,t),t>590&&i>1400){const r=Math.min(1,(t-590)/80);e=e*(1-r)+(Re-.4)*r}return Math.max(Re-2.4,e)}function xl(i,t=0){let e=hi[0],n=1/0;for(const s of hi){const r=Math.hypot((i-s.x)/s.rx,(t-s.z)/s.rz);r<n&&(n=r,e=s)}return e}function Ro(i,t,e=Bn(i,t)){if(e<Re+.15)return"sea";const n=wf(i,t);if(n)return n.id==="ji-hei"||n.id==="kunlun-hei"?"gorge":n.id==="dan"||n.id==="kunlun-chi"||n.id==="fengyuan"||n.id==="wenyuan"?"quarry":n.id==="ruo"?"shade":"sand";const s=xl(i,t),r=i-s.x,o=t-s.z,a=Math.hypot(r/s.rx,o/s.rz);if(s.id==="zhaoyao"){if(i<-180)return"sand";if(r<-28)return"ore";if(a<1.05)return"cassia"}if(s.id==="yuanyi"){if(r<-6)return"scree";if(a<1.1)return"forbidden"}if(s.id==="qingqiu"&&a<1.15)return Math.hypot(i-oa.x,t-oa.z)<oa.r+8?"sand":o>6?"jade":"shade";if(s.id==="danxue"){if(Math.hypot(r/s.rx,o/s.rz)<.34)return"hollow";if(a<1.05)return"ore"}if(s.id==="ji-nanshan"){if(Math.hypot(r/52,o/42)<1.02)return"crown";if(a<1.05)return"ore"}return a<1.08?s.biome:"foothill"}const Mr=new ve,oM=.02,zs=200;function aM(i,t){return`${i}:${t}`}function cM(i,t,e){const n=Math.max(i.minX,t*zs),s=Math.min(i.maxX,(t+1)*zs),r=Math.max(i.minZ,e*zs),o=Math.min(i.maxZ,(e+1)*zs);if(s<=n||o<=r)return;const a=i.perChunk,c=new Vn(i.geo,i.mat,a);c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!0,c.userData.cx=t,c.userData.cz=e;const u=new Rt;let l=0,h=0;for(;l<a&&h<a*8;){h+=1;const d=n+Math.random()*(s-n),f=r+Math.random()*(o-r),g=i.biomeAt(d,f);if(!(g==="cassia"||g==="jade"||g==="foothill"||g==="clearing"||g==="shade"||g==="ore"))continue;const m=i.sample(d,f);m<Re+.35||(Mr.position.set(d,m-oM,f),Mr.rotation.set(0,Math.random()*Math.PI,0),Mr.scale.set(1,.85+Math.random()*.45,1),Mr.updateMatrix(),c.setMatrixAt(l,Mr.matrix),u.set(g==="jade"?tt.jade:tt.grass),c.setColorAt(l,u),l+=1)}if(c.count=l,c.instanceColor&&(c.instanceColor.needsUpdate=!0),l!==0)return c.computeBoundingSphere(),c}function lM(i){const t=new te,e=Kl(.08,.22),n=new Ca({color:tt.grass,flatShading:!0,side:fn,vertexColors:!1}),s=i.quality==="high"?3200:1600,r={terrain:i.terrain,sample:i.sample,biomeAt:i.biomeAt,minX:i.minX,maxX:i.maxX,minZ:i.minZ,maxZ:i.maxZ,perChunk:Math.max(40,Math.floor(s/9)),geo:e,mat:n,chunks:new Map};return t.userData.grass=r,t}function Hh(i,t,e,n){if(e===void 0||n===void 0)return;const s=i.userData.grass;if(!s)return;const r=Math.floor(e/zs),o=Math.floor(n/zs),a=new Set;for(let c=-1;c<=1;c+=1)for(let u=-1;u<=1;u+=1)a.add(aM(r+c,o+u));for(const c of[...s.chunks.keys()]){if(a.has(c))continue;const u=s.chunks.get(c);u&&i.remove(u),s.chunks.delete(c)}for(const c of a){if(s.chunks.has(c))continue;const[u,l]=c.split(":").map(Number),h=cM(s,u,l);h&&(s.chunks.set(c,h),i.add(h))}}const Fn=new ve,uM=Kl(.08,.55),hM=He(.05,.07);function qi(i){const t=Math.sin(i*12.9898)*43758.5453;return t-Math.floor(t)}function nu(){const i=new te,t=tr()==="high"?3:1,e=t===1?6:9,n=new Vn(uM,dy(),e);n.castShadow=!1;for(let o=0;o<e;o+=1)Fn.position.set((qi(o+2)-.5)*.14,-.02,(qi(o+5)-.5)*.14),Fn.rotation.set(.08,o/e*Math.PI*2+qi(o+11)*.15,0),Fn.scale.set(1.1,1.35+qi(o+17)*.5,1),Fn.updateMatrix(),n.setMatrixAt(o,Fn.matrix);n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),i.add(n);const s=t*5,r=new Vn(hM,fy(),s);for(let o=0;o<s;o+=1)Fn.position.set((qi(o+21)-.5)*.12,.48+qi(o+23)*.12,(qi(o+29)-.5)*.12),Fn.rotation.set(.35,o/5*Math.PI*2,.08),Fn.scale.setScalar(1),Fn.updateMatrix(),r.setMatrixAt(o,Fn.matrix);return r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),i.add(r),i.userData.plantId="zhuyu",i.userData.grassVariant="zhuyu",i}const Ct=new ve,dM=new I(0,1,0),fM=new ar,pM=new I,Vh=new I,mM=new I(0,-1,0),gM=He(.16,.36),_M=He(.18,.3),xM=He(.12,.26),vM=He(.14,.24),yM=He(.12,.32),MM=He(.26,.34),SM=He(.08,.28),bM=He(.1,.34),wM=He(.1,.28),Ef=ma(.38,5),EM=ma(.58,5),TM=Kl(.058,.95),AM=is(.09),CM=is(.11),RM=Et(.05,.02,.05),PM=He(.16,.28),LM=Br(.06,.22,.03),IM=Br(.07,.42,.03),Gh=nr(1,1,6),Tf=$r(1,.42,1,6);function Xt(i){const t=Math.sin(i*12.9898)*43758.5453;return t-Math.floor(t)}function rs(i,t){return(t??tr())==="high"?i:Math.max(8,Math.floor(i*.55))}function ss(i,t,e,n,s){const r=new Vn(t,e,Math.max(1,n));r.castShadow=!1;for(let o=0;o<n;o+=1)s(o,Ct),Ct.updateMatrix(),r.setMatrixAt(o,Ct.matrix);return r.instanceMatrix.needsUpdate=!0,n>0&&(r.computeBoundingSphere(),i.add(r)),r}function aa(i,t,e,n,s){if(n<=0)return;const r=new Vn(t,e,n);r.castShadow=!1,r.receiveShadow=!1;for(let o=0;o<n;o+=1)s(o,Ct),Ct.updateMatrix(),r.setMatrixAt(o,Ct.matrix);r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),i.add(r)}function Ui(i){return fM.setFromUnitVectors(dM,pM.copy(i).normalize())}function Gn(i,t){return new I(Math.cos(i)*Math.sin(t),Math.cos(t),Math.sin(i)*Math.sin(t)).normalize()}function ci(i,t,e,n,s,r,o,a,c=!1){const u=n.clone().normalize(),l=new te;l.position.copy(e),l.quaternion.copy(Ui(u)),st(l,$r(r,o,s,6),t),i.add(l);const h=c===!0?1:c||0;for(let d=1;d<=h;d+=1){const f=d/(h+1)*.9;f>.25&&a.push({pos:e.clone().addScaledVector(u,s*f),dir:u.clone()})}a.push({pos:e.clone().addScaledVector(u,s),dir:u.clone()})}function ur(i,t,e,n,s=1,r=1){const o=new te;st(o,nr(t*1.5,t*.55,6),i);for(let a=0;a<s;a+=1){const c=s===1?0:a/s*Math.PI*2+Xt(r+a)*.22,u=new te;s>1&&(u.position.set(Math.cos(c)*t*.42,0,Math.sin(c)*t*.42),u.rotation.z=.14*(a%2===0?1:-1),u.rotation.x=.08*(a%3===0?-1:1)),st(u,$r(t*(s>1?.7:1),e,n*(s>1?.92:1),6),i),o.add(u)}return o}function vn(i,t,e,n,s){const r=s.pair?2:1,o=t.length*r;ss(i,e,n,o,a=>{const c=t[Math.floor(a/r)%t.length],u=a%r;Ct.position.copy(c.pos),Ct.quaternion.copy(Ui(c.dir)),Ct.translateY(.04),s.hang&&Ct.rotateX(s.hang),s.vertical&&Ct.rotateZ(Math.PI/2),s.pair&&Ct.rotateY(u*Math.PI),Ct.translateX(s.pair?.07:0),s.split&&Ct.rotateZ((u?1:-1)*s.split),Ct.rotateY(Xt(s.seed+a)*.2);const l=s.scale*(.88+Xt(s.seed+a*3)*.22);Ct.scale.set(l,l,1)})}function bs(i,t,e){const n=ur(t,e.r0,e.r1,e.h,e.stems??1,i),s=[],r=e.t0??.42,o=e.t1??.92;for(let a=0;a<e.arms;a+=1){if(e.uneven&&Xt(i+a*19)<.18)continue;const c=r+Xt(i+a*9)*(o-r),u=e.h*c,l=a/Math.max(1,e.arms)*Math.PI*2+Xt(i+a)*(e.uneven?.7:.28),h=e.spread+(Xt(i+a*7)-.5)*e.gnarl,d=Gn(l,h),f=new I(Math.cos(l)*e.r0*.55,u,Math.sin(l)*e.r0*.55),g=e.h*(.3+Xt(i+a*3)*(e.uneven?.32:.16));if(ci(n,t,f,d,g,e.r0*.28,e.r1*.5,s,e.along),Xt(i+a*13)>.42){const _=f.clone().addScaledVector(d,g*.58),m=l+.75+Xt(i+a*17)*.4,p=h*.82+(e.uneven?.25:0);ci(n,t,_,Gn(m,p),g*.46,e.r0*.16,e.r1*.3,s,!1)}}return{root:n,sockets:s}}function DM(i,t,e){const o=ur(t,.18,.05,6.4),a=[],c=rs(3,e)>=3?3:2,u=6;for(let l=0;l<c;l+=1){const h=6.4*(.4+l*.2),d=6.4*(.36-l*.06),f=1.08+l*.06;for(let g=0;g<u;g+=1){const _=g/u*Math.PI*2+l*.32+Xt(i+l*11+g)*.08,m=new I(Math.cos(_)*.18*.35,h,Math.sin(_)*.18*.35);ci(o,t,m,Gn(_,f),d,.18*.22,.05*.55,a,!1)}}return{root:o,sockets:a}}function UM(i,t,e){const o=ur(t,.16,.045,5.8),a=[],c=rs(18,e)>=18?18:12;for(let u=0;u<c;u+=1){const l=.2+u/c*.74+Xt(i+u)*.03,h=u/c*Math.PI*2+Xt(i+u*5)*.28,d=.16+Xt(i+u*7)*.14,f=new I(Math.cos(h)*.16*.5,5.8*l,Math.sin(h)*.16*.5),g=5.8*(.16+Xt(i+u*3)*.08);ci(o,t,f,Gn(h,d),g,.16*.24,.045*.55,a,!0)}return{root:o,sockets:a}}function NM(i,t){const r=ur(t,.15,.04,5.2),o=[],a=8;for(let c=0;c<a;c+=1){const u=.48+Xt(i+c*9)*.42,l=c/a*Math.PI*2+Xt(i+c)*.22,h=1.22+Xt(i+c*7)*.18,d=new I(Math.cos(l)*.15*.5,5.2*u,Math.sin(l)*.15*.5),f=5.2*(.55+Xt(i+c*3)*.22);ci(r,t,d,Gn(l,h),f,.15*.22,.04*.45,o,4)}return{root:r,sockets:o}}function FM(i,t,e){const r=ur(t,.2,.045,7),o=[],a=rs(4,e)>=4?4:3,c=6,u=a*c,l=[],h=[],d=[];for(let f=0;f<a;f+=1){const g=7*(.28+f*.16),_=7*(.38-f*.06),m=.88+f*.05;for(let p=0;p<c;p+=1){const v=p/c*Math.PI*2+f*.28+Xt(i+f*11+p)*.08;l.push(new I(Math.cos(v)*.2*.32,g,Math.sin(v)*.2*.32)),h.push(Gn(v,m)),d.push(_)}}return aa(r,Tf,t,u,f=>{const g=l[f],_=h[f],m=d[f];Ct.position.copy(g),Ct.quaternion.copy(Ui(_)),Ct.scale.set(.2*.2,m,.2*.2),o.push({pos:g.clone().addScaledVector(_,m*.62),dir:_.clone()}),o.push({pos:g.clone().addScaledVector(_,m),dir:_.clone()})}),Ct.scale.set(1,1,1),{root:r,sockets:o}}function BM(i,t,e,n){const s=new te,r=[],o=rs(4,n)>=4?4:3,a=6,c=[];for(let h=0;h<o;h+=1){const d=h/o*Math.PI*2+Xt(i+h)*.4,f=.18+Xt(i+h*3)*.16;c.push({x:Math.cos(d)*f,z:Math.sin(d)*f,yaw:d,segH:.52+Xt(i+h*5)*.08,r:.055+Xt(i+h*7)*.02})}aa(s,Gh,t,o*a,h=>{const d=c[Math.floor(h/a)],f=h%a,g=d.r*(1-f*.04);Ct.position.set(d.x,f*d.segH,d.z),Ct.quaternion.identity(),Ct.scale.set(g,d.segH,g)}),aa(s,Gh,t,o*a,h=>{const d=c[Math.floor(h/a)],f=h%a,g=d.r*1.18*(1-f*.04);Ct.position.set(d.x,(f+1)*d.segH-.02,d.z),Ct.quaternion.identity(),Ct.scale.set(g,.035,g)});const u=o*3*2,l=[];for(let h=0;h<o;h+=1){const d=c[h];for(let f=3;f<a;f+=1)for(let g=0;g<2;g+=1){const _=f*d.segH+d.segH*.55,m=d.yaw+(g?1.1:-1.1)+Xt(i+h*13+f+g)*.2,p=.95+Xt(i+h+f)*.15,v=Gn(m,p),y=new I(d.x+Math.cos(m)*d.r,_,d.z+Math.sin(m)*d.r),x=.42+Xt(i+g)*.12;l.push({origin:y,dir:v,len:x}),r.push({pos:y.clone().addScaledVector(v,x),dir:v.clone()})}}return aa(s,Tf,t,u,h=>{const d=l[h];Ct.position.copy(d.origin),Ct.quaternion.copy(Ui(d.dir)),Ct.scale.set(.022,d.len,.022)}),Ct.scale.set(1,1,1),Ct.quaternion.identity(),vn(s,r,bM,e,{scale:1.05,seed:i,hang:.28}),s}function zM(i,t,e,n){const s=new te,r=6,o=.92;for(let l=0;l<r;l+=1){const h=.18-l*.012;st(s,nr(h,o,6),t,0,l*o,0)}const a=r*o,c=rs(8,n)>=8?8:6,u=[];for(let l=0;l<c;l+=1){const h=l/c*Math.PI*2+Xt(i+l)*.08,d=.78+Xt(i+l*3)*.16,f=new I(Math.cos(h)*.08,a,Math.sin(h)*.08),g=1.15+Xt(i+l*5)*.28;ci(s,t,f,Gn(h,d),g,.045,.02,u,!1)}return vn(s,u,EM,e,{scale:1,seed:i,hang:.35}),s}function pc(i,t,e){i.userData.treeKind=t;const n=py(t,e);return n&&(i.userData.plantId=n),e!=null&&e.glowSiZhao&&(i.userData.overlay="siZhao"),e!=null&&e.lacquer&&(i.userData.overlay="lacquer"),e!=null&&e.strange&&(i.userData.overlay="strange"),i}function OM(i,t,e,n){if(n!=null&&n.glowSiZhao){const s=uy(),r=Math.min(t.length,8);ss(i,PM,s,r*2,o=>{const a=t[o%r];Ct.position.copy(a.pos).addScaledVector(a.dir,.06),Ct.quaternion.copy(Ui(a.dir)),Ct.rotateX(.55+Xt(e+o)*.2),Ct.scale.setScalar(.82+o%3*.1)})}if(n!=null&&n.lacquer){const s=hy();for(let r=0;r<6;r+=1){const o=t[r%Math.max(1,t.length)],a=st(i,LM,s,o.pos.x,o.pos.y,o.pos.z);a.quaternion.copy(Ui(o.dir)),a.rotateZ(.15)}}}function kM(i,t,e,n){ss(i,TM,e,t.length*2,s=>{const r=t[Math.floor(s/2)%t.length],o=s%2;Vh.copy(r.dir).lerp(mM,.55).normalize(),Ct.position.copy(r.pos),Ct.quaternion.copy(Ui(Vh)),Ct.rotateZ((o?1:-1)*.32),Ct.rotateY(Xt(n+s)*.12),Ct.scale.set(1.35,1.05+Xt(n+s*3)*.18,1)})}function HM(i,t,e,n){const s=t.filter((o,a)=>a%2===1||t.length<8),r=Math.min(s.length,rs(14,n));ss(i,AM,ay(),r,o=>{const a=s[o%s.length];Ct.position.copy(a.pos).addScaledVector(a.dir,.04),Ct.position.y-=.2,Ct.rotation.set(Xt(e+o)*.3,Xt(e+o*3)*Math.PI,.1),Ct.scale.setScalar(.9+Xt(e+o*5)*.3)}),ss(i,RM,ht(tt.yanCalyx),r,o=>{const a=s[o%s.length];Ct.position.copy(a.pos).addScaledVector(a.dir,.04),Ct.position.y-=.13,Ct.rotation.set(0,Xt(e+o)*Math.PI,0),Ct.scale.setScalar(1)})}function VM(i,t,e,n){const s=t.filter((o,a)=>a%3===0),r=Math.min(s.length,rs(10,n));ss(i,CM,cy(),r,o=>{const a=s[o%Math.max(1,s.length)];Ct.position.copy(a.pos).addScaledVector(a.dir,.05),Ct.position.y-=.16,Ct.rotation.set(Xt(e+o)*.25,Xt(e+o*3)*Math.PI,.08),Ct.scale.setScalar(.95+Xt(e+o*5)*.28)})}function GM(i,t,e){const n=Math.min(t.length,10);ss(i,IM,ly(),n,s=>{const r=t[s%t.length];Ct.position.copy(r.pos),Ct.quaternion.copy(Ui(r.dir)),Ct.rotateX(1.15),Ct.scale.set(1,1.15+Xt(e+s)*.25,1)})}function ga(i,t,e,n){if(i==="zong")return pc(zM(t,Gv(),ty(),e),i,n);if(i==="zhu")return pc(BM(t,Yv(),ry(),e),i,n);const s=n!=null&&n.lacquer?kv():xf(),r=!!(n!=null&&n.strange);let o;return i==="gui"?(o=bs(t,zv(),{h:5.2,r0:.22,r1:.07,arms:7,spread:.82,gnarl:.12,t0:.48,t1:.94,along:!0}),vn(o.root,o.sockets,gM,$v(),{scale:1.08,seed:t,pair:!0})):i==="song"?(o=DM(t,Hv(),e),kM(o.root,o.sockets,Jv(),t)):i==="bai"?(o=UM(t,Vv(),e),vn(o.root,o.sockets,xM,Qv(),{scale:1.08,seed:t,pair:!0,vertical:!0})):i==="tan"?(o=bs(t,Wv(),{h:3.6,r0:.26,r1:.09,arms:6,spread:.72,gnarl:.28,stems:3,along:!0}),vn(o.root,o.sockets,vM,ey(),{scale:1.02,seed:t,pair:!1})):i==="sang"?(o=bs(t,s,{h:4.4,r0:r?.3:.32,r1:.1,arms:r?4:6,spread:r?1.12:.95,gnarl:r?.85:.4,along:!0,uneven:r}),vn(o.root,o.sockets,Ef,vf(),{scale:1.12,seed:t,hang:.25}),OM(o.root,o.sockets,t,n)):i==="tao"?(o=bs(t,Xv(),{h:3.8,r0:.2,r1:.07,arms:6,spread:.92,gnarl:.16,t0:.4,t1:.92,along:!0}),vn(o.root,o.sockets,yM,ny(),{scale:1.05,seed:t,pair:!1}),VM(o.root,o.sockets,t,e)):i==="zi"?(o=bs(t,qv(),{h:5.1,r0:.24,r1:.08,arms:6,spread:.78,gnarl:.14,along:!0}),vn(o.root,o.sockets,MM,iy(),{scale:1.12,seed:t,pair:!1}),GM(o.root,o.sockets,t)):i==="liu"?(o=NM(t,jv()),vn(o.root,o.sockets,SM,sy(),{scale:.95,seed:t,hang:.15})):i==="shan"?(o=FM(t,Zv(),e),vn(o.root,o.sockets,wM,oy(),{scale:.98,seed:t,hang:.22})):(o=bs(t,Ov(),{h:5.6,r0:.2,r1:.06,arms:6,spread:.78,gnarl:.18,along:!0}),vn(o.root,o.sockets,_M,Kv(),{scale:1.02,seed:t,pair:!1}),HM(o.root,o.sockets,t,e)),pc(o.root,i,n)}function WM(){const i=xf(),t=vf(),e=ht(tt.gold,{emissive:tt.gold,emissiveIntensity:.28}),n=ht("#5a2e18",{emissive:"#9c2b1a",emissiveIntensity:.22}),s=ur(i,4.6,1.45,78,1,11),r=[];for(let o=0;o<9;o+=1){const a=o/9*Math.PI*2+.18,c=20+o%3*10,u=Gn(a,1.02+o%3*.06);ci(s,i,new I(0,c,0),u,24+o%4*3.2,1.15,.32,r,!0)}for(let o=0;o<6;o+=1){const a=o/6*Math.PI*2+.4;ci(s,i,new I(0,48,0),Gn(a,.72),16,.7,.22,r,1)}ci(s,i,new I(0,70,0),new I(.08,1,.04).normalize(),18,1.25,.38,r,!0),vn(s,r,Ef,t,{scale:5.2,seed:9,hang:.2});for(let o=0;o<9;o+=1){const a=r[Math.min(o*2,r.length-1)];st(s,is(2.35),n,a.pos.x,a.pos.y+.4,a.pos.z)}return st(s,is(3.6),e,0,88,0),s.name="扶桑",s}function vl(i,t,e,n,s=0){const r=i.clone(!0),o=[];i.traverse(c=>{c instanceof Vn&&o.push(c)});let a=0;return r.traverse(c=>{if(!(c instanceof Vn))return;const u=o[a];a+=1,u&&(c.instanceMatrix=u.instanceMatrix.clone(),c.instanceMatrix.needsUpdate=!0,c.count=u.count,u.instanceColor&&(c.instanceColor=u.instanceColor.clone(),c.instanceColor&&(c.instanceColor.needsUpdate=!0)))}),r.position.set(t,e,n),r.rotation.y=s,r.scale.setScalar(1.85),r.updateMatrixWorld(),r}function Af(i,t="high"){const e=new te;i.background=new Rt(tt.sky);const n=new ff(tt.sky,tt.sand,.95);e.add(n);const s=new pa(12113128,.45);s.castShadow=!1,s.position.set(-80,50,-110),e.add(s);const r=new pa(16767392,1.12);r.castShadow=!1,e.add(r),e.add(r.target);const o=new I,a=(c,u=0,l=0)=>{const h=14+Math.sin(c*.02)*1.5,d=210,f=Cu.degToRad(90-h),g=Cu.degToRad(d);o.setFromSphericalCoords(1,f,g),r.target.position.set(u,0,l),r.position.copy(o).multiplyScalar(110).add(r.target.position)};return a(0),i.add(e),{group:e,sun:r,update:a}}const Cf=40,Rf=4;function XM(){const i=new qs(new Uint8Array([0,0,0,255]),1,1,Ke,Ln);return i.needsUpdate=!0,i}const qM=`
  uniform float uTime;
  varying vec3 vWorld;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.45 + position.x * 0.045 + position.z * 0.038) * 0.14;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,jM=`
  varying vec3 vWorld;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uCam;
  uniform float uHole;
  uniform float uLandOn;
  uniform sampler2D uLand;
  uniform vec2 uLandMin;
  uniform vec2 uLandSize;
  uniform float uSea;
  uniform float uHScale;
  uniform float uHBias;

  void main() {
    float shore = 0.35;
    if (uLandOn > 0.5) {
      vec2 uv = (vWorld.xz - uLandMin) / uLandSize;
      if (uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0) {
        float h = texture2D(uLand, uv).r * uHScale - uHBias;
        if (h > uSea - 0.25) discard;
        shore = 1.0 - smoothstep(uSea - 1.4, uSea - 0.2, h);
      }
    } else if (uHole > 0.01) {
      float d = length(vWorld.xz);
      if (d < uHole) discard;
    }
    vec3 col = mix(uDeep, uShallow, shore);
    float rim = pow(1.0 - max(dot(normalize(uCam - vWorld), vec3(0.0, 1.0, 0.0)), 0.0), 2.4);
    col = mix(col, uShallow, rim * 0.35);
    gl_FragColor = vec4(col, 0.86);
  }
`;function YM(i){const t=new qs(new Uint8Array(i*i*4),i,i,Ke,Ln);return t.wrapS=t.wrapT=Ai,t.minFilter=yn,t.magFilter=yn,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Wh(i,t,e){const n=i.image.data,s=e*e;for(let r=0;r<s;r+=1){const o=t[r]??0,a=Math.max(0,Math.min(255,(o+Rf)/Cf*255)),c=r*4;n[c]=a,n[c+1]=a,n[c+2]=a,n[c+3]=255}i.needsUpdate=!0}function ZM(i,t,e,n,s){const r=i.material;r.uniforms.uLand.value=t,r.uniforms.uLandOn.value=1,r.uniforms.uLandMin.value.set(e,n),r.uniforms.uLandSize.value.set(s,s)}function Pf(i){const t=i.qualityHigh?14:8,e=new Zr(i.width,i.depth,t,Math.max(6,Math.floor(t/2)));e.rotateX(-Math.PI/2);const n=new li({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{uTime:{value:0},uDeep:{value:new Rt(tt.seaDeep)},uShallow:{value:new Rt(tt.sea)},uCam:{value:new I},uHole:{value:i.hole??0},uLandOn:{value:0},uLand:{value:XM()},uLandMin:{value:new Ft(-1,-1)},uLandSize:{value:new Ft(2,2)},uSea:{value:Re},uHScale:{value:Cf},uHBias:{value:Rf}},vertexShader:qM,fragmentShader:jM}),s=new ce(e,n);return s.position.set(i.x,Re,i.z),s.renderOrder=0,s}function Lf(i,t,e,n,s){const r=i.material;r.uniforms.uTime.value=t,r.uniforms.uCam.value.set(e,n,s)}const $M=()=>ht(tt.cloud);function KM(i,t,e,n,s,r,o,a=!1){const c=st(i,a?is(.55):Et(1,1,1),$M(),t,e,n);c.scale.set(s,r,o),c.castShadow=!1,c.receiveShadow=!1}function JM(i){const t=new te,e=4+i%4;for(let n=0;n<e;n+=1){const s=n/e*Math.PI*2+i*.2;KM(t,Math.cos(s)*(1.2+n%3*.6),n%2*.35,Math.sin(s)*(.8+n%2*.5),2.2+n%3*.7,.7+n%2*.25,1.4+n%3*.5,n%3===0)}return t}function QM(i){const t=new te,e=i==="high"?16:8;for(let n=0;n<e;n+=1){const s=JM(n*17),r=n%2===0?-1:1;s.position.set((n-e/2)*140+n%3*28,148+n%4*14,r*(180+n%3*28)),s.scale.setScalar(3.2+n%3*1.1),t.add(s)}return{group:t,update(n){t.position.x=Math.sin(n*.012)*18}}}function Xh(i,t,e=5.5){const n=new te;n.position.set(i,e,t);const s=ht(tt.cloud,{transparent:!0,opacity:.16,depthWrite:!1});for(let r=0;r<6;r+=1){const o=new ce(Et(4.5,.55,2.2),s);o.position.set(r%3*3.2-3.2,r%2*.35,Math.floor(r/3)*3.5-1.8),o.castShadow=!1,o.receiveShadow=!1,n.add(o)}return{group:n,update(r){n.children.forEach((o,a)=>{o.position.y=.15+Math.sin(r*.4+a)*.08})}}}const Sr=new ve,t1=.02,mc=new Rt;function e1(i){switch(i){case"jade":return tt.jade;case"ore":case"crown":return tt.gold;case"forbidden":case"scree":return"#e8e0d4";case"shade":return tt.jade;case"quarry":case"hollow":return tt.lacquer;case"shelf":return tt.moss;case"foothill":case"clearing":return tt.rock;case"barren":return tt.rock;case"strange":return tt.moss;default:return null}}function n1(i){const t=new te,e=340,n=Math.max(1,i.maxX-i.minX);for(let s=i.minX;s<i.maxX;s+=e){const r=Math.min(i.maxX,s+e),o=(r-s)/n,a=Math.max(4,Math.floor(i.count*o)),c=Math.floor(a*.62),u=a-c,l={...i,minX:s,maxX:r};t.add(qh(l,Et(1.1,.7,.9),c,!1)),t.add(qh(l,is(.55),u,!0))}return t}function qh(i,t,e,n){const s=ht("#f2eee6");if(e<1){const c=new Vn(t,s,1);return c.count=0,c.visible=!1,c}const r=new Vn(t,s,e);r.castShadow=!1,r.frustumCulled=!0;let o=0,a=0;for(;o<e&&a<e*12;){a+=1;const c=i.minX+Math.random()*(i.maxX-i.minX),u=i.minZ+Math.random()*(i.maxZ-i.minZ),l=i.biomeAt(c,u),h=e1(l);if(!h||n&&l!=="jade"&&l!=="ore"&&l!=="crown"||!n&&(l==="jade"||l==="ore"||l==="crown")&&Math.random()<.55)continue;const d=i.sample(c,u);if(d<Re)continue;const f=.55+Math.random()*(l==="ore"?1.7:l==="forbidden"?1.5:1.2);Sr.position.set(c,d-t1+(n?f*.45:0),u),Sr.rotation.set(0,Math.random()*Math.PI,n?.35:0),Sr.scale.set(f,f*(n?.9+Math.random()*.5:.45+Math.random()*.4),f*(.7+Math.random()*.4)),Sr.updateMatrix(),r.setMatrixAt(o,Sr.matrix),mc.set(h),l==="shade"&&mc.offsetHSL(0,0,-.18),r.setColorAt(o,mc),o+=1}return r.count=o,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.computeBoundingSphere(),r}const i1=[{id:"tiger",name:"虎"},{id:"cow",name:"牛"},{id:"horse",name:"馬"},{id:"fox",name:"狐"},{id:"macaque",name:"獼猴"},{id:"gibbon",name:"猿"},{id:"sheep",name:"羊"},{id:"bird",name:"鳥"},{id:"carp",name:"鯉"}],s1=[{id:"horse",name:"馬"},{id:"fox",name:"狐"},{id:"cow",name:"牛"},{id:"macaque",name:"獼猴"},{id:"gibbon",name:"猿"},{id:"civet",name:"狸"},{id:"sheep",name:"羊"},{id:"fish",name:"魚"},{id:"turtle",name:"龜"}],r1=[{id:"none",name:"無"},{id:"horse",name:"馬"},{id:"redHorse",name:"赤馬"},{id:"fox",name:"狐"},{id:"foxNine",name:"九尾"},{id:"longMonkey",name:"猿"},{id:"snake",name:"蛇"},{id:"fish",name:"魚"}],o1=[{id:"ungulate",name:"蹄"},{id:"digitigrade",name:"趾行"},{id:"gibbon",name:"長臂"},{id:"fins",name:"鰭"},{id:"none",name:"無"}],a1={shengsheng:{head:"macaque",body:"macaque",tail:"longMonkey",limbs:"digitigrade",headTint:"pink",scale:1.35},baiyuan:{head:"gibbon",body:"gibbon",tail:"none",limbs:"gibbon",scale:1.25},guaishen:{head:"carp",body:"fish",tail:"snake",limbs:"none",serpentine:!0},lushu:{head:"horse",body:"horse",tail:"redHorse",limbs:"ungulate",headTint:"white",bodyPelt:"tiger",scale:1.2},xuangui:{head:"bird",body:"turtle",tail:"snake",limbs:"none"},lu:{head:"cow",body:"fish",tail:"snake",limbs:"none",wings:"feather"},lei:{head:"fox",body:"civet",tail:"fox",limbs:"digitigrade",mane:!0,scale:1.2},bochi:{head:"sheep",body:"sheep",tail:"foxNine",limbs:"ungulate",extraEars:!0,backEye:!0,scale:1.15},jiweihu:{head:"fox",body:"fox",tail:"foxNine",limbs:"digitigrade",lookBack:!0,scale:1.55},guanguan:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:.72},chilu:{head:"carp",body:"fish",tail:"fish",limbs:"fins",humanFace:!0},fenghuang:{head:"bird",body:"sheep",tail:"redHorse",limbs:"none",wings:"feather",scale:1.8},tuanyu:{head:"carp",body:"fish",tail:"fish",limbs:"fins",mane:!0,scale:1.3},jingwei:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:.85},zhurong:{head:"tiger",body:"cow",tail:"snake",limbs:"ungulate",humanFace:!0,scale:1.6},dijiang:{head:"sheep",body:"sheep",tail:"none",limbs:"ungulate",wings:"feather",scale:1.4},luwu:{head:"tiger",body:"cow",tail:"foxNine",limbs:"digitigrade",humanFace:!0,bodyPelt:"tiger",scale:1.7},tulou:{head:"sheep",body:"sheep",tail:"fox",limbs:"ungulate",extraEars:!0,scale:1.3},qinyuan:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:.55},chunniao:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:.9},kaiming:{head:"tiger",body:"cow",tail:"foxNine",limbs:"digitigrade",humanFace:!0,bodyPelt:"tiger",scale:2.1},bifang:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:1.1},luan:{head:"bird",body:"sheep",tail:"redHorse",limbs:"none",wings:"feather",scale:1.4},lizhu:{head:"bird",body:"fox",tail:"none",limbs:"none",wings:"feather",scale:1},yayu:{head:"tiger",body:"fish",tail:"snake",limbs:"none",humanFace:!0,serpentine:!0,scale:1.5},liushou:{head:"bird",body:"sheep",tail:"snake",limbs:"none",wings:"feather",scale:1.3},bao:{head:"tiger",body:"fox",tail:"fox",limbs:"digitigrade",bodyPelt:"tiger",scale:1.4},huangshou:{head:"tiger",body:"cow",tail:"horse",limbs:"ungulate",scale:1.3},heilong:{head:"tiger",body:"fish",tail:"snake",limbs:"none",serpentine:!0,scale:1.8},xiwangmu:{head:"tiger",body:"sheep",tail:"fox",limbs:"digitigrade",humanFace:!0,mane:!0,scale:1.35},jiao:{head:"fox",body:"fox",tail:"fox",limbs:"digitigrade",extraEars:!0,scale:1.2},shengyu:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:.95},qingniao:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:.7},xingtian:{head:"cow",body:"cow",tail:"none",limbs:"ungulate",scale:1.7},xihe:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",humanFace:!0,scale:1.2},kui:{head:"cow",body:"cow",tail:"none",limbs:"ungulate",scale:1.9}},Os={head:"tiger",body:"cow",tail:"fish",limbs:"ungulate",scale:1.15},c1=ht(tt.furMacaque),l1=ht("#d8c4a8"),yl=ht(tt.furPink),Or=ht(tt.furWhite),If=ht(tt.furHorse),Df=ht(tt.furTiger),Uf=ht(tt.furWhite),u1=ht("#9c2b1a"),iu=ht(tt.furFox),h1=ht("#f4ead8"),d1=ht(tt.furCivet),Nf=ht(tt.furSheep),f1=ht("#7a6a58"),p1=ht(tt.scale),m1=ht(tt.shell),Ff=ht(tt.furCow),Bf=ht(tt.carp),g1=ht(tt.skin),_1=ht(tt.beak),jh=ht(tt.horn),Yh=ht(tt.wing),x1=ht(tt.eye),v1=ht(tt.eyeWhite),Ml=ht(tt.furCowSpot);function Mi(i,t={}){var c,u;const e=l=>new I(...l),n=t.chest??[0,i[1]-.22,i[2]-.22],s=t.hips??[0,n[1]-.04,-.08],r=t.rump??[0,s[1],-.42],o=((c=t.shoulderL)==null?void 0:c[1])??n[1],a=((u=t.shoulderL)==null?void 0:u[2])??n[2];return{head:e(i),chest:e(n),hips:e(s),rump:e(r),shoulderL:e(t.shoulderL??[-.14,o,a]),shoulderR:e(t.shoulderR??[.14,o,a]),hipL:e(t.hipL??[-.12,s[1],r[2]+.12]),hipR:e(t.hipR??[.12,s[1],r[2]+.12]),wingL:e(t.wingL??[-.02,n[1]+.06,n[2]-.05]),wingR:e(t.wingR??[.02,n[1]+.06,n[2]-.05])}}function y1(i,t){if(t)return Df;switch(i){case"horse":return If;case"fox":return iu;case"cow":return Ff;case"macaque":return c1;case"gibbon":return Or;case"civet":return d1;case"sheep":return Nf;case"fish":return Bf;case"turtle":return m1}}function M1(i){switch(i){case"horse":return{length:1.18,rBack:.26,rFront:.22,flatten:.58,y:.58};case"cow":return{length:1.12,rBack:.3,rFront:.24,flatten:.68,y:.55};case"fox":return{length:.82,rBack:.15,rFront:.12,flatten:.55,y:.34};case"civet":return{length:.74,rBack:.14,rFront:.11,flatten:.52,y:.3};case"macaque":return{length:.78,rBack:.18,rFront:.16,flatten:.62,y:.38};case"sheep":return{length:.72,rBack:.2,rFront:.16,flatten:.7,y:.4};default:return{length:.9,rBack:.2,rFront:.16,flatten:.6,y:.45}}}function S1(i,t,e,n=!1){if(t==="gibbon")return st(i,$r(.12,.07,.62,6),e,0,.42,0),st(i,Et(.16,.22,.14),e,0,.72,.02),Mi([0,1.02,.08],{chest:[0,.78,.04],hips:[0,.5,0],rump:[0,.48,-.08],shoulderL:[-.1,.88,.04],shoulderR:[.1,.88,.04],hipL:[-.06,.5,-.02],hipR:[.06,.5,-.02]});if(t==="turtle")return st(i,nr(.34,.16,6),e,0,.08,0).scale.set(1,1,1.2),st(i,ra(.22,.1,6),e,0,.22,0),Mi([0,.2,.38],{chest:[0,.16,.08],hips:[0,.14,-.05],rump:[0,.12,-.32],wingL:[-.18,.2,.05],wingR:[.18,.2,.05]});if(t==="fish"&&n){const a=[[1.05,.16,.1],[.55,.26,-.08],[.05,.12,.16],[-.45,.22,-.12],[-.95,.1,.08]];for(let c=0;c<a.length;c+=1){const u=a[c],l=st(i,nr(.09-c*.01,.22,6),e,u[0],u[1],u[2]);l.rotation.z=Math.PI/2,l.rotation.y=c*.2,c===a.length-1&&(l.userData.part="tail")}return Mi([1.12,.2,.1],{chest:[.4,.18,0],hips:[-.2,.16,0],rump:[-.9,.1,.08]})}if(t==="fish")return st(i,Oh(1.05,.08,.06,.55,6),e,0,0,0),Mi([0,.12,.55],{chest:[0,.1,.12],hips:[0,.09,-.15],rump:[0,.08,-.52],shoulderL:[-.12,.1,.18],shoulderR:[.12,.1,.18],hipL:[-.1,.08,-.28],hipR:[.1,.08,-.28],wingL:[0,.14,.05],wingR:[0,.14,-.05]});const s=M1(t),r=Math.max(s.rBack,s.rFront)*s.flatten,o=Math.max(.02,s.y-r);return st(i,Oh(s.length,s.rBack,s.rFront,s.flatten,6),e,0,o,0),t==="cow"&&(st(i,Et(.12,.08,.1),Ml,-.08,o+r+.02,.12),st(i,Et(.1,.07,.08),Ml,.1,o+r-.02,-.18)),t==="horse"||t==="cow"?Mi([0,s.y+.22,.58],{chest:[0,s.y-.08,.28],hips:[0,s.y-.1,-.1],rump:[0,s.y-.08,-.58],shoulderL:[-.14,s.y-.1,.32],shoulderR:[.14,s.y-.1,.32],hipL:[-.14,s.y-.1,-.32],hipR:[.14,s.y-.1,-.32]}):t==="macaque"?Mi([0,.52,.42],{chest:[0,.4,.18],hips:[0,.36,-.08],rump:[0,.34,-.4],shoulderL:[-.12,.38,.22],shoulderR:[.12,.38,.22],hipL:[-.11,.36,-.18],hipR:[.11,.36,-.18]}):t==="fox"||t==="civet"?Mi([0,s.y+.16,.38],{chest:[0,s.y-.04,.18],hips:[0,s.y-.04,-.08],rump:[0,s.y-.04,-.38],shoulderL:[-.1,s.y-.06,.22],shoulderR:[.1,s.y-.06,.22],hipL:[-.1,s.y-.08,-.22],hipR:[.1,s.y-.08,-.22]}):Mi([0,.58,.4],{chest:[0,.42,.16],hips:[0,.38,-.06],rump:[0,.36,-.32],shoulderL:[-.12,.4,.2],shoulderR:[.12,.4,.2],hipL:[-.12,.36,-.2],hipR:[.12,.36,-.2]})}function b1(i,t){if(t==="white")return Uf;if(t==="pink")return yl;switch(i){case"tiger":return Df;case"cow":return Ff;case"horse":return If;case"fox":return iu;case"macaque":return yl;case"gibbon":return Or;case"sheep":return Nf;case"bird":return f1;case"carp":return Bf}}function ws(i,t,e,n,s=.028){const r=st(i,He(s*1.6,s*1.6),v1,t,e,n);r.rotation.x=-.2;const o=st(i,He(s*.7,s*.7),x1,t,e,n+.008);o.rotation.x=-.2}function Po(i,t,e,n,s,r=1){const o=st(i,He(.07*r,.14*r),s,t,e,n);o.rotation.z=t<0?.45:-.45,o.rotation.x=-.3}function w1(i,t,e,n){const s=new te;s.position.copy(e),n.lookBack&&(s.rotation.y=.85),i.add(s);const r=b1(t,n.tint??"default"),o=t==="horse"||t==="cow"?1.2:t==="tiger"?1.12:1;if(t==="bird"){st(s,Et(.12*o,.1*o,.14*o),r,0,-.02,0);const l=st(s,ra(.03,.08,4),_1,0,-.02,.1);return l.rotation.x=Math.PI/2,ws(s,-.03,.02,.06,.016),ws(s,.03,.02,.06,.016),s}if(t==="carp"){const l=n.humanFace?g1:r;return st(s,Et(.16*o,.12*o,.18*o),l,0,0,.02),st(s,Et(.08,.06,.1),l,0,-.02,.12),ws(s,-.045,.03,.1,.018),ws(s,.045,.03,.1,.018),s}st(s,Et(.18*o,.16*o,.16*o),r,0,.02,0);const a=t==="tiger"||n.tint==="white"?Uf:r;st(s,Et(.1*o,.08*o,.14*o),a,0,-.03*o,.12*o);const c=t==="macaque"||t==="gibbon"?Or:r,u=t==="fox"||t==="tiger"?1.1:.85;if(Po(s,-.08*o,.12*o,-.02,c,u),Po(s,.08*o,.12*o,-.02,c,u),n.extraEars&&(Po(s,-.08*o,.12*o,-.08,Or,.9),Po(s,.08*o,.12*o,-.08,Or,.9)),t==="cow"){const l=st(s,ra(.025,.14,4),jh,-.08,.14,-.02);l.rotation.z=.45;const h=st(s,ra(.025,.14,4),jh,.08,.14,-.02);h.rotation.z=-.45,st(s,Et(.06,.05,.04),Ml,-.05,.01,.08)}return(t==="macaque"||t==="gibbon")&&st(s,Et(.1,.08,.06),t==="gibbon"?yl:l1,0,-.01,.08),ws(s,-.045*o,.03,.1*o,.02),ws(s,.045*o,.03,.1*o,.02),s}function E1(i,t){return i==="redHorse"?u1:i==="fox"||i==="foxNine"?iu:i==="snake"||i==="fish"?p1:t}function Kn(i){return i.userData.part="tail",i}function T1(i,t,e,n){if(t==="none")return;const s=E1(t,n),r=e.x,o=e.y,a=e.z;if(t==="foxNine"){for(let l=0;l<9;l+=1){const h=(l-4)/4.2,d=st(i,Br(.1,.72,.035),l%2?h1:s,r+h*.08,o+.06,a);d.rotation.y=h*.55,d.rotation.x=Math.PI/2+.2,Kn(d)}return}if(t==="fish"){const l=st(i,Br(.28,.42,.04),s,r,o+.04,a);l.rotation.x=Math.PI/2,Kn(l);return}if(t==="horse"||t==="redHorse"){const l=on(i,{x:r,y:o,z:a},{x:r-.04,y:o-.18,z:a-.42},.045,.03,s),h=on(i,{x:r-.04,y:o-.18,z:a-.42},{x:r+.06,y:o-.32,z:a-.85},.03,.016,s);Kn(l),Kn(h);return}if(t==="fox"){const l=st(i,Br(.12,.62,.04),s,r,o+.04,a);l.rotation.x=Math.PI/2+.25,Kn(l);return}if(t==="longMonkey"){const l=on(i,{x:r,y:o,z:a},{x:r+.04,y:o-.12,z:a-.32},.03,.02,s),h=on(i,{x:r+.04,y:o-.12,z:a-.32},{x:r-.06,y:o-.28,z:a-.65},.02,.01,s);Kn(l),Kn(h);return}const c=on(i,{x:r,y:o,z:a},{x:r-.08,y:o-.04,z:a-.35},.038,.024,s),u=on(i,{x:r-.08,y:o-.04,z:a-.35},{x:r+.05,y:o-.1,z:a-.7},.024,.012,s);st(i,nr(.012,.08,6),s,r+.05,o-.12,a-.74),Kn(c),Kn(u)}function A1(i,t,e,n){if(t==="none")return;const s=e.shoulderL,r=e.shoulderR,o=e.hipL,a=e.hipR;if(t==="fins"){const u=st(i,He(.22,.28),n,s.x,s.y,s.z+.04);u.rotation.z=.9;const l=st(i,He(.22,.28),n,r.x,r.y,r.z-.04);l.rotation.z=-.9;return}if(t==="gibbon"){on(i,s,{x:s.x-.52,y:0,z:s.z+.14},.028,.016,n),on(i,r,{x:r.x+.52,y:0,z:r.z+.14},.028,.016,n),on(i,o,{x:o.x-.02,y:0,z:o.z+.08},.026,.014,n),on(i,a,{x:a.x+.02,y:0,z:a.z+.08},.026,.014,n);return}const c=t==="ungulate"?.048:.032;on(i,s,{x:s.x*1.1,y:0,z:s.z+.08},c,c*.45,n),on(i,r,{x:r.x*1.1,y:0,z:r.z+.08},c,c*.45,n),on(i,o,{x:o.x*1.1,y:0,z:o.z-.08},c*1.05,c*.48,n),on(i,a,{x:a.x*1.1,y:0,z:a.z-.08},c*1.05,c*.48,n)}function C1(i,t,e){if(e!=="feather")return;const n=st(i,ma(.42,5),Yh,t.wingL.x-.18,t.wingL.y,t.wingL.z);n.rotation.y=Math.PI/2,n.rotation.z=.35;const s=st(i,ma(.42,5),Yh,t.wingR.x+.18,t.wingR.y,t.wingR.z);s.rotation.y=-Math.PI/2,s.rotation.z=-.35}function R1(i,t,e){for(let n=0;n<5;n+=1){const s=n/4,r=st(i,He(.08,.16),e,0,t.head.y-.02+s*.22,t.chest.z-s*.12);r.rotation.x=.6}}const P1=ht(tt.eye,{emissive:"#331111",emissiveIntensity:.45});function L1(i){const t=new te,e=y1(i.body,i.bodyPelt==="tiger"),n=S1(t,i.body,e,i.serpentine);return w1(t,i.head,n.head,{tint:i.headTint??"default",lookBack:i.lookBack,extraEars:i.extraEars,humanFace:i.humanFace}),T1(t,i.tail,n.rump,e),A1(t,i.limbs,n,e),C1(t,n,i.wings??"none"),i.mane&&R1(t,n,e),i.backEye&&st(t,is(.045),P1,0,n.head.y+.12,n.hips.z),t.scale.setScalar(i.scale??1),t}const I1=.02,ks={x:1056,z:16},D1=new Set(["guanguan","jingwei","fenghuang","qinyuan","chunniao","qingniao","bifang","luan"]);function U1(i,t,e){return t.userData.creatureId=i,t.userData.recipe=e,t.userData.baseY=0,t.userData.homeX=0,t.userData.homeZ=0,t.userData.airborne=D1.has(i),t}function ir(i,t){const e=t??a1[i]??Os;return U1(i,L1(e),e)}function N1(i,t,e){const n=ir("guanguan"),s=ks.x+2,r=ks.z-3,o=t(s,r)+2.8;n.position.set(s,o,r),n.userData.baseY=o,n.userData.homeX=s,n.userData.homeZ=r,i.add(n);const a=ir("chilu");return a.position.set(Ss.x+4,t(Ss.x+4,Ss.z)+.05,Ss.z),a.userData.baseY=a.position.y,a.userData.homeX=a.position.x,a.userData.homeZ=a.position.z,i.add(a),[{id:"guanguan",x:s,z:r},{id:"chilu",x:Ss.x+4,z:Ss.z}]}const F1=new Set(["xuangui","chilu","lu","luwu","kaiming","xiwangmu","xingtian","zhurong","dijiang","fenghuang","xihe","kui"]);function _a(i,t,e){i.traverse(n=>{if(n.userData.part==="tail"&&(n.rotation.y=Math.sin(t*1.6+n.id)*.18),!n.userData.creatureId||n.parent&&n.parent!==i&&!n.userData.homeX&&n.userData.homeX!==0)return;const s=n.userData.creatureId,r=n.userData.homeX??n.position.x,o=n.userData.homeZ??n.position.z,a=n.userData.baseY??n.position.y;if(s==="jingwei"){const c=t*.12;n.position.x=420+1820*(.5+.5*Math.sin(c)),n.position.z=-988+1486*(.5+.5*Math.sin(c))}else!F1.has(s)&&!n.userData.still&&(n.position.x=r+Math.sin(t*.45+r)*1.15,n.position.z=o+Math.cos(t*.38+o)*1.05,n.rotation.y+=.35*.016);if(n.userData.airborne)n.position.y=a+Math.sin(t*2.1+r)*.2;else if(e){const c=e(n.position.x,n.position.z)-I1;n.position.y=c+Math.sin(t*2.1+r)*.02}})}function B1(){const i=new te;i.name="灌灌";for(let t=0;t<6;t+=1){const e=ir("guanguan");e.position.set(ks.x+(t-2.5)*3.2,Bn(ks.x,ks.z)+4+t%3,ks.z+t%2*4),e.userData.homeX=e.position.x,e.userData.homeZ=e.position.z,e.userData.baseY=e.position.y,i.add(e)}return{group:i,update(t){_a(i,t)}}}const Dt=new Rt,Lo=new Rt(tt.sand),Es=new Rt(tt.gold),gc=new Rt(tt.ridge),_c=new Rt(tt.lacquer),xc=new Rt("#d8d0c4"),z1=new Rt("#1e4a40"),O1=new Rt("#2a221c");function kr(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function k1(i,t,e,n=.18){return i(t,e)+(kr(t*.37,e*.41)-.5)*n}function H1(i,t,e,n){const s=wf(i,e);if(s){s.id==="kunlun-hei"?Dt.set("#0a0a0c"):s.id==="ji-hei"?Dt.set("#1a1410"):s.id==="kunlun-chi"||s.id==="fengyuan"?Dt.set("#7a2418"):s.id==="dan"||s.id==="dan-pool"?Dt.set("#6a2018"):s.id==="ruo"?Dt.set("#3a4a40"):Dt.set(s.color);const o=(kr(i,e)-.5)*.08;return Dt.offsetHSL(0,0,o),Dt}if(n)switch(n(i,e,t)){case"cassia":Dt.set(tt.grass),i<48&&Dt.lerp(Lo,.45),t>28&&Dt.lerp(Es,.35),t>48&&Dt.lerp(gc,.32);break;case"yan":Dt.set(tt.ridge);break;case"sand":Dt.set(tt.sand);break;case"jade":Dt.set(tt.jade),t>40&&Dt.lerp(Es,.22);break;case"strange":Dt.set(tt.moss);break;case"barren":Dt.set(tt.rock);break;case"forbidden":Dt.set(tt.shadow),i<268&&Dt.lerp(xc,.55),t>50&&Dt.lerp(gc,.35);break;case"ore":Dt.set(tt.ridge),Dt.lerp(Es,.45+kr(i,e)*.2),t<28&&Dt.lerp(_c,.28),t>48&&Dt.lerp(Es,.35);break;case"gorge":Dt.set("#1a1410");break;case"quarry":Dt.set("#6a2018"),Dt.lerp(_c,.25);break;case"shade":Dt.set("#3a4a40"),Dt.lerp(z1,.35);break;case"scree":Dt.set(xc),Dt.lerp(Lo,.2);break;case"crown":Dt.set(Es),Dt.lerp(gc,.22);break;case"hollow":Dt.set(_c),Dt.lerp(O1,.35);break;case"clearing":Dt.set(tt.grass),Dt.lerp(Lo,.22);break;case"shelf":Dt.set(tt.moss),Dt.lerp(xc,.2);break;case"foothill":Dt.set(tt.grass),Dt.lerp(Lo,.12);break;case"sea":Dt.set(tt.sand);break;default:Dt.set(tt.grass);break}else t<Re+.45?Dt.set(tt.sand):t>7.5?Dt.set(tt.ridge):Dt.set(tt.grass);const r=(kr(i,e)-.5)*.08;return Dt.offsetHSL(0,0,r),t>10&&Dt.lerp(Es,.18),Dt}function zf(i,t,e,n,s,r,o,a,c,u,l){const h=n-e,d=r-s;let f=0;for(let g=0;g<=a;g+=1)for(let _=0;_<=o;_+=1){const m=e+_/o*h,p=s+g/a*d;let v=c(m,p);v+=(kr(m*.37,p*.41)-.5)*l,i[f*3]=m,i[f*3+1]=v,i[f*3+2]=p;const y=H1(m,v,p,u);t[f*3]=y.r,t[f*3+1]=y.g,t[f*3+2]=y.b,f+=1}}function su(i){const{minX:t,maxX:e,minZ:n,maxZ:s,segX:r,segZ:o,sample:a}=i,c=i.jitter??.12,u=new Ae,l=(r+1)*(o+1),h=new Float32Array(l*3),d=new Float32Array(l*3);zf(h,d,t,e,n,s,r,o,a,i.biomeAt,c);const f=[],g=r+1;for(let p=0;p<o;p+=1)for(let v=0;v<r;v+=1){const y=p*g+v,x=y+1,b=y+g,E=b+1;f.push(y,b,x,x,b,E)}u.setAttribute("position",new ye(h,3)),u.setAttribute("color",new ye(d,3)),u.setIndex(f),u.computeVertexNormals();const _=new Ca({color:16777215,vertexColors:!0,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:i.polygonOffset??0,polygonOffsetUnits:i.polygonOffset??0}),m=new ce(u,_);return m.receiveShadow=i.receiveShadow??!0,m.castShadow=!1,m.frustumCulled=!0,m.name="terrain",m.userData.jitter=c,m.userData.biomeAt=i.biomeAt,m.userData.minX=t,m.userData.maxX=e,m.userData.minZ=n,m.userData.maxZ=s,m.userData.segX=r,m.userData.segZ=o,m}function xa(i,t,e,n){return ru(i,t,e,n).y}function ru(i,t,e,n){const s=i.userData.minX,r=i.userData.maxX,o=i.userData.minZ,a=i.userData.maxZ,c=i.userData.segX,u=i.userData.segZ;if(s===void 0||r===void 0||o===void 0||a===void 0||!c||!u)return{y:n,ny:1};const l=r-s,h=a-o;if(l<=0||h<=0)return{y:n,ny:1};const d=(t-s)/l*c,f=(e-o)/h*u,g=Math.max(0,Math.min(c-1,Math.floor(d))),_=Math.max(0,Math.min(u-1,Math.floor(f))),m=d-g,p=f-_,v=i.geometry.getAttribute("position"),y=c+1,x=_*y+g,b=x+1,E=x+y,w=E+1,A=le=>v.getY(le);let S,M,R,L,U,D,N,B,G;m+p<1?(S=A(x),M=A(E),R=A(b),L=v.getX(x),U=v.getZ(x),D=v.getX(E),N=v.getZ(E),B=v.getX(b),G=v.getZ(b)):(S=A(b),M=A(E),R=A(w),L=v.getX(b),U=v.getZ(b),D=v.getX(E),N=v.getZ(E),B=v.getX(w),G=v.getZ(w));const V=(N-G)*(L-B)+(B-D)*(U-G);if(Math.abs(V)<1e-8)return{y:n,ny:1};const it=((N-G)*(t-B)+(B-D)*(e-G))/V,at=((G-U)*(t-B)+(L-B)*(e-G))/V,lt=1-it-at,yt=it*S+at*M+lt*R,kt=D-L,Z=M-S,K=N-U,gt=B-L,j=R-S,nt=G-U,Mt=Z*nt-K*j,Lt=K*gt-kt*nt,ee=kt*j-Z*gt,zt=Math.hypot(Mt,Lt,ee)||1;return{y:yt,ny:Lt/zt}}function ou(i,t,e,n,s,r,o,a){const c=i.geometry.getAttribute("position");let u=i.geometry.getAttribute("color");u||(u=new ye(new Float32Array(c.count*3),3),i.geometry.setAttribute("color",u));const l=c.array,h=u.array,d=i.userData.jitter??.12,f=i.userData.biomeAt;zf(l,h,t,e,n,s,r,o,a,f,d),c.needsUpdate=!0,u.needsUpdate=!0,i.geometry.computeVertexNormals()}const Of=.18,Hs=480,Io=2;function Zh(i,t){return`${i}:${t}`}function V1(i,t,e,n,s){const r=i*Hs,o=(i+1)*Hs,a=t*Hs,c=(t+1)*Hs,u=s==="high"?36:24,l=su({minX:r,maxX:o,minZ:a,maxZ:c,segX:u,segZ:u,sample:e,biomeAt:n,jitter:Of,receiveShadow:!1,polygonOffset:-2});return l.name=`patch-${i}-${t}`,l.userData.priority=1,l.renderOrder=1,l.userData.cx=i,l.userData.cz=t,l.geometry.computeBoundsTree(),l}function G1(i){const t=new te;t.name="world-terrain";const e=su({minX:On,maxX:si,minZ:kn,maxZ:ri,segX:160,segZ:50,sample:i.sample,biomeAt:i.biomeAt,jitter:Of,receiveShadow:!1,polygonOffset:4});e.name="terrain-coarse",e.userData.priority=0,e.renderOrder=0,e.geometry.computeBoundsTree(),t.add(e);const n={group:t,meshes:[e],coarse:e,patches:[]};return kf(n,i.x,i.z,i.sample,i.biomeAt,i.quality),n}function kf(i,t,e,n,s,r){const o=Math.floor(t/Hs),a=Math.floor(e/Hs),c=new Set;for(let h=-Io;h<=Io;h+=1)for(let d=-Io;d<=Io;d+=1)c.add(Zh(o+h,a+d));const u=[];let l=i.patches.length===0;for(const h of i.patches){const d=Zh(h.userData.cx,h.userData.cz);c.has(d)?(u.push(h),c.delete(d)):(l=!0,i.group.remove(h),h.geometry.dispose())}for(const h of c){l=!0;const[d,f]=h.split(":"),g=V1(Number(d),Number(f),n,s,r);i.group.add(g),u.push(g)}i.patches=u,i.meshes=[i.coarse,...u],l&&(ou(i.coarse,i.coarse.userData.minX,i.coarse.userData.maxX,i.coarse.userData.minZ,i.coarse.userData.maxZ,i.coarse.userData.segX,i.coarse.userData.segZ,n),W1(i.coarse,u),i.coarse.geometry.computeBoundsTree())}function W1(i,t){if(!t.length)return;const e=i.geometry.getAttribute("position"),n=e.array,s=t.map(r=>({minX:r.userData.minX+8,maxX:r.userData.maxX-8,minZ:r.userData.minZ+8,maxZ:r.userData.maxZ-8}));for(let r=0;r<e.count;r+=1){const o=n[r*3],a=n[r*3+2];for(const c of s)if(o>=c.minX&&o<=c.maxX&&a>=c.minZ&&a<=c.maxZ){n[r*3+1]=Re-14;break}}e.needsUpdate=!0,i.geometry.computeVertexNormals()}function Wr(i,t,e){let n,s=-1;for(const r of i){if(!r.visible&&(r.userData.priority??0)>0)continue;const o=r.userData.minX,a=r.userData.maxX,c=r.userData.minZ,u=r.userData.maxZ;if(o===void 0||a===void 0||c===void 0||u===void 0||t<o||t>a||e<c||e>u)continue;const l=r.userData.priority??0;l>=s&&(n=r,s=l)}return n}function X1(i,t,e,n){const s=Wr(i,t,e);return s?ru(s,t,e,n):{y:n,ny:1}}function q1(i,t,e,n){const s=Wr(i.meshes,t,e);s&&(ou(s,s.userData.minX,s.userData.maxX,s.userData.minZ,s.userData.maxZ,s.userData.segX,s.userData.segZ,n),s.geometry.computeBoundsTree())}const Ji={minX:On,maxX:si,minZ:kn,maxZ:ri},$h=La.map(i=>({x:i.padX,z:i.padZ,name:i.name,mountainId:i.id,quote:i.quote,modern:i.modern}));function Si(i,t,e,n){const s=si-On,r=ri-kn;return{px:(i-On)/s*e,py:(t-kn)/r*n}}function j1(){const i=si-On,t=ri-kn,e=document.createElement("canvas");e.width=1100,e.height=Math.max(2,Math.round(1100*(t/i)));const n=e.getContext("2d"),s=e.width,r=e.height;n.fillStyle="#c9b896",n.fillRect(0,0,s,r),n.fillStyle="#6a8aaa";const o=Si(-180,0,s,r).px;n.fillRect(0,0,Math.max(0,o),r);const a=Si(3300,0,s,r).px;n.fillRect(a,0,Math.max(0,s-a),r);const c=Si(1400,0,s,r).px,u=Si(0,420,s,r).py;n.fillRect(c,u,Math.max(0,s-c),Math.max(0,r-u));for(const l of hi){const h=Si(l.x,l.z,s,r),d=Math.max(8,l.rx/i*s),f=Math.max(7,l.rz/t*r);n.fillStyle="rgba(72, 56, 36, 0.55)",n.beginPath(),n.ellipse(h.px,h.py,d,f,0,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(50, 36, 20, 0.7)",n.lineWidth=1.2,n.stroke()}for(const l of Pa){if(n.strokeStyle=l.id.includes("hei")||l.id==="nanyuan"?"#1a1a22":l.color,n.lineWidth=Math.max(1.5,l.width/i*s*.9),n.lineCap="round",n.beginPath(),l.kind==="disk"||l.kind==="sheet"){const h=l.points[0],d=Si(h[0],h[1],s,r),f=(l.r??l.width)/i*s;n.fillStyle=l.color,n.globalAlpha=.7,n.beginPath(),n.ellipse(d.px,d.py,f,f*.7,0,0,Math.PI*2),n.fill(),n.globalAlpha=1;continue}l.points.forEach((h,d)=>{const f=Si(h[0],h[1],s,r);d===0?n.moveTo(f.px,f.py):n.lineTo(f.px,f.py)}),n.stroke()}for(const l of yf){const h=hi.find(d=>d.id===l.mountainId);if(h)for(const d of l.scatter){const f=Si(h.x+(d.xCenter??0),h.z+(d.zCenter??0),s,r),g=d.radius/i*s,_=d.radius/t*r;n.fillStyle="rgba(46, 72, 36, 0.4)",n.beginPath(),n.ellipse(f.px,f.py,g,_,0,0,Math.PI*2),n.fill()}}return e}const k=(i,t,e,n,s,r,o,a,c={})=>({id:i,mountainId:t,name:e,x:n,z:s,fp:r,source:o,mesh:a,...c}),Hf=[];{const e=[];for(let n=-1;n<=1;n+=1)for(let s=-1;s<=1;s+=1)s===0&&n===0||e.push([-2840+s*8,-380+n*8]);e.push([-2824,-364]),e.forEach((n,s)=>{Hf.push(k(`xu-well-${s}`,"kunlun-xu","九井",n[0],n[1],4,"jing","jadeWell"))})}const Y1=[-32,-24,-16,-8,0,8,16,24,32].map((i,t)=>k(`xu-gate-${t}`,"kunlun-xu","九門",-2765,-380+i,6,"jing","dolmen",{yaw:-Math.PI/2})),Z1=["巫彭","巫抵","巫陽","巫履","巫凡","巫相"].map((i,t)=>k(`xu-wu-${t}`,"kunlun-xu",i,-2735,-380+[-25,-15,-5,5,15,25][t],4,"jing","figure",{color:"#c8c0b0",h:4})),va=[];for(let i=0;i<8;i+=1){const t=i/8*Math.PI*2+Math.PI/8;va.push(k(`xu-corner-${i}`,"kunlun-xu","八隅之巖",-2840+Math.cos(t)*80,-380+Math.sin(t)*80,10,"jing","megalith",{w:8,h:14,d:6}))}const $1=[0,1,2,3,4,5].map(i=>k(`xu-god-${i}`,"kunlun-xu","百神隙",va[i].x+6,va[i].z,4,"jing","godSlab")),K1=[k("zhao-cliff-0","zhaoyao","西海崖",-150,0,8,"jing","megalith",{w:6,h:10,d:4}),k("zhao-cliff-1","zhaoyao","西海崖",-150,26,8,"jing","megalith",{w:6,h:12,d:4}),k("zhao-cliff-2","zhaoyao","西海崖",-150,52,8,"jing","megalith",{w:5,h:11,d:4}),k("zhao-cliff-3","zhaoyao","西海崖",-150,80,8,"jing","megalith",{w:6,h:10,d:4}),k("zhao-ore","zhaoyao","金玉西坡",-70,70,28,"jing","ore",{color:"#c4a35a"}),k("zhao-zhuyu","zhaoyao","祝餘",-50,50,16,"jing","tuft",{n:12}),k("zhao-xingxing","zhaoyao","狌狌",50,0,12,"jing","chimera",{chimera:"shengsheng",scale:2.4}),k("zhao-yupei-0","zhaoyao","育沛",-40,48,4,"jing","ore",{color:"#e8dcc8",w:1.2,h:.6,d:1.2}),k("zhao-yupei-1","zhaoyao","育沛",-100,40,4,"jing","ore",{color:"#e8dcc8",w:1.1,h:.5,d:1.1}),k("zhao-ci","zhaoyao","䧿山祠",0,90,18,"jing","godSlab"),k("zhao-ci-mat","zhaoyao","白菅席",2,94,6,"jing","megalith",{w:3.2,h:.12,d:2.2,color:"#c8c090"}),k("zhao-ci-jade","zhaoyao","璋玉",-2,88,3,"jing","ore",{color:"#90b0a0",w:.8,h:.2,d:.4}),k("zhao-qiao","zhaoyao","樵夫棚",90,90,8,"戲","thatchLean"),k("yuan-blade","yuanyi","刃脊",520,20,20,"jing","skip"),k("yuan-jade","yuanyi","白玉崩壁",450,28,18,"jing","ore",{color:"#e8e0d4",w:8,h:5,d:6}),k("yuan-viper-0","yuanyi","蝮虫",540,0,6,"jing","chimera",{chimera:"guaishen",scale:1.6}),k("yuan-viper-1","yuanyi","蝮虫",536,6,6,"jing","chimera",{chimera:"guaishen",scale:1.4}),k("yuan-viper-2","yuanyi","蝮虫",544,-4,6,"jing","chimera",{chimera:"guaishen",scale:1.3}),k("yuan-snake-0","yuanyi","怪蛇",556,2,8,"jing","chimera",{chimera:"guaishen",scale:2.2}),k("yuan-snake-1","yuanyi","怪蛇",560,-6,8,"jing","chimera",{chimera:"guaishen",scale:2}),k("yuan-beast","yuanyi","怪獸影",490,-30,16,"jing","chimera",{chimera:"guaishen",scale:3.2}),k("yuan-shed","yuanyi","東麓棚",600,28,8,"戲","thatchLean"),k("qing-yang","qingqiu","陽玉坡",1060,120,18,"jing","ore",{color:"#c8d0c4",w:7,h:4,d:6}),k("qing-yin","qingqiu","陰青雘",950,0,18,"jing","ore",{color:"#1e4a40",w:8,h:3,d:6}),k("qing-fox","qingqiu","九尾狐",1030,84,14,"jing","chimera",{chimera:"jiweihu",scale:2.8}),k("qing-guan","qingqiu","灌灌巢",1056,16,10,"jing","megalith",{w:4,h:2.2,d:3.4,color:"#6a5c4c"}),k("qing-chilu-0","qingqiu","赤鱬",1048,110,8,"jing","chimera",{chimera:"chilu",scale:1.8}),k("qing-chilu-1","qingqiu","赤鱬",1040,118,8,"jing","chimera",{chimera:"chilu",scale:1.6}),k("qing-chilu-2","qingqiu","赤鱬",1056,116,8,"jing","chimera",{chimera:"chilu",scale:1.5}),k("qing-hunter","qingqiu","獵人棚",1e3,22,8,"戲","thatchLean"),k("dan-ore","danxue","金玉坡",1640,30,16,"jing","ore",{color:"#c4a35a",w:8,h:4,d:6}),k("dan-feng","danxue","鳳皇",1560,-2,20,"jing","chimera",{chimera:"fenghuang",scale:3.6}),k("ji-gold","ji-nanshan","上金",2100,-34,16,"jing","ore",{color:"#c4a35a",w:7,h:3,d:6}),k("ji-dan","ji-nanshan","下丹雘",1970,36,16,"jing","ore",{color:"#9c2b1a",w:8,h:3,d:6}),k("ji-fish-0","ji-nanshan","鱄魚",2072,106,8,"jing","chimera",{chimera:"tuanyu",scale:1.8}),k("ji-fish-1","ji-nanshan","鱄魚",2078,112,8,"jing","chimera",{chimera:"tuanyu",scale:1.6}),k("ji-step-0","ji-nanshan","黑水踏石",2072,110,4,"jing","megalith",{w:2.4,h:.6,d:2.2}),k("ji-step-1","ji-nanshan","黑水踏石",2076,114,4,"jing","megalith",{w:2.2,h:.6,d:2}),k("ji-step-2","ji-nanshan","黑水踏石",2080,118,4,"jing","megalith",{w:2.4,h:.6,d:2.2}),k("fajiu-bird","fajiu","精衛",420,-988,6,"jing","chimera",{chimera:"jingwei",scale:1.4}),k("jw-pile-0","jingwei","木石填海",2218,480,10,"jing","logPile"),k("jw-pile-1","jingwei","木石填海",2240,480,10,"jing","logPile"),k("jw-pile-2","jingwei","木石填海",2262,480,10,"jing","logPile"),k("jw-gravel-0","jingwei","未滿之海",2250,510,8,"jing","gravel"),k("jw-gravel-1","jingwei","未滿之海",2270,500,8,"jing","gravel"),k("jw-gravel-2","jingwei","未滿之海",2220,520,8,"jing","gravel"),k("jw-gravel-3","jingwei","未滿之海",2290,490,8,"jing","gravel"),k("jw-gravel-4","jingwei","未滿之海",2200,505,8,"jing","gravel"),k("jw-gravel-5","jingwei","未滿之海",2260,530,8,"jing","gravel"),k("jw-gravel-6","jingwei","未滿之海",2230,540,8,"jing","gravel"),k("jw-gravel-7","jingwei","未滿之海",2280,515,8,"jing","gravel"),k("jw-shed","jingwei","漁棚",2210,504,8,"戲","thatchLean"),k("zhu-god","zhurong","祝融",1560,520,20,"jing","chimera",{chimera:"zhurong",scale:4.2}),k("zhu-east","zhurong","東龍",1576,528,12,"jing","chimera",{chimera:"guaishen",scale:3.4}),k("zhu-west","zhurong","西龍",1544,528,12,"jing","chimera",{chimera:"guaishen",scale:3.4}),k("zhu-ring","zhurong","熔岩環",1560,500,16,"jing","stoneCircle",{r:14,n:12,color:"#4a3028"}),k("hun-dijiang","hundun","帝江",-1080,8,16,"jing","chimera",{chimera:"dijiang",scale:3.2}),k("hun-rock-0","hundun","光堆",-1090,2,3,"sanwu","namingRock",{color:"#e8e0d4"}),k("hun-rock-1","hundun","暗堆",-1069,0,3,"sanwu","namingRock",{color:"#3a322c"}),k("hun-rock-2","hundun","濕堆",-1086,20,3,"sanwu","namingRock",{color:"#4a6860"}),k("hun-rock-3","hundun","硬堆",-1071,18,3,"sanwu","namingRock",{color:"#6a5c4c"}),k("court-seat-0","court","帝席",-1724,-334,10,"huainan","godSlab"),k("court-seat-1","court","帝席",-1716,-334,10,"huainan","godSlab"),k("court-sang-0","court","三桑無枝",-1720,-310,6,"jing","skip"),k("court-sang-1","court","三桑無枝",-1736,-308,6,"jing","skip"),k("court-sang-2","court","三桑無枝",-1704,-308,6,"jing","skip"),k("court-tomb-0","court","九嬪葬陰",-1720,-380,8,"jing","mound"),k("court-tomb-1","court","九嬪葬陰",-1744,-376,8,"jing","mound"),k("court-tomb-2","court","九嬪葬陰",-1696,-376,8,"jing","mound"),k("court-bone","court","骨曆",-1712,-338,6,"戲","megalith",{w:2.8,h:.35,d:1.8,color:"#d8d0c4"}),k("bu-beast-0","buzhou","兩黃獸",-1698,20,10,"jing","chimera",{chimera:"huangshou",scale:2.2}),k("bu-beast-1","buzhou","兩黃獸",-1662,20,10,"jing","chimera",{chimera:"huangshou",scale:2.2}),k("bu-crack","buzhou","觸點斷縫",-1676,34,8,"huainan","crack"),k("bu-tai","buzhou","共工之臺",-1660,-150,16,"jing","megalith",{w:12,h:4,d:12,color:"#6a5c4c"}),k("bu-snake-0","buzhou","臺隅蛇",-1654,-144,4,"jing","chimera",{chimera:"guaishen",scale:1.2}),k("bu-snake-1","buzhou","臺隅蛇",-1666,-144,4,"jing","chimera",{chimera:"guaishen",scale:1.2}),k("bu-snake-2","buzhou","臺隅蛇",-1654,-156,4,"jing","chimera",{chimera:"guaishen",scale:1.2}),k("bu-snake-3","buzhou","臺隅蛇",-1666,-156,4,"jing","chimera",{chimera:"guaishen",scale:1.2}),k("kiln-body","kiln","窑身",-1440,70,12,"huainan","kiln"),k("kiln-gold","kiln","金石",-1450,75,6,"huainan","ore",{color:"#c4a35a",w:2.4,h:2.8,d:2.4}),k("kiln-jade","kiln","玉石",-1445,79,6,"huainan","ore",{color:"#90b0a0",w:2.4,h:2.8,d:2.4}),k("kiln-dan","kiln","丹石",-1435,79,6,"huainan","ore",{color:"#9c2b1a",w:2.4,h:2.8,d:2.4}),k("kiln-white","kiln","白石",-1430,75,6,"huainan","ore",{color:"#e8e0d4",w:2.4,h:2.8,d:2.4}),k("kiln-empty","kiln","第五空",-1440,60,6,"huainan","megalith",{w:2.6,h:.4,d:2.6,color:"#3a322c"}),k("kiln-ao-0","kiln","鰲足",-1400,110,8,"huainan","boneRib",{yaw:.4}),k("kiln-ao-1","kiln","鰲足",-1480,110,8,"huainan","boneRib",{yaw:1.2}),k("kiln-ao-2","kiln","鰲足",-1400,30,8,"huainan","boneRib",{yaw:2.2}),k("kiln-ao-3","kiln","鰲足",-1480,30,8,"huainan","boneRib",{yaw:3.4}),k("kiln-ash","kiln","蘆灰",-1440,96,20,"huainan","gravel"),k("kiln-long","kiln","黑龍骸",-1410,90,14,"huainan","chimera",{chimera:"heilong",scale:3.4}),k("xia-he","xiayi","阿禾茅屋",-1250,265,8,"戲","thatchHut"),k("xia-east","xiayi","東屋",-1244,257,8,"戲","thatchHut"),k("xia-west","xiayi","西屋",-1274,255,8,"戲","thatchHut"),k("xia-north","xiayi","北屋",-1264,274,8,"戲","thatchHut"),k("xia-south","xiayi","南屋",-1252,244,8,"戲","thatchHut"),k("qiu-tai","kunlun-qiu","帝之下都臺",-3120,-90,40,"jing","megalith",{w:36,h:2,d:36,color:"#d8d0c4"}),k("qiu-luwu","kunlun-qiu","陸吾",-3112,-100,22,"jing","chimera",{chimera:"luwu",scale:3.8}),k("qiu-wall-0","kunlun-qiu","陸吾室",-3118,-106,8,"jing","megalith",{w:10,h:8,d:1.2,color:"#c8c0b0"}),k("qiu-wall-1","kunlun-qiu","陸吾室",-3104,-94,8,"jing","megalith",{w:1.2,h:8,d:10,color:"#c8c0b0"}),k("qiu-wall-2","kunlun-qiu","陸吾室",-3122,-94,8,"jing","megalith",{w:1.2,h:8,d:10,color:"#c8c0b0"}),k("qiu-tulou","kunlun-qiu","土螻",-3080,-70,12,"jing","chimera",{chimera:"tulou",scale:2.4}),k("qiu-qinyuan","kunlun-qiu","欽原",-3150,-80,8,"jing","chimera",{chimera:"qinyuan",scale:1.6}),k("qiu-chun","kunlun-qiu","鶉鳥",-3130,-110,8,"jing","chimera",{chimera:"chunniao",scale:1.8}),k("qiu-pin","kunlun-qiu","薲草",-3100,-50,12,"jing","tuft",{n:8}),k("qiu-fruit","kunlun-qiu","一果可摘",-3128,-40,4,"jing","fruit"),k("xu-he","kunlun-xu","木禾",-2840,-380,16,"jing","megalith",{w:4,h:18,d:4,color:"#c4b48a"}),...Hf,...Y1,k("xu-kaiming","kunlun-xu","開明",-2755,-380,24,"jing","chimera",{chimera:"kaiming",scale:4.6,yaw:Math.PI/2}),...va,k("xu-bifang","kunlun-xu","畢方",-2780,-340,10,"jing","chimera",{chimera:"bifang",scale:2.2}),k("xu-feng","kunlun-xu","鳳皇",-2884,-380,10,"jing","chimera",{chimera:"fenghuang",scale:2.4}),k("xu-luan","kunlun-xu","鸞鳥",-2876,-380,10,"jing","chimera",{chimera:"luan",scale:2.2}),k("xu-shirou","kunlun-xu","視肉",-2840,-430,8,"jing","megalith",{w:3.2,h:1.4,d:3.2,color:"#9c5a48"}),k("xu-lizhu","kunlun-xu","離朱",-2820,-438,8,"jing","chimera",{chimera:"lizhu",scale:1.8}),k("xu-shengmu","kunlun-xu","聖木曼兌",-2850,-440,8,"jing","skip"),...Z1,k("xu-yayu","kunlun-xu","窫窳之尸",-2735,-380,10,"jing","chimera",{chimera:"yayu",scale:2.6}),k("xu-sixbird","kunlun-xu","六首樹鳥",-2840,-300,10,"jing","chimera",{chimera:"liushou",scale:2.4}),k("xu-jiao","kunlun-xu","蛟",-2860,-280,10,"jing","chimera",{chimera:"guaishen",scale:2.2}),k("xu-fu","kunlun-xu","蝮",-2830,-275,10,"jing","chimera",{chimera:"guaishen",scale:1.6}),k("xu-she","kunlun-xu","蛇",-2810,-282,10,"jing","chimera",{chimera:"guaishen",scale:1.8}),k("xu-wei","kunlun-xu","蜼",-2850,-268,10,"jing","chimera",{chimera:"shengsheng",scale:1.8}),k("xu-bao","kunlun-xu","豹",-2824,-272,10,"jing","chimera",{chimera:"bao",scale:2.2}),k("xu-sand-0","kunlun-xu","流沙",-3e3,-400,20,"jing","gravel"),k("xu-sand-1","kunlun-xu","流沙",-3100,-300,20,"jing","gravel"),k("xu-sand-2","kunlun-xu","流沙",-3200,-200,20,"jing","gravel"),k("xu-ruo-twig-0","kunlun-xu","弱水沉枝",-2990,-250,3,"jing","twig"),k("xu-ruo-twig-1","kunlun-xu","弱水沉枝",-2980,-240,3,"jing","twig"),k("xu-ruo-twig-2","kunlun-xu","弱水沉枝",-3e3,-260,3,"jing","twig"),...$1,k("yu-xiwangmu","yushan","西王母",-2540,-660,14,"jing","chimera",{chimera:"xiwangmu",scale:2.6}),k("yu-ji","yushan","几",-2540,-660,8,"jing","megalith",{w:3,h:.6,d:2,color:"#c8c0b0"}),k("yu-tray","yushan","空藥臺",-2534,-660,4,"huainan","tray"),k("yu-jiao","yushan","狡",-2520,-650,10,"jing","chimera",{chimera:"jiao",scale:2.2}),k("yu-shengyu","yushan","勝遇",-2556,-652,8,"jing","chimera",{chimera:"shengyu",scale:1.8}),k("yu-daju","yushan","大鵹",-2547,-654,6,"jing","chimera",{chimera:"qingniao",scale:1.4}),k("yu-shaohu","yushan","少鵹",-2532,-655,6,"jing","chimera",{chimera:"qingniao",scale:1.2}),k("yu-qingniao","yushan","青鳥",-2540,-651,6,"jing","chimera",{chimera:"qingniao",scale:1.3}),k("yu-cave","yushan","穴門",-2524,-670,10,"jing","caveMouth"),k("cy-ring","changyang","舞環",-1880,380,16,"jing","stoneCircle",{r:12,n:10,color:"#5a5248"}),k("cy-xing","changyang","刑天",-1880,380,14,"jing","chimera",{chimera:"xingtian",scale:3.2}),k("cy-gan","changyang","干",-1874.6,380,4,"jing","staff",{color:"#6a4030",h:4}),k("cy-qi","changyang","戚",-1885.2,380,4,"jing","staff",{color:"#4a4540",h:3.4}),k("cy-tomb","changyang","首塚",-1880,368,10,"jing","mound"),k("kf-flag-0","kuafu","路石",160,-620,4,"jing","flag"),k("kf-flag-1","kuafu","路石",320,-720,4,"jing","flag"),k("kf-flag-2","kuafu","路石",500,-860,4,"jing","flag"),k("kf-flag-3","kuafu","路石",700,-1100,4,"jing","flag"),k("kf-staff","kuafu","棄杖",920,-1320,6,"jing","staff",{h:5,color:"#5a4030"}),k("hei-folk-0","heichi","黑齒民",3194,90,4,"jing","figure",{color:"#2a221c",h:2.4}),k("hei-folk-1","heichi","黑齒民",3200,94,4,"jing","figure",{color:"#2a221c",h:2.5}),k("hei-folk-2","heichi","黑齒民",3206,88,4,"jing","figure",{color:"#2a221c",h:2.3}),k("hei-folk-3","heichi","黑齒民",3202,84,4,"jing","figure",{color:"#2a221c",h:2.4}),k("hei-rice","heichi","稻場",3208,96,12,"jing","tuft",{n:16}),k("hei-red","heichi","赤蛇",3210,84,6,"jing","chimera",{chimera:"guaishen",scale:1.6,color:"#9c2b1a"}),k("hei-qing","heichi","青蛇",3190,84,6,"jing","chimera",{chimera:"guaishen",scale:1.6,color:"#3a6a58"}),k("hei-bird-0","heichi","四鳥",3180,70,4,"jing","chimera",{chimera:"qingniao",scale:1.1}),k("hei-bird-1","heichi","四鳥",3174,78,4,"jing","chimera",{chimera:"qingniao",scale:1.1}),k("hei-bird-2","heichi","四鳥",3188,64,4,"jing","chimera",{chimera:"qingniao",scale:1.1}),k("hei-bird-3","heichi","四鳥",3170,66,4,"jing","chimera",{chimera:"qingniao",scale:1.1}),k("hei-yi-0","heichi","羿營",3074,52,6,"戲","thatchLean"),k("hei-yi-1","heichi","羿營",3086,44,6,"戲","thatchLean"),k("hei-yi-2","heichi","羿營",3076,42,6,"戲","thatchLean"),k("hei-bow","heichi","彤弓架",3073,52,4,"戲","staff",{h:2.2,color:"#9c2b1a"}),k("hei-moon","heichi","月臺",2980,-70,10,"戲","stoneCircle",{r:8,n:8,color:"#c8c0b0"}),k("hei-change","heichi","嫦娥",2980,-70,8,"戲","figure",{color:"#d8d0c4",h:2.8}),k("tang-fusang","tanggu","扶桑",3520,4,30,"jing","skip"),k("gan-xihe","ganyuan","羲和",3780,260,10,"jing","chimera",{chimera:"xihe",scale:2.4}),...Array.from({length:10},(i,t)=>{const e=t/10*Math.PI*2;return k(`gan-slot-${t}`,"ganyuan","十槽",3780+Math.cos(e)*16,260+Math.sin(e)*16,5,"jing","basin")}),k("gan-inlet","ganyuan","甘水口",3798,282,6,"jing","megalith",{w:3,h:.8,d:2,color:"#7aa090"}),k("gan-changxi","ganyuan","常羲浴月不在此",3810,220,4,"jing","godSlab"),k("liu-kui","liubo","夔",3960,-420,18,"jing","chimera",{chimera:"kui",scale:3.8}),k("liu-drum","liubo","黃帝鼓",3944,-408,12,"jing","drum"),k("liu-peg","liubo","鼓橛",3944,-400,8,"jing","boneRib",{yaw:.3})],J1=[{mountainId:"zhaoyao",points:[[-80,36],[-40,40],[0,40]]},{mountainId:"yuanyi",points:[[580,8],[560,12]]},{mountainId:"qingqiu",points:[[1046,12],[1030,50],[1030,84]]},{mountainId:"danxue",points:[[1560,50],[1560,20]]},{mountainId:"ji-nanshan",points:[[2100,40],[2072,80]]},{mountainId:"kunlun-qiu",points:[[-3162,-82],[-3120,-90]]},{mountainId:"kunlun-xu",points:[[-2840,-344],[-2840,-360]]}],Q1=[.2,1.2,2.2,3.4].map(i=>[-1680+Math.cos(i)*48,36+Math.sin(i)*48]),Vf=[{id:"hundun",name:"帝江",x:-1080,z:8,mountainId:"hundun"},{id:"court",name:"帝席",x:-1720,z:-334,mountainId:"court"},{id:"buzhou",name:"觸點",x:-1676,z:34,mountainId:"buzhou"},{id:"zhaoyao",name:"䧿山祠",x:0,z:90,mountainId:"zhaoyao"},{id:"heichi",name:"月臺",x:2980,z:-70,mountainId:"heichi"},{id:"qiu",name:"陸吾",x:-3112,z:-100,mountainId:"kunlun-qiu"},{id:"xu",name:"開明",x:-2755,z:-380,mountainId:"kunlun-xu"}];function tS(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ae;let u=0;for(let l=0;l<i.length;++l){const h=i[l];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,f,l),u+=f}}if(e){let l=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+l);l+=i[d].attributes.position.count}c.setIndex(h)}for(const l in r){const h=Kh(r[l]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,h)}for(const l in o){const h=o[l][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[l].length;++_)f.push(o[l][_][d]);const g=Kh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Kh(i){let t,e,n,s=-1,r=0;for(let u=0;u<i.length;++u){const l=i[u];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}const o=new t(r),a=new ye(o,e,n);let c=0;for(let u=0;u<i.length;++u){const l=i[u];if(l.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=l.count;d<f;d++)for(let g=0;g<e;g++){const _=l.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(l.array,c);c+=l.count*e}return s!==void 0&&(a.gpuType=s),a}const Ht={stone:ht("#6a5c4c"),pale:ht("#d8d0c4"),thatch:ht("#7a6a40"),wood:ht("#5a4030"),rammed:ht("#6e5840"),bone:ht("#c8bca8"),jade:ht("#90b0a0"),lacquer:ht("#9c2b1a"),gold:ht("#c4a35a"),dark:ht("#2a221c"),water:ht("#1a2a28",{transparent:!0,opacity:.62,depthWrite:!1})};function ie(i,t,e){return i(t,e)}function eS(i){i.updateMatrixWorld(!0);const t=i.geometry.clone(),e=t.index?t.toNonIndexed():t;return t.index&&t.dispose(),e.applyMatrix4(i.matrixWorld),e.deleteAttribute("uv"),e.deleteAttribute("uv1"),e.deleteAttribute("uv2"),e}function Do(i){i.updateMatrixWorld(!0);const t=[];for(const r of[...i.children])r.userData.skipMerge&&t.push(r);const e=[],n=new Map;i.traverse(r=>{if(!(r instanceof ce)||r instanceof Vn)return;let o=r;for(;o;){if(o.userData.skipMerge)return;o=o.parent}const a=Array.isArray(r.material)?r.material[0]:r.material;if(!(a instanceof Ca))return;e.push(r);const c=n.get(a)??[];c.push(eS(r)),n.set(a,c)});for(const r of t)i.remove(r);for(;i.children.length;)i.remove(i.children[0]);const s=[];for(const[r,o]of n){if(!o.length)continue;const a=tS(o,!1);if(o.forEach(u=>u.dispose()),!a)continue;const c=new ce(a,r);c.castShadow=!1,c.receiveShadow=!1,s.push(c)}return s.length?s.forEach(r=>i.add(r)):e.forEach(r=>i.add(r)),t.forEach(r=>i.add(r)),i}function Gf(i,t,e,n){const s=ie(t,e,n);st(i,Et(10,.5,10),Ht.stone,e,s,n)}function nS(i,t,e,n,s,r,o,a){const c=ie(t,e,n);st(i,Et(s,r,o),a?ht(a):Ht.stone,e,c,n)}function iS(i,t,e,n,s=0){const r=ie(t,e,n),o=new te;st(o,Et(2,6,1.2),Ht.stone,-1.6,0,0),st(o,Et(2,6,1.2),Ht.stone,1.6,0,0),st(o,Et(5,.8,2.2),Ht.pale,0,6,0),o.position.set(e,r,n),o.rotation.y=s,i.add(o)}function sS(i,t,e,n){const s=ie(t,e,n);st(i,Et(6,2.6,5),Ht.rammed,e,s,n),st(i,Et(7.2,1.4,6.2),Ht.thatch,e,s+2.6,n),st(i,Et(1.2,1.6,.2),Ht.dark,e,s+.4,n+2.55)}function rS(i,t,e,n){const s=ie(t,e,n);st(i,Et(4,1.6,3),Ht.rammed,e,s,n),st(i,Et(5,.7,3.8),Ht.thatch,e,s+1.6,n)}function oS(i,t,e,n){const s=ie(t,e,n),r=new Un(2.2,2.4,.55,8);r.translate(0,.28,0),st(i,r,Ht.jade,e,s,n),st(i,Et(3.2,.12,3.2),Ht.water,e,s+.08,n)}function aS(i,t,e,n,s){const r=ie(t,e,n);st(i,Et(4,8,.6),s?ht(s):Ht.pale,e,r,n)}function cS(i,t,e,n,s=0){const r=ie(t,e,n),o=new te;st(o,Et(12,1,.8),Ht.bone,0,4,0),o.children[0].rotation.z=.35,st(o,Et(1.4,6,1.2),Ht.bone,-5,0,0),o.position.set(e,r,n),o.rotation.y=s,i.add(o)}function lS(i,t,e,n,s,r,o){const a=o?ht(o):Ht.stone;for(let c=0;c<r;c+=1){const u=c/r*Math.PI*2,l=e+Math.cos(u)*s,h=n+Math.sin(u)*s;st(i,Et(1.6,1.4,1.1),a,l,ie(t,l,h),h)}}function uS(i,t,e,n){const s=ie(t,e,n);st(i,Et(8,6,3),Ht.stone,e,s,n-1.2),st(i,Et(4.2,4.4,2.4),Ht.dark,e,s+.4,n+.6)}function Jh(i,t,e){for(let n=0;n<e.length-1;n+=1){const s=e[n],r=e[n+1],o=Math.max(4,Math.round(Math.hypot(r[0]-s[0],r[1]-s[1])/2.2));for(let a=0;a<=o;a+=1){const c=a/o,u=s[0]+(r[0]-s[0])*c,l=s[1]+(r[1]-s[1])*c;st(i,Et(2,.18,1.4),Ht.stone,u,ie(t,u,l)-.02,l)}}}function hS(i,t,e,n,s,r){const o=new Un(n,n,.2,10);o.translate(0,.1,0),st(i,o,ht(r,{transparent:!0,opacity:.7,depthWrite:!1}),t,s,e)}function dS(i,t,e,n,s,r,o,a){const c=(t+n)/2,u=(e+s)/2,l=Math.hypot(n-t,s-e)||1,h=st(i,Et(r,.18,l),ht(a,{transparent:!0,opacity:.7,depthWrite:!1}),c,o,u);h.rotation.y=Math.atan2(n-t,s-e)}function fS(i,t,e,n,s,r){const o=ie(t,e,n);st(i,Et(.7,s*.55,.45),ht(r),e,o,n),st(i,Et(.55,s*.28,.5),ht(r),e,o+s*.55,n)}function pS(i,t,e,n){const s=ie(t,e,n);st(i,Et(4.2,.7,1.1),Ht.wood,e,s,n),st(i,Et(3.6,.6,1),Ht.wood,e,s+.7,n+.2),st(i,Et(1.8,.9,1.6),Ht.stone,e+1.4,s,n+1.1)}function mS(i,t,e,n){const s=ie(t,e,n);st(i,Et(8,.4,1.1),Ht.dark,e,s,n),st(i,Et(5,2.2,.5),Ht.stone,e-1.2,s,n-.4)}function gS(i,t,e,n){const s=ie(t,e,n),r=new Un(2.4,2.4,1.4,8);r.translate(0,.7,0),st(i,r,Ht.lacquer,e,s+1.6,n),st(i,Et(12,1,.8),Ht.bone,e,s+2.2,n+.4)}function _S(i,t,e,n){const s=ie(t,e,n);st(i,Et(1.8,.2,1.8),Ht.jade,e,s+.8,n),st(i,Et(.4,.8,.4),Ht.pale,e,s,n)}function xS(i,t,e,n){const s=ie(t,e,n),r=new Un(5,5.4,.5,8);r.translate(0,.25,0),st(i,r,Ht.pale,e,s,n),st(i,Et(8,.12,8),Ht.gold,e,s+.12,n)}function vS(i,t,e,n){const s=ie(t,e,n);st(i,Et(6,1.8,5),Ht.rammed,e,s,n),st(i,Et(3.2,1.1,2.8),Ht.stone,e,s+1.8,n)}function yS(i,t,e,n,s,r){const o=ie(t,e,n);st(i,Et(.28,s,.28),r?ht(r):Ht.wood,e,o,n)}function MS(i,t,e,n){const s=ie(t,e,n);st(i,Et(1.4,2.8,.4),Ht.pale,e,s,n)}function SS(i,t,e,n){const s=ie(t,e,n),r=new Un(6,6.4,8,8);r.translate(0,4,0),st(i,r,Ht.stone,e,s,n),st(i,Et(2.2,2.4,.4),Ht.lacquer,e,s+2,n+6.1)}function bS(i,t,e,n){const s=ie(t,e,n);st(i,Et(8,.35,6),Ht.stone,e,s,n),st(i,Et(3,.5,2.2),Ht.pale,e+2,s,n-1)}function wS(i,t,e,n){const s=ie(t,e,n)-.4;st(i,Et(1.6,.18,.18),Ht.wood,e,s,n),st(i,Et(.18,.18,1.2),Ht.wood,e+.4,s,n+.3)}function ES(i,t,e,n,s){const r=ie(t,e,n);st(i,Et(1.5,1.5,1.5),ht(s),e,r,n)}function TS(i,t,e,n,s,r=6,o=3,a=5){const c=ie(t,e,n);st(i,Et(r,o,a),ht(s),e,c,n),st(i,Et(r*.5,o*.7,a*.5),Ht.gold,e+r*.3,c,n-a*.2)}function AS(i,t,e,n){const s=ie(t,e,n);st(i,Et(.5,.5,.5),Ht.gold,e,s+1.2,n)}function CS(i,t,e){const n=e.x,s=e.z;switch(e.mesh){case"skip":return;case"pad":Gf(i,t,n,s);return;case"megalith":nS(i,t,n,s,e.w??6,e.h??4,e.d??4,e.color);return;case"dolmen":iS(i,t,n,s,e.yaw??0);return;case"thatchHut":sS(i,t,n,s);return;case"thatchLean":rS(i,t,n,s);return;case"jadeWell":oS(i,t,n,s);return;case"godSlab":aS(i,t,n,s,e.color);return;case"boneRib":cS(i,t,n,s,e.yaw??0);return;case"stoneCircle":lS(i,t,n,s,e.r??10,e.n??8,e.color);return;case"caveMouth":uS(i,t,n,s);return;case"chimera":{const r=ir(e.chimera??"shengsheng"),o=e.scale??2.4;r.scale.setScalar(o),r.position.set(n,ie(t,n,s),s),r.rotation.y=e.yaw??0,r.userData.skipMerge=!0,r.userData.homeX=n,r.userData.homeZ=s,r.userData.baseY=r.position.y,i.add(r);return}case"figure":fS(i,t,n,s,e.h??2.4,e.color??"#c8c0b0");return;case"ore":TS(i,t,n,s,e.color??"#c4a35a",e.w,e.h,e.d);return;case"tuft":{const r=e.n??8;for(let o=0;o<r;o+=1){const a=o/r*Math.PI*2,c=2+o%3,u=n+Math.cos(a)*c,l=s+Math.sin(a)*c,h=nu();h.position.set(u,ie(t,u,l)-.02,l),h.userData.skipMerge=!0,i.add(h)}return}case"logPile":pS(i,t,n,s);return;case"crack":mS(i,t,n,s);return;case"drum":gS(i,t,n,s);return;case"tray":_S(i,t,n,s);return;case"basin":xS(i,t,n,s);return;case"mound":vS(i,t,n,s);return;case"staff":yS(i,t,n,s,e.h??4,e.color);return;case"flag":MS(i,t,n,s);return;case"kiln":SS(i,t,n,s);return;case"fruit":AS(i,t,n,s);return;case"twig":wS(i,t,n,s);return;case"gravel":bS(i,t,n,s);return;case"namingRock":ES(i,t,n,s,e.color??"#d8d0c4");return;default:return}}function RS(i,t){for(const e of Pa){if(e.kind==="disk"||e.kind==="sheet"){const n=e.points[0],s=e.kind==="sheet"?Math.max(e.sheetW??20,e.sheetD??20)*.45:e.r??e.width,r=Math.max(Re+.08,ie(t,n[0],n[1])+.15);hS(i,n[0],n[1],s,r,e.color);continue}for(let n=0;n<e.points.length-1;n+=1){const s=e.points[n],r=e.points[n+1],o=(s[0]+r[0])/2,a=(s[1]+r[1])/2,c=Math.max(Re+.06,ie(t,o,a)+.12);dS(i,s[0],s[1],r[0],r[1],e.width,c,e.color)}}}function PS(i){const t=new te;t.name="landmarks";const e=new te;e.name="pads";for(const o of La){const a=new te;Gf(a,i,o.padX,o.padZ),Do(a),e.add(a)}t.add(e);const n=new te;n.name="rivers",RS(n,i),Do(n),t.add(n);for(const o of K1){if(o.mesh==="skip")continue;const a=new te;a.name=o.name,CS(a,i,o),Do(a),t.add(a)}const s=new te;s.name="spines";for(const o of J1)Jh(s,i,o.points);Jh(s,i,[[-1640,72],...Q1]),Do(s),t.add(s);const r=WM();return r.position.set(3520,Math.max(Re-.4,ie(i,3520,4)-1.2),4),r.userData.skipMerge=!0,r.scale.setScalar(1),t.add(r),t}function LS(i){return PS(i)}const Wf=0,IS=1,DS=2,Qh=2,vc=1.25,td=1,je=32,Le=je/4,Xf=65535,ca=Math.pow(2,-24),au=Symbol("SKIP_GENERATION"),qf={strategy:Wf,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[au]:!1};function Se(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Sl(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function ed(i,t){t.set(i)}function nd(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function Uo(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function br(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Te(i,t){return t[i+15]===Xf}function Be(i,t){return t[i+6]}function Ye(i,t){return t[i+14]}function Ie(i){return i+Le}function De(i,t){const e=t[i+6];return i+e*Le}function cu(i,t){return t[i+7]}function yc(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,u=-1/0,l=-1/0,h=1/0,d=1/0,f=1/0,g=-1/0,_=-1/0,m=-1/0;const p=i.offset||0;for(let v=(t-p)*6,y=(t+e-p)*6;v<y;v+=6){const x=i[v+0],b=i[v+1],E=x-b,w=x+b;E<r&&(r=E),w>c&&(c=w),x<h&&(h=x),x>g&&(g=x);const A=i[v+2],S=i[v+3],M=A-S,R=A+S;M<o&&(o=M),R>u&&(u=R),A<d&&(d=A),A>_&&(_=A);const L=i[v+4],U=i[v+5],D=L-U,N=L+U;D<a&&(a=D),N>l&&(l=N),L<f&&(f=L),L>m&&(m=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=u,n[5]=l,s[0]=h,s[1]=d,s[2]=f,s[3]=g,s[4]=_,s[5]=m}const ti=32,US=(i,t)=>i.candidate-t.candidate,bi=new Array(ti).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),No=new Float32Array(6);function NS(i,t,e,n,s,r){let o=-1,a=0;if(r===Wf)o=Sl(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===IS)o=Sl(i),o!==-1&&(a=FS(e,n,s,o));else if(r===DS){const c=br(i);let u=vc*s;const l=e.offset||0,h=(n-l)*6,d=(n+s-l)*6;for(let f=0;f<3;f++){const g=t[f],p=(t[f+3]-g)/ti;if(s<ti/4){const v=[...bi];v.length=s;let y=0;for(let b=h;b<d;b+=6,y++){const E=v[y];E.candidate=e[b+2*f],E.count=0;const{bounds:w,leftCacheBounds:A,rightCacheBounds:S}=E;for(let M=0;M<3;M++)S[M]=1/0,S[M+3]=-1/0,A[M]=1/0,A[M+3]=-1/0,w[M]=1/0,w[M+3]=-1/0;Uo(b,e,w)}v.sort(US);let x=s;for(let b=0;b<x;b++){const E=v[b];for(;b+1<x&&v[b+1].candidate===E.candidate;)v.splice(b+1,1),x--}for(let b=h;b<d;b+=6){const E=e[b+2*f];for(let w=0;w<x;w++){const A=v[w];E>=A.candidate?Uo(b,e,A.rightCacheBounds):(Uo(b,e,A.leftCacheBounds),A.count++)}}for(let b=0;b<x;b++){const E=v[b],w=E.count,A=s-E.count,S=E.leftCacheBounds,M=E.rightCacheBounds;let R=0;w!==0&&(R=br(S)/c);let L=0;A!==0&&(L=br(M)/c);const U=td+vc*(R*w+L*A);U<u&&(o=f,u=U,a=E.candidate)}}else{for(let x=0;x<ti;x++){const b=bi[x];b.count=0,b.candidate=g+p+x*p;const E=b.bounds;for(let w=0;w<3;w++)E[w]=1/0,E[w+3]=-1/0}for(let x=h;x<d;x+=6){let w=~~((e[x+2*f]-g)/p);w>=ti&&(w=ti-1);const A=bi[w];A.count++,Uo(x,e,A.bounds)}const v=bi[ti-1];ed(v.bounds,v.rightCacheBounds);for(let x=ti-2;x>=0;x--){const b=bi[x],E=bi[x+1];nd(b.bounds,E.rightCacheBounds,b.rightCacheBounds)}let y=0;for(let x=0;x<ti-1;x++){const b=bi[x],E=b.count,w=b.bounds,S=bi[x+1].rightCacheBounds;E!==0&&(y===0?ed(w,No):nd(w,No,No)),y+=E;let M=0,R=0;y!==0&&(M=br(No)/c);const L=s-y;L!==0&&(R=br(S)/c);const U=td+vc*(M*y+R*L);U<u&&(o=f,u=U,a=b.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function FS(i,t,e,n){let s=0;const r=i.offset;for(let o=t,a=t+e;o<a;o++)s+=i[(o-r)*6+n*2];return s/e}class Mc{constructor(){this.boundingData=new Float32Array(6)}}function BS(i,t,e,n,s,r){let o=n,a=n+s-1;const c=r.pos,u=r.axis*2,l=e.offset||0;for(;;){for(;o<=a&&e[(o-l)*6+u]<c;)o++;for(;o<=a&&e[(a-l)*6+u]>=c;)a--;if(o<a){for(let h=0;h<t;h++){let d=i[o*t+h];i[o*t+h]=i[a*t+h],i[a*t+h]=d}for(let h=0;h<6;h++){const d=o-l,f=a-l,g=e[d*6+h];e[d*6+h]=e[f*6+h],e[f*6+h]=g}o++,a--}else return o}}let jf,la,bl,Yf;const zS=Math.pow(2,32);function wl(i){return"count"in i?1:1+wl(i.left)+wl(i.right)}function OS(i,t,e){return jf=new Float32Array(e),la=new Uint32Array(e),bl=new Uint16Array(e),Yf=new Uint8Array(e),El(i,t)}function El(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)jf[e+o]=r[o];if(s)return t.buffer?(Yf.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(la[e+6]=t.offset,bl[n+14]=t.count,bl[n+15]=Xf,i+je);{const{left:o,right:a,splitAxis:c}=t,u=i+je;let l=El(u,o);const h=i/je,f=l/je-h;if(f>zS)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return la[e+6]=f,la[e+7]=c,El(l,a)}}function kS(i,t,e,n,s,r){const{maxDepth:o,verbose:a,targetLeafSize:c,_strictLeafSize:u=1/0,strategy:l,onProgress:h}=s,d=i.primitiveBuffer,f=i.primitiveBufferStride,g=new Float32Array(6);let _=!1;const m=new Mc;return yc(t,e,n,m.boundingData,g),v(m,e,n,g),m;function p(y){h&&h((y-r.offset)/r.count)}function v(y,x,b,E=null,w=0){!_&&w>=o&&(_=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const A=b>u;if(b<=c&&!A||w>=o)return p(x+b),y.offset=x,y.count=b,y;const S=NS(y.boundingData,E,t,x,b,l);let M=S.axis===-1?-1:BS(d,f,t,x,b,S);if(S.axis===-1||M===x||M===x+b){if(!A)return p(x+b),y.offset=x,y.count=b,y;S.axis=Math.max(0,Sl(y.boundingData)),M=x+Math.max(1,Math.floor(b/2))}y.splitAxis=S.axis;const R=new Mc,L=x,U=M-x;y.left=R,yc(t,L,U,R.boundingData,g),v(R,L,U,g,w+1);const D=new Mc,N=M,B=b-U;return y.right=D,yc(t,N,B,D.boundingData,g),v(D,N,B,g,w+1),y}}function HS(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(c=>{const u=kS(i,a,c.offset,c.count,t,o),l=wl(u),h=new e(je*l);return OS(0,u,h),h})}class lu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class VS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const _e=new VS;let Ci,Vs;const Ts=[],Fo=new lu(()=>new we);function GS(i,t,e,n,s,r){Ci=Fo.getPrimitive(),Vs=Fo.getPrimitive(),Ts.push(Ci,Vs),_e.setBuffer(i._roots[t]);const o=Tl(0,i.geometry,e,n,s,r);_e.clearBuffer(),Fo.releasePrimitive(Ci),Fo.releasePrimitive(Vs),Ts.pop(),Ts.pop();const a=Ts.length;return a>0&&(Vs=Ts[a-1],Ci=Ts[a-2]),o}function Tl(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:u}=_e;let l=i*2;if(Te(l,c)){const g=Be(i,u),_=Ye(l,c);return Se(i,a,Ci),n(g,_,!1,o,r+i/Le,Ci)}else{let L=function(D){const{uint16Array:N,uint32Array:B}=_e;let G=D*2;for(;!Te(G,N);)D=Ie(D),G=D*2;return Be(D,B)},U=function(D){const{uint16Array:N,uint32Array:B}=_e;let G=D*2;for(;!Te(G,N);)D=De(D,B),G=D*2;return Be(D,B)+Ye(G,N)};var d=L,f=U;const g=Ie(i),_=De(i,u);let m=g,p=_,v,y,x,b;if(s&&(x=Ci,b=Vs,Se(m,a,x),Se(p,a,b),v=s(x),y=s(b),y<v)){m=_,p=g;const D=v;v=y,y=D,x=b}x||(x=Ci,Se(m,a,x));const E=Te(m*2,c),w=e(x,E,v,o+1,r+m/Le);let A;if(w===Qh){const D=L(m),B=U(m)-D;A=n(D,B,!0,o+1,r+m/Le,x)}else A=w&&Tl(m,t,e,n,s,r,o+1);if(A)return!0;b=Vs,Se(p,a,b);const S=Te(p*2,c),M=e(b,S,y,o+1,r+p/Le);let R;if(M===Qh){const D=L(p),B=U(p)-D;R=n(D,B,!0,o+1,r+p/Le,b)}else R=M&&Tl(p,t,e,n,s,r,o+1);return!!R}}const Hr=new _e.constructor,ya=new _e.constructor,wi=new lu(()=>new we),As=new we,Cs=new we,Sc=new we,bc=new we;let wc=!1;function WS(i,t,e,n){if(wc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");wc=!0;const s=i._roots,r=t._roots;let o,a=0,c=0;const u=new Yt().copy(e).invert();for(let l=0,h=s.length;l<h;l++){Hr.setBuffer(s[l]),c=0;const d=wi.getPrimitive();Se(0,Hr.float32Array,d),d.applyMatrix4(u);for(let f=0,g=r.length;f<g&&(ya.setBuffer(r[f]),o=Rn(0,0,e,u,n,a,c,0,0,d),ya.clearBuffer(),c+=r[f].byteLength/je,!o);f++);if(wi.releasePrimitive(d),Hr.clearBuffer(),a+=s[l].byteLength/je,o)break}return wc=!1,o}function Rn(i,t,e,n,s,r=0,o=0,a=0,c=0,u=null,l=!1){let h,d;l?(h=ya,d=Hr):(h=Hr,d=ya);const f=h.float32Array,g=h.uint32Array,_=h.uint16Array,m=d.float32Array,p=d.uint32Array,v=d.uint16Array,y=i*2,x=t*2,b=Te(y,_),E=Te(x,v);let w=!1;if(E&&b)l?w=s(Be(t,p),Ye(t*2,v),Be(i,g),Ye(i*2,_),c,o+t/Le,a,r+i/Le):w=s(Be(i,g),Ye(i*2,_),Be(t,p),Ye(t*2,v),a,r+i/Le,c,o+t/Le);else if(E){const A=wi.getPrimitive();Se(t,m,A),A.applyMatrix4(e);const S=Ie(i),M=De(i,g);Se(S,f,As),Se(M,f,Cs);const R=A.intersectsBox(As),L=A.intersectsBox(Cs);w=R&&Rn(t,S,n,e,s,o,r,c,a+1,A,!l)||L&&Rn(t,M,n,e,s,o,r,c,a+1,A,!l),wi.releasePrimitive(A)}else{const A=Ie(t),S=De(t,p);Se(A,m,Sc),Se(S,m,bc);const M=u.intersectsBox(Sc),R=u.intersectsBox(bc);if(M&&R)w=Rn(i,A,e,n,s,r,o,a,c+1,u,l)||Rn(i,S,e,n,s,r,o,a,c+1,u,l);else if(M)if(b)w=Rn(i,A,e,n,s,r,o,a,c+1,u,l);else{const L=wi.getPrimitive();L.copy(Sc).applyMatrix4(e);const U=Ie(i),D=De(i,g);Se(U,f,As),Se(D,f,Cs);const N=L.intersectsBox(As),B=L.intersectsBox(Cs);w=N&&Rn(A,U,n,e,s,o,r,c,a+1,L,!l)||B&&Rn(A,D,n,e,s,o,r,c,a+1,L,!l),wi.releasePrimitive(L)}else if(R)if(b)w=Rn(i,S,e,n,s,r,o,a,c+1,u,l);else{const L=wi.getPrimitive();L.copy(bc).applyMatrix4(e);const U=Ie(i),D=De(i,g);Se(U,f,As),Se(D,f,Cs);const N=L.intersectsBox(As),B=L.intersectsBox(Cs);w=N&&Rn(S,U,n,e,s,o,r,c,a+1,L,!l)||B&&Rn(S,D,n,e,s,o,r,c,a+1,L,!l),wi.releasePrimitive(L)}}return w}const Ec=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=r._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let o=r*2;for(;!Te(o,e);)r=Ie(r),o=r*2;return Be(r,t)},this.getRangeEnd=r=>{let o=r*2;for(;!Te(o,e);)r=De(r,t),o=r*2;return Be(r,t)+Ye(o,e)};const s=(r,o,a)=>{const c=o*2,u=Te(c,e);if(!r(a,u,o)&&!u){const h=Ie(o),d=De(o,t);s(r,h,a+1),s(r,d,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((o,a,c)=>{if(a){const u=c*2,l=t[c+6],h=e[u+14];return r(o,a,new Float32Array(i,c*4,6),l,h)}else{const u=cu(c,t);return r(o,a,new Float32Array(i,c*4,6),u)}})}}},id=new we,Rs=new Float32Array(6);class XS{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...qf,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),HS(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,u=-1/0,l=-1/0;for(let h=t,d=t+e;h<d;h++){this.writePrimitiveBounds(h,Rs,0);const[f,g,_,m,p,v]=Rs;f<r&&(r=f),m>c&&(c=m),g<o&&(o=g),p>u&&(u=p),_<a&&(a=_),v>l&&(l=v)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=c,n[s+4]=u,n[s+5]=l,n}computePrimitiveBounds(t,e,n){const s=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,Rs,0);const[a,c,u,l,h,d]=Rs,f=(a+l)/2,g=(c+h)/2,_=(u+d)/2,m=(l-a)/2,p=(h-c)/2,v=(d-u)/2,y=(r-s)*6;n[y+0]=f,n[y+1]=m+(Math.abs(f)+m)*ca,n[y+2]=g,n[y+3]=p+(Math.abs(g)+p)*ca,n[y+4]=_,n[y+5]=v+(Math.abs(_)+v)*ca}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,s=e.length;n<s;n++)e[n]+=t;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/je;for(let u=0;u<c;u++){const l=Le*u,h=2*l;Te(h,a)&&(o[l+6]+=t)}}}}traverse(t,e=0){Ec.setBVH(this,e),Ec.traverse(t),Ec.reset()}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),c=s.byteLength/je;for(let u=c-1;u>=0;u--){const l=u*Le,h=l*2;if(Te(h,o)){const f=Be(l,r),g=Ye(h,o);this.writePrimitiveRangeBounds(f,g,Rs,0),a.set(Rs,l)}else{const f=Ie(l),g=De(l,r);for(let _=0;_<3;_++){const m=a[f+_],p=a[f+_+3],v=a[g+_],y=a[g+_+3];a[l+_]=m<v?m:v,a[l+_+3]=p>y?p:y}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Se(0,new Float32Array(n),id),t.union(id)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){const h=s;s=(d,f,g,_,m)=>h(d,f,g,_,m)?!0:a(d,f,this,r,g,_,o)}else s||(r?s=(h,d,f,g)=>a(h,d,this,r,f,g,o):s=(h,d,f)=>f);let c=!1,u=0;const l=this._roots;for(let h=0,d=l.length;h<d;h++){const f=l[h];if(c=GS(this,h,n,s,e,u),c)break;u+=f.byteLength/je}return c}bvhcast(t,e,n){let{intersectsRanges:s}=n;return WS(this,t,e,s)}}function qS(){return typeof SharedArrayBuffer<"u"}function uu(i){return i.index?i.index.count:i.attributes.position.count}function Ia(i){return uu(i)/3}function jS(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function YS(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=jS(e,n);i.setIndex(new ye(s,1));for(let r=0;r<e;r++)s[r]=r}}function ZS(i,t,e){const n=uu(i)/e,s=t||i.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function $S(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function sd(i,t,e){const n=ZS(i,t,e),s=$S(i,e);if(!s.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,c=uu(i)/e,u=[];for(const d of s){const{offset:f,count:g}=d,_=f,m=isFinite(g)?g:c-f,p=f+m;_<a&&p>o&&(u.push({pos:Math.max(o,_),isStart:!0}),u.push({pos:Math.min(a,p),isStart:!1}))}u.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let l=0,h=null;for(const d of u){const f=d.pos;l!==0&&f!==h&&r.push({offset:h,count:f-h}),l+=d.isStart?1:-1,h=f}return r}function KS(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,s=i.reduce((u,l)=>u+l.count,0),r=n?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let u=0;u<i.length;u++){const{offset:l,count:h}=i[u];for(let d=0;d<h;d++)a[c+d]=l+d;c+=h}return a}class JS extends XS{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!qS())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...qf,...e},e[au]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const s=sd(e,t.range,n),r=KS(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else YS(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new we))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:sd(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class di{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}di.prototype.setFromBox=(function(){const i=new I;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let l=0;l<=1;l++){i.x=s.x*c+r.x*(1-c),i.y=s.y*u+r.y*(1-u),i.z=s.z*l+r.z*(1-l);const h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const QS=(function(){const i=new I,t=new I,e=new I;return function(s,r,o){const a=s.start,c=i,u=r.start,l=t;e.subVectors(a,u),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(l),d=l.dot(c),f=l.dot(l),g=e.dot(c),m=c.dot(c)*f-d*d;let p,v;m!==0?p=(h*d-g*f)/m:p=0,v=(h+p*d)/f,o.x=p,o.y=v}})(),hu=(function(){const i=new Ft,t=new I,e=new I;return function(s,r,o,a){QS(s,r,i);let c=i.x,u=i.y;if(c>=0&&c<=1&&u>=0&&u<=1){s.at(c,o),r.at(u,a);return}else if(c>=0&&c<=1){u<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let l;c<0?l=s.start:l=s.end;let h;u<0?h=r.start:h=r.end;const d=t,f=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(l,!0,e),d.distanceToSquared(h)<=f.distanceToSquared(l)){o.copy(d),a.copy(h);return}else{o.copy(l),a.copy(f);return}}}})(),tb=(function(){const i=new I,t=new I,e=new ei,n=new ui;return function(r,o){const{radius:a,center:c}=r,{a:u,b:l,c:h}=o;if(n.start=u,n.end=l,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(c))<=a){const p=_.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})(),eb=["x","y","z"],ni=1e-15,rd=ni*ni;function xn(i){return Math.abs(i)<ni}class Dn extends ke{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new di),this.points=[this.a,this.b,this.c],this.plane=new ei,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ui,this.needsUpdate=!0}intersectsSphere(t){return tb(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const u=r[1],l=o[1];u.subVectors(t,e),l.setFromPoints(u,s);const h=r[2],d=o[2];h.subVectors(e,n),d.setFromPoints(h,s);const f=r[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,s);const _=u.length(),m=h.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<ni?m<ni||p<ni?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<ni?p<ni?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<ni&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Dn.prototype.closestPointToSegment=(function(){const i=new I,t=new I,e=new ui;return function(s,r=null,o=null){const{start:a,end:c}=s,u=this.points;let l,h=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;e.start.copy(u[d]),e.end.copy(u[f]),hu(e,s,i,t),l=i.distanceToSquared(t),l<h&&(h=l,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),l=a.distanceToSquared(i),l<h&&(h=l,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),l=c.distanceToSquared(i),l<h&&(h=l,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(h)}})();Dn.prototype.intersectsTriangle=(function(){const i=new Dn,t=new di,e=new di,n=new I,s=new I,r=new I,o=new I,a=new ui,c=new ui,u=new I,l=new Ft,h=new Ft;function d(y,x,b,E){const w=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?w.copy(y.plane.normal):w.copy(x.plane.normal);const A=y.satBounds,S=y.satAxes;for(let L=1;L<4;L++){const U=A[L],D=S[L];if(t.setFromPoints(D,x.points),U.isSeparated(t)||(o.copy(w).cross(D),t.setFromPoints(o,y.points),e.setFromPoints(o,x.points),t.isSeparated(e)))return!1}const M=x.satBounds,R=x.satAxes;for(let L=1;L<4;L++){const U=M[L],D=R[L];if(t.setFromPoints(D,y.points),U.isSeparated(t)||(o.crossVectors(w,D),t.setFromPoints(o,y.points),e.setFromPoints(o,x.points),t.isSeparated(e)))return!1}return b&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),b.start.set(0,0,0),b.end.set(0,0,0)),!0}function f(y,x,b,E,w,A,S,M,R,L,U){let D=S/(S-M);L.x=E+(w-E)*D,U.start.subVectors(x,y).multiplyScalar(D).add(y),D=S/(S-R),L.y=E+(A-E)*D,U.end.subVectors(b,y).multiplyScalar(D).add(y)}function g(y,x,b,E,w,A,S,M,R,L,U){if(w>0)f(y.c,y.a,y.b,E,x,b,R,S,M,L,U);else if(A>0)f(y.b,y.a,y.c,b,x,E,M,S,R,L,U);else if(M*R>0||S!=0)f(y.a,y.b,y.c,x,b,E,S,M,R,L,U);else if(M!=0)f(y.b,y.a,y.c,b,x,E,M,S,R,L,U);else if(R!=0)f(y.c,y.a,y.b,E,x,b,R,S,M,L,U);else return!0;return!1}function _(y,x,b,E){const w=x.degenerateSegment,A=y.plane.distanceToPoint(w.start),S=y.plane.distanceToPoint(w.end);return xn(A)?xn(S)?d(y,x,b,E):(b&&(b.start.copy(w.start),b.end.copy(w.start)),y.containsPoint(w.start)):xn(S)?(b&&(b.start.copy(w.end),b.end.copy(w.end)),y.containsPoint(w.end)):y.plane.intersectLine(w,n)!=null?(b&&(b.start.copy(n),b.end.copy(n)),y.containsPoint(n)):!1}function m(y,x,b){const E=x.a;return xn(y.plane.distanceToPoint(E))&&y.containsPoint(E)?(b&&(b.start.copy(E),b.end.copy(E)),!0):!1}function p(y,x,b){const E=y.degenerateSegment,w=x.a;return E.closestPointToPoint(w,!0,n),w.distanceToSquared(n)<rd?(b&&(b.start.copy(w),b.end.copy(w)),!0):!1}function v(y,x,b,E){if(y.isDegenerateIntoSegment)if(x.isDegenerateIntoSegment){const w=y.degenerateSegment,A=x.degenerateSegment,S=s,M=r;w.delta(S),A.delta(M);const R=n.subVectors(A.start,w.start),L=S.x*M.y-S.y*M.x;if(xn(L))return!1;const U=(R.x*M.y-R.y*M.x)/L,D=-(S.x*R.y-S.y*R.x)/L;if(U<0||U>1||D<0||D>1)return!1;const N=w.start.z+S.z*U,B=A.start.z+M.z*D;return xn(N-B)?(b&&(b.start.copy(w.start).addScaledVector(S,U),b.end.copy(w.start).addScaledVector(S,U)),!0):!1}else return x.isDegenerateIntoPoint?p(y,x,b):_(x,y,b,E);else{if(y.isDegenerateIntoPoint)return x.isDegenerateIntoPoint?x.a.distanceToSquared(y.a)<rd?(b&&(b.start.copy(y.a),b.end.copy(y.a)),!0):!1:x.isDegenerateIntoSegment?p(x,y,b):m(x,y,b);if(x.isDegenerateIntoPoint)return m(y,x,b);if(x.isDegenerateIntoSegment)return _(y,x,b,E)}}return function(x,b=null,E=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(i.copy(x),i.update(),x=i);const w=v(this,x,b,E);if(w!==void 0)return w;const A=this.plane,S=x.plane;let M=S.distanceToPoint(this.a),R=S.distanceToPoint(this.b),L=S.distanceToPoint(this.c);xn(M)&&(M=0),xn(R)&&(R=0),xn(L)&&(L=0);const U=M*R,D=M*L;if(U>0&&D>0)return!1;let N=A.distanceToPoint(x.a),B=A.distanceToPoint(x.b),G=A.distanceToPoint(x.c);xn(N)&&(N=0),xn(B)&&(B=0),xn(G)&&(G=0);const V=N*B,it=N*G;if(V>0&&it>0)return!1;s.copy(A.normal),r.copy(S.normal);const at=s.cross(r);let lt=0,yt=Math.abs(at.x);const kt=Math.abs(at.y);kt>yt&&(yt=kt,lt=1),Math.abs(at.z)>yt&&(lt=2);const K=eb[lt],gt=this.a[K],j=this.b[K],nt=this.c[K],Mt=x.a[K],Lt=x.b[K],ee=x.c[K];if(g(this,gt,j,nt,U,D,M,R,L,l,a))return d(this,x,b,E);if(g(x,Mt,Lt,ee,V,it,N,B,G,h,c))return d(this,x,b,E);if(l.y<l.x){const zt=l.y;l.y=l.x,l.x=zt,u.copy(a.start),a.start.copy(a.end),a.end.copy(u)}if(h.y<h.x){const zt=h.y;h.y=h.x,h.x=zt,u.copy(c.start),c.start.copy(c.end),c.end.copy(u)}return l.y<h.x||h.y<l.x?!1:(b&&(h.x>l.x?b.start.copy(c.start):b.start.copy(a.start),h.y<l.y?b.end.copy(c.end):b.end.copy(a.end)),!0)}})();Dn.prototype.distanceToPoint=(function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Dn.prototype.distanceToTriangle=(function(){const i=new I,t=new I,e=["a","b","c"],n=new ui,s=new ui;return function(o,a=null,c=null){const u=a||c?n:null;if(this.intersectsTriangle(o,u,!0))return(a||c)&&(a&&u.getCenter(a),c&&u.getCenter(c)),0;let l=1/0;for(let h=0;h<3;h++){let d;const f=e[h],g=o[f];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<l&&(l=d,a&&a.copy(i),c&&c.copy(g));const _=this[f];o.closestPointToPoint(_,i),d=_.distanceToSquared(i),d<l&&(l=d,a&&a.copy(_),c&&c.copy(i))}for(let h=0;h<3;h++){const d=e[h],f=e[(h+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const _=e[g],m=e[(g+1)%3];s.set(o[_],o[m]),hu(n,s,i,t);const p=i.distanceToSquared(t);p<l&&(l=p,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(l)}})();class en{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Yt,this.invMatrix=new Yt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new di),this.alignedSatBounds=new Array(3).fill().map(()=>new di),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}en.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){const d=1*u|2*l|4*h,f=s[d];f.x=u?n.x:e.x,f.y=l?n.y:e.y,f.z=h?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let u=0;u<3;u++){const l=o[u],h=r[u],d=1<<u,f=s[d];l.subVectors(a,f),h.setFromPoints(l,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();en.prototype.intersectsBox=(function(){const i=new di;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const u=o[c],l=r[c];if(i.setFromBox(u,e),l.isSeparated(i))return!1}return!0}})();en.prototype.intersectsTriangle=(function(){const i=new Dn,t=new Array(3),e=new di,n=new di,s=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=c[d];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const u=o.satBounds,l=o.satAxes,h=this.points;for(let d=0;d<3;d++){const f=u[d],g=l[d];if(e.setFromPoints(g,h),f.isSeparated(e))return!1}for(let d=0;d<3;d++){const f=c[d];for(let g=0;g<4;g++){const _=l[g];if(s.crossVectors(f,_),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}})();en.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();en.prototype.distanceToPoint=(function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();en.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new ui),e=new Array(12).fill().map(()=>new ui),n=new I,s=new I;return function(o,a=0,c=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||u)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),u&&u.copy(s)),0;const l=a*a,h=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(h,d);const v=p.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(p),u&&u.copy(s),v<l))return Math.sqrt(v)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const y=(m+1)%3,x=(m+2)%3,b=p<<y|v<<x,E=1<<m|p<<y|v<<x,w=f[b],A=f[E];t[_].set(w,A);const M=i[m],R=i[y],L=i[x],U=e[_],D=U.start,N=U.end;D[M]=h[M],D[R]=p?h[R]:d[R],D[L]=v?h[L]:d[R],N[M]=d[M],N[R]=p?h[R]:d[R],N[L]=v?h[L]:d[R],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){s.x=m?d.x:h.x,s.y=p?d.y:h.y,s.z=v?d.z:h.z,this.closestPointToPoint(s,n);const y=s.distanceToSquared(n);if(y<g&&(g=y,c&&c.copy(n),u&&u.copy(s),y<l))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=t[m];for(let v=0;v<12;v++){const y=e[v];hu(p,y,n,s);const x=n.distanceToSquared(s);if(x<g&&(g=x,c&&c.copy(n),u&&u.copy(s),x<l))return Math.sqrt(x)}}return Math.sqrt(g)}})();class nb extends lu{constructor(){super(()=>new Dn)}}const Sn=new nb,wr=new I,Tc=new I;function ib(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:l=>(wr.copy(t).clamp(l.min,l.max),wr.distanceToSquared(t)),intersectsBounds:(l,h,d)=>d<a&&d<o,intersectsTriangle:(l,h)=>{l.closestPointToPoint(t,wr);const d=t.distanceToSquared(wr);return d<a&&(Tc.copy(wr),a=d,c=h),d<r}}),a===1/0)return null;const u=Math.sqrt(a);return e.point?e.point.copy(Tc):e.point=Tc.clone(),e.distance=u,e.faceIndex=c,e}const Bo=parseInt(qr)>=169,sb=parseInt(qr)<=161,ji=new I,Yi=new I,Zi=new I,zo=new Ft,Oo=new Ft,ko=new Ft,od=new I,ad=new I,cd=new I,Er=new I;function rb(i,t,e,n,s,r,o,a){let c;if(r===Je?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==fn,s),c===null)return null;const u=i.origin.distanceTo(s);return u<o||u>a?null:{distance:u,point:s.clone()}}function ld(i,t,e,n,s,r,o,a,c,u,l){ji.fromBufferAttribute(t,r),Yi.fromBufferAttribute(t,o),Zi.fromBufferAttribute(t,a);const h=rb(i,ji,Yi,Zi,Er,c,u,l);if(h){if(n){zo.fromBufferAttribute(n,r),Oo.fromBufferAttribute(n,o),ko.fromBufferAttribute(n,a),h.uv=new Ft;const f=ke.getInterpolation(Er,ji,Yi,Zi,zo,Oo,ko,h.uv);Bo||(h.uv=f)}if(s){zo.fromBufferAttribute(s,r),Oo.fromBufferAttribute(s,o),ko.fromBufferAttribute(s,a),h.uv1=new Ft;const f=ke.getInterpolation(Er,ji,Yi,Zi,zo,Oo,ko,h.uv1);Bo||(h.uv1=f),sb&&(h.uv2=h.uv1)}if(e){od.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),cd.fromBufferAttribute(e,a),h.normal=new I;const f=ke.getInterpolation(Er,ji,Yi,Zi,od,ad,cd,h.normal);h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1),Bo||(h.normal=f)}const d={a:r,b:o,c:a,normal:new I,materialIndex:0};if(ke.getNormal(ji,Yi,Zi,d.normal),h.face=d,h.faceIndex=r,Bo){const f=new I;ke.getBarycoord(Er,ji,Yi,Zi,f),h.barycoord=f}}return h}function ud(i){return i&&i.isMaterial?i.side:i}function Da(i,t,e,n,s,r,o){const a=n*3;let c=a+0,u=a+1,l=a+2;const{index:h,groups:d}=i;i.index&&(c=h.getX(c),u=h.getX(u),l=h.getX(l));const{position:f,normal:g,uv:_,uv1:m}=i.attributes;if(Array.isArray(t)){const p=n*3;for(let v=0,y=d.length;v<y;v++){const{start:x,count:b,materialIndex:E}=d[v];if(p>=x&&p<x+b){const w=ud(t[E]),A=ld(e,f,g,_,m,c,u,l,w,r,o);if(A)if(A.faceIndex=n,A.face.materialIndex=E,s)s.push(A);else return A}}}else{const p=ud(t),v=ld(e,f,g,_,m,c,u,l,p,r,o);if(v)if(v.faceIndex=n,v.face.materialIndex=0,s)s.push(v);else return v}return null}function Pe(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,c=t+1,u=t+2;e&&(a=e.getX(a),c=e.getX(c),u=e.getX(u)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function ob(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:u}=i;for(let l=n,h=n+s;l<h;l++)Da(c,t,e,l,r,o,a)}function ab(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let u=1/0,l=null;for(let h=n,d=n+s;h<d;h++){let f;f=Da(a,t,e,h,null,r,o),f&&f.distance<u&&(l=f,u=f.distance)}return l}function cb(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,u=a.attributes.position;for(let l=i,h=t+i;l<h;l++){let d;if(d=l,Pe(o,d*3,c,u),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}function lb(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,u=0;const l=i._roots;for(let d=0,f=l.length;d<f;d++)r=l[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,u),u+=r.byteLength;function h(d,f,g=!1){const _=d*2;if(Te(_,a)){const m=Be(d,o),p=Ye(_,a);let v=1/0,y=1/0,x=1/0,b=-1/0,E=-1/0,w=-1/0;for(let A=3*m,S=3*(m+p);A<S;A++){let M=n[A];const R=s.getX(M),L=s.getY(M),U=s.getZ(M);R<v&&(v=R),R>b&&(b=R),L<y&&(y=L),L>E&&(E=L),U<x&&(x=U),U>w&&(w=U)}return c[d+0]!==v||c[d+1]!==y||c[d+2]!==x||c[d+3]!==b||c[d+4]!==E||c[d+5]!==w?(c[d+0]=v,c[d+1]=y,c[d+2]=x,c[d+3]=b,c[d+4]=E,c[d+5]=w,!0):!1}else{const m=Ie(d),p=De(d,o);let v=g,y=!1,x=!1;if(t){if(!v){const M=m/Le+f/je,R=p/Le+f/je;y=t.has(M),x=t.has(R),v=!y&&!x}}else y=!0,x=!0;const b=v||y,E=v||x;let w=!1;b&&(w=h(m,f,v));let A=!1;E&&(A=h(p,f,v));const S=w||A;if(S)for(let M=0;M<3;M++){const R=m+M,L=p+M,U=c[R],D=c[R+3],N=c[L],B=c[L+3];c[d+M]=U<N?U:N,c[d+M+3]=D>B?D:B}return S}}}function Ni(i,t,e,n,s){let r,o,a,c,u,l;const h=1/e.direction.x,d=1/e.direction.y,f=1/e.direction.z,g=e.origin.x,_=e.origin.y,m=e.origin.z;let p=t[i],v=t[i+3],y=t[i+1],x=t[i+3+1],b=t[i+2],E=t[i+3+2];return h>=0?(r=(p-g)*h,o=(v-g)*h):(r=(v-g)*h,o=(p-g)*h),d>=0?(a=(y-_)*d,c=(x-_)*d):(a=(x-_)*d,c=(y-_)*d),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),f>=0?(u=(b-m)*f,l=(E-m)*f):(u=(E-m)*f,l=(b-m)*f),r>l||u>o)?!1:((u>r||r!==r)&&(r=u),(l<o||o!==o)&&(o=l),r<=s&&o>=n)}function ub(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:u}=i;for(let l=n,h=n+s;l<h;l++){let d=u?u[l]:l;Da(c,t,e,d,r,o,a)}}function hb(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let u=1/0,l=null;for(let h=n,d=n+s;h<d;h++){let f;f=Da(a,t,e,c?c[h]:h,null,r,o),f&&f.distance<u&&(l=f,u=f.distance)}return l}function db(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,u=a.attributes.position;for(let l=i,h=t+i;l<h;l++){let d;if(d=e.resolveTriangleIndex(l),Pe(o,d*3,c,u),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}function fb(i,t,e,n,s,r,o){_e.setBuffer(i._roots[t]),Al(0,i,e,n,s,r,o),_e.clearBuffer()}function Al(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:u}=_e,l=i*2;if(Te(l,c)){const d=Be(i,u),f=Ye(l,c);ob(t,e,n,d,f,s,r,o)}else{const d=Ie(i);Ni(d,a,n,r,o)&&Al(d,t,e,n,s,r,o);const f=De(i,u);Ni(f,a,n,r,o)&&Al(f,t,e,n,s,r,o)}}const pb=["x","y","z"];function mb(i,t,e,n,s,r){_e.setBuffer(i._roots[t]);const o=Cl(0,i,e,n,s,r);return _e.clearBuffer(),o}function Cl(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=_e;let u=i*2;if(Te(u,a)){const h=Be(i,c),d=Ye(u,a);return ab(t,e,n,h,d,s,r)}else{const h=cu(i,c),d=pb[h],g=n.direction[d]>=0;let _,m;g?(_=Ie(i),m=De(i,c)):(_=De(i,c),m=Ie(i));const v=Ni(_,o,n,s,r)?Cl(_,t,e,n,s,r):null;if(v){const b=v.point[d];if(g?b<=o[m+h]:b>=o[m+h+3])return v}const x=Ni(m,o,n,s,r)?Cl(m,t,e,n,s,r):null;return v&&x?v.distance<=x.distance?v:x:v||x||null}}const Ho=new we,Ps=new Dn,Ls=new Dn,Tr=new Yt,hd=new en,Vo=new en;function gb(i,t,e,n){_e.setBuffer(i._roots[t]);const s=Rl(0,i,e,n);return _e.clearBuffer(),s}function Rl(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=_e;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),hd.set(e.boundingBox.min,e.boundingBox.max,n),s=hd),Te(c,o)){const l=t.geometry,h=l.index,d=l.attributes.position,f=e.index,g=e.attributes.position,_=Be(i,a),m=Ye(c,o);if(Tr.copy(n).invert(),e.boundsTree)return Se(i,r,Vo),Vo.matrix.copy(Tr),Vo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Vo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=_*3,x=(m+_)*3;y<x;y+=3)if(Pe(Ls,y,h,d),Ls.needsUpdate=!0,v.intersectsTriangle(Ls))return!0;return!1}});{const p=Ia(e);for(let v=_*3,y=(m+_)*3;v<y;v+=3){Pe(Ps,v,h,d),Ps.a.applyMatrix4(Tr),Ps.b.applyMatrix4(Tr),Ps.c.applyMatrix4(Tr),Ps.needsUpdate=!0;for(let x=0,b=p*3;x<b;x+=3)if(Pe(Ls,x,f,g),Ls.needsUpdate=!0,Ps.intersectsTriangle(Ls))return!0}}}else{const l=Ie(i),h=De(i,a);return Se(l,r,Ho),!!(s.intersectsBox(Ho)&&Rl(l,t,e,n,s)||(Se(h,r,Ho),s.intersectsBox(Ho)&&Rl(h,t,e,n,s)))}}const Go=new Yt,Ac=new en,Ar=new en,_b=new I,xb=new I,vb=new I,yb=new I;function Mb(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ac.set(t.boundingBox.min,t.boundingBox.max,e),Ac.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,u=a.index,l=t.attributes.position,h=t.index,d=Sn.getPrimitive(),f=Sn.getPrimitive();let g=_b,_=xb,m=null,p=null;s&&(m=vb,p=yb);let v=1/0,y=null,x=null;return Go.copy(e).invert(),Ar.matrix.copy(Go),i.shapecast({boundsTraverseOrder:b=>Ac.distanceToBox(b),intersectsBounds:(b,E,w)=>w<v&&w<o?(E&&(Ar.min.copy(b.min),Ar.max.copy(b.max),Ar.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>Ar.distanceToBox(A),intersectsBounds:(A,S,M)=>M<v&&M<o,intersectsRange:(A,S)=>{for(let M=A,R=A+S;M<R;M++){Pe(f,3*M,h,l),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let L=b,U=b+E;L<U;L++){Pe(d,3*L,u,c),d.needsUpdate=!0;const D=d.distanceToTriangle(f,g,m);if(D<v&&(_.copy(g),p&&p.copy(m),v=D,y=L,x=M),D<r)return!0}}}});{const w=Ia(t);for(let A=0,S=w;A<S;A++){Pe(f,3*A,h,l),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=b,R=b+E;M<R;M++){Pe(d,3*M,u,c),d.needsUpdate=!0;const L=d.distanceToTriangle(f,g,m);if(L<v&&(_.copy(g),p&&p.copy(m),v=L,y=M,x=A),L<r)return!0}}}}}),Sn.releasePrimitive(d),Sn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Go),_.applyMatrix4(Go),s.distance=_.sub(s.point).length(),s.faceIndex=x),n)}function Sb(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,u=0;const l=i._roots;for(let d=0,f=l.length;d<f;d++)r=l[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,u),u+=r.byteLength;function h(d,f,g=!1){const _=d*2;if(Te(_,a)){const m=Be(d,o),p=Ye(_,a);let v=1/0,y=1/0,x=1/0,b=-1/0,E=-1/0,w=-1/0;for(let A=m,S=m+p;A<S;A++){const M=3*i.resolveTriangleIndex(A);for(let R=0;R<3;R++){let L=M+R;L=n?n[L]:L;const U=s.getX(L),D=s.getY(L),N=s.getZ(L);U<v&&(v=U),U>b&&(b=U),D<y&&(y=D),D>E&&(E=D),N<x&&(x=N),N>w&&(w=N)}}return c[d+0]!==v||c[d+1]!==y||c[d+2]!==x||c[d+3]!==b||c[d+4]!==E||c[d+5]!==w?(c[d+0]=v,c[d+1]=y,c[d+2]=x,c[d+3]=b,c[d+4]=E,c[d+5]=w,!0):!1}else{const m=Ie(d),p=De(d,o);let v=g,y=!1,x=!1;if(t){if(!v){const M=m/Le+f/je,R=p/Le+f/je;y=t.has(M),x=t.has(R),v=!y&&!x}}else y=!0,x=!0;const b=v||y,E=v||x;let w=!1;b&&(w=h(m,f,v));let A=!1;E&&(A=h(p,f,v));const S=w||A;if(S)for(let M=0;M<3;M++){const R=m+M,L=p+M,U=c[R],D=c[R+3],N=c[L],B=c[L+3];c[d+M]=U<N?U:N,c[d+M+3]=D>B?D:B}return S}}}function bb(i,t,e,n,s,r,o){_e.setBuffer(i._roots[t]),Pl(0,i,e,n,s,r,o),_e.clearBuffer()}function Pl(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:u}=_e,l=i*2;if(Te(l,c)){const d=Be(i,u),f=Ye(l,c);ub(t,e,n,d,f,s,r,o)}else{const d=Ie(i);Ni(d,a,n,r,o)&&Pl(d,t,e,n,s,r,o);const f=De(i,u);Ni(f,a,n,r,o)&&Pl(f,t,e,n,s,r,o)}}const wb=["x","y","z"];function Eb(i,t,e,n,s,r){_e.setBuffer(i._roots[t]);const o=Ll(0,i,e,n,s,r);return _e.clearBuffer(),o}function Ll(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=_e;let u=i*2;if(Te(u,a)){const h=Be(i,c),d=Ye(u,a);return hb(t,e,n,h,d,s,r)}else{const h=cu(i,c),d=wb[h],g=n.direction[d]>=0;let _,m;g?(_=Ie(i),m=De(i,c)):(_=De(i,c),m=Ie(i));const v=Ni(_,o,n,s,r)?Ll(_,t,e,n,s,r):null;if(v){const b=v.point[d];if(g?b<=o[m+h]:b>=o[m+h+3])return v}const x=Ni(m,o,n,s,r)?Ll(m,t,e,n,s,r):null;return v&&x?v.distance<=x.distance?v:x:v||x||null}}const Wo=new we,Is=new Dn,Ds=new Dn,Cr=new Yt,dd=new en,Xo=new en;function Tb(i,t,e,n){_e.setBuffer(i._roots[t]);const s=Il(0,i,e,n);return _e.clearBuffer(),s}function Il(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=_e;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),dd.set(e.boundingBox.min,e.boundingBox.max,n),s=dd),Te(c,o)){const l=t.geometry,h=l.index,d=l.attributes.position,f=e.index,g=e.attributes.position,_=Be(i,a),m=Ye(c,o);if(Cr.copy(n).invert(),e.boundsTree)return Se(i,r,Xo),Xo.matrix.copy(Cr),Xo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Xo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=_,x=m+_;y<x;y++)if(Pe(Ds,3*t.resolveTriangleIndex(y),h,d),Ds.needsUpdate=!0,v.intersectsTriangle(Ds))return!0;return!1}});{const p=Ia(e);for(let v=_,y=m+_;v<y;v++){const x=t.resolveTriangleIndex(v);Pe(Is,3*x,h,d),Is.a.applyMatrix4(Cr),Is.b.applyMatrix4(Cr),Is.c.applyMatrix4(Cr),Is.needsUpdate=!0;for(let b=0,E=p*3;b<E;b+=3)if(Pe(Ds,b,f,g),Ds.needsUpdate=!0,Is.intersectsTriangle(Ds))return!0}}}else{const l=Ie(i),h=De(i,a);return Se(l,r,Wo),!!(s.intersectsBox(Wo)&&Il(l,t,e,n,s)||(Se(h,r,Wo),s.intersectsBox(Wo)&&Il(h,t,e,n,s)))}}const qo=new Yt,Cc=new en,Rr=new en,Ab=new I,Cb=new I,Rb=new I,Pb=new I;function Lb(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Cc.set(t.boundingBox.min,t.boundingBox.max,e),Cc.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,u=a.index,l=t.attributes.position,h=t.index,d=Sn.getPrimitive(),f=Sn.getPrimitive();let g=Ab,_=Cb,m=null,p=null;s&&(m=Rb,p=Pb);let v=1/0,y=null,x=null;return qo.copy(e).invert(),Rr.matrix.copy(qo),i.shapecast({boundsTraverseOrder:b=>Cc.distanceToBox(b),intersectsBounds:(b,E,w)=>w<v&&w<o?(E&&(Rr.min.copy(b.min),Rr.max.copy(b.max),Rr.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree){const w=t.boundsTree;return w.shapecast({boundsTraverseOrder:A=>Rr.distanceToBox(A),intersectsBounds:(A,S,M)=>M<v&&M<o,intersectsRange:(A,S)=>{for(let M=A,R=A+S;M<R;M++){const L=w.resolveTriangleIndex(M);Pe(f,3*L,h,l),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let U=b,D=b+E;U<D;U++){const N=i.resolveTriangleIndex(U);Pe(d,3*N,u,c),d.needsUpdate=!0;const B=d.distanceToTriangle(f,g,m);if(B<v&&(_.copy(g),p&&p.copy(m),v=B,y=U,x=M),B<r)return!0}}}})}else{const w=Ia(t);for(let A=0,S=w;A<S;A++){Pe(f,3*A,h,l),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=b,R=b+E;M<R;M++){const L=i.resolveTriangleIndex(M);Pe(d,3*L,u,c),d.needsUpdate=!0;const U=d.distanceToTriangle(f,g,m);if(U<v&&(_.copy(g),p&&p.copy(m),v=U,y=M,x=A),U<r)return!0}}}}}),Sn.releasePrimitive(d),Sn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(qo),_.applyMatrix4(qo),s.distance=_.sub(s.point).length(),s.faceIndex=x),n)}function fd(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const jo=new en,Yo=new Yr,pd=new I,md=new Yt,gd=new I,Rc=["getX","getY","getZ"];class Ma extends JS{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const a=new Ma(e,{...n,[au]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const u=e.getIndex();if(u===null){const l=new ye(t.index,1,!1);e.setIndex(l)}else u.array!==s&&(u.array.set(s),u.needsUpdate=!0)}return a;function c(u){for(let l=0;l<u.length;l++){const h=u[l],d=new Uint32Array(h),f=new Uint16Array(h);for(let g=0,_=h.byteLength/je;g<_;g++){const m=Le*g,p=2*m;Te(p,f)||(d[m+6]=d[m+6]/Le-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,u=(r?r[t]:t)*3;let l=u+0,h=u+1,d=u+2;a&&(l=a[l],h=a[h],d=a[d]);for(let f=0;f<3;f++){const g=o[Rc[f]](l),_=o[Rc[f]](h),m=o[Rc[f]](d);let p=g;_<p&&(p=_),m<p&&(p=m);let v=g;_>v&&(v=_),m>v&&(v=m),e[n+f]=p,e[n+f+3]=v}return e}computePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const u=o.array,l=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let g=t,_=t+e;g<_;g++){const p=(r?r[g]:g)*3,v=(g-f)*6;let y=p+0,x=p+1,b=p+2;a&&(y=a[y],x=a[x],b=a[b]),c||(y=y*h+l,x=x*h+l,b=b*h+l);for(let E=0;E<3;E++){let w,A,S;c?(w=o[d[E]](y),A=o[d[E]](x),S=o[d[E]](b)):(w=u[y+E],A=u[x+E],S=u[b+E]);let M=w;A<M&&(M=A),S<M&&(M=S);let R=w;A>R&&(R=A),S>R&&(R=S);const L=(R-M)/2,U=E*2;n[v+U+0]=M+L,n[v+U+1]=L+(Math.abs(M)+L)*ca}}return n}raycastObject3D(t,e,n=[]){const{material:s}=t;if(s===void 0)return;md.copy(t.matrixWorld).invert(),Yo.copy(e.ray).applyMatrix4(md),gd.setFromMatrixScale(t.matrixWorld),pd.copy(Yo.direction).multiply(gd);const r=pd.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(Yo,s,o,a);c=fd(c,t,e),c&&n.push(c)}else{const c=this.raycast(Yo,s,o,a);for(let u=0,l=c.length;u<l;u++){const h=fd(c[u],t,e);h&&n.push(h)}}return n}refit(t=null){return(this.indirect?Sb:lb)(this,t)}raycast(t,e=Hn,n=0,s=1/0){const r=this._roots,o=[],a=this.indirect?bb:fb;for(let c=0,u=r.length;c<u;c++)a(this,c,e,t,o,n,s);return o}raycastFirst(t,e=Hn,n=0,s=1/0){const r=this._roots;let o=null;const a=this.indirect?Eb:mb;for(let c=0,u=r.length;c<u;c++){const l=a(this,c,e,t,n,s);l!=null&&(o==null||l.distance<o.distance)&&(o=l)}return o}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?Tb:gb;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=Sn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?db:cb});return Sn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=Sn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,u=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Pe(o,_*3,a,c)}:g=>{Pe(o,g*3,a,c)},l=Sn.getPrimitive(),h=t.geometry.index,d=t.geometry.attributes.position,f=t.indirect?g=>{const _=t.resolveTriangleIndex(g);Pe(l,_*3,h,d)}:g=>{Pe(l,g*3,h,d)};if(r){if(!(t instanceof Ma))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(_,m,p,v,y,x,b,E)=>{for(let w=p,A=p+v;w<A;w++){f(w),l.a.applyMatrix4(e),l.b.applyMatrix4(e),l.c.applyMatrix4(e),l.needsUpdate=!0;for(let S=_,M=_+m;S<M;S++)if(u(S),o.needsUpdate=!0,r(o,l,S,w,y,x,b,E))return!0}return!1};if(s){const _=s;s=function(m,p,v,y,x,b,E,w){return _(m,p,v,y,x,b,E,w)?!0:g(m,p,v,y,x,b,E,w)}}else s=g}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return jo.set(t.min,t.max,e),jo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>jo.intersectsBox(n),intersectsTriangle:n=>jo.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?Lb:Mb)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return ib(this,t,e,n,s)}}const Ns={Mesh:ce.prototype.raycast,Line:Aa.prototype.raycast,LineSegments:lf.prototype.raycast,LineLoop:uf.prototype.raycast,Points:hf.prototype.raycast,BatchedMesh:Ev.prototype.raycast},ze=new ce,Zo=[];function Ib(i,t){if(this.isBatchedMesh)Db.call(this,i,t);else{const{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,i,t);else{let n;if(this instanceof ce)n=Ns.Mesh;else if(this instanceof lf)n=Ns.LineSegments;else if(this instanceof uf)n=Ns.LineLoop;else if(this instanceof Aa)n=Ns.Line;else if(this instanceof hf)n=Ns.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,t)}}}function Db(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;ze.material=this.material,ze.geometry=this.geometry;const o=ze.geometry.boundsTree,a=ze.geometry.drawRange;ze.geometry.boundingSphere===null&&(ze.geometry.boundingSphere=new bn);for(let c=0,u=n.length;c<u;c++){if(!this.getVisibleAt(c))continue;const l=n[c].geometryIndex;if(ze.geometry.boundsTree=e[l],this.getMatrixAt(c,ze.matrixWorld).premultiply(r),!ze.geometry.boundsTree){this.getBoundingBoxAt(l,ze.geometry.boundingBox),this.getBoundingSphereAt(l,ze.geometry.boundingSphere);const h=s[l];ze.geometry.setDrawRange(h.start,h.count)}ze.raycast(i,Zo);for(let h=0,d=Zo.length;h<d;h++){const f=Zo[h];f.object=this,f.batchId=c,t.push(f)}Zo.length=0}ze.geometry.boundsTree=o,ze.geometry.drawRange=a,ze.material=null,ze.geometry=null}else Ns.BatchedMesh.call(this,i,t)}function Ub(i={}){const{type:t=Ma}=i;return this.boundsTree=new t(this,i),this.boundsTree}function Nb(){this.boundsTree=null}ce.prototype.raycast=Ib;Ae.prototype.computeBoundsTree=Ub;Ae.prototype.disposeBoundsTree=Nb;const Fb=new I(0,-1,0),_d=new I,Dl=new Ra;Dl.firstHitOnly=!0;function xd(i,t,e,n){var a;const s=Array.isArray(i)?i:[i],r=Wr(s,t,e)??s[0];return r?(_d.set(t,120,e),Dl.set(_d,Fb),((a=Dl.intersectObject(r,!1)[0])==null?void 0:a.point.y)??n):n}const vd={x:-3112,z:-100},yd={x:-3162,z:-82};let Xr=Zf();function Zf(){return{npcs:[{id:"change",name:"嫦娥",mountainId:"heichi"}],quests:Vf.map((i,t)=>({id:i.id,title:i.name,status:t===0?"active":"locked",steps:[`行至${i.name}`]})),仁羿:!1}}function Bb(){return Xr=Zf(),Xr}function zb(){return Xr.仁羿}function Md(i,t){(Math.hypot(i-vd.x,t-vd.z)<40||Math.hypot(i-yd.x,t-yd.z)<22)&&(Xr.仁羿=!0);let e=!1;for(const n of Xr.quests){const s=Vf.find(r=>r.id===n.id);s&&(Math.hypot(i-s.x,t-s.z)<32?(n.status="done",e=!0):e&&n.status==="locked"&&(n.status="active",e=!1))}}const $o=new I,Sd=new I,Oe=new I,Ob=new I(0,1.55,0),bd=new I,$i=new I,Ko=new I,Pr=new I,Ur=new Ra;Ur.firstHitOnly=!0;const wd=-Math.PI/2+.06,Ed=Math.PI/2-.06,kb=1.1;class $f{constructor(t,e,n,s={}){ge(this,"rig",new te);ge(this,"keys",new Set);ge(this,"stick",new Ft);ge(this,"yaw");ge(this,"pitch");ge(this,"flying",!1);ge(this,"flySpeedIndex",1);ge(this,"terrains");ge(this,"bounds");ge(this,"lastX",Number.NaN);ge(this,"lastZ",Number.NaN);ge(this,"flyLatch",!1);this.camera=t,this.sample=e,this.terrains=Array.isArray(n)?n:[n],this.bounds=s,this.yaw=s.startYaw??-Math.PI/2;const r=s.camDist??7.5;this.pitch=s.startPitch??Math.atan2(s.camHeight??3.1,r);const o=new ce(new Di(.55,1.35,.4),new Ph({color:12886874,roughness:.7}));o.position.y=.85,o.castShadow=!0;const a=new ce(new Di(.42,.42,.42),new Ph({color:15787732}));a.position.y=1.62,this.rig.add(o,a)}bind(t,e){const n=a=>{const c=a.key.toLowerCase();(c===" "||c==="f")&&a.preventDefault(),this.keys.add(c)},s=a=>this.keys.delete(a.key.toLowerCase());window.addEventListener("keydown",n),window.addEventListener("keyup",s);const r=a=>{document.pointerLockElement===t&&(this.yaw-=a.movementX*.0024,this.pitch+=a.movementY*.0022,this.pitch<wd&&(this.pitch=wd),this.pitch>Ed&&(this.pitch=Ed))},o=()=>{t.requestPointerLock()};return t.addEventListener("click",o),document.addEventListener("mousemove",r),e&&Hb(e,this.stick),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s),document.removeEventListener("mousemove",r),t.removeEventListener("click",o),document.exitPointerLock()}}toggleFly(){this.flying=!this.flying,this.flying||this.snapToGround()}cycleFlySpeed(t=1){this.flySpeedIndex=(this.flySpeedIndex+t+3)%3}flySpeedLabel(){return["慢","中","快"][this.flySpeedIndex]??"中"}meshAt(t,e){return Wr(this.terrains,t,e)??this.terrains[0]}snapToGround(){const t=this.rig.position.x,e=this.rig.position.z,n=this.bounds.seaLevel??Re,s=this.meshAt(t,e),r=s?xd(s,t,e,xa(s,t,e,this.sample(t,e))):this.sample(t,e);this.rig.position.y=Math.max(n+.12,r),this.lastX=t,this.lastZ=e}update(t){const e=this.keys.has("f");e&&!this.flyLatch&&this.toggleFly(),this.flyLatch=e,Oe.set(0,0,0),(this.keys.has("w")||this.keys.has("arrowup"))&&(Oe.z-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(Oe.z+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(Oe.x-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(Oe.x+=1),Oe.x+=this.stick.x,Oe.z+=this.stick.y,$o.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),Sd.set($o.z,0,-$o.x);const n=Oe.x,s=Oe.z;Oe.set(0,0,0),Oe.addScaledVector($o,s),Oe.addScaledVector(Sd,n),Oe.y=0,Oe.lengthSq()>1e-8&&Oe.normalize();const r=this.keys.has("shift")?14:7.2,o=this.flying?r*[1,3,8][this.flySpeedIndex]:r,a=this.rig.position.x,c=this.rig.position.z,u=this.rig.position.y;if(this.rig.position.addScaledVector(Oe,o*t),this.rig.rotation.y=this.yaw,this.flying){let b=0;(this.keys.has(" ")||this.keys.has("e"))&&(b+=1),this.keys.has("q")&&(b-=1),this.rig.position.y+=b*o*t}const{minX:l,maxX:h,minZ:d,maxZ:f}=this.bounds;l!==void 0&&(this.rig.position.x=Math.max(l,this.rig.position.x)),h!==void 0&&(this.rig.position.x=Math.min(h,this.rig.position.x)),d!==void 0&&(this.rig.position.z=Math.max(d,this.rig.position.z)),f!==void 0&&(this.rig.position.z=Math.min(f,this.rig.position.z));const g=this.rig.position.x,_=this.rig.position.z,m=this.bounds.seaLevel??Re;if(!this.flying&&(g!==this.lastX||_!==this.lastZ)){const b=this.meshAt(g,_),E=b?ru(b,g,_,this.sample(g,_)):{y:this.sample(g,_)},w=Math.max(m+.12,b?xd(b,g,_,E.y):E.y);w>u+kb&&Oe.lengthSq()>0?(this.rig.position.x=a,this.rig.position.z=c):(this.lastX=g,this.lastZ=_,this.rig.position.y=w,Math.abs(g-520)<20&&w>50&&(this.rig.position.x=a+(g-520>0?.4:-.4),this.rig.position.y=Math.min(w,u+.2)),!zb()&&g>-2900&&g<-2780&&_<-358&&_>-385&&(this.rig.position.x=a,this.rig.position.z=c,this.rig.position.y=u),Md(this.rig.position.x,this.rig.position.z))}Md(this.rig.position.x,this.rig.position.z),$i.copy(this.rig.position).add(Ob);const p=this.bounds.camDist??7.5,v=this.pitch,y=Math.cos(v)*p;bd.set(Math.sin(this.yaw)*y,Math.sin(v)*p,Math.cos(this.yaw)*y),Ko.copy($i).add(bd),Pr.copy(Ko).sub($i);const x=Pr.length();if(x>.1){Pr.multiplyScalar(1/x),Ur.set($i,Pr),Ur.far=x;const b=Wr(this.terrains,$i.x,$i.z);let E=b?Ur.intersectObject(b,!1)[0]:void 0;if(!E){const w=this.terrains.find(A=>(A.userData.priority??1)===0);w&&w!==b&&(E=Ur.intersectObject(w,!1)[0])}E&&E.distance<x-.25&&Ko.copy(E.point).addScaledVector(Pr,-.5)}this.camera.position.lerp(Ko,.92),this.camera.lookAt($i)}teleport(t,e){this.rig.position.x=t,this.rig.position.z=e,this.lastX=t,this.lastZ=e,!this.flying&&this.snapToGround()}}function Hb(i,t){const e=i.querySelector(".knob"),n=(o,a)=>{const c=i.getBoundingClientRect(),u=c.left+c.width/2,l=c.top+c.height/2;let h=(o-u)/42,d=(a-l)/42;const f=Math.hypot(h,d);f>1&&(h/=f,d/=f),t.set(h,d),e.style.left=`${34+h*28}px`,e.style.top=`${34+d*28}px`},s=()=>{t.set(0,0),e.style.left="34px",e.style.top="34px"},r=o=>n(o.clientX,o.clientY);return i.addEventListener("pointerdown",o=>{i.setPointerCapture(o.pointerId),r(o)}),i.addEventListener("pointermove",o=>{i.hasPointerCapture(o.pointerId)&&r(o)}),i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),()=>{}}const Vb=[...Ql.map(i=>({id:i,name:Jl[i].name,kind:i})),{id:"migu",name:"迷穀",kind:"sang",overlay:{glowSiZhao:!0}}];function Gb(i){const e=document.createElement("canvas"),n=new af({canvas:e,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});n.setSize(384,384,!1),n.setPixelRatio(1),n.outputColorSpace=an,n.toneMapping=Nl,n.toneMappingExposure=1.15,n.setClearColor(new Rt(tt.sky),1);const s=new dn(28,1,.08,120),r=new ff(tt.sky,tt.sand,.95),o=new pa(16773852,1.2);o.position.set(5,9,4);const a=new pa(12113128,.32);a.position.set(-4,5,-6);const c=new we,u=new I,l=new I,h=[];for(const d of Vb){const f=new cf;f.background=new Rt(tt.sky),f.add(r.clone()),f.add(o.clone()),f.add(a.clone());const g=ga(d.kind,21,i,d.overlay);f.add(g),g.updateMatrixWorld(!0),c.setFromObject(g),c.getCenter(u),c.getSize(l);const _=Math.max(l.x,l.y,l.z,.6)*2.05;s.position.set(u.x+_*.72,u.y+_*.22,u.z+_*.86),s.near=Math.max(.05,_*.02),s.far=_*12,s.updateProjectionMatrix(),s.lookAt(u),n.render(f,s),h.push({id:d.id,name:d.name,src:e.toDataURL("image/png")}),f.clear()}return n.dispose(),h}function Wb(i,t){const e=document.createElement("div");e.className="codex-modal hidden",e.innerHTML=`
    <article class="codex-card">
      <header class="codex-head">
        <div>
          <h2>圖鑑</h2>
          <p class="codex-note">常木與迷穀。描述為占位，稍後再補。</p>
        </div>
        <button class="ghost" type="button" id="codex-close">關閉</button>
      </header>
      <div class="codex-list"><p class="codex-empty">正在繪製……</p></div>
    </article>
  `,i.appendChild(e);const n=e.querySelector(".codex-list");let s=!1;const r=()=>{if(s)return;s=!0;const a=Gb(t);n.innerHTML=a.map(c=>`
      <article class="codex-entry">
        <img src="${c.src}" alt="${c.name}" width="192" height="192" />
        <div>
          <h3>${c.name}</h3>
          <p class="codex-desc">（描述待補）</p>
        </div>
      </article>`).join("")},o=()=>e.classList.add("hidden");return e.querySelector("#codex-close").addEventListener("click",o),e.addEventListener("click",a=>{a.target===e&&o()}),{open(){e.classList.remove("hidden"),r()},close:o}}const Jn=176,Xb=180;function qb(i,t,e,n,s){const r=document.createElement("button");r.type="button",r.className="minimap",r.title="開啟大地圖",r.setAttribute("aria-label","小地圖，點擊開啟大地圖"),r.innerHTML=`<canvas width="${Jn}" height="${Jn}"></canvas><div class="minimap-place">招搖之山</div>`,r.addEventListener("click",t),i.appendChild(r);const a=r.querySelector("canvas").getContext("2d"),c=r.querySelector(".minimap-place"),u=n.maxX-n.minX,l=n.maxZ-n.minZ,h=(d,f,g,_)=>{const m=Jn/2,p=Jn/2,v=Jn/2-3;a.clearRect(0,0,Jn,Jn),a.save(),a.beginPath(),a.arc(m,p,v,0,Math.PI*2),a.clip();const y=e.width/u,x=e.height/l,b=v/Xb;a.translate(m,p),a.scale(b/y,b/x),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(e,-(d-n.minX)*y,-(f-n.minZ)*x),a.restore(),a.save(),a.beginPath(),a.arc(m,p,v,0,Math.PI*2),a.clip();const E=a.createRadialGradient(m,p,v*.72,m,p,v);E.addColorStop(0,"rgba(8, 12, 10, 0)"),E.addColorStop(1,"rgba(8, 12, 10, 0.16)"),a.fillStyle=E,a.fillRect(0,0,Jn,Jn),a.restore(),a.save(),a.translate(m,p),a.rotate(Math.PI-g),a.fillStyle="#e8c86a",a.strokeStyle="#3a2410",a.lineWidth=1.2,a.beginPath(),a.moveTo(0,-8),a.lineTo(5.5,7),a.lineTo(0,3.5),a.lineTo(-5.5,7),a.closePath(),a.fill(),a.stroke(),a.restore(),a.beginPath(),a.arc(m,p,v,0,Math.PI*2),a.strokeStyle="#c4a35a",a.lineWidth=3,a.stroke(),a.beginPath(),a.arc(m,p,v-5,0,Math.PI*2),a.strokeStyle="rgba(243, 230, 204, 0.28)",a.lineWidth=1.2,a.stroke(),a.fillStyle="#9c2b1a",a.beginPath(),a.arc(m,14,8,0,Math.PI*2),a.fill(),a.fillStyle="#f3e6cc",a.font="700 10px 'Songti TC', 'Noto Serif TC', serif",a.textAlign="center",a.textBaseline="middle",a.fillText("北",m,14.5),_&&(c.textContent=_)};return h(n.minX+u/2,n.minZ+l/2,-Math.PI/2),{update:h}}function jb(i,t,e){const n=document.createElement("div");n.className="world-map-modal hidden",n.innerHTML=`
    <article class="world-map-card">
      <header class="world-map-head">
        <div>
          <h2>山海圖</h2>
          <p class="world-map-note">北上。點地標閱經文，可傳至山足。滾輪縮放，拖曳平移。</p>
        </div>
        <button class="ghost" type="button" id="world-map-close">關閉</button>
      </header>
      <div class="world-map-body">
        <canvas width="1100" height="640"></canvas>
        <aside class="world-map-panel">
          <p class="world-map-empty">點選地圖上的地標。</p>
        </aside>
      </div>
    </article>
  `,i.appendChild(n);const s=n.querySelector("canvas"),r=s.getContext("2d"),o=n.querySelector(".world-map-panel"),a=n.querySelector("#world-map-close"),c=Ji.maxX-Ji.minX,u=Ji.maxZ-Ji.minZ,l=$h.map(D=>({id:D.mountainId,name:D.name,jing:D.quote,ring:"shan",dir:"s",deg:0,r:0,walkable:!0,worldX:D.x,worldZ:D.z,quote:D.quote,modern:D.modern??D.name,mx:0,my:0}));let h=0,d=0,f=0,g,_,m=0,p=0,v=900,y=!1,x=0,b=0;const E=(D,N)=>{const B=(D-m)/v*s.width+s.width/2,G=v*(s.height/s.width),V=(N-p)/G*s.height+s.height/2;return{px:B,py:V}},w=(D,N)=>{const B=v*(s.height/s.width),G=m+(D-s.width/2)/s.width*v,V=p+(N-s.height/2)/s.height*B;return{x:G,z:V}},A=(D,N)=>{m=D,p=N,v=2400},S=()=>n.classList.add("hidden"),M=()=>{n.classList.remove("hidden"),A(h,d),U(),L()};a.addEventListener("click",S),n.addEventListener("click",D=>{D.target===n&&S()});const R=D=>{const N=s.getBoundingClientRect(),B=(D.clientX-N.left)/N.width*s.width,G=(D.clientY-N.top)/N.height*s.height,{x:V,z:it}=w(B,G);let at,lt=v*.035;for(const yt of l){const kt=Math.hypot((yt.worldX??0)-V,(yt.worldZ??0)-it);kt<lt&&(lt=kt,at=yt)}return at};s.addEventListener("mousemove",D=>{if(y){const N=s.getBoundingClientRect(),B=(D.clientX-N.left)/N.width*s.width,G=(D.clientY-N.top)/N.height*s.height,V=w(x,b),it=w(B,G);m-=it.x-V.x,p-=it.z-V.z,x=B,b=G,U();return}_=R(D),s.style.cursor=_?"pointer":"grab",U()}),s.addEventListener("mousedown",D=>{const N=s.getBoundingClientRect();x=(D.clientX-N.left)/N.width*s.width,b=(D.clientY-N.top)/N.height*s.height,y=!0}),window.addEventListener("mouseup",()=>{y=!1}),s.addEventListener("mouseleave",()=>{_=void 0,U()}),s.addEventListener("click",D=>{const N=R(D);N&&(g=N,L(),U())}),s.addEventListener("wheel",D=>{D.preventDefault();const N=D.deltaY>0?1.12:.89;v=Math.min(c*1.15,Math.max(220,v*N)),U()},{passive:!1});const L=()=>{var G;const D=g;if(!D){o.innerHTML='<p class="world-map-empty">點選地圖上的地標。</p>';return}const N=D.walkable?'<button class="ghost" type="button" id="world-map-go">前往此山</button>':`<p class="world-map-lock">${D.lockedHint??"尚未開通。"}</p>`,B=D.mythNote?`<p class="world-map-myth">${D.mythNote}</p>`:"";o.innerHTML=`
      <p class="world-map-jing">${D.jing}</p>
      <h3>${D.name}</h3>
      <p class="world-map-quote">${D.quote}</p>
      <p class="world-map-modern">${D.modern}</p>
      ${B}
      ${N}
    `,(G=o.querySelector("#world-map-go"))==null||G.addEventListener("click",()=>{t(D),S()})},U=()=>{const D=s.width,N=s.height;r.fillStyle="#cbb58a",r.fillRect(0,0,D,N);const B=v*(N/D),G=(m-v/2-Ji.minX)/c*e.width,V=(p-B/2-Ji.minZ)/u*e.height,it=v/c*e.width,at=B/u*e.height;r.imageSmoothingEnabled=!0,r.drawImage(e,G,V,it,at,0,0,D,N),r.fillStyle="rgba(92, 48, 28, 0.88)",r.font="11px 'Songti TC', 'Noto Serif TC', serif",r.textAlign="center",r.textBaseline="bottom";const lt=v<3600;for(const Z of $h){const K=E(Z.x,Z.z);K.px<8||K.py<8||K.px>D-8||K.py>N-8||(Td(r,K.px,K.py,lt?4.5:3.2,"#c4a35a"),lt&&(r.fillStyle="rgba(50, 36, 20, 0.82)",r.fillText(Z.name,K.px,K.py-7)))}const yt=_??g;for(const Z of l){const K=E(Z.worldX??0,Z.worldZ??0);if(K.px<4||K.py<4||K.px>D-4||K.py>N-4)continue;(yt==null?void 0:yt.id)===Z.id&&Td(r,K.px,K.py,8,"#9c2b1a")}const kt=E(h,d);r.save(),r.translate(kt.px,kt.py),r.rotate(Math.PI-f),r.fillStyle="#9c2b1a",r.beginPath(),r.moveTo(0,-10),r.lineTo(6,8),r.lineTo(0,4),r.lineTo(-6,8),r.closePath(),r.fill(),r.restore(),r.fillStyle="rgba(60, 42, 22, 0.7)",r.font="13px 'Songti TC', 'Noto Serif TC', serif",r.textAlign="left",r.fillText("北",16,22)};return U(),{open:M,close:S,isOpen:()=>!n.classList.contains("hidden"),update(D,N,B){h=D,d=N,f=B,n.classList.contains("hidden")||U()}}}function Td(i,t,e,n,s){i.fillStyle=s,i.strokeStyle="rgba(243, 230, 204, 0.7)",i.lineWidth=1,i.beginPath(),i.moveTo(t,e-n),i.lineTo(t+n*.72,e),i.lineTo(t,e+n),i.lineTo(t-n*.72,e),i.closePath(),i.fill(),i.stroke()}async function Yb(i,t,e,n,s={}){t.innerHTML='<div class="loading">正在生成山海……</div>',await new Promise(G=>{const V=()=>G();requestAnimationFrame(V),window.setTimeout(V,40)});const r=eu(s.mountainId??"zhaoyao")??hi[0];kh(r.id);const o=hi.map(G=>G.id);i.scene.fog=new ql(new Rt(tt.sky).getHex(),.0016);const a=Af(i.scene,e),c=G1({sample:Bn,biomeAt:Ro,quality:e,x:r.padX,z:r.padZ});i.scene.add(c.group);const u=(G,V)=>X1(c.meshes,G,V,Bn(G,V)).y,l=(G,V)=>k1(Bn,G,V)+.08,h=Pf({x:(On+si)/2,z:(kn+ri)/2,width:si-On+180,depth:ri-kn+180,qualityHigh:e==="high"});i.scene.add(h);const d=lM({terrain:c.meshes,sample:Bn,biomeAt:Ro,minX:On,maxX:si,minZ:kn,maxZ:ri,quality:e});i.scene.add(d);const f=n1({terrain:c.meshes,sample:Bn,biomeAt:Ro,minX:On,maxX:si,minZ:kn,maxZ:ri,count:e==="high"?90:45});i.scene.add(f);const g=new te;Zb(g,e,l,o),g.traverse(G=>{G.castShadow=!1}),i.scene.add(g),i.scene.add(LS(l));const _=new te;N1(_,l),i.scene.add(_);const m=B1();i.scene.add(m.group);const p=QM(e);i.scene.add(p.group);const v=Xh(498,20,38);v.group.scale.set(6,4.5,10),i.scene.add(v.group);const y=Xh(506,38,52);y.group.scale.set(5,3.5,8),i.scene.add(y.group);const x=j1();t.innerHTML="";const b=r.padX,E=r.padZ,w=new $f(i.camera,Bn,c.meshes,{minX:On+12,maxX:si-12,minZ:kn+12,maxZ:ri-12,camDist:16,camHeight:9});w.rig.position.set(b,u(b,E),E),i.scene.add(w.rig),window.__player=w,Hh(d,0,b,E);const A=Wb(t,e),S=jb(t,G=>{!G.walkable||G.worldX===void 0||(document.exitPointerLock(),w.teleport(G.worldX,G.worldZ??0))},x);t.appendChild($b(n,e,()=>A.open(),()=>{document.exitPointerLock(),S.isOpen()?S.close():S.open()}));const M=qb(t,()=>{document.exitPointerLock(),S.open()},x,Ji,r.id),R=document.createElement("div");R.className="joystick",R.innerHTML='<div class="knob"></div>',t.appendChild(R);const L=document.createElement("div");L.className="hint",L.textContent="WASD 行走 · 滑鼠環視 · F 飛行 · M 大地圖",t.appendChild(L);const U=Kb(t,w),D=w.bind(i.renderer.domElement,R),N=Jb(i,c,w),B=G=>{(G.key==="m"||G.key==="M")&&(G.preventDefault(),document.exitPointerLock(),S.isOpen()?S.close():S.open()),G.key==="Escape"&&S.isOpen()&&S.close(),(G.key==="["||G.key==="]")&&(w.cycleFlySpeed(G.key==="]"?1:-1),U.sync(w.flying))};return window.addEventListener("keydown",B),i.setFrame((G,V)=>{S.isOpen()||w.update(G),a.update(V,i.camera.position.x,i.camera.position.z),Lf(h,V,i.camera.position.x,i.camera.position.y,i.camera.position.z),Hh(d,V,w.rig.position.x,w.rig.position.z),p.update(V),v.update(V),y.update(V),m.update(V),_a(_,V,u),_a(i.scene,V,u);const at=xl(w.rig.position.x,w.rig.position.z).id==="yuanyi"?.006:.0016;i.scene.fog.density+=(at-i.scene.fog.density)*.04;const lt=w.rig.position.x,yt=w.rig.position.z;kf(c,lt,yt,Bn,Ro,e),M.update(lt,yt,w.yaw,xl(lt,yt).name),S.update(lt,yt,w.yaw),U.sync(w.flying)}),()=>{kh(null),delete window.__player,window.removeEventListener("keydown",B),D(),N(),i.scene.clear(),t.innerHTML=""}}function Zb(i,t,e,n){const s=Iv(t),r=new Map,o=(u,l)=>`${u}:${l!=null&&l.glowSiZhao?"g":""}${l!=null&&l.strange?"s":""}${l!=null&&l.lacquer?"l":""}`,a=(u,l)=>{const h=o(u,l);let d=r.get(h);if(!d){const f=u.charCodeAt(0)*97+(l!=null&&l.strange?31:0);d=Array.from({length:s},(g,_)=>ga(u,f+_*17,t,l)),r.set(h,d)}return d},c=new Set(n);for(const u of yf){if(!c.has(u.mountainId))continue;const l=hi.find(_=>_.id===u.mountainId),h=(l==null?void 0:l.x)??0,d=(l==null?void 0:l.z)??0,f=(l==null?void 0:l.padX)??h,g=(l==null?void 0:l.padZ)??d;for(const _ of u.scatter){const m=a(_.kind,_.overlay);for(let p=0;p<_.count;p+=1){const v=Math.random()*Math.PI*2,y=Math.random()*_.radius,x=h+(_.xCenter??0)+Math.cos(v)*y,b=d+(_.zCenter??0)+Math.sin(v)*y,E=e(x,b);E<Re+.4||u.mountainId==="yuanyi"&&E>50||Math.hypot(x-f,b-g)<40||i.add(vl(m[p%m.length],x,E-.04,b,Math.random()*Math.PI*2))}}for(const _ of u.specimens??[]){const m=ga(_.kind,4400+Math.floor(_.x*9),t,_.overlay),p=h+_.x,v=d+_.z,y=e(p,v);i.add(vl(m,p,y-.04,v,_.yaw??0))}if(u.zhuyu){const _=u.zhuyu;for(let m=0;m<_.count;m+=1){const p=nu(),v=h+_.minX+Math.random()*_.spanX,y=d+_.minZ+Math.random()*_.spanZ;p.position.set(v,e(v,y)-.02,y),i.add(p)}}}}function $b(i,t,e,n){const s=document.createElement("div");return s.className="hud",s.innerHTML=`
    <div class="hud-cluster">
      <button class="ghost" id="back">返回</button>
      <button class="ghost" id="mute">${er()?"靜音中":"靜音"}</button>
      <button class="ghost" id="map">地圖</button>
      <button class="ghost" id="dex">圖鑑</button>
      <span style="letter-spacing:0.2em">第一景 · ${t==="high"?"細緻":"流暢"}</span>
    </div>
  `,s.querySelector("#back").addEventListener("click",i),s.querySelector("#mute").addEventListener("click",r=>{const o=_f();r.currentTarget.textContent=o?"靜音中":"靜音"}),s.querySelector("#map").addEventListener("click",n),s.querySelector("#dex").addEventListener("click",e),s}function Kb(i,t){const e=document.createElement("div");e.className="fly-hud hidden",e.innerHTML=`
    <span>飛行 · Space/E 升 · Q 降 · Esc 解鎖後拖曳改地形</span>
    <span class="fly-debug">除錯 飛行速度</span>
    <button class="ghost" id="fly-slow" data-s="0">慢</button>
    <button class="ghost active" id="fly-mid" data-s="1">中</button>
    <button class="ghost" id="fly-fast" data-s="2">快</button>
    <button class="ghost active" data-b="raise">堆高</button>
    <button class="ghost" data-b="lower">挖低</button>
    <button class="ghost" data-b="smooth">平滑</button>
    <button class="ghost" id="export-sculpt">匯出地形 JSON</button>
  `,i.appendChild(e);const n=()=>{e.querySelectorAll("button[data-s]").forEach(s=>{s.classList.toggle("active",Number(s.getAttribute("data-s"))===t.flySpeedIndex)})};return e.querySelectorAll("button[data-s]").forEach(s=>{s.addEventListener("click",()=>{t.flySpeedIndex=Number(s.getAttribute("data-s")),n()})}),e.querySelector("#export-sculpt").addEventListener("click",()=>Uy()),e.querySelectorAll("button[data-b]").forEach(s=>{s.addEventListener("click",()=>{e.querySelectorAll("button[data-b]").forEach(r=>r.classList.remove("active")),s.classList.add("active"),Kf=s.getAttribute("data-b")})}),{sync(s){e.classList.toggle("hidden",!s),n()}}}let Kf="raise";function Jb(i,t,e){const n=i.renderer.domElement,s=new Ra,r=new Ft;let o=!1;const a=(d,f)=>{var m;const g=n.getBoundingClientRect();return r.x=(d-g.left)/g.width*2-1,r.y=-((f-g.top)/g.height)*2+1,s.setFromCamera(r,i.camera),(m=s.intersectObjects(t.meshes,!1)[0])==null?void 0:m.point},c=(d,f)=>{if(!e.flying||document.pointerLockElement===n)return;const g=a(d,f);g&&(Dy(g.x,g.z,Kf),q1(t,g.x,g.z,Bn))},u=d=>{!e.flying||document.pointerLockElement===n||d.button!==0||(o=!0,c(d.clientX,d.clientY))},l=d=>{o&&c(d.clientX,d.clientY)},h=()=>{o=!1};return n.addEventListener("pointerdown",u),window.addEventListener("pointermove",l),window.addEventListener("pointerup",h),()=>{n.removeEventListener("pointerdown",u),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",h)}}const Ad="kunlun-island-help-v1";function Qb(i){const t=document.createElement("div");t.className="help-modal hidden",t.innerHTML=`
    <article class="help-card">
      <h2>如何造島</h2>
      <ol>
        <li><b>堆高 / 挖低</b>：按住滑鼠在陸地上拖曳。堆過海面即成山丘；挖到海面以下，海水會灌進來。</li>
        <li><b>抹平 / 整地</b>：把陡坡修順，或把一塊地整成平台，方便走路與放樹。</li>
        <li><b>放置</b>：點「放置」，再從右側選草木或鳥獸，點島上安放。</li>
        <li><b>視角</b>：Shift 拖曳或右鍵旋轉，滾輪拉近拉遠。</li>
        <li><b>進入島嶼</b>：先儲存，再按「進入島嶼」，用 WASD 或左下搖桿在自己的島上行走。點畫面可鎖定視角。</li>
      </ol>
      <h3>山海草木</h3>
      <ul>
        <li><b>常木</b>：桂、松、柏、棕、檀、桑、棪、桃、梓、柳、竹、杉。可任意多株。</li>
        <li><b>桑</b>：構、桑同族。探南山招搖之「迷穀」是帶四照的桑，造島只放素桑。</li>
        <li><b>祝餘</b>：草，葉如韭，青華，食之不飢。</li>
        <li><b>異木</b>：建木、扶桑為獨株神木，未至其經，需專用模型。</li>
      </ul>
      <p class="help-note">主世界「探南山」不能鏟改，以保持經文中的山川草木鳥獸。</p>
      <button class="ghost" id="help-close">知道了</button>
    </article>
  `,i.appendChild(t);const e=()=>t.classList.add("hidden");t.querySelector("#help-close").addEventListener("click",e),t.addEventListener("click",s=>{s.target===t&&e()});const n=()=>t.classList.remove("hidden");return{open:n,close:e,maybeFirstOpen(){localStorage.getItem(Ad)||(localStorage.setItem(Ad,"1"),n())}}}const tw={migu:"sang",baigao:"sang",strange:"sang"};function ew(i){return tw[i]??i}const Jf="kunlun-island-v1";function Cd(){const i=localStorage.getItem(Jf);if(!i)return null;try{const t=JSON.parse(i);return t.placements||(t.placements=[]),t.placements=t.placements.map(e=>({...e,id:ew(e.id)})),t}catch{return null}}function Rd(i){localStorage.setItem(Jf,JSON.stringify({...i,version:2}))}function Pd(i=80,t=72){const e=new Array(i*i).fill(0),n=new Array(i*i).fill(0),s=(i-1)/2;for(let r=0;r<i;r+=1)for(let o=0;o<i;o+=1){const a=(o-s)/(i*.38),c=(r-s)/(i*.38),u=Math.sqrt(a*a+c*c),l=Math.max(0,1-u);e[r*i+o]=l*l*6.5,n[r*i+o]=l>.15?l*.6:0}return{version:2,res:i,size:t,heights:e,grass:n,placements:[]}}const nw=.55,iw={gui:"gui",song:"song",bai:"bai",zong:"zong",tan:"tan",sang:"sang",yanmu:"yan",tao:"tao",zi:"zi",liu:"liu",zhu:"zhu",shan:"shan"};function sw(i){return iw[i]}async function rw(i,t,e,n){t.innerHTML='<div class="loading">正在準備島嶼……</div>',await new Promise(j=>{const nt=()=>j();requestAnimationFrame(nt),window.setTimeout(nt,40)});let s=Cd()??Pd();const r=Af(i.scene,e),o=(j,nt)=>ow(s,j,nt),a=su({minX:-s.size/2,maxX:s.size/2,minZ:-s.size/2,maxZ:s.size/2,segX:s.res-1,segZ:s.res-1,sample:o,jitter:.12});a.geometry.computeBoundsTree(),i.scene.add(a);const c=Pf({x:0,z:0,width:140,depth:140,qualityHigh:!1}),u=YM(s.res);Wh(u,s.heights,s.res),ZM(c,u,-s.size/2,-s.size/2,s.size),i.scene.add(c);const l=new te;i.scene.add(l);const h=Object.fromEntries(Ql.map((j,nt)=>[j,ga(j,9+nt*3,e)]));Lr(l,s,h,o,a),i.camera.position.set(28,22,28),i.camera.lookAt(0,3.5,0),t.innerHTML="",t.appendChild(cw(n));const d=lw();t.appendChild(d.el);const f=uw();t.appendChild(f.el);const g=Qb(t);t.querySelector("#help").addEventListener("click",()=>g.open()),g.maybeFirstOpen();const _=document.createElement("div");_.className="play-ui hidden",_.innerHTML='<div class="joystick"><div class="knob"></div></div><div class="hint">WASD 行走 · 點畫面鎖定視角</div>',t.appendChild(_);let m="raise",p="gui",v={...Os},y=!1,x=!1,b=null,E=null;const w=new Ra,A=new Ft,S=new te;S.visible=!1,i.scene.add(S);const M=()=>{S.clear(),S.add(ir("chimera",v))};M(),d.onChange(j=>{m=j,j&&(S.visible=!1)}),f.onChange((j,nt)=>{p=j,nt&&(v=nt,M()),S.visible=d.mode==="stamp"&&p==="chimera"&&!x});const R=i.renderer.domElement,L=j=>{const nt=R.getBoundingClientRect();return A.x=(j.clientX-nt.left)/nt.width*2-1,A.y=-((j.clientY-nt.top)/nt.height)*2+1,w.setFromCamera(A,i.camera),w.intersectObject(a,!1)[0]},U=()=>{Wh(u,s.heights,s.res),ou(a,-s.size/2,s.size/2,-s.size/2,s.size/2,s.res-1,s.res-1,o),a.geometry.computeBoundsTree()},D=j=>{const nt=L(j);nt&&d.mode==="brush"&&(aw(s,nt.point.x,nt.point.z,m,4.5,.35),U())},N=j=>{if(!x)if(y=!0,d.mode==="stamp"){const nt=L(j);if(!nt)return;s.placements.push({id:p,x:nt.point.x,z:nt.point.z,rot:Math.random()*Math.PI*2,scale:1,recipe:p==="chimera"?{...v}:void 0}),Lr(l,s,h,o,a)}else D(j)},B=j=>{if(!x){if(d.mode==="stamp"&&p==="chimera"){const nt=L(j);if(!nt){S.visible=!1;return}S.visible=!0,S.position.set(nt.point.x,nt.point.y,nt.point.z);return}S.visible=!1,!(!y||d.mode!=="brush")&&D(j)}},G=()=>{y&&d.mode==="brush"&&Lr(l,s,h,o,a),y=!1};R.addEventListener("pointerdown",N),window.addEventListener("pointermove",B),window.addEventListener("pointerup",G),t.querySelector("#save").addEventListener("click",()=>{Rd(s)}),t.querySelector("#load").addEventListener("click",()=>{s=Cd()??s,U(),Lr(l,s,h,o,a)}),t.querySelector("#reset").addEventListener("click",()=>{x||(s=Pd(),U(),Lr(l,s,h,o,a))});let V=.85,it=.62,at=58,lt=!1,yt=0,kt=0;R.addEventListener("contextmenu",j=>j.preventDefault()),R.addEventListener("pointerdown",j=>{x||(j.button===2||j.shiftKey)&&(lt=!0,yt=j.clientX,kt=j.clientY)}),window.addEventListener("pointermove",j=>{lt&&(V-=(j.clientX-yt)*.007,it=Math.min(1.35,Math.max(.2,it+(j.clientY-kt)*.007)),yt=j.clientX,kt=j.clientY)}),window.addEventListener("pointerup",()=>{lt=!1}),R.addEventListener("wheel",j=>{x||(at=Math.min(80,Math.max(16,at+j.deltaY*.02)))});const Z=j=>{let nt=-1e9,Mt=0,Lt=0;for(let ee=0;ee<j.res;ee+=1)for(let zt=0;zt<j.res;zt+=1){const le=j.heights[ee*j.res+zt]??0;le>nt&&(nt=le,Mt=(zt/(j.res-1)-.5)*j.size,Lt=(ee/(j.res-1)-.5)*j.size)}return{x:Mt,z:Lt,y:nt}},K=()=>{var nt,Mt;x=!1,E==null||E(),E=null,b&&(i.scene.remove(b.rig),b=null),d.el.classList.remove("hidden"),f.el.classList.remove("hidden"),_.classList.add("hidden"),(nt=t.querySelector("#load"))==null||nt.classList.remove("hidden"),(Mt=t.querySelector("#reset"))==null||Mt.classList.remove("hidden");const j=t.querySelector("#play");j.textContent="進入島嶼"},gt=()=>{var Mt,Lt;Rd(s),x=!0,S.visible=!1,d.el.classList.add("hidden"),f.el.classList.add("hidden"),_.classList.remove("hidden"),(Mt=t.querySelector("#load"))==null||Mt.classList.add("hidden"),(Lt=t.querySelector("#reset"))==null||Lt.classList.add("hidden");const j=t.querySelector("#play");j.textContent="返回編輯";const nt=Z(s);b=new $f(i.camera,o,a,{minX:-s.size/2+3,maxX:s.size/2-3,minZ:-s.size/2+3,maxZ:s.size/2-3,startYaw:Math.PI}),b.rig.position.set(nt.x,xa(a,nt.x,nt.z,nt.y),nt.z),i.scene.add(b.rig),E=b.bind(R,_.querySelector(".joystick"))};return t.querySelector("#play").addEventListener("click",()=>{x?K():gt()}),i.setFrame((j,nt)=>{if(r.update(nt,i.camera.position.x,i.camera.position.z),Lf(c,nt,i.camera.position.x,i.camera.position.y,i.camera.position.z),_a(l,nt,(Mt,Lt)=>xa(a,Mt,Lt,o(Mt,Lt))),x&&b){b.update(j);return}i.camera.position.set(Math.cos(V)*Math.sin(it)*at,Math.cos(it)*at,Math.sin(V)*Math.sin(it)*at),i.camera.lookAt(0,3.5,0)}),()=>{R.removeEventListener("pointerdown",N),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",G),E==null||E(),i.scene.clear(),t.innerHTML=""}}function ow(i,t,e){const n=(t+i.size/2)/i.size,s=(e+i.size/2)/i.size,r=n*(i.res-1),o=s*(i.res-1),a=Math.max(0,Math.min(i.res-2,Math.floor(r))),c=Math.max(0,Math.min(i.res-2,Math.floor(o))),u=r-a,l=o-c,h=i.heights[c*i.res+a]??0,d=i.heights[c*i.res+a+1]??0,f=i.heights[(c+1)*i.res+a]??0,g=i.heights[(c+1)*i.res+a+1]??0,_=h*(1-u)*(1-l)+d*u*(1-l)+f*(1-u)*l+g*u*l;return Math.max(nw-1.4,_)}function aw(i,t,e,n,s,r){for(let o=0;o<i.res;o+=1)for(let a=0;a<i.res;a+=1){const c=(a/(i.res-1)-.5)*i.size,u=(o/(i.res-1)-.5)*i.size,l=Math.hypot(c-t,u-e);if(l>s)continue;const h=1-l/s,d=o*i.res+a,f=i.heights[d]??0;if(n==="raise"&&(i.heights[d]=f+r*h),n==="lower"&&(i.heights[d]=f-r*h),n==="flatten"&&(i.heights[d]=f+(3.2-f)*.2*h),n==="smooth"){const g=((i.heights[d-1]??f)+(i.heights[d+1]??f)+(i.heights[d-i.res]??f)+(i.heights[d+i.res]??f))/4;i.heights[d]=f+(g-f)*.35*h}}}function Lr(i,t,e,n,s){i.clear();for(const r of t.placements){const o=xa(s,r.x,r.z,n(r.x,r.z));if(r.id==="zhuyu"){const u=nu();u.position.set(r.x,o-.02,r.z),u.rotation.y=r.rot,i.add(u);continue}if(r.id==="rock"){const u=new ce(Et(1.05,.7,.9),ht(tt.rock));u.position.set(r.x,o-.02,r.z),u.rotation.y=r.rot,i.add(u);continue}if(r.id==="shengsheng"||r.id==="baiyuan"||r.id==="lushu"||r.id==="jiweihu"||r.id==="chimera"){const u=ir(r.id,r.recipe);u.position.set(r.x,o-.02,r.z),u.userData.baseY=o-.02,u.userData.homeX=r.x,u.userData.homeZ=r.z,u.rotation.y=r.rot,i.add(u);continue}const a=sw(r.id);if(!a)continue;const c=e[a];c&&i.add(vl(c,r.x,o-.04,r.z,r.rot))}}function cw(i){const t=document.createElement("div");return t.className="hud",t.innerHTML=`
    <div class="hud-cluster">
      <button class="ghost" id="back">返回</button>
      <button class="ghost" id="save">儲存島嶼</button>
      <button class="ghost" id="play">進入島嶼</button>
      <button class="ghost" id="help">說明</button>
      <button class="ghost" id="load">讀取</button>
      <button class="ghost" id="reset">重設</button>
    </div>
  `,t.querySelector("#back").addEventListener("click",i),t}function lw(){const i=document.createElement("div");i.className="toolbar";const t=["raise","lower","smooth","flatten"],e={raise:"堆高",lower:"挖低",smooth:"抹平",flatten:"整地"},n={mode:"brush",cb:s=>{}};return i.innerHTML=t.map((s,r)=>`<button data-b="${s}" class="${r===0?"active":""}">${e[s]}</button>`).join("")+'<button data-mode="stamp">放置</button>',i.addEventListener("click",s=>{const r=s.target;r.dataset.b&&(n.mode="brush",i.querySelectorAll("button").forEach(o=>o.classList.remove("active")),r.classList.add("active"),n.cb(r.dataset.b)),r.dataset.mode==="stamp"&&(n.mode="stamp",i.querySelectorAll("button").forEach(o=>o.classList.remove("active")),r.classList.add("active"))}),{el:i,get mode(){return n.mode},onChange(s){n.cb=s}}}function uw(){const i=document.createElement("div");i.className="palette";const t=Ql.map(a=>({id:a==="yan"?"yanmu":a,name:Jl[a].name})),e=[{id:"zhuyu",name:"祝餘"},{id:"rock",name:"石"},{id:"shengsheng",name:"狌狌"},{id:"baiyuan",name:"白猿"},{id:"lushu",name:"鹿蜀"},{id:"jiweihu",name:"九尾狐"},{id:"chimera",name:"異獸"}],n=(a,c)=>`<button data-s="${a.id}" class="${c?"active":""}">${a.name}</button>`,s=(a,c,u)=>`<label class="chimera-field">${a}<select data-field="${a}">${c.map(l=>`<option value="${l.id}" ${l.id===u?"selected":""}>${l.name}</option>`).join("")}</select></label>`;i.innerHTML='<div class="palette-label">常木</div>'+t.map((a,c)=>n(a,c===0)).join("")+'<div class="palette-label">異木</div><button type="button" disabled title="未至其經，需專用模型">建木 · 未至</button><button type="button" disabled title="未至其經，需專用模型">扶桑 · 未至</button><div class="palette-label">草 · 石 · 獸</div>'+e.map(a=>n(a,!1)).join("")+`<div class="chimera-strip"><div class="palette-label">異獸組件</div>${s("首",i1,Os.head)}${s("身",s1,Os.body)}${s("尾",r1,Os.tail)}${s("肢",o1,Os.limbs)}<label class="chimera-field"><input type="checkbox" data-field="翼" /> 羽翼</label></div>`;let r=()=>{};const o=()=>{const a=u=>i.querySelector(`select[data-field="${u}"]`).value,c=i.querySelector('input[data-field="翼"]').checked?"feather":"none";return{head:a("首"),body:a("身"),tail:a("尾"),limbs:a("肢"),wings:c,scale:1.15}};return i.addEventListener("click",a=>{const c=a.target;c.dataset.s&&(i.querySelectorAll("button").forEach(u=>u.classList.remove("active")),c.classList.add("active"),r(c.dataset.s,c.dataset.s==="chimera"?o():void 0))}),i.addEventListener("change",()=>{var u;const a=o(),c=(u=i.querySelector("button.active"))==null?void 0:u.dataset.s;r(c??"gui",a)}),{el:i,onChange(a){r=a}}}function hw(){const i=document.querySelector("#app"),t=document.createElement("canvas");t.className="game";const e=document.createElement("div");e.className="overlay",i.append(t,e);const n=new Nv;Uv(n),Bb();let s=null,r=null;const o=()=>{r==null||r(),r=null,s==null||s.dispose(),s=null,Fv(e,async c=>{n.start(),$l();const u=tr();c==="explore"?await a("zhaoyao"):(s=new Bh(t,u),s.start(),r=await rw(s,e,u,o))})},a=async c=>{r==null||r(),r=null,s==null||s.dispose();const u=tr();s=new Bh(t,u),s.start(),r=await Yb(s,e,u,o,{mountainId:c})};o()}hw();
