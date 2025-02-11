document.addEventListener("DOMContentLoaded", () => {
    const formElements = document.getElementById("form-elements");
    const saveButton = document.getElementById("save-btn");
    const sidebarButtons = document.querySelectorAll(".add-btn");

    let formData = JSON.parse(localStorage.getItem("formData")) || [
      {
        id: "c0ac49c5-871e-4c72-a878-251de465e6b4",
        type: "input",
        label: "Sample Input",
        placeholder: "Sample placeholder",
      },
      {
        id: "146e69c2-1630-4a27-9d0b-f09e463a66e4",
        type: "select",
        label: "Sample Select",
        options: ["Sample Option", "Sample Option", "Sample Option"],
      },
      {
        id: "45002ecf-85cf-4852-bc46-529f94a758f5",
        type: "textarea",
        label: "Sample Textarea",
        placeholder: "Sample Placeholder",
      },
      {
        id: "680cff8d-c7f9-40be-8767-e3d6ba420952",
        type: "checkbox",
        label: "Sample Checkbox",
      },
    ];

    function renderForm() {
      formElements.innerHTML = "";
      formData.forEach((item) => createFormField(item));
      addDragAndDrop();
    }

    function createFormField(item) {
      const div = document.createElement("div");
      div.classList.add("form-group");
      div.setAttribute("draggable", true);
      div.dataset.id = item.id;

      const label = document.createElement("label");
      label.textContent = item.label;

      let inputElement;
      if (item.type === "input") {
        inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.placeholder = item.placeholder;
      } else if (item.type === "select") {
        inputElement = document.createElement("select");
        item.options.forEach((optionText) => {
          const option = document.createElement("option");
          option.textContent = optionText;
          inputElement.appendChild(option);
        });
      } else if (item.type === "textarea") {
        inputElement = document.createElement("textarea");
        inputElement.placeholder = item.placeholder;
      } else if (item.type === "checkbox") {
        inputElement = document.createElement("checkbox");
        inputElement.type = "checkbox";
      }
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "🗑️";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", function () {
        formData = formData.filter((el) => el.id !== item.id);
        localStorage.setItem("formData", JSON.stringify(formData));
        renderForm();
      });

      div.appendChild(label);
      div.appendChild(inputElement);
      div.appendChild(deleteBtn);
      formElements.appendChild(div);
    }

    function addDragAndDrop() {
      let draggedItem = null;

      document.querySelectorAll(".form-group").forEach((item) => {
        item.addEventListener("dragstart", () => {
          draggedItem = item;
          setTimeout(() => (item.style.display = "none"), 0);
        });

        item.addEventListener("dragend", () => {
          setTimeout(() => {
            draggedItem.style.display = "flex";
            draggedItem = null;
            updateOrder();
          }, 0);
        });

        item.addEventListener("dragover", (e) => e.preventDefault());

        item.addEventListener("dragenter", function () {
          this.style.border = "2px dashed #000";
        });

        item.addEventListener("dragleave", function () {
          this.style.border = "1px solid #ddd";
        });

        item.addEventListener("drop", function () {
          this.style.border = "1px solid #ddd";
          formElements.insertBefore(draggedItem, this);
        });
      });
    }

    function updateOrder() {
      const newOrder = [];
      document.querySelectorAll(".form-group").forEach((div) => {
        const id = div.dataset.id;
        const item = formData.find((el) => el.id === id);
        if (item) newOrder.push(item);
      });
      formData = newOrder;
    }

    saveButton.addEventListener("click", () => {
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log(
        "Form data saved to localStorage:",
        JSON.stringify(formData, null, 2)
      );
    });
    sidebarButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const type = button.getAttribute("data-type");
        let newElement = {
          id: crypto.randomUUID(),
          type: type,
          label: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
        };

        if (type === "input" || type === "textarea") {
          newElement.placeholder = `Enter ${type}...`;
        } else if (type === "select") {
          newElement.options = ["Option 1", "Option 2", "Option 3"];
        }

        formData.push(newElement);
        renderForm();
      });
    });

    renderForm();
  });