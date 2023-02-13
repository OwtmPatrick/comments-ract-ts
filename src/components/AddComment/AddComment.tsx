import React from 'react';
import { Stack, Button, TextField, DialogContent, Tooltip, Avatar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { FormikProps } from 'formik';

import { IconButton, Dialog } from './AddComment.styles';

interface AddCommentProps {
  open: boolean;
  toggleFormModal: () => void;
  handleCapture: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formik: FormikProps<{
    email: string;
    author: string;
    text: string;
    avatar: string;
  }>;
}

const AddComment = ({
  open,
  toggleFormModal,
  handleCapture,
  formik
}: AddCommentProps): React.ReactElement => {
  const { values, errors, touched, handleSubmit, handleChange } = formik;

  return (
    <>
      <Tooltip title="Add comment">
        <IconButton color="primary" aria-label="add comment" onClick={toggleFormModal}>
          <AddCircleRoundedIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      {open && (
        <Dialog open={open} onClose={toggleFormModal}>
          <form onSubmit={handleSubmit} noValidate>
            <DialogContent>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  fullWidth
                  name="author"
                  label="Author"
                  type="author"
                  value={values.author}
                  onChange={handleChange}
                  error={touched.author && Boolean(errors.author)}
                  helperText={touched.author && errors.author}
                />

                <TextField
                  fullWidth
                  name="text"
                  label="Text"
                  value={values.text}
                  onChange={handleChange}
                  error={touched.text && Boolean(errors.text)}
                  helperText={touched.text && errors.text}
                  multiline
                  rows={5}
                />

                <input
                  accept="image/*"
                  id="faceImage"
                  type="file"
                  onChange={handleCapture}
                  hidden
                />

                <Stack direction="row" justifyContent="space-between">
                  <label htmlFor="faceImage">
                    <Tooltip title="Select image">
                      {/* @ts-ignore */}
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  </label>

                  <Avatar src={values.avatar || undefined} />
                </Stack>

                <Button color="primary" variant="contained" fullWidth type="submit">
                  Add
                </Button>
              </Stack>
            </DialogContent>
          </form>
        </Dialog>
      )}
    </>
  );
};

export default AddComment;
