import { Project } from "./Project";
import { createToDoCard } from "./createToDoCard";
import { popUpToDoAdderForm } from "./popUpToDoAdderForm";
import { sort } from "./sort";

export function renderToDoWindow(currentProject) {
    const toDoWindow = document.querySelector(".to-do-window");

    // Clear previous to-do window contents.
    toDoWindow.innerHTML = "";

    // Create the current parent project card to the to-do window.
    const currentProjectNameCard = createCurrentProjectNameCard(currentProject);

    // Create the sorter.
    const sorter = createSorter();

    // Create the to-do tab.
    const toDoTab = createToDoTab();

    // Create the to-do adder button.
    const toDoAdderButton = createToDoAdderButton();

    // Append all created elements to to-do window.
    toDoWindow.appendChild(currentProjectNameCard);
    toDoWindow.appendChild(sorter);
    toDoWindow.appendChild(toDoTab);
    toDoWindow.appendChild(toDoAdderButton);
}


// Create a card containing the name of the current parent project.
function createCurrentProjectNameCard(currentProject) {
    const currentProjectNameCard = document.createElement("div");
    currentProjectNameCard.textContent = currentProject.projectTitle;

    return currentProjectNameCard;
}

function createSorter(currentProject) {

    // Create div to contain the sorter.
    const sorterContainer = document.createElement("div");
    sorterContainer.className = "sorter-container"

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
        { value: "name-descending", text: "Name (descending)" }
    ]

    // Get currently selected option from current sorter.
    let currentSorter = document.querySelector("#sorter");
    
    // Declare variable to store current sort option.
    let currentSortOption;

    // If this is the first sorter to be rendered, set the currently selected option to "Created (Oldest to Newest)".
    if (!currentSorter) {
        currentSortOption = sortingOptions.find(sortingOption => sortingOption.text === "Created (Oldest to Newest)");
    }

    sortingOptions.forEach(sortingOption => {
        // Create option element.
        const option = document.createElement("option");

        // Add option value.
        option.setAttribute("value", sortingOption.value);

        // Add option text-content.
        option.textContent = sortingOption.text;

        // Make the currently selected option of current sorter carry over to the new sorter.
        option.selected = sortingOption.value === currentSortOption;

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