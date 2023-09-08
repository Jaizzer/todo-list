import { Project } from "./js_modules/Project.js";
import { createProjectCard } from "./js_modules/createProjectCard.js";
import { setCurrentlySelectedProject } from "./js_modules/selectedProjectManager.js";
import { popUpProjectAdderForm } from "./js_modules/popUpProjectAdderForm.js";
import "./style.css";

window.addEventListener("load", () => {
    // Load projects from storage and set the currently selected project to "Home".
    Project.loadProjects();
    setCurrentlySelectedProject(Project.home);

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

    Project.projects.forEach(project => {
        const projectCard = createProjectCard(project);

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
        popUpProjectAdderForm();
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
