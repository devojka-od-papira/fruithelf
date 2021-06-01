import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import IconButton from "@material-ui/core/IconButton";
import ViewListIcon from "@material-ui/icons/ViewList";
//import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
// import List from "../list";
// import Card from "./../card";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function DisplayOption() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton>
        <ViewModuleIcon />
      </IconButton>
      <IconButton>
        <ViewListIcon />
      </IconButton>
    </div>
  );
}

export default DisplayOption;
