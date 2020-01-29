(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jazz-midi sync recursive":
/*!*************************************!*\
  !*** ./node_modules/jazz-midi sync ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/jazz-midi sync recursive";

/***/ }),

/***/ "./node_modules/jazz-midi/index.js":
/*!*****************************************!*\
  !*** ./node_modules/jazz-midi/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var path='./bin/';
var v=process.versions.node.split('.');
if (v[0]==0 && v[1]<=10) path+='0_10/';
else if (v[0]==0 && v[1]<=12) path+='0_12/';
else if (v[0]<=4) path+='4_9/';
else if (v[0]<=5) path+='5_12/';
else if (v[0]<=6) path+='6_14/';
else if (v[0]<=7) path+='7_10/';
else if (v[0]<=8) path+='8_12/';
else if (v[0]<=9) path+='9_11/';
else if (v[0]<=10) path+='10_15/';
else if (v[0]<=11) path+='11_15/';
if(process.platform=="win32"&&process.arch=="ia32") path+='win32/jazz';
else if(process.platform=="win32"&&process.arch=="x64") path+='win64/jazz';
else if(process.platform=="darwin"&&process.arch=="x64") path+='macos64/jazz';
else if(process.platform=="darwin"&&process.arch=="ia32") path+='macos32/jazz';
else if(process.platform=="linux"&&process.arch=="x64") path+='linux64/jazz';
else if(process.platform=="linux"&&process.arch=="ia32") path+='linux32/jazz';
else if(process.platform=="linux"&&process.arch=="arm") path+='linuxa7/jazz';
module.exports=__webpack_require__("./node_modules/jazz-midi sync recursive")(path);
module.exports.package=__webpack_require__(/*! ./node_modules/jazz-midi/package.json */ "./node_modules/jazz-midi/package.json");

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/jazz-midi/package.json":
/*!*********************************************!*\
  !*** ./node_modules/jazz-midi/package.json ***!
  \*********************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bugs, contributors, description, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"jazz-midi@1.7.2\",\"C:\\\\Users\\\\Tyler\\\\Desktop\\\\MTDemo\"]],\"_from\":\"jazz-midi@1.7.2\",\"_id\":\"jazz-midi@1.7.2\",\"_inBundle\":false,\"_integrity\":\"sha512-pBTGVBsyp7UgZnELes21nHkSyHp5r4AKdpR7B3LPhikT1QQ17o4zHISDKk3Xsoi9iIJRp/8rMzOMmxPVADQXnA==\",\"_location\":\"/jazz-midi\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"jazz-midi@1.7.2\",\"name\":\"jazz-midi\",\"escapedName\":\"jazz-midi\",\"rawSpec\":\"1.7.2\",\"saveSpec\":null,\"fetchSpec\":\"1.7.2\"},\"_requiredBy\":[\"/jzz\",\"/jzz-synth-tiny/jzz\"],\"_resolved\":\"https://registry.npmjs.org/jazz-midi/-/jazz-midi-1.7.2.tgz\",\"_spec\":\"1.7.2\",\"_where\":\"C:\\\\Users\\\\Tyler\\\\Desktop\\\\MTDemo\",\"author\":{\"name\":\"jazz-soft\",\"url\":\"http://jazz-soft.net\"},\"bugs\":{\"url\":\"http://jazz-soft.org\"},\"contributors\":[{\"name\":\"sema\",\"url\":\"http://jazz-soft.net\"}],\"description\":\"Low-level MIDI support for Node.js\",\"homepage\":\"http://jazz-soft.net\",\"keywords\":[\"midi\",\"MIDI\",\"music\",\"sound\"],\"license\":\"MIT\",\"main\":\"index.js\",\"name\":\"jazz-midi\",\"repository\":\"\",\"scripts\":{\"test\":\"node test.js\"},\"version\":\"1.7.2\"}");

/***/ }),

