import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import GamesDisplay from './GamesDisplay'

const App = (props) => (
  <Router>
    <div>
      <Route
        path='/'
        component={GamesDisplay}
      />
    </div>
  </Router>
)

export default App
