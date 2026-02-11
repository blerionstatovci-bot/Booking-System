const mongoose = require("mongoose");

const mongoDbConnection = mongoose.connect("mongodb://localhost:27017/bookingSystem").then(()=>{
    console.log("Connection to db success-from connection !")
}).catch((err)=>{
    console.log("Could not connect to DB", err);
});


module.exports = mongoDbConnection;