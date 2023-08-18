import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import sessionsReducer from './sessionsReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import photoReducer from './photosReducer';

const rootReducer = combineReducers({
  session: sessionsReducer,
  photos: photoReducer
})

const configureStore = (preloadedState = {}) => (
  legacy_createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  )
)

export default configureStore;