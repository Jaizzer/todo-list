import { Project } from "./Project.js";
import { createProjectCard } from "./createProjectCard.js";
import { setCurrentlySelectedProject } from "./selectedProjectManager.js";

export function popUpProjectAdderForm() {

    // Create form container.
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    const form = document.createElement("form");
    form.className = "project-adder-form";
    form.innerHTML = `<input type="text" id="project-title" placeholder="Hello" required>
                      <input type="submit" value="Add Project">`;
    formContainer.appendChild(form)
    
    // Create cancel button.
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.addEventListener("click", () => {
        formContainer.parentElement.removeChild(formContainer);
    })
    form.appendChild(cancelButton);

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

        // Make the newly created project as the currently selected project.
        setCurrentlySelectedProject(project);

        // Remove form when done.
        formContainer.parentElement.removeChild(formContainer);
    });

    document.body.appendChild(formContainer);
}