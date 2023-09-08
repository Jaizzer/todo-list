import { Project } from "./Project";
import { createToDoCard } from "./createToDoCard";
import { popUpToDoAdderForm } from "./popUpToDoAdderForm";
import { sortToDoItems } from "./sortToDoItems";
const compareWeek = require("compare-week");

export function renderToDoWindow(currentProject) {
    // Access current to do window.
    const currentToDoWindow = document.querySelector(".to-do-window");

    // Create a new to do window.
    const newToDoWindow = document.createElement("div");
    newToDoWindow.className = "to-do-window";

    // Create the current parent project card to the to-do window.
    const currentProjectNameCard = createCurrentProjectNameCard(currentProject);

    // Create the sorter.
    const sorter = createSorter(currentProject);

    // Create the to-do tab.
    const toDoTab = createToDoTab(currentProject);

    // Create the to-do adder button.
    const toDoAdderButton = createToDoAdderButton();

    // Append all created elements to the new to-do window.
    newToDoWindow.appendChild(currentProjectNameCard);
    newToDoWindow.appendChild(sorter);
    newToDoWindow.appendChild(toDoTab);
    
    // Only add the to-do adder button to non "Complete" projects.
    if (currentProject.id !== "completed-project" && currentProject.id !== "today-project") {
        newToDoWindow.appendChild(toDoAdderButton);
    }

    // Replace current to do window with new to do window.
    currentToDoWindow.parentElement.replaceChild(newToDoWindow, currentToDoWindow);
}


// Create a card containing the name of the current parent project.
function createCurrentProjectNameCard(currentProject) {
    const currentProjectNameCard = document.createElement("div");
    currentProjectNameCard.className = "parent-project-name"
    currentProjectNameCard.textContent = currentProject.title;

    return currentProjectNameCard;
}

function createSorter(currentProject) {

    // Create div to contain the sorter.
    const sorterContainer = document.createElement("div");
    sorterContainer.className = "sort-container"

    // Create a select element that will serve as a way to choose sorting criteria.
    const sorter = document.createElement("select");
    sorter.id = "sorter";
    sorterContainer.appendChild(sorter);

    // Create the label for the sorter.
    const label = document.createElement("label");
    label.setAttribute("for", sorter.id);
    label.textContent = "Sort by:";

    // Create the data values of options to be selected.
    const sortingOptions = [
        { value: "time-created-ascending", text: "Created (Oldest to Newest)" },
        { value: "time-created-descending", text: "Created (Newest to Oldest)" },
        { value: "date-ascending", text: "Date (ascending)" },
        { value: "date-descending", text: "Date (descending)" },
        { value: "name-ascending", text: "Name (ascending)" },
        { value: "name-descending", text: "Name (descending)" },
        { value: "priority-ascending", text: "Priority (Lowest to Highest)" },
        { value: "priority-descending", text: "Priority (Highest to Lowest)" }
    ]

    // Get currently selected option from current sorter.
    let currentSorter = document.querySelector("#sorter");
    
    // Selected option of the new sorter to be created.
    let newCurrentSortOption;
    
    // If this is the first sorter to be rendered, set the new sorter selected option to "Created (Oldest to Newest)".
    if (!currentSorter) {
        newCurrentSortOption = sortingOptions.find(sortingOption => sortingOption.text === "Created (Oldest to Newest)");
    }
    // If this is not the first sorter, set the new sorter selected option to the current sorter selected option.
    else {
        newCurrentSortOption = currentSorter.value;
    }

    sortingOptions.forEach(sortingOption => {
        // Create option element.
        const option = document.createElement("option");

        // Add option value.
        option.setAttribute("value", sortingOption.value);

        // Add option text-content.
        option.textContent = sortingOption.text;

        // Make the currently selected option of current sorter carry over to the new sorter.
        option.selected = sortingOption.value === newCurrentSortOption;

        // Append the option to sorter select element.
        sorter.appendChild(option);
    })

    // Re-render to-do tab so that to-do item's new sort critera will be refrected
    sorter.addEventListener("change", () => {
        const currentToDoTab = document.querySelector(".to-do-tab");
        currentToDoTab.parentElement.replaceChild(createToDoTab(currentProject), currentToDoTab);
    })

    return sorter;
}

function createToDoTab(currentProject) {

    // Create to-do tab.
    const toDoTab = document.createElement("div");
    toDoTab.className = "to-do-tab";

    // Array for storing all unsorted ToDo items.
    let unsortedToDoItems = [];

    // Render all ToDos across all projects if the project is "Home"
    if (currentProject === Project.home) {
        Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                unsortedToDoItems.push(toDoItem);
            }));
    }
    // Render all completed ToDos from different Projecrs if the currently selected project is "Completed"
    else if (currentProject.id === "completed-project" ) {
        Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                if (toDoItem.completed) {
                    unsortedToDoItems.push(toDoItem);
                }
            }));
    }
    // Render all Today ToDos from different Projecrs if the currently selected project is "Today"
    else if (currentProject.id === "today-project" ) {
        Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                // Get current date.
                const currentDate = new Date();

                // Format current date similar to the date structure of 'dueDate' property of ToDo object.
                const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
                if (toDoItem.dueDate === formattedCurrentDate) {
                    unsortedToDoItems.push(toDoItem);
                }
            }));
    }
    // Render all This Week ToDos from different Projecrs if the currently selected project is "This Week"
    else if (currentProject.id === "this-week-project" ) {
        Project.projects.forEach(project => project.toDoItems
            .forEach(toDoItem => {
                // Get current date.
                const currentDate = new Date();

                // Get due date.
                const [year, month, day] = toDoItem.dueDate.split("-");
                const dueDate = new Date(year, month - 1, day);

                // Check if due date of current to do is in current "this week".
                if (compareWeek(currentDate, dueDate)) {
                    unsortedToDoItems.push(toDoItem);
                }
            }));
    }
    // If current project is not "Home" and not "Completed", only render its respective ToDo items.
    else {
        currentProject.toDoItems.forEach(toDoItem => {
            unsortedToDoItems.push(toDoItem);
        });
    }

    // Sort.
    const sortedToDoItems = sortToDoItems(unsortedToDoItems);

    // Render all ToDo cards to ToDo tab.
    sortedToDoItems.forEach(toDoItem => {
        toDoTab.appendChild(createToDoCard(toDoItem));
    });

    return toDoTab;
}


function createToDoAdderButton() {

    // Create a button element
    const button = document.createElement("button");
    button.className = "to-do-adder";

    // Create an SVG element using innerHTML
    const svgHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
            <title>Add ToDo</title>
            <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>`;

    // Set the innerHTML of the button to include the SVG and caption
    button.innerHTML = svgHTML + '<div class="button-caption">New ToDo...</div>';

    // Add feature that pops the to do adder form when button is clicked.
    button.addEventListener("click", function () {
        popUpToDoAdderForm();
    });

    // Return the created button element
    return button;
}