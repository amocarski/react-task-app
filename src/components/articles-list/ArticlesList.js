import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticlesAction } from '../../actions/articles';
import { List } from 'antd';

const ArticlesList = () => {
  const keyword = useSelector(state => state.keywordReducer.keyword);
  const articles = useSelector(state => state.articlesReducer.articles);
  const dispatch = useDispatch();
  const fetchArticles = useCallback(() => fetchArticlesAction(keyword)(dispatch), [keyword, dispatch]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles, keyword]);

  return (
    <List
      itemLayout="vertical"
      size="large"
      className="m-2"
      pagination={{
        pageSize: 10,
      }}
      dataSource={articles}
      renderItem={article => (
        <List.Item
          key={article.url}
        >
          <List.Item.Meta
            title={<a href={article.url} target="_blank">{article.title}</a>}
            description={article.description === "null" ? "-" : article.description}
          >
            {article.content === "null" ? "-" : article.content}
          </List.Item.Meta>
        </List.Item>
      )}
    >
    </List>
  );
};

export default ArticlesList;

