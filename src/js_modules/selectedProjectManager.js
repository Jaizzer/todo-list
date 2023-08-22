let currentlySelectedProject = null;

export function setCurrentlySelectedProject(project) {
    currentlySelectedProject = project;
}

export function getCurrentlySelectedProject() {
    return currentlySelectedProject;
}