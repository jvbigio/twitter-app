import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import TweetCard from '../components/TweetCard'
// import '../TweetCard.css'

function Search () {
  return (
    <div className='container'>
      <div className='form-container'>
        <Form inline className='search-box' autoComplete='off'>
          <Form.Group controlId='search'>
            <Form.Control type='text' placeholder='Search Twitter' />
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
