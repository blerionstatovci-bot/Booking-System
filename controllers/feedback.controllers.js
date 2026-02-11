const feedbackService = require("../services/feedback.services");

const createFeedback = async (req, res) => {
    try{
        const appointmentId = req.params.appointmentId;
        const userId = req.user.id;
        const feedbackData = req.body;
        const feedback = await feedbackService.createFeedback(appointmentId, userId, feedbackData);
        res.status(201).json(feedback);
    }catch(err){  
        res.status(401).json({ msg: "Could not create feedback: " + err.message });
    }};

    const findFeedbackByAppointment = async (req, res) => {
        try{
            const appointmentId = req.params.appointmentId;
            const feedback = await feedbackService.findFeedbackByAppointment(appointmentId);
            res.status(200).json(feedback);
        }catch(err){
            res.status(401).json({ msg: "Could not get feedback: " + err.message });
        }};
    
        const getFeedbackById = async (req, res) => {
            try {
                const feedbackId = req.params.id;
                const feedback = await feedbackService.getFeedbackById(feedbackId);
                if (!feedback) {
                    return res.status(404).json({ msg: "Feedback not found" });
                }
                res.status(200).json(feedback);
            } catch (err) {
                res.status(401).json({ msg: "Could not get feedback: " + err.message });
            }};
            
            const updateFeedback = async (req, res) => {
                try{
                      const feedbackId = req.params.id;
                        const updates = req.body;
                        const updated = await feedbackService.updateFeedback(feedbackId, updates);
                        if (!updated) {
                          return res.status(404).json({ msg: "Feedback not found to update" });
                        }
                        res.status(200).json(updated);
                }catch(err){
                    res.status(500).json({ msg: "Could not update feedback: " + err.message });
                }};
            
                const deleteFeedback = async (req, res) => {
                    try{
                        const feedbackId = req.params.id;
                        const deleted = await feedbackService.deleteFeedback(feedbackId);
                        if (!deleted) {
                            return res.status(404).json({ msg: "Feedback not found to delete" });
                    }
                    res.status(200).json({ msg: "Feedback deleted successfully" });
                }catch(err){
                    res.status(500).json({ msg: "Could not delete feedback: " + err.message });
                }};

                module.exports = {
                    createFeedback, findFeedbackByAppointment, getFeedbackById, updateFeedback, deleteFeedback
                };