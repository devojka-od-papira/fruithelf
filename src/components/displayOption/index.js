import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

function DisplayOption() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton>
        <ViewComfyIcon />
      </IconButton>
      <IconButton>
        <ViewListIcon />
      </IconButton>
    </div>
  );
}
export default DisplayOption;
