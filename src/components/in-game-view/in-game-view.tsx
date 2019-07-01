import React from 'react'
import FooterArea from '../footer-area/footer-area';
import StatusArea from '../status-area/status-area';
import ActionPanel from '../action-panel/action-panel';

interface State {
  stepCount: number
  position: number
}

export default class InGameView extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      stepCount: 0,
      position: 0, // Can step both forward and back
    }
  }

  render() {
    return (
      <div className='game-container'>
        <StatusArea stepCount={ this.state.stepCount } position={ this.state.position } />
        <ActionPanel
            takeStepHandler={(steps) => this.setState((state) => ({
              stepCount: state.stepCount + Math.abs(steps),
              position: state.position + steps
            }))}
            />
        <FooterArea />
      </div>
    )
  }
}

