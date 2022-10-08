import React, { useState } from "react";
import { Link } from "react-router-dom";
import Forms from "../redux/Form";

export const Register = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [flag, setFlag] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !phone || !email || !username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
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
  return (
    <div className="login">
      <div className="inner-form">
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="fullname" className="label">
            Full name
          </label>
          <input
            type="text"
            id="fullname"
            className="ls-input"
            placeholder="Eg: Nguyen Van A"
            value={fullname}
            onChange={(e) => (e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="ls-input"
            placeholder="Eg: "
            value={fullname}
            onChange={(e) => (e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="ls-input"
            placeholder="Eg: anguyen@gmai.com"
            value={email}
            onChange={(e) => (e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="ls-input"
            placeholder="Eg: thuy123"
            value={email}
            onChange={(e) => (e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="ls-input"
            placeholder="Password"
            value={password}
            onChange={(e) => (e)}
          />
        </div>
        <button onClick={() => handleSubmit()} type="submit" className="submit">
          Register
        </button>
        <div className="signup-already">
          <span>Already have an account ?</span>
          <Link to="/login">
            <a className="link">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
