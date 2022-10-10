import './style.css';

import React from 'react';

import ColorList from './containers/ColorList';
import Wallet from './containers/Wallet';

export default function App() {
  return (
    <div>
      <Wallet />
      <ColorList />
    </div>
  );
}
