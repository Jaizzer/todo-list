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
    overflow: auto;
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
        height: 125px;
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
        width: 80px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\n.icon {\n    height: 10px;\n    width: 10px;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap');\n\n:root {\n    --text: #10090c;\n    --background: #fdfcfc;\n    --primary: #b7d7c9;\n    --secondary: #d8e7e9;\n    --accent: #579d5a;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    background-color: grey;\n}\n\n/* Content Container */\n.content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n/* Dashboard */\n.dashboard {\n    background-color: black;\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n    overflow: auto;\n}\n\n.logo {\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: white;\n}\n\n.projects-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* Default Projects Container */\n.default-projects-container {\n    display: grid;\n    gap: 10px;\n}\n\n/* Created Projects Container */\n.created-projects-container.inactive {\n    display: none;\n}\n\n.created-projects-container.active {\n    margin-left: 13px;\n    border-left: 3px solid white;\n    display: grid;\n    grid-auto-rows: 40px;\n    gap: 3px;\n\n    max-height: 200px;\n    overflow: scroll;\n}\n\n.created-projects-container.active .project-card {\n    align-items: center;\n}\n\n.created-projects-container .delete, \n.created-projects-container .edit {\n    height: 20px;\n}\n\n.created-projects-container .project-name {\n    height: 45px;\n    padding: 15px 0 ;\n}\n\n/* Project Card */\n.project-card {\n    padding: 5px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 1fr 25px 25px;\n    gap: 5px;\n    align-content: center;\n}\n\n.project-card button {\n    height: 20px;\n}\n\n.project-card:hover,\n.project-adder:hover {\n    background-color: grey;\n}\n\n.created-projects-container.active>* {\n    margin-left: 10px;\n    padding: 4px;\n    border-radius: 6px;\n    font-size: 14px;\n    color: white;\n}\n\n/* Project and Dropdown Icons */\n#home-project,\n#completed-project,\n#today-project,\n#this-week-project,\n#created-projects-dropdown {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: start;\n    grid-template-columns: auto 1fr;\n    color: white;\n}\n\n#home-project .icon,\n#completed-project .icon,\n#today-project .icon,\n#this-week-project .icon,\n#created-projects-dropdown .icon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: black;\n    height: 17px;\n    width: 17px;\n}\n\n#created-projects-dropdown {\n    border: 2px solid grey;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: white;\n}\n\n.created-projects-container.active .project-name,\n.to-do-title,\n.parent-project-name {\n    display: grid;\n    align-content: center;\n    overflow: auto;\n}\n\n/* Project Adder */\n.project-adder.active {\n    padding: 5px;\n    border: 0px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 20px auto;\n    grid-template-rows: 20px;\n    gap: 10px;\n    justify-content: start;\n    align-items: center;\n    justify-items: start;\n    background-color: transparent;\n    color: white;\n}\n\n.project-adder.active:hover {\n    background-color: grey;\n}\n\n.project-adder.inactive {\n    display: none;\n}\n\n.project-adder .icon,\n.to-do-adder .icon {\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n/* To-Do Window */\n.to-do-window {\n    background-color: rgb(187, 181, 181);\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto 1fr;\n    overflow: hidden;\n    align-content: start;\n    gap: 10px;\n}\n\n.parent-project-name {\n    padding-bottom: 10px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.sort-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 3px;\n}\n\nlabel[for=\"sorter\"] {\n    font-size: 14px;\n}\n\n#sorter {\n    color: black;\n    background-color: white;\n    display: block;\n    width: 200px;\n    height: 25px;\n\n    border: 2px solid grey;\n    border-radius: 6px;\n}\n\n#sorter:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\n\n/* To-Do Tab */\n.to-do-tab {\n    grid-column: 1 / 3;\n    display: grid;\n    grid-auto-rows: 65px;\n    align-content: start;\n    gap: 5px;\n    overflow: auto;\n}\n\n/* To-Do Container */\n.to-do-container {\n    padding: 10px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 25px 1fr auto 25px 25px 25px;\n    align-items: center;\n    gap: 5px;\n    align-content: center;\n    background-color: white;\n}\n\n.to-do-title {\n    height: 50px;\n}\n\n.to-do-due-date {\n    height: 20px;\n    width: 125px;\n    padding: 3px;\n    border: 2px solid;\n    border-radius: 5px;\n\n    font-size: 13px;\n    text-transform: uppercase;\n\n    display: grid;\n    align-content: center;\n}\n\n.to-do-due-date.upcoming {\n    border-color: #6dcb68;\n    color: #6dcb68;\n}\n\n.to-do-due-date.late {\n    border-color: #d0645d;\n    color: #d0645d;\n}\n\n/* To-Do Adder */\n.to-do-adder {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    align-self: end;\n    justify-self: end;\n\n    width: 120px;\n    padding: 10px;\n    border: 0px;\n    border-radius: 6px;\n    font-size: 15px;\n    font-weight: 700;\n    color: black;\n    text-align: justify;\n    background-color: white;\n\n    display: grid;\n    align-content: center;\n\n    text-align: center;\n}\n\n.to-do-adder,\n#sorter {\n    height: 30px;\n}\n\n.to-do-adder:hover,\n.to-do-adder:active {\n    background-color: black;\n    color: white;\n}\n\n/* To-Do Info Background */\n.to-do-info-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    backdrop-filter: blur(5px);\n    overflow: auto;\n}\n\n/* To-Do Info Container */\n.to-do-info-container {\n    margin: 25px 0;\n    width: 400px;\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    max-width: 80%;\n    height: 600px;\n    overflow: hidden;\n}\n\n.info-field-container {\n    padding-top: 5px;\n    padding-right: 3px;\n    padding-left: 3px;\n    padding-bottom: 30px;\n    height: 550px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n\n    overflow-y: auto;\n}\n\n.close {\n    padding-bottom: 10px;\n    display: grid;\n    justify-content: start;\n\n    height: auto;\n    width: auto;\n}\n\n.close .icon {\n    width: 20px;\n    height: 20px;\n}\n\n.close .icon:hover {\n    fill: red;\n}\n\n.info-field {\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr;\n}\n\n.to-do-info-label {\n    width: 100%;\n    font-weight: 600;\n}\n\n.to-do-info-value {\n    border: 2px solid grey;\n    border-radius: 6px;\n    padding: 5px;\n    overflow: auto;\n    word-wrap: break-word;\n    width: 100%;\n    overflow: auto;\n}\n\n#title-info,\n#project-info {\n    height: 30px;\n}\n\n#description-info,\n#notes-info {\n    height: 90px;\n}\n\n/* Form Container */\n.form-container {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(101, 101, 101, 0.22);\n    backdrop-filter: blur(1px);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    overflow: auto;\n}\n\n/* Form Styles */\nform {\n    width: 300px;\n    background-color: white;\n    border-radius: 10px;\n    padding: 25px;\n    display: grid;\n    gap: 10px;\n}\n\ntextarea {\n    resize: none;\n}\n\nform input,\nform select,\nform textarea {\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2px solid rgb(215, 211, 211);\n    padding: 5px 7px;\n}\n\nform input:focus,\nform select:focus,\nform textarea:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\ninput[type=submit],\ninput[type=button] {\n    width: 100%;\n    height: 25px;\n    border-radius: 5px;\n    border: 0px;\n    background-color: rgb(82, 77, 77);\n    color: white;\n}\n\ninput[type=submit]:hover,\ninput[type=button]:hover {\n    border-color: black;\n    background-color: black;\n}\n\n.delete,\n.edit {\n    border: none;\n    background-color: transparent;\n}\n\n/* Icon Visibility */\n.project-card .icon,\n.to-do-container .icon {\n    display: block;\n    height: 16px;\n    width: 16px;\n}\n\n.project-card .icon {\n    fill: white;\n}\n\n.to-do-container .icon {\n    fill: black;\n}\n\n.delete:hover .icon {\n    display: block;\n    fill: red;\n}\n\n.edit:hover .icon {\n    display: block;\n    fill: green;\n}\n\n/* Completed To-Do Style */\n.to-do-container.completed {\n    background-color: rgb(173, 238, 173);\n}\n\n\n@media (max-width: 650px) {\n\n    #home-project,\n    #completed-project,\n    #today-project,\n    #this-week-project,\n    #created-projects-dropdown {\n        white-space: nowrap;\n    }\n\n    /* Adjust the dashboard and to-do window to stack on top of each other */\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr;\n    }\n\n    .projects-tab * {\n        font-size: 13px;\n    }\n\n    .projects-tab {\n        gap: 3px;\n    }\n\n    .created-projects-container.active {\n        height: 125px;\n    }\n\n    #home-project .icon,\n    #completed-project .icon,\n    #today-project .icon,\n    #this-week-project .icon,\n    #created-projects-dropdown .icon,\n    .project-adder .icon {\n        width: 15px;\n        height: 15px;\n    }\n\n    .logo {\n        font-size: 16px;\n    }\n\n    .default-projects-container {\n        padding: 0 0 10px 0;\n        grid-auto-flow: column;\n\n        gap: 1px;\n        width: 100%;\n        overflow: auto;\n    }\n\n    .to-do-container {\n        height: 50px;\n        gap: 4px;\n    }\n\n    .to-do-title {\n        font-size: 12px;\n    }\n\n    .to-do-due-date.late,\n    .to-do-due-date.upcoming {\n        font-size: 10px;\n    }\n\n    .to-do-due-date.late,\n    .to-do-due-date.upcoming {\n        width: 100px;\n    }\n\n    .parent-project-name {\n        font-size: 17px;\n    }\n\n    #sorter,\n    label [for=\"sorter\"],\n    .to-do-adder {\n        font-size: 12px;\n    }\n\n    #sorter {\n        width: 170px;\n    }\n\n    .to-do-adder {\n        width: 80px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyx3REFBYTtBQUN2Qyx1QkFBdUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRWhEO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTs7QUFFQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFNBQVMsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFFBQVEsTUFBTSxTQUFTLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUsscURBQXFELG1CQUFtQixrQkFBa0IsR0FBRyxpRkFBaUYsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixX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O0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY29tcGFyZS13ZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZ2VuZXJhdGUtdW5pcXVlLWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9pcy1kYXRlLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvd2Vlay1pZGVudGlmaWVyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9jcmVhdGVQcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9jcmVhdGVUb0RvQ2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9mb3JtYXREYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3BvcFVwUHJvamVjdEFkZGVyRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFByb2plY3RFZGl0b3JGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3BvcFVwVG9Eb0FkZGVyRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFRvRG9FZGl0b3JGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3BvcFVwVG9Eb0luZm9DYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3JlbmRlclRvRG9XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9zb3J0VG9Eb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0dGVkL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgaXNEYXRlT2JqID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmonKTtcbmNvbnN0IHdlZWtJZGVudGlmaWVyID0gcmVxdWlyZSgnd2Vlay1pZGVudGlmaWVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGEsIGIpID0+IHtcblx0aWYgKHR5cGVvZiBhICE9PSAnbnVtYmVyJyAmJiAhaXNEYXRlT2JqKGEpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBudW1iZXIgb3IgRGF0ZSwgZ290ICR7dHlwZW9mIGF9YCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGIgIT09ICdudW1iZXInICYmICFpc0RhdGVPYmooYikpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIG51bWJlciBvciBEYXRlLCBnb3QgJHt0eXBlb2YgYn1gKTtcblx0fVxuXG5cdHJldHVybiB3ZWVrSWRlbnRpZmllcihpc0RhdGVPYmooYSkgPyBhIDogbmV3IERhdGUoYSAqIDEwMDApKSA9PT0gd2Vla0lkZW50aWZpZXIoaXNEYXRlT2JqKGIpID8gYiA6IG5ldyBEYXRlKGIgKiAxMDAwKSk7XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2xvYmFsIFN0eWxlcyAqL1xuLmljb24ge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbn1cblxuOnJvb3Qge1xuICAgIC0tdGV4dDogIzEwMDkwYztcbiAgICAtLWJhY2tncm91bmQ6ICNmZGZjZmM7XG4gICAgLS1wcmltYXJ5OiAjYjdkN2M5O1xuICAgIC0tc2Vjb25kYXJ5OiAjZDhlN2U5O1xuICAgIC0tYWNjZW50OiAjNTc5ZDVhO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi8qIENvbnRlbnQgQ29udGFpbmVyICovXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEYXNoYm9hcmQgKi9cbi5kYXNoYm9hcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3RzLXRhYiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIERlZmF1bHQgUHJvamVjdHMgQ29udGFpbmVyICovXG4uZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBDcmVhdGVkIFByb2plY3RzIENvbnRhaW5lciAqL1xuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmluYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDQwcHg7XG4gICAgZ2FwOiAzcHg7XG5cbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIC5wcm9qZWN0LWNhcmQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAuZGVsZXRlLCBcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAuZWRpdCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QtbmFtZSB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMCA7XG59XG5cbi8qIFByb2plY3QgQ2FyZCAqL1xuLnByb2plY3QtY2FyZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1cHggMjVweDtcbiAgICBnYXA6IDVweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWNhcmQgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIsXG4ucHJvamVjdC1hZGRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZT4qIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFByb2plY3QgYW5kIERyb3Bkb3duIEljb25zICovXG4jaG9tZS1wcm9qZWN0LFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxuI3RvZGF5LXByb2plY3QsXG4jdGhpcy13ZWVrLXByb2plY3QsXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxuI2NvbXBsZXRlZC1wcm9qZWN0IC5pY29uLFxuI3RvZGF5LXByb2plY3QgLmljb24sXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbi5kcm9wZG93biB7XG4gICAgZmlsbDogYmxhY2s7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIHdpZHRoOiAxN3B4O1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbn1cblxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24uZHJvcGRvd24ge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIC5wcm9qZWN0LW5hbWUsXG4udG8tZG8tdGl0bGUsXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIFByb2plY3QgQWRkZXIgKi9cbi5wcm9qZWN0LWFkZGVyLmFjdGl2ZSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3QtYWRkZXIuYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4ucHJvamVjdC1hZGRlci5pbmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtYWRkZXIgLmljb24sXG4udG8tZG8tYWRkZXIgLmljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLyogVG8tRG8gV2luZG93ICovXG4udG8tZG8td2luZG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODEsIDE4MSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5wYXJlbnQtcHJvamVjdC1uYW1lIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc29ydC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogM3B4O1xufVxuXG5sYWJlbFtmb3I9XCJzb3J0ZXJcIl0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3NvcnRlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuI3NvcnRlcjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBUby1EbyBUYWIgKi9cbi50by1kby10YWIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1yb3dzOiA2NXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBUby1EbyBDb250YWluZXIgKi9cbi50by1kby1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciBhdXRvIDI1cHggMjVweCAyNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udG8tZG8tdGl0bGUge1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLnRvLWRvLWR1ZS1kYXRlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4udG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xuICAgIGJvcmRlci1jb2xvcjogIzZkY2I2ODtcbiAgICBjb2xvcjogIzZkY2I2ODtcbn1cblxuLnRvLWRvLWR1ZS1kYXRlLmxhdGUge1xuICAgIGJvcmRlci1jb2xvcjogI2QwNjQ1ZDtcbiAgICBjb2xvcjogI2QwNjQ1ZDtcbn1cblxuLyogVG8tRG8gQWRkZXIgKi9cbi50by1kby1hZGRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG5cbiAgICB3aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvLWRvLWFkZGVyLFxuI3NvcnRlciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udG8tZG8tYWRkZXI6aG92ZXIsXG4udG8tZG8tYWRkZXI6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFRvLURvIEluZm8gQmFja2dyb3VuZCAqL1xuLnRvLWRvLWluZm8tYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyogVG8tRG8gSW5mbyBDb250YWluZXIgKi9cbi50by1kby1pbmZvLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5mby1maWVsZC1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2xvc2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmNsb3NlIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jbG9zZSAuaWNvbjpob3ZlciB7XG4gICAgZmlsbDogcmVkO1xufVxuXG4uaW5mby1maWVsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cblxuLnRvLWRvLWluZm8tbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50by1kby1pbmZvLXZhbHVlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jdGl0bGUtaW5mbyxcbiNwcm9qZWN0LWluZm8ge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuI2Rlc2NyaXB0aW9uLWluZm8sXG4jbm90ZXMtaW5mbyB7XG4gICAgaGVpZ2h0OiA5MHB4O1xufVxuXG4vKiBGb3JtIENvbnRhaW5lciAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMDEsIDEwMSwgMC4yMik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBGb3JtIFN0eWxlcyAqL1xuZm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuZm9ybSBpbnB1dCxcbmZvcm0gc2VsZWN0LFxuZm9ybSB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDIxMSwgMjExKTtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xufVxuXG5mb3JtIGlucHV0OmZvY3VzLFxuZm9ybSBzZWxlY3Q6Zm9jdXMsXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA3NywgNzcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGVsZXRlLFxuLmVkaXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogSWNvbiBWaXNpYmlsaXR5ICovXG4ucHJvamVjdC1jYXJkIC5pY29uLFxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xufVxuXG4ucHJvamVjdC1jYXJkIC5pY29uIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZmlsbDogYmxhY2s7XG59XG5cbi5kZWxldGU6aG92ZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZpbGw6IHJlZDtcbn1cblxuLmVkaXQ6aG92ZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZpbGw6IGdyZWVuO1xufVxuXG4vKiBDb21wbGV0ZWQgVG8tRG8gU3R5bGUgKi9cbi50by1kby1jb250YWluZXIuY29tcGxldGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMzgsIDE3Myk7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgICAjaG9tZS1wcm9qZWN0LFxuICAgICNjb21wbGV0ZWQtcHJvamVjdCxcbiAgICAjdG9kYXktcHJvamVjdCxcbiAgICAjdGhpcy13ZWVrLXByb2plY3QsXG4gICAgI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC8qIEFkanVzdCB0aGUgZGFzaGJvYXJkIGFuZCB0by1kbyB3aW5kb3cgdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIH1cblxuICAgIC5wcm9qZWN0cy10YWIgKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG5cbiAgICAucHJvamVjdHMtdGFiIHtcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgfVxuXG4gICAgLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSB7XG4gICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgfVxuXG4gICAgI2hvbWUtcHJvamVjdCAuaWNvbixcbiAgICAjY29tcGxldGVkLXByb2plY3QgLmljb24sXG4gICAgI3RvZGF5LXByb2plY3QgLmljb24sXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0IC5pY29uLFxuICAgICNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLFxuICAgIC5wcm9qZWN0LWFkZGVyIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAuZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXG4gICAgICAgIGdhcDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgLnRvLWRvLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgLnRvLWRvLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC50by1kby1kdWUtZGF0ZS5sYXRlLFxuICAgIC50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICAudG8tZG8tZHVlLWRhdGUubGF0ZSxcbiAgICAudG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgLnBhcmVudC1wcm9qZWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgI3NvcnRlcixcbiAgICBsYWJlbCBbZm9yPVwic29ydGVyXCJdLFxuICAgIC50by1kby1hZGRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAjc29ydGVyIHtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgIH1cblxuICAgIC50by1kby1hZGRlciB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFJQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFn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UUFLSSxtQkFBbUI7SUFDdkI7O0lBRUEsd0VBQXdFO0lBQ3hFO1FBQ0ksMEJBQTBCO1FBQzFCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBOzs7Ozs7UUFNSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsc0JBQXNCOztRQUV0QixRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25COztJQUVBOztRQUVJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOzs7UUFHSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHQ6ICMxMDA5MGM7XFxuICAgIC0tYmFja2dyb3VuZDogI2ZkZmNmYztcXG4gICAgLS1wcmltYXJ5OiAjYjdkN2M5O1xcbiAgICAtLXNlY29uZGFyeTogI2Q4ZTdlOTtcXG4gICAgLS1hY2NlbnQ6ICM1NzlkNWE7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIENvbnRlbnQgQ29udGFpbmVyICovXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBEYXNoYm9hcmQgKi9cXG4uZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHMtdGFiIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBEZWZhdWx0IFByb2plY3RzIENvbnRhaW5lciAqL1xcbi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogQ3JlYXRlZCBQcm9qZWN0cyBDb250YWluZXIgKi9cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA0MHB4O1xcbiAgICBnYXA6IDNweDtcXG5cXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgLnByb2plY3QtY2FyZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAuZGVsZXRlLCBcXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIgLmVkaXQge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdC1uYW1lIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDAgO1xcbn1cXG5cXG4vKiBQcm9qZWN0IENhcmQgKi9cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1cHggMjVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIsXFxuLnByb2plY3QtYWRkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlPioge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBQcm9qZWN0IGFuZCBEcm9wZG93biBJY29ucyAqL1xcbiNob21lLXByb2plY3QsXFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxcbiN0b2RheS1wcm9qZWN0LFxcbiN0aGlzLXdlZWstcHJvamVjdCxcXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxcbiNjb21wbGV0ZWQtcHJvamVjdCAuaWNvbixcXG4jdG9kYXktcHJvamVjdCAuaWNvbixcXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcXG4gICAgZmlsbDogYmxhY2s7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24uZHJvcGRvd24ge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSAucHJvamVjdC1uYW1lLFxcbi50by1kby10aXRsZSxcXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIFByb2plY3QgQWRkZXIgKi9cXG4ucHJvamVjdC1hZGRlci5hY3RpdmUge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWFkZGVyLmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wcm9qZWN0LWFkZGVyLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtYWRkZXIgLmljb24sXFxuLnRvLWRvLWFkZGVyIC5pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi8qIFRvLURvIFdpbmRvdyAqL1xcbi50by1kby13aW5kb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODEsIDE4MSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc29ydC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJzb3J0ZXJcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuI3NvcnRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4jc29ydGVyOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbi8qIFRvLURvIFRhYiAqL1xcbi50by1kby10YWIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA2NXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBUby1EbyBDb250YWluZXIgKi9cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIGF1dG8gMjVweCAyNXB4IDI1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG8tZG8tdGl0bGUge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi50by1kby1kdWUtZGF0ZSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xcbiAgICBib3JkZXItY29sb3I6ICM2ZGNiNjg7XFxuICAgIGNvbG9yOiAjNmRjYjY4O1xcbn1cXG5cXG4udG8tZG8tZHVlLWRhdGUubGF0ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2QwNjQ1ZDtcXG4gICAgY29sb3I6ICNkMDY0NWQ7XFxufVxcblxcbi8qIFRvLURvIEFkZGVyICovXFxuLnRvLWRvLWFkZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuXFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvLWRvLWFkZGVyLFxcbiNzb3J0ZXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi50by1kby1hZGRlcjpob3ZlcixcXG4udG8tZG8tYWRkZXI6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogVG8tRG8gSW5mbyBCYWNrZ3JvdW5kICovXFxuLnRvLWRvLWluZm8tYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIFRvLURvIEluZm8gQ29udGFpbmVyICovXFxuLnRvLWRvLWluZm8tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbmZvLWZpZWxkLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5cXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmNsb3NlIC5pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNsb3NlIC5pY29uOmhvdmVyIHtcXG4gICAgZmlsbDogcmVkO1xcbn1cXG5cXG4uaW5mby1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLnRvLWRvLWluZm8tbGFiZWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRvLWRvLWluZm8tdmFsdWUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jdGl0bGUtaW5mbyxcXG4jcHJvamVjdC1pbmZvIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24taW5mbyxcXG4jbm90ZXMtaW5mbyB7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLyogRm9ybSBDb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEwMSwgMTAxLCAwLjIyKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogRm9ybSBTdHlsZXMgKi9cXG5mb3JtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIHNlbGVjdCxcXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDIxMSwgMjExKTtcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXG59XFxuXFxuZm9ybSBpbnB1dDpmb2N1cyxcXG5mb3JtIHNlbGVjdDpmb2N1cyxcXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSxcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDc3LCA3Nyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5lZGl0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogSWNvbiBWaXNpYmlsaXR5ICovXFxuLnByb2plY3QtY2FyZCAuaWNvbixcXG4udG8tZG8tY29udGFpbmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgLmljb24ge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbGw6IHJlZDtcXG59XFxuXFxuLmVkaXQ6aG92ZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmlsbDogZ3JlZW47XFxufVxcblxcbi8qIENvbXBsZXRlZCBUby1EbyBTdHlsZSAqL1xcbi50by1kby1jb250YWluZXIuY29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMjM4LCAxNzMpO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG5cXG4gICAgI2hvbWUtcHJvamVjdCxcXG4gICAgI2NvbXBsZXRlZC1wcm9qZWN0LFxcbiAgICAjdG9kYXktcHJvamVjdCxcXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0LFxcbiAgICAjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIC8qIEFkanVzdCB0aGUgZGFzaGJvYXJkIGFuZCB0by1kbyB3aW5kb3cgdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy10YWIgKiB7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLXRhYiB7XFxuICAgICAgICBnYXA6IDNweDtcXG4gICAgfVxcblxcbiAgICAuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgICAgIGhlaWdodDogMTI1cHg7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtcHJvamVjdCAuaWNvbixcXG4gICAgI2NvbXBsZXRlZC1wcm9qZWN0IC5pY29uLFxcbiAgICAjdG9kYXktcHJvamVjdCAuaWNvbixcXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0IC5pY29uLFxcbiAgICAjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbixcXG4gICAgLnByb2plY3QtYWRkZXIgLmljb24ge1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgfVxcblxcbiAgICAudG8tZG8tY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIGdhcDogNHB4O1xcbiAgICB9XFxuXFxuICAgIC50by1kby10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG4gICAgLnRvLWRvLWR1ZS1kYXRlLmxhdGUsXFxuICAgIC50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvLWRvLWR1ZS1kYXRlLmxhdGUsXFxuICAgIC50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnBhcmVudC1wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICB9XFxuXFxuICAgICNzb3J0ZXIsXFxuICAgIGxhYmVsIFtmb3I9XFxcInNvcnRlclxcXCJdLFxcbiAgICAudG8tZG8tYWRkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgICNzb3J0ZXIge1xcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xcbiAgICB9XFxuXFxuICAgIC50by1kby1hZGRlciB7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihsaW1pdCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGltaXQpLnRvU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclN5bWJvbHMoZXhjbHVkZVN5bWJvbHMsIGdyb3VwKSB7XG4gIGxldCBuZXdHcm91cCA9IGdyb3VwO1xuICBleGNsdWRlU3ltYm9scy5mb3JFYWNoKChzeW1ib2wpID0+IHtcbiAgICBuZXdHcm91cCA9IG5ld0dyb3VwLnJlcGxhY2Uoc3ltYm9sLCAnJyk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdHcm91cDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSWQoYXZhaWxhYmxlQ2hhcnMsIGlkTGVuZ3RoKSB7XG4gIGxldCBpZCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaWRMZW5ndGg7IGkgKz0gMSkge1xuICAgIGlkICs9IGF2YWlsYWJsZUNoYXJzW2dldFJhbmRvbU51bWJlcihhdmFpbGFibGVDaGFycy5sZW5ndGgpXTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJZCh7XG4gIGxlbmd0aCA9IDIwLFxuICB1c2VMZXR0ZXJzID0gdHJ1ZSxcbiAgdXNlTnVtYmVycyA9IHRydWUsXG4gIGluY2x1ZGVTeW1ib2xzID0gW10sXG4gIGV4Y2x1ZGVTeW1ib2xzID0gW10sXG59ID0ge30pIHtcbiAgbGV0IGxldHRlcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICBsZXQgbnVtYmVycyA9ICcwMTIzNDU2Nzg5JztcbiAgbGV0IGF2YWlsYWJsZUNoYXJzID0gW107XG4gIGxldCBsZXR0ZXJzQXJyID0gW107XG4gIGxldCBudW1iZXJzQXJyID0gW107XG5cbiAgaWYgKHVzZUxldHRlcnMpIHtcbiAgICBpZiAoZXhjbHVkZVN5bWJvbHMubGVuZ3RoKSBsZXR0ZXJzID0gZmlsdGVyU3ltYm9scyhleGNsdWRlU3ltYm9scywgbGV0dGVycyk7XG4gICAgbGV0dGVyc0FyciA9IGxldHRlcnMuc3BsaXQoJycpO1xuICB9XG5cbiAgaWYgKHVzZU51bWJlcnMpIHtcbiAgICBpZiAoZXhjbHVkZVN5bWJvbHMubGVuZ3RoKSBudW1iZXJzID0gZmlsdGVyU3ltYm9scyhleGNsdWRlU3ltYm9scywgbnVtYmVycyk7XG4gICAgbnVtYmVyc0FyciA9IG51bWJlcnMuc3BsaXQoJycpO1xuICB9XG5cbiAgYXZhaWxhYmxlQ2hhcnMgPSBbLi4ubGV0dGVyc0FyciwgLi4ubnVtYmVyc0FyciwgLi4uaW5jbHVkZVN5bWJvbHNdO1xuXG4gIHJldHVybiBjcmVhdGVJZChhdmFpbGFibGVDaGFycywgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVVuaXF1ZUlkO1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB2YWwgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiB3ZWVrLWlkZW50aWZpZXIgPGh0dHBzOi8vZ2l0aHViLmNvbS90aHJvbGwvd2Vlay1pZGVudGlmaWVyPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNiBDbMOpbWVudCBCaWxsaW90LCBjb250cmlidXRvcnMuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdlZWtJZGVudGlmaWVyO1xubW9kdWxlLmV4cG9ydHMud2Vla0lkZW50aWZpZXIgPSB3ZWVrSWRlbnRpZmllcjtcbm1vZHVsZS5leHBvcnRzLmRhdGVGcm9tV2VlayA9IGRhdGVGcm9tV2VlaztcblxuLyoqXG4gKiBHZXQgdW5pcXVlIGFuZCBzZXF1ZW50aWFsIHdlZWsgaWRlbnRpZmllciBvZiBjdXJyZW50IGRhdGUgb3IgZ2l2ZW4gdmFsaWQgYERhdGVgIHN0cmluZyBmb3JtYXRcbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqc1xuICogdmFyIHdlZWtJZGVudGlmaWVyID0gcmVxdWlyZSgnY3VycmVudC13ZWVrLW51bWJlcicpO1xuICpcbiAqIC8vIGF1Z3VzdCAxMiwgMjAxNiAoY3VycmVudCBkYXRlKVxuICogd2Vla0lkZW50aWZpZXIoKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKCdKYW51YXJ5IDA1LCAxOTcwIDAzOjAwOjAwJyk7XG4gKiAvLz0+IDFcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcihuZXcgRGF0ZSgnQXVndXN0IDEyLCAyMDE2JykpO1xuICogLy89PiAyNDMyXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJzA4LzEyLzIwMTYnKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKCdBdWd1c3QgMTIsIDIwMTYnKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKG5ldyBEYXRlKCdBdWd1c3QgMTksIDIwMTYnKSk7XG4gKiAvLz0+IDI0MzNcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignMDgvMTkvMjAxNicpO1xuICogLy89PiAgMjQzM1xuICogYGBgXG4gKlxuICogQG5hbWUgd2Vla0lkZW50aWZpZXJcbiAqIEBwYXJhbSAge1N0cmluZ30gYFtkYXRlXWAgZXZlcnkgdmFsaWQgRGF0ZS1pc2ggc3RyaW5nIGZvcm1hdFxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gd2Vla0lkZW50aWZpZXIoZGF0ZSkge1xuICB2YXIgaW5zdGFuY2U7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyAmJiBkYXRlLmxlbmd0aCkge1xuICAgIGluc3RhbmNlID0gbmV3IERhdGUoZGF0ZSk7XG4gIH0gZWxzZSBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBpbnN0YW5jZSA9IGRhdGU7XG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgRGF0ZSgpO1xuICB9XG4gIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhpcyBkYXRlIG9iamVjdFxuICB2YXIgdGFyZ2V0ID0gbmV3IERhdGUoaW5zdGFuY2UudmFsdWVPZigpKTtcbiAgLy8gU3RhcnRpbmcgZGF0ZSBwb2ludCBmb3Igb3VyIHNlcXVlbmNlXG4gIHZhciBsYXN0RGF5T2ZXZWVrWmVyb1RpbWVzdGFtcCA9IG5ldyBEYXRlKCdKYW51YXJ5IDUsIDE5NzAgMDA6MDA6MDAnKS5nZXRUaW1lKCkgLSAxO1xuICAvLyBOdW1iZXIgb2Ygd2VlayBmcm9tIG91ciBzdGFydGluZyBkYXRlXG4gIHZhciB3ZWVrTnVtYmVyZGlmZiA9IE1hdGguY2VpbCgodGFyZ2V0LmdldFRpbWUoKSAtIGxhc3REYXlPZldlZWtaZXJvVGltZXN0YW1wKSAvICgyNCAqIDM2MDAgKiAxMDAwICogNykpO1xuXG4gIHJldHVybiB3ZWVrTnVtYmVyZGlmZjtcbn1cblxuLyoqXG4gKiBHZXQgbW9uZGF5IGRhdGUgb2YgdGhlIGdpdmVuIHdlZWsgaWRlbnRpZmllclxuICpcbiAqICAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgd2Vla0lkZW50aWZpZXIgPSByZXF1aXJlKCdjdXJyZW50LXdlZWstbnVtYmVyJyk7XG4gKlxuICogd2Vla0lkZW50aWZpZXIuZGF0ZUZyb21XZWVrKDI0MDMpO1xuICogLy89PiBKYW51YXJ5IDE4LCAyMDE2IDAwOjAwOjAwXG4gKlxuICogYGBgXG4gKiBAbmFtZSB3ZWVrSWRlbnRpZmllci5kYXRlRnJvbVdlZWtcbiAqIEBwYXJhbSAge051bWJlcn0gd2Vla0lkZW50aWZpZXJcbiAqIEByZXR1cm4ge0RhdGV9IE1vbmRheSBvZiB0aGUgZ2l2ZW4gd2VlayBpZGVudGlmaWVyIG9yIEphbnVhcnkgNSwgMTk3MCAwMDowMDowMCBpZiB3ZWVrSWRlbnRpZmllciBpcyBub3QgPiAwLlxuICovXG5mdW5jdGlvbiBkYXRlRnJvbVdlZWsod2Vla0lkZW50aWZpZXIpIHtcbiAgaWYgKGlzTmFOKHBhcnNlRmxvYXQod2Vla0lkZW50aWZpZXIpKSkge1xuICAgIHJldHVybiBOYU47XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RhcnRpbmcgZGF0ZSBwb2ludCBmb3Igb3VyIHNlcXVlbmNlXG4gICAgdmFyIGZpcnN0RGF5T2ZXZWVrT25lLCBtb25kYXlPZldlZWs7XG4gICAgbW9uZGF5T2ZXZWVrID0gZmlyc3REYXlPZldlZWtPbmUgPSBuZXcgRGF0ZSgnSmFudWFyeSA1LCAxOTcwIDAwOjAwOjAwJyk7XG4gICAgaWYgKHdlZWtJZGVudGlmaWVyID4gMCkge1xuICAgICAgbW9uZGF5T2ZXZWVrID0gbmV3IERhdGUoKCh3ZWVrSWRlbnRpZmllciAtIDEpICogKDI0ICogMzYwMCAqIDEwMDAgKiA3KSkgKyBmaXJzdERheU9mV2Vla09uZS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbW9uZGF5T2ZXZWVrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZSwgc3RyaW5naWZ5IH0gZnJvbSAnZmxhdHRlZCc7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eby5qc1wiO1xuY29uc3QgZ2VuZXJhdGVVbmlxdWVJZCA9IHJlcXVpcmUoXCJnZW5lcmF0ZS11bmlxdWUtaWRcIik7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHByb2plY3QgaXRlbS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgcHJvamVjdC4gXG4gKiBAcGFyYW0ge0FycmF5fSB0b0RvSXRlbXMgLSBBcnJheSBjb250YWluaW5nIFRvRG8gb2JqZWN0cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIElEIGZvciB0aGUgcHJvZWpjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuXG4gICAgLy8gU3RvcmFnZSBvZiBhbGwgXCJQcm9qZWN0XCIgaW5zdGFuY2VzLlxuICAgIHN0YXRpYyBwcm9qZWN0cyA9IFtdO1xuXG4gICAgLy8gSG9tZSBwcm9qZWN0LlxuICAgIHN0YXRpYyBob21lO1xuXG4gICAgLy8gTG9hZCBzYXZlZCBcIlByb2plY3QucHJvamVjdHNcIiBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIC8vIExvYWQgc2VyaWFsaXplZCBzYXZlZCBwcm9qZWN0cy5cbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFNhdmVkUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC5wcm9qZWN0c1wiKTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTYXZlZFByb2plY3QpIHtcblxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHNlcmlhbGl6ZWQgc2F2ZSBwcm9qZWN0cy5cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3QgPSBwYXJzZShzZXJpYWxpemVkU2F2ZWRQcm9qZWN0KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJsYW5rIFwiUHJvamVjdFwiIG9iamVjdHMgdG8gYmUgcG9wdWxhdGVkLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3IFByb2plY3QobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHRoZSBibGFuayBwcm9qZWN0cyB3aXRoIFwicHJvamVjdCB0aWxlXCIsIFwidG8tZG8gaXRlbXNcIiwgYW5kIFwicHJvamVjdCBpZFwiIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwcm9qZWN0cycgcmVzcGVjdGl2ZSB0aXRsZXMuXG4gICAgICAgICAgICAgICAgUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSA9IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3RbaV0udGl0bGU7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3RzJyByZXNwZWN0aXZlIHRvLWRvIGl0ZW1zLlxuICAgICAgICAgICAgICAgIHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3RbaV0udG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0LnByb2plY3RzW2ldLmFkZFRvRG8obmV3IFRvRG8oLi4uT2JqZWN0LnZhbHVlcyh0b0RvSXRlbSkpKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwcm9qZWN0cydzIHJlc3BlY3RpdmUgSUQuXG4gICAgICAgICAgICAgICAgUHJvamVjdC5wcm9qZWN0c1tpXS5pZCA9IHBhcnNlZFNlcmlhbGl6ZWRTYXZlZFByb2plY3RbaV0uaWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBwcm9qZWN0cyB0byBiZSBsb2FkLCBjcmVhdGUgZGVmYXVsdCBcIkhvbWVcIiBwcm9qZWN0IGFuZCBcIkNvbXBsZXRlZFwiIHByb2plY3QuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJIb21lXCIsIG51bGwsIFwiaG9tZS1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJDb21wbGV0ZWRcIiwgbnVsbCwgXCJjb21wbGV0ZWQtcHJvamVjdFwiKTtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiVG9kYXlcIiwgbnVsbCwgXCJ0b2RheS1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgbmV3IFByb2plY3QoXCJUaGlzIFdlZWtcIiwgbnVsbCwgXCJ0aGlzLXdlZWstcHJvamVjdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1dCBob21lIHByb2plY3QgdG8gc3RhdGljIHZhcmlhYmxlLlxuICAgICAgICBQcm9qZWN0LmhvbWUgPSBQcm9qZWN0LnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBcImhvbWUtcHJvamVjdFwiKTtcbiAgICB9XG5cbiAgICAvLyBQcm9qZWN0IENvbnN0cnVjdG9yLlxuICAgIGNvbnN0cnVjdG9yKHRpdGxlID0gbnVsbCwgdG9Eb0l0ZW1zID0gbnVsbCwgaWQgPSBudWxsKSB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IHRpdGxlLlxuICAgICAgICB0aGlzLnRpdGxlID0gKHRpdGxlICE9PSBudWxsKSA/IHRpdGxlIDogbnVsbDtcblxuICAgICAgICAvLyBTZXQgdGhlIFwidG9Eb0l0ZW1zXCIgYXJyYXkuXG4gICAgICAgIGlmICh0b0RvSXRlbXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudG9Eb0l0ZW1zID0gdG9Eb0l0ZW1zO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgXCJ0b0RvSXRlbXNcIiB0byBibGFuayBhcnJheSBpZiBub25lIGlzIHByb3ZpZGVkIGR1cmluZyBpbnN0YW50aWF0aW9uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9Eb0l0ZW1zID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgcHJvamVjdCdzIElEIHRvIGdpdmVuIHByb2plY3QgSUQgZHVyaW5nIHByb2plY3QgaW5zdGFudGlhdGlvbi5cbiAgICAgICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGEgZ2VuZXJhdGVkIDE1LWNoYXJhY3RlciBJRCB0byBwcm9qZWN0IGlmIG5vdGhpbmcgd2FzIHByb3ZpZGVkIGR1cmluZyBQcm9qZWN0J3MgaW5zdGFudGlhdGlvbi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gZ2VuZXJhdGVVbmlxdWVJZCh7IGxlbmd0aDogMTUsIHVzZU51bWJlcnM6IHRydWUsIHVzZUxldHRlcnM6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbmV3IFByb2plY3Qgb2JqZWN0IGluc2lkZSBcInByb2plY3RzXCIgYXJyYXkuXG4gICAgICAgIFByb2plY3QucHJvamVjdHMucHVzaCh0aGlzKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIFwiUHJvamVjdC5wcm9qZWN0c1wiIGFycmF5LlxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoUHJvamVjdC5wcm9qZWN0cy5pbmRleE9mKHRoaXMpLCAxKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIEVkaXQgcHJvamVjdCB0aXRsZS5cbiAgICBzZXRQcm9qZWN0VGl0bGUobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGEgVG9EbyBJdGVtIGluc2lkZSB0aGUgcHJvamVjdC5cbiAgICBhZGRUb0RvKFRvRG8pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIHByb2plY3QgcmVmZXJlbmNlIHByb3BlcnR5IG9mIHRoZSBUb0RvIGl0ZW0gdG8gJ3RoaXMnIGN1cnJlbnQgcHJvamVjdCBpbnN0YW5jZS5cbiAgICAgICAgVG9Eby5wcm9qZWN0ID0gdGhpcztcblxuICAgICAgICAvLyBBZGQgdGhlIHRvIGRvIGl0ZW0gdG8gJ3RoaXMnIHByb2plY3RzIGFycmF5IG9mIHRvIGRvIGl0ZW1zLlxuICAgICAgICB0aGlzLnRvRG9JdGVtcy5wdXNoKFRvRG8pO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIGEgVG9EbyBJdGVtIGluc2lkZSB0aGUgcHJvamVjdCdzIFwidG9Eb0l0ZW1zXCIgYXJyYXkuXG4gICAgZGVsZXRlVG9EbyhUb0RvKSB7XG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zLnNwbGljZSh0aGlzLnRvRG9JdGVtcy5pbmRleE9mKFRvRG8pLCAxKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgVG9EbyBpdGVtcyBpbnNpZGUgdGhlIHByb2plY3QncyBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgIHJlcGxhY2VUb0RvKG5ld1RvRG8sIG9sZFRvRG8pIHtcblxuICAgICAgICAvLyBTZXQgbmV3IFRvRG8gaXRlbSdzIHByb2plY3QgcmVmZXJlbmNlIHRvIHRoaXMgcHJvamVjdC5cbiAgICAgICAgbmV3VG9Eby5wcm9qZWN0ID0gdGhpcztcblxuICAgICAgICAvLyBSZXBsYWNlIFRvRG8gaXRlbSB3aXRoIHRoZSBuZXcgVG9EbyBpdGVtLlxuICAgICAgICB0aGlzLnRvRG9JdGVtc1t0aGlzLnRvRG9JdGVtcy5pbmRleE9mKG9sZFRvRG8pXSA9IG5ld1RvRG87XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgI3NhdmVDaGFuZ2VzKCkge1xuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3QucHJvamVjdHNcIiwgc3RyaW5naWZ5KFByb2plY3QucHJvamVjdHMpKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBjbGFzc1xuICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgdG8tZG8gaXRlbSB3aXRoIHZhcmlvdXMgZGV0YWlscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvciBuYW1lIG9mIHRoZSB0by1kbyBpdGVtLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgdG8tZG8gaXRlbS5cbiAqIEBwYXJhbSB7RGF0ZX0gZHVlRGF0ZSAtIFRoZSBkdWUgZGF0ZSBmb3IgY29tcGxldGluZyB0aGUgdG8tZG8gaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmlvcml0eSAtIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgdG8tZG8gaXRlbSAoZS5nLiwgXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCIpLlxuICogQHBhcmFtIHtzdHJpbmd9IG5vdGVzIC0gQWRkaXRpb25hbCBub3RlcyBvciBjb21tZW50cyByZWxhdGVkIHRvIHRoZSB0by1kbyBpdGVtLlxuICovXG5leHBvcnQgY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNvbXBsZXRlZD1udWxsLCBkYXRlQW5kVGltZUNyZWF0ZWQ9bnVsbCwgZGF0ZU1vZGlmaWVkPW51bGwsIHByb2plY3QgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAoY29tcGxldGVkICE9PSBudWxsKSA/IGNvbXBsZXRlZCA6IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGVBbmRUaW1lQ3JlYXRlZCA9IChkYXRlQW5kVGltZUNyZWF0ZWQgIT09IG51bGwpID8gZGF0ZUFuZFRpbWVDcmVhdGVkIDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICB0aGlzLmRhdGVNb2RpZmllZCA9IChkYXRlTW9kaWZpZWQgIT09IG51bGwpID8gZGF0ZU1vZGlmaWVkIDogbnVsbDtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gKHByb2plY3QgIT09IG51bGwpID8gcHJvamVjdCA6IG51bGw7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9Ebyh0aGlzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcG9wVXBQcm9qZWN0RWRpdG9yRm9ybSB9IGZyb20gXCIuL3BvcFVwUHJvamVjdEVkaXRvckZvcm0uanNcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG4gXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkge1xuXG4gICAgLy8gQ3JlYXRlIGEgY2FyZCBmb3IgXCJQcm9qZWN0XCIuXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jYXJkXCJcbiAgICBwcm9qZWN0Q2FyZC5pZCA9IHByb2plY3QuaWQ7XG5cbiAgICAvLyBBZGQgcmVmZXJlY2UgdG8gdGhlIHByb2plY3Qgb2JqZWN0LlxuICAgIHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2UgPSBwcm9qZWN0O1xuXG4gICAgLy8gQWRkICdob21lJyBpY29uIHRvIGhvbWUtcHJvamVjdC5cbiAgICBpZiAocHJvamVjdC5pZCA9PT0gXCJob21lLXByb2plY3RcIikge1xuICAgICAgICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvbWVJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICBob21lSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5Ib21lPC90aXRsZT48cGF0aCBkPVwiTTEwLDIwVjE0SDE0VjIwSDE5VjEySDIyTDEyLDNMMiwxMkg1VjIwSDEwWlwiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuICAgIH1cbiAgICAvLyBBZGQgJ2NvbXBsZXRlZCcgaWNvbiB0byBjb21wbGV0ZWQtcHJvamVjdC5cbiAgICBlbHNlIGlmIChwcm9qZWN0LmlkID09PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbXBsZXRlZEljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIGNvbXBsZXRlZEljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Q29tcGxldGVkPC90aXRsZT48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMCAxN0w1IDEyTDYuNDEgMTAuNTlMMTAgMTQuMTdMMTcuNTkgNi41OEwxOSA4TDEwIDE3WlwiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoY29tcGxldGVkSWNvbik7XG4gICAgfVxuICAgIC8vIEFkZCAndG9kYXknIGljb24gdG8gdG9kYXktcHJvamVjdC5cbiAgICBlbHNlIGlmIChwcm9qZWN0LmlkID09PSBcInRvZGF5LXByb2plY3RcIikge1xuICAgICAgICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RheUljb24uY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiXG4gICAgICAgIHRvZGF5SWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5Ub2RheTwvdGl0bGU+PHBhdGggZD1cIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXCIgLz48L3N2Zz5gO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0b2RheUljb24pO1xuICAgIH1cbiAgICAvLyBBZGQgJ3RoaXMtd2VlaycgaWNvbiB0byB0aGlzLXdlZWstcHJvamVjdC5cbiAgICBlbHNlIGlmIChwcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgdGhpc1dlZWtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpc1dlZWtJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICB0aGlzV2Vla0ljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+VGhpcyBXZWVrPC90aXRsZT48cGF0aCBkPVwiTTYgMUg4VjNIMTZWMUgxOFYzSDE5QzIwLjExIDMgMjEgMy45IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuODkgMyA1IDNINlYxTTUgOFYxOUgxOVY4SDVNNyAxMEgxN1YxMkg3VjEwWlwiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGhpc1dlZWtJY29uKTtcbiAgICB9XG5cbiAgICAvLyBQdXQgcHJvamVjdCB0aXRsZSBpbnNpZGUgdGhlIHByb2plY3QgY2FyZC5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSBcInByb2plY3QtbmFtZVwiXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAvLyBPbmx5IGFkZCBmZWF0dXJlIGJ1dHRvbnMgdG8gXCJub24tSG9tZVwiIHByb2plY3RzLlxuICAgIGlmIChwcm9qZWN0LmlkICE9PSBcImhvbWUtcHJvamVjdFwiICYmIHByb2plY3QuaWQgIT09IFwiY29tcGxldGVkLXByb2plY3RcIiAmJiBwcm9qZWN0LmlkICE9PSBcInRvZGF5LXByb2plY3RcIiAmJiBwcm9qZWN0LmlkICE9PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIpIHtcbiAgICAgICAgYWRkRGVsZXRlQnV0dG9uKHByb2plY3RDYXJkKTtcbiAgICAgICAgYWRkRWRpdEJ1dHRvbihwcm9qZWN0Q2FyZCk7XG4gICAgfVxuXG4gICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgdGhlIHByb2plY3QgY29ycmVzcG9uZGluZyB0byBwcm9qZWN0IGNhcmQuXG4gICAgICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuXG5cbmZ1bmN0aW9uIGFkZERlbGV0ZUJ1dHRvbihwcm9qZWN0Q2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b24uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGVcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgZGVsZXRlIHN2ZyBpY29uLlxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGVsZXRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU05LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4SDExVjE3SDlWOE0xMyw4SDE1VjE3SDEzVjhaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZGVsZXRlIGZ1bmN0aW9uYWxpdHkgdG8gZGVsZXRlIGJ1dHRvbi5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIEFzayB0aGUgdXNlciBmb3IgZGVsZXRlIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBkZWxldGlvbj9cIikpIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChiYWNrLWVuZClcbiAgICAgICAgICAgIHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2UuZGVsZXRlKCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIFwiVG8tRG9cIiB0YWJzLlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby10YWJcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAgICAgLy8gTWFrZSBcIkhvbWVcIiBwcm9qZWN0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCB3aGVuIGN1cnJlbnQgcHJvamVjdCBpcyBkZWxldGVkLlxuICAgICAgICAgICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KFByb2plY3QuaG9tZSk7XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0IChmcm9udC1lbmQpXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3RDYXJkKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xufVxuXG5cbmZ1bmN0aW9uIGFkZEVkaXRCdXR0b24ocHJvamVjdENhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBFZGl0IGJ1dHRvbi5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgSWNvbi5cbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5FZGl0PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LDIuOSAxNy4zNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBlZGl0IGZ1bmN0aW9uYWxpdHkgdG8gZWRpdCBidXR0b24gYnkgcG9wcGluZyB0aGUgXCJwcm9qZWN0IGVkaXRvciBmb3JtXCIuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcFByb2plY3RFZGl0b3JGb3JtKHByb2plY3RDYXJkKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbn0iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZS5qc1wiO1xuaW1wb3J0IHsgcG9wVXBUb0RvRWRpdG9yRm9ybSB9IGZyb20gXCIuL3BvcFVwVG9Eb0VkaXRvckZvcm0uanNcIjtcbmltcG9ydCB7IHBvcFVwVG9Eb0luZm9DYXJkIH0gZnJvbSBcIi4vcG9wVXBUb0RvSW5mb0NhcmQuanNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvRG9DYXJkKFRvRG8pIHtcblxuICAgIC8vIENyZWF0ZSB0by1kbyBjYXJkIGRpdi5cbiAgICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXJcIlxuXG4gICAgLy8gQWRkIHJlZmVyZW5jZSB0byB0aGUgVG9Eby5cbiAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlID0gVG9EbztcblxuICAgIGFkZENoZWNrQm94KHRvRG9DYXJkKTtcblxuICAgIC8vIEFwcGx5IFwiY29tcGxldGVkIGVmZmVjdHNcIiB0byB0by1kbyBpdGVtcyB0aGF0IGFyZSBjb21wbGV0ZWQuXG4gICAgaWYgKHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkKSB7XG4gICAgICAgIHRvRG9DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tY2hlY2tib3hcIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyIGNvbXBsZXRlZFwiO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0by1kbyB0aXRsZSBjb250YWluZXIuXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvVGl0bGUuY2xhc3NOYW1lID0gXCJ0by1kby10aXRsZVwiXG4gICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gVG9Eby50aXRsZTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIGR1ZSBkYXRlIGNvbnRhaW5lci5cbiAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBDbGFzc2lmeSB3aGV0aGVyIFRvRG8gZHVlIGRhdGUgaXMgYWxyZWFkeSBsYXRlIG9yIGp1c3QgdXBjb21pbmcuXG4gICAgaWYgKGlzVG9Eb0xhdGUoVG9Eby5kdWVEYXRlKSkge1xuICAgICAgICB0b0RvRHVlRGF0ZS5jbGFzc05hbWUgPSBcInRvLWRvLWR1ZS1kYXRlIGxhdGVcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRvRG9EdWVEYXRlLmNsYXNzTmFtZSA9IFwidG8tZG8tZHVlLWRhdGUgdXBjb21pbmdcIjtcbiAgICB9XG5cbiAgICB0b0RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7Zm9ybWF0RGF0ZShUb0RvLmR1ZURhdGUpfWA7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG5cbiAgICBhZGRWaWV3QnV0dG9uKHRvRG9DYXJkKTtcbiAgICBhZGREZWxldGVCdXR0b24odG9Eb0NhcmQpO1xuICAgIGFkZEVkaXRCdXR0b24odG9Eb0NhcmQpO1xuXG4gICAgcmV0dXJuIHRvRG9DYXJkO1xufVxuXG5cbi8vIENoZWNrIHdoZXRoZXIgVG9EbyBsYXRlIGlzIGxhdGUgb3Igbm90LlxuZnVuY3Rpb24gaXNUb0RvTGF0ZShkdWVEYXRlKSB7XG5cbiAgICAvLyBHZXQgY3VycmVudCBkYXRlIGluIFwiWVlZWS1NTS1ERFwiIGZvcm1hdC5cbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyBcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpOyBcbiAgICBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG5cbiAgICAvLyBDdXJyZW50IGRhdGUgaXMgYWhlYWQgb2YgZHVlIGRhdGUgaGVuY2UgVG9EbyBpcyBsYXRlLlxuICAgIGlmIChjdXJyZW50RGF0ZSA+IGR1ZURhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEN1cnJlbnQgZGF0ZSBpcyBiZWhpbmQgZHVlIGRhdGUgaGVuY2UgVG9EbyBpcyBub3QgbGF0ZS5cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGREZWxldGVCdXR0b24odG9Eb0NhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uLlxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRlbGV0ZSBzdmcgaWNvbi5cbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOEgxMVYxN0g5VjhNMTMsOEgxNVYxN0gxM1Y4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGRlbGV0ZSBmdW5jdGlvbmFsaXR5IHRvIGRlbGV0ZSBidXR0b24uXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgLy8gQXNrIHRoZSB1c2VyIGZvciBkZWxldGUgY29uZmlybWF0aW9uLlxuICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJDb25maXJtIGRlbGV0aW9uP1wiKSl7XG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoYmFjay1lbmQpXG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRlbGV0ZSgpO1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoZnJvbnQtZW5kKVxuICAgICAgICAgICAgdG9Eb0NhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b0RvQ2FyZCk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRFZGl0QnV0dG9uKHRvRG9DYXJkKSB7XG4gICAgLy8gQ3JlYXRlIEVkaXQgYnV0dG9uLlxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0XCI7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBJY29uLlxuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkVkaXQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTgsMi45IDE3LjM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLjkgMTYuOTYsMy4yOUwxNS4xMiw1LjEyTDE4Ljg3LDguODdNMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTNMMTQuMDYsNi4xOEwzLDE3LjI1WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGVkaXQgZnVuY3Rpb25hbGl0eSB0byBlZGl0IGJ1dHRvbiBieSBwb3BwaW5nIHRoZSBcInRvLWRvIGVkaXRvciBmb3JtXCIuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcFRvRG9FZGl0b3JGb3JtKHRvRG9DYXJkKTtcbiAgICB9KTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkVmlld0J1dHRvbih0b0RvQ2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIFZpZXcgYnV0dG9uLlxuICAgIGNvbnN0IHZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHZpZXdCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0XCI7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBJY29uLlxuICAgIHZpZXdCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlZpZXcgVG9EbyBJbmZvcm1hdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzLDlIMTFWN0gxM00xMywxN0gxMVYxMUgxM00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgXCJ2aWV3IHRvLWRvXCIgZnVuY3Rpb25hbGl0eSB0byB2aWV3IGJ1dHRvbiBieSBwb3BwaW5nIGEgXCJkaXZcIiBjb250YWluaW5nIHRoZSB0by1kbyBpdGVtJ3MgaW5mby5cbiAgICB2aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwVG9Eb0luZm9DYXJkKHRvRG9DYXJkKTtcbiAgICB9KTtcbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZCh2aWV3QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hlY2tCb3godG9Eb0NhcmQpIHtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwidG8tZG8tY2hlY2tib3hcIlxuXG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IGlzVG9Eb0NvbXBsZXRlZCA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkXG4gICAgICAgIGlmIChpc1RvRG9Db21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lclwiXG5cbiAgICAgICAgICAgIC8vIElmIGEgJ2NvbXBsZXRlZCcgdG8tZG8gaXMgc2V0IHRvICd1bmZpbmlzaGVkJyB0byBkbywgcmVtb3ZlIGl0IGZyb20gdGhlIFwiQ29tcGxldGVkXCIgcHJvamVjdCdzIHRvLWRvIHdpbmRvdy5cbiAgICAgICAgICAgIGlmIChnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKS5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgdG9Eb0NhcmQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0b0RvQ2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lciBjb21wbGV0ZWRcIlxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBVcGRhdGUgY2hhbmdlcyBpbnNpZGUgcGFyZW50IHByb2plY3QuXG4gICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJvamVjdC5yZXBsYWNlVG9Ebyh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlKTtcbiAgICB9KTtcblxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKGNoZWNrQm94KVxufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlucHV0RGF0ZSkge1xuICAgIGNvbnN0IG1vbnRocyA9IFtcbiAgICAgICAgXCJKYW4uXCIsIFwiRmViLlwiLCBcIk1hci5cIiwgXCJBcHIuXCIsIFwiTWF5XCIsIFwiSnVuLlwiLFxuICAgICAgICBcIkp1bC5cIiwgXCJBdWcuXCIsIFwiU2VwLlwiLCBcIk9jdC5cIiwgXCJOb3YuXCIsIFwiRGVjLlwiXG4gICAgXTtcblxuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGlucHV0RGF0ZS5zcGxpdChcIi1cIik7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke21vbnRoc1tOdW1iZXIobW9udGgpIC0gMV19ICR7cGFyc2VJbnQoZGF5LCAxMCl9LCAke3llYXJ9YDtcblxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RDYXJkLmpzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFByb2plY3RBZGRlckZvcm0oKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc05hbWUgPSBcInByb2plY3QtYWRkZXItZm9ybVwiO1xuICAgIGZvcm0uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC10aXRsZVwiIHBsYWNlaG9sZGVyPVwiSGVsbG9cIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkIFByb2plY3RcIj5gO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBcbiAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvbi5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIGZvcm0gdGhhdCBjcmVhdGVzIHRoZSBQcm9qZWN0IG9uY2Ugc3VibWl0dGVkLlxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gR2V0IHByb2plY3QncyB0aXRsZS5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgUHJvamVjdC5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgcHJvamVjdCBjYXJkIHJlcHJlc2VudGF0aW9uLlxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpXG5cbiAgICAgICAgLy8gUmVuZGVyIG5ldyBwcm9qZWN0IHRvIERPTSBieSBhcHBlbmRpbmcgXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvamVjdENhcmQsIGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByb2plY3QtYWRkZXJcIikpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIG5ld2x5IGNyZWF0ZWQgcHJvamVjdCBhcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QuXG4gICAgICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICAvLyBSZW1vdmUgZm9ybSB3aGVuIGRvbmUuXG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBvcFVwUHJvamVjdEVkaXRvckZvcm0ocHJvamVjdENhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lci5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcblxuICAgIC8vIENyZWF0ZSBwcm9qZWN0IGVkaXRvciBmb3JtLlxuICAgIGNvbnN0IHByb2plY3RFZGl0b3JGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgcHJvamVjdEVkaXRvckZvcm0uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWVkaXRvci1mb3JtXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdG9yRm9ybSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlICBuZXctcHJvamVjdC10aXRsZSBpbnB1dCBmaWVsZC5cbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQuaWQgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgICBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2UudGl0bGU7XG4gICAgcHJvamVjdEVkaXRvckZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlSW5wdXQpO1xuXG4gICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b24uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkRvbmVcIjtcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gcHJvamVjdCBlZGl0b3IgZm9ybSB0aGF0IG1vZGlmaWVzIHRoZSBwcm9qZWN0IHRpdGxlIHdoZW4gc3VibWl0dGVkLlxuICAgIHByb2plY3RFZGl0b3JGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQXNrIGZvciB1c2VyIGNvbmZpcm1hdGlvbiBiZWZvcmUgZWRpdGluZy5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBjaGFuZ2VzP1wiKSl7XG4gICAgICAgICAgICAvLyBNb2RpZnkgcHJvamVjdCB0aXRsZSBpbiBiYWNrLWVuZC5cbiAgICAgICAgICAgIHByb2plY3RDYXJkLnByb2plY3RSZWZlcmVuY2Uuc2V0UHJvamVjdFRpdGxlKG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gTW9kaWZ5IHByb2plY3QgdGl0bGUgaW4gZnJvbnQtZW5kLlxuICAgICAgICAgICAgcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyZW50LXByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZvcm0gZnJvbSB0aGUgRE9NIHdoZW4gc3VibWl0dGVkLlxuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufSIsImltcG9ydCB7IHJlbmRlclRvRG9XaW5kb3cgfSBmcm9tIFwiLi9yZW5kZXJUb0RvV2luZG93LmpzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vVG9Eby5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFRvRG9BZGRlckZvcm0oKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0b0RvQWRkZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdG9Eb0FkZGVyRm9ybS5jbGFzc05hbWUgPSBcInRvLWRvLWFkZGVyLWZvcm1cIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9BZGRlckZvcm0pO1xuXG4gICAgLy8gQ3JlYXRlIHRpdGxlIGlucHV0LlxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlRpdGxlOlwiLCB0aXRsZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb24gYXJlYS5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEZXNjcmlwdGlvbjpcIiwgZGVzY3JpcHRpb25UZXh0YXJlYSkpO1xuXG4gICAgLy8gQ3JlYXRlIGR1ZSBkYXRlIGlucHV0LlxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlLWRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkR1ZSBEYXRlOlwiLCBkdWVEYXRlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBUb0RvIHByaW9yaXR5IHNlbGVjdGlvbi5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSBcInByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlByaW9yaXR5OlwiLCBwcmlvcml0eVNlbGVjdCkpO1xuXG4gICAgLy8gQ3JlYXRlIE5vdGUgaW5wdXQuXG4gICAgY29uc3Qgbm90ZXNUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBub3Rlc1RleHRhcmVhLmlkID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEubmFtZSA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLnJvd3MgPSA0O1xuICAgIG5vdGVzVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJOb3RlczpcIiwgbm90ZXNUZXh0YXJlYSkpO1xuXG4gICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b24uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uaWQgPSBcInN1Ym1pdC1mb3JtXCI7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJDcmVhdGUgVG9Eb1wiO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgdG9Eb0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0byBmb3JtIHRoYXQgd2hlbiBzdWJtaXR0ZWQsIGEgVG9EbyBvYmplY3QgaXMgY3JlYXRlZC5cbiAgICB0b0RvQWRkZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBuZXcgVG9EbyguLi5bdG9Eb1RpdGxlLCB0b0RvRGVzY3JpcHRpb24sIHRvRG9EdWVEYXRlLCB0b0RvUHJpb3JpdHksIHRvRG9Ob3Rlc10pXG4gICAgICAgIGdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCgpLmFkZFRvRG8odG9Eb0l0ZW0pO1xuXG4gICAgICAgIC8vIFJlbmRlciBUby1EbyBpdGVtIGluICd0by1kbycgdGFiIGltbWVkaWF0ZWx5IG9uY2UgY3JlYXRlZC5cbiAgICAgICAgcmVuZGVyVG9Eb1dpbmRvdyhnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKSk7XG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuXG4vLyBSZXR1cm5zIGEgZGl2IGNvbnRhaW5pbmcgYSBsYWJlbGVkIGlucHV0LlxuZnVuY3Rpb24gY3JlYXRlRmllbGREaXYobGFiZWxUZXh0LCBpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gZGl2O1xufSIsImltcG9ydCB7IHJlbmRlclRvRG9XaW5kb3cgfSBmcm9tIFwiLi9yZW5kZXJUb0RvV2luZG93XCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFRvRG9FZGl0b3JGb3JtKHRvRG9DYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0b0RvRWRpdG9yRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRvRG9FZGl0b3JGb3JtLmNsYXNzTmFtZSA9IFwidG8tZG8tYWRkZXItZm9ybVwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0VkaXRvckZvcm0pXG5cbiAgICAvLyBDcmVhdGUgdGl0bGUgaW5wdXQuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZTtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlRpdGxlOlwiLCB0aXRsZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb24gYXJlYS5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRlc2NyaXB0aW9uO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiRGVzY3JpcHRpb246XCIsIGRlc2NyaXB0aW9uVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBkdWUgZGF0ZSBpbnB1dC5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZHVlRGF0ZTtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkR1ZSBEYXRlOlwiLCBkdWVEYXRlSW5wdXQpKTtcblxuICAgIC8vIENyZWF0ZSBUb0RvIHByaW9yaXR5IHNlbGVjdGlvbi5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSBcInByaW9yaXR5XCI7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByaW9yaXR5O1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiUHJpb3JpdHk6XCIsIHByaW9yaXR5U2VsZWN0KSk7XG5cbiAgICAvLyBDcmVhdGUgTm90ZSBpbnB1dC5cbiAgICBjb25zdCBub3Rlc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5vdGVzVGV4dGFyZWEuaWQgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNUZXh0YXJlYS5uYW1lID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEucm93cyA9IDQ7XG4gICAgbm90ZXNUZXh0YXJlYS5jb2xzID0gNTA7XG4gICAgbm90ZXNUZXh0YXJlYS52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2Uubm90ZXM7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJOb3RlczpcIiwgbm90ZXNUZXh0YXJlYSkpO1xuXG4gICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b24uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24uaWQgPSBcInN1Ym1pdC1mb3JtXCI7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJTYXZlIENoYW5nZXNcIjtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gZm9ybSB0aGF0IHdoZW4gc3VibWl0dGVkLCBhIFRvRG8gb2JqZWN0IGlzIGNyZWF0ZWQuXG4gICAgdG9Eb0VkaXRvckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBTaG93IGNvbmZpcm1hdGlvbiBiZWZvcmUgZWRpdGluZy5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBjaGFuZ2VzP1wiKSkge1xuICAgICAgICAgICAgLy8gVGhlIHVzZXIgY2xpY2tlZCBcIk9LXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUGFyc2UgZm9ybSBjb250cm9sIHZhbHVlcy5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIikudmFsdWU7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgdG8gZG8uXG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnRpdGxlID0gdG9Eb1RpdGxlO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbiA9IHRvRG9EZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZHVlRGF0ZSA9IHRvRG9EdWVEYXRlO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcmlvcml0eSA9IHRvRG9Qcmlvcml0eTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2Uubm90ZXMgPSB0b0RvTm90ZXM7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRhdGVBbmRUaW1lQ3JlYXRlZCA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGF0ZUFuZFRpbWVDcmVhdGVkO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kYXRlTW9kaWZpZWQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBUb0RvIGl0ZW0gd2l0aCB0aGUgVG9EbyBpdGVtIHdpdGggYWxsIGNoYW5nZXMgYXBwbGllZCBpbiB0aGUgcGFyZW50IHByb2plY3QncyBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcm9qZWN0LnJlcGxhY2VUb0RvKHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdG8tZG8gdGFiLlxuICAgICAgICAgICAgcmVuZGVyVG9Eb1dpbmRvdyhnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIERPTSBvbmNlIHN1Ym1pdHRlZC5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuXG4vLyBSZXR1cm5zIGEgZGl2IGNvbnRhaW5pbmcgYSBsYWJlbGVkIGlucHV0LlxuZnVuY3Rpb24gY3JlYXRlRmllbGREaXYobGFiZWxUZXh0LCBpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gZGl2O1xufSIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BVcFRvRG9JbmZvQ2FyZCh0b0RvQ2FyZCkge1xuICAgIC8vIENyZWF0ZSBiYWNrZ3JvdW5kIGNvbnRhaW5lci5cbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby1iYWNrZ3JvdW5kXCJcblxuICAgIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lci5cbiAgICBjb25zdCB0b0RvSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0luZm9Db250YWluZXIuY2xhc3NOYW1lID0gXCJ0by1kby1pbmZvLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBjbG9zZSBkaXZcbiAgICBjb25zdCBjbG9zZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VEaXYuY2xhc3NOYW1lID0gXCJjbG9zZSBpY29uXCI7XG4gICAgY2xvc2VEaXYuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Q2xvc2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTksM0gxNi4zSDcuN0g1QTIsMiAwIDAsMCAzLDVWNy43VjE2LjRWMTlBMiwyIDAgMCwwIDUsMjFINy43SDE2LjRIMTlBMiwyIDAgMCwwIDIxLDE5VjE2LjNWNy43VjVBMiwyIDAgMCwwIDE5LDNNMTUuNiwxN0wxMiwxMy40TDguNCwxN0w3LDE1LjZMMTAuNiwxMkw3LDguNEw4LjQsN0wxMiwxMC42TDE1LjYsN0wxNyw4LjRMMTMuNCwxMkwxNywxNS42TDE1LjYsMTdaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcbiAgICB0b0RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZURpdik7XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGluZm8tZmllbGQgZGl2XG4gICAgZnVuY3Rpb24gY3JlYXRlSW5mb0ZpZWxkKGxhYmVsLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBpbmZvRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvRmllbGQuY2xhc3NOYW1lID0gXCJpbmZvLWZpZWxkXCI7XG5cbiAgICAgICAgY29uc3QgaW5mb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb0xhYmVsLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby1sYWJlbFwiO1xuICAgICAgICBpbmZvTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbCArIFwiOlwiO1xuICAgICAgICBpbmZvRmllbGQuYXBwZW5kQ2hpbGQoaW5mb0xhYmVsKTtcblxuICAgICAgICBjb25zdCBpbmZvVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvVmFsdWUuY2xhc3NOYW1lID0gXCJ0by1kby1pbmZvLXZhbHVlXCI7XG4gICAgICAgIGluZm9WYWx1ZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBpbmZvVmFsdWUuaWQgPSBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfS1pbmZvYFxuICAgICAgICBpbmZvRmllbGQuYXBwZW5kQ2hpbGQoaW5mb1ZhbHVlKTtcblxuICAgICAgICByZXR1cm4gaW5mb0ZpZWxkO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBpbmZvIGZpZWxkIGNvbnRhaW5lci5cbiAgICBjb25zdCBpbmZvRmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGljXCIpO1xuICAgIGluZm9GaWVsZENvbnRhaW5lci5jbGFzc05hbWUgPSBcImluZm8tZmllbGQtY29udGFpbmVyXCI7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0ZpZWxkQ29udGFpbmVyKTtcblxuICAgIC8vIENyZWF0ZSBpbmZvLWZpZWxkIGRpdnMgZm9yIGVhY2ggZmllbGRcbiAgICBpbmZvRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiVGl0bGVcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZSkpO1xuICAgIGluZm9GaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJEdWUgRGF0ZVwiLCBmb3JtYXREYXRlKHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZHVlRGF0ZSkpKTtcbiAgICBpbmZvRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiUHJvamVjdFwiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByb2plY3QudGl0bGUpKTtcbiAgICBpbmZvRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiRGVzY3JpcHRpb25cIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbikpO1xuICAgIGluZm9GaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJQcmlvcml0eVwiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByaW9yaXR5KSk7XG4gICAgaW5mb0ZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIk5vdGVzXCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2Uubm90ZXMpKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgbWFpbiBjb250YWluZXIgdG8gdGhlIGJhY2tncm91bmQgY29udGFpbmVyXG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvSW5mb0NvbnRhaW5lcik7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNsb3NlIGRpdlxuICAgIGNsb3NlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYmFja2dyb3VuZENvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdG8gYm9keS5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmRDb250YWluZXIpO1xufVxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG9DYXJkIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb0NhcmRcIjtcbmltcG9ydCB7IHBvcFVwVG9Eb0FkZGVyRm9ybSB9IGZyb20gXCIuL3BvcFVwVG9Eb0FkZGVyRm9ybVwiO1xuaW1wb3J0IHsgc29ydFRvRG9JdGVtcyB9IGZyb20gXCIuL3NvcnRUb0RvSXRlbXNcIjtcbmNvbnN0IGNvbXBhcmVXZWVrID0gcmVxdWlyZShcImNvbXBhcmUtd2Vla1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvRG9XaW5kb3coY3VycmVudFByb2plY3QpIHtcbiAgICAvLyBBY2Nlc3MgY3VycmVudCB0byBkbyB3aW5kb3cuXG4gICAgY29uc3QgY3VycmVudFRvRG9XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXdpbmRvd1wiKTtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyB0byBkbyB3aW5kb3cuXG4gICAgY29uc3QgbmV3VG9Eb1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9Eb1dpbmRvdy5jbGFzc05hbWUgPSBcInRvLWRvLXdpbmRvd1wiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBjdXJyZW50IHBhcmVudCBwcm9qZWN0IGNhcmQgdG8gdGhlIHRvLWRvIHdpbmRvdy5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWVDYXJkID0gY3JlYXRlQ3VycmVudFByb2plY3ROYW1lQ2FyZChjdXJyZW50UHJvamVjdCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHNvcnRlci5cbiAgICBjb25zdCBzb3J0ZXIgPSBjcmVhdGVTb3J0ZXIoY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0by1kbyB0YWIuXG4gICAgY29uc3QgdG9Eb1RhYiA9IGNyZWF0ZVRvRG9UYWIoY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB0by1kbyBhZGRlciBidXR0b24uXG4gICAgY29uc3QgdG9Eb0FkZGVyQnV0dG9uID0gY3JlYXRlVG9Eb0FkZGVyQnV0dG9uKCk7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGNyZWF0ZWQgZWxlbWVudHMgdG8gdGhlIG5ldyB0by1kbyB3aW5kb3cuXG4gICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdE5hbWVDYXJkKTtcbiAgICBuZXdUb0RvV2luZG93LmFwcGVuZENoaWxkKHNvcnRlcik7XG4gICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZCh0b0RvVGFiKTtcbiAgICBcbiAgICAvLyBPbmx5IGFkZCB0aGUgdG8tZG8gYWRkZXIgYnV0dG9uIHRvIG5vbiBcIkNvbXBsZXRlXCIgcHJvamVjdHMuXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LmlkICE9PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIgJiYgY3VycmVudFByb2plY3QuaWQgIT09IFwidG9kYXktcHJvamVjdFwiICYmIGN1cnJlbnRQcm9qZWN0LmlkICE9PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIpIHtcbiAgICAgICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZCh0b0RvQWRkZXJCdXR0b24pO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgY3VycmVudCB0byBkbyB3aW5kb3cgd2l0aCBuZXcgdG8gZG8gd2luZG93LlxuICAgIGN1cnJlbnRUb0RvV2luZG93LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld1RvRG9XaW5kb3csIGN1cnJlbnRUb0RvV2luZG93KTtcbn1cblxuXG4vLyBDcmVhdGUgYSBjYXJkIGNvbnRhaW5pbmcgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgcGFyZW50IHByb2plY3QuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50UHJvamVjdE5hbWVDYXJkKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFByb2plY3ROYW1lQ2FyZC5jbGFzc05hbWUgPSBcInBhcmVudC1wcm9qZWN0LW5hbWVcIlxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcblxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdE5hbWVDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTb3J0ZXIoY3VycmVudFByb2plY3QpIHtcblxuICAgIC8vIENyZWF0ZSBkaXYgdG8gY29udGFpbiB0aGUgc29ydGVyLlxuICAgIGNvbnN0IHNvcnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc29ydGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic29ydC1jb250YWluZXJcIlxuXG4gICAgLy8gQ3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdGhhdCB3aWxsIHNlcnZlIGFzIGEgd2F5IHRvIGNob29zZSBzb3J0aW5nIGNyaXRlcmlhLlxuICAgIGNvbnN0IHNvcnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc29ydGVyLmlkID0gXCJzb3J0ZXJcIjtcbiAgICBzb3J0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydGVyKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbGFiZWwgZm9yIHRoZSBzb3J0ZXIuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHNvcnRlci5pZCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlNvcnQgYnk6XCI7XG4gICAgc29ydGVyLmJlZm9yZShsYWJlbCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGEgdmFsdWVzIG9mIG9wdGlvbnMgdG8gYmUgc2VsZWN0ZWQuXG4gICAgY29uc3Qgc29ydGluZ09wdGlvbnMgPSBbXG4gICAgICAgIHsgdmFsdWU6IFwidGltZS1jcmVhdGVkLWFzY2VuZGluZ1wiLCB0ZXh0OiBcIkNyZWF0ZWQgKE9sZGVzdCB0byBOZXdlc3QpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJ0aW1lLWNyZWF0ZWQtZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIkNyZWF0ZWQgKE5ld2VzdCB0byBPbGRlc3QpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkYXRlLWFzY2VuZGluZ1wiLCB0ZXh0OiBcIkRhdGUgKGFzY2VuZGluZylcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImRhdGUtZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIkRhdGUgKGRlc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJuYW1lLWFzY2VuZGluZ1wiLCB0ZXh0OiBcIk5hbWUgKGFzY2VuZGluZylcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcIm5hbWUtZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIk5hbWUgKGRlc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJwcmlvcml0eS1hc2NlbmRpbmdcIiwgdGV4dDogXCJQcmlvcml0eSAoTG93ZXN0IHRvIEhpZ2hlc3QpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJwcmlvcml0eS1kZXNjZW5kaW5nXCIsIHRleHQ6IFwiUHJpb3JpdHkgKEhpZ2hlc3QgdG8gTG93ZXN0KVwiIH1cbiAgICBdXG5cbiAgICAvLyBHZXQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvbiBmcm9tIGN1cnJlbnQgc29ydGVyLlxuICAgIGxldCBjdXJyZW50U29ydGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzb3J0ZXJcIik7XG4gICAgXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9uIG9mIHRoZSBuZXcgc29ydGVyIHRvIGJlIGNyZWF0ZWQuXG4gICAgbGV0IG5ld0N1cnJlbnRTb3J0T3B0aW9uO1xuICAgIFxuICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IHNvcnRlciB0byBiZSByZW5kZXJlZCwgc2V0IHRoZSBuZXcgc29ydGVyIHNlbGVjdGVkIG9wdGlvbiB0byBcIkNyZWF0ZWQgKE9sZGVzdCB0byBOZXdlc3QpXCIuXG4gICAgaWYgKCFjdXJyZW50U29ydGVyKSB7XG4gICAgICAgIG5ld0N1cnJlbnRTb3J0T3B0aW9uID0gc29ydGluZ09wdGlvbnMuZmluZChzb3J0aW5nT3B0aW9uID0+IHNvcnRpbmdPcHRpb24udGV4dCA9PT0gXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiKTtcbiAgICB9XG4gICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIGZpcnN0IHNvcnRlciwgc2V0IHRoZSBuZXcgc29ydGVyIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgY3VycmVudCBzb3J0ZXIgc2VsZWN0ZWQgb3B0aW9uLlxuICAgIGVsc2Uge1xuICAgICAgICBuZXdDdXJyZW50U29ydE9wdGlvbiA9IGN1cnJlbnRTb3J0ZXIudmFsdWU7XG4gICAgfVxuXG4gICAgc29ydGluZ09wdGlvbnMuZm9yRWFjaChzb3J0aW5nT3B0aW9uID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIG9wdGlvbiBlbGVtZW50LlxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgIC8vIEFkZCBvcHRpb24gdmFsdWUuXG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBzb3J0aW5nT3B0aW9uLnZhbHVlKTtcblxuICAgICAgICAvLyBBZGQgb3B0aW9uIHRleHQtY29udGVudC5cbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc29ydGluZ09wdGlvbi50ZXh0O1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb24gb2YgY3VycmVudCBzb3J0ZXIgY2Fycnkgb3ZlciB0byB0aGUgbmV3IHNvcnRlci5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gc29ydGluZ09wdGlvbi52YWx1ZSA9PT0gbmV3Q3VycmVudFNvcnRPcHRpb247XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBvcHRpb24gdG8gc29ydGVyIHNlbGVjdCBlbGVtZW50LlxuICAgICAgICBzb3J0ZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KVxuXG4gICAgLy8gUmUtcmVuZGVyIHRvLWRvIHRhYiBzbyB0aGF0IHRvLWRvIGl0ZW0ncyBuZXcgc29ydCBjcml0ZXJhIHdpbGwgYmUgcmVmcmVjdGVkXG4gICAgc29ydGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VG9Eb1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tdGFiXCIpO1xuICAgICAgICBjdXJyZW50VG9Eb1RhYi5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChjcmVhdGVUb0RvVGFiKGN1cnJlbnRQcm9qZWN0KSwgY3VycmVudFRvRG9UYWIpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gc29ydGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvVGFiKGN1cnJlbnRQcm9qZWN0KSB7XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gdGFiLlxuICAgIGNvbnN0IHRvRG9UYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9UYWIuY2xhc3NOYW1lID0gXCJ0by1kby10YWJcIjtcblxuICAgIC8vIEFycmF5IGZvciBzdG9yaW5nIGFsbCB1bnNvcnRlZCBUb0RvIGl0ZW1zLlxuICAgIGxldCB1bnNvcnRlZFRvRG9JdGVtcyA9IFtdO1xuXG4gICAgLy8gUmVuZGVyIGFsbCBUb0RvcyBhY3Jvc3MgYWxsIHByb2plY3RzIGlmIHRoZSBwcm9qZWN0IGlzIFwiSG9tZVwiXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBQcm9qZWN0LmhvbWUpIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGFsbCBjb21wbGV0ZWQgVG9Eb3MgZnJvbSBkaWZmZXJlbnQgUHJvamVjcnMgaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IGlzIFwiQ29tcGxldGVkXCJcbiAgICBlbHNlIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiICkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9JdGVtc1xuICAgICAgICAgICAgLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b0RvSXRlbS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBSZW5kZXIgYWxsIFRvZGF5IFRvRG9zIGZyb20gZGlmZmVyZW50IFByb2plY3JzIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpcyBcIlRvZGF5XCJcbiAgICBlbHNlIGlmIChjdXJyZW50UHJvamVjdC5pZCA9PT0gXCJ0b2RheS1wcm9qZWN0XCIgKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3JtYXQgY3VycmVudCBkYXRlIHNpbWlsYXIgdG8gdGhlIGRhdGUgc3RydWN0dXJlIG9mICdkdWVEYXRlJyBwcm9wZXJ0eSBvZiBUb0RvIG9iamVjdC5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LSR7KGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9LSR7Y3VycmVudERhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgICAgICAgICAgICAgIGlmICh0b0RvSXRlbS5kdWVEYXRlID09PSBmb3JtYXR0ZWRDdXJyZW50RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIFJlbmRlciBhbGwgVGhpcyBXZWVrIFRvRG9zIGZyb20gZGlmZmVyZW50IFByb2plY3JzIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpcyBcIlRoaXMgV2Vla1wiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwidGhpcy13ZWVrLXByb2plY3RcIiApIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBkYXRlLlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBkdWUgZGF0ZS5cbiAgICAgICAgICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSB0b0RvSXRlbS5kdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZHVlIGRhdGUgb2YgY3VycmVudCB0byBkbyBpcyBpbiBjdXJyZW50IFwidGhpcyB3ZWVrXCIuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVXZWVrKGN1cnJlbnREYXRlLCBkdWVEYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIElmIGN1cnJlbnQgcHJvamVjdCBpcyBub3QgXCJIb21lXCIgYW5kIG5vdCBcIkNvbXBsZXRlZFwiLCBvbmx5IHJlbmRlciBpdHMgcmVzcGVjdGl2ZSBUb0RvIGl0ZW1zLlxuICAgIGVsc2Uge1xuICAgICAgICBjdXJyZW50UHJvamVjdC50b0RvSXRlbXMuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICB1bnNvcnRlZFRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29ydC5cbiAgICBjb25zdCBzb3J0ZWRUb0RvSXRlbXMgPSBzb3J0VG9Eb0l0ZW1zKHVuc29ydGVkVG9Eb0l0ZW1zKTtcblxuICAgIC8vIFJlbmRlciBhbGwgVG9EbyBjYXJkcyB0byBUb0RvIHRhYi5cbiAgICBzb3J0ZWRUb0RvSXRlbXMuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgIHRvRG9UYWIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0NhcmQodG9Eb0l0ZW0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b0RvVGFiO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG9BZGRlckJ1dHRvbigpIHtcblxuICAgIC8vIENyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NOYW1lID0gXCJ0by1kby1hZGRlclwiO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFRvRG9cIjtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRoYXQgcG9wcyB0aGUgdG8gZG8gYWRkZXIgZm9ybSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwb3BVcFRvRG9BZGRlckZvcm0oKTtcbiAgICB9KTtcblxuICAgIC8vIFJldHVybiB0aGUgY3JlYXRlZCBidXR0b24gZWxlbWVudFxuICAgIHJldHVybiBidXR0b247XG59IiwiaW1wb3J0IHsgcmVuZGVyVG9Eb1dpbmRvdyB9IGZyb20gXCIuL3JlbmRlclRvRG9XaW5kb3dcIjtcblxubGV0IGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QocHJvamVjdCkge1xuICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG5cbiAgICByZW5kZXJUb0RvV2luZG93KGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdDtcbn0iLCIvKipcbiAqIFNvcnRzIGFuIGFycmF5IG9mIHRvLWRvIGl0ZW1zIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBzb3J0aW5nIGNyaXRlcmlhLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHVuc29ydGVkVG9Eb0l0ZW1zIC0gQW4gYXJyYXkgb2YgdG8tZG8gaXRlbXMgdG8gYmUgc29ydGVkLlxuICogQHJldHVybnMge0FycmF5fSAgQW4gYXJyYXkgb2Ygc29ydGVkIHRvLWRvIGl0ZW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFRvRG9JdGVtcyh1bnNvcnRlZFRvRG9JdGVtcykge1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBzb3J0ZXIgb3Igc2V0IHRoZSBkZWZhdWx0IHNvcnQgY3JpdGVyaWEuXG4gICAgY29uc3Qgc29ydENyaXRlcmlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzb3J0ZXJcIik/LnZhbHVlIHx8IFwidGltZS1jcmVhdGVkLWFzY2VuZGluZ1wiO1xuXG4gICAgLy8gQ3JlYXRlIGEgbWFwcGluZyBvZiBzb3J0IGNyaXRlcmlhIHRvIGNvbXBhcmlzb24gZnVuY3Rpb25zLlxuICAgIGNvbnN0IHNvcnRGdW5jdGlvbnMgPSB7XG4gICAgICAgIFwiZGF0ZS1hc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gbmV3IERhdGUoVG9EbzEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShUb0RvMi5kdWVEYXRlKSxcbiAgICAgICAgXCJkYXRlLWRlc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gbmV3IERhdGUoVG9EbzIuZHVlRGF0ZSkgLSBuZXcgRGF0ZShUb0RvMS5kdWVEYXRlKSxcbiAgICAgICAgXCJuYW1lLWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBUb0RvMS50aXRsZS5sb2NhbGVDb21wYXJlKFRvRG8yLnRpdGxlKSxcbiAgICAgICAgXCJuYW1lLWRlc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gVG9EbzIudGl0bGUubG9jYWxlQ29tcGFyZShUb0RvMS50aXRsZSksXG4gICAgICAgIFwidGltZS1jcmVhdGVkLWFzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMS5kYXRlQW5kVGltZUNyZWF0ZWQpIC0gbmV3IERhdGUoVG9EbzIuZGF0ZUFuZFRpbWVDcmVhdGVkKSxcbiAgICAgICAgXCJ0aW1lLWNyZWF0ZWQtZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBuZXcgRGF0ZShUb0RvMi5kYXRlQW5kVGltZUNyZWF0ZWQpIC0gbmV3IERhdGUoVG9EbzEuZGF0ZUFuZFRpbWVDcmVhdGVkKSxcbiAgICAgICAgXCJwcmlvcml0eS1hc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gcHJpb3JpdHlMZXZlbChUb0RvMSkgLSBwcmlvcml0eUxldmVsKFRvRG8yKSxcbiAgICAgICAgXCJwcmlvcml0eS1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IHByaW9yaXR5TGV2ZWwoVG9EbzIpIC0gcHJpb3JpdHlMZXZlbChUb0RvMSksXG4gICAgfTtcblxuICAgIC8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJpb3JpdHkgbGV2ZWwuXG4gICAgY29uc3QgcHJpb3JpdHlMZXZlbCA9IChUb0RvKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoVG9Eby5wcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSBcIkhpZ2hcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIGNhc2UgXCJMb3dcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEhhbmRsZSB1bmV4cGVjdGVkIHByaW9yaXR5IHZhbHVlcy5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTb3J0IHRoZSBhcnJheSB1c2luZyB0aGUgc2VsZWN0ZWQgY3JpdGVyaWEuXG4gICAgY29uc3Qgc29ydGVkVG9Eb0l0ZW1zID0gdW5zb3J0ZWRUb0RvSXRlbXMuc29ydChzb3J0RnVuY3Rpb25zW3NvcnRDcml0ZXJpYV0gfHwgKCgpID0+IDApKTtcblxuICAgIHJldHVybiBzb3J0ZWRUb0RvSXRlbXM7XG59XG4iLCIvKiEgKGMpIDIwMjAgQW5kcmVhIEdpYW1tYXJjaGkgKi9cblxuY29uc3Qge3BhcnNlOiAkcGFyc2UsIHN0cmluZ2lmeTogJHN0cmluZ2lmeX0gPSBKU09OO1xuY29uc3Qge2tleXN9ID0gT2JqZWN0O1xuXG5jb25zdCBQcmltaXRpdmUgPSBTdHJpbmc7ICAgLy8gaXQgY291bGQgYmUgTnVtYmVyXG5jb25zdCBwcmltaXRpdmUgPSAnc3RyaW5nJzsgLy8gaXQgY291bGQgYmUgJ251bWJlcidcblxuY29uc3QgaWdub3JlID0ge307XG5jb25zdCBvYmplY3QgPSAnb2JqZWN0JztcblxuY29uc3Qgbm9vcCA9IChfLCB2YWx1ZSkgPT4gdmFsdWU7XG5cbmNvbnN0IHByaW1pdGl2ZXMgPSB2YWx1ZSA9PiAoXG4gIHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlID8gUHJpbWl0aXZlKHZhbHVlKSA6IHZhbHVlXG4pO1xuXG5jb25zdCBQcmltaXRpdmVzID0gKF8sIHZhbHVlKSA9PiAoXG4gIHR5cGVvZiB2YWx1ZSA9PT0gcHJpbWl0aXZlID8gbmV3IFByaW1pdGl2ZSh2YWx1ZSkgOiB2YWx1ZVxuKTtcblxuY29uc3QgcmV2aXZlID0gKGlucHV0LCBwYXJzZWQsIG91dHB1dCwgJCkgPT4ge1xuICBjb25zdCBsYXp5ID0gW107XG4gIGZvciAobGV0IGtlID0ga2V5cyhvdXRwdXQpLCB7bGVuZ3RofSA9IGtlLCB5ID0gMDsgeSA8IGxlbmd0aDsgeSsrKSB7XG4gICAgY29uc3QgayA9IGtlW3ldO1xuICAgIGNvbnN0IHZhbHVlID0gb3V0cHV0W2tdO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByaW1pdGl2ZSkge1xuICAgICAgY29uc3QgdG1wID0gaW5wdXRbdmFsdWVdO1xuICAgICAgaWYgKHR5cGVvZiB0bXAgPT09IG9iamVjdCAmJiAhcGFyc2VkLmhhcyh0bXApKSB7XG4gICAgICAgIHBhcnNlZC5hZGQodG1wKTtcbiAgICAgICAgb3V0cHV0W2tdID0gaWdub3JlO1xuICAgICAgICBsYXp5LnB1c2goe2ssIGE6IFtpbnB1dCwgcGFyc2VkLCB0bXAsICRdfSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHRtcCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dFtrXSAhPT0gaWdub3JlKVxuICAgICAgb3V0cHV0W2tdID0gJC5jYWxsKG91dHB1dCwgaywgdmFsdWUpO1xuICB9XG4gIGZvciAobGV0IHtsZW5ndGh9ID0gbGF6eSwgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHtrLCBhfSA9IGxhenlbaV07XG4gICAgb3V0cHV0W2tdID0gJC5jYWxsKG91dHB1dCwgaywgcmV2aXZlLmFwcGx5KG51bGwsIGEpKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufTtcblxuY29uc3Qgc2V0ID0gKGtub3duLCBpbnB1dCwgdmFsdWUpID0+IHtcbiAgY29uc3QgaW5kZXggPSBQcmltaXRpdmUoaW5wdXQucHVzaCh2YWx1ZSkgLSAxKTtcbiAga25vd24uc2V0KHZhbHVlLCBpbmRleCk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZSA9ICh0ZXh0LCByZXZpdmVyKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gJHBhcnNlKHRleHQsIFByaW1pdGl2ZXMpLm1hcChwcmltaXRpdmVzKTtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dFswXTtcbiAgY29uc3QgJCA9IHJldml2ZXIgfHwgbm9vcDtcbiAgY29uc3QgdG1wID0gdHlwZW9mIHZhbHVlID09PSBvYmplY3QgJiYgdmFsdWUgP1xuICAgICAgICAgICAgICByZXZpdmUoaW5wdXQsIG5ldyBTZXQsIHZhbHVlLCAkKSA6XG4gICAgICAgICAgICAgIHZhbHVlO1xuICByZXR1cm4gJC5jYWxsKHsnJzogdG1wfSwgJycsIHRtcCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5ID0gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpID0+IHtcbiAgY29uc3QgJCA9IHJlcGxhY2VyICYmIHR5cGVvZiByZXBsYWNlciA9PT0gb2JqZWN0ID9cbiAgICAgICAgICAgIChrLCB2KSA9PiAoayA9PT0gJycgfHwgLTEgPCByZXBsYWNlci5pbmRleE9mKGspID8gdiA6IHZvaWQgMCkgOlxuICAgICAgICAgICAgKHJlcGxhY2VyIHx8IG5vb3ApO1xuICBjb25zdCBrbm93biA9IG5ldyBNYXA7XG4gIGNvbnN0IGlucHV0ID0gW107XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICBsZXQgaSA9ICtzZXQoa25vd24sIGlucHV0LCAkLmNhbGwoeycnOiB2YWx1ZX0sICcnLCB2YWx1ZSkpO1xuICBsZXQgZmlyc3RSdW4gPSAhaTtcbiAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcbiAgICBmaXJzdFJ1biA9IHRydWU7XG4gICAgb3V0cHV0W2ldID0gJHN0cmluZ2lmeShpbnB1dFtpKytdLCByZXBsYWNlLCBzcGFjZSk7XG4gIH1cbiAgcmV0dXJuICdbJyArIG91dHB1dC5qb2luKCcsJykgKyAnXSc7XG4gIGZ1bmN0aW9uIHJlcGxhY2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChmaXJzdFJ1bikge1xuICAgICAgZmlyc3RSdW4gPSAhZmlyc3RSdW47XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGFmdGVyID0gJC5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZW9mIGFmdGVyKSB7XG4gICAgICBjYXNlIG9iamVjdDpcbiAgICAgICAgaWYgKGFmdGVyID09PSBudWxsKSByZXR1cm4gYWZ0ZXI7XG4gICAgICBjYXNlIHByaW1pdGl2ZTpcbiAgICAgICAgcmV0dXJuIGtub3duLmdldChhZnRlcikgfHwgc2V0KGtub3duLCBpbnB1dCwgYWZ0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gYWZ0ZXI7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0b0pTT04gPSBhbnkgPT4gJHBhcnNlKHN0cmluZ2lmeShhbnkpKTtcbmV4cG9ydCBjb25zdCBmcm9tSlNPTiA9IGFueSA9PiBwYXJzZSgkc3RyaW5naWZ5KGFueSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2pzX21vZHVsZXMvUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tIFwiLi9qc19tb2R1bGVzL2NyZWF0ZVByb2plY3RDYXJkLmpzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9qc19tb2R1bGVzL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanNcIjtcbmltcG9ydCB7IHBvcFVwUHJvamVjdEFkZGVyRm9ybSB9IGZyb20gXCIuL2pzX21vZHVsZXMvcG9wVXBQcm9qZWN0QWRkZXJGb3JtLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIC8vIExvYWQgcHJvamVjdHMgZnJvbSBzdG9yYWdlIGFuZCBzZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IHRvIFwiSG9tZVwiLlxuICAgIFByb2plY3QubG9hZFByb2plY3RzKCk7XG4gICAgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KFByb2plY3QuaG9tZSk7XG5cbiAgICAvLyBMb2FkIHByb2plY3RzIHRvIHRoZSB0YWJzLCBzZXQgdXAgcHJvamVjdCBhZGRlciBidXR0b24sIGFuZCBwcm9qZWN0IGRyb3Bkb3duIGJ1dHRvbi5cbiAgICBsb2FkUHJvamVjdHNUb1RhYnMoKTtcbiAgICBzZXRVcFByb2plY3RBZGRlcigpO1xuICAgIHNldFVwUHJvamVjdERyb3Bkb3duKCk7XG59KTtcblxuLy8gTG9hZCBwcm9qZWN0cyB0byB0aGUgdGFicy5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c1RvVGFicygpIHtcbiAgICBjb25zdCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtdGFiXCIpO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lciA9IHByb2plY3RzVGFiLnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyID0gcHJvamVjdHNUYWIucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJvamVjdCBpcyBhIGRlZmF1bHQgcHJvamVjdCBvciBub3QuXG4gICAgICAgIGlmIChpc0RlZmF1bHRQcm9qZWN0KHByb2plY3QpKSB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBDaGVjayBpZiBhIHByb2plY3QgaXMgYSBkZWZhdWx0IHByb2plY3QuXG5mdW5jdGlvbiBpc0RlZmF1bHRQcm9qZWN0KHByb2plY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcImhvbWUtcHJvamVjdFwiIHx8XG4gICAgICAgIHByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIiB8fFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcInRvZGF5LXByb2plY3RcIiB8fFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCJcbiAgICApO1xufVxuXG4vLyBTZXQgdXAgdGhlIHByb2plY3QgYWRkZXIgYnV0dG9uLlxuZnVuY3Rpb24gc2V0VXBQcm9qZWN0QWRkZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdEFkZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZGVyXCIpO1xuICAgIHByb2plY3RBZGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBQb3AgdXAgdGhlIHByb2plY3QgYWRkZXIgZm9ybSB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgICAgcG9wVXBQcm9qZWN0QWRkZXJGb3JtKCk7XG4gICAgfSk7XG59XG5cbi8vIFNldCB1cCB0aGUgcHJvamVjdCBkcm9wZG93biBidXR0b24uXG5mdW5jdGlvbiBzZXRVcFByb2plY3REcm9wZG93bigpIHtcbiAgICBjb25zdCBwcm9qZWN0RHJvcGRvd25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd25cIik7XG4gICAgcHJvamVjdERyb3Bkb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGRlclwiKVxuXG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgJ2FjdGl2ZScgYW5kICdpbmFjdGl2ZScgY2xhc3NlcyBmb3IgdGhlIGNyZWF0ZWQgcHJvamVjdHMgY29udGFpbmVyLlxuICAgICAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgICAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAvLyBUb2dnbGUgdGhlICdhY3RpdmUnIGFuZCAnaW5hY3RpdmUnIGNsYXNzZXMgZm9yIHRoZSBwcm9qZWN0IGFkZGVyLlxuICAgICAgICBwcm9qZWN0QWRkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgICAgICBwcm9qZWN0QWRkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==