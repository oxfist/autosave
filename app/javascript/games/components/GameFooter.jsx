import React from 'react'
import { Link } from 'react-router-dom'

const GameFooter = (props) => (
  <div id='footer'>
    <Link className='btn btn-primary' to={`/?game=${props.startingGameId}`}>
      Back to beginning
    </Link>
  </div>
)

export default GameFooter
