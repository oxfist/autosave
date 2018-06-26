import React from 'react'

const GameData = (props) => (
  <div className='game-data'>
    <blockquote className='game-comment'>{props.game.comment}</blockquote>
    <div className='game-title'>{props.game.title}</div>
    <div className='game-release_year'>{props.game.release_year}</div>
  </div>
)

export default GameData
