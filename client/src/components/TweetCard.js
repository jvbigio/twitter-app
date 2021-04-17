import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './TweetCard.css'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { BsDash } from 'react-icons/bs'
import { FaRetweet, FaRegComment, FaRegHeart } from 'react-icons/fa'
import Image from 'react-bootstrap/Image'
import Moment from 'react-moment'

const TweetCard = ({ input, tweet }) => {
  const tweetMedia = tweet.entities.media // orig
  // const tweetMedia = tweet.extended_entities.media
  // const tweetMedia = tweet.extended_entities

  const hasMedia = () => tweetMedia ? tweetMedia[0].media_url : null

  // console.log(tweetMedia[0].type)
  // console.log(tweet.extended_entities)

  const imgStyle = {
    width: 'auto',
    Height: 'auto',
    maxWidth: '100%',
    borderRadius: '5%'
  }

  return (
    <Container fluid>
      <Card id='tweet-card'>
        <Card.Body>
          <Row as='div'>
            <Col className='d-flex flex-row'>
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
            </Col>
          </Row>
        </Card.Body>
        <Card.Body>
          <div>
            <Card.Text as='div'>
              {tweet.full_text.substr(0, tweet.display_text_range[1])}
              <div className='img-card'>
                <a href={(tweetMedia) ? tweetMedia[0].expanded_url : null} target='_blank' rel='noreferrer'>
                  <Image className='tweet-image' src={hasMedia()} style={tweetMedia ? imgStyle : null} fluid />
                </a>
              </div>
            </Card.Text>
          </div>
        </Card.Body>
        <Card.Footer id='footer-icons' className='d-flex justify-content-around rounded-bottom'>
          <div id='comment'><FaRegComment /> &nbsp; {tweet.display_text_range[1]} </div>
          <div id='retweet'><FaRetweet /> &nbsp; {tweet.retweet_count}</div>
          <div id='heart'><FaRegHeart /> &nbsp; {tweet.favorite_count}</div>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default TweetCard
