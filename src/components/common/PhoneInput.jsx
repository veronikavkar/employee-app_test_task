import React from "react";
import InputMask from "react-input-mask";

const PhoneInput = (props) => (
  <InputMask mask="+7 (999) 999-9999" {...props}>
    {(inputProps) => <input {...inputProps} />}
  </InputMask>
);

export default PhoneInput;
