import { Form, Formik } from "formik";
import * as yup from "yup";
import Input from "../../components/Common/input";
import { useNavigate } from "react-router-dom";
import { register } from "../../components/Apis/apis";

export const Register = () => {
  const navigate = useNavigate();

  const initialState = {
    fullName: "",
    email: "",
    password: "",
    gender: "",
  };

  const validations = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(3).required(),
    gender: yup.string().required(),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await register(values);
      sessionStorage.setItem("ropstam", response.data.toString());
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container pb-5 pt-2">
      <h3>Register</h3>
      <Formik
        initialValues={initialState}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        {() => (
          <div>
            <Form>
              <Input name="fullName" type="text" label="Full Name" />
              <Input name="email" type="email" label="Email" />
              <Input name="gender" type="text" label="Gender" />
              <Input name="password" type="password" label="Password" />
              <button className="btn btn-success mt-3" type="submit">
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};