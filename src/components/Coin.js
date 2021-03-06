
import React, { Component } from 'react';
import './Coin.css';
import propTypes from 'prop-types';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

export default class Coin extends Component {
  constructor(props){
      super(props);
      this.state= {
        price: this.props.price
      }
      this.handleClick = this.handleClick.bind(this);
  }
/*
  componentDidMount(){
    const callback= () => {
      //set the statr to a new random value
      const randomPercentage = 0.995 + Math.random() * 0.01;
      this.setState( function( oldState){
        return{
          price: oldState.price * randomPercentage
        };
      });
      
    }
    setInterval( callback, 1000);

      //
    }
  */
 handleClick(event){
  event.preventDefault();
  const randomPercentage = 0.995 + Math.random() * 0.01;
  this.setState( function( oldState){
    return{
      price: oldState.price * randomPercentage
    };
  });
 }
  render() {
    return(
        <tr className="coin-row">
          <td>{this.props.name}</td>
          <td>{this.props.ticker}</td>
          <td>${this.state.price}</td>
          <td>
            <form action="#">
              <button onClick={this.handleClick}>Refresh</button>
            </form>

            </td>
        </tr>
        );
  }

}
Coin.propTypes = {
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}
