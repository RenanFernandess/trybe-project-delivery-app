import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages';

function App() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <Redirect to="/login" /> }
        />
        <Route exact path="/login" component={ Login } />
      </Switch>
    </main>
  );
}

export default App;