/***/ "./node_modules/jzz-synth-tiny/javascript/JZZ.synth.Tiny.js":
/*!******************************************************************!*\
  !*** ./node_modules/jzz-synth-tiny/javascript/JZZ.synth.Tiny.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(global, factory) {
  if (true) {
    module.exports = factory;
  }
  else {}
})(this, function(JZZ) {

  if (!JZZ) return;
  if (!JZZ.synth) JZZ.synth = {};
  if (JZZ.synth.Tiny) return;

  var _version = '1.1.4';

function WebAudioTinySynth(opt){
  this.__proto__ = this.sy =
  /* webaudio-tynysynth core object */
  {
    is:"webaudio-tinysynth",
    properties:{
      masterVol:  {type:Number, value:0.5, observer:"setMasterVol"},
      reverbLev:  {type:Number, value:0.3, observer:"setReverbLev"},
      quality:    {type:Number, value:1, observer:"setQuality"},
      debug:      {type:Number, value:0},
      src:        {type:String, value:null, observer:"loadMIDIUrl"},
      loop:       {type:Number, value:0},
      //internalcontext: {type:Number, value:1},
      tsmode:     {type:Number, value:0},
      voices:     {type:Number, value:64},
      useReverb:  {type:Number, value:1},
      /**/
    },
    /**/
    program:[],
    drummap:[],
    program1:[
      // 1-8 : Piano
      [{w:"sine",v:.4,d:0.7,r:0.1,},{w:"triangle",v:3,d:0.7,s:0.1,g:1,a:0.01,k:-1.2}],
      [{w:"triangle",v:0.4,d:0.7,r:0.1,},{w:"triangle",v:4,t:3,d:0.4,s:0.1,g:1,k:-1,a:0.01,}],
      [{w:"sine",d:0.7,r:0.1,},{w:"triangle",v:4,f:2,d:0.5,s:0.5,g:1,k:-1}],
      [{w:"sine",d:0.7,v:0.2,},{w:"triangle",v:4,t:3,f:2,d:0.3,g:1,k:-1,a:0.01,s:0.5,}],
      [{w:"sine",v:0.35,d:0.7,},{w:"sine",v:3,t:7,f:1,d:1,s:1,g:1,k:-.7}],
      [{w:"sine",v:0.35,d:0.7,},{w:"sine",v:8,t:7,f:1,d:0.5,s:1,g:1,k:-.7}],
      [{w:"sawtooth",v:0.34,d:2,},{w:"sine",v:8,f:0.1,d:2,s:1,r:2,g:1,}],
      [{w:"triangle",v:0.34,d:1.5,},{w:"square",v:6,f:0.1,d:1.5,s:0.5,r:2,g:1,}],
      /* 9-16 : Chromatic Perc*/
      [{w:"sine",d:0.3,r:0.3,},{w:"sine",v:7,t:11,d:0.03,g:1,}],
      [{w:"sine",d:0.3,r:0.3,},{w:"sine",v:11,t:6,d:0.2,s:0.4,g:1,}],
      [{w:"sine",v:0.2,d:0.3,r:0.3,},{w:"sine",v:11,t:5,d:0.1,s:0.4,g:1,}],
      [{w:"sine",v:0.2,d:0.6,r:0.6,},{w:"triangle",v:11,t:5,f:1,s:0.5,g:1,}],
      [{w:"sine",v:0.3,d:0.2,r:0.2,},{w:"sine",v:6,t:5,d:0.02,g:1,}],
      [{w:"sine",v:0.3,d:0.2,r:0.2,},{w:"sine",v:7,t:11,d:0.03,g:1,}],
      [{w:"sine",v:0.2,d:1,r:1,},{w:"sine",v:11,t:3.5,d:1,r:1,g:1,}],
      [{w:"triangle",v:0.2,d:0.5,r:0.2,},{w:"sine",v:6,t:2.5,d:0.2,s:0.1,r:0.2,g:1,}],
      /* 17-24 : Organ */
      [{w:"w9999",v:0.22,s:0.9,},{w:"w9999",v:0.22,t:2,f:2,s:0.9,}],
      [{w:"w9999",v:0.2,s:1,},{w:"sine",v:11,t:6,f:2,s:0.1,g:1,h:0.006,r:0.002,d:0.002,},{w:"w9999",v:0.2,t:2,f:1,h:0,s:1,}],
      [{w:"w9999",v:0.2,d:0.1,s:0.9,},{w:"w9999",v:0.25,t:4,f:2,s:0.5,}],
      [{w:"w9999",v:0.3,a:0.04,s:0.9,},{w:"w9999",v:0.2,t:8,f:2,a:0.04,s:0.9,}],
      [{w:"sine",v:0.2,a:0.02,d:0.05,s:1,},{w:"sine",v:6,t:3,f:1,a:0.02,d:0.05,s:1,g:1,}],
      [{w:"triangle",v:0.2,a:0.02,d:0.05,s:0.8,},{w:"square",v:7,t:3,f:1,d:0.05,s:1.5,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:0.2,s:0.5,},{w:"square",v:1,d:0.03,s:2,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:0.1,s:0.8,},{w:"square",v:1,a:0.3,d:0.1,s:2,g:1,}],
      /* 25-32 : Guitar */
      [{w:"sine",v:0.3,d:0.5,f:1,},{w:"triangle",v:5,t:3,f:-1,d:1,s:0.1,g:1,}],
      [{w:"sine",v:0.4,d:0.6,f:1,},{w:"triangle",v:12,t:3,d:0.6,s:0.1,g:1,f:-1,}],
      [{w:"triangle",v:0.3,d:1,f:1,},{w:"triangle",v:6,f:-1,d:0.4,s:0.5,g:1,t:3,}],
      [{w:"sine",v:0.3,d:1,f:-1,},{w:"triangle",v:11,f:1,d:0.4,s:0.5,g:1,t:3,}],
      [{w:"sine",v:0.4,d:0.1,r:0.01},{w:"sine",v:7,g:1,}],
      [{w:"triangle",v:0.4,d:1,f:1,},{w:"square",v:4,f:-1,d:1,s:0.7,g:1,}],//[{w:"triangle",v:0.35,d:1,f:1,},{w:"square",v:7,f:-1,d:0.3,s:0.5,g:1,}],
      [{w:"triangle",v:0.35,d:1,f:1,},{w:"square",v:7,f:-1,d:0.3,s:0.5,g:1,}],//[{w:"triangle",v:0.4,d:1,f:1,},{w:"square",v:4,f:-1,d:1,s:0.7,g:1,}],//[{w:"triangle",v:0.4,d:1,},{w:"square",v:4,f:2,d:1,s:0.7,g:1,}],
      [{w:"sine",v:0.2,t:1.5,a:0.005,h:0.2,d:0.6,},{w:"sine",v:11,t:5,f:2,d:1,s:0.5,g:1,}],
      /* 33-40 : Bass */
      [{w:"sine",d:0.3,},{w:"sine",v:4,t:3,d:1,s:1,g:1,}],
      [{w:"sine",d:0.3,},{w:"sine",v:4,t:3,d:1,s:1,g:1,}],
      [{w:"w9999",d:0.3,v:0.7,s:0.5,},{w:"sawtooth",v:1.2,d:0.02,s:0.5,g:1,h:0,r:0.02,}],
      [{w:"sine",d:0.3,},{w:"sine",v:4,t:3,d:1,s:1,g:1,}],
      [{w:"triangle",v:0.3,t:2,d:1,},{w:"triangle",v:15,t:2.5,d:0.04,s:0.1,g:1,}],
      [{w:"triangle",v:0.3,t:2,d:1,},{w:"triangle",v:15,t:2.5,d:0.04,s:0.1,g:1,}],
      [{w:"triangle",d:0.7,},{w:"square",v:0.4,t:0.5,f:1,d:0.2,s:10,g:1,}],
      [{w:"triangle",d:0.7,},{w:"square",v:0.4,t:0.5,f:1,d:0.2,s:10,g:1,}],
      /* 41-48 : Strings */
      [{w:"sawtooth",v:0.4,a:0.1,d:11,},{w:"sine",v:5,d:11,s:0.2,g:1,}],
      [{w:"sawtooth",v:0.4,a:0.1,d:11,},{w:"sine",v:5,d:11,s:0.2,g:1,}],
      [{w:"sawtooth",v:0.4,a:0.1,d:11,},{w:"sine",v:5,t:0.5,d:11,s:0.2,g:1,}],
      [{w:"sawtooth",v:0.4,a:0.1,d:11,},{w:"sine",v:5,t:0.5,d:11,s:0.2,g:1,}],
      [{w:"sine",v:0.4,a:0.1,d:11,},{w:"sine",v:6,f:2.5,d:0.05,s:1.1,g:1,}],
      [{w:"sine",v:0.3,d:0.1,r:0.1,},{w:"square",v:4,t:3,d:1,s:0.2,g:1,}],
      [{w:"sine",v:0.3,d:0.5,r:0.5,},{w:"sine",v:7,t:2,f:2,d:1,r:1,g:1,}],
      [{w:"triangle",v:0.6,h:0.03,d:0.3,r:0.3,t:0.5,},{w:"n0",v:8,t:1.5,d:0.08,r:0.08,g:1,}],
      /* 49-56 : Ensamble */
      [{w:"sawtooth",v:0.3,a:0.03,s:0.5,},{w:"sawtooth",v:0.2,t:2,f:2,d:1,s:2,}],
      [{w:"sawtooth",v:0.3,f:-2,a:0.03,s:0.5,},{w:"sawtooth",v:0.2,t:2,f:2,d:1,s:2,}],
      [{w:"sawtooth",v:0.2,a:0.02,s:1,},{w:"sawtooth",v:0.2,t:2,f:2,a:1,d:1,s:1,}],
      [{w:"sawtooth",v:0.2,a:0.02,s:1,},{w:"sawtooth",v:0.2,f:2,a:0.02,d:1,s:1,}],
      [{w:"triangle",v:0.3,a:0.03,s:1,},{w:"sine",v:3,t:5,f:1,d:1,s:1,g:1,}],
      [{w:"sine",v:0.4,a:0.03,s:0.9,},{w:"sine",v:1,t:2,f:3,d:0.03,s:0.2,g:1,}],
      [{w:"triangle",v:0.6,a:0.05,s:0.5,},{w:"sine",v:1,f:0.8,d:0.2,s:0.2,g:1,}],
      [{w:"square",v:0.15,a:0.01,d:0.2,r:0.2,t:0.5,h:0.03,},{w:"square",v:4,f:0.5,d:0.2,r:11,a:0.01,g:1,h:0.02,},{w:"square",v:0.15,t:4,f:1,a:0.02,d:0.15,r:0.15,h:0.03,},{g:3,w:"square",v:4,f:-0.5,a:0.01,h:0.02,d:0.15,r:11,}],
      /* 57-64 : Brass */
      [{w:"square",v:0.2,a:0.01,d:1,s:0.6,r:0.04,},{w:"sine",v:1,d:0.1,s:4,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:1,s:0.5,r:0.08,},{w:"sine",v:1,d:0.1,s:4,g:1,}],
      [{w:"square",v:0.2,a:0.04,d:1,s:0.4,r:0.08,},{w:"sine",v:1,d:0.1,s:4,g:1,}],
      [{w:"square",v:0.15,a:0.04,s:1,},{w:"sine",v:2,d:0.1,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:1,s:0.5,r:0.08,},{w:"sine",v:1,d:0.1,s:4,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:1,s:0.6,r:0.08,},{w:"sine",v:1,f:0.2,d:0.1,s:4,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:0.5,s:0.7,r:0.08,},{w:"sine",v:1,d:0.1,s:4,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:1,s:0.5,r:0.08,},{w:"sine",v:1,d:0.1,s:4,g:1,}],
      /* 65-72 : Reed */
      [{w:"square",v:0.2,a:0.02,d:2,s:0.6,},{w:"sine",v:2,d:1,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:2,s:0.6,},{w:"sine",v:2,d:1,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:1,s:0.6,},{w:"sine",v:2,d:1,g:1,}],
      [{w:"square",v:0.2,a:0.02,d:1,s:0.6,},{w:"sine",v:2,d:1,g:1,}],
      [{w:"sine",v:0.4,a:0.02,d:0.7,s:0.5,},{w:"square",v:5,t:2,d:0.2,s:0.5,g:1,}],
      [{w:"sine",v:0.3,a:0.05,d:0.2,s:0.8,},{w:"sawtooth",v:6,f:0.1,d:0.1,s:0.3,g:1,}],
      [{w:"sine",v:0.3,a:0.03,d:0.2,s:0.4,},{w:"square",v:7,f:0.2,d:1,s:0.1,g:1,}],
      [{w:"square",v:0.2,a:0.05,d:0.1,s:0.8,},{w:"square",v:4,d:0.1,s:1.1,g:1,}],
      /* 73-80 : Pipe */
      [{w:"sine",a:0.02,d:2,},{w:"sine",v:6,t:2,d:0.04,g:1,}],
      [{w:"sine",v:0.7,a:0.03,d:0.4,s:0.4,},{w:"sine",v:4,t:2,f:0.2,d:0.4,g:1,}],
      [{w:"sine",v:0.7,a:0.02,d:0.4,s:0.6,},{w:"sine",v:3,t:2,d:0,s:1,g:1,}],
      [{w:"sine",v:0.4,a:0.06,d:0.3,s:0.3,},{w:"sine",v:7,t:2,d:0.2,s:0.2,g:1,}],
      [{w:"sine",a:0.02,d:0.3,s:0.3,},{w:"sawtooth",v:3,t:2,d:0.3,g:1,}],
      [{w:"sine",v:0.4,a:0.02,d:2,s:0.1,},{w:"sawtooth",v:8,t:2,f:1,d:0.5,g:1,}],
      [{w:"sine",v:0.7,a:0.03,d:0.5,s:0.3,},{w:"sine",v:0.003,t:0,f:4,d:0.1,s:0.002,g:1,}],
      [{w:"sine",v:0.7,a:0.02,d:2,},{w:"sine",v:1,t:2,f:1,d:0.02,g:1,}],
      /* 81-88 : SynthLead */
      [{w:"square",v:0.3,d:1,s:0.5,},{w:"square",v:1,f:0.2,d:1,s:0.5,g:1,}],
      [{w:"sawtooth",v:0.3,d:2,s:0.5,},{w:"square",v:2,f:0.1,s:0.5,g:1,}],
      [{w:"triangle",v:0.5,a:0.05,d:2,s:0.6,},{w:"sine",v:4,t:2,g:1,}],
      [{w:"triangle",v:0.3,a:0.01,d:2,s:0.3,},{w:"sine",v:22,t:2,f:1,d:0.03,s:0.2,g:1,}],
      [{w:"sawtooth",v:0.3,d:1,s:0.5,},{w:"sine",v:11,t:11,a:0.2,d:0.05,s:0.3,g:1,}],
      [{w:"sine",v:0.3,a:0.06,d:1,s:0.5,},{w:"sine",v:7,f:1,d:1,s:0.2,g:1,}],
      [{w:"sawtooth",v:0.3,a:0.03,d:0.7,s:0.3,r:0.2,},{w:"sawtooth",v:0.3,t:0.75,d:0.7,a:0.1,s:0.3,r:0.2,}],
      [{w:"triangle",v:0.3,a:0.01,d:0.7,s:0.5,},{w:"square",v:5,t:0.5,d:0.7,s:0.5,g:1,}],
      /* 89-96 : SynthPad */
      [{w:"triangle",v:0.3,a:0.02,d:0.3,s:0.3,r:0.3,},{w:"square",v:3,t:4,f:1,a:0.02,d:0.1,s:1,g:1,},{w:"triangle",v:0.08,t:0.5,a:0.1,h:0,d:0.1,s:0.5,r:0.1,b:0,c:0,}],
      [{w:"sine",v:0.3,a:0.05,d:1,s:0.7,r:0.3,},{w:"sine",v:2,f:1,d:0.3,s:1,g:1,}],
      [{w:"square",v:0.3,a:0.03,d:0.5,s:0.3,r:0.1,},{w:"square",v:4,f:1,a:0.03,d:0.1,g:1,}],
      [{w:"triangle",v:0.3,a:0.08,d:1,s:0.3,r:0.1,},{w:"square",v:2,f:1,d:0.3,s:0.3,g:1,t:4,a:0.08,}],
      [{w:"sine",v:0.3,a:0.05,d:1,s:0.3,r:0.1,},{w:"sine",v:0.1,t:2.001,f:1,d:1,s:50,g:1,}],
      [{w:"triangle",v:0.3,a:0.03,d:0.7,s:0.3,r:0.2,},{w:"sine",v:12,t:7,f:1,d:0.5,s:1.7,g:1,}],
      [{w:"sine",v:0.3,a:0.05,d:1,s:0.3,r:0.1,},{w:"sawtooth",v:22,t:6,d:0.06,s:0.3,g:1,}],
      [{w:"triangle",v:0.3,a:0.05,d:11,r:0.3,},{w:"triangle",v:1,d:1,s:8,g:1,}],
      /* 97-104 : FX */
      [{w:"sawtooth",v:0.3,d:4,s:0.8,r:0.1,},{w:"square",v:1,t:2,f:8,a:1,d:1,s:1,r:0.1,g:1,}],
      [{w:"triangle",v:0.3,d:1,s:0.5,t:0.8,a:0.2,p:1.25,q:0.2,},{w:"sawtooth",v:0.2,a:0.2,d:0.3,s:1,t:1.2,p:1.25,q:0.2,}],
      [{w:"sine",v:0.3,d:1,s:0.3,},{w:"square",v:22,t:11,d:0.5,s:0.1,g:1,}],
      [{w:"sawtooth",v:0.3,a:0.04,d:1,s:0.8,r:0.1,},{w:"square",v:1,t:0.5,d:1,s:2,g:1,}],
      [{w:"triangle",v:0.3,d:1,s:0.3,},{w:"sine",v:22,t:6,d:0.6,s:0.05,g:1,}],
      [{w:"sine",v:0.6,a:0.1,d:0.05,s:0.4,},{w:"sine",v:5,t:5,f:1,d:0.05,s:0.3,g:1,}],
      [{w:"sine",a:0.1,d:0.05,s:0.4,v:0.8,},{w:"sine",v:5,t:5,f:1,d:0.05,s:0.3,g:1,}],
      [{w:"square",v:0.3,a:0.1,d:0.1,s:0.4,},{w:"square",v:1,f:1,d:0.3,s:0.1,g:1,}],
      /* 105-112 : Ethnic */
      [{w:"sawtooth",v:0.3,d:0.5,r:0.5,},{w:"sawtooth",v:11,t:5,d:0.05,g:1,}],
      [{w:"square",v:0.3,d:0.2,r:0.2,},{w:"square",v:7,t:3,d:0.05,g:1,}],
      [{w:"triangle",d:0.2,r:0.2,},{w:"square",v:9,t:3,d:0.1,r:0.1,g:1,}],
      [{w:"triangle",d:0.3,r:0.3,},{w:"square",v:6,t:3,d:1,r:1,g:1,}],
      [{w:"triangle",v:0.4,d:0.2,r:0.2,},{w:"square",v:22,t:12,d:0.1,r:0.1,g:1,}],
      [{w:"sine",v:0.25,a:0.02,d:0.05,s:0.8,},{w:"square",v:1,t:2,d:0.03,s:11,g:1,}],
      [{w:"sine",v:0.3,a:0.05,d:11,},{w:"square",v:7,t:3,f:1,s:0.7,g:1,}],
      [{w:"square",v:0.3,a:0.05,d:0.1,s:0.8,},{w:"square",v:4,d:0.1,s:1.1,g:1,}],
      /* 113-120 : Percussive */
      [{w:"sine",v:0.4,d:0.3,r:0.3,},{w:"sine",v:7,t:9,d:0.1,r:0.1,g:1,}],
      [{w:"sine",v:0.7,d:0.1,r:0.1,},{w:"sine",v:22,t:7,d:0.05,g:1,}],
      [{w:"sine",v:0.6,d:0.15,r:0.15,},{w:"square",v:11,t:3.2,d:0.1,r:0.1,g:1,}],
      [{w:"sine",v:0.8,d:0.07,r:0.07,},{w:"square",v:11,t:7,r:0.01,g:1,}],
      [{w:"triangle",v:0.7,t:0.5,d:0.2,r:0.2,p:0.95,},{w:"n0",v:9,g:1,d:0.2,r:0.2,}],
      [{w:"sine",v:0.7,d:0.1,r:0.1,p:0.9,},{w:"square",v:14,t:2,d:0.005,r:0.005,g:1,}],
      [{w:"square",d:0.15,r:0.15,p:0.5,},{w:"square",v:4,t:5,d:0.001,r:0.001,g:1,}],
      [{w:"n1",v:0.3,a:1,s:1,d:0.15,r:0,t:0.5,}],
      /* 121-128 : SE */
      [{w:"sine",t:12.5,d:0,r:0,p:0.5,v:0.3,h:0.2,q:0.5,},{g:1,w:"sine",v:1,t:2,d:0,r:0,s:1,},{g:1,w:"n0",v:0.2,t:2,a:0.6,h:0,d:0.1,r:0.1,b:0,c:0,}],
      [{w:"n0",v:0.2,a:0.05,h:0.02,d:0.02,r:0.02,}],
      [{w:"n0",v:0.4,a:1,d:1,t:0.25,}],
      [{w:"sine",v:0.3,a:0.1,d:1,s:0.5,},{w:"sine",v:4,t:0,f:1.5,d:1,s:1,r:0.1,g:1,},{g:1,w:"sine",v:4,t:0,f:2,a:0.6,h:0,d:0.1,s:1,r:0.1,b:0,c:0,}],
      [{w:"square",v:0.3,t:0.25,d:11,s:1,},{w:"square",v:12,t:0,f:8,d:1,s:1,r:11,g:1,}],
      [{w:"n0",v:0.4,t:0.5,a:1,d:11,s:1,r:0.5,},{w:"square",v:1,t:0,f:14,d:1,s:1,r:11,g:1,}],
      [{w:"sine",t:0,f:1221,a:0.2,d:1,r:0.25,s:1,},{g:1,w:"n0",v:3,t:0.5,d:1,s:1,r:1,}],
      [{w:"sine",d:0.4,r:0.4,p:0.1,t:2.5,v:1,},{w:"n0",v:12,t:2,d:1,r:1,g:1,}],
    ],
    program0:[
// 1-8 : Piano
      [{w:"triangle",v:.5,d:.7}],                   [{w:"triangle",v:.5,d:.7}],
      [{w:"triangle",v:.5,d:.7}],                   [{w:"triangle",v:.5,d:.7}],
      [{w:"triangle",v:.5,d:.7}],                   [{w:"triangle",v:.5,d:.7}],
      [{w:"sawtooth",v:.3,d:.7}],                   [{w:"sawtooth",v:.3,d:.7}],
/* 9-16 : Chromatic Perc*/
      [{w:"sine",v:.5,d:.3,r:.3}],                  [{w:"triangle",v:.5,d:.3,r:.3}],
      [{w:"square",v:.2,d:.3,r:.3}],                [{w:"square",v:.2,d:.3,r:.3}],
      [{w:"sine",v:.5,d:.1,r:.1}],                  [{w:"sine",v:.5,d:.1,r:.1}],
      [{w:"square",v:.2,d:1,r:1}],                  [{w:"sawtooth",v:.3,d:.7,r:.7}],
/* 17-24 : Organ */
      [{w:"sine",v:0.5,a:0.01,s:1}],                [{w:"sine",v:0.7,d:0.02,s:0.7}],
      [{w:"square",v:.2,s:1}],                      [{w:"triangle",v:.5,a:.01,s:1}],
      [{w:"square",v:.2,a:.02,s:1}],                [{w:"square",v:0.2,a:0.02,s:1}],
      [{w:"square",v:0.2,a:0.02,s:1}],              [{w:"square",v:.2,a:.05,s:1}],
/* 25-32 : Guitar */
      [{w:"triangle",v:.5,d:.5}],                   [{w:"square",v:.2,d:.6}],
      [{w:"square",v:.2,d:.6}],                     [{w:"triangle",v:.8,d:.6}],
      [{w:"triangle",v:.4,d:.05}],                  [{w:"square",v:.2,d:1}],
      [{w:"square",v:.2,d:1}],                      [{w:"sine",v:.4,d:.6}],
/* 33-40 : Bass */
      [{w:"triangle",v:.7,d:.4}],                   [{w:"triangle",v:.7,d:.7}],
      [{w:"triangle",v:.7,d:.7}],                   [{w:"triangle",v:.7,d:.7}],
      [{w:"square",v:.3,d:.2}],                     [{w:"square",v:.3,d:.2}],
      [{w:"square",v:.3,d:.1,s:.2}],                [{w:"sawtooth",v:.4,d:.1,s:.2}],
/* 41-48 : Strings */
      [{w:"sawtooth",v:.2,a:.02,s:1}],              [{w:"sawtooth",v:.2,a:.02,s:1}],
      [{w:"sawtooth",v:.2,a:.02,s:1}],              [{w:"sawtooth",v:.2,a:.02,s:1}],
      [{w:"sawtooth",v:.2,a:.02,s:1}],              [{w:"sawtooth",v:.3,d:.1}],
      [{w:"sawtooth",v:.3,d:.5,r:.5}],              [{w:"triangle",v:.6,d:.1,r:.1,h:0.03,p:0.8}],
/* 49-56 : Ensamble */
      [{w:"sawtooth",v:.2,a:.02,s:1}],              [{w:"sawtooth",v:.2,a:.02,s:1}],
      [{w:"sawtooth",v:.2,a:.02,s:1}],              [{w:"sawtooth",v:.2,a:.02,s:1}],
      [{w:"triangle",v:.3,a:.03,s:1}],              [{w:"sine",v:.3,a:.03,s:1}],
      [{w:"triangle",v:.3,a:.05,s:1}],              [{w:"sawtooth",v:.5,a:.01,d:.1}],
/* 57-64 : Brass */
      [{w:"square",v:.3,a:.05,d:.2,s:.6}],          [{w:"square",v:.3,a:.05,d:.2,s:.6}],
      [{w:"square",v:.3,a:.05,d:.2,s:.6}],          [{w:"square",v:0.2,a:.05,d:0.01,s:1}],
      [{w:"square",v:.3,a:.05,s:1}],                [{w:"square",v:.3,s:.7}],
      [{w:"square",v:.3,s:.7}],                     [{w:"square",v:.3,s:.7}],
/* 65-72 : Reed */
      [{w:"square",v:.3,a:.02,d:2}],                [{w:"square",v:.3,a:.02,d:2}],
      [{w:"square",v:.3,a:.03,d:2}],                [{w:"square",v:.3,a:.04,d:2}],
      [{w:"square",v:.3,a:.02,d:2}],                [{w:"square",v:.3,a:.05,d:2}],
      [{w:"square",v:.3,a:.03,d:2}],                [{w:"square",v:.3,a:.03,d:2}],
/* 73-80 : Pipe */
      [{w:"sine",v:.7,a:.02,d:2}],                  [{w:"sine",v:.7,a:.02,d:2}],
      [{w:"sine",v:.7,a:.02,d:2}],                  [{w:"sine",v:.7,a:.02,d:2}],
      [{w:"sine",v:.7,a:.02,d:2}],                  [{w:"sine",v:.7,a:.02,d:2}],
      [{w:"sine",v:.7,a:.02,d:2}],                  [{w:"sine",v:.7,a:.02,d:2}],
/* 81-88 : SynthLead */
      [{w:"square",v:.3,s:.7}],                     [{w:"sawtooth",v:.4,s:.7}],
      [{w:"triangle",v:.5,s:.7}],                   [{w:"sawtooth",v:.4,s:.7}],
      [{w:"sawtooth",v:.4,d:12}],                   [{w:"sine",v:.4,a:.06,d:12}],
      [{w:"sawtooth",v:.4,d:12}],                   [{w:"sawtooth",v:.4,d:12}],
/* 89-96 : SynthPad */
      [{w:"sawtooth",v:.3,d:12}],                   [{w:"triangle",v:.5,d:12}],
      [{w:"square",v:.3,d:12}],                     [{w:"triangle",v:.5,a:.08,d:11}],
      [{w:"sawtooth",v:.5,a:.05,d:11}],             [{w:"sawtooth",v:.5,d:11}],
      [{w:"triangle",v:.5,d:11}],                   [{w:"triangle",v:.5,d:11}],
/* 97-104 : FX */
      [{w:"triangle",v:.5,d:11}],                   [{w:"triangle",v:.5,d:11}],
      [{w:"square",v:.3,d:11}],                     [{w:"sawtooth",v:0.5,a:0.04,d:11}],
      [{w:"sawtooth",v:.5,d:11}],                   [{w:"triangle",v:.5,a:.8,d:11}],
      [{w:"triangle",v:.5,d:11}],                   [{w:"square",v:.3,d:11}],
/* 105-112 : Ethnic */
      [{w:"sawtooth",v:.3,d:1,r:1}],                [{w:"sawtooth",v:.5,d:.3}],
      [{w:"sawtooth",v:.5,d:.3,r:.3}],              [{w:"sawtooth",v:.5,d:.3,r:.3}],
      [{w:"square",v:.3,d:.2,r:.2}],                [{w:"square",v:.3,a:.02,d:2}],
      [{w:"sawtooth",v:.2,a:.02,d:.7}],             [{w:"triangle",v:.5,d:1}],
/* 113-120 : Percussive */
      [{w:"sawtooth",v:.3,d:.3,r:.3}],              [{w:"sine",v:.8,d:.1,r:.1}],
      [{w:"square",v:.2,d:.1,r:.1,p:1.05}],         [{w:"sine",v:.8,d:.05,r:.05}],
      [{w:"triangle",v:0.5,d:0.1,r:0.1,p:0.96}],    [{w:"triangle",v:0.5,d:0.1,r:0.1,p:0.97}],
      [{w:"square",v:.3,d:.1,r:.1,}],               [{w:"n1",v:0.3,a:1,s:1,d:0.15,r:0,t:0.5,}],
/* 121-128 : SE */
      [{w:"triangle",v:0.5,d:0.03,t:0,f:1332,r:0.001,p:1.1}],
      [{w:"n0",v:0.2,t:0.1,d:0.02,a:0.05,h:0.02,r:0.02}],
      [{w:"n0",v:0.4,a:1,d:1,t:0.25,}],
      [{w:"sine",v:0.3,a:0.8,d:1,t:0,f:1832}],
      [{w:"triangle",d:0.5,t:0,f:444,s:1,}],
      [{w:"n0",v:0.4,d:1,t:0,f:22,s:1,}],
      [{w:"n0",v:0.5,a:0.2,d:11,t:0,f:44}],
      [{w:"n0",v:0.5,t:0.25,d:0.4,r:0.4}],
    ],
    drummap1:[
/*35*/  [{w:"triangle",t:0,f:70,v:1,d:0.05,h:0.03,p:0.9,q:0.1,},{w:"n0",g:1,t:6,v:17,r:0.01,h:0,p:0,}],
        [{w:"triangle",t:0,f:88,v:1,d:0.05,h:0.03,p:0.5,q:0.1,},{w:"n0",g:1,t:5,v:42,r:0.01,h:0,p:0,}],
        [{w:"n0",f:222,p:0,t:0,r:0.01,h:0,}],
        [{w:"triangle",v:0.3,f:180,d:0.05,t:0,h:0.03,p:0.9,q:0.1,},{w:"n0",v:0.6,t:0,f:70,h:0.02,r:0.01,p:0,},{g:1,w:"square",v:2,t:0,f:360,r:0.01,b:0,c:0,}],
        [{w:"square",f:1150,v:0.34,t:0,r:0.03,h:0.025,d:0.03,},{g:1,w:"n0",t:0,f:13,h:0.025,d:0.1,s:1,r:0.1,v:1,}],
/*40*/  [{w:"triangle",f:200,v:1,d:0.06,t:0,r:0.06,},{w:"n0",g:1,t:0,f:400,v:12,r:0.02,d:0.02,}],
        [{w:"triangle",f:100,v:0.9,d:0.12,h:0.02,p:0.5,t:0,r:0.12,},{g:1,w:"n0",v:5,t:0.4,h:0.015,d:0.005,r:0.005,}],
        [{w:"n1",f:390,v:0.25,r:0.01,t:0,}],
        [{w:"triangle",f:120,v:0.9,d:0.12,h:0.02,p:0.5,t:0,r:0.12,},{g:1,w:"n0",v:5,t:0.5,h:0.015,d:0.005,r:0.005,}],
        [{w:"n1",v:0.25,f:390,r:0.03,t:0,h:0.005,d:0.03,}],
/*45*/  [{w:"triangle",f:140,v:0.9,d:0.12,h:0.02,p:0.5,t:0,r:0.12,},{g:1,w:"n0",v:5,t:0.3,h:0.015,d:0.005,r:0.005,}],
        [{w:"n1",v:0.25,f:390,t:0,d:0.2,r:0.2,},{w:"n0",v:0.3,t:0,c:0,f:440,h:0.005,d:0.05,}],
        [{w:"triangle",f:155,v:0.9,d:0.12,h:0.02,p:0.5,t:0,r:0.12,},{g:1,w:"n0",v:5,t:0.3,h:0.015,d:0.005,r:0.005,}],
        [{w:"triangle",f:180,v:0.9,d:0.12,h:0.02,p:0.5,t:0,r:0.12,},{g:1,w:"n0",v:5,t:0.3,h:0.015,d:0.005,r:0.005,}],
        [{w:"n1",v:0.3,f:1200,d:0.2,r:0.2,h:0.05,t:0,},{w:"n1",t:0,v:1,d:0.1,r:0.1,p:1.2,f:440,}],
/*50*/  [{w:"triangle",f:220,v:0.9,d:0.12,h:0.02,p:0.5,t:0,r:0.12,},{g:1,w:"n0",v:5,t:0.3,h:0.015,d:0.005,r:0.005,}],
        [{w:"n1",f:500,v:0.15,d:0.4,r:0.4,h:0,t:0,},{w:"n0",v:0.1,t:0,r:0.01,f:440,}],
        [{w:"n1",v:0.3,f:800,d:0.2,r:0.2,h:0.05,t:0,},{w:"square",t:0,v:1,d:0.1,r:0.1,p:0.1,f:220,g:1,}],
        [{w:"sine",f:1651,v:0.15,d:0.2,r:0.2,h:0,t:0,},{w:"sawtooth",g:1,t:1.21,v:7.2,d:0.1,r:11,h:1,},{g:1,w:"n0",v:3.1,t:0.152,d:0.002,r:0.002,}],
        null,
/*55*/  [{w:"n1",v:.3,f:1200,d:0.2,r:0.2,h:0.05,t:0,},{w:"n1",t:0,v:1,d:0.1,r:0.1,p:1.2,f:440,}],
        null,
        [{w:"n1",v:0.3,f:555,d:0.25,r:0.25,h:0.05,t:0,},{w:"n1",t:0,v:1,d:0.1,r:0.1,f:440,a:0.005,h:0.02,}],
        [{w:"sawtooth",f:776,v:0.2,d:0.3,t:0,r:0.3,},{g:1,w:"n0",v:2,t:0,f:776,a:0.005,h:0.02,d:0.1,s:1,r:0.1,c:0,},{g:11,w:"sine",v:0.1,t:0,f:22,d:0.3,r:0.3,b:0,c:0,}],
        [{w:"n1",f:440,v:0.15,d:0.4,r:0.4,h:0,t:0,},{w:"n0",v:0.4,t:0,r:0.01,f:440,}],
/*60*/  null,null,null,null,null,
/*65*/  null,null,null,null,null,
/*70*/  null,null,null,null,null,
/*75*/  null,null,null,null,null,
/*80*/  [{w:"sine",f:1720,v:0.3,d:0.02,t:0,r:0.02,},{w:"square",g:1,t:0,f:2876,v:6,d:0.2,s:1,r:0.2,}],
        [{w:"sine",f:1720,v:0.3,d:0.25,t:0,r:0.25,},{w:"square",g:1,t:0,f:2876,v:6,d:0.2,s:1,r:0.2,}],
    ],
    drummap0:[
/*35*/[{w:"triangle",t:0,f:110,v:1,d:0.05,h:0.02,p:0.1,}],
      [{w:"triangle",t:0,f:150,v:0.8,d:0.1,p:0.1,h:0.02,r:0.01,}],
      [{w:"n0",f:392,v:0.5,d:0.01,p:0,t:0,r:0.05}],
      [{w:"n0",f:33,d:0.05,t:0,}],
      [{w:"n0",f:100,v:0.7,d:0.03,t:0,r:0.03,h:0.02,}],
/*40*/[{w:"n0",f:44,v:0.7,d:0.02,p:0.1,t:0,h:0.02,}],
      [{w:"triangle",f:240,v:0.9,d:0.1,h:0.02,p:0.1,t:0,}],
      [{w:"n0",f:440,v:0.2,r:0.01,t:0,}],
      [{w:"triangle",f:270,v:0.9,d:0.1,h:0.02,p:0.1,t:0,}],
      [{w:"n0",f:440,v:0.2,d:0.04,r:0.04,t:0,}],
/*45*/[{w:"triangle",f:300,v:0.9,d:0.1,h:0.02,p:0.1,t:0,}],
      [{w:"n0",f:440,v:0.2,d:0.1,r:0.1,h:0.02,t:0,}],
      [{w:"triangle",f:320,v:0.9,d:0.1,h:0.02,p:0.1,t:0,}],
      [{w:"triangle",f:360,v:0.9,d:0.1,h:0.02,p:0.1,t:0,}],
      [{w:"n0",f:150,v:0.2,d:0.1,r:0.1,h:0.05,t:0,p:0.1,}],
/*50*/[{w:"triangle",f:400,v:0.9,d:0.1,h:0.02,p:0.1,t:0,}],
      [{w:"n0",f:150,v:0.2,d:0.1,r:0.01,h:0.05,t:0,p:0.1}],
      [{w:"n0",f:150,v:0.2,d:0.1,r:0.01,h:0.05,t:0,p:0.1}],
      [{w:"n0",f:440,v:0.3,d:0.1,p:0.9,t:0,r:0.1,}],
      [{w:"n0",f:200,v:0.2,d:0.05,p:0.9,t:0,}],
/*55*/[{w:"n0",f:440,v:0.3,d:0.12,p:0.9,t:0,}],
      [{w:"sine",f:800,v:0.4,d:0.06,t:0,}],
      [{w:"n0",f:150,v:0.2,d:0.1,r:0.01,h:0.05,t:0,p:0.1}],
      [{w:"n0",f:33,v:0.3,d:0.2,p:0.9,t:0,}],
      [{w:"n0",f:300,v:0.3,d:0.14,p:0.9,t:0,}],
/*60*/[{w:"sine",f:200,d:0.06,t:0,}],
      [{w:"sine",f:150,d:0.06,t:0,}],
      [{w:"sine",f:300,t:0,}],
      [{w:"sine",f:300,d:0.06,t:0,}],
      [{w:"sine",f:250,d:0.06,t:0,}],
/*65*/[{w:"square",f:300,v:.3,d:.06,p:.8,t:0,}],
      [{w:"square",f:260,v:.3,d:.06,p:.8,t:0,}],
      [{w:"sine",f:850,v:.5,d:.07,t:0,}],
      [{w:"sine",f:790,v:.5,d:.07,t:0,}],
      [{w:"n0",f:440,v:0.3,a:0.05,t:0,}],
/*70*/[{w:"n0",f:440,v:0.3,a:0.05,t:0,}],
      [{w:"triangle",f:1800,v:0.4,p:0.9,t:0,h:0.03,}],
      [{w:"triangle",f:1800,v:0.3,p:0.9,t:0,h:0.13,}],
      [{w:"n0",f:330,v:0.3,a:0.02,t:0,r:0.01,}],
      [{w:"n0",f:330,v:0.3,a:0.02,t:0,h:0.04,r:0.01,}],
/*75*/[{w:"n0",f:440,v:0.3,t:0,}],
      [{w:"sine",f:800,t:0,}],
      [{w:"sine",f:700,t:0,}],
      [{w:"n0",f:330,v:0.3,t:0,}],
      [{w:"n0",f:330,v:0.3,t:0,h:0.1,r:0.01,p:0.7,}],
/*80*/[{w:"sine",t:0,f:1200,v:0.3,r:0.01,}],
      [{w:"sine",t:0,f:1200,v:0.3,d:0.2,r:0.2,}],

    ],
    /**/
    ready:function(){
      var i;
      this.pg=[]; this.vol=[]; this.ex=[]; this.bend=[]; this.rpnidx=[]; this.brange=[];
      this.sustain=[]; this.notetab=[]; this.rhythm=[];
      this.maxTick=0, this.playTick=0, this.playing=0; this.releaseRatio=3.5;
      for(var i=0;i<16;++i){
        this.pg[i]=0; this.vol[i]=3*100*100/(127*127);
        this.bend[i]=0; this.brange[i]=0x100;
        this.rhythm[i]=0;
      }
      this.rhythm[9]=1;
      /**/
      this.preroll=0.2;
      this.relcnt=0;
      setInterval(
        function(){
          if(++this.relcnt>=3){
            this.relcnt=0;
            for(var i=this.notetab.length-1;i>=0;--i){
              var nt=this.notetab[i];
              if(this.actx.currentTime>nt.e){
                this._pruneNote(nt);
                this.notetab.splice(i,1);
              }
            }
            /**/
          }
          if(this.playing && this.song.ev.length>0){
            var e=this.song.ev[this.playIndex];
            while(this.actx.currentTime+this.preroll>this.playTime){
              if(e.m[0]==0xff51){
                this.song.tempo=e.m[1];
                this.tick2Time=4*60/this.song.tempo/this.song.timebase;
              }
              else
                this.send(e.m,this.playTime);
              ++this.playIndex;
              if(this.playIndex>=this.song.ev.length){
                if(this.loop){
                  e=this.song.ev[this.playIndex=0];
                  this.playTick=e.t;
                }
                else{
                  this.playTick=this.maxTick;
                  this.playing=0;
                  break;
                }
              }
              else{
                e=this.song.ev[this.playIndex];
                this.playTime+=(e.t-this.playTick)*this.tick2Time;
                this.playTick=e.t;
              }
            }
          }
        }.bind(this),60
      );
      //if(this.internalcontext){
      //  window.AudioContext = window.AudioContext || window.webkitAudioContext;
      //  this.setAudioContext(new AudioContext());
      //}
      this.isReady=1;
    },
    setMasterVol:function(v){
      if(v!=undefined)
        this.masterVol=v;
      if(this.out)
        this.out.gain.value=this.masterVol;
    },
    setReverbLev:function(v){
      if(v!=undefined)
        this.reverbLev=v;
      var r=parseFloat(this.reverbLev);
      if(this.rev&&!isNaN(r))
        this.rev.gain.value=r*8;
    },
    setLoop:function(f){
      this.loop=f;
    },
    setVoices:function(v){
      this.voices=v;
    },
    reset:function(){
      for(var i=0;i<16;++i){
        this.setProgram(i,0);
        this.setBendRange(i,0x100);
        this.setModulation(i,0);
        this.setChVol(i,100);
        this.setPan(i,64);
        this.resetAllControllers(i);
        this.allSoundOff(i);
        this.rhythm[i]=0;
      }
      this.rhythm[9]=1;
    },
    setQuality:function(q){
      var i,k,n,p;
      if(q!=undefined)
        this.quality=q;
      for(i=0;i<128;++i)
        this.setTimbre(0,i,this.program0[i]);
      for(i=0;i<this.drummap0.length;++i)
        this.setTimbre(1,i+35,this.drummap0[i]);
      if(this.quality){
        for(i=0;i<this.program1.length;++i)
          this.setTimbre(0,i,this.program1[i]);
        for(i=0;i<this.drummap.length;++i){
          if(this.drummap1[i])
            this.setTimbre(1,i+35,this.drummap1[i]);
        }
      }
    },
    setTimbre:function(m,n,p){
      var defp={g:0,w:"sine",t:1,f:0,v:0.5,a:0,h:0.01,d:0.01,s:0,r:0.05,p:1,q:1,k:0};
      function filldef(p){
        for(n=0;n<p.length;++n){
          for(k in defp){
            if(!p[n].hasOwnProperty(k) || typeof(p[n][k])=="undefined")
              p[n][k]=defp[k];
          }
        }
        return p;
      }
      if(m && n>=35 && n<=81)
        this.drummap[n-35] = filldef(p);
      if(m==0 && n>=0 && n<=127)
        this.program[n] = filldef(p);
    },
    _pruneNote:function(nt){
      for(var k=nt.o.length-1;k>=0;--k){
        if(nt.o[k].frequency){
          nt.o[k].frequency.cancelScheduledValues(0);
        }
        else{
          nt.o[k].playbackRate.cancelScheduledValues(0);
        }
        nt.g[k].gain.cancelScheduledValues(0);

        nt.o[k].stop();
        if(nt.o[k].detune) {
          try {
            this.chmod[nt.ch].disconnect(nt.o[k].detune);
          } catch (c) {}
        }
        nt.g[k].gain.value = 0;
      }
    },
    _limitVoices:function(ch,n){
      this.notetab.sort(function(n1,n2){
        if(n1.f!=n2.f) return n1.f-n2.f;
        if(n1.e!=n2.e) return n2.e-n1.e;
        return n2.t-n1.t;
      });
      for(var i=this.notetab.length-1;i>=0;--i){
        var nt=this.notetab[i];
        if(this.actx.currentTime>nt.e || i>=(this.voices-1)){
          this._pruneNote(nt);
          this.notetab.splice(i,1);
        }
      }
    },
    _note:function(t,ch,n,v,p){
      var out,sc,pn;
      var o=[],g=[],vp=[],fp=[],r=[];
      var f=440*Math.pow(2,(n-69)/12);
      this._limitVoices(ch,n);
      for(var i=0;i<p.length;++i){
        pn=p[i];
        var dt=t+pn.a+pn.h;
        if(pn.g==0)
          out=this.chvol[ch], sc=v*v/16384, fp[i]=f*pn.t+pn.f;
        else if(pn.g>10)
          out=g[pn.g-11].gain, sc=1, fp[i]=fp[pn.g-11]*pn.t+pn.f;
        else if(o[pn.g-1].frequency)
          out=o[pn.g-1].frequency, sc=fp[pn.g-1], fp[i]=fp[pn.g-1]*pn.t+pn.f;
        else
          out=o[pn.g-1].playbackRate, sc=fp[pn.g-1]/440, fp[i]=fp[pn.g-1]*pn.t+pn.f;
        switch(pn.w[0]){
        case "n":
          o[i]=this.actx.createBufferSource();
          o[i].buffer=this.noiseBuf[pn.w];
          o[i].loop=true;
          o[i].playbackRate.value=fp[i]/440;
          if(pn.p!=1)
            this._setParamTarget(o[i].playbackRate,fp[i]/440*pn.p,t,pn.q);
          this.chmod[ch].connect(o[i].detune);
          o[i].detune.value=this.bend[ch];
          break;
        default:
          o[i]=this.actx.createOscillator();
          o[i].frequency.value=fp[i];
          if(pn.p!=1)
            this._setParamTarget(o[i].frequency,fp[i]*pn.p,t,pn.q);
          if(pn.w[0]=="w")
            o[i].setPeriodicWave(this.wave[pn.w]);
          else
            o[i].type=pn.w;
          this.chmod[ch].connect(o[i].detune);
          o[i].detune.value=this.bend[ch];
          break;
        }
        g[i]=this.actx.createGain();
        r[i]=pn.r;
        o[i].connect(g[i]); g[i].connect(out);
        vp[i]=sc*pn.v;
        if(pn.k)
          vp[i]*=Math.pow(2,(n-60)/12*pn.k);
        if(pn.a){
          g[i].gain.value=0;
          g[i].gain.setValueAtTime(0,t);
          g[i].gain.linearRampToValueAtTime(vp[i],t+pn.a);
        }
        else
          g[i].gain.setValueAtTime(vp[i],t);
        this._setParamTarget(g[i].gain,pn.s*vp[i],dt,pn.d);
        o[i].start(t);
        if(this.rhythm[ch]){
          // difference between '()=>' and 'function()': need to pack parameters
          o[i].onended = function(a, b) { return function() { a.disconnect(b); }; }(this.chmod[ch], o[i].detune);
          o[i].stop(t+p[0].d*this.releaseRatio);
        }
      }
      if(!this.rhythm[ch])
        this.notetab.push({t:t,e:99999,ch:ch,n:n,o:o,g:g,t2:t+pn.a,v:vp,r:r,f:0});
    },
    _setParamTarget:function(p,v,t,d){
      if(d!=0)
        p.setTargetAtTime(v,t,d);
      else
        p.setValueAtTime(v,t);
    },
    _releaseNote:function(nt,t){
      if(nt.ch!=9){
        for(var k=nt.g.length-1;k>=0;--k){
          nt.g[k].gain.cancelScheduledValues(t);
          if(t==nt.t2)
            nt.g[k].gain.setValueAtTime(nt.v[k],t);
          else if(t<nt.t2)
            nt.g[k].gain.setValueAtTime(nt.v[k]*(t-nt.t)/(nt.t2-nt.t),t);
          this._setParamTarget(nt.g[k].gain,0,t,nt.r[k]);
        }
      }
      nt.e=t+nt.r[0]*this.releaseRatio;
      nt.f=1;
    },
    setModulation:function(ch,v,t){
      this.chmod[ch].gain.setValueAtTime(v*100/127,this._tsConv(t));
    },
    setChVol:function(ch,v,t){
      this.vol[ch]=3*v*v/(127*127);
      this.chvol[ch].gain.setValueAtTime(this.vol[ch]*this.ex[ch],this._tsConv(t));
    },
    setPan:function(ch,v,t){
      if(this.chpan[ch])
        this.chpan[ch].pan.setValueAtTime((v-64)/64,this._tsConv(t));
    },
    setExpression:function(ch,v,t){
      this.ex[ch]=v*v/(127*127);
      this.chvol[ch].gain.setValueAtTime(this.vol[ch]*this.ex[ch],this._tsConv(t));
    },
    setSustain:function(ch,v,t){
      this.sustain[ch]=v;
      t=this._tsConv(t);
      if(v<64){
        for(var i=this.notetab.length-1;i>=0;--i){
          var nt=this.notetab[i];
          if(t>=nt.t && nt.ch==ch && nt.f==1)
            this._releaseNote(nt,t);
        }
      }
    },
    allSoundOff:function(ch){
      for(var i=this.notetab.length-1;i>=0;--i){
        var nt=this.notetab[i];
        if(nt.ch==ch){
          this._pruneNote(nt);
          this.notetab.splice(i,1);
        }
      }
    },
    resetAllControllers:function(ch){
      this.bend[ch]=0; this.ex[ch]=1.0;
      this.rpnidx[ch]=0x3fff; this.sustain[ch]=0;
      if(this.chvol[ch]){
        this.chvol[ch].gain.value=this.vol[ch]*this.ex[ch];
        this.chmod[ch].gain.value=0;
      }
    },
    setBendRange:function(ch,v){
      this.brange[ch]=v;
    },
    setProgram:function(ch,v){
      if(this.debug)
        console.log("Pg("+ch+")="+v);
      this.pg[ch]=v;
    },
    setBend:function(ch,v,t){
      t=this._tsConv(t);
      var br=this.brange[ch]*100/127;
      this.bend[ch]=(v-8192)*br/8192;
      for(var i=this.notetab.length-1;i>=0;--i){
        var nt=this.notetab[i];
        if(nt.ch==ch){
          for(var k=nt.o.length-1;k>=0;--k){
            if(nt.o[k].frequency)
              nt.o[k].detune.setValueAtTime(this.bend[ch],t);
          }
        }
      }
    },
    noteOn:function(ch,n,v,t){
      if(v==0){
        this.noteOff(ch,n,t);
        return;
      }
      t=this._tsConv(t);
      if(this.rhythm[ch]){
        if(n>=35&&n<=81)
          this._note(t,ch,n,v,this.drummap[n-35]);
        return;
      }
      this._note(t,ch,n,v,this.program[this.pg[ch]]);
    },
    noteOff:function(ch,n,t){
      if(this.rhythm[ch])
        return;
      t=this._tsConv(t);
      for(var i=this.notetab.length-1;i>=0;--i){
        var nt=this.notetab[i];
        if(t>=nt.t && nt.ch==ch && nt.n==n && nt.f==0){
          nt.f=1;
          if(this.sustain[ch]<64)
            this._releaseNote(nt,t);
        }
      }
    },
    _tsConv:function(t){
      if(t==undefined||t<=0){
        t=0;
        if(this.actx)
          t=this.actx.currentTime;
      }
      else{
        if(this.tsmode)
          t=t*.001-this.tsdiff;
      }
      return t;
    },
    setTsMode:function(tsmode){
      this.tsmode=tsmode;
    },
    send:function(msg,t){    /* send midi message */
      var ch=msg[0]&0xf;
      var cmd=msg[0]&~0xf;
      if(cmd<0x80||cmd>=0x100)
        return;
      if(this.audioContext.state=="suspended"){
        this.audioContext.resume();
      }
      switch(cmd){
      case 0xb0:  /* ctl change */
        switch(msg[1]){
        case 1:  this.setModulation(ch,msg[2],t); break;
        case 7:  this.setChVol(ch,msg[2],t); break;
        case 10: this.setPan(ch,msg[2],t); break;
        case 11: this.setExpression(ch,msg[2],t); break;
        case 64: this.setSustain(ch,msg[2],t); break;
        case 98:  case 98: this.rpnidx[ch]=0x3fff; break; /* nrpn lsb/msb */
        case 100: this.rpnidx[ch]=(this.rpnidx[ch]&0x380)|msg[2]; break; /* rpn lsb */
        case 101: this.rpnidx[ch]=(this.rpnidx[ch]&0x7f)|(msg[2]<<7); break; /* rpn msb */
        case 6:  /* data entry msb */
          if(this.rpnidx[ch]==0)
            this.brange[ch]=(msg[2]<<7)+(this.brange[ch]&0x7f);
          break;
        case 38:  /* data entry lsb */
          if(this.rpnidx[ch]==0)
            this.brange[ch]=(this.brange[ch]&0x380)|msg[2];
          break;
        case 120:  /* all sound off */
        case 123:  /* all notes off */
        case 124: case 125: case 126: case 127: /* omni off/on mono/poly */
          this.allSoundOff(ch);
          break;
        case 121: this.resetAllControllers(ch); break;
        }
        break;
      case 0xc0: this.setProgram(ch,msg[1]); break;
      case 0xe0: this.setBend(ch,(msg[1]+(msg[2]<<7)),t); break;
      case 0x90: this.noteOn(ch,msg[1],msg[2],t); break;
      case 0x80: this.noteOff(ch,msg[1],t); break;
      case 0xf0:
        if (msg[0] == 0xff) {
          this.reset();
          break;
        }
        if(msg[0]!=254 && this.debug){
          var ds=[];
          for(var ii=0;ii<msg.length;++ii)
            ds.push(msg[ii].toString(16));
        }
        if(msg[1]==0x41&&msg[2]==0x10&&msg[3]==0x42&&msg[4]==0x12&&msg[5]==0x40){
          if((msg[6]&0xf0)==0x10&&msg[7]==0x15){
            var ch=[9,0,1,2,3,4,5,6,7,8,10,11,12,13,14,15][msg[6]&0xf];
            this.rhythm[ch]=msg[8];
          }
        }
        break;
      }
    },
    _createWave:function(w){
      var imag=new Float32Array(w.length);
      var real=new Float32Array(w.length);
      for(var i=1;i<w.length;++i)
        imag[i]=w[i];
      return this.actx.createPeriodicWave(real,imag);
    },
    getAudioContext:function(){
      return this.actx;
    },
    setAudioContext:function(actx,dest){
      this.audioContext=this.actx=actx;
      this.dest=dest;
      if(!dest)
        this.dest=actx.destination;
      this.tsdiff=performance.now()*.001-this.actx.currentTime;
      this.out=this.actx.createGain();
      this.comp=this.actx.createDynamicsCompressor();
      var blen=this.actx.sampleRate*.5|0;
      this.convBuf=this.actx.createBuffer(2,blen,this.actx.sampleRate);
      this.noiseBuf={};
      this.noiseBuf.n0=this.actx.createBuffer(1,blen,this.actx.sampleRate);
      this.noiseBuf.n1=this.actx.createBuffer(1,blen,this.actx.sampleRate);
      var d1=this.convBuf.getChannelData(0);
      var d2=this.convBuf.getChannelData(1);
      var dn=this.noiseBuf.n0.getChannelData(0);
      var dr=this.noiseBuf.n1.getChannelData(0);
      for(var i=0;i<blen;++i){
        if(i/blen<Math.random()){
          d1[i]=Math.exp(-3*i/blen)*(Math.random()-.5)*.5;
          d2[i]=Math.exp(-3*i/blen)*(Math.random()-.5)*.5;
        }
        dn[i]=Math.random()*2-1;
      }
      for(var jj=0;jj<64;++jj){
        var r1=Math.random()*10+1;
        var r2=Math.random()*10+1;
        for(i=0;i<blen;++i){
          var dd=Math.sin((i/blen)*2*Math.PI*440*r1)*Math.sin((i/blen)*2*Math.PI*440*r2);
          dr[i]+=dd/8;
        }
      }
      if(this.useReverb){
        this.conv=this.actx.createConvolver();
        this.conv.buffer=this.convBuf;
        this.rev=this.actx.createGain();
        this.rev.gain.value=this.reverbLev;
        this.out.connect(this.conv);
        this.conv.connect(this.rev);
        this.rev.connect(this.comp);
      }
      this.setMasterVol();
      this.out.connect(this.comp);
      this.comp.connect(this.dest);
      this.chvol=[]; this.chmod=[]; this.chpan=[];
      this.wave={"w9999":this._createWave("w9999")};
      this.lfo=this.actx.createOscillator();
      this.lfo.frequency.value=5;
      this.lfo.start(0);
      for(i=0;i<16;++i){
        this.chvol[i]=this.actx.createGain();
        if(this.actx.createStereoPanner){
          this.chpan[i]=this.actx.createStereoPanner();
          this.chvol[i].connect(this.chpan[i]);
          this.chpan[i].connect(this.out);
        }
        else{
          this.chpan[i]=null;
          this.chvol[i].connect(this.out);
        }
        this.chmod[i]=this.actx.createGain();
        this.lfo.connect(this.chmod[i]);
        this.pg[i]=0;
        this.resetAllControllers(i);
      }
      this.setReverbLev();
      this.reset();
      this.send([0x90,60,1]);
      this.send([0x90,60,0]);
    },
  }
