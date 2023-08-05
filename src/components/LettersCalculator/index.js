// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  updateTheCountOfLetters = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="input-container">
          <h1 className="heading"> Calculate the letters you enter </h1>
          <label htmlFor="inputElement">Enter the phrase</label>
          <br />
          <input
            id="inputElement"
            placeholder="Enter the Phrase"
            type="text"
            className="input"
            onChange={this.updateTheCountOfLetters}
          />
          <p type="button" className="button">
            No.of letters: {count.length}
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
