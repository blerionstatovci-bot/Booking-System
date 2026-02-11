const express = require("express");
const route = express.Router();
const feedbackController = require("../controllers/feedback.controllers");
const auth = require('../middleware/auth');

route.post('/appointments/:appointmentId/feedback', auth, feedbackController.createFeedback);
route.get('/appointments/:appointmentId/feedback', auth, feedbackController.findFeedbackByAppointment);
route.get('/feedback/:id', auth, feedbackController.getFeedbackById);
route.put('/feedback/:id', auth, feedbackController.updateFeedback);
route.delete('/feedback/:id', auth, feedbackController.deleteFeedback);

module.exports = route;