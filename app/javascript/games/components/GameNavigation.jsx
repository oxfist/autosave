import React from 'react'
import { Link } from 'react-router-dom'

const GameNavigation = (props) => {
  let linkDirection = ''
  let angleBracketDirection = ''

  if (props.direction === 'prev') {
    linkDirection = 'prev'
    angleBracketDirection = 'left'
  } else {
    linkDirection = 'next'
    angleBracketDirection = 'right'
  }

  return (
    <Link
      className={`link-${linkDirection}`}
      to={`/?game=${props.otherGameId}`}
    >
      <i className={`fa fa-angle-${angleBracketDirection}`} aria-hidden='true'>
        <span />
      </i>
    </Link>
  )
}

export default GameNavigation
