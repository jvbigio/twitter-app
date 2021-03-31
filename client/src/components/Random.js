import React, { useState } from 'react'
import './Random.css'
import RandomCard from './RandomCard'

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

  const handleClick = e => {
    // console.log(e.target)
    // console.log(twitterUsers.id)
    // console.log(twitterUsers[0])
    // console.log(twitterUsers[1])
    // console.log(twitterUsers[2])
    // console.log(twitterUsers[3])
    // console.log(twitterUsers[4])
    console.log(e.target.textContent) // works
  }

  // orig key={user.name}

  const renderTwitterCards = twitterUsers.map((user, index) => {
    // console.log(index) // works
    // console.log(user) // works
    // console.log(user.id) // works
    return (
      <RandomCard
        key={index}
        name={user.name}
        imageSrc={user.imageSrc}
        value={user.id}
        handleClick={handleClick}
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
