import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
// import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import TweetCard from './TweetCard'
import './Search.css'
import axios from 'axios'

function Search (props) {
  const [input, setInput] = useState('')
  const [tweets, setTweets] = useState([])
  const [radioButton, setRadioButton] = useState({ selected: 'content' })
  const [formValidation, setFormValidation] = useState(null)

  const handleRadioBtn = (e) => {
    setRadioButton({ selected: e.target.value })
  }

  const getUserInput = e => {
    setInput(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()

    // const isFormValid = !e.target.value ? 'invalid' : null
    if (!e.target.value) {
      console.log('blank')
      setFormValidation('invalid')
    }

    // classes += !e.target.value ? classes : null

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

  // const isFormValid = !e.target.value ? 'invalid' : null
  // let classes = 'alert alert-warning'

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
            <Input
              formValidation
              type='text'
              placeholder='Search Twitter'
              value={input}
              onChange={(e) => getUserInput(e)}
            />
            <FormFeedback>Input field cannot be blank!</FormFeedback>
          </Form.Group>
          <Button id='search-btn' variant='primary' type='submit'>Search</Button>
        </Form>
      </div>
      {/* <div className='error-container' /> */}
      <div className='content-card'>
        <div className='wrapper'>
          {tweetCards}
        </div>
      </div>
    </div>
  )
}

export default Search
