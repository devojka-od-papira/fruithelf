import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { SearchByBooksAction } from "./../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: 300,
  },
}));

function Input() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();

    dispatch(SearchByBooksAction(event.target.value));
  };

  return (
    <form
      onChange={handleSearch}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth="bool" label="Search topic" />
    </form>
  );
}
export default Input;
