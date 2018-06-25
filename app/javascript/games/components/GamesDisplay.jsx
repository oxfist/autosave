import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

class GamesDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      game: {}
    }
  }

  fetchGame(id) {
    axios.get(`api/v1/games/${id}`)
      .then(res => {
        this.setState({ game: res.data })
      })
      .catch(err => {
        console.error(err)
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
      <div>
        { prevGameId && <Link to={`/?game=${prevGameId}`}>Previous</Link> }
        { nextGameId && <Link to={`/?game=${nextGameId}`}>Next</Link> }
        <p>{game.title}</p>
        <p>{game.release_year}</p>
        <p>{game.comment}</p>
        <p>{game.image}</p>
      </div>
    )
  }
}

export default GamesDisplay
