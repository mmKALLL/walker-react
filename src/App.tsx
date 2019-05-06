import React, { Component } from 'react'
import './App.sass'
import MainMenu from './components/main-menu/main-menu';

export default class App extends Component {
  constructor(props: any) {
    super(props)
    this.state = { gameScreen: 'main-menu' }
  }

  startNewGame = () => {
    console.log('start intro')
    this.setState({
      gameScreen: 'intro'
    })
  }

  finishIntro = () => {
    this.setState({
      gameScreen: 'in-game-main'
    })
  }

  render() {
    return (
      <div className="App">
        <MainMenu startNewGame={this.startNewGame} />
      </div>
    )
  }
}
