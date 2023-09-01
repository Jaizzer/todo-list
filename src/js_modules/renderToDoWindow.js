

export function renderToDoWindow(project) {
    const toDoWindow = document.querySelector(".to-do-window");

    // Add the current parent project card to the to-do window.
    toDoWindow.appendChild(createParentProjectNameCard(project));
}


// Create a card containing the name of the current parent project.
function createParentProjectNameCard(project) {
    const parentProjectNameCard = document.createElement("div");
    parentProjectNameCard.textContent = project.projectTitle;
    
    return parentProjectNameCard;
}