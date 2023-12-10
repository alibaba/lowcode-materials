import { createContext } from 'react';

const FormControlContext = createContext<{
  updateForm: () => void;
}>({
  updateForm() {},
});

export default FormControlContext;
