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
    grid-template-columns: 250px 1fr;
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
    overflow: auto;
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
    grid-auto-rows: 40px;
    gap: 3px;

    max-height: 200px;
    overflow: scroll;
}

.created-projects-container.active .project-card {
    align-items: center;
}

.created-projects-container .delete, 
.created-projects-container .edit {
    height: 20px;
}

.created-projects-container .project-name {
    height: 45px;
    padding: 15px 0 ;
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

.created-projects-container.active>* {
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
    border: 2px solid grey;
}

#created-projects-dropdown .icon.dropdown {
    fill: white;
}

.created-projects-container.active .project-name,
.to-do-title,
.parent-project-name {
    display: grid;
    align-content: center;
    overflow-x: auto;
}

/* Project Adder */
.project-adder.active {
    padding: 5px;
    border: 0px;
    border-radius: 6px;
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

.project-adder.active:hover {
    background-color: grey;
}

.project-adder.inactive {
    display: none;
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr;
    overflow: hidden;
    align-content: start;
    gap: 10px;
}

.parent-project-name {
    padding-bottom: 10px;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    font-size: 20px;
    font-weight: 600;
}

.sort-container {
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3px;
}

label[for="sorter"] {
    font-size: 14px;
}

#sorter {
    color: black;
    background-color: white;
    display: block;
    width: 200px;
    height: 25px;

    border: 2px solid grey;
    border-radius: 6px;
}

#sorter:focus {
    outline: none;
    border: 2px solid black;
}


/* To-Do Tab */
.to-do-tab {
    grid-column: 1 / 3;
    display: grid;
    grid-auto-rows: 65px;
    align-content: start;
    gap: 5px;
    overflow: auto;
}

/* To-Do Container */
.to-do-container {
    padding: 10px;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 25px 1fr auto 25px 25px 25px;
    align-items: center;
    gap: 5px;
    align-content: center;
    background-color: white;
}

.to-do-title {
    height: 50px;
}

.to-do-due-date {
    height: 20px;
    width: 125px;
    padding: 3px;
    border: 2px solid;
    border-radius: 5px;

    font-size: 13px;
    text-transform: uppercase;

    display: grid;
    align-content: center;
}

.to-do-due-date.upcoming {
    border-color: #6dcb68;
    color: #6dcb68;
}

.to-do-due-date.late {
    border-color: #d0645d;
    color: #d0645d;
}

/* To-Do Adder */
.to-do-adder {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: end;
    justify-self: end;

    width: 120px;
    padding: 10px;
    border: 0px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 700;
    color: black;
    text-align: justify;
    background-color: white;

    display: grid;
    align-content: center;

    text-align: center;
}

.to-do-adder,
#sorter {
    height: 30px;
}

.to-do-adder:hover,
.to-do-adder:active {
    background-color: black;
    color: white;
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
    backdrop-filter: blur(5px);
    overflow: auto;
}

/* To-Do Info Container */
.to-do-info-container {
    margin: 25px 0;
    width: 400px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 80%;
    height: 600px;
    overflow: hidden;
}

.info-field-container {
    padding-top: 5px;
    padding-right: 3px;
    padding-left: 3px;
    padding-bottom: 30px;
    height: 550px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    overflow-y: auto;
}

.close {
    padding-bottom: 10px;
    display: grid;
    justify-content: start;

    height: auto;
    width: auto;
}

.close .icon {
    width: 20px;
    height: 20px;
}

.close .icon:hover {
    fill: red;
}

.info-field {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
}

.to-do-info-label {
    width: 100%;
    font-weight: 600;
}

.to-do-info-value {
    border: 2px solid grey;
    border-radius: 6px;
    padding: 5px;
    overflow: auto;
    word-wrap: break-word;
    width: 100%;
    overflow: auto;
}

#title-info,
#project-info {
    height: 30px;
}

#description-info,
#notes-info {
    height: 90px;
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
    overflow: auto;
}

/* Form Styles */
form {
    width: 300px;
    background-color: white;
    border-radius: 10px;
    padding: 25px;
    display: grid;
    gap: 10px;
    color: black;
}

