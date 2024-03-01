document.addEventListener("DOMContentLoaded", function() {

    //For loop
    let forLoopDiv = document.getElementById("forLoop");
    let stringLoop ="";

    for(let i = 0; i < 50; i++){

        stringLoop = stringLoop + i +" ";
        
    }

    forLoopDiv.innerHTML = stringLoop;

    //While loop
    let whileLoopDiv = document.getElementById("whileLoop");
    stringLoop ="";
    let j = 50;

    while(j < 100){

        stringLoop = stringLoop + j +" ";
        j++;
    }

    whileLoopDiv.innerHTML = stringLoop;

});