import React from 'react'
import Card from 'react-bootstrap/Card'

const TweetCard = () => {
  return (
    <Card id='tweet-card' style={{ width: '25rem' }}>
      <Card.Img variant='bottom' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Username here</Card.Title>
        <Card.Text>
          Tweet content here
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TweetCard
