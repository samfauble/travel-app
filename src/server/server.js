// Setup empty JS object to act as endpoint for all routes
let projectData = {};
let projectCoordinates = {};
let projectWeather = {};
// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder, points to UI folder
app.use(express.static("./dist"));
// Spin up the server
const port = 3000;
const server = app.listen(port, hollaBack);
// Callback to debug
function hollaBack () {
    console.log(`running on localhost ${port}`);
}
// GET image route
app.get("/image", sendBack);
function sendBack(req, res){
    res.send(projectData);
}
// Image POST Route
  app.post("/image", postImgData);
  function postImgData(req, res){
      console.log(req);
      let incomingData = req.body;
      projectWeather["temp"] = incomingData[0].temperature;
      projectWeather["summary"] = incomingData[0].summary;
      projectWeather["icon"] = incomingData[0].icon;
      res.send(projectData);
      console.log(projectData);
      console.log("Passed");
  }



  // GET location route
app.get("/location", sendLocBack);
function sendLocBack(req, res){
    res.send(projectCoordinates);
}
// Location POST Route
  app.post("/location", postLocData);
  function postLocData(req, res){
      console.log(req);
      let incomingData = req.body;
      projectCoordinates["latitude"] = incomingData[0].latitude;
      projectCoordinates["longitude"] = incomingData[0].longitude;
      res.send(projectCoordinates);
      console.log(projectCoordinates);
      console.log("Passed");
  }





    // GET location route
app.get("/weather", sendWeathBack);
function sendWeathBack(req, res){
    res.send(projectCoordinates);
}
// Location POST Route
  app.post("/weather", postData);
  function postData(req, res){
      console.log(req);
      let incomingData = req.body;
      projectCoordinates["latitude"] = incomingData[0].latitude;
      projectCoordinates["longitude"] = incomingData[0].longitude;
      res.send(projectCoordinates);
      console.log(projectCoordinates);
      console.log("Passed");
  }

  
