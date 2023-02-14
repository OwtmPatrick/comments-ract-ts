import { types } from 'mobx-state-tree';

import { MINIMUM_RATING_FOR_HIDDEN_COMMENT } from '../../constants';

const Comment = types
  .model('Comment', {
    id: types.identifier,
    text: types.string,
    author: types.string,
    avatar: types.maybeNull(types.string),
    date: types.Date,
    rating: types.number,
    hidden: types.boolean
  })
  .views((self) => ({
    timeAgo(): string {
      const difference = new Date().getTime() - self.date.getTime();
      const minute = 1000 * 60;
      const hour = 1000 * 60 * 60;
      const day = 1000 * 60 * 60 * 24;

      if (difference < minute) {
        return 'just now';
      }

      if (difference < hour) {
        const diff = Math.round(difference / minute);

        return `${diff} minute${diff > 1 ? 's' : ''} ago`;
      }

      if (difference < day) {
        const diff = Math.round(difference / hour);

        return `${diff} hour${diff > 1 ? 's' : ''} ago`;
      }

      const diff = Math.round(difference / day);

      return `${diff} day${diff > 1 ? 's' : ''} ago`;
    }
  }))
  .actions((self) => ({
    incrementRating() {
      self.rating += 1;
    },
    decrementRating() {
      self.rating -= 1;

      if (self.rating < MINIMUM_RATING_FOR_HIDDEN_COMMENT) {
        self.hidden = true;
      }
    },
    toggle() {
      self.hidden = !self.hidden;
    }
  }));

export default Comment;
