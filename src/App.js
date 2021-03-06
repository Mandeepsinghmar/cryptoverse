import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div style={{ display: 'flex' }} className="app">

    <div className="navbar">
      <Navbar style={{ flex: '0.2' }} />

    </div>
    <div style={{ flex: '0.8' }} className="main">
      <Layout>
        <div style={{ padding: '30px', margin: 'auto' }}>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div style={{ backgroundColor: '#001529', display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center' }}>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021 <Link to="/">Cryptoverse Inc.</Link> <br /> All Rights Reserved.</Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>

  </div>
);

export default App;
