const appointmentService = require("../services/appointment.services");

const createAppointment = async (req, res) => {
    try { 
         const userId = req.user.id; 
        const appointmentData = req.body;
        const appointment = await appointmentService.create(userId, appointmentData);
        res.status(201).json(appointment);
    } catch (err) {
        res.status(401).json({ msg: "Could not create appoint: " + err.message });
    }
};




const getUserAppointments = async (req, res) => {
    try {
const userId = req.user.id;
        const appointments = await appointmentService.findCurrentAppointments(userId);
        res.status(200).json(appointments);
    } catch (err) {
        res.status(401).json({ msg: "Could not get appointments: " + err.message });
    }
};

const getAppointmentById = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appointment = await appointmentService.getAppointmentById(appointmentId);
        res.status(200).json(appointment);
    } catch (err) {
        res.status(401).json({ msg: "Could not get appointment: " + err.message });
    }};
    
const updateAppointment = async (req, res) => {
try{
    const appointmentId = req.params.id;
    const updates = req.body;
    const updated = await appointmentService.updateAppointment(appointmentId, updates);
    if (!updated){
        return res.status(404).json({msg: "Appointment not find to update"});
    }
    res.status(200).json(updated);
}catch(err){
    res.status(500).json({msg: "Could not update appointment"});
}};

const deleteAppointment = async (req, res) =>{
    try{
        const appointmentId = req.params.id;
        const deleted = await appointmentService.deleteAppointment(appointmentId);
    if(!deleted){
        return res.status(404).json({msg: "Appointment not found to delete"});
    }
    res.status(200).json(deleted);

}catch(err){
    res.status(500).json({msg: "Could not delete appointment"});
}};

module.exports = {createAppointment, getUserAppointments, getAppointmentById, updateAppointment, deleteAppointment

}