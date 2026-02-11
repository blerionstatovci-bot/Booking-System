const Payment = require('../models/payment');
const paymentServices = require('../models/payment');
const appointmentServices = require('./appointment.services');

const createPayment = async (appointmentId, paymentData) => {
    const appointment = await appointmentServices.getAppointmentById(appointmentId);
    if(!appointment){
        throw new Error('Appointment not found');
    }
    try{
        const newPayment = new Payment({
            appointmentId: appointmentId,
            ...paymentData
        });
        await newPayment.save();
        return newPayment;
    }catch(err){
        throw new Error('Payment creation failed: ' + err.message);
    };
        };

        const findPaymentByAppointment = async (appointmentId) => {
            const payment = await Payment.findOne({ appointmentId: appointmentId }).populate('appointmentId');
            if (!payment) {
                throw new Error('Payment not found for this appointment');
            }
            return payment;
        };

        const getPaymentById = async (paymentId) => {
            try {
                const payment = await Payment.findById(paymentId).populate('appointmentId');
                if (!payment) {
                    throw new Error('Payment not found');
                }
                return payment;
            } catch (err) {
                throw new Error('Could not get payment: ' + err.message);
            }
        };

            const updatePayment = async (paymentId, updates) => {
                try{
                    const updated = await Payment.findByIdAndUpdate(paymentId, updates, { new: true });
                    if(!updated){
                        throw new Error('Payment not found to update');
                    }
                    return updated;
                }catch(err){
                    throw new Error('Could not update payment: ' + err.message);
                }
            };  

            const deletePayment = async (paymentId) => {
                try{
                    const deleted = await Payment.findByIdAndDelete(paymentId);
                    if(!deleted){
                        throw new Error('Error can not be found');
                    };
                    return deleted;
                }catch(err){
                    throw new Error('Could not delete payment: ' + err.message);
                }};

                module.exports = {
                    createPayment, findPaymentByAppointment, getPaymentById, updatePayment, deletePayment 
                };