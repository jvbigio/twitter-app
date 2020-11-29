import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import avatar from '../images/popeye.jpg'

function Random () {
  return (
    <CardDeck>
      <Card>
        {/* <Card.Img className='rounded-circle mr-3' variant='top' src={avatar} /> */}
        <img className='rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Tweet content
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img className='rounded-circle mr-3' variant='top' src={avatar} /> */}
        <img className='rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Tweet content
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img className='rounded-circle mr-3' variant='top' src={avatar} width='40px' height='50px' /> */}
        <img className='rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Tweet content
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img className='rounded-circle mr-3' variant='top' src={avatar} /> */}
        <img className='rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Tweet content
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* <Card.Img className='rounded-circle mr-3' variant='top' src={avatar} /> */}
        <img className='rounded-circle mr-3' src={avatar} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Tweet content
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
