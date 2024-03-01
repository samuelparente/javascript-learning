document.addEventListener("DOMContentLoaded", function() {

    let employees = '[\
        {"firstName":"John", "lastName":"Doe", "age": 35, "email": "john.doe@example.com", "location": "New York"},\
        {"firstName":"Anna", "lastName":"Smith", "age": 28, "email": "anna.smith@example.com", "location": "Los Angeles"},\
        {"firstName":"Peter", "lastName":"Jones", "age": 42, "email": "peter.jones@example.com", "location": "Chicago"},\
        {"firstName":"Emily", "lastName":"Brown", "age": 30, "email": "emily.brown@example.com", "location": "Houston"},\
        {"firstName":"Michael", "lastName":"Johnson", "age": 45, "email": "michael.johnson@example.com", "location": "Miami"},\
        {"firstName":"Sophia", "lastName":"Martinez", "age": 33, "email": "sophia.martinez@example.com", "location": "Dallas"},\
        {"firstName":"William", "lastName":"Anderson", "age": 38, "email": "william.anderson@example.com", "location": "San Francisco"},\
        {"firstName":"Olivia", "lastName":"Wilson", "age": 29, "email": "olivia.wilson@example.com", "location": "Seattle"},\
        {"firstName":"James", "lastName":"Taylor", "age": 37, "email": "james.taylor@example.com", "location": "Boston"},\
        {"firstName":"Elizabeth", "lastName":"Garcia", "age": 31, "email": "elizabeth.garcia@example.com", "location": "Washington D.C."}\
    ]';
    
    const employeesObj = JSON.parse(employees);

    let jsonDiv = document.getElementById("jsonDiv");

/  / Itera sobre a lista de funcionários e adiciona cada registro como uma linha na div
    employeesObj.forEach(function(employee) {
    var employeeInfo = `${employee.firstName} ${employee.lastName}, ${employee.age}, ${employee.email}, ${employee.location}`;
    var employeeElement = document.createElement("p");
    employeeElement.textContent = employeeInfo;
    jsonDiv.appendChild(employeeElement);
})
});