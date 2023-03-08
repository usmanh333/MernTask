let express = require('express');
let app = express();
require('./database/config') // require DB
let postCardRoutes = require('./routes/PostCards') // require services routes
let color = require('colors');
require('dotenv').config(); //To Create Environment variable
const PORT = process.env.PORT || 5000

app.use('', postCardRoutes) // making routes

try {
    app.listen(PORT, 
        console.log(`The Server is listening on port : ${process.env.PORT} and mode is ${process.env.MODE}`.bgMagenta) // ()=> deprecated
    )
} catch (error) {
    console.log("The server is not listening on port", error)
}