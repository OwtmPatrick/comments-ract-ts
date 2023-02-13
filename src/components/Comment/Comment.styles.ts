import { Card as MuiCard, styled } from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',

  '& .MuiCardHeader-root': {
    position: 'relative',

    '&:before': {
      content: "''",
      position: 'absolute',
      left: '16px',
      bottom: 0,
      width: 'calc(100% - 32px)',
      height: '1px',
      backgroundColor: theme.palette.grey[300]
    }
  },

  '& .MuiAvatar-root': {
    backgroundColor: theme.palette.primary.main
  }
}));
