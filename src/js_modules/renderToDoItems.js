import { createToDoCard } from "./createToDoCard";
import { Project } from "./Project";

export function renderToDoItems(currentProject) {

    // Access to-do container.
    const toDoTab = document.querySelector(".to-do-tab");

    // Clear previous to-do container contents.
    toDoTab.innerHTML = "";

    // Render all ToDos across all projects if the project is "Home"
    if (currentProject === Project.home) {
        Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                toDoTab.appendChild(createToDoCard(toDoItem));
            }));
    }
    // If current project is not "Home", only render its respective ToDo items.
    else {
        currentProject.toDoItems.forEach(toDoItem => {
            toDoTab.appendChild(createToDoCard(toDoItem));
        });
    }
}