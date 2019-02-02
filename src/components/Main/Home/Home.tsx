import React, { Component } from 'react';


class Home extends Component <any,any> {
    render() {
        return (
            <div className="Home">
                <h1>Guten Tag, {this.props.session.currentUser}!</h1>
            </div>
        );
    }
}

export default Home;
