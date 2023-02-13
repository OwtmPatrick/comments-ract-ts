import React from 'react';
import { observer } from 'mobx-react-lite';
import { Stack } from '@mui/material';
import { getSnapshot } from 'mobx-state-tree';
import { useStore } from '../../store';

import Comment from '../Comment';

const CommentsList = observer(() => {
  const {
    commentsStore: { comments }
  } = useStore();

  console.log(getSnapshot(comments));

  return (
    <Stack spacing={2} alignItems="center" sx={{ padding: 5 }}>
      {comments.map(({ id, incrementRating, decrementRating, toggle, timeAgo, ...rest }) => (
        <Comment
          key={id}
          id={id}
          incrementRating={incrementRating}
          decrementRating={decrementRating}
          timeAgo={timeAgo}
          toggle={toggle}
          {...rest}
        />
      ))}
    </Stack>
  );
});

export default CommentsList;
