import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../../actions/articles';

const Users = () => {
  const users = useSelector(state => state.articlesReducer.users);
  const dispatch = useDispatch();
  const fetchUsers = useCallback(() => fetchUsersAction()(dispatch), [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      {
        users.pending
          ?
          <>loading</>
          :
          users.map(user => {
            return <div key={user.id}>{user.id}</div>
          })
      }
    </>
  );
};

export default Users;

