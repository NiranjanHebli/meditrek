import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import heroImage from "./heroImage.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  heroText: {
    zIndex: 10,
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  heroButton: {
    marginTop: 20,
    color: "#fff",
    borderColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
}));

function HeroSection() {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div className={classes.overlay}></div>
      <div className={classes.heroText}>
        <Typography variant="h2" component="h1">
          Welcome to Meditrek
        </Typography>
        <Typography variant="subtitle1" component="p">
          A leading provider of healthcare solutions.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          className={classes.heroButton}
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;