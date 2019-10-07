import axios from 'axios'
import { FETCH_ARTICLE_ERROR, FETCH_ARTICLE_PENDING, FETCH_ARTICLE_SUCCESS } from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;
const API = 'https://newsapi.org/v2/everything';

export const fetchArticlesPending = () => {
  return {
    type: FETCH_ARTICLE_PENDING
  }
};

export const fetchArticlesSuccess = (articles) => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    articles
  }
};

export const fetchArticlesError = (error) => {
  return {
    type: FETCH_ARTICLE_ERROR,
    error
  }
};

export const fetchArticlesAction = (keyword) => {
  return async dispatch => {
    dispatch(fetchArticlesPending());

    try {
      const URL = API + `?q=${keyword}&apiKey=` + API_KEY;
      const response = (await axios.get(URL)).data;

      dispatch(fetchArticlesSuccess(response));
      return response;
    } catch (e) {
      dispatch(fetchArticlesError(e));
    }
  }
};

