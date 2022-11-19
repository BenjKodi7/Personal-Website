import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function LandingPage(){
  
    return (
      <body>
        <h1>Why Kanye is better than Drake</h1>
        <div class="TOC">
        <ul className='links'>
          <span id="one"><li><a href="/impact" target="blank">Discography</a></li></span>
          <span id="two"><li><a href="/versatility" target="blank">Versatility</a></li></span>
          <span id="three"><li><a>Impact</a></li></span>
          <span id="four"><li><a>Talent</a></li></span>
        </ul>
        </div>
        <div class="Title">
        <img src="https://m.media-amazon.com/images/I/51jOjrHxQSL._SY580_.jpg" alt="blank" width={500} height={300}></img>
        <h1>Vs.</h1>
        <img src='drake.jpeg' alt='blank'></img>
        </div>
      </body>
    )
  
    }

