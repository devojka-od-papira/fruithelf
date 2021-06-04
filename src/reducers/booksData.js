import { SEARCH_BY_BOOK_REQUEST, SEARCH_BY_BOOK_SUCCESS } from "../actionTypes";

const initialState = {
  books: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SEARCH_BY_BOOK_REQUEST:
      return {
        ...state,
      };
    case SEARCH_BY_BOOK_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
      };
    default:
      return state;
  }
};
