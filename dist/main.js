/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/compare-week/index.js":
/*!********************************************!*\
  !*** ./node_modules/compare-week/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isDateObj = __webpack_require__(/*! is-date-obj */ "./node_modules/is-date-obj/index.js");
const weekIdentifier = __webpack_require__(/*! week-identifier */ "./node_modules/week-identifier/index.js");

module.exports = (a, b) => {
	if (typeof a !== 'number' && !isDateObj(a)) {
		throw new TypeError(`Expected a number or Date, got ${typeof a}`);
	}

	if (typeof b !== 'number' && !isDateObj(b)) {
		throw new TypeError(`Expected a number or Date, got ${typeof b}`);
	}

	return weekIdentifier(isDateObj(a) ? a : new Date(a * 1000)) === weekIdentifier(isDateObj(b) ? b : new Date(b * 1000));
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global Styles */
.icon {
    height: 10px;
    width: 10px;
}

:root {
    --text: #10090c;
    --background: #fdfcfc;
    --primary: #b7d7c9;
    --secondary: #d8e7e9;
    --accent: #579d5a;
}

* {
    box-sizing: border-box;
}

body {
    font-family: "Roboto", sans-serif;
    width: 100vw;
    height: 100vh;
    padding: 10px;
    background-color: grey;
}

/* Content Container */
.content {
    height: 100%;
    display: grid;
    grid-template-columns: 200px 1fr;
    border-radius: 20px;
    overflow: hidden;
}

/* Dashboard */
.dashboard {
    background-color: black;
    padding: 20px;
    display: grid;
    align-content: start;
    gap: 10px;
}

.logo {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
}

.projects-tab {
    display: grid;
    gap: 10px;
}

/* Default Projects Container */
.default-projects-container {
    display: grid;
    gap: 10px;
}

/* Created Projects Container */
.created-projects-container.inactive {
    display: none;
}

.created-projects-container.active {
    margin-left: 13px;
    border-left: 3px solid white;
    display: grid;
    gap: 3px;
}

/* Project Card */
.project-card {
    padding: 5px;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 1fr 25px 25px;
    gap: 5px;
    align-content: center;
}

.project-card button {
    height: 20px;
}

.project-card:hover,
.project-adder:hover {
    background-color: grey;
}

.created-projects-container.active > * {
    margin-left: 10px;
    padding: 4px;
    border-radius: 6px;
    font-size: 14px;
    color: white;
}

/* Project and Dropdown Icons */
#home-project,
#completed-project,
#today-project,
#this-week-project,
#created-projects-dropdown {
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    justify-content: start;
    grid-template-columns: auto 1fr;
    color: white;
}

#home-project .icon,
#completed-project .icon,
#today-project .icon,
#this-week-project .icon,
#created-projects-dropdown .icon {
    display: block;
    width: 20px;
    height: 20px;
    fill: white;
}

#created-projects-dropdown .icon.dropdown {
    fill: black;
    height: 17px;
    width: 17px;
}

#created-projects-dropdown {
    background-color: grey;
}

#created-projects-dropdown .icon.dropdown {
    fill: white;
}

.created-projects-container.active .project-name,
.to-do-title,
.parent-project-name {
    overflow: auto;
}

/* Project Adder */
.project-adder {
    padding: 5px 0;
    border: 0px;
    display: grid;
    grid-template-columns: 20px auto;
    grid-template-rows: 20px;
    gap: 10px;
    justify-content: start;
    align-items: center;
    justify-items: start;
    background-color: transparent;
    color: white;
}

.project-adder .icon,
.to-do-adder .icon {
    width: 20px;
    height: 20px;
    fill: white;
}

/* To-Do Window */
.to-do-window {
    background-color: rgb(187, 181, 181);
    padding: 20px;
    display: grid;
    align-content: start;
    gap: 10px;
}

.parent-project-name {
    font-size: 20px;
    font-weight: 600;
}

.sort-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3px;
}

label[for="sorter"] {
    font-size: 14px;
}

#sorter {
    display: block;
    width: 200px;
    height: 25px;

    border: 2px solid grey;
    border-radius: 6px;
}

#sorter:focus {
    outline: none ;
    border: 2px solid black;
}


/* To-Do Tab */
.to-do-tab {
    display: grid;
    gap: 10px;
}

/* To-Do Container */
.to-do-container {
    height: 45px;
    padding: 10px;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 25px 1fr 130px 25px 25px 25px;
    gap: 5px;
    align-content: center;
    background-color: white;
}

.to-do-due-date.upcoming {
    padding: 3px;
    border: 2px solid #6dcb68;
    font-size: 14px;
    color: #6dcb68;
    border-radius: 5px;
    text-transform: uppercase;
}

.to-do-due-date.late {
    padding: 3px;
    border: 2px solid #d0645d;
    font-size: 14px;
    color: #d0645d;
    border-radius: 5px;
    text-transform: uppercase;
}

/* To-Do Adder */
.to-do-adder {
    height: 45px;
    width: 100%;
    padding: 10px;
    border: 3px solid white;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-align: justify;
    background-color: transparent;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 10px;
}

/* To-Do Info Background */
.to-do-info-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
}

/* To-Do Info Container */
.to-do-info-container {
    width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
    display: grid;
    grid-template-rows: 30px;
    gap: 5px;
}

.close .icon {
    height: 20px;
    width: 20px;
}

.close .icon:hover {
    fill: red;
}

.info-field {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 100px 100px;
}

.to-do-info-label {
    font-weight: 600;
}

/* Form Container */
.form-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(101, 101, 101, 0.22);
    backdrop-filter: blur(1px);
    display: grid;
    align-items: center;
    justify-content: center;
}

/* Form Styles */
form {
    background-color: white;
    border-radius: 10px;
    padding: 25px;
    display: grid;
    gap: 10px;
}

form input,
form select,
form textarea {
    width: 100%;
    display: block;
    border-radius: 5px;
    border: 2px solid rgb(215, 211, 211);
    padding: 5px 7px;
}

form input:focus,
form select:focus,
form textarea:focus {
    outline: none;
    border: 2px solid black;
}

input[type=submit],
input[type=button] {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    border: 0px;
    background-color: rgb(82, 77, 77);
    color: white;
}

input[type=submit]:hover,
input[type=button]:hover {
    border-color: black;
    background-color: black;
}

.delete,
.edit {
    border: none;
    background-color: transparent;
}

/* Icon Visibility */
.project-card .icon,
.to-do-container .icon {
    display: block;
    height: 16px;
    width: 16px;
}

.project-card .icon {
    fill: white;
}

.to-do-container .icon {
    fill: black;
}

.delete:hover .icon {
    display: block;
    fill: red;
}

.edit:hover .icon {
    display: block;
    fill: green;
}

/* Completed To-Do Style */
.to-do-container.completed {
    background-color: rgb(173, 238, 173);
}


@media (max-width: 850px) {

    #home-project,
    #completed-project,
    #today-project,
    #this-week-project,
    #created-projects-dropdown {
        white-space: nowrap;
    }

    /* Adjust the dashboard and to-do window to stack on top of each other */
    .content {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }

    .default-projects-container {
        padding: 10px 0;
        grid-auto-flow: column;

        gap: 10px;
        width: 100%;
        overflow: auto;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\n.icon {\n    height: 10px;\n    width: 10px;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap');\n\n:root {\n    --text: #10090c;\n    --background: #fdfcfc;\n    --primary: #b7d7c9;\n    --secondary: #d8e7e9;\n    --accent: #579d5a;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    background-color: grey;\n}\n\n/* Content Container */\n.content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n/* Dashboard */\n.dashboard {\n    background-color: black;\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n}\n\n.logo {\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: white;\n}\n\n.projects-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* Default Projects Container */\n.default-projects-container {\n    display: grid;\n    gap: 10px;\n}\n\n/* Created Projects Container */\n.created-projects-container.inactive {\n    display: none;\n}\n\n.created-projects-container.active {\n    margin-left: 13px;\n    border-left: 3px solid white;\n    display: grid;\n    gap: 3px;\n}\n\n/* Project Card */\n.project-card {\n    padding: 5px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 1fr 25px 25px;\n    gap: 5px;\n    align-content: center;\n}\n\n.project-card button {\n    height: 20px;\n}\n\n.project-card:hover,\n.project-adder:hover {\n    background-color: grey;\n}\n\n.created-projects-container.active > * {\n    margin-left: 10px;\n    padding: 4px;\n    border-radius: 6px;\n    font-size: 14px;\n    color: white;\n}\n\n/* Project and Dropdown Icons */\n#home-project,\n#completed-project,\n#today-project,\n#this-week-project,\n#created-projects-dropdown {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: start;\n    grid-template-columns: auto 1fr;\n    color: white;\n}\n\n#home-project .icon,\n#completed-project .icon,\n#today-project .icon,\n#this-week-project .icon,\n#created-projects-dropdown .icon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: black;\n    height: 17px;\n    width: 17px;\n}\n\n#created-projects-dropdown {\n    background-color: grey;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: white;\n}\n\n.created-projects-container.active .project-name,\n.to-do-title,\n.parent-project-name {\n    overflow: auto;\n}\n\n/* Project Adder */\n.project-adder {\n    padding: 5px 0;\n    border: 0px;\n    display: grid;\n    grid-template-columns: 20px auto;\n    grid-template-rows: 20px;\n    gap: 10px;\n    justify-content: start;\n    align-items: center;\n    justify-items: start;\n    background-color: transparent;\n    color: white;\n}\n\n.project-adder .icon,\n.to-do-adder .icon {\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n/* To-Do Window */\n.to-do-window {\n    background-color: rgb(187, 181, 181);\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n}\n\n.parent-project-name {\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.sort-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 3px;\n}\n\nlabel[for=\"sorter\"] {\n    font-size: 14px;\n}\n\n#sorter {\n    display: block;\n    width: 200px;\n    height: 25px;\n\n    border: 2px solid grey;\n    border-radius: 6px;\n}\n\n#sorter:focus {\n    outline: none ;\n    border: 2px solid black;\n}\n\n\n/* To-Do Tab */\n.to-do-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* To-Do Container */\n.to-do-container {\n    height: 45px;\n    padding: 10px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 25px 1fr 130px 25px 25px 25px;\n    gap: 5px;\n    align-content: center;\n    background-color: white;\n}\n\n.to-do-due-date.upcoming {\n    padding: 3px;\n    border: 2px solid #6dcb68;\n    font-size: 14px;\n    color: #6dcb68;\n    border-radius: 5px;\n    text-transform: uppercase;\n}\n\n.to-do-due-date.late {\n    padding: 3px;\n    border: 2px solid #d0645d;\n    font-size: 14px;\n    color: #d0645d;\n    border-radius: 5px;\n    text-transform: uppercase;\n}\n\n/* To-Do Adder */\n.to-do-adder {\n    height: 45px;\n    width: 100%;\n    padding: 10px;\n    border: 3px solid white;\n    border-radius: 6px;\n    font-size: 20px;\n    font-weight: 700;\n    color: white;\n    text-align: justify;\n    background-color: transparent;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: start;\n    gap: 10px;\n}\n\n/* To-Do Info Background */\n.to-do-info-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: blur(5px);\n}\n\n/* To-Do Info Container */\n.to-do-info-container {\n    width: 300px;\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    max-width: 80%;\n    max-height: 80%;\n    overflow: auto;\n    display: grid;\n    grid-template-rows: 30px;\n    gap: 5px;\n}\n\n.close .icon {\n    height: 20px;\n    width: 20px;\n}\n\n.close .icon:hover {\n    fill: red;\n}\n\n.info-field {\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 100px 100px;\n}\n\n.to-do-info-label {\n    font-weight: 600;\n}\n\n/* Form Container */\n.form-container {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(101, 101, 101, 0.22);\n    backdrop-filter: blur(1px);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Form Styles */\nform {\n    background-color: white;\n    border-radius: 10px;\n    padding: 25px;\n    display: grid;\n    gap: 10px;\n}\n\nform input,\nform select,\nform textarea {\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2px solid rgb(215, 211, 211);\n    padding: 5px 7px;\n}\n\nform input:focus,\nform select:focus,\nform textarea:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\ninput[type=submit],\ninput[type=button] {\n    width: 100%;\n    height: 25px;\n    border-radius: 5px;\n    border: 0px;\n    background-color: rgb(82, 77, 77);\n    color: white;\n}\n\ninput[type=submit]:hover,\ninput[type=button]:hover {\n    border-color: black;\n    background-color: black;\n}\n\n.delete,\n.edit {\n    border: none;\n    background-color: transparent;\n}\n\n/* Icon Visibility */\n.project-card .icon,\n.to-do-container .icon {\n    display: block;\n    height: 16px;\n    width: 16px;\n}\n\n.project-card .icon {\n    fill: white;\n}\n\n.to-do-container .icon {\n    fill: black;\n}\n\n.delete:hover .icon {\n    display: block;\n    fill: red;\n}\n\n.edit:hover .icon {\n    display: block;\n    fill: green;\n}\n\n/* Completed To-Do Style */\n.to-do-container.completed {\n    background-color: rgb(173, 238, 173);\n}\n\n\n@media (max-width: 850px) {\n\n    #home-project,\n    #completed-project,\n    #today-project,\n    #this-week-project,\n    #created-projects-dropdown {\n        white-space: nowrap;\n    }\n\n    /* Adjust the dashboard and to-do window to stack on top of each other */\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr;\n    }\n\n    .default-projects-container {\n        padding: 10px 0;\n        grid-auto-flow: column;\n\n        gap: 10px;\n        width: 100%;\n        overflow: auto;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/generate-unique-id/index.js":
/*!**************************************************!*\
  !*** ./node_modules/generate-unique-id/index.js ***!
  \**************************************************/
/***/ ((module) => {

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit).toString();
}

function filterSymbols(excludeSymbols, group) {
  let newGroup = group;
  excludeSymbols.forEach((symbol) => {
    newGroup = newGroup.replace(symbol, '');
  });

  return newGroup;
}

function createId(availableChars, idLength) {
  let id = '';

  for (let i = 0; i < idLength; i += 1) {
    id += availableChars[getRandomNumber(availableChars.length)];
  }

  return id;
}

function generateUniqueId({
  length = 20,
  useLetters = true,
  useNumbers = true,
  includeSymbols = [],
  excludeSymbols = [],
} = {}) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let availableChars = [];
  let lettersArr = [];
  let numbersArr = [];

  if (useLetters) {
    if (excludeSymbols.length) letters = filterSymbols(excludeSymbols, letters);
    lettersArr = letters.split('');
  }

  if (useNumbers) {
    if (excludeSymbols.length) numbers = filterSymbols(excludeSymbols, numbers);
    numbersArr = numbers.split('');
  }

  availableChars = [...lettersArr, ...numbersArr, ...includeSymbols];

  return createId(availableChars, length);
}

module.exports = generateUniqueId;


/***/ }),

/***/ "./node_modules/is-date-obj/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-date-obj/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";

module.exports = val => Object.prototype.toString.call(val) === '[object Date]';


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/week-identifier/index.js":
/*!***********************************************!*\
  !*** ./node_modules/week-identifier/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
/**
 * week-identifier <https://github.com/throll/week-identifier>
 *
 * Copyright (c) 2016 Clément Billiot, contributors.
 * Released under the MIT license.
 */



module.exports = weekIdentifier;
module.exports.weekIdentifier = weekIdentifier;
module.exports.dateFromWeek = dateFromWeek;

/**
 * Get unique and sequential week identifier of current date or given valid `Date` string format
 *
 * **Example:**
 *
 * ```js
 * var weekIdentifier = require('current-week-number');
 *
 * // august 12, 2016 (current date)
 * weekIdentifier();
 * //=> 2432
 *
 * weekIdentifier('January 05, 1970 03:00:00');
 * //=> 1
 *
 * weekIdentifier(new Date('August 12, 2016'));
 * //=> 2432
 *
 * weekIdentifier('08/12/2016');
 * //=> 2432
 *
 * weekIdentifier('August 12, 2016');
 * //=> 2432
 *
 * weekIdentifier(new Date('August 19, 2016'));
 * //=> 2433
 *
 * weekIdentifier('08/19/2016');
 * //=>  2433
 * ```
 *
 * @name weekIdentifier
 * @param  {String} `[date]` every valid Date-ish string format
 * @return {Number}
 * @api public
 */
function weekIdentifier(date) {
  var instance;

  if (typeof date === 'string' && date.length) {
    instance = new Date(date);
  } else if (date instanceof Date) {
    instance = date;
  } else {
    instance = new Date();
  }
  // Create a copy of this date object
  var target = new Date(instance.valueOf());
  // Starting date point for our sequence
  var lastDayOfWeekZeroTimestamp = new Date('January 5, 1970 00:00:00').getTime() - 1;
  // Number of week from our starting date
  var weekNumberdiff = Math.ceil((target.getTime() - lastDayOfWeekZeroTimestamp) / (24 * 3600 * 1000 * 7));

  return weekNumberdiff;
}

/**
 * Get monday date of the given week identifier
 *
 *  * **Example:**
 *
 * ```js
 * var weekIdentifier = require('current-week-number');
 *
 * weekIdentifier.dateFromWeek(2403);
 * //=> January 18, 2016 00:00:00
 *
 * ```
 * @name weekIdentifier.dateFromWeek
 * @param  {Number} weekIdentifier
 * @return {Date} Monday of the given week identifier or January 5, 1970 00:00:00 if weekIdentifier is not > 0.
 */
function dateFromWeek(weekIdentifier) {
  if (isNaN(parseFloat(weekIdentifier))) {
    return NaN;
  } else {
    // Starting date point for our sequence
    var firstDayOfWeekOne, mondayOfWeek;
    mondayOfWeek = firstDayOfWeekOne = new Date('January 5, 1970 00:00:00');
    if (weekIdentifier > 0) {
      mondayOfWeek = new Date(((weekIdentifier - 1) * (24 * 3600 * 1000 * 7)) + firstDayOfWeekOne.getTime());
    }
    return mondayOfWeek;
  }
}


/***/ }),

/***/ "./src/js_modules/Project.js":
/*!***********************************!*\
  !*** ./src/js_modules/Project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo.js */ "./src/js_modules/ToDo.js");


const generateUniqueId = __webpack_require__(/*! generate-unique-id */ "./node_modules/generate-unique-id/index.js");

/**
 * Represents a project item.
 *
 * @class
 * @param {string} title - The title of the project. 
 * @param {Array} toDoItems - Array containing ToDo objects.
 * @param {string} id - ID for the proejct.
 */
class Project {

