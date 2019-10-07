import { KEYWORD_UPDATE } from '../types';

export const updateKeyword = (keyword) => {
  return {
    type: KEYWORD_UPDATE,
    keyword
  }
};

export const keywordUpdateAction = (keyword) => {
  return dispatch => dispatch(updateKeyword(keyword))
};

