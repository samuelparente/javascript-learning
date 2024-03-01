document.addEventListener("DOMContentLoaded", function() {

    //call function to add numbers when button to add numbers is pressed
    let btnAdd = document.getElementById("btn1");
    btnAdd.onclick = function() {
        
        let n1 = document.getElementById("n1").value;
        let n2 = document.getElementById("n2").value;
        let resultSum = document.getElementById("resultSum");
        
        let sum = addNumbers(parseInt(n1), parseInt(n2));
        
        resultSum.innerHTML = "The sum is: " + sum;
    };
    
    //Function to add numbers
    function addNumbers(a,b){
    
        return(a + b); 
    
    }
    
});
    