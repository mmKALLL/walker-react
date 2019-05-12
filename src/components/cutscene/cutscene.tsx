import React from 'react'

interface Props extends TextSettings {
  text: string[]
  endHandler: () => void
}

interface TextSettings {
  textScreenTime: number // milliseconds
  textFadeTime: number
  textColor: string
  bgColor: string
}

interface State {
  textStartTime: number,
  textIndex: number
}

export default class Cutscene extends React.Component<Props, State> {
  private interval: NodeJS.Timeout? = null

  constructor(props: Props) {
    super(props)
    this.state = {
      textStartTime: Date.now(),
      textIndex: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.advanceText, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  currentText = () => this.props.text[this.state.textIndex]
  advanceText = () => this.setState((state: State) => {
    return {
      textStartTime: Date.now(),
      textIndex: state.textIndex + 1
    }
  })

  render() {
    return (
      <>
        <CutsceneText text={this.currentText()} settings={ this.props } />
   {/* text={['Money Match Games presents', 'The 40th Esagame']} bgColor='#ffffff' fadeTime='2000ms' textScreenTime='2000ms' endHandler={props.finishIntro} */}
      </>
    )
  }
}

function CutsceneText(props: { text: string, settings: TextSettings }) {
  return (
    <>
    </>
  )
}
