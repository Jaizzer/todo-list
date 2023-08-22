const generateUniqueId = require("generate-unique-id");

/**
 * Represents a project item.
 *
 * @class
 * @param {string} projectTitle - The title of the project. 
 * @param {Array} toDoItems - Array containing ToDo objects.
 * @param {string} projectId - ID for the proejct.
 */
export class Project {

    // Project Constructor.
    constructor(projectTitle, toDoItems = null, projectId = null) {

        // Set the project title.
        this.projectTitle = projectTitle;

        // Set the "toDoItems" array.
        if (toDoItems !== null) {
            this.toDoItems = toDoItems;
        }
        // Set the "toDoItems" to blank array if none is provided during instantiation.
        else {
            this.toDoItems = [];
        }

        // Set project's ID to given project ID during project instantiation.
        if (projectId !== null) {
            this.projectId = projectId;
        }
        // Add a generated 15-character ID to project if nothing was provided during Project's instantiation.
        else {
            this.projectId = generateUniqueId({ length: 15, useNumbers: true, useLetters: true });
        }
    }
}
