import { renderToDoItems } from "./renderToDoItems";
import { getCurrentlySelectedProject } from "./selectedProjectManager";

export function sortBy(sortCriteria) {

    // Access to-do container.
    const toDoTab = document.querySelector(".to-do-tab");

    // Get items to be sorted.
    const itemsToBeSorted = Array.from(document.querySelector(".to-do-tab").childNodes);

    // Sorted items.
    let sortedItems;

    // Sort by due date.
    if (sortCriteria === "date") {
        sortedItems = itemsToBeSorted.sort((ToDoCard1, ToDoCard2) => {

            const ToDo1Date = new Date(ToDoCard1.toDoReference.dueDate);
            const ToDo2Date = new Date(ToDoCard2.toDoReference.dueDate);
            return ToDo1Date - ToDo2Date;
        })

        // Clear previous to-do container contents.
        toDoTab.innerHTML = "";

        // Put the sorted to-do cards.
        sortedItems.forEach(item => {
            toDoTab.appendChild(item);
        })
    }
    // Sort by name.
    else if (sortCriteria === "name") {
        sortedItems = itemsToBeSorted.sort((ToDoCard1, ToDoCard2) => {
            return ToDoCard1.toDoReference.title.localeCompare(ToDoCard2.toDoReference.title);
        })

        // Clear previous to-do container contents.
        toDoTab.innerHTML = "";

        // Put the sorted to-do cards.
        sortedItems.forEach(item => {
            toDoTab.appendChild(item);
        })
    }
    // Don't sort if 'default'.
    else if (sortCriteria === "default") {
        renderToDoItems(getCurrentlySelectedProject());
    }
}