import React, { Component } from 'react';

class EvenAndOdd extends Component {

  constructor () {
    super ();
  
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    }
    // this.assignEvensAndOdds = this.assignEvensAndOdds.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  
  assignEvensAndOdds(userInput) {
    let evens = []
    let odds = []
    let newArr = userInput.split(`,`).map(x=>+x);
    console.log (newArr)
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] % 2 === 0) {
        evens.push (newArr[i])
      } else {
        odds.push (newArr[i])
      }
    }
    
    this.setState({ evenArray: evens, oddArray: odds })
  }
  
  handleChange(e) {
    this.setState({userInput: e});
  }

  render () {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={(e) => this.handleChange (e.target.value)}></input>
        <button className='confirmationButton' onClick={() => {this.assignEvensAndOdds(this.state.userInput)}}>Split</button>
        <span className='resultsBox'> Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'> Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;