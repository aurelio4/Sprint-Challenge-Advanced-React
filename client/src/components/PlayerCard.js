import React from 'react'
import './PlayerCard.css'

export default function PlayerCard(props) {
  return(
    <div className="players">
      {props.players.map(player => {
        return <div className="player-card">
          <h1 id="player-name">{player.name}</h1>
          <h3 id="player-country">{player.country}</h3>
          <p id="player-searches">Searches appeared in: {player.searches}</p>
        </div>
      })}
    </div>  
  )
}