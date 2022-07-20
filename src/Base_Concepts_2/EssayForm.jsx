import { Component } from "react";

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Please write a essay about your favorite react hook.'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(`You submited a essay: ${this.state.value}`);
    event.preventDefault();
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default EssayForm;