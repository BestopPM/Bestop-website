import React from 'react';
import InputMask from 'react-input-mask';

const PhoneNumberInput = ({ value, onChange, className }) => {
  return (
    <InputMask
      mask="(999) 999-9999"
      name="phone"
      className={className}
      placeholder="Phone Number*"
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default PhoneNumberInput;