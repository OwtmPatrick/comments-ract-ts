import { Stack, Card as MuiCard, CardContent as MuiCardContent, styled } from '@mui/material';

export const Card = styled(MuiCard)({
  width: '100%'
});

export const CardHeader = styled(Stack)(({ theme }) => ({
  position: 'relative',
  padding: '16px',

  '& .MuiSkeleton-text': {
    flexGrow: 1
  },

  '&:before': {
    content: "''",
    position: 'absolute',
    left: '16px',
    bottom: 0,
    width: 'calc(100% - 32px)',
    height: '1px',
    backgroundColor: theme.palette.grey[300]
  }
}));

export const CardContent = styled(MuiCardContent)({
  paddingBottom: '15px !important'
});
