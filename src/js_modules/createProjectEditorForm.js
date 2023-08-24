/**
 * @returns A form element
 */
export function createProjectEditorForm(projectCard) {

    // Create project editor form.
    const projectEditorForm = document.createElement("form");
    projectEditorForm.className = "project-editor-form";

    // Create the  new-project-title input field.
    const newProjectTitleInput = document.createElement("input");
    newProjectTitleInput.type = "text";
    newProjectTitleInput.id = "project-title";
    newProjectTitleInput.value = projectCard.projectReference.projectTitle;
    projectEditorForm.appendChild(newProjectTitleInput);

    // Create submit button.
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Done";
    projectEditorForm.appendChild(submitButton);

    // Create cancel button.
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.addEventListener("click", () => {
        projectEditorForm.parentElement.removeChild(projectEditorForm);
    })
    projectEditorForm.appendChild(cancelButton);

    // Add feature to project editor form that modifies the project title when submitted.
    projectEditorForm.addEventListener("submit", event => {

        event.preventDefault();

        // Modify project title in back-end.
        projectCard.projectReference.setProjectTitle(newProjectTitleInput.value);

        // Modify project title in front-end.
        projectCard.querySelector(".project-name").textContent = newProjectTitleInput.value;

        // Remove form from the DOM when submitted.
        projectEditorForm.parentElement.removeChild(projectEditorForm);
    });

    return projectEditorForm;
}