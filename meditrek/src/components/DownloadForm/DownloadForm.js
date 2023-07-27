import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: theme.spacing(1),
    boxShadow: "10px 5px 10px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },


  },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      color:theme.palette.primary.main,
  
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    logo: {
      height: 50,
      marginBottom: theme.spacing(2),
    },
    center :{
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      height: "100vh",
    },
  }));

const DownloadForm = (theme) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const [doc,setDoc]=useState(' ');
 const classes=useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and download document
  };

  return (<React.Fragment>

<div className={classes.centre}>


<div className={classes.container}>
 
<Typography variant="h4" align="center" gutterBottom className={classes.title}>
    Download Health Documents
  </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Document Type"
              variant="outlined"
              type="string"
              value={doc}
              onChange={(event) => setDoc(event.target.value)}
              required
            />
          </Grid>
        </Grid>
<div className="my-4">
  </div>        
        <Button type="submit" variant="contained" color="primary">
          Download
        </Button>


      </form>
      </div>
      </div>
         
  </React.Fragment>
  );
};

export default DownloadForm;
