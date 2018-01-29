import React from 'react';
import ReactDOM from 'react-dom';

import CropList from './components/CropList';

it('renders crops list', () => {
  const div = document.createElement('section');
  ReactDOM.render(<CropsList />, div);
});