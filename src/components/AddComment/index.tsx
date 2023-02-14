import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import AddComment from './AddComment';
import { LoadingState } from '../../types';

import validationSchema from './validationSchema';

import getId from '../../utils/getId';

import { useStore } from '../../store';

const Container = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    commentsStore: { addComment, loading }
  } = useStore();

  const formik = useFormik({
    initialValues: {
      email: '',
      author: '',
      text: '',
      avatar: ''
    },
    validationSchema,
    onSubmit: (values) => {
      addComment({
        ...values,
        id: getId(),
        date: new Date(),
        rating: 0,
        hidden: false
      });

      formik.resetForm();
      toggleFormModal();
    }
  });

  const toggleFormModal = () => setOpen(!open);

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      formik.setFieldValue('avatar', reader.result);
    };
  };

  return (
    <AddComment
      open={open}
      disabled={loading === LoadingState.PENDING}
      toggleFormModal={toggleFormModal}
      formik={formik}
      handleCapture={handleCapture}
    />
  );
};

export default observer(Container);
