var loginSelect = document.querySelector("#loginSelect");
var admno = document.querySelector(".studentAdmissionNo");
function login() {
    const endpoint = document.querySelector("#loginSelect").value + ".html";
    window.open(endpoint, "_self")
}
function signup() {
    window.open(`signup${loginSelect.value}.html`, "_self");
    
}




loginSelect.addEventListener("click", ()=> {
    var signupLinks = document.getElementsByClassName("signupLinks");
    if(loginSelect.value != "student" ){
        admno.classList.add("hidden");
        
    }
    else {
        if(admno.classList.contains("hidden")){
            admno.classList.remove("hidden");
        }
    }
    for(var i=0; i<signupLinks.length; ++i) {
        if((loginSelect.value != "admin") ){
            signupLinks[i].classList.remove("hidden");
           
            

        }
        else {
            if( !(signupLinks[i].classList.contains("hidden")) ){
                signupLinks[i].classList.add("hidden");
            }
           }
           
           }
        }
    
)

var signupLinks = document.getElementsByClassName("signupLinks");

if(loginSelect.value == "admin") {
    for(var i=0; i<signupLinks.length; i++){
        signupLinks[i].classList.add("hidden");
    }
}
if(loginSelect.value != "student"){
    admno.classList.add("hidden");
    
}
else {
    if(admno.classList.contains("hidden")){
        admno.classList.remove("hidden");
    }
}

