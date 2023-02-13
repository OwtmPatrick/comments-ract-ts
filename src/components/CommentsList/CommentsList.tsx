import React from 'react';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import { useStore } from '../../store';

import Comment from '../Comment';

const CommentsList = observer(() => {
  const {
    commentsStore: { comments }
  } = useStore();

  console.log(getSnapshot(comments));

  return (
    <>
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
    </>
  );
});

export default CommentsList;
