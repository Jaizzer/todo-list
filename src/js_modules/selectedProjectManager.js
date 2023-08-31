import { renderToDoItems } from "./renderToDoItems";

let currentlySelectedProject = null;

export function setCurrentlySelectedProject(project) {
    currentlySelectedProject = project;

     // Add the parent-project name.
    document.querySelector(".parent-project-name").textContent = currentlySelectedProject.projectTitle;

    renderToDoItems(currentlySelectedProject);
}

export function getCurrentlySelectedProject() {
    return currentlySelectedProject;
}