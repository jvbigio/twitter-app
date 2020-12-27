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

  const getUserInput = e => {
    setInput(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log(input)

    axios
      .get(`/api/tweets/content?search_term=${input}`)
      .then(response => setTweet(response.data))
      .catch(err => console.error(err))
    e.target.reset()
  }

  console.log(tweet)

  return (
    <div className='container'>
      <div className='form-container'>
        <Form onSubmit={handleSearch} inline className='search-box' autoComplete='off'>
          <Form.Check
            type='radio'
            className='mb-2 mr-sm-2'
            id='inlineFormRadio'
            label='By content'
          />
          <Form.Check
            type='radio'
            className='mb-2 mr-sm-2'
            id='inlineFormRadio'
            label='By username'
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
        <TweetCard input={input} />
      </div>
    </div>
  )
}

export default Search
