const inputField = document.querySelectorAll(".input__field");
const inputButton = document.querySelector(".input__button");

inputButton.addEventListener('click', function() {
    console.log("click!");

    let validInput = false;

    inputField.forEach( element => {

        if(element.value.length === 0 || element.value === null || element.value === ""){

        }
        else {
            validInput = true;
        }
    
    });

    if(validInput) {
        console.log("point1");
    }
    else {
        console.log("point2");
    }
});
