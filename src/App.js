import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'
import Random from './components/Random'
import Navigation from './components/Navigation'
import './Navigation.css'

function App () {
  return (
    <Router>
      <div className='app'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/random' component={Random} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
