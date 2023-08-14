import React from 'react';
// import Splash from './components/Splash/Splash';
import { Link, Route, Switch, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';

// const handleSignInClick = (e) => {
// e.preventDefault();
// }


function App() {
  return (
    <>
      {/* <h1>Burnr!</h1> */}
      <NavBar />
    </>
  );
}

export default App;
