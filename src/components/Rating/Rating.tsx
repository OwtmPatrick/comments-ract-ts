import React from 'react';
import { ChipProps } from '@mui/material';
import { Chip } from './Rating.styles';
import getRatingColor from '../../utils/getRatingColor';

interface RatingProps extends ChipProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps): React.ReactElement => {
  const color = getRatingColor(rating);

  return <Chip label={rating} color={color} />;
};

export default Rating;
