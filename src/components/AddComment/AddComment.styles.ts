import { IconButton as MuiIconButton, Dialog as MuiDialog, styled } from '@mui/material';

export const IconButton = styled(MuiIconButton)({
  padding: 0
});

export const Dialog = styled(MuiDialog)({
  '& .MuiDialog-paper': { width: '100%' }
});
