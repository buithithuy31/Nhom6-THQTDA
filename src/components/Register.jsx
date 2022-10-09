import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Forms from "../redux/Form";

export function Register() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validate, setValidate] = useState({});
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info, setInfo] = useState(true);

  const validateRegister = () => {
    let isValid = true;

    let validator = Forms.validator({
      fullname: {
        value: fullname,
        isRequired: true,
      },
      phone: {
        value: phone,
        isRequired: true,
        minLength: 10,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      username: {
        value: username,
        isRequired: true,
        minLength: 4,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  function handleRegister (e) {
    e.preventDefault();

    if (!fullname || !phone || !email || !username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("hardikSubmissionEmail", JSON.stringify(username));
      localStorage.setItem(
        "hardikSubmissionPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setFullname("");
      setPhone("");
      setEmail("");
      setUsername("");
      setPassword("");
    }
  };
  function handleClick() {
    setLogin(!login);
  }

  // Company Info
  function infoClick() {
    setInfo(!info);
  }
  return (
    <div>
    <div className="login" onClick={infoClick}>
      {info ? (
      <div>
        {" "}
        {login ? (
        <div
          className="inner-form"
          onSubmit={handleRegister}
          autoComplete={"off"}
          noValidate
          
        >
          <h1>Register</h1>
          <div className="form-group">
            <label htmlFor="fullname" className="label">
              Full name
            </label>
            <input
              margin="normal"
              className={`ls-input ${
                validate.validate && validate.validate.username
                  ? "is-invalid "
                  : ""
              }`}
              required
              fullWidth
              id="fullname"
              label="Full name"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.fullname
                  ? "d-block"
                  : "d-none"
              }`}
            >
              {validate.validate && validate.validate.fullname
                ? validate.validate.fullname[0]
                : ""}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              margin="normal"
              className={`ls-input ${
                validate.validate && validate.validate.phone
                  ? "is-invalid "
                  : ""
              }`}
              required
              fullWidth
              name="phone"
              label="Phone"
              type="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.phone
                  ? "d-block"
                  : "d-none"
              }`}
            >
              {validate.validate && validate.validate.phone
                ? validate.validate.phone[0]
                : ""}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              margin="normal"
              className={`ls-input ${
                validate.validate && validate.validate.password
                  ? "is-invalid "
                  : ""
              }`}
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.email
                  ? "d-block"
                  : "d-none"
              }`}
            >
              {validate.validate && validate.validate.emailm
                ? validate.validate.email[0]
                : ""}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              margin="normal"
              className={`ls-input ${
                validate.validate && validate.validate.username
                  ? "is-invalid "
                  : ""
              }`}
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.username
                  ? "d-block"
                  : "d-none"
              }`}
            >
              {validate.validate && validate.validate.username
                ? validate.validate.username[0]
                : ""}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              margin="normal"
              className={`ls-input ${
                validate.validate && validate.validate.password
                  ? "is-invalid "
                  : ""
              }`}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.password
                  ? "d-block"
                  : "d-none"
              }`}
            >
              {validate.validate && validate.validate.password
                ? validate.validate.password[0]
                : ""}
            </div>
          </div>
          <button type="submit" className="submit" variant="contained">
            Register
          </button>
          <div className="signup-already">
            <span>Already have an account ?</span>
            <Link to="/login">
              <a className="link" onClick={handleClick}>
                Login
              </a>
            </Link>
          </div>
          {flag && (
            <alert color="primary" variant="danger">
              I got it you are in hurry! But every Field is important!
            </alert>
          )}
        </div>
        ) : ( <LoginPage/>)
          }
      </div>
      ) :(
        <div> </div>
      )}
    </div>
    </div>
  );
};
