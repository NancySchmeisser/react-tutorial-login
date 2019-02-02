import React from 'react';
import ReactDOM from 'react-dom';
import EmailReminderView from './EmailReminderView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailReminderView />, div);
  ReactDOM.unmountComponentAtNode(div);
});