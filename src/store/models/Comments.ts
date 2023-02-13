import { types } from 'mobx-state-tree';
import Comment from './Comment';

import { Comment as CommentType } from '../../types';

const CommentStore = types
  .model('CommentsStore', {
    comments: types.array(Comment)
  })
  .actions((self) => ({
    addComment(data: CommentType) {
      self.comments.push(data);
    }
  }));

export default CommentStore;
