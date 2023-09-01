

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
    sorter.id = "sorter";
    sorterContainer.appendChild(sorter);

    // Create the label for the sorter.
    const label = document.querySelector("label");
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
    let currentSortOption = document.querySelector("#sorter").value;

    // If this is the first sorter to be rendered, set the currently selected option to "Created (Oldest to Newest)".
    if (!currentSortOption) {
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
        if (sortingOption.value === currentSortOption.value) {
            option.setAttribute("selected", "true");
        }
        else {
            option.setAttribute("selected", "false");
        }

        // Append the option to sorter select element.
        sorter.appendChild(option);
    })

    return sorter;
}