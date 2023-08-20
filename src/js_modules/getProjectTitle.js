/**
 * Retrieves the title of a project from a given form.
 *
 * @param {HTMLFormElement} form - The form element containing project information.
 * @return {string} The title of the project.
 */
export function getProjectTitle(form) {
    const projectTitle = form.querySelector("#project-title").value;
    return projectTitle;
}