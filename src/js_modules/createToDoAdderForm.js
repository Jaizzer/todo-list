import { createToDoCard } from "./createToDoCard.js";
import { getCurrentlySelectedProject } from "./selectedProjectManager.js";
import { sortBy } from "./sortBy.js";
import { ToDo } from "./ToDo.js"

export function createToDoAdderForm() {

    // Create form container.
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    const toDoAdderForm = document.createElement("form");
    toDoAdderForm.className = "to-do-adder-form";
    formContainer.appendChild(toDoAdderForm);

    // Create title input.
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.required = true;
    toDoAdderForm.appendChild(createFieldDiv("Title:", titleInput));

    // Create description area.
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.id = "description";
    descriptionTextarea.name = "description";
    descriptionTextarea.rows = 4;
    descriptionTextarea.cols = 50;
    descriptionTextarea.required = true;
    toDoAdderForm.appendChild(createFieldDiv("Description:", descriptionTextarea));

    // Create due date input.
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    dueDateInput.name = "dueDate";
    dueDateInput.required = true;
    toDoAdderForm.appendChild(createFieldDiv("Due Date:", dueDateInput));

    // Create ToDo priority selection.
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.name = "priority";

    const priorityOptions = ["High", "Medium", "Low"];
    priorityOptions.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        prioritySelect.appendChild(option);
    });
    toDoAdderForm.appendChild(createFieldDiv("Priority:", prioritySelect));

    // Create Note input.
    const notesTextarea = document.createElement("textarea");
    notesTextarea.id = "notes";
    notesTextarea.name = "notes";
    notesTextarea.rows = 4;
    notesTextarea.cols = 50;
    toDoAdderForm.appendChild(createFieldDiv("Notes:", notesTextarea));

    // Create submit button.
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.id = "submit-form";
    submitButton.value = "Create ToDo";
    toDoAdderForm.appendChild(submitButton);

    // Create cancel button.
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.addEventListener("click", () => {
        formContainer.parentElement.removeChild(formContainer);
    })
    toDoAdderForm.appendChild(cancelButton);


    // Add feature to form that when submitted, a ToDo object is created.
    toDoAdderForm.addEventListener("submit", event => {

        event.preventDefault()

        const toDoTitle = document.querySelector("#title").value;
        const toDoDescription = document.querySelector("#description").value;
        const toDoDueDate = document.querySelector("#due-date").value;
        const toDoPriority = document.querySelector("#priority").value;
        const toDoNotes = document.querySelector("#notes").value;

        const toDoItem = new ToDo(...[toDoTitle, toDoDescription, toDoDueDate, toDoPriority, toDoNotes])
        getCurrentlySelectedProject().addToDo(toDoItem);

        // Render To-Do item in 'to-do' tab immediately once created.
        document.querySelector(".to-do-tab").appendChild(createToDoCard(toDoItem));

        // Arrange to-do cards in to-do-tab base on selected sorting criteria.
        sortBy(document.querySelector("#sorter").value);

        formContainer.parentElement.removeChild(formContainer);
    });

    return formContainer;
}


// Returns a div containing a labeled input.
function createFieldDiv(labelText, inputElement) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = labelText;
    label.appendChild(inputElement);
    div.appendChild(label);
    return div;
}