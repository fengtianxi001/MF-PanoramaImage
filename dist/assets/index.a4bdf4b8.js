var xo=Object.defineProperty;var bo=(s,e,t)=>e in s?xo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ln=(s,e,t)=>(bo(s,typeof e!="symbol"?e+"":e,t),t);const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};p();var global$1="",bg="./assets/bg.16f6fb63.jpg",__glob_2_0=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="141",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,FlatShading=1,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",KeepStencilOp=7680,AlwaysStencilFunc=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,n=o.length;a<n;a++)o[a].call(this,e);e.target=null}}}const _lut=[];for(let s=0;s<256;s++)_lut[s]=(s<16?"0":"")+s.toString(16);const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_lut[s&255]+_lut[s>>8&255]+_lut[s>>16&255]+_lut[s>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[r&255]+_lut[r>>8&255]+_lut[r>>16&255]+_lut[r>>24&255]).toLowerCase()}function clamp(s,e,t){return Math.max(e,Math.min(t,s))}function euclideanModulo(s,e){return(s%e+e)%e}function lerp(s,e,t){return(1-t)*s+t*e}function isPowerOfTwo(s){return(s&s-1)===0&&s!==0}function floorPowerOfTwo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Vector2{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,n=this.y-e.y;return this.x=a*r-n*o+e.x,this.y=a*o+n*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,o,a,n,l,g,_){const v=this.elements;return v[0]=e,v[1]=o,v[2]=l,v[3]=t,v[4]=a,v[5]=g,v[6]=r,v[7]=n,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,n=r[0],l=r[3],g=r[6],_=r[1],v=r[4],y=r[7],M=r[2],E=r[5],T=r[8],w=o[0],b=o[3],C=o[6],D=o[1],k=o[4],z=o[7],B=o[2],P=o[5],U=o[8];return a[0]=n*w+l*D+g*B,a[3]=n*b+l*k+g*P,a[6]=n*C+l*z+g*U,a[1]=_*w+v*D+y*B,a[4]=_*b+v*k+y*P,a[7]=_*C+v*z+y*U,a[2]=M*w+E*D+T*B,a[5]=M*b+E*k+T*P,a[8]=M*C+E*z+T*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],n=e[4],l=e[5],g=e[6],_=e[7],v=e[8];return t*n*v-t*l*_-r*a*v+r*l*g+o*a*_-o*n*g}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],n=e[4],l=e[5],g=e[6],_=e[7],v=e[8],y=v*n-l*_,M=l*g-v*a,E=_*a-n*g,T=t*y+r*M+o*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=y*w,e[1]=(o*_-v*r)*w,e[2]=(l*r-o*n)*w,e[3]=M*w,e[4]=(v*t-o*g)*w,e[5]=(o*a-l*t)*w,e[6]=E*w,e[7]=(r*g-_*t)*w,e[8]=(n*t-r*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,n,l){const g=Math.cos(a),_=Math.sin(a);return this.set(r*g,r*_,-r*(g*n+_*l)+n+e,-o*_,o*g,-o*(-_*n+g*l)+l+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),o=this.elements,a=o[0],n=o[3],l=o[6],g=o[1],_=o[4],v=o[7];return o[0]=t*a+r*g,o[3]=t*n+r*_,o[6]=t*l+r*v,o[1]=-r*a+t*g,o[4]=-r*n+t*_,o[7]=-r*l+t*v,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function arrayNeedsUint32(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function createElementNS(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function SRGBToLinear(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function LinearToSRGB(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const FN={[SRGBColorSpace]:{[LinearSRGBColorSpace]:SRGBToLinear},[LinearSRGBColorSpace]:{[SRGBColorSpace]:LinearToSRGB}},ColorManagement={legacyMode:!0,get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(FN[e]&&FN[e][t]!==void 0){const r=FN[e][t];return s.r=r(s.r),s.g=r(s.g),s.b=r(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},_colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_rgb={r:0,g:0,b:0},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function toComponents(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Color{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=LinearSRGBColorSpace){return this.r=e,this.g=t,this.b=r,ColorManagement.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=LinearSRGBColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),r=clamp(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,n=2*r-a;this.r=hue2rgb(n,a,e+1/3),this.g=hue2rgb(n,a,e),this.b=hue2rgb(n,a,e-1/3)}return ColorManagement.toWorkingColorSpace(this,o),this}setStyle(e,t=SRGBColorSpace){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const n=o[1],l=o[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ColorManagement.toWorkingColorSpace(this,t),r(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ColorManagement.toWorkingColorSpace(this,t),r(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const g=parseFloat(a[1])/360,_=parseInt(a[2],10)/100,v=parseInt(a[3],10)/100;return r(a[4]),this.setHSL(g,_,v,t)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],n=a.length;if(n===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ColorManagement.toWorkingColorSpace(this,t),this;if(n===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ColorManagement.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=SRGBColorSpace){const r=_colorKeywords[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),e),clamp(_rgb.r*255,0,255)<<16^clamp(_rgb.g*255,0,255)<<8^clamp(_rgb.b*255,0,255)<<0}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=LinearSRGBColorSpace){ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),t);const r=_rgb.r,o=_rgb.g,a=_rgb.b,n=Math.max(r,o,a),l=Math.min(r,o,a);let g,_;const v=(l+n)/2;if(l===n)g=0,_=0;else{const y=n-l;switch(_=v<=.5?y/(n+l):y/(2-n-l),n){case r:g=(o-a)/y+(o<a?6:0);break;case o:g=(a-r)/y+2;break;case a:g=(r-o)/y+4;break}g/=6}return e.h=g,e.s=_,e.l=v,e}getRGB(e,t=LinearSRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),t),e.r=_rgb.r,e.g=_rgb.g,e.b=_rgb.b,e}getStyle(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),e),e!==SRGBColorSpace?`color(${e} ${_rgb.r} ${_rgb.g} ${_rgb.b})`:`rgb(${_rgb.r*255|0},${_rgb.g*255|0},${_rgb.b*255|0})`}offsetHSL(e,t,r){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=t,_hslA.l+=r,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const r=lerp(_hslA.h,_hslB.h,t),o=lerp(_hslA.s,_hslB.s,t),a=lerp(_hslA.l,_hslB.l,t);return this.setHSL(r,o,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Color.NAMES=_colorKeywords;let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const r=_canvas.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let n=0;n<a.length;n++)a[n]=SRGBToLinear(a[n]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(SRGBToLinear(t[r]/255)*255):t[r]=SRGBToLinear(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Source{constructor(e=null){this.isSource=!0,this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let n=0,l=o.length;n<l;n++)o[n].isDataTexture?a.push(serializeImage(o[n].image)):a.push(serializeImage(o[n]))}else a=serializeImage(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function serializeImage(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ImageUtils.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,r=ClampToEdgeWrapping,o=ClampToEdgeWrapping,a=LinearFilter,n=LinearMipmapLinearFilter,l=RGBAFormat,g=UnsignedByteType,_=1,v=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=n,this.anisotropy=_,this.format=l,this.internalFormat=null,this.type=g,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;class Vector4{constructor(e=0,t=0,r=0,o=1){this.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*o+n[12]*a,this.y=n[1]*t+n[5]*r+n[9]*o+n[13]*a,this.z=n[2]*t+n[6]*r+n[10]*o+n[14]*a,this.w=n[3]*t+n[7]*r+n[11]*o+n[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const g=e.elements,_=g[0],v=g[4],y=g[8],M=g[1],E=g[5],T=g[9],w=g[2],b=g[6],C=g[10];if(Math.abs(v-M)<.01&&Math.abs(y-w)<.01&&Math.abs(T-b)<.01){if(Math.abs(v+M)<.1&&Math.abs(y+w)<.1&&Math.abs(T+b)<.1&&Math.abs(_+E+C-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(_+1)/2,z=(E+1)/2,B=(C+1)/2,P=(v+M)/4,U=(y+w)/4,R=(T+b)/4;return k>z&&k>B?k<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(k),o=P/r,a=U/r):z>B?z<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(z),r=P/o,a=R/o):B<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),r=U/a,o=R/a),this.set(r,o,a,t),this}let D=Math.sqrt((b-T)*(b-T)+(y-w)*(y-w)+(M-v)*(M-v));return Math.abs(D)<.001&&(D=1),this.x=(b-T)/D,this.y=(y-w)/D,this.z=(M-v)/D,this.w=Math.acos((_+E+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(e,t,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const o={width:e,height:t,depth:1};this.texture=new Texture(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:LinearFilter,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerp(e,t,r,o){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(e,t,o)}static slerpFlat(e,t,r,o,a,n,l){let g=r[o+0],_=r[o+1],v=r[o+2],y=r[o+3];const M=a[n+0],E=a[n+1],T=a[n+2],w=a[n+3];if(l===0){e[t+0]=g,e[t+1]=_,e[t+2]=v,e[t+3]=y;return}if(l===1){e[t+0]=M,e[t+1]=E,e[t+2]=T,e[t+3]=w;return}if(y!==w||g!==M||_!==E||v!==T){let b=1-l;const C=g*M+_*E+v*T+y*w,D=C>=0?1:-1,k=1-C*C;if(k>Number.EPSILON){const B=Math.sqrt(k),P=Math.atan2(B,C*D);b=Math.sin(b*P)/B,l=Math.sin(l*P)/B}const z=l*D;if(g=g*b+M*z,_=_*b+E*z,v=v*b+T*z,y=y*b+w*z,b===1-l){const B=1/Math.sqrt(g*g+_*_+v*v+y*y);g*=B,_*=B,v*=B,y*=B}}e[t]=g,e[t+1]=_,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,a,n){const l=r[o],g=r[o+1],_=r[o+2],v=r[o+3],y=a[n],M=a[n+1],E=a[n+2],T=a[n+3];return e[t]=l*T+v*y+g*E-_*M,e[t+1]=g*T+v*M+_*y-l*E,e[t+2]=_*T+v*E+l*M-g*y,e[t+3]=v*T-l*y-g*M-_*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,o=e._y,a=e._z,n=e._order,l=Math.cos,g=Math.sin,_=l(r/2),v=l(o/2),y=l(a/2),M=g(r/2),E=g(o/2),T=g(a/2);switch(n){case"XYZ":this._x=M*v*y+_*E*T,this._y=_*E*y-M*v*T,this._z=_*v*T+M*E*y,this._w=_*v*y-M*E*T;break;case"YXZ":this._x=M*v*y+_*E*T,this._y=_*E*y-M*v*T,this._z=_*v*T-M*E*y,this._w=_*v*y+M*E*T;break;case"ZXY":this._x=M*v*y-_*E*T,this._y=_*E*y+M*v*T,this._z=_*v*T+M*E*y,this._w=_*v*y-M*E*T;break;case"ZYX":this._x=M*v*y-_*E*T,this._y=_*E*y+M*v*T,this._z=_*v*T-M*E*y,this._w=_*v*y+M*E*T;break;case"YZX":this._x=M*v*y+_*E*T,this._y=_*E*y+M*v*T,this._z=_*v*T-M*E*y,this._w=_*v*y-M*E*T;break;case"XZY":this._x=M*v*y-_*E*T,this._y=_*E*y-M*v*T,this._z=_*v*T+M*E*y,this._w=_*v*y+M*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],n=t[1],l=t[5],g=t[9],_=t[2],v=t[6],y=t[10],M=r+l+y;if(M>0){const E=.5/Math.sqrt(M+1);this._w=.25/E,this._x=(v-g)*E,this._y=(a-_)*E,this._z=(n-o)*E}else if(r>l&&r>y){const E=2*Math.sqrt(1+r-l-y);this._w=(v-g)/E,this._x=.25*E,this._y=(o+n)/E,this._z=(a+_)/E}else if(l>y){const E=2*Math.sqrt(1+l-r-y);this._w=(a-_)/E,this._x=(o+n)/E,this._y=.25*E,this._z=(g+v)/E}else{const E=2*Math.sqrt(1+y-r-l);this._w=(n-o)/E,this._x=(a+_)/E,this._y=(g+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,n=e._w,l=t._x,g=t._y,_=t._z,v=t._w;return this._x=r*v+n*l+o*_-a*g,this._y=o*v+n*g+a*l-r*_,this._z=a*v+n*_+r*g-o*l,this._w=n*v-r*l-o*g-a*_,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,n=this._w;let l=n*e._w+r*e._x+o*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=n,this._x=r,this._y=o,this._z=a,this;const g=1-l*l;if(g<=Number.EPSILON){const E=1-t;return this._w=E*n+t*this._w,this._x=E*r+t*this._x,this._y=E*o+t*this._y,this._z=E*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const _=Math.sqrt(g),v=Math.atan2(_,l),y=Math.sin((1-t)*v)/_,M=Math.sin(t*v)/_;return this._w=n*y+this._w*M,this._x=r*y+this._x*M,this._y=o*y+this._y*M,this._z=a*y+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),r*Math.sin(a),r*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,r=0){this.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,n=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*n,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*n,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*n,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,n=e.y,l=e.z,g=e.w,_=g*t+n*o-l*r,v=g*r+l*t-a*o,y=g*o+a*r-n*t,M=-a*t-n*r-l*o;return this.x=_*g+M*-a+v*-l-y*-n,this.y=v*g+M*-n+y*-a-_*-l,this.z=y*g+M*-l+_*-n-v*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,n=t.x,l=t.y,g=t.z;return this.x=o*g-a*l,this.y=a*n-r*g,this.z=r*l-o*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(clamp(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,o=1/0,a=-1/0,n=-1/0,l=-1/0;for(let g=0,_=e.length;g<_;g+=3){const v=e[g],y=e[g+1],M=e[g+2];v<t&&(t=v),y<r&&(r=y),M<o&&(o=M),v>a&&(a=v),y>n&&(n=y),M>l&&(l=M)}return this.min.set(t,r,o),this.max.set(a,n,l),this}setFromBufferAttribute(e){let t=1/0,r=1/0,o=1/0,a=-1/0,n=-1/0,l=-1/0;for(let g=0,_=e.count;g<_;g++){const v=e.getX(g),y=e.getY(g),M=e.getZ(g);v<t&&(t=v),y<r&&(r=y),M<o&&(o=M),v>a&&(a=v),y>n&&(n=y),M>l&&(l=M)}return this.min.set(t,r,o),this.max.set(a,n,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(t&&r.attributes!=null&&r.attributes.position!==void 0){const a=r.attributes.position;for(let n=0,l=a.count;n<l;n++)_vector$b.fromBufferAttribute(a,n).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b)}else r.boundingBox===null&&r.computeBoundingBox(),_box$3.copy(r.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);const o=e.children;for(let a=0,n=o.length;a<n;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$3.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$3,_v1$7),_f2.subVectors(_v0$2,_v2$3);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$3,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$3,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$3,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _vector$b.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$3=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(s,e,t,r,o){for(let a=0,n=s.length-3;a<=n;a+=3){_testAxis.fromArray(s,a);const l=o.x*Math.abs(_testAxis.x)+o.y*Math.abs(_testAxis.y)+o.z*Math.abs(_testAxis.z),g=e.dot(_testAxis),_=t.dot(_testAxis),v=r.dot(_testAxis);if(Math.max(-Math.max(g,_,v),Math.min(g,_,v))>l)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_toFarthestPoint=new Vector3,_toPoint=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_box$2.setFromPoints(e).getCenter(r);let o=0;for(let a=0,n=e.length;a<n;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){_toPoint.subVectors(e,this.center);const t=_toPoint.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.add(_toPoint.multiplyScalar(o/r)),this.radius+=o}return this}union(e){return this.center.equals(e.center)===!0?_toFarthestPoint.set(0,0,1).multiplyScalar(e.radius):_toFarthestPoint.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_toFarthestPoint)),this.expandByPoint(_v1$6.copy(e.center).sub(_toFarthestPoint)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const a=e.distanceTo(t)*.5,n=-this.direction.dot(_segDir),l=_diff.dot(this.direction),g=-_diff.dot(_segDir),_=_diff.lengthSq(),v=Math.abs(1-n*n);let y,M,E,T;if(v>0)if(y=n*g-l,M=n*l-g,T=a*v,y>=0)if(M>=-T)if(M<=T){const w=1/v;y*=w,M*=w,E=y*(y+n*M+2*l)+M*(n*y+M+2*g)+_}else M=a,y=Math.max(0,-(n*M+l)),E=-y*y+M*(M+2*g)+_;else M=-a,y=Math.max(0,-(n*M+l)),E=-y*y+M*(M+2*g)+_;else M<=-T?(y=Math.max(0,-(-n*a+l)),M=y>0?-a:Math.min(Math.max(-a,-g),a),E=-y*y+M*(M+2*g)+_):M<=T?(y=0,M=Math.min(Math.max(-a,-g),a),E=M*(M+2*g)+_):(y=Math.max(0,-(n*a+l)),M=y>0?a:Math.min(Math.max(-a,-g),a),E=-y*y+M*(M+2*g)+_);else M=n>0?-a:a,y=Math.max(0,-(n*M+l)),E=-y*y+M*(M+2*g)+_;return r&&r.copy(this.direction).multiplyScalar(y).add(this.origin),o&&o.copy(_segDir).multiplyScalar(M).add(_segCenter),E}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const r=_vector$a.dot(this.direction),o=_vector$a.dot(_vector$a)-r*r,a=e.radius*e.radius;if(o>a)return null;const n=Math.sqrt(a-o),l=r-n,g=r+n;return l<0&&g<0?null:l<0?this.at(g,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,n,l,g;const _=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,M=this.origin;return _>=0?(r=(e.min.x-M.x)*_,o=(e.max.x-M.x)*_):(r=(e.max.x-M.x)*_,o=(e.min.x-M.x)*_),v>=0?(a=(e.min.y-M.y)*v,n=(e.max.y-M.y)*v):(a=(e.max.y-M.y)*v,n=(e.min.y-M.y)*v),r>n||a>o||((a>r||r!==r)&&(r=a),(n<o||o!==o)&&(o=n),y>=0?(l=(e.min.z-M.z)*y,g=(e.max.z-M.z)*y):(l=(e.max.z-M.z)*y,g=(e.min.z-M.z)*y),r>g||l>o)||((l>r||r!==r)&&(r=l),(g<o||o!==o)&&(o=g),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,r,o,a){_edge1.subVectors(t,e),_edge2.subVectors(r,e),_normal$1.crossVectors(_edge1,_edge2);let n=this.direction.dot(_normal$1),l;if(n>0){if(o)return null;l=1}else if(n<0)l=-1,n=-n;else return null;_diff.subVectors(this.origin,e);const g=l*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(g<0)return null;const _=l*this.direction.dot(_edge1.cross(_diff));if(_<0||g+_>n)return null;const v=-l*_diff.dot(_normal$1);return v<0?null:this.at(v/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,o,a,n,l,g,_,v,y,M,E,T,w,b){const C=this.elements;return C[0]=e,C[4]=t,C[8]=r,C[12]=o,C[1]=a,C[5]=n,C[9]=l,C[13]=g,C[2]=_,C[6]=v,C[10]=y,C[14]=M,C[3]=E,C[7]=T,C[11]=w,C[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/_v1$5.setFromMatrixColumn(e,0).length(),a=1/_v1$5.setFromMatrixColumn(e,1).length(),n=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,r=e.x,o=e.y,a=e.z,n=Math.cos(r),l=Math.sin(r),g=Math.cos(o),_=Math.sin(o),v=Math.cos(a),y=Math.sin(a);if(e.order==="XYZ"){const M=n*v,E=n*y,T=l*v,w=l*y;t[0]=g*v,t[4]=-g*y,t[8]=_,t[1]=E+T*_,t[5]=M-w*_,t[9]=-l*g,t[2]=w-M*_,t[6]=T+E*_,t[10]=n*g}else if(e.order==="YXZ"){const M=g*v,E=g*y,T=_*v,w=_*y;t[0]=M+w*l,t[4]=T*l-E,t[8]=n*_,t[1]=n*y,t[5]=n*v,t[9]=-l,t[2]=E*l-T,t[6]=w+M*l,t[10]=n*g}else if(e.order==="ZXY"){const M=g*v,E=g*y,T=_*v,w=_*y;t[0]=M-w*l,t[4]=-n*y,t[8]=T+E*l,t[1]=E+T*l,t[5]=n*v,t[9]=w-M*l,t[2]=-n*_,t[6]=l,t[10]=n*g}else if(e.order==="ZYX"){const M=n*v,E=n*y,T=l*v,w=l*y;t[0]=g*v,t[4]=T*_-E,t[8]=M*_+w,t[1]=g*y,t[5]=w*_+M,t[9]=E*_-T,t[2]=-_,t[6]=l*g,t[10]=n*g}else if(e.order==="YZX"){const M=n*g,E=n*_,T=l*g,w=l*_;t[0]=g*v,t[4]=w-M*y,t[8]=T*y+E,t[1]=y,t[5]=n*v,t[9]=-l*v,t[2]=-_*v,t[6]=E*y+T,t[10]=M-w*y}else if(e.order==="XZY"){const M=n*g,E=n*_,T=l*g,w=l*_;t[0]=g*v,t[4]=-y,t[8]=_*v,t[1]=M*y+w,t[5]=n*v,t[9]=E*y-T,t[2]=T*y-E,t[6]=l*v,t[10]=w*y+M}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,r){const o=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(r,_z),_x.lengthSq()===0&&(Math.abs(r.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(r,_z)),_x.normalize(),_y.crossVectors(_z,_x),o[0]=_x.x,o[4]=_y.x,o[8]=_z.x,o[1]=_x.y,o[5]=_y.y,o[9]=_z.y,o[2]=_x.z,o[6]=_y.z,o[10]=_z.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,n=r[0],l=r[4],g=r[8],_=r[12],v=r[1],y=r[5],M=r[9],E=r[13],T=r[2],w=r[6],b=r[10],C=r[14],D=r[3],k=r[7],z=r[11],B=r[15],P=o[0],U=o[4],R=o[8],V=o[12],Q=o[1],J=o[5],ve=o[9],le=o[13],ee=o[2],he=o[6],ue=o[10],$=o[14],K=o[3],ne=o[7],fe=o[11],se=o[15];return a[0]=n*P+l*Q+g*ee+_*K,a[4]=n*U+l*J+g*he+_*ne,a[8]=n*R+l*ve+g*ue+_*fe,a[12]=n*V+l*le+g*$+_*se,a[1]=v*P+y*Q+M*ee+E*K,a[5]=v*U+y*J+M*he+E*ne,a[9]=v*R+y*ve+M*ue+E*fe,a[13]=v*V+y*le+M*$+E*se,a[2]=T*P+w*Q+b*ee+C*K,a[6]=T*U+w*J+b*he+C*ne,a[10]=T*R+w*ve+b*ue+C*fe,a[14]=T*V+w*le+b*$+C*se,a[3]=D*P+k*Q+z*ee+B*K,a[7]=D*U+k*J+z*he+B*ne,a[11]=D*R+k*ve+z*ue+B*fe,a[15]=D*V+k*le+z*$+B*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],n=e[1],l=e[5],g=e[9],_=e[13],v=e[2],y=e[6],M=e[10],E=e[14],T=e[3],w=e[7],b=e[11],C=e[15];return T*(+a*g*y-o*_*y-a*l*M+r*_*M+o*l*E-r*g*E)+w*(+t*g*E-t*_*M+a*n*M-o*n*E+o*_*v-a*g*v)+b*(+t*_*y-t*l*E-a*n*y+r*n*E+a*l*v-r*_*v)+C*(-o*l*v-t*g*y+t*l*M+o*n*y-r*n*M+r*g*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],n=e[4],l=e[5],g=e[6],_=e[7],v=e[8],y=e[9],M=e[10],E=e[11],T=e[12],w=e[13],b=e[14],C=e[15],D=y*b*_-w*M*_+w*g*E-l*b*E-y*g*C+l*M*C,k=T*M*_-v*b*_-T*g*E+n*b*E+v*g*C-n*M*C,z=v*w*_-T*y*_+T*l*E-n*w*E-v*l*C+n*y*C,B=T*y*g-v*w*g-T*l*M+n*w*M+v*l*b-n*y*b,P=t*D+r*k+o*z+a*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=D*U,e[1]=(w*M*a-y*b*a-w*o*E+r*b*E+y*o*C-r*M*C)*U,e[2]=(l*b*a-w*g*a+w*o*_-r*b*_-l*o*C+r*g*C)*U,e[3]=(y*g*a-l*M*a-y*o*_+r*M*_+l*o*E-r*g*E)*U,e[4]=k*U,e[5]=(v*b*a-T*M*a+T*o*E-t*b*E-v*o*C+t*M*C)*U,e[6]=(T*g*a-n*b*a-T*o*_+t*b*_+n*o*C-t*g*C)*U,e[7]=(n*M*a-v*g*a+v*o*_-t*M*_-n*o*E+t*g*E)*U,e[8]=z*U,e[9]=(T*y*a-v*w*a-T*r*E+t*w*E+v*r*C-t*y*C)*U,e[10]=(n*w*a-T*l*a+T*r*_-t*w*_-n*r*C+t*l*C)*U,e[11]=(v*l*a-n*y*a-v*r*_+t*y*_+n*r*E-t*l*E)*U,e[12]=B*U,e[13]=(v*w*o-T*y*o+T*r*M-t*w*M-v*r*b+t*y*b)*U,e[14]=(T*l*o-n*w*o-T*r*g+t*w*g+n*r*b-t*l*b)*U,e[15]=(n*y*o-v*l*o+v*r*g-t*y*g-n*r*M+t*l*M)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,n=e.x,l=e.y,g=e.z,_=a*n,v=a*l;return this.set(_*n+r,_*l-o*g,_*g+o*l,0,_*l+o*g,v*l+r,v*g-o*n,0,_*g-o*l,v*g+o*n,a*g*g+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,n){return this.set(1,r,a,0,e,1,n,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,n=t._y,l=t._z,g=t._w,_=a+a,v=n+n,y=l+l,M=a*_,E=a*v,T=a*y,w=n*v,b=n*y,C=l*y,D=g*_,k=g*v,z=g*y,B=r.x,P=r.y,U=r.z;return o[0]=(1-(w+C))*B,o[1]=(E+z)*B,o[2]=(T-k)*B,o[3]=0,o[4]=(E-z)*P,o[5]=(1-(M+C))*P,o[6]=(b+D)*P,o[7]=0,o[8]=(T+k)*U,o[9]=(b-D)*U,o[10]=(1-(M+w))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let a=_v1$5.set(o[0],o[1],o[2]).length();const n=_v1$5.set(o[4],o[5],o[6]).length(),l=_v1$5.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],_m1$2.copy(this);const _=1/a,v=1/n,y=1/l;return _m1$2.elements[0]*=_,_m1$2.elements[1]*=_,_m1$2.elements[2]*=_,_m1$2.elements[4]*=v,_m1$2.elements[5]*=v,_m1$2.elements[6]*=v,_m1$2.elements[8]*=y,_m1$2.elements[9]*=y,_m1$2.elements[10]*=y,t.setFromRotationMatrix(_m1$2),r.x=a,r.y=n,r.z=l,this}makePerspective(e,t,r,o,a,n){n===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const l=this.elements,g=2*a/(t-e),_=2*a/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o),M=-(n+a)/(n-a),E=-2*n*a/(n-a);return l[0]=g,l[4]=0,l[8]=v,l[12]=0,l[1]=0,l[5]=_,l[9]=y,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,o,a,n){const l=this.elements,g=1/(t-e),_=1/(r-o),v=1/(n-a),y=(t+e)*g,M=(r+o)*_,E=(n+a)*v;return l[0]=2*g,l[4]=0,l[8]=0,l[12]=-y,l[1]=0,l[5]=2*_,l[9]=0,l[13]=-M,l[2]=0,l[6]=0,l[10]=-2*v,l[14]=-E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,r=0,o=Euler.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],n=o[4],l=o[8],g=o[1],_=o[5],v=o[9],y=o[2],M=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-n,a)):(this._x=Math.atan2(M,_),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(l,E),this._z=Math.atan2(g,_)):(this._y=Math.atan2(-y,a),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-n,_)):(this._y=0,this._z=Math.atan2(g,a));break;case"ZYX":this._y=Math.asin(-clamp(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(M,E),this._z=Math.atan2(g,a)):(this._x=0,this._z=Math.atan2(-n,_));break;case"YZX":this._z=Math.asin(clamp(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-y,a)):(this._x=0,this._y=Math.atan2(l,E));break;case"XZY":this._z=Math.asin(-clamp(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(M,_),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return _matrix$1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$1,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Euler.DefaultOrder="XYZ";Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DefaultUp.clone();const e=new Vector3,t=new Euler,r=new Quaternion,o=new Vector3(1,1,1);function a(){r.setFromEuler(t,!1)}function n(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_target.copy(e):_target.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),o&&(_m1$1.extractRotation(o.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,n=o.length;a<n;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(l,g){return l[g.uuid]===void 0&&(l[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const g=l.shapes;if(Array.isArray(g))for(let _=0,v=g.length;_<v;_++){const y=g[_];a(e.shapes,y)}else a(e.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let g=0,_=this.material.length;g<_;g++)l.push(a(e.materials,this.material[g]));o.material=l}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let l=0;l<this.children.length;l++)o.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let l=0;l<this.animations.length;l++){const g=this.animations[l];o.animations.push(a(e.animations,g))}}if(t){const l=n(e.geometries),g=n(e.materials),_=n(e.textures),v=n(e.images),y=n(e.shapes),M=n(e.skeletons),E=n(e.animations),T=n(e.nodes);l.length>0&&(r.geometries=l),g.length>0&&(r.materials=g),_.length>0&&(r.textures=_),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),M.length>0&&(r.skeletons=M),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=o,r;function n(l){const g=[];for(const _ in l){const v=l[_];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Object3D.DefaultUp=new Vector3(0,1,0);Object3D.DefaultMatrixAutoUpdate=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,r=new Vector3){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),_v0$1.subVectors(e,t),o.cross(_v0$1);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){_v0$1.subVectors(o,t),_v1$3.subVectors(r,t),_v2$2.subVectors(e,t);const n=_v0$1.dot(_v0$1),l=_v0$1.dot(_v1$3),g=_v0$1.dot(_v2$2),_=_v1$3.dot(_v1$3),v=_v1$3.dot(_v2$2),y=n*_-l*l;if(y===0)return a.set(-2,-1,-1);const M=1/y,E=(_*g-l*v)*M,T=(n*v-l*g)*M;return a.set(1-E-T,T,E)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,t,r,o,a,n,l,g){return this.getBarycoord(e,t,r,o,_v3$1),g.set(0,0),g.addScaledVector(a,_v3$1.x),g.addScaledVector(n,_v3$1.y),g.addScaledVector(l,_v3$1.z),g}static isFrontFacing(e,t,r,o){return _v0$1.subVectors(r,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,o,a){return Triangle.getUV(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let n,l;_vab.subVectors(o,r),_vac.subVectors(a,r),_vap.subVectors(e,r);const g=_vab.dot(_vap),_=_vac.dot(_vap);if(g<=0&&_<=0)return t.copy(r);_vbp.subVectors(e,o);const v=_vab.dot(_vbp),y=_vac.dot(_vbp);if(v>=0&&y<=v)return t.copy(o);const M=g*y-v*_;if(M<=0&&g>=0&&v<=0)return n=g/(g-v),t.copy(r).addScaledVector(_vab,n);_vcp.subVectors(e,a);const E=_vab.dot(_vcp),T=_vac.dot(_vcp);if(T>=0&&E<=T)return t.copy(a);const w=E*_-g*T;if(w<=0&&_>=0&&T<=0)return l=_/(_-T),t.copy(r).addScaledVector(_vac,l);const b=v*T-E*y;if(b<=0&&y-v>=0&&E-T>=0)return _vbc.subVectors(a,o),l=(y-v)/(y-v+(E-T)),t.copy(o).addScaledVector(_vbc,l);const C=1/(b+w+M);return n=w*C,l=M*C,t.copy(r).addScaledVector(_vab,n).addScaledVector(_vac,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===FlatShading;continue}const o=this[t];if(o===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(r.blending=this.blending),this.side!==FrontSide&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function o(a){const n=[];for(const l in a){const g=a[l];delete g.metadata,n.push(g)}return n}if(t){const a=o(e.textures),n=o(e.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Material.fromType=function(){return null};class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let n=e[o];n===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),n=new Color),t[r++]=n.r,t[r++]=n.g,t[r++]=n.b}return this}copyVector2sArray(e){const t=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let n=e[o];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),n=new Vector2),t[r++]=n.x,t[r++]=n.y}return this}copyVector3sArray(e){const t=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let n=e[o];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),n=new Vector3),t[r++]=n.x,t[r++]=n.y,t[r++]=n.z}return this}copyVector4sArray(e){const t=this.array;let r=0;for(let o=0,a=e.length;o<a;o++){let n=e[o];n===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),n=new Vector4),t[r++]=n.x,t[r++]=n.y,t[r++]=n.z,t[r++]=n.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,r){super(new Float32Array(e),t,r)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Matrix3().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,r){return _m1.makeTranslation(e,t,r),this.applyMatrix4(_m1),this}scale(e,t,r){return _m1.makeScale(e,t,r),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_box$1.setFromBufferAttribute(a),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const r=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(e),t)for(let a=0,n=t.length;a<n;a++){const l=t[a];_boxMorphTargets.setFromBufferAttribute(l),this.morphTargetsRelative?(_vector$8.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$8),_vector$8.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$8)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(r);let o=0;for(let a=0,n=e.count;a<n;a++)_vector$8.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(_vector$8));if(t)for(let a=0,n=t.length;a<n;a++){const l=t[a],g=this.morphTargetsRelative;for(let _=0,v=l.count;_<v;_++)_vector$8.fromBufferAttribute(l,_),g&&(_offset.fromBufferAttribute(e,_),_vector$8.add(_offset)),o=Math.max(o,r.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=t.position.array,a=t.normal.array,n=t.uv.array,l=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*l),4));const g=this.getAttribute("tangent").array,_=[],v=[];for(let Q=0;Q<l;Q++)_[Q]=new Vector3,v[Q]=new Vector3;const y=new Vector3,M=new Vector3,E=new Vector3,T=new Vector2,w=new Vector2,b=new Vector2,C=new Vector3,D=new Vector3;function k(Q,J,ve){y.fromArray(o,Q*3),M.fromArray(o,J*3),E.fromArray(o,ve*3),T.fromArray(n,Q*2),w.fromArray(n,J*2),b.fromArray(n,ve*2),M.sub(y),E.sub(y),w.sub(T),b.sub(T);const le=1/(w.x*b.y-b.x*w.y);!isFinite(le)||(C.copy(M).multiplyScalar(b.y).addScaledVector(E,-w.y).multiplyScalar(le),D.copy(E).multiplyScalar(w.x).addScaledVector(M,-b.x).multiplyScalar(le),_[Q].add(C),_[J].add(C),_[ve].add(C),v[Q].add(D),v[J].add(D),v[ve].add(D))}let z=this.groups;z.length===0&&(z=[{start:0,count:r.length}]);for(let Q=0,J=z.length;Q<J;++Q){const ve=z[Q],le=ve.start,ee=ve.count;for(let he=le,ue=le+ee;he<ue;he+=3)k(r[he+0],r[he+1],r[he+2])}const B=new Vector3,P=new Vector3,U=new Vector3,R=new Vector3;function V(Q){U.fromArray(a,Q*3),R.copy(U);const J=_[Q];B.copy(J),B.sub(U.multiplyScalar(U.dot(J))).normalize(),P.crossVectors(R,J);const le=P.dot(v[Q])<0?-1:1;g[Q*4]=B.x,g[Q*4+1]=B.y,g[Q*4+2]=B.z,g[Q*4+3]=le}for(let Q=0,J=z.length;Q<J;++Q){const ve=z[Q],le=ve.start,ee=ve.count;for(let he=le,ue=le+ee;he<ue;he+=3)V(r[he+0]),V(r[he+1]),V(r[he+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let M=0,E=r.count;M<E;M++)r.setXYZ(M,0,0,0);const o=new Vector3,a=new Vector3,n=new Vector3,l=new Vector3,g=new Vector3,_=new Vector3,v=new Vector3,y=new Vector3;if(e)for(let M=0,E=e.count;M<E;M+=3){const T=e.getX(M+0),w=e.getX(M+1),b=e.getX(M+2);o.fromBufferAttribute(t,T),a.fromBufferAttribute(t,w),n.fromBufferAttribute(t,b),v.subVectors(n,a),y.subVectors(o,a),v.cross(y),l.fromBufferAttribute(r,T),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,b),l.add(v),g.add(v),_.add(v),r.setXYZ(T,l.x,l.y,l.z),r.setXYZ(w,g.x,g.y,g.z),r.setXYZ(b,_.x,_.y,_.z)}else for(let M=0,E=t.count;M<E;M+=3)o.fromBufferAttribute(t,M+0),a.fromBufferAttribute(t,M+1),n.fromBufferAttribute(t,M+2),v.subVectors(n,a),y.subVectors(o,a),v.cross(y),r.setXYZ(M+0,v.x,v.y,v.z),r.setXYZ(M+1,v.x,v.y,v.z),r.setXYZ(M+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const o in r){if(e.attributes[o]===void 0)continue;const n=r[o].array,l=e.attributes[o],g=l.array,_=l.itemSize*t,v=Math.min(g.length,n.length-_);for(let y=0,M=_;y<v;y++,M++)n[M]=g[y]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(l,g){const _=l.array,v=l.itemSize,y=l.normalized,M=new _.constructor(g.length*v);let E=0,T=0;for(let w=0,b=g.length;w<b;w++){l.isInterleavedBufferAttribute?E=g[w]*l.data.stride+l.offset:E=g[w]*v;for(let C=0;C<v;C++)M[T++]=_[E++]}return new BufferAttribute(M,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,r=this.index.array,o=this.attributes;for(const l in o){const g=o[l],_=e(g,r);t.setAttribute(l,_)}const a=this.morphAttributes;for(const l in a){const g=[],_=a[l];for(let v=0,y=_.length;v<y;v++){const M=_[v],E=e(M,r);g.push(E)}t.morphAttributes[l]=g}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let l=0,g=n.length;l<g;l++){const _=n[l];t.addGroup(_.start,_.count,_.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const _ in g)g[_]!==void 0&&(e[_]=g[_]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const g in r){const _=r[g];e.data.attributes[g]=_.toJSON(e.data)}const o={};let a=!1;for(const g in this.morphAttributes){const _=this.morphAttributes[g],v=[];for(let y=0,M=_.length;y<M;y++){const E=_[y];v.push(E.toJSON(e.data))}v.length>0&&(o[g]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const _ in o){const v=o[_];this.setAttribute(_,v.clone(t))}const a=e.morphAttributes;for(const _ in a){const v=[],y=a[_];for(let M=0,E=y.length;M<E;M++)v.push(y[M].clone(t));this.morphAttributes[_]=v}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let _=0,v=n.length;_<v;_++){const y=n[_];this.addGroup(y.start,y.count,y.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$3=new Sphere,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_tempB=new Vector3,_tempC=new Vector3,_morphA=new Vector3,_morphB=new Vector3,_morphC=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=o.length;a<n;a++){const l=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),_sphere$3.copy(r.boundingSphere),_sphere$3.applyMatrix4(a),e.ray.intersectsSphere(_sphere$3)===!1)||(_inverseMatrix$2.copy(a).invert(),_ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),r.boundingBox!==null&&_ray$2.intersectsBox(r.boundingBox)===!1))return;let n;const l=r.index,g=r.attributes.position,_=r.morphAttributes.position,v=r.morphTargetsRelative,y=r.attributes.uv,M=r.attributes.uv2,E=r.groups,T=r.drawRange;if(l!==null)if(Array.isArray(o))for(let w=0,b=E.length;w<b;w++){const C=E[w],D=o[C.materialIndex],k=Math.max(C.start,T.start),z=Math.min(l.count,Math.min(C.start+C.count,T.start+T.count));for(let B=k,P=z;B<P;B+=3){const U=l.getX(B),R=l.getX(B+1),V=l.getX(B+2);n=checkBufferGeometryIntersection(this,D,e,_ray$2,g,_,v,y,M,U,R,V),n&&(n.faceIndex=Math.floor(B/3),n.face.materialIndex=C.materialIndex,t.push(n))}}else{const w=Math.max(0,T.start),b=Math.min(l.count,T.start+T.count);for(let C=w,D=b;C<D;C+=3){const k=l.getX(C),z=l.getX(C+1),B=l.getX(C+2);n=checkBufferGeometryIntersection(this,o,e,_ray$2,g,_,v,y,M,k,z,B),n&&(n.faceIndex=Math.floor(C/3),t.push(n))}}else if(g!==void 0)if(Array.isArray(o))for(let w=0,b=E.length;w<b;w++){const C=E[w],D=o[C.materialIndex],k=Math.max(C.start,T.start),z=Math.min(g.count,Math.min(C.start+C.count,T.start+T.count));for(let B=k,P=z;B<P;B+=3){const U=B,R=B+1,V=B+2;n=checkBufferGeometryIntersection(this,D,e,_ray$2,g,_,v,y,M,U,R,V),n&&(n.faceIndex=Math.floor(B/3),n.face.materialIndex=C.materialIndex,t.push(n))}}else{const w=Math.max(0,T.start),b=Math.min(g.count,T.start+T.count);for(let C=w,D=b;C<D;C+=3){const k=C,z=C+1,B=C+2;n=checkBufferGeometryIntersection(this,o,e,_ray$2,g,_,v,y,M,k,z,B),n&&(n.faceIndex=Math.floor(C/3),t.push(n))}}}}function checkIntersection(s,e,t,r,o,a,n,l){let g;if(e.side===BackSide?g=r.intersectTriangle(n,a,o,!0,l):g=r.intersectTriangle(o,a,n,e.side!==DoubleSide,l),g===null)return null;_intersectionPointWorld.copy(l),_intersectionPointWorld.applyMatrix4(s.matrixWorld);const _=t.ray.origin.distanceTo(_intersectionPointWorld);return _<t.near||_>t.far?null:{distance:_,point:_intersectionPointWorld.clone(),object:s}}function checkBufferGeometryIntersection(s,e,t,r,o,a,n,l,g,_,v,y){_vA$1.fromBufferAttribute(o,_),_vB$1.fromBufferAttribute(o,v),_vC$1.fromBufferAttribute(o,y);const M=s.morphTargetInfluences;if(a&&M){_morphA.set(0,0,0),_morphB.set(0,0,0),_morphC.set(0,0,0);for(let T=0,w=a.length;T<w;T++){const b=M[T],C=a[T];b!==0&&(_tempA.fromBufferAttribute(C,_),_tempB.fromBufferAttribute(C,v),_tempC.fromBufferAttribute(C,y),n?(_morphA.addScaledVector(_tempA,b),_morphB.addScaledVector(_tempB,b),_morphC.addScaledVector(_tempC,b)):(_morphA.addScaledVector(_tempA.sub(_vA$1),b),_morphB.addScaledVector(_tempB.sub(_vB$1),b),_morphC.addScaledVector(_tempC.sub(_vC$1),b)))}_vA$1.add(_morphA),_vB$1.add(_morphB),_vC$1.add(_morphC)}s.isSkinnedMesh&&(s.boneTransform(_,_vA$1),s.boneTransform(v,_vB$1),s.boneTransform(y,_vC$1));const E=checkIntersection(s,e,t,r,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(E){l&&(_uvA$1.fromBufferAttribute(l,_),_uvB$1.fromBufferAttribute(l,v),_uvC$1.fromBufferAttribute(l,y),E.uv=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),g&&(_uvA$1.fromBufferAttribute(g,_),_uvB$1.fromBufferAttribute(g,v),_uvC$1.fromBufferAttribute(g,y),E.uv2=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2));const T={a:_,b:v,c:y,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,T.normal),E.face=T}return E}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,r=1,o=1,a=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:n};const l=this;o=Math.floor(o),a=Math.floor(a),n=Math.floor(n);const g=[],_=[],v=[],y=[];let M=0,E=0;T("z","y","x",-1,-1,r,t,e,n,a,0),T("z","y","x",1,-1,r,t,-e,n,a,1),T("x","z","y",1,1,e,r,t,o,n,2),T("x","z","y",1,-1,e,r,-t,o,n,3),T("x","y","z",1,-1,e,t,r,o,a,4),T("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(g),this.setAttribute("position",new Float32BufferAttribute(_,3)),this.setAttribute("normal",new Float32BufferAttribute(v,3)),this.setAttribute("uv",new Float32BufferAttribute(y,2));function T(w,b,C,D,k,z,B,P,U,R,V){const Q=z/U,J=B/R,ve=z/2,le=B/2,ee=P/2,he=U+1,ue=R+1;let $=0,K=0;const ne=new Vector3;for(let fe=0;fe<ue;fe++){const se=fe*J-le;for(let Y=0;Y<he;Y++){const ce=Y*Q-ve;ne[w]=ce*D,ne[b]=se*k,ne[C]=ee,_.push(ne.x,ne.y,ne.z),ne[w]=0,ne[b]=0,ne[C]=P>0?1:-1,v.push(ne.x,ne.y,ne.z),y.push(Y/U),y.push(1-fe/R),$+=1}}for(let fe=0;fe<R;fe++)for(let se=0;se<U;se++){const Y=M+se+he*fe,ce=M+se+he*(fe+1),ge=M+(se+1)+he*(fe+1),q=M+(se+1)+he*fe;g.push(Y,ce,q),g.push(ce,ge,q),K+=6}l.addGroup(E,K,V),E+=K,M+=$}}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function mergeUniforms(s){const e={};for(let t=0;t<s.length;t++){const r=cloneUniforms(s[t]);for(const o in r)e[o]=r[o]}return e}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const n=this.uniforms[o].value;n&&n.isTexture?t.uniforms[o]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[o]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[o]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[o]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[o]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[o]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[o]={type:"m4",value:n.toArray()}:t.uniforms[o]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,o,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const n=this.view;if(this.view!==null&&this.view.enabled){const g=n.fullWidth,_=n.fullHeight;a+=n.offsetX*o/g,t-=n.offsetY*r/_,o*=n.width/g,r*=n.height/_}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new Vector3(1,0,0)),this.add(o);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Vector3(-1,0,0)),this.add(a);const n=new PerspectiveCamera(fov,aspect,e,t);n.layers=this.layers,n.up.set(0,0,1),n.lookAt(new Vector3(0,1,0)),this.add(n);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new Vector3(0,-1,0)),this.add(l);const g=new PerspectiveCamera(fov,aspect,e,t);g.layers=this.layers,g.up.set(0,-1,0),g.lookAt(new Vector3(0,0,1)),this.add(g);const _=new PerspectiveCamera(fov,aspect,e,t);_.layers=this.layers,_.up.set(0,-1,0),_.lookAt(new Vector3(0,0,-1)),this.add(_)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[o,a,n,l,g,_]=this.children,v=e.getRenderTarget(),y=e.toneMapping,M=e.xr.enabled;e.toneMapping=NoToneMapping,e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,o),e.setRenderTarget(r,1),e.render(t,a),e.setRenderTarget(r,2),e.render(t,n),e.setRenderTarget(r,3),e.render(t,l),e.setRenderTarget(r,4),e.render(t,g),r.texture.generateMipmaps=E,e.setRenderTarget(r,5),e.render(t,_),e.setRenderTarget(v),e.toneMapping=y,e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,r,o,a,n,l,g,_,v){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,r,o,a,n,l,g,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new CubeTexture(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new BoxGeometry(5,5,5),a=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:BackSide,blending:NoBlending});a.uniforms.tEquirect.value=t;const n=new Mesh(o,a),l=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,n),t.minFilter=l,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,r,o){const a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,o);e.setRenderTarget(a)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=_vector1.subVectors(r,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(_vector1),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(r).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_normalMatrix.getNormalMatrix(e),o=this.coplanarPoint(_vector1).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$2=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,r=new Plane,o=new Plane,a=new Plane,n=new Plane){this.planes=[e,t,r,o,a,n]}set(e,t,r,o,a,n){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(r),l[3].copy(o),l[4].copy(a),l[5].copy(n),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,o=r[0],a=r[1],n=r[2],l=r[3],g=r[4],_=r[5],v=r[6],y=r[7],M=r[8],E=r[9],T=r[10],w=r[11],b=r[12],C=r[13],D=r[14],k=r[15];return t[0].setComponents(l-o,y-g,w-M,k-b).normalize(),t[1].setComponents(l+o,y+g,w+M,k+b).normalize(),t[2].setComponents(l+a,y+_,w+E,k+C).normalize(),t[3].setComponents(l-a,y-_,w-E,k-C).normalize(),t[4].setComponents(l-n,y-v,w-T,k-D).normalize(),t[5].setComponents(l+n,y+v,w+T,k+D).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSprite(e){return _sphere$2.center.set(0,0,0),_sphere$2.radius=.7071067811865476,_sphere$2.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(_vector$7.x=o.normal.x>0?e.max.x:e.min.x,_vector$7.y=o.normal.y>0?e.max.y:e.min.y,_vector$7.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let s=null,e=!1,t=null,r=null;function o(a,n){t(a,n),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function WebGLAttributes(s,e){const t=e.isWebGL2,r=new WeakMap;function o(_,v){const y=_.array,M=_.usage,E=s.createBuffer();s.bindBuffer(v,E),s.bufferData(v,y,M),_.onUploadCallback();let T;if(y instanceof Float32Array)T=5126;else if(y instanceof Uint16Array)if(_.isFloat16BufferAttribute)if(t)T=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=5123;else if(y instanceof Int16Array)T=5122;else if(y instanceof Uint32Array)T=5125;else if(y instanceof Int32Array)T=5124;else if(y instanceof Int8Array)T=5120;else if(y instanceof Uint8Array)T=5121;else if(y instanceof Uint8ClampedArray)T=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:E,type:T,bytesPerElement:y.BYTES_PER_ELEMENT,version:_.version}}function a(_,v,y){const M=v.array,E=v.updateRange;s.bindBuffer(y,_),E.count===-1?s.bufferSubData(y,0,M):(t?s.bufferSubData(y,E.offset*M.BYTES_PER_ELEMENT,M,E.offset,E.count):s.bufferSubData(y,E.offset*M.BYTES_PER_ELEMENT,M.subarray(E.offset,E.offset+E.count)),E.count=-1)}function n(_){return _.isInterleavedBufferAttribute&&(_=_.data),r.get(_)}function l(_){_.isInterleavedBufferAttribute&&(_=_.data);const v=r.get(_);v&&(s.deleteBuffer(v.buffer),r.delete(_))}function g(_,v){if(_.isGLBufferAttribute){const M=r.get(_);(!M||M.version<_.version)&&r.set(_,{buffer:_.buffer,type:_.type,bytesPerElement:_.elementSize,version:_.version});return}_.isInterleavedBufferAttribute&&(_=_.data);const y=r.get(_);y===void 0?r.set(_,o(_,v)):y.version<_.version&&(a(y.buffer,_,v),y.version=_.version)}return{get:n,remove:l,update:g}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,n=t/2,l=Math.floor(r),g=Math.floor(o),_=l+1,v=g+1,y=e/l,M=t/g,E=[],T=[],w=[],b=[];for(let C=0;C<v;C++){const D=C*M-n;for(let k=0;k<_;k++){const z=k*y-a;T.push(z,-D,0),w.push(0,0,1),b.push(k/l),b.push(1-C/g)}}for(let C=0;C<g;C++)for(let D=0;D<l;D++){const k=D+_*C,z=D+_*(C+1),B=D+1+_*(C+1),P=D+1+_*C;E.push(k,z,P),E.push(z,B,P)}this.setIndex(E),this.setAttribute("position",new Float32BufferAttribute(T,3)),this.setAttribute("normal",new Float32BufferAttribute(w,3)),this.setAttribute("uv",new Float32BufferAttribute(b,2))}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$g=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fragment$d=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,fragment$8=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$6=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_vertex,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,uv2_pars_fragment,uv2_pars_vertex,uv2_vertex,worldpos_vertex,background_vert:vertex$g,background_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},cube:{uniforms:mergeUniforms([UniformsLib.envmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};function WebGLBackground(s,e,t,r,o,a){const n=new Color(0);let l=o===!0?0:1,g,_,v=null,y=0,M=null;function E(w,b){let C=!1,D=b.isScene===!0?b.background:null;D&&D.isTexture&&(D=e.get(D));const k=s.xr,z=k.getSession&&k.getSession();z&&z.environmentBlendMode==="additive"&&(D=null),D===null?T(n,l):D&&D.isColor&&(T(D,1),C=!0),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),D&&(D.isCubeTexture||D.mapping===CubeUVReflectionMapping)?(_===void 0&&(_=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.cube.uniforms),vertexShader:ShaderLib.cube.vertexShader,fragmentShader:ShaderLib.cube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,(v!==D||y!==D.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=D,y=D.version,M=s.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(g===void 0&&(g=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=D,D.matrixAutoUpdate===!0&&D.updateMatrix(),g.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||y!==D.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=D,y=D.version,M=s.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null))}function T(w,b){t.buffers.color.setClear(w.r,w.g,w.b,b,a)}return{getClearColor:function(){return n},setClearColor:function(w,b=1){n.set(w),l=b,T(n,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,T(n,l)},render:E}}function WebGLBindingStates(s,e,t,r){const o=s.getParameter(34921),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),n=r.isWebGL2||a!==null,l={},g=b(null);let _=g,v=!1;function y(ee,he,ue,$,K){let ne=!1;if(n){const fe=w($,ue,he);_!==fe&&(_=fe,E(_.object)),ne=C(ee,$,ue,K),ne&&D(ee,$,ue,K)}else{const fe=he.wireframe===!0;(_.geometry!==$.id||_.program!==ue.id||_.wireframe!==fe)&&(_.geometry=$.id,_.program=ue.id,_.wireframe=fe,ne=!0)}K!==null&&t.update(K,34963),(ne||v)&&(v=!1,R(ee,he,ue,$),K!==null&&s.bindBuffer(34963,t.get(K).buffer))}function M(){return r.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function E(ee){return r.isWebGL2?s.bindVertexArray(ee):a.bindVertexArrayOES(ee)}function T(ee){return r.isWebGL2?s.deleteVertexArray(ee):a.deleteVertexArrayOES(ee)}function w(ee,he,ue){const $=ue.wireframe===!0;let K=l[ee.id];K===void 0&&(K={},l[ee.id]=K);let ne=K[he.id];ne===void 0&&(ne={},K[he.id]=ne);let fe=ne[$];return fe===void 0&&(fe=b(M()),ne[$]=fe),fe}function b(ee){const he=[],ue=[],$=[];for(let K=0;K<o;K++)he[K]=0,ue[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:he,enabledAttributes:ue,attributeDivisors:$,object:ee,attributes:{},index:null}}function C(ee,he,ue,$){const K=_.attributes,ne=he.attributes;let fe=0;const se=ue.getAttributes();for(const Y in se)if(se[Y].location>=0){const ge=K[Y];let q=ne[Y];if(q===void 0&&(Y==="instanceMatrix"&&ee.instanceMatrix&&(q=ee.instanceMatrix),Y==="instanceColor"&&ee.instanceColor&&(q=ee.instanceColor)),ge===void 0||ge.attribute!==q||q&&ge.data!==q.data)return!0;fe++}return _.attributesNum!==fe||_.index!==$}function D(ee,he,ue,$){const K={},ne=he.attributes;let fe=0;const se=ue.getAttributes();for(const Y in se)if(se[Y].location>=0){let ge=ne[Y];ge===void 0&&(Y==="instanceMatrix"&&ee.instanceMatrix&&(ge=ee.instanceMatrix),Y==="instanceColor"&&ee.instanceColor&&(ge=ee.instanceColor));const q={};q.attribute=ge,ge&&ge.data&&(q.data=ge.data),K[Y]=q,fe++}_.attributes=K,_.attributesNum=fe,_.index=$}function k(){const ee=_.newAttributes;for(let he=0,ue=ee.length;he<ue;he++)ee[he]=0}function z(ee){B(ee,0)}function B(ee,he){const ue=_.newAttributes,$=_.enabledAttributes,K=_.attributeDivisors;ue[ee]=1,$[ee]===0&&(s.enableVertexAttribArray(ee),$[ee]=1),K[ee]!==he&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](ee,he),K[ee]=he)}function P(){const ee=_.newAttributes,he=_.enabledAttributes;for(let ue=0,$=he.length;ue<$;ue++)he[ue]!==ee[ue]&&(s.disableVertexAttribArray(ue),he[ue]=0)}function U(ee,he,ue,$,K,ne){r.isWebGL2===!0&&(ue===5124||ue===5125)?s.vertexAttribIPointer(ee,he,ue,K,ne):s.vertexAttribPointer(ee,he,ue,$,K,ne)}function R(ee,he,ue,$){if(r.isWebGL2===!1&&(ee.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;k();const K=$.attributes,ne=ue.getAttributes(),fe=he.defaultAttributeValues;for(const se in ne){const Y=ne[se];if(Y.location>=0){let ce=K[se];if(ce===void 0&&(se==="instanceMatrix"&&ee.instanceMatrix&&(ce=ee.instanceMatrix),se==="instanceColor"&&ee.instanceColor&&(ce=ee.instanceColor)),ce!==void 0){const ge=ce.normalized,q=ce.itemSize,te=t.get(ce);if(te===void 0)continue;const Me=te.buffer,Pe=te.type,Ue=te.bytesPerElement;if(ce.isInterleavedBufferAttribute){const Le=ce.data,$e=Le.stride,We=ce.offset;if(Le.isInstancedInterleavedBuffer){for(let ze=0;ze<Y.locationSize;ze++)B(Y.location+ze,Le.meshPerAttribute);ee.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ze=0;ze<Y.locationSize;ze++)z(Y.location+ze);s.bindBuffer(34962,Me);for(let ze=0;ze<Y.locationSize;ze++)U(Y.location+ze,q/Y.locationSize,Pe,ge,$e*Ue,(We+q/Y.locationSize*ze)*Ue)}else{if(ce.isInstancedBufferAttribute){for(let Le=0;Le<Y.locationSize;Le++)B(Y.location+Le,ce.meshPerAttribute);ee.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<Y.locationSize;Le++)z(Y.location+Le);s.bindBuffer(34962,Me);for(let Le=0;Le<Y.locationSize;Le++)U(Y.location+Le,q/Y.locationSize,Pe,ge,q*Ue,q/Y.locationSize*Le*Ue)}}else if(fe!==void 0){const ge=fe[se];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(Y.location,ge);break;case 3:s.vertexAttrib3fv(Y.location,ge);break;case 4:s.vertexAttrib4fv(Y.location,ge);break;default:s.vertexAttrib1fv(Y.location,ge)}}}}P()}function V(){ve();for(const ee in l){const he=l[ee];for(const ue in he){const $=he[ue];for(const K in $)T($[K].object),delete $[K];delete he[ue]}delete l[ee]}}function Q(ee){if(l[ee.id]===void 0)return;const he=l[ee.id];for(const ue in he){const $=he[ue];for(const K in $)T($[K].object),delete $[K];delete he[ue]}delete l[ee.id]}function J(ee){for(const he in l){const ue=l[he];if(ue[ee.id]===void 0)continue;const $=ue[ee.id];for(const K in $)T($[K].object),delete $[K];delete ue[ee.id]}}function ve(){le(),v=!0,_!==g&&(_=g,E(_.object))}function le(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:y,reset:ve,resetDefaultState:le,dispose:V,releaseStatesOfGeometry:Q,releaseStatesOfProgram:J,initAttributes:k,enableAttribute:z,disableUnusedAttributes:P}}function WebGLBufferRenderer(s,e,t,r){const o=r.isWebGL2;let a;function n(_){a=_}function l(_,v){s.drawArrays(a,_,v),t.update(v,a,1)}function g(_,v,y){if(y===0)return;let M,E;if(o)M=s,E="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[E](a,_,v,y),t.update(v,a,y)}this.setMode=n,this.render=l,this.renderInstances=g}function WebGLCapabilities(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){if(U==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const n=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const g=a(l);g!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",g,"instead."),l=g);const _=n||e.has("WEBGL_draw_buffers"),v=t.logarithmicDepthBuffer===!0,y=s.getParameter(34930),M=s.getParameter(35660),E=s.getParameter(3379),T=s.getParameter(34076),w=s.getParameter(34921),b=s.getParameter(36347),C=s.getParameter(36348),D=s.getParameter(36349),k=M>0,z=n||e.has("OES_texture_float"),B=k&&z,P=n?s.getParameter(36183):0;return{isWebGL2:n,drawBuffers:_,getMaxAnisotropy:o,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:D,vertexTextures:k,floatFragmentTextures:z,floatVertexTextures:B,maxSamples:P}}function WebGLClipping(s){const e=this;let t=null,r=0,o=!1,a=!1;const n=new Plane,l=new Matrix3,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,M,E){const T=y.length!==0||M||r!==0||o;return o=M,t=v(y,E,0),r=y.length,T},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1,_()},this.setState=function(y,M,E){const T=y.clippingPlanes,w=y.clipIntersection,b=y.clipShadows,C=s.get(y);if(!o||T===null||T.length===0||a&&!b)a?v(null):_();else{const D=a?0:r,k=D*4;let z=C.clippingState||null;g.value=z,z=v(T,M,k,E);for(let B=0;B!==k;++B)z[B]=t[B];C.clippingState=z,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function _(){g.value!==t&&(g.value=t,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,M,E,T){const w=y!==null?y.length:0;let b=null;if(w!==0){if(b=g.value,T!==!0||b===null){const C=E+w*4,D=M.matrixWorldInverse;l.getNormalMatrix(D),(b===null||b.length<C)&&(b=new Float32Array(C));for(let k=0,z=E;k!==w;++k,z+=4)n.copy(y[k]).applyMatrix4(D,l),n.normal.toArray(b,z),b[z+3]=n.constant}g.value=b,g.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,b}}function WebGLCubeMaps(s){let e=new WeakMap;function t(n,l){return l===EquirectangularReflectionMapping?n.mapping=CubeReflectionMapping:l===EquirectangularRefractionMapping&&(n.mapping=CubeRefractionMapping),n}function r(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){const l=n.mapping;if(l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping)if(e.has(n)){const g=e.get(n).texture;return t(g,n.mapping)}else{const g=n.image;if(g&&g.height>0){const _=new WebGLCubeRenderTarget(g.height/2);return _.fromEquirectangularTexture(s,n),e.set(n,_),n.addEventListener("dispose",o),t(_.texture,n.mapping)}else return null}}return n}function o(n){const l=n.target;l.removeEventListener("dispose",o);const g=e.get(l);g!==void 0&&(e.delete(l),g.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,r=1,o=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,n=r+e,l=o+t,g=o-t;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=_*this.view.offsetX,n=a+_*this.view.width,l-=v*this.view.offsetY,g=l-v*this.view.height}this.projectionMatrix.makeOrthographic(a,n,l,g,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},o=_createRenderTarget(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(a)),this._blurMaterial=_getBlurShader(a,e,t)}return o}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,r,o){const l=new PerspectiveCamera(90,1,t,r),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,M=v.toneMapping;v.getClearColor(_clearColor),v.toneMapping=NoToneMapping,v.autoClear=!1;const E=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),T=new Mesh(new BoxGeometry,E);let w=!1;const b=e.background;b?b.isColor&&(E.color.copy(b),e.background=null,w=!0):(E.color.copy(_clearColor),w=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(l.up.set(0,g[C],0),l.lookAt(_[C],0,0)):D===1?(l.up.set(0,0,g[C]),l.lookAt(0,_[C],0)):(l.up.set(0,g[C],0),l.lookAt(0,0,_[C]));const k=this._cubeSize;_setViewport(o,D*k,C>2?k:0,k,k),v.setRenderTarget(o),w&&v.render(T,l),v.render(e,l)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=M,v.autoClear=y,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const a=o?this._cubemapMaterial:this._equirectMaterial,n=new Mesh(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const g=this._cubeSize;_setViewport(t,0,0,3*g,2*g),r.setRenderTarget(t),r.render(n,_flatCamera)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),n=_axisDirections[(o-1)%_axisDirections.length];this._blur(e,o-1,o,a,n)}t.autoClear=r}_blur(e,t,r,o,a){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,o,"latitudinal",a),this._halfBlur(n,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,n,l){const g=this._renderer,_=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Mesh(this._lodPlanes[o],_),M=_.uniforms,E=this._sizeLods[r]-1,T=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*MAX_SAMPLES-1),w=a/T,b=isFinite(a)?1+Math.floor(v*w):MAX_SAMPLES;b>MAX_SAMPLES&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${MAX_SAMPLES}`);const C=[];let D=0;for(let U=0;U<MAX_SAMPLES;++U){const R=U/w,V=Math.exp(-R*R/2);C.push(V),U===0?D+=V:U<b&&(D+=2*V)}for(let U=0;U<C.length;U++)C[U]=C[U]/D;M.envMap.value=e.texture,M.samples.value=b,M.weights.value=C,M.latitudinal.value=n==="latitudinal",l&&(M.poleAxis.value=l);const{_lodMax:k}=this;M.dTheta.value=T,M.mipInt.value=k-r;const z=this._sizeLods[o],B=3*z*(o>k-LOD_MIN?o-k+LOD_MIN:0),P=4*(this._cubeSize-z);_setViewport(t,B,P,3*z,2*z),g.setRenderTarget(t),g.render(y,_flatCamera)}}function _createPlanes(s){const e=[],t=[],r=[];let o=s;const a=s-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let n=0;n<a;n++){const l=Math.pow(2,o);t.push(l);let g=1/l;n>s-LOD_MIN?g=EXTRA_LOD_SIGMA[n-s+LOD_MIN-1]:n===0&&(g=0),r.push(g);const _=1/(l-2),v=-_,y=1+_,M=[v,v,y,v,y,y,v,v,y,y,v,y],E=6,T=6,w=3,b=2,C=1,D=new Float32Array(w*T*E),k=new Float32Array(b*T*E),z=new Float32Array(C*T*E);for(let P=0;P<E;P++){const U=P%3*2/3-1,R=P>2?0:-1,V=[U,R,0,U+2/3,R,0,U+2/3,R+1,0,U,R,0,U+2/3,R+1,0,U,R+1,0];D.set(V,w*T*P),k.set(M,b*T*P);const Q=[P,P,P,P,P,P];z.set(Q,C*T*P)}const B=new BufferGeometry;B.setAttribute("position",new BufferAttribute(D,w)),B.setAttribute("uv",new BufferAttribute(k,b)),B.setAttribute("faceIndex",new BufferAttribute(z,C)),e.push(B),o>LOD_MIN&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function _createRenderTarget(s,e,t){const r=new WebGLRenderTarget(s,e,t);return r.texture.mapping=CubeUVReflectionMapping,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _setViewport(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function _getBlurShader(s,e,t){const r=new Float32Array(MAX_SAMPLES),o=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(s){let e=new WeakMap,t=null;function r(l){if(l&&l.isTexture){const g=l.mapping,_=g===EquirectangularReflectionMapping||g===EquirectangularRefractionMapping,v=g===CubeReflectionMapping||g===CubeRefractionMapping;if(_||v)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let y=e.get(l);return t===null&&(t=new PMREMGenerator(s)),y=_?t.fromEquirectangular(l,y):t.fromCubemap(l,y),e.set(l,y),y.texture}else{if(e.has(l))return e.get(l).texture;{const y=l.image;if(_&&y&&y.height>0||v&&y&&o(y)){t===null&&(t=new PMREMGenerator(s));const M=_?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,M),l.addEventListener("dispose",a),M.texture}else return null}}}return l}function o(l){let g=0;const _=6;for(let v=0;v<_;v++)l[v]!==void 0&&g++;return g===_}function a(l){const g=l.target;g.removeEventListener("dispose",a);const _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:n}}function WebGLExtensions(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function WebGLGeometries(s,e,t,r){const o={},a=new WeakMap;function n(y){const M=y.target;M.index!==null&&e.remove(M.index);for(const T in M.attributes)e.remove(M.attributes[T]);M.removeEventListener("dispose",n),delete o[M.id];const E=a.get(M);E&&(e.remove(E),a.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function l(y,M){return o[M.id]===!0||(M.addEventListener("dispose",n),o[M.id]=!0,t.memory.geometries++),M}function g(y){const M=y.attributes;for(const T in M)e.update(M[T],34962);const E=y.morphAttributes;for(const T in E){const w=E[T];for(let b=0,C=w.length;b<C;b++)e.update(w[b],34962)}}function _(y){const M=[],E=y.index,T=y.attributes.position;let w=0;if(E!==null){const D=E.array;w=E.version;for(let k=0,z=D.length;k<z;k+=3){const B=D[k+0],P=D[k+1],U=D[k+2];M.push(B,P,P,U,U,B)}}else{const D=T.array;w=T.version;for(let k=0,z=D.length/3-1;k<z;k+=3){const B=k+0,P=k+1,U=k+2;M.push(B,P,P,U,U,B)}}const b=new(arrayNeedsUint32(M)?Uint32BufferAttribute:Uint16BufferAttribute)(M,1);b.version=w;const C=a.get(y);C&&e.remove(C),a.set(y,b)}function v(y){const M=a.get(y);if(M){const E=y.index;E!==null&&M.version<E.version&&_(y)}else _(y);return a.get(y)}return{get:l,update:g,getWireframeAttribute:v}}function WebGLIndexedBufferRenderer(s,e,t,r){const o=r.isWebGL2;let a;function n(M){a=M}let l,g;function _(M){l=M.type,g=M.bytesPerElement}function v(M,E){s.drawElements(a,E,l,M*g),t.update(E,a,1)}function y(M,E,T){if(T===0)return;let w,b;if(o)w=s,b="drawElementsInstanced";else if(w=e.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[b](a,E,l,M*g,T),t.update(E,a,T)}this.setMode=n,this.setIndex=_,this.render=v,this.renderInstances=y}function WebGLInfo(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,n,l){switch(t.calls++,n){case 4:t.triangles+=l*(a/3);break;case 1:t.lines+=l*(a/2);break;case 3:t.lines+=l*(a-1);break;case 2:t.lines+=l*a;break;case 0:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function numericalSort(s,e){return s[0]-e[0]}function absNumericalSort(s,e){return Math.abs(e[1])-Math.abs(s[1])}function denormalize(s,e){let t=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?t=127:r instanceof Int16Array?t=32767:r instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),s.divideScalar(t)}function WebGLMorphtargets(s,e,t){const r={},o=new Float32Array(8),a=new WeakMap,n=new Vector4,l=[];for(let _=0;_<8;_++)l[_]=[_,0];function g(_,v,y,M){const E=_.morphTargetInfluences;if(e.isWebGL2===!0){const w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,b=w!==void 0?w.length:0;let C=a.get(v);if(C===void 0||C.count!==b){let ue=function(){ee.dispose(),a.delete(v),v.removeEventListener("dispose",ue)};var T=ue;C!==void 0&&C.texture.dispose();const z=v.morphAttributes.position!==void 0,B=v.morphAttributes.normal!==void 0,P=v.morphAttributes.color!==void 0,U=v.morphAttributes.position||[],R=v.morphAttributes.normal||[],V=v.morphAttributes.color||[];let Q=0;z===!0&&(Q=1),B===!0&&(Q=2),P===!0&&(Q=3);let J=v.attributes.position.count*Q,ve=1;J>e.maxTextureSize&&(ve=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const le=new Float32Array(J*ve*4*b),ee=new DataArrayTexture(le,J,ve,b);ee.type=FloatType,ee.needsUpdate=!0;const he=Q*4;for(let $=0;$<b;$++){const K=U[$],ne=R[$],fe=V[$],se=J*ve*4*$;for(let Y=0;Y<K.count;Y++){const ce=Y*he;z===!0&&(n.fromBufferAttribute(K,Y),K.normalized===!0&&denormalize(n,K),le[se+ce+0]=n.x,le[se+ce+1]=n.y,le[se+ce+2]=n.z,le[se+ce+3]=0),B===!0&&(n.fromBufferAttribute(ne,Y),ne.normalized===!0&&denormalize(n,ne),le[se+ce+4]=n.x,le[se+ce+5]=n.y,le[se+ce+6]=n.z,le[se+ce+7]=0),P===!0&&(n.fromBufferAttribute(fe,Y),fe.normalized===!0&&denormalize(n,fe),le[se+ce+8]=n.x,le[se+ce+9]=n.y,le[se+ce+10]=n.z,le[se+ce+11]=fe.itemSize===4?n.w:1)}}C={count:b,texture:ee,size:new Vector2(J,ve)},a.set(v,C),v.addEventListener("dispose",ue)}let D=0;for(let z=0;z<E.length;z++)D+=E[z];const k=v.morphTargetsRelative?1:1-D;M.getUniforms().setValue(s,"morphTargetBaseInfluence",k),M.getUniforms().setValue(s,"morphTargetInfluences",E),M.getUniforms().setValue(s,"morphTargetsTexture",C.texture,t),M.getUniforms().setValue(s,"morphTargetsTextureSize",C.size)}else{const w=E===void 0?0:E.length;let b=r[v.id];if(b===void 0||b.length!==w){b=[];for(let B=0;B<w;B++)b[B]=[B,0];r[v.id]=b}for(let B=0;B<w;B++){const P=b[B];P[0]=B,P[1]=E[B]}b.sort(absNumericalSort);for(let B=0;B<8;B++)B<w&&b[B][1]?(l[B][0]=b[B][0],l[B][1]=b[B][1]):(l[B][0]=Number.MAX_SAFE_INTEGER,l[B][1]=0);l.sort(numericalSort);const C=v.morphAttributes.position,D=v.morphAttributes.normal;let k=0;for(let B=0;B<8;B++){const P=l[B],U=P[0],R=P[1];U!==Number.MAX_SAFE_INTEGER&&R?(C&&v.getAttribute("morphTarget"+B)!==C[U]&&v.setAttribute("morphTarget"+B,C[U]),D&&v.getAttribute("morphNormal"+B)!==D[U]&&v.setAttribute("morphNormal"+B,D[U]),o[B]=R,k+=R):(C&&v.hasAttribute("morphTarget"+B)===!0&&v.deleteAttribute("morphTarget"+B),D&&v.hasAttribute("morphNormal"+B)===!0&&v.deleteAttribute("morphNormal"+B),o[B]=0)}const z=v.morphTargetsRelative?1:1-k;M.getUniforms().setValue(s,"morphTargetBaseInfluence",z),M.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:g}}function WebGLObjects(s,e,t,r){let o=new WeakMap;function a(g){const _=r.render.frame,v=g.geometry,y=e.get(g,v);return o.get(y)!==_&&(e.update(y),o.set(y,_)),g.isInstancedMesh&&(g.hasEventListener("dispose",l)===!1&&g.addEventListener("dispose",l),t.update(g.instanceMatrix,34962),g.instanceColor!==null&&t.update(g.instanceColor,34962)),y}function n(){o=new WeakMap}function l(g){const _=g.target;_.removeEventListener("dispose",l),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:a,dispose:n}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let a=arrayCacheF32[o];if(a===void 0&&(a=new Float32Array(o),arrayCacheF32[o]=a),e!==0){r.toArray(a,0);for(let n=1,l=0;n!==e;++n)l+=t,s[n].toArray(a,l)}return a}function arraysEqual(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function copyArray(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function allocTexUnits(s,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function setValueV1f(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;s.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;s.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;s.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(arraysEqual(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,r))return;mat2array.set(r),s.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,r)}}function setValueM3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(arraysEqual(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,r))return;mat3array.set(r),s.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,r)}}function setValueM4(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(arraysEqual(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,r))return;mat4array.set(r),s.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,r)}}function setValueV1i(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(s,e){const t=this.cache;arraysEqual(t,e)||(s.uniform2iv(this.addr,e),copyArray(t,e))}function setValueV3i(s,e){const t=this.cache;arraysEqual(t,e)||(s.uniform3iv(this.addr,e),copyArray(t,e))}function setValueV4i(s,e){const t=this.cache;arraysEqual(t,e)||(s.uniform4iv(this.addr,e),copyArray(t,e))}function setValueV1ui(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(s,e){const t=this.cache;arraysEqual(t,e)||(s.uniform2uiv(this.addr,e),copyArray(t,e))}function setValueV3ui(s,e){const t=this.cache;arraysEqual(t,e)||(s.uniform3uiv(this.addr,e),copyArray(t,e))}function setValueV4ui(s,e){const t=this.cache;arraysEqual(t,e)||(s.uniform4uiv(this.addr,e),copyArray(t,e))}function setValueT1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2D(e||emptyTexture,o)}function setValueT3D1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||empty3dTexture,o)}function setValueT6(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||emptyCubeTexture,o)}function setValueT2DArray1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||emptyArrayTexture,o)}function getSingularSetter(s){switch(s){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(s,e){s.uniform1fv(this.addr,e)}function setValueV2fArray(s,e){const t=flatten(e,this.size,2);s.uniform2fv(this.addr,t)}function setValueV3fArray(s,e){const t=flatten(e,this.size,3);s.uniform3fv(this.addr,t)}function setValueV4fArray(s,e){const t=flatten(e,this.size,4);s.uniform4fv(this.addr,t)}function setValueM2Array(s,e){const t=flatten(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(s,e){const t=flatten(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(s,e){const t=flatten(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(s,e){s.uniform1iv(this.addr,e)}function setValueV2iArray(s,e){s.uniform2iv(this.addr,e)}function setValueV3iArray(s,e){s.uniform3iv(this.addr,e)}function setValueV4iArray(s,e){s.uniform4iv(this.addr,e)}function setValueV1uiArray(s,e){s.uniform1uiv(this.addr,e)}function setValueV2uiArray(s,e){s.uniform2uiv(this.addr,e)}function setValueV3uiArray(s,e){s.uniform3uiv(this.addr,e)}function setValueV4uiArray(s,e){s.uniform4uiv(this.addr,e)}function setValueT1Array(s,e,t){const r=e.length,o=allocTexUnits(t,r);s.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)t.setTexture2D(e[a]||emptyTexture,o[a])}function setValueT3DArray(s,e,t){const r=e.length,o=allocTexUnits(t,r);s.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)t.setTexture3D(e[a]||empty3dTexture,o[a])}function setValueT6Array(s,e,t){const r=e.length,o=allocTexUnits(t,r);s.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)t.setTextureCube(e[a]||emptyCubeTexture,o[a])}function setValueT2DArrayArray(s,e,t){const r=e.length,o=allocTexUnits(t,r);s.uniform1iv(this.addr,o);for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||emptyArrayTexture,o[a])}function getPureArraySetter(s){switch(s){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,n=o.length;a!==n;++a){const l=o[a];l.setValue(e,t[l.id],r)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(s,e){s.seq.push(e),s.map[e.id]=e}function parseUniform(s,e,t){const r=s.name,o=r.length;for(RePathPart.lastIndex=0;;){const a=RePathPart.exec(r),n=RePathPart.lastIndex;let l=a[1];const g=a[2]==="]",_=a[3];if(g&&(l=l|0),_===void 0||_==="["&&n+2===o){addUniform(t,_===void 0?new SingleUniform(l,s,e):new PureArrayUniform(l,s,e));break}else{let y=t.map[l];y===void 0&&(y=new StructuredUniform(l),addUniform(t,y)),t=y}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,35718);for(let o=0;o<r;++o){const a=e.getActiveUniform(t,o),n=e.getUniformLocation(t,a.name);parseUniform(a,n,this)}}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,n=t.length;a!==n;++a){const l=t[a],g=r[l.id];g.needsUpdate!==!1&&l.setValue(e,g.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const n=e[o];n.id in t&&r.push(n)}return r}}function WebGLShader(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}let programIdCount=0;function handleSource(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let n=o;n<a;n++){const l=n+1;r.push(`${l===e?">":" "} ${l}: ${t[n]}`)}return r.join(`
`)}function getEncodingComponents(s){switch(s){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function getShaderErrors(s,e,t){const r=s.getShaderParameter(e,35713),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const n=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+handleSource(s.getShaderSource(e),n)}else return o}function getTexelEncodingFunction(s,e){const t=getEncodingComponents(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function getToneMappingFunction(s,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fetchAttributeLocations(s,e){const t={},r=s.getProgramParameter(e,35721);for(let o=0;o<r;o++){const a=s.getActiveAttrib(e,o),n=a.name;let l=1;a.type===35674&&(l=2),a.type===35675&&(l=3),a.type===35676&&(l=4),t[n]={type:a.type,location:s.getAttribLocation(e,n),locationSize:l}}return t}function filterEmptyLine(s){return s!==""}function replaceLightNums(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(s){return s.replace(includePattern,includeReplacer)}function includeReplacer(s,e){const t=ShaderChunk[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return resolveIncludes(t)}const deprecatedUnrollLoopPattern=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(s){return s.replace(unrollLoopPattern,loopReplacer).replace(deprecatedUnrollLoopPattern,deprecatedLoopReplacer)}function deprecatedLoopReplacer(s,e,t,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),loopReplacer(s,e,t,r)}function loopReplacer(s,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function generatePrecision(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function WebGLProgram(s,e,t,r){const o=s.getContext(),a=t.defines;let n=t.vertexShader,l=t.fragmentShader;const g=generateShadowMapTypeDefine(t),_=generateEnvMapTypeDefine(t),v=generateEnvMapModeDefine(t),y=generateEnvMapBlendingDefine(t),M=generateCubeUVSize(t),E=t.isWebGL2?"":generateExtensions(t),T=generateDefines(a),w=o.createProgram();let b,C,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=[T].filter(filterEmptyLine).join(`
`),b.length>0&&(b+=`
`),C=[E,T].filter(filterEmptyLine).join(`
`),C.length>0&&(C+=`
`)):(b=[generatePrecision(t),"#define SHADER_NAME "+t.shaderName,T,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),C=[E,generatePrecision(t),"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),n=resolveIncludes(n),n=replaceLightNums(n,t),n=replaceClippingPlaneNums(n,t),l=resolveIncludes(l),l=replaceLightNums(l,t),l=replaceClippingPlaneNums(l,t),n=unrollLoops(n),l=unrollLoops(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,b=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,C=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const k=D+b+n,z=D+C+l,B=WebGLShader(o,35633,k),P=WebGLShader(o,35632,z);if(o.attachShader(w,B),o.attachShader(w,P),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w),s.debug.checkShaderErrors){const V=o.getProgramInfoLog(w).trim(),Q=o.getShaderInfoLog(B).trim(),J=o.getShaderInfoLog(P).trim();let ve=!0,le=!0;if(o.getProgramParameter(w,35714)===!1){ve=!1;const ee=getShaderErrors(o,B,"vertex"),he=getShaderErrors(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,35715)+`

Program Info Log: `+V+`
`+ee+`
`+he)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(Q===""||J==="")&&(le=!1);le&&(this.diagnostics={runnable:ve,programLog:V,vertexShader:{log:Q,prefix:b},fragmentShader:{log:J,prefix:C}})}o.deleteShader(B),o.deleteShader(P);let U;this.getUniforms=function(){return U===void 0&&(U=new WebGLUniforms(o,w)),U};let R;return this.getAttributes=function(){return R===void 0&&(R=fetchAttributeLocations(o,w)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=P,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(o)===!1&&(n.add(o),o.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const r=new WebGLShaderStage(e);t.set(e,r)}return t.get(e)}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(s,e,t,r,o,a,n){const l=new Layers,g=new WebGLShaderCache,_=[],v=o.isWebGL2,y=o.logarithmicDepthBuffer,M=o.vertexTextures;let E=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R,V,Q,J,ve){const le=J.fog,ee=ve.geometry,he=R.isMeshStandardMaterial?J.environment:null,ue=(R.isMeshStandardMaterial?t:e).get(R.envMap||he),$=!!ue&&ue.mapping===CubeUVReflectionMapping?ue.image.height:null,K=T[R.type];R.precision!==null&&(E=o.getMaxPrecision(R.precision),E!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const ne=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,fe=ne!==void 0?ne.length:0;let se=0;ee.morphAttributes.position!==void 0&&(se=1),ee.morphAttributes.normal!==void 0&&(se=2),ee.morphAttributes.color!==void 0&&(se=3);let Y,ce,ge,q;if(K){const $e=ShaderLib[K];Y=$e.vertexShader,ce=$e.fragmentShader}else Y=R.vertexShader,ce=R.fragmentShader,g.update(R),ge=g.getVertexShaderID(R),q=g.getFragmentShaderID(R);const te=s.getRenderTarget(),Me=R.alphaTest>0,Pe=R.clearcoat>0,Ue=R.iridescence>0;return{isWebGL2:v,shaderID:K,shaderName:R.type,vertexShader:Y,fragmentShader:ce,defines:R.defines,customVertexShaderID:ge,customFragmentShaderID:q,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,instancing:ve.isInstancedMesh===!0,instancingColor:ve.isInstancedMesh===!0&&ve.instanceColor!==null,supportsVertexTextures:M,outputEncoding:te===null?s.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:LinearEncoding,map:!!R.map,matcap:!!R.matcap,envMap:!!ue,envMapMode:ue&&ue.mapping,envMapCubeUVHeight:$,lightMap:!!R.lightMap,aoMap:!!R.aoMap,emissiveMap:!!R.emissiveMap,bumpMap:!!R.bumpMap,normalMap:!!R.normalMap,objectSpaceNormalMap:R.normalMapType===ObjectSpaceNormalMap,tangentSpaceNormalMap:R.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:!!R.map&&R.map.isVideoTexture===!0&&R.map.encoding===sRGBEncoding,clearcoat:Pe,clearcoatMap:Pe&&!!R.clearcoatMap,clearcoatRoughnessMap:Pe&&!!R.clearcoatRoughnessMap,clearcoatNormalMap:Pe&&!!R.clearcoatNormalMap,iridescence:Ue,iridescenceMap:Ue&&!!R.iridescenceMap,iridescenceThicknessMap:Ue&&!!R.iridescenceThicknessMap,displacementMap:!!R.displacementMap,roughnessMap:!!R.roughnessMap,metalnessMap:!!R.metalnessMap,specularMap:!!R.specularMap,specularIntensityMap:!!R.specularIntensityMap,specularColorMap:!!R.specularColorMap,opaque:R.transparent===!1&&R.blending===NormalBlending,alphaMap:!!R.alphaMap,alphaTest:Me,gradientMap:!!R.gradientMap,sheen:R.sheen>0,sheenColorMap:!!R.sheenColorMap,sheenRoughnessMap:!!R.sheenRoughnessMap,transmission:R.transmission>0,transmissionMap:!!R.transmissionMap,thicknessMap:!!R.thicknessMap,combine:R.combine,vertexTangents:!!R.normalMap&&!!ee.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUvs:!!R.map||!!R.bumpMap||!!R.normalMap||!!R.specularMap||!!R.alphaMap||!!R.emissiveMap||!!R.roughnessMap||!!R.metalnessMap||!!R.clearcoatMap||!!R.clearcoatRoughnessMap||!!R.clearcoatNormalMap||!!R.iridescenceMap||!!R.iridescenceThicknessMap||!!R.displacementMap||!!R.transmissionMap||!!R.thicknessMap||!!R.specularIntensityMap||!!R.specularColorMap||!!R.sheenColorMap||!!R.sheenRoughnessMap,uvsVertexOnly:!(!!R.map||!!R.bumpMap||!!R.normalMap||!!R.specularMap||!!R.alphaMap||!!R.emissiveMap||!!R.roughnessMap||!!R.metalnessMap||!!R.clearcoatNormalMap||!!R.iridescenceMap||!!R.iridescenceThicknessMap||R.transmission>0||!!R.transmissionMap||!!R.thicknessMap||!!R.specularIntensityMap||!!R.specularColorMap||R.sheen>0||!!R.sheenColorMap||!!R.sheenRoughnessMap)&&!!R.displacementMap,fog:!!le,useFog:R.fog===!0,fogExp2:le&&le.isFogExp2,flatShading:!!R.flatShading,sizeAttenuation:R.sizeAttenuation,logarithmicDepthBuffer:y,skinning:ve.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:se,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&Q.length>0,shadowMapType:s.shadowMap.type,toneMapping:R.toneMapped?s.toneMapping:NoToneMapping,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===DoubleSide,flipSided:R.side===BackSide,useDepthPacking:!!R.depthPacking,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:R.extensions&&R.extensions.derivatives,extensionFragDepth:R.extensions&&R.extensions.fragDepth,extensionDrawBuffers:R.extensions&&R.extensions.drawBuffers,extensionShaderTextureLOD:R.extensions&&R.extensions.shaderTextureLOD,rendererExtensionFragDepth:v||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||r.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function b(R){const V=[];if(R.shaderID?V.push(R.shaderID):(V.push(R.customVertexShaderID),V.push(R.customFragmentShaderID)),R.defines!==void 0)for(const Q in R.defines)V.push(Q),V.push(R.defines[Q]);return R.isRawShaderMaterial===!1&&(C(V,R),D(V,R),V.push(s.outputEncoding)),V.push(R.customProgramCacheKey),V.join()}function C(R,V){R.push(V.precision),R.push(V.outputEncoding),R.push(V.envMapMode),R.push(V.envMapCubeUVHeight),R.push(V.combine),R.push(V.vertexUvs),R.push(V.fogExp2),R.push(V.sizeAttenuation),R.push(V.morphTargetsCount),R.push(V.morphAttributeCount),R.push(V.numDirLights),R.push(V.numPointLights),R.push(V.numSpotLights),R.push(V.numHemiLights),R.push(V.numRectAreaLights),R.push(V.numDirLightShadows),R.push(V.numPointLightShadows),R.push(V.numSpotLightShadows),R.push(V.shadowMapType),R.push(V.toneMapping),R.push(V.numClippingPlanes),R.push(V.numClipIntersection),R.push(V.depthPacking)}function D(R,V){l.disableAll(),V.isWebGL2&&l.enable(0),V.supportsVertexTextures&&l.enable(1),V.instancing&&l.enable(2),V.instancingColor&&l.enable(3),V.map&&l.enable(4),V.matcap&&l.enable(5),V.envMap&&l.enable(6),V.lightMap&&l.enable(7),V.aoMap&&l.enable(8),V.emissiveMap&&l.enable(9),V.bumpMap&&l.enable(10),V.normalMap&&l.enable(11),V.objectSpaceNormalMap&&l.enable(12),V.tangentSpaceNormalMap&&l.enable(13),V.clearcoat&&l.enable(14),V.clearcoatMap&&l.enable(15),V.clearcoatRoughnessMap&&l.enable(16),V.clearcoatNormalMap&&l.enable(17),V.iridescence&&l.enable(18),V.iridescenceMap&&l.enable(19),V.iridescenceThicknessMap&&l.enable(20),V.displacementMap&&l.enable(21),V.specularMap&&l.enable(22),V.roughnessMap&&l.enable(23),V.metalnessMap&&l.enable(24),V.gradientMap&&l.enable(25),V.alphaMap&&l.enable(26),V.alphaTest&&l.enable(27),V.vertexColors&&l.enable(28),V.vertexAlphas&&l.enable(29),V.vertexUvs&&l.enable(30),V.vertexTangents&&l.enable(31),V.uvsVertexOnly&&l.enable(32),V.fog&&l.enable(33),R.push(l.mask),l.disableAll(),V.useFog&&l.enable(0),V.flatShading&&l.enable(1),V.logarithmicDepthBuffer&&l.enable(2),V.skinning&&l.enable(3),V.morphTargets&&l.enable(4),V.morphNormals&&l.enable(5),V.morphColors&&l.enable(6),V.premultipliedAlpha&&l.enable(7),V.shadowMapEnabled&&l.enable(8),V.physicallyCorrectLights&&l.enable(9),V.doubleSided&&l.enable(10),V.flipSided&&l.enable(11),V.useDepthPacking&&l.enable(12),V.dithering&&l.enable(13),V.specularIntensityMap&&l.enable(14),V.specularColorMap&&l.enable(15),V.transmission&&l.enable(16),V.transmissionMap&&l.enable(17),V.thicknessMap&&l.enable(18),V.sheen&&l.enable(19),V.sheenColorMap&&l.enable(20),V.sheenRoughnessMap&&l.enable(21),V.decodeVideoTexture&&l.enable(22),V.opaque&&l.enable(23),R.push(l.mask)}function k(R){const V=T[R.type];let Q;if(V){const J=ShaderLib[V];Q=UniformsUtils.clone(J.uniforms)}else Q=R.uniforms;return Q}function z(R,V){let Q;for(let J=0,ve=_.length;J<ve;J++){const le=_[J];if(le.cacheKey===V){Q=le,++Q.usedTimes;break}}return Q===void 0&&(Q=new WebGLProgram(s,V,R,a),_.push(Q)),Q}function B(R){if(--R.usedTimes===0){const V=_.indexOf(R);_[V]=_[_.length-1],_.pop(),R.destroy()}}function P(R){g.remove(R)}function U(){g.dispose()}return{getParameters:w,getProgramCacheKey:b,getUniforms:k,acquireProgram:z,releaseProgram:B,releaseShaderCache:P,programs:_,dispose:U}}function WebGLProperties(){let s=new WeakMap;function e(a){let n=s.get(a);return n===void 0&&(n={},s.set(a,n)),n}function t(a){s.delete(a)}function r(a,n,l){s.get(a)[n]=l}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function painterSortStable(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function reversePainterSortStable(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function WebGLRenderList(){const s=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function n(y,M,E,T,w,b){let C=s[e];return C===void 0?(C={id:y.id,object:y,geometry:M,material:E,groupOrder:T,renderOrder:y.renderOrder,z:w,group:b},s[e]=C):(C.id=y.id,C.object=y,C.geometry=M,C.material=E,C.groupOrder=T,C.renderOrder=y.renderOrder,C.z=w,C.group=b),e++,C}function l(y,M,E,T,w,b){const C=n(y,M,E,T,w,b);E.transmission>0?r.push(C):E.transparent===!0?o.push(C):t.push(C)}function g(y,M,E,T,w,b){const C=n(y,M,E,T,w,b);E.transmission>0?r.unshift(C):E.transparent===!0?o.unshift(C):t.unshift(C)}function _(y,M){t.length>1&&t.sort(y||painterSortStable),r.length>1&&r.sort(M||reversePainterSortStable),o.length>1&&o.sort(M||reversePainterSortStable)}function v(){for(let y=e,M=s.length;y<M;y++){const E=s[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:l,unshift:g,finish:v,sort:_}}function WebGLRenderLists(){let s=new WeakMap;function e(r,o){let a;return s.has(r)===!1?(a=new WebGLRenderList,s.set(r,[a])):o>=s.get(r).length?(a=new WebGLRenderList,s.get(r).push(a)):a=s.get(r)[o],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return s[e.id]=t,t}}}function ShadowUniformsCache(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let nextVersion=0;function shadowCastingLightsFirst(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function WebGLLights(s,e){const t=new UniformsCache,r=ShadowUniformsCache(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let v=0;v<9;v++)o.probe.push(new Vector3);const a=new Vector3,n=new Matrix4,l=new Matrix4;function g(v,y){let M=0,E=0,T=0;for(let V=0;V<9;V++)o.probe[V].set(0,0,0);let w=0,b=0,C=0,D=0,k=0,z=0,B=0,P=0;v.sort(shadowCastingLightsFirst);const U=y!==!0?Math.PI:1;for(let V=0,Q=v.length;V<Q;V++){const J=v[V],ve=J.color,le=J.intensity,ee=J.distance,he=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)M+=ve.r*le*U,E+=ve.g*le*U,T+=ve.b*le*U;else if(J.isLightProbe)for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(J.sh.coefficients[ue],le);else if(J.isDirectionalLight){const ue=t.get(J);if(ue.color.copy(J.color).multiplyScalar(J.intensity*U),J.castShadow){const $=J.shadow,K=r.get(J);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,o.directionalShadow[w]=K,o.directionalShadowMap[w]=he,o.directionalShadowMatrix[w]=J.shadow.matrix,z++}o.directional[w]=ue,w++}else if(J.isSpotLight){const ue=t.get(J);if(ue.position.setFromMatrixPosition(J.matrixWorld),ue.color.copy(ve).multiplyScalar(le*U),ue.distance=ee,ue.coneCos=Math.cos(J.angle),ue.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),ue.decay=J.decay,J.castShadow){const $=J.shadow,K=r.get(J);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,o.spotShadow[C]=K,o.spotShadowMap[C]=he,o.spotShadowMatrix[C]=J.shadow.matrix,P++}o.spot[C]=ue,C++}else if(J.isRectAreaLight){const ue=t.get(J);ue.color.copy(ve).multiplyScalar(le),ue.halfWidth.set(J.width*.5,0,0),ue.halfHeight.set(0,J.height*.5,0),o.rectArea[D]=ue,D++}else if(J.isPointLight){const ue=t.get(J);if(ue.color.copy(J.color).multiplyScalar(J.intensity*U),ue.distance=J.distance,ue.decay=J.decay,J.castShadow){const $=J.shadow,K=r.get(J);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,o.pointShadow[b]=K,o.pointShadowMap[b]=he,o.pointShadowMatrix[b]=J.shadow.matrix,B++}o.point[b]=ue,b++}else if(J.isHemisphereLight){const ue=t.get(J);ue.skyColor.copy(J.color).multiplyScalar(le*U),ue.groundColor.copy(J.groundColor).multiplyScalar(le*U),o.hemi[k]=ue,k++}}D>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,o.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_HALF_1,o.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=M,o.ambient[1]=E,o.ambient[2]=T;const R=o.hash;(R.directionalLength!==w||R.pointLength!==b||R.spotLength!==C||R.rectAreaLength!==D||R.hemiLength!==k||R.numDirectionalShadows!==z||R.numPointShadows!==B||R.numSpotShadows!==P)&&(o.directional.length=w,o.spot.length=C,o.rectArea.length=D,o.point.length=b,o.hemi.length=k,o.directionalShadow.length=z,o.directionalShadowMap.length=z,o.pointShadow.length=B,o.pointShadowMap.length=B,o.spotShadow.length=P,o.spotShadowMap.length=P,o.directionalShadowMatrix.length=z,o.pointShadowMatrix.length=B,o.spotShadowMatrix.length=P,R.directionalLength=w,R.pointLength=b,R.spotLength=C,R.rectAreaLength=D,R.hemiLength=k,R.numDirectionalShadows=z,R.numPointShadows=B,R.numSpotShadows=P,o.version=nextVersion++)}function _(v,y){let M=0,E=0,T=0,w=0,b=0;const C=y.matrixWorldInverse;for(let D=0,k=v.length;D<k;D++){const z=v[D];if(z.isDirectionalLight){const B=o.directional[M];B.direction.setFromMatrixPosition(z.matrixWorld),a.setFromMatrixPosition(z.target.matrixWorld),B.direction.sub(a),B.direction.transformDirection(C),M++}else if(z.isSpotLight){const B=o.spot[T];B.position.setFromMatrixPosition(z.matrixWorld),B.position.applyMatrix4(C),B.direction.setFromMatrixPosition(z.matrixWorld),a.setFromMatrixPosition(z.target.matrixWorld),B.direction.sub(a),B.direction.transformDirection(C),T++}else if(z.isRectAreaLight){const B=o.rectArea[w];B.position.setFromMatrixPosition(z.matrixWorld),B.position.applyMatrix4(C),l.identity(),n.copy(z.matrixWorld),n.premultiply(C),l.extractRotation(n),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),B.halfWidth.applyMatrix4(l),B.halfHeight.applyMatrix4(l),w++}else if(z.isPointLight){const B=o.point[E];B.position.setFromMatrixPosition(z.matrixWorld),B.position.applyMatrix4(C),E++}else if(z.isHemisphereLight){const B=o.hemi[b];B.direction.setFromMatrixPosition(z.matrixWorld),B.direction.transformDirection(C),b++}}}return{setup:g,setupView:_,state:o}}function WebGLRenderState(s,e){const t=new WebGLLights(s,e),r=[],o=[];function a(){r.length=0,o.length=0}function n(y){r.push(y)}function l(y){o.push(y)}function g(y){t.setup(r,y)}function _(y){t.setupView(r,y)}return{init:a,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:g,setupLightsView:_,pushLight:n,pushShadow:l}}function WebGLRenderStates(s,e){let t=new WeakMap;function r(a,n){let l;return t.has(a)===!1?(l=new WebGLRenderState(s,e),t.set(a,[l])):n>=t.get(a).length?(l=new WebGLRenderState(s,e),t.get(a).push(l)):l=t.get(a)[n],l}function o(){t=new WeakMap}return{get:r,dispose:o}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
}`;function WebGLShadowMap(s,e,t){let r=new Frustum;const o=new Vector2,a=new Vector2,n=new Vector4,l=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),g=new MeshDistanceMaterial,_={},v=t.maxTextureSize,y={0:BackSide,1:FrontSide,2:DoubleSide},M=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),E=M.clone();E.defines.HORIZONTAL_PASS=1;const T=new BufferGeometry;T.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Mesh(T,M),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.render=function(z,B,P){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||z.length===0)return;const U=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(NoBlending),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);for(let J=0,ve=z.length;J<ve;J++){const le=z[J],ee=le.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const he=ee.getFrameExtents();if(o.multiply(he),a.copy(ee.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/he.x),o.x=a.x*he.x,ee.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/he.y),o.y=a.y*he.y,ee.mapSize.y=a.y)),ee.map===null&&!ee.isPointLightShadow&&this.type===VSMShadowMap&&(ee.map=new WebGLRenderTarget(o.x,o.y),ee.map.texture.name=le.name+".shadowMap",ee.mapPass=new WebGLRenderTarget(o.x,o.y),ee.camera.updateProjectionMatrix()),ee.map===null){const $={minFilter:NearestFilter,magFilter:NearestFilter,format:RGBAFormat};ee.map=new WebGLRenderTarget(o.x,o.y,$),ee.map.texture.name=le.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();const ue=ee.getViewportCount();for(let $=0;$<ue;$++){const K=ee.getViewport($);n.set(a.x*K.x,a.y*K.y,a.x*K.z,a.y*K.w),Q.viewport(n),ee.updateMatrices(le,$),r=ee.getFrustum(),k(B,P,ee.camera,le,this.type)}!ee.isPointLightShadow&&this.type===VSMShadowMap&&C(ee,P),ee.needsUpdate=!1}b.needsUpdate=!1,s.setRenderTarget(U,R,V)};function C(z,B){const P=e.update(w);M.defines.VSM_SAMPLES!==z.blurSamples&&(M.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,M.needsUpdate=!0,E.needsUpdate=!0),M.uniforms.shadow_pass.value=z.map.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(B,null,P,M,w,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(B,null,P,E,w,null)}function D(z,B,P,U,R,V){let Q=null;const J=P.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(J!==void 0?Q=J:Q=P.isPointLight===!0?g:l,s.localClippingEnabled&&B.clipShadows===!0&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0){const ve=Q.uuid,le=B.uuid;let ee=_[ve];ee===void 0&&(ee={},_[ve]=ee);let he=ee[le];he===void 0&&(he=Q.clone(),ee[le]=he),Q=he}return Q.visible=B.visible,Q.wireframe=B.wireframe,V===VSMShadowMap?Q.side=B.shadowSide!==null?B.shadowSide:B.side:Q.side=B.shadowSide!==null?B.shadowSide:y[B.side],Q.alphaMap=B.alphaMap,Q.alphaTest=B.alphaTest,Q.clipShadows=B.clipShadows,Q.clippingPlanes=B.clippingPlanes,Q.clipIntersection=B.clipIntersection,Q.displacementMap=B.displacementMap,Q.displacementScale=B.displacementScale,Q.displacementBias=B.displacementBias,Q.wireframeLinewidth=B.wireframeLinewidth,Q.linewidth=B.linewidth,P.isPointLight===!0&&Q.isMeshDistanceMaterial===!0&&(Q.referencePosition.setFromMatrixPosition(P.matrixWorld),Q.nearDistance=U,Q.farDistance=R),Q}function k(z,B,P,U,R){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===VSMShadowMap)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,z.matrixWorld);const J=e.update(z),ve=z.material;if(Array.isArray(ve)){const le=J.groups;for(let ee=0,he=le.length;ee<he;ee++){const ue=le[ee],$=ve[ue.materialIndex];if($&&$.visible){const K=D(z,$,U,P.near,P.far,R);s.renderBufferDirect(P,null,J,K,z,ue)}}}else if(ve.visible){const le=D(z,ve,U,P.near,P.far,R);s.renderBufferDirect(P,null,J,le,z,null)}}const Q=z.children;for(let J=0,ve=Q.length;J<ve;J++)k(Q[J],B,P,U,R)}}function WebGLState(s,e,t){const r=t.isWebGL2;function o(){let I=!1;const oe=new Vector4;let pe=null;const Oe=new Vector4(0,0,0,0);return{setMask:function(Re){pe!==Re&&!I&&(s.colorMask(Re,Re,Re,Re),pe=Re)},setLocked:function(Re){I=Re},setClear:function(Re,Fe,Ce,Ne,Ee){Ee===!0&&(Re*=Ne,Fe*=Ne,Ce*=Ne),oe.set(Re,Fe,Ce,Ne),Oe.equals(oe)===!1&&(s.clearColor(Re,Fe,Ce,Ne),Oe.copy(oe))},reset:function(){I=!1,pe=null,Oe.set(-1,0,0,0)}}}function a(){let I=!1,oe=null,pe=null,Oe=null;return{setTest:function(Re){Re?q(2929):te(2929)},setMask:function(Re){oe!==Re&&!I&&(s.depthMask(Re),oe=Re)},setFunc:function(Re){if(pe!==Re){if(Re)switch(Re){case NeverDepth:s.depthFunc(512);break;case AlwaysDepth:s.depthFunc(519);break;case LessDepth:s.depthFunc(513);break;case LessEqualDepth:s.depthFunc(515);break;case EqualDepth:s.depthFunc(514);break;case GreaterEqualDepth:s.depthFunc(518);break;case GreaterDepth:s.depthFunc(516);break;case NotEqualDepth:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);pe=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Oe!==Re&&(s.clearDepth(Re),Oe=Re)},reset:function(){I=!1,oe=null,pe=null,Oe=null}}}function n(){let I=!1,oe=null,pe=null,Oe=null,Re=null,Fe=null,Ce=null,Ne=null,Ee=null;return{setTest:function(Ie){I||(Ie?q(2960):te(2960))},setMask:function(Ie){oe!==Ie&&!I&&(s.stencilMask(Ie),oe=Ie)},setFunc:function(Ie,ke,He){(pe!==Ie||Oe!==ke||Re!==He)&&(s.stencilFunc(Ie,ke,He),pe=Ie,Oe=ke,Re=He)},setOp:function(Ie,ke,He){(Fe!==Ie||Ce!==ke||Ne!==He)&&(s.stencilOp(Ie,ke,He),Fe=Ie,Ce=ke,Ne=He)},setLocked:function(Ie){I=Ie},setClear:function(Ie){Ee!==Ie&&(s.clearStencil(Ie),Ee=Ie)},reset:function(){I=!1,oe=null,pe=null,Oe=null,Re=null,Fe=null,Ce=null,Ne=null,Ee=null}}}const l=new o,g=new a,_=new n;let v={},y={},M=new WeakMap,E=[],T=null,w=!1,b=null,C=null,D=null,k=null,z=null,B=null,P=null,U=!1,R=null,V=null,Q=null,J=null,ve=null;const le=s.getParameter(35661);let ee=!1,he=0;const ue=s.getParameter(7938);ue.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ee=he>=1):ue.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ee=he>=2);let $=null,K={};const ne=s.getParameter(3088),fe=s.getParameter(2978),se=new Vector4().fromArray(ne),Y=new Vector4().fromArray(fe);function ce(I,oe,pe){const Oe=new Uint8Array(4),Re=s.createTexture();s.bindTexture(I,Re),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Fe=0;Fe<pe;Fe++)s.texImage2D(oe+Fe,0,6408,1,1,0,6408,5121,Oe);return Re}const ge={};ge[3553]=ce(3553,3553,1),ge[34067]=ce(34067,34069,6),l.setClear(0,0,0,1),g.setClear(1),_.setClear(0),q(2929),g.setFunc(LessEqualDepth),et(!1),Je(CullFaceBack),q(2884),We(NoBlending);function q(I){v[I]!==!0&&(s.enable(I),v[I]=!0)}function te(I){v[I]!==!1&&(s.disable(I),v[I]=!1)}function Me(I,oe){return y[I]!==oe?(s.bindFramebuffer(I,oe),y[I]=oe,r&&(I===36009&&(y[36160]=oe),I===36160&&(y[36009]=oe)),!0):!1}function Pe(I,oe){let pe=E,Oe=!1;if(I)if(pe=M.get(oe),pe===void 0&&(pe=[],M.set(oe,pe)),I.isWebGLMultipleRenderTargets){const Re=I.texture;if(pe.length!==Re.length||pe[0]!==36064){for(let Fe=0,Ce=Re.length;Fe<Ce;Fe++)pe[Fe]=36064+Fe;pe.length=Re.length,Oe=!0}}else pe[0]!==36064&&(pe[0]=36064,Oe=!0);else pe[0]!==1029&&(pe[0]=1029,Oe=!0);Oe&&(t.isWebGL2?s.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ue(I){return T!==I?(s.useProgram(I),T=I,!0):!1}const Le={[AddEquation]:32774,[SubtractEquation]:32778,[ReverseSubtractEquation]:32779};if(r)Le[MinEquation]=32775,Le[MaxEquation]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Le[MinEquation]=I.MIN_EXT,Le[MaxEquation]=I.MAX_EXT)}const $e={[ZeroFactor]:0,[OneFactor]:1,[SrcColorFactor]:768,[SrcAlphaFactor]:770,[SrcAlphaSaturateFactor]:776,[DstColorFactor]:774,[DstAlphaFactor]:772,[OneMinusSrcColorFactor]:769,[OneMinusSrcAlphaFactor]:771,[OneMinusDstColorFactor]:775,[OneMinusDstAlphaFactor]:773};function We(I,oe,pe,Oe,Re,Fe,Ce,Ne){if(I===NoBlending){w===!0&&(te(3042),w=!1);return}if(w===!1&&(q(3042),w=!0),I!==CustomBlending){if(I!==b||Ne!==U){if((C!==AddEquation||z!==AddEquation)&&(s.blendEquation(32774),C=AddEquation,z=AddEquation),Ne)switch(I){case NormalBlending:s.blendFuncSeparate(1,771,1,771);break;case AdditiveBlending:s.blendFunc(1,1);break;case SubtractiveBlending:s.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case NormalBlending:s.blendFuncSeparate(770,771,1,771);break;case AdditiveBlending:s.blendFunc(770,1);break;case SubtractiveBlending:s.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}D=null,k=null,B=null,P=null,b=I,U=Ne}return}Re=Re||oe,Fe=Fe||pe,Ce=Ce||Oe,(oe!==C||Re!==z)&&(s.blendEquationSeparate(Le[oe],Le[Re]),C=oe,z=Re),(pe!==D||Oe!==k||Fe!==B||Ce!==P)&&(s.blendFuncSeparate($e[pe],$e[Oe],$e[Fe],$e[Ce]),D=pe,k=Oe,B=Fe,P=Ce),b=I,U=null}function ze(I,oe){I.side===DoubleSide?te(2884):q(2884);let pe=I.side===BackSide;oe&&(pe=!pe),et(pe),I.blending===NormalBlending&&I.transparent===!1?We(NoBlending):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),g.setFunc(I.depthFunc),g.setTest(I.depthTest),g.setMask(I.depthWrite),l.setMask(I.colorWrite);const Oe=I.stencilWrite;_.setTest(Oe),Oe&&(_.setMask(I.stencilWriteMask),_.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),_.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?q(32926):te(32926)}function et(I){R!==I&&(I?s.frontFace(2304):s.frontFace(2305),R=I)}function Je(I){I!==CullFaceNone?(q(2884),I!==V&&(I===CullFaceBack?s.cullFace(1029):I===CullFaceFront?s.cullFace(1028):s.cullFace(1032))):te(2884),V=I}function Ze(I){I!==Q&&(ee&&s.lineWidth(I),Q=I)}function tt(I,oe,pe){I?(q(32823),(J!==oe||ve!==pe)&&(s.polygonOffset(oe,pe),J=oe,ve=pe)):te(32823)}function nt(I){I?q(3089):te(3089)}function it(I){I===void 0&&(I=33984+le-1),$!==I&&(s.activeTexture(I),$=I)}function lt(I,oe){$===null&&it();let pe=K[$];pe===void 0&&(pe={type:void 0,texture:void 0},K[$]=pe),(pe.type!==I||pe.texture!==oe)&&(s.bindTexture(I,oe||ge[I]),pe.type=I,pe.texture=oe)}function Tt(){const I=K[$];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){se.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Z(I){Y.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function H(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),r===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},$=null,K={},y={},M=new WeakMap,E=[],T=null,w=!1,b=null,C=null,D=null,k=null,z=null,B=null,P=null,U=!1,R=null,V=null,Q=null,J=null,ve=null,se.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),l.reset(),g.reset(),_.reset()}return{buffers:{color:l,depth:g,stencil:_},enable:q,disable:te,bindFramebuffer:Me,drawBuffers:Pe,useProgram:Ue,setBlending:We,setMaterial:ze,setFlipSided:et,setCullFace:Je,setLineWidth:Ze,setPolygonOffset:tt,setScissorTest:nt,activeTexture:it,bindTexture:lt,unbindTexture:Tt,compressedTexImage2D:j,texImage2D:je,texImage3D:G,texStorage2D:Ae,texStorage3D:Be,texSubImage2D:F,texSubImage3D:be,compressedTexSubImage2D:De,scissor:Se,viewport:Z,reset:H}}function WebGLTextures(s,e,t,r,o,a,n){const l=o.isWebGL2,g=o.maxTextures,_=o.maxCubemapSize,v=o.maxTextureSize,y=o.maxSamples,M=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,E=/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let w;const b=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(j,F){return C?new OffscreenCanvas(j,F):createElementNS("canvas")}function k(j,F,be,De){let Ae=1;if((j.width>De||j.height>De)&&(Ae=De/Math.max(j.width,j.height)),Ae<1||F===!0)if(typeof HTMLImageElement!="undefined"&&j instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&j instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&j instanceof ImageBitmap){const Be=F?floorPowerOfTwo:Math.floor,je=Be(Ae*j.width),G=Be(Ae*j.height);w===void 0&&(w=D(je,G));const Se=be?D(je,G):w;return Se.width=je,Se.height=G,Se.getContext("2d").drawImage(j,0,0,je,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+je+"x"+G+")."),Se}else return"data"in j&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),j;return j}function z(j){return isPowerOfTwo(j.width)&&isPowerOfTwo(j.height)}function B(j){return l?!1:j.wrapS!==ClampToEdgeWrapping||j.wrapT!==ClampToEdgeWrapping||j.minFilter!==NearestFilter&&j.minFilter!==LinearFilter}function P(j,F){return j.generateMipmaps&&F&&j.minFilter!==NearestFilter&&j.minFilter!==LinearFilter}function U(j){s.generateMipmap(j)}function R(j,F,be,De,Ae=!1){if(l===!1)return F;if(j!==null){if(s[j]!==void 0)return s[j];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+j+"'")}let Be=F;return F===6403&&(be===5126&&(Be=33326),be===5131&&(Be=33325),be===5121&&(Be=33321)),F===33319&&(be===5126&&(Be=33328),be===5131&&(Be=33327),be===5121&&(Be=33323)),F===6408&&(be===5126&&(Be=34836),be===5131&&(Be=34842),be===5121&&(Be=De===sRGBEncoding&&Ae===!1?35907:32856),be===32819&&(Be=32854),be===32820&&(Be=32855)),(Be===33325||Be===33326||Be===33327||Be===33328||Be===34842||Be===34836)&&e.get("EXT_color_buffer_float"),Be}function V(j,F,be){return P(j,be)===!0||j.isFramebufferTexture&&j.minFilter!==NearestFilter&&j.minFilter!==LinearFilter?Math.log2(Math.max(F.width,F.height))+1:j.mipmaps!==void 0&&j.mipmaps.length>0?j.mipmaps.length:j.isCompressedTexture&&Array.isArray(j.image)?F.mipmaps.length:1}function Q(j){return j===NearestFilter||j===NearestMipmapNearestFilter||j===NearestMipmapLinearFilter?9728:9729}function J(j){const F=j.target;F.removeEventListener("dispose",J),le(F),F.isVideoTexture&&T.delete(F)}function ve(j){const F=j.target;F.removeEventListener("dispose",ve),he(F)}function le(j){const F=r.get(j);if(F.__webglInit===void 0)return;const be=j.source,De=b.get(be);if(De){const Ae=De[F.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&ee(j),Object.keys(De).length===0&&b.delete(be)}r.remove(j)}function ee(j){const F=r.get(j);s.deleteTexture(F.__webglTexture);const be=j.source,De=b.get(be);delete De[F.__cacheKey],n.memory.textures--}function he(j){const F=j.texture,be=r.get(j),De=r.get(F);if(De.__webglTexture!==void 0&&(s.deleteTexture(De.__webglTexture),n.memory.textures--),j.depthTexture&&j.depthTexture.dispose(),j.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++)s.deleteFramebuffer(be.__webglFramebuffer[Ae]),be.__webglDepthbuffer&&s.deleteRenderbuffer(be.__webglDepthbuffer[Ae]);else{if(s.deleteFramebuffer(be.__webglFramebuffer),be.__webglDepthbuffer&&s.deleteRenderbuffer(be.__webglDepthbuffer),be.__webglMultisampledFramebuffer&&s.deleteFramebuffer(be.__webglMultisampledFramebuffer),be.__webglColorRenderbuffer)for(let Ae=0;Ae<be.__webglColorRenderbuffer.length;Ae++)be.__webglColorRenderbuffer[Ae]&&s.deleteRenderbuffer(be.__webglColorRenderbuffer[Ae]);be.__webglDepthRenderbuffer&&s.deleteRenderbuffer(be.__webglDepthRenderbuffer)}if(j.isWebGLMultipleRenderTargets)for(let Ae=0,Be=F.length;Ae<Be;Ae++){const je=r.get(F[Ae]);je.__webglTexture&&(s.deleteTexture(je.__webglTexture),n.memory.textures--),r.remove(F[Ae])}r.remove(F),r.remove(j)}let ue=0;function $(){ue=0}function K(){const j=ue;return j>=g&&console.warn("THREE.WebGLTextures: Trying to use "+j+" texture units while this GPU supports only "+g),ue+=1,j}function ne(j){const F=[];return F.push(j.wrapS),F.push(j.wrapT),F.push(j.magFilter),F.push(j.minFilter),F.push(j.anisotropy),F.push(j.internalFormat),F.push(j.format),F.push(j.type),F.push(j.generateMipmaps),F.push(j.premultiplyAlpha),F.push(j.flipY),F.push(j.unpackAlignment),F.push(j.encoding),F.join()}function fe(j,F){const be=r.get(j);if(j.isVideoTexture&&lt(j),j.isRenderTargetTexture===!1&&j.version>0&&be.__version!==j.version){const De=j.image;if(De===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(De.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(be,j,F);return}}t.activeTexture(33984+F),t.bindTexture(3553,be.__webglTexture)}function se(j,F){const be=r.get(j);if(j.version>0&&be.__version!==j.version){Pe(be,j,F);return}t.activeTexture(33984+F),t.bindTexture(35866,be.__webglTexture)}function Y(j,F){const be=r.get(j);if(j.version>0&&be.__version!==j.version){Pe(be,j,F);return}t.activeTexture(33984+F),t.bindTexture(32879,be.__webglTexture)}function ce(j,F){const be=r.get(j);if(j.version>0&&be.__version!==j.version){Ue(be,j,F);return}t.activeTexture(33984+F),t.bindTexture(34067,be.__webglTexture)}const ge={[RepeatWrapping]:10497,[ClampToEdgeWrapping]:33071,[MirroredRepeatWrapping]:33648},q={[NearestFilter]:9728,[NearestMipmapNearestFilter]:9984,[NearestMipmapLinearFilter]:9986,[LinearFilter]:9729,[LinearMipmapNearestFilter]:9985,[LinearMipmapLinearFilter]:9987};function te(j,F,be){if(be?(s.texParameteri(j,10242,ge[F.wrapS]),s.texParameteri(j,10243,ge[F.wrapT]),(j===32879||j===35866)&&s.texParameteri(j,32882,ge[F.wrapR]),s.texParameteri(j,10240,q[F.magFilter]),s.texParameteri(j,10241,q[F.minFilter])):(s.texParameteri(j,10242,33071),s.texParameteri(j,10243,33071),(j===32879||j===35866)&&s.texParameteri(j,32882,33071),(F.wrapS!==ClampToEdgeWrapping||F.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(j,10240,Q(F.magFilter)),s.texParameteri(j,10241,Q(F.minFilter)),F.minFilter!==NearestFilter&&F.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const De=e.get("EXT_texture_filter_anisotropic");if(F.type===FloatType&&e.has("OES_texture_float_linear")===!1||l===!1&&F.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(F.anisotropy>1||r.get(F).__currentAnisotropy)&&(s.texParameterf(j,De.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,o.getMaxAnisotropy())),r.get(F).__currentAnisotropy=F.anisotropy)}}function Me(j,F){let be=!1;j.__webglInit===void 0&&(j.__webglInit=!0,F.addEventListener("dispose",J));const De=F.source;let Ae=b.get(De);Ae===void 0&&(Ae={},b.set(De,Ae));const Be=ne(F);if(Be!==j.__cacheKey){Ae[Be]===void 0&&(Ae[Be]={texture:s.createTexture(),usedTimes:0},n.memory.textures++,be=!0),Ae[Be].usedTimes++;const je=Ae[j.__cacheKey];je!==void 0&&(Ae[j.__cacheKey].usedTimes--,je.usedTimes===0&&ee(F)),j.__cacheKey=Be,j.__webglTexture=Ae[Be].texture}return be}function Pe(j,F,be){let De=3553;F.isDataArrayTexture&&(De=35866),F.isData3DTexture&&(De=32879);const Ae=Me(j,F),Be=F.source;if(t.activeTexture(33984+be),t.bindTexture(De,j.__webglTexture),Be.version!==Be.__currentVersion||Ae===!0){s.pixelStorei(37440,F.flipY),s.pixelStorei(37441,F.premultiplyAlpha),s.pixelStorei(3317,F.unpackAlignment),s.pixelStorei(37443,0);const je=B(F)&&z(F.image)===!1;let G=k(F.image,je,!1,v);G=Tt(F,G);const Se=z(G)||l,Z=a.convert(F.format,F.encoding);let H=a.convert(F.type),I=R(F.internalFormat,Z,H,F.encoding,F.isVideoTexture);te(De,F,Se);let oe;const pe=F.mipmaps,Oe=l&&F.isVideoTexture!==!0,Re=Be.__currentVersion===void 0||Ae===!0,Fe=V(F,G,Se);if(F.isDepthTexture)I=6402,l?F.type===FloatType?I=36012:F.type===UnsignedIntType?I=33190:F.type===UnsignedInt248Type?I=35056:I=33189:F.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),F.format===DepthFormat&&I===6402&&F.type!==UnsignedShortType&&F.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),F.type=UnsignedIntType,H=a.convert(F.type)),F.format===DepthStencilFormat&&I===6402&&(I=34041,F.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),F.type=UnsignedInt248Type,H=a.convert(F.type))),Re&&(Oe?t.texStorage2D(3553,1,I,G.width,G.height):t.texImage2D(3553,0,I,G.width,G.height,0,Z,H,null));else if(F.isDataTexture)if(pe.length>0&&Se){Oe&&Re&&t.texStorage2D(3553,Fe,I,pe[0].width,pe[0].height);for(let Ce=0,Ne=pe.length;Ce<Ne;Ce++)oe=pe[Ce],Oe?t.texSubImage2D(3553,Ce,0,0,oe.width,oe.height,Z,H,oe.data):t.texImage2D(3553,Ce,I,oe.width,oe.height,0,Z,H,oe.data);F.generateMipmaps=!1}else Oe?(Re&&t.texStorage2D(3553,Fe,I,G.width,G.height),t.texSubImage2D(3553,0,0,0,G.width,G.height,Z,H,G.data)):t.texImage2D(3553,0,I,G.width,G.height,0,Z,H,G.data);else if(F.isCompressedTexture){Oe&&Re&&t.texStorage2D(3553,Fe,I,pe[0].width,pe[0].height);for(let Ce=0,Ne=pe.length;Ce<Ne;Ce++)oe=pe[Ce],F.format!==RGBAFormat?Z!==null?Oe?t.compressedTexSubImage2D(3553,Ce,0,0,oe.width,oe.height,Z,oe.data):t.compressedTexImage2D(3553,Ce,I,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,Ce,0,0,oe.width,oe.height,Z,H,oe.data):t.texImage2D(3553,Ce,I,oe.width,oe.height,0,Z,H,oe.data)}else if(F.isDataArrayTexture)Oe?(Re&&t.texStorage3D(35866,Fe,I,G.width,G.height,G.depth),t.texSubImage3D(35866,0,0,0,0,G.width,G.height,G.depth,Z,H,G.data)):t.texImage3D(35866,0,I,G.width,G.height,G.depth,0,Z,H,G.data);else if(F.isData3DTexture)Oe?(Re&&t.texStorage3D(32879,Fe,I,G.width,G.height,G.depth),t.texSubImage3D(32879,0,0,0,0,G.width,G.height,G.depth,Z,H,G.data)):t.texImage3D(32879,0,I,G.width,G.height,G.depth,0,Z,H,G.data);else if(F.isFramebufferTexture){if(Re)if(Oe)t.texStorage2D(3553,Fe,I,G.width,G.height);else{let Ce=G.width,Ne=G.height;for(let Ee=0;Ee<Fe;Ee++)t.texImage2D(3553,Ee,I,Ce,Ne,0,Z,H,null),Ce>>=1,Ne>>=1}}else if(pe.length>0&&Se){Oe&&Re&&t.texStorage2D(3553,Fe,I,pe[0].width,pe[0].height);for(let Ce=0,Ne=pe.length;Ce<Ne;Ce++)oe=pe[Ce],Oe?t.texSubImage2D(3553,Ce,0,0,Z,H,oe):t.texImage2D(3553,Ce,I,Z,H,oe);F.generateMipmaps=!1}else Oe?(Re&&t.texStorage2D(3553,Fe,I,G.width,G.height),t.texSubImage2D(3553,0,0,0,Z,H,G)):t.texImage2D(3553,0,I,Z,H,G);P(F,Se)&&U(De),Be.__currentVersion=Be.version,F.onUpdate&&F.onUpdate(F)}j.__version=F.version}function Ue(j,F,be){if(F.image.length!==6)return;const De=Me(j,F),Ae=F.source;if(t.activeTexture(33984+be),t.bindTexture(34067,j.__webglTexture),Ae.version!==Ae.__currentVersion||De===!0){s.pixelStorei(37440,F.flipY),s.pixelStorei(37441,F.premultiplyAlpha),s.pixelStorei(3317,F.unpackAlignment),s.pixelStorei(37443,0);const Be=F.isCompressedTexture||F.image[0].isCompressedTexture,je=F.image[0]&&F.image[0].isDataTexture,G=[];for(let Ce=0;Ce<6;Ce++)!Be&&!je?G[Ce]=k(F.image[Ce],!1,!0,_):G[Ce]=je?F.image[Ce].image:F.image[Ce],G[Ce]=Tt(F,G[Ce]);const Se=G[0],Z=z(Se)||l,H=a.convert(F.format,F.encoding),I=a.convert(F.type),oe=R(F.internalFormat,H,I,F.encoding),pe=l&&F.isVideoTexture!==!0,Oe=Ae.__currentVersion===void 0||De===!0;let Re=V(F,Se,Z);te(34067,F,Z);let Fe;if(Be){pe&&Oe&&t.texStorage2D(34067,Re,oe,Se.width,Se.height);for(let Ce=0;Ce<6;Ce++){Fe=G[Ce].mipmaps;for(let Ne=0;Ne<Fe.length;Ne++){const Ee=Fe[Ne];F.format!==RGBAFormat?H!==null?pe?t.compressedTexSubImage2D(34069+Ce,Ne,0,0,Ee.width,Ee.height,H,Ee.data):t.compressedTexImage2D(34069+Ce,Ne,oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?t.texSubImage2D(34069+Ce,Ne,0,0,Ee.width,Ee.height,H,I,Ee.data):t.texImage2D(34069+Ce,Ne,oe,Ee.width,Ee.height,0,H,I,Ee.data)}}}else{Fe=F.mipmaps,pe&&Oe&&(Fe.length>0&&Re++,t.texStorage2D(34067,Re,oe,G[0].width,G[0].height));for(let Ce=0;Ce<6;Ce++)if(je){pe?t.texSubImage2D(34069+Ce,0,0,0,G[Ce].width,G[Ce].height,H,I,G[Ce].data):t.texImage2D(34069+Ce,0,oe,G[Ce].width,G[Ce].height,0,H,I,G[Ce].data);for(let Ne=0;Ne<Fe.length;Ne++){const Ie=Fe[Ne].image[Ce].image;pe?t.texSubImage2D(34069+Ce,Ne+1,0,0,Ie.width,Ie.height,H,I,Ie.data):t.texImage2D(34069+Ce,Ne+1,oe,Ie.width,Ie.height,0,H,I,Ie.data)}}else{pe?t.texSubImage2D(34069+Ce,0,0,0,H,I,G[Ce]):t.texImage2D(34069+Ce,0,oe,H,I,G[Ce]);for(let Ne=0;Ne<Fe.length;Ne++){const Ee=Fe[Ne];pe?t.texSubImage2D(34069+Ce,Ne+1,0,0,H,I,Ee.image[Ce]):t.texImage2D(34069+Ce,Ne+1,oe,H,I,Ee.image[Ce])}}}P(F,Z)&&U(34067),Ae.__currentVersion=Ae.version,F.onUpdate&&F.onUpdate(F)}j.__version=F.version}function Le(j,F,be,De,Ae){const Be=a.convert(be.format,be.encoding),je=a.convert(be.type),G=R(be.internalFormat,Be,je,be.encoding);r.get(F).__hasExternalTextures||(Ae===32879||Ae===35866?t.texImage3D(Ae,0,G,F.width,F.height,F.depth,0,Be,je,null):t.texImage2D(Ae,0,G,F.width,F.height,0,Be,je,null)),t.bindFramebuffer(36160,j),it(F)?M.framebufferTexture2DMultisampleEXT(36160,De,Ae,r.get(be).__webglTexture,0,nt(F)):s.framebufferTexture2D(36160,De,Ae,r.get(be).__webglTexture,0),t.bindFramebuffer(36160,null)}function $e(j,F,be){if(s.bindRenderbuffer(36161,j),F.depthBuffer&&!F.stencilBuffer){let De=33189;if(be||it(F)){const Ae=F.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===FloatType?De=36012:Ae.type===UnsignedIntType&&(De=33190));const Be=nt(F);it(F)?M.renderbufferStorageMultisampleEXT(36161,Be,De,F.width,F.height):s.renderbufferStorageMultisample(36161,Be,De,F.width,F.height)}else s.renderbufferStorage(36161,De,F.width,F.height);s.framebufferRenderbuffer(36160,36096,36161,j)}else if(F.depthBuffer&&F.stencilBuffer){const De=nt(F);be&&it(F)===!1?s.renderbufferStorageMultisample(36161,De,35056,F.width,F.height):it(F)?M.renderbufferStorageMultisampleEXT(36161,De,35056,F.width,F.height):s.renderbufferStorage(36161,34041,F.width,F.height),s.framebufferRenderbuffer(36160,33306,36161,j)}else{const De=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let Ae=0;Ae<De.length;Ae++){const Be=De[Ae],je=a.convert(Be.format,Be.encoding),G=a.convert(Be.type),Se=R(Be.internalFormat,je,G,Be.encoding),Z=nt(F);be&&it(F)===!1?s.renderbufferStorageMultisample(36161,Z,Se,F.width,F.height):it(F)?M.renderbufferStorageMultisampleEXT(36161,Z,Se,F.width,F.height):s.renderbufferStorage(36161,Se,F.width,F.height)}}s.bindRenderbuffer(36161,null)}function We(j,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,j),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(F.depthTexture).__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),fe(F.depthTexture,0);const De=r.get(F.depthTexture).__webglTexture,Ae=nt(F);if(F.depthTexture.format===DepthFormat)it(F)?M.framebufferTexture2DMultisampleEXT(36160,36096,3553,De,0,Ae):s.framebufferTexture2D(36160,36096,3553,De,0);else if(F.depthTexture.format===DepthStencilFormat)it(F)?M.framebufferTexture2DMultisampleEXT(36160,33306,3553,De,0,Ae):s.framebufferTexture2D(36160,33306,3553,De,0);else throw new Error("Unknown depthTexture format")}function ze(j){const F=r.get(j),be=j.isWebGLCubeRenderTarget===!0;if(j.depthTexture&&!F.__autoAllocateDepthBuffer){if(be)throw new Error("target.depthTexture not supported in Cube render targets");We(F.__webglFramebuffer,j)}else if(be){F.__webglDepthbuffer=[];for(let De=0;De<6;De++)t.bindFramebuffer(36160,F.__webglFramebuffer[De]),F.__webglDepthbuffer[De]=s.createRenderbuffer(),$e(F.__webglDepthbuffer[De],j,!1)}else t.bindFramebuffer(36160,F.__webglFramebuffer),F.__webglDepthbuffer=s.createRenderbuffer(),$e(F.__webglDepthbuffer,j,!1);t.bindFramebuffer(36160,null)}function et(j,F,be){const De=r.get(j);F!==void 0&&Le(De.__webglFramebuffer,j,j.texture,36064,3553),be!==void 0&&ze(j)}function Je(j){const F=j.texture,be=r.get(j),De=r.get(F);j.addEventListener("dispose",ve),j.isWebGLMultipleRenderTargets!==!0&&(De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture()),De.__version=F.version,n.memory.textures++);const Ae=j.isWebGLCubeRenderTarget===!0,Be=j.isWebGLMultipleRenderTargets===!0,je=z(j)||l;if(Ae){be.__webglFramebuffer=[];for(let G=0;G<6;G++)be.__webglFramebuffer[G]=s.createFramebuffer()}else{if(be.__webglFramebuffer=s.createFramebuffer(),Be)if(o.drawBuffers){const G=j.texture;for(let Se=0,Z=G.length;Se<Z;Se++){const H=r.get(G[Se]);H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture(),n.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&j.samples>0&&it(j)===!1){const G=Be?F:[F];be.__webglMultisampledFramebuffer=s.createFramebuffer(),be.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,be.__webglMultisampledFramebuffer);for(let Se=0;Se<G.length;Se++){const Z=G[Se];be.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(36161,be.__webglColorRenderbuffer[Se]);const H=a.convert(Z.format,Z.encoding),I=a.convert(Z.type),oe=R(Z.internalFormat,H,I,Z.encoding),pe=nt(j);s.renderbufferStorageMultisample(36161,pe,oe,j.width,j.height),s.framebufferRenderbuffer(36160,36064+Se,36161,be.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(36161,null),j.depthBuffer&&(be.__webglDepthRenderbuffer=s.createRenderbuffer(),$e(be.__webglDepthRenderbuffer,j,!0)),t.bindFramebuffer(36160,null)}}if(Ae){t.bindTexture(34067,De.__webglTexture),te(34067,F,je);for(let G=0;G<6;G++)Le(be.__webglFramebuffer[G],j,F,36064,34069+G);P(F,je)&&U(34067),t.unbindTexture()}else if(Be){const G=j.texture;for(let Se=0,Z=G.length;Se<Z;Se++){const H=G[Se],I=r.get(H);t.bindTexture(3553,I.__webglTexture),te(3553,H,je),Le(be.__webglFramebuffer,j,H,36064+Se,3553),P(H,je)&&U(3553)}t.unbindTexture()}else{let G=3553;(j.isWebGL3DRenderTarget||j.isWebGLArrayRenderTarget)&&(l?G=j.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(G,De.__webglTexture),te(G,F,je),Le(be.__webglFramebuffer,j,F,36064,G),P(F,je)&&U(G),t.unbindTexture()}j.depthBuffer&&ze(j)}function Ze(j){const F=z(j)||l,be=j.isWebGLMultipleRenderTargets===!0?j.texture:[j.texture];for(let De=0,Ae=be.length;De<Ae;De++){const Be=be[De];if(P(Be,F)){const je=j.isWebGLCubeRenderTarget?34067:3553,G=r.get(Be).__webglTexture;t.bindTexture(je,G),U(je),t.unbindTexture()}}}function tt(j){if(l&&j.samples>0&&it(j)===!1){const F=j.isWebGLMultipleRenderTargets?j.texture:[j.texture],be=j.width,De=j.height;let Ae=16384;const Be=[],je=j.stencilBuffer?33306:36096,G=r.get(j),Se=j.isWebGLMultipleRenderTargets===!0;if(Se)for(let Z=0;Z<F.length;Z++)t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Z,36161,null),t.bindFramebuffer(36160,G.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Z,3553,null,0);t.bindFramebuffer(36008,G.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,G.__webglFramebuffer);for(let Z=0;Z<F.length;Z++){Be.push(36064+Z),j.depthBuffer&&Be.push(je);const H=G.__ignoreDepthValues!==void 0?G.__ignoreDepthValues:!1;if(H===!1&&(j.depthBuffer&&(Ae|=256),j.stencilBuffer&&(Ae|=1024)),Se&&s.framebufferRenderbuffer(36008,36064,36161,G.__webglColorRenderbuffer[Z]),H===!0&&(s.invalidateFramebuffer(36008,[je]),s.invalidateFramebuffer(36009,[je])),Se){const I=r.get(F[Z]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,I,0)}s.blitFramebuffer(0,0,be,De,0,0,be,De,Ae,9728),E&&s.invalidateFramebuffer(36008,Be)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Se)for(let Z=0;Z<F.length;Z++){t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Z,36161,G.__webglColorRenderbuffer[Z]);const H=r.get(F[Z]).__webglTexture;t.bindFramebuffer(36160,G.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Z,3553,H,0)}t.bindFramebuffer(36009,G.__webglMultisampledFramebuffer)}}function nt(j){return Math.min(y,j.samples)}function it(j){const F=r.get(j);return l&&j.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function lt(j){const F=n.render.frame;T.get(j)!==F&&(T.set(j,F),j.update())}function Tt(j,F){const be=j.encoding,De=j.format,Ae=j.type;return j.isCompressedTexture===!0||j.isVideoTexture===!0||j.format===_SRGBAFormat||be!==LinearEncoding&&(be===sRGBEncoding?l===!1?e.has("EXT_sRGB")===!0&&De===RGBAFormat?(j.format=_SRGBAFormat,j.minFilter=LinearFilter,j.generateMipmaps=!1):F=ImageUtils.sRGBToLinear(F):(De!==RGBAFormat||Ae!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",be)),F}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=fe,this.setTexture2DArray=se,this.setTexture3D=Y,this.setTextureCube=ce,this.rebindTextures=et,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=it}function WebGLUtils(s,e,t){const r=t.isWebGL2;function o(a,n){let l;if(a===UnsignedByteType)return 5121;if(a===UnsignedShort4444Type)return 32819;if(a===UnsignedShort5551Type)return 32820;if(a===ByteType)return 5120;if(a===ShortType)return 5122;if(a===UnsignedShortType)return 5123;if(a===IntType)return 5124;if(a===UnsignedIntType)return 5125;if(a===FloatType)return 5126;if(a===HalfFloatType)return r?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===AlphaFormat)return 6406;if(a===RGBAFormat)return 6408;if(a===LuminanceFormat)return 6409;if(a===LuminanceAlphaFormat)return 6410;if(a===DepthFormat)return 6402;if(a===DepthStencilFormat)return 34041;if(a===RedFormat)return 6403;if(a===RGBFormat)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===_SRGBAFormat)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===RedIntegerFormat)return 36244;if(a===RGFormat)return 33319;if(a===RGIntegerFormat)return 33320;if(a===RGBAIntegerFormat)return 36249;if(a===RGB_S3TC_DXT1_Format||a===RGBA_S3TC_DXT1_Format||a===RGBA_S3TC_DXT3_Format||a===RGBA_S3TC_DXT5_Format)if(n===sRGBEncoding)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===RGB_S3TC_DXT1_Format)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===RGB_S3TC_DXT1_Format)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===RGB_PVRTC_4BPPV1_Format||a===RGB_PVRTC_2BPPV1_Format||a===RGBA_PVRTC_4BPPV1_Format||a===RGBA_PVRTC_2BPPV1_Format)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===RGB_PVRTC_4BPPV1_Format)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===RGB_PVRTC_2BPPV1_Format)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===RGBA_PVRTC_4BPPV1_Format)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===RGBA_PVRTC_2BPPV1_Format)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===RGB_ETC1_Format)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===RGB_ETC2_Format||a===RGBA_ETC2_EAC_Format)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===RGB_ETC2_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===RGBA_ETC2_EAC_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===RGBA_ASTC_4x4_Format||a===RGBA_ASTC_5x4_Format||a===RGBA_ASTC_5x5_Format||a===RGBA_ASTC_6x5_Format||a===RGBA_ASTC_6x6_Format||a===RGBA_ASTC_8x5_Format||a===RGBA_ASTC_8x6_Format||a===RGBA_ASTC_8x8_Format||a===RGBA_ASTC_10x5_Format||a===RGBA_ASTC_10x6_Format||a===RGBA_ASTC_10x8_Format||a===RGBA_ASTC_10x10_Format||a===RGBA_ASTC_12x10_Format||a===RGBA_ASTC_12x12_Format)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===RGBA_ASTC_4x4_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===RGBA_ASTC_5x4_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===RGBA_ASTC_5x5_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===RGBA_ASTC_6x5_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===RGBA_ASTC_6x6_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===RGBA_ASTC_8x5_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===RGBA_ASTC_8x6_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===RGBA_ASTC_8x8_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===RGBA_ASTC_10x5_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===RGBA_ASTC_10x6_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===RGBA_ASTC_10x8_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===RGBA_ASTC_10x10_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===RGBA_ASTC_12x10_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===RGBA_ASTC_12x12_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===RGBA_BPTC_Format)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===RGBA_BPTC_Format)return n===sRGBEncoding?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===UnsignedInt248Type?r?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:o}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,n=null;const l=this._targetRay,g=this._grip,_=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(l!==null&&(o=t.getPose(e.targetRaySpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent))),_&&e.hand){n=!0;for(const w of e.hand.values()){const b=t.getJointPose(w,r);if(_.joints[w.jointName]===void 0){const D=new Group;D.matrixAutoUpdate=!1,D.visible=!1,_.joints[w.jointName]=D,_.add(D)}const C=_.joints[w.jointName];b!==null&&(C.matrix.fromArray(b.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.jointRadius=b.radius),C.visible=b!==null}const v=_.joints["index-finger-tip"],y=_.joints["thumb-tip"],M=v.position.distanceTo(y.position),E=.02,T=.005;_.inputState.pinching&&M>E+T?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&M<=E-T&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(g.matrix.fromArray(a.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),a.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(a.linearVelocity)):g.hasLinearVelocity=!1,a.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(a.angularVelocity)):g.hasAngularVelocity=!1));return l!==null&&(l.visible=o!==null),g!==null&&(g.visible=a!==null),_!==null&&(_.visible=n!==null),this}}class DepthTexture extends Texture{constructor(e,t,r,o,a,n,l,g,_,v){if(v=v!==void 0?v:DepthFormat,v!==DepthFormat&&v!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===DepthFormat&&(r=UnsignedIntType),r===void 0&&v===DepthStencilFormat&&(r=UnsignedInt248Type),super(null,o,a,n,l,g,v,r,_),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:NearestFilter,this.minFilter=g!==void 0?g:NearestFilter,this.flipY=!1,this.generateMipmaps=!1}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const r=this;let o=null,a=1,n=null,l="local-floor",g=null,_=null,v=null,y=null,M=null,E=null;const T=t.getContextAttributes();let w=null,b=null;const C=[],D=new Map,k=new PerspectiveCamera;k.layers.enable(1),k.viewport=new Vector4;const z=new PerspectiveCamera;z.layers.enable(2),z.viewport=new Vector4;const B=[k,z],P=new ArrayCamera;P.layers.enable(1),P.layers.enable(2);let U=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=C[ne];return fe===void 0&&(fe=new WebXRController,C[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=C[ne];return fe===void 0&&(fe=new WebXRController,C[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=C[ne];return fe===void 0&&(fe=new WebXRController,C[ne]=fe),fe.getHandSpace()};function V(ne){const fe=D.get(ne.inputSource);fe!==void 0&&fe.dispatchEvent({type:ne.type,data:ne.inputSource})}function Q(){o.removeEventListener("select",V),o.removeEventListener("selectstart",V),o.removeEventListener("selectend",V),o.removeEventListener("squeeze",V),o.removeEventListener("squeezestart",V),o.removeEventListener("squeezeend",V),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",J),D.forEach(function(ne,fe){ne!==void 0&&ne.disconnect(fe)}),D.clear(),U=null,R=null,e.setRenderTarget(w),M=null,y=null,v=null,o=null,b=null,K.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||n},this.setReferenceSpace=function(ne){g=ne},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(w=e.getRenderTarget(),o.addEventListener("select",V),o.addEventListener("selectstart",V),o.addEventListener("selectend",V),o.addEventListener("squeeze",V),o.addEventListener("squeezestart",V),o.addEventListener("squeezeend",V),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:o.renderState.layers===void 0?T.antialias:!0,alpha:T.alpha,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:M}),b=new WebGLRenderTarget(M.framebufferWidth,M.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,encoding:e.outputEncoding})}else{let fe=null,se=null,Y=null;T.depth&&(Y=T.stencil?35056:33190,fe=T.stencil?DepthStencilFormat:DepthFormat,se=T.stencil?UnsignedInt248Type:UnsignedIntType);const ce={colorFormat:e.outputEncoding===sRGBEncoding?35907:32856,depthFormat:Y,scaleFactor:a};v=new XRWebGLBinding(o,t),y=v.createProjectionLayer(ce),o.updateRenderState({layers:[y]}),b=new WebGLRenderTarget(y.textureWidth,y.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(y.textureWidth,y.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,encoding:e.outputEncoding,samples:T.antialias?4:0});const ge=e.properties.get(b);ge.__ignoreDepthValues=y.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(1),g=null,n=await o.requestReferenceSpace(l),K.setContext(o),K.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function J(ne){const fe=o.inputSources;for(let se=0;se<fe.length;se++){const Y=fe[se].handedness==="right"?1:0;D.set(fe[se],C[Y])}for(let se=0;se<ne.removed.length;se++){const Y=ne.removed[se],ce=D.get(Y);ce&&(ce.dispatchEvent({type:"disconnected",data:Y}),D.delete(Y))}for(let se=0;se<ne.added.length;se++){const Y=ne.added[se],ce=D.get(Y);ce&&ce.dispatchEvent({type:"connected",data:Y})}}const ve=new Vector3,le=new Vector3;function ee(ne,fe,se){ve.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(se.matrixWorld);const Y=ve.distanceTo(le),ce=fe.projectionMatrix.elements,ge=se.projectionMatrix.elements,q=ce[14]/(ce[10]-1),te=ce[14]/(ce[10]+1),Me=(ce[9]+1)/ce[5],Pe=(ce[9]-1)/ce[5],Ue=(ce[8]-1)/ce[0],Le=(ge[8]+1)/ge[0],$e=q*Ue,We=q*Le,ze=Y/(-Ue+Le),et=ze*-Ue;fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(et),ne.translateZ(ze),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const Je=q+ze,Ze=te+ze,tt=$e-et,nt=We+(Y-et),it=Me*te/Ze*Je,lt=Pe*te/Ze*Je;ne.projectionMatrix.makePerspective(tt,nt,it,lt,Je,Ze)}function he(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;P.near=z.near=k.near=ne.near,P.far=z.far=k.far=ne.far,(U!==P.near||R!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,R=P.far);const fe=ne.parent,se=P.cameras;he(P,fe);for(let ce=0;ce<se.length;ce++)he(se[ce],fe);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),ne.position.copy(P.position),ne.quaternion.copy(P.quaternion),ne.scale.copy(P.scale),ne.matrix.copy(P.matrix),ne.matrixWorld.copy(P.matrixWorld);const Y=ne.children;for(let ce=0,ge=Y.length;ce<ge;ce++)Y[ce].updateMatrixWorld(!0);se.length===2?ee(P,k,z):P.projectionMatrix.copy(k.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(y!==null)return y.fixedFoveation;if(M!==null)return M.fixedFoveation},this.setFoveation=function(ne){y!==null&&(y.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)};let ue=null;function $(ne,fe){if(_=fe.getViewerPose(g||n),E=fe,_!==null){const Y=_.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let ce=!1;Y.length!==P.cameras.length&&(P.cameras.length=0,ce=!0);for(let ge=0;ge<Y.length;ge++){const q=Y[ge];let te=null;if(M!==null)te=M.getViewport(q);else{const Pe=v.getViewSubImage(y,q);te=Pe.viewport,ge===0&&(e.setRenderTargetTextures(b,Pe.colorTexture,y.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(b))}let Me=B[ge];Me===void 0&&(Me=new PerspectiveCamera,Me.layers.enable(ge),Me.viewport=new Vector4,B[ge]=Me),Me.matrix.fromArray(q.transform.matrix),Me.projectionMatrix.fromArray(q.projectionMatrix),Me.viewport.set(te.x,te.y,te.width,te.height),ge===0&&P.matrix.copy(Me.matrix),ce===!0&&P.cameras.push(Me)}}const se=o.inputSources;for(let Y=0;Y<C.length;Y++){const ce=se[Y],ge=D.get(ce);ge!==void 0&&ge.update(ce,fe,g||n)}ue&&ue(ne,fe),E=null}const K=new WebGLAnimation;K.setAnimationLoop($),this.setAnimationLoop=function(ne){ue=ne},this.dispose=function(){}}}function WebGLMaterials(s,e){function t(w,b){w.fogColor.value.copy(b.color),b.isFog?(w.fogNear.value=b.near,w.fogFar.value=b.far):b.isFogExp2&&(w.fogDensity.value=b.density)}function r(w,b,C,D,k){b.isMeshBasicMaterial||b.isMeshLambertMaterial?o(w,b):b.isMeshToonMaterial?(o(w,b),v(w,b)):b.isMeshPhongMaterial?(o(w,b),_(w,b)):b.isMeshStandardMaterial?(o(w,b),y(w,b),b.isMeshPhysicalMaterial&&M(w,b,k)):b.isMeshMatcapMaterial?(o(w,b),E(w,b)):b.isMeshDepthMaterial?o(w,b):b.isMeshDistanceMaterial?(o(w,b),T(w,b)):b.isMeshNormalMaterial?o(w,b):b.isLineBasicMaterial?(a(w,b),b.isLineDashedMaterial&&n(w,b)):b.isPointsMaterial?l(w,b,C,D):b.isSpriteMaterial?g(w,b):b.isShadowMaterial?(w.color.value.copy(b.color),w.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function o(w,b){w.opacity.value=b.opacity,b.color&&w.diffuse.value.copy(b.color),b.emissive&&w.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(w.map.value=b.map),b.alphaMap&&(w.alphaMap.value=b.alphaMap),b.bumpMap&&(w.bumpMap.value=b.bumpMap,w.bumpScale.value=b.bumpScale,b.side===BackSide&&(w.bumpScale.value*=-1)),b.displacementMap&&(w.displacementMap.value=b.displacementMap,w.displacementScale.value=b.displacementScale,w.displacementBias.value=b.displacementBias),b.emissiveMap&&(w.emissiveMap.value=b.emissiveMap),b.normalMap&&(w.normalMap.value=b.normalMap,w.normalScale.value.copy(b.normalScale),b.side===BackSide&&w.normalScale.value.negate()),b.specularMap&&(w.specularMap.value=b.specularMap),b.alphaTest>0&&(w.alphaTest.value=b.alphaTest);const C=e.get(b).envMap;if(C&&(w.envMap.value=C,w.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=b.reflectivity,w.ior.value=b.ior,w.refractionRatio.value=b.refractionRatio),b.lightMap){w.lightMap.value=b.lightMap;const z=s.physicallyCorrectLights!==!0?Math.PI:1;w.lightMapIntensity.value=b.lightMapIntensity*z}b.aoMap&&(w.aoMap.value=b.aoMap,w.aoMapIntensity.value=b.aoMapIntensity);let D;b.map?D=b.map:b.specularMap?D=b.specularMap:b.displacementMap?D=b.displacementMap:b.normalMap?D=b.normalMap:b.bumpMap?D=b.bumpMap:b.roughnessMap?D=b.roughnessMap:b.metalnessMap?D=b.metalnessMap:b.alphaMap?D=b.alphaMap:b.emissiveMap?D=b.emissiveMap:b.clearcoatMap?D=b.clearcoatMap:b.clearcoatNormalMap?D=b.clearcoatNormalMap:b.clearcoatRoughnessMap?D=b.clearcoatRoughnessMap:b.iridescenceMap?D=b.iridescenceMap:b.iridescenceThicknessMap?D=b.iridescenceThicknessMap:b.specularIntensityMap?D=b.specularIntensityMap:b.specularColorMap?D=b.specularColorMap:b.transmissionMap?D=b.transmissionMap:b.thicknessMap?D=b.thicknessMap:b.sheenColorMap?D=b.sheenColorMap:b.sheenRoughnessMap&&(D=b.sheenRoughnessMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),w.uvTransform.value.copy(D.matrix));let k;b.aoMap?k=b.aoMap:b.lightMap&&(k=b.lightMap),k!==void 0&&(k.isWebGLRenderTarget&&(k=k.texture),k.matrixAutoUpdate===!0&&k.updateMatrix(),w.uv2Transform.value.copy(k.matrix))}function a(w,b){w.diffuse.value.copy(b.color),w.opacity.value=b.opacity}function n(w,b){w.dashSize.value=b.dashSize,w.totalSize.value=b.dashSize+b.gapSize,w.scale.value=b.scale}function l(w,b,C,D){w.diffuse.value.copy(b.color),w.opacity.value=b.opacity,w.size.value=b.size*C,w.scale.value=D*.5,b.map&&(w.map.value=b.map),b.alphaMap&&(w.alphaMap.value=b.alphaMap),b.alphaTest>0&&(w.alphaTest.value=b.alphaTest);let k;b.map?k=b.map:b.alphaMap&&(k=b.alphaMap),k!==void 0&&(k.matrixAutoUpdate===!0&&k.updateMatrix(),w.uvTransform.value.copy(k.matrix))}function g(w,b){w.diffuse.value.copy(b.color),w.opacity.value=b.opacity,w.rotation.value=b.rotation,b.map&&(w.map.value=b.map),b.alphaMap&&(w.alphaMap.value=b.alphaMap),b.alphaTest>0&&(w.alphaTest.value=b.alphaTest);let C;b.map?C=b.map:b.alphaMap&&(C=b.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),w.uvTransform.value.copy(C.matrix))}function _(w,b){w.specular.value.copy(b.specular),w.shininess.value=Math.max(b.shininess,1e-4)}function v(w,b){b.gradientMap&&(w.gradientMap.value=b.gradientMap)}function y(w,b){w.roughness.value=b.roughness,w.metalness.value=b.metalness,b.roughnessMap&&(w.roughnessMap.value=b.roughnessMap),b.metalnessMap&&(w.metalnessMap.value=b.metalnessMap),e.get(b).envMap&&(w.envMapIntensity.value=b.envMapIntensity)}function M(w,b,C){w.ior.value=b.ior,b.sheen>0&&(w.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),w.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(w.sheenColorMap.value=b.sheenColorMap),b.sheenRoughnessMap&&(w.sheenRoughnessMap.value=b.sheenRoughnessMap)),b.clearcoat>0&&(w.clearcoat.value=b.clearcoat,w.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(w.clearcoatMap.value=b.clearcoatMap),b.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap),b.clearcoatNormalMap&&(w.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),w.clearcoatNormalMap.value=b.clearcoatNormalMap,b.side===BackSide&&w.clearcoatNormalScale.value.negate())),b.iridescence>0&&(w.iridescence.value=b.iridescence,w.iridescenceIOR.value=b.iridescenceIOR,w.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(w.iridescenceMap.value=b.iridescenceMap),b.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=b.iridescenceThicknessMap)),b.transmission>0&&(w.transmission.value=b.transmission,w.transmissionSamplerMap.value=C.texture,w.transmissionSamplerSize.value.set(C.width,C.height),b.transmissionMap&&(w.transmissionMap.value=b.transmissionMap),w.thickness.value=b.thickness,b.thicknessMap&&(w.thicknessMap.value=b.thicknessMap),w.attenuationDistance.value=b.attenuationDistance,w.attenuationColor.value.copy(b.attenuationColor)),w.specularIntensity.value=b.specularIntensity,w.specularColor.value.copy(b.specularColor),b.specularIntensityMap&&(w.specularIntensityMap.value=b.specularIntensityMap),b.specularColorMap&&(w.specularColorMap.value=b.specularColorMap)}function E(w,b){b.matcap&&(w.matcap.value=b.matcap)}function T(w,b){w.referencePosition.value.copy(b.referencePosition),w.nearDistance.value=b.nearDistance,w.farDistance.value=b.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:r}}function createCanvasElement(){const s=createElementNS("canvas");return s.style.display="block",s}function WebGLRenderer(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:createCanvasElement(),t=s.context!==void 0?s.context:null,r=s.depth!==void 0?s.depth:!0,o=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,n=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,g=s.powerPreference!==void 0?s.powerPreference:"default",_=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let v;t!==null?v=t.getContextAttributes().alpha:v=s.alpha!==void 0?s.alpha:!1;let y=null,M=null;const E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=LinearEncoding,this.physicallyCorrectLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const w=this;let b=!1,C=0,D=0,k=null,z=-1,B=null;const P=new Vector4,U=new Vector4;let R=null,V=e.width,Q=e.height,J=1,ve=null,le=null;const ee=new Vector4(0,0,V,Q),he=new Vector4(0,0,V,Q);let ue=!1;const $=new Frustum;let K=!1,ne=!1,fe=null;const se=new Matrix4,Y=new Vector2,ce=new Vector3,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return k===null?J:1}let te=t;function Me(W,de){for(let _e=0;_e<W.length;_e++){const me=W[_e],we=e.getContext(me,de);if(we!==null)return we}return null}try{const W={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:n,preserveDrawingBuffer:l,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${REVISION}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",pe,!1),te===null){const de=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&de.shift(),te=Me(de,W),te===null)throw Me(de)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(W){throw console.error("THREE.WebGLRenderer: "+W.message),W}let Pe,Ue,Le,$e,We,ze,et,Je,Ze,tt,nt,it,lt,Tt,j,F,be,De,Ae,Be,je,G,Se;function Z(){Pe=new WebGLExtensions(te),Ue=new WebGLCapabilities(te,Pe,s),Pe.init(Ue),G=new WebGLUtils(te,Pe,Ue),Le=new WebGLState(te,Pe,Ue),$e=new WebGLInfo(te),We=new WebGLProperties,ze=new WebGLTextures(te,Pe,Le,We,Ue,G,$e),et=new WebGLCubeMaps(w),Je=new WebGLCubeUVMaps(w),Ze=new WebGLAttributes(te,Ue),Se=new WebGLBindingStates(te,Pe,Ze,Ue),tt=new WebGLGeometries(te,Ze,$e,Se),nt=new WebGLObjects(te,tt,Ze,$e),Ae=new WebGLMorphtargets(te,Ue,ze),F=new WebGLClipping(We),it=new WebGLPrograms(w,et,Je,Pe,Ue,Se,F),lt=new WebGLMaterials(w,We),Tt=new WebGLRenderLists,j=new WebGLRenderStates(Pe,Ue),De=new WebGLBackground(w,et,Le,nt,v,n),be=new WebGLShadowMap(w,nt,Ue),Be=new WebGLBufferRenderer(te,Pe,$e,Ue),je=new WebGLIndexedBufferRenderer(te,Pe,$e,Ue),$e.programs=it.programs,w.capabilities=Ue,w.extensions=Pe,w.properties=We,w.renderLists=Tt,w.shadowMap=be,w.state=Le,w.info=$e}Z();const H=new WebXRManager(w,te);this.xr=H,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const W=Pe.get("WEBGL_lose_context");W&&W.loseContext()},this.forceContextRestore=function(){const W=Pe.get("WEBGL_lose_context");W&&W.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(W){W!==void 0&&(J=W,this.setSize(V,Q,!1))},this.getSize=function(W){return W.set(V,Q)},this.setSize=function(W,de,_e){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=W,Q=de,e.width=Math.floor(W*J),e.height=Math.floor(de*J),_e!==!1&&(e.style.width=W+"px",e.style.height=de+"px"),this.setViewport(0,0,W,de)},this.getDrawingBufferSize=function(W){return W.set(V*J,Q*J).floor()},this.setDrawingBufferSize=function(W,de,_e){V=W,Q=de,J=_e,e.width=Math.floor(W*_e),e.height=Math.floor(de*_e),this.setViewport(0,0,W,de)},this.getCurrentViewport=function(W){return W.copy(P)},this.getViewport=function(W){return W.copy(ee)},this.setViewport=function(W,de,_e,me){W.isVector4?ee.set(W.x,W.y,W.z,W.w):ee.set(W,de,_e,me),Le.viewport(P.copy(ee).multiplyScalar(J).floor())},this.getScissor=function(W){return W.copy(he)},this.setScissor=function(W,de,_e,me){W.isVector4?he.set(W.x,W.y,W.z,W.w):he.set(W,de,_e,me),Le.scissor(U.copy(he).multiplyScalar(J).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(W){Le.setScissorTest(ue=W)},this.setOpaqueSort=function(W){ve=W},this.setTransparentSort=function(W){le=W},this.getClearColor=function(W){return W.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(W=!0,de=!0,_e=!0){let me=0;W&&(me|=16384),de&&(me|=256),_e&&(me|=1024),te.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Tt.dispose(),j.dispose(),We.dispose(),et.dispose(),Je.dispose(),nt.dispose(),Se.dispose(),it.dispose(),H.dispose(),H.removeEventListener("sessionstart",Ee),H.removeEventListener("sessionend",Ie),fe&&(fe.dispose(),fe=null),ke.stop()};function I(W){W.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const W=$e.autoReset,de=be.enabled,_e=be.autoUpdate,me=be.needsUpdate,we=be.type;Z(),$e.autoReset=W,be.enabled=de,be.autoUpdate=_e,be.needsUpdate=me,be.type=we}function pe(W){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",W.statusMessage)}function Oe(W){const de=W.target;de.removeEventListener("dispose",Oe),Re(de)}function Re(W){Fe(W),We.remove(W)}function Fe(W){const de=We.get(W).programs;de!==void 0&&(de.forEach(function(_e){it.releaseProgram(_e)}),W.isShaderMaterial&&it.releaseShaderCache(W))}this.renderBufferDirect=function(W,de,_e,me,we,Qe){de===null&&(de=ge);const rt=we.isMesh&&we.matrixWorld.determinant()<0,at=tn(W,de,_e,me,we);Le.setMaterial(me,rt);let st=_e.index;const dt=_e.attributes.position;if(st===null){if(dt===void 0||dt.count===0)return}else if(st.count===0)return;let ft=1;me.wireframe===!0&&(st=tt.getWireframeAttribute(_e),ft=2),Se.setup(we,me,at,_e,st);let ht,_t=Be;st!==null&&(ht=Ze.get(st),_t=je,_t.setIndex(ht));const on=st!==null?st.count:dt.count,ln=_e.drawRange.start*ft,un=_e.drawRange.count*ft,Jt=Qe!==null?Qe.start*ft:0,pt=Qe!==null?Qe.count*ft:1/0,hn=Math.max(ln,Jt),Lt=Math.min(on,ln+un,Jt+pt)-1,Qt=Math.max(0,Lt-hn+1);if(Qt!==0){if(we.isMesh)me.wireframe===!0?(Le.setLineWidth(me.wireframeLinewidth*q()),_t.setMode(1)):_t.setMode(4);else if(we.isLine){let an=me.linewidth;an===void 0&&(an=1),Le.setLineWidth(an*q()),we.isLineSegments?_t.setMode(1):we.isLineLoop?_t.setMode(2):_t.setMode(3)}else we.isPoints?_t.setMode(0):we.isSprite&&_t.setMode(4);if(we.isInstancedMesh)_t.renderInstances(hn,Qt,we.count);else if(_e.isInstancedBufferGeometry){const an=Math.min(_e.instanceCount,_e._maxInstanceCount);_t.renderInstances(hn,Qt,an)}else _t.render(hn,Qt)}},this.compile=function(W,de){M=j.get(W),M.init(),T.push(M),W.traverseVisible(function(_e){_e.isLight&&_e.layers.test(de.layers)&&(M.pushLight(_e),_e.castShadow&&M.pushShadow(_e))}),M.setupLights(w.physicallyCorrectLights),W.traverse(function(_e){const me=_e.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Qe=me[we];rn(Qe,W,_e)}else rn(me,W,_e)}),T.pop(),M=null};let Ce=null;function Ne(W){Ce&&Ce(W)}function Ee(){ke.stop()}function Ie(){ke.start()}const ke=new WebGLAnimation;ke.setAnimationLoop(Ne),typeof self!="undefined"&&ke.setContext(self),this.setAnimationLoop=function(W){Ce=W,H.setAnimationLoop(W),W===null?ke.stop():ke.start()},H.addEventListener("sessionstart",Ee),H.addEventListener("sessionend",Ie),this.render=function(W,de){if(de!==void 0&&de.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;W.autoUpdate===!0&&W.updateMatrixWorld(),de.parent===null&&de.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(de),de=H.getCamera()),W.isScene===!0&&W.onBeforeRender(w,W,de,k),M=j.get(W,T.length),M.init(),T.push(M),se.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),$.setFromProjectionMatrix(se),ne=this.localClippingEnabled,K=F.init(this.clippingPlanes,ne,de),y=Tt.get(W,E.length),y.init(),E.push(y),He(W,de,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(ve,le),K===!0&&F.beginShadows();const _e=M.state.shadowsArray;if(be.render(_e,W,de),K===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),De.render(y,W),M.setupLights(w.physicallyCorrectLights),de.isArrayCamera){const me=de.cameras;for(let we=0,Qe=me.length;we<Qe;we++){const rt=me[we];ut(y,W,rt,rt.viewport)}}else ut(y,W,de);k!==null&&(ze.updateMultisampleRenderTarget(k),ze.updateRenderTargetMipmap(k)),W.isScene===!0&&W.onAfterRender(w,W,de),Se.resetDefaultState(),z=-1,B=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function He(W,de,_e,me){if(W.visible===!1)return;if(W.layers.test(de.layers)){if(W.isGroup)_e=W.renderOrder;else if(W.isLOD)W.autoUpdate===!0&&W.update(de);else if(W.isLight)M.pushLight(W),W.castShadow&&M.pushShadow(W);else if(W.isSprite){if(!W.frustumCulled||$.intersectsSprite(W)){me&&ce.setFromMatrixPosition(W.matrixWorld).applyMatrix4(se);const rt=nt.update(W),at=W.material;at.visible&&y.push(W,rt,at,_e,ce.z,null)}}else if((W.isMesh||W.isLine||W.isPoints)&&(W.isSkinnedMesh&&W.skeleton.frame!==$e.render.frame&&(W.skeleton.update(),W.skeleton.frame=$e.render.frame),!W.frustumCulled||$.intersectsObject(W))){me&&ce.setFromMatrixPosition(W.matrixWorld).applyMatrix4(se);const rt=nt.update(W),at=W.material;if(Array.isArray(at)){const st=rt.groups;for(let dt=0,ft=st.length;dt<ft;dt++){const ht=st[dt],_t=at[ht.materialIndex];_t&&_t.visible&&y.push(W,rt,_t,_e,ce.z,ht)}}else at.visible&&y.push(W,rt,at,_e,ce.z,null)}}const Qe=W.children;for(let rt=0,at=Qe.length;rt<at;rt++)He(Qe[rt],de,_e,me)}function ut(W,de,_e,me){const we=W.opaque,Qe=W.transmissive,rt=W.transparent;M.setupLightsView(_e),Qe.length>0&&Yt(we,de,_e),me&&Le.viewport(P.copy(me)),we.length>0&&It(we,de,_e),Qe.length>0&&It(Qe,de,_e),rt.length>0&&It(rt,de,_e),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Yt(W,de,_e){const me=Ue.isWebGL2;fe===null&&(fe=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:me&&a===!0?4:0})),w.getDrawingBufferSize(Y),me?fe.setSize(Y.x,Y.y):fe.setSize(floorPowerOfTwo(Y.x),floorPowerOfTwo(Y.y));const we=w.getRenderTarget();w.setRenderTarget(fe),w.clear();const Qe=w.toneMapping;w.toneMapping=NoToneMapping,It(W,de,_e),w.toneMapping=Qe,ze.updateMultisampleRenderTarget(fe),ze.updateRenderTargetMipmap(fe),w.setRenderTarget(we)}function It(W,de,_e){const me=de.isScene===!0?de.overrideMaterial:null;for(let we=0,Qe=W.length;we<Qe;we++){const rt=W[we],at=rt.object,st=rt.geometry,dt=me===null?rt.material:me,ft=rt.group;at.layers.test(_e.layers)&&fn(at,de,_e,st,dt,ft)}}function fn(W,de,_e,me,we,Qe){W.onBeforeRender(w,de,_e,me,we,Qe),W.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,W.matrixWorld),W.normalMatrix.getNormalMatrix(W.modelViewMatrix),we.onBeforeRender(w,de,_e,me,W,Qe),we.transparent===!0&&we.side===DoubleSide?(we.side=BackSide,we.needsUpdate=!0,w.renderBufferDirect(_e,de,me,we,W,Qe),we.side=FrontSide,we.needsUpdate=!0,w.renderBufferDirect(_e,de,me,we,W,Qe),we.side=DoubleSide):w.renderBufferDirect(_e,de,me,we,W,Qe),W.onAfterRender(w,de,_e,me,we,Qe)}function rn(W,de,_e){de.isScene!==!0&&(de=ge);const me=We.get(W),we=M.state.lights,Qe=M.state.shadowsArray,rt=we.state.version,at=it.getParameters(W,we.state,Qe,de,_e),st=it.getProgramCacheKey(at);let dt=me.programs;me.environment=W.isMeshStandardMaterial?de.environment:null,me.fog=de.fog,me.envMap=(W.isMeshStandardMaterial?Je:et).get(W.envMap||me.environment),dt===void 0&&(W.addEventListener("dispose",Oe),dt=new Map,me.programs=dt);let ft=dt.get(st);if(ft!==void 0){if(me.currentProgram===ft&&me.lightsStateVersion===rt)return sn(W,at),ft}else at.uniforms=it.getUniforms(W),W.onBuild(_e,at,w),W.onBeforeCompile(at,w),ft=it.acquireProgram(at,st),dt.set(st,ft),me.uniforms=at.uniforms;const ht=me.uniforms;(!W.isShaderMaterial&&!W.isRawShaderMaterial||W.clipping===!0)&&(ht.clippingPlanes=F.uniform),sn(W,at),me.needsLights=mn(W),me.lightsStateVersion=rt,me.needsLights&&(ht.ambientLightColor.value=we.state.ambient,ht.lightProbe.value=we.state.probe,ht.directionalLights.value=we.state.directional,ht.directionalLightShadows.value=we.state.directionalShadow,ht.spotLights.value=we.state.spot,ht.spotLightShadows.value=we.state.spotShadow,ht.rectAreaLights.value=we.state.rectArea,ht.ltc_1.value=we.state.rectAreaLTC1,ht.ltc_2.value=we.state.rectAreaLTC2,ht.pointLights.value=we.state.point,ht.pointLightShadows.value=we.state.pointShadow,ht.hemisphereLights.value=we.state.hemi,ht.directionalShadowMap.value=we.state.directionalShadowMap,ht.directionalShadowMatrix.value=we.state.directionalShadowMatrix,ht.spotShadowMap.value=we.state.spotShadowMap,ht.spotShadowMatrix.value=we.state.spotShadowMatrix,ht.pointShadowMap.value=we.state.pointShadowMap,ht.pointShadowMatrix.value=we.state.pointShadowMatrix);const _t=ft.getUniforms(),on=WebGLUniforms.seqWithValue(_t.seq,ht);return me.currentProgram=ft,me.uniformsList=on,ft}function sn(W,de){const _e=We.get(W);_e.outputEncoding=de.outputEncoding,_e.instancing=de.instancing,_e.skinning=de.skinning,_e.morphTargets=de.morphTargets,_e.morphNormals=de.morphNormals,_e.morphColors=de.morphColors,_e.morphTargetsCount=de.morphTargetsCount,_e.numClippingPlanes=de.numClippingPlanes,_e.numIntersection=de.numClipIntersection,_e.vertexAlphas=de.vertexAlphas,_e.vertexTangents=de.vertexTangents,_e.toneMapping=de.toneMapping}function tn(W,de,_e,me,we){de.isScene!==!0&&(de=ge),ze.resetTextureUnits();const Qe=de.fog,rt=me.isMeshStandardMaterial?de.environment:null,at=k===null?w.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:LinearEncoding,st=(me.isMeshStandardMaterial?Je:et).get(me.envMap||rt),dt=me.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,ft=!!me.normalMap&&!!_e.attributes.tangent,ht=!!_e.morphAttributes.position,_t=!!_e.morphAttributes.normal,on=!!_e.morphAttributes.color,ln=me.toneMapped?w.toneMapping:NoToneMapping,un=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Jt=un!==void 0?un.length:0,pt=We.get(me),hn=M.state.lights;if(K===!0&&(ne===!0||W!==B)){const Vt=W===B&&me.id===z;F.setState(me,W,Vt)}let Lt=!1;me.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==hn.state.version||pt.outputEncoding!==at||we.isInstancedMesh&&pt.instancing===!1||!we.isInstancedMesh&&pt.instancing===!0||we.isSkinnedMesh&&pt.skinning===!1||!we.isSkinnedMesh&&pt.skinning===!0||pt.envMap!==st||me.fog===!0&&pt.fog!==Qe||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==F.numPlanes||pt.numIntersection!==F.numIntersection)||pt.vertexAlphas!==dt||pt.vertexTangents!==ft||pt.morphTargets!==ht||pt.morphNormals!==_t||pt.morphColors!==on||pt.toneMapping!==ln||Ue.isWebGL2===!0&&pt.morphTargetsCount!==Jt)&&(Lt=!0):(Lt=!0,pt.__version=me.version);let Qt=pt.currentProgram;Lt===!0&&(Qt=rn(me,de,we));let an=!1,gn=!1,Cn=!1;const Ot=Qt.getUniforms(),_n=pt.uniforms;if(Le.useProgram(Qt.program)&&(an=!0,gn=!0,Cn=!0),me.id!==z&&(z=me.id,gn=!0),an||B!==W){if(Ot.setValue(te,"projectionMatrix",W.projectionMatrix),Ue.logarithmicDepthBuffer&&Ot.setValue(te,"logDepthBufFC",2/(Math.log(W.far+1)/Math.LN2)),B!==W&&(B=W,gn=!0,Cn=!0),me.isShaderMaterial||me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshStandardMaterial||me.envMap){const Vt=Ot.map.cameraPosition;Vt!==void 0&&Vt.setValue(te,ce.setFromMatrixPosition(W.matrixWorld))}(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&Ot.setValue(te,"isOrthographic",W.isOrthographicCamera===!0),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial||me.isShadowMaterial||we.isSkinnedMesh)&&Ot.setValue(te,"viewMatrix",W.matrixWorldInverse)}if(we.isSkinnedMesh){Ot.setOptional(te,we,"bindMatrix"),Ot.setOptional(te,we,"bindMatrixInverse");const Vt=we.skeleton;Vt&&(Ue.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ot.setValue(te,"boneTexture",Vt.boneTexture,ze),Ot.setValue(te,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dn=_e.morphAttributes;return(dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0&&Ue.isWebGL2===!0)&&Ae.update(we,_e,me,Qt),(gn||pt.receiveShadow!==we.receiveShadow)&&(pt.receiveShadow=we.receiveShadow,Ot.setValue(te,"receiveShadow",we.receiveShadow)),gn&&(Ot.setValue(te,"toneMappingExposure",w.toneMappingExposure),pt.needsLights&&cn(_n,Cn),Qe&&me.fog===!0&&lt.refreshFogUniforms(_n,Qe),lt.refreshMaterialUniforms(_n,me,J,Q,fe),WebGLUniforms.upload(te,pt.uniformsList,_n,ze)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(te,pt.uniformsList,_n,ze),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&Ot.setValue(te,"center",we.center),Ot.setValue(te,"modelViewMatrix",we.modelViewMatrix),Ot.setValue(te,"normalMatrix",we.normalMatrix),Ot.setValue(te,"modelMatrix",we.matrixWorld),Qt}function cn(W,de){W.ambientLightColor.needsUpdate=de,W.lightProbe.needsUpdate=de,W.directionalLights.needsUpdate=de,W.directionalLightShadows.needsUpdate=de,W.pointLights.needsUpdate=de,W.pointLightShadows.needsUpdate=de,W.spotLights.needsUpdate=de,W.spotLightShadows.needsUpdate=de,W.rectAreaLights.needsUpdate=de,W.hemisphereLights.needsUpdate=de}function mn(W){return W.isMeshLambertMaterial||W.isMeshToonMaterial||W.isMeshPhongMaterial||W.isMeshStandardMaterial||W.isShadowMaterial||W.isShaderMaterial&&W.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(W,de,_e){We.get(W.texture).__webglTexture=de,We.get(W.depthTexture).__webglTexture=_e;const me=We.get(W);me.__hasExternalTextures=!0,me.__hasExternalTextures&&(me.__autoAllocateDepthBuffer=_e===void 0,me.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),me.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(W,de){const _e=We.get(W);_e.__webglFramebuffer=de,_e.__useDefaultFramebuffer=de===void 0},this.setRenderTarget=function(W,de=0,_e=0){k=W,C=de,D=_e;let me=!0;if(W){const st=We.get(W);st.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(36160,null),me=!1):st.__webglFramebuffer===void 0?ze.setupRenderTarget(W):st.__hasExternalTextures&&ze.rebindTextures(W,We.get(W.texture).__webglTexture,We.get(W.depthTexture).__webglTexture)}let we=null,Qe=!1,rt=!1;if(W){const st=W.texture;(st.isData3DTexture||st.isDataArrayTexture)&&(rt=!0);const dt=We.get(W).__webglFramebuffer;W.isWebGLCubeRenderTarget?(we=dt[de],Qe=!0):Ue.isWebGL2&&W.samples>0&&ze.useMultisampledRTT(W)===!1?we=We.get(W).__webglMultisampledFramebuffer:we=dt,P.copy(W.viewport),U.copy(W.scissor),R=W.scissorTest}else P.copy(ee).multiplyScalar(J).floor(),U.copy(he).multiplyScalar(J).floor(),R=ue;if(Le.bindFramebuffer(36160,we)&&Ue.drawBuffers&&me&&Le.drawBuffers(W,we),Le.viewport(P),Le.scissor(U),Le.setScissorTest(R),Qe){const st=We.get(W.texture);te.framebufferTexture2D(36160,36064,34069+de,st.__webglTexture,_e)}else if(rt){const st=We.get(W.texture),dt=de||0;te.framebufferTextureLayer(36160,36064,st.__webglTexture,_e||0,dt)}z=-1},this.readRenderTargetPixels=function(W,de,_e,me,we,Qe,rt){if(!(W&&W.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=We.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&rt!==void 0&&(at=at[rt]),at){Le.bindFramebuffer(36160,at);try{const st=W.texture,dt=st.format,ft=st.type;if(dt!==RGBAFormat&&G.convert(dt)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=ft===HalfFloatType&&(Pe.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(ft!==UnsignedByteType&&G.convert(ft)!==te.getParameter(35738)&&!(ft===FloatType&&(Ue.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}de>=0&&de<=W.width-me&&_e>=0&&_e<=W.height-we&&te.readPixels(de,_e,me,we,G.convert(dt),G.convert(ft),Qe)}finally{const st=k!==null?We.get(k).__webglFramebuffer:null;Le.bindFramebuffer(36160,st)}}},this.copyFramebufferToTexture=function(W,de,_e=0){const me=Math.pow(2,-_e),we=Math.floor(de.image.width*me),Qe=Math.floor(de.image.height*me);ze.setTexture2D(de,0),te.copyTexSubImage2D(3553,_e,0,0,W.x,W.y,we,Qe),Le.unbindTexture()},this.copyTextureToTexture=function(W,de,_e,me=0){const we=de.image.width,Qe=de.image.height,rt=G.convert(_e.format),at=G.convert(_e.type);ze.setTexture2D(_e,0),te.pixelStorei(37440,_e.flipY),te.pixelStorei(37441,_e.premultiplyAlpha),te.pixelStorei(3317,_e.unpackAlignment),de.isDataTexture?te.texSubImage2D(3553,me,W.x,W.y,we,Qe,rt,at,de.image.data):de.isCompressedTexture?te.compressedTexSubImage2D(3553,me,W.x,W.y,de.mipmaps[0].width,de.mipmaps[0].height,rt,de.mipmaps[0].data):te.texSubImage2D(3553,me,W.x,W.y,rt,at,de.image),me===0&&_e.generateMipmaps&&te.generateMipmap(3553),Le.unbindTexture()},this.copyTextureToTexture3D=function(W,de,_e,me,we=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Qe=W.max.x-W.min.x+1,rt=W.max.y-W.min.y+1,at=W.max.z-W.min.z+1,st=G.convert(me.format),dt=G.convert(me.type);let ft;if(me.isData3DTexture)ze.setTexture3D(me,0),ft=32879;else if(me.isDataArrayTexture)ze.setTexture2DArray(me,0),ft=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(37440,me.flipY),te.pixelStorei(37441,me.premultiplyAlpha),te.pixelStorei(3317,me.unpackAlignment);const ht=te.getParameter(3314),_t=te.getParameter(32878),on=te.getParameter(3316),ln=te.getParameter(3315),un=te.getParameter(32877),Jt=_e.isCompressedTexture?_e.mipmaps[0]:_e.image;te.pixelStorei(3314,Jt.width),te.pixelStorei(32878,Jt.height),te.pixelStorei(3316,W.min.x),te.pixelStorei(3315,W.min.y),te.pixelStorei(32877,W.min.z),_e.isDataTexture||_e.isData3DTexture?te.texSubImage3D(ft,we,de.x,de.y,de.z,Qe,rt,at,st,dt,Jt.data):_e.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(ft,we,de.x,de.y,de.z,Qe,rt,at,st,Jt.data)):te.texSubImage3D(ft,we,de.x,de.y,de.z,Qe,rt,at,st,dt,Jt),te.pixelStorei(3314,ht),te.pixelStorei(32878,_t),te.pixelStorei(3316,on),te.pixelStorei(3315,ln),te.pixelStorei(32877,un),we===0&&me.generateMipmaps&&te.generateMipmap(ft),Le.unbindTexture()},this.initTexture=function(W){ze.setTexture2D(W,0),Le.unbindTexture()},this.resetState=function(){C=0,D=0,k=null,Le.reset(),Se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class SpriteMaterial extends Material{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class LineBasicMaterial extends Material{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _start$1=new Vector3,_end$1=new Vector3,_inverseMatrix$1=new Matrix4,_ray$1=new Ray,_sphere$1=new Sphere;class Line extends Object3D{constructor(e=new BufferGeometry,t=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)_start$1.fromBufferAttribute(t,o-1),_end$1.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=_start$1.distanceTo(_end$1);e.setAttribute("lineDistance",new Float32BufferAttribute(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,n=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_sphere$1.copy(r.boundingSphere),_sphere$1.applyMatrix4(o),_sphere$1.radius+=a,e.ray.intersectsSphere(_sphere$1)===!1)return;_inverseMatrix$1.copy(o).invert(),_ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),g=l*l,_=new Vector3,v=new Vector3,y=new Vector3,M=new Vector3,E=this.isLineSegments?2:1,T=r.index,b=r.attributes.position;if(T!==null){const C=Math.max(0,n.start),D=Math.min(T.count,n.start+n.count);for(let k=C,z=D-1;k<z;k+=E){const B=T.getX(k),P=T.getX(k+1);if(_.fromBufferAttribute(b,B),v.fromBufferAttribute(b,P),_ray$1.distanceSqToSegment(_,v,M,y)>g)continue;M.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(M);R<e.near||R>e.far||t.push({distance:R,point:y.clone().applyMatrix4(this.matrixWorld),index:k,face:null,faceIndex:null,object:this})}}else{const C=Math.max(0,n.start),D=Math.min(b.count,n.start+n.count);for(let k=C,z=D-1;k<z;k+=E){if(_.fromBufferAttribute(b,k),v.fromBufferAttribute(b,k+1),_ray$1.distanceSqToSegment(_,v,M,y)>g)continue;M.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(M);P<e.near||P>e.far||t.push({distance:P,point:y.clone().applyMatrix4(this.matrixWorld),index:k,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=o.length;a<n;a++){const l=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}const _start=new Vector3,_end=new Vector3;class LineSegments extends Line{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)_start.fromBufferAttribute(t,o),_end.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+_start.distanceTo(_end);e.setAttribute("lineDistance",new Float32BufferAttribute(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PointsMaterial extends Material{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new Vector3;new Vector3;new Vector3;new Vector3;new Triangle;class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,r=16,o=0,a=Math.PI*2,n=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:a,thetaStart:n,thetaLength:l},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const g=Math.min(n+l,Math.PI);let _=0;const v=[],y=new Vector3,M=new Vector3,E=[],T=[],w=[],b=[];for(let C=0;C<=r;C++){const D=[],k=C/r;let z=0;C==0&&n==0?z=.5/t:C==r&&g==Math.PI&&(z=-.5/t);for(let B=0;B<=t;B++){const P=B/t;y.x=-e*Math.cos(o+P*a)*Math.sin(n+k*l),y.y=e*Math.cos(n+k*l),y.z=e*Math.sin(o+P*a)*Math.sin(n+k*l),T.push(y.x,y.y,y.z),M.copy(y).normalize(),w.push(M.x,M.y,M.z),b.push(P+z,1-k),D.push(_++)}v.push(D)}for(let C=0;C<r;C++)for(let D=0;D<t;D++){const k=v[C][D+1],z=v[C][D],B=v[C+1][D],P=v[C+1][D+1];(C!==0||n>0)&&E.push(k,z,P),(C!==r-1||g<Math.PI)&&E.push(z,B,P)}this.setIndex(E),this.setAttribute("position",new Float32BufferAttribute(T,3)),this.setAttribute("normal",new Float32BufferAttribute(w,3)),this.setAttribute("uv",new Float32BufferAttribute(b,2))}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ShadowMaterial extends Material{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Color(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class RawShaderMaterial extends ShaderMaterial{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshPhysicalMaterial extends MeshStandardMaterial{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vector2(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return clamp(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Color(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class MeshPhongMaterial extends Material{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Color(16777215),this.specular=new Color(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshToonMaterial extends Material{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Color(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class MeshNormalMaterial extends Material{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class MeshLambertMaterial extends Material{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class MeshMatcapMaterial extends Material{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Color(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LineDashedMaterial extends LineBasicMaterial{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const materialLib={ShadowMaterial,SpriteMaterial,RawShaderMaterial,ShaderMaterial,PointsMaterial,MeshPhysicalMaterial,MeshStandardMaterial,MeshPhongMaterial,MeshToonMaterial,MeshNormalMaterial,MeshLambertMaterial,MeshDepthMaterial,MeshDistanceMaterial,MeshBasicMaterial,MeshMatcapMaterial,LineDashedMaterial,LineBasicMaterial,Material};Material.fromType=function(s){return new materialLib[s]};const Cache={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,r){const o=this;let a=!1,n=0,l=0,g;const _=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(v){l++,a===!1&&o.onStart!==void 0&&o.onStart(v,n,l),a=!0},this.itemEnd=function(v){n++,o.onProgress!==void 0&&o.onProgress(v,n,l),n===l&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return g?g(v):v},this.setURLModifier=function(v){return g=v,this},this.addHandler=function(v,y){return _.push(v,y),this},this.removeHandler=function(v){const y=_.indexOf(v);return y!==-1&&_.splice(y,2),this},this.getHandler=function(v){for(let y=0,M=_.length;y<M;y+=2){const E=_[y],T=_[y+1];if(E.global&&(E.lastIndex=0),E.test(v))return T}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,a){r.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,n=Cache.get(e);if(n!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;const l=createElementNS("img");function g(){v(),Cache.add(e,this),t&&t(this),a.manager.itemEnd(e)}function _(y){v(),o&&o(y),a.manager.itemError(e),a.manager.itemEnd(e)}function v(){l.removeEventListener("load",g,!1),l.removeEventListener("error",_,!1)}return l.addEventListener("load",g,!1),l.addEventListener("error",_,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(e),l.src=e,l}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,r,o){const a=new Texture,n=new ImageLoader(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},r,o),a}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class HemisphereLight extends Light{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Object3D.DefaultUp),this.updateMatrix(),this.groundColor=new Color(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _RESERVED_CHARS_RE="\\[\\]\\.:\\/",_wordChar="[^"+_RESERVED_CHARS_RE+"]",_wordCharOrDot="[^"+_RESERVED_CHARS_RE.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",_wordChar);/(WCOD+)?/.source.replace("WCOD",_wordCharOrDot);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_wordChar);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_wordChar);class Spherical{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class AxesHelper extends LineSegments{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new BufferGeometry;o.setAttribute("position",new Float32BufferAttribute(t,3)),o.setAttribute("color",new Float32BufferAttribute(r,3));const a=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(o,a),this.type="AxesHelper"}setColors(e,t,r){const o=new Color,a=this.geometry.attributes.color.array;return o.set(e),o.toArray(a,0),o.toArray(a,3),o.set(t),o.toArray(a,6),o.toArray(a,9),o.set(r),o.toArray(a,12),o.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const _baseTable=new Uint32Array(512),_shiftTable=new Uint32Array(512);for(let s=0;s<256;++s){const e=s-127;e<-27?(_baseTable[s]=0,_baseTable[s|256]=32768,_shiftTable[s]=24,_shiftTable[s|256]=24):e<-14?(_baseTable[s]=1024>>-e-14,_baseTable[s|256]=1024>>-e-14|32768,_shiftTable[s]=-e-1,_shiftTable[s|256]=-e-1):e<=15?(_baseTable[s]=e+15<<10,_baseTable[s|256]=e+15<<10|32768,_shiftTable[s]=13,_shiftTable[s|256]=13):e<128?(_baseTable[s]=31744,_baseTable[s|256]=64512,_shiftTable[s]=24,_shiftTable[s|256]=24):(_baseTable[s]=31744,_baseTable[s|256]=64512,_shiftTable[s]=13,_shiftTable[s|256]=13)}const _mantissaTable=new Uint32Array(2048),_exponentTable=new Uint32Array(64),_offsetTable=new Uint32Array(64);for(let s=1;s<1024;++s){let e=s<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,_mantissaTable[s]=e|t}for(let s=1024;s<2048;++s)_mantissaTable[s]=939524096+(s-1024<<13);for(let s=1;s<31;++s)_exponentTable[s]=s<<23;_exponentTable[31]=1199570944;_exponentTable[32]=2147483648;for(let s=33;s<63;++s)_exponentTable[s]=2147483648+(s-32<<23);_exponentTable[63]=3347054592;for(let s=1;s<64;++s)s!==32&&(_offsetTable[s]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"};class OrbitControls extends EventDispatcher{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Tt),this._domElementKeyEvents=G},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(_changeEvent),r.update(),a=o.NONE},this.update=function(){const G=new Vector3,Se=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),Z=Se.clone().invert(),H=new Vector3,I=new Quaternion,oe=2*Math.PI;return function(){const Oe=r.object.position;G.copy(Oe).sub(r.target),G.applyQuaternion(Se),l.setFromVector3(G),r.autoRotate&&a===o.NONE&&V(U()),r.enableDamping?(l.theta+=g.theta*r.dampingFactor,l.phi+=g.phi*r.dampingFactor):(l.theta+=g.theta,l.phi+=g.phi);let Re=r.minAzimuthAngle,Fe=r.maxAzimuthAngle;return isFinite(Re)&&isFinite(Fe)&&(Re<-Math.PI?Re+=oe:Re>Math.PI&&(Re-=oe),Fe<-Math.PI?Fe+=oe:Fe>Math.PI&&(Fe-=oe),Re<=Fe?l.theta=Math.max(Re,Math.min(Fe,l.theta)):l.theta=l.theta>(Re+Fe)/2?Math.max(Re,l.theta):Math.min(Fe,l.theta)),l.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=_,l.radius=Math.max(r.minDistance,Math.min(r.maxDistance,l.radius)),r.enableDamping===!0?r.target.addScaledVector(v,r.dampingFactor):r.target.add(v),G.setFromSpherical(l),G.applyQuaternion(Z),Oe.copy(r.target).add(G),r.object.lookAt(r.target),r.enableDamping===!0?(g.theta*=1-r.dampingFactor,g.phi*=1-r.dampingFactor,v.multiplyScalar(1-r.dampingFactor)):(g.set(0,0,0),v.set(0,0,0)),_=1,y||H.distanceToSquared(r.object.position)>n||8*(1-I.dot(r.object.quaternion))>n?(r.dispatchEvent(_changeEvent),H.copy(r.object.position),I.copy(r.object.quaternion),y=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",be),r.domElement.removeEventListener("pointerdown",et),r.domElement.removeEventListener("pointercancel",tt),r.domElement.removeEventListener("wheel",lt),r.domElement.removeEventListener("pointermove",Je),r.domElement.removeEventListener("pointerup",Ze),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",Tt)};const r=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const n=1e-6,l=new Spherical,g=new Spherical;let _=1;const v=new Vector3;let y=!1;const M=new Vector2,E=new Vector2,T=new Vector2,w=new Vector2,b=new Vector2,C=new Vector2,D=new Vector2,k=new Vector2,z=new Vector2,B=[],P={};function U(){return 2*Math.PI/60/60*r.autoRotateSpeed}function R(){return Math.pow(.95,r.zoomSpeed)}function V(G){g.theta-=G}function Q(G){g.phi-=G}const J=function(){const G=new Vector3;return function(Z,H){G.setFromMatrixColumn(H,0),G.multiplyScalar(-Z),v.add(G)}}(),ve=function(){const G=new Vector3;return function(Z,H){r.screenSpacePanning===!0?G.setFromMatrixColumn(H,1):(G.setFromMatrixColumn(H,0),G.crossVectors(r.object.up,G)),G.multiplyScalar(Z),v.add(G)}}(),le=function(){const G=new Vector3;return function(Z,H){const I=r.domElement;if(r.object.isPerspectiveCamera){const oe=r.object.position;G.copy(oe).sub(r.target);let pe=G.length();pe*=Math.tan(r.object.fov/2*Math.PI/180),J(2*Z*pe/I.clientHeight,r.object.matrix),ve(2*H*pe/I.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(J(Z*(r.object.right-r.object.left)/r.object.zoom/I.clientWidth,r.object.matrix),ve(H*(r.object.top-r.object.bottom)/r.object.zoom/I.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function ee(G){r.object.isPerspectiveCamera?_/=G:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom*G)),r.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function he(G){r.object.isPerspectiveCamera?_*=G:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/G)),r.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ue(G){M.set(G.clientX,G.clientY)}function $(G){D.set(G.clientX,G.clientY)}function K(G){w.set(G.clientX,G.clientY)}function ne(G){E.set(G.clientX,G.clientY),T.subVectors(E,M).multiplyScalar(r.rotateSpeed);const Se=r.domElement;V(2*Math.PI*T.x/Se.clientHeight),Q(2*Math.PI*T.y/Se.clientHeight),M.copy(E),r.update()}function fe(G){k.set(G.clientX,G.clientY),z.subVectors(k,D),z.y>0?ee(R()):z.y<0&&he(R()),D.copy(k),r.update()}function se(G){b.set(G.clientX,G.clientY),C.subVectors(b,w).multiplyScalar(r.panSpeed),le(C.x,C.y),w.copy(b),r.update()}function Y(G){G.deltaY<0?he(R()):G.deltaY>0&&ee(R()),r.update()}function ce(G){let Se=!1;switch(G.code){case r.keys.UP:le(0,r.keyPanSpeed),Se=!0;break;case r.keys.BOTTOM:le(0,-r.keyPanSpeed),Se=!0;break;case r.keys.LEFT:le(r.keyPanSpeed,0),Se=!0;break;case r.keys.RIGHT:le(-r.keyPanSpeed,0),Se=!0;break}Se&&(G.preventDefault(),r.update())}function ge(){if(B.length===1)M.set(B[0].pageX,B[0].pageY);else{const G=.5*(B[0].pageX+B[1].pageX),Se=.5*(B[0].pageY+B[1].pageY);M.set(G,Se)}}function q(){if(B.length===1)w.set(B[0].pageX,B[0].pageY);else{const G=.5*(B[0].pageX+B[1].pageX),Se=.5*(B[0].pageY+B[1].pageY);w.set(G,Se)}}function te(){const G=B[0].pageX-B[1].pageX,Se=B[0].pageY-B[1].pageY,Z=Math.sqrt(G*G+Se*Se);D.set(0,Z)}function Me(){r.enableZoom&&te(),r.enablePan&&q()}function Pe(){r.enableZoom&&te(),r.enableRotate&&ge()}function Ue(G){if(B.length==1)E.set(G.pageX,G.pageY);else{const Z=je(G),H=.5*(G.pageX+Z.x),I=.5*(G.pageY+Z.y);E.set(H,I)}T.subVectors(E,M).multiplyScalar(r.rotateSpeed);const Se=r.domElement;V(2*Math.PI*T.x/Se.clientHeight),Q(2*Math.PI*T.y/Se.clientHeight),M.copy(E)}function Le(G){if(B.length===1)b.set(G.pageX,G.pageY);else{const Se=je(G),Z=.5*(G.pageX+Se.x),H=.5*(G.pageY+Se.y);b.set(Z,H)}C.subVectors(b,w).multiplyScalar(r.panSpeed),le(C.x,C.y),w.copy(b)}function $e(G){const Se=je(G),Z=G.pageX-Se.x,H=G.pageY-Se.y,I=Math.sqrt(Z*Z+H*H);k.set(0,I),z.set(0,Math.pow(k.y/D.y,r.zoomSpeed)),ee(z.y),D.copy(k)}function We(G){r.enableZoom&&$e(G),r.enablePan&&Le(G)}function ze(G){r.enableZoom&&$e(G),r.enableRotate&&Ue(G)}function et(G){r.enabled!==!1&&(B.length===0&&(r.domElement.setPointerCapture(G.pointerId),r.domElement.addEventListener("pointermove",Je),r.domElement.addEventListener("pointerup",Ze)),De(G),G.pointerType==="touch"?j(G):nt(G))}function Je(G){r.enabled!==!1&&(G.pointerType==="touch"?F(G):it(G))}function Ze(G){Ae(G),B.length===0&&(r.domElement.releasePointerCapture(G.pointerId),r.domElement.removeEventListener("pointermove",Je),r.domElement.removeEventListener("pointerup",Ze)),r.dispatchEvent(_endEvent),a=o.NONE}function tt(G){Ae(G)}function nt(G){let Se;switch(G.button){case 0:Se=r.mouseButtons.LEFT;break;case 1:Se=r.mouseButtons.MIDDLE;break;case 2:Se=r.mouseButtons.RIGHT;break;default:Se=-1}switch(Se){case MOUSE.DOLLY:if(r.enableZoom===!1)return;$(G),a=o.DOLLY;break;case MOUSE.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(r.enablePan===!1)return;K(G),a=o.PAN}else{if(r.enableRotate===!1)return;ue(G),a=o.ROTATE}break;case MOUSE.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(r.enableRotate===!1)return;ue(G),a=o.ROTATE}else{if(r.enablePan===!1)return;K(G),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&r.dispatchEvent(_startEvent)}function it(G){if(r.enabled!==!1)switch(a){case o.ROTATE:if(r.enableRotate===!1)return;ne(G);break;case o.DOLLY:if(r.enableZoom===!1)return;fe(G);break;case o.PAN:if(r.enablePan===!1)return;se(G);break}}function lt(G){r.enabled===!1||r.enableZoom===!1||a!==o.NONE||(G.preventDefault(),r.dispatchEvent(_startEvent),Y(G),r.dispatchEvent(_endEvent))}function Tt(G){r.enabled===!1||r.enablePan===!1||ce(G)}function j(G){switch(Be(G),B.length){case 1:switch(r.touches.ONE){case TOUCH.ROTATE:if(r.enableRotate===!1)return;ge(),a=o.TOUCH_ROTATE;break;case TOUCH.PAN:if(r.enablePan===!1)return;q(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(r.touches.TWO){case TOUCH.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Me(),a=o.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Pe(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&r.dispatchEvent(_startEvent)}function F(G){switch(Be(G),a){case o.TOUCH_ROTATE:if(r.enableRotate===!1)return;Ue(G),r.update();break;case o.TOUCH_PAN:if(r.enablePan===!1)return;Le(G),r.update();break;case o.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;We(G),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ze(G),r.update();break;default:a=o.NONE}}function be(G){r.enabled!==!1&&G.preventDefault()}function De(G){B.push(G)}function Ae(G){delete P[G.pointerId];for(let Se=0;Se<B.length;Se++)if(B[Se].pointerId==G.pointerId){B.splice(Se,1);return}}function Be(G){let Se=P[G.pointerId];Se===void 0&&(Se=new Vector2,P[G.pointerId]=Se),Se.set(G.pageX,G.pageY)}function je(G){const Se=G.pointerId===B[0].pointerId?B[1]:B[0];return P[Se.pointerId]}r.domElement.addEventListener("contextmenu",be),r.domElement.addEventListener("pointerdown",et),r.domElement.addEventListener("pointercancel",tt),r.domElement.addEventListener("wheel",lt,{passive:!1}),this.update()}}function fetchImage(s){const e=`../images/${s}.jpg`;return{"../images/bg.jpg":__glob_2_0}[e].default}class ThreeBase{constructor(e){Ln(this,"scene");Ln(this,"camera");Ln(this,"container");Ln(this,"renderer");Ln(this,"controls");this.container=e,this.scene=this.initScene(),this.camera=this.initCamera(),this.renderer=this.initRenderer(),this.controls=this.initControls(),this.animate()}initScene(){return new Scene}initCamera(){const t=window.innerWidth/window.innerHeight,r=.1,o=100,a=new PerspectiveCamera(90,t,r,o);return a.position.set(0,0,.01),a.lookAt(0,0,0),a}initRenderer(){const e=new WebGLRenderer;return e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(0,1),this.container.appendChild(e.domElement),e}initControls(){const e=new OrbitControls(this.camera,this.renderer.domElement);return e.enableDamping=!0,e.dampingFactor=.25,e.enableZoom=!0,e}initLight(){const e=new HemisphereLight(16777215,1);return e.position.set(1,1,1),this.scene.add(e),this}initHelper(){const e=new AxesHelper(5e3);return this.scene.add(e),this}initSphere(){const e=fetchImage("bg"),t=new SphereGeometry(1,50,50);t.scale(1,1,-1);const r=new TextureLoader().load(e),o=new MeshBasicMaterial({map:r}),a=new Mesh(t,o);return this.scene.add(a),this}animate(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>this.animate())}}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function getDefaultExportFromCjs(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vconsole_min={exports:{}};/*!
 * vConsole v3.14.6 (https://github.com/Tencent/vConsole)
 *
 * Tencent is pleased to support the open source community by making vConsole available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */(function(module,exports){(function(s,e){module.exports=e()})(commonjsGlobal||self,function(){return function(){var __webpack_modules__={4264:function(s,e,t){s.exports=t(7588)},5036:function(s,e,t){t(1719),t(5677),t(6394),t(5334),t(6969),t(2021),t(8328),t(2129);var r=t(1287);s.exports=r.Promise},2582:function(s,e,t){t(1646),t(6394),t(2004),t(462),t(8407),t(2429),t(1172),t(8288),t(1274),t(8201),t(6626),t(3211),t(9952),t(15),t(9831),t(7521),t(2972),t(6956),t(5222),t(2257);var r=t(1287);s.exports=r.Symbol},8257:function(s,e,t){var r=t(7583),o=t(9212),a=t(5637),n=r.TypeError;s.exports=function(l){if(o(l))return l;throw n(a(l)+" is not a function")}},1186:function(s,e,t){var r=t(7583),o=t(2097),a=t(5637),n=r.TypeError;s.exports=function(l){if(o(l))return l;throw n(a(l)+" is not a constructor")}},9882:function(s,e,t){var r=t(7583),o=t(9212),a=r.String,n=r.TypeError;s.exports=function(l){if(typeof l=="object"||o(l))return l;throw n("Can't set "+a(l)+" as a prototype")}},6288:function(s,e,t){var r=t(3649),o=t(3590),a=t(4615),n=r("unscopables"),l=Array.prototype;l[n]==null&&a.f(l,n,{configurable:!0,value:o(null)}),s.exports=function(g){l[n][g]=!0}},4761:function(s,e,t){var r=t(7583),o=t(2447),a=r.TypeError;s.exports=function(n,l){if(o(l,n))return n;throw a("Incorrect invocation")}},2569:function(s,e,t){var r=t(7583),o=t(794),a=r.String,n=r.TypeError;s.exports=function(l){if(o(l))return l;throw n(a(l)+" is not an object")}},5766:function(s,e,t){var r=t(2977),o=t(6782),a=t(1825),n=function(l){return function(g,_,v){var y,M=r(g),E=a(M),T=o(v,E);if(l&&_!=_){for(;E>T;)if((y=M[T++])!=y)return!0}else for(;E>T;T++)if((l||T in M)&&M[T]===_)return l||T||0;return!l&&-1}};s.exports={includes:n(!0),indexOf:n(!1)}},4805:function(s,e,t){var r=t(2938),o=t(7386),a=t(5044),n=t(1324),l=t(1825),g=t(4822),_=o([].push),v=function(y){var M=y==1,E=y==2,T=y==3,w=y==4,b=y==6,C=y==7,D=y==5||b;return function(k,z,B,P){for(var U,R,V=n(k),Q=a(V),J=r(z,B),ve=l(Q),le=0,ee=P||g,he=M?ee(k,ve):E||C?ee(k,0):void 0;ve>le;le++)if((D||le in Q)&&(R=J(U=Q[le],le,V),y))if(M)he[le]=R;else if(R)switch(y){case 3:return!0;case 5:return U;case 6:return le;case 2:_(he,U)}else switch(y){case 4:return!1;case 7:_(he,U)}return b?-1:T||w?w:he}};s.exports={forEach:v(0),map:v(1),filter:v(2),some:v(3),every:v(4),find:v(5),findIndex:v(6),filterReject:v(7)}},9269:function(s,e,t){var r=t(6544),o=t(3649),a=t(4061),n=o("species");s.exports=function(l){return a>=51||!r(function(){var g=[];return(g.constructor={})[n]=function(){return{foo:1}},g[l](Boolean).foo!==1})}},4546:function(s,e,t){var r=t(7583),o=t(6782),a=t(1825),n=t(5999),l=r.Array,g=Math.max;s.exports=function(_,v,y){for(var M=a(_),E=o(v,M),T=o(y===void 0?M:y,M),w=l(g(T-E,0)),b=0;E<T;E++,b++)n(w,b,_[E]);return w.length=b,w}},6917:function(s,e,t){var r=t(7386);s.exports=r([].slice)},5289:function(s,e,t){var r=t(7583),o=t(4521),a=t(2097),n=t(794),l=t(3649)("species"),g=r.Array;s.exports=function(_){var v;return o(_)&&(v=_.constructor,(a(v)&&(v===g||o(v.prototype))||n(v)&&(v=v[l])===null)&&(v=void 0)),v===void 0?g:v}},4822:function(s,e,t){var r=t(5289);s.exports=function(o,a){return new(r(o))(a===0?0:a)}},3616:function(s,e,t){var r=t(3649)("iterator"),o=!1;try{var a=0,n={next:function(){return{done:!!a++}},return:function(){o=!0}};n[r]=function(){return this},Array.from(n,function(){throw 2})}catch{}s.exports=function(l,g){if(!g&&!o)return!1;var _=!1;try{var v={};v[r]=function(){return{next:function(){return{done:_=!0}}}},l(v)}catch{}return _}},9624:function(s,e,t){var r=t(7386),o=r({}.toString),a=r("".slice);s.exports=function(n){return a(o(n),8,-1)}},3058:function(s,e,t){var r=t(7583),o=t(8191),a=t(9212),n=t(9624),l=t(3649)("toStringTag"),g=r.Object,_=n(function(){return arguments}())=="Arguments";s.exports=o?n:function(v){var y,M,E;return v===void 0?"Undefined":v===null?"Null":typeof(M=function(T,w){try{return T[w]}catch{}}(y=g(v),l))=="string"?M:_?n(y):(E=n(y))=="Object"&&a(y.callee)?"Arguments":E}},1509:function(s,e,t){var r=t(7386)("".replace),o=String(Error("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,n=a.test(o);s.exports=function(l,g){if(n&&typeof l=="string")for(;g--;)l=r(l,a,"");return l}},3478:function(s,e,t){var r=t(2870),o=t(929),a=t(6683),n=t(4615);s.exports=function(l,g,_){for(var v=o(g),y=n.f,M=a.f,E=0;E<v.length;E++){var T=v[E];r(l,T)||_&&r(_,T)||y(l,T,M(g,T))}}},926:function(s,e,t){var r=t(6544);s.exports=!r(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},4683:function(s,e,t){var r=t(2365).IteratorPrototype,o=t(3590),a=t(4677),n=t(8821),l=t(339),g=function(){return this};s.exports=function(_,v,y,M){var E=v+" Iterator";return _.prototype=o(r,{next:a(+!M,y)}),n(_,E,!1,!0),l[E]=g,_}},57:function(s,e,t){var r=t(8494),o=t(4615),a=t(4677);s.exports=r?function(n,l,g){return o.f(n,l,a(1,g))}:function(n,l,g){return n[l]=g,n}},4677:function(s){s.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},5999:function(s,e,t){var r=t(8734),o=t(4615),a=t(4677);s.exports=function(n,l,g){var _=r(l);_ in n?o.f(n,_,a(0,g)):n[_]=g}},9012:function(s,e,t){var r=t(7263),o=t(8262),a=t(6268),n=t(4340),l=t(9212),g=t(4683),_=t(729),v=t(7496),y=t(8821),M=t(57),E=t(1270),T=t(3649),w=t(339),b=t(2365),C=n.PROPER,D=n.CONFIGURABLE,k=b.IteratorPrototype,z=b.BUGGY_SAFARI_ITERATORS,B=T("iterator"),P="keys",U="values",R="entries",V=function(){return this};s.exports=function(Q,J,ve,le,ee,he,ue){g(ve,J,le);var $,K,ne,fe=function(Me){if(Me===ee&&q)return q;if(!z&&Me in ce)return ce[Me];switch(Me){case P:case U:case R:return function(){return new ve(this,Me)}}return function(){return new ve(this)}},se=J+" Iterator",Y=!1,ce=Q.prototype,ge=ce[B]||ce["@@iterator"]||ee&&ce[ee],q=!z&&ge||fe(ee),te=J=="Array"&&ce.entries||ge;if(te&&($=_(te.call(new Q)))!==Object.prototype&&$.next&&(a||_($)===k||(v?v($,k):l($[B])||E($,B,V)),y($,se,!0,!0),a&&(w[se]=V)),C&&ee==U&&ge&&ge.name!==U&&(!a&&D?M(ce,"name",U):(Y=!0,q=function(){return o(ge,this)})),ee)if(K={values:fe(U),keys:he?q:fe(P),entries:fe(R)},ue)for(ne in K)(z||Y||!(ne in ce))&&E(ce,ne,K[ne]);else r({target:J,proto:!0,forced:z||Y},K);return a&&!ue||ce[B]===q||E(ce,B,q,{name:ee}),w[J]=q,K}},2219:function(s,e,t){var r=t(1287),o=t(2870),a=t(491),n=t(4615).f;s.exports=function(l){var g=r.Symbol||(r.Symbol={});o(g,l)||n(g,l,{value:a.f(l)})}},8494:function(s,e,t){var r=t(6544);s.exports=!r(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},6668:function(s,e,t){var r=t(7583),o=t(794),a=r.document,n=o(a)&&o(a.createElement);s.exports=function(l){return n?a.createElement(l):{}}},6778:function(s){s.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},9307:function(s,e,t){var r=t(6668)("span").classList,o=r&&r.constructor&&r.constructor.prototype;s.exports=o===Object.prototype?void 0:o},2274:function(s){s.exports=typeof window=="object"},3256:function(s,e,t){var r=t(6918),o=t(7583);s.exports=/ipad|iphone|ipod/i.test(r)&&o.Pebble!==void 0},7020:function(s,e,t){var r=t(6918);s.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5354:function(s,e,t){var r=t(9624),o=t(7583);s.exports=r(o.process)=="process"},6846:function(s,e,t){var r=t(6918);s.exports=/web0s(?!.*chrome)/i.test(r)},6918:function(s,e,t){var r=t(5897);s.exports=r("navigator","userAgent")||""},4061:function(s,e,t){var r,o,a=t(7583),n=t(6918),l=a.process,g=a.Deno,_=l&&l.versions||g&&g.version,v=_&&_.v8;v&&(o=(r=v.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&n&&(!(r=n.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=n.match(/Chrome\/(\d+)/))&&(o=+r[1]),s.exports=o},5690:function(s){s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1178:function(s,e,t){var r=t(6544),o=t(4677);s.exports=!r(function(){var a=Error("a");return!("stack"in a)||(Object.defineProperty(a,"stack",o(1,7)),a.stack!==7)})},7263:function(s,e,t){var r=t(7583),o=t(6683).f,a=t(57),n=t(1270),l=t(460),g=t(3478),_=t(4451);s.exports=function(v,y){var M,E,T,w,b,C=v.target,D=v.global,k=v.stat;if(M=D?r:k?r[C]||l(C,{}):(r[C]||{}).prototype)for(E in y){if(w=y[E],T=v.noTargetGet?(b=o(M,E))&&b.value:M[E],!_(D?E:C+(k?".":"#")+E,v.forced)&&T!==void 0){if(typeof w==typeof T)continue;g(w,T)}(v.sham||T&&T.sham)&&a(w,"sham",!0),n(M,E,w,v)}}},6544:function(s){s.exports=function(e){try{return!!e()}catch{return!0}}},1611:function(s,e,t){var r=t(8987),o=Function.prototype,a=o.apply,n=o.call;s.exports=typeof Reflect=="object"&&Reflect.apply||(r?n.bind(a):function(){return n.apply(a,arguments)})},2938:function(s,e,t){var r=t(7386),o=t(8257),a=t(8987),n=r(r.bind);s.exports=function(l,g){return o(l),g===void 0?l:a?n(l,g):function(){return l.apply(g,arguments)}}},8987:function(s,e,t){var r=t(6544);s.exports=!r(function(){var o=function(){}.bind();return typeof o!="function"||o.hasOwnProperty("prototype")})},8262:function(s,e,t){var r=t(8987),o=Function.prototype.call;s.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},4340:function(s,e,t){var r=t(8494),o=t(2870),a=Function.prototype,n=r&&Object.getOwnPropertyDescriptor,l=o(a,"name"),g=l&&function(){}.name==="something",_=l&&(!r||r&&n(a,"name").configurable);s.exports={EXISTS:l,PROPER:g,CONFIGURABLE:_}},7386:function(s,e,t){var r=t(8987),o=Function.prototype,a=o.bind,n=o.call,l=r&&a.bind(n,n);s.exports=r?function(g){return g&&l(g)}:function(g){return g&&function(){return n.apply(g,arguments)}}},5897:function(s,e,t){var r=t(7583),o=t(9212),a=function(n){return o(n)?n:void 0};s.exports=function(n,l){return arguments.length<2?a(r[n]):r[n]&&r[n][l]}},8272:function(s,e,t){var r=t(3058),o=t(911),a=t(339),n=t(3649)("iterator");s.exports=function(l){if(l!=null)return o(l,n)||o(l,"@@iterator")||a[r(l)]}},6307:function(s,e,t){var r=t(7583),o=t(8262),a=t(8257),n=t(2569),l=t(5637),g=t(8272),_=r.TypeError;s.exports=function(v,y){var M=arguments.length<2?g(v):y;if(a(M))return n(o(M,v));throw _(l(v)+" is not iterable")}},911:function(s,e,t){var r=t(8257);s.exports=function(o,a){var n=o[a];return n==null?void 0:r(n)}},7583:function(s,e,t){var r=function(o){return o&&o.Math==Math&&o};s.exports=r(typeof globalThis=="object"&&globalThis)||r(typeof window=="object"&&window)||r(typeof self=="object"&&self)||r(typeof t.g=="object"&&t.g)||function(){return this}()||Function("return this")()},2870:function(s,e,t){var r=t(7386),o=t(1324),a=r({}.hasOwnProperty);s.exports=Object.hasOwn||function(n,l){return a(o(n),l)}},4639:function(s){s.exports={}},2716:function(s,e,t){var r=t(7583);s.exports=function(o,a){var n=r.console;n&&n.error&&(arguments.length==1?n.error(o):n.error(o,a))}},482:function(s,e,t){var r=t(5897);s.exports=r("document","documentElement")},275:function(s,e,t){var r=t(8494),o=t(6544),a=t(6668);s.exports=!r&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},5044:function(s,e,t){var r=t(7583),o=t(7386),a=t(6544),n=t(9624),l=r.Object,g=o("".split);s.exports=a(function(){return!l("z").propertyIsEnumerable(0)})?function(_){return n(_)=="String"?g(_,""):l(_)}:l},9734:function(s,e,t){var r=t(7386),o=t(9212),a=t(1314),n=r(Function.toString);o(a.inspectSource)||(a.inspectSource=function(l){return n(l)}),s.exports=a.inspectSource},4402:function(s,e,t){var r=t(794),o=t(57);s.exports=function(a,n){r(n)&&"cause"in n&&o(a,"cause",n.cause)}},2743:function(s,e,t){var r,o,a,n=t(9491),l=t(7583),g=t(7386),_=t(794),v=t(57),y=t(2870),M=t(1314),E=t(9137),T=t(4639),w="Object already initialized",b=l.TypeError,C=l.WeakMap;if(n||M.state){var D=M.state||(M.state=new C),k=g(D.get),z=g(D.has),B=g(D.set);r=function(U,R){if(z(D,U))throw new b(w);return R.facade=U,B(D,U,R),R},o=function(U){return k(D,U)||{}},a=function(U){return z(D,U)}}else{var P=E("state");T[P]=!0,r=function(U,R){if(y(U,P))throw new b(w);return R.facade=U,v(U,P,R),R},o=function(U){return y(U,P)?U[P]:{}},a=function(U){return y(U,P)}}s.exports={set:r,get:o,has:a,enforce:function(U){return a(U)?o(U):r(U,{})},getterFor:function(U){return function(R){var V;if(!_(R)||(V=o(R)).type!==U)throw b("Incompatible receiver, "+U+" required");return V}}}},114:function(s,e,t){var r=t(3649),o=t(339),a=r("iterator"),n=Array.prototype;s.exports=function(l){return l!==void 0&&(o.Array===l||n[a]===l)}},4521:function(s,e,t){var r=t(9624);s.exports=Array.isArray||function(o){return r(o)=="Array"}},9212:function(s){s.exports=function(e){return typeof e=="function"}},2097:function(s,e,t){var r=t(7386),o=t(6544),a=t(9212),n=t(3058),l=t(5897),g=t(9734),_=function(){},v=[],y=l("Reflect","construct"),M=/^\s*(?:class|function)\b/,E=r(M.exec),T=!M.exec(_),w=function(C){if(!a(C))return!1;try{return y(_,v,C),!0}catch{return!1}},b=function(C){if(!a(C))return!1;switch(n(C)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return T||!!E(M,g(C))}catch{return!0}};b.sham=!0,s.exports=!y||o(function(){var C;return w(w.call)||!w(Object)||!w(function(){C=!0})||C})?b:w},4451:function(s,e,t){var r=t(6544),o=t(9212),a=/#|\.prototype\./,n=function(y,M){var E=g[l(y)];return E==v||E!=_&&(o(M)?r(M):!!M)},l=n.normalize=function(y){return String(y).replace(a,".").toLowerCase()},g=n.data={},_=n.NATIVE="N",v=n.POLYFILL="P";s.exports=n},794:function(s,e,t){var r=t(9212);s.exports=function(o){return typeof o=="object"?o!==null:r(o)}},6268:function(s){s.exports=!1},5871:function(s,e,t){var r=t(7583),o=t(5897),a=t(9212),n=t(2447),l=t(7786),g=r.Object;s.exports=l?function(_){return typeof _=="symbol"}:function(_){var v=o("Symbol");return a(v)&&n(v.prototype,g(_))}},4026:function(s,e,t){var r=t(7583),o=t(2938),a=t(8262),n=t(2569),l=t(5637),g=t(114),_=t(1825),v=t(2447),y=t(6307),M=t(8272),E=t(7093),T=r.TypeError,w=function(C,D){this.stopped=C,this.result=D},b=w.prototype;s.exports=function(C,D,k){var z,B,P,U,R,V,Q,J=k&&k.that,ve=!(!k||!k.AS_ENTRIES),le=!(!k||!k.IS_ITERATOR),ee=!(!k||!k.INTERRUPTED),he=o(D,J),ue=function(K){return z&&E(z,"normal",K),new w(!0,K)},$=function(K){return ve?(n(K),ee?he(K[0],K[1],ue):he(K[0],K[1])):ee?he(K,ue):he(K)};if(le)z=C;else{if(!(B=M(C)))throw T(l(C)+" is not iterable");if(g(B)){for(P=0,U=_(C);U>P;P++)if((R=$(C[P]))&&v(b,R))return R;return new w(!1)}z=y(C,B)}for(V=z.next;!(Q=a(V,z)).done;){try{R=$(Q.value)}catch(K){E(z,"throw",K)}if(typeof R=="object"&&R&&v(b,R))return R}return new w(!1)}},7093:function(s,e,t){var r=t(8262),o=t(2569),a=t(911);s.exports=function(n,l,g){var _,v;o(n);try{if(!(_=a(n,"return"))){if(l==="throw")throw g;return g}_=r(_,n)}catch(y){v=!0,_=y}if(l==="throw")throw g;if(v)throw _;return o(_),g}},2365:function(s,e,t){var r,o,a,n=t(6544),l=t(9212),g=t(3590),_=t(729),v=t(1270),y=t(3649),M=t(6268),E=y("iterator"),T=!1;[].keys&&("next"in(a=[].keys())?(o=_(_(a)))!==Object.prototype&&(r=o):T=!0),r==null||n(function(){var w={};return r[E].call(w)!==w})?r={}:M&&(r=g(r)),l(r[E])||v(r,E,function(){return this}),s.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:T}},339:function(s){s.exports={}},1825:function(s,e,t){var r=t(97);s.exports=function(o){return r(o.length)}},2095:function(s,e,t){var r,o,a,n,l,g,_,v,y=t(7583),M=t(2938),E=t(6683).f,T=t(8117).set,w=t(7020),b=t(3256),C=t(6846),D=t(5354),k=y.MutationObserver||y.WebKitMutationObserver,z=y.document,B=y.process,P=y.Promise,U=E(y,"queueMicrotask"),R=U&&U.value;R||(r=function(){var V,Q;for(D&&(V=B.domain)&&V.exit();o;){Q=o.fn,o=o.next;try{Q()}catch(J){throw o?n():a=void 0,J}}a=void 0,V&&V.enter()},w||D||C||!k||!z?!b&&P&&P.resolve?((_=P.resolve(void 0)).constructor=P,v=M(_.then,_),n=function(){v(r)}):D?n=function(){B.nextTick(r)}:(T=M(T,y),n=function(){T(r)}):(l=!0,g=z.createTextNode(""),new k(r).observe(g,{characterData:!0}),n=function(){g.data=l=!l})),s.exports=R||function(V){var Q={fn:V,next:void 0};a&&(a.next=Q),o||(o=Q,n()),a=Q}},783:function(s,e,t){var r=t(7583);s.exports=r.Promise},8640:function(s,e,t){var r=t(4061),o=t(6544);s.exports=!!Object.getOwnPropertySymbols&&!o(function(){var a=Symbol();return!String(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&r&&r<41})},9491:function(s,e,t){var r=t(7583),o=t(9212),a=t(9734),n=r.WeakMap;s.exports=o(n)&&/native code/.test(a(n))},5084:function(s,e,t){var r=t(8257),o=function(a){var n,l;this.promise=new a(function(g,_){if(n!==void 0||l!==void 0)throw TypeError("Bad Promise constructor");n=g,l=_}),this.resolve=r(n),this.reject=r(l)};s.exports.f=function(a){return new o(a)}},2764:function(s,e,t){var r=t(8320);s.exports=function(o,a){return o===void 0?arguments.length<2?"":a:r(o)}},3590:function(s,e,t){var r,o=t(2569),a=t(8728),n=t(5690),l=t(4639),g=t(482),_=t(6668),v=t(9137),y=v("IE_PROTO"),M=function(){},E=function(b){return"<script>"+b+"<\/script>"},T=function(b){b.write(E("")),b.close();var C=b.parentWindow.Object;return b=null,C},w=function(){try{r=new ActiveXObject("htmlfile")}catch{}var b,C;w=typeof document!="undefined"?document.domain&&r?T(r):((C=_("iframe")).style.display="none",g.appendChild(C),C.src=String("javascript:"),(b=C.contentWindow.document).open(),b.write(E("document.F=Object")),b.close(),b.F):T(r);for(var D=n.length;D--;)delete w.prototype[n[D]];return w()};l[y]=!0,s.exports=Object.create||function(b,C){var D;return b!==null?(M.prototype=o(b),D=new M,M.prototype=null,D[y]=b):D=w(),C===void 0?D:a.f(D,C)}},8728:function(s,e,t){var r=t(8494),o=t(7670),a=t(4615),n=t(2569),l=t(2977),g=t(5432);e.f=r&&!o?Object.defineProperties:function(_,v){n(_);for(var y,M=l(v),E=g(v),T=E.length,w=0;T>w;)a.f(_,y=E[w++],M[y]);return _}},4615:function(s,e,t){var r=t(7583),o=t(8494),a=t(275),n=t(7670),l=t(2569),g=t(8734),_=r.TypeError,v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,M="enumerable",E="configurable",T="writable";e.f=o?n?function(w,b,C){if(l(w),b=g(b),l(C),typeof w=="function"&&b==="prototype"&&"value"in C&&T in C&&!C.writable){var D=y(w,b);D&&D.writable&&(w[b]=C.value,C={configurable:E in C?C.configurable:D.configurable,enumerable:M in C?C.enumerable:D.enumerable,writable:!1})}return v(w,b,C)}:v:function(w,b,C){if(l(w),b=g(b),l(C),a)try{return v(w,b,C)}catch{}if("get"in C||"set"in C)throw _("Accessors not supported");return"value"in C&&(w[b]=C.value),w}},6683:function(s,e,t){var r=t(8494),o=t(8262),a=t(112),n=t(4677),l=t(2977),g=t(8734),_=t(2870),v=t(275),y=Object.getOwnPropertyDescriptor;e.f=r?y:function(M,E){if(M=l(M),E=g(E),v)try{return y(M,E)}catch{}if(_(M,E))return n(!o(a.f,M,E),M[E])}},3130:function(s,e,t){var r=t(9624),o=t(2977),a=t(9275).f,n=t(4546),l=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];s.exports.f=function(g){return l&&r(g)=="Window"?function(_){try{return a(_)}catch{return n(l)}}(g):a(o(g))}},9275:function(s,e,t){var r=t(8356),o=t(5690).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(a){return r(a,o)}},4012:function(s,e){e.f=Object.getOwnPropertySymbols},729:function(s,e,t){var r=t(7583),o=t(2870),a=t(9212),n=t(1324),l=t(9137),g=t(926),_=l("IE_PROTO"),v=r.Object,y=v.prototype;s.exports=g?v.getPrototypeOf:function(M){var E=n(M);if(o(E,_))return E[_];var T=E.constructor;return a(T)&&E instanceof T?T.prototype:E instanceof v?y:null}},2447:function(s,e,t){var r=t(7386);s.exports=r({}.isPrototypeOf)},8356:function(s,e,t){var r=t(7386),o=t(2870),a=t(2977),n=t(5766).indexOf,l=t(4639),g=r([].push);s.exports=function(_,v){var y,M=a(_),E=0,T=[];for(y in M)!o(l,y)&&o(M,y)&&g(T,y);for(;v.length>E;)o(M,y=v[E++])&&(~n(T,y)||g(T,y));return T}},5432:function(s,e,t){var r=t(8356),o=t(5690);s.exports=Object.keys||function(a){return r(a,o)}},112:function(s,e){var t={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!t.call({1:2},1);e.f=o?function(a){var n=r(this,a);return!!n&&n.enumerable}:t},7496:function(s,e,t){var r=t(7386),o=t(2569),a=t(9882);s.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,l=!1,g={};try{(n=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(g,[]),l=g instanceof Array}catch{}return function(_,v){return o(_),a(v),l?n(_,v):_.__proto__=v,_}}():void 0)},3060:function(s,e,t){var r=t(8191),o=t(3058);s.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},6252:function(s,e,t){var r=t(7583),o=t(8262),a=t(9212),n=t(794),l=r.TypeError;s.exports=function(g,_){var v,y;if(_==="string"&&a(v=g.toString)&&!n(y=o(v,g))||a(v=g.valueOf)&&!n(y=o(v,g))||_!=="string"&&a(v=g.toString)&&!n(y=o(v,g)))return y;throw l("Can't convert object to primitive value")}},929:function(s,e,t){var r=t(5897),o=t(7386),a=t(9275),n=t(4012),l=t(2569),g=o([].concat);s.exports=r("Reflect","ownKeys")||function(_){var v=a.f(l(_)),y=n.f;return y?g(v,y(_)):v}},1287:function(s,e,t){var r=t(7583);s.exports=r},544:function(s){s.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},5732:function(s,e,t){var r=t(2569),o=t(794),a=t(5084);s.exports=function(n,l){if(r(n),o(l)&&l.constructor===n)return l;var g=a.f(n);return(0,g.resolve)(l),g.promise}},2723:function(s){var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var r={item:t,next:null};this.head?this.tail.next=r:this.head=r,this.tail=r},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},s.exports=e},6893:function(s,e,t){var r=t(1270);s.exports=function(o,a,n){for(var l in a)r(o,l,a[l],n);return o}},1270:function(s,e,t){var r=t(7583),o=t(9212),a=t(2870),n=t(57),l=t(460),g=t(9734),_=t(2743),v=t(4340).CONFIGURABLE,y=_.get,M=_.enforce,E=String(String).split("String");(s.exports=function(T,w,b,C){var D,k=!!C&&!!C.unsafe,z=!!C&&!!C.enumerable,B=!!C&&!!C.noTargetGet,P=C&&C.name!==void 0?C.name:w;o(b)&&(String(P).slice(0,7)==="Symbol("&&(P="["+String(P).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!a(b,"name")||v&&b.name!==P)&&n(b,"name",P),(D=M(b)).source||(D.source=E.join(typeof P=="string"?P:""))),T!==r?(k?!B&&T[w]&&(z=!0):delete T[w],z?T[w]=b:n(T,w,b)):z?T[w]=b:l(w,b)})(Function.prototype,"toString",function(){return o(this)&&y(this).source||g(this)})},3955:function(s,e,t){var r=t(7583).TypeError;s.exports=function(o){if(o==null)throw r("Can't call method on "+o);return o}},460:function(s,e,t){var r=t(7583),o=Object.defineProperty;s.exports=function(a,n){try{o(r,a,{value:n,configurable:!0,writable:!0})}catch{r[a]=n}return n}},7730:function(s,e,t){var r=t(5897),o=t(4615),a=t(3649),n=t(8494),l=a("species");s.exports=function(g){var _=r(g),v=o.f;n&&_&&!_[l]&&v(_,l,{configurable:!0,get:function(){return this}})}},8821:function(s,e,t){var r=t(4615).f,o=t(2870),a=t(3649)("toStringTag");s.exports=function(n,l,g){n&&!g&&(n=n.prototype),n&&!o(n,a)&&r(n,a,{configurable:!0,value:l})}},9137:function(s,e,t){var r=t(7836),o=t(8284),a=r("keys");s.exports=function(n){return a[n]||(a[n]=o(n))}},1314:function(s,e,t){var r=t(7583),o=t(460),a="__core-js_shared__",n=r[a]||o(a,{});s.exports=n},7836:function(s,e,t){var r=t(6268),o=t(1314);(s.exports=function(a,n){return o[a]||(o[a]=n!==void 0?n:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},564:function(s,e,t){var r=t(2569),o=t(1186),a=t(3649)("species");s.exports=function(n,l){var g,_=r(n).constructor;return _===void 0||(g=r(_)[a])==null?l:o(g)}},6389:function(s,e,t){var r=t(7386),o=t(7486),a=t(8320),n=t(3955),l=r("".charAt),g=r("".charCodeAt),_=r("".slice),v=function(y){return function(M,E){var T,w,b=a(n(M)),C=o(E),D=b.length;return C<0||C>=D?y?"":void 0:(T=g(b,C))<55296||T>56319||C+1===D||(w=g(b,C+1))<56320||w>57343?y?l(b,C):T:y?_(b,C,C+2):w-56320+(T-55296<<10)+65536}};s.exports={codeAt:v(!1),charAt:v(!0)}},8117:function(s,e,t){var r,o,a,n,l=t(7583),g=t(1611),_=t(2938),v=t(9212),y=t(2870),M=t(6544),E=t(482),T=t(6917),w=t(6668),b=t(7520),C=t(7020),D=t(5354),k=l.setImmediate,z=l.clearImmediate,B=l.process,P=l.Dispatch,U=l.Function,R=l.MessageChannel,V=l.String,Q=0,J={},ve="onreadystatechange";try{r=l.location}catch{}var le=function($){if(y(J,$)){var K=J[$];delete J[$],K()}},ee=function($){return function(){le($)}},he=function($){le($.data)},ue=function($){l.postMessage(V($),r.protocol+"//"+r.host)};k&&z||(k=function($){b(arguments.length,1);var K=v($)?$:U($),ne=T(arguments,1);return J[++Q]=function(){g(K,void 0,ne)},o(Q),Q},z=function($){delete J[$]},D?o=function($){B.nextTick(ee($))}:P&&P.now?o=function($){P.now(ee($))}:R&&!C?(n=(a=new R).port2,a.port1.onmessage=he,o=_(n.postMessage,n)):l.addEventListener&&v(l.postMessage)&&!l.importScripts&&r&&r.protocol!=="file:"&&!M(ue)?(o=ue,l.addEventListener("message",he,!1)):o=ve in w("script")?function($){E.appendChild(w("script")).onreadystatechange=function(){E.removeChild(this),le($)}}:function($){setTimeout(ee($),0)}),s.exports={set:k,clear:z}},6782:function(s,e,t){var r=t(7486),o=Math.max,a=Math.min;s.exports=function(n,l){var g=r(n);return g<0?o(g+l,0):a(g,l)}},2977:function(s,e,t){var r=t(5044),o=t(3955);s.exports=function(a){return r(o(a))}},7486:function(s){var e=Math.ceil,t=Math.floor;s.exports=function(r){var o=+r;return o!=o||o===0?0:(o>0?t:e)(o)}},97:function(s,e,t){var r=t(7486),o=Math.min;s.exports=function(a){return a>0?o(r(a),9007199254740991):0}},1324:function(s,e,t){var r=t(7583),o=t(3955),a=r.Object;s.exports=function(n){return a(o(n))}},2670:function(s,e,t){var r=t(7583),o=t(8262),a=t(794),n=t(5871),l=t(911),g=t(6252),_=t(3649),v=r.TypeError,y=_("toPrimitive");s.exports=function(M,E){if(!a(M)||n(M))return M;var T,w=l(M,y);if(w){if(E===void 0&&(E="default"),T=o(w,M,E),!a(T)||n(T))return T;throw v("Can't convert object to primitive value")}return E===void 0&&(E="number"),g(M,E)}},8734:function(s,e,t){var r=t(2670),o=t(5871);s.exports=function(a){var n=r(a,"string");return o(n)?n:n+""}},8191:function(s,e,t){var r={};r[t(3649)("toStringTag")]="z",s.exports=String(r)==="[object z]"},8320:function(s,e,t){var r=t(7583),o=t(3058),a=r.String;s.exports=function(n){if(o(n)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return a(n)}},5637:function(s,e,t){var r=t(7583).String;s.exports=function(o){try{return r(o)}catch{return"Object"}}},8284:function(s,e,t){var r=t(7386),o=0,a=Math.random(),n=r(1 .toString);s.exports=function(l){return"Symbol("+(l===void 0?"":l)+")_"+n(++o+a,36)}},7786:function(s,e,t){var r=t(8640);s.exports=r&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},7670:function(s,e,t){var r=t(8494),o=t(6544);s.exports=r&&o(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},7520:function(s,e,t){var r=t(7583).TypeError;s.exports=function(o,a){if(o<a)throw r("Not enough arguments");return o}},491:function(s,e,t){var r=t(3649);e.f=r},3649:function(s,e,t){var r=t(7583),o=t(7836),a=t(2870),n=t(8284),l=t(8640),g=t(7786),_=o("wks"),v=r.Symbol,y=v&&v.for,M=g?v:v&&v.withoutSetter||n;s.exports=function(E){if(!a(_,E)||!l&&typeof _[E]!="string"){var T="Symbol."+E;l&&a(v,E)?_[E]=v[E]:_[E]=g&&y?y(T):M(T)}return _[E]}},1719:function(s,e,t){var r=t(7263),o=t(7583),a=t(2447),n=t(729),l=t(7496),g=t(3478),_=t(3590),v=t(57),y=t(4677),M=t(1509),E=t(4402),T=t(4026),w=t(2764),b=t(3649),C=t(1178),D=b("toStringTag"),k=o.Error,z=[].push,B=function(U,R){var V,Q=arguments.length>2?arguments[2]:void 0,J=a(P,this);l?V=l(new k,J?n(this):P):(V=J?this:_(P),v(V,D,"Error")),R!==void 0&&v(V,"message",w(R)),C&&v(V,"stack",M(V.stack,1)),E(V,Q);var ve=[];return T(U,z,{that:ve}),v(V,"errors",ve),V};l?l(B,k):g(B,k,{name:!0});var P=B.prototype=_(k.prototype,{constructor:y(1,B),message:y(1,""),name:y(1,"AggregateError")});r({global:!0},{AggregateError:B})},1646:function(s,e,t){var r=t(7263),o=t(7583),a=t(6544),n=t(4521),l=t(794),g=t(1324),_=t(1825),v=t(5999),y=t(4822),M=t(9269),E=t(3649),T=t(4061),w=E("isConcatSpreadable"),b=9007199254740991,C="Maximum allowed index exceeded",D=o.TypeError,k=T>=51||!a(function(){var P=[];return P[w]=!1,P.concat()[0]!==P}),z=M("concat"),B=function(P){if(!l(P))return!1;var U=P[w];return U!==void 0?!!U:n(P)};r({target:"Array",proto:!0,forced:!k||!z},{concat:function(P){var U,R,V,Q,J,ve=g(this),le=y(ve,0),ee=0;for(U=-1,V=arguments.length;U<V;U++)if(B(J=U===-1?ve:arguments[U])){if(ee+(Q=_(J))>b)throw D(C);for(R=0;R<Q;R++,ee++)R in J&&v(le,ee,J[R])}else{if(ee>=b)throw D(C);v(le,ee++,J)}return le.length=ee,le}})},5677:function(s,e,t){var r=t(2977),o=t(6288),a=t(339),n=t(2743),l=t(4615).f,g=t(9012),_=t(6268),v=t(8494),y="Array Iterator",M=n.set,E=n.getterFor(y);s.exports=g(Array,"Array",function(w,b){M(this,{type:y,target:r(w),index:0,kind:b})},function(){var w=E(this),b=w.target,C=w.kind,D=w.index++;return!b||D>=b.length?(w.target=void 0,{value:void 0,done:!0}):C=="keys"?{value:D,done:!1}:C=="values"?{value:b[D],done:!1}:{value:[D,b[D]],done:!1}},"values");var T=a.Arguments=a.Array;if(o("keys"),o("values"),o("entries"),!_&&v&&T.name!=="values")try{l(T,"name",{value:"values"})}catch{}},6956:function(s,e,t){var r=t(7583);t(8821)(r.JSON,"JSON",!0)},5222:function(s,e,t){t(8821)(Math,"Math",!0)},6394:function(s,e,t){var r=t(8191),o=t(1270),a=t(3060);r||o(Object.prototype,"toString",a,{unsafe:!0})},6969:function(s,e,t){var r=t(7263),o=t(8262),a=t(8257),n=t(5084),l=t(544),g=t(4026);r({target:"Promise",stat:!0},{allSettled:function(_){var v=this,y=n.f(v),M=y.resolve,E=y.reject,T=l(function(){var w=a(v.resolve),b=[],C=0,D=1;g(_,function(k){var z=C++,B=!1;D++,o(w,v,k).then(function(P){B||(B=!0,b[z]={status:"fulfilled",value:P},--D||M(b))},function(P){B||(B=!0,b[z]={status:"rejected",reason:P},--D||M(b))})}),--D||M(b)});return T.error&&E(T.value),y.promise}})},2021:function(s,e,t){var r=t(7263),o=t(8257),a=t(5897),n=t(8262),l=t(5084),g=t(544),_=t(4026),v="No one promise resolved";r({target:"Promise",stat:!0},{any:function(y){var M=this,E=a("AggregateError"),T=l.f(M),w=T.resolve,b=T.reject,C=g(function(){var D=o(M.resolve),k=[],z=0,B=1,P=!1;_(y,function(U){var R=z++,V=!1;B++,n(D,M,U).then(function(Q){V||P||(P=!0,w(Q))},function(Q){V||P||(V=!0,k[R]=Q,--B||b(new E(k,v)))})}),--B||b(new E(k,v))});return C.error&&b(C.value),T.promise}})},8328:function(s,e,t){var r=t(7263),o=t(6268),a=t(783),n=t(6544),l=t(5897),g=t(9212),_=t(564),v=t(5732),y=t(1270);if(r({target:"Promise",proto:!0,real:!0,forced:!!a&&n(function(){a.prototype.finally.call({then:function(){}},function(){})})},{finally:function(E){var T=_(this,l("Promise")),w=g(E);return this.then(w?function(b){return v(T,E()).then(function(){return b})}:E,w?function(b){return v(T,E()).then(function(){throw b})}:E)}}),!o&&g(a)){var M=l("Promise").prototype.finally;a.prototype.finally!==M&&y(a.prototype,"finally",M,{unsafe:!0})}},5334:function(s,e,t){var r,o,a,n,l=t(7263),g=t(6268),_=t(7583),v=t(5897),y=t(8262),M=t(783),E=t(1270),T=t(6893),w=t(7496),b=t(8821),C=t(7730),D=t(8257),k=t(9212),z=t(794),B=t(4761),P=t(9734),U=t(4026),R=t(3616),V=t(564),Q=t(8117).set,J=t(2095),ve=t(5732),le=t(2716),ee=t(5084),he=t(544),ue=t(2723),$=t(2743),K=t(4451),ne=t(3649),fe=t(2274),se=t(5354),Y=t(4061),ce=ne("species"),ge="Promise",q=$.getterFor(ge),te=$.set,Me=$.getterFor(ge),Pe=M&&M.prototype,Ue=M,Le=Pe,$e=_.TypeError,We=_.document,ze=_.process,et=ee.f,Je=et,Ze=!!(We&&We.createEvent&&_.dispatchEvent),tt=k(_.PromiseRejectionEvent),nt="unhandledrejection",it=!1,lt=K(ge,function(){var H=P(Ue),I=H!==String(Ue);if(!I&&Y===66||g&&!Le.finally)return!0;if(Y>=51&&/native code/.test(H))return!1;var oe=new Ue(function(Oe){Oe(1)}),pe=function(Oe){Oe(function(){},function(){})};return(oe.constructor={})[ce]=pe,!(it=oe.then(function(){})instanceof pe)||!I&&fe&&!tt}),Tt=lt||!R(function(H){Ue.all(H).catch(function(){})}),j=function(H){var I;return!(!z(H)||!k(I=H.then))&&I},F=function(H,I){var oe,pe,Oe,Re=I.value,Fe=I.state==1,Ce=Fe?H.ok:H.fail,Ne=H.resolve,Ee=H.reject,Ie=H.domain;try{Ce?(Fe||(I.rejection===2&&je(I),I.rejection=1),Ce===!0?oe=Re:(Ie&&Ie.enter(),oe=Ce(Re),Ie&&(Ie.exit(),Oe=!0)),oe===H.promise?Ee($e("Promise-chain cycle")):(pe=j(oe))?y(pe,oe,Ne,Ee):Ne(oe)):Ee(Re)}catch(ke){Ie&&!Oe&&Ie.exit(),Ee(ke)}},be=function(H,I){H.notified||(H.notified=!0,J(function(){for(var oe,pe=H.reactions;oe=pe.get();)F(oe,H);H.notified=!1,I&&!H.rejection&&Ae(H)}))},De=function(H,I,oe){var pe,Oe;Ze?((pe=We.createEvent("Event")).promise=I,pe.reason=oe,pe.initEvent(H,!1,!0),_.dispatchEvent(pe)):pe={promise:I,reason:oe},!tt&&(Oe=_["on"+H])?Oe(pe):H===nt&&le("Unhandled promise rejection",oe)},Ae=function(H){y(Q,_,function(){var I,oe=H.facade,pe=H.value;if(Be(H)&&(I=he(function(){se?ze.emit("unhandledRejection",pe,oe):De(nt,oe,pe)}),H.rejection=se||Be(H)?2:1,I.error))throw I.value})},Be=function(H){return H.rejection!==1&&!H.parent},je=function(H){y(Q,_,function(){var I=H.facade;se?ze.emit("rejectionHandled",I):De("rejectionhandled",I,H.value)})},G=function(H,I,oe){return function(pe){H(I,pe,oe)}},Se=function(H,I,oe){H.done||(H.done=!0,oe&&(H=oe),H.value=I,H.state=2,be(H,!0))},Z=function H(I,oe,pe){if(!I.done){I.done=!0,pe&&(I=pe);try{if(I.facade===oe)throw $e("Promise can't be resolved itself");var Oe=j(oe);Oe?J(function(){var Re={done:!1};try{y(Oe,oe,G(H,Re,I),G(Se,Re,I))}catch(Fe){Se(Re,Fe,I)}}):(I.value=oe,I.state=1,be(I,!1))}catch(Re){Se({done:!1},Re,I)}}};if(lt&&(Le=(Ue=function(H){B(this,Le),D(H),y(r,this);var I=q(this);try{H(G(Z,I),G(Se,I))}catch(oe){Se(I,oe)}}).prototype,(r=function(H){te(this,{type:ge,done:!1,notified:!1,parent:!1,reactions:new ue,rejection:!1,state:0,value:void 0})}).prototype=T(Le,{then:function(H,I){var oe=Me(this),pe=et(V(this,Ue));return oe.parent=!0,pe.ok=!k(H)||H,pe.fail=k(I)&&I,pe.domain=se?ze.domain:void 0,oe.state==0?oe.reactions.add(pe):J(function(){F(pe,oe)}),pe.promise},catch:function(H){return this.then(void 0,H)}}),o=function(){var H=new r,I=q(H);this.promise=H,this.resolve=G(Z,I),this.reject=G(Se,I)},ee.f=et=function(H){return H===Ue||H===a?new o(H):Je(H)},!g&&k(M)&&Pe!==Object.prototype)){n=Pe.then,it||(E(Pe,"then",function(H,I){var oe=this;return new Ue(function(pe,Oe){y(n,oe,pe,Oe)}).then(H,I)},{unsafe:!0}),E(Pe,"catch",Le.catch,{unsafe:!0}));try{delete Pe.constructor}catch{}w&&w(Pe,Le)}l({global:!0,wrap:!0,forced:lt},{Promise:Ue}),b(Ue,ge,!1,!0),C(ge),a=v(ge),l({target:ge,stat:!0,forced:lt},{reject:function(H){var I=et(this);return y(I.reject,void 0,H),I.promise}}),l({target:ge,stat:!0,forced:g||lt},{resolve:function(H){return ve(g&&this===a?Ue:this,H)}}),l({target:ge,stat:!0,forced:Tt},{all:function(H){var I=this,oe=et(I),pe=oe.resolve,Oe=oe.reject,Re=he(function(){var Fe=D(I.resolve),Ce=[],Ne=0,Ee=1;U(H,function(Ie){var ke=Ne++,He=!1;Ee++,y(Fe,I,Ie).then(function(ut){He||(He=!0,Ce[ke]=ut,--Ee||pe(Ce))},Oe)}),--Ee||pe(Ce)});return Re.error&&Oe(Re.value),oe.promise},race:function(H){var I=this,oe=et(I),pe=oe.reject,Oe=he(function(){var Re=D(I.resolve);U(H,function(Fe){y(Re,I,Fe).then(oe.resolve,pe)})});return Oe.error&&pe(Oe.value),oe.promise}})},2257:function(s,e,t){var r=t(7263),o=t(7583),a=t(8821);r({global:!0},{Reflect:{}}),a(o.Reflect,"Reflect",!0)},2129:function(s,e,t){var r=t(6389).charAt,o=t(8320),a=t(2743),n=t(9012),l="String Iterator",g=a.set,_=a.getterFor(l);n(String,"String",function(v){g(this,{type:l,string:o(v),index:0})},function(){var v,y=_(this),M=y.string,E=y.index;return E>=M.length?{value:void 0,done:!0}:(v=r(M,E),y.index+=v.length,{value:v,done:!1})})},462:function(s,e,t){t(2219)("asyncIterator")},8407:function(s,e,t){var r=t(7263),o=t(8494),a=t(7583),n=t(7386),l=t(2870),g=t(9212),_=t(2447),v=t(8320),y=t(4615).f,M=t(3478),E=a.Symbol,T=E&&E.prototype;if(o&&g(E)&&(!("description"in T)||E().description!==void 0)){var w={},b=function(){var U=arguments.length<1||arguments[0]===void 0?void 0:v(arguments[0]),R=_(T,this)?new E(U):U===void 0?E():E(U);return U===""&&(w[R]=!0),R};M(b,E),b.prototype=T,T.constructor=b;var C=String(E("test"))=="Symbol(test)",D=n(T.toString),k=n(T.valueOf),z=/^Symbol\((.*)\)[^)]+$/,B=n("".replace),P=n("".slice);y(T,"description",{configurable:!0,get:function(){var U=k(this),R=D(U);if(l(w,U))return"";var V=C?P(R,7,-1):B(R,z,"$1");return V===""?void 0:V}}),r({global:!0,forced:!0},{Symbol:b})}},2429:function(s,e,t){t(2219)("hasInstance")},1172:function(s,e,t){t(2219)("isConcatSpreadable")},8288:function(s,e,t){t(2219)("iterator")},2004:function(s,e,t){var r=t(7263),o=t(7583),a=t(5897),n=t(1611),l=t(8262),g=t(7386),_=t(6268),v=t(8494),y=t(8640),M=t(6544),E=t(2870),T=t(4521),w=t(9212),b=t(794),C=t(2447),D=t(5871),k=t(2569),z=t(1324),B=t(2977),P=t(8734),U=t(8320),R=t(4677),V=t(3590),Q=t(5432),J=t(9275),ve=t(3130),le=t(4012),ee=t(6683),he=t(4615),ue=t(8728),$=t(112),K=t(6917),ne=t(1270),fe=t(7836),se=t(9137),Y=t(4639),ce=t(8284),ge=t(3649),q=t(491),te=t(2219),Me=t(8821),Pe=t(2743),Ue=t(4805).forEach,Le=se("hidden"),$e="Symbol",We=ge("toPrimitive"),ze=Pe.set,et=Pe.getterFor($e),Je=Object.prototype,Ze=o.Symbol,tt=Ze&&Ze.prototype,nt=o.TypeError,it=o.QObject,lt=a("JSON","stringify"),Tt=ee.f,j=he.f,F=ve.f,be=$.f,De=g([].push),Ae=fe("symbols"),Be=fe("op-symbols"),je=fe("string-to-symbol-registry"),G=fe("symbol-to-string-registry"),Se=fe("wks"),Z=!it||!it.prototype||!it.prototype.findChild,H=v&&M(function(){return V(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a!=7})?function(Ee,Ie,ke){var He=Tt(Je,Ie);He&&delete Je[Ie],j(Ee,Ie,ke),He&&Ee!==Je&&j(Je,Ie,He)}:j,I=function(Ee,Ie){var ke=Ae[Ee]=V(tt);return ze(ke,{type:$e,tag:Ee,description:Ie}),v||(ke.description=Ie),ke},oe=function(Ee,Ie,ke){Ee===Je&&oe(Be,Ie,ke),k(Ee);var He=P(Ie);return k(ke),E(Ae,He)?(ke.enumerable?(E(Ee,Le)&&Ee[Le][He]&&(Ee[Le][He]=!1),ke=V(ke,{enumerable:R(0,!1)})):(E(Ee,Le)||j(Ee,Le,R(1,{})),Ee[Le][He]=!0),H(Ee,He,ke)):j(Ee,He,ke)},pe=function(Ee,Ie){k(Ee);var ke=B(Ie),He=Q(ke).concat(Ce(ke));return Ue(He,function(ut){v&&!l(Oe,ke,ut)||oe(Ee,ut,ke[ut])}),Ee},Oe=function(Ee){var Ie=P(Ee),ke=l(be,this,Ie);return!(this===Je&&E(Ae,Ie)&&!E(Be,Ie))&&(!(ke||!E(this,Ie)||!E(Ae,Ie)||E(this,Le)&&this[Le][Ie])||ke)},Re=function(Ee,Ie){var ke=B(Ee),He=P(Ie);if(ke!==Je||!E(Ae,He)||E(Be,He)){var ut=Tt(ke,He);return!ut||!E(Ae,He)||E(ke,Le)&&ke[Le][He]||(ut.enumerable=!0),ut}},Fe=function(Ee){var Ie=F(B(Ee)),ke=[];return Ue(Ie,function(He){E(Ae,He)||E(Y,He)||De(ke,He)}),ke},Ce=function(Ee){var Ie=Ee===Je,ke=F(Ie?Be:B(Ee)),He=[];return Ue(ke,function(ut){!E(Ae,ut)||Ie&&!E(Je,ut)||De(He,Ae[ut])}),He};if(y||(Ze=function(){if(C(tt,this))throw nt("Symbol is not a constructor");var Ee=arguments.length&&arguments[0]!==void 0?U(arguments[0]):void 0,Ie=ce(Ee),ke=function He(ut){this===Je&&l(He,Be,ut),E(this,Le)&&E(this[Le],Ie)&&(this[Le][Ie]=!1),H(this,Ie,R(1,ut))};return v&&Z&&H(Je,Ie,{configurable:!0,set:ke}),I(Ie,Ee)},ne(tt=Ze.prototype,"toString",function(){return et(this).tag}),ne(Ze,"withoutSetter",function(Ee){return I(ce(Ee),Ee)}),$.f=Oe,he.f=oe,ue.f=pe,ee.f=Re,J.f=ve.f=Fe,le.f=Ce,q.f=function(Ee){return I(ge(Ee),Ee)},v&&(j(tt,"description",{configurable:!0,get:function(){return et(this).description}}),_||ne(Je,"propertyIsEnumerable",Oe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!y,sham:!y},{Symbol:Ze}),Ue(Q(Se),function(Ee){te(Ee)}),r({target:$e,stat:!0,forced:!y},{for:function(Ee){var Ie=U(Ee);if(E(je,Ie))return je[Ie];var ke=Ze(Ie);return je[Ie]=ke,G[ke]=Ie,ke},keyFor:function(Ee){if(!D(Ee))throw nt(Ee+" is not a symbol");if(E(G,Ee))return G[Ee]},useSetter:function(){Z=!0},useSimple:function(){Z=!1}}),r({target:"Object",stat:!0,forced:!y,sham:!v},{create:function(Ee,Ie){return Ie===void 0?V(Ee):pe(V(Ee),Ie)},defineProperty:oe,defineProperties:pe,getOwnPropertyDescriptor:Re}),r({target:"Object",stat:!0,forced:!y},{getOwnPropertyNames:Fe,getOwnPropertySymbols:Ce}),r({target:"Object",stat:!0,forced:M(function(){le.f(1)})},{getOwnPropertySymbols:function(Ee){return le.f(z(Ee))}}),lt&&r({target:"JSON",stat:!0,forced:!y||M(function(){var Ee=Ze();return lt([Ee])!="[null]"||lt({a:Ee})!="{}"||lt(Object(Ee))!="{}"})},{stringify:function(Ee,Ie,ke){var He=K(arguments),ut=Ie;if((b(Ie)||Ee!==void 0)&&!D(Ee))return T(Ie)||(Ie=function(Yt,It){if(w(ut)&&(It=l(ut,this,Yt,It)),!D(It))return It}),He[1]=Ie,n(lt,null,He)}}),!tt[We]){var Ne=tt.valueOf;ne(tt,We,function(Ee){return l(Ne,this)})}Me(Ze,$e),Y[Le]=!0},8201:function(s,e,t){t(2219)("matchAll")},1274:function(s,e,t){t(2219)("match")},6626:function(s,e,t){t(2219)("replace")},3211:function(s,e,t){t(2219)("search")},9952:function(s,e,t){t(2219)("species")},15:function(s,e,t){t(2219)("split")},9831:function(s,e,t){t(2219)("toPrimitive")},7521:function(s,e,t){t(2219)("toStringTag")},2972:function(s,e,t){t(2219)("unscopables")},4655:function(s,e,t){var r=t(7583),o=t(6778),a=t(9307),n=t(5677),l=t(57),g=t(3649),_=g("iterator"),v=g("toStringTag"),y=n.values,M=function(T,w){if(T){if(T[_]!==y)try{l(T,_,y)}catch{T[_]=y}if(T[v]||l(T,v,w),o[w]){for(var b in n)if(T[b]!==n[b])try{l(T,b,n[b])}catch{T[b]=n[b]}}}};for(var E in o)M(r[E]&&r[E].prototype,E);M(a,"DOMTokenList")},8765:function(s,e,t){var r=t(5036);t(4655),s.exports=r},5441:function(s,e,t){var r=t(2582);t(4655),s.exports=r},7705:function(s){s.exports=function(e){var t=[];return t.toString=function(){return this.map(function(r){var o="",a=r[5]!==void 0;return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),a&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=e(r),a&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o}).join("")},t.i=function(r,o,a,n,l){typeof r=="string"&&(r=[[null,r,void 0]]);var g={};if(a)for(var _=0;_<this.length;_++){var v=this[_][0];v!=null&&(g[v]=!0)}for(var y=0;y<r.length;y++){var M=[].concat(r[y]);a&&g[M[0]]||(l!==void 0&&(M[5]===void 0||(M[1]="@layer".concat(M[5].length>0?" ".concat(M[5]):""," {").concat(M[1],"}")),M[5]=l),o&&(M[2]&&(M[1]="@media ".concat(M[2]," {").concat(M[1],"}")),M[2]=o),n&&(M[4]?(M[1]="@supports (".concat(M[4],") {").concat(M[1],"}"),M[4]=n):M[4]="".concat(n)),t.push(M))}},t}},6738:function(s){s.exports=function(e){return e[1]}},8679:function(s){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,t=window.WeakMap;if(t===void 0){var r=Object.defineProperty,o=Date.now()%1e9;(t=function(){this.name="__st"+(1e9*Math.random()>>>0)+o+++"__"}).prototype={set:function(P,U){var R=P[this.name];return R&&R[0]===P?R[1]=U:r(P,this.name,{value:[P,U],writable:!0}),this},get:function(P){var U;return(U=P[this.name])&&U[0]===P?U[1]:void 0},delete:function(P){var U=P[this.name];if(!U)return!1;var R=U[0]===P;return U[0]=U[1]=void 0,R},has:function(P){var U=P[this.name];return!!U&&U[0]===P}}}var a=new t,n=window.msSetImmediate;if(!n){var l=[],g=String(Math.random());window.addEventListener("message",function(P){if(P.data===g){var U=l;l=[],U.forEach(function(R){R()})}}),n=function(P){l.push(P),window.postMessage(g,"*")}}var _=!1,v=[];function y(){_=!1;var P=v;v=[],P.sort(function(R,V){return R.uid_-V.uid_});var U=!1;P.forEach(function(R){var V=R.takeRecords();(function(Q){Q.nodes_.forEach(function(J){var ve=a.get(J);ve&&ve.forEach(function(le){le.observer===Q&&le.removeTransientObservers()})})})(R),V.length&&(R.callback_(V,R),U=!0)}),U&&y()}function M(P,U){for(var R=P;R;R=R.parentNode){var V=a.get(R);if(V)for(var Q=0;Q<V.length;Q++){var J=V[Q],ve=J.options;if(R===P||ve.subtree){var le=U(ve);le&&J.enqueue(le)}}}}var E,T,w=0;function b(P){this.callback_=P,this.nodes_=[],this.records_=[],this.uid_=++w}function C(P,U){this.type=P,this.target=U,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function D(P,U){return E=new C(P,U)}function k(P){return T||((R=new C((U=E).type,U.target)).addedNodes=U.addedNodes.slice(),R.removedNodes=U.removedNodes.slice(),R.previousSibling=U.previousSibling,R.nextSibling=U.nextSibling,R.attributeName=U.attributeName,R.attributeNamespace=U.attributeNamespace,R.oldValue=U.oldValue,(T=R).oldValue=P,T);var U,R}function z(P,U){return P===U?P:T&&((R=P)===T||R===E)?T:null;var R}function B(P,U,R){this.observer=P,this.target=U,this.options=R,this.transientObservedNodes=[]}b.prototype={observe:function(P,U){var R;if(R=P,P=window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(R)||R,!U.childList&&!U.attributes&&!U.characterData||U.attributeOldValue&&!U.attributes||U.attributeFilter&&U.attributeFilter.length&&!U.attributes||U.characterDataOldValue&&!U.characterData)throw new SyntaxError;var V,Q=a.get(P);Q||a.set(P,Q=[]);for(var J=0;J<Q.length;J++)if(Q[J].observer===this){(V=Q[J]).removeListeners(),V.options=U;break}V||(V=new B(this,P,U),Q.push(V),this.nodes_.push(P)),V.addListeners()},disconnect:function(){this.nodes_.forEach(function(P){for(var U=a.get(P),R=0;R<U.length;R++){var V=U[R];if(V.observer===this){V.removeListeners(),U.splice(R,1);break}}},this),this.records_=[]},takeRecords:function(){var P=this.records_;return this.records_=[],P}},B.prototype={enqueue:function(P){var U,R=this.observer.records_,V=R.length;if(R.length>0){var Q=z(R[V-1],P);if(Q)return void(R[V-1]=Q)}else U=this.observer,v.push(U),_||(_=!0,n(y));R[V]=P},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(P){var U=this.options;U.attributes&&P.addEventListener("DOMAttrModified",this,!0),U.characterData&&P.addEventListener("DOMCharacterDataModified",this,!0),U.childList&&P.addEventListener("DOMNodeInserted",this,!0),(U.childList||U.subtree)&&P.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(P){var U=this.options;U.attributes&&P.removeEventListener("DOMAttrModified",this,!0),U.characterData&&P.removeEventListener("DOMCharacterDataModified",this,!0),U.childList&&P.removeEventListener("DOMNodeInserted",this,!0),(U.childList||U.subtree)&&P.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(P){if(P!==this.target){this.addListeners_(P),this.transientObservedNodes.push(P);var U=a.get(P);U||a.set(P,U=[]),U.push(this)}},removeTransientObservers:function(){var P=this.transientObservedNodes;this.transientObservedNodes=[],P.forEach(function(U){this.removeListeners_(U);for(var R=a.get(U),V=0;V<R.length;V++)if(R[V]===this){R.splice(V,1);break}},this)},handleEvent:function(P){switch(P.stopImmediatePropagation(),P.type){case"DOMAttrModified":var U=P.attrName,R=P.relatedNode.namespaceURI,V=P.target;(J=new D("attributes",V)).attributeName=U,J.attributeNamespace=R;var Q=null;typeof MutationEvent!="undefined"&&P.attrChange===MutationEvent.ADDITION||(Q=P.prevValue),M(V,function($){if($.attributes&&(!$.attributeFilter||!$.attributeFilter.length||$.attributeFilter.indexOf(U)!==-1||$.attributeFilter.indexOf(R)!==-1))return $.attributeOldValue?k(Q):J});break;case"DOMCharacterDataModified":var J=D("characterData",V=P.target);Q=P.prevValue,M(V,function($){if($.characterData)return $.characterDataOldValue?k(Q):J});break;case"DOMNodeRemoved":this.addTransientObserver(P.target);case"DOMNodeInserted":V=P.relatedNode;var ve,le,ee=P.target;P.type==="DOMNodeInserted"?(ve=[ee],le=[]):(ve=[],le=[ee]);var he=ee.previousSibling,ue=ee.nextSibling;(J=D("childList",V)).addedNodes=ve,J.removedNodes=le,J.previousSibling=he,J.nextSibling=ue,M(V,function($){if($.childList)return J})}E=T=void 0}},e||(e=b),s.exports=e},7588:function(s){var e=function(t){var r,o=Object.prototype,a=o.hasOwnProperty,n=typeof Symbol=="function"?Symbol:{},l=n.iterator||"@@iterator",g=n.asyncIterator||"@@asyncIterator",_=n.toStringTag||"@@toStringTag";function v($,K,ne){return Object.defineProperty($,K,{value:ne,enumerable:!0,configurable:!0,writable:!0}),$[K]}try{v({},"")}catch{v=function(K,ne,fe){return K[ne]=fe}}function y($,K,ne,fe){var se=K&&K.prototype instanceof D?K:D,Y=Object.create(se.prototype),ce=new ee(fe||[]);return Y._invoke=function(ge,q,te){var Me=E;return function(Pe,Ue){if(Me===w)throw new Error("Generator is already running");if(Me===b){if(Pe==="throw")throw Ue;return ue()}for(te.method=Pe,te.arg=Ue;;){var Le=te.delegate;if(Le){var $e=J(Le,te);if($e){if($e===C)continue;return $e}}if(te.method==="next")te.sent=te._sent=te.arg;else if(te.method==="throw"){if(Me===E)throw Me=b,te.arg;te.dispatchException(te.arg)}else te.method==="return"&&te.abrupt("return",te.arg);Me=w;var We=M(ge,q,te);if(We.type==="normal"){if(Me=te.done?b:T,We.arg===C)continue;return{value:We.arg,done:te.done}}We.type==="throw"&&(Me=b,te.method="throw",te.arg=We.arg)}}}($,ne,ce),Y}function M($,K,ne){try{return{type:"normal",arg:$.call(K,ne)}}catch(fe){return{type:"throw",arg:fe}}}t.wrap=y;var E="suspendedStart",T="suspendedYield",w="executing",b="completed",C={};function D(){}function k(){}function z(){}var B={};v(B,l,function(){return this});var P=Object.getPrototypeOf,U=P&&P(P(he([])));U&&U!==o&&a.call(U,l)&&(B=U);var R=z.prototype=D.prototype=Object.create(B);function V($){["next","throw","return"].forEach(function(K){v($,K,function(ne){return this._invoke(K,ne)})})}function Q($,K){function ne(se,Y,ce,ge){var q=M($[se],$,Y);if(q.type!=="throw"){var te=q.arg,Me=te.value;return Me&&typeof Me=="object"&&a.call(Me,"__await")?K.resolve(Me.__await).then(function(Pe){ne("next",Pe,ce,ge)},function(Pe){ne("throw",Pe,ce,ge)}):K.resolve(Me).then(function(Pe){te.value=Pe,ce(te)},function(Pe){return ne("throw",Pe,ce,ge)})}ge(q.arg)}var fe;this._invoke=function(se,Y){function ce(){return new K(function(ge,q){ne(se,Y,ge,q)})}return fe=fe?fe.then(ce,ce):ce()}}function J($,K){var ne=$.iterator[K.method];if(ne===r){if(K.delegate=null,K.method==="throw"){if($.iterator.return&&(K.method="return",K.arg=r,J($,K),K.method==="throw"))return C;K.method="throw",K.arg=new TypeError("The iterator does not provide a 'throw' method")}return C}var fe=M(ne,$.iterator,K.arg);if(fe.type==="throw")return K.method="throw",K.arg=fe.arg,K.delegate=null,C;var se=fe.arg;return se?se.done?(K[$.resultName]=se.value,K.next=$.nextLoc,K.method!=="return"&&(K.method="next",K.arg=r),K.delegate=null,C):se:(K.method="throw",K.arg=new TypeError("iterator result is not an object"),K.delegate=null,C)}function ve($){var K={tryLoc:$[0]};1 in $&&(K.catchLoc=$[1]),2 in $&&(K.finallyLoc=$[2],K.afterLoc=$[3]),this.tryEntries.push(K)}function le($){var K=$.completion||{};K.type="normal",delete K.arg,$.completion=K}function ee($){this.tryEntries=[{tryLoc:"root"}],$.forEach(ve,this),this.reset(!0)}function he($){if($){var K=$[l];if(K)return K.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var ne=-1,fe=function se(){for(;++ne<$.length;)if(a.call($,ne))return se.value=$[ne],se.done=!1,se;return se.value=r,se.done=!0,se};return fe.next=fe}}return{next:ue}}function ue(){return{value:r,done:!0}}return k.prototype=z,v(R,"constructor",z),v(z,"constructor",k),k.displayName=v(z,_,"GeneratorFunction"),t.isGeneratorFunction=function($){var K=typeof $=="function"&&$.constructor;return!!K&&(K===k||(K.displayName||K.name)==="GeneratorFunction")},t.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,z):($.__proto__=z,v($,_,"GeneratorFunction")),$.prototype=Object.create(R),$},t.awrap=function($){return{__await:$}},V(Q.prototype),v(Q.prototype,g,function(){return this}),t.AsyncIterator=Q,t.async=function($,K,ne,fe,se){se===void 0&&(se=Promise);var Y=new Q(y($,K,ne,fe),se);return t.isGeneratorFunction(K)?Y:Y.next().then(function(ce){return ce.done?ce.value:Y.next()})},V(R),v(R,_,"Generator"),v(R,l,function(){return this}),v(R,"toString",function(){return"[object Generator]"}),t.keys=function($){var K=[];for(var ne in $)K.push(ne);return K.reverse(),function fe(){for(;K.length;){var se=K.pop();if(se in $)return fe.value=se,fe.done=!1,fe}return fe.done=!0,fe}},t.values=he,ee.prototype={constructor:ee,reset:function($){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(le),!$)for(var K in this)K.charAt(0)==="t"&&a.call(this,K)&&!isNaN(+K.slice(1))&&(this[K]=r)},stop:function(){this.done=!0;var $=this.tryEntries[0].completion;if($.type==="throw")throw $.arg;return this.rval},dispatchException:function($){if(this.done)throw $;var K=this;function ne(q,te){return Y.type="throw",Y.arg=$,K.next=q,te&&(K.method="next",K.arg=r),!!te}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var se=this.tryEntries[fe],Y=se.completion;if(se.tryLoc==="root")return ne("end");if(se.tryLoc<=this.prev){var ce=a.call(se,"catchLoc"),ge=a.call(se,"finallyLoc");if(ce&&ge){if(this.prev<se.catchLoc)return ne(se.catchLoc,!0);if(this.prev<se.finallyLoc)return ne(se.finallyLoc)}else if(ce){if(this.prev<se.catchLoc)return ne(se.catchLoc,!0)}else{if(!ge)throw new Error("try statement without catch or finally");if(this.prev<se.finallyLoc)return ne(se.finallyLoc)}}}},abrupt:function($,K){for(var ne=this.tryEntries.length-1;ne>=0;--ne){var fe=this.tryEntries[ne];if(fe.tryLoc<=this.prev&&a.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var se=fe;break}}se&&($==="break"||$==="continue")&&se.tryLoc<=K&&K<=se.finallyLoc&&(se=null);var Y=se?se.completion:{};return Y.type=$,Y.arg=K,se?(this.method="next",this.next=se.finallyLoc,C):this.complete(Y)},complete:function($,K){if($.type==="throw")throw $.arg;return $.type==="break"||$.type==="continue"?this.next=$.arg:$.type==="return"?(this.rval=this.arg=$.arg,this.method="return",this.next="end"):$.type==="normal"&&K&&(this.next=K),C},finish:function($){for(var K=this.tryEntries.length-1;K>=0;--K){var ne=this.tryEntries[K];if(ne.finallyLoc===$)return this.complete(ne.completion,ne.afterLoc),le(ne),C}},catch:function($){for(var K=this.tryEntries.length-1;K>=0;--K){var ne=this.tryEntries[K];if(ne.tryLoc===$){var fe=ne.completion;if(fe.type==="throw"){var se=fe.arg;le(ne)}return se}}throw new Error("illegal catch attempt")},delegateYield:function($,K,ne){return this.delegate={iterator:he($),resultName:K,nextLoc:ne},this.method==="next"&&(this.arg=r),C}},t}(s.exports);try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},6958:function(s,e,t){t.d(e,{Z:function(){return fe}});var r=t(4296),o=t(6464),a=t(6881),n=t(2942),l=t(7003),g=t(3379),_=t.n(g),v=t(7795),y=t.n(v),M=t(569),E=t.n(M),T=t(3565),w=t.n(T),b=t(9216),C=t.n(b),D=t(4589),k=t.n(D),z=t(9746),B={};z.Z&&z.Z.locals&&(B.locals=z.Z.locals);var P,U=0,R={};R.styleTagTransform=k(),R.setAttributes=w(),R.insert=E().bind(null,"head"),R.domAPI=y(),R.insertStyleElement=C(),B.use=function(se){return R.options=se||{},U++||(P=_()(z.Z,R)),B},B.unuse=function(){U>0&&!--U&&(P(),P=null)};var V=B;function Q(se){var Y,ce;return{c:function(){Y=(0,n.bi5)("svg"),ce=(0,n.bi5)("path"),(0,n.Ljt)(ce,"d","M599.99999 832.000004h47.999999a24 24 0 0 0 23.999999-24V376.000013a24 24 0 0 0-23.999999-24h-47.999999a24 24 0 0 0-24 24v431.999991a24 24 0 0 0 24 24zM927.999983 160.000017h-164.819997l-67.999998-113.399998A95.999998 95.999998 0 0 0 612.819989 0.00002H411.179993a95.999998 95.999998 0 0 0-82.319998 46.599999L260.819996 160.000017H95.999999A31.999999 31.999999 0 0 0 64 192.000016v32a31.999999 31.999999 0 0 0 31.999999 31.999999h32v671.999987a95.999998 95.999998 0 0 0 95.999998 95.999998h575.999989a95.999998 95.999998 0 0 0 95.999998-95.999998V256.000015h31.999999a31.999999 31.999999 0 0 0 32-31.999999V192.000016a31.999999 31.999999 0 0 0-32-31.999999zM407.679993 101.820018A12 12 0 0 1 417.999993 96.000018h187.999996a12 12 0 0 1 10.3 5.82L651.219989 160.000017H372.779994zM799.999986 928.000002H223.999997V256.000015h575.999989z m-423.999992-95.999998h47.999999a24 24 0 0 0 24-24V376.000013a24 24 0 0 0-24-24h-47.999999a24 24 0 0 0-24 24v431.999991a24 24 0 0 0 24 24z"),(0,n.Ljt)(Y,"class","vc-icon-delete"),(0,n.Ljt)(Y,"viewBox","0 0 1024 1024"),(0,n.Ljt)(Y,"width","200"),(0,n.Ljt)(Y,"height","200")},m:function(ge,q){(0,n.$Tr)(ge,Y,q),(0,n.R3I)(Y,ce)},d:function(ge){ge&&(0,n.ogt)(Y)}}}function J(se){var Y,ce,ge;return{c:function(){Y=(0,n.bi5)("svg"),ce=(0,n.bi5)("path"),ge=(0,n.bi5)("path"),(0,n.Ljt)(ce,"d","M874.154197 150.116875A511.970373 511.970373 0 1 0 1023.993986 511.991687a511.927744 511.927744 0 0 0-149.839789-361.874812z m-75.324866 648.382129A405.398688 405.398688 0 1 1 917.422301 511.991687a405.313431 405.313431 0 0 1-118.59297 286.507317z"),(0,n.Ljt)(ge,"d","M725.039096 299.274605a54.351559 54.351559 0 0 0-76.731613 0l-135.431297 135.431297L377.274375 299.274605a54.436817 54.436817 0 0 0-76.944756 76.987385l135.388668 135.431297-135.388668 135.473925a54.436817 54.436817 0 0 0 76.944756 76.987385l135.388668-135.431297 135.431297 135.473926a54.436817 54.436817 0 0 0 76.731613-76.987385l-135.388668-135.473926 135.388668-135.431296a54.479445 54.479445 0 0 0 0.213143-77.030014z"),(0,n.Ljt)(Y,"viewBox","0 0 1024 1024"),(0,n.Ljt)(Y,"width","200"),(0,n.Ljt)(Y,"height","200")},m:function(q,te){(0,n.$Tr)(q,Y,te),(0,n.R3I)(Y,ce),(0,n.R3I)(Y,ge)},d:function(q){q&&(0,n.ogt)(Y)}}}function ve(se){var Y,ce;return{c:function(){Y=(0,n.bi5)("svg"),ce=(0,n.bi5)("path"),(0,n.Ljt)(ce,"fill-rule","evenodd"),(0,n.Ljt)(ce,"d","M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"),(0,n.Ljt)(Y,"class","vc-icon-copy"),(0,n.Ljt)(Y,"viewBox","0 0 16 16")},m:function(ge,q){(0,n.$Tr)(ge,Y,q),(0,n.R3I)(Y,ce)},d:function(ge){ge&&(0,n.ogt)(Y)}}}function le(se){var Y,ce;return{c:function(){Y=(0,n.bi5)("svg"),ce=(0,n.bi5)("path"),(0,n.Ljt)(ce,"fill-rule","evenodd"),(0,n.Ljt)(ce,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),(0,n.Ljt)(Y,"class","vc-icon-suc"),(0,n.Ljt)(Y,"viewBox","0 0 16 16")},m:function(ge,q){(0,n.$Tr)(ge,Y,q),(0,n.R3I)(Y,ce)},d:function(ge){ge&&(0,n.ogt)(Y)}}}function ee(se){var Y,ce,ge;return{c:function(){Y=(0,n.bi5)("svg"),ce=(0,n.bi5)("path"),ge=(0,n.bi5)("path"),(0,n.Ljt)(ce,"d","M776.533333 1024 162.133333 1024C72.533333 1024 0 951.466667 0 861.866667L0 247.466667C0 157.866667 72.533333 85.333333 162.133333 85.333333L469.333333 85.333333c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667L162.133333 170.666667C119.466667 170.666667 85.333333 204.8 85.333333 247.466667l0 610.133333c0 42.666667 34.133333 76.8 76.8 76.8l610.133333 0c42.666667 0 76.8-34.133333 76.8-76.8L849.066667 554.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 307.2C938.666667 951.466667 866.133333 1024 776.533333 1024z"),(0,n.Ljt)(ge,"d","M256 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8C217.6 789.333333 213.333333 772.266667 213.333333 759.466667l42.666667-213.333333c0-8.533333 4.266667-17.066667 12.8-21.333333l512-512c17.066667-17.066667 42.666667-17.066667 59.733333 0l170.666667 170.666667c17.066667 17.066667 17.066667 42.666667 0 59.733333l-512 512c-4.266667 4.266667-12.8 8.533333-21.333333 12.8l-213.333333 42.666667C260.266667 810.666667 260.266667 810.666667 256 810.666667zM337.066667 576l-25.6 136.533333 136.533333-25.6L921.6 213.333333 810.666667 102.4 337.066667 576z"),(0,n.Ljt)(Y,"class","vc-icon-edit"),(0,n.Ljt)(Y,"viewBox","0 0 1024 1024"),(0,n.Ljt)(Y,"width","200"),(0,n.Ljt)(Y,"height","200")},m:function(q,te){(0,n.$Tr)(q,Y,te),(0,n.R3I)(Y,ce),(0,n.R3I)(Y,ge)},d:function(q){q&&(0,n.ogt)(Y)}}}function he(se){var Y,ce;return{c:function(){Y=(0,n.bi5)("svg"),ce=(0,n.bi5)("path"),(0,n.Ljt)(ce,"d","M581.338005 987.646578c-2.867097 4.095853-4.573702 8.669555-8.191705 12.287558a83.214071 83.214071 0 0 1-60.959939 24.029001 83.214071 83.214071 0 0 1-61.028203-24.029001c-3.618003-3.618003-5.324608-8.191705-8.123441-12.15103L24.370323 569.050448a83.418864 83.418864 0 0 1 117.892289-117.89229l369.923749 369.92375L1308.829682 24.438587A83.418864 83.418864 0 0 1 1426.721971 142.194348L581.338005 987.646578z"),(0,n.Ljt)(Y,"class","vc-icon-don"),(0,n.Ljt)(Y,"viewBox","0 0 1501 1024"),(0,n.Ljt)(Y,"width","200"),(0,n.Ljt)(Y,"height","200")},m:function(ge,q){(0,n.$Tr)(ge,Y,q),(0,n.R3I)(Y,ce)},d:function(ge){ge&&(0,n.ogt)(Y)}}}function ue(se){var Y,ce;return{c:function(){Y=(0,n.bi5)("svg"),ce=(0,n.bi5)("path"),(0,n.Ljt)(ce,"d","M894.976 574.464q0 78.848-29.696 148.48t-81.408 123.392-121.856 88.064-151.04 41.472q-5.12 1.024-9.216 1.536t-9.216 0.512l-177.152 0q-17.408 0-34.304-6.144t-30.208-16.896-22.016-25.088-8.704-29.696 8.192-29.696 21.504-24.576 29.696-16.384 33.792-6.144l158.72 1.024q54.272 0 102.4-19.968t83.968-53.76 56.32-79.36 20.48-97.792q0-49.152-18.432-92.16t-50.688-76.8-75.264-54.784-93.184-26.112q-2.048 0-2.56 0.512t-2.56 0.512l-162.816 0 0 80.896q0 17.408-13.824 25.6t-44.544-10.24q-8.192-5.12-26.112-17.92t-41.984-30.208-50.688-36.864l-51.2-38.912q-15.36-12.288-26.624-22.016t-11.264-24.064q0-12.288 12.8-25.6t29.184-26.624q18.432-15.36 44.032-35.84t50.688-39.936 45.056-35.328 28.16-22.016q24.576-17.408 39.936-7.168t16.384 30.72l0 81.92 162.816 0q5.12 0 10.752 1.024t10.752 2.048q79.872 8.192 149.504 41.984t121.344 87.552 80.896 123.392 29.184 147.456z"),(0,n.Ljt)(Y,"class","vc-icon-cancel"),(0,n.Ljt)(Y,"viewBox","0 0 1024 1024"),(0,n.Ljt)(Y,"width","200"),(0,n.Ljt)(Y,"height","200")},m:function(ge,q){(0,n.$Tr)(ge,Y,q),(0,n.R3I)(Y,ce)},d:function(ge){ge&&(0,n.ogt)(Y)}}}function $(se){var Y,ce,ge,q,te,Me,Pe,Ue,Le,$e=se[0]==="delete"&&Q(),We=se[0]==="clear"&&J(),ze=se[0]==="copy"&&ve(),et=se[0]==="success"&&le(),Je=se[0]==="edit"&&ee(),Ze=se[0]==="done"&&he(),tt=se[0]==="cancel"&&ue();return{c:function(){Y=(0,n.bGB)("i"),$e&&$e.c(),ce=(0,n.DhX)(),We&&We.c(),ge=(0,n.DhX)(),ze&&ze.c(),q=(0,n.DhX)(),et&&et.c(),te=(0,n.DhX)(),Je&&Je.c(),Me=(0,n.DhX)(),Ze&&Ze.c(),Pe=(0,n.DhX)(),tt&&tt.c(),(0,n.Ljt)(Y,"class","vc-icon")},m:function(nt,it){(0,n.$Tr)(nt,Y,it),$e&&$e.m(Y,null),(0,n.R3I)(Y,ce),We&&We.m(Y,null),(0,n.R3I)(Y,ge),ze&&ze.m(Y,null),(0,n.R3I)(Y,q),et&&et.m(Y,null),(0,n.R3I)(Y,te),Je&&Je.m(Y,null),(0,n.R3I)(Y,Me),Ze&&Ze.m(Y,null),(0,n.R3I)(Y,Pe),tt&&tt.m(Y,null),Ue||(Le=(0,n.oLt)(Y,"click",se[1]),Ue=!0)},p:function(nt,it){it[0],nt[0]==="delete"?$e||(($e=Q()).c(),$e.m(Y,ce)):$e&&($e.d(1),$e=null),nt[0]==="clear"?We||((We=J()).c(),We.m(Y,ge)):We&&(We.d(1),We=null),nt[0]==="copy"?ze||((ze=ve()).c(),ze.m(Y,q)):ze&&(ze.d(1),ze=null),nt[0]==="success"?et||((et=le()).c(),et.m(Y,te)):et&&(et.d(1),et=null),nt[0]==="edit"?Je||((Je=ee()).c(),Je.m(Y,Me)):Je&&(Je.d(1),Je=null),nt[0]==="done"?Ze||((Ze=he()).c(),Ze.m(Y,Pe)):Ze&&(Ze.d(1),Ze=null),nt[0]==="cancel"?tt||((tt=ue()).c(),tt.m(Y,null)):tt&&(tt.d(1),tt=null)},i:n.ZTd,o:n.ZTd,d:function(nt){nt&&(0,n.ogt)(Y),$e&&$e.d(),We&&We.d(),ze&&ze.d(),et&&et.d(),Je&&Je.d(),Ze&&Ze.d(),tt&&tt.d(),Ue=!1,Le()}}}function K(se,Y,ce){var ge=Y.name;return(0,l.H3)(function(){V.use()}),(0,l.ev)(function(){V.unuse()}),se.$$set=function(q){"name"in q&&ce(0,ge=q.name)},[ge,function(q){n.cKT.call(this,se,q)}]}var ne=function(se){function Y(ce){var ge;return ge=se.call(this)||this,(0,n.S1n)((0,o.Z)(ge),ce,K,$,n.N8,{name:0}),ge}return(0,a.Z)(Y,se),(0,r.Z)(Y,[{key:"name",get:function(){return this.$$.ctx[0]},set:function(ce){this.$$set({name:ce}),(0,n.yl1)()}}]),Y}(n.f_C),fe=ne},3903:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6464),_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6881),svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2942),svelte__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7003),_component_icon_svelte__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6958),_logTool__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8665),_log_model__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5629),_logCommand_less__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3411);function get_each_context(s,e,t){var r=s.slice();return r[28]=e[t],r}function create_if_block_2(s){var e,t,r;return{c:function(){(e=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("li")).textContent="Close",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(e,"class","vc-cmd-prompted-hide")},m:function(o,a){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(o,e,a),t||(r=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(e,"click",s[5]),t=!0)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,d:function(o){o&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(e),t=!1,r()}}}function create_else_block(s){var e;return{c:function(){(e=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("li")).textContent="No Prompted"},m:function(t,r){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(t,e,r)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,d:function(t){t&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(e)}}}function create_each_block(s){var e,t,r,o,a=s[28].text+"";function n(){return s[14](s[28])}return{c:function(){e=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("li"),t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.fLW)(a)},m:function(l,g){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(l,e,g),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(e,t),r||(o=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(e,"click",n),r=!0)},p:function(l,g){s=l,8&g&&a!==(a=s[28].text+"")&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.rTO)(t,a)},d:function(l){l&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(e),r=!1,o()}}}function create_if_block_1(s){var e,t,r,o,a;return t=new _component_icon_svelte__WEBPACK_IMPORTED_MODULE_2__.Z({props:{name:"clear"}}),{c:function(){e=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.YCL)(t.$$.fragment),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(e,"class","vc-cmd-clear-btn")},m:function(n,l){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(n,e,l),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.yef)(t,e,null),r=!0,o||(a=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(e,"click",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(s[15])),o=!0)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,i:function(n){r||((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(t.$$.fragment,n),r=!0)},o:function(n){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(t.$$.fragment,n),r=!1},d:function(n){n&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(e),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.vpE)(t),o=!1,a()}}}function create_if_block(s){var e,t,r,o,a;return t=new _component_icon_svelte__WEBPACK_IMPORTED_MODULE_2__.Z({props:{name:"clear"}}),{c:function(){e=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.YCL)(t.$$.fragment),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(e,"class","vc-cmd-clear-btn")},m:function(n,l){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(n,e,l),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.yef)(t,e,null),r=!0,o||(a=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(e,"click",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(s[18])),o=!0)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ZTd,i:function(n){r||((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(t.$$.fragment,n),r=!0)},o:function(n){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(t.$$.fragment,n),r=!1},d:function(n){n&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(e),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.vpE)(t),o=!1,a()}}}function create_fragment(s){for(var e,t,r,o,a,n,l,g,_,v,y,M,E,T,w,b,C,D,k,z,B,P=s[3].length>0&&create_if_block_2(s),U=s[3],R=[],V=0;V<U.length;V+=1)R[V]=create_each_block(get_each_context(s,U,V));var Q=null;U.length||(Q=create_else_block());var J=s[1].length>0&&create_if_block_1(s),ve=s[4].length>0&&create_if_block(s);return{c:function(){e=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("form"),(t=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("button")).textContent="OK",r=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),o=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("ul"),P&&P.c(),a=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)();for(var le=0;le<R.length;le+=1)R[le].c();Q&&Q.c(),n=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),l=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),J&&J.c(),g=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),_=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("textarea"),v=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),y=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("form"),(M=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("button")).textContent="Filter",E=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),T=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("ul"),w=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),b=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("div"),ve&&ve.c(),C=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.DhX)(),D=(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bGB)("textarea"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(t,"class","vc-cmd-btn"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(t,"type","submit"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(o,"class","vc-cmd-prompted"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(o,"style",s[2]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(_,"class","vc-cmd-input"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(_,"placeholder","command..."),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(l,"class","vc-cmd-input-wrap"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(e,"class","vc-cmd"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(M,"class","vc-cmd-btn"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(M,"type","submit"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(T,"class","vc-cmd-prompted"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(D,"class","vc-cmd-input"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(D,"placeholder","filter..."),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(b,"class","vc-cmd-input-wrap"),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(y,"class","vc-cmd vc-filter")},m:function(le,ee){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(le,e,ee),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(e,t),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(e,r),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(e,o),P&&P.m(o,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(o,a);for(var he=0;he<R.length;he+=1)R[he].m(o,null);Q&&Q.m(o,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(e,n),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(e,l),J&&J.m(l,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(l,g),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(l,_),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(_,s[1]),s[17](_),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(le,v,ee),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.$Tr)(le,y,ee),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(y,M),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(y,E),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(y,T),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(y,w),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(y,b),ve&&ve.m(b,null),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(b,C),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R3I)(b,D),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(D,s[4]),k=!0,z||(B=[(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(_,"input",s[16]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(_,"keydown",s[10]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(_,"keyup",s[11]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(_,"focus",s[8]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(_,"blur",s[9]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(e,"submit",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(s[12])),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(D,"input",s[19]),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.oLt)(y,"submit",(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.AT7)(s[13]))],z=!0)},p:function(le,ee){var he=ee[0];if(le[3].length>0?P?P.p(le,he):((P=create_if_block_2(le)).c(),P.m(o,a)):P&&(P.d(1),P=null),136&he){var ue;for(U=le[3],ue=0;ue<U.length;ue+=1){var $=get_each_context(le,U,ue);R[ue]?R[ue].p($,he):(R[ue]=create_each_block($),R[ue].c(),R[ue].m(o,null))}for(;ue<R.length;ue+=1)R[ue].d(1);R.length=U.length,!U.length&&Q?Q.p(le,he):U.length?Q&&(Q.d(1),Q=null):((Q=create_else_block()).c(),Q.m(o,null))}(!k||4&he)&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ljt)(o,"style",le[2]),le[1].length>0?J?(J.p(le,he),2&he&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(J,1)):((J=create_if_block_1(le)).c(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(J,1),J.m(l,g)):J&&((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.dvw)(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(J,1,1,function(){J=null}),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.gbL)()),2&he&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(_,le[1]),le[4].length>0?ve?(ve.p(le,he),16&he&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(ve,1)):((ve=create_if_block(le)).c(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(ve,1),ve.m(b,C)):ve&&((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.dvw)(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(ve,1,1,function(){ve=null}),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.gbL)()),16&he&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.BmG)(D,le[4])},i:function(le){k||((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(J),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Ui)(ve),k=!0)},o:function(le){(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(J),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.etI)(ve),k=!1},d:function(le){le&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(e),P&&P.d(),(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.RMB)(R,le),Q&&Q.d(),J&&J.d(),s[17](null),le&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(v),le&&(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ogt)(y),ve&&ve.d(),z=!1,(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.j7q)(B)}}}function instance($$self,$$props,$$invalidate){var module=_log_model__WEBPACK_IMPORTED_MODULE_3__.W.getSingleton(_log_model__WEBPACK_IMPORTED_MODULE_3__.W,"VConsoleLogModel"),cachedObjKeys={},dispatch=(0,svelte__WEBPACK_IMPORTED_MODULE_1__.x)(),cmdElement,cmdValue="",promptedStyle="",promptedList=[],filterValue="";(0,svelte__WEBPACK_IMPORTED_MODULE_1__.H3)(function(){_logCommand_less__WEBPACK_IMPORTED_MODULE_4__.Z.use()}),(0,svelte__WEBPACK_IMPORTED_MODULE_1__.ev)(function(){_logCommand_less__WEBPACK_IMPORTED_MODULE_4__.Z.unuse()});var evalCommand=function(s){module.evalCommand(s)},moveCursorToPos=function(s,e){s.setSelectionRange&&setTimeout(function(){s.setSelectionRange(e,e)},1)},clearPromptedList=function(){$$invalidate(2,promptedStyle="display: none;"),$$invalidate(3,promptedList=[])},updatePromptedList=function updatePromptedList(identifier){if(cmdValue!==""){identifier||(identifier=(0,_logTool__WEBPACK_IMPORTED_MODULE_5__.oj)(cmdValue));var objName="window",keyName=cmdValue;if(identifier.front.text!=="."&&identifier.front.text!=="["||(objName=identifier.front.before,keyName=identifier.back.text!==""?identifier.back.before:identifier.front.after),keyName=keyName.replace(/(^['"]+)|(['"']+$)/g,""),!cachedObjKeys[objName])try{cachedObjKeys[objName]=Object.getOwnPropertyNames(eval("("+objName+")")).sort()}catch(s){}try{if(cachedObjKeys[objName])for(var i=0;i<cachedObjKeys[objName].length&&!(promptedList.length>=100);i++){var key=String(cachedObjKeys[objName][i]),keyPattern=new RegExp("^"+keyName,"i");if(keyPattern.test(key)){var completeCmd=objName;identifier.front.text==="."||identifier.front.text===""?completeCmd+="."+key:identifier.front.text==="["&&(completeCmd+="['"+key+"']"),promptedList.push({text:key,value:completeCmd})}}}catch(s){}if(promptedList.length>0){var m=Math.min(200,31*(promptedList.length+1));$$invalidate(2,promptedStyle="display: block; height: "+m+"px; margin-top: "+(-m-2)+"px;"),$$invalidate(3,promptedList)}else clearPromptedList()}else clearPromptedList()},autoCompleteBrackets=function(s,e){if(!(e===8||e===46)&&s.front.after==="")switch(s.front.text){case"[":return $$invalidate(1,cmdValue+="]"),void moveCursorToPos(cmdElement,cmdValue.length-1);case"(":return $$invalidate(1,cmdValue+=")"),void moveCursorToPos(cmdElement,cmdValue.length-1);case"{":return $$invalidate(1,cmdValue+="}"),void moveCursorToPos(cmdElement,cmdValue.length-1)}},dispatchFilterEvent=function(){dispatch("filterText",{filterText:filterValue})},onTapClearText=function(s){s==="cmd"?($$invalidate(1,cmdValue=""),clearPromptedList()):s==="filter"&&($$invalidate(4,filterValue=""),dispatchFilterEvent())},onTapPromptedItem=function onTapPromptedItem(item){var type="";try{type=eval("typeof "+item.value)}catch(s){}$$invalidate(1,cmdValue=item.value+(type==="function"?"()":"")),clearPromptedList()},onCmdFocus=function(){updatePromptedList()},onCmdBlur=function(){},onCmdKeyDown=function(s){s.keyCode===13&&(s.preventDefault(),onCmdSubmit())},onCmdKeyUp=function(s){$$invalidate(3,promptedList=[]);var e=(0,_logTool__WEBPACK_IMPORTED_MODULE_5__.oj)(s.target.value);autoCompleteBrackets(e,s.keyCode),updatePromptedList(e)},onCmdSubmit=function(){cmdValue!==""&&evalCommand(cmdValue),clearPromptedList()},onFilterSubmit=function(s){dispatchFilterEvent()},click_handler=function(s){return onTapPromptedItem(s)},click_handler_1=function(){return onTapClearText("cmd")};function textarea0_input_handler(){cmdValue=this.value,$$invalidate(1,cmdValue)}function textarea0_binding(s){svelte_internal__WEBPACK_IMPORTED_MODULE_0__.VnY[s?"unshift":"push"](function(){$$invalidate(0,cmdElement=s)})}var click_handler_2=function(){return onTapClearText("filter")};function textarea1_input_handler(){filterValue=this.value,$$invalidate(4,filterValue)}return[cmdElement,cmdValue,promptedStyle,promptedList,filterValue,clearPromptedList,onTapClearText,onTapPromptedItem,onCmdFocus,onCmdBlur,onCmdKeyDown,onCmdKeyUp,onCmdSubmit,onFilterSubmit,click_handler,click_handler_1,textarea0_input_handler,textarea0_binding,click_handler_2,textarea1_input_handler]}var LogCommand=function(s){function e(t){var r;return r=s.call(this)||this,(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.S1n)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.Z)(r),t,instance,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N8,{}),r}return(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__.Z)(e,s),e}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.f_C);__webpack_exports__.Z=LogCommand},4687:function(s,e,t){t.d(e,{x:function(){return o}});var r=t(3313),o=function(){var a=(0,r.fZ)({updateTime:0}),n=a.subscribe,l=a.set,g=a.update;return{subscribe:n,set:l,update:g,updateTime:function(){g(function(_){return _.updateTime=Date.now(),_})}}}()},643:function(s,e,t){t.d(e,{N:function(){return r}});var r=function(){function o(){this._onDataUpdateCallbacks=[]}return o.getSingleton=function(a,n){return n||(n=a.toString()),o.singleton[n]||(o.singleton[n]=new a),o.singleton[n]},o}();r.singleton={}},5103:function(s,e,t){function r(q){return Object.prototype.toString.call(q)==="[object Number]"}function o(q){return typeof q=="bigint"}function a(q){return typeof q=="string"}function n(q){return Object.prototype.toString.call(q)==="[object Array]"}function l(q){return typeof q=="boolean"}function g(q){return q===void 0}function _(q){return q===null}function v(q){return typeof q=="symbol"}function y(q){return!(Object.prototype.toString.call(q)!=="[object Object]"&&(r(q)||o(q)||a(q)||l(q)||n(q)||_(q)||M(q)||g(q)||v(q)))}function M(q){return typeof q=="function"}function E(q){return typeof HTMLElement=="object"?q instanceof HTMLElement:q&&typeof q=="object"&&q!==null&&q.nodeType===1&&typeof q.nodeName=="string"}function T(q){var te=Object.prototype.toString.call(q);return te==="[object Window]"||te==="[object DOMWindow]"||te==="[object global]"}function w(q){return q!=null&&typeof q!="string"&&typeof q!="boolean"&&typeof q!="number"&&typeof q!="function"&&typeof q!="symbol"&&typeof q!="bigint"&&typeof Symbol!="undefined"&&typeof q[Symbol.iterator]=="function"}function b(q){return Object.prototype.toString.call(q).replace(/\[object (.*)\]/,"$1")}t.d(e,{Ak:function(){return P},C4:function(){return o},DV:function(){return D},FJ:function(){return T},Ft:function(){return _},HD:function(){return a},H_:function(){return ce},KL:function(){return le},Kn:function(){return y},MH:function(){return $},PO:function(){return k},QI:function(){return Y},QK:function(){return K},TW:function(){return w},_D:function(){return ne},cF:function(){return se},hZ:function(){return ve},hj:function(){return r},id:function(){return ee},jn:function(){return l},kJ:function(){return n},kK:function(){return E},mf:function(){return M},o8:function(){return g},po:function(){return fe},qr:function(){return ue},qt:function(){return ge},rE:function(){return V},yk:function(){return v},zl:function(){return b}});var C=/(function|class) ([^ \{\()}]{1,})[\(| ]/;function D(q){var te;if(q==null)return"";var Me=C.exec((q==null||(te=q.constructor)==null?void 0:te.toString())||"");return Me&&Me.length>1?Me[2]:""}function k(q){var te,Me=Object.prototype.hasOwnProperty;if(!q||typeof q!="object"||q.nodeType||T(q))return!1;try{if(q.constructor&&!Me.call(q,"constructor")&&!Me.call(q.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}for(te in q);return te===void 0||Me.call(q,te)}var z=/[<>&" ]/g,B=function(q){return{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"," ":"&nbsp;"}[q]};function P(q){return typeof q!="string"&&typeof q!="number"?q:String(q).replace(z,B)}var U=/[\n\t]/g,R=function(q){return{"\n":"\\n","	":"\\t"}[q]};function V(q){return typeof q!="string"?q:String(q).replace(U,R)}var Q=function(q,te){te===void 0&&(te=0);var Me="";return a(q)?(te>0&&(q=ee(q,te)),Me+='"'+V(q)+'"'):v(q)?Me+=String(q).replace(/^Symbol\((.*)\)$/i,'Symbol("$1")'):M(q)?Me+=(q.name||"function")+"()":o(q)?Me+=String(q)+"n":Me+=String(q),Me},J=function q(te,Me,Pe){if(Pe===void 0&&(Pe=0),y(te)||n(te))if(Me.circularFinder(te)){if(n(te))Me.ret+="(Circular Array)";else if(y){var Ue;Me.ret+="(Circular "+(((Ue=te.constructor)==null?void 0:Ue.name)||"Object")+")"}}else{var Le="",$e="";if(Me.pretty){for(var We=0;We<=Pe;We++)Le+="  ";$e=`
`}var ze="{",et="}";n(te)&&(ze="[",et="]"),Me.ret+=ze+$e;for(var Je=$(te),Ze=0;Ze<Je.length;Ze++){var tt=Je[Ze];Me.ret+=Le;try{n(te)||(y(tt)||n(tt)||v(tt)?Me.ret+=Object.prototype.toString.call(tt):Me.ret+=tt,Me.ret+=": ")}catch{continue}try{var nt=te[tt];if(n(nt))Me.maxDepth>-1&&Pe>=Me.maxDepth?Me.ret+="Array("+nt.length+")":q(nt,Me,Pe+1);else if(y(nt)){var it;Me.maxDepth>-1&&Pe>=Me.maxDepth?Me.ret+=(((it=nt.constructor)==null?void 0:it.name)||"Object")+" {}":q(nt,Me,Pe+1)}else Me.ret+=Q(nt,Me.keyMaxLen)}catch{Me.ret+="(...)"}if(Me.keyMaxLen>0&&Me.ret.length>=10*Me.keyMaxLen){Me.ret+=", (...)";break}Ze<Je.length-1&&(Me.ret+=", "),Me.ret+=$e}Me.ret+=Le.substring(0,Le.length-2)+et}else Me.ret+=Q(te,Me.keyMaxLen)};function ve(q,te){te===void 0&&(te={maxDepth:-1,keyMaxLen:-1,pretty:!1});var Me,Pe=Object.assign({ret:"",maxDepth:-1,keyMaxLen:-1,pretty:!1,circularFinder:(Me=new WeakSet,function(Ue){if(typeof Ue=="object"&&Ue!==null){if(Me.has(Ue))return!0;Me.add(Ue)}return!1})},te);return J(q,Pe),Pe.ret}function le(q){return q<=0?"":q>=1e6?(q/1e3/1e3).toFixed(1)+" MB":q>=1e3?(q/1e3).toFixed(1)+" KB":q+" B"}function ee(q,te){return q.length>te&&(q=q.substring(0,te)+"...("+le(function(Me){try{return encodeURI(Me).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length-1}catch{return 0}}(q))+")"),q}var he=function(q,te){return String(q).localeCompare(String(te),void 0,{numeric:!0,sensitivity:"base"})};function ue(q){return q.sort(he)}function $(q){return y(q)||n(q)?Object.keys(q):[]}function K(q){var te=$(q),Me=function(Pe){return y(Pe)||n(Pe)?Object.getOwnPropertyNames(Pe):[]}(q);return Me.filter(function(Pe){return te.indexOf(Pe)===-1})}function ne(q){return y(q)||n(q)?Object.getOwnPropertySymbols(q):[]}function fe(q,te){window.localStorage&&(q="vConsole_"+q,localStorage.setItem(q,te))}function se(q){if(window.localStorage)return q="vConsole_"+q,localStorage.getItem(q)}function Y(q){return q===void 0&&(q=""),"__vc_"+q+Math.random().toString(36).substring(2,8)}function ce(){return typeof window!="undefined"&&!!window.__wxConfig&&!!window.wx&&!!window.__virtualDOM__}function ge(q){if(ce()&&typeof window.wx[q]=="function")try{for(var te,Me=arguments.length,Pe=new Array(Me>1?Me-1:0),Ue=1;Ue<Me;Ue++)Pe[Ue-1]=arguments[Ue];var Le=(te=window.wx[q]).call.apply(te,[window.wx].concat(Pe));return Le}catch($e){return void console.debug("[vConsole] Fail to call wx."+q+"():",$e)}}},5629:function(s,e,t){t.d(e,{W:function(){return _}});var r=t(6881),o=t(5103),a=t(643),n=t(4687),l=t(8665),g=t(9923),_=function(v){function y(){for(var E,T=arguments.length,w=new Array(T),b=0;b<T;b++)w[b]=arguments[b];return(E=v.call.apply(v,[this].concat(w))||this).LOG_METHODS=["log","info","warn","debug","error"],E.ADDED_LOG_PLUGIN_ID=[],E.maxLogNumber=1e3,E.logCounter=0,E.pluginPattern=void 0,E.origConsole={},E}(0,r.Z)(y,v);var M=y.prototype;return M.bindPlugin=function(E){return!(this.ADDED_LOG_PLUGIN_ID.indexOf(E)>-1)&&(this.ADDED_LOG_PLUGIN_ID.length===0&&this.mockConsole(),g.O.create(E),this.ADDED_LOG_PLUGIN_ID.push(E),this.pluginPattern=new RegExp("^\\[("+this.ADDED_LOG_PLUGIN_ID.join("|")+")\\]$","i"),!0)},M.unbindPlugin=function(E){var T=this.ADDED_LOG_PLUGIN_ID.indexOf(E);return T!==-1&&(this.ADDED_LOG_PLUGIN_ID.splice(T,1),g.O.delete(E),this.ADDED_LOG_PLUGIN_ID.length===0&&this.unmockConsole(),!0)},M.mockConsole=function(){var E=this;if(typeof this.origConsole.log!="function"){var T=this.LOG_METHODS;window.console?(T.map(function(b){E.origConsole[b]=window.console[b]}),this.origConsole.time=window.console.time,this.origConsole.timeEnd=window.console.timeEnd,this.origConsole.clear=window.console.clear):window.console={},T.map(function(b){window.console[b]=function(){for(var C=arguments.length,D=new Array(C),k=0;k<C;k++)D[k]=arguments[k];E.addLog({type:b,origData:D||[]})}.bind(window.console)});var w={};window.console.time=function(b){b===void 0&&(b=""),w[b]=Date.now()}.bind(window.console),window.console.timeEnd=function(b){b===void 0&&(b="");var C=w[b];C?(E.addLog({type:"log",origData:[b+":",Date.now()-C+"ms"]}),delete w[b]):E.addLog({type:"log",origData:[b+": 0ms"]})}.bind(window.console),window.console.clear=function(){E.clearLog();for(var b=arguments.length,C=new Array(b),D=0;D<b;D++)C[D]=arguments[D];E.callOriginalConsole.apply(E,["clear"].concat(C))}.bind(window.console),window._vcOrigConsole=this.origConsole}},M.unmockConsole=function(){for(var E in this.origConsole)window.console[E]=this.origConsole[E],delete this.origConsole[E];window._vcOrigConsole&&delete window._vcOrigConsole},M.callOriginalConsole=function(E){if(typeof this.origConsole[E]=="function"){for(var T=arguments.length,w=new Array(T>1?T-1:0),b=1;b<T;b++)w[b-1]=arguments[b];this.origConsole[E].apply(window.console,w)}},M.clearLog=function(){var E=g.O.getAll();for(var T in E)E[T].update(function(w){return w.logList=[],w})},M.clearPluginLog=function(E){g.O.get(E).update(function(T){return T.logList=[],T})},M.addLog=function(E,T){E===void 0&&(E={type:"log",origData:[]});var w={_id:o.QI(),type:E.type,cmdType:T==null?void 0:T.cmdType,date:Date.now(),data:(0,l.b1)(E.origData||[])},b=this._extractPluginIdByLog(w);this._isRepeatedLog(b,w)?this._updateLastLogRepeated(b):(this._pushLogList(b,w),this._limitLogListLength()),T!=null&&T.noOrig||this.callOriginalConsole.apply(this,[E.type].concat(E.origData))},M.evalCommand=function(E){this.addLog({type:"log",origData:[E]},{cmdType:"input"});var T=void 0;try{T=eval.call(window,"("+E+")")}catch{try{T=eval.call(window,E)}catch{}}this.addLog({type:"log",origData:[T]},{cmdType:"output"})},M._extractPluginIdByLog=function(E){var T,w="default",b=(T=E.data[0])==null?void 0:T.origData;if(o.HD(b)){var C=b.match(this.pluginPattern);if(C!==null&&C.length>1){var D=C[1].toLowerCase();this.ADDED_LOG_PLUGIN_ID.indexOf(D)>-1&&(w=D,E.data.shift())}}return w},M._isRepeatedLog=function(E,T){var w=g.O.getRaw(E),b=w.logList[w.logList.length-1];if(!b)return!1;var C=!1;if(T.type===b.type&&T.cmdType===b.cmdType&&T.data.length===b.data.length){C=!0;for(var D=0;D<T.data.length;D++)if(T.data[D].origData!==b.data[D].origData){C=!1;break}}return C},M._updateLastLogRepeated=function(E){g.O.get(E).update(function(T){var w=T.logList,b=w[w.length-1];return b.repeated=b.repeated?b.repeated+1:2,T})},M._pushLogList=function(E,T){g.O.get(E).update(function(w){return w.logList.push(T),w}),n.x.updateTime()},M._limitLogListLength=function(){var E=this;if(this.logCounter++,this.logCounter%10==0){this.logCounter=0;var T=g.O.getAll();for(var w in T)T[w].update(function(b){return b.logList.length>E.maxLogNumber-10&&b.logList.splice(0,b.logList.length-E.maxLogNumber+10),b})}},y}(a.N)},9923:function(s,e,t){t.d(e,{O:function(){return o}});var r=t(3313),o=function(){function a(){}return a.create=function(n){return this.storeMap[n]||(this.storeMap[n]=(0,r.fZ)({logList:[]})),this.storeMap[n]},a.delete=function(n){this.storeMap[n]&&delete this.storeMap[n]},a.get=function(n){return this.storeMap[n]},a.getRaw=function(n){return(0,r.U2)(this.storeMap[n])},a.getAll=function(){return this.storeMap},a}();o.storeMap={}},8665:function(s,e,t){t.d(e,{HX:function(){return v},LH:function(){return a},Tg:function(){return E},b1:function(){return M},oj:function(){return _}});var r=t(5103),o=function(T){var w=r.hZ(T,{maxDepth:0}),b=w.substring(0,36),C=r.DV(T);return w.length>36&&(b+="..."),C=r.rE(C+" "+b)},a=function(T,w){w===void 0&&(w=!0);var b="undefined",C=T;return T instanceof E?(b="uninvocatable",C="(...)"):r.kJ(T)?(b="array",C=o(T)):r.Kn(T)?(b="object",C=o(T)):r.HD(T)?(b="string",C=r.rE(T),w&&(C='"'+C+'"')):r.hj(T)?(b="number",C=String(T)):r.C4(T)?(b="bigint",C=String(T)+"n"):r.jn(T)?(b="boolean",C=String(T)):r.Ft(T)?(b="null",C="null"):r.o8(T)?(b="undefined",C="undefined"):r.mf(T)?(b="function",C=(T.name||"function")+"()"):r.yk(T)&&(b="symbol",C=String(T)),{text:C,valueType:b}},n=[".","[","(","{","}"],l=["]",")","}"],g=function(T,w,b){b===void 0&&(b=0);for(var C={text:"",pos:-1,before:"",after:""},D=T.length-1;D>=b;D--){var k=w.indexOf(T[D]);if(k>-1){C.text=w[k],C.pos=D,C.before=T.substring(b,D),C.after=T.substring(D+1,T.length);break}}return C},_=function(T){var w=g(T,n,0);return{front:w,back:g(T,l,w.pos+1)}},v=function(T,w){if(w==="")return!0;for(var b=0;b<T.data.length;b++)if(typeof T.data[b].origData=="string"&&T.data[b].origData.indexOf(w)>-1)return!0;return!1},y=/(\%[csdo] )|( \%[csdo])/g,M=function(T){if(y.lastIndex=0,r.HD(T[0])&&y.test(T[0])){for(var w,b=[].concat(T),C=b.shift().split(y).filter(function(J){return J!==void 0&&J!==""}),D=b,k=[],z=!1,B="";C.length>0;){var P=C.shift();if(/ ?\%c ?/.test(P)?D.length>0?typeof(B=D.shift())!="string"&&(B=""):(w=P,B="",z=!0):/ ?\%[sd] ?/.test(P)?(w=D.length>0?r.Kn(D[0])?r.DV(D.shift()):String(D.shift()):P,z=!0):/ ?\%o ?/.test(P)?(w=D.length>0?D.shift():P,z=!0):(w=P,z=!0),z){var U={origData:w};B&&(U.style=B),k.push(U),z=!1,w=void 0,B=""}}for(var R=0;R<D.length;R++)k.push({origData:D[R]});return k}for(var V=[],Q=0;Q<T.length;Q++)V.push({origData:T[Q]});return V},E=function(){}},9746:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-icon {
  word-break: normal;
  white-space: normal;
  overflow: visible;
}
.vc-icon svg {
  fill: var(--VC-FG-2);
  height: 1em;
  width: 1em;
  vertical-align: -0.11em;
}
.vc-icon .vc-icon-delete {
  vertical-align: -0.11em;
}
.vc-icon .vc-icon-copy {
  height: 1.1em;
  width: 1.1em;
  vertical-align: -0.16em;
}
.vc-icon .vc-icon-suc {
  fill: var(--VC-TEXTGREEN);
  height: 1.1em;
  width: 1.1em;
  vertical-align: -0.16em;
}
`,""]),e.Z=n},3283:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`#__vconsole {
  --VC-BG-0: #ededed;
  --VC-BG-1: #f7f7f7;
  --VC-BG-2: #fff;
  --VC-BG-3: #f7f7f7;
  --VC-BG-4: #4c4c4c;
  --VC-BG-5: #fff;
  --VC-BG-6: rgba(0, 0, 0, 0.1);
  --VC-FG-0: rgba(0, 0, 0, 0.9);
  --VC-FG-HALF: rgba(0, 0, 0, 0.9);
  --VC-FG-1: rgba(0, 0, 0, 0.5);
  --VC-FG-2: rgba(0, 0, 0, 0.3);
  --VC-FG-3: rgba(0, 0, 0, 0.1);
  --VC-RED: #fa5151;
  --VC-ORANGE: #fa9d3b;
  --VC-YELLOW: #ffc300;
  --VC-GREEN: #91d300;
  --VC-LIGHTGREEN: #95ec69;
  --VC-BRAND: #07c160;
  --VC-BLUE: #10aeff;
  --VC-INDIGO: #1485ee;
  --VC-PURPLE: #6467f0;
  --VC-LINK: #576b95;
  --VC-TEXTGREEN: #06ae56;
  --VC-FG: black;
  --VC-BG: white;
  --VC-BG-COLOR-ACTIVE: #ececec;
  --VC-WARN-BG: #fff3cc;
  --VC-WARN-BORDER: #ffe799;
  --VC-ERROR-BG: #fedcdc;
  --VC-ERROR-BORDER: #fdb9b9;
  --VC-DOM-TAG-NAME-COLOR: #881280;
  --VC-DOM-ATTRIBUTE-NAME-COLOR: #994500;
  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #1a1aa6;
  --VC-CODE-KEY-FG: #881391;
  --VC-CODE-PRIVATE-KEY-FG: #cfa1d3;
  --VC-CODE-FUNC-FG: #0d22aa;
  --VC-CODE-NUMBER-FG: #1c00cf;
  --VC-CODE-STR-FG: #c41a16;
  --VC-CODE-NULL-FG: #808080;
  color: var(--VC-FG-0);
  font-size: 13px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-user-select: auto;
  /* global */
}
#__vconsole .vc-max-height {
  max-height: 19.23076923em;
}
#__vconsole .vc-max-height-line {
  max-height: 6.30769231em;
}
#__vconsole .vc-min-height {
  min-height: 3.07692308em;
}
#__vconsole dd,
#__vconsole dl,
#__vconsole pre {
  margin: 0;
}
#__vconsole pre {
  white-space: pre-wrap;
}
#__vconsole i {
  font-style: normal;
}
.vc-table .vc-table-row {
  line-height: 1.5;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow: hidden;
  border-bottom: 1px solid var(--VC-FG-3);
}
.vc-table .vc-table-row.vc-left-border {
  border-left: 1px solid var(--VC-FG-3);
}
.vc-table .vc-table-row-icon {
  margin-left: 4px;
}
.vc-table .vc-table-col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.23076923em 0.30769231em;
  border-left: 1px solid var(--VC-FG-3);
  overflow: auto;
}
.vc-table .vc-table-col:first-child {
  border: none;
}
.vc-table .vc-table-col-value {
  white-space: pre-wrap;
  word-break: break-word;
  /*white-space: nowrap;
    text-overflow: ellipsis;*/
  -webkit-overflow-scrolling: touch;
}
.vc-table .vc-small .vc-table-col {
  padding: 0 0.30769231em;
  font-size: 0.92307692em;
}
.vc-table .vc-table-col-2 {
  -webkit-box-flex: 2;
  -webkit-flex: 2;
  -moz-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
}
.vc-table .vc-table-col-3 {
  -webkit-box-flex: 3;
  -webkit-flex: 3;
  -moz-box-flex: 3;
  -ms-flex: 3;
  flex: 3;
}
.vc-table .vc-table-col-4 {
  -webkit-box-flex: 4;
  -webkit-flex: 4;
  -moz-box-flex: 4;
  -ms-flex: 4;
  flex: 4;
}
.vc-table .vc-table-col-5 {
  -webkit-box-flex: 5;
  -webkit-flex: 5;
  -moz-box-flex: 5;
  -ms-flex: 5;
  flex: 5;
}
.vc-table .vc-table-col-6 {
  -webkit-box-flex: 6;
  -webkit-flex: 6;
  -moz-box-flex: 6;
  -ms-flex: 6;
  flex: 6;
}
.vc-table .vc-table-row-error {
  border-color: var(--VC-ERROR-BORDER);
  background-color: var(--VC-ERROR-BG);
}
.vc-table .vc-table-row-error .vc-table-col {
  color: var(--VC-RED);
  border-color: var(--VC-ERROR-BORDER);
}
.vc-table .vc-table-col-title {
  font-weight: bold;
}
.vc-table .vc-table-action {
  display: flex;
  justify-content: space-evenly;
}
.vc-table .vc-table-action .vc-icon {
  flex: 1;
  text-align: center;
  display: block;
}
.vc-table .vc-table-action .vc-icon:hover {
  background: var(--VC-BG-3);
}
.vc-table .vc-table-action .vc-icon:active {
  background: var(--VC-BG-1);
}
.vc-table .vc-table-input {
  width: 100%;
  border: none;
  color: var(--VC-FG-0);
  background-color: var(--VC-BG-6);
  height: 3.53846154em;
}
.vc-table .vc-table-input:focus {
  background-color: var(--VC-FG-2);
}
@media (prefers-color-scheme: dark) {
  #__vconsole:not([data-theme="light"]) {
    --VC-BG-0: #191919;
    --VC-BG-1: #1f1f1f;
    --VC-BG-2: #232323;
    --VC-BG-3: #2f2f2f;
    --VC-BG-4: #606060;
    --VC-BG-5: #2c2c2c;
    --VC-BG-6: rgba(255, 255, 255, 0.2);
    --VC-FG-0: rgba(255, 255, 255, 0.8);
    --VC-FG-HALF: rgba(255, 255, 255, 0.6);
    --VC-FG-1: rgba(255, 255, 255, 0.5);
    --VC-FG-2: rgba(255, 255, 255, 0.3);
    --VC-FG-3: rgba(255, 255, 255, 0.05);
    --VC-RED: #fa5151;
    --VC-ORANGE: #c87d2f;
    --VC-YELLOW: #cc9c00;
    --VC-GREEN: #74a800;
    --VC-LIGHTGREEN: #28b561;
    --VC-BRAND: #07c160;
    --VC-BLUE: #10aeff;
    --VC-INDIGO: #1196ff;
    --VC-PURPLE: #8183ff;
    --VC-LINK: #7d90a9;
    --VC-TEXTGREEN: #259c5c;
    --VC-FG: white;
    --VC-BG: black;
    --VC-BG-COLOR-ACTIVE: #282828;
    --VC-WARN-BG: #332700;
    --VC-WARN-BORDER: #664e00;
    --VC-ERROR-BG: #321010;
    --VC-ERROR-BORDER: #642020;
    --VC-DOM-TAG-NAME-COLOR: #5DB0D7;
    --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;
    --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;
    --VC-CODE-KEY-FG: #e36eec;
    --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;
    --VC-CODE-FUNC-FG: #556af2;
    --VC-CODE-NUMBER-FG: #9980ff;
    --VC-CODE-STR-FG: #e93f3b;
    --VC-CODE-NULL-FG: #808080;
  }
}
#__vconsole[data-theme="dark"] {
  --VC-BG-0: #191919;
  --VC-BG-1: #1f1f1f;
  --VC-BG-2: #232323;
  --VC-BG-3: #2f2f2f;
  --VC-BG-4: #606060;
  --VC-BG-5: #2c2c2c;
  --VC-BG-6: rgba(255, 255, 255, 0.2);
  --VC-FG-0: rgba(255, 255, 255, 0.8);
  --VC-FG-HALF: rgba(255, 255, 255, 0.6);
  --VC-FG-1: rgba(255, 255, 255, 0.5);
  --VC-FG-2: rgba(255, 255, 255, 0.3);
  --VC-FG-3: rgba(255, 255, 255, 0.05);
  --VC-RED: #fa5151;
  --VC-ORANGE: #c87d2f;
  --VC-YELLOW: #cc9c00;
  --VC-GREEN: #74a800;
  --VC-LIGHTGREEN: #28b561;
  --VC-BRAND: #07c160;
  --VC-BLUE: #10aeff;
  --VC-INDIGO: #1196ff;
  --VC-PURPLE: #8183ff;
  --VC-LINK: #7d90a9;
  --VC-TEXTGREEN: #259c5c;
  --VC-FG: white;
  --VC-BG: black;
  --VC-BG-COLOR-ACTIVE: #282828;
  --VC-WARN-BG: #332700;
  --VC-WARN-BORDER: #664e00;
  --VC-ERROR-BG: #321010;
  --VC-ERROR-BORDER: #642020;
  --VC-DOM-TAG-NAME-COLOR: #5DB0D7;
  --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;
  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;
  --VC-CODE-KEY-FG: #e36eec;
  --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;
  --VC-CODE-FUNC-FG: #556af2;
  --VC-CODE-NUMBER-FG: #9980ff;
  --VC-CODE-STR-FG: #e93f3b;
  --VC-CODE-NULL-FG: #808080;
}
.vc-tabbar {
  border-bottom: 1px solid var(--VC-FG-3);
  overflow-x: auto;
  height: 3em;
  width: auto;
  white-space: nowrap;
}
.vc-tabbar .vc-tab {
  display: inline-block;
  line-height: 3em;
  padding: 0 1.15384615em;
  border-right: 1px solid var(--VC-FG-3);
  text-decoration: none;
  color: var(--VC-FG-0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.vc-tabbar .vc-tab:active {
  background-color: rgba(0, 0, 0, 0.15);
}
.vc-tabbar .vc-tab.vc-actived {
  background-color: var(--VC-BG-1);
}
.vc-toolbar {
  border-top: 1px solid var(--VC-FG-3);
  line-height: 3em;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.vc-toolbar .vc-tool {
  display: none;
  font-style: normal;
  text-decoration: none;
  color: var(--VC-FG-0);
  width: 50%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  position: relative;
  -webkit-touch-callout: none;
}
.vc-toolbar .vc-tool.vc-toggle,
.vc-toolbar .vc-tool.vc-global-tool {
  display: block;
}
.vc-toolbar .vc-tool:active {
  background-color: rgba(0, 0, 0, 0.15);
}
.vc-toolbar .vc-tool:after {
  content: " ";
  position: absolute;
  top: 0.53846154em;
  bottom: 0.53846154em;
  right: 0;
  border-left: 1px solid var(--VC-FG-3);
}
.vc-toolbar .vc-tool-last:after {
  border: none;
}
.vc-topbar {
  background-color: var(--VC-BG-1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}
.vc-topbar .vc-toptab {
  display: none;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 2.30769231em;
  padding: 0 1.15384615em;
  border-bottom: 1px solid var(--VC-FG-3);
  text-decoration: none;
  text-align: center;
  color: var(--VC-FG-0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.vc-topbar .vc-toptab.vc-toggle {
  display: block;
}
.vc-topbar .vc-toptab:active {
  background-color: rgba(0, 0, 0, 0.15);
}
.vc-topbar .vc-toptab.vc-actived {
  border-bottom: 1px solid var(--VC-INDIGO);
}
.vc-mask {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 10001;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  overflow-y: scroll;
}
.vc-panel {
  display: none;
  position: fixed;
  min-height: 85%;
  left: 0;
  right: 0;
  bottom: -100%;
  z-index: 10002;
  background-color: var(--VC-BG-0);
  transition: bottom 0.3s;
}
.vc-toggle .vc-switch {
  display: none;
}
.vc-toggle .vc-mask {
  background: rgba(0, 0, 0, 0.6);
  display: block;
}
.vc-toggle .vc-panel {
  bottom: 0;
}
.vc-content {
  background-color: var(--VC-BG-2);
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 3.07692308em;
  left: 0;
  right: 0;
  bottom: 3.07692308em;
  -webkit-overflow-scrolling: touch;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
.vc-content.vc-has-topbar {
  top: 5.46153846em;
}
.vc-plugin-box {
  display: none;
  position: relative;
  min-height: 100%;
}
.vc-plugin-box.vc-actived {
  display: block;
}
.vc-plugin-content {
  padding-bottom: 6em;
  -webkit-tap-highlight-color: transparent;
}
.vc-plugin-empty:before,
.vc-plugin-content:empty:before {
  content: "Empty";
  color: var(--VC-FG-1);
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1.15384615em;
  text-align: center;
}
@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  .vc-toolbar,
  .vc-switch {
    bottom: constant(safe-area-inset-bottom);
    bottom: env(safe-area-inset-bottom);
  }
}
`,""]),e.Z=n},7558:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-switch {
  display: block;
  position: fixed;
  right: 0.76923077em;
  bottom: 0.76923077em;
  color: #FFF;
  background-color: var(--VC-BRAND);
  line-height: 1;
  font-size: 1.07692308em;
  padding: 0.61538462em 1.23076923em;
  z-index: 10000;
  border-radius: 0.30769231em;
  box-shadow: 0 0 0.61538462em rgba(0, 0, 0, 0.4);
}
`,""]),e.Z=n},5670:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`/* color */
.vcelm-node {
  color: var(--VC-DOM-TAG-NAME-COLOR);
}
.vcelm-k {
  color: var(--VC-DOM-ATTRIBUTE-NAME-COLOR);
}
.vcelm-v {
  color: var(--VC-DOM-ATTRIBUTE-VALUE-COLOR);
}
.vcelm-l.vc-actived > .vcelm-node {
  background-color: var(--VC-FG-3);
}
/* layout */
.vcelm-l {
  padding-left: 8px;
  position: relative;
  word-wrap: break-word;
  line-height: 1.2;
}
/*.vcelm-l.vcelm-noc {
  padding-left: 0;
}*/
.vcelm-l .vcelm-node:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vcelm-l.vcelm-noc .vcelm-node:active {
  background-color: transparent;
}
.vcelm-t {
  white-space: pre-wrap;
  word-wrap: break-word;
}
/* level */
/* arrow */
.vcelm-l:before {
  content: "";
  display: block;
  position: absolute;
  top: 6px;
  left: 3px;
  width: 0;
  height: 0;
  border: transparent solid 3px;
  border-left-color: var(--VC-FG-1);
}
.vcelm-l.vc-toggle:before {
  display: block;
  top: 6px;
  left: 0;
  border-top-color: var(--VC-FG-1);
  border-left-color: transparent;
}
.vcelm-l.vcelm-noc:before {
  display: none;
}
`,""]),e.Z=n},3327:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-logs-has-cmd {
  padding-bottom: 6.15384615em;
}
`,""]),e.Z=n},1130:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-cmd {
  position: absolute;
  height: 3.07692308em;
  left: 0;
  right: 0;
  bottom: 3.07692308em;
  border-top: 1px solid var(--VC-FG-3);
  display: block !important;
}
.vc-cmd.vc-filter {
  bottom: 0;
}
.vc-cmd-input-wrap {
  display: block;
  position: relative;
  height: 2.15384615em;
  margin-right: 3.07692308em;
  padding: 0.46153846em 0.61538462em;
}
.vc-cmd-input {
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  padding: 0;
  font-size: 0.92307692em;
  background-color: transparent;
  color: var(--VC-FG-0);
}
.vc-cmd-input::-webkit-input-placeholder {
  line-height: 2.15384615em;
}
.vc-cmd-btn {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 3.07692308em;
  border: none;
  background-color: var(--VC-BG-0);
  color: var(--VC-FG-0);
  outline: none;
  -webkit-touch-callout: none;
  font-size: 1em;
}
.vc-cmd-clear-btn {
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  width: 3.07692308em;
  line-height: 3.07692308em;
}
.vc-cmd-btn:active,
.vc-cmd-clear-btn:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-cmd-prompted {
  position: absolute;
  left: 0.46153846em;
  right: 0.46153846em;
  background-color: var(--VC-BG-3);
  border: 1px solid var(--VC-FG-3);
  overflow-x: scroll;
  display: none;
}
.vc-cmd-prompted li {
  list-style: none;
  line-height: 30px;
  padding: 0 0.46153846em;
  border-bottom: 1px solid var(--VC-FG-3);
}
.vc-cmd-prompted li:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-cmd-prompted-hide {
  text-align: center;
}
`,""]),e.Z=n},7147:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-log-row {
  margin: 0;
  padding: 0.46153846em 0.61538462em;
  overflow: hidden;
  line-height: 1.3;
  border-bottom: 1px solid var(--VC-FG-3);
  word-break: break-word;
  position: relative;
  display: flex;
}
.vc-log-info {
  color: var(--VC-PURPLE);
}
.vc-log-debug {
  color: var(--VC-YELLOW);
}
.vc-log-warn {
  color: var(--VC-ORANGE);
  border-color: var(--VC-WARN-BORDER);
  background-color: var(--VC-WARN-BG);
}
.vc-log-error {
  color: var(--VC-RED);
  border-color: var(--VC-ERROR-BORDER);
  background-color: var(--VC-ERROR-BG);
}
.vc-logrow-icon {
  margin-left: auto;
}
.vc-log-time {
  width: 6.15384615em;
  color: #777;
}
.vc-log-repeat i {
  margin-right: 0.30769231em;
  padding: 0 6.5px;
  color: #D7E0EF;
  background-color: #42597F;
  border-radius: 8.66666667px;
}
.vc-log-error .vc-log-repeat i {
  color: #901818;
  background-color: var(--VC-RED);
}
.vc-log-warn .vc-log-repeat i {
  color: #987D20;
  background-color: #F4BD02;
}
.vc-log-content {
  flex: 1;
}
.vc-log-input,
.vc-log-output {
  padding-left: 0.92307692em;
}
.vc-log-input:before,
.vc-log-output:before {
  content: "\u203A";
  position: absolute;
  top: 0.15384615em;
  left: 0;
  font-size: 1.23076923em;
  color: #6A5ACD;
}
.vc-log-output:before {
  content: "\u2039";
}
`,""]),e.Z=n},1237:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-log-tree {
  display: block;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.vc-log-tree-node {
  display: block;
  font-style: italic;
  padding-left: 0.76923077em;
  position: relative;
}
.vc-log-tree.vc-is-tree > .vc-log-tree-node:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-log-tree.vc-is-tree > .vc-log-tree-node::before {
  content: "";
  position: absolute;
  top: 0.30769231em;
  left: 0.15384615em;
  width: 0;
  height: 0;
  border: transparent solid 0.30769231em;
  border-left-color: var(--VC-FG-1);
}
.vc-log-tree.vc-is-tree.vc-toggle > .vc-log-tree-node::before {
  top: 0.46153846em;
  left: 0;
  border-top-color: var(--VC-FG-1);
  border-left-color: transparent;
}
.vc-log-tree-child {
  margin-left: 0.76923077em;
}
.vc-log-tree-loadmore {
  text-decoration: underline;
  padding-left: 1.84615385em;
  position: relative;
  color: var(--VC-CODE-FUNC-FG);
}
.vc-log-tree-loadmore::before {
  content: "\u203A\u203A";
  position: absolute;
  top: -0.15384615em;
  left: 0.76923077em;
  font-size: 1.23076923em;
  color: var(--VC-CODE-FUNC-FG);
}
.vc-log-tree-loadmore:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
`,""]),e.Z=n},845:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-log-key {
  color: var(--VC-CODE-KEY-FG);
}
.vc-log-key-private {
  color: var(--VC-CODE-PRIVATE-KEY-FG);
}
.vc-log-val {
  white-space: pre-line;
}
.vc-log-val-function {
  color: var(--VC-CODE-FUNC-FG);
  font-style: italic !important;
}
.vc-log-val-bigint {
  color: var(--VC-CODE-FUNC-FG);
}
.vc-log-val-number,
.vc-log-val-boolean {
  color: var(--VC-CODE-NUMBER-FG);
}
.vc-log-val-string.vc-log-val-haskey {
  color: var(--VC-CODE-STR-FG);
  white-space: normal;
}
.vc-log-val-null,
.vc-log-val-undefined,
.vc-log-val-uninvocatable {
  color: var(--VC-CODE-NULL-FG);
}
.vc-log-val-symbol {
  color: var(--VC-CODE-STR-FG);
}
`,""]),e.Z=n},8747:function(s,e,t){var r=t(6738),o=t.n(r),a=t(7705),n=t.n(a)()(o());n.push([s.id,`.vc-group .vc-group-preview {
  -webkit-touch-callout: none;
}
.vc-group .vc-group-preview:active {
  background-color: var(--VC-BG-COLOR-ACTIVE);
}
.vc-group .vc-group-detail {
  display: none;
  padding: 0 0 0.76923077em 1.53846154em;
  border-bottom: 1px solid var(--VC-FG-3);
}
.vc-group.vc-actived .vc-group-detail {
  display: block;
  background-color: var(--VC-BG-1);
}
.vc-group.vc-actived .vc-table-row {
  background-color: var(--VC-BG-2);
}
.vc-group.vc-actived .vc-group-preview {
  background-color: var(--VC-BG-1);
}
`,""]),e.Z=n},3411:function(s,e,t){var r=t(3379),o=t.n(r),a=t(7795),n=t.n(a),l=t(569),g=t.n(l),_=t(3565),v=t.n(_),y=t(9216),M=t.n(y),E=t(4589),T=t.n(E),w=t(1130),b={};w.Z&&w.Z.locals&&(b.locals=w.Z.locals);var C,D=0,k={};k.styleTagTransform=T(),k.setAttributes=v(),k.insert=g().bind(null,"head"),k.domAPI=n(),k.insertStyleElement=M(),b.use=function(z){return k.options=z||{},D++||(C=o()(w.Z,k)),b},b.unuse=function(){D>0&&!--D&&(C(),C=null)},e.Z=b},3379:function(s){var e=[];function t(a){for(var n=-1,l=0;l<e.length;l++)if(e[l].identifier===a){n=l;break}return n}function r(a,n){for(var l={},g=[],_=0;_<a.length;_++){var v=a[_],y=n.base?v[0]+n.base:v[0],M=l[y]||0,E="".concat(y," ").concat(M);l[y]=M+1;var T=t(E),w={css:v[1],media:v[2],sourceMap:v[3],supports:v[4],layer:v[5]};if(T!==-1)e[T].references++,e[T].updater(w);else{var b=o(w,n);n.byIndex=_,e.splice(_,0,{identifier:E,updater:b,references:1})}g.push(E)}return g}function o(a,n){var l=n.domAPI(n);return l.update(a),function(g){if(g){if(g.css===a.css&&g.media===a.media&&g.sourceMap===a.sourceMap&&g.supports===a.supports&&g.layer===a.layer)return;l.update(a=g)}else l.remove()}}s.exports=function(a,n){var l=r(a=a||[],n=n||{});return function(g){g=g||[];for(var _=0;_<l.length;_++){var v=t(l[_]);e[v].references--}for(var y=r(g,n),M=0;M<l.length;M++){var E=t(l[M]);e[E].references===0&&(e[E].updater(),e.splice(E,1))}l=y}}},569:function(s){var e={};s.exports=function(t,r){var o=function(a){if(e[a]===void 0){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}e[a]=n}return e[a]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},9216:function(s){s.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:function(s,e,t){s.exports=function(r){var o=t.nc;o&&r.setAttribute("nonce",o)}},7795:function(s){s.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){(function(o,a,n){var l="";n.supports&&(l+="@supports (".concat(n.supports,") {")),n.media&&(l+="@media ".concat(n.media," {"));var g=n.layer!==void 0;g&&(l+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),l+=n.css,g&&(l+="}"),n.media&&(l+="}"),n.supports&&(l+="}");var _=n.sourceMap;_&&typeof btoa!="undefined"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),a.styleTagTransform(l,o,a.options)})(t,e,r)},remove:function(){(function(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r)})(t)}}}},4589:function(s){s.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},6464:function(s,e,t){function r(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}t.d(e,{Z:function(){return r}})},4296:function(s,e,t){function r(a,n){for(var l=0;l<n.length;l++){var g=n[l];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(a,g.key,g)}}function o(a,n,l){return n&&r(a.prototype,n),l&&r(a,l),Object.defineProperty(a,"prototype",{writable:!1}),a}t.d(e,{Z:function(){return o}})},6881:function(s,e,t){t.d(e,{Z:function(){return o}});var r=t(2717);function o(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,(0,r.Z)(a,n)}},2717:function(s,e,t){function r(o,a){return r=Object.setPrototypeOf||function(n,l){return n.__proto__=l,n},r(o,a)}t.d(e,{Z:function(){return r}})},7003:function(s,e,t){t.d(e,{H3:function(){return r.H3E},ev:function(){return r.evW},x:function(){return r.xa3}});var r=t(2942)},2942:function(s,e,t){t.d(e,{FWw:function(){return he},f_C:function(){return Se},hjT:function(){return $e},R3I:function(){return T},Ljt:function(){return V},akz:function(){return be},VnY:function(){return ge},cKT:function(){return Y},gbL:function(){return it},FIv:function(){return M},xa3:function(){return se},YCL:function(){return De},vpE:function(){return Be},RMB:function(){return C},ogt:function(){return b},bGB:function(){return D},cSb:function(){return P},yl1:function(){return et},$XI:function(){return y},dvw:function(){return nt},S1n:function(){return G},$Tr:function(){return w},oLt:function(){return U},yef:function(){return Ae},ZTd:function(){return r},evW:function(){return fe},H3E:function(){return ne},cly:function(){return j},AT7:function(){return R},j7q:function(){return n},N8:function(){return g},rTO:function(){return Q},BmG:function(){return J},fxP:function(){return E},czc:function(){return ve},DhX:function(){return B},LdU:function(){return v},bi5:function(){return k},fLW:function(){return z},VHj:function(){return le},Ui:function(){return lt},etI:function(){return Tt},GQg:function(){return F}}),t(2717),t(6881);function r(){}function o(Z){return Z()}function a(){return Object.create(null)}function n(Z){Z.forEach(o)}function l(Z){return typeof Z=="function"}function g(Z,H){return Z!=Z?H==H:Z!==H||Z&&typeof Z=="object"||typeof Z=="function"}function _(Z){return Object.keys(Z).length===0}function v(Z){if(Z==null)return r;for(var H=arguments.length,I=new Array(H>1?H-1:0),oe=1;oe<H;oe++)I[oe-1]=arguments[oe];var pe=Z.subscribe.apply(Z,I);return pe.unsubscribe?function(){return pe.unsubscribe()}:pe}function y(Z){var H;return v(Z,function(I){return H=I})(),H}function M(Z,H,I){Z.$$.on_destroy.push(v(H,I))}function E(Z,H,I){return Z.set(I),H}function T(Z,H){Z.appendChild(H)}function w(Z,H,I){Z.insertBefore(H,I||null)}function b(Z){Z.parentNode.removeChild(Z)}function C(Z,H){for(var I=0;I<Z.length;I+=1)Z[I]&&Z[I].d(H)}function D(Z){return document.createElement(Z)}function k(Z){return document.createElementNS("http://www.w3.org/2000/svg",Z)}function z(Z){return document.createTextNode(Z)}function B(){return z(" ")}function P(){return z("")}function U(Z,H,I,oe){return Z.addEventListener(H,I,oe),function(){return Z.removeEventListener(H,I,oe)}}function R(Z){return function(H){return H.preventDefault(),Z.call(this,H)}}function V(Z,H,I){I==null?Z.removeAttribute(H):Z.getAttribute(H)!==I&&Z.setAttribute(H,I)}function Q(Z,H){H=""+H,Z.wholeText!==H&&(Z.data=H)}function J(Z,H){Z.value=H==null?"":H}function ve(Z,H,I,oe){I===null?Z.style.removeProperty(H):Z.style.setProperty(H,I,oe?"important":"")}function le(Z,H,I){Z.classList[I?"add":"remove"](H)}function ee(Z,H,I){I===void 0&&(I=!1);var oe=document.createEvent("CustomEvent");return oe.initCustomEvent(Z,I,!1,H),oe}var he=function(){function Z(){this.e=this.n=null}var H=Z.prototype;return H.c=function(I){this.h(I)},H.m=function(I,oe,pe){pe===void 0&&(pe=null),this.e||(this.e=D(oe.nodeName),this.t=oe,this.c(I)),this.i(pe)},H.h=function(I){this.e.innerHTML=I,this.n=Array.from(this.e.childNodes)},H.i=function(I){for(var oe=0;oe<this.n.length;oe+=1)w(this.t,this.n[oe],I)},H.p=function(I){this.d(),this.h(I),this.i(this.a)},H.d=function(){this.n.forEach(b)},Z}(),ue;function $(Z){ue=Z}function K(){if(!ue)throw new Error("Function called outside component initialization");return ue}function ne(Z){K().$$.on_mount.push(Z)}function fe(Z){K().$$.on_destroy.push(Z)}function se(){var Z=K();return function(H,I){var oe=Z.$$.callbacks[H];if(oe){var pe=ee(H,I);oe.slice().forEach(function(Oe){Oe.call(Z,pe)})}}}function Y(Z,H){var I=this,oe=Z.$$.callbacks[H.type];oe&&oe.slice().forEach(function(pe){return pe.call(I,H)})}var ce=[],ge=[],q=[],te=[],Me=Promise.resolve(),Pe=!1;function Ue(){Pe||(Pe=!0,Me.then(et))}function Le(Z){q.push(Z)}function $e(Z){te.push(Z)}var We=new Set,ze=0;function et(){var Z=ue;do{for(;ze<ce.length;){var H=ce[ze];ze++,$(H),Je(H.$$)}for($(null),ce.length=0,ze=0;ge.length;)ge.pop()();for(var I=0;I<q.length;I+=1){var oe=q[I];We.has(oe)||(We.add(oe),oe())}q.length=0}while(ce.length);for(;te.length;)te.pop()();Pe=!1,We.clear(),$(Z)}function Je(Z){if(Z.fragment!==null){Z.update(),n(Z.before_update);var H=Z.dirty;Z.dirty=[-1],Z.fragment&&Z.fragment.p(Z.ctx,H),Z.after_update.forEach(Le)}}var Ze,tt=new Set;function nt(){Ze={r:0,c:[],p:Ze}}function it(){Ze.r||n(Ze.c),Ze=Ze.p}function lt(Z,H){Z&&Z.i&&(tt.delete(Z),Z.i(H))}function Tt(Z,H,I,oe){if(Z&&Z.o){if(tt.has(Z))return;tt.add(Z),Ze.c.push(function(){tt.delete(Z),oe&&(I&&Z.d(1),oe())}),Z.o(H)}}function j(Z,H){Tt(Z,1,1,function(){H.delete(Z.key)})}function F(Z,H,I,oe,pe,Oe,Re,Fe,Ce,Ne,Ee,Ie){for(var ke=Z.length,He=Oe.length,ut=ke,Yt={};ut--;)Yt[Z[ut].key]=ut;var It=[],fn=new Map,rn=new Map;for(ut=He;ut--;){var sn=Ie(pe,Oe,ut),tn=I(sn),cn=Re.get(tn);cn?oe&&cn.p(sn,H):(cn=Ne(tn,sn)).c(),fn.set(tn,It[ut]=cn),tn in Yt&&rn.set(tn,Math.abs(ut-Yt[tn]))}var mn=new Set,W=new Set;function de(at){lt(at,1),at.m(Fe,Ee),Re.set(at.key,at),Ee=at.first,He--}for(;ke&&He;){var _e=It[He-1],me=Z[ke-1],we=_e.key,Qe=me.key;_e===me?(Ee=_e.first,ke--,He--):fn.has(Qe)?!Re.has(we)||mn.has(we)?de(_e):W.has(Qe)?ke--:rn.get(we)>rn.get(Qe)?(W.add(we),de(_e)):(mn.add(Qe),ke--):(Ce(me,Re),ke--)}for(;ke--;){var rt=Z[ke];fn.has(rt.key)||Ce(rt,Re)}for(;He;)de(It[He-1]);return It}function be(Z,H,I){var oe=Z.$$.props[H];oe!==void 0&&(Z.$$.bound[oe]=I,I(Z.$$.ctx[oe]))}function De(Z){Z&&Z.c()}function Ae(Z,H,I,oe){var pe=Z.$$,Oe=pe.fragment,Re=pe.on_mount,Fe=pe.on_destroy,Ce=pe.after_update;Oe&&Oe.m(H,I),oe||Le(function(){var Ne=Re.map(o).filter(l);Fe?Fe.push.apply(Fe,Ne):n(Ne),Z.$$.on_mount=[]}),Ce.forEach(Le)}function Be(Z,H){var I=Z.$$;I.fragment!==null&&(n(I.on_destroy),I.fragment&&I.fragment.d(H),I.on_destroy=I.fragment=null,I.ctx=[])}function je(Z,H){Z.$$.dirty[0]===-1&&(ce.push(Z),Ue(),Z.$$.dirty.fill(0)),Z.$$.dirty[H/31|0]|=1<<H%31}function G(Z,H,I,oe,pe,Oe,Re,Fe){Fe===void 0&&(Fe=[-1]);var Ce=ue;$(Z);var Ne=Z.$$={fragment:null,ctx:null,props:Oe,update:r,not_equal:pe,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(H.context||(Ce?Ce.$$.context:[])),callbacks:a(),dirty:Fe,skip_bound:!1,root:H.target||Ce.$$.root};Re&&Re(Ne.root);var Ee,Ie=!1;if(Ne.ctx=I?I(Z,H.props||{},function(He,ut){var Yt=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:ut;return Ne.ctx&&pe(Ne.ctx[He],Ne.ctx[He]=Yt)&&(!Ne.skip_bound&&Ne.bound[He]&&Ne.bound[He](Yt),Ie&&je(Z,He)),ut}):[],Ne.update(),Ie=!0,n(Ne.before_update),Ne.fragment=!!oe&&oe(Ne.ctx),H.target){if(H.hydrate){var ke=(Ee=H.target,Array.from(Ee.childNodes));Ne.fragment&&Ne.fragment.l(ke),ke.forEach(b)}else Ne.fragment&&Ne.fragment.c();H.intro&&lt(Z.$$.fragment),Ae(Z,H.target,H.anchor,H.customElement),et()}$(Ce)}var Se=function(){function Z(){}var H=Z.prototype;return H.$destroy=function(){Be(this,1),this.$destroy=r},H.$on=function(I,oe){var pe=this.$$.callbacks[I]||(this.$$.callbacks[I]=[]);return pe.push(oe),function(){var Oe=pe.indexOf(oe);Oe!==-1&&pe.splice(Oe,1)}},H.$set=function(I){this.$$set&&!_(I)&&(this.$$.skip_bound=!0,this.$$set(I),this.$$.skip_bound=!1)},Z}()},3313:function(s,e,t){t.d(e,{U2:function(){return r.$XI},fZ:function(){return l}});var r=t(2942);function o(g,_){var v=typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(v)return(v=v.call(g)).next.bind(v);if(Array.isArray(g)||(v=function(M,E){if(!!M){if(typeof M=="string")return a(M,E);var T=Object.prototype.toString.call(M).slice(8,-1);if(T==="Object"&&M.constructor&&(T=M.constructor.name),T==="Map"||T==="Set")return Array.from(M);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return a(M,E)}}(g))||_&&g&&typeof g.length=="number"){v&&(g=v);var y=0;return function(){return y>=g.length?{done:!0}:{done:!1,value:g[y++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(g,_){(_==null||_>g.length)&&(_=g.length);for(var v=0,y=new Array(_);v<_;v++)y[v]=g[v];return y}var n=[];function l(g,_){var v;_===void 0&&(_=r.ZTd);var y=new Set;function M(E){if((0,r.N8)(g,E)&&(g=E,v)){for(var T,w=!n.length,b=o(y);!(T=b()).done;){var C=T.value;C[1](),n.push(C,g)}if(w){for(var D=0;D<n.length;D+=2)n[D][0](n[D+1]);n.length=0}}}return{set:M,update:function(E){M(E(g))},subscribe:function(E,T){T===void 0&&(T=r.ZTd);var w=[E,T];return y.add(w),y.size===1&&(v=_(M)||r.ZTd),E(g),function(){y.delete(w),y.size===0&&(v(),v=null)}}}}}},__webpack_module_cache__={};function __webpack_require__(s){var e=__webpack_module_cache__[s];if(e!==void 0)return e.exports;var t=__webpack_module_cache__[s]={id:s,exports:{}};return __webpack_modules__[s](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=function(s,e){for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),__webpack_require__.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)};var __webpack_exports__={};return function(){__webpack_require__.d(__webpack_exports__,{default:function(){return _o}}),__webpack_require__(5441),__webpack_require__(8765);var s=__webpack_require__(4296),e=__webpack_require__(5103),t={one:function(d,f){f===void 0&&(f=document);try{return f.querySelector(d)||void 0}catch{return}},all:function(d,f){f===void 0&&(f=document);try{var u=f.querySelectorAll(d);return[].slice.call(u)}catch{return[]}},addClass:function(d,f){if(d)for(var u=(0,e.kJ)(d)?d:[d],c=0;c<u.length;c++){var h=(u[c].className||"").split(" ");h.indexOf(f)>-1||(h.push(f),u[c].className=h.join(" "))}},removeClass:function(d,f){if(d)for(var u=(0,e.kJ)(d)?d:[d],c=0;c<u.length;c++){for(var h=u[c].className.split(" "),x=0;x<h.length;x++)h[x]==f&&(h[x]="");u[c].className=h.join(" ").trim()}},hasClass:function(d,f){return!(!d||!d.classList)&&d.classList.contains(f)},bind:function(d,f,u,c){c===void 0&&(c=!1),d&&((0,e.kJ)(d)?d:[d]).forEach(function(h){h.addEventListener(f,u,!!c)})},delegate:function(d,f,u,c){d&&d.addEventListener(f,function(h){var x=t.all(u,d);if(x)e:for(var S=0;S<x.length;S++)for(var L=h.target;L;){if(L==x[S]){c.call(L,h,L);break e}if((L=L.parentNode)==d)break}},!1)},removeChildren:function(d){for(;d.firstChild;)d.removeChild(d.lastChild);return d}},r=t,o=__webpack_require__(6464),a=__webpack_require__(6881),n=__webpack_require__(2942),l=__webpack_require__(7003),g=__webpack_require__(3379),_=__webpack_require__.n(g),v=__webpack_require__(7795),y=__webpack_require__.n(v),M=__webpack_require__(569),E=__webpack_require__.n(M),T=__webpack_require__(3565),w=__webpack_require__.n(T),b=__webpack_require__(9216),C=__webpack_require__.n(b),D=__webpack_require__(4589),k=__webpack_require__.n(D),z=__webpack_require__(7558),B={};z.Z&&z.Z.locals&&(B.locals=z.Z.locals);var P,U=0,R={};R.styleTagTransform=k(),R.setAttributes=w(),R.insert=E().bind(null,"head"),R.domAPI=y(),R.insertStyleElement=C(),B.use=function(d){return R.options=d||{},U++||(P=_()(z.Z,R)),B},B.unuse=function(){U>0&&!--U&&(P(),P=null)};var V=B;function Q(d){var f,u,c,h;return{c:function(){f=(0,n.bGB)("div"),u=(0,n.fLW)("vConsole"),(0,n.Ljt)(f,"class","vc-switch"),(0,n.czc)(f,"right",d[2].x+"px"),(0,n.czc)(f,"bottom",d[2].y+"px"),(0,n.czc)(f,"display",d[0]?"block":"none")},m:function(x,S){(0,n.$Tr)(x,f,S),(0,n.R3I)(f,u),d[8](f),c||(h=[(0,n.oLt)(f,"touchstart",d[3]),(0,n.oLt)(f,"touchend",d[4]),(0,n.oLt)(f,"touchmove",d[5]),(0,n.oLt)(f,"click",d[7])],c=!0)},p:function(x,S){var L=S[0];4&L&&(0,n.czc)(f,"right",x[2].x+"px"),4&L&&(0,n.czc)(f,"bottom",x[2].y+"px"),1&L&&(0,n.czc)(f,"display",x[0]?"block":"none")},i:n.ZTd,o:n.ZTd,d:function(x){x&&(0,n.ogt)(f),d[8](null),c=!1,(0,n.j7q)(h)}}}function J(d,f,u){var c,h=f.show,x=h===void 0||h,S=f.position,L=S===void 0?{x:0,y:0}:S,A={hasMoved:!1,x:0,y:0,startX:0,startY:0,endX:0,endY:0},O={x:0,y:0};(0,l.H3)(function(){V.use()}),(0,l.ev)(function(){V.unuse()});var N=function(X,ae){var re=ie(X,ae);X=re[0],ae=re[1],A.x=X,A.y=ae,u(2,O.x=X,O),u(2,O.y=ae,O),e.po("switch_x",X+""),e.po("switch_y",ae+"")},ie=function(X,ae){var re=Math.max(document.documentElement.offsetWidth,window.innerWidth),ye=Math.max(document.documentElement.offsetHeight,window.innerHeight);return X+c.offsetWidth>re&&(X=re-c.offsetWidth),ae+c.offsetHeight>ye&&(ae=ye-c.offsetHeight),X<0&&(X=0),ae<20&&(ae=20),[X,ae]};return d.$$set=function(X){"show"in X&&u(0,x=X.show),"position"in X&&u(6,L=X.position)},d.$$.update=function(){66&d.$$.dirty&&c&&N(L.x,L.y)},[x,c,O,function(X){A.startX=X.touches[0].pageX,A.startY=X.touches[0].pageY,A.hasMoved=!1},function(X){A.hasMoved&&(A.startX=0,A.startY=0,A.hasMoved=!1,N(A.endX,A.endY))},function(X){if(!(X.touches.length<=0)){var ae=X.touches[0].pageX-A.startX,re=X.touches[0].pageY-A.startY,ye=Math.floor(A.x-ae),xe=Math.floor(A.y-re),Ge=ie(ye,xe);ye=Ge[0],xe=Ge[1],u(2,O.x=ye,O),u(2,O.y=xe,O),A.endX=ye,A.endY=xe,A.hasMoved=!0,X.preventDefault()}},L,function(X){n.cKT.call(this,d,X)},function(X){n.VnY[X?"unshift":"push"](function(){u(1,c=X)})}]}var ve=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,J,Q,n.N8,{show:0,position:6}),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"show",get:function(){return this.$$.ctx[0]},set:function(u){this.$$set({show:u}),(0,n.yl1)()}},{key:"position",get:function(){return this.$$.ctx[6]},set:function(u){this.$$set({position:u}),(0,n.yl1)()}}]),f}(n.f_C),le=ve,ee=__webpack_require__(4687),he=__webpack_require__(3283),ue={};he.Z&&he.Z.locals&&(ue.locals=he.Z.locals);var $,K=0,ne={};ne.styleTagTransform=k(),ne.setAttributes=w(),ne.insert=E().bind(null,"head"),ne.domAPI=y(),ne.insertStyleElement=C(),ue.use=function(d){return ne.options=d||{},K++||($=_()(he.Z,ne)),ue},ue.unuse=function(){K>0&&!--K&&($(),$=null)};var fe=ue;function se(d,f,u){var c=d.slice();return c[41]=f[u][0],c[42]=f[u][1],c}function Y(d,f,u){var c=d.slice();return c[45]=f[u],c[47]=u,c}function ce(d,f,u){var c=d.slice();return c[41]=f[u][0],c[42]=f[u][1],c}function ge(d,f,u){var c=d.slice();return c[41]=f[u][0],c[42]=f[u][1],c}function q(d,f,u){var c=d.slice();return c[45]=f[u],c[47]=u,c}function te(d,f,u){var c=d.slice();return c[41]=f[u][0],c[42]=f[u][1],c}function Me(d){var f,u,c,h,x,S=d[42].name+"";function L(){return d[26](d[42])}return{c:function(){f=(0,n.bGB)("a"),u=(0,n.fLW)(S),(0,n.Ljt)(f,"class","vc-tab"),(0,n.Ljt)(f,"id",c="__vc_tab_"+d[42].id),(0,n.VHj)(f,"vc-actived",d[42].id===d[2])},m:function(A,O){(0,n.$Tr)(A,f,O),(0,n.R3I)(f,u),h||(x=(0,n.oLt)(f,"click",L),h=!0)},p:function(A,O){d=A,8&O[0]&&S!==(S=d[42].name+"")&&(0,n.rTO)(u,S),8&O[0]&&c!==(c="__vc_tab_"+d[42].id)&&(0,n.Ljt)(f,"id",c),12&O[0]&&(0,n.VHj)(f,"vc-actived",d[42].id===d[2])},d:function(A){A&&(0,n.ogt)(f),h=!1,x()}}}function Pe(d){var f,u=d[42].hasTabPanel&&Me(d);return{c:function(){u&&u.c(),f=(0,n.cSb)()},m:function(c,h){u&&u.m(c,h),(0,n.$Tr)(c,f,h)},p:function(c,h){c[42].hasTabPanel?u?u.p(c,h):((u=Me(c)).c(),u.m(f.parentNode,f)):u&&(u.d(1),u=null)},d:function(c){u&&u.d(c),c&&(0,n.ogt)(f)}}}function Ue(d){var f,u,c,h,x,S=d[45].name+"";function L(){for(var A,O=arguments.length,N=new Array(O),ie=0;ie<O;ie++)N[ie]=arguments[ie];return(A=d)[27].apply(A,[d[42],d[47]].concat(N))}return{c:function(){f=(0,n.bGB)("i"),u=(0,n.fLW)(S),(0,n.Ljt)(f,"class",c="vc-toptab vc-topbar-"+d[42].id+" "+d[45].className),(0,n.VHj)(f,"vc-toggle",d[42].id===d[2]),(0,n.VHj)(f,"vc-actived",d[45].actived)},m:function(A,O){(0,n.$Tr)(A,f,O),(0,n.R3I)(f,u),h||(x=(0,n.oLt)(f,"click",L),h=!0)},p:function(A,O){d=A,8&O[0]&&S!==(S=d[45].name+"")&&(0,n.rTO)(u,S),8&O[0]&&c!==(c="vc-toptab vc-topbar-"+d[42].id+" "+d[45].className)&&(0,n.Ljt)(f,"class",c),12&O[0]&&(0,n.VHj)(f,"vc-toggle",d[42].id===d[2]),8&O[0]&&(0,n.VHj)(f,"vc-actived",d[45].actived)},d:function(A){A&&(0,n.ogt)(f),h=!1,x()}}}function Le(d){for(var f,u=d[42].topbarList,c=[],h=0;h<u.length;h+=1)c[h]=Ue(q(d,u,h));return{c:function(){for(var x=0;x<c.length;x+=1)c[x].c();f=(0,n.cSb)()},m:function(x,S){for(var L=0;L<c.length;L+=1)c[L].m(x,S);(0,n.$Tr)(x,f,S)},p:function(x,S){if(16396&S[0]){var L;for(u=x[42].topbarList,L=0;L<u.length;L+=1){var A=q(x,u,L);c[L]?c[L].p(A,S):(c[L]=Ue(A),c[L].c(),c[L].m(f.parentNode,f))}for(;L<c.length;L+=1)c[L].d(1);c.length=u.length}},d:function(x){(0,n.RMB)(c,x),x&&(0,n.ogt)(f)}}}function $e(d){var f,u;return{c:function(){f=(0,n.bGB)("div"),(0,n.Ljt)(f,"id",u="__vc_plug_"+d[42].id),(0,n.Ljt)(f,"class","vc-plugin-box"),(0,n.VHj)(f,"vc-actived",d[42].id===d[2])},m:function(c,h){(0,n.$Tr)(c,f,h),d[28](f)},p:function(c,h){8&h[0]&&u!==(u="__vc_plug_"+c[42].id)&&(0,n.Ljt)(f,"id",u),12&h[0]&&(0,n.VHj)(f,"vc-actived",c[42].id===c[2])},d:function(c){c&&(0,n.ogt)(f),d[28](null)}}}function We(d){var f,u,c,h,x,S=d[45].name+"";function L(){for(var A,O=arguments.length,N=new Array(O),ie=0;ie<O;ie++)N[ie]=arguments[ie];return(A=d)[30].apply(A,[d[42],d[47]].concat(N))}return{c:function(){f=(0,n.bGB)("i"),u=(0,n.fLW)(S),(0,n.Ljt)(f,"class",c="vc-tool vc-tool-"+d[42].id),(0,n.VHj)(f,"vc-global-tool",d[45].global),(0,n.VHj)(f,"vc-toggle",d[42].id===d[2])},m:function(A,O){(0,n.$Tr)(A,f,O),(0,n.R3I)(f,u),h||(x=(0,n.oLt)(f,"click",L),h=!0)},p:function(A,O){d=A,8&O[0]&&S!==(S=d[45].name+"")&&(0,n.rTO)(u,S),8&O[0]&&c!==(c="vc-tool vc-tool-"+d[42].id)&&(0,n.Ljt)(f,"class",c),8&O[0]&&(0,n.VHj)(f,"vc-global-tool",d[45].global),12&O[0]&&(0,n.VHj)(f,"vc-toggle",d[42].id===d[2])},d:function(A){A&&(0,n.ogt)(f),h=!1,x()}}}function ze(d){for(var f,u=d[42].toolbarList,c=[],h=0;h<u.length;h+=1)c[h]=We(Y(d,u,h));return{c:function(){for(var x=0;x<c.length;x+=1)c[x].c();f=(0,n.cSb)()},m:function(x,S){for(var L=0;L<c.length;L+=1)c[L].m(x,S);(0,n.$Tr)(x,f,S)},p:function(x,S){if(32780&S[0]){var L;for(u=x[42].toolbarList,L=0;L<u.length;L+=1){var A=Y(x,u,L);c[L]?c[L].p(A,S):(c[L]=We(A),c[L].c(),c[L].m(f.parentNode,f))}for(;L<c.length;L+=1)c[L].d(1);c.length=u.length}},d:function(x){(0,n.RMB)(c,x),x&&(0,n.ogt)(f)}}}function et(d){var f,u,c,h,x,S,L,A,O,N,ie,X,ae,re,ye,xe,Ge,qe,Ve,ot,Dt;function Gt(Te){d[24](Te)}function zt(Te){d[25](Te)}var Ct={};d[0]!==void 0&&(Ct.show=d[0]),d[1]!==void 0&&(Ct.position=d[1]),u=new le({props:Ct}),n.VnY.push(function(){return(0,n.akz)(u,"show",Gt)}),n.VnY.push(function(){return(0,n.akz)(u,"position",zt)}),u.$on("click",d[11]);for(var Mt=Object.entries(d[3]),vt=[],Wt=0;Wt<Mt.length;Wt+=1)vt[Wt]=Pe(te(d,Mt,Wt));for(var qt=Object.entries(d[3]),xt=[],wt=0;wt<qt.length;wt+=1)xt[wt]=Le(ge(d,qt,wt));for(var bt=Object.entries(d[3]),Ke=[],ct=0;ct<bt.length;ct+=1)Ke[ct]=$e(ce(d,bt,ct));for(var gt=Object.entries(d[3]),Xe=[],Kt=0;Kt<gt.length;Kt+=1)Xe[Kt]=ze(se(d,gt,Kt));return{c:function(){var Te,Ye;f=(0,n.bGB)("div"),(0,n.YCL)(u.$$.fragment),x=(0,n.DhX)(),S=(0,n.bGB)("div"),L=(0,n.DhX)(),A=(0,n.bGB)("div"),O=(0,n.bGB)("div");for(var mt=0;mt<vt.length;mt+=1)vt[mt].c();N=(0,n.DhX)(),ie=(0,n.bGB)("div");for(var St=0;St<xt.length;St+=1)xt[St].c();X=(0,n.DhX)(),ae=(0,n.bGB)("div");for(var Pt=0;Pt<Ke.length;Pt+=1)Ke[Pt].c();re=(0,n.DhX)(),ye=(0,n.bGB)("div");for(var yt=0;yt<Xe.length;yt+=1)Xe[yt].c();xe=(0,n.DhX)(),(Ge=(0,n.bGB)("i")).textContent="Hide",(0,n.Ljt)(S,"class","vc-mask"),(0,n.czc)(S,"display",d[10]?"block":"none"),(0,n.Ljt)(O,"class","vc-tabbar"),(0,n.Ljt)(ie,"class","vc-topbar"),(0,n.Ljt)(ae,"class","vc-content"),(0,n.VHj)(ae,"vc-has-topbar",((Te=d[3][d[2]])==null||(Ye=Te.topbarList)==null?void 0:Ye.length)>0),(0,n.Ljt)(Ge,"class","vc-tool vc-global-tool vc-tool-last vc-hide"),(0,n.Ljt)(ye,"class","vc-toolbar"),(0,n.Ljt)(A,"class","vc-panel"),(0,n.czc)(A,"display",d[9]?"block":"none"),(0,n.Ljt)(f,"id","__vconsole"),(0,n.Ljt)(f,"style",qe=d[7]?"font-size:"+d[7]+";":""),(0,n.Ljt)(f,"data-theme",d[5]),(0,n.VHj)(f,"vc-toggle",d[8])},m:function(Te,Ye){(0,n.$Tr)(Te,f,Ye),(0,n.yef)(u,f,null),(0,n.R3I)(f,x),(0,n.R3I)(f,S),(0,n.R3I)(f,L),(0,n.R3I)(f,A),(0,n.R3I)(A,O);for(var mt=0;mt<vt.length;mt+=1)vt[mt].m(O,null);(0,n.R3I)(A,N),(0,n.R3I)(A,ie);for(var St=0;St<xt.length;St+=1)xt[St].m(ie,null);(0,n.R3I)(A,X),(0,n.R3I)(A,ae);for(var Pt=0;Pt<Ke.length;Pt+=1)Ke[Pt].m(ae,null);d[29](ae),(0,n.R3I)(A,re),(0,n.R3I)(A,ye);for(var yt=0;yt<Xe.length;yt+=1)Xe[yt].m(ye,null);(0,n.R3I)(ye,xe),(0,n.R3I)(ye,Ge),Ve=!0,ot||(Dt=[(0,n.oLt)(S,"click",d[12]),(0,n.oLt)(ae,"touchstart",d[16]),(0,n.oLt)(ae,"touchmove",d[17]),(0,n.oLt)(ae,"touchend",d[18]),(0,n.oLt)(ae,"scroll",d[19]),(0,n.oLt)(Ge,"click",d[12]),(0,n.oLt)(f,"touchstart",d[20].touchStart,!0),(0,n.oLt)(f,"touchmove",d[20].touchMove,!0),(0,n.oLt)(f,"touchend",d[20].touchEnd,!0)],ot=!0)},p:function(Te,Ye){var mt,St,Pt={};if(!c&&1&Ye[0]&&(c=!0,Pt.show=Te[0],(0,n.hjT)(function(){return c=!1})),!h&&2&Ye[0]&&(h=!0,Pt.position=Te[1],(0,n.hjT)(function(){return h=!1})),u.$set(Pt),(!Ve||1024&Ye[0])&&(0,n.czc)(S,"display",Te[10]?"block":"none"),8204&Ye[0]){var yt;for(Mt=Object.entries(Te[3]),yt=0;yt<Mt.length;yt+=1){var In=te(Te,Mt,yt);vt[yt]?vt[yt].p(In,Ye):(vt[yt]=Pe(In),vt[yt].c(),vt[yt].m(O,null))}for(;yt<vt.length;yt+=1)vt[yt].d(1);vt.length=Mt.length}if(16396&Ye[0]){var $t;for(qt=Object.entries(Te[3]),$t=0;$t<qt.length;$t+=1){var En=ge(Te,qt,$t);xt[$t]?xt[$t].p(En,Ye):(xt[$t]=Le(En),xt[$t].c(),xt[$t].m(ie,null))}for(;$t<xt.length;$t+=1)xt[$t].d(1);xt.length=qt.length}if(28&Ye[0]){var Ht;for(bt=Object.entries(Te[3]),Ht=0;Ht<bt.length;Ht+=1){var Tn=ce(Te,bt,Ht);Ke[Ht]?Ke[Ht].p(Tn,Ye):(Ke[Ht]=$e(Tn),Ke[Ht].c(),Ke[Ht].m(ae,null))}for(;Ht<Ke.length;Ht+=1)Ke[Ht].d(1);Ke.length=bt.length}if(12&Ye[0]&&(0,n.VHj)(ae,"vc-has-topbar",((mt=Te[3][Te[2]])==null||(St=mt.topbarList)==null?void 0:St.length)>0),32780&Ye[0]){var At;for(gt=Object.entries(Te[3]),At=0;At<gt.length;At+=1){var yn=se(Te,gt,At);Xe[At]?Xe[At].p(yn,Ye):(Xe[At]=ze(yn),Xe[At].c(),Xe[At].m(ye,xe))}for(;At<Xe.length;At+=1)Xe[At].d(1);Xe.length=gt.length}(!Ve||512&Ye[0])&&(0,n.czc)(A,"display",Te[9]?"block":"none"),(!Ve||128&Ye[0]&&qe!==(qe=Te[7]?"font-size:"+Te[7]+";":""))&&(0,n.Ljt)(f,"style",qe),(!Ve||32&Ye[0])&&(0,n.Ljt)(f,"data-theme",Te[5]),256&Ye[0]&&(0,n.VHj)(f,"vc-toggle",Te[8])},i:function(Te){Ve||((0,n.Ui)(u.$$.fragment,Te),Ve=!0)},o:function(Te){(0,n.etI)(u.$$.fragment,Te),Ve=!1},d:function(Te){Te&&(0,n.ogt)(f),(0,n.vpE)(u),(0,n.RMB)(vt,Te),(0,n.RMB)(xt,Te),(0,n.RMB)(Ke,Te),d[29](null),(0,n.RMB)(Xe,Te),ot=!1,(0,n.j7q)(Dt)}}}function Je(d,f,u){var c,h,x=f.theme,S=x===void 0?"":x,L=f.disableScrolling,A=L!==void 0&&L,O=f.show,N=O!==void 0&&O,ie=f.showSwitchButton,X=ie===void 0||ie,ae=f.switchButtonPosition,re=ae===void 0?{x:0,y:0}:ae,ye=f.activedPluginId,xe=ye===void 0?"":ye,Ge=f.pluginList,qe=Ge===void 0?{}:Ge,Ve=f.divContentInner,ot=Ve===void 0?void 0:Ve,Dt=(0,l.x)(),Gt=!1,zt="",Ct=!1,Mt=!1,vt=!1,Wt=!0,qt=0,xt=null,wt={};(0,l.H3)(function(){var Te=document.querySelectorAll('[name="viewport"]');if(Te&&Te[0]){var Ye=(Te[Te.length-1].getAttribute("content")||"").match(/initial\-scale\=\d+(\.\d+)?/),mt=Ye?parseFloat(Ye[0].split("=")[1]):1;mt!==1&&u(7,zt=Math.floor(1/mt*13)+"px")}fe.use&&fe.use(),h=ee.x.subscribe(function(St){N&&qt!==St.updateTime&&(qt=St.updateTime,bt())})}),(0,l.ev)(function(){fe.unuse&&fe.unuse(),h&&h()});var bt=function(){!A&&Wt&&c&&u(6,c.scrollTop=c.scrollHeight-c.offsetHeight,c)},Ke=function(Te){Te!==xe&&(u(2,xe=Te),Dt("changePanel",{pluginId:Te}),setTimeout(function(){c&&u(6,c.scrollTop=wt[xe]||0,c)},0))},ct=function(Te,Ye,mt){var St=qe[Ye].topbarList[mt],Pt=!0;if(e.mf(St.onClick)&&(Pt=St.onClick.call(Te.target,Te,St.data)),Pt!==!1){for(var yt=0;yt<qe[Ye].topbarList.length;yt++)u(3,qe[Ye].topbarList[yt].actived=mt===yt,qe);u(3,qe)}},gt=function(Te,Ye,mt){var St=qe[Ye].toolbarList[mt];e.mf(St.onClick)&&St.onClick.call(Te.target,Te,St.data)},Xe={tapTime:700,tapBoundary:10,lastTouchStartTime:0,touchstartX:0,touchstartY:0,touchHasMoved:!1,targetElem:null},Kt={touchStart:function(Te){if(Xe.lastTouchStartTime===0){var Ye=Te.targetTouches[0];Xe.touchstartX=Ye.pageX,Xe.touchstartY=Ye.pageY,Xe.lastTouchStartTime=Te.timeStamp,Xe.targetElem=Te.target.nodeType===Node.TEXT_NODE?Te.target.parentNode:Te.target}},touchMove:function(Te){var Ye=Te.changedTouches[0];(Math.abs(Ye.pageX-Xe.touchstartX)>Xe.tapBoundary||Math.abs(Ye.pageY-Xe.touchstartY)>Xe.tapBoundary)&&(Xe.touchHasMoved=!0)},touchEnd:function(Te){if(Xe.touchHasMoved===!1&&Te.timeStamp-Xe.lastTouchStartTime<Xe.tapTime&&Xe.targetElem!=null){var Ye=!1;switch(Xe.targetElem.tagName.toLowerCase()){case"textarea":Ye=!0;break;case"input":switch(Xe.targetElem.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":Ye=!1;break;default:Ye=!Xe.targetElem.disabled&&!Xe.targetElem.readOnly}}Ye?Xe.targetElem.focus():Te.preventDefault();var mt=Te.changedTouches[0],St=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,screenX:mt.screenX,screenY:mt.screenY,clientX:mt.clientX,clientY:mt.clientY});Xe.targetElem.dispatchEvent(St)}Xe.lastTouchStartTime=0,Xe.touchHasMoved=!1,Xe.targetElem=null}};return d.$$set=function(Te){"theme"in Te&&u(5,S=Te.theme),"disableScrolling"in Te&&u(21,A=Te.disableScrolling),"show"in Te&&u(22,N=Te.show),"showSwitchButton"in Te&&u(0,X=Te.showSwitchButton),"switchButtonPosition"in Te&&u(1,re=Te.switchButtonPosition),"activedPluginId"in Te&&u(2,xe=Te.activedPluginId),"pluginList"in Te&&u(3,qe=Te.pluginList),"divContentInner"in Te&&u(4,ot=Te.divContentInner)},d.$$.update=function(){12582912&d.$$.dirty[0]&&(N===!0?(u(9,Mt=!0),u(10,vt=!0),xt&&clearTimeout(xt),u(23,xt=setTimeout(function(){u(8,Ct=!0),bt()},10))):(u(8,Ct=!1),xt&&clearTimeout(xt),u(23,xt=setTimeout(function(){u(9,Mt=!1),u(10,vt=!1)},330))))},[X,re,xe,qe,ot,S,c,zt,Ct,Mt,vt,function(Te){Dt("show",{show:!0})},function(Te){Dt("show",{show:!1})},Ke,ct,gt,function(Te){var Ye=c.scrollTop,mt=c.scrollHeight,St=Ye+c.offsetHeight;Ye===0?(u(6,c.scrollTop=1,c),c.scrollTop===0&&Te.target.classList&&!Te.target.classList.contains("vc-cmd-input")&&(Gt=!0)):St===mt&&(u(6,c.scrollTop=Ye-1,c),c.scrollTop===Ye&&Te.target.classList&&!Te.target.classList.contains("vc-cmd-input")&&(Gt=!0))},function(Te){Gt&&Te.preventDefault()},function(Te){Gt=!1},function(Te){N&&(Wt=c.scrollTop+c.offsetHeight>=c.scrollHeight-50,wt[xe]=c.scrollTop)},Kt,A,N,xt,function(Te){u(0,X=Te)},function(Te){u(1,re=Te)},function(Te){return Ke(Te.id)},function(Te,Ye,mt){return ct(mt,Te.id,Ye)},function(Te){n.VnY[Te?"unshift":"push"](function(){u(4,ot=Te)})},function(Te){n.VnY[Te?"unshift":"push"](function(){u(6,c=Te)})},function(Te,Ye,mt){return gt(mt,Te.id,Ye)}]}var Ze=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,Je,et,n.N8,{theme:5,disableScrolling:21,show:22,showSwitchButton:0,switchButtonPosition:1,activedPluginId:2,pluginList:3,divContentInner:4},null,[-1,-1]),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"theme",get:function(){return this.$$.ctx[5]},set:function(u){this.$$set({theme:u}),(0,n.yl1)()}},{key:"disableScrolling",get:function(){return this.$$.ctx[21]},set:function(u){this.$$set({disableScrolling:u}),(0,n.yl1)()}},{key:"show",get:function(){return this.$$.ctx[22]},set:function(u){this.$$set({show:u}),(0,n.yl1)()}},{key:"showSwitchButton",get:function(){return this.$$.ctx[0]},set:function(u){this.$$set({showSwitchButton:u}),(0,n.yl1)()}},{key:"switchButtonPosition",get:function(){return this.$$.ctx[1]},set:function(u){this.$$set({switchButtonPosition:u}),(0,n.yl1)()}},{key:"activedPluginId",get:function(){return this.$$.ctx[2]},set:function(u){this.$$set({activedPluginId:u}),(0,n.yl1)()}},{key:"pluginList",get:function(){return this.$$.ctx[3]},set:function(u){this.$$set({pluginList:u}),(0,n.yl1)()}},{key:"divContentInner",get:function(){return this.$$.ctx[4]},set:function(u){this.$$set({divContentInner:u}),(0,n.yl1)()}}]),f}(n.f_C),tt=Ze,nt=function(){function d(u,c){c===void 0&&(c="newPlugin"),this.isReady=!1,this.eventMap=new Map,this.exporter=void 0,this._id=void 0,this._name=void 0,this._vConsole=void 0,this.id=u,this.name=c,this.isReady=!1}var f=d.prototype;return f.on=function(u,c){return this.eventMap.set(u,c),this},f.onRemove=function(){this.unbindExporter()},f.trigger=function(u,c){var h=this.eventMap.get(u);if(typeof h=="function")h.call(this,c);else{var x="on"+u.charAt(0).toUpperCase()+u.slice(1);typeof this[x]=="function"&&this[x].call(this,c)}return this},f.bindExporter=function(){if(this._vConsole&&this.exporter){var u=this.id==="default"?"log":this.id;this._vConsole[u]=this.exporter}},f.unbindExporter=function(){var u=this.id==="default"?"log":this.id;this._vConsole&&this._vConsole[u]&&(this._vConsole[u]=void 0)},f.getUniqueID=function(u){return u===void 0&&(u=""),(0,e.QI)(u)},(0,s.Z)(d,[{key:"id",get:function(){return this._id},set:function(u){if(typeof u!="string")throw"[vConsole] Plugin ID must be a string.";if(!u)throw"[vConsole] Plugin ID cannot be empty.";this._id=u.toLowerCase()}},{key:"name",get:function(){return this._name},set:function(u){if(typeof u!="string")throw"[vConsole] Plugin name must be a string.";if(!u)throw"[vConsole] Plugin name cannot be empty.";this._name=u}},{key:"vConsole",get:function(){return this._vConsole||void 0},set:function(u){if(!u)throw"[vConsole] vConsole cannot be empty";this._vConsole=u,this.bindExporter()}}]),d}(),it=function(d){function f(c,h,x,S){var L;return(L=d.call(this,c,h)||this).CompClass=void 0,L.compInstance=void 0,L.initialProps=void 0,L.CompClass=x,L.initialProps=S,L}(0,a.Z)(f,d);var u=f.prototype;return u.onReady=function(){this.isReady=!0},u.onRenderTab=function(c){var h=document.createElement("div");this.compInstance=new this.CompClass({target:h,props:this.initialProps}),c(h.firstElementChild)},u.onRemove=function(){d.prototype.onRemove&&d.prototype.onRemove.call(this),this.compInstance&&this.compInstance.$destroy()},f}(nt),lt=__webpack_require__(8665),Tt=__webpack_require__(9923),j=__webpack_require__(6958);function F(d){var f,u;return(f=new j.Z({props:{name:d[0]?"success":"copy"}})).$on("click",d[1]),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:function(c,h){var x={};1&h[0]&&(x.name=c[0]?"success":"copy"),f.$set(x)},i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function be(d,f,u){var c=f.content,h=c===void 0?"":c,x=f.handler,S=x===void 0?void 0:x,L={target:document.documentElement},A=!1;return d.$$set=function(O){"content"in O&&u(2,h=O.content),"handler"in O&&u(3,S=O.handler)},[A,function(O){(function(N,ie){var X=(ie===void 0?{}:ie).target,ae=X===void 0?document.body:X,re=document.createElement("textarea"),ye=document.activeElement;re.value=N,re.setAttribute("readonly",""),re.style.contain="strict",re.style.position="absolute",re.style.left="-9999px",re.style.fontSize="12pt";var xe=document.getSelection(),Ge=!1;xe.rangeCount>0&&(Ge=xe.getRangeAt(0)),ae.append(re),re.select(),re.selectionStart=0,re.selectionEnd=N.length;var qe=!1;try{qe=document.execCommand("copy")}catch{}re.remove(),Ge&&(xe.removeAllRanges(),xe.addRange(Ge)),ye&&ye.focus()})(e.mf(S)?S(h)||"":e.Kn(h)||e.kJ(h)?e.hZ(h):h,L),u(0,A=!0),setTimeout(function(){u(0,A=!1)},600)},h,S]}var De=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,be,F,n.N8,{content:2,handler:3}),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"content",get:function(){return this.$$.ctx[2]},set:function(u){this.$$set({content:u}),(0,n.yl1)()}},{key:"handler",get:function(){return this.$$.ctx[3]},set:function(u){this.$$set({handler:u}),(0,n.yl1)()}}]),f}(n.f_C),Ae=De,Be=__webpack_require__(845),je={};Be.Z&&Be.Z.locals&&(je.locals=Be.Z.locals);var G,Se=0,Z={};Z.styleTagTransform=k(),Z.setAttributes=w(),Z.insert=E().bind(null,"head"),Z.domAPI=y(),Z.insertStyleElement=C(),je.use=function(d){return Z.options=d||{},Se++||(G=_()(Be.Z,Z)),je},je.unuse=function(){Se>0&&!--Se&&(G(),G=null)};var H=je;function I(d){var f,u,c,h=e.rE(d[1])+"";return{c:function(){f=(0,n.bGB)("i"),u=(0,n.fLW)(h),c=(0,n.fLW)(":"),(0,n.Ljt)(f,"class","vc-log-key"),(0,n.VHj)(f,"vc-log-key-symbol",d[2]==="symbol"),(0,n.VHj)(f,"vc-log-key-private",d[2]==="private")},m:function(x,S){(0,n.$Tr)(x,f,S),(0,n.R3I)(f,u),(0,n.$Tr)(x,c,S)},p:function(x,S){2&S&&h!==(h=e.rE(x[1])+"")&&(0,n.rTO)(u,h),4&S&&(0,n.VHj)(f,"vc-log-key-symbol",x[2]==="symbol"),4&S&&(0,n.VHj)(f,"vc-log-key-private",x[2]==="private")},d:function(x){x&&(0,n.ogt)(f),x&&(0,n.ogt)(c)}}}function oe(d){var f;return{c:function(){f=(0,n.fLW)(d[3])},m:function(u,c){(0,n.$Tr)(u,f,c)},p:function(u,c){8&c&&(0,n.rTO)(f,u[3])},d:function(u){u&&(0,n.ogt)(f)}}}function pe(d){var f,u;return{c:function(){f=new n.FWw,u=(0,n.cSb)(),f.a=u},m:function(c,h){f.m(d[3],c,h),(0,n.$Tr)(c,u,h)},p:function(c,h){8&h&&f.p(c[3])},d:function(c){c&&(0,n.ogt)(u),c&&f.d()}}}function Oe(d){var f,u,c,h=d[1]!==void 0&&I(d);function x(A,O){return A[5]||A[4]!=="string"?oe:pe}var S=x(d),L=S(d);return{c:function(){h&&h.c(),f=(0,n.DhX)(),u=(0,n.bGB)("i"),L.c(),(0,n.Ljt)(u,"class",c="vc-log-val vc-log-val-"+d[4]),(0,n.Ljt)(u,"style",d[0]),(0,n.VHj)(u,"vc-log-val-haskey",d[1]!==void 0)},m:function(A,O){h&&h.m(A,O),(0,n.$Tr)(A,f,O),(0,n.$Tr)(A,u,O),L.m(u,null)},p:function(A,O){var N=O[0];A[1]!==void 0?h?h.p(A,N):((h=I(A)).c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null),S===(S=x(A))&&L?L.p(A,N):(L.d(1),(L=S(A))&&(L.c(),L.m(u,null))),16&N&&c!==(c="vc-log-val vc-log-val-"+A[4])&&(0,n.Ljt)(u,"class",c),1&N&&(0,n.Ljt)(u,"style",A[0]),18&N&&(0,n.VHj)(u,"vc-log-val-haskey",A[1]!==void 0)},i:n.ZTd,o:n.ZTd,d:function(A){h&&h.d(A),A&&(0,n.ogt)(f),A&&(0,n.ogt)(u),L.d()}}}function Re(d,f,u){var c=f.origData,h=f.style,x=h===void 0?"":h,S=f.dataKey,L=S===void 0?void 0:S,A=f.keyType,O=A===void 0?"":A,N="",ie="",X=!1,ae=!1;return(0,l.H3)(function(){H.use()}),(0,l.ev)(function(){H.unuse()}),d.$$set=function(re){"origData"in re&&u(6,c=re.origData),"style"in re&&u(0,x=re.style),"dataKey"in re&&u(1,L=re.dataKey),"keyType"in re&&u(2,O=re.keyType)},d.$$.update=function(){if(250&d.$$.dirty&&!X){u(5,ae=L!==void 0);var re=(0,lt.LH)(c,ae);u(4,ie=re.valueType),u(3,N=re.text),ae||ie!=="string"||u(3,N=e.Ak(N.replace("\\n",`
`).replace("\\t","	"))),u(7,X=!0)}},[x,L,O,N,ie,ae,c,X]}var Fe=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,Re,Oe,n.N8,{origData:6,style:0,dataKey:1,keyType:2}),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"origData",get:function(){return this.$$.ctx[6]},set:function(u){this.$$set({origData:u}),(0,n.yl1)()}},{key:"style",get:function(){return this.$$.ctx[0]},set:function(u){this.$$set({style:u}),(0,n.yl1)()}},{key:"dataKey",get:function(){return this.$$.ctx[1]},set:function(u){this.$$set({dataKey:u}),(0,n.yl1)()}},{key:"keyType",get:function(){return this.$$.ctx[2]},set:function(u){this.$$set({keyType:u}),(0,n.yl1)()}}]),f}(n.f_C),Ce=Fe,Ne=__webpack_require__(1237),Ee={};Ne.Z&&Ne.Z.locals&&(Ee.locals=Ne.Z.locals);var Ie,ke=0,He={};He.styleTagTransform=k(),He.setAttributes=w(),He.insert=E().bind(null,"head"),He.domAPI=y(),He.insertStyleElement=C(),Ee.use=function(d){return He.options=d||{},ke++||(Ie=_()(Ne.Z,He)),Ee},Ee.unuse=function(){ke>0&&!--ke&&(Ie(),Ie=null)};var ut=Ee;function Yt(d,f,u){var c=d.slice();return c[18]=f[u],c[20]=u,c}function It(d,f,u){var c=d.slice();return c[18]=f[u],c}function fn(d,f,u){var c=d.slice();return c[18]=f[u],c[20]=u,c}function rn(d){for(var f,u,c,h,x,S,L,A=[],O=new Map,N=[],ie=new Map,X=[],ae=new Map,re=d[5],ye=function(Ke){return Ke[18]},xe=0;xe<re.length;xe+=1){var Ge=fn(d,re,xe),qe=ye(Ge);O.set(qe,A[xe]=tn(qe,Ge))}for(var Ve=d[9]<d[5].length&&cn(d),ot=d[7],Dt=function(Ke){return Ke[18]},Gt=0;Gt<ot.length;Gt+=1){var zt=It(d,ot,Gt),Ct=Dt(zt);ie.set(Ct,N[Gt]=mn(Ct,zt))}for(var Mt=d[6],vt=function(Ke){return Ke[18]},Wt=0;Wt<Mt.length;Wt+=1){var qt=Yt(d,Mt,Wt),xt=vt(qt);ae.set(xt,X[Wt]=de(xt,qt))}var wt=d[10]<d[6].length&&_e(d),bt=d[8]&&me(d);return{c:function(){f=(0,n.bGB)("div");for(var Ke=0;Ke<A.length;Ke+=1)A[Ke].c();u=(0,n.DhX)(),Ve&&Ve.c(),c=(0,n.DhX)();for(var ct=0;ct<N.length;ct+=1)N[ct].c();h=(0,n.DhX)();for(var gt=0;gt<X.length;gt+=1)X[gt].c();x=(0,n.DhX)(),wt&&wt.c(),S=(0,n.DhX)(),bt&&bt.c(),(0,n.Ljt)(f,"class","vc-log-tree-child")},m:function(Ke,ct){(0,n.$Tr)(Ke,f,ct);for(var gt=0;gt<A.length;gt+=1)A[gt].m(f,null);(0,n.R3I)(f,u),Ve&&Ve.m(f,null),(0,n.R3I)(f,c);for(var Xe=0;Xe<N.length;Xe+=1)N[Xe].m(f,null);(0,n.R3I)(f,h);for(var Kt=0;Kt<X.length;Kt+=1)X[Kt].m(f,null);(0,n.R3I)(f,x),wt&&wt.m(f,null),(0,n.R3I)(f,S),bt&&bt.m(f,null),L=!0},p:function(Ke,ct){16928&ct&&(re=Ke[5],(0,n.dvw)(),A=(0,n.GQg)(A,ct,ye,1,Ke,re,O,f,n.cly,tn,u,fn),(0,n.gbL)()),Ke[9]<Ke[5].length?Ve?Ve.p(Ke,ct):((Ve=cn(Ke)).c(),Ve.m(f,c)):Ve&&(Ve.d(1),Ve=null),16512&ct&&(ot=Ke[7],(0,n.dvw)(),N=(0,n.GQg)(N,ct,Dt,1,Ke,ot,ie,f,n.cly,mn,h,It),(0,n.gbL)()),17472&ct&&(Mt=Ke[6],(0,n.dvw)(),X=(0,n.GQg)(X,ct,vt,1,Ke,Mt,ae,f,n.cly,de,x,Yt),(0,n.gbL)()),Ke[10]<Ke[6].length?wt?wt.p(Ke,ct):((wt=_e(Ke)).c(),wt.m(f,S)):wt&&(wt.d(1),wt=null),Ke[8]?bt?(bt.p(Ke,ct),256&ct&&(0,n.Ui)(bt,1)):((bt=me(Ke)).c(),(0,n.Ui)(bt,1),bt.m(f,null)):bt&&((0,n.dvw)(),(0,n.etI)(bt,1,1,function(){bt=null}),(0,n.gbL)())},i:function(Ke){if(!L){for(var ct=0;ct<re.length;ct+=1)(0,n.Ui)(A[ct]);for(var gt=0;gt<ot.length;gt+=1)(0,n.Ui)(N[gt]);for(var Xe=0;Xe<Mt.length;Xe+=1)(0,n.Ui)(X[Xe]);(0,n.Ui)(bt),L=!0}},o:function(Ke){for(var ct=0;ct<A.length;ct+=1)(0,n.etI)(A[ct]);for(var gt=0;gt<N.length;gt+=1)(0,n.etI)(N[gt]);for(var Xe=0;Xe<X.length;Xe+=1)(0,n.etI)(X[Xe]);(0,n.etI)(bt),L=!1},d:function(Ke){Ke&&(0,n.ogt)(f);for(var ct=0;ct<A.length;ct+=1)A[ct].d();Ve&&Ve.d();for(var gt=0;gt<N.length;gt+=1)N[gt].d();for(var Xe=0;Xe<X.length;Xe+=1)X[Xe].d();wt&&wt.d(),bt&&bt.d()}}}function sn(d){var f,u;return f=new rt({props:{origData:d[14](d[18]),dataKey:d[18]}}),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:function(c,h){var x={};32&h&&(x.origData=c[14](c[18])),32&h&&(x.dataKey=c[18]),f.$set(x)},i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function tn(d,f){var u,c,h,x=f[20]<f[9]&&sn(f);return{key:d,first:null,c:function(){u=(0,n.cSb)(),x&&x.c(),c=(0,n.cSb)(),this.first=u},m:function(S,L){(0,n.$Tr)(S,u,L),x&&x.m(S,L),(0,n.$Tr)(S,c,L),h=!0},p:function(S,L){(f=S)[20]<f[9]?x?(x.p(f,L),544&L&&(0,n.Ui)(x,1)):((x=sn(f)).c(),(0,n.Ui)(x,1),x.m(c.parentNode,c)):x&&((0,n.dvw)(),(0,n.etI)(x,1,1,function(){x=null}),(0,n.gbL)())},i:function(S){h||((0,n.Ui)(x),h=!0)},o:function(S){(0,n.etI)(x),h=!1},d:function(S){S&&(0,n.ogt)(u),x&&x.d(S),S&&(0,n.ogt)(c)}}}function cn(d){var f,u,c,h,x=d[12](d[5].length-d[9])+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.fLW)(x),(0,n.Ljt)(f,"class","vc-log-tree-loadmore")},m:function(S,L){(0,n.$Tr)(S,f,L),(0,n.R3I)(f,u),c||(h=(0,n.oLt)(f,"click",d[16]),c=!0)},p:function(S,L){544&L&&x!==(x=S[12](S[5].length-S[9])+"")&&(0,n.rTO)(u,x)},d:function(S){S&&(0,n.ogt)(f),c=!1,h()}}}function mn(d,f){var u,c,h;return c=new rt({props:{origData:f[14](f[18]),dataKey:String(f[18]),keyType:"symbol"}}),{key:d,first:null,c:function(){u=(0,n.cSb)(),(0,n.YCL)(c.$$.fragment),this.first=u},m:function(x,S){(0,n.$Tr)(x,u,S),(0,n.yef)(c,x,S),h=!0},p:function(x,S){f=x;var L={};128&S&&(L.origData=f[14](f[18])),128&S&&(L.dataKey=String(f[18])),c.$set(L)},i:function(x){h||((0,n.Ui)(c.$$.fragment,x),h=!0)},o:function(x){(0,n.etI)(c.$$.fragment,x),h=!1},d:function(x){x&&(0,n.ogt)(u),(0,n.vpE)(c,x)}}}function W(d){var f,u;return f=new rt({props:{origData:d[14](d[18]),dataKey:d[18],keyType:"private"}}),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:function(c,h){var x={};64&h&&(x.origData=c[14](c[18])),64&h&&(x.dataKey=c[18]),f.$set(x)},i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function de(d,f){var u,c,h,x=f[20]<f[10]&&W(f);return{key:d,first:null,c:function(){u=(0,n.cSb)(),x&&x.c(),c=(0,n.cSb)(),this.first=u},m:function(S,L){(0,n.$Tr)(S,u,L),x&&x.m(S,L),(0,n.$Tr)(S,c,L),h=!0},p:function(S,L){(f=S)[20]<f[10]?x?(x.p(f,L),1088&L&&(0,n.Ui)(x,1)):((x=W(f)).c(),(0,n.Ui)(x,1),x.m(c.parentNode,c)):x&&((0,n.dvw)(),(0,n.etI)(x,1,1,function(){x=null}),(0,n.gbL)())},i:function(S){h||((0,n.Ui)(x),h=!0)},o:function(S){(0,n.etI)(x),h=!1},d:function(S){S&&(0,n.ogt)(u),x&&x.d(S),S&&(0,n.ogt)(c)}}}function _e(d){var f,u,c,h,x=d[12](d[6].length-d[10])+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.fLW)(x),(0,n.Ljt)(f,"class","vc-log-tree-loadmore")},m:function(S,L){(0,n.$Tr)(S,f,L),(0,n.R3I)(f,u),c||(h=(0,n.oLt)(f,"click",d[17]),c=!0)},p:function(S,L){1088&L&&x!==(x=S[12](S[6].length-S[10])+"")&&(0,n.rTO)(u,x)},d:function(S){S&&(0,n.ogt)(f),c=!1,h()}}}function me(d){var f,u;return f=new rt({props:{origData:d[14]("__proto__"),dataKey:"__proto__",keyType:"private"}}),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:n.ZTd,i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function we(d){var f,u,c,h,x,S,L;c=new Ce({props:{origData:d[0],dataKey:d[1],keyType:d[2]}});var A=d[4]&&d[3]&&rn(d);return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("div"),(0,n.YCL)(c.$$.fragment),h=(0,n.DhX)(),A&&A.c(),(0,n.Ljt)(u,"class","vc-log-tree-node"),(0,n.Ljt)(f,"class","vc-log-tree"),(0,n.VHj)(f,"vc-toggle",d[3]),(0,n.VHj)(f,"vc-is-tree",d[4])},m:function(O,N){(0,n.$Tr)(O,f,N),(0,n.R3I)(f,u),(0,n.yef)(c,u,null),(0,n.R3I)(f,h),A&&A.m(f,null),x=!0,S||(L=(0,n.oLt)(u,"click",d[13]),S=!0)},p:function(O,N){var ie=N[0],X={};1&ie&&(X.origData=O[0]),2&ie&&(X.dataKey=O[1]),4&ie&&(X.keyType=O[2]),c.$set(X),O[4]&&O[3]?A?(A.p(O,ie),24&ie&&(0,n.Ui)(A,1)):((A=rn(O)).c(),(0,n.Ui)(A,1),A.m(f,null)):A&&((0,n.dvw)(),(0,n.etI)(A,1,1,function(){A=null}),(0,n.gbL)()),8&ie&&(0,n.VHj)(f,"vc-toggle",O[3]),16&ie&&(0,n.VHj)(f,"vc-is-tree",O[4])},i:function(O){x||((0,n.Ui)(c.$$.fragment,O),(0,n.Ui)(A),x=!0)},o:function(O){(0,n.etI)(c.$$.fragment,O),(0,n.etI)(A),x=!1},d:function(O){O&&(0,n.ogt)(f),(0,n.vpE)(c),A&&A.d(),S=!1,L()}}}function Qe(d,f,u){var c,h,x,S=f.origData,L=f.dataKey,A=L===void 0?void 0:L,O=f.keyType,N=O===void 0?"":O,ie=!1,X=!1,ae=!1,re=!1,ye=50,xe=50;(0,l.H3)(function(){ut.use()}),(0,l.ev)(function(){ut.unuse()});var Ge=function(qe){qe==="enum"?u(9,ye+=50):qe==="nonEnum"&&u(10,xe+=50)};return d.$$set=function(qe){"origData"in qe&&u(0,S=qe.origData),"dataKey"in qe&&u(1,A=qe.dataKey),"keyType"in qe&&u(2,N=qe.keyType)},d.$$.update=function(){33017&d.$$.dirty&&(ie||(u(4,ae=!(S instanceof lt.Tg)&&(e.kJ(S)||e.Kn(S))),u(15,ie=!0)),ae&&X&&(u(5,c=c||e.qr(e.MH(S))),u(6,h=h||e.qr(e.QK(S))),u(7,x=x||e._D(S)),u(8,re=e.Kn(S)&&h.indexOf("__proto__")===-1)))},[S,A,N,X,ae,c,h,x,re,ye,xe,Ge,function(qe){return"(..."+qe+" Key"+(qe>1?"s":"")+" Left)"},function(){u(3,X=!X)},function(qe){try{return S[qe]}catch{return new lt.Tg}},ie,function(){return Ge("enum")},function(){return Ge("nonEnum")}]}var rt=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,Qe,we,n.N8,{origData:0,dataKey:1,keyType:2}),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"origData",get:function(){return this.$$.ctx[0]},set:function(u){this.$$set({origData:u}),(0,n.yl1)()}},{key:"dataKey",get:function(){return this.$$.ctx[1]},set:function(u){this.$$set({dataKey:u}),(0,n.yl1)()}},{key:"keyType",get:function(){return this.$$.ctx[2]},set:function(u){this.$$set({keyType:u}),(0,n.yl1)()}}]),f}(n.f_C),at=rt,st=__webpack_require__(7147),dt={};st.Z&&st.Z.locals&&(dt.locals=st.Z.locals);var ft,ht=0,_t={};_t.styleTagTransform=k(),_t.setAttributes=w(),_t.insert=E().bind(null,"head"),_t.domAPI=y(),_t.insertStyleElement=C(),dt.use=function(d){return _t.options=d||{},ht++||(ft=_()(st.Z,_t)),dt},dt.unuse=function(){ht>0&&!--ht&&(ft(),ft=null)};var on=dt;function ln(d,f,u){var c=d.slice();return c[7]=f[u],c[9]=u,c}function un(d){for(var f,u,c,h,x,S,L,A,O,N=[],ie=new Map,X=d[1]&&Jt(d),ae=d[0].repeated&&pt(d),re=d[0].data,ye=function(Ve){return Ve[9]},xe=0;xe<re.length;xe+=1){var Ge=ln(d,re,xe),qe=ye(Ge);ie.set(qe,N[xe]=Qt(qe,Ge))}return L=new Ae({props:{handler:d[4]}}),{c:function(){f=(0,n.bGB)("div"),X&&X.c(),u=(0,n.DhX)(),ae&&ae.c(),c=(0,n.DhX)(),h=(0,n.bGB)("div");for(var Ve=0;Ve<N.length;Ve+=1)N[Ve].c();x=(0,n.DhX)(),S=(0,n.bGB)("div"),(0,n.YCL)(L.$$.fragment),(0,n.Ljt)(h,"class","vc-log-content"),(0,n.Ljt)(S,"class","vc-logrow-icon"),(0,n.Ljt)(f,"class",A="vc-log-row vc-log-"+d[0].type),(0,n.VHj)(f,"vc-log-input",d[0].cmdType==="input"),(0,n.VHj)(f,"vc-log-output",d[0].cmdType==="output")},m:function(Ve,ot){(0,n.$Tr)(Ve,f,ot),X&&X.m(f,null),(0,n.R3I)(f,u),ae&&ae.m(f,null),(0,n.R3I)(f,c),(0,n.R3I)(f,h);for(var Dt=0;Dt<N.length;Dt+=1)N[Dt].m(h,null);(0,n.R3I)(f,x),(0,n.R3I)(f,S),(0,n.yef)(L,S,null),O=!0},p:function(Ve,ot){Ve[1]?X?X.p(Ve,ot):((X=Jt(Ve)).c(),X.m(f,u)):X&&(X.d(1),X=null),Ve[0].repeated?ae?ae.p(Ve,ot):((ae=pt(Ve)).c(),ae.m(f,c)):ae&&(ae.d(1),ae=null),9&ot&&(re=Ve[0].data,(0,n.dvw)(),N=(0,n.GQg)(N,ot,ye,1,Ve,re,ie,h,n.cly,Qt,null,ln),(0,n.gbL)()),(!O||1&ot&&A!==(A="vc-log-row vc-log-"+Ve[0].type))&&(0,n.Ljt)(f,"class",A),1&ot&&(0,n.VHj)(f,"vc-log-input",Ve[0].cmdType==="input"),1&ot&&(0,n.VHj)(f,"vc-log-output",Ve[0].cmdType==="output")},i:function(Ve){if(!O){for(var ot=0;ot<re.length;ot+=1)(0,n.Ui)(N[ot]);(0,n.Ui)(L.$$.fragment,Ve),O=!0}},o:function(Ve){for(var ot=0;ot<N.length;ot+=1)(0,n.etI)(N[ot]);(0,n.etI)(L.$$.fragment,Ve),O=!1},d:function(Ve){Ve&&(0,n.ogt)(f),X&&X.d(),ae&&ae.d();for(var ot=0;ot<N.length;ot+=1)N[ot].d();(0,n.vpE)(L)}}}function Jt(d){var f,u;return{c:function(){f=(0,n.bGB)("div"),u=(0,n.fLW)(d[2]),(0,n.Ljt)(f,"class","vc-log-time")},m:function(c,h){(0,n.$Tr)(c,f,h),(0,n.R3I)(f,u)},p:function(c,h){4&h&&(0,n.rTO)(u,c[2])},d:function(c){c&&(0,n.ogt)(f)}}}function pt(d){var f,u,c,h=d[0].repeated+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("i"),c=(0,n.fLW)(h),(0,n.Ljt)(f,"class","vc-log-repeat")},m:function(x,S){(0,n.$Tr)(x,f,S),(0,n.R3I)(f,u),(0,n.R3I)(u,c)},p:function(x,S){1&S&&h!==(h=x[0].repeated+"")&&(0,n.rTO)(c,h)},d:function(x){x&&(0,n.ogt)(f)}}}function hn(d){var f,u;return f=new Ce({props:{origData:d[7].origData,style:d[7].style}}),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:function(c,h){var x={};1&h&&(x.origData=c[7].origData),1&h&&(x.style=c[7].style),f.$set(x)},i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function Lt(d){var f,u;return f=new at({props:{origData:d[7].origData}}),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:function(c,h){var x={};1&h&&(x.origData=c[7].origData),f.$set(x)},i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function Qt(d,f){var u,c,h,x,S,L,A=[Lt,hn],O=[];function N(ie,X){return 1&X&&(c=null),c==null&&(c=!!ie[3](ie[7].origData)),c?0:1}return h=N(f,-1),x=O[h]=A[h](f),{key:d,first:null,c:function(){u=(0,n.cSb)(),x.c(),S=(0,n.cSb)(),this.first=u},m:function(ie,X){(0,n.$Tr)(ie,u,X),O[h].m(ie,X),(0,n.$Tr)(ie,S,X),L=!0},p:function(ie,X){var ae=h;(h=N(f=ie,X))===ae?O[h].p(f,X):((0,n.dvw)(),(0,n.etI)(O[ae],1,1,function(){O[ae]=null}),(0,n.gbL)(),(x=O[h])?x.p(f,X):(x=O[h]=A[h](f)).c(),(0,n.Ui)(x,1),x.m(S.parentNode,S))},i:function(ie){L||((0,n.Ui)(x),L=!0)},o:function(ie){(0,n.etI)(x),L=!1},d:function(ie){ie&&(0,n.ogt)(u),O[h].d(ie),ie&&(0,n.ogt)(S)}}}function an(d){var f,u,c=d[0]&&un(d);return{c:function(){c&&c.c(),f=(0,n.cSb)()},m:function(h,x){c&&c.m(h,x),(0,n.$Tr)(h,f,x),u=!0},p:function(h,x){var S=x[0];h[0]?c?(c.p(h,S),1&S&&(0,n.Ui)(c,1)):((c=un(h)).c(),(0,n.Ui)(c,1),c.m(f.parentNode,f)):c&&((0,n.dvw)(),(0,n.etI)(c,1,1,function(){c=null}),(0,n.gbL)())},i:function(h){u||((0,n.Ui)(c),u=!0)},o:function(h){(0,n.etI)(c),u=!1},d:function(h){c&&c.d(h),h&&(0,n.ogt)(f)}}}function gn(d,f,u){var c=f.log,h=f.showTimestamps,x=h!==void 0&&h,S=!1,L="",A=function(O,N){var ie="000"+O;return ie.substring(ie.length-N)};return(0,l.H3)(function(){on.use()}),(0,l.ev)(function(){on.unuse()}),d.$$set=function(O){"log"in O&&u(0,c=O.log),"showTimestamps"in O&&u(1,x=O.showTimestamps)},d.$$.update=function(){if(39&d.$$.dirty&&(S||u(5,S=!0),x&&L==="")){var O=new Date(c.date);u(2,L=A(O.getHours(),2)+":"+A(O.getMinutes(),2)+":"+A(O.getSeconds(),2)+":"+A(O.getMilliseconds(),3))}},[c,x,L,function(O){return!(O instanceof lt.Tg)&&(e.kJ(O)||e.Kn(O))},function(){var O=[];try{for(var N=0;N<c.data.length;N++)O.push(e.hZ(c.data[N].origData,{maxDepth:10,keyMaxLen:1e4,pretty:!1}))}catch{}return O.join(" ")},S]}var Cn=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,gn,an,n.N8,{log:0,showTimestamps:1}),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"log",get:function(){return this.$$.ctx[0]},set:function(u){this.$$set({log:u}),(0,n.yl1)()}},{key:"showTimestamps",get:function(){return this.$$.ctx[1]},set:function(u){this.$$set({showTimestamps:u}),(0,n.yl1)()}}]),f}(n.f_C),Ot=Cn,_n=__webpack_require__(3903),dn=__webpack_require__(3327),Vt={};dn.Z&&dn.Z.locals&&(Vt.locals=dn.Z.locals);var ei,ti=0,vn={};vn.styleTagTransform=k(),vn.setAttributes=w(),vn.insert=E().bind(null,"head"),vn.domAPI=y(),vn.insertStyleElement=C(),Vt.use=function(d){return vn.options=d||{},ti++||(ei=_()(dn.Z,vn)),Vt},Vt.unuse=function(){ti>0&&!--ti&&(ei(),ei=null)};var _i=Vt;function vi(d,f,u){var c=d.slice();return c[9]=f[u],c}function Er(d){var f;return{c:function(){f=(0,n.bGB)("div"),(0,n.Ljt)(f,"class","vc-plugin-empty")},m:function(u,c){(0,n.$Tr)(u,f,c)},p:n.ZTd,i:n.ZTd,o:n.ZTd,d:function(u){u&&(0,n.ogt)(f)}}}function Tr(d){for(var f,u,c=[],h=new Map,x=d[5].logList,S=function(N){return N[9]._id},L=0;L<x.length;L+=1){var A=vi(d,x,L),O=S(A);h.set(O,c[L]=bi(O,A))}return{c:function(){for(var N=0;N<c.length;N+=1)c[N].c();f=(0,n.cSb)()},m:function(N,ie){for(var X=0;X<c.length;X+=1)c[X].m(N,ie);(0,n.$Tr)(N,f,ie),u=!0},p:function(N,ie){46&ie&&(x=N[5].logList,(0,n.dvw)(),c=(0,n.GQg)(c,ie,S,1,N,x,h,f.parentNode,n.cly,bi,f,vi),(0,n.gbL)())},i:function(N){if(!u){for(var ie=0;ie<x.length;ie+=1)(0,n.Ui)(c[ie]);u=!0}},o:function(N){for(var ie=0;ie<c.length;ie+=1)(0,n.etI)(c[ie]);u=!1},d:function(N){for(var ie=0;ie<c.length;ie+=1)c[ie].d(N);N&&(0,n.ogt)(f)}}}function xi(d){var f,u;return f=new Ot({props:{log:d[9],showTimestamps:d[2]}}),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:function(c,h){var x={};32&h&&(x.log=c[9]),4&h&&(x.showTimestamps=c[2]),f.$set(x)},i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function bi(d,f){var u,c,h,x=(f[1]==="all"||f[1]===f[9].type)&&(f[3]===""||(0,lt.HX)(f[9],f[3])),S=x&&xi(f);return{key:d,first:null,c:function(){u=(0,n.cSb)(),S&&S.c(),c=(0,n.cSb)(),this.first=u},m:function(L,A){(0,n.$Tr)(L,u,A),S&&S.m(L,A),(0,n.$Tr)(L,c,A),h=!0},p:function(L,A){f=L,42&A&&(x=(f[1]==="all"||f[1]===f[9].type)&&(f[3]===""||(0,lt.HX)(f[9],f[3]))),x?S?(S.p(f,A),42&A&&(0,n.Ui)(S,1)):((S=xi(f)).c(),(0,n.Ui)(S,1),S.m(c.parentNode,c)):S&&((0,n.dvw)(),(0,n.etI)(S,1,1,function(){S=null}),(0,n.gbL)())},i:function(L){h||((0,n.Ui)(S),h=!0)},o:function(L){(0,n.etI)(S),h=!1},d:function(L){L&&(0,n.ogt)(u),S&&S.d(L),L&&(0,n.ogt)(c)}}}function yi(d){var f,u;return(f=new _n.Z({})).$on("filterText",d[6]),{c:function(){(0,n.YCL)(f.$$.fragment)},m:function(c,h){(0,n.yef)(f,c,h),u=!0},p:n.ZTd,i:function(c){u||((0,n.Ui)(f.$$.fragment,c),u=!0)},o:function(c){(0,n.etI)(f.$$.fragment,c),u=!1},d:function(c){(0,n.vpE)(f,c)}}}function Lr(d){var f,u,c,h,x,S=[Tr,Er],L=[];function A(N,ie){return N[5]&&N[5].logList.length>0?0:1}u=A(d),c=L[u]=S[u](d);var O=d[0]&&yi(d);return{c:function(){f=(0,n.bGB)("div"),c.c(),h=(0,n.DhX)(),O&&O.c(),(0,n.Ljt)(f,"class","vc-plugin-content"),(0,n.VHj)(f,"vc-logs-has-cmd",d[0])},m:function(N,ie){(0,n.$Tr)(N,f,ie),L[u].m(f,null),(0,n.R3I)(f,h),O&&O.m(f,null),x=!0},p:function(N,ie){var X=ie[0],ae=u;(u=A(N))===ae?L[u].p(N,X):((0,n.dvw)(),(0,n.etI)(L[ae],1,1,function(){L[ae]=null}),(0,n.gbL)(),(c=L[u])?c.p(N,X):(c=L[u]=S[u](N)).c(),(0,n.Ui)(c,1),c.m(f,h)),N[0]?O?(O.p(N,X),1&X&&(0,n.Ui)(O,1)):((O=yi(N)).c(),(0,n.Ui)(O,1),O.m(f,null)):O&&((0,n.dvw)(),(0,n.etI)(O,1,1,function(){O=null}),(0,n.gbL)()),1&X&&(0,n.VHj)(f,"vc-logs-has-cmd",N[0])},i:function(N){x||((0,n.Ui)(c),(0,n.Ui)(O),x=!0)},o:function(N){(0,n.etI)(c),(0,n.etI)(O),x=!1},d:function(N){N&&(0,n.ogt)(f),L[u].d(),O&&O.d()}}}function Cr(d,f,u){var c,h=n.ZTd;d.$$.on_destroy.push(function(){return h()});var x,S=f.pluginId,L=S===void 0?"default":S,A=f.showCmd,O=A!==void 0&&A,N=f.filterType,ie=N===void 0?"all":N,X=f.showTimestamps,ae=X!==void 0&&X,re=!1,ye="";return(0,l.H3)(function(){_i.use()}),(0,l.ev)(function(){_i.unuse()}),d.$$set=function(xe){"pluginId"in xe&&u(7,L=xe.pluginId),"showCmd"in xe&&u(0,O=xe.showCmd),"filterType"in xe&&u(1,ie=xe.filterType),"showTimestamps"in xe&&u(2,ae=xe.showTimestamps)},d.$$.update=function(){384&d.$$.dirty&&(re||(u(4,x=Tt.O.get(L)),h(),h=(0,n.LdU)(x,function(xe){return u(5,c=xe)}),u(8,re=!0)))},[O,ie,ae,ye,x,c,function(xe){u(3,ye=xe.detail.filterText||"")},L,re]}var Ar=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,Cr,Lr,n.N8,{pluginId:7,showCmd:0,filterType:1,showTimestamps:2}),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"pluginId",get:function(){return this.$$.ctx[7]},set:function(u){this.$$set({pluginId:u}),(0,n.yl1)()}},{key:"showCmd",get:function(){return this.$$.ctx[0]},set:function(u){this.$$set({showCmd:u}),(0,n.yl1)()}},{key:"filterType",get:function(){return this.$$.ctx[1]},set:function(u){this.$$set({filterType:u}),(0,n.yl1)()}},{key:"showTimestamps",get:function(){return this.$$.ctx[2]},set:function(u){this.$$set({showTimestamps:u}),(0,n.yl1)()}}]),f}(n.f_C),Rr=Ar,Bn=__webpack_require__(5629),Mi=function(){function d(f){this.model=void 0,this.pluginId=void 0,this.pluginId=f}return d.prototype.destroy=function(){this.model=void 0},d}(),Dr=function(d){function f(){for(var c,h=arguments.length,x=new Array(h),S=0;S<h;S++)x[S]=arguments[S];return(c=d.call.apply(d,[this].concat(x))||this).model=Bn.W.getSingleton(Bn.W,"VConsoleLogModel"),c}(0,a.Z)(f,d);var u=f.prototype;return u.log=function(){for(var c=arguments.length,h=new Array(c),x=0;x<c;x++)h[x]=arguments[x];this.addLog.apply(this,["log"].concat(h))},u.info=function(){for(var c=arguments.length,h=new Array(c),x=0;x<c;x++)h[x]=arguments[x];this.addLog.apply(this,["info"].concat(h))},u.debug=function(){for(var c=arguments.length,h=new Array(c),x=0;x<c;x++)h[x]=arguments[x];this.addLog.apply(this,["debug"].concat(h))},u.warn=function(){for(var c=arguments.length,h=new Array(c),x=0;x<c;x++)h[x]=arguments[x];this.addLog.apply(this,["warn"].concat(h))},u.error=function(){for(var c=arguments.length,h=new Array(c),x=0;x<c;x++)h[x]=arguments[x];this.addLog.apply(this,["error"].concat(h))},u.clear=function(){this.model&&this.model.clearPluginLog(this.pluginId)},u.addLog=function(c){if(this.model){for(var h=arguments.length,x=new Array(h>1?h-1:0),S=1;S<h;S++)x[S-1]=arguments[S];x.unshift("["+this.pluginId+"]"),this.model.addLog({type:c,origData:x},{noOrig:!0})}},f}(Mi),ni=function(d){function f(c,h){var x;return(x=d.call(this,c,h,Rr,{pluginId:c,filterType:"all"})||this).model=Bn.W.getSingleton(Bn.W,"VConsoleLogModel"),x.isReady=!1,x.isShow=!1,x.isInBottom=!0,x.model.bindPlugin(c),x.exporter=new Dr(c),x}(0,a.Z)(f,d);var u=f.prototype;return u.onReady=function(){var c,h;d.prototype.onReady.call(this),this.model.maxLogNumber=Number((c=this.vConsole.option.log)==null?void 0:c.maxLogNumber)||1e3,this.compInstance.showTimestamps=!((h=this.vConsole.option.log)==null||!h.showTimestamps)},u.onRemove=function(){d.prototype.onRemove.call(this),this.model.unbindPlugin(this.id)},u.onAddTopBar=function(c){for(var h=this,x=["All","Log","Info","Warn","Error"],S=[],L=0;L<x.length;L++)S.push({name:x[L],data:{type:x[L].toLowerCase()},actived:L===0,className:"",onClick:function(A,O){if(O.type===h.compInstance.filterType)return!1;h.compInstance.filterType=O.type}});S[0].className="vc-actived",c(S)},u.onAddTool=function(c){var h=this;c([{name:"Clear",global:!1,onClick:function(x){h.model.clearPluginLog(h.id),h.vConsole.triggerEvent("clearLog")}}])},u.onUpdateOption=function(){var c,h,x,S;((c=this.vConsole.option.log)==null?void 0:c.maxLogNumber)!==this.model.maxLogNumber&&(this.model.maxLogNumber=Number((x=this.vConsole.option.log)==null?void 0:x.maxLogNumber)||1e3),!((h=this.vConsole.option.log)==null||!h.showTimestamps)!==this.compInstance.showTimestamps&&(this.compInstance.showTimestamps=!((S=this.vConsole.option.log)==null||!S.showTimestamps))},f}(it),Si=function(d){function f(){for(var c,h=arguments.length,x=new Array(h),S=0;S<h;S++)x[S]=arguments[S];return(c=d.call.apply(d,[this].concat(x))||this).onErrorHandler=void 0,c.resourceErrorHandler=void 0,c.rejectionHandler=void 0,c}(0,a.Z)(f,d);var u=f.prototype;return u.onReady=function(){d.prototype.onReady.call(this),this.bindErrors(),this.compInstance.showCmd=!0},u.onRemove=function(){d.prototype.onRemove.call(this),this.unbindErrors()},u.bindErrors=function(){e.FJ(window)&&e.mf(window.addEventListener)&&(this.catchWindowOnError(),this.catchResourceError(),this.catchUnhandledRejection())},u.unbindErrors=function(){e.FJ(window)&&e.mf(window.addEventListener)&&(window.removeEventListener("error",this.onErrorHandler),window.removeEventListener("error",this.resourceErrorHandler),window.removeEventListener("unhandledrejection",this.rejectionHandler))},u.catchWindowOnError=function(){var c=this;this.onErrorHandler=this.onErrorHandler?this.onErrorHandler:function(h){var x=h.message;h.filename&&(x+=`
`+h.filename.replace(location.origin,"")),(h.lineno||h.colno)&&(x+=":"+h.lineno+":"+h.colno);var S=!!h.error&&!!h.error.stack&&h.error.stack.toString()||"";c.model.addLog({type:"error",origData:[x,S]},{noOrig:!0})},window.removeEventListener("error",this.onErrorHandler),window.addEventListener("error",this.onErrorHandler)},u.catchResourceError=function(){var c=this;this.resourceErrorHandler=this.resourceErrorHandler?this.resourceErrorHandler:function(h){var x=h.target;if(["link","video","script","img","audio"].indexOf(x.localName)>-1){var S=x.href||x.src||x.currentSrc;c.model.addLog({type:"error",origData:["GET <"+x.localName+"> error: "+S]},{noOrig:!0})}},window.removeEventListener("error",this.resourceErrorHandler),window.addEventListener("error",this.resourceErrorHandler,!0)},u.catchUnhandledRejection=function(){var c=this;this.rejectionHandler=this.rejectionHandler?this.rejectionHandler:function(h){var x=h&&h.reason,S="Uncaught (in promise) ",L=[S,x];x instanceof Error&&(L=[S,{name:x.name,message:x.message,stack:x.stack}]),c.model.addLog({type:"error",origData:L},{noOrig:!0})},window.removeEventListener("unhandledrejection",this.rejectionHandler),window.addEventListener("unhandledrejection",this.rejectionHandler)},f}(ni),wi=function(d){function f(){return d.apply(this,arguments)||this}(0,a.Z)(f,d);var u=f.prototype;return u.onReady=function(){d.prototype.onReady.call(this),this.printSystemInfo()},u.printSystemInfo=function(){var c=navigator.userAgent,h=[],x=c.match(/MicroMessenger\/([\d\.]+)/i),S=x&&x[1]?x[1]:null;location.host==="servicewechat.com"||console.info("[system]","Location:",location.href);var L=c.match(/(ipod).*\s([\d_]+)/i),A=c.match(/(ipad).*\s([\d_]+)/i),O=c.match(/(iphone)\sos\s([\d_]+)/i),N=c.match(/(android)\s([\d\.]+)/i),ie=c.match(/(Mac OS X)\s([\d_]+)/i);h=[],N?h.push("Android "+N[2]):O?h.push("iPhone, iOS "+O[2].replace(/_/g,".")):A?h.push("iPad, iOS "+A[2].replace(/_/g,".")):L?h.push("iPod, iOS "+L[2].replace(/_/g,".")):ie&&h.push("Mac, MacOS "+ie[2].replace(/_/g,".")),S&&h.push("WeChat "+S),console.info("[system]","Client:",h.length?h.join(", "):"Unknown");var X=c.toLowerCase().match(/ nettype\/([^ ]+)/g);X&&X[0]&&(h=[(X=X[0].split("/"))[1]],console.info("[system]","Network:",h.length?h.join(", "):"Unknown")),console.info("[system]","UA:",c),setTimeout(function(){var ae=window.performance||window.msPerformance||window.webkitPerformance;if(ae&&ae.timing){var re=ae.timing;re.navigationStart&&console.info("[system]","navigationStart:",re.navigationStart),re.navigationStart&&re.domainLookupStart&&console.info("[system]","navigation:",re.domainLookupStart-re.navigationStart+"ms"),re.domainLookupEnd&&re.domainLookupStart&&console.info("[system]","dns:",re.domainLookupEnd-re.domainLookupStart+"ms"),re.connectEnd&&re.connectStart&&(re.connectEnd&&re.secureConnectionStart?console.info("[system]","tcp (ssl):",re.connectEnd-re.connectStart+"ms ("+(re.connectEnd-re.secureConnectionStart)+"ms)"):console.info("[system]","tcp:",re.connectEnd-re.connectStart+"ms")),re.responseStart&&re.requestStart&&console.info("[system]","request:",re.responseStart-re.requestStart+"ms"),re.responseEnd&&re.responseStart&&console.info("[system]","response:",re.responseEnd-re.responseStart+"ms"),re.domComplete&&re.domLoading&&(re.domContentLoadedEventStart&&re.domLoading?console.info("[system]","domComplete (domLoaded):",re.domComplete-re.domLoading+"ms ("+(re.domContentLoadedEventStart-re.domLoading)+"ms)"):console.info("[system]","domComplete:",re.domComplete-re.domLoading+"ms")),re.loadEventEnd&&re.loadEventStart&&console.info("[system]","loadEvent:",re.loadEventEnd-re.loadEventStart+"ms"),re.navigationStart&&re.loadEventEnd&&console.info("[system]","total (DOM):",re.loadEventEnd-re.navigationStart+"ms ("+(re.domComplete-re.navigationStart)+"ms)")}},0)},f}(ni),kt=__webpack_require__(3313),Ei=__webpack_require__(643);function ii(d,f){var u=typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(u)return(u=u.call(d)).next.bind(u);if(Array.isArray(d)||(u=function(h,x){if(!!h){if(typeof h=="string")return Ti(h,x);var S=Object.prototype.toString.call(h).slice(8,-1);if(S==="Object"&&h.constructor&&(S=h.constructor.name),S==="Map"||S==="Set")return Array.from(h);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return Ti(h,x)}}(d))||f&&d&&typeof d.length=="number"){u&&(d=u);var c=0;return function(){return c>=d.length?{done:!0}:{done:!1,value:d[c++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ti(d,f){(f==null||f>d.length)&&(f=d.length);for(var u=0,c=new Array(f);u<f;u++)c[u]=d[u];return c}var Li=function(d,f){f===void 0&&(f={}),e.Kn(f)||(f={});var u=d?d.split("?"):[];if(u.shift(),u.length>0)for(var c,h=ii(u=u.join("?").split("&"));!(c=h()).done;){var x=c.value.split("=");try{f[x[0]]=decodeURIComponent(x[1])}catch{f[x[0]]=x[1]}}return f},Sn=function(d,f){var u="";switch(d){case"":case"text":case"json":if(e.HD(f))try{u=JSON.parse(f),u=e.hZ(u,{maxDepth:10,keyMaxLen:1e4,pretty:!0})}catch{u=e.id(String(f),1e4)}else e.Kn(f)||e.kJ(f)?u=e.hZ(f,{maxDepth:10,keyMaxLen:1e4,pretty:!0}):f!==void 0&&(u=Object.prototype.toString.call(f));break;default:f!==void 0&&(u=Object.prototype.toString.call(f))}return u},ri=function(d){if(!d)return null;var f=null;if(typeof d=="string")try{f=JSON.parse(d)}catch{var u=d.split("&");if(u.length===1)f=d;else{f={};for(var c,h=ii(u);!(c=h()).done;){var x=c.value.split("=");f[x[0]]=x[1]===void 0?"undefined":x[1]}}}else if(e.TW(d)){f={};for(var S,L=ii(d);!(S=L()).done;){var A=S.value,O=A[0],N=A[1];f[O]=typeof N=="string"?N:"[object Object]"}}else e.PO(d)?f=d:f="[object "+e.zl(d)+"]";return f},oi=function(d){return d===void 0&&(d=""),d.startsWith("//")&&(d=""+new URL(window.location.href).protocol+d),d.startsWith("http")?new URL(d):new URL(d,window.location.href)},An=function(){this.id="",this.name="",this.method="",this.url="",this.status=0,this.statusText="",this.cancelState=0,this.readyState=0,this.header=null,this.responseType="",this.requestType=void 0,this.requestHeader=null,this.response=void 0,this.responseSize=0,this.responseSizeText="",this.startTime=0,this.endTime=0,this.costTime=0,this.getData=null,this.postData=null,this.actived=!1,this.noVConsole=!1,this.id=(0,e.QI)()},Ci=function(d){function f(u){var c;return(c=d.call(this)||this)._response=void 0,new Proxy(u,f.Handler)||(0,o.Z)(c)}return(0,a.Z)(f,d),f}(An);Ci.Handler={get:function(d,f){return f==="response"?d._response:Reflect.get(d,f)},set:function(d,f,u){var c;switch(f){case"response":return d._response=Sn(d.responseType,u),!0;case"url":var h=((c=u=String(u))==null?void 0:c.replace(new RegExp("[/]*$"),"").split("/").pop())||"Unknown";Reflect.set(d,"name",h);var x=Li(u,d.getData);Reflect.set(d,"getData",x);break;case"status":var S=String(u)||"Unknown";Reflect.set(d,"statusText",S);break;case"startTime":if(u&&d.endTime){var L=d.endTime-u;Reflect.set(d,"costTime",L)}break;case"endTime":if(u&&d.startTime){var A=u-d.startTime;Reflect.set(d,"costTime",A)}}return Reflect.set(d,f,u)}};var Pr=function(){function d(u,c){var h=this;this.XMLReq=void 0,this.item=void 0,this.onUpdateCallback=void 0,this.XMLReq=u,this.XMLReq.onreadystatechange=function(){h.onReadyStateChange()},this.XMLReq.onabort=function(){h.onAbort()},this.XMLReq.ontimeout=function(){h.onTimeout()},this.item=new An,this.item.requestType="xhr",this.onUpdateCallback=c}var f=d.prototype;return f.get=function(u,c){switch(c){case"_noVConsole":return this.item.noVConsole;case"open":return this.getOpen(u);case"send":return this.getSend(u);case"setRequestHeader":return this.getSetRequestHeader(u);default:var h=Reflect.get(u,c);return typeof h=="function"?h.bind(u):h}},f.set=function(u,c,h){switch(c){case"_noVConsole":return void(this.item.noVConsole=!!h);case"onreadystatechange":return this.setOnReadyStateChange(u,c,h);case"onabort":return this.setOnAbort(u,c,h);case"ontimeout":return this.setOnTimeout(u,c,h)}return Reflect.set(u,c,h)},f.onReadyStateChange=function(){this.item.readyState=this.XMLReq.readyState,this.item.responseType=this.XMLReq.responseType,this.item.endTime=Date.now(),this.item.costTime=this.item.endTime-this.item.startTime,this.updateItemByReadyState(),this.item.response=Sn(this.item.responseType,this.item.response),this.triggerUpdate()},f.onAbort=function(){this.item.cancelState=1,this.item.statusText="Abort",this.triggerUpdate()},f.onTimeout=function(){this.item.cancelState=3,this.item.statusText="Timeout",this.triggerUpdate()},f.triggerUpdate=function(){this.item.noVConsole||this.onUpdateCallback(this.item)},f.getOpen=function(u){var c=this,h=Reflect.get(u,"open");return function(){for(var x=arguments.length,S=new Array(x),L=0;L<x;L++)S[L]=arguments[L];var A=S[0],O=S[1];return c.item.method=A?A.toUpperCase():"GET",c.item.url=O||"",c.item.name=c.item.url.replace(new RegExp("[/]*$"),"").split("/").pop()||"",c.item.getData=Li(c.item.url,{}),c.triggerUpdate(),h.apply(u,S)}},f.getSend=function(u){var c=this,h=Reflect.get(u,"send");return function(){for(var x=arguments.length,S=new Array(x),L=0;L<x;L++)S[L]=arguments[L];var A=S[0];return c.item.postData=ri(A),c.triggerUpdate(),h.apply(u,S)}},f.getSetRequestHeader=function(u){var c=this,h=Reflect.get(u,"setRequestHeader");return function(){c.item.requestHeader||(c.item.requestHeader={});for(var x=arguments.length,S=new Array(x),L=0;L<x;L++)S[L]=arguments[L];return c.item.requestHeader[S[0]]=S[1],c.triggerUpdate(),h.apply(u,S)}},f.setOnReadyStateChange=function(u,c,h){var x=this;return Reflect.set(u,c,function(){x.onReadyStateChange();for(var S=arguments.length,L=new Array(S),A=0;A<S;A++)L[A]=arguments[A];h.apply(u,L)})},f.setOnAbort=function(u,c,h){var x=this;return Reflect.set(u,c,function(){x.onAbort();for(var S=arguments.length,L=new Array(S),A=0;A<S;A++)L[A]=arguments[A];h.apply(u,L)})},f.setOnTimeout=function(u,c,h){var x=this;return Reflect.set(u,c,function(){x.onTimeout();for(var S=arguments.length,L=new Array(S),A=0;A<S;A++)L[A]=arguments[A];h.apply(u,L)})},f.updateItemByReadyState=function(){switch(this.XMLReq.readyState){case 0:case 1:this.item.status=0,this.item.statusText="Pending",this.item.startTime||(this.item.startTime=Date.now());break;case 2:this.item.status=this.XMLReq.status,this.item.statusText="Loading",this.item.header={};for(var u=(this.XMLReq.getAllResponseHeaders()||"").split(`
`),c=0;c<u.length;c++){var h=u[c];if(h){var x=h.split(": "),S=x[0],L=x.slice(1).join(": ");this.item.header[S]=L}}break;case 3:this.item.status=this.XMLReq.status,this.item.statusText="Loading",this.XMLReq.response&&this.XMLReq.response.length&&(this.item.responseSize=this.XMLReq.response.length,this.item.responseSizeText=(0,e.KL)(this.item.responseSize));break;case 4:this.item.status=this.XMLReq.status||this.item.status||0,this.item.statusText=String(this.item.status),this.item.endTime=Date.now(),this.item.costTime=this.item.endTime-(this.item.startTime||this.item.endTime),this.item.response=this.XMLReq.response,this.XMLReq.response&&this.XMLReq.response.length&&(this.item.responseSize=this.XMLReq.response.length,this.item.responseSizeText=(0,e.KL)(this.item.responseSize));break;default:this.item.status=this.XMLReq.status,this.item.statusText="Unknown"}},d}(),ai=function(){function d(){}return d.create=function(f){return new Proxy(XMLHttpRequest,{construct:function(u){var c=new u;return new Proxy(c,new Pr(c,f))}})},d}();function si(d,f){var u=typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(u)return(u=u.call(d)).next.bind(u);if(Array.isArray(d)||(u=function(h,x){if(!!h){if(typeof h=="string")return Ai(h,x);var S=Object.prototype.toString.call(h).slice(8,-1);if(S==="Object"&&h.constructor&&(S=h.constructor.name),S==="Map"||S==="Set")return Array.from(h);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return Ai(h,x)}}(d))||f&&d&&typeof d.length=="number"){u&&(d=u);var c=0;return function(){return c>=d.length?{done:!0}:{done:!1,value:d[c++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ai(d,f){(f==null||f>d.length)&&(f=d.length);for(var u=0,c=new Array(f);u<f;u++)c[u]=d[u];return c}ai.origXMLHttpRequest=XMLHttpRequest;var Ir=function(){function d(u,c,h){this.resp=void 0,this.item=void 0,this.onUpdateCallback=void 0,this.resp=u,this.item=c,this.onUpdateCallback=h,this.mockReader()}var f=d.prototype;return f.set=function(u,c,h){return Reflect.set(u,c,h)},f.get=function(u,c){var h=this,x=Reflect.get(u,c);switch(c){case"arrayBuffer":case"blob":case"formData":case"json":case"text":return function(){return h.item.responseType=c.toLowerCase(),x.apply(u).then(function(S){return h.item.response=Sn(h.item.responseType,S),h.onUpdateCallback(h.item),S})}}return typeof x=="function"?x.bind(u):x},f.mockReader=function(){var u,c=this;if(this.resp.body&&typeof this.resp.body.getReader=="function"){var h=this.resp.body.getReader;this.resp.body.getReader=function(){var x=h.apply(c.resp.body);if(c.item.readyState===4)return x;var S=x.read,L=x.cancel;return c.item.responseType="arraybuffer",x.read=function(){return S.apply(x).then(function(A){if(u){var O=new Uint8Array(u.length+A.value.length);O.set(u),O.set(A.value,u.length),u=O}else u=new Uint8Array(A.value);return c.item.endTime=Date.now(),c.item.costTime=c.item.endTime-(c.item.startTime||c.item.endTime),c.item.readyState=A.done?4:3,c.item.statusText=A.done?String(c.item.status):"Loading",c.item.responseSize=u.length,c.item.responseSizeText=e.KL(c.item.responseSize),A.done&&(c.item.response=Sn(c.item.responseType,u)),c.onUpdateCallback(c.item),A})},x.cancel=function(){c.item.cancelState=2,c.item.statusText="Cancel",c.item.endTime=Date.now(),c.item.costTime=c.item.endTime-(c.item.startTime||c.item.endTime),c.item.response=Sn(c.item.responseType,u),c.onUpdateCallback(c.item);for(var A=arguments.length,O=new Array(A),N=0;N<A;N++)O[N]=arguments[N];return L.apply(x,O)},x}}},d}(),Or=function(){function d(u){this.onUpdateCallback=void 0,this.onUpdateCallback=u}var f=d.prototype;return f.apply=function(u,c,h){var x=this,S=h[0],L=h[1],A=new An;return this.beforeFetch(A,S,L),u.apply(c,h).then(this.afterFetch(A)).catch(function(O){throw A.endTime=Date.now(),A.costTime=A.endTime-(A.startTime||A.endTime),x.onUpdateCallback(A),O})},f.beforeFetch=function(u,c,h){var x,S="GET",L=null;if(e.HD(c)?(S=(h==null?void 0:h.method)||"GET",x=oi(c),L=(h==null?void 0:h.headers)||null):(S=c.method||"GET",x=oi(c.url),L=c.headers),u.method=S,u.requestType="fetch",u.requestHeader=L,u.url=x.toString(),u.name=(x.pathname.split("/").pop()||"")+x.search,u.status=0,u.statusText="Pending",u.readyState=1,u.startTime||(u.startTime=Date.now()),Object.prototype.toString.call(L)==="[object Headers]"){u.requestHeader={};for(var A,O=si(L);!(A=O()).done;){var N=A.value,ie=N[0],X=N[1];u.requestHeader[ie]=X}}else u.requestHeader=L;if(x.search&&x.searchParams){u.getData={};for(var ae,re=si(x.searchParams);!(ae=re()).done;){var ye=ae.value,xe=ye[0],Ge=ye[1];u.getData[xe]=Ge}}h!=null&&h.body&&(u.postData=ri(h.body)),this.onUpdateCallback(u)},f.afterFetch=function(u){var c=this;return function(h){u.endTime=Date.now(),u.costTime=u.endTime-(u.startTime||u.endTime),u.status=h.status,u.statusText=String(h.status);var x=!1;u.header={};for(var S,L=si(h.headers);!(S=L()).done;){var A=S.value,O=A[0],N=A[1];u.header[O]=N,x=N.toLowerCase().indexOf("chunked")>-1||x}return x?u.readyState=3:(u.readyState=4,c.handleResponseBody(h.clone(),u).then(function(ie){u.responseSize=typeof ie=="string"?ie.length:ie.byteLength,u.responseSizeText=e.KL(u.responseSize),u.response=Sn(u.responseType,ie),c.onUpdateCallback(u)})),c.onUpdateCallback(u),new Proxy(h,new Ir(h,u,c.onUpdateCallback))}},f.handleResponseBody=function(u,c){var h=u.headers.get("content-type");return h&&h.includes("application/json")?(c.responseType="json",u.text()):h&&(h.includes("text/html")||h.includes("text/plain"))?(c.responseType="text",u.text()):(c.responseType="arraybuffer",u.arrayBuffer())},d}(),ci=function(){function d(){}return d.create=function(f){return new Proxy(fetch,new Or(f))},d}();function Br(d,f){var u=typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(u)return(u=u.call(d)).next.bind(u);if(Array.isArray(d)||(u=function(h,x){if(!!h){if(typeof h=="string")return Ri(h,x);var S=Object.prototype.toString.call(h).slice(8,-1);if(S==="Object"&&h.constructor&&(S=h.constructor.name),S==="Map"||S==="Set")return Array.from(h);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return Ri(h,x)}}(d))||f&&d&&typeof d.length=="number"){u&&(d=u);var c=0;return function(){return c>=d.length?{done:!0}:{done:!1,value:d[c++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ri(d,f){(f==null||f>d.length)&&(f=d.length);for(var u=0,c=new Array(f);u<f;u++)c[u]=d[u];return c}ci.origFetch=fetch;var Ur=function(d){return d instanceof Blob?d.type:d instanceof FormData?"multipart/form-data":d instanceof URLSearchParams?"application/x-www-form-urlencoded;charset=UTF-8":"text/plain;charset=UTF-8"},Fr=function(){function d(f){this.onUpdateCallback=void 0,this.onUpdateCallback=f}return d.prototype.apply=function(f,u,c){var h=c[0],x=c[1],S=new An,L=oi(h);if(S.method="POST",S.url=h,S.name=(L.pathname.split("/").pop()||"")+L.search,S.requestType="ping",S.requestHeader={"Content-Type":Ur(x)},S.status=0,S.statusText="Pending",L.search&&L.searchParams){S.getData={};for(var A,O=Br(L.searchParams);!(A=O()).done;){var N=A.value,ie=N[0],X=N[1];S.getData[ie]=X}}S.postData=ri(x),S.startTime||(S.startTime=Date.now()),this.onUpdateCallback(S);var ae=f.apply(u,c);return ae?(S.endTime=Date.now(),S.costTime=S.endTime-(S.startTime||S.endTime),S.status=0,S.statusText="Sent",S.readyState=4):(S.status=500,S.statusText="Unknown"),this.onUpdateCallback(S),ae},d}(),li=function(){function d(){}return d.create=function(f){return new Proxy(navigator.sendBeacon,new Fr(f))},d}();li.origSendBeacon=navigator.sendBeacon;var pn=(0,kt.fZ)({}),Un=function(d){function f(){var c;return(c=d.call(this)||this).maxNetworkNumber=1e3,c.itemCounter=0,c.mockXHR(),c.mockFetch(),c.mockSendBeacon(),c}(0,a.Z)(f,d);var u=f.prototype;return u.unMock=function(){window.hasOwnProperty("XMLHttpRequest")&&(window.XMLHttpRequest=ai.origXMLHttpRequest),window.hasOwnProperty("fetch")&&(window.fetch=ci.origFetch),window.navigator.sendBeacon&&(window.navigator.sendBeacon=li.origSendBeacon)},u.clearLog=function(){pn.set({})},u.updateRequest=function(c,h){var x=(0,kt.U2)(pn),S=!!x[c];if(S){var L=x[c];for(var A in h)L[A]=h[A];h=L}pn.update(function(O){return O[c]=h,O}),S||(ee.x.updateTime(),this.limitListLength())},u.mockXHR=function(){var c=this;window.hasOwnProperty("XMLHttpRequest")&&(window.XMLHttpRequest=ai.create(function(h){c.updateRequest(h.id,h)}))},u.mockFetch=function(){var c=this;window.hasOwnProperty("fetch")&&(window.fetch=ci.create(function(h){c.updateRequest(h.id,h)}))},u.mockSendBeacon=function(){var c=this;window.navigator.sendBeacon&&(window.navigator.sendBeacon=li.create(function(h){c.updateRequest(h.id,h)}))},u.limitListLength=function(){var c=this;if(this.itemCounter++,this.itemCounter%10==0){this.itemCounter=0;var h=(0,kt.U2)(pn),x=Object.keys(h);x.length>this.maxNetworkNumber-10&&pn.update(function(S){for(var L=x.splice(0,x.length-c.maxNetworkNumber+10),A=0;A<L.length;A++)S[L[A]]=void 0,delete S[L[A]];return S})}},f}(Ei.N),Fn=__webpack_require__(8747),Rn={};Fn.Z&&Fn.Z.locals&&(Rn.locals=Fn.Z.locals);var ui,fi=0,xn={};xn.styleTagTransform=k(),xn.setAttributes=w(),xn.insert=E().bind(null,"head"),xn.domAPI=y(),xn.insertStyleElement=C(),Rn.use=function(d){return xn.options=d||{},fi++||(ui=_()(Fn.Z,xn)),Rn},Rn.unuse=function(){fi>0&&!--fi&&(ui(),ui=null)};var Di=Rn;function Pi(d,f,u){var c=d.slice();return c[7]=f[u][0],c[8]=f[u][1],c}function Ii(d,f,u){var c=d.slice();return c[11]=f[u][0],c[12]=f[u][1],c}function Oi(d,f,u){var c=d.slice();return c[11]=f[u][0],c[12]=f[u][1],c}function Bi(d,f,u){var c=d.slice();return c[11]=f[u][0],c[12]=f[u][1],c}function Ui(d,f,u){var c=d.slice();return c[11]=f[u][0],c[12]=f[u][1],c}function Fi(d){var f,u,c;return{c:function(){f=(0,n.fLW)("("),u=(0,n.fLW)(d[0]),c=(0,n.fLW)(")")},m:function(h,x){(0,n.$Tr)(h,f,x),(0,n.$Tr)(h,u,x),(0,n.$Tr)(h,c,x)},p:function(h,x){1&x&&(0,n.rTO)(u,h[0])},d:function(h){h&&(0,n.ogt)(f),h&&(0,n.ogt)(u),h&&(0,n.ogt)(c)}}}function Ni(d){var f,u,c,h,x,S,L,A;S=new Ae({props:{content:d[8].requestHeader}});for(var O=Object.entries(d[8].requestHeader),N=[],ie=0;ie<O.length;ie+=1)N[ie]=Vi(Ui(d,O,ie));return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("dl"),c=(0,n.bGB)("dt"),h=(0,n.fLW)(`Request Headers
                `),x=(0,n.bGB)("i"),(0,n.YCL)(S.$$.fragment),L=(0,n.DhX)();for(var X=0;X<N.length;X+=1)N[X].c();(0,n.Ljt)(x,"class","vc-table-row-icon"),(0,n.Ljt)(c,"class","vc-table-col vc-table-col-title"),(0,n.Ljt)(u,"class","vc-table-row vc-left-border")},m:function(X,ae){(0,n.$Tr)(X,f,ae),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(c,h),(0,n.R3I)(c,x),(0,n.yef)(S,x,null),(0,n.R3I)(f,L);for(var re=0;re<N.length;re+=1)N[re].m(f,null);A=!0},p:function(X,ae){var re={};if(2&ae&&(re.content=X[8].requestHeader),S.$set(re),10&ae){var ye;for(O=Object.entries(X[8].requestHeader),ye=0;ye<O.length;ye+=1){var xe=Ui(X,O,ye);N[ye]?N[ye].p(xe,ae):(N[ye]=Vi(xe),N[ye].c(),N[ye].m(f,null))}for(;ye<N.length;ye+=1)N[ye].d(1);N.length=O.length}},i:function(X){A||((0,n.Ui)(S.$$.fragment,X),A=!0)},o:function(X){(0,n.etI)(S.$$.fragment,X),A=!1},d:function(X){X&&(0,n.ogt)(f),(0,n.vpE)(S),(0,n.RMB)(N,X)}}}function Vi(d){var f,u,c,h,x,S,L,A=d[11]+"",O=d[3](d[12])+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("div"),c=(0,n.fLW)(A),h=(0,n.DhX)(),x=(0,n.bGB)("div"),S=(0,n.fLW)(O),L=(0,n.DhX)(),(0,n.Ljt)(u,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(x,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(f,"class","vc-table-row vc-left-border vc-small")},m:function(N,ie){(0,n.$Tr)(N,f,ie),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(f,h),(0,n.R3I)(f,x),(0,n.R3I)(x,S),(0,n.R3I)(f,L)},p:function(N,ie){2&ie&&A!==(A=N[11]+"")&&(0,n.rTO)(c,A),2&ie&&O!==(O=N[3](N[12])+"")&&(0,n.rTO)(S,O)},d:function(N){N&&(0,n.ogt)(f)}}}function ki(d){var f,u,c,h,x,S,L,A;S=new Ae({props:{content:d[8].getData}});for(var O=Object.entries(d[8].getData),N=[],ie=0;ie<O.length;ie+=1)N[ie]=Gi(Bi(d,O,ie));return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("dl"),c=(0,n.bGB)("dt"),h=(0,n.fLW)(`Query String Parameters
                `),x=(0,n.bGB)("i"),(0,n.YCL)(S.$$.fragment),L=(0,n.DhX)();for(var X=0;X<N.length;X+=1)N[X].c();(0,n.Ljt)(x,"class","vc-table-row-icon"),(0,n.Ljt)(c,"class","vc-table-col vc-table-col-title"),(0,n.Ljt)(u,"class","vc-table-row vc-left-border")},m:function(X,ae){(0,n.$Tr)(X,f,ae),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(c,h),(0,n.R3I)(c,x),(0,n.yef)(S,x,null),(0,n.R3I)(f,L);for(var re=0;re<N.length;re+=1)N[re].m(f,null);A=!0},p:function(X,ae){var re={};if(2&ae&&(re.content=X[8].getData),S.$set(re),10&ae){var ye;for(O=Object.entries(X[8].getData),ye=0;ye<O.length;ye+=1){var xe=Bi(X,O,ye);N[ye]?N[ye].p(xe,ae):(N[ye]=Gi(xe),N[ye].c(),N[ye].m(f,null))}for(;ye<N.length;ye+=1)N[ye].d(1);N.length=O.length}},i:function(X){A||((0,n.Ui)(S.$$.fragment,X),A=!0)},o:function(X){(0,n.etI)(S.$$.fragment,X),A=!1},d:function(X){X&&(0,n.ogt)(f),(0,n.vpE)(S),(0,n.RMB)(N,X)}}}function Gi(d){var f,u,c,h,x,S,L,A=d[11]+"",O=d[3](d[12])+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("div"),c=(0,n.fLW)(A),h=(0,n.DhX)(),x=(0,n.bGB)("div"),S=(0,n.fLW)(O),L=(0,n.DhX)(),(0,n.Ljt)(u,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(x,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(f,"class","vc-table-row vc-left-border vc-small")},m:function(N,ie){(0,n.$Tr)(N,f,ie),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(f,h),(0,n.R3I)(f,x),(0,n.R3I)(x,S),(0,n.R3I)(f,L)},p:function(N,ie){2&ie&&A!==(A=N[11]+"")&&(0,n.rTO)(c,A),2&ie&&O!==(O=N[3](N[12])+"")&&(0,n.rTO)(S,O)},d:function(N){N&&(0,n.ogt)(f)}}}function zi(d){var f,u,c,h,x,S,L,A;function O(X,ae){return typeof X[8].postData=="string"?Vr:Nr}S=new Ae({props:{content:d[8].postData}});var N=O(d),ie=N(d);return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("dl"),c=(0,n.bGB)("dt"),h=(0,n.fLW)(`Request Payload
                `),x=(0,n.bGB)("i"),(0,n.YCL)(S.$$.fragment),L=(0,n.DhX)(),ie.c(),(0,n.Ljt)(x,"class","vc-table-row-icon"),(0,n.Ljt)(c,"class","vc-table-col vc-table-col-title"),(0,n.Ljt)(u,"class","vc-table-row vc-left-border")},m:function(X,ae){(0,n.$Tr)(X,f,ae),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(c,h),(0,n.R3I)(c,x),(0,n.yef)(S,x,null),(0,n.R3I)(f,L),ie.m(f,null),A=!0},p:function(X,ae){var re={};2&ae&&(re.content=X[8].postData),S.$set(re),N===(N=O(X))&&ie?ie.p(X,ae):(ie.d(1),(ie=N(X))&&(ie.c(),ie.m(f,null)))},i:function(X){A||((0,n.Ui)(S.$$.fragment,X),A=!0)},o:function(X){(0,n.etI)(S.$$.fragment,X),A=!1},d:function(X){X&&(0,n.ogt)(f),(0,n.vpE)(S),ie.d()}}}function Nr(d){for(var f,u=Object.entries(d[8].postData),c=[],h=0;h<u.length;h+=1)c[h]=Wi(Oi(d,u,h));return{c:function(){for(var x=0;x<c.length;x+=1)c[x].c();f=(0,n.cSb)()},m:function(x,S){for(var L=0;L<c.length;L+=1)c[L].m(x,S);(0,n.$Tr)(x,f,S)},p:function(x,S){if(10&S){var L;for(u=Object.entries(x[8].postData),L=0;L<u.length;L+=1){var A=Oi(x,u,L);c[L]?c[L].p(A,S):(c[L]=Wi(A),c[L].c(),c[L].m(f.parentNode,f))}for(;L<c.length;L+=1)c[L].d(1);c.length=u.length}},d:function(x){(0,n.RMB)(c,x),x&&(0,n.ogt)(f)}}}function Vr(d){var f,u,c,h=d[8].postData+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("pre"),c=(0,n.fLW)(h),(0,n.Ljt)(u,"class","vc-table-col vc-table-col-value vc-max-height-line"),(0,n.Ljt)(f,"class","vc-table-row vc-left-border vc-small")},m:function(x,S){(0,n.$Tr)(x,f,S),(0,n.R3I)(f,u),(0,n.R3I)(u,c)},p:function(x,S){2&S&&h!==(h=x[8].postData+"")&&(0,n.rTO)(c,h)},d:function(x){x&&(0,n.ogt)(f)}}}function Wi(d){var f,u,c,h,x,S,L,A=d[11]+"",O=d[3](d[12])+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("div"),c=(0,n.fLW)(A),h=(0,n.DhX)(),x=(0,n.bGB)("div"),S=(0,n.fLW)(O),L=(0,n.DhX)(),(0,n.Ljt)(u,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(x,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(f,"class","vc-table-row vc-left-border vc-small")},m:function(N,ie){(0,n.$Tr)(N,f,ie),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(f,h),(0,n.R3I)(f,x),(0,n.R3I)(x,S),(0,n.R3I)(f,L)},p:function(N,ie){2&ie&&A!==(A=N[11]+"")&&(0,n.rTO)(c,A),2&ie&&O!==(O=N[3](N[12])+"")&&(0,n.rTO)(S,O)},d:function(N){N&&(0,n.ogt)(f)}}}function $i(d){var f,u,c,h,x,S,L,A;S=new Ae({props:{content:d[8].header}});for(var O=Object.entries(d[8].header),N=[],ie=0;ie<O.length;ie+=1)N[ie]=Hi(Ii(d,O,ie));return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("dl"),c=(0,n.bGB)("dt"),h=(0,n.fLW)(`Response Headers
                `),x=(0,n.bGB)("i"),(0,n.YCL)(S.$$.fragment),L=(0,n.DhX)();for(var X=0;X<N.length;X+=1)N[X].c();(0,n.Ljt)(x,"class","vc-table-row-icon"),(0,n.Ljt)(c,"class","vc-table-col vc-table-col-title"),(0,n.Ljt)(u,"class","vc-table-row vc-left-border")},m:function(X,ae){(0,n.$Tr)(X,f,ae),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(c,h),(0,n.R3I)(c,x),(0,n.yef)(S,x,null),(0,n.R3I)(f,L);for(var re=0;re<N.length;re+=1)N[re].m(f,null);A=!0},p:function(X,ae){var re={};if(2&ae&&(re.content=X[8].header),S.$set(re),10&ae){var ye;for(O=Object.entries(X[8].header),ye=0;ye<O.length;ye+=1){var xe=Ii(X,O,ye);N[ye]?N[ye].p(xe,ae):(N[ye]=Hi(xe),N[ye].c(),N[ye].m(f,null))}for(;ye<N.length;ye+=1)N[ye].d(1);N.length=O.length}},i:function(X){A||((0,n.Ui)(S.$$.fragment,X),A=!0)},o:function(X){(0,n.etI)(S.$$.fragment,X),A=!1},d:function(X){X&&(0,n.ogt)(f),(0,n.vpE)(S),(0,n.RMB)(N,X)}}}function Hi(d){var f,u,c,h,x,S,L,A=d[11]+"",O=d[3](d[12])+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("div"),c=(0,n.fLW)(A),h=(0,n.DhX)(),x=(0,n.bGB)("div"),S=(0,n.fLW)(O),L=(0,n.DhX)(),(0,n.Ljt)(u,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(x,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(f,"class","vc-table-row vc-left-border vc-small")},m:function(N,ie){(0,n.$Tr)(N,f,ie),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(f,h),(0,n.R3I)(f,x),(0,n.R3I)(x,S),(0,n.R3I)(f,L)},p:function(N,ie){2&ie&&A!==(A=N[11]+"")&&(0,n.rTO)(c,A),2&ie&&O!==(O=N[3](N[12])+"")&&(0,n.rTO)(S,O)},d:function(N){N&&(0,n.ogt)(f)}}}function ji(d){var f,u,c,h,x,S=d[8].responseSizeText+"";return{c:function(){f=(0,n.bGB)("div"),(u=(0,n.bGB)("div")).textContent="Size",c=(0,n.DhX)(),h=(0,n.bGB)("div"),x=(0,n.fLW)(S),(0,n.Ljt)(u,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(h,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(f,"class","vc-table-row vc-left-border vc-small")},m:function(L,A){(0,n.$Tr)(L,f,A),(0,n.R3I)(f,u),(0,n.R3I)(f,c),(0,n.R3I)(f,h),(0,n.R3I)(h,x)},p:function(L,A){2&A&&S!==(S=L[8].responseSizeText+"")&&(0,n.rTO)(x,S)},d:function(L){L&&(0,n.ogt)(f)}}}function qi(d){var f,u,c,h,x,S,L,A,O,N,ie,X,ae,re,ye,xe,Ge,qe,Ve,ot,Dt,Gt,zt,Ct,Mt,vt,Wt,qt,xt,wt,bt,Ke,ct,gt,Xe,Kt,Te,Ye,mt,St,Pt,yt,In,$t,En,Ht,Tn,At,yn,On,xr,Gn,Mn,br,pi,zn,Wn,mi,yr,$n,Zt,gi,Mr,Hn=d[8].name+"",jn=d[8].method+"",qn=d[8].statusText+"",Xn=d[8].costTime+"",Kn=d[8].url+"",Zn=d[8].method+"",Yn=d[8].requestType+"",Jn=d[8].status+"",Qn=(d[8].response||"")+"";function vo(){return d[4](d[8])}qe=new Ae({props:{content:d[8].url}});var Bt=d[8].requestHeader!==null&&Ni(d),Ut=d[8].getData!==null&&ki(d),Ft=d[8].postData!==null&&zi(d),Nt=d[8].header!==null&&$i(d);Mn=new Ae({props:{content:d[8].response}});var en=d[8].responseSize>0&&ji(d);return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("dl"),c=(0,n.bGB)("dd"),h=(0,n.fLW)(Hn),x=(0,n.bGB)("dd"),S=(0,n.fLW)(jn),L=(0,n.bGB)("dd"),A=(0,n.fLW)(qn),O=(0,n.bGB)("dd"),N=(0,n.fLW)(Xn),ie=(0,n.DhX)(),X=(0,n.bGB)("div"),ae=(0,n.bGB)("div"),re=(0,n.bGB)("dl"),ye=(0,n.bGB)("dt"),xe=(0,n.fLW)(`General
                `),Ge=(0,n.bGB)("i"),(0,n.YCL)(qe.$$.fragment),Ve=(0,n.DhX)(),ot=(0,n.bGB)("div"),(Dt=(0,n.bGB)("div")).textContent="URL",Gt=(0,n.DhX)(),zt=(0,n.bGB)("div"),Ct=(0,n.fLW)(Kn),Mt=(0,n.DhX)(),vt=(0,n.bGB)("div"),(Wt=(0,n.bGB)("div")).textContent="Method",qt=(0,n.DhX)(),xt=(0,n.bGB)("div"),wt=(0,n.fLW)(Zn),bt=(0,n.DhX)(),Ke=(0,n.bGB)("div"),(ct=(0,n.bGB)("div")).textContent="Request Type",gt=(0,n.DhX)(),Xe=(0,n.bGB)("div"),Kt=(0,n.fLW)(Yn),Te=(0,n.DhX)(),Ye=(0,n.bGB)("div"),(mt=(0,n.bGB)("div")).textContent="HTTP Status",St=(0,n.DhX)(),Pt=(0,n.bGB)("div"),yt=(0,n.fLW)(Jn),In=(0,n.DhX)(),Bt&&Bt.c(),$t=(0,n.DhX)(),Ut&&Ut.c(),En=(0,n.DhX)(),Ft&&Ft.c(),Ht=(0,n.DhX)(),Nt&&Nt.c(),Tn=(0,n.DhX)(),At=(0,n.bGB)("div"),yn=(0,n.bGB)("dl"),On=(0,n.bGB)("dt"),xr=(0,n.fLW)(`Response
                `),Gn=(0,n.bGB)("i"),(0,n.YCL)(Mn.$$.fragment),br=(0,n.DhX)(),en&&en.c(),pi=(0,n.DhX)(),zn=(0,n.bGB)("div"),Wn=(0,n.bGB)("pre"),mi=(0,n.fLW)(Qn),yr=(0,n.DhX)(),(0,n.Ljt)(c,"class","vc-table-col vc-table-col-4"),(0,n.Ljt)(x,"class","vc-table-col"),(0,n.Ljt)(L,"class","vc-table-col"),(0,n.Ljt)(O,"class","vc-table-col"),(0,n.Ljt)(u,"class","vc-table-row vc-group-preview"),(0,n.VHj)(u,"vc-table-row-error",d[8].status>=400),(0,n.Ljt)(Ge,"class","vc-table-row-icon"),(0,n.Ljt)(ye,"class","vc-table-col vc-table-col-title"),(0,n.Ljt)(re,"class","vc-table-row vc-left-border"),(0,n.Ljt)(Dt,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(zt,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(ot,"class","vc-table-row vc-left-border vc-small"),(0,n.Ljt)(Wt,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(xt,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(vt,"class","vc-table-row vc-left-border vc-small"),(0,n.Ljt)(ct,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(Xe,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(Ke,"class","vc-table-row vc-left-border vc-small"),(0,n.Ljt)(mt,"class","vc-table-col vc-table-col-2"),(0,n.Ljt)(Pt,"class","vc-table-col vc-table-col-4 vc-table-col-value vc-max-height-line"),(0,n.Ljt)(Ye,"class","vc-table-row vc-left-border vc-small"),(0,n.Ljt)(Gn,"class","vc-table-row-icon"),(0,n.Ljt)(On,"class","vc-table-col vc-table-col-title"),(0,n.Ljt)(yn,"class","vc-table-row vc-left-border"),(0,n.Ljt)(Wn,"class","vc-table-col vc-max-height vc-min-height"),(0,n.Ljt)(zn,"class","vc-table-row vc-left-border vc-small"),(0,n.Ljt)(X,"class","vc-group-detail"),(0,n.Ljt)(f,"class","vc-group"),(0,n.Ljt)(f,"id",$n=d[8].id),(0,n.VHj)(f,"vc-actived",d[8].actived)},m:function(nn,Et){(0,n.$Tr)(nn,f,Et),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(c,h),(0,n.R3I)(u,x),(0,n.R3I)(x,S),(0,n.R3I)(u,L),(0,n.R3I)(L,A),(0,n.R3I)(u,O),(0,n.R3I)(O,N),(0,n.R3I)(f,ie),(0,n.R3I)(f,X),(0,n.R3I)(X,ae),(0,n.R3I)(ae,re),(0,n.R3I)(re,ye),(0,n.R3I)(ye,xe),(0,n.R3I)(ye,Ge),(0,n.yef)(qe,Ge,null),(0,n.R3I)(ae,Ve),(0,n.R3I)(ae,ot),(0,n.R3I)(ot,Dt),(0,n.R3I)(ot,Gt),(0,n.R3I)(ot,zt),(0,n.R3I)(zt,Ct),(0,n.R3I)(ae,Mt),(0,n.R3I)(ae,vt),(0,n.R3I)(vt,Wt),(0,n.R3I)(vt,qt),(0,n.R3I)(vt,xt),(0,n.R3I)(xt,wt),(0,n.R3I)(ae,bt),(0,n.R3I)(ae,Ke),(0,n.R3I)(Ke,ct),(0,n.R3I)(Ke,gt),(0,n.R3I)(Ke,Xe),(0,n.R3I)(Xe,Kt),(0,n.R3I)(ae,Te),(0,n.R3I)(ae,Ye),(0,n.R3I)(Ye,mt),(0,n.R3I)(Ye,St),(0,n.R3I)(Ye,Pt),(0,n.R3I)(Pt,yt),(0,n.R3I)(X,In),Bt&&Bt.m(X,null),(0,n.R3I)(X,$t),Ut&&Ut.m(X,null),(0,n.R3I)(X,En),Ft&&Ft.m(X,null),(0,n.R3I)(X,Ht),Nt&&Nt.m(X,null),(0,n.R3I)(X,Tn),(0,n.R3I)(X,At),(0,n.R3I)(At,yn),(0,n.R3I)(yn,On),(0,n.R3I)(On,xr),(0,n.R3I)(On,Gn),(0,n.yef)(Mn,Gn,null),(0,n.R3I)(At,br),en&&en.m(At,null),(0,n.R3I)(At,pi),(0,n.R3I)(At,zn),(0,n.R3I)(zn,Wn),(0,n.R3I)(Wn,mi),(0,n.R3I)(f,yr),Zt=!0,gi||(Mr=(0,n.oLt)(u,"click",vo),gi=!0)},p:function(nn,Et){d=nn,(!Zt||2&Et)&&Hn!==(Hn=d[8].name+"")&&(0,n.rTO)(h,Hn),(!Zt||2&Et)&&jn!==(jn=d[8].method+"")&&(0,n.rTO)(S,jn),(!Zt||2&Et)&&qn!==(qn=d[8].statusText+"")&&(0,n.rTO)(A,qn),(!Zt||2&Et)&&Xn!==(Xn=d[8].costTime+"")&&(0,n.rTO)(N,Xn),2&Et&&(0,n.VHj)(u,"vc-table-row-error",d[8].status>=400);var Sr={};2&Et&&(Sr.content=d[8].url),qe.$set(Sr),(!Zt||2&Et)&&Kn!==(Kn=d[8].url+"")&&(0,n.rTO)(Ct,Kn),(!Zt||2&Et)&&Zn!==(Zn=d[8].method+"")&&(0,n.rTO)(wt,Zn),(!Zt||2&Et)&&Yn!==(Yn=d[8].requestType+"")&&(0,n.rTO)(Kt,Yn),(!Zt||2&Et)&&Jn!==(Jn=d[8].status+"")&&(0,n.rTO)(yt,Jn),d[8].requestHeader!==null?Bt?(Bt.p(d,Et),2&Et&&(0,n.Ui)(Bt,1)):((Bt=Ni(d)).c(),(0,n.Ui)(Bt,1),Bt.m(X,$t)):Bt&&((0,n.dvw)(),(0,n.etI)(Bt,1,1,function(){Bt=null}),(0,n.gbL)()),d[8].getData!==null?Ut?(Ut.p(d,Et),2&Et&&(0,n.Ui)(Ut,1)):((Ut=ki(d)).c(),(0,n.Ui)(Ut,1),Ut.m(X,En)):Ut&&((0,n.dvw)(),(0,n.etI)(Ut,1,1,function(){Ut=null}),(0,n.gbL)()),d[8].postData!==null?Ft?(Ft.p(d,Et),2&Et&&(0,n.Ui)(Ft,1)):((Ft=zi(d)).c(),(0,n.Ui)(Ft,1),Ft.m(X,Ht)):Ft&&((0,n.dvw)(),(0,n.etI)(Ft,1,1,function(){Ft=null}),(0,n.gbL)()),d[8].header!==null?Nt?(Nt.p(d,Et),2&Et&&(0,n.Ui)(Nt,1)):((Nt=$i(d)).c(),(0,n.Ui)(Nt,1),Nt.m(X,Tn)):Nt&&((0,n.dvw)(),(0,n.etI)(Nt,1,1,function(){Nt=null}),(0,n.gbL)());var wr={};2&Et&&(wr.content=d[8].response),Mn.$set(wr),d[8].responseSize>0?en?en.p(d,Et):((en=ji(d)).c(),en.m(At,pi)):en&&(en.d(1),en=null),(!Zt||2&Et)&&Qn!==(Qn=(d[8].response||"")+"")&&(0,n.rTO)(mi,Qn),(!Zt||2&Et&&$n!==($n=d[8].id))&&(0,n.Ljt)(f,"id",$n),2&Et&&(0,n.VHj)(f,"vc-actived",d[8].actived)},i:function(nn){Zt||((0,n.Ui)(qe.$$.fragment,nn),(0,n.Ui)(Bt),(0,n.Ui)(Ut),(0,n.Ui)(Ft),(0,n.Ui)(Nt),(0,n.Ui)(Mn.$$.fragment,nn),Zt=!0)},o:function(nn){(0,n.etI)(qe.$$.fragment,nn),(0,n.etI)(Bt),(0,n.etI)(Ut),(0,n.etI)(Ft),(0,n.etI)(Nt),(0,n.etI)(Mn.$$.fragment,nn),Zt=!1},d:function(nn){nn&&(0,n.ogt)(f),(0,n.vpE)(qe),Bt&&Bt.d(),Ut&&Ut.d(),Ft&&Ft.d(),Nt&&Nt.d(),(0,n.vpE)(Mn),en&&en.d(),gi=!1,Mr()}}}function kr(d){for(var f,u,c,h,x,S,L,A,O,N,ie=d[0]>0&&Fi(d),X=Object.entries(d[1]),ae=[],re=0;re<X.length;re+=1)ae[re]=qi(Pi(d,X,re));var ye=function(xe){return(0,n.etI)(ae[xe],1,1,function(){ae[xe]=null})};return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("dl"),c=(0,n.bGB)("dd"),h=(0,n.fLW)("Name "),ie&&ie.c(),(x=(0,n.bGB)("dd")).textContent="Method",(S=(0,n.bGB)("dd")).textContent="Status",(L=(0,n.bGB)("dd")).textContent="Time",A=(0,n.DhX)(),O=(0,n.bGB)("div");for(var xe=0;xe<ae.length;xe+=1)ae[xe].c();(0,n.Ljt)(c,"class","vc-table-col vc-table-col-4"),(0,n.Ljt)(x,"class","vc-table-col"),(0,n.Ljt)(S,"class","vc-table-col"),(0,n.Ljt)(L,"class","vc-table-col"),(0,n.Ljt)(u,"class","vc-table-row"),(0,n.Ljt)(O,"class","vc-plugin-content"),(0,n.Ljt)(f,"class","vc-table")},m:function(xe,Ge){(0,n.$Tr)(xe,f,Ge),(0,n.R3I)(f,u),(0,n.R3I)(u,c),(0,n.R3I)(c,h),ie&&ie.m(c,null),(0,n.R3I)(u,x),(0,n.R3I)(u,S),(0,n.R3I)(u,L),(0,n.R3I)(f,A),(0,n.R3I)(f,O);for(var qe=0;qe<ae.length;qe+=1)ae[qe].m(O,null);N=!0},p:function(xe,Ge){var qe=Ge[0];if(xe[0]>0?ie?ie.p(xe,qe):((ie=Fi(xe)).c(),ie.m(c,null)):ie&&(ie.d(1),ie=null),14&qe){var Ve;for(X=Object.entries(xe[1]),Ve=0;Ve<X.length;Ve+=1){var ot=Pi(xe,X,Ve);ae[Ve]?(ae[Ve].p(ot,qe),(0,n.Ui)(ae[Ve],1)):(ae[Ve]=qi(ot),ae[Ve].c(),(0,n.Ui)(ae[Ve],1),ae[Ve].m(O,null))}for((0,n.dvw)(),Ve=X.length;Ve<ae.length;Ve+=1)ye(Ve);(0,n.gbL)()}},i:function(xe){if(!N){for(var Ge=0;Ge<X.length;Ge+=1)(0,n.Ui)(ae[Ge]);N=!0}},o:function(xe){ae=ae.filter(Boolean);for(var Ge=0;Ge<ae.length;Ge+=1)(0,n.etI)(ae[Ge]);N=!1},d:function(xe){xe&&(0,n.ogt)(f),ie&&ie.d(),(0,n.RMB)(ae,xe)}}}function Gr(d,f,u){var c;(0,n.FIv)(d,pn,function(A){return u(1,c=A)});var h=0,x=function(A){u(0,h=Object.keys(A).length)},S=pn.subscribe(x);x(c);var L=function(A){(0,n.fxP)(pn,c[A].actived=!c[A].actived,c)};return(0,l.H3)(function(){Di.use()}),(0,l.ev)(function(){S(),Di.unuse()}),[h,c,L,function(A){return e.Kn(A)||e.kJ(A)?e.hZ(A,{maxDepth:10,keyMaxLen:1e4,pretty:!0}):A},function(A){return L(A.id)}]}var zr=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,Gr,kr,n.N8,{}),c}return(0,a.Z)(f,d),f}(n.f_C),Wr=zr,$r=function(d){function f(){for(var c,h=arguments.length,x=new Array(h),S=0;S<h;S++)x[S]=arguments[S];return(c=d.call.apply(d,[this].concat(x))||this).model=Un.getSingleton(Un,"VConsoleNetworkModel"),c}(0,a.Z)(f,d);var u=f.prototype;return u.add=function(c){var h=new Ci(new An);for(var x in c)h[x]=c[x];return h.startTime=h.startTime||Date.now(),h.requestType=h.requestType||"custom",this.model.updateRequest(h.id,h),h},u.update=function(c,h){this.model.updateRequest(c,h)},u.clear=function(){this.model.clearLog()},f}(Mi),Xi=function(d){function f(c,h,x){var S;return x===void 0&&(x={}),(S=d.call(this,c,h,Wr,x)||this).model=Un.getSingleton(Un,"VConsoleNetworkModel"),S.exporter=void 0,S.exporter=new $r(c),S}(0,a.Z)(f,d);var u=f.prototype;return u.onReady=function(){d.prototype.onReady.call(this),this.onUpdateOption()},u.onAddTool=function(c){var h=this;c([{name:"Clear",global:!1,onClick:function(x){h.model.clearLog()}}])},u.onRemove=function(){d.prototype.onRemove.call(this),this.model&&this.model.unMock()},u.onUpdateOption=function(){var c,h;((c=this.vConsole.option.network)==null?void 0:c.maxNetworkNumber)!==this.model.maxNetworkNumber&&(this.model.maxNetworkNumber=Number((h=this.vConsole.option.network)==null?void 0:h.maxNetworkNumber)||1e3)},f}(it),Hr=__webpack_require__(8679),jr=__webpack_require__.n(Hr),Nn=(0,kt.fZ)(),Dn=(0,kt.fZ)(),Vn=__webpack_require__(5670),Pn={};Vn.Z&&Vn.Z.locals&&(Pn.locals=Vn.Z.locals);var hi,di=0,bn={};bn.styleTagTransform=k(),bn.setAttributes=w(),bn.insert=E().bind(null,"head"),bn.domAPI=y(),bn.insertStyleElement=C(),Pn.use=function(d){return bn.options=d||{},di++||(hi=_()(Vn.Z,bn)),Pn},Pn.unuse=function(){di>0&&!--di&&(hi(),hi=null)};var Ki=Pn;function Zi(d,f,u){var c=d.slice();return c[8]=f[u],c}function Yi(d,f,u){var c=d.slice();return c[11]=f[u],c}function Ji(d){var f,u,c,h=d[0].nodeType===Node.ELEMENT_NODE&&Qi(d),x=d[0].nodeType===Node.TEXT_NODE&&ar(d);return{c:function(){f=(0,n.bGB)("div"),h&&h.c(),u=(0,n.DhX)(),x&&x.c(),(0,n.Ljt)(f,"class","vcelm-l"),(0,n.VHj)(f,"vc-actived",d[0]._isActived),(0,n.VHj)(f,"vc-toggle",d[0]._isExpand),(0,n.VHj)(f,"vcelm-noc",d[0]._isSingleLine)},m:function(S,L){(0,n.$Tr)(S,f,L),h&&h.m(f,null),(0,n.R3I)(f,u),x&&x.m(f,null),c=!0},p:function(S,L){S[0].nodeType===Node.ELEMENT_NODE?h?(h.p(S,L),1&L&&(0,n.Ui)(h,1)):((h=Qi(S)).c(),(0,n.Ui)(h,1),h.m(f,u)):h&&((0,n.dvw)(),(0,n.etI)(h,1,1,function(){h=null}),(0,n.gbL)()),S[0].nodeType===Node.TEXT_NODE?x?x.p(S,L):((x=ar(S)).c(),x.m(f,null)):x&&(x.d(1),x=null),1&L&&(0,n.VHj)(f,"vc-actived",S[0]._isActived),1&L&&(0,n.VHj)(f,"vc-toggle",S[0]._isExpand),1&L&&(0,n.VHj)(f,"vcelm-noc",S[0]._isSingleLine)},i:function(S){c||((0,n.Ui)(h),c=!0)},o:function(S){(0,n.etI)(h),c=!1},d:function(S){S&&(0,n.ogt)(f),h&&h.d(),x&&x.d()}}}function Qi(d){var f,u,c,h,x,S,L,A,O,N,ie=d[0].nodeName+"",X=(d[0].className||d[0].attributes.length)&&er(d),ae=d[0]._isNullEndTag&&nr(),re=d[0].childNodes.length>0&&ir(d),ye=!d[0]._isNullEndTag&&or(d);return{c:function(){f=(0,n.bGB)("span"),u=(0,n.fLW)("<"),c=(0,n.fLW)(ie),X&&X.c(),h=(0,n.cSb)(),ae&&ae.c(),x=(0,n.fLW)(">"),re&&re.c(),S=(0,n.cSb)(),ye&&ye.c(),L=(0,n.cSb)(),(0,n.Ljt)(f,"class","vcelm-node")},m:function(xe,Ge){(0,n.$Tr)(xe,f,Ge),(0,n.R3I)(f,u),(0,n.R3I)(f,c),X&&X.m(f,null),(0,n.R3I)(f,h),ae&&ae.m(f,null),(0,n.R3I)(f,x),re&&re.m(xe,Ge),(0,n.$Tr)(xe,S,Ge),ye&&ye.m(xe,Ge),(0,n.$Tr)(xe,L,Ge),A=!0,O||(N=(0,n.oLt)(f,"click",d[2]),O=!0)},p:function(xe,Ge){(!A||1&Ge)&&ie!==(ie=xe[0].nodeName+"")&&(0,n.rTO)(c,ie),xe[0].className||xe[0].attributes.length?X?X.p(xe,Ge):((X=er(xe)).c(),X.m(f,h)):X&&(X.d(1),X=null),xe[0]._isNullEndTag?ae||((ae=nr()).c(),ae.m(f,x)):ae&&(ae.d(1),ae=null),xe[0].childNodes.length>0?re?(re.p(xe,Ge),1&Ge&&(0,n.Ui)(re,1)):((re=ir(xe)).c(),(0,n.Ui)(re,1),re.m(S.parentNode,S)):re&&((0,n.dvw)(),(0,n.etI)(re,1,1,function(){re=null}),(0,n.gbL)()),xe[0]._isNullEndTag?ye&&(ye.d(1),ye=null):ye?ye.p(xe,Ge):((ye=or(xe)).c(),ye.m(L.parentNode,L))},i:function(xe){A||((0,n.Ui)(re),A=!0)},o:function(xe){(0,n.etI)(re),A=!1},d:function(xe){xe&&(0,n.ogt)(f),X&&X.d(),ae&&ae.d(),re&&re.d(xe),xe&&(0,n.ogt)(S),ye&&ye.d(xe),xe&&(0,n.ogt)(L),O=!1,N()}}}function er(d){for(var f,u=d[0].attributes,c=[],h=0;h<u.length;h+=1)c[h]=tr(Yi(d,u,h));return{c:function(){f=(0,n.bGB)("i");for(var x=0;x<c.length;x+=1)c[x].c();(0,n.Ljt)(f,"class","vcelm-k")},m:function(x,S){(0,n.$Tr)(x,f,S);for(var L=0;L<c.length;L+=1)c[L].m(f,null)},p:function(x,S){if(1&S){var L;for(u=x[0].attributes,L=0;L<u.length;L+=1){var A=Yi(x,u,L);c[L]?c[L].p(A,S):(c[L]=tr(A),c[L].c(),c[L].m(f,null))}for(;L<c.length;L+=1)c[L].d(1);c.length=u.length}},d:function(x){x&&(0,n.ogt)(f),(0,n.RMB)(c,x)}}}function qr(d){var f,u=d[11].name+"";return{c:function(){f=(0,n.fLW)(u)},m:function(c,h){(0,n.$Tr)(c,f,h)},p:function(c,h){1&h&&u!==(u=c[11].name+"")&&(0,n.rTO)(f,u)},d:function(c){c&&(0,n.ogt)(f)}}}function Xr(d){var f,u,c,h,x,S=d[11].name+"",L=d[11].value+"";return{c:function(){f=(0,n.fLW)(S),u=(0,n.fLW)('="'),c=(0,n.bGB)("i"),h=(0,n.fLW)(L),x=(0,n.fLW)('"'),(0,n.Ljt)(c,"class","vcelm-v")},m:function(A,O){(0,n.$Tr)(A,f,O),(0,n.$Tr)(A,u,O),(0,n.$Tr)(A,c,O),(0,n.R3I)(c,h),(0,n.$Tr)(A,x,O)},p:function(A,O){1&O&&S!==(S=A[11].name+"")&&(0,n.rTO)(f,S),1&O&&L!==(L=A[11].value+"")&&(0,n.rTO)(h,L)},d:function(A){A&&(0,n.ogt)(f),A&&(0,n.ogt)(u),A&&(0,n.ogt)(c),A&&(0,n.ogt)(x)}}}function tr(d){var f,u;function c(S,L){return S[11].value!==""?Xr:qr}var h=c(d),x=h(d);return{c:function(){f=(0,n.fLW)(`\xA0
            `),x.c(),u=(0,n.cSb)()},m:function(S,L){(0,n.$Tr)(S,f,L),x.m(S,L),(0,n.$Tr)(S,u,L)},p:function(S,L){h===(h=c(S))&&x?x.p(S,L):(x.d(1),(x=h(S))&&(x.c(),x.m(u.parentNode,u)))},d:function(S){S&&(0,n.ogt)(f),x.d(S),S&&(0,n.ogt)(u)}}}function nr(d){var f;return{c:function(){f=(0,n.fLW)("/")},m:function(u,c){(0,n.$Tr)(u,f,c)},d:function(u){u&&(0,n.ogt)(f)}}}function ir(d){var f,u,c,h,x=[Zr,Kr],S=[];function L(A,O){return A[0]._isExpand?1:0}return f=L(d),u=S[f]=x[f](d),{c:function(){u.c(),c=(0,n.cSb)()},m:function(A,O){S[f].m(A,O),(0,n.$Tr)(A,c,O),h=!0},p:function(A,O){var N=f;(f=L(A))===N?S[f].p(A,O):((0,n.dvw)(),(0,n.etI)(S[N],1,1,function(){S[N]=null}),(0,n.gbL)(),(u=S[f])?u.p(A,O):(u=S[f]=x[f](A)).c(),(0,n.Ui)(u,1),u.m(c.parentNode,c))},i:function(A){h||((0,n.Ui)(u),h=!0)},o:function(A){(0,n.etI)(u),h=!1},d:function(A){S[f].d(A),A&&(0,n.ogt)(c)}}}function Kr(d){for(var f,u,c=d[0].childNodes,h=[],x=0;x<c.length;x+=1)h[x]=rr(Zi(d,c,x));var S=function(L){return(0,n.etI)(h[L],1,1,function(){h[L]=null})};return{c:function(){for(var L=0;L<h.length;L+=1)h[L].c();f=(0,n.cSb)()},m:function(L,A){for(var O=0;O<h.length;O+=1)h[O].m(L,A);(0,n.$Tr)(L,f,A),u=!0},p:function(L,A){if(1&A){var O;for(c=L[0].childNodes,O=0;O<c.length;O+=1){var N=Zi(L,c,O);h[O]?(h[O].p(N,A),(0,n.Ui)(h[O],1)):(h[O]=rr(N),h[O].c(),(0,n.Ui)(h[O],1),h[O].m(f.parentNode,f))}for((0,n.dvw)(),O=c.length;O<h.length;O+=1)S(O);(0,n.gbL)()}},i:function(L){if(!u){for(var A=0;A<c.length;A+=1)(0,n.Ui)(h[A]);u=!0}},o:function(L){h=h.filter(Boolean);for(var A=0;A<h.length;A+=1)(0,n.etI)(h[A]);u=!1},d:function(L){(0,n.RMB)(h,L),L&&(0,n.ogt)(f)}}}function Zr(d){var f;return{c:function(){f=(0,n.fLW)("...")},m:function(u,c){(0,n.$Tr)(u,f,c)},p:n.ZTd,i:n.ZTd,o:n.ZTd,d:function(u){u&&(0,n.ogt)(f)}}}function rr(d){var f,u,c;return(f=new sr({props:{node:d[8]}})).$on("toggleNode",d[4]),{c:function(){(0,n.YCL)(f.$$.fragment),u=(0,n.DhX)()},m:function(h,x){(0,n.yef)(f,h,x),(0,n.$Tr)(h,u,x),c=!0},p:function(h,x){var S={};1&x&&(S.node=h[8]),f.$set(S)},i:function(h){c||((0,n.Ui)(f.$$.fragment,h),c=!0)},o:function(h){(0,n.etI)(f.$$.fragment,h),c=!1},d:function(h){(0,n.vpE)(f,h),h&&(0,n.ogt)(u)}}}function or(d){var f,u,c,h,x=d[0].nodeName+"";return{c:function(){f=(0,n.bGB)("span"),u=(0,n.fLW)("</"),c=(0,n.fLW)(x),h=(0,n.fLW)(">"),(0,n.Ljt)(f,"class","vcelm-node")},m:function(S,L){(0,n.$Tr)(S,f,L),(0,n.R3I)(f,u),(0,n.R3I)(f,c),(0,n.R3I)(f,h)},p:function(S,L){1&L&&x!==(x=S[0].nodeName+"")&&(0,n.rTO)(c,x)},d:function(S){S&&(0,n.ogt)(f)}}}function ar(d){var f,u,c=d[1](d[0].textContent)+"";return{c:function(){f=(0,n.bGB)("span"),u=(0,n.fLW)(c),(0,n.Ljt)(f,"class","vcelm-t vcelm-noc")},m:function(h,x){(0,n.$Tr)(h,f,x),(0,n.R3I)(f,u)},p:function(h,x){1&x&&c!==(c=h[1](h[0].textContent)+"")&&(0,n.rTO)(u,c)},d:function(h){h&&(0,n.ogt)(f)}}}function Yr(d){var f,u,c=d[0]&&Ji(d);return{c:function(){c&&c.c(),f=(0,n.cSb)()},m:function(h,x){c&&c.m(h,x),(0,n.$Tr)(h,f,x),u=!0},p:function(h,x){var S=x[0];h[0]?c?(c.p(h,S),1&S&&(0,n.Ui)(c,1)):((c=Ji(h)).c(),(0,n.Ui)(c,1),c.m(f.parentNode,f)):c&&((0,n.dvw)(),(0,n.etI)(c,1,1,function(){c=null}),(0,n.gbL)())},i:function(h){u||((0,n.Ui)(c),u=!0)},o:function(h){(0,n.etI)(c),u=!1},d:function(h){c&&c.d(h),h&&(0,n.ogt)(f)}}}function Jr(d,f,u){var c;(0,n.FIv)(d,Dn,function(L){return u(3,c=L)});var h=f.node,x=(0,l.x)(),S=["br","hr","img","input","link","meta"];return(0,l.H3)(function(){Ki.use()}),(0,l.ev)(function(){Ki.unuse()}),d.$$set=function(L){"node"in L&&u(0,h=L.node)},d.$$.update=function(){9&d.$$.dirty&&h&&(u(0,h._isActived=h===c,h),u(0,h._isNullEndTag=function(L){return S.indexOf(L.nodeName)>-1}(h),h),u(0,h._isSingleLine=h.childNodes.length===0||h._isNullEndTag,h))},[h,function(L){return L.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},function(){h._isNullEndTag||(u(0,h._isExpand=!h._isExpand,h),x("toggleNode",{node:h}))},c,function(L){n.cKT.call(this,d,L)}]}var sr=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,Jr,Yr,n.N8,{node:0}),c}return(0,a.Z)(f,d),(0,s.Z)(f,[{key:"node",get:function(){return this.$$.ctx[0]},set:function(u){this.$$set({node:u}),(0,n.yl1)()}}]),f}(n.f_C),Qr=sr;function eo(d){var f,u,c;return(u=new Qr({props:{node:d[0]}})).$on("toggleNode",d[1]),{c:function(){f=(0,n.bGB)("div"),(0,n.YCL)(u.$$.fragment),(0,n.Ljt)(f,"class","vc-plugin-content")},m:function(h,x){(0,n.$Tr)(h,f,x),(0,n.yef)(u,f,null),c=!0},p:function(h,x){var S={};1&x[0]&&(S.node=h[0]),u.$set(S)},i:function(h){c||((0,n.Ui)(u.$$.fragment,h),c=!0)},o:function(h){(0,n.etI)(u.$$.fragment,h),c=!1},d:function(h){h&&(0,n.ogt)(f),(0,n.vpE)(u)}}}function to(d,f,u){var c;return(0,n.FIv)(d,Nn,function(h){return u(0,c=h)}),[c,function(h){n.cKT.call(this,d,h)}]}var no=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,to,eo,n.N8,{}),c}return(0,a.Z)(f,d),f}(n.f_C),io=no,cr=function(d){function f(c,h,x){var S;return x===void 0&&(x={}),(S=d.call(this,c,h,io,x)||this).isInited=!1,S.observer=void 0,S.nodeMap=void 0,S}(0,a.Z)(f,d);var u=f.prototype;return u.onShow=function(){this.isInited||this._init()},u.onRemove=function(){d.prototype.onRemove.call(this),this.isInited&&(this.observer.disconnect(),this.isInited=!1,this.nodeMap=void 0,Nn.set(void 0))},u.onAddTool=function(c){var h=this;c([{name:"Expand",global:!1,onClick:function(x){h._expandActivedNode()}},{name:"Collapse",global:!1,onClick:function(x){h._collapseActivedNode()}}])},u._init=function(){var c=this;this.isInited=!0,this.nodeMap=new WeakMap;var h=this._generateVNode(document.documentElement);h._isExpand=!0,Dn.set(h),Nn.set(h),this.compInstance.$on("toggleNode",function(x){Dn.set(x.detail.node)}),this.observer=new(jr())(function(x){for(var S=0;S<x.length;S++){var L=x[S];c._isInVConsole(L.target)||c._handleMutation(L)}}),this.observer.observe(document.documentElement,{attributes:!0,childList:!0,characterData:!0,subtree:!0})},u._handleMutation=function(c){switch(c.type){case"childList":c.removedNodes.length>0&&this._onChildRemove(c),c.addedNodes.length>0&&this._onChildAdd(c);break;case"attributes":this._onAttributesChange(c);break;case"characterData":this._onCharacterDataChange(c)}},u._onChildRemove=function(c){var h=this.nodeMap.get(c.target);if(h){for(var x=0;x<c.removedNodes.length;x++){var S=this.nodeMap.get(c.removedNodes[x]);if(S){for(var L=0;L<h.childNodes.length;L++)if(h.childNodes[L]===S){h.childNodes.splice(L,1);break}this.nodeMap.delete(c.removedNodes[x])}}this._refreshStore()}},u._onChildAdd=function(c){var h=this.nodeMap.get(c.target);if(h){for(var x=0;x<c.addedNodes.length;x++){var S=c.addedNodes[x],L=this._generateVNode(S);if(L){var A=void 0,O=S;do{if(O.nextSibling===null)break;O.nodeType===Node.ELEMENT_NODE&&(A=this.nodeMap.get(O.nextSibling)||void 0),O=O.nextSibling}while(A===void 0);if(A===void 0)h.childNodes.push(L);else for(var N=0;N<h.childNodes.length;N++)if(h.childNodes[N]===A){h.childNodes.splice(N,0,L);break}}}this._refreshStore()}},u._onAttributesChange=function(c){this._updateVNodeAttributes(c.target),this._refreshStore()},u._onCharacterDataChange=function(c){var h=this.nodeMap.get(c.target);h&&(h.textContent=c.target.textContent,this._refreshStore())},u._generateVNode=function(c){if(!this._isIgnoredNode(c)){var h={nodeType:c.nodeType,nodeName:c.nodeName.toLowerCase(),textContent:"",id:"",className:"",attributes:[],childNodes:[]};if(this.nodeMap.set(c,h),h.nodeType!=c.TEXT_NODE&&h.nodeType!=c.DOCUMENT_TYPE_NODE||(h.textContent=c.textContent),c.childNodes.length>0){h.childNodes=[];for(var x=0;x<c.childNodes.length;x++){var S=this._generateVNode(c.childNodes[x]);S&&h.childNodes.push(S)}}return this._updateVNodeAttributes(c),h}},u._updateVNodeAttributes=function(c){var h=this.nodeMap.get(c);if(h&&c instanceof Element&&(h.id=c.id||"",h.className=c.className||"",c.hasAttributes&&c.hasAttributes())){h.attributes=[];for(var x=0;x<c.attributes.length;x++)h.attributes.push({name:c.attributes[x].name,value:c.attributes[x].value||""})}},u._expandActivedNode=function(){var c=(0,kt.U2)(Dn);if(c._isExpand)for(var h=0;h<c.childNodes.length;h++)c.childNodes[h]._isExpand=!0;else c._isExpand=!0;this._refreshStore()},u._collapseActivedNode=function(){var c=(0,kt.U2)(Dn);if(c._isExpand){for(var h=!1,x=0;x<c.childNodes.length;x++)c.childNodes[x]._isExpand&&(h=!0,c.childNodes[x]._isExpand=!1);h||(c._isExpand=!1),this._refreshStore()}},u._isIgnoredNode=function(c){if(c.nodeType===c.TEXT_NODE){if(c.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g,"")==="")return!0}else if(c.nodeType===c.COMMENT_NODE)return!0;return!1},u._isInVConsole=function(c){for(var h=c;h!==void 0;){if(h.id=="__vconsole")return!0;h=h.parentElement||void 0}return!1},u._refreshStore=function(){Nn.update(function(c){return c})},f}(it);function lr(d,f,u,c,h,x,S){try{var L=d[x](S),A=L.value}catch(O){return void u(O)}L.done?f(A):Promise.resolve(A).then(c,h)}function wn(d){return function(){var f=this,u=arguments;return new Promise(function(c,h){var x=d.apply(f,u);function S(A){lr(x,c,h,S,L,"next",A)}function L(A){lr(x,c,h,S,L,"throw",A)}S(void 0)})}}var ro=__webpack_require__(4264),Rt=__webpack_require__.n(ro);function oo(d,f,u){return f in d?Object.defineProperty(d,f,{value:u,enumerable:!0,configurable:!0,writable:!0}):d[f]=u,d}function ur(d,f){var u=Object.keys(d);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(d);f&&(c=c.filter(function(h){return Object.getOwnPropertyDescriptor(d,h).enumerable})),u.push.apply(u,c)}return u}function fr(d){for(var f=1;f<arguments.length;f++){var u=arguments[f]!=null?arguments[f]:{};f%2?ur(Object(u),!0).forEach(function(c){oo(d,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(u)):ur(Object(u)).forEach(function(c){Object.defineProperty(d,c,Object.getOwnPropertyDescriptor(u,c))})}return d}var hr=function(d){if(!d||d.length===0)return{};for(var f={},u=d.split(";"),c=0;c<u.length;c++){var h=u[c].indexOf("=");if(!(h<0)){var x=u[c].substring(0,h).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),S=u[c].substring(h+1,u[c].length);try{x=decodeURIComponent(x)}catch{}try{S=decodeURIComponent(S)}catch{}f[x]=S}}return f},dr=function(d,f,u){typeof document!="undefined"&&document.cookie!==void 0&&(document.cookie=encodeURIComponent(d)+"="+encodeURIComponent(f)+function(c){c===void 0&&(c={});var h=c,x=h.path,S=h.domain,L=h.expires,A=h.secure,O=h.sameSite,N=["none","lax","strict"].indexOf((O||"").toLowerCase())>-1?O:null;return[x==null?"":";path="+x,S==null?"":";domain="+S,L==null?"":";expires="+L.toUTCString(),A===void 0||A===!1?"":";secure",N===null?"":";SameSite="+N].join("")}(u))},pr=function(){return typeof document=="undefined"||document.cookie===void 0?"":document.cookie},ao=function(){function d(){}var f=d.prototype;return f.key=function(u){return u<this.keys.length?this.keys[u]:null},f.setItem=function(u,c,h){dr(u,c,h)},f.getItem=function(u){var c=hr(pr());return Object.prototype.hasOwnProperty.call(c,u)?c[u]:null},f.removeItem=function(u,c){for(var h,x,S=["","/"],L=((h=location)==null||(x=h.hostname)==null?void 0:x.split("."))||[];L.length>1;)S.push(L.join(".")),L.shift();for(var A=0;A<S.length;A++)for(var O,N,ie=((O=location)==null||(N=O.pathname)==null?void 0:N.split("/"))||[],X="";ie.length>0;){X+=(X==="/"?"":"/")+ie.shift();var ae=fr(fr({},c),{},{path:X,domain:S[A],expires:new Date(0)});dr(u,"",ae)}},f.clear=function(){for(var u=[].concat(this.keys),c=0;c<u.length;c++)this.removeItem(u[c])},(0,s.Z)(d,[{key:"length",get:function(){return this.keys.length}},{key:"keys",get:function(){var u=hr(pr());return Object.keys(u).sort()}}]),d}(),so=function(){function d(){this.keys=[],this.currentSize=0,this.limitSize=0}var f=d.prototype;return f.key=function(u){return u<this.keys.length?this.keys[u]:null},f.prepare=function(){var u=wn(Rt().mark(function c(){var h=this;return Rt().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",new Promise(function(S,L){(0,e.qt)("getStorageInfo",{success:function(A){h.keys=A?A.keys.sort():[],h.currentSize=A?A.currentSize:0,h.limitSize=A?A.limitSize:0,S(!0)},fail:function(){L(!1)}})}));case 1:case"end":return x.stop()}},c)}));return function(){return u.apply(this,arguments)}}(),f.getItem=function(u){return new Promise(function(c,h){(0,e.qt)("getStorage",{key:u,success:function(x){var S=x.data;if(typeof x.data=="object")try{S=JSON.stringify(x.data)}catch{}c(S)},fail:function(x){h(x)}})})},f.setItem=function(u,c){return new Promise(function(h,x){(0,e.qt)("setStorage",{key:u,data:c,success:function(S){h(S)},fail:function(S){x(S)}})})},f.removeItem=function(u){return new Promise(function(c,h){(0,e.qt)("removeStorage",{key:u,success:function(x){c(x)},fail:function(x){h(x)}})})},f.clear=function(){return new Promise(function(u,c){(0,e.qt)("clearStorage",{success:function(h){u(h)},fail:function(h){c(h)}})})},(0,s.Z)(d,[{key:"length",get:function(){return this.keys.length}}]),d}(),Xt={updateTime:(0,kt.fZ)(0),activedName:(0,kt.fZ)(null),defaultStorages:(0,kt.fZ)(["cookies","localStorage","sessionStorage"])},kn=function(d){function f(){var c;return(c=d.call(this)||this).storage=new Map,Xt.activedName.subscribe(function(h){var x=(0,kt.U2)(Xt.defaultStorages);x.length>0&&x.indexOf(h)===-1&&Xt.activedName.set(x[0])}),Xt.defaultStorages.subscribe(function(h){h.indexOf((0,kt.U2)(Xt.activedName))===-1&&Xt.activedName.set(h[0]),c.updateEnabledStorages()}),c}(0,a.Z)(f,d);var u=f.prototype;return u.getItem=function(){var c=wn(Rt().mark(function h(x){return Rt().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(this.activedStorage){S.next=2;break}return S.abrupt("return","");case 2:return S.next=4,this.promisify(this.activedStorage.getItem(x));case 4:return S.abrupt("return",S.sent);case 5:case"end":return S.stop()}},h,this)}));return function(h){return c.apply(this,arguments)}}(),u.setItem=function(){var c=wn(Rt().mark(function h(x,S){var L;return Rt().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(this.activedStorage){A.next=2;break}return A.abrupt("return");case 2:return A.next=4,this.promisify(this.activedStorage.setItem(x,S));case 4:return L=A.sent,this.refresh(),A.abrupt("return",L);case 7:case"end":return A.stop()}},h,this)}));return function(h,x){return c.apply(this,arguments)}}(),u.removeItem=function(){var c=wn(Rt().mark(function h(x){var S;return Rt().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(this.activedStorage){L.next=2;break}return L.abrupt("return");case 2:return L.next=4,this.promisify(this.activedStorage.removeItem(x));case 4:return S=L.sent,this.refresh(),L.abrupt("return",S);case 7:case"end":return L.stop()}},h,this)}));return function(h){return c.apply(this,arguments)}}(),u.clear=function(){var c=wn(Rt().mark(function h(){var x;return Rt().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(this.activedStorage){S.next=2;break}return S.abrupt("return");case 2:return S.next=4,this.promisify(this.activedStorage.clear());case 4:return x=S.sent,this.refresh(),S.abrupt("return",x);case 7:case"end":return S.stop()}},h,this)}));return function(){return c.apply(this,arguments)}}(),u.refresh=function(){Xt.updateTime.set(Date.now())},u.getEntries=function(){var c=wn(Rt().mark(function h(){var x,S,L,A,O;return Rt().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(x=this.activedStorage){N.next=3;break}return N.abrupt("return",[]);case 3:if(typeof x.prepare!="function"){N.next=6;break}return N.next=6,x.prepare();case 6:S=[],L=0;case 8:if(!(L<x.length)){N.next=17;break}return A=x.key(L),N.next=12,this.getItem(A);case 12:O=N.sent,S.push([A,O]);case 14:L++,N.next=8;break;case 17:return N.abrupt("return",S);case 18:case"end":return N.stop()}},h,this)}));return function(){return c.apply(this,arguments)}}(),u.updateEnabledStorages=function(){var c=(0,kt.U2)(Xt.defaultStorages);c.indexOf("cookies")>-1?document.cookie!==void 0&&this.storage.set("cookies",new ao):this.deleteStorage("cookies"),c.indexOf("localStorage")>-1?window.localStorage&&this.storage.set("localStorage",window.localStorage):this.deleteStorage("localStorage"),c.indexOf("sessionStorage")>-1?window.sessionStorage&&this.storage.set("sessionStorage",window.sessionStorage):this.deleteStorage("sessionStorage"),c.indexOf("wxStorage")>-1?(0,e.H_)()&&this.storage.set("wxStorage",new so):this.deleteStorage("wxStorage")},u.promisify=function(c){return typeof c=="string"||c==null?Promise.resolve(c):c},u.deleteStorage=function(c){this.storage.has(c)&&this.storage.delete(c)},(0,s.Z)(f,[{key:"activedStorage",get:function(){return this.storage.get((0,kt.U2)(Xt.activedName))}}]),f}(Ei.N);function mr(d,f,u){var c=d.slice();return c[20]=f[u][0],c[21]=f[u][1],c[23]=u,c}function gr(d){var f;return{c:function(){f=(0,n.bGB)("div"),(0,n.Ljt)(f,"class","vc-plugin-empty")},m:function(u,c){(0,n.$Tr)(u,f,c)},p:n.ZTd,d:function(u){u&&(0,n.ogt)(f)}}}function co(d){var f,u,c,h,x,S=d[20]+"",L=d[5](d[21])+"";return{c:function(){f=(0,n.bGB)("div"),u=(0,n.fLW)(S),c=(0,n.DhX)(),h=(0,n.bGB)("div"),x=(0,n.fLW)(L),(0,n.Ljt)(f,"class","vc-table-col"),(0,n.Ljt)(h,"class","vc-table-col vc-table-col-2")},m:function(A,O){(0,n.$Tr)(A,f,O),(0,n.R3I)(f,u),(0,n.$Tr)(A,c,O),(0,n.$Tr)(A,h,O),(0,n.R3I)(h,x)},p:function(A,O){1&O&&S!==(S=A[20]+"")&&(0,n.rTO)(u,S),1&O&&L!==(L=A[5](A[21])+"")&&(0,n.rTO)(x,L)},d:function(A){A&&(0,n.ogt)(f),A&&(0,n.ogt)(c),A&&(0,n.ogt)(h)}}}function lo(d){var f,u,c,h,x,S,L;return{c:function(){f=(0,n.bGB)("div"),u=(0,n.bGB)("textarea"),c=(0,n.DhX)(),h=(0,n.bGB)("div"),x=(0,n.bGB)("textarea"),(0,n.Ljt)(u,"class","vc-table-input"),(0,n.Ljt)(f,"class","vc-table-col"),(0,n.Ljt)(x,"class","vc-table-input"),(0,n.Ljt)(h,"class","vc-table-col vc-table-col-2")},m:function(A,O){(0,n.$Tr)(A,f,O),(0,n.R3I)(f,u),(0,n.BmG)(u,d[2]),(0,n.$Tr)(A,c,O),(0,n.$Tr)(A,h,O),(0,n.R3I)(h,x),(0,n.BmG)(x,d[3]),S||(L=[(0,n.oLt)(u,"input",d[11]),(0,n.oLt)(x,"input",d[12])],S=!0)},p:function(A,O){4&O&&(0,n.BmG)(u,A[2]),8&O&&(0,n.BmG)(x,A[3])},d:function(A){A&&(0,n.ogt)(f),A&&(0,n.ogt)(c),A&&(0,n.ogt)(h),S=!1,(0,n.j7q)(L)}}}function uo(d){var f,u,c,h,x,S;return(f=new j.Z({props:{name:"delete"}})).$on("click",function(){return d[14](d[20])}),c=new Ae({props:{content:[d[20],d[21]].join("=")}}),(x=new j.Z({props:{name:"edit"}})).$on("click",function(){return d[15](d[20],d[21],d[23])}),{c:function(){(0,n.YCL)(f.$$.fragment),u=(0,n.DhX)(),(0,n.YCL)(c.$$.fragment),h=(0,n.DhX)(),(0,n.YCL)(x.$$.fragment)},m:function(L,A){(0,n.yef)(f,L,A),(0,n.$Tr)(L,u,A),(0,n.yef)(c,L,A),(0,n.$Tr)(L,h,A),(0,n.yef)(x,L,A),S=!0},p:function(L,A){d=L;var O={};1&A&&(O.content=[d[20],d[21]].join("=")),c.$set(O)},i:function(L){S||((0,n.Ui)(f.$$.fragment,L),(0,n.Ui)(c.$$.fragment,L),(0,n.Ui)(x.$$.fragment,L),S=!0)},o:function(L){(0,n.etI)(f.$$.fragment,L),(0,n.etI)(c.$$.fragment,L),(0,n.etI)(x.$$.fragment,L),S=!1},d:function(L){(0,n.vpE)(f,L),L&&(0,n.ogt)(u),(0,n.vpE)(c,L),L&&(0,n.ogt)(h),(0,n.vpE)(x,L)}}}function fo(d){var f,u,c,h;return(f=new j.Z({props:{name:"cancel"}})).$on("click",d[9]),(c=new j.Z({props:{name:"done"}})).$on("click",function(){return d[13](d[20])}),{c:function(){(0,n.YCL)(f.$$.fragment),u=(0,n.DhX)(),(0,n.YCL)(c.$$.fragment)},m:function(x,S){(0,n.yef)(f,x,S),(0,n.$Tr)(x,u,S),(0,n.yef)(c,x,S),h=!0},p:function(x,S){d=x},i:function(x){h||((0,n.Ui)(f.$$.fragment,x),(0,n.Ui)(c.$$.fragment,x),h=!0)},o:function(x){(0,n.etI)(f.$$.fragment,x),(0,n.etI)(c.$$.fragment,x),h=!1},d:function(x){(0,n.vpE)(f,x),x&&(0,n.ogt)(u),(0,n.vpE)(c,x)}}}function _r(d){var f,u,c,h,x,S,L;function A(re,ye){return re[1]===re[23]?lo:co}var O=A(d),N=O(d),ie=[fo,uo],X=[];function ae(re,ye){return re[1]===re[23]?0:1}return h=ae(d),x=X[h]=ie[h](d),{c:function(){f=(0,n.bGB)("div"),N.c(),u=(0,n.DhX)(),c=(0,n.bGB)("div"),x.c(),S=(0,n.DhX)(),(0,n.Ljt)(c,"class","vc-table-col vc-table-col-1 vc-table-action"),(0,n.Ljt)(f,"class","vc-table-row")},m:function(re,ye){(0,n.$Tr)(re,f,ye),N.m(f,null),(0,n.R3I)(f,u),(0,n.R3I)(f,c),X[h].m(c,null),(0,n.R3I)(f,S),L=!0},p:function(re,ye){O===(O=A(re))&&N?N.p(re,ye):(N.d(1),(N=O(re))&&(N.c(),N.m(f,u)));var xe=h;(h=ae(re))===xe?X[h].p(re,ye):((0,n.dvw)(),(0,n.etI)(X[xe],1,1,function(){X[xe]=null}),(0,n.gbL)(),(x=X[h])?x.p(re,ye):(x=X[h]=ie[h](re)).c(),(0,n.Ui)(x,1),x.m(c,null))},i:function(re){L||((0,n.Ui)(x),L=!0)},o:function(re){(0,n.etI)(x),L=!1},d:function(re){re&&(0,n.ogt)(f),N.d(),X[h].d()}}}function ho(d){for(var f,u,c,h,x=d[0],S=[],L=0;L<x.length;L+=1)S[L]=_r(mr(d,x,L));var A=function(N){return(0,n.etI)(S[N],1,1,function(){S[N]=null})},O=null;return x.length||(O=gr()),{c:function(){f=(0,n.bGB)("div"),(u=(0,n.bGB)("div")).innerHTML=`<div class="vc-table-col">Key</div> 
    <div class="vc-table-col vc-table-col-2">Value</div> 
    <div class="vc-table-col vc-table-col-1 vc-table-action"></div>`,c=(0,n.DhX)();for(var N=0;N<S.length;N+=1)S[N].c();O&&O.c(),(0,n.Ljt)(u,"class","vc-table-row"),(0,n.Ljt)(f,"class","vc-table")},m:function(N,ie){(0,n.$Tr)(N,f,ie),(0,n.R3I)(f,u),(0,n.R3I)(f,c);for(var X=0;X<S.length;X+=1)S[X].m(f,null);O&&O.m(f,null),h=!0},p:function(N,ie){var X=ie[0];if(1007&X){var ae;for(x=N[0],ae=0;ae<x.length;ae+=1){var re=mr(N,x,ae);S[ae]?(S[ae].p(re,X),(0,n.Ui)(S[ae],1)):(S[ae]=_r(re),S[ae].c(),(0,n.Ui)(S[ae],1),S[ae].m(f,null))}for((0,n.dvw)(),ae=x.length;ae<S.length;ae+=1)A(ae);(0,n.gbL)(),!x.length&&O?O.p(N,X):x.length?O&&(O.d(1),O=null):((O=gr()).c(),O.m(f,null))}},i:function(N){if(!h){for(var ie=0;ie<x.length;ie+=1)(0,n.Ui)(S[ie]);h=!0}},o:function(N){S=S.filter(Boolean);for(var ie=0;ie<S.length;ie+=1)(0,n.etI)(S[ie]);h=!1},d:function(N){N&&(0,n.ogt)(f),(0,n.RMB)(S,N),O&&O.d()}}}function po(d,f,u){var c,h=this&&this.__awaiter||function(ye,xe,Ge,qe){return new(Ge||(Ge=Promise))(function(Ve,ot){function Dt(Ct){try{zt(qe.next(Ct))}catch(Mt){ot(Mt)}}function Gt(Ct){try{zt(qe.throw(Ct))}catch(Mt){ot(Mt)}}function zt(Ct){var Mt;Ct.done?Ve(Ct.value):(Mt=Ct.value,Mt instanceof Ge?Mt:new Ge(function(vt){vt(Mt)})).then(Dt,Gt)}zt((qe=qe.apply(ye,xe||[])).next())})},x=kn.getSingleton(kn,"VConsoleStorageModel"),S=Xt.updateTime;(0,n.FIv)(d,S,function(ye){return u(10,c=ye)});var L=[],A=-1,O="",N="",ie=function(){u(1,A=-1),u(2,O=""),u(3,N="")},X=function(ye){return h(void 0,void 0,void 0,Rt().mark(function xe(){return Rt().wrap(function(Ge){for(;;)switch(Ge.prev=Ge.next){case 0:return Ge.next=2,x.removeItem(ye);case 2:case"end":return Ge.stop()}},xe)}))},ae=function(ye){return h(void 0,void 0,void 0,Rt().mark(function xe(){return Rt().wrap(function(Ge){for(;;)switch(Ge.prev=Ge.next){case 0:if(O===ye){Ge.next=3;break}return Ge.next=3,x.removeItem(ye);case 3:x.setItem(O,N),ie();case 5:case"end":return Ge.stop()}},xe)}))},re=function(ye,xe,Ge){return h(void 0,void 0,void 0,Rt().mark(function qe(){return Rt().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:u(2,O=ye),u(3,N=xe),u(1,A=Ge);case 3:case"end":return Ve.stop()}},qe)}))};return d.$$.update=function(){1024&d.$$.dirty&&c&&h(void 0,void 0,void 0,Rt().mark(function ye(){return Rt().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return ie(),xe.t0=u,xe.next=4,x.getEntries();case 4:xe.t1=L=xe.sent,(0,xe.t0)(0,xe.t1);case 6:case"end":return xe.stop()}},ye)}))},[L,A,O,N,S,function(ye){return(0,e.id)(ye,1024)},X,ae,re,function(){ie()},c,function(){O=this.value,u(2,O)},function(){N=this.value,u(3,N)},function(ye){return ae(ye)},function(ye){return X(ye)},function(ye,xe,Ge){return re(ye,xe,Ge)}]}var mo=function(d){function f(u){var c;return c=d.call(this)||this,(0,n.S1n)((0,o.Z)(c),u,po,ho,n.N8,{}),c}return(0,a.Z)(f,d),f}(n.f_C),go=mo,vr=function(d){function f(c,h,x){var S;return x===void 0&&(x={}),(S=d.call(this,c,h,go,x)||this).model=kn.getSingleton(kn,"VConsoleStorageModel"),S.onAddTopBarCallback=void 0,S}(0,a.Z)(f,d);var u=f.prototype;return u.onReady=function(){d.prototype.onReady.call(this),this.onUpdateOption()},u.onShow=function(){this.model.refresh()},u.onAddTopBar=function(c){this.onAddTopBarCallback=c,this.updateTopBar()},u.onAddTool=function(c){var h=this;c([{name:"Add",global:!1,onClick:function(){h.model.setItem("new_"+Date.now(),"new_value")}},{name:"Refresh",global:!1,onClick:function(){h.model.refresh()}},{name:"Clear",global:!1,onClick:function(){h.model.clear()}}])},u.onUpdateOption=function(){var c,h;((c=this.vConsole.option.storage)==null?void 0:c.defaultStorages)!==void 0&&(Xt.defaultStorages.set(((h=this.vConsole.option.storage)==null?void 0:h.defaultStorages)||[]),this.updateTopBar())},u.updateTopBar=function(){var c=this;if(typeof this.onAddTopBarCallback=="function"){for(var h=(0,kt.U2)(Xt.defaultStorages),x=[],S=0;S<h.length;S++){var L=h[S];x.push({name:L[0].toUpperCase()+L.substring(1),data:{name:L},actived:S===0,onClick:function(A,O){var N=(0,kt.U2)(Xt.activedName);if(O.name===N)return!1;Xt.activedName.set(O.name),c.model.refresh()}})}this.onAddTopBarCallback(x)}},f}(it),jt=function(){function d(u){var c=this;if(this.version="3.14.6",this.isInited=!1,this.option={},this.compInstance=void 0,this.pluginList={},this.log=void 0,this.system=void 0,this.network=void 0,d.instance&&d.instance instanceof d)return console.debug("[vConsole] vConsole is already exists."),d.instance;if(d.instance=this,this.isInited=!1,this.option={defaultPlugins:["system","network","element","storage"],log:{},network:{},storage:{}},e.Kn(u))for(var h in u)this.option[h]=u[h];this.option.maxLogNumber!==void 0&&(this.option.log.maxLogNumber=this.option.maxLogNumber,console.debug("[vConsole] Deprecated option: `maxLogNumber`, use `log.maxLogNumber` instead.")),this.option.onClearLog!==void 0&&console.debug("[vConsole] Deprecated option: `onClearLog`."),this.option.maxNetworkNumber!==void 0&&(this.option.network.maxNetworkNumber=this.option.maxNetworkNumber,console.debug("[vConsole] Deprecated option: `maxNetworkNumber`, use `network.maxNetworkNumber` instead.")),this._addBuiltInPlugins();var x=function(){c.isInited||(c._initComponent(),c._autoRun())};if(document!==void 0)document.readyState==="loading"?r.bind(window,"DOMContentLoaded",x):x();else{var S;S=setTimeout(function L(){document&&document.readyState=="complete"?(S&&clearTimeout(S),x()):S=setTimeout(L,1)},1)}}var f=d.prototype;return f._addBuiltInPlugins=function(){this.addPlugin(new Si("default","Log"));var u=this.option.defaultPlugins,c={system:{proto:wi,name:"System"}};if(c.network={proto:Xi,name:"Network"},c.element={proto:cr,name:"Element"},c.storage={proto:vr,name:"Storage"},u&&e.kJ(u))for(var h=0;h<u.length;h++){var x=c[u[h]];x?this.addPlugin(new x.proto(u[h],x.name)):console.debug("[vConsole] Unrecognized default plugin ID:",u[h])}},f._initComponent=function(){var u=this;if(!r.one("#__vconsole")){var c,h=1*e.cF("switch_x"),x=1*e.cF("switch_y");typeof this.option.target=="string"?c=document.querySelector(this.option.target):this.option.target instanceof HTMLElement&&(c=this.option.target),c instanceof HTMLElement||(c=document.documentElement),this.compInstance=new tt({target:c,props:{switchButtonPosition:{x:h,y:x}}}),this.compInstance.$on("show",function(S){S.detail.show?u.show():u.hide()}),this.compInstance.$on("changePanel",function(S){var L=S.detail.pluginId;u.showPlugin(L)})}this._updateComponentByOptions()},f._updateComponentByOptions=function(){if(this.compInstance){if(this.compInstance.theme!==this.option.theme){var u=this.option.theme;u=u!=="light"&&u!=="dark"?"":u,this.compInstance.theme=u}this.compInstance.disableScrolling!==this.option.disableLogScrolling&&(this.compInstance.disableScrolling=!!this.option.disableLogScrolling)}},f.setSwitchPosition=function(u,c){this.compInstance.switchButtonPosition={x:u,y:c}},f._autoRun=function(){for(var u in this.isInited=!0,this.pluginList)this._initPlugin(this.pluginList[u]);this._showFirstPluginWhenEmpty(),this.triggerEvent("ready")},f._showFirstPluginWhenEmpty=function(){var u=Object.keys(this.pluginList);this.compInstance.activedPluginId===""&&u.length>0&&this.showPlugin(u[0])},f.triggerEvent=function(u,c){var h=this;u="on"+u.charAt(0).toUpperCase()+u.slice(1),e.mf(this.option[u])&&setTimeout(function(){h.option[u].apply(h,c)},0)},f._initPlugin=function(u){var c=this;u.vConsole=this,this.compInstance.pluginList[u.id]={id:u.id,name:u.name,hasTabPanel:!1,topbarList:[],toolbarList:[]},this.compInstance.pluginList=this._reorderPluginList(this.compInstance.pluginList),u.trigger("init"),u.trigger("renderTab",function(h){c.compInstance.pluginList[u.id].hasTabPanel=!0,h&&(e.HD(h)?c.compInstance.divContentInner.innerHTML+=h:e.mf(h.appendTo)?h.appendTo(c.compInstance.divContentInner):e.kK(h)&&c.compInstance.divContentInner.insertAdjacentElement("beforeend",h)),c.compInstance.pluginList=c.compInstance.pluginList}),u.trigger("addTopBar",function(h){if(h){for(var x=[],S=0;S<h.length;S++){var L=h[S];x.push({name:L.name||"Undefined",className:L.className||"",actived:!!L.actived,data:L.data,onClick:L.onClick})}c.compInstance.pluginList[u.id].topbarList=x,c.compInstance.pluginList=c.compInstance.pluginList}}),u.trigger("addTool",function(h){if(h){for(var x=[],S=0;S<h.length;S++){var L=h[S];x.push({name:L.name||"Undefined",global:!!L.global,data:L.data,onClick:L.onClick})}c.compInstance.pluginList[u.id].toolbarList=x,c.compInstance.pluginList=c.compInstance.pluginList}}),u.isReady=!0,u.trigger("ready")},f._triggerPluginsEvent=function(u){for(var c in this.pluginList)this.pluginList[c].isReady&&this.pluginList[c].trigger(u)},f._triggerPluginEvent=function(u,c){var h=this.pluginList[u];h&&h.isReady&&h.trigger(c)},f._reorderPluginList=function(u){var c=this;if(!e.kJ(this.option.pluginOrder))return u;for(var h=Object.keys(u).sort(function(L,A){var O=c.option.pluginOrder.indexOf(L),N=c.option.pluginOrder.indexOf(A);return O===N?0:O===-1?1:N===-1?-1:O-N}),x={},S=0;S<h.length;S++)x[h[S]]=u[h[S]];return x},f.addPlugin=function(u){return this.pluginList[u.id]!==void 0?(console.debug("[vConsole] Plugin `"+u.id+"` has already been added."),!1):(this.pluginList[u.id]=u,this.isInited&&(this._initPlugin(u),this._showFirstPluginWhenEmpty()),!0)},f.removePlugin=function(u){u=(u+"").toLowerCase();var c=this.pluginList[u];if(c===void 0)return console.debug("[vConsole] Plugin `"+u+"` does not exist."),!1;c.trigger("remove");try{delete this.pluginList[u],delete this.compInstance.pluginList[u]}catch{this.pluginList[u]=void 0,this.compInstance.pluginList[u]=void 0}return this.compInstance.pluginList=this.compInstance.pluginList,this.compInstance.activedPluginId==u&&(this.compInstance.activedPluginId="",this._showFirstPluginWhenEmpty()),!0},f.show=function(){this.isInited&&(this.compInstance.show=!0,this._triggerPluginsEvent("showConsole"))},f.hide=function(){this.isInited&&(this.compInstance.show=!1,this._triggerPluginsEvent("hideConsole"))},f.showSwitch=function(){this.isInited&&(this.compInstance.showSwitchButton=!0)},f.hideSwitch=function(){this.isInited&&(this.compInstance.showSwitchButton=!1)},f.showPlugin=function(u){this.isInited&&(this.pluginList[u]||console.debug("[vConsole] Plugin `"+u+"` does not exist."),this.compInstance.activedPluginId&&this._triggerPluginEvent(this.compInstance.activedPluginId,"hide"),this.compInstance.activedPluginId=u,this._triggerPluginEvent(this.compInstance.activedPluginId,"show"))},f.setOption=function(u,c){if(typeof u=="string"){for(var h=u.split("."),x=this.option,S=0;S<h.length-1;S++)x[h[S]]===void 0&&(x[h[S]]={}),x=x[h[S]];x[h[h.length-1]]=c,this._triggerPluginsEvent("updateOption"),this._updateComponentByOptions()}else if(e.Kn(u)){for(var L in u)this.option[L]=u[L];this._triggerPluginsEvent("updateOption"),this._updateComponentByOptions()}else console.debug("[vConsole] The first parameter of `vConsole.setOption()` must be a string or an object.")},f.destroy=function(){if(this.isInited){this.isInited=!1,d.instance=void 0;for(var u=Object.keys(this.pluginList),c=u.length-1;c>=0;c--)this.removePlugin(u[c]);this.compInstance.$destroy()}},(0,s.Z)(d,null,[{key:"instance",get:function(){return window.__VCONSOLE_INSTANCE},set:function(u){u===void 0||u instanceof d?window.__VCONSOLE_INSTANCE=u:console.debug("[vConsole] Cannot set `VConsole.instance` because the value is not the instance of VConsole.")}}]),d}();jt.VConsolePlugin=void 0,jt.VConsoleLogPlugin=void 0,jt.VConsoleDefaultPlugin=void 0,jt.VConsoleSystemPlugin=void 0,jt.VConsoleNetworkPlugin=void 0,jt.VConsoleElementPlugin=void 0,jt.VConsoleStoragePlugin=void 0,jt.VConsolePlugin=nt,jt.VConsoleLogPlugin=ni,jt.VConsoleDefaultPlugin=Si,jt.VConsoleSystemPlugin=wi,jt.VConsoleNetworkPlugin=Xi,jt.VConsoleElementPlugin=cr,jt.VConsoleStoragePlugin=vr;var _o=jt}(),__webpack_exports__=__webpack_exports__.default,__webpack_exports__}()})})(vconsole_min);var VConsole=getDefaultExportFromCjs(vconsole_min.exports);new VConsole;const container=document.querySelector("#app"),threeBase=new ThreeBase(container);console.log(threeBase.initHelper().initSphere());var updateGravity=function(s){console.log("alpha:",s.alpha),console.log("beta:",s.beta),console.log("gamma:",s.gamma)};window.addEventListener("deviceorientation",updateGravity,!1);
