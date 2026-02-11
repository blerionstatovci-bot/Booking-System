const paymentService = require("../services/payment.services");

const createPayment = async (req, res) => {
  try {
    const appointmentId = req.params.appointmentId;
    const paymentData = req.body;
    const payment = await paymentService.createPayment(appointmentId, paymentData,);
    res.status(201).json(payment);
  } catch (err) {
    res.status(401).json({ msg: "Could not create payment: " + err.message });
  }
};

const getPaymentByAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.appointmentId;
    const payment = await paymentService.findPaymentByAppointment(appointmentId);
    res.status(200).json(payment);
  } catch (err) {
    res.status(401).json({ msg: "Could not get payment: " + err.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await paymentService.getPaymentById(paymentId);
    res.status(200).json(payment);
  } catch (err) {
    res.status(401).json({ msg: "Could not get payment: " + err.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const updates = req.body;
    const updated = await paymentService.updatePayment(paymentId, updates);
    if (!updated) {
      return res.status(404).json({ msg: "Payment not found to update" });
    }
    res.status(200).json(updated);
  }catch(err){
    res.status(500).json({ msg: "Could not update payment: " + err.message });
  }
};


const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const deleted = await paymentService.deletePayment(paymentId);
    if (!deleted) {
      return res.status(404).json({ msg: "Payment not found to delete" });
    }
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ msg: "Could not delete payment: " + err.message });
  }
};

module.exports = {
  createPayment, getPaymentByAppointment, getPaymentById, updatePayment, deletePayment,
};
