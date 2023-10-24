/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
        });

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
  constructor() {
    let title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let toDoItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    // Set the project title.
    this.title = title !== null ? title : null;

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
      this.id = generateUniqueId({
        length: 15,
        useNumbers: true,
        useLetters: true
      });
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
  constructor(title, description, dueDate, priority, notes) {
    let completed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    let dateAndTimeCreated = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
    let dateModified = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    let project = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed !== null ? completed : false;
    this.dateAndTimeCreated = dateAndTimeCreated !== null ? dateAndTimeCreated : new Date().toLocaleString();
    this.dateModified = dateModified !== null ? dateModified : null;
    this.project = project !== null ? project : null;
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
  projectCard.className = "project-card";
  projectCard.id = project.id;

  // Add referece to the project object.
  projectCard.projectReference = project;

  // Add 'home' icon to home-project.
  if (project.id === "home-project") {
    const homeIcon = document.createElement("div");
    homeIcon.className = "icon-container";
    homeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>Home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>`;
    projectCard.appendChild(homeIcon);
  }
  // Add 'completed' icon to completed-project.
  else if (project.id === "completed-project") {
    const completedIcon = document.createElement("div");
    completedIcon.className = "icon-container";
    completedIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>Completed</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>`;
    projectCard.appendChild(completedIcon);
  }
  // Add 'today' icon to today-project.
  else if (project.id === "today-project") {
    const todayIcon = document.createElement("div");
    todayIcon.className = "icon-container";
    todayIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>Today</title><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>`;
    projectCard.appendChild(todayIcon);
  }
  // Add 'this-week' icon to this-week-project.
  else if (project.id === "this-week-project") {
    const thisWeekIcon = document.createElement("div");
    thisWeekIcon.className = "icon-container";
    thisWeekIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><title>This Week</title><path d="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z" /></svg>`;
    projectCard.appendChild(thisWeekIcon);
  }

  // Put project title inside the project card.
  const projectTitle = document.createElement("div");
  projectTitle.className = "project-name";
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
  });
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
  deleteButton.addEventListener("click", event => {
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
  });
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
  toDoCard.className = "to-do-container";

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
  toDoTitle.className = "to-do-title";
  toDoTitle.textContent = ToDo.title;
  toDoCard.appendChild(toDoTitle);

  // Create to-do due date container.
  const toDoDueDate = document.createElement("div");

  // Classify whether ToDo due date is already late or just upcoming.
  if (isToDoLate(ToDo.dueDate)) {
    toDoDueDate.className = "to-do-due-date late";
  } else {
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
    if (window.confirm("Confirm deletion?")) {
      // Delete Project (back-end)
      toDoCard.toDoReference.delete();

      // Delete Project (front-end)
      toDoCard.parentNode.removeChild(toDoCard);
    }
  });
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
  checkBox.className = "to-do-checkbox";
  checkBox.addEventListener("click", () => {
    let isToDoCompleted = toDoCard.toDoReference.completed;
    if (isToDoCompleted) {
      toDoCard.toDoReference.completed = false;
      toDoCard.className = "to-do-container";

      // If a 'completed' to-do is set to 'unfinished' to do, remove it from the "Completed" project's to-do window.
      if ((0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentlySelectedProject)().id === "completed-project") {
        toDoCard.parentElement.removeChild(toDoCard);
      }
    } else {
      toDoCard.toDoReference.completed = true;
      toDoCard.className = "to-do-container completed";
    }

    // Update changes inside parent project.
    toDoCard.toDoReference.project.replaceToDo(toDoCard.toDoReference, toDoCard.toDoReference);
  });
  toDoCard.appendChild(checkBox);
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
  const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
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
  formContainer.appendChild(form);

  // Create cancel button.
  const cancelButton = document.createElement("input");
  cancelButton.type = "button";
  cancelButton.value = "Cancel";
  cancelButton.addEventListener("click", () => {
    formContainer.parentElement.removeChild(formContainer);
  });
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
    const projectCard = (0,_createProjectCard_js__WEBPACK_IMPORTED_MODULE_1__.createProjectCard)(project);

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
  });
  projectEditorForm.appendChild(cancelButton);

  // Add feature to project editor form that modifies the project title when submitted.
  projectEditorForm.addEventListener("submit", event => {
    event.preventDefault();

    // Ask for user confirmation before editing.
    if (window.confirm("Confirm changes?")) {
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
  });
  toDoAdderForm.appendChild(cancelButton);

  // Add feature to form that when submitted, a ToDo object is created.
  toDoAdderForm.addEventListener("submit", event => {
    event.preventDefault();
    const toDoTitle = document.querySelector("#title").value;
    const toDoDescription = document.querySelector("#description").value;
    const toDoDueDate = document.querySelector("#due-date").value;
    const toDoPriority = document.querySelector("#priority").value;
    const toDoNotes = document.querySelector("#notes").value;
    const toDoItem = new _ToDo_js__WEBPACK_IMPORTED_MODULE_2__.ToDo(...[toDoTitle, toDoDescription, toDoDueDate, toDoPriority, toDoNotes]);
    (0,_selectedProjectManager_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentlySelectedProject)().addToDo(toDoItem);

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
  formContainer.appendChild(toDoEditorForm);

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
  });
  toDoEditorForm.appendChild(cancelButton);

  // Add feature to form that when submitted, a ToDo object is created.
  toDoEditorForm.addEventListener("submit", event => {
    // Prevent form submission.
    event.preventDefault();

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
  backgroundContainer.className = "to-do-info-background";

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
    infoValue.id = `${label.toLowerCase()}-info`;
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
  currentProjectNameCard.className = "parent-project-name";
  currentProjectNameCard.textContent = currentProject.title;
  return currentProjectNameCard;
}
function createSorter(currentProject) {
  // Create div to contain the sorter.
  const sorterContainer = document.createElement("div");
  sorterContainer.className = "sort-container";

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
  const sortingOptions = [{
    value: "time-created-ascending",
    text: "Created (Oldest to Newest)"
  }, {
    value: "time-created-descending",
    text: "Created (Newest to Oldest)"
  }, {
    value: "date-ascending",
    text: "Date (ascending)"
  }, {
    value: "date-descending",
    text: "Date (descending)"
  }, {
    value: "name-ascending",
    text: "Name (ascending)"
  }, {
    value: "name-descending",
    text: "Name (descending)"
  }, {
    value: "priority-ascending",
    text: "Priority (Lowest to Highest)"
  }, {
    value: "priority-descending",
    text: "Priority (Highest to Lowest)"
  }];

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
  });

  // Re-render to-do tab so that to-do item's new sort critera will be refrected
  sorter.addEventListener("change", () => {
    const currentToDoTab = document.querySelector(".to-do-tab");
    currentToDoTab.parentElement.replaceChild(createToDoTab(currentProject), currentToDoTab);
  });
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
    _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems.forEach(toDoItem => {
      unsortedToDoItems.push(toDoItem);
    }));
  }
  // Render all completed ToDos from different Projecrs if the currently selected project is "Completed"
  else if (currentProject.id === "completed-project") {
    _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems.forEach(toDoItem => {
      if (toDoItem.completed) {
        unsortedToDoItems.push(toDoItem);
      }
    }));
  }
  // Render all Today ToDos from different Projecrs if the currently selected project is "Today"
  else if (currentProject.id === "today-project") {
    _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems.forEach(toDoItem => {
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
  else if (currentProject.id === "this-week-project") {
    _Project__WEBPACK_IMPORTED_MODULE_0__.Project.projects.forEach(project => project.toDoItems.forEach(toDoItem => {
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
    "priority-descending": (ToDo1, ToDo2) => priorityLevel(ToDo2) - priorityLevel(ToDo1)
  };

  // Define a function to get the priority level.
  const priorityLevel = ToDo => {
    switch (ToDo.priority) {
      case "High":
        return 3;
      case "Medium":
        return 2;
      case "Low":
        return 1;
      default:
        return 0;
      // Handle unexpected priority values.
    }
  };

  // Sort the array using the selected criteria.
  const sortedToDoItems = unsortedToDoItems.sort(sortFunctions[sortCriteria] || (() => 0));
  return sortedToDoItems;
}

/***/ }),

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
    overflow-y: hidden;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\n.icon {\n    height: 10px;\n    width: 10px;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap');\n\n:root {\n    --text: #10090c;\n    --background: #fdfcfc;\n    --primary: #b7d7c9;\n    --secondary: #d8e7e9;\n    --accent: #579d5a;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    width: 100vw;\n    height: 100vh;\n    padding: 10px;\n    background-color: grey;\n}\n\n/* Content Container */\n.content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n/* Dashboard */\n.dashboard {\n    background-color: black;\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    gap: 10px;\n    overflow: auto;\n}\n\n.logo {\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: white;\n}\n\n.projects-tab {\n    display: grid;\n    gap: 10px;\n}\n\n/* Default Projects Container */\n.default-projects-container {\n    display: grid;\n    gap: 10px;\n}\n\n/* Created Projects Container */\n.created-projects-container.inactive {\n    display: none;\n}\n\n.created-projects-container.active {\n    margin-left: 13px;\n    border-left: 3px solid white;\n    display: grid;\n    grid-auto-rows: 40px;\n    gap: 3px;\n\n    max-height: 200px;\n    overflow: scroll;\n}\n\n.created-projects-container.active .project-card {\n    align-items: center;\n}\n\n.created-projects-container .delete, \n.created-projects-container .edit {\n    height: 20px;\n}\n\n.created-projects-container .project-name {\n    height: 45px;\n    padding: 15px 0 ;\n}\n\n/* Project Card */\n.project-card {\n    padding: 5px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 1fr 25px 25px;\n    gap: 5px;\n    align-content: center;\n}\n\n.project-card button {\n    height: 20px;\n}\n\n.project-card:hover,\n.project-adder:hover {\n    background-color: grey;\n}\n\n.created-projects-container.active>* {\n    margin-left: 10px;\n    padding: 4px;\n    border-radius: 6px;\n    font-size: 14px;\n    color: white;\n}\n\n/* Project and Dropdown Icons */\n#home-project,\n#completed-project,\n#today-project,\n#this-week-project,\n#created-projects-dropdown {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    justify-content: start;\n    grid-template-columns: auto 1fr;\n    color: white;\n}\n\n#home-project .icon,\n#completed-project .icon,\n#today-project .icon,\n#this-week-project .icon,\n#created-projects-dropdown .icon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: black;\n    height: 17px;\n    width: 17px;\n}\n\n#created-projects-dropdown {\n    border: 2px solid grey;\n}\n\n#created-projects-dropdown .icon.dropdown {\n    fill: white;\n}\n\n.created-projects-container.active .project-name,\n.to-do-title,\n.parent-project-name {\n    display: grid;\n    align-content: center;\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n\n/* Project Adder */\n.project-adder.active {\n    padding: 5px;\n    border: 0px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 20px auto;\n    grid-template-rows: 20px;\n    gap: 10px;\n    justify-content: start;\n    align-items: center;\n    justify-items: start;\n    background-color: transparent;\n    color: white;\n}\n\n.project-adder.active:hover {\n    background-color: grey;\n}\n\n.project-adder.inactive {\n    display: none;\n}\n\n.project-adder .icon,\n.to-do-adder .icon {\n    width: 20px;\n    height: 20px;\n    fill: white;\n}\n\n/* To-Do Window */\n.to-do-window {\n    background-color: rgb(187, 181, 181);\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto 1fr;\n    overflow: hidden;\n    align-content: start;\n    gap: 10px;\n}\n\n.parent-project-name {\n    padding-bottom: 10px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.sort-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 3px;\n}\n\nlabel[for=\"sorter\"] {\n    font-size: 14px;\n}\n\n#sorter {\n    color: black;\n    background-color: white;\n    display: block;\n    width: 200px;\n    height: 25px;\n\n    border: 2px solid grey;\n    border-radius: 6px;\n}\n\n#sorter:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\n\n/* To-Do Tab */\n.to-do-tab {\n    grid-column: 1 / 3;\n    display: grid;\n    grid-auto-rows: 65px;\n    align-content: start;\n    gap: 5px;\n    overflow: auto;\n}\n\n/* To-Do Container */\n.to-do-container {\n    padding: 10px;\n    border-radius: 6px;\n    display: grid;\n    grid-template-columns: 25px 1fr auto 25px 25px 25px;\n    align-items: center;\n    gap: 5px;\n    align-content: center;\n    background-color: white;\n}\n\n.to-do-title {\n    height: 50px;\n}\n\n.to-do-due-date {\n    height: 20px;\n    width: 125px;\n    padding: 3px;\n    border: 2px solid;\n    border-radius: 5px;\n\n    font-size: 13px;\n    text-transform: uppercase;\n\n    display: grid;\n    align-content: center;\n}\n\n.to-do-due-date.upcoming {\n    border-color: #6dcb68;\n    color: #6dcb68;\n}\n\n.to-do-due-date.late {\n    border-color: #d0645d;\n    color: #d0645d;\n}\n\n/* To-Do Adder */\n.to-do-adder {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    align-self: end;\n    justify-self: end;\n\n    width: 120px;\n    padding: 10px;\n    border: 0px;\n    border-radius: 6px;\n    font-size: 15px;\n    font-weight: 700;\n    color: black;\n    text-align: justify;\n    background-color: white;\n\n    display: grid;\n    align-content: center;\n\n    text-align: center;\n}\n\n.to-do-adder,\n#sorter {\n    height: 30px;\n}\n\n.to-do-adder:hover,\n.to-do-adder:active {\n    background-color: black;\n    color: white;\n}\n\n/* To-Do Info Background */\n.to-do-info-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    backdrop-filter: blur(5px);\n    overflow: auto;\n}\n\n/* To-Do Info Container */\n.to-do-info-container {\n    margin: 25px 0;\n    width: 400px;\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    max-width: 80%;\n    height: 600px;\n    overflow: hidden;\n}\n\n.info-field-container {\n    padding-top: 5px;\n    padding-right: 3px;\n    padding-left: 3px;\n    padding-bottom: 30px;\n    height: 550px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n\n    overflow-y: auto;\n}\n\n.close {\n    padding-bottom: 10px;\n    display: grid;\n    justify-content: start;\n\n    height: auto;\n    width: auto;\n}\n\n.close .icon {\n    width: 20px;\n    height: 20px;\n}\n\n.close .icon:hover {\n    fill: red;\n}\n\n.info-field {\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr;\n}\n\n.to-do-info-label {\n    width: 100%;\n    font-weight: 600;\n}\n\n.to-do-info-value {\n    border: 2px solid grey;\n    border-radius: 6px;\n    padding: 5px;\n    overflow: auto;\n    word-wrap: break-word;\n    width: 100%;\n    overflow: auto;\n}\n\n#title-info,\n#project-info {\n    height: 30px;\n}\n\n#description-info,\n#notes-info {\n    height: 90px;\n}\n\n/* Form Container */\n.form-container {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(101, 101, 101, 0.22);\n    backdrop-filter: blur(1px);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    overflow: auto;\n}\n\n/* Form Styles */\nform {\n    width: 300px;\n    background-color: white;\n    border-radius: 10px;\n    padding: 25px;\n    display: grid;\n    gap: 10px;\n    color: black;\n}\n\ntextarea {\n    resize: none;\n}\n\nform input,\nform select,\nform textarea {\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2px solid rgb(215, 211, 211);\n    padding: 5px 7px;\n}\n\nform input:focus,\nform select:focus,\nform textarea:focus {\n    outline: none;\n    border: 2px solid black;\n}\n\ninput[type=submit],\ninput[type=button] {\n    width: 100%;\n    height: 25px;\n    border-radius: 5px;\n    border: 0px;\n    background-color: rgb(82, 77, 77);\n    color: white;\n}\n\ninput[type=submit]:hover,\ninput[type=button]:hover {\n    border-color: black;\n    background-color: black;\n}\n\n.delete,\n.edit {\n    border: none;\n    background-color: transparent;\n}\n\n/* Icon Visibility */\n.project-card .icon,\n.to-do-container .icon {\n    display: block;\n    height: 16px;\n    width: 16px;\n}\n\n.project-card .icon {\n    fill: white;\n}\n\n.to-do-container .icon {\n    fill: black;\n}\n\n.delete:hover .icon {\n    display: block;\n    fill: red;\n}\n\n.edit:hover .icon {\n    display: block;\n    fill: green;\n}\n\n/* Completed To-Do Style */\n.to-do-container.completed {\n    background-color: rgb(173, 238, 173);\n}\n\n\n@media (max-width: 650px) {\n\n    #home-project,\n    #completed-project,\n    #today-project,\n    #this-week-project,\n    #created-projects-dropdown {\n        white-space: nowrap;\n    }\n\n    /* Adjust the dashboard and to-do window to stack on top of each other */\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto 1fr;\n    }\n\n    .projects-tab * {\n        font-size: 13px;\n    }\n\n    .projects-tab {\n        gap: 3px;\n    }\n\n    .created-projects-container.active {\n        max-height: 125px;\n    }\n\n    #home-project .icon,\n    #completed-project .icon,\n    #today-project .icon,\n    #this-week-project .icon,\n    #created-projects-dropdown .icon,\n    .project-adder .icon {\n        width: 15px;\n        height: 15px;\n    }\n\n    .logo {\n        font-size: 16px;\n    }\n\n    .default-projects-container {\n        padding: 0 0 10px 0;\n        grid-auto-flow: column;\n\n        gap: 1px;\n        width: 100%;\n        overflow: auto;\n    }\n\n    .to-do-container {\n        height: 50px;\n        gap: 4px;\n    }\n\n    .to-do-title {\n        font-size: 12px;\n    }\n\n    .to-do-due-date.late,\n    .to-do-due-date.upcoming {\n        font-size: 10px;\n    }\n\n    .to-do-due-date.late,\n    .to-do-due-date.upcoming {\n        width: 100px;\n    }\n\n    .parent-project-name {\n        font-size: 17px;\n    }\n\n    #sorter,\n    label [for=\"sorter\"],\n    .to-do-adder {\n        font-size: 12px;\n    }\n\n    #sorter {\n        width: 170px;\n    }\n\n    .to-do-adder {\n        width: 90px;\n    }\n}"],"sourceRoot":""}]);
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
  return project.id === "home-project" || project.id === "completed-project" || project.id === "today-project" || project.id === "this-week-project";
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
    const projectAdder = document.querySelector(".project-adder");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sU0FBUyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFB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QUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDekNGLFlBQVksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQzNDLENBQUMsQ0FBQztBQUNOLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvY3JlYXRlUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvY3JlYXRlVG9Eb0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvZm9ybWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFByb2plY3RBZGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBQcm9qZWN0RWRpdG9yRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFRvRG9BZGRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvcG9wVXBUb0RvRWRpdG9yRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9wb3BVcFRvRG9JbmZvQ2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanNfbW9kdWxlcy9yZW5kZXJUb0RvV2luZG93LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qc19tb2R1bGVzL3NlbGVjdGVkUHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzX21vZHVsZXMvc29ydFRvRG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY29tcGFyZS13ZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZ2VuZXJhdGUtdW5pcXVlLWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9pcy1kYXRlLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvd2Vlay1pZGVudGlmaWVyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0dGVkL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2UsIHN0cmluZ2lmeSB9IGZyb20gJ2ZsYXR0ZWQnO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG8uanNcIjtcbmNvbnN0IGdlbmVyYXRlVW5pcXVlSWQgPSByZXF1aXJlKFwiZ2VuZXJhdGUtdW5pcXVlLWlkXCIpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwcm9qZWN0IGl0ZW0uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIHByb2plY3QuIFxuICogQHBhcmFtIHtBcnJheX0gdG9Eb0l0ZW1zIC0gQXJyYXkgY29udGFpbmluZyBUb0RvIG9iamVjdHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBJRCBmb3IgdGhlIHByb2VqY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcblxuICAgIC8vIFN0b3JhZ2Ugb2YgYWxsIFwiUHJvamVjdFwiIGluc3RhbmNlcy5cbiAgICBzdGF0aWMgcHJvamVjdHMgPSBbXTtcblxuICAgIC8vIEhvbWUgcHJvamVjdC5cbiAgICBzdGF0aWMgaG9tZTtcblxuICAgIC8vIExvYWQgc2F2ZWQgXCJQcm9qZWN0LnByb2plY3RzXCIgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgICAgICAvLyBMb2FkIHNlcmlhbGl6ZWQgc2F2ZWQgcHJvamVjdHMuXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTYXZlZFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QucHJvamVjdHNcIik7XG4gICAgICAgIGlmIChzZXJpYWxpemVkU2F2ZWRQcm9qZWN0KSB7XG5cbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBzZXJpYWxpemVkIHNhdmUgcHJvamVjdHMuXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0ID0gcGFyc2Uoc2VyaWFsaXplZFNhdmVkUHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBibGFuayBcIlByb2plY3RcIiBvYmplY3RzIHRvIGJlIHBvcHVsYXRlZC5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkU2VyaWFsaXplZFNhdmVkUHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ldyBQcm9qZWN0KG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgYmxhbmsgcHJvamVjdHMgd2l0aCBcInByb2plY3QgdGlsZVwiLCBcInRvLWRvIGl0ZW1zXCIsIGFuZCBcInByb2plY3QgaWRcIiBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFByb2plY3QucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJvamVjdHMnIHJlc3BlY3RpdmUgdGl0bGVzLlxuICAgICAgICAgICAgICAgIFByb2plY3QucHJvamVjdHNbaV0udGl0bGUgPSBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0W2ldLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwcm9qZWN0cycgcmVzcGVjdGl2ZSB0by1kbyBpdGVtcy5cbiAgICAgICAgICAgICAgICBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0W2ldLnRvRG9JdGVtcy5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdC5wcm9qZWN0c1tpXS5hZGRUb0RvKG5ldyBUb0RvKC4uLk9iamVjdC52YWx1ZXModG9Eb0l0ZW0pKSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcHJvamVjdHMncyByZXNwZWN0aXZlIElELlxuICAgICAgICAgICAgICAgIFByb2plY3QucHJvamVjdHNbaV0uaWQgPSBwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0W2ldLmlkO1xuXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcHJvamVjdHMgdG8gYmUgbG9hZCwgY3JlYXRlIGRlZmF1bHQgXCJIb21lXCIgcHJvamVjdCBhbmQgXCJDb21wbGV0ZWRcIiBwcm9qZWN0LlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiSG9tZVwiLCBudWxsLCBcImhvbWUtcHJvamVjdFwiKTtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiQ29tcGxldGVkXCIsIG51bGwsIFwiY29tcGxldGVkLXByb2plY3RcIik7XG4gICAgICAgICAgICBuZXcgUHJvamVjdChcIlRvZGF5XCIsIG51bGwsIFwidG9kYXktcHJvamVjdFwiKTtcbiAgICAgICAgICAgIG5ldyBQcm9qZWN0KFwiVGhpcyBXZWVrXCIsIG51bGwsIFwidGhpcy13ZWVrLXByb2plY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdXQgaG9tZSBwcm9qZWN0IHRvIHN0YXRpYyB2YXJpYWJsZS5cbiAgICAgICAgUHJvamVjdC5ob21lID0gUHJvamVjdC5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gXCJob21lLXByb2plY3RcIik7XG4gICAgfVxuXG4gICAgLy8gUHJvamVjdCBDb25zdHJ1Y3Rvci5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSA9IG51bGwsIHRvRG9JdGVtcyA9IG51bGwsIGlkID0gbnVsbCkge1xuXG4gICAgICAgIC8vIFNldCB0aGUgcHJvamVjdCB0aXRsZS5cbiAgICAgICAgdGhpcy50aXRsZSA9ICh0aXRsZSAhPT0gbnVsbCkgPyB0aXRsZSA6IG51bGw7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgICAgICBpZiAodG9Eb0l0ZW1zICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IHRvRG9JdGVtcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIFwidG9Eb0l0ZW1zXCIgdG8gYmxhbmsgYXJyYXkgaWYgbm9uZSBpcyBwcm92aWRlZCBkdXJpbmcgaW5zdGFudGlhdGlvbi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHByb2plY3QncyBJRCB0byBnaXZlbiBwcm9qZWN0IElEIGR1cmluZyBwcm9qZWN0IGluc3RhbnRpYXRpb24uXG4gICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBhIGdlbmVyYXRlZCAxNS1jaGFyYWN0ZXIgSUQgdG8gcHJvamVjdCBpZiBub3RoaW5nIHdhcyBwcm92aWRlZCBkdXJpbmcgUHJvamVjdCdzIGluc3RhbnRpYXRpb24uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGdlbmVyYXRlVW5pcXVlSWQoeyBsZW5ndGg6IDE1LCB1c2VOdW1iZXJzOiB0cnVlLCB1c2VMZXR0ZXJzOiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBQcm9qZWN0IG9iamVjdCBpbnNpZGUgXCJwcm9qZWN0c1wiIGFycmF5LlxuICAgICAgICBQcm9qZWN0LnByb2plY3RzLnB1c2godGhpcyk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgcHJvamVjdCBmcm9tIHRoZSBcIlByb2plY3QucHJvamVjdHNcIiBhcnJheS5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuc3BsaWNlKFByb2plY3QucHJvamVjdHMuaW5kZXhPZih0aGlzKSwgMSk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBFZGl0IHByb2plY3QgdGl0bGUuXG4gICAgc2V0UHJvamVjdFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIFRvRG8gSXRlbSBpbnNpZGUgdGhlIHByb2plY3QuXG4gICAgYWRkVG9EbyhUb0RvKSB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBwcm9qZWN0IHJlZmVyZW5jZSBwcm9wZXJ0eSBvZiB0aGUgVG9EbyBpdGVtIHRvICd0aGlzJyBjdXJyZW50IHByb2plY3QgaW5zdGFuY2UuXG4gICAgICAgIFRvRG8ucHJvamVjdCA9IHRoaXM7XG5cbiAgICAgICAgLy8gQWRkIHRoZSB0byBkbyBpdGVtIHRvICd0aGlzJyBwcm9qZWN0cyBhcnJheSBvZiB0byBkbyBpdGVtcy5cbiAgICAgICAgdGhpcy50b0RvSXRlbXMucHVzaChUb0RvKTtcblxuICAgICAgICAvLyBTYXZlIHNlcmlhbGl6ZWQgY2hhbmdlcyB0byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICBQcm9qZWN0LiNzYXZlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBhIFRvRG8gSXRlbSBpbnNpZGUgdGhlIHByb2plY3QncyBcInRvRG9JdGVtc1wiIGFycmF5LlxuICAgIGRlbGV0ZVRvRG8oVG9Ebykge1xuICAgICAgICB0aGlzLnRvRG9JdGVtcy5zcGxpY2UodGhpcy50b0RvSXRlbXMuaW5kZXhPZihUb0RvKSwgMSk7XG5cbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgUHJvamVjdC4jc2F2ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIFRvRG8gaXRlbXMgaW5zaWRlIHRoZSBwcm9qZWN0J3MgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICByZXBsYWNlVG9EbyhuZXdUb0RvLCBvbGRUb0RvKSB7XG5cbiAgICAgICAgLy8gU2V0IG5ldyBUb0RvIGl0ZW0ncyBwcm9qZWN0IHJlZmVyZW5jZSB0byB0aGlzIHByb2plY3QuXG4gICAgICAgIG5ld1RvRG8ucHJvamVjdCA9IHRoaXM7XG5cbiAgICAgICAgLy8gUmVwbGFjZSBUb0RvIGl0ZW0gd2l0aCB0aGUgbmV3IFRvRG8gaXRlbS5cbiAgICAgICAgdGhpcy50b0RvSXRlbXNbdGhpcy50b0RvSXRlbXMuaW5kZXhPZihvbGRUb0RvKV0gPSBuZXdUb0RvO1xuXG4gICAgICAgIC8vIFNhdmUgc2VyaWFsaXplZCBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIFByb2plY3QuI3NhdmVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljICNzYXZlQ2hhbmdlcygpIHtcbiAgICAgICAgLy8gU2F2ZSBzZXJpYWxpemVkIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0LnByb2plY3RzXCIsIHN0cmluZ2lmeShQcm9qZWN0LnByb2plY3RzKSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAY2xhc3NcbiAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIHRvLWRvIGl0ZW0gd2l0aCB2YXJpb3VzIGRldGFpbHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb3IgbmFtZSBvZiB0aGUgdG8tZG8gaXRlbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIEEgZGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIHRvLWRvIGl0ZW0uXG4gKiBAcGFyYW0ge0RhdGV9IGR1ZURhdGUgLSBUaGUgZHVlIGRhdGUgZm9yIGNvbXBsZXRpbmcgdGhlIHRvLWRvIGl0ZW0uXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJpb3JpdHkgLSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIHRvLWRvIGl0ZW0gKGUuZy4sIFwiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBub3RlcyAtIEFkZGl0aW9uYWwgbm90ZXMgb3IgY29tbWVudHMgcmVsYXRlZCB0byB0aGUgdG8tZG8gaXRlbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRvRG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0ZWQ9bnVsbCwgZGF0ZUFuZFRpbWVDcmVhdGVkPW51bGwsIGRhdGVNb2RpZmllZD1udWxsLCBwcm9qZWN0ID0gbnVsbCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gKGNvbXBsZXRlZCAhPT0gbnVsbCkgPyBjb21wbGV0ZWQgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRlQW5kVGltZUNyZWF0ZWQgPSAoZGF0ZUFuZFRpbWVDcmVhdGVkICE9PSBudWxsKSA/IGRhdGVBbmRUaW1lQ3JlYXRlZCA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgdGhpcy5kYXRlTW9kaWZpZWQgPSAoZGF0ZU1vZGlmaWVkICE9PSBudWxsKSA/IGRhdGVNb2RpZmllZCA6IG51bGw7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IChwcm9qZWN0ICE9PSBudWxsKSA/IHByb2plY3QgOiBudWxsO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0LmRlbGV0ZVRvRG8odGhpcyk7XG4gICAgfVxufSIsImltcG9ydCB7IHBvcFVwUHJvamVjdEVkaXRvckZvcm0gfSBmcm9tIFwiLi9wb3BVcFByb2plY3RFZGl0b3JGb3JtLmpzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuIFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcblxuICAgIC8vIENyZWF0ZSBhIGNhcmQgZm9yIFwiUHJvamVjdFwiLlxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc05hbWUgPSBcInByb2plY3QtY2FyZFwiXG4gICAgcHJvamVjdENhcmQuaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgLy8gQWRkIHJlZmVyZWNlIHRvIHRoZSBwcm9qZWN0IG9iamVjdC5cbiAgICBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlID0gcHJvamVjdDtcblxuICAgIC8vIEFkZCAnaG9tZScgaWNvbiB0byBob21lLXByb2plY3QuXG4gICAgaWYgKHByb2plY3QuaWQgPT09IFwiaG9tZS1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob21lSWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgaG9tZUljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+SG9tZTwvdGl0bGU+PHBhdGggZD1cIk0xMCwyMFYxNEgxNFYyMEgxOVYxMkgyMkwxMiwzTDIsMTJINVYyMEgxMFpcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGhvbWVJY29uKTtcbiAgICB9XG4gICAgLy8gQWRkICdjb21wbGV0ZWQnIGljb24gdG8gY29tcGxldGVkLXByb2plY3QuXG4gICAgZWxzZSBpZiAocHJvamVjdC5pZCA9PT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb21wbGV0ZWRJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICBjb21wbGV0ZWRJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPkNvbXBsZXRlZDwvdGl0bGU+PHBhdGggZD1cIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJTNi41IDIyIDEyIDIyIDIyIDE3LjUgMjIgMTIgMTcuNSAyIDEyIDJNMTAgMTdMNSAxMkw2LjQxIDEwLjU5TDEwIDE0LjE3TDE3LjU5IDYuNThMMTkgOEwxMCAxN1pcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlZEljb24pO1xuICAgIH1cbiAgICAvLyBBZGQgJ3RvZGF5JyBpY29uIHRvIHRvZGF5LXByb2plY3QuXG4gICAgZWxzZSBpZiAocHJvamVjdC5pZCA9PT0gXCJ0b2RheS1wcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kYXlJY29uLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIlxuICAgICAgICB0b2RheUljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+VG9kYXk8L3RpdGxlPjxwYXRoIGQ9XCJNMy41NSAxOS4wOUw0Ljk2IDIwLjVMNi43NiAxOC43MUw1LjM0IDE3LjI5TTEyIDZDOC42OSA2IDYgOC42OSA2IDEyUzguNjkgMTggMTIgMTggMTggMTUuMzEgMTggMTJDMTggOC42OCAxNS4zMSA2IDEyIDZNMjAgMTNIMjNWMTFIMjBNMTcuMjQgMTguNzFMMTkuMDQgMjAuNUwyMC40NSAxOS4wOUwxOC42NiAxNy4yOU0yMC40NSA1TDE5LjA0IDMuNkwxNy4yNCA1LjM5TDE4LjY2IDYuODFNMTMgMUgxMVY0SDEzTTYuNzYgNS4zOUw0Ljk2IDMuNkwzLjU1IDVMNS4zNCA2LjgxTDYuNzYgNS4zOU0xIDEzSDRWMTFIMU0xMyAyMEgxMVYyM0gxM1wiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodG9kYXlJY29uKTtcbiAgICB9XG4gICAgLy8gQWRkICd0aGlzLXdlZWsnIGljb24gdG8gdGhpcy13ZWVrLXByb2plY3QuXG4gICAgZWxzZSBpZiAocHJvamVjdC5pZCA9PT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHRoaXNXZWVrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXNXZWVrSWNvbi5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCJcbiAgICAgICAgdGhpc1dlZWtJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPlRoaXMgV2VlazwvdGl0bGU+PHBhdGggZD1cIk02IDFIOFYzSDE2VjFIMThWM0gxOUMyMC4xMSAzIDIxIDMuOSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjg5IDMgNSAzSDZWMU01IDhWMTlIMTlWOEg1TTcgMTBIMTdWMTJIN1YxMFpcIiAvPjwvc3ZnPmA7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRoaXNXZWVrSWNvbik7XG4gICAgfVxuXG4gICAgLy8gUHV0IHByb2plY3QgdGl0bGUgaW5zaWRlIHRoZSBwcm9qZWN0IGNhcmQuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LW5hbWVcIlxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgLy8gT25seSBhZGQgZmVhdHVyZSBidXR0b25zIHRvIFwibm9uLUhvbWVcIiBwcm9qZWN0cy5cbiAgICBpZiAocHJvamVjdC5pZCAhPT0gXCJob21lLXByb2plY3RcIiAmJiBwcm9qZWN0LmlkICE9PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIgJiYgcHJvamVjdC5pZCAhPT0gXCJ0b2RheS1wcm9qZWN0XCIgJiYgcHJvamVjdC5pZCAhPT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiKSB7XG4gICAgICAgIGFkZERlbGV0ZUJ1dHRvbihwcm9qZWN0Q2FyZCk7XG4gICAgICAgIGFkZEVkaXRCdXR0b24ocHJvamVjdENhcmQpO1xuICAgIH1cblxuICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IHRoZSBwcm9qZWN0IGNvcnJlc3BvbmRpbmcgdG8gcHJvamVjdCBjYXJkLlxuICAgICAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XG4gICAgfSlcblxuICAgIHJldHVybiBwcm9qZWN0Q2FyZDtcbn1cblxuXG5mdW5jdGlvbiBhZGREZWxldGVCdXR0b24ocHJvamVjdENhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uLlxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRlbGV0ZSBzdmcgaWNvbi5cbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJpY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOEgxMVYxN0g5VjhNMTMsOEgxNVYxN0gxM1Y4WlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIGRlbGV0ZSBmdW5jdGlvbmFsaXR5IHRvIGRlbGV0ZSBidXR0b24uXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBBc2sgdGhlIHVzZXIgZm9yIGRlbGV0ZSBjb25maXJtYXRpb24uXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gZGVsZXRpb24/XCIpKSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoYmFjay1lbmQpXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlLmRlbGV0ZSgpO1xuXG4gICAgICAgICAgICAvLyBDbGVhciBcIlRvLURvXCIgdGFicy5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tdGFiXCIpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIE1ha2UgXCJIb21lXCIgcHJvamVjdCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3Qgd2hlbiBjdXJyZW50IHByb2plY3QgaXMgZGVsZXRlZC5cbiAgICAgICAgICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChQcm9qZWN0LmhvbWUpO1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgUHJvamVjdCAoZnJvbnQtZW5kKVxuICAgICAgICAgICAgcHJvamVjdENhcmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRFZGl0QnV0dG9uKHByb2plY3RDYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgRWRpdCBidXR0b24uXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImVkaXRcIjtcblxuICAgIC8vIENyZWF0ZSBFZGl0IEljb24uXG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuOSAxNi45NiwzLjI5TDE1LjEyLDUuMTJMMTguODcsOC44N00zLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45M0wxNC4wNiw2LjE4TDMsMTcuMjVaXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAvLyBBZGQgZWRpdCBmdW5jdGlvbmFsaXR5IHRvIGVkaXQgYnV0dG9uIGJ5IHBvcHBpbmcgdGhlIFwicHJvamVjdCBlZGl0b3IgZm9ybVwiLlxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXBQcm9qZWN0RWRpdG9yRm9ybShwcm9qZWN0Q2FyZCk7XG4gICAgfSk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG59IiwiaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuL2Zvcm1hdERhdGUuanNcIjtcbmltcG9ydCB7IHBvcFVwVG9Eb0VkaXRvckZvcm0gfSBmcm9tIFwiLi9wb3BVcFRvRG9FZGl0b3JGb3JtLmpzXCI7XG5pbXBvcnQgeyBwb3BVcFRvRG9JbmZvQ2FyZCB9IGZyb20gXCIuL3BvcFVwVG9Eb0luZm9DYXJkLmpzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvQ2FyZChUb0RvKSB7XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gY2FyZCBkaXYuXG4gICAgY29uc3QgdG9Eb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9DYXJkLmNsYXNzTmFtZSA9IFwidG8tZG8tY29udGFpbmVyXCJcblxuICAgIC8vIEFkZCByZWZlcmVuY2UgdG8gdGhlIFRvRG8uXG4gICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSA9IFRvRG87XG5cbiAgICBhZGRDaGVja0JveCh0b0RvQ2FyZCk7XG5cbiAgICAvLyBBcHBseSBcImNvbXBsZXRlZCBlZmZlY3RzXCIgdG8gdG8tZG8gaXRlbXMgdGhhdCBhcmUgY29tcGxldGVkLlxuICAgIGlmICh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICB0b0RvQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLWNoZWNrYm94XCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0b0RvQ2FyZC5jbGFzc05hbWUgPSBcInRvLWRvLWNvbnRhaW5lciBjb21wbGV0ZWRcIjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdG8tZG8gdGl0bGUgY29udGFpbmVyLlxuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb1RpdGxlLmNsYXNzTmFtZSA9IFwidG8tZG8tdGl0bGVcIlxuICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IFRvRG8udGl0bGU7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcblxuICAgIC8vIENyZWF0ZSB0by1kbyBkdWUgZGF0ZSBjb250YWluZXIuXG4gICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy8gQ2xhc3NpZnkgd2hldGhlciBUb0RvIGR1ZSBkYXRlIGlzIGFscmVhZHkgbGF0ZSBvciBqdXN0IHVwY29taW5nLlxuICAgIGlmIChpc1RvRG9MYXRlKFRvRG8uZHVlRGF0ZSkpIHtcbiAgICAgICAgdG9Eb0R1ZURhdGUuY2xhc3NOYW1lID0gXCJ0by1kby1kdWUtZGF0ZSBsYXRlXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0b0RvRHVlRGF0ZS5jbGFzc05hbWUgPSBcInRvLWRvLWR1ZS1kYXRlIHVwY29taW5nXCI7XG4gICAgfVxuXG4gICAgdG9Eb0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlOiAke2Zvcm1hdERhdGUoVG9Eby5kdWVEYXRlKX1gO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKTtcblxuXG4gICAgYWRkVmlld0J1dHRvbih0b0RvQ2FyZCk7XG4gICAgYWRkRGVsZXRlQnV0dG9uKHRvRG9DYXJkKTtcbiAgICBhZGRFZGl0QnV0dG9uKHRvRG9DYXJkKTtcblxuICAgIHJldHVybiB0b0RvQ2FyZDtcbn1cblxuXG4vLyBDaGVjayB3aGV0aGVyIFRvRG8gbGF0ZSBpcyBsYXRlIG9yIG5vdC5cbmZ1bmN0aW9uIGlzVG9Eb0xhdGUoZHVlRGF0ZSkge1xuXG4gICAgLy8gR2V0IGN1cnJlbnQgZGF0ZSBpbiBcIllZWVktTU0tRERcIiBmb3JtYXQuXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTsgXG4gICAgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuXG4gICAgLy8gQ3VycmVudCBkYXRlIGlzIGFoZWFkIG9mIGR1ZSBkYXRlIGhlbmNlIFRvRG8gaXMgbGF0ZS5cbiAgICBpZiAoY3VycmVudERhdGUgPiBkdWVEYXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IGRhdGUgaXMgYmVoaW5kIGR1ZSBkYXRlIGhlbmNlIFRvRG8gaXMgbm90IGxhdGUuXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gYWRkRGVsZXRlQnV0dG9uKHRvRG9DYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvbi5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkZWxldGUgc3ZnIGljb24uXG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EZWxldGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhIMTFWMTdIOVY4TTEzLDhIMTVWMTdIMTNWOFpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBkZWxldGUgZnVuY3Rpb25hbGl0eSB0byBkZWxldGUgYnV0dG9uLlxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIC8vIEFzayB0aGUgdXNlciBmb3IgZGVsZXRlIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiQ29uZmlybSBkZWxldGlvbj9cIikpe1xuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGJhY2stZW5kKVxuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZWxldGUoKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgKGZyb250LWVuZClcbiAgICAgICAgICAgIHRvRG9DYXJkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9Eb0NhcmQpO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkRWRpdEJ1dHRvbih0b0RvQ2FyZCkge1xuICAgIC8vIENyZWF0ZSBFZGl0IGJ1dHRvbi5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgSWNvbi5cbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5FZGl0PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LDIuOSAxNy4zNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgIC8vIEFkZCBlZGl0IGZ1bmN0aW9uYWxpdHkgdG8gZWRpdCBidXR0b24gYnkgcG9wcGluZyB0aGUgXCJ0by1kbyBlZGl0b3IgZm9ybVwiLlxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcG9wVXBUb0RvRWRpdG9yRm9ybSh0b0RvQ2FyZCk7XG4gICAgfSk7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZFZpZXdCdXR0b24odG9Eb0NhcmQpIHtcblxuICAgIC8vIENyZWF0ZSBWaWV3IGJ1dHRvbi5cbiAgICBjb25zdCB2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB2aWV3QnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuXG4gICAgLy8gQ3JlYXRlIEVkaXQgSWNvbi5cbiAgICB2aWV3QnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5WaWV3IFRvRG8gSW5mb3JtYXRpb248L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMyw5SDExVjdIMTNNMTMsMTdIMTFWMTFIMTNNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgLy8gQWRkIFwidmlldyB0by1kb1wiIGZ1bmN0aW9uYWxpdHkgdG8gdmlldyBidXR0b24gYnkgcG9wcGluZyBhIFwiZGl2XCIgY29udGFpbmluZyB0aGUgdG8tZG8gaXRlbSdzIGluZm8uXG4gICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcFRvRG9JbmZvQ2FyZCh0b0RvQ2FyZCk7XG4gICAgfSk7XG4gICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodmlld0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGFkZENoZWNrQm94KHRvRG9DYXJkKSB7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja0JveC5jbGFzc05hbWUgPSBcInRvLWRvLWNoZWNrYm94XCJcblxuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBpc1RvRG9Db21wbGV0ZWQgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZFxuICAgICAgICBpZiAoaXNUb0RvQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXJcIlxuXG4gICAgICAgICAgICAvLyBJZiBhICdjb21wbGV0ZWQnIHRvLWRvIGlzIHNldCB0byAndW5maW5pc2hlZCcgdG8gZG8sIHJlbW92ZSBpdCBmcm9tIHRoZSBcIkNvbXBsZXRlZFwiIHByb2plY3QncyB0by1kbyB3aW5kb3cuXG4gICAgICAgICAgICBpZiAoZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIikge1xuICAgICAgICAgICAgICAgIHRvRG9DYXJkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodG9Eb0NhcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdG9Eb0NhcmQuY2xhc3NOYW1lID0gXCJ0by1kby1jb250YWluZXIgY29tcGxldGVkXCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gVXBkYXRlIGNoYW5nZXMgaW5zaWRlIHBhcmVudCBwcm9qZWN0LlxuICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLnByb2plY3QucmVwbGFjZVRvRG8odG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZSk7XG4gICAgfSk7XG5cbiAgICB0b0RvQ2FyZC5hcHBlbmRDaGlsZChjaGVja0JveClcbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpbnB1dERhdGUpIHtcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgIFwiSmFuLlwiLCBcIkZlYi5cIiwgXCJNYXIuXCIsIFwiQXByLlwiLCBcIk1heVwiLCBcIkp1bi5cIixcbiAgICAgICAgXCJKdWwuXCIsIFwiQXVnLlwiLCBcIlNlcC5cIiwgXCJPY3QuXCIsIFwiTm92LlwiLCBcIkRlYy5cIlxuICAgIF07XG5cbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBpbnB1dERhdGUuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHttb250aHNbTnVtYmVyKG1vbnRoKSAtIDFdfSAke3BhcnNlSW50KGRheSwgMTApfSwgJHt5ZWFyfWA7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0Q2FyZC5qc1wiO1xuaW1wb3J0IHsgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBQcm9qZWN0QWRkZXJGb3JtKCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWFkZGVyLWZvcm1cIjtcbiAgICBmb3JtLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtdGl0bGVcIiBwbGFjZWhvbGRlcj1cIkhlbGxvXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZCBQcm9qZWN0XCI+YDtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgXG4gICAgLy8gQ3JlYXRlIGNhbmNlbCBidXR0b24uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0byBmb3JtIHRoYXQgY3JlYXRlcyB0aGUgUHJvamVjdCBvbmNlIHN1Ym1pdHRlZC5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEdldCBwcm9qZWN0J3MgdGl0bGUuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIFByb2plY3QuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIHByb2plY3QgY2FyZCByZXByZXNlbnRhdGlvbi5cbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KVxuXG4gICAgICAgIC8vIFJlbmRlciBuZXcgcHJvamVjdCB0byBET00gYnkgYXBwZW5kaW5nIFxuICAgICAgICBjb25zdCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgICAgICBjcmVhdGVkUHJvamVjdHNDb250YWluZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RDYXJkLCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcm9qZWN0LWFkZGVyXCIpKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBuZXdseSBjcmVhdGVkIHByb2plY3QgYXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0LlxuICAgICAgICBzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZvcm0gd2hlbiBkb25lLlxuICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBwb3BVcFByb2plY3RFZGl0b3JGb3JtKHByb2plY3RDYXJkKSB7XG5cbiAgICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXIuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbiAgICAvLyBDcmVhdGUgcHJvamVjdCBlZGl0b3IgZm9ybS5cbiAgICBjb25zdCBwcm9qZWN0RWRpdG9yRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHByb2plY3RFZGl0b3JGb3JtLmNsYXNzTmFtZSA9IFwicHJvamVjdC1lZGl0b3ItZm9ybVwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRvckZvcm0pO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSAgbmV3LXByb2plY3QtdGl0bGUgaW5wdXQgZmllbGQuXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5ld1Byb2plY3RUaXRsZUlucHV0LmlkID0gXCJwcm9qZWN0LXRpdGxlXCI7XG4gICAgbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlLnRpdGxlO1xuICAgIHByb2plY3RFZGl0b3JGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZUlucHV0KTtcblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uLlxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJEb25lXCI7XG4gICAgcHJvamVjdEVkaXRvckZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgcHJvamVjdEVkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIHByb2plY3QgZWRpdG9yIGZvcm0gdGhhdCBtb2RpZmllcyB0aGUgcHJvamVjdCB0aXRsZSB3aGVuIHN1Ym1pdHRlZC5cbiAgICBwcm9qZWN0RWRpdG9yRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEFzayBmb3IgdXNlciBjb25maXJtYXRpb24gYmVmb3JlIGVkaXRpbmcuXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gY2hhbmdlcz9cIikpe1xuICAgICAgICAgICAgLy8gTW9kaWZ5IHByb2plY3QgdGl0bGUgaW4gYmFjay1lbmQuXG4gICAgICAgICAgICBwcm9qZWN0Q2FyZC5wcm9qZWN0UmVmZXJlbmNlLnNldFByb2plY3RUaXRsZShuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIE1vZGlmeSBwcm9qZWN0IHRpdGxlIGluIGZyb250LWVuZC5cbiAgICAgICAgICAgIHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gbmV3UHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmVudC1wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmb3JtIGZyb20gdGhlIERPTSB3aGVuIHN1Ym1pdHRlZC5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn0iLCJpbXBvcnQgeyByZW5kZXJUb0RvV2luZG93IH0gZnJvbSBcIi4vcmVuZGVyVG9Eb1dpbmRvdy5qc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RvRG8uanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUb0RvQWRkZXJGb3JtKCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdG9Eb0FkZGVyRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRvRG9BZGRlckZvcm0uY2xhc3NOYW1lID0gXCJ0by1kby1hZGRlci1mb3JtXCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQWRkZXJGb3JtKTtcblxuICAgIC8vIENyZWF0ZSB0aXRsZSBpbnB1dC5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJUaXRsZTpcIiwgdGl0bGVJbnB1dCkpO1xuXG4gICAgLy8gQ3JlYXRlIGRlc2NyaXB0aW9uIGFyZWEuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSA0O1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiRGVzY3JpcHRpb246XCIsIGRlc2NyaXB0aW9uVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBkdWUgZGF0ZSBpbnB1dC5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZS1kYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEdWUgRGF0ZTpcIiwgZHVlRGF0ZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgVG9EbyBwcmlvcml0eSBzZWxlY3Rpb24uXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblZhbHVlO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJQcmlvcml0eTpcIiwgcHJpb3JpdHlTZWxlY3QpKTtcblxuICAgIC8vIENyZWF0ZSBOb3RlIGlucHV0LlxuICAgIGNvbnN0IG5vdGVzVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbm90ZXNUZXh0YXJlYS5pZCA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLm5hbWUgPSBcIm5vdGVzXCI7XG4gICAgbm90ZXNUZXh0YXJlYS5yb3dzID0gNDtcbiAgICBub3Rlc1RleHRhcmVhLmNvbHMgPSA1MDtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiTm90ZXM6XCIsIG5vdGVzVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uLlxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXQtZm9ybVwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiQ3JlYXRlIFRvRG9cIjtcbiAgICB0b0RvQWRkZXJGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvbi5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KVxuICAgIHRvRG9BZGRlckZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuXG4gICAgLy8gQWRkIGZlYXR1cmUgdG8gZm9ybSB0aGF0IHdoZW4gc3VibWl0dGVkLCBhIFRvRG8gb2JqZWN0IGlzIGNyZWF0ZWQuXG4gICAgdG9Eb0FkZGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2ZW50ID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b0RvTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHRvRG9JdGVtID0gbmV3IFRvRG8oLi4uW3RvRG9UaXRsZSwgdG9Eb0Rlc2NyaXB0aW9uLCB0b0RvRHVlRGF0ZSwgdG9Eb1ByaW9yaXR5LCB0b0RvTm90ZXNdKVxuICAgICAgICBnZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QoKS5hZGRUb0RvKHRvRG9JdGVtKTtcblxuICAgICAgICAvLyBSZW5kZXIgVG8tRG8gaXRlbSBpbiAndG8tZG8nIHRhYiBpbW1lZGlhdGVseSBvbmNlIGNyZWF0ZWQuXG4gICAgICAgIHJlbmRlclRvRG9XaW5kb3coZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkpO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cblxuLy8gUmV0dXJucyBhIGRpdiBjb250YWluaW5nIGEgbGFiZWxlZCBpbnB1dC5cbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkRGl2KGxhYmVsVGV4dCwgaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgeyByZW5kZXJUb0RvV2luZG93IH0gZnJvbSBcIi4vcmVuZGVyVG9Eb1dpbmRvd1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0TWFuYWdlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUb0RvRWRpdG9yRm9ybSh0b0RvQ2FyZCkge1xuXG4gICAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyLlxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdG9Eb0VkaXRvckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0b0RvRWRpdG9yRm9ybS5jbGFzc05hbWUgPSBcInRvLWRvLWFkZGVyLWZvcm1cIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9FZGl0b3JGb3JtKVxuXG4gICAgLy8gQ3JlYXRlIHRpdGxlIGlucHV0LlxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UudGl0bGU7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJUaXRsZTpcIiwgdGl0bGVJbnB1dCkpO1xuXG4gICAgLy8gQ3JlYXRlIGRlc2NyaXB0aW9uIGFyZWEuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnJvd3MgPSA0O1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucmVxdWlyZWQgPSBmYWxzZTtcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kZXNjcmlwdGlvbjtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIkRlc2NyaXB0aW9uOlwiLCBkZXNjcmlwdGlvblRleHRhcmVhKSk7XG5cbiAgICAvLyBDcmVhdGUgZHVlIGRhdGUgaW5wdXQuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWUtZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGU7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRmllbGREaXYoXCJEdWUgRGF0ZTpcIiwgZHVlRGF0ZUlucHV0KSk7XG5cbiAgICAvLyBDcmVhdGUgVG9EbyBwcmlvcml0eSBzZWxlY3Rpb24uXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblZhbHVlO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcmlvcml0eTtcbiAgICB0b0RvRWRpdG9yRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGaWVsZERpdihcIlByaW9yaXR5OlwiLCBwcmlvcml0eVNlbGVjdCkpO1xuXG4gICAgLy8gQ3JlYXRlIE5vdGUgaW5wdXQuXG4gICAgY29uc3Qgbm90ZXNUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBub3Rlc1RleHRhcmVhLmlkID0gXCJub3Rlc1wiO1xuICAgIG5vdGVzVGV4dGFyZWEubmFtZSA9IFwibm90ZXNcIjtcbiAgICBub3Rlc1RleHRhcmVhLnJvd3MgPSA0O1xuICAgIG5vdGVzVGV4dGFyZWEuY29scyA9IDUwO1xuICAgIG5vdGVzVGV4dGFyZWEudmFsdWUgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzO1xuICAgIHRvRG9FZGl0b3JGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZpZWxkRGl2KFwiTm90ZXM6XCIsIG5vdGVzVGV4dGFyZWEpKTtcblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uLlxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXQtZm9ybVwiO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSBjYW5jZWwgYnV0dG9uLlxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pXG4gICAgdG9Eb0VkaXRvckZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBmZWF0dXJlIHRvIGZvcm0gdGhhdCB3aGVuIHN1Ym1pdHRlZCwgYSBUb0RvIG9iamVjdCBpcyBjcmVhdGVkLlxuICAgIHRvRG9FZGl0b3JGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgIC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gYmVmb3JlIGVkaXRpbmcuXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkNvbmZpcm0gY2hhbmdlcz9cIikpIHtcbiAgICAgICAgICAgIC8vIFRoZSB1c2VyIGNsaWNrZWQgXCJPS1wiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFBhcnNlIGZvcm0gY29udHJvbCB2YWx1ZXMuXG4gICAgICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b0RvTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHRvIGRvLlxuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS50aXRsZSA9IHRvRG9UaXRsZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGVzY3JpcHRpb24gPSB0b0RvRGVzY3JpcHRpb247XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGUgPSB0b0RvRHVlRGF0ZTtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJpb3JpdHkgPSB0b0RvUHJpb3JpdHk7XG4gICAgICAgICAgICB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzID0gdG9Eb05vdGVzO1xuICAgICAgICAgICAgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5kYXRlQW5kVGltZUNyZWF0ZWQgPSB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmRhdGVBbmRUaW1lQ3JlYXRlZDtcbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGF0ZU1vZGlmaWVkID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgVG9EbyBpdGVtIHdpdGggdGhlIFRvRG8gaXRlbSB3aXRoIGFsbCBjaGFuZ2VzIGFwcGxpZWQgaW4gdGhlIHBhcmVudCBwcm9qZWN0J3MgXCJ0b0RvSXRlbXNcIiBhcnJheS5cbiAgICAgICAgICAgIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UucHJvamVjdC5yZXBsYWNlVG9Ebyh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRvLWRvIHRhYi5cbiAgICAgICAgICAgIHJlbmRlclRvRG9XaW5kb3coZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBET00gb25jZSBzdWJtaXR0ZWQuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG59XG5cblxuLy8gUmV0dXJucyBhIGRpdiBjb250YWluaW5nIGEgbGFiZWxlZCBpbnB1dC5cbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkRGl2KGxhYmVsVGV4dCwgaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wVXBUb0RvSW5mb0NhcmQodG9Eb0NhcmQpIHtcbiAgICAvLyBDcmVhdGUgYmFja2dyb3VuZCBjb250YWluZXIuXG4gICAgY29uc3QgYmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tYmFja2dyb3VuZFwiXG5cbiAgICAvLyBDcmVhdGUgbWFpbiBjb250YWluZXIuXG4gICAgY29uc3QgdG9Eb0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby1jb250YWluZXJcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgY2xvc2UgZGl2XG4gICAgY29uc3QgY2xvc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRGl2LmNsYXNzTmFtZSA9IFwiY2xvc2UgaWNvblwiO1xuICAgIGNsb3NlRGl2LmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkNsb3NlPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5LDNIMTYuM0g3LjdINUEyLDIgMCAwLDAgMyw1VjcuN1YxNi40VjE5QTIsMiAwIDAsMCA1LDIxSDcuN0gxNi40SDE5QTIsMiAwIDAsMCAyMSwxOVYxNi4zVjcuN1Y1QTIsMiAwIDAsMCAxOSwzTTE1LjYsMTdMMTIsMTMuNEw4LjQsMTdMNywxNS42TDEwLjYsMTJMNyw4LjRMOC40LDdMMTIsMTAuNkwxNS42LDdMMTcsOC40TDEzLjQsMTJMMTcsMTUuNkwxNS42LDE3WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgdG9Eb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBpbmZvLWZpZWxkIGRpdlxuICAgIGZ1bmN0aW9uIGNyZWF0ZUluZm9GaWVsZChsYWJlbCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5mb0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb0ZpZWxkLmNsYXNzTmFtZSA9IFwiaW5mby1maWVsZFwiO1xuXG4gICAgICAgIGNvbnN0IGluZm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9MYWJlbC5jbGFzc05hbWUgPSBcInRvLWRvLWluZm8tbGFiZWxcIjtcbiAgICAgICAgaW5mb0xhYmVsLnRleHRDb250ZW50ID0gbGFiZWwgKyBcIjpcIjtcbiAgICAgICAgaW5mb0ZpZWxkLmFwcGVuZENoaWxkKGluZm9MYWJlbCk7XG5cbiAgICAgICAgY29uc3QgaW5mb1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb1ZhbHVlLmNsYXNzTmFtZSA9IFwidG8tZG8taW5mby12YWx1ZVwiO1xuICAgICAgICBpbmZvVmFsdWUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgaW5mb1ZhbHVlLmlkID0gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX0taW5mb2BcbiAgICAgICAgaW5mb0ZpZWxkLmFwcGVuZENoaWxkKGluZm9WYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGluZm9GaWVsZDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5mbyBmaWVsZCBjb250YWluZXIuXG4gICAgY29uc3QgaW5mb0ZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpY1wiKTtcbiAgICBpbmZvRmllbGRDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbmZvLWZpZWxkLWNvbnRhaW5lclwiO1xuICAgIHRvRG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9GaWVsZENvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgaW5mby1maWVsZCBkaXZzIGZvciBlYWNoIGZpZWxkXG4gICAgaW5mb0ZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIlRpdGxlXCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UudGl0bGUpKTtcbiAgICBpbmZvRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiRHVlIERhdGVcIiwgZm9ybWF0RGF0ZSh0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLmR1ZURhdGUpKSk7XG4gICAgaW5mb0ZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIlByb2plY3RcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcm9qZWN0LnRpdGxlKSk7XG4gICAgaW5mb0ZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZm9GaWVsZChcIkRlc2NyaXB0aW9uXCIsIHRvRG9DYXJkLnRvRG9SZWZlcmVuY2UuZGVzY3JpcHRpb24pKTtcbiAgICBpbmZvRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0ZpZWxkKFwiUHJpb3JpdHlcIiwgdG9Eb0NhcmQudG9Eb1JlZmVyZW5jZS5wcmlvcml0eSkpO1xuICAgIGluZm9GaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRmllbGQoXCJOb3Rlc1wiLCB0b0RvQ2FyZC50b0RvUmVmZXJlbmNlLm5vdGVzKSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIG1haW4gY29udGFpbmVyIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbnRhaW5lclxuICAgIGJhY2tncm91bmRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0luZm9Db250YWluZXIpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBkaXZcbiAgICBjbG9zZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGJhY2tncm91bmRDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kIHRvIGJvZHkuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZVRvRG9DYXJkXCI7XG5pbXBvcnQgeyBwb3BVcFRvRG9BZGRlckZvcm0gfSBmcm9tIFwiLi9wb3BVcFRvRG9BZGRlckZvcm1cIjtcbmltcG9ydCB7IHNvcnRUb0RvSXRlbXMgfSBmcm9tIFwiLi9zb3J0VG9Eb0l0ZW1zXCI7XG5jb25zdCBjb21wYXJlV2VlayA9IHJlcXVpcmUoXCJjb21wYXJlLXdlZWtcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb0RvV2luZG93KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgLy8gQWNjZXNzIGN1cnJlbnQgdG8gZG8gd2luZG93LlxuICAgIGNvbnN0IGN1cnJlbnRUb0RvV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby13aW5kb3dcIik7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgdG8gZG8gd2luZG93LlxuICAgIGNvbnN0IG5ld1RvRG9XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvRG9XaW5kb3cuY2xhc3NOYW1lID0gXCJ0by1kby13aW5kb3dcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgY3VycmVudCBwYXJlbnQgcHJvamVjdCBjYXJkIHRvIHRoZSB0by1kbyB3aW5kb3cuXG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lQ2FyZCA9IGNyZWF0ZUN1cnJlbnRQcm9qZWN0TmFtZUNhcmQoY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzb3J0ZXIuXG4gICAgY29uc3Qgc29ydGVyID0gY3JlYXRlU29ydGVyKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gdGFiLlxuICAgIGNvbnN0IHRvRG9UYWIgPSBjcmVhdGVUb0RvVGFiKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdG8tZG8gYWRkZXIgYnV0dG9uLlxuICAgIGNvbnN0IHRvRG9BZGRlckJ1dHRvbiA9IGNyZWF0ZVRvRG9BZGRlckJ1dHRvbigpO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBjcmVhdGVkIGVsZW1lbnRzIHRvIHRoZSBuZXcgdG8tZG8gd2luZG93LlxuICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3ROYW1lQ2FyZCk7XG4gICAgbmV3VG9Eb1dpbmRvdy5hcHBlbmRDaGlsZChzb3J0ZXIpO1xuICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQodG9Eb1RhYik7XG4gICAgXG4gICAgLy8gT25seSBhZGQgdGhlIHRvLWRvIGFkZGVyIGJ1dHRvbiB0byBub24gXCJDb21wbGV0ZVwiIHByb2plY3RzLlxuICAgIGlmIChjdXJyZW50UHJvamVjdC5pZCAhPT0gXCJjb21wbGV0ZWQtcHJvamVjdFwiICYmIGN1cnJlbnRQcm9qZWN0LmlkICE9PSBcInRvZGF5LXByb2plY3RcIiAmJiBjdXJyZW50UHJvamVjdC5pZCAhPT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiKSB7XG4gICAgICAgIG5ld1RvRG9XaW5kb3cuYXBwZW5kQ2hpbGQodG9Eb0FkZGVyQnV0dG9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgdG8gZG8gd2luZG93IHdpdGggbmV3IHRvIGRvIHdpbmRvdy5cbiAgICBjdXJyZW50VG9Eb1dpbmRvdy5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdUb0RvV2luZG93LCBjdXJyZW50VG9Eb1dpbmRvdyk7XG59XG5cblxuLy8gQ3JlYXRlIGEgY2FyZCBjb250YWluaW5nIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IHBhcmVudCBwcm9qZWN0LlxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFByb2plY3ROYW1lQ2FyZChjdXJyZW50UHJvamVjdCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0TmFtZUNhcmQuY2xhc3NOYW1lID0gXCJwYXJlbnQtcHJvamVjdC1uYW1lXCJcbiAgICBjdXJyZW50UHJvamVjdE5hbWVDYXJkLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG5cbiAgICByZXR1cm4gY3VycmVudFByb2plY3ROYW1lQ2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29ydGVyKGN1cnJlbnRQcm9qZWN0KSB7XG5cbiAgICAvLyBDcmVhdGUgZGl2IHRvIGNvbnRhaW4gdGhlIHNvcnRlci5cbiAgICBjb25zdCBzb3J0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvcnRlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNvcnQtY29udGFpbmVyXCJcblxuICAgIC8vIENyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHdheSB0byBjaG9vc2Ugc29ydGluZyBjcml0ZXJpYS5cbiAgICBjb25zdCBzb3J0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNvcnRlci5pZCA9IFwic29ydGVyXCI7XG4gICAgc29ydGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRlcik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGxhYmVsIGZvciB0aGUgc29ydGVyLlxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBzb3J0ZXIuaWQpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJTb3J0IGJ5OlwiO1xuICAgIHNvcnRlci5iZWZvcmUobGFiZWwpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkYXRhIHZhbHVlcyBvZiBvcHRpb25zIHRvIGJlIHNlbGVjdGVkLlxuICAgIGNvbnN0IHNvcnRpbmdPcHRpb25zID0gW1xuICAgICAgICB7IHZhbHVlOiBcInRpbWUtY3JlYXRlZC1hc2NlbmRpbmdcIiwgdGV4dDogXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwidGltZS1jcmVhdGVkLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJDcmVhdGVkIChOZXdlc3QgdG8gT2xkZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGF0ZS1hc2NlbmRpbmdcIiwgdGV4dDogXCJEYXRlIChhc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkYXRlLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJEYXRlIChkZXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwibmFtZS1hc2NlbmRpbmdcIiwgdGV4dDogXCJOYW1lIChhc2NlbmRpbmcpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJuYW1lLWRlc2NlbmRpbmdcIiwgdGV4dDogXCJOYW1lIChkZXNjZW5kaW5nKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwicHJpb3JpdHktYXNjZW5kaW5nXCIsIHRleHQ6IFwiUHJpb3JpdHkgKExvd2VzdCB0byBIaWdoZXN0KVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwicHJpb3JpdHktZGVzY2VuZGluZ1wiLCB0ZXh0OiBcIlByaW9yaXR5IChIaWdoZXN0IHRvIExvd2VzdClcIiB9XG4gICAgXVxuXG4gICAgLy8gR2V0IGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb24gZnJvbSBjdXJyZW50IHNvcnRlci5cbiAgICBsZXQgY3VycmVudFNvcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydGVyXCIpO1xuICAgIFxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbiBvZiB0aGUgbmV3IHNvcnRlciB0byBiZSBjcmVhdGVkLlxuICAgIGxldCBuZXdDdXJyZW50U29ydE9wdGlvbjtcbiAgICBcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBzb3J0ZXIgdG8gYmUgcmVuZGVyZWQsIHNldCB0aGUgbmV3IHNvcnRlciBzZWxlY3RlZCBvcHRpb24gdG8gXCJDcmVhdGVkIChPbGRlc3QgdG8gTmV3ZXN0KVwiLlxuICAgIGlmICghY3VycmVudFNvcnRlcikge1xuICAgICAgICBuZXdDdXJyZW50U29ydE9wdGlvbiA9IHNvcnRpbmdPcHRpb25zLmZpbmQoc29ydGluZ09wdGlvbiA9PiBzb3J0aW5nT3B0aW9uLnRleHQgPT09IFwiQ3JlYXRlZCAoT2xkZXN0IHRvIE5ld2VzdClcIik7XG4gICAgfVxuICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBmaXJzdCBzb3J0ZXIsIHNldCB0aGUgbmV3IHNvcnRlciBzZWxlY3RlZCBvcHRpb24gdG8gdGhlIGN1cnJlbnQgc29ydGVyIHNlbGVjdGVkIG9wdGlvbi5cbiAgICBlbHNlIHtcbiAgICAgICAgbmV3Q3VycmVudFNvcnRPcHRpb24gPSBjdXJyZW50U29ydGVyLnZhbHVlO1xuICAgIH1cblxuICAgIHNvcnRpbmdPcHRpb25zLmZvckVhY2goc29ydGluZ09wdGlvbiA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBvcHRpb24gZWxlbWVudC5cbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAvLyBBZGQgb3B0aW9uIHZhbHVlLlxuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc29ydGluZ09wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgLy8gQWRkIG9wdGlvbiB0ZXh0LWNvbnRlbnQuXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNvcnRpbmdPcHRpb24udGV4dDtcblxuICAgICAgICAvLyBNYWtlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uIG9mIGN1cnJlbnQgc29ydGVyIGNhcnJ5IG92ZXIgdG8gdGhlIG5ldyBzb3J0ZXIuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNvcnRpbmdPcHRpb24udmFsdWUgPT09IG5ld0N1cnJlbnRTb3J0T3B0aW9uO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgb3B0aW9uIHRvIHNvcnRlciBzZWxlY3QgZWxlbWVudC5cbiAgICAgICAgc29ydGVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcblxuICAgIC8vIFJlLXJlbmRlciB0by1kbyB0YWIgc28gdGhhdCB0by1kbyBpdGVtJ3MgbmV3IHNvcnQgY3JpdGVyYSB3aWxsIGJlIHJlZnJlY3RlZFxuICAgIHNvcnRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRvRG9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXRhYlwiKTtcbiAgICAgICAgY3VycmVudFRvRG9UYWIucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoY3JlYXRlVG9Eb1RhYihjdXJyZW50UHJvamVjdCksIGN1cnJlbnRUb0RvVGFiKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9Eb1RhYihjdXJyZW50UHJvamVjdCkge1xuXG4gICAgLy8gQ3JlYXRlIHRvLWRvIHRhYi5cbiAgICBjb25zdCB0b0RvVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvVGFiLmNsYXNzTmFtZSA9IFwidG8tZG8tdGFiXCI7XG5cbiAgICAvLyBBcnJheSBmb3Igc3RvcmluZyBhbGwgdW5zb3J0ZWQgVG9EbyBpdGVtcy5cbiAgICBsZXQgdW5zb3J0ZWRUb0RvSXRlbXMgPSBbXTtcblxuICAgIC8vIFJlbmRlciBhbGwgVG9Eb3MgYWNyb3NzIGFsbCBwcm9qZWN0cyBpZiB0aGUgcHJvamVjdCBpcyBcIkhvbWVcIlxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gUHJvamVjdC5ob21lKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8vIFJlbmRlciBhbGwgY29tcGxldGVkIFRvRG9zIGZyb20gZGlmZmVyZW50IFByb2plY3JzIGlmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBpcyBcIkNvbXBsZXRlZFwiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwiY29tcGxldGVkLXByb2plY3RcIiApIHtcbiAgICAgICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC50b0RvSXRlbXNcbiAgICAgICAgICAgIC5mb3JFYWNoKHRvRG9JdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc29ydGVkVG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGFsbCBUb2RheSBUb0RvcyBmcm9tIGRpZmZlcmVudCBQcm9qZWNycyBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgaXMgXCJUb2RheVwiXG4gICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QuaWQgPT09IFwidG9kYXktcHJvamVjdFwiICkge1xuICAgICAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvRG9JdGVtc1xuICAgICAgICAgICAgLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIEdldCBjdXJyZW50IGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9ybWF0IGN1cnJlbnQgZGF0ZSBzaW1pbGFyIHRvIHRoZSBkYXRlIHN0cnVjdHVyZSBvZiAnZHVlRGF0ZScgcHJvcGVydHkgb2YgVG9EbyBvYmplY3QuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0keyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke2N1cnJlbnREYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICAgICAgICAgICAgICBpZiAodG9Eb0l0ZW0uZHVlRGF0ZSA9PT0gZm9ybWF0dGVkQ3VycmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBSZW5kZXIgYWxsIFRoaXMgV2VlayBUb0RvcyBmcm9tIGRpZmZlcmVudCBQcm9qZWNycyBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgaXMgXCJUaGlzIFdlZWtcIlxuICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID09PSBcInRoaXMtd2Vlay1wcm9qZWN0XCIgKSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QudG9Eb0l0ZW1zXG4gICAgICAgICAgICAuZm9yRWFjaCh0b0RvSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgZGF0ZS5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgZHVlIGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gdG9Eb0l0ZW0uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGR1ZSBkYXRlIG9mIGN1cnJlbnQgdG8gZG8gaXMgaW4gY3VycmVudCBcInRoaXMgd2Vla1wiLlxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlV2VlayhjdXJyZW50RGF0ZSwgZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyBJZiBjdXJyZW50IHByb2plY3QgaXMgbm90IFwiSG9tZVwiIGFuZCBub3QgXCJDb21wbGV0ZWRcIiwgb25seSByZW5kZXIgaXRzIHJlc3BlY3RpdmUgVG9EbyBpdGVtcy5cbiAgICBlbHNlIHtcbiAgICAgICAgY3VycmVudFByb2plY3QudG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICAgICAgdW5zb3J0ZWRUb0RvSXRlbXMucHVzaCh0b0RvSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnQuXG4gICAgY29uc3Qgc29ydGVkVG9Eb0l0ZW1zID0gc29ydFRvRG9JdGVtcyh1bnNvcnRlZFRvRG9JdGVtcyk7XG5cbiAgICAvLyBSZW5kZXIgYWxsIFRvRG8gY2FyZHMgdG8gVG9EbyB0YWIuXG4gICAgc29ydGVkVG9Eb0l0ZW1zLmZvckVhY2godG9Eb0l0ZW0gPT4ge1xuICAgICAgICB0b0RvVGFiLmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9DYXJkKHRvRG9JdGVtKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9Eb1RhYjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvQWRkZXJCdXR0b24oKSB7XG5cbiAgICAvLyBDcmVhdGUgYSBidXR0b24gZWxlbWVudFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwidG8tZG8tYWRkZXJcIjtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBUb0RvXCI7XG5cbiAgICAvLyBBZGQgZmVhdHVyZSB0aGF0IHBvcHMgdGhlIHRvIGRvIGFkZGVyIGZvcm0gd2hlbiBidXR0b24gaXMgY2xpY2tlZC5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcG9wVXBUb0RvQWRkZXJGb3JtKCk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIGNyZWF0ZWQgYnV0dG9uIGVsZW1lbnRcbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImltcG9ydCB7IHJlbmRlclRvRG9XaW5kb3cgfSBmcm9tIFwiLi9yZW5kZXJUb0RvV2luZG93XCI7XG5cbmxldCBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgcmVuZGVyVG9Eb1dpbmRvdyhjdXJyZW50bHlTZWxlY3RlZFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJyZW50bHlTZWxlY3RlZFByb2plY3Q7XG59IiwiLyoqXG4gKiBTb3J0cyBhbiBhcnJheSBvZiB0by1kbyBpdGVtcyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgc29ydGluZyBjcml0ZXJpYS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB1bnNvcnRlZFRvRG9JdGVtcyAtIEFuIGFycmF5IG9mIHRvLWRvIGl0ZW1zIHRvIGJlIHNvcnRlZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gIEFuIGFycmF5IG9mIHNvcnRlZCB0by1kbyBpdGVtcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUb0RvSXRlbXModW5zb3J0ZWRUb0RvSXRlbXMpIHtcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc29ydGVyIG9yIHNldCB0aGUgZGVmYXVsdCBzb3J0IGNyaXRlcmlhLlxuICAgIGNvbnN0IHNvcnRDcml0ZXJpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydGVyXCIpPy52YWx1ZSB8fCBcInRpbWUtY3JlYXRlZC1hc2NlbmRpbmdcIjtcblxuICAgIC8vIENyZWF0ZSBhIG1hcHBpbmcgb2Ygc29ydCBjcml0ZXJpYSB0byBjb21wYXJpc29uIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBzb3J0RnVuY3Rpb25zID0ge1xuICAgICAgICBcImRhdGUtYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8xLmR1ZURhdGUpIC0gbmV3IERhdGUoVG9EbzIuZHVlRGF0ZSksXG4gICAgICAgIFwiZGF0ZS1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IG5ldyBEYXRlKFRvRG8yLmR1ZURhdGUpIC0gbmV3IERhdGUoVG9EbzEuZHVlRGF0ZSksXG4gICAgICAgIFwibmFtZS1hc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gVG9EbzEudGl0bGUubG9jYWxlQ29tcGFyZShUb0RvMi50aXRsZSksXG4gICAgICAgIFwibmFtZS1kZXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IFRvRG8yLnRpdGxlLmxvY2FsZUNvbXBhcmUoVG9EbzEudGl0bGUpLFxuICAgICAgICBcInRpbWUtY3JlYXRlZC1hc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gbmV3IERhdGUoVG9EbzEuZGF0ZUFuZFRpbWVDcmVhdGVkKSAtIG5ldyBEYXRlKFRvRG8yLmRhdGVBbmRUaW1lQ3JlYXRlZCksXG4gICAgICAgIFwidGltZS1jcmVhdGVkLWRlc2NlbmRpbmdcIjogKFRvRG8xLCBUb0RvMikgPT4gbmV3IERhdGUoVG9EbzIuZGF0ZUFuZFRpbWVDcmVhdGVkKSAtIG5ldyBEYXRlKFRvRG8xLmRhdGVBbmRUaW1lQ3JlYXRlZCksXG4gICAgICAgIFwicHJpb3JpdHktYXNjZW5kaW5nXCI6IChUb0RvMSwgVG9EbzIpID0+IHByaW9yaXR5TGV2ZWwoVG9EbzEpIC0gcHJpb3JpdHlMZXZlbChUb0RvMiksXG4gICAgICAgIFwicHJpb3JpdHktZGVzY2VuZGluZ1wiOiAoVG9EbzEsIFRvRG8yKSA9PiBwcmlvcml0eUxldmVsKFRvRG8yKSAtIHByaW9yaXR5TGV2ZWwoVG9EbzEpLFxuICAgIH07XG5cbiAgICAvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBnZXQgdGhlIHByaW9yaXR5IGxldmVsLlxuICAgIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSAoVG9EbykgPT4ge1xuICAgICAgICBzd2l0Y2ggKFRvRG8ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJIaWdoXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICBjYXNlIFwiTG93XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBIYW5kbGUgdW5leHBlY3RlZCBwcmlvcml0eSB2YWx1ZXMuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU29ydCB0aGUgYXJyYXkgdXNpbmcgdGhlIHNlbGVjdGVkIGNyaXRlcmlhLlxuICAgIGNvbnN0IHNvcnRlZFRvRG9JdGVtcyA9IHVuc29ydGVkVG9Eb0l0ZW1zLnNvcnQoc29ydEZ1bmN0aW9uc1tzb3J0Q3JpdGVyaWFdIHx8ICgoKSA9PiAwKSk7XG5cbiAgICByZXR1cm4gc29ydGVkVG9Eb0l0ZW1zO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgaXNEYXRlT2JqID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmonKTtcbmNvbnN0IHdlZWtJZGVudGlmaWVyID0gcmVxdWlyZSgnd2Vlay1pZGVudGlmaWVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGEsIGIpID0+IHtcblx0aWYgKHR5cGVvZiBhICE9PSAnbnVtYmVyJyAmJiAhaXNEYXRlT2JqKGEpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBudW1iZXIgb3IgRGF0ZSwgZ290ICR7dHlwZW9mIGF9YCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGIgIT09ICdudW1iZXInICYmICFpc0RhdGVPYmooYikpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIG51bWJlciBvciBEYXRlLCBnb3QgJHt0eXBlb2YgYn1gKTtcblx0fVxuXG5cdHJldHVybiB3ZWVrSWRlbnRpZmllcihpc0RhdGVPYmooYSkgPyBhIDogbmV3IERhdGUoYSAqIDEwMDApKSA9PT0gd2Vla0lkZW50aWZpZXIoaXNEYXRlT2JqKGIpID8gYiA6IG5ldyBEYXRlKGIgKiAxMDAwKSk7XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2xvYmFsIFN0eWxlcyAqL1xuLmljb24ge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbn1cblxuOnJvb3Qge1xuICAgIC0tdGV4dDogIzEwMDkwYztcbiAgICAtLWJhY2tncm91bmQ6ICNmZGZjZmM7XG4gICAgLS1wcmltYXJ5OiAjYjdkN2M5O1xuICAgIC0tc2Vjb25kYXJ5OiAjZDhlN2U5O1xuICAgIC0tYWNjZW50OiAjNTc5ZDVhO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi8qIENvbnRlbnQgQ29udGFpbmVyICovXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEYXNoYm9hcmQgKi9cbi5kYXNoYm9hcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3RzLXRhYiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIERlZmF1bHQgUHJvamVjdHMgQ29udGFpbmVyICovXG4uZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBDcmVhdGVkIFByb2plY3RzIENvbnRhaW5lciAqL1xuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmluYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDQwcHg7XG4gICAgZ2FwOiAzcHg7XG5cbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIC5wcm9qZWN0LWNhcmQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAuZGVsZXRlLCBcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAuZWRpdCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIgLnByb2plY3QtbmFtZSB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMCA7XG59XG5cbi8qIFByb2plY3QgQ2FyZCAqL1xuLnByb2plY3QtY2FyZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1cHggMjVweDtcbiAgICBnYXA6IDVweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWNhcmQgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIsXG4ucHJvamVjdC1hZGRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZT4qIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFByb2plY3QgYW5kIERyb3Bkb3duIEljb25zICovXG4jaG9tZS1wcm9qZWN0LFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxuI3RvZGF5LXByb2plY3QsXG4jdGhpcy13ZWVrLXByb2plY3QsXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxuI2NvbXBsZXRlZC1wcm9qZWN0IC5pY29uLFxuI3RvZGF5LXByb2plY3QgLmljb24sXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biAuaWNvbi5kcm9wZG93biB7XG4gICAgZmlsbDogYmxhY2s7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIHdpZHRoOiAxN3B4O1xufVxuXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbn1cblxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24uZHJvcGRvd24ge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIC5wcm9qZWN0LW5hbWUsXG4udG8tZG8tdGl0bGUsXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi8qIFByb2plY3QgQWRkZXIgKi9cbi5wcm9qZWN0LWFkZGVyLmFjdGl2ZSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3QtYWRkZXIuYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4ucHJvamVjdC1hZGRlci5pbmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtYWRkZXIgLmljb24sXG4udG8tZG8tYWRkZXIgLmljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLyogVG8tRG8gV2luZG93ICovXG4udG8tZG8td2luZG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODEsIDE4MSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5wYXJlbnQtcHJvamVjdC1uYW1lIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc29ydC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogM3B4O1xufVxuXG5sYWJlbFtmb3I9XCJzb3J0ZXJcIl0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI3NvcnRlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuI3NvcnRlcjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBUby1EbyBUYWIgKi9cbi50by1kby10YWIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1yb3dzOiA2NXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBUby1EbyBDb250YWluZXIgKi9cbi50by1kby1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciBhdXRvIDI1cHggMjVweCAyNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udG8tZG8tdGl0bGUge1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLnRvLWRvLWR1ZS1kYXRlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4udG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xuICAgIGJvcmRlci1jb2xvcjogIzZkY2I2ODtcbiAgICBjb2xvcjogIzZkY2I2ODtcbn1cblxuLnRvLWRvLWR1ZS1kYXRlLmxhdGUge1xuICAgIGJvcmRlci1jb2xvcjogI2QwNjQ1ZDtcbiAgICBjb2xvcjogI2QwNjQ1ZDtcbn1cblxuLyogVG8tRG8gQWRkZXIgKi9cbi50by1kby1hZGRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG5cbiAgICB3aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvLWRvLWFkZGVyLFxuI3NvcnRlciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udG8tZG8tYWRkZXI6aG92ZXIsXG4udG8tZG8tYWRkZXI6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFRvLURvIEluZm8gQmFja2dyb3VuZCAqL1xuLnRvLWRvLWluZm8tYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyogVG8tRG8gSW5mbyBDb250YWluZXIgKi9cbi50by1kby1pbmZvLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5mby1maWVsZC1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2xvc2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmNsb3NlIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jbG9zZSAuaWNvbjpob3ZlciB7XG4gICAgZmlsbDogcmVkO1xufVxuXG4uaW5mby1maWVsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cblxuLnRvLWRvLWluZm8tbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50by1kby1pbmZvLXZhbHVlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jdGl0bGUtaW5mbyxcbiNwcm9qZWN0LWluZm8ge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuI2Rlc2NyaXB0aW9uLWluZm8sXG4jbm90ZXMtaW5mbyB7XG4gICAgaGVpZ2h0OiA5MHB4O1xufVxuXG4vKiBGb3JtIENvbnRhaW5lciAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMDEsIDEwMSwgMC4yMik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBGb3JtIFN0eWxlcyAqL1xuZm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbmZvcm0gaW5wdXQsXG5mb3JtIHNlbGVjdCxcbmZvcm0gdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE1LCAyMTEsIDIxMSk7XG4gICAgcGFkZGluZzogNXB4IDdweDtcbn1cblxuZm9ybSBpbnB1dDpmb2N1cyxcbmZvcm0gc2VsZWN0OmZvY3VzLFxuZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgNzcsIDc3KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlcixcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmRlbGV0ZSxcbi5lZGl0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIEljb24gVmlzaWJpbGl0eSAqL1xuLnByb2plY3QtY2FyZCAuaWNvbixcbi50by1kby1jb250YWluZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbn1cblxuLnByb2plY3QtY2FyZCAuaWNvbiB7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbi50by1kby1jb250YWluZXIgLmljb24ge1xuICAgIGZpbGw6IGJsYWNrO1xufVxuXG4uZGVsZXRlOmhvdmVyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWxsOiByZWQ7XG59XG5cbi5lZGl0OmhvdmVyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWxsOiBncmVlbjtcbn1cblxuLyogQ29tcGxldGVkIFRvLURvIFN0eWxlICovXG4udG8tZG8tY29udGFpbmVyLmNvbXBsZXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMjM4LCAxNzMpO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xuXG4gICAgI2hvbWUtcHJvamVjdCxcbiAgICAjY29tcGxldGVkLXByb2plY3QsXG4gICAgI3RvZGF5LXByb2plY3QsXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0LFxuICAgICNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAvKiBBZGp1c3QgdGhlIGRhc2hib2FyZCBhbmQgdG8tZG8gd2luZG93IHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyICovXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICB9XG5cbiAgICAucHJvamVjdHMtdGFiICoge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLnByb2plY3RzLXRhYiB7XG4gICAgICAgIGdhcDogM3B4O1xuICAgIH1cblxuICAgIC5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMjVweDtcbiAgICB9XG5cbiAgICAjaG9tZS1wcm9qZWN0IC5pY29uLFxuICAgICNjb21wbGV0ZWQtcHJvamVjdCAuaWNvbixcbiAgICAjdG9kYXktcHJvamVjdCAuaWNvbixcbiAgICAjdGhpcy13ZWVrLXByb2plY3QgLmljb24sXG4gICAgI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24sXG4gICAgLnByb2plY3QtYWRkZXIgLmljb24ge1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cbiAgICAgICAgZ2FwOiAxcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG5cbiAgICAudG8tZG8tY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBnYXA6IDRweDtcbiAgICB9XG5cbiAgICAudG8tZG8tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLnRvLWRvLWR1ZS1kYXRlLmxhdGUsXG4gICAgLnRvLWRvLWR1ZS1kYXRlLnVwY29taW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIC50by1kby1kdWUtZGF0ZS5sYXRlLFxuICAgIC50by1kby1kdWUtZGF0ZS51cGNvbWluZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICAucGFyZW50LXByb2plY3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG5cbiAgICAjc29ydGVyLFxuICAgIGxhYmVsIFtmb3I9XCJzb3J0ZXJcIl0sXG4gICAgLnRvLWRvLWFkZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgICNzb3J0ZXIge1xuICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgfVxuXG4gICAgLnRvLWRvLWFkZGVyIHtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUlBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFB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QUVBLHdFQUF3RTtJQUN4RTtRQUNJLDBCQUEwQjtRQUMxQiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBOzs7Ozs7UUFNSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsc0JBQXNCOztRQUV0QixRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxlQUFlO0lBQ25COztJQUVBOztRQUVJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOzs7UUFHSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHQ6ICMxMDA5MGM7XFxuICAgIC0tYmFja2dyb3VuZDogI2ZkZmNmYztcXG4gICAgLS1wcmltYXJ5OiAjYjdkN2M5O1xcbiAgICAtLXNlY29uZGFyeTogI2Q4ZTdlOTtcXG4gICAgLS1hY2NlbnQ6ICM1NzlkNWE7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi8qIENvbnRlbnQgQ29udGFpbmVyICovXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBEYXNoYm9hcmQgKi9cXG4uZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHMtdGFiIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBEZWZhdWx0IFByb2plY3RzIENvbnRhaW5lciAqL1xcbi5kZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogQ3JlYXRlZCBQcm9qZWN0cyBDb250YWluZXIgKi9cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA0MHB4O1xcbiAgICBnYXA6IDNweDtcXG5cXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lci5hY3RpdmUgLnByb2plY3QtY2FyZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAuZGVsZXRlLCBcXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIgLmVkaXQge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3RzLWNvbnRhaW5lciAucHJvamVjdC1uYW1lIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDAgO1xcbn1cXG5cXG4vKiBQcm9qZWN0IENhcmQgKi9cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1cHggMjVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIsXFxuLnByb2plY3QtYWRkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlPioge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBQcm9qZWN0IGFuZCBEcm9wZG93biBJY29ucyAqL1xcbiNob21lLXByb2plY3QsXFxuI2NvbXBsZXRlZC1wcm9qZWN0LFxcbiN0b2RheS1wcm9qZWN0LFxcbiN0aGlzLXdlZWstcHJvamVjdCxcXG4jY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jaG9tZS1wcm9qZWN0IC5pY29uLFxcbiNjb21wbGV0ZWQtcHJvamVjdCAuaWNvbixcXG4jdG9kYXktcHJvamVjdCAuaWNvbixcXG4jdGhpcy13ZWVrLXByb2plY3QgLmljb24sXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIC5pY29uLmRyb3Bkb3duIHtcXG4gICAgZmlsbDogYmxhY2s7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgd2lkdGg6IDE3cHg7XFxufVxcblxcbiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24uZHJvcGRvd24ge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyLmFjdGl2ZSAucHJvamVjdC1uYW1lLFxcbi50by1kby10aXRsZSxcXG4ucGFyZW50LXByb2plY3QtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4vKiBQcm9qZWN0IEFkZGVyICovXFxuLnByb2plY3QtYWRkZXIuYWN0aXZlIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1hZGRlci5hY3RpdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucHJvamVjdC1hZGRlci5pbmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWFkZGVyIC5pY29uLFxcbi50by1kby1hZGRlciAuaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4vKiBUby1EbyBXaW5kb3cgKi9cXG4udG8tZG8td2luZG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTgxLCAxODEpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBhcmVudC1wcm9qZWN0LW5hbWUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNvcnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwic29ydGVyXFxcIl0ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbiNzb3J0ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuI3NvcnRlcjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4vKiBUby1EbyBUYWIgKi9cXG4udG8tZG8tdGFiIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogNjVweDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogVG8tRG8gQ29udGFpbmVyICovXFxuLnRvLWRvLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciBhdXRvIDI1cHggMjVweCAyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvLWRvLXRpdGxlIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4udG8tZG8tZHVlLWRhdGUge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvLWRvLWR1ZS1kYXRlLnVwY29taW5nIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmRjYjY4O1xcbiAgICBjb2xvcjogIzZkY2I2ODtcXG59XFxuXFxuLnRvLWRvLWR1ZS1kYXRlLmxhdGUge1xcbiAgICBib3JkZXItY29sb3I6ICNkMDY0NWQ7XFxuICAgIGNvbG9yOiAjZDA2NDVkO1xcbn1cXG5cXG4vKiBUby1EbyBBZGRlciAqL1xcbi50by1kby1hZGRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcblxcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50by1kby1hZGRlcixcXG4jc29ydGVyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udG8tZG8tYWRkZXI6aG92ZXIsXFxuLnRvLWRvLWFkZGVyOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIFRvLURvIEluZm8gQmFja2dyb3VuZCAqL1xcbi50by1kby1pbmZvLWJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBUby1EbyBJbmZvIENvbnRhaW5lciAqL1xcbi50by1kby1pbmZvLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjVweCAwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW5mby1maWVsZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuXFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5jbG9zZSAuaWNvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jbG9zZSAuaWNvbjpob3ZlciB7XFxuICAgIGZpbGw6IHJlZDtcXG59XFxuXFxuLmluZm8tZmllbGQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi50by1kby1pbmZvLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50by1kby1pbmZvLXZhbHVlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3RpdGxlLWluZm8sXFxuI3Byb2plY3QtaW5mbyB7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uLWluZm8sXFxuI25vdGVzLWluZm8ge1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi8qIEZvcm0gQ29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMDEsIDEwMSwgMC4yMik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIEZvcm0gU3R5bGVzICovXFxuZm9ybSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIHNlbGVjdCxcXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDIxMSwgMjExKTtcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXG59XFxuXFxuZm9ybSBpbnB1dDpmb2N1cyxcXG5mb3JtIHNlbGVjdDpmb2N1cyxcXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSxcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDc3LCA3Nyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5lZGl0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogSWNvbiBWaXNpYmlsaXR5ICovXFxuLnByb2plY3QtY2FyZCAuaWNvbixcXG4udG8tZG8tY29udGFpbmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgLmljb24ge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciAuaWNvbiB7XFxuICAgIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbGw6IHJlZDtcXG59XFxuXFxuLmVkaXQ6aG92ZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmlsbDogZ3JlZW47XFxufVxcblxcbi8qIENvbXBsZXRlZCBUby1EbyBTdHlsZSAqL1xcbi50by1kby1jb250YWluZXIuY29tcGxldGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMjM4LCAxNzMpO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG5cXG4gICAgI2hvbWUtcHJvamVjdCxcXG4gICAgI2NvbXBsZXRlZC1wcm9qZWN0LFxcbiAgICAjdG9kYXktcHJvamVjdCxcXG4gICAgI3RoaXMtd2Vlay1wcm9qZWN0LFxcbiAgICAjY3JlYXRlZC1wcm9qZWN0cy1kcm9wZG93biB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIC8qIEFkanVzdCB0aGUgZGFzaGJvYXJkIGFuZCB0by1kbyB3aW5kb3cgdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy10YWIgKiB7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLXRhYiB7XFxuICAgICAgICBnYXA6IDNweDtcXG4gICAgfVxcblxcbiAgICAuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEyNXB4O1xcbiAgICB9XFxuXFxuICAgICNob21lLXByb2plY3QgLmljb24sXFxuICAgICNjb21wbGV0ZWQtcHJvamVjdCAuaWNvbixcXG4gICAgI3RvZGF5LXByb2plY3QgLmljb24sXFxuICAgICN0aGlzLXdlZWstcHJvamVjdCAuaWNvbixcXG4gICAgI2NyZWF0ZWQtcHJvamVjdHMtZHJvcGRvd24gLmljb24sXFxuICAgIC5wcm9qZWN0LWFkZGVyIC5pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAuZGVmYXVsdC1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICBnYXA6IDFweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnRvLWRvLWNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBnYXA6IDRweDtcXG4gICAgfVxcblxcbiAgICAudG8tZG8tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIC50by1kby1kdWUtZGF0ZS5sYXRlLFxcbiAgICAudG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50by1kby1kdWUtZGF0ZS5sYXRlLFxcbiAgICAudG8tZG8tZHVlLWRhdGUudXBjb21pbmcge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wYXJlbnQtcHJvamVjdC1uYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgfVxcblxcbiAgICAjc29ydGVyLFxcbiAgICBsYWJlbCBbZm9yPVxcXCJzb3J0ZXJcXFwiXSxcXG4gICAgLnRvLWRvLWFkZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcblxcbiAgICAjc29ydGVyIHtcXG4gICAgICAgIHdpZHRoOiAxNzBweDtcXG4gICAgfVxcblxcbiAgICAudG8tZG8tYWRkZXIge1xcbiAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobGltaXQpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpbWl0KS50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJTeW1ib2xzKGV4Y2x1ZGVTeW1ib2xzLCBncm91cCkge1xuICBsZXQgbmV3R3JvdXAgPSBncm91cDtcbiAgZXhjbHVkZVN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XG4gICAgbmV3R3JvdXAgPSBuZXdHcm91cC5yZXBsYWNlKHN5bWJvbCwgJycpO1xuICB9KTtcblxuICByZXR1cm4gbmV3R3JvdXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlkKGF2YWlsYWJsZUNoYXJzLCBpZExlbmd0aCkge1xuICBsZXQgaWQgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlkTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZCArPSBhdmFpbGFibGVDaGFyc1tnZXRSYW5kb21OdW1iZXIoYXZhaWxhYmxlQ2hhcnMubGVuZ3RoKV07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoe1xuICBsZW5ndGggPSAyMCxcbiAgdXNlTGV0dGVycyA9IHRydWUsXG4gIHVzZU51bWJlcnMgPSB0cnVlLFxuICBpbmNsdWRlU3ltYm9scyA9IFtdLFxuICBleGNsdWRlU3ltYm9scyA9IFtdLFxufSA9IHt9KSB7XG4gIGxldCBsZXR0ZXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcbiAgbGV0IG51bWJlcnMgPSAnMDEyMzQ1Njc4OSc7XG4gIGxldCBhdmFpbGFibGVDaGFycyA9IFtdO1xuICBsZXQgbGV0dGVyc0FyciA9IFtdO1xuICBsZXQgbnVtYmVyc0FyciA9IFtdO1xuXG4gIGlmICh1c2VMZXR0ZXJzKSB7XG4gICAgaWYgKGV4Y2x1ZGVTeW1ib2xzLmxlbmd0aCkgbGV0dGVycyA9IGZpbHRlclN5bWJvbHMoZXhjbHVkZVN5bWJvbHMsIGxldHRlcnMpO1xuICAgIGxldHRlcnNBcnIgPSBsZXR0ZXJzLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGlmICh1c2VOdW1iZXJzKSB7XG4gICAgaWYgKGV4Y2x1ZGVTeW1ib2xzLmxlbmd0aCkgbnVtYmVycyA9IGZpbHRlclN5bWJvbHMoZXhjbHVkZVN5bWJvbHMsIG51bWJlcnMpO1xuICAgIG51bWJlcnNBcnIgPSBudW1iZXJzLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGF2YWlsYWJsZUNoYXJzID0gWy4uLmxldHRlcnNBcnIsIC4uLm51bWJlcnNBcnIsIC4uLmluY2x1ZGVTeW1ib2xzXTtcblxuICByZXR1cm4gY3JlYXRlSWQoYXZhaWxhYmxlQ2hhcnMsIGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVVbmlxdWVJZDtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gdmFsID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogd2Vlay1pZGVudGlmaWVyIDxodHRwczovL2dpdGh1Yi5jb20vdGhyb2xsL3dlZWstaWRlbnRpZmllcj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgQ2zDqW1lbnQgQmlsbGlvdCwgY29udHJpYnV0b3JzLlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWVrSWRlbnRpZmllcjtcbm1vZHVsZS5leHBvcnRzLndlZWtJZGVudGlmaWVyID0gd2Vla0lkZW50aWZpZXI7XG5tb2R1bGUuZXhwb3J0cy5kYXRlRnJvbVdlZWsgPSBkYXRlRnJvbVdlZWs7XG5cbi8qKlxuICogR2V0IHVuaXF1ZSBhbmQgc2VxdWVudGlhbCB3ZWVrIGlkZW50aWZpZXIgb2YgY3VycmVudCBkYXRlIG9yIGdpdmVuIHZhbGlkIGBEYXRlYCBzdHJpbmcgZm9ybWF0XG4gKlxuICogKipFeGFtcGxlOioqXG4gKlxuICogYGBganNcbiAqIHZhciB3ZWVrSWRlbnRpZmllciA9IHJlcXVpcmUoJ2N1cnJlbnQtd2Vlay1udW1iZXInKTtcbiAqXG4gKiAvLyBhdWd1c3QgMTIsIDIwMTYgKGN1cnJlbnQgZGF0ZSlcbiAqIHdlZWtJZGVudGlmaWVyKCk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignSmFudWFyeSAwNSwgMTk3MCAwMzowMDowMCcpO1xuICogLy89PiAxXG4gKlxuICogd2Vla0lkZW50aWZpZXIobmV3IERhdGUoJ0F1Z3VzdCAxMiwgMjAxNicpKTtcbiAqIC8vPT4gMjQzMlxuICpcbiAqIHdlZWtJZGVudGlmaWVyKCcwOC8xMi8yMDE2Jyk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcignQXVndXN0IDEyLCAyMDE2Jyk7XG4gKiAvLz0+IDI0MzJcbiAqXG4gKiB3ZWVrSWRlbnRpZmllcihuZXcgRGF0ZSgnQXVndXN0IDE5LCAyMDE2JykpO1xuICogLy89PiAyNDMzXG4gKlxuICogd2Vla0lkZW50aWZpZXIoJzA4LzE5LzIwMTYnKTtcbiAqIC8vPT4gIDI0MzNcbiAqIGBgYFxuICpcbiAqIEBuYW1lIHdlZWtJZGVudGlmaWVyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBbZGF0ZV1gIGV2ZXJ5IHZhbGlkIERhdGUtaXNoIHN0cmluZyBmb3JtYXRcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHdlZWtJZGVudGlmaWVyKGRhdGUpIHtcbiAgdmFyIGluc3RhbmNlO1xuXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgJiYgZGF0ZS5sZW5ndGgpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBEYXRlKGRhdGUpO1xuICB9IGVsc2UgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgaW5zdGFuY2UgPSBkYXRlO1xuICB9IGVsc2Uge1xuICAgIGluc3RhbmNlID0gbmV3IERhdGUoKTtcbiAgfVxuICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoaXMgZGF0ZSBvYmplY3RcbiAgdmFyIHRhcmdldCA9IG5ldyBEYXRlKGluc3RhbmNlLnZhbHVlT2YoKSk7XG4gIC8vIFN0YXJ0aW5nIGRhdGUgcG9pbnQgZm9yIG91ciBzZXF1ZW5jZVxuICB2YXIgbGFzdERheU9mV2Vla1plcm9UaW1lc3RhbXAgPSBuZXcgRGF0ZSgnSmFudWFyeSA1LCAxOTcwIDAwOjAwOjAwJykuZ2V0VGltZSgpIC0gMTtcbiAgLy8gTnVtYmVyIG9mIHdlZWsgZnJvbSBvdXIgc3RhcnRpbmcgZGF0ZVxuICB2YXIgd2Vla051bWJlcmRpZmYgPSBNYXRoLmNlaWwoKHRhcmdldC5nZXRUaW1lKCkgLSBsYXN0RGF5T2ZXZWVrWmVyb1RpbWVzdGFtcCkgLyAoMjQgKiAzNjAwICogMTAwMCAqIDcpKTtcblxuICByZXR1cm4gd2Vla051bWJlcmRpZmY7XG59XG5cbi8qKlxuICogR2V0IG1vbmRheSBkYXRlIG9mIHRoZSBnaXZlbiB3ZWVrIGlkZW50aWZpZXJcbiAqXG4gKiAgKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqc1xuICogdmFyIHdlZWtJZGVudGlmaWVyID0gcmVxdWlyZSgnY3VycmVudC13ZWVrLW51bWJlcicpO1xuICpcbiAqIHdlZWtJZGVudGlmaWVyLmRhdGVGcm9tV2VlaygyNDAzKTtcbiAqIC8vPT4gSmFudWFyeSAxOCwgMjAxNiAwMDowMDowMFxuICpcbiAqIGBgYFxuICogQG5hbWUgd2Vla0lkZW50aWZpZXIuZGF0ZUZyb21XZWVrXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHdlZWtJZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtEYXRlfSBNb25kYXkgb2YgdGhlIGdpdmVuIHdlZWsgaWRlbnRpZmllciBvciBKYW51YXJ5IDUsIDE5NzAgMDA6MDA6MDAgaWYgd2Vla0lkZW50aWZpZXIgaXMgbm90ID4gMC5cbiAqL1xuZnVuY3Rpb24gZGF0ZUZyb21XZWVrKHdlZWtJZGVudGlmaWVyKSB7XG4gIGlmIChpc05hTihwYXJzZUZsb2F0KHdlZWtJZGVudGlmaWVyKSkpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0YXJ0aW5nIGRhdGUgcG9pbnQgZm9yIG91ciBzZXF1ZW5jZVxuICAgIHZhciBmaXJzdERheU9mV2Vla09uZSwgbW9uZGF5T2ZXZWVrO1xuICAgIG1vbmRheU9mV2VlayA9IGZpcnN0RGF5T2ZXZWVrT25lID0gbmV3IERhdGUoJ0phbnVhcnkgNSwgMTk3MCAwMDowMDowMCcpO1xuICAgIGlmICh3ZWVrSWRlbnRpZmllciA+IDApIHtcbiAgICAgIG1vbmRheU9mV2VlayA9IG5ldyBEYXRlKCgod2Vla0lkZW50aWZpZXIgLSAxKSAqICgyNCAqIDM2MDAgKiAxMDAwICogNykpICsgZmlyc3REYXlPZldlZWtPbmUuZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbmRheU9mV2VlaztcbiAgfVxufVxuIiwiLyohIChjKSAyMDIwIEFuZHJlYSBHaWFtbWFyY2hpICovXG5cbmNvbnN0IHtwYXJzZTogJHBhcnNlLCBzdHJpbmdpZnk6ICRzdHJpbmdpZnl9ID0gSlNPTjtcbmNvbnN0IHtrZXlzfSA9IE9iamVjdDtcblxuY29uc3QgUHJpbWl0aXZlID0gU3RyaW5nOyAgIC8vIGl0IGNvdWxkIGJlIE51bWJlclxuY29uc3QgcHJpbWl0aXZlID0gJ3N0cmluZyc7IC8vIGl0IGNvdWxkIGJlICdudW1iZXInXG5cbmNvbnN0IGlnbm9yZSA9IHt9O1xuY29uc3Qgb2JqZWN0ID0gJ29iamVjdCc7XG5cbmNvbnN0IG5vb3AgPSAoXywgdmFsdWUpID0+IHZhbHVlO1xuXG5jb25zdCBwcmltaXRpdmVzID0gdmFsdWUgPT4gKFxuICB2YWx1ZSBpbnN0YW5jZW9mIFByaW1pdGl2ZSA/IFByaW1pdGl2ZSh2YWx1ZSkgOiB2YWx1ZVxuKTtcblxuY29uc3QgUHJpbWl0aXZlcyA9IChfLCB2YWx1ZSkgPT4gKFxuICB0eXBlb2YgdmFsdWUgPT09IHByaW1pdGl2ZSA/IG5ldyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcbik7XG5cbmNvbnN0IHJldml2ZSA9IChpbnB1dCwgcGFyc2VkLCBvdXRwdXQsICQpID0+IHtcbiAgY29uc3QgbGF6eSA9IFtdO1xuICBmb3IgKGxldCBrZSA9IGtleXMob3V0cHV0KSwge2xlbmd0aH0gPSBrZSwgeSA9IDA7IHkgPCBsZW5ndGg7IHkrKykge1xuICAgIGNvbnN0IGsgPSBrZVt5XTtcbiAgICBjb25zdCB2YWx1ZSA9IG91dHB1dFtrXTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUpIHtcbiAgICAgIGNvbnN0IHRtcCA9IGlucHV0W3ZhbHVlXTtcbiAgICAgIGlmICh0eXBlb2YgdG1wID09PSBvYmplY3QgJiYgIXBhcnNlZC5oYXModG1wKSkge1xuICAgICAgICBwYXJzZWQuYWRkKHRtcCk7XG4gICAgICAgIG91dHB1dFtrXSA9IGlnbm9yZTtcbiAgICAgICAgbGF6eS5wdXNoKHtrLCBhOiBbaW5wdXQsIHBhcnNlZCwgdG1wLCAkXX0pO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCB0bXApO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRba10gIT09IGlnbm9yZSlcbiAgICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHZhbHVlKTtcbiAgfVxuICBmb3IgKGxldCB7bGVuZ3RofSA9IGxhenksIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7aywgYX0gPSBsYXp5W2ldO1xuICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHJldml2ZS5hcHBseShudWxsLCBhKSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG5cbmNvbnN0IHNldCA9IChrbm93biwgaW5wdXQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gUHJpbWl0aXZlKGlucHV0LnB1c2godmFsdWUpIC0gMSk7XG4gIGtub3duLnNldCh2YWx1ZSwgaW5kZXgpO1xuICByZXR1cm4gaW5kZXg7XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2UgPSAodGV4dCwgcmV2aXZlcikgPT4ge1xuICBjb25zdCBpbnB1dCA9ICRwYXJzZSh0ZXh0LCBQcmltaXRpdmVzKS5tYXAocHJpbWl0aXZlcyk7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXRbMF07XG4gIGNvbnN0ICQgPSByZXZpdmVyIHx8IG5vb3A7XG4gIGNvbnN0IHRtcCA9IHR5cGVvZiB2YWx1ZSA9PT0gb2JqZWN0ICYmIHZhbHVlID9cbiAgICAgICAgICAgICAgcmV2aXZlKGlucHV0LCBuZXcgU2V0LCB2YWx1ZSwgJCkgOlxuICAgICAgICAgICAgICB2YWx1ZTtcbiAgcmV0dXJuICQuY2FsbCh7Jyc6IHRtcH0sICcnLCB0bXApO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9ICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSA9PiB7XG4gIGNvbnN0ICQgPSByZXBsYWNlciAmJiB0eXBlb2YgcmVwbGFjZXIgPT09IG9iamVjdCA/XG4gICAgICAgICAgICAoaywgdikgPT4gKGsgPT09ICcnIHx8IC0xIDwgcmVwbGFjZXIuaW5kZXhPZihrKSA/IHYgOiB2b2lkIDApIDpcbiAgICAgICAgICAgIChyZXBsYWNlciB8fCBub29wKTtcbiAgY29uc3Qga25vd24gPSBuZXcgTWFwO1xuICBjb25zdCBpbnB1dCA9IFtdO1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgbGV0IGkgPSArc2V0KGtub3duLCBpbnB1dCwgJC5jYWxsKHsnJzogdmFsdWV9LCAnJywgdmFsdWUpKTtcbiAgbGV0IGZpcnN0UnVuID0gIWk7XG4gIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgZmlyc3RSdW4gPSB0cnVlO1xuICAgIG91dHB1dFtpXSA9ICRzdHJpbmdpZnkoaW5wdXRbaSsrXSwgcmVwbGFjZSwgc3BhY2UpO1xuICB9XG4gIHJldHVybiAnWycgKyBvdXRwdXQuam9pbignLCcpICsgJ10nO1xuICBmdW5jdGlvbiByZXBsYWNlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZmlyc3RSdW4pIHtcbiAgICAgIGZpcnN0UnVuID0gIWZpcnN0UnVuO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBhZnRlciA9ICQuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGVvZiBhZnRlcikge1xuICAgICAgY2FzZSBvYmplY3Q6XG4gICAgICAgIGlmIChhZnRlciA9PT0gbnVsbCkgcmV0dXJuIGFmdGVyO1xuICAgICAgY2FzZSBwcmltaXRpdmU6XG4gICAgICAgIHJldHVybiBrbm93bi5nZXQoYWZ0ZXIpIHx8IHNldChrbm93biwgaW5wdXQsIGFmdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGFmdGVyO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdG9KU09OID0gYW55ID0+ICRwYXJzZShzdHJpbmdpZnkoYW55KSk7XG5leHBvcnQgY29uc3QgZnJvbUpTT04gPSBhbnkgPT4gcGFyc2UoJHN0cmluZ2lmeShhbnkpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9qc19tb2R1bGVzL1Byb2plY3QuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSBcIi4vanNfbW9kdWxlcy9jcmVhdGVQcm9qZWN0Q2FyZC5qc1wiO1xuaW1wb3J0IHsgc2V0Q3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vanNfbW9kdWxlcy9zZWxlY3RlZFByb2plY3RNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBwb3BVcFByb2plY3RBZGRlckZvcm0gfSBmcm9tIFwiLi9qc19tb2R1bGVzL3BvcFVwUHJvamVjdEFkZGVyRm9ybS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAvLyBMb2FkIHByb2plY3RzIGZyb20gc3RvcmFnZSBhbmQgc2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCB0byBcIkhvbWVcIi5cbiAgICBQcm9qZWN0LmxvYWRQcm9qZWN0cygpO1xuICAgIHNldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdChQcm9qZWN0LmhvbWUpO1xuXG4gICAgLy8gTG9hZCBwcm9qZWN0cyB0byB0aGUgdGFicywgc2V0IHVwIHByb2plY3QgYWRkZXIgYnV0dG9uLCBhbmQgcHJvamVjdCBkcm9wZG93biBidXR0b24uXG4gICAgbG9hZFByb2plY3RzVG9UYWJzKCk7XG4gICAgc2V0VXBQcm9qZWN0QWRkZXIoKTtcbiAgICBzZXRVcFByb2plY3REcm9wZG93bigpO1xufSk7XG5cbi8vIExvYWQgcHJvamVjdHMgdG8gdGhlIHRhYnMuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNUb1RhYnMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXRhYlwiKTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHNDb250YWluZXIgPSBwcm9qZWN0c1RhYi5xdWVyeVNlbGVjdG9yKFwiLmRlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lciA9IHByb2plY3RzVGFiLnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlZC1wcm9qZWN0cy1jb250YWluZXJcIik7XG5cbiAgICBQcm9qZWN0LnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb2plY3QgaXMgYSBkZWZhdWx0IHByb2plY3Qgb3Igbm90LlxuICAgICAgICBpZiAoaXNEZWZhdWx0UHJvamVjdChwcm9qZWN0KSkge1xuICAgICAgICAgICAgZGVmYXVsdFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZWRQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gQ2hlY2sgaWYgYSBwcm9qZWN0IGlzIGEgZGVmYXVsdCBwcm9qZWN0LlxuZnVuY3Rpb24gaXNEZWZhdWx0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgcHJvamVjdC5pZCA9PT0gXCJob21lLXByb2plY3RcIiB8fFxuICAgICAgICBwcm9qZWN0LmlkID09PSBcImNvbXBsZXRlZC1wcm9qZWN0XCIgfHxcbiAgICAgICAgcHJvamVjdC5pZCA9PT0gXCJ0b2RheS1wcm9qZWN0XCIgfHxcbiAgICAgICAgcHJvamVjdC5pZCA9PT0gXCJ0aGlzLXdlZWstcHJvamVjdFwiXG4gICAgKTtcbn1cblxuLy8gU2V0IHVwIHRoZSBwcm9qZWN0IGFkZGVyIGJ1dHRvbi5cbmZ1bmN0aW9uIHNldFVwUHJvamVjdEFkZGVyKCkge1xuICAgIGNvbnN0IHByb2plY3RBZGRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGRlclwiKTtcbiAgICBwcm9qZWN0QWRkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gUG9wIHVwIHRoZSBwcm9qZWN0IGFkZGVyIGZvcm0gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICAgIHBvcFVwUHJvamVjdEFkZGVyRm9ybSgpO1xuICAgIH0pO1xufVxuXG4vLyBTZXQgdXAgdGhlIHByb2plY3QgZHJvcGRvd24gYnV0dG9uLlxuZnVuY3Rpb24gc2V0VXBQcm9qZWN0RHJvcGRvd24oKSB7XG4gICAgY29uc3QgcHJvamVjdERyb3Bkb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVkLXByb2plY3RzLWRyb3Bkb3duXCIpO1xuICAgIHByb2plY3REcm9wZG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGVkUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkZXJcIilcblxuICAgICAgICAvLyBUb2dnbGUgdGhlICdhY3RpdmUnIGFuZCAnaW5hY3RpdmUnIGNsYXNzZXMgZm9yIHRoZSBjcmVhdGVkIHByb2plY3RzIGNvbnRhaW5lci5cbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY3JlYXRlZFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHRoZSAnYWN0aXZlJyBhbmQgJ2luYWN0aXZlJyBjbGFzc2VzIGZvciB0aGUgcHJvamVjdCBhZGRlci5cbiAgICAgICAgcHJvamVjdEFkZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgcHJvamVjdEFkZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsicGFyc2UiLCJzdHJpbmdpZnkiLCJUb0RvIiwiZ2VuZXJhdGVVbmlxdWVJZCIsInJlcXVpcmUiLCJQcm9qZWN0IiwicHJvamVjdHMiLCJob21lIiwibG9hZFByb2plY3RzIiwic2VyaWFsaXplZFNhdmVkUHJvamVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZWRTZXJpYWxpemVkU2F2ZWRQcm9qZWN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwidG9Eb0l0ZW1zIiwiZm9yRWFjaCIsInRvRG9JdGVtIiwiYWRkVG9EbyIsIk9iamVjdCIsInZhbHVlcyIsImlkIiwic2F2ZUNoYW5nZXMiLCJmaW5kIiwicHJvamVjdCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidXNlTnVtYmVycyIsInVzZUxldHRlcnMiLCJwdXNoIiwiZGVsZXRlIiwic3BsaWNlIiwiaW5kZXhPZiIsInNldFByb2plY3RUaXRsZSIsIm5ld1RpdGxlIiwiZGVsZXRlVG9EbyIsInJlcGxhY2VUb0RvIiwibmV3VG9EbyIsIm9sZFRvRG8iLCIjc2F2ZUNoYW5nZXMiLCJzZXRJdGVtIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJub3RlcyIsImNvbXBsZXRlZCIsImRhdGVBbmRUaW1lQ3JlYXRlZCIsImRhdGVNb2RpZmllZCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInBvcFVwUHJvamVjdEVkaXRvckZvcm0iLCJzZXRDdXJyZW50bHlTZWxlY3RlZFByb2plY3QiLCJjcmVhdGVQcm9qZWN0Q2FyZCIsInByb2plY3RDYXJkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicHJvamVjdFJlZmVyZW5jZSIsImhvbWVJY29uIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjb21wbGV0ZWRJY29uIiwidG9kYXlJY29uIiwidGhpc1dlZWtJY29uIiwicHJvamVjdFRpdGxlIiwidGV4dENvbnRlbnQiLCJhZGREZWxldGVCdXR0b24iLCJhZGRFZGl0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbGV0ZUJ1dHRvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93IiwiY29uZmlybSIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJlZGl0QnV0dG9uIiwiZm9ybWF0RGF0ZSIsInBvcFVwVG9Eb0VkaXRvckZvcm0iLCJwb3BVcFRvRG9JbmZvQ2FyZCIsImdldEN1cnJlbnRseVNlbGVjdGVkUHJvamVjdCIsImNyZWF0ZVRvRG9DYXJkIiwidG9Eb0NhcmQiLCJ0b0RvUmVmZXJlbmNlIiwiYWRkQ2hlY2tCb3giLCJjaGVja2VkIiwidG9Eb1RpdGxlIiwidG9Eb0R1ZURhdGUiLCJpc1RvRG9MYXRlIiwiYWRkVmlld0J1dHRvbiIsImN1cnJlbnREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJTdHJpbmciLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZGF5IiwiZ2V0RGF0ZSIsInZpZXdCdXR0b24iLCJjaGVja0JveCIsInR5cGUiLCJpc1RvRG9Db21wbGV0ZWQiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXREYXRlIiwibW9udGhzIiwic3BsaXQiLCJmb3JtYXR0ZWREYXRlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJwb3BVcFByb2plY3RBZGRlckZvcm0iLCJmb3JtQ29udGFpbmVyIiwiZm9ybSIsImNhbmNlbEJ1dHRvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVkUHJvamVjdHNDb250YWluZXIiLCJpbnNlcnRCZWZvcmUiLCJib2R5IiwicHJvamVjdEVkaXRvckZvcm0iLCJuZXdQcm9qZWN0VGl0bGVJbnB1dCIsInN1Ym1pdEJ1dHRvbiIsInJlbmRlclRvRG9XaW5kb3ciLCJwb3BVcFRvRG9BZGRlckZvcm0iLCJ0b0RvQWRkZXJGb3JtIiwidGl0bGVJbnB1dCIsIm5hbWUiLCJyZXF1aXJlZCIsImNyZWF0ZUZpZWxkRGl2IiwiZGVzY3JpcHRpb25UZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwiZHVlRGF0ZUlucHV0IiwicHJpb3JpdHlTZWxlY3QiLCJwcmlvcml0eU9wdGlvbnMiLCJvcHRpb25WYWx1ZSIsIm9wdGlvbiIsIm5vdGVzVGV4dGFyZWEiLCJ0b0RvRGVzY3JpcHRpb24iLCJ0b0RvUHJpb3JpdHkiLCJ0b0RvTm90ZXMiLCJsYWJlbFRleHQiLCJpbnB1dEVsZW1lbnQiLCJkaXYiLCJsYWJlbCIsInRvRG9FZGl0b3JGb3JtIiwiYmFja2dyb3VuZENvbnRhaW5lciIsInRvRG9JbmZvQ29udGFpbmVyIiwiY2xvc2VEaXYiLCJjcmVhdGVJbmZvRmllbGQiLCJpbmZvRmllbGQiLCJpbmZvTGFiZWwiLCJpbmZvVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluZm9GaWVsZENvbnRhaW5lciIsInNvcnRUb0RvSXRlbXMiLCJjb21wYXJlV2VlayIsImN1cnJlbnRQcm9qZWN0IiwiY3VycmVudFRvRG9XaW5kb3ciLCJuZXdUb0RvV2luZG93IiwiY3VycmVudFByb2plY3ROYW1lQ2FyZCIsImNyZWF0ZUN1cnJlbnRQcm9qZWN0TmFtZUNhcmQiLCJzb3J0ZXIiLCJjcmVhdGVTb3J0ZXIiLCJ0b0RvVGFiIiwiY3JlYXRlVG9Eb1RhYiIsInRvRG9BZGRlckJ1dHRvbiIsImNyZWF0ZVRvRG9BZGRlckJ1dHRvbiIsInJlcGxhY2VDaGlsZCIsInNvcnRlckNvbnRhaW5lciIsInNldEF0dHJpYnV0ZSIsImJlZm9yZSIsInNvcnRpbmdPcHRpb25zIiwidGV4dCIsImN1cnJlbnRTb3J0ZXIiLCJuZXdDdXJyZW50U29ydE9wdGlvbiIsInNvcnRpbmdPcHRpb24iLCJzZWxlY3RlZCIsImN1cnJlbnRUb0RvVGFiIiwidW5zb3J0ZWRUb0RvSXRlbXMiLCJmb3JtYXR0ZWRDdXJyZW50RGF0ZSIsInRvU3RyaW5nIiwic29ydGVkVG9Eb0l0ZW1zIiwiYnV0dG9uIiwiY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0Iiwic29ydENyaXRlcmlhIiwic29ydEZ1bmN0aW9ucyIsImRhdGUtYXNjZW5kaW5nIiwiVG9EbzEiLCJUb0RvMiIsImRhdGUtZGVzY2VuZGluZyIsIm5hbWUtYXNjZW5kaW5nIiwibG9jYWxlQ29tcGFyZSIsIm5hbWUtZGVzY2VuZGluZyIsInRpbWUtY3JlYXRlZC1hc2NlbmRpbmciLCJ0aW1lLWNyZWF0ZWQtZGVzY2VuZGluZyIsInByaW9yaXR5LWFzY2VuZGluZyIsInByaW9yaXR5TGV2ZWwiLCJwcmlvcml0eS1kZXNjZW5kaW5nIiwic29ydCIsImxvYWRQcm9qZWN0c1RvVGFicyIsInNldFVwUHJvamVjdEFkZGVyIiwic2V0VXBQcm9qZWN0RHJvcGRvd24iLCJwcm9qZWN0c1RhYiIsImRlZmF1bHRQcm9qZWN0c0NvbnRhaW5lciIsImlzRGVmYXVsdFByb2plY3QiLCJwcm9qZWN0QWRkZXJCdXR0b24iLCJwcm9qZWN0RHJvcGRvd25CdXR0b24iLCJwcm9qZWN0QWRkZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9