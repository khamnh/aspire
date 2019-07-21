import React from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles/style.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect path="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
