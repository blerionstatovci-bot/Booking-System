const express = require("express");
const route = express.Router();
const appointmentController = require("../controllers/appointment.controllers");
const auth = require('../middleware/auth');

route.post('/post-appointment', auth, appointmentController.createAppointment);
route.get('/user-appointment', auth, appointmentController.getUserAppointments);
route.get('/get-appointment/:id', auth, appointmentController.getAppointmentById);
route.delete('/delete/:id', auth, appointmentController.deleteAppointment);
route.put('/update/:id', auth, appointmentController.updateAppointment);

module.exports = route;