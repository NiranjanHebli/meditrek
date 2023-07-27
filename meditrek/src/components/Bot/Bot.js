import React from "react";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import"./bot.css"

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        border: '4px solid #007bff',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
  }));

const Bot = () => {
    const classes = useStyles();
  return (
    <div className="center">
    <Box className={classes.box}>
   
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/4031c53a-6548-4919-91cc-4da757eacc02"
      ></iframe>
   
     </Box>
     </div>
  );
};

export default Bot;
