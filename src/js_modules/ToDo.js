/**
 * @class
 * @classdesc Represents a to-do item with various details.
 * @param {string} title - The title or name of the to-do item.
 * @param {string} description - A detailed description of the to-do item.
 * @param {Date} dueDate - The due date for completing the to-do item.
 * @param {string} priority - The priority level of the to-do item (e.g., "High", "Medium", "Low").
 * @param {string} notes - Additional notes or comments related to the to-do item.
 * @param {string} project - The project or category to which the to-do item belongs.
 *
 * @example
 * // Create a new ToDo instance
 * const todo = new ToDo(
 *     'Buy groceries',
 *     'Pick up vegetables, fruits, and bread.',
 *     new Date('2023-08-20'),
 *     'Medium',
 *     'Don\'t forget the milk!',
 *     'Personal'
 * );
 */
export class ToDo {
    constructor(title, description, dueDate, priority, notes, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.project = project;
    }
}