import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Userfront from '@userfront/react';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Password Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reset">
            <PasswordReset />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
);

const PasswordReset = () => (
  <div>
    <h2>PasswordReset</h2>
  </div>
);

const Dashboard = () => {
  const [privateData, setPrivateData] = useState<{ someSecretData: string }>();

  // Get private data
  useEffect(() => {
    (async () => {
      try {
        const result = await fetch("http://localhost:3010/data")
        .then((response) => response.json());
        setPrivateData(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Private data</h3>
      {/* JSON.stringify(value, replacer, space) */}
      <pre>{JSON.stringify(privateData, null, 2)}</pre>
    </div>
  );
};

export default App;
