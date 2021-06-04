import axios from "axios";
import {
  SEARCH_BY_BOOK_REQUEST,
  SEARCH_BY_BOOK_SUCCESS,
  SEARCH_BY_BOOK_ERROR,
} from "./../actionTypes";

export const SearchByBooksAction = (searchValue) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_BY_BOOK_REQUEST });
    // eslint-disable-next-line no-unused-expressions
    axios
      .get(`https://google-books.p.rapidapi.com/volumes`, {
        params: { key: `AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc` },
        headers: {
          "x-rapidapi-key":
            "a1a974b74cmsh22610f4b48479cap18381cjsncf975cea1bf7",
          "x-rapidapi-host": "google-books.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log("response Action ", response);
        dispatch({
          type: SEARCH_BY_BOOK_SUCCESS,
          payload: {
            books: response.data.items,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: SEARCH_BY_BOOK_ERROR,
        });
      });
  };
};
