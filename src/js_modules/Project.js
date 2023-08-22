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

    // Storage of all "Project" instances with "Home" as the default project.
    static projects = [new Project("Home", null, "home-project")];

    // Load saved "Project.projects" from the local storage.
    static loadProjects() {
        // Load serialized saved projects.
        const serializedSavedProject = localStorage.getItem("Project.projects");
        if (serializedSavedProject) {

            // Convert serialized saved projects back to original Project object structure.
            Project.projects = parse(serializedSavedProject)
                .map(project => {
                    return new Project(
                        project.projectTitle, 
                        project.toDoItems.map(toDoItem => new ToDo(...Object.values(toDoItem))), 
                        project.projectId)
                });
        }
    }

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

        // Push each "Project" instances to "static projects" array except for the "Home" since it is already in the array by default.
        if (this.projectId !== "home-project") {

            Project.projects.push(this);

            // Save serialized changes to local storage.
            localStorage.setItem("Project.projects", stringify(Project.projects));
        }
    }

     // Delete project from the "Project.projects" array.
     delete() {
        Project.projects.splice(Project.projects.indexOf(this), 1);

        // Save serialized changes to local storage.
        localStorage.setItem("Project.projects", stringify(Project.projects));
    }

    // Add a ToDo Item inside the project.
    addToDo(ToDo) {

        // Set the project reference property of the ToDo item to 'this' current project instance.
        ToDo.project = this;

        // Add the to do item to 'this' projects array of to do items.
        this.toDoItems.push(ToDo);

        // Save serialized changes to local storage.
        localStorage.setItem("Project.projects", stringify(Project.projects));
    }

    // Delete a ToDo Item inside the project's "toDoItems" array.
    deleteToDo(ToDo) {
        this.toDoItems.splice(this.toDoItems.indexOf(ToDo), 1);

        // Save serialized changes to local storage.
        localStorage.setItem("Project.projects", stringify(Project.projects));
    }
}
