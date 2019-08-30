import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Contact() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>
          <h4>Contact</h4>
        </div>
        <Formik
          style={styles.form}
          initialValues={{ email: "" }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="firstName" component={CustomInputComponent} />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-dark ml-4 "
                style={styles.btm}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

const styles = {
  container: {
    backgroundColor: "#fefefef9",
    padding: "26px 0px 56px 0px",
    margin: "0px",
    flex: "1",
    flexDirection: "column",
    // display: "flex",
    justifyContent: "space-around"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  form: {
    display: "flex",
    justifyContent: "center",
    margin: "auto"
  },
  btn: {
    display: "flex",
    margin: "auto"
  }
};
