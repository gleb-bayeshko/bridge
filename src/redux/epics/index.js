import { combineEpics } from 'redux-observable'
import { userAuthEpic } from 'redux/epics/user'

export const rootEpic = combineEpics(
  userAuthEpic,
)
