import React from 'react';
import AppRouter from './AppRouter';
import AppHeader from './header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './signIn/SignIn';

const App = () => {
  return (
    <>
      <Router>
        {/* <AppHeader />
        <AppRouter /> */}
        <SignIn />
      </Router>
    </>
  );
};

export default App;
