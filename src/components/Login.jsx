import React, { useState } from "react";
import "../sass/components/Login.scss";
import Home from "../pages/Home";
import { Link } from "react-router-dom";

function Login() {
  const [userlog, setUserlog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("sanskarPassword").replace(/"/g, "");
    let user = localStorage.getItem("sanskaruser").replace(/"/g, "");
    

    if (!userlog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || userlog !== user) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div className="form-lg">
      {home ? (
        <form onSubmit={handleLogin}>
          <div className="inner-form">
            <h3>LogIn</h3>
            <div className="label">
              <label>User Name</label>
              <input
                type="username"
                className="ls-input"
                placeholder="Enter User name"
                onChange={(event) => setUserlog(event.target.value)}
              />
            </div>

            <div className="label">
              <label>Password</label>
              <input
                type="password"
                className="ls-input"
                placeholder="Enter password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>

            <button type="submit" className="submit">
              Login
            </button>
            <div className="signup-already">
              <span>do you have an account ?</span>
              <Link to="/register">
                <a className="link">Register</a>
              </Link>
            </div>
            {flag && (
              alert("Fill correct Info else keep trying.!")
            )}
          </div>
        </form>
      ) : (
        <Home/>
        
      )}
    </div>
  );
}

export default Login;
