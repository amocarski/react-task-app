import { KEYWORD_UPDATE } from '../types';

const initialState = {
  keyword: null
};

export const keywordReducer = (state = initialState, action) => {
  const {keyword} = action;

  switch (action.type) {
    case KEYWORD_UPDATE:
      return {
        ...state,
        keyword
      };
    default:
      return state;
  }
};
