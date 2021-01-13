import React from 'react'
import Card from 'react-bootstrap/Card'
import avatar from '../images/popeye.jpg'
import './TweetCard.css'

// const TweetCard = (props) => { // original
const TweetCard = ({ input, tweet }) => {
  // above equivalent to:
  // const input = props.input or
  // const { input } = props

  // work on hiding tweet card unless the search input matches username/user:
  // if (props.input !== 'jdoe') {
  //   return <div />
  // }

  // console.log(tweet)

  // const processTweets = tweet.map(msgFeed => {
  //   // console.log(msgFeed.text) // works
  //   return (
  //     <div key={msgFeed.id}>
  //       <h3>{msgFeed.text}</h3>
  //     </div>
  //   )
  // })

  // try this
  const processTweets = tweet.map(msgFeed => msgFeed)

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
                <Card.Text>
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
