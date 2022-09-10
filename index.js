// Get the environment variables.
require('dotenv').config()
 //Require needed node modules
const express = require('express')
const app = express()

//Home page
app.get('/', function (req, res) {
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: white;">
            <h2 style="text-align: center;">NAV BAR</h2>
        </div>
        <h1>White Page</h1>
    </body>
    `)
})
// Color page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
    <style>
    .heart {
        position: absolute;margin: auto;
        top 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: ${myColor};
        height: 400px;
        width: 400px;
        transform: rotate(-45deg);
        opacity: 10%;
    }
    .heart::after{
        background-color: ${myColor};
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 400px;
        height: 400px;
        top: 0px;
        left: 200px;
    }
    .heart::before {
        content:" ";
        background: ${myColor};
        border-radius: 50%;
        position: absolute;
        width: 400px;
        height: 400px;
        top: -200px;
        left:0px;
    }
    .mySentence {
        color: ${myColor};
        text-align: center;
        opacity: 100%; 
    }
    </style>
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
            <h2 style="text-align: center;">FROM THE DESK OF:</h2>
        </div>
        <h1 class ="mySentence">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
        
        <div class ="heart">
            
           
        </div>
    </body>
`)
})

app.listen(process.env.PORT, function (){
    console.log('listening at env.PORT')
})