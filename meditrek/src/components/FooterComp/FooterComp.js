import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Instagram, LinkedIn, Facebook, Twitter } from '@material-ui/icons';

import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#222',
    color: '#fff',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
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
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            {/* <img src="/logo.svg" alt="Logo" className={classes.logo} /> */}
            <Typography variant="body1">
            Have a question or need to schedule an appointment? Get in touch with us using the information mentioned.
            </Typography>
            <div className="my-4">
            <Typography  variant="body1">
            Stay up-to-date on the latest news and healthcare insights by following us on social media!
            </Typography>
            <div className="mx-2 p-3 " >
            <Instagram/>

            <Twitter/>
            
            <Facebook/>
      
            <LinkedIn/>
            </div>

           
         

  
            </div>
   
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              Quick Links
            </Typography>
            <Typography variant="body1">
              <a href="/#" className={classes.link}>Home</a><br />
              <a href="/#about" className={classes.link}>About Us</a><br />
              <a href="/#services" className={classes.link}>Services</a><br />
              <a href="/#contact" className={classes.link}>Contact Us</a><br />
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
+              Contact Us
            </Typography>
            <Typography variant="body1">
              123 Main Street<br />
              Anytown, USA 12345<br />
              <p>Copywrite @Meditrek</p>
              <a href="tel:555-555-5555" className={classes.link}>(555) 555-5555</a><br />
              <a href="mailto:info@example.com" className={classes.link}>info@example.com</a><br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;