import { combineReducers, applyMiddleware, createStore } from 'redux';
import entitiesReducer from './entitiesReducer';
import sessionsReducer from './sessionsReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const dummyReducer = (state = {}, action) => state

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  ui: dummyReducer
})

// const middleware = [thunk]

// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger')
//   middleware.push(logger)
// }

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  )
)

export default configureStore;