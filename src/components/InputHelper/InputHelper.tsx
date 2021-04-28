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
  prefix = '₹',
  suffix,
  label,
  trailingIcon,
  placeholder,
  onChange = () => null,
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<InputHelperStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  const [value, setValue] = useState('');
  const [helperValues, setHelperValues] = useState<string[] | null>([]);

  const handleHelperValue = (str) => str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const arr = () => inputValues?.map((val) => {
    const valStr = `${val}`;
    return handleHelperValue(valStr);
  });

  const onValueChange = (e : any) => {
    setValue(e);
    onChange(e);
  };

  useEffect(() => {
    setHelperValues(arr);
  }, []);

  return (
    <Box
      className={mergedClasses.rootContainer}
      component="div"
    >
      <TextField
        adornmentStart={prefix}
        adornmentEnd={trailingIcon}
        adornmentSuffix={suffix}
        label={label}
        placeholder={placeholder}
        type="text"
        variant="filled"
        value={value}
        onChange={(e) => onValueChange(e)}
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
                onClick={() => onValueChange(amount)}
              >
                <Box
                  component="span"
                  className={classnames(mergedClasses.valueSpanSelected, {
                    [mergedClasses.valueSpan]: (amount !== value),
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
