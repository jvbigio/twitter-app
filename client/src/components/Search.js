import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import TweetCard from './TweetCard'
import './Search.css'
import axios from 'axios'

function Search () {
  const [input, setInput] = useState('')
  // const [searchTwitterContent, setSearchTwitterContent] = useState([])
  const [user, setUser] = useState([])
  // const [loading, setLoading] = useState(false) // add spinner if time permitting

  const getUserInput = e => {
    setInput(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log(input)
    // setInput('')
    // try {
    //   const response = await axios.get('/api/tweets/search')
    //   console.log(response.data)
    // } catch (err) {
    //   console.error(err)
    // }
    e.target.reset()
  }

  const getTweetContent = async () => {
    const response = await axios.get('/api/tweets/search')

    setSearchTwitterContent(response.data)
  }

  const getUser = async () => {
    const response = await axios.get('/api/tweets/user')
    setUser(response.data)
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <Form onSubmit={handleSearch} inline className='search-box' autoComplete='off'>
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
