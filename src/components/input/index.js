import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { SearchByBooksAction } from "./../../actions";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    marginLeft: 50,
  },
}));

function Input() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    setSearchValue(event.target.value);
    dispatch(SearchByBooksAction(event.target.value));
  };

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(SearchByBooksAction(searchValue));
  };

  return (
    <div className={classes.root}>
      <form onChange={handleSearch} noValidate autoComplete="off">
        <TextField
          value={searchValue}
          fullWidth="bool"
          label="Search topic"
        ></TextField>
      </form>
      <IconButton>
        <SearchIcon onClick={handleClick} />
      </IconButton>
    </div>
  );
}
export default Input;
