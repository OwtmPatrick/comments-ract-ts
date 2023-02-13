import { Card as MuiCard, styled } from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  textAlign: 'left',

  '& .MuiCardHeader-content': {
    flexGrow: 0
  },

  '& .MuiAvatar-root': {
    background: theme.palette.primary.main
  }
}));
