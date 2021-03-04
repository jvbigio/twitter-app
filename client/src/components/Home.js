import React from 'react'
import './Home.css'

function Home () {
  return (
    <div className='home'>
      {/* <div className='home-card module'>
        <h1> An app that allows users to read or search tweets, and also generate random ones from your favorite users.</h1>
      </div> */}
      <div className='container'>
        <h2>An app that allows users to read or search tweets, and also generate random ones from your favorite users.</h2>
        <div className='img' id='img' />
      </div>
    </div>
  )
}

export default Home
