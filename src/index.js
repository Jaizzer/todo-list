import { Project } from "./js_modules/Project.js";
import { createProjectCard } from "./js_modules/createProjectCard.js";
import { createProjectAdderForm } from "./js_modules/createProjectAdderForm.js";
import "./style.css";

window.addEventListener("load", () => {

    // Load all saved projects.
    Project.loadProjects();

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