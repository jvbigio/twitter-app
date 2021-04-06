import React, { useState } from 'react'
import './Random.css'
import RandomCard from './RandomCard'
import axios from 'axios'

import andySterks from '../images/andySterks.jpg'
import bradTraversy from '../images/bradTraversy.jpg'
import garyV from '../images/garyV.jpg'
import joeRogan from '../images/joeRogan.jpeg'
import steveMaxwell from '../images/steveMaxwell.jpeg'

function Random () {
  const [twitterUsers, setTwitterUsers] = useState([
    { id: 1, name: 'Andy Sterkowitz', username: 'andysterks', imageSrc: andySterks },
    { id: 2, name: 'Brad Traversy', username: 'traversymedia', imageSrc: bradTraversy },
    { id: 3, name: 'Gary Vaynerchuk', username: 'garyvee', imageSrc: garyV },
    { id: 4, name: 'Joe Rogan', username: 'joerogan', imageSrc: joeRogan },
    { id: 5, name: 'Steve Maxwell', username: 'stevemaxwellsc', imageSrc: steveMaxwell }
  ])

  const [randomTweet, setRandomTweet] = useState([])

  const handleClick = async (username) => {
    console.log(username)
    const userUrl = `/api/tweets/random?username=${username}`

    axios
      .get(userUrl)
      // .then(response => setTwitterUsers(response.data)) // orig
      .then(response => setRandomTweet(response.data))
      .catch(err => console.error(err))
  }

  console.log(randomTweet)
  // console.log(twitterUsers) // returns all twitterUsers

  const renderTwitterCards = twitterUsers.map(user => {
    return (
      <RandomCard
        key={user.id}
        name={user.name}
        imageSrc={user.imageSrc}
        value={user.id}
        handleClick={() => handleClick(user.username)}
      />
    )
  })

  return (
    <div className='card-container'>
      {renderTwitterCards}
    </div>
  )
}

export default Random