textarea {
    resize: none;
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


@media (max-width: 650px) {

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

    .projects-tab * {
        font-size: 13px;
    }

    .projects-tab {
        gap: 3px;
    }

    .created-projects-container.active {
        max-height: 125px;
    }

    #home-project .icon,
    #completed-project .icon,
    #today-project .icon,
    #this-week-project .icon,
    #created-projects-dropdown .icon,
    .project-adder .icon {
        width: 15px;
        height: 15px;
    }

    .logo {
        font-size: 16px;
    }

    .default-projects-container {
        padding: 0 0 10px 0;
        grid-auto-flow: column;

        gap: 1px;
        width: 100%;
        overflow: auto;
    }

    .to-do-container {
        height: 50px;
        gap: 4px;
    }

    .to-do-title {
        font-size: 12px;
    }

    .to-do-due-date.late,
    .to-do-due-date.upcoming {
        font-size: 10px;
    }

    .to-do-due-date.late,
    .to-do-due-date.upcoming {
        width: 100px;
    }

    .parent-project-name {
        font-size: 17px;
    }

    #sorter,
    label [for="sorter"],
    .to-do-adder {
        font-size: 12px;
    }

    #sorter {
        width: 170px;
    }

    .to-do-adder {
        width: 90px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\n.icon {\n    height: 10px;\n    width: 10px;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap');\n\n:root {\n    --text: #10090c;\n    --background: #fdfcfc;\n    --primary: #b7d7c9;\n    --secondary: #d8e7e9;\n    --accent: #579d5a;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    background-color: grey;\n}\n\n/* Content Container */\n.content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n/* Dashboard */\n.dashboard {\n    background-color: black;\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n    overflow: auto;\n}\n\n.logo {\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: white;\n}\n\n.projects-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* Default Projects Container */\n.default-projects-container {\n    display: grid;\n    gap: 10px;\n}\n\n/* Created Projects Container */\n.created-projects-container.inactive {\n    display: none;\n}\n\n.created-projects-container.active {\n    margin-left: 13px;\n    border-left: 3px solid white;\n    display: grid;\n    grid-auto-rows: 40px;\n    gap: 3px;\n\n    max-height: 200px;\n    overflow: scroll;\n}\n\n.created-projects-container.active .project-card {\n    align-items: center;\n}\n\n.created-projects-container .delete, \n.created-projects-container .edit {\n    height: 20px;\n}\n\n.created-projects-container .project-name {\n    height: 45px;\n    padding: 15px 0 ;\n}\n\n/* Project Card */\n.project-card {\n    padding: 5px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 1fr 25px 25px;\n    gap: 5px;\n    align-content: center;\n}\n\n.project-card button {\n    height: 20px;\n}\n\n.project-card:hover,\n.project-adder:hover {\n    background-color: grey;\n}\n\n.created-projects-container.active>* {\n    margin-left: 10px;\n    padding: 4px;\n    border-radius: 6px;\n    font-size: 14px;\n    color: white;\n}\n\n/* Project and Dropdown Icons */\n#home-project,\n#completed-project,\n#today-project,\n#this-week-project,\n#created-projects-dropdown {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: start;\n    grid-template-columns: auto 1fr;\n    color: white;\n}\n\n#home-project .icon,\n#completed-project .icon,\n#today-project .icon,\n#this-week-project .icon,\n#created-projects-dropdown .icon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: black;\n    height: 17px;\n    width: 17px;\n}\n\n#created-projects-dropdown {\n    border: 2px solid grey;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: white;\n}\n\n.created-projects-container.active .project-name,\n.to-do-title,\n.parent-project-name {\n    display: grid;\n    align-content: center;\n    overflow-x: auto;\n}\n\n/* Project Adder */\n.project-adder.active {\n    padding: 5px;\n    border: 0px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 20px auto;\n    grid-template-rows: 20px;\n    gap: 10px;\n    justify-content: start;\n    align-items: center;\n    justify-items: start;\n    background-color: transparent;\n    color: white;\n}\n\n.project-adder.active:hover {\n    background-color: grey;\n}\n\n.project-adder.inactive {\n    display: none;\n}\n\n.project-adder .icon,\n.to-do-adder .icon {\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n/* To-Do Window */\n.to-do-window {\n    background-color: rgb(187, 181, 181);\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto 1fr;\n    overflow: hidden;\n    align-content: start;\n    gap: 10px;\n}\n\n.parent-project-name {\n    padding-bottom: 10px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.sort-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 3px;\n}\n\nlabel[for=\"sorter\"] {\n    font-size: 14px;\n}\n\n#sorter {\n    color: black;\n    background-color: white;\n    display: block;\n    width: 200px;\n    height: 25px;\n\n    border: 2px solid grey;\n    border-radius: 6px;\n}\n\n#sorter:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\n\n/* To-Do Tab */\n.to-do-tab {\n    grid-column: 1 / 3;\n    display: grid;\n    grid-auto-rows: 65px;\n    align-content: start;\n    gap: 5px;\n    overflow: auto;\n}\n\n/* To-Do Container */\n.to-do-container {\n    padding: 10px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 25px 1fr auto 25px 25px 25px;\n    align-items: center;\n    gap: 5px;\n    align-content: center;\n    background-color: white;\n}\n\n.to-do-title {\n    height: 50px;\n}\n\n.to-do-due-date {\n    height: 20px;\n    width: 125px;\n    padding: 3px;\n    border: 2px solid;\n    border-radius: 5px;\n\n    font-size: 13px;\n    text-transform: uppercase;\n\n    display: grid;\n    align-content: center;\n}\n\n.to-do-due-date.upcoming {\n    border-color: #6dcb68;\n    color: #6dcb68;\n}\n\n.to-do-due-date.late {\n    border-color: #d0645d;\n    color: #d0645d;\n}\n\n/* To-Do Adder */\n.to-do-adder {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    align-self: end;\n    justify-self: end;\n\n    width: 120px;\n    padding: 10px;\n    border: 0px;\n    border-radius: 6px;\n    font-size: 15px;\n    font-weight: 700;\n    color: black;\n    text-align: justify;\n    background-color: white;\n\n    display: grid;\n    align-content: center;\n\n    text-align: center;\n}\n\n.to-do-adder,\n#sorter {\n    height: 30px;\n}\n\n.to-do-adder:hover,\n.to-do-adder:active {\n    background-color: black;\n    color: white;\n}\n\n/* To-Do Info Background */\n.to-do-info-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    backdrop-filter: blur(5px);\n    overflow: auto;\n}\n\n/* To-Do Info Container */\n.to-do-info-container {\n    margin: 25px 0;\n    width: 400px;\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    max-width: 80%;\n    height: 600px;\n    overflow: hidden;\n}\n\n.info-field-container {\n    padding-top: 5px;\n    padding-right: 3px;\n    padding-left: 3px;\n    padding-bottom: 30px;\n    height: 550px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n\n    overflow-y: auto;\n}\n\n.close {\n    padding-bottom: 10px;\n    display: grid;\n    justify-content: start;\n\n    height: auto;\n    width: auto;\n}\n\n.close .icon {\n    width: 20px;\n    height: 20px;\n}\n\n.close .icon:hover {\n    fill: red;\n}\n\n.info-field {\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr;\n}\n\n.to-do-info-label {\n    width: 100%;\n    font-weight: 600;\n}\n\n.to-do-info-value {\n    border: 2px solid grey;\n    border-radius: 6px;\n    padding: 5px;\n    overflow: auto;\n    word-wrap: break-word;\n    width: 100%;\n    overflow: auto;\n}\n\n#title-info,\n#project-info {\n    height: 30px;\n}\n\n#description-info,\n#notes-info {\n    height: 90px;\n}\n\n/* Form Container */\n.form-container {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(101, 101, 101, 0.22);\n    backdrop-filter: blur(1px);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    overflow: auto;\n}\n\n/* Form Styles */\nform {\n    width: 300px;\n    background-color: white;\n    border-radius: 10px;\n    padding: 25px;\n    display: grid;\n    gap: 10px;\n    color: black;\n}\n\ntextarea {\n    resize: none;\n}\n\nform input,\nform select,\nform textarea {\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2px solid rgb(215, 211, 211);\n    padding: 5px 7px;\n}\n\nform input:focus,\nform select:focus,\nform textarea:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\ninput[type=submit],\ninput[type=button] {\n    width: 100%;\n    height: 25px;\n    border-radius: 5px;\n    border: 0px;\n    background-color: rgb(82, 77, 77);\n    color: white;\n}\n\ninput[type=submit]:hover,\ninput[type=button]:hover {\n    border-color: black;\n    background-color: black;\n}\n\n.delete,\n.edit {\n    border: none;\n    background-color: transparent;\n}\n\n/* Icon Visibility */\n.project-card .icon,\n.to-do-container .icon {\n    display: block;\n    height: 16px;\n    width: 16px;\n}\n\n.project-card .icon {\n    fill: white;\n}\n\n.to-do-container .icon {\n    fill: black;\n}\n\n.delete:hover .icon {\n    display: block;\n    fill: red;\n}\n\n.edit:hover .icon {\n    display: block;\n    fill: green;\n}\n\n/* Completed To-Do Style */\n.to-do-container.completed {\n    background-color: rgb(173, 238, 173);\n}\n\n\n@media (max-width: 650px) {\n\n    #home-project,\n    #completed-project,\n    #today-project,\n    #this-week-project,\n    #created-projects-dropdown {\n        white-space: nowrap;\n    }\n\n    /* Adjust the dashboard and to-do window to stack on top of each other */\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr;\n    }\n\n    .projects-tab * {\n        font-size: 13px;\n    }\n\n    .projects-tab {\n        gap: 3px;\n    }\n\n    .created-projects-container.active {\n        max-height: 125px;\n    }\n\n    #home-project .icon,\n    #completed-project .icon,\n    #today-project .icon,\n    #this-week-project .icon,\n    #created-projects-dropdown .icon,\n    .project-adder .icon {\n        width: 15px;\n        height: 15px;\n    }\n\n    .logo {\n        font-size: 16px;\n    }\n\n    .default-projects-container {\n        padding: 0 0 10px 0;\n        grid-auto-flow: column;\n\n        gap: 1px;\n        width: 100%;\n        overflow: auto;\n    }\n\n    .to-do-container {\n        height: 50px;\n        gap: 4px;\n    }\n\n    .to-do-title {\n        font-size: 12px;\n    }\n\n    .to-do-due-date.late,\n    .to-do-due-date.upcoming {\n        font-size: 10px;\n    }\n\n    .to-do-due-date.late,\n    .to-do-due-date.upcoming {\n        width: 100px;\n    }\n\n    .parent-project-name {\n        font-size: 17px;\n    }\n\n    #sorter,\n    label [for=\"sorter\"],\n    .to-do-adder {\n        font-size: 12px;\n    }\n\n    #sorter {\n        width: 170px;\n    }\n\n    .to-do-adder {\n        width: 90px;\n    }\n}"],"sourceRoot":""}]);
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
        homeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>Home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>`;
        projectCard.appendChild(homeIcon);
    }
    // Add 'completed' icon to completed-project.
    else if (project.id === "completed-project") {
        const completedIcon = document.createElement("div");
        completedIcon.className = "icon-container"
        completedIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>Completed</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>`;
        projectCard.appendChild(completedIcon);
    }
    // Add 'today' icon to today-project.
    else if (project.id === "today-project") {
        const todayIcon = document.createElement("div");
        todayIcon.className = "icon-container"
        todayIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>Today</title><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>`;
        projectCard.appendChild(todayIcon);
    }
    // Add 'this-week' icon to this-week-project.
    else if (project.id === "this-week-project") {
        const thisWeekIcon = document.createElement("div");
        thisWeekIcon.className = "icon-container"
        thisWeekIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>This Week</title><path d="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z" /></svg>`;
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
    }
    else {
        toDoDueDate.className = "to-do-due-date upcoming";
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
    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0'); 
    currentDate = `${year}-${month}-${day}`;

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
        infoValue.id = `${label.toLowerCase()}-info`
        infoField.appendChild(infoValue);

        return infoField;
    }

    // Create info field container.
    const infoFieldContainer = document.createElement("dic");
    infoFieldContainer.className = "info-field-container";
    toDoInfoContainer.appendChild(infoFieldContainer);

    // Create info-field divs for each field
    infoFieldContainer.appendChild(createInfoField("Title", toDoCard.toDoReference.title));
    infoFieldContainer.appendChild(createInfoField("Due Date", (0,_formatDate__WEBPACK_IMPORTED_MODULE_0__.formatDate)(toDoCard.toDoReference.dueDate)));
    infoFieldContainer.appendChild(createInfoField("Project", toDoCard.toDoReference.project.title));
    infoFieldContainer.appendChild(createInfoField("Description", toDoCard.toDoReference.description));
    infoFieldContainer.appendChild(createInfoField("Priority", toDoCard.toDoReference.priority));
    infoFieldContainer.appendChild(createInfoField("Notes", toDoCard.toDoReference.notes));

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
    button.textContent = "New ToDo";

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
            createdProjectsContainer.appendChild(projectCard);
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
        const projectAdder = document.querySelector(".project-adder")

        // Toggle the 'active' and 'inactive' classes for the created projects container.
        createdProjectsContainer.classList.toggle("inactive");
        createdProjectsContainer.classList.toggle("active");

        // Toggle the 'active' and 'inactive' classes for the project adder.
        projectAdder.classList.toggle("inactive");
        projectAdder.classList.toggle("active");
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyx3REFBYTtBQUN2Qyx1QkFBdUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRWhEO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTs7QUFFQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sU0FBUyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxRQUFRLE1BQU0sU0FBUyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLHFEQUFxRCxtQkFBbUIsa0JBQWtCLEdBQUcsaUZBQWlGLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jb21wYXJlLXdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9nZW5lcmF0ZS11bmlxdWUtaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2lzLWRhdGUtb2JqL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy93ZWVrLWlkZW50aWZpZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9Ub0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL2NyZWF0ZVByb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL2NyZWF0ZVRvRG9DYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL2Zvcm1hdERhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBQcm9qZWN0QWRkZXJGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3BvcFVwUHJvamVjdEVkaXRvckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBUb0RvQWRkZXJGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3BvcFVwVG9Eb0VkaXRvckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBUb0RvSW5mb0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcmVuZGVyVG9Eb1dpbmRvdy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3NvcnRUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2ZsYXR0ZWQvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBpc0RhdGVPYmogPSByZXF1aXJlKCdpcy1kYXRlLW9iaicpO1xuY29uc3Qgd2Vla0lkZW50aWZpZXIgPSByZXF1aXJlKCd3ZWVrLWlkZW50aWZpZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoYSwgYikgPT4ge1xuXHRpZiAodHlwZW9mIGEgIT09ICdudW1iZXInICYmICFpc0RhdGVPYmooYSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIG51bWJlciBvciBEYXRlLCBnb3QgJHt0eXBlb2YgYX1gKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgYiAhPT0gJ251bWJlcicgJiYgIWlzRGF0ZU9iaihiKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgbnVtYmVyIG9yIERhdGUsIGdvdCAke3R5cGVvZiBifWApO1xuXHR9XG5cblx0cmV0dXJuIHdlZWtJZGVudGlmaWVyKGlzRGF0ZU9iaihhKSA/IGEgOiBuZXcgRGF0ZShhICogMTAwMCkpID09PSB3ZWVrSWRlbnRpZmllcihpc0RhdGVPYmooYikgPyBiIDogbmV3IERhdGUoYiAqIDEwMDApKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHbG9iYWwgU3R5bGVzICovXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG46cm9vdCB7XG4gICAgLS10ZXh0OiAjMTAwOTBjO1xuICAgIC0tYmFja2dyb3VuZDogI2ZkZmNmYztcbiAgICAtLXByaW1hcnk6ICNiN2Q3Yzk7XG4gICAgLS1zZWNvbmRhcnk6ICNkOGU3ZTk7XG4gICAgLS1hY2NlbnQ6ICM1NzlkNWE7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLyogQ29udGVudCBDb250YWluZXIgKi9cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIERhc2hib2FyZCAqL1xuLmRhc2hib2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdHMtdGFiIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogRGVmYXVsdCBQcm9qZWN0cyBDb250YWluZXIgKi9cbi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIENyZWF0ZWQgUHJvamVjdHMgQ29udGFpbmVyICovXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuaW5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogNDBweDtcbiAgICBnYXA6IDNweDtcblxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgLnByb2plY3QtY2FyZCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyIC5kZWxldGUsIFxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyIC5lZGl0IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdC1uYW1lIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgcGFkZGluZzogMTVweCAwIDtcbn1cblxuLyogUHJvamVjdCBDYXJkICovXG4ucHJvamVjdC1jYXJkIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtY2FyZCBidXR0b24ge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLnByb2plY3QtY2FyZDpob3Zlcixcbi5wcm9qZWN0LWFkZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlPioge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogUHJvamVjdCBhbmQgRHJvcGRvd24gSWNvbnMgKi9cbiNob21lLXByb2plY3QsXG4jY29tcGxldGVkLXByb2plY3QsXG4jdG9kYXktcHJvamVjdCxcbiN0aGlzLXdlZWstcHJvamVjdCxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNob21lLXByb2plY3QgLmljb24sXG4jY29tcGxldGVkLXByb2plY3QgLmljb24sXG4jdG9kYXktcHJvamVjdCAuaWNvbixcbiN0aGlzLXdlZWstcHJvamVjdCAuaWNvbixcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcbiAgICBmaWxsOiBibGFjaztcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDE3cHg7XG59XG5cbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbi5kcm9wZG93biB7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgLnByb2plY3QtbmFtZSxcbi50by1kby10aXRsZSxcbi5wYXJlbnQtcHJvamVjdC1uYW1lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4vKiBQcm9qZWN0IEFkZGVyICovXG4ucHJvamVjdC1hZGRlci5hY3RpdmUge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LWFkZGVyLmFjdGl2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLnByb2plY3QtYWRkZXIuaW5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWFkZGVyIC5pY29uLFxuLnRvLWRvLWFkZGVyIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi8qIFRvLURvIFdpbmRvdyAqL1xuLnRvLWRvLXdpbmRvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTgxLCAxODEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNvcnQtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDNweDtcbn1cblxubGFiZWxbZm9yPVwic29ydGVyXCJdIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNzb3J0ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbiNzb3J0ZXI6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cblxuLyogVG8tRG8gVGFiICovXG4udG8tZG8tdGFiIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogNjVweDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyogVG8tRG8gQ29udGFpbmVyICovXG4udG8tZG8tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgYXV0byAyNXB4IDI1cHggMjVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvLWRvLXRpdGxlIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi50by1kby1kdWUtZGF0ZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRvLWRvLWR1ZS1kYXRlLnVwY29taW5nIHtcbiAgICBib3JkZXItY29sb3I6ICM2ZGNiNjg7XG4gICAgY29sb3I6ICM2ZGNiNjg7XG59XG5cbi50by1kby1kdWUtZGF0ZS5sYXRlIHtcbiAgICBib3JkZXItY29sb3I6ICNkMDY0NWQ7XG4gICAgY29sb3I6ICNkMDY0NWQ7XG59XG5cbi8qIFRvLURvIEFkZGVyICovXG4udG8tZG8tYWRkZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuXG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50by1kby1hZGRlcixcbiNzb3J0ZXIge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnRvLWRvLWFkZGVyOmhvdmVyLFxuLnRvLWRvLWFkZGVyOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUby1EbyBJbmZvIEJhY2tncm91bmQgKi9cbi50by1kby1pbmZvLWJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIFRvLURvIEluZm8gQ29udGFpbmVyICovXG4udG8tZG8taW5mby1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjVweCAwO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluZm8tZmllbGQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNsb3NlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5jbG9zZSAuaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY2xvc2UgLmljb246aG92ZXIge1xuICAgIGZpbGw6IHJlZDtcbn1cblxuLmluZm8tZmllbGQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5cbi50by1kby1pbmZvLWxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG8tZG8taW5mby12YWx1ZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuI3RpdGxlLWluZm8sXG4jcHJvamVjdC1pbmZvIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbiNkZXNjcmlwdGlvbi1pbmZvLFxuI25vdGVzLWluZm8ge1xuICAgIGhlaWdodDogOTBweDtcbn1cblxuLyogRm9ybSBDb250YWluZXIgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMTAxLCAxMDEsIDAuMjIpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyogRm9ybSBTdHlsZXMgKi9cbmZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5mb3JtIGlucHV0LFxuZm9ybSBzZWxlY3QsXG5mb3JtIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxNSwgMjExLCAyMTEpO1xuICAgIHBhZGRpbmc6IDVweCA3cHg7XG59XG5cbmZvcm0gaW5wdXQ6Zm9jdXMsXG5mb3JtIHNlbGVjdDpmb2N1cyxcbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDc3LCA3Nyk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5kZWxldGUsXG4uZWRpdCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBJY29uIFZpc2liaWxpdHkgKi9cbi5wcm9qZWN0LWNhcmQgLmljb24sXG4udG8tZG8tY29udGFpbmVyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWNhcmQgLmljb24ge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4udG8tZG8tY29udGFpbmVyIC5pY29uIHtcbiAgICBmaWxsOiBibGFjaztcbn1cblxuLmRlbGV0ZTpob3ZlciAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmlsbDogcmVkO1xufVxuXG4uZWRpdDpob3ZlciAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmlsbDogZ3JlZW47XG59XG5cbi8qIENvbXBsZXRlZCBUby1EbyBTdHlsZSAqL1xuLnRvLWRvLWNvbnRhaW5lci5jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIzOCwgMTczKTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICNob21lLXByb2plY3QsXG4gICAgI2NvbXBsZXRlZC1wcm9qZWN0LFxuICAgICN0b2RheS1wcm9qZWN0LFxuICAgICN0aGlzLXdlZWstcHJvamVjdCxcbiAgICAjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLyogQWRqdXN0IHRoZSBkYXNoYm9hcmQgYW5kIHRvLWRvIHdpbmRvdyB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciAqL1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgfVxuXG4gICAgLnByb2plY3RzLXRhYiAqIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIC5wcm9qZWN0cy10YWIge1xuICAgICAgICBnYXA6IDNweDtcbiAgICB9XG5cbiAgICAuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTI1cHg7XG4gICAgfVxuXG4gICAgI2hvbWUtcHJvamVjdCAuaWNvbixcbiAgICAjY29tcGxldGVkLXByb2plY3QgLmljb24sXG4gICAgI3RvZGF5LXByb2plY3QgLmljb24sXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0IC5pY29uLFxuICAgICNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLFxuICAgIC5wcm9qZWN0LWFkZGVyIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAuZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXG4gICAgICAgIGdhcDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgLnRvLWRvLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgLnRvLWRvLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC50by1kby1kdWUtZGF0ZS5sYXRlLFxuICAgIC50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICAudG8tZG8tZHVlLWRhdGUubGF0ZSxcbiAgICAudG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgLnBhcmVudC1wcm9qZWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgI3NvcnRlcixcbiAgICBsYWJlbCBbZm9yPVwic29ydGVyXCJdLFxuICAgIC50by1kby1hZGRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAjc29ydGVyIHtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgIH1cblxuICAgIC50by1kby1hZGRlciB7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFJQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFNBQVM7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OztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLG9DQUFvQztBQUN4Qzs7O0FBR0E7O0lBRUk7Ozs7O1FBS0ksbUJBQW1CO0lBQ3ZCOztJQUVBLHdFQUF3RTtJQUN4RTtRQUNJLDBCQUEwQjtRQUMxQiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBOzs7Ozs7UUFNSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsc0JBQXNCOztRQUV0QixRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25COztJQUVBOztRQUVJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOzs7UUFHSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHQ6ICMxMDA5MGM7XFxuICAgIC0tYmFja2dyb3VuZDogI2ZkZmNmYztcXG4gICAgLS1wcmltYXJ5OiAjYjdkN2M5O1xcbiAgICAtLXNlY29uZGFyeTogI2Q4ZTdlOTtcXG4gICAgLS1hY2NlbnQ6ICM1NzlkNWE7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIENvbnRlbnQgQ29udGFpbmVyICovXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBEYXNoYm9hcmQgKi9cXG4uZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHMtdGFiIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBEZWZhdWx0IFByb2plY3RzIENvbnRhaW5lciAqL1xcbi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogQ3JlYXRlZCBQcm9qZWN0cyBDb250YWluZXIgKi9cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA0MHB4O1xcbiAgICBnYXA6IDNweDtcXG5cXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgLnByb2plY3QtY2FyZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAuZGVsZXRlLCBcXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIgLmVkaXQge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdC1uYW1lIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDAgO1xcbn1cXG5cXG4vKiBQcm9qZWN0IENhcmQgKi9cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1cHggMjVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIsXFxuLnByb2plY3QtYWRkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlPioge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBQcm9qZWN0IGFuZCBEcm9wZG93biBJY29ucyAqL1xcbiNob21lLXByb2plY3QsXFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxcbiN0b2RheS1wcm9qZWN0LFxcbiN0aGlzLXdlZWstcHJvamVjdCxcXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxcbiNjb21wbGV0ZWQtcHJvamVjdCAuaWNvbixcXG4jdG9kYXktcHJvamVjdCAuaWNvbixcXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcXG4gICAgZmlsbDogYmxhY2s7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24uZHJvcGRvd24ge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSAucHJvamVjdC1uYW1lLFxcbi50by1kby10aXRsZSxcXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuLyogUHJvamVjdCBBZGRlciAqL1xcbi5wcm9qZWN0LWFkZGVyLmFjdGl2ZSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtYWRkZXIuYWN0aXZlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnByb2plY3QtYWRkZXIuaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1hZGRlciAuaWNvbixcXG4udG8tZG8tYWRkZXIgLmljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLyogVG8tRG8gV2luZG93ICovXFxuLnRvLWRvLXdpbmRvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4MSwgMTgxKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wYXJlbnQtcHJvamVjdC1uYW1lIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zb3J0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInNvcnRlclxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4jc29ydGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcblxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbiNzb3J0ZXI6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXFxuLyogVG8tRG8gVGFiICovXFxuLnRvLWRvLXRhYiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDY1cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIFRvLURvIENvbnRhaW5lciAqL1xcbi50by1kby1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgYXV0byAyNXB4IDI1cHggMjVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50by1kby10aXRsZSB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnRvLWRvLWR1ZS1kYXRlIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzZkY2I2ODtcXG4gICAgY29sb3I6ICM2ZGNiNjg7XFxufVxcblxcbi50by1kby1kdWUtZGF0ZS5sYXRlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZDA2NDVkO1xcbiAgICBjb2xvcjogI2QwNjQ1ZDtcXG59XFxuXFxuLyogVG8tRG8gQWRkZXIgKi9cXG4udG8tZG8tYWRkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG8tZG8tYWRkZXIsXFxuI3NvcnRlciB7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRvLWRvLWFkZGVyOmhvdmVyLFxcbi50by1kby1hZGRlcjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBUby1EbyBJbmZvIEJhY2tncm91bmQgKi9cXG4udG8tZG8taW5mby1iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogVG8tRG8gSW5mbyBDb250YWluZXIgKi9cXG4udG8tZG8taW5mby1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDI1cHggMDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmluZm8tZmllbGQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGhlaWdodDogNTUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UgLmljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2xvc2UgLmljb246aG92ZXIge1xcbiAgICBmaWxsOiByZWQ7XFxufVxcblxcbi5pbmZvLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4udG8tZG8taW5mby1sYWJlbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG8tZG8taW5mby12YWx1ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiN0aXRsZS1pbmZvLFxcbiNwcm9qZWN0LWluZm8ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbiNkZXNjcmlwdGlvbi1pbmZvLFxcbiNub3Rlcy1pbmZvIHtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4vKiBGb3JtIENvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMTAxLCAxMDEsIDAuMjIpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBGb3JtIFN0eWxlcyAqL1xcbmZvcm0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSBzZWxlY3QsXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE1LCAyMTEsIDIxMSk7XFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxufVxcblxcbmZvcm0gaW5wdXQ6Zm9jdXMsXFxuZm9ybSBzZWxlY3Q6Zm9jdXMsXFxuZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA3NywgNzcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlcixcXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmRlbGV0ZSxcXG4uZWRpdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIEljb24gVmlzaWJpbGl0eSAqL1xcbi5wcm9qZWN0LWNhcmQgLmljb24sXFxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIC5pY29uIHtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi50by1kby1jb250YWluZXIgLmljb24ge1xcbiAgICBmaWxsOiBibGFjaztcXG59XFxuXFxuLmRlbGV0ZTpob3ZlciAuaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmaWxsOiByZWQ7XFxufVxcblxcbi5lZGl0OmhvdmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbGw6IGdyZWVuO1xcbn1cXG5cXG4vKiBDb21wbGV0ZWQgVG8tRG8gU3R5bGUgKi9cXG4udG8tZG8tY29udGFpbmVyLmNvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIzOCwgMTczKTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuXFxuICAgICNob21lLXByb2plY3QsXFxuICAgICNjb21wbGV0ZWQtcHJvamVjdCxcXG4gICAgI3RvZGF5LXByb2plY3QsXFxuICAgICN0aGlzLXdlZWstcHJvamVjdCxcXG4gICAgI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgfVxcblxcbiAgICAvKiBBZGp1c3QgdGhlIGRhc2hib2FyZCBhbmQgdG8tZG8gd2luZG93IHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyICovXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMtdGFiICoge1xcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy10YWIge1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgIH1cXG5cXG4gICAgLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMjVweDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1wcm9qZWN0IC5pY29uLFxcbiAgICAjY29tcGxldGVkLXByb2plY3QgLmljb24sXFxuICAgICN0b2RheS1wcm9qZWN0IC5pY29uLFxcbiAgICAjdGhpcy13ZWVrLXByb2plY3QgLmljb24sXFxuICAgICNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLFxcbiAgICAucHJvamVjdC1hZGRlciAuaWNvbiB7XFxuICAgICAgICB3aWR0aDogMTVweDtcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgfVxcblxcbiAgICAubG9nbyB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgZ2FwOiAxcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC50by1kby1jb250YWluZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgZ2FwOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvLWRvLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcblxcbiAgICAudG8tZG8tZHVlLWRhdGUubGF0ZSxcXG4gICAgLnRvLWRvLWR1ZS1kYXRlLnVwY29taW5nIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcblxcbiAgICAudG8tZG8tZHVlLWRhdGUubGF0ZSxcXG4gICAgLnRvLWRvLWR1ZS1kYXRlLnVwY29taW5nIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAucGFyZW50LXByb2plY3QtbmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIH1cXG5cXG4gICAgI3NvcnRlcixcXG4gICAgbGFiZWwgW2Zvcj1cXFwic29ydGVyXFxcIl0sXFxuICAgIC50by1kby1hZGRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgI3NvcnRlciB7XFxuICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvLWRvLWFkZGVyIHtcXG4gICAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKGxpbWl0KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaW1pdCkudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyU3ltYm9scyhleGNsdWRlU3ltYm9scywgZ3JvdXApIHtcbiAgbGV0IG5ld0dyb3VwID0gZ3JvdXA7XG4gIGV4Y2x1ZGVTeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xuICAgIG5ld0dyb3VwID0gbmV3R3JvdXAucmVwbGFjZShzeW1ib2wsICcnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0dyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJZChhdmFpbGFibGVDaGFycywgaWRMZW5ndGgpIHtcbiAgbGV0IGlkID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZExlbmd0aDsgaSArPSAxKSB7XG4gICAgaWQgKz0gYXZhaWxhYmxlQ2hhcnNbZ2V0UmFuZG9tTnVtYmVyKGF2YWlsYWJsZUNoYXJzLmxlbmd0aCldO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKHtcbiAgbGVuZ3RoID0gMjAsXG4gIHVzZUxldHRlcnMgPSB0cnVlLFxuICB1c2VOdW1iZXJzID0gdHJ1ZSxcbiAgaW5jbHVkZVN5bWJvbHMgPSBbXSxcbiAgZXhjbHVkZVN5bWJvbHMgPSBbXSxcbn0gPSB7fSkge1xuICBsZXQgbGV0dGVycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gIGxldCBudW1iZXJzID0gJzAxMjM0NTY3ODknO1xuICBsZXQgYXZhaWxhYmxlQ2hhcnMgPSBbXTtcbiAgbGV0IGxldHRlcnNBcnIgPSBbXTtcbiAgbGV0IG51bWJlcnNBcnIgPSBbXTtcblxuICBpZiAodXNlTGV0dGVycykge1xuICAgIGlmIChleGNsdWRlU3ltYm9scy5sZW5ndGgpIGxldHRlcnMgPSBmaWx0ZXJTeW1ib2xzKGV4Y2x1ZGVTeW1ib2xzLCBsZXR0ZXJzKTtcbiAgICBsZXR0ZXJzQXJyID0gbGV0dGVycy5zcGxpdCgnJyk7XG4gIH1cblxuICBpZiAodXNlTnVtYmVycykge1xuICAgIGlmIChleGNsdWRlU3ltYm9scy5sZW5ndGgpIG51bWJlcnMgPSBmaWx0ZXJTeW1ib2xzKGV4Y2x1ZGVTeW1ib2xzLCBudW1iZXJzKTtcbiAgICBudW1iZXJzQXJyID0gbnVtYmVycy5zcGxpdCgnJyk7XG4gIH1cblxuICBhdmFpbGFibGVDaGFycyA9IFsuLi5sZXR0ZXJzQXJyLCAuLi5udW1iZXJzQXJyLCAuLi5pbmNsdWRlU3ltYm9sc107XG5cbiAgcmV0dXJuIGNyZWF0ZUlkKGF2YWlsYWJsZUNoYXJzLCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlVW5pcXVlSWQ7XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHZhbCA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIHdlZWstaWRlbnRpZmllciA8aHR0cHM6Ly9naXRodWIuY29tL3Rocm9sbC93ZWVrLWlkZW50aWZpZXI+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE2IENsw6ltZW50IEJpbGxpb3QsIGNvbnRyaWJ1dG9ycy5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2Vla0lkZW50aWZpZXI7XG5tb2R1bGUuZXhwb3J0cy53ZWVrSWRlbnRpZmllciA9IHdlZWtJZGVudGlmaWVyO1xubW9kdWxlLmV4cG9ydHMuZGF0ZUZyb21XZWVrID0gZGF0ZUZyb21XZWVrO1xuXG4vKipcbiAqIEdldCB1bmlxdWUgYW5kIHNlcXVlbnRpYWwgd2VlayBpZGVudGlmaWVyIG9mIGN1cnJlbnQgZGF0ZSBvciBnaXZlbiB2YWxpZCBgRGF0ZWAgc3RyaW5nIGZvcm1hdFxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgd2Vla0lkZW50aWZpZXIgPSByZXF1aXJlKCdjdXJyZW50LXdlZWstbnVtYmVyJyk7XG4gKlxuICogLy8gYXVndXN0IDEyLCAyMDE2IChjdXJyZW50IGRhdGUpXG4gKiB3ZWVrSWRlbnRpZmllcigpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJ0phbnVhcnkgMDUsIDE5NzAgMDM6MDA6MDAnKTtcbiAqIC8vPT4gMVxuICpcbiAqIHdlZWtJZGVudGlmaWVyKG5ldyBEYXRlKCdBdWd1c3QgMTIsIDIwMTYnKSk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignMDgvMTIvMjAxNicpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJ0F1Z3VzdCAxMiwgMjAxNicpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIobmV3IERhdGUoJ0F1Z3VzdCAxOSwgMjAxNicpKTtcbiAqIC8vPT4gMjQzM1xuICpcbiAqIHdlZWtJZGVudGlmaWVyKCcwOC8xOS8yMDE2Jyk7XG4gKiAvLz0+ICAyNDMzXG4gKiBgYGBcbiAqXG4gKiBAbmFtZSB3ZWVrSWRlbnRpZmllclxuICogQHBhcmFtICB7U3RyaW5nfSBgW2RhdGVdYCBldmVyeSB2YWxpZCBEYXRlLWlzaCBzdHJpbmcgZm9ybWF0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB3ZWVrSWRlbnRpZmllcihkYXRlKSB7XG4gIHZhciBpbnN0YW5jZTtcblxuICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnICYmIGRhdGUubGVuZ3RoKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgRGF0ZShkYXRlKTtcbiAgfSBlbHNlIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIGluc3RhbmNlID0gZGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGlzIGRhdGUgb2JqZWN0XG4gIHZhciB0YXJnZXQgPSBuZXcgRGF0ZShpbnN0YW5jZS52YWx1ZU9mKCkpO1xuICAvLyBTdGFydGluZyBkYXRlIHBvaW50IGZvciBvdXIgc2VxdWVuY2VcbiAgdmFyIGxhc3REYXlPZldlZWtaZXJvVGltZXN0YW1wID0gbmV3IERhdGUoJ0phbnVhcnkgNSwgMTk3MCAwMDowMDowMCcpLmdldFRpbWUoKSAtIDE7XG4gIC8vIE51bWJlciBvZiB3ZWVrIGZyb20gb3VyIHN0YXJ0aW5nIGRhdGVcbiAgdmFyIHdlZWtOdW1iZXJkaWZmID0gTWF0aC5jZWlsKCh0YXJnZXQuZ2V0VGltZSgpIC0gbGFzdERheU9mV2Vla1plcm9UaW1lc3RhbXApIC8gKDI0ICogMzYwMCAqIDEwMDAgKiA3KSk7XG5cbiAgcmV0dXJuIHdlZWtOdW1iZXJkaWZmO1xufVxuXG4vKipcbiAqIEdldCBtb25kYXkgZGF0ZSBvZiB0aGUgZ2l2ZW4gd2VlayBpZGVudGlmaWVyXG4gKlxuICogICogKipFeGFtcGxlOioqXG4gKlxuICogYGBganNcbiAqIHZhciB3ZWVrSWRlbnRpZmllciA9IHJlcXVpcmUoJ2N1cnJlbnQtd2Vlay1udW1iZXInKTtcbiAqXG4gKiB3ZWVrSWRlbnRpZmllci5kYXRlRnJvbVdlZWsoMjQwMyk7XG4gKiAvLz0+IEphbnVhcnkgMTgsIDIwMTYgMDA6MDA6MDBcbiAqXG4gKiBgYGBcbiAqIEBuYW1lIHdlZWtJZGVudGlmaWVyLmRhdGVGcm9tV2Vla1xuICogQHBhcmFtICB7TnVtYmVyfSB3ZWVrSWRlbnRpZmllclxuICogQHJldHVybiB7RGF0ZX0gTW9uZGF5IG9mIHRoZSBnaXZlbiB3ZWVrIGlkZW50aWZpZXIgb3IgSmFudWFyeSA1LCAxOTcwIDAwOjAwOjAwIGlmIHdlZWtJZGVudGlmaWVyIGlzIG5vdCA+IDAuXG4gKi9cbmZ1bmN0aW9uIGRhdGVGcm9tV2Vlayh3ZWVrSWRlbnRpZmllcikge1xuICBpZiAoaXNOYU4ocGFyc2VGbG9hdCh3ZWVrSWRlbnRpZmllcikpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdGFydGluZyBkYXRlIHBvaW50IGZvciBvdXIgc2VxdWVuY2VcbiAgICB2YXIgZmlyc3REYXlPZldlZWtPbmUsIG1vbmRheU9mV2VlaztcbiAgICBtb25kYXlPZldlZWsgPSBmaXJzdERheU9mV2Vla09uZSA9IG5ldyBEYXRlKCdKYW51YXJ5IDUsIDE5NzAgMDA6MDA6MDAnKTtcbiAgICBpZiAod2Vla0lkZW50aWZpZXIgPiAwKSB7XG4gICAgICBtb25kYXlPZldlZWsgPSBuZXcgRGF0ZSgoKHdlZWtJZGVudGlmaWVyIC0gMSkgKiAoMjQgKiAzNjAwICogMTAwMCAqIDcpKSArIGZpcnN0RGF5T2ZXZWVrT25lLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIHJldHVybiBtb25kYXlPZldlZWs7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlLCBzdHJpbmdpZnkgfSBmcm9tICdmbGF0dGVkJztcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvLmpzXCI7XG5jb25zdCBnZW5lcmF0ZVVuaXF1ZUlkID0gcmVxdWlyZShcImdlbmVyYXRlLXVuaXF1ZS1pZFwiKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcHJvamVjdCBpdGVtLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBwcm9qZWN0LiBcbiAqIEBwYXJhbSB7QXJyYXl9IHRvRG9JdGVtcyAtIEFycmF5IGNvbnRhaW5pbmcgVG9EbyBvYmplY3RzLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gSUQgZm9yIHRoZSBwcm9lamN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG5cbiAgICAvLyBTdG9yYWdlIG9mIGFsbCBcIlByb2plY3RcIiBpbnN0YW5jZXMuXG4gICAgc3RhdGljIHByb2plY3RzID0gW107XG5cbiAgICAvLyBIb21lIHByb2plY3QuXG4gICAgc3RhdGljIGhvbWU7XG5cbiAgICAvLyBMb2FkIHNhdmVkIFwiUHJvamVjdC5wcm9qZWN0c1wiIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcbiAgICAgICAgLy8gTG9hZCBzZXJpYWxpemVkIHNhdmVkIHByb2plY3RzLlxuICAgICAgICBjb25zdCBzZXJpYWxpemVkU2F2ZWRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LnByb2plY3RzXCIpO1xuICAgICAgICBpZiAoc2VyaWFsaXplZFNhdmVkUHJvamVjdCkge1xuXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgc2VyaWFsaXplZCBzYXZlIHByb2plY3RzLlxuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdCA9IHBhcnNlKHNlcmlhbGl6ZWRTYXZlZFByb2plY3QpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYmxhbmsgXCJQcm9qZWN0XCIgb2JqZWN0cyB0byBiZSBwb3B1bGF0ZWQuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXcgUHJvamVjdChudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGJsYW5rIHByb2plY3RzIHdpdGggXCJwcm9qZWN0IHRpbGVcIiwgXCJ0by1kbyBpdGVtc1wiLCBhbmQgXCJwcm9qZWN0IGlkXCIgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3RzJyByZXNwZWN0aXZlIHRpdGxlcy5cbiAgICAgICAgICAgICAgICBQcm9qZWN0LnByb2plY3RzW2ldLnRpdGxlID0gcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdFtpXS50aXRsZTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJvamVjdHMnIHJlc3BlY3RpdmUgdG8tZG8gaXRlbXMuXG4gICAgICAgICAgICAgICAgcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdFtpXS50b0RvSXRlbXMuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3QucHJvamVjdHNbaV0uYWRkVG9EbyhuZXcgVG9EbyguLi5PYmplY3QudmFsdWVzKHRvRG9JdGVtKSkpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3RzJ3MgcmVzcGVjdGl2ZSBJRC5cbiAgICAgICAgICAgICAgICBQcm9qZWN0LnByb2plY3RzW2ldLmlkID0gcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdFtpXS5pZDtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHByb2plY3RzIHRvIGJlIGxvYWQsIGNyZWF0ZSBkZWZhdWx0IFwiSG9tZVwiIHByb2plY3QgYW5kIFwiQ29tcGxldGVkXCIgcHJvamVjdC5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIkhvbWVcIiwgbnVsbCwgXCJob21lLXByb2plY3RcIik7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIkNvbXBsZXRlZFwiLCBudWxsLCBcImNvbXBsZXRlZC1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJUb2RheVwiLCBudWxsLCBcInRvZGF5LXByb2plY3RcIik7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIlRoaXMgV2Vla1wiLCBudWxsLCBcInRoaXMtd2Vlay1wcm9qZWN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHV0IGhvbWUgcHJvamVjdCB0byBzdGF0aWMgdmFyaWFibGUuXG4gICAgICAgIFByb2plY3QuaG9tZSA9IFByb2plY3QucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IFwiaG9tZS1wcm9qZWN0XCIpO1xuICAgIH1cblxuICAgIC8vIFByb2plY3QgQ29uc3RydWN0b3IuXG4gICAgY29uc3RydWN0b3IodGl0bGUgPSBudWxsLCB0b0RvSXRlbXMgPSBudWxsLCBpZCA9IG51bGwpIHtcblxuICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgdGl0bGUuXG4gICAgICAgIHRoaXMudGl0bGUgPSAodGl0bGUgIT09IG51bGwpID8gdGl0bGUgOiBudWxsO1xuXG4gICAgICAgIC8vIFNldCB0aGUgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICAgICAgaWYgKHRvRG9JdGVtcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50b0RvSXRlbXMgPSB0b0RvSXRlbXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBcInRvRG9JdGVtc1wiIHRvIGJsYW5rIGFycmF5IGlmIG5vbmUgaXMgcHJvdmlkZWQgZHVyaW5nIGluc3RhbnRpYXRpb24uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b0RvSXRlbXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBwcm9qZWN0J3MgSUQgdG8gZ2l2ZW4gcHJvamVjdCBJRCBkdXJpbmcgcHJvamVjdCBpbnN0YW50aWF0aW9uLlxuICAgICAgICBpZiAoaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgYSBnZW5lcmF0ZWQgMTUtY2hhcmFjdGVyIElEIHRvIHByb2plY3QgaWYgbm90aGluZyB3YXMgcHJvdmlkZWQgZHVyaW5nIFByb2plY3QncyBpbnN0YW50aWF0aW9uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKHsgbGVuZ3RoOiAxNSwgdXNlTnVtYmVyczogdHJ1ZSwgdXNlTGV0dGVyczogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluc2VydCBuZXcgUHJvamVjdCBvYmplY3QgaW5zaWRlIFwicHJvamVjdHNcIiBhcnJheS5cbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHByb2plY3QgZnJvbSB0aGUgXCJQcm9qZWN0LnByb2plY3RzXCIgYXJyYXkuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLnNwbGljZShQcm9qZWN0LnByb2plY3RzLmluZGV4T2YodGhpcyksIDEpO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gRWRpdCBwcm9qZWN0IHRpdGxlLlxuICAgIHNldFByb2plY3RUaXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYSBUb0RvIEl0ZW0gaW5zaWRlIHRoZSBwcm9qZWN0LlxuICAgIGFkZFRvRG8oVG9Ebykge1xuXG4gICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCByZWZlcmVuY2UgcHJvcGVydHkgb2YgdGhlIFRvRG8gaXRlbSB0byAndGhpcycgY3VycmVudCBwcm9qZWN0IGluc3RhbmNlLlxuICAgICAgICBUb0RvLnByb2plY3QgPSB0aGlzO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgdG8gZG8gaXRlbSB0byAndGhpcycgcHJvamVjdHMgYXJyYXkgb2YgdG8gZG8gaXRlbXMuXG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zLnB1c2goVG9Ebyk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgYSBUb0RvIEl0ZW0gaW5zaWRlIHRoZSBwcm9qZWN0J3MgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICBkZWxldGVUb0RvKFRvRG8pIHtcbiAgICAgICAgdGhpcy50b0RvSXRlbXMuc3BsaWNlKHRoaXMudG9Eb0l0ZW1zLmluZGV4T2YoVG9EbyksIDEpO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSBUb0RvIGl0ZW1zIGluc2lkZSB0aGUgcHJvamVjdCdzIFwidG9Eb0l0ZW1zXCIgYXJyYXkuXG4gICAgcmVwbGFjZVRvRG8obmV3VG9Ebywgb2xkVG9Ebykge1xuXG4gICAgICAgIC8vIFNldCBuZXcgVG9EbyBpdGVtJ3MgcHJvamVjdCByZWZlcmVuY2UgdG8gdGhpcyBwcm9qZWN0LlxuICAgICAgICBuZXdUb0RvLnByb2plY3QgPSB0aGlzO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgVG9EbyBpdGVtIHdpdGggdGhlIG5ldyBUb0RvIGl0ZW0uXG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zW3RoaXMudG9Eb0l0ZW1zLmluZGV4T2Yob2xkVG9EbyldID0gbmV3VG9EbztcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyAjc2F2ZUNoYW5nZXMoKSB7XG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC5wcm9qZWN0c1wiLCBzdHJpbmdpZnkoUHJvamVjdC5wcm9qZWN0cykpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGNsYXNzXG4gKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSB0by1kbyBpdGVtIHdpdGggdmFyaW91cyBkZXRhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9yIG5hbWUgb2YgdGhlIHRvLWRvIGl0ZW0uXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSB0by1kbyBpdGVtLlxuICogQHBhcmFtIHtEYXRlfSBkdWVEYXRlIC0gVGhlIGR1ZSBkYXRlIGZvciBjb21wbGV0aW5nIHRoZSB0by1kbyBpdGVtLlxuICogQHBhcmFtIHtzdHJpbmd9IHByaW9yaXR5IC0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSB0by1kbyBpdGVtIChlLmcuLCBcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIikuXG4gKiBAcGFyYW0ge3N0cmluZ30gbm90ZXMgLSBBZGRpdGlvbmFsIG5vdGVzIG9yIGNvbW1lbnRzIHJlbGF0ZWQgdG8gdGhlIHRvLWRvIGl0ZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGVkPW51bGwsIGRhdGVBbmRUaW1lQ3JlYXRlZD1udWxsLCBkYXRlTW9kaWZpZWQ9bnVsbCwgcHJvamVjdCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IChjb21wbGV0ZWQgIT09IG51bGwpID8gY29tcGxldGVkIDogZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0ZUFuZFRpbWVDcmVhdGVkID0gKGRhdGVBbmRUaW1lQ3JlYXRlZCAhPT0gbnVsbCkgPyBkYXRlQW5kVGltZUNyZWF0ZWQgOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuZGF0ZU1vZGlmaWVkID0gKGRhdGVNb2RpZmllZCAhPT0gbnVsbCkgPyBkYXRlTW9kaWZpZWQgOiBudWxsO1xuICAgICAgICB0aGlzLnByb2plY3QgPSAocHJvamVjdCAhPT0gbnVsbCkgPyBwcm9qZWN0IDogbnVsbDtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdC5kZWxldGVUb0RvKHRoaXMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwb3BVcFByb2plY3RFZGl0b3JGb3JtIH0gZnJvbSBcIi4vcG9wVXBQcm9qZWN0RWRpdG9yRm9ybS5qc1wiO1xuaW1wb3J0IHsgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbiBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG5cbiAgICAvLyBDcmVhdGUgYSBjYXJkIGZvciBcIlByb2plY3RcIi5cbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIlxuICAgIHByb2plY3RDYXJkLmlkID0gcHJvamVjdC5pZDtcblxuICAgIC8vIEFkZCByZWZlcmVjZSB0byB0aGUgcHJvamVjdCBvYmplY3QuXG4gICAgcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZSA9IHByb2plY3Q7XG5cbiAgICAvLyBBZGQgJ2hvbWUnIGljb24gdG8gaG9tZS1wcm9qZWN0LlxuICAgIGlmIChwcm9qZWN0LmlkID09PSBcImhvbWUtcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG9tZUljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIGhvbWVJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPkhvbWU8L3RpdGxlPjxwYXRoIGQ9XCJNMTAsMjBWMTRIMTRWMjBIMTlWMTJIMjJMMTIsM0wyLDEySDVWMjBIMTBaXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChob21lSWNvbik7XG4gICAgfVxuICAgIC8vIEFkZCAnY29tcGxldGVkJyBpY29uIHRvIGNvbXBsZXRlZC1wcm9qZWN0LlxuICAgIGVsc2UgaWYgKHByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29tcGxldGVkSWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgY29tcGxldGVkSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5Db21wbGV0ZWQ8L3RpdGxlPjxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEwIDE3TDUgMTJMNi40MSAxMC41OUwxMCAxNC4xN0wxNy41OSA2LjU4TDE5IDhMMTAgMTdaXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChjb21wbGV0ZWRJY29uKTtcbiAgICB9XG4gICAgLy8gQWRkICd0b2RheScgaWNvbiB0byB0b2RheS1wcm9qZWN0LlxuICAgIGVsc2UgaWYgKHByb2plY3QuaWQgPT09IFwidG9kYXktcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZGF5SWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgdG9kYXlJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPlRvZGF5PC90aXRsZT48cGF0aCBkPVwiTTMuNTUgMTkuMDlMNC45NiAyMC41TDYuNzYgMTguNzFMNS4zNCAxNy4yOU0xMiA2QzguNjkgNiA2IDguNjkgNiAxMlM4LjY5IDE4IDEyIDE4IDE4IDE1LjMxIDE4IDEyQzE4IDguNjggMTUuMzEgNiAxMiA2TTIwIDEzSDIzVjExSDIwTTE3LjI0IDE4LjcxTDE5LjA0IDIwLjVMMjAuNDUgMTkuMDlMMTguNjYgMTcuMjlNMjAuNDUgNUwxOS4wNCAzLjZMMTcuMjQgNS4zOUwxOC42NiA2LjgxTTEzIDFIMTFWNEgxM002Ljc2IDUuMzlMNC45NiAzLjZMMy41NSA1TDUuMzQgNi44MUw2Ljc2IDUuMzlNMSAxM0g0VjExSDFNMTMgMjBIMTFWMjNIMTNcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRvZGF5SWNvbik7XG4gICAgfVxuICAgIC8vIEFkZCAndGhpcy13ZWVrJyBpY29uIHRvIHRoaXMtd2Vlay1wcm9qZWN0LlxuICAgIGVsc2UgaWYgKHByb2plY3QuaWQgPT09IFwidGhpcy13ZWVrLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCB0aGlzV2Vla0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzV2Vla0ljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIHRoaXNXZWVrSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5UaGlzIFdlZWs8L3RpdGxlPjxwYXRoIGQ9XCJNNiAxSDhWM0gxNlYxSDE4VjNIMTlDMjAuMTEgMyAyMSAzLjkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy44OSAzIDUgM0g2VjFNNSA4VjE5SDE5VjhINU03IDEwSDE3VjEySDdWMTBaXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0aGlzV2Vla0ljb24pO1xuICAgIH1cblxuICAgIC8vIFB1dCBwcm9qZWN0IHRpdGxlIGluc2lkZSB0aGUgcHJvamVjdCBjYXJkLlxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdC1uYW1lXCJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIC8vIE9ubHkgYWRkIGZlYXR1cmUgYnV0dG9ucyB0byBcIm5vbi1Ib21lXCIgcHJvamVjdHMuXG4gICAgaWYgKHByb2plY3QuaWQgIT09IFwiaG9tZS1wcm9qZWN0XCIgJiYgcHJvamVjdC5pZCAhPT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiICYmIHByb2plY3QuaWQgIT09IFwidG9kYXktcHJvamVjdFwiICYmIHByb2plY3QuaWQgIT09IFwidGhpcy13ZWVrLXByb2plY3RcIikge1xuICAgICAgICBhZGREZWxldGVCdXR0b24ocHJvamVjdENhcmQpO1xuICAgICAgICBhZGRFZGl0QnV0dG9uKHByb2plY3RDYXJkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCB0aGUgcHJvamVjdCBjb3JyZXNwb25kaW5nIHRvIHByb2plY3QgY2FyZC5cbiAgICAgICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvamVjdENhcmQ7XG59XG5cblxuZnVuY3Rpb24gYWRkRGVsZXRlQnV0dG9uKHByb2plY3RDYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvbi5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkZWxldGUgc3ZnIGljb24uXG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EZWxldGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhIMTFWMTdIOVY4TTEzLDhIMTVWMTdIMTNWOFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBkZWxldGUgZnVuY3Rpb25hbGl0eSB0byBkZWxldGUgYnV0dG9uLlxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gQXNrIHRoZSB1c2VyIGZvciBkZWxldGUgY29uZmlybWF0aW9uLlxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJDb25maXJtIGRlbGV0aW9uP1wiKSkge1xuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGJhY2stZW5kKVxuICAgICAgICAgICAgcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZS5kZWxldGUoKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgXCJUby1Eb1wiIHRhYnMuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXRhYlwiKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBNYWtlIFwiSG9tZVwiIHByb2plY3QgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gY3VycmVudCBwcm9qZWN0IGlzIGRlbGV0ZWQuXG4gICAgICAgICAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoUHJvamVjdC5ob21lKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGZyb250LWVuZClcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG59XG5cblxuZnVuY3Rpb24gYWRkRWRpdEJ1dHRvbihwcm9qZWN0Q2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgYnV0dG9uLlxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0XCI7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBJY29uLlxuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkVkaXQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTgsMi45IDE3LjM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjkgMTYuOTYsMy4yOUwxNS4xMiw1LjEyTDE4Ljg3LDguODdNMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTNMMTQuMDYsNi4xOEwzLDE3LjI1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGVkaXQgZnVuY3Rpb25hbGl0eSB0byBlZGl0IGJ1dHRvbiBieSBwb3BwaW5nIHRoZSBcInByb2plY3QgZWRpdG9yIGZvcm1cIi5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwUHJvamVjdEVkaXRvckZvcm0ocHJvamVjdENhcmQpO1xuICAgIH0pO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xufSIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlLmpzXCI7XG5pbXBvcnQgeyBwb3BVcFRvRG9FZGl0b3JGb3JtIH0gZnJvbSBcIi4vcG9wVXBUb0RvRWRpdG9yRm9ybS5qc1wiO1xuaW1wb3J0IHsgcG9wVXBUb0RvSW5mb0NhcmQgfSBmcm9tIFwiLi9wb3BVcFRvRG9JbmZvQ2FyZC5qc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9Eb0NhcmQoVG9Ebykge1xuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIGNhcmQgZGl2LlxuICAgIGNvbnN0IHRvRG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lclwiXG5cbiAgICAvLyBBZGQgcmVmZXJlbmNlIHRvIHRoZSBUb0RvLlxuICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UgPSBUb0RvO1xuXG4gICAgYWRkQ2hlY2tCb3godG9Eb0NhcmQpO1xuXG4gICAgLy8gQXBwbHkgXCJjb21wbGV0ZWQgZWZmZWN0c1wiIHRvIHRvLWRvIGl0ZW1zIHRoYXQgYXJlIGNvbXBsZXRlZC5cbiAgICBpZiAodG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgdG9Eb0NhcmQucXVlcnlTZWxlY3RvcihcIi50by1kby1jaGVja2JveFwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXIgY29tcGxldGVkXCI7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIHRpdGxlIGNvbnRhaW5lci5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9UaXRsZS5jbGFzc05hbWUgPSBcInRvLWRvLXRpdGxlXCJcbiAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBUb0RvLnRpdGxlO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gZHVlIGRhdGUgY29udGFpbmVyLlxuICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIENsYXNzaWZ5IHdoZXRoZXIgVG9EbyBkdWUgZGF0ZSBpcyBhbHJlYWR5IGxhdGUgb3IganVzdCB1cGNvbWluZy5cbiAgICBpZiAoaXNUb0RvTGF0ZShUb0RvLmR1ZURhdGUpKSB7XG4gICAgICAgIHRvRG9EdWVEYXRlLmNsYXNzTmFtZSA9IFwidG8tZG8tZHVlLWRhdGUgbGF0ZVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdG9Eb0R1ZURhdGUuY2xhc3NOYW1lID0gXCJ0by1kby1kdWUtZGF0ZSB1cGNvbWluZ1wiO1xuICAgIH1cblxuICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHtmb3JtYXREYXRlKFRvRG8uZHVlRGF0ZSl9YDtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZSk7XG5cblxuICAgIGFkZFZpZXdCdXR0b24odG9Eb0NhcmQpO1xuICAgIGFkZERlbGV0ZUJ1dHRvbih0b0RvQ2FyZCk7XG4gICAgYWRkRWRpdEJ1dHRvbih0b0RvQ2FyZCk7XG5cbiAgICByZXR1cm4gdG9Eb0NhcmQ7XG59XG5cblxuLy8gQ2hlY2sgd2hldGhlciBUb0RvIGxhdGUgaXMgbGF0ZSBvciBub3QuXG5mdW5jdGlvbiBpc1RvRG9MYXRlKGR1ZURhdGUpIHtcblxuICAgIC8vIEdldCBjdXJyZW50IGRhdGUgaW4gXCJZWVlZLU1NLUREXCIgZm9ybWF0LlxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IFxuICAgIGNvbnN0IGRheSA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7IFxuICAgIGN1cnJlbnREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcblxuICAgIC8vIEN1cnJlbnQgZGF0ZSBpcyBhaGVhZCBvZiBkdWUgZGF0ZSBoZW5jZSBUb0RvIGlzIGxhdGUuXG4gICAgaWYgKGN1cnJlbnREYXRlID4gZHVlRGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gQ3VycmVudCBkYXRlIGlzIGJlaGluZCBkdWUgZGF0ZSBoZW5jZSBUb0RvIGlzIG5vdCBsYXRlLlxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZERlbGV0ZUJ1dHRvbih0b0RvQ2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b24uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGVcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVsZXRlIHN2ZyBpY29uLlxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGVsZXRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU05LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4SDExVjE3SDlWOE0xMyw4SDE1VjE3SDEzVjhaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZGVsZXRlIGZ1bmN0aW9uYWxpdHkgdG8gZGVsZXRlIGJ1dHRvbi5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICAvLyBBc2sgdGhlIHVzZXIgZm9yIGRlbGV0ZSBjb25maXJtYXRpb24uXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gZGVsZXRpb24/XCIpKXtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChiYWNrLWVuZClcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGVsZXRlKCk7XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChmcm9udC1lbmQpXG4gICAgICAgICAgICB0b0RvQ2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvRG9DYXJkKTtcbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZEVkaXRCdXR0b24odG9Eb0NhcmQpIHtcbiAgICAvLyBDcmVhdGUgRWRpdCBidXR0b24uXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImVkaXRcIjtcblxuICAgIC8vIENyZWF0ZSBFZGl0IEljb24uXG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuOSAxNi45NiwzLjI5TDE1LjEyLDUuMTJMMTguODcsOC44N00zLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45M0wxNC4wNiw2LjE4TDMsMTcuMjVaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZWRpdCBmdW5jdGlvbmFsaXR5IHRvIGVkaXQgYnV0dG9uIGJ5IHBvcHBpbmcgdGhlIFwidG8tZG8gZWRpdG9yIGZvcm1cIi5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwVG9Eb0VkaXRvckZvcm0odG9Eb0NhcmQpO1xuICAgIH0pO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRWaWV3QnV0dG9uKHRvRG9DYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgVmlldyBidXR0b24uXG4gICAgY29uc3Qgdmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmlld0J1dHRvbi5jbGFzc05hbWUgPSBcImVkaXRcIjtcblxuICAgIC8vIENyZWF0ZSBFZGl0IEljb24uXG4gICAgdmlld0J1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VmlldyBUb0RvIEluZm9ybWF0aW9uPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMsOUgxMVY3SDEzTTEzLDE3SDExVjExSDEzTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBcInZpZXcgdG8tZG9cIiBmdW5jdGlvbmFsaXR5IHRvIHZpZXcgYnV0dG9uIGJ5IHBvcHBpbmcgYSBcImRpdlwiIGNvbnRhaW5pbmcgdGhlIHRvLWRvIGl0ZW0ncyBpbmZvLlxuICAgIHZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXBUb0RvSW5mb0NhcmQodG9Eb0NhcmQpO1xuICAgIH0pO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHZpZXdCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRDaGVja0JveCh0b0RvQ2FyZCkge1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tCb3guY2xhc3NOYW1lID0gXCJ0by1kby1jaGVja2JveFwiXG5cbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgaXNUb0RvQ29tcGxldGVkID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWRcbiAgICAgICAgaWYgKGlzVG9Eb0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyXCJcblxuICAgICAgICAgICAgLy8gSWYgYSAnY29tcGxldGVkJyB0by1kbyBpcyBzZXQgdG8gJ3VuZmluaXNoZWQnIHRvIGRvLCByZW1vdmUgaXQgZnJvbSB0aGUgXCJDb21wbGV0ZWRcIiBwcm9qZWN0J3MgdG8tZG8gd2luZG93LlxuICAgICAgICAgICAgaWYgKGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpLmlkID09PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB0b0RvQ2FyZC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRvRG9DYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyIGNvbXBsZXRlZFwiXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIFVwZGF0ZSBjaGFuZ2VzIGluc2lkZSBwYXJlbnQgcHJvamVjdC5cbiAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcm9qZWN0LnJlcGxhY2VUb0RvKHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UpO1xuICAgIH0pO1xuXG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoaW5wdXREYXRlKSB7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgICBcIkphbi5cIiwgXCJGZWIuXCIsIFwiTWFyLlwiLCBcIkFwci5cIiwgXCJNYXlcIiwgXCJKdW4uXCIsXG4gICAgICAgIFwiSnVsLlwiLCBcIkF1Zy5cIiwgXCJTZXAuXCIsIFwiT2N0LlwiLCBcIk5vdi5cIiwgXCJEZWMuXCJcbiAgICBdO1xuXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gaW5wdXREYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7bW9udGhzW051bWJlcihtb250aCkgLSAxXX0gJHtwYXJzZUludChkYXksIDEwKX0sICR7eWVhcn1gO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdENhcmQuanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwUHJvamVjdEFkZGVyRm9ybSgpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9IFwicHJvamVjdC1hZGRlci1mb3JtXCI7XG4gICAgZm9ybS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJIZWxsb1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQgUHJvamVjdFwiPmA7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgIFxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gZm9ybSB0aGF0IGNyZWF0ZXMgdGhlIFByb2plY3Qgb25jZSBzdWJtaXR0ZWQuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcblxuICAgICAgICAvLyBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbi5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBHZXQgcHJvamVjdCdzIHRpdGxlLlxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBQcm9qZWN0LlxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBwcm9qZWN0IGNhcmQgcmVwcmVzZW50YXRpb24uXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdClcblxuICAgICAgICAvLyBSZW5kZXIgbmV3IHByb2plY3QgdG8gRE9NIGJ5IGFwcGVuZGluZyBcbiAgICAgICAgY29uc3QgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmluc2VydEJlZm9yZShwcm9qZWN0Q2FyZCwgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJvamVjdC1hZGRlclwiKSk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgbmV3bHkgY3JlYXRlZCBwcm9qZWN0IGFzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdC5cbiAgICAgICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmb3JtIHdoZW4gZG9uZS5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gcG9wVXBQcm9qZWN0RWRpdG9yRm9ybShwcm9qZWN0Q2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gQ3JlYXRlIHByb2plY3QgZWRpdG9yIGZvcm0uXG4gICAgY29uc3QgcHJvamVjdEVkaXRvckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5jbGFzc05hbWUgPSBcInByb2plY3QtZWRpdG9yLWZvcm1cIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0b3JGb3JtKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgIG5ldy1wcm9qZWN0LXRpdGxlIGlucHV0IGZpZWxkLlxuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlID0gcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZS50aXRsZTtcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGVJbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvbi5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiRG9uZVwiO1xuICAgIHByb2plY3RFZGl0b3JGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvbi5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KVxuICAgIHByb2plY3RFZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0byBwcm9qZWN0IGVkaXRvciBmb3JtIHRoYXQgbW9kaWZpZXMgdGhlIHByb2plY3QgdGl0bGUgd2hlbiBzdWJtaXR0ZWQuXG4gICAgcHJvamVjdEVkaXRvckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBBc2sgZm9yIHVzZXIgY29uZmlybWF0aW9uIGJlZm9yZSBlZGl0aW5nLlxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJDb25maXJtIGNoYW5nZXM/XCIpKXtcbiAgICAgICAgICAgIC8vIE1vZGlmeSBwcm9qZWN0IHRpdGxlIGluIGJhY2stZW5kLlxuICAgICAgICAgICAgcHJvamVjdENhcmQucHJvamVjdFJlZmVyZW5jZS5zZXRQcm9qZWN0VGl0bGUobmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBNb2RpZnkgcHJvamVjdCB0aXRsZSBpbiBmcm9udC1lbmQuXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJlbnQtcHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZm9ybSBmcm9tIHRoZSBET00gd2hlbiBzdWJtaXR0ZWQuXG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59IiwiaW1wb3J0IHsgcmVuZGVyVG9Eb1dpbmRvdyB9IGZyb20gXCIuL3JlbmRlclRvRG9XaW5kb3cuanNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi9Ub0RvLmpzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwVG9Eb0FkZGVyRm9ybSgpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHRvRG9BZGRlckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0b0RvQWRkZXJGb3JtLmNsYXNzTmFtZSA9IFwidG8tZG8tYWRkZXItZm9ybVwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0FkZGVyRm9ybSk7XG5cbiAgICAvLyBDcmVhdGUgdGl0bGUgaW5wdXQuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiVGl0bGU6XCIsIHRpdGxlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBkZXNjcmlwdGlvbiBhcmVhLlxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSA1MDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkRlc2NyaXB0aW9uOlwiLCBkZXNjcmlwdGlvblRleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgZHVlIGRhdGUgaW5wdXQuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWUtZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiRHVlIERhdGU6XCIsIGR1ZURhdGVJbnB1dCkpO1xuXG4gICAgLy8gQ3JlYXRlIFRvRG8gcHJpb3JpdHkgc2VsZWN0aW9uLlxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb25WYWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiUHJpb3JpdHk6XCIsIHByaW9yaXR5U2VsZWN0KSk7XG5cbiAgICAvLyBDcmVhdGUgTm90ZSBpbnB1dC5cbiAgICBjb25zdCBub3Rlc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5vdGVzVGV4dGFyZWEuaWQgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNUZXh0YXJlYS5uYW1lID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgbm90ZXNUZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIk5vdGVzOlwiLCBub3Rlc1RleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvbi5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwic3VibWl0LWZvcm1cIjtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkNyZWF0ZSBUb0RvXCI7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIGZvcm0gdGhhdCB3aGVuIHN1Ym1pdHRlZCwgYSBUb0RvIG9iamVjdCBpcyBjcmVhdGVkLlxuICAgIHRvRG9BZGRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3Rlc1wiKS52YWx1ZTtcblxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IG5ldyBUb0RvKC4uLlt0b0RvVGl0bGUsIHRvRG9EZXNjcmlwdGlvbiwgdG9Eb0R1ZURhdGUsIHRvRG9Qcmlvcml0eSwgdG9Eb05vdGVzXSlcbiAgICAgICAgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkuYWRkVG9Ebyh0b0RvSXRlbSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIFRvLURvIGl0ZW0gaW4gJ3RvLWRvJyB0YWIgaW1tZWRpYXRlbHkgb25jZSBjcmVhdGVkLlxuICAgICAgICByZW5kZXJUb0RvV2luZG93KGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpKTtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufVxuXG5cbi8vIFJldHVybnMgYSBkaXYgY29udGFpbmluZyBhIGxhYmVsZWQgaW5wdXQuXG5mdW5jdGlvbiBjcmVhdGVGaWVsZERpdihsYWJlbFRleHQsIGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBkaXY7XG59IiwiaW1wb3J0IHsgcmVuZGVyVG9Eb1dpbmRvdyB9IGZyb20gXCIuL3JlbmRlclRvRG9XaW5kb3dcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwVG9Eb0VkaXRvckZvcm0odG9Eb0NhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHRvRG9FZGl0b3JGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdG9Eb0VkaXRvckZvcm0uY2xhc3NOYW1lID0gXCJ0by1kby1hZGRlci1mb3JtXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRWRpdG9yRm9ybSlcblxuICAgIC8vIENyZWF0ZSB0aXRsZSBpbnB1dC5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnRpdGxlO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiVGl0bGU6XCIsIHRpdGxlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBkZXNjcmlwdGlvbiBhcmVhLlxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yb3dzID0gNDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmNvbHMgPSA1MDtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGVzY3JpcHRpb247XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEZXNjcmlwdGlvbjpcIiwgZGVzY3JpcHRpb25UZXh0YXJlYSkpO1xuXG4gICAgLy8gQ3JlYXRlIGR1ZSBkYXRlIGlucHV0LlxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlLWRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kdWVEYXRlO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiRHVlIERhdGU6XCIsIGR1ZURhdGVJbnB1dCkpO1xuXG4gICAgLy8gQ3JlYXRlIFRvRG8gcHJpb3JpdHkgc2VsZWN0aW9uLlxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb25WYWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJpb3JpdHk7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJQcmlvcml0eTpcIiwgcHJpb3JpdHlTZWxlY3QpKTtcblxuICAgIC8vIENyZWF0ZSBOb3RlIGlucHV0LlxuICAgIGNvbnN0IG5vdGVzVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbm90ZXNUZXh0YXJlYS5pZCA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLm5hbWUgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNUZXh0YXJlYS5yb3dzID0gNDtcbiAgICBub3Rlc1RleHRhcmVhLmNvbHMgPSA1MDtcbiAgICBub3Rlc1RleHRhcmVhLnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5ub3RlcztcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIk5vdGVzOlwiLCBub3Rlc1RleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvbi5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwic3VibWl0LWZvcm1cIjtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvbi5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KVxuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0byBmb3JtIHRoYXQgd2hlbiBzdWJtaXR0ZWQsIGEgVG9EbyBvYmplY3QgaXMgY3JlYXRlZC5cbiAgICB0b0RvRWRpdG9yRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcblxuICAgICAgICAvLyBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbi5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIC8vIFNob3cgY29uZmlybWF0aW9uIGJlZm9yZSBlZGl0aW5nLlxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJDb25maXJtIGNoYW5nZXM/XCIpKSB7XG4gICAgICAgICAgICAvLyBUaGUgdXNlciBjbGlja2VkIFwiT0tcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBQYXJzZSBmb3JtIGNvbnRyb2wgdmFsdWVzLlxuICAgICAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3Rlc1wiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCB0byBkby5cbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UudGl0bGUgPSB0b0RvVGl0bGU7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRlc2NyaXB0aW9uID0gdG9Eb0Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kdWVEYXRlID0gdG9Eb0R1ZURhdGU7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByaW9yaXR5ID0gdG9Eb1ByaW9yaXR5O1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5ub3RlcyA9IHRvRG9Ob3RlcztcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGF0ZUFuZFRpbWVDcmVhdGVkID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kYXRlQW5kVGltZUNyZWF0ZWQ7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRhdGVNb2RpZmllZCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IFRvRG8gaXRlbSB3aXRoIHRoZSBUb0RvIGl0ZW0gd2l0aCBhbGwgY2hhbmdlcyBhcHBsaWVkIGluIHRoZSBwYXJlbnQgcHJvamVjdCdzIFwidG9Eb0l0ZW1zXCIgYXJyYXkuXG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByb2plY3QucmVwbGFjZVRvRG8odG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0by1kbyB0YWIuXG4gICAgICAgICAgICByZW5kZXJUb0RvV2luZG93KGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgRE9NIG9uY2Ugc3VibWl0dGVkLlxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufVxuXG5cbi8vIFJldHVybnMgYSBkaXYgY29udGFpbmluZyBhIGxhYmVsZWQgaW5wdXQuXG5mdW5jdGlvbiBjcmVhdGVGaWVsZERpdihsYWJlbFRleHQsIGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBkaXY7XG59IiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcFVwVG9Eb0luZm9DYXJkKHRvRG9DYXJkKSB7XG4gICAgLy8gQ3JlYXRlIGJhY2tncm91bmQgY29udGFpbmVyLlxuICAgIGNvbnN0IGJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0by1kby1pbmZvLWJhY2tncm91bmRcIlxuXG4gICAgLy8gQ3JlYXRlIG1haW4gY29udGFpbmVyLlxuICAgIGNvbnN0IHRvRG9JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tY29udGFpbmVyXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNsb3NlIGRpdlxuICAgIGNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjbG9zZURpdi5jbGFzc05hbWUgPSBcImNsb3NlIGljb25cIjtcbiAgICBjbG9zZURpdi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5DbG9zZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOSwzSDE2LjNINy43SDVBMiwyIDAgMCwwIDMsNVY3LjdWMTYuNFYxOUEyLDIgMCAwLDAgNSwyMUg3LjdIMTYuNEgxOUEyLDIgMCAwLDAgMjEsMTlWMTYuM1Y3LjdWNUEyLDIgMCAwLDAgMTksM00xNS42LDE3TDEyLDEzLjRMOC40LDE3TDcsMTUuNkwxMC42LDEyTDcsOC40TDguNCw3TDEyLDEwLjZMMTUuNiw3TDE3LDguNEwxMy40LDEyTDE3LDE1LjZMMTUuNiwxN1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRGl2KTtcblxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgaW5mby1maWVsZCBkaXZcbiAgICBmdW5jdGlvbiBjcmVhdGVJbmZvRmllbGQobGFiZWwsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGluZm9GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9GaWVsZC5jbGFzc05hbWUgPSBcImluZm8tZmllbGRcIjtcblxuICAgICAgICBjb25zdCBpbmZvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvTGFiZWwuY2xhc3NOYW1lID0gXCJ0by1kby1pbmZvLWxhYmVsXCI7XG4gICAgICAgIGluZm9MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsICsgXCI6XCI7XG4gICAgICAgIGluZm9GaWVsZC5hcHBlbmRDaGlsZChpbmZvTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGluZm9WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9WYWx1ZS5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tdmFsdWVcIjtcbiAgICAgICAgaW5mb1ZhbHVlLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIGluZm9WYWx1ZS5pZCA9IGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9LWluZm9gXG4gICAgICAgIGluZm9GaWVsZC5hcHBlbmRDaGlsZChpbmZvVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBpbmZvRmllbGQ7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGluZm8gZmllbGQgY29udGFpbmVyLlxuICAgIGNvbnN0IGluZm9GaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWNcIik7XG4gICAgaW5mb0ZpZWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5mby1maWVsZC1jb250YWluZXJcIjtcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvRmllbGRDb250YWluZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGluZm8tZmllbGQgZGl2cyBmb3IgZWFjaCBmaWVsZFxuICAgIGluZm9GaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJUaXRsZVwiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnRpdGxlKSk7XG4gICAgaW5mb0ZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIkR1ZSBEYXRlXCIsIGZvcm1hdERhdGUodG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kdWVEYXRlKSkpO1xuICAgIGluZm9GaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJQcm9qZWN0XCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJvamVjdC50aXRsZSkpO1xuICAgIGluZm9GaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJEZXNjcmlwdGlvblwiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRlc2NyaXB0aW9uKSk7XG4gICAgaW5mb0ZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIlByaW9yaXR5XCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJpb3JpdHkpKTtcbiAgICBpbmZvRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiTm90ZXNcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5ub3RlcykpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBtYWluIGNvbnRhaW5lciB0byB0aGUgYmFja2dyb3VuZCBjb250YWluZXJcbiAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9JbmZvQ29udGFpbmVyKTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgY2xvc2UgZGl2XG4gICAgY2xvc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIC8vIEFwcGVuZCB0byBib2R5LlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZENvbnRhaW5lcik7XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVG9Eb0NhcmQgfSBmcm9tIFwiLi9jcmVhdGVUb0RvQ2FyZFwiO1xuaW1wb3J0IHsgcG9wVXBUb0RvQWRkZXJGb3JtIH0gZnJvbSBcIi4vcG9wVXBUb0RvQWRkZXJGb3JtXCI7XG5pbXBvcnQgeyBzb3J0VG9Eb0l0ZW1zIH0gZnJvbSBcIi4vc29ydFRvRG9JdGVtc1wiO1xuY29uc3QgY29tcGFyZVdlZWsgPSByZXF1aXJlKFwiY29tcGFyZS13ZWVrXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9Eb1dpbmRvdyhjdXJyZW50UHJvamVjdCkge1xuICAgIC8vIEFjY2VzcyBjdXJyZW50IHRvIGRvIHdpbmRvdy5cbiAgICBjb25zdCBjdXJyZW50VG9Eb1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8td2luZG93XCIpO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHRvIGRvIHdpbmRvdy5cbiAgICBjb25zdCBuZXdUb0RvV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb0RvV2luZG93LmNsYXNzTmFtZSA9IFwidG8tZG8td2luZG93XCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGN1cnJlbnQgcGFyZW50IHByb2plY3QgY2FyZCB0byB0aGUgdG8tZG8gd2luZG93LlxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQgPSBjcmVhdGVDdXJyZW50UHJvamVjdE5hbWVDYXJkKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgc29ydGVyLlxuICAgIGNvbnN0IHNvcnRlciA9IGNyZWF0ZVNvcnRlcihjdXJyZW50UHJvamVjdCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRvLWRvIHRhYi5cbiAgICBjb25zdCB0b0RvVGFiID0gY3JlYXRlVG9Eb1RhYihjdXJyZW50UHJvamVjdCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRvLWRvIGFkZGVyIGJ1dHRvbi5cbiAgICBjb25zdCB0b0RvQWRkZXJCdXR0b24gPSBjcmVhdGVUb0RvQWRkZXJCdXR0b24oKTtcblxuICAgIC8vIEFwcGVuZCBhbGwgY3JlYXRlZCBlbGVtZW50cyB0byB0aGUgbmV3IHRvLWRvIHdpbmRvdy5cbiAgICBuZXdUb0RvV2luZG93LmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQpO1xuICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQoc29ydGVyKTtcbiAgICBuZXdUb0RvV2luZG93LmFwcGVuZENoaWxkKHRvRG9UYWIpO1xuICAgIFxuICAgIC8vIE9ubHkgYWRkIHRoZSB0by1kbyBhZGRlciBidXR0b24gdG8gbm9uIFwiQ29tcGxldGVcIiBwcm9qZWN0cy5cbiAgICBpZiAoY3VycmVudFByb2plY3QuaWQgIT09IFwiY29tcGxldGVkLXByb2plY3RcIiAmJiBjdXJyZW50UHJvamVjdC5pZCAhPT0gXCJ0b2RheS1wcm9qZWN0XCIgJiYgY3VycmVudFByb2plY3QuaWQgIT09IFwidGhpcy13ZWVrLXByb2plY3RcIikge1xuICAgICAgICBuZXdUb0RvV2luZG93LmFwcGVuZENoaWxkKHRvRG9BZGRlckJ1dHRvbik7XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSBjdXJyZW50IHRvIGRvIHdpbmRvdyB3aXRoIG5ldyB0byBkbyB3aW5kb3cuXG4gICAgY3VycmVudFRvRG9XaW5kb3cucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3VG9Eb1dpbmRvdywgY3VycmVudFRvRG9XaW5kb3cpO1xufVxuXG5cbi8vIENyZWF0ZSBhIGNhcmQgY29udGFpbmluZyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBwYXJlbnQgcHJvamVjdC5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRQcm9qZWN0TmFtZUNhcmQoY3VycmVudFByb2plY3QpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50UHJvamVjdE5hbWVDYXJkLmNsYXNzTmFtZSA9IFwicGFyZW50LXByb2plY3QtbmFtZVwiXG4gICAgY3VycmVudFByb2plY3ROYW1lQ2FyZC50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvcnRlcihjdXJyZW50UHJvamVjdCkge1xuXG4gICAgLy8gQ3JlYXRlIGRpdiB0byBjb250YWluIHRoZSBzb3J0ZXIuXG4gICAgY29uc3Qgc29ydGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzb3J0ZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJzb3J0LWNvbnRhaW5lclwiXG5cbiAgICAvLyBDcmVhdGUgYSBzZWxlY3QgZWxlbWVudCB0aGF0IHdpbGwgc2VydmUgYXMgYSB3YXkgdG8gY2hvb3NlIHNvcnRpbmcgY3JpdGVyaWEuXG4gICAgY29uc3Qgc29ydGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzb3J0ZXIuaWQgPSBcInNvcnRlclwiO1xuICAgIHNvcnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0ZXIpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBsYWJlbCBmb3IgdGhlIHNvcnRlci5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgc29ydGVyLmlkKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiU29ydCBieTpcIjtcbiAgICBzb3J0ZXIuYmVmb3JlKGxhYmVsKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YSB2YWx1ZXMgb2Ygb3B0aW9ucyB0byBiZSBzZWxlY3RlZC5cbiAgICBjb25zdCBzb3J0aW5nT3B0aW9ucyA9IFtcbiAgICAgICAgeyB2YWx1ZTogXCJ0aW1lLWNyZWF0ZWQtYXNjZW5kaW5nXCIsIHRleHQ6IFwiQ3JlYXRlZCAoT2xkZXN0IHRvIE5ld2VzdClcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcInRpbWUtY3JlYXRlZC1kZXNjZW5kaW5nXCIsIHRleHQ6IFwiQ3JlYXRlZCAoTmV3ZXN0IHRvIE9sZGVzdClcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImRhdGUtYXNjZW5kaW5nXCIsIHRleHQ6IFwiRGF0ZSAoYXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGF0ZS1kZXNjZW5kaW5nXCIsIHRleHQ6IFwiRGF0ZSAoZGVzY2VuZGluZylcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcIm5hbWUtYXNjZW5kaW5nXCIsIHRleHQ6IFwiTmFtZSAoYXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwibmFtZS1kZXNjZW5kaW5nXCIsIHRleHQ6IFwiTmFtZSAoZGVzY2VuZGluZylcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcInByaW9yaXR5LWFzY2VuZGluZ1wiLCB0ZXh0OiBcIlByaW9yaXR5IChMb3dlc3QgdG8gSGlnaGVzdClcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcInByaW9yaXR5LWRlc2NlbmRpbmdcIiwgdGV4dDogXCJQcmlvcml0eSAoSGlnaGVzdCB0byBMb3dlc3QpXCIgfVxuICAgIF1cblxuICAgIC8vIEdldCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uIGZyb20gY3VycmVudCBzb3J0ZXIuXG4gICAgbGV0IGN1cnJlbnRTb3J0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvcnRlclwiKTtcbiAgICBcbiAgICAvLyBTZWxlY3RlZCBvcHRpb24gb2YgdGhlIG5ldyBzb3J0ZXIgdG8gYmUgY3JlYXRlZC5cbiAgICBsZXQgbmV3Q3VycmVudFNvcnRPcHRpb247XG4gICAgXG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3Qgc29ydGVyIHRvIGJlIHJlbmRlcmVkLCBzZXQgdGhlIG5ldyBzb3J0ZXIgc2VsZWN0ZWQgb3B0aW9uIHRvIFwiQ3JlYXRlZCAoT2xkZXN0IHRvIE5ld2VzdClcIi5cbiAgICBpZiAoIWN1cnJlbnRTb3J0ZXIpIHtcbiAgICAgICAgbmV3Q3VycmVudFNvcnRPcHRpb24gPSBzb3J0aW5nT3B0aW9ucy5maW5kKHNvcnRpbmdPcHRpb24gPT4gc29ydGluZ09wdGlvbi50ZXh0ID09PSBcIkNyZWF0ZWQgKE9sZGVzdCB0byBOZXdlc3QpXCIpO1xuICAgIH1cbiAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgZmlyc3Qgc29ydGVyLCBzZXQgdGhlIG5ldyBzb3J0ZXIgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBjdXJyZW50IHNvcnRlciBzZWxlY3RlZCBvcHRpb24uXG4gICAgZWxzZSB7XG4gICAgICAgIG5ld0N1cnJlbnRTb3J0T3B0aW9uID0gY3VycmVudFNvcnRlci52YWx1ZTtcbiAgICB9XG5cbiAgICBzb3J0aW5nT3B0aW9ucy5mb3JFYWNoKHNvcnRpbmdPcHRpb24gPT4ge1xuICAgICAgICAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgLy8gQWRkIG9wdGlvbiB2YWx1ZS5cbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHNvcnRpbmdPcHRpb24udmFsdWUpO1xuXG4gICAgICAgIC8vIEFkZCBvcHRpb24gdGV4dC1jb250ZW50LlxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzb3J0aW5nT3B0aW9uLnRleHQ7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvbiBvZiBjdXJyZW50IHNvcnRlciBjYXJyeSBvdmVyIHRvIHRoZSBuZXcgc29ydGVyLlxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBzb3J0aW5nT3B0aW9uLnZhbHVlID09PSBuZXdDdXJyZW50U29ydE9wdGlvbjtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIG9wdGlvbiB0byBzb3J0ZXIgc2VsZWN0IGVsZW1lbnQuXG4gICAgICAgIHNvcnRlci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG5cbiAgICAvLyBSZS1yZW5kZXIgdG8tZG8gdGFiIHNvIHRoYXQgdG8tZG8gaXRlbSdzIG5ldyBzb3J0IGNyaXRlcmEgd2lsbCBiZSByZWZyZWN0ZWRcbiAgICBzb3J0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb0RvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby10YWJcIik7XG4gICAgICAgIGN1cnJlbnRUb0RvVGFiLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKGNyZWF0ZVRvRG9UYWIoY3VycmVudFByb2plY3QpLCBjdXJyZW50VG9Eb1RhYik7XG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG9UYWIoY3VycmVudFByb2plY3QpIHtcblxuICAgIC8vIENyZWF0ZSB0by1kbyB0YWIuXG4gICAgY29uc3QgdG9Eb1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb1RhYi5jbGFzc05hbWUgPSBcInRvLWRvLXRhYlwiO1xuXG4gICAgLy8gQXJyYXkgZm9yIHN0b3JpbmcgYWxsIHVuc29ydGVkIFRvRG8gaXRlbXMuXG4gICAgbGV0IHVuc29ydGVkVG9Eb0l0ZW1zID0gW107XG5cbiAgICAvLyBSZW5kZXIgYWxsIFRvRG9zIGFjcm9zcyBhbGwgcHJvamVjdHMgaWYgdGhlIHByb2plY3QgaXMgXCJIb21lXCJcbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09IFByb2plY3QuaG9tZSkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9JdGVtc1xuICAgICAgICAgICAgLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHVuc29ydGVkVG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBSZW5kZXIgYWxsIGNvbXBsZXRlZCBUb0RvcyBmcm9tIGRpZmZlcmVudCBQcm9qZWNycyBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgaXMgXCJDb21wbGV0ZWRcIlxuICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID09PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIgKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvRG9JdGVtLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIFJlbmRlciBhbGwgVG9kYXkgVG9Eb3MgZnJvbSBkaWZmZXJlbnQgUHJvamVjcnMgaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IGlzIFwiVG9kYXlcIlxuICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID09PSBcInRvZGF5LXByb2plY3RcIiApIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBkYXRlLlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBjdXJyZW50IGRhdGUgc2ltaWxhciB0byB0aGUgZGF0ZSBzdHJ1Y3R1cmUgb2YgJ2R1ZURhdGUnIHByb3BlcnR5IG9mIFRvRG8gb2JqZWN0LlxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZEN1cnJlbnREYXRlID0gYCR7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX0tJHsoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0tJHtjdXJyZW50RGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgICAgICAgICAgICAgaWYgKHRvRG9JdGVtLmR1ZURhdGUgPT09IGZvcm1hdHRlZEN1cnJlbnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc29ydGVkVG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGFsbCBUaGlzIFdlZWsgVG9Eb3MgZnJvbSBkaWZmZXJlbnQgUHJvamVjcnMgaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IGlzIFwiVGhpcyBXZWVrXCJcbiAgICBlbHNlIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiICkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9JdGVtc1xuICAgICAgICAgICAgLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIEdldCBjdXJyZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IGR1ZSBkYXRlLlxuICAgICAgICAgICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IHRvRG9JdGVtLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBkdWUgZGF0ZSBvZiBjdXJyZW50IHRvIGRvIGlzIGluIGN1cnJlbnQgXCJ0aGlzIHdlZWtcIi5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVdlZWsoY3VycmVudERhdGUsIGR1ZURhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc29ydGVkVG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gSWYgY3VycmVudCBwcm9qZWN0IGlzIG5vdCBcIkhvbWVcIiBhbmQgbm90IFwiQ29tcGxldGVkXCIsIG9ubHkgcmVuZGVyIGl0cyByZXNwZWN0aXZlIFRvRG8gaXRlbXMuXG4gICAgZWxzZSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRvRG9JdGVtcy5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgIHVuc29ydGVkVG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0LlxuICAgIGNvbnN0IHNvcnRlZFRvRG9JdGVtcyA9IHNvcnRUb0RvSXRlbXModW5zb3J0ZWRUb0RvSXRlbXMpO1xuXG4gICAgLy8gUmVuZGVyIGFsbCBUb0RvIGNhcmRzIHRvIFRvRG8gdGFiLlxuICAgIHNvcnRlZFRvRG9JdGVtcy5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgdG9Eb1RhYi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvQ2FyZCh0b0RvSXRlbSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvRG9UYWI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVG9Eb0FkZGVyQnV0dG9uKCkge1xuXG4gICAgLy8gQ3JlYXRlIGEgYnV0dG9uIGVsZW1lbnRcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInRvLWRvLWFkZGVyXCI7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXcgVG9Eb1wiO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdGhhdCBwb3BzIHRoZSB0byBkbyBhZGRlciBmb3JtIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcFVwVG9Eb0FkZGVyRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBjcmVhdGVkIGJ1dHRvbiBlbGVtZW50XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0iLCJpbXBvcnQgeyByZW5kZXJUb0RvV2luZG93IH0gZnJvbSBcIi4vcmVuZGVyVG9Eb1dpbmRvd1wiO1xuXG5sZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcblxuICAgIHJlbmRlclRvRG9XaW5kb3coY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXR1cm4gY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0O1xufSIsIi8qKlxuICogU29ydHMgYW4gYXJyYXkgb2YgdG8tZG8gaXRlbXMgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHNvcnRpbmcgY3JpdGVyaWEuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdW5zb3J0ZWRUb0RvSXRlbXMgLSBBbiBhcnJheSBvZiB0by1kbyBpdGVtcyB0byBiZSBzb3J0ZWQuXG4gKiBAcmV0dXJucyB7QXJyYXl9ICBBbiBhcnJheSBvZiBzb3J0ZWQgdG8tZG8gaXRlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VG9Eb0l0ZW1zKHVuc29ydGVkVG9Eb0l0ZW1zKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHNvcnRlciBvciBzZXQgdGhlIGRlZmF1bHQgc29ydCBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0Q3JpdGVyaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvcnRlclwiKT8udmFsdWUgfHwgXCJ0aW1lLWNyZWF0ZWQtYXNjZW5kaW5nXCI7XG5cbiAgICAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIHNvcnQgY3JpdGVyaWEgdG8gY29tcGFyaXNvbiBmdW5jdGlvbnMuXG4gICAgY29uc3Qgc29ydEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgXCJkYXRlLWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMS5kdWVEYXRlKSAtIG5ldyBEYXRlKFRvRG8yLmR1ZURhdGUpLFxuICAgICAgICBcImRhdGUtZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMi5kdWVEYXRlKSAtIG5ldyBEYXRlKFRvRG8xLmR1ZURhdGUpLFxuICAgICAgICBcIm5hbWUtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IFRvRG8xLnRpdGxlLmxvY2FsZUNvbXBhcmUoVG9EbzIudGl0bGUpLFxuICAgICAgICBcIm5hbWUtZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBUb0RvMi50aXRsZS5sb2NhbGVDb21wYXJlKFRvRG8xLnRpdGxlKSxcbiAgICAgICAgXCJ0aW1lLWNyZWF0ZWQtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8xLmRhdGVBbmRUaW1lQ3JlYXRlZCkgLSBuZXcgRGF0ZShUb0RvMi5kYXRlQW5kVGltZUNyZWF0ZWQpLFxuICAgICAgICBcInRpbWUtY3JlYXRlZC1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8yLmRhdGVBbmRUaW1lQ3JlYXRlZCkgLSBuZXcgRGF0ZShUb0RvMS5kYXRlQW5kVGltZUNyZWF0ZWQpLFxuICAgICAgICBcInByaW9yaXR5LWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBwcmlvcml0eUxldmVsKFRvRG8xKSAtIHByaW9yaXR5TGV2ZWwoVG9EbzIpLFxuICAgICAgICBcInByaW9yaXR5LWRlc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gcHJpb3JpdHlMZXZlbChUb0RvMikgLSBwcmlvcml0eUxldmVsKFRvRG8xKSxcbiAgICB9O1xuXG4gICAgLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcmlvcml0eSBsZXZlbC5cbiAgICBjb25zdCBwcmlvcml0eUxldmVsID0gKFRvRG8pID0+IHtcbiAgICAgICAgc3dpdGNoIChUb0RvLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgY2FzZSBcIk1lZGl1bVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgY2FzZSBcIkxvd1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gSGFuZGxlIHVuZXhwZWN0ZWQgcHJpb3JpdHkgdmFsdWVzLlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNvcnQgdGhlIGFycmF5IHVzaW5nIHRoZSBzZWxlY3RlZCBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0ZWRUb0RvSXRlbXMgPSB1bnNvcnRlZFRvRG9JdGVtcy5zb3J0KHNvcnRGdW5jdGlvbnNbc29ydENyaXRlcmlhXSB8fCAoKCkgPT4gMCkpO1xuXG4gICAgcmV0dXJuIHNvcnRlZFRvRG9JdGVtcztcbn1cbiIsIi8qISAoYykgMjAyMCBBbmRyZWEgR2lhbW1hcmNoaSAqL1xuXG5jb25zdCB7cGFyc2U6ICRwYXJzZSwgc3RyaW5naWZ5OiAkc3RyaW5naWZ5fSA9IEpTT047XG5jb25zdCB7a2V5c30gPSBPYmplY3Q7XG5cbmNvbnN0IFByaW1pdGl2ZSA9IFN0cmluZzsgICAvLyBpdCBjb3VsZCBiZSBOdW1iZXJcbmNvbnN0IHByaW1pdGl2ZSA9ICdzdHJpbmcnOyAvLyBpdCBjb3VsZCBiZSAnbnVtYmVyJ1xuXG5jb25zdCBpZ25vcmUgPSB7fTtcbmNvbnN0IG9iamVjdCA9ICdvYmplY3QnO1xuXG5jb25zdCBub29wID0gKF8sIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgcHJpbWl0aXZlcyA9IHZhbHVlID0+IChcbiAgdmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUgPyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcbik7XG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoXywgdmFsdWUpID0+IChcbiAgdHlwZW9mIHZhbHVlID09PSBwcmltaXRpdmUgPyBuZXcgUHJpbWl0aXZlKHZhbHVlKSA6IHZhbHVlXG4pO1xuXG5jb25zdCByZXZpdmUgPSAoaW5wdXQsIHBhcnNlZCwgb3V0cHV0LCAkKSA9PiB7XG4gIGNvbnN0IGxhenkgPSBbXTtcbiAgZm9yIChsZXQga2UgPSBrZXlzKG91dHB1dCksIHtsZW5ndGh9ID0ga2UsIHkgPSAwOyB5IDwgbGVuZ3RoOyB5KyspIHtcbiAgICBjb25zdCBrID0ga2VbeV07XG4gICAgY29uc3QgdmFsdWUgPSBvdXRwdXRba107XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlKSB7XG4gICAgICBjb25zdCB0bXAgPSBpbnB1dFt2YWx1ZV07XG4gICAgICBpZiAodHlwZW9mIHRtcCA9PT0gb2JqZWN0ICYmICFwYXJzZWQuaGFzKHRtcCkpIHtcbiAgICAgICAgcGFyc2VkLmFkZCh0bXApO1xuICAgICAgICBvdXRwdXRba10gPSBpZ25vcmU7XG4gICAgICAgIGxhenkucHVzaCh7aywgYTogW2lucHV0LCBwYXJzZWQsIHRtcCwgJF19KTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgb3V0cHV0W2tdID0gJC5jYWxsKG91dHB1dCwgaywgdG1wKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0W2tdICE9PSBpZ25vcmUpXG4gICAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCB2YWx1ZSk7XG4gIH1cbiAgZm9yIChsZXQge2xlbmd0aH0gPSBsYXp5LCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge2ssIGF9ID0gbGF6eVtpXTtcbiAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCByZXZpdmUuYXBwbHkobnVsbCwgYSkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBzZXQgPSAoa25vd24sIGlucHV0LCB2YWx1ZSkgPT4ge1xuICBjb25zdCBpbmRleCA9IFByaW1pdGl2ZShpbnB1dC5wdXNoKHZhbHVlKSAtIDEpO1xuICBrbm93bi5zZXQodmFsdWUsIGluZGV4KTtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlID0gKHRleHQsIHJldml2ZXIpID0+IHtcbiAgY29uc3QgaW5wdXQgPSAkcGFyc2UodGV4dCwgUHJpbWl0aXZlcykubWFwKHByaW1pdGl2ZXMpO1xuICBjb25zdCB2YWx1ZSA9IGlucHV0WzBdO1xuICBjb25zdCAkID0gcmV2aXZlciB8fCBub29wO1xuICBjb25zdCB0bXAgPSB0eXBlb2YgdmFsdWUgPT09IG9iamVjdCAmJiB2YWx1ZSA/XG4gICAgICAgICAgICAgIHJldml2ZShpbnB1dCwgbmV3IFNldCwgdmFsdWUsICQpIDpcbiAgICAgICAgICAgICAgdmFsdWU7XG4gIHJldHVybiAkLmNhbGwoeycnOiB0bXB9LCAnJywgdG1wKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnkgPSAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkgPT4ge1xuICBjb25zdCAkID0gcmVwbGFjZXIgJiYgdHlwZW9mIHJlcGxhY2VyID09PSBvYmplY3QgP1xuICAgICAgICAgICAgKGssIHYpID0+IChrID09PSAnJyB8fCAtMSA8IHJlcGxhY2VyLmluZGV4T2YoaykgPyB2IDogdm9pZCAwKSA6XG4gICAgICAgICAgICAocmVwbGFjZXIgfHwgbm9vcCk7XG4gIGNvbnN0IGtub3duID0gbmV3IE1hcDtcbiAgY29uc3QgaW5wdXQgPSBbXTtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGxldCBpID0gK3NldChrbm93biwgaW5wdXQsICQuY2FsbCh7Jyc6IHZhbHVlfSwgJycsIHZhbHVlKSk7XG4gIGxldCBmaXJzdFJ1biA9ICFpO1xuICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuICAgIGZpcnN0UnVuID0gdHJ1ZTtcbiAgICBvdXRwdXRbaV0gPSAkc3RyaW5naWZ5KGlucHV0W2krK10sIHJlcGxhY2UsIHNwYWNlKTtcbiAgfVxuICByZXR1cm4gJ1snICsgb3V0cHV0LmpvaW4oJywnKSArICddJztcbiAgZnVuY3Rpb24gcmVwbGFjZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBmaXJzdFJ1biA9ICFmaXJzdFJ1bjtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgYWZ0ZXIgPSAkLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlb2YgYWZ0ZXIpIHtcbiAgICAgIGNhc2Ugb2JqZWN0OlxuICAgICAgICBpZiAoYWZ0ZXIgPT09IG51bGwpIHJldHVybiBhZnRlcjtcbiAgICAgIGNhc2UgcHJpbWl0aXZlOlxuICAgICAgICByZXR1cm4ga25vd24uZ2V0KGFmdGVyKSB8fCBzZXQoa25vd24sIGlucHV0LCBhZnRlcik7XG4gICAgfVxuICAgIHJldHVybiBhZnRlcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRvSlNPTiA9IGFueSA9PiAkcGFyc2Uoc3RyaW5naWZ5KGFueSkpO1xuZXhwb3J0IGNvbnN0IGZyb21KU09OID0gYW55ID0+IHBhcnNlKCRzdHJpbmdpZnkoYW55KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vanNfbW9kdWxlcy9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL2pzX21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL2pzX21vZHVsZXMvc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgcG9wVXBQcm9qZWN0QWRkZXJGb3JtIH0gZnJvbSBcIi4vanNfbW9kdWxlcy9wb3BVcFByb2plY3RBZGRlckZvcm0uanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgLy8gTG9hZCBwcm9qZWN0cyBmcm9tIHN0b3JhZ2UgYW5kIHNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgdG8gXCJIb21lXCIuXG4gICAgUHJvamVjdC5sb2FkUHJvamVjdHMoKTtcbiAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoUHJvamVjdC5ob21lKTtcblxuICAgIC8vIExvYWQgcHJvamVjdHMgdG8gdGhlIHRhYnMsIHNldCB1cCBwcm9qZWN0IGFkZGVyIGJ1dHRvbiwgYW5kIHByb2plY3QgZHJvcGRvd24gYnV0dG9uLlxuICAgIGxvYWRQcm9qZWN0c1RvVGFicygpO1xuICAgIHNldFVwUHJvamVjdEFkZGVyKCk7XG4gICAgc2V0VXBQcm9qZWN0RHJvcGRvd24oKTtcbn0pO1xuXG4vLyBMb2FkIHByb2plY3RzIHRvIHRoZSB0YWJzLlxuZnVuY3Rpb24gbG9hZFByb2plY3RzVG9UYWJzKCkge1xuICAgIGNvbnN0IHByb2plY3RzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy10YWJcIik7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyID0gcHJvamVjdHNUYWIucXVlcnlTZWxlY3RvcihcIi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIgPSBwcm9qZWN0c1RhYi5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm9qZWN0IGlzIGEgZGVmYXVsdCBwcm9qZWN0IG9yIG5vdC5cbiAgICAgICAgaWYgKGlzRGVmYXVsdFByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIENoZWNrIGlmIGEgcHJvamVjdCBpcyBhIGRlZmF1bHQgcHJvamVjdC5cbmZ1bmN0aW9uIGlzRGVmYXVsdFByb2plY3QocHJvamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIHByb2plY3QuaWQgPT09IFwiaG9tZS1wcm9qZWN0XCIgfHxcbiAgICAgICAgcHJvamVjdC5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiIHx8XG4gICAgICAgIHByb2plY3QuaWQgPT09IFwidG9kYXktcHJvamVjdFwiIHx8XG4gICAgICAgIHByb2plY3QuaWQgPT09IFwidGhpcy13ZWVrLXByb2plY3RcIlxuICAgICk7XG59XG5cbi8vIFNldCB1cCB0aGUgcHJvamVjdCBhZGRlciBidXR0b24uXG5mdW5jdGlvbiBzZXRVcFByb2plY3RBZGRlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0QWRkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkZXJcIik7XG4gICAgcHJvamVjdEFkZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIFBvcCB1cCB0aGUgcHJvamVjdCBhZGRlciBmb3JtIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAgICBwb3BVcFByb2plY3RBZGRlckZvcm0oKTtcbiAgICB9KTtcbn1cblxuLy8gU2V0IHVwIHRoZSBwcm9qZWN0IGRyb3Bkb3duIGJ1dHRvbi5cbmZ1bmN0aW9uIHNldFVwUHJvamVjdERyb3Bkb3duKCkge1xuICAgIGNvbnN0IHByb2plY3REcm9wZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93blwiKTtcbiAgICBwcm9qZWN0RHJvcGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZGVyXCIpXG5cbiAgICAgICAgLy8gVG9nZ2xlIHRoZSAnYWN0aXZlJyBhbmQgJ2luYWN0aXZlJyBjbGFzc2VzIGZvciB0aGUgY3JlYXRlZCBwcm9qZWN0cyBjb250YWluZXIuXG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgJ2FjdGl2ZScgYW5kICdpbmFjdGl2ZScgY2xhc3NlcyBmb3IgdGhlIHByb2plY3QgYWRkZXIuXG4gICAgICAgIHByb2plY3RBZGRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIHByb2plY3RBZGRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9