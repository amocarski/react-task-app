import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ArticlesList from './components/articles-list/ArticlesList';
import SearchInput from './components/search/SearchInput';

const App = () => {
  return (
    <div className="custom-width">
      <SearchInput />
      <ArticlesList />
    </div>
  );
};

export default App;
