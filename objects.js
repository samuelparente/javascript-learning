document.addEventListener("DOMContentLoaded", function() {

    //create an object and a method
    const person = {

        firstName: "Samuel",
        lastName: "Parente",
        age: 38,
        gender: "male",
        email: "samuel@myemail.com",
        fullName: function(){
                    return this.firstName + " " + this.lastName;
                  }
                  
    };
    
    //Populate the DIV with the info 
    let divInfo = document.getElementById("object");
    divInfo.innerHTML = "<b>First Name: </b>" + person.firstName + 
                        "<br><b>Last Name: </b>" + person.lastName +
                        "<br><b>Age: </b>" + person.age +
                        "<br><b>Gender: </b>" + person.gender +
                        "<br><b>Email: </b>" + person.email +
                        "<br><b>Full Name: </b>" + person.fullName();

});