import React from 'react';

import { Skeleton as MuiSkeleton } from '@mui/material';

import { Card, CardHeader, CardContent } from './CommentLoader.styles';

const Skeleton = () => (
  <Card>
    <CardHeader spacing={1} direction="row">
      <MuiSkeleton variant="circular" width={40} height={40} />

      <MuiSkeleton variant="text" />
    </CardHeader>

    <CardContent>
      <MuiSkeleton variant="text" sx={{ fontSize: '18px' }} />

      <MuiSkeleton variant="text" sx={{ width: '30%' }} />

      <MuiSkeleton variant="rounded" height={30} sx={{ marginTop: '20px' }} />
    </CardContent>
  </Card>
);

export default Skeleton;
