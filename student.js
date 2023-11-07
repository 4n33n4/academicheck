
var marks = document.getElementById("marks");
var internalMarks = document.getElementById("internalMarks");
var attendance = document.getElementById("attendance");
var heading  = document.getElementById("heading");
var defaultText = document.getElementById("default")
var viewSection = document.getElementById("view");


var subject1 = document.querySelector("#subject1");
var subject2 = document.querySelector("#subject2");
var subject3 = document.querySelector("#subject3");
var subject4 = document.querySelector("#subject4");
var subject5 = document.querySelector("#subject5");

var subjectInt1 = document.querySelector("#subjectInt1");
var subjectInt2 = document.querySelector("#subjectInt2");
var subjectInt3 = document.querySelector("#subjectInt3");
var subjectInt4 = document.querySelector("#subjectInt4");
var subjectInt5 = document.querySelector("#subjectInt5");

function getMarks(button) {
defaultText.classList.add("hidden");
semValue = button.value;

switch(button.value){
    case "sem1":
        subject1.textContent = "C programming";
        subject2.textContent = "Digital Electronics";
        subject3.textContent = "Discrete Mathematics";
        subject4.textContent = "English";
        subject5.textContent = "Computer Fundamentals and PC Hardware";
        break;
    case "sem2":
        subject1.textContent = "Object Oriented Programming Using C++";
        subject2.textContent = "Digital Communications";
        subject3.textContent = "Computer Organisation and Architecture";
        subject4.textContent = "English";
        subject5.textContent = "Discrete Maths";
        break;
    case "sem3":
        subject1.textContent = "Data Structures Using C++";
        subject2.textContent = "Structural Analysis and Design";
        subject3.textContent = "Networking Fundamentals";
        subject4.textContent = "Database Management";
        subject5.textContent = "Probability and Statistics";
        break;
    case "sem4":
        subject1.textContent = "Web Development Using PHP";
        subject2.textContent = "Computer Aided Optimization Techniques";
        subject3.textContent = "Linux Administration";
        subject4.textContent = "Microprocessors and Assembly Language Programming";
        subject5.textContent = "Nil";
        break;
    case "sem5":
        subject1.textContent = "System Software and Operating System";
        subject2.textContent = "IT and Environment";
        subject3.textContent = "Java Programming";
        subject4.textContent = "Open Course";
        subject5.textContent = "Computer Security";
        break;
    case "sem6":
        subject1.textContent = "Computer graphics";
        subject2.textContent = "Big Data Analysis";
        subject3.textContent = "Python and Latex";
        subject4.textContent = "Seminar";
        subject5.textContent = "Project";
        break;
    
}
   
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

    switch(button.value){
        case "sem1":
            subjectInt1.textContent = "C programming";
            subjectInt2.textContent = "Digital Electronics";
            subjectInt3.textContent = "Discrete Mathematics";
            subjectInt4.textContent = "English";
            subjectInt5.textContent = "Computer Fundamentals and PC Hardware";
            break;
        case "sem2":
            subjectInt1.textContent = "Object Oriented Programming Using C++";
            subjectInt2.textContent = "Digital Communications";
            subjectInt3.textContent = "Computer Organisation and Architecture";
            subjectInt4.textContent = "English";
            subjectInt5.textContent = "Discrete Maths";
            break;
        case "sem3":
            subjectInt1.textContent = "Data Structures Using C++";
            subjectInt2.textContent = "Structural Analysis and Design";
            subjectInt3.textContent = "Networking Fundamentals";
            subjectInt4.textContent = "Database Management";
            subjectInt5.textContent = "Probability and Statistics";
            break;
        case "sem4":
            subjectInt1.textContent = "Web Development Using PHP";
            subjectInt2.textContent = "Computer Aided Optimization Techniques";
            subjectInt3.textContent = "Linux Administration";
            subjectInt4.textContent = "Microprocessors and Assembly Language Programming";
            subjectInt5.textContent = "Nil";
            break;
        case "sem5":
            subjectInt1.textContent = "System Software and Operating System";
            subjectInt2.textContent = "IT and Environment";
            subjectInt3.textContent = "Java Programming";
            subjectInt4.textContent = "Open Course";
            subjectInt5.textContent = "Computer Security";
            break;
        case "sem6":
            subjectInt1.textContent = "Computer graphics";
            subjectInt2.textContent = "Big Data Analysis";
            subjectInt3.textContent = "Python and Latex";
            subjectInt4.textContent = "Seminar";
            subjectInt5.textContent = "Project";
            break;
        
    }
}



function getMoreMarks() 
{
    var viewSubtext = document.getElementById("viewSubtext");
    viewSubtext.classList.remove("hidden");
    var viewButton = document.getElementById("viewButton");
    viewButton.classList.add("hidden");
}