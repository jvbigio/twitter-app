import React, { useState } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import './Random.css'
import Moment from 'react-moment'
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

  return (
    <CardDeck id='card-container'>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={andySterks} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            Andy Sterkowitz
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={bradTraversy} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            Brad Traversy
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={garyV} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            Gary Vaynerchuck
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={joeRogan} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            Joe Rogan
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={steveMaxwell} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            Steve Maxwell
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}

export default Random
