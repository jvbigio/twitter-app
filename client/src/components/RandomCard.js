import React from 'react'
import './RandomCard.css'
import Card from 'react-bootstrap/Card'

export default function RandomCard ({ name, imageSrc, handleClick }) {
  return (
    <div id='card-container'>
      <Card className='random-card' onClick={(e) => handleClick(e)}>
        <img className='avatar rounded-circle' src={imageSrc} alt='avatar' height='50px' width='50px' />
        <Card.Body>
          <Card.Text>
            {name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
