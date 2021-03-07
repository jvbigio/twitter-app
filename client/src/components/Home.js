import React from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image'
import chatBots from '../images/chatBots.png'

function Home () {
  return (
    <div className='home'>
      <div className='container'>
        <h2>An app that allows users to read or search tweets and also generate random ones from your favorite users.</h2>
        <Image className='shadowed' src={chatBots} fluid />
      </div>
    </div>
  )
}

export default Home
