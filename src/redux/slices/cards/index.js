import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leftCard: null,
  rightCard: null,
  isLoading: false,
  isError: false,
  error: '',
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchCards: state => {
      state.isLoading = true
    },

    fetchCardsComplete: (state, action) => {
      const { leftCard, rightCard } = action.payload
      state.leftCard = leftCard
      state.rightCard = rightCard
      state.isLoading = false
    },

    fetchCardsFailed: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload.error
    },

    resetCards: state => {
      state.leftCard = null
      state.rightCard = null
    },
  },
})

export const {
  fetchCards, fetchCardsComplete, fetchCardsFailed, resetCards,
} = cardsSlice.actions
export default cardsSlice.reducer
