import React from 'react';
import { Stack } from '@mui/system';
import { CssBaseline } from '@mui/material';
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

      <CssBaseline />
    </Provider>
  );
}

export default App;
