import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

import "./styles.css";

const App = ({ values, errors, touched, isSubmitting }) => (
  <div className="App">
    <p>Hello Formik</p>
    <Form>
      <div>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </div>
      <br />
      <div>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <span className="error">{errors.password}</span>
        )}
      </div>
      <br />
      <label>
        <span> pick a plan </span>
        <Field component="select" name="plan">
          <option value="free">free</option>
          <option value="basic">basic</option>
          <option value="premium">premium</option>
        </Field>
      </label>
      <br />
      <label>
        <span> Join our newsletter </span>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      </label>
      <br />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  </div>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || true,
      plan: plan || "basic"
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(9, "Password need to be at least 9 charaters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      console.log("..waiting");
      // fake an email already taken
      if (values.email === "hello@there.com") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 1000);
    console.log("[do something with]", values);
  }
})(App);

const props = { email: "hello@there.com", password: "123456789" };
const rootElement = document.getElementById("root");
ReactDOM.render(
  <FormikApp {...props} />,
  // <FormikApp />,
  rootElement
);
