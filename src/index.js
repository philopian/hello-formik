import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";

import "./styles.css";

const App = ({ values, handleChange }) => (
  <div className="App">
    <p>Hello Formik</p>
    <Form>
      <Field component="select" name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </Field>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </Form>
  </div>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values) {
    console.log("[do something with]", values);
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FormikApp email="hello@there.com" password="1234567" />,
  rootElement
);
