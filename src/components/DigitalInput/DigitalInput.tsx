/* eslint-disable react/button-has-type */
import { useEffect, useState, FC } from 'react';
import OtpInput from 'react-otp-input';
import classes from './DigitalInput.module.scss';

import { DigitalInputProps } from './DigitalInput.type';

const DigitalInput: FC<DigitalInputProps> = ({
  size,
  length,
  error,
  disabled,
  placeholder,
}) => {
  const [otp, setOtp] = useState('');

  useEffect(() => {
    setOtp(otp);
    console.log(otp);
  }, [otp]);

  const handleChange = (e) => {
    setOtp(e);
  };

  return (
    <div>
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
    </div>
  );
};

export default DigitalInput;
