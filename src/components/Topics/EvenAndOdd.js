import React, { Component } from 'react';

class EvenAndOdd extends Component {

  constructor () {
    super ();
  
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    }
  }

  handleChange(x) {
    this.setState({userInput: x});
  }

    assignEvensAndOdds(userInput) {
      let evens = []
      let odds = []
      let newArr = userInput.split(`,`).map(x=>+x);

      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] % 2 === 0) {
          evens.push (newArr[i])
        } else {
          odds.push (newArr[i])
        }
      }

    this.setState({ evenArray: evens, oddArray: odds })
  }

  render () {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={ (e) => this.handleChange (e.target.value) } ></input>
        <button className='confirmationButton' onClick={ () => {this.assignEvensAndOdds(this.state.suerInput) }} >Split</button>
        <span className='resultsBox'> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className='resultsBox'> Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}

export default EvenAndOdd;