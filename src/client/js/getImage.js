//API keys from Pixabay
const imgApiKey = "*****************************"
const imgBaseURL = `https://pixabay.com/api/?key=${imgApiKey}&image_type=photo`



document.getElementById("generate").addEventListener("click", listener);
/* Function called by event listener */
function listener (e){
    //contain userResponse as variable
    let cityName = document.getElementById("city").value;
    let citySearch = `&q=${cityName}`
    //chain promises
    getImg(imgBaseURL, citySearch)
    .then(function (img){updateImg(img)})}

// GET image
async function getImg (imgBaseURL, citySearch) {
    const res = await fetch(imgBaseURL+citySearch);
    try{
        console.log(res);
        const img = await res.json();
        return img;
    } 
    catch(error) {
        console.log("City not found", error);

    }
}
//Update image
async function updateImg (img) {
    try{
        document.getElementById("image").setAttribute("src", img.hits[0].webformatURL)
    } 
    catch(error) {
        console.log("Unable to update!", error);
        document.getElementById("image").setAttribute("src", "./sadFace.png")

    }
}

export {
    listener,
    getImg,
    updateImg
}
