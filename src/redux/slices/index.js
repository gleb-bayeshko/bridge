import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user'
import cardsReducer from './cards'

export const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer,
})
