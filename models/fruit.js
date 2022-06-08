//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;
// ^^^^same as const Schema = mongoose.Schema and next line with const model = mongoose.model. 
// ^^^^These two are the same to this one line of code which is called deconstructing


// make fruits schema
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
});

// make fruit model
const Fruit = model("Fruit", fruitsSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Fruit;