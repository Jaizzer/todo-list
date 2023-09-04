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

    // Acces "default-projects" container.
    const defaultProjectsContainer = projectsTab.querySelector(".default-projects-container");

    // Access "created-projects" container.
    const createdProjectsContainer = projectsTab.querySelector(".created-projects-container");

    Project.projects.forEach(project => {

        const projectCard = createProjectCard(project)

        if (project.projectId === "home-project" || project.projectId === "completed-project" || project.projectId === "today-project") {
            defaultProjectsContainer.appendChild(projectCard);
        }
        else {
            // Insert project card inside crated projects container before the "project-adder" button.
            createdProjectsContainer.insertBefore(projectCard, createdProjectsContainer.querySelector(".project-adder"));
        }
    })
})

// Load project adder form when "Add Project" button is pressed.
const projectAdderButton = document.querySelector(".project-adder");
projectAdderButton.addEventListener("click", () => {
    popUpProjectAdderForm();
})


// Add feature to the Project's drop down button in dashboard.
const projectDropdownButton = document.querySelector("#created-projects-dropdown");
projectDropdownButton.addEventListener("click", () => {

    // Access created projects container.
    const createdProjectsContainer = document.querySelector(".created-projects-container");

    // Get all created project container's classes.
    const classes = createdProjectsContainer.className.split(' ');

    // If drop down button is clicked when created projects container is "active", make it "inactive".
    if (classes.includes("active")) {
        createdProjectsContainer.classList.replace("active", "inactive");
    }
    // If drop down button is clicked when created projects container is "inactive", make it "active".
    else if (classes.includes("inactive")) {
        createdProjectsContainer.classList.replace("inactive", "active");
    }
})