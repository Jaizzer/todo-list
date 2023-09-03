/**
 * Sorts an array of to-do items based on the selected sorting criteria.
 *
 * @param {Array} unsortedToDoItems - An array of to-do items to be sorted.
 * @returns {Array}  An array of sorted to-do items.
 */
export function sort(unsortedToDoItems) {
    // Array to hold sorted items.
    let sortedToDoItems;

    // Get the current sorter.
    const currentSorter = document.querySelector("#sorter");

    // If there is no current sorter set the sort criteria to 'date-created-descending' by default.
    const sortCriteria = (currentSorter === null) ? "time-created-ascending" : currentSorter.value;

    // Sort by due date in ascending order.
    if (sortCriteria === "date-ascending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            const ToDo1Date = new Date(ToDo1.dueDate);
            const ToDo2Date = new Date(ToDo2.dueDate);
            return ToDo1Date - ToDo2Date;
        });
    }
    // Sort by due date in descending order.
    else if (sortCriteria === "date-descending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            const ToDo1Date = new Date(ToDo1.dueDate);
            const ToDo2Date = new Date(ToDo2.dueDate);
            return ToDo2Date - ToDo1Date;
        });
    }
    // Sort by name in ascending order.
    else if (sortCriteria === "name-ascending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            return ToDo1.title.localeCompare(ToDo2.title);
        });
    }
    // Sort by name in descending order.
    else if (sortCriteria === "name-descending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            return ToDo2.title.localeCompare(ToDo1.title);
        });
    }
    // Sort by time of creation (oldest to newest).
    else if (sortCriteria === "time-created-ascending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            const ToDo1Date = new Date(ToDo1.dateAndTimeCreated);
            const ToDo2Date = new Date(ToDo2.dateAndTimeCreated);
            return ToDo1Date - ToDo2Date;
        });
    }
    // Sort by time of creation (newest to oldest).
    else if (sortCriteria === "time-created-descending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            const ToDo1Date = new Date(ToDo1.dateAndTimeCreated);
            const ToDo2Date = new Date(ToDo2.dateAndTimeCreated);
            return ToDo2Date - ToDo1Date;
        });
    }

    // Return the array of sorted to-do items.
    return sortedToDoItems;
}