    // Storage of all "Project" instances.
    static projects = [];

    // Home project.
    static home;

    // Load saved "Project.projects" from the local storage.
    static loadProjects() {
        // Load serialized saved projects.
        const serializedSavedProject = localStorage.getItem("Project.projects");
        if (serializedSavedProject) {

            // Parse the serialized save projects.
            const parsedSerializedSavedProject = (0,flatted__WEBPACK_IMPORTED_MODULE_0__.parse)(serializedSavedProject);

            // Create blank "Project" objects to be populated.
            for (let i = 0; i < parsedSerializedSavedProject.length; i++) {
                new Project(null, null, null);
            }

            // Populate the blank projects with "project tile", "to-do items", and "project id" from local storage.
            for (let i = 0; i < Project.projects.length; i++) {

                // Add the projects' respective titles.
                Project.projects[i].title = parsedSerializedSavedProject[i].title;

                // Add the projects' respective to-do items.
                parsedSerializedSavedProject[i].toDoItems.forEach(toDoItem => {
                    Project.projects[i].addToDo(new _ToDo_js__WEBPACK_IMPORTED_MODULE_1__.ToDo(...Object.values(toDoItem)));
                })

                // Add the projects's respective ID.
                Project.projects[i].id = parsedSerializedSavedProject[i].id;

                // Save changes.
                Project.#saveChanges();
            }
        }
        // If there is no projects to be load, create default "Home" project and "Completed" project.
        else {
            new Project("Home", null, "home-project");
            new Project("Completed", null, "completed-project");
            new Project("Today", null, "today-project");
            new Project("This Week", null, "this-week-project");
        }

        // Put home project to static variable.
        Project.home = Project.projects.find(project => project.id === "home-project");
    }

    // Project Constructor.
    constructor(title = null, toDoItems = null, id = null) {

        // Set the project title.
        this.title = (title !== null) ? title : null;

        // Set the "toDoItems" array.
        if (toDoItems !== null) {
            this.toDoItems = toDoItems;
        }
        // Set the "toDoItems" to blank array if none is provided during instantiation.
        else {
            this.toDoItems = [];
        }

        // Set project's ID to given project ID during project instantiation.
        if (id !== null) {
            this.id = id;
        }
        // Add a generated 15-character ID to project if nothing was provided during Project's instantiation.
        else {
            this.id = generateUniqueId({ length: 15, useNumbers: true, useLetters: true });
        }

        // Insert new Project object inside "projects" array.
        Project.projects.push(this);

        // Save serialized changes to local storage.
        Project.#saveChanges();
    }

    // Delete project from the "Project.projects" array.
    delete() {
        Project.projects.splice(Project.projects.indexOf(this), 1);

        // Save serialized changes to local storage.
        Project.#saveChanges();
    }

    // Edit project title.
    setProjectTitle(newTitle) {
        this.title = newTitle;

        // Save serialized changes to local storage.
        Project.#saveChanges();
    }

    // Add a ToDo Item inside the project.
    addToDo(ToDo) {

        // Set the project reference property of the ToDo item to 'this' current project instance.
        ToDo.project = this;

        // Add the to do item to 'this' projects array of to do items.
        this.toDoItems.push(ToDo);

        // Save serialized changes to local storage.
        Project.#saveChanges();
    }

    // Delete a ToDo Item inside the project's "toDoItems" array.
    deleteToDo(ToDo) {
        this.toDoItems.splice(this.toDoItems.indexOf(ToDo), 1);

        // Save serialized changes to local storage.
        Project.#saveChanges();
    }

    // Replace ToDo items inside the project's "toDoItems" array.
    replaceToDo(newToDo, oldToDo) {

        // Set new ToDo item's project reference to this project.
        newToDo.project = this;

        // Replace ToDo item with the new ToDo item.
        this.toDoItems[this.toDoItems.indexOf(oldToDo)] = newToDo;

        // Save serialized changes to local storage.
        Project.#saveChanges();
    }

    static #saveChanges() {
        // Save serialized changes to local storage.
        localStorage.setItem("Project.projects", (0,flatted__WEBPACK_IMPORTED_MODULE_0__.stringify)(Project.projects));
    }
}


/***/ }),

/***/ "./src/js_modules/ToDo.js":
/*!********************************!*\
  !*** ./src/js_modules/ToDo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
/**
 * @class
 * @classdesc Represents a to-do item with various details.
 * @param {string} title - The title or name of the to-do item.
 * @param {string} description - A detailed description of the to-do item.
 * @param {Date} dueDate - The due date for completing the to-do item.
 * @param {string} priority - The priority level of the to-do item (e.g., "High", "Medium", "Low").
 * @param {string} notes - Additional notes or comments related to the to-do item.
 */
class ToDo {
    constructor(title, description, dueDate, priority, notes, completed=null, dateAndTimeCreated=null, dateModified=null, project = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = (completed !== null) ? completed : false;
        this.dateAndTimeCreated = (dateAndTimeCreated !== null) ? dateAndTimeCreated : new Date().toLocaleString();
        this.dateModified = (dateModified !== null) ? dateModified : null;
        this.project = (project !== null) ? project : null;
    }

    delete() {
        this.project.deleteToDo(this);
    }
}

/***/ }),

/***/ "./src/js_modules/createProjectCard.js":
/*!*********************************************!*\
  !*** ./src/js_modules/createProjectCard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectCard: () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _popUpProjectEditorForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUpProjectEditorForm.js */ "./src/js_modules/popUpProjectEditorForm.js");
/* harmony import */ var _selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedProjectManager.js */ "./src/js_modules/selectedProjectManager.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.js */ "./src/js_modules/Project.js");



 
function createProjectCard(project) {

    // Create a card for "Project".
    const projectCard = document.createElement("div");
    projectCard.className = "project-card"
    projectCard.id = project.id;

    // Add referece to the project object.
    projectCard.projectReference = project;

    // Add 'home' icon to home-project.
    if (project.id === "home-project") {
        const homeIcon = document.createElement("div");
        homeIcon.className = "icon-container"
        homeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>`;
        projectCard.appendChild(homeIcon);
    }
    // Add 'completed' icon to completed-project.
    else if (project.id === "completed-project") {
        const completedIcon = document.createElement("div");
        completedIcon.className = "icon-container"
        completedIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>check-circle</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>`;
        projectCard.appendChild(completedIcon);
    }
    // Add 'today' icon to today-project.
    else if (project.id === "today-project") {
        const todayIcon = document.createElement("div");
        todayIcon.className = "icon-container"
        todayIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>white-balance-sunny</title><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>`;
        projectCard.appendChild(todayIcon);
    }
    // Add 'this-week' icon to this-week-project.
    else if (project.id === "this-week-project") {
        const thisWeekIcon = document.createElement("div");
        thisWeekIcon.className = "icon-container"
        thisWeekIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>calendar-week</title><path d="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z" /></svg>`;
        projectCard.appendChild(thisWeekIcon);
    }

    // Put project title inside the project card.
    const projectTitle = document.createElement("div");
    projectTitle.className = "project-name"
    projectTitle.textContent = `${project.title}`;
    projectCard.appendChild(projectTitle);

    // Only add feature buttons to "non-Home" projects.
    if (project.id !== "home-project" && project.id !== "completed-project" && project.id !== "today-project" && project.id !== "this-week-project") {
        addDeleteButton(projectCard);
        addEditButton(projectCard);
    }

    projectCard.addEventListener("click", () => {
            // Set the currently selected project the project corresponding to project card.
        (0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentlySelectedProject)(project);
    })

    return projectCard;
}


function addDeleteButton(projectCard) {

    // Create delete button.
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";

    // Create the delete svg icon.
    deleteButton.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Delete</title>
                                <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,
                                8H11V17H9V8M13,8H15V17H13V8Z"/>
                            </svg>`;

    // Add delete functionality to delete button.
    deleteButton.addEventListener("click", (event) => {

        event.stopPropagation();

        // Ask the user for delete confirmation.
        if (window.confirm("Confirm deletion?")) {
            // Delete Project (back-end)
            projectCard.projectReference.delete();

            // Clear "To-Do" tabs.
            document.querySelector(".to-do-tab").innerHTML = "";

            // Make "Home" project the currently selected project when current project is deleted.
            (0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentlySelectedProject)(_Project_js__WEBPACK_IMPORTED_MODULE_2__.Project.home);

            // Delete Project (front-end)
            projectCard.parentNode.removeChild(projectCard);
        }
    })

    projectCard.appendChild(deleteButton);
}


function addEditButton(projectCard) {

    // Create Edit button.
    const editButton = document.createElement("button");
    editButton.className = "edit";

    // Create Edit Icon.
    editButton.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Edit</title>
                                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,
                                2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                            </svg>`;

    // Add edit functionality to edit button by popping the "project editor form".
    editButton.addEventListener("click", () => {
        (0,_popUpProjectEditorForm_js__WEBPACK_IMPORTED_MODULE_0__.popUpProjectEditorForm)(projectCard);
    });
    projectCard.appendChild(editButton);
}

/***/ }),

/***/ "./src/js_modules/createToDoCard.js":
/*!******************************************!*\
  !*** ./src/js_modules/createToDoCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToDoCard: () => (/* binding */ createToDoCard)
/* harmony export */ });
/* harmony import */ var _formatDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDate.js */ "./src/js_modules/formatDate.js");
/* harmony import */ var _popUpToDoEditorForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUpToDoEditorForm.js */ "./src/js_modules/popUpToDoEditorForm.js");
/* harmony import */ var _popUpToDoInfoCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUpToDoInfoCard.js */ "./src/js_modules/popUpToDoInfoCard.js");
/* harmony import */ var _selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectedProjectManager.js */ "./src/js_modules/selectedProjectManager.js");





function createToDoCard(ToDo) {

    // Create to-do card div.
    const toDoCard = document.createElement("div");
    toDoCard.className = "to-do-container"

    // Add reference to the ToDo.
    toDoCard.toDoReference = ToDo;

    addCheckBox(toDoCard);

    // Apply "completed effects" to to-do items that are completed.
    if (toDoCard.toDoReference.completed) {
        toDoCard.querySelector(".to-do-checkbox").checked = true;
        toDoCard.className = "to-do-container completed";
    }

    // Create to-do title container.
    const toDoTitle = document.createElement("div");
    toDoTitle.className = "to-do-title"
    toDoTitle.textContent = ToDo.title;
    toDoCard.appendChild(toDoTitle);

    // Create to-do due date container.
    const toDoDueDate = document.createElement("div");

    // Classify whether ToDo due date is already late or just upcoming.
    if (isToDoLate(ToDo.dueDate)) {
        toDoDueDate.className = "to-do-due-date late";
        console.log("late", ToDo.dueDate);
    }
    else {
        toDoDueDate.className = "to-do-due-date upcoming";
        console.log("not-late", ToDo.dueDate);
    }

    toDoDueDate.textContent = `Due: ${(0,_formatDate_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(ToDo.dueDate)}`;
    toDoCard.appendChild(toDoDueDate);


    addViewButton(toDoCard);
    addDeleteButton(toDoCard);
    addEditButton(toDoCard);

    return toDoCard;
}


// Check whether ToDo late is late or not.
function isToDoLate(dueDate) {

    // Get current date in "YYYY-MM-DD" format.
    const currentDate = new Date().toISOString().split('T')[0];

    // Current date is ahead of due date hence ToDo is late.
    if (currentDate > dueDate) {
        return true;
    }
    // Current date is behind due date hence ToDo is not late.
    else {
        return false;
    }
}


function addDeleteButton(toDoCard) {

    // Create delete button.
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";

    // Create the delete svg icon.
    deleteButton.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Delete</title>
                                <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,
                                8H11V17H9V8M13,8H15V17H13V8Z"/>
                            </svg>`;

    // Add delete functionality to delete button.
    deleteButton.addEventListener("click", () => {

        // Ask the user for delete confirmation.
        if (window.confirm("Confirm deletion?")){
            // Delete Project (back-end)
            toDoCard.toDoReference.delete();

            // Delete Project (front-end)
            toDoCard.parentNode.removeChild(toDoCard);
        }

    })

    toDoCard.appendChild(deleteButton);
}

function addEditButton(toDoCard) {
    // Create Edit button.
    const editButton = document.createElement("button");
    editButton.className = "edit";

    // Create Edit Icon.
    editButton.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Edit</title>
                                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,
                                2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                            </svg>`;

    // Add edit functionality to edit button by popping the "to-do editor form".
    editButton.addEventListener("click", () => {
        (0,_popUpToDoEditorForm_js__WEBPACK_IMPORTED_MODULE_1__.popUpToDoEditorForm)(toDoCard);
    });
    toDoCard.appendChild(editButton);
}

function addViewButton(toDoCard) {

    // Create View button.
    const viewButton = document.createElement("button");
    viewButton.className = "edit";

    // Create Edit Icon.
    viewButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                                <title>View ToDo Information</title>
                                <path
                                    d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                            </svg>`;

    // Add "view to-do" functionality to view button by popping a "div" containing the to-do item's info.
    viewButton.addEventListener("click", () => {
        (0,_popUpToDoInfoCard_js__WEBPACK_IMPORTED_MODULE_2__.popUpToDoInfoCard)(toDoCard);
    });
    toDoCard.appendChild(viewButton);
}

function addCheckBox(toDoCard) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "to-do-checkbox"

    checkBox.addEventListener("click", () => {
        let isToDoCompleted = toDoCard.toDoReference.completed
        if (isToDoCompleted) {
            toDoCard.toDoReference.completed = false;
            toDoCard.className = "to-do-container"

            // If a 'completed' to-do is set to 'unfinished' to do, remove it from the "Completed" project's to-do window.
            if ((0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentlySelectedProject)().id === "completed-project") {
                toDoCard.parentElement.removeChild(toDoCard);
            }
        }
        else {
            toDoCard.toDoReference.completed = true;
            toDoCard.className = "to-do-container completed"
        }


        // Update changes inside parent project.
        toDoCard.toDoReference.project.replaceToDo(toDoCard.toDoReference, toDoCard.toDoReference);
    });

    toDoCard.appendChild(checkBox)
}

/***/ }),

/***/ "./src/js_modules/formatDate.js":
/*!**************************************!*\
  !*** ./src/js_modules/formatDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(inputDate) {
    const months = [
        "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
        "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ];

    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${months[Number(month) - 1]} ${parseInt(day, 10)}, ${year}`;

    return formattedDate;
}

/***/ }),

/***/ "./src/js_modules/popUpProjectAdderForm.js":
/*!*************************************************!*\
  !*** ./src/js_modules/popUpProjectAdderForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpProjectAdderForm: () => (/* binding */ popUpProjectAdderForm)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/js_modules/Project.js");
/* harmony import */ var _createProjectCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProjectCard.js */ "./src/js_modules/createProjectCard.js");
/* harmony import */ var _selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedProjectManager.js */ "./src/js_modules/selectedProjectManager.js");




function popUpProjectAdderForm() {

    // Create form container.
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    const form = document.createElement("form");
    form.className = "project-adder-form";
    form.innerHTML = `<input type="text" id="project-title" placeholder="Hello" required>
                      <input type="submit" value="Add Project">`;
    formContainer.appendChild(form)
    
    // Create cancel button.
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.addEventListener("click", () => {
        formContainer.parentElement.removeChild(formContainer);
    })
    form.appendChild(cancelButton);

    // Add feature to form that creates the Project once submitted.
    form.addEventListener("submit", event => {

        // Prevent form submission.
        event.preventDefault();

        // Get project's title.
        const projectTitle = form.querySelector("#project-title").value;

        // Create a Project.
        const project = new _Project_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectTitle);

        // Create a project card representation.
        const projectCard = (0,_createProjectCard_js__WEBPACK_IMPORTED_MODULE_1__.createProjectCard)(project)

        // Render new project to DOM by appending 
        const createdProjectsContainer = document.querySelector(".created-projects-container");
        createdProjectsContainer.insertBefore(projectCard, createdProjectsContainer.querySelector("button.project-adder"));

        // Make the newly created project as the currently selected project.
        (0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_2__.setCurrentlySelectedProject)(project);

        // Remove form when done.
        formContainer.parentElement.removeChild(formContainer);
    });

    document.body.appendChild(formContainer);
}

/***/ }),

/***/ "./src/js_modules/popUpProjectEditorForm.js":
/*!**************************************************!*\
  !*** ./src/js_modules/popUpProjectEditorForm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpProjectEditorForm: () => (/* binding */ popUpProjectEditorForm)
/* harmony export */ });
function popUpProjectEditorForm(projectCard) {

    // Create form container.
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    // Create project editor form.
    const projectEditorForm = document.createElement("form");
    projectEditorForm.className = "project-editor-form";
    formContainer.appendChild(projectEditorForm);

    // Create the  new-project-title input field.
    const newProjectTitleInput = document.createElement("input");
    newProjectTitleInput.type = "text";
    newProjectTitleInput.id = "project-title";
    newProjectTitleInput.value = projectCard.projectReference.title;
    projectEditorForm.appendChild(newProjectTitleInput);

    // Create submit button.
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Done";
    projectEditorForm.appendChild(submitButton);

    // Create cancel button.
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.addEventListener("click", () => {
        formContainer.parentElement.removeChild(formContainer);
    })
    projectEditorForm.appendChild(cancelButton);

    // Add feature to project editor form that modifies the project title when submitted.
    projectEditorForm.addEventListener("submit", event => {

        event.preventDefault();

        // Ask for user confirmation before editing.
        if (window.confirm("Confirm changes?")){
            // Modify project title in back-end.
            projectCard.projectReference.setProjectTitle(newProjectTitleInput.value);

            // Modify project title in front-end.
            projectCard.querySelector(".project-name").textContent = newProjectTitleInput.value;
            document.querySelector(".parent-project-name").textContent = newProjectTitleInput.value;
        }

        // Remove form from the DOM when submitted.
        formContainer.parentElement.removeChild(formContainer);
    });

    document.body.appendChild(formContainer);
}

/***/ }),

/***/ "./src/js_modules/popUpToDoAdderForm.js":
/*!**********************************************!*\
  !*** ./src/js_modules/popUpToDoAdderForm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpToDoAdderForm: () => (/* binding */ popUpToDoAdderForm)
/* harmony export */ });
/* harmony import */ var _renderToDoWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderToDoWindow.js */ "./src/js_modules/renderToDoWindow.js");
/* harmony import */ var _selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedProjectManager.js */ "./src/js_modules/selectedProjectManager.js");
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDo.js */ "./src/js_modules/ToDo.js");




