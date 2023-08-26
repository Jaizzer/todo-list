import { createProjectEditorForm } from "./createProjectEditorForm.js";
import { renderToDoItems } from "./renderToDoItems.js";
import { setCurrentlySelectedProject } from "./selectedProjectManager.js";
import { Project } from "./Project.js";
 
export function createProjectCard(project) {

    // Create a card for "Project".
    const projectCard = document.createElement("div");
    projectCard.className = "project-card"
    projectCard.id = project.projectId;

    // Add referece to the project object.
    projectCard.projectReference = project;

    // Put project title inside the project card.
    const projectTitle = document.createElement("div");
    projectTitle.className = "project-name"
    projectTitle.textContent = `${project.projectTitle}`;
    projectCard.appendChild(projectTitle);

    // Only add feature buttons to "non-Home" projects.
    if (project.projectId !== "home-project") {
        addDeleteButton(projectCard);
        addEditButton(projectCard);
    }

    // Set the currently selected project the project corresponding to project card.
    projectCard.addEventListener("click", () => {
        setCurrentlySelectedProject(project);
        renderToDoItems(project);
    })

    return projectCard;
}


function addDeleteButton(projectCard) {

    // Create delete button.
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";

    // Create the delete svg icon.
    deleteButton.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Delete</title>
                                <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,
                                8H11V17H9V8M13,8H15V17H13V8Z"/>
                            </svg>`;

    // Add delete functionality to delete button.
    deleteButton.addEventListener("click", (event) => {

        event.stopPropagation();
        
        // Delete Project (back-end)
        projectCard.projectReference.delete();

        // Clear "To-Do" tabs.
        document.querySelector(".to-do-tab").innerHTML = "";

        // Make "Home" project the currently selected project when current project is deleted.
        setCurrentlySelectedProject(Project.projects.find(project => project.projectId === "home-project"));
        
        // Delete Project (front-end)
        projectCard.parentNode.removeChild(projectCard);

    })

    projectCard.appendChild(deleteButton);
}


function addEditButton(projectCard) {

    // Create Edit button.
    const editButton = document.createElement("button");
    editButton.className = "edit";

    // Create Edit Icon.
    editButton.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Edit</title>
                                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,
                                2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                            </svg>`;
                            
    // Add edit functionality to edit button by popping the "project editor form".
    editButton.addEventListener("click", () => {
        document.body.appendChild(createProjectEditorForm(projectCard));
    });
    projectCard.appendChild(editButton);
}