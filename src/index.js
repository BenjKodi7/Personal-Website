import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <body>
        <h1>Why Kanye is better than Drake</h1>
        <img src="2000.webp" alt="blank" width={500} height={300}></img>
      </body>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))