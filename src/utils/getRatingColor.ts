const getRatingColor = (
  rating: number
): 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' => {
  if (rating < 0) {
    return 'error';
  }

  if (rating > 0) {
    return 'success';
  }

  return 'default';
};

export default getRatingColor;
