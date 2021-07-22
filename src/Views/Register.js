import Breadcrumbs from "../Components/Breadcrumbs";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const breadcrumbPaths = [{ link: "/", title: "Home" }, { title: "Login" }];

function Register() {
  const [formValue, setFormValue] = useState({
    username: "",
    termsAndCondition: false,
    firstName: "",
    lastName: "",
    country: "Choose country&#42;",
    confirmPassword: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function handleRegistrationSubmit(e) {
    e.preventDefault();

    const { password, confirmPassword } = formValue;

    console.log(formValue);

    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      return;
    }

    alert("Registered");

    setFormValue({
      username: "",
      termsAndCondition: false,
      firstName: "",
      lastName: "",
      country: "Choose country&#42;",
      confirmPassword: "",
      password: "",
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>Register</h3>
        </div>
      </div>

      <form id="register-form" onSubmit={handleRegistrationSubmit}>
        <div className="row">
          <div
            className="col-md-2 form-group required"
            style={{ marginBottom: "10px" }}
          >
            <input
              className="form-control form-control-sm"
              placeholder="Username&#42;"
              name="username"
              value={formValue.username}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-2 form-group required"
            style={{ marginBottom: "10px" }}
          >
            <input
              type="password"
              id="password"
              className="form-control form-control-sm"
              minLength="8"
              name="password"
              placeholder="Password&#42;"
              value={formValue.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-2 form-group required"
            style={{ marginBottom: "10px" }}
          >
            <input
              type="password"
              minLength="8"
              name="confirmPassword"
              className="form-control form-control-sm"
              placeholder="Repeat password&#42;"
              value={formValue.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-2 form-group required"
            style={{ marginBottom: "10px" }}
          >
            <input
              className="form-control form-control-sm"
              placeholder="First name&#42;"
              name="firstName"
              value={formValue.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 form-group" style={{ marginBottom: "10px" }}>
            <input
              className="form-control form-control-sm"
              name="lastName"
              placeholder="Last name"
              value={formValue.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-2 form-group required"
            style={{ marginBottom: "10px" }}
          >
            <select
              className="form-control form-control-sm "
              placeholder="Country"
              name="country"
              required
              value={formValue.country}
              onChange={handleInputChange}
            >
              <option value="">Choose country&#42;</option>
              <option value="USA">USA</option>
              <option value="Latvia">Latvia</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div
              className="form-check"
              required
              style={{ marginBottom: "10px" }}
            >
              <input
                className="form-check-input required  "
                id="termsAndCondition"
                name="termsAndCondition"
                type="checkbox"
                checked={formValue.termsAndCondition}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="termsAndCondition">
                <p>
                  Agree with <NavLink to="/404">Terms &amp; Privacy</NavLink>.
                </p>
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col required" style={{ marginBottom: "310px" }}>
            <button
              type="submit"
              name="submit"
              style={{ backgroundColor: "#16A085" }}
              className="btn btn required"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
