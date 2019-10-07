import React, { useCallback, useEffect, useState } from 'react';
import { Input } from 'antd';
import { keywordUpdateAction } from '../../actions/keyword';
import { useDispatch } from 'react-redux';

const {Search} = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const keywordUpdate = useCallback((keyword) => keywordUpdateAction(keyword)(dispatch), [keyword, dispatch]);

  const onSearchChange = (value) => {
    setKeyword(value);
    keywordUpdate(value);
  };

  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      className="m-2"
      onSearch={(value) => onSearchChange(value)}
    />
  );
};

export default SearchInput;

