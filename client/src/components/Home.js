import React from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image'
import logo from '../images/twitter-logo2.png'

function Home () {
  return (
    <section id='container'>
      <div id='left-half' />
      <div id='right-half'>
        <div id='intro'>
          <h1 className='title'>Yapper</h1>
          <h1>An app that allows you to read Tweets by searching a Twitter user by username or search Twitter by topic. <br /><br />
            Users may also generate a random Tweet from their favorite Twitter users.
            <Image className='logo' src={logo} fluid />
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home
