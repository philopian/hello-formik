import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";

import "./styles.css";

const App = ({ values }) => (
  <div className="App">
    <p>Hello Formik</p>
    <Form>
      <label>
        <span> pick a plan </span>
        <Field component="select" name="plan">
          <option value="free">free</option>
          <option value="basic">basic</option>
          <option value="premium">premium</option>
        </Field>
      </label>
      <br />
      <Field type="email" name="email" placeholder="Email" />
      <br />
      <Field type="password" name="password" placeholder="Password" />
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
  handleSubmit(values) {
    console.log("[do something with]", values);
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FormikApp email="hello@there.com" password="1234567" />,
  rootElement
);
