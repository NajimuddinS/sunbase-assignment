# Form Builder Project
A simple web-based form builder that allows users to dynamically add, arrange, and delete form fields. This project supports various form field types, including text inputs, selects, textareas, and checkboxes, and features drag-and-drop functionality for easy arrangement.

## Features
Drag and Drop: Rearrange form fields easily with a drag-and-drop interface.
Dynamic Field Addition: Add text inputs, selects, textareas, and checkboxes to the form.
Save Functionality: Collect all form data and log it to the console for further processing.
Delete Fields: Remove unwanted form fields by clicking the delete button next to each field.
Responsive UI: The UI is designed to be user-friendly and responsive for different screen sizes.
## Tech Stack
HTML: Structure of the web page and form elements.
CSS: Styling the form builder interface and form fields.
JavaScript: Interactivity, dynamic field addition, drag-and-drop functionality, and form saving.
## Project Setup
Clone the repository:
```
git clone https://github.com/NajimuddinS/sunbase-assignment/
cd sunbase-assignment
```
Open the project in a browser:
You can open the index.html file directly in your browser.
Alternatively, you can set up a local server using a simple HTTP server (like http-server for Node.js or Python's built-in HTTP server) to view the project.
Deployment
This project is deployed on Vercel, which makes it easy to deploy front-end applications like this one.

Live Demo
You can view the live demo of the form builder at:
https://sunbase-assign.netlify.app/

Usage
Adding Fields: Click on the buttons on the left sidebar (e.g., "Sample Input", "Sample Select", "Sample Textarea", "Sample Checkbox") to add the corresponding form fields to the main form area.
Rearranging Fields: Click and hold any form field to drag it to a different position in the form.
Deleting Fields: Click the Delete button next to any field to remove it from the form.
Saving Form Data: Once you've arranged the fields as you like, click the Save button to log the form data in the console, which includes the field type, label, and options (if applicable).
Form Field Types
The following types of fields are available:

Text Input: Standard text input field.
Select: Dropdown list with predefined options.
Textarea: Multi-line text input.
Checkbox: Single checkbox for a yes/no option.
## Project Structure
```bash
sunbase-assignment/
├── index.html        # Main HTML file containing the structure of the page
├── style.css         # Styling for the form builder and form fields
├── script.js          # JavaScript for adding, deleting, and managing form fields
└── README.md         # This README file
```
index.html
The HTML file contains the layout and structure for the form builder interface. It includes buttons for adding form fields, a main container to display the form, and an area for dragging and dropping fields.

index.css
The CSS file contains all the styles for the form builder interface. It is responsible for the layout of the sidebar, form fields, and buttons, along with hover and active states for interactive elements.

index.js
The JavaScript file handles the interactivity of the form builder, including the drag-and-drop functionality, field addition, field deletion, and saving the form data. It also defines the fields available to the user (e.g., input, select, textarea, checkbox).

## Example Output
Once you've added fields to the form and clicked the Save button, the following data will be logged to the console:
```
[
    {
        "id": "c0ac49c5-871e-4c72-a878-251de465e6b4",
        "type": "input",
        "label": "Sample Input",
        "placeholder": "Sample placeholder"
    },
    {
        "id": "146e69c2-1630-4a27-9d0b-f09e463a66e4",
        "type": "select",
        "label": "Sample Select",
        "options": ["Sample Option 1", "Sample Option 2", "Sample Option 3"]
    },
    {
        "id": "45002ecf-85cf-4852-bc46-529f94a758f5",
        "type": "textarea",
        "label": "Sample Textarea",
        "placeholder": "Sample Placeholder"
    },
    {
        "id": "680cff8d-c7f9-40be-8767-e3d6ba420952",
        "type": "checkbox",
        "label": "Sample Checkbox"
    }
]
```

## Acknowledgements
Inspiration for the drag-and-drop functionality comes from various drag-and-drop libraries and tutorials available online.
Thanks to MDN Web Docs for providing resources on JavaScript event handling and DOM manipulation.
