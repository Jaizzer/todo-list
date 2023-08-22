import { Project } from "./Project.js";

/**
 * @returns A form element
 */
export function createProjectAdderForm() {
    const form = document.createElement("form");
    form.className = "project-adder-form";
    form.innerHTML = `<input type="text" id="project-title" placeholder="Hello">
                      <input type="submit" value="Add Project">`;

    // Add feature to form that creates the Project once submitted.
    form.addEventListener("submit", event => {

        // Prevent form submission.
        event.preventDefault();

        // Get project's title.
        const projectTitle = form.querySelector("#project-title").value;

        // Create a Project.
        new Project(projectTitle)

        // Remove form when done.
        form.parentElement.removeChild(form);
    });

    return form;
}