import React from 'react'
import Card from 'react-bootstrap/Card'
import avatar from '../images/popeye.jpg'

const TweetCard = () => {
  return (
    <Card className='card' id='tweet-card'>
      <Card.Body className='d-flex flex-row'>
        <img src={avatar} alt='avatar' className='rounded-circle mr-3' height='50px' width='50px' />
        <div>
          <Card.Title className='font-weight-bold mb-2'>Jdoe <span className='font-weight-light'> @beej</span></Card.Title>
          <Card.Body>
            <div className='collapse-content'>
              <br />
              <div>
                <Card.Text>
                  Tweet Content here...
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around'>
        <i className='far fa-comment' />
        <i className='fas fa-retweet' />
        <i className='far fa-heart' />
      </Card.Footer>
    </Card>
  )
}

export default TweetCard
