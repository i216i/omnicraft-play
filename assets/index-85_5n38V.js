(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,O=1030,k=1031,te=1033,A=33776,ne=33777,j=33778,re=33779,M=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,ue=37488,N=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,Pe=2300,P=2301,Fe=2302,Ie=2303,Le=2400,F=2401,Re=2402,I=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,L(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=1234567,at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function dt(e,t,n){return e===t?0:(n-e)/(t-e)}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t,n,r){return ft(e,t,1-Math.exp(-n*r))}function mt(e,t=1){return t-Math.abs(lt(e,t*2)-t)}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _t(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vt(e,t){return e+Math.random()*(t-e)}function yt(e){return e*(.5-Math.random())}function bt(e){e!==void 0&&(it=e);let t=it+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xt(e){return e*at}function St(e){return e*ot}function Ct(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var kt={DEG2RAD:at,RAD2DEG:ot,generateUUID:st,clamp:ct,euclideanModulo:lt,mapLinear:ut,inverseLerp:dt,lerp:ft,damp:pt,pingpong:mt,smoothstep:ht,smootherstep:gt,randInt:_t,randFloat:vt,randFloatSpread:yt,seededRandom:bt,degToRad:xt,radToDeg:St,isPowerOfTwo:Ct,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:Et,normalize:Ot,denormalize:Dt},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new B,Mt=new At,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nt.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nt.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nt=new V,Pt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ft=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function It(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Lt=It();function Rt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Bt,Vt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bt===void 0&&(Bt=Je(`canvas`)),Bt.width=e.width,Bt.height=e.height;let t=Bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Rt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Rt(t[e]/255)*255):t[e]=Rt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ht=0,Ut=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Wt(r[t].image)):e.push(Wt(r[t]))}else e=Wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Vt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Gt=0,Kt=new B,qt=class r extends nt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=st(),this.name=``,this.source=new Ut(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kt).x}get height(){return this.source.getSize(Kt).y}get depth(){return this.source.getSize(Kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=300,qt.DEFAULT_ANISOTROPY=1;var Jt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yt=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let r=new qt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ut(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xt=class extends Yt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$t=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],A=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*O+c*ne,i[4]=a*S+o*E+s*k+c*j,i[8]=a*C+o*D+s*te+c*re,i[12]=a*w+o*ee+s*A+c*M,i[1]=l*x+u*T+d*O+f*ne,i[5]=l*S+u*E+d*k+f*j,i[9]=l*C+u*D+d*te+f*re,i[13]=l*w+u*ee+d*A+f*M,i[2]=p*x+m*T+h*O+g*ne,i[6]=p*S+m*E+h*k+g*j,i[10]=p*C+m*D+h*te+g*re,i[14]=p*w+m*ee+h*A+g*M,i[3]=_*x+v*T+y*O+b*ne,i[7]=_*S+v*E+y*k+b*j,i[11]=_*C+v*D+y*te+b*re,i[15]=_*w+v*ee+y*A+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new B,tn=new $t,nn=new B(0,0,0),rn=new B(1,1,1),an=new B,on=new B,sn=new B,cn=new $t,ln=new At,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fn=0,pn=new B,mn=new At,hn=new $t,gn=new B,_n=new B,vn=new B,yn=new At,bn=new B(1,0,0),xn=new B(0,1,0),Sn=new B(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new un,r=new At,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new V}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new B(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=lt(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=jn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}copyLinearToSRGB(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Lt.workingToColorSpace(Fn.copy(this),e),Math.round(ct(Fn.r*255,0,255))*65536+Math.round(ct(Fn.g*255,0,255))*256+Math.round(ct(Fn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,i=Fn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ze){Lt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=ft(Mn.h,Nn.h,t),r=ft(Mn.s,Nn.s,t),i=ft(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new H;H.NAMES=jn;var In=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ln=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new B,zn=new B,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new Jt,Yn=new Jt,Xn=new Jt,Zn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new B,new B,new B,new B,new B,new B,new B,new B],er=new B,tr=new Qn,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new B,mr=new z,hr=0,gr=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yr=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new Qn,xr=new B,Sr=new B,Cr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new $t,Er=new Dn,Dr=new B,Or=new Qn,kr=new Qn,Ar=new B,jr=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=We,this.updateRanges=[],this.version=0,this.uuid=st()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=st()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=st()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Nr=new B,Pr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix4(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyNormalMatrix(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.transformDirection(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ze(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new gr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ze(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=new B,Ir=new B,Lr=new V,Rr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fr.subVectors(n,t).cross(Ir.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Fr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lr.getNormalMatrix(e),r=this.coplanarPoint(Fr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zr=0,Br=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Rr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vr=class extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,Ur=new B,Wr=new B,Gr=new B,Kr=new z,qr=new z,Jr=new $t,Yr=new B,Xr=new B,Zr=new B,Qr=new z,$r=new z,ei=new z,ti=class extends Dn{constructor(e=new Vr){if(super(),this.isSprite=!0,this.type=`Sprite`,Hr===void 0){Hr=new jr;let e=new Mr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute(`position`,new Pr(e,3,0,!1)),Hr.setAttribute(`uv`,new Pr(e,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Wr.setFromMatrixScale(this.matrixWorld),Jr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Gr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ni(Yr.set(-.5,-.5,0),Gr,a,Wr,r,i),ni(Xr.set(.5,-.5,0),Gr,a,Wr,r,i),ni(Zr.set(.5,.5,0),Gr,a,Wr,r,i),Qr.set(0,0),$r.set(1,0),ei.set(1,1);let o=e.ray.intersectTriangle(Yr,Xr,Zr,!1,Ur);if(o===null&&(ni(Xr.set(-.5,.5,0),Gr,a,Wr,r,i),$r.set(0,1),o=e.ray.intersectTriangle(Yr,Zr,Xr,!1,Ur),o===null))return;let s=e.ray.origin.distanceTo(Ur);s<e.near||s>e.far||t.push({distance:s,point:Ur.clone(),uv:Zn.getInterpolation(Ur,Yr,Xr,Zr,Qr,$r,ei,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ni(e,t,n,r,i,a){Kr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?qr.copy(Kr):(qr.x=a*Kr.x-i*Kr.y,qr.y=i*Kr.x+a*Kr.y),e.copy(t),e.x+=qr.x,e.y+=qr.y,e.applyMatrix4(Jr)}var ri=new B,ii=new B,ai=new B,oi=new B,si=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ii.copy(e).add(t).multiplyScalar(.5),ai.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ii);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ai),o=oi.dot(this.direction),s=-oi.dot(ai),c=oi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ii).addScaledVector(ai,d),f}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,te,A,ne;if(y>=b&&y>=x?(w=s,D=u,k=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,te=_,A=v):(S=l,C=c,T=f,E=d,ee=h,O=m,te=v,A=_)):b>=x?(w=c,D=d,k=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,te=v,A=g):(S=s,C=l,T=u,E=f,ee=p,O=h,te=g,A=v)):(w=l,D=f,k=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,te=g,A=_):(S=c,C=s,T=d,E=u,ee=m,O=p,te=_,A=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=ee-j*k,se=O-re*k,ce=te-j*ne,le=A-re*ne,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=M*(ue*D+N*k+de*ne);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},li=new $t,ui=new si,di=new Cr,fi=new B,pi=new B,mi=new B,hi=new B,gi=new B,_i=new B,vi=new B,yi=new B,bi=class extends Dn{constructor(e=new jr,t=new ci){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(gi.fromBufferAttribute(s,e),a?_i.addScaledVector(gi,r):_i.addScaledVector(gi.sub(t),r))}t.add(_i)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(i),ui.copy(e.ray).recast(e.near),!(di.containsPoint(ui.origin)===!1&&(ui.intersectSphere(di,fi)===null||ui.origin.distanceToSquared(fi)>(e.far-e.near)**2))&&(li.copy(i).invert(),ui.copy(e.ray).applyMatrix4(li),(n.boundingBox===null||ui.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Si(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Si(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Si(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Si(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function xi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yi.copy(s),yi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yi);return l<n.near||l>n.far?null:{distance:l,point:yi.clone(),object:e}}function Si(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,pi),e.getVertexPosition(c,mi),e.getVertexPosition(l,hi);let u=xi(e,t,n,r,pi,mi,hi,vi);if(u){let e=new B;Zn.getBarycoord(vi,pi,mi,hi,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Zn.getNormal(pi,mi,hi,t.normal),u.face=t,u.barycoord=e}return u}var Ci=class extends qt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wi=class extends gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ti=new $t,Ei=new $t,Di=[],Oi=new Qn,ki=new $t,Ai=new bi,ji=new Cr,Mi=class extends bi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ki)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Oi.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Oi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),ji.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),e.ray.intersectsSphere(ji)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ti),Ei.multiplyMatrices(n,Ti),Ai.matrixWorld=Ei,Ai.raycast(e,Di);for(let e=0,n=Di.length;e<n;e++){let n=Di[e];n.instanceId=i,n.object=this,t.push(n)}Di.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ni=new Cr,Pi=new z(.5,.5),Fi=new B,Ii=class{constructor(e=new Rr,t=new Rr,n=new Rr,r=new Rr,i=new Rr,a=new Rr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476+Pi.distanceTo(e.center),Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Fi.x=r.normal.x>0?e.max.x:e.min.x,Fi.y=r.normal.y>0?e.max.y:e.min.y,Fi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Li=class extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ri=new B,zi=new B,Bi=new $t,Vi=new si,Hi=new Cr,Ui=new B,Wi=new B,Gi=class extends Dn{constructor(e=new jr,t=new Li){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ri.fromBufferAttribute(t,e-1),zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ri.distanceTo(zi);e.setAttribute(`lineDistance`,new yr(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(r),Hi.radius+=i,e.ray.intersectsSphere(Hi)===!1)return;Bi.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ki(this,e,Vi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ki(this,e,Vi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ki(this,e,Vi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ki(this,e,Vi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ri.fromBufferAttribute(s,i),zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ri,zi,Ui,Wi)>r)return;Ui.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ui);if(!(c<t.near||c>t.far))return{distance:c,point:Wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var qi=new B,Ji=new B,Yi=class extends Gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)qi.fromBufferAttribute(t,e),Ji.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+qi.distanceTo(Ji);e.setAttribute(`lineDistance`,new yr(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Xi=class extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zi=new $t,Qi=new si,$i=new Cr,ea=new B,ta=class extends Dn{constructor(e=new jr,t=new Xi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=i,e.ray.intersectsSphere($i)===!1)return;Zi.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ea.fromBufferAttribute(l,n),na(ea,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ea.fromBufferAttribute(l,a),na(ea,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function na(e,t,n,r,i,a,o){let s=Qi.distanceSqToPoint(e);if(s<n){let n=new B;Qi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ra=class extends qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ia=class extends qt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},aa=class extends qt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ut(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends aa{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ca=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},la=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=new B,da=new B,fa=new B,pa=new Zn,ma=class extends jr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(at*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=pa;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),pa.getNormal(fa),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=pa[c[e]],o=pa[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(fa.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:fa.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];ua.fromBufferAttribute(a,t),da.fromBufferAttribute(a,n),d.push(ua.x,ua.y,ua.z),d.push(da.x,da.y,da.z)}this.setAttribute(`position`,new yr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ha=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ga=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function _a(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ya(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ya(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function va(e){let t={};for(let n=0;n<e.length;n++){let r=_a(e[n]);for(let e in r)t[e]=r[e]}return t}function ya(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ba(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}var Sa={clone:_a,merge:va},Ca=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ta=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ca,this.fragmentShader=wa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=ba(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ea=class extends Ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Da=class extends Br{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oa=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=I,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ka=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ja(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ma=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Na=class extends Ma{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Le,endingEnd:Le}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case F:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case F:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Pa=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fa=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ia=class extends Ma{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=za(n,t,g,y,r);i[p]=La(x,o,_,b,m)}return i}};function La(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ra(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function za(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=La(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ra(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ba=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ja(e.settings)&&(n.settings={inTangents:Aa(e.settings.inTangents,Array),outTangents:Aa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ia(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case P:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return P;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ja(this.settings)&&(Va(this.settings.inTangents,e),Va(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ja(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Va(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ba.prototype.ValueTypeName=``,Ba.prototype.TimeBufferType=Float32Array,Ba.prototype.ValueBufferType=Float32Array,Ba.prototype.DefaultInterpolation=P;var Ha=class extends Ba{constructor(e,t,n){super(e,t,n)}};Ha.prototype.ValueTypeName=`bool`,Ha.prototype.ValueBufferType=Array,Ha.prototype.DefaultInterpolation=Pe,Ha.prototype.InterpolantFactoryMethodLinear=void 0,Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName=`color`;var Wa=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}};Wa.prototype.ValueTypeName=`number`;var Ga=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ka=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}};Ka.prototype.ValueTypeName=`quaternion`,Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Ba{constructor(e,t,n){super(e,t,n)}};qa.prototype.ValueTypeName=`string`,qa.prototype.ValueBufferType=Array,qa.prototype.DefaultInterpolation=Pe,qa.prototype.InterpolantFactoryMethodLinear=void 0,qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}};Ja.prototype.ValueTypeName=`vector`;var Ya=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xa=new $t,Za=new B,Qa=new B,$a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Za.setFromMatrixPosition(e.matrixWorld),t.position.copy(Za),Qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xa,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eo=new B,to=new At,no=new B,ro=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(eo,to,no),no.x===1&&no.y===1&&no.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,no.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(eo,to,no),no.x===1&&no.y===1&&no.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,no.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},io=new B,ao=new z,oo=new z,so=class extends ro{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){io.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(io.x,io.y).multiplyScalar(-e/io.z),io.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(io.x,io.y).multiplyScalar(-e/io.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},co=class extends ro{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lo=class extends $a{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uo=class extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new lo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fo=class extends Ya{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},po=-90,mo=1,ho=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new so(po,mo,e,t);r.layers=this.layers,this.add(r);let i=new so(po,mo,e,t);i.layers=this.layers,this.add(i);let a=new so(po,mo,e,t);a.layers=this.layers,this.add(a);let o=new so(po,mo,e,t);o.layers=this.layers,this.add(o);let s=new so(po,mo,e,t);s.layers=this.layers,this.add(s);let c=new so(po,mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},go=class extends so{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_o=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vo(){this._document.hidden===!1&&this.reset()}var yo=`\\[\\]\\.:\\/`,bo=RegExp(`[\\[\\]\\.:\\/]`,`g`),xo=`[^\\[\\]\\.:\\/]`,So=`[^`+yo.replace(`\\.`,``)+`]`,Co=`((?:WC+[\\/:])*)`.replace(`WC`,xo),wo=`(WCOD+)?`.replace(`WCOD`,So),To=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,xo),Eo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,xo),Do=RegExp(`^`+Co+wo+To+Eo+`$`),Oo=[`material`,`materials`,`bones`,`map`],ko=class{constructor(e,t,n){let r=n||Ao.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ao=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(bo,``)}static parseTrackName(e){let t=Do.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Oo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ao.Composite=ko,Ao.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ao.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ao.prototype.GetterByBindingType=[Ao.prototype._getValue_direct,Ao.prototype._getValue_array,Ao.prototype._getValue_arrayElement,Ao.prototype._getValue_toArray],Ao.prototype.SetterByBindingTypeAndVersioning=[[Ao.prototype._setValue_direct,Ao.prototype._setValue_direct_setNeedsUpdate,Ao.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ao.prototype._setValue_array,Ao.prototype._setValue_array_setNeedsUpdate,Ao.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ao.prototype._setValue_arrayElement,Ao.prototype._setValue_arrayElement_setNeedsUpdate,Ao.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ao.prototype._setValue_fromArray,Ao.prototype._setValue_fromArray_setNeedsUpdate,Ao.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function jo(e,t,n,r){let i=Mo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case A:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Mo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function No(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Po(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},W={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Fo={basic:{uniforms:va([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:va([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:va([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:va([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:va([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:va([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:va([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:va([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:va([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:va([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:va([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distance:{uniforms:va([W.common,W.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distance_vert,fragmentShader:U.distance_frag},shadow:{uniforms:va([W.lights,W.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};Fo.physical={uniforms:va([Fo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var Io={r:0,b:0,g:0},Lo=new $t,Ro=new V;Ro.set(-1,0,0,0,1,0,0,0,1);function zo(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new bi(new ca(1,1,1),new Ta({name:`BackgroundCubeMaterial`,uniforms:_a(Fo.backgroundCube.uniforms),vertexShader:Fo.backgroundCube.vertexShader,fragmentShader:Fo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ro),l.material.toneMapped=Lt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new bi(new ha(2,2),new Ta({name:`BackgroundMaterial`,uniforms:_a(Fo.background.uniforms),vertexShader:Fo.background.vertexShader,fragmentShader:Fo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Io,xa(e)),n.buffers.color.setClear(Io.r,Io.g,Io.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Bo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Vo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ho(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Uo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Rr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Wo=4,Go=6,Ko=20,qo=256,Jo=new co,Yo=new H,Xo=null,Zo=0,Qo=0,$o=!1,es=new B,ts=new B,ns=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=es}=i;Xo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ls(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,Zo,Qo),this._renderer.xr.enabled=$o,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Be,depthBuffer:!1},r=is(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=is(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rs(r)),this._blurMaterial=ss(r,e,t),this._ggxMaterial=os(r,e,t)}return r}_compileMaterial(e){let t=new bi(new jr,e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,n,r,i){let a=new so(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Yo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new ca,new ci({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Yo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;as(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ls()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;as(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Jo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Wo?n-d+Wo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,as(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Jo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,as(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Jo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];as(t,3*l*(r>this._lodMax-Wo?r-this._lodMax+Wo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Jo)}};function rs(e){let t=[],n=[],r=e,i=e-Wo+1+Go;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ts.set(1,r,n):e===1?ts.set(-n,1,-r):e===2?ts.set(-n,r,1):e===3?ts.set(-1,r,-n):e===4?ts.set(-n,-1,r):ts.set(n,r,-1),ts.toArray(l,(e*6+t)*3)}}let u=new jr;u.setAttribute(`position`,new gr(c,3)),u.setAttribute(`outputDirection`,new gr(l,3)),n.push(new bi(u,null)),r>Wo&&r--}return{lodMeshes:n,sizeLods:t}}function is(e,t,n){let r=new Xt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function as(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function os(e,t,n){return new Ta({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:qo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:us(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ss(e,t,n){return new Ta({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ko,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:us(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function cs(){return new Ta({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:us(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ls(){return new Ta({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function us(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ds=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ra(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ca(5,5,5),i=new Ta({name:`CubemapFromEquirect`,uniforms:_a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new bi(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ho(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function fs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ds(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ns(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ns(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ps(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ms(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?vr:_r)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function hs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function gs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function _s(e,t,n){let r=new WeakMap,i=new Jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Zt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new z(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function vs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ys={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function bs(e,t,n,r,i,a){let o=new Xt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new jr;l.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new yr([0,2,0,0,2,0],2));let u=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new bi(l,u),f=new co(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Lt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ys[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var xs=new qt,Ss=new aa(1,1),Cs=new Zt,ws=new Qt,Ts=new ra,Es=[],Ds=[],Os=new Float32Array(16),ks=new Float32Array(9),As=new Float32Array(4);function js(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Es[i];if(a===void 0&&(a=new Float32Array(i),Es[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ms(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ns(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ps(e,t){let n=Ds[t];n===void 0&&(n=new Int32Array(t),Ds[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Fs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ms(n,t))return;e.uniform2fv(this.addr,t),Ns(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ms(n,t))return;e.uniform3fv(this.addr,t),Ns(n,t)}}function Rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ms(n,t))return;e.uniform4fv(this.addr,t),Ns(n,t)}}function zs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ms(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ns(n,t)}else{if(Ms(n,r))return;As.set(r),e.uniformMatrix2fv(this.addr,!1,As),Ns(n,r)}}function Bs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ms(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ns(n,t)}else{if(Ms(n,r))return;ks.set(r),e.uniformMatrix3fv(this.addr,!1,ks),Ns(n,r)}}function Vs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ms(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ns(n,t)}else{if(Ms(n,r))return;Os.set(r),e.uniformMatrix4fv(this.addr,!1,Os),Ns(n,r)}}function Hs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ms(n,t))return;e.uniform2iv(this.addr,t),Ns(n,t)}}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ms(n,t))return;e.uniform3iv(this.addr,t),Ns(n,t)}}function Gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ms(n,t))return;e.uniform4iv(this.addr,t),Ns(n,t)}}function Ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ms(n,t))return;e.uniform2uiv(this.addr,t),Ns(n,t)}}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ms(n,t))return;e.uniform3uiv(this.addr,t),Ns(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ms(n,t))return;e.uniform4uiv(this.addr,t),Ns(n,t)}}function Xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ss.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ss):a=xs,n.setTexture2D(t||a,i)}function Zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ws,i)}function Qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ts,i)}function $s(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Cs,i)}function ec(e){switch(e){case 5126:return Fs;case 35664:return Is;case 35665:return Ls;case 35666:return Rs;case 35674:return zs;case 35675:return Bs;case 35676:return Vs;case 5124:case 35670:return Hs;case 35667:case 35671:return Us;case 35668:case 35672:return Ws;case 35669:case 35673:return Gs;case 5125:return Ks;case 36294:return qs;case 36295:return Js;case 36296:return Ys;case 35678:case 36198:case 36298:case 36306:case 35682:return Xs;case 35679:case 36299:case 36307:return Zs;case 35680:case 36300:case 36308:case 36293:return Qs;case 36289:case 36303:case 36311:case 36292:return $s}}function tc(e,t){e.uniform1fv(this.addr,t)}function nc(e,t){let n=js(t,this.size,2);e.uniform2fv(this.addr,n)}function rc(e,t){let n=js(t,this.size,3);e.uniform3fv(this.addr,n)}function ic(e,t){let n=js(t,this.size,4);e.uniform4fv(this.addr,n)}function ac(e,t){let n=js(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function oc(e,t){let n=js(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function sc(e,t){let n=js(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function cc(e,t){e.uniform1iv(this.addr,t)}function lc(e,t){e.uniform2iv(this.addr,t)}function uc(e,t){e.uniform3iv(this.addr,t)}function dc(e,t){e.uniform4iv(this.addr,t)}function fc(e,t){e.uniform1uiv(this.addr,t)}function pc(e,t){e.uniform2uiv(this.addr,t)}function mc(e,t){e.uniform3uiv(this.addr,t)}function hc(e,t){e.uniform4uiv(this.addr,t)}function gc(e,t,n){let r=this.cache,i=t.length,a=Ps(n,i);Ms(r,a)||(e.uniform1iv(this.addr,a),Ns(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ss:xs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function _c(e,t,n){let r=this.cache,i=t.length,a=Ps(n,i);Ms(r,a)||(e.uniform1iv(this.addr,a),Ns(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ws,a[e])}function vc(e,t,n){let r=this.cache,i=t.length,a=Ps(n,i);Ms(r,a)||(e.uniform1iv(this.addr,a),Ns(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ts,a[e])}function yc(e,t,n){let r=this.cache,i=t.length,a=Ps(n,i);Ms(r,a)||(e.uniform1iv(this.addr,a),Ns(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Cs,a[e])}function bc(e){switch(e){case 5126:return tc;case 35664:return nc;case 35665:return rc;case 35666:return ic;case 35674:return ac;case 35675:return oc;case 35676:return sc;case 5124:case 35670:return cc;case 35667:case 35671:return lc;case 35668:case 35672:return uc;case 35669:case 35673:return dc;case 5125:return fc;case 36294:return pc;case 36295:return mc;case 36296:return hc;case 35678:case 36198:case 36298:case 36306:case 35682:return gc;case 35679:case 36299:case 36307:return _c;case 35680:case 36300:case 36308:case 36293:return vc;case 36289:case 36303:case 36311:case 36292:return yc}}var xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ec(t.type)}},Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bc(t.type)}},Cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},wc=/(\w+)(\])?(\[|\.)?/g;function Tc(e,t){e.seq.push(t),e.map[t.id]=t}function Ec(e,t,n){let r=e.name,i=r.length;for(wc.lastIndex=0;;){let a=wc.exec(r),o=wc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Tc(n,l===void 0?new xc(s,e,t):new Sc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Cc(s),Tc(n,e)),n=e}}}var Dc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ec(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Oc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var kc=37297,Ac=0;function jc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Mc=new V;function Nc(e){Lt._getMatrix(Mc,Lt.workingColorSpace,e);let t=`mat3( ${Mc.elements.map(e=>e.toFixed(4))} )`;switch(Lt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Pc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+jc(e.getShaderSource(t),r)}return i}function Fc(e,t){let n=Nc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ic={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Lc(e,t){let n=Ic[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Rc=new B;function zc(){return Lt.getLuminanceCoefficients(Rc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Rc.x.toFixed(4)}, ${Rc.y.toFixed(4)}, ${Rc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Bc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Uc).join(`
`)}function Vc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Hc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Uc(e){return e!==``}function Wc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kc=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(e){return e.replace(Kc,Yc)}var Jc=new Map;function Yc(e,t){let n=U[t];if(n===void 0){let e=Jc.get(t);if(e!==void 0)n=U[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return qc(n)}var Xc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(e){return e.replace(Xc,Qc)}function Qc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function $c(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var el={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function tl(e){return el[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var nl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function rl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:nl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var il={302:`ENVMAP_MODE_REFRACTION`};function al(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:il[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ol={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function sl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ol[e.combine]||`ENVMAP_BLENDING_NONE`}function cl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ll(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=tl(n),l=rl(n),u=al(n),d=sl(n),f=cl(n),p=Bc(n),m=Vc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Uc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Uc).join(`
`),_.length>0&&(_+=`
`)):(g=[$c(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Uc).join(`
`),_=[$c(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:Lc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,Fc(`linearToOutputTexel`,n.outputColorSpace),zc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Uc).join(`
`)),o=qc(o),o=Wc(o,n),o=Gc(o,n),s=qc(s),s=Wc(s,n),s=Gc(s,n),o=Zc(o),s=Zc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Oc(i,i.VERTEX_SHADER,y),S=Oc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Pc(i,x,`vertex`),n=Pc(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Dc(i,h),T=Hc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,kc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ac++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ul=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fl(e),t.set(e,n)),n}},fl=class{constructor(e){this.id=ul++,this.code=e,this.usedTimes=0}};function pl(e){return e===1030||e===37490||e===36285}function ml(e,t,n,r,i,a){let o=new dn,s=new dl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Fo[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let te=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&pl(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Lt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Fo[t];n=Sa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ll(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function hl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function gl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _l(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||gl),r.length>1&&r.sort(t||_l),i.length>1&&i.sort(t||_l)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function yl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new vl,e.set(t,[i])):n>=r.length?(i=new vl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function bl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function xl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Sl=0;function Cl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function wl(e){let t=new bl,n=xl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new $t,o=new $t;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Cl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Sl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Tl(e){let t=new wl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function El(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Tl(e),t.set(n,[a])):r>=i.length?(a=new Tl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Dl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ol=`uniform sampler2D shadow_pass;
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
}`,kl=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Al=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],jl=new $t,Ml=new B,Nl=new B;function Pl(e,t,n){let i=new Ii,a=new z,s=new z,c=new Jt,l=new Oa,u=new ka,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Dl,fragmentShader:Ol}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new jr;y.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new bi(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Xt(a.x,a.y,{format:O,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new aa(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new ds(a.x),p.map.depthTexture=new oa(a.x,m)):(p.map=new Xt(a.x,a.y),p.map.depthTexture=new aa(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ml.setFromMatrixPosition(d.matrixWorld),e.position.copy(Ml),Nl.copy(e.position),Nl.add(kl[t]),e.up.copy(Al[t]),e.lookAt(Nl),e.updateMatrixWorld(),n.makeTranslation(-Ml.x,-Ml.y,-Ml.z),jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(jl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xt(a.x,a.y,{format:O,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Fl(e,t){function n(){let t=!1,n=new Jt,r=null,i=new Jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Jt().fromArray(ae),ce=new Jt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function Te(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Be}}function Il(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Je(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ve:Lt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function A(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&M(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function M(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ie(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(e,t){let n=f.get(e);if(e.isVideoTexture&&P(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?xe(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function fe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?xe(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?Se(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let me={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},he={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ge={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function _e(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,me[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,me[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,me[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,he[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,he[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ge[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ve(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ne));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ue(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&M(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ye(r.start,t.width,4),c=ye(n.start,t.width,4);r.start<=o+1&&s===c&&ye(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function xe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ve(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Lt.getPrimaries(Lt.workingColorSpace),n=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Fe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=k(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);_e(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=A(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&be(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=jo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=jo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ie(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ie(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n){if(t.image.length!==6)return;let r=ve(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Lt.getPrimaries(Lt.workingColorSpace),o=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Fe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=A(t,h);_e(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ie(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.normalized,i.colorSpace);Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Te(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,ne)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),_e(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else N(t.depthTexture,0);let a=i.__webglTexture,o=Ne(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Te(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Te(t.__webglFramebuffer[0],e,0):Te(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),we(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),we(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function De(e,t,n){let r=f.get(e);t!==void 0&&Ce(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ee(e)}function Oe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,j);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Pe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),we(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),_e(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Ce(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Ce(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),_e(o,r),Ce(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),_e(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Ce(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Ce(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&Ee(e)}function ke(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let Ae=[],je=[];function Me(e){if(e.samples>0){if(Pe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ae.length=0,je.length=0,Ae.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Ae.push(a),je.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,je)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ae))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function Pe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function P(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Lt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Ll(e,t){function n(n,r=``){let i,a=Lt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Rl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zl=`
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

}`,Bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ta({vertexShader:Rl,fragmentShader:zl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bi(new ha(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Bl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new z,O=null,k=null,te=new so;te.viewport=new Jt;let A=new so;A.viewport=new Jt;let ne=[te,A],j=new go,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function ie(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(ee.width,ee.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new aa(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=A.near=te.near=t,j.far=A.far=te.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,te.layers.mask=j.layers.mask&-5,A.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ue(j,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(j,te,A):j.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),N(e,j,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let de=null;function fe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new so,o.layers.enable(n),o.viewport=new Jt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new sa,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let pe=new No;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Hl=new $t,Ul=new V;Ul.set(-1,0,0,0,1,0,0,0,1);function Wl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,xa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Hl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ul),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Gl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Kl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ql=null;function Jl(){return ql===null&&(ql=new Ci(Kl,16,16,O,g),ql.name=`DFG_LUT`,ql.minFilter=o,ql.magFilter=o,ql.wrapS=t,ql.wrapT=t,ql.generateMipmaps=!1,ql.needsUpdate=!0),ql}var Yl=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([te,k,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,O=null,A=null,ne=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=ze;let le=0,ue=0,N=null,de=-1,fe=null,pe=new Jt,me=new Jt,he=null,ge=new H(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Jt(0,0,ve,ye),we=new Jt(0,0,ve,ye),Te=!1,Ee=new Ii,De=!1,Oe=!1,ke=new $t,Ae=new B,je=new Jt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,$e,tt,nt,rt,it,at,ot,st;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ct()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function ct(){Ie=new ps(P),Ie.init(),at=new Ll(P,Ie),Le=new Ho(P,Ie,e,at),F=new Fl(P,Ie),Le.reversedDepthBuffer&&h&&F.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),se=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new gs(P),I=new hl,Be=new Il(P,Ie,F,I,Le,at,Re),Ve=new fs(M),He=new Po(P),ot=new Bo(P,He),Ue=new ms(P,He,Re,ot),We=new vs(P,Ue,He,ot,Re),nt=new _s(P,Le,Be),Qe=new Uo(I),Ke=new ml(M,Ve,Ie,Le,ot,Qe),qe=new Wl(M,I),Je=new yl,Xe=new El(Ie),tt=new zo(M,Ve,F,We,x,s),$e=new Pl(M,We,Le),st=new Gl(P,Re,Le,F),rt=new Vo(P,Ie,Re),it=new hs(P,Ie,Re),Re.programs=Ke.programs,M.capabilities=Le,M.extensions=Ie,M.properties=I,M.renderLists=Je,M.shadowMap=$e,M.state=F,M.info=Re}S!==1009&&(re=new bs(S,t.width,t.height,o,r,i));let lt=new Vl(M,P);this.xr=lt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){lt.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=C.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),tt.dispose(),Je.dispose(),Xe.dispose(),I.dispose(),Ve.dispose(),We.dispose(),ot.dispose(),st.dispose(),Ke.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,yt),lt.removeEventListener(`sessionend`,bt),xt.stop()};function ut(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),ie=!0}function dt(){Ze(`WebGLRenderer: Context Restored.`),ie=!1;let e=Re.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;ct(),Re.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),I.remove(e)}function ht(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=He.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),De===!0&&Qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),A=Xe.get(n),A.init(t),j.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),ae!==null&&ae.updateLights(A.state.lightsArray),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),De===!0&&Qe.setGlobalState(this.clippingPlanes,t),ae!==null&&$e.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),A=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new No;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,lt.setAnimationLoop(e),e===null?xt.stop():xt.start()},lt.addEventListener(`sessionstart`,yt),lt.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=re!==null&&(N===null||n)&&re.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),A=Xe.get(e,j.length),A.init(t),A.state.textureUnits=Be.getTextureUnits(),j.push(A),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,Ge,t.reversedDepth),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),O=Je.get(e,ne.length),O.init(),ne.push(O),lt.enabled===!0&&lt.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,M.sortObjects)}St(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(A.state.lightsArray),M.sortObjects===!0&&O.sort(xe,Se),Ne=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ne&&tt.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Qe.beginShadows();let i=A.state.shadowsArray;if($e.render(i,e,t),De===!0&&Qe.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Ne&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(O,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Ne&&tt.render(e),Ct(O,e,t)}N!==null&&ue===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),ot.resetDefaultState(),de=-1,fe=null,j.pop(),j.length>0?(A=j[j.length-1],Be.setTextureUnits(A.state.textureUnits),De===!0&&Qe.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,ne.pop(),O=ne.length>0?ne[ne.length-1]:null,ae!==null&&ae.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=We.update(e),a=e.material;a.visible&&O.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,je.z,s,t)}}else a.visible&&O.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),De===!0&&Qe.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Xt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),u=M.getActiveCubeFace(),d=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&tt.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),De===!0&&Qe.setGlobalState(M.clippingPlanes,r),Tt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}M.setRenderTarget(s,u,d),M.setClearColor(ge,_e),p!==void 0&&(r.viewport=p),M.toneMapping=f}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ke.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),kt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Dc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function z(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Me),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Lt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=A.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=z(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,Be),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&nt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Jl()),C){if(T.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,be,ye,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Dc.upload(P,Ot(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Dc.upload(P,Ot(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,x),st.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=oe),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function V(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=V(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=V(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,at.convert(l),at.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await et(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,se),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};function Xl(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function G(e,t,n,r=0){let i=Math.imul(e|0,668265261)^Math.imul(t|0,374761393)^Math.imul(n|0,461845907)^Math.imul(r|0,2246822507);return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Zl=`grass_top.grass_side.dirt.stone.sand.water.log_side.log_top.leaves.planks.cobble.glass.bricks.snow.snow_side.bedrock.coal_ore.iron_ore.diamond_ore.gravel.torch.torch_top.tall_grass.flower_red.flower_yellow.lamp.stone_bricks.bookshelf.server.server_top.screen.hq_floor.concrete.rust_metal.steel.crate.crate_top.hazard.asphalt.white_panel.orange_panel.beacon.plaster.terracotta.red_lattice.palm_leaves.dry_grass_top.dry_grass_side.container_red.container_blue.med_bag.med_bag_top.locker.locker_top.flags.jungle_leaves.pine_leaves.palm_log.palm_top.dark_window.stripe_concrete.rock.hatch.moss_top.moss_side`.split(`.`),Ql=Object.fromEntries(Zl.map((e,t)=>[e,t])),$l=Math.ceil(Zl.length/8),eu=e=>Math.max(0,Math.min(255,Math.round(e))),K=(e,t,n)=>{let r=1+(n()-.5)*t;return[eu(e[0]*r),eu(e[1]*r),eu(e[2]*r),e[3]??255]},tu=[0,0,0,0],nu=[92,154,52],ru=[240,246,250],iu=(e,t,n)=>K([128,128,128],.25,n),au=(e,t,n)=>K(n()<.12?[108,76,50]:[134,96,67],.25,n),ou=(e,t)=>(n,r,i)=>G(n>>1,r>>1,t)<.24?K(e,.2,i):iu(n,r,i),su=null,cu={grass_top:(e,t,n)=>K(nu,.3,n),grass_side:(e,t,n)=>t<3+ +(G(e,0,7)<.5)?K(nu,.3,n):au(e,t,n),dirt:au,stone:iu,sand:(e,t,n)=>K([219,207,160],.12,n),water:(e,t,n)=>K([50,95,210,185],.12,n),log_side:(e,t,n)=>K(e%4==0||e%4==3&&n()<.4?[78,60,36]:[105,82,50],.15,n),log_top:(e,t,n)=>{if(e===0||t===0||e===15||t===15)return K([105,82,50],.15,n);let r=Math.max(Math.abs(e-7.5),Math.abs(t-7.5));return K(Math.floor(r)%2?[170,136,84]:[148,116,68],.08,n)},leaves:(e,t,n)=>n()<.18?[0,0,0,0]:K([58,128,38],.45,n),planks:(e,t,n)=>{let r=Math.floor(t/4);return K(t%4==3||e===(r*5+3)%16?[118,92,54]:[168,134,82],.1,n)},cobble:(e,t,n)=>{su||=Array.from({length:8},()=>[n()*16,n()*16,.75+n()*.35]);let r=1/0,i=1/0,a=0;for(let n of su){let o=Math.min(Math.abs(e+.5-n[0]),16-Math.abs(e+.5-n[0])),s=Math.min(Math.abs(t+.5-n[1]),16-Math.abs(t+.5-n[1])),c=Math.hypot(o,s);c<r?(i=r,r=c,a=n[2]):c<i&&(i=c)}return i-r<1.1?K([70,70,70],.2,n):K([140*a,140*a,140*a],.18,n)},glass:(e,t)=>e===0||t===0||e===15||t===15?[205,230,240,255]:(e-t===4||e-t===5)&&e>3&&e<11?[235,245,250,255]:[0,0,0,0],bricks:(e,t,n)=>{let r=Math.floor(t/4);return K(t%4==3||(e+r%2*4)%8==7?[185,178,168]:[152,72,56],.12,n)},snow:(e,t,n)=>K(ru,.05,n),snow_side:(e,t,n)=>t<4+ +(G(e,1,9)<.5)?K(ru,.05,n):au(e,t,n),bedrock:(e,t,n)=>K(n()<.5?[45,45,45]:[100,100,100],.2,n),coal_ore:ou([35,35,35],1),iron_ore:ou([210,165,130],2),diamond_ore:ou([90,225,225],3),gravel:(e,t,n)=>K([[110,104,100],[140,132,128],[90,86,84]][Math.floor(n()*3)],.15,n),torch:(e,t,n)=>e!==7&&e!==8?tu:t===6?[255,245,170,255]:t===7||t===8?[255,185,60,255]:t>8?K([110,80,45],.15,n):tu,torch_top:(e,t,n)=>K([255,225,120],.1,n),tall_grass:(e,t,n)=>{let r=5+Math.floor(G(e,0,21)*10);return G(e,1,22)<.65&&t>=16-r?K([84,150,48],.35,n):tu},flower_red:lu([215,45,45],[250,215,70]),flower_yellow:lu([245,210,50],[230,130,30]),lamp:(e,t,n)=>K(e===0||t===0||e===15||t===15||e===8||t===8?[170,110,55]:[255,210,120],.12,n),stone_bricks:(e,t,n)=>{let r=Math.floor(t/8),i=t%8==7||(e+r*8)%16==15;return K(i?[88,88,92]:[132,132,138],i?.08:.14,n)},bookshelf:(e,t,n)=>{if(t===0||t===15||t===7||t===8||e===0||e===15)return K([168,134,82],.1,n);let r=Math.floor((e-1)/2)+(t>8?7:0),i=[[150,40,40],[40,80,150],[50,120,60],[170,140,50],[110,50,130],[60,60,60],[150,90,40]],a=i[Math.floor(G(r,0,77)*i.length)];return G(r,1,78)<.3&&(t===1||t===9)?[40,28,18,255]:K(a,.12,n)},server:(e,t,n)=>e===0||e===15||t===0||t===15?K([40,42,48],.1,n):t%4==0?K([28,30,34],.1,n):t%4==2&&e>=2&&e<=3?G(e,t,5)<.5?[60,255,120,255]:[40,140,255,255]:t%4==2&&e===5&&G(t,3,9)<.5?[255,170,40,255]:K(e>7&&t%4!=3&&e%2?[55,58,66]:[62,66,74],.08,n),server_top:(e,t,n)=>K((e+t)%4==0?[35,36,40]:[55,57,63],.08,n),screen:(e,t,n)=>e===0||e===15||t===0||t===15?[25,26,30,255]:t>=3&&t<=12&&t%2==1&&e>=2&&e<=2+Math.floor(G(t,0,31)*11)?G(e>>2,t,32)<.3?[255,200,90,255]:[140,230,255,255]:K([22,52,92],.08,n),hq_floor:(e,t,n)=>{let r=((e>>3)+(t>>3))%2;return K(e%8==0||t%8==0?[48,50,56]:r?[86,90,98]:[100,104,112],.05,n)},concrete:(e,t,n)=>t===15||e===0&&t<8?K([132,128,120],.05,n):K(n()<.06?[150,146,138]:[172,168,158],.06,n),rust_metal:(e,t,n)=>{let r=e%8==0,i=G(e>>1,t>>1,41)<.45;return K(r?[96,64,44]:i?[150,82,42]:[118,108,98],.18,n)},steel:(e,t,n)=>e===0||t===0||e===15||t===15?K([62,70,78],.06,n):(e===2||e===13)&&(t===2||t===13)?[190,198,205,255]:K([104,116,126],.07,n),crate:(e,t,n)=>e===0||t===0||e===15||t===15?K([40,44,50],.08,n):t>=6&&t<=9?e%4<2?[40,210,230,255]:[26,120,140,255]:K([232,120,30],.1,n),crate_top:(e,t,n)=>e===0||t===0||e===15||t===15?K([40,44,50],.08,n):e>=5&&e<=10&&t>=5&&t<=10?[40,210,230,255]:K([210,106,26],.1,n),hazard:(e,t,n)=>K((e+t)%8<4?[235,190,40]:[30,30,32],.08,n),asphalt:(e,t,n)=>t===8&&e%8<4?[220,200,120,255]:K(n()<.1?[70,70,72]:[52,52,55],.12,n),white_panel:(e,t,n)=>t%8==0||e===0?K([170,172,176],.04,n):K([226,228,230],.04,n),orange_panel:(e,t,n)=>t%8==0||e===0?K([150,70,20],.06,n):K([236,112,28],.06,n),beacon:(e,t,n)=>{let r=Math.hypot(e-7.5,t-7.5);return e===0||t===0||e===15||t===15?K([50,30,30],.08,n):r<4?[255,120,100,255]:K([210,30,30],.08,n)},plaster:(e,t,n)=>G(e>>2,t>>2,51)<.08&&G(e,t,52)<.6?K([206,160,114],.08,n):K(t>13?[196,150,104]:[222,178,126],.07,n),terracotta:(e,t,n)=>{let r=Math.floor(t/4);if(t%4==3)return K([120,52,34],.1,n);let i=Math.abs((e+r*2)%4-1.5)/1.5;return K([196-i*40,92-i*20,56-i*12],.08,n)},red_lattice:(e,t,n)=>{let r=e<2||e>13||t<2||t>13,i=Math.abs(e-t)<2||Math.abs(e+t-15)<2;return r||i?K(r?[178,44,30]:[150,36,26],.1,n):tu},palm_leaves:(e,t,n)=>{let r=Math.abs(e-t)<1||Math.abs(e+t-15)<1,i=!(e+t&1)||G(e,t,53)<.35;return!r&&!i?tu:K(r?[118,140,52]:[86,132,48],.25,n)},dry_grass_top:(e,t,n)=>K(n()<.25?[156,150,70]:[178,166,88],.16,n),dry_grass_side:(e,t,n)=>t<3+ +(G(e,0,54)<.5)?K([170,160,84],.16,n):K([150,112,76],.18,n),container_red:(e,t,n)=>{let r=e%3==0;return K(G(e>>1,t>>2,55)<.2?[120,60,34]:r?[128,34,30]:[168,46,38],.08,n)},container_blue:(e,t,n)=>{let r=e%3==0;return K(G(e>>1,t>>2,56)<.2?[120,70,40]:r?[34,70,108]:[48,96,148],.08,n)},med_bag:(e,t,n)=>t<2||t>13?K([60,60,64],.1,n):Math.abs(e-7.5)<1.6&&t>4&&t<11||Math.abs(t-7.5)<1.6&&e>4&&e<11?[210,40,40,255]:K([232,230,222],.05,n),med_bag_top:(e,t,n)=>e===7||e===8?K([60,60,64],.1,n):K([226,224,216],.05,n),locker:(e,t,n)=>e===0||e===15||t===0||t===15||e===7?K([40,44,48],.08,n):t>=3&&t<=5&&e%7>1&&e%7<6&&e%2?[30,32,36,255]:t===9&&(e===5||e===10)?[80,230,240,255]:K(t>11?[226,180,40]:[98,106,112],.07,n),locker_top:(e,t,n)=>K(e===0||t===0||e===15||t===15?[40,44,48]:[110,118,124],.06,n),flags:(e,t,n)=>{if(t===2)return[60,50,40,255];let r=Math.floor(e/4);return t<3||t>9-Math.abs(e%4-1.5)||e%4==3?tu:K([[40,90,200],[230,230,220],[200,40,40],[60,160,70]][r],.08,n)},jungle_leaves:(e,t,n)=>n()<.12?tu:K(n()<.3?[40,92,30]:[62,120,36],.3,n),pine_leaves:(e,t,n)=>n()<.1?tu:K(n()<.4?[44,76,40]:[62,96,52],.25,n),palm_log:(e,t,n)=>K(t%4==0?[96,78,56]:e%5==0?[120,100,72]:[146,122,88],.12,n),palm_top:(e,t,n)=>K(Math.floor(Math.hypot(e-7.5,t-7.5))%3?[150,124,86]:[120,98,66],.08,n),dark_window:(e,t,n)=>e===0||t===0||e===15||t===15||e===8?K([150,148,140],.05,n):(e-t+16)%11<2?[120,150,170,255]:K([40,58,72],.06,n),stripe_concrete:(e,t,n)=>t>=5&&t<=8?K([46,108,170],.06,n):K(n()<.06?[150,146,138]:[190,186,176],.05,n),rock:(e,t,n)=>K([[134,124,112],[118,110,100],[150,140,126]][Math.floor((t+G(e>>2,0,57)*3)/3)%3],.14,n),hatch:(e,t,n)=>{let r=Math.max(Math.abs(e-7.5),Math.abs(t-7.5));return r>6.5?K([40,44,50],.08,n):r>5.5?[70,255,160,255]:(e+t)%4<2?K([60,66,72],.06,n):K([84,92,100],.06,n)},moss_top:(e,t,n)=>K(n()<.3?[56,100,40]:[74,124,48],.2,n),moss_side:(e,t,n)=>t<4+ +(G(e,2,58)<.5)?K([70,118,46],.2,n):au(e,t,n)};function lu(e,t){return(n,r,i)=>{let a=Math.hypot(n-7.5,r-5);return a<1.2?[...t,255]:a<3.2?K(e,.15,i):(n===7||n===8)&&r>7||r===11&&(n===9||n===10)?K([70,135,45],.2,i):tu}}function uu(){let e=document.createElement(`canvas`);e.width=128,e.height=$l*16;let t=e.getContext(`2d`),n=Xl(1337);return Zl.forEach((e,r)=>{let i=t.createImageData(16,16);for(let t=0;t<16;t++)for(let r=0;r<16;r++){let a=cu[e](r,t,n),o=(t*16+r)*4;i.data[o]=a[0],i.data[o+1]=a[1],i.data[o+2]=a[2],i.data[o+3]=a[3]??255}t.putImageData(i,r%8*16,Math.floor(r/8)*16)}),e}var du=5e-4;function fu(e){let t=e%8,n=Math.floor(e/8);return[t/8+du,1-(n+1)/$l+du,(t+1)/8-du,1-n/$l-du]}function pu(e,t){let n=document.createElement(`canvas`);n.width=n.height=48;let r=n.getContext(`2d`);if(r.imageSmoothingEnabled=!1,t.shape!==`cube`){let i=t.tiles[0];return r.drawImage(e,i%8*16,Math.floor(i/8)*16,16,16,4,4,40,40),n.toDataURL()}let i=22/16,a=(t,n,i)=>{r.setTransform(...n);let a=t%8,o=Math.floor(t/8);r.drawImage(e,a*16,o*16,16,16,0,0,16,16),i&&(r.globalCompositeOperation=`source-atop`,r.fillStyle=`rgba(0,0,0,${i})`,r.fillRect(0,0,16,16),r.globalCompositeOperation=`source-over`)};return a(t.tiles[0],[i,11/16,0,24/16,2,13],.25),a(t.tiles[5],[i,-11/16,0,24/16,24,24],.4),a(t.tiles[3],[i,-11/16,i,11/16,2,13],0),n.toDataURL()}var q={AIR:0,GRASS:1,DIRT:2,STONE:3,SAND:4,WATER:5,LOG:6,LEAVES:7,PLANKS:8,COBBLE:9,GLASS:10,BRICKS:11,SNOW:12,BEDROCK:13,COAL_ORE:14,IRON_ORE:15,DIAMOND_ORE:16,GRAVEL:17,TORCH:18,TALL_GRASS:19,FLOWER_RED:20,FLOWER_YELLOW:21,LAMP:22,STONE_BRICKS:23,BOOKSHELF:24,SERVER:25,SCREEN:26,HQ_FLOOR:27,CONCRETE:28,RUST_METAL:29,STEEL:30,CRATE:31,HAZARD:32,ASPHALT:33,WHITE_PANEL:34,ORANGE_PANEL:35,BEACON:36,PLASTER:37,TERRACOTTA:38,RED_LATTICE:39,PALM_LEAVES:40,DRY_GRASS:41,CONTAINER_RED:42,CONTAINER_BLUE:43,MED_BAG:44,LOCKER:45,FLAGS:46,JUNGLE_LEAVES:47,PINE_LEAVES:48,PALM_LOG:49,DARK_WINDOW:50,STRIPE_CONCRETE:51,ROCK:52,HATCH:53,MOSS:54},mu=[];function J(e,t,n,r={}){let i=n==null?null:typeof n==`string`?{top:n,side:n,bottom:n}:n;mu[e]={id:e,name:t,tiles:i?[i.side,i.side,i.bottom,i.top,i.side,i.side].map(e=>Ql[e]):null,solid:r.solid??!0,opaque:r.opaque??!0,liquid:!!r.liquid,cullSelf:r.cullSelf??!0,breakable:r.breakable??!0,shape:r.shape??`cube`,light:r.light??0,replaceable:!!r.replaceable,sound:r.sound??`stone`,sway:r.sway??0}}var hu={solid:!1,opaque:!1,shape:`cross`,replaceable:!0,sound:`grass`,sway:1};J(q.AIR,`Air`,null,{solid:!1,opaque:!1}),J(q.GRASS,`Grass Block`,{top:`grass_top`,side:`grass_side`,bottom:`dirt`},{sound:`grass`}),J(q.DIRT,`Dirt`,`dirt`,{sound:`grass`}),J(q.STONE,`Stone`,`stone`),J(q.SAND,`Sand`,`sand`,{sound:`sand`}),J(q.WATER,`Water`,`water`,{solid:!1,opaque:!1,liquid:!0,replaceable:!0,sound:`water`}),J(q.LOG,`Oak Log`,{top:`log_top`,side:`log_side`,bottom:`log_top`},{sound:`wood`}),J(q.LEAVES,`Oak Leaves`,`leaves`,{opaque:!1,cullSelf:!1,sound:`grass`,sway:.4}),J(q.PLANKS,`Oak Planks`,`planks`,{sound:`wood`}),J(q.COBBLE,`Cobblestone`,`cobble`),J(q.GLASS,`Glass`,`glass`,{opaque:!1,sound:`glass`}),J(q.BRICKS,`Bricks`,`bricks`),J(q.SNOW,`Snowy Grass`,{top:`snow`,side:`snow_side`,bottom:`dirt`},{sound:`sand`}),J(q.BEDROCK,`Bedrock`,`bedrock`,{breakable:!1}),J(q.COAL_ORE,`Coal Ore`,`coal_ore`),J(q.IRON_ORE,`Iron Ore`,`iron_ore`),J(q.DIAMOND_ORE,`Diamond Ore`,`diamond_ore`),J(q.GRAVEL,`Gravel`,`gravel`,{sound:`sand`}),J(q.TORCH,`Torch`,{top:`torch_top`,side:`torch`,bottom:`torch`},{solid:!1,opaque:!1,shape:`torch`,light:15,sound:`wood`}),J(q.TALL_GRASS,`Tall Grass`,`tall_grass`,hu),J(q.FLOWER_RED,`Poppy`,`flower_red`,hu),J(q.FLOWER_YELLOW,`Dandelion`,`flower_yellow`,hu),J(q.LAMP,`Glow Lamp`,`lamp`,{light:15,sound:`glass`}),J(q.STONE_BRICKS,`Stone Bricks`,`stone_bricks`),J(q.BOOKSHELF,`Bookshelf`,{top:`planks`,side:`bookshelf`,bottom:`planks`},{sound:`wood`}),J(q.SERVER,`Server Rack`,{top:`server_top`,side:`server`,bottom:`server_top`},{light:6}),J(q.SCREEN,`Screen`,{top:`server_top`,side:`screen`,bottom:`server_top`},{light:9,sound:`glass`}),J(q.HQ_FLOOR,`HQ Floor`,`hq_floor`),J(q.CONCRETE,`Concrete`,`concrete`),J(q.RUST_METAL,`Rusty Metal`,`rust_metal`,{sound:`metal`}),J(q.STEEL,`Steel Plate`,`steel`,{sound:`metal`}),J(q.CRATE,`ARC Loot Crate`,{top:`crate_top`,side:`crate`,bottom:`crate_top`},{sound:`metal`,light:4}),J(q.HAZARD,`Hazard Stripes`,`hazard`,{sound:`metal`}),J(q.ASPHALT,`Asphalt`,`asphalt`),J(q.WHITE_PANEL,`White Panel`,`white_panel`,{sound:`metal`}),J(q.ORANGE_PANEL,`ARC Orange Panel`,`orange_panel`,{sound:`metal`}),J(q.BEACON,`Red Beacon`,`beacon`,{light:12,sound:`glass`});var gu={opaque:!1,cullSelf:!1,sound:`grass`,sway:.4};J(q.PLASTER,`Plaster Wall`,`plaster`),J(q.TERRACOTTA,`Roof Tiles`,`terracotta`),J(q.RED_LATTICE,`Red Girder`,`red_lattice`,{opaque:!1,cullSelf:!1,sound:`metal`}),J(q.PALM_LEAVES,`Palm Fronds`,`palm_leaves`,gu),J(q.DRY_GRASS,`Dry Grass`,{top:`dry_grass_top`,side:`dry_grass_side`,bottom:`dirt`},{sound:`grass`}),J(q.CONTAINER_RED,`Red Container`,`container_red`,{sound:`metal`}),J(q.CONTAINER_BLUE,`Blue Container`,`container_blue`,{sound:`metal`}),J(q.MED_BAG,`Medical Bag`,{top:`med_bag_top`,side:`med_bag`,bottom:`med_bag_top`},{sound:`grass`,light:3}),J(q.LOCKER,`Security Locker`,{top:`locker_top`,side:`locker`,bottom:`locker_top`},{sound:`metal`,light:3}),J(q.FLAGS,`Prayer Flags`,`flags`,{...hu,sway:1.5}),J(q.JUNGLE_LEAVES,`Jungle Leaves`,`jungle_leaves`,gu),J(q.PINE_LEAVES,`Pine Needles`,`pine_leaves`,gu),J(q.PALM_LOG,`Palm Trunk`,{top:`palm_top`,side:`palm_log`,bottom:`palm_top`},{sound:`wood`}),J(q.DARK_WINDOW,`Tinted Window`,`dark_window`,{sound:`glass`}),J(q.STRIPE_CONCRETE,`Striped Concrete`,`stripe_concrete`),J(q.ROCK,`Cliff Rock`,`rock`),J(q.HATCH,`Extraction Hatch`,{top:`hatch`,side:`hazard`,bottom:`steel`},{sound:`metal`,light:10,breakable:!1}),J(q.MOSS,`Mossy Grass`,{top:`moss_top`,side:`moss_side`,bottom:`dirt`},{sound:`grass`});var _u=Uint8Array.from(mu,e=>+!!e.opaque),vu=Uint8Array.from(mu,e=>e.light),yu=[q.GRASS,q.DIRT,q.STONE,q.COBBLE,q.PLANKS,q.LOG,q.LEAVES,q.GLASS,q.BRICKS,q.SAND,q.GRAVEL,q.SNOW,q.COAL_ORE,q.IRON_ORE,q.DIAMOND_ORE,q.WATER,q.BEDROCK,q.TORCH,q.LAMP,q.TALL_GRASS,q.FLOWER_RED,q.FLOWER_YELLOW,q.STONE_BRICKS,q.BOOKSHELF,q.SERVER,q.SCREEN,q.HQ_FLOOR,q.CONCRETE,q.RUST_METAL,q.STEEL,q.HAZARD,q.ASPHALT,q.WHITE_PANEL,q.ORANGE_PANEL,q.BEACON,q.CRATE,q.PLASTER,q.TERRACOTTA,q.RED_LATTICE,q.CONTAINER_RED,q.CONTAINER_BLUE,q.DARK_WINDOW,q.STRIPE_CONCRETE,q.ROCK,q.DRY_GRASS,q.MOSS,q.PALM_LOG,q.PALM_LEAVES,q.JUNGLE_LEAVES,q.PINE_LEAVES,q.FLAGS],bu=[q.GRASS,q.DIRT,q.STONE,q.COBBLE,q.PLANKS,q.LOG,q.GLASS,q.TORCH,q.LAMP],xu=40,Su=e=>e*Math.PI/180,Cu=[{id:`stella`,name:`Stella Montis`,angle:Su(0)},{id:`gate`,name:`The Blue Gate`,angle:Su(60)},{id:`spaceport`,name:`Spaceport`,angle:Su(120)},{id:`riven`,name:`Riven Tides`,angle:Su(180)},{id:`dam`,name:`Dam Battlegrounds`,angle:Su(240)},{id:`buried`,name:`Buried City`,angle:Su(300)}],wu=Su(40),Tu=55,Eu=e=>e<=0?0:e>=1?1:e*e*(3-2*e),Du=(e,t)=>Math.atan2(Math.sin(e-t),Math.cos(e-t)),Ou=(e,t,n)=>t*Math.sin(e.angle)-n*Math.cos(e.angle),ku=(e,t,n)=>t*Math.cos(e.angle)+n*Math.sin(e.angle),Au=(e,t,n=0)=>[Math.round(Math.sin(e.angle)*t+Math.cos(e.angle)*n),Math.round(-Math.cos(e.angle)*t+Math.sin(e.angle)*n)],ju=Object.fromEntries(Cu.map(e=>[e.id,e])),Mu=Object.fromEntries(Cu.map((e,t)=>[e.id,t])),Nu=150,Pu=55,Fu=235,Iu=22,Lu=44,Ru=class{constructor(e){this.b=e}set(e,t,n,r){let i=(e>>4)+`,`+(n>>4),a=this.b.get(i);a||this.b.set(i,a=[]),a.push(e,t,n,r)}box(e,t,n,r,i,a,o){for(let s=Math.min(e,r);s<=Math.max(e,r);s++)for(let e=Math.min(n,a);e<=Math.max(n,a);e++)for(let n=t;n<=i;n++)this.set(s,n,e,o)}walls(e,t,n,r,i,a,o){for(let s=t;s<=i;s++){for(let t=e;t<=r;t++)this.set(t,s,n,o),this.set(t,s,a,o);for(let t=n+1;t<a;t++)this.set(e,s,t,o),this.set(r,s,t,o)}}line(e,t,n,r,i,a,o,s=0){let c=Math.ceil(Math.max(Math.abs(r-e),Math.abs(i-t),Math.abs(a-n)))||1;for(let l=0;l<=c;l++){let u=l/c;this.set(Math.round(e+(r-e)*u),Math.round(t+(i-t)*u-s*4*u*(1-u)),Math.round(n+(a-n)*u),o)}}disc(e,t,n,r,i){for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++)a*a+o*o<=r*r+r&&this.set(e+a,t,n+o,i)}stairs(e,t,n,r,i,a=3,o=2){for(let s=0;s<a;s++)for(let c=0;c<o;c++){let[o,l]=r===`x`?[e+s,n+c]:[e+c,n+s];this.set(o,t+s,l,i),this.set(o,t+a,l,q.AIR)}}pad(e,t,n,r,i,a,o=14){for(let s=e;s<=n;s++)for(let e=t;e<=r;e++){for(let t=1;t<=4;t++)this.set(s,i-t,e,q.STONE);this.set(s,i,e,a);for(let t=1;t<=o;t++)this.set(s,i+t,e,q.AIR)}}},zu=class{constructor(e,t){this.n2=e,this.seed=t,this.buckets=new Map,this.vox=new Ru(this.buckets),this.cells=new Set,this.built=!1,this.landmarks=this.makeLandmarks(),this.extracts=[]}weights(e,t){let n=Math.hypot(e,t),r=Math.atan2(e,-t)+this.n2(e/260,t/260)*.25,i=0,a=0,o=Cu[0],s=Cu.map(e=>{let t=Eu(1-Math.abs(Du(r,e.angle))/wu);return i+=t,t>a&&(a=t,o=e),t});for(let e=0;e<s.length;e++)s[e]/=i||1;return{hub:1-Eu((n-Tu)/50),w:s,main:o,d:n}}zoneAt(e,t){let{hub:n,main:r}=this.weights(e,t);return n>.6?null:r}height(e,t,n){let{hub:r,w:i}=this.weights(e,t);if(r>=1)return n;let a=0;return Cu.forEach((r,o)=>{i[o]>.001&&(a+=i[o]*this.zoneHeight(r.id,e,t,n))}),Math.round(n*r+a*(1-r))}zoneHeight(e,t,n,r){let i=this.n2;if(e===`stella`){let e=1-Math.abs(i(t/110+50,n/110)),r=52+e*e*58+i(t/30,n/30)*4,[a,o]=this.landmarks.stella,s=Math.hypot(t-a,n-o);return s<46&&(r+=(70-r)*Eu((46-s)/16)),r}if(e===`gate`){let e=Eu((Math.abs(ku(ju.gate,t,n))-12)/26)**1.2;return 47+i(t/40,n/40)*2+e*(44+i(t/60+9,n/60)*18)+Math.abs(i(t/12,n/12))*e*6}if(e===`spaceport`)return 46+i(t/90,n/90)*1.5;if(e===`riven`){let e=Ou(ju.riven,t,n)+i(t/70,n/70)*18;return 45+i(t/50,n/50)*2-Eu((e-Fu+30)/40)*16}return e===`dam`?35+Eu((Math.abs(ku(ju.dam,t,n))-6)/34)**1.1*30+i(t/25,n/25)*3+Math.max(0,r-xu)*.2:47+Math.abs(i(t/38,n/38))*9+i(t/140,n/140)*4}waterLevel(e,t){let n=ju.dam;if(Ou(n,e,t)>152&&Math.abs(ku(n,e,t))<60){let{w:n}=this.weights(e,t);if(n[Mu.dam]>.5)return Pu}return xu}surface(e,t,n){let{hub:r,main:i}=this.weights(e,t);if(r>.55)return null;let a=G(e,11,t,this.seed);switch(i.id){case`stella`:return{top:n>66?q.SNOW:q.GRASS,filler:n>80?q.ROCK:q.DIRT,tree:`pine`,trees:.9,plants:.3};case`gate`:{let r=Math.abs(ku(ju.gate,e,t))<3,i=n>62;return{top:r?q.GRAVEL:i?q.ROCK:q.DRY_GRASS,filler:i?q.ROCK:q.DIRT,tree:`umbrella`,trees:r||i?0:.35,plants:r?0:.6}}case`spaceport`:{let n=(e%48+48)%48,r=(t%48+48)%48,i=n<4||r<4,o=n>10&&n<38&&r>10&&r<38&&G(Math.floor(e/48),0,Math.floor(t/48),this.seed)<.4;return{top:i?q.ASPHALT:o?q.CONCRETE:a<.2?q.SAND:q.DRY_GRASS,filler:q.DIRT,tree:`umbrella`,trees:i||o?0:.3,plants:i||o?0:.4}}case`riven`:{let n=Ou(ju.riven,e,t)+this.n2(e/70,t/70)*18>190;return{top:n?q.SAND:q.DRY_GRASS,filler:q.SAND,tree:`palm`,trees:n?.2:.3,plants:n?0:.5}}case`dam`:return{top:n<=42||a<.3?q.MOSS:q.GRASS,filler:q.DIRT,tree:`jungle`,trees:2.2,plants:1.6};default:return{top:q.SAND,filler:q.SAND,tree:`palm`,trees:.2,plants:0}}}makeLandmarks(){return{stella:Au(ju.stella,190),gate:Au(ju.gate,150),spaceport:Au(ju.spaceport,190)}}voxelsFor(e,t,n){this.prepare(n);let r=e*16,i=t*16;for(let[e,t]of[[Iu,(e,t)=>this.townCell(e,t,n)],[Lu,(e,t)=>this.propCell(e,t,n)]])for(let n=Math.floor((r-e)/e);n<=Math.floor((r+16+e)/e);n++)for(let r=Math.floor((i-e)/e);r<=Math.floor((i+16+e)/e);r++){let i=e+`:`+n+`,`+r;this.cells.has(i)||(this.cells.add(i),t(n,r))}return this.buckets.get(e+`,`+t)??[]}prepare(e){this.built||(this.built=!0,this.buildLandmarks(e))}nearLandmark(e,t,n){return this.spots.some(([r,i,a])=>Math.hypot(e-r,t-i)<n+a)}loot(e,t,n,r=0){let i=G(e,t+r,n,this.seed+21);this.vox.set(e,t,n,i<.5?q.CRATE:i<.8?q.MED_BAG:q.LOCKER)}townCell(e,t,n){let r=this.seed,i=this.vox;if(G(e,5,t,r)<.22)return;let a=e*Iu+11,o=t*Iu+11,{main:s,hub:c}=this.weights(a,o);if(s.id!==`buried`||c>.15||this.nearLandmark(a,o,12))return;let l=4+Math.floor(G(e,8,t,r)*4),u=4+Math.floor(G(e,9,t,r)*4),d=n(a,o),f=2+Math.floor(G(e,10,t,r)*4),p=d-3-Math.floor(G(e,14,t,r)*4),m=p+f*4,h=a-l,g=a+l,_=o-u,v=o+u,y=G(e,11,t,r)<.75?q.PLASTER:q.BRICKS;i.box(h+1,p,_+1,g-1,m+3,v-1,q.AIR),i.walls(h,p,_,g,m,v,y);for(let e=0;e<=f;e++)i.box(h+1,p+e*4,_+1,g-1,p+e*4,v-1,e===f?q.CONCRETE:q.PLANKS);for(let n=0;n<f;n++){let s=p+n*4+1;for(let e=h+2;e<=g-2;e+=3)for(let t of[_,v])i.set(e,s,t,q.AIR),i.set(e,s+1,t,q.AIR);for(let e=_+2;e<=v-2;e+=3)for(let t of[h,g])i.set(t,s,e,q.AIR),i.set(t,s+1,e,q.AIR);G(e,20+n,t,r)<.55&&this.loot(a+Math.round((G(e,30+n,t,r)-.5)*(l-2)*2),s,o,n),(n<f-1||G(e,18,t,r)<.5)&&i.stairs(h+1,s,_+1,`x`,q.PLANKS)}for(let e=h+1;e<g;e++)for(let t=_+1;t<v;t++)for(let n=p+1;n<d-1;n++)i.set(e,n,t,q.SAND);if(G(e,12,t,r)<.6){let e=l>=u,t=e?u:l;for(let n=0;n<=t+1;n++)for(let r=e?h-1:_-1;r<=(e?g+1:v+1);r++)for(let s of[-1,1]){let c=(e?o:a)+s*(t+1-n);e?i.set(r,m+n,c,q.TERRACOTTA):i.set(c,m+n,r,q.TERRACOTTA)}}else i.walls(h,m+1,_,g,m+1,v,y),G(e,13,t,r)<.4&&i.line(h+1,m+2,o,h+1,m+7,o,q.STEEL);if(G(e,15,t,r)<.35){let n=G(e,16,t,r)<.5?h:g,a=G(e,17,t,r)<.5?_:v;for(let e=m-5;e<=m+8;e++)for(let t=-2;t<=2;t++)for(let o=-2;o<=2;o++)G(n+t,e,a+o,r)<.75-(m-e)*.08&&i.set(n+t,e,a+o,q.AIR)}}propCell(e,t,n){let r=this.seed,i=e*Lu+10+Math.floor(G(e,40,t,r)*24),a=t*Lu+10+Math.floor(G(e,41,t,r)*24),{main:o,hub:s,w:c}=this.weights(i,a);if(s>.1||c[Mu[o.id]]<.7||this.nearLandmark(i,a,14))return;let l=G(e,42,t,r),u=n(i,a);if(!(u<=this.waterLevel(i,a)))switch(o.id){case`dam`:l<.4?this.discTower(i,a,u,18+Math.floor(l*30)):l<.6?this.husk(i,a,u):l<.75&&this.waterTower(i,a,u);break;case`spaceport`:l<.4?this.containers(i,a,u,2+Math.floor(l*6)):l<.6?this.pole(i,a,u):l<.7&&this.husk(i,a,u);break;case`riven`:l<.45?this.containers(i,a,u,2+Math.floor(l*8)):l<.6&&this.pole(i,a,u);break;case`gate`:l<.25?this.flagMast(i,a,u,16):l<.4&&this.husk(i,a,u);break;case`stella`:l<.15&&this.husk(i,a,u)}}discTower(e,t,n,r){let i=this.vox;i.box(e,n-2,t,e+1,n+r,t+1,q.STEEL),i.box(e-1,n+Math.floor(r*.55),t-1,e+2,n+Math.floor(r*.55)+2,t+2,q.WHITE_PANEL);let a=6+(r>30?2:0),o=n+r;for(let n=-a;n<=a+1;n++)for(let r=-a;r<=a+1;r++){let s=Math.hypot(n-.5,r-.5);if(s>a+.5)continue;let c=s>a-.8||s<2,l=Math.atan2(r-.5,n-.5)/Math.PI*6,u=Math.abs(l-Math.round(l))<.15;i.set(e+n,o,t+r,c||u?q.WHITE_PANEL:q.DARK_WINDOW)}i.line(e,o+1,t,e,o+5,t,q.STEEL),i.set(e,o+6,t,q.BEACON)}husk(e,t,n){let r=this.vox,i=this.seed,a=4+Math.floor(G(e,1,t,i)*3),o=n+1;for(let n=-a;n<=a;n++)for(let s=-a;s<=a;s++)for(let c=-a;c<=a;c++){let l=Math.hypot(n,s*1.4,c);l>a||l<a-1.2||G(e+n,o+s,t+c,i)<.12||r.set(e+n,o+s,t+c,s===1||s===2?q.ORANGE_PANEL:q.RUST_METAL)}r.set(e,o+1,t-a,q.BEACON),this.loot(e,o-1,t,3);let s=G(e,2,t,i)*Math.PI;for(let i=0;i<4;i++){let c=s+i*Math.PI/2,l=e+Math.round(Math.cos(c)*(a+4)),u=t+Math.round(Math.sin(c)*(a+4)),d=e+Math.round(Math.cos(c)*(a+8)),f=t+Math.round(Math.sin(c)*(a+8));r.line(e+Math.round(Math.cos(c)*a),o,t+Math.round(Math.sin(c)*a),l,o+5,u,q.RUST_METAL),r.line(l,o+5,u,d,n-1,f,q.STEEL)}}waterTower(e,t,n){let r=this.vox;for(let[i,a]of[[-3,-3],[3,-3],[-3,3],[3,3]])r.line(e+i,n,t+a,e+Math.sign(i)*2,n+12,t+Math.sign(a)*2,q.STEEL);for(let i=n+12;i<=n+18;i++)r.disc(e,i,t,4,i===n+12||i===n+18?q.STEEL:q.WHITE_PANEL);r.box(e-3,n+13,t-3,e+3,n+17,t+3,q.AIR),r.disc(e,n+19,t,2,q.STEEL),this.loot(e,n+13,t,4)}pole(e,t,n){let r=this.vox;r.box(e,n+1,t,e,n+12,t,q.LOG),r.box(e-2,n+11,t,e+2,n+11,t,q.LOG),r.set(e-2,n+12,t,q.STEEL),r.set(e+2,n+12,t,q.STEEL)}containers(e,t,n,r){let i=this.vox,a=this.seed;i.pad(e-6,t-12,e+6,t+12,n,q.CONCRETE,12);for(let o=0;o<r;o++){let r=o%3,s=Math.floor(o/3),c=e-5+r*4,l=t-4,u=n+1+s*3,d=G(e+o,3,t,a),f=d<.45?q.CONTAINER_RED:d<.8?q.CONTAINER_BLUE:q.RUST_METAL;i.box(c,u,l,c+2,u+2,l+7,f),i.box(c+1,u,l+1,c+1,u+1,l+6,q.AIR);let p=s===0&&G(e+o,4,t,a)<.5;i.box(c,u,l+7,c+2,u+2,l+7,p?q.AIR:q.STEEL),i.box(c+1,u,l+7,c+1,u+1,l+7,p?q.AIR:q.STEEL),i.set(c+1,u+2,l+7,f),p&&this.loot(c+1,u,l+2,o)}}flagMast(e,t,n,r){let i=this.vox;for(let a=n+1;a<=n+r;a++){let r=Math.floor((a-n)/4)%2?q.RED_LATTICE:q.WHITE_PANEL;i.set(e,a,t,r),i.set(e+1,a,t,r),i.set(e,a,t+1,r),i.set(e+1,a,t+1,r)}i.box(e-1,n+r-6,t-1,e+2,n+r-6,t+2,q.STEEL),i.set(e,n+r+1,t,q.BEACON);for(let[a,o]of[[-12,0],[13,4],[2,-12],[-4,13]])i.line(e+Math.sign(a),n+r-2,t+Math.sign(o),e+a,n+4,t+o,q.FLAGS,3),i.box(e+a,n+1,t+o,e+a,n+3,t+o,q.LOG)}extract(e,t,n,r){let i=this.vox,a=r(e,t);i.pad(e-3,t-3,e+3,t+3,a,q.HAZARD,8),i.box(e-1,a,t-1,e+1,a,t+1,q.HATCH);for(let[n,r]of[[-3,-3],[3,-3],[-3,3],[3,3]])i.box(e+n,a+1,t+r,e+n,a+5,t+r,q.STEEL);i.walls(e-3,a+6,t-3,e+3,a+6,t+3,q.STEEL);for(let[n,r]of[[-3,-3],[3,-3],[-3,3],[3,3]])i.set(e+n,a+7,t+r,q.BEACON);this.extracts.push({x:e+.5,y:a+1,z:t+.5,name:n})}buildLandmarks(e){let t=this.vox,n=this.seed,r=this.landmarks;this.spots=[];let i=(e,t,n)=>this.spots.push([e,t,n]);{let[n,a]=r.stella,o=e(n,a);i(n,a,26),t.pad(n-16,a-9,n+16,a+9,o,q.CONCRETE,14),t.box(n-14,o+1,a-6,n+14,o+8,a+6,q.WHITE_PANEL),t.box(n-13,o+1,a-5,n+13,o+7,a+5,q.AIR),t.box(n-14,o+1,a-6,n+14,o+1,a+6,q.HAZARD),t.box(n-13,o+1,a-5,n+13,o+1,a+5,q.HQ_FLOOR);for(let e=n-12;e<=n+12;e+=3)t.box(e,o+3,a-6,e+1,o+5,a-6,q.DARK_WINDOW),t.box(e,o+3,a+6,e+1,o+5,a+6,q.DARK_WINDOW);t.box(n-1,o+2,a+6,n+1,o+4,a+6,q.AIR),t.box(n-15,o+9,a-7,n+15,o+9,a+7,q.STEEL);for(let e=n-10;e<=n+10;e+=5)t.set(e,o+2,a-5,q.SERVER);for(let e=n-11;e<=n+11;e+=7)this.loot(e,o+2,a+3,e);for(let e=o+10;e<=o+38;e++){let r=(e-o)%5?q.RED_LATTICE:q.STEEL;t.set(n+10,e,a,r),t.set(n+11,e,a,r)}t.set(n+10,o+39,a,q.BEACON),this.extract(...Au(ju.stella,150,36),`Cargo Elevator`,e),i(...Au(ju.stella,150,36),6)}{let n=ju.gate,[a,o]=r.gate,s=e(a,o);i(a,o,22);for(let e=-17;e<=17;e++)for(let r=-2;r<=2;r++){let i=a+Math.round(Math.cos(n.angle)*e+Math.sin(n.angle)*r),c=o+Math.round(Math.sin(n.angle)*e-Math.cos(n.angle)*r);if(Math.abs(e)>=12)for(let e=s-2;e<=s+30;e++)t.set(i,e,c,e%6==0?q.HAZARD:q.STRIPE_CONCRETE);else for(let n=s+25;n<=s+30;n++)t.set(i,n,c,n===s+25&&e%3==0?q.BEACON:q.STRIPE_CONCRETE)}let[c,l]=Au(n,120,24);this.flagMast(c,l,e(c,l),30),i(c,l,14);let[u,d]=Au(n,205,-20);this.flagMast(u,d,e(u,d),24),i(u,d,14),this.extract(...Au(n,225,4),`Raider Hatch`,e),i(...Au(n,225,4),6)}{let a=ju.spaceport,[o,s]=r.spaceport,c=e(o,s);i(o,s,30),t.pad(o-24,s-24,o+24,s+24,c,q.CONCRETE,18);for(let e of[-6,6]){let n=o+e;for(let e=c+1;e<=c+62;e++){let r=e-c,i=r<20?4:r<40?3:r<56?2:4;t.walls(n-i,e,s-i,n+i,e,s+i,r>=56?q.CONCRETE:q.WHITE_PANEL),t.box(n-i,e,s-i-1,n+i,e,s-i-1,q.RED_LATTICE),r%8==0&&r<56&&t.box(n-i,e,s-i-2,n+i,e,s-i-2,q.RED_LATTICE)}t.box(n-4,c+62,s-4,n+4,c+62,s+4,q.CONCRETE),t.line(n-1,c+63,s,n-1,c+72,s,q.STEEL),t.line(n+1,c+63,s,n+1,c+69,s,q.STEEL),t.set(n-1,c+73,s,q.BEACON),t.box(n-1,c+1,s+4,n+1,c+3,s+4,q.AIR),t.set(n,c+1,s,q.LOCKER)}t.box(o-3,c+24,s-1,o+3,c+24,s+1,q.STEEL);let[l,u]=Au(a,190,20);for(let e=c+1;e<=c+44;e++){let n=e-c,r=n>36?3.2-(n-36)*.4:3.2;for(let i=-4;i<=4;i++)for(let a=-4;a<=4;a++){let o=Math.hypot(i,a);o<=r&&o>r-1.1&&t.set(l+i,e,u+a,n%10==4||n%10==5?q.ORANGE_PANEL:q.WHITE_PANEL)}}for(let[e,n]of[[-5,0],[5,0],[0,-5],[0,5]])t.box(l+e,c+1,u+n,l+e,c+6,u+n,q.STEEL);this.loot(l,c+1,u,1);let[d,f]=Au(a,150,-38),p=e(d,f);i(d,f,18),t.pad(d-12,f-10,d+12,f+10,p,q.CONCRETE,22);for(let[e,n]of[[-6,-4],[6,-4],[-6,4],[6,4]])t.box(d+e-1,p+1,f+n-1,d+e,p+9,f+n,q.CONCRETE);t.box(d-12,p+10,f-8,d+12,p+18,f+8,q.CONCRETE),t.box(d-11,p+11,f-7,d+11,p+17,f+7,q.AIR),t.walls(d-12,p+12,f-8,d+12,p+12,f+8,q.STRIPE_CONCRETE),t.walls(d-12,p+14,f-8,d+12,p+15,f+8,q.DARK_WINDOW),t.box(d-13,p+18,f-9,d+13,p+18,f+9,q.CONCRETE),t.line(d-8,p+19,f,d-8,p+27,f,q.STEEL),t.line(d+6,p+19,f-3,d+6,p+24,f-3,q.STEEL);for(let e=0;e<=9;e++)t.box(d-1,p+1+e,f+10-e,d+1,p+1+e,f+10-e,q.CONCRETE);t.box(d-1,p+10,f+2,d+1,p+10,f+8,q.AIR);for(let e=d-9;e<=d+9;e+=6)this.loot(e,p+11,f-5,e);let[m,h]=Au(a,135,40),g=e(m,h);i(m,h,16),t.pad(m-11,h-15,m+11,h+15,g,q.CONCRETE,13);for(let e=-15;e<=15;e++)for(let r=-11;r<=11;r++)for(let i=1;i<=11;i++){let a=Math.hypot(r,i*1.05);Math.abs(e)===15?a<11&&!(a<10&&i<=6&&Math.abs(r)<4)&&t.set(m+r,g+i,h+e,q.RUST_METAL):a>=10&&a<11&&t.set(m+r,g+i,h+e,G(r,i,e,n)<.08?q.AIR:e%5==0?q.STEEL:q.RUST_METAL)}for(let e=-12;e<=12;e+=6)this.loot(m-6,g+1,h+e,e);let[_,v]=Au(a,245,28),y=e(_,v);i(_,v,10),t.pad(_-5,v-5,_+5,v+5,y,q.CONCRETE,40),t.walls(_-2,y+1,v-2,_+2,y+30,v+2,q.CONCRETE),t.box(_,y+1,v+2,_,y+2,v+2,q.AIR);for(let e=y+1;e<=y+30;e++)t.set(_-1,e,v-1,q.STEEL);t.box(_-5,y+31,v-5,_+5,y+31,v+5,q.CONCRETE),t.walls(_-5,y+32,v-5,_+5,y+34,v+5,q.DARK_WINDOW),t.box(_-5,y+35,v-5,_+5,y+35,v+5,q.CONCRETE),t.set(_,y+36,v,q.BEACON),this.loot(_+2,y+32,v+2,2),this.loot(_-3,y+32,v,3),this.extract(...Au(a,270,-10),`Cargo Elevator`,e),i(...Au(a,270,-10),6)}{let r=ju.riven,[a,o]=Au(r,165,-40),s=e(a,o);i(a,o,20),t.pad(a-14,o-12,a+14,o+12,s,q.CONCRETE,16),t.walls(a-12,s+1,o-6,a+12,s+32,o+6,q.WHITE_PANEL);for(let e=0;e<8;e++){let r=s+1+e*4;t.box(a-11,r-1,o-5,a+11,r-1,o+5,e?q.CONCRETE:q.HQ_FLOOR),t.box(a-11,r,o-5,a+11,r+2,o+5,q.AIR),t.walls(a-12,r+1,o-6,a+12,r+2,o+6,q.DARK_WINDOW),t.box(a-12,r-1,o+7,a+12,r-1,o+8,q.STRIPE_CONCRETE),G(a,e,o,n)<.7&&this.loot(a-8+e*2,r,o,e);for(let i=a-9;i<=a+9;i+=9)G(i,e,o,n+1)<.25&&t.box(i-1,r,o+6,i+1,r+2,o+6,q.AIR);e<7&&t.stairs(a+9,r,o-4,`z`,q.CONCRETE)}t.box(a-12,s+33,o-6,a+12,s+33,o+6,q.CONCRETE),t.box(a-1,s+1,o+6,a+1,s+2,o+6,q.AIR);for(let e=0;e<7;e++)t.set(a-9+e*3,s+34,o+6,q.ORANGE_PANEL);for(let e=s+1;e<=s+32;e+=4)for(let n=0;n<4;n++)t.box(a-11+n*7,e,o-7,a-9+n*7,e,o-7,q.RED_LATTICE);let c=a,l=o+13;t.pad(c-8,l-3,c+8,l+6,s,q.WHITE_PANEL,6),t.box(c-6,s-2,l-1,c+6,s,l+4,q.WATER);let[u,d]=Au(r,210,30),f=e(u,d);i(u,d,30),t.pad(u-26,d-18,u+26,d+18,f,q.ASPHALT,16);for(let e=-2;e<=2;e++)this.containers(u+e*10,d-3,f,3+(e+2)*2%7);for(let e=-1;e<=1;e++){let n=u+e*16;for(let[e,r]of[[-5,-12],[5,-12],[-5,12],[5,12]])t.box(n+e,f+1,d+r,n+e+1,f+26,d+r,q.RED_LATTICE);for(let e of[-12,12])t.box(n-5,f+26,d+e,n+6,f+27,d+e,q.RED_LATTICE);t.box(n-1,f+27,d-16,n+2,f+29,d+30,q.RED_LATTICE),t.box(n-1,f+23,d+2,n+2,f+26,d+5,q.WHITE_PANEL),t.box(n,f+24,d+2,n+1,f+25,d+2,q.DARK_WINDOW),t.line(n,f+26,d+18,n,f+12,d+18,q.STEEL)}let[p,m]=Au(r,150,48),h=e(p,m);i(p,m,12),t.pad(p-9,m-7,p+9,m+7,h,q.CONCRETE,16),t.walls(p-8,h+1,m-6,p+8,h+10,m+6,q.PLASTER),t.box(p-7,h+5,m-5,p+7,h+5,m+5,q.PLANKS);for(let e=p-6;e<=p+6;e+=3)for(let n of[h+2,h+7])t.set(e,n,m-6,q.DARK_WINDOW),t.set(e,n+1,m-6,q.DARK_WINDOW);t.box(p-9,h+11,m-7,p+9,h+11,m+7,q.TERRACOTTA),t.box(p-1,h+1,m+6,p+1,h+3,m+6,q.AIR),this.loot(p-5,h+1,m,1),this.loot(p+5,h+6,m+2,2);let[g,_]=Au(r,225,-10),[v,y]=Au(r,305,30);for(let e=-1;e<=1;e++)t.line(g+e,42,_,v+e,42,y,q.CONCRETE);for(let e=-1;e<=1;e++)t.line(g+e,41,_,v+e,41,y,q.CONCRETE);for(let e=28;e<=xu;e++)t.line(g,e,_,v,e,y,q.STONE);t.box(v-1,43,y-1,v+1,49,y+1,q.WHITE_PANEL),t.set(v,50,y,q.BEACON),this.extract(...Au(r,135,10),`Airshaft`,e),i(...Au(r,135,10),6)}{let n=ju.dam,[r,a]=Au(n,Nu);i(r,a,40);for(let e=-40;e<=40;e++)for(let i=-3;i<=3;i++){let o=r+Math.round(Math.cos(n.angle)*e+Math.sin(n.angle)*i),s=a+Math.round(Math.sin(n.angle)*e-Math.cos(n.angle)*i),c=58+(Math.abs(e)%12<3?3:0);for(let n=30;n<=c;n++){let r=i===-3,a=Math.abs(e)%12<3?q.STEEL:r&&n%5==0?q.STONE_BRICKS:q.CONCRETE;n===c&&Math.abs(e)%12<3&&(a=q.BEACON),n>58&&Math.abs(i)<3&&Math.abs(e)%12>=3&&(a=q.AIR),t.set(o,n,s,a)}}for(let e=-3;e<=3;e++){let i=r+Math.round(Math.cos(n.angle)*e-Math.sin(n.angle)*4),o=a+Math.round(Math.sin(n.angle)*e+Math.cos(n.angle)*4);for(let e=38;e<=Pu;e++)t.set(i,e,o,q.WATER)}let[o,s]=Au(n,125,-46),c=e(o,s);i(o,s,10),t.pad(o-5,s-5,o+5,s+5,c,q.CONCRETE,30),t.walls(o-3,c+1,s-3,o+3,c+22,s+3,q.CONCRETE);for(let e=c+4;e<=c+20;e+=4)t.box(o-3,e,s-3,o+3,e,s-3,q.DARK_WINDOW);t.box(o-5,c+23,s-5,o+5,c+23,s+5,q.CONCRETE),t.walls(o-5,c+24,s-5,o+5,c+26,s+5,q.DARK_WINDOW),t.box(o-5,c+27,s-5,o+5,c+27,s+5,q.STEEL),t.box(o,c+1,s+3,o,c+2,s+3,q.AIR),t.set(o,c+28,s,q.BEACON),this.loot(o+2,c+24,s+2,1);for(let e=c+1;e<=c+22;e++)t.set(o-2,e,s-2,q.STEEL);let[l,u]=Au(n,112,44),d=e(l,u);i(l,u,22),t.pad(l-10,u-10,l+10,u+10,d,q.CONCRETE,14);for(let e=-8;e<=8;e++)for(let n=-8;n<=8;n++)for(let r=1;r<=8;r++){let i=Math.hypot(e,r*1.1,n);i<=8.5&&i>7.5&&t.set(l+e,d+r,u+n,r%3==0?q.STEEL:q.GLASS)}t.box(l-1,d+1,u+8,l+1,d+3,u+8,q.AIR);for(let e=0;e<6;e++)t.set(l-5+e*2,d+1,u-3+e%2*6,q.JUNGLE_LEAVES);this.loot(l,d+1,u,5);for(let[t,n,r]of[[-16,-8,26],[14,-12,34],[16,12,22],[-12,16,30]])this.discTower(l+t,u+n,e(l+t,u+n),r);let[f,p]=Au(n,200,-78),m=e(f,p);i(f,p,14),t.pad(f-11,p-8,f+11,p+8,m,q.CONCRETE,16),t.walls(f-10,m+1,p-7,f+10,m+9,p+7,q.WHITE_PANEL),t.box(f-9,m+5,p-6,f+9,m+5,p+6,q.CONCRETE),t.walls(f-10,m+2,p-7,f+10,m+3,p+7,q.DARK_WINDOW),t.walls(f-10,m+7,p-7,f+10,m+8,p+7,q.DARK_WINDOW),t.box(f-11,m+10,p-8,f+11,m+10,p+8,q.STEEL),t.box(f-1,m+1,p+7,f+1,m+3,p+7,q.AIR);for(let e=f-7;e<=f+7;e+=7)this.loot(e,m+1,p-4,e),t.set(e,m+6,p-5,q.SERVER);this.extract(...Au(n,140,78),`Cargo Elevator`,e),i(...Au(n,140,78),6),this.extract(...Au(n,215,75),`Raider Hatch`,e),i(...Au(n,215,75),6)}{let n=ju.buried,[r,a]=Au(n,165,0),o=e(r,a);i(r,a,20),t.pad(r-14,a-14,r+14,a+14,o,q.STONE_BRICKS,16),t.walls(r-3,o+1,a-3,r+3,o+32,a+3,q.PLASTER);for(let e=o+4;e<=o+30;e+=9)t.walls(r-4,e,a-4,r+4,e,a+4,q.BRICKS);for(let e=o+26;e<=o+29;e++)for(let n of[-1,0,1])t.set(r+n,e,a-3,q.AIR),t.set(r+n,e,a+3,q.AIR),t.set(r-3,e,a+n,q.AIR),t.set(r+3,e,a+n,q.AIR);t.set(r,o+28,a,q.LAMP);for(let e=0;e<=4;e++)t.box(r-4+e,o+33+e,a-4+e,r+4-e,o+33+e,a+4-e,q.TERRACOTTA);t.box(r,o+1,a+3,r,o+2,a+3,q.AIR),this.loot(r,o+1,a,7),t.walls(r+4,o+1,a-6,r+20,o+12,a+6,q.PLASTER);for(let e=0;e<=7;e++)t.box(r+3,o+13+e,a-7+e,r+21,o+13+e,a+7-e,q.TERRACOTTA);t.box(r+20,o+1,a-1,r+20,o+5,a+1,q.AIR);for(let e=r+7;e<=r+17;e+=5)t.box(e,o+5,a-6,e,o+9,a-6,q.GLASS),t.box(e,o+5,a+6,e,o+9,a+6,q.GLASS);this.loot(r+12,o+1,a,8);let[s,c]=Au(n,215,-40),l=e(s,c)-3;i(s,c,16),t.box(s-11,l+1,c-8,s+11,l+20,c+8,q.AIR),t.walls(s-11,l,c-8,s+11,l+20,c+8,q.WHITE_PANEL);for(let e=0;e<5;e++){let n=l+e*4;t.box(s-10,n,c-7,s+10,n,c+7,q.CONCRETE),t.walls(s-11,n+2,c-8,s+11,n+3,c+8,q.DARK_WINDOW),this.loot(s-6+e*3,n+1,c-4,e),t.set(s+6,n+1,c+4,q.MED_BAG),e<4&&t.stairs(s-10,n+1,c+1,`x`,q.CONCRETE)}t.box(s-11,l+21,c-8,s+11,l+21,c+8,q.CONCRETE);for(let e=l+12;e<=l+18;e++)t.set(s,e,c-9,q.BEACON);for(let e=s-3;e<=s+3;e++)t.set(e,l+15,c-9,q.BEACON);t.box(s-1,l+1,c+8,s+1,l+7,c+8,q.AIR);let[u,d]=Au(n,245,40),f=e(u,d);i(u,d,16),t.pad(u-12,d-12,u+12,d+12,f,q.CONCRETE,24),t.walls(u-8,f+1,d-6,u+8,f+6,d+6,q.PLASTER),t.box(u-8,f+7,d-6,u+8,f+7,d+6,q.CONCRETE),t.box(u-1,f+1,d+6,u+1,f+3,d+6,q.AIR),this.loot(u,f+1,d,9);for(let[e,n,r]of[[-5,0,5],[6,-2,4]]){let i=u+e,a=d+n,o=f+8;t.box(i,o,a,i,o+3,a,q.STEEL);for(let e=-r;e<=r;e++)for(let n=-r;n<=r;n++){let s=Math.hypot(e,n);s<=r&&t.set(i+e,o+4+Math.round(s*s*.12)+Math.round(n*.5),a+n,q.WHITE_PANEL)}t.line(i,o+4,a,i,o+9,a-2,q.STEEL)}for(let e=f+8;e<=f+26;e++)t.set(u+10,e,d+10,e%4?q.RED_LATTICE:q.STEEL);t.set(u+10,f+27,d+10,q.BEACON);let[p,m]=Au(n,135,-26),h=e(p,m);i(p,m,10),t.pad(p-6,m-6,p+6,m+6,h,q.STONE_BRICKS,8),t.box(p-3,h-8,m-12,p+3,h-1,m+5,q.CONCRETE),t.box(p-2,h-7,m-11,p+2,h-2,m+4,q.AIR),t.box(p-2,h-1,m-3,p+2,h,m+4,q.AIR);for(let e=0;e<8;e++)t.box(p-1,h-7+e,m-3+e,p+1,h-7+e,m-3+e,q.STONE_BRICKS);t.set(p,h-2,m-9,q.LAMP),t.set(p,h-2,m-5,q.LAMP),t.box(p-1,h-8,m-10,p+1,h-8,m-8,q.HATCH),this.extracts.push({x:p+.5,y:h-7,z:m-8.5,name:`Metro Station`}),t.walls(p-3,h+1,m-4,p+3,h+1,m+5,q.STEEL),t.box(p-1,h+1,m+5,p+1,h+1,m+5,q.AIR),t.box(p-2,h+4,m+5,p+2,h+5,m+5,q.STRIPE_CONCRETE),t.box(p-3,h+2,m+5,p-3,h+4,m+5,q.STEEL),t.box(p+3,h+2,m+5,p+3,h+4,m+5,q.STEEL)}}dropPoint(e){let t={stella:130,gate:120,spaceport:120,riven:120,dam:115,buried:125}[e];return Au(ju[e],t,8)}tree(e,t,n,r,i){let a=this.seed,o=e=>G(t,e,r,a);if(e===`palm`){let e=6+Math.floor(o(1)*5),a=o(2)<.5?1:-1,s=o(3)<.5?1:-1,c=t,l=r;for(let t=0;t<e;t++)t===Math.floor(e/2)&&(o(4)<.6?c+=a:l+=s),i(c,n+t,l,q.PALM_LOG,!1);let u=n+e;i(c,u,l,q.PALM_LEAVES,!0);for(let e=0;e<8;e++){let t=[1,1,0,-1,-1,-1,0,1][e],n=[0,1,1,1,0,-1,-1,-1][e];for(let e=1;e<=4;e++)i(c+t*e,u-(e>2?e-2:0),l+n*e,q.PALM_LEAVES,!0)}}else if(e===`umbrella`){let e=7+Math.floor(o(1)*5);for(let a=0;a<e;a++)i(t,n+a,r,q.LOG,!1);let a=3+Math.floor(o(2)*2),s=n+e;for(let e=-a;e<=a;e++)for(let n=-a;n<=a;n++){let c=Math.hypot(e,n);c<=a+.3&&o(10+e*9+n)>.08&&i(t+e,s,r+n,q.PINE_LEAVES,!0),c<=a-1.2&&i(t+e,s+1,r+n,q.PINE_LEAVES,!0)}}else if(e===`pine`){let e=7+Math.floor(o(1)*5);for(let a=0;a<e;a++)i(t,n+a,r,q.LOG,!1);for(let a=2;a<=e+1;a++){let o=Math.max(0,Math.round((e+1-a)*.45+(a%2?0:.5)));for(let e=-o;e<=o;e++)for(let s=-o;s<=o;s++)Math.abs(e)+Math.abs(s)<=o+.5&&i(t+e,n+a,r+s,q.PINE_LEAVES,!0)}}else if(e===`jungle`){let e=8+Math.floor(o(1)*7);for(let a=0;a<e;a++)i(t,n+a,r,q.LOG,!1);let a=(e,t,n,r)=>{for(let a=-r;a<=r;a++)for(let s=-2;s<=1;s++)for(let c=-r;c<=r;c++)Math.hypot(a,s*1.6,c)<=r+.2&&o(a*7+s*31+c*3+50)>.1&&i(e+a,t+s,n+c,q.JUNGLE_LEAVES,!0)};if(a(t,n+e,r,3+Math.floor(o(2)*2)),e>10){let s=t+(o(5)<.5?3:-3),c=r+(o(6)<.5?2:-2);i(t+Math.sign(s-t),n+e-4,r,q.LOG,!1),a(s,n+e-4,c,2)}}else return!1}crateAt(e,t){return G(e,13,t,this.seed)<5e-4}containerAt(e,t){let n=G(e,14,t,this.seed);return n<.55?q.CRATE:n<.85?q.MED_BAG:q.LOCKER}},Bu=Math.sqrt(3),Vu=Math.sqrt(5),Hu=.5*(Bu-1),Uu=(3-Bu)/6,Wu=1/3,Gu=1/6;(Vu-1)/4,(5-Vu)/20;var Ku=e=>Math.floor(e)|0,qu=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Ju=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Yu(e=Math.random){let t=Zu(e),n=new Float64Array(t).map(e=>qu[e%12*2]),r=new Float64Array(t).map(e=>qu[e%12*2+1]);return function(e,i){let a=0,o=0,s=0,c=(e+i)*Hu,l=Ku(e+c),u=Ku(i+c),d=(l+u)*Uu,f=l-d,p=u-d,m=e-f,h=i-p,g,_;m>h?(g=1,_=0):(g=0,_=1);let v=m-g+Uu,y=h-_+Uu,b=m-1+2*Uu,x=h-1+2*Uu,S=l&255,C=u&255,w=.5-m*m-h*h;if(w>=0){let e=S+t[C],i=n[e],o=r[e];w*=w,a=w*w*(i*m+o*h)}let T=.5-v*v-y*y;if(T>=0){let e=S+g+t[C+_],i=n[e],a=r[e];T*=T,o=T*T*(i*v+a*y)}let E=.5-b*b-x*x;if(E>=0){let e=S+1+t[C+1],i=n[e],a=r[e];E*=E,s=E*E*(i*b+a*x)}return 70*(a+o+s)}}function Xu(e=Math.random){let t=Zu(e),n=new Float64Array(t).map(e=>Ju[e%12*3]),r=new Float64Array(t).map(e=>Ju[e%12*3+1]),i=new Float64Array(t).map(e=>Ju[e%12*3+2]);return function(e,a,o){let s,c,l,u,d=(e+a+o)*Wu,f=Ku(e+d),p=Ku(a+d),m=Ku(o+d),h=(f+p+m)*Gu,g=f-h,_=p-h,v=m-h,y=e-g,b=a-_,x=o-v,S,C,w,T,E,D;y>=b?b>=x?(S=1,C=0,w=0,T=1,E=1,D=0):y>=x?(S=1,C=0,w=0,T=1,E=0,D=1):(S=0,C=0,w=1,T=1,E=0,D=1):b<x?(S=0,C=0,w=1,T=0,E=1,D=1):y<x?(S=0,C=1,w=0,T=0,E=1,D=1):(S=0,C=1,w=0,T=1,E=1,D=0);let ee=y-S+Gu,O=b-C+Gu,k=x-w+Gu,te=y-T+2*Gu,A=b-E+2*Gu,ne=x-D+2*Gu,j=y-1+3*Gu,re=b-1+3*Gu,M=x-1+3*Gu,ie=f&255,ae=p&255,oe=m&255,se=.6-y*y-b*b-x*x;if(se<0)s=0;else{let e=ie+t[ae+t[oe]];se*=se,s=se*se*(n[e]*y+r[e]*b+i[e]*x)}let ce=.6-ee*ee-O*O-k*k;if(ce<0)c=0;else{let e=ie+S+t[ae+C+t[oe+w]];ce*=ce,c=ce*ce*(n[e]*ee+r[e]*O+i[e]*k)}let le=.6-te*te-A*A-ne*ne;if(le<0)l=0;else{let e=ie+T+t[ae+E+t[oe+D]];le*=le,l=le*le*(n[e]*te+r[e]*A+i[e]*ne)}let ue=.6-j*j-re*re-M*M;if(ue<0)u=0;else{let e=ie+1+t[ae+1+t[oe+1]];ue*=ue,u=ue*ue*(n[e]*j+r[e]*re+i[e]*M)}return 32*(s+c+l+u)}}function Zu(e){let t=new Uint8Array(512);for(let e=0;e<256;e++)t[e]=e;for(let n=0;n<255;n++){let r=n+~~(e()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}for(let e=256;e<512;e++)t[e]=t[e-256];return t}var Qu=10,$u=4,ed=[-8,-4,0,4,8],td=-5;function nd(e,t,n=0){return Math.abs(e+.5)<=22.5+n&&Math.abs(t+.5)<=18.5+n}function rd(e,t){return Math.max(t+3,Math.min(t+18,e(0,0)))}function id(e,t,n,r){let i=Math.max(Math.abs(e+.5)-22-.5,Math.abs(t+.5)-18-.5,0);if(i===0)return r;if(i>=Qu)return n;let a=i/Qu;return Math.round(r+(n-r)*a*a*(3-2*a))}function ad(e,t,n,r){let i=Math.abs(e),a=Math.abs(n);if(i>22||a>18)return;let o=t-r;if(!(o<0||o>8))return i===22||a===18?o===0?q.STONE_BRICKS:n===18&&i<=2&&o<=3?q.AIR:o<=$u?q.STONE_BRICKS:o===5?i===22&&a===18||n===18&&i===3?q.LAMP:(e+n)%2==0?q.STONE_BRICKS:q.AIR:q.AIR:i<=11&&a<=7?o===0?q.HQ_FLOOR:o===6?q.AIR:o===5?i===11||a===7?q.STONE_BRICKS:e%4==2&&n%4==2?q.LAMP:i<=8&&a<=4&&e%4==0?q.GLASS:q.STONE_BRICKS:i===11||a===7?n===7&&i<=1&&o<=3?q.AIR:(o===2||o===3)&&(a===7&&i%3==0&&i>=3||i===11&&a%3==0&&a<=5)?q.GLASS:q.STONE_BRICKS:od(e,o,n):o===0?i<=1&&n>7?q.GRAVEL:void 0:o===1&&i<=1&&n>7?q.AIR:o===1&&(i===14||a===10)&&i<=14&&a<=10&&(e+n)%6==0?q.LAMP:o>=1&&o<=3&&o===1?void 0:q.AIR}function od(e,t,n){if(n===td&&ed.some(t=>e>=t-1&&e<=t)){if(t===1)return q.PLANKS;if(t===2&&ed.includes(e))return q.SCREEN}return e===-10&&Math.abs(n)<=4&&t<=3?q.BOOKSHELF:e===10&&Math.abs(n)<=4&&t<=3&&n%2==0?q.SERVER:n===6&&e>=4&&e<=8&&(t===2||t===3)?q.SCREEN:q.AIR}var sd={desk:e=>({x:ed[e%ed.length]+.5-.5,z:-3.4,yaw:0}),books:e=>({x:-8.6,z:-3.5+e%4*2.3,yaw:Math.PI/2}),servers:e=>({x:8.6,z:-3.5+e%4*2.3,yaw:-Math.PI/2}),board:e=>({x:5+e%3*1.5,z:4.4,yaw:Math.PI}),door:()=>({x:.5,z:5.5,yaw:Math.PI}),outside:()=>({x:.5,z:9.5,yaw:Math.PI})},cd=[{dir:[-1,0,0],shade:.72,corners:[[0,1,0,0,1],[0,0,0,0,0],[0,1,1,1,1],[0,0,1,1,0]]},{dir:[1,0,0],shade:.72,corners:[[1,1,1,0,1],[1,0,1,0,0],[1,1,0,1,1],[1,0,0,1,0]]},{dir:[0,-1,0],shade:.45,corners:[[1,0,1,1,0],[0,0,1,0,0],[1,0,0,1,1],[0,0,0,0,1]]},{dir:[0,1,0],shade:1,corners:[[0,1,1,1,1],[1,1,1,0,1],[0,1,0,1,0],[1,1,0,0,0]]},{dir:[0,0,-1],shade:.58,corners:[[1,0,0,0,0],[0,0,0,1,0],[1,1,0,0,1],[0,1,0,1,1]]},{dir:[0,0,1],shade:.58,corners:[[0,0,1,0,0],[1,0,1,1,0],[0,1,1,0,1],[1,1,1,1,1]]}];for(let e of cd)e.axes=[0,1,2].filter(t=>e.dir[t]===0);var ld=new Set([q.GRASS,q.DRY_GRASS,q.MOSS]),ud=[.42,.62,.8,1],dd=(e,t,n)=>e+n*16+t*16*16,fd=8,pd=32,md=1024,hd=2,gd=Float32Array.from({length:16},(e,t)=>.8**(15-t)),_d=new Int32Array(md*128),vd=[7/16,0,7/16,9/16,10/16,9/16];function yd(e,t,n,r,i){let a=0,o=(i,a)=>{!_u[t[i]]&&e[i]<a&&(e[i]=a,n[r++]=i)};for(;a<r;){let t=n[a++],r=e[t]-hd;if(r<=0)continue;let s=t/md|0,c=t-s*md,l=c/pd|0,u=c-l*pd;u>0&&o(t-1,r),u<31&&o(t+1,r),l>0&&o(t-pd,r),l<31&&o(t+pd,r),s>0&&o(t-md,r),s<i-1&&o(t+md,r)}}var bd=()=>({pos:[],uv:[],col:[],light:[],sway:[],idx:[]});function xd(e,t,n,r,i,a,o,s,c,l){e.pos.push(t,n,r),e.uv.push(i,a),e.col.push(o,o,o),e.light.push(s,c),e.sway.push(l)}function Sd(e,t,n,r,i,a,o,s,c){let[l,u,d,f]=fu(t.tiles[0]),p=(G(a+n,r,o+i,11)-.5)*.3,m=(G(a+n,r,o+i,12)-.5)*.3,h=.15,g=.85;for(let[a,o,_,v]of[[h,h,g,g],[g,h,h,g]]){let h=e.pos.length/3,g=n+a+p,y=i+o+m,b=n+_+p,x=i+v+m;xd(e,g,r,y,l,u,.9,s,c,0),xd(e,b,r,x,d,u,.9,s,c,0),xd(e,g,r+1,y,l,f,.9,s,c,t.sway),xd(e,b,r+1,x,d,f,.9,s,c,t.sway),e.idx.push(h,h+1,h+2,h+2,h+1,h+3),e.idx.push(h,h+2,h+1,h+2,h+3,h+1)}}function Cd(e,t,n,r,i,a,o,s){let c=a.slice(0,3),l=a.slice(3);for(let a=0;a<6;a++){let u=cd[a],[d,f,p,m]=fu(t.tiles[a]),h=e.pos.length/3;for(let t of u.corners){let a=c[0]+(l[0]-c[0])*t[0],h=c[1]+(l[1]-c[1])*t[1],g=c[2]+(l[2]-c[2])*t[2],[_,v]=u.dir[1]?[a,g]:u.dir[0]?[g,h]:[a,h];xd(e,n+a,r+h,i+g,d+(p-d)*_,f+(m-f)*v,u.shade,o,s,0)}e.idx.push(h,h+1,h+2,h+2,h+1,h+3)}}var wd=class{constructor(e,t,n,r,i,a=`classic`){this.scene=e,this.materials=t,this.seed=n,this.edits=r??new Map,this.renderDist=i,this.chunks=new Map,this.n2=Yu(Xl(n)),this.n3=Xu(Xl(n+1)),this.raider=a===`raider`?new zu(this.n2,n):null,this.lcx=null,this.lcz=null,this.fortY=rd((e,t)=>this.rawHeight(e,t),40),this.raider?.prepare((e,t)=>this.heightAt(e,t)),this.offsets=[];let o=i;for(let e=-o;e<=o;e++)for(let t=-o;t<=o;t++)e*e+t*t<=o*o+1&&this.offsets.push([e,t]);this.offsets.sort((e,t)=>e[0]**2+e[1]**2-(t[0]**2+t[1]**2))}heightAt(e,t){return id(e,t,this.rawHeight(e,t),this.fortY)}isProtected(e,t,n){return nd(e,n)&&t>=this.fortY-3}rawHeight(e,t){let n=this.n2,r=n(e/600,t/600),i=44+r*14+n(e/180+31,t/180-17)*10+n(e/50,t/50)*4+n(e/14,t/14)*1.2,a=n(e/320-200,t/320+90);return a>.2&&(i+=((a-.2)/.8)**1.6*60*(r>-.3?1:.4)),this.raider&&(i=this.raider.height(e,t,i)),Math.max(2,Math.min(116,Math.floor(i)))}isCave(e,t,n){let r=this.n3(e/28,t/18,n/28);if(r*r>.012)return!1;let i=this.n3(e/28+50,t/18+50,n/28+50);return r*r+i*i<.012}stoneAt(e,t,n){let r=this.seed;return t<16&&G(e>>1,t>>1,n>>1,r+5)<.004&&G(e,t,n,r+6)<.6?q.DIAMOND_ORE:t<50&&G(e>>1,t>>1,n>>1,r+3)<.008&&G(e,t,n,r+4)<.6?q.IRON_ORE:t<80&&G(e>>1,t>>1,n>>1,r+1)<.014&&G(e,t,n,r+2)<.6?q.COAL_ORE:G(e>>2,t>>2,n>>2,r+8)<.01?q.GRAVEL:q.STONE}generate(e){let t=new Uint8Array(32768);e.data=t;let n=e.cx*16,r=e.cz*16,i=this.seed,a=0;for(let e=0;e<16;e++)for(let o=0;o<16;o++){let s=n+o,c=r+e,l=this.heightAt(s,c),u=nd(s,c,3),d=this.raider?this.raider.waterLevel(s,c):40,f=l<=d+1,p=this.raider?.surface(s,c,l),m=l>=82?q.SNOW:f?q.SAND:q.GRASS,h=f?q.SAND:l>=90?q.STONE:q.DIRT;p&&!(f&&p.top===q.GRASS)&&(m=p.top,h=p.filler);let g=Math.max(l,d);for(let n=0;n<=g;n++){let r;n===0||n<3&&G(s,n,c,i)<(n===1?.6:.3)?r=q.BEDROCK:n>l?r=q.WATER:(r=n===l?m:n>l-4?h:this.stoneAt(s,n,c),n>4&&!(f&&n>l-6)&&!u&&this.isCave(s,n,c)&&(r=q.AIR)),t[dd(o,n,e)]=r}if(g>a&&(a=g),this.raider&&!u&&l+1<128&&l>=d&&this.raider.crateAt(s,c)&&this.raider.zoneAt(s,c))t[dd(o,l+1,e)]=this.raider.containerAt(s,c),l+1>a&&(a=l+1);else if(ld.has(m)&&t[dd(o,l,e)]===m&&l+1<128&&G(s,4,c,i)<(p?.plants??1)){let n=G(s,3,c,i),r=m===q.GRASS?1:.3,u=n<.012*r?q.FLOWER_RED:n<.024*r?q.FLOWER_YELLOW:n<.16?q.TALL_GRASS:0;u&&(t[dd(o,l+1,e)]=u,l+1>a&&(a=l+1))}}let o=(e,i,o,s,c)=>{let l=e-n,u=o-r;if(l<0||l>=16||u<0||u>=16||i<0||i>=128)return;let d=dd(l,i,u);c&&t[d]!==q.AIR||(t[d]=s,i>a&&(a=i))},s=this.raider?5:2;for(let e=n-s;e<n+16+s;e++)for(let t=r-s;t<r+16+s;t++){let n=G(e,0,t,i+7);if(n>.08)continue;let r=this.n2(e/90+400,t/90-300),a=this.raider?.surface(e,t,0);if(n>(.004+Math.max(0,r)*.03)*(a?.trees??1)||nd(e,t,4))continue;let s=this.heightAt(e,t);if(s<=41||s>=80||this.raider&&s<=this.raider.waterLevel(e,t)+1)continue;if(a?.tree&&a.tree!==`oak`){let n=this.raider.surface(e,t,s)?.top;if(n===q.ROCK||n===q.ASPHALT||n===q.CONCRETE||n===q.GRAVEL)continue;this.raider.tree(a.tree,e,s+1,t,o);continue}let c=4+Math.floor(G(e,1,t,i)*3),l=s+1,u=l+c-1;for(let n=u-2;n<=u+1;n++){let r=n<=u-1?2:1;for(let a=-r;a<=r;a++)for(let s=-r;s<=r;s++)r===2&&Math.abs(a)===2&&Math.abs(s)===2&&G(e+a,n,t+s,i+9)<.5||n===u+1&&Math.abs(a)+Math.abs(s)>1||o(e+a,n,t+s,q.LEAVES,!0)}for(let n=l;n<=u;n++)o(e,n,t,q.LOG,!1);o(e,s,t,q.DIRT,!1)}if(n-1<=22&&n+16>=-22&&r-1<=18&&r+16>=-18){let e=this.fortY;for(let i=0;i<16;i++)for(let o=0;o<16;o++)for(let s=e;s<=e+8;s++){let c=ad(n+o,s,r+i,e);c!==void 0&&(t[dd(o,s,i)]=c,c&&s>a&&(a=s))}}if(this.raider){let t=this.raider.voxelsFor(e.cx,e.cz,(e,t)=>this.heightAt(e,t));for(let e=0;e<t.length;e+=4)t[e+1]<1||nd(t[e],t[e+2],2)||o(t[e],t[e+1],t[e+2],t[e+3],!1)}let c=this.edits.get(e.key);if(c)for(let[e,i]of c){let o=Math.floor(e/256),s=e%256;this.isProtected(n+s%16,o,r+Math.floor(s/16))?c.delete(e):(t[e]=i,i&&o>a&&(a=o))}e.maxY=a}ensureData(e,t){let n=e+`,`+t,r=this.chunks.get(n);return r||(r={cx:e,cz:t,key:n,data:null,maxY:0,meshed:!1,solidMesh:null,waterMesh:null},this.chunks.set(n,r)),r.data||this.generate(r),r}getBlock(e,t,n){if(t<0)return q.BEDROCK;if(t>=128)return q.AIR;let r=this.chunks.get((e>>4)+`,`+(n>>4));return!r||!r.data?q.AIR:r.data[dd(e&15,t,n&15)]}isLoadedAt(e,t){let n=this.chunks.get((Math.floor(e)>>4)+`,`+(Math.floor(t)>>4));return!!(n&&n.meshed)}setBlock(e,t,n,r){if(t<0||t>=128)return;let i=e>>4,a=n>>4,o=this.chunks.get(i+`,`+a);if(!o||!o.data)return;let s=e&15,c=n&15,l=dd(s,t,c);o.data[l]=r,r&&t>o.maxY&&(o.maxY=t);let u=this.edits.get(o.key);u||this.edits.set(o.key,u=new Map),u.set(l,r),this.buildMesh(o);let d=s<fd?-1:1,f=c<fd?-1:1;this.markDirty(i+d,a),this.markDirty(i,a+f),this.markDirty(i+d,a+f),(s===0||s===15)&&this.remesh(i+d,a),(c===0||c===15)&&this.remesh(i,a+f)}setBlocks(e){let t=new Set;for(let[n,r,i,a]of e){if(r<0||r>=128)continue;let e=this.chunks.get((n>>4)+`,`+(i>>4));if(!e||!e.data)continue;let o=dd(n&15,r,i&15);if(e.data[o]===a)continue;e.data[o]=a,a&&r>e.maxY&&(e.maxY=r);let s=this.edits.get(e.key);s||this.edits.set(e.key,s=new Map),s.set(o,a),t.add(e)}let n=new Set;for(let e of t)for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){let a=this.chunks.get(e.cx+r+`,`+(e.cz+i));a&&a.meshed&&!t.has(a)&&n.add(a)}for(let e of t)e.meshed&&this.buildMesh(e);for(let e of n)this.buildMesh(e)}markDirty(e,t){let n=this.chunks.get(e+`,`+t);n&&n.meshed&&(n.dirty=!0)}remesh(e,t){let n=this.chunks.get(e+`,`+t);n&&n.meshed&&this.buildMesh(n)}lightVolume(e){let t=0;for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){let i=this.chunks.get(e.cx+n+`,`+(e.cz+r));i?.data&&i.maxY>t&&(t=i.maxY)}t=Math.min(128,t+2);let n=md*t,r=new Uint8Array(n),i=e.cx*16-fd,a=e.cz*16-fd;for(let n=-1;n<=1;n++)for(let o=-1;o<=1;o++){let s=e.cx+n,c=e.cz+o,l=this.chunks.get(s+`,`+c);if(!l?.data)continue;let u=Math.max(i,s*16),d=Math.min(i+pd,s*16+16),f=Math.max(a,c*16),p=Math.min(a+pd,c*16+16),m=d-u;for(let e=0;e<t;e++)for(let t=f;t<p;t++){let n=u-s*16+(t-c*16)*16+e*16*16;r.set(l.data.subarray(n,n+m),u-i+(t-a)*pd+e*md)}}let o=new Uint8Array(n),s=new Uint8Array(n),c=new Int16Array(md);for(let e=0;e<md;e++){let n=t-1;for(;n>=0&&!_u[r[e+n*md]];)n--;c[e]=n;for(let r=n+1;r<t;r++)o[e+r*md]=15}let l=_d,u=0;for(let e=0;e<pd;e++)for(let t=0;t<pd;t++){let n=t+e*pd,i=c[n];for(let[a,s]of[[t-1,e],[t+1,e],[t,e-1],[t,e+1]])if(!(a<0||a>=pd||s<0||s>=pd))for(let e=c[a+s*pd]+1;e<i;e++){let t=n+e*md;!_u[r[t]]&&o[t]<13&&(o[t]=13,l[u++]=t)}}yd(o,r,l,u,t),u=0;for(let e=0;e<n;e++){let t=vu[r[e]];t&&(s[e]=t,l[u++]=e)}return yd(s,r,l,u,t),{blocks:r,sky:o,blk:s,H:t}}buildMesh(e){let{data:t,cx:n,cz:r}=e,i=n*16,a=r*16,{blocks:o,sky:s,blk:c,H:l}=this.lightVolume(e),u=bd(),d=bd(),f=(e,t,n)=>t<0?q.BEDROCK:t>=l?q.AIR:o[e+n*pd+t*md],p=(e,t,n)=>t<0?0:t>=l?15:s[e+n*pd+t*md],m=(e,t,n)=>t<0||t>=l?0:c[e+n*pd+t*md],h=[0,0,0],g=[3,3,3,3],_=[0,0,0,0],v=[0,0,0,0],y=Math.min(e.maxY,127);for(let e=0;e<=y;e++)for(let n=0;n<16;n++)for(let r=0;r<16;r++){let o=t[dd(r,e,n)];if(!o)continue;let s=mu[o],c=r+fd,l=n+fd;if(s.shape===`cross`){Sd(u,s,r,e,n,i,a,gd[p(c,e,l)],gd[m(c,e,l)]);continue}if(s.shape===`torch`){Cd(u,s,r,e,n,vd,gd[p(c,e,l)],1);continue}let y=s.liquid,b=y&&f(c,e+1,l)!==o?.875:1;for(let t=0;t<6;t++){let i=cd[t],[a,x,S]=i.dir,C=f(c+a,e+x,l+S);if(_u[C]||C===o&&s.cullSelf)continue;let w=y?d:u,[T,E,D,ee]=fu(s.tiles[t]),O=w.pos.length/3,[k,te]=i.axes,A=c+a,ne=e+x,j=l+S;for(let t=0;t<4;t++){let a=i.corners[t],o=gd[p(A,ne,j)],c=gd[m(A,ne,j)],l=1;if(y)g[t]=3;else{h[0]=A,h[1]=ne,h[2]=j;let e=a[k]?1:-1,n=a[te]?1:-1;h[k]+=e;let r=_u[f(h[0],h[1],h[2])];r||(o+=gd[p(h[0],h[1],h[2])],c+=gd[m(h[0],h[1],h[2])],l++),h[te]+=n;let i=_u[f(h[0],h[1],h[2])],s=gd[p(h[0],h[1],h[2])],u=gd[m(h[0],h[1],h[2])];h[k]-=e;let d=_u[f(h[0],h[1],h[2])];d||(o+=gd[p(h[0],h[1],h[2])],c+=gd[m(h[0],h[1],h[2])],l++),!i&&!(r&&d)&&(o+=s,c+=u,l++),g[t]=r&&d?0:3-(r+d+i)}_[t]=o/l,v[t]=s.light?1:c/l;let u=a[1]===1,d=y?u&&b<1?1:0:s.sway,x=i.shade*ud[g[t]];xd(w,r+a[0],e+(u?b:0),n+a[2],T+(D-T)*a[3],E+(ee-E)*a[4],x,_[t],v[t],d)}g[0]+g[3]>g[1]+g[2]?w.idx.push(O,O+1,O+3,O,O+3,O+2):w.idx.push(O,O+1,O+2,O+2,O+1,O+3)}}this.disposeMeshes(e),e.solidMesh=this.makeMesh(u,this.materials.solid,i,a),e.waterMesh=this.makeMesh(d,this.materials.water,i,a),e.waterMesh&&(e.waterMesh.renderOrder=1),e.meshed=!0}makeMesh(e,t,n,r){if(!e.idx.length)return null;let i=new jr;i.setAttribute(`position`,new yr(e.pos,3)),i.setAttribute(`uv`,new yr(e.uv,2)),i.setAttribute(`color`,new yr(e.col,3)),i.setAttribute(`light`,new yr(e.light,2)),i.setAttribute(`sway`,new yr(e.sway,1)),i.setIndex(e.idx),i.computeBoundingSphere();let a=new bi(i,t);return a.position.set(n,0,r),a.matrixAutoUpdate=!1,a.updateMatrix(),this.scene.add(a),a}disposeMeshes(e){for(let t of[`solidMesh`,`waterMesh`])e[t]&&(this.scene.remove(e[t]),e[t].geometry.dispose(),e[t]=null);e.meshed=!1}update(e,t,n=8){let r=Math.floor(e/16),i=Math.floor(t/16),a=this.renderDist;if(r!==this.lcx||i!==this.lcz){this.lcx=r,this.lcz=i;for(let[e,t]of this.chunks)(Math.abs(t.cx-r)>a+2||Math.abs(t.cz-i)>a+2)&&(this.disposeMeshes(t),this.chunks.delete(e))}let o=performance.now();for(let e of this.chunks.values())if(e.dirty&&(e.dirty=!1,e.meshed&&this.buildMesh(e),performance.now()-o>n))return;for(let[e,t]of this.offsets){let a=r+e,s=i+t,c=this.chunks.get(a+`,`+s);if(!(c&&c.meshed)){for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)this.ensureData(a+e,s+t);if(this.buildMesh(this.chunks.get(a+`,`+s)),performance.now()-o>n)break}}}findSpawn(){return{x:0,y:this.heightAt(0,22)+1,z:22}}findNaturalSpawn(){for(let e=0;e<2e3;e+=8)for(let t=0;t<8;t++){let n=Math.round(Math.cos(t/8*Math.PI*2)*e),r=Math.round(Math.sin(t/8*Math.PI*2)*e),i=this.heightAt(n,r);if(i>42&&i<78)return{x:n,y:i+1,z:r}}return{x:0,y:118,z:0}}raycast(e,t,n){let r=Math.floor(e.x),i=Math.floor(e.y),a=Math.floor(e.z),o=Math.sign(t.x),s=Math.sign(t.y),c=Math.sign(t.z),l=t.x?Math.abs(1/t.x):1/0,u=t.y?Math.abs(1/t.y):1/0,d=t.z?Math.abs(1/t.z):1/0,f=t.x?(t.x>0?r+1-e.x:e.x-r)*l:1/0,p=t.y?(t.y>0?i+1-e.y:e.y-i)*u:1/0,m=t.z?(t.z>0?a+1-e.z:e.z-a)*d:1/0,h=[0,0,0],g=0;for(;g<=n;){let e=this.getBlock(r,i,a);if(e&&!mu[e].liquid)return{x:r,y:i,z:a,id:e,normal:h,t:g};f<p&&f<m?(r+=o,g=f,f+=l,h=[-o,0,0]):p<m?(i+=s,g=p,p+=u,h=[0,-s,0]):(a+=c,g=m,m+=d,h=[0,0,-c])}return null}},Td=new Map;function Ed(e){let t=Td.get(e);if(!t){let n=parseInt(e.slice(1),16);t=[n>>16&255,n>>8&255,n&255],Td.set(e,t)}return t}function Dd(e,t,n,{mirror:r=!1}={}){let i=Array.from({length:t},()=>Array(e).fill(`.`)),a=(n,r,a)=>{r>=0&&r<e&&a>=0&&a<t&&(i[a][r]=n)};for(let[t,i,o,s=1,c=1]of n)for(let n=o;n<o+c;n++)for(let o=i;o<i+s;o++)a(t,o,n),r&&a(t,e-1-o,n);return i.map(e=>e.join(``))}function Od(e,t,n,r,i,a){if(e==null)return null;if(typeof e==`string`)return e;if(typeof e==`function`)return e(t,n,r,i,a);if(Array.isArray(e)){let r=e[n]?.[t];return r&&r!==`.`?a.pal[r]??null:null}return null}var kd=(...e)=>(t,n,r,i,a)=>{let o=null;for(let s of e){let e=Od(s,t,n,r,i,a);e&&(o=e)}return o},Ad=(e,t,n,r=0)=>G(t,n,e.seed,r),jd={0:[`xxx`,`x.x`,`x.x`,`x.x`,`xxx`],1:[`.x.`,`xx.`,`.x.`,`.x.`,`xxx`],2:[`xxx`,`..x`,`xxx`,`x..`,`xxx`],3:[`xxx`,`..x`,`.xx`,`..x`,`xxx`],4:[`x.x`,`x.x`,`xxx`,`..x`,`..x`],5:[`xxx`,`x..`,`xxx`,`..x`,`xxx`],6:[`xxx`,`x..`,`xxx`,`x.x`,`xxx`],7:[`xxx`,`..x`,`.x.`,`.x.`,`.x.`],8:[`xxx`,`x.x`,`xxx`,`x.x`,`xxx`],9:[`xxx`,`x.x`,`xxx`,`..x`,`xxx`],O:[`xxx`,`x.x`,`x.x`,`x.x`,`xxx`],C:[`xxx`,`x..`,`x..`,`x..`,`xxx`],S:[`xxx`,`x..`,`xxx`,`..x`,`xxx`]},Md=(e,t,n,r)=>(i,a)=>{let o=i-n,s=a-r;if(s<0||s>=5||o<0)return null;let c=Math.floor(o/4),l=o%4;return c>=e.length||l===3?null:jd[e[c]]?.[s][l]===`x`?t:null},Nd=`#e8e4d8`,Pd=(e,t,n)=>(r,i,a,o,s)=>s.face===`top`?t:s.face===`bottom`?e>=12?n??t:null:i>=e?null:n&&i>=e-(e>=12?2:1)?n:t,Fd=(e,t,n)=>(r,i,a,o,s)=>s.face===`top`?t:s.face===`bottom`?e>=12?t:null:i>=e?null:n&&i===e-1?n:t,Id=(e,t,n,r)=>(i,a,o,s,c)=>c.face===`bottom`?n:c.face===`top`||a<e?null:a===11?n:r&&c.face===`front`&&a>=10?r:t,Ld=e=>(t,n,r,i,a)=>e(t,n,a),Rd=e=>Ld((t,n,r)=>e[Math.floor(Ad(r,t>>1,n>>1)*e.length)]),zd=(e,t)=>Ld((n,r,i)=>{let a=Ad(i,n,r,3),o=0;for(let[e,n]of t)if(a<(o+=n))return e;return e}),Bd=e=>e,Vd=[],Hd=e=>(Vd.push(e),e);function Ud(e,t,n,r){let i={short:(e,t,r,i,{face:a,ff:o})=>a===`top`?n:a===`front`?t<2||t===2&&(e===0||e===7)?n:null:a===`back`?t<6?n:null:t<3||t<6&&o>=5?n:null,spiky:(e,t,r,i,{face:a,ff:o})=>a===`top`?n:a===`front`?t<2||t===2&&e%2==0?n:null:a===`back`?t<5?n:null:t<3||t===3&&o%2==0?n:null,long:(e,t,r,i,{face:a,ff:o})=>a===`top`?n:a===`front`?t<2||(e===0||e===7)&&t<7?n:null:a===`back`?n:o===0&&t>2?null:n,ponytail:(e,t,r,i,{face:a,ff:o})=>a===`top`?n:a===`front`?t<2?n:null:a===`back`?t<4||e>=3&&e<=4?n:null:t<4||o>=6&&t<6?n:null,buzz:(e,t,r,i,{face:a})=>a===`top`?n:a===`front`?t<1?n:null:a===`back`?t<3?n:null:t<2?n:null},a={mohawk:(e,t,r,i,{face:a})=>a===`top`?e>=3&&e<=4?n:null:a===`front`?t<1&&e>=3&&e<=4?n:null:a===`back`&&t<5&&e>=3&&e<=4?n:null,afro:(e,t,r,i,{face:a})=>a===`top`?n:a===`front`?t<2?n:null:a===`back`||t<6?n:null};return a[r]?Hd({id:e,name:t,slot:`hair`,outer:{head:a[r]}}):Hd({id:e,name:t,slot:`hair`,parts:{head:i[r]}})}function Wd(e,t,n,r={}){return Hd({id:e,name:t,slot:`head`,outer:{head:n},...r})}function Gd(e,t,n,{sleeve:r=4,cuff:i,front:a,back:o,sides:s,arms:c,legs:l,pal:u,outer:d}={}){return Hd({id:e,name:t,slot:`torso`,pal:u,outer:d,parts:{body:{all:n,front:a?kd(n,a):n,back:o?kd(n,o):n,...s?{left:s,right:s}:{}},arms:c===void 0?Pd(r,n,i):c,...l?{legs:l}:{}}})}function Kd(e,t,n,{len:r=12,hem:i,extra:a,sides:o,outer:s,pal:c}={}){let l=Fd(r,n,i);return Hd({id:e,name:t,slot:`legs`,pal:c,outer:s,parts:{legs:{all:a?kd(l,a):l,...o?{left:kd(l,o),right:kd(l,o)}:{}}}})}function qd(e,t,n,r,i,a,{outer:o,extra:s}={}){let c=Id(n,r,i,a);return Hd(o?{id:e,name:t,slot:`feet`,outer:{legs:c}}:{id:e,name:t,slot:`feet`,parts:{legs:s?kd(c,s):c}})}function Jd(e,t,n,r){return Hd({id:e,name:t,slot:`cape`,cape:n,pal:r})}Ud(`hair_brown`,`Brown Short`,`#3b2414`,`short`),Ud(`hair_black`,`Black Short`,`#151515`,`short`),Ud(`hair_blonde_spiky`,`Blonde Spikes`,`#e8c35a`,`spiky`),Ud(`hair_blue_spiky`,`Blue Spikes`,`#3f7bff`,`spiky`),Ud(`hair_red_long`,`Red Long`,`#a3361f`,`long`),Ud(`hair_black_long`,`Black Long`,`#1b1b1b`,`long`),Ud(`hair_platinum_long`,`Platinum Long`,`#f3ecd2`,`long`),Ud(`hair_ginger_ponytail`,`Ginger Ponytail`,`#c9692a`,`ponytail`),Ud(`hair_white_buzz`,`White Buzz`,`#e6e6e6`,`buzz`),Ud(`hair_green_buzz`,`Green Buzz`,`#3fbf5f`,`buzz`),Ud(`hair_pink_mohawk`,`Pink Mohawk`,`#ff4fa3`,`mohawk`),Ud(`hair_afro`,`Afro`,`#2a1a10`,`afro`);var Yd=(e,t,n)=>(r,i,a,o,{face:s})=>s===`top`?e:s===(n?`back`:`front`)?i<2?e:i===2?t:null:s===(n?`front`:`back`)?i<2||i===2&&(r<3||r>4)?e:null:i<3?e:null;Wd(`cap_red`,`Red Cap`,Yd(`#c62828`,`#8e1c1c`)),Wd(`cap_blue`,`Blue Cap`,Yd(`#1e4fbf`,`#f2f2f2`)),Wd(`cap_backwards`,`Backwards Cap`,Yd(`#1c1c1e`,`#e0b23a`,!0)),Wd(`beanie_gray`,`Gray Beanie`,(e,t,n,r,{face:i})=>i===`top`||t<3?`#6b6f75`:t===3?`#9aa0a6`:null),Wd(`beanie_orange`,`Orange Beanie`,(e,t,n,r,{face:i})=>i===`top`||t<3?`#e8761a`:t===3?`#1c1c1e`:null),Wd(`headphones`,`Headphones`,(e,t,n,r,{face:i,ff:a})=>i===`top`?t===3||t===4?`#2a2a2a`:null:i===`left`||i===`right`?a>=3&&a<=4&&t>=2&&t<=6?t===4?`#2fd4ff`:`#1a1a1a`:t<2&&a>=3&&a<=4?`#2a2a2a`:null:null),Wd(`sunglasses`,`Shades`,(e,t,n,r,{face:i,ff:a})=>i===`front`?t===4&&e>=1&&e<=6&&e!==3&&e!==4||t===3&&e>=1&&e<=6?t===4&&(e===1||e===5)?`#3a3a5a`:`#111`:null:(i===`left`||i===`right`)&&t===3&&a<4?`#111`:null),Wd(`crown`,`Crown`,(e,t,n,r,{face:i})=>i===`top`?e===0||e===7||t===0||t===7?`#e0b23a`:null:i===`bottom`?null:t===0?e%2==0?`#e0b23a`:null:t===1?i===`front`&&(e===3||e===4)?`#d1263b`:i!==`front`&&e===3?`#2a7fd4`:`#c99a2e`:null),Wd(`bandana`,`Bandana`,(e,t,n,r,{face:i})=>i===`top`||t<2?(e+t)%3==0?`#f5f5f5`:`#c0392b`:null),Wd(`hood_up`,`Hood Up`,(e,t,n,r,{face:i})=>i===`bottom`?null:i===`front`?t<1||e===0||e===7?`#5c6168`:null:`#5c6168`),Wd(`santa_hat`,`Santa Hat`,(e,t,n,r,{face:i})=>i===`top`?e>=3&&e<=4&&t>=3&&t<=4?`#f5f5f5`:`#c62828`:i===`bottom`?null:t<2?`#c62828`:t===2?`#f5f5f5`:null),Wd(`viking_helmet`,`Viking Helmet`,(e,t,n,r,{face:i})=>i===`top`?e===3||e===4?`#c99a2e`:`#9aa1a8`:i===`bottom`?null:i===`front`&&(e===3||e===4)&&t<=5||t<3?`#9aa1a8`:t===3?`#c99a2e`:null),Wd(`knight_helmet`,`Knight Helmet`,(e,t,n,r,i)=>i.face===`top`?e===3||e===4?`#a8201a`:`#a7aeb6`:i.face===`bottom`?null:i.face===`front`?t===3&&e>0&&e<7||(t===5||t===6)&&(e===2||e===5)?`#1a1a1a`:e===0||e===7||t===0||t===7?`#8d949c`:`#b8bfc7`:t%4==0?`#8d949c`:`#a7aeb6`);var Xd=(e,t,n,r)=>(i,a,o,s,{face:c,ff:l})=>c===`bottom`?null:c===`front`?a>=2&&a<=4&&i>=1&&i<=6?a===3&&i===2?r:n:a===6&&(i===1||i===6)?`#2b2b2b`:a===1&&i>0&&i<7?t:e:c===`top`?i>=3&&i<=4?t:e:(c===`left`||c===`right`)&&l>=2&&l<=4&&a>=3&&a<=5?`#2b2b2b`:e;Wd(`spartan_helmet`,`Spartan Helmet`,Xd(`#4f5d3a`,`#62744a`,`#c98e14`,`#ffe08a`)),Wd(`recon_helmet`,`Recon Helmet`,Xd(`#6d7177`,`#8a8f96`,`#2a7fd4`,`#bfe3ff`)),Wd(`iron_helmet`,`Iron Helmet`,(e,t,n,r,{face:i,ff:a})=>{let o=`#b3121b`,s=`#e0b23a`;return i===`bottom`?null:i===`front`?t===3&&(e===1||e===2||e===5||e===6)?`#c9f7ff`:t===6&&e>=2&&e<=5?`#8a6a15`:t===0||(e===0||e===7)&&t!==3&&t!==4?o:s:(i===`left`||i===`right`)&&a>=3&&a<=4&&t>=3&&t<=4?s:o}),Wd(`astronaut_helmet`,`Space Helmet`,(e,t,n,r,{face:i,ff:a})=>i===`bottom`?null:i===`front`&&e>=1&&e<=6&&t>=1&&t<=6?e===2&&t<=3||e===3&&t===2?`#7fb3d9`:`#1b2a3a`:(i===`left`||i===`right`)&&a>=2&&a<=5&&t>=3&&t<=5?`#9aa3ad`:`#eef1f4`),Wd(`pumpkin_head`,`Pumpkin Head`,(e,t,n,r,{face:i})=>i===`top`?e>=3&&e<=4&&t>=3&&t<=4?`#4b7a2a`:`#e07b1a`:i===`front`&&(t===2&&(e===2||e===5)||t===3&&(e===1||e===2||e===5||e===6)||t===5&&e>=1&&e<=6||t===6&&(e===2||e===4||e===6))?`#ffd84a`:e%3==0?`#c2620f`:`#e07b1a`),Wd(`robot_head`,`Robot Head`,(e,t,n,r,{face:i})=>{if(i===`top`)return e>=3&&e<=4&&t>=3&&t<=4?`#ff3030`:`#8c96a0`;if(i===`bottom`)return null;if(i===`front`){if(t===3&&(e===1||e===2||e===5||e===6))return`#ff3030`;if((t===5||t===6)&&e>=2&&e<=5)return e%2?`#3a3f45`:`#5a636c`}return t===0||t===7?`#6d757e`:`#8c96a0`}),Wd(`bat_cowl`,`Bat Cowl`,(e,t,n,r,{face:i})=>{let a=`#2c2e33`;return i===`bottom`?null:i===`front`?t===3&&(e===1||e===2||e===5||e===6)?`#f0f0f0`:t<5?a:null:a}),Wd(`ninja_mask`,`Ninja Mask`,(e,t,n,r,{face:i})=>i===`top`||i===`bottom`?null:t===2||i===`back`&&t===3&&(e===3||e===4)?`#b0202a`:t>=5?`#1a1a1a`:null,{}),Hd({id:`spider_mask`,name:`Web Mask`,slot:`head`,parts:{head:(e,t,n,r,{face:i})=>i===`front`&&t>=2&&t<=4&&(e===1||e===2||e===5||e===6)?t===2||e===1||e===6?`#111`:`#f5f5f5`:e%3==0||t%3==0?`#5a0d0d`:`#c62828`}}),Hd({id:`skull_mask`,name:`Skull Face`,slot:`head`,parts:{head:(e,t,n,r,{face:i})=>i===`front`&&(t>=3&&t<=4&&(e===1||e===2||e===5||e===6)||t===5&&(e===3||e===4)||t===6&&e>=1&&e<=6&&e%2)?`#111`:Nd}}),Hd({id:`zombie_face`,name:`Zombie Face`,slot:`head`,parts:{head:(e,t,n,r,{face:i})=>{if(i===`front`){if(t===4&&(e===1||e===2||e===5||e===6))return`#1a1a1a`;if(t===6&&e>=2&&e<=5)return`#2d4a1c`}return(e*7+t*3)%11==0?`#4a7030`:`#5e8c3a`}}}),Gd(`tee_teal`,`Teal Tee`,`#2fb5a8`),Gd(`tee_white`,`White Tee`,`#ececec`),Gd(`tee_black`,`Black Tee`,`#202020`),Gd(`tee_red`,`Red Tee`,`#c0392b`),Gd(`tee_purple`,`Purple Tee`,`#7d4fc2`),Gd(`tee_smiley`,`Smiley Tee`,`#202020`,{pal:{y:`#ffd23f`,k:`#202020`},front:Bd([`........`,`........`,`..yyyy..`,`.yyyyyy.`,`.ykyyky.`,`.yyyyyy.`,`.ykyyky.`,`.yykkyy.`,`..yyyy..`])}),Gd(`tee_omni`,`OmniCraft Tee`,`#1c1c1e`,{front:Md(`OC`,`#5fd35f`,1,3),back:Md(`OC`,`#5fd35f`,1,3)});var Zd=(e,t)=>t>=2||e>=1&&e<=2||e>=5&&e<=6?`#ececec`:null;Hd({id:`tank_white`,name:`Tank Top`,slot:`torso`,parts:{body:{all:`#ececec`,front:Zd,back:Zd,top:e=>e>=1&&e<=2||e>=5&&e<=6?`#ececec`:null}}});var Qd=(e,t,n,r)=>Gd(e,t,n,{sleeve:12,cuff:r,front:(e,t)=>t>=8&&t<=10&&e>=2&&e<=5?r:(e===3||e===4)&&t>=1&&t<=3?`#f0f0f0`:null,back:(e,t)=>t<4?r:null});Qd(`hoodie_gray`,`Gray Hoodie`,`#7a7f87`,`#5c6168`),Qd(`hoodie_black`,`Black Hoodie`,`#1f1f22`,`#121214`),Qd(`hoodie_purple`,`Purple Hoodie`,`#6a3fb5`,`#4e2c8a`),Qd(`hoodie_red`,`Red Hoodie`,`#b52b2b`,`#8a1f1f`),Qd(`hoodie_green`,`Green Hoodie`,`#2e7d4f`,`#1f5c39`),Qd(`hoodie_pink`,`Pink Hoodie`,`#e86fa6`,`#c9548a`);var $d=(e,t,n,r,i,a)=>Gd(e,t,n,{arms:null,front:kd((e,t)=>t===0&&e>=2&&e<=5||(e===0||e===7)&&t<4?r:null,Md(i,a,1,4)),back:Md(i,a,1,3)});$d(`jersey_red_23`,`Red Jersey #23`,`#c8102e`,`#111111`,`23`,`#ffffff`),$d(`jersey_purple_24`,`Purple Jersey #24`,`#552583`,`#fdb927`,`24`,`#fdb927`),$d(`jersey_green_33`,`Green Jersey #33`,`#007a33`,`#ffffff`,`33`,`#ffffff`),Gd(`jersey_football`,`Football Jersey #12`,`#1d3d8f`,{arms:(e,t,n,r,i)=>i.face===`bottom`?null:t===2?`#ffffff`:t<4?`#1d3d8f`:null,front:Md(`12`,`#ffffff`,1,3),back:Md(`12`,`#ffffff`,1,3)}),Gd(`jersey_soccer`,`Striped Soccer Kit`,`#fafafa`,{front:e=>Math.floor(e/2)%2?`#d32f2f`:`#fafafa`,back:kd(e=>Math.floor(e/2)%2?`#d32f2f`:`#fafafa`,Md(`10`,`#111111`,1,3)),arms:Pd(4,`#d32f2f`)});var ef=(e,t,n)=>(r,i)=>r%4==0||i%4==0?n:(Math.floor(r/2)+Math.floor(i/2))%2?e:t;Gd(`flannel`,`Red Flannel`,`#b02a2a`,{sleeve:12,front:ef(`#b02a2a`,`#8a1f1f`,`#2a0a0a`),back:ef(`#b02a2a`,`#8a1f1f`,`#2a0a0a`),arms:kd(Pd(12,`#b02a2a`),ef(`#b02a2a`,`#8a1f1f`,`#2a0a0a`))}),Gd(`flannel_blue`,`Blue Flannel`,`#2b5aa8`,{sleeve:12,front:ef(`#2b5aa8`,`#1d3f7a`,`#0d1a33`),back:ef(`#2b5aa8`,`#1d3f7a`,`#0d1a33`),arms:kd(Pd(12,`#2b5aa8`),ef(`#2b5aa8`,`#1d3f7a`,`#0d1a33`))}),Gd(`leather_jacket`,`Leather Jacket`,`#1c1c1e`,{sleeve:12,cuff:`#111111`,front:(e,t)=>e===3||e===4?t===0?`#333333`:`#e8e8e8`:t===0&&(e===2||e===5)?`#333333`:null}),Gd(`suit`,`Sharp Suit`,`#1b1b22`,{sleeve:12,cuff:`#eeeeee`,front:(e,t)=>(e===3||e===4)&&t>=1&&t<=8?`#b3202a`:t<6&&Math.abs(e-3.5)<=(6-t)/2?`#f2f2f2`:null}),Gd(`hawaiian`,`Hawaiian Shirt`,`#1fa3a3`,{front:zd(`#1fa3a3`,[[`#ff6fa8`,.12],[`#ffd84a`,.08],[`#ffffff`,.06]]),back:zd(`#1fa3a3`,[[`#ff6fa8`,.12],[`#ffd84a`,.08]])}),Gd(`lab_coat`,`Lab Coat`,`#f4f4f4`,{sleeve:12,cuff:`#dddddd`,front:(e,t)=>e===3||e===4?t<3?`#4a90d9`:`#dcdcdc`:e===1&&t===4?`#4a90d9`:null,legs:(e,t,n,r,i)=>i.face!==`bottom`&&i.face!==`top`&&t<6?`#f4f4f4`:null}),Gd(`puffer`,`Puffer Jacket`,`#f07c22`,{front:(e,t)=>t%3==2?`#c85a12`:`#f07c22`,back:(e,t)=>t%3==2?`#c85a12`:`#f07c22`,arms:(e,t,n,r,i)=>i.face===`bottom`||t%3==2?`#c85a12`:`#f07c22`}),Gd(`varsity`,`Varsity Jacket`,`#b71c1c`,{arms:Pd(12,`#f2f2f2`,`#b71c1c`),front:Md(`O`,`#f2f2f2`,1,2)}),Gd(`pirate_shirt`,`Pirate Shirt`,`#ece6d6`,{sleeve:12,front:(e,t)=>t===9||t===10?`#a51d2d`:e<2||e>5?`#5a3a1e`:null,sides:(e,t)=>t===9||t===10?`#a51d2d`:`#5a3a1e`,back:(e,t)=>t===9||t===10?`#a51d2d`:`#5a3a1e`}),Gd(`ninja_gi`,`Ninja Gi`,`#16161a`,{sleeve:12,front:(e,t)=>t>=10?`#b0202a`:Math.abs(e-3.5)<=.5+t*.3&&t<6?`#2a2a30`:null,back:(e,t)=>t>=10?`#b0202a`:null,sides:(e,t)=>t>=10?`#b0202a`:`#16161a`});var tf=zd(`#4b2a85`,[[`#ffd84a`,.06]]);Gd(`wizard_robe`,`Wizard Robe`,`#4b2a85`,{sleeve:12,cuff:`#e0b23a`,front:tf,back:tf,legs:(e,t,n,r,i)=>i.face===`bottom`?null:tf(e,t,n,r,i)}),Gd(`skeleton_suit`,`Skeleton Suit`,`#151515`,{sleeve:12,front:(e,t)=>(e===3||e===4)&&t<=9||(t===2||t===4||t===6)&&e>=1&&e<=6?Nd:null,arms:(e,t,n,r,i)=>i.face!==`top`&&i.face!==`bottom`&&(e===1||e===2)?Nd:`#151515`});var nf=(e,t)=>(n,r)=>n%3==0||r%3==0?t:e;Gd(`spider_suit`,`Web Suit`,`#c62828`,{sleeve:12,front:kd(nf(`#c62828`,`#5a0d0d`),(e,t)=>(e===3||e===4)&&t>=3&&t<=6||(e===2||e===5)&&(t===2||t===7)||(e===1||e===6)&&(t===3||t===6)?`#111111`:null),back:nf(`#c62828`,`#5a0d0d`),sides:`#1e3f9e`,arms:(e,t,n,r,i)=>i.face===`left`||i.face===`right`?`#1e3f9e`:nf(`#c62828`,`#5a0d0d`)(e,t)}),Gd(`bat_suit`,`Bat Suit`,`#4a4d55`,{sleeve:12,cuff:`#1c1c1e`,front:(e,t)=>t===10?e===3||e===4?`#c99a2e`:`#e3b81f`:t>=2&&t<=4&&e>=1&&e<=6?t===3&&e!==2&&e!==5||t===4&&e>=3&&e<=4||t===2&&(e===1||e===6)?`#111111`:`#e3b81f`:null,back:(e,t)=>t===10?`#e3b81f`:null}),Gd(`astronaut_suit`,`Space Suit`,`#eef1f4`,{sleeve:12,cuff:`#9aa3ad`,front:(e,t)=>t>=3&&t<=5&&e>=2&&e<=5?t===4&&e===2?`#e53935`:t===4&&e===3?`#43a047`:t===4&&e===4?`#1e88e5`:`#9aa3ad`:t>=1&&t<=2&&e>=5&&e<=6?t===1?`#1e4fbf`:`#c62828`:null}),Gd(`santa_coat`,`Santa Coat`,`#c62828`,{sleeve:12,cuff:`#f5f5f5`,front:(e,t)=>t===8?e===3||e===4?`#e0b23a`:`#111111`:e===3||e===4?`#f5f5f5`:null,back:(e,t)=>t===8?`#111111`:null,sides:(e,t)=>t===8?`#111111`:`#c62828`}),Gd(`robot_body`,`Robot Chassis`,`#8c96a0`,{sleeve:12,front:(e,t)=>t>=2&&t<=5&&e>=2&&e<=5?t===4?`#5fd35f`:`#1d2a33`:t===8?`#6d757e`:null,arms:(e,t,n,r,i)=>i.face!==`top`&&i.face!==`bottom`&&t===5?`#3a3f45`:`#8c96a0`}),Gd(`zombie_shirt`,`Zombie Rags`,`#2fb5a8`,{front:(e,t,n,r,i)=>Ad(i,e,t)<.18?`#5e8c3a`:null,back:(e,t,n,r,i)=>Ad(i,e,t)<.18?`#5e8c3a`:null,arms:(e,t,n,r,i)=>t<3&&i.face!==`bottom`?`#2fb5a8`:`#5e8c3a`}),Gd(`knight_armor`,`Knight Armor`,`#6d737a`,{sleeve:12,outer:{body:{all:`#a7aeb6`,front:(e,t)=>(e===3||e===4)&&t>=2&&t<=9||t>=4&&t<=5&&e>=1&&e<=6?`#a8201a`:t===11?`#8d949c`:`#b8bfc7`},arms:(e,t,n,r,i)=>i.face===`bottom`?null:t<5?t===4?`#8d949c`:`#a7aeb6`:null}}),Gd(`spartan_armor`,`Spartan Armor`,`#222222`,{sleeve:12,cuff:`#2a2a2a`,outer:{body:{all:`#4f5d3a`,front:(e,t)=>t===9?`#2b2b2b`:t>9?null:t>=1&&t<=3&&e>=1&&e<=6?`#62744a`:e===0||e===7?`#3d4a2c`:`#4f5d3a`},arms:(e,t,n,r,i)=>i.face===`bottom`?null:t<4?`#4f5d3a`:t>=7&&t<=10?`#3d4a2c`:null}}),Gd(`iron_armor`,`Iron Armor`,`#b3121b`,{sleeve:12,outer:{body:{all:`#b3121b`,front:(e,t)=>t>=2&&t<=3&&e>=3&&e<=4?`#e8fdff`:t>=1&&t<=4&&e>=2&&e<=5?`#7fd8ff`:t>=6&&t<=9&&e>=2&&e<=5?(t+e)%2?`#e0b23a`:`#c99a2e`:`#b3121b`},arms:(e,t,n,r,i)=>i.face===`bottom`?`#e8fdff`:t>=4&&t<=8?`#e0b23a`:`#b3121b`}}),Kd(`jeans`,`Blue Jeans`,`#3b4cc0`),Kd(`jeans_black`,`Black Jeans`,`#202024`),Kd(`jeans_ripped`,`Ripped Jeans`,`#4a6fc7`,{extra:(e,t,n,r,i)=>i.face===`front`&&t>=5&&t<=6&&e>=1&&e<=2?`#c8956d`:null}),Kd(`cargo`,`Cargo Pants`,`#8b7d5a`,{sides:(e,t)=>t>=5&&t<=7&&e>=1&&e<=2?`#6f6346`:null}),Kd(`camo_pants`,`Camo Pants`,`#4b5a2e`,{extra:Rd([`#4b5a2e`,`#6b7a3e`,`#3a3324`,`#8a8a5c`])}),Kd(`track_pants`,`Track Pants`,`#1b1b1d`,{sides:e=>e===1?`#f2f2f2`:null}),Kd(`sweatpants`,`Sweatpants`,`#8a8f96`,{hem:`#6b7077`}),Kd(`white_pants`,`White Pants`,`#ececec`),Kd(`shorts_khaki`,`Khaki Shorts`,`#c2a36b`,{len:6}),Kd(`shorts_denim`,`Denim Shorts`,`#5b7fc7`,{len:5,hem:`#9db4e6`}),Kd(`shorts_basketball`,`Hoop Shorts`,`#c8102e`,{len:7,hem:`#ffffff`}),Kd(`swim_trunks`,`Swim Trunks`,`#2a7fd4`,{len:5,extra:(e,t,n,r,i)=>t<5&&i.face!==`bottom`?zd(`#2a7fd4`,[[`#ff6fa8`,.15],[`#ffffff`,.08]])(e,t,n,r,i):null}),Kd(`ninja_pants`,`Ninja Pants`,`#16161a`,{extra:(e,t)=>t>=8&&t<=10?`#2a2a30`:null}),Kd(`pirate_pants`,`Pirate Pants`,`#4a3524`,{len:9,hem:`#3a2818`}),Kd(`santa_pants`,`Santa Pants`,`#c62828`),Kd(`skeleton_legs`,`Skeleton Legs`,`#151515`,{extra:(e,t,n,r,i)=>i.face===`front`&&(e===1||e===2)?Nd:null}),Kd(`spider_legs`,`Web Legs`,`#c62828`,{extra:nf(`#c62828`,`#5a0d0d`),sides:`#1e3f9e`}),Kd(`bat_legs`,`Bat Legs`,`#4a4d55`),Kd(`astronaut_legs`,`Space Legs`,`#eef1f4`,{extra:(e,t,n,r,i)=>i.face===`front`&&t>=5&&t<=6?`#9aa3ad`:null}),Kd(`robot_legs`,`Robot Legs`,`#8c96a0`,{extra:(e,t)=>t===6?`#3a3f45`:null}),Kd(`knight_greaves`,`Knight Greaves`,`#6d737a`,{outer:{legs:(e,t,n,r,i)=>i.face!==`top`&&i.face!==`bottom`&&t>=4&&t<=7?t===5?`#8d949c`:`#a7aeb6`:null}}),Kd(`spartan_legs`,`Spartan Legs`,`#222222`,{outer:{legs:(e,t,n,r,i)=>i.face===`top`||i.face===`bottom`?null:t<4?`#4f5d3a`:t>=5&&t<=8?`#3d4a2c`:null}}),Kd(`iron_legs`,`Iron Legs`,`#b3121b`,{outer:{legs:(e,t,n,r,i)=>i.face===`top`||i.face===`bottom`?null:t>=5&&t<=6?`#e0b23a`:`#b3121b`}}),qd(`sneakers_white`,`White Sneakers`,9,`#f2f2f2`,`#bdbdbd`),qd(`hightops_red`,`Red High-Tops`,7,`#d32f2f`,`#f2f2f2`,`#f2f2f2`),qd(`gold_kicks`,`Gold Kicks`,9,`#e0b23a`,`#f2f2f2`),qd(`neon_runners`,`Neon Runners`,9,`#9cff3b`,`#222222`,`#ff4fa3`),qd(`boots_brown`,`Brown Boots`,8,`#5d3a1a`,`#2a1a0d`),qd(`boots_black`,`Black Boots`,8,`#1c1c1e`,`#0d0d0d`),qd(`combat_boots`,`Combat Boots`,7,`#3d4030`,`#1a1a1a`,null,{extra:(e,t,n,r,i)=>i.face===`front`&&t>=7&&t<11&&(e+t)%2==0?`#2a2c20`:null}),qd(`slides_socks`,`Slides & Socks`,8,`#f5f5f5`,`#111111`,`#111111`),qd(`ninja_tabi`,`Ninja Tabi`,9,`#1a1a1a`,`#0d0d0d`),qd(`santa_boots`,`Santa Boots`,8,`#111111`,`#0d0d0d`,null,{extra:(e,t,n,r,i)=>i.face!==`bottom`&&t===8?`#f5f5f5`:null}),qd(`astronaut_boots`,`Moon Boots`,7,`#eef1f4`,`#6d757e`),qd(`robot_boots`,`Robot Boots`,8,`#6d757e`,`#3a3f45`),qd(`knight_boots`,`Knight Sabatons`,8,`#a7aeb6`,`#6d737a`,null,{outer:!0}),qd(`spartan_boots`,`Spartan Boots`,8,`#4f5d3a`,`#2b2b2b`,null,{outer:!0}),qd(`iron_boots`,`Iron Boots`,8,`#b3121b`,`#e0b23a`,`#e0b23a`,{outer:!0});var rf=(e,t)=>(n,r)=>n===0||n===9?t:e;Jd(`cape_red`,`Red Cape`,rf(`#b71c1c`,`#8e1515`)),Jd(`cape_black`,`Black Cape`,rf(`#151518`,`#0a0a0c`)),Jd(`cape_royal`,`Royal Cape`,(e,t)=>t<2?e%3==1&&t===1?`#111111`:`#f5f5f5`:e===0||e===9||t===15?`#e0b23a`:`#4a148c`),Jd(`cape_hero`,`Hero Cape`,(e,t)=>[[4,4],[5,4],[3,5],[4,5],[5,5],[6,5],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[3,7],[4,7],[5,7],[6,7],[3,8],[6,8]].some(([n,r])=>n===e&&r===t)?`#ffd23f`:e===0||e===9?`#163a8e`:`#1e4fbf`),Jd(`cape_omni`,`OmniCraft Cape`,(e,t)=>e>=2&&e<=7&&t>=4&&t<=10?t<=5?(e+t)%3?`#5fae3a`:`#4a8f2c`:(e+t)%4?`#86603f`:`#6b4b30`:e===0||e===9?`#1f5c39`:`#2e7d4f`);var af=[`#e53935`,`#fb8c00`,`#fdd835`,`#43a047`,`#1e88e5`,`#5e35b1`];Jd(`cape_rainbow`,`Rainbow Cape`,(e,t)=>af[Math.floor(t/16*af.length)]),Jd(`cape_flame`,`Flame Cape`,(e,t,n,r,i)=>{let a=t/15+(Ad(i,e,t)-.5)*.3;return a>.75?`#ffd84a`:a>.45?`#ff8a1a`:a>.2?`#e53935`:`#7a1010`}),Jd(`cape_galaxy`,`Galaxy Cape`,zd(`#1a0f3a`,[[`#ffffff`,.05],[`#b388ff`,.08],[`#3d2a7a`,.2]]));var of=Object.fromEntries(Vd.map(e=>[e.id,e])),sf=Vd,cf={hair:`hair_brown`,head:null,torso:`tee_teal`,legs:`jeans`,feet:`sneakers_white`,cape:null,hand:null},lf=[{id:`iron_hero`,name:`Iron Hero`,outfit:{hair:null,head:`iron_helmet`,torso:`iron_armor`,legs:`iron_legs`,feet:`iron_boots`,cape:null,hand:`repulsor`}},{id:`spartan_chief`,name:`Spartan Chief`,outfit:{hair:null,head:`spartan_helmet`,torso:`spartan_armor`,legs:`spartan_legs`,feet:`spartan_boots`,cape:null,hand:`assault_rifle`}},{id:`recon_spartan`,name:`Recon Spartan`,outfit:{hair:null,head:`recon_helmet`,torso:`spartan_armor`,legs:`spartan_legs`,feet:`spartan_boots`,cape:null,hand:`plasma_sword`}},{id:`web_slinger`,name:`Web Slinger`,outfit:{hair:null,head:`spider_mask`,torso:`spider_suit`,legs:`spider_legs`,feet:null,cape:null,hand:null}},{id:`dark_knight`,name:`Dark Knight`,outfit:{hair:null,head:`bat_cowl`,torso:`bat_suit`,legs:`bat_legs`,feet:`boots_black`,cape:`cape_black`,hand:null}},{id:`knight`,name:`Royal Knight`,outfit:{hair:null,head:`knight_helmet`,torso:`knight_armor`,legs:`knight_greaves`,feet:`knight_boots`,cape:`cape_red`,hand:`hero_blade`}},{id:`ninja`,name:`Shadow Ninja`,outfit:{hair:`hair_black`,head:`ninja_mask`,torso:`ninja_gi`,legs:`ninja_pants`,feet:`ninja_tabi`,cape:null,hand:`katana`}},{id:`astronaut`,name:`Astronaut`,outfit:{hair:null,head:`astronaut_helmet`,torso:`astronaut_suit`,legs:`astronaut_legs`,feet:`astronaut_boots`,cape:null,hand:`ray_gun`}},{id:`wizard`,name:`Wizard`,outfit:{hair:`hair_platinum_long`,head:null,torso:`wizard_robe`,legs:null,feet:`boots_brown`,cape:`cape_galaxy`,hand:`flame_sword`}},{id:`skeleton`,name:`Skeleton`,outfit:{hair:null,head:`skull_mask`,torso:`skeleton_suit`,legs:`skeleton_legs`,feet:null,cape:null,hand:null}},{id:`zombie`,name:`Zombie`,outfit:{hair:`hair_brown`,head:`zombie_face`,torso:`zombie_shirt`,legs:`jeans_ripped`,feet:null,cape:null,hand:null}},{id:`robot`,name:`Robot`,outfit:{hair:null,head:`robot_head`,torso:`robot_body`,legs:`robot_legs`,feet:`robot_boots`,cape:null,hand:`laser_saber_blue`}},{id:`santa`,name:`Santa`,outfit:{hair:`hair_white_buzz`,head:`santa_hat`,torso:`santa_coat`,legs:`santa_pants`,feet:`santa_boots`,cape:null,hand:null}},{id:`pirate`,name:`Pirate`,outfit:{hair:`hair_black_long`,head:`bandana`,torso:`pirate_shirt`,legs:`pirate_pants`,feet:`boots_brown`,cape:null,hand:`gold_sword`}},{id:`pumpkin_king`,name:`Pumpkin King`,outfit:{hair:null,head:`pumpkin_head`,torso:`suit`,legs:`jeans_black`,feet:`boots_black`,cape:`cape_black`,hand:`battle_axe`}},{id:`baller`,name:`Baller`,outfit:{hair:`hair_black`,head:`headphones`,torso:`jersey_red_23`,legs:`shorts_basketball`,feet:`hightops_red`,cape:null,hand:null}},{id:`streetwear`,name:`Streetwear`,outfit:{hair:`hair_blue_spiky`,head:`cap_backwards`,torso:`hoodie_black`,legs:`jeans_ripped`,feet:`gold_kicks`,cape:null,hand:`pistol`}},{id:`soldier`,name:`Soldier`,outfit:{hair:`hair_brown`,head:`beanie_gray`,torso:`hoodie_green`,legs:`camo_pants`,feet:`combat_boots`,cape:null,hand:`sniper`}}],uf={head:[8,8,8],body:[8,12,4],armL:[4,12,4],armR:[4,12,4],legL:[4,12,4],legR:[4,12,4]},df=[`right`,`left`,`top`,`bottom`,`back`,`front`],ff=[`legs`,`feet`,`torso`,`hair`,`head`],pf=`#c8956d`,mf=`#3a4a6b`;function hf(e,t){let[n,r,i]=uf[e];return t===`left`||t===`right`?[i,r]:t===`top`||t===`bottom`?[n,i]:[n,r]}var gf={head:[`head`],body:[`body`],armL:[`armL`,`arms`],armR:[`armR`,`arms`],legL:[`legL`,`legs`],legR:[`legR`,`legs`]};function _f(e,t,n){if(!e)return null;for(let r of gf[t]){let t=e[r];if(t!=null)return typeof t==`string`||typeof t==`function`?t:t[n]??(n!==`front`&&n!==`top`&&n!==`bottom`?t.sides:void 0)??t.all??null}return null}function vf(e,t,n,r,i=pf,a=`#3b5bdb`){if(e===`head`&&t===`front`){if(r===4&&(n===1||n===6))return`#ffffff`;if(r===4&&(n===2||n===5))return a;if(r===6&&(n===3||n===4))return`#8a4b35`}return(e===`legL`||e===`legR`)&&t!==`bottom`&&(r<3||t===`top`)||e===`body`&&t!==`top`&&r>=10?mf:i}function yf(e){return ff.map(t=>of[e[t]]).filter(Boolean)}function bf(e,t,n,r,i){let[a,o]=hf(t,n),s=new Uint8ClampedArray(a*o*4),c=new Uint8ClampedArray(a*o*4),l=!1,u=t.charCodeAt(0)*31+t.length*7+n.charCodeAt(0)*13|0;for(let d=0;d<o;d++)for(let f=0;f<a;f++){let p=n===`right`?a-1-f:f,m=vf(t,n,f,d,r,i),h=null;for(let r of e){let e={part:t,face:n,ff:p,pal:r.pal??{},seed:u+r.id.length},i=Od(_f(r.parts,t,n),f,d,a,o,e);i&&(m=i);let s=Od(_f(r.outer,t,n),f,d,a,o,e);s&&(h=s)}let g=.93+G(f,d,u)*.12,_=(d*a+f)*4,[v,y,b]=Ed(m);if(s.set([v*g,y*g,b*g,255],_),h){let[e,t,n]=Ed(h);c.set([e*g,t*g,n*g,255],_),l=!0}}return{w:a,h:o,inner:s,outer:c,anyOuter:l}}function xf(e,t,n){let r=document.createElement(`canvas`);return r.width=e,r.height=t,r.getContext(`2d`).putImageData(new ImageData(n,e,t),0,0),r}function Sf(e){let t=yf(e),n={};for(let r of Object.keys(uf)){let i=df.map(n=>bf(t,r,n,e.skin,e.eyes));n[r]={inner:i.map(e=>xf(e.w,e.h,e.inner)),outer:i.map(e=>xf(e.w,e.h,e.outer)),hasOuter:i.some(e=>e.anyOuter)}}return n}function Cf(e){let t=of[e];if(!t?.cape)return null;let n=new Uint8ClampedArray(640),r={part:`cape`,face:`back`,pal:t.pal??{},seed:99};for(let e=0;e<16;e++)for(let i=0;i<10;i++){let[a,o,s]=Ed(Od(t.cape,i,e,10,16,r)??`#000000`),c=.94+G(i,e,5)*.1;n.set([a*c,o*c,s*c,255],(e*10+i)*4)}return xf(10,16,n)}function wf(e){let t=yf(e),n=document.createElement(`canvas`);n.width=16,n.height=32;let r=n.getContext(`2d`);for(let[e,[n,i]]of Object.entries({head:[4,0],body:[4,8],armR:[0,8],armL:[12,8],legR:[4,20],legL:[8,20]})){let a=bf(t,e,`front`);r.drawImage(xf(a.w,a.h,a.inner),n,i),a.anyOuter&&r.drawImage(xf(a.w,a.h,a.outer),n,i)}return n.toDataURL()}function Tf(e){return Cf(e)?.toDataURL()??null}function Ef(e){let t=e.art.length,n=e.art[0].length,r=document.createElement(`canvas`);r.width=n,r.height=t;let i=r.getContext(`2d`);return e.art.forEach((t,n)=>[...t].forEach((t,r)=>{t!==`.`&&(i.fillStyle=e.pal[t],i.fillRect(r,n,1,1))})),r.toDataURL()}var Df=new Map;function Of(e){if(Df.has(e.id))return Df.get(e.id).clone();let t=e.art,n=t.length,r=t[0].length,i=(e,i)=>i>=0&&i<n&&e>=0&&e<r&&t[i][e]!==`.`,a={lit:{pos:[],col:[]},glow:{pos:[],col:[]}},o=e.depth/2,s=(e,t,n,r,i,a,o)=>{for(let a of[t,n,r,t,r,i])e.pos.push(...a);for(let t=0;t<6;t++)e.col.push(a.r*o,a.g*o,a.b*o)};for(let c=0;c<n;c++)for(let n=0;n<r;n++){let r=t[c][n];if(r===`.`)continue;let l=new H(e.pal[r]),u=e.glow.includes(r)?a.glow:a.lit,d=n-e.grip[0]-.5,f=d+1,p=e.grip[1]-c+.5,m=p-1;s(u,[d,m,o],[f,m,o],[f,p,o],[d,p,o],l,1),s(u,[f,m,-o],[d,m,-o],[d,p,-o],[f,p,-o],l,.9),i(n-1,c)||s(u,[d,m,-o],[d,m,o],[d,p,o],[d,p,-o],l,.75),i(n+1,c)||s(u,[f,m,o],[f,m,-o],[f,p,-o],[f,p,o],l,.75),i(n,c-1)||s(u,[d,p,o],[f,p,o],[f,p,-o],[d,p,-o],l,1.1),i(n,c+1)||s(u,[d,m,-o],[f,m,-o],[f,m,o],[d,m,o],l,.6)}let c=new On;for(let[e,t]of Object.entries(a)){if(!t.pos.length)continue;let n=new jr;n.setAttribute(`position`,new yr(t.pos,3)),n.setAttribute(`color`,new yr(t.col,3)),n.computeVertexNormals();let r=e===`glow`?new ci({vertexColors:!0}):new Da({vertexColors:!0});c.add(new bi(n,r))}return Df.set(e.id,c),c.clone()}var kf=[],Af=(e,t,n,r,i,a={})=>kf.push({id:e,name:t,kind:`sword`,art:n,pal:r,grip:i,depth:1,glow:a.glow??``,sound:a.sound??`swing`,...a}),jf=(e,t,n,r,i,a,o)=>kf.push({id:e,name:t,kind:`gun`,art:n,pal:r,grip:i,muzzle:a,depth:2,glow:o.glow??``,...o});Af(`pickaxe`,`Pickaxe`,Dd(15,18,[[`m`,3,0,9,1],[`m`,1,1,13,2],[`M`,3,1,9,1],[`m`,0,3,3,2],[`m`,12,3,3,2],[`m`,0,5,1,1],[`m`,14,5,1,1],[`h`,6,3,3,14],[`H`,7,3,1,14],[`p`,6,17,3,1]]),{m:`#9aa3ab`,M:`#d6dde3`,h:`#7a4f2a`,H:`#5c3d1e`,p:`#3a2a14`},[7,14],{tool:`pickaxe`,sound:`swing`}),Af(`katana`,`Katana`,Dd(7,28,[[`e`,3,0,1,18],[`s`,4,1,1,17],[`g`,1,18,5,2],[`h`,3,20,2,7],[`w`,3,21],[`w`,4,22],[`w`,3,23],[`w`,4,24],[`w`,3,25],[`p`,3,27,2,1]]),{e:`#ffffff`,s:`#c9d1d9`,g:`#c9a227`,h:`#1c1c1c`,w:`#d9d9d9`,p:`#888888`},[3,23]);var Mf=(e,t,n,r)=>Af(e,t,Dd(7,18,[[`o`,3,0],[`o`,2,1,3,12],[`c`,3,1,1,12],[`C`,3,2,1,5],[`g`,0,13,7,1],[`G`,1,13],[`G`,5,13],[`h`,3,14,1,3],[`p`,3,17]]),n,[3,15],r);Mf(`crystal_sword`,`Crystal Sword`,{o:`#1d6b66`,c:`#5fe3d6`,C:`#c8fff9`,g:`#2b4f4f`,G:`#4aa8a8`,h:`#5c3d1e`,p:`#3a2a14`}),Mf(`gold_sword`,`Gold Sword`,{o:`#9a6b0f`,c:`#f2c94c`,C:`#fff3b0`,g:`#7a5410`,G:`#e0b23a`,h:`#5c3d1e`,p:`#3a2a14`}),Mf(`shadow_sword`,`Shadow Blade`,{o:`#1a1024`,c:`#4a2a6a`,C:`#9b6bd1`,g:`#111111`,G:`#7a3fb5`,h:`#222222`,p:`#7a3fb5`},{glow:`C`}),Mf(`flame_sword`,`Flame Sword`,{o:`#8a2a00`,c:`#ff7a1a`,C:`#ffd84a`,g:`#3a2a14`,G:`#c0392b`,h:`#5c3d1e`,p:`#c0392b`},{glow:`cC`}),Mf(`frost_sword`,`Frost Sword`,{o:`#2b5aa8`,c:`#8fd3ff`,C:`#ffffff`,g:`#1d3f7a`,G:`#bfe3ff`,h:`#3a3f45`,p:`#bfe3ff`},{glow:`C`}),Af(`plasma_sword`,`Plasma Sword`,Dd(11,21,[[`b`,1,2,1,3],[`b`,0,5,1,4],[`b`,1,9],[`B`,2,0,1,5],[`B`,1,5,1,4],[`B`,2,9],[`B`,3,10],[`W`,3,1,1,4],[`W`,2,5,1,4],[`W`,3,9],[`W`,4,10],[`k`,3,11,5,1],[`m`,4,12,1,5],[`h`,5,12,1,5],[`k`,3,17,5,1],[`B`,3,18,1,2],[`W`,3,20]],{mirror:!0}),{b:`#1a8fd6`,B:`#4fd8ff`,W:`#e8fdff`,k:`#2a2f3a`,m:`#4a5468`,h:`#7a86a0`},[5,14],{glow:`bBW`,sound:`saber`}),Af(`hero_blade`,`Hero's Blade`,Dd(11,26,[[`o`,5,0],[`o`,4,1,1,16],[`o`,6,1,1,16],[`s`,5,1,1,16],[`d`,5,10,1,6],[`b`,0,17,11,2],[`b`,0,16,2,1],[`b`,9,16,2,1],[`B`,1,17],[`B`,9,17],[`Y`,5,17,1,2],[`i`,4,19,1,5],[`p`,5,19,1,5],[`i`,6,19,1,5],[`b`,4,24,3,1],[`Y`,5,25]]),{o:`#8a94a3`,s:`#e6ebf2`,d:`#aab4c3`,b:`#3d4fc4`,B:`#6f7ff0`,Y:`#ffd23f`,p:`#5b3fa0`,i:`#7c5fd0`},[5,21]);var Nf=(e,t,n,r)=>Af(e,t,Dd(4,28,[[`R`,1,0,2,1],[`R`,0,1,1,18],[`R`,3,1,1,18],[`W`,1,1,2,18],[`k`,0,19,4,1],[`m`,1,20,2,8],[`k`,1,21,2,1],[`k`,1,23,2,1],[`k`,1,25,2,1]]),{R:n,W:r,k:`#1c1c1c`,m:`#a7aeb6`},[1,23],{glow:`RW`,sound:`saber`});Nf(`laser_saber_red`,`Red Laser Saber`,`#ff2b2b`,`#ffe0e0`),Nf(`laser_saber_blue`,`Blue Laser Saber`,`#2b8bff`,`#e0f0ff`),Nf(`laser_saber_green`,`Green Laser Saber`,`#2bff5a`,`#e0ffe8`),Af(`buster_blade`,`Buster Blade`,Dd(8,30,[[`o`,1,0,6,1],[`o`,0,1,8,20],[`e`,1,1,2,19],[`s`,3,1,3,19],[`d`,6,1,1,19],[`k`,3,15,2,2],[`m`,0,21,8,1],[`h`,3,22,2,7],[`H`,3,23,2,1],[`H`,3,25,2,1],[`H`,3,27,2,1],[`m`,3,29,2,1]]),{o:`#4a525c`,e:`#dfe5ec`,s:`#a7b0ba`,d:`#7c8692`,k:`#1c1c1c`,m:`#6d757e`,h:`#3a2a1a`,H:`#5c4330`},[3,25]),Af(`battle_axe`,`Battle Axe`,Dd(9,22,[[`h`,3,0,2,21],[`H`,3,4,2,1],[`H`,3,9,2,1],[`H`,3,14,2,1],[`a`,5,1,3,4],[`a`,5,0,2,1],[`a`,5,5,2,1],[`e`,8,1,1,4],[`a`,1,1,2,3],[`m`,3,21,2,1]]),{h:`#5c3d1e`,H:`#3a2a14`,a:`#a7b0ba`,e:`#ffffff`,m:`#6d757e`},[3,17]),Af(`war_hammer`,`War Hammer`,Dd(10,22,[[`m`,0,0,10,4],[`M`,1,1,8,2],[`h`,4,4,2,17],[`H`,4,8,2,1],[`H`,4,12,2,1],[`m`,4,21,2,1]]),{m:`#5a636c`,M:`#8c96a0`,h:`#5c3d1e`,H:`#3a2a14`},[4,17]),jf(`pistol`,`Pistol`,Dd(12,8,[[`k`,2,0,10,3],[`m`,3,1,8,1],[`k`,2,3,5,1],[`k`,8,3],[`k`,7,4,2,1],[`k`,1,4,4,4],[`g`,2,6]]),{k:`#222428`,m:`#4a4d55`,g:`#3a3d45`},[2,5],[11,1],{rate:5,auto:!1,range:60,spread:.01,pellets:1,sound:`pistol`,tracer:`#ffe28a`,recoil:.03}),jf(`assault_rifle`,`Assault Rifle`,Dd(30,11,[[`k`,0,3,6,4],[`K`,0,3,1,5],[`o`,6,2,14,5],[`k`,6,2,14,1],[`k`,9,0,6,1],[`k`,9,1],[`k`,14,1],[`C`,15,4,2,1],[`o`,20,3,7,3],[`k`,21,4],[`k`,23,4],[`k`,25,4],[`k`,27,4,3,1],[`k`,12,7,3,4],[`k`,8,7,2,3],[`k`,10,7]]),{k:`#22251f`,K:`#111111`,o:`#4b5a3a`,C:`#4fd8ff`},[9,8],[29,4],{rate:11,auto:!0,range:70,spread:.025,pellets:1,sound:`rifle`,tracer:`#ffe28a`,recoil:.012,glow:`C`,twoHanded:!0}),jf(`shotgun`,`Shotgun`,Dd(26,8,[[`w`,0,2,7,4],[`W`,0,2,1,4],[`k`,7,2,6,3],[`k`,13,2,13,1],[`m`,13,3,11,1],[`w`,15,4,6,2],[`k`,7,5,2,3]]),{w:`#7a4f2a`,W:`#5a3a1e`,k:`#222428`,m:`#4a4d55`},[8,6],[25,2],{rate:1.4,auto:!1,range:35,spread:.09,pellets:8,sound:`shotgun`,tracer:`#ffd27a`,recoil:.09,twoHanded:!0}),jf(`sniper`,`Sniper Rifle`,Dd(34,10,[[`k`,0,4,8,4],[`k`,2,3,5,1],[`g`,8,4,10,3],[`m`,10,1,10,2],[`L`,19,1,1,2],[`k`,12,3],[`k`,17,3],[`k`,18,5,16,1],[`k`,32,4,2,3],[`k`,13,7,3,2],[`k`,10,7,2,3]]),{k:`#1c1e22`,g:`#2f3b2a`,m:`#3a3f45`,L:`#4fd8ff`},[11,8],[33,5],{rate:.8,auto:!1,range:160,spread:0,pellets:1,sound:`sniper`,tracer:`#ffffff`,recoil:.12,zoom:18,glow:`L`,twoHanded:!0}),jf(`plasma_pistol`,`Plasma Pistol`,Dd(14,10,[[`p`,2,2,10,5],[`P`,3,3,8,1],[`p`,11,1,2,2],[`p`,11,6,2,2],[`G`,12,1,2,1],[`G`,12,7,2,1],[`G`,13,4],[`p`,1,6,3,4]]),{p:`#6a2f98`,P:`#9b59d0`,G:`#7dff6a`},[2,7],[13,4],{rate:4,auto:!1,range:60,spread:.015,pellets:1,sound:`plasma`,tracer:`#7dff6a`,recoil:.02,glow:`G`,beam:.09}),jf(`ray_gun`,`Ray Gun`,Dd(16,10,[[`r`,2,3,9,4],[`R`,3,4,7,1],[`m`,11,3,1,4],[`m`,13,3,1,4],[`r`,12,4,1,2],[`G`,14,4,2,2],[`m`,4,1,5,2],[`r`,2,7,3,3]]),{r:`#c62828`,R:`#ef5350`,m:`#c0c6cc`,G:`#4dff9a`},[3,8],[15,4],{rate:3,auto:!1,range:70,spread:.005,pellets:1,sound:`laser`,tracer:`#4dff9a`,recoil:.02,glow:`G`,beam:.07}),jf(`repulsor`,`Repulsor Gauntlet`,Dd(8,8,[[`r`,0,0,8,8],[`g`,0,2,8,1],[`g`,0,5,8,1],[`W`,3,3,2,2],[`w`,2,3],[`w`,5,4]]),{r:`#b3121b`,g:`#e0b23a`,W:`#e8fdff`,w:`#7fd8ff`},[3,4],[7,3],{rate:2.5,auto:!1,range:70,spread:0,pellets:1,sound:`laser`,tracer:`#bff6ff`,recoil:.03,glow:`Ww`,beam:.16,explode:1.6}),jf(`rocket_launcher`,`Rocket Launcher`,Dd(32,10,[[`o`,0,2,30,5],[`O`,1,3,28,1],[`k`,0,2,1,5],[`k`,29,2,3,5],[`R`,30,3,2,3],[`k`,8,0,3,2],[`k`,10,7,2,3],[`k`,18,7,2,2]]),{o:`#4b5a3a`,O:`#62744a`,k:`#22251f`,R:`#c62828`},[11,8],[31,4],{rate:.7,auto:!1,range:120,spread:0,pellets:1,sound:`rocket`,tracer:`#ffb347`,recoil:.1,rocket:!0,explode:3.2,twoHanded:!0}),jf(`minigun`,`Minigun`,Dd(30,10,[[`k`,0,2,10,6],[`m`,10,2,16,1],[`m`,10,4,16,1],[`m`,10,6,16,1],[`k`,10,3,16,1],[`k`,10,5,16,1],[`K`,26,1,2,7],[`y`,3,8,4,2],[`k`,4,0,4,2]]),{k:`#22252a`,K:`#111111`,m:`#7c8692`,y:`#c9a227`},[5,6],[29,4],{rate:22,auto:!0,range:60,spread:.05,pellets:1,sound:`rifle`,tracer:`#ffe28a`,recoil:.006,twoHanded:!0});var Pf=Object.fromEntries(kf.map(e=>[e.id,e])),Ff=kf,If=new Set([q.LEAVES,q.GLASS,q.TORCH,q.TALL_GRASS,q.FLOWER_RED,q.FLOWER_YELLOW]),Lf=1.8/32;function Rf(e){let t=new ia(e);return t.magFilter=r,t.minFilter=r,t.colorSpace=ze,t}var zf={head:{pivot:[0,24,0],center:[0,4,0]},body:{pivot:[0,12,0],center:[0,6,0]},armL:{pivot:[-6,22,0],center:[0,-4,0]},armR:{pivot:[6,22,0],center:[0,-4,0]},legL:{pivot:[-2,12,0],center:[0,-6,0]},legR:{pivot:[2,12,0],center:[0,-6,0]}},Bf=class{constructor(){this.root=new On,this.body=new On,this.body.scale.setScalar(Lf),this.root.add(this.body),this.parts={};for(let[e,{pivot:t,center:n}]of Object.entries(zf)){let[r,i,a]=uf[e],o=new On;o.position.set(...t);let s=new bi(new ca(r,i,a)),c=new bi(new ca(r+1,i+1,a+1));s.position.set(...n),c.position.set(...n),o.add(s,c),this.body.add(o),this.parts[e]={group:o,inner:s,outer:c}}this.head=this.parts.head.group,this.armL=this.parts.armL.group,this.armR=this.parts.armR.group,this.legL=this.parts.legL.group,this.legR=this.parts.legR.group,this.capePivot=new On,this.capePivot.position.set(0,24,2.5),this.cape=new bi(new ca(10,16,1)),this.cape.position.set(0,-8,.5),this.capePivot.add(this.cape),this.body.add(this.capePivot),this.hand=new On,this.hand.position.set(0,-10,0),this.hand.matrixAutoUpdate=!1,this.armR.add(this.hand),this.weapon=null,this.weaponDrawn=!0,this.phase=0,this.amp=0,this.swingT=0,this.recoil=0,this.capeLift=0,this.yawOffset=0,this.pose=null,this.setOutfit(cf)}setOutfit(e){this.outfit={...e};let t=Sf(this.outfit);for(let[e,n]of Object.entries(this.parts)){let r=t[e];for(let e of[n.inner,n.outer])[].concat(e.material).forEach(e=>{e.map?.dispose(),e.dispose?.()});n.inner.material=r.inner.map(e=>new Da({map:Rf(e)})),n.outer.material=r.outer.map(e=>new Da({map:Rf(e),alphaTest:.5,transparent:!1})),n.outer.visible=r.hasOuter}let n=Cf(this.outfit.cape);if([].concat(this.cape.material).forEach(e=>{e.map?.dispose(),e.dispose?.()}),n){let e=n.getContext(`2d`).getImageData(0,0,1,1).data,t=new Da({color:new H(`rgb(${e[0]},${e[1]},${e[2]})`).multiplyScalar(.7)}),r=new Da({map:Rf(n)});this.cape.material=[t,t,t,t,r,t]}this.cape.visible=!!n,this.setWeapon(this.outfit.hand)}setWeapon(e){if(this.weaponMesh&&this.hand.remove(this.weaponMesh),this.weapon=Pf[e]??null,this.weaponMesh=null,!this.weapon)return;let t=this.weapon,n=t.scale??(t.kind===`sword`?.6:.55);this.weaponMesh=Of(t),this.weaponMesh.scale.setScalar(n),this.hand.add(this.weaponMesh),this.hand.matrix.makeBasis(new B(0,-1,0),new B(0,0,-1),new B(1,0,0)),this.hand.matrix.setPosition(0,-10,0)}get holding(){return this.weaponDrawn&&this.weapon?this.weapon.kind:null}swing(){this.swingT=.25}kick(e){this.recoil=Math.min(.6,this.recoil+e*4)}update(e,t,n,r,i,a){this.root.position.copy(t),this.root.rotation.y=n+this.yawOffset,this.head.rotation.set(Math.max(-1.2,Math.min(1.2,r)),0,0),this.weaponMesh&&(this.weaponMesh.visible=this.weaponDrawn);let o=a?.15:Math.min(1,i/4.3);this.amp+=(o-this.amp)*Math.min(1,e*10),this.phase+=e*(2+i*2);let s=Math.sin(this.phase)*this.amp*.9;this.legL.rotation.x=s,this.legR.rotation.x=-s,this.swingT=Math.max(0,this.swingT-e),this.recoil=Math.max(0,this.recoil-e*3);let c=this.swingT>0?1-this.swingT/.25:0,l=this.swingT>0?Math.sin(c*Math.PI):0,u=this.holding;if(this.armL.rotation.set(-s,0,0),this.armR.rotation.set(0,0,0),u===`gun`){let e=Math.PI/2+Math.max(-1.2,Math.min(1.2,r))+this.recoil;this.armR.rotation.x=e,this.weapon.twoHanded&&this.armL.rotation.set(e,0,.55)}else u===`sword`?(this.armR.rotation.x=.35+s*.4+l*1.9,this.armR.rotation.z=l*-.5):this.armR.rotation.x=s+l*1.3;let d=Math.min(1.1,.12+i*.12+(a?.5:0));this.capeLift+=(d-this.capeLift)*Math.min(1,e*4),this.capePivot.rotation.x=-this.capeLift-Math.sin(this.phase*1.3)*.05*(.3+this.amp),this.pose?.(this,e)}},Vf=.3,Hf=1.8,Uf=1.62,Wf=28,Gf=8.7,Kf=4,qf=.7,Jf=1.8,Yf=.025,Xf=2.8,Zf=350,Qf=.12,$f={FIRST:0,BACK:1,FRONT:2},ep=class{constructor(e,t){this.world=e,this.camera=t,this.pos=new B,this.vel=new B,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.canFly=!0,this.enabled=!1,this.keys=new Set,this.lastSpace=0,this.sprinting=!1,this.view=$f.BACK,this.hitWall=!1,this.stepDist=0,this.onStep=null,this.character=new Bf,this.zoomFov=null,this.fov=75,this.sensitivity=.3,this.invertY=!1,this.aimOrigin=new B,this.aimSkip=0,this.eye=new B,this.look=new B,this.absMouse=!1,this.cursor=null,this.camDist=Kf,this.airT=0,this.lastW=0,this.sprintLatch=!1,this.stick=null,document.addEventListener(`keydown`,e=>{if(this.enabled){if(e.code===`Space`&&(e.preventDefault(),!e.repeat)){let e=performance.now();e-this.lastSpace<300?(this.flying=this.canFly&&!this.flying,this.vel.y=0,this.lastSpace=0):this.lastSpace=e}if(e.code===`KeyW`&&!e.repeat){let e=performance.now();e-this.lastW<280&&(this.sprintLatch=!0),this.lastW=e}this.keys.add(e.code)}}),document.addEventListener(`keyup`,e=>{this.keys.delete(e.code),e.code===`KeyW`&&(this.sprintLatch=!1)}),document.documentElement.addEventListener(`mouseleave`,()=>this.cursor=null),document.addEventListener(`mousemove`,e=>{if(this.absMouse){let t=this.cursor;this.cursor={x:e.clientX,y:e.clientY};let n=this.ratchet(`x`,e.clientX,innerWidth,t?e.clientX-t.x:0),r=this.ratchet(`y`,e.clientY,innerHeight,t?e.clientY-t.y:0);this.enabled&&Math.abs(n)<300&&Math.abs(r)<300&&this.turn(n,r,Jf)}else this.enabled&&(Math.abs(e.movementX)>250||Math.abs(e.movementY)>250||this.turn(e.movementX,e.movementY))})}turn(e,t,n=1){let r=.0022*n*this.sensitivity*(this.zoomFov?this.zoomFov/this.fov:1);this.yaw-=e*r,this.pitch-=t*r*(this.invertY?-1:1),this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch))}ratchet(e,t,n,r){let i=n*Yf,a=t<i?-1:+(t>n-i);this.edge??={x:{pushT:0,back:0},y:{pushT:0,back:0}};let o=this.edge[e];return a&&r*a>0&&(o.pushT=performance.now()),a?o.back=a:(r*o.back>0||(t/n-.5)*o.back<0)&&(o.back=0),o.back&&r*o.back<0?0:r}edgeTurn(e){if(!this.absMouse||!this.cursor||!this.edge)return 0;let t=(e,t,n)=>{let r=1-(performance.now()-n.pushT)/Zf;if(r<=0)return 0;let i=t*Yf;return e<i?-(Math.min(1,(i-e)/i)**1.5)*r:e>t-i?Math.min(1,(e-(t-i))/i)**1.5*r:0},n=t(this.cursor.x,innerWidth,this.edge.x),r=t(this.cursor.y,innerHeight,this.edge.y),i=Xf*Math.sqrt(this.sensitivity/.3)*(this.zoomFov?this.zoomFov/this.fov:1)*e;return this.yaw-=n*i,this.pitch-=r*i*.6*(this.invertY?-1:1),this.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,this.pitch)),n}solidAt(e,t,n){return mu[this.world.getBlock(e,t,n)].solid}collides(e,t,n){let r=Math.floor(e-Vf),i=Math.floor(e+Vf-1e-9),a=Math.floor(t),o=Math.floor(t+Hf-1e-9),s=Math.floor(n-Vf),c=Math.floor(n+Vf-1e-9);for(let e=a;e<=o;e++)for(let t=s;t<=c;t++)for(let n=r;n<=i;n++)if(this.solidAt(n,e,t))return!0;return!1}intersectsBlock(e,t,n){let r=this.pos;return r.x-Vf<e+1&&r.x+Vf>e&&r.y<t+1&&r.y+Hf>t&&r.z-Vf<n+1&&r.z+Vf>n}settle(){for(;this.collides(this.pos.x,this.pos.y,this.pos.z)&&this.pos.y<128;)this.pos.y+=1}moveAxis(e,t){if(!t)return;let n=this.pos;if(n.setComponent(e,n.getComponent(e)+t),this.collides(n.x,n.y,n.z)){if(e===1)t<0?(n.y=Math.floor(n.y)+1,this.onGround=!0):n.y=Math.floor(n.y+Hf)-Hf-1e-4;else{let r=n.getComponent(e);n.setComponent(e,t>0?Math.floor(r+Vf)-Vf-1e-4:Math.floor(r-Vf)+1+Vf+1e-4),this.hitWall=!0}this.vel.setComponent(e,0)}}get inWater(){let e=this.pos;return this.world.getBlock(Math.floor(e.x),Math.floor(e.y+.4),Math.floor(e.z))===q.WATER}update(e){e=Math.min(e,.05);let t=this.keys,n=-Math.sin(this.yaw),r=-Math.cos(this.yaw),i=Math.cos(this.yaw),a=-Math.sin(this.yaw),o=0,s=0;t.has(`KeyW`)&&(o+=n,s+=r),t.has(`KeyS`)&&(o-=n,s-=r),t.has(`KeyD`)&&(o+=i,s+=a),t.has(`KeyA`)&&(o-=i,s-=a);let c=this.stick;c&&(c.x||c.y)&&(o+=n*c.y+i*c.x,s+=r*c.y+a*c.x);let l=Math.hypot(o,s);l>1&&(o/=l,s/=l);let u=t.has(`Space`),d=t.has(`ShiftLeft`)||t.has(`ShiftRight`),f=this.inWater;this.sprinting=!this.flying&&((d||this.sprintLatch)&&t.has(`KeyW`)||c&&c.y>.95),this.edgeX=this.edgeTurn(e);let p=2.4*e;if(t.has(`ArrowLeft`)&&(this.yaw+=p),t.has(`ArrowRight`)&&(this.yaw-=p),t.has(`ArrowUp`)&&(this.pitch=Math.min(Math.PI/2-.01,this.pitch+p*.7)),t.has(`ArrowDown`)&&(this.pitch=Math.max(-Math.PI/2+.01,this.pitch-p*.7)),this.flying){let t=1-Math.exp(-12*e);this.vel.x+=(o*11-this.vel.x)*t,this.vel.z+=(s*11-this.vel.z)*t,this.vel.y+=((u?11:0)-(d?11:0)-this.vel.y)*t}else{let t=(this.sprinting?5.8:4.3)*(f?.55:1),n=1-Math.exp(-(this.onGround?18:6)*e);this.vel.x+=(o*t-this.vel.x)*n,this.vel.z+=(s*t-this.vel.z)*n,f?(this.vel.y=Math.max(this.vel.y-12*e,-3),u&&(this.vel.y=Math.min(this.vel.y+30*e,3.8))):(this.vel.y=Math.max(this.vel.y-Wf*e,-55),this.airT=this.onGround?0:this.airT+e,u&&this.airT<Qf&&this.vel.y<=.5&&(this.vel.y=Gf,this.airT=Qf))}let m=Math.max(Math.abs(this.vel.x),Math.abs(this.vel.y),Math.abs(this.vel.z)),h=Math.max(1,Math.ceil(m*e/.4)),g=e/h,_=this.pos.x,v=this.pos.z;this.onGround=!1,this.hitWall=!1;for(let e=0;e<h;e++)this.moveAxis(0,this.vel.x*g),this.moveAxis(2,this.vel.z*g),this.moveAxis(1,this.vel.y*g);if(this.flying&&this.onGround&&(this.flying=!1),this.hitWall&&this.onGround&&!this.flying&&l){let e=this.pos,t=e.x+o*.4,n=e.z+s*.4;this.collides(t,e.y+.05,n)&&!this.collides(t,e.y+1.05,n)&&!this.collides(e.x,e.y+1.05,e.z)&&(this.vel.y=Gf)}if(this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-_,this.pos.z-v),this.stepDist>1.8)){this.stepDist=0;let e=this.world.getBlock(Math.floor(this.pos.x),Math.floor(this.pos.y-.1),Math.floor(this.pos.z));e&&this.onStep?.(e)}if(this.pos.y<-30){let e=this.world.findSpawn();this.pos.set(e.x+.5,e.y+1,e.z+.5),this.vel.set(0,0,0)}}cycleView(){this.view=(this.view+1)%3}syncCamera(e){let t=Math.cos(this.pitch);if(this.eye.set(this.pos.x,this.pos.y+Uf,this.pos.z),this.look.set(-Math.sin(this.yaw)*t,Math.sin(this.pitch),-Math.cos(this.yaw)*t),this.view===$f.FIRST)this.camera.position.copy(this.eye),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`);else{let t=this.look.clone().multiplyScalar(this.view===$f.BACK?-1:1).multiplyScalar(Kf);this.view===$f.BACK&&t.add(new B(Math.cos(this.yaw)*qf,.1,-Math.sin(this.yaw)*qf));let n=t.length(),r=t.divideScalar(n),i=this.world.raycast(this.eye,r,n),a=i&&mu[i.id].solid?Math.max(.3,i.t-.25):n;this.camDist=a<this.camDist?a:this.camDist+(a-this.camDist)*Math.min(1,e*5),this.camera.position.copy(this.eye).addScaledVector(r,this.camDist),this.view===$f.BACK?this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`):this.camera.rotation.set(-this.pitch,this.yaw+Math.PI,0,`YXZ`)}this.view===$f.BACK?(this.aimOrigin.copy(this.camera.position),this.aimSkip=this.camera.position.distanceTo(this.eye)):(this.aimOrigin.copy(this.eye),this.aimSkip=0),this.character.root.visible=this.view!==$f.FIRST,this.character.update(e,this.pos,this.yaw,this.pitch,Math.hypot(this.vel.x,this.vel.z),this.flying);let n=this.zoomFov??(this.sprinting&&Math.hypot(this.vel.x,this.vel.z)>1?this.fov+10:this.fov);Math.abs(this.camera.fov-n)>.05&&(this.camera.fov+=(n-this.camera.fov)*Math.min(1,e*(this.zoomFov?20:10)),this.camera.updateProjectionMatrix())}},tp=e=>document.querySelector(e),np=[`w:katana`,`w:assault_rifle`,`w:pickaxe`],rp=e=>typeof e==`string`&&e.startsWith(`w:`)?Pf[e.slice(2)]??null:null,ip=e=>typeof e==`number`?!!mu[e]:!!rp(e),ap=class{constructor(e,t,n,r){this.hotbar=t?.length===9&&t.every(ip)?[...t]:[...bu],this.hotbar.some(rp)||(this.hotbar=[...np,...this.hotbar.slice(0,6)]),this.hotbar.includes(`w:pickaxe`)||this.hotbar.splice(2,1,`w:pickaxe`),this.selected=0,this.counts=null,this.onSelect=r,this.icons={};for(let t of yu)this.icons[t]=pu(e,mu[t]);for(let e of Ff)this.icons[`w:`+e.id]=Ef(e);this.toastTimer=null;let i=(e,t)=>{for(let r of t){let t=document.createElement(`button`);t.className=`slot`,t.title=this.nameOf(r),t.dataset.item=r,t.innerHTML=`<img src="${this.icons[r]}" alt=""><span></span>`,t.onclick=()=>{this.hotbar[this.selected]=r,this.renderHotbar(),this.onSelect?.(this.current,!1),n?.()},e.appendChild(t)}};i(tp(`#invWeapons`),Ff.map(e=>`w:`+e.id)),i(tp(`#invGrid`),yu),this.renderHotbar()}get current(){return this.hotbar[this.selected]}get currentBlock(){return typeof this.current==`number`?this.current:null}get currentWeapon(){return rp(this.current)}nameOf(e){return rp(e)?.name??mu[e]?.name??``}setCounts(e){this.counts=e,this.renderHotbar(),this.renderInventory()}count(e){return this.counts?this.counts[e]??0:1/0}take(e){return this.counts?this.counts[e]?(this.counts[e]--,this.renderHotbar(),!0):!1:!0}give(e,t=1){this.counts&&this.icons[e]&&(this.counts[e]=(this.counts[e]??0)+t,this.renderHotbar())}renderInventory(){for(let e of document.querySelectorAll(`#invGrid .slot`)){let t=+e.dataset.item,n=this.count(t);e.classList.toggle(`empty`,n===0),e.querySelector(`span`).textContent=this.counts?n:``}}renderHotbar(){let e=tp(`#hotbar`);e.innerHTML=``,this.hotbar.forEach((t,n)=>{let r=document.createElement(`div`),i=typeof t==`number`?this.count(t):1/0;r.className=`slot`+(n===this.selected?` selected`:``)+(rp(t)?` weapon`:``)+(i===0?` empty`:``),r.innerHTML=`<img src="${this.icons[t]}" alt=""><span>${n+1}</span>${i===1/0?``:`<b>${i}</b>`}`,e.appendChild(r)})}select(e){let t=(e%9+9)%9,n=t===this.selected;this.selected=t,this.renderHotbar(),this.onSelect?.(this.current,n)}put(e){if(!ip(e))return;let t=this.hotbar.indexOf(e);if(t>=0)return this.select(t);this.hotbar[this.selected]=e,this.renderHotbar(),this.onSelect?.(this.current,!1)}pick(e){this.icons[e]&&this.put(e)}toast(e){let t=tp(`#toast`);t.textContent=e,t.classList.add(`show`),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>t.classList.remove(`show`),1200)}},op=`omnicraft:world`,sp=localStorage.getItem(op)===`raider`?`raider`:`classic`,cp=sp===`raider`?`omnicraft:save:raider`:`omnicraft:save:v1`;function lp(e){localStorage.setItem(op,e)}function up(){try{let e=JSON.parse(localStorage.getItem(cp));return e?{...e,edits:new Map(Object.entries(e.edits||{}).map(([e,t])=>[e,new Map(t)]))}:null}catch{return null}}function dp({seed:e,edits:t,player:n,hotbar:r,counts:i,mats:a,pack:o,time:s}){let c={seed:e,player:n,hotbar:r,counts:i,mats:a,pack:o,time:s,edits:Object.fromEntries([...t].map(([e,t])=>[e,[...t]]))};try{localStorage.setItem(cp,JSON.stringify(c))}catch(e){console.warn(`Could not save world`,e)}}function fp(){localStorage.removeItem(cp)}var pp=[`wood`,`stone`,`metal`,`parts`],mp={wood:`🪵`,stone:`🪨`,metal:`⚙️`,parts:`🔩`},hp={wood:`wood`,stone:`stone`,metal:`metal`,parts:`ARC parts`},gp={wood:40,stone:30,metal:6,parts:0},_p=[q.LOG,q.PLANKS,q.LEAVES,q.BOOKSHELF,q.TORCH,q.TALL_GRASS,q.FLOWER_RED,q.FLOWER_YELLOW,q.PALM_LOG,q.PALM_LEAVES,q.JUNGLE_LEAVES,q.PINE_LEAVES,q.FLAGS],vp=[q.RUST_METAL,q.STEEL,q.HAZARD,q.WHITE_PANEL,q.ORANGE_PANEL,q.IRON_ORE,q.RED_LATTICE,q.CONTAINER_RED,q.CONTAINER_BLUE,q.DARK_WINDOW],yp=[q.LAMP,q.BEACON,q.SERVER,q.SCREEN,q.DIAMOND_ORE];function bp(e){return _p.includes(e)?`wood`:vp.includes(e)?`metal`:yp.includes(e)?`parts`:`stone`}var xp={[q.LOG]:[`wood`,3],[q.PLANKS]:[`wood`,1],[q.BOOKSHELF]:[`wood`,2],[q.STONE]:[`stone`,2],[q.COBBLE]:[`stone`,2],[q.CONCRETE]:[`stone`,2],[q.BRICKS]:[`stone`,2],[q.STONE_BRICKS]:[`stone`,2],[q.RUST_METAL]:[`metal`,2],[q.STEEL]:[`metal`,3],[q.HAZARD]:[`metal`,2],[q.WHITE_PANEL]:[`metal`,2],[q.ORANGE_PANEL]:[`metal`,2],[q.IRON_ORE]:[`metal`,4],[q.COAL_ORE]:[`parts`,1],[q.DIAMOND_ORE]:[`parts`,4],[q.LAMP]:[`parts`,1],[q.BEACON]:[`parts`,2],[q.SERVER]:[`parts`,3],[q.SCREEN]:[`parts`,2],[q.LEAVES]:null,[q.TALL_GRASS]:null,[q.FLOWER_RED]:null,[q.FLOWER_YELLOW]:null,[q.WATER]:null,[q.TORCH]:[`wood`,1],[q.PALM_LOG]:[`wood`,3],[q.PALM_LEAVES]:null,[q.JUNGLE_LEAVES]:null,[q.PINE_LEAVES]:null,[q.FLAGS]:null,[q.PLASTER]:[`stone`,1],[q.TERRACOTTA]:[`stone`,1],[q.STRIPE_CONCRETE]:[`stone`,2],[q.ROCK]:[`stone`,2],[q.RED_LATTICE]:[`metal`,2],[q.CONTAINER_RED]:[`metal`,2],[q.CONTAINER_BLUE]:[`metal`,2],[q.DARK_WINDOW]:[`metal`,1]};function Sp(e){return e in xp?xp[e]:[`stone`,1]}var Cp=new Set([q.CRATE,q.MED_BAG,q.LOCKER]);function wp(e){let t=Math.random,n=(e,n)=>e+Math.floor(t()*(n-e+1));return e===q.MED_BAG?{name:`Medical bag`,heal:8,loot:{wood:t()<.5?n(2,4):0,parts:+(t()<.3)}}:e===q.LOCKER?{name:`Security locker`,loot:{metal:n(2,5),parts:n(2,4)}}:{name:`Weapon case`,loot:{metal:n(3,7),parts:t()<.7?n(1,2):0,wood:t()<.4?4:0}}}var Tp=[{name:`Wood`,block:q.PLANKS},{name:`Stone`,block:q.STONE_BRICKS},{name:`Metal`,block:q.STEEL}],Ep=[`Foundation`,`Wall`,`Doorway`,`Window`,`Floor`,`Stairs`],Dp=[`▦`,`▮`,`⌂`,`▣`,`▭`,`◢`];function Op(e,t,n,r){let i=Tp[t].block,a=Math.floor(n.x/3)*3,o=Math.floor(n.z/3)*3,s=n.y,c=[],l=Ep[e];if(l===`Foundation`||l===`Floor`){for(let e=0;e<3;e++)for(let t=0;t<3;t++)c.push([a+e,s,o+t,i]);return c}if(l===`Stairs`){let e=-Math.sin(r),t=-Math.cos(r),n=Math.abs(e)>Math.abs(t),l=Math.sign(n?e:t);for(let e=0;e<3;e++){let t=l>0?e:2-e;for(let r=0;r<3;r++)for(let l=0;l<=e;l++)c.push(n?[a+t,s+l,o+r,i]:[a+r,s+l,o+t,i])}return c}let u=n.hx-a,d=n.hz-o,f=[[u,`w`],[3-u,`e`],[d,`n`],[3-d,`s`]].sort((e,t)=>e[0]-t[0])[0][1];for(let e=0;e<3;e++)for(let t=0;t<3;t++){let n=i;e===1&&l===`Doorway`&&t<2&&(n=q.AIR),e===1&&l===`Window`&&t===1&&(n=q.GLASS),n!==q.AIR&&(f===`w`?c.push([a,s+t,o+e,n]):f===`e`?c.push([a+2,s+t,o+e,n]):f===`n`?c.push([a+e,s+t,o,n]):c.push([a+e,s+t,o+2,n]))}return c}var kp=class{constructor(e){this.mat=new ci({color:7331978,transparent:!0,opacity:.32,depthWrite:!1}),this.mesh=new Mi(new ca(1.01,1.01,1.01),this.mat,32),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh),this.m=new $t}show(e,t){this.mesh.count=Math.min(32,e.length);for(let t=0;t<this.mesh.count;t++){let[n,r,i]=e[t];this.mesh.setMatrixAt(t,this.m.makeTranslation(n+.5,r+.5,i+.5))}this.mesh.instanceMatrix.needsUpdate=!0,this.mat.color.set(t?7331978:16734794),this.mesh.visible=e.length>0}hide(){this.mesh.visible=!1}},Ap=e=>document.querySelector(e),jp=8,Mp=2.6,Np=[`⬆`,`↖`,`⬅`,`↙`,`⬇`,`↘`,`➡`,`↗`],Pp=class{constructor({scene:e,world:t,player:n,save:r,ui:i,sound:a,mobs:o,goHome:s,onChange:c}){Object.assign(this,{scene:e,world:t,player:n,save:r,ui:i,sound:a,mobs:o,goHome:s,onChange:c}),r.pack??=Object.fromEntries(pp.map(e=>[e,0])),this.topside=!1,this.extracting=null,this.compassT=0;let l=new la(.9,.9,140,12,1,!0);this.beamMat=new ci({color:4652960,transparent:!0,opacity:.22,depthWrite:!1,fog:!1,blending:2,side:2}),this.beams=t.raider.extracts.map(t=>{let n=new bi(l,this.beamMat);return n.position.set(t.x,t.y+70,t.z),e.add(n),n}),this.zoneButtons()}get packCount(){return pp.reduce((e,t)=>e+this.save.pack[t],0)}zoneButtons(){let e=Ap(`#deploySel`);e.innerHTML=Cu.map(e=>`<button data-zone="${e.id}">${e.name}</button>`).join(``);for(let t of e.querySelectorAll(`button`))t.onclick=()=>this.deploy(t.dataset.zone)}deploy(e){if(this.topside)return this.ui.toast(`Extract or walk back to Speranza first`);let[t,n]=this.world.raider.dropPoint(e),r=this.player;r.pos.set(t+.5,this.world.heightAt(t,n)+1.5,n+.5),r.vel.set(0,0,0),r.yaw=Math.atan2(t,n),this.onDeploy?.(),this.ui.toast(`Deployed to ${Cu.find(t=>t.id===e).name} — loot, fight, then extract`)}bank(e){let t=[];for(let e of pp){let n=this.save.pack[e];n&&(this.save.mats[e]+=n,this.save.pack[e]=0,t.push(`+${n} ${mp[e]}`))}this.onChange(),t.length?this.ui.toast(`${e} · stashed ${t.join(`  `)}`):e&&this.ui.toast(e)}lose(){let e=this.packCount;for(let e of pp)this.save.pack[e]=0;return this.extracting=null,this.onChange(),e}nearestExtract(){let e=this.player.pos,t=null,n=1/0;for(let r of this.world.raider.extracts){let i=Math.hypot(r.x-e.x,r.z-e.z);i<n&&(n=i,t=r)}return t&&{e:t,d:n}}update(e,t,n,r){let i=performance.now()/1e3;if(this.beamMat.opacity=.16+Math.sin(i*2)*.06,n)return;!t&&!this.topside?(this.topside=!0,this.ui.toast(`Topside — loot what you can, then extract at a green beam`)):t&&this.topside&&(this.topside=!1,this.bank(this.packCount?`Back in Speranza`:``));let a=Ap(`#raid`);a.classList.toggle(`hidden`,!this.topside);let o=this.topside?this.nearestExtract():null;if(o&&(this.compassT-=e)<=0){this.compassT=.2;let e=this.player.pos,{e:t,d:n}=o,r=Math.atan2(-(t.x-e.x),-(t.z-e.z)),i=Math.atan2(Math.sin(r-this.player.yaw),Math.cos(r-this.player.yaw));a.textContent=`${Np[(Math.round(i/(Math.PI/4))%8+8)%8]} ${t.name} · ${Math.round(n)}m${this.packCount?` · 🎒 ${this.packCount}`:``}`}let s=Ap(`#extractBar`),c=o&&r&&o.d<Mp&&Math.abs(this.player.pos.y-o.e.y)<3;if(c&&!this.extracting){this.extracting={e:o.e,t:0},this.ui.toast(`${o.e.name} called — hold the hatch! ARC heard that…`),this.sound.ctx&&this.sound.tone(440,.4,.15,`square`);for(let e of[`drone`,`tick`])this.mobs.spawnNear(this.player.pos,e,2)}else!c&&this.extracting&&(this.extracting=null,this.ui.toast(`Extraction cancelled — get back on the hatch`));if(s.classList.toggle(`hidden`,!this.extracting),!this.extracting)return;this.extracting.t+=e;let l=Math.max(0,jp-this.extracting.t);if(s.firstElementChild.textContent=`Extracting · ${this.extracting.e.name} · ${l.toFixed(1)}s`,s.lastElementChild.firstElementChild.style.width=`${this.extracting.t/jp*100}%`,l<=0){let e=this.extracting.e.name;this.extracting=null,s.classList.add(`hidden`),this.sound.ctx&&this.sound.tone(660,.25,.15),setTimeout(()=>this.sound.ctx&&this.sound.tone(990,.4,.15),140),this.bank(`Extracted via ${e}`),this.topside=!1,this.goHome()}}},Fp=new H(8900331),Ip=new H(461596),Lp=new H(15764043),Rp=new H(1916810),zp=new H(10470624),Bp=1600,Vp=124,Hp=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)};function Up(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`),a=i.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,e),a.addColorStop(n,e),a.addColorStop(n+.05,t),a.addColorStop(1,`rgba(0,0,0,0)`),i.fillStyle=a,i.fillRect(0,0,128,128);let o=new ia(r);return o.colorSpace=ze,o}function Wp(){let t=Xl(42),n=document.createElement(`canvas`);n.width=n.height=64;let i=n.getContext(`2d`),a=Array.from({length:22},()=>[t()*64,t()*64,2+t()*5]),o=i.createImageData(64,64);for(let e=0;e<64;e++)for(let t=0;t<64;t++){let n=0;for(let[r,i,o]of a){let a=Math.min(Math.abs(t-r),64-Math.abs(t-r)),s=Math.min(Math.abs(e-i),64-Math.abs(e-i));n+=Math.max(0,1-Math.hypot(a*.7,s)/o)}let r=(e*64+t)*4;o.data[r]=o.data[r+1]=o.data[r+2]=255,o.data[r+3]=n>.35?255:0}i.putImageData(o,0,0);let s=new ia(n);s.magFilter=r,s.minFilter=r,s.wrapS=s.wrapT=e,s.repeat.setScalar(Bp/768);let c=document.createElement(`canvas`);c.width=c.height=64;let l=c.getContext(`2d`),u=l.createRadialGradient(32,32,8,32,32,32);return u.addColorStop(0,`#fff`),u.addColorStop(1,`#000`),l.fillStyle=u,l.fillRect(0,0,64,64),{map:s,fade:new ia(c)}}var Gp=class{constructor(e,t){this.scene=e,this.fogFar=t,this.color=new H,e.background=this.color,this.sunDir=new B,this.wind=0,this.sun=new ti(new Vr({map:Up(`#fffbe0`,`rgba(255,214,120,0.45)`,.16),fog:!1,depthWrite:!1})),this.sun.scale.setScalar(170),this.moon=new ti(new Vr({map:Up(`#e8eeff`,`rgba(160,180,255,0.18)`,.12),fog:!1,depthWrite:!1})),this.moon.scale.setScalar(110);let n=Xl(7),r=new Float32Array(4500);for(let e=0;e<1500;e++){let t=new B(n()*2-1,n()*2-1,n()*2-1).normalize().multiplyScalar(450);r.set([t.x,t.y,t.z],e*3)}let i=new jr;i.setAttribute(`position`,new gr(r,3)),this.stars=new ta(i,new Xi({color:16777215,size:1.7,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}));let{map:a,fade:o}=Wp();this.cloudMap=a,this.clouds=new bi(new ha(Bp,Bp),new ci({map:a,alphaMap:o,transparent:!0,opacity:.85,depthWrite:!1,side:2,fog:!1})),this.clouds.rotation.x=-Math.PI/2,e.add(this.sun,this.moon,this.stars,this.clouds)}update(e,t,n,r){let i=t*Math.PI*2,a=this.sunDir.set(Math.cos(i),Math.sin(i),.25).normalize(),o=Hp(-.15,.25,a.y),s=Math.max(0,1-Math.abs(a.y)/.3)*.55;this.color.copy(Ip).lerp(this.haze?zp:Fp,o).lerp(Lp,s*(this.haze?1.3:1));let c=e.position;this.sun.position.copy(c).addScaledVector(a,400),this.moon.position.copy(c).addScaledVector(a,-400),this.stars.position.copy(c),this.stars.rotation.z=i,this.stars.material.opacity=Math.max(0,1-o*1.4),this.wind+=n*1.5,this.clouds.position.set(c.x,Vp,c.z);let l=this.cloudMap.repeat.x;this.cloudMap.offset.set((c.x+this.wind)/Bp*l,-c.z/Bp*l),this.clouds.material.color.setScalar(.04+.96*o*o).lerp(Lp,s*.5);let u=this.scene.fog;return r?(u.color.copy(Rp).multiplyScalar(.3+.7*o),u.near=.5,u.far=22):(u.color.copy(this.color),u.near=this.fogFar*(this.haze?.4:.55),u.far=this.fogFar),{day:o,dusk:s,sunDir:a}}},Kp={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},qp=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Jp=new co(-1,1,1,-1,0,1),Yp=new class extends jr{constructor(){super(),this.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new yr([0,2,0,0,2,0],2))}},Xp=class{constructor(e){this._mesh=new bi(Yp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Zp=class extends qp{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ta?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Sa.clone(e.uniforms),this.material=new Ta({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Qp=class extends qp{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},$p=class extends qp{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},em=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zp(Kp),this.copyPass.material.blending=0,this.timer=new _o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Qp!==void 0&&(r instanceof Qp?n=!0:r instanceof $p&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},tm=class extends qp{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},nm={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},rm=class extends qp{constructor(){super(),this.isOutputPass=!0,this.uniforms=Sa.clone(nm.uniforms),this.material=new Ea({name:nm.name,uniforms:this.uniforms,vertexShader:nm.vertexShader,fragmentShader:nm.fragmentShader}),this._fsQuad=new Xp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},im=48,am=class extends qp{constructor(){super(),this.uniforms={tDiffuse:{value:null},tDepth:{value:null},sunPos:{value:new z(.5,.5)},intensity:{value:0},rayColor:{value:new H(1,.92,.75)},aspect:{value:1}},this.quad=new Xp(new Ta({uniforms:this.uniforms,vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform vec2 sunPos;
        uniform float intensity;
        uniform vec3 rayColor;
        uniform float aspect;
        varying vec2 vUv;
        void main() {
          vec4 base = texture2D(tDiffuse, vUv);
          vec3 col = base.rgb;
          if (intensity > 0.001) {
            vec2 delta = (vUv - sunPos) * (0.9 / float(${im}));
            vec2 tc = vUv;
            float decay = 1.0;
            float acc = 0.0;
            for (int i = 0; i < ${im}; i++) {
              tc -= delta;
              float sky = step(0.99999, texture2D(tDepth, tc).x);
              vec2 d = (tc - sunPos) * vec2(aspect, 1.0);
              acc += sky * decay * exp(-dot(d, d) * 5.0);
              decay *= 0.965;
            }
            col += rayColor * acc * intensity * (2.4 / float(${im}));
          }
          float luma = dot(col, vec3(0.299, 0.587, 0.114));
          col = mix(vec3(luma), col, 1.12);
          vec2 v = vUv - 0.5;
          col *= 1.0 - dot(v, v) * 0.5;
          gl_FragColor = vec4(col, base.a);
        }`}))}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.tDepth.value=n.depthTexture,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}},om=class{constructor(e,t,n){this.camera=n,this.composer=new em(e);for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.depthTexture=new aa(e.width,e.height);this.composer.addPass(new tm(t,n)),this.rays=new am,this.composer.addPass(this.rays),this.composer.addPass(new rm),this.tmp=new B,this.look=new B}setSize(e,t){this.composer.setSize(e,t),this.rays.uniforms.aspect.value=e/t}render(e,t,n){let r=this.rays.uniforms,i=this.tmp.copy(t).project(this.camera);this.camera.getWorldDirection(this.look);let a=kt.smoothstep(this.look.dot(e.sunDir),.1,.7);r.intensity.value=n||i.z>1?0:e.day*a*.9,r.sunPos.value.set((i.x+1)/2,(i.y+1)/2),r.rayColor.value.setRGB(1,.92-e.dusk*.35,.75-e.dusk*.5),this.composer.render()}},sm=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99],cm={grass:{freq:900,q:.8,dur:.16,vol:.5,type:`bandpass`},stone:{freq:2200,q:1.4,dur:.11,vol:.45,type:`bandpass`,thump:300},wood:{freq:650,q:2.2,dur:.12,vol:.4,type:`bandpass`,thump:140},sand:{freq:2600,q:.5,dur:.18,vol:.3,type:`highpass`},glass:{freq:4e3,q:1.5,dur:.1,vol:.3,type:`bandpass`,ping:!0},water:{freq:500,q:.7,dur:.3,vol:.35,type:`lowpass`},metal:{freq:3200,q:6,dur:.14,vol:.35,type:`bandpass`,ping:!0,thump:220}},lm=class{constructor(){this.ctx=null,this.musicOn=!0}init(){if(this.ctx){this.ctx.resume();return}let e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=.7,this.master.connect(e.destination),this.musicGain=e.createGain(),this.musicGain.gain.value=.16;let t=e.createDelay();t.delayTime.value=.38;let n=e.createGain();n.gain.value=.38;let r=e.createBiquadFilter();r.type=`lowpass`,r.frequency.value=1800,this.musicGain.connect(this.master),this.musicGain.connect(t),t.connect(r).connect(n).connect(t),r.connect(this.master),this.noiseBuf=e.createBuffer(1,e.sampleRate,e.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1;setTimeout(()=>this.musicLoop(),3e3)}noise({freq:e,q:t,dur:n,vol:r,type:i},a=1){let o=this.ctx,s=o.currentTime,c=o.createBufferSource();c.buffer=this.noiseBuf;let l=o.createBiquadFilter();l.type=i,l.frequency.value=e*a,l.Q.value=t;let u=o.createGain();u.gain.setValueAtTime(r,s),u.gain.exponentialRampToValueAtTime(.001,s+n),c.connect(l).connect(u).connect(this.master),c.start(s,Math.random()*.5,n+.05)}tone(e,t,n,r=`sine`,i=this.master,a=.005){let o=this.ctx,s=o.currentTime,c=o.createOscillator();c.type=r,c.frequency.value=e;let l=o.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.linearRampToValueAtTime(n,s+a),l.gain.exponentialRampToValueAtTime(1e-4,s+t),c.connect(l).connect(i),c.start(s),c.stop(s+t+.05)}hit(e,t=1,n=1){if(!this.ctx)return;let r=cm[e]??cm.stone,i=.85+Math.random()*.3;if(this.noise({...r,vol:r.vol*t,dur:r.dur*n},i),r.thump&&this.tone(r.thump*i,.1*n,.25*t,`triangle`),r.ping)for(let e of[2100,2900,3700])this.tone(e*i,.25,.05*t)}sweep(e,t,n,r,i=`sawtooth`){let a=this.ctx,o=a.currentTime,s=a.createOscillator();s.type=i,s.frequency.setValueAtTime(e,o),s.frequency.exponentialRampToValueAtTime(t,o+n);let c=a.createGain();c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),s.connect(c).connect(this.master),s.start(o),s.stop(o+n+.05)}shot(e){if(!this.ctx)return;let t=.92+Math.random()*.16;switch(e){case`pistol`:this.noise({freq:1800,q:.6,dur:.12,vol:.7,type:`lowpass`},t),this.sweep(420*t,90,.1,.35,`square`);break;case`rifle`:this.noise({freq:1400,q:.5,dur:.09,vol:.6,type:`lowpass`},t),this.sweep(300*t,70,.07,.3,`square`);break;case`shotgun`:this.noise({freq:900,q:.4,dur:.35,vol:1,type:`lowpass`},t),this.sweep(200*t,40,.25,.5,`square`),setTimeout(()=>this.hit(`wood`,.6,.6),380),setTimeout(()=>this.hit(`wood`,.6,.6),520);break;case`sniper`:this.noise({freq:2400,q:.4,dur:.5,vol:.9,type:`lowpass`},t),this.sweep(600*t,50,.4,.45,`sawtooth`);break;case`plasma`:this.sweep(1400*t,300,.18,.25,`sawtooth`),this.sweep(900*t,200,.2,.2,`sine`);break;case`laser`:this.sweep(2600*t,400,.22,.22,`square`),this.sweep(1800*t,600,.25,.2,`sine`);break;case`rocket`:this.noise({freq:600,q:.5,dur:.6,vol:.6,type:`lowpass`},t),this.sweep(150,60,.5,.3,`sawtooth`);break;case`boom`:this.noise({freq:400,q:.3,dur:1.4,vol:1.2,type:`lowpass`},t),this.noise({freq:1600,q:.4,dur:.4,vol:.6,type:`lowpass`},t),this.sweep(110,30,1,.7,`sine`);break;case`bow`:this.noise({freq:3e3,q:1.2,dur:.12,vol:.25,type:`bandpass`},t),this.tone(180*t,.12,.15,`triangle`);break;case`saber`:this.sweep(160*t,90,.3,.25,`sawtooth`),this.sweep(320*t,180,.3,.12,`sine`);break;default:this.noise({freq:1200,q:.6,dur:.18,vol:.35,type:`bandpass`},t*1.3)}}groan(e,t){if(!this.ctx)return;let n=.05+t*.25;if(e===`skeleton`){for(let e=0;e<3;e++)setTimeout(()=>this.hit(`wood`,n*1.5,.4),e*90);return}let r=95+Math.random()*40;this.sweep(r*1.4,r,.9,n,`sawtooth`),this.sweep(r*.7,r*.5,1,n*.6,`triangle`)}hurt(){this.ctx&&(this.sweep(520,260,.18,.3,`square`),this.noise({freq:900,q:.6,dur:.12,vol:.4,type:`lowpass`}))}punch(){this.ctx&&(this.noise({freq:500,q:.7,dur:.1,vol:.6,type:`lowpass`}),this.tone(110,.1,.3,`sine`))}dig(e){this.hit(e,1,1)}place(e){this.hit(e,.7,.7)}step(e){this.hit(e,.28,.6)}toggleMusic(){return this.musicOn=!this.musicOn,this.musicOn}musicLoop(){if(this.musicOn&&this.ctx.state===`running`){let e=Math.floor(Math.random()*5);(Math.random()<.35?[e,e+2,e+4]:[e+Math.floor(Math.random()*4)]).forEach((e,t)=>{let n=sm[Math.min(e,sm.length-1)]/(Math.random()<.3?2:1);setTimeout(()=>{this.tone(n,3.5,.5,`sine`,this.musicGain,.04),this.tone(n*2,2,.08,`triangle`,this.musicGain,.04)},t*180)})}setTimeout(()=>this.musicLoop(),2200+Math.random()*4500)}},um=600,dm=class{constructor(e,t){this.mesh=new Mi(new ca(1,1,1),new ci,um),this.mesh.instanceColor=new wi(new Float32Array(um*3),3),this.mesh.count=0,this.mesh.frustumCulled=!1,e.add(this.mesh),this.atlas=t.getContext(`2d`).getImageData(0,0,t.width,t.height),this.parts=[],this.m=new $t,this.c=new H}sample(e){let t=e%8*16,n=Math.floor(e/8)*16,r=this.atlas.data;for(let e=0;e<12;e++){let e=((n+Math.floor(Math.random()*16))*this.atlas.width+t+Math.floor(Math.random()*16))*4;if(r[e+3]>0)return new H().setRGB(r[e]/255,r[e+1]/255,r[e+2]/255,ze)}return null}burst(e,t,n,r){let i=mu[r];if(i?.tiles)for(let r=0;r<16&&this.parts.length<um;r++){let a=this.sample(i.tiles[r%2?3:0]);a&&this.parts.push({p:new B(e+.2+Math.random()*.6,t+.2+Math.random()*.6,n+.2+Math.random()*.6),v:new B((Math.random()-.5)*4,Math.random()*4+1,(Math.random()-.5)*4),life:.5+Math.random()*.6,size:.08+Math.random()*.08,color:a})}}spark(e,t,n=10,r=4,i=.4){let a=new H(t);for(let t=0;t<n&&this.parts.length<um;t++)this.parts.push({p:e.clone(),v:new B(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(r*(.4+Math.random())),life:i*(.5+Math.random()),size:.05+Math.random()*.07,color:a,glow:!0})}update(e,t,n){let r=[];for(let n of this.parts){if(n.life-=e,n.life<=0)continue;n.v.y-=20*e;let i=n.p.x+n.v.x*e,a=n.p.y+n.v.y*e,o=n.p.z+n.v.z*e;mu[t.getBlock(Math.floor(i),Math.floor(a),Math.floor(o))].solid?(n.v.multiplyScalar(.3),n.v.y=0):n.p.set(i,a,o),r.push(n)}this.parts=r,r.forEach((e,t)=>{let r=e.size*Math.min(1,e.life*3);this.m.makeScale(r,r,r).setPosition(e.p),this.mesh.setMatrixAt(t,this.m),this.mesh.setColorAt(t,e.glow?e.color:this.c.copy(e.color).multiplyScalar(n))}),this.mesh.count=r.length,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0}};function fm(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.25,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new ia(e)}var pm=new B(0,1,0),mm=class{constructor(e){this.scene=e,this.items=[],this.rockets=[],this.shakeAmt=0,this.glowTex=fm(),this.beamGeo=new la(1,1,1,6,1,!0),this.beamGeo.translate(0,.5,0)}add(e,t,n){this.scene.add(e),this.items.push({obj:e,life:t,max:t,update:n})}tracer(e,t,n,r=.025,i=.07){let a=t.clone().sub(e),o=a.length();if(o<.01)return;let s=new ci({color:n,transparent:!0,blending:2,depthWrite:!1,fog:!1}),c=new bi(this.beamGeo,s);c.position.copy(e),c.quaternion.setFromUnitVectors(pm,a.normalize()),c.scale.set(r,o,r),this.add(c,i,e=>{s.opacity=e,c.scale.x=c.scale.z=r*(.4+.6*e)})}flash(e,t,n=.6,r=.06){let i=new Vr({map:this.glowTex,color:t,transparent:!0,blending:2,depthWrite:!1,fog:!1}),a=new ti(i);a.position.copy(e),a.scale.setScalar(n),this.add(a,r,e=>{i.opacity=e})}fireball(e,t){this.flash(e,16769184,t*3,.15);let n=new Vr({map:this.glowTex,color:16742938,transparent:!0,blending:2,depthWrite:!1,fog:!1}),r=new ti(n);r.position.copy(e),this.add(r,.55,e=>{n.opacity=e,r.scale.setScalar(t*(1+(1-e)*2.5))});let i=new Vr({map:this.glowTex,color:5592405,transparent:!0,depthWrite:!1}),a=new ti(i);a.position.copy(e),this.add(a,1.6,e=>{i.opacity=e*.7,a.scale.setScalar(t*(1.5+(1-e)*3)),a.position.y+=.015})}shake(e){this.shakeAmt=Math.min(1.2,this.shakeAmt+e)}rocket(e,t,n,r,i,a,o){let s=new On,c=new bi(new ca(.12,.12,.45),new Da({color:4938298})),l=new bi(new ca(.1,.1,.1),new Da({color:12986408}));l.position.z=-.27;let u=new ti(new Vr({map:this.glowTex,color:16752704,blending:2,depthWrite:!1,fog:!1}));u.position.z=.3,u.scale.setScalar(.5),s.add(c,l,u),s.position.copy(e),s.lookAt(e.clone().add(t)),this.scene.add(s),this.rockets.push({g:s,dir:t.clone().normalize(),speed:n,left:r,world:i,onHit:a,hitTest:o,smokeT:0})}update(e,t,n){if(this.items=this.items.filter(t=>(t.life-=e,t.life<=0?(this.scene.remove(t.obj),t.obj.material.dispose(),!1):(t.update?.(t.life/t.max),!0))),this.rockets=this.rockets.filter(t=>{let r=t.speed*e,i=t.world.raycast(t.g.position,t.dir,r),a=t.hitTest?.(t.g.position,t.dir,i?i.t:r)??null;if(i||a!==null||t.left<=0){let e=a??i?.t,n=e==null?t.g.position.clone():t.g.position.clone().addScaledVector(t.dir,e);return this.scene.remove(t.g),t.onHit(n),!1}return t.g.position.addScaledVector(t.dir,r),t.left-=r,t.smokeT-=e,t.smokeT<=0&&(t.smokeT=.02,n.spark(t.g.position.clone().addScaledVector(t.dir,-.3),16757575,2,1,.25)),!0}),this.shakeAmt>.001){let n=this.shakeAmt*.15;t.position.x+=(Math.random()-.5)*n,t.position.y+=(Math.random()-.5)*n,t.position.z+=(Math.random()-.5)*n,this.shakeAmt*=Math.exp(-e*6)}}},hm=[{id:`costumes`,label:`Costumes`},{id:`hair`,label:`Hair`,slot:`hair`},{id:`head`,label:`Headwear`,slot:`head`},{id:`torso`,label:`Tops`,slot:`torso`},{id:`legs`,label:`Bottoms`,slot:`legs`},{id:`feet`,label:`Shoes`,slot:`feet`},{id:`cape`,label:`Capes`,slot:`cape`},{id:`hand`,label:`Weapons`,slot:`hand`}],gm=e=>document.querySelector(e),_m=new Map,vm=(e,t)=>(_m.has(e)||_m.set(e,t()),_m.get(e));function ym(e,t,n,r){let i=document.createElement(`img`);i.src=e,r&&(i.className=r);let a=Math.min(84/t,84/n);return i.style.width=`${Math.round(t*a)}px`,i.style.height=`${Math.round(n*a)}px`,i}var bm=class{constructor(e,t){this.getOutfit=e,this.onChange=t,this.tab=`costumes`;let n=gm(`#wrTabs`);for(let e of hm){let t=document.createElement(`button`);t.textContent=e.label,t.dataset.tab=e.id,t.onclick=()=>{this.tab=e.id,this.render()},n.appendChild(t)}gm(`#wrRandom`).onclick=()=>this.randomize()}pick(e,t){this.onChange({...this.getOutfit(),[e]:t}),this.render()}randomize(){let e={},t=(e,t)=>Math.random()<t?null:e[Math.floor(Math.random()*e.length)].id;for(let n of[`hair`,`head`,`torso`,`legs`,`feet`,`cape`])e[n]=t(sf.filter(e=>e.slot===n),{hair:.1,head:.5,cape:.6}[n]??0);e.hand=t(Ff,.2),this.onChange(e),this.render()}card(e,t,n,r){let i=document.createElement(`div`);i.className=`card`+(n?` on`:``);let a=document.createElement(`div`);return a.className=`pic`,a.appendChild(t),i.append(a,e),i.onclick=r,i}render(){document.querySelectorAll(`#wrTabs button`).forEach(e=>e.classList.toggle(`active`,e.dataset.tab===this.tab));let e=gm(`#wrGrid`);e.replaceChildren();let t=this.getOutfit(),n=hm.find(e=>e.id===this.tab);if(n.id===`costumes`){for(let n of lf){let r=Object.entries(n.outfit).every(([e,n])=>(t[e]??null)===n),i=ym(vm(`costume:`+n.id,()=>wf(n.outfit)),16,32,`doll`);e.appendChild(this.card(n.name,i,r,()=>{this.onChange({...n.outfit}),this.render()}))}return}let r=n.slot,i=document.createElement(`span`);if(i.className=`none`,i.textContent=`∅`,e.appendChild(this.card(`None`,i,!t[r],()=>this.pick(r,null))),r===`hand`)for(let n of Ff){let r=ym(vm(`w:`+n.id,()=>Ef(n)),n.art[0].length,n.art.length);e.appendChild(this.card(n.name,r,t.hand===n.id,()=>this.pick(`hand`,n.id)))}else for(let n of sf.filter(e=>e.slot===r)){let i=r===`cape`?ym(vm(`c:`+n.id,()=>Tf(n.id)),10,16):ym(vm(`i:`+n.id,()=>wf({[r]:n.id,...r===`hair`?{}:{hair:`hair_brown`}})),16,32,`doll`);e.appendChild(this.card(n.name,i,t[r]===n.id,()=>this.pick(r,n.id)))}}},xm=28,Sm=class{constructor(e,t,n,r,{w:i=.3,h:a=1.8,keepOut:o=!1}={}){this.world=e,this.pos=new B(t,n,r),this.vel=new B,this.w=i,this.h=a,this.keepOut=o,this.onGround=!1,this.hitWall=!1}collides(e,t,n){let{w:r,h:i}=this;if(this.keepOut&&nd(e,n,1))return!0;for(let a=Math.floor(t);a<=Math.floor(t+i-1e-9);a++)for(let t=Math.floor(n-r);t<=Math.floor(n+r-1e-9);t++)for(let n=Math.floor(e-r);n<=Math.floor(e+r-1e-9);n++)if(mu[this.world.getBlock(n,a,t)].solid)return!0;return!1}moveAxis(e,t){if(!t)return;let n=this.pos;n.setComponent(e,n.getComponent(e)+t),this.collides(n.x,n.y,n.z)&&(n.setComponent(e,n.getComponent(e)-t),e===1&&t<0&&(this.onGround=!0),e!==1&&(this.hitWall=!0),this.vel.setComponent(e,0))}update(e,t=0,n=0,r=0){e=Math.min(e,.05);let i=this.pos,a=this.world.getBlock(Math.floor(i.x),Math.floor(i.y+.9),Math.floor(i.z))===q.WATER;a&&(r*=.6);let o=1-Math.exp(-(this.onGround||a?14:4)*e);this.vel.x+=(t*r-this.vel.x)*o,this.vel.z+=(n*r-this.vel.z)*o,a?this.vel.y=Math.min(this.vel.y+14*e,2.5):this.vel.y=Math.max(this.vel.y-xm*e,-50);let s=this.pos.x,c=this.pos.z,l=Math.max(1,Math.ceil(Math.max(Math.abs(this.vel.x),Math.abs(this.vel.y),Math.abs(this.vel.z))*e/.4));this.onGround=!1,this.hitWall=!1;for(let t=0;t<l;t++)this.moveAxis(0,this.vel.x*e/l),this.moveAxis(2,this.vel.z*e/l),this.moveAxis(1,this.vel.y*e/l);if(this.hitWall&&(this.onGround||a)&&(t||n)){let e=i.x+t*.5,r=i.z+n*.5;this.collides(e,i.y+.05,r)&&!this.collides(e,i.y+1.05,r)&&!this.collides(i.x,i.y+1.05,i.z)&&(this.vel.y=8.7)}return Math.hypot(this.pos.x-s,this.pos.z-c)/Math.max(e,.001)}settle(){for(;this.collides(this.pos.x,this.pos.y,this.pos.z)&&this.pos.y<127;)this.pos.y+=1}},Cm=`plasma_pistol`,wm=e=>Math.abs(Math.floor(e.x))<=11&&Math.abs(Math.floor(e.z))<=7,Tm=e=>nd(Math.floor(e.x),Math.floor(e.z)),Em={reading:{icon:`📖`,text:`Reading`,color:`#7fb3ff`,station:`books`},writing:{icon:`⌨️`,text:`Writing`,color:`#9be37f`,station:`desk`},working:{icon:`🛠️`,text:`Working`,color:`#9be37f`,station:`desk`},running:{icon:`⚙️`,text:`Running`,color:`#ffc861`,station:`servers`},browsing:{icon:`🌐`,text:`On the web`,color:`#61e0ff`,station:`board`},thinking:{icon:`💭`,text:`Thinking`,color:`#d9c2ff`,station:`board`},delegating:{icon:`👥`,text:`Delegating`,color:`#d9c2ff`,station:`board`},talking:{icon:`💬`,text:`Replying`,color:`#ffffff`,station:`desk`},waiting:{icon:`❗`,text:`Needs approval`,color:`#ff5a5a`,station:`desk`},done:{icon:`✅`,text:`Done!`,color:`#6fe08a`,station:`desk`},error:{icon:`⚠️`,text:`Hit an error`,color:`#ff8a5a`,station:`desk`},mission:{icon:`🚀`,text:`On a mission`,color:`#ffb347`,station:`outside`},idle:{icon:`☕`,text:`Idle`,color:`#c8c8c8`,station:`desk`},offline:{icon:`💤`,text:`Offline`,color:`#888888`,station:`desk`}},Dm=[{hair:null,head:`robot_head`,torso:`robot_body`,legs:`robot_legs`,feet:`robot_boots`,cape:null,hand:null},{hair:`hair_white_buzz`,head:`sunglasses`,torso:`lab_coat`,legs:`jeans_black`,feet:`sneakers_white`,cape:null,hand:null},{hair:`hair_black`,head:`headphones`,torso:`hoodie_purple`,legs:`jeans_black`,feet:`neon_runners`,cape:null,hand:null},{hair:null,head:`astronaut_helmet`,torso:`astronaut_suit`,legs:`astronaut_legs`,feet:`astronaut_boots`,cape:null,hand:null},{hair:`hair_blonde_spiky`,head:null,torso:`suit`,legs:`jeans_black`,feet:`boots_black`,cape:`cape_omni`,hand:null}];function Om(e){let t=2166136261;for(let n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return t>>>0}function km(e=256,t=64){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=new ia(n);r.colorSpace=ze;let i=new ti(new Vr({map:r,transparent:!0,depthWrite:!1,fog:!1}));return i.renderOrder=10,{sprite:i,canvas:n,tex:r,g:n.getContext(`2d`)}}function Am(e,t,n,r,i,a){e.beginPath(),e.roundRect(t,n,r,i,a),e.fill()}var jm=class{constructor(e,t,n,r){this.name=t,this.index=n,this.groundY=r,this.char=new Bf,this.char.weaponDrawn=!1,this.char.setOutfit(Dm[Om(t)%Dm.length]),e.add(this.char.root),this.label=km(256,48),this.label.sprite.scale.set(1.6,.3,1),this.bubble=km(320,72),this.bubble.sprite.scale.set(1.9,.43,1),this.char.root.add(this.label.sprite,this.bubble.sprite),this.label.sprite.position.y=2.15,this.bubble.sprite.position.y=2.6;let i=sd.desk(n);this.pos=new B(i.x,r+1,i.z),this.yaw=i.yaw,this.path=[],this.facing=i.yaw,this.state=null,this.status=`offline`,this.t=Math.random()*10,this.speed=0,this.wanderT=3+Math.random()*6,this.drawLabel(),this.apply({status:`offline`,detail:``,tool:null,online:!1})}drawLabel(){let{g:e,canvas:t,tex:n}=this.label;e.clearRect(0,0,t.width,t.height),e.font=`bold 26px ui-monospace, monospace`;let r=Math.min(t.width-4,e.measureText(this.name).width+28);e.fillStyle=`rgba(0,0,0,0.55)`,Am(e,(t.width-r)/2,4,r,40,8),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(this.name,t.width/2,25),n.needsUpdate=!0}drawBubble(e,t){let{g:n,canvas:r,tex:i}=this.bubble;n.clearRect(0,0,r.width,r.height);let a=`${e.icon} ${e.text}`;n.font=`bold 26px ui-monospace, "Noto Color Emoji", monospace`,n.textAlign=`center`,n.textBaseline=`middle`;let o=Math.min(r.width-4,Math.max(n.measureText(a).width,t?n.measureText(t).width*.75:0)+30);n.fillStyle=`rgba(255,255,255,0.92)`,Am(n,(r.width-o)/2,2,o,t?64:44,12),n.fillStyle=e.color===`#ffffff`?`#222`:`#111`,n.fillText(a,r.width/2,t?22:24),n.fillStyle=e.color,n.fillRect((r.width-o)/2+8,6,6,t?56:36),t&&(n.font=`18px ui-monospace, monospace`,n.fillStyle=`#444`,n.fillText(t.length>24?t.slice(0,23)+`…`:t,r.width/2,50)),i.needsUpdate=!0}apply(e){let t=Em[e.status]?e.status:`working`,n=t!==this.status;this.status=t;let r=Em[t];return this.drawBubble(r,e.tool??(t===`mission`?e.detail:``)),n&&!this.following&&this.goTo(r.station),n}setFollow(e){if(!!e!=!!this.following){if(this.following=!!e,this.buildQueue=[],this.path=[],e)this.body=new Sm(this.world,this.pos.x,this.pos.y,this.pos.z),this.char.setWeapon(Cm),this.char.weaponDrawn=!0,this.stuckT=0,this.fireT=0;else{this.body=null,this.char.setWeapon(null),this.char.weaponDrawn=!1;let e=sd.desk(this.index);this.pos.set(e.x,this.groundY+1,e.z),this.goTo(Em[this.status].station)}}}build(e){if(this.buildQueue=e,this.buildAcc=0,!e.length)return;let t=1/0,n=-1/0,r=1/0,i=-1/0;for(let[a,,o]of e)t=Math.min(t,a),n=Math.max(n,a+1),r=Math.min(r,o),i=Math.max(i,o+1);let a=this.pos,[o,s]=[[t-1.5,Math.max(r,Math.min(i,a.z))],[n+1.5,Math.max(r,Math.min(i,a.z))],[Math.max(t,Math.min(n,a.x)),r-1.5],[Math.max(t,Math.min(n,a.x)),i+1.5]].sort((e,t)=>Math.hypot(e[0]-a.x,e[1]-a.z)-Math.hypot(t[0]-a.x,t[1]-a.z))[0];this.buildStand=new B(o,a.y,s)}teleportNear(e,t){this.body.pos.set(e.x-Math.sin(t)*.6+Math.cos(t)*2.2,e.y+.5,e.z-Math.cos(t)*.6-Math.sin(t)*2.2),this.body.vel.set(0,0,0),this.body.settle(),this.stuckT=0}followUpdate(e,t){let n=this.body,r=n.pos,i=t.player.pos,a=t.player.yaw,o=this.buildQueue.length>0,s;s=o?this.buildStand.clone():new B(i.x-Math.sin(a)*.6+Math.cos(a)*2.2,i.y,i.z-Math.cos(a)*.6-Math.sin(a)*2.2),wm(r)===wm(s)?Tm(r)!==Tm(s)&&(s=new B(.5,r.y,Tm(r)?20.5:16.5)):s=new B(.5,r.y,wm(r)?9:5.5);let c=s.x-r.x,l=s.z-r.z,u=Math.hypot(c,l),d=o?1.5:1,f=0,p=0;u>d&&(f=c/u,p=l/u);let m=r.distanceTo(i),h=n.update(e,f,p,m>8||o?5.6:4.3);this.stuckT=f&&h<.5?this.stuckT+e:0,(this.stuckT>2.5&&!o||m>40||r.y<-10)&&(this.teleportNear(i,a),t.particles.spark(r.clone().setY(r.y+1),10216319,20,3,.6)),this.fireT-=e;let g=r.clone().setY(r.y+1.5),_=t.mobs.nearest(i,18),v=f||p?Math.atan2(-f,-p):a,y=0;if(_){let e=_.pos.clone().setY(_.pos.y+1.1),n=e.clone().sub(g);t.world.raycast(g,n.clone().normalize(),n.length())||(v=Math.atan2(-n.x,-n.z),y=Math.atan2(n.y,Math.hypot(n.x,n.z)),this.fireT<=0&&(this.fireT=.45,t.companionShoot(this,g,e,_)))}if(o&&(u<=d+1||this.stuckT>1.5)){this.buildAcc+=e*40;let i=[];for(;this.buildAcc>=1&&this.buildQueue.length;)--this.buildAcc,i.push(this.buildQueue.shift());i.length&&(t.placeBlocks(this,i),this.char.swing(),n.collides(r.x,r.y,r.z)&&n.settle(),this.buildQueue.length||t.buildDone(this));let[a,,o]=i.at(-1)??this.buildQueue[0]??[r.x,0,r.z];v=Math.atan2(-(a+.5-r.x),-(o+.5-r.z))}this.turnTo(v,e),this.pos.copy(r),this.char.pose=h>.5||_||o?null:Nm[this.status]??null,this.char.update(e,r,this.yaw,y,h,!1),this.bubble.sprite.position.y=2.6+Math.sin(this.t*2)*.04}get inside(){return this.pos.z<sd.door().z+.3}goTo(e){let t=sd[e](this.index),n=e===`outside`?{x:-6+this.index%5*3,z:11+this.index%2*3,yaw:Math.PI}:t,r=sd.door(),i=sd.outside(),a=[],o=e!==`outside`;this.inside&&!o&&a.push(r,i),!this.inside&&o&&a.push(i,r),a.push(n),this.path=a.map(e=>new B(e.x,this.groundY+1,e.z)),this.facing=n.yaw}update(e,t){if(this.t+=e,this.following&&t)return this.followUpdate(e,t);let n=0;if(this.path.length){let t=this.path[0],r=t.x-this.pos.x,i=t.z-this.pos.z,a=Math.hypot(r,i);if(a<.1)this.path.shift();else{let t=Math.min(a,2.6*e);this.pos.x+=r/a*t,this.pos.z+=i/a*t,n=2.6,this.turnTo(Math.atan2(-r,-i),e)}}else this.turnTo(this.facing,e),this.status===`mission`&&(this.wanderT-=e,this.wanderT<=0&&(this.wanderT=3+Math.random()*4,this.path=[new B(-14+Math.random()*28,this.groundY+1,10+Math.random()*6)]));let r=this.status===`done`||this.status===`waiting`?Math.max(0,Math.sin(this.t*7))*.25:0,i=this.pos.clone();i.y+=r,this.char.pose=n?null:Nm[this.status]??null,this.char.update(e,i,this.yaw,0,n,!1),this.bubble.sprite.position.y=2.6+Math.sin(this.t*2)*.04}turnTo(e,t){let n=e-this.yaw;n=Math.atan2(Math.sin(n),Math.cos(n)),this.yaw+=n*Math.min(1,t*8)}dispose(e){e.remove(this.char.root)}},Mm=()=>performance.now()/1e3,Nm={writing:e=>{let t=Mm()*18;e.armL.rotation.set(1.15+Math.sin(t)*.08,0,.15),e.armR.rotation.set(1.15+Math.sin(t+1.7)*.08,0,-.15),e.head.rotation.x=-.25},working:e=>Nm.writing(e),talking:e=>{e.armR.rotation.set(.6+Math.sin(Mm()*5)*.4,0,-.2),e.head.rotation.x=Math.sin(Mm()*3)*.1},reading:e=>{e.armL.rotation.set(1,0,.35),e.armR.rotation.set(1,0,-.35),e.head.rotation.x=-.45+Math.sin(Mm()*.7)*.05},running:e=>{e.armR.rotation.set(1.5+Math.sin(Mm()*3)*.35,0,0),e.armL.rotation.set(.3,0,0),e.head.rotation.x=.1},browsing:e=>{e.armR.rotation.set(1.7+Math.sin(Mm()*2)*.2,0,-.1),e.head.rotation.x=.2},thinking:e=>{e.armR.rotation.set(2.3,0,.55),e.armL.rotation.set(.5,0,-.5),e.head.rotation.x=.15+Math.sin(Mm()*1.3)*.08,e.head.rotation.y=Math.sin(Mm()*.9)*.3},delegating:e=>{e.armR.rotation.set(1.6,0,-.6+Math.sin(Mm()*2)*.5)},waiting:e=>{e.armR.rotation.set(0,0,2.7+Math.sin(Mm()*9)*.35),e.head.rotation.x=.1},done:e=>{e.armL.rotation.set(0,0,-2.8),e.armR.rotation.set(0,0,2.8)},error:e=>{e.head.rotation.x=-.5,e.armR.rotation.set(2.6,0,.3)},offline:e=>{e.head.rotation.x=-.7},idle:e=>{e.head.rotation.y=Math.sin(Mm()*.5)*.5}},Pm=`http://127.0.0.1:47124`,Fm=`omnicraft:companion:v1`;function Im(e,t=`#ffd84a`,n=512,r=96){let i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);a.font=`bold 64px ui-monospace, monospace`,a.textAlign=`center`,a.textBaseline=`middle`,a.lineWidth=10,a.strokeStyle=`rgba(0,0,0,0.75)`,a.strokeText(e,n/2,r/2),a.fillStyle=t,a.fillText(e,n/2,r/2);let o=new ia(i);o.colorSpace=ze;let s=new ti(new Vr({map:o,transparent:!0,depthWrite:!1}));return s.scale.set(n/96,r/96,1),s}var Lm=class{constructor(e,t,n){this.scene=e,this.world=t,this.onEvent=n,this.npcs=new Map,this.state={agents:[],pinSet:!1},this.online=!1,this.listeners=new Set;let r=t.fortY,i=Im(`AGENT HQ`);i.position.set(.5,r+7.2,18.5);let a=Im(`WORK ZONE · NO BUILDING`,`#9be37f`,640,72);a.scale.multiplyScalar(.55),a.position.set(.5,r+4.6,8.2),this.offlineSign=Im(`agents offline`,`#ff8a5a`,512,72),this.offlineSign.scale.multiplyScalar(.5),this.offlineSign.position.set(.5,r+6.2,18.5),e.add(i,a,this.offlineSign),this.connect()}connect(){/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(this.es?.close(),this.es=new EventSource(Pm+`/stream`),this.es.onopen=()=>{this.online=!0,this.offlineSign.visible=!1},this.es.onerror=()=>{this.online=!1,this.offlineSign.visible=!0},this.es.onmessage=e=>{try{this.sync(JSON.parse(e.data))}catch(e){console.warn(`agent state`,e)}})}sync(e){this.state=e;let t=new Set;e.agents.forEach((e,n)=>{t.add(e.name);let r=this.npcs.get(e.name);r||(r=new jm(this.scene,e.name,this.npcs.size,this.world.fortY),r.world=this.world,r.actionId=e.action?.id??null,this.npcs.set(e.name,r),localStorage.getItem(Fm)===e.name&&r.setFollow(!0));let i=r.status;r.apply(e)&&i!==`offline`&&this.onEvent?.(e.status,e,r),e.action&&e.action.id!==r.actionId&&(r.actionId=e.action.id,this.onAction?.(e.action,r))});for(let[e,n]of this.npcs)t.has(e)||(n.setFollow(!1),n.dispose(this.scene),this.npcs.delete(e));this.offlineSign.visible=!this.online||e.agents.length===0;for(let t of this.listeners)t(e)}agent(e){return this.state.agents.find(t=>t.name===e)}update(e,t){for(let n of this.npcs.values())n.update(e,t)}setFollow(e,t){for(let n of this.npcs.values())n.setFollow(t&&n.name===e);t?localStorage.setItem(Fm,e):localStorage.removeItem(Fm)}get companion(){for(let e of this.npcs.values())if(e.following)return e;return null}lookAt(e,t,n=5){let r=null,i=1/0,a=new B;for(let o of this.npcs.values()){a.copy(o.pos).add(new B(0,1.1,0)).sub(e);let s=a.length();if(s>n)continue;let c=a.dot(t);if(c<=0)continue;let l=Math.sqrt(Math.max(0,s*s-c*c));l<.8&&l+s*.05<i&&(i=l+s*.05,r=o)}return r}async call(e,t,n){let r=await fetch(Pm+e,{method:`POST`,headers:{"Content-Type":`application/json`,...n?{"X-Omni-Pin":n}:{}},body:JSON.stringify(t??{})}),i=await r.json().catch(()=>({}));if(!r.ok)throw Error(i.error??`bridge error ${r.status}`);return i}},Rm=e=>document.querySelector(e),zm=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Bm={you:`You`,agent:`Agent`,tool:`Tool`,error:`Error`,approval:`Approval`,info:`Info`},Vm=class{constructor(e,t){this.hq=e,this.onClose=t,this.name=null,this.pin=null,e.listeners.add(()=>this.name&&this.render()),Rm(`#agClose`).onclick=()=>this.close()}get isOpen(){return!!this.name}open(e){this.name=e,this.error=``,Rm(`#agentPanel`).classList.remove(`hidden`),this.render(!0)}close(){this.name&&(this.name=null,Rm(`#agentPanel`).classList.add(`hidden`),this.onClose?.())}async run(e){try{this.error=``,await e()}catch(e){this.error=e.message}this.render(!0)}render(e=!1){let t=this.hq.agent(this.name);if(!t)return this.close();let n=Em[t.status]??Em.working;Rm(`#agName`).textContent=t.name,Rm(`#agStatus`).innerHTML=`<span class="pill" style="background:${n.color}">${n.icon} ${n.text}</span> ${zm(t.tool??``)} ${t.external?`<i>(working elsewhere)</i>`:``}`;let r=Rm(`#agLog`),i=r.scrollTop+r.clientHeight>=r.scrollHeight-10;r.innerHTML=t.log.length?t.log.map(e=>`<div class="ln ${e.kind}"><b>${Bm[e.kind]??e.kind}</b> ${zm(e.text)}</div>`).join(``):`<div class="ln info">Nothing yet. Give this agent a task below.</div>`,(i||e)&&(r.scrollTop=r.scrollHeight);let a=this.hq.state,o=!!this.pin,s=Rm(`#agControls`),c=Rm(`#agTask`)?.value??``,l=[`thinking`,`reading`,`writing`,`running`,`browsing`,`delegating`,`talking`,`waiting`,`working`].includes(t.status)&&!t.external,u=!!this.hq.npcs.get(t.name)?.following,d=JSON.stringify([this.hq.online,a.pinSet,o,t.pending?.summary??null,l,t.name,u]);if(Rm(`#agError`).textContent=this.error??``,d===this.ctlKey&&!e)return;this.ctlKey=d;let f=Rm(`#agFollow`);if(f.innerHTML=u?`<button id="agFollowBtn">🏢 Back to work</button> <span class="hint">${zm(t.name)} is out with you: fighting and ready to build.</span>`:`<button id="agFollowBtn" class="go">🤝 Come with me</button> <span class="hint">Brings ${zm(t.name)} along to fight and build. Work keeps running.</span>`,Rm(`#agFollowBtn`).onclick=()=>{this.hq.setFollow(t.name,!u),this.render(!0)},!this.hq.online)s.innerHTML=`<p class="hint">The agent bridge is not running. Relaunch OmniCraft from the app launcher.</p>`;else if(!a.pinSet)s.innerHTML=`<p class="hint">Set a parent PIN so only grown-ups can give agents tasks. Kids can still visit and watch.</p>
        <div class="row"><input id="agPin" type="password" inputmode="numeric" maxlength="8" placeholder="New PIN (4-8 digits)"><button id="agSetPin">Set PIN</button></div>`,Rm(`#agSetPin`).onclick=()=>this.run(async()=>{let e=Rm(`#agPin`).value.trim();await this.hq.call(`/pin`,{pin:e}),this.pin=e});else if(o){s.innerHTML=`${t.pending?`<div class="approval"><b>Approval needed</b><pre>${zm(t.pending.summary)}</pre>
            <div class="row"><button id="agApprove" class="go">Approve once</button><button id="agDeny" class="stop">Deny</button></div></div>`:``}
        <textarea id="agTask" rows="3" placeholder="${u?`Ask ${zm(t.name)} to build something right here (a watchtower, a bridge…) or give a task`:`Give ${zm(t.name)} a task…`}"></textarea>
        <div class="row"><button id="agSend" class="go">Send task</button>${l?`<button id="agStop" class="stop">Stop</button>`:``}<button id="agLock">Lock</button></div>`,Rm(`#agTask`).value=c;let n=()=>this.run(async()=>{let e=Rm(`#agTask`).value.trim();e&&(u&&this.hq.onWorldTask?.(t.name),await this.hq.call(`/agents/${encodeURIComponent(t.name)}/task`,{text:e,world:u},this.pin),Rm(`#agTask`).value=``)});Rm(`#agSend`).onclick=n,Rm(`#agTask`).onkeydown=e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),n())},Rm(`#agLock`).onclick=()=>{this.pin=null,this.render()},Rm(`#agStop`)&&(Rm(`#agStop`).onclick=()=>this.run(()=>this.hq.call(`/agents/${encodeURIComponent(t.name)}/stop`,{},this.pin))),Rm(`#agApprove`)&&(Rm(`#agApprove`).onclick=()=>this.run(()=>this.hq.call(`/agents/${encodeURIComponent(t.name)}/approve`,{choice:`once`},this.pin))),Rm(`#agDeny`)&&(Rm(`#agDeny`).onclick=()=>this.run(()=>this.hq.call(`/agents/${encodeURIComponent(t.name)}/approve`,{choice:`deny`},this.pin))),e&&Rm(`#agTask`).focus()}else{s.innerHTML=`<p class="hint">Watching only. Enter the parent PIN to give tasks and approve actions.</p>
        <div class="row"><input id="agPin" type="password" inputmode="numeric" maxlength="8" placeholder="Parent PIN"><button id="agUnlock">Unlock</button></div>`;let e=()=>this.run(async()=>{let e=Rm(`#agPin`).value.trim();await this.hq.call(`/pin/check`,{pin:e}),this.pin=e});Rm(`#agUnlock`).onclick=e,Rm(`#agPin`).onkeydown=t=>t.key===`Enter`&&e()}}},Hm={air:q.AIR,stone:q.STONE,cobble:q.COBBLE,cobblestone:q.COBBLE,stone_bricks:q.STONE_BRICKS,bricks:q.BRICKS,planks:q.PLANKS,wood:q.PLANKS,log:q.LOG,leaves:q.LEAVES,glass:q.GLASS,sand:q.SAND,dirt:q.DIRT,grass:q.GRASS,gravel:q.GRAVEL,snow:q.SNOW,lamp:q.LAMP,torch:q.TORCH,bookshelf:q.BOOKSHELF,flower_red:q.FLOWER_RED,flower_yellow:q.FLOWER_YELLOW},Um=2e4;function Wm(e,t){let n=Math.round(-Math.sin(t)),r=Math.round(-Math.cos(t)),[i,a]=n||r?[[n,r],[-r,n]]:[[0,-1],[1,0]];return{x:Math.floor(e.x)+i[0]*3,y:Math.floor(e.y),z:Math.floor(e.z)+i[1]*3,f:i,r:a}}function Gm(e,t){let n=new Map,r=(e,r,i,a)=>{let o=Hm[a];if(o===void 0||n.size>=Um)return;let s=t.x+e*t.r[0]+i*t.f[0],c=t.z+e*t.r[1]+i*t.f[1];n.set(`${s},${t.y+r},${c}`,[s,t.y+r,c,o])},i=(e,t)=>{let[n,i,a,o,s,c]=e.slice(1,7).map(e=>Math.round(+e||0)),l=t===`clear`?`air`:String(e[7]??`stone`),[u,d,f,p,m,h]=[Math.min(n,o),Math.max(n,o),Math.min(i,s),Math.max(i,s),Math.min(a,c),Math.max(a,c)];for(let e=f;e<=p;e++)for(let n=m;n<=h;n++)for(let i=u;i<=d;i++){let a=i===u||i===d||n===m||n===h;(t!==`walls`||a)&&(t!==`hollow`||a||e===f||e===p)&&r(i,e,n,l)}};for(let t of e??[]){if(!Array.isArray(t))continue;let e=String(t[0]);e===`block`?r(Math.round(+t[1]||0),Math.round(+t[2]||0),Math.round(+t[3]||0),String(t[4]??`stone`)):[`fill`,`walls`,`hollow`,`clear`].includes(e)&&i(t,e)}return[...n.values()].sort((e,t)=>(t[3]===q.AIR)-(e[3]===q.AIR)||e[1]-t[1])}var Km=e=>new Da({color:e}),qm=e=>new ci({color:e,fog:!1});function Y(e,t,n,r,i=0,a=0,o=0){let s=new bi(new ca(e,t,n),r);return s.position.set(i,a,o),s}function Jm(e,t,n,...r){let i=new On;return i.position.set(e,t,n),i.add(...r),i}function Ym(e,t){let n=new Bf;n.weaponDrawn=!1,n.setOutfit(e);let r=[];n.root.traverse(e=>e.material&&r.push(...[].concat(e.material)));let i=0;return n.pose=e=>{let n=performance.now()/300;t?(e.armL.rotation.x=1.45+Math.sin(n)*.08,e.armR.rotation.x=1.45-Math.sin(n)*.08-i*.8):(e.armR.rotation.set(1.5,0,0),e.armL.rotation.set(1.5,0,.6+i*.4))},{root:n.root,mats:r,update(e,t,r,a){i=t.attack,n.update(e,r,a,0,t.speed,!1),n.root.rotation.z=t.dying?Math.min(1.5,t.t*3):0}}}function Xm(e=1,t=4014665,n=14721830){let r=new On;r.scale.setScalar(e);let i=Km(t),a=Km(n),o=Km(1842979),s=new On;s.add(Y(.8,.32,.8,i),Y(.84,.08,.84,a,0,.12,0),Y(.5,.2,.5,o,0,-.22,0));let c=Y(.22,.12,.06,qm(16722474),0,0,-.42);s.add(c);let l=[];for(let[e,t]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]]){s.add(Y(.5,.06,.08,o,e/2,.05,t/2).rotateY(Math.atan2(e,t)));let n=Y(.55,.02,.07,Km(10134443),e,.12,t);l.push(n),s.add(n,Y(.1,.1,.1,o,e,.06,t))}return r.add(s),{root:r,mats:[i,a,o],update(e,t,n,i){r.position.copy(n),r.rotation.y=i;for(let t of l)t.rotation.y+=e*40;s.position.y=.15*Math.sin(t.t*3),s.rotation.x=Math.min(.35,t.speed*.06)-t.attack*.2,s.rotation.z=t.dying?t.t*6:0,c.scale.setScalar(1+t.attack*.6)}}}function Zm(e=1,t=5264990,n=14191132){let r=new On;r.scale.setScalar(e);let i=Km(t),a=Km(n),o=Km(2106152),s=Jm(-.32,1.25,0,Y(.26,1.2,.3,i,0,-.6,0),Y(.34,.12,.5,o,0,-1.2,-.08)),c=Jm(.32,1.25,0,Y(.26,1.2,.3,i,0,-.6,0),Y(.34,.12,.5,o,0,-1.2,-.08)),l=Jm(0,1.25,0,Y(.95,.75,.65,i,0,.42,0),Y(.99,.1,.69,a,0,.5,0),Y(.6,.3,.1,o,0,.3,-.33)),u=Jm(0,2.05,-.05,Y(.45,.3,.45,o,0,.15,0),Y(.36,.07,.04,qm(16724e3),0,.17,-.24)),d=Jm(.62,1.95,0,Y(.22,.22,.85,o,0,0,-.3),Y(.12,.12,.12,qm(16734762),0,0,-.75)),f=Jm(-.6,1.9,0,Y(.18,.7,.2,i,0,-.35,0),Y(.24,.16,.24,a,0,-.72,0));r.add(s,c,l,u,d,f);let p=0;return{root:r,mats:[i,a,o],update(e,t,n,i){r.position.copy(n),r.rotation.y=i,p+=e*(1+t.speed*1.6);let a=Math.sin(p)*Math.min(1,t.speed/1.5)*.5;s.rotation.x=a,c.rotation.x=-a,f.rotation.x=-a*.6,l.position.y=1.25+Math.abs(Math.cos(p))*.05,d.position.z=t.attack*.12,u.rotation.y=Math.sin(t.t*.7)*.3,r.rotation.z=t.dying?Math.min(1.4,t.t*2):0}}}function Qm(){let e=new On,t=Km(3027512),n=Km(1447963);e.add(Y(.6,.25,.7,t,0,.35,0),Y(.4,.15,.4,n,0,.53,0));let r=Y(.12,.08,.12,qm(16719904),0,.64,0);e.add(r);let i=[];for(let[t,r]of[[-.35,-.25],[.35,-.25],[-.35,.25],[.35,.25]]){let a=Jm(t,.35,r,Y(.08,.38,.08,n,0,-.17,0));a.rotation.z=t<0?.6:-.6,i.push(a),e.add(a)}return{root:e,mats:[t,n],update(t,n,a,o){e.position.copy(a),e.rotation.y=o,i.forEach((e,t)=>e.rotation.x=Math.sin(n.t*18+t*1.7)*.6*Math.min(1,n.speed/3)),r.visible=Math.sin(n.t*(n.attack?30:6))>0}}}function $m(){let e=new On,t=Km(5982788),n=Km(2760991),r=qm(9049108),i=Km(15260872),a=Jm(-.18,1.2,0,Y(.16,1.2,.16,t,0,-.6,0)),o=Jm(.18,1.2,0,Y(.16,1.2,.16,t,0,-.6,0)),s=Y(.5,.8,.28,t,0,1.6,0),c=Jm(-.36,1.95,0,Y(.12,1.25,.12,t,0,-.6,0),Y(.2,.08,.2,n,0,-1.25,0)),l=Jm(.36,1.95,0,Y(.12,1.25,.12,t,0,-.6,0),Y(.2,.08,.2,n,0,-1.25,0)),u=Jm(0,2.05,0,Y(.3,.3,.3,r,0,.15,0)),d=[];for(let e=0;e<5;e++){let n=e/5*Math.PI*2,r=Jm(Math.sin(n)*.12,.05,Math.cos(n)*.12,Y(.2,.42,.05,t,0,.21,0),Y(.16,.06,.04,i,0,.38,-.04));r.rotation.y=n,d.push(r),u.add(r)}e.add(a,o,s,c,l,u);let f=0,p=0;return{root:e,mats:[t,n],update(t,n,r,i){e.position.copy(r),e.rotation.y=i,f+=t*(1.5+n.speed*1.8);let s=Math.sin(f)*Math.min(1,n.speed/2)*.7;a.rotation.x=s,o.rotation.x=-s,c.rotation.x=-s*.5+n.attack*1.2,l.rotation.x=s*.5+n.attack*1.2,p+=((n.attack>.05||n.speed>4?1:.05)-p)*Math.min(1,t*6);for(let e of d)e.rotation.x=-p*1.25;u.rotation.x=-.2*p,e.rotation.z=n.dying?Math.min(1.5,n.t*3):0}}}function eh(){let e=new On,t=Km(4869975),n=Km(14196768),r=Km(1776929),i=Jm(0,1,0,Y(1.1,.5,1.3,t),Y(1.14,.1,1.34,n,0,.2,0),Y(.5,.3,.4,r,0,-.05,-.75)),a=Y(.34,.1,.05,qm(16722474),0,0,-.96);i.add(a),e.add(i);let o=[];for(let[n,i]of[[-.6,-.5],[.6,-.5],[-.6,.5],[.6,.5]]){let a=Jm(n,1,i,Y(.14,.75,.14,t,0,.3,0));a.rotation.z=n<0?.9:-.9;let s=Jm(0,.65,0,Y(.1,1.3,.1,r,0,-.62,0));s.rotation.z=n<0?-1.7:1.7,a.add(s),o.push(a),e.add(a)}return{root:e,mats:[t,n,r],update(t,n,r,s){e.position.copy(r),e.rotation.y=s,o.forEach((e,t)=>e.rotation.x=Math.sin(n.t*10+t*1.6)*.4*Math.min(1,n.speed/3)),i.rotation.x=-n.attack*.4,a.scale.setScalar(1+n.attack),e.rotation.z=n.dying?Math.min(1.2,n.t*2):0}}}function th(){let e=new On,t=Km(3817286),n=Km(14708768),r=Km(1447963),i=new On;i.add(Y(1.2,.5,1.4,t),Y(1.24,.12,.5,n,0,.25,0),Y(.4,.2,.08,qm(16722474),0,0,-.72));for(let e of[-.9,.9])i.add(Y(.4,.4,1,r,e,-.1,0),Y(.3,.3,.06,n,e,-.1,-.52));let a=[];for(let[e,t]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){let n=Y(.9,.03,.1,Km(10134443),e,.35,t);a.push(n),i.add(n)}return e.add(i),{root:e,mats:[t,n,r],update(t,n,r,o){e.position.copy(r),e.rotation.y=o;for(let e of a)e.rotation.y+=t*30;i.position.y=.2*Math.sin(n.t*2),i.rotation.x=Math.min(.3,n.speed*.05)-n.attack*.25,i.rotation.z=n.dying?n.t*5:0}}}function nh(){let e=new On,t=Km(14210248),n=Km(1842979),r=qm(4243711),i=new On;i.add(new bi(new ga(.4,10,8),t),Y(.84,.08,.84,n));let a=Y(.22,.22,.06,r,0,.05,-.39);return i.add(a,Y(.04,.5,.04,n,.1,.55,0),Y(.08,.08,.08,qm(16724e3),.1,.82,0)),e.add(i),{root:e,mats:[t,n],update(t,n,a,o){e.position.copy(a),e.rotation.y=o,i.position.y=.2*Math.sin(n.t*2.5),i.rotation.y=Math.sin(n.t)*.4,r.color.setHex(n.attack>.1&&Math.sin(n.t*30)>0?16724e3:4243711),i.rotation.z=n.dying?n.t*6:0}}}function rh(){let e=new On,t=Km(3159098),n=Km(14708768),r=new On;r.add(new bi(new ga(.34,10,8),t),Y(.72,.1,.1,n),Y(.1,.1,.72,n)),r.position.y=.34;let i=Y(.12,.12,.12,qm(16719904),0,.72,0);return e.add(r,i),{root:e,mats:[t,n],update(t,n,a,o){e.position.copy(a),e.rotation.y=o,r.rotation.x-=t*n.speed*3,i.visible=Math.sin(n.t*(n.speed>3?25:5))>0}}}function ih(){let e=new On,t=Km(5922645),n=Km(14196768),r=Km(1776929),i=Jm(0,1.2,0,Y(1.5,.7,1.7,t),Y(1.54,.12,1.74,n,0,.3,0),Y(.4,.14,.05,qm(16722474),0,.05,-.88)),a=Jm(0,.5,.2,Y(.42,1.2,.42,r,0,.5,0),Y(.5,.12,.5,n,0,1.05,0));a.rotation.x=.5,i.add(a),e.add(i);let o=[];for(let[t,n]of[[-.75,-.7],[.75,-.7],[-.75,.7],[.75,.7]]){let i=Jm(t,1,n,Y(.24,1.1,.24,r,0,-.5,0));o.push(i),e.add(i)}return{root:e,mats:[t,n,r],update(t,n,r,i){e.position.copy(r),e.rotation.y=i,o.forEach((e,t)=>e.rotation.x=Math.sin(n.t*5+t*1.6)*.3*Math.min(1,n.speed)),a.rotation.x=.5-n.attack*.4,e.rotation.z=n.dying?Math.min(1.2,n.t*2):0}}}var ah={leaper:eh,rocketeer:th,snitch:nh,pop:rh,bombardier:ih,wasp:()=>Xm(.55,3027512,14204960),hornet:()=>Xm(1.25,2369581,14703136),bastion:()=>Zm(1.5,4080458,14725168),zombie:()=>Ym({hair:`hair_brown`,head:`zombie_face`,torso:`zombie_shirt`,legs:`jeans_ripped`,feet:null,cape:null,hand:null,skin:`#5f8f4e`,eyes:`#c62828`},!0),skeleton:()=>Ym({hair:null,head:`skull_mask`,torso:`skeleton_suit`,legs:`skeleton_legs`,feet:null,cape:null,hand:null,skin:`#e8e4d8`,eyes:`#111111`},!1),drone:Xm,sentinel:Zm,tick:Qm,stalker:$m},oh={zombie:{faction:`infected`,hp:20,speed:2.1,rush:3.4,melee:{damage:2,reach:1.5,rate:.8},sight:24,burns:!0},skeleton:{faction:`infected`,hp:14,speed:2.4,ranged:{kind:`arrow`,damage:2,range:18,rate:.4,keep:[7,13]},sight:24,burns:!0},drone:{faction:`machines`,hp:12,speed:4,fly:3.2,ranged:{kind:`laser`,damage:2,range:22,rate:.6,keep:[6,13]},sight:28,w:.45,h:.5},sentinel:{faction:`machines`,hp:50,speed:1.6,ranged:{kind:`laser`,damage:4,range:26,rate:.35,keep:[9,18]},sight:30,w:.5,h:2.5},tick:{faction:`machines`,hp:5,speed:4.6,boom:{damage:6,radius:2.4},sight:20,w:.35,h:.7},leaper:{faction:`machines`,hp:26,speed:3.2,leap:!0,melee:{damage:4,reach:1.9,rate:.8},sight:26,w:.6,h:1.2},rocketeer:{faction:`machines`,hp:30,speed:3,fly:6,ranged:{kind:`rocket`,damage:5,range:30,rate:.25,keep:[12,22]},sight:34,w:.6,h:.8},wasp:{faction:`machines`,hp:6,speed:6,fly:2.5,ranged:{kind:`laser`,damage:1,range:18,rate:1.1,keep:[4,10]},sight:26,w:.3,h:.35},hornet:{faction:`machines`,hp:24,speed:4,fly:4,ranged:{kind:`laser`,damage:3,range:24,rate:.6,keep:[7,15]},sight:30,w:.55,h:.6},snitch:{faction:`machines`,hp:10,speed:3.5,fly:7,calls:!0,sight:34,w:.4,h:.5},pop:{faction:`machines`,hp:4,speed:5.5,boom:{damage:5,radius:2.2},sight:22,w:.35,h:.7},bastion:{faction:`machines`,hp:140,speed:1.2,ranged:{kind:`laser`,damage:3,range:26,rate:1.4,keep:[6,20]},sight:30,w:1.1,h:3.6},bombardier:{faction:`machines`,hp:60,speed:1.6,ranged:{kind:`rocket`,damage:6,range:38,rate:.2,keep:[18,32]},sight:38,w:.9,h:1.8},stalker:{faction:`shadow`,hp:55,speed:2.6,rush:6.2,melee:{damage:4,reach:2.1,rate:.7},sight:32,h:2.4,burns:!0}},sh={play:{night:[[`zombie`,5,2],[`skeleton`,2,1],[`drone`,2,2],[`tick`,1,2],[`sentinel`,.5,1],[`stalker`,.4,1]],day:[]},survival:{night:[[`zombie`,5,3],[`skeleton`,2,2],[`drone`,2,2],[`tick`,1.5,3],[`sentinel`,1,1],[`stalker`,1,1]],day:[[`drone`,3,2],[`tick`,2,2],[`sentinel`,1,1]]}},ch={day:[[`wasp`,3,3],[`drone`,2,2],[`hornet`,1,1],[`snitch`,1,1],[`tick`,1.5,3],[`pop`,1.5,2],[`leaper`,1,1],[`sentinel`,.6,1],[`rocketeer`,.5,1],[`bombardier`,.4,1],[`bastion`,.25,1]],night:[[`wasp`,3,4],[`drone`,2,3],[`hornet`,1.5,2],[`snitch`,1,1],[`tick`,2,4],[`pop`,2,3],[`leaper`,1.5,2],[`sentinel`,1,1],[`rocketeer`,1,1],[`bombardier`,.6,1],[`bastion`,.4,1]]},lh={play:{night:8,day:0},survival:{night:16,day:6}},uh={play:{night:10,day:6},survival:{night:18,day:12}},dh=72,fh=.5,ph=new B,mh=new B;function hh(e,t,n,r,i){let a=0,o=i;for(let i of[`x`,`y`,`z`]){let s=1/(t[i]||1e-9),c=(n[i]-e[i])*s,l=(r[i]-e[i])*s;if(c>l&&([c,l]=[l,c]),a=Math.max(a,c),o=Math.min(o,l),a>o)return null}return a}function gh(){let e=new ti(new Vr({color:0,opacity:.6,transparent:!0,depthWrite:!1,fog:!1})),t=new ti(new Vr({color:15022389,depthWrite:!1,fog:!1}));e.center.set(0,.5),t.center.set(0,.5),e.scale.set(.9,.1,1);let n=new On;return n.add(e,t),e.position.x=t.position.x=-.45,t.position.z=.001,n.visible=!1,{g:n,fg:t}}var _h=class{constructor(e,t,n,r,i,a){this.type=n,this.def=oh[n],this.faction=this.def.faction,this.hp=this.def.hp,this.body=new Sm(t,r,i,a,{keepOut:!0,w:this.def.w??.3,h:this.def.h??1.8}),this.body.settle(),this.def.fly&&(this.body.pos.y+=this.def.fly),this.model=ah[n](),this.bar=gh(),this.bar.g.position.y=(this.def.h??1.8)+.45,this.model.root.add(this.bar.g),e.add(this.model.root),this.yaw=Math.random()*Math.PI*2,this.cool=.8+Math.random(),this.t=Math.random()*10,this.wanderT=0,this.wander=[0,0],this.hurtT=0,this.dyingT=0,this.burnT=0,this.attack=0,this.groanT=3+Math.random()*8,this.strafe=Math.random()<.5?1:-1,this.target=null,this.retarget=Math.random()*fh}get pos(){return this.body.pos}get alive(){return this.hp>0}get center(){return this.pos.clone().setY(this.pos.y+(this.def.h??1.8)*.6)}box(e=0){let t=this.pos,n=(this.def.w??.3)+.1+e,r=this.def.h??1.8;return[ph.set(t.x-n,t.y,t.z-n),mh.set(t.x+n,t.y+r+.1,t.z+n)]}hitRay(e,t,n){if(!this.alive)return null;let[r,i]=this.box();return hh(e,t,r,i,n)}contains(e){let[t,n]=this.box(.05);return e.x>t.x&&e.x<n.x&&e.y>t.y&&e.y<n.y&&e.z>t.z&&e.z<n.z}hurt(e,t){if(!this.alive)return!1;if(this.hp-=e,this.hurtT=.18,this.bar.g.visible=!0,this.bar.fg.scale.set(Math.max(0,this.hp/this.def.hp)*.9,.1,1),t){let e=this.pos.x-t.x,n=this.pos.z-t.z,r=Math.hypot(e,n)||1,i=this.type===`sentinel`||this.type===`bombardier`?1.5:this.type===`bastion`?.3:7;this.body.vel.x+=e/r*i,this.body.vel.z+=n/r*i,this.def.fly||(this.body.vel.y=Math.max(this.body.vel.y,i*.6))}return this.alive||(this.dyingT=.7,this.bar.g.visible=!1),!0}pickTarget(e,t){let n=null,r=this.def.sight,i=this.pos;if(e.playerTargetable){let t=i.distanceTo(e.player.pos);t<r&&(r=t*1.1,n={player:!0,pos:e.player.pos,center:e.player.pos.clone().setY(e.player.pos.y+1.2)})}for(let e of t){if(e===this||!e.alive||e.faction===this.faction)continue;let t=i.distanceTo(e.pos);t<r&&(r=t,n={mob:e,pos:e.pos,center:e.center})}this.target=n}strike(e,t){let n=this.target;n&&(n.player?e.hurtPlayer(t,this.pos):n.mob.hurt(t,this.pos))}update(e,t,n){let r=this.pos;if(this.t+=e,!this.alive)return this.dyingT-=e,this.def.fly&&this.body.update(e,0,0,0),this.model.update(e,{speed:0,attack:0,t:.7-this.dyingT,dying:!0},r,this.yaw),this.dyingT>0;this.retarget-=e,this.retarget<=0&&(this.retarget=fh,this.pickTarget(t,n)),this.target?.mob&&!this.target.mob.alive&&(this.target=null);let i=this.def,a=0,o=0,s=0;this.cool-=e,this.attack=Math.max(0,this.attack-e*3);let c=this.target;if(c){let n=c.pos.x-r.x,l=c.pos.z-r.z,u=Math.hypot(n,l)||.01,d=n/u,f=l/u;if(this.turn(Math.atan2(-n,-l),e),i.melee||i.boom)a=d,o=f,s=i.rush&&u<9?i.rush:i.speed,i.leap&&(this.leapT=Math.max(0,(this.leapT??0)-e),u>3&&u<10&&this.body.onGround&&this.cool<=0&&!this.leapT&&(this.body.vel.y=9,this.leapT=.8,this.cool=1.4,this.attack=1),this.leapT&&(s=11)),u<(i.melee?.reach??1.4)&&Math.abs(c.pos.y-r.y)<2&&this.cool<=0&&(i.boom?(t.boom(this.center,i.boom.radius,i.boom.damage,this),this.hp=0,this.dyingT=.01,this.exploded=!0):(this.cool=1/i.melee.rate,this.attack=1,this.strike(t,i.melee.damage)));else if(i.calls)a=-f*this.strafe+(u<10?-d:u>16?d:0),o=d*this.strafe+(u<10?-f:u>16?f:0),s=i.speed,c.player&&this.cool<=0&&(this.cool=25,this.attack=1,t.callSwarm?.(this));else if(i.ranged){let[e,n]=i.ranged.keep;u>n?(a=d,o=f):u<e?(a=-d,o=-f):(a=-f*this.strafe,o=d*this.strafe),s=i.speed,this.body.hitWall&&(this.strafe*=-1),u<i.ranged.range&&this.cool<=0&&(this.cool=1/i.ranged.rate+Math.random()*.5,this.attack=1,t.shoot(this,c,i.ranged))}}else{if(this.wanderT-=e,this.wanderT<=0){this.wanderT=2+Math.random()*4;let e=Math.random()*Math.PI*2;this.wander=Math.random()<.4?[0,0]:[Math.sin(e),Math.cos(e)]}[a,o]=this.wander,s=i.speed*.5,(a||o)&&this.turn(Math.atan2(-a,-o),e)}let l;if(l=i.fly?this.fly(e,a,o,s,c,t):this.body.update(e,a,o,s),i.burns&&t.daylight>.55&&(this.burnT-=e,this.burnT<=0&&(this.burnT=.5,t.world.raycast(r.clone().setY(r.y+2.5),new B(0,1,0),40)||(this.hurt(this.type===`stalker`?4:2),t.particles.spark(this.center,16742938,8,1.5,.6)))),this.groanT-=e,this.groanT<=0){this.groanT=5+Math.random()*9;let e=r.distanceTo(t.player.pos);e<24&&t.sound.groan?.(this.type,1-e/24)}this.hurtT=Math.max(0,this.hurtT-e);let u=this.hurtT>0?.8:0;for(let e of this.model.mats)e.emissive?.setRGB(u,0,0);return this.model.update(e,{speed:l,attack:this.attack,t:this.t},r,this.yaw),this.bar.g.quaternion.copy(t.camera.quaternion),!0}fly(e,t,n,r,i,a){let o=this.pos,s=a.world.heightAt(Math.floor(o.x),Math.floor(o.z)),c=Math.max(s+1+this.def.fly,i?i.pos.y+2.5:0),l=this.body.vel,u=1-Math.exp(-4*e);l.x+=(t*r-l.x)*u,l.z+=(n*r-l.z)*u,l.y+=(Math.max(-3,Math.min(3,(c-o.y)*2))-l.y)*u;let d=o.x+l.x*e,f=o.y+l.y*e,p=o.z+l.z*e;return this.body.collides(d,f,p)?o.y+=2*e:o.set(d,f,p),Math.hypot(l.x,l.z)}turn(e,t){let n=Math.atan2(Math.sin(e-this.yaw),Math.cos(e-this.yaw));this.yaw+=n*Math.min(1,t*8)}dispose(e){e.remove(this.model.root),this.model.root.traverse(e=>{e.geometry?.dispose();for(let t of[].concat(e.material??[]))t.map?.dispose(),t.dispose()})}},vh=class{constructor(e,t,n,r,i){this.scene=e,this.world=t,this.particles=n,this.sound=r,this.effects=i,this.list=[],this.arrows=[],this.spawnT=2,this.arrowGeo=new ca(.05,.05,.6),this.arrowMat=new Da({color:14208952})}spawnNear(e,t,n=1){for(let r=0;r<8;r++){let r=Math.random()*Math.PI*2,i=22+Math.random()*14,a=Math.floor(e.x+Math.sin(r)*i)+.5,o=Math.floor(e.z+Math.cos(r)*i)+.5;if(nd(a,o,5)||!this.world.isLoadedAt(a,o)||this.world.heightAt(Math.floor(a),Math.floor(o))<40)continue;let s=[];for(let e=0;e<n;e++){let e=a+(Math.random()-.5)*4,n=o+(Math.random()-.5)*4,r=new _h(this.scene,this.world,t,e,this.world.heightAt(Math.floor(e),Math.floor(n))+1,n);this.list.push(r),s.push(r)}return s[0]}return null}rayHit(e,t,n){let r=null;for(let i of this.list){let a=i.hitRay(e,t,n);a!==null&&(!r||a<r.t)&&(r={mob:i,t:a})}return r}nearest(e,t){let n=null,r=t;for(let t of this.list){if(!t.alive)continue;let i=t.pos.distanceTo(e);i<r&&(r=i,n=t)}return n}damageArea(e,t,n,r){for(let i of this.list){if(i===r||!i.alive)continue;let a=i.center.distanceTo(e);a<t*1.6&&i.hurt(n*(1-a/(t*1.6))+2,e)}}clear(){for(let e of this.list)e.dispose(this.scene);this.list=[]}update(e,t){let n=t.mode===`survival`?`survival`:`play`;t.world=this.world,t.particles=this.particles,t.sound=this.sound,t.playerTargetable=!t.player.inFort&&!t.dead,t.boom=(e,n,r,i)=>{this.effects.fireball(e,n*.7),this.sound.shot(`boom`),this.particles.spark(e,16752704,24,7,.5),this.damageArea(e,n,r,i);let a=e.distanceTo(t.player.pos.clone().setY(t.player.pos.y+.9));a<n*1.6&&t.playerTargetable&&t.hurtPlayer(Math.round(r*(1-a/(n*1.6)))+1,e)},t.callSwarm=e=>{this.sound.ctx&&this.sound.tone(1200,.5,.12,`sawtooth`),t.alert?.(`A Snitch spotted you — ARC incoming!`),this.particles.spark(e.center,4243711,16,3,.6),this.spawnNear(e.pos,`wasp`,3),this.spawnNear(e.pos,Math.random()<.5?`hornet`:`drone`,1)},t.shoot=(e,n,r)=>r.kind===`arrow`?this.shootArrow(e,n,r):r.kind===`rocket`?this.shootRocket(e,n,r,t):this.shootLaser(e,n,r,t);let r=t.daylight<.3?`night`:`day`;if(this.spawnT-=e,this.spawnT<=0){this.spawnT=3+Math.random()*4;let e=this.list.filter(e=>e.alive).length,i=t.raider?ch[r]:sh[n][r],a=(t.raider?uh:lh)[n][r];if(t.enabled&&i.length&&e<a){let e=Math.random()*i.reduce((e,t)=>e+t[1],0),[n,,r]=i.find(t=>(e-=t[1])<=0)??i[0];this.spawnNear(t.player.pos,n,1+Math.floor(Math.random()*r))}}let i=this.list;this.list=i.filter(n=>{let r=n.pos.distanceTo(t.player.pos)>dh||n.pos.y<-20,a=!r&&n.update(e,t,i);if(!a){if(!n.alive&&!r&&n.faction===`machines`&&t.onMachineDown?.(n),!n.alive&&!r&&!n.exploded){let e=n.faction===`machines`;this.particles.spark(n.center,e?16752704:6710886,18,e?5:2,.8),e&&this.sound.shot(`boom`)}n.dispose(this.scene)}return a});let a=t.player.pos;this.arrows=this.arrows.filter(n=>{n.life-=e,n.v.y-=9*e;let r=n.v.length()*e,i=n.v.clone().normalize();if(this.world.raycast(n.mesh.position,i,r)||n.life<=0)return this.scene.remove(n.mesh),!1;n.mesh.position.addScaledVector(i,r),n.mesh.lookAt(n.mesh.position.clone().add(i));let o=n.mesh.position;if(t.playerTargetable&&Math.abs(o.x-a.x)<.45&&Math.abs(o.z-a.z)<.45&&o.y>a.y&&o.y<a.y+1.9)return t.hurtPlayer(n.damage,o.clone().addScaledVector(i,-1)),this.scene.remove(n.mesh),!1;let s=this.list.find(e=>e.alive&&e.faction!==n.faction&&e.contains(o));return!s||(s.hurt(n.damage,o),this.scene.remove(n.mesh),!1)})}shootArrow(e,t,n){let r=e.pos.clone().setY(e.pos.y+1.4),i=t.center.clone().sub(r),a=i.length();i.normalize();let o=i.multiplyScalar(24);o.y+=a*.25,o.x+=(Math.random()-.5)*1.5,o.z+=(Math.random()-.5)*1.5;let s=new bi(this.arrowGeo,this.arrowMat);s.position.copy(r),this.scene.add(s),this.arrows.push({mesh:s,v:o,life:4,damage:n.damage,faction:e.faction}),this.sound.shot(`bow`)}shootRocket(e,t,n,r){let i=e.center.clone(),a=t.center.clone().sub(i).normalize(),o=r.player.pos;this.effects.rocket(i,a,16,n.range+10,this.world,t=>r.boom(t,2.4,n.damage,e),(t,n,i)=>{for(let r of this.list){if(r===e||!r.alive||r.faction===e.faction)continue;let a=r.hitRay(t,n,i);if(a!==null)return a}return r.playerTargetable?hh(t,n,ph.set(o.x-.4,o.y,o.z-.4),mh.set(o.x+.4,o.y+1.8,o.z+.4),i):null}),this.sound.shot(`rocket`)}shootLaser(e,t,n,r){let i=e.center.clone();e.type===`sentinel`&&(i.y+=.5),e.type===`bastion`&&(i.y+=1);let a=t.center.clone(),o=i.distanceTo(a),s=Math.random()<.3;s&&a.add(new B((Math.random()-.5)*3,(Math.random()-.3)*2,(Math.random()-.5)*3));let c=a.clone().sub(i).normalize(),l=this.world.raycast(i,c,o+2),u=i.clone().addScaledVector(c,l?Math.min(l.t,o+2):o+2);this.effects.tracer(i,u,`#ff3a2a`,e.type===`sentinel`?.08:.04,.12),this.effects.flash(i,`#ff3a2a`,.35),i.distanceTo(r.player.pos)<30&&this.sound.shot(`laser`),!(s||l&&l.t<o-.5)&&(e.target=t,e.strike(r,n.damage),this.particles.spark(a,16726570,6,2,.3))}},yh=matchMedia(`(pointer: coarse)`).matches||new URLSearchParams(location.search).has(`touch`),bh=2.2,xh=55;function Sh({player:e,press:t,release:n,toggleView:r,openInventory:i,pause:a,selectSlot:o,toggleBuild:s,selectPiece:c}){document.body.classList.add(`touch`);let l=document.createElement(`div`);l.id=`touch`,l.innerHTML=`
    <div id="tLook"></div>
    <div id="tStick"><div></div></div>
    <button id="tJump" class="tb">⤒</button>
    <button id="tHit" class="tb big">⚔</button>
    <button id="tPlace" class="tb">▣</button>
    <div id="tTop"><button class="tb sm" data-a="build">🔨</button><button class="tb sm" data-a="view">👁</button><button class="tb sm" data-a="bag">🎒</button><button class="tb sm" data-a="pause">❚❚</button></div>`,document.body.appendChild(l);let u=l.querySelector(`#tStick`),d=u.firstElementChild,f=null,p=0,m=0,h=(t,n)=>{let r=t-p,i=n-m,a=Math.hypot(r,i);a>xh&&(r*=xh/a,i*=xh/a),d.style.transform=`translate(${r}px, ${i}px)`,e.stick={x:r/xh,y:-i/xh}},g=null,_=0,v=0,y=0,b=0;l.addEventListener(`touchstart`,e=>{for(let t of e.changedTouches)t.target.closest(`.tb`)||(t.clientX<innerWidth*.4&&f===null?(f=t.identifier,p=t.clientX,m=t.clientY,u.style.left=p+`px`,u.style.top=m+`px`,u.classList.add(`on`),h(p,m)):g===null&&(g=t.identifier,_=t.clientX,v=t.clientY,y=performance.now(),b=0));e.preventDefault()},{passive:!1}),l.addEventListener(`touchmove`,t=>{for(let n of t.changedTouches)if(n.identifier===f&&h(n.clientX,n.clientY),n.identifier===g){let t=n.clientX-_,r=n.clientY-v;b+=Math.abs(t)+Math.abs(r),e.turn(t,r,bh),_=n.clientX,v=n.clientY}t.preventDefault()},{passive:!1});let x=r=>{for(let i of r.changedTouches)i.identifier===f&&(f=null,e.stick=null,u.classList.remove(`on`),d.style.transform=``),i.identifier===g&&(g=null,b<12&&performance.now()-y<250&&(t(0),setTimeout(()=>n(0),60)))};l.addEventListener(`touchend`,x),l.addEventListener(`touchcancel`,x);let S=(e,t,n)=>{let r=l.querySelector(e);r.addEventListener(`touchstart`,e=>{e.preventDefault(),r.classList.add(`down`),t()},{passive:!1});let i=e=>{e.preventDefault(),r.classList.remove(`down`),n()};r.addEventListener(`touchend`,i),r.addEventListener(`touchcancel`,i)};S(`#tJump`,()=>e.keys.add(`Space`),()=>e.keys.delete(`Space`)),S(`#tHit`,()=>t(0),()=>n(0)),S(`#tPlace`,()=>t(2),()=>n(2));for(let e of l.querySelectorAll(`#tTop .tb`))e.addEventListener(`touchstart`,t=>{t.preventDefault(),{view:r,bag:i,pause:a,build:s}[e.dataset.a]()},{passive:!1});document.querySelector(`#buildBar`).addEventListener(`touchstart`,e=>{let t=e.target.closest(`.slot, .tier`);t&&(e.preventDefault(),c(t.classList.contains(`tier`)?-1:[...t.parentNode.children].indexOf(t)))},{passive:!1}),document.querySelector(`#hotbar`).addEventListener(`touchstart`,e=>{let t=e.target.closest(`.slot`);t&&(e.preventDefault(),o([...t.parentNode.children].indexOf(t)))},{passive:!1})}var Ch=e=>document.querySelector(e),wh=class{constructor(e){this.max=20,this.hp=20,this.calmT=0,this.flash=0,this.deadT=0,this.onDeath=e,this.shown=-1}get dead(){return this.deadT>0}hurt(e){return!this.dead&&(this.hp=Math.max(0,this.hp-e),this.calmT=5,this.flash=1,this.hp===0&&(this.deadT=2.5,Ch(`#dead`).classList.remove(`hidden`)),!0)}update(e){if(this.dead?(this.deadT-=e,this.deadT<=0&&(this.hp=this.max,Ch(`#dead`).classList.add(`hidden`),this.onDeath?.())):(this.calmT-=e,this.calmT<=0&&this.hp<this.max&&(this.hp=Math.min(this.max,this.hp+1),this.calmT=1.5)),this.flash=Math.max(0,this.flash-e*2.5),Ch(`#hurt`).style.opacity=this.flash,this.shown!==this.hp){this.shown=this.hp;let e=[];for(let t=0;t<this.max/2;t++){let n=this.hp-t*2;e.push(`<span class="${n>=2?``:n===1?`half`:`empty`}">❤️</span>`)}Ch(`#hearts`).innerHTML=e.join(``),Ch(`#hearts`).classList.toggle(`low`,this.hp<=6)}}},Th=yh?5:7,Eh=600,Dh=6,Oh=e=>document.querySelector(e),kh=new Yl({antialias:!1,powerPreference:`high-performance`});kh.setPixelRatio(Math.min(devicePixelRatio,yh?1.5:2)),kh.setSize(innerWidth,innerHeight),Oh(`#app`).appendChild(kh.domElement);var Ah=new Ln,jh=Th*16*.95;Ah.fog=new In(8900331,jh*.55,jh);var Mh=new so(75,innerWidth/innerHeight,.05,1500),Nh=new Gp(Ah,jh),Ph=new om(kh,Ah,Mh);Ph.setSize(innerWidth,innerHeight);var Fh=new lm,Ih=uu(),Lh=new ia(Ih);Lh.magFilter=r,Lh.minFilter=r,Lh.generateMipmaps=!1,Lh.colorSpace=ze;var Rh={uTime:{value:0},uDaylight:{value:1}};function zh(e,t){let n=new ci(e);return n.onBeforeCompile=e=>{Object.assign(e.uniforms,Rh);let n=t?`transformed.y += sway * ((sin(wp.x * 1.3 + uTime * 1.7) + cos(wp.z * 1.1 + uTime * 1.3)) * 0.035 - 0.07);`:`transformed.x += sway * sin(uTime * 1.8 + wp.x * 0.7 + wp.z * 0.5) * 0.06;
         transformed.z += sway * cos(uTime * 1.5 + wp.x * 0.5 + wp.z * 0.8) * 0.05;`;e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute vec2 light;
        attribute float sway;
        uniform float uTime;
        varying vec2 vLight;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vLight = light;
        vec4 wp = modelMatrix * vec4(transformed, 1.0);
        ${n}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uDaylight;
        varying vec2 vLight;`).replace(`#include <map_fragment>`,`#include <map_fragment>
        vec3 lit = max(vec3(vLight.x * uDaylight), vLight.y * vec3(1.0, 0.82, 0.55));
        diffuseColor.rgb *= max(lit, vec3(0.03));`)},n}var Bh={solid:zh({map:Lh,vertexColors:!0,alphaTest:.5},!1),water:zh({map:Lh,vertexColors:!0,transparent:!0,depthWrite:!1,side:2},!0)},Vh=up()??{seed:Math.floor(Math.random()*2**31),edits:new Map},Hh=sp===`raider`;Hh&&(Vh.mats??={...gp});var X=new wd(Ah,Bh,Vh.seed,Vh.edits,Th,sp);Nh.haze=Hh;var Z=new ep(X,Mh),Q=new ap(Ih,Vh.hotbar,()=>Lg(),(e,t)=>ig(e,t)),Uh=new dm(Ah,Ih),Wh=Vh.time??.08;if(Vh.player){let e=Vh.player;Z.pos.set(e.x,e.y,e.z),Z.yaw=e.yaw??0,Z.pitch=e.pitch??0,Z.flying=!!e.flying,Z.view=e.view??Z.view}else{let e=X.findSpawn();Z.pos.set(e.x+.5,e.y,e.z+.5)}Z.onStep=e=>Fh.step(mu[e].sound);var Gh=new fo(16777215,1),Kh=new uo(16777215,1);Ah.add(Gh,Kh,Kh.target,Z.character.root);var qh=new Yi(new ma(new ca(1.004,1.004,1.004)),new Li({color:0,transparent:!0,opacity:.55}));qh.visible=!1,Ah.add(qh);var Jh=`omnicraft:outfit:v1`,Yh=new mm(Ah),Xh=Z.character,Zh={...cf};try{Zh={...Zh,...JSON.parse(localStorage.getItem(Jh))}}catch{}Ah.add(Mh);var Qh=new On;Qh.position.set(.32,-.3,-.55),Mh.add(Qh);var $h=null,eg=0,tg=0;function ng(e){let t=Zh.hand;Zh={...e},Xh.setOutfit(Zh),localStorage.setItem(Jh,JSON.stringify(Zh)),Zh.hand&&Zh.hand!==t&&Q.put(`w:`+Zh.hand),rg(Xh.weaponDrawn)}function rg(e=!0){$h&&Qh.remove($h),$h=null;let t=Q.currentWeapon;if(Xh.setWeapon(t?.id??null),Xh.weaponDrawn=!!t&&e,t){$h=Of(t);let e=.024*(t.scale??1);$h.scale.setScalar(e),t.kind===`gun`?$h.rotation.set(0,Math.PI/2,0):$h.rotation.set(-.5,Math.PI/2+.25,0),Qh.add($h),Oh(`#weaponHud`).replaceChildren(Object.assign(new Image,{src:Ef(t)}),t.name)}og()}function ig(e,t){let n=rp(e);if(n&&t&&Xh.weapon?.id===n.id)return ag();rg(!0);let r=n?n.tool?`hold left click to dig`:n.kind===`gun`?`left click to shoot`:`left click to attack`:`click to place`;Q.toast(`${Q.nameOf(e)} — ${r}`)}function ag(){Xh.weapon&&(Xh.weaponDrawn=!Xh.weaponDrawn,og(),Q.toast(Xh.weaponDrawn?Xh.weapon.name:`Hands`))}function og(){let e=!!Xh.holding;document.body.classList.toggle(`armed`,e),Oh(`#weaponHud`).classList.toggle(`hidden`,!e),e||cg(!1)}var sg=!1;function cg(e){let t=Xh.weapon;sg=e&&!!t&&t.kind===`gun`,Z.zoomFov=sg?t.zoom??55:null,Oh(`#scope`).classList.toggle(`hidden`,!(sg&&t.zoom))}var lg=new bm(()=>Zh,ng),ug={waiting:e=>`❗ ${e.name} needs your approval at Agent HQ`,done:e=>`✅ ${e.name} finished a task`,error:e=>`⚠️ ${e.name} hit an error`},dg=new Lm(Ah,X,(e,t,n)=>{let r=ug[e]?.(t);r&&(Q.toast(r),e===`done`?(Fh.ctx&&(Fh.tone(660,.25,.15),setTimeout(()=>Fh.tone(990,.35,.15),120)),Uh.spark(n.pos.clone().setY(n.pos.y+2),7331978,24,4,.8)):e===`waiting`?Fh.ctx&&Fh.tone(880,.2,.2,`square`):e===`error`&&Uh.spark(n.pos.clone().setY(n.pos.y+2),5592405,16,1.5,1.2))}),fg=new Vm(dg,()=>Ng()),pg=null,mg=new vh(Ah,X,Uh,Fh,Yh);function hg(){let e=X.findSpawn();Z.pos.set(e.x+.5,e.y,e.z+.5),Z.vel.set(0,0,0)}var gg=new wh(()=>{let e=_g?.topside?_g.lose():0;hg(),Q.toast(Hh?e?`Back in Speranza · your backpack (${e}) stayed topside`:`Back in Speranza`:`Back at Agent HQ`)}),_g=Hh?new Pp({scene:Ah,world:X,player:Z,save:Vh,ui:Q,sound:Fh,mobs:mg,goHome:hg,onChange:()=>g_()}):null;_g&&(_g.onDeploy=()=>Ng(),Oh(`#dead p`).textContent=`Your backpack stays where you fell…`),Oh(`#deployRow`).classList.toggle(`hidden`,!Hh);var vg=()=>nd(Math.floor(Z.pos.x),Math.floor(Z.pos.z));function yg(e,t){if(Kg.mode!==`survival`&&(e=Math.max(1,Math.round(e/2))),!vg()&&gg.hurt(e)&&(Fh.hurt(),Yh.shake(.5),t)){let e=Z.pos.x-t.x,n=Z.pos.z-t.z,r=Math.hypot(e,n)||1;Z.vel.x+=e/r*6,Z.vel.z+=n/r*6,Z.vel.y=Math.max(Z.vel.y,5)}}function bg(e){return e?e.tool?4:e.kind===`sword`?/hammer|buster|axe/.test(e.id)?11:8:{sniper:24,shotgun:3,minigun:2,assault_rifle:4,pistol:6}[e.id]??7:2}function xg(e,t,n){e.hurt(n,Z.pos),Uh.spark(t,11538448,8,2.5,.4),Fh.punch()}var Sg=new Map;dg.onWorldTask=e=>Sg.set(e,Wm(Z.pos,Z.yaw)),dg.onAction=(e,t)=>{if(e.say&&Q.toast(`${t.name}: ${e.say}`),!e.ops?.length)return;t.following||t.setFollow(!0);let n=Sg.get(t.name)??Wm(Z.pos,Z.yaw),r=Gm(e.ops,n).filter(([e,t,n])=>t>0&&t<128&&!X.isProtected(e,t,n));t.build(r)};var Cg={mobs:mg,world:X,particles:Uh,companionShoot(e,t,n,r){Yh.tracer(t,n,`#7dff6a`,.09,.12),Yh.flash(t,`#7dff6a`,.4),t.distanceTo(Z.pos)<30&&Fh.shot(`plasma`),r.hurt(6,e.pos),Uh.spark(n,8257386,6,2,.3)},placeBlocks(e,t){let n=t.filter(([e,t,n,r])=>!(mu[r].solid&&Z.intersectsBlock(e,t,n)));X.setBlocks(n);let r=n.at(-1);r&&e.pos.distanceTo(Z.pos)<28&&(Fh.place(mu[r[3]].sound),r[3]&&Uh.burst(r[0],r[1],r[2],r[3]))},buildDone(e){Q.toast(`${e.name} finished building`),Fh.ctx&&Fh.tone(880,.3,.12)}};function wg(e){fg.open(e.name),Oh(`#menu`).classList.add(`hidden`),Pg()}ng(Zh);var Tg=!1,Eg=!1,Dg=!1,Og=!1,$=null,kg=-1,Ag=0,jg=new URLSearchParams(location.search).has(`vm`);Z.absMouse=jg;var Mg=jg||yh,Ng=()=>{if(!Dg)return;if(Fh.init(),Mg)return Xg(!0);let e=kh.domElement.requestPointerLock();e?.catch&&e.catch(()=>Fg())},Pg=()=>Mg?Xg(!1):document.exitPointerLock(),Fg=()=>Oh(`#menu`).classList.remove(`hidden`);function Ig(){Eg=!0,Oh(`#inventory`).classList.remove(`hidden`),Pg()}function Lg(){Eg=!1,Oh(`#inventory`).classList.add(`hidden`),Ng()}var Rg=!1,zg=0,Bg=null,Vg=0;function Hg(e){let t=new B(-Math.sin(e),0,-Math.cos(e)),n=3.4;for(let e of[.4,1.05,1.7]){let r=X.raycast(Z.pos.clone().setY(Z.pos.y+e),t,3.4);r&&mu[r.id].solid&&(n=Math.min(n,r.t))}return n}function Ug(){Rg=!0,zg=0,Vg=Z.yaw;let e=-1;for(let t=0;t<16;t++){let n=Z.yaw+(t%2?1:-1)*Math.ceil(t/2)*(Math.PI/8),r=Hg(n);if(r>e+.2&&(e=r,Vg=n),r>=3.4)break}lg.render(),Oh(`#wardrobe`).classList.remove(`hidden`),Oh(`#menu`).classList.add(`hidden`),document.body.classList.add(`dressing`),Pg()}function Wg(e=!0){Rg=!1,Xh.yawOffset=0,Mh.clearViewOffset(),Oh(`#wardrobe`).classList.add(`hidden`),document.body.classList.remove(`dressing`),e?Ng():Fg()}Oh(`#wrClose`).onclick=()=>Wg(),kh.domElement.addEventListener(`pointerdown`,e=>{Rg&&(Bg=e.clientX)}),addEventListener(`pointermove`,e=>{Rg&&Bg!==null&&(zg+=(e.clientX-Bg)*.012,Bg=e.clientX)}),addEventListener(`pointerup`,()=>Bg=null);var Gg=`omnicraft:settings:v1`,Kg={sensitivity:.3,invertY:!1,fov:75,mode:`play`};try{Object.assign(Kg,JSON.parse(localStorage.getItem(Gg)))}catch{}function qg(){Z.sensitivity=Kg.sensitivity,Z.invertY=Kg.invertY,Z.fov=Kg.fov,Z.canFly=Kg.mode!==`survival`,Z.canFly||(Z.flying=!1),Oh(`#sens`).value=Kg.sensitivity,Oh(`#sensVal`).textContent=Math.round(Kg.sensitivity*100)+`%`,Oh(`#invertY`).checked=Kg.invertY,Oh(`#fov`).value=Kg.fov,Oh(`#fovVal`).textContent=Kg.fov+`°`;for(let e of document.querySelectorAll(`#modeSel button`))e.classList.toggle(`on`,e.dataset.mode===Kg.mode);for(let e of document.querySelectorAll(`#viewSel button`))e.classList.toggle(`on`,+e.dataset.view==(Z.view===$f.FIRST?0:1));Q.setCounts(Kg.mode===`survival`&&!Hh?Jg():null),localStorage.setItem(Gg,JSON.stringify(Kg))}function Jg(){return Vh.counts??={[q.PLANKS]:16,[q.COBBLE]:16,[q.TORCH]:8,[q.DIRT]:8},Vh.counts}Oh(`#fov`).oninput=e=>{Kg.fov=+e.target.value,qg()};for(let e of document.querySelectorAll(`#modeSel button`))e.onclick=()=>{Kg.mode=e.dataset.mode,mg.clear(),qg()};function Yg(e){Z.view=e?$f.FIRST:$f.BACK,qg()}for(let e of document.querySelectorAll(`#viewSel button`))e.onclick=()=>Yg(e.dataset.view===`0`);Oh(`#sens`).oninput=e=>{Kg.sensitivity=+e.target.value,qg()},Oh(`#invertY`).onchange=e=>{Kg.invertY=e.target.checked,qg()},qg(),g_();for(let e of document.querySelectorAll(`#worldSel button`))e.classList.toggle(`on`,e.dataset.world===sp),e.onclick=()=>{e.dataset.world!==sp&&(V_(),lp(e.dataset.world),Og=!0,location.reload())};Oh(`#play`).onclick=Ng,kh.domElement.addEventListener(`click`,()=>!Tg&&!Eg&&!Rg&&!fg.isOpen&&Ng()),Oh(`#newWorld`).onclick=()=>{confirm(`Start a brand new ${Hh?`Raider`:`Classic`} world? This one will be deleted.`)&&(fp(),Og=!0,location.reload())},document.addEventListener(`pointerlockchange`,()=>Xg(document.pointerLockElement===kh.domElement)),addEventListener(`blur`,()=>jg&&Tg&&Pg());function Xg(e){e!==Tg&&(Tg=e,Z.enabled=Tg,document.body.classList.toggle(`playing`,Tg),Tg||(Z.keys.clear(),kg=-1,V_()),Oh(`#menu`).classList.toggle(`hidden`,Tg||Eg||Rg||fg.isOpen),Tg||cg(!1))}document.addEventListener(`pointerlockerror`,Fg),document.addEventListener(`keydown`,e=>{if(fg.isOpen)(e.code===`Escape`||e.code===`KeyF`&&!/INPUT|TEXTAREA/.test(e.target.tagName))&&fg.close();else if(!/INPUT|TEXTAREA/.test(e.target.tagName)){if(e.code===`Escape`&&Tg)Pg();else if(e.code===`KeyF`&&Tg&&pg)wg(pg);else if(e.code===`KeyE`)Eg?Lg():Tg&&Ig();else if(e.code===`Escape`&&Eg)Eg=!1,Oh(`#inventory`).classList.add(`hidden`),Fg();else if(e.code===`KeyC`&&!Eg)Rg?Wg():Tg&&Ug();else if(e.code===`Escape`&&Rg)Wg(!1);else if(Tg){if(e.code===`KeyQ`&&ag(),e.code===`KeyB`&&!e.repeat&&A_(!T_),T_&&e.code===`KeyT`&&(D_=(D_+1)%Tp.length,k_(),Q.toast(`${Tp[D_].name} pieces`)),e.code.startsWith(`Digit`)&&!e.repeat){let t=+e.code.slice(5);T_&&t>=1&&t<=Ep.length?(E_=t-1,k_()):!T_&&t>=1&&t<=9&&Q.select(t-1)}e.code===`F3`&&(e.preventDefault(),Oh(`#debug`).classList.toggle(`hidden`)),e.code===`KeyV`&&(Yg(Z.view!==$f.FIRST),Q.toast(Z.view===$f.FIRST?`First person`:`Third person`)),e.code===`F5`&&(e.preventDefault(),Z.cycleView(),qg()),e.code===`KeyM`&&Q.toast(Fh.toggleMusic()?`Music on`:`Music off`)}}});function Zg(e){Tg&&(kg=e,T_?e!==1&&M_():Xh.holding===`gun`?(e===0&&$g<=0&&r_(),e===2&&cg(!0)):(s_(e),Ag=.3))}function Qg(e){e===kg&&(kg=-1),e===2&&cg(!1)}document.addEventListener(`mousedown`,e=>Zg(e.button)),document.addEventListener(`mouseup`,e=>Qg(e.button)),yh&&Sh({player:Z,press:Zg,release:Qg,toggleView:()=>Yg(Z.view!==$f.FIRST),openInventory:()=>Tg&&Ig(),pause:Pg,selectSlot:e=>Q.select(e),toggleBuild:()=>A_(!T_),selectPiece:e=>{e<0?D_=(D_+1)%Tp.length:E_=e,k_()}}),document.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`wheel`,e=>{if(Tg&&!sg){if(T_)return E_=(E_+Math.sign(e.deltaY)+Ep.length)%Ep.length,k_();Math.sign(e.deltaY)&&Q.select(Q.selected+Math.sign(e.deltaY))}},{passive:!0});var $g=0,e_=new B;function t_(){return Z.eye.clone().addScaledVector(Z.look,1.2)}function n_(){let e=Xh.weapon,t=Z.view===$f.FIRST?$h:Xh.weaponMesh;return t?(t.updateWorldMatrix(!0,!1),t.localToWorld(new B(e.muzzle[0]-e.grip[0]+.5,e.grip[1]-e.muzzle[1],0))):Z.eye.clone()}function r_(){let e=Xh.weapon;$g=1/e.rate;let t=n_();if(Fh.shot(e.sound),Xh.kick(e.recoil),eg=Math.min(1,eg+e.recoil*6),Yh.shake(e.recoil*(sg?.5:2.5)),Z.pitch=Math.min(Math.PI/2-.01,Z.pitch+e.recoil*(sg?.15:.35)),Yh.flash(t,e.tracer,(e.beam?.7:.45)*(Z.view===$f.FIRST?.35:1)),e.rocket){let n=Z.look.clone();Yh.rocket(t,n,38,e.range,X,t=>i_(t,e.explode),(e,t,n)=>mg.rayHit(e,t,n)?.t??null)}else for(let n=0;n<e.pellets;n++){let n=Z.look.clone();e.spread&&!sg&&(n.x+=(Math.random()-.5)*2*e.spread,n.y+=(Math.random()-.5)*2*e.spread,n.z+=(Math.random()-.5)*2*e.spread,n.normalize());let r=e.range+Z.aimSkip,i=X.raycast(Z.aimOrigin,n,r),a=mg.rayHit(Z.aimOrigin,n,i?i.t:r),o=e_.copy(Z.aimOrigin).addScaledVector(n,a?a.t:i?i.t:r).clone();Yh.tracer(t,o,e.tracer,e.beam??.018,e.beam?.16:.06),a?e.explode?i_(o,e.explode):xg(a.mob,o,bg(e)):i&&(Uh.spark(o,e.tracer,e.beam?10:5,3,.3),e.explode?i_(o,e.explode):(Uh.burst(i.x,i.y,i.z,i.id),If.has(i.id)&&!X.isProtected(i.x,i.y,i.z)&&(X.setBlock(i.x,i.y,i.z,q.AIR),Fh.dig(mu[i.id].sound))))}}function i_(e,t){Fh.shot(`boom`),Yh.fireball(e,t),mg.damageArea(e,t,16);let n=e.distanceTo(Z.eye);Yh.shake(Math.max(0,1.2-n/(t*6)));let r=[],i=Math.ceil(t),a=Math.floor(e.x),o=Math.floor(e.y),s=Math.floor(e.z),c=0;for(let e=-i;e<=i;e++)for(let n=-i;n<=i;n++)for(let l=-i;l<=i;l++){if(e*e+n*n+l*l>t*t*(.7+Math.random()*.5))continue;let i=a+e,u=o+n,d=s+l,f=X.getBlock(i,u,d);f&&f!==q.WATER&&mu[f].breakable&&!X.isProtected(i,u,d)&&(r.push([i,u,d,q.AIR]),c++<24&&Math.random()<.5&&Uh.burst(i,u,d,f))}X.setBlocks(r),Uh.spark(e,16752704,30,9,.6),Uh.spark(e,16769674,15,6,.4);let l=Z.pos.clone().add(new B(0,.9,0)).sub(e),u=l.length();if(u<t*2.2){let e=(1-u/(t*2.2))*16;l.normalize(),Z.vel.x+=l.x*e,Z.vel.y+=Math.max(.3,l.y+.5)*e*.7,Z.vel.z+=l.z*e}}var a_=e=>mu[e].shape!==`cube`,o_=0;function s_(e){if(e===0){if(Z.character.swing(),Xh.holding===`sword`){eg=1,Fh.shot(Xh.weapon.sound);let e=Xh.weapon;e.glow&&Uh.spark(t_(),e.pal[e.glow[0]],6,2,.3)}let e=(Xh.holding===`sword`?3.6:2.8)+Z.aimSkip,t=mg.rayHit(Z.aimOrigin,Z.look,$?Math.min(e,$.t):e);if(t){performance.now()-o_>380&&(o_=performance.now(),xg(t.mob,Z.aimOrigin.clone().addScaledVector(Z.look,t.t),bg(Xh.holding===`sword`?Xh.weapon:null)));return}}if(T_)return M_();if(!$)return e===2&&Q.currentBlock===null?w_():void 0;if(e===0&&(Q.currentBlock===null||l_())){if(!u_())return;c_()||h_($)}else if(e!==1){if(Q.currentBlock===null)return w_();let e=f_();if(!e)return;if(e.blocked)return Q.toast(e.blocked);let t=Q.currentBlock,n=y_([[0,0,0,t]]);if(!b_(n))return Q.toast(S_(n));x_(n),X.setBlock(e.x,e.y,e.z,t),Z.character.swing(),Fh.place(mu[t].sound)}else e===1&&Q.pick($.id)}var c_=()=>Kg.mode===`survival`,l_=()=>Hh&&Cp.has($?.id),u_=()=>(!Xh.holding||!!Xh.weapon?.tool)&&Q.currentBlock===null||l_(),d_=()=>Xh.holding&&Xh.weapon?.tool===`pickaxe`;function f_(){let e=Q.currentBlock;if(!$||e===null)return null;let{x:t,y:n,z:r}=$,i=mu[$.id].replaceable&&$.id!==q.WATER,a=i?t:t+$.normal[0],o=i?n:n+$.normal[1],s=i?r:r+$.normal[2];if(o<0||o>=128)return null;let c=X.getBlock(a,o,s);return c&&!mu[c].replaceable||a_(e)&&!mu[X.getBlock(a,o-1,s)].solid||mu[e].solid&&Z.intersectsBlock(a,o,s)?null:{x:a,y:o,z:s,blocked:X.isProtected(a,o,s)?`Agent HQ is a work zone: no building here`:null}}function p_(e){let t=mu[e];if(t.replaceable)return .05;if(e===q.CRATE||e===q.MED_BAG)return .4;if(e===q.LOCKER)return 1.4;let n={stone:2.2,wood:1.3,glass:.6,grass:.7,sand:.6,metal:2.6}[t.sound]??1.2,r=e===q.COAL_ORE||e===q.IRON_ORE||e===q.DIAMOND_ORE?1.3:1;return d_()?n*r*(t.sound===`stone`||t.sound===`glass`||t.sound===`metal`?.22:.6):n*r*(t.sound===`stone`||t.sound===`metal`?1.6:1)}var m_={[q.GRASS]:q.DIRT,[q.STONE]:q.COBBLE,[q.TALL_GRASS]:null,[q.LEAVES]:null,[q.SNOW]:q.DIRT};function h_(e){let{x:t,y:n,z:r}=e,i=mu[e.id];if(!i.breakable)return;if(X.isProtected(t,n,r))return Q.toast(`Agent HQ is a work zone: no building here`);let a=[[0,1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]].some(([e,i,a])=>X.getBlock(t+e,n+i,r+a)===q.WATER);X.setBlock(t,n,r,a?q.WATER:q.AIR);let o=X.getBlock(t,n+1,r);if(o&&a_(o)&&X.setBlock(t,n+1,r,q.AIR),Uh.burst(t,n,r,e.id),Fh.dig(i.sound),Hh){if(Cp.has(e.id)){let t=wp(e.id);return t.heal&&(gg.hp=Math.min(gg.max,gg.hp+t.heal)),Fh.ctx&&Fh.tone(880,.12,.1),__(t.loot,t.name+(t.heal?` (+health)`:``))}let t=Sp(e.id);t&&__({[t[0]]:t[1]});return}let s=e.id in m_?m_[e.id]:e.id;s!==null&&Q.give(s)}function g_(){let e=Oh(`#mats`);if(e.classList.toggle(`hidden`,!Hh),!Hh)return;let t=Vh.pack??{};e.innerHTML=pp.map(e=>`<span data-k="${e}">${mp[e]} ${Vh.mats[e]}${t[e]?`<b>+${t[e]}</b>`:``}</span>`).join(``)}function __(e,t){let n=[],r=_g?.topside?Vh.pack:Vh.mats;for(let[t,i]of Object.entries(e))i&&(r[t]+=i,n.push(`+${i} ${mp[t]}`));g_(),t&&n.length&&Q.toast(`${t}: ${n.join(`  `)}${_g?.topside?` 🎒`:``}`)}var v_=e=>Vh.mats[e]+(Vh.pack?.[e]??0);function y_(e){let t={};for(let n of e){let e=Hh?bp(n[3]):n[3];t[e]=(t[e]??0)+1}return t}function b_(e){return Hh?Object.entries(e).every(([e,t])=>v_(e)>=t):!c_()||Object.entries(e).every(([e,t])=>Q.count(+e)>=t)}function x_(e){if(Hh){for(let[t,n]of Object.entries(e)){let e=Math.min(n,Vh.pack[t]);Vh.pack[t]-=e,Vh.mats[t]-=n-e}g_()}else if(c_())for(let[t,n]of Object.entries(e))for(let e=0;e<n;e++)Q.take(+t)}function S_(e){for(let[t,n]of Object.entries(e)){if(Hh&&v_(t)<n)return`Need ${n-v_(t)} more ${hp[t]}`;if(!Hh&&Q.count(+t)<n)return`Need ${n-Q.count(+t)} more ${mu[t].name}`}return``}var C_=0;function w_(){performance.now()-C_<1500||(C_=performance.now(),Q.toast(`To build: press 4-9 to hold a block, or B for base pieces`))}var T_=!1,E_=0,D_=0,O_=new kp(Ah);function k_(){Oh(`#buildBar`).classList.toggle(`hidden`,!T_),document.body.classList.toggle(`building`,T_),T_&&(Oh(`#buildBar`).innerHTML=Ep.map((e,t)=>`<div class="slot${t===E_?` selected`:``}"><i>${Dp[t]}</i><small>${e}</small><span>${t+1}</span></div>`).join(``)+`<div class="tier">T: ${Tp[D_].name}</div>`)}function A_(e){T_=e,e||O_.hide(),k_(),e&&Q.toast(`Build mode · 1-6 piece · T material · click to place · B to exit`)}function j_(){if(!$)return null;let e=mu[$.id].replaceable&&$.id!==q.WATER,t=Z.aimOrigin.clone().addScaledVector(Z.look,$.t),n={x:e?$.x:$.x+$.normal[0],y:e?$.y:$.y+$.normal[1],z:e?$.z:$.z+$.normal[2],hx:t.x-$.normal[0]*.01,hz:t.z-$.normal[2]*.01},r=Op(E_,D_,n,Z.yaw);if(Ep[E_]===`Foundation`)for(let[e,t,n,i]of r.slice())for(let a=1;a<=4&&t-a>0;a++){let o=X.getBlock(e,t-a,n);if(o&&!mu[o].replaceable)break;r.push([e,t-a,n,i])}let i=r.filter(([e,t,n])=>{if(t<=0||t>=128)return!1;let r=X.getBlock(e,t,n);return!r||mu[r].replaceable}),a=y_(i),o=``;return i.some(([e,t,n])=>X.isProtected(e,t,n))?o=`Agent HQ is a work zone: no building here`:i.some(([e,t,n,r])=>mu[r].solid&&Z.intersectsBlock(e,t,n))?o=`Step back a little`:i.length?b_(a)||(o=S_(a)):o=`Something is already there`,{list:i,cost:a,why:o}}function M_(){let e=j_();if(e){if(e.why)return Q.toast(e.why);x_(e.cost),X.setBlocks(e.list),Z.character.swing(),Fh.place(mu[e.list[0][3]].sound),Uh.burst(e.list[0][0],e.list[0][1],e.list[0][2],e.list[0][3])}}var N_=[],P_=new ca(.4,.4,.4),F_=new ci({color:16751146});function I_(e){let t={bastion:3,bombardier:2,sentinel:1.5,rocketeer:1.5,hornet:1.2,wasp:.5,pop:.5}[e.type]??1,n=new bi(P_,F_);n.position.copy(e.center),n.scale.setScalar(Math.min(2,.7+t*.3)),Ah.add(n),N_.push({mesh:n,life:120,loot:{metal:Math.round((2+Math.random()*3)*t),parts:Math.max(1,Math.round(t*1.5))}})}function L_(e){for(let t=N_.length-1;t>=0;t--){let n=N_[t];n.life-=e;let r=n.mesh;r.rotation.y+=e*2;let i=X.heightAt(Math.floor(r.position.x),Math.floor(r.position.z))+1.4;r.position.y=Math.max(i+Math.sin(n.life*3)*.15,r.position.y-e*6);let a=r.position.distanceTo(Z.pos.clone().setY(Z.pos.y+.8))<2;(a||n.life<=0)&&(a&&(__(n.loot,`ARC salvage`),Fh.ctx&&Fh.tone(990,.15,.1)),Ah.remove(r),N_.splice(t,1))}}var R_=null;function z_(e){let t=Oh(`#mineBar`);if(!(c_()&&kg===0&&Tg&&$&&u_()&&mu[$.id].breakable)){R_=null,t.classList.add(`hidden`);return}let n=`${$.x},${$.y},${$.z}`;R_?.key!==n&&(R_={key:n,t:0,need:p_($.id),tick:0}),R_.t+=e,R_.tick-=e,R_.tick<=0&&(R_.tick=.25,Z.character.swing(),d_()&&(eg=1),Fh.dig(mu[$.id].sound),Uh.burst($.x,$.y,$.z,$.id)),t.classList.remove(`hidden`),t.firstElementChild.style.width=Math.min(100,R_.t/R_.need*100)+`%`,R_.t>=R_.need&&(h_($),R_=null)}var B_=new bi(new ca(1.002,1.002,1.002),new ci({color:16777215,transparent:!0,opacity:.22,depthWrite:!1}));B_.visible=!1,Ah.add(B_);function V_(){if(Og||!Dg)return;let e=Z.pos;dp({seed:X.seed,edits:X.edits,player:{x:e.x,y:e.y,z:e.z,yaw:Z.yaw,pitch:Z.pitch,flying:Z.flying,view:Z.view},hotbar:Q.hotbar,counts:Vh.counts,mats:Vh.mats,pack:Vh.pack,time:Wh})}setInterval(V_,1e4),addEventListener(`beforeunload`,V_),addEventListener(`resize`,()=>{Mh.aspect=innerWidth/innerHeight,Mh.updateProjectionMatrix(),kh.setSize(innerWidth,innerHeight),Ph.setSize(innerWidth,innerHeight)});var H_=performance.now(),U_=0,W_=0,G_=0,K_=1,q_=0,J_=null;function Y_(e){let t=Math.min((e-H_)/1e3,.1);if(H_=e,Rh.uTime.value+=t,X.update(Z.pos.x,Z.pos.z,Dg?6:30),!Dg&&X.isLoadedAt(Z.pos.x,Z.pos.z)&&(Dg=!0,Z.settle(),Oh(`#play`).disabled=!1,Oh(`#play`).textContent=`Play`),Z.edgeX=0,Dg&&Tg&&(X.isLoadedAt(Z.pos.x,Z.pos.z)&&Z.update(t),Wh=(Wh+t/Eh)%1),Z.syncCamera(t),$=Dg?X.raycast(Z.aimOrigin,Z.look,Dh+Z.aimSkip):null,qh.visible=!!$&&Tg,$&&qh.position.set($.x+.5,$.y+.5,$.z+.5),$g-=t,kg>=0&&Tg&&!T_&&(Xh.holding===`gun`?kg===0&&Xh.weapon.auto&&$g<=0&&r_():(Ag-=t,Ag<=0&&(s_(kg),Ag=.25))),T_||z_(t),L_(t),T_&&Tg){let e=j_();e?O_.show(e.list,!e.why):O_.hide()}let n=Tg&&!T_&&!Xh.holding?f_():null;B_.visible=!!n&&!n.blocked&&Q.currentBlock!==null&&b_(y_([[0,0,0,Q.currentBlock]])),n&&B_.position.set(n.x+.5,n.y+.5,n.z+.5),Qh.visible=!!$h&&Xh.weaponDrawn&&Z.view===$f.FIRST&&!Rg&&!(sg&&Xh.weapon.zoom),eg=Math.max(0,eg-t*5);let r=Math.hypot(Z.vel.x,Z.vel.z);tg+=t*r*2.2;let i=Math.min(1,r/4.3)*(Z.flying?.2:1);if(Xh.holding===`sword`){let e=Math.sin((1-eg)*Math.PI)*+(eg>0);Qh.position.set(.32-e*.25,-.3+Math.abs(Math.sin(tg))*.02*i+e*.05,-.55),Qh.rotation.set(-e*1.3,e*.4,e*.5)}else Qh.position.set((sg?.12:.32)+Math.sin(tg)*.012*i,(sg?-.2:-.3)+Math.abs(Math.cos(tg))*.015*i,-.55+eg*.08),Qh.rotation.set(eg*.25,0,0);if(Rg){Bg===null&&(zg+=t*.35),Xh.yawOffset=Vg-Z.yaw+zg,Xh.root.visible=!0;let e=new B(-Math.sin(Vg),0,-Math.cos(Vg)),n=Z.pos.clone().setY(Z.pos.y+1.05),r=X.raycast(n,e,3.4),i=r&&mu[r.id].solid;Mh.position.copy(n).addScaledVector(e,i?Math.max(.9,r.t-.3):3.4),Mh.lookAt(Z.pos.x,Z.pos.y+.95,Z.pos.z),Mh.setViewOffset(innerWidth,innerHeight,innerWidth*.22,0,innerWidth,innerHeight)}Yh.update(t,Mh,Uh);let a={...Cg,player:{pos:Z.pos,yaw:Z.yaw,inFort:vg()},daylight:K_,camera:Mh,mode:Kg.mode,raider:Hh,onMachineDown:e=>Hh&&I_(e),alert:e=>Q.toast(e),enabled:Kg.monsters!==!1,dead:gg.dead,hurtPlayer:yg};if(Dg&&Tg&&mg.update(t,a),dg.update(t,a),gg.update(t),Dg&&_g?.update(t,!X.raider.zoneAt(Math.floor(Z.pos.x),Math.floor(Z.pos.z)),gg.dead,Tg),Hh&&(q_-=t)<=0){q_=.5;let e=X.raider.zoneAt(Math.floor(Z.pos.x),Math.floor(Z.pos.z)),t=e?e.name:`Speranza`;t!==J_&&(J_!==null&&Q.toast(`— ${t} —`),J_=t)}pg=Tg?dg.lookAt(Z.eye,Z.look):null;let o=Oh(`#talkHint`);o.classList.toggle(`hidden`,!pg),pg&&(o.textContent=`F · talk to ${pg.name}`);let s=Mh.position,c=X.getBlock(Math.floor(s.x),Math.floor(s.y),Math.floor(s.z))===q.WATER,l=Nh.update(Mh,Wh,t,c);K_=l.day;let u=.06+.94*l.day;if(Rh.uDaylight.value=u,Gh.intensity=.25+.75*u,Kh.intensity=1.6*l.day,Kh.position.copy(Z.pos).addScaledVector(l.sunDir,50),Kh.target.position.copy(Z.pos),Oh(`#underwater`).style.opacity=+!!c,Oh(`#edgeL`).style.opacity=Math.max(0,-Z.edgeX)*.8,Oh(`#edgeR`).style.opacity=Math.max(0,Z.edgeX)*.8,Uh.update(t,X,u),U_++,W_+=t,W_>=.5&&(G_=Math.round(U_/W_),U_=0,W_=0,!Oh(`#debug`).classList.contains(`hidden`))){let e=Z.pos;Oh(`#debug`).innerHTML=[`OmniCraft · ${G_} fps`,`XYZ: ${e.x.toFixed(1)} / ${e.y.toFixed(1)} / ${e.z.toFixed(1)}`,`Chunk: ${Math.floor(e.x/16)}, ${Math.floor(e.z/16)} · loaded ${X.chunks.size}`,`Looking at: ${$?mu[$.id].name:`-`}`,`Flying: ${Z.flying?`yes`:`no`} · Time: ${Math.floor(Wh*24)}:00`,`Seed: ${X.seed} · Monsters: ${mg.list.length}`].join(`<br>`)}Ph.render(l,Nh.sun.position,c),requestAnimationFrame(Y_)}requestAnimationFrame(Y_);