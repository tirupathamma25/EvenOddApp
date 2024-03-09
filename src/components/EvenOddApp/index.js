import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onClickRandomNum = () => {
    const randomNumber = this.getRandomNum()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const countText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="card">
          <h1 className="count">Count {count}</h1>
          <p className="count-text">Count is {countText}</p>
          <button
            type="button"
            onClick={this.onClickRandomNum}
            className="button"
          >
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
