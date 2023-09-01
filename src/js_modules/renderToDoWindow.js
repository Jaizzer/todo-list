

export function renderToDoWindow(project) {
    const toDoWindow = document.querySelector(".to-do-window");

    // Create the current parent project card to the to-do window.
    const parentProjectNameCard = createParentProjectNameCard(project);

    // Create the sorter.
    const sorter = createSorter();
}


// Create a card containing the name of the current parent project.
function createParentProjectNameCard(project) {
    const parentProjectNameCard = document.createElement("div");
    parentProjectNameCard.textContent = project.projectTitle;
    
    return parentProjectNameCard;
}

function createSorter() {
    
    // Create div to contain the sorter.
    const sorterContainer = document.querySelector("div");
    sorterContainer.className = "sorter-container"

    // Create a select element that will serve as a way to choose sorting criteria.
    const sorter = document.createElement("select");
    sorter.id = "#sorter";
    sorterContainer.appendChild(sorter);

    // Create the label for the sorter.
    const label = document.querySelector("label");
    label.setAttribute("for", sorter.id);
    label.textContent = "Sort by:";

    // Create the data values of options to be selected.
    const sortingOptions = [
        { value: "time-created-ascending", text: "Created (Oldest to Newest)", selected: true },
        { value: "time-created-descending", text: "Created (Newest to Oldest)" },
        { value: "date-ascending", text: "Date (ascending)" },
        { value: "date-descending", text: "Date (descending)" },
        { value: "name-ascending", text: "Name (ascending)" },
        { value: "name-descending", text: "Name (descending)" }
    ]

    sortingOptions.forEach(sortingOption => {
        // Create option element.
        const option = document.createElement("option");

        // Add option value.
        option.setAttribute("value", sortingOption.value);

        // Add option text-content.
        option.textContent = sortingOption.text;

        // Condition to set the default selected option.
        if (optionData.selected) {
            option.setAttribute("selected", "selected");
        }

        // Append the option to sorter select element.
        sorter.appendChild(option);
    })

    return sorter;
}