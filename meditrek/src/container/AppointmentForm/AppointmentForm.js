import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@material-ui/core/Typography";

import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
// import { User } from "@auth0/auth0-react";
// import { Alert } from 'bootstrap';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color:theme.palette.primary.main,

  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: theme.spacing(1),
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  formHeading: {
    marginBottom: theme.spacing(3),
  },
  formInput: {
    margin: theme.spacing(1),
    width: "100%",
  },
  formButton: {
    marginTop: theme.spacing(3),
  },
}));

const AppointmentForm = () => {

  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedTime, handleTimeChange] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reason, setReason] = useState("");
  const [doctor, setDoctor] = useState("");
  const [age, setAge] = useState("");
  const onFinishHandler = async () => {
    try {
      // dispatch(showLoading())
      const res = await axios.post(
        "/api/v1/appointmentuser/appointment",
        {name:name,email:email,phoneno: phoneNumber,reason:reason,docname:doctor,age:age,date:selectedDate,time:selectedTime},
      );
     
      if (res.data.success) {
      
        message.success("Appointment Request Sent Successful");
      }
    } catch (error) {
      // console.log(error);
      message.error("Error in submitting!!");
      setEmail("");
      setPhoneNumber("");
      setReason("");
      setDoctor("");
      setAge("");
      handleDateChange(new Date());
      handleTimeChange(new Date());
    }
  };

  return (
    <div className={classes.formContainer}>
      <form  className={classes.form}>
        <Typography variant="h4" className={classes.title}>
          Schedule an Appointment
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Phone Number"
              name="phoneno"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="outlined"
              name="reason"
              label="Reason for Appointment"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="outlined"
              name=""
              label="Doctors Name"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={classes.textField}
            />
          </Grid>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                animateYearScrolling
                className={classes.formInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TimePicker
                label="Select Time"
                value={selectedTime}
                onChange={handleTimeChange}
                className={classes.formInput}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.formButton}
          onClick={onFinishHandler}
        >
          Schedule
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
