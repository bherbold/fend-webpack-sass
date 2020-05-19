
//for envirment , API private key should not be on github
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

// setting up the API
var aylien = require("aylien_textapi")
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  })


var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

var projectData = {};

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

//POST
app.post('/api', async (req, res) => {
    const { formText } = req.body;
    console.log(formText);
    
    try {
        console.log("Request NLP-API");
        textapi.sentiment({'text':formText }, 
          function(error, response) {
          if (error === null) {
            console.log(response);
            res.send(response);
        }
      });
      
    } catch(error) {
      console.log(error);
    }
  })

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})
