import React from 'react'
import Card from 'react-bootstrap/Card'
import './TweetCard.css'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import Moment from 'react-moment'

const TweetCard = ({ input, tweet }) => {
  return (
    <Card id='tweet-card'>
      <div className='image-container'>
        <img
          src={tweet.user.profile_image_url_https}
          alt='user profile'
          // className='rounded-circle mr-3'
          height='50px'
          width='50px'
        />
      </div>
      <Card.Body>
        <div className='row d-flex' id='row'>
          <Card.Title className='name'>{tweet.user.name} <HiOutlineBadgeCheck /> <span className='username'>@{tweet.user.screen_name} &middot;</span>
            {/* <span className='created'>{tweet.created_at}</span> */}
            <span className='created'>
              <Moment fromNow>{tweet.created_at}</Moment>
            </span>
          </Card.Title>
          <Card.Body>
            <div className='collapse-content'>
              <br />
              <div>
                <Card.Text as='div'>
                  {tweet.full_text}
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around'>
        <i className='far fa-comment'> {tweet.display_text_range[1]}</i>
        <i className='fas fa-retweet'> {tweet.retweet_count}</i>
        <i className='far fa-heart'> {tweet.favorite_count}</i>
      </Card.Footer>
    </Card>
  )
}

export default TweetCard
