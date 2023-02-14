import { types, cast, flow } from 'mobx-state-tree';
import Comment from './Comment';

import sleep from '../../utils/sleep';

import { Comment as CommentType, LoadingState } from '../../types';

const CommentStore = types
  .model('CommentsStore', {
    comments: types.array(Comment),
    loading: types.enumeration('loadingState', [
      LoadingState.IDLE,
      LoadingState.PENDING,
      LoadingState.SUCCESS,
      LoadingState.ERROR
    ])
  })
  .actions((self) => ({
    loadComments: flow(function* () {
      self.loading = LoadingState.PENDING;

      try {
        const response = yield fetch('./data.json');
        const data = yield response.json();

        yield sleep(1500);

        self.comments = cast(data.map((item: CommentType) => ({ ...item, hidden: false })));
        self.loading = LoadingState.SUCCESS;
      } catch (e) {
        self.loading = LoadingState.ERROR;
      }
    }),
    addComment(data: CommentType) {
      self.comments.push(data);
    }
  }));

export default CommentStore;
