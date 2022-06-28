import React, { useEffect, useState } from "react";
import { validation } from "./validation";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validation(data));
  }, [data]);
  const touchHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const changHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      setTouched({
        Password: true,
        Email: true,
      });
    } else {
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {" "}
        <div>
          <form onSubmit={submitHandler}>
            <h2 className={styles.header}>Login</h2>
            <br />

            <div className={styles.formContainer}>
              <label>Email</label>
              <input
              
                className={
                  touched.Email && errors.Email
                    ? styles.uncomplet
                    : styles.formInput
                }
                type="text"
                value={data.Email}
                name="Email"
                onChange={changHandler}
                onFocus={touchHandler}
              ></input>
              <br />
              {touched.Email && <span>{errors.Email}</span>}
            </div>
            <br />

            <div className={styles.formContainer}>
              <label>Password</label>
              <input
                className={
                  touched.Password && errors.Password
                    ? styles.uncomplet
                    : styles.formInput
                }
                type="password"
                value={data.Password}
                name="Password"
                onChange={changHandler}
                onFocus={touchHandler}
              ></input>
              <br />
              {touched.Password && <span>{errors.Password}</span>}
            </div>
            <br />

            <div className={styles.formButton}>
              <Link to="/SignUp"> SignUp</Link>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
