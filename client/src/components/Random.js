import React, { useState } from 'react'
import './Random.css'
import TweetCard from './TweetCard'
import RandomCard from './RandomCard'
import axios from 'axios'

import andySterks from '../images/andySterks.jpg'
import bradTraversy from '../images/bradTraversy.jpg'
import garyV from '../images/garyV.jpg'
import joeRogan from '../images/joeRogan.jpeg'
import steveMaxwell from '../images/steveMaxwell.jpeg'

function Random () {
  const [twitterUsers, setTwitterUsers] = useState([
    { name: 'Andy Sterkowitz', username: 'andysterks', imageSrc: andySterks },
    { name: 'Brad Traversy', username: 'traversymedia', imageSrc: bradTraversy },
    { name: 'Gary Vaynerchuk', username: 'garyvee', imageSrc: garyV },
    { name: 'Joe Rogan', username: 'joerogan', imageSrc: joeRogan },
    { name: 'Steve Maxwell', username: 'stevemaxwellsc', imageSrc: steveMaxwell }
  ])

  const [randomTweet, setRandomTweet] = useState([])

  const handleClick = async (username) => {
    const userUrl = `/api/tweets/random?username=${username}`

    axios
      .get(userUrl)
      .then(response => setRandomTweet(response.data))
      .catch(err => console.error(err))
  }

  const renderRandomTweet = randomTweet.map(tweet => {
    return <TweetCard key={tweet.id} tweet={tweet} />
  })

  const renderTwitterCards = twitterUsers.map(user => {
    return (
      <RandomCard
        key={user.name}
        name={user.name}
        imageSrc={user.imageSrc}
        value={user.id}
        handleClick={() => handleClick(user.username)}
      />
    )
  })

  return (
    <div>
      <div className='card-container'>
        {renderTwitterCards}
      </div>
      <div id='random-tweet'>
        {renderRandomTweet}
      </div>
    </div>
  )
}

export default Random
