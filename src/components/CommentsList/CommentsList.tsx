import React from 'react';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import { useStore } from '../../store';

const CommentsList = observer(() => {
  const {
    commentsStore: { comments }
  } = useStore();

  console.log(getSnapshot(comments));

  return <div>list</div>;
});

export default CommentsList;
