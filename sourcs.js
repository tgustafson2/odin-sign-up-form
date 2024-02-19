const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm_password");
const passwordInputs = document.querySelector(".password_inputs>div");

function validate(){
    const password = document.querySelector("#password");
    const confirmPass = document.querySelector("#confirm_password");
    // console.log(password.value);
    return password.value == confirmPass.value && password.value.length>=5;
}

function removeError(){
    const password = document.querySelector("#password");
    const confirmPass = document.querySelector("#confirm_password");
    password.classList.remove("error");
    confirmPass.classList.remove("error");
}

function addError(){
    const password = document.querySelector("#password");
    const confirmPass = document.querySelector("#confirm_password");
    password.classList.add("error");
    confirmPass.classList.add("error");
}


password.classList.add("error");
confirmPass.classList.add("error");
const errorMessage = document.createElement("p");
errorMessage.textContent = "*Passwords do not match";
errorMessage.style.color = "red";
errorMessage.style.fontSize = "small";
passwordInputs.append(errorMessage);

password.addEventListener("input", () =>{
    // console.log("in event");
    if(validate()){
        removeError();
        errorMessage.style.display = "none";
    }
    else{
        addError();
        errorMessage.style.display = "block";
    }
});

confirmPass.addEventListener("input", () =>{
    if(validate()){
        removeError();
        errorMessage.style.display = "none";
    }
    else{
        addError();
        errorMessage.style.display = "block";
    }
});