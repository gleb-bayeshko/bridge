import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer } from 'redux/slices'
import { rootEpic } from 'redux/epics'

const epicMiddleware = createEpicMiddleware()

const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(epicMiddleware),
    preloadedState,
  })

  epicMiddleware.run(rootEpic)

  return store
}

export default configureAppStore
