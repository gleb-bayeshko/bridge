import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  userName: '',
  isLoading: false,
  isError: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: state => {
      state.isLoading = true
    },

    signInComplete: (state, action) => {
      state.isAuth = true
      state.userName = action.payload.userName
      state.isLoading = false

      localStorage.setItem('auth', 'true')
    },

    signInFailed: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload.error
    },

    signOut: state => {
      state.isAuth = false
      state.userName = ''

      localStorage.removeItem('auth')
    },

    resetUserErrors: state => {
      state.isError = false
      state.error = ''
    },
  },
})

export const {
  signIn, signOut, signInComplete, signInFailed, resetUserErrors,
} = userSlice.actions
export default userSlice.reducer
