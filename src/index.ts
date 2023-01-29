// Get the environment variables.
require('dotenv').config()
 //Require needed node modules
import express from 'express'
const app = express()

//Home page
app.get('/', function (req, res) {
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: white;">
            <h2 style="text-align: center;">NAV BAR</h2>
        </div>
        <h1 style = 'text-align: center; color: black'>White Page</h1>
    </body>
    `)
})

// Color page
app.get('/:color', function (req: express.Request, res: express.Response):void {
    let myColor: unknown = req.params.color
    if(typeof(myColor) === 'string'){
    res.send(`
    <style>
    .heart {
        position: absolute;
        margin: auto;
        top 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: ${myColor};
        height: 400px;
        width: 400px;
        transform: rotate(-45deg);
        opacity: 25%;
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
        text-transform: uppercase;
    }
    </style>
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
            <h2 style="text-align: center;">FROM THE DESK OF:</h2>
        </div>
        <h1 class ="mySentence">${myColor} Page</h1>
        
        <div class ="heart">
            
           
        </div>
    </body>
    `)
    }
})

app.listen(process.env.PORT)