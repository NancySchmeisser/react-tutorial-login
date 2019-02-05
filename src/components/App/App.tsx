import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Session from '../../state/Session';

interface AppState {
  session: Session
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props)

    this.state = {

      session: {
        isLoggedIn: false,
        currentUser: "",
      },
    }
  }

  handleLogout = () => {
    this.setState({
      session: {
        isLoggedIn: false,
        currentUser: "",
      },
    })
  }

  handleLogIn = (email: string) => {
    this.setState(
      {
        session:
        {
          isLoggedIn: true,
          currentUser: email + ""
        }
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Navigation session={this.state.session} handleLogout={this.handleLogout} />
        <Main session={this.state.session} handleLogIn={this.handleLogIn} />
      </div>
    );
  }
}


export default App;
