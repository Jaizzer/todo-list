import { Project } from "./js_modules/Project.js";
import { createProjectCard } from "./js_modules/createProjectCard.js";
import { setCurrentlySelectedProject } from "./js_modules/selectedProjectManager.js";
import { popUpProjectAdderForm } from "./js_modules/popUpProjectAdderForm.js";
import "./style.css";

window.addEventListener("load", () => {
    Project.loadProjects();
    setCurrentlySelectedProject(Project.home);
    loadProjectsToTabs();
    setUpProjectAdder();
    setUpProjectDropdown();
});

function loadProjectsToTabs() {
    const projectsTab = document.querySelector(".projects-tab");
    const defaultProjectsContainer = projectsTab.querySelector(".default-projects-container");
    const createdProjectsContainer = projectsTab.querySelector(".created-projects-container");

    Project.projects.forEach(project => {
        const projectCard = createProjectCard(project);

        if (isDefaultProject(project)) {
            defaultProjectsContainer.appendChild(projectCard);
        } else {
            insertProjectCard(createdProjectsContainer, projectCard);
        }
    });
}

function isDefaultProject(project) {
    return (
        project.id === "home-project" ||
        project.id === "completed-project" ||
        project.id === "today-project" ||
        project.id === "this-week-project"
    );
}

function insertProjectCard(createdProjectsContainer, projectCard) {
    createdProjectsContainer.insertBefore(projectCard, createdProjectsContainer.querySelector(".project-adder"));
}

function setUpProjectAdder() {
    const projectAdderButton = document.querySelector(".project-adder");
    projectAdderButton.addEventListener("click", () => {
        popUpProjectAdderForm();
    });
}

function setUpProjectDropdown() {
    const projectDropdownButton = document.querySelector("#created-projects-dropdown");
    projectDropdownButton.addEventListener("click", () => {
        const createdProjectsContainer = document.querySelector(".created-projects-container");
        createdProjectsContainer.classList.toggle("inactive");
        createdProjectsContainer.classList.toggle("active");
    });
}
