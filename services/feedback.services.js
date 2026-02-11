const Feedback = require('../models/feedback');
const feedbackServices = require('../models/feedback');
const userServices = require('../services/user.services');
const appointmentServices = require('../services/appointment.services');


const createFeedback = async (appointmentId, userId, feedback) => {
const appointment = await appointmentServices.getAppointmentById(appointmentId)
if(!appointment){
    throw new Error("Appointment not found to create feedback");
}
const user = await userServices.findUser(userId);
if(!user){
    throw new Error('This user does not exist');
}
try{
    const newFeedback = new Feedback({
            appointmentId: appointmentId,
            userId: userId,
            ...feedback
    });
    await newFeedback.save();
const populatedFeedback = await Feedback.findById(newFeedback._id).populate('appointmentId');
return populatedFeedback;
}catch(err){
     throw new Error('Feedback create failed: ' + err.message);
}};

const findFeedbackByAppointment = async (appointmentId) => {
    const feedback = await Feedback.findOne({ appointmentId: appointmentId }).populate('appointmentId');
    if(!feedback){
        throw new Error('Feedback not found for this appointment');
    }
    return feedback;
};

const getFeedbackById = async (feedbackId) => {
    try{
        const feedback = await Feedback.findById(feedbackId).populate('appointmentId');
        if(!feedback){
            throw new Error('Feedback not found');
        }
        return feedback;
    }catch(err){
        throw new Error('Could not get feedback: ' + err.message);
    }};

const updateFeedback = async (feedbackId, updates) => {
    try{
        const updated = await Feedback.findByIdAndUpdate(feedbackId, updates, { new: true});
        if(!updated){
            throw new Error('Feedback not found to update');
        }
        return updated;
    }catch(err){
        throw new Error('Could not update feedback: ' + err.message);
    }};

    const deleteFeedback = async (feedbackId) => {
        try{
            const deleted = await Feedback.findByIdAndDelete(feedbackId);
            if(!deleted){
                throw new Error('Feedback not found to delete');
            }
            return deleted;
        }catch(err){
            throw new Error('Could not delete feedback: ' + err.message);
        }};
    module.exports = {
        createFeedback, findFeedbackByAppointment, getFeedbackById, updateFeedback, deleteFeedback
    };