/* webaudio-tinysynth coreobject */

;
  for(var k in this.sy.properties)
    this[k]=this.sy.properties[k].value;
  this.setQuality(1);
  if(opt){
    if(opt.useReverb!=undefined)
      this.useReverb=opt.useReverb;
    if(opt.quality!=undefined)
      this.setQuality(opt.quality);
    if(opt.voices!=undefined)
      this.setVoices(opt.voices);
  }
  this.ready();
}

  var _ac = JZZ.lib.getAudioContext();

  var _synth = {};
  var _noname = [];
  var _engine = {};

  _engine._info = function(name) {
    if (!name) name = 'JZZ.synth.Tiny';
    return {
      type: 'Web Audo',
      name: name,
      manufacturer: 'virtual',
      version: _version
    };
  };

  _engine._openOut = function(port, name) {
    if (!_ac) { port._crash('AudioContext not supported'); return; }
    var synth;
    if (typeof name !== 'undefined') {
      name = '' + name;
      if (!_synth[name]) _synth[name] = new WebAudioTinySynth();
      synth = _synth[name];
    }
    else {
      synth = new WebAudioTinySynth();
      _noname.push(synth);
    }
    synth.setAudioContext(_ac);
    port.plug = function(dest) {
      if (dest && (dest.context instanceof AudioContext || dest.context instanceof webkitAudioContext)) {
        synth.setAudioContext(dest.context, dest);
      }
    };
    port._info = _engine._info(name);
    port._receive = function(msg) { synth.send(msg); };
    port._resume();
  };

  JZZ.synth.Tiny = function(name) {
    return JZZ.lib.openMidiOut(name, _engine);
  };

  JZZ.synth.Tiny.register = function(name) {
    return _ac ? JZZ.lib.registerMidiOut(name, _engine) : false;
  };

  JZZ.synth.Tiny.version = function() { return _version; };

});

/***/ }),

