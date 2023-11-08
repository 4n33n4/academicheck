const selectOptions = document.getElementById("signupSelect");
const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("role="))
  ?.split("=")[1];
var department = document.getElementById("departmentSection");
  
if(cookieValue == "student"){
    selectOptions.value="student";
    if(selectOptions.value != "student"){
        department.classList.add("hidden");
    }
    else if(department.classList.contains("hidden")){
        department.classList.remove("hidden");
    }
}
else if(cookieValue == "parent"){
    selectOptions.value="parent";
    if(selectOptions.value != "student"){
        department.classList.add("hidden");
    }
    else if(department.classList.contains("hidden")){
        department.classList.remove("hidden");
    }
}
else if(cookieValue == "teacher"){
    selectOptions.value="teacher";
    
}


selectOptions.addEventListener("click", () =>{
    var department = document.getElementById("departmentSection");
    if(selectOptions.value != "student"){
        department.classList.add("hidden");
    }
    else if(department.classList.contains("hidden")){
        department.classList.remove("hidden");
    }
})
var studentUsernameSection = document.getElementById("studentUsernameSection");

selectOptions.addEventListener("click", ()=>{
    if (selectOptions.value != "parent"){
        studentUsernameSection.classList.add("hidden");
    }
    else {
        studentUsernameSection.classList.remove("hidden");
    }
})

