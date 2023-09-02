import { Project } from "./js_modules/Project.js";
import { createProjectCard } from "./js_modules/createProjectCard.js";
import { setCurrentlySelectedProject } from "./js_modules/selectedProjectManager.js";

import "./style.css";
import { popUpProjectAdderForm } from "./js_modules/popUpProjectAdderForm.js";

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
