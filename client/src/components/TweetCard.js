import React from 'react'
import Card from 'react-bootstrap/Card'
// import avatar from '../images/popeye.jpg' // orig
// import avatar from 'https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_normal.jpg'
import './TweetCard.css'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

const TweetCard = ({ input, tweet }) => {
  return (
    <Card id='tweet-card'>
      <Card.Body className='d-flex flex-row'>
        <img
          src={tweet.user.profile_image_url_https}
          alt='avatar'
          className='rounded-circle mr-3 image-container'
          height='50px'
          width='50px'
        />
        <div className='row d-flex' id='row'>
          <Card.Title className='name'>{tweet.user.name} <HiOutlineBadgeCheck /> <span className='username'>@{tweet.user.screen_name} &middot;</span>
            <span className='created'>{tweet.create_at}</span>
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
