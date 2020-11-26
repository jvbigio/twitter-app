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
        <header>
          <h1> An app that allows users to read or search tweets, and also generate random ones from your favorite users.</h1>
        </header>
      </div>
    </div>
  // <Card style={{ width: '50vw', height: '50vh' }}>
  //   <Card.Img variant='top' src={chatBg} />
  //   <Card.Body>
  //     <Card.Title>Yapper</Card.Title>
  //     <Card.Text>
  //       An app that allows users to read or search tweets, and also generate random ones from your favorite users.
  //     </Card.Text>
  //   </Card.Body>
  // </Card>
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
