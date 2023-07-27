const appointmentModel=require("../models/appointmentModels")

const appointmentController = async (req, res) => {
    try {
      const newAppointment = new appointmentModel(req.body);
      await newAppointment.save();
      res.status(201).send({ message: "Appointment Request Sent Successfully", success: true });
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        success: false,
        message: `Appointment Controller ${error.message}`,
      });
    }
  };
  
  const getAppointmentsController=async (req,res)=>{

    try {

      const allAppointments = (await appointmentModel.find({})).forEach()
        res.status(200).send({success:true,message:"All appointment successfully fetched!",data:`${allAppointments}`})
        // console.log("Printing all appointments")
        // console.log(allAppointments)
        // console.log("End of printing all appointments")
      
    } catch (error) {
      // console.log(error);
      res.status(500).send({success:false,message:`Couldn't Fetch Data ${error.message}`})
    }
  };
  module.exports = { appointmentController,getAppointmentsController};