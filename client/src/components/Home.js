import React from 'react'
import './Home.css'

function Home () {
  return (
    <section id='container'>
      <div id='left-half' />
      <div id='right-half'>
        <div id='intro'>
          {/* <h1>An app that allows users to read or search tweets and also generate random ones from your favorite users.</h1> */}
          <h1>An app that allows you to read tweets by searching a Twitter user by username or search Twitter by topic. <br /><br />
            Users may also generate a random Tweet from their favorite Twitter users.
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home
