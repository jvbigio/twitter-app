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

/*
Bootstap
 <div className='card' id='tweet-card'>
      <div className='card-body d-flex flex-row'>
        <img src={avatar} alt='avatar' className='rounded-circle mr-3' height='50px' width='50px' />
        <div>
          <h4 className='card-title font-weight-bold mb-2'>Beej</h4><span>@beej</span>

          <div className='card-body'>
            <div className='collapse-content'>
              <p className='card-text collapse' id='collapse-content'>Tweet content here...</p>
              <a class='btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed' data-toggle='collapse' href='#collapseContent' aria-expanded='false' aria-controls='collapseContent' />
              <i className='fas fa-share-alt text-muted float-right p-1 my-1' data-toggle='tooltip' data-placement='top' title='Share this post' />
              <i className='fas fa-heart text-muted float-right p-1 my-1 mr-3' data-toggle='tooltip' data-placement='top' title='I like it' />
            </div>
          </div>
        </div>
      </div>
    </div>

*/

export default TweetCard