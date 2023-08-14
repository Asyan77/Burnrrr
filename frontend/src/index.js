import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { restoreSession } from './utils/authUtils';

// const store = configureStore({
//   session: {
//     currentUser: 1
//   }
// })

const currentUser = sessionStorage.getItem('currentUser')
const csrfToken = sessionStorage.getItem('csrfToken')
const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render (
    <React.StrictMode>
       {/* <Provider store= {store}>  */}
        <App />
       {/* </Provider>  */}
  </React.StrictMode>
  )
}

if (!currentUser || !csrfToken) {
  restoreSession().then(renderApp)
} else {
  renderApp()
}
