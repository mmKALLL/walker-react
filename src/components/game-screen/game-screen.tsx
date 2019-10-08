import React from 'react'
import MainMenu from '../main-menu/main-menu';
import Cutscene from '../cutscene/cutscene';
import InGameView from '../in-game-view/in-game-view';


export default class GameScreen extends React.Component<{}, { screenName: string }> {

  constructor(props: any) {
    super(props)
    this.state = { screenName: 'main-menu' }
  }

  startNewGame = () => {
    console.log('start intro')
    this.setState({
      screenName: 'intro'
    })
  }

  startSavedGame = () => {
    console.log('load game')
    this.setState({
      screenName: 'in-game-main'
    })
  }

  finishIntro = () => {
    this.setState({
      screenName: 'in-game-main'
    })
  }

  render() {
    if (this.state.screenName === 'main-menu') {
      return (
        <MainMenu startNewGame={this.startNewGame} startSavedGame={this.startSavedGame} />
      )
    } else if (this.state.screenName === 'intro') {
      return (
        <Cutscene text={['Money Match Games presents', 'The 40th Studio Esagames production', 'This game is a product of fiction.', 'Any similarity to real-world names, places, or events is purely coincidental.', 'Not suitable for children or those who are easily disturbed.']} textFadeTime={250} textScreenTime={600} bgColor='#fff' textColor='#111' endHandler={this.finishIntro} />
      )
    } else if (this.state.screenName === 'in-game-main') {
      return (
        <InGameView initialState={loadGame()} />
      )
    } else {
      return (
        <>
          error in GameScreen state, please post issue at https://github.com/mmKALLL/walker-react
        </>
      )
    }
  }
}
