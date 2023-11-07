
var marks = document.getElementById("marks");
var internalMarks = document.getElementById("internalMarks");
var attendance = document.getElementById("attendance");
var heading  = document.getElementById("heading");
var defaultText = document.getElementById("default")
var viewSection = document.getElementById("view");
function getMarks(button) {
defaultText.classList.add("hidden");
semValue = button.value;
   
marks.classList.remove("hidden");
internalMarks.classList.add("hidden");
attendance.classList.add("hidden")

heading.innerHTML = `Marks ${semValue}`;

heading.classList.remove("hidden");
viewSection.classList.remove("hidden");
}

function getAttendance(button) {
    defaultText.classList.add("hidden");
    semValue = button.value;
    marks.classList.add("hidden");
    internalMarks.classList.add("hidden");
    attendance.classList.remove("hidden");
    
    heading.innerHTML = `Attendance ${semValue}`;
    
    heading.classList.remove("hidden");
    }

function getInternals(button) {
    defaultText.classList.add("hidden");
    semValue = button.value;
       
    marks.classList.add("hidden");
    internalMarks.classList.remove("hidden");
    attendance.classList.add("hidden");
    
    heading.innerHTML = `Internals ${semValue}`;
    
    heading.classList.remove("hidden");
}



function getMoreMarks() 
{
    var viewSubtext = document.getElementById("viewSubtext");
    viewSubtext.classList.remove("hidden");
    var viewButton = document.getElementById("viewButton");
    viewButton.classList.add("hidden");
}