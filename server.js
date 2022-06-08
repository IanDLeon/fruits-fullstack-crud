/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
//const mongoose = require("mongoose");
const path = require("path")
//const mongoose = require("./models/connection.js"); // this is for the connection.js in the models folder. WE DO NOT NEED IT THATS WHY IS COMMENTED OUT.
//const Fruit = require("./models/fruit.js");// this is for the fruits in the models folder. WE TOOK IT OUT BECAUSE ITS ON OUR CONTROLLERS.

const FruitRouter = require("./controllers/fruits.js")





/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), { root: [path.resolve(__dirname, 'views/')] })


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////

app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use("/fruits", FruitRouter)

app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});




//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));