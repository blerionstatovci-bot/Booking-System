const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
        appointmentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            unique: true,
            required: true

        },
        amount:{
            type:Number,
            required: true,
            min: 0
        },
        status: {
            type: String,
            enum: ['Pending', 'Completed', 'Failed'],
            default: 'Pending'
        },
        date: {
            type: Date,
            default: Date.now
        }

        

} , {timestamps:true});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;