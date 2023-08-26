import { renderToDoItems } from "./renderToDoItems";

let currentlySelectedProject = null;

export function setCurrentlySelectedProject(project) {
    currentlySelectedProject = project;
    renderToDoItems(currentlySelectedProject);
}

export function getCurrentlySelectedProject() {
    return currentlySelectedProject;
}