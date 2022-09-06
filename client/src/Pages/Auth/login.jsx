import { Form, Formik } from "formik";
import * as yup from "yup";
import Input from "../../components/Common/input";
import { useNavigate } from "react-router-dom";
import { login } from "../../components/Apis/apis";

export const Login = () => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: ""
  };

  const validations = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(3).required(),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await login(values);
      sessionStorage.setItem("ropstam", response.data.toString());
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container pb-5 pt-2">
      <h3>Login</h3>
      <Formik
        initialValues={initialState}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        {() => (
          <div>
            <Form>
              <Input name="email" type="email" label="Email" />
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