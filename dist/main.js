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
    padding: 20px;
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

#created-projects-dropdown:hover .icon.dropdown {
    fill: white;
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
    grid-template-columns: 25px 1fr 150px 25px 25px 25px;
    gap: 5px;
    align-content: center;
    background-color: white;
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

input,
select,
textarea {
    width: 100%;
    display: block;
    border-radius: 5px;
    border: 2px solid rgb(215, 211, 211);
    padding: 5px 7px;
}

input:focus,
select:focus,
textarea:focus {
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
    display: none;
    height: 16px;
    width: 16px;
}

.project-card:hover .icon,
.to-do-container:hover .icon {
    display: block;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;IACI,YAAY;IACZ,WAAW;AACf;;AAIA;IACI,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA,sBAAsB;AACtB;IACI,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA,cAAc;AACd;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,SAAS;AACb;;AAEA,+BAA+B;AAC/B;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,aAAa;IACb,QAAQ;AACZ;;AAEA,iBAAiB;AACjB;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,oCAAoC;IACpC,QAAQ;IACR,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA,+BAA+B;AAC/B;;;;;IAKI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;;;;;IAKI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA,kBAAkB;AAClB;IACI,cAAc;IACd,WAAW;IACX,aAAa;IACb,gCAAgC;IAChC,wBAAwB;IACxB,SAAS;IACT,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;IACpB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,WAAW;AACf;;AAEA,iBAAiB;AACjB;IACI,oCAAoC;IACpC,aAAa;IACb,aAAa;IACb,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA,cAAc;AACd;IACI,aAAa;IACb,SAAS;AACb;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,oDAAoD;IACpD,QAAQ;IACR,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA,gBAAgB;AAChB;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;AACb;;AAEA,0BAA0B;AAC1B;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA,yBAAyB;AACzB;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uCAAuC;IACvC,cAAc;IACd,eAAe;IACf,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;AACpB;;AAEA,mBAAmB;AACnB;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,MAAM;IACN,OAAO;IACP,2CAA2C;IAC3C,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA,gBAAgB;AAChB;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;;;IAGI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,iCAAiC;IACjC,YAAY;AAChB;;AAEA;;IAEI,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,YAAY;IACZ,6BAA6B;AACjC;;AAEA,oBAAoB;AACpB;;IAEI,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,SAAS;AACb;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA,0BAA0B;AAC1B;IACI,oCAAoC;AACxC;;;AAGA;;IAEI;;;;;QAKI,mBAAmB;IACvB;;IAEA,wEAAwE;IACxE;QACI,0BAA0B;QAC1B,4BAA4B;IAChC;;IAEA;QACI,eAAe;QACf,sBAAsB;;QAEtB,SAAS;QACT,WAAW;QACX,cAAc;IAClB;AACJ","sourcesContent":["/* Global Styles */\n.icon {\n    height: 10px;\n    width: 10px;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap');\n\n:root {\n    --text: #10090c;\n    --background: #fdfcfc;\n    --primary: #b7d7c9;\n    --secondary: #d8e7e9;\n    --accent: #579d5a;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    width: 100vw;\n    height: 100vh;\n    padding: 20px;\n    background-color: grey;\n}\n\n/* Content Container */\n.content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n/* Dashboard */\n.dashboard {\n    background-color: black;\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n}\n\n.logo {\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: white;\n}\n\n.projects-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* Default Projects Container */\n.default-projects-container {\n    display: grid;\n    gap: 10px;\n}\n\n/* Created Projects Container */\n.created-projects-container.inactive {\n    display: none;\n}\n\n.created-projects-container.active {\n    margin-left: 13px;\n    border-left: 3px solid white;\n    display: grid;\n    gap: 3px;\n}\n\n/* Project Card */\n.project-card {\n    padding: 5px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 1fr 25px 25px;\n    gap: 5px;\n    align-content: center;\n}\n\n.project-card button {\n    height: 20px;\n}\n\n.project-card:hover,\n.project-adder:hover {\n    background-color: grey;\n}\n\n.created-projects-container.active > * {\n    margin-left: 10px;\n    padding: 4px;\n    border-radius: 6px;\n    font-size: 14px;\n    color: white;\n}\n\n/* Project and Dropdown Icons */\n#home-project,\n#completed-project,\n#today-project,\n#this-week-project,\n#created-projects-dropdown {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: start;\n    grid-template-columns: auto 1fr;\n    color: white;\n}\n\n#home-project .icon,\n#completed-project .icon,\n#today-project .icon,\n#this-week-project .icon,\n#created-projects-dropdown .icon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: black;\n    height: 17px;\n    width: 17px;\n}\n\n#created-projects-dropdown:hover .icon.dropdown {\n    fill: white;\n}\n\n/* Project Adder */\n.project-adder {\n    padding: 5px 0;\n    border: 0px;\n    display: grid;\n    grid-template-columns: 20px auto;\n    grid-template-rows: 20px;\n    gap: 10px;\n    justify-content: start;\n    align-items: center;\n    justify-items: start;\n    background-color: transparent;\n    color: white;\n}\n\n.project-adder .icon,\n.to-do-adder .icon {\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n/* To-Do Window */\n.to-do-window {\n    background-color: rgb(187, 181, 181);\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n}\n\n.parent-project-name {\n    font-size: 20px;\n    font-weight: 600;\n}\n\n/* To-Do Tab */\n.to-do-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* To-Do Container */\n.to-do-container {\n    height: 45px;\n    padding: 10px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 25px 1fr 150px 25px 25px 25px;\n    gap: 5px;\n    align-content: center;\n    background-color: white;\n}\n\n/* To-Do Adder */\n.to-do-adder {\n    height: 45px;\n    width: 100%;\n    padding: 10px;\n    border: 3px solid white;\n    border-radius: 6px;\n    font-size: 20px;\n    font-weight: 700;\n    color: white;\n    text-align: justify;\n    background-color: transparent;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: start;\n    gap: 10px;\n}\n\n/* To-Do Info Background */\n.to-do-info-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: blur(5px);\n}\n\n/* To-Do Info Container */\n.to-do-info-container {\n    width: 300px;\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    max-width: 80%;\n    max-height: 80%;\n    overflow: auto;\n    display: grid;\n    grid-template-rows: 30px;\n    gap: 5px;\n}\n\n.close .icon {\n    height: 20px;\n    width: 20px;\n}\n\n.close .icon:hover {\n    fill: red;\n}\n\n.info-field {\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 100px 100px;\n}\n\n.to-do-info-label {\n    font-weight: 600;\n}\n\n/* Form Container */\n.form-container {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(101, 101, 101, 0.22);\n    backdrop-filter: blur(1px);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Form Styles */\nform {\n    background-color: white;\n    border-radius: 10px;\n    padding: 25px;\n    display: grid;\n    gap: 10px;\n}\n\ninput,\nselect,\ntextarea {\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2px solid rgb(215, 211, 211);\n    padding: 5px 7px;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\ninput[type=submit],\ninput[type=button] {\n    width: 100%;\n    height: 25px;\n    border-radius: 5px;\n    border: 0px;\n    background-color: rgb(82, 77, 77);\n    color: white;\n}\n\ninput[type=submit]:hover,\ninput[type=button]:hover {\n    border-color: black;\n    background-color: black;\n}\n\n.delete,\n.edit {\n    border: none;\n    background-color: transparent;\n}\n\n/* Icon Visibility */\n.project-card .icon,\n.to-do-container .icon {\n    display: none;\n    height: 16px;\n    width: 16px;\n}\n\n.project-card:hover .icon,\n.to-do-container:hover .icon {\n    display: block;\n}\n\n.delete:hover .icon {\n    display: block;\n    fill: red;\n}\n\n.edit:hover .icon {\n    display: block;\n    fill: green;\n}\n\n/* Completed To-Do Style */\n.to-do-container.completed {\n    background-color: rgb(173, 238, 173);\n}\n\n\n@media (max-width: 850px) {\n\n    #home-project,\n    #completed-project,\n    #today-project,\n    #this-week-project,\n    #created-projects-dropdown {\n        white-space: nowrap;\n    }\n\n    /* Adjust the dashboard and to-do window to stack on top of each other */\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr;\n    }\n\n    .default-projects-container {\n        padding: 10px 0;\n        grid-auto-flow: column;\n\n        gap: 10px;\n        width: 100%;\n        overflow: auto;\n    }\n}\n"],"sourceRoot":""}]);
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
    toDoDueDate.className = "to-do-due-date";
    toDoDueDate.textContent = `Due: ${(0,_formatDate_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(ToDo.dueDate)}`;
    toDoCard.appendChild(toDoDueDate);


    addViewButton(toDoCard);
    addDeleteButton(toDoCard);
    addEditButton(toDoCard);

    return toDoCard;
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
    descriptionTextarea.required = true;
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

    return sorter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyx3REFBYTtBQUN2Qyx1QkFBdUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRWhEO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTs7QUFFQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sU0FBUyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsMENBQUk7QUFDakMsUUFBUSx3RkFBMkI7O0FBRW5DO0FBQ0EsUUFBUSxzRUFBZ0IsQ0FBQyx1RkFBMkI7O0FBRXBEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdzRDtBQUNpQjs7QUFFaEU7O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBZ0IsQ0FBQyxvRkFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUNvQjtBQUNlO0FBQ1A7QUFDekQ7O0FBRXJCO0FBQ0E7QUFDQSxJQUFJLDJEQUFPO0FBQ1gsSUFBSSxrR0FBMkIsQ0FBQywyREFBTzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwyREFBTztBQUNYLDRCQUE0QixtRkFBaUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyRkFBcUI7QUFDN0IsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2NvbXBhcmUtd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2dlbmVyYXRlLXVuaXF1ZS1pZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3dlZWstaWRlbnRpZmllci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvY3JlYXRlVG9Eb0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFByb2plY3RBZGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBQcm9qZWN0RWRpdG9yRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFRvRG9BZGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBUb0RvRWRpdG9yRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFRvRG9JbmZvQ2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9yZW5kZXJUb0RvV2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvc29ydFRvRG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZmxhdHRlZC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGlzRGF0ZU9iaiA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqJyk7XG5jb25zdCB3ZWVrSWRlbnRpZmllciA9IHJlcXVpcmUoJ3dlZWstaWRlbnRpZmllcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChhLCBiKSA9PiB7XG5cdGlmICh0eXBlb2YgYSAhPT0gJ251bWJlcicgJiYgIWlzRGF0ZU9iaihhKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgbnVtYmVyIG9yIERhdGUsIGdvdCAke3R5cGVvZiBhfWApO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBiICE9PSAnbnVtYmVyJyAmJiAhaXNEYXRlT2JqKGIpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBudW1iZXIgb3IgRGF0ZSwgZ290ICR7dHlwZW9mIGJ9YCk7XG5cdH1cblxuXHRyZXR1cm4gd2Vla0lkZW50aWZpZXIoaXNEYXRlT2JqKGEpID8gYSA6IG5ldyBEYXRlKGEgKiAxMDAwKSkgPT09IHdlZWtJZGVudGlmaWVyKGlzRGF0ZU9iaihiKSA/IGIgOiBuZXcgRGF0ZShiICogMTAwMCkpO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdsb2JhbCBTdHlsZXMgKi9cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbjpyb290IHtcbiAgICAtLXRleHQ6ICMxMDA5MGM7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmY2ZjO1xuICAgIC0tcHJpbWFyeTogI2I3ZDdjOTtcbiAgICAtLXNlY29uZGFyeTogI2Q4ZTdlOTtcbiAgICAtLWFjY2VudDogIzU3OWQ1YTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4vKiBDb250ZW50IENvbnRhaW5lciAqL1xuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRGFzaGJvYXJkICovXG4uZGFzaGJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0cy10YWIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBEZWZhdWx0IFByb2plY3RzIENvbnRhaW5lciAqL1xuLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogQ3JlYXRlZCBQcm9qZWN0cyBDb250YWluZXIgKi9cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5pbmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogM3B4O1xufVxuXG4vKiBQcm9qZWN0IENhcmQgKi9cbi5wcm9qZWN0LWNhcmQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4IDI1cHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdC1jYXJkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucHJvamVjdC1jYXJkOmhvdmVyLFxuLnByb2plY3QtYWRkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgPiAqIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFByb2plY3QgYW5kIERyb3Bkb3duIEljb25zICovXG4jaG9tZS1wcm9qZWN0LFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxuI3RvZGF5LXByb2plY3QsXG4jdGhpcy13ZWVrLXByb2plY3QsXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxuI2NvbXBsZXRlZC1wcm9qZWN0IC5pY29uLFxuI3RvZGF5LXByb2plY3QgLmljb24sXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbi5kcm9wZG93biB7XG4gICAgZmlsbDogYmxhY2s7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIHdpZHRoOiAxN3B4O1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93bjpob3ZlciAuaWNvbi5kcm9wZG93biB7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi8qIFByb2plY3QgQWRkZXIgKi9cbi5wcm9qZWN0LWFkZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3QtYWRkZXIgLmljb24sXG4udG8tZG8tYWRkZXIgLmljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLyogVG8tRG8gV2luZG93ICovXG4udG8tZG8td2luZG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODEsIDE4MSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnBhcmVudC1wcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBUby1EbyBUYWIgKi9cbi50by1kby10YWIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBUby1EbyBDb250YWluZXIgKi9cbi50by1kby1jb250YWluZXIge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMTUwcHggMjVweCAyNXB4IDI1cHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUby1EbyBBZGRlciAqL1xuLnRvLWRvLWFkZGVyIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBUby1EbyBJbmZvIEJhY2tncm91bmQgKi9cbi50by1kby1pbmZvLWJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cblxuLyogVG8tRG8gSW5mbyBDb250YWluZXIgKi9cbi50by1kby1pbmZvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogODAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xuICAgIGdhcDogNXB4O1xufVxuXG4uY2xvc2UgLmljb24ge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmNsb3NlIC5pY29uOmhvdmVyIHtcbiAgICBmaWxsOiByZWQ7XG59XG5cbi5pbmZvLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xufVxuXG4udG8tZG8taW5mby1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogRm9ybSBDb250YWluZXIgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMTAxLCAxMDEsIDAuMjIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogRm9ybSBTdHlsZXMgKi9cbmZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDIxMSwgMjExKTtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xufVxuXG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA3NywgNzcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGVsZXRlLFxuLmVkaXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogSWNvbiBWaXNpYmlsaXR5ICovXG4ucHJvamVjdC1jYXJkIC5pY29uLFxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIgLmljb24sXG4udG8tZG8tY29udGFpbmVyOmhvdmVyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRlbGV0ZTpob3ZlciAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmlsbDogcmVkO1xufVxuXG4uZWRpdDpob3ZlciAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmlsbDogZ3JlZW47XG59XG5cbi8qIENvbXBsZXRlZCBUby1EbyBTdHlsZSAqL1xuLnRvLWRvLWNvbnRhaW5lci5jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIzOCwgMTczKTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcblxuICAgICNob21lLXByb2plY3QsXG4gICAgI2NvbXBsZXRlZC1wcm9qZWN0LFxuICAgICN0b2RheS1wcm9qZWN0LFxuICAgICN0aGlzLXdlZWstcHJvamVjdCxcbiAgICAjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLyogQWRqdXN0IHRoZSBkYXNoYm9hcmQgYW5kIHRvLWRvIHdpbmRvdyB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciAqL1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgfVxuXG4gICAgLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUlBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGFB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InNvdXJjZXNDb250ZW50XCI6W1wiLyogR2xvYmFsIFN0eWxlcyAqL1xcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tdGV4dDogIzEwMDkwYztcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmRmY2ZjO1xcbiAgICAtLXByaW1hcnk6ICNiN2Q3Yzk7XFxuICAgIC0tc2Vjb25kYXJ5OiAjZDhlN2U5O1xcbiAgICAtLWFjY2VudDogIzU3OWQ1YTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLyogQ29udGVudCBDb250YWluZXIgKi9cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIERhc2hib2FyZCAqL1xcbi5kYXNoYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RzLXRhYiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogRGVmYXVsdCBQcm9qZWN0cyBDb250YWluZXIgKi9cXG4uZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIENyZWF0ZWQgUHJvamVjdHMgQ29udGFpbmVyICovXFxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLyogUHJvamVjdCBDYXJkICovXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4IDI1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkOmhvdmVyLFxcbi5wcm9qZWN0LWFkZGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSA+ICoge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBQcm9qZWN0IGFuZCBEcm9wZG93biBJY29ucyAqL1xcbiNob21lLXByb2plY3QsXFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxcbiN0b2RheS1wcm9qZWN0LFxcbiN0aGlzLXdlZWstcHJvamVjdCxcXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxcbiNjb21wbGV0ZWQtcHJvamVjdCAuaWNvbixcXG4jdG9kYXktcHJvamVjdCAuaWNvbixcXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcXG4gICAgZmlsbDogYmxhY2s7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duOmhvdmVyIC5pY29uLmRyb3Bkb3duIHtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi8qIFByb2plY3QgQWRkZXIgKi9cXG4ucHJvamVjdC1hZGRlciB7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtYWRkZXIgLmljb24sXFxuLnRvLWRvLWFkZGVyIC5pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi8qIFRvLURvIFdpbmRvdyAqL1xcbi50by1kby13aW5kb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODEsIDE4MSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wYXJlbnQtcHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4vKiBUby1EbyBUYWIgKi9cXG4udG8tZG8tdGFiIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBUby1EbyBDb250YWluZXIgKi9cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMTUwcHggMjVweCAyNXB4IDI1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBUby1EbyBBZGRlciAqL1xcbi50by1kby1hZGRlciB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBUby1EbyBJbmZvIEJhY2tncm91bmQgKi9cXG4udG8tZG8taW5mby1iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4vKiBUby1EbyBJbmZvIENvbnRhaW5lciAqL1xcbi50by1kby1pbmZvLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jbG9zZSAuaWNvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5jbG9zZSAuaWNvbjpob3ZlciB7XFxuICAgIGZpbGw6IHJlZDtcXG59XFxuXFxuLmluZm8tZmllbGQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XFxufVxcblxcbi50by1kby1pbmZvLWxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogRm9ybSBDb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEwMSwgMTAxLCAwLjIyKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBGb3JtIFN0eWxlcyAqL1xcbmZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxNSwgMjExLCAyMTEpO1xcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgNzcsIDc3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5kZWxldGUsXFxuLmVkaXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBJY29uIFZpc2liaWxpdHkgKi9cXG4ucHJvamVjdC1jYXJkIC5pY29uLFxcbi50by1kby1jb250YWluZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkOmhvdmVyIC5pY29uLFxcbi50by1kby1jb250YWluZXI6aG92ZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZTpob3ZlciAuaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmaWxsOiByZWQ7XFxufVxcblxcbi5lZGl0OmhvdmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbGw6IGdyZWVuO1xcbn1cXG5cXG4vKiBDb21wbGV0ZWQgVG8tRG8gU3R5bGUgKi9cXG4udG8tZG8tY29udGFpbmVyLmNvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIzOCwgMTczKTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuXFxuICAgICNob21lLXByb2plY3QsXFxuICAgICNjb21wbGV0ZWQtcHJvamVjdCxcXG4gICAgI3RvZGF5LXByb2plY3QsXFxuICAgICN0aGlzLXdlZWstcHJvamVjdCxcXG4gICAgI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgfVxcblxcbiAgICAvKiBBZGp1c3QgdGhlIGRhc2hib2FyZCBhbmQgdG8tZG8gd2luZG93IHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyICovXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgfVxcblxcbiAgICAuZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobGltaXQpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpbWl0KS50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJTeW1ib2xzKGV4Y2x1ZGVTeW1ib2xzLCBncm91cCkge1xuICBsZXQgbmV3R3JvdXAgPSBncm91cDtcbiAgZXhjbHVkZVN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XG4gICAgbmV3R3JvdXAgPSBuZXdHcm91cC5yZXBsYWNlKHN5bWJvbCwgJycpO1xuICB9KTtcblxuICByZXR1cm4gbmV3R3JvdXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlkKGF2YWlsYWJsZUNoYXJzLCBpZExlbmd0aCkge1xuICBsZXQgaWQgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlkTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZCArPSBhdmFpbGFibGVDaGFyc1tnZXRSYW5kb21OdW1iZXIoYXZhaWxhYmxlQ2hhcnMubGVuZ3RoKV07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoe1xuICBsZW5ndGggPSAyMCxcbiAgdXNlTGV0dGVycyA9IHRydWUsXG4gIHVzZU51bWJlcnMgPSB0cnVlLFxuICBpbmNsdWRlU3ltYm9scyA9IFtdLFxuICBleGNsdWRlU3ltYm9scyA9IFtdLFxufSA9IHt9KSB7XG4gIGxldCBsZXR0ZXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcbiAgbGV0IG51bWJlcnMgPSAnMDEyMzQ1Njc4OSc7XG4gIGxldCBhdmFpbGFibGVDaGFycyA9IFtdO1xuICBsZXQgbGV0dGVyc0FyciA9IFtdO1xuICBsZXQgbnVtYmVyc0FyciA9IFtdO1xuXG4gIGlmICh1c2VMZXR0ZXJzKSB7XG4gICAgaWYgKGV4Y2x1ZGVTeW1ib2xzLmxlbmd0aCkgbGV0dGVycyA9IGZpbHRlclN5bWJvbHMoZXhjbHVkZVN5bWJvbHMsIGxldHRlcnMpO1xuICAgIGxldHRlcnNBcnIgPSBsZXR0ZXJzLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGlmICh1c2VOdW1iZXJzKSB7XG4gICAgaWYgKGV4Y2x1ZGVTeW1ib2xzLmxlbmd0aCkgbnVtYmVycyA9IGZpbHRlclN5bWJvbHMoZXhjbHVkZVN5bWJvbHMsIG51bWJlcnMpO1xuICAgIG51bWJlcnNBcnIgPSBudW1iZXJzLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGF2YWlsYWJsZUNoYXJzID0gWy4uLmxldHRlcnNBcnIsIC4uLm51bWJlcnNBcnIsIC4uLmluY2x1ZGVTeW1ib2xzXTtcblxuICByZXR1cm4gY3JlYXRlSWQoYXZhaWxhYmxlQ2hhcnMsIGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVVbmlxdWVJZDtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogd2Vlay1pZGVudGlmaWVyIDxodHRwczovL2dpdGh1Yi5jb20vdGhyb2xsL3dlZWstaWRlbnRpZmllcj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgQ2zDqW1lbnQgQmlsbGlvdCwgY29udHJpYnV0b3JzLlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWVrSWRlbnRpZmllcjtcbm1vZHVsZS5leHBvcnRzLndlZWtJZGVudGlmaWVyID0gd2Vla0lkZW50aWZpZXI7XG5tb2R1bGUuZXhwb3J0cy5kYXRlRnJvbVdlZWsgPSBkYXRlRnJvbVdlZWs7XG5cbi8qKlxuICogR2V0IHVuaXF1ZSBhbmQgc2VxdWVudGlhbCB3ZWVrIGlkZW50aWZpZXIgb2YgY3VycmVudCBkYXRlIG9yIGdpdmVuIHZhbGlkIGBEYXRlYCBzdHJpbmcgZm9ybWF0XG4gKlxuICogKipFeGFtcGxlOioqXG4gKlxuICogYGBganNcbiAqIHZhciB3ZWVrSWRlbnRpZmllciA9IHJlcXVpcmUoJ2N1cnJlbnQtd2Vlay1udW1iZXInKTtcbiAqXG4gKiAvLyBhdWd1c3QgMTIsIDIwMTYgKGN1cnJlbnQgZGF0ZSlcbiAqIHdlZWtJZGVudGlmaWVyKCk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignSmFudWFyeSAwNSwgMTk3MCAwMzowMDowMCcpO1xuICogLy89PiAxXG4gKlxuICogd2Vla0lkZW50aWZpZXIobmV3IERhdGUoJ0F1Z3VzdCAxMiwgMjAxNicpKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKCcwOC8xMi8yMDE2Jyk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignQXVndXN0IDEyLCAyMDE2Jyk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcihuZXcgRGF0ZSgnQXVndXN0IDE5LCAyMDE2JykpO1xuICogLy89PiAyNDMzXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJzA4LzE5LzIwMTYnKTtcbiAqIC8vPT4gIDI0MzNcbiAqIGBgYFxuICpcbiAqIEBuYW1lIHdlZWtJZGVudGlmaWVyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBbZGF0ZV1gIGV2ZXJ5IHZhbGlkIERhdGUtaXNoIHN0cmluZyBmb3JtYXRcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHdlZWtJZGVudGlmaWVyKGRhdGUpIHtcbiAgdmFyIGluc3RhbmNlO1xuXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgJiYgZGF0ZS5sZW5ndGgpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBEYXRlKGRhdGUpO1xuICB9IGVsc2UgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgaW5zdGFuY2UgPSBkYXRlO1xuICB9IGVsc2Uge1xuICAgIGluc3RhbmNlID0gbmV3IERhdGUoKTtcbiAgfVxuICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoaXMgZGF0ZSBvYmplY3RcbiAgdmFyIHRhcmdldCA9IG5ldyBEYXRlKGluc3RhbmNlLnZhbHVlT2YoKSk7XG4gIC8vIFN0YXJ0aW5nIGRhdGUgcG9pbnQgZm9yIG91ciBzZXF1ZW5jZVxuICB2YXIgbGFzdERheU9mV2Vla1plcm9UaW1lc3RhbXAgPSBuZXcgRGF0ZSgnSmFudWFyeSA1LCAxOTcwIDAwOjAwOjAwJykuZ2V0VGltZSgpIC0gMTtcbiAgLy8gTnVtYmVyIG9mIHdlZWsgZnJvbSBvdXIgc3RhcnRpbmcgZGF0ZVxuICB2YXIgd2Vla051bWJlcmRpZmYgPSBNYXRoLmNlaWwoKHRhcmdldC5nZXRUaW1lKCkgLSBsYXN0RGF5T2ZXZWVrWmVyb1RpbWVzdGFtcCkgLyAoMjQgKiAzNjAwICogMTAwMCAqIDcpKTtcblxuICByZXR1cm4gd2Vla051bWJlcmRpZmY7XG59XG5cbi8qKlxuICogR2V0IG1vbmRheSBkYXRlIG9mIHRoZSBnaXZlbiB3ZWVrIGlkZW50aWZpZXJcbiAqXG4gKiAgKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqc1xuICogdmFyIHdlZWtJZGVudGlmaWVyID0gcmVxdWlyZSgnY3VycmVudC13ZWVrLW51bWJlcicpO1xuICpcbiAqIHdlZWtJZGVudGlmaWVyLmRhdGVGcm9tV2VlaygyNDAzKTtcbiAqIC8vPT4gSmFudWFyeSAxOCwgMjAxNiAwMDowMDowMFxuICpcbiAqIGBgYFxuICogQG5hbWUgd2Vla0lkZW50aWZpZXIuZGF0ZUZyb21XZWVrXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHdlZWtJZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtEYXRlfSBNb25kYXkgb2YgdGhlIGdpdmVuIHdlZWsgaWRlbnRpZmllciBvciBKYW51YXJ5IDUsIDE5NzAgMDA6MDA6MDAgaWYgd2Vla0lkZW50aWZpZXIgaXMgbm90ID4gMC5cbiAqL1xuZnVuY3Rpb24gZGF0ZUZyb21XZWVrKHdlZWtJZGVudGlmaWVyKSB7XG4gIGlmIChpc05hTihwYXJzZUZsb2F0KHdlZWtJZGVudGlmaWVyKSkpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0YXJ0aW5nIGRhdGUgcG9pbnQgZm9yIG91ciBzZXF1ZW5jZVxuICAgIHZhciBmaXJzdERheU9mV2Vla09uZSwgbW9uZGF5T2ZXZWVrO1xuICAgIG1vbmRheU9mV2VlayA9IGZpcnN0RGF5T2ZXZWVrT25lID0gbmV3IERhdGUoJ0phbnVhcnkgNSwgMTk3MCAwMDowMDowMCcpO1xuICAgIGlmICh3ZWVrSWRlbnRpZmllciA+IDApIHtcbiAgICAgIG1vbmRheU9mV2VlayA9IG5ldyBEYXRlKCgod2Vla0lkZW50aWZpZXIgLSAxKSAqICgyNCAqIDM2MDAgKiAxMDAwICogNykpICsgZmlyc3REYXlPZldlZWtPbmUuZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbmRheU9mV2VlaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2UsIHN0cmluZ2lmeSB9IGZyb20gJ2ZsYXR0ZWQnO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG8uanNcIjtcbmNvbnN0IGdlbmVyYXRlVW5pcXVlSWQgPSByZXF1aXJlKFwiZ2VuZXJhdGUtdW5pcXVlLWlkXCIpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwcm9qZWN0IGl0ZW0uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIHByb2plY3QuIFxuICogQHBhcmFtIHtBcnJheX0gdG9Eb0l0ZW1zIC0gQXJyYXkgY29udGFpbmluZyBUb0RvIG9iamVjdHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBJRCBmb3IgdGhlIHByb2VqY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcblxuICAgIC8vIFN0b3JhZ2Ugb2YgYWxsIFwiUHJvamVjdFwiIGluc3RhbmNlcy5cbiAgICBzdGF0aWMgcHJvamVjdHMgPSBbXTtcblxuICAgIC8vIEhvbWUgcHJvamVjdC5cbiAgICBzdGF0aWMgaG9tZTtcblxuICAgIC8vIExvYWQgc2F2ZWQgXCJQcm9qZWN0LnByb2plY3RzXCIgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgICAgICAvLyBMb2FkIHNlcmlhbGl6ZWQgc2F2ZWQgcHJvamVjdHMuXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTYXZlZFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QucHJvamVjdHNcIik7XG4gICAgICAgIGlmIChzZXJpYWxpemVkU2F2ZWRQcm9qZWN0KSB7XG5cbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBzZXJpYWxpemVkIHNhdmUgcHJvamVjdHMuXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0ID0gcGFyc2Uoc2VyaWFsaXplZFNhdmVkUHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBibGFuayBcIlByb2plY3RcIiBvYmplY3RzIHRvIGJlIHBvcHVsYXRlZC5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ldyBQcm9qZWN0KG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgYmxhbmsgcHJvamVjdHMgd2l0aCBcInByb2plY3QgdGlsZVwiLCBcInRvLWRvIGl0ZW1zXCIsIGFuZCBcInByb2plY3QgaWRcIiBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJvamVjdHMnIHJlc3BlY3RpdmUgdGl0bGVzLlxuICAgICAgICAgICAgICAgIFByb2plY3QucHJvamVjdHNbaV0udGl0bGUgPSBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0W2ldLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwcm9qZWN0cycgcmVzcGVjdGl2ZSB0by1kbyBpdGVtcy5cbiAgICAgICAgICAgICAgICBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0W2ldLnRvRG9JdGVtcy5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdC5wcm9qZWN0c1tpXS5hZGRUb0RvKG5ldyBUb0RvKC4uLk9iamVjdC52YWx1ZXModG9Eb0l0ZW0pKSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJvamVjdHMncyByZXNwZWN0aXZlIElELlxuICAgICAgICAgICAgICAgIFByb2plY3QucHJvamVjdHNbaV0uaWQgPSBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0W2ldLmlkO1xuXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcHJvamVjdHMgdG8gYmUgbG9hZCwgY3JlYXRlIGRlZmF1bHQgXCJIb21lXCIgcHJvamVjdCBhbmQgXCJDb21wbGV0ZWRcIiBwcm9qZWN0LlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiSG9tZVwiLCBudWxsLCBcImhvbWUtcHJvamVjdFwiKTtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiQ29tcGxldGVkXCIsIG51bGwsIFwiY29tcGxldGVkLXByb2plY3RcIik7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIlRvZGF5XCIsIG51bGwsIFwidG9kYXktcHJvamVjdFwiKTtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiVGhpcyBXZWVrXCIsIG51bGwsIFwidGhpcy13ZWVrLXByb2plY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdXQgaG9tZSBwcm9qZWN0IHRvIHN0YXRpYyB2YXJpYWJsZS5cbiAgICAgICAgUHJvamVjdC5ob21lID0gUHJvamVjdC5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gXCJob21lLXByb2plY3RcIik7XG4gICAgfVxuXG4gICAgLy8gUHJvamVjdCBDb25zdHJ1Y3Rvci5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSA9IG51bGwsIHRvRG9JdGVtcyA9IG51bGwsIGlkID0gbnVsbCkge1xuXG4gICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCB0aXRsZS5cbiAgICAgICAgdGhpcy50aXRsZSA9ICh0aXRsZSAhPT0gbnVsbCkgPyB0aXRsZSA6IG51bGw7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgICAgICBpZiAodG9Eb0l0ZW1zICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IHRvRG9JdGVtcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIFwidG9Eb0l0ZW1zXCIgdG8gYmxhbmsgYXJyYXkgaWYgbm9uZSBpcyBwcm92aWRlZCBkdXJpbmcgaW5zdGFudGlhdGlvbi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHByb2plY3QncyBJRCB0byBnaXZlbiBwcm9qZWN0IElEIGR1cmluZyBwcm9qZWN0IGluc3RhbnRpYXRpb24uXG4gICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBhIGdlbmVyYXRlZCAxNS1jaGFyYWN0ZXIgSUQgdG8gcHJvamVjdCBpZiBub3RoaW5nIHdhcyBwcm92aWRlZCBkdXJpbmcgUHJvamVjdCdzIGluc3RhbnRpYXRpb24uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGdlbmVyYXRlVW5pcXVlSWQoeyBsZW5ndGg6IDE1LCB1c2VOdW1iZXJzOiB0cnVlLCB1c2VMZXR0ZXJzOiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBQcm9qZWN0IG9iamVjdCBpbnNpZGUgXCJwcm9qZWN0c1wiIGFycmF5LlxuICAgICAgICBQcm9qZWN0LnByb2plY3RzLnB1c2godGhpcyk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgcHJvamVjdCBmcm9tIHRoZSBcIlByb2plY3QucHJvamVjdHNcIiBhcnJheS5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuc3BsaWNlKFByb2plY3QucHJvamVjdHMuaW5kZXhPZih0aGlzKSwgMSk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBFZGl0IHByb2plY3QgdGl0bGUuXG4gICAgc2V0UHJvamVjdFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIFRvRG8gSXRlbSBpbnNpZGUgdGhlIHByb2plY3QuXG4gICAgYWRkVG9EbyhUb0RvKSB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IHJlZmVyZW5jZSBwcm9wZXJ0eSBvZiB0aGUgVG9EbyBpdGVtIHRvICd0aGlzJyBjdXJyZW50IHByb2plY3QgaW5zdGFuY2UuXG4gICAgICAgIFRvRG8ucHJvamVjdCA9IHRoaXM7XG5cbiAgICAgICAgLy8gQWRkIHRoZSB0byBkbyBpdGVtIHRvICd0aGlzJyBwcm9qZWN0cyBhcnJheSBvZiB0byBkbyBpdGVtcy5cbiAgICAgICAgdGhpcy50b0RvSXRlbXMucHVzaChUb0RvKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBhIFRvRG8gSXRlbSBpbnNpZGUgdGhlIHByb2plY3QncyBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgIGRlbGV0ZVRvRG8oVG9Ebykge1xuICAgICAgICB0aGlzLnRvRG9JdGVtcy5zcGxpY2UodGhpcy50b0RvSXRlbXMuaW5kZXhPZihUb0RvKSwgMSk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIFRvRG8gaXRlbXMgaW5zaWRlIHRoZSBwcm9qZWN0J3MgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICByZXBsYWNlVG9EbyhuZXdUb0RvLCBvbGRUb0RvKSB7XG5cbiAgICAgICAgLy8gU2V0IG5ldyBUb0RvIGl0ZW0ncyBwcm9qZWN0IHJlZmVyZW5jZSB0byB0aGlzIHByb2plY3QuXG4gICAgICAgIG5ld1RvRG8ucHJvamVjdCA9IHRoaXM7XG5cbiAgICAgICAgLy8gUmVwbGFjZSBUb0RvIGl0ZW0gd2l0aCB0aGUgbmV3IFRvRG8gaXRlbS5cbiAgICAgICAgdGhpcy50b0RvSXRlbXNbdGhpcy50b0RvSXRlbXMuaW5kZXhPZihvbGRUb0RvKV0gPSBuZXdUb0RvO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNzYXZlQ2hhbmdlcygpIHtcbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0LnByb2plY3RzXCIsIHN0cmluZ2lmeShQcm9qZWN0LnByb2plY3RzKSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAY2xhc3NcbiAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIHRvLWRvIGl0ZW0gd2l0aCB2YXJpb3VzIGRldGFpbHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb3IgbmFtZSBvZiB0aGUgdG8tZG8gaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIEEgZGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIHRvLWRvIGl0ZW0uXG4gKiBAcGFyYW0ge0RhdGV9IGR1ZURhdGUgLSBUaGUgZHVlIGRhdGUgZm9yIGNvbXBsZXRpbmcgdGhlIHRvLWRvIGl0ZW0uXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJpb3JpdHkgLSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIHRvLWRvIGl0ZW0gKGUuZy4sIFwiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBub3RlcyAtIEFkZGl0aW9uYWwgbm90ZXMgb3IgY29tbWVudHMgcmVsYXRlZCB0byB0aGUgdG8tZG8gaXRlbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRvRG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0ZWQ9bnVsbCwgZGF0ZUFuZFRpbWVDcmVhdGVkPW51bGwsIGRhdGVNb2RpZmllZD1udWxsLCBwcm9qZWN0ID0gbnVsbCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gKGNvbXBsZXRlZCAhPT0gbnVsbCkgPyBjb21wbGV0ZWQgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRlQW5kVGltZUNyZWF0ZWQgPSAoZGF0ZUFuZFRpbWVDcmVhdGVkICE9PSBudWxsKSA/IGRhdGVBbmRUaW1lQ3JlYXRlZCA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgdGhpcy5kYXRlTW9kaWZpZWQgPSAoZGF0ZU1vZGlmaWVkICE9PSBudWxsKSA/IGRhdGVNb2RpZmllZCA6IG51bGw7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IChwcm9qZWN0ICE9PSBudWxsKSA/IHByb2plY3QgOiBudWxsO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0LmRlbGV0ZVRvRG8odGhpcyk7XG4gICAgfVxufSIsImltcG9ydCB7IHBvcFVwUHJvamVjdEVkaXRvckZvcm0gfSBmcm9tIFwiLi9wb3BVcFByb2plY3RFZGl0b3JGb3JtLmpzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuIFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcblxuICAgIC8vIENyZWF0ZSBhIGNhcmQgZm9yIFwiUHJvamVjdFwiLlxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc05hbWUgPSBcInByb2plY3QtY2FyZFwiXG4gICAgcHJvamVjdENhcmQuaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgLy8gQWRkIHJlZmVyZWNlIHRvIHRoZSBwcm9qZWN0IG9iamVjdC5cbiAgICBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlID0gcHJvamVjdDtcblxuICAgIC8vIEFkZCAnaG9tZScgaWNvbiB0byBob21lLXByb2plY3QuXG4gICAgaWYgKHByb2plY3QuaWQgPT09IFwiaG9tZS1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob21lSWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgaG9tZUljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+aG9tZTwvdGl0bGU+PHBhdGggZD1cIk0xMCwyMFYxNEgxNFYyMEgxOVYxMkgyMkwxMiwzTDIsMTJINVYyMEgxMFpcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGhvbWVJY29uKTtcbiAgICB9XG4gICAgLy8gQWRkICdjb21wbGV0ZWQnIGljb24gdG8gY29tcGxldGVkLXByb2plY3QuXG4gICAgZWxzZSBpZiAocHJvamVjdC5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wbGV0ZWRJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICBjb21wbGV0ZWRJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrLWNpcmNsZTwvdGl0bGU+PHBhdGggZD1cIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJTNi41IDIyIDEyIDIyIDIyIDE3LjUgMjIgMTIgMTcuNSAyIDEyIDJNMTAgMTdMNSAxMkw2LjQxIDEwLjU5TDEwIDE0LjE3TDE3LjU5IDYuNThMMTkgOEwxMCAxN1pcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlZEljb24pO1xuICAgIH1cbiAgICAvLyBBZGQgJ3RvZGF5JyBpY29uIHRvIHRvZGF5LXByb2plY3QuXG4gICAgZWxzZSBpZiAocHJvamVjdC5pZCA9PT0gXCJ0b2RheS1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kYXlJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICB0b2RheUljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+d2hpdGUtYmFsYW5jZS1zdW5ueTwvdGl0bGU+PHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0b2RheUljb24pO1xuICAgIH1cbiAgICAvLyBBZGQgJ3RoaXMtd2VlaycgaWNvbiB0byB0aGlzLXdlZWstcHJvamVjdC5cbiAgICBlbHNlIGlmIChwcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgdGhpc1dlZWtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpc1dlZWtJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICB0aGlzV2Vla0ljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItd2VlazwvdGl0bGU+PHBhdGggZD1cIk02IDFIOFYzSDE2VjFIMThWM0gxOUMyMC4xMSAzIDIxIDMuOSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjg5IDMgNSAzSDZWMU01IDhWMTlIMTlWOEg1TTcgMTBIMTdWMTJIN1YxMFpcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRoaXNXZWVrSWNvbik7XG4gICAgfVxuXG4gICAgLy8gUHV0IHByb2plY3QgdGl0bGUgaW5zaWRlIHRoZSBwcm9qZWN0IGNhcmQuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LW5hbWVcIlxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgLy8gT25seSBhZGQgZmVhdHVyZSBidXR0b25zIHRvIFwibm9uLUhvbWVcIiBwcm9qZWN0cy5cbiAgICBpZiAocHJvamVjdC5pZCAhPT0gXCJob21lLXByb2plY3RcIiAmJiBwcm9qZWN0LmlkICE9PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIgJiYgcHJvamVjdC5pZCAhPT0gXCJ0b2RheS1wcm9qZWN0XCIgJiYgcHJvamVjdC5pZCAhPT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiKSB7XG4gICAgICAgIGFkZERlbGV0ZUJ1dHRvbihwcm9qZWN0Q2FyZCk7XG4gICAgICAgIGFkZEVkaXRCdXR0b24ocHJvamVjdENhcmQpO1xuICAgIH1cblxuICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IHRoZSBwcm9qZWN0IGNvcnJlc3BvbmRpbmcgdG8gcHJvamVjdCBjYXJkLlxuICAgICAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XG4gICAgfSlcblxuICAgIHJldHVybiBwcm9qZWN0Q2FyZDtcbn1cblxuXG5mdW5jdGlvbiBhZGREZWxldGVCdXR0b24ocHJvamVjdENhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uLlxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRlbGV0ZSBzdmcgaWNvbi5cbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOEgxMVYxN0g5VjhNMTMsOEgxNVYxN0gxM1Y4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGRlbGV0ZSBmdW5jdGlvbmFsaXR5IHRvIGRlbGV0ZSBidXR0b24uXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBBc2sgdGhlIHVzZXIgZm9yIGRlbGV0ZSBjb25maXJtYXRpb24uXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gZGVsZXRpb24/XCIpKSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoYmFjay1lbmQpXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlLmRlbGV0ZSgpO1xuXG4gICAgICAgICAgICAvLyBDbGVhciBcIlRvLURvXCIgdGFicy5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tdGFiXCIpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIE1ha2UgXCJIb21lXCIgcHJvamVjdCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3Qgd2hlbiBjdXJyZW50IHByb2plY3QgaXMgZGVsZXRlZC5cbiAgICAgICAgICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChQcm9qZWN0LmhvbWUpO1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoZnJvbnQtZW5kKVxuICAgICAgICAgICAgcHJvamVjdENhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRFZGl0QnV0dG9uKHByb2plY3RDYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBidXR0b24uXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImVkaXRcIjtcblxuICAgIC8vIENyZWF0ZSBFZGl0IEljb24uXG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuOSAxNi45NiwzLjI5TDE1LjEyLDUuMTJMMTguODcsOC44N00zLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45M0wxNC4wNiw2LjE4TDMsMTcuMjVaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZWRpdCBmdW5jdGlvbmFsaXR5IHRvIGVkaXQgYnV0dG9uIGJ5IHBvcHBpbmcgdGhlIFwicHJvamVjdCBlZGl0b3IgZm9ybVwiLlxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXBQcm9qZWN0RWRpdG9yRm9ybShwcm9qZWN0Q2FyZCk7XG4gICAgfSk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG59IiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGUuanNcIjtcbmltcG9ydCB7IHBvcFVwVG9Eb0VkaXRvckZvcm0gfSBmcm9tIFwiLi9wb3BVcFRvRG9FZGl0b3JGb3JtLmpzXCI7XG5pbXBvcnQgeyBwb3BVcFRvRG9JbmZvQ2FyZCB9IGZyb20gXCIuL3BvcFVwVG9Eb0luZm9DYXJkLmpzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvQ2FyZChUb0RvKSB7XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gY2FyZCBkaXYuXG4gICAgY29uc3QgdG9Eb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyXCJcblxuICAgIC8vIEFkZCByZWZlcmVuY2UgdG8gdGhlIFRvRG8uXG4gICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSA9IFRvRG87XG5cbiAgICBhZGRDaGVja0JveCh0b0RvQ2FyZCk7XG5cbiAgICAvLyBBcHBseSBcImNvbXBsZXRlZCBlZmZlY3RzXCIgdG8gdG8tZG8gaXRlbXMgdGhhdCBhcmUgY29tcGxldGVkLlxuICAgIGlmICh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICB0b0RvQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWNoZWNrYm94XCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lciBjb21wbGV0ZWRcIjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gdGl0bGUgY29udGFpbmVyLlxuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb1RpdGxlLmNsYXNzTmFtZSA9IFwidG8tZG8tdGl0bGVcIlxuICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IFRvRG8udGl0bGU7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcblxuICAgIC8vIENyZWF0ZSB0by1kbyBkdWUgZGF0ZSBjb250YWluZXIuXG4gICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9EdWVEYXRlLmNsYXNzTmFtZSA9IFwidG8tZG8tZHVlLWRhdGVcIjtcbiAgICB0b0RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7Zm9ybWF0RGF0ZShUb0RvLmR1ZURhdGUpfWA7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG5cbiAgICBhZGRWaWV3QnV0dG9uKHRvRG9DYXJkKTtcbiAgICBhZGREZWxldGVCdXR0b24odG9Eb0NhcmQpO1xuICAgIGFkZEVkaXRCdXR0b24odG9Eb0NhcmQpO1xuXG4gICAgcmV0dXJuIHRvRG9DYXJkO1xufVxuXG5cbmZ1bmN0aW9uIGFkZERlbGV0ZUJ1dHRvbih0b0RvQ2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b24uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGVcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVsZXRlIHN2ZyBpY29uLlxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGVsZXRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU05LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4SDExVjE3SDlWOE0xMyw4SDE1VjE3SDEzVjhaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZGVsZXRlIGZ1bmN0aW9uYWxpdHkgdG8gZGVsZXRlIGJ1dHRvbi5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICAvLyBBc2sgdGhlIHVzZXIgZm9yIGRlbGV0ZSBjb25maXJtYXRpb24uXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gZGVsZXRpb24/XCIpKXtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChiYWNrLWVuZClcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGVsZXRlKCk7XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChmcm9udC1lbmQpXG4gICAgICAgICAgICB0b0RvQ2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvRG9DYXJkKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZEVkaXRCdXR0b24odG9Eb0NhcmQpIHtcbiAgICAvLyBDcmVhdGUgRWRpdCBidXR0b24uXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImVkaXRcIjtcblxuICAgIC8vIENyZWF0ZSBFZGl0IEljb24uXG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuOSAxNi45NiwzLjI5TDE1LjEyLDUuMTJMMTguODcsOC44N00zLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45M0wxNC4wNiw2LjE4TDMsMTcuMjVaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZWRpdCBmdW5jdGlvbmFsaXR5IHRvIGVkaXQgYnV0dG9uIGJ5IHBvcHBpbmcgdGhlIFwidG8tZG8gZWRpdG9yIGZvcm1cIi5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwVG9Eb0VkaXRvckZvcm0odG9Eb0NhcmQpO1xuICAgIH0pO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRWaWV3QnV0dG9uKHRvRG9DYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgVmlldyBidXR0b24uXG4gICAgY29uc3Qgdmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmlld0J1dHRvbi5jbGFzc05hbWUgPSBcImVkaXRcIjtcblxuICAgIC8vIENyZWF0ZSBFZGl0IEljb24uXG4gICAgdmlld0J1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VmlldyBUb0RvIEluZm9ybWF0aW9uPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMsOUgxMVY3SDEzTTEzLDE3SDExVjExSDEzTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBcInZpZXcgdG8tZG9cIiBmdW5jdGlvbmFsaXR5IHRvIHZpZXcgYnV0dG9uIGJ5IHBvcHBpbmcgYSBcImRpdlwiIGNvbnRhaW5pbmcgdGhlIHRvLWRvIGl0ZW0ncyBpbmZvLlxuICAgIHZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXBUb0RvSW5mb0NhcmQodG9Eb0NhcmQpO1xuICAgIH0pO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHZpZXdCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRDaGVja0JveCh0b0RvQ2FyZCkge1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tCb3guY2xhc3NOYW1lID0gXCJ0by1kby1jaGVja2JveFwiXG5cbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgaXNUb0RvQ29tcGxldGVkID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWRcbiAgICAgICAgaWYgKGlzVG9Eb0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyXCJcblxuICAgICAgICAgICAgLy8gSWYgYSAnY29tcGxldGVkJyB0by1kbyBpcyBzZXQgdG8gJ3VuZmluaXNoZWQnIHRvIGRvLCByZW1vdmUgaXQgZnJvbSB0aGUgXCJDb21wbGV0ZWRcIiBwcm9qZWN0J3MgdG8tZG8gd2luZG93LlxuICAgICAgICAgICAgaWYgKGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpLmlkID09PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB0b0RvQ2FyZC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRvRG9DYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyIGNvbXBsZXRlZFwiXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFVwZGF0ZSBjaGFuZ2VzIGluc2lkZSBwYXJlbnQgcHJvamVjdC5cbiAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcm9qZWN0LnJlcGxhY2VUb0RvKHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UpO1xuICAgIH0pO1xuXG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoaW5wdXREYXRlKSB7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgICBcIkphbi5cIiwgXCJGZWIuXCIsIFwiTWFyLlwiLCBcIkFwci5cIiwgXCJNYXlcIiwgXCJKdW4uXCIsXG4gICAgICAgIFwiSnVsLlwiLCBcIkF1Zy5cIiwgXCJTZXAuXCIsIFwiT2N0LlwiLCBcIk5vdi5cIiwgXCJEZWMuXCJcbiAgICBdO1xuXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gaW5wdXREYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7bW9udGhzW051bWJlcihtb250aCkgLSAxXX0gJHtwYXJzZUludChkYXksIDEwKX0sICR7eWVhcn1gO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdENhcmQuanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwUHJvamVjdEFkZGVyRm9ybSgpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9IFwicHJvamVjdC1hZGRlci1mb3JtXCI7XG4gICAgZm9ybS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJIZWxsb1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQgUHJvamVjdFwiPmA7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgIFxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gZm9ybSB0aGF0IGNyZWF0ZXMgdGhlIFByb2plY3Qgb25jZSBzdWJtaXR0ZWQuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcblxuICAgICAgICAvLyBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbi5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBHZXQgcHJvamVjdCdzIHRpdGxlLlxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBQcm9qZWN0LlxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBwcm9qZWN0IGNhcmQgcmVwcmVzZW50YXRpb24uXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdClcblxuICAgICAgICAvLyBSZW5kZXIgbmV3IHByb2plY3QgdG8gRE9NIGJ5IGFwcGVuZGluZyBcbiAgICAgICAgY29uc3QgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShwcm9qZWN0Q2FyZCwgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJvamVjdC1hZGRlclwiKSk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgbmV3bHkgY3JlYXRlZCBwcm9qZWN0IGFzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdC5cbiAgICAgICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmb3JtIHdoZW4gZG9uZS5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gcG9wVXBQcm9qZWN0RWRpdG9yRm9ybShwcm9qZWN0Q2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gQ3JlYXRlIHByb2plY3QgZWRpdG9yIGZvcm0uXG4gICAgY29uc3QgcHJvamVjdEVkaXRvckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5jbGFzc05hbWUgPSBcInByb2plY3QtZWRpdG9yLWZvcm1cIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0b3JGb3JtKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgIG5ldy1wcm9qZWN0LXRpdGxlIGlucHV0IGZpZWxkLlxuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlID0gcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZS50aXRsZTtcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGVJbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvbi5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiRG9uZVwiO1xuICAgIHByb2plY3RFZGl0b3JGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvbi5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KVxuICAgIHByb2plY3RFZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0byBwcm9qZWN0IGVkaXRvciBmb3JtIHRoYXQgbW9kaWZpZXMgdGhlIHByb2plY3QgdGl0bGUgd2hlbiBzdWJtaXR0ZWQuXG4gICAgcHJvamVjdEVkaXRvckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBBc2sgZm9yIHVzZXIgY29uZmlybWF0aW9uIGJlZm9yZSBlZGl0aW5nLlxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJDb25maXJtIGNoYW5nZXM/XCIpKXtcbiAgICAgICAgICAgIC8vIE1vZGlmeSBwcm9qZWN0IHRpdGxlIGluIGJhY2stZW5kLlxuICAgICAgICAgICAgcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZS5zZXRQcm9qZWN0VGl0bGUobmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBNb2RpZnkgcHJvamVjdCB0aXRsZSBpbiBmcm9udC1lbmQuXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJlbnQtcHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZm9ybSBmcm9tIHRoZSBET00gd2hlbiBzdWJtaXR0ZWQuXG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59IiwiaW1wb3J0IHsgcmVuZGVyVG9Eb1dpbmRvdyB9IGZyb20gXCIuL3JlbmRlclRvRG9XaW5kb3cuanNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvLmpzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwVG9Eb0FkZGVyRm9ybSgpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHRvRG9BZGRlckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0b0RvQWRkZXJGb3JtLmNsYXNzTmFtZSA9IFwidG8tZG8tYWRkZXItZm9ybVwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0FkZGVyRm9ybSk7XG5cbiAgICAvLyBDcmVhdGUgdGl0bGUgaW5wdXQuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiVGl0bGU6XCIsIHRpdGxlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBkZXNjcmlwdGlvbiBhcmVhLlxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSA1MDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkRlc2NyaXB0aW9uOlwiLCBkZXNjcmlwdGlvblRleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgZHVlIGRhdGUgaW5wdXQuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWUtZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiRHVlIERhdGU6XCIsIGR1ZURhdGVJbnB1dCkpO1xuXG4gICAgLy8gQ3JlYXRlIFRvRG8gcHJpb3JpdHkgc2VsZWN0aW9uLlxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb25WYWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiUHJpb3JpdHk6XCIsIHByaW9yaXR5U2VsZWN0KSk7XG5cbiAgICAvLyBDcmVhdGUgTm90ZSBpbnB1dC5cbiAgICBjb25zdCBub3Rlc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5vdGVzVGV4dGFyZWEuaWQgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNUZXh0YXJlYS5uYW1lID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgbm90ZXNUZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIk5vdGVzOlwiLCBub3Rlc1RleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvbi5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwic3VibWl0LWZvcm1cIjtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkNyZWF0ZSBUb0RvXCI7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIGZvcm0gdGhhdCB3aGVuIHN1Ym1pdHRlZCwgYSBUb0RvIG9iamVjdCBpcyBjcmVhdGVkLlxuICAgIHRvRG9BZGRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3Rlc1wiKS52YWx1ZTtcblxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IG5ldyBUb0RvKC4uLlt0b0RvVGl0bGUsIHRvRG9EZXNjcmlwdGlvbiwgdG9Eb0R1ZURhdGUsIHRvRG9Qcmlvcml0eSwgdG9Eb05vdGVzXSlcbiAgICAgICAgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkuYWRkVG9Ebyh0b0RvSXRlbSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIFRvLURvIGl0ZW0gaW4gJ3RvLWRvJyB0YWIgaW1tZWRpYXRlbHkgb25jZSBjcmVhdGVkLlxuICAgICAgICByZW5kZXJUb0RvV2luZG93KGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpKTtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufVxuXG5cbi8vIFJldHVybnMgYSBkaXYgY29udGFpbmluZyBhIGxhYmVsZWQgaW5wdXQuXG5mdW5jdGlvbiBjcmVhdGVGaWVsZERpdihsYWJlbFRleHQsIGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBkaXY7XG59IiwiaW1wb3J0IHsgcmVuZGVyVG9Eb1dpbmRvdyB9IGZyb20gXCIuL3JlbmRlclRvRG9XaW5kb3dcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwVG9Eb0VkaXRvckZvcm0odG9Eb0NhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHRvRG9FZGl0b3JGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdG9Eb0VkaXRvckZvcm0uY2xhc3NOYW1lID0gXCJ0by1kby1hZGRlci1mb3JtXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRWRpdG9yRm9ybSlcblxuICAgIC8vIENyZWF0ZSB0aXRsZSBpbnB1dC5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnRpdGxlO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiVGl0bGU6XCIsIHRpdGxlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBkZXNjcmlwdGlvbiBhcmVhLlxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSA1MDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbjtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkRlc2NyaXB0aW9uOlwiLCBkZXNjcmlwdGlvblRleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgZHVlIGRhdGUgaW5wdXQuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWUtZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGU7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEdWUgRGF0ZTpcIiwgZHVlRGF0ZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgVG9EbyBwcmlvcml0eSBzZWxlY3Rpb24uXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblZhbHVlO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcmlvcml0eTtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlByaW9yaXR5OlwiLCBwcmlvcml0eVNlbGVjdCkpO1xuXG4gICAgLy8gQ3JlYXRlIE5vdGUgaW5wdXQuXG4gICAgY29uc3Qgbm90ZXNUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBub3Rlc1RleHRhcmVhLmlkID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEubmFtZSA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLnJvd3MgPSA0O1xuICAgIG5vdGVzVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIG5vdGVzVGV4dGFyZWEudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiTm90ZXM6XCIsIG5vdGVzVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uLlxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXQtZm9ybVwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIGZvcm0gdGhhdCB3aGVuIHN1Ym1pdHRlZCwgYSBUb0RvIG9iamVjdCBpcyBjcmVhdGVkLlxuICAgIHRvRG9FZGl0b3JGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gYmVmb3JlIGVkaXRpbmcuXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gY2hhbmdlcz9cIikpIHtcbiAgICAgICAgICAgIC8vIFRoZSB1c2VyIGNsaWNrZWQgXCJPS1wiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFBhcnNlIGZvcm0gY29udHJvbCB2YWx1ZXMuXG4gICAgICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b0RvTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHRvIGRvLlxuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZSA9IHRvRG9UaXRsZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGVzY3JpcHRpb24gPSB0b0RvRGVzY3JpcHRpb247XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGUgPSB0b0RvRHVlRGF0ZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJpb3JpdHkgPSB0b0RvUHJpb3JpdHk7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzID0gdG9Eb05vdGVzO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kYXRlQW5kVGltZUNyZWF0ZWQgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRhdGVBbmRUaW1lQ3JlYXRlZDtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGF0ZU1vZGlmaWVkID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgVG9EbyBpdGVtIHdpdGggdGhlIFRvRG8gaXRlbSB3aXRoIGFsbCBjaGFuZ2VzIGFwcGxpZWQgaW4gdGhlIHBhcmVudCBwcm9qZWN0J3MgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJvamVjdC5yZXBsYWNlVG9Ebyh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRvLWRvIHRhYi5cbiAgICAgICAgICAgIHJlbmRlclRvRG9XaW5kb3coZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBET00gb25jZSBzdWJtaXR0ZWQuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cblxuLy8gUmV0dXJucyBhIGRpdiBjb250YWluaW5nIGEgbGFiZWxlZCBpbnB1dC5cbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkRGl2KGxhYmVsVGV4dCwgaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUb0RvSW5mb0NhcmQodG9Eb0NhcmQpIHtcbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZCBjb250YWluZXIuXG4gICAgY29uc3QgYmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tYmFja2dyb3VuZFwiXG5cbiAgICAvLyBDcmVhdGUgbWFpbiBjb250YWluZXIuXG4gICAgY29uc3QgdG9Eb0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby1jb250YWluZXJcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgY2xvc2UgZGl2XG4gICAgY29uc3QgY2xvc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRGl2LmNsYXNzTmFtZSA9IFwiY2xvc2UgaWNvblwiO1xuICAgIGNsb3NlRGl2LmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkNsb3NlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5LDNIMTYuM0g3LjdINUEyLDIgMCAwLDAgMyw1VjcuN1YxNi40VjE5QTIsMiAwIDAsMCA1LDIxSDcuN0gxNi40SDE5QTIsMiAwIDAsMCAyMSwxOVYxNi4zVjcuN1Y1QTIsMiAwIDAsMCAxOSwzTTE1LjYsMTdMMTIsMTMuNEw4LjQsMTdMNywxNS42TDEwLjYsMTJMNyw4LjRMOC40LDdMMTIsMTAuNkwxNS42LDdMMTcsOC40TDEzLjQsMTJMMTcsMTUuNkwxNS42LDE3WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBpbmZvLWZpZWxkIGRpdlxuICAgIGZ1bmN0aW9uIGNyZWF0ZUluZm9GaWVsZChsYWJlbCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5mb0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb0ZpZWxkLmNsYXNzTmFtZSA9IFwiaW5mby1maWVsZFwiO1xuXG4gICAgICAgIGNvbnN0IGluZm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9MYWJlbC5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tbGFiZWxcIjtcbiAgICAgICAgaW5mb0xhYmVsLnRleHRDb250ZW50ID0gbGFiZWwgKyBcIjpcIjtcbiAgICAgICAgaW5mb0ZpZWxkLmFwcGVuZENoaWxkKGluZm9MYWJlbCk7XG5cbiAgICAgICAgY29uc3QgaW5mb1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb1ZhbHVlLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby12YWx1ZVwiO1xuICAgICAgICBpbmZvVmFsdWUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgaW5mb0ZpZWxkLmFwcGVuZENoaWxkKGluZm9WYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGluZm9GaWVsZDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5mby1maWVsZCBkaXZzIGZvciBlYWNoIGZpZWxkXG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiVGl0bGVcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZSkpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIkR1ZSBEYXRlXCIsIGZvcm1hdERhdGUodG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kdWVEYXRlKSkpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIlByb2plY3RcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcm9qZWN0LnRpdGxlKSk7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiRGVzY3JpcHRpb25cIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbikpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIlByaW9yaXR5XCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJpb3JpdHkpKTtcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJOb3Rlc1wiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzKSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG1haW4gY29udGFpbmVyIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbnRhaW5lclxuICAgIGJhY2tncm91bmRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0luZm9Db250YWluZXIpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBkaXZcbiAgICBjbG9zZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGJhY2tncm91bmRDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kIHRvIGJvZHkuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZVRvRG9DYXJkXCI7XG5pbXBvcnQgeyBwb3BVcFRvRG9BZGRlckZvcm0gfSBmcm9tIFwiLi9wb3BVcFRvRG9BZGRlckZvcm1cIjtcbmltcG9ydCB7IHNvcnRUb0RvSXRlbXMgfSBmcm9tIFwiLi9zb3J0VG9Eb0l0ZW1zXCI7XG5jb25zdCBjb21wYXJlV2VlayA9IHJlcXVpcmUoXCJjb21wYXJlLXdlZWtcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb0RvV2luZG93KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgLy8gQWNjZXNzIGN1cnJlbnQgdG8gZG8gd2luZG93LlxuICAgIGNvbnN0IGN1cnJlbnRUb0RvV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby13aW5kb3dcIik7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgdG8gZG8gd2luZG93LlxuICAgIGNvbnN0IG5ld1RvRG9XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvRG9XaW5kb3cuY2xhc3NOYW1lID0gXCJ0by1kby13aW5kb3dcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgY3VycmVudCBwYXJlbnQgcHJvamVjdCBjYXJkIHRvIHRoZSB0by1kbyB3aW5kb3cuXG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lQ2FyZCA9IGNyZWF0ZUN1cnJlbnRQcm9qZWN0TmFtZUNhcmQoY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzb3J0ZXIuXG4gICAgY29uc3Qgc29ydGVyID0gY3JlYXRlU29ydGVyKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gdGFiLlxuICAgIGNvbnN0IHRvRG9UYWIgPSBjcmVhdGVUb0RvVGFiKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gYWRkZXIgYnV0dG9uLlxuICAgIGNvbnN0IHRvRG9BZGRlckJ1dHRvbiA9IGNyZWF0ZVRvRG9BZGRlckJ1dHRvbigpO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBjcmVhdGVkIGVsZW1lbnRzIHRvIHRoZSBuZXcgdG8tZG8gd2luZG93LlxuICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3ROYW1lQ2FyZCk7XG4gICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZChzb3J0ZXIpO1xuICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQodG9Eb1RhYik7XG4gICAgXG4gICAgLy8gT25seSBhZGQgdGhlIHRvLWRvIGFkZGVyIGJ1dHRvbiB0byBub24gXCJDb21wbGV0ZVwiIHByb2plY3RzLlxuICAgIGlmIChjdXJyZW50UHJvamVjdC5pZCAhPT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiICYmIGN1cnJlbnRQcm9qZWN0LmlkICE9PSBcInRvZGF5LXByb2plY3RcIiAmJiBjdXJyZW50UHJvamVjdC5pZCAhPT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiKSB7XG4gICAgICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQodG9Eb0FkZGVyQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgdG8gZG8gd2luZG93IHdpdGggbmV3IHRvIGRvIHdpbmRvdy5cbiAgICBjdXJyZW50VG9Eb1dpbmRvdy5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdUb0RvV2luZG93LCBjdXJyZW50VG9Eb1dpbmRvdyk7XG59XG5cblxuLy8gQ3JlYXRlIGEgY2FyZCBjb250YWluaW5nIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IHBhcmVudCBwcm9qZWN0LlxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFByb2plY3ROYW1lQ2FyZChjdXJyZW50UHJvamVjdCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQuY2xhc3NOYW1lID0gXCJwYXJlbnQtcHJvamVjdC1uYW1lXCJcbiAgICBjdXJyZW50UHJvamVjdE5hbWVDYXJkLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG5cbiAgICByZXR1cm4gY3VycmVudFByb2plY3ROYW1lQ2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29ydGVyKGN1cnJlbnRQcm9qZWN0KSB7XG5cbiAgICAvLyBDcmVhdGUgZGl2IHRvIGNvbnRhaW4gdGhlIHNvcnRlci5cbiAgICBjb25zdCBzb3J0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvcnRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNvcnQtY29udGFpbmVyXCJcblxuICAgIC8vIENyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHdheSB0byBjaG9vc2Ugc29ydGluZyBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNvcnRlci5pZCA9IFwic29ydGVyXCI7XG4gICAgc29ydGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRlcik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGxhYmVsIGZvciB0aGUgc29ydGVyLlxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzb3J0ZXIuaWQpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJTb3J0IGJ5OlwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkYXRhIHZhbHVlcyBvZiBvcHRpb25zIHRvIGJlIHNlbGVjdGVkLlxuICAgIGNvbnN0IHNvcnRpbmdPcHRpb25zID0gW1xuICAgICAgICB7IHZhbHVlOiBcInRpbWUtY3JlYXRlZC1hc2NlbmRpbmdcIiwgdGV4dDogXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwidGltZS1jcmVhdGVkLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJDcmVhdGVkIChOZXdlc3QgdG8gT2xkZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGF0ZS1hc2NlbmRpbmdcIiwgdGV4dDogXCJEYXRlIChhc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkYXRlLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJEYXRlIChkZXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwibmFtZS1hc2NlbmRpbmdcIiwgdGV4dDogXCJOYW1lIChhc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJuYW1lLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJOYW1lIChkZXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwicHJpb3JpdHktYXNjZW5kaW5nXCIsIHRleHQ6IFwiUHJpb3JpdHkgKExvd2VzdCB0byBIaWdoZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwicHJpb3JpdHktZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIlByaW9yaXR5IChIaWdoZXN0IHRvIExvd2VzdClcIiB9XG4gICAgXVxuXG4gICAgLy8gR2V0IGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb24gZnJvbSBjdXJyZW50IHNvcnRlci5cbiAgICBsZXQgY3VycmVudFNvcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydGVyXCIpO1xuICAgIFxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbiBvZiB0aGUgbmV3IHNvcnRlciB0byBiZSBjcmVhdGVkLlxuICAgIGxldCBuZXdDdXJyZW50U29ydE9wdGlvbjtcbiAgICBcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBzb3J0ZXIgdG8gYmUgcmVuZGVyZWQsIHNldCB0aGUgbmV3IHNvcnRlciBzZWxlY3RlZCBvcHRpb24gdG8gXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiLlxuICAgIGlmICghY3VycmVudFNvcnRlcikge1xuICAgICAgICBuZXdDdXJyZW50U29ydE9wdGlvbiA9IHNvcnRpbmdPcHRpb25zLmZpbmQoc29ydGluZ09wdGlvbiA9PiBzb3J0aW5nT3B0aW9uLnRleHQgPT09IFwiQ3JlYXRlZCAoT2xkZXN0IHRvIE5ld2VzdClcIik7XG4gICAgfVxuICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBmaXJzdCBzb3J0ZXIsIHNldCB0aGUgbmV3IHNvcnRlciBzZWxlY3RlZCBvcHRpb24gdG8gdGhlIGN1cnJlbnQgc29ydGVyIHNlbGVjdGVkIG9wdGlvbi5cbiAgICBlbHNlIHtcbiAgICAgICAgbmV3Q3VycmVudFNvcnRPcHRpb24gPSBjdXJyZW50U29ydGVyLnZhbHVlO1xuICAgIH1cblxuICAgIHNvcnRpbmdPcHRpb25zLmZvckVhY2goc29ydGluZ09wdGlvbiA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBvcHRpb24gZWxlbWVudC5cbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAvLyBBZGQgb3B0aW9uIHZhbHVlLlxuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc29ydGluZ09wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgLy8gQWRkIG9wdGlvbiB0ZXh0LWNvbnRlbnQuXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNvcnRpbmdPcHRpb24udGV4dDtcblxuICAgICAgICAvLyBNYWtlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uIG9mIGN1cnJlbnQgc29ydGVyIGNhcnJ5IG92ZXIgdG8gdGhlIG5ldyBzb3J0ZXIuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNvcnRpbmdPcHRpb24udmFsdWUgPT09IG5ld0N1cnJlbnRTb3J0T3B0aW9uO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgb3B0aW9uIHRvIHNvcnRlciBzZWxlY3QgZWxlbWVudC5cbiAgICAgICAgc29ydGVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcblxuICAgIC8vIFJlLXJlbmRlciB0by1kbyB0YWIgc28gdGhhdCB0by1kbyBpdGVtJ3MgbmV3IHNvcnQgY3JpdGVyYSB3aWxsIGJlIHJlZnJlY3RlZFxuICAgIHNvcnRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRvRG9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXRhYlwiKTtcbiAgICAgICAgY3VycmVudFRvRG9UYWIucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoY3JlYXRlVG9Eb1RhYihjdXJyZW50UHJvamVjdCksIGN1cnJlbnRUb0RvVGFiKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9Eb1RhYihjdXJyZW50UHJvamVjdCkge1xuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIHRhYi5cbiAgICBjb25zdCB0b0RvVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvVGFiLmNsYXNzTmFtZSA9IFwidG8tZG8tdGFiXCI7XG5cbiAgICAvLyBBcnJheSBmb3Igc3RvcmluZyBhbGwgdW5zb3J0ZWQgVG9EbyBpdGVtcy5cbiAgICBsZXQgdW5zb3J0ZWRUb0RvSXRlbXMgPSBbXTtcblxuICAgIC8vIFJlbmRlciBhbGwgVG9Eb3MgYWNyb3NzIGFsbCBwcm9qZWN0cyBpZiB0aGUgcHJvamVjdCBpcyBcIkhvbWVcIlxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gUHJvamVjdC5ob21lKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIFJlbmRlciBhbGwgY29tcGxldGVkIFRvRG9zIGZyb20gZGlmZmVyZW50IFByb2plY3JzIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpcyBcIkNvbXBsZXRlZFwiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIiApIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc29ydGVkVG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGFsbCBUb2RheSBUb0RvcyBmcm9tIGRpZmZlcmVudCBQcm9qZWNycyBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgaXMgXCJUb2RheVwiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwidG9kYXktcHJvamVjdFwiICkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9JdGVtc1xuICAgICAgICAgICAgLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIEdldCBjdXJyZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0IGN1cnJlbnQgZGF0ZSBzaW1pbGFyIHRvIHRoZSBkYXRlIHN0cnVjdHVyZSBvZiAnZHVlRGF0ZScgcHJvcGVydHkgb2YgVG9EbyBvYmplY3QuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0keyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke2N1cnJlbnREYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uZHVlRGF0ZSA9PT0gZm9ybWF0dGVkQ3VycmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBSZW5kZXIgYWxsIFRoaXMgV2VlayBUb0RvcyBmcm9tIGRpZmZlcmVudCBQcm9qZWNycyBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgaXMgXCJUaGlzIFdlZWtcIlxuICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIgKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgZHVlIGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gdG9Eb0l0ZW0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGR1ZSBkYXRlIG9mIGN1cnJlbnQgdG8gZG8gaXMgaW4gY3VycmVudCBcInRoaXMgd2Vla1wiLlxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlV2VlayhjdXJyZW50RGF0ZSwgZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBJZiBjdXJyZW50IHByb2plY3QgaXMgbm90IFwiSG9tZVwiIGFuZCBub3QgXCJDb21wbGV0ZWRcIiwgb25seSByZW5kZXIgaXRzIHJlc3BlY3RpdmUgVG9EbyBpdGVtcy5cbiAgICBlbHNlIHtcbiAgICAgICAgY3VycmVudFByb2plY3QudG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnQuXG4gICAgY29uc3Qgc29ydGVkVG9Eb0l0ZW1zID0gc29ydFRvRG9JdGVtcyh1bnNvcnRlZFRvRG9JdGVtcyk7XG5cbiAgICAvLyBSZW5kZXIgYWxsIFRvRG8gY2FyZHMgdG8gVG9EbyB0YWIuXG4gICAgc29ydGVkVG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICB0b0RvVGFiLmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9DYXJkKHRvRG9JdGVtKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9Eb1RhYjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvQWRkZXJCdXR0b24oKSB7XG5cbiAgICAvLyBDcmVhdGUgYSBidXR0b24gZWxlbWVudFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwidG8tZG8tYWRkZXJcIjtcblxuICAgIC8vIENyZWF0ZSBhbiBTVkcgZWxlbWVudCB1c2luZyBpbm5lckhUTUxcbiAgICBjb25zdCBzdmdIVE1MID0gYFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8dGl0bGU+QWRkIFRvRG88L3RpdGxlPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNywxM0gxM1YxN0gxMVYxM0g3VjExSDExVjdIMTNWMTFIMTdNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz5cbiAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIFNldCB0aGUgaW5uZXJIVE1MIG9mIHRoZSBidXR0b24gdG8gaW5jbHVkZSB0aGUgU1ZHIGFuZCBjYXB0aW9uXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IHN2Z0hUTUwgKyAnPGRpdiBjbGFzcz1cImJ1dHRvbi1jYXB0aW9uXCI+TmV3IFRvRG8uLi48L2Rpdj4nO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdGhhdCBwb3BzIHRoZSB0byBkbyBhZGRlciBmb3JtIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcFVwVG9Eb0FkZGVyRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBjcmVhdGVkIGJ1dHRvbiBlbGVtZW50XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0iLCJpbXBvcnQgeyByZW5kZXJUb0RvV2luZG93IH0gZnJvbSBcIi4vcmVuZGVyVG9Eb1dpbmRvd1wiO1xuXG5sZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIHJlbmRlclRvRG9XaW5kb3coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXR1cm4gY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0O1xufSIsIi8qKlxuICogU29ydHMgYW4gYXJyYXkgb2YgdG8tZG8gaXRlbXMgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHNvcnRpbmcgY3JpdGVyaWEuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdW5zb3J0ZWRUb0RvSXRlbXMgLSBBbiBhcnJheSBvZiB0by1kbyBpdGVtcyB0byBiZSBzb3J0ZWQuXG4gKiBAcmV0dXJucyB7QXJyYXl9ICBBbiBhcnJheSBvZiBzb3J0ZWQgdG8tZG8gaXRlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VG9Eb0l0ZW1zKHVuc29ydGVkVG9Eb0l0ZW1zKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHNvcnRlciBvciBzZXQgdGhlIGRlZmF1bHQgc29ydCBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0Q3JpdGVyaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvcnRlclwiKT8udmFsdWUgfHwgXCJ0aW1lLWNyZWF0ZWQtYXNjZW5kaW5nXCI7XG5cbiAgICAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIHNvcnQgY3JpdGVyaWEgdG8gY29tcGFyaXNvbiBmdW5jdGlvbnMuXG4gICAgY29uc3Qgc29ydEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgXCJkYXRlLWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMS5kdWVEYXRlKSAtIG5ldyBEYXRlKFRvRG8yLmR1ZURhdGUpLFxuICAgICAgICBcImRhdGUtZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMi5kdWVEYXRlKSAtIG5ldyBEYXRlKFRvRG8xLmR1ZURhdGUpLFxuICAgICAgICBcIm5hbWUtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IFRvRG8xLnRpdGxlLmxvY2FsZUNvbXBhcmUoVG9EbzIudGl0bGUpLFxuICAgICAgICBcIm5hbWUtZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBUb0RvMi50aXRsZS5sb2NhbGVDb21wYXJlKFRvRG8xLnRpdGxlKSxcbiAgICAgICAgXCJ0aW1lLWNyZWF0ZWQtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8xLmRhdGVBbmRUaW1lQ3JlYXRlZCkgLSBuZXcgRGF0ZShUb0RvMi5kYXRlQW5kVGltZUNyZWF0ZWQpLFxuICAgICAgICBcInRpbWUtY3JlYXRlZC1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8yLmRhdGVBbmRUaW1lQ3JlYXRlZCkgLSBuZXcgRGF0ZShUb0RvMS5kYXRlQW5kVGltZUNyZWF0ZWQpLFxuICAgICAgICBcInByaW9yaXR5LWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBwcmlvcml0eUxldmVsKFRvRG8xKSAtIHByaW9yaXR5TGV2ZWwoVG9EbzIpLFxuICAgICAgICBcInByaW9yaXR5LWRlc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gcHJpb3JpdHlMZXZlbChUb0RvMikgLSBwcmlvcml0eUxldmVsKFRvRG8xKSxcbiAgICB9O1xuXG4gICAgLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcmlvcml0eSBsZXZlbC5cbiAgICBjb25zdCBwcmlvcml0eUxldmVsID0gKFRvRG8pID0+IHtcbiAgICAgICAgc3dpdGNoIChUb0RvLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgY2FzZSBcIk1lZGl1bVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgY2FzZSBcIkxvd1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gSGFuZGxlIHVuZXhwZWN0ZWQgcHJpb3JpdHkgdmFsdWVzLlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNvcnQgdGhlIGFycmF5IHVzaW5nIHRoZSBzZWxlY3RlZCBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0ZWRUb0RvSXRlbXMgPSB1bnNvcnRlZFRvRG9JdGVtcy5zb3J0KHNvcnRGdW5jdGlvbnNbc29ydENyaXRlcmlhXSB8fCAoKCkgPT4gMCkpO1xuXG4gICAgcmV0dXJuIHNvcnRlZFRvRG9JdGVtcztcbn1cbiIsIi8qISAoYykgMjAyMCBBbmRyZWEgR2lhbW1hcmNoaSAqL1xuXG5jb25zdCB7cGFyc2U6ICRwYXJzZSwgc3RyaW5naWZ5OiAkc3RyaW5naWZ5fSA9IEpTT047XG5jb25zdCB7a2V5c30gPSBPYmplY3Q7XG5cbmNvbnN0IFByaW1pdGl2ZSA9IFN0cmluZzsgICAvLyBpdCBjb3VsZCBiZSBOdW1iZXJcbmNvbnN0IHByaW1pdGl2ZSA9ICdzdHJpbmcnOyAvLyBpdCBjb3VsZCBiZSAnbnVtYmVyJ1xuXG5jb25zdCBpZ25vcmUgPSB7fTtcbmNvbnN0IG9iamVjdCA9ICdvYmplY3QnO1xuXG5jb25zdCBub29wID0gKF8sIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgcHJpbWl0aXZlcyA9IHZhbHVlID0+IChcbiAgdmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUgPyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcbik7XG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoXywgdmFsdWUpID0+IChcbiAgdHlwZW9mIHZhbHVlID09PSBwcmltaXRpdmUgPyBuZXcgUHJpbWl0aXZlKHZhbHVlKSA6IHZhbHVlXG4pO1xuXG5jb25zdCByZXZpdmUgPSAoaW5wdXQsIHBhcnNlZCwgb3V0cHV0LCAkKSA9PiB7XG4gIGNvbnN0IGxhenkgPSBbXTtcbiAgZm9yIChsZXQga2UgPSBrZXlzKG91dHB1dCksIHtsZW5ndGh9ID0ga2UsIHkgPSAwOyB5IDwgbGVuZ3RoOyB5KyspIHtcbiAgICBjb25zdCBrID0ga2VbeV07XG4gICAgY29uc3QgdmFsdWUgPSBvdXRwdXRba107XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlKSB7XG4gICAgICBjb25zdCB0bXAgPSBpbnB1dFt2YWx1ZV07XG4gICAgICBpZiAodHlwZW9mIHRtcCA9PT0gb2JqZWN0ICYmICFwYXJzZWQuaGFzKHRtcCkpIHtcbiAgICAgICAgcGFyc2VkLmFkZCh0bXApO1xuICAgICAgICBvdXRwdXRba10gPSBpZ25vcmU7XG4gICAgICAgIGxhenkucHVzaCh7aywgYTogW2lucHV0LCBwYXJzZWQsIHRtcCwgJF19KTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgb3V0cHV0W2tdID0gJC5jYWxsKG91dHB1dCwgaywgdG1wKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0W2tdICE9PSBpZ25vcmUpXG4gICAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCB2YWx1ZSk7XG4gIH1cbiAgZm9yIChsZXQge2xlbmd0aH0gPSBsYXp5LCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge2ssIGF9ID0gbGF6eVtpXTtcbiAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCByZXZpdmUuYXBwbHkobnVsbCwgYSkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBzZXQgPSAoa25vd24sIGlucHV0LCB2YWx1ZSkgPT4ge1xuICBjb25zdCBpbmRleCA9IFByaW1pdGl2ZShpbnB1dC5wdXNoKHZhbHVlKSAtIDEpO1xuICBrbm93bi5zZXQodmFsdWUsIGluZGV4KTtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlID0gKHRleHQsIHJldml2ZXIpID0+IHtcbiAgY29uc3QgaW5wdXQgPSAkcGFyc2UodGV4dCwgUHJpbWl0aXZlcykubWFwKHByaW1pdGl2ZXMpO1xuICBjb25zdCB2YWx1ZSA9IGlucHV0WzBdO1xuICBjb25zdCAkID0gcmV2aXZlciB8fCBub29wO1xuICBjb25zdCB0bXAgPSB0eXBlb2YgdmFsdWUgPT09IG9iamVjdCAmJiB2YWx1ZSA/XG4gICAgICAgICAgICAgIHJldml2ZShpbnB1dCwgbmV3IFNldCwgdmFsdWUsICQpIDpcbiAgICAgICAgICAgICAgdmFsdWU7XG4gIHJldHVybiAkLmNhbGwoeycnOiB0bXB9LCAnJywgdG1wKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnkgPSAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkgPT4ge1xuICBjb25zdCAkID0gcmVwbGFjZXIgJiYgdHlwZW9mIHJlcGxhY2VyID09PSBvYmplY3QgP1xuICAgICAgICAgICAgKGssIHYpID0+IChrID09PSAnJyB8fCAtMSA8IHJlcGxhY2VyLmluZGV4T2YoaykgPyB2IDogdm9pZCAwKSA6XG4gICAgICAgICAgICAocmVwbGFjZXIgfHwgbm9vcCk7XG4gIGNvbnN0IGtub3duID0gbmV3IE1hcDtcbiAgY29uc3QgaW5wdXQgPSBbXTtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGxldCBpID0gK3NldChrbm93biwgaW5wdXQsICQuY2FsbCh7Jyc6IHZhbHVlfSwgJycsIHZhbHVlKSk7XG4gIGxldCBmaXJzdFJ1biA9ICFpO1xuICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuICAgIGZpcnN0UnVuID0gdHJ1ZTtcbiAgICBvdXRwdXRbaV0gPSAkc3RyaW5naWZ5KGlucHV0W2krK10sIHJlcGxhY2UsIHNwYWNlKTtcbiAgfVxuICByZXR1cm4gJ1snICsgb3V0cHV0LmpvaW4oJywnKSArICddJztcbiAgZnVuY3Rpb24gcmVwbGFjZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBmaXJzdFJ1biA9ICFmaXJzdFJ1bjtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgYWZ0ZXIgPSAkLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlb2YgYWZ0ZXIpIHtcbiAgICAgIGNhc2Ugb2JqZWN0OlxuICAgICAgICBpZiAoYWZ0ZXIgPT09IG51bGwpIHJldHVybiBhZnRlcjtcbiAgICAgIGNhc2UgcHJpbWl0aXZlOlxuICAgICAgICByZXR1cm4ga25vd24uZ2V0KGFmdGVyKSB8fCBzZXQoa25vd24sIGlucHV0LCBhZnRlcik7XG4gICAgfVxuICAgIHJldHVybiBhZnRlcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRvSlNPTiA9IGFueSA9PiAkcGFyc2Uoc3RyaW5naWZ5KGFueSkpO1xuZXhwb3J0IGNvbnN0IGZyb21KU09OID0gYW55ID0+IHBhcnNlKCRzdHJpbmdpZnkoYW55KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vanNfbW9kdWxlcy9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL2pzX21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL2pzX21vZHVsZXMvc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgcG9wVXBQcm9qZWN0QWRkZXJGb3JtIH0gZnJvbSBcIi4vanNfbW9kdWxlcy9wb3BVcFByb2plY3RBZGRlckZvcm0uanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgLy8gTG9hZCBwcm9qZWN0cyBmcm9tIHN0b3JhZ2UgYW5kIHNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgdG8gXCJIb21lXCIuXG4gICAgUHJvamVjdC5sb2FkUHJvamVjdHMoKTtcbiAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoUHJvamVjdC5ob21lKTtcblxuICAgIC8vIExvYWQgcHJvamVjdHMgdG8gdGhlIHRhYnMsIHNldCB1cCBwcm9qZWN0IGFkZGVyIGJ1dHRvbiwgYW5kIHByb2plY3QgZHJvcGRvd24gYnV0dG9uLlxuICAgIGxvYWRQcm9qZWN0c1RvVGFicygpO1xuICAgIHNldFVwUHJvamVjdEFkZGVyKCk7XG4gICAgc2V0VXBQcm9qZWN0RHJvcGRvd24oKTtcbn0pO1xuXG4vLyBMb2FkIHByb2plY3RzIHRvIHRoZSB0YWJzLlxuZnVuY3Rpb24gbG9hZFByb2plY3RzVG9UYWJzKCkge1xuICAgIGNvbnN0IHByb2plY3RzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy10YWJcIik7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyID0gcHJvamVjdHNUYWIucXVlcnlTZWxlY3RvcihcIi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIgPSBwcm9qZWN0c1RhYi5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm9qZWN0IGlzIGEgZGVmYXVsdCBwcm9qZWN0IG9yIG5vdC5cbiAgICAgICAgaWYgKGlzRGVmYXVsdFByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnNlcnRQcm9qZWN0Q2FyZChjcmVhdGVkUHJvamVjdHNDb250YWluZXIsIHByb2plY3RDYXJkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBDaGVjayBpZiBhIHByb2plY3QgaXMgYSBkZWZhdWx0IHByb2plY3QuXG5mdW5jdGlvbiBpc0RlZmF1bHRQcm9qZWN0KHByb2plY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcImhvbWUtcHJvamVjdFwiIHx8XG4gICAgICAgIHByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIiB8fFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcInRvZGF5LXByb2plY3RcIiB8fFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCJcbiAgICApO1xufVxuXG4vLyBJbnNlcnQgYSBwcm9qZWN0IGNhcmQgaW50byB0aGUgY3JlYXRlZCBwcm9qZWN0cyBjb250YWluZXIuXG5mdW5jdGlvbiBpbnNlcnRQcm9qZWN0Q2FyZChjcmVhdGVkUHJvamVjdHNDb250YWluZXIsIHByb2plY3RDYXJkKSB7XG4gICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShwcm9qZWN0Q2FyZCwgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGRlclwiKSk7XG59XG5cbi8vIFNldCB1cCB0aGUgcHJvamVjdCBhZGRlciBidXR0b24uXG5mdW5jdGlvbiBzZXRVcFByb2plY3RBZGRlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0QWRkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkZXJcIik7XG4gICAgcHJvamVjdEFkZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIFBvcCB1cCB0aGUgcHJvamVjdCBhZGRlciBmb3JtIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAgICBwb3BVcFByb2plY3RBZGRlckZvcm0oKTtcbiAgICB9KTtcbn1cblxuLy8gU2V0IHVwIHRoZSBwcm9qZWN0IGRyb3Bkb3duIGJ1dHRvbi5cbmZ1bmN0aW9uIHNldFVwUHJvamVjdERyb3Bkb3duKCkge1xuICAgIGNvbnN0IHByb2plY3REcm9wZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93blwiKTtcbiAgICBwcm9qZWN0RHJvcGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuICAgICAgICAvLyBUb2dnbGUgdGhlICdhY3RpdmUnIGFuZCAnaW5hY3RpdmUnIGNsYXNzZXMgZm9yIHRoZSBjcmVhdGVkIHByb2plY3RzIGNvbnRhaW5lci5cbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=