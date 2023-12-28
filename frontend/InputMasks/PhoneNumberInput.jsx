import React from 'react';
import InputMask from 'react-input-mask';

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <InputMask
      mask="(999) 999-9999"
      className="contact__input"
      name="phone"
      placeholder="Phone Number*"
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default PhoneNumberInput;