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
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
            <h2 style="text-align: center;">NAV BAR</h2>
        </div>
        <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
    </body>
`)
})

app.listen(process.env.PORT, function (){
    console.log('listening at env.PORT')
})