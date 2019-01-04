import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

import "./styles.css";

const App = ({ values, errors, touched }) => (
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
      <button type="submit">Submit</button>
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
  handleSubmit(values) {
    console.log("[do something with]", values);
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FormikApp email="hello@there.com" password="1234567" />,
  rootElement
);
