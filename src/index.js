import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <body>
        <h1>Why Taylor swift is better than Drake</h1>
        <div class=""></div>
        <img src="kanye.webp" alt="blank" width={500} height={300}></img>
        <h1>Vs.</h1>
        <img src='drake.jpeg' alt='blank'></img>
      </body>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))