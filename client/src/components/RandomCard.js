import React from 'react'
import './RandomCard.css'
import Card from 'react-bootstrap/Card'

export default function RandomCard (props) {
  return (
    <div id='card-container'>
      <Card className='random-card'>
        <img className='avatar rounded-circle' src={props.imageSrc} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            {props.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
