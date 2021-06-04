import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardMedia } from "@material-ui/core";
import { SearchByBooksAction } from "./../../actions";

const useStyles = makeStyles({
  root: {
    width: "calc((100% / 5) -200px)",
    marginRight: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    background: "black",
  },
  areaCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  imageBook: {
    width: 200,
    height: 200,
  },
});

function CardBook() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const bookImg = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(SearchByBooksAction());
  }, []);

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea className={classes.areaCard}>
          <CardMedia>
            {bookImg
              ? bookImg.map((img) => {
                  return (
                    <img
                      src={img.volumeInfo.imageLinks.smallThumbnail}
                      alt=""
                      className={classes.imageBook}
                    />
                  );
                })
              : null}
          </CardMedia>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CardBook;
