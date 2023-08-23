export function createToDoAdderForm() {

    const toDoAdderForm = document.createElement("form");
    toDoAdderForm.className = "to-do-adder-form";

    // Create title input.
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.required = true;

    return toDoAdderForm;
}