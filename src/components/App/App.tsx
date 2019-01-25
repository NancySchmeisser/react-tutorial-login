import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

class App extends Component <any,any> {
  constructor(props: any) {
    super(props)

    this.state={
      session: null,
    }
  }

  logout=() => {
    this.setState({session:null})
  }
  
  handleLogIn=(email: string) => {
    this.setState(
      {
        session:
        {
          currentUser: email + ""
        }
      }
    )
  }

  render() {
    return (
      <div className="App">
       <Navigation session={this.state.session} onLogOut={this.logout}/>
       <Main session={this.state.session} handleLogIn={this.handleLogIn}/>

         
      </div>
        );
      }
    }
    
    export default App;
