import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './LandingPage'
import Versatility from './versatility';
import Discography from './Discography';
import Talent from './Talent';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Impact from "./Impact"
import './index.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
       
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/impact" element={<Impact />} />
        <Route path="/versatility" element={<Versatility />}/>
        <Route path="/Discography" element={<Discography />}/>
        <Route path="/Talent" element={<Talent />}/>

      </Routes>
      </BrowserRouter>
      
      </div>
      // <body>
      //   <h1>Why Kanye is better than Drake</h1>
      //   <div class="TOC">
      //   <ul>
      //     <li><a href="Resume Trial.html" target="blank">Discography</a></li>
      //     <li><a>Versatility</a></li>
      //     <li><a>Impact</a></li>
      //     <li><a>Impact</a></li>
      //   </ul>
      //   </div>
      //   <div class="Title">
      //   <img src="kanye.webp" alt="blank" width={500} height={300}></img>
      //   <h1>Vs.</h1>
      //   <img src='drake.jpeg' alt='blank'></img>
      //   </div>
      // </body>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)