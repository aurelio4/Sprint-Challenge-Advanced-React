import React from 'react'
import PlayerCard from './components/PlayerCard'
import axios from 'axios'
import './App.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
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
    return (
      this.state.loading
      ? <p>Loading...</p>
      : 
      <>
        <h1>App.js</h1>
        {console.log(this.state.playersData)}
        <PlayerCard players={this.state.playersData} />
      </>
    )
  }
}
