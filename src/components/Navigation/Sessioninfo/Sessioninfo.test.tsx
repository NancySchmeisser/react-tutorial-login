import React from 'react';
import ReactDOM from 'react-dom';
import Sessioninfo from './Sessioninfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sessioninfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
