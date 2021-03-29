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
    { name: 'Andy Sterkowitz', imageSrc: andySterks },
    { name: 'Brad Traversy', imageSrc: bradTraversy },
    { name: 'Gary Vaynerchuk', imageSrc: garyV },
    { name: 'Joe Rogan', imageSrc: joeRogan },
    { name: 'Steve Maxwell', imageSrc: steveMaxwell }
  ])

  const renderTwitterCards = twitterUsers.map(user => {
    return <RandomCard key={user.name} name={user.name} imageSrc={user.imageSrc} />
  })

  return (
    <div className='card-container'>
      {renderTwitterCards}
    </div>
  )
}

export default Random
