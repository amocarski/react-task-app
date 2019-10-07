import { KEYWORD_UPDATE } from '../../types';
import { articlesReducer } from '../../reducers/articles';

const keyword = "usa";

describe('ArticlesList', () => {
  describe('Reducer', () => {
    it('should set a keyword', () => {
      const state = { keyword: [] };
      const newState = articlesReducer(state, {
        type: KEYWORD_UPDATE,
        keyword,
      });

      expect(newState).toEqual({ keyword });
    });
  });
});
