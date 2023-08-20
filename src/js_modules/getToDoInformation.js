/**
 * Retrieves information from a given form to create a to-do item.
 *
 * @param {HTMLFormElement} form - The form element containing to-do information.
 * @return {Array} An array containing the to-do item's information in the following order:
 * 
 *   0. {string} toDoTitle - The title of the to-do item.
 *   1. {string} toDoDescription - The description of the to-do item.
 *   2. {string} toDoDueDate - The due date of the to-do item.
 *   3. {string} toDoPriority - The priority of the to-do item.
 *   4. {string} toDoNotes - Additional notes for the to-do item.
 *   5. {string} toDoProject - The project associated with the to-do item.
 *
 * Example return value:
 * ```javascript
 * [
 *    "Complete Project",
 *    "Finish coding tasks",
 *    "2023-08-31",
 *    "High",
 *    "Use best practices",
 *    "Web Development"
 * ]
 * ```
 **/
export function getToDoInformation(form) {

    const toDoTitle = form.querySelector("#title").value;
    const toDoDescription = form.querySelector("#description").value;
    const toDoDueDate = form.querySelector("#due-date").value;
    const toDoPriority = form.querySelector("#priority").value;
    const toDoNotes = form.querySelector("#notes").value;
    const toDoProject = form.querySelector("#project").value;

    return [toDoTitle, toDoDescription, toDoDueDate, toDoPriority, toDoNotes, toDoProject];
}