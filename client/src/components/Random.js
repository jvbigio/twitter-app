import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import avatar from '../images/popeye.jpg'
import './Random.css'
import Moment from 'react-moment'

function Random () {
  return (
    <CardDeck id='card-container'>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            @Username
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            @Username
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            @Username
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            @Username
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='random-card'>
        <img className='avatar rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            @Username
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  )
}

export default Random
