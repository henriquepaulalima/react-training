import React, { ReactDOM } from "react";

function App() {
  return (
    <div>
      {/* <Welcome name="Henrique" /> */}

      <Clock />
    </div>
  );
}

// Function Component example
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// State example

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, Henrique</h1>
//       <h2>It is {props.date.toLocalTimeString()}.</h2>
//     </div>
//   )
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, Henrique</h1>
        <h2>It is {this.props.date.toLocalTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

export default App;
