import React, { Component } from 'react'
import './App.sass'
import MainMenu from './components/main-menu/main-menu';
import GameView from './components/action-panel/action-panel';
import Cutscene from './components/cutscene/cutscene';

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
        <link href="https://fonts.googleapis.com/css?family=Charm|Gloria+Hallelujah|Noto+Sans+JP|Roboto+Slab" rel="stylesheet"></link>
        <MainMenu startNewGame={this.startNewGame} />
      </div>
    )
  }
}

function GameScreen(props: any) {
  if (props.screenName === 'main-menu') {
    return (
      <MainMenu startNewGame={props.startNewGame} />
    )
  } else if (props.screenName === 'intro') {
    return (
      <Cutscene text={['Money Match Games presents', 'The 40th Esagame']} bgColor='#ffffff' fadeTime='2000ms' textScreenTime='2000ms' endHandler={props.finishIntro} />
    )
  } else if (props.screenName === 'in-game-main') {
    return (
      <GameView takeStepHandler={props.takeStepHandler} />
    )
  }

}
