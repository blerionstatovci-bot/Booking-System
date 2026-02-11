const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controllers');
const auth = require('../middleware/auth');

router.post('/appointments/:appointmentId/payment', auth, paymentController.createPayment);
router.get('/appointments/:appointmentId/payment', auth, paymentController.getPaymentByAppointment);
router.get('/payments/:id', auth, paymentController.getPaymentById);
router.put('/payments/:id', auth, paymentController.updatePayment);
router.delete('/payments/:id', auth, paymentController.deletePayment);

module.exports = router;