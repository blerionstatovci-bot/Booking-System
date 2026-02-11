const express = require("express");
require('dotenv').config();
const mongoDbConnection = require("./db/connection");
const app = express();
mongoDbConnection.then(()=>{
    console.log("MongoDB connected successfully from app");
}).catch((err)=>{
    console.log(err)
});

app.use(express.json());
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/appointment', require('./routes/appointment.routes'));
app.use('/api', require('./routes/payment.routes'));
app.use('/api', require('./routes/feedback.routes'));


app.listen(3000, ()=>{
    console.log("Server started on port 3000.")
})





