import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CommentsList from './components/CommentsList';

import { Provider, rootStore } from './store';

function App() {
  return (
    <Provider value={rootStore}>
      <CommentsList />
    </Provider>
  );
}

export default App;
