import { createToDoCard } from "./createToDoCard";

export function renderToDoItems(currentProject) {
    // Access to-do container.
    const toDoTab = document.querySelector(".to-do-tab");

    // Clear previous to-do container contents.
    toDoTab.innerHTML = "";

    // Put all Project's to-do items in the to-do tab.
    currentProject.toDoItems.forEach(toDoItem => { 
        toDoTab.appendChild(createToDoCard(toDoItem));
    });
}