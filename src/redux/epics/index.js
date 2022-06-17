import { combineEpics } from 'redux-observable'
import { userAuthEpic } from 'redux/epics/user'
import { cardsFetchEpic } from 'redux/epics/cards'

export const rootEpic = combineEpics(
  userAuthEpic,
  cardsFetchEpic,
)
