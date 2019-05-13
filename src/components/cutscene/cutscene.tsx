import React from 'react'
import './cutscene.sass'

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
  textIndex: number
}

export default class Cutscene extends React.Component<Props, State> {
  private interval: number | null = null

  constructor(props: Props) {
    super(props)
    this.state = {
      textIndex: 0
    }
  }

  componentDidMount() {
    this.interval = window.setInterval(() => this.advanceText, this.props.textScreenTime + this.props.textFadeTime * 2);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  currentText = () => this.props.text[this.state.textIndex]

  advanceText = () => {
    if (this.state.textIndex >= this.props.text.length) {
      this.props.endHandler()
    }
    this.setState((state: State) => {
      return {
        textIndex: state.textIndex + 1
      }
    })
  }

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
      <div className='cutscene-text'>
        { props.text }
      </div>
    </>
  )
}
