import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import GamesDisplay from './GamesDisplay'

const App = (props) => (
  <Router startingGameId={props.startingGameId}>
    <div>
      <Route
        path='/'
        startingGameId={props.startingGameId}
        render={routeProps => <GamesDisplay {...props} {...routeProps} />}
      />
    </div>
  </Router>
)

export default App
