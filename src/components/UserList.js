import React, { useEffect } from 'react'

import { fetchAllUser } from '../store/slices/users'

import { useDispatch, useSelector } from 'react-redux'

const UserList = () => {
  const { list: userList } = useSelector(state => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch])

  return (
    <div className='container mt-4'>
      <div className="row">
        {userList.map((user, index) => (
          <div key={index} className='col-md-3 mb-4'>
            <div className="card">
              <img src={user.avatar} alt="avatar" />
              <div className="card-body">
                <h5>{`${user.first_name} ${user.last_name}`}</h5>
                <p className='card-title'>{user.email}</p>
                <div className="card-text"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList