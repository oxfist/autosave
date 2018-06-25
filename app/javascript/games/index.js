import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const games = document.querySelector('#games')
ReactDOM.render(<App startingGameId={games.dataset.startingGameId}/>, games)
