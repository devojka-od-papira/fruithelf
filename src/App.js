import React from "react";
import Nav from "./components/nav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    margin: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  book: {},
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <h1 className={classes.book}>BOOKSHELF</h1>
      <Nav />
    </div>
  );
}

export default App;
