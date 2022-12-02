import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Discography.css'

export default function Discography(){
  
    return (
      <body>
        <h1 id='disc'>Discography</h1>
        <div class="kanye">
        <h2>Kanye's Top 6 Albums</h2>
        <div class="kanyepics">
        <img src='https://i.scdn.co/image/ab67616d0000b27325b055377757b3cdd6f26b78' alt='blank'></img>
        <img src='https://media.pitchfork.com/photos/5929aa8db1335d7bf16996b1/1:1/w_450%2Cc_limit/fab12909.jpg' alt='blank'></img>
        <img src='https://media.pitchfork.com/photos/5929b270ea9e61561daa690f/1:1/w_600/b0b4aa4c.jpg' alt='blank'></img>
        <img src='808.jpeg' alt='blank'></img>
        <img src='life.jpeg' alt='blank'></img>
        <img src='dark.jpeg' alt='blank'></img>
        </div>
        <div class="argue">
            <h4>When it comes to discographies, Kanye West is superior to Drake. I say this because each of Kanye's albums sound distinctively different, while Drake's albums (although AMAZING) carry the same theme throughout.</h4>
        </div>
        </div>
        <div class="drake">
        <h2>Drake's Top 6 Albums</h2>
        <div class="drakepics">
        <img src='https://m.media-amazon.com/images/I/51vPkufDXJL._SY580_.jpg' alt='blank'></img>
        <img src='https://external-preview.redd.it/eopl3W7j0EZlye3LahHO0XKZO6Yu1itNay3e0TLdlTg.jpg?auto=webp&s=6224719a507ddd600312b3f1c2e6a0da104cbf78' alt='blank'></img>
        <img src='https://hiphop-n-more.com/wp-content/uploads/2013/08/NWTS-Standard.jpg' alt='blank'></img>
        <img src='https://media.pitchfork.com/photos/5929aca113d1975652139dd7/1:1/w_600/a8c69ffb.jpg' alt='blank'></img>
        <img src='https://cdn.shoplightspeed.com/shops/634895/files/21759116/drake-views.jpg' alt='blank'></img>
        <img src='https://www.udiscovermusic.com/wp-content/uploads/2017/03/Drake-More-Life-album-cover-web-optimised-820-820x820.jpg' alt='blank'></img>
        </div>
        </div>
        <a id="home" href='/'>Home</a>
      </body>
    )
  
    }
