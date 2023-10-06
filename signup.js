const selectOptions = document.getElementById("signupSelect");

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

