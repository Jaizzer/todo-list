import { Project } from "./js_modules/Project.js";
import { createProjectCard } from "./js_modules/createProjectCard.js";
import { getCurrentlySelectedProject, setCurrentlySelectedProject } from "./js_modules/selectedProjectManager.js";

import "./style.css";
import { renderToDoItems } from "./js_modules/renderToDoItems.js";
import { popUpProjectAdderForm } from "./js_modules/popUpProjectAdderForm.js";
import { popUpToDoAdderForm } from "./js_modules/popUpToDoAdderForm.js";

window.addEventListener("load", () => {

    // Load all saved projects.
    Project.loadProjects();

    // Set currently selected project to "Home" when page loads.
    setCurrentlySelectedProject(Project.home);    

    // Load all projects to projects-tab.
    const projectsTab = document.querySelector(".projects-tab")
    Project.projects.forEach(project => {

        const projectCard = createProjectCard(project)

        projectsTab.appendChild(projectCard);
    })
})

// Load project adder form when "Add Project" button is pressed.
const projectAdderButton = document.querySelector(".project-adder");
projectAdderButton.addEventListener("click", () => {
    popUpProjectAdderForm();
})


// Load ToDo adder from when "Add ToDo" button is pressed.
const toDoAdderButton = document.querySelector(".to-do-adder");
toDoAdderButton.addEventListener("click", () => {
    popUpToDoAdderForm();
})


const sorter = document.querySelector("#sorter");
sorter.addEventListener("change", () => {
    renderToDoItems(getCurrentlySelectedProject());
});