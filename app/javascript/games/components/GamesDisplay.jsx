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
      this.gameId = 1
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
    const nextGameId = Number(this.state.game.id) + 1

    return (
      <div>
        <Link to={`/?game=${nextGameId}`}>Next</Link>
        <p>{this.state.game.title}</p>
        <p>{this.state.game.release_year}</p>
        <p>{this.state.game.comment}</p>
        <p>{this.state.game.image}</p>
      </div>
    )
  }
}

export default GamesDisplay
