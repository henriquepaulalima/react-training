import { Component } from "react";
import ReactDOM from 'react-dom/client';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  render() { 
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}

        <div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
      </div>
    );
  }
}
 
function LogoutButton(props) {
  return ( 
    <button onClick={props.onClick}>
      Logout
    </button>
   );
}

function LoginButton(props) {
  return ( 
    <button onClick={props.onClick}>
      Login
    </button>
   );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function UserGreeting(props) {
  return <h1>Welsome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting isLoggedIn={false} />);

export default LoginControl;