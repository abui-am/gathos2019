import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that mataches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default AppRouter;
