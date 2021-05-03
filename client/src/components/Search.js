import React, { useState } from 'react'
import TweetCard from './TweetCard'
import './Search.css'

import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

import axios from 'axios'

function Search () {
  const [input, setInput] = useState('')
  const [tweets, setTweets] = useState([])
  const [radioButton, setRadioButton] = useState({ selected: 'content' })
  // const errorMSG = ['warning']

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

    // add warning if button clicked and input blank?
    // if (!input) {
    //   <Alert variant='warning'>
    //     Input field cannot be blank!
    //   </Alert>
    //   // console.log('input blank') // works
    // }

    // formValidation(e)

    // if (!e.target.value) {
    //   // console.log('blank') // works
    //   // <Alert variant='warning' style={{ display: 'block' }} />
    //   <Alert variant='warning' style={{ display: 'block' }}>Input cannot be blank!</Alert>

    // errorMSG.map((variant, idx) => (
    //   <Alert key={idx} variant={variant} style={{ display: 'block' }}>
    //     Input field cannot be blank!
    //   </Alert>
    // ))
    // }

    // const errorMSG = (e) => {
    //   return <Alert variant='warning' style={!e.target.value ? { display: 'block' } : { display: 'none' }} />
    // }

    axios
      .get(radioButton.selected === 'content' ? contentUrl : usernameUrl)
      .then(response => setTweets(response.data))
      .catch(err => console.error(err))

    setInput('')
  }

  // const formValidation = (e) => {
  //   if (!e.target.value) {
  //     console.log('blank') // works
  //     // <Alert variant='warning' style={{ display: 'block' }} />
  //     // <Alert variant='warning' style={{ display: 'block' }}>Input cannot be blank!</Alert>

  //   // errorMSG.map((variant, idx) => (
  //   //   <Alert key={idx} variant={variant} style={{ display: 'block' }}>
  //   //     Input field cannot be blank!
  //   //   </Alert>
  //   // ))
  //   }
  // }

  const tweetCards = tweets.map(tweet => {
    return <TweetCard key={tweet.id} tweet={tweet} />
  })

  return (
    <div className='container'>
      <div className='form-container'>
        <Form onSubmit={handleSearch} inline className='search-box' autoComplete='off'>
          <div className='flex-container inline'>
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
          </div>
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
      <div className='error-container'>
        {/* {errorMSG.map((variant, idx) => (
          <Alert key={idx} variant={variant} style={{ display: 'block' }}>
            Input field cannot be blank!
          </Alert>
        ))} */}
        {/* {errorMSG.map((variant, idx) => (
          <Alert key={idx} variant={variant} style={!handleSearch || !input ? { display: 'block' } : { display: 'none' }}>
            Input field cannot be blank!
          </Alert>
        ))} */}
        <Alert variant='warning' style={handleSearch && !input ? { display: 'block' } : { display: 'none' }}>Input cannot be blank!</Alert>
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
