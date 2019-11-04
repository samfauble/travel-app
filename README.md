# Weather-Journal App Project

## Overview
This project lets you type in a city/country name and then prints out the city, a picture of the city, the weather, and a message about flights to that city. All you need to do is type in a city and a country name. 

## Technologies used:
- HTTP requests
- Javascript
- Three third-party APIs
- Sass/CSS
- webpack
- HTML
- Git

## Notes on the file structure
- The index.js file is my entry point for webpack
- The other three .js files in the js folder are for the APIs and HTTP requests
- I have three .scss files in the styles folder

## Instructions to Install
#### Obtain API Keys
In order for this app to work, API access to the following APIs is required:
- Dark Sky API
- Pixabay API
- Geonames API

Upon obtaining access to the above APIs:
- Place the Pixabay API key in the getImage.js file in the specificed places
- Place the Geonames username and Dark Sky API key in the getWeather.js file in the specified places

#### Spin up the server
To spin up the Express server 
1. navigate the command prompt to the project repo folder (capstone-project-sub)
2. enter the following into the command line:

node server          //starts the server, should run at localhost port 8000

#### Install the dependencies
Below are the following things that need to be installed using the command line. I have included the necessary npm scripts for the corresponding dependency. Look at the column entitled "npm script" below. 

1. Type or copy/paste each line one at a time into the command line while in the project repo folder (capstone-project-sub). 

2. After each line, press "Enter" to install that specific dependency(ies).

3. Once it's finished installing, repeat step 1 and 2 until all dependencies have been installed:




Dependency names and npm scripts:
------------------------------

babel-loader        |   npm i -D @babel/core @babel/preset-env babel-loader

webpack                |   npm i webpack 

webpack-cli            |   npm i webpack-cli

webpack-dev-server     |   npm i webpack-dev-server

sass-loader            |   npm i -D sass-loader node-sass

css-loader             |   npm i -D css-loader

style-loader           |   npm i -D style-loader

jest                   |   npm install --save-dev jest-webpack

html-loader            |   npm i html-loader

file-loader            |   npm i file-loader                    

babel-polyfill         |   npm i babel-polyfill

html-webpack-plugin    |   npm i html-webpack-plugin

mini-css-extract-plugin|   npm i mini-css-extract-plugin

terser-webpack-plugin  |   npm i terser-webpack-plugin

optimizeCssAssetsWebpackPlugin|   npm i optimize-css-assets-webpack-plugin

workbox-webpack-plugin |   npm i workbox-webpack-plugin



#### Run the program
1. Once all dependencies have been installed, type the following into the command line to run this program:

npm run build-dev      //builds the development env and the program itself 

npm run build-prod               //builds the production environment


#### Test the program
1. Run the following npm script to run the tests:

npm run test
