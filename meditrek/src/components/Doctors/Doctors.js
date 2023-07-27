import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
    margin: '10px',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color:theme.palette.primary.main,

  },
}));

const doctors = [
  { name: 'Dr. John Smith', specialty: 'Cardiology', rating: 4.5 },
  { name: 'Dr. Sarah Johnson', specialty: 'Dermatology', rating: 4.9 },
  { name: 'Dr. Michael Lee', specialty: 'Neurology', rating: 4.2 },
];

const Doctors = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h2" className={classes.title}>
        Our Doctors
      </Typography>
      {doctors.map((doctor, index) => (
        <Card className={classes.root} key={index}>
          <CardHeader title={doctor.name} />
          <CardContent>
            <Typography variant="body2" component="p">
              {doctor.specialty}
            </Typography>
            <Typography variant="body2" component="p">
              Rating: {doctor.rating}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Doctors;