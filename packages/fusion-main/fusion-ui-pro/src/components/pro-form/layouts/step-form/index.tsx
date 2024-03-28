import * as React from 'react';
import { useRef, useImperativeHandle, useEffect, useState, forwardRef } from 'react';
import { Step, Box } from '@alifd/next';
import { StepProps, ItemProps } from '@alifd/next/lib/step';
import Operations from '@/common/operations';

export interface StepFormProps extends StepProps {
  children?: React.ReactElement;
  onPrevious?: Function;
  onNext?: Function;
  formRef?: React.MutableRefObject<any | undefined>;
  formMapRef?: React.MutableRefObject<any | undefined>;
  operations?: any[];
  operationConfig?: Record<string, any>;
  lastSaveTime?: Number;
}
export interface StepFormItemProps extends ItemProps {
  stepItemProps?: React.ReactNode;
}

const ACTION_MAP = {
  previous: (step, setStep) => {
    setStep(Math.max(0, --step));
  },
  next: (step, setStep, stepLength) => {
    setStep(Math.min(stepLength - 1, ++step));
  },
};

const noop = () => {};

function getAction(action: string | number) {
  return ACTION_MAP[action] || noop;
}

function renderStep(
  props: StepFormProps,
  formArray: Map<string, StepFormItemProps>,
  step: number,
  formArrayRef,
) {
  const { direction = 'hoz', children, showAll, ...others } = props;
  if (direction === 'hoz') {
    return (
      <div className="fusion-ui-step-form steps">
        {formArray && (
          <Step direction={direction} {...others} current={step}>
            {Array.from(formArray.keys()).map((item) => {
              const { stepItemProps } = formArray.get(item);
              return <Step.Item key={item} {...stepItemProps} />;
            })}
          </Step>
        )}
      </div>
    );
  }
  return (
    <div className="fusion-ui-step-form steps">
      <Step direction={direction} {...others} current={step}>
        {React.Children.map(children, (child: React.ReactElement, index) => {
          const { stepItemProps } = formArray.get(`${index}`);
          const content = (
            <div
              className="fusion-ui-step-form forms"
              style={{ display: showAll || step === index ? 'block' : 'none' }}
            >
              {React.cloneElement(child, {
                ref: (node) => {
                  // Keep your own reference
                  formArrayRef.current[index] = node;
                  // Call the original ref, if any
                  const { ref } = child;
                  if (typeof ref === 'function') {
                    ref(node);
                  }
                },
              })}
            </div>
          );
          return <Step.Item content={content} key={index} {...stepItemProps} />;
        })}
      </Step>
    </div>
  );
}

function renderForm(
  props: StepFormProps,
  step: number,
  formArrayRef: React.MutableRefObject<Array<React.MutableRefObject<any>>>,
) {
  const { children } = props;
  return (
    <>
      {React.Children.map(children, (child: React.ReactElement, index) => {
        return (
          <div
            className="fusion-ui-step-form forms"
            style={{ display: step === index ? 'block' : 'none' }}
          >
            {React.cloneElement(child, {
              ref: (node) => {
                // Keep your own reference
                formArrayRef.current[index] = node;
                // Call the original ref, if any
                const { ref } = child;
                if (typeof ref === 'function') {
                  ref(node);
                }
              },
            })}
          </div>
        );
      })}
    </>
  );
}

const renderOperations = ({
  operations,
  operationConfig = {},
  lastSaveTime,
  onPrevious,
  onNext,
  step,
  setStep,
  stepLength,
}) => {
  if (!operations || !operations.length) {
    return null;
  }

  const baseOperations = operations.map((operation: any) => {
    let onClick = getAction(operation.action).bind(this, step, setStep, stepLength);
    if (operation.action) {
      if (operation.action === 'next') {
        operation.disabled = step === stepLength - 1;
        if (onNext && typeof onNext === 'function') {
          onClick = onNext;
        }
      } else if (operation.action === 'previous') {
        operation.disabled = step === 0;
        if (onPrevious && typeof onPrevious === 'function') {
          onClick = onPrevious;
        }
      }
    }
    return {
      onClick,
      ...operation,
    };
  });
  const operationsProps = {
    operations: baseOperations,
    operationConfig,
    lastSaveTime,
  };

  return <Operations {...operationsProps} />;
};

function StepForm(props: StepFormProps, ref) {
  const {
    children,
    onPrevious,
    onNext,
    formRef,
    formMapRef: propsFormMapRef,
    operations,
    operationConfig,
    lastSaveTime,
    direction = 'hoz',
  } = props;

  const [step, setStep] = useState(props.current);

  const formArrayRef = useRef<Array<React.MutableRefObject<any | undefined>>>([]);
  useImperativeHandle(propsFormMapRef, () => formArrayRef.current);
  const currentFormRef = formArrayRef.current[step || 0]?.current;
  useImperativeHandle(formRef, () => currentFormRef);
  const formArray = new Map<string, StepFormItemProps>();
  React.Children.map(children, (child, index) => {
    const itemProps = child.props as StepFormItemProps;
    const name = `${index}`;
    formArray.set(name, itemProps);
  });
  useEffect(() => {
    setStep(props.current);
  }, [props.current]);

  if (!children) {
    return (
      <Box ref={ref} align="center" justify="center" style={{ minHeight: 50 }}>
        <span>内容为空</span>
      </Box>
    );
  }
  return (
    <div ref={ref}>
      <>{renderStep(props, formArray, step, formArrayRef)}</>
      <>{direction === 'hoz' ? renderForm(props, step, formArrayRef) : null}</>
      {renderOperations({
        operations,
        operationConfig,
        lastSaveTime,
        onPrevious,
        onNext,
        step,
        setStep,
        stepLength: formArray.size,
      })}
    </div>
  );
}

export default forwardRef(StepForm);
