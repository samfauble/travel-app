// Personal API Key for GeoNames API
const baseURL = `http://api.geonames.org/searchJSON?username=**********&q=`;

//Personal API info for Dark Sky API
const apiKey = "**********************"
const partialBaseURL = `https://api.darksky.net/forecast/${apiKey}/`//latitude, longitude

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", listenerFunction);
/* Function called by event listener */
function listenerFunction (e){
    //contain city as variable
    let city = document.getElementById("city").value;
    //Create announcement for city itinerary
    let flight = document.getElementById("city-dest") 
    const elem = document.createElement("h3");
    const noText = flight.appendChild(elem)
    noText.textContent = `Below is your flight itinerary to: ${city}`;

    //chain promises
    getData(baseURL, city)
    .then(function (data){
        getWeather(partialBaseURL, data)
        .then(function (weather){
            updateUI(weather)
        })
    })
}
/* Function to GET Web API Data for Geonames*/
async function getData (baseURL, city){
    const res = await fetch(baseURL+city);
    try{
        const data = await res.json();
        document.getElementById("country-dest").innerHTML = `Republic Air Flight No.: RA1077 With service from the U.S. to ${data.geonames[0].countryName} Boarding Time: 455pm Departure Time: 530pm`;
        return data;
    } 
    catch(error) {
        console.log("City not found", error);
    }
}

//Function to GET Dark Sky Web API Data
async function getWeather (partialBaseURL, data) {
    //set up fetch call
    let lat = data.geonames[0].lat
    let lon = data.geonames[0].lng
    let fullURL = partialBaseURL+`${lat},${lon}`
    const proxy = "https://cors-anywhere.herokuapp.com/"
    //fetch call
    const res = await fetch(proxy+fullURL);
    try{
        const weather = await res.json();
        return weather;
    } 
    catch(error) {
        console.log("City not found", error);
    }
}

/* Function to Update UI*/
async function updateUI (weather) {
    try{
        document.getElementById("temp").innerHTML = `Current temperature (in Fahrenheit): ${weather.currently.temperature}`;
        document.getElementById("forecast").innerHTML = `Current conditions in destination: ${weather.currently.summary}`;
    } catch(error) {
        console.log("Unable to update!", error);

    }
}

export {
    listenerFunction,
    getData,
    getWeather,
    updateUI
}
