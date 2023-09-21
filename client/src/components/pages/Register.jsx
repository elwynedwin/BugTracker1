import React, { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/register.css";
import axios from "../../api/axios";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);
  const [passwordConfirmFocus, setPasswordConfirmFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidPasswordConfirm(password === passwordConfirm);
  }, [password, passwordConfirm]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, passwordConfirm]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    //Testing to check if User has entered details into the form
    const testUsername = USERNAME_REGEX.test(username);
    const testPassword = PASSWORD_REGEX.test(password);
    if (!testUsername || !testPassword) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        "/register",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      setUsername("");
      setPassword("");
      setPasswordConfirm("");
    } catch (error) {
      if (!error.response) {
        setErrMsg("No Server Response");
      } else if (error.response.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <p>Success! You have Registered</p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Register</h1>
          <form onSubmit={handleRegisterSubmit}>
            {/* Username Field Form Logic */}
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validUsername ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validUsername || !username ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              aria-invalid={validUsername ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <p
              id="uidnote"
              className={
                usernameFocus && username && !validUsername
                  ? "instructions"
                  : "offscreen"
              }
            >
              4-24 Characters
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            {/* Password Field Form Logic */}
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                passwordFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            {/* Confirm Password Field Form Logic */}
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validPasswordConfirm && passwordConfirm ? "valid" : "hide"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validPasswordConfirm || !passwordConfirm ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              id="confirm_password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setPasswordConfirmFocus(true)}
              onBlur={() => setPasswordConfirmFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                passwordConfirmFocus && !validPasswordConfirm
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            {/* Form Button Submit */}
            <button
              disabled={
                !validUsername || !validPassword || !validPasswordConfirm
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Register;
