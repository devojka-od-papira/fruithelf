import React from "react";
import Nav from "./components/nav";
import { makeStyles } from "@material-ui/core/styles";
import CardBook from "./components/card";

const useStyles = makeStyles((theme) => ({
  app: {
    margin: theme.spacing(1),
    width: "100%",
  },
  nav: {
    width: "100%",
    height: 120,
    backgroundColor: "#C6E2FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  book: {
    fontSize: 25,
  },
  cardBooks: {
    margin: theme.spacing(1),
    backgroundColor: "red",
    margin: 0,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.nav}>
        <h1 className={classes.book}>BOOKSHELF</h1>
        <Nav />
      </div>
      <div className={classes.cardBooks}>
        <CardBook />
      </div>
    </div>
  );
}

export default App;
