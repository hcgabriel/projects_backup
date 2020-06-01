import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Chats from './Chats';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Chats /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
