import { formatDate } from "./formatDate";

export function popUpToDoInfoCard(toDoCard) {
    // Create background container.
    const backgroundContainer = document.createElement("div");
    backgroundContainer.className = "to-do-info-background"

    // Create main container.
    const toDoInfoContainer = document.createElement("div");
    toDoInfoContainer.className = "to-do-info-container";

    // Create the close div
    const closeDiv = document.createElement("div");
    closeDiv.className = "close icon";
    closeDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                            <title>Close</title>
                            <path
                                d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" />
                          </svg>`;
    toDoInfoContainer.appendChild(closeDiv);

    // Helper function to create info-field div
    function createInfoField(label, value) {
        const infoField = document.createElement("div");
        infoField.className = "info-field";

        const infoLabel = document.createElement("div");
        infoLabel.className = "to-do-info-label";
        infoLabel.textContent = label + ":";
        infoField.appendChild(infoLabel);

        const infoValue = document.createElement("div");
        infoValue.className = "to-do-info-value";
        infoValue.textContent = value;
        infoField.appendChild(infoValue);

        return infoField;
    }

    // Create info field container.
    const infoFieldContainer = document.createElement("dic");
    infoFieldContainer.className = "info-field-container";
    toDoInfoContainer.appendChild(infoFieldContainer);

    // Create info-field divs for each field
    infoFieldContainer.appendChild(createInfoField("Title", toDoCard.toDoReference.title));
    infoFieldContainer.appendChild(createInfoField("Due Date", formatDate(toDoCard.toDoReference.dueDate)));
    infoFieldContainer.appendChild(createInfoField("Project", toDoCard.toDoReference.project.title));
    infoFieldContainer.appendChild(createInfoField("Description", toDoCard.toDoReference.description));
    infoFieldContainer.appendChild(createInfoField("Priority", toDoCard.toDoReference.priority));
    infoFieldContainer.appendChild(createInfoField("Notes", toDoCard.toDoReference.notes));

    // Append the main container to the background container
    backgroundContainer.appendChild(toDoInfoContainer);

    // Add event listener to the close div
    closeDiv.addEventListener("click", () => {
        document.body.removeChild(backgroundContainer);
    });

    // Append to body.
    document.body.appendChild(backgroundContainer);
}
