import React from 'react';
import { observer } from 'mobx-react-lite';
import CommentsList from './CommentsList';

import { useStore } from '../../store';

import { LoadingState } from '../../types';

const Container = () => {
  const {
    commentsStore: { comments, loading }
  } = useStore();

  return <CommentsList comments={comments} loading={loading === LoadingState.PENDING} />;
};

export default observer(Container);
