import React from 'react';
import {
  Avatar,
  Button,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  IconButton,
  Stack
} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import Rating from '../Rating';
import { Card } from './Comment.styles';

import { Comment as CommentType } from '../../types';

export interface CommentProps extends CommentType {
  incrementRating: () => void;
  decrementRating: () => void;
  timeAgo: () => string;
  toggle: () => void;
}

const Comment = ({
  text,
  author,
  rating,
  avatar,
  hidden,
  incrementRating,
  decrementRating,
  timeAgo,
  toggle
}: CommentProps): React.ReactElement => {
  if (hidden) {
    return (
      <Button variant="outlined" onClick={toggle}>
        Open comment
      </Button>
    );
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" src={avatar || undefined}>
            {avatar || author[0]}
          </Avatar>
        }
        title={author}
      />

      <CardContent>
        <Typography variant="body1" color="text.primary">
          {text}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {timeAgo()}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="increment rating" onClick={incrementRating}>
            <AddCircleOutline />
          </IconButton>

          <IconButton aria-label="decrement rating" onClick={decrementRating}>
            <RemoveCircleOutline />
          </IconButton>
        </Stack>

        <Rating rating={rating} size="medium" />
      </CardActions>
    </Card>
  );
};

export default Comment;
