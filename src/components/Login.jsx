import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Forms from "../redux/Form";

export const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const validateLogin = () => {
    let isValid = true;

    let validator = Forms.validator({
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

  const handleLogin = async (e) => {
    e.preventDefault();
let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
let user = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
    
if ( !username || !password) {
      setFlag(true);
      console.log("EMPTY");
}else if ((password !== pass) || (username !== user)){
  setFlag(false);
    } else {
      setHome(!home);
      setFlag(false);
    }
    const validate = validateLogin();

    if (validate) {
      setValidate({});
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div>
      {home ?
    <div className="login" onSubmit={handleLogin} autoComplete={"off"} noValidate sx={{ mt: 1 }}>
      <div className="inner-form">
        <h1>Login</h1>
        
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
          Login
        </button>
        <div className="signup-already">
          <span>Already have an account ?</span>
          <Link to="/register">
            <a className="link">Register</a>
          </Link>
        </div>
        {flag && (
              <alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </alert>
            )}
      </div>
    </div>
    : <Home/>
        }
    </div>
  );
};
