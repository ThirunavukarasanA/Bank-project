import React from "react";
import { useFormik } from "formik";
import UserContext from "./context";
import { useContext } from "react";
import { useState } from "react";
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";
// import {AiOutlineMail} from 'react-icons/fa';
export default function App() {
  const mystyle={
    color:"blue"
  };
  const mstyle={
    borderRadius:"20px",
    border: "1px solid red"
  }
  // const [passwordShown, setPasswordShown] = useState(false);
  const ctx = useContext(UserContext);
  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (!values.name);
      if (!values.email);
      if (!values.password);
      alert(`Account Created Successfull`);

      ctx.users.push({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        balance: 0
      });
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.Name = "***Required!!!";
      } else if (values.name.length > 20) {
        errors.Name = "Must be 20 characters or less";
      }
      if (!values.email) {
        errors.email = "***Required!!!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "***set Password!!!";
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)
        // !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i.test(values.password)
      ) {
        errors.password = "Minimum eight characters, at least one letter, one number and one special character";
      }
      return errors;
    }
  });

  return (
    <>
      <div className="thiru">
        <div class="container">
          <div className="account">
            <div class="card border-0">
              <center>
                <div>
                  <h3 class="he3">
                    Create User Account
                  </h3>
                </div>
              </center>
              <div class="card-headera"></div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div class="mb-31">
                    <label className="form-label" style={mystyle}>Name:</label>
                   
                    {/* <AiOutlineMail/> */}
                    <input style={mstyle}
                      class="form-control"
                      id="name"
                      name="name"
                      type="character"
                      placeholder="Enter Your Name..."
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />

                    {formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div class="mb-31">
                    <label class="form-label" style={mystyle}> Email Address: </label>
                    <input style={mstyle}
                      class="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Your Mail..."
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div class="mb-31">
                    <label class="form-label" style={mystyle}>Password: </label>
                    <input style={mstyle}
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password..."
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />

                    {formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div><br/>
                  {/* <input type="checkbox" onclick="myFunction()">Show Password</input> */}

                  <button type="submit" class="btn btn-danger" disabled="">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}