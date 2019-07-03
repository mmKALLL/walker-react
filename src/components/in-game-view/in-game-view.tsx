import React from 'react'
import FooterArea from '../footer-area/footer-area';
import StatusArea from '../status-area/status-area';
import ActionPanel from '../action-panel/action-panel';
import MoodHandler from '../mood-handler/mood-handler';

interface State {
  stepCount: number
  position: number
  mood: Mood
}

export default class InGameView extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      stepCount: 0,
      position: 0, // Can step both forward and back
      mood: {
        overall: 40,
        r: 0,
        g: 0,
        b: 0
      }
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
        <MoodHandler mood={ this.state.mood } />
      </div>
    )
  }
}

export type Mood = {
  overall: number // 0-155. General mood level.
  r: number // 0-100. Love, passion, bonds.
  g: number // 0-100. Optimism, wellbeing, altruism.
  b: number // 0-100. Rationality, thinking, calmness.
}
