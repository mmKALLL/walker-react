'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return(
      <React.Fragment>
        <button onClick={() => this.setState({ liked: true }) }>Like</button>
        <span class="copyright-notice"> &copy; Esa Koskinen 2019 </span>
      </React.Fragment>
    )
  }
}

const domContainer = document.querySelector('.footer-area');
ReactDOM.render(e(LikeButton), domContainer);
