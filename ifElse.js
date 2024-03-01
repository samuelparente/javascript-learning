document.addEventListener("DOMContentLoaded", function() {

    //call function to compare numbers
    let btnCompare = document.getElementById("btn2");
    btnCompare.onclick = function() {
        
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let resultCompare = document.getElementById("resultCompare");
        
        let res = compareNumbers(parseInt(num1), parseInt(num2));
        resultCompare.innerHTML = res;
    };

    //Function to compare numbers
    function compareNumbers(a,b){

        if(a > b){

            return "First number is bigger than second number.";

        }
        else if(a < b) {

            return "Second number is bigger than first number.";

        }
        else if(a === b) {

            return "Numbers are equal.";

        }
        else {

            return "Verify that the input are numbers.";

        }

    }

});