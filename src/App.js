import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import Coin from './components/Coin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img class="App-logo" src={logo} alt="React logo"/>

        <h1 className= "App-title">
         Coin Exchange
        </h1>

      </header>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={21000.99}/>
          <Coin name="Ethereum" ticker="ETH" price={1200.00}/>
          <Coin name="Tether" ticker="USDT" price={1}/>
          <Coin name= "Ripple" ticker="XRP" price={12}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
