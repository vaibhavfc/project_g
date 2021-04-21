import { Box } from '@material-ui/core';
import React, {
  FC,
  forwardRef,
  useMemo,
  useState,
  useEffect,
} from 'react';
import classnames from 'classnames';
import { InputHelperProps, InputHelperStylingProps } from './InputHelper.type';
import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';
import classes from './InputHelper.module.scss';
import { TextField } from '..';

const InputHelperWithInnerRef: FC<InputHelperProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  inputValues,

}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<InputHelperStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [value, setValue] = useState('');
  const [helperValues, setHelperValues] = useState<string[] | null>([]);

  useEffect(() => {
    setHelperValues(arr);
  }, []);

  const handleHelperValue = (str) => str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const arr = () => inputValues?.map((val) => {
    const valStr = `${val}`;
    return handleHelperValue(valStr);
  });

  return (
    <Box
      className={mergedClasses.rootContainer}
      component="div"
    >
      <TextField
        label="Label"
        placeholder="Placeholder text"
        type="text"
        variant="filled"
        textFieldValue={value}
      />
      <Box
        className={mergedClasses.inputWraper}
        component="div"
      >
        {
            helperValues?.map((amount) => (
              <Box
                component="div"
                className={classnames(mergedClasses.valueWraper, {
                  [mergedClasses.valueWraperSelected]: (amount === value),
                })}
                onClick={() => setValue(amount)}
              >
                <Box
                  component="span"
                  className={classnames(mergedClasses.valueSpanSelected, {
                    [mergedClasses.valueSpan]: ((amount !== value)),
                  })}
                >
                  {amount}
                </Box>
              </Box>
            ))
          }
      </Box>
    </Box>
  );
};

const InputHelper = forwardRef<HTMLDivElement, Omit<InputHelperProps, 'innerRef'>>(
  (props, ref) => <InputHelperWithInnerRef innerRef={ref} {...props} />,
);

export default InputHelper;
