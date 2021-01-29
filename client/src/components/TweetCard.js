import React from 'react'
import Card from 'react-bootstrap/Card'
import avatar from '../images/popeye.jpg'
import './TweetCard.css'

const TweetCard = ({ input, tweets }) => {
  // above equivalent to:
  // const input = props.input or
  // const { input } = props

  // create an array of html objects JSX, and display it wherever you want
  const processTweets = tweets.map(tweet => {
    return (
      <p key={tweet.id}>
        {tweet.text}
      </p>
    )
  })

  return (
    <Card id='tweet-card'>
      <Card.Body className='d-flex flex-row'>
        <img src={avatar} alt='avatar' className='rounded-circle mr-3' height='50px' width='50px' />
        <div>
          <Card.Title className='name font-weight-bold mb-2' id='name'>jdoe <span className='font-weight-light' id='username'>@beej</span></Card.Title>
          <Card.Body>
            <div className='collapse-content'>
              <br />
              <div>
                <Card.Text as='div'>
                  {processTweets}
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
