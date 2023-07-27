const express = require('express');

const { appointmentController, getAppointmentsController } = require('../controllers/appointmentCtrl');

//Router inject
const router = express.Router();

router.post('/appointment',appointmentController);

router.post('/getappointment',getAppointmentsController);

module.exports=router