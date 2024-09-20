/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: lightgray;\n  font-family: arial;\n}\n\n.leftSummary,\n.rightDetails,\n.dailyForecast,\n.hourlyForecast {\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid black;\n}\n\n.whereWhen {\n  border: 1px solid black;\n}\n\n.resolvedAddress {\n  font-weight: bold;\n}\n\n.localDatetime {\n}\n\nth,\ntd {\n  text-align: left;\n}\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n.dailyForecastCarousel,\n.hourlyForecastCarousel {\n  display: grid;\n  grid-auto-flow: column;\n  overflow: hidden;\n}\n\n.dailyWidget,\n.hourlyWidget {\n  border: 1px solid darkblue;\n  width: 100px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-repositorytemplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-repositorytemplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-repositorytemplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location) {\n  //returns full data from an api call to the given location\n  const baseURL =\n    \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\";\n  const key = \"Z3RK8ACQE7B4YJFZ9AEPWPQ4D\";\n  const fetchURL = baseURL + location + \"?key=\" + key;\n  // console.log(fetchURL);\n  try {\n    const response = await fetch(fetchURL, { mode: \"cors\" });\n    // console.log(response);\n    const result = await response.json();\n    console.log(result);\n    return result;\n  } catch (error) {\n    alert(\"Location not found.\");\n    console.log(\"There was an error!\");\n    console.log(error);\n  }\n}\n\n\n//# sourceURL=webpack://odin-repositorytemplate/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\nconsole.log(\"initializing\");\n\n//split this into api vs dom, add template structure to html file, make query selectors in index and add data to them\n\nasync function processWeatherDataAll(location) {\n  //pulls weather data for the given location and populates the UI modules\n  const data = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getWeather)(location);\n  processWeatherData(data);\n  processDailyForecast(data);\n  processHourlyForecast(data);\n}\n\nfunction processWeatherData(data) {\n  //for the current conditions: input of a full data object is formatted as needed and populated in the UI\n  const date = data.currentConditions.datetimeEpoch;\n  const timezoneOffset = data.tzoffset;\n  const localeDatetime = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getLocalizedDatetime)(date, timezoneOffset);\n  const renderLocaleDatetime = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatDatetime)(localeDatetime);\n\n  const renderAddress = data.resolvedAddress;\n  const renderTemp = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTemp)(data.currentConditions.temp);\n  const renderHumidity = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatPercent)(data.currentConditions.humidity);\n  const renderFeelsLike = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTemp)(data.currentConditions.feelslike);\n  const renderSunrise = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTime)(data.currentConditions.sunrise);\n  const renderSunset = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTime)(data.currentConditions.sunset);\n  const renderConditions = data.currentConditions.conditions;\n  const renderPrecipProb = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatPercent)(data.currentConditions.precipprob);\n  const renderPrecipType = data.currentConditions.preciptype;\n  const renderWindSpeedDir =\n    (0,_util__WEBPACK_IMPORTED_MODULE_2__.createWindDirText)(data.currentConditions.winddir) +\n    \" \" +\n    data.currentConditions.windspeed +\n    \" mph\";\n\n  document.querySelector(\".localDatetime\").textContent = renderLocaleDatetime;\n  document.querySelector(\".resolvedAddress\").textContent = renderAddress;\n  document.querySelector(\".currentTemp\").textContent = renderTemp;\n  document.querySelector(\".currentHumidity\").textContent = renderHumidity;\n  document.querySelector(\".currentFeelsLike\").textContent = renderFeelsLike;\n  document.querySelector(\".currentSunrise\").textContent = renderSunrise;\n  document.querySelector(\".currentSunset\").textContent = renderSunset;\n  document.querySelector(\".currentConditions\").textContent = renderConditions;\n  document.querySelector(\".currentPrecipProb\").textContent = renderPrecipProb;\n  document.querySelector(\".currentPrecipType\").textContent = renderPrecipType;\n  document.querySelector(\".currentWindSpeed\").textContent = renderWindSpeedDir;\n}\n\nfunction processDailyForecast(data) {\n  //for the daily conditions: input of a full data object is formatted as needed and populated in the UI\n\n  (0,_util__WEBPACK_IMPORTED_MODULE_2__.clearChildren)(document.querySelector(\".dailyForecastCarousel\"));\n  data.days.forEach((day) => {\n    const date = day.datetime;\n    const conditions = day.conditions;\n    const tempHigh = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTemp)(day.tempmax);\n    const tempLow = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTemp)(day.tempmin);\n    const windSpeedDir =\n      (0,_util__WEBPACK_IMPORTED_MODULE_2__.createWindDirText)(day.winddir) + \" \" + day.windspeed + \" mph\";\n    const precipProb = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatPercent)(day.precipprob);\n\n    addDailyForcastWidget(\n      date,\n      conditions,\n      tempHigh,\n      tempLow,\n      windSpeedDir,\n      precipProb\n    );\n  });\n}\n\nfunction processHourlyForecast(data) {\n  //for the hourly conditions: input of a full data object is formatted as needed and populated in the UI\n\n  (0,_util__WEBPACK_IMPORTED_MODULE_2__.clearChildren)(document.querySelector(\".hourlyForecastCarousel\"));\n  data.days.forEach((day) => {\n    day.hours.forEach((hour) => {\n      const date = day.datetime;\n      const timezoneOffset = data.tzoffset;\n\n      const hourThis = hour.datetimeEpoch;\n\n      const localeDatetime = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getLocalizedDatetime)(hourThis, timezoneOffset);\n      const renderLocaleDatetime = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTimeShort)(localeDatetime);\n\n      const conditions = hour.conditions;\n      const temp = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatTemp)(hour.temp);\n      const windSpeedDir =\n        (0,_util__WEBPACK_IMPORTED_MODULE_2__.createWindDirText)(hour.winddir) + \" \" + hour.windspeed + \" mph\";\n      const precipProb = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatPercent)(day.precipprob);\n\n      addHourlyForcastWidget(\n        date,\n        renderLocaleDatetime,\n        conditions,\n        temp,\n        windSpeedDir,\n        precipProb\n      );\n    });\n  });\n}\n\nfunction addDailyForcastWidget(\n  date,\n  conditions,\n  tempHigh,\n  tempLow,\n  windSpeedDir,\n  precipProb\n) {\n  //adds a single daily forcast widget to the DOM with the given arguments\n  const carousel = document.querySelector(\".dailyForecastCarousel\");\n\n  const widget = document.createElement(\"div\");\n  widget.classList.add(\"dailyWidget\");\n\n  const dateDiv = document.createElement(\"div\");\n  dateDiv.textContent = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatDateShort)(date);\n\n  const conditionsDiv = document.createElement(\"div\");\n  conditionsDiv.textContent = conditions;\n\n  const tempsDiv = document.createElement(\"div\");\n  tempsDiv.textContent = tempHigh + \" / \" + tempLow;\n\n  const windDiv = document.createElement(\"div\");\n  windDiv.textContent = windSpeedDir;\n\n  const precipDiv = document.createElement(\"div\");\n  precipDiv.textContent = precipProb;\n\n  widget.appendChild(dateDiv);\n  widget.appendChild(tempsDiv);\n  widget.appendChild(conditionsDiv);\n\n  widget.appendChild(precipDiv);\n  widget.appendChild(windDiv);\n\n  carousel.append(widget);\n}\n\nfunction addHourlyForcastWidget(\n  date,\n  hour,\n  conditions,\n  temp,\n  windSpeedDir,\n  precipProb\n) {\n  //adds a single hourly forcast widget to the DOM with the given arguments\n\n  const carousel = document.querySelector(\".hourlyForecastCarousel\");\n\n  const widget = document.createElement(\"div\");\n  widget.classList.add(\"hourlyWidget\");\n\n  const dateDiv = document.createElement(\"div\");\n  dateDiv.textContent = (0,_util__WEBPACK_IMPORTED_MODULE_2__.formatDateShort)(date);\n\n  const hourDiv = document.createElement(\"div\");\n  hourDiv.textContent = hour;\n\n  const conditionsDiv = document.createElement(\"div\");\n  conditionsDiv.textContent = conditions;\n  const tempDiv = document.createElement(\"div\");\n  tempDiv.textContent = temp;\n\n  const windDiv = document.createElement(\"div\");\n  windDiv.textContent = windSpeedDir;\n\n  const precipDiv = document.createElement(\"div\");\n  precipDiv.textContent = precipProb;\n\n  widget.appendChild(dateDiv);\n  widget.appendChild(hourDiv);\n  widget.appendChild(tempDiv);\n  widget.appendChild(conditionsDiv);\n\n  widget.appendChild(precipDiv);\n  widget.appendChild(windDiv);\n\n  carousel.append(widget);\n}\n\nfunction setSearchButtonListener() {\n  //triggers UI population with newly searched term upon clicking the search button\n  const searchButton = document.querySelector(\"#searchButton\");\n  searchButton.addEventListener(\"click\", () => {\n    const searchValue = document.querySelector(\"#searchInput\").value;\n    processWeatherDataAll(searchValue);\n  });\n}\n\nfunction setSearchInputListener() {\n  //triggers UI population with newly searched term upon hitting the enter key from the input element\n\n  const searchInput = document.querySelector(\"#searchInput\");\n  searchInput.addEventListener(\"keydown\", (event) => {\n    if (event.key === \"Enter\") {\n      const searchValue = document.querySelector(\"#searchInput\").value;\n      processWeatherDataAll(searchValue);\n    }\n  });\n}\n\nfunction setAllScrolling() {\n  //consolidated function to set scroll behavior on page\n  const carouselDaily = document.querySelector(\".dailyForecastCarousel\");\n  addScrollingTouch(carouselDaily);\n  addScrollingWheel(carouselDaily);\n\n  const carouselHourly = document.querySelector(\".hourlyForecastCarousel\");\n  addScrollingTouch(carouselHourly);\n  addScrollingWheel(carouselHourly);\n}\n\nfunction addScrollingTouch(element) {\n  //sets scroll by touch functionality for mobile\n  const carousel = element;\n\n  let isDown = false;\n  let startX;\n  let scrollLeft;\n\n  carousel.addEventListener(\"touchstart\", (event) => {\n    console.log(\"touch started\");\n    isDown = true;\n    startX = event.touches[0].pageX - carousel.offsetLeft;\n    scrollLeft = carousel.scrollLeft;\n  });\n\n  carousel.addEventListener(\"touchmove\", (event) => {\n    console.log(\"touch moving\");\n    if (!isDown) return;\n    event.preventDefault();\n\n    const x = event.touches[0].pageX - carousel.offsetLeft;\n    const walk = x - startX;\n    carousel.scrollLeft = scrollLeft - walk;\n  });\n  carousel.addEventListener(\"touchend\", () => {\n    console.log(\"touch ending\");\n    isDown = false;\n  });\n  carousel.addEventListener(\"touchcancel\", () => {\n    console.log(\"touch canceled\");\n    isDown = false;\n  });\n}\n\nfunction addScrollingWheel(element) {\n  //sets scroll by mouse wheel functionality\n\n  const carousel = element;\n  carousel.addEventListener(\"wheel\", (event) => {\n    //prevent default vertical scroll\n    event.preventDefault();\n    carousel.scrollLeft += event.deltaY;\n  });\n}\n\nlet main = (0,_api__WEBPACK_IMPORTED_MODULE_1__.getWeather)(\"anchorage\");\n// processWeatherData(\"anchorage\");\n// processDailyForecast(\"anchorage\");\n// processHourlyForecast(\"anchorage\");\n\nprocessWeatherDataAll(\"anchorage\");\nsetSearchButtonListener();\nsetSearchInputListener();\nsetAllScrolling();\n\n// window.formatTime = formatTime;\n\nwindow.main = main;\n\nwindow.createWindDirText = _util__WEBPACK_IMPORTED_MODULE_2__.createWindDirText;\n// window.getLocalizedDatetime = getLocalizedDatetime;\n\n// window.getWeather = getWeather;\n\n\n//# sourceURL=webpack://odin-repositorytemplate/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearChildren: () => (/* binding */ clearChildren),\n/* harmony export */   createWindArrow: () => (/* binding */ createWindArrow),\n/* harmony export */   createWindDirText: () => (/* binding */ createWindDirText),\n/* harmony export */   formatDateShort: () => (/* binding */ formatDateShort),\n/* harmony export */   formatDatetime: () => (/* binding */ formatDatetime),\n/* harmony export */   formatPercent: () => (/* binding */ formatPercent),\n/* harmony export */   formatTemp: () => (/* binding */ formatTemp),\n/* harmony export */   formatTime: () => (/* binding */ formatTime),\n/* harmony export */   formatTimeShort: () => (/* binding */ formatTimeShort),\n/* harmony export */   getLocalizedDatetime: () => (/* binding */ getLocalizedDatetime),\n/* harmony export */   rotateSVG: () => (/* binding */ rotateSVG)\n/* harmony export */ });\nfunction formatPercent(value) {\n  //returns a rounded value with a percent symbol appended\n  return Math.round(value) + \"%\";\n}\n\nfunction formatTime(timeString) {\n  //takes a datetime object and returns a string in the format HH:MM AM/PM\n\n  let [hours, minutes, seconds] = timeString.split(\":\");\n  hours = parseInt(hours);\n\n  const period = hours >= 12 ? \"PM\" : \"AM\";\n\n  hours = hours % 12 || 12;\n\n  const result = `${hours}:${minutes} ${period}`;\n\n  return result;\n}\n\nfunction formatTemp(value) {\n  //returns a rounded number and appends a degree symbol to format for temperature\n  return Math.round(value) + \"\\u00B0\";\n}\n\nfunction getLocalizedDatetime(epoch, timezoneOffset) {\n  //given an epoch (seconds) and a timezone offset (hours) return a localized datetime object\n  const date = new Date(epoch * 1000);\n  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;\n  const localDateTime = new Date(utc + 60 * 60 * 1000 * timezoneOffset);\n\n  return localDateTime;\n}\n\nfunction formatDatetime(dateObject) {\n  //takes a datetime object and returns a string in the format mm/dd/yyyy MM:HH AM/PM\n  const year = dateObject.getFullYear();\n  const month = dateObject.getMonth() + 1;\n  const day = dateObject.getDay();\n  const hour = dateObject.getHours();\n  const minute = String(dateObject.getMinutes()).padStart(2, \"0\");\n\n  const hourTwelve = hour % 12 || 12;\n  const period = hour >= 12 ? \"PM\" : \"AM\";\n\n  return `${month}/${day}/${year} ${hourTwelve}:${minute} ${period}`;\n}\n\nfunction formatTimeShort(dateObject) {\n  //takes a datetime object and returns a string in the format HH AM/PM\n  const year = dateObject.getFullYear();\n  const month = dateObject.getMonth() + 1;\n  const day = dateObject.getDay();\n  const hour = dateObject.getHours();\n  const minute = dateObject.getMinutes();\n\n  const hourTwelve = hour % 12 || 12;\n  const period = hour >= 12 ? \"PM\" : \"AM\";\n\n  return `${hourTwelve} ${period}`;\n}\n\nfunction createWindArrow(direction) {\n  //takes an angle / degrees and returns an arrow svg rotated to that angle\n  const arrow = document.createElement(\"i\");\n  arrow.classList.add(\"material-symbols-outlined\");\n  arrow.textContent = \"north\";\n  rotateSVG(arrow, direction);\n\n  return arrow;\n}\n\nfunction createWindDirText(direction) {\n  //takes an angle / degrees and returns a text abbreviation of the cardinal direction\n  const directions = [\"N\", \"NE\", \"E\", \"SE\", \"S\", \"SW\", \"W\", \"NW\"];\n  const index = Math.round((direction % 360) / 45);\n  return directions[index % 8];\n}\n\nfunction formatDateShort(dateString) {\n  //formats a date string originating in the format \"YYYY-MM-DD to e.g. Fri 10/1\"\n\n  const days = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n  const date = new Date(dateString);\n\n  const dayOfWeek = days[date.getDay()];\n  const month = date.getMonth() + 1;\n  const day = date.getDate();\n\n  const formattedDate = `${dayOfWeek} ${month}/${day}`;\n\n  return formattedDate;\n}\n\nfunction clearChildren(parent) {\n  //clears all child elements from a given parent element\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nfunction rotateSVG(target, angle) {\n  //rotates a given element (e.g. SVG) given a target element and angle to rotate\n  if (angle >= 0 && angle <= 360) {\n    target.style.visibility = \"visible\";\n    target.style.transform = \"rotate(\" + angle + \"deg)\";\n  } else {\n    target.style.visibility = \"hidden\";\n  }\n}\n\n\n//# sourceURL=webpack://odin-repositorytemplate/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;