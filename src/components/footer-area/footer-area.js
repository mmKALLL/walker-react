import React from 'react'
import Button from '../button/button';
import './footer-area.sass'

export default class FooterArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() {
    return(
      <div className="footer-container">
        <LikeButton liked={this.state.liked} onClick={() => this.setState({ liked: true })} />
        <div className="copyright-notice"> &copy; Esa Koskinen 2019 </div>
      </div>
    )
  }
}

function LikeButton(props) {
  if (props.liked) {
    return <div>You liked this!</div>
  } else {
    return <Button onClick={props.onClick} text="Like" />
  }
}
