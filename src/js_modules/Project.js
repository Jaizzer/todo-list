import {parse, stringify} from 'flatted';
import { ToDo } from  "./ToDo.js";
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

    // Storage of all "Project" instances.
    static projects = [];

    // Home project.
    static home;

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
                        project.toDoItems.map(toDoItem => {
                            // Reconstruct to-do items without "project" property since parent project is being currently instantiated in this point.
                            const { project, ...nonProjectProperties } = toDoItem;
                            return new ToDo(...Object.values(nonProjectProperties), null);
                        }), 
                        project.projectId)
                });
            
            // Now assign the "project" property of ToDo objects to the parent projects since parent projects are now created at this point.
            Project.projects.forEach(project => {
                project.toDoItems.forEach(toDoItem => toDoItem.project = project);
            });
        }
        // If there is no projects to be load, create default "Home" project.
        else {
            new Project("Home", null, "home-project");
        }

        // Put home project to static variable.
        Project.home = Project.projects.find(project => project.projectId === "home-project");
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

        // Insert new Project object inside "projects" array.
        Project.projects.push(this);

        // Save serialized changes to local storage.
        this.#saveChanges();
    }

     // Delete project from the "Project.projects" array.
     delete() {
        Project.projects.splice(Project.projects.indexOf(this), 1);

        // Save serialized changes to local storage.
        this.#saveChanges();
    }

    // Edit project title.
    setProjectTitle(newTitle) {
        this.projectTitle = newTitle;

        // Save serialized changes to local storage.
        this.#saveChanges();
    }

    // Add a ToDo Item inside the project.
    addToDo(ToDo) {

        // Set the project reference property of the ToDo item to 'this' current project instance.
        ToDo.project = this;

        // Add the to do item to 'this' projects array of to do items.
        this.toDoItems.push(ToDo);

        // Save serialized changes to local storage.
        this.#saveChanges();
    }

    // Delete a ToDo Item inside the project's "toDoItems" array.
    deleteToDo(ToDo) {
        this.toDoItems.splice(this.toDoItems.indexOf(ToDo), 1);

        // Save serialized changes to local storage.
        this.#saveChanges();
    }

    // Replace ToDo items inside the project's "toDoItems" array.
    replaceToDo(newToDo, oldToDo) {

        // Set new ToDo item's project reference to this project.
        newToDo.project = this;

        // Replace ToDo item with the new ToDo item.
        this.toDoItems[this.toDoItems.indexOf(oldToDo)] = newToDo;
        
        // Save serialized changes to local storage.
        this.#saveChanges();
    }

    #saveChanges() {
        // Save serialized changes to local storage.
        localStorage.setItem("Project.projects", stringify(Project.projects));
    }
}
