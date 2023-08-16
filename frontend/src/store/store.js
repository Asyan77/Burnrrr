import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import sessionsReducer from './sessionsReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  session: sessionsReducer,
})

// const middleware = [thunk]

// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger')
//   middleware.push(logger)
// }

const configureStore = (preloadedState = {}) => (
  legacy_createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  )
)

export default configureStore;