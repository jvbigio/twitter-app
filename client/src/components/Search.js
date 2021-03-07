import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import TweetCard from './TweetCard'
import './Search.css'
import axios from 'axios'

function Search () {
  const [input, setInput] = useState('')
  const [tweets, setTweets] = useState([])
  const [user, setUser] = useState([])
  const [radioButton, setRadioButton] = useState({ selected: 'content' })

  const handleRadioBtn = (e) => {
    setRadioButton({ selected: e.target.value })
  }

  const getUserInput = e => {
    setInput(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()

    const contentUrl = `/api/tweets/content?search_term=${input}`
    const usernameUrl = `/api/tweets/username?username=${input}`

    axios
      .get(radioButton.selected === 'content' ? contentUrl : usernameUrl)
      .then(response => setTweets(response.data))
      .catch(err => console.error(err))

    setInput('')
  }

  const tweetCards = tweets.map(tweet => {
    return <TweetCard key={tweet.id} tweet={tweet} />
  })

  return (
    <div className='container'>
      <div className='form-container'>
        <Form onSubmit={handleSearch} inline className='search-box' autoComplete='off'>
          <Form.Check
            className='mb-2 mr-sm-2'
            type='radio'
            id='search-content'
            label='Content'
            value='content'
            onChange={(e) => handleRadioBtn(e)}
            checked={radioButton.selected === 'content'}
          />
          <Form.Check
            className='mb-2 mr-sm-2'
            type='radio'
            id='search-username'
            label='Username'
            value='username'
            onChange={(e) => handleRadioBtn(e)}
            checked={radioButton.selected === 'username'}
          />
          <Form.Group controlId='search'>
            <Form.Control
              type='text'
              placeholder='Search Twitter'
              value={input}
              onChange={(e) => getUserInput(e)}
            />
          </Form.Group>
          <Button id='search-btn' variant='primary' type='submit'>Search</Button>
        </Form>
      </div>
      <div className='content-card'>
        <div className='wrapper'>
          {tweetCards}
        </div>
      </div>
    </div>
  )
}

export default Search
