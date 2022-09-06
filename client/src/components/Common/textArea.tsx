import React, { FunctionComponent } from "react";
import { useField, ErrorMessage } from "formik";

interface TextAreaProps {
  name: string;
  label: string;
}

const TextArea: FunctionComponent<TextAreaProps> = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{props.label}</label>
      <textarea
        className={`form-control ${meta.error && "is-invalid"}`}
        {...field}
        {...props}
        rows={3}
      ></textarea>

      <ErrorMessage name={field.name} component="div" className="text-danger" />
    </div>
  );
};

export default TextArea;
