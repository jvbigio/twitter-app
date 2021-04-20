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
  // const tweetMedia = tweet.extended_entities.media

  // keep - origin:
  const hasMedia = () => tweetMedia ? tweetMedia[0].media_url : null
  // const hasMedia = () => {
  //   // console.log(tweetMedia.type)
  //   if (tweetMedia) {
  //     console.log(tweetMedia[0])
  //     // console.log(tweetMedia[0].type) // photo
  //   }
  // }

  // console.log(tweetMedia[0].type) // works but throws error
  // console.log(tweetMedia.type)
  // console.log(tweet.extended_entities.media[0].type)

  // orig
  const imgStyle = {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    borderRadius: '5%'
  }
  // const imgStyle = {
  //   width: 'auto',
  //   height: '400px',
  //   minHeight: '400px',
  //   maxWidth: '100%',
  //   minWidth: '100%',
  //   borderRadius: '5%'
  // }

  return (
    <Container fluid>
      <Card id='tweet-card'>
        <Card.Body>
          <Row as='div'>
            <Col className='d-flex flex-row'>
              <div className='profile-image-container'>
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
        <Card.Footer className='d-flex justify-content-around rounded-bottom footer-icons'>
          <div id='comment'><FaRegComment /> &nbsp; {tweet.display_text_range[1]} </div>
          <div id='retweet'><FaRetweet /> &nbsp; {tweet.retweet_count}</div>
          <div id='heart'><FaRegHeart /> &nbsp; {tweet.favorite_count}</div>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default TweetCard
