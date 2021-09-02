import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './App.css';

const App = () => (
  <div className="App" style={{ display: 'flex' }}>
    <div style={{ flex: '0.2' }} className="navbar">
      <Navbar />

    </div>
    <div style={{ flex: '0.8' }} className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  </div>
);

export default App;