/***/ "./node_modules/jzz/javascript/JZZ.js":
/*!********************************************!*\
  !*** ./node_modules/jzz/javascript/JZZ.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(global, factory) {
  if (true) {
    module.exports = factory();
  }
  else {}
})(this, function() {

  var _scope = typeof window === 'undefined' ? global : window;
  var _version = '1.0.1';
  var i, j, k, m, n;

  var _time = Date.now || function () { return new Date().getTime(); };
  var _startTime = _time();
  var _now = typeof performance != 'undefined' && performance.now ?
    function() { return performance.now(); } : function() { return _time() - _startTime; };
  var _schedule = function(f) {
    setTimeout(f, 0);
  };

  // _R: common root for all async objects
  function _R() {
    this._orig = this;
    this._ready = false;
    this._queue = [];
    this._log = [];
  }
  _R.prototype._exec = function() {
    while (this._ready && this._queue.length) {
      var x = this._queue.shift();
      x[0].apply(this, x[1]);
    }
  };
  _R.prototype._push = function(func, arg) { this._queue.push([func, arg]); _R.prototype._exec.apply(this); };
  _R.prototype._slip = function(func, arg) { this._queue.unshift([func, arg]); };
  _R.prototype._pause = function() { this._ready = false; };
  _R.prototype._resume = function() { this._ready = true; _R.prototype._exec.apply(this); };
  _R.prototype._break = function(err) { this._orig._bad = true; this._orig._log.push(err || 'Unknown JZZ error'); };
  _R.prototype._repair = function() { this._orig._bad = false; };
  _R.prototype._crash = function(err) { this._break(err); this._resume(); };
  _R.prototype._err = function() { return this._log[this._log.length - 1]; };
  _R.prototype.log = function() { return _clone(this._log); };
  _R.prototype._image = function() {
    var F = function() {}; F.prototype = this._orig;
    var ret = new F();
    ret._ready = false;
    ret._queue = [];
    return ret;
  };
  _R.prototype._thenable = function() {
    var self = this;
    var F = function() {}; F.prototype = self;
    var ret = new F();
    ret.then = function(good, bad) { self._push(_then, [good, bad]); return this; };      
    return ret;
  };
  function _then(good, bad) {
    if (this._bad) {
      if (bad instanceof Function) bad.apply(this, [new Error(this._err())]);
    }
    else {
      if (good instanceof Function) good.apply(this, [this]);
    }
  }
  function _wait(obj, delay) {
    if (this._bad) obj._crash(this._err());
    else setTimeout(function() { obj._resume(); }, delay);
  }
  _R.prototype.wait = function(delay) {
    if (!delay) return this;
    var ret = this._image();
    this._push(_wait, [ret, delay]);
    return ret._thenable();
  };
  function _kick(obj) { if (this._bad) obj._break(this._err()); obj._resume(); }
  function _rechain(self, obj, name) {
    self[name] = function() {
      var arg = arguments;
      var ret = obj._image();
      this._push(_kick, [ret]);
      return ret[name].apply(ret, arg);
    };
  }
  function _and(q) {
    if (!this._bad) {
      if (q instanceof Function) q.apply(this); else console.log(q);
    }
  }
  _R.prototype.and = function(func) { this._push(_and, [func]); return this._thenable(); };
  function _or(q) {
    if (this._bad) {
      if (q instanceof Function) q.apply(this); else console.log(q);
    }
  }
  _R.prototype.or = function(func) { this._push(_or, [func]); return this._thenable(); };

  _R.prototype._info = {};
  _R.prototype.info = function() {
    var info = _clone(this._orig._info);
    if (typeof info.engine == 'undefined') info.engine = 'none';
    if (typeof info.sysex == 'undefined') info.sysex = true;
    return info;
  };
  _R.prototype.name = function() { return this.info().name; };

  function _close(obj) {
    if (this._bad) obj._crash(this._err());
    else {
      this._break('Closed');
      obj._resume();
    }
  }
  _R.prototype.close = function() {
    var ret = new _R();
    if (this._close) this._push(this._close, []);
    this._push(_close, [ret]);
    return ret._thenable();
  };

  function _tryAny(arr) {
    if (!arr.length) {
      this._break();
      return;
    }
    var func = arr.shift();
    if (arr.length) {
      var self = this;
      this._slip(_or, [ function() { _tryAny.apply(self, [arr]); } ]);
    }
    try {
      this._repair();
      func.apply(this);
    }
    catch (err) {
      this._break(err.toString());
    }
  }

  function _push(arr, obj) {
    for (var i = 0; i < arr.length; i++) if (arr[i] === obj) return;
    arr.push(obj);
  }
  function _pop(arr, obj) {
    for (var i = 0; i < arr.length; i++) if (arr[i] === obj) {
      arr.splice(i, 1);
      return;
    }
  }

  // _J: JZZ object
  function _J() {
    _R.apply(this);
  }
  _J.prototype = new _R();

  function _clone(obj, key, val) {
    if (typeof key == 'undefined') return _clone(obj, [], []);
    if (obj instanceof Object) {
      for (var i = 0; i < key.length; i++) if (key[i] === obj) return val[i];
      var ret;
      if (obj instanceof Array) ret = []; else ret = {};
      key.push(obj); val.push(ret);
      for(var k in obj) if (obj.hasOwnProperty(k)) ret[k] = _clone(obj[k], key, val);
      return ret;
    }
    return obj;
  }
  _J.prototype._info = { name: 'JZZ.js', ver: _version, version: _version, inputs: [], outputs: [] };

  var _outs = [];
  var _ins = [];
  var _outsW = [];
  var _insW = [];

  function _postRefresh() {
    _jzz._info.engine = _engine._type;
    _jzz._info.version = _engine._version;
    _jzz._info.sysex = _engine._sysex;
    _jzz._info.inputs = [];
    _jzz._info.outputs = [];
    _outs = [];
    _ins = [];
    _engine._allOuts = {};
    _engine._allIns = {};
    var i, x;
    for (i = 0; i < _engine._outs.length; i++) {
      x = _engine._outs[i];
      x.engine = _engine;
      _engine._allOuts[x.name] = x;
      _jzz._info.outputs.push({
        id: x.name,
        name: x.name,
        manufacturer: x.manufacturer,
        version: x.version,
        engine: _engine._type
      });
      _outs.push(x);
    }
    for (i = 0; i < _virtual._outs.length; i++) {
      x = _virtual._outs[i];
      _jzz._info.outputs.push({
        id: x.name,
        name: x.name,
        manufacturer: x.manufacturer,
        version: x.version,
        engine: x.type
      });
      _outs.push(x);
    }
    for (i = 0; i < _engine._ins.length; i++) {
      x = _engine._ins[i];
      x.engine = _engine;
      _engine._allIns[x.name] = x;
      _jzz._info.inputs.push({
        id: x.name,
        name: x.name,
        manufacturer: x.manufacturer,
        version: x.version,
        engine: _engine._type
      });
      _ins.push(x);
    }
    for (i = 0; i < _virtual._ins.length; i++) {
      x = _virtual._ins[i];
      _jzz._info.inputs.push({
        id: x.name,
        name: x.name,
        manufacturer: x.manufacturer,
        version: x.version,
        engine: x.type
      });
      _ins.push(x);
    }
    if (_jzz._watcher && _jzz._watcher._handles.length) {
      var diff = _diff(_insW, _outsW, _jzz._info.inputs, _jzz._info.outputs);
       if (diff) {
        for (j = 0; j < diff.inputs.removed.length; j++) {
          x = _engine._inMap[diff.inputs.removed[j].name];
          if (x) x._closeAll();
        }
        for (j = 0; j < diff.outputs.removed.length; j++) {
          x = _engine._outMap[diff.outputs.removed[j].name];
          if (x) x._closeAll();
        }
        _fireW(diff);
      }
    }
    _insW = _jzz._info.inputs;
    _outsW = _jzz._info.outputs;
  }
  function _refresh() {
    if (!this._bad) _engine._refresh(this);
  }
  _J.prototype.refresh = function() {
    this._push(_refresh, []);
    return this._thenable();
  };

  function _filterList(q, arr) {
    var i, n;
    if (q instanceof Function) q = q(arr);
    if (!(q instanceof Array)) q = [q];
    var before = [];
    var after = [];
    var etc = arr.slice();
    var a = before;
    for (i = 0; i < q.length; i++) {
      if (typeof q[i] == 'undefined') a = after;
      else if (q[i] instanceof RegExp) for (n = 0; n < etc.length; n++) {
        if (q[i].test(etc[n].name)) {
          a.push(etc[n]);
          etc.splice(n, 1);
          n--;
        }
      }
      else {
        for (n = 0; n < etc.length; n++) if (q[i] + '' === n + '' || q[i] === etc[n].name || (q[i] instanceof Object && q[i].name === etc[n].name)) {
          a.push(etc[n]);
          etc.splice(n, 1);
          n--;
        }
      }
    }
    return a == before ? before : before.concat(etc).concat(after);
  }

  function _notFound(port, q) {
    var msg;
    if (q instanceof RegExp) msg = 'Port matching ' + q + ' not found';
    else if (q instanceof Object || typeof q == 'undefined') msg = 'Port not found';
    else msg = 'Port "' + q + '" not found';
    port._crash(msg);
  }
  function _openMidiOut(port, arg) {
    if (this._bad) port._crash(this._err());
    else {
      var arr = _filterList(arg, _outs);
      if (!arr.length) { _notFound(port, arg); return; }
      var pack = function(x) { return function() { x.engine._openOut(this, x.name); }; };
      for (var i = 0; i < arr.length; i++) arr[i] = pack(arr[i]);
      port._slip(_tryAny, [arr]);
      port._resume();
    }
  }
  _J.prototype.openMidiOut = function(arg) {
    var port = new _M();
    this._push(_refresh, []);
    this._push(_openMidiOut, [port, arg]);
    return port._thenable();
  };
  _J.prototype._openMidiOutNR = function(arg) {
    var port = new _M();
    this._push(_openMidiOut, [port, arg]);
    return port._thenable();
  };

  function _openMidiIn(port, arg) {
    if (this._bad) port._crash(this._err());
    else {
      var arr = _filterList(arg, _ins);
      if (!arr.length) { _notFound(port, arg); return; }
      var pack = function(x) { return function() { x.engine._openIn(this, x.name); }; };
      for (var i = 0; i < arr.length; i++) arr[i] = pack(arr[i]);
      port._slip(_tryAny, [arr]);
      port._resume();
    }
  }
  _J.prototype.openMidiIn = function(arg) {
    var port = new _M();
    this._push(_refresh, []);
    this._push(_openMidiIn, [port, arg]);
    return port._thenable();
  };
  _J.prototype._openMidiInNR = function(arg) {
    var port = new _M();
    this._push(_openMidiIn, [port, arg]);
    return port._thenable();
  };

  function _onChange(watcher, arg) {
    if (this._bad) watcher._crash();
    else {
      watcher._slip(_connectW, [arg]);
      watcher._resume();
    }
  }
  _J.prototype.onChange = function(arg) {
    if (!this._orig._watcher) this._orig._watcher = new _W();
    var watcher = this._orig._watcher._image();
    this._push(_onChange, [watcher, arg]);
    return watcher._thenable();
  };

  _J.prototype._close = function() {
    _engine._close();
  };

  // _M: MIDI-In/Out object
  function _M() {
    _R.apply(this);
    this._handles = [];
    this._outs = [];
  }
  _M.prototype = new _R();
  _M.prototype._filter = function(msg) {
    if (this._orig._mpe) {
      var out;
      var outs = 0;
      if (this._handles && this._handles.length) {
        outs = this._handles.length;
        out = this._handles[0];
      }
      if (this._outs && this._outs.length) {
        outs = this._outs.length;
        out = this._outs[0];
      }
      if (outs == 1 && !out._mpe) {
        msg = this._orig._mpe.filter(msg);
      }
    }
    return msg;
  };
  _M.prototype._receive = function(msg) { this._emit(this._filter(msg)); };
  function _receive(msg) { if (!this._bad) this._receive(msg); }
  _M.prototype.send = function() {
    this._push(_receive, [MIDI.apply(null, arguments)]);
    return this._thenable();
  };
  _M.prototype.note = function(c, n, v, t) {
    this.noteOn(c, n, v);
    if (t > 0) this.wait(t).noteOff(c, n);
    return this._thenable();
  };
  _M.prototype._emit = function(msg) {
    var i;
    for (i = 0; i < this._handles.length; i++) this._handles[i].apply(this, [MIDI(msg)._stamp(this)]);
    for (i = 0; i < this._outs.length; i++) {
      var m = MIDI(msg);
      if (!m._stamped(this._outs[i])) this._outs[i].send(m._stamp(this));
    }
  };
  function _emit(msg) { this._emit(msg); }
  _M.prototype.emit = function(msg) {
    this._push(_emit, [msg]);
    return this._thenable();
  };
  function _connect(arg) {
    if (arg instanceof Function) _push(this._orig._handles, arg);
    else _push(this._orig._outs, arg);
  }
  function _disconnect(arg) {
    if (typeof arg == 'undefined') {
      this._orig._handles = [];
      this._orig._outs = [];
    }
    else if (arg instanceof Function) _pop(this._orig._handles, arg);
    else _pop(this._orig._outs, arg);
  }
  _M.prototype.connect = function(arg) {
    this._push(_connect, [arg]);
    return this._thenable();
  };
  _M.prototype.disconnect = function(arg) {
    this._push(_disconnect, [arg]);
    return this._thenable();
  };
  _M.prototype.connected = function() {
    return this._orig._handles.length + this._orig._outs.length;
  };
  _M.prototype.ch = function(n) {
    if (typeof n == 'undefined') return this;
    _validateChannel(n);
    var chan = new _C(this, n);
    this._push(_kick, [chan]);
    return chan._thenable();
  };
  function _mpe(m, n) {
    if (!this._orig._mpe) this._orig._mpe = new MPE();
    this._orig._mpe.setup(m, n);
  }
  _M.prototype.mpe = function(m, n) {
    if (typeof m == 'undefined' && typeof n == 'undefined') return this;
    MPE.validate(m, n);
    var chan = n ? new _E(this, m, n) : new _C(this, m);
    this._push(_mpe, [m, n]);
    this._push(_kick, [chan]);
    return chan._thenable();
  };
  function _validateChannel(c) {
    if (c != parseInt(c) || c < 0 || c > 15)
      throw RangeError('Bad channel value (must not be less than 0 or more than 15): ' + c);
  }

  // _C: MIDI Channel object
  function _C(port, chan) {
    _M.apply(this);
    this._port = port._orig;
    this._chan = chan;
    _rechain(this, this._port, 'ch');
    _rechain(this, this._port, 'mpe');
    _rechain(this, this._port, 'connect');
    _rechain(this, this._port, 'disconnect');
    _rechain(this, this._port, 'close');
  }
  _C.prototype = new _M();
  _C.prototype.channel = function() { return this._chan; };
  _C.prototype._receive = function(msg) { this._port._receive(msg); };
  _C.prototype.note = function(n, v, t) {
    this.noteOn(n, v);
    if (t) this.wait(t).noteOff(n);
    return this._thenable();
  };

  // _E: MPE Channel object
  function _E(port, m, n) {
    _M.apply(this);
    this._port = port._orig;
    this._master = m;
    this._band = n;
    _rechain(this, this._port, 'ch');
    _rechain(this, this._port, 'mpe');
    _rechain(this, this._port, 'connect');
    _rechain(this, this._port, 'disconnect');
    _rechain(this, this._port, 'close');
  }
  _E.prototype = new _M();
  _E.prototype.channel = function() { return this._master; };
  _E.prototype._receive = function(msg) { this._port._receive(msg); };
  _E.prototype.note = function(n, v, t) {
    this.noteOn(n, v);
    if (t) this.wait(t).noteOff(n);
    return this._thenable();
  };

  // _W: Watcher object ~ MIDIAccess.onstatechange
  function _W() {
    _R.apply(this);
    this._handles = [];
    _rechain(this, _jzz, 'refresh');
    _rechain(this, _jzz, 'openMidiOut');
    _rechain(this, _jzz, 'openMidiIn');
    _rechain(this, _jzz, 'onChange');
    _rechain(this, _jzz, 'close');
  }
  _W.prototype = new _R();
  function _connectW(arg) {
    if (arg instanceof Function) {
      if (!this._orig._handles.length) _engine._watch();
      _push(this._orig._handles, arg);
    }
  }
  function _disconnectW(arg) {
    if (typeof arg == 'undefined') this._orig._handles = [];
    else _pop(this._orig._handles, arg);
    if (!this._orig._handles.length) _engine._unwatch();
  }
  _W.prototype.connect = function(arg) {
    this._push(_connectW, [arg]);
    return this._thenable();
  };
  _W.prototype.disconnect = function(arg) {
    this._push(_disconnectW, [arg]);
    return this._thenable();
  };
  function _changed(x0, y0, x1, y1) {
    var i;
    if (x0.length != x1.length || y0.length != y1.length) return true;
    for (i = 0; i < x0.length; i++) if (x0[i].name != x1[i].name) return true;
    for (i = 0; i < y0.length; i++) if (y0[i].name != y1[i].name) return true;
    return false;
  }
  function _diff(x0, y0, x1, y1) {
    if (!_changed(x0, y0, x1, y1)) return;
    var ax = []; // added
    var ay = [];
    var rx = []; // removed
    var ry = [];
    var i;
    var h = {};
    for (i = 0; i < x0.length; i++) h[x0[i].name] = true;
    for (i = 0; i < x1.length; i++) if (!h[x1[i].name]) ax.push(x1[i]);
    h = {};
    for (i = 0; i < x1.length; i++) h[x1[i].name] = true;
    for (i = 0; i < x0.length; i++) if (!h[x0[i].name]) rx.push(x0[i]);
    h = {};
    for (i = 0; i < y0.length; i++) h[y0[i].name] = true;
    for (i = 0; i < y1.length; i++) if (!h[y1[i].name]) ay.push(y1[i]);
    h = {};
    for (i = 0; i < y1.length; i++) h[y1[i].name] = true;
    for (i = 0; i < y0.length; i++) if (!h[y0[i].name]) ry.push(y0[i]);
    return { inputs: { added: ax, removed: rx }, outputs: { added: ay, removed: ry } };
  }
  function _fireW(arg) {
    for (i = 0; i < _jzz._watcher._handles.length; i++) _jzz._watcher._handles[i].apply(_jzz, [arg]);
  }

  var _jzz;
  var _engine = {};
  var _virtual = { _outs: [], _ins: []};

  // Node.js
  function _tryNODE() {
    if ( true && module.exports) {
      _initNode(__webpack_require__(/*! jazz-midi */ "./node_modules/jazz-midi/index.js"));
      return;
    }
    this._break();
  }
  // Jazz-Plugin
  function _tryJazzPlugin() {
    var div = document.createElement('div');
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var obj = document.createElement('object');
    obj.style.visibility = 'hidden';
    obj.style.width = '0px'; obj.style.height = '0px';
    obj.classid = 'CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90';
    obj.type = 'audio/x-jazz';
    document.body.appendChild(obj);
    if (obj.isJazz) {
      _initJazzPlugin(obj);
      return;
    }
    this._break();
  }

  // Web MIDI API
  var _navigator;
  var _requestMIDIAccess;
  if (typeof navigator !== 'undefined' && navigator.requestMIDIAccess) {
    _navigator = navigator;
    _requestMIDIAccess = navigator.requestMIDIAccess;
    try {
      if (_requestMIDIAccess.toString().indexOf('JZZ(') != -1) _requestMIDIAccess = undefined;
    }
    catch (err) {}
  }
  function _tryWebMIDI() {
    if (_requestMIDIAccess) {
      var self = this;
      var onGood = function(midi) {
        _initWebMIDI(midi);
        self._resume();
      };
      var onBad = function(msg) {
        self._crash(msg);
      };
      var opt = {};
      _requestMIDIAccess.call(_navigator, opt).then(onGood, onBad);
      this._pause();
      return;
    }
    this._break();
  }
  function _tryWebMIDIsysex() {
    if (_requestMIDIAccess) {
      var self = this;
      var onGood = function(midi) {
        _initWebMIDI(midi, true);
        self._resume();
      };
      var onBad = function(msg) {
        self._crash(msg);
      };
      var opt = {sysex:true};
      _requestMIDIAccess.call(_navigator, opt).then(onGood, onBad);
      this._pause();
      return;
    }
    this._break();
  }
  // Web-extension
  function _tryCRX() {
    var self = this;
    var inst;
    var msg;
    function eventHandle() {
      inst = true;
      if (!msg) msg = document.getElementById('jazz-midi-msg');
      if (!msg) return;
      var a = [];
      try { a = JSON.parse(msg.innerText); } catch (err) {}
      msg.innerText = '';
      document.removeEventListener('jazz-midi-msg', eventHandle);
      if (a[0] === 'version') {
        _initCRX(msg, a[2]);
        self._resume();
      }
      else {
        self._crash();
      }
    }
    this._pause();
    document.addEventListener('jazz-midi-msg', eventHandle);
    try { document.dispatchEvent(new Event('jazz-midi')); } catch (err) {}
    _schedule(function() { if (!inst) self._crash(); });
  }

  function _zeroBreak() {
    this._pause();
    var self = this;
    _schedule(function() { self._crash(); });
  }

  function _filterEngines(opt) {
    var ret = [];
    var arr = _filterEngineNames(opt);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 'webmidi') {
        if (opt && opt.sysex === true) ret.push(_tryWebMIDIsysex);
        if (!opt || opt.sysex !== true || opt.degrade === true) ret.push(_tryWebMIDI);
      }
      else if (arr[i] == 'node') { ret.push(_tryNODE); ret.push(_zeroBreak); }
      else if (arr[i] == 'extension') ret.push(_tryCRX);
      else if (arr[i] == 'plugin') ret.push(_tryJazzPlugin);
    }
    ret.push(_initNONE);
    return ret;
  }

  function _filterEngineNames(opt) {
    var web = ['node', 'extension', 'plugin', 'webmidi'];
    if (!opt || !opt.engine) return web;
    var arr = opt.engine instanceof Array ? opt.engine : [opt.engine];
    var dup = {};
    var none;
    var etc;
    var head = [];
    var tail = [];
    var i;
    for (i = 0; i < arr.length; i++) {
      var name = arr[i].toString().toLowerCase();
      if (dup[name]) continue;
      dup[name] = true;
      if (name === 'none') none = true;
      if (name === 'etc' || typeof name == 'undefined') etc = true;
      if (etc) tail.push(name); else head.push(name);
      _pop(web, name);
    }
    if (etc || head.length || tail.length) none = false;
    return none ? [] : head.concat(etc ? web : tail);
  }

  function _initJZZ(opt) {
    _initAudioContext();
    _jzz = new _J();
    _jzz._options = opt;
    _jzz._push(_tryAny, [_filterEngines(opt)]);
    _jzz.refresh();
    _jzz._resume();
  }

  function _initNONE() {
    _engine._type = 'none';
    _engine._version = _version;
    _engine._sysex = true;
    _engine._outs = [];
    _engine._ins = [];
    _engine._refresh = function() { _postRefresh(); };
    _engine._watch = function() {};
    _engine._unwatch = function() {};
    _engine._close = function() {};
  }
  // common initialization for Jazz-Plugin and jazz-midi
  function _initEngineJP() {
    _engine._inArr = [];
    _engine._outArr = [];
    _engine._inMap = {};
    _engine._outMap = {};
    _engine._outsW = [];
    _engine._insW = [];
    _engine._version = _engine._main.version;
    _engine._sysex = true;
    var watcher;
    function _closeAll() {
      for (var i = 0; i < this.clients.length; i++) this._close(this.clients[i]);
    }
    _engine._refresh = function() {
      _engine._outs = [];
      _engine._ins = [];
      var i, x;
      for (i = 0; (x = _engine._main.MidiOutInfo(i)).length; i++) {
        _engine._outs.push({ type: _engine._type, name: x[0], manufacturer: x[1], version: x[2] });
      }
      for (i = 0; (x = _engine._main.MidiInInfo(i)).length; i++) {
        _engine._ins.push({ type: _engine._type, name: x[0], manufacturer: x[1], version: x[2] });
      }
      _postRefresh();
    };
    _engine._openOut = function(port, name) {
      var impl = _engine._outMap[name];
      if (!impl) {
        if (_engine._pool.length <= _engine._outArr.length) _engine._pool.push(_engine._newPlugin());
        impl = {
          name: name,
          clients: [],
          info: {
            name: name,
            manufacturer: _engine._allOuts[name].manufacturer,
            version: _engine._allOuts[name].version,
            type: 'MIDI-out',
            sysex: _engine._sysex,
            engine: _engine._type
          },
          _close: function(port) { _engine._closeOut(port); },
          _closeAll: _closeAll,
          _receive: function(a) { if (a.length) this.plugin.MidiOutRaw(a.slice()); }
        };
        var plugin = _engine._pool[_engine._outArr.length];
        impl.plugin = plugin;
        _engine._outArr.push(impl);
        _engine._outMap[name] = impl;
      }
      if (!impl.open) {
        var s = impl.plugin.MidiOutOpen(name);
        if (s !== name) {
          if (s) impl.plugin.MidiOutClose();
          port._break(); return;
        }
        impl.open = true;
      }
      port._orig._impl = impl;
      _push(impl.clients, port._orig);
      port._info = impl.info;
      port._receive = function(arg) { impl._receive(arg); };
      port._close = function() { impl._close(this); };
    };
    _engine._openIn = function(port, name) {
      var impl = _engine._inMap[name];
      if (!impl) {
        if (_engine._pool.length <= _engine._inArr.length) _engine._pool.push(_engine._newPlugin());
        impl = {
          name: name,
          clients: [],
          info: {
            name: name,
            manufacturer: _engine._allIns[name].manufacturer,
            version: _engine._allIns[name].version,
            type: 'MIDI-in',
            sysex: _engine._sysex,
            engine: _engine._type
          },
          _close: function(port) { _engine._closeIn(port); },
          _closeAll: _closeAll,
          handle: function(t, a) {
            for (var i = 0; i < this.clients.length; i++) {
              var msg = MIDI(a);
              this.clients[i]._emit(msg);
            }
          }
        };
        var makeHandle = function(x) { return function(t, a) { x.handle(t, a); }; };
        impl.onmidi = makeHandle(impl);
        var plugin = _engine._pool[_engine._inArr.length];
        impl.plugin = plugin;
        _engine._inArr.push(impl);
        _engine._inMap[name] = impl;
      }
      if (!impl.open) {
        var s = impl.plugin.MidiInOpen(name, impl.onmidi);
        if (s !== name) {
          if (s) impl.plugin.MidiInClose();
          port._break(); return;
        }
        impl.open = true;
      }
      port._orig._impl = impl;
      _push(impl.clients, port._orig);
      port._info = impl.info;
      port._close = function() { impl._close(this); };
    };
    _engine._closeOut = function(port) {
      var impl = port._impl;
      _pop(impl.clients, port._orig);
      if (!impl.clients.length && impl.open) {
        impl.open = false;
        impl.plugin.MidiOutClose();
      }
    };
    _engine._closeIn = function(port) {
      var impl = port._impl;
      _pop(impl.clients, port._orig);
      if (!impl.clients.length && impl.open) {
        impl.open = false;
        impl.plugin.MidiInClose();
      }
    };
    _engine._close = function() {
      for (var i = 0; i < _engine._inArr.length; i++) if (_engine._inArr[i].open) _engine._inArr[i].plugin.MidiInClose();
      _engine._unwatch();
    };
    _engine._watch = function() {
      if (!watcher) watcher = setInterval(function() { _engine._refresh(); }, 250);
    };
    _engine._unwatch = function() {
      if (watcher) clearInterval(watcher);
      watcher = undefined;
    };
  }

  function _initNode(obj) {
    _engine._type = 'node';
    _engine._main = obj;
    _engine._pool = [];
    _engine._newPlugin = function() { return new obj.MIDI(); };
    _initEngineJP();
  }
  function _initJazzPlugin(obj) {
    _engine._type = 'plugin';
    _engine._main = obj;
    _engine._pool = [obj];
    _engine._newPlugin = function() {
      var plg = document.createElement('object');
      plg.style.visibility = 'hidden';
      plg.style.width = '0px'; obj.style.height = '0px';
      plg.classid = 'CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90';
      plg.type = 'audio/x-jazz';
      document.body.appendChild(plg);
      return plg.isJazz ? plg : undefined;
    };
    _initEngineJP();
  }
  function _initWebMIDI(access, sysex) {
    _engine._type = 'webmidi';
    _engine._version = 43;
    _engine._sysex = !!sysex;
    _engine._access = access;
    _engine._inMap = {};
    _engine._outMap = {};
    _engine._outsW = [];
    _engine._insW = [];
    var watcher;
    function _closeAll() {
      for (var i = 0; i < this.clients.length; i++) this._close(this.clients[i]);
    }
    _engine._refresh = function() {
      _engine._outs = [];
      _engine._ins = [];
      _engine._access.outputs.forEach(function(port) {
        _engine._outs.push({type: _engine._type, name: port.name, manufacturer: port.manufacturer, version: port.version});
      });
      _engine._access.inputs.forEach(function(port) {
        _engine._ins.push({type: _engine._type, name: port.name, manufacturer: port.manufacturer, version: port.version});
      });
      _postRefresh();
    };
    _engine._openOut = function(port, name) {
      var impl = _engine._outMap[name];
      if (!impl) {
        impl = {
          name: name,
          clients: [],
          info: {
            name: name,
            manufacturer: _engine._allOuts[name].manufacturer,
            version: _engine._allOuts[name].version,
            type: 'MIDI-out',
            sysex: _engine._sysex,
            engine: _engine._type
          },
          _close: function(port) { _engine._closeOut(port); },
          _closeAll: _closeAll,
          _receive: function(a) { if (impl.dev && a.length) this.dev.send(a.slice()); }
        };
      }
      var found;
      _engine._access.outputs.forEach(function(dev) {
        if (dev.name === name) found = dev;
      });
      if (found) {
        impl.dev = found;
        _engine._outMap[name] = impl;
        port._orig._impl = impl;
        _push(impl.clients, port._orig);
        port._info = impl.info;
        port._receive = function(arg) { impl._receive(arg); };
        port._close = function() { impl._close(this); };
        if (impl.dev.open) {
          port._pause();
          impl.dev.open().then(function() {
            port._resume();
          }, function() {
            port._crash();
          });
        }
      }
      else port._break();
    };
    _engine._openIn = function(port, name) {
      var impl = _engine._inMap[name];
      if (!impl) {
        impl = {
          name: name,
          clients: [],
          info: {
            name: name,
            manufacturer: _engine._allIns[name].manufacturer,
            version: _engine._allIns[name].version,
            type: 'MIDI-in',
            sysex: _engine._sysex,
            engine: _engine._type
          },
          _close: function(port) { _engine._closeIn(port); },
          _closeAll: _closeAll,
          handle: function(evt) {
            for (var i = 0; i < this.clients.length; i++) {
              var msg = MIDI([].slice.call(evt.data));
              this.clients[i]._emit(msg);
            }
          }
        };
      }
      var found;
      _engine._access.inputs.forEach(function(dev) {
        if (dev.name === name) found = dev;
      });
      if (found) {
        impl.dev = found;
        var makeHandle = function(x) { return function(evt) { x.handle(evt); }; };
        impl.dev.onmidimessage = makeHandle(impl);
        _engine._inMap[name] = impl;
        port._orig._impl = impl;
        _push(impl.clients, port._orig);
        port._info = impl.info;
        port._close = function() { impl._close(this); };
        if (impl.dev.open) {
          port._pause();
          impl.dev.open().then(function() {
            port._resume();
          }, function() {
            port._crash();
          });
        }
      }
      else port._break();
    };
    _engine._closeOut = function(port) {
      var impl = port._impl;
      _pop(impl.clients, port._orig);
      if (!impl.clients.length) {
        if (impl.dev && impl.dev.close) impl.dev.close();
        impl.dev = undefined;
      }
    };
    _engine._closeIn = function(port) {
      var impl = port._impl;
      _pop(impl.clients, port._orig);
      if (!impl.clients.length) {
        if (impl.dev) {
          impl.dev.onmidimessage = null;
          if (impl.dev.close) impl.dev.close();
        }
        impl.dev = undefined;
      }
    };
    _engine._close = function() {
      _engine._unwatch();
    };
    _engine._watch = function() {
      _engine._access.onstatechange = function() {
        watcher = true;
        _schedule(function() {
          if (watcher) {
            _engine._refresh();
            watcher = false;
          }
        });
      };
    };
    _engine._unwatch = function() {
      _engine._access.onstatechange = undefined;
    };
  }
  function _initCRX(msg, ver) {
    _engine._type = 'extension';
    _engine._version = ver;
    _engine._sysex = true;
    _engine._pool = [];
    _engine._outs = [];
    _engine._ins = [];
    _engine._inArr = [];
    _engine._outArr = [];
    _engine._inMap = {};
    _engine._outMap = {};
    _engine._outsW = [];
    _engine._insW = [];
    _engine.refreshClients = [];
    _engine._msg = msg;
    _engine._newPlugin = function() {
      var plugin = { id: _engine._pool.length };
      _engine._pool.push(plugin);
      if (!plugin.id) plugin.ready = true;
      else document.dispatchEvent(new CustomEvent('jazz-midi', {detail:['new']}));
    };
    _engine._newPlugin();
    _engine._refresh = function(client) {
      _engine.refreshClients.push(client);
      client._pause();
      _schedule(function() {
        document.dispatchEvent(new CustomEvent('jazz-midi', { detail: ['refresh'] }));
      });
    };
    function _closeAll() {
      for (var i = 0; i < this.clients.length; i++) this._close(this.clients[i]);
    }
    _engine._openOut = function(port, name) {
      var impl = _engine._outMap[name];
      if (!impl) {
        if (_engine._pool.length <= _engine._outArr.length) _engine._newPlugin();
        var plugin = _engine._pool[_engine._outArr.length];
        impl = {
          name: name,
          clients: [],
          info: {
            name: name,
            manufacturer: _engine._allOuts[name].manufacturer,
            version: _engine._allOuts[name].version,
            type: 'MIDI-out',
            sysex: _engine._sysex,
            engine: _engine._type
          },
          _start: function() { document.dispatchEvent(new CustomEvent('jazz-midi', { detail: ['openout', plugin.id, name] })); },
          _close: function(port) { _engine._closeOut(port); },
          _closeAll: _closeAll,
          _receive: function(a) { if (a.length) { var v = a.slice(); v.splice(0, 0, 'play', plugin.id); document.dispatchEvent(new CustomEvent('jazz-midi', {detail: v})); } }
        };
        impl.plugin = plugin;
        plugin.output = impl;
        _engine._outArr.push(impl);
        _engine._outMap[name] = impl;
      }
      port._orig._impl = impl;
      _push(impl.clients, port._orig);
      port._info = impl.info;
      port._receive = function(arg) { impl._receive(arg); };
      port._close = function() { impl._close(this); };
      if (!impl.open) {
        port._pause();
        if (impl.plugin.ready) impl._start();
      }
    };
    _engine._openIn = function(port, name) {
      var impl = _engine._inMap[name];
      if (!impl) {
        if (_engine._pool.length <= _engine._inArr.length) _engine._newPlugin();
        var plugin = _engine._pool[_engine._inArr.length];
        impl = {
          name: name,
          clients: [],
          info: {
            name: name,
            manufacturer: _engine._allIns[name].manufacturer,
            version: _engine._allIns[name].version,
            type: 'MIDI-in',
            sysex: _engine._sysex,
            engine: _engine._type
          },
          _start: function() { document.dispatchEvent(new CustomEvent('jazz-midi', { detail: ['openin', plugin.id, name] })); },
          _close: function(port) { _engine._closeIn(port); },
          _closeAll: _closeAll
        };
        impl.plugin = plugin;
        plugin.input = impl;
        _engine._inArr.push(impl);
        _engine._inMap[name] = impl;
      }
      port._orig._impl = impl;
      _push(impl.clients, port._orig);
      port._info = impl.info;
      port._close = function() { impl._close(this); };
      if (!impl.open) {
        port._pause();
        if (impl.plugin.ready) impl._start();
      }
    };
    _engine._closeOut = function(port) {
      var impl = port._impl;
      _pop(impl.clients, port._orig);
      if (!impl.clients.length && impl.open) {
        impl.open = false;
        document.dispatchEvent(new CustomEvent('jazz-midi', { detail: ['closeout', impl.plugin.id] }));
      }
    };
    _engine._closeIn = function(port) {
      var impl = port._impl;
      _pop(impl.clients, port._orig);
      if (!impl.clients.length && impl.open) {
        impl.open = false;
        document.dispatchEvent(new CustomEvent('jazz-midi', { detail: ['closein', impl.plugin.id] }));
      }
    };
    _engine._close = function() {
      _engine._unwatch();
    };
    var watcher;
    _engine._watch = function() {
      _engine._insW = _engine._ins;
      _engine._outsW = _engine._outs;
      watcher = setInterval(function() {
        document.dispatchEvent(new CustomEvent('jazz-midi', {detail:['refresh']}));
      }, 250);
    };
    _engine._unwatch = function() {
      clearInterval(watcher);
      watcher = undefined;
    };
    document.addEventListener('jazz-midi-msg', function() {
      var v = _engine._msg.innerText.split('\n');
      var impl, i, j;
      _engine._msg.innerText = '';
      for (i = 0; i < v.length; i++) {
        var a = [];
        try { a = JSON.parse(v[i]); } catch (err) {}
        if (!a.length) continue;
        if (a[0] === 'refresh') {
          if (a[1].ins) {
            for (j = 0; j < a[1].ins.length; j++) a[1].ins[j].type = _engine._type;
            _engine._ins = a[1].ins;
          }
          if (a[1].outs) {
            for (j = 0; j < a[1].outs.length; j++) a[1].outs[j].type = _engine._type;
            _engine._outs = a[1].outs;
          }
          _postRefresh();
          for (j = 0; j < _engine.refreshClients.length; j++) _engine.refreshClients[j]._resume();
          _engine.refreshClients = [];
        }
        else if (a[0] === 'version') {
          var plugin = _engine._pool[a[1]];
          if (plugin) {
            plugin.ready = true;
            if (plugin.input) plugin.input._start();
            if (plugin.output) plugin.output._start();
          }
        }
        else if (a[0] === 'openout') {
          impl = _engine._pool[a[1]].output;
          if (impl) {
            if (a[2] == impl.name) {
              impl.open = true;
              if (impl.clients) for (j = 0; j < impl.clients.length; j++) impl.clients[j]._resume();
            }
            else if (impl.clients) for (j = 0; j < impl.clients.length; j++) impl.clients[j]._crash();
          }
        }
        else if (a[0] === 'openin') {
          impl = _engine._pool[a[1]].input;
          if (impl) {
            if (a[2] == impl.name) {
              impl.open = true;
              if (impl.clients) for (j = 0; j < impl.clients.length; j++) impl.clients[j]._resume();
            }
            else if (impl.clients) for (j = 0; j < impl.clients.length; j++) impl.clients[j]._crash();
          }
        }
        else if (a[0] === 'midi') {
          impl = _engine._pool[a[1]].input;
          if (impl && impl.clients) {
            for (j = 0; j < impl.clients.length; j++) {
              var msg = MIDI(a.slice(3));
              impl.clients[j]._emit(msg);
            }
          }
        }
      }
    });
  }

  var JZZ = function(opt) {
    if (!_jzz) _initJZZ(opt);
    return _jzz._thenable();
  };
  JZZ.JZZ = JZZ;
  JZZ.info = function() { return _J.prototype.info(); };
  JZZ.Widget = function(arg) {
    var obj = new _M();
    if (arg instanceof Object) for (var k in arg) if (arg.hasOwnProperty(k)) obj[k] = arg[k];
    obj._resume();
    return obj;
  };
  _J.prototype.Widget = JZZ.Widget;

  // JZZ.SMPTE

  function SMPTE() {
    var self = this instanceof SMPTE ? this : self = new SMPTE();
    SMPTE.prototype.reset.apply(self, arguments);
    return self;
  }
  SMPTE.prototype.reset = function(arg) {
    if (arg instanceof SMPTE) {
      this.setType(arg.getType());
      this.setHour(arg.getHour());
      this.setMinute(arg.getMinute());
      this.setSecond(arg.getSecond());
      this.setFrame(arg.getFrame());
      this.setQuarter(arg.getQuarter());
      return this;
    }
    var arr = arg instanceof Array ? arg : arguments;
    this.setType(arr[0]);
    this.setHour(arr[1]);
    this.setMinute(arr[2]);
    this.setSecond(arr[3]);
    this.setFrame(arr[4]);
    this.setQuarter(arr[5]);
    return this;
  };
  function _fixDropFrame() { if (this.type == 29.97 && !this.second && this.frame < 2 && this.minute % 10) this.frame = 2; }
  SMPTE.prototype.isFullFrame = function() { return this.quarter == 0 || this.quarter == 4; };
  SMPTE.prototype.getType = function() { return this.type; };
  SMPTE.prototype.getHour = function() { return this.hour; };
  SMPTE.prototype.getMinute = function() { return this.minute; };
  SMPTE.prototype.getSecond = function() { return this.second; };
  SMPTE.prototype.getFrame = function() { return this.frame; };
  SMPTE.prototype.getQuarter = function() { return this.quarter; };
  SMPTE.prototype.setType = function(x) {
    if (typeof x == 'undefined' || x == 24) this.type = 24;
    else if (x == 25) this.type = 25;
    else if (x == 29.97) { this.type = 29.97; _fixDropFrame.apply(this); }
    else if (x == 30) this.type = 30;
    else throw RangeError('Bad SMPTE frame rate: ' + x);
    if (this.frame >= this.type) this.frame = this.type - 1; // could not be more than 29
    return this;
  };
  SMPTE.prototype.setHour = function(x) {
    if (typeof x == 'undefined') x = 0;
    if (x != parseInt(x) || x < 0 || x >= 24) throw RangeError('Bad SMPTE hours value: ' + x);
    this.hour = x;
    return this;
  };
  SMPTE.prototype.setMinute = function(x) {
    if (typeof x == 'undefined') x = 0;
    if (x != parseInt(x) || x < 0 || x >= 60) throw RangeError('Bad SMPTE minutes value: ' + x);
    this.minute = x;
    _fixDropFrame.apply(this);
    return this;
  };
  SMPTE.prototype.setSecond = function(x) {
    if (typeof x == 'undefined') x = 0;
    if (x != parseInt(x) || x < 0 || x >= 60) throw RangeError('Bad SMPTE seconds value: ' + x);
    this.second = x;
    _fixDropFrame.apply(this);
    return this;
  };
  SMPTE.prototype.setFrame = function(x) {
    if (typeof x == 'undefined') x = 0;
    if (x != parseInt(x) || x < 0 || x >= this.type) throw RangeError('Bad SMPTE frame number: ' + x);
    this.frame = x;
    _fixDropFrame.apply(this);
    return this;
  };
  SMPTE.prototype.setQuarter = function(x) {
    if (typeof x == 'undefined') x = 0;
    if (x != parseInt(x) || x < 0 || x >= 8) throw RangeError('Bad SMPTE quarter frame: ' + x);
    this.quarter = x;
    return this;
  };
  SMPTE.prototype.incrFrame = function() {
    this.frame++;
    if (this.frame >= this.type) {
      this.frame = 0;
      this.second++;
      if (this.second >= 60) {
        this.second = 0;
        this.minute++;
        if (this.minute >= 60) {
          this.minute = 0;
          this.hour = this.hour >= 23 ? 0 : this.hour + 1;
        }
      }
    }
    _fixDropFrame.apply(this);
    return this;
  };
  SMPTE.prototype.decrFrame = function() {
    if (!this.second && this.frame == 2 && this.type == 29.97 && this.minute % 10) this.frame = 0; // drop-frame
    this.frame--;
    if (this.frame < 0) {
      this.frame = this.type == 29.97 ? 29 : this.type - 1;
      this.second--;
      if (this.second < 0) {
        this.second = 59;
        this.minute--;
        if (this.minute < 0) {
          this.minute = 59;
          this.hour = this.hour ? this.hour - 1 : 23;
        }
      }
    }
    return this;
  };
  SMPTE.prototype.incrQF = function() {
    this.backwards = false;
    this.quarter = (this.quarter + 1) & 7;
    if (this.quarter == 0 || this.quarter == 4) this.incrFrame();
    return this;
  };
  SMPTE.prototype.decrQF = function() {
    this.backwards = true;
    this.quarter = (this.quarter + 7) & 7;
    if (this.quarter == 3 || this.quarter == 7) this.decrFrame();
    return this;
  };
  function _825(a) { return [[24, 25, 29.97, 30][(a[7] >> 1) & 3], ((a[7] & 1) << 4) | a[6], (a[5] << 4) | a[4], (a[3] << 4) | a[2], (a[1] << 4) | a[0]]; }
  SMPTE.prototype.read = function(m) {
    if (!(m instanceof MIDI)) m = MIDI.apply(null, arguments);
    if (m[0] == 0xf0 && m[1] == 0x7f && m[3] == 1 && m[4] == 1 && m[9] == 0xf7) {
      this.type = [24, 25, 29.97, 30][(m[5] >> 5) & 3];
      this.hour = m[5] & 31;
      this.minute = m[6];
      this.second = m[7];
      this.frame = m[8];
      this.quarter = 0;
      this._ = undefined;
      this._b = undefined;
      this._f = undefined;
      return true;
    }
    if (m[0] == 0xf1 && typeof m[1] != 'undefined') {
      var q = m[1] >> 4;
      var n = m[1] & 15;
      if (q == 0) {
        if (this._ == 7) {
          if (this._f == 7) {
            this.reset(_825(this._a));
            this.incrFrame();
          }
          this.incrFrame();
        }
      }
      else if (q == 3) {
        if (this._ == 4) {
          this.decrFrame();
        }
      }
      else if (q == 4) {
        if (this._ == 3) {
          this.incrFrame();
        }
      }
      else if (q == 7) {
        if (this._ === 0) {
          if (this._b === 0) {
            this.reset(_825(this._a));
            this.decrFrame();
          }
          this.decrFrame();
        }
      }
      if (!this._a) this._a = [];
      this._a[q] = n;
      this._f = this._f === q - 1 || q == 0 ? q : undefined;
      this._b = this._b === q + 1 || q == 7 ? q : undefined;
      this._ = q;
      this.quarter = q;
      return true;
    }
    return false;
  };
  function _mtc(t) {
    if (!t.backwards && t.quarter >= 4) t.decrFrame(); // continue encoding previous frame
    else if (t.backwards && t.quarter < 4) t.incrFrame();
    var ret;
    switch (t.quarter >> 1) {
      case 0: ret = t.frame; break;
      case 1: ret = t.second; break;
      case 2: ret = t.minute; break;
      default: ret = t.hour;
    }
    if (t.quarter & 1) ret >>= 4;
    else ret &= 15;
    if (t.quarter == 7) {
      if (t.type == 25) ret |= 2;
      else if (t.type == 29.97) ret |= 4;
      else if (t.type == 30) ret |= 6;
    }
    // restore original t
    if (!t.backwards && t.quarter >= 4) t.incrFrame();
    else if (t.backwards && t.quarter < 4) t.decrFrame();
    return ret | (t.quarter << 4);
  }
  function _hrtype(t) {
    if (t.type == 25) return t.hour | 0x20;
    if (t.type == 29.97) return t.hour | 0x40;
    if (t.type == 30) return t.hour | 0x60;
    return t.hour;
  }
  function _dec(x) { return x < 10 ? '0' + x : x; }
  function _smptetxt(x) {
    var arr = [];
    for (var i = 0; i < x.length; i++) arr[i] = _dec(x[i]);
    return arr.join(':');
  }
  SMPTE.prototype.toString = function() { return _smptetxt([this.hour, this.minute, this.second, this.frame]); };
  JZZ.SMPTE = SMPTE;

  // JZZ.MIDI

  function MIDI(arg) {
    var self = this instanceof MIDI ? this : self = new MIDI();
    var i;
    if (arg instanceof MIDI) {
      self._from = arg._from.slice();
      for (i in arg) if (arg.hasOwnProperty(i) && i != '_from') self[i] = arg[i];
      return self;
    }
    else self._from = [];
    if (typeof arg == 'undefined') return self;
    var arr = arg instanceof Array ? arg : arguments;
    for (i = 0; i < arr.length; i++) {
      n = arr[i];
      if (i == 1) {
        if (self[0] >= 0x80 && self[0] <= 0xAF) n = MIDI.noteValue(n);
        if (self[0] >= 0xC0 && self[0] <= 0xCF) n = MIDI.programValue(n);
      }
      if (n != parseInt(n) || n < 0 || n > 255) _throw(arr[i]);
      self.push(n);
    }
    return self;
  }
  MIDI.prototype = [];
  MIDI.prototype.constructor = MIDI;
  var _noteNum = {};
  MIDI.noteValue = function(x) { return typeof x == 'undefined' ? undefined : _noteNum[x.toString().toLowerCase()]; };
  MIDI.programValue = function(x) { return x; };
  MIDI.freq = function(n, a) {
    if (typeof a == 'undefined') a = 440.0;
    return (a * Math.pow(2, (_7b(MIDI.noteValue(n), n) - 69.0) / 12.0));
  };

  var _noteMap = { c:0, d:2, e:4, f:5, g:7, a:9, b:11, h:11 };
  for (k in _noteMap) {
    if (!_noteMap.hasOwnProperty(k)) continue;
    for (n = 0; n < 12; n++) {
      m = _noteMap[k] + n * 12;
      if (m > 127) break;
      _noteNum[k+n] = m;
      if (m > 0) { _noteNum[k + 'b' + n] = m - 1; _noteNum[k + 'bb' + n] = m - 2; }
      if (m < 127) { _noteNum[k + '#' + n] = m + 1; _noteNum[k + '##' + n] = m + 2; }
    }
  }
  for (n = 0; n < 128; n++) _noteNum[n] = n;
  function _throw(x) { throw RangeError('Bad MIDI value: ' + x); }
  function _ch(c) { _validateChannel(c); return parseInt(c); }
  function _7b(n, m) { if (n != parseInt(n) || n < 0 || n > 0x7f) _throw(typeof m == 'undefined' ? n : m); return parseInt(n); }
  function _8b(n, m) { if (n != parseInt(n) || n < 0 || n > 0xff) _throw(typeof m == 'undefined' ? n : m); return parseInt(n); }
  function _lsb(n) { if (n != parseInt(n) || n < 0 || n > 0x3fff) _throw(n); return parseInt(n) & 0x7f; }
  function _msb(n) { if (n != parseInt(n) || n < 0 || n > 0x3fff) _throw(n); return parseInt(n) >> 7; }
  function _8bs(s) { s = '' + s; for (var i = 0; i < s.length; i++) if (s.charCodeAt(i) > 255) _throw(s[i]); return s; }
  var _helperCH = {
    noteOff: function(c, n, v) { if (typeof v == 'undefined') v = 64; return [0x80 + _ch(c), _7b(MIDI.noteValue(n), n), _7b(v)]; },
    noteOn: function(c, n, v) { if (typeof v == 'undefined') v = 127; return [0x90 + _ch(c), _7b(MIDI.noteValue(n), n), _7b(v)]; },
    aftertouch: function(c, n, v) { return [0xA0 + _ch(c), _7b(MIDI.noteValue(n), n), _7b(v)]; },
    control: function(c, n, v) { return [0xB0 + _ch(c), _7b(n), _7b(v)]; },
    program: function(c, n) { return [0xC0 + _ch(c), _7b(MIDI.programValue(n), n)]; },
    pressure: function(c, n) { return [0xD0 + _ch(c), _7b(n)]; },
    pitchBend: function(c, n) { return [0xE0 + _ch(c), _lsb(n), _msb(n)]; },
    bankMSB: function(c, n) { return [0xB0 + _ch(c), 0x00, _7b(n)]; },
    bankLSB: function(c, n) { return [0xB0 + _ch(c), 0x20, _7b(n)]; },
    modMSB: function(c, n) { return [0xB0 + _ch(c), 0x01, _7b(n)]; },
    modLSB: function(c, n) { return [0xB0 + _ch(c), 0x21, _7b(n)]; },
    breathMSB: function(c, n) { return [0xB0 + _ch(c), 0x02, _7b(n)]; },
    breathLSB: function(c, n) { return [0xB0 + _ch(c), 0x22, _7b(n)]; },
    footMSB: function(c, n) { return [0xB0 + _ch(c), 0x04, _7b(n)]; },
    footLSB: function(c, n) { return [0xB0 + _ch(c), 0x24, _7b(n)]; },
    portamentoMSB: function(c, n) { return [0xB0 + _ch(c), 0x05, _7b(n)]; },
    portamentoLSB: function(c, n) { return [0xB0 + _ch(c), 0x25, _7b(n)]; },
    volumeMSB: function(c, n) { return [0xB0 + _ch(c), 0x07, _7b(n)]; },
    volumeLSB: function(c, n) { return [0xB0 + _ch(c), 0x27, _7b(n)]; },
    balanceMSB: function(c, n) { return [0xB0 + _ch(c), 0x08, _7b(n)]; },
    balanceLSB: function(c, n) { return [0xB0 + _ch(c), 0x28, _7b(n)]; },
    panMSB: function(c, n) { return [0xB0 + _ch(c), 0x0A, _7b(n)]; },
    panLSB: function(c, n) { return [0xB0 + _ch(c), 0x2A, _7b(n)]; },
    expressionMSB: function(c, n) { return [0xB0 + _ch(c), 0x0B, _7b(n)]; },
    expressionLSB: function(c, n) { return [0xB0 + _ch(c), 0x2B, _7b(n)]; },
    damper: function(c, b) { return [0xB0 + _ch(c), 0x40, b ? 127 : 0]; },
    portamento: function(c, b) { return [0xB0 + _ch(c), 0x41, b ? 127 : 0]; },
    sostenuto: function(c, b) { return [0xB0 + _ch(c), 0x42, b ? 127 : 0]; },
    soft: function(c, b) { return [0xB0 + _ch(c), 0x43, b ? 127 : 0]; },
    allSoundOff: function(c) { return [0xB0 + _ch(c), 0x78, 0]; },
    allNotesOff: function(c) { return [0xB0 + _ch(c), 0x7b, 0]; },
  };
  var _helperNC = { // no channel
    mtc: function(t) { return [0xF1, _mtc(t)]; },
    songPosition: function(n) { return [0xF2, _lsb(n), _msb(n)]; },
    songSelect: function(n) { return [0xF3, _7b(n)]; },
    tune: function() { return [0xF6]; },
    clock: function() { return [0xF8]; },
    start: function() { return [0xFA]; },
    continue: function() { return [0xFB]; },
    stop: function() { return [0xFC]; },
    active: function() { return [0xFE]; },
    sxIdRequest: function() { return [0xF0, 0x7E, 0x7F, 0x06, 0x01, 0xF7]; },
    sxFullFrame: function(t) { return [0xF0, 0x7F, 0x7F, 0x01, 0x01, _hrtype(t), t.getMinute(), t.getSecond(), t.getFrame(), 0xF7]; },
    reset: function() { return [0xFF]; },
  };
  function _smf(ff, dd) {
    var midi = new MIDI();
    midi.ff = _8b(ff);
    midi.dd = typeof dd == 'undefined' ? '' : _8bs(dd);
    return midi;
  }
  var _helperSMF = { // Standard MIDI File events
    smf: function(arg) {
      if (arg instanceof MIDI) return new MIDI(arg);
      var arr = arg instanceof Array ? arg : arguments;
      var ff = _8b(arr[0]);
      var dd = '';
      if (arr.length == 2) dd = _2s(arr[1]);
      else if (arr.length > 2) dd = _2s(Array.prototype.slice.call(arr, 1));
      return _smf(ff, dd);
    },
    smfSeqNumber: function(dd) {
      if (dd == parseInt(dd)) {
        if (dd < 0 || dd > 0xffff) throw RangeError('Sequence number out of range: ' + dd);
        dd = String.fromCharCode(dd >> 8) + String.fromCharCode(dd & 0xff);
      }
      else {
        dd = '' + dd;
        if (dd.length == 0) dd = '\x00\x00';
        else if (dd.length == 1) dd = '\x00' + dd;
        else if (dd.length > 2) throw RangeError('Sequence number out of range: ' + _smftxt(dd));
      }
      return _smf(0, dd);
    },
    smfText: function(dd) { return _smf(1, JZZ.lib.toUTF8(dd)); },
    smfCopyright: function(dd) { return _smf(2, JZZ.lib.toUTF8(dd)); },
    smfSeqName: function(dd) { return _smf(3, JZZ.lib.toUTF8(dd)); },
    smfInstrName: function(dd) { return _smf(4, JZZ.lib.toUTF8(dd)); },
    smfLyric: function(dd) { return _smf(5, JZZ.lib.toUTF8(dd)); },
    smfMarker: function(dd) { return _smf(6, JZZ.lib.toUTF8(dd)); },
    smfCuePoint: function(dd) { return _smf(7, JZZ.lib.toUTF8(dd)); },
    smfProgName: function(dd) { return _smf(8, JZZ.lib.toUTF8(dd)); },
    smfDevName: function(dd) { return _smf(9, JZZ.lib.toUTF8(dd)); },
    smfChannelPrefix: function(dd) {
      if (dd == parseInt(dd)) {
        _validateChannel(dd);
        dd = String.fromCharCode(dd);
      }
      else {
        dd = '' + dd;
        if (dd.length == 0) dd = '\x00';
        else if (dd.length > 1 || dd.charCodeAt(0) > 15) throw RangeError('Channel number out of range: ' + _smftxt(dd));
      }
      return _smf(32, dd);
    },
    smfMidiPort: function(dd) {
      if (dd == parseInt(dd)) {
        if (dd < 0 || dd > 127) throw RangeError('Port number out of range: ' + dd);
        dd = String.fromCharCode(dd);
      }
      else {
        dd = '' + dd;
        if (dd.length == 0) dd = '\x00';
        else if (dd.length > 1 || dd.charCodeAt(0) > 127) throw RangeError('Port number out of range: ' + _smftxt(dd));
      }
      return _smf(33, dd);
    },
    smfEndOfTrack: function(dd) {
      if (_2s(dd) != '') throw RangeError('Unexpected data: ' + _smftxt(_2s(dd)));
      return _smf(47);
    },
    smfTempo: function(dd) { // microseconds per quarter note
      if (('' + dd).length == 3) return _smf(81, dd);
      if (dd == parseInt(dd) && dd > 0 && dd <= 0xffffff) {
        return _smf(81, String.fromCharCode(dd >> 16) + String.fromCharCode((dd >> 8) & 0xff) + String.fromCharCode(dd & 0xff));
      }
      throw RangeError('Out of range: ' + _smftxt(_2s(dd)));
    },
    smfBPM: function(bpm) { return _helperSMF.smfTempo(Math.round(60000000.0 / bpm)); },
    smfSMPTE: function(dd) {
      if (dd instanceof SMPTE) return _smf(84, String.fromCharCode(dd.hour) + String.fromCharCode(dd.minute) + String.fromCharCode(dd.second) + String.fromCharCode(dd.frame) + String.fromCharCode((dd.quarter % 4) * 25));
      var s = '' + dd;
      if (s.length == 5) {
        return _smf(84, dd);
      }
      var arr = dd instanceof Array ? dd : Array.prototype.slice.call(arguments);
      arr.splice(0, 0, 30);
      return _helperSMF.smfSMPTE(new SMPTE(arr));
    },
    smfTimeSignature: function(a, b, c, d) {
      var nn, dd, cc, bb;
      var m = ('' + a ).match(/^\s*(\d+)\s*\/\s*(\d+)\s*$/);
      if (m) {
        nn = parseInt(m[1]);
        dd = parseInt(m[2]);
        if (nn > 0 && nn <= 0xff && dd && !(dd & (dd - 1))) {
          cc = dd; dd = 0;
          for (cc >>= 1; cc; cc >>= 1) dd++;
          cc = b == parseInt(b) ? b : 24;
          bb = c == parseInt(c) ? c : 8;
          return _smf(88, String.fromCharCode(nn) + String.fromCharCode(dd) + String.fromCharCode(cc) + String.fromCharCode(bb));
        }
        else if (('' + a ).length == 4) return _smf(88, a);
      }
      else if (a == parseInt(a) && b == parseInt(b) && b && !(b & (b - 1))) {
        nn = a;
        dd = 0;
        cc = b;
        for (cc >>= 1; cc; cc >>= 1) dd++;
        cc = c == parseInt(c) ? c : 24;
        bb = d == parseInt(d) ? d : 8;
        return _smf(88, String.fromCharCode(nn) + String.fromCharCode(dd) + String.fromCharCode(cc) + String.fromCharCode(bb));
      }
      else if (('' + a ).length == 4) return _smf(88, a);
      throw RangeError('Wrong time signature: ' + _smftxt(_2s(a)));
    },
    smfKeySignature: function(dd) {
      dd = '' + dd;
      var m = dd.match(/^\s*([A-H][b#]?)\s*(|maj|major|dur|m|min|minor|moll)\s*$/i);
      if (m) {
        var sf = {
          CB: 0, GB: 1, DB: 2, AB: 3, EB: 4, BB: 5, F: 6, C: 7, G: 8, D: 9, A: 10,
          E:11, B: 12, H: 12, 'F#': 13, 'C#': 14, 'G#': 15, 'D#': 16, 'A#': 17
        }[m[1].toUpperCase()];
        var mi = { '': 0, MAJ: 0, MAJOR: 0, DUR: 0, M: 1, MIN: 1, MINOR: 1, MOLL: 1}[m[2].toUpperCase()];
        if (typeof sf != 'undefined' && typeof mi != 'undefined') {
          if (mi) sf -= 3;
          sf -= 7;
          if (sf >= -7 && sf < 0) dd = String.fromCharCode(256 + sf) + String.fromCharCode(mi);
          else if (sf >= 0 && sf <= 7) dd = String.fromCharCode(sf) + String.fromCharCode(mi);
        }
      }
      if (dd.length == 2 && dd.charCodeAt(1) <= 1 && (dd.charCodeAt(0) <= 7 || dd.charCodeAt(0) <= 255 && dd.charCodeAt(0) >= 249)) return _smf(89, dd);
      throw RangeError('Incorrect key signature: ' + _smftxt(dd));
    },
    smfSequencer: function(dd) { return _smf(127, _2s(dd)); }
  };

  function _copyPortHelper(M, name, func) {
    M.prototype[name] = function() { this.send(func.apply(0, arguments)); return this; };
  }
  function _copyChannelHelper(C, name, func) {
    C.prototype[name] = function() {
      this.send(func.apply(0, [this._chan].concat(Array.prototype.slice.call(arguments)))); return this;
    };
  }
  function _copyHelperNC(name, func) {
    MIDI[name] = function() { return new MIDI(func.apply(0, arguments)); };
  }
  function _copyHelperSMF(name, func) {
    MIDI[name] = function() { return func.apply(0, arguments); };
  }
  function _copyHelperCH(name, func) {
    _copyHelperNC(name, func);
    _E.prototype[name] = function() {
      var chan;
      var args = Array.prototype.slice.call(arguments);
      if (args.length < func.length) args = [this._master].concat(args);
      else {
        chan = _7b(MIDI.noteValue(args[0], args[0]));
        args[0] = this._master;
      }
      var msg = func.apply(0, args);
      msg.mpe = chan;
      this.send(msg);
      return this;
    };
  }
  for (k in _helperNC) if (_helperNC.hasOwnProperty(k)) _copyHelperNC(k, _helperNC[k]);
  for (k in _helperSMF) if (_helperSMF.hasOwnProperty(k)) _copyHelperSMF(k, _helperSMF[k]);
  for (k in _helperCH) if (_helperCH.hasOwnProperty(k)) _copyHelperCH(k, _helperCH[k]);
  function _copyMidiHelpers(M, C) {
    for (k in _helperNC) if (_helperNC.hasOwnProperty(k)) _copyPortHelper(M, k, _helperNC[k]);
    for (k in _helperSMF) if (_helperSMF.hasOwnProperty(k)) _copyPortHelper(M, k, _helperSMF[k]);
    for (k in _helperCH) if (_helperCH.hasOwnProperty(k)) _copyPortHelper(M, k, _helperCH[k]);
    if (C) for (k in _helperCH) if (_helperCH.hasOwnProperty(k)) _copyChannelHelper(C, k, _helperCH[k]);
  }
  _copyMidiHelpers(_M, _C);

  _E.prototype.noteOn = function(n, v) {
    var msg = MIDI.noteOn(this._master, n, v);
    msg._mpe = msg[1];
    this.send(msg);
    return this;
  };
  _E.prototype.noteOff = function(n, v) {
    var msg = MIDI.noteOff(this._master, n, v);
    msg._mpe = msg[1];
    this.send(msg);
    return this;
  };
  _E.prototype.aftertouch = function(n, v) {
    var msg = MIDI.aftertouch(this._master, n, v);
    msg._mpe = msg[1];
    this.send(msg);
    return this;
  };

  var _channelMap = { a:10, b:11, c:12, d:13, e:14, f:15, A:10, B:11, C:12, D:13, E:14, F:15 };
  for (k = 0; k < 16; k++) _channelMap[k] = k;
  MIDI.prototype.getChannel = function() {
    if (this.ff == 0x20 && this.dd.length == 1 && this.dd.charCodeAt(0) < 16) return this.dd.charCodeAt(0);
    var c = this[0];
    if (typeof c == 'undefined' || c < 0x80 || c > 0xef) return;
    return c & 15;
  };
  MIDI.prototype.setChannel = function(x) {
    x = _channelMap[x];
    if (typeof x == 'undefined') return this;
    if (this.ff == 0x20) this.dd = String.fromCharCode(x);
    else {
      var c = this[0];
      if (typeof c != 'undefined' && c >= 0x80 && c <= 0xef) this[0] = (c & 0xf0) | x;
    }
    return this;
  };
  MIDI.prototype.getNote = function() {
    var c = this[0];
    if (typeof c == 'undefined' || c < 0x80 || c > 0xaf) return;
    return this[1];
  };
  MIDI.prototype.setNote = function(x) {
    var c = this[0];
    if (typeof c == 'undefined' || c < 0x80 || c > 0xaf) return this;
    x = MIDI.noteValue(x);
    if (typeof x != 'undefined') this[1] = x;
    return this;
  };
  MIDI.prototype.getVelocity = function() {
    var c = this[0];
    if (typeof c == 'undefined' || c < 0x80 || c > 0x9f) return;
    return this[2];
  };
  MIDI.prototype.setVelocity = function(x) {
    var c = this[0];
    if (typeof c == 'undefined' || c < 0x80 || c > 0x9f) return this;
    x = parseInt(x);
    if (x >= 0 && x < 128) this[2] = x;
    return this;
  };
  MIDI.prototype.getSysExChannel = function() {
    if (this[0] == 0xf0) return this[2];
  };
  MIDI.prototype.setSysExChannel = function(x) {
    if (this[0] == 0xf0 && this.length > 2) {
      x = parseInt(x);
      if (x >= 0 && x < 128) this[2] = x;
    }
    return this;
  };
  MIDI.prototype.getData = function() {
    if (typeof this.dd != 'undefined') return this.dd.toString();
  };
  MIDI.prototype.setData = function(dd) {
    this.dd = _2s(dd);
    return this;
  };
  MIDI.prototype.getText = function() {
    if (typeof this.dd != 'undefined') return JZZ.lib.fromUTF8(this.dd);
  };
  MIDI.prototype.setText = function(dd) {
    this.dd = JZZ.lib.toUTF8(dd);
    return this;
  };
  MIDI.prototype.getTempo = function() {
    if (this.ff == 0x51 && typeof this.dd != 'undefined') {
      return this.dd.charCodeAt(0) * 65536 + this.dd.charCodeAt(1) * 256 + this.dd.charCodeAt(2);
    }
  };
  MIDI.prototype.getBPM = function() {
    var ms = this.getTempo();
    if (ms) return 60000000 / ms;
  };
  MIDI.prototype.getTimeSignature = function() {
    if (this.ff == 0x58 && typeof this.dd != 'undefined') {
       return [this.dd.charCodeAt(0), 1 << this.dd.charCodeAt(1)];
    }
  };
  MIDI.prototype.getKeySignature = function() {
    if (this.ff == 0x59 && typeof this.dd != 'undefined') {
      var sf = this.dd.charCodeAt(0);
      var mi = this.dd.charCodeAt(1);
      if (sf & 0x80) sf = sf - 0x100;
      if (sf >= -7 && sf <= 7 && mi >= 0 && mi <= 1) {
        return [sf,
          ['Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#'][mi ? sf + 10 : sf + 7],
          !!mi
        ];
      }
    }
  };

  MIDI.prototype.isNoteOn = function() {
    var c = this[0];
    if (typeof c == 'undefined' || c < 0x90 || c > 0x9f) return false;
    return this[2] > 0 ? true : false;
  };
  MIDI.prototype.isNoteOff = function() {
    var c = this[0];
    if (typeof c == 'undefined' || c < 0x80 || c > 0x9f) return false;
    if (c < 0x90) return true;
    return this[2] == 0 ? true : false;
  };
  MIDI.prototype.isSysEx = function() {
    return this[0] == 0xf0;
  };
  MIDI.prototype.isFullSysEx = function() {
    return this[0] == 0xf0 && this[this.length - 1] == 0xf7;
  };
  MIDI.prototype.isSMF = function() {
    return this.ff >= 0 && this.ff <= 0x7f;
  };
  MIDI.prototype.isEOT = function() {
    return this.ff == 0x2f;
  };
  MIDI.prototype.isTempo = function() {
    return this.ff == 0x51;
  };
  MIDI.prototype.isTimeSignature = function() {
    return this.ff == 0x58;
  };
  MIDI.prototype.isKeySignature = function() {
    return this.ff == 0x59;
  };

  function _s2a(x) {
    var a = [];
    for (var i = 0; i < x.length; i++) {
      a[i] = x.charCodeAt(i);
    }
    return a;
  }
  function _a2s(x) {
    var a = '';
    for (var i = 0; i < x.length; i++) {
      a += String.fromCharCode(x[i]);
    }
    return a;
  }
  function _2s(x) {
    return x instanceof Array ? _a2s(x) : typeof x == 'undefined' ? '' : '' + x;
  }
  function _s2n(x) {
    var n = 0;
    for (var i = 0; i < x.length; i++) n = (n << 8) + x.charCodeAt(i);
    return n;
  }

  function __hex(x) { return (x < 16 ? '0' : '') + x.toString(16); }
  function _hex(x) {
    var a = [];
    for (var i = 0; i < x.length; i++) {
      a[i] = __hex(x[i]);
    }
    return a.join(' ');
  }
  function _toLine(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      if (s[i] == '\n') out += '\\n';
      else if (s[i] == '\r') out += '\\r';
      else if (s[i] == '\t') out += '\\t';
      else if (s.charCodeAt(i) < 32) out += '\\x' + __hex(s.charCodeAt(i));
      else out += s[i];
    }
    return out;
  }
  function _smfhex(dd) {
    return dd.length ? ': ' + _hex(_s2a(dd)) : '';
  }
  function _smftxt(dd) {
    return dd.length ? ': ' + _toLine(JZZ.lib.fromUTF8(dd)) : '';
  }
  MIDI.prototype.toString = function() {
    var s;
    var ss;
    if (!this.length) {
      if (typeof this.ff != 'undefined') {
        s = 'ff' + __hex(this.ff) + ' -- ';
        if (this.ff == 0) s += 'Sequence Number: ' + _s2n(this.dd);
        else if (this.ff > 0 && this.ff < 10) s += ['', 'Text', 'Copyright', 'Sequence Name', 'Instrument Name', 'Lyric', 'Marker', 'Cue Point', 'Program Name', 'Device Name'][this.ff] + _smftxt(this.dd);
        else if (this.ff == 32) s += 'Channel Prefix' + _smfhex(this.dd);
        else if (this.ff == 33) s += 'MIDI Port' + _smfhex(this.dd);
        else if (this.ff == 47) s += 'End of Track' + _smfhex(this.dd);
        else if (this.ff == 81) {
          var bpm = Math.round(this.getBPM() * 100) / 100;
          s += 'Tempo: ' + bpm + ' bpm';
        }
        else if (this.ff == 84) s += 'SMPTE Offset: ' + _smptetxt(_s2a(this.dd));
        else if (this.ff == 88) {
          var d = 1 << this.dd.charCodeAt(1);
          s += 'Time Signature: ' + this.dd.charCodeAt(0) + '/' + d;
          s += ' ' + this.dd.charCodeAt(2) + ' ' + this.dd.charCodeAt(3);
        }
        else if (this.ff == 89) {
          s += 'Key Signature: ';
          var ks = this.getKeySignature();
          if (ks) {
            s += ks[1];
            if (ks[2]) s += ' min';
          }
          else s+= 'invalid';
        }
        else if (this.ff == 127) s += 'Sequencer Specific' + _smfhex(this.dd);
        else s += 'SMF' + _smfhex(this.dd);
        return s;
      }
      return 'empty';
    }
    s = _hex(this);
    if (this[0] < 0x80) return s;
    ss = {
      241: 'MIDI Time Code',
      242: 'Song Position',
      243: 'Song Select',
      244: 'Undefined',
      245: 'Undefined',
      246: 'Tune request',
      248: 'Timing clock',
      249: 'Undefined',
      250: 'Start',
      251: 'Continue',
      252: 'Stop',
      253: 'Undefined',
      254: 'Active Sensing',
      255: 'Reset'
    }[this[0]];
    if (ss) return s + ' -- ' + ss;
    var c = this[0] >> 4;
    ss = {8: 'Note Off', 10: 'Aftertouch', 12: 'Program Change', 13: 'Channel Aftertouch', 14: 'Pitch Wheel'}[c];
    if (ss) return s + ' -- ' + ss;
    if (c == 9) return s + ' -- ' + (this[2] ? 'Note On' : 'Note Off');
    if (c != 11) return s;
    ss = {
      0: 'Bank Select MSB',
      1: 'Modulation Wheel MSB',
      2: 'Breath Controller MSB',
      4: 'Foot Controller MSB',
      5: 'Portamento Time MSB',
      6: 'Data Entry MSB',
      7: 'Channel Volume MSB',
      8: 'Balance MSB',
      10: 'Pan MSB',
      11: 'Expression Controller MSB',
      12: 'Effect Control 1 MSB',
      13: 'Effect Control 2 MSB',
      16: 'General Purpose Controller 1 MSB',
      17: 'General Purpose Controller 2 MSB',
      18: 'General Purpose Controller 3 MSB',
      19: 'General Purpose Controller 4 MSB',
      32: 'Bank Select LSB',
      33: 'Modulation Wheel LSB',
      34: 'Breath Controller LSB',
      36: 'Foot Controller LSB',
      37: 'Portamento Time LSB',
      38: 'Data Entry LSB',
      39: 'Channel Volume LSB',
      40: 'Balance LSB',
      42: 'Pan LSB',
      43: 'Expression Controller LSB',
      44: 'Effect control 1 LSB',
      45: 'Effect control 2 LSB',
      48: 'General Purpose Controller 1 LSB',
      49: 'General Purpose Controller 2 LSB',
      50: 'General Purpose Controller 3 LSB',
      51: 'General Purpose Controller 4 LSB',
      64: 'Damper Pedal On/Off',
      65: 'Portamento On/Off',
      66: 'Sostenuto On/Off',
      67: 'Soft Pedal On/Off',
      68: 'Legato Footswitch',
      69: 'Hold 2',
      70: 'Sound Controller 1',
      71: 'Sound Controller 2',
      72: 'Sound Controller 3',
      73: 'Sound Controller 4',
      74: 'Sound Controller 5',
      75: 'Sound Controller 6',
      76: 'Sound Controller 7',
      77: 'Sound Controller 8',
      78: 'Sound Controller 9',
      79: 'Sound Controller 10',
      80: 'General Purpose Controller 5',
      81: 'General Purpose Controller 6',
      82: 'General Purpose Controller 7',
      83: 'General Purpose Controller 8',
      84: 'Portamento Control',
      88: 'High Resolution Velocity Prefix',
      91: 'Effects 1 Depth',
      92: 'Effects 2 Depth',
      93: 'Effects 3 Depth',
      94: 'Effects 4 Depth',
      95: 'Effects 5 Depth',
      96: 'Data Increment',
      97: 'Data Decrement',
      98: 'Non-Registered Parameter Number LSB',
      99: 'Non-Registered Parameter Number MSB',
      100: 'Registered Parameter Number LSB',
      101: 'Registered Parameter Number MSB',
      120: 'All Sound Off',
      121: 'Reset All Controllers',
      122: 'Local Control On/Off',
      123: 'All Notes Off',
      124: 'Omni Mode Off',
      125: 'Omni Mode On',
      126: 'Mono Mode On',
      127: 'Poly Mode On'
    }[this[1]];
    if (!ss) ss = 'Undefined';
    return s + ' -- ' + ss;
  };
  MIDI.prototype._stamp = function(obj) { this._from.push(obj._orig ? obj._orig : obj); return this; };
  MIDI.prototype._unstamp = function(obj) {
    if (typeof obj == 'undefined') this._from = [];
    else {
      if (obj._orig) obj = obj._orig;
      var i = this._from.indexOf(obj);
      if (i > -1) this._from.splice(i, 1);
    }
    return this;
  };
  MIDI.prototype._stamped = function(obj) {
    if (obj._orig) obj = obj._orig;
    for (var i = 0; i < this._from.length; i++) if (this._from[i] == obj) return true;
    return false;
  };

  JZZ.MIDI = MIDI;

  function MPE() {
    var self = this instanceof MPE ? this : self = new MPE();
    self.reset();
    if (arguments.length) MPE.prototype.setup.apply(self, arguments);
    return self;
  }
  MPE.validate = function(arg) {
    var a = arg instanceof Array ? arg : arguments;
    if (a[0] != parseInt(a[0]) || a[0] < 0 || a[0] > 14) throw RangeError('Bad master channel value: ' + a[0]);
    if (a[1] != parseInt(a[1]) || a[1] < 0 || a[0] + a[1] > 15) throw RangeError('Bad zone size value: ' + a[1]);
  };
  MPE.prototype.reset = function() { for (var n = 0; n < 16; n++) this[n] = { band: 0, master: n }; };
  MPE.prototype.setup = function(m, n) {
    MPE.validate(m, n);
    var k;
    var last = m + n;
    if (this[m].master == m && this[m].band == n) return;
    if (!n && !this[m].band) return;
    if (this[m].band) {
      k = m + this[m].band;
      if (last < k) last = k;
    }
    else if (this[m].master == m - 1) {
      k = m - 1;
      k = k + this[k].band;
      if (last < k) last = k;
      this[m - 1] = { band: 0, master: m - 1 };
    }
    else if (this[m].master != m) {
      k = this[m].master;
      k = k + this[k].band;
      if (last < k) last = k;
      this[this[m].master].band = m - this[m].master - 1;
    }
    this[m].master = m;
    this[m].band = n;
    for (k = m + 1; k <= m + n; k++) {
      if (this[k].band && last < k + this[k].band) last = k + this[k].band;
      this[k] = { band: 0, master: m };
    }
    for (; k <= last; k++) this[k] = { band: 0, master: k };
  };
  MPE.prototype.filter = function(msg) {
    var c = msg.getChannel();
    if (!this[c] || !this[this[c].master].band) return msg;
    var m = this[c].master;
    var n = this[m].band;
    var i, j, k;
    if (typeof msg._mpe != 'undefined') {
      k = 256;
      for (i = m + 1; i <= m + n; i++) {
        if (!this[i].notes) {
          if (k > 0) { c = i; k = 0; }
        }
        else {
          if (k > this[i].notes.length) { c = i; k = this[i].notes.length; }
          for (j = 0; j < this[i].notes.length; j++) {
            if (this[i].notes[j] == msg._mpe) { c = i; k = -1; break; }
          }
        }
      }
      msg.setChannel(c);
      msg._mpe = undefined;
    }
    if (c == m) return msg; // bad mpe
    if (msg.isNoteOn()) {
      if (!this[c].notes) this[c].notes = [];
      _push(this[c].notes, msg.getNote());
    }
    else if (msg.isNoteOff()) {
      if (this[c].notes) _pop(this[c].notes, msg.getNote());
    }
    return msg;
  };
  JZZ.MPE = MPE;

  JZZ.lib = {};
  JZZ.lib.now = _now;
  JZZ.lib.schedule = _schedule;
  JZZ.lib.openMidiOut = function(name, engine) {
    var port = new _M();
    engine._openOut(port);
    port._info = engine._info(name);
    return port;
  };
  JZZ.lib.openMidiIn = function(name, engine) {
    var port = new _M();
    engine._openIn(port);
    port._info = engine._info(name);
    return port;
  };
  JZZ.lib.registerMidiOut = function(name, engine) {
    var x = engine._info(name);
    for (var i = 0; i < _virtual._outs.length; i++) if (_virtual._outs[i].name == x.name) return false;
    x.engine = engine;
    _virtual._outs.push(x);
    if (_jzz) {
      _postRefresh();
      if (_jzz._bad) { _jzz._repair(); _jzz._resume(); }
    }
    return true;
  };
  JZZ.lib.registerMidiIn = function(name, engine) {
    var x = engine._info(name);
    for (var i = 0; i < _virtual._ins.length; i++) if (_virtual._ins[i].name == x.name) return false;
    x.engine = engine;
    _virtual._ins.push(x);
    if (_jzz) {
      _postRefresh();
      if (_jzz._bad) { _jzz._repair(); _jzz._resume(); }
    }
    return true;
  };
  var _ac;
  function _initAudioContext() {
    if (!_ac && typeof window !== 'undefined') {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        _ac = new AudioContext();
        if (_ac && !_ac.createGain) _ac.createGain = _ac.createGainNode;
        var _activateAudioContext = function() {
          if (_ac.state != 'running') {
            _ac.resume();
            var osc = _ac.createOscillator();
            var gain = _ac.createGain();
            try { gain.gain.value = 0; } catch (err) {}
            gain.gain.setTargetAtTime(0, _ac.currentTime, 0.01);
            osc.connect(gain);
            gain.connect(_ac.destination);
            if (!osc.start) osc.start = osc.noteOn;
            if (!osc.stop) osc.stop = osc.noteOff;
            osc.start(0.1); osc.stop(0.11);
          }
          else {
            document.removeEventListener('touchstart', _activateAudioContext);
            document.removeEventListener('touchend', _activateAudioContext);
            document.removeEventListener('mousedown', _activateAudioContext);
            document.removeEventListener('keydown', _activateAudioContext);
          }
        };
        document.addEventListener('touchstart', _activateAudioContext);
        document.addEventListener('touchend', _activateAudioContext);
        document.addEventListener('mousedown', _activateAudioContext);
        document.addEventListener('keydown', _activateAudioContext);
        _activateAudioContext();
      }
    }
  }
  JZZ.lib.copyMidiHelpers = _copyMidiHelpers;
  JZZ.lib.getAudioContext = function() { _initAudioContext(); return _ac; };
  var _b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  JZZ.lib.fromBase64 = function(input) {
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9+/=]/g, '');
    while (i < input.length) {
      enc1 = _b64.indexOf(input.charAt(i++));
      enc2 = _b64.indexOf(input.charAt(i++));
      enc3 = _b64.indexOf(input.charAt(i++));
      enc4 = _b64.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    return output;
  };
  JZZ.lib.toBase64 = function(data) {
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = '', arr = [];
    if (!data) return data;
    do {
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);
      bits = o1 << 16 | o2 << 8 | o3;
      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;
      arr[ac++] = _b64.charAt(h1) + _b64.charAt(h2) + _b64.charAt(h3) + _b64.charAt(h4);
    } while(i < data.length);
    enc = arr.join('');
    var r = data.length % 3;
    return (r ? enc.slice(0, r - 3) + '==='.slice(r) : enc);
  };
  JZZ.lib.fromUTF8 = function(data) {
    data = typeof data == 'undefined' ? '' : '' + data;
    var out = '';
    var i, n, m;
    for (i = 0; i < data.length; i++) {
      n = data.charCodeAt(i);
      if (n > 0xff) return data;
      if (n < 0x80) out += data[i];
      else if ((n & 0xe0) == 0xc0) {
        n = (n & 0x1f) << 6;
        i++; if (i >= data.length) return data;
        m = data.charCodeAt(i);
        if ((m & 0xc0) != 0x80) return data;
        n += (m & 0x3f);
        out += String.fromCharCode(n);
      }
      else if ((n & 0xf0) == 0xe0) {
        n = (n & 0x0f) << 12;
        i++; if (i >= data.length) return data;
        m = data.charCodeAt(i);
        if ((m & 0xc0) != 0x80) return data;
        n += (m & 0x3f) << 6;
        i++; if (i >= data.length) return data;
        m = data.charCodeAt(i);
        if ((m & 0xc0) != 0x80) return data;
        n += (m & 0x3f);
        out += String.fromCharCode(n);
      }
      else if ((n & 0xf8) == 0xf0) {
        n = (n & 0x07) << 18;
        i++; if (i >= data.length) return data;
        m = data.charCodeAt(i);
        if ((m & 0xc0) != 0x80) return data;
        n += (m & 0x3f) << 12;
        i++; if (i >= data.length) return data;
        m = data.charCodeAt(i);
        if ((m & 0xc0) != 0x80) return data;
        n += (m & 0x3f) << 6;
        i++; if (i >= data.length) return data;
        m = data.charCodeAt(i);
        if ((m & 0xc0) != 0x80) return data;
        n += (m & 0x3f);
        if (n > 0x10ffff) return data;
        n -= 0x10000;
        out += String.fromCharCode(0xd800 + (n >> 10));
        out += String.fromCharCode(0xdc00 + (n & 0x3ff));
      }
    }
    return out;
  };
  JZZ.lib.toUTF8 = function(data) {
    data = typeof data == 'undefined' ? '' : '' + data;
    var out = '';
    var i, n;
    for (i = 0; i < data.length; i++) {
      n = data.charCodeAt(i);
      if (n < 0x80) out += data[i];
      else if (n < 0x800) {
        out += String.fromCharCode(0xc0 + (n >> 6));
        out += String.fromCharCode(0x80 + (n & 0x3f));
      }
      else if (n < 0x10000) {
        out += String.fromCharCode(0xe0 + (n >> 12));
        out += String.fromCharCode(0x80 + ((n >> 6) & 0x3f));
        out += String.fromCharCode(0x80 + (n & 0x3f));
      }
      else {
        out += String.fromCharCode(0xf0 + (n >> 18));
        out += String.fromCharCode(0x80 + ((n >> 12) & 0x3f));
        out += String.fromCharCode(0x80 + ((n >> 6) & 0x3f));
        out += String.fromCharCode(0x80 + (n & 0x3f));
      }
    }
    return out;
  };

  // Web MIDI API
  var _wma = [];
  var _outputMap = {};
  var _inputMap = {};

  var Promise = _scope.Promise;
  if (typeof Promise !== 'function') {
    Promise = function(executor) {
      this.executor = executor;
    };
    Promise.prototype.then = function(resolve, reject) {
      if (typeof resolve !== 'function') {
        resolve = function() {};
      }
      if (typeof reject !== 'function') {
        reject = function() {};
      }
      this.executor(resolve, reject);
    };
  }
  function DOMException(name, message, code) {
    this.name = name;
    this.message = message;
    this.code = code;
  }

  function MIDIConnectionEvent(port, target) {
    this.bubbles = false;
    this.cancelBubble = false;
    this.cancelable = false;
    this.currentTarget = target;
    this.defaultPrevented = false;
    this.eventPhase = 0;
    this.path = [];
    this.port = port;
    this.returnValue = true;
    this.srcElement = target;
    this.target = target;
    this.timeStamp = _now();
    this.type = 'statechange';
  }

  function MIDIMessageEvent(port, data) {
    this.bubbles = false;
    this.cancelBubble = false;
    this.cancelable = false;
    this.currentTarget = port;
    this.data = data;
    this.defaultPrevented = false;
    this.eventPhase = 0;
    this.path = [];
    this.receivedTime = _now();
    this.returnValue = true;
    this.srcElement = port;
    this.target = port;
    this.timeStamp = this.receivedTime;
    this.type = 'midimessage';
  }

  function _statechange(p, a) {
    if (p.onstatechange) p.onstatechange(new MIDIConnectionEvent(p, p));
    if (a.onstatechange) a.onstatechange(new MIDIConnectionEvent(p, a));
  }

  function MIDIInput(a, p) {
    var self = this;
    var _open = false;
    var _ochng = null;
    var _onmsg = null;
    this.type = 'input';
    this.id = p.id;
    this.name = p.name;
    this.manufacturer = p.man;
    this.version = p.ver;
    Object.defineProperty(this, 'state', { get: function() { return p.connected ? 'connected' : 'disconnected'; }, enumerable: true });
    Object.defineProperty(this, 'connection', { get: function() {
      return _open ? p.proxy ? 'open' : 'pending' : 'closed';
    }, enumerable: true });
    Object.defineProperty(this, 'onmidimessage', {
      get: function() { return _onmsg; },
      set: function(value) {
        if (value instanceof Function) {
          _onmsg = value;
          if (!_open) self.open();
        }
        else _onmsg = null;
      },
      enumerable: true
    });
    Object.defineProperty(this, 'onstatechange', {
      get: function() { return _ochng; },
      set: function(value) {
        if (value instanceof Function) _ochng = value;
        else _ochng = null;
      },
      enumerable: true
    });
    this.open = function() {
      return new Promise(function(resolve, reject) {
        if (_open) resolve(self);
        else {
          p.open().then(function() {
            if (!_open) {
              _open = true;
              _statechange(self, a);
            }
            resolve(self);
          }, function() {
            reject(new DOMException('InvalidAccessError', 'Port is not available', 15));
          });
        }
      });
    };
    this.close = function() {
      return new Promise(function(resolve/*, reject*/) {
        if (_open) {
          _open = false;
          p.close();
          _statechange(self, a);
        }
        resolve(self);
      });
    };
    Object.freeze(this);
  }

  function _split(q) {
    var i, k;
    while (q.length) {
      for (i = 0; i < q.length; i++) if (q[i] == parseInt(q[i]) && q[i] >= 0x80 && q[i] <= 0xff && q[i] != 0xf7) break;
      q.splice(0, i);
      if (!q.length) return;
      if (q[0] == 0xf0) {
        for (i = 1; i < q.length; i++) if (q[i] == 0xf7) break;
        if (i == q.length) return;
        return q.splice(0, i + 1);
      }
      else {
        k = _datalen(q[0]) + 1;
        if (k > q.length) return;
        for (i = 1; i < k; i++) if (q[i] != parseInt(q[i]) || q[i] < 0 || q[i] >= 0x80) break;
        if (i == k) return q.splice(0, i);
        else q.splice(0, i);
      }
    }
  }

  function _InputProxy(id, name, man, ver) {
    var self = this;
    this.id = id;
    this.name = name;
    this.man = man;
    this.ver = ver;
    this.connected = true;
    this.ports = [];
    this.pending = [];
    this.proxy = undefined;
    this.queue = [];
    this.onmidi = function(msg) {
      var m;
      self.queue = self.queue.concat(msg.slice());
      for (m = _split(self.queue); m; m = _split(self.queue)) {
        for (i = 0; i < self.ports.length; i++) {
          if (self.ports[i][0].onmidimessage && (m[0] != 0xf0 || self.ports[i][1])) {
            self.ports[i][0].onmidimessage(new MIDIMessageEvent(self, new Uint8Array(m)));
          }
        }
      }
    };
  }
  _InputProxy.prototype.open = function() {
    var self = this;
    return new Promise(function(resolve, reject) {
      var i;
      if (self.proxy || !self.connected) resolve();
      else {
        self.pending.push([resolve, reject]);
        if (self.pending.length == 1) {
          JZZ().openMidiIn(self.name).or(function() {
            for (i = 0; i < self.pending.length; i++) self.pending[i][1]();
            self.pending = [];
          }).and(function() {
            self.proxy = this;
            self.proxy.connect(self.onmidi);
            for (i = 0; i < self.pending.length; i++) self.pending[i][0]();
            self.pending = [];
          });
        }
      }
    });
  };
  _InputProxy.prototype.close = function() {
    var i;
    if (this.proxy) {
      for (i = 0; i < this.ports.length; i++) if (this.ports[i].connection == 'open') return;
      this.proxy.close();
      this.proxy = undefined;
    }
  };
  _InputProxy.prototype.disconnect = function() {
    this.connected = false;
    if (this.proxy) {
      this.proxy.close();
      this.proxy = undefined;
    }
  };
  _InputProxy.prototype.reconnect = function() {
    var self = this;
    var i, p;
    var a = [];
    this.connected = true;
    for (i = 0; i < _wma.length; i++) {
      p = _wma[i].inputs.get(this.id);
      if (p.connection == 'closed') _statechange(p, _wma[i]);
      else a.push([p, _wma[i]]);
    }
    if (a.length) {
      JZZ()._openMidiInNR(self.name).or(function() {
        for (i = 0; i < a.length; i++) a[i][0].close();
      }).and(function() {
        self.proxy = this;
        self.proxy.connect(self.onmidi);
        for (i = 0; i < a.length; i++) _statechange(a[i][0], a[i][1]);
      });
    }
  };

  function _datalen(x) {
    if (x >= 0x80 && x <= 0xbf || x >= 0xe0 && x <= 0xef || x == 0xf2) return 2;
    if (x >= 0xc0 && x <= 0xdf || x == 0xf1 || x == 0xf3) return 1;
    return 0;
  }

  var _epr = "Failed to execute 'send' on 'MIDIOutput': ";

  function _validate(arr, sysex) {
    var i, k;
    var msg;
    var data = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] != parseInt(arr[i]) || arr[i] < 0 || arr[i] > 255) throw TypeError(_epr + arr[i] + ' is not a UInt8 value.');
    }
    k = 0;
    for (i = 0; i < arr.length; i++) {
      if (!k) {
        if (arr[i] < 0x80) throw TypeError(_epr + 'Running status is not allowed at index ' + i + ' (' + arr[i] + ').');
        if (arr[i] == 0xf7) throw TypeError(_epr + 'Unexpected end of system exclusive message at index ' + i + ' (' + arr[i] + ').');
        msg = [arr[i]];
        data.push(msg);
        if (arr[i] == 0xf0) {
          if (!sysex) throw new DOMException('InvalidAccessError', _epr + 'System exclusive messag is not allowed at index ' + i + ' (' + arr[i] + ').', 15);
          k = -1;
          for (; i < arr.length; i++) {
            msg.push(arr[i]);
            if (arr[i] == 0xf7) {
              k = 0;
              break;
            }
          }
        }
        else {
          k = _datalen(arr[i]);
        }
      }
      else {
        if (arr[i] > 0x7f) throw TypeError(_epr + 'Unexpected status byte at index ' + i + ' (' + arr[i] + ').');
        msg.push(arr[i]);
        k--;
      }
    }
    if (k) throw TypeError(_epr + 'Message is incomplete');
    return [data];
  }

  function MIDIOutput(a, p) {
    var self = this;
    var _open = false;
    var _ochng = null;
    this.type = 'output';
    this.id = p.id;
    this.name = p.name;
    this.manufacturer = p.man;
    this.version = p.ver;
    Object.defineProperty(this, 'state', { get: function() { return p.connected ? 'connected' : 'disconnected'; }, enumerable: true });
    Object.defineProperty(this, 'connection', { get: function() {
      return _open ? p.proxy ? 'open' : 'pending' : 'closed';
    }, enumerable: true });
    Object.defineProperty(this, 'onstatechange', {
      get: function() { return _ochng; },
      set: function(value) {
        if (value instanceof Function) _ochng = value;
        else _ochng = null;
      },
      enumerable: true
    });
    this.open = function() {
      return new Promise(function(resolve, reject) {
        if (_open) resolve(self);
        else {
          p.open().then(function() {
            if (!_open) {
              _open = true;
              _statechange(self, a);
            }
            resolve(self);
          }, function() {
            reject(new DOMException('InvalidAccessError', 'Port is not available', 15));
          });
        }
      });
    };
    this.close = function() {
      return new Promise(function(resolve/*, reject*/) {
        if (_open) {
          _open = false;
          self.clear();
          p.close();
          _statechange(self, a);
        }
        resolve(self);
      });
    };
    this.clear = function() {
    };
    this.send = function(data, timestamp) {
      _validate(data, a.sysexEnabled);
      if (!p.connected) throw new DOMException('InvalidStateError', 'Port is not connected', 11);
      if (_open) {
        var now = _now();
        if (timestamp > now) setTimeout(function() { p.proxy.send(data); }, timestamp - now);
        else p.proxy.send(data);
      }
      else this.open().then(function() { self.send(data, timestamp); });

    };
    Object.freeze(this);
  }

  function _OutputProxy(id, name, man, ver) {
    this.id = id;
    this.name = name;
    this.man = man;
    this.ver = ver;
    this.connected = true;
    this.ports = [];
    this.pending = [];
    this.proxy = undefined;
  }
  _OutputProxy.prototype.open = function() {
    var self = this;
    return new Promise(function(resolve, reject) {
      var i;
      if (self.proxy || !self.connected) resolve();
      else {
        self.pending.push([resolve, reject]);
        if (self.pending.length == 1) {
          JZZ().openMidiOut(self.name).or(function() {
            for (i = 0; i < self.pending.length; i++) self.pending[i][1]();
            self.pending = [];
          }).and(function() {
            self.proxy = this;
            for (i = 0; i < self.pending.length; i++) self.pending[i][0]();
            self.pending = [];
          });
        }
      }
    });
  };
  _OutputProxy.prototype.close = function() {
    var i;
    if (this.proxy) {
      for (i = 0; i < this.ports.length; i++) if (this.ports[i].connection == 'open') return;
      this.proxy.close();
      this.proxy = undefined;
    }
  };
  _OutputProxy.prototype.disconnect = function() {
    this.connected = false;
    if (this.proxy) {
      this.proxy.close();
      this.proxy = undefined;
    }
  };
  _OutputProxy.prototype.reconnect = function() {
    var self = this;
    var i, p;
    var a = [];
    this.connected = true;
    for (i = 0; i < _wma.length; i++) {
      p = _wma[i].outputs.get(this.id);
      if (p.connection == 'closed') _statechange(p, _wma[i]);
      else a.push([p, _wma[i]]);
    }
    if (a.length) {
      JZZ()._openMidiOutNR(self.name).or(function() {
        for (i = 0; i < a.length; i++) a[i][0].close();
      }).and(function() {
        self.proxy = this;
        for (i = 0; i < a.length; i++) _statechange(a[i][0], a[i][1]);
      });
    }
  };

  function _Maplike(data) {
    this.has = function(id) {
      return data.hasOwnProperty(id) && data[id].connected;
    };
    this.keys = function() {
      try { // some old browsers may have no Map object
        var m = new Map();
        for (var id in data) if (this.has(id)) m.set(id, this.get(id));
        return m.keys();
      } catch (e) {}
    };
    this.values = function() {
      try {
        var m = new Map();
        for (var id in data) if (this.has(id)) m.set(id, this.get(id));
        return m.values();
      } catch (e) {}
    };
    this.entries = function() {
      try {
        var m = new Map();
        for (var id in data) if (this.has(id)) m.set(id, this.get(id));
        return m.entries();
      } catch (e) {}
    };
    this.forEach = function(fun, self) {
      if (typeof self == 'undefined') self = this;
      for (var id in data) if (this.has(id)) fun.call(self, this.get(id), id, this);
    };
    Object.defineProperty(this, 'size', {
      get: function() {
        var len = 0;
        for (var id in data) if (this.has(id)) len++;
        return len;
      },
      enumerable: true
    });
  }

  function MIDIInputMap(_access, _inputs) {
    this.get = function(id) {
      if (_inputMap.hasOwnProperty(id) && _inputMap[id].connected) {
        if (!_inputs[id]) {
          _inputs[id] = new MIDIInput(_access, _inputMap[id]);
          _inputMap[id].ports.push([_inputs[id], _access.sysexEnabled]);
        }
        return _inputs[id];
      }
    };
    Object.freeze(this);
  }
  MIDIInputMap.prototype = new _Maplike(_inputMap);
  MIDIInputMap.prototype.constructor = MIDIInputMap;

  function MIDIOutputMap(_access, _outputs) {
    this.get = function(id) {
      if (_outputMap.hasOwnProperty(id) && _outputMap[id].connected) {
        if (!_outputs[id]) {
          _outputs[id] = new MIDIOutput(_access, _outputMap[id]);
          _outputMap[id].ports.push([_outputs[id], _access.sysexEnabled]);
        }
        return _outputs[id];
      }
    };
    Object.freeze(this);
  }
  MIDIOutputMap.prototype = new _Maplike(_outputMap);
  MIDIOutputMap.prototype.constructor = MIDIOutputMap;

  function _wm_watch(x) {
    var i, k, p, a;
    for (i = 0; i < x.inputs.added.length; i++) {
      p = x.inputs.added[i];
      if (!_inputMap.hasOwnProperty(p.id)) _inputMap[p.id] = new _InputProxy(p.id, p.name, p.manufacturer, p.version);
      _inputMap[p.id].reconnect();
    }
    for (i = 0; i < x.outputs.added.length; i++) {
      p = x.outputs.added[i];
      if (!_outputMap.hasOwnProperty(p.id)) _outputMap[p.id] = new _OutputProxy(p.id, p.name, p.manufacturer, p.version);
      _outputMap[p.id].reconnect();
    }
    for (i = 0; i < x.inputs.removed.length; i++) {
      p = x.inputs.removed[i];
      if (_inputMap.hasOwnProperty(p.id)) {
        a = [];
        for (k = 0; k < _wma.length; k++) a.push([_wma[k].inputs.get(p.id), _wma[k]]);
        _inputMap[p.id].disconnect();
        for (k = 0; k < a.length; k++) _statechange(a[k][0], a[k][1]);
      }
    }
    for (i = 0; i < x.outputs.removed.length; i++) {
      p = x.outputs.removed[i];
      if (_outputMap.hasOwnProperty(p.id)) {
        a = [];
        for (k = 0; k < _wma.length; k++) a.push([_wma[k].outputs.get(p.id), _wma[k]]);
        _outputMap[p.id].disconnect();
        for (k = 0; k < a.length; k++) _statechange(a[k][0], a[k][1]);
      }
    }
  }

  function MIDIAccess(sysex) {
    var _inputs = {};
    var _outputs = {};
    var _onstatechange = null;
    var self = this;
    this.sysexEnabled = sysex;
    this.inputs = new MIDIInputMap(self, _inputs);
    this.outputs = new MIDIOutputMap(self, _outputs);
    Object.defineProperty(this, 'onstatechange', {
      get: function() { return _onstatechange; },
      set: function(f) { _onstatechange = f instanceof Function ? f : null; },
      enumerable: true
    });
    Object.freeze(this);
    var i;
    var p;
    var info = _jzz._info;
    for (i = 0; i < info.inputs.length; i++) {
      p = info.inputs[i];
      if (!_inputMap.hasOwnProperty(p.id)) _inputMap[p.id] = new _InputProxy(p.id, p.name, p.manufacturer, p.version);
    }
    for (i = 0; i < info.outputs.length; i++) {
      p = info.outputs[i];
      if (!_outputMap.hasOwnProperty(p.id)) _outputMap[p.id] = new _OutputProxy(p.id, p.name, p.manufacturer, p.version);
    }
    if (!_wma.length) JZZ().onChange(_wm_watch);
    _wma.push(this);
  }

  JZZ.requestMIDIAccess = function(opt) {
    return new Promise(function(resolve, reject) {
      JZZ.JZZ(opt).or(function() {
      }).and(function() {
        var sysex = !!(opt && opt.sysex);
        if (sysex && !this.info().sysex) reject(new DOMException('SecurityError', 'Sysex is not allowed', 18));
        else {
          var wma = new MIDIAccess(sysex);
          resolve(wma);
        }
      });
    });
  };
  if (typeof navigator !== 'undefined' && !navigator.requestMIDIAccess) navigator.requestMIDIAccess = JZZ.requestMIDIAccess;
  JZZ.close = function() { if (_engine._close) _engine._close(); };

  return JZZ;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/musictheoryjs/dist/musictheory.min.js":
