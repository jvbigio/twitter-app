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
    { id: 1, name: 'Andy Sterkowitz', imageSrc: andySterks },
    { name: 'Brad Traversy', imageSrc: bradTraversy },
    { name: 'Gary Vaynerchuk', imageSrc: garyV },
    { name: 'Joe Rogan', imageSrc: joeRogan },
    { name: 'Steve Maxwell', imageSrc: steveMaxwell }
  ])

  const handleClick = e => {
    // console.log(e.target)
    // console.log(twitterUsers.id)
    console.log(twitterUsers)
    // console.log(e.target.value)
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
