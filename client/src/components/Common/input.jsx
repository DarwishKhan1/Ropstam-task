import { useField, ErrorMessage } from "formik"
const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='mb-3'>
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control ${meta.error && "is-invalid"}`}
                type="text"
                {...field}
                {...props}
            />
            <ErrorMessage name={field.name} component="div" style={{ color: "red" }} />
        </div >
    );
}

export default Input;