/*!************************************************************!*\
  !*** ./node_modules/musictheoryjs/dist/musictheory.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=function(e,n,t){return Math.max(Math.min(e,Math.max(n,t)),Math.min(n,t))},i=function(e,n,t){var r,i=e;return i-=t*(r=Math.trunc(i/(t+1))),{value:i+=n-1,wraps:r}};function o(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;a(this,e),l(this,"mTone",0),l(this,"mOctave",0);var r=n,i=t;if("string"==typeof n){var o=e.mParseName(n),u=o.tone,v=o.octave;r=u,i=v}this.tone(r),this.octave(i)}var n,t,v;return n=e,v=[{key:"A4Tuning",value:function(n){return n?(e.A4Tuning=n,e.A4Tuning):e.mA4Tuning}},{key:"mParseName",value:function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=5,i=/(?:[A-G])|(?:(#|b)+)|([0-9]|10)/g,a=/(#|b)/g,u=/([0-9]|10)/g,l=o(t.matchAll(i));if(!l.length)throw new Error("Invalid Note Name Given");var v=l.filter((function(e){return null!=e})),s=l[0].filter((function(e){return null!=e}));switch(s[0]){case"A":n=e.tones.A;break;case"B":n=e.tones.B;break;case"C":n=e.tones.C;break;case"D":n=e.tones.D;break;case"E":n=e.tones.E;break;case"F":n=e.tones.F;break;case"G":n=e.tones.G}for(var c=v.length,h=1;h<c;h++){var f=v[h],m=f.filter((function(e){return null!=e}));if(a.test(m[0])){var d=Array.from(m[0]);d.forEach((function(e){"#"===e?n++:"b"===e&&n--}))}else u.test(m[0])&&(r=Number(m[0]))}return{tone:n,octave:r}}},{key:"A",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new e(2,n)}},{key:"B",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new e(4,n)}},{key:"C",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new e(5,n)}},{key:"D",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new e(7,n)}},{key:"E",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new e(9,n)}},{key:"F",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new e(10,n)}},{key:"G",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return new e(12,n)}}],(t=[{key:"tone",value:function(e){if(!e)return this.mTone;var n=i(e,1,12),t=n.value,o=n.wraps;return this.mTone=t,this.mOctave=r(this.mOctave+o,0,10),this}},{key:"octave",value:function(e){return e?(this.mOctave=r(e,0,10),this):this.mOctave}},{key:"sharp",value:function(){var e=i(this.mTone+1,1,12),n=e.value,t=e.wraps;return this.mTone=n,this.mOctave+=t,this}},{key:"isSharp",value:function(){return 1===this.mTone||3===this.mTone||6===this.mTone||8===this.mTone||11===this.mTone}},{key:"flat",value:function(){var e=i(this.mTone-1,1,12),n=e.value,t=e.wraps;return this.mTone=n,this.mOctave+=t,this}},{key:"isFlat",value:function(){return this.isSharp()}},{key:"equals",value:function(e){return e.tone()===this.mTone&&e.octave()===this.mOctave}},{key:"copy",value:function(){return new e(this.mTone,this.mOctave)}},{key:"midiKey",get:function(){var e=21+12*this.mOctave+(this.mTone-2);return e=r(e,0,127)}},{key:"freq",get:function(){return Math.pow(2,(this.midiKey-69)/12)*this.A4Tuning}},{key:"asString",get:function(){var n="";switch(this.mTone){case e.tones.A:n="A";break;case e.tones.A_SHARP:n="A#/Bb";break;case e.tones.B:n="B";break;case e.tones.C:n="C";break;case e.tones.C_SHARP:n="C#/Db";break;case e.tones.D:n="D";break;case e.tones.D_SHARP:n="D#/Eb";break;case e.tones.E:n="E";break;case e.tones.F:n="F";break;case e.tones.F_SHARP:n="F#/Gb";break;case e.tones.G:n="G";break;case e.tones.G_SHARP:n="G#/Ab";break;default:n="A"}return n}}])&&u(n.prototype,t),v&&u(n,v),e}();l(v,"tones",{G_SHARP:1,A_FLAT:v.G_SHARP,A:2,A_SHARP:3,B_FLAT:v.A_SHARP,B:4,C_FLAT:v.B,C:5,B_SHARP:v.C,C_SHARP:6,D_FLAT:v.C_SHARP,D:7,D_SHARP:8,E_FLAT:v.D_SHARP,E:9,F_FLAT:v.E,F:10,E_SHARP:v.F,F_SHARP:11,G_FLAT:v.F_SHARP,G:12,TOTAL_HALF_TONES:12}),l(v,"modifier",{NATURAL:0,SHARP:1,SHARP_SHARP:2,FLAT:-1,FLAT_FLAT:-2,TOTAL_MODIFIERS:5}),l(v,"mA4Tuning",440);var s=v;function c(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,2,1,2,2,2];h(this,e),m(this,"mTemplate",[]),m(this,"mRootNote",null),m(this,"mNotes",[]),this.root(n),this.template(t)}var n,t,r;return n=e,r=[{key:"WholeTone",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,2,2,2,2])}},{key:"Major",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,2,2])}},{key:"Major7s4s5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,2,2,1,2])}},{key:"Minor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,2,2,1,2])}},{key:"Minor7b9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,2,2,2,1])}},{key:"Minor7b5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,2,1,2,2])}},{key:"HarmonicMajor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,1,3])}},{key:"HarmonicMinor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,2,2,1,3])}},{key:"MelodicMinorAscend",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,2,2,2,2])}},{key:"MelodicMinorDescend",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,2,1])}},{key:"EnigmaticMajor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,3,2,2,2,1])}},{key:"EnigmaticMinor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,3,1,3,1])}},{key:"PentatonicMajor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,3,2,3])}},{key:"PentatonicMajorBlues",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,1,3,2])}},{key:"PentatonicMinor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[3,2,2,3,2])}},{key:"PentatonicMinorBlues",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[3,2,1,1,3])}},{key:"b5Pentatonic",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[3,2,1,4,2])}},{key:"Minor6Pentatonic",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[3,2,2,2,3])}},{key:"Dim8Tone",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,2,1,2,1,2])}},{key:"Dom8Tone",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,1,2,1,2,1])}},{key:"NeopolitanMajor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,2,2,2,2])}},{key:"NeopolitanMinor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,2,2,1,3])}},{key:"HungarianMajor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[3,1,2,1,2,1])}},{key:"HungarianMinor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,3,1,1,3])}},{key:"HungarianGypsy",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,3,1,2,1,3])}},{key:"Spanish",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,1,2,2,2])}},{key:"SpanishGypsy",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,3,1,2,1,2])}},{key:"Spanish8Tone",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,1,1,1,2,2])}},{key:"Augmented",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[3,1,3,1,3,1])}},{key:"DominantSuspended",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,3,2,2,1,2])}},{key:"BebopMajor",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,1,1,2])}},{key:"BebopDominant",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,2,1,1])}},{key:"Mystic",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,2,3,2])}},{key:"Overtone",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,2,1,1,2])}},{key:"LeadingTone",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,2,2,2,1])}},{key:"DoubleHarmonic",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,3,1,2,1,3])}},{key:"Hirojoshi",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,4,1])}},{key:"JapaneseA",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,4,1,3])}},{key:"JapaneseB",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,3,1,3])}},{key:"Oriental",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,3,1,1,3,1])}},{key:"Persian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,4,1,2,3])}},{key:"Arabian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,1,2,2])}},{key:"Balinese",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,4,1])}},{key:"Kumoi",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,4,2,2])}},{key:"Pelog",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,3,1,1])}},{key:"Algerian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,2,1,1,1,3])}},{key:"Chinese",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[4,2,1,4])}},{key:"Egyptian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,3,2,3])}},{key:"Romanian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,3,1,2,1])}},{key:"Hindu",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,1,2])}},{key:"Insen",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,4,2,3])}},{key:"Iwato",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,4,1,4])}},{key:"Scottish",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,3,2,2])}},{key:"Yo",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[3,2,2,3])}},{key:"Mongolian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,3,2])}},{key:"Istrian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,2,2,1,2])}},{key:"UkranianDorian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,3,1,2,1])}},{key:"Petrushka",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,3,2,1,3])}},{key:"Dorian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,1,2,2,2,1])}},{key:"Phrygian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,2,2,1,2])}},{key:"Lydian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,2,1,2,2])}},{key:"LydianDominate",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,2,1,2,1])}},{key:"Mixolydian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,2,1])}},{key:"MixolydianFlat6",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[2,2,1,2,1,2])}},{key:"Locrian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,2,1,2,2])}},{key:"SuperLocrian",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,2,1,2,2,2])}},{key:"AhavaRaba",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[1,3,1,2,1,2])}}],(t=[{key:"root",value:function(e){return e?(this.mRootNote=e,this.mComputeNotes(),this):this.mRootNote}},{key:"template",value:function(e){return e?(this.mTemplate=e,this.mComputeNotes(),this):this.mTemplate}},{key:"degree",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===e)return this.mRootNote;var n=i(e,1,this.mNotes.length),t=n.value,r=n.wraps,o=this.mNotes[t-1];return new s(o.tone(),o.octave()+r)}},{key:"relativeMajor",value:function(){return new e(this.degree(3),[2,2,1,2,2,2])}},{key:"relativeMinor",value:function(){return new e(this.degree(6),[2,1,2,2,1,2])}},{key:"ionianMode",value:function(){return e.Major(this.mRootNote)}},{key:"dorianMode",value:function(){return e.Dorian(this.degree(2))}},{key:"phrygianMode",value:function(){return e.Phrygian(this.degree(3))}},{key:"lydianMode",value:function(){return e.Lydian(this.degree(4))}},{key:"mixolydianMode",value:function(){return e.Mixolydian(this.degree(5))}},{key:"aeolianMode",value:function(){return e.Aeolian(this.degree(6))}},{key:"locrianMode",value:function(){return e.Locrian(this.degree(7))}},{key:"parallelMode",value:function(n){if(!(n>=e.modes.IONIAN&&n<=e.modes.LOCRIAN))throw new Error("Invalid scale mode given");switch(n){case e.modes.IONIAN:this.template([2,2,1,2,2,2]);break;case e.modes.LYDIAN:this.template([2,2,2,1,2,2]);break;case e.modes.MIXOLYDIAN:this.template([2,2,1,2,2,1]);break;case e.modes.DORIAN:this.template([2,1,2,2,2,1]);break;case e.modes.AEOLIAN:this.template([2,1,2,2,1,2]);break;case e.modes.PHRYGIAN:this.template([1,2,2,2,1,2]);break;case e.modes.LOCRIAN:this.template([1,2,2,1,2,2])}return this}},{key:"mTemplateDegreeIndex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=i(e-1,1,this.mNotes.length),t=n.value;return t-1}},{key:"mComputeNotes",value:function(){this.mNotes=[],this.mNotes.push(this.mRootNote);var e,n=this.mRootNote.tone(),t=this.mRootNote.octave();for(e=0;e<this.mTemplate.length;e++)n+=this.mTemplate[e],this.mNotes.push(new s(n,t))}},{key:"equals",value:function(e){return e.root()===this.root()&&e.template()===this.template()}},{key:"copy",value:function(){return new e(this.mRootNote,c(this.mTemplate))}},{key:"length",get:function(){return this.mNotes.length}},{key:"notes",get:function(){return this.mNotes}},{key:"key",get:function(){return this.mRootNote}},{key:"asString",get:function(){var e="Scale: ";return this.mNotes.forEach((function(n){e+="".concat(n.asString," ")})),e}}])&&f(n.prototype,t),r&&f(n,r),e}();m(d,"modes",{IONIAN:1,LYDIAN:2,MIXOLYDIAN:3,DORIAN:4,AEOLIAN:5,PHRYGIAN:6,LOCRIAN:7,TOTAL_MODES:7}),m(d,"HalfDim",d.Minor7b5),m(d,"Jewish",d.Spanish8Tone),m(d,"Byzantine",d.DoubleHarmonic),m(d,"Acoustic",d.LydianDominate),m(d,"Aeolian",d.Minor);var w=d;function y(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;y(this,e),this.interval=n,this.modifier=r(t,-2,2)}var n,t,i;return n=e,i=[{key:"create",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new e(n,t)}}],(t=null)&&g(n.prototype,t),i&&g(n,i),e}();function A(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function T(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var L=k.create,F=s.modifier,S=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[L(1),L(3),L(5)],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new w;p(this,e),b(this,"mRootnote",null),b(this,"mTemplate",[]),b(this,"mScale",null),b(this,"mNotes",[]);var i=n,o=t;if("string"==typeof n){var a=e.mParseName(n),u=a.root,l=a.template;i=new s(u),o=l}this.mScale=r,this.mTemplate=o,this.root(i)}var n,t,r;return n=e,r=[{key:"mParseName",value:function(e){if(!e)throw new Error("Chord.byName(String) requires a chord name be given");for(var n,t=[L(1)],r=/[A-G]/g,i=/(#|b)*/g,o=A(e.matchAll(/(?:(?:([A-G])([#b]*))|([mM])|(dim|aug|sus4|sus2)|(?:([b#]*)([4-9]|1[01])))/g)),a=o.length,u=0;u<a;u++){var l=o[u].filter((function(e){return null!=e})),v=String(l[1].charAt(0));if(r.test(v)){switch(v){case"A":n=s.tones.A;break;case"B":n=s.tones.B;break;case"C":n=s.tones.C;break;case"D":n=s.tones.D;break;case"E":n=s.tones.E;break;case"F":n=s.tones.F;break;case"G":n=s.tones.G}l.length>2&&Array.from(l[2]).forEach((function(e){"#"===e?n+=1:"b"===e&&(n-=1)}))}else if("m"===v){var c=t.findIndex((function(e){return 3===e.interval})),h=t.findIndex((function(e){return 5===e.interval}));c>-1?t[c].modifier=F.FLAT:t.push(L(3,F.FLAT)),-1===h&&t.push(L(5))}else if("M"===v){var f=t.findIndex((function(e){return 3===e.interval})),m=t.findIndex((function(e){return 5===e.interval}));f>-1?t[f].modifier=F.NATURAL:t.push(L(3)),-1===m&&t.push(L(5))}else if(i.test(v))!function(){var e=0;Array.from(l[1]).forEach((function(n){"#"===n?e++:e--}));var n=Math.round(l[2]),r=t.findIndex((function(e){return e.interval===n}));r>-1?t[r].modifier=e:t.push(L(n,e))}();else if("dim"===l[0]){var d=t.findIndex((function(e){return 5===e.interval}));d>-1?t[d].modifier=F.FLAT:t.push(L(5,F.FLAT))}else if("aug"===l[0]){var w=t.findIndex((function(e){return 5===e.interval}));w>-1?t[w].modifier=F.SHARP:t.push(L(5,F.SHARP))}else if("sus2"===l[0]){var y=t.findIndex((function(e){return 3===e.interval}));y>-1?t[y].interval=2:t.push(L(2))}else if("sus4"===v){var g=t.findIndex((function(e){return 3===e.interval}));g>-1?(t[g].interval=4,t[g].modifier=F.FLAT):t.push(L(4,F.FLAT))}}if(!n||t.length<2)throw new Error("Invalid chord name given");return t.sort((function(e,n){return e.interval-n.interval})),{root:n,template:t}}},{key:"M",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5)])}},{key:"Madd4",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(4),L(5)])}},{key:"M6",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(6)])}},{key:"M69",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(6),L(9)])}},{key:"M7",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7)])}},{key:"M9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7),L(9)])}},{key:"M11",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7),L(9),L(11)])}},{key:"M13",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7),L(9),L(11),L(13)])}},{key:"M7s11",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7),L(11,F.SHARP)])}},{key:"Mb5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.FLAT)])}},{key:"m",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5)])}},{key:"madd4",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(4),L(5)])}},{key:"m6",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5),L(6)])}},{key:"m7",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5),L(7,F.FLAT)])}},{key:"madd9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5),L(9)])}},{key:"m6add9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5),L(6),L(9)])}},{key:"m9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5),L(7,F.FLAT),L(9)])}},{key:"m11",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5),L(7,F.FLAT),L(9),L(11)])}},{key:"m13",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5),L(7,F.FLAT),L(9),L(11),L(13)])}},{key:"m7b5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5,F.FLAT),L(7,F.FLAT)])}},{key:"dom7",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7,F.FLAT)])}},{key:"dom9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7,F.FLAT),L(9)])}},{key:"dom11",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7,F.FLAT),L(9),L(11)])}},{key:"dom13",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7,F.FLAT),L(9),L(11),L(13)])}},{key:"dom7s5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.SHARP),L(7,F.FLAT)])}},{key:"dom7b5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.FLAT),L(7,F.FLAT)])}},{key:"dom7b9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7,F.FLAT),L(9,F.FLAT)])}},{key:"dom7s9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7,F.FLAT),L(9,F.SHARP)])}},{key:"dom9s5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.SHARP),L(7,F.FLAT),L(9)])}},{key:"dom9b5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.FLAT),L(7,F.FLAT),L(9)])}},{key:"dom7s5s9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.SHARP),L(7,F.FLAT),L(9,F.SHARP)])}},{key:"dom7s5b9",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.SHARP),L(7,F.FLAT),L(9,F.FLAT)])}},{key:"dom7s11",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5),L(7,F.FLAT),L(11,F.SHARP)])}},{key:"dim",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5,F.FLAT)])}},{key:"dim7",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3,F.FLAT),L(5,F.FLAT),L(7,F.FLAT_FLAT)])}},{key:"aug",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(3),L(5,F.SHARP)])}},{key:"fifth",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(5)])}},{key:"b5",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(5,F.FLAT)])}},{key:"sus4",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(4,F.FLAT),L(5)])}},{key:"sus2",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(2),L(5)])}},{key:"s11",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s;return new e(n,[L(1),L(5),L(11,F.SHARP)])}}],(t=[{key:"root",value:function(e){return e?(this.mRootnote=e,this.scale(this.mScale),this):this.mRootnote}},{key:"template",value:function(e){return e?(this.mTemplate=e,this.mComputeNotes(),this):this.pTemplate}},{key:"scale",value:function(e){return e?(this.mScale=new w(this.mRootnote,e.template()),this.mComputeNotes(),this):this.mScale}},{key:"octave",value:function(e){return e?(this.root(new s(this.mRootnote.tone(),e)),this):this.mRootnote.octave()}},{key:"invert",value:function(){var e=this.mTemplate.length;if(e<2)throw new Error("Chord doesn't have enough notes to invert");var n,t=[];for(n=1;n<e;n++)t.push(this.mTemplate[n]);var r=this.mScale.length,i=this.mTemplate[0];return i.interval+=r,t.push(i),this.template(t),this}},{key:"major",value:function(){var e=this.mTemplate.findIndex((function(e){return 3===e.interval}));return e>-1?this.mTemplate[e].modifier=F.NATURAL:this.mTemplate.push(L(3,F.NATURAL)),this.mTemplate.sort((function(e,n){return e.interval-n.interval})),this.mComputeNotes(),this}},{key:"minor",value:function(){var e=this.mTemplate.findIndex((function(e){return 3===e.interval}));return e>-1?this.mTemplate[e].modifier=F.FLAT:this.mTemplate.push(L(3,F.FLAT)),this.mTemplate.sort((function(e,n){return e.interval-n.interval})),this.mComputeNotes(),this}},{key:"diminish",value:function(){var e=this.mTemplate.findIndex((function(e){return 5===e.interval}));return e>-1?this.mTemplate[e].modifier=F.FLAT:this.mTemplate.push(L(5,F.FLAT)),this.mTemplate.sort((function(e,n){return e.interval-n.interval})),this.mComputeNotes(),this}},{key:"halfDiminish",value:function(){var e=this.mTemplate.findIndex((function(e){return 7===e.interval}));return e>-1?this.mTemplate[e].modifier=F.FLAT:this.mTemplate.push(L(7,F.FLAT)),this.mTemplate.sort((function(e,n){return e.interval-n.interval})),this.mComputeNotes(),this}},{key:"augment",value:function(){var e=this.mTemplate.findIndex((function(e){return 5===e.interval}));return e>-1?this.mTemplate[e].modifier=F.SHARP:this.mTemplate.push(L(5,F.SHARP)),this.mTemplate.sort((function(e,n){return e.interval-n.interval})),this.mComputeNotes(),this}},{key:"equals",value:function(e){return e.mRootnote.equals(this.mRootnote)&&e.mScale.equals(this.mScale)&&e.mTemplate===this.mTemplate}},{key:"copy",value:function(){return new e(this.mRootnote,this.mTemplate,this.mScale)}},{key:"mComputeNotes",value:function(){var e;for(this.mNotes=[],e=0;e<this.mTemplate.length;e++){var n=this.mScale.degree(this.mTemplate[e].interval);switch(this.mTemplate[e].modifier){case F.NATURAL:break;case F.SHARP:n.sharp();break;case F.SHARP_SHARP:n.sharp().sharp();break;case F.FLAT:n.flat();break;case F.FLAT_FLAT:n.flat().flat()}this.mNotes.push(n)}}},{key:"notes",get:function(){return this.mNotes}},{key:"asString",get:function(){var e="Chord: ";return this.mNotes.forEach((function(n){e+="".concat(n.asString," ")})),e}}])&&T(n.prototype,t),r&&T(n,r),e}();t.d(n,"Note",(function(){return s})),t.d(n,"Scale",(function(){return w})),t.d(n,"Chord",(function(){return S})),t.d(n,"ChordInterval",(function(){return k}))}])}));

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Sequencer.js":
/*!**************************!*\
  !*** ./src/Sequencer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var musictheoryjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! musictheoryjs */ "./node_modules/musictheoryjs/dist/musictheory.min.js");
/* harmony import */ var musictheoryjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(musictheoryjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jzz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jzz */ "./node_modules/jzz/javascript/JZZ.js");
/* harmony import */ var jzz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jzz__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




__webpack_require__(/*! jzz-synth-tiny */ "./node_modules/jzz-synth-tiny/javascript/JZZ.synth.Tiny.js")(jzz__WEBPACK_IMPORTED_MODULE_1__);

var Sequencer =
/*#__PURE__*/
function () {
  function Sequencer() {
    var pKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Note"].C();
    var pScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].Major();
    var pMelodyScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].HarmonicMajor();

    _classCallCheck(this, Sequencer);

    _defineProperty(this, "mSeq", void 0);

    _defineProperty(this, "mKey", void 0);

    _defineProperty(this, "mScale", void 0);

    _defineProperty(this, "mChords", void 0);

    _defineProperty(this, "mMelody", []);

    _defineProperty(this, "mMelodyScale", void 0);

    _defineProperty(this, "mDegrees", []);

    this.mKey = pKey;
    this.mScale = pScale;
    this.mMelodyScale = pMelodyScale;
  }

  _createClass(Sequencer, [{
    key: "setRythm",
    value: function setRythm(pChords, pDegrees) {
      this.mChords = pChords;
      this.mDegrees = pDegrees;
    }
  }, {
    key: "setMelody",
    value: function setMelody(pNotes) {
      this.mMelody = pNotes;
    }
  }, {
    key: "setScale",
    value: function setScale(pScale) {
      this.mScale = pScale;
    } // because MT.Note.asString will somestimes return something like 'F#/Gb' 
    // which is invalid for a chord name

  }, {
    key: "fixChordName",
    value: function fixChordName(str) {
      var s = str.split('/')[1];
      return s || str;
    }
  }, {
    key: "prepare",
    value: function prepare(pForm) {
      this.mKey = new musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Note"](pForm.key, 2);

      switch (pForm.scale) {
        case 'Major':
          this.mScale = musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].Major(this.mKey);
          break;

        case 'Minor':
          this.mScale = musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].Minor(this.mKey);
          break;

        case 'Pentatonic':
          this.mScale = musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].PentatonicMajor(this.mKey);
          break;

        case 'Enigmatic':
          this.mScale = musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].EnigmaticMajor(this.mKey);
          break;

        case 'Spanish':
          this.mScale = musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].Spanish(this.mKey);
          break;

        case 'HarmonicMajor':
          this.mScale = musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].HarmonicMajor(this.mKey);
          break;

        case 'MelodicMinor':
          this.mScale = musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Scale"].MelodicMinorAscend(this.mKey);
          break;

        case 'None':
        default:
          break;
      }

      switch (pForm.mode) {
        case 'Ionian':
          this.mScale = this.mScale.ionianMode();
          break;

        case 'Dorian':
          this.mScale = this.mScale.dorianMode();
          break;

        case 'Phrygian':
          this.mScale = this.mScale.phrygianMode();
          break;

        case 'Lydian':
          this.mScale = this.mScale.lydianMode();
          break;

        case 'Mixolydian':
          this.mScale = this.mScale.mixolydianMode();
          break;
        // case 'Aeolian':
        //     this.mScale = this.mScale.Minor(this.mKey);
        //     break;

        case 'Locrian':
          this.mScale = this.mScale.locrianMode();
          break;

        default:
          break;
      }

      this.setRythm([new musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Chord"](this.fixChordName(this.mScale.degree(pForm.progression[0]).asString + pForm.chords[0])).octave(2), new musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Chord"](this.fixChordName(this.mScale.degree(pForm.progression[1]).asString + pForm.chords[1])).octave(2), new musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Chord"](this.fixChordName(this.mScale.degree(pForm.progression[2]).asString + pForm.chords[2])).octave(2), new musictheoryjs__WEBPACK_IMPORTED_MODULE_0__["Chord"](this.fixChordName(this.mScale.degree(pForm.progression[3]).asString + pForm.chords[3])).octave(2)], pForm.progression);
    }
  }, {
    key: "playChord",
    value: function playChord(pChord, pPort, pTime) {
      var port = pPort;
      var time = pTime;

      if (pChord) {
        pChord.notes.forEach(function (item) {
          port.wait(time).noteOn(0, item.midiKey, 80).wait(2000).noteOff(0, item.midiKey);
        });
      }

      return port;
    }
  }, {
    key: "play",
    value: function play() {
      var _this = this;

      var pTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.mSeq) {
        this.mSeq = jzz__WEBPACK_IMPORTED_MODULE_1__["synth"].Tiny();
      }

      var port = this.mSeq;
      var time = pTime;

      if (this.mChords) {
        this.mChords.forEach(function (item) {
          port = _this.playChord(item, port, time);
          time += 2000;
        });
      }

      return time;
    }
  }, {
    key: "sequencer",
    get: function get() {
      return this.mSeq;
    }
  }, {
    key: "key",
    get: function get() {
      return this.mKey;
    }
  }, {
    key: "chords",
    get: function get() {
      return this.mChords;
    }
  }, {
    key: "scale",
    get: function get() {
      return this.mScale;
    }
  }, {
    key: "I",
    get: function get() {
      return this.mScale.degree(1);
    }
  }, {
    key: "II",
    get: function get() {
      return this.mScale.degree(2);
    }
  }, {
    key: "III",
    get: function get() {
      return this.mScale.degree(3);
    }
  }, {
    key: "IV",
    get: function get() {
      return this.mScale.degree(4);
    }
  }, {
    key: "V",
    get: function get() {
      return this.mScale.degree(5);
    }
  }, {
    key: "VI",
    get: function get() {
      return this.mScale.degree(6);
    }
  }, {
    key: "VII",
    get: function get() {
      return this.mScale.degree(7);
    }
  }]);

  return Sequencer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Sequencer);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Sequencer, MT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sequencer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sequencer */ "./src/Sequencer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sequencer", function() { return _Sequencer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var musictheoryjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! musictheoryjs */ "./node_modules/musictheoryjs/dist/musictheory.min.js");
/* harmony import */ var musictheoryjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(musictheoryjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MT", function() { return musictheoryjs__WEBPACK_IMPORTED_MODULE_1__; });




/***/ })

/******/ });
});
//# sourceMappingURL=demo.js.map