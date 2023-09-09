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
    display: grid;
    align-content: center;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\n.icon {\n    height: 10px;\n    width: 10px;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap');\n\n:root {\n    --text: #10090c;\n    --background: #fdfcfc;\n    --primary: #b7d7c9;\n    --secondary: #d8e7e9;\n    --accent: #579d5a;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    background-color: grey;\n}\n\n/* Content Container */\n.content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n/* Dashboard */\n.dashboard {\n    background-color: black;\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n}\n\n.logo {\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: white;\n}\n\n.projects-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* Default Projects Container */\n.default-projects-container {\n    display: grid;\n    gap: 10px;\n}\n\n/* Created Projects Container */\n.created-projects-container.inactive {\n    display: none;\n}\n\n.created-projects-container.active {\n    margin-left: 13px;\n    border-left: 3px solid white;\n    display: grid;\n    gap: 3px;\n}\n\n/* Project Card */\n.project-card {\n    padding: 5px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 1fr 25px 25px;\n    gap: 5px;\n    align-content: center;\n}\n\n.project-card button {\n    height: 20px;\n}\n\n.project-card:hover,\n.project-adder:hover {\n    background-color: grey;\n}\n\n.created-projects-container.active > * {\n    margin-left: 10px;\n    padding: 4px;\n    border-radius: 6px;\n    font-size: 14px;\n    color: white;\n}\n\n/* Project and Dropdown Icons */\n#home-project,\n#completed-project,\n#today-project,\n#this-week-project,\n#created-projects-dropdown {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: start;\n    grid-template-columns: auto 1fr;\n    color: white;\n}\n\n#home-project .icon,\n#completed-project .icon,\n#today-project .icon,\n#this-week-project .icon,\n#created-projects-dropdown .icon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: black;\n    height: 17px;\n    width: 17px;\n}\n\n#created-projects-dropdown {\n    background-color: grey;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: white;\n}\n\n.created-projects-container.active .project-name,\n.to-do-title,\n.parent-project-name {\n    display: grid;\n    align-content: center;\n    overflow: auto;\n}\n\n/* Project Adder */\n.project-adder {\n    padding: 5px 0;\n    border: 0px;\n    display: grid;\n    grid-template-columns: 20px auto;\n    grid-template-rows: 20px;\n    gap: 10px;\n    justify-content: start;\n    align-items: center;\n    justify-items: start;\n    background-color: transparent;\n    color: white;\n}\n\n.project-adder .icon,\n.to-do-adder .icon {\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n/* To-Do Window */\n.to-do-window {\n    background-color: rgb(187, 181, 181);\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n}\n\n.parent-project-name {\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.sort-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 3px;\n}\n\nlabel[for=\"sorter\"] {\n    font-size: 14px;\n}\n\n#sorter {\n    display: block;\n    width: 200px;\n    height: 25px;\n\n    border: 2px solid grey;\n    border-radius: 6px;\n}\n\n#sorter:focus {\n    outline: none ;\n    border: 2px solid black;\n}\n\n\n/* To-Do Tab */\n.to-do-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* To-Do Container */\n.to-do-container {\n    height: 45px;\n    padding: 10px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 25px 1fr 130px 25px 25px 25px;\n    gap: 5px;\n    align-content: center;\n    background-color: white;\n}\n\n.to-do-due-date.upcoming {\n    padding: 3px;\n    border: 2px solid #6dcb68;\n    font-size: 14px;\n    color: #6dcb68;\n    border-radius: 5px;\n    text-transform: uppercase;\n}\n\n.to-do-due-date.late {\n    padding: 3px;\n    border: 2px solid #d0645d;\n    font-size: 14px;\n    color: #d0645d;\n    border-radius: 5px;\n    text-transform: uppercase;\n}\n\n/* To-Do Adder */\n.to-do-adder {\n    height: 45px;\n    width: 100%;\n    padding: 10px;\n    border: 3px solid white;\n    border-radius: 6px;\n    font-size: 20px;\n    font-weight: 700;\n    color: white;\n    text-align: justify;\n    background-color: transparent;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: start;\n    gap: 10px;\n}\n\n/* To-Do Info Background */\n.to-do-info-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: blur(5px);\n}\n\n/* To-Do Info Container */\n.to-do-info-container {\n    width: 300px;\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    max-width: 80%;\n    max-height: 80%;\n    overflow: auto;\n    display: grid;\n    grid-template-rows: 30px;\n    gap: 5px;\n}\n\n.close .icon {\n    height: 20px;\n    width: 20px;\n}\n\n.close .icon:hover {\n    fill: red;\n}\n\n.info-field {\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 100px 100px;\n}\n\n.to-do-info-label {\n    font-weight: 600;\n}\n\n/* Form Container */\n.form-container {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(101, 101, 101, 0.22);\n    backdrop-filter: blur(1px);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Form Styles */\nform {\n    background-color: white;\n    border-radius: 10px;\n    padding: 25px;\n    display: grid;\n    gap: 10px;\n}\n\nform input,\nform select,\nform textarea {\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2px solid rgb(215, 211, 211);\n    padding: 5px 7px;\n}\n\nform input:focus,\nform select:focus,\nform textarea:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\ninput[type=submit],\ninput[type=button] {\n    width: 100%;\n    height: 25px;\n    border-radius: 5px;\n    border: 0px;\n    background-color: rgb(82, 77, 77);\n    color: white;\n}\n\ninput[type=submit]:hover,\ninput[type=button]:hover {\n    border-color: black;\n    background-color: black;\n}\n\n.delete,\n.edit {\n    border: none;\n    background-color: transparent;\n}\n\n/* Icon Visibility */\n.project-card .icon,\n.to-do-container .icon {\n    display: block;\n    height: 16px;\n    width: 16px;\n}\n\n.project-card .icon {\n    fill: white;\n}\n\n.to-do-container .icon {\n    fill: black;\n}\n\n.delete:hover .icon {\n    display: block;\n    fill: red;\n}\n\n.edit:hover .icon {\n    display: block;\n    fill: green;\n}\n\n/* Completed To-Do Style */\n.to-do-container.completed {\n    background-color: rgb(173, 238, 173);\n}\n\n\n@media (max-width: 850px) {\n\n    #home-project,\n    #completed-project,\n    #today-project,\n    #this-week-project,\n    #created-projects-dropdown {\n        white-space: nowrap;\n    }\n\n    /* Adjust the dashboard and to-do window to stack on top of each other */\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr;\n    }\n\n    .default-projects-container {\n        padding: 10px 0;\n        grid-auto-flow: column;\n\n        gap: 10px;\n        width: 100%;\n        overflow: auto;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyx3REFBYTtBQUN2Qyx1QkFBdUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRWhEO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTs7QUFFQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sU0FBUyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFB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aUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDb0I7QUFDZTtBQUNQO0FBQ3pEOztBQUVyQjtBQUNBO0FBQ0EsSUFBSSwyREFBTztBQUNYLElBQUksa0dBQTJCLENBQUMsMkRBQU87O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMkRBQU87QUFDWCw0QkFBNEIsbUZBQWlCOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkZBQXFCO0FBQzdCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jb21wYXJlLXdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9nZW5lcmF0ZS11bmlxdWUtaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2lzLWRhdGUtb2JqL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy93ZWVrLWlkZW50aWZpZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9Ub0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL2NyZWF0ZVByb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL2NyZWF0ZVRvRG9DYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL2Zvcm1hdERhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBQcm9qZWN0QWRkZXJGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3BvcFVwUHJvamVjdEVkaXRvckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBUb0RvQWRkZXJGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3BvcFVwVG9Eb0VkaXRvckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBUb0RvSW5mb0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcmVuZGVyVG9Eb1dpbmRvdy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3NvcnRUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2ZsYXR0ZWQvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBpc0RhdGVPYmogPSByZXF1aXJlKCdpcy1kYXRlLW9iaicpO1xuY29uc3Qgd2Vla0lkZW50aWZpZXIgPSByZXF1aXJlKCd3ZWVrLWlkZW50aWZpZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoYSwgYikgPT4ge1xuXHRpZiAodHlwZW9mIGEgIT09ICdudW1iZXInICYmICFpc0RhdGVPYmooYSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIG51bWJlciBvciBEYXRlLCBnb3QgJHt0eXBlb2YgYX1gKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgYiAhPT0gJ251bWJlcicgJiYgIWlzRGF0ZU9iaihiKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgbnVtYmVyIG9yIERhdGUsIGdvdCAke3R5cGVvZiBifWApO1xuXHR9XG5cblx0cmV0dXJuIHdlZWtJZGVudGlmaWVyKGlzRGF0ZU9iaihhKSA/IGEgOiBuZXcgRGF0ZShhICogMTAwMCkpID09PSB3ZWVrSWRlbnRpZmllcihpc0RhdGVPYmooYikgPyBiIDogbmV3IERhdGUoYiAqIDEwMDApKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHbG9iYWwgU3R5bGVzICovXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG46cm9vdCB7XG4gICAgLS10ZXh0OiAjMTAwOTBjO1xuICAgIC0tYmFja2dyb3VuZDogI2ZkZmNmYztcbiAgICAtLXByaW1hcnk6ICNiN2Q3Yzk7XG4gICAgLS1zZWNvbmRhcnk6ICNkOGU3ZTk7XG4gICAgLS1hY2NlbnQ6ICM1NzlkNWE7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLyogQ29udGVudCBDb250YWluZXIgKi9cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIERhc2hib2FyZCAqL1xuLmRhc2hib2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdHMtdGFiIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogRGVmYXVsdCBQcm9qZWN0cyBDb250YWluZXIgKi9cbi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIENyZWF0ZWQgUHJvamVjdHMgQ29udGFpbmVyICovXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuaW5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDNweDtcbn1cblxuLyogUHJvamVjdCBDYXJkICovXG4ucHJvamVjdC1jYXJkIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtY2FyZCBidXR0b24ge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLnByb2plY3QtY2FyZDpob3Zlcixcbi5wcm9qZWN0LWFkZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlID4gKiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBQcm9qZWN0IGFuZCBEcm9wZG93biBJY29ucyAqL1xuI2hvbWUtcHJvamVjdCxcbiNjb21wbGV0ZWQtcHJvamVjdCxcbiN0b2RheS1wcm9qZWN0LFxuI3RoaXMtd2Vlay1wcm9qZWN0LFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2hvbWUtcHJvamVjdCAuaWNvbixcbiNjb21wbGV0ZWQtcHJvamVjdCAuaWNvbixcbiN0b2RheS1wcm9qZWN0IC5pY29uLFxuI3RoaXMtd2Vlay1wcm9qZWN0IC5pY29uLFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24uZHJvcGRvd24ge1xuICAgIGZpbGw6IGJsYWNrO1xuICAgIGhlaWdodDogMTdweDtcbiAgICB3aWR0aDogMTdweDtcbn1cblxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSAucHJvamVjdC1uYW1lLFxuLnRvLWRvLXRpdGxlLFxuLnBhcmVudC1wcm9qZWN0LW5hbWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBQcm9qZWN0IEFkZGVyICovXG4ucHJvamVjdC1hZGRlciB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LWFkZGVyIC5pY29uLFxuLnRvLWRvLWFkZGVyIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi8qIFRvLURvIFdpbmRvdyAqL1xuLnRvLWRvLXdpbmRvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTgxLCAxODEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5wYXJlbnQtcHJvamVjdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNvcnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogM3B4O1xufVxuXG5sYWJlbFtmb3I9XCJzb3J0ZXJcIl0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3NvcnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjVweDtcblxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4jc29ydGVyOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lIDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBUby1EbyBUYWIgKi9cbi50by1kby10YWIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBUby1EbyBDb250YWluZXIgKi9cbi50by1kby1jb250YWluZXIge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMTMwcHggMjVweCAyNXB4IDI1cHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNmRjYjY4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzZkY2I2ODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRvLWRvLWR1ZS1kYXRlLmxhdGUge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDA2NDVkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2QwNjQ1ZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyogVG8tRG8gQWRkZXIgKi9cbi50by1kby1hZGRlciB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogVG8tRG8gSW5mbyBCYWNrZ3JvdW5kICovXG4udG8tZG8taW5mby1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi8qIFRvLURvIEluZm8gQ29udGFpbmVyICovXG4udG8tZG8taW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1heC1oZWlnaHQ6IDgwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcbiAgICBnYXA6IDVweDtcbn1cblxuLmNsb3NlIC5pY29uIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5jbG9zZSAuaWNvbjpob3ZlciB7XG4gICAgZmlsbDogcmVkO1xufVxuXG4uaW5mby1maWVsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcbn1cblxuLnRvLWRvLWluZm8tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIEZvcm0gQ29udGFpbmVyICovXG4uZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEwMSwgMTAxLCAwLjIyKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIEZvcm0gU3R5bGVzICovXG5mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbmZvcm0gaW5wdXQsXG5mb3JtIHNlbGVjdCxcbmZvcm0gdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE1LCAyMTEsIDIxMSk7XG4gICAgcGFkZGluZzogNXB4IDdweDtcbn1cblxuZm9ybSBpbnB1dDpmb2N1cyxcbmZvcm0gc2VsZWN0OmZvY3VzLFxuZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgNzcsIDc3KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlcixcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmRlbGV0ZSxcbi5lZGl0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIEljb24gVmlzaWJpbGl0eSAqL1xuLnByb2plY3QtY2FyZCAuaWNvbixcbi50by1kby1jb250YWluZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbn1cblxuLnByb2plY3QtY2FyZCAuaWNvbiB7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi50by1kby1jb250YWluZXIgLmljb24ge1xuICAgIGZpbGw6IGJsYWNrO1xufVxuXG4uZGVsZXRlOmhvdmVyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWxsOiByZWQ7XG59XG5cbi5lZGl0OmhvdmVyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWxsOiBncmVlbjtcbn1cblxuLyogQ29tcGxldGVkIFRvLURvIFN0eWxlICovXG4udG8tZG8tY29udGFpbmVyLmNvbXBsZXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMjM4LCAxNzMpO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuXG4gICAgI2hvbWUtcHJvamVjdCxcbiAgICAjY29tcGxldGVkLXByb2plY3QsXG4gICAgI3RvZGF5LXByb2plY3QsXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0LFxuICAgICNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAvKiBBZGp1c3QgdGhlIGRhc2hib2FyZCBhbmQgdG8tZG8gd2luZG93IHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyICovXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICB9XG5cbiAgICAuZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBSUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztB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WCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUEsb0JBQW9CO0FBQ3BCOztJQUVJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7QUFHQTs7SUFFSTs7Ozs7UUFLSSxtQkFBbUI7SUFDdkI7O0lBRUEsd0VBQXdFO0lBQ3hFO1FBQ0ksMEJBQTBCO1FBQzFCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGVBQWU7UUFDZixzQkFBc0I7O1FBRXRCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHQ6ICMxMDA5MGM7XFxuICAgIC0tYmFja2dyb3VuZDogI2ZkZmNmYztcXG4gICAgLS1wcmltYXJ5OiAjYjdkN2M5O1xcbiAgICAtLXNlY29uZGFyeTogI2Q4ZTdlOTtcXG4gICAgLS1hY2NlbnQ6ICM1NzlkNWE7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIENvbnRlbnQgQ29udGFpbmVyICovXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBEYXNoYm9hcmQgKi9cXG4uZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cy10YWIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIERlZmF1bHQgUHJvamVjdHMgQ29udGFpbmVyICovXFxuLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBDcmVhdGVkIFByb2plY3RzIENvbnRhaW5lciAqL1xcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5pbmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi8qIFByb2plY3QgQ2FyZCAqL1xcbi5wcm9qZWN0LWNhcmQge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlcixcXG4ucHJvamVjdC1hZGRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgPiAqIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogUHJvamVjdCBhbmQgRHJvcGRvd24gSWNvbnMgKi9cXG4jaG9tZS1wcm9qZWN0LFxcbiNjb21wbGV0ZWQtcHJvamVjdCxcXG4jdG9kYXktcHJvamVjdCxcXG4jdGhpcy13ZWVrLXByb2plY3QsXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2hvbWUtcHJvamVjdCAuaWNvbixcXG4jY29tcGxldGVkLXByb2plY3QgLmljb24sXFxuI3RvZGF5LXByb2plY3QgLmljb24sXFxuI3RoaXMtd2Vlay1wcm9qZWN0IC5pY29uLFxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbi5kcm9wZG93biB7XFxuICAgIGZpbGw6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIHdpZHRoOiAxN3B4O1xcbn1cXG5cXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgLnByb2plY3QtbmFtZSxcXG4udG8tZG8tdGl0bGUsXFxuLnBhcmVudC1wcm9qZWN0LW5hbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBQcm9qZWN0IEFkZGVyICovXFxuLnByb2plY3QtYWRkZXIge1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWFkZGVyIC5pY29uLFxcbi50by1kby1hZGRlciAuaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4vKiBUby1EbyBXaW5kb3cgKi9cXG4udG8tZG8td2luZG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTgxLCAxODEpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNvcnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInNvcnRlclxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4jc29ydGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcblxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbiNzb3J0ZXI6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lIDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi8qIFRvLURvIFRhYiAqL1xcbi50by1kby10YWIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIFRvLURvIENvbnRhaW5lciAqL1xcbi50by1kby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAxMzBweCAyNXB4IDI1cHggMjVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzZkY2I2ODtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzZkY2I2ODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4udG8tZG8tZHVlLWRhdGUubGF0ZSB7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2QwNjQ1ZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2QwNjQ1ZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4vKiBUby1EbyBBZGRlciAqL1xcbi50by1kby1hZGRlciB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBUby1EbyBJbmZvIEJhY2tncm91bmQgKi9cXG4udG8tZG8taW5mby1iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4vKiBUby1EbyBJbmZvIENvbnRhaW5lciAqL1xcbi50by1kby1pbmZvLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jbG9zZSAuaWNvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5jbG9zZSAuaWNvbjpob3ZlciB7XFxuICAgIGZpbGw6IHJlZDtcXG59XFxuXFxuLmluZm8tZmllbGQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XFxufVxcblxcbi50by1kby1pbmZvLWxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogRm9ybSBDb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEwMSwgMTAxLCAwLjIyKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBGb3JtIFN0eWxlcyAqL1xcbmZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0LFxcbmZvcm0gc2VsZWN0LFxcbmZvcm0gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxNSwgMjExLCAyMTEpO1xcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcbn1cXG5cXG5mb3JtIGlucHV0OmZvY3VzLFxcbmZvcm0gc2VsZWN0OmZvY3VzLFxcbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgNzcsIDc3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5kZWxldGUsXFxuLmVkaXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBJY29uIFZpc2liaWxpdHkgKi9cXG4ucHJvamVjdC1jYXJkIC5pY29uLFxcbi50by1kby1jb250YWluZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogMTZweDtcXG59XFxuXFxuLnByb2plY3QtY2FyZCAuaWNvbiB7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIC5pY29uIHtcXG4gICAgZmlsbDogYmxhY2s7XFxufVxcblxcbi5kZWxldGU6aG92ZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmlsbDogcmVkO1xcbn1cXG5cXG4uZWRpdDpob3ZlciAuaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmaWxsOiBncmVlbjtcXG59XFxuXFxuLyogQ29tcGxldGVkIFRvLURvIFN0eWxlICovXFxuLnRvLWRvLWNvbnRhaW5lci5jb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMzgsIDE3Myk7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcblxcbiAgICAjaG9tZS1wcm9qZWN0LFxcbiAgICAjY29tcGxldGVkLXByb2plY3QsXFxuICAgICN0b2RheS1wcm9qZWN0LFxcbiAgICAjdGhpcy13ZWVrLXByb2plY3QsXFxuICAgICNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIH1cXG5cXG4gICAgLyogQWRqdXN0IHRoZSBkYXNoYm9hcmQgYW5kIHRvLWRvIHdpbmRvdyB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciAqL1xcbiAgICAuY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIH1cXG5cXG4gICAgLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKGxpbWl0KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaW1pdCkudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyU3ltYm9scyhleGNsdWRlU3ltYm9scywgZ3JvdXApIHtcbiAgbGV0IG5ld0dyb3VwID0gZ3JvdXA7XG4gIGV4Y2x1ZGVTeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xuICAgIG5ld0dyb3VwID0gbmV3R3JvdXAucmVwbGFjZShzeW1ib2wsICcnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0dyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJZChhdmFpbGFibGVDaGFycywgaWRMZW5ndGgpIHtcbiAgbGV0IGlkID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZExlbmd0aDsgaSArPSAxKSB7XG4gICAgaWQgKz0gYXZhaWxhYmxlQ2hhcnNbZ2V0UmFuZG9tTnVtYmVyKGF2YWlsYWJsZUNoYXJzLmxlbmd0aCldO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKHtcbiAgbGVuZ3RoID0gMjAsXG4gIHVzZUxldHRlcnMgPSB0cnVlLFxuICB1c2VOdW1iZXJzID0gdHJ1ZSxcbiAgaW5jbHVkZVN5bWJvbHMgPSBbXSxcbiAgZXhjbHVkZVN5bWJvbHMgPSBbXSxcbn0gPSB7fSkge1xuICBsZXQgbGV0dGVycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gIGxldCBudW1iZXJzID0gJzAxMjM0NTY3ODknO1xuICBsZXQgYXZhaWxhYmxlQ2hhcnMgPSBbXTtcbiAgbGV0IGxldHRlcnNBcnIgPSBbXTtcbiAgbGV0IG51bWJlcnNBcnIgPSBbXTtcblxuICBpZiAodXNlTGV0dGVycykge1xuICAgIGlmIChleGNsdWRlU3ltYm9scy5sZW5ndGgpIGxldHRlcnMgPSBmaWx0ZXJTeW1ib2xzKGV4Y2x1ZGVTeW1ib2xzLCBsZXR0ZXJzKTtcbiAgICBsZXR0ZXJzQXJyID0gbGV0dGVycy5zcGxpdCgnJyk7XG4gIH1cblxuICBpZiAodXNlTnVtYmVycykge1xuICAgIGlmIChleGNsdWRlU3ltYm9scy5sZW5ndGgpIG51bWJlcnMgPSBmaWx0ZXJTeW1ib2xzKGV4Y2x1ZGVTeW1ib2xzLCBudW1iZXJzKTtcbiAgICBudW1iZXJzQXJyID0gbnVtYmVycy5zcGxpdCgnJyk7XG4gIH1cblxuICBhdmFpbGFibGVDaGFycyA9IFsuLi5sZXR0ZXJzQXJyLCAuLi5udW1iZXJzQXJyLCAuLi5pbmNsdWRlU3ltYm9sc107XG5cbiAgcmV0dXJuIGNyZWF0ZUlkKGF2YWlsYWJsZUNoYXJzLCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlVW5pcXVlSWQ7XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIHdlZWstaWRlbnRpZmllciA8aHR0cHM6Ly9naXRodWIuY29tL3Rocm9sbC93ZWVrLWlkZW50aWZpZXI+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE2IENsw6ltZW50IEJpbGxpb3QsIGNvbnRyaWJ1dG9ycy5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2Vla0lkZW50aWZpZXI7XG5tb2R1bGUuZXhwb3J0cy53ZWVrSWRlbnRpZmllciA9IHdlZWtJZGVudGlmaWVyO1xubW9kdWxlLmV4cG9ydHMuZGF0ZUZyb21XZWVrID0gZGF0ZUZyb21XZWVrO1xuXG4vKipcbiAqIEdldCB1bmlxdWUgYW5kIHNlcXVlbnRpYWwgd2VlayBpZGVudGlmaWVyIG9mIGN1cnJlbnQgZGF0ZSBvciBnaXZlbiB2YWxpZCBgRGF0ZWAgc3RyaW5nIGZvcm1hdFxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgd2Vla0lkZW50aWZpZXIgPSByZXF1aXJlKCdjdXJyZW50LXdlZWstbnVtYmVyJyk7XG4gKlxuICogLy8gYXVndXN0IDEyLCAyMDE2IChjdXJyZW50IGRhdGUpXG4gKiB3ZWVrSWRlbnRpZmllcigpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJ0phbnVhcnkgMDUsIDE5NzAgMDM6MDA6MDAnKTtcbiAqIC8vPT4gMVxuICpcbiAqIHdlZWtJZGVudGlmaWVyKG5ldyBEYXRlKCdBdWd1c3QgMTIsIDIwMTYnKSk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignMDgvMTIvMjAxNicpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJ0F1Z3VzdCAxMiwgMjAxNicpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIobmV3IERhdGUoJ0F1Z3VzdCAxOSwgMjAxNicpKTtcbiAqIC8vPT4gMjQzM1xuICpcbiAqIHdlZWtJZGVudGlmaWVyKCcwOC8xOS8yMDE2Jyk7XG4gKiAvLz0+ICAyNDMzXG4gKiBgYGBcbiAqXG4gKiBAbmFtZSB3ZWVrSWRlbnRpZmllclxuICogQHBhcmFtICB7U3RyaW5nfSBgW2RhdGVdYCBldmVyeSB2YWxpZCBEYXRlLWlzaCBzdHJpbmcgZm9ybWF0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB3ZWVrSWRlbnRpZmllcihkYXRlKSB7XG4gIHZhciBpbnN0YW5jZTtcblxuICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnICYmIGRhdGUubGVuZ3RoKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgRGF0ZShkYXRlKTtcbiAgfSBlbHNlIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIGluc3RhbmNlID0gZGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGlzIGRhdGUgb2JqZWN0XG4gIHZhciB0YXJnZXQgPSBuZXcgRGF0ZShpbnN0YW5jZS52YWx1ZU9mKCkpO1xuICAvLyBTdGFydGluZyBkYXRlIHBvaW50IGZvciBvdXIgc2VxdWVuY2VcbiAgdmFyIGxhc3REYXlPZldlZWtaZXJvVGltZXN0YW1wID0gbmV3IERhdGUoJ0phbnVhcnkgNSwgMTk3MCAwMDowMDowMCcpLmdldFRpbWUoKSAtIDE7XG4gIC8vIE51bWJlciBvZiB3ZWVrIGZyb20gb3VyIHN0YXJ0aW5nIGRhdGVcbiAgdmFyIHdlZWtOdW1iZXJkaWZmID0gTWF0aC5jZWlsKCh0YXJnZXQuZ2V0VGltZSgpIC0gbGFzdERheU9mV2Vla1plcm9UaW1lc3RhbXApIC8gKDI0ICogMzYwMCAqIDEwMDAgKiA3KSk7XG5cbiAgcmV0dXJuIHdlZWtOdW1iZXJkaWZmO1xufVxuXG4vKipcbiAqIEdldCBtb25kYXkgZGF0ZSBvZiB0aGUgZ2l2ZW4gd2VlayBpZGVudGlmaWVyXG4gKlxuICogICogKipFeGFtcGxlOioqXG4gKlxuICogYGBganNcbiAqIHZhciB3ZWVrSWRlbnRpZmllciA9IHJlcXVpcmUoJ2N1cnJlbnQtd2Vlay1udW1iZXInKTtcbiAqXG4gKiB3ZWVrSWRlbnRpZmllci5kYXRlRnJvbVdlZWsoMjQwMyk7XG4gKiAvLz0+IEphbnVhcnkgMTgsIDIwMTYgMDA6MDA6MDBcbiAqXG4gKiBgYGBcbiAqIEBuYW1lIHdlZWtJZGVudGlmaWVyLmRhdGVGcm9tV2Vla1xuICogQHBhcmFtICB7TnVtYmVyfSB3ZWVrSWRlbnRpZmllclxuICogQHJldHVybiB7RGF0ZX0gTW9uZGF5IG9mIHRoZSBnaXZlbiB3ZWVrIGlkZW50aWZpZXIgb3IgSmFudWFyeSA1LCAxOTcwIDAwOjAwOjAwIGlmIHdlZWtJZGVudGlmaWVyIGlzIG5vdCA+IDAuXG4gKi9cbmZ1bmN0aW9uIGRhdGVGcm9tV2Vlayh3ZWVrSWRlbnRpZmllcikge1xuICBpZiAoaXNOYU4ocGFyc2VGbG9hdCh3ZWVrSWRlbnRpZmllcikpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdGFydGluZyBkYXRlIHBvaW50IGZvciBvdXIgc2VxdWVuY2VcbiAgICB2YXIgZmlyc3REYXlPZldlZWtPbmUsIG1vbmRheU9mV2VlaztcbiAgICBtb25kYXlPZldlZWsgPSBmaXJzdERheU9mV2Vla09uZSA9IG5ldyBEYXRlKCdKYW51YXJ5IDUsIDE5NzAgMDA6MDA6MDAnKTtcbiAgICBpZiAod2Vla0lkZW50aWZpZXIgPiAwKSB7XG4gICAgICBtb25kYXlPZldlZWsgPSBuZXcgRGF0ZSgoKHdlZWtJZGVudGlmaWVyIC0gMSkgKiAoMjQgKiAzNjAwICogMTAwMCAqIDcpKSArIGZpcnN0RGF5T2ZXZWVrT25lLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIHJldHVybiBtb25kYXlPZldlZWs7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlLCBzdHJpbmdpZnkgfSBmcm9tICdmbGF0dGVkJztcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvLmpzXCI7XG5jb25zdCBnZW5lcmF0ZVVuaXF1ZUlkID0gcmVxdWlyZShcImdlbmVyYXRlLXVuaXF1ZS1pZFwiKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcHJvamVjdCBpdGVtLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0LiBcbiAqIEBwYXJhbSB7QXJyYXl9IHRvRG9JdGVtcyAtIEFycmF5IGNvbnRhaW5pbmcgVG9EbyBvYmplY3RzLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gSUQgZm9yIHRoZSBwcm9lamN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG5cbiAgICAvLyBTdG9yYWdlIG9mIGFsbCBcIlByb2plY3RcIiBpbnN0YW5jZXMuXG4gICAgc3RhdGljIHByb2plY3RzID0gW107XG5cbiAgICAvLyBIb21lIHByb2plY3QuXG4gICAgc3RhdGljIGhvbWU7XG5cbiAgICAvLyBMb2FkIHNhdmVkIFwiUHJvamVjdC5wcm9qZWN0c1wiIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcbiAgICAgICAgLy8gTG9hZCBzZXJpYWxpemVkIHNhdmVkIHByb2plY3RzLlxuICAgICAgICBjb25zdCBzZXJpYWxpemVkU2F2ZWRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LnByb2plY3RzXCIpO1xuICAgICAgICBpZiAoc2VyaWFsaXplZFNhdmVkUHJvamVjdCkge1xuXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgc2VyaWFsaXplZCBzYXZlIHByb2plY3RzLlxuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdCA9IHBhcnNlKHNlcmlhbGl6ZWRTYXZlZFByb2plY3QpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYmxhbmsgXCJQcm9qZWN0XCIgb2JqZWN0cyB0byBiZSBwb3B1bGF0ZWQuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXcgUHJvamVjdChudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGJsYW5rIHByb2plY3RzIHdpdGggXCJwcm9qZWN0IHRpbGVcIiwgXCJ0by1kbyBpdGVtc1wiLCBhbmQgXCJwcm9qZWN0IGlkXCIgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3RzJyByZXNwZWN0aXZlIHRpdGxlcy5cbiAgICAgICAgICAgICAgICBQcm9qZWN0LnByb2plY3RzW2ldLnRpdGxlID0gcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdFtpXS50aXRsZTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJvamVjdHMnIHJlc3BlY3RpdmUgdG8tZG8gaXRlbXMuXG4gICAgICAgICAgICAgICAgcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdFtpXS50b0RvSXRlbXMuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3QucHJvamVjdHNbaV0uYWRkVG9EbyhuZXcgVG9EbyguLi5PYmplY3QudmFsdWVzKHRvRG9JdGVtKSkpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3RzJ3MgcmVzcGVjdGl2ZSBJRC5cbiAgICAgICAgICAgICAgICBQcm9qZWN0LnByb2plY3RzW2ldLmlkID0gcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdFtpXS5pZDtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHByb2plY3RzIHRvIGJlIGxvYWQsIGNyZWF0ZSBkZWZhdWx0IFwiSG9tZVwiIHByb2plY3QgYW5kIFwiQ29tcGxldGVkXCIgcHJvamVjdC5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIkhvbWVcIiwgbnVsbCwgXCJob21lLXByb2plY3RcIik7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIkNvbXBsZXRlZFwiLCBudWxsLCBcImNvbXBsZXRlZC1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJUb2RheVwiLCBudWxsLCBcInRvZGF5LXByb2plY3RcIik7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIlRoaXMgV2Vla1wiLCBudWxsLCBcInRoaXMtd2Vlay1wcm9qZWN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHV0IGhvbWUgcHJvamVjdCB0byBzdGF0aWMgdmFyaWFibGUuXG4gICAgICAgIFByb2plY3QuaG9tZSA9IFByb2plY3QucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IFwiaG9tZS1wcm9qZWN0XCIpO1xuICAgIH1cblxuICAgIC8vIFByb2plY3QgQ29uc3RydWN0b3IuXG4gICAgY29uc3RydWN0b3IodGl0bGUgPSBudWxsLCB0b0RvSXRlbXMgPSBudWxsLCBpZCA9IG51bGwpIHtcblxuICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgdGl0bGUuXG4gICAgICAgIHRoaXMudGl0bGUgPSAodGl0bGUgIT09IG51bGwpID8gdGl0bGUgOiBudWxsO1xuXG4gICAgICAgIC8vIFNldCB0aGUgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICAgICAgaWYgKHRvRG9JdGVtcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50b0RvSXRlbXMgPSB0b0RvSXRlbXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBcInRvRG9JdGVtc1wiIHRvIGJsYW5rIGFycmF5IGlmIG5vbmUgaXMgcHJvdmlkZWQgZHVyaW5nIGluc3RhbnRpYXRpb24uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b0RvSXRlbXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBwcm9qZWN0J3MgSUQgdG8gZ2l2ZW4gcHJvamVjdCBJRCBkdXJpbmcgcHJvamVjdCBpbnN0YW50aWF0aW9uLlxuICAgICAgICBpZiAoaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgYSBnZW5lcmF0ZWQgMTUtY2hhcmFjdGVyIElEIHRvIHByb2plY3QgaWYgbm90aGluZyB3YXMgcHJvdmlkZWQgZHVyaW5nIFByb2plY3QncyBpbnN0YW50aWF0aW9uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKHsgbGVuZ3RoOiAxNSwgdXNlTnVtYmVyczogdHJ1ZSwgdXNlTGV0dGVyczogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluc2VydCBuZXcgUHJvamVjdCBvYmplY3QgaW5zaWRlIFwicHJvamVjdHNcIiBhcnJheS5cbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHByb2plY3QgZnJvbSB0aGUgXCJQcm9qZWN0LnByb2plY3RzXCIgYXJyYXkuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLnNwbGljZShQcm9qZWN0LnByb2plY3RzLmluZGV4T2YodGhpcyksIDEpO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gRWRpdCBwcm9qZWN0IHRpdGxlLlxuICAgIHNldFByb2plY3RUaXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYSBUb0RvIEl0ZW0gaW5zaWRlIHRoZSBwcm9qZWN0LlxuICAgIGFkZFRvRG8oVG9Ebykge1xuXG4gICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCByZWZlcmVuY2UgcHJvcGVydHkgb2YgdGhlIFRvRG8gaXRlbSB0byAndGhpcycgY3VycmVudCBwcm9qZWN0IGluc3RhbmNlLlxuICAgICAgICBUb0RvLnByb2plY3QgPSB0aGlzO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgdG8gZG8gaXRlbSB0byAndGhpcycgcHJvamVjdHMgYXJyYXkgb2YgdG8gZG8gaXRlbXMuXG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zLnB1c2goVG9Ebyk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgYSBUb0RvIEl0ZW0gaW5zaWRlIHRoZSBwcm9qZWN0J3MgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICBkZWxldGVUb0RvKFRvRG8pIHtcbiAgICAgICAgdGhpcy50b0RvSXRlbXMuc3BsaWNlKHRoaXMudG9Eb0l0ZW1zLmluZGV4T2YoVG9EbyksIDEpO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSBUb0RvIGl0ZW1zIGluc2lkZSB0aGUgcHJvamVjdCdzIFwidG9Eb0l0ZW1zXCIgYXJyYXkuXG4gICAgcmVwbGFjZVRvRG8obmV3VG9Ebywgb2xkVG9Ebykge1xuXG4gICAgICAgIC8vIFNldCBuZXcgVG9EbyBpdGVtJ3MgcHJvamVjdCByZWZlcmVuY2UgdG8gdGhpcyBwcm9qZWN0LlxuICAgICAgICBuZXdUb0RvLnByb2plY3QgPSB0aGlzO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgVG9EbyBpdGVtIHdpdGggdGhlIG5ldyBUb0RvIGl0ZW0uXG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zW3RoaXMudG9Eb0l0ZW1zLmluZGV4T2Yob2xkVG9EbyldID0gbmV3VG9EbztcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyAjc2F2ZUNoYW5nZXMoKSB7XG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC5wcm9qZWN0c1wiLCBzdHJpbmdpZnkoUHJvamVjdC5wcm9qZWN0cykpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGNsYXNzXG4gKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSB0by1kbyBpdGVtIHdpdGggdmFyaW91cyBkZXRhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9yIG5hbWUgb2YgdGhlIHRvLWRvIGl0ZW0uXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSB0by1kbyBpdGVtLlxuICogQHBhcmFtIHtEYXRlfSBkdWVEYXRlIC0gVGhlIGR1ZSBkYXRlIGZvciBjb21wbGV0aW5nIHRoZSB0by1kbyBpdGVtLlxuICogQHBhcmFtIHtzdHJpbmd9IHByaW9yaXR5IC0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSB0by1kbyBpdGVtIChlLmcuLCBcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIikuXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90ZXMgLSBBZGRpdGlvbmFsIG5vdGVzIG9yIGNvbW1lbnRzIHJlbGF0ZWQgdG8gdGhlIHRvLWRvIGl0ZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGVkPW51bGwsIGRhdGVBbmRUaW1lQ3JlYXRlZD1udWxsLCBkYXRlTW9kaWZpZWQ9bnVsbCwgcHJvamVjdCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IChjb21wbGV0ZWQgIT09IG51bGwpID8gY29tcGxldGVkIDogZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0ZUFuZFRpbWVDcmVhdGVkID0gKGRhdGVBbmRUaW1lQ3JlYXRlZCAhPT0gbnVsbCkgPyBkYXRlQW5kVGltZUNyZWF0ZWQgOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuZGF0ZU1vZGlmaWVkID0gKGRhdGVNb2RpZmllZCAhPT0gbnVsbCkgPyBkYXRlTW9kaWZpZWQgOiBudWxsO1xuICAgICAgICB0aGlzLnByb2plY3QgPSAocHJvamVjdCAhPT0gbnVsbCkgPyBwcm9qZWN0IDogbnVsbDtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdC5kZWxldGVUb0RvKHRoaXMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwb3BVcFByb2plY3RFZGl0b3JGb3JtIH0gZnJvbSBcIi4vcG9wVXBQcm9qZWN0RWRpdG9yRm9ybS5qc1wiO1xuaW1wb3J0IHsgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbiBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG5cbiAgICAvLyBDcmVhdGUgYSBjYXJkIGZvciBcIlByb2plY3RcIi5cbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIlxuICAgIHByb2plY3RDYXJkLmlkID0gcHJvamVjdC5pZDtcblxuICAgIC8vIEFkZCByZWZlcmVjZSB0byB0aGUgcHJvamVjdCBvYmplY3QuXG4gICAgcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZSA9IHByb2plY3Q7XG5cbiAgICAvLyBBZGQgJ2hvbWUnIGljb24gdG8gaG9tZS1wcm9qZWN0LlxuICAgIGlmIChwcm9qZWN0LmlkID09PSBcImhvbWUtcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG9tZUljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIGhvbWVJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmhvbWU8L3RpdGxlPjxwYXRoIGQ9XCJNMTAsMjBWMTRIMTRWMjBIMTlWMTJIMjJMMTIsM0wyLDEySDVWMjBIMTBaXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChob21lSWNvbik7XG4gICAgfVxuICAgIC8vIEFkZCAnY29tcGxldGVkJyBpY29uIHRvIGNvbXBsZXRlZC1wcm9qZWN0LlxuICAgIGVsc2UgaWYgKHByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcGxldGVkSWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgY29tcGxldGVkSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaGVjay1jaXJjbGU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEwIDE3TDUgMTJMNi40MSAxMC41OUwxMCAxNC4xN0wxNy41OSA2LjU4TDE5IDhMMTAgMTdaXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChjb21wbGV0ZWRJY29uKTtcbiAgICB9XG4gICAgLy8gQWRkICd0b2RheScgaWNvbiB0byB0b2RheS1wcm9qZWN0LlxuICAgIGVsc2UgaWYgKHByb2plY3QuaWQgPT09IFwidG9kYXktcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZGF5SWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgdG9kYXlJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndoaXRlLWJhbGFuY2Utc3Vubnk8L3RpdGxlPjxwYXRoIGQ9XCJNMy41NSAxOS4wOUw0Ljk2IDIwLjVMNi43NiAxOC43MUw1LjM0IDE3LjI5TTEyIDZDOC42OSA2IDYgOC42OSA2IDEyUzguNjkgMTggMTIgMTggMTggMTUuMzEgMTggMTJDMTggOC42OCAxNS4zMSA2IDEyIDZNMjAgMTNIMjNWMTFIMjBNMTcuMjQgMTguNzFMMTkuMDQgMjAuNUwyMC40NSAxOS4wOUwxOC42NiAxNy4yOU0yMC40NSA1TDE5LjA0IDMuNkwxNy4yNCA1LjM5TDE4LjY2IDYuODFNMTMgMUgxMVY0SDEzTTYuNzYgNS4zOUw0Ljk2IDMuNkwzLjU1IDVMNS4zNCA2LjgxTDYuNzYgNS4zOU0xIDEzSDRWMTFIMU0xMyAyMEgxMVYyM0gxM1wiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodG9kYXlJY29uKTtcbiAgICB9XG4gICAgLy8gQWRkICd0aGlzLXdlZWsnIGljb24gdG8gdGhpcy13ZWVrLXByb2plY3QuXG4gICAgZWxzZSBpZiAocHJvamVjdC5pZCA9PT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHRoaXNXZWVrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXNXZWVrSWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgdGhpc1dlZWtJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLXdlZWs8L3RpdGxlPjxwYXRoIGQ9XCJNNiAxSDhWM0gxNlYxSDE4VjNIMTlDMjAuMTEgMyAyMSAzLjkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy44OSAzIDUgM0g2VjFNNSA4VjE5SDE5VjhINU03IDEwSDE3VjEySDdWMTBaXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0aGlzV2Vla0ljb24pO1xuICAgIH1cblxuICAgIC8vIFB1dCBwcm9qZWN0IHRpdGxlIGluc2lkZSB0aGUgcHJvamVjdCBjYXJkLlxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdC1uYW1lXCJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIC8vIE9ubHkgYWRkIGZlYXR1cmUgYnV0dG9ucyB0byBcIm5vbi1Ib21lXCIgcHJvamVjdHMuXG4gICAgaWYgKHByb2plY3QuaWQgIT09IFwiaG9tZS1wcm9qZWN0XCIgJiYgcHJvamVjdC5pZCAhPT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiICYmIHByb2plY3QuaWQgIT09IFwidG9kYXktcHJvamVjdFwiICYmIHByb2plY3QuaWQgIT09IFwidGhpcy13ZWVrLXByb2plY3RcIikge1xuICAgICAgICBhZGREZWxldGVCdXR0b24ocHJvamVjdENhcmQpO1xuICAgICAgICBhZGRFZGl0QnV0dG9uKHByb2plY3RDYXJkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCB0aGUgcHJvamVjdCBjb3JyZXNwb25kaW5nIHRvIHByb2plY3QgY2FyZC5cbiAgICAgICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvamVjdENhcmQ7XG59XG5cblxuZnVuY3Rpb24gYWRkRGVsZXRlQnV0dG9uKHByb2plY3RDYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvbi5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkZWxldGUgc3ZnIGljb24uXG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EZWxldGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhIMTFWMTdIOVY4TTEzLDhIMTVWMTdIMTNWOFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBkZWxldGUgZnVuY3Rpb25hbGl0eSB0byBkZWxldGUgYnV0dG9uLlxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gQXNrIHRoZSB1c2VyIGZvciBkZWxldGUgY29uZmlybWF0aW9uLlxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJDb25maXJtIGRlbGV0aW9uP1wiKSkge1xuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGJhY2stZW5kKVxuICAgICAgICAgICAgcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZS5kZWxldGUoKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgXCJUby1Eb1wiIHRhYnMuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXRhYlwiKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBNYWtlIFwiSG9tZVwiIHByb2plY3QgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gY3VycmVudCBwcm9qZWN0IGlzIGRlbGV0ZWQuXG4gICAgICAgICAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoUHJvamVjdC5ob21lKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGZyb250LWVuZClcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG59XG5cblxuZnVuY3Rpb24gYWRkRWRpdEJ1dHRvbihwcm9qZWN0Q2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgYnV0dG9uLlxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0XCI7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBJY29uLlxuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkVkaXQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTgsMi45IDE3LjM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjkgMTYuOTYsMy4yOUwxNS4xMiw1LjEyTDE4Ljg3LDguODdNMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTNMMTQuMDYsNi4xOEwzLDE3LjI1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGVkaXQgZnVuY3Rpb25hbGl0eSB0byBlZGl0IGJ1dHRvbiBieSBwb3BwaW5nIHRoZSBcInByb2plY3QgZWRpdG9yIGZvcm1cIi5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwUHJvamVjdEVkaXRvckZvcm0ocHJvamVjdENhcmQpO1xuICAgIH0pO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xufSIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlLmpzXCI7XG5pbXBvcnQgeyBwb3BVcFRvRG9FZGl0b3JGb3JtIH0gZnJvbSBcIi4vcG9wVXBUb0RvRWRpdG9yRm9ybS5qc1wiO1xuaW1wb3J0IHsgcG9wVXBUb0RvSW5mb0NhcmQgfSBmcm9tIFwiLi9wb3BVcFRvRG9JbmZvQ2FyZC5qc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9Eb0NhcmQoVG9Ebykge1xuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIGNhcmQgZGl2LlxuICAgIGNvbnN0IHRvRG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lclwiXG5cbiAgICAvLyBBZGQgcmVmZXJlbmNlIHRvIHRoZSBUb0RvLlxuICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UgPSBUb0RvO1xuXG4gICAgYWRkQ2hlY2tCb3godG9Eb0NhcmQpO1xuXG4gICAgLy8gQXBwbHkgXCJjb21wbGV0ZWQgZWZmZWN0c1wiIHRvIHRvLWRvIGl0ZW1zIHRoYXQgYXJlIGNvbXBsZXRlZC5cbiAgICBpZiAodG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgdG9Eb0NhcmQucXVlcnlTZWxlY3RvcihcIi50by1kby1jaGVja2JveFwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXIgY29tcGxldGVkXCI7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIHRpdGxlIGNvbnRhaW5lci5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9UaXRsZS5jbGFzc05hbWUgPSBcInRvLWRvLXRpdGxlXCJcbiAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBUb0RvLnRpdGxlO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gZHVlIGRhdGUgY29udGFpbmVyLlxuICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIENsYXNzaWZ5IHdoZXRoZXIgVG9EbyBkdWUgZGF0ZSBpcyBhbHJlYWR5IGxhdGUgb3IganVzdCB1cGNvbWluZy5cbiAgICBpZiAoaXNUb0RvTGF0ZShUb0RvLmR1ZURhdGUpKSB7XG4gICAgICAgIHRvRG9EdWVEYXRlLmNsYXNzTmFtZSA9IFwidG8tZG8tZHVlLWRhdGUgbGF0ZVwiO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxhdGVcIiwgVG9Eby5kdWVEYXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRvRG9EdWVEYXRlLmNsYXNzTmFtZSA9IFwidG8tZG8tZHVlLWRhdGUgdXBjb21pbmdcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3QtbGF0ZVwiLCBUb0RvLmR1ZURhdGUpO1xuICAgIH1cblxuICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHtmb3JtYXREYXRlKFRvRG8uZHVlRGF0ZSl9YDtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG5cblxuICAgIGFkZFZpZXdCdXR0b24odG9Eb0NhcmQpO1xuICAgIGFkZERlbGV0ZUJ1dHRvbih0b0RvQ2FyZCk7XG4gICAgYWRkRWRpdEJ1dHRvbih0b0RvQ2FyZCk7XG5cbiAgICByZXR1cm4gdG9Eb0NhcmQ7XG59XG5cblxuLy8gQ2hlY2sgd2hldGhlciBUb0RvIGxhdGUgaXMgbGF0ZSBvciBub3QuXG5mdW5jdGlvbiBpc1RvRG9MYXRlKGR1ZURhdGUpIHtcblxuICAgIC8vIEdldCBjdXJyZW50IGRhdGUgaW4gXCJZWVlZLU1NLUREXCIgZm9ybWF0LlxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG5cbiAgICAvLyBDdXJyZW50IGRhdGUgaXMgYWhlYWQgb2YgZHVlIGRhdGUgaGVuY2UgVG9EbyBpcyBsYXRlLlxuICAgIGlmIChjdXJyZW50RGF0ZSA+IGR1ZURhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEN1cnJlbnQgZGF0ZSBpcyBiZWhpbmQgZHVlIGRhdGUgaGVuY2UgVG9EbyBpcyBub3QgbGF0ZS5cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGREZWxldGVCdXR0b24odG9Eb0NhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uLlxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRlbGV0ZSBzdmcgaWNvbi5cbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOEgxMVYxN0g5VjhNMTMsOEgxNVYxN0gxM1Y4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGRlbGV0ZSBmdW5jdGlvbmFsaXR5IHRvIGRlbGV0ZSBidXR0b24uXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgLy8gQXNrIHRoZSB1c2VyIGZvciBkZWxldGUgY29uZmlybWF0aW9uLlxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJDb25maXJtIGRlbGV0aW9uP1wiKSl7XG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoYmFjay1lbmQpXG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRlbGV0ZSgpO1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoZnJvbnQtZW5kKVxuICAgICAgICAgICAgdG9Eb0NhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b0RvQ2FyZCk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRFZGl0QnV0dG9uKHRvRG9DYXJkKSB7XG4gICAgLy8gQ3JlYXRlIEVkaXQgYnV0dG9uLlxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0XCI7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBJY29uLlxuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkVkaXQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTgsMi45IDE3LjM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjkgMTYuOTYsMy4yOUwxNS4xMiw1LjEyTDE4Ljg3LDguODdNMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTNMMTQuMDYsNi4xOEwzLDE3LjI1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGVkaXQgZnVuY3Rpb25hbGl0eSB0byBlZGl0IGJ1dHRvbiBieSBwb3BwaW5nIHRoZSBcInRvLWRvIGVkaXRvciBmb3JtXCIuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcFRvRG9FZGl0b3JGb3JtKHRvRG9DYXJkKTtcbiAgICB9KTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkVmlld0J1dHRvbih0b0RvQ2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIFZpZXcgYnV0dG9uLlxuICAgIGNvbnN0IHZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHZpZXdCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0XCI7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBJY29uLlxuICAgIHZpZXdCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlZpZXcgVG9EbyBJbmZvcm1hdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzLDlIMTFWN0gxM00xMywxN0gxMVYxMUgxM00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgXCJ2aWV3IHRvLWRvXCIgZnVuY3Rpb25hbGl0eSB0byB2aWV3IGJ1dHRvbiBieSBwb3BwaW5nIGEgXCJkaXZcIiBjb250YWluaW5nIHRoZSB0by1kbyBpdGVtJ3MgaW5mby5cbiAgICB2aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwVG9Eb0luZm9DYXJkKHRvRG9DYXJkKTtcbiAgICB9KTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh2aWV3QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hlY2tCb3godG9Eb0NhcmQpIHtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwidG8tZG8tY2hlY2tib3hcIlxuXG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IGlzVG9Eb0NvbXBsZXRlZCA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkXG4gICAgICAgIGlmIChpc1RvRG9Db21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lclwiXG5cbiAgICAgICAgICAgIC8vIElmIGEgJ2NvbXBsZXRlZCcgdG8tZG8gaXMgc2V0IHRvICd1bmZpbmlzaGVkJyB0byBkbywgcmVtb3ZlIGl0IGZyb20gdGhlIFwiQ29tcGxldGVkXCIgcHJvamVjdCdzIHRvLWRvIHdpbmRvdy5cbiAgICAgICAgICAgIGlmIChnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKS5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgdG9Eb0NhcmQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0b0RvQ2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lciBjb21wbGV0ZWRcIlxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBVcGRhdGUgY2hhbmdlcyBpbnNpZGUgcGFyZW50IHByb2plY3QuXG4gICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJvamVjdC5yZXBsYWNlVG9Ebyh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlKTtcbiAgICB9KTtcblxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGNoZWNrQm94KVxufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlucHV0RGF0ZSkge1xuICAgIGNvbnN0IG1vbnRocyA9IFtcbiAgICAgICAgXCJKYW4uXCIsIFwiRmViLlwiLCBcIk1hci5cIiwgXCJBcHIuXCIsIFwiTWF5XCIsIFwiSnVuLlwiLFxuICAgICAgICBcIkp1bC5cIiwgXCJBdWcuXCIsIFwiU2VwLlwiLCBcIk9jdC5cIiwgXCJOb3YuXCIsIFwiRGVjLlwiXG4gICAgXTtcblxuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGlucHV0RGF0ZS5zcGxpdChcIi1cIik7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke21vbnRoc1tOdW1iZXIobW9udGgpIC0gMV19ICR7cGFyc2VJbnQoZGF5LCAxMCl9LCAke3llYXJ9YDtcblxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RDYXJkLmpzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFByb2plY3RBZGRlckZvcm0oKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc05hbWUgPSBcInByb2plY3QtYWRkZXItZm9ybVwiO1xuICAgIGZvcm0uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC10aXRsZVwiIHBsYWNlaG9sZGVyPVwiSGVsbG9cIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkIFByb2plY3RcIj5gO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBcbiAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvbi5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIGZvcm0gdGhhdCBjcmVhdGVzIHRoZSBQcm9qZWN0IG9uY2Ugc3VibWl0dGVkLlxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gR2V0IHByb2plY3QncyB0aXRsZS5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgUHJvamVjdC5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgcHJvamVjdCBjYXJkIHJlcHJlc2VudGF0aW9uLlxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpXG5cbiAgICAgICAgLy8gUmVuZGVyIG5ldyBwcm9qZWN0IHRvIERPTSBieSBhcHBlbmRpbmcgXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvamVjdENhcmQsIGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByb2plY3QtYWRkZXJcIikpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIG5ld2x5IGNyZWF0ZWQgcHJvamVjdCBhcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QuXG4gICAgICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICAvLyBSZW1vdmUgZm9ybSB3aGVuIGRvbmUuXG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBvcFVwUHJvamVjdEVkaXRvckZvcm0ocHJvamVjdENhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIC8vIENyZWF0ZSBwcm9qZWN0IGVkaXRvciBmb3JtLlxuICAgIGNvbnN0IHByb2plY3RFZGl0b3JGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgcHJvamVjdEVkaXRvckZvcm0uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWVkaXRvci1mb3JtXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdG9yRm9ybSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlICBuZXctcHJvamVjdC10aXRsZSBpbnB1dCBmaWVsZC5cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuaWQgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2UudGl0bGU7XG4gICAgcHJvamVjdEVkaXRvckZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlSW5wdXQpO1xuXG4gICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b24uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkRvbmVcIjtcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gcHJvamVjdCBlZGl0b3IgZm9ybSB0aGF0IG1vZGlmaWVzIHRoZSBwcm9qZWN0IHRpdGxlIHdoZW4gc3VibWl0dGVkLlxuICAgIHByb2plY3RFZGl0b3JGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQXNrIGZvciB1c2VyIGNvbmZpcm1hdGlvbiBiZWZvcmUgZWRpdGluZy5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBjaGFuZ2VzP1wiKSl7XG4gICAgICAgICAgICAvLyBNb2RpZnkgcHJvamVjdCB0aXRsZSBpbiBiYWNrLWVuZC5cbiAgICAgICAgICAgIHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2Uuc2V0UHJvamVjdFRpdGxlKG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gTW9kaWZ5IHByb2plY3QgdGl0bGUgaW4gZnJvbnQtZW5kLlxuICAgICAgICAgICAgcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyZW50LXByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZvcm0gZnJvbSB0aGUgRE9NIHdoZW4gc3VibWl0dGVkLlxuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufSIsImltcG9ydCB7IHJlbmRlclRvRG9XaW5kb3cgfSBmcm9tIFwiLi9yZW5kZXJUb0RvV2luZG93LmpzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eby5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFRvRG9BZGRlckZvcm0oKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0b0RvQWRkZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdG9Eb0FkZGVyRm9ybS5jbGFzc05hbWUgPSBcInRvLWRvLWFkZGVyLWZvcm1cIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9BZGRlckZvcm0pO1xuXG4gICAgLy8gQ3JlYXRlIHRpdGxlIGlucHV0LlxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlRpdGxlOlwiLCB0aXRsZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb24gYXJlYS5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEZXNjcmlwdGlvbjpcIiwgZGVzY3JpcHRpb25UZXh0YXJlYSkpO1xuXG4gICAgLy8gQ3JlYXRlIGR1ZSBkYXRlIGlucHV0LlxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlLWRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkR1ZSBEYXRlOlwiLCBkdWVEYXRlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBUb0RvIHByaW9yaXR5IHNlbGVjdGlvbi5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSBcInByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlByaW9yaXR5OlwiLCBwcmlvcml0eVNlbGVjdCkpO1xuXG4gICAgLy8gQ3JlYXRlIE5vdGUgaW5wdXQuXG4gICAgY29uc3Qgbm90ZXNUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBub3Rlc1RleHRhcmVhLmlkID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEubmFtZSA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLnJvd3MgPSA0O1xuICAgIG5vdGVzVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJOb3RlczpcIiwgbm90ZXNUZXh0YXJlYSkpO1xuXG4gICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b24uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uaWQgPSBcInN1Ym1pdC1mb3JtXCI7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJDcmVhdGUgVG9Eb1wiO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0byBmb3JtIHRoYXQgd2hlbiBzdWJtaXR0ZWQsIGEgVG9EbyBvYmplY3QgaXMgY3JlYXRlZC5cbiAgICB0b0RvQWRkZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBuZXcgVG9EbyguLi5bdG9Eb1RpdGxlLCB0b0RvRGVzY3JpcHRpb24sIHRvRG9EdWVEYXRlLCB0b0RvUHJpb3JpdHksIHRvRG9Ob3Rlc10pXG4gICAgICAgIGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpLmFkZFRvRG8odG9Eb0l0ZW0pO1xuXG4gICAgICAgIC8vIFJlbmRlciBUby1EbyBpdGVtIGluICd0by1kbycgdGFiIGltbWVkaWF0ZWx5IG9uY2UgY3JlYXRlZC5cbiAgICAgICAgcmVuZGVyVG9Eb1dpbmRvdyhnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKSk7XG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuXG4vLyBSZXR1cm5zIGEgZGl2IGNvbnRhaW5pbmcgYSBsYWJlbGVkIGlucHV0LlxuZnVuY3Rpb24gY3JlYXRlRmllbGREaXYobGFiZWxUZXh0LCBpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gZGl2O1xufSIsImltcG9ydCB7IHJlbmRlclRvRG9XaW5kb3cgfSBmcm9tIFwiLi9yZW5kZXJUb0RvV2luZG93XCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFRvRG9FZGl0b3JGb3JtKHRvRG9DYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0b0RvRWRpdG9yRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRvRG9FZGl0b3JGb3JtLmNsYXNzTmFtZSA9IFwidG8tZG8tYWRkZXItZm9ybVwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0VkaXRvckZvcm0pXG5cbiAgICAvLyBDcmVhdGUgdGl0bGUgaW5wdXQuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZTtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlRpdGxlOlwiLCB0aXRsZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb24gYXJlYS5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRlc2NyaXB0aW9uO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiRGVzY3JpcHRpb246XCIsIGRlc2NyaXB0aW9uVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBkdWUgZGF0ZSBpbnB1dC5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZHVlRGF0ZTtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkR1ZSBEYXRlOlwiLCBkdWVEYXRlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBUb0RvIHByaW9yaXR5IHNlbGVjdGlvbi5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSBcInByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByaW9yaXR5O1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiUHJpb3JpdHk6XCIsIHByaW9yaXR5U2VsZWN0KSk7XG5cbiAgICAvLyBDcmVhdGUgTm90ZSBpbnB1dC5cbiAgICBjb25zdCBub3Rlc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5vdGVzVGV4dGFyZWEuaWQgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNUZXh0YXJlYS5uYW1lID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgbm90ZXNUZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgbm90ZXNUZXh0YXJlYS52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2Uubm90ZXM7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJOb3RlczpcIiwgbm90ZXNUZXh0YXJlYSkpO1xuXG4gICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b24uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uaWQgPSBcInN1Ym1pdC1mb3JtXCI7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJTYXZlIENoYW5nZXNcIjtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gZm9ybSB0aGF0IHdoZW4gc3VibWl0dGVkLCBhIFRvRG8gb2JqZWN0IGlzIGNyZWF0ZWQuXG4gICAgdG9Eb0VkaXRvckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBTaG93IGNvbmZpcm1hdGlvbiBiZWZvcmUgZWRpdGluZy5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBjaGFuZ2VzP1wiKSkge1xuICAgICAgICAgICAgLy8gVGhlIHVzZXIgY2xpY2tlZCBcIk9LXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUGFyc2UgZm9ybSBjb250cm9sIHZhbHVlcy5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIikudmFsdWU7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgdG8gZG8uXG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnRpdGxlID0gdG9Eb1RpdGxlO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbiA9IHRvRG9EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZHVlRGF0ZSA9IHRvRG9EdWVEYXRlO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcmlvcml0eSA9IHRvRG9Qcmlvcml0eTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2Uubm90ZXMgPSB0b0RvTm90ZXM7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRhdGVBbmRUaW1lQ3JlYXRlZCA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGF0ZUFuZFRpbWVDcmVhdGVkO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kYXRlTW9kaWZpZWQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBUb0RvIGl0ZW0gd2l0aCB0aGUgVG9EbyBpdGVtIHdpdGggYWxsIGNoYW5nZXMgYXBwbGllZCBpbiB0aGUgcGFyZW50IHByb2plY3QncyBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcm9qZWN0LnJlcGxhY2VUb0RvKHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdG8tZG8gdGFiLlxuICAgICAgICAgICAgcmVuZGVyVG9Eb1dpbmRvdyhnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIERPTSBvbmNlIHN1Ym1pdHRlZC5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuXG4vLyBSZXR1cm5zIGEgZGl2IGNvbnRhaW5pbmcgYSBsYWJlbGVkIGlucHV0LlxuZnVuY3Rpb24gY3JlYXRlRmllbGREaXYobGFiZWxUZXh0LCBpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gZGl2O1xufSIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFRvRG9JbmZvQ2FyZCh0b0RvQ2FyZCkge1xuICAgIC8vIENyZWF0ZSBiYWNrZ3JvdW5kIGNvbnRhaW5lci5cbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby1iYWNrZ3JvdW5kXCJcblxuICAgIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lci5cbiAgICBjb25zdCB0b0RvSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0luZm9Db250YWluZXIuY2xhc3NOYW1lID0gXCJ0by1kby1pbmZvLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBjbG9zZSBkaXZcbiAgICBjb25zdCBjbG9zZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VEaXYuY2xhc3NOYW1lID0gXCJjbG9zZSBpY29uXCI7XG4gICAgY2xvc2VEaXYuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Q2xvc2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTksM0gxNi4zSDcuN0g1QTIsMiAwIDAsMCAzLDVWNy43VjE2LjRWMTlBMiwyIDAgMCwwIDUsMjFINy43SDE2LjRIMTlBMiwyIDAgMCwwIDIxLDE5VjE2LjNWNy43VjVBMiwyIDAgMCwwIDE5LDNNMTUuNiwxN0wxMiwxMy40TDguNCwxN0w3LDE1LjZMMTAuNiwxMkw3LDguNEw4LjQsN0wxMiwxMC42TDE1LjYsN0wxNyw4LjRMMTMuNCwxMkwxNywxNS42TDE1LjYsMTdaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZURpdik7XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGluZm8tZmllbGQgZGl2XG4gICAgZnVuY3Rpb24gY3JlYXRlSW5mb0ZpZWxkKGxhYmVsLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBpbmZvRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvRmllbGQuY2xhc3NOYW1lID0gXCJpbmZvLWZpZWxkXCI7XG5cbiAgICAgICAgY29uc3QgaW5mb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb0xhYmVsLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby1sYWJlbFwiO1xuICAgICAgICBpbmZvTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbCArIFwiOlwiO1xuICAgICAgICBpbmZvRmllbGQuYXBwZW5kQ2hpbGQoaW5mb0xhYmVsKTtcblxuICAgICAgICBjb25zdCBpbmZvVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvVmFsdWUuY2xhc3NOYW1lID0gXCJ0by1kby1pbmZvLXZhbHVlXCI7XG4gICAgICAgIGluZm9WYWx1ZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBpbmZvRmllbGQuYXBwZW5kQ2hpbGQoaW5mb1ZhbHVlKTtcblxuICAgICAgICByZXR1cm4gaW5mb0ZpZWxkO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBpbmZvLWZpZWxkIGRpdnMgZm9yIGVhY2ggZmllbGRcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJUaXRsZVwiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnRpdGxlKSk7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiRHVlIERhdGVcIiwgZm9ybWF0RGF0ZSh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGUpKSk7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiUHJvamVjdFwiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByb2plY3QudGl0bGUpKTtcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJEZXNjcmlwdGlvblwiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRlc2NyaXB0aW9uKSk7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiUHJpb3JpdHlcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcmlvcml0eSkpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIk5vdGVzXCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2Uubm90ZXMpKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgbWFpbiBjb250YWluZXIgdG8gdGhlIGJhY2tncm91bmQgY29udGFpbmVyXG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvSW5mb0NvbnRhaW5lcik7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNsb3NlIGRpdlxuICAgIGNsb3NlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYmFja2dyb3VuZENvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdG8gYm9keS5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmRDb250YWluZXIpO1xufVxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG9DYXJkIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb0NhcmRcIjtcbmltcG9ydCB7IHBvcFVwVG9Eb0FkZGVyRm9ybSB9IGZyb20gXCIuL3BvcFVwVG9Eb0FkZGVyRm9ybVwiO1xuaW1wb3J0IHsgc29ydFRvRG9JdGVtcyB9IGZyb20gXCIuL3NvcnRUb0RvSXRlbXNcIjtcbmNvbnN0IGNvbXBhcmVXZWVrID0gcmVxdWlyZShcImNvbXBhcmUtd2Vla1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvRG9XaW5kb3coY3VycmVudFByb2plY3QpIHtcbiAgICAvLyBBY2Nlc3MgY3VycmVudCB0byBkbyB3aW5kb3cuXG4gICAgY29uc3QgY3VycmVudFRvRG9XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXdpbmRvd1wiKTtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyB0byBkbyB3aW5kb3cuXG4gICAgY29uc3QgbmV3VG9Eb1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9Eb1dpbmRvdy5jbGFzc05hbWUgPSBcInRvLWRvLXdpbmRvd1wiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBjdXJyZW50IHBhcmVudCBwcm9qZWN0IGNhcmQgdG8gdGhlIHRvLWRvIHdpbmRvdy5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWVDYXJkID0gY3JlYXRlQ3VycmVudFByb2plY3ROYW1lQ2FyZChjdXJyZW50UHJvamVjdCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHNvcnRlci5cbiAgICBjb25zdCBzb3J0ZXIgPSBjcmVhdGVTb3J0ZXIoY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0by1kbyB0YWIuXG4gICAgY29uc3QgdG9Eb1RhYiA9IGNyZWF0ZVRvRG9UYWIoY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0by1kbyBhZGRlciBidXR0b24uXG4gICAgY29uc3QgdG9Eb0FkZGVyQnV0dG9uID0gY3JlYXRlVG9Eb0FkZGVyQnV0dG9uKCk7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGNyZWF0ZWQgZWxlbWVudHMgdG8gdGhlIG5ldyB0by1kbyB3aW5kb3cuXG4gICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdE5hbWVDYXJkKTtcbiAgICBuZXdUb0RvV2luZG93LmFwcGVuZENoaWxkKHNvcnRlcik7XG4gICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZCh0b0RvVGFiKTtcbiAgICBcbiAgICAvLyBPbmx5IGFkZCB0aGUgdG8tZG8gYWRkZXIgYnV0dG9uIHRvIG5vbiBcIkNvbXBsZXRlXCIgcHJvamVjdHMuXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LmlkICE9PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIgJiYgY3VycmVudFByb2plY3QuaWQgIT09IFwidG9kYXktcHJvamVjdFwiICYmIGN1cnJlbnRQcm9qZWN0LmlkICE9PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIpIHtcbiAgICAgICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZCh0b0RvQWRkZXJCdXR0b24pO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgY3VycmVudCB0byBkbyB3aW5kb3cgd2l0aCBuZXcgdG8gZG8gd2luZG93LlxuICAgIGN1cnJlbnRUb0RvV2luZG93LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld1RvRG9XaW5kb3csIGN1cnJlbnRUb0RvV2luZG93KTtcbn1cblxuXG4vLyBDcmVhdGUgYSBjYXJkIGNvbnRhaW5pbmcgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgcGFyZW50IHByb2plY3QuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50UHJvamVjdE5hbWVDYXJkKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFByb2plY3ROYW1lQ2FyZC5jbGFzc05hbWUgPSBcInBhcmVudC1wcm9qZWN0LW5hbWVcIlxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcblxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdE5hbWVDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTb3J0ZXIoY3VycmVudFByb2plY3QpIHtcblxuICAgIC8vIENyZWF0ZSBkaXYgdG8gY29udGFpbiB0aGUgc29ydGVyLlxuICAgIGNvbnN0IHNvcnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc29ydGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic29ydC1jb250YWluZXJcIlxuXG4gICAgLy8gQ3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdGhhdCB3aWxsIHNlcnZlIGFzIGEgd2F5IHRvIGNob29zZSBzb3J0aW5nIGNyaXRlcmlhLlxuICAgIGNvbnN0IHNvcnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc29ydGVyLmlkID0gXCJzb3J0ZXJcIjtcbiAgICBzb3J0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydGVyKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbGFiZWwgZm9yIHRoZSBzb3J0ZXIuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHNvcnRlci5pZCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlNvcnQgYnk6XCI7XG4gICAgc29ydGVyLmJlZm9yZShsYWJlbCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGEgdmFsdWVzIG9mIG9wdGlvbnMgdG8gYmUgc2VsZWN0ZWQuXG4gICAgY29uc3Qgc29ydGluZ09wdGlvbnMgPSBbXG4gICAgICAgIHsgdmFsdWU6IFwidGltZS1jcmVhdGVkLWFzY2VuZGluZ1wiLCB0ZXh0OiBcIkNyZWF0ZWQgKE9sZGVzdCB0byBOZXdlc3QpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJ0aW1lLWNyZWF0ZWQtZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIkNyZWF0ZWQgKE5ld2VzdCB0byBPbGRlc3QpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkYXRlLWFzY2VuZGluZ1wiLCB0ZXh0OiBcIkRhdGUgKGFzY2VuZGluZylcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImRhdGUtZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJuYW1lLWFzY2VuZGluZ1wiLCB0ZXh0OiBcIk5hbWUgKGFzY2VuZGluZylcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcIm5hbWUtZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIk5hbWUgKGRlc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJwcmlvcml0eS1hc2NlbmRpbmdcIiwgdGV4dDogXCJQcmlvcml0eSAoTG93ZXN0IHRvIEhpZ2hlc3QpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJwcmlvcml0eS1kZXNjZW5kaW5nXCIsIHRleHQ6IFwiUHJpb3JpdHkgKEhpZ2hlc3QgdG8gTG93ZXN0KVwiIH1cbiAgICBdXG5cbiAgICAvLyBHZXQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvbiBmcm9tIGN1cnJlbnQgc29ydGVyLlxuICAgIGxldCBjdXJyZW50U29ydGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzb3J0ZXJcIik7XG4gICAgXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9uIG9mIHRoZSBuZXcgc29ydGVyIHRvIGJlIGNyZWF0ZWQuXG4gICAgbGV0IG5ld0N1cnJlbnRTb3J0T3B0aW9uO1xuICAgIFxuICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IHNvcnRlciB0byBiZSByZW5kZXJlZCwgc2V0IHRoZSBuZXcgc29ydGVyIHNlbGVjdGVkIG9wdGlvbiB0byBcIkNyZWF0ZWQgKE9sZGVzdCB0byBOZXdlc3QpXCIuXG4gICAgaWYgKCFjdXJyZW50U29ydGVyKSB7XG4gICAgICAgIG5ld0N1cnJlbnRTb3J0T3B0aW9uID0gc29ydGluZ09wdGlvbnMuZmluZChzb3J0aW5nT3B0aW9uID0+IHNvcnRpbmdPcHRpb24udGV4dCA9PT0gXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiKTtcbiAgICB9XG4gICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIGZpcnN0IHNvcnRlciwgc2V0IHRoZSBuZXcgc29ydGVyIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgY3VycmVudCBzb3J0ZXIgc2VsZWN0ZWQgb3B0aW9uLlxuICAgIGVsc2Uge1xuICAgICAgICBuZXdDdXJyZW50U29ydE9wdGlvbiA9IGN1cnJlbnRTb3J0ZXIudmFsdWU7XG4gICAgfVxuXG4gICAgc29ydGluZ09wdGlvbnMuZm9yRWFjaChzb3J0aW5nT3B0aW9uID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIG9wdGlvbiBlbGVtZW50LlxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgIC8vIEFkZCBvcHRpb24gdmFsdWUuXG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBzb3J0aW5nT3B0aW9uLnZhbHVlKTtcblxuICAgICAgICAvLyBBZGQgb3B0aW9uIHRleHQtY29udGVudC5cbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc29ydGluZ09wdGlvbi50ZXh0O1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb24gb2YgY3VycmVudCBzb3J0ZXIgY2Fycnkgb3ZlciB0byB0aGUgbmV3IHNvcnRlci5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gc29ydGluZ09wdGlvbi52YWx1ZSA9PT0gbmV3Q3VycmVudFNvcnRPcHRpb247XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBvcHRpb24gdG8gc29ydGVyIHNlbGVjdCBlbGVtZW50LlxuICAgICAgICBzb3J0ZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KVxuXG4gICAgLy8gUmUtcmVuZGVyIHRvLWRvIHRhYiBzbyB0aGF0IHRvLWRvIGl0ZW0ncyBuZXcgc29ydCBjcml0ZXJhIHdpbGwgYmUgcmVmcmVjdGVkXG4gICAgc29ydGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VG9Eb1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tdGFiXCIpO1xuICAgICAgICBjdXJyZW50VG9Eb1RhYi5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChjcmVhdGVUb0RvVGFiKGN1cnJlbnRQcm9qZWN0KSwgY3VycmVudFRvRG9UYWIpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gc29ydGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvVGFiKGN1cnJlbnRQcm9qZWN0KSB7XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gdGFiLlxuICAgIGNvbnN0IHRvRG9UYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9UYWIuY2xhc3NOYW1lID0gXCJ0by1kby10YWJcIjtcblxuICAgIC8vIEFycmF5IGZvciBzdG9yaW5nIGFsbCB1bnNvcnRlZCBUb0RvIGl0ZW1zLlxuICAgIGxldCB1bnNvcnRlZFRvRG9JdGVtcyA9IFtdO1xuXG4gICAgLy8gUmVuZGVyIGFsbCBUb0RvcyBhY3Jvc3MgYWxsIHByb2plY3RzIGlmIHRoZSBwcm9qZWN0IGlzIFwiSG9tZVwiXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBQcm9qZWN0LmhvbWUpIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGFsbCBjb21wbGV0ZWQgVG9Eb3MgZnJvbSBkaWZmZXJlbnQgUHJvamVjcnMgaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IGlzIFwiQ29tcGxldGVkXCJcbiAgICBlbHNlIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiICkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9JdGVtc1xuICAgICAgICAgICAgLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b0RvSXRlbS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBSZW5kZXIgYWxsIFRvZGF5IFRvRG9zIGZyb20gZGlmZmVyZW50IFByb2plY3JzIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpcyBcIlRvZGF5XCJcbiAgICBlbHNlIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gXCJ0b2RheS1wcm9qZWN0XCIgKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3JtYXQgY3VycmVudCBkYXRlIHNpbWlsYXIgdG8gdGhlIGRhdGUgc3RydWN0dXJlIG9mICdkdWVEYXRlJyBwcm9wZXJ0eSBvZiBUb0RvIG9iamVjdC5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LSR7KGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9LSR7Y3VycmVudERhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgICAgICAgICAgICAgIGlmICh0b0RvSXRlbS5kdWVEYXRlID09PSBmb3JtYXR0ZWRDdXJyZW50RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIFJlbmRlciBhbGwgVGhpcyBXZWVrIFRvRG9zIGZyb20gZGlmZmVyZW50IFByb2plY3JzIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpcyBcIlRoaXMgV2Vla1wiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwidGhpcy13ZWVrLXByb2plY3RcIiApIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBkYXRlLlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBkdWUgZGF0ZS5cbiAgICAgICAgICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSB0b0RvSXRlbS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZHVlIGRhdGUgb2YgY3VycmVudCB0byBkbyBpcyBpbiBjdXJyZW50IFwidGhpcyB3ZWVrXCIuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVXZWVrKGN1cnJlbnREYXRlLCBkdWVEYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIElmIGN1cnJlbnQgcHJvamVjdCBpcyBub3QgXCJIb21lXCIgYW5kIG5vdCBcIkNvbXBsZXRlZFwiLCBvbmx5IHJlbmRlciBpdHMgcmVzcGVjdGl2ZSBUb0RvIGl0ZW1zLlxuICAgIGVsc2Uge1xuICAgICAgICBjdXJyZW50UHJvamVjdC50b0RvSXRlbXMuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29ydC5cbiAgICBjb25zdCBzb3J0ZWRUb0RvSXRlbXMgPSBzb3J0VG9Eb0l0ZW1zKHVuc29ydGVkVG9Eb0l0ZW1zKTtcblxuICAgIC8vIFJlbmRlciBhbGwgVG9EbyBjYXJkcyB0byBUb0RvIHRhYi5cbiAgICBzb3J0ZWRUb0RvSXRlbXMuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgIHRvRG9UYWIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0NhcmQodG9Eb0l0ZW0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b0RvVGFiO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG9BZGRlckJ1dHRvbigpIHtcblxuICAgIC8vIENyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJ0by1kby1hZGRlclwiO1xuXG4gICAgLy8gQ3JlYXRlIGFuIFNWRyBlbGVtZW50IHVzaW5nIGlubmVySFRNTFxuICAgIGNvbnN0IHN2Z0hUTUwgPSBgXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDx0aXRsZT5BZGQgVG9EbzwvdGl0bGU+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LDEzSDEzVjE3SDExVjEzSDdWMTFIMTFWN0gxM1YxMUgxN00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPlxuICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gU2V0IHRoZSBpbm5lckhUTUwgb2YgdGhlIGJ1dHRvbiB0byBpbmNsdWRlIHRoZSBTVkcgYW5kIGNhcHRpb25cbiAgICBidXR0b24uaW5uZXJIVE1MID0gc3ZnSFRNTCArICc8ZGl2IGNsYXNzPVwiYnV0dG9uLWNhcHRpb25cIj5OZXcgVG9Eby4uLjwvZGl2Pic7XG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0aGF0IHBvcHMgdGhlIHRvIGRvIGFkZGVyIGZvcm0gd2hlbiBidXR0b24gaXMgY2xpY2tlZC5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcG9wVXBUb0RvQWRkZXJGb3JtKCk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIGNyZWF0ZWQgYnV0dG9uIGVsZW1lbnRcbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImltcG9ydCB7IHJlbmRlclRvRG9XaW5kb3cgfSBmcm9tIFwiLi9yZW5kZXJUb0RvV2luZG93XCI7XG5cbmxldCBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgcmVuZGVyVG9Eb1dpbmRvdyhjdXJyZW50bHlTZWxlY3RlZFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJyZW50bHlTZWxlY3RlZFByb2plY3Q7XG59IiwiLyoqXG4gKiBTb3J0cyBhbiBhcnJheSBvZiB0by1kbyBpdGVtcyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgc29ydGluZyBjcml0ZXJpYS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB1bnNvcnRlZFRvRG9JdGVtcyAtIEFuIGFycmF5IG9mIHRvLWRvIGl0ZW1zIHRvIGJlIHNvcnRlZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gIEFuIGFycmF5IG9mIHNvcnRlZCB0by1kbyBpdGVtcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUb0RvSXRlbXModW5zb3J0ZWRUb0RvSXRlbXMpIHtcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc29ydGVyIG9yIHNldCB0aGUgZGVmYXVsdCBzb3J0IGNyaXRlcmlhLlxuICAgIGNvbnN0IHNvcnRDcml0ZXJpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydGVyXCIpPy52YWx1ZSB8fCBcInRpbWUtY3JlYXRlZC1hc2NlbmRpbmdcIjtcblxuICAgIC8vIENyZWF0ZSBhIG1hcHBpbmcgb2Ygc29ydCBjcml0ZXJpYSB0byBjb21wYXJpc29uIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBzb3J0RnVuY3Rpb25zID0ge1xuICAgICAgICBcImRhdGUtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8xLmR1ZURhdGUpIC0gbmV3IERhdGUoVG9EbzIuZHVlRGF0ZSksXG4gICAgICAgIFwiZGF0ZS1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8yLmR1ZURhdGUpIC0gbmV3IERhdGUoVG9EbzEuZHVlRGF0ZSksXG4gICAgICAgIFwibmFtZS1hc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gVG9EbzEudGl0bGUubG9jYWxlQ29tcGFyZShUb0RvMi50aXRsZSksXG4gICAgICAgIFwibmFtZS1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IFRvRG8yLnRpdGxlLmxvY2FsZUNvbXBhcmUoVG9EbzEudGl0bGUpLFxuICAgICAgICBcInRpbWUtY3JlYXRlZC1hc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gbmV3IERhdGUoVG9EbzEuZGF0ZUFuZFRpbWVDcmVhdGVkKSAtIG5ldyBEYXRlKFRvRG8yLmRhdGVBbmRUaW1lQ3JlYXRlZCksXG4gICAgICAgIFwidGltZS1jcmVhdGVkLWRlc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gbmV3IERhdGUoVG9EbzIuZGF0ZUFuZFRpbWVDcmVhdGVkKSAtIG5ldyBEYXRlKFRvRG8xLmRhdGVBbmRUaW1lQ3JlYXRlZCksXG4gICAgICAgIFwicHJpb3JpdHktYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IHByaW9yaXR5TGV2ZWwoVG9EbzEpIC0gcHJpb3JpdHlMZXZlbChUb0RvMiksXG4gICAgICAgIFwicHJpb3JpdHktZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBwcmlvcml0eUxldmVsKFRvRG8yKSAtIHByaW9yaXR5TGV2ZWwoVG9EbzEpLFxuICAgIH07XG5cbiAgICAvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBnZXQgdGhlIHByaW9yaXR5IGxldmVsLlxuICAgIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSAoVG9EbykgPT4ge1xuICAgICAgICBzd2l0Y2ggKFRvRG8ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJIaWdoXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICBjYXNlIFwiTG93XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBIYW5kbGUgdW5leHBlY3RlZCBwcmlvcml0eSB2YWx1ZXMuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU29ydCB0aGUgYXJyYXkgdXNpbmcgdGhlIHNlbGVjdGVkIGNyaXRlcmlhLlxuICAgIGNvbnN0IHNvcnRlZFRvRG9JdGVtcyA9IHVuc29ydGVkVG9Eb0l0ZW1zLnNvcnQoc29ydEZ1bmN0aW9uc1tzb3J0Q3JpdGVyaWFdIHx8ICgoKSA9PiAwKSk7XG5cbiAgICByZXR1cm4gc29ydGVkVG9Eb0l0ZW1zO1xufVxuIiwiLyohIChjKSAyMDIwIEFuZHJlYSBHaWFtbWFyY2hpICovXG5cbmNvbnN0IHtwYXJzZTogJHBhcnNlLCBzdHJpbmdpZnk6ICRzdHJpbmdpZnl9ID0gSlNPTjtcbmNvbnN0IHtrZXlzfSA9IE9iamVjdDtcblxuY29uc3QgUHJpbWl0aXZlID0gU3RyaW5nOyAgIC8vIGl0IGNvdWxkIGJlIE51bWJlclxuY29uc3QgcHJpbWl0aXZlID0gJ3N0cmluZyc7IC8vIGl0IGNvdWxkIGJlICdudW1iZXInXG5cbmNvbnN0IGlnbm9yZSA9IHt9O1xuY29uc3Qgb2JqZWN0ID0gJ29iamVjdCc7XG5cbmNvbnN0IG5vb3AgPSAoXywgdmFsdWUpID0+IHZhbHVlO1xuXG5jb25zdCBwcmltaXRpdmVzID0gdmFsdWUgPT4gKFxuICB2YWx1ZSBpbnN0YW5jZW9mIFByaW1pdGl2ZSA/IFByaW1pdGl2ZSh2YWx1ZSkgOiB2YWx1ZVxuKTtcblxuY29uc3QgUHJpbWl0aXZlcyA9IChfLCB2YWx1ZSkgPT4gKFxuICB0eXBlb2YgdmFsdWUgPT09IHByaW1pdGl2ZSA/IG5ldyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcbik7XG5cbmNvbnN0IHJldml2ZSA9IChpbnB1dCwgcGFyc2VkLCBvdXRwdXQsICQpID0+IHtcbiAgY29uc3QgbGF6eSA9IFtdO1xuICBmb3IgKGxldCBrZSA9IGtleXMob3V0cHV0KSwge2xlbmd0aH0gPSBrZSwgeSA9IDA7IHkgPCBsZW5ndGg7IHkrKykge1xuICAgIGNvbnN0IGsgPSBrZVt5XTtcbiAgICBjb25zdCB2YWx1ZSA9IG91dHB1dFtrXTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUpIHtcbiAgICAgIGNvbnN0IHRtcCA9IGlucHV0W3ZhbHVlXTtcbiAgICAgIGlmICh0eXBlb2YgdG1wID09PSBvYmplY3QgJiYgIXBhcnNlZC5oYXModG1wKSkge1xuICAgICAgICBwYXJzZWQuYWRkKHRtcCk7XG4gICAgICAgIG91dHB1dFtrXSA9IGlnbm9yZTtcbiAgICAgICAgbGF6eS5wdXNoKHtrLCBhOiBbaW5wdXQsIHBhcnNlZCwgdG1wLCAkXX0pO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCB0bXApO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRba10gIT09IGlnbm9yZSlcbiAgICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHZhbHVlKTtcbiAgfVxuICBmb3IgKGxldCB7bGVuZ3RofSA9IGxhenksIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7aywgYX0gPSBsYXp5W2ldO1xuICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHJldml2ZS5hcHBseShudWxsLCBhKSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG5cbmNvbnN0IHNldCA9IChrbm93biwgaW5wdXQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gUHJpbWl0aXZlKGlucHV0LnB1c2godmFsdWUpIC0gMSk7XG4gIGtub3duLnNldCh2YWx1ZSwgaW5kZXgpO1xuICByZXR1cm4gaW5kZXg7XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2UgPSAodGV4dCwgcmV2aXZlcikgPT4ge1xuICBjb25zdCBpbnB1dCA9ICRwYXJzZSh0ZXh0LCBQcmltaXRpdmVzKS5tYXAocHJpbWl0aXZlcyk7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXRbMF07XG4gIGNvbnN0ICQgPSByZXZpdmVyIHx8IG5vb3A7XG4gIGNvbnN0IHRtcCA9IHR5cGVvZiB2YWx1ZSA9PT0gb2JqZWN0ICYmIHZhbHVlID9cbiAgICAgICAgICAgICAgcmV2aXZlKGlucHV0LCBuZXcgU2V0LCB2YWx1ZSwgJCkgOlxuICAgICAgICAgICAgICB2YWx1ZTtcbiAgcmV0dXJuICQuY2FsbCh7Jyc6IHRtcH0sICcnLCB0bXApO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9ICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSA9PiB7XG4gIGNvbnN0ICQgPSByZXBsYWNlciAmJiB0eXBlb2YgcmVwbGFjZXIgPT09IG9iamVjdCA/XG4gICAgICAgICAgICAoaywgdikgPT4gKGsgPT09ICcnIHx8IC0xIDwgcmVwbGFjZXIuaW5kZXhPZihrKSA/IHYgOiB2b2lkIDApIDpcbiAgICAgICAgICAgIChyZXBsYWNlciB8fCBub29wKTtcbiAgY29uc3Qga25vd24gPSBuZXcgTWFwO1xuICBjb25zdCBpbnB1dCA9IFtdO1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgbGV0IGkgPSArc2V0KGtub3duLCBpbnB1dCwgJC5jYWxsKHsnJzogdmFsdWV9LCAnJywgdmFsdWUpKTtcbiAgbGV0IGZpcnN0UnVuID0gIWk7XG4gIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgZmlyc3RSdW4gPSB0cnVlO1xuICAgIG91dHB1dFtpXSA9ICRzdHJpbmdpZnkoaW5wdXRbaSsrXSwgcmVwbGFjZSwgc3BhY2UpO1xuICB9XG4gIHJldHVybiAnWycgKyBvdXRwdXQuam9pbignLCcpICsgJ10nO1xuICBmdW5jdGlvbiByZXBsYWNlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZmlyc3RSdW4pIHtcbiAgICAgIGZpcnN0UnVuID0gIWZpcnN0UnVuO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBhZnRlciA9ICQuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGVvZiBhZnRlcikge1xuICAgICAgY2FzZSBvYmplY3Q6XG4gICAgICAgIGlmIChhZnRlciA9PT0gbnVsbCkgcmV0dXJuIGFmdGVyO1xuICAgICAgY2FzZSBwcmltaXRpdmU6XG4gICAgICAgIHJldHVybiBrbm93bi5nZXQoYWZ0ZXIpIHx8IHNldChrbm93biwgaW5wdXQsIGFmdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGFmdGVyO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdG9KU09OID0gYW55ID0+ICRwYXJzZShzdHJpbmdpZnkoYW55KSk7XG5leHBvcnQgY29uc3QgZnJvbUpTT04gPSBhbnkgPT4gcGFyc2UoJHN0cmluZ2lmeShhbnkpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9qc19tb2R1bGVzL1Byb2plY3QuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSBcIi4vanNfbW9kdWxlcy9jcmVhdGVQcm9qZWN0Q2FyZC5qc1wiO1xuaW1wb3J0IHsgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vanNfbW9kdWxlcy9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBwb3BVcFByb2plY3RBZGRlckZvcm0gfSBmcm9tIFwiLi9qc19tb2R1bGVzL3BvcFVwUHJvamVjdEFkZGVyRm9ybS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAvLyBMb2FkIHByb2plY3RzIGZyb20gc3RvcmFnZSBhbmQgc2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCB0byBcIkhvbWVcIi5cbiAgICBQcm9qZWN0LmxvYWRQcm9qZWN0cygpO1xuICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChQcm9qZWN0LmhvbWUpO1xuXG4gICAgLy8gTG9hZCBwcm9qZWN0cyB0byB0aGUgdGFicywgc2V0IHVwIHByb2plY3QgYWRkZXIgYnV0dG9uLCBhbmQgcHJvamVjdCBkcm9wZG93biBidXR0b24uXG4gICAgbG9hZFByb2plY3RzVG9UYWJzKCk7XG4gICAgc2V0VXBQcm9qZWN0QWRkZXIoKTtcbiAgICBzZXRVcFByb2plY3REcm9wZG93bigpO1xufSk7XG5cbi8vIExvYWQgcHJvamVjdHMgdG8gdGhlIHRhYnMuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNUb1RhYnMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXRhYlwiKTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHNDb250YWluZXIgPSBwcm9qZWN0c1RhYi5xdWVyeVNlbGVjdG9yKFwiLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lciA9IHByb2plY3RzVGFiLnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXJcIik7XG5cbiAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb2plY3QgaXMgYSBkZWZhdWx0IHByb2plY3Qgb3Igbm90LlxuICAgICAgICBpZiAoaXNEZWZhdWx0UHJvamVjdChwcm9qZWN0KSkge1xuICAgICAgICAgICAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc2VydFByb2plY3RDYXJkKGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lciwgcHJvamVjdENhcmQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIENoZWNrIGlmIGEgcHJvamVjdCBpcyBhIGRlZmF1bHQgcHJvamVjdC5cbmZ1bmN0aW9uIGlzRGVmYXVsdFByb2plY3QocHJvamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIHByb2plY3QuaWQgPT09IFwiaG9tZS1wcm9qZWN0XCIgfHxcbiAgICAgICAgcHJvamVjdC5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiIHx8XG4gICAgICAgIHByb2plY3QuaWQgPT09IFwidG9kYXktcHJvamVjdFwiIHx8XG4gICAgICAgIHByb2plY3QuaWQgPT09IFwidGhpcy13ZWVrLXByb2plY3RcIlxuICAgICk7XG59XG5cbi8vIEluc2VydCBhIHByb2plY3QgY2FyZCBpbnRvIHRoZSBjcmVhdGVkIHByb2plY3RzIGNvbnRhaW5lci5cbmZ1bmN0aW9uIGluc2VydFByb2plY3RDYXJkKGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lciwgcHJvamVjdENhcmQpIHtcbiAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RDYXJkLCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZGVyXCIpKTtcbn1cblxuLy8gU2V0IHVwIHRoZSBwcm9qZWN0IGFkZGVyIGJ1dHRvbi5cbmZ1bmN0aW9uIHNldFVwUHJvamVjdEFkZGVyKCkge1xuICAgIGNvbnN0IHByb2plY3RBZGRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGRlclwiKTtcbiAgICBwcm9qZWN0QWRkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gUG9wIHVwIHRoZSBwcm9qZWN0IGFkZGVyIGZvcm0gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICAgIHBvcFVwUHJvamVjdEFkZGVyRm9ybSgpO1xuICAgIH0pO1xufVxuXG4vLyBTZXQgdXAgdGhlIHByb2plY3QgZHJvcGRvd24gYnV0dG9uLlxuZnVuY3Rpb24gc2V0VXBQcm9qZWN0RHJvcGRvd24oKSB7XG4gICAgY29uc3QgcHJvamVjdERyb3Bkb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duXCIpO1xuICAgIHByb2plY3REcm9wZG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgJ2FjdGl2ZScgYW5kICdpbmFjdGl2ZScgY2xhc3NlcyBmb3IgdGhlIGNyZWF0ZWQgcHJvamVjdHMgY29udGFpbmVyLlxuICAgICAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgICAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==