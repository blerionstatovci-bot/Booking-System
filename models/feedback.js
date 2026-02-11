const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
   appointmentId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Appointment',
    required:true,
    unique:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    comment:{
        type:String,
       required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    language:{
        type:String,
        enum:['Albanian', 'English', 'Detuch'],
        required:true
    },
    needToImprove:{
        type:String,
        default:'Everything is good'
    }

}, {timestamps:true});

module.exports = mongoose.model('Feedback', feedbackSchema);