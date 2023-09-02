import { renderToDoWindow } from "./renderToDoWindow";

let currentlySelectedProject = null;

export function setCurrentlySelectedProject(project) {
    currentlySelectedProject = project;

    renderToDoWindow(currentlySelectedProject);
}

export function getCurrentlySelectedProject() {
    return currentlySelectedProject;
}