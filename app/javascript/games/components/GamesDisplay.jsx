import React from 'react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'
import GameCover from './GameCover'
import GameData from './GameData'
import GameFooter from './GameFooter'
import GameNavigation from './GameNavigation'

class GamesDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fireRedirect: false,
      game: {}
    }
  }

  fetchGame(id) {
    axios.get(`api/v1/games/${id}`)
      .then(res => {
        this.setState({ game: res.data })
      })
      .catch(err => {
        this.setState({ fireRedirect: true })
      })
  }

  setGameIdFromQueryString(qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.game) {
      this.gameId = Number(this.qsParams.game)
    } else {
      this.gameId = this.props.startingGameId
      this.props.history.push(`/?game=${this.gameId}`)
    }
  }

  componentDidMount() {
    this.setGameIdFromQueryString(this.props.location.search)
    this.fetchGame(this.gameId)
  }

  componentWillReceiveProps(nextProps) {
    this.setGameIdFromQueryString(nextProps.location.search)
    this.fetchGame(this.gameId)
  }

  render() {
    const game = this.state.game
    const nextGameId = game.next_id
    const prevGameId = game.prev_id

    return (
      <div className='game-container'>
        { this.state.fireRedirect && <Redirect to={'/'} /> }
        { prevGameId
          && <GameNavigation direction='prev' otherGameId={prevGameId} /> }
        <div className='game'>
          <GameCover game={this.state.game} />
          <GameData game={this.state.game} />
        </div>
        { nextGameId
          && <GameNavigation direction='next' otherGameId={nextGameId} /> }
        { this.state.game.id !== parseInt(this.props.startingGameId, 10)
            && <GameFooter startingGameId={this.props.startingGameId} /> }
      </div>
    )
  }
}

export default GamesDisplay
