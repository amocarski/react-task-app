import { FETCH_ARTICLE_ERROR, FETCH_ARTICLE_PENDING, FETCH_ARTICLE_SUCCESS } from '../types';

const initialState = {
  pending: false,
  articles: [],
  error: null
};

export const articlesReducer = (state = initialState, action) => {
  const { articles } = action;
  switch (action.type) {
    case FETCH_ARTICLE_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        pending: false,
        ...articles
      };
    case FETCH_ARTICLE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
};
