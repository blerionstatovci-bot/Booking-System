const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    paymentId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Payment',
                unique: true,
            },
    Trajtimi: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Canceled'],
        default: 'Scheduled'
    }

    
}, {timestamps:true});


const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;