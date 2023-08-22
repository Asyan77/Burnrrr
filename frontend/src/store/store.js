import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import sessionsReducer from './sessionsReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import photoReducer from './photosReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  session: sessionsReducer,
  photos: photoReducer,
  comments: commentsReducer

})

const configureStore = (preloadedState = {}) => (
  legacy_createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  )
)

export default configureStore;