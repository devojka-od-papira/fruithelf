import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function CardBook() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>Card </Card>
    </div>
  );
}

export default CardBook;
