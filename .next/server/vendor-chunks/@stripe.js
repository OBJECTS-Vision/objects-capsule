"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stripe";
exports.ids = ["vendor-chunks/@stripe"];
exports.modules = {

/***/ "(ssr)/./node_modules/@stripe/crypto/dist/stripe.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@stripe/crypto/dist/stripe.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStandaloneOnrampUrl: () => (/* binding */ getStandaloneOnrampUrl),\n/* harmony export */   loadStripeOnramp: () => (/* binding */ loadStripeOnramp)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"(ssr)/./node_modules/@stripe/stripe-js/lib/index.mjs\");\n\n\nfunction _iterableToArrayLimit(arr, i) {\n  var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"];\n  if (null != _i) {\n    var _s,\n      _e,\n      _x,\n      _r,\n      _arr = [],\n      _n = !0,\n      _d = !1;\n    try {\n      if (_x = (_i = _i.call(arr)).next, 0 === i) {\n        if (Object(_i) !== _i) return;\n        _n = !1;\n      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);\n    } catch (err) {\n      _d = !0, _e = err;\n    } finally {\n      try {\n        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;\n      } finally {\n        if (_d) throw _e;\n      }\n    }\n    return _arr;\n  }\n}\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nvar ONRAMP_URL = 'https://crypto-js.stripe.com/crypto-onramp-outer.js';\nvar findScript = function findScript() {\n  var scripts = document.querySelectorAll(\"script[src^=\\\"\".concat(ONRAMP_URL, \"\\\"]\"));\n  for (var i = 0; i < scripts.length; i++) {\n    var script = scripts[i];\n    if (ONRAMP_URL !== script.src) {\n      continue;\n    }\n    return script;\n  }\n  return null;\n};\nvar injectScript = function injectScript() {\n  var script = document.createElement('script');\n  script.src = ONRAMP_URL;\n  var headOrBody = document.head || document.body;\n  if (!headOrBody) {\n    throw new Error('Expected document.body not to be null. Stripe Crypto requires a <body> element.');\n  }\n  headOrBody.appendChild(script);\n  return script;\n};\nvar registerWrapper = function registerWrapper(stripe, startTime) {\n  // TODO(forestfang): we do not have a mechanism to track metrics here yet\n  if (!stripe || !stripe._registerWrapper) {\n    return;\n  }\n  stripe._registerWrapper({\n    name: 'crypto-js',\n    version: \"0.0.4\",\n    startTime: startTime\n  });\n};\nvar stripePromise = null;\nvar loadScript = function loadScript() {\n  // Ensure that we only attempt to load Stripe.js at most once\n  if (stripePromise !== null) {\n    return stripePromise;\n  }\n  stripePromise = new Promise(function (resolve, reject) {\n    if (typeof window === 'undefined') {\n      // Resolve to null when imported server side. This makes the module\n      // safe to import in an isomorphic code base.\n      resolve(null);\n      return;\n    }\n    if (window.StripeOnramp) {\n      resolve(window.StripeOnramp);\n      return;\n    }\n    try {\n      var script = findScript();\n      if (!script) {\n        script = injectScript();\n      }\n      script.addEventListener('load', function () {\n        if (window.StripeOnramp) {\n          resolve(window.StripeOnramp);\n        } else {\n          reject(new Error('StripeOnramp not available'));\n        }\n      });\n      script.addEventListener('error', function () {\n        reject(new Error('Failed to load StripeOnramp'));\n      });\n    } catch (error) {\n      reject(error);\n      return;\n    }\n  });\n  return stripePromise;\n};\nvar initStripeOnramp = function initStripeOnramp(maybeStripeOnramp, args, startTime) {\n  if (maybeStripeOnramp === null) {\n    return null;\n  }\n  var stripeOnramp = maybeStripeOnramp.apply(undefined, args);\n  registerWrapper(stripeOnramp, startTime);\n  return stripeOnramp;\n};\n\n// Execute our own script injection after a tick to give users time to do their\n// own script injection.\nvar stripeOnrampPromise = Promise.resolve().then(function () {\n  return loadScript();\n});\nvar loadCalled = false;\nstripeOnrampPromise[\"catch\"](function (err) {\n  if (!loadCalled) {\n    console.warn(err);\n  }\n});\nvar loadStripeOnramp = function loadStripeOnramp() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n  loadCalled = true;\n  var startTime = Date.now();\n  return Promise.all([_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe.apply(void 0, args), stripeOnrampPromise]).then(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n      maybeStripeOnramp = _ref2[1];\n    return initStripeOnramp(maybeStripeOnramp, args, startTime);\n  });\n};\nvar getStandaloneOnrampUrl = function getStandaloneOnrampUrl(options) {\n  return stripeOnrampPromise.then(function (stripeOnramp) {\n    // Resolve to null if promise returns null (happens serverside)\n    if (stripeOnramp === null) {\n      return null;\n    }\n    var standaloneOnramp = stripeOnramp.Standalone(options);\n    return standaloneOnramp.getUrl();\n  })[\"catch\"](function () {\n    // Resolve to null on all errors\n    return null;\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9jcnlwdG8vZGlzdC9zdHJpcGUuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsWUFBWSw2RUFBNkU7QUFDakcsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFb0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVnZW4tZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL2NyeXB0by9kaXN0L3N0cmlwZS5lc20uanM/MDI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IG51bGwgPT0gYXJyID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSBfaSkge1xuICAgIHZhciBfcyxcbiAgICAgIF9lLFxuICAgICAgX3gsXG4gICAgICBfcixcbiAgICAgIF9hcnIgPSBbXSxcbiAgICAgIF9uID0gITAsXG4gICAgICBfZCA9ICExO1xuICAgIHRyeSB7XG4gICAgICBpZiAoX3ggPSAoX2kgPSBfaS5jYWxsKGFycikpLm5leHQsIDAgPT09IGkpIHtcbiAgICAgICAgaWYgKE9iamVjdChfaSkgIT09IF9pKSByZXR1cm47XG4gICAgICAgIF9uID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoX24gPSAoX3MgPSBfeC5jYWxsKF9pKSkuZG9uZSkgJiYgKF9hcnIucHVzaChfcy52YWx1ZSksIF9hcnIubGVuZ3RoICE9PSBpKTsgX24gPSAhMCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9ICEwLCBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBudWxsICE9IF9pLnJldHVybiAmJiAoX3IgPSBfaS5yZXR1cm4oKSwgT2JqZWN0KF9yKSAhPT0gX3IpKSByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2FycjtcbiAgfVxufVxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBPTlJBTVBfVVJMID0gJ2h0dHBzOi8vY3J5cHRvLWpzLnN0cmlwZS5jb20vY3J5cHRvLW9ucmFtcC1vdXRlci5qcyc7XG52YXIgZmluZFNjcmlwdCA9IGZ1bmN0aW9uIGZpbmRTY3JpcHQoKSB7XG4gIHZhciBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtzcmNePVxcXCJcIi5jb25jYXQoT05SQU1QX1VSTCwgXCJcXFwiXVwiKSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xuICAgIGlmIChPTlJBTVBfVVJMICE9PSBzY3JpcHQuc3JjKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG52YXIgaW5qZWN0U2NyaXB0ID0gZnVuY3Rpb24gaW5qZWN0U2NyaXB0KCkge1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSBPTlJBTVBfVVJMO1xuICB2YXIgaGVhZE9yQm9keSA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keTtcbiAgaWYgKCFoZWFkT3JCb2R5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBkb2N1bWVudC5ib2R5IG5vdCB0byBiZSBudWxsLiBTdHJpcGUgQ3J5cHRvIHJlcXVpcmVzIGEgPGJvZHk+IGVsZW1lbnQuJyk7XG4gIH1cbiAgaGVhZE9yQm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICByZXR1cm4gc2NyaXB0O1xufTtcbnZhciByZWdpc3RlcldyYXBwZXIgPSBmdW5jdGlvbiByZWdpc3RlcldyYXBwZXIoc3RyaXBlLCBzdGFydFRpbWUpIHtcbiAgLy8gVE9ETyhmb3Jlc3RmYW5nKTogd2UgZG8gbm90IGhhdmUgYSBtZWNoYW5pc20gdG8gdHJhY2sgbWV0cmljcyBoZXJlIHlldFxuICBpZiAoIXN0cmlwZSB8fCAhc3RyaXBlLl9yZWdpc3RlcldyYXBwZXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc3RyaXBlLl9yZWdpc3RlcldyYXBwZXIoe1xuICAgIG5hbWU6ICdjcnlwdG8tanMnLFxuICAgIHZlcnNpb246IFwiMC4wLjRcIixcbiAgICBzdGFydFRpbWU6IHN0YXJ0VGltZVxuICB9KTtcbn07XG52YXIgc3RyaXBlUHJvbWlzZSA9IG51bGw7XG52YXIgbG9hZFNjcmlwdCA9IGZ1bmN0aW9uIGxvYWRTY3JpcHQoKSB7XG4gIC8vIEVuc3VyZSB0aGF0IHdlIG9ubHkgYXR0ZW1wdCB0byBsb2FkIFN0cmlwZS5qcyBhdCBtb3N0IG9uY2VcbiAgaWYgKHN0cmlwZVByb21pc2UgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc3RyaXBlUHJvbWlzZTtcbiAgfVxuICBzdHJpcGVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmVzb2x2ZSB0byBudWxsIHdoZW4gaW1wb3J0ZWQgc2VydmVyIHNpZGUuIFRoaXMgbWFrZXMgdGhlIG1vZHVsZVxuICAgICAgLy8gc2FmZSB0byBpbXBvcnQgaW4gYW4gaXNvbW9ycGhpYyBjb2RlIGJhc2UuXG4gICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2luZG93LlN0cmlwZU9ucmFtcCkge1xuICAgICAgcmVzb2x2ZSh3aW5kb3cuU3RyaXBlT25yYW1wKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzY3JpcHQgPSBmaW5kU2NyaXB0KCk7XG4gICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICBzY3JpcHQgPSBpbmplY3RTY3JpcHQoKTtcbiAgICAgIH1cbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LlN0cmlwZU9ucmFtcCkge1xuICAgICAgICAgIHJlc29sdmUod2luZG93LlN0cmlwZU9ucmFtcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU3RyaXBlT25yYW1wIG5vdCBhdmFpbGFibGUnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBTdHJpcGVPbnJhbXAnKSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3RyaXBlUHJvbWlzZTtcbn07XG52YXIgaW5pdFN0cmlwZU9ucmFtcCA9IGZ1bmN0aW9uIGluaXRTdHJpcGVPbnJhbXAobWF5YmVTdHJpcGVPbnJhbXAsIGFyZ3MsIHN0YXJ0VGltZSkge1xuICBpZiAobWF5YmVTdHJpcGVPbnJhbXAgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgc3RyaXBlT25yYW1wID0gbWF5YmVTdHJpcGVPbnJhbXAuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgcmVnaXN0ZXJXcmFwcGVyKHN0cmlwZU9ucmFtcCwgc3RhcnRUaW1lKTtcbiAgcmV0dXJuIHN0cmlwZU9ucmFtcDtcbn07XG5cbi8vIEV4ZWN1dGUgb3VyIG93biBzY3JpcHQgaW5qZWN0aW9uIGFmdGVyIGEgdGljayB0byBnaXZlIHVzZXJzIHRpbWUgdG8gZG8gdGhlaXJcbi8vIG93biBzY3JpcHQgaW5qZWN0aW9uLlxudmFyIHN0cmlwZU9ucmFtcFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGxvYWRTY3JpcHQoKTtcbn0pO1xudmFyIGxvYWRDYWxsZWQgPSBmYWxzZTtcbnN0cmlwZU9ucmFtcFByb21pc2VbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gIGlmICghbG9hZENhbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihlcnIpO1xuICB9XG59KTtcbnZhciBsb2FkU3RyaXBlT25yYW1wID0gZnVuY3Rpb24gbG9hZFN0cmlwZU9ucmFtcCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICBsb2FkQ2FsbGVkID0gdHJ1ZTtcbiAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIHJldHVybiBQcm9taXNlLmFsbChbbG9hZFN0cmlwZS5hcHBseSh2b2lkIDAsIGFyZ3MpLCBzdHJpcGVPbnJhbXBQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgbWF5YmVTdHJpcGVPbnJhbXAgPSBfcmVmMlsxXTtcbiAgICByZXR1cm4gaW5pdFN0cmlwZU9ucmFtcChtYXliZVN0cmlwZU9ucmFtcCwgYXJncywgc3RhcnRUaW1lKTtcbiAgfSk7XG59O1xudmFyIGdldFN0YW5kYWxvbmVPbnJhbXBVcmwgPSBmdW5jdGlvbiBnZXRTdGFuZGFsb25lT25yYW1wVXJsKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHN0cmlwZU9ucmFtcFByb21pc2UudGhlbihmdW5jdGlvbiAoc3RyaXBlT25yYW1wKSB7XG4gICAgLy8gUmVzb2x2ZSB0byBudWxsIGlmIHByb21pc2UgcmV0dXJucyBudWxsIChoYXBwZW5zIHNlcnZlcnNpZGUpXG4gICAgaWYgKHN0cmlwZU9ucmFtcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBzdGFuZGFsb25lT25yYW1wID0gc3RyaXBlT25yYW1wLlN0YW5kYWxvbmUob3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0YW5kYWxvbmVPbnJhbXAuZ2V0VXJsKCk7XG4gIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlc29sdmUgdG8gbnVsbCBvbiBhbGwgZXJyb3JzXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZ2V0U3RhbmRhbG9uZU9ucmFtcFVybCwgbG9hZFN0cmlwZU9ucmFtcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@stripe/crypto/dist/stripe.esm.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@stripe/stripe-js/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStripe: () => (/* binding */ loadStripe)\n/* harmony export */ });\nvar V3_URL = 'https://js.stripe.com/v3';\nvar V3_URL_REGEX = /^https:\\/\\/js\\.stripe\\.com\\/v3\\/?(\\?.*)?$/;\nvar EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';\nvar findScript = function findScript() {\n  var scripts = document.querySelectorAll(\"script[src^=\\\"\".concat(V3_URL, \"\\\"]\"));\n\n  for (var i = 0; i < scripts.length; i++) {\n    var script = scripts[i];\n\n    if (!V3_URL_REGEX.test(script.src)) {\n      continue;\n    }\n\n    return script;\n  }\n\n  return null;\n};\n\nvar injectScript = function injectScript(params) {\n  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';\n  var script = document.createElement('script');\n  script.src = \"\".concat(V3_URL).concat(queryString);\n  var headOrBody = document.head || document.body;\n\n  if (!headOrBody) {\n    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');\n  }\n\n  headOrBody.appendChild(script);\n  return script;\n};\n\nvar registerWrapper = function registerWrapper(stripe, startTime) {\n  if (!stripe || !stripe._registerWrapper) {\n    return;\n  }\n\n  stripe._registerWrapper({\n    name: 'stripe-js',\n    version: \"3.4.1\",\n    startTime: startTime\n  });\n};\n\nvar stripePromise = null;\nvar onErrorListener = null;\nvar onLoadListener = null;\n\nvar onError = function onError(reject) {\n  return function () {\n    reject(new Error('Failed to load Stripe.js'));\n  };\n};\n\nvar onLoad = function onLoad(resolve, reject) {\n  return function () {\n    if (window.Stripe) {\n      resolve(window.Stripe);\n    } else {\n      reject(new Error('Stripe.js not available'));\n    }\n  };\n};\n\nvar loadScript = function loadScript(params) {\n  // Ensure that we only attempt to load Stripe.js at most once\n  if (stripePromise !== null) {\n    return stripePromise;\n  }\n\n  stripePromise = new Promise(function (resolve, reject) {\n    if (typeof window === 'undefined' || typeof document === 'undefined') {\n      // Resolve to null when imported server side. This makes the module\n      // safe to import in an isomorphic code base.\n      resolve(null);\n      return;\n    }\n\n    if (window.Stripe && params) {\n      console.warn(EXISTING_SCRIPT_MESSAGE);\n    }\n\n    if (window.Stripe) {\n      resolve(window.Stripe);\n      return;\n    }\n\n    try {\n      var script = findScript();\n\n      if (script && params) {\n        console.warn(EXISTING_SCRIPT_MESSAGE);\n      } else if (!script) {\n        script = injectScript(params);\n      } else if (script && onLoadListener !== null && onErrorListener !== null) {\n        var _script$parentNode;\n\n        // remove event listeners\n        script.removeEventListener('load', onLoadListener);\n        script.removeEventListener('error', onErrorListener); // if script exists, but we are reloading due to an error,\n        // reload script to trigger 'load' event\n\n        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);\n        script = injectScript(params);\n      }\n\n      onLoadListener = onLoad(resolve, reject);\n      onErrorListener = onError(reject);\n      script.addEventListener('load', onLoadListener);\n      script.addEventListener('error', onErrorListener);\n    } catch (error) {\n      reject(error);\n      return;\n    }\n  }); // Resets stripePromise on error\n\n  return stripePromise[\"catch\"](function (error) {\n    stripePromise = null;\n    return Promise.reject(error);\n  });\n};\nvar initStripe = function initStripe(maybeStripe, args, startTime) {\n  if (maybeStripe === null) {\n    return null;\n  }\n\n  var stripe = maybeStripe.apply(undefined, args);\n  registerWrapper(stripe, startTime);\n  return stripe;\n}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\n\nvar stripePromise$1;\nvar loadCalled = false;\n\nvar getStripePromise = function getStripePromise() {\n  if (stripePromise$1) {\n    return stripePromise$1;\n  }\n\n  stripePromise$1 = loadScript(null)[\"catch\"](function (error) {\n    // clear cache on error\n    stripePromise$1 = null;\n    return Promise.reject(error);\n  });\n  return stripePromise$1;\n}; // Execute our own script injection after a tick to give users time to do their\n// own script injection.\n\n\nPromise.resolve().then(function () {\n  return getStripePromise();\n})[\"catch\"](function (error) {\n  if (!loadCalled) {\n    console.warn(error);\n  }\n});\nvar loadStripe = function loadStripe() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  loadCalled = true;\n  var startTime = Date.now(); // if previous attempts are unsuccessful, will re-load script\n\n  return getStripePromise().then(function (maybeStripe) {\n    return initStripe(maybeStripe, args, startTime);\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSx3SUFBd0k7QUFDeEk7QUFDQTs7QUFFQSxrQkFBa0Isb0JBQW9CO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7O0FBRU47QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlZ2VuLWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvZGlzdC9pbmRleC5tanM/MDczNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVjNfVVJMID0gJ2h0dHBzOi8vanMuc3RyaXBlLmNvbS92Myc7XG52YXIgVjNfVVJMX1JFR0VYID0gL15odHRwczpcXC9cXC9qc1xcLnN0cmlwZVxcLmNvbVxcL3YzXFwvPyhcXD8uKik/JC87XG52YXIgRVhJU1RJTkdfU0NSSVBUX01FU1NBR0UgPSAnbG9hZFN0cmlwZS5zZXRMb2FkUGFyYW1ldGVycyB3YXMgY2FsbGVkIGJ1dCBhbiBleGlzdGluZyBTdHJpcGUuanMgc2NyaXB0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBkb2N1bWVudDsgZXhpc3Rpbmcgc2NyaXB0IHBhcmFtZXRlcnMgd2lsbCBiZSB1c2VkJztcbnZhciBmaW5kU2NyaXB0ID0gZnVuY3Rpb24gZmluZFNjcmlwdCgpIHtcbiAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0W3NyY149XFxcIlwiLmNvbmNhdChWM19VUkwsIFwiXFxcIl1cIikpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xuXG4gICAgaWYgKCFWM19VUkxfUkVHRVgudGVzdChzY3JpcHQuc3JjKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIGluamVjdFNjcmlwdCA9IGZ1bmN0aW9uIGluamVjdFNjcmlwdChwYXJhbXMpIHtcbiAgdmFyIHF1ZXJ5U3RyaW5nID0gcGFyYW1zICYmICFwYXJhbXMuYWR2YW5jZWRGcmF1ZFNpZ25hbHMgPyAnP2FkdmFuY2VkRnJhdWRTaWduYWxzPWZhbHNlJyA6ICcnO1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSBcIlwiLmNvbmNhdChWM19VUkwpLmNvbmNhdChxdWVyeVN0cmluZyk7XG4gIHZhciBoZWFkT3JCb2R5ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmICghaGVhZE9yQm9keSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZG9jdW1lbnQuYm9keSBub3QgdG8gYmUgbnVsbC4gU3RyaXBlLmpzIHJlcXVpcmVzIGEgPGJvZHk+IGVsZW1lbnQuJyk7XG4gIH1cblxuICBoZWFkT3JCb2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIHJldHVybiBzY3JpcHQ7XG59O1xuXG52YXIgcmVnaXN0ZXJXcmFwcGVyID0gZnVuY3Rpb24gcmVnaXN0ZXJXcmFwcGVyKHN0cmlwZSwgc3RhcnRUaW1lKSB7XG4gIGlmICghc3RyaXBlIHx8ICFzdHJpcGUuX3JlZ2lzdGVyV3JhcHBlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0cmlwZS5fcmVnaXN0ZXJXcmFwcGVyKHtcbiAgICBuYW1lOiAnc3RyaXBlLWpzJyxcbiAgICB2ZXJzaW9uOiBcIjMuNC4xXCIsXG4gICAgc3RhcnRUaW1lOiBzdGFydFRpbWVcbiAgfSk7XG59O1xuXG52YXIgc3RyaXBlUHJvbWlzZSA9IG51bGw7XG52YXIgb25FcnJvckxpc3RlbmVyID0gbnVsbDtcbnZhciBvbkxvYWRMaXN0ZW5lciA9IG51bGw7XG5cbnZhciBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcihyZWplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBTdHJpcGUuanMnKSk7XG4gIH07XG59O1xuXG52YXIgb25Mb2FkID0gZnVuY3Rpb24gb25Mb2FkKHJlc29sdmUsIHJlamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuU3RyaXBlKSB7XG4gICAgICByZXNvbHZlKHdpbmRvdy5TdHJpcGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdTdHJpcGUuanMgbm90IGF2YWlsYWJsZScpKTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgbG9hZFNjcmlwdCA9IGZ1bmN0aW9uIGxvYWRTY3JpcHQocGFyYW1zKSB7XG4gIC8vIEVuc3VyZSB0aGF0IHdlIG9ubHkgYXR0ZW1wdCB0byBsb2FkIFN0cmlwZS5qcyBhdCBtb3N0IG9uY2VcbiAgaWYgKHN0cmlwZVByb21pc2UgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc3RyaXBlUHJvbWlzZTtcbiAgfVxuXG4gIHN0cmlwZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJlc29sdmUgdG8gbnVsbCB3aGVuIGltcG9ydGVkIHNlcnZlciBzaWRlLiBUaGlzIG1ha2VzIHRoZSBtb2R1bGVcbiAgICAgIC8vIHNhZmUgdG8gaW1wb3J0IGluIGFuIGlzb21vcnBoaWMgY29kZSBiYXNlLlxuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlN0cmlwZSAmJiBwYXJhbXMpIHtcbiAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5TdHJpcGUpIHtcbiAgICAgIHJlc29sdmUod2luZG93LlN0cmlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzY3JpcHQgPSBmaW5kU2NyaXB0KCk7XG5cbiAgICAgIGlmIChzY3JpcHQgJiYgcGFyYW1zKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgICB9IGVsc2UgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gaW5qZWN0U2NyaXB0KHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKHNjcmlwdCAmJiBvbkxvYWRMaXN0ZW5lciAhPT0gbnVsbCAmJiBvbkVycm9yTGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIF9zY3JpcHQkcGFyZW50Tm9kZTtcblxuICAgICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkTGlzdGVuZXIpO1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yTGlzdGVuZXIpOyAvLyBpZiBzY3JpcHQgZXhpc3RzLCBidXQgd2UgYXJlIHJlbG9hZGluZyBkdWUgdG8gYW4gZXJyb3IsXG4gICAgICAgIC8vIHJlbG9hZCBzY3JpcHQgdG8gdHJpZ2dlciAnbG9hZCcgZXZlbnRcblxuICAgICAgICAoX3NjcmlwdCRwYXJlbnROb2RlID0gc2NyaXB0LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9zY3JpcHQkcGFyZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3NjcmlwdCRwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdCA9IGluamVjdFNjcmlwdChwYXJhbXMpO1xuICAgICAgfVxuXG4gICAgICBvbkxvYWRMaXN0ZW5lciA9IG9uTG9hZChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgb25FcnJvckxpc3RlbmVyID0gb25FcnJvcihyZWplY3QpO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRMaXN0ZW5lcik7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yTGlzdGVuZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7IC8vIFJlc2V0cyBzdHJpcGVQcm9taXNlIG9uIGVycm9yXG5cbiAgcmV0dXJuIHN0cmlwZVByb21pc2VbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBzdHJpcGVQcm9taXNlID0gbnVsbDtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9KTtcbn07XG52YXIgaW5pdFN0cmlwZSA9IGZ1bmN0aW9uIGluaXRTdHJpcGUobWF5YmVTdHJpcGUsIGFyZ3MsIHN0YXJ0VGltZSkge1xuICBpZiAobWF5YmVTdHJpcGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBzdHJpcGUgPSBtYXliZVN0cmlwZS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICByZWdpc3RlcldyYXBwZXIoc3RyaXBlLCBzdGFydFRpbWUpO1xuICByZXR1cm4gc3RyaXBlO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcblxudmFyIHN0cmlwZVByb21pc2UkMTtcbnZhciBsb2FkQ2FsbGVkID0gZmFsc2U7XG5cbnZhciBnZXRTdHJpcGVQcm9taXNlID0gZnVuY3Rpb24gZ2V0U3RyaXBlUHJvbWlzZSgpIHtcbiAgaWYgKHN0cmlwZVByb21pc2UkMSkge1xuICAgIHJldHVybiBzdHJpcGVQcm9taXNlJDE7XG4gIH1cblxuICBzdHJpcGVQcm9taXNlJDEgPSBsb2FkU2NyaXB0KG51bGwpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgLy8gY2xlYXIgY2FjaGUgb24gZXJyb3JcbiAgICBzdHJpcGVQcm9taXNlJDEgPSBudWxsO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH0pO1xuICByZXR1cm4gc3RyaXBlUHJvbWlzZSQxO1xufTsgLy8gRXhlY3V0ZSBvdXIgb3duIHNjcmlwdCBpbmplY3Rpb24gYWZ0ZXIgYSB0aWNrIHRvIGdpdmUgdXNlcnMgdGltZSB0byBkbyB0aGVpclxuLy8gb3duIHNjcmlwdCBpbmplY3Rpb24uXG5cblxuUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBnZXRTdHJpcGVQcm9taXNlKCk7XG59KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICBpZiAoIWxvYWRDYWxsZWQpIHtcbiAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICB9XG59KTtcbnZhciBsb2FkU3RyaXBlID0gZnVuY3Rpb24gbG9hZFN0cmlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGxvYWRDYWxsZWQgPSB0cnVlO1xuICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTsgLy8gaWYgcHJldmlvdXMgYXR0ZW1wdHMgYXJlIHVuc3VjY2Vzc2Z1bCwgd2lsbCByZS1sb2FkIHNjcmlwdFxuXG4gIHJldHVybiBnZXRTdHJpcGVQcm9taXNlKCkudGhlbihmdW5jdGlvbiAobWF5YmVTdHJpcGUpIHtcbiAgICByZXR1cm4gaW5pdFN0cmlwZShtYXliZVN0cmlwZSwgYXJncywgc3RhcnRUaW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBsb2FkU3RyaXBlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@stripe/stripe-js/dist/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@stripe/stripe-js/lib/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/lib/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStripe: () => (/* reexport safe */ _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__.loadStripe)\n/* harmony export */ });\n/* harmony import */ var _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/index.mjs */ \"(ssr)/./node_modules/@stripe/stripe-js/dist/index.mjs\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvbGliL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWdlbi1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3RyaXBlLWpzL2xpYi9pbmRleC5tanM/MjgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuLi9kaXN0L2luZGV4Lm1qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@stripe/stripe-js/lib/index.mjs\n");

/***/ })

};
;