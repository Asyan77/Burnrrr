import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider } from 'react-redux';
import configureStore from './store/store';
import './index.css';
import App from './App';
import { restoreSession } from './utils/authUtils';
import { deleteSession, postSession, postUser } from './utils/sessionApiUtils';
import { createUser, loginUser, logoutUser } from './store/sessionsReducer';

let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
const csrfToken = sessionStorage.getItem('csrfToken')
const root = ReactDOM.createRoot(document.getElementById('root'))




const renderApp = () => {
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  let initialState = {session: {currentUser}}
  const store = configureStore(initialState)
  
  // for testing only
  window.store = store
  window.postUser = postUser
  window.postSession = postSession
  window.deleteSession = deleteSession
  window.loginUser = loginUser
  window.logoutUser = logoutUser
  window.createUser = createUser
  //
  root.render (
    <React.StrictMode>
       <Provider store={store}> 
          <App />
       </Provider> 
  </React.StrictMode>
  )
}

if (!currentUser || !csrfToken) {
  restoreSession().then(renderApp)
} else {
  renderApp()
}
