import React, { useEffect, useState } from "react";
import { validation } from "./validation";
import styles from "./SignUp.module.css"
import { Link } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({
    Name: "",
    LastName:"",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validation(data,"signUp"));
  }, [data]);
  const touchHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const changHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    if(Object.keys(errors).length){
      setTouched({
        Name:true,
        LastName:true,
        Password:true,
        Email:true,
        ConfirmPassword:true,
        isAccepted:true
      })
    }else{
    }
  }

  return (
    <div className={styles.main}>

    
    <div className={styles.container}>
      {" "}
      <div>
        <form onSubmit={submitHandler}>
          <h2 className={styles.header}>signUp</h2>
          <br />

          <div  className={styles.formContainer}>
            <label>Name</label>
            <input
                className={(touched.Name && errors.Name) ?
                  styles.uncomplet:
                  styles.formInput 
                   } 
              type="text"
              value={data.Name}
              name="Name"
              onChange={changHandler}
              onFocus={touchHandler}
            ></input>
            <br />
            {touched.Name && <span>{errors.Name}</span>}
          </div>
          <br />
          <div className={styles.formContainer}>
            <label>LastName</label>
            <input
            className={(touched.LastName && errors.LastName) ?
              styles.uncomplet:
              styles.formInput 
               } 
              type="text"
              value={data.LastName}
              name="LastName"
              onChange={changHandler}
              onFocus={touchHandler}
            ></input>
            <br />
            {touched.LastName && <span>{errors.LastName}</span>}
          </div>
          <br />

          <div className={styles.formContainer}>
            <label>Email</label>
            <input
            className={(touched.Email && errors.Email) ?
              styles.uncomplet:
              styles.formInput 
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
            className={(touched.Password && errors.Password) ?
              styles.uncomplet:
              styles.formInput 
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

          <div className={styles.formContainer}>
            <label>ConfirmPassword</label>
            <input
            className={(touched.ConfirmPassword && errors.ConfirmPassword) ?
              styles.uncomplet:
              styles.formInput 
               } 
              type="password"
              value={data.ConfirmPassword}
              name="ConfirmPassword"
              onChange={changHandler}
              onFocus={touchHandler}
            ></input>
            <br />
            {touched.ConfirmPassword && <span>{errors.ConfirmPassword}</span>}
          </div>
          <br />

          <div className={styles.formContainer}>
            <div className={styles.checkedBox}>
            <label >I accept the Terms of Use & Privacy Policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changHandler}
              onFocus={touchHandler}
            ></input>
            </div>
            <br />
            {touched.isAccepted && <span>{errors.isAccepted}</span>}
          </div>
          <br />

          <div className={styles.formButton}>
            <Link to="/Login"> Login</Link>
            <button type="submit" >sign</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
