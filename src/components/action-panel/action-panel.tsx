import React from 'react'
import Button from '../button/button';

interface Props {
  takeStepHandler: (steps: number) => void
}

export default function GameView(props: Props) {
  return (
    <>
      <Button text="Step forward" className="button primary-action-button" onClick={props.takeStepHandler(1)} />
      <Button text="Take a step back" className="button primary-action-button" onClick={props.takeStepHandler(-1)} />
    </>
  )
}
