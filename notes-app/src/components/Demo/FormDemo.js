import React from "react";

import { useFormik } from "formik";

const FormDemo = () => {
  const usernameInputRef = React.createRef();
//   React.useRef()

  const formik = useFormik({
    initialValues: {
      email: "",
      age: 18,
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required Filed";
      }
      if (!values.email.includes("@")) {
        errors.email = "Should be in proper email format";
      }
      if (values.age > 60) {
        errors.age = "Should be less than 60";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //   console.log(formik)

  const clickHandler = () => {
    console.log("Username : ", usernameInputRef.current.value);      // {current : }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>

        {formik.errors.email ? (
          <div className="alert alert-danger"> {formik.errors.email} </div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="age">Age : </label>
        <input
          type="age"
          name="age"
          id="age"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik.errors.age ? (
          <div className="alert alert-danger">{formik.errors.age} </div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="">Username : </label>
        <input type="text" name="username" ref={usernameInputRef} />
        <button className="btn btn-success" onClick={clickHandler}>
          Get Username
        </button>
      </div>

      <input
        type="submit"
        value="Submit Form"
        className="btn btn-primary"
        disabled={!formik.isValid}
      />
    </form>
  );
};

export default FormDemo;
