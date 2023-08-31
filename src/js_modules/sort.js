export function sort(unsortedToDoItems) {

    // Sorted items.
    let sortedToDoItems;

    // Get the sort critera.
    const sortCriteria = document.querySelector("#sorter").value;
    
    // Sort by due date.
    if (sortCriteria === "date-ascending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            const ToDo1Date = new Date(ToDo1.dueDate);
            const ToDo2Date = new Date(ToDo2.dueDate);
            return ToDo1Date - ToDo2Date;
        });
    }
    // Sort by due date date
    else if (sortCriteria === "date-descending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {

            const ToDo1Date = new Date(ToDo1.dueDate);
            const ToDo2Date = new Date(ToDo2.dueDate);
            return ToDo2Date - ToDo1Date;
        });
    }
    // Sort by name ascendingly.
    else if (sortCriteria === "name-ascending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            return ToDo1.title.localeCompare(ToDo2.title);
        });
    }
    // Sort by name descendingly.
    else if (sortCriteria === "name-descending") {
        sortedToDoItems = unsortedToDoItems.sort((ToDo1, ToDo2) => {
            return ToDo2.title.localeCompare(ToDo1.title);
        });
    }
    //Sort by time of creation (oldest to newest)
    else if (sortCriteria === "time-created-ascending") {
        sortedToDoItems = unsortedToDoItems;
    }
    //Sort by time of creation (newest to oldest.)
    else if (sortCriteria === "time-created-descending") {
        sortedToDoItems = unsortedToDoItems.reverse();
    }
    

    return sortedToDoItems;
}