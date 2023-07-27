import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button, Box } from '@material-ui/core';
import AboutUsImage from './aboutus.jpg';

const useStyles = makeStyles((theme) => ({
  aboutUsSection: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  aboutUsImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  aboutUsContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
  aboutUsTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  aboutUsText: {
    marginBottom: theme.spacing(3),
  },
  aboutUsButton: {
    marginTop: theme.spacing(3),
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsSection}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              className={classes.aboutUsImage}
              src={AboutUsImage}
              alt="About Us"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.aboutUsContent}>
              <Typography
                variant="h3"
                component="h2"
                className={classes.aboutUsTitle}
              >
                Who Are We ?
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.aboutUsText}
              >
                Meditrek is a leading provider of high-quality medical products
                and services. We are dedicated to improving the health and
                well-being of individuals and communities across the globe.
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.aboutUsText}
              >
                Our team of experienced professionals is committed to providing
                innovative solutions that meet the needs of our customers. We
                believe in delivering the best possible value to our clients
                and strive to exceed their expectations every day.
              </Typography>
              {/* <Button
                variant="contained"
                color="primary"
                className={classes.aboutUsButton}
              >
                Learn More
              </Button> */}
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
    
  );
};

export default AboutUs;