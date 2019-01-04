import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form } from "formik";

import "./styles.css";

const App = ({ values, handleChange }) => (
  <div className="App">
    <p>Hello Formik</p>
    <Form>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
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
