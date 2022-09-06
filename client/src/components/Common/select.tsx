import React, { FunctionComponent, useMemo } from "react";
import { useField, ErrorMessage } from "formik";

interface SelectProps {
  data: Array<any>;
  name: string;
  label: string;
  searchkey: string;
  searchvalue: string;
  shandler: (value: any) => void;
}

const Select: FunctionComponent<SelectProps> = (props) => {
  const [field, meta] = useField(props);

  useMemo(() => {
    if (typeof field.value !== "undefined") {
      props.shandler(field.value);
    }
  }, [field.value]);

  return (
    <div className="form-group">
      <label htmlFor={field.name} className="col-form-label font-weight-bold">
        {props.label}
      </label>

      <select
        {...field}
        {...props}
        className={`form-control ${meta.error && "is-invalid"}`}
      >
        <option value="">Search {props.label}</option>
        {props.data.map((e, i) => (
          <option key={i} value={e[props.searchkey]}>
            {typeof props.searchvalue !== "undefined"
              ? e[props.searchvalue]
              : e.title}
          </option>
        ))}
      </select>
      <ErrorMessage name={field.name} component="div" className="text-danger" />
    </div>
  );
};

export default Select;
