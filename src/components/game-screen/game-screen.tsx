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

  finishIntro = () => {
    this.setState({
      screenName: 'in-game-main'
    })
  }

  render() {
    if (this.state.screenName === 'main-menu') {
      return (
        <MainMenu startNewGame={this.startNewGame} />
      )
    } else if (this.state.screenName === 'intro') {
      return (
        <Cutscene text={['Money Match Games presents', 'The 40th Esagame']} textFadeTime={150} textScreenTime={800} bgColor='#fff' textColor='#1f1' endHandler={this.finishIntro} />
      )
    } else if (this.state.screenName === 'in-game-main') {
      return (
        <InGameView />
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
