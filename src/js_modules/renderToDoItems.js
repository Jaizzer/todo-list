import { createToDoCard } from "./createToDoCard";
import { Project } from "./Project";
import { sort } from "./sort";

export function renderToDoItems(currentProject) {

    // Access to-do container.
    const toDoTab = document.querySelector(".to-do-tab");

    // Clear previous to-do container contents.
    toDoTab.innerHTML = "";

    // Array for storing all unsorted ToDo items.
    let unsortedToDoItems = [];

    // Render all ToDos across all projects if the project is "Home"
    if (currentProject === Project.home) {
        Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                unsortedToDoItems.push(toDoItem);
            }));
    }
    // If current project is not "Home", only render its respective ToDo items.
    else {
        currentProject.toDoItems.forEach(toDoItem => {
            unsortedToDoItems.push(toDoItem);
        });
    }

    // Sort.
    const sortedToDoItems = sort(unsortedToDoItems);

    // Render all ToDo cards to ToDo tab.
    sortedToDoItems.forEach(toDoItem => {
        document.querySelector(".to-do-tab").appendChild(createToDoCard(toDoItem));
    })
}