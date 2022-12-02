import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


export default function LandingPage(){
  
    return (
      <body>
        <div class="TOC">
        <ul className='links'>
          <span id="one" class="li"><li><a href="/Discography" target="blank">Discography</a></li></span>
          <span id="two" class="li"><li><a href="/versatility" target="blank">Versatility</a></li></span>
          <span id="three" class="li"><li><a href="/impact" target="blank">Impact</a></li></span>
          <span id="four" class="li"><li><a href="/Talent" target="blank">Talent</a></li></span>
        </ul>
        </div>
        <div class='container'>
        <h1>Why Kanye is better than Drake</h1>
        <div class="Title">
        <img src="kanye.webp" alt="blank" height={200}></img>
        <h1>Vs.</h1> 
        <img src='https://static01.nyt.com/images/2021/12/08/arts/06drake2/06drake2-mediumSquareAt3X.jpg' alt='blank'></img> 
        </div>
        </div>
</body>

    )
    }

