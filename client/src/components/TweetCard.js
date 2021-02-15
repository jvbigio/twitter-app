import React from 'react'
import Card from 'react-bootstrap/Card'
// import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import './TweetCard.css'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { BsDash } from 'react-icons/bs'

import Moment from 'react-moment'

const TweetCard = ({ input, tweet }) => {
  const tweetImage = tweet.entities.media
  console.log(tweetImage)

  return (
    <Container fluid>
      <Card id='tweet-card'>
        <Card.Body>
          <Row as='div'>
            <div className='image-container'>
              <img
                src={tweet.user.profile_image_url_https}
                alt='user profile'
              />
            </div>
            <Card.Title className='name'>
              {tweet.user.name}
              <HiOutlineBadgeCheck />
              <span className='username'>
                @{tweet.user.screen_name}
                <BsDash />
              </span>
              <span className='created'>
                <Moment fromNow>{tweet.created_at}</Moment>
              </span>
            </Card.Title>
          </Row>
        </Card.Body>
        <Card.Body>
          <div>
            <Card.Text as='div'>
              {tweet.full_text}
              <div className='img-card'>
                {/* {tweetImage} */}
                {/* {(tweetImage) || null} */}
                {/* <img src={tweet.entities.media.display_url} alt='tweet media' /> */}
              </div>
            </Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-around'>
          <i className='far fa-comment'> {tweet.display_text_range[1]}</i>
          <i className='fas fa-retweet'> {tweet.retweet_count}</i>
          <i className='far fa-heart'> {tweet.favorite_count}</i>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default TweetCard
