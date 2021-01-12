import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import TweetCard from './TweetCard'
import './Search.css'
import axios from 'axios'

function Search () {
  const [input, setInput] = useState('')
  const [tweet, setTweet] = useState([])
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
    // console.log(input) // works
    // console.log(radioButton.selected) // content/username (string)

    const contentUrl = `/api/tweets/content?search_term=${input}`
    const usernameUrl = `/api/tweets/username?username=${input}`
    // const usernameUrl = `/api/tweets/username?screen_name=${input}` // Doesn't work

    axios
      .get(radioButton.selected === 'content' ? contentUrl : usernameUrl)
      .then(response => setTweet(response.data))
      .catch(err => console.error(err))

    setInput('')
  }

  // console.log(tweet) // orig
  // console.log(tweet.statuses)

  return (
    <div className='container'>
      <div className='form-container'>
        <Form onSubmit={handleSearch} inline className='search-box' autoComplete='off'>
          <Form.Check
            className='mb-2 mr-sm-2'
            type='radio'
            id='search-content'
            label='By content'
            value='content'
            onChange={(e) => handleRadioBtn(e)}
            checked={radioButton.selected === 'content'}
          />
          <Form.Check
            className='mb-2 mr-sm-2'
            type='radio'
            id='search-username'
            label='By username'
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
          <TweetCard input={input} tweet={tweet} />
          <TweetCard input={input} tweet={tweet} />
          <TweetCard input={input} tweet={tweet} />
          <TweetCard input={input} tweet={tweet} />
          <TweetCard input={input} tweet={tweet} />
        </div>
      </div>
    </div>
  )
}

export default Search
