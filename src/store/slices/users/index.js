import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload
    }
  }
})

export default userSlice.reducer;

export const { setUserList } = userSlice.actions
console.log(userSlice)

export const fetchAllUser = () => async (dispatch) => {
  try {
    //6
    const { data } = await axios.get('https://reqres.in/api/users?page=2')
    dispatch(setUserList(data.data))
  } catch (error) {
    console.log(error.message)
  }
}

