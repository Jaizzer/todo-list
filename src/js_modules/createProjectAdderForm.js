import { Project } from "./Project.js";
import { createProjectCard } from "./createProjectCard.js";

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
        const project = new Project(projectTitle);

        // Create a project card representation.
        const projectCard = createProjectCard(project)

        // Render new project to DOM by appending 
        document.querySelector(".projects-tab").appendChild(projectCard);

        // Remove form when done.
        form.parentElement.removeChild(form);
    });

    return form;
}