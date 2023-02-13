import React from 'react';
import { Stack } from '@mui/system';
import reactLogo from './assets/react.svg';
import './App.css';
import AddComment from './components/AddComment';
import CommentsList from './components/CommentsList';

import { Provider, rootStore } from './store';

function App() {
  return (
    <Provider value={rootStore}>
      <Stack spacing={2} alignItems="flex-start" sx={{ padding: 5 }}>
        <AddComment />

        <CommentsList />
      </Stack>
    </Provider>
  );
}

export default App;
