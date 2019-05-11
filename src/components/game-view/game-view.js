import React from 'react'
import FooterArea from '../footer-area/footer-area';

export default class GameView extends React.Component {
  constructor(props) {
    super.props
    this.state = {
      stepCount = 0,
      position = 0,
    }
  }

  render() {
    return (
      <div className='game-container'>
        <StatusArea stepCount={ state.stepCount } position={ state.position } />
        <ActionPanel
            takeStepHandler={(amount) => this.setState((state) => {
                stepCount = state.stepCount + Math.abs(amount),
                position = state.stepCount + amount
            })}
            />
        <FooterArea />
      </div>
    )
  }
}

