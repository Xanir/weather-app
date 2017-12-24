/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var Services = __webpack_require__(2);
var Components = __webpack_require__(3);

module.exports = Object.freeze({
	Components: Components,
	Services: Services
});

window.gloomhaven = module.exports;


/***/ }),
/* 2 */
/***/ (function(module, exports) {


//var genConfigField = require('./gen-get-set.js');

module.exports = Object.freeze({
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var genConfigField = __webpack_require__(4);

module.exports = Object.freeze({
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {


	var compDirective = Object.create(HTMLElement.prototype);

	compDirective.createdCallback = function() {
		this.innerHTML = '<span class="hours"></span><span class="minutes"></span><span class="ampm"></span>'
	}

	compDirective.detachedCallback = function() {
		var timeComp = this;

		window.clearInterval(timeComp._updateTime);
	}

	compDirective.render = function(time) {
		var hoursElem = this.querySelector('.hours');
		var minutesElem = this.querySelector('.minutes');
		var ampmElem = this.querySelector('.ampm');

		var hours = time.getHours();
		var minutes = time.getMinutes();
		var isAM = true;
		if (hours === 0) {
			hours = 12;
		} else if (hours > 12) {
			isAM = false;
			hours -= 12;
		}
		
		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		hoursElem.innerText = hours;
		minutesElem.innerText = minutes;

		if (isAM) {
			ampmElem.innerText = 'AM';
		} else {
			ampmElem.innerText = 'PM';
		}
	}
	
	compDirective.attachedCallback = function() {
		var timeComp = this;

		timeComp._updateTime = window.setInterval(function() {
			timeComp.render(new Date());
		}, 2000);
	}

	compDirective.attributeChangedCallback = function(attrName, oldValue, newValue) {
	}


	// IE8 Shims needed Array.forEach, Array.map, HTMLElement.classList
	document.registerElement('weather-time', {
		prototype: compDirective
	});
/*
<gloomhaven-attack-card>
document.body.innerHTML = '<gloomhaven-attack-card atk="2"></gloomhaven-attack-card>'
*/


/***/ })
/******/ ]);