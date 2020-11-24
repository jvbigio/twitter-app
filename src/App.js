import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'
import Random from './components/Random'
import Error from './components/Error'
import Navigation from './components/Navigation'

function App() {
  return (
     <BrowserRouter>
      <div>
        <Navigation />
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path="/search" component={Search}/>
            <Route path="/random" component={Random}/>
          <Route component={Error}/>
          </Switch>
      </div> 
    </BrowserRouter>
  )
}

export default App
