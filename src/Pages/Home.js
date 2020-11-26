import React from 'react'
import chatBg from '../images/chats.png'
import chatbox from '../images/chat2.png'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'

function Home () {
  return (
    <div className='home'>
      <div className='home-card module'>
        <h1> An app that allows users to read or search tweets, and also generate random ones from your favorite users.</h1>
      </div>
    </div>
  )
}

//  <div className='home'>
//       {/* <img src={chatBg} alt='#' /> */}
//       <div className='speech-bubble'><span>An app that allows users to read or search tweets, and also generate random ones from your favorite users.</span></div>
//     </div>

//  <div className='home'>
//       {/* <img src={chatBg} alt='#' /> */}
//       <div className='speech-bubble'><span>An app that allows users to read or search tweets, and also generate random ones from your favorite users.</span></div>
//     </div>

// <div className='home-card'>
//     {/* <img className='chat-bg' src={chatBg} alt='#' /> */}
//     <div className='card chat-bg'>
//       <p>This app allows you to read your favorite tweets.</p>
//       <p>Users can also search tweets or find random tweets.</p>
//     </div>
//   </div>

export default Home
