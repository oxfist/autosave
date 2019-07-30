import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const games = document.querySelector('#games')
const app = <App startingGameId={ games.dataset.startingGameId} />
ReactDOM.render(app, games)
