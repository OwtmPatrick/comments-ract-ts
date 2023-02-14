import React, { useEffect } from 'react';
import { Stack } from '@mui/system';
import { CssBaseline } from '@mui/material';
import AddComment from './components/AddComment';
import CommentsList from './components/CommentsList';

import { useStore } from './store';

function App() {
  const {
    commentsStore: { loadComments }
  } = useStore();

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <>
      <Stack
        spacing={2}
        alignItems="flex-start"
        sx={{ maxWidth: '500px', padding: 1, margin: '0 auto' }}
      >
        <AddComment />

        <CommentsList />
      </Stack>

      <CssBaseline />
    </>
  );
}

export default App;
