import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [value, (e) => setValues({ ...values, [e.target.name]: e.target.value })];
};
