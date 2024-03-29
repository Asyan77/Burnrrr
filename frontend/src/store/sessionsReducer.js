import { postSession, postUser, deleteSession } from "../utils/sessionApiUtils"

// CONSTANTS
export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'

// ACTION CREATORS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  payload: user
})

export const removeUser = userId => ({
  type: REMOVE_USER,
  payload: userId
})


// THUNK ACTION CREATORS
export const createUser = userData => dispatch => (
  postUser(userData)
    .then(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user.user))
      dispatch(receiveUser(user))
    })
)

export const loginUser = credentials => dispatch => (
  postSession(credentials)
    .then(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user.user))
      dispatch(receiveUser(user))
    })
)

export const logoutUser = userId => dispatch => (
  deleteSession()
    .then(() => {
      sessionStorage.setItem('currentUser', null)
      dispatch(removeUser(userId))
    })
)

// SELECTORS

// REDUCER
const sessionReducer = (state = { currentUser: null}, action) => {
  const nextState = { ...state }

  switch(action.type) {
    case RECEIVE_USER:
      nextState.currentUser = action.payload.user
      return nextState
    case REMOVE_USER:
      nextState.currentUser = null
      return nextState
    default:
      return nextState
  }
}

export default sessionReducer