function popUpToDoAdderForm() {

    // Create form container.
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    const toDoAdderForm = document.createElement("form");
    toDoAdderForm.className = "to-do-adder-form";
    formContainer.appendChild(toDoAdderForm);

    // Create title input.
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.required = true;
    toDoAdderForm.appendChild(createFieldDiv("Title:", titleInput));

    // Create description area.
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.id = "description";
    descriptionTextarea.name = "description";
    descriptionTextarea.rows = 4;
    descriptionTextarea.cols = 50;
    descriptionTextarea.required = false;
    toDoAdderForm.appendChild(createFieldDiv("Description:", descriptionTextarea));

    // Create due date input.
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    dueDateInput.name = "dueDate";
    dueDateInput.required = true;
    toDoAdderForm.appendChild(createFieldDiv("Due Date:", dueDateInput));

    // Create ToDo priority selection.
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.name = "priority";

    const priorityOptions = ["High", "Medium", "Low"];
    priorityOptions.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        prioritySelect.appendChild(option);
    });
    toDoAdderForm.appendChild(createFieldDiv("Priority:", prioritySelect));

    // Create Note input.
    const notesTextarea = document.createElement("textarea");
    notesTextarea.id = "notes";
    notesTextarea.name = "notes";
    notesTextarea.rows = 4;
    notesTextarea.cols = 50;
    toDoAdderForm.appendChild(createFieldDiv("Notes:", notesTextarea));

    // Create submit button.
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.id = "submit-form";
    submitButton.value = "Create ToDo";
    toDoAdderForm.appendChild(submitButton);

    // Create cancel button.
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.addEventListener("click", () => {
        formContainer.parentElement.removeChild(formContainer);
    })
    toDoAdderForm.appendChild(cancelButton);


    // Add feature to form that when submitted, a ToDo object is created.
    toDoAdderForm.addEventListener("submit", event => {

        event.preventDefault()

        const toDoTitle = document.querySelector("#title").value;
        const toDoDescription = document.querySelector("#description").value;
        const toDoDueDate = document.querySelector("#due-date").value;
        const toDoPriority = document.querySelector("#priority").value;
        const toDoNotes = document.querySelector("#notes").value;

        const toDoItem = new _ToDo_js__WEBPACK_IMPORTED_MODULE_2__.ToDo(...[toDoTitle, toDoDescription, toDoDueDate, toDoPriority, toDoNotes])
        ;(0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelectedProject)().addToDo(toDoItem);

        // Render To-Do item in 'to-do' tab immediately once created.
        (0,_renderToDoWindow_js__WEBPACK_IMPORTED_MODULE_0__.renderToDoWindow)((0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelectedProject)());

        formContainer.parentElement.removeChild(formContainer);
    });

    document.body.appendChild(formContainer);
}


// Returns a div containing a labeled input.
function createFieldDiv(labelText, inputElement) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = labelText;
    label.appendChild(inputElement);
    div.appendChild(label);
    return div;
}

/***/ }),

/***/ "./src/js_modules/popUpToDoEditorForm.js":
/*!***********************************************!*\
  !*** ./src/js_modules/popUpToDoEditorForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpToDoEditorForm: () => (/* binding */ popUpToDoEditorForm)
/* harmony export */ });
/* harmony import */ var _renderToDoWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderToDoWindow */ "./src/js_modules/renderToDoWindow.js");
/* harmony import */ var _selectedProjectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedProjectManager */ "./src/js_modules/selectedProjectManager.js");



function popUpToDoEditorForm(toDoCard) {

    // Create form container.
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    const toDoEditorForm = document.createElement("form");
    toDoEditorForm.className = "to-do-adder-form";
    formContainer.appendChild(toDoEditorForm)

    // Create title input.
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.required = true;
    titleInput.value = toDoCard.toDoReference.title;
    toDoEditorForm.appendChild(createFieldDiv("Title:", titleInput));

    // Create description area.
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.id = "description";
    descriptionTextarea.name = "description";
    descriptionTextarea.rows = 4;
    descriptionTextarea.cols = 50;
    descriptionTextarea.required = false;
    descriptionTextarea.value = toDoCard.toDoReference.description;
    toDoEditorForm.appendChild(createFieldDiv("Description:", descriptionTextarea));

    // Create due date input.
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    dueDateInput.name = "dueDate";
    dueDateInput.required = true;
    dueDateInput.value = toDoCard.toDoReference.dueDate;
    toDoEditorForm.appendChild(createFieldDiv("Due Date:", dueDateInput));

    // Create ToDo priority selection.
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.name = "priority";

    const priorityOptions = ["High", "Medium", "Low"];
    priorityOptions.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        prioritySelect.appendChild(option);
    });
    prioritySelect.value = toDoCard.toDoReference.priority;
    toDoEditorForm.appendChild(createFieldDiv("Priority:", prioritySelect));

    // Create Note input.
    const notesTextarea = document.createElement("textarea");
    notesTextarea.id = "notes";
    notesTextarea.name = "notes";
    notesTextarea.rows = 4;
    notesTextarea.cols = 50;
    notesTextarea.value = toDoCard.toDoReference.notes;
    toDoEditorForm.appendChild(createFieldDiv("Notes:", notesTextarea));

    // Create submit button.
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.id = "submit-form";
    submitButton.value = "Save Changes";
    toDoEditorForm.appendChild(submitButton);

    // Create cancel button.
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.addEventListener("click", () => {
        formContainer.parentElement.removeChild(formContainer);
    })
    toDoEditorForm.appendChild(cancelButton);

    // Add feature to form that when submitted, a ToDo object is created.
    toDoEditorForm.addEventListener("submit", event => {

        // Prevent form submission.
        event.preventDefault()

        // Show confirmation before editing.
        if (window.confirm("Confirm changes?")) {
            // The user clicked "OK"
            
            // Parse form control values.
            const toDoTitle = document.querySelector("#title").value;
            const toDoDescription = document.querySelector("#description").value;
            const toDoDueDate = document.querySelector("#due-date").value;
            const toDoPriority = document.querySelector("#priority").value;
            const toDoNotes = document.querySelector("#notes").value;
        
            // Update current to do.
            toDoCard.toDoReference.title = toDoTitle;
            toDoCard.toDoReference.description = toDoDescription;
            toDoCard.toDoReference.dueDate = toDoDueDate;
            toDoCard.toDoReference.priority = toDoPriority;
            toDoCard.toDoReference.notes = toDoNotes;
            toDoCard.toDoReference.dateAndTimeCreated = toDoCard.toDoReference.dateAndTimeCreated;
            toDoCard.toDoReference.dateModified = new Date().toLocaleString();
        
            // Replace the current ToDo item with the ToDo item with all changes applied in the parent project's "toDoItems" array.
            toDoCard.toDoReference.project.replaceToDo(toDoCard.toDoReference, toDoCard.toDoReference);
        
            // Update the to-do tab.
            (0,_renderToDoWindow__WEBPACK_IMPORTED_MODULE_0__.renderToDoWindow)((0,_selectedProjectManager__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelectedProject)());
        
            // Remove the form from the DOM once submitted.
            formContainer.parentElement.removeChild(formContainer);
        }
    });

    document.body.appendChild(formContainer);
}


// Returns a div containing a labeled input.
function createFieldDiv(labelText, inputElement) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = labelText;
    label.appendChild(inputElement);
    div.appendChild(label);
    return div;
}

/***/ }),

/***/ "./src/js_modules/popUpToDoInfoCard.js":
/*!*********************************************!*\
  !*** ./src/js_modules/popUpToDoInfoCard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpToDoInfoCard: () => (/* binding */ popUpToDoInfoCard)
/* harmony export */ });
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDate */ "./src/js_modules/formatDate.js");


function popUpToDoInfoCard(toDoCard) {
    // Create background container.
    const backgroundContainer = document.createElement("div");
    backgroundContainer.className = "to-do-info-background"

    // Create main container.
    const toDoInfoContainer = document.createElement("div");
    toDoInfoContainer.className = "to-do-info-container";

    // Create the close div
    const closeDiv = document.createElement("div");
    closeDiv.className = "close icon";
    closeDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                            <title>Close</title>
                            <path
                                d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" />
                          </svg>`;
    toDoInfoContainer.appendChild(closeDiv);

    // Helper function to create info-field div
    function createInfoField(label, value) {
        const infoField = document.createElement("div");
        infoField.className = "info-field";

        const infoLabel = document.createElement("div");
        infoLabel.className = "to-do-info-label";
        infoLabel.textContent = label + ":";
        infoField.appendChild(infoLabel);

        const infoValue = document.createElement("div");
        infoValue.className = "to-do-info-value";
        infoValue.textContent = value;
        infoField.appendChild(infoValue);

        return infoField;
    }

    // Create info-field divs for each field
    toDoInfoContainer.appendChild(createInfoField("Title", toDoCard.toDoReference.title));
    toDoInfoContainer.appendChild(createInfoField("Due Date", (0,_formatDate__WEBPACK_IMPORTED_MODULE_0__.formatDate)(toDoCard.toDoReference.dueDate)));
    toDoInfoContainer.appendChild(createInfoField("Project", toDoCard.toDoReference.project.title));
    toDoInfoContainer.appendChild(createInfoField("Description", toDoCard.toDoReference.description));
    toDoInfoContainer.appendChild(createInfoField("Priority", toDoCard.toDoReference.priority));
    toDoInfoContainer.appendChild(createInfoField("Notes", toDoCard.toDoReference.notes));

    // Append the main container to the background container
    backgroundContainer.appendChild(toDoInfoContainer);

    // Add event listener to the close div
    closeDiv.addEventListener("click", () => {
        document.body.removeChild(backgroundContainer);
    });

    // Append to body.
    document.body.appendChild(backgroundContainer);
}


/***/ }),

/***/ "./src/js_modules/renderToDoWindow.js":
/*!********************************************!*\
  !*** ./src/js_modules/renderToDoWindow.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderToDoWindow: () => (/* binding */ renderToDoWindow)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/js_modules/Project.js");
/* harmony import */ var _createToDoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDoCard */ "./src/js_modules/createToDoCard.js");
/* harmony import */ var _popUpToDoAdderForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUpToDoAdderForm */ "./src/js_modules/popUpToDoAdderForm.js");
/* harmony import */ var _sortToDoItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortToDoItems */ "./src/js_modules/sortToDoItems.js");




const compareWeek = __webpack_require__(/*! compare-week */ "./node_modules/compare-week/index.js");

function renderToDoWindow(currentProject) {
    // Access current to do window.
    const currentToDoWindow = document.querySelector(".to-do-window");

    // Create a new to do window.
    const newToDoWindow = document.createElement("div");
    newToDoWindow.className = "to-do-window";

    // Create the current parent project card to the to-do window.
    const currentProjectNameCard = createCurrentProjectNameCard(currentProject);

    // Create the sorter.
    const sorter = createSorter(currentProject);

    // Create the to-do tab.
    const toDoTab = createToDoTab(currentProject);

    // Create the to-do adder button.
    const toDoAdderButton = createToDoAdderButton();

    // Append all created elements to the new to-do window.
    newToDoWindow.appendChild(currentProjectNameCard);
    newToDoWindow.appendChild(sorter);
    newToDoWindow.appendChild(toDoTab);
    
    // Only add the to-do adder button to non "Complete" projects.
    if (currentProject.id !== "completed-project" && currentProject.id !== "today-project" && currentProject.id !== "this-week-project") {
        newToDoWindow.appendChild(toDoAdderButton);
    }

    // Replace current to do window with new to do window.
    currentToDoWindow.parentElement.replaceChild(newToDoWindow, currentToDoWindow);
}


// Create a card containing the name of the current parent project.
function createCurrentProjectNameCard(currentProject) {
    const currentProjectNameCard = document.createElement("div");
    currentProjectNameCard.className = "parent-project-name"
    currentProjectNameCard.textContent = currentProject.title;

    return currentProjectNameCard;
}

function createSorter(currentProject) {

    // Create div to contain the sorter.
    const sorterContainer = document.createElement("div");
    sorterContainer.className = "sort-container"

    // Create a select element that will serve as a way to choose sorting criteria.
    const sorter = document.createElement("select");
    sorter.id = "sorter";
    sorterContainer.appendChild(sorter);

    // Create the label for the sorter.
    const label = document.createElement("label");
    label.setAttribute("for", sorter.id);
    label.textContent = "Sort by:";
    sorter.before(label);

    // Create the data values of options to be selected.
    const sortingOptions = [
        { value: "time-created-ascending", text: "Created (Oldest to Newest)" },
        { value: "time-created-descending", text: "Created (Newest to Oldest)" },
        { value: "date-ascending", text: "Date (ascending)" },
        { value: "date-descending", text: "Date (descending)" },
        { value: "name-ascending", text: "Name (ascending)" },
        { value: "name-descending", text: "Name (descending)" },
        { value: "priority-ascending", text: "Priority (Lowest to Highest)" },
        { value: "priority-descending", text: "Priority (Highest to Lowest)" }
    ]

    // Get currently selected option from current sorter.
    let currentSorter = document.querySelector("#sorter");
    
    // Selected option of the new sorter to be created.
    let newCurrentSortOption;
    
    // If this is the first sorter to be rendered, set the new sorter selected option to "Created (Oldest to Newest)".
    if (!currentSorter) {
        newCurrentSortOption = sortingOptions.find(sortingOption => sortingOption.text === "Created (Oldest to Newest)");
    }
    // If this is not the first sorter, set the new sorter selected option to the current sorter selected option.
    else {
        newCurrentSortOption = currentSorter.value;
    }

    sortingOptions.forEach(sortingOption => {
        // Create option element.
        const option = document.createElement("option");

        // Add option value.
        option.setAttribute("value", sortingOption.value);

        // Add option text-content.
        option.textContent = sortingOption.text;

        // Make the currently selected option of current sorter carry over to the new sorter.
        option.selected = sortingOption.value === newCurrentSortOption;

        // Append the option to sorter select element.
        sorter.appendChild(option);
    })

    // Re-render to-do tab so that to-do item's new sort critera will be refrected
    sorter.addEventListener("change", () => {
        const currentToDoTab = document.querySelector(".to-do-tab");
        currentToDoTab.parentElement.replaceChild(createToDoTab(currentProject), currentToDoTab);
    })

    return sorterContainer;
}

function createToDoTab(currentProject) {

    // Create to-do tab.
    const toDoTab = document.createElement("div");
    toDoTab.className = "to-do-tab";

    // Array for storing all unsorted ToDo items.
    let unsortedToDoItems = [];

    // Render all ToDos across all projects if the project is "Home"
    if (currentProject === _Project__WEBPACK_IMPORTED_MODULE_0__.Project.home) {
        _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                unsortedToDoItems.push(toDoItem);
            }));
    }
    // Render all completed ToDos from different Projecrs if the currently selected project is "Completed"
    else if (currentProject.id === "completed-project" ) {
        _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                if (toDoItem.completed) {
                    unsortedToDoItems.push(toDoItem);
                }
            }));
    }
    // Render all Today ToDos from different Projecrs if the currently selected project is "Today"
    else if (currentProject.id === "today-project" ) {
        _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                // Get current date.
                const currentDate = new Date();

                // Format current date similar to the date structure of 'dueDate' property of ToDo object.
                const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
                if (toDoItem.dueDate === formattedCurrentDate) {
                    unsortedToDoItems.push(toDoItem);
                }
            }));
    }
    // Render all This Week ToDos from different Projecrs if the currently selected project is "This Week"
    else if (currentProject.id === "this-week-project" ) {
        _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                // Get current date.
                const currentDate = new Date();

                // Get due date.
                const [year, month, day] = toDoItem.dueDate.split("-");
                const dueDate = new Date(year, month - 1, day);

                // Check if due date of current to do is in current "this week".
                if (compareWeek(currentDate, dueDate)) {
                    unsortedToDoItems.push(toDoItem);
                }
            }));
    }
    // If current project is not "Home" and not "Completed", only render its respective ToDo items.
    else {
        currentProject.toDoItems.forEach(toDoItem => {
            unsortedToDoItems.push(toDoItem);
        });
    }

    // Sort.
    const sortedToDoItems = (0,_sortToDoItems__WEBPACK_IMPORTED_MODULE_3__.sortToDoItems)(unsortedToDoItems);

    // Render all ToDo cards to ToDo tab.
    sortedToDoItems.forEach(toDoItem => {
        toDoTab.appendChild((0,_createToDoCard__WEBPACK_IMPORTED_MODULE_1__.createToDoCard)(toDoItem));
    });

    return toDoTab;
}


function createToDoAdderButton() {

    // Create a button element
    const button = document.createElement("button");
    button.className = "to-do-adder";

    // Create an SVG element using innerHTML
    const svgHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
            <title>Add ToDo</title>
            <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>`;

    // Set the innerHTML of the button to include the SVG and caption
    button.innerHTML = svgHTML + '<div class="button-caption">New ToDo...</div>';

    // Add feature that pops the to do adder form when button is clicked.
    button.addEventListener("click", function () {
        (0,_popUpToDoAdderForm__WEBPACK_IMPORTED_MODULE_2__.popUpToDoAdderForm)();
    });

    // Return the created button element
    return button;
}

/***/ }),

/***/ "./src/js_modules/selectedProjectManager.js":
/*!**************************************************!*\
  !*** ./src/js_modules/selectedProjectManager.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentlySelectedProject: () => (/* binding */ getCurrentlySelectedProject),
/* harmony export */   setCurrentlySelectedProject: () => (/* binding */ setCurrentlySelectedProject)
/* harmony export */ });
/* harmony import */ var _renderToDoWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderToDoWindow */ "./src/js_modules/renderToDoWindow.js");


let currentlySelectedProject = null;

function setCurrentlySelectedProject(project) {
    currentlySelectedProject = project;

    (0,_renderToDoWindow__WEBPACK_IMPORTED_MODULE_0__.renderToDoWindow)(currentlySelectedProject);
}

function getCurrentlySelectedProject() {
    return currentlySelectedProject;
}

/***/ }),

/***/ "./src/js_modules/sortToDoItems.js":
/*!*****************************************!*\
  !*** ./src/js_modules/sortToDoItems.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortToDoItems: () => (/* binding */ sortToDoItems)
/* harmony export */ });
/**
 * Sorts an array of to-do items based on the selected sorting criteria.
 *
 * @param {Array} unsortedToDoItems - An array of to-do items to be sorted.
 * @returns {Array}  An array of sorted to-do items.
 */
