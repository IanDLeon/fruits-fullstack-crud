/////////////////////////////////////////////
////////// Import Our Dependencies //////////
/////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose") // talk to our database
const path = require("path")