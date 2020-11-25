import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home'
import './Home.css'
import Search from './Pages/Search'
import Random from './Pages/Random'
import Navigation from './components/Navigation'
import './Navigation.css'

function App () {
  return (
    <Router>
      <div className='App'>
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
