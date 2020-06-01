import React from 'react';
import ReactDOM from 'react-dom';
import Components from './Components';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
  Polar: () => null,
  Pie: () => null,
  Radar: () => null,
  Bar: () => null,
  Doughnut: () => null,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Components />, div);
  ReactDOM.unmountComponentAtNode(div);
});