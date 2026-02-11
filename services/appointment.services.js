const userService = require('./user.services');
const Appointment = require('../models/appointment');

const create = async (userId, appointment) => {
    const user = await userService.findUser(userId);
    if (!user) {
        throw new Error('User not found');
    }
    try {
        const newAppointment = new Appointment({
            userId: userId,
            ...appointment
        });
        await newAppointment.save();
        return newAppointment;
    } catch (err) {
        throw new Error('Could not create appointment: ' + err.message);
    }
};

const findCurrentAppointments = async (userId) => {
    const appointment = await Appointment.find({ userId: userId });
    if (!appointment || appointment.length === 0) {
        throw new Error('This user does not have Appointments');
    }
    return appointment;
};



const getAppointmentById = async (appointmentId) => {
    try {
        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            throw new Error("Appointment not found");
        }
        return appointment;
    } catch (err) {
        throw new Error('Could not get appointment: ' + err.message);
    }
};

const updateAppointment = async (id, updates) => {
    try {
        const updated = await Appointment.findByIdAndUpdate(id, updates, { new: true });
        if (!updated) {
            throw new Error("Appointment can not be found to update");
        }
        return updated;
    } catch (err) {
        throw new Error('Could not update appointment: ' + err.message);
    }
};

const deleteAppointment = async (appointmentId) => {
    try {
        const deleted = await Appointment.findByIdAndDelete(appointmentId);
        if (!deleted) {
            throw new Error("Appointment can not be found to delete");
        }
        return deleted;
    } catch (err) {
        throw new Error('Could not delete appointment: ' + err.message);
    }
};

module.exports = {create, findCurrentAppointments, getAppointmentById, updateAppointment, deleteAppointment
};