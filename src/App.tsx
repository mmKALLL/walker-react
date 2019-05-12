import React, { Component } from 'react'
import './App.sass'
import MainMenu from './components/main-menu/main-menu';
import GameView from './components/action-panel/action-panel';
import Cutscene from './components/cutscene/cutscene';

export default class App extends Component<{}, { gameScreen: string }> {
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
        <GameScreen screenName={this.state.gameScreen} startNewGame={this.startNewGame} finishIntro={this.finishIntro} />
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
      <Cutscene text={['Money Match Games presents', 'The 40th Esagame']} textFadeTime={2000} textScreenTime={2000} bgColor='#fff' textColor='#111' endHandler={props.finishIntro} />
    )
  } else if (props.screenName === 'in-game-main') {
    return (
      <GameView takeStepHandler={props.takeStepHandler} />
    )
  } else {
    return (
      <>
        error in gameScreen state, please post issue at https://github.com/mmKALLL/walker-react
      </>
    )
  }

}
