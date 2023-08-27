/**
 * Clears all form control fields.
 *
 * @param {HTMLElement} form - The form element to be cleared.
 */
export function clearForm(form) {

    // Array of all possible form control elements.
    const formControls = ["input", "textarea", "select"];

    // Clear all form-control elements except the "input" of type "submit"
    formControls.forEach(formControl => {
        Array.from(form.querySelectorAll(`${formControl}:not([type="submit"])`))
        .forEach(element => element.value = "");
    });
}