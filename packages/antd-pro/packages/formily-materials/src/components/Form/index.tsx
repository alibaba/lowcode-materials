import * as React from 'react';
import {
  createElement,
  useEffect,
  useState,
  useCallback,
  useImperativeHandle,
  createRef,
} from 'react';
import { createForm, Form } from '@formily/core';
import { FormProvider } from '@formily/react';
import { FormLayout } from '@formily/antd';
import { FormControlContext } from '../../shared';

export interface IFormilyFormProps {
  __designMode?: string;
  componentProps?: any;
  style?: any;
}

// @ts-ignore
const FormilyForm: React.ForwardRefRenderFunction<any, any> = React.forwardRef((props, ref) => {
  const { __designMode, style, componentProps, children } = props;

  const isDesign = __designMode === 'design';

  const createFormilyForm = () => {
    return createForm({
      readOnly: isDesign,
    });
  };

  const [form, setForm] = useState<Form>(() => {
    return createFormilyForm();
  });

  useImperativeHandle(ref, () => {
    return {
      form,
    };
  });

  const updateForm = useCallback(() => {
    setForm((prevForm) => {
      const prevState = prevForm.getState();

      const newForm = createFormilyForm();

      newForm.setState(prevState);

      return newForm;
    });
  }, []);

  useEffect(() => {
    if (__designMode === 'design') {
      updateForm();
    }
  }, [componentProps]);

  return (
    <FormControlContext.Provider
      value={{
        updateForm,
      }}
    >
      <FormProvider form={form}>
        <FormLayout style={style} {...componentProps}>
          {children}
        </FormLayout>
      </FormProvider>
    </FormControlContext.Provider>
  );
});

class FormClass extends React.Component<
  IFormilyFormProps,
  {
    form: Form<any>;
  }
> {
  formRef = createRef<any>();

  get form() {
    return this.formRef.current.form;
  }

  render() {
    return <FormilyForm {...this.props} ref={this.formRef} />;
  }
}

export default FormClass;