function sortToDoItems(unsortedToDoItems) {
    // Get the current sorter or set the default sort criteria.
    const sortCriteria = document.querySelector("#sorter")?.value || "time-created-ascending";

    // Create a mapping of sort criteria to comparison functions.
    const sortFunctions = {
        "date-ascending": (ToDo1, ToDo2) => new Date(ToDo1.dueDate) - new Date(ToDo2.dueDate),
        "date-descending": (ToDo1, ToDo2) => new Date(ToDo2.dueDate) - new Date(ToDo1.dueDate),
        "name-ascending": (ToDo1, ToDo2) => ToDo1.title.localeCompare(ToDo2.title),
        "name-descending": (ToDo1, ToDo2) => ToDo2.title.localeCompare(ToDo1.title),
        "time-created-ascending": (ToDo1, ToDo2) => new Date(ToDo1.dateAndTimeCreated) - new Date(ToDo2.dateAndTimeCreated),
        "time-created-descending": (ToDo1, ToDo2) => new Date(ToDo2.dateAndTimeCreated) - new Date(ToDo1.dateAndTimeCreated),
        "priority-ascending": (ToDo1, ToDo2) => priorityLevel(ToDo1) - priorityLevel(ToDo2),
        "priority-descending": (ToDo1, ToDo2) => priorityLevel(ToDo2) - priorityLevel(ToDo1),
    };

    // Define a function to get the priority level.
    const priorityLevel = (ToDo) => {
        switch (ToDo.priority) {
            case "High":
                return 3;
            case "Medium":
                return 2;
            case "Low":
                return 1;
            default:
                return 0; // Handle unexpected priority values.
        }
    };

    // Sort the array using the selected criteria.
    const sortedToDoItems = unsortedToDoItems.sort(sortFunctions[sortCriteria] || (() => 0));

    return sortedToDoItems;
}


/***/ }),

/***/ "./node_modules/flatted/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flatted/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromJSON: () => (/* binding */ fromJSON),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   stringify: () => (/* binding */ stringify),
/* harmony export */   toJSON: () => (/* binding */ toJSON)
/* harmony export */ });
/*! (c) 2020 Andrea Giammarchi */

const {parse: $parse, stringify: $stringify} = JSON;
const {keys} = Object;

const Primitive = String;   // it could be Number
const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';

const noop = (_, value) => value;

const primitives = value => (
  value instanceof Primitive ? Primitive(value) : value
);

const Primitives = (_, value) => (
  typeof value === primitive ? new Primitive(value) : value
);

const revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), {length} = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({k, a: [input, parsed, tmp, $]});
      }
      else
        output[k] = $.call(output, k, tmp);
    }
    else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  for (let {length} = lazy, i = 0; i < length; i++) {
    const {k, a} = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};

const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ?
              revive(input, new Set, value, $) :
              value;
  return $.call({'': tmp}, '', tmp);
};

const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ?
            (k, v) => (k === '' || -1 < replacer.indexOf(k) ? v : void 0) :
            (replacer || noop);
  const known = new Map;
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({'': value}, '', value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return '[' + output.join(',') + ']';
  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }
    const after = $.call(this, key, value);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

const toJSON = any => $parse(stringify(any));
const fromJSON = any => parse($stringify(any));


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_modules/Project.js */ "./src/js_modules/Project.js");
/* harmony import */ var _js_modules_createProjectCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_modules/createProjectCard.js */ "./src/js_modules/createProjectCard.js");
/* harmony import */ var _js_modules_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/selectedProjectManager.js */ "./src/js_modules/selectedProjectManager.js");
/* harmony import */ var _js_modules_popUpProjectAdderForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/popUpProjectAdderForm.js */ "./src/js_modules/popUpProjectAdderForm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






window.addEventListener("load", () => {
    // Load projects from storage and set the currently selected project to "Home".
    _js_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__.Project.loadProjects();
    (0,_js_modules_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_2__.setCurrentlySelectedProject)(_js_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__.Project.home);

    // Load projects to the tabs, set up project adder button, and project dropdown button.
    loadProjectsToTabs();
    setUpProjectAdder();
    setUpProjectDropdown();
});

// Load projects to the tabs.
function loadProjectsToTabs() {
    const projectsTab = document.querySelector(".projects-tab");
    const defaultProjectsContainer = projectsTab.querySelector(".default-projects-container");
    const createdProjectsContainer = projectsTab.querySelector(".created-projects-container");

    _js_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => {
        const projectCard = (0,_js_modules_createProjectCard_js__WEBPACK_IMPORTED_MODULE_1__.createProjectCard)(project);

        // Check if the project is a default project or not.
        if (isDefaultProject(project)) {
            defaultProjectsContainer.appendChild(projectCard);
        } else {
            insertProjectCard(createdProjectsContainer, projectCard);
        }
    });
}

// Check if a project is a default project.
function isDefaultProject(project) {
    return (
        project.id === "home-project" ||
        project.id === "completed-project" ||
        project.id === "today-project" ||
        project.id === "this-week-project"
    );
}

// Insert a project card into the created projects container.
function insertProjectCard(createdProjectsContainer, projectCard) {
    createdProjectsContainer.insertBefore(projectCard, createdProjectsContainer.querySelector(".project-adder"));
}

// Set up the project adder button.
function setUpProjectAdder() {
    const projectAdderButton = document.querySelector(".project-adder");
    projectAdderButton.addEventListener("click", () => {
        // Pop up the project adder form when the button is clicked.
        (0,_js_modules_popUpProjectAdderForm_js__WEBPACK_IMPORTED_MODULE_3__.popUpProjectAdderForm)();
    });
}

