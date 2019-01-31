import React from 'react';
import ReactDOM from 'react-dom';
import LoginView from './LoginView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
