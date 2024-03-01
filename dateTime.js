document.addEventListener("DOMContentLoaded", function() {

    //Populate the DIV with date and time
    function getDateTime(){
       
        let dateTime = document.getElementById("dateTime");
        let now = new Date();

        // Get date components
        let day = now.getDate();
        let month = now.toLocaleString('default', { month: 'long' });
        let year = now.getFullYear();

        // Get time components
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Format time to ensure two digits
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        // Get day of the week
        let dayOfWeek = now.toLocaleString('default', { weekday: 'long' });

        // Construct the output string
        let dateTimeString = hours + ":" + minutes + ":" + seconds + ", " + dayOfWeek + ", " + day + " " + month + " " + year;

        
        dateTime.innerHTML = dateTimeString;

    }
    
    getDateTime();
    setInterval(getDateTime,1000);

});