// Set up the project dropdown button.
function setUpProjectDropdown() {
    const projectDropdownButton = document.querySelector("#created-projects-dropdown");
    projectDropdownButton.addEventListener("click", () => {
        const createdProjectsContainer = document.querySelector(".created-projects-container");

        // Toggle the 'active' and 'inactive' classes for the created projects container.
        createdProjectsContainer.classList.toggle("inactive");
        createdProjectsContainer.classList.toggle("active");
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyx3REFBYTtBQUN2Qyx1QkFBdUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRWhEO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTs7QUFFQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxZQUFZLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxTQUFTLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1B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QTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDBDQUFJO0FBQ2pDLFFBQVEsd0ZBQTJCOztBQUVuQztBQUNBLFFBQVEsc0VBQWdCLENBQUMsdUZBQTJCOztBQUVwRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlHc0Q7QUFDaUI7O0FBRWhFOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQWdCLENBQUMsb0ZBQTJCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSTBDOztBQUVuQztBQUNQO0FBQ0E7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OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUNvQjtBQUNlO0FBQ1A7QUFDekQ7O0FBRXJCO0FBQ0E7QUFDQSxJQUFJLDJEQUFPO0FBQ1gsSUFBSSxrR0FBMkIsQ0FBQywyREFBTzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwyREFBTztBQUNYLDRCQUE0QixtRkFBaUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyRkFBcUI7QUFDN0IsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2NvbXBhcmUtd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2dlbmVyYXRlLXVuaXF1ZS1pZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3dlZWstaWRlbnRpZmllci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvY3JlYXRlVG9Eb0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFByb2plY3RBZGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBQcm9qZWN0RWRpdG9yRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFRvRG9BZGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBUb0RvRWRpdG9yRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFRvRG9JbmZvQ2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9yZW5kZXJUb0RvV2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvc29ydFRvRG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZmxhdHRlZC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGlzRGF0ZU9iaiA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqJyk7XG5jb25zdCB3ZWVrSWRlbnRpZmllciA9IHJlcXVpcmUoJ3dlZWstaWRlbnRpZmllcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChhLCBiKSA9PiB7XG5cdGlmICh0eXBlb2YgYSAhPT0gJ251bWJlcicgJiYgIWlzRGF0ZU9iaihhKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgbnVtYmVyIG9yIERhdGUsIGdvdCAke3R5cGVvZiBhfWApO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBiICE9PSAnbnVtYmVyJyAmJiAhaXNEYXRlT2JqKGIpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBudW1iZXIgb3IgRGF0ZSwgZ290ICR7dHlwZW9mIGJ9YCk7XG5cdH1cblxuXHRyZXR1cm4gd2Vla0lkZW50aWZpZXIoaXNEYXRlT2JqKGEpID8gYSA6IG5ldyBEYXRlKGEgKiAxMDAwKSkgPT09IHdlZWtJZGVudGlmaWVyKGlzRGF0ZU9iaihiKSA/IGIgOiBuZXcgRGF0ZShiICogMTAwMCkpO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdsb2JhbCBTdHlsZXMgKi9cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbjpyb290IHtcbiAgICAtLXRleHQ6ICMxMDA5MGM7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmY2ZjO1xuICAgIC0tcHJpbWFyeTogI2I3ZDdjOTtcbiAgICAtLXNlY29uZGFyeTogI2Q4ZTdlOTtcbiAgICAtLWFjY2VudDogIzU3OWQ1YTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4vKiBDb250ZW50IENvbnRhaW5lciAqL1xuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRGFzaGJvYXJkICovXG4uZGFzaGJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0cy10YWIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBEZWZhdWx0IFByb2plY3RzIENvbnRhaW5lciAqL1xuLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogQ3JlYXRlZCBQcm9qZWN0cyBDb250YWluZXIgKi9cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5pbmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogM3B4O1xufVxuXG4vKiBQcm9qZWN0IENhcmQgKi9cbi5wcm9qZWN0LWNhcmQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4IDI1cHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdC1jYXJkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucHJvamVjdC1jYXJkOmhvdmVyLFxuLnByb2plY3QtYWRkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgPiAqIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFByb2plY3QgYW5kIERyb3Bkb3duIEljb25zICovXG4jaG9tZS1wcm9qZWN0LFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxuI3RvZGF5LXByb2plY3QsXG4jdGhpcy13ZWVrLXByb2plY3QsXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxuI2NvbXBsZXRlZC1wcm9qZWN0IC5pY29uLFxuI3RvZGF5LXByb2plY3QgLmljb24sXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbi5kcm9wZG93biB7XG4gICAgZmlsbDogYmxhY2s7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIHdpZHRoOiAxN3B4O1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24uZHJvcGRvd24ge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIC5wcm9qZWN0LW5hbWUsXG4udG8tZG8tdGl0bGUsXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIFByb2plY3QgQWRkZXIgKi9cbi5wcm9qZWN0LWFkZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3QtYWRkZXIgLmljb24sXG4udG8tZG8tYWRkZXIgLmljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLyogVG8tRG8gV2luZG93ICovXG4udG8tZG8td2luZG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODEsIDE4MSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnBhcmVudC1wcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc29ydC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAzcHg7XG59XG5cbmxhYmVsW2Zvcj1cInNvcnRlclwiXSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jc29ydGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbiNzb3J0ZXI6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi8qIFRvLURvIFRhYiAqL1xuLnRvLWRvLXRhYiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIFRvLURvIENvbnRhaW5lciAqL1xuLnRvLWRvLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAxMzBweCAyNXB4IDI1cHggMjVweDtcbiAgICBnYXA6IDVweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ZGNiNjg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNmRjYjY4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udG8tZG8tZHVlLWRhdGUubGF0ZSB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMDY0NWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZDA2NDVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBUby1EbyBBZGRlciAqL1xuLnRvLWRvLWFkZGVyIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBUby1EbyBJbmZvIEJhY2tncm91bmQgKi9cbi50by1kby1pbmZvLWJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cblxuLyogVG8tRG8gSW5mbyBDb250YWluZXIgKi9cbi50by1kby1pbmZvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogODAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xuICAgIGdhcDogNXB4O1xufVxuXG4uY2xvc2UgLmljb24ge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmNsb3NlIC5pY29uOmhvdmVyIHtcbiAgICBmaWxsOiByZWQ7XG59XG5cbi5pbmZvLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xufVxuXG4udG8tZG8taW5mby1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogRm9ybSBDb250YWluZXIgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMTAxLCAxMDEsIDAuMjIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogRm9ybSBTdHlsZXMgKi9cbmZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuZm9ybSBpbnB1dCxcbmZvcm0gc2VsZWN0LFxuZm9ybSB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDIxMSwgMjExKTtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xufVxuXG5mb3JtIGlucHV0OmZvY3VzLFxuZm9ybSBzZWxlY3Q6Zm9jdXMsXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA3NywgNzcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGVsZXRlLFxuLmVkaXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogSWNvbiBWaXNpYmlsaXR5ICovXG4ucHJvamVjdC1jYXJkIC5pY29uLFxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xufVxuXG4ucHJvamVjdC1jYXJkIC5pY29uIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZmlsbDogYmxhY2s7XG59XG5cbi5kZWxldGU6aG92ZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZpbGw6IHJlZDtcbn1cblxuLmVkaXQ6aG92ZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZpbGw6IGdyZWVuO1xufVxuXG4vKiBDb21wbGV0ZWQgVG8tRG8gU3R5bGUgKi9cbi50by1kby1jb250YWluZXIuY29tcGxldGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMzgsIDE3Myk7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG5cbiAgICAjaG9tZS1wcm9qZWN0LFxuICAgICNjb21wbGV0ZWQtcHJvamVjdCxcbiAgICAjdG9kYXktcHJvamVjdCxcbiAgICAjdGhpcy13ZWVrLXByb2plY3QsXG4gICAgI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC8qIEFkanVzdCB0aGUgZGFzaGJvYXJkIGFuZCB0by1kbyB3aW5kb3cgdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIH1cblxuICAgIC5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcblxuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFJQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNC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QUVJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUEsb0JBQW9CO0FBQ3BCOztJQUVJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7QUFHQTs7SUFFSTs7Ozs7UUFLSSxtQkFBbUI7SUFDdkI7O0lBRUEsd0VBQXdFO0lBQ3hFO1FBQ0ksMEJBQTBCO1FBQzFCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGVBQWU7UUFDZixzQkFBc0I7O1FBRXRCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHQ6ICMxMDA5MGM7XFxuICAgIC0tYmFja2dyb3VuZDogI2ZkZmNmYztcXG4gICAgLS1wcmltYXJ5OiAjYjdkN2M5O1xcbiAgICAtLXNlY29uZGFyeTogI2Q4ZTdlOTtcXG4gICAgLS1hY2NlbnQ6ICM1NzlkNWE7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIENvbnRlbnQgQ29udGFpbmVyICovXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBEYXNoYm9hcmQgKi9cXG4uZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cy10YWIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIERlZmF1bHQgUHJvamVjdHMgQ29udGFpbmVyICovXFxuLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBDcmVhdGVkIFByb2plY3RzIENvbnRhaW5lciAqL1xcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5pbmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi8qIFByb2plY3QgQ2FyZCAqL1xcbi5wcm9qZWN0LWNhcmQge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlcixcXG4ucHJvamVjdC1hZGRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgPiAqIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogUHJvamVjdCBhbmQgRHJvcGRvd24gSWNvbnMgKi9cXG4jaG9tZS1wcm9qZWN0LFxcbiNjb21wbGV0ZWQtcHJvamVjdCxcXG4jdG9kYXktcHJvamVjdCxcXG4jdGhpcy13ZWVrLXByb2plY3QsXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2hvbWUtcHJvamVjdCAuaWNvbixcXG4jY29tcGxldGVkLXByb2plY3QgLmljb24sXFxuI3RvZGF5LXByb2plY3QgLmljb24sXFxuI3RoaXMtd2Vlay1wcm9qZWN0IC5pY29uLFxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbi5kcm9wZG93biB7XFxuICAgIGZpbGw6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIHdpZHRoOiAxN3B4O1xcbn1cXG5cXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgLnByb2plY3QtbmFtZSxcXG4udG8tZG8tdGl0bGUsXFxuLnBhcmVudC1wcm9qZWN0LW5hbWUge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogUHJvamVjdCBBZGRlciAqL1xcbi5wcm9qZWN0LWFkZGVyIHtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1hZGRlciAuaWNvbixcXG4udG8tZG8tYWRkZXIgLmljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLyogVG8tRG8gV2luZG93ICovXFxuLnRvLWRvLXdpbmRvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4MSwgMTgxKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBhcmVudC1wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zb3J0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJzb3J0ZXJcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuI3NvcnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4jc29ydGVyOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZSA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4vKiBUby1EbyBUYWIgKi9cXG4udG8tZG8tdGFiIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBUby1EbyBDb250YWluZXIgKi9cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMTMwcHggMjVweCAyNXB4IDI1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ZGNiNjg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM2ZGNiNjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnRvLWRvLWR1ZS1kYXRlLmxhdGUge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMDY0NWQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNkMDY0NWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLyogVG8tRG8gQWRkZXIgKi9cXG4udG8tZG8tYWRkZXIge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogVG8tRG8gSW5mbyBCYWNrZ3JvdW5kICovXFxuLnRvLWRvLWluZm8tYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLyogVG8tRG8gSW5mbyBDb250YWluZXIgKi9cXG4udG8tZG8taW5mby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2xvc2UgLmljb24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uY2xvc2UgLmljb246aG92ZXIge1xcbiAgICBmaWxsOiByZWQ7XFxufVxcblxcbi5pbmZvLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xcbn1cXG5cXG4udG8tZG8taW5mby1sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIEZvcm0gQ29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMDEsIDEwMSwgMC4yMik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogRm9ybSBTdHlsZXMgKi9cXG5mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIHNlbGVjdCxcXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDIxMSwgMjExKTtcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXG59XFxuXFxuZm9ybSBpbnB1dDpmb2N1cyxcXG5mb3JtIHNlbGVjdDpmb2N1cyxcXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSxcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDc3LCA3Nyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5lZGl0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogSWNvbiBWaXNpYmlsaXR5ICovXFxuLnByb2plY3QtY2FyZCAuaWNvbixcXG4udG8tZG8tY29udGFpbmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgLmljb24ge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbGw6IHJlZDtcXG59XFxuXFxuLmVkaXQ6aG92ZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmlsbDogZ3JlZW47XFxufVxcblxcbi8qIENvbXBsZXRlZCBUby1EbyBTdHlsZSAqL1xcbi50by1kby1jb250YWluZXIuY29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMjM4LCAxNzMpO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXG5cXG4gICAgI2hvbWUtcHJvamVjdCxcXG4gICAgI2NvbXBsZXRlZC1wcm9qZWN0LFxcbiAgICAjdG9kYXktcHJvamVjdCxcXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0LFxcbiAgICAjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIC8qIEFkanVzdCB0aGUgZGFzaGJvYXJkIGFuZCB0by1kbyB3aW5kb3cgdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICB9XFxuXFxuICAgIC5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihsaW1pdCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGltaXQpLnRvU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclN5bWJvbHMoZXhjbHVkZVN5bWJvbHMsIGdyb3VwKSB7XG4gIGxldCBuZXdHcm91cCA9IGdyb3VwO1xuICBleGNsdWRlU3ltYm9scy5mb3JFYWNoKChzeW1ib2wpID0+IHtcbiAgICBuZXdHcm91cCA9IG5ld0dyb3VwLnJlcGxhY2Uoc3ltYm9sLCAnJyk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdHcm91cDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSWQoYXZhaWxhYmxlQ2hhcnMsIGlkTGVuZ3RoKSB7XG4gIGxldCBpZCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaWRMZW5ndGg7IGkgKz0gMSkge1xuICAgIGlkICs9IGF2YWlsYWJsZUNoYXJzW2dldFJhbmRvbU51bWJlcihhdmFpbGFibGVDaGFycy5sZW5ndGgpXTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJZCh7XG4gIGxlbmd0aCA9IDIwLFxuICB1c2VMZXR0ZXJzID0gdHJ1ZSxcbiAgdXNlTnVtYmVycyA9IHRydWUsXG4gIGluY2x1ZGVTeW1ib2xzID0gW10sXG4gIGV4Y2x1ZGVTeW1ib2xzID0gW10sXG59ID0ge30pIHtcbiAgbGV0IGxldHRlcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICBsZXQgbnVtYmVycyA9ICcwMTIzNDU2Nzg5JztcbiAgbGV0IGF2YWlsYWJsZUNoYXJzID0gW107XG4gIGxldCBsZXR0ZXJzQXJyID0gW107XG4gIGxldCBudW1iZXJzQXJyID0gW107XG5cbiAgaWYgKHVzZUxldHRlcnMpIHtcbiAgICBpZiAoZXhjbHVkZVN5bWJvbHMubGVuZ3RoKSBsZXR0ZXJzID0gZmlsdGVyU3ltYm9scyhleGNsdWRlU3ltYm9scywgbGV0dGVycyk7XG4gICAgbGV0dGVyc0FyciA9IGxldHRlcnMuc3BsaXQoJycpO1xuICB9XG5cbiAgaWYgKHVzZU51bWJlcnMpIHtcbiAgICBpZiAoZXhjbHVkZVN5bWJvbHMubGVuZ3RoKSBudW1iZXJzID0gZmlsdGVyU3ltYm9scyhleGNsdWRlU3ltYm9scywgbnVtYmVycyk7XG4gICAgbnVtYmVyc0FyciA9IG51bWJlcnMuc3BsaXQoJycpO1xuICB9XG5cbiAgYXZhaWxhYmxlQ2hhcnMgPSBbLi4ubGV0dGVyc0FyciwgLi4ubnVtYmVyc0FyciwgLi4uaW5jbHVkZVN5bWJvbHNdO1xuXG4gIHJldHVybiBjcmVhdGVJZChhdmFpbGFibGVDaGFycywgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVVuaXF1ZUlkO1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiB3ZWVrLWlkZW50aWZpZXIgPGh0dHBzOi8vZ2l0aHViLmNvbS90aHJvbGwvd2Vlay1pZGVudGlmaWVyPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNiBDbMOpbWVudCBCaWxsaW90LCBjb250cmlidXRvcnMuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdlZWtJZGVudGlmaWVyO1xubW9kdWxlLmV4cG9ydHMud2Vla0lkZW50aWZpZXIgPSB3ZWVrSWRlbnRpZmllcjtcbm1vZHVsZS5leHBvcnRzLmRhdGVGcm9tV2VlayA9IGRhdGVGcm9tV2VlaztcblxuLyoqXG4gKiBHZXQgdW5pcXVlIGFuZCBzZXF1ZW50aWFsIHdlZWsgaWRlbnRpZmllciBvZiBjdXJyZW50IGRhdGUgb3IgZ2l2ZW4gdmFsaWQgYERhdGVgIHN0cmluZyBmb3JtYXRcbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqc1xuICogdmFyIHdlZWtJZGVudGlmaWVyID0gcmVxdWlyZSgnY3VycmVudC13ZWVrLW51bWJlcicpO1xuICpcbiAqIC8vIGF1Z3VzdCAxMiwgMjAxNiAoY3VycmVudCBkYXRlKVxuICogd2Vla0lkZW50aWZpZXIoKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKCdKYW51YXJ5IDA1LCAxOTcwIDAzOjAwOjAwJyk7XG4gKiAvLz0+IDFcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcihuZXcgRGF0ZSgnQXVndXN0IDEyLCAyMDE2JykpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJzA4LzEyLzIwMTYnKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKCdBdWd1c3QgMTIsIDIwMTYnKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKG5ldyBEYXRlKCdBdWd1c3QgMTksIDIwMTYnKSk7XG4gKiAvLz0+IDI0MzNcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignMDgvMTkvMjAxNicpO1xuICogLy89PiAgMjQzM1xuICogYGBgXG4gKlxuICogQG5hbWUgd2Vla0lkZW50aWZpZXJcbiAqIEBwYXJhbSAge1N0cmluZ30gYFtkYXRlXWAgZXZlcnkgdmFsaWQgRGF0ZS1pc2ggc3RyaW5nIGZvcm1hdFxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gd2Vla0lkZW50aWZpZXIoZGF0ZSkge1xuICB2YXIgaW5zdGFuY2U7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyAmJiBkYXRlLmxlbmd0aCkge1xuICAgIGluc3RhbmNlID0gbmV3IERhdGUoZGF0ZSk7XG4gIH0gZWxzZSBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBpbnN0YW5jZSA9IGRhdGU7XG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgRGF0ZSgpO1xuICB9XG4gIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhpcyBkYXRlIG9iamVjdFxuICB2YXIgdGFyZ2V0ID0gbmV3IERhdGUoaW5zdGFuY2UudmFsdWVPZigpKTtcbiAgLy8gU3RhcnRpbmcgZGF0ZSBwb2ludCBmb3Igb3VyIHNlcXVlbmNlXG4gIHZhciBsYXN0RGF5T2ZXZWVrWmVyb1RpbWVzdGFtcCA9IG5ldyBEYXRlKCdKYW51YXJ5IDUsIDE5NzAgMDA6MDA6MDAnKS5nZXRUaW1lKCkgLSAxO1xuICAvLyBOdW1iZXIgb2Ygd2VlayBmcm9tIG91ciBzdGFydGluZyBkYXRlXG4gIHZhciB3ZWVrTnVtYmVyZGlmZiA9IE1hdGguY2VpbCgodGFyZ2V0LmdldFRpbWUoKSAtIGxhc3REYXlPZldlZWtaZXJvVGltZXN0YW1wKSAvICgyNCAqIDM2MDAgKiAxMDAwICogNykpO1xuXG4gIHJldHVybiB3ZWVrTnVtYmVyZGlmZjtcbn1cblxuLyoqXG4gKiBHZXQgbW9uZGF5IGRhdGUgb2YgdGhlIGdpdmVuIHdlZWsgaWRlbnRpZmllclxuICpcbiAqICAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgd2Vla0lkZW50aWZpZXIgPSByZXF1aXJlKCdjdXJyZW50LXdlZWstbnVtYmVyJyk7XG4gKlxuICogd2Vla0lkZW50aWZpZXIuZGF0ZUZyb21XZWVrKDI0MDMpO1xuICogLy89PiBKYW51YXJ5IDE4LCAyMDE2IDAwOjAwOjAwXG4gKlxuICogYGBgXG4gKiBAbmFtZSB3ZWVrSWRlbnRpZmllci5kYXRlRnJvbVdlZWtcbiAqIEBwYXJhbSAge051bWJlcn0gd2Vla0lkZW50aWZpZXJcbiAqIEByZXR1cm4ge0RhdGV9IE1vbmRheSBvZiB0aGUgZ2l2ZW4gd2VlayBpZGVudGlmaWVyIG9yIEphbnVhcnkgNSwgMTk3MCAwMDowMDowMCBpZiB3ZWVrSWRlbnRpZmllciBpcyBub3QgPiAwLlxuICovXG5mdW5jdGlvbiBkYXRlRnJvbVdlZWsod2Vla0lkZW50aWZpZXIpIHtcbiAgaWYgKGlzTmFOKHBhcnNlRmxvYXQod2Vla0lkZW50aWZpZXIpKSkge1xuICAgIHJldHVybiBOYU47XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RhcnRpbmcgZGF0ZSBwb2ludCBmb3Igb3VyIHNlcXVlbmNlXG4gICAgdmFyIGZpcnN0RGF5T2ZXZWVrT25lLCBtb25kYXlPZldlZWs7XG4gICAgbW9uZGF5T2ZXZWVrID0gZmlyc3REYXlPZldlZWtPbmUgPSBuZXcgRGF0ZSgnSmFudWFyeSA1LCAxOTcwIDAwOjAwOjAwJyk7XG4gICAgaWYgKHdlZWtJZGVudGlmaWVyID4gMCkge1xuICAgICAgbW9uZGF5T2ZXZWVrID0gbmV3IERhdGUoKCh3ZWVrSWRlbnRpZmllciAtIDEpICogKDI0ICogMzYwMCAqIDEwMDAgKiA3KSkgKyBmaXJzdERheU9mV2Vla09uZS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbW9uZGF5T2ZXZWVrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZSwgc3RyaW5naWZ5IH0gZnJvbSAnZmxhdHRlZCc7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eby5qc1wiO1xuY29uc3QgZ2VuZXJhdGVVbmlxdWVJZCA9IHJlcXVpcmUoXCJnZW5lcmF0ZS11bmlxdWUtaWRcIik7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHByb2plY3QgaXRlbS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdC4gXG4gKiBAcGFyYW0ge0FycmF5fSB0b0RvSXRlbXMgLSBBcnJheSBjb250YWluaW5nIFRvRG8gb2JqZWN0cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIElEIGZvciB0aGUgcHJvZWpjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuXG4gICAgLy8gU3RvcmFnZSBvZiBhbGwgXCJQcm9qZWN0XCIgaW5zdGFuY2VzLlxuICAgIHN0YXRpYyBwcm9qZWN0cyA9IFtdO1xuXG4gICAgLy8gSG9tZSBwcm9qZWN0LlxuICAgIHN0YXRpYyBob21lO1xuXG4gICAgLy8gTG9hZCBzYXZlZCBcIlByb2plY3QucHJvamVjdHNcIiBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIC8vIExvYWQgc2VyaWFsaXplZCBzYXZlZCBwcm9qZWN0cy5cbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFNhdmVkUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC5wcm9qZWN0c1wiKTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTYXZlZFByb2plY3QpIHtcblxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHNlcmlhbGl6ZWQgc2F2ZSBwcm9qZWN0cy5cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3QgPSBwYXJzZShzZXJpYWxpemVkU2F2ZWRQcm9qZWN0KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJsYW5rIFwiUHJvamVjdFwiIG9iamVjdHMgdG8gYmUgcG9wdWxhdGVkLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3IFByb2plY3QobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHRoZSBibGFuayBwcm9qZWN0cyB3aXRoIFwicHJvamVjdCB0aWxlXCIsIFwidG8tZG8gaXRlbXNcIiwgYW5kIFwicHJvamVjdCBpZFwiIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwcm9qZWN0cycgcmVzcGVjdGl2ZSB0aXRsZXMuXG4gICAgICAgICAgICAgICAgUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSA9IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3RbaV0udGl0bGU7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3RzJyByZXNwZWN0aXZlIHRvLWRvIGl0ZW1zLlxuICAgICAgICAgICAgICAgIHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3RbaV0udG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0LnByb2plY3RzW2ldLmFkZFRvRG8obmV3IFRvRG8oLi4uT2JqZWN0LnZhbHVlcyh0b0RvSXRlbSkpKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwcm9qZWN0cydzIHJlc3BlY3RpdmUgSUQuXG4gICAgICAgICAgICAgICAgUHJvamVjdC5wcm9qZWN0c1tpXS5pZCA9IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3RbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBwcm9qZWN0cyB0byBiZSBsb2FkLCBjcmVhdGUgZGVmYXVsdCBcIkhvbWVcIiBwcm9qZWN0IGFuZCBcIkNvbXBsZXRlZFwiIHByb2plY3QuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJIb21lXCIsIG51bGwsIFwiaG9tZS1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJDb21wbGV0ZWRcIiwgbnVsbCwgXCJjb21wbGV0ZWQtcHJvamVjdFwiKTtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiVG9kYXlcIiwgbnVsbCwgXCJ0b2RheS1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJUaGlzIFdlZWtcIiwgbnVsbCwgXCJ0aGlzLXdlZWstcHJvamVjdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1dCBob21lIHByb2plY3QgdG8gc3RhdGljIHZhcmlhYmxlLlxuICAgICAgICBQcm9qZWN0LmhvbWUgPSBQcm9qZWN0LnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBcImhvbWUtcHJvamVjdFwiKTtcbiAgICB9XG5cbiAgICAvLyBQcm9qZWN0IENvbnN0cnVjdG9yLlxuICAgIGNvbnN0cnVjdG9yKHRpdGxlID0gbnVsbCwgdG9Eb0l0ZW1zID0gbnVsbCwgaWQgPSBudWxsKSB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IHRpdGxlLlxuICAgICAgICB0aGlzLnRpdGxlID0gKHRpdGxlICE9PSBudWxsKSA/IHRpdGxlIDogbnVsbDtcblxuICAgICAgICAvLyBTZXQgdGhlIFwidG9Eb0l0ZW1zXCIgYXJyYXkuXG4gICAgICAgIGlmICh0b0RvSXRlbXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudG9Eb0l0ZW1zID0gdG9Eb0l0ZW1zO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgXCJ0b0RvSXRlbXNcIiB0byBibGFuayBhcnJheSBpZiBub25lIGlzIHByb3ZpZGVkIGR1cmluZyBpbnN0YW50aWF0aW9uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9Eb0l0ZW1zID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgcHJvamVjdCdzIElEIHRvIGdpdmVuIHByb2plY3QgSUQgZHVyaW5nIHByb2plY3QgaW5zdGFudGlhdGlvbi5cbiAgICAgICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGEgZ2VuZXJhdGVkIDE1LWNoYXJhY3RlciBJRCB0byBwcm9qZWN0IGlmIG5vdGhpbmcgd2FzIHByb3ZpZGVkIGR1cmluZyBQcm9qZWN0J3MgaW5zdGFudGlhdGlvbi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gZ2VuZXJhdGVVbmlxdWVJZCh7IGxlbmd0aDogMTUsIHVzZU51bWJlcnM6IHRydWUsIHVzZUxldHRlcnM6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbmV3IFByb2plY3Qgb2JqZWN0IGluc2lkZSBcInByb2plY3RzXCIgYXJyYXkuXG4gICAgICAgIFByb2plY3QucHJvamVjdHMucHVzaCh0aGlzKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIFwiUHJvamVjdC5wcm9qZWN0c1wiIGFycmF5LlxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoUHJvamVjdC5wcm9qZWN0cy5pbmRleE9mKHRoaXMpLCAxKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIEVkaXQgcHJvamVjdCB0aXRsZS5cbiAgICBzZXRQcm9qZWN0VGl0bGUobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGEgVG9EbyBJdGVtIGluc2lkZSB0aGUgcHJvamVjdC5cbiAgICBhZGRUb0RvKFRvRG8pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgcmVmZXJlbmNlIHByb3BlcnR5IG9mIHRoZSBUb0RvIGl0ZW0gdG8gJ3RoaXMnIGN1cnJlbnQgcHJvamVjdCBpbnN0YW5jZS5cbiAgICAgICAgVG9Eby5wcm9qZWN0ID0gdGhpcztcblxuICAgICAgICAvLyBBZGQgdGhlIHRvIGRvIGl0ZW0gdG8gJ3RoaXMnIHByb2plY3RzIGFycmF5IG9mIHRvIGRvIGl0ZW1zLlxuICAgICAgICB0aGlzLnRvRG9JdGVtcy5wdXNoKFRvRG8pO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIGEgVG9EbyBJdGVtIGluc2lkZSB0aGUgcHJvamVjdCdzIFwidG9Eb0l0ZW1zXCIgYXJyYXkuXG4gICAgZGVsZXRlVG9EbyhUb0RvKSB7XG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zLnNwbGljZSh0aGlzLnRvRG9JdGVtcy5pbmRleE9mKFRvRG8pLCAxKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgVG9EbyBpdGVtcyBpbnNpZGUgdGhlIHByb2plY3QncyBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgIHJlcGxhY2VUb0RvKG5ld1RvRG8sIG9sZFRvRG8pIHtcblxuICAgICAgICAvLyBTZXQgbmV3IFRvRG8gaXRlbSdzIHByb2plY3QgcmVmZXJlbmNlIHRvIHRoaXMgcHJvamVjdC5cbiAgICAgICAgbmV3VG9Eby5wcm9qZWN0ID0gdGhpcztcblxuICAgICAgICAvLyBSZXBsYWNlIFRvRG8gaXRlbSB3aXRoIHRoZSBuZXcgVG9EbyBpdGVtLlxuICAgICAgICB0aGlzLnRvRG9JdGVtc1t0aGlzLnRvRG9JdGVtcy5pbmRleE9mKG9sZFRvRG8pXSA9IG5ld1RvRG87XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI3NhdmVDaGFuZ2VzKCkge1xuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3QucHJvamVjdHNcIiwgc3RyaW5naWZ5KFByb2plY3QucHJvamVjdHMpKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBjbGFzc1xuICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgdG8tZG8gaXRlbSB3aXRoIHZhcmlvdXMgZGV0YWlscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvciBuYW1lIG9mIHRoZSB0by1kbyBpdGVtLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgdG8tZG8gaXRlbS5cbiAqIEBwYXJhbSB7RGF0ZX0gZHVlRGF0ZSAtIFRoZSBkdWUgZGF0ZSBmb3IgY29tcGxldGluZyB0aGUgdG8tZG8gaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmlvcml0eSAtIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgdG8tZG8gaXRlbSAoZS5nLiwgXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCIpLlxuICogQHBhcmFtIHtzdHJpbmd9IG5vdGVzIC0gQWRkaXRpb25hbCBub3RlcyBvciBjb21tZW50cyByZWxhdGVkIHRvIHRoZSB0by1kbyBpdGVtLlxuICovXG5leHBvcnQgY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNvbXBsZXRlZD1udWxsLCBkYXRlQW5kVGltZUNyZWF0ZWQ9bnVsbCwgZGF0ZU1vZGlmaWVkPW51bGwsIHByb2plY3QgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAoY29tcGxldGVkICE9PSBudWxsKSA/IGNvbXBsZXRlZCA6IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGVBbmRUaW1lQ3JlYXRlZCA9IChkYXRlQW5kVGltZUNyZWF0ZWQgIT09IG51bGwpID8gZGF0ZUFuZFRpbWVDcmVhdGVkIDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICB0aGlzLmRhdGVNb2RpZmllZCA9IChkYXRlTW9kaWZpZWQgIT09IG51bGwpID8gZGF0ZU1vZGlmaWVkIDogbnVsbDtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gKHByb2plY3QgIT09IG51bGwpID8gcHJvamVjdCA6IG51bGw7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9Ebyh0aGlzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcG9wVXBQcm9qZWN0RWRpdG9yRm9ybSB9IGZyb20gXCIuL3BvcFVwUHJvamVjdEVkaXRvckZvcm0uanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG4gXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkge1xuXG4gICAgLy8gQ3JlYXRlIGEgY2FyZCBmb3IgXCJQcm9qZWN0XCIuXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jYXJkXCJcbiAgICBwcm9qZWN0Q2FyZC5pZCA9IHByb2plY3QuaWQ7XG5cbiAgICAvLyBBZGQgcmVmZXJlY2UgdG8gdGhlIHByb2plY3Qgb2JqZWN0LlxuICAgIHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2UgPSBwcm9qZWN0O1xuXG4gICAgLy8gQWRkICdob21lJyBpY29uIHRvIGhvbWUtcHJvamVjdC5cbiAgICBpZiAocHJvamVjdC5pZCA9PT0gXCJob21lLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvbWVJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICBob21lSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5ob21lPC90aXRsZT48cGF0aCBkPVwiTTEwLDIwVjE0SDE0VjIwSDE5VjEySDIyTDEyLDNMMiwxMkg1VjIwSDEwWlwiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuICAgIH1cbiAgICAvLyBBZGQgJ2NvbXBsZXRlZCcgaWNvbiB0byBjb21wbGV0ZWQtcHJvamVjdC5cbiAgICBlbHNlIGlmIChwcm9qZWN0LmlkID09PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbXBsZXRlZEljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIGNvbXBsZXRlZEljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2stY2lyY2xlPC90aXRsZT48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMCAxN0w1IDEyTDYuNDEgMTAuNTlMMTAgMTQuMTdMMTcuNTkgNi41OEwxOSA4TDEwIDE3WlwiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoY29tcGxldGVkSWNvbik7XG4gICAgfVxuICAgIC8vIEFkZCAndG9kYXknIGljb24gdG8gdG9kYXktcHJvamVjdC5cbiAgICBlbHNlIGlmIChwcm9qZWN0LmlkID09PSBcInRvZGF5LXByb2plY3RcIikge1xuICAgICAgICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RheUljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIHRvZGF5SWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53aGl0ZS1iYWxhbmNlLXN1bm55PC90aXRsZT48cGF0aCBkPVwiTTMuNTUgMTkuMDlMNC45NiAyMC41TDYuNzYgMTguNzFMNS4zNCAxNy4yOU0xMiA2QzguNjkgNiA2IDguNjkgNiAxMlM4LjY5IDE4IDEyIDE4IDE4IDE1LjMxIDE4IDEyQzE4IDguNjggMTUuMzEgNiAxMiA2TTIwIDEzSDIzVjExSDIwTTE3LjI0IDE4LjcxTDE5LjA0IDIwLjVMMjAuNDUgMTkuMDlMMTguNjYgMTcuMjlNMjAuNDUgNUwxOS4wNCAzLjZMMTcuMjQgNS4zOUwxOC42NiA2LjgxTTEzIDFIMTFWNEgxM002Ljc2IDUuMzlMNC45NiAzLjZMMy41NSA1TDUuMzQgNi44MUw2Ljc2IDUuMzlNMSAxM0g0VjExSDFNMTMgMjBIMTFWMjNIMTNcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRvZGF5SWNvbik7XG4gICAgfVxuICAgIC8vIEFkZCAndGhpcy13ZWVrJyBpY29uIHRvIHRoaXMtd2Vlay1wcm9qZWN0LlxuICAgIGVsc2UgaWYgKHByb2plY3QuaWQgPT09IFwidGhpcy13ZWVrLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCB0aGlzV2Vla0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzV2Vla0ljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIHRoaXNXZWVrSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci13ZWVrPC90aXRsZT48cGF0aCBkPVwiTTYgMUg4VjNIMTZWMUgxOFYzSDE5QzIwLjExIDMgMjEgMy45IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuODkgMyA1IDNINlYxTTUgOFYxOUgxOVY4SDVNNyAxMEgxN1YxMkg3VjEwWlwiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGhpc1dlZWtJY29uKTtcbiAgICB9XG5cbiAgICAvLyBQdXQgcHJvamVjdCB0aXRsZSBpbnNpZGUgdGhlIHByb2plY3QgY2FyZC5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSBcInByb2plY3QtbmFtZVwiXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAvLyBPbmx5IGFkZCBmZWF0dXJlIGJ1dHRvbnMgdG8gXCJub24tSG9tZVwiIHByb2plY3RzLlxuICAgIGlmIChwcm9qZWN0LmlkICE9PSBcImhvbWUtcHJvamVjdFwiICYmIHByb2plY3QuaWQgIT09IFwiY29tcGxldGVkLXByb2plY3RcIiAmJiBwcm9qZWN0LmlkICE9PSBcInRvZGF5LXByb2plY3RcIiAmJiBwcm9qZWN0LmlkICE9PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIpIHtcbiAgICAgICAgYWRkRGVsZXRlQnV0dG9uKHByb2plY3RDYXJkKTtcbiAgICAgICAgYWRkRWRpdEJ1dHRvbihwcm9qZWN0Q2FyZCk7XG4gICAgfVxuXG4gICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgdGhlIHByb2plY3QgY29ycmVzcG9uZGluZyB0byBwcm9qZWN0IGNhcmQuXG4gICAgICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuXG5cbmZ1bmN0aW9uIGFkZERlbGV0ZUJ1dHRvbihwcm9qZWN0Q2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b24uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGVcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVsZXRlIHN2ZyBpY29uLlxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGVsZXRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU05LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4SDExVjE3SDlWOE0xMyw4SDE1VjE3SDEzVjhaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZGVsZXRlIGZ1bmN0aW9uYWxpdHkgdG8gZGVsZXRlIGJ1dHRvbi5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIEFzayB0aGUgdXNlciBmb3IgZGVsZXRlIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBkZWxldGlvbj9cIikpIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChiYWNrLWVuZClcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2UuZGVsZXRlKCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIFwiVG8tRG9cIiB0YWJzLlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby10YWJcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAgICAgLy8gTWFrZSBcIkhvbWVcIiBwcm9qZWN0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCB3aGVuIGN1cnJlbnQgcHJvamVjdCBpcyBkZWxldGVkLlxuICAgICAgICAgICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KFByb2plY3QuaG9tZSk7XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChmcm9udC1lbmQpXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3RDYXJkKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xufVxuXG5cbmZ1bmN0aW9uIGFkZEVkaXRCdXR0b24ocHJvamVjdENhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBFZGl0IGJ1dHRvbi5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgSWNvbi5cbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5FZGl0PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LDIuOSAxNy4zNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBlZGl0IGZ1bmN0aW9uYWxpdHkgdG8gZWRpdCBidXR0b24gYnkgcG9wcGluZyB0aGUgXCJwcm9qZWN0IGVkaXRvciBmb3JtXCIuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcFByb2plY3RFZGl0b3JGb3JtKHByb2plY3RDYXJkKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbn0iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZS5qc1wiO1xuaW1wb3J0IHsgcG9wVXBUb0RvRWRpdG9yRm9ybSB9IGZyb20gXCIuL3BvcFVwVG9Eb0VkaXRvckZvcm0uanNcIjtcbmltcG9ydCB7IHBvcFVwVG9Eb0luZm9DYXJkIH0gZnJvbSBcIi4vcG9wVXBUb0RvSW5mb0NhcmQuanNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvRG9DYXJkKFRvRG8pIHtcblxuICAgIC8vIENyZWF0ZSB0by1kbyBjYXJkIGRpdi5cbiAgICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXJcIlxuXG4gICAgLy8gQWRkIHJlZmVyZW5jZSB0byB0aGUgVG9Eby5cbiAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlID0gVG9EbztcblxuICAgIGFkZENoZWNrQm94KHRvRG9DYXJkKTtcblxuICAgIC8vIEFwcGx5IFwiY29tcGxldGVkIGVmZmVjdHNcIiB0byB0by1kbyBpdGVtcyB0aGF0IGFyZSBjb21wbGV0ZWQuXG4gICAgaWYgKHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkKSB7XG4gICAgICAgIHRvRG9DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tY2hlY2tib3hcIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyIGNvbXBsZXRlZFwiO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0by1kbyB0aXRsZSBjb250YWluZXIuXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvVGl0bGUuY2xhc3NOYW1lID0gXCJ0by1kby10aXRsZVwiXG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gVG9Eby50aXRsZTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIGR1ZSBkYXRlIGNvbnRhaW5lci5cbiAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBDbGFzc2lmeSB3aGV0aGVyIFRvRG8gZHVlIGRhdGUgaXMgYWxyZWFkeSBsYXRlIG9yIGp1c3QgdXBjb21pbmcuXG4gICAgaWYgKGlzVG9Eb0xhdGUoVG9Eby5kdWVEYXRlKSkge1xuICAgICAgICB0b0RvRHVlRGF0ZS5jbGFzc05hbWUgPSBcInRvLWRvLWR1ZS1kYXRlIGxhdGVcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXRlXCIsIFRvRG8uZHVlRGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0b0RvRHVlRGF0ZS5jbGFzc05hbWUgPSBcInRvLWRvLWR1ZS1kYXRlIHVwY29taW5nXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90LWxhdGVcIiwgVG9Eby5kdWVEYXRlKTtcbiAgICB9XG5cbiAgICB0b0RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7Zm9ybWF0RGF0ZShUb0RvLmR1ZURhdGUpfWA7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG5cbiAgICBhZGRWaWV3QnV0dG9uKHRvRG9DYXJkKTtcbiAgICBhZGREZWxldGVCdXR0b24odG9Eb0NhcmQpO1xuICAgIGFkZEVkaXRCdXR0b24odG9Eb0NhcmQpO1xuXG4gICAgcmV0dXJuIHRvRG9DYXJkO1xufVxuXG5cbi8vIENoZWNrIHdoZXRoZXIgVG9EbyBsYXRlIGlzIGxhdGUgb3Igbm90LlxuZnVuY3Rpb24gaXNUb0RvTGF0ZShkdWVEYXRlKSB7XG5cbiAgICAvLyBHZXQgY3VycmVudCBkYXRlIGluIFwiWVlZWS1NTS1ERFwiIGZvcm1hdC5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG4gICAgLy8gQ3VycmVudCBkYXRlIGlzIGFoZWFkIG9mIGR1ZSBkYXRlIGhlbmNlIFRvRG8gaXMgbGF0ZS5cbiAgICBpZiAoY3VycmVudERhdGUgPiBkdWVEYXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IGRhdGUgaXMgYmVoaW5kIGR1ZSBkYXRlIGhlbmNlIFRvRG8gaXMgbm90IGxhdGUuXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gYWRkRGVsZXRlQnV0dG9uKHRvRG9DYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvbi5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkZWxldGUgc3ZnIGljb24uXG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EZWxldGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhIMTFWMTdIOVY4TTEzLDhIMTVWMTdIMTNWOFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBkZWxldGUgZnVuY3Rpb25hbGl0eSB0byBkZWxldGUgYnV0dG9uLlxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIC8vIEFzayB0aGUgdXNlciBmb3IgZGVsZXRlIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBkZWxldGlvbj9cIikpe1xuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGJhY2stZW5kKVxuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZWxldGUoKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGZyb250LWVuZClcbiAgICAgICAgICAgIHRvRG9DYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9Eb0NhcmQpO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkRWRpdEJ1dHRvbih0b0RvQ2FyZCkge1xuICAgIC8vIENyZWF0ZSBFZGl0IGJ1dHRvbi5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgSWNvbi5cbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5FZGl0PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LDIuOSAxNy4zNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBlZGl0IGZ1bmN0aW9uYWxpdHkgdG8gZWRpdCBidXR0b24gYnkgcG9wcGluZyB0aGUgXCJ0by1kbyBlZGl0b3IgZm9ybVwiLlxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXBUb0RvRWRpdG9yRm9ybSh0b0RvQ2FyZCk7XG4gICAgfSk7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZFZpZXdCdXR0b24odG9Eb0NhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBWaWV3IGJ1dHRvbi5cbiAgICBjb25zdCB2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB2aWV3QnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgSWNvbi5cbiAgICB2aWV3QnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5WaWV3IFRvRG8gSW5mb3JtYXRpb248L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMyw5SDExVjdIMTNNMTMsMTdIMTFWMTFIMTNNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIFwidmlldyB0by1kb1wiIGZ1bmN0aW9uYWxpdHkgdG8gdmlldyBidXR0b24gYnkgcG9wcGluZyBhIFwiZGl2XCIgY29udGFpbmluZyB0aGUgdG8tZG8gaXRlbSdzIGluZm8uXG4gICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcFRvRG9JbmZvQ2FyZCh0b0RvQ2FyZCk7XG4gICAgfSk7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodmlld0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZENoZWNrQm94KHRvRG9DYXJkKSB7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja0JveC5jbGFzc05hbWUgPSBcInRvLWRvLWNoZWNrYm94XCJcblxuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBpc1RvRG9Db21wbGV0ZWQgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZFxuICAgICAgICBpZiAoaXNUb0RvQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXJcIlxuXG4gICAgICAgICAgICAvLyBJZiBhICdjb21wbGV0ZWQnIHRvLWRvIGlzIHNldCB0byAndW5maW5pc2hlZCcgdG8gZG8sIHJlbW92ZSBpdCBmcm9tIHRoZSBcIkNvbXBsZXRlZFwiIHByb2plY3QncyB0by1kbyB3aW5kb3cuXG4gICAgICAgICAgICBpZiAoZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIikge1xuICAgICAgICAgICAgICAgIHRvRG9DYXJkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodG9Eb0NhcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXIgY29tcGxldGVkXCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gVXBkYXRlIGNoYW5nZXMgaW5zaWRlIHBhcmVudCBwcm9qZWN0LlxuICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByb2plY3QucmVwbGFjZVRvRG8odG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSk7XG4gICAgfSk7XG5cbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChjaGVja0JveClcbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpbnB1dERhdGUpIHtcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgIFwiSmFuLlwiLCBcIkZlYi5cIiwgXCJNYXIuXCIsIFwiQXByLlwiLCBcIk1heVwiLCBcIkp1bi5cIixcbiAgICAgICAgXCJKdWwuXCIsIFwiQXVnLlwiLCBcIlNlcC5cIiwgXCJPY3QuXCIsIFwiTm92LlwiLCBcIkRlYy5cIlxuICAgIF07XG5cbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBpbnB1dERhdGUuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHttb250aHNbTnVtYmVyKG1vbnRoKSAtIDFdfSAke3BhcnNlSW50KGRheSwgMTApfSwgJHt5ZWFyfWA7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0Q2FyZC5qc1wiO1xuaW1wb3J0IHsgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBQcm9qZWN0QWRkZXJGb3JtKCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWFkZGVyLWZvcm1cIjtcbiAgICBmb3JtLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtdGl0bGVcIiBwbGFjZWhvbGRlcj1cIkhlbGxvXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZCBQcm9qZWN0XCI+YDtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0byBmb3JtIHRoYXQgY3JlYXRlcyB0aGUgUHJvamVjdCBvbmNlIHN1Ym1pdHRlZC5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEdldCBwcm9qZWN0J3MgdGl0bGUuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIFByb2plY3QuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIHByb2plY3QgY2FyZCByZXByZXNlbnRhdGlvbi5cbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KVxuXG4gICAgICAgIC8vIFJlbmRlciBuZXcgcHJvamVjdCB0byBET00gYnkgYXBwZW5kaW5nIFxuICAgICAgICBjb25zdCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgICAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RDYXJkLCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcm9qZWN0LWFkZGVyXCIpKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBuZXdseSBjcmVhdGVkIHByb2plY3QgYXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0LlxuICAgICAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZvcm0gd2hlbiBkb25lLlxuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBwb3BVcFByb2plY3RFZGl0b3JGb3JtKHByb2plY3RDYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICAvLyBDcmVhdGUgcHJvamVjdCBlZGl0b3IgZm9ybS5cbiAgICBjb25zdCBwcm9qZWN0RWRpdG9yRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHByb2plY3RFZGl0b3JGb3JtLmNsYXNzTmFtZSA9IFwicHJvamVjdC1lZGl0b3ItZm9ybVwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRvckZvcm0pO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSAgbmV3LXByb2plY3QtdGl0bGUgaW5wdXQgZmllbGQuXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LmlkID0gXCJwcm9qZWN0LXRpdGxlXCI7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlLnRpdGxlO1xuICAgIHByb2plY3RFZGl0b3JGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZUlucHV0KTtcblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uLlxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJEb25lXCI7XG4gICAgcHJvamVjdEVkaXRvckZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgcHJvamVjdEVkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIHByb2plY3QgZWRpdG9yIGZvcm0gdGhhdCBtb2RpZmllcyB0aGUgcHJvamVjdCB0aXRsZSB3aGVuIHN1Ym1pdHRlZC5cbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEFzayBmb3IgdXNlciBjb25maXJtYXRpb24gYmVmb3JlIGVkaXRpbmcuXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gY2hhbmdlcz9cIikpe1xuICAgICAgICAgICAgLy8gTW9kaWZ5IHByb2plY3QgdGl0bGUgaW4gYmFjay1lbmQuXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlLnNldFByb2plY3RUaXRsZShuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIE1vZGlmeSBwcm9qZWN0IHRpdGxlIGluIGZyb250LWVuZC5cbiAgICAgICAgICAgIHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmVudC1wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmb3JtIGZyb20gdGhlIERPTSB3aGVuIHN1Ym1pdHRlZC5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn0iLCJpbXBvcnQgeyByZW5kZXJUb0RvV2luZG93IH0gZnJvbSBcIi4vcmVuZGVyVG9Eb1dpbmRvdy5qc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG8uanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUb0RvQWRkZXJGb3JtKCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdG9Eb0FkZGVyRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRvRG9BZGRlckZvcm0uY2xhc3NOYW1lID0gXCJ0by1kby1hZGRlci1mb3JtXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQWRkZXJGb3JtKTtcblxuICAgIC8vIENyZWF0ZSB0aXRsZSBpbnB1dC5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJUaXRsZTpcIiwgdGl0bGVJbnB1dCkpO1xuXG4gICAgLy8gQ3JlYXRlIGRlc2NyaXB0aW9uIGFyZWEuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSA0O1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiRGVzY3JpcHRpb246XCIsIGRlc2NyaXB0aW9uVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBkdWUgZGF0ZSBpbnB1dC5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEdWUgRGF0ZTpcIiwgZHVlRGF0ZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgVG9EbyBwcmlvcml0eSBzZWxlY3Rpb24uXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblZhbHVlO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJQcmlvcml0eTpcIiwgcHJpb3JpdHlTZWxlY3QpKTtcblxuICAgIC8vIENyZWF0ZSBOb3RlIGlucHV0LlxuICAgIGNvbnN0IG5vdGVzVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbm90ZXNUZXh0YXJlYS5pZCA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLm5hbWUgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNUZXh0YXJlYS5yb3dzID0gNDtcbiAgICBub3Rlc1RleHRhcmVhLmNvbHMgPSA1MDtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiTm90ZXM6XCIsIG5vdGVzVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uLlxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXQtZm9ybVwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiQ3JlYXRlIFRvRG9cIjtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvbi5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KVxuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gZm9ybSB0aGF0IHdoZW4gc3VibWl0dGVkLCBhIFRvRG8gb2JqZWN0IGlzIGNyZWF0ZWQuXG4gICAgdG9Eb0FkZGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHRvRG9JdGVtID0gbmV3IFRvRG8oLi4uW3RvRG9UaXRsZSwgdG9Eb0Rlc2NyaXB0aW9uLCB0b0RvRHVlRGF0ZSwgdG9Eb1ByaW9yaXR5LCB0b0RvTm90ZXNdKVxuICAgICAgICBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKS5hZGRUb0RvKHRvRG9JdGVtKTtcblxuICAgICAgICAvLyBSZW5kZXIgVG8tRG8gaXRlbSBpbiAndG8tZG8nIHRhYiBpbW1lZGlhdGVseSBvbmNlIGNyZWF0ZWQuXG4gICAgICAgIHJlbmRlclRvRG9XaW5kb3coZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkpO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cblxuLy8gUmV0dXJucyBhIGRpdiBjb250YWluaW5nIGEgbGFiZWxlZCBpbnB1dC5cbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkRGl2KGxhYmVsVGV4dCwgaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgeyByZW5kZXJUb0RvV2luZG93IH0gZnJvbSBcIi4vcmVuZGVyVG9Eb1dpbmRvd1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUb0RvRWRpdG9yRm9ybSh0b0RvQ2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdG9Eb0VkaXRvckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0b0RvRWRpdG9yRm9ybS5jbGFzc05hbWUgPSBcInRvLWRvLWFkZGVyLWZvcm1cIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9FZGl0b3JGb3JtKVxuXG4gICAgLy8gQ3JlYXRlIHRpdGxlIGlucHV0LlxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UudGl0bGU7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJUaXRsZTpcIiwgdGl0bGVJbnB1dCkpO1xuXG4gICAgLy8gQ3JlYXRlIGRlc2NyaXB0aW9uIGFyZWEuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSA0O1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucmVxdWlyZWQgPSBmYWxzZTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbjtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkRlc2NyaXB0aW9uOlwiLCBkZXNjcmlwdGlvblRleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgZHVlIGRhdGUgaW5wdXQuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWUtZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGU7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEdWUgRGF0ZTpcIiwgZHVlRGF0ZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgVG9EbyBwcmlvcml0eSBzZWxlY3Rpb24uXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblZhbHVlO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcmlvcml0eTtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlByaW9yaXR5OlwiLCBwcmlvcml0eVNlbGVjdCkpO1xuXG4gICAgLy8gQ3JlYXRlIE5vdGUgaW5wdXQuXG4gICAgY29uc3Qgbm90ZXNUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBub3Rlc1RleHRhcmVhLmlkID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEubmFtZSA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLnJvd3MgPSA0O1xuICAgIG5vdGVzVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIG5vdGVzVGV4dGFyZWEudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiTm90ZXM6XCIsIG5vdGVzVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uLlxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXQtZm9ybVwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIGZvcm0gdGhhdCB3aGVuIHN1Ym1pdHRlZCwgYSBUb0RvIG9iamVjdCBpcyBjcmVhdGVkLlxuICAgIHRvRG9FZGl0b3JGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gYmVmb3JlIGVkaXRpbmcuXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gY2hhbmdlcz9cIikpIHtcbiAgICAgICAgICAgIC8vIFRoZSB1c2VyIGNsaWNrZWQgXCJPS1wiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFBhcnNlIGZvcm0gY29udHJvbCB2YWx1ZXMuXG4gICAgICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b0RvTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHRvIGRvLlxuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZSA9IHRvRG9UaXRsZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGVzY3JpcHRpb24gPSB0b0RvRGVzY3JpcHRpb247XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGUgPSB0b0RvRHVlRGF0ZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJpb3JpdHkgPSB0b0RvUHJpb3JpdHk7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzID0gdG9Eb05vdGVzO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kYXRlQW5kVGltZUNyZWF0ZWQgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRhdGVBbmRUaW1lQ3JlYXRlZDtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGF0ZU1vZGlmaWVkID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgVG9EbyBpdGVtIHdpdGggdGhlIFRvRG8gaXRlbSB3aXRoIGFsbCBjaGFuZ2VzIGFwcGxpZWQgaW4gdGhlIHBhcmVudCBwcm9qZWN0J3MgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJvamVjdC5yZXBsYWNlVG9Ebyh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRvLWRvIHRhYi5cbiAgICAgICAgICAgIHJlbmRlclRvRG9XaW5kb3coZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBET00gb25jZSBzdWJtaXR0ZWQuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cblxuLy8gUmV0dXJucyBhIGRpdiBjb250YWluaW5nIGEgbGFiZWxlZCBpbnB1dC5cbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkRGl2KGxhYmVsVGV4dCwgaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUb0RvSW5mb0NhcmQodG9Eb0NhcmQpIHtcbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZCBjb250YWluZXIuXG4gICAgY29uc3QgYmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tYmFja2dyb3VuZFwiXG5cbiAgICAvLyBDcmVhdGUgbWFpbiBjb250YWluZXIuXG4gICAgY29uc3QgdG9Eb0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby1jb250YWluZXJcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgY2xvc2UgZGl2XG4gICAgY29uc3QgY2xvc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRGl2LmNsYXNzTmFtZSA9IFwiY2xvc2UgaWNvblwiO1xuICAgIGNsb3NlRGl2LmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkNsb3NlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5LDNIMTYuM0g3LjdINUEyLDIgMCAwLDAgMyw1VjcuN1YxNi40VjE5QTIsMiAwIDAsMCA1LDIxSDcuN0gxNi40SDE5QTIsMiAwIDAsMCAyMSwxOVYxNi4zVjcuN1Y1QTIsMiAwIDAsMCAxOSwzTTE1LjYsMTdMMTIsMTMuNEw4LjQsMTdMNywxNS42TDEwLjYsMTJMNyw4LjRMOC40LDdMMTIsMTAuNkwxNS42LDdMMTcsOC40TDEzLjQsMTJMMTcsMTUuNkwxNS42LDE3WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBpbmZvLWZpZWxkIGRpdlxuICAgIGZ1bmN0aW9uIGNyZWF0ZUluZm9GaWVsZChsYWJlbCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5mb0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb0ZpZWxkLmNsYXNzTmFtZSA9IFwiaW5mby1maWVsZFwiO1xuXG4gICAgICAgIGNvbnN0IGluZm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9MYWJlbC5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tbGFiZWxcIjtcbiAgICAgICAgaW5mb0xhYmVsLnRleHRDb250ZW50ID0gbGFiZWwgKyBcIjpcIjtcbiAgICAgICAgaW5mb0ZpZWxkLmFwcGVuZENoaWxkKGluZm9MYWJlbCk7XG5cbiAgICAgICAgY29uc3QgaW5mb1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb1ZhbHVlLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby12YWx1ZVwiO1xuICAgICAgICBpbmZvVmFsdWUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgaW5mb0ZpZWxkLmFwcGVuZENoaWxkKGluZm9WYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGluZm9GaWVsZDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5mby1maWVsZCBkaXZzIGZvciBlYWNoIGZpZWxkXG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiVGl0bGVcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZSkpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIkR1ZSBEYXRlXCIsIGZvcm1hdERhdGUodG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kdWVEYXRlKSkpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIlByb2plY3RcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcm9qZWN0LnRpdGxlKSk7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiRGVzY3JpcHRpb25cIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbikpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIlByaW9yaXR5XCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJpb3JpdHkpKTtcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJOb3Rlc1wiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzKSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG1haW4gY29udGFpbmVyIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbnRhaW5lclxuICAgIGJhY2tncm91bmRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0luZm9Db250YWluZXIpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBkaXZcbiAgICBjbG9zZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGJhY2tncm91bmRDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kIHRvIGJvZHkuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZVRvRG9DYXJkXCI7XG5pbXBvcnQgeyBwb3BVcFRvRG9BZGRlckZvcm0gfSBmcm9tIFwiLi9wb3BVcFRvRG9BZGRlckZvcm1cIjtcbmltcG9ydCB7IHNvcnRUb0RvSXRlbXMgfSBmcm9tIFwiLi9zb3J0VG9Eb0l0ZW1zXCI7XG5jb25zdCBjb21wYXJlV2VlayA9IHJlcXVpcmUoXCJjb21wYXJlLXdlZWtcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb0RvV2luZG93KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgLy8gQWNjZXNzIGN1cnJlbnQgdG8gZG8gd2luZG93LlxuICAgIGNvbnN0IGN1cnJlbnRUb0RvV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby13aW5kb3dcIik7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgdG8gZG8gd2luZG93LlxuICAgIGNvbnN0IG5ld1RvRG9XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvRG9XaW5kb3cuY2xhc3NOYW1lID0gXCJ0by1kby13aW5kb3dcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgY3VycmVudCBwYXJlbnQgcHJvamVjdCBjYXJkIHRvIHRoZSB0by1kbyB3aW5kb3cuXG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lQ2FyZCA9IGNyZWF0ZUN1cnJlbnRQcm9qZWN0TmFtZUNhcmQoY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzb3J0ZXIuXG4gICAgY29uc3Qgc29ydGVyID0gY3JlYXRlU29ydGVyKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gdGFiLlxuICAgIGNvbnN0IHRvRG9UYWIgPSBjcmVhdGVUb0RvVGFiKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gYWRkZXIgYnV0dG9uLlxuICAgIGNvbnN0IHRvRG9BZGRlckJ1dHRvbiA9IGNyZWF0ZVRvRG9BZGRlckJ1dHRvbigpO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBjcmVhdGVkIGVsZW1lbnRzIHRvIHRoZSBuZXcgdG8tZG8gd2luZG93LlxuICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3ROYW1lQ2FyZCk7XG4gICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZChzb3J0ZXIpO1xuICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQodG9Eb1RhYik7XG4gICAgXG4gICAgLy8gT25seSBhZGQgdGhlIHRvLWRvIGFkZGVyIGJ1dHRvbiB0byBub24gXCJDb21wbGV0ZVwiIHByb2plY3RzLlxuICAgIGlmIChjdXJyZW50UHJvamVjdC5pZCAhPT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiICYmIGN1cnJlbnRQcm9qZWN0LmlkICE9PSBcInRvZGF5LXByb2plY3RcIiAmJiBjdXJyZW50UHJvamVjdC5pZCAhPT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiKSB7XG4gICAgICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQodG9Eb0FkZGVyQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgdG8gZG8gd2luZG93IHdpdGggbmV3IHRvIGRvIHdpbmRvdy5cbiAgICBjdXJyZW50VG9Eb1dpbmRvdy5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdUb0RvV2luZG93LCBjdXJyZW50VG9Eb1dpbmRvdyk7XG59XG5cblxuLy8gQ3JlYXRlIGEgY2FyZCBjb250YWluaW5nIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IHBhcmVudCBwcm9qZWN0LlxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFByb2plY3ROYW1lQ2FyZChjdXJyZW50UHJvamVjdCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQuY2xhc3NOYW1lID0gXCJwYXJlbnQtcHJvamVjdC1uYW1lXCJcbiAgICBjdXJyZW50UHJvamVjdE5hbWVDYXJkLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG5cbiAgICByZXR1cm4gY3VycmVudFByb2plY3ROYW1lQ2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29ydGVyKGN1cnJlbnRQcm9qZWN0KSB7XG5cbiAgICAvLyBDcmVhdGUgZGl2IHRvIGNvbnRhaW4gdGhlIHNvcnRlci5cbiAgICBjb25zdCBzb3J0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvcnRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNvcnQtY29udGFpbmVyXCJcblxuICAgIC8vIENyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHdheSB0byBjaG9vc2Ugc29ydGluZyBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNvcnRlci5pZCA9IFwic29ydGVyXCI7XG4gICAgc29ydGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRlcik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGxhYmVsIGZvciB0aGUgc29ydGVyLlxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzb3J0ZXIuaWQpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJTb3J0IGJ5OlwiO1xuICAgIHNvcnRlci5iZWZvcmUobGFiZWwpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkYXRhIHZhbHVlcyBvZiBvcHRpb25zIHRvIGJlIHNlbGVjdGVkLlxuICAgIGNvbnN0IHNvcnRpbmdPcHRpb25zID0gW1xuICAgICAgICB7IHZhbHVlOiBcInRpbWUtY3JlYXRlZC1hc2NlbmRpbmdcIiwgdGV4dDogXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwidGltZS1jcmVhdGVkLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJDcmVhdGVkIChOZXdlc3QgdG8gT2xkZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGF0ZS1hc2NlbmRpbmdcIiwgdGV4dDogXCJEYXRlIChhc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkYXRlLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJEYXRlIChkZXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwibmFtZS1hc2NlbmRpbmdcIiwgdGV4dDogXCJOYW1lIChhc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJuYW1lLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJOYW1lIChkZXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwicHJpb3JpdHktYXNjZW5kaW5nXCIsIHRleHQ6IFwiUHJpb3JpdHkgKExvd2VzdCB0byBIaWdoZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwicHJpb3JpdHktZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIlByaW9yaXR5IChIaWdoZXN0IHRvIExvd2VzdClcIiB9XG4gICAgXVxuXG4gICAgLy8gR2V0IGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb24gZnJvbSBjdXJyZW50IHNvcnRlci5cbiAgICBsZXQgY3VycmVudFNvcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydGVyXCIpO1xuICAgIFxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbiBvZiB0aGUgbmV3IHNvcnRlciB0byBiZSBjcmVhdGVkLlxuICAgIGxldCBuZXdDdXJyZW50U29ydE9wdGlvbjtcbiAgICBcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBzb3J0ZXIgdG8gYmUgcmVuZGVyZWQsIHNldCB0aGUgbmV3IHNvcnRlciBzZWxlY3RlZCBvcHRpb24gdG8gXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiLlxuICAgIGlmICghY3VycmVudFNvcnRlcikge1xuICAgICAgICBuZXdDdXJyZW50U29ydE9wdGlvbiA9IHNvcnRpbmdPcHRpb25zLmZpbmQoc29ydGluZ09wdGlvbiA9PiBzb3J0aW5nT3B0aW9uLnRleHQgPT09IFwiQ3JlYXRlZCAoT2xkZXN0IHRvIE5ld2VzdClcIik7XG4gICAgfVxuICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBmaXJzdCBzb3J0ZXIsIHNldCB0aGUgbmV3IHNvcnRlciBzZWxlY3RlZCBvcHRpb24gdG8gdGhlIGN1cnJlbnQgc29ydGVyIHNlbGVjdGVkIG9wdGlvbi5cbiAgICBlbHNlIHtcbiAgICAgICAgbmV3Q3VycmVudFNvcnRPcHRpb24gPSBjdXJyZW50U29ydGVyLnZhbHVlO1xuICAgIH1cblxuICAgIHNvcnRpbmdPcHRpb25zLmZvckVhY2goc29ydGluZ09wdGlvbiA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBvcHRpb24gZWxlbWVudC5cbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAvLyBBZGQgb3B0aW9uIHZhbHVlLlxuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc29ydGluZ09wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgLy8gQWRkIG9wdGlvbiB0ZXh0LWNvbnRlbnQuXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNvcnRpbmdPcHRpb24udGV4dDtcblxuICAgICAgICAvLyBNYWtlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uIG9mIGN1cnJlbnQgc29ydGVyIGNhcnJ5IG92ZXIgdG8gdGhlIG5ldyBzb3J0ZXIuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNvcnRpbmdPcHRpb24udmFsdWUgPT09IG5ld0N1cnJlbnRTb3J0T3B0aW9uO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgb3B0aW9uIHRvIHNvcnRlciBzZWxlY3QgZWxlbWVudC5cbiAgICAgICAgc29ydGVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcblxuICAgIC8vIFJlLXJlbmRlciB0by1kbyB0YWIgc28gdGhhdCB0by1kbyBpdGVtJ3MgbmV3IHNvcnQgY3JpdGVyYSB3aWxsIGJlIHJlZnJlY3RlZFxuICAgIHNvcnRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRvRG9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXRhYlwiKTtcbiAgICAgICAgY3VycmVudFRvRG9UYWIucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoY3JlYXRlVG9Eb1RhYihjdXJyZW50UHJvamVjdCksIGN1cnJlbnRUb0RvVGFiKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9Eb1RhYihjdXJyZW50UHJvamVjdCkge1xuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIHRhYi5cbiAgICBjb25zdCB0b0RvVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvVGFiLmNsYXNzTmFtZSA9IFwidG8tZG8tdGFiXCI7XG5cbiAgICAvLyBBcnJheSBmb3Igc3RvcmluZyBhbGwgdW5zb3J0ZWQgVG9EbyBpdGVtcy5cbiAgICBsZXQgdW5zb3J0ZWRUb0RvSXRlbXMgPSBbXTtcblxuICAgIC8vIFJlbmRlciBhbGwgVG9Eb3MgYWNyb3NzIGFsbCBwcm9qZWN0cyBpZiB0aGUgcHJvamVjdCBpcyBcIkhvbWVcIlxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gUHJvamVjdC5ob21lKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIFJlbmRlciBhbGwgY29tcGxldGVkIFRvRG9zIGZyb20gZGlmZmVyZW50IFByb2plY3JzIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpcyBcIkNvbXBsZXRlZFwiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIiApIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc29ydGVkVG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGFsbCBUb2RheSBUb0RvcyBmcm9tIGRpZmZlcmVudCBQcm9qZWNycyBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgaXMgXCJUb2RheVwiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwidG9kYXktcHJvamVjdFwiICkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9JdGVtc1xuICAgICAgICAgICAgLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIEdldCBjdXJyZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0IGN1cnJlbnQgZGF0ZSBzaW1pbGFyIHRvIHRoZSBkYXRlIHN0cnVjdHVyZSBvZiAnZHVlRGF0ZScgcHJvcGVydHkgb2YgVG9EbyBvYmplY3QuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0keyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke2N1cnJlbnREYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uZHVlRGF0ZSA9PT0gZm9ybWF0dGVkQ3VycmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBSZW5kZXIgYWxsIFRoaXMgV2VlayBUb0RvcyBmcm9tIGRpZmZlcmVudCBQcm9qZWNycyBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgaXMgXCJUaGlzIFdlZWtcIlxuICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIgKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgZHVlIGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gdG9Eb0l0ZW0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGR1ZSBkYXRlIG9mIGN1cnJlbnQgdG8gZG8gaXMgaW4gY3VycmVudCBcInRoaXMgd2Vla1wiLlxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlV2VlayhjdXJyZW50RGF0ZSwgZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBJZiBjdXJyZW50IHByb2plY3QgaXMgbm90IFwiSG9tZVwiIGFuZCBub3QgXCJDb21wbGV0ZWRcIiwgb25seSByZW5kZXIgaXRzIHJlc3BlY3RpdmUgVG9EbyBpdGVtcy5cbiAgICBlbHNlIHtcbiAgICAgICAgY3VycmVudFByb2plY3QudG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnQuXG4gICAgY29uc3Qgc29ydGVkVG9Eb0l0ZW1zID0gc29ydFRvRG9JdGVtcyh1bnNvcnRlZFRvRG9JdGVtcyk7XG5cbiAgICAvLyBSZW5kZXIgYWxsIFRvRG8gY2FyZHMgdG8gVG9EbyB0YWIuXG4gICAgc29ydGVkVG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICB0b0RvVGFiLmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9DYXJkKHRvRG9JdGVtKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9Eb1RhYjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvQWRkZXJCdXR0b24oKSB7XG5cbiAgICAvLyBDcmVhdGUgYSBidXR0b24gZWxlbWVudFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwidG8tZG8tYWRkZXJcIjtcblxuICAgIC8vIENyZWF0ZSBhbiBTVkcgZWxlbWVudCB1c2luZyBpbm5lckhUTUxcbiAgICBjb25zdCBzdmdIVE1MID0gYFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8dGl0bGU+QWRkIFRvRG88L3RpdGxlPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNywxM0gxM1YxN0gxMVYxM0g3VjExSDExVjdIMTNWMTFIMTdNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz5cbiAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIFNldCB0aGUgaW5uZXJIVE1MIG9mIHRoZSBidXR0b24gdG8gaW5jbHVkZSB0aGUgU1ZHIGFuZCBjYXB0aW9uXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IHN2Z0hUTUwgKyAnPGRpdiBjbGFzcz1cImJ1dHRvbi1jYXB0aW9uXCI+TmV3IFRvRG8uLi48L2Rpdj4nO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdGhhdCBwb3BzIHRoZSB0byBkbyBhZGRlciBmb3JtIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcFVwVG9Eb0FkZGVyRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBjcmVhdGVkIGJ1dHRvbiBlbGVtZW50XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0iLCJpbXBvcnQgeyByZW5kZXJUb0RvV2luZG93IH0gZnJvbSBcIi4vcmVuZGVyVG9Eb1dpbmRvd1wiO1xuXG5sZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIHJlbmRlclRvRG9XaW5kb3coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXR1cm4gY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0O1xufSIsIi8qKlxuICogU29ydHMgYW4gYXJyYXkgb2YgdG8tZG8gaXRlbXMgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHNvcnRpbmcgY3JpdGVyaWEuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdW5zb3J0ZWRUb0RvSXRlbXMgLSBBbiBhcnJheSBvZiB0by1kbyBpdGVtcyB0byBiZSBzb3J0ZWQuXG4gKiBAcmV0dXJucyB7QXJyYXl9ICBBbiBhcnJheSBvZiBzb3J0ZWQgdG8tZG8gaXRlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VG9Eb0l0ZW1zKHVuc29ydGVkVG9Eb0l0ZW1zKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHNvcnRlciBvciBzZXQgdGhlIGRlZmF1bHQgc29ydCBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0Q3JpdGVyaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvcnRlclwiKT8udmFsdWUgfHwgXCJ0aW1lLWNyZWF0ZWQtYXNjZW5kaW5nXCI7XG5cbiAgICAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIHNvcnQgY3JpdGVyaWEgdG8gY29tcGFyaXNvbiBmdW5jdGlvbnMuXG4gICAgY29uc3Qgc29ydEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgXCJkYXRlLWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMS5kdWVEYXRlKSAtIG5ldyBEYXRlKFRvRG8yLmR1ZURhdGUpLFxuICAgICAgICBcImRhdGUtZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMi5kdWVEYXRlKSAtIG5ldyBEYXRlKFRvRG8xLmR1ZURhdGUpLFxuICAgICAgICBcIm5hbWUtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IFRvRG8xLnRpdGxlLmxvY2FsZUNvbXBhcmUoVG9EbzIudGl0bGUpLFxuICAgICAgICBcIm5hbWUtZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBUb0RvMi50aXRsZS5sb2NhbGVDb21wYXJlKFRvRG8xLnRpdGxlKSxcbiAgICAgICAgXCJ0aW1lLWNyZWF0ZWQtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8xLmRhdGVBbmRUaW1lQ3JlYXRlZCkgLSBuZXcgRGF0ZShUb0RvMi5kYXRlQW5kVGltZUNyZWF0ZWQpLFxuICAgICAgICBcInRpbWUtY3JlYXRlZC1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8yLmRhdGVBbmRUaW1lQ3JlYXRlZCkgLSBuZXcgRGF0ZShUb0RvMS5kYXRlQW5kVGltZUNyZWF0ZWQpLFxuICAgICAgICBcInByaW9yaXR5LWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBwcmlvcml0eUxldmVsKFRvRG8xKSAtIHByaW9yaXR5TGV2ZWwoVG9EbzIpLFxuICAgICAgICBcInByaW9yaXR5LWRlc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gcHJpb3JpdHlMZXZlbChUb0RvMikgLSBwcmlvcml0eUxldmVsKFRvRG8xKSxcbiAgICB9O1xuXG4gICAgLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcmlvcml0eSBsZXZlbC5cbiAgICBjb25zdCBwcmlvcml0eUxldmVsID0gKFRvRG8pID0+IHtcbiAgICAgICAgc3dpdGNoIChUb0RvLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgY2FzZSBcIk1lZGl1bVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgY2FzZSBcIkxvd1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gSGFuZGxlIHVuZXhwZWN0ZWQgcHJpb3JpdHkgdmFsdWVzLlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNvcnQgdGhlIGFycmF5IHVzaW5nIHRoZSBzZWxlY3RlZCBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0ZWRUb0RvSXRlbXMgPSB1bnNvcnRlZFRvRG9JdGVtcy5zb3J0KHNvcnRGdW5jdGlvbnNbc29ydENyaXRlcmlhXSB8fCAoKCkgPT4gMCkpO1xuXG4gICAgcmV0dXJuIHNvcnRlZFRvRG9JdGVtcztcbn1cbiIsIi8qISAoYykgMjAyMCBBbmRyZWEgR2lhbW1hcmNoaSAqL1xuXG5jb25zdCB7cGFyc2U6ICRwYXJzZSwgc3RyaW5naWZ5OiAkc3RyaW5naWZ5fSA9IEpTT047XG5jb25zdCB7a2V5c30gPSBPYmplY3Q7XG5cbmNvbnN0IFByaW1pdGl2ZSA9IFN0cmluZzsgICAvLyBpdCBjb3VsZCBiZSBOdW1iZXJcbmNvbnN0IHByaW1pdGl2ZSA9ICdzdHJpbmcnOyAvLyBpdCBjb3VsZCBiZSAnbnVtYmVyJ1xuXG5jb25zdCBpZ25vcmUgPSB7fTtcbmNvbnN0IG9iamVjdCA9ICdvYmplY3QnO1xuXG5jb25zdCBub29wID0gKF8sIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgcHJpbWl0aXZlcyA9IHZhbHVlID0+IChcbiAgdmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUgPyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcbik7XG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoXywgdmFsdWUpID0+IChcbiAgdHlwZW9mIHZhbHVlID09PSBwcmltaXRpdmUgPyBuZXcgUHJpbWl0aXZlKHZhbHVlKSA6IHZhbHVlXG4pO1xuXG5jb25zdCByZXZpdmUgPSAoaW5wdXQsIHBhcnNlZCwgb3V0cHV0LCAkKSA9PiB7XG4gIGNvbnN0IGxhenkgPSBbXTtcbiAgZm9yIChsZXQga2UgPSBrZXlzKG91dHB1dCksIHtsZW5ndGh9ID0ga2UsIHkgPSAwOyB5IDwgbGVuZ3RoOyB5KyspIHtcbiAgICBjb25zdCBrID0ga2VbeV07XG4gICAgY29uc3QgdmFsdWUgPSBvdXRwdXRba107XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlKSB7XG4gICAgICBjb25zdCB0bXAgPSBpbnB1dFt2YWx1ZV07XG4gICAgICBpZiAodHlwZW9mIHRtcCA9PT0gb2JqZWN0ICYmICFwYXJzZWQuaGFzKHRtcCkpIHtcbiAgICAgICAgcGFyc2VkLmFkZCh0bXApO1xuICAgICAgICBvdXRwdXRba10gPSBpZ25vcmU7XG4gICAgICAgIGxhenkucHVzaCh7aywgYTogW2lucHV0LCBwYXJzZWQsIHRtcCwgJF19KTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgb3V0cHV0W2tdID0gJC5jYWxsKG91dHB1dCwgaywgdG1wKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0W2tdICE9PSBpZ25vcmUpXG4gICAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCB2YWx1ZSk7XG4gIH1cbiAgZm9yIChsZXQge2xlbmd0aH0gPSBsYXp5LCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge2ssIGF9ID0gbGF6eVtpXTtcbiAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCByZXZpdmUuYXBwbHkobnVsbCwgYSkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBzZXQgPSAoa25vd24sIGlucHV0LCB2YWx1ZSkgPT4ge1xuICBjb25zdCBpbmRleCA9IFByaW1pdGl2ZShpbnB1dC5wdXNoKHZhbHVlKSAtIDEpO1xuICBrbm93bi5zZXQodmFsdWUsIGluZGV4KTtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlID0gKHRleHQsIHJldml2ZXIpID0+IHtcbiAgY29uc3QgaW5wdXQgPSAkcGFyc2UodGV4dCwgUHJpbWl0aXZlcykubWFwKHByaW1pdGl2ZXMpO1xuICBjb25zdCB2YWx1ZSA9IGlucHV0WzBdO1xuICBjb25zdCAkID0gcmV2aXZlciB8fCBub29wO1xuICBjb25zdCB0bXAgPSB0eXBlb2YgdmFsdWUgPT09IG9iamVjdCAmJiB2YWx1ZSA/XG4gICAgICAgICAgICAgIHJldml2ZShpbnB1dCwgbmV3IFNldCwgdmFsdWUsICQpIDpcbiAgICAgICAgICAgICAgdmFsdWU7XG4gIHJldHVybiAkLmNhbGwoeycnOiB0bXB9LCAnJywgdG1wKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnkgPSAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkgPT4ge1xuICBjb25zdCAkID0gcmVwbGFjZXIgJiYgdHlwZW9mIHJlcGxhY2VyID09PSBvYmplY3QgP1xuICAgICAgICAgICAgKGssIHYpID0+IChrID09PSAnJyB8fCAtMSA8IHJlcGxhY2VyLmluZGV4T2YoaykgPyB2IDogdm9pZCAwKSA6XG4gICAgICAgICAgICAocmVwbGFjZXIgfHwgbm9vcCk7XG4gIGNvbnN0IGtub3duID0gbmV3IE1hcDtcbiAgY29uc3QgaW5wdXQgPSBbXTtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGxldCBpID0gK3NldChrbm93biwgaW5wdXQsICQuY2FsbCh7Jyc6IHZhbHVlfSwgJycsIHZhbHVlKSk7XG4gIGxldCBmaXJzdFJ1biA9ICFpO1xuICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuICAgIGZpcnN0UnVuID0gdHJ1ZTtcbiAgICBvdXRwdXRbaV0gPSAkc3RyaW5naWZ5KGlucHV0W2krK10sIHJlcGxhY2UsIHNwYWNlKTtcbiAgfVxuICByZXR1cm4gJ1snICsgb3V0cHV0LmpvaW4oJywnKSArICddJztcbiAgZnVuY3Rpb24gcmVwbGFjZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBmaXJzdFJ1biA9ICFmaXJzdFJ1bjtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgYWZ0ZXIgPSAkLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlb2YgYWZ0ZXIpIHtcbiAgICAgIGNhc2Ugb2JqZWN0OlxuICAgICAgICBpZiAoYWZ0ZXIgPT09IG51bGwpIHJldHVybiBhZnRlcjtcbiAgICAgIGNhc2UgcHJpbWl0aXZlOlxuICAgICAgICByZXR1cm4ga25vd24uZ2V0KGFmdGVyKSB8fCBzZXQoa25vd24sIGlucHV0LCBhZnRlcik7XG4gICAgfVxuICAgIHJldHVybiBhZnRlcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRvSlNPTiA9IGFueSA9PiAkcGFyc2Uoc3RyaW5naWZ5KGFueSkpO1xuZXhwb3J0IGNvbnN0IGZyb21KU09OID0gYW55ID0+IHBhcnNlKCRzdHJpbmdpZnkoYW55KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vanNfbW9kdWxlcy9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL2pzX21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL2pzX21vZHVsZXMvc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgcG9wVXBQcm9qZWN0QWRkZXJGb3JtIH0gZnJvbSBcIi4vanNfbW9kdWxlcy9wb3BVcFByb2plY3RBZGRlckZvcm0uanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgLy8gTG9hZCBwcm9qZWN0cyBmcm9tIHN0b3JhZ2UgYW5kIHNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgdG8gXCJIb21lXCIuXG4gICAgUHJvamVjdC5sb2FkUHJvamVjdHMoKTtcbiAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoUHJvamVjdC5ob21lKTtcblxuICAgIC8vIExvYWQgcHJvamVjdHMgdG8gdGhlIHRhYnMsIHNldCB1cCBwcm9qZWN0IGFkZGVyIGJ1dHRvbiwgYW5kIHByb2plY3QgZHJvcGRvd24gYnV0dG9uLlxuICAgIGxvYWRQcm9qZWN0c1RvVGFicygpO1xuICAgIHNldFVwUHJvamVjdEFkZGVyKCk7XG4gICAgc2V0VXBQcm9qZWN0RHJvcGRvd24oKTtcbn0pO1xuXG4vLyBMb2FkIHByb2plY3RzIHRvIHRoZSB0YWJzLlxuZnVuY3Rpb24gbG9hZFByb2plY3RzVG9UYWJzKCkge1xuICAgIGNvbnN0IHByb2plY3RzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy10YWJcIik7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyID0gcHJvamVjdHNUYWIucXVlcnlTZWxlY3RvcihcIi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIgPSBwcm9qZWN0c1RhYi5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm9qZWN0IGlzIGEgZGVmYXVsdCBwcm9qZWN0IG9yIG5vdC5cbiAgICAgICAgaWYgKGlzRGVmYXVsdFByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnNlcnRQcm9qZWN0Q2FyZChjcmVhdGVkUHJvamVjdHNDb250YWluZXIsIHByb2plY3RDYXJkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBDaGVjayBpZiBhIHByb2plY3QgaXMgYSBkZWZhdWx0IHByb2plY3QuXG5mdW5jdGlvbiBpc0RlZmF1bHRQcm9qZWN0KHByb2plY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcImhvbWUtcHJvamVjdFwiIHx8XG4gICAgICAgIHByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIiB8fFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcInRvZGF5LXByb2plY3RcIiB8fFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCJcbiAgICApO1xufVxuXG4vLyBJbnNlcnQgYSBwcm9qZWN0IGNhcmQgaW50byB0aGUgY3JlYXRlZCBwcm9qZWN0cyBjb250YWluZXIuXG5mdW5jdGlvbiBpbnNlcnRQcm9qZWN0Q2FyZChjcmVhdGVkUHJvamVjdHNDb250YWluZXIsIHByb2plY3RDYXJkKSB7XG4gICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShwcm9qZWN0Q2FyZCwgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGRlclwiKSk7XG59XG5cbi8vIFNldCB1cCB0aGUgcHJvamVjdCBhZGRlciBidXR0b24uXG5mdW5jdGlvbiBzZXRVcFByb2plY3RBZGRlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0QWRkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkZXJcIik7XG4gICAgcHJvamVjdEFkZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIFBvcCB1cCB0aGUgcHJvamVjdCBhZGRlciBmb3JtIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAgICBwb3BVcFByb2plY3RBZGRlckZvcm0oKTtcbiAgICB9KTtcbn1cblxuLy8gU2V0IHVwIHRoZSBwcm9qZWN0IGRyb3Bkb3duIGJ1dHRvbi5cbmZ1bmN0aW9uIHNldFVwUHJvamVjdERyb3Bkb3duKCkge1xuICAgIGNvbnN0IHByb2plY3REcm9wZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93blwiKTtcbiAgICBwcm9qZWN0RHJvcGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuICAgICAgICAvLyBUb2dnbGUgdGhlICdhY3RpdmUnIGFuZCAnaW5hY3RpdmUnIGNsYXNzZXMgZm9yIHRoZSBjcmVhdGVkIHByb2plY3RzIGNvbnRhaW5lci5cbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=