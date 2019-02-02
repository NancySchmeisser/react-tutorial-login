import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { any } from 'prop-types';

it('renders without crashing', () => {

  const fakeSession: any = { currentUser: "Test" }
  const div = document.createElement('div');
  ReactDOM.render(<Home session={fakeSession}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
