var selectedDefect = "";
var selectedLine = "";
var selectedDepartment = "";

function handleButtonClick(button, value, type) {
  if (type === "defect") {
    selectedDefect = selectedDefect === value ? "" : value;
    // Check if "Vehicle NG" is selected, and show/hide line and department buttons accordingly
    if (selectedDefect === "Vehicle NG") {
      document.getElementById("lineDepartmentButtons").style.display = "block";
    } else {
      document.getElementById("lineDepartmentButtons").style.display = "none";
    }
  } else if (type === "linenumber") {
    selectedLine = selectedLine === value ? "" : value;
  } else if (type === "department") {
    selectedDepartment = selectedDepartment === value ? "" : value;
  }

  updateResults();
  updateButtonStyles(type);
  moveSelectedButton(button, value, type);
}

// Rest of your JavaScript code...
