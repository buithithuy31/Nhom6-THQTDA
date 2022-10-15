import React, { useState } from "react";
// import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import { Link } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !username || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskaruser", JSON.stringify(username));
      localStorage.setItem("sanskaremail", JSON.stringify(email));
      localStorage.setItem("sanskarPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }


  return (
    <>
      <div className="form-lg">
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <div className="inner-form">
              <h3>Register</h3>

              <div className="label">
                <label>Name</label>
                <input
                  type="name"
                  className="ls-input"
                  placeholder="Enter Full Name"
                  // pattern="/^[a-zA-Z]+ [a-zA-Z]+$/"
                  title="You have entered an invalid name address!"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="label">
                <label>Email</label>
                <input
                  type="email"
                  className="ls-input"
                  placeholder="Enter email"
                  pattern="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/"
                  title="You have entered an invalid email address!"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="label">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="ls-input"
                  placeholder="Enter contact no"
                  pattern="^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}"
                  title="You have entered an invalid phone address!"
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>
              <div className="label">
                <label>User name</label>
                <input
                  type="username"
                  className="ls-input"
                  placeholder="Enter User name"
                  // pattern="/^[a-zA-Z\-]+$/"
                  title="Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable."
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </div>
              <div className="label">
                <label>Password</label>
                <input
                  type="password"
                  className="ls-input"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
                  required
                />
              </div>

              <button type="submit" className="submit">
                Register
              </button>

              <div className="signup-already">
                <span>Already have an account ?</span>
                <Link to="/login">
                  <a className="link">Login</a>
                </Link>
              </div>
              {flag && (
                alert("I got it you are in hurry! But every Field is important!")
              )}
            </div>
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Register;
