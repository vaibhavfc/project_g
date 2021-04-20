/* eslint-disable react/button-has-type */
import React, { useEffect, useState, FC } from 'react';
import OtpInput from 'react-otp-input';
import classes from './DigitalInput.module.scss';

import { DigitalInputProps } from './DigitalInput.type';

const DigitalInput: FC<DigitalInputProps> = ({
  size,
  length,
  error,
  disabled,
  placeholder,
  // value,
}) => {
  const [otp, setOtp] = useState('');

  useEffect(() => {
    setOtp(otp);
    console.log(otp);
  }, [otp]);

  const handleChange = (e: any) => {
    setOtp(e);
  };

  return (
    <OtpInput
      // eslint-disable-next-line jsx-quotes
      inputStyle={(size === 'small') ? classes.containerSmall : classes.container}
      focusStyle={classes.focus}
      hasErrored={error}
      errorStyle={classes.error}
      isDisabled={disabled}
      placeholder={placeholder}
      disabledStyle={classes.disabled}
      value={otp}
      onChange={handleChange}
      numInputs={length}
      separator={
        <span className={classes.separator} />
      }
    />
  );
};

export default DigitalInput;
