import { types } from 'mobx-state-tree';

import commentsStore from './Comments';
import { LoadingState } from '../../types';

export const RootModel = types.model({
  commentsStore
});

export const initialState = RootModel.create({
  commentsStore: {
    comments: [],
    loading: LoadingState.IDLE
  }
});
