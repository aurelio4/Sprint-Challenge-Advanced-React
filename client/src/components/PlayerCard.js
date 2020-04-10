import React from 'react'
import axios from 'axios'
import '../App.css'

export default class PlayerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playersData: []
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({ 
        playersData: res.data,
        loading: false 
      }))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div className="players">
        {this.state.playersData.map(player => {
          return <div className="player-card">
            <h1 id="player-name">{player.name}</h1>
            <h3 id="player-country">{player.country}</h3>
            <p id="player-searches">Searches appeared in: {player.searches}</p>
          </div>
        })}
      </div>  
    )
  }
}