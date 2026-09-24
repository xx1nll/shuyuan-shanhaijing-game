var Nf=Object.defineProperty;var Ff=(i,t,e)=>t in i?Nf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var de=(i,t,e)=>Ff(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Br="170",Bf=0,hu=1,zf=2,_d=1,xd=2,Yn=3,zn=0,Ye=1,un=2,Ti=0,Us=1,du=2,fu=3,pu=4,Of=5,ji=100,kf=101,Hf=102,Vf=103,Gf=104,Wf=200,Xf=201,qf=202,Yf=203,Sc=204,bc=205,Zf=206,jf=207,$f=208,Kf=209,Jf=210,Qf=211,tp=212,ep=213,np=214,Ec=0,wc=1,Tc=2,Os=3,Ac=4,Cc=5,Rc=6,Pc=7,Cl=0,ip=1,sp=2,Ai=0,rp=1,op=2,ap=3,Rl=4,cp=5,lp=6,up=7,vd=300,ks=301,Hs=302,Lc=303,Ic=304,ma=306,Dc=1e3,Si=1001,Uc=1002,dn=1003,hp=1004,qr=1005,xn=1006,Ta=1007,Ji=1008,In=1009,yd=1010,Md=1011,Dr=1012,Pl=1013,Ri=1014,vn=1015,zr=1016,Ll=1017,Il=1018,Vs=1020,Sd=35902,bd=1021,Ed=1022,Xe=1023,wd=1024,Td=1025,Ns=1026,Gs=1027,Dl=1028,ga=1029,Ad=1030,Ul=1031,Nl=1033,Zo=33776,jo=33777,$o=33778,Ko=33779,Nc=35840,Fc=35841,Bc=35842,zc=35843,Oc=36196,kc=37492,Hc=37496,Vc=37808,Gc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,Zc=37814,jc=37815,$c=37816,Kc=37817,Jc=37818,Qc=37819,tl=37820,el=37821,Jo=36492,nl=36494,il=36495,Cd=36283,sl=36284,rl=36285,ol=36286,dp=3200,fp=3201,Fl=0,pp=1,xi="",sn="srgb",Ys="srgb-linear",_a="linear",ie="srgb",is=7680,mu=519,mp=512,gp=513,_p=514,Rd=515,xp=516,vp=517,yp=518,Mp=519,gu=35044,_u="300 es",ei=2e3,ra=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const Tr=Math.PI/180,Ur=180/Math.PI;function js(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Bl(i,t){return(i%t+t)%t}function Sp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bp(i,t,e){return i!==t?(e-i)/(t-i):0}function Ar(i,t,e){return(1-e)*i+e*t}function Ep(i,t,e,n){return Ar(i,t,1-Math.exp(-e*n))}function wp(i,t=1){return t-Math.abs(Bl(i,t*2)-t)}function Tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rp(i,t){return i+Math.random()*(t-i)}function Pp(i){return i*(.5-Math.random())}function Lp(i){i!==void 0&&(xu=i);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ip(i){return i*Tr}function Dp(i){return i*Ur}function Up(i){return(i&i-1)===0&&i!==0}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vu={DEG2RAD:Tr,RAD2DEG:Ur,generateUUID:js,clamp:Oe,euclideanModulo:Bl,mapLinear:Sp,inverseLerp:bp,lerp:Ar,damp:Ep,pingpong:wp,smoothstep:Tp,smootherstep:Ap,randInt:Cp,randFloat:Rp,randFloatSpread:Pp,seededRandom:Lp,degToRad:Ip,radToDeg:Dp,isPowerOfTwo:Up,ceilPowerOfTwo:Np,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Bp,normalize:Ve,denormalize:Rs};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],b=s[2],w=s[5],E=s[8];return r[0]=o*x+a*v+c*b,r[3]=o*m+a*y+c*w,r[6]=o*p+a*_+c*E,r[1]=l*x+u*v+d*b,r[4]=l*m+u*y+d*w,r[7]=l*p+u*_+d*E,r[2]=h*x+f*v+g*b,r[5]=h*m+f*y+g*w,r[8]=h*p+f*_+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Ot;function Pd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zp(){const i=oa("canvas");return i.style.display="block",i}const yu={};function Er(i){i in yu||(yu[i]=!0,console.warn(i))}function Op(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?_a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Mu=[.64,.33,.3,.6,.15,.06],Su=[.2126,.7152,.0722],bu=[.3127,.329],Eu=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ys]:{primaries:Mu,whitePoint:bu,transfer:_a,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:Su,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:Mu,whitePoint:bu,transfer:ie,toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:Su,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let ss;class Vp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=oa("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gp=0;class Ld{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wp=0;class Ze extends Zs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Si,s=Si,r=xn,o=Ji,a=Xe,c=In,l=Ze.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=js(),this.name="",this.source=new Ld(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dc:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dc:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=vd;Ze.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(f+1)/2,b=(p+1)/2,w=(u+h)/4,E=(d+x)/4,A=(g+m)/4;return y>_&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=E/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=A/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=E/r,s=A/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xp extends Zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ld(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Xp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Id extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qp extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),w=Math.atan2(b,p*v);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}const _=a*v;if(c=c*m+h*_,l=l*m+f*_,u=u*m+g*_,d=d*m+x*_,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new D,Tu=new $s;class _e{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Zr.subVectors(this.max,ir),rs.subVectors(t.a,ir),os.subVectors(t.b,ir),as.subVectors(t.c,ir),li.subVectors(os,rs),ui.subVectors(as,os),Fi.subVectors(rs,as);let e=[0,-li.z,li.y,0,-ui.z,ui.y,0,-Fi.z,Fi.y,li.z,0,-li.x,ui.z,0,-ui.x,Fi.z,0,-Fi.x,-li.y,li.x,0,-ui.y,ui.x,0,-Fi.y,Fi.x,0];return!Pa(e,rs,os,as,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,rs,os,as,Zr))?!1:(jr.crossVectors(li,ui),e=[jr.x,jr.y,jr.z],Pa(e,rs,os,as,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],Tn=new D,Yr=new _e,rs=new D,os=new D,as=new D,li=new D,ui=new D,Fi=new D,ir=new D,Zr=new D,jr=new D,Bi=new D;function Pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),c=t.dot(Bi),l=e.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Yp=new _e,sr=new D,La=new D;class Mn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(La)),this.expandByPoint(sr.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new D,Ia=new D,$r=new D,hi=new D,Da=new D,Kr=new D,Ua=new D;class Or{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ia.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Ia);const r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=hi.dot(this.direction),c=-hi.dot($r),l=hi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ia).addScaledVector($r,h),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){Da.subVectors(e,t),Kr.subVectors(n,t),Ua.crossVectors(Da,Kr);let o=this.direction.dot(Ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const c=a*this.direction.dot(Kr.crossVectors(hi,Kr));if(c<0)return null;const l=a*this.direction.dot(Da.cross(hi));if(l<0||c+l>o)return null;const u=-a*hi.dot(Ua);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,jp)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),di.crossVectors(n,an),di.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),di.crossVectors(n,an)),di.normalize(),Jr.crossVectors(an,di),s[0]=di.x,s[4]=Jr.x,s[8]=an.x,s[1]=di.y,s[5]=Jr.y,s[9]=an.y,s[2]=di.z,s[6]=Jr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],b=n[15],w=s[0],E=s[4],A=s[8],S=s[12],M=s[1],R=s[5],I=s[9],P=s[13],U=s[2],F=s[6],k=s[10],q=s[14],V=s[3],it=s[7],rt=s[11],pt=s[15];return r[0]=o*w+a*M+c*U+l*V,r[4]=o*E+a*R+c*F+l*it,r[8]=o*A+a*I+c*k+l*rt,r[12]=o*S+a*P+c*q+l*pt,r[1]=u*w+d*M+h*U+f*V,r[5]=u*E+d*R+h*F+f*it,r[9]=u*A+d*I+h*k+f*rt,r[13]=u*S+d*P+h*q+f*pt,r[2]=g*w+x*M+m*U+p*V,r[6]=g*E+x*R+m*F+p*it,r[10]=g*A+x*I+m*k+p*rt,r[14]=g*S+x*P+m*q+p*pt,r[3]=v*w+y*M+_*U+b*V,r[7]=v*E+y*R+_*F+b*it,r[11]=v*A+y*I+_*k+b*rt,r[15]=v*S+y*P+_*q+b*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*f-n*c*f)+x*(+e*c*f-e*l*h+r*o*h-s*o*f+s*l*u-r*c*u)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*d+e*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=d*m*l-x*h*l+x*c*f-a*m*f-d*c*p+a*h*p,y=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,_=u*x*l-g*d*l+g*a*f-o*x*f-u*a*p+o*d*p,b=g*d*c-u*x*c-g*a*h+o*x*h+u*a*m-o*d*m,w=e*v+n*y+s*_+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=v*E,t[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*p-n*h*p)*E,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*f-n*c*f)*E,t[4]=y*E,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*f+e*c*f)*E,t[8]=_*E,t[9]=(g*d*r-u*x*r-g*n*f+e*x*f+u*n*p-e*d*p)*E,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*f-e*a*f)*E,t[12]=b*E,t[13]=(u*x*s-g*d*s+g*n*h-e*x*h-u*n*m+e*d*m)*E,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*E,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*h+e*a*h)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,x=o*u,m=o*d,p=a*d,v=c*l,y=c*u,_=c*d,b=n.x,w=n.y,E=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+_)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(h+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*E,s[9]=(m-v)*E,s[10]=(1-(h+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const l=1/r,u=1/o,d=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ei){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let f,g;if(a===ei)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ra)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),h=(e+t)*l,f=(n+s)*u;let g,x;if(a===ei)g=(o+r)*d,x=-2*d;else if(a===ra)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new D,An=new Wt,Zp=new D(0,0,0),jp=new D(1,1,1),di=new D,Jr=new D,an=new D,Au=new Wt,Cu=new $s;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $p=0;const Ru=new D,ls=new $s,Gn=new Wt,Qr=new D,rr=new D,Kp=new D,Jp=new $s,Pu=new D(1,0,0),Lu=new D(0,1,0),Iu=new D(0,0,1),Du={type:"added"},Qp={type:"removed"},us={type:"childadded",child:null},Na={type:"childremoved",child:null};class fe extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new D,e=new Dn,n=new $s,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Ot}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Lu,t)}rotateZ(t){return this.rotateOnAxis(Iu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Lu,t)}translateZ(t){return this.translateOnAxis(Iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(rr,Qr,this.up):Gn.lookAt(Qr,rr,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Gn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qp),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new D(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new D,Wn=new D,Fa=new D,Xn=new D,hs=new D,ds=new D,Uu=new D,Ba=new D,za=new D,Oa=new D,ka=new ge,Ha=new ge,Va=new ge;class De{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Wn.subVectors(n,e),Fa.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(Wn),c=Cn.dot(Fa),l=Wn.dot(Wn),u=Wn.dot(Fa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ka.setScalar(0),Ha.setScalar(0),Va.setScalar(0),ka.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Va.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(Ha,r.y),o.addScaledVector(Va,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Wn.subVectors(t,e),Cn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Cn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return De.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return De.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return De.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return De.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return De.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;hs.subVectors(s,n),ds.subVectors(r,n),Ba.subVectors(t,n);const c=hs.dot(Ba),l=ds.dot(Ba);if(c<=0&&l<=0)return e.copy(n);za.subVectors(t,s);const u=hs.dot(za),d=ds.dot(za);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(hs,o);Oa.subVectors(t,r);const f=hs.dot(Oa),g=ds.dot(Oa);if(g>=0&&f<=g)return e.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ds,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Uu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Uu,a);const p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(hs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Bl(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ga(o,r,t+1/3),this.g=Ga(o,r,t),this.b=Ga(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=Dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Zt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Oe(Be.r*255,0,255))*65536+Math.round(Oe(Be.g*255,0,255))*256+Math.round(Oe(Be.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=sn){Zt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(to);const n=Ar(fi.h,to.h,e),s=Ar(fi.s,to.s,e),r=Ar(fi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new wt;wt.NAMES=Dd;let tm=0;class Ui extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=js(),this.name="",this.blending=Us,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=bc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ud extends Ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new D,eo=new Lt;class xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gu,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gu&&(t.usage=this.usage),t}}class Nd extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fd extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class je extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let em=0;const mn=new Wt,Wa=new fe,fs=new D,cn=new _e,or=new _e,Re=new D;class be extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pd(t)?Fd:Nd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _e);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(cn.min,or.min),cn.expandByPoint(Re),Re.addVectors(cn.max,or.max),cn.expandByPoint(Re)):(cn.expandByPoint(or.min),cn.expandByPoint(or.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Re.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(t,l),Re.add(fs)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new D,c[A]=new D;const l=new D,u=new D,d=new D,h=new Lt,f=new Lt,g=new Lt,x=new D,m=new D;function p(A,S,M){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[A].add(x),a[S].add(x),a[M].add(x),c[A].add(m),c[S].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,S=v.length;A<S;++A){const M=v[A],R=M.start,I=M.count;for(let P=R,U=R+I;P<U;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new D,_=new D,b=new D,w=new D;function E(A){b.fromBufferAttribute(s,A),w.copy(b);const S=a[A];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(w,S);const R=_.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,R)}for(let A=0,S=v.length;A<S;++A){const M=v[A],R=M.start,I=M.count;for(let P=R,U=R+I;P<U;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new xe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new Wt,zi=new Or,no=new Mn,Fu=new D,io=new D,so=new D,ro=new D,Xa=new D,oo=new D,Bu=new D,ao=new D;class ue extends fe{constructor(t=new be,e=new Ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Xa.fromBufferAttribute(d,t),o?oo.addScaledVector(Xa,u):oo.addScaledVector(Xa.sub(e),u))}e.add(oo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(no.containsPoint(zi.origin)===!1&&(zi.intersectSphere(no,Fu)===null||zi.origin.distanceToSquared(Fu)>(t.far-t.near)**2))&&(Nu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,b=y;_<b;_+=3){const w=a.getX(_),E=a.getX(_+1),A=a.getX(_+2);s=co(this,p,t,n,l,u,d,w,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=co(this,o,t,n,l,u,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,b=y;_<b;_+=3){const w=_,E=_+1,A=_+2;s=co(this,p,t,n,l,u,d,w,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,y=m+1,_=m+2;s=co(this,o,t,n,l,u,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function nm(i,t,e,n,s,r,o,a){let c;if(t.side===Ye?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===zn,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:i}}function co(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(l,ro);const u=nm(i,t,e,n,io,so,ro,Bu);if(u){const d=new D;De.getBarycoord(Bu,io,so,ro,d),s&&(u.uv=De.getInterpolatedAttribute(s,a,c,l,d,new Lt)),r&&(u.uv1=De.getInterpolatedAttribute(r,a,c,l,d,new Lt)),o&&(u.normal=De.getInterpolatedAttribute(o,a,c,l,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};De.getNormal(io,so,ro,h.normal),u.face=h,u.barycoord=d}return u}class Pi extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function g(x,m,p,v,y,_,b,w,E,A,S){const M=_/E,R=b/A,I=_/2,P=b/2,U=w/2,F=E+1,k=A+1;let q=0,V=0;const it=new D;for(let rt=0;rt<k;rt++){const pt=rt*R-P;for(let It=0;It<F;It++){const Gt=It*M-I;it[x]=Gt*v,it[m]=pt*y,it[p]=U,l.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[p]=w>0?1:-1,u.push(it.x,it.y,it.z),d.push(It/E),d.push(1-rt/A),q+=1}}for(let rt=0;rt<A;rt++)for(let pt=0;pt<E;pt++){const It=h+pt+F*rt,Gt=h+pt+F*(rt+1),Z=h+(pt+1)+F*(rt+1),et=h+(pt+1)+F*rt;c.push(It,Gt,et),c.push(Gt,Z,et),V+=6}a.addGroup(f,V,S),f+=V,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Ws(i[e]);for(const s in n)t[s]=n[s]}return t}function im(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const sm={clone:Ws,merge:Ge};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zd extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new D,zu=new Lt,Ou=new Lt;class ln extends zd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,zu,Ou),e.subVectors(Ou,zu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class am extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new ln(ps,ms,t,e);r.layers=this.layers,this.add(r);const o=new ln(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new ln(ps,ms,t,e);a.layers=this.layers,this.add(a);const c=new ln(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new ln(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Od extends Ze{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cm extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Od(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Ti});r.uniforms.tEquirect.value=e;const o=new ue(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=xn),new am(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const qa=new D,lm=new D,um=new Ot;class jn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qa.subVectors(n,e).cross(lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||um.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Mn,lo=new D;class xa{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,h-l,m-f,_-p).normalize(),n[1].setComponents(c+r,h+l,m+f,_+p).normalize(),n[2].setComponents(c+o,h+u,m+g,_+v).normalize(),n[3].setComponents(c-o,h-u,m-g,_-v).normalize(),n[4].setComponents(c-a,h-d,m-x,_-y).normalize(),e===ei)n[5].setComponents(c+a,h+d,m+x,_+y).normalize();else if(e===ra)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class kr extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let y=0;y<l;y++){const _=y*d-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,_=v+l*(p+1),b=v+1+l*(p+1),w=v+1+l*p;f.push(y,_,w),f.push(_,b,w)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
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
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,ug=`struct PhysicalMaterial {
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
}`,hg=`
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,x0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,y0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#define LAMBERT
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
}`,C0=`#define LAMBERT
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
}`,R0=`#define MATCAP
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
}`,P0=`#define MATCAP
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
}`,L0=`#define NORMAL
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
}`,I0=`#define NORMAL
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
}`,D0=`#define PHONG
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
}`,U0=`#define PHONG
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
}`,N0=`#define STANDARD
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
}`,F0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,z0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,V0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,W0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:xm,aomap_pars_fragment:vm,batching_pars_vertex:ym,batching_vertex:Mm,begin_vertex:Sm,beginnormal_vertex:bm,bsdfs:Em,iridescence_fragment:wm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Pm,color_fragment:Lm,color_pars_fragment:Im,color_pars_vertex:Dm,color_vertex:Um,common:Nm,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:Om,emissivemap_fragment:km,emissivemap_pars_fragment:Hm,colorspace_fragment:Vm,colorspace_pars_fragment:Gm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:qm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:sg,envmap_vertex:Zm,fog_vertex:jm,fog_pars_vertex:$m,fog_fragment:Km,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:tg,lights_lambert_fragment:eg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:og,lights_phong_fragment:ag,lights_phong_pars_fragment:cg,lights_physical_fragment:lg,lights_physical_pars_fragment:ug,lights_fragment_begin:hg,lights_fragment_maps:dg,lights_fragment_end:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:xg,map_pars_fragment:vg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:bg,morphinstance_vertex:Eg,morphcolor_vertex:wg,morphnormal_vertex:Tg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Cg,normal_fragment_begin:Rg,normal_fragment_maps:Pg,normal_pars_fragment:Lg,normal_pars_vertex:Ig,normal_vertex:Dg,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:Og,packing:kg,premultiplied_alpha_fragment:Hg,project_vertex:Vg,dithering_fragment:Gg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Zg,shadowmap_vertex:jg,shadowmask_pars_fragment:$g,skinbase_vertex:Kg,skinning_pars_vertex:Jg,skinning_vertex:Qg,skinnormal_vertex:t0,specularmap_fragment:e0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:o0,uv_pars_fragment:a0,uv_pars_vertex:c0,uv_vertex:l0,worldpos_vertex:u0,background_vert:h0,background_frag:d0,backgroundCube_vert:f0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:_0,depth_frag:x0,distanceRGBA_vert:v0,distanceRGBA_frag:y0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:b0,linedashed_frag:E0,meshbasic_vert:w0,meshbasic_frag:T0,meshlambert_vert:A0,meshlambert_frag:C0,meshmatcap_vert:R0,meshmatcap_frag:P0,meshnormal_vert:L0,meshnormal_frag:I0,meshphong_vert:D0,meshphong_frag:U0,meshphysical_vert:N0,meshphysical_frag:F0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:O0,points_frag:k0,shadow_vert:H0,shadow_frag:V0,sprite_vert:G0,sprite_frag:W0},ot={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Bn={basic:{uniforms:Ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new wt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ge([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ge([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ge([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ge([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ge([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ge([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ge([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ge([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ge([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ge([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ge([ot.lights,ot.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Bn.physical={uniforms:Ge([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const uo={r:0,b:0,g:0},ki=new Dn,X0=new Wt;function q0(i,t,e,n,s,r,o){const a=new wt(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const _=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===ma)?(u===void 0&&(u=new ue(new Pi(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Ws(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(y.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ki)),u.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ie,(d!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ue(new kr(2,2),new ii({name:"BackgroundMaterial",uniforms:Ws(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(uo,Bd(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function Y0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,R,I,P,U){let F=!1;const k=d(P,I,R);r!==k&&(r=k,l(r.object)),F=f(M,P,I,U),F&&g(M,P,I,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(M,R,I,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,R,I){const P=I.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let F=U[R.id];F===void 0&&(F={},U[R.id]=F);let k=F[P];return k===void 0&&(k=h(c()),F[P]=k),k}function h(M){const R=[],I=[],P=[];for(let U=0;U<e;U++)R[U]=0,I[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,R,I,P){const U=r.attributes,F=R.attributes;let k=0;const q=I.getAttributes();for(const V in q)if(q[V].location>=0){const rt=U[V];let pt=F[V];if(pt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function g(M,R,I,P){const U={},F=R.attributes;let k=0;const q=I.getAttributes();for(const V in q)if(q[V].location>=0){let rt=F[V];rt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),U[V]=pt,k++}r.attributes=U,r.attributesNum=k,r.index=P}function x(){const M=r.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const I=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;I[M]=1,P[M]===0&&(i.enableVertexAttribArray(M),P[M]=1),U[M]!==R&&(i.vertexAttribDivisor(M,R),U[M]=R)}function v(){const M=r.newAttributes,R=r.enabledAttributes;for(let I=0,P=R.length;I<P;I++)R[I]!==M[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function y(M,R,I,P,U,F,k){k===!0?i.vertexAttribIPointer(M,R,I,U,F):i.vertexAttribPointer(M,R,I,P,U,F)}function _(M,R,I,P){x();const U=P.attributes,F=I.getAttributes(),k=R.defaultAttributeValues;for(const q in F){const V=F[q];if(V.location>=0){let it=U[q];if(it===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const rt=it.normalized,pt=it.itemSize,It=t.get(it);if(It===void 0)continue;const Gt=It.buffer,Z=It.type,et=It.bytesPerElement,dt=Z===i.INT||Z===i.UNSIGNED_INT||it.gpuType===Pl;if(it.isInterleavedBufferAttribute){const X=it.data,tt=X.stride,xt=it.offset;if(X.isInstancedInterleavedBuffer){for(let At=0;At<V.locationSize;At++)p(V.location+At,X.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let At=0;At<V.locationSize;At++)m(V.location+At);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let At=0;At<V.locationSize;At++)y(V.location+At,pt/V.locationSize,Z,rt,tt*et,(xt+pt/V.locationSize*At)*et,dt)}else{if(it.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)p(V.location+X,it.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let X=0;X<V.locationSize;X++)m(V.location+X);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let X=0;X<V.locationSize;X++)y(V.location+X,pt/V.locationSize,Z,rt,pt*et,pt/V.locationSize*X*et,dt)}}else if(k!==void 0){const rt=k[q];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(V.location,rt);break;case 3:i.vertexAttrib3fv(V.location,rt);break;case 4:i.vertexAttrib4fv(V.location,rt);break;default:i.vertexAttrib1fv(V.location,rt)}}}}v()}function b(){A();for(const M in n){const R=n[M];for(const I in R){const P=R[I];for(const U in P)u(P[U].object),delete P[U];delete R[I]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const I in R){const P=R[I];for(const U in P)u(P[U].object),delete P[U];delete R[I]}delete n[M.id]}function E(M){for(const R in n){const I=n[R];if(I[M.id]===void 0)continue;const P=I[M.id];for(const U in P)u(P[U].object),delete P[U];delete I[M.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Z0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function j0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Xe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==In&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vn&&!A)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:b,maxSamples:w}}function $0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new jn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;c.value=_,_=u(g,h,y,f);for(let b=0;b!==y;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function K0(i){let t=new WeakMap;function e(o,a){return a===Lc?o.mapping=ks:a===Ic&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hd extends zd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ls=4,ku=[.125,.215,.35,.446,.526,.582],$i=20,Ya=new Hd,Hu=new wt;let Za=null,ja=0,$a=0,Ka=!1;const Zi=(1+Math.sqrt(5))/2,gs=1/Zi,Vu=[new D(-Zi,gs,0),new D(Zi,gs,0),new D(-gs,0,Zi),new D(gs,0,Zi),new D(0,Zi,-gs),new D(0,Zi,gs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Gu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Za=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,ja,$a),this._renderer.xr.enabled=Ka,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:zr,format:Xe,colorSpace:Ys,depthBuffer:!1},s=Wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J0(r)),this._blurMaterial=Q0(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s){const a=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Hu),u.toneMapping=Ai,u.autoClear=!1;const f=new Ud({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new ue(new Pi,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Hu),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;ho(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ks||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ho(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vu[(s-r-1)%Vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ue(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let v=0;for(let E=0;E<$i;++E){const A=E/x,S=Math.exp(-A*A/2);p.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const _=this._sizeLods[s],b=3*_*(s>y-Ls?s-y+Ls:0),w=4*(this._cubeSize-_);ho(e,b,w,3*_,2*_),c.setRenderTarget(e),c.render(d,Ya)}}function J0(i){const t=[],e=[],n=[];let s=i;const r=i-Ls+1+ku.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ls?c=ku[o-i+Ls-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,A=w>2?0:-1,S=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(S,x*g*w),y.set(h,m*g*w);const M=[w,w,w,w,w,w];_.set(M,p*g*w)}const b=new be;b.setAttribute("position",new xe(v,x)),b.setAttribute("uv",new xe(y,m)),b.setAttribute("faceIndex",new xe(_,p)),t.push(b),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wu(i,t,e){const n=new Qi(i,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Q0(i,t,e){const n=new Float32Array($i),s=new D(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Xu(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function qu(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function t_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Lc||c===Ic,u=c===ks||c===Hs;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Gu(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Gu(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n_(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){const b=v[y+0],w=v[y+1],E=v[y+2];h.push(b,w,w,E,E,b)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const b=y+0,w=y+1,E=y+2;h.push(b,w,w,E,E,b)}}else return;const m=new(Pd(h)?Fd:Nd)(h,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function i_(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function s_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function r_(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let b=a.attributes.position.count*_,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const E=new Float32Array(b*w*4*d),A=new Id(E,b,w,d);A.type=vn,A.needsUpdate=!0;const S=_*4;for(let R=0;R<d;R++){const I=p[R],P=v[R],U=y[R],F=b*w*4*R;for(let k=0;k<I.count;k++){const q=k*S;g===!0&&(s.fromBufferAttribute(I,k),E[F+q+0]=s.x,E[F+q+1]=s.y,E[F+q+2]=s.z,E[F+q+3]=0),x===!0&&(s.fromBufferAttribute(P,k),E[F+q+4]=s.x,E[F+q+5]=s.y,E[F+q+6]=s.z,E[F+q+7]=0),m===!0&&(s.fromBufferAttribute(U,k),E[F+q+8]=s.x,E[F+q+9]=s.y,E[F+q+10]=s.z,E[F+q+11]=U.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new Lt(b,w)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function o_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Vd extends Ze{constructor(t,e,n,s,r,o,a,c,l,u=Ns){if(u!==Ns&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ns&&(n=Ri),n===void 0&&u===Gs&&(n=Vs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gd=new Ze,Yu=new Vd(1,1),Wd=new Id,Xd=new qp,qd=new Od,Zu=[],ju=[],$u=new Float32Array(16),Ku=new Float32Array(9),Ju=new Float32Array(4);function Ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=ju[t];e===void 0&&(e=new Int32Array(t),ju[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function c_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function l_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function h_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Ce(e,n)}}function d_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Ku.set(n),i.uniformMatrix3fv(this.addr,!1,Ku),Ce(e,n)}}function f_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),Ce(e,n)}}function p_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function g_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function __(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function x_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function v_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function M_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function S_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yu.compareFunction=Rd,r=Yu):r=Gd,e.setTexture2D(t||r,s)}function b_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xd,s)}function E_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qd,s)}function w_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wd,s)}function T_(i){switch(i){case 5126:return a_;case 35664:return c_;case 35665:return l_;case 35666:return u_;case 35674:return h_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return v_;case 36295:return y_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return w_}}function A_(i,t){i.uniform1fv(this.addr,t)}function C_(i,t){const e=Ks(t,this.size,2);i.uniform2fv(this.addr,e)}function R_(i,t){const e=Ks(t,this.size,3);i.uniform3fv(this.addr,e)}function P_(i,t){const e=Ks(t,this.size,4);i.uniform4fv(this.addr,e)}function L_(i,t){const e=Ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I_(i,t){const e=Ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function D_(i,t){const e=Ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U_(i,t){i.uniform1iv(this.addr,t)}function N_(i,t){i.uniform2iv(this.addr,t)}function F_(i,t){i.uniform3iv(this.addr,t)}function B_(i,t){i.uniform4iv(this.addr,t)}function z_(i,t){i.uniform1uiv(this.addr,t)}function O_(i,t){i.uniform2uiv(this.addr,t)}function k_(i,t){i.uniform3uiv(this.addr,t)}function H_(i,t){i.uniform4uiv(this.addr,t)}function V_(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Gd,r[o])}function G_(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xd,r[o])}function W_(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qd,r[o])}function X_(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wd,r[o])}function q_(i){switch(i){case 5126:return A_;case 35664:return C_;case 35665:return R_;case 35666:return P_;case 35674:return L_;case 35675:return I_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return O_;case 36295:return k_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T_(e.type)}}class Z_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q_(e.type)}}class j_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function Qu(i,t){i.seq.push(t),i.map[t.id]=t}function $_(i,t,e){const n=i.name,s=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),o=Ja.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qu(e,l===void 0?new Y_(a,i,t):new Z_(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new j_(a),Qu(e,d)),e=d}}}class Qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function th(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const K_=37297;let J_=0;function Q_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const eh=new Ot;function tx(i){Zt._getMatrix(eh,Zt.workingColorSpace,i);const t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case _a:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Q_(i.getShaderSource(t),o)}else return s}function ex(i,t){const e=tx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nx(i,t){let e;switch(t){case rp:e="Linear";break;case op:e="Reinhard";break;case ap:e="Cineon";break;case Rl:e="ACESFilmic";break;case lp:e="AgX";break;case up:e="Neutral";break;case cp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new D;function ix(){Zt.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function rx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ox(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function wr(i){return i!==""}function ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(ax,lx)}const cx=new Map;function lx(i,t){let e=Vt[t];if(e===void 0){const n=cx.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(ux,hx)}function hx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function dx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_d?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function fx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function px(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function mx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:t="ENVMAP_BLENDING_MULTIPLY";break;case ip:t="ENVMAP_BLENDING_MIX";break;case sp:t="ENVMAP_BLENDING_ADD";break}return t}function gx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _x(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=dx(e),l=fx(e),u=px(e),d=mx(e),h=gx(e),f=sx(e),g=rx(r),x=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=al(o),o=ih(o,e),o=sh(o,e),a=al(a),a=ih(a,e),a=sh(a,e),o=rh(o),a=rh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,_=v+p+a,b=th(s,s.VERTEX_SHADER,y),w=th(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(b).trim(),U=s.getShaderInfoLog(w).trim();let F=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,w);else{const q=nh(s,b,"vertex"),V=nh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+q+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(P===""||U==="")&&(k=!1);k&&(R.diagnostics={runnable:F,programLog:I,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(b),s.deleteShader(w),A=new Qo(s,x),S=ox(s,x)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,K_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}let xx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yx(t),e.set(t,n)),n}}class yx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function Mx(i,t,e,n,s,r,o){const a=new zl,c=new vx,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,I,P){const U=I.fog,F=P.geometry,k=S.isMeshStandardMaterial?I.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),V=q&&q.mapping===ma?q.image.height:null,it=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pt=rt!==void 0?rt.length:0;let It=0;F.morphAttributes.position!==void 0&&(It=1),F.morphAttributes.normal!==void 0&&(It=2),F.morphAttributes.color!==void 0&&(It=3);let Gt,Z,et,dt;if(it){const ee=Bn[it];Gt=ee.vertexShader,Z=ee.fragmentShader}else Gt=S.vertexShader,Z=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),dt=c.getFragmentShaderID(S);const X=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),xt=P.isInstancedMesh===!0,At=P.isBatchedMesh===!0,$t=!!S.map,Ut=!!S.matcap,se=!!q,O=!!S.aoMap,fn=!!S.lightMap,Xt=!!S.bumpMap,qt=!!S.normalMap,Rt=!!S.displacementMap,ae=!!S.emissiveMap,Ct=!!S.metalnessMap,L=!!S.roughnessMap,T=S.anisotropy>0,H=S.clearcoat>0,$=S.dispersion>0,Q=S.iridescence>0,j=S.sheen>0,St=S.transmission>0,ct=T&&!!S.anisotropyMap,ft=H&&!!S.clearcoatMap,jt=H&&!!S.clearcoatNormalMap,nt=H&&!!S.clearcoatRoughnessMap,mt=Q&&!!S.iridescenceMap,Pt=Q&&!!S.iridescenceThicknessMap,Dt=j&&!!S.sheenColorMap,gt=j&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,Ht=!!S.specularColorMap,re=!!S.specularIntensityMap,N=St&&!!S.transmissionMap,at=St&&!!S.thicknessMap,Y=!!S.gradientMap,K=!!S.alphaMap,ht=S.alphaTest>0,lt=!!S.alphaHash,Bt=!!S.extensions;let pe=Ai;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Ne={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:Z,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:At,batchingColor:At&&P._colorsTexture!==null,instancing:xt,instancingColor:xt&&P.instanceColor!==null,instancingMorph:xt&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ys,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:Ut,envMap:se,envMapMode:se&&q.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:fn,bumpMap:Xt,normalMap:qt,displacementMap:h&&Rt,emissiveMap:ae,normalMapObjectSpace:qt&&S.normalMapType===pp,normalMapTangentSpace:qt&&S.normalMapType===Fl,metalnessMap:Ct,roughnessMap:L,anisotropy:T,anisotropyMap:ct,clearcoat:H,clearcoatMap:ft,clearcoatNormalMap:jt,clearcoatRoughnessMap:nt,dispersion:$,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Pt,sheen:j,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:re,transmission:St,transmissionMap:N,thicknessMap:at,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Us&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:lt,combine:S.combine,mapUv:$t&&x(S.map.channel),aoMapUv:O&&x(S.aoMap.channel),lightMapUv:fn&&x(S.lightMap.channel),bumpMapUv:Xt&&x(S.bumpMap.channel),normalMapUv:qt&&x(S.normalMap.channel),displacementMapUv:Rt&&x(S.displacementMap.channel),emissiveMapUv:ae&&x(S.emissiveMap.channel),metalnessMapUv:Ct&&x(S.metalnessMap.channel),roughnessMapUv:L&&x(S.roughnessMap.channel),anisotropyMapUv:ct&&x(S.anisotropyMap.channel),clearcoatMapUv:ft&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(S.sheenRoughnessMap.channel),specularMapUv:Yt&&x(S.specularMap.channel),specularColorMapUv:Ht&&x(S.specularColorMap.channel),specularIntensityMapUv:re&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:at&&x(S.thicknessMap.channel),alphaMapUv:K&&x(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(qt||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&($t||K),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:tt,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ie,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Bt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&S.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let R;if(M){const I=Bn[M];R=sm.clone(I.uniforms)}else R=S.uniforms;return R}function b(S,M){let R;for(let I=0,P=u.length;I<P;I++){const U=u[I];if(U.cacheKey===M){R=U,++R.usedTimes;break}}return R===void 0&&(R=new _x(i,M,S,r),u.push(R)),R}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function E(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:A}}function Sx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function bx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||bx),n.length>1&&n.sort(h||ah),s.length>1&&s.sort(h||ah)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Ex(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ch,i.set(n,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function wx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new wt};break;case"SpotLight":e={position:new D,direction:new D,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ax=0;function Cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rx(i){const t=new wx,e=Tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new Wt,o=new Wt;function a(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,b=0,w=0,E=0;l.sort(Cx);for(let S=0,M=l.length;S<M;S++){const R=l[S],I=R.color,P=R.intensity,U=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*P,d+=I.g*P,h+=I.b*P;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],P);E++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const q=R.shadow,V=e.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=k,f++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(I).multiplyScalar(P),k.distance=U,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const q=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,q.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[x]=q.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=F,_++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(I).multiplyScalar(P),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const q=R.shadow,V=e.get(R);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(P),k.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==b||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=b,A.numLightProbes=E,n.version=Ax++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function lh(i){const t=new Rx(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Px(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new lh(i),t.set(s,[a])):r>=o.length?(a=new lh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lx extends Ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ix extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Nx(i,t,e){let n=new xa;const s=new Lt,r=new Lt,o=new ge,a=new Lx({depthPacking:fp}),c=new Ix,l={},u=e.maxTextureSize,d={[zn]:Ye,[Ye]:zn,[un]:un},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Dx,fragmentShader:Ux}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ue(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_d;let p=this.type;this.render=function(w,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ti),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const P=p!==Yn&&this.type===Yn,U=p===Yn&&this.type!==Yn;for(let F=0,k=w.length;F<k;F++){const q=w[F],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||P===!0||U===!0){const pt=this.type!==Yn?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new Qi(s.x,s.y,pt),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const rt=V.getViewportCount();for(let pt=0;pt<rt;pt++){const It=V.getViewport(pt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),I.viewport(o),V.updateMatrices(q,pt),n=V.getFrustum(),_(E,A,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Yn&&v(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function v(w,E){const A=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qi(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,A,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,A,f,x,null)}function y(w,E,A,S){let M=null;const R=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=A.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=M.uuid,P=E.uuid;let U=l[I];U===void 0&&(U={},l[I]=U);let F=U[P];F===void 0&&(F=M.clone(),U[P]=F,E.addEventListener("dispose",b)),M=F}if(M.visible=E.visible,M.wireframe=E.wireframe,S===Yn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=A}return M}function _(w,E,A,S,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const P=t.update(w),U=w.material;if(Array.isArray(U)){const F=P.groups;for(let k=0,q=F.length;k<q;k++){const V=F[k],it=U[V.materialIndex];if(it&&it.visible){const rt=y(w,it,S,M);w.onBeforeShadow(i,w,E,A,P,rt,V),i.renderBufferDirect(A,null,P,rt,w,V),w.onAfterShadow(i,w,E,A,P,rt,V)}}}else if(U.visible){const F=y(w,U,S,M);w.onBeforeShadow(i,w,E,A,P,F,null),i.renderBufferDirect(A,null,P,F,w,null),w.onAfterShadow(i,w,E,A,P,F,null)}}const I=w.children;for(let P=0,U=I.length;P<U;P++)_(I[P],E,A,S,M)}function b(w){w.target.removeEventListener("dispose",b);for(const A in l){const S=l[A],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Fx={[Ec]:wc,[Tc]:Rc,[Ac]:Pc,[Os]:Cc,[wc]:Ec,[Rc]:Tc,[Pc]:Ac,[Cc]:Os};function Bx(i,t){function e(){let N=!1;const at=new ge;let Y=null;const K=new ge(0,0,0,0);return{setMask:function(ht){Y!==ht&&!N&&(i.colorMask(ht,ht,ht,ht),Y=ht)},setLocked:function(ht){N=ht},setClear:function(ht,lt,Bt,pe,Ne){Ne===!0&&(ht*=pe,lt*=pe,Bt*=pe),at.set(ht,lt,Bt,pe),K.equals(at)===!1&&(i.clearColor(ht,lt,Bt,pe),K.copy(at))},reset:function(){N=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let N=!1,at=!1,Y=null,K=null,ht=null;return{setReversed:function(lt){if(at!==lt){const Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const pe=ht;ht=null,this.setClear(pe)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?X(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!N&&(i.depthMask(lt),Y=lt)},setFunc:function(lt){if(at&&(lt=Fx[lt]),K!==lt){switch(lt){case Ec:i.depthFunc(i.NEVER);break;case wc:i.depthFunc(i.ALWAYS);break;case Tc:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case Ac:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Rc:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){N=lt},setClear:function(lt){ht!==lt&&(at&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){N=!1,Y=null,K=null,ht=null,at=!1}}}function s(){let N=!1,at=null,Y=null,K=null,ht=null,lt=null,Bt=null,pe=null,Ne=null;return{setTest:function(ee){N||(ee?X(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(ee){at!==ee&&!N&&(i.stencilMask(ee),at=ee)},setFunc:function(ee,En,On){(Y!==ee||K!==En||ht!==On)&&(i.stencilFunc(ee,En,On),Y=ee,K=En,ht=On)},setOp:function(ee,En,On){(lt!==ee||Bt!==En||pe!==On)&&(i.stencilOp(ee,En,On),lt=ee,Bt=En,pe=On)},setLocked:function(ee){N=ee},setClear:function(ee){Ne!==ee&&(i.clearStencil(ee),Ne=ee)},reset:function(){N=!1,at=null,Y=null,K=null,ht=null,lt=null,Bt=null,pe=null,Ne=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,b=null,w=null,E=new wt(0,0,0),A=0,S=!1,M=null,R=null,I=null,P=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=q>=2);let it=null,rt={};const pt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Gt=new ge().fromArray(pt),Z=new ge().fromArray(It);function et(N,at,Y,K){const ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(N,lt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<Y;Bt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(at+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}const dt={};dt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Os),Xt(!1),qt(hu),X(i.CULL_FACE),O(Ti);function X(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function tt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function xt(N,at){return d[N]!==at?(i.bindFramebuffer(N,at),d[N]=at,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function At(N,at){let Y=f,K=!1;if(N){Y=h.get(at),Y===void 0&&(Y=[],h.set(at,Y));const ht=N.textures;if(Y.length!==ht.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=ht.length;lt<Bt;lt++)Y[lt]=i.COLOR_ATTACHMENT0+lt;Y.length=ht.length,K=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,K=!0);K&&i.drawBuffers(Y)}function $t(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Ut={[ji]:i.FUNC_ADD,[kf]:i.FUNC_SUBTRACT,[Hf]:i.FUNC_REVERSE_SUBTRACT};Ut[Vf]=i.MIN,Ut[Gf]=i.MAX;const se={[Wf]:i.ZERO,[Xf]:i.ONE,[qf]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[Jf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[Kf]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[Qf]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,at,Y,K,ht,lt,Bt,pe,Ne,ee){if(N===Ti){x===!0&&(tt(i.BLEND),x=!1);return}if(x===!1&&(X(i.BLEND),x=!0),N!==Of){if(N!==m||ee!==S){if((p!==ji||_!==ji)&&(i.blendEquation(i.FUNC_ADD),p=ji,_=ji),ee)switch(N){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,y=null,b=null,w=null,E.set(0,0,0),A=0,m=N,S=ee}return}ht=ht||at,lt=lt||Y,Bt=Bt||K,(at!==p||ht!==_)&&(i.blendEquationSeparate(Ut[at],Ut[ht]),p=at,_=ht),(Y!==v||K!==y||lt!==b||Bt!==w)&&(i.blendFuncSeparate(se[Y],se[K],se[lt],se[Bt]),v=Y,y=K,b=lt,w=Bt),(pe.equals(E)===!1||Ne!==A)&&(i.blendColor(pe.r,pe.g,pe.b,Ne),E.copy(pe),A=Ne),m=N,S=!1}function fn(N,at){N.side===un?tt(i.CULL_FACE):X(i.CULL_FACE);let Y=N.side===Ye;at&&(Y=!Y),Xt(Y),N.blending===Us&&N.transparent===!1?O(Ti):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const K=N.stencilWrite;a.setTest(K),K&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function qt(N){N!==Bf?(X(i.CULL_FACE),N!==R&&(N===hu?i.cullFace(i.BACK):N===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),R=N}function Rt(N){N!==I&&(k&&i.lineWidth(N),I=N)}function ae(N,at,Y){N?(X(i.POLYGON_OFFSET_FILL),(P!==at||U!==Y)&&(i.polygonOffset(at,Y),P=at,U=Y)):tt(i.POLYGON_OFFSET_FILL)}function Ct(N){N?X(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function L(N){N===void 0&&(N=i.TEXTURE0+F-1),it!==N&&(i.activeTexture(N),it=N)}function T(N,at,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+F-1:Y=it);let K=rt[Y];K===void 0&&(K={type:void 0,texture:void 0},rt[Y]=K),(K.type!==N||K.texture!==at)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(N,at||dt[N]),K.type=N,K.texture=at)}function H(){const N=rt[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){Gt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function gt(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function Yt(N,at){let Y=l.get(at);Y===void 0&&(Y=new WeakMap,l.set(at,Y));let K=Y.get(N);K===void 0&&(K=i.getUniformBlockIndex(at,N.name),Y.set(N,K))}function Ht(N,at){const K=l.get(at).get(N);c.get(at)!==K&&(i.uniformBlockBinding(at,K,N.__bindingPointIndex),c.set(at,K))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,rt={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,b=null,w=null,E=new wt(0,0,0),A=0,S=!1,M=null,R=null,I=null,P=null,U=null,Gt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:tt,bindFramebuffer:xt,drawBuffers:At,useProgram:$t,setBlending:O,setMaterial:fn,setFlipSided:Xt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:ae,setScissorTest:Ct,activeTexture:L,bindTexture:T,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Pt,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:jt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Dt,viewport:gt,reset:re}}function uh(i,t,e,n){const s=zx(n);switch(e){case bd:return i*t;case wd:return i*t;case Td:return i*t*2;case Dl:return i*t/s.components*s.byteLength;case ga:return i*t/s.components*s.byteLength;case Ad:return i*t*2/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case Ed:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case Nl:return i*t*4/s.components*s.byteLength;case Zo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $o:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fc:case zc:return Math.max(i,16)*Math.max(t,8)/4;case Nc:case Bc:return Math.max(i,8)*Math.max(t,8)/2;case Oc:case kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cd:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zx(i){switch(i){case In:case yd:return{byteLength:1,components:1};case Dr:case Md:case zr:return{byteLength:2,components:1};case Ll:case Il:return{byteLength:2,components:4};case Ri:case Pl:case vn:return{byteLength:4,components:1};case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ox(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return f?new OffscreenCanvas(L,T):oa("canvas")}function x(L,T,H){let $=1;const Q=Ct(L);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor($*Q.width),St=Math.floor($*Q.height);d===void 0&&(d=g(j,St));const ct=T?g(j,St):d;return ct.width=j,ct.height=St,ct.getContext("2d").drawImage(L,0,0,j,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+St+")."),ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,T,H,$,Q=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=T;if(T===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),T===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),T===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),T===i.RGBA){const St=Q?_a:Zt.getTransfer($);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=St===ie?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(L,T){let H;return L?T===null||T===Ri||T===Vs?H=i.DEPTH24_STENCIL8:T===vn?H=i.DEPTH32F_STENCIL8:T===Dr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ri||T===Vs?H=i.DEPTH_COMPONENT24:T===vn?H=i.DEPTH_COMPONENT32F:T===Dr&&(H=i.DEPTH_COMPONENT16),H}function b(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==dn&&L.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function w(L){const T=L.target;T.removeEventListener("dispose",w),A(T),T.isVideoTexture&&u.delete(T)}function E(L){const T=L.target;T.removeEventListener("dispose",E),M(T)}function A(L){const T=n.get(L);if(T.__webglInit===void 0)return;const H=L.source,$=h.get(H);if($){const Q=$[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(L),Object.keys($).length===0&&h.delete(H)}n.remove(L)}function S(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const H=L.source,$=h.get(H);delete $[T.__cacheKey],o.memory.textures--}function M(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let Q=0;Q<T.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)i.deleteFramebuffer(T.__webglFramebuffer[$]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=L.textures;for(let $=0,Q=H.length;$<Q;$++){const j=n.get(H[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(L)}let R=0;function I(){R=0}function P(){const L=R;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function U(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function F(L,T){const H=n.get(L);if(L.isVideoTexture&&Rt(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,L,T);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function k(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Z(H,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function q(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Z(H,L,T);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function V(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){et(H,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const it={[Dc]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},rt={[dn]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},pt={[mp]:i.NEVER,[Mp]:i.ALWAYS,[gp]:i.LESS,[Rd]:i.LEQUAL,[_p]:i.EQUAL,[yp]:i.GEQUAL,[xp]:i.GREATER,[vp]:i.NOTEQUAL};function It(L,T){if(T.type===vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===Ta||T.magFilter===qr||T.magFilter===Ji||T.minFilter===xn||T.minFilter===Ta||T.minFilter===qr||T.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,it[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,it[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,it[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,rt[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,rt[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==qr&&T.minFilter!==Ji||T.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Gt(L,T){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",w));const $=T.source;let Q=h.get($);Q===void 0&&(Q={},h.set($,Q));const j=U(T);if(j!==L.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[j].usedTimes++;const St=Q[L.__cacheKey];St!==void 0&&(Q[L.__cacheKey].usedTimes--,St.usedTimes===0&&S(T)),L.__cacheKey=j,L.__webglTexture=Q[j].texture}return H}function Z(L,T,H){let $=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=i.TEXTURE_3D);const Q=Gt(L,T),j=T.source;e.bindTexture($,L.__webglTexture,i.TEXTURE0+H);const St=n.get(j);if(j.version!==St.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const ct=Zt.getPrimaries(Zt.workingColorSpace),ft=T.colorSpace===xi?null:Zt.getPrimaries(T.colorSpace),jt=T.colorSpace===xi||ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let nt=x(T.image,!1,s.maxTextureSize);nt=ae(T,nt);const mt=r.convert(T.format,T.colorSpace),Pt=r.convert(T.type);let Dt=y(T.internalFormat,mt,Pt,T.colorSpace,T.isVideoTexture);It($,T);let gt;const Yt=T.mipmaps,Ht=T.isVideoTexture!==!0,re=St.__version===void 0||Q===!0,N=j.dataReady,at=b(T,nt);if(T.isDepthTexture)Dt=_(T.format===Gs,T.type),re&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,mt,Pt,null));else if(T.isDataTexture)if(Yt.length>0){Ht&&re&&e.texStorage2D(i.TEXTURE_2D,at,Dt,Yt[0].width,Yt[0].height);for(let Y=0,K=Yt.length;Y<K;Y++)gt=Yt[Y],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,mt,Pt,gt.data);T.generateMipmaps=!1}else Ht?(re&&e.texStorage2D(i.TEXTURE_2D,at,Dt,nt.width,nt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Pt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,mt,Pt,nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ht&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Dt,Yt[0].width,Yt[0].height,nt.depth);for(let Y=0,K=Yt.length;Y<K;Y++)if(gt=Yt[Y],T.format!==Xe)if(mt!==null)if(Ht){if(N)if(T.layerUpdates.size>0){const ht=uh(gt.width,gt.height,T.format,T.type);for(const lt of T.layerUpdates){const Bt=gt.data.subarray(lt*ht/gt.data.BYTES_PER_ELEMENT,(lt+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,lt,gt.width,gt.height,1,mt,Bt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,Pt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Dt,gt.width,gt.height,nt.depth,0,mt,Pt,gt.data)}else{Ht&&re&&e.texStorage2D(i.TEXTURE_2D,at,Dt,Yt[0].width,Yt[0].height);for(let Y=0,K=Yt.length;Y<K;Y++)gt=Yt[Y],T.format!==Xe?mt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Pt,gt.data):e.texImage2D(i.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,mt,Pt,gt.data)}else if(T.isDataArrayTexture)if(Ht){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Dt,nt.width,nt.height,nt.depth),N)if(T.layerUpdates.size>0){const Y=uh(nt.width,nt.height,T.format,T.type);for(const K of T.layerUpdates){const ht=nt.data.subarray(K*Y/nt.data.BYTES_PER_ELEMENT,(K+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,mt,Pt,ht)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Pt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,mt,Pt,nt.data);else if(T.isData3DTexture)Ht?(re&&e.texStorage3D(i.TEXTURE_3D,at,Dt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Pt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,mt,Pt,nt.data);else if(T.isFramebufferTexture){if(re)if(Ht)e.texStorage2D(i.TEXTURE_2D,at,Dt,nt.width,nt.height);else{let Y=nt.width,K=nt.height;for(let ht=0;ht<at;ht++)e.texImage2D(i.TEXTURE_2D,ht,Dt,Y,K,0,mt,Pt,null),Y>>=1,K>>=1}}else if(Yt.length>0){if(Ht&&re){const Y=Ct(Yt[0]);e.texStorage2D(i.TEXTURE_2D,at,Dt,Y.width,Y.height)}for(let Y=0,K=Yt.length;Y<K;Y++)gt=Yt[Y],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt,Pt,gt):e.texImage2D(i.TEXTURE_2D,Y,Dt,mt,Pt,gt);T.generateMipmaps=!1}else if(Ht){if(re){const Y=Ct(nt);e.texStorage2D(i.TEXTURE_2D,at,Dt,Y.width,Y.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Pt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,mt,Pt,nt);m(T)&&p($),St.__version=j.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function et(L,T,H){if(T.image.length!==6)return;const $=Gt(L,T),Q=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);const j=n.get(Q);if(Q.version!==j.__version||$===!0){e.activeTexture(i.TEXTURE0+H);const St=Zt.getPrimaries(Zt.workingColorSpace),ct=T.colorSpace===xi?null:Zt.getPrimaries(T.colorSpace),ft=T.colorSpace===xi||St===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,nt=T.image[0]&&T.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!jt&&!nt?mt[K]=x(T.image[K],!0,s.maxCubemapSize):mt[K]=nt?T.image[K].image:T.image[K],mt[K]=ae(T,mt[K]);const Pt=mt[0],Dt=r.convert(T.format,T.colorSpace),gt=r.convert(T.type),Yt=y(T.internalFormat,Dt,gt,T.colorSpace),Ht=T.isVideoTexture!==!0,re=j.__version===void 0||$===!0,N=Q.dataReady;let at=b(T,Pt);It(i.TEXTURE_CUBE_MAP,T);let Y;if(jt){Ht&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Yt,Pt.width,Pt.height);for(let K=0;K<6;K++){Y=mt[K].mipmaps;for(let ht=0;ht<Y.length;ht++){const lt=Y[ht];T.format!==Xe?Dt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,Dt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,Dt,gt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Yt,lt.width,lt.height,0,Dt,gt,lt.data)}}}else{if(Y=T.mipmaps,Ht&&re){Y.length>0&&at++;const K=Ct(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Dt,gt,mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,mt[K].width,mt[K].height,0,Dt,gt,mt[K].data);for(let ht=0;ht<Y.length;ht++){const Bt=Y[ht].image[K].image;Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Bt.width,Bt.height,Dt,gt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Yt,Bt.width,Bt.height,0,Dt,gt,Bt.data)}}else{Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,gt,mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Dt,gt,mt[K]);for(let ht=0;ht<Y.length;ht++){const lt=Y[ht];Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Dt,gt,lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Yt,Dt,gt,lt.image[K])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),j.__version=Q.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function dt(L,T,H,$,Q,j){const St=r.convert(H.format,H.colorSpace),ct=r.convert(H.type),ft=y(H.internalFormat,St,ct,H.colorSpace),jt=n.get(T),nt=n.get(H);if(nt.__renderTarget=T,!jt.__hasExternalTextures){const mt=Math.max(1,T.width>>j),Pt=Math.max(1,T.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,ft,mt,Pt,T.depth,0,St,ct,null):e.texImage2D(Q,j,ft,mt,Pt,0,St,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),qt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,nt.__webglTexture,0,Xt(T)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,nt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(L,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const $=T.depthTexture,Q=$&&$.isDepthTexture?$.type:null,j=_(T.stencilBuffer,Q),St=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Xt(T);qt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,j,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,L)}else{const $=T.textures;for(let Q=0;Q<$.length;Q++){const j=$[Q],St=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),ft=y(j.internalFormat,St,ct,j.colorSpace),jt=Xt(T);H&&qt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,ft,T.width,T.height):qt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ft,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(T.depthTexture);$.__renderTarget=T,(!$.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const Q=$.__webglTexture,j=Xt(T);if(T.depthTexture.format===Ns)qt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Gs)qt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function xt(L){const T=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=$}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");tt(T.__webglFramebuffer,L)}else if(H){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=i.createRenderbuffer(),X(T.__webglDepthbuffer[$],L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),X(T.__webglDepthbuffer,L,!1);else{const $=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(L,T,H){const $=n.get(L);T!==void 0&&dt($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&xt(L)}function $t(L){const T=L.texture,H=n.get(L),$=n.get(T);L.addEventListener("dispose",E);const Q=L.textures,j=L.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=T.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ct]=[];for(let ft=0;ft<T.mipmaps.length;ft++)H.__webglFramebuffer[ct][ft]=i.createFramebuffer()}else H.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ct=0;ct<T.mipmaps.length;ct++)H.__webglFramebuffer[ct]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(St)for(let ct=0,ft=Q.length;ct<ft;ct++){const jt=n.get(Q[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&qt(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const ft=Q[ct];H.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ct]);const jt=r.convert(ft.format,ft.colorSpace),nt=r.convert(ft.type),mt=y(ft.internalFormat,jt,nt,ft.colorSpace,L.isXRRenderTarget===!0),Pt=Xt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,mt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,H.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),X(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),It(i.TEXTURE_CUBE_MAP,T);for(let ct=0;ct<6;ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)dt(H.__webglFramebuffer[ct][ft],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else dt(H.__webglFramebuffer[ct],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,ft=Q.length;ct<ft;ct++){const jt=Q[ct],nt=n.get(jt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),It(i.TEXTURE_2D,jt),dt(H.__webglFramebuffer,L,jt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ct=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),It(ct,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)dt(H.__webglFramebuffer[ft],L,T,i.COLOR_ATTACHMENT0,ct,ft);else dt(H.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,ct,0);m(T)&&p(ct),e.unbindTexture()}L.depthBuffer&&xt(L)}function Ut(L){const T=L.textures;for(let H=0,$=T.length;H<$;H++){const Q=T[H];if(m(Q)){const j=v(L),St=n.get(Q).__webglTexture;e.bindTexture(j,St),p(j),e.unbindTexture()}}}const se=[],O=[];function fn(L){if(L.samples>0){if(qt(L)===!1){const T=L.textures,H=L.width,$=L.height;let Q=i.COLOR_BUFFER_BIT;const j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(L),ct=T.length>1;if(ct)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const jt=n.get(T[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,Q,i.NEAREST),c===!0&&(se.length=0,O.length=0,se.push(i.COLOR_ATTACHMENT0+ft),L.depthBuffer&&L.resolveDepthBuffer===!1&&(se.push(j),O.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const jt=n.get(T[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Xt(L){return Math.min(s.maxSamples,L.samples)}function qt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function ae(L,T){const H=L.colorSpace,$=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Ys&&H!==xi&&(Zt.getTransfer(H)===ie?($!==Xe||Q!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=At,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=qt}function kx(i,t){function e(n,s=xi){let r;const o=Zt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return i.BYTE;if(n===Md)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===zr)return i.HALF_FLOAT;if(n===bd)return i.ALPHA;if(n===Ed)return i.RGB;if(n===Xe)return i.RGBA;if(n===wd)return i.LUMINANCE;if(n===Td)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===Ad)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Zo||n===jo||n===$o||n===Ko)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nc||n===Fc||n===Bc||n===zc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===kc||n===Hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===kc)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===jc||n===$c||n===Kc||n===Jc||n===Qc||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===nl||n===il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cd||n===sl||n===rl||n===ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Hx extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qx extends Zs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const x=new Xx,m=e.getContextAttributes();let p=null,v=null;const y=[],_=[],b=new Lt;let w=null;const E=new ln;E.viewport=new ge;const A=new ln;A.viewport=new ge;const S=[E,A],M=new Hx;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=y[Z];return et===void 0&&(et=new Qa,y[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=y[Z];return et===void 0&&(et=new Qa,y[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=y[Z];return et===void 0&&(et=new Qa,y[Z]=et),et.getHandSpace()};function P(Z){const et=_.indexOf(Z.inputSource);if(et===-1)return;const dt=y[et];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,l||o),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<y.length;Z++){const et=_[Z];et!==null&&(_[Z]=null,y[Z].disconnect(et))}R=null,I=null,x.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,v=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qi(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,dt=null,X=null;m.depth&&(X=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Gs:Ns,dt=m.stencil?Vs:Ri);const tt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(tt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Qi(h.textureWidth,h.textureHeight,{format:Xe,type:In,depthTexture:new Vd(h.textureWidth,h.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(Z){for(let et=0;et<Z.removed.length;et++){const dt=Z.removed[et],X=_.indexOf(dt);X>=0&&(_[X]=null,y[X].disconnect(dt))}for(let et=0;et<Z.added.length;et++){const dt=Z.added[et];let X=_.indexOf(dt);if(X===-1){for(let xt=0;xt<y.length;xt++)if(xt>=_.length){_.push(dt),X=xt;break}else if(_[xt]===null){_[xt]=dt,X=xt;break}if(X===-1)break}const tt=y[X];tt&&tt.connect(dt)}}const k=new D,q=new D;function V(Z,et,dt){k.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(dt.matrixWorld);const X=k.distanceTo(q),tt=et.projectionMatrix.elements,xt=dt.projectionMatrix.elements,At=tt[14]/(tt[10]-1),$t=tt[14]/(tt[10]+1),Ut=(tt[9]+1)/tt[5],se=(tt[9]-1)/tt[5],O=(tt[8]-1)/tt[0],fn=(xt[8]+1)/xt[0],Xt=At*O,qt=At*fn,Rt=X/(-O+fn),ae=Rt*-O;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ae),Z.translateZ(Rt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),tt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Ct=At+Rt,L=$t+Rt,T=Xt-ae,H=qt+(X-ae),$=Ut*$t/L*Ct,Q=se*$t/L*Ct;Z.projectionMatrix.makePerspective(T,H,$,Q,Ct,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,dt=Z.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),M.near=A.near=E.near=et,M.far=A.far=E.far=dt,(R!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,I=M.far),E.layers.mask=Z.layers.mask|2,A.layers.mask=Z.layers.mask|4,M.layers.mask=E.layers.mask|A.layers.mask;const X=Z.parent,tt=M.cameras;it(M,X);for(let xt=0;xt<tt.length;xt++)it(tt[xt],X);tt.length===2?V(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),rt(Z,M,X)};function rt(Z,et,dt){dt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ur*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let pt=null;function It(Z,et){if(u=et.getViewerPose(l||o),g=et,u!==null){const dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let X=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let xt=0;xt<dt.length;xt++){const At=dt[xt];let $t=null;if(f!==null)$t=f.getViewport(At);else{const se=d.getViewSubImage(h,At);$t=se.viewport,xt===0&&(t.setRenderTargetTextures(v,se.colorTexture,h.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(v))}let Ut=S[xt];Ut===void 0&&(Ut=new ln,Ut.layers.enable(xt),Ut.viewport=new ge,S[xt]=Ut),Ut.matrix.fromArray(At.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(At.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set($t.x,$t.y,$t.width,$t.height),xt===0&&(M.matrix.copy(Ut.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(Ut)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const xt=d.getDepthInformation(dt[0]);xt&&xt.isValid&&xt.texture&&x.init(t,xt,s.renderState)}}for(let dt=0;dt<y.length;dt++){const X=_[dt],tt=y[dt];X!==null&&tt!==void 0&&tt.update(X,et,l||o)}pt&&pt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Gt=new kd;Gt.setAnimationLoop(It),this.setAnimationLoop=function(Z){pt=Z},this.dispose=function(){}}}const Hi=new Dn,Yx=new Wt;function Zx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Hi.copy(_),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Hi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const w=t.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){const y=d();v.__bindingPointIndex=y;const _=i.createBuffer(),b=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=s[v.id],_=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,E=_.length;w<E;w++){const A=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,M=A.length;S<M;S++){const R=A[S];if(f(R,w,S,b)===!0){const I=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let F=0;F<P.length;F++){const k=P[F],q=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+U,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,b){const w=v.value,E=y+"_"+_;if(b[E]===void 0)return typeof w=="number"||typeof w=="boolean"?b[E]=w:b[E]=w.clone(),!0;{const A=b[E];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return b[E]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(v){const y=v.uniforms;let _=0;const b=16;for(let E=0,A=y.length;E<A;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,R=S.length;M<R;M++){const I=S[M],P=Array.isArray(I.value)?I.value:[I.value];for(let U=0,F=P.length;U<F;U++){const k=P[U],q=x(k),V=_%b,it=V%q.boundary,rt=V+it;_+=it,rt!==0&&b-rt<q.storage&&(_+=b-rt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=q.storage}}}const w=_%b;return w>0&&(_+=b-w),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Yd{constructor(t={}){const{canvas:e=zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Ai,this.toneMappingExposure=1;const _=this;let b=!1,w=0,E=0,A=null,S=-1,M=null;const R=new ge,I=new ge;let P=null;const U=new wt(0);let F=0,k=e.width,q=e.height,V=1,it=null,rt=null;const pt=new ge(0,0,k,q),It=new ge(0,0,k,q);let Gt=!1;const Z=new xa;let et=!1,dt=!1;const X=new Wt,tt=new Wt,xt=new D,At=new ge,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function se(){return A===null?V:1}let O=n;function fn(C,B){return e.getContext(C,B)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Br}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),O===null){const B="webgl2";if(O=fn(B,C),O===null)throw fn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Xt,qt,Rt,ae,Ct,L,T,H,$,Q,j,St,ct,ft,jt,nt,mt,Pt,Dt,gt,Yt,Ht,re,N;function at(){Xt=new e_(O),Xt.init(),Ht=new kx(O,Xt),qt=new j0(O,Xt,t,Ht),Rt=new Bx(O,Xt),qt.reverseDepthBuffer&&h&&Rt.buffers.depth.setReversed(!0),ae=new s_(O),Ct=new Sx,L=new Ox(O,Xt,Rt,Ct,qt,Ht,ae),T=new K0(_),H=new t_(_),$=new hm(O),re=new Y0(O,$),Q=new n_(O,$,ae,re),j=new o_(O,Q,$,ae),Dt=new r_(O,qt,L),nt=new $0(Ct),St=new Mx(_,T,H,Xt,qt,re,nt),ct=new Zx(_,Ct),ft=new Ex,jt=new Px(Xt),Pt=new q0(_,T,H,Rt,j,f,c),mt=new Nx(_,j,qt),N=new jx(O,ae,qt,Rt),gt=new Z0(O,Xt,ae),Yt=new i_(O,Xt,ae),ae.programs=St.programs,_.capabilities=qt,_.extensions=Xt,_.properties=Ct,_.renderLists=ft,_.shadowMap=mt,_.state=Rt,_.info=ae}at();const Y=new qx(_,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Xt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(k,q,!1))},this.getSize=function(C){return C.set(k,q)},this.setSize=function(C,B,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,q=B,e.width=Math.floor(C*V),e.height=Math.floor(B*V),G===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(k*V,q*V).floor()},this.setDrawingBufferSize=function(C,B,G){k=C,q=B,V=G,e.width=Math.floor(C*G),e.height=Math.floor(B*G),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(pt)},this.setViewport=function(C,B,G,W){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,B,G,W),Rt.viewport(R.copy(pt).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(It)},this.setScissor=function(C,B,G,W){C.isVector4?It.set(C.x,C.y,C.z,C.w):It.set(C,B,G,W),Rt.scissor(I.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(C){Rt.setScissorTest(Gt=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(C=!0,B=!0,G=!0){let W=0;if(C){let z=!1;if(A!==null){const st=A.texture.format;z=st===Nl||st===Ul||st===ga}if(z){const st=A.texture.type,ut=st===In||st===Ri||st===Dr||st===Vs||st===Ll||st===Il,vt=Pt.getClearColor(),yt=Pt.getClearAlpha(),Nt=vt.r,zt=vt.g,Mt=vt.b;ut?(g[0]=Nt,g[1]=zt,g[2]=Mt,g[3]=yt,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Nt,x[1]=zt,x[2]=Mt,x[3]=yt,O.clearBufferiv(O.COLOR,0,x))}else W|=O.COLOR_BUFFER_BIT}B&&(W|=O.DEPTH_BUFFER_BIT),G&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),jt.dispose(),Ct.dispose(),T.dispose(),H.dispose(),j.dispose(),re.dispose(),N.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",iu),Y.removeEventListener("sessionend",su),Ni.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=ae.autoReset,B=mt.enabled,G=mt.autoUpdate,W=mt.needsUpdate,z=mt.type;at(),ae.autoReset=C,mt.enabled=B,mt.autoUpdate=G,mt.needsUpdate=W,mt.type=z}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Bt(C){const B=C.target;B.removeEventListener("dispose",Bt),pe(B)}function pe(C){Ne(C),Ct.remove(C)}function Ne(C){const B=Ct.get(C).programs;B!==void 0&&(B.forEach(function(G){St.releaseProgram(G)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,G,W,z,st){B===null&&(B=$t);const ut=z.isMesh&&z.matrixWorld.determinant()<0,vt=If(C,B,G,W,z);Rt.setMaterial(W,ut);let yt=G.index,Nt=1;if(W.wireframe===!0){if(yt=Q.getWireframeAttribute(G),yt===void 0)return;Nt=2}const zt=G.drawRange,Mt=G.attributes.position;let Kt=zt.start*Nt,oe=(zt.start+zt.count)*Nt;st!==null&&(Kt=Math.max(Kt,st.start*Nt),oe=Math.min(oe,(st.start+st.count)*Nt)),yt!==null?(Kt=Math.max(Kt,0),oe=Math.min(oe,yt.count)):Mt!=null&&(Kt=Math.max(Kt,0),oe=Math.min(oe,Mt.count));const ce=oe-Kt;if(ce<0||ce===1/0)return;re.setup(z,W,vt,G,yt);let Je,Qt=gt;if(yt!==null&&(Je=$.get(yt),Qt=Yt,Qt.setIndex(Je)),z.isMesh)W.wireframe===!0?(Rt.setLineWidth(W.wireframeLinewidth*se()),Qt.setMode(O.LINES)):Qt.setMode(O.TRIANGLES);else if(z.isLine){let bt=W.linewidth;bt===void 0&&(bt=1),Rt.setLineWidth(bt*se()),z.isLineSegments?Qt.setMode(O.LINES):z.isLineLoop?Qt.setMode(O.LINE_LOOP):Qt.setMode(O.LINE_STRIP)}else z.isPoints?Qt.setMode(O.POINTS):z.isSprite&&Qt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const bt=z._multiDrawStarts,kn=z._multiDrawCounts,te=z._multiDrawCount,wn=yt?$.get(yt).bytesPerElement:1,ns=Ct.get(W).currentProgram.getUniforms();for(let on=0;on<te;on++)ns.setValue(O,"_gl_DrawID",on),Qt.render(bt[on]/wn,kn[on])}else if(z.isInstancedMesh)Qt.renderInstances(Kt,ce,z.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,kn=Math.min(G.instanceCount,bt);Qt.renderInstances(Kt,ce,kn)}else Qt.render(Kt,ce)};function ee(C,B,G){C.transparent===!0&&C.side===un&&C.forceSinglePass===!1?(C.side=Ye,C.needsUpdate=!0,Xr(C,B,G),C.side=zn,C.needsUpdate=!0,Xr(C,B,G),C.side=un):Xr(C,B,G)}this.compile=function(C,B,G=null){G===null&&(G=C),p=jt.get(G),p.init(B),y.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),C!==G&&C.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const W=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const st=z.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){const vt=st[ut];ee(vt,G,z),W.add(vt)}else ee(st,G,z),W.add(st)}),y.pop(),p=null,W},this.compileAsync=function(C,B,G=null){const W=this.compile(C,B,G);return new Promise(z=>{function st(){if(W.forEach(function(ut){Ct.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){z(C);return}setTimeout(st,10)}Xt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let En=null;function On(C){En&&En(C)}function iu(){Ni.stop()}function su(){Ni.start()}const Ni=new kd;Ni.setAnimationLoop(On),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){En=C,Y.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},Y.addEventListener("sessionstart",iu),Y.addEventListener("sessionend",su),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,B,A),p=jt.get(C,y.length),p.init(B),y.push(p),tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(tt),dt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,dt),m=ft.get(C,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&wa(st,B,-1/0,_.sortObjects)}wa(C,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,rt),Ut=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ut&&Pt.addToRenderList(m,C),this.info.render.frame++,et===!0&&nt.beginShadows();const G=p.state.shadowsArray;mt.render(G,C,B),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const st=B.cameras;if(z.length>0)for(let ut=0,vt=st.length;ut<vt;ut++){const yt=st[ut];ou(W,z,C,yt)}Ut&&Pt.render(C);for(let ut=0,vt=st.length;ut<vt;ut++){const yt=st[ut];ru(m,C,yt,yt.viewport)}}else z.length>0&&ou(W,z,C,B),Ut&&Pt.render(C),ru(m,C,B);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,B),re.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&nt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function wa(C,B,G,W){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){W&&At.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);const ut=j.update(C),vt=C.material;vt.visible&&m.push(C,ut,vt,G,At.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const ut=j.update(C),vt=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),At.copy(C.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),At.copy(ut.boundingSphere.center)),At.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(vt)){const yt=ut.groups;for(let Nt=0,zt=yt.length;Nt<zt;Nt++){const Mt=yt[Nt],Kt=vt[Mt.materialIndex];Kt&&Kt.visible&&m.push(C,ut,Kt,G,At.z,Mt)}}else vt.visible&&m.push(C,ut,vt,G,At.z,null)}}const st=C.children;for(let ut=0,vt=st.length;ut<vt;ut++)wa(st[ut],B,G,W)}function ru(C,B,G,W){const z=C.opaque,st=C.transmissive,ut=C.transparent;p.setupLightsView(G),et===!0&&nt.setGlobalState(_.clippingPlanes,G),W&&Rt.viewport(R.copy(W)),z.length>0&&Wr(z,B,G),st.length>0&&Wr(st,B,G),ut.length>0&&Wr(ut,B,G),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ou(C,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Qi(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?zr:In,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const st=p.state.transmissionRenderTarget[W.id],ut=W.viewport||R;st.setSize(ut.z,ut.w);const vt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(U),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),Ut&&Pt.render(G);const yt=_.toneMapping;_.toneMapping=Ai;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),et===!0&&nt.setGlobalState(_.clippingPlanes,W),Wr(C,G,W),L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Mt=0,Kt=B.length;Mt<Kt;Mt++){const oe=B[Mt],ce=oe.object,Je=oe.geometry,Qt=oe.material,bt=oe.group;if(Qt.side===un&&ce.layers.test(W.layers)){const kn=Qt.side;Qt.side=Ye,Qt.needsUpdate=!0,au(ce,G,W,Je,Qt,bt),Qt.side=kn,Qt.needsUpdate=!0,zt=!0}}zt===!0&&(L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st))}_.setRenderTarget(vt),_.setClearColor(U,F),Nt!==void 0&&(W.viewport=Nt),_.toneMapping=yt}function Wr(C,B,G){const W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,st=C.length;z<st;z++){const ut=C[z],vt=ut.object,yt=ut.geometry,Nt=W===null?ut.material:W,zt=ut.group;vt.layers.test(G.layers)&&au(vt,B,G,yt,Nt,zt)}}function au(C,B,G,W,z,st){C.onBeforeRender(_,B,G,W,z,st),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(_,B,G,W,C,st),z.transparent===!0&&z.side===un&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,_.renderBufferDirect(G,B,W,z,C,st),z.side=zn,z.needsUpdate=!0,_.renderBufferDirect(G,B,W,z,C,st),z.side=un):_.renderBufferDirect(G,B,W,z,C,st),C.onAfterRender(_,B,G,W,z,st)}function Xr(C,B,G){B.isScene!==!0&&(B=$t);const W=Ct.get(C),z=p.state.lights,st=p.state.shadowsArray,ut=z.state.version,vt=St.getParameters(C,z.state,st,B,G),yt=St.getProgramCacheKey(vt);let Nt=W.programs;W.environment=C.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(C.isMeshStandardMaterial?H:T).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Nt===void 0&&(C.addEventListener("dispose",Bt),Nt=new Map,W.programs=Nt);let zt=Nt.get(yt);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===ut)return lu(C,vt),zt}else vt.uniforms=St.getUniforms(C),C.onBeforeCompile(vt,_),zt=St.acquireProgram(vt,yt),Nt.set(yt,zt),W.uniforms=vt.uniforms;const Mt=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),lu(C,vt),W.needsLights=Uf(C),W.lightsStateVersion=ut,W.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.directionalShadowMap.value=z.state.directionalShadowMap,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotShadowMap.value=z.state.spotShadowMap,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMap.value=z.state.pointShadowMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function cu(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Qo.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function lu(C,B){const G=Ct.get(C);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function If(C,B,G,W,z){B.isScene!==!0&&(B=$t),L.resetTextureUnits();const st=B.fog,ut=W.isMeshStandardMaterial?B.environment:null,vt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ys,yt=(W.isMeshStandardMaterial?H:T).get(W.envMap||ut),Nt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,zt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Mt=!!G.morphAttributes.position,Kt=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let ce=Ai;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ce=_.toneMapping);const Je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Je!==void 0?Je.length:0,bt=Ct.get(W),kn=p.state.lights;if(et===!0&&(dt===!0||C!==M)){const pn=C===M&&W.id===S;nt.setState(W,C,pn)}let te=!1;W.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==kn.state.version||bt.outputColorSpace!==vt||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==yt||W.fog===!0&&bt.fog!==st||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Nt||bt.vertexTangents!==zt||bt.morphTargets!==Mt||bt.morphNormals!==Kt||bt.morphColors!==oe||bt.toneMapping!==ce||bt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,bt.__version=W.version);let wn=bt.currentProgram;te===!0&&(wn=Xr(W,B,z));let ns=!1,on=!1,er=!1;const le=wn.getUniforms(),Nn=bt.uniforms;if(Rt.useProgram(wn.program)&&(ns=!0,on=!0,er=!0),W.id!==S&&(S=W.id,on=!0),ns||M!==C){Rt.buffers.depth.getReversed()?(X.copy(C.projectionMatrix),kp(X),Hp(X),le.setValue(O,"projectionMatrix",X)):le.setValue(O,"projectionMatrix",C.projectionMatrix),le.setValue(O,"viewMatrix",C.matrixWorldInverse);const ai=le.map.cameraPosition;ai!==void 0&&ai.setValue(O,xt.setFromMatrixPosition(C.matrixWorld)),qt.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&le.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,on=!0,er=!0)}if(z.isSkinnedMesh){le.setOptional(O,z,"bindMatrix"),le.setOptional(O,z,"bindMatrixInverse");const pn=z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),le.setValue(O,"boneTexture",pn.boneTexture,L))}z.isBatchedMesh&&(le.setOptional(O,z,"batchingTexture"),le.setValue(O,"batchingTexture",z._matricesTexture,L),le.setOptional(O,z,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",z._indirectTexture,L),le.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",z._colorsTexture,L));const nr=G.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&Dt.update(z,G,wn),(on||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,le.setValue(O,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nn.envMap.value=yt,Nn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Nn.envMapIntensity.value=B.environmentIntensity),on&&(le.setValue(O,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&Df(Nn,er),st&&W.fog===!0&&ct.refreshFogUniforms(Nn,st),ct.refreshMaterialUniforms(Nn,W,V,q,p.state.transmissionRenderTarget[C.id]),Qo.upload(O,cu(bt),Nn,L)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qo.upload(O,cu(bt),Nn,L),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&le.setValue(O,"center",z.center),le.setValue(O,"modelViewMatrix",z.modelViewMatrix),le.setValue(O,"normalMatrix",z.normalMatrix),le.setValue(O,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const pn=W.uniformsGroups;for(let ai=0,ci=pn.length;ai<ci;ai++){const uu=pn[ai];N.update(uu,wn),N.bind(uu,wn)}}return wn}function Df(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Uf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,B,G){Ct.get(C.texture).__webglTexture=B,Ct.get(C.depthTexture).__webglTexture=G;const W=Ct.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){const G=Ct.get(C);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,G=0){A=C,w=B,E=G;let W=!0,z=null,st=!1,ut=!1;if(C){const yt=Ct.get(C);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(yt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(yt.__hasExternalTextures)L.rebindTextures(C,Ct.get(C.texture).__webglTexture,Ct.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Mt=C.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&Ct.has(Mt)&&(C.width!==Mt.image.width||C.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Nt=C.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ut=!0);const zt=Ct.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?z=zt[B][G]:z=zt[B],st=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?z=Ct.get(C).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[G]:z=zt,R.copy(C.viewport),I.copy(C.scissor),P=C.scissorTest}else R.copy(pt).multiplyScalar(V).floor(),I.copy(It).multiplyScalar(V).floor(),P=Gt;if(Rt.bindFramebuffer(O.FRAMEBUFFER,z)&&W&&Rt.drawBuffers(C,z),Rt.viewport(R),Rt.scissor(I),Rt.setScissorTest(P),st){const yt=Ct.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,yt.__webglTexture,G)}else if(ut){const yt=Ct.get(C.texture),Nt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,G||0,Nt)}S=-1},this.readRenderTargetPixels=function(C,B,G,W,z,st,ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){Rt.bindFramebuffer(O.FRAMEBUFFER,vt);try{const yt=C.texture,Nt=yt.format,zt=yt.type;if(!qt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-W&&G>=0&&G<=C.height-z&&O.readPixels(B,G,W,z,Ht.convert(Nt),Ht.convert(zt),st)}finally{const yt=A!==null?Ct.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(C,B,G,W,z,st,ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){const yt=C.texture,Nt=yt.format,zt=yt.type;if(!qt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-W&&G>=0&&G<=C.height-z){Rt.bindFramebuffer(O.FRAMEBUFFER,vt);const Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,st.byteLength,O.STREAM_READ),O.readPixels(B,G,W,z,Ht.convert(Nt),Ht.convert(zt),0);const Kt=A!==null?Ct.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Kt);const oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Op(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,st),O.deleteBuffer(Mt),O.deleteSync(oe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,B=null,G=0){C.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-G),z=Math.floor(C.image.width*W),st=Math.floor(C.image.height*W),ut=B!==null?B.x:0,vt=B!==null?B.y:0;L.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,ut,vt,z,st),Rt.unbindTexture()},this.copyTextureToTexture=function(C,B,G=null,W=null,z=0){C.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],B=arguments[2],z=arguments[3]||0,G=null);let st,ut,vt,yt,Nt,zt,Mt,Kt,oe;const ce=C.isCompressedTexture?C.mipmaps[z]:C.image;G!==null?(st=G.max.x-G.min.x,ut=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,yt=G.min.x,Nt=G.min.y,zt=G.isBox3?G.min.z:0):(st=ce.width,ut=ce.height,vt=ce.depth||1,yt=0,Nt=0,zt=0),W!==null?(Mt=W.x,Kt=W.y,oe=W.z):(Mt=0,Kt=0,oe=0);const Je=Ht.convert(B.format),Qt=Ht.convert(B.type);let bt;B.isData3DTexture?(L.setTexture3D(B,0),bt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),bt=O.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const kn=O.getParameter(O.UNPACK_ROW_LENGTH),te=O.getParameter(O.UNPACK_IMAGE_HEIGHT),wn=O.getParameter(O.UNPACK_SKIP_PIXELS),ns=O.getParameter(O.UNPACK_SKIP_ROWS),on=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,yt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);const er=C.isDataArrayTexture||C.isData3DTexture,le=B.isDataArrayTexture||B.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Nn=Ct.get(C),nr=Ct.get(B),pn=Ct.get(Nn.__renderTarget),ai=Ct.get(nr.__renderTarget);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,pn.__webglFramebuffer),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let ci=0;ci<vt;ci++)er&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(C).__webglTexture,z,zt+ci),C.isDepthTexture?(le&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(B).__webglTexture,z,oe+ci),O.blitFramebuffer(yt,Nt,st,ut,Mt,Kt,st,ut,O.DEPTH_BUFFER_BIT,O.NEAREST)):le?O.copyTexSubImage3D(bt,z,Mt,Kt,oe+ci,yt,Nt,st,ut):O.copyTexSubImage2D(bt,z,Mt,Kt,oe+ci,yt,Nt,st,ut);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else le?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(bt,z,Mt,Kt,oe,st,ut,vt,Je,Qt,ce.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,z,Mt,Kt,oe,st,ut,vt,Je,ce.data):O.texSubImage3D(bt,z,Mt,Kt,oe,st,ut,vt,Je,Qt,ce):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,Mt,Kt,st,ut,Je,Qt,ce.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,Mt,Kt,ce.width,ce.height,Je,ce.data):O.texSubImage2D(O.TEXTURE_2D,z,Mt,Kt,st,ut,Je,Qt,ce);O.pixelStorei(O.UNPACK_ROW_LENGTH,kn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,te),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ns),O.pixelStorei(O.UNPACK_SKIP_IMAGES,on),z===0&&B.generateMipmaps&&O.generateMipmap(bt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(C,B,G=null,W=null,z=0){return C.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,C=arguments[2],B=arguments[3],z=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,B,G,W,z)},this.initRenderTarget=function(C){Ct.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Rt.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,Rt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class kl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new kl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zd extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bs extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=dn,u=dn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hh extends xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _s=new Wt,dh=new Wt,po=[],fh=new _e,$x=new Wt,ar=new ue,cr=new Mn;class Xs extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$x)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _e),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),fh.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(fh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),cr.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),dh.multiplyMatrices(n,_s),ar.matrixWorld=dh,ar.raycast(t,po);for(let o=0,a=po.length;o<a;o++){const c=po[o];c.instanceId=r,c.object=this,e.push(c)}po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(s*this.count),s,this.count,Dl,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function tc(i,t){return i-t}function Kx(i,t){return i.z-t.z}function Jx(i,t){return t.z-i.z}class Qx{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const Qe=new Wt,tv=new wt(1,1,1),ec=new xa,mo=new _e,Vi=new Mn,lr=new D,ph=new D,ev=new D,nc=new Qx,ze=new ue,go=[];function nv(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function Gi(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class iv extends ue{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,s){super(new be,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Bs(e,t,t,Xe,vn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Bs(e,t,t,ga,Ri);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Bs(e,t,t,Xe,vn);n.colorSpace=Zt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),d=new xe(u,c,l);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new xe(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _e);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Qe),this.getBoundingBoxAt(r,mo).applyMatrix4(Qe),t.union(mo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Qe),this.getBoundingSphereAt(r,Vi).applyMatrix4(Qe),t.union(Vi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(tc),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Qe.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(tv.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(tc),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const u in n.attributes){const d=e.getAttribute(u),h=n.getAttribute(u);nv(d,h,c);const f=d.itemSize;for(let g=d.count,x=l;g<x;g++){const m=c+g;for(let p=0;p<f;p++)h.setComponent(m,p,0)}h.needsUpdate=!0,h.addUpdateRange(c*f,l*f)}if(s){const u=a.indexStart,d=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let h=0;h<o.count;h++)r.setX(u+h,c+o.getX(h));for(let h=o.count,f=d;h<f;h++)r.setX(u+h,c);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=s[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=l,f=r.index,g=f.array,x=t-d;for(let m=u;m<u+h;m++)g[m]=g[m]+x;f.array.copyWithin(e,u,u+h),f.addUpdateRange(e,h),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:u,reservedVertexCount:d}=l,h=r.attributes;for(const f in h){const g=h[f],{array:x,itemSize:m}=g;x.copyWithin(t*m,u*m,(u+d)*m),g.addUpdateRange(t*m,d*m)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new _e,o=n.index,a=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let u=c;o&&(u=o.getX(u)),r.expandByPoint(lr.fromBufferAttribute(a,u))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new Mn;this.getBoundingBoxAt(t,mo),mo.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=s.start,u=s.start+s.count;l<u;l++){let d=l;o&&(d=o.getX(d)),lr.fromBufferAttribute(a,d),c=Math.max(c,r.center.distanceToSquared(lr))}r.radius=Math.sqrt(c),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._instanceInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,s=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=s.length||s[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(tc);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);Gi(this._multiDrawCounts,s),Gi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Gi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Gi(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Gi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new be,this._initializeGeometry(r));const o=this.geometry;r.index&&Gi(r.index.array,o.index.array);for(const a in r.attributes)Gi(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;ze.material=this.material,ze.geometry.index=o.index,ze.geometry.attributes=o.attributes,ze.geometry.boundingBox===null&&(ze.geometry.boundingBox=new _e),ze.geometry.boundingSphere===null&&(ze.geometry.boundingSphere=new Mn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=s[l];ze.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,ze.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,ze.geometry.boundingBox),this.getBoundingSphereAt(l,ze.geometry.boundingSphere),ze.raycast(t,go);for(let d=0,h=go.length;d<h;d++){const f=go[d];f.object=this,f.batchId=a,e.push(f)}go.length=0}ze.material=null,ze.geometry.index=null,ze.geometry.attributes={},ze.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,h=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;h&&(Qe.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ec.setFromProjectionMatrix(Qe,t.coordinateSystem));let x=0;if(this.sortObjects){Qe.copy(this.matrixWorld).invert(),lr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Qe),ph.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Qe);for(let v=0,y=c.length;v<y;v++)if(c[v].visible&&c[v].active){const _=c[v].geometryIndex;this.getMatrixAt(v,Qe),this.getBoundingSphereAt(_,Vi).applyMatrix4(Qe);let b=!1;if(h&&(b=!ec.intersectsSphere(Vi)),!b){const w=d[_],E=ev.subVectors(Vi.center,lr).dot(ph);nc.push(w.start,w.count,E,v)}}const m=nc.list,p=this.customSort;p===null?m.sort(r.transparent?Jx:Kx):p.call(this,m,n);for(let v=0,y=m.length;v<y;v++){const _=m[v];l[x]=_.start*a,u[x]=_.count,g[x]=_.index,x++}nc.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const v=c[m].geometryIndex;let y=!1;if(h&&(this.getMatrixAt(m,Qe),this.getBoundingSphereAt(v,Vi).applyMatrix4(Qe),y=!ec.intersectsSphere(Vi)),!y){const _=d[v];l[x]=_.start*a,u[x]=_.count,g[x]=m,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class sv extends Ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const aa=new D,ca=new D,mh=new Wt,ur=new Or,_o=new Mn,ic=new D,gh=new D;class ya extends fe{constructor(t=new be,e=new sv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)aa.fromBufferAttribute(e,s-1),ca.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=aa.distanceTo(ca);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;mh.copy(s).invert(),ur.copy(t.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),y=xo(this,t,ur,c,p,v);y&&e.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=xo(this,t,ur,c,x,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=xo(this,t,ur,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=xo(this,t,ur,c,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(aa.fromBufferAttribute(o,s),ca.fromBufferAttribute(o,r),e.distanceSqToSegment(aa,ca,ic,gh)>n)return;ic.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ic);if(!(c<t.near||c>t.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const _h=new D,xh=new D;class jd extends ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_h.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_h.distanceTo(xh);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $d extends ya{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class rv extends Ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new Wt,cl=new Or,vo=new Mn,yo=new D;class Kd extends fe{constructor(t=new be,e=new rv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;vh.copy(s).invert(),cl.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,x=f;g<x;g++){const m=l.getX(g);yo.fromBufferAttribute(d,m),yh(yo,m,c,s,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,x=f;g<x;g++)yo.fromBufferAttribute(d,g),yh(yo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yh(i,t,e,n,s,r,o){const a=cl.distanceSqToPoint(i);if(a<e){const c=new D;cl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Js extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2));function v(){const _=new D,b=new D;let w=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const S=[],M=A/r,R=M*(e-t)+t;for(let I=0;I<=s;I++){const P=I/s,U=P*c+a,F=Math.sin(U),k=Math.cos(U);b.x=R*F,b.y=-M*n+m,b.z=R*k,d.push(b.x,b.y,b.z),_.set(F,E,k).normalize(),h.push(_.x,_.y,_.z),f.push(P,1-M),S.push(g++)}x.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const M=x[S][A],R=x[S+1][A],I=x[S+1][A+1],P=x[S][A+1];(t>0||S!==0)&&(u.push(M,R,P),w+=3),(e>0||S!==r-1)&&(u.push(R,I,P),w+=3)}l.addGroup(p,w,0),p+=w}function y(_){const b=g,w=new Lt,E=new D;let A=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const R=g;for(let I=0;I<=s;I++){const U=I/s*c+a,F=Math.cos(U),k=Math.sin(U);E.x=S*k,E.y=m*M,E.z=S*F,d.push(E.x,E.y,E.z),h.push(0,M,0),w.x=F*.5+.5,w.y=k*.5*M+.5,f.push(w.x,w.y),g++}for(let I=0;I<s;I++){const P=b+I,U=R+I;_===!0?u.push(U,U+1,P):u.push(U+1,U,P),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hl extends Js{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Hl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vl extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new D,_=new D,b=new D;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],_),f(e[w+2],b),c(y,_,b,v)}function c(v,y,_,b){const w=b+1,E=[];for(let A=0;A<=w;A++){E[A]=[];const S=v.clone().lerp(_,A/w),M=y.clone().lerp(_,A/w),R=w-A;for(let I=0;I<=R;I++)I===0&&A===w?E[A][I]=S:E[A][I]=S.clone().lerp(M,I/R)}for(let A=0;A<w;A++)for(let S=0;S<2*(w-A)-1;S++){const M=Math.floor(S/2);S%2===0?(h(E[A][M+1]),h(E[A+1][M]),h(E[A][M])):(h(E[A][M+1]),h(E[A+1][M+1]),h(E[A+1][M]))}}function l(v){const y=new D;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(_,1-b)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const y=o[v+0],_=o[v+2],b=o[v+4],w=Math.max(y,_,b),E=Math.min(y,_,b);w>.9&&E<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,y){const _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const v=new D,y=new D,_=new D,b=new D,w=new Lt,E=new Lt,A=new Lt;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),b.copy(v).add(y).add(_).divideScalar(3);const R=m(b);x(w,M+0,v,R),x(E,M+2,y,R),x(A,M+4,_,R)}}function x(v,y,_,b){b<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.vertices,t.indices,t.radius,t.details)}}class Gl extends Vl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gl(t.radius,t.detail)}}class Mh extends Ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wl extends Ui{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jd extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qd extends Jd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sc=new Wt,Sh=new D,bh=new D;class ov{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class av extends ov{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class la extends Jd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new av}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eh(){return performance.now()}const wh=new Wt;class Ma{constructor(t,e,n=0,s=1/0){this.ray=new Or(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(Th),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ll(t[s],this,n,e);return n.sort(Th),n}}function Th(i,t){return i.distance-t.distance}function ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ll(r[o],t,e,!0)}}const Ah=new D,Mo=new D;class si{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ah.subVectors(t,this.start),Mo.subVectors(this.end,this.start);const n=Mo.dot(Mo);let r=Mo.dot(Ah)/n;return e&&(r=Oe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Br);const J={sand:"#e2b57a",ridge:"#c47a4a",sea:"#5aa8b5",seaDeep:"#2e6d7a",sky:"#8ec8e8",cloud:"#f4f1ea",grass:"#5a8f3c",moss:"#6a7c32",jade:"#2f7a62",rock:"#8a7a68",gold:"#d4b45a",shadow:"#3d4a32",guiBark:"#c46a42",guiLeaf:"#4a8a40",miguBark:"#5a4a40",miguLeaf:"#5a7a3c",miguGlow:"#f0d56a",songBark:"#6e5846",songLeaf:"#3d7a40",baiBark:"#7a6a56",baiLeaf:"#3a6a3c",zongBark:"#9a724c",zongFrond:"#5a8a3c",tanBark:"#6a4038",tanLeaf:"#4a6a38",yanBark:"#6e5c50",yanLeaf:"#6a8a48",yanFruit:"#d24a28",yanCalyx:"#3a5a28",taoBark:"#7a5848",taoLeaf:"#4a8a3c",taoFruit:"#e07048",ziBark:"#6a5a48",ziLeaf:"#4a7a38",ziPod:"#8a7a48",liuBark:"#6e5a46",liuLeaf:"#6a9a40",zhuBark:"#7a8a48",zhuLeaf:"#4a8a38",shanBark:"#6a5244",shanLeaf:"#3a6e3c",zhuyuBlade:"#3a6a40",zhuyuFloret:"#7ec8b8",lacquerBark:"#8a3a28",lacquer:"#5a1c14",furTiger:"#c46a28",furCow:"#6b5a3a",furCowSpot:"#f0e6d4",furHorse:"#c4a06a",furFox:"#b85a28",furWhite:"#f2efe8",furMacaque:"#8a5a38",furPink:"#e39a88",furSheep:"#e8dcc8",furCivet:"#7a6248",scale:"#3d6a48",carp:"#b03a32",shell:"#4a5a3a",skin:"#e8c9a8",beak:"#c4a35a",horn:"#d8c9a8",wing:"#d8c9a0",eye:"#1a1510",eyeWhite:"#f4f0e6"};class lv{constructor(t,e){de(this,"renderer");de(this,"scene");de(this,"camera");de(this,"clock",new cv);de(this,"frame",null);de(this,"raf",0);de(this,"fpsEl",null);de(this,"fpsFrames",0);de(this,"fpsAcc",0);de(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});this.renderer=new Yd({canvas:t,antialias:e==="high",powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e==="high"?1.5:1.1)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=sn,this.renderer.toneMapping=Rl,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=e==="high",this.renderer.shadowMap.type=xd,this.scene=new Zd,this.scene.background=new wt(J.sky),this.renderer.setClearColor(new wt(J.sky),1),this.camera=new ln(58,window.innerWidth/window.innerHeight,.12,8e3),this.camera.position.set(0,12,18);const n=t.parentElement;if(n){const s=document.createElement("div");s.className="fps-meter",s.textContent="— FPS",n.appendChild(s),this.fpsEl=s}window.addEventListener("resize",this.onResize)}setFrame(t){this.frame=t}start(){const t=()=>{var s;this.raf=requestAnimationFrame(t);const e=Math.min(this.clock.getDelta(),.05),n=this.clock.elapsedTime;(s=this.frame)==null||s.call(this,e,n),this.renderer.render(this.scene,this.camera),this.tickFps(e)};t()}stop(){cancelAnimationFrame(this.raf)}dispose(){var t;this.stop(),window.removeEventListener("resize",this.onResize),(t=this.fpsEl)==null||t.remove(),this.fpsEl=null,this.renderer.dispose()}tickFps(t){if(this.fpsFrames+=1,this.fpsAcc+=t,this.fpsAcc<.4)return;const e=Math.round(this.fpsFrames/this.fpsAcc);this.fpsFrames=0,this.fpsAcc=0,this.fpsEl&&(this.fpsEl.textContent=`${e} FPS`)}}const tf="kunlun-quality";function Nr(){return localStorage.getItem(tf)==="low"?"low":"high"}function uv(i){localStorage.setItem(tf,i)}function hv(i){return i==="high"?12e3:5e3}function dv(i){return i==="high"?3:2}function fv(i,t){i.innerHTML=`
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
        <button class="ghost" id="q">${Nr()==="high"?"細緻":"流暢"}</button>
        · WASD · 觸控搖桿
      </p>
    </section>
  `,i.querySelectorAll("[data-mode]").forEach(e=>{e.addEventListener("click",()=>{t(e.dataset.mode)})}),i.querySelector("#q").addEventListener("click",e=>{const n=Nr()==="high"?"low":"high";uv(n),e.currentTarget.textContent=n==="high"?"細緻":"流暢"})}const Ch=new Map;function Tt(i,t={}){const e=i+JSON.stringify(t),n=Ch.get(e);if(n)return n;const s=new Wl({color:i,flatShading:!0,...t});return Ch.set(e,s),s}function rn(i){return Tt(i,{side:un})}function bn(i,t,e=6){const n=new Js(i,i,t,e,1);return n.translate(0,t/2,0),n}function Hr(i,t,e,n=6){const s=new Js(t,i,e,n,1);return s.translate(0,e/2,0),s}function ta(i,t,e=6){const n=new Hl(i,t,e,1);return n.translate(0,t/2,0),n}function ri(i){return new Gl(i,0)}function ne(i,t,e){const n=new Pi(i,t,e);return n.translate(0,t/2,0),n}function Ue(i,t){const e=i*.5,n=t*.58,s=t*.42,r=new Float32Array([0,n,0,e,0,0,0,-s,0,-e,0,0,0,0,i*.04]),o=[0,1,4,1,2,4,2,3,4,3,0,4,0,3,2,0,2,1],a=new be;return a.setAttribute("position",new xe(r,3)),a.setIndex(o),a.computeVertexNormals(),a}function ua(i,t=5){const e=[0,0,i*.05],n=[],s=t*2;for(let o=0;o<s;o+=1){const a=o/s*Math.PI*2-Math.PI/2,c=o%2===0?i:i*.38;e.push(Math.cos(a)*c,Math.sin(a)*c,0)}for(let o=0;o<s;o+=1)n.push(0,o+1,(o+1)%s+1);const r=new be;return r.setAttribute("position",new xe(new Float32Array(e),3)),r.setIndex(n),r.computeVertexNormals(),r}function Xl(i,t){const e=i*.5,n=new Float32Array([-e,0,0,e,0,0,0,t,i*.08]),s=new be;return s.setAttribute("position",new xe(n,3)),s.setIndex([0,1,2,0,2,1]),s.computeVertexNormals(),s}function Cr(i,t,e=.04){const n=i*.5,s=e*.5,r=new Float32Array([0,0,s,n,-t*.35,s,0,-t,s,-n,-t*.35,s,0,0,-s,n,-t*.35,-s,0,-t,-s,-n,-t*.35,-s]),o=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0],a=new be;return a.setAttribute("position",new xe(r,3)),a.setIndex(o),a.computeVertexNormals(),a}function Rh(i,t,e,n=.62,s=6){const r=new Js(e,t,i,s,1);return r.rotateX(Math.PI/2),r.scale(1,n,1),r.translate(0,Math.max(t,e)*n,0),r}function nn(i,t,e,n,s,r){const o=e.x-t.x,a=e.y-t.y,c=e.z-t.z,l=Math.hypot(o,a,c)||.04,u=new ue(Hr(n,s,l,6),r);return u.castShadow=!0,u.receiveShadow=!0,pv(u,t,e),i.add(u),u}function pv(i,t,e){const n=t.x,s=t.y,r=t.z;i.position.set(n,s,r);const o=e.x-n,a=e.y-s,c=e.z-r,l=Math.hypot(o,a,c)||1;return i.quaternion.setFromUnitVectors(new D(0,1,0),new D(o/l,a/l,c/l)),i}function _t(i,t,e,n=0,s=0,r=0){const o=new ue(t,e);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}const mv=()=>Tt(J.guiBark),gv=()=>Tt(J.miguBark),_v=()=>Tt(J.yanBark),xv=()=>Tt(J.lacquerBark),vv=()=>Tt(J.songBark),yv=()=>Tt(J.baiBark),Mv=()=>Tt(J.zongBark),Sv=()=>Tt(J.tanBark),bv=()=>Tt(J.taoBark),Ev=()=>Tt(J.ziBark),wv=()=>Tt(J.liuBark),Tv=()=>Tt(J.zhuBark),Av=()=>Tt(J.shanBark),Cv=()=>rn(J.guiLeaf),Rv=()=>rn(J.miguLeaf),Pv=()=>rn(J.yanLeaf),Lv=()=>rn(J.songLeaf),Iv=()=>rn(J.baiLeaf),Dv=()=>rn(J.zongFrond),Uv=()=>rn(J.tanLeaf),Nv=()=>rn(J.taoLeaf),Fv=()=>rn(J.ziLeaf),Bv=()=>rn(J.liuLeaf),zv=()=>rn(J.zhuLeaf),Ov=()=>rn(J.shanLeaf),kv=()=>Tt(J.yanFruit),Hv=()=>Tt(J.taoFruit),Vv=()=>Tt(J.ziPod),Gv=()=>Tt(J.miguGlow,{emissive:J.miguGlow,emissiveIntensity:.45,side:un}),Wv=()=>Tt(J.lacquer),Xv=()=>rn(J.zhuyuBlade),qv=()=>rn(J.zhuyuFloret),ql={gui:{id:"gui",name:"桂",analogue:"肉桂 Cinnamomum cassia",floraId:"gui"},song:{id:"song",name:"松",analogue:"馬尾松 Pinus massoniana"},bai:{id:"bai",name:"柏",analogue:"側柏 Platycladus orientalis"},zong:{id:"zong",name:"棕",analogue:"棕櫚 Trachycarpus fortunei"},tan:{id:"tan",name:"檀",analogue:"青檀 Pteroceltis tatarinowii"},sang:{id:"sang",name:"桑",analogue:"桑 / 構 Morus · Broussonetia"},yan:{id:"yan",name:"棪",analogue:"君遷子 Diospyros lotus",floraId:"yanmu"},tao:{id:"tao",name:"桃",analogue:"桃 Prunus persica"},zi:{id:"zi",name:"梓",analogue:"梓 Catalpa ovata"},liu:{id:"liu",name:"柳",analogue:"垂柳 Salix babylonica"},zhu:{id:"zhu",name:"竹",analogue:"毛竹 Phyllostachys edulis"},shan:{id:"shan",name:"杉",analogue:"杉木 Cunninghamia lanceolata"}},Yl=["gui","song","bai","zong","tan","sang","yan","tao","zi","liu","zhu","shan"];function Yv(i,t){return t!=null&&t.glowSiZhao?"migu":t!=null&&t.lacquer?"baigao":ql[i].floraId}const Zv=[{mountainId:"zhaoyao",scatter:[{kind:"gui",count:22,radius:28,xCenter:-22,zCenter:20},{kind:"gui",count:18,radius:24,xCenter:38,zCenter:-10}],specimens:[{kind:"sang",overlay:{glowSiZhao:!0},x:8,z:4,yaw:.4},{kind:"sang",overlay:{glowSiZhao:!0},x:16,z:-6,yaw:1.2}],zhuyu:{count:28,minX:-72,spanX:46,minZ:-18,spanZ:40}},{mountainId:"yuanyi",scatter:[{kind:"sang",overlay:{strange:!0},count:12,radius:18,xCenter:44,zCenter:46},{kind:"sang",overlay:{strange:!0},count:10,radius:16,xCenter:50,zCenter:-48},{kind:"sang",overlay:{strange:!0},count:8,radius:14,xCenter:38,zCenter:6}]},{mountainId:"qingqiu",scatter:[]},{mountainId:"danxue",scatter:[]},{mountainId:"ji-nanshan",scatter:[]}],Rr={x:0,z:40,peak:78},zs={x:260,z:10,peak:92},_n={x:520,z:40,peak:70},We={x:780,z:-10,peak:75,radius:145},bi={x:1020,z:16},qe={x:_n.x+6,z:_n.z-78,r:44,floor:3.4,water:4.6},Zl=[{id:"gui-pool",x:-48,z:22,r:13,floor:20.6,water:22.1},qe,{id:"dan-pool",x:We.x,z:We.z-2,r:20,floor:7.6,water:9.2}];function Ci(i,t,e,n){const s=i/e,r=t/n;return Math.exp(-(s*s+r*r))}function $e(i,t,e,n,s,r,o){return Ci(i-e,t-n,s,r)*o}function jl(i,t,e,n=.2){if(i<t)return i;const s=Math.floor((i-t)/e)*e+t;return s+(i-s)*n}function jv(i,t){const e=i-Rr.x,n=t-Rr.z,s=e<-8?72:118;let r=Ci(e,n,s,96)*Rr.peak;return r+=$e(e,n,58,-42,46,38,34),r+=$e(e,n,22,64,32,28,24),r+=$e(e,n,-8,-70,36,30,18),r=jl(r,16,5.5,.16),e>-78&&e<-36&&r>18&&(r=26+(r-26)*.14),e<-96&&(r*=.38),r}function $v(i,t){const e=i-zs.x,n=t-zs.z,s=e<0?18:42;let r=Ci(e,n,s,132)*zs.peak;const o=Math.hypot(e/22,n/36);return o<1&&(r+=(1-o)*(1-o)*22),r+=$e(e,n,18,-96,28,36,36),r+=$e(e,n,14,92,26,32,32),r+=$e(e,n,36,8,22,20,16),r}function Kv(i,t){const e=i-_n.x,n=t-_n.z,s=n<0?72:118;let r=Ci(e,n,96,s)*_n.peak;return r+=$e(e,n,-62,18,40,36,28),r+=$e(e,n,58,52,38,34,26),r+=$e(e,n,36,-28,32,24,16),n<-4&&(r=jl(r,12,5,.16)),n<-52&&(r*=.42),r}function Jv(i,t){const e=Math.hypot(i-qe.x,t-qe.z)/qe.r;return e>=1?0:18*((1-e*e)*(1-e*e))}function Qv(i,t){const e=i-We.x,n=t-We.z,s=Math.hypot(e/We.radius,n/(We.radius*.92)),r=Math.exp(-((s-.52)*(s-.52))/.07)*We.peak,o=Math.exp(-s*s*2.4)*22,a=Math.exp(-s*s*7.5)*36;let c=Math.max(0,r+o-a);return c+=$e(e,n,48,38,34,30,28),c+=$e(e,n,-52,22,30,28,22),c+=$e(e,n,18,-88,40,34,26),c}function ty(i,t){const e=i-bi.x,n=t-bi.z;let s=Ci(e,n,132,108)*46;const r=Math.hypot(e/52,n/42);return r<1?s=58+(1-r)*3.5:r<1.18&&(s=Math.max(s,58-(r-1)*48)),s+=$e(e,n,-68,12,44,36,30),s+=$e(e,n,58,-38,36,32,22),s+=$e(e,n,12,72,34,30,20),s}function $l(i,t,e,n,s,r){if(t>n+10)return 0;const o=n-t,a=s+o*.04,c=i-e;return r*Math.exp(-(c*c)/(2*a*a))*Math.min(1,o/28)}function ef(i,t){return $l(i,t,bi.x-8,bi.z-8,6.2,16)}function nf(i,t){return $l(i,t,We.x,We.z+4,10,10)}function sf(i,t){return $l(i,t,_n.x-4,_n.z-12,9,6.5)}function ey(i,t){return Jv(i,t)+sf(i,t)+nf(i,t)+ef(i,t)}function ny(i,t){return jv(i,t)+$v(i,t)+Kv(i,t)+Qv(i,t)+ty(i,t)}function iy(i,t){const e=Math.abs(Math.sin(i*.062+t*.018))*1.7+Math.abs(Math.cos(i*.029-t*.071))*1.3,n=Math.sin(i*.14+t*.11)*.85+Math.sin(i*.21-t*.16)*.42+Math.sin(i*.33+t*.27)*.22;return e+n}function sy(i,t,e){let n=e;for(const s of Zl){const r=Math.hypot(i-s.x,t-s.z)/s.r;if(r>=1)continue;const o=s.floor+r*r*(s.r>30?6.5:4.2);n=Math.min(n,o)}return n}function ry(i,t){const e=i-Rr.x,n=t-Rr.z;let s=0;e<-36&&e>-88&&(s+=Math.sin(n*.22)*.55),s+=Ci(i-zs.x+10,t-zs.z,16,40)*Math.sin((t-zs.z)*.18)*2.4,t<_n.z-8&&t>_n.z-70&&(s+=Math.sin(i*.12)*.7),t>_n.z+10&&(s-=Ci(i-_n.x,t-_n.z-48,28,22)*4.5);const r=Math.hypot((i-We.x)/We.radius,(t-We.z)/(We.radius*.92));return r>.38&&r<.62&&(s+=Math.sin(Math.atan2(t-We.z,i-We.x)*6)*1.4),t<bi.z-18&&Math.abs(i-bi.x)<70&&(s+=jl(Ci(i-bi.x,t-bi.z+40,40,28)*10,2,2.2,.12)),s}const oy=-180,ay=-280,cy=4,ly=341,uy=126,hy=[],dy={originX:oy,originZ:ay,cell:cy,cols:ly,rows:uy,delta:hy};function fy(i){return{originX:i.originX,originZ:i.originZ,cell:i.cell,cols:i.cols,rows:i.rows,delta:i.delta.length===i.cols*i.rows?i.delta.slice():new Array(i.cols*i.rows).fill(0)}}let en=fy(dy);function Kn(i,t){return t*en.cols+i}function py(i,t){const{originX:e,originZ:n,cell:s,cols:r,rows:o,delta:a}=en;if(a.length!==r*o)return 0;const c=(i-e)/s,l=(t-n)/s,u=Math.floor(c),d=Math.floor(l);if(u<0||d<0||u>=r-1||d>=o-1)return 0;const h=c-u,f=l-d,g=a[Kn(u,d)]??0,x=a[Kn(u+1,d)]??0,m=a[Kn(u,d+1)]??0,p=a[Kn(u+1,d+1)]??0;return g*(1-h)*(1-f)+x*h*(1-f)+m*(1-h)*f+p*h*f}function my(i,t,e,n=7,s=.55){const{originX:r,originZ:o,cell:a,cols:c,rows:l}=en;en.delta.length!==c*l&&(en.delta=new Array(c*l).fill(0));const u=Math.max(0,Math.floor((i-n-r)/a)),d=Math.min(c-1,Math.ceil((i+n-r)/a)),h=Math.max(0,Math.floor((t-n-o)/a)),f=Math.min(l-1,Math.ceil((t+n-o)/a));for(let g=h;g<=f;g+=1)for(let x=u;x<=d;x+=1){const m=r+x*a,p=o+g*a,v=Math.hypot(m-i,p-t);if(v>n)continue;const y=1-v/n,_=Kn(x,g),b=en.delta[_]??0;if(e==="raise")en.delta[_]=b+s*y;else if(e==="lower")en.delta[_]=b-s*y;else{const w=((en.delta[Kn(Math.max(0,x-1),g)]??b)+(en.delta[Kn(Math.min(c-1,x+1),g)]??b)+(en.delta[Kn(x,Math.max(0,g-1))]??b)+(en.delta[Kn(x,Math.min(l-1,g+1))]??b))/4;en.delta[_]=b+(w-b)*.4*y}}}function gy(){const i=new Blob([JSON.stringify(en)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download="nanshan-sculpt.json",t.click(),URL.revokeObjectURL(t.href)}const hn=.55,vi=-180,yi=1180,Jn=-280,Qn=220,Fr=[{id:"zhaoyao",name:"招搖之山",x:0,z:40,peak:78,radius:150,biome:"cassia",padX:-62,padZ:36,quote:"其首曰招搖之山，臨于西海之上，多桂，多金玉。",modern:"南山首山，西臨大海，桂樹林立。"},{id:"yuanyi",name:"猨翼之山",x:260,z:10,peak:92,radius:128,biome:"forbidden",padX:308,padZ:8,quote:"又東三百八十里，曰猨翼之山……多怪木，不可以上。",modern:"怪木怪蛇，山霧濃重，難以攀登。"},{id:"qingqiu",name:"青丘之山",x:520,z:40,peak:70,radius:155,biome:"jade",padX:526,padZ:12,quote:"又東三百里，曰青丘之山……有獸焉，其狀如狐而九尾。",modern:"青雘之陰，九尾狐與灌灌鳥。"},{id:"danxue",name:"丹穴之山",x:780,z:-10,peak:75,radius:145,biome:"ore",padX:780,padZ:38,quote:"又東五百里，曰丹穴之山，其上多金玉。丹水出焉，而南流注于渤海。",modern:"金玉之山，丹水南注。"},{id:"ji-nanshan",name:"鷄山",x:1020,z:16,peak:72,radius:150,biome:"ore",padX:1036,padZ:-78,quote:"又東五百里，曰鷄山，其上多金，其下多丹雘。黑水出焉，而南流注于海。",modern:"上金下丹雘，黑水南流。"}];function Me(i){return Fr.find(t=>t.id===i)}function _y(i,t){return Math.sin(i*.021+t*.017)*1.6+Math.sin(i*.053-t*.041)*.85+Math.sin(i*.11+t*.09)*.32+Math.sin(i*.19-t*.15)*.16}function So(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function xy(i,t){const e=So(vi+8,vi+78,i),n=1-So(yi-78,yi-8,i),s=So(Jn+8,Jn+90,t),r=1-So(Qn-48,Qn-6,t);return e*n*s*r}function Mi(i,t){const e=xy(i,t);if(e<.02)return hn-1.7+Math.sin(i*.08+t*.05)*.12;let n=7.4+_y(i,t)*1.55+iy(i,t);return n+=ny(i,t),n+=ry(i,t),n-=ey(i,t),n=sy(i,t,n),n+=py(i,t),n=hn-1.4+(n-(hn-1.4))*e,Math.max(hn-2.4,n)}function ul(i,t=0){let e=Fr[0],n=1/0;for(const s of Fr){const r=Math.hypot(i-s.x,t-s.z);r<n&&(n=r,e=s)}return e}function rc(i,t){const e=Mi(i,t);if(e<hn+.15)return"sea";for(const a of Zl)if(Math.hypot(i-a.x,t-a.z)<a.r*.92&&e<a.water+.85)return"sand";if(ef(i,t)>3.6)return"gorge";if(nf(i,t)>2||sf(i,t)>1.6)return"sand";const n=ul(i,t),s=i-n.x,r=t-n.z,o=Math.hypot(s,r);if(n.id==="zhaoyao"){if(i<n.x-88)return"sand";if(Math.hypot(s-12,r+2)<16)return"clearing";if(s<-28)return"ore";if(o<n.radius*.92)return"cassia"}if(n.id==="yuanyi"){if(s<-6)return"scree";if(s>18&&e<38)return"shelf";if(o<n.radius*.95)return"forbidden"}if(n.id==="qingqiu"&&o<n.radius*1.05)return Math.hypot(i-qe.x,t-qe.z)<qe.r+8?"sand":Math.hypot(s-16,r+24)<22?"clearing":r>6?"shade":"jade";if(n.id==="danxue"){if(Math.hypot(s/n.radius,r/(n.radius*.92))<.34)return"hollow";if(r>22)return"crown";if(o<n.radius*.95)return"ore"}if(n.id==="ji-nanshan"){if(Math.hypot(s/52,r/42)<1.02)return"crown";if(r<-18)return"quarry";if(o<n.radius*.92)return"ore"}return o<n.radius*.92?n.biome:"foothill"}const Ft=new wt,bo=new wt(J.sand),xs=new wt(J.gold),Eo=new wt(J.ridge),wo=new wt(J.lacquer),oc=new wt("#d8d0c4"),vy=new wt("#1e4a40"),Ph=new wt("#2a221c");function hl(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function yy(i,t,e,n){if(n)switch(n(i,e)){case"cassia":Ft.set(J.grass),i<48&&Ft.lerp(bo,.45),t>28&&Ft.lerp(xs,.35),t>48&&Ft.lerp(Eo,.32);break;case"yan":Ft.set(J.ridge);break;case"sand":Ft.set(J.sand);break;case"jade":Ft.set(J.jade),t>40&&Ft.lerp(xs,.22);break;case"strange":Ft.set(J.moss);break;case"barren":Ft.set(J.rock);break;case"forbidden":Ft.set(J.shadow),i<268&&Ft.lerp(oc,.55),t>50&&Ft.lerp(Eo,.35);break;case"ore":Ft.set(J.ridge),Ft.lerp(xs,.45+hl(i,e)*.2),t<28&&Ft.lerp(wo,.28),t>48&&Ft.lerp(xs,.35);break;case"shade":Ft.set(J.jade),Ft.lerp(vy,.55);break;case"gorge":Ft.set(Ph),Ft.lerp(wo,.35);break;case"scree":Ft.set(oc),Ft.lerp(bo,.2);break;case"quarry":Ft.set(wo),Ft.lerp(Eo,.4);break;case"crown":Ft.set(xs),Ft.lerp(Eo,.22);break;case"hollow":Ft.set(wo),Ft.lerp(Ph,.35);break;case"clearing":Ft.set(J.grass),Ft.lerp(bo,.22);break;case"shelf":Ft.set(J.moss),Ft.lerp(oc,.2);break;case"foothill":Ft.set(J.grass),Ft.lerp(bo,.12);break;case"sea":Ft.set(J.sand);break;default:Ft.set(J.grass);break}else t<hn+.45?Ft.set(J.sand):t>7.5?Ft.set(J.ridge):Ft.set(J.grass);const s=(hl(i,e)-.5)*.08;return Ft.offsetHSL(0,0,s),t>10&&Ft.lerp(xs,.18),Ft}function rf(i,t,e,n,s,r,o,a,c,l,u){const d=n-e,h=r-s;let f=0;for(let g=0;g<=a;g+=1)for(let x=0;x<=o;x+=1){const m=e+x/o*d,p=s+g/a*h;let v=c(m,p);v+=(hl(m*.37,p*.41)-.5)*u,i[f*3]=m,i[f*3+1]=v,i[f*3+2]=p;const y=yy(m,v,p,l);t[f*3]=y.r,t[f*3+1]=y.g,t[f*3+2]=y.b,f+=1}}function dl(i){const{minX:t,maxX:e,minZ:n,maxZ:s,segX:r,segZ:o,sample:a}=i,c=i.jitter??.12,l=new be,u=(r+1)*(o+1),d=new Float32Array(u*3),h=new Float32Array(u*3);rf(d,h,t,e,n,s,r,o,a,i.biomeAt,c);const f=[],g=r+1;for(let p=0;p<o;p+=1)for(let v=0;v<r;v+=1){const y=p*g+v,_=y+1,b=y+g,w=b+1;f.push(y,b,_,_,b,w)}l.setAttribute("position",new xe(d,3)),l.setAttribute("color",new xe(h,3)),l.setIndex(f),l.computeVertexNormals();const x=new Wl({color:16777215,vertexColors:!0,flatShading:!0}),m=new ue(l,x);return m.receiveShadow=i.receiveShadow??!0,m.castShadow=!1,m.frustumCulled=!1,m.name="terrain",m.userData.jitter=c,m.userData.biomeAt=i.biomeAt,m.userData.minX=t,m.userData.maxX=e,m.userData.minZ=n,m.userData.maxZ=s,m.userData.segX=r,m.userData.segZ=o,m}function ha(i,t,e,n){return Vr(i,t,e,n).y}function Vr(i,t,e,n){const s=i.userData.minX,r=i.userData.maxX,o=i.userData.minZ,a=i.userData.maxZ,c=i.userData.segX,l=i.userData.segZ;if(s===void 0||r===void 0||o===void 0||a===void 0||!c||!l)return{y:n,ny:1};const u=r-s,d=a-o;if(u<=0||d<=0)return{y:n,ny:1};const h=(t-s)/u*c,f=(e-o)/d*l,g=Math.max(0,Math.min(c-1,Math.floor(h))),x=Math.max(0,Math.min(l-1,Math.floor(f))),m=h-g,p=f-x,v=i.geometry.getAttribute("position"),y=c+1,_=x*y+g,b=_+1,w=_+y,E=w+1,A=se=>v.getY(se);let S,M,R,I,P,U,F,k,q;m+p<1?(S=A(_),M=A(w),R=A(b),I=v.getX(_),P=v.getZ(_),U=v.getX(w),F=v.getZ(w),k=v.getX(b),q=v.getZ(b)):(S=A(b),M=A(w),R=A(E),I=v.getX(b),P=v.getZ(b),U=v.getX(w),F=v.getZ(w),k=v.getX(E),q=v.getZ(E));const V=(F-q)*(I-k)+(k-U)*(P-q);if(Math.abs(V)<1e-8)return{y:n,ny:1};const it=((F-q)*(t-k)+(k-U)*(e-q))/V,rt=((q-P)*(t-k)+(I-k)*(e-q))/V,pt=1-it-rt,It=it*S+rt*M+pt*R,Gt=U-I,Z=M-S,et=F-P,dt=k-I,X=R-S,tt=q-P,xt=Z*tt-et*X,At=et*dt-Gt*tt,$t=Gt*X-Z*dt,Ut=Math.hypot(xt,At,$t)||1;return{y:It,ny:At/Ut}}function of(i,t,e,n,s,r,o,a){const c=i.geometry.getAttribute("position");let l=i.geometry.getAttribute("color");l||(l=new xe(new Float32Array(c.count*3),3),i.geometry.setAttribute("color",l));const u=c.array,d=l.array,h=i.userData.jitter??.12,f=i.userData.biomeAt;rf(u,d,t,e,n,s,r,o,a,f,h),c.needsUpdate=!0,l.needsUpdate=!0,i.geometry.computeVertexNormals()}const Lh=.18;function My(i){const t=i.radius*1.12;return{minX:i.x-t,maxX:i.x+t,minZ:Math.max(Jn,i.z-t),maxZ:Math.min(Qn,i.z+t)}}function Sy(i){const t=new Jt;t.name="nanshan-terrain";const e=i.quality==="high"?180:120,n=[];for(const r of Fr){const o=My(r),a=dl({...o,segX:e,segZ:e,sample:i.sample,biomeAt:i.biomeAt,jitter:Lh});a.name=`patch-${r.id}`,a.userData.priority=1,a.userData.mountainId=r.id;const c=a.material;c&&"polygonOffset"in c&&(c.polygonOffset=!0,c.polygonOffsetFactor=-1,c.polygonOffsetUnits=-1),a.geometry.computeBoundsTree(),t.add(a),n.push(a)}const s=dl({minX:vi,maxX:yi,minZ:Jn,maxZ:Qn,segX:i.quality==="high"?220:140,segZ:i.quality==="high"?90:58,sample:i.sample,biomeAt:i.biomeAt,jitter:Lh});return s.name="terrain-coarse",s.userData.priority=0,s.geometry.computeBoundsTree(),t.add(s),{group:t,meshes:[...n,s],coarse:s,patches:n}}function Qs(i,t,e){let n,s=-1;for(const r of i){const o=r.userData.minX,a=r.userData.maxX,c=r.userData.minZ,l=r.userData.maxZ;if(o===void 0||a===void 0||c===void 0||l===void 0||t<o||t>a||e<c||e>l)continue;const u=r.userData.priority??0;u>=s&&(n=r,s=u)}return n}function by(i,t,e,n){const s=Qs(i,t,e);return s?Vr(s,t,e,n):{y:n,ny:1}}function Ey(i,t,e,n){const s=Qs(i.meshes,t,e);s&&(of(s,s.userData.minX,s.userData.maxX,s.userData.minZ,s.userData.maxZ,s.userData.segX,s.userData.segZ,n),s.geometry.computeBoundsTree())}const hr=new fe,wy=.02,To=160;function Ty(i){const t=new Jt,e=Xl(.08,.22),n=new Wl({color:J.grass,flatShading:!0,side:un,vertexColors:!1}),s=hv(i.quality),r=Math.max(1,i.maxX-i.minX),o=Math.floor(i.minX/To),a=Math.floor((i.maxX-.01)/To),c=new wt;for(let l=o;l<=a;l+=1){const u=Math.max(i.minX,l*To),d=Math.min(i.maxX,(l+1)*To),h=Math.max(12,Math.floor(s*((d-u)/r))),f=new Xs(e,n,h);f.castShadow=!1,f.receiveShadow=!1;let g=0,x=0;for(;g<h&&x<h*8;){x+=1;const m=u+Math.random()*(d-u),p=i.minZ+Math.random()*(i.maxZ-i.minZ),v=i.biomeAt(m,p);if(!(v==="cassia"||v==="jade"||v==="foothill"||v==="clearing"))continue;const _=Array.isArray(i.terrain)?Qs(i.terrain,m,p):i.terrain;if(!_)continue;const b=Vr(_,m,p,i.sample(m,p));b.y<hn+.35||b.ny<.62||(hr.position.set(m,b.y-wy,p),hr.rotation.set(0,Math.random()*Math.PI,0),hr.scale.set(1,.85+Math.random()*.45,1),hr.updateMatrix(),f.setMatrixAt(g,hr.matrix),c.set(v==="jade"?J.jade:J.grass),f.setColorAt(g,c),g+=1)}f.count=g,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.computeBoundingSphere(),t.add(f)}return t}const Fn=new fe,Ay=Xl(.08,.55),Cy=Ue(.05,.07);function Wi(i){const t=Math.sin(i*12.9898)*43758.5453;return t-Math.floor(t)}function af(){const i=new Jt,t=Nr()==="high"?3:1,e=t===1?6:9,n=new Xs(Ay,Xv(),e);n.castShadow=!1;for(let o=0;o<e;o+=1)Fn.position.set((Wi(o+2)-.5)*.14,-.02,(Wi(o+5)-.5)*.14),Fn.rotation.set(.08,o/e*Math.PI*2+Wi(o+11)*.15,0),Fn.scale.set(1.1,1.35+Wi(o+17)*.5,1),Fn.updateMatrix(),n.setMatrixAt(o,Fn.matrix);n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),i.add(n);const s=t*5,r=new Xs(Cy,qv(),s);for(let o=0;o<s;o+=1)Fn.position.set((Wi(o+21)-.5)*.12,.48+Wi(o+23)*.12,(Wi(o+29)-.5)*.12),Fn.rotation.set(.35,o/5*Math.PI*2,.08),Fn.scale.setScalar(1),Fn.updateMatrix(),r.setMatrixAt(o,Fn.matrix);return r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),i.add(r),i.userData.plantId="zhuyu",i.userData.grassVariant="zhuyu",i}const Et=new fe,Ry=new D(0,1,0),Py=new $s,Ly=new D,Ih=new D,Iy=new D(0,-1,0),Dy=Ue(.16,.36),Uy=Ue(.18,.3),Ny=Ue(.12,.26),Fy=Ue(.14,.24),By=Ue(.12,.32),zy=Ue(.26,.34),Oy=Ue(.08,.28),ky=Ue(.1,.34),Hy=Ue(.1,.28),Vy=ua(.38,5),Gy=ua(.58,5),Wy=Xl(.058,.95),Xy=ri(.09),qy=ri(.11),Yy=ne(.05,.02,.05),Zy=Ue(.16,.28),jy=Cr(.06,.22,.03),$y=Cr(.07,.42,.03),Dh=bn(1,1,6),cf=Hr(1,.42,1,6);function kt(i){const t=Math.sin(i*12.9898)*43758.5453;return t-Math.floor(t)}function es(i,t){return(t??Nr())==="high"?i:Math.max(8,Math.floor(i*.55))}function ts(i,t,e,n,s){const r=new Xs(t,e,Math.max(1,n));r.castShadow=!1;for(let o=0;o<n;o+=1)s(o,Et),Et.updateMatrix(),r.setMatrixAt(o,Et.matrix);return r.instanceMatrix.needsUpdate=!0,n>0&&(r.computeBoundingSphere(),i.add(r)),r}function ea(i,t,e,n,s){if(n<=0)return;const r=new Xs(t,e,n);r.castShadow=!0,r.receiveShadow=!0;for(let o=0;o<n;o+=1)s(o,Et),Et.updateMatrix(),r.setMatrixAt(o,Et.matrix);r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),i.add(r)}function Li(i){return Py.setFromUnitVectors(Ry,Ly.copy(i).normalize())}function Ii(i,t){return new D(Math.cos(i)*Math.sin(t),Math.cos(t),Math.sin(i)*Math.sin(t)).normalize()}function qs(i,t,e,n,s,r,o,a,c=!1){const l=n.clone().normalize(),u=new Jt;u.position.copy(e),u.quaternion.copy(Li(l)),_t(u,Hr(r,o,s,6),t),i.add(u);const d=c===!0?1:c||0;for(let h=1;h<=d;h+=1){const f=h/(d+1)*.9;f>.25&&a.push({pos:e.clone().addScaledVector(l,s*f),dir:l.clone()})}a.push({pos:e.clone().addScaledVector(l,s),dir:l.clone()})}function Gr(i,t,e,n,s=1,r=1){const o=new Jt;_t(o,bn(t*1.5,t*.55,6),i);for(let a=0;a<s;a+=1){const c=s===1?0:a/s*Math.PI*2+kt(r+a)*.22,l=new Jt;s>1&&(l.position.set(Math.cos(c)*t*.42,0,Math.sin(c)*t*.42),l.rotation.z=.14*(a%2===0?1:-1),l.rotation.x=.08*(a%3===0?-1:1)),_t(l,Hr(t*(s>1?.7:1),e,n*(s>1?.92:1),6),i),o.add(l)}return o}function Ln(i,t,e,n,s){const r=s.pair?2:1,o=t.length*r;ts(i,e,n,o,a=>{const c=t[Math.floor(a/r)%t.length],l=a%r;Et.position.copy(c.pos),Et.quaternion.copy(Li(c.dir)),Et.translateY(.04),s.hang&&Et.rotateX(s.hang),s.vertical&&Et.rotateZ(Math.PI/2),s.pair&&Et.rotateY(l*Math.PI),Et.translateX(s.pair?.07:0),s.split&&Et.rotateZ((l?1:-1)*s.split),Et.rotateY(kt(s.seed+a)*.2);const u=s.scale*(.88+kt(s.seed+a*3)*.22);Et.scale.set(u,u,1)})}function vs(i,t,e){const n=Gr(t,e.r0,e.r1,e.h,e.stems??1,i),s=[],r=e.t0??.42,o=e.t1??.92;for(let a=0;a<e.arms;a+=1){if(e.uneven&&kt(i+a*19)<.18)continue;const c=r+kt(i+a*9)*(o-r),l=e.h*c,u=a/Math.max(1,e.arms)*Math.PI*2+kt(i+a)*(e.uneven?.7:.28),d=e.spread+(kt(i+a*7)-.5)*e.gnarl,h=Ii(u,d),f=new D(Math.cos(u)*e.r0*.55,l,Math.sin(u)*e.r0*.55),g=e.h*(.3+kt(i+a*3)*(e.uneven?.32:.16));if(qs(n,t,f,h,g,e.r0*.28,e.r1*.5,s,e.along),kt(i+a*13)>.42){const x=f.clone().addScaledVector(h,g*.58),m=u+.75+kt(i+a*17)*.4,p=d*.82+(e.uneven?.25:0);qs(n,t,x,Ii(m,p),g*.46,e.r0*.16,e.r1*.3,s,!1)}}return{root:n,sockets:s}}function Ky(i,t,e){const o=Gr(t,.18,.05,6.4),a=[],c=es(3,e)>=3?3:2,l=6;for(let u=0;u<c;u+=1){const d=6.4*(.4+u*.2),h=6.4*(.36-u*.06),f=1.08+u*.06;for(let g=0;g<l;g+=1){const x=g/l*Math.PI*2+u*.32+kt(i+u*11+g)*.08,m=new D(Math.cos(x)*.18*.35,d,Math.sin(x)*.18*.35);qs(o,t,m,Ii(x,f),h,.18*.22,.05*.55,a,!1)}}return{root:o,sockets:a}}function Jy(i,t,e){const o=Gr(t,.16,.045,5.8),a=[],c=es(18,e)>=18?18:12;for(let l=0;l<c;l+=1){const u=.2+l/c*.74+kt(i+l)*.03,d=l/c*Math.PI*2+kt(i+l*5)*.28,h=.16+kt(i+l*7)*.14,f=new D(Math.cos(d)*.16*.5,5.8*u,Math.sin(d)*.16*.5),g=5.8*(.16+kt(i+l*3)*.08);qs(o,t,f,Ii(d,h),g,.16*.24,.045*.55,a,!0)}return{root:o,sockets:a}}function Qy(i,t){const r=Gr(t,.15,.04,5.2),o=[],a=8;for(let c=0;c<a;c+=1){const l=.48+kt(i+c*9)*.42,u=c/a*Math.PI*2+kt(i+c)*.22,d=1.22+kt(i+c*7)*.18,h=new D(Math.cos(u)*.15*.5,5.2*l,Math.sin(u)*.15*.5),f=5.2*(.55+kt(i+c*3)*.22);qs(r,t,h,Ii(u,d),f,.15*.22,.04*.45,o,4)}return{root:r,sockets:o}}function tM(i,t,e){const r=Gr(t,.2,.045,7),o=[],a=es(4,e)>=4?4:3,c=6,l=a*c,u=[],d=[],h=[];for(let f=0;f<a;f+=1){const g=7*(.28+f*.16),x=7*(.38-f*.06),m=.88+f*.05;for(let p=0;p<c;p+=1){const v=p/c*Math.PI*2+f*.28+kt(i+f*11+p)*.08;u.push(new D(Math.cos(v)*.2*.32,g,Math.sin(v)*.2*.32)),d.push(Ii(v,m)),h.push(x)}}return ea(r,cf,t,l,f=>{const g=u[f],x=d[f],m=h[f];Et.position.copy(g),Et.quaternion.copy(Li(x)),Et.scale.set(.2*.2,m,.2*.2),o.push({pos:g.clone().addScaledVector(x,m*.62),dir:x.clone()}),o.push({pos:g.clone().addScaledVector(x,m),dir:x.clone()})}),Et.scale.set(1,1,1),{root:r,sockets:o}}function eM(i,t,e,n){const s=new Jt,r=[],o=es(4,n)>=4?4:3,a=6,c=[];for(let d=0;d<o;d+=1){const h=d/o*Math.PI*2+kt(i+d)*.4,f=.18+kt(i+d*3)*.16;c.push({x:Math.cos(h)*f,z:Math.sin(h)*f,yaw:h,segH:.52+kt(i+d*5)*.08,r:.055+kt(i+d*7)*.02})}ea(s,Dh,t,o*a,d=>{const h=c[Math.floor(d/a)],f=d%a,g=h.r*(1-f*.04);Et.position.set(h.x,f*h.segH,h.z),Et.quaternion.identity(),Et.scale.set(g,h.segH,g)}),ea(s,Dh,t,o*a,d=>{const h=c[Math.floor(d/a)],f=d%a,g=h.r*1.18*(1-f*.04);Et.position.set(h.x,(f+1)*h.segH-.02,h.z),Et.quaternion.identity(),Et.scale.set(g,.035,g)});const l=o*3*2,u=[];for(let d=0;d<o;d+=1){const h=c[d];for(let f=3;f<a;f+=1)for(let g=0;g<2;g+=1){const x=f*h.segH+h.segH*.55,m=h.yaw+(g?1.1:-1.1)+kt(i+d*13+f+g)*.2,p=.95+kt(i+d+f)*.15,v=Ii(m,p),y=new D(h.x+Math.cos(m)*h.r,x,h.z+Math.sin(m)*h.r),_=.42+kt(i+g)*.12;u.push({origin:y,dir:v,len:_}),r.push({pos:y.clone().addScaledVector(v,_),dir:v.clone()})}}return ea(s,cf,t,l,d=>{const h=u[d];Et.position.copy(h.origin),Et.quaternion.copy(Li(h.dir)),Et.scale.set(.022,h.len,.022)}),Et.scale.set(1,1,1),Et.quaternion.identity(),Ln(s,r,ky,e,{scale:1.05,seed:i,hang:.28}),s}function nM(i,t,e,n){const s=new Jt,r=6,o=.92;for(let u=0;u<r;u+=1){const d=.18-u*.012;_t(s,bn(d,o,6),t,0,u*o,0)}const a=r*o,c=es(8,n)>=8?8:6,l=[];for(let u=0;u<c;u+=1){const d=u/c*Math.PI*2+kt(i+u)*.08,h=.78+kt(i+u*3)*.16,f=new D(Math.cos(d)*.08,a,Math.sin(d)*.08),g=1.15+kt(i+u*5)*.28;qs(s,t,f,Ii(d,h),g,.045,.02,l,!1)}return Ln(s,l,Gy,e,{scale:1,seed:i,hang:.35}),s}function ac(i,t,e){i.userData.treeKind=t;const n=Yv(t,e);return n&&(i.userData.plantId=n),e!=null&&e.glowSiZhao&&(i.userData.overlay="siZhao"),e!=null&&e.lacquer&&(i.userData.overlay="lacquer"),e!=null&&e.strange&&(i.userData.overlay="strange"),i}function iM(i,t,e,n){if(n!=null&&n.glowSiZhao){const s=Gv(),r=Math.min(t.length,8);ts(i,Zy,s,r*2,o=>{const a=t[o%r];Et.position.copy(a.pos).addScaledVector(a.dir,.06),Et.quaternion.copy(Li(a.dir)),Et.rotateX(.55+kt(e+o)*.2),Et.scale.setScalar(.82+o%3*.1)})}if(n!=null&&n.lacquer){const s=Wv();for(let r=0;r<6;r+=1){const o=t[r%Math.max(1,t.length)],a=_t(i,jy,s,o.pos.x,o.pos.y,o.pos.z);a.quaternion.copy(Li(o.dir)),a.rotateZ(.15)}}}function sM(i,t,e,n){ts(i,Wy,e,t.length*2,s=>{const r=t[Math.floor(s/2)%t.length],o=s%2;Ih.copy(r.dir).lerp(Iy,.55).normalize(),Et.position.copy(r.pos),Et.quaternion.copy(Li(Ih)),Et.rotateZ((o?1:-1)*.32),Et.rotateY(kt(n+s)*.12),Et.scale.set(1.35,1.05+kt(n+s*3)*.18,1)})}function rM(i,t,e,n){const s=t.filter((o,a)=>a%2===1||t.length<8),r=Math.min(s.length,es(14,n));ts(i,Xy,kv(),r,o=>{const a=s[o%s.length];Et.position.copy(a.pos).addScaledVector(a.dir,.04),Et.position.y-=.2,Et.rotation.set(kt(e+o)*.3,kt(e+o*3)*Math.PI,.1),Et.scale.setScalar(.9+kt(e+o*5)*.3)}),ts(i,Yy,Tt(J.yanCalyx),r,o=>{const a=s[o%s.length];Et.position.copy(a.pos).addScaledVector(a.dir,.04),Et.position.y-=.13,Et.rotation.set(0,kt(e+o)*Math.PI,0),Et.scale.setScalar(1)})}function oM(i,t,e,n){const s=t.filter((o,a)=>a%3===0),r=Math.min(s.length,es(10,n));ts(i,qy,Hv(),r,o=>{const a=s[o%Math.max(1,s.length)];Et.position.copy(a.pos).addScaledVector(a.dir,.05),Et.position.y-=.16,Et.rotation.set(kt(e+o)*.25,kt(e+o*3)*Math.PI,.08),Et.scale.setScalar(.95+kt(e+o*5)*.28)})}function aM(i,t,e){const n=Math.min(t.length,10);ts(i,$y,Vv(),n,s=>{const r=t[s%t.length];Et.position.copy(r.pos),Et.quaternion.copy(Li(r.dir)),Et.rotateX(1.15),Et.scale.set(1,1.15+kt(e+s)*.25,1)})}function da(i,t,e,n){if(i==="zong")return ac(nM(t,Mv(),Dv(),e),i,n);if(i==="zhu")return ac(eM(t,Tv(),zv(),e),i,n);const s=n!=null&&n.lacquer?xv():gv(),r=!!(n!=null&&n.strange);let o;return i==="gui"?(o=vs(t,mv(),{h:5.2,r0:.22,r1:.07,arms:7,spread:.82,gnarl:.12,t0:.48,t1:.94,along:!0}),Ln(o.root,o.sockets,Dy,Cv(),{scale:1.08,seed:t,pair:!0})):i==="song"?(o=Ky(t,vv(),e),sM(o.root,o.sockets,Lv(),t)):i==="bai"?(o=Jy(t,yv(),e),Ln(o.root,o.sockets,Ny,Iv(),{scale:1.08,seed:t,pair:!0,vertical:!0})):i==="tan"?(o=vs(t,Sv(),{h:3.6,r0:.26,r1:.09,arms:6,spread:.72,gnarl:.28,stems:3,along:!0}),Ln(o.root,o.sockets,Fy,Uv(),{scale:1.02,seed:t,pair:!1})):i==="sang"?(o=vs(t,s,{h:4.4,r0:r?.3:.32,r1:.1,arms:r?4:6,spread:r?1.12:.95,gnarl:r?.85:.4,along:!0,uneven:r}),Ln(o.root,o.sockets,Vy,Rv(),{scale:1.12,seed:t,hang:.25}),iM(o.root,o.sockets,t,n)):i==="tao"?(o=vs(t,bv(),{h:3.8,r0:.2,r1:.07,arms:6,spread:.92,gnarl:.16,t0:.4,t1:.92,along:!0}),Ln(o.root,o.sockets,By,Nv(),{scale:1.05,seed:t,pair:!1}),oM(o.root,o.sockets,t,e)):i==="zi"?(o=vs(t,Ev(),{h:5.1,r0:.24,r1:.08,arms:6,spread:.78,gnarl:.14,along:!0}),Ln(o.root,o.sockets,zy,Fv(),{scale:1.12,seed:t,pair:!1}),aM(o.root,o.sockets,t)):i==="liu"?(o=Qy(t,wv()),Ln(o.root,o.sockets,Oy,Bv(),{scale:.95,seed:t,hang:.15})):i==="shan"?(o=tM(t,Av(),e),Ln(o.root,o.sockets,Hy,Ov(),{scale:.98,seed:t,hang:.22})):(o=vs(t,_v(),{h:5.6,r0:.2,r1:.06,arms:6,spread:.78,gnarl:.18,along:!0}),Ln(o.root,o.sockets,Uy,Pv(),{scale:1.02,seed:t,pair:!1}),rM(o.root,o.sockets,t,e)),ac(o.root,i,n)}function fl(i,t,e,n,s=0){const r=i.clone(!0);return r.position.set(t,e,n),r.rotation.y=s,r.updateMatrixWorld(),r}const Ao=78;function lf(i,t="high"){const e=new Jt;i.background=new wt(J.sky);const n=new Qd(J.sky,J.sand,.95);e.add(n);const s=new la(12113128,.45);s.castShadow=!1,s.position.set(-80,50,-110),e.add(s);const r=new la(16767392,1.12);r.castShadow=!0;const o=t==="high"?1024:512;r.shadow.mapSize.set(o,o),r.shadow.camera.near=4,r.shadow.camera.far=220,r.shadow.camera.left=-Ao,r.shadow.camera.right=Ao,r.shadow.camera.top=Ao,r.shadow.camera.bottom=-Ao,r.shadow.bias=-4e-4,e.add(r),e.add(r.target);const a=new D,c=(l,u=0,d=0)=>{const h=14+Math.sin(l*.02)*1.5,f=210,g=vu.degToRad(90-h),x=vu.degToRad(f);a.setFromSphericalCoords(1,g,x),r.target.position.set(u,0,d),r.position.copy(a).multiplyScalar(110).add(r.target.position)};return c(0),i.add(e),{group:e,sun:r,update:c}}const uf=40,hf=4;function cM(){const i=new Bs(new Uint8Array([0,0,0,255]),1,1,Xe,In);return i.needsUpdate=!0,i}const lM=`
  uniform float uTime;
  varying vec3 vWorld;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.45 + position.x * 0.045 + position.z * 0.038) * 0.14;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,uM=`
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
`;function hM(i){const t=new Bs(new Uint8Array(i*i*4),i,i,Xe,In);return t.wrapS=t.wrapT=Si,t.minFilter=xn,t.magFilter=xn,t.flipY=!1,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Uh(i,t,e){const n=i.image.data,s=e*e;for(let r=0;r<s;r+=1){const o=t[r]??0,a=Math.max(0,Math.min(255,(o+hf)/uf*255)),c=r*4;n[c]=a,n[c+1]=a,n[c+2]=a,n[c+3]=255}i.needsUpdate=!0}function dM(i,t,e,n,s){const r=i.material;r.uniforms.uLand.value=t,r.uniforms.uLandOn.value=1,r.uniforms.uLandMin.value.set(e,n),r.uniforms.uLandSize.value.set(s,s)}function df(i){const t=i.qualityHigh?14:8,e=new kr(i.width,i.depth,t,Math.max(6,Math.floor(t/2)));e.rotateX(-Math.PI/2);const n=new ii({transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{uTime:{value:0},uDeep:{value:new wt(J.seaDeep)},uShallow:{value:new wt(J.sea)},uCam:{value:new D},uHole:{value:i.hole??0},uLandOn:{value:0},uLand:{value:cM()},uLandMin:{value:new Lt(-1,-1)},uLandSize:{value:new Lt(2,2)},uSea:{value:hn},uHScale:{value:uf},uHBias:{value:hf}},vertexShader:lM,fragmentShader:uM}),s=new ue(e,n);return s.position.set(i.x,hn,i.z),s.renderOrder=0,s}function ff(i,t,e,n,s){const r=i.material;r.uniforms.uTime.value=t,r.uniforms.uCam.value.set(e,n,s)}const fM=()=>Tt(J.cloud);function pM(i,t,e,n,s,r,o,a=!1){const c=_t(i,a?ri(.55):ne(1,1,1),fM(),t,e,n);c.scale.set(s,r,o),c.castShadow=!1,c.receiveShadow=!1}function mM(i){const t=new Jt,e=4+i%4;for(let n=0;n<e;n+=1){const s=n/e*Math.PI*2+i*.2;pM(t,Math.cos(s)*(1.2+n%3*.6),n%2*.35,Math.sin(s)*(.8+n%2*.5),2.2+n%3*.7,.7+n%2*.25,1.4+n%3*.5,n%3===0)}return t}function gM(i){const t=new Jt,e=i==="high"?16:8;for(let n=0;n<e;n+=1){const s=mM(n*17),r=n%2===0?-1:1;s.position.set((n-e/2)*140+n%3*28,148+n%4*14,r*(180+n%3*28)),s.scale.setScalar(3.2+n%3*1.1),t.add(s)}return{group:t,update(n){t.position.x=Math.sin(n*.012)*18}}}function Nh(i,t,e=5.5){const n=new Jt;n.position.set(i,e,t);const s=Tt(J.cloud,{transparent:!0,opacity:.16,depthWrite:!1});for(let r=0;r<6;r+=1){const o=new ue(ne(4.5,.55,2.2),s);o.position.set(r%3*3.2-3.2,r%2*.35,Math.floor(r/3)*3.5-1.8),o.castShadow=!1,o.receiveShadow=!1,n.add(o)}return{group:n,update(r){n.children.forEach((o,a)=>{o.position.y=.15+Math.sin(r*.4+a)*.08})}}}const dr=new fe,_M=.02,cc=new wt;function xM(i){switch(i){case"jade":return J.jade;case"ore":case"crown":return J.gold;case"forbidden":case"scree":return"#e8e0d4";case"shade":return J.jade;case"quarry":case"hollow":return J.lacquer;case"shelf":return J.moss;case"foothill":case"clearing":return J.rock;default:return null}}function vM(i){const t=new Jt,e=Math.floor(i.count*.62),n=i.count-e;return t.add(Fh(i,ne(1.1,.7,.9),e,!1)),t.add(Fh(i,ri(.55),n,!0)),t}function Fh(i,t,e,n){const s=Tt("#f2eee6"),r=new Xs(t,s,e);r.castShadow=!0;let o=0,a=0;for(;o<e&&a<e*12;){a+=1;const c=i.minX+Math.random()*(i.maxX-i.minX),l=i.minZ+Math.random()*(i.maxZ-i.minZ),u=i.biomeAt(c,l),d=xM(u);if(!d||n&&u!=="jade"&&u!=="ore"&&u!=="crown"||!n&&(u==="jade"||u==="ore"||u==="crown")&&Math.random()<.55)continue;const h=Array.isArray(i.terrain)?Qs(i.terrain,c,l):i.terrain;if(!h)continue;const f=Vr(h,c,l,i.sample(c,l));if(f.y<hn)continue;const g=u==="forbidden"?.22:.55;if(f.ny<g)continue;const x=.55+Math.random()*(u==="ore"?1.7:u==="forbidden"?1.5:1.2);dr.position.set(c,f.y-_M+(n?x*.45:0),l),dr.rotation.set(0,Math.random()*Math.PI,n?.35:0),dr.scale.set(x,x*(n?.9+Math.random()*.5:.45+Math.random()*.4),x*(.7+Math.random()*.4)),dr.updateMatrix(),r.setMatrixAt(o,dr.matrix),cc.set(d),u==="shade"&&cc.offsetHSL(0,0,-.18),r.setColorAt(o,cc),o+=1}return r.count=o,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.computeBoundingSphere(),r}const Ei={x:536,z:16},ti=()=>Tt(J.gold),Co=()=>Tt(J.jade),Bh=()=>Tt(J.sand),Pr=()=>Tt(J.lacquer),zh=()=>Tt("#e8e0d4"),pf=()=>Tt(J.sea,{transparent:!0,opacity:.7,depthWrite:!1});function Sn(i,t,e,n=0){return i(t,e)+n}function yM(i,t){const e=Me("zhaoyao"),n=new Jt;n.name="望海石";const s=e.padX,r=e.padZ,o=Sn(t,s,r);_t(n,bn(2.4,1.1,6),Bh(),s,o,r),_t(n,ne(3.6,4.8,1.8),Bh(),s+.4,o+1.05,r-.2),_t(n,ne(2.2,1.6,2.8),ti(),s-.6,o+5.7,r),_t(n,ri(.55),ti(),s-.4,o+7.5,r+.3);const a=[[-38,48,3.2,.55,2.4],[-22,52,2.6,.42,1.8],[-48,28,2.8,.5,2.1],[-12,44,2.2,.38,1.6],[-30,22,3.4,.48,2.6]];for(const[c,l,u,d,h]of a){const f=e.x+c,g=e.z+l;_t(n,ne(u,d,h),ti(),f,Sn(t,f,g),g)}i.add(n)}function MM(i,t){const e=Me("yuanyi"),n=new Jt;n.name="白玉崩壁";const s=[[-28,8,2.8,1.1,1.6],[-36,-6,3.4,.9,2.2],[-22,22,2.2,1.4,1.3],[-42,14,2.6,.8,1.8],[-31,-18,3.1,1.2,1.5],[-48,2,2.4,.7,2],[-18,36,1.8,1.6,1.1],[-26,-32,2.9,1,1.7]];for(const[r,o,a,c,l]of s){const u=e.x+r,d=e.z+o,h=_t(n,ne(a,c,l),zh(),u,Sn(t,u,d),d);h.rotation.y=r*.08,h.rotation.z=.18}for(let r=-5;r<=5;r+=1){const o=e.x+8,a=e.z+r*16;_t(n,ri(.85+(r&1)*.25),zh(),o,Sn(t,o,a)+.2,a)}i.add(n)}function SM(i,t){const e=Me("qingqiu"),n=new Jt;n.name="即翼之澤";const s=_t(n,bn(qe.r*.78,.38,6),pf(),qe.x,qe.water-.38,qe.z);s.castShadow=!1;const r=Ei.x,o=Ei.z,a=Sn(t,r,o);_t(n,bn(3.2,2.4,6),Co(),r,a,o),_t(n,ne(1.6,3.1,1.4),Co(),r+.4,a+2.3,o-.3);const c=[[-18,38],[-8,48],[12,42]];for(const[l,u]of c){const d=e.x+l,h=e.z+u,f=Sn(t,d,h);_t(n,ne(4.2,1.6,3.4),Co(),d,f,h),_t(n,ne(2.4,2.2,1.8),Co(),d-1.2,f+1.5,h+.4)}i.add(n)}function bM(i,t){const e=Me("danxue"),n=new Jt;n.name="丹穴門";const s=e.x,r=e.z-14,o=Sn(t,s,r);_t(n,ne(1.6,7.2,1.6),Pr(),s-4.2,o,r),_t(n,ne(1.6,7.2,1.6),Pr(),s+4.2,o,r),_t(n,ne(10.2,1.5,1.8),ti(),s,o+7.1,r),_t(n,ri(.7),ti(),s,o+8.8,r);const a=[[-16,-6],[18,-10],[-10,8],[12,6],[0,-22],[22,2]];for(const[d,h]of a){const f=e.x+d,g=e.z+h;_t(n,ri(1.1+Math.abs(d)*.02),ti(),f,Sn(t,f,g)+.4,g)}const c=e.x+28,l=e.z+36,u=Sn(t,c,l);_t(n,bn(3.6,1.2,6),ti(),c,u,l),_t(n,ne(1.8,2.4,1.8),Pr(),c,u+1.15,l),_t(n,bn(1.1,.35,6),ti(),c,u+3.5,l),i.add(n)}function EM(i,t){const e=Me("ji-nanshan"),n=new Jt;n.name="金冠";const s=[[0,0],[8,4],[-7,6],[5,-8],[-10,-4],[12,-2],[-4,10]];for(const[o,a]of s){const c=e.x+o,l=e.z+a;_t(n,ne(3.4,.42,2.8),ti(),c,Sn(t,c,l),l)}const r=[[-18,-36,5.5],[6,-44,6.2],[22,-32,4.8],[-8,-52,5.8]];for(const[o,a,c]of r){const l=e.x+o,u=e.z+a;_t(n,ne(c,1.1,2.4),Pr(),l,Sn(t,l,u),u),_t(n,ne(c*.7,.7,1.8),Pr(),l+.4,Sn(t,l,u)+1.05,u+.3)}i.add(n)}function wM(i){const t=new Jt;t.name="landmarks",yM(t,i),MM(t,i),SM(t,i),bM(t,i),EM(t,i);for(const e of Zl){if(e===qe)continue;const n=_t(t,bn(e.r*.78,.32,6),pf(),e.x,e.water-.32,e.z);n.castShadow=!1}return t}const TM=[{id:"tiger",name:"虎"},{id:"cow",name:"牛"},{id:"horse",name:"馬"},{id:"fox",name:"狐"},{id:"macaque",name:"獼猴"},{id:"gibbon",name:"猿"},{id:"sheep",name:"羊"},{id:"bird",name:"鳥"},{id:"carp",name:"鯉"}],AM=[{id:"horse",name:"馬"},{id:"fox",name:"狐"},{id:"cow",name:"牛"},{id:"macaque",name:"獼猴"},{id:"gibbon",name:"猿"},{id:"civet",name:"狸"},{id:"sheep",name:"羊"},{id:"fish",name:"魚"},{id:"turtle",name:"龜"}],CM=[{id:"none",name:"無"},{id:"horse",name:"馬"},{id:"redHorse",name:"赤馬"},{id:"fox",name:"狐"},{id:"foxNine",name:"九尾"},{id:"longMonkey",name:"猿"},{id:"snake",name:"蛇"},{id:"fish",name:"魚"}],RM=[{id:"ungulate",name:"蹄"},{id:"digitigrade",name:"趾行"},{id:"gibbon",name:"長臂"},{id:"fins",name:"鰭"},{id:"none",name:"無"}],PM={shengsheng:{head:"macaque",body:"macaque",tail:"longMonkey",limbs:"digitigrade",headTint:"pink",scale:1.35},baiyuan:{head:"gibbon",body:"gibbon",tail:"none",limbs:"gibbon",scale:1.25},guaishen:{head:"carp",body:"fish",tail:"snake",limbs:"none",serpentine:!0},lushu:{head:"horse",body:"horse",tail:"redHorse",limbs:"ungulate",headTint:"white",bodyPelt:"tiger",scale:1.2},xuangui:{head:"bird",body:"turtle",tail:"snake",limbs:"none"},lu:{head:"cow",body:"fish",tail:"snake",limbs:"none",wings:"feather"},lei:{head:"fox",body:"civet",tail:"fox",limbs:"digitigrade",mane:!0,scale:1.2},bochi:{head:"sheep",body:"sheep",tail:"foxNine",limbs:"ungulate",extraEars:!0,backEye:!0,scale:1.15},jiweihu:{head:"fox",body:"fox",tail:"foxNine",limbs:"digitigrade",lookBack:!0,scale:1.55},guanguan:{head:"bird",body:"sheep",tail:"none",limbs:"none",wings:"feather",scale:.72},chilu:{head:"carp",body:"fish",tail:"fish",limbs:"fins",humanFace:!0}},Is={head:"tiger",body:"cow",tail:"fish",limbs:"ungulate",scale:1.15},LM=Tt(J.furMacaque),IM=Tt("#d8c4a8"),pl=Tt(J.furPink),Lr=Tt(J.furWhite),mf=Tt(J.furHorse),gf=Tt(J.furTiger),_f=Tt(J.furWhite),DM=Tt("#9c2b1a"),Kl=Tt(J.furFox),UM=Tt("#f4ead8"),NM=Tt(J.furCivet),xf=Tt(J.furSheep),FM=Tt("#7a6a58"),BM=Tt(J.scale),zM=Tt(J.shell),vf=Tt(J.furCow),yf=Tt(J.carp),OM=Tt(J.skin),kM=Tt(J.beak),Oh=Tt(J.horn),kh=Tt(J.wing),HM=Tt(J.eye),VM=Tt(J.eyeWhite),ml=Tt(J.furCowSpot);function mi(i,t={}){var c,l;const e=u=>new D(...u),n=t.chest??[0,i[1]-.22,i[2]-.22],s=t.hips??[0,n[1]-.04,-.08],r=t.rump??[0,s[1],-.42],o=((c=t.shoulderL)==null?void 0:c[1])??n[1],a=((l=t.shoulderL)==null?void 0:l[2])??n[2];return{head:e(i),chest:e(n),hips:e(s),rump:e(r),shoulderL:e(t.shoulderL??[-.14,o,a]),shoulderR:e(t.shoulderR??[.14,o,a]),hipL:e(t.hipL??[-.12,s[1],r[2]+.12]),hipR:e(t.hipR??[.12,s[1],r[2]+.12]),wingL:e(t.wingL??[-.02,n[1]+.06,n[2]-.05]),wingR:e(t.wingR??[.02,n[1]+.06,n[2]-.05])}}function GM(i,t){if(t)return gf;switch(i){case"horse":return mf;case"fox":return Kl;case"cow":return vf;case"macaque":return LM;case"gibbon":return Lr;case"civet":return NM;case"sheep":return xf;case"fish":return yf;case"turtle":return zM}}function WM(i){switch(i){case"horse":return{length:1.18,rBack:.26,rFront:.22,flatten:.58,y:.58};case"cow":return{length:1.12,rBack:.3,rFront:.24,flatten:.68,y:.55};case"fox":return{length:.82,rBack:.15,rFront:.12,flatten:.55,y:.34};case"civet":return{length:.74,rBack:.14,rFront:.11,flatten:.52,y:.3};case"macaque":return{length:.78,rBack:.18,rFront:.16,flatten:.62,y:.38};case"sheep":return{length:.72,rBack:.2,rFront:.16,flatten:.7,y:.4};default:return{length:.9,rBack:.2,rFront:.16,flatten:.6,y:.45}}}function XM(i,t,e,n=!1){if(t==="gibbon")return _t(i,Hr(.12,.07,.62,6),e,0,.42,0),_t(i,ne(.16,.22,.14),e,0,.72,.02),mi([0,1.02,.08],{chest:[0,.78,.04],hips:[0,.5,0],rump:[0,.48,-.08],shoulderL:[-.1,.88,.04],shoulderR:[.1,.88,.04],hipL:[-.06,.5,-.02],hipR:[.06,.5,-.02]});if(t==="turtle")return _t(i,bn(.34,.16,6),e,0,.08,0).scale.set(1,1,1.2),_t(i,ta(.22,.1,6),e,0,.22,0),mi([0,.2,.38],{chest:[0,.16,.08],hips:[0,.14,-.05],rump:[0,.12,-.32],wingL:[-.18,.2,.05],wingR:[.18,.2,.05]});if(t==="fish"&&n){const a=[[1.05,.16,.1],[.55,.26,-.08],[.05,.12,.16],[-.45,.22,-.12],[-.95,.1,.08]];for(let c=0;c<a.length;c+=1){const l=a[c],u=_t(i,bn(.09-c*.01,.22,6),e,l[0],l[1],l[2]);u.rotation.z=Math.PI/2,u.rotation.y=c*.2,c===a.length-1&&(u.userData.part="tail")}return mi([1.12,.2,.1],{chest:[.4,.18,0],hips:[-.2,.16,0],rump:[-.9,.1,.08]})}if(t==="fish")return _t(i,Rh(1.05,.08,.06,.55,6),e,0,0,0),mi([0,.12,.55],{chest:[0,.1,.12],hips:[0,.09,-.15],rump:[0,.08,-.52],shoulderL:[-.12,.1,.18],shoulderR:[.12,.1,.18],hipL:[-.1,.08,-.28],hipR:[.1,.08,-.28],wingL:[0,.14,.05],wingR:[0,.14,-.05]});const s=WM(t),r=Math.max(s.rBack,s.rFront)*s.flatten,o=Math.max(.02,s.y-r);return _t(i,Rh(s.length,s.rBack,s.rFront,s.flatten,6),e,0,o,0),t==="cow"&&(_t(i,ne(.12,.08,.1),ml,-.08,o+r+.02,.12),_t(i,ne(.1,.07,.08),ml,.1,o+r-.02,-.18)),t==="horse"||t==="cow"?mi([0,s.y+.22,.58],{chest:[0,s.y-.08,.28],hips:[0,s.y-.1,-.1],rump:[0,s.y-.08,-.58],shoulderL:[-.14,s.y-.1,.32],shoulderR:[.14,s.y-.1,.32],hipL:[-.14,s.y-.1,-.32],hipR:[.14,s.y-.1,-.32]}):t==="macaque"?mi([0,.52,.42],{chest:[0,.4,.18],hips:[0,.36,-.08],rump:[0,.34,-.4],shoulderL:[-.12,.38,.22],shoulderR:[.12,.38,.22],hipL:[-.11,.36,-.18],hipR:[.11,.36,-.18]}):t==="fox"||t==="civet"?mi([0,s.y+.16,.38],{chest:[0,s.y-.04,.18],hips:[0,s.y-.04,-.08],rump:[0,s.y-.04,-.38],shoulderL:[-.1,s.y-.06,.22],shoulderR:[.1,s.y-.06,.22],hipL:[-.1,s.y-.08,-.22],hipR:[.1,s.y-.08,-.22]}):mi([0,.58,.4],{chest:[0,.42,.16],hips:[0,.38,-.06],rump:[0,.36,-.32],shoulderL:[-.12,.4,.2],shoulderR:[.12,.4,.2],hipL:[-.12,.36,-.2],hipR:[.12,.36,-.2]})}function qM(i,t){if(t==="white")return _f;if(t==="pink")return pl;switch(i){case"tiger":return gf;case"cow":return vf;case"horse":return mf;case"fox":return Kl;case"macaque":return pl;case"gibbon":return Lr;case"sheep":return xf;case"bird":return FM;case"carp":return yf}}function ys(i,t,e,n,s=.028){const r=_t(i,Ue(s*1.6,s*1.6),VM,t,e,n);r.rotation.x=-.2;const o=_t(i,Ue(s*.7,s*.7),HM,t,e,n+.008);o.rotation.x=-.2}function Ro(i,t,e,n,s,r=1){const o=_t(i,Ue(.07*r,.14*r),s,t,e,n);o.rotation.z=t<0?.45:-.45,o.rotation.x=-.3}function YM(i,t,e,n){const s=new Jt;s.position.copy(e),n.lookBack&&(s.rotation.y=.85),i.add(s);const r=qM(t,n.tint??"default"),o=t==="horse"||t==="cow"?1.2:t==="tiger"?1.12:1;if(t==="bird"){_t(s,ne(.12*o,.1*o,.14*o),r,0,-.02,0);const u=_t(s,ta(.03,.08,4),kM,0,-.02,.1);return u.rotation.x=Math.PI/2,ys(s,-.03,.02,.06,.016),ys(s,.03,.02,.06,.016),s}if(t==="carp"){const u=n.humanFace?OM:r;return _t(s,ne(.16*o,.12*o,.18*o),u,0,0,.02),_t(s,ne(.08,.06,.1),u,0,-.02,.12),ys(s,-.045,.03,.1,.018),ys(s,.045,.03,.1,.018),s}_t(s,ne(.18*o,.16*o,.16*o),r,0,.02,0);const a=t==="tiger"||n.tint==="white"?_f:r;_t(s,ne(.1*o,.08*o,.14*o),a,0,-.03*o,.12*o);const c=t==="macaque"||t==="gibbon"?Lr:r,l=t==="fox"||t==="tiger"?1.1:.85;if(Ro(s,-.08*o,.12*o,-.02,c,l),Ro(s,.08*o,.12*o,-.02,c,l),n.extraEars&&(Ro(s,-.08*o,.12*o,-.08,Lr,.9),Ro(s,.08*o,.12*o,-.08,Lr,.9)),t==="cow"){const u=_t(s,ta(.025,.14,4),Oh,-.08,.14,-.02);u.rotation.z=.45;const d=_t(s,ta(.025,.14,4),Oh,.08,.14,-.02);d.rotation.z=-.45,_t(s,ne(.06,.05,.04),ml,-.05,.01,.08)}return(t==="macaque"||t==="gibbon")&&_t(s,ne(.1,.08,.06),t==="gibbon"?pl:IM,0,-.01,.08),ys(s,-.045*o,.03,.1*o,.02),ys(s,.045*o,.03,.1*o,.02),s}function ZM(i,t){return i==="redHorse"?DM:i==="fox"||i==="foxNine"?Kl:i==="snake"||i==="fish"?BM:t}function qn(i){return i.userData.part="tail",i}function jM(i,t,e,n){if(t==="none")return;const s=ZM(t,n),r=e.x,o=e.y,a=e.z;if(t==="foxNine"){for(let u=0;u<9;u+=1){const d=(u-4)/4.2,h=_t(i,Cr(.1,.72,.035),u%2?UM:s,r+d*.08,o+.06,a);h.rotation.y=d*.55,h.rotation.x=Math.PI/2+.2,qn(h)}return}if(t==="fish"){const u=_t(i,Cr(.28,.42,.04),s,r,o+.04,a);u.rotation.x=Math.PI/2,qn(u);return}if(t==="horse"||t==="redHorse"){const u=nn(i,{x:r,y:o,z:a},{x:r-.04,y:o-.18,z:a-.42},.045,.03,s),d=nn(i,{x:r-.04,y:o-.18,z:a-.42},{x:r+.06,y:o-.32,z:a-.85},.03,.016,s);qn(u),qn(d);return}if(t==="fox"){const u=_t(i,Cr(.12,.62,.04),s,r,o+.04,a);u.rotation.x=Math.PI/2+.25,qn(u);return}if(t==="longMonkey"){const u=nn(i,{x:r,y:o,z:a},{x:r+.04,y:o-.12,z:a-.32},.03,.02,s),d=nn(i,{x:r+.04,y:o-.12,z:a-.32},{x:r-.06,y:o-.28,z:a-.65},.02,.01,s);qn(u),qn(d);return}const c=nn(i,{x:r,y:o,z:a},{x:r-.08,y:o-.04,z:a-.35},.038,.024,s),l=nn(i,{x:r-.08,y:o-.04,z:a-.35},{x:r+.05,y:o-.1,z:a-.7},.024,.012,s);_t(i,bn(.012,.08,6),s,r+.05,o-.12,a-.74),qn(c),qn(l)}function $M(i,t,e,n){if(t==="none")return;const s=e.shoulderL,r=e.shoulderR,o=e.hipL,a=e.hipR;if(t==="fins"){const l=_t(i,Ue(.22,.28),n,s.x,s.y,s.z+.04);l.rotation.z=.9;const u=_t(i,Ue(.22,.28),n,r.x,r.y,r.z-.04);u.rotation.z=-.9;return}if(t==="gibbon"){nn(i,s,{x:s.x-.52,y:0,z:s.z+.14},.028,.016,n),nn(i,r,{x:r.x+.52,y:0,z:r.z+.14},.028,.016,n),nn(i,o,{x:o.x-.02,y:0,z:o.z+.08},.026,.014,n),nn(i,a,{x:a.x+.02,y:0,z:a.z+.08},.026,.014,n);return}const c=t==="ungulate"?.048:.032;nn(i,s,{x:s.x*1.1,y:0,z:s.z+.08},c,c*.45,n),nn(i,r,{x:r.x*1.1,y:0,z:r.z+.08},c,c*.45,n),nn(i,o,{x:o.x*1.1,y:0,z:o.z-.08},c*1.05,c*.48,n),nn(i,a,{x:a.x*1.1,y:0,z:a.z-.08},c*1.05,c*.48,n)}function KM(i,t,e){if(e!=="feather")return;const n=_t(i,ua(.42,5),kh,t.wingL.x-.18,t.wingL.y,t.wingL.z);n.rotation.y=Math.PI/2,n.rotation.z=.35;const s=_t(i,ua(.42,5),kh,t.wingR.x+.18,t.wingR.y,t.wingR.z);s.rotation.y=-Math.PI/2,s.rotation.z=-.35}function JM(i,t,e){for(let n=0;n<5;n+=1){const s=n/4,r=_t(i,Ue(.08,.16),e,0,t.head.y-.02+s*.22,t.chest.z-s*.12);r.rotation.x=.6}}const QM=Tt(J.eye,{emissive:"#331111",emissiveIntensity:.45});function tS(i){const t=new Jt,e=GM(i.body,i.bodyPelt==="tiger"),n=XM(t,i.body,e,i.serpentine);return YM(t,i.head,n.head,{tint:i.headTint??"default",lookBack:i.lookBack,extraEars:i.extraEars,humanFace:i.humanFace}),jM(t,i.tail,n.rump,e),$M(t,i.limbs,n,e),KM(t,n,i.wings??"none"),i.mane&&JM(t,n,e),i.backEye&&_t(t,ri(.045),QM,0,n.head.y+.12,n.hips.z),t.scale.setScalar(i.scale??1),t}const Mf=.02,Sf=new Set(["guanguan"]);function eS(i,t,e){return t.userData.creatureId=i,t.userData.recipe=e,t.userData.baseY=0,t.userData.homeX=0,t.userData.homeZ=0,t.userData.airborne=Sf.has(i),t}function Sa(i,t){const e=t??PM[i]??Is;return eS(i,tS(e),e)}function nS(i,t){const e=Me("zhaoyao"),n=Me("yuanyi"),s=Me("qingqiu"),r=[{id:"shengsheng",x:e.x-18,z:e.z+22},{id:"guaishen",x:n.padX-6,z:n.padZ+10},{id:"jiweihu",x:s.x-10,z:s.z+44},{id:"guanguan",x:Ei.x+2,z:Ei.z-3,yOff:2.8},{id:"chilu",x:qe.x+4,z:qe.z+qe.r*.72,yOff:.05}],o=[];for(const a of r){const c=Sa(a.id),l=t(a.x,a.z)+(a.yOff??0)-(Sf.has(a.id)?0:Mf);c.position.set(a.x,l,a.z),c.userData.baseY=l,c.userData.homeX=a.x,c.userData.homeZ=a.z,c.rotation.y=Math.random()*Math.PI,i.add(c),o.push({id:a.id,x:a.x,z:a.z})}return o}const iS=new Set(["xuangui","chilu","lu"]);function bf(i,t,e){i.traverse(n=>{if(n.userData.part==="tail"&&(n.rotation.y=Math.sin(t*1.6+n.id)*.18),!n.userData.creatureId||n.parent!==i)return;const s=n.userData.creatureId,r=n.userData.homeX??n.position.x,o=n.userData.homeZ??n.position.z,a=n.userData.baseY??n.position.y;if(iS.has(s)||(n.position.x=r+Math.sin(t*.45+r)*1.15,n.position.z=o+Math.cos(t*.38+o)*1.05,n.rotation.y+=.35*.016),n.userData.airborne)n.position.y=a+Math.sin(t*2.1+r)*.2;else{const c=e?e(n.position.x,n.position.z)-Mf:a;n.position.y=c+Math.sin(t*2.1+r)*.02}})}function sS(){const i=new Jt,t=Ei.x,e=Ei.z,n=[];for(let r=0;r<10;r+=1){const o=Sa("guanguan");o.userData.airborne=!0,i.add(o),n.push(o)}const s=Mi(Ei.x,Ei.z)+7;return{group:i,update(r){n.forEach((o,a)=>{const c=r*.35+a*.45;o.position.set(t+Math.cos(c)*14,s+Math.sin(c*2.1+a)*3.2,e+Math.sin(c*.9)*11),o.rotation.y=-c+Math.PI/2})}}}const Ef=0,rS=1,oS=2,Hh=2,lc=1.25,Vh=1,ke=32,Ee=ke/4,wf=65535,na=Math.pow(2,-24),Jl=Symbol("SKIP_GENERATION"),Tf={strategy:Ef,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Jl]:!1};function me(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function gl(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Gh(i,t){t.set(i)}function Wh(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function Po(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function fr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function ve(i,t){return t[i+15]===wf}function Pe(i,t){return t[i+6]}function He(i,t){return t[i+14]}function we(i){return i+Ee}function Te(i,t){const e=t[i+6];return i+e*Ee}function Ql(i,t){return t[i+7]}function uc(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,h=1/0,f=1/0,g=-1/0,x=-1/0,m=-1/0;const p=i.offset||0;for(let v=(t-p)*6,y=(t+e-p)*6;v<y;v+=6){const _=i[v+0],b=i[v+1],w=_-b,E=_+b;w<r&&(r=w),E>c&&(c=E),_<d&&(d=_),_>g&&(g=_);const A=i[v+2],S=i[v+3],M=A-S,R=A+S;M<o&&(o=M),R>l&&(l=R),A<h&&(h=A),A>x&&(x=A);const I=i[v+4],P=i[v+5],U=I-P,F=I+P;U<a&&(a=U),F>u&&(u=F),I<f&&(f=I),I>m&&(m=I)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,s[0]=d,s[1]=h,s[2]=f,s[3]=g,s[4]=x,s[5]=m}const Zn=32,aS=(i,t)=>i.candidate-t.candidate,gi=new Array(Zn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Lo=new Float32Array(6);function cS(i,t,e,n,s,r){let o=-1,a=0;if(r===Ef)o=gl(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===rS)o=gl(i),o!==-1&&(a=lS(e,n,s,o));else if(r===oS){const c=fr(i);let l=lc*s;const u=e.offset||0,d=(n-u)*6,h=(n+s-u)*6;for(let f=0;f<3;f++){const g=t[f],p=(t[f+3]-g)/Zn;if(s<Zn/4){const v=[...gi];v.length=s;let y=0;for(let b=d;b<h;b+=6,y++){const w=v[y];w.candidate=e[b+2*f],w.count=0;const{bounds:E,leftCacheBounds:A,rightCacheBounds:S}=w;for(let M=0;M<3;M++)S[M]=1/0,S[M+3]=-1/0,A[M]=1/0,A[M+3]=-1/0,E[M]=1/0,E[M+3]=-1/0;Po(b,e,E)}v.sort(aS);let _=s;for(let b=0;b<_;b++){const w=v[b];for(;b+1<_&&v[b+1].candidate===w.candidate;)v.splice(b+1,1),_--}for(let b=d;b<h;b+=6){const w=e[b+2*f];for(let E=0;E<_;E++){const A=v[E];w>=A.candidate?Po(b,e,A.rightCacheBounds):(Po(b,e,A.leftCacheBounds),A.count++)}}for(let b=0;b<_;b++){const w=v[b],E=w.count,A=s-w.count,S=w.leftCacheBounds,M=w.rightCacheBounds;let R=0;E!==0&&(R=fr(S)/c);let I=0;A!==0&&(I=fr(M)/c);const P=Vh+lc*(R*E+I*A);P<l&&(o=f,l=P,a=w.candidate)}}else{for(let _=0;_<Zn;_++){const b=gi[_];b.count=0,b.candidate=g+p+_*p;const w=b.bounds;for(let E=0;E<3;E++)w[E]=1/0,w[E+3]=-1/0}for(let _=d;_<h;_+=6){let E=~~((e[_+2*f]-g)/p);E>=Zn&&(E=Zn-1);const A=gi[E];A.count++,Po(_,e,A.bounds)}const v=gi[Zn-1];Gh(v.bounds,v.rightCacheBounds);for(let _=Zn-2;_>=0;_--){const b=gi[_],w=gi[_+1];Wh(b.bounds,w.rightCacheBounds,b.rightCacheBounds)}let y=0;for(let _=0;_<Zn-1;_++){const b=gi[_],w=b.count,E=b.bounds,S=gi[_+1].rightCacheBounds;w!==0&&(y===0?Gh(E,Lo):Wh(E,Lo,Lo)),y+=w;let M=0,R=0;y!==0&&(M=fr(Lo)/c);const I=s-y;I!==0&&(R=fr(S)/c);const P=Vh+lc*(M*y+R*I);P<l&&(o=f,l=P,a=b.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function lS(i,t,e,n){let s=0;const r=i.offset;for(let o=t,a=t+e;o<a;o++)s+=i[(o-r)*6+n*2];return s/e}class hc{constructor(){this.boundingData=new Float32Array(6)}}function uS(i,t,e,n,s,r){let o=n,a=n+s-1;const c=r.pos,l=r.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+l]<c;)o++;for(;o<=a&&e[(a-u)*6+l]>=c;)a--;if(o<a){for(let d=0;d<t;d++){let h=i[o*t+d];i[o*t+d]=i[a*t+d],i[a*t+d]=h}for(let d=0;d<6;d++){const h=o-u,f=a-u,g=e[h*6+d];e[h*6+d]=e[f*6+d],e[f*6+d]=g}o++,a--}else return o}}let Af,ia,_l,Cf;const hS=Math.pow(2,32);function xl(i){return"count"in i?1:1+xl(i.left)+xl(i.right)}function dS(i,t,e){return Af=new Float32Array(e),ia=new Uint32Array(e),_l=new Uint16Array(e),Cf=new Uint8Array(e),vl(i,t)}function vl(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)Af[e+o]=r[o];if(s)return t.buffer?(Cf.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(ia[e+6]=t.offset,_l[n+14]=t.count,_l[n+15]=wf,i+ke);{const{left:o,right:a,splitAxis:c}=t,l=i+ke;let u=vl(l,o);const d=i/ke,f=u/ke-d;if(f>hS)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return ia[e+6]=f,ia[e+7]=c,vl(u,a)}}function fS(i,t,e,n,s,r){const{maxDepth:o,verbose:a,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:d}=s,h=i.primitiveBuffer,f=i.primitiveBufferStride,g=new Float32Array(6);let x=!1;const m=new hc;return uc(t,e,n,m.boundingData,g),v(m,e,n,g),m;function p(y){d&&d((y-r.offset)/r.count)}function v(y,_,b,w=null,E=0){!x&&E>=o&&(x=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const A=b>l;if(b<=c&&!A||E>=o)return p(_+b),y.offset=_,y.count=b,y;const S=cS(y.boundingData,w,t,_,b,u);let M=S.axis===-1?-1:uS(h,f,t,_,b,S);if(S.axis===-1||M===_||M===_+b){if(!A)return p(_+b),y.offset=_,y.count=b,y;S.axis=Math.max(0,gl(y.boundingData)),M=_+Math.max(1,Math.floor(b/2))}y.splitAxis=S.axis;const R=new hc,I=_,P=M-_;y.left=R,uc(t,I,P,R.boundingData,g),v(R,I,P,g,E+1);const U=new hc,F=M,k=b-P;return y.right=U,uc(t,F,k,U.boundingData,g),v(U,F,k,g,E+1),y}}function pS(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(c=>{const l=fS(i,a,c.offset,c.count,t,o),u=xl(l),d=new e(ke*u);return dS(0,l,d),d})}class tu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class mS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const he=new mS;let wi,Ds;const Ms=[],Io=new tu(()=>new _e);function gS(i,t,e,n,s,r){wi=Io.getPrimitive(),Ds=Io.getPrimitive(),Ms.push(wi,Ds),he.setBuffer(i._roots[t]);const o=yl(0,i.geometry,e,n,s,r);he.clearBuffer(),Io.releasePrimitive(wi),Io.releasePrimitive(Ds),Ms.pop(),Ms.pop();const a=Ms.length;return a>0&&(Ds=Ms[a-1],wi=Ms[a-2]),o}function yl(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=he;let u=i*2;if(ve(u,c)){const g=Pe(i,l),x=He(u,c);return me(i,a,wi),n(g,x,!1,o,r+i/Ee,wi)}else{let I=function(U){const{uint16Array:F,uint32Array:k}=he;let q=U*2;for(;!ve(q,F);)U=we(U),q=U*2;return Pe(U,k)},P=function(U){const{uint16Array:F,uint32Array:k}=he;let q=U*2;for(;!ve(q,F);)U=Te(U,k),q=U*2;return Pe(U,k)+He(q,F)};var h=I,f=P;const g=we(i),x=Te(i,l);let m=g,p=x,v,y,_,b;if(s&&(_=wi,b=Ds,me(m,a,_),me(p,a,b),v=s(_),y=s(b),y<v)){m=x,p=g;const U=v;v=y,y=U,_=b}_||(_=wi,me(m,a,_));const w=ve(m*2,c),E=e(_,w,v,o+1,r+m/Ee);let A;if(E===Hh){const U=I(m),k=P(m)-U;A=n(U,k,!0,o+1,r+m/Ee,_)}else A=E&&yl(m,t,e,n,s,r,o+1);if(A)return!0;b=Ds,me(p,a,b);const S=ve(p*2,c),M=e(b,S,y,o+1,r+p/Ee);let R;if(M===Hh){const U=I(p),k=P(p)-U;R=n(U,k,!0,o+1,r+p/Ee,b)}else R=M&&yl(p,t,e,n,s,r,o+1);return!!R}}const Ir=new he.constructor,fa=new he.constructor,_i=new tu(()=>new _e),Ss=new _e,bs=new _e,dc=new _e,fc=new _e;let pc=!1;function _S(i,t,e,n){if(pc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");pc=!0;const s=i._roots,r=t._roots;let o,a=0,c=0;const l=new Wt().copy(e).invert();for(let u=0,d=s.length;u<d;u++){Ir.setBuffer(s[u]),c=0;const h=_i.getPrimitive();me(0,Ir.float32Array,h),h.applyMatrix4(l);for(let f=0,g=r.length;f<g&&(fa.setBuffer(r[f]),o=Pn(0,0,e,l,n,a,c,0,0,h),fa.clearBuffer(),c+=r[f].byteLength/ke,!o);f++);if(_i.releasePrimitive(h),Ir.clearBuffer(),a+=s[u].byteLength/ke,o)break}return pc=!1,o}function Pn(i,t,e,n,s,r=0,o=0,a=0,c=0,l=null,u=!1){let d,h;u?(d=fa,h=Ir):(d=Ir,h=fa);const f=d.float32Array,g=d.uint32Array,x=d.uint16Array,m=h.float32Array,p=h.uint32Array,v=h.uint16Array,y=i*2,_=t*2,b=ve(y,x),w=ve(_,v);let E=!1;if(w&&b)u?E=s(Pe(t,p),He(t*2,v),Pe(i,g),He(i*2,x),c,o+t/Ee,a,r+i/Ee):E=s(Pe(i,g),He(i*2,x),Pe(t,p),He(t*2,v),a,r+i/Ee,c,o+t/Ee);else if(w){const A=_i.getPrimitive();me(t,m,A),A.applyMatrix4(e);const S=we(i),M=Te(i,g);me(S,f,Ss),me(M,f,bs);const R=A.intersectsBox(Ss),I=A.intersectsBox(bs);E=R&&Pn(t,S,n,e,s,o,r,c,a+1,A,!u)||I&&Pn(t,M,n,e,s,o,r,c,a+1,A,!u),_i.releasePrimitive(A)}else{const A=we(t),S=Te(t,p);me(A,m,dc),me(S,m,fc);const M=l.intersectsBox(dc),R=l.intersectsBox(fc);if(M&&R)E=Pn(i,A,e,n,s,r,o,a,c+1,l,u)||Pn(i,S,e,n,s,r,o,a,c+1,l,u);else if(M)if(b)E=Pn(i,A,e,n,s,r,o,a,c+1,l,u);else{const I=_i.getPrimitive();I.copy(dc).applyMatrix4(e);const P=we(i),U=Te(i,g);me(P,f,Ss),me(U,f,bs);const F=I.intersectsBox(Ss),k=I.intersectsBox(bs);E=F&&Pn(A,P,n,e,s,o,r,c,a+1,I,!u)||k&&Pn(A,U,n,e,s,o,r,c,a+1,I,!u),_i.releasePrimitive(I)}else if(R)if(b)E=Pn(i,S,e,n,s,r,o,a,c+1,l,u);else{const I=_i.getPrimitive();I.copy(fc).applyMatrix4(e);const P=we(i),U=Te(i,g);me(P,f,Ss),me(U,f,bs);const F=I.intersectsBox(Ss),k=I.intersectsBox(bs);E=F&&Pn(S,P,n,e,s,o,r,c,a+1,I,!u)||k&&Pn(S,U,n,e,s,o,r,c,a+1,I,!u),_i.releasePrimitive(I)}}return E}const mc=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=r._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let o=r*2;for(;!ve(o,e);)r=we(r),o=r*2;return Pe(r,t)},this.getRangeEnd=r=>{let o=r*2;for(;!ve(o,e);)r=Te(r,t),o=r*2;return Pe(r,t)+He(o,e)};const s=(r,o,a)=>{const c=o*2,l=ve(c,e);if(!r(a,l,o)&&!l){const d=we(o),h=Te(o,t);s(r,d,a+1),s(r,h,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((o,a,c)=>{if(a){const l=c*2,u=t[c+6],d=e[l+14];return r(o,a,new Float32Array(i,c*4,6),u,d)}else{const l=Ql(c,t);return r(o,a,new Float32Array(i,c*4,6),l)}})}}},Xh=new _e,Es=new Float32Array(6);class xS{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Tf,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),pS(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let d=t,h=t+e;d<h;d++){this.writePrimitiveBounds(d,Es,0);const[f,g,x,m,p,v]=Es;f<r&&(r=f),m>c&&(c=m),g<o&&(o=g),p>l&&(l=p),x<a&&(a=x),v>u&&(u=v)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=c,n[s+4]=l,n[s+5]=u,n}computePrimitiveBounds(t,e,n){const s=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,Es,0);const[a,c,l,u,d,h]=Es,f=(a+u)/2,g=(c+d)/2,x=(l+h)/2,m=(u-a)/2,p=(d-c)/2,v=(h-l)/2,y=(r-s)*6;n[y+0]=f,n[y+1]=m+(Math.abs(f)+m)*na,n[y+2]=g,n[y+3]=p+(Math.abs(g)+p)*na,n[y+4]=x,n[y+5]=v+(Math.abs(x)+v)*na}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,s=e.length;n<s;n++)e[n]+=t;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/ke;for(let l=0;l<c;l++){const u=Ee*l,d=2*u;ve(d,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){mc.setBVH(this,e),mc.traverse(t),mc.reset()}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),c=s.byteLength/ke;for(let l=c-1;l>=0;l--){const u=l*Ee,d=u*2;if(ve(d,o)){const f=Pe(u,r),g=He(d,o);this.writePrimitiveRangeBounds(f,g,Es,0),a.set(Es,u)}else{const f=we(u),g=Te(u,r);for(let x=0;x<3;x++){const m=a[f+x],p=a[f+x+3],v=a[g+x],y=a[g+x+3];a[u+x]=m<v?m:v,a[u+x+3]=p>y?p:y}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{me(0,new Float32Array(n),Xh),t.union(Xh)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){const d=s;s=(h,f,g,x,m)=>d(h,f,g,x,m)?!0:a(h,f,this,r,g,x,o)}else s||(r?s=(d,h,f,g)=>a(d,h,this,r,f,g,o):s=(d,h,f)=>f);let c=!1,l=0;const u=this._roots;for(let d=0,h=u.length;d<h;d++){const f=u[d];if(c=gS(this,d,n,s,e,l),c)break;l+=f.byteLength/ke}return c}bvhcast(t,e,n){let{intersectsRanges:s}=n;return _S(this,t,e,s)}}function vS(){return typeof SharedArrayBuffer<"u"}function eu(i){return i.index?i.index.count:i.attributes.position.count}function ba(i){return eu(i)/3}function yS(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function MS(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=yS(e,n);i.setIndex(new xe(s,1));for(let r=0;r<e;r++)s[r]=r}}function SS(i,t,e){const n=eu(i)/e,s=t||i.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function bS(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function qh(i,t,e){const n=SS(i,t,e),s=bS(i,e);if(!s.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,c=eu(i)/e,l=[];for(const h of s){const{offset:f,count:g}=h,x=f,m=isFinite(g)?g:c-f,p=f+m;x<a&&p>o&&(l.push({pos:Math.max(o,x),isStart:!0}),l.push({pos:Math.min(a,p),isStart:!1}))}l.sort((h,f)=>h.pos!==f.pos?h.pos-f.pos:h.type==="end"?-1:1);let u=0,d=null;for(const h of l){const f=h.pos;u!==0&&f!==d&&r.push({offset:d,count:f-d}),u+=h.isStart?1:-1,d=f}return r}function ES(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,s=i.reduce((l,u)=>l+u.count,0),r=n?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let l=0;l<i.length;l++){const{offset:u,count:d}=i[l];for(let h=0;h<d;h++)a[c+h]=u+h;c+=d}return a}class wS extends xS{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!vS())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Tf,...e},e[Jl]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const s=qh(e,t.range,n),r=ES(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else MS(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new _e))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:qh(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class oi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}oi.prototype.setFromBox=(function(){const i=new D;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const d=e.dot(i);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}})();const TS=(function(){const i=new D,t=new D,e=new D;return function(s,r,o){const a=s.start,c=i,l=r.start,u=t;e.subVectors(a,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const d=e.dot(u),h=u.dot(c),f=u.dot(u),g=e.dot(c),m=c.dot(c)*f-h*h;let p,v;m!==0?p=(d*h-g*f)/m:p=0,v=(d+p*h)/f,o.x=p,o.y=v}})(),nu=(function(){const i=new Lt,t=new D,e=new D;return function(s,r,o,a){TS(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let d;l<0?d=r.start:d=r.end;const h=t,f=e;if(s.closestPointToPoint(d,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(d)<=f.distanceToSquared(u)){o.copy(h),a.copy(d);return}else{o.copy(u),a.copy(f);return}}}})(),AS=(function(){const i=new D,t=new D,e=new jn,n=new si;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:d}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=u,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;const x=o.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=a){const p=x.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})(),CS=["x","y","z"],$n=1e-15,Yh=$n*$n;function gn(i){return Math.abs(i)<$n}class Un extends De{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new oi),this.points=[this.a,this.b,this.c],this.plane=new jn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new si,this.needsUpdate=!0}intersectsSphere(t){return AS(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);const d=r[2],h=o[2];d.subVectors(e,n),h.setFromPoints(d,s);const f=r[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,s);const x=l.length(),m=d.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<$n?m<$n||p<$n?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<$n?p<$n?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<$n&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Un.prototype.closestPointToSegment=(function(){const i=new D,t=new D,e=new si;return function(s,r=null,o=null){const{start:a,end:c}=s,l=this.points;let u,d=1/0;for(let h=0;h<3;h++){const f=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[f]),nu(e,s,i,t),u=i.distanceToSquared(t),u<d&&(d=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<d&&(d=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<d&&(d=u,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(d)}})();Un.prototype.intersectsTriangle=(function(){const i=new Un,t=new oi,e=new oi,n=new D,s=new D,r=new D,o=new D,a=new si,c=new si,l=new D,u=new Lt,d=new Lt;function h(y,_,b,w){const E=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?E.copy(y.plane.normal):E.copy(_.plane.normal);const A=y.satBounds,S=y.satAxes;for(let I=1;I<4;I++){const P=A[I],U=S[I];if(t.setFromPoints(U,_.points),P.isSeparated(t)||(o.copy(E).cross(U),t.setFromPoints(o,y.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}const M=_.satBounds,R=_.satAxes;for(let I=1;I<4;I++){const P=M[I],U=R[I];if(t.setFromPoints(U,y.points),P.isSeparated(t)||(o.crossVectors(E,U),t.setFromPoints(o,y.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}return b&&(w||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),b.start.set(0,0,0),b.end.set(0,0,0)),!0}function f(y,_,b,w,E,A,S,M,R,I,P){let U=S/(S-M);I.x=w+(E-w)*U,P.start.subVectors(_,y).multiplyScalar(U).add(y),U=S/(S-R),I.y=w+(A-w)*U,P.end.subVectors(b,y).multiplyScalar(U).add(y)}function g(y,_,b,w,E,A,S,M,R,I,P){if(E>0)f(y.c,y.a,y.b,w,_,b,R,S,M,I,P);else if(A>0)f(y.b,y.a,y.c,b,_,w,M,S,R,I,P);else if(M*R>0||S!=0)f(y.a,y.b,y.c,_,b,w,S,M,R,I,P);else if(M!=0)f(y.b,y.a,y.c,b,_,w,M,S,R,I,P);else if(R!=0)f(y.c,y.a,y.b,w,_,b,R,S,M,I,P);else return!0;return!1}function x(y,_,b,w){const E=_.degenerateSegment,A=y.plane.distanceToPoint(E.start),S=y.plane.distanceToPoint(E.end);return gn(A)?gn(S)?h(y,_,b,w):(b&&(b.start.copy(E.start),b.end.copy(E.start)),y.containsPoint(E.start)):gn(S)?(b&&(b.start.copy(E.end),b.end.copy(E.end)),y.containsPoint(E.end)):y.plane.intersectLine(E,n)!=null?(b&&(b.start.copy(n),b.end.copy(n)),y.containsPoint(n)):!1}function m(y,_,b){const w=_.a;return gn(y.plane.distanceToPoint(w))&&y.containsPoint(w)?(b&&(b.start.copy(w),b.end.copy(w)),!0):!1}function p(y,_,b){const w=y.degenerateSegment,E=_.a;return w.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<Yh?(b&&(b.start.copy(E),b.end.copy(E)),!0):!1}function v(y,_,b,w){if(y.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){const E=y.degenerateSegment,A=_.degenerateSegment,S=s,M=r;E.delta(S),A.delta(M);const R=n.subVectors(A.start,E.start),I=S.x*M.y-S.y*M.x;if(gn(I))return!1;const P=(R.x*M.y-R.y*M.x)/I,U=-(S.x*R.y-S.y*R.x)/I;if(P<0||P>1||U<0||U>1)return!1;const F=E.start.z+S.z*P,k=A.start.z+M.z*U;return gn(F-k)?(b&&(b.start.copy(E.start).addScaledVector(S,P),b.end.copy(E.start).addScaledVector(S,P)),!0):!1}else return _.isDegenerateIntoPoint?p(y,_,b):x(_,y,b,w);else{if(y.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(y.a)<Yh?(b&&(b.start.copy(y.a),b.end.copy(y.a)),!0):!1:_.isDegenerateIntoSegment?p(_,y,b):m(_,y,b);if(_.isDegenerateIntoPoint)return m(y,_,b);if(_.isDegenerateIntoSegment)return x(y,_,b,w)}}return function(_,b=null,w=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(i.copy(_),i.update(),_=i);const E=v(this,_,b,w);if(E!==void 0)return E;const A=this.plane,S=_.plane;let M=S.distanceToPoint(this.a),R=S.distanceToPoint(this.b),I=S.distanceToPoint(this.c);gn(M)&&(M=0),gn(R)&&(R=0),gn(I)&&(I=0);const P=M*R,U=M*I;if(P>0&&U>0)return!1;let F=A.distanceToPoint(_.a),k=A.distanceToPoint(_.b),q=A.distanceToPoint(_.c);gn(F)&&(F=0),gn(k)&&(k=0),gn(q)&&(q=0);const V=F*k,it=F*q;if(V>0&&it>0)return!1;s.copy(A.normal),r.copy(S.normal);const rt=s.cross(r);let pt=0,It=Math.abs(rt.x);const Gt=Math.abs(rt.y);Gt>It&&(It=Gt,pt=1),Math.abs(rt.z)>It&&(pt=2);const et=CS[pt],dt=this.a[et],X=this.b[et],tt=this.c[et],xt=_.a[et],At=_.b[et],$t=_.c[et];if(g(this,dt,X,tt,P,U,M,R,I,u,a))return h(this,_,b,w);if(g(_,xt,At,$t,V,it,F,k,q,d,c))return h(this,_,b,w);if(u.y<u.x){const Ut=u.y;u.y=u.x,u.x=Ut,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(d.y<d.x){const Ut=d.y;d.y=d.x,d.x=Ut,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<d.x||d.y<u.x?!1:(b&&(d.x>u.x?b.start.copy(c.start):b.start.copy(a.start),d.y<u.y?b.end.copy(c.end):b.end.copy(a.end)),!0)}})();Un.prototype.distanceToPoint=(function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Un.prototype.distanceToTriangle=(function(){const i=new D,t=new D,e=["a","b","c"],n=new si,s=new si;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let d=0;d<3;d++){let h;const f=e[d],g=o[f];this.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<u&&(u=h,a&&a.copy(i),c&&c.copy(g));const x=this[f];o.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<u&&(u=h,a&&a.copy(x),c&&c.copy(i))}for(let d=0;d<3;d++){const h=e[d],f=e[(d+1)%3];n.set(this[h],this[f]);for(let g=0;g<3;g++){const x=e[g],m=e[(g+1)%3];s.set(o[x],o[m]),nu(n,s,i,t);const p=i.distanceToSquared(t);p<u&&(u=p,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}})();class Ke{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Wt,this.invMatrix=new Wt,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new oi),this.alignedSatBounds=new Array(3).fill().map(()=>new oi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ke.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){const h=1*l|2*u|4*d,f=s[h];f.x=l?n.x:e.x,f.y=u?n.y:e.y,f.z=d?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){const u=o[l],d=r[l],h=1<<l,f=s[h];u.subVectors(a,f),d.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ke.prototype.intersectsBox=(function(){const i=new oi;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}})();Ke.prototype.intersectsTriangle=(function(){const i=new Un,t=new Array(3),e=new oi,n=new oi,s=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const f=a[h],g=c[h];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,d=this.points;for(let h=0;h<3;h++){const f=l[h],g=u[h];if(e.setFromPoints(g,d),f.isSeparated(e))return!1}for(let h=0;h<3;h++){const f=c[h];for(let g=0;g<4;g++){const x=u[g];if(s.crossVectors(f,x),e.setFromPoints(s,t),n.setFromPoints(s,d),e.isSeparated(n))return!1}}return!0}})();Ke.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ke.prototype.distanceToPoint=(function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ke.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new si),e=new Array(12).fill().map(()=>new si),n=new D,s=new D;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=a*a,d=o.min,h=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(d,h);const v=p.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(s),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const y=(m+1)%3,_=(m+2)%3,b=p<<y|v<<_,w=1<<m|p<<y|v<<_,E=f[b],A=f[w];t[x].set(E,A);const M=i[m],R=i[y],I=i[_],P=e[x],U=P.start,F=P.end;U[M]=d[M],U[R]=p?d[R]:h[R],U[I]=v?d[I]:h[R],F[M]=h[M],F[R]=p?d[R]:h[R],F[I]=v?d[I]:h[R],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){s.x=m?h.x:d.x,s.y=p?h.y:d.y,s.z=v?h.z:d.z,this.closestPointToPoint(s,n);const y=s.distanceToSquared(n);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(s),y<u))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=t[m];for(let v=0;v<12;v++){const y=e[v];nu(p,y,n,s);const _=n.distanceToSquared(s);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}})();class RS extends tu{constructor(){super(()=>new Un)}}const yn=new RS,pr=new D,gc=new D;function PS(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(pr.copy(t).clamp(u.min,u.max),pr.distanceToSquared(t)),intersectsBounds:(u,d,h)=>h<a&&h<o,intersectsTriangle:(u,d)=>{u.closestPointToPoint(t,pr);const h=t.distanceToSquared(pr);return h<a&&(gc.copy(pr),a=h,c=d),h<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(gc):e.point=gc.clone(),e.distance=l,e.faceIndex=c,e}const Do=parseInt(Br)>=169,LS=parseInt(Br)<=161,Xi=new D,qi=new D,Yi=new D,Uo=new Lt,No=new Lt,Fo=new Lt,Zh=new D,jh=new D,$h=new D,mr=new D;function IS(i,t,e,n,s,r,o,a){let c;if(r===Ye?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==un,s),c===null)return null;const l=i.origin.distanceTo(s);return l<o||l>a?null:{distance:l,point:s.clone()}}function Kh(i,t,e,n,s,r,o,a,c,l,u){Xi.fromBufferAttribute(t,r),qi.fromBufferAttribute(t,o),Yi.fromBufferAttribute(t,a);const d=IS(i,Xi,qi,Yi,mr,c,l,u);if(d){if(n){Uo.fromBufferAttribute(n,r),No.fromBufferAttribute(n,o),Fo.fromBufferAttribute(n,a),d.uv=new Lt;const f=De.getInterpolation(mr,Xi,qi,Yi,Uo,No,Fo,d.uv);Do||(d.uv=f)}if(s){Uo.fromBufferAttribute(s,r),No.fromBufferAttribute(s,o),Fo.fromBufferAttribute(s,a),d.uv1=new Lt;const f=De.getInterpolation(mr,Xi,qi,Yi,Uo,No,Fo,d.uv1);Do||(d.uv1=f),LS&&(d.uv2=d.uv1)}if(e){Zh.fromBufferAttribute(e,r),jh.fromBufferAttribute(e,o),$h.fromBufferAttribute(e,a),d.normal=new D;const f=De.getInterpolation(mr,Xi,qi,Yi,Zh,jh,$h,d.normal);d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1),Do||(d.normal=f)}const h={a:r,b:o,c:a,normal:new D,materialIndex:0};if(De.getNormal(Xi,qi,Yi,h.normal),d.face=h,d.faceIndex=r,Do){const f=new D;De.getBarycoord(mr,Xi,qi,Yi,f),d.barycoord=f}}return d}function Jh(i){return i&&i.isMaterial?i.side:i}function Ea(i,t,e,n,s,r,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const{index:d,groups:h}=i;i.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));const{position:f,normal:g,uv:x,uv1:m}=i.attributes;if(Array.isArray(t)){const p=n*3;for(let v=0,y=h.length;v<y;v++){const{start:_,count:b,materialIndex:w}=h[v];if(p>=_&&p<_+b){const E=Jh(t[w]),A=Kh(e,f,g,x,m,c,l,u,E,r,o);if(A)if(A.faceIndex=n,A.face.materialIndex=w,s)s.push(A);else return A}}}else{const p=Jh(t),v=Kh(e,f,g,x,m,c,l,u,p,r,o);if(v)if(v.faceIndex=n,v.face.materialIndex=0,s)s.push(v);else return v}return null}function Se(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function DS(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,d=n+s;u<d;u++)Ea(c,t,e,u,r,o,a)}function US(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,u=null;for(let d=n,h=n+s;d<h;d++){let f;f=Ea(a,t,e,d,null,r,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function NS(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,d=t+i;u<d;u++){let h;if(h=u,Se(o,h*3,c,l),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function FS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=i._roots;for(let h=0,f=u.length;h<f;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),d(0,l),l+=r.byteLength;function d(h,f,g=!1){const x=h*2;if(ve(x,a)){const m=Pe(h,o),p=He(x,a);let v=1/0,y=1/0,_=1/0,b=-1/0,w=-1/0,E=-1/0;for(let A=3*m,S=3*(m+p);A<S;A++){let M=n[A];const R=s.getX(M),I=s.getY(M),P=s.getZ(M);R<v&&(v=R),R>b&&(b=R),I<y&&(y=I),I>w&&(w=I),P<_&&(_=P),P>E&&(E=P)}return c[h+0]!==v||c[h+1]!==y||c[h+2]!==_||c[h+3]!==b||c[h+4]!==w||c[h+5]!==E?(c[h+0]=v,c[h+1]=y,c[h+2]=_,c[h+3]=b,c[h+4]=w,c[h+5]=E,!0):!1}else{const m=we(h),p=Te(h,o);let v=g,y=!1,_=!1;if(t){if(!v){const M=m/Ee+f/ke,R=p/Ee+f/ke;y=t.has(M),_=t.has(R),v=!y&&!_}}else y=!0,_=!0;const b=v||y,w=v||_;let E=!1;b&&(E=d(m,f,v));let A=!1;w&&(A=d(p,f,v));const S=E||A;if(S)for(let M=0;M<3;M++){const R=m+M,I=p+M,P=c[R],U=c[R+3],F=c[I],k=c[I+3];c[h+M]=P<F?P:F,c[h+M+3]=U>k?U:k}return S}}}function Di(i,t,e,n,s){let r,o,a,c,l,u;const d=1/e.direction.x,h=1/e.direction.y,f=1/e.direction.z,g=e.origin.x,x=e.origin.y,m=e.origin.z;let p=t[i],v=t[i+3],y=t[i+1],_=t[i+3+1],b=t[i+2],w=t[i+3+2];return d>=0?(r=(p-g)*d,o=(v-g)*d):(r=(v-g)*d,o=(p-g)*d),h>=0?(a=(y-x)*h,c=(_-x)*h):(a=(_-x)*h,c=(y-x)*h),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),f>=0?(l=(b-m)*f,u=(w-m)*f):(l=(w-m)*f,u=(b-m)*f),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=s&&o>=n)}function BS(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,d=n+s;u<d;u++){let h=l?l[u]:u;Ea(c,t,e,h,r,o,a)}}function zS(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,u=null;for(let d=n,h=n+s;d<h;d++){let f;f=Ea(a,t,e,c?c[d]:d,null,r,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function OS(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,d=t+i;u<d;u++){let h;if(h=e.resolveTriangleIndex(u),Se(o,h*3,c,l),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function kS(i,t,e,n,s,r,o){he.setBuffer(i._roots[t]),Ml(0,i,e,n,s,r,o),he.clearBuffer()}function Ml(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=he,u=i*2;if(ve(u,c)){const h=Pe(i,l),f=He(u,c);DS(t,e,n,h,f,s,r,o)}else{const h=we(i);Di(h,a,n,r,o)&&Ml(h,t,e,n,s,r,o);const f=Te(i,l);Di(f,a,n,r,o)&&Ml(f,t,e,n,s,r,o)}}const HS=["x","y","z"];function VS(i,t,e,n,s,r){he.setBuffer(i._roots[t]);const o=Sl(0,i,e,n,s,r);return he.clearBuffer(),o}function Sl(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=he;let l=i*2;if(ve(l,a)){const d=Pe(i,c),h=He(l,a);return US(t,e,n,d,h,s,r)}else{const d=Ql(i,c),h=HS[d],g=n.direction[h]>=0;let x,m;g?(x=we(i),m=Te(i,c)):(x=Te(i,c),m=we(i));const v=Di(x,o,n,s,r)?Sl(x,t,e,n,s,r):null;if(v){const b=v.point[h];if(g?b<=o[m+d]:b>=o[m+d+3])return v}const _=Di(m,o,n,s,r)?Sl(m,t,e,n,s,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}const Bo=new _e,ws=new Un,Ts=new Un,gr=new Wt,Qh=new Ke,zo=new Ke;function GS(i,t,e,n){he.setBuffer(i._roots[t]);const s=bl(0,i,e,n);return he.clearBuffer(),s}function bl(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=he;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Qh.set(e.boundingBox.min,e.boundingBox.max,n),s=Qh),ve(c,o)){const u=t.geometry,d=u.index,h=u.attributes.position,f=e.index,g=e.attributes.position,x=Pe(i,a),m=He(c,o);if(gr.copy(n).invert(),e.boundsTree)return me(i,r,zo),zo.matrix.copy(gr),zo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>zo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=x*3,_=(m+x)*3;y<_;y+=3)if(Se(Ts,y,d,h),Ts.needsUpdate=!0,v.intersectsTriangle(Ts))return!0;return!1}});{const p=ba(e);for(let v=x*3,y=(m+x)*3;v<y;v+=3){Se(ws,v,d,h),ws.a.applyMatrix4(gr),ws.b.applyMatrix4(gr),ws.c.applyMatrix4(gr),ws.needsUpdate=!0;for(let _=0,b=p*3;_<b;_+=3)if(Se(Ts,_,f,g),Ts.needsUpdate=!0,ws.intersectsTriangle(Ts))return!0}}}else{const u=we(i),d=Te(i,a);return me(u,r,Bo),!!(s.intersectsBox(Bo)&&bl(u,t,e,n,s)||(me(d,r,Bo),s.intersectsBox(Bo)&&bl(d,t,e,n,s)))}}const Oo=new Wt,_c=new Ke,_r=new Ke,WS=new D,XS=new D,qS=new D,YS=new D;function ZS(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),_c.set(t.boundingBox.min,t.boundingBox.max,e),_c.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,d=t.index,h=yn.getPrimitive(),f=yn.getPrimitive();let g=WS,x=XS,m=null,p=null;s&&(m=qS,p=YS);let v=1/0,y=null,_=null;return Oo.copy(e).invert(),_r.matrix.copy(Oo),i.shapecast({boundsTraverseOrder:b=>_c.distanceToBox(b),intersectsBounds:(b,w,E)=>E<v&&E<o?(w&&(_r.min.copy(b.min),_r.max.copy(b.max),_r.needsUpdate=!0),!0):!1,intersectsRange:(b,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>_r.distanceToBox(A),intersectsBounds:(A,S,M)=>M<v&&M<o,intersectsRange:(A,S)=>{for(let M=A,R=A+S;M<R;M++){Se(f,3*M,d,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let I=b,P=b+w;I<P;I++){Se(h,3*I,l,c),h.needsUpdate=!0;const U=h.distanceToTriangle(f,g,m);if(U<v&&(x.copy(g),p&&p.copy(m),v=U,y=I,_=M),U<r)return!0}}}});{const E=ba(t);for(let A=0,S=E;A<S;A++){Se(f,3*A,d,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=b,R=b+w;M<R;M++){Se(h,3*M,l,c),h.needsUpdate=!0;const I=h.distanceToTriangle(f,g,m);if(I<v&&(x.copy(g),p&&p.copy(m),v=I,y=M,_=A),I<r)return!0}}}}}),yn.releasePrimitive(h),yn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Oo),x.applyMatrix4(Oo),s.distance=x.sub(s.point).length(),s.faceIndex=_),n)}function jS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=i._roots;for(let h=0,f=u.length;h<f;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),d(0,l),l+=r.byteLength;function d(h,f,g=!1){const x=h*2;if(ve(x,a)){const m=Pe(h,o),p=He(x,a);let v=1/0,y=1/0,_=1/0,b=-1/0,w=-1/0,E=-1/0;for(let A=m,S=m+p;A<S;A++){const M=3*i.resolveTriangleIndex(A);for(let R=0;R<3;R++){let I=M+R;I=n?n[I]:I;const P=s.getX(I),U=s.getY(I),F=s.getZ(I);P<v&&(v=P),P>b&&(b=P),U<y&&(y=U),U>w&&(w=U),F<_&&(_=F),F>E&&(E=F)}}return c[h+0]!==v||c[h+1]!==y||c[h+2]!==_||c[h+3]!==b||c[h+4]!==w||c[h+5]!==E?(c[h+0]=v,c[h+1]=y,c[h+2]=_,c[h+3]=b,c[h+4]=w,c[h+5]=E,!0):!1}else{const m=we(h),p=Te(h,o);let v=g,y=!1,_=!1;if(t){if(!v){const M=m/Ee+f/ke,R=p/Ee+f/ke;y=t.has(M),_=t.has(R),v=!y&&!_}}else y=!0,_=!0;const b=v||y,w=v||_;let E=!1;b&&(E=d(m,f,v));let A=!1;w&&(A=d(p,f,v));const S=E||A;if(S)for(let M=0;M<3;M++){const R=m+M,I=p+M,P=c[R],U=c[R+3],F=c[I],k=c[I+3];c[h+M]=P<F?P:F,c[h+M+3]=U>k?U:k}return S}}}function $S(i,t,e,n,s,r,o){he.setBuffer(i._roots[t]),El(0,i,e,n,s,r,o),he.clearBuffer()}function El(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=he,u=i*2;if(ve(u,c)){const h=Pe(i,l),f=He(u,c);BS(t,e,n,h,f,s,r,o)}else{const h=we(i);Di(h,a,n,r,o)&&El(h,t,e,n,s,r,o);const f=Te(i,l);Di(f,a,n,r,o)&&El(f,t,e,n,s,r,o)}}const KS=["x","y","z"];function JS(i,t,e,n,s,r){he.setBuffer(i._roots[t]);const o=wl(0,i,e,n,s,r);return he.clearBuffer(),o}function wl(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=he;let l=i*2;if(ve(l,a)){const d=Pe(i,c),h=He(l,a);return zS(t,e,n,d,h,s,r)}else{const d=Ql(i,c),h=KS[d],g=n.direction[h]>=0;let x,m;g?(x=we(i),m=Te(i,c)):(x=Te(i,c),m=we(i));const v=Di(x,o,n,s,r)?wl(x,t,e,n,s,r):null;if(v){const b=v.point[h];if(g?b<=o[m+d]:b>=o[m+d+3])return v}const _=Di(m,o,n,s,r)?wl(m,t,e,n,s,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}const ko=new _e,As=new Un,Cs=new Un,xr=new Wt,td=new Ke,Ho=new Ke;function QS(i,t,e,n){he.setBuffer(i._roots[t]);const s=Tl(0,i,e,n);return he.clearBuffer(),s}function Tl(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=he;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),td.set(e.boundingBox.min,e.boundingBox.max,n),s=td),ve(c,o)){const u=t.geometry,d=u.index,h=u.attributes.position,f=e.index,g=e.attributes.position,x=Pe(i,a),m=He(c,o);if(xr.copy(n).invert(),e.boundsTree)return me(i,r,Ho),Ho.matrix.copy(xr),Ho.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Ho.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=x,_=m+x;y<_;y++)if(Se(Cs,3*t.resolveTriangleIndex(y),d,h),Cs.needsUpdate=!0,v.intersectsTriangle(Cs))return!0;return!1}});{const p=ba(e);for(let v=x,y=m+x;v<y;v++){const _=t.resolveTriangleIndex(v);Se(As,3*_,d,h),As.a.applyMatrix4(xr),As.b.applyMatrix4(xr),As.c.applyMatrix4(xr),As.needsUpdate=!0;for(let b=0,w=p*3;b<w;b+=3)if(Se(Cs,b,f,g),Cs.needsUpdate=!0,As.intersectsTriangle(Cs))return!0}}}else{const u=we(i),d=Te(i,a);return me(u,r,ko),!!(s.intersectsBox(ko)&&Tl(u,t,e,n,s)||(me(d,r,ko),s.intersectsBox(ko)&&Tl(d,t,e,n,s)))}}const Vo=new Wt,xc=new Ke,vr=new Ke,tb=new D,eb=new D,nb=new D,ib=new D;function sb(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),xc.set(t.boundingBox.min,t.boundingBox.max,e),xc.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,d=t.index,h=yn.getPrimitive(),f=yn.getPrimitive();let g=tb,x=eb,m=null,p=null;s&&(m=nb,p=ib);let v=1/0,y=null,_=null;return Vo.copy(e).invert(),vr.matrix.copy(Vo),i.shapecast({boundsTraverseOrder:b=>xc.distanceToBox(b),intersectsBounds:(b,w,E)=>E<v&&E<o?(w&&(vr.min.copy(b.min),vr.max.copy(b.max),vr.needsUpdate=!0),!0):!1,intersectsRange:(b,w)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:A=>vr.distanceToBox(A),intersectsBounds:(A,S,M)=>M<v&&M<o,intersectsRange:(A,S)=>{for(let M=A,R=A+S;M<R;M++){const I=E.resolveTriangleIndex(M);Se(f,3*I,d,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let P=b,U=b+w;P<U;P++){const F=i.resolveTriangleIndex(P);Se(h,3*F,l,c),h.needsUpdate=!0;const k=h.distanceToTriangle(f,g,m);if(k<v&&(x.copy(g),p&&p.copy(m),v=k,y=P,_=M),k<r)return!0}}}})}else{const E=ba(t);for(let A=0,S=E;A<S;A++){Se(f,3*A,d,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=b,R=b+w;M<R;M++){const I=i.resolveTriangleIndex(M);Se(h,3*I,l,c),h.needsUpdate=!0;const P=h.distanceToTriangle(f,g,m);if(P<v&&(x.copy(g),p&&p.copy(m),v=P,y=M,_=A),P<r)return!0}}}}}),yn.releasePrimitive(h),yn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Vo),x.applyMatrix4(Vo),s.distance=x.sub(s.point).length(),s.faceIndex=_),n)}function ed(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const Go=new Ke,Wo=new Or,nd=new D,id=new Wt,sd=new D,vc=["getX","getY","getZ"];class pa extends wS{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const a=new pa(e,{...n,[Jl]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const u=new xe(t.index,1,!1);e.setIndex(u)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a;function c(l){for(let u=0;u<l.length;u++){const d=l[u],h=new Uint32Array(d),f=new Uint16Array(d);for(let g=0,x=d.byteLength/ke;g<x;g++){const m=Ee*g,p=2*m;ve(p,f)||(h[m+6]=h[m+6]/Ee-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=(r?r[t]:t)*3;let u=l+0,d=l+1,h=l+2;a&&(u=a[u],d=a[d],h=a[h]);for(let f=0;f<3;f++){const g=o[vc[f]](u),x=o[vc[f]](d),m=o[vc[f]](h);let p=g;x<p&&(p=x),m<p&&(p=m);let v=g;x>v&&(v=x),m>v&&(v=m),e[n+f]=p,e[n+f+3]=v}return e}computePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=o.array,u=o.offset||0;let d=3;o.isInterleavedBufferAttribute&&(d=o.data.stride);const h=["getX","getY","getZ"],f=n.offset;for(let g=t,x=t+e;g<x;g++){const p=(r?r[g]:g)*3,v=(g-f)*6;let y=p+0,_=p+1,b=p+2;a&&(y=a[y],_=a[_],b=a[b]),c||(y=y*d+u,_=_*d+u,b=b*d+u);for(let w=0;w<3;w++){let E,A,S;c?(E=o[h[w]](y),A=o[h[w]](_),S=o[h[w]](b)):(E=l[y+w],A=l[_+w],S=l[b+w]);let M=E;A<M&&(M=A),S<M&&(M=S);let R=E;A>R&&(R=A),S>R&&(R=S);const I=(R-M)/2,P=w*2;n[v+P+0]=M+I,n[v+P+1]=I+(Math.abs(M)+I)*na}}return n}raycastObject3D(t,e,n=[]){const{material:s}=t;if(s===void 0)return;id.copy(t.matrixWorld).invert(),Wo.copy(e.ray).applyMatrix4(id),sd.setFromMatrixScale(t.matrixWorld),nd.copy(Wo.direction).multiply(sd);const r=nd.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(Wo,s,o,a);c=ed(c,t,e),c&&n.push(c)}else{const c=this.raycast(Wo,s,o,a);for(let l=0,u=c.length;l<u;l++){const d=ed(c[l],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?jS:FS)(this,t)}raycast(t,e=zn,n=0,s=1/0){const r=this._roots,o=[],a=this.indirect?$S:kS;for(let c=0,l=r.length;c<l;c++)a(this,c,e,t,o,n,s);return o}raycastFirst(t,e=zn,n=0,s=1/0){const r=this._roots;let o=null;const a=this.indirect?JS:VS;for(let c=0,l=r.length;c<l;c++){const u=a(this,c,e,t,n,s);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?QS:GS;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=yn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?OS:NS});return yn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=yn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Se(o,x*3,a,c)}:g=>{Se(o,g*3,a,c)},u=yn.getPrimitive(),d=t.geometry.index,h=t.geometry.attributes.position,f=t.indirect?g=>{const x=t.resolveTriangleIndex(g);Se(u,x*3,d,h)}:g=>{Se(u,g*3,d,h)};if(r){if(!(t instanceof pa))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(x,m,p,v,y,_,b,w)=>{for(let E=p,A=p+v;E<A;E++){f(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=x,M=x+m;S<M;S++)if(l(S),o.needsUpdate=!0,r(o,u,S,E,y,_,b,w))return!0}return!1};if(s){const x=s;s=function(m,p,v,y,_,b,w,E){return x(m,p,v,y,_,b,w,E)?!0:g(m,p,v,y,_,b,w,E)}}else s=g}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return Go.set(t.min,t.max,e),Go.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Go.intersectsBox(n),intersectsTriangle:n=>Go.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?sb:ZS)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return PS(this,t,e,n,s)}}const Ps={Mesh:ue.prototype.raycast,Line:ya.prototype.raycast,LineSegments:jd.prototype.raycast,LineLoop:$d.prototype.raycast,Points:Kd.prototype.raycast,BatchedMesh:iv.prototype.raycast},Le=new ue,Xo=[];function rb(i,t){if(this.isBatchedMesh)ob.call(this,i,t);else{const{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,i,t);else{let n;if(this instanceof ue)n=Ps.Mesh;else if(this instanceof jd)n=Ps.LineSegments;else if(this instanceof $d)n=Ps.LineLoop;else if(this instanceof ya)n=Ps.Line;else if(this instanceof Kd)n=Ps.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,t)}}}function ob(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Le.material=this.material,Le.geometry=this.geometry;const o=Le.geometry.boundsTree,a=Le.geometry.drawRange;Le.geometry.boundingSphere===null&&(Le.geometry.boundingSphere=new Mn);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const u=n[c].geometryIndex;if(Le.geometry.boundsTree=e[u],this.getMatrixAt(c,Le.matrixWorld).premultiply(r),!Le.geometry.boundsTree){this.getBoundingBoxAt(u,Le.geometry.boundingBox),this.getBoundingSphereAt(u,Le.geometry.boundingSphere);const d=s[u];Le.geometry.setDrawRange(d.start,d.count)}Le.raycast(i,Xo);for(let d=0,h=Xo.length;d<h;d++){const f=Xo[d];f.object=this,f.batchId=c,t.push(f)}Xo.length=0}Le.geometry.boundsTree=o,Le.geometry.drawRange=a,Le.material=null,Le.geometry=null}else Ps.BatchedMesh.call(this,i,t)}function ab(i={}){const{type:t=pa}=i;return this.boundsTree=new t(this,i),this.boundsTree}function cb(){this.boundsTree=null}ue.prototype.raycast=rb;be.prototype.computeBoundsTree=ab;be.prototype.disposeBoundsTree=cb;const lb=new D(0,-1,0),rd=new D,Al=new Ma;Al.firstHitOnly=!0;function od(i,t,e,n){var a;const s=Array.isArray(i)?i:[i],r=Qs(s,t,e)??s[0];return r?(rd.set(t,120,e),Al.set(rd,lb),((a=Al.intersectObject(r,!1)[0])==null?void 0:a.point.y)??n):n}const qo=new D,ad=new D,Ie=new D,ub=new D(0,1.55,0),cd=new D,yr=new D,Yo=new D,Mr=new D,sa=new Ma;sa.firstHitOnly=!0;const ld=-Math.PI/2+.06,ud=Math.PI/2-.06,hb=1.1;class Rf{constructor(t,e,n,s={}){de(this,"rig",new Jt);de(this,"keys",new Set);de(this,"stick",new Lt);de(this,"yaw");de(this,"pitch");de(this,"flying",!1);de(this,"terrains");de(this,"bounds");de(this,"lastX",Number.NaN);de(this,"lastZ",Number.NaN);de(this,"flyLatch",!1);this.camera=t,this.sample=e,this.terrains=Array.isArray(n)?n:[n],this.bounds=s,this.yaw=s.startYaw??-Math.PI/2;const r=s.camDist??7.5;this.pitch=s.startPitch??Math.atan2(s.camHeight??3.1,r);const o=new ue(new Pi(.55,1.35,.4),new Mh({color:12886874,roughness:.7}));o.position.y=.85,o.castShadow=!0;const a=new ue(new Pi(.42,.42,.42),new Mh({color:15787732}));a.position.y=1.62,this.rig.add(o,a)}bind(t,e){const n=a=>{const c=a.key.toLowerCase();(c===" "||c==="f")&&a.preventDefault(),this.keys.add(c)},s=a=>this.keys.delete(a.key.toLowerCase());window.addEventListener("keydown",n),window.addEventListener("keyup",s);const r=a=>{document.pointerLockElement===t&&(this.yaw-=a.movementX*.0024,this.pitch+=a.movementY*.0022,this.pitch<ld&&(this.pitch=ld),this.pitch>ud&&(this.pitch=ud))},o=()=>{t.requestPointerLock()};return t.addEventListener("click",o),document.addEventListener("mousemove",r),e&&db(e,this.stick),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s),document.removeEventListener("mousemove",r),t.removeEventListener("click",o),document.exitPointerLock()}}toggleFly(){this.flying=!this.flying,this.flying||this.snapToGround()}meshAt(t,e){return Qs(this.terrains,t,e)??this.terrains[0]}snapToGround(){const t=this.rig.position.x,e=this.rig.position.z,n=this.bounds.seaLevel??hn,s=this.meshAt(t,e),r=s?od(s,t,e,ha(s,t,e,this.sample(t,e))):this.sample(t,e);this.rig.position.y=Math.max(n+.12,r),this.lastX=t,this.lastZ=e}update(t){const e=this.keys.has("f");e&&!this.flyLatch&&this.toggleFly(),this.flyLatch=e,Ie.set(0,0,0),(this.keys.has("w")||this.keys.has("arrowup"))&&(Ie.z-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(Ie.z+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(Ie.x-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(Ie.x+=1),Ie.x+=this.stick.x,Ie.z+=this.stick.y,qo.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),ad.set(qo.z,0,-qo.x);const n=Ie.x,s=Ie.z;Ie.set(0,0,0),Ie.addScaledVector(qo,s),Ie.addScaledVector(ad,n),Ie.y=0,Ie.lengthSq()>1e-8&&Ie.normalize();const r=this.keys.has("shift")?14:7.2,o=this.rig.position.x,a=this.rig.position.z,c=this.rig.position.y;if(this.rig.position.addScaledVector(Ie,r*t),this.rig.rotation.y=this.yaw,this.flying){let _=0;(this.keys.has(" ")||this.keys.has("e"))&&(_+=1),this.keys.has("q")&&(_-=1),this.rig.position.y+=_*r*t}const{minX:l,maxX:u,minZ:d,maxZ:h}=this.bounds;l!==void 0&&(this.rig.position.x=Math.max(l,this.rig.position.x)),u!==void 0&&(this.rig.position.x=Math.min(u,this.rig.position.x)),d!==void 0&&(this.rig.position.z=Math.max(d,this.rig.position.z)),h!==void 0&&(this.rig.position.z=Math.min(h,this.rig.position.z));const f=this.rig.position.x,g=this.rig.position.z,x=this.bounds.seaLevel??hn;if(!this.flying&&(f!==this.lastX||g!==this.lastZ)){const _=this.meshAt(f,g),b=_?Vr(_,f,g,this.sample(f,g)):{y:this.sample(f,g)},w=Math.max(x+.12,_?od(_,f,g,b.y):b.y);w>c+hb&&Ie.lengthSq()>0?(this.rig.position.x=o,this.rig.position.z=a):(this.lastX=f,this.lastZ=g,this.rig.position.y=w)}yr.copy(this.rig.position).add(ub);const m=this.bounds.camDist??7.5,p=this.pitch,v=Math.cos(p)*m;cd.set(Math.sin(this.yaw)*v,Math.sin(p)*m,Math.cos(this.yaw)*v),Yo.copy(yr).add(cd),Mr.copy(Yo).sub(yr);const y=Mr.length();if(y>.1){Mr.multiplyScalar(1/y),sa.set(yr,Mr),sa.far=y;const b=sa.intersectObjects(this.terrains,!1)[0];b&&b.distance<y-.25&&Yo.copy(b.point).addScaledVector(Mr,-.5)}this.camera.position.lerp(Yo,.92),this.camera.lookAt(yr)}teleport(t,e){this.rig.position.x=t,this.rig.position.z=e,this.lastX=t,this.lastZ=e,!this.flying&&this.snapToGround()}}function db(i,t){const e=i.querySelector(".knob"),n=(o,a)=>{const c=i.getBoundingClientRect(),l=c.left+c.width/2,u=c.top+c.height/2;let d=(o-l)/42,h=(a-u)/42;const f=Math.hypot(d,h);f>1&&(d/=f,h/=f),t.set(d,h),e.style.left=`${34+d*28}px`,e.style.top=`${34+h*28}px`},s=()=>{t.set(0,0),e.style.left="34px",e.style.top="34px"},r=o=>n(o.clientX,o.clientY);return i.addEventListener("pointerdown",o=>{i.setPointerCapture(o.pointerId),r(o)}),i.addEventListener("pointermove",o=>{i.hasPointerCapture(o.pointerId)&&r(o)}),i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),()=>{}}const fb=[...Yl.map(i=>({id:i,name:ql[i].name,kind:i})),{id:"migu",name:"迷穀",kind:"sang",overlay:{glowSiZhao:!0}}];function pb(i){const e=document.createElement("canvas"),n=new Yd({canvas:e,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});n.setSize(384,384,!1),n.setPixelRatio(1),n.outputColorSpace=sn,n.toneMapping=Rl,n.toneMappingExposure=1.15,n.setClearColor(new wt(J.sky),1);const s=new ln(28,1,.08,120),r=new Qd(J.sky,J.sand,.95),o=new la(16773852,1.2);o.position.set(5,9,4);const a=new la(12113128,.32);a.position.set(-4,5,-6);const c=new _e,l=new D,u=new D,d=[];for(const h of fb){const f=new Zd;f.background=new wt(J.sky),f.add(r.clone()),f.add(o.clone()),f.add(a.clone());const g=da(h.kind,21,i,h.overlay);f.add(g),g.updateMatrixWorld(!0),c.setFromObject(g),c.getCenter(l),c.getSize(u);const x=Math.max(u.x,u.y,u.z,.6)*2.05;s.position.set(l.x+x*.72,l.y+x*.22,l.z+x*.86),s.near=Math.max(.05,x*.02),s.far=x*12,s.updateProjectionMatrix(),s.lookAt(l),n.render(f,s),d.push({id:h.id,name:h.name,src:e.toDataURL("image/png")}),f.clear()}return n.dispose(),d}function mb(i,t){const e=document.createElement("div");e.className="codex-modal hidden",e.innerHTML=`
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
  `,i.appendChild(e);const n=e.querySelector(".codex-list");let s=!1;const r=()=>{if(s)return;s=!0;const a=pb(t);n.innerHTML=a.map(c=>`
      <article class="codex-entry">
        <img src="${c.src}" alt="${c.name}" width="192" height="192" />
        <div>
          <h3>${c.name}</h3>
          <p class="codex-desc">（描述待補）</p>
        </div>
      </article>`).join("")},o=()=>e.classList.add("hidden");return e.querySelector("#codex-close").addEventListener("click",o),e.addEventListener("click",a=>{a.target===e&&o()}),{open(){e.classList.remove("hidden"),r()},close:o}}const tn={center:0,zhong:.155,shan:.3,hai:.415,hainei:.54,haiwai:.69,dahuang:.855},gb=[{ring:"zhong",name:"中山經",r:.155},{ring:"shan",name:"山經",r:.3},{ring:"hai",name:"海",r:.415},{ring:"hainei",name:"海內",r:.54},{ring:"haiwai",name:"海外",r:.69},{ring:"dahuang",name:"大荒",r:.855}],_b=[{name:"北海",deg:0,r:.415},{name:"東海",deg:90,r:.415},{name:"南海",deg:180,r:.415},{name:"西海",deg:270,r:.415}],xb=[{name:"北山經",deg:12,r:.3},{name:"東山經",deg:90,r:.3},{name:"南山經",deg:180,r:.3},{name:"西山經",deg:270,r:.3}];function Ki(i,t){const e=t*Math.PI/180;return{mx:Math.sin(e)*i,my:-Math.cos(e)*i}}const vb=[{id:"pangu",name:"盤古 · 渾沌",jing:"天地未形",ring:"center",dir:"center",deg:0,r:0,walkable:!1,quote:"天地渾沌如雞子。盤古生在其中。萬八千歲。天地開辟。",modern:"盤古開天地，化身為四極五嶽。",mythNote:"不出《山海經》。出《三五曆紀》《述異記》。置於地圖中央渾沌，不作經山。",lockedHint:"開天闢地，尚無九州可履。",featured:!0},{id:"youxi",name:"游戲之山",jing:"中山經",ring:"zhong",dir:"s",deg:150,r:.15,walkable:!1,quote:"又東南三十里，曰游戲之山，多杻橿穀，多玉、多封石。",modern:"中山近畿，杻橿穀木。",lockedHint:"尚未開通。"},{id:"ying",name:"嬰山",jing:"中山經",ring:"zhong",dir:"e",deg:88,r:.14,walkable:!1,quote:"又東四十里，曰嬰山，其下多青䨼，其上多金玉。",modern:"下多青雘，上多金玉。",lockedHint:"尚未開通。"},{id:"ji-zhong",name:"鷄山",jing:"中山經",ring:"zhong",dir:"e",deg:118,r:.165,walkable:!1,quote:"又東南四十里，曰鷄山，其上多美梓，多桑，其草多韭。",modern:"中山鷄山，美梓與桑。與南山經鷄山同名異地。",lockedHint:"尚未開通。"},{id:"yongshi",name:"勇石之山",jing:"中山經",ring:"zhong",dir:"w",deg:238,r:.15,walkable:!1,quote:"又西南二十里，曰勇石之山，無草木，多白金，多水。",modern:"無草木，多白金。",lockedHint:"尚未開通。"},{id:"xiong",name:"熊山",jing:"中山經",ring:"zhong",dir:"n",deg:38,r:.16,walkable:!1,quote:"又東一百五十里，曰熊山。有穴焉，熊之穴，恒出神人。",modern:"熊穴夏啟冬閉，冬啟則有兵。",lockedHint:"尚未開通。"},{id:"zhaoyao",name:"招搖之山",jing:"南山經",ring:"shan",dir:"s",deg:220,r:.3,walkable:!0,worldX:Me("zhaoyao").padX,worldZ:Me("zhaoyao").padZ,quote:"其首曰招搖之山，臨於西海之上，多桂，多金玉。有草焉……名曰祝餘。有木焉……名曰迷穀。有獸焉……名曰狌狌。",modern:"南山首山，西臨大海。迷穀、祝餘、狌狌在此。",featured:!0},{id:"yuanyi",name:"猨翼之山",jing:"南山經",ring:"shan",dir:"s",deg:200,r:.3,walkable:!0,worldX:Me("yuanyi").padX,worldZ:Me("yuanyi").padZ,quote:"又東三百八十里，曰猨翼之山，其中多怪獸，水多怪魚……多怪木，不可以上。",modern:"怪木怪蛇，山霧濃重。",featured:!0},{id:"qingqiu",name:"青丘之山",jing:"南山經",ring:"shan",dir:"s",deg:180,r:.3,walkable:!0,worldX:Me("qingqiu").padX,worldZ:Me("qingqiu").padZ,quote:"又東三百里，曰青丘之山……有獸焉，其狀如狐而九尾，其音如嬰兒，能食人，食者不蠱。",modern:"九尾狐與灌灌鳥。",featured:!0},{id:"danxue",name:"丹穴之山",jing:"南山經",ring:"shan",dir:"s",deg:162,r:.3,walkable:!0,worldX:Me("danxue").padX,worldZ:Me("danxue").padZ,quote:"又東五百里，曰丹穴之山……有鳥焉，其狀如雞，五采而文，名曰鳳皇。",modern:"金玉之山，丹水南注。鳳皇見則天下安寧。",featured:!0},{id:"ji-nanshan",name:"鷄山",jing:"南山經",ring:"shan",dir:"s",deg:145,r:.3,walkable:!0,worldX:Me("ji-nanshan").padX,worldZ:Me("ji-nanshan").padZ,quote:"又東五百里，曰鷄山，其上多金，其下多丹雘。黑水出焉，而南流注于海。",modern:"上金下丹雘，黑水南流。",featured:!0},{id:"nuchuang",name:"女床之山",jing:"西山經",ring:"shan",dir:"w",deg:270,r:.245,walkable:!1,quote:"西南三百里，曰女床之山……有鳥焉，其狀如翟而五彩文，名曰鸞鳥。",modern:"西山內帶。鸞鳥見則天下安寧。",lockedHint:"尚未開通。"},{id:"kunlun-xishan",name:"崑崙之丘",jing:"西山經",ring:"shan",dir:"w",deg:270,r:.29,walkable:!1,quote:"西南四百里，曰崑崙之丘，是實惟帝之下都，神陸吾司之……有木焉……名曰沙棠，可以禦水，食之使人不溺。",modern:"陸吾守帝之下都。沙棠在此，與海內、大荒崑崙同名異層。",lockedHint:"尚未開通。",featured:!0},{id:"yushan",name:"玉山",jing:"西山經",ring:"shan",dir:"w",deg:270,r:.325,walkable:!1,quote:"又西三百五十里，曰玉山，是西王母所居也。西王母其狀如人，豹尾虎齒而善嘯，蓬髮戴勝。",modern:"西王母所居。羿請不死之藥於此。",mythNote:"嫦娥不出《山海經》（《淮南子》）。奔月事掛於西王母之玉山。",lockedHint:"尚未開通。",featured:!0},{id:"tianshan",name:"天山",jing:"西山經",ring:"shan",dir:"w",deg:278,r:.35,walkable:!1,quote:"又西三百五十里，曰天山……有神焉，其狀如黃囊……渾敦無面目，是識歌舞，實惟帝江也。",modern:"帝江居此，渾敦無面目。",lockedHint:"尚未開通。"},{id:"fajiu",name:"發鳩之山",jing:"北山經",ring:"shan",dir:"n",deg:348,r:.3,walkable:!1,quote:"又北二百里，曰發鳩之山，其上多柘木。有鳥焉……名曰精衛……常銜西山之木石，以堙於東海。",modern:"炎帝少女女娃溺於東海，化為精衛。",lockedHint:"尚未開通。",featured:!0},{id:"kuang",name:"狂山",jing:"北山經",ring:"shan",dir:"n",deg:6,r:.3,walkable:!1,quote:"又北三百八十里，曰狂山，無草木。是山也，冬夏有雪。",modern:"冬夏有雪。",lockedHint:"尚未開通。"},{id:"gouwu",name:"鉤吾之山",jing:"北山經",ring:"shan",dir:"n",deg:22,r:.3,walkable:!1,quote:"又北三百五十里，曰鉤吾之山……有獸焉……名曰狍鴞，是食人。",modern:"羊身人面，目在腋下。",lockedHint:"尚未開通。"},{id:"xuanyuan",name:"軒轅之山",jing:"北山經",ring:"shan",dir:"n",deg:38,r:.3,walkable:!1,quote:"又東北二百里，曰軒轅之山……有鳥焉，其狀如梟而白首，其名曰黃鳥，食之不妒。",modern:"多銅，下多竹。",lockedHint:"尚未開通。"},{id:"beihao",name:"北號之山",jing:"東山經",ring:"shan",dir:"e",deg:58,r:.3,walkable:!1,quote:"東次四經之首，曰北號之山，臨于北海。",modern:"東山臨北海。猲狙、鬿雀食人。",lockedHint:"尚未開通。"},{id:"dongshi",name:"東始之山",jing:"東山經",ring:"shan",dir:"e",deg:75,r:.3,walkable:!1,quote:"又南三百二十里，曰東始之山，上多蒼玉。有木焉……其名曰芑，可以服馬。",modern:"東山由北而南。",lockedHint:"尚未開通。"},{id:"zitong",name:"子桐之山",jing:"東山經",ring:"shan",dir:"e",deg:90,r:.3,walkable:!1,quote:"又東南二百里，曰子桐之山。子桐之水出焉……其中多䱻魚……見則天下大旱。",modern:"魚而鳥翼，出入有光。",lockedHint:"尚未開通。"},{id:"chai",name:"豺山",jing:"東山經",ring:"shan",dir:"e",deg:108,r:.3,walkable:!1,quote:"又南三百里，曰豺山，其上無草木，其下多水……有獸焉，其狀如夸父而彘毛，見則天下大水。",modern:"無草木，下多水。",lockedHint:"尚未開通。"},{id:"fuli",name:"鳧麗之山",jing:"東山經",ring:"shan",dir:"e",deg:122,r:.3,walkable:!1,quote:"又南五百里，曰鳧麗之山……有獸焉，其狀如狐，而九尾、九首、虎爪，名曰蠪姪，是食人。",modern:"九尾九首之蠪姪。",lockedHint:"尚未開通。"},{id:"kunlun-xu",name:"崑崙之墟",jing:"海內西經",ring:"hainei",dir:"w",deg:258,r:.54,walkable:!1,quote:"海內崑崙之墟，在西北，帝之下都……門有開明獸守之……非仁羿莫能上岡之巖。",modern:"海內層崑崙。仁羿能上岡，非后羿專山。",mythNote:"《山海經》無后羿之山。羿見於此墟「非仁羿莫能上岡之巖」，賜弓在海內經（本教材未收）。",lockedHint:"尚未開通。",featured:!0},{id:"kaiming",name:"開明獸",jing:"海內西經",ring:"hainei",dir:"w",deg:248,r:.54,walkable:!1,quote:"開明獸身大類虎而九首，皆人面，東嚮立崑崙上。",modern:"九首人面，守崑崙南。",lockedHint:"尚未開通。"},{id:"kaiming-bei",name:"開明北",jing:"海內西經",ring:"hainei",dir:"w",deg:252,r:.505,walkable:!1,quote:"開明北有視肉、珠樹、文玉樹、玕琪樹、不死樹。",modern:"不死樹與鳳凰鸞鳥。",lockedHint:"尚未開通。"},{id:"sanqing-hainei",name:"三青鳥",jing:"海內西經",ring:"hainei",dir:"w",deg:278,r:.54,walkable:!1,quote:"西王母梯几而戴勝。其南有三青鳥，為西王母取食。",modern:"為西王母取食。大荒西經另有三青鳥。",lockedHint:"尚未開通。"},{id:"cangwu",name:"蒼梧之山",jing:"海內南經",ring:"hainei",dir:"s",deg:180,r:.54,walkable:!1,quote:"蒼梧之山，帝舜葬于陽，帝丹朱葬于陰。",modern:"舜葬之山。",lockedHint:"尚未開通。"},{id:"xingxing-hainei",name:"狌狌",jing:"海內南經",ring:"hainei",dir:"s",deg:168,r:.54,walkable:!1,quote:"狌狌知人名，其為獸如豕而人面，在舜葬西。",modern:"與南山招搖之狌狌同名，在蒼梧之西。",lockedHint:"尚未開通。"},{id:"si",name:"兕",jing:"海內南經",ring:"hainei",dir:"s",deg:192,r:.54,walkable:!1,quote:"兕在舜葬東，湘水南，其狀如牛，蒼黑，一角。",modern:"蒼梧之東。",lockedHint:"尚未開通。"},{id:"qiongqi",name:"窮奇",jing:"海內北經",ring:"hainei",dir:"n",deg:0,r:.54,walkable:!1,quote:"窮奇狀如虎，有翼，食人從首始，所食被髮，在蜪犬北。",modern:"虎而有翼。",lockedHint:"尚未開通。"},{id:"youdu",name:"幽都之山",jing:"海內經",ring:"hainei",dir:"n",deg:18,r:.54,walkable:!1,quote:"北海之內，有山，名曰幽都之山，黑水出焉。",modern:"北海之內，玄鳥玄蛇玄豹。",lockedHint:"尚未開通。"},{id:"gunyu",name:"鯀禹治水",jing:"海內經",ring:"hainei",dir:"s",deg:210,r:.52,walkable:!1,quote:"洪水滔天。鯀竊帝之息壤以堙洪水……鯀復生禹。帝乃命禹卒布土以定九州。",modern:"祝融殺鯀于羽郊。禹定九州。",lockedHint:"尚未開通。"},{id:"xingtian",name:"刑天",jing:"海外西經",ring:"haiwai",dir:"w",deg:248,r:.69,walkable:!1,quote:"刑天與帝爭神，帝斷其首，葬之常羊之山，乃以乳為目，以臍為口，操干戚以舞。",modern:"首葬常羊之山。",lockedHint:"尚未開通。",featured:!0},{id:"wuxian",name:"巫咸國",jing:"海外西經",ring:"haiwai",dir:"w",deg:270,r:.69,walkable:!1,quote:"巫咸國在女丑北，右手操青蛇，左手操赤蛇。在登葆山，群巫所從上下也。",modern:"登葆山，群巫升降。",lockedHint:"尚未開通。"},{id:"nuzi",name:"女子國",jing:"海外西經",ring:"haiwai",dir:"w",deg:288,r:.69,walkable:!1,quote:"女子國在巫咸北，兩女子居，水周之。",modern:"水周其國。",lockedHint:"尚未開通。"},{id:"kuafu",name:"夸父",jing:"海外北經",ring:"haiwai",dir:"n",deg:0,r:.69,walkable:!1,quote:"夸父與日逐走，入日。渴欲得飲，飲於河、渭……未至，道渴而死。棄其杖，化為鄧林。",modern:"逐日渴死。大荒北經成都載天亦記夸父。",lockedHint:"尚未開通。",featured:!0},{id:"zhulong",name:"燭龍",jing:"海外北經",ring:"haiwai",dir:"n",deg:22,r:.69,walkable:!1,quote:"鍾山之神，名曰燭陰，視為晝，瞑為夜，吹為冬，呼為夏……人面蛇身，赤色，居鍾山下。",modern:"鍾山之神燭陰。",lockedHint:"尚未開通。"},{id:"zhurong",name:"祝融",jing:"海外南經",ring:"haiwai",dir:"s",deg:180,r:.69,walkable:!1,quote:"南方祝融，獸身人面，乘兩龍。",modern:"南方火神。",lockedHint:"尚未開通。",featured:!0},{id:"biyi",name:"比翼鳥",jing:"海外南經",ring:"haiwai",dir:"s",deg:164,r:.69,walkable:!1,quote:"比翼鳥在其東，其為鳥青、赤，兩鳥比翼。",modern:"青赤比翼。",lockedHint:"尚未開通。"},{id:"yumin",name:"羽民國",jing:"海外南經",ring:"haiwai",dir:"s",deg:152,r:.69,walkable:!1,quote:"羽民國在其東南，其為人長頭，身生羽。",modern:"人而身羽。",lockedHint:"尚未開通。"},{id:"bifang",name:"畢方鳥",jing:"海外南經",ring:"haiwai",dir:"s",deg:192,r:.69,walkable:!1,quote:"畢方鳥在其東，青水西，其為鳥人面一腳。",modern:"人面一腳。",lockedHint:"尚未開通。"},{id:"zhushu",name:"株樹",jing:"海外南經",ring:"haiwai",dir:"s",deg:204,r:.69,walkable:!1,quote:"株樹在厭火北，生赤水上，其為樹如柏，葉皆為珠。",modern:"如柏而葉為珠。",lockedHint:"尚未開通。"},{id:"heichi",name:"黑齒國",jing:"海外東經",ring:"haiwai",dir:"e",deg:72,r:.69,walkable:!1,quote:"黑齒國在其北，為人黑齒，食稻啖蛇，一赤一青，在其旁。",modern:"扶桑之南鄰。",lockedHint:"尚未開通。"},{id:"fusang",name:"扶桑",jing:"海外東經",ring:"haiwai",dir:"e",deg:90,r:.69,walkable:!1,quote:"湯谷上有扶桑，十日所浴，在黑齒北。居水中，有大木，九日居下枝，一日居上枝。",modern:"十日所浴。后羿射日之事掛於此。",mythNote:"《山海經》無后羿之山。射日出《淮南子》。十日在湯谷扶桑；羿上岡見海內西經崑崙之墟。",lockedHint:"尚未開通。",featured:!0},{id:"junzi",name:"君子國",jing:"海外東經",ring:"haiwai",dir:"e",deg:108,r:.69,walkable:!1,quote:"君子國在其北，衣冠帶劍，食獸，使二大虎在旁，其人好讓不爭。",modern:"好讓不爭。",lockedHint:"尚未開通。"},{id:"buzhou",name:"不周之山",jing:"大荒西經",ring:"dahuang",dir:"w",deg:312,r:.855,walkable:!1,quote:"西北海之外，大荒之隅，有山而不合，名曰不周。",modern:"共工怒觸之處。女媧補天之事掛於此柱。",mythNote:"女媧補天不出《山海經》（《淮南子》）。經中女媧之腸在大荒西栗廣之野，本教材未收，故與共工同置不周。",lockedHint:"尚未開通。",featured:!0},{id:"buzhou-fuzi",name:"不周負子",jing:"大荒西經",ring:"dahuang",dir:"w",deg:322,r:.855,walkable:!1,quote:"西北海之外，大荒之隅，有山而不合，名曰不周負子……有禹攻共工國山。",modern:"兩黃獸守之。禹攻共工國山在其側。",lockedHint:"尚未開通。"},{id:"kunlun-dahuang",name:"崑崙之丘",jing:"大荒西經",ring:"dahuang",dir:"w",deg:258,r:.855,walkable:!1,quote:"西海之南，流沙之濱……有大山，名曰崑崙之丘……有人，戴勝，虎齒，有豹尾，穴處，名曰西王母。",modern:"大荒層崑崙。西王母穴處。此山萬物盡有。",lockedHint:"尚未開通。",featured:!0},{id:"lingshan",name:"靈山",jing:"大荒西經",ring:"dahuang",dir:"w",deg:278,r:.855,walkable:!1,quote:"有靈山，巫咸、巫即、巫肦、巫彭、巫姑、巫真、巫禮、巫抵、巫謝、巫羅十巫，從此升降，百藥爰在。",modern:"十巫升降，百藥所在。",lockedHint:"尚未開通。"},{id:"sanqing-dahuang",name:"三青鳥",jing:"大荒西經",ring:"dahuang",dir:"w",deg:288,r:.855,walkable:!1,quote:"有三青鳥，赤首黑目，一名曰大鵹，一名少鵹，一名曰青鳥。",modern:"赤首黑目。海內西經亦有三青鳥。",lockedHint:"尚未開通。"},{id:"wucai",name:"五彩鳥",jing:"大荒西經",ring:"dahuang",dir:"w",deg:242,r:.855,walkable:!1,quote:"有五彩鳥三名：一曰皇鳥，一曰鸞鳥，一曰鳳鳥。",modern:"皇、鸞、鳳。",lockedHint:"尚未開通。"},{id:"changxi",name:"常羲",jing:"大荒西經",ring:"dahuang",dir:"w",deg:230,r:.855,walkable:!1,quote:"有女子方浴月。帝俊妻常羲，生月十有二，此始浴之。",modern:"浴月之處。嫦娥奔月掛於西王母與常羲。",mythNote:"嫦娥不出《山海經》。月神在經為常羲。",lockedHint:"尚未開通。",featured:!0},{id:"gonggong-tai",name:"共工之臺",jing:"大荒北經",ring:"dahuang",dir:"n",deg:0,r:.855,walkable:!1,quote:"有係昆之山者，有共工之臺，射者不敢北嚮。",modern:"黃帝女魃、蚩尤之戰亦記於此篇。",lockedHint:"尚未開通。",featured:!0},{id:"chengdu",name:"成都載天",jing:"大荒北經",ring:"dahuang",dir:"n",deg:22,r:.855,walkable:!1,quote:"大荒之中，有山名曰成都載天。有人珥兩黃蛇，把兩黃蛇，名曰夸父。",modern:"夸父追日，死于此。應龍又殺夸父。",lockedHint:"尚未開通。"},{id:"xihe",name:"羲和",jing:"大荒南經",ring:"dahuang",dir:"s",deg:155,r:.855,walkable:!1,quote:"東南海之外，甘水之間，有羲和之國。有女子名曰羲和，方浴日於甘淵。羲和者，帝俊之妻，是生十日。",modern:"生十日，浴日於甘淵。與扶桑十日相應。",lockedHint:"尚未開通。",featured:!0},{id:"junren",name:"菌人",jing:"大荒南經",ring:"dahuang",dir:"s",deg:188,r:.855,walkable:!1,quote:"有小人名曰菌人。",modern:"大荒南之小人。",lockedHint:"尚未開通。"},{id:"kui",name:"流波山 · 夔",jing:"大荒東經",ring:"dahuang",dir:"e",deg:78,r:.855,walkable:!1,quote:"東海中有流波山，入海七千里。其上有獸……其名曰夔。黃帝得之，以其皮為鼓。",modern:"一足蒼身，出沒則風雨。",lockedHint:"尚未開通。",featured:!0},{id:"nieyao",name:"孽搖頵羝",jing:"大荒東經",ring:"dahuang",dir:"e",deg:98,r:.855,walkable:!1,quote:"大荒之中，有山名曰孽搖頵羝，上有扶木……湯谷上有扶木。一日方至，一日方出，皆載於烏。",modern:"湯谷扶木，十日所出。與海外東經扶桑同叢。",lockedHint:"尚未開通。"}],tr=vb.map(i=>{const{mx:t,my:e}=Ki(i.r,i.deg);return{...i,mx:t,my:e}}),hd=tr.filter(i=>i.walkable),yc=tr.find(i=>i.id==="zhaoyao"),dd=tr.find(i=>i.id==="ji-nanshan");function yb(i,t){const e=yc.worldX??0,n=dd.worldX??1,s=Math.min(1,Math.max(0,(i-e)/(n-e||1))),r=yc.deg+s*(dd.deg-yc.deg),o=tn.shan+t/280*.03;return Ki(o,r)}function Mb(i,t,e){let n,s=e;for(const r of tr){const o=Math.hypot(r.mx-i,r.my-t);o<s&&(s=o,n=r)}return n}const Rn=148,Mc=180;function Sb(i,t){var a,c;const e=document.createElement("button");e.type="button",e.className="minimap",e.title="開啟大地圖",e.setAttribute("aria-label","小地圖，點擊開啟大地圖"),e.innerHTML=`<canvas width="${Rn}" height="${Rn}"></canvas><div class="minimap-place">招搖之山</div>`,e.addEventListener("click",t),i.appendChild(e);const s=e.querySelector("canvas").getContext("2d"),r=e.querySelector(".minimap-place"),o=(l,u,d,h)=>{const f=Rn/2,g=Rn/2,x=Rn/2-2;s.clearRect(0,0,Rn,Rn),s.save(),s.beginPath(),s.arc(f,g,x,0,Math.PI*2),s.clip(),s.fillStyle="#1a2e38",s.fillRect(0,0,Rn,Rn);const m=s.createRadialGradient(f,g,8,f,g,x);m.addColorStop(0,"#2a5a4a"),m.addColorStop(.62,"#244a42"),m.addColorStop(1,"#163038"),s.fillStyle=m,s.fillRect(0,0,Rn,Rn);const p=(E,A)=>{const S=E-l,M=A-u,R=S*Math.cos(d)-M*Math.sin(d),I=S*Math.sin(d)+M*Math.cos(d);return{sx:f+R/Mc*x,sy:g-I/Mc*x}};s.strokeStyle="rgba(196, 163, 90, 0.18)",s.lineWidth=1;for(const E of[18,36,54])s.beginPath(),s.arc(f,g,E/Mc*x,0,Math.PI*2),s.stroke();for(const E of tr){if(E.worldX===void 0)continue;const A=p(E.worldX,E.worldZ??0);Math.hypot(A.sx-f,A.sy-g)>x-4||bb(s,A.sx,A.sy,E.walkable?5:3.5,E.walkable?"#e8c86a":"rgba(196, 163, 90, 0.45)")}s.save(),s.translate(f,g),s.fillStyle="#f3e6cc",s.beginPath(),s.moveTo(0,-7),s.lineTo(5,6),s.lineTo(0,3.5),s.lineTo(-5,6),s.closePath(),s.fill(),s.restore(),s.restore(),s.beginPath(),s.arc(f,g,x,0,Math.PI*2),s.strokeStyle="#c4a35a",s.lineWidth=3,s.stroke(),s.beginPath(),s.arc(f,g,x-5,0,Math.PI*2),s.strokeStyle="rgba(243, 230, 204, 0.28)",s.lineWidth=1.2,s.stroke();const v=Math.sin(d),y=-Math.cos(d),_=Math.hypot(v,y)||1,b=f+v/_*(x-11),w=g-y/_*(x-11);s.fillStyle="#9c2b1a",s.beginPath(),s.arc(b,w,8,0,Math.PI*2),s.fill(),s.fillStyle="#f3e6cc",s.font="700 10px 'Songti TC', 'Noto Serif TC', serif",s.textAlign="center",s.textBaseline="middle",s.fillText("北",b,w+.5),h&&(r.textContent=h)};return o(((a=hd[0])==null?void 0:a.worldX)??0,0,-Math.PI/2,(c=hd[0])==null?void 0:c.name),{update:o}}function bb(i,t,e,n,s){i.fillStyle=s,i.beginPath(),i.moveTo(t,e-n),i.lineTo(t+n*.7,e),i.lineTo(t,e+n),i.lineTo(t-n*.7,e),i.closePath(),i.fill()}function Eb(i,t){const e=document.createElement("div");e.className="world-map-modal hidden",e.innerHTML=`
    <article class="world-map-card">
      <header class="world-map-head">
        <div>
          <h2>山海圖</h2>
          <p class="world-map-note">山內於海，海內於海外，海外於大荒。點針閱經文。</p>
        </div>
        <button class="ghost" type="button" id="world-map-close">關閉</button>
      </header>
      <div class="world-map-body">
        <canvas width="900" height="900"></canvas>
        <aside class="world-map-panel">
          <p class="world-map-empty">點選地圖上的針標。</p>
        </aside>
      </div>
    </article>
  `,i.appendChild(e);const n=e.querySelector("canvas"),s=n.getContext("2d"),r=e.querySelector(".world-map-panel"),o=e.querySelector("#world-map-close");let a=0,c=0,l=0,u,d;const h=()=>e.classList.add("hidden"),f=()=>{e.classList.remove("hidden"),m(),x()};o.addEventListener("click",h),e.addEventListener("click",p=>{p.target===e&&h()});const g=p=>{const{mx:v,my:y}=wb(n,p);return Mb(v,y,.07)};n.addEventListener("mousemove",p=>{d=g(p),n.style.cursor=d?"pointer":"default",m()}),n.addEventListener("mouseleave",()=>{d=void 0,m()}),n.addEventListener("click",p=>{const v=g(p);v&&(u=v,x(),m())});const x=()=>{var _;const p=u;if(!p){r.innerHTML='<p class="world-map-empty">點選地圖上的針標。</p>';return}const v=p.walkable?'<button class="ghost" type="button" id="world-map-go">前往此山</button>':`<p class="world-map-lock">${p.lockedHint??"尚未開通。"}</p>`,y=p.mythNote?`<p class="world-map-myth">${p.mythNote}</p>`:"";r.innerHTML=`
      <p class="world-map-jing">${p.jing}</p>
      <h3>${p.name}</h3>
      <p class="world-map-quote">${p.quote}</p>
      <p class="world-map-modern">${p.modern}</p>
      ${y}
      ${v}
    `,(_=r.querySelector("#world-map-go"))==null||_.addEventListener("click",()=>{t(p),h()})},m=()=>{const p=n.width,v=n.height,y=p/2,_=v/2,b=Math.min(p,v)*.46;s.fillStyle="#cbb58a",s.fillRect(0,0,p,v);const w=s.createRadialGradient(y,_,40,y,_,b*1.35);w.addColorStop(0,"#e8d7b0"),w.addColorStop(.55,"#d4c094"),w.addColorStop(1,"#b89a68"),s.fillStyle=w,s.fillRect(0,0,p,v);const E=(P,U)=>({px:y+P*b,py:_+U*b}),A=(P,U,F)=>{s.beginPath(),s.arc(y,_,U*b,0,Math.PI*2),s.arc(y,_,P*b,0,Math.PI*2,!0),s.fillStyle=F,s.fill()};s.beginPath(),s.arc(y,_,tn.shan*b,0,Math.PI*2),s.fillStyle="#9aaa6e",s.fill(),A(tn.shan,tn.hai,"rgba(70, 130, 140, 0.45)"),A(tn.hai,tn.hainei,"rgba(186, 168, 122, 0.55)"),A(tn.hainei,tn.haiwai,"rgba(58, 92, 108, 0.38)"),A(tn.haiwai,tn.dahuang+.06,"rgba(42, 36, 28, 0.42)"),s.beginPath(),s.arc(y,_,tn.zhong*b,0,Math.PI*2),s.fillStyle="rgba(196, 163, 90, 0.28)",s.fill(),s.strokeStyle="rgba(60, 42, 22, 0.55)",s.lineWidth=1.4;for(const P of Object.values(tn))P<=0||(s.beginPath(),s.arc(y,_,P*b,0,Math.PI*2),s.stroke());s.save(),s.beginPath(),s.arc(y,_,(tn.dahuang+.06)*b,0,Math.PI*2),s.arc(y,_,tn.hai*b,0,Math.PI*2,!0),s.fillStyle="rgba(28, 22, 16, 0.22)",s.fill(),s.restore(),s.fillStyle="rgba(72, 48, 22, 0.82)",s.font="13px 'Songti TC', 'Noto Serif TC', serif",s.textAlign="center",s.textBaseline="middle";for(const P of _b){const U=E(...Sr(Ki(P.r,P.deg)));s.fillText(P.name,U.px,U.py)}s.fillStyle="rgba(92, 48, 28, 0.78)",s.font="13px 'Songti TC', 'Noto Serif TC', serif";for(const P of xb){const U=E(...Sr(Ki(P.r-.055,P.deg)));s.fillText(P.name,U.px,U.py)}s.fillStyle="rgba(50, 36, 20, 0.55)",s.font="11px 'Songti TC', 'Noto Serif TC', serif";for(const P of gb){if(P.ring==="zhong"||P.ring==="shan")continue;const U=E(...Sr(Ki(P.r,38)));s.fillText(P.name,U.px,U.py)}const S=d??u;for(const P of tr){const U=E(P.mx,P.my),F=(S==null?void 0:S.id)===P.id,k=P.walkable;if(Tb(s,U.px,U.py,F?8:k?6.5:5,k?"#c4a35a":"#7a5a32"),F||k||P.featured){const V=E(...Sr(Ki(P.r+(P.ring==="center"?.06:.042),P.deg)));s.fillStyle=k?"#5a3a14":"rgba(40, 30, 18, 0.88)",s.font=`${F||k?12:10}px 'Songti TC', 'Noto Serif TC', serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(P.name,V.px,V.py)}}const M=yb(a,c),R=E(M.mx,M.my);s.save(),s.translate(R.px,R.py),s.rotate(Math.PI-l),s.fillStyle="#9c2b1a",s.beginPath(),s.moveTo(0,-9),s.lineTo(6,8),s.lineTo(0,4),s.lineTo(-6,8),s.closePath(),s.fill(),s.restore(),s.fillStyle="rgba(60, 42, 22, 0.55)",s.font="12px 'Songti TC', 'Noto Serif TC', serif",s.textAlign="center";const I=E(...Sr(Ki(.97,0)));s.fillText("北",I.px,I.py)};return m(),{open:f,close:h,isOpen:()=>!e.classList.contains("hidden"),update(p,v,y){a=p,c=v,l=y,e.classList.contains("hidden")||m()}}}function Sr(i){return[i.mx,i.my]}function wb(i,t){const e=i.getBoundingClientRect(),n=(t.clientX-e.left)/e.width*i.width,s=(t.clientY-e.top)/e.height*i.height,r=i.width/2,o=i.height/2,a=Math.min(i.width,i.height)*.46;return{mx:(n-r)/a,my:(s-o)/a}}function Tb(i,t,e,n,s){i.fillStyle=s,i.strokeStyle="rgba(243, 230, 204, 0.7)",i.lineWidth=1,i.beginPath(),i.moveTo(t,e-n),i.lineTo(t+n*.72,e),i.lineTo(t,e+n),i.lineTo(t-n*.72,e),i.closePath(),i.fill(),i.stroke()}async function Ab(i,t,e,n){t.innerHTML='<div class="loading">正在生成南山……</div>',await new Promise(U=>{const F=()=>U();requestAnimationFrame(F),window.setTimeout(F,40)}),i.scene.fog=new kl(new wt(J.sky).getHex(),.0042);const s=lf(i.scene,e),r=Sy({sample:Mi,biomeAt:rc,quality:e});i.scene.add(r.group);const o=(U,F)=>by(r.meshes,U,F,Mi(U,F)).y,a=df({x:(vi+yi)/2,z:(Jn+Qn)/2,width:yi-vi+420,depth:Qn-Jn+420,qualityHigh:e==="high"});i.scene.add(a);const c=Ty({terrain:r.meshes,sample:Mi,biomeAt:rc,minX:vi,maxX:yi,minZ:Jn,maxZ:Qn,quality:e});i.scene.add(c);const l=vM({terrain:r.meshes,sample:Mi,biomeAt:rc,minX:vi,maxX:yi,minZ:Jn,maxZ:Qn,count:e==="high"?420:180});i.scene.add(l);const u=new Jt;Cb(u,e,o),i.scene.add(u),i.scene.add(wM(o));const d=new Jt;nS(d,o),i.scene.add(d);const h=sS();i.scene.add(h.group);const f=gM(e);i.scene.add(f.group);const g=Me("yuanyi"),x=Me("zhaoyao"),m=Nh(g.x-22,g.z,38);m.group.scale.set(6,4.5,10),i.scene.add(m.group);const p=Nh(g.x-14,g.z+18,52);p.group.scale.set(5,3.5,8),i.scene.add(p.group),t.innerHTML="";const v=x.padX,y=x.padZ,_=new Rf(i.camera,Mi,r.meshes,{minX:vi+18,maxX:yi-18,minZ:Jn+18,maxZ:Qn-18,camDist:16,camHeight:9});_.rig.position.set(v,o(v,y),y),i.scene.add(_.rig),window.__player=_;const b=mb(t,e),w=Eb(t,U=>{!U.walkable||U.worldX===void 0||(document.exitPointerLock(),_.teleport(U.worldX,U.worldZ??0))});t.appendChild(Rb(n,e,()=>b.open(),()=>{document.exitPointerLock(),w.isOpen()?w.close():w.open()}));const E=Sb(t,()=>{document.exitPointerLock(),w.open()}),A=document.createElement("div");A.className="joystick",A.innerHTML='<div class="knob"></div>',t.appendChild(A);const S=document.createElement("div");S.className="hint",S.textContent="WASD 行走 · 滑鼠環視 · F 飛行 · M 大地圖",t.appendChild(S);const M=Pb(t),R=_.bind(i.renderer.domElement,A),I=Lb(i,r,_),P=U=>{(U.key==="m"||U.key==="M")&&(U.preventDefault(),document.exitPointerLock(),w.isOpen()?w.close():w.open()),U.key==="Escape"&&w.isOpen()&&w.close()};return window.addEventListener("keydown",P),i.setFrame((U,F)=>{w.isOpen()||_.update(U),s.update(F,i.camera.position.x,i.camera.position.z),ff(a,F,i.camera.position.x,i.camera.position.y,i.camera.position.z),f.update(F),m.update(F),p.update(F),h.update(F),bf(d,F,o);const k=ul(_.rig.position.x,_.rig.position.z).id==="yuanyi"?.014:.0038;i.scene.fog.density+=(k-i.scene.fog.density)*.04;const q=_.rig.position.x,V=_.rig.position.z,it=ul(q,V);E.update(q,V,_.yaw,it.name),w.update(q,V,_.yaw),M.sync(_.flying)}),()=>{delete window.__player,window.removeEventListener("keydown",P),R(),I(),i.scene.clear(),t.innerHTML=""}}function Cb(i,t,e){const n=dv(t),s=new Map,r=(a,c)=>`${a}:${c!=null&&c.glowSiZhao?"g":""}${c!=null&&c.strange?"s":""}${c!=null&&c.lacquer?"l":""}`,o=(a,c)=>{const l=r(a,c);let u=s.get(l);if(!u){const d=a.charCodeAt(0)*97+(c!=null&&c.strange?31:0);u=Array.from({length:n},(h,f)=>da(a,d+f*17,t,c)),s.set(l,u)}return u};for(const a of Zv){const c=Fr.find(d=>d.id===a.mountainId),l=(c==null?void 0:c.x)??0,u=(c==null?void 0:c.z)??0;for(const d of a.scatter){const h=o(d.kind,d.overlay);for(let f=0;f<d.count;f+=1){const g=Math.random()*Math.PI*2,x=Math.random()*d.radius,m=l+(d.xCenter??0)+Math.cos(g)*x,p=u+(d.zCenter??0)+Math.sin(g)*x,v=e(m,p);v<hn+.4||a.mountainId==="yuanyi"&&(m<l+8||v>34)||i.add(fl(h[f%h.length],m,v-.04,p,Math.random()*Math.PI*2))}}for(const d of a.specimens??[]){const h=da(d.kind,4400+Math.floor(d.x*9),t,d.overlay),f=l+d.x,g=u+d.z,x=e(f,g);i.add(fl(h,f,x-.04,g,d.yaw??0))}if(a.zhuyu){const d=a.zhuyu;for(let h=0;h<d.count;h+=1){const f=af(),g=l+d.minX+Math.random()*d.spanX,x=u+d.minZ+Math.random()*d.spanZ;f.position.set(g,e(g,x)-.02,x),i.add(f)}}}}function Rb(i,t,e,n){const s=document.createElement("div");return s.className="hud",s.innerHTML=`
    <div class="hud-cluster">
      <button class="ghost" id="back">返回</button>
      <button class="ghost" id="map">地圖</button>
      <button class="ghost" id="dex">圖鑑</button>
      <span style="letter-spacing:0.2em">南山經 · ${t==="high"?"細緻":"流暢"}</span>
    </div>
  `,s.querySelector("#back").addEventListener("click",i),s.querySelector("#map").addEventListener("click",n),s.querySelector("#dex").addEventListener("click",e),s}function Pb(i){const t=document.createElement("div");return t.className="fly-hud hidden",t.innerHTML=`
    <span>飛行 · Space/E 升 · Q 降 · Esc 解鎖後拖曳改地形</span>
    <button class="ghost active" data-b="raise">堆高</button>
    <button class="ghost" data-b="lower">挖低</button>
    <button class="ghost" data-b="smooth">平滑</button>
    <button class="ghost" id="export-sculpt">匯出地形 JSON</button>
  `,i.appendChild(t),t.querySelector("#export-sculpt").addEventListener("click",()=>gy()),t.querySelectorAll("button[data-b]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("button[data-b]").forEach(n=>n.classList.remove("active")),e.classList.add("active"),Pf=e.getAttribute("data-b")})}),{sync(e){t.classList.toggle("hidden",!e)}}}let Pf="raise";function Lb(i,t,e){const n=i.renderer.domElement,s=new Ma,r=new Lt;let o=!1;const a=(h,f)=>{var m;const g=n.getBoundingClientRect();return r.x=(h-g.left)/g.width*2-1,r.y=-((f-g.top)/g.height)*2+1,s.setFromCamera(r,i.camera),(m=s.intersectObjects(t.meshes,!1)[0])==null?void 0:m.point},c=(h,f)=>{if(!e.flying||document.pointerLockElement===n)return;const g=a(h,f);g&&(my(g.x,g.z,Pf),Ey(t,g.x,g.z,Mi))},l=h=>{!e.flying||document.pointerLockElement===n||h.button!==0||(o=!0,c(h.clientX,h.clientY))},u=h=>{o&&c(h.clientX,h.clientY)},d=()=>{o=!1};return n.addEventListener("pointerdown",l),window.addEventListener("pointermove",u),window.addEventListener("pointerup",d),()=>{n.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",d)}}const fd="kunlun-island-help-v1";function Ib(i){const t=document.createElement("div");t.className="help-modal hidden",t.innerHTML=`
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
  `,i.appendChild(t);const e=()=>t.classList.add("hidden");t.querySelector("#help-close").addEventListener("click",e),t.addEventListener("click",s=>{s.target===t&&e()});const n=()=>t.classList.remove("hidden");return{open:n,close:e,maybeFirstOpen(){localStorage.getItem(fd)||(localStorage.setItem(fd,"1"),n())}}}const Db={migu:"sang",baigao:"sang",strange:"sang"};function Ub(i){return Db[i]??i}const Lf="kunlun-island-v1";function pd(){const i=localStorage.getItem(Lf);if(!i)return null;try{const t=JSON.parse(i);return t.placements||(t.placements=[]),t.placements=t.placements.map(e=>({...e,id:Ub(e.id)})),t}catch{return null}}function md(i){localStorage.setItem(Lf,JSON.stringify({...i,version:2}))}function gd(i=80,t=72){const e=new Array(i*i).fill(0),n=new Array(i*i).fill(0),s=(i-1)/2;for(let r=0;r<i;r+=1)for(let o=0;o<i;o+=1){const a=(o-s)/(i*.38),c=(r-s)/(i*.38),l=Math.sqrt(a*a+c*c),u=Math.max(0,1-l);e[r*i+o]=u*u*6.5,n[r*i+o]=u>.15?u*.6:0}return{version:2,res:i,size:t,heights:e,grass:n,placements:[]}}const Nb=.55,Fb={gui:"gui",song:"song",bai:"bai",zong:"zong",tan:"tan",sang:"sang",yanmu:"yan",tao:"tao",zi:"zi",liu:"liu",zhu:"zhu",shan:"shan"};function Bb(i){return Fb[i]}async function zb(i,t,e,n){t.innerHTML='<div class="loading">正在準備島嶼……</div>',await new Promise(X=>{const tt=()=>X();requestAnimationFrame(tt),window.setTimeout(tt,40)});let s=pd()??gd();const r=lf(i.scene,e),o=(X,tt)=>Ob(s,X,tt),a=dl({minX:-s.size/2,maxX:s.size/2,minZ:-s.size/2,maxZ:s.size/2,segX:s.res-1,segZ:s.res-1,sample:o,jitter:.12});a.geometry.computeBoundsTree(),i.scene.add(a);const c=df({x:0,z:0,width:140,depth:140,qualityHigh:!1}),l=hM(s.res);Uh(l,s.heights,s.res),dM(c,l,-s.size/2,-s.size/2,s.size),i.scene.add(c);const u=new Jt;i.scene.add(u);const d=Object.fromEntries(Yl.map((X,tt)=>[X,da(X,9+tt*3,e)]));br(u,s,d,o,a),i.camera.position.set(28,22,28),i.camera.lookAt(0,3.5,0),t.innerHTML="",t.appendChild(Hb(n));const h=Vb();t.appendChild(h.el);const f=Gb();t.appendChild(f.el);const g=Ib(t);t.querySelector("#help").addEventListener("click",()=>g.open()),g.maybeFirstOpen();const x=document.createElement("div");x.className="play-ui hidden",x.innerHTML='<div class="joystick"><div class="knob"></div></div><div class="hint">WASD 行走 · 點畫面鎖定視角</div>',t.appendChild(x);let m="raise",p="gui",v={...Is},y=!1,_=!1,b=null,w=null;const E=new Ma,A=new Lt,S=new Jt;S.visible=!1,i.scene.add(S);const M=()=>{S.clear(),S.add(Sa("chimera",v))};M(),h.onChange(X=>{m=X,X&&(S.visible=!1)}),f.onChange((X,tt)=>{p=X,tt&&(v=tt,M()),S.visible=h.mode==="stamp"&&p==="chimera"&&!_});const R=i.renderer.domElement,I=X=>{const tt=R.getBoundingClientRect();return A.x=(X.clientX-tt.left)/tt.width*2-1,A.y=-((X.clientY-tt.top)/tt.height)*2+1,E.setFromCamera(A,i.camera),E.intersectObject(a,!1)[0]},P=()=>{Uh(l,s.heights,s.res),of(a,-s.size/2,s.size/2,-s.size/2,s.size/2,s.res-1,s.res-1,o),a.geometry.computeBoundsTree()},U=X=>{const tt=I(X);tt&&h.mode==="brush"&&(kb(s,tt.point.x,tt.point.z,m,4.5,.35),P())},F=X=>{if(!_)if(y=!0,h.mode==="stamp"){const tt=I(X);if(!tt)return;s.placements.push({id:p,x:tt.point.x,z:tt.point.z,rot:Math.random()*Math.PI*2,scale:1,recipe:p==="chimera"?{...v}:void 0}),br(u,s,d,o,a)}else U(X)},k=X=>{if(!_){if(h.mode==="stamp"&&p==="chimera"){const tt=I(X);if(!tt){S.visible=!1;return}S.visible=!0,S.position.set(tt.point.x,tt.point.y,tt.point.z);return}S.visible=!1,!(!y||h.mode!=="brush")&&U(X)}},q=()=>{y&&h.mode==="brush"&&br(u,s,d,o,a),y=!1};R.addEventListener("pointerdown",F),window.addEventListener("pointermove",k),window.addEventListener("pointerup",q),t.querySelector("#save").addEventListener("click",()=>{md(s)}),t.querySelector("#load").addEventListener("click",()=>{s=pd()??s,P(),br(u,s,d,o,a)}),t.querySelector("#reset").addEventListener("click",()=>{_||(s=gd(),P(),br(u,s,d,o,a))});let V=.85,it=.62,rt=58,pt=!1,It=0,Gt=0;R.addEventListener("contextmenu",X=>X.preventDefault()),R.addEventListener("pointerdown",X=>{_||(X.button===2||X.shiftKey)&&(pt=!0,It=X.clientX,Gt=X.clientY)}),window.addEventListener("pointermove",X=>{pt&&(V-=(X.clientX-It)*.007,it=Math.min(1.35,Math.max(.2,it+(X.clientY-Gt)*.007)),It=X.clientX,Gt=X.clientY)}),window.addEventListener("pointerup",()=>{pt=!1}),R.addEventListener("wheel",X=>{_||(rt=Math.min(80,Math.max(16,rt+X.deltaY*.02)))});const Z=X=>{let tt=-1e9,xt=0,At=0;for(let $t=0;$t<X.res;$t+=1)for(let Ut=0;Ut<X.res;Ut+=1){const se=X.heights[$t*X.res+Ut]??0;se>tt&&(tt=se,xt=(Ut/(X.res-1)-.5)*X.size,At=($t/(X.res-1)-.5)*X.size)}return{x:xt,z:At,y:tt}},et=()=>{var tt,xt;_=!1,w==null||w(),w=null,b&&(i.scene.remove(b.rig),b=null),h.el.classList.remove("hidden"),f.el.classList.remove("hidden"),x.classList.add("hidden"),(tt=t.querySelector("#load"))==null||tt.classList.remove("hidden"),(xt=t.querySelector("#reset"))==null||xt.classList.remove("hidden");const X=t.querySelector("#play");X.textContent="進入島嶼"},dt=()=>{var xt,At;md(s),_=!0,S.visible=!1,h.el.classList.add("hidden"),f.el.classList.add("hidden"),x.classList.remove("hidden"),(xt=t.querySelector("#load"))==null||xt.classList.add("hidden"),(At=t.querySelector("#reset"))==null||At.classList.add("hidden");const X=t.querySelector("#play");X.textContent="返回編輯";const tt=Z(s);b=new Rf(i.camera,o,a,{minX:-s.size/2+3,maxX:s.size/2-3,minZ:-s.size/2+3,maxZ:s.size/2-3,startYaw:Math.PI}),b.rig.position.set(tt.x,ha(a,tt.x,tt.z,tt.y),tt.z),i.scene.add(b.rig),w=b.bind(R,x.querySelector(".joystick"))};return t.querySelector("#play").addEventListener("click",()=>{_?et():dt()}),i.setFrame((X,tt)=>{if(r.update(tt,i.camera.position.x,i.camera.position.z),ff(c,tt,i.camera.position.x,i.camera.position.y,i.camera.position.z),bf(u,tt,(xt,At)=>ha(a,xt,At,o(xt,At))),_&&b){b.update(X);return}i.camera.position.set(Math.cos(V)*Math.sin(it)*rt,Math.cos(it)*rt,Math.sin(V)*Math.sin(it)*rt),i.camera.lookAt(0,3.5,0)}),()=>{R.removeEventListener("pointerdown",F),window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",q),w==null||w(),i.scene.clear(),t.innerHTML=""}}function Ob(i,t,e){const n=(t+i.size/2)/i.size,s=(e+i.size/2)/i.size,r=n*(i.res-1),o=s*(i.res-1),a=Math.max(0,Math.min(i.res-2,Math.floor(r))),c=Math.max(0,Math.min(i.res-2,Math.floor(o))),l=r-a,u=o-c,d=i.heights[c*i.res+a]??0,h=i.heights[c*i.res+a+1]??0,f=i.heights[(c+1)*i.res+a]??0,g=i.heights[(c+1)*i.res+a+1]??0,x=d*(1-l)*(1-u)+h*l*(1-u)+f*(1-l)*u+g*l*u;return Math.max(Nb-1.4,x)}function kb(i,t,e,n,s,r){for(let o=0;o<i.res;o+=1)for(let a=0;a<i.res;a+=1){const c=(a/(i.res-1)-.5)*i.size,l=(o/(i.res-1)-.5)*i.size,u=Math.hypot(c-t,l-e);if(u>s)continue;const d=1-u/s,h=o*i.res+a,f=i.heights[h]??0;if(n==="raise"&&(i.heights[h]=f+r*d),n==="lower"&&(i.heights[h]=f-r*d),n==="flatten"&&(i.heights[h]=f+(3.2-f)*.2*d),n==="smooth"){const g=((i.heights[h-1]??f)+(i.heights[h+1]??f)+(i.heights[h-i.res]??f)+(i.heights[h+i.res]??f))/4;i.heights[h]=f+(g-f)*.35*d}}}function br(i,t,e,n,s){i.clear();for(const r of t.placements){const o=ha(s,r.x,r.z,n(r.x,r.z));if(r.id==="zhuyu"){const l=af();l.position.set(r.x,o-.02,r.z),l.rotation.y=r.rot,i.add(l);continue}if(r.id==="rock"){const l=new ue(ne(1.05,.7,.9),Tt(J.rock));l.position.set(r.x,o-.02,r.z),l.rotation.y=r.rot,i.add(l);continue}if(r.id==="shengsheng"||r.id==="baiyuan"||r.id==="lushu"||r.id==="jiweihu"||r.id==="chimera"){const l=Sa(r.id,r.recipe);l.position.set(r.x,o-.02,r.z),l.userData.baseY=o-.02,l.userData.homeX=r.x,l.userData.homeZ=r.z,l.rotation.y=r.rot,i.add(l);continue}const a=Bb(r.id);if(!a)continue;const c=e[a];c&&i.add(fl(c,r.x,o-.04,r.z,r.rot))}}function Hb(i){const t=document.createElement("div");return t.className="hud",t.innerHTML=`
    <div class="hud-cluster">
      <button class="ghost" id="back">返回</button>
      <button class="ghost" id="save">儲存島嶼</button>
      <button class="ghost" id="play">進入島嶼</button>
      <button class="ghost" id="help">說明</button>
      <button class="ghost" id="load">讀取</button>
      <button class="ghost" id="reset">重設</button>
    </div>
  `,t.querySelector("#back").addEventListener("click",i),t}function Vb(){const i=document.createElement("div");i.className="toolbar";const t=["raise","lower","smooth","flatten"],e={raise:"堆高",lower:"挖低",smooth:"抹平",flatten:"整地"},n={mode:"brush",cb:s=>{}};return i.innerHTML=t.map((s,r)=>`<button data-b="${s}" class="${r===0?"active":""}">${e[s]}</button>`).join("")+'<button data-mode="stamp">放置</button>',i.addEventListener("click",s=>{const r=s.target;r.dataset.b&&(n.mode="brush",i.querySelectorAll("button").forEach(o=>o.classList.remove("active")),r.classList.add("active"),n.cb(r.dataset.b)),r.dataset.mode==="stamp"&&(n.mode="stamp",i.querySelectorAll("button").forEach(o=>o.classList.remove("active")),r.classList.add("active"))}),{el:i,get mode(){return n.mode},onChange(s){n.cb=s}}}function Gb(){const i=document.createElement("div");i.className="palette";const t=Yl.map(a=>({id:a==="yan"?"yanmu":a,name:ql[a].name})),e=[{id:"zhuyu",name:"祝餘"},{id:"rock",name:"石"},{id:"shengsheng",name:"狌狌"},{id:"baiyuan",name:"白猿"},{id:"lushu",name:"鹿蜀"},{id:"jiweihu",name:"九尾狐"},{id:"chimera",name:"異獸"}],n=(a,c)=>`<button data-s="${a.id}" class="${c?"active":""}">${a.name}</button>`,s=(a,c,l)=>`<label class="chimera-field">${a}<select data-field="${a}">${c.map(u=>`<option value="${u.id}" ${u.id===l?"selected":""}>${u.name}</option>`).join("")}</select></label>`;i.innerHTML='<div class="palette-label">常木</div>'+t.map((a,c)=>n(a,c===0)).join("")+'<div class="palette-label">異木</div><button type="button" disabled title="未至其經，需專用模型">建木 · 未至</button><button type="button" disabled title="未至其經，需專用模型">扶桑 · 未至</button><div class="palette-label">草 · 石 · 獸</div>'+e.map(a=>n(a,!1)).join("")+`<div class="chimera-strip"><div class="palette-label">異獸組件</div>${s("首",TM,Is.head)}${s("身",AM,Is.body)}${s("尾",CM,Is.tail)}${s("肢",RM,Is.limbs)}<label class="chimera-field"><input type="checkbox" data-field="翼" /> 羽翼</label></div>`;let r=()=>{};const o=()=>{const a=l=>i.querySelector(`select[data-field="${l}"]`).value,c=i.querySelector('input[data-field="翼"]').checked?"feather":"none";return{head:a("首"),body:a("身"),tail:a("尾"),limbs:a("肢"),wings:c,scale:1.15}};return i.addEventListener("click",a=>{const c=a.target;c.dataset.s&&(i.querySelectorAll("button").forEach(l=>l.classList.remove("active")),c.classList.add("active"),r(c.dataset.s,c.dataset.s==="chimera"?o():void 0))}),i.addEventListener("change",()=>{var l;const a=o(),c=(l=i.querySelector("button.active"))==null?void 0:l.dataset.s;r(c??"gui",a)}),{el:i,onChange(a){r=a}}}class Wb{constructor(){de(this,"ctx",null);de(this,"master",null)}start(){if(this.ctx)return;const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=.12,this.master.connect(t.destination),this.noise(t,180,.35,.7),this.noise(t,80,.22,.45)}setGain(t){this.master&&(this.master.gain.value=t)}noise(t,e,n,s){const r=t.createBuffer(1,t.sampleRate*2,t.sampleRate),o=r.getChannelData(0);for(let u=0;u<o.length;u+=1)o[u]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=r,a.loop=!0;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=e,c.Q.value=n;const l=t.createGain();l.gain.value=s,a.connect(c).connect(l).connect(this.master),a.start()}}function Xb(){const i=document.querySelector("#app"),t=document.createElement("canvas");t.className="game";const e=document.createElement("div");e.className="overlay",i.append(t,e);const n=new Wb;let s=null,r=null;const o=()=>{r==null||r(),r=null,s==null||s.dispose(),s=null,fv(e,async a=>{n.start();const c=Nr();s=new lv(t,c),s.start(),a==="explore"?r=await Ab(s,e,c,o):r=await zb(s,e,c,o)})};o()}Xb();
