import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import Comment from '../Comment';
import CommentLoader from '../CommentLoader';

import { LoadingState } from '../../types';

const CommentsList = () => {
  const {
    commentsStore: { comments, loading }
  } = useStore();

  if (loading === LoadingState.PENDING) {
    return (
      <>
        {Array(2)
          .fill(0)
          .map((_, index: number) => (
            <CommentLoader key={index} />
          ))}
      </>
    );
  }

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
};

export default observer(CommentsList);
