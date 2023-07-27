import React from "react";
import axios from "axios";
import { message } from "antd";
const AppointmentDashboard = () => {
  const callFunc = async () => {
    try {
      const res = await axios.post("/api/v1/appointmentuser/getappointment");
    //   dispatch(hideLoading());
      if (res.data.success) {
        console.log(res);
        message.success("Fetched Data successfully ");
      }
    } catch (error) {
    //   dispatch(hideLoading());
      console.log(error);
      message.error("Error in Fetching Data!");
    }
  };
  return <div><button onClick={callFunc}> Appointments list</button></div>;
};

export default AppointmentDashboard;
