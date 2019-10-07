import { combineReducers } from 'redux';
import { articlesReducer } from '../reducers/articles';
import { keywordReducer } from '../reducers/keyword';

const rootReducer = combineReducers({
  articlesReducer,
  keywordReducer
});

export default rootReducer;
