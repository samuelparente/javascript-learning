
document.addEventListener("DOMContentLoaded", function() {

    let apiKey = "pub_387776364738f83b082f2de6bbf365d77d227";
    let keyword = "cars";
    
    let baseUrl = "https://newsdata.io/api/1/news?apikey=";
    let fullUrl = baseUrl + apiKey + "&q=" + keyword;
    
    //Fetch data
    fetch (fullUrl)
    .then (response => response.json())
    .then (data => {
        
        let newsDiv = document.getElementById("newsDiv");
        
        //debug
        console.log(data.results);

        for (let i=0; i< data.results.length; i++){

            // Create news
            let title = document.createElement('h2');
            title.textContent = data.results[i].title;

            let description = document.createElement('h3');
            description.textContent = data.results[i].description;

            let date = document.createElement('p');
            date.textContent = "Date: " + data.results[i].pubDate;

            let author = document.createElement('p');
            author.textContent = "Author: " + data.results[i].creator;

            let hrElement = document.createElement('hr');

            // Append elements to the div
            newsDiv.appendChild(title);
            newsDiv.appendChild(description);
            newsDiv.appendChild(date);
            newsDiv.appendChild(author);
            newsDiv.appendChild(hrElement);

        }
       
    })
    .catch (error => console.log(error));

});