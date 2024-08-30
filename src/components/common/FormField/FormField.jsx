import React from "react";
import { Field } from "react-final-form";
import "./FieldStyle.scss";

const FormField = ({
  name,
  validate,
  component: Component,
  label,
  ...rest
}) => (
  <Field name={name} validate={validate}>
    {({ input, meta }) => (
      <div className="input-wrapper">
        <div className="input">
          {label && (
            <label htmlFor={name} className="input-wrapper__label">
              {label}
            </label>
          )}
          <Component {...input} {...rest} id={name} />
        </div>

        {meta.error && meta.touched && (
          <div className="input-wrapper__error">{meta.error}</div>
        )}
      </div>
    )}
  </Field>
);

export default FormField;
