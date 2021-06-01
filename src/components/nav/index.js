import React from "react";
import DisplayOption from "./../displayOption";
import Input from "./../input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    margin: theme.spacing(10),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <div>
      <nav className={classes.nav}>
        <Input />
        <DisplayOption />
      </nav>
    </div>
  );
}
export default Nav;
