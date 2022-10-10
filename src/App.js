import './style.css';

import React from 'react';

import ColorForm from './containers/ColorForm';
import ColorList from './containers/ColorList';
import Wallet from './containers/Wallet';

export default function App() {
  return (
    <div>
      <Wallet />
      <ColorList />
      <ColorForm />
    </div>
  );
}
