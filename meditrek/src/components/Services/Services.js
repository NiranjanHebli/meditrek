import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Service1 from "./service1-copy.png"
import Service2 from "./service2-copy.jpg"
import Service3 from "./service3-copy.jpg"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '80px 0',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color:theme.palette.primary.main,

  },
  serviceItem: {
    marginBottom: 30,
    textAlign: 'center',
  },
  serviceImage: {
    width: '100%',
    marginBottom: 20,

  },
  serviceTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h2" className={classes.title}>
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.serviceItem}>
            <img src={Service1} alt="Service 1" className={classes.serviceImage} />
            <Typography variant="h5" className={classes.serviceTitle}>
              Get AI Guidance
            </Typography>
            <Typography variant="body1">
            Our website offers an innovative way for patients to receive guidance and support for their health and wellness needs.Get Guidance now!
            </Typography>
            {/* <Button className="my-3"  variant="contained" color="primary" href="#">
              Learn More
            </Button> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.serviceItem}>
            <img src={Service2} alt="Service 2" className={classes.serviceImage} />
            <Typography variant="h5" className={classes.serviceTitle}>
              Schedule an Appointment
            </Typography>
            <Typography variant="body1">
            We offer a convenient way for patients to schedule appointments with our team of experienced doctors.Schedule an appointment now!
            </Typography>
            {/* <Button className="my-3" variant="contained" color="primary" href="#">
              Learn More
            </Button> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.serviceItem}>
            <img src={Service3} alt="Service 3" className={classes.serviceImage} />
            <Typography variant="h5" className={classes.serviceTitle}>
              Download Documents
            </Typography>
            <Typography variant="body1">
            We offer a convenient way for patients to access and download important documents like Health Insurance,medical records and bills.
            </Typography>
            {/* <Button className="my-3" variant="contained" color="primary" href="#">
              Learn More
            </Button> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;