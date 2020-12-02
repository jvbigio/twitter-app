import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import TweetCard from '../components/TweetCard'
// import '../TweetCard.css'
import axios from 'axios'

function Search () {
  const [input, setInput] = useState('')

  const getUserInput = e => {
    // // test
    // const target = e.target
    // const value = target.type === 'text' ? target.value : null
    // const name = target.name
    // setInput({ [name]: value })
    // // end test
    setInput(e.target.value)
  }

  const executeSearch = (e) => {
    e.preventDefault()
    // do something
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
              // // test:
              // name='users'
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
