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

  const renderTwitterData = twitterUsers.map(user => {
    return <RandomCard key={user.name} name={user.name} imageSrc={user.imageSrc} />
  })

  return (
    // <div className='card-container'>
    //   <RandomCard
    //     name={twitterUsers[0].name}
    //     imageSrc={twitterUsers[0].imageSrc}
    //   />
    //   <RandomCard
    //     name={twitterUsers[1].name}
    //     imageSrc={twitterUsers[1].imageSrc}
    //   />
    //   <RandomCard
    //     name={twitterUsers[2].name}
    //     imageSrc={twitterUsers[2].imageSrc}
    //   />
    //   <RandomCard
    //     name={twitterUsers[3].name}
    //     imageSrc={twitterUsers[3].imageSrc}
    //   />
    //   <RandomCard
    //     name={twitterUsers[4].name}
    //     imageSrc={twitterUsers[4].imageSrc}
    //   />
    // </div>
    <div className='card-container'>
      {renderTwitterData}
    </div>
  )
}

export default Random
