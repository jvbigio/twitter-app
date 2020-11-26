import React from 'react'
import Form from 'react-bootstrap/Form'

function Search () {
  return (
    <Form className='search-box' autoComplete='off'>
      <Form.Group controlId='search'>
        <Form.Control type='text' placeholder='Search Twitter' />
      </Form.Group>
    </Form>
  )
}

export default Search
