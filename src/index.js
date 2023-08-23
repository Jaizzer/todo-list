import { Project } from "./js_modules/Project.js";
import { createProjectCard } from "./js_modules/createProjectCard.js";
import { createProjectAdderForm } from "./js_modules/createProjectAdderForm.js";
import { setCurrentlySelectedProject, getCurrentlySelectedProject } from "./js_modules/selectedProjectManager.js";

import "./style.css";
import { createToDoAdderForm } from "./js_modules/createToDoAdderForm.js";

window.addEventListener("load", () => {

    // Load all saved projects.
    Project.loadProjects();

    // Set currently selected project to "Home" when page loads.
    setCurrentlySelectedProject(Project.projects.find(project => project.projectId === "home-project"));

    // Load all projects to projects-tab.
    const projectsTab = document.querySelector(".projects-tab")
    Project.projects.forEach(project => {
        projectsTab.appendChild(createProjectCard(project));
    })
})

// Load project adder form when "Add Project" button is pressed.
const projectAdderButton = document.querySelector(".project-adder");
projectAdderButton.addEventListener("click", () => {
    const projectAdderForm = createProjectAdderForm();
    document.body.appendChild(projectAdderForm);
})


// Load ToDo adder from when "Add ToDo" button is pressed.
const toDoAdderButton = document.querySelector(".to-do-adder");
toDoAdderButton.addEventListener("click", () => {
    const toDoAdderForm = createToDoAdderForm();
    document.body.appendChild(toDoAdderForm);
})