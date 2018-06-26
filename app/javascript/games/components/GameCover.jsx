import React from 'react'

const GameCover = (props) => (
  <div className='game-cover'>
    <img src={props.game.image} />
  </div>
)

export default GameCover
