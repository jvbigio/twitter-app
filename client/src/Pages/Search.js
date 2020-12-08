import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import TweetCard from '../components/TweetCard'
// import '../TweetCard.css'
import './Search.css'

import axios from 'axios'

function Search () {
  const [input, setInput] = useState('')

  const getUserInput = e => {
    setInput(e.target.value)
  }

  const executeSearch = (e) => {
    e.preventDefault()
    console.log(input)
    setInput('')
    e.target.reset()
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <Form onSubmit={executeSearch} inline className='search-box' autoComplete='off'>
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
