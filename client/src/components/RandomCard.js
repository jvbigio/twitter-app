import React from 'react'
import Card from 'react-bootstrap/Card'

export default function RandomCard (props) {
  // create random card components

  return (
    <Card className='random-card'>
      <img className='avatar rounded-circle mr-3' src={props.imageSrc} alt='avatar' height='50px' width='50px' />
      <Card.Body>
        <Card.Text>
          {props.name}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
