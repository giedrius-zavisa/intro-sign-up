const inputField = document.querySelectorAll(".input__field");
const inputButton = document.querySelector(".input__button");
const errorText = document.querySelectorAll(".error__text");
const errorIcon = document.querySelectorAll(".error__icon");

inputButton.addEventListener('click', function() {

    let validInput = false;
   
    for(let i = 0; i < inputField.length; i++) {

         // Email validation with a regex check
        if(i === 2) {

            if(validateEmail(inputField[i].value)) {
                console.log("valid email");
                validInput = true;
            }
            else {
                console.log("invalid email");
                validInput = false;
                invalidField(i);
                break;
            }
            
        }
        
        // Input field validation
        if(inputField[i].value.length === 0 || inputField[i].value === null || inputField[i].value === ""){
            invalidField(i);
            validInput = false;
            console.log("invalid field");
            break;
        }
        else {           
            validInput = true;
            console.log("all is good");
        }
    }

    if(validInput) {
        alert("sign up complete!");
    }

});

// Email validation via regex
const validateEmail = function(email) {
    var re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

// Input field style changes when a field has wrong information
const invalidField = function(it) {

    inputField[it].style.borderColor = "red";
    inputField[it].style.color = "red";
    errorText[it].style.display = "block";
    errorIcon[it].style.display = "block";
}


