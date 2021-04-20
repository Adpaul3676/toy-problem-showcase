import React, { Component } from 'react';

class FilterString extends Component {

constructor () {
  super();
  
  this.state = {
    unFilteredArray: ['this', 'is', 'an', 'array', 'of', 'strings'],
    userInput: '',
    filteredArray: []
  }
}

handleChange (e) {
  this.setState({userInput: e})
}

filterStrings (input) {
  let filteredArray = []
  let unFilteredArray = this.state.unFilteredArray

  for (let i = 0; i < unFilteredArray.length; i++) {
    if (unFilteredArray[i].includes(input) !== true) {
      filteredArray.push (unFilteredArray[i])
    }
  }
  this.setState({ filteredArray: filteredArray }) 
}

  render () {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'> Strings: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
        <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={() => this.filterStrings (this.state.userInput)}>Omit</button>
        <span className='resultsBox filterStringRB'> Filtered Strings: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    )
  }
}

export default FilterString;