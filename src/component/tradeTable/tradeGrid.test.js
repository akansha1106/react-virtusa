import React from 'react';
import ReactDOM from 'react-dom';
import SimpleTable from './tradeGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
