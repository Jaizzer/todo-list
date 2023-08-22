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

    return projectCard;
}