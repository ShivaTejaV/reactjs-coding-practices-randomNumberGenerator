// Write your code here

import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    let num = 0
    num = Math.random() * 100
    num = Math.round(num)
    console.log(num)
    this.setState({number: num})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateNumber}
            type="button"
            className="button"
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
