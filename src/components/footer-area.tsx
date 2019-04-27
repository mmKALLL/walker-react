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
        <div class="copyright-notice"> &copy; Esa Koskinen 2019 </div>
        <button onClick={() => this.setState({ liked: true }) }>Like</button>
      </React.Fragment>
    )
  }
}

const domContainer = document.querySelector('.footer-area');
ReactDOM.render(e(LikeButton), domContainer);
