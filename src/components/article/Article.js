import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../../actions/articles';

const Articles = () => {
  const users = useSelector(state => state.articlesReducer.users);
  const dispatch = useDispatch();
  const fetchUsers = useCallback(() => fetchUsersAction()(dispatch), [dispatch]);

  useEffect(() => {

  }, [fetchUsers]);

  return (
    <Article />
  );
};

export default Articles;

