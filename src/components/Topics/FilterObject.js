import React, { Component } from 'react';

class FilterObject extends Component {

  constructor () {
    super ();
    
    this.state = {
      unFilteredArray: [{
        name: 'John',
        age: 20,
        differentProp: 0
      }, 
      {
        name: 'Paul',
        age: 21,
        differentProp: 1
      },
      {
        name: 'Adam',
        age: 20,
      }],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange (e) {
    this.setState({userInput: e})
  }

  filterArray (x) {
    let filteredArray = [];
    let unFilteredArray = this.state.unFilteredArray
    for (let i = 0; i < unFilteredArray.length; i++) {
      for (let prop in unFilteredArray[i]) {
        if (prop === x) {
          // console.log (unFilteredArray[i])
          filteredArray.push (unFilteredArray[i])
        }
      }
    }
    this.setState({ filteredArray: filteredArray })
  }
  

  render () {
    return (
      <div className='puzzleBox filterObject'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original: { JSON.stringify(this.state.employees, null, 10) }</span>
        <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    )
  }
}

export default FilterObject;