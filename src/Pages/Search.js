import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import TweetCard from '../components/TweetCard'
// import '../TweetCard.css'
import axios from 'axios'

function Search () {
  const [input, setInput] = useState('')

  const getUserInput = e => {
    // console.log(e.target.value)
    setInput(e.target.value)
  }

  const executeSearch = (e) => {
    e.preventDefault()
    console.log(`Typed: ${input}`)
    // do something
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
              onChange={(e) => getUserInput(e)}
            />
          </Form.Group>
          <Button id='search-btn' variant='primary' type='submit'>Search</Button>
        </Form>
      </div>
      <div className='content-card'>
        <TweetCard />
      </div>
    </div>
  )
}

export default Search
