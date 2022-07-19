import { Component } from "react";
import ReactDOM from "react-dom/client";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div>Warning!</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);

export default Page;