// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form, textarea, and button elements
    const form = document.querySelector('form');
    const textarea = document.getElementById('tar');
    const button = document.getElementById('btn');

    // Load any saved data from localStorage
    textarea.value = localStorage.getItem('textareaValue') || '';

    // Add an event listener to the form to handle the submit event
    form.addEventListener('submit', function(event) {
        // Prevent the default form submit action
        event.preventDefault();
        
        // Save the textarea value to localStorage
        localStorage.setItem('textareaValue', textarea.value);
        
        // Optionally, show a message or do something else to indicate success
        alert('Text saved!');
    });
});
