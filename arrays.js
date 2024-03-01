document.addEventListener("DOMContentLoaded", function() {

    //create an array
    const cars = ["bmw","audi","mercedes","volvo","ferrari","lotus","opel","ford","chevrolet","kia","alfa romeo"];
    
    //Populate the DIV with the info 
    let arrays = document.getElementById("arrays");
    arrays.innerHTML = cars + "<br>There are: " + cars.length + " cars stored in the array.";

});