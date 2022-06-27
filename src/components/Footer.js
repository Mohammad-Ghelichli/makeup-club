import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import telegram from "../assets/icons/telegram.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.row}>
          <img width="500px" src={logo} alt="ghelichli" />
          
        </div>
        <div className={styles.row}>
          <h2>Contact</h2>
          <br />
          <br />

          <h3>Phone : +98 937 339 2343</h3>
          <h3>Email : mohammad.ut.ac@gmail.com</h3>
          <h3>Address : family st Firozkuh Tehran Iran</h3>
        </div>
        <div className={styles.row2}>
          <h2>Social media</h2>
          <div className={styles.row3}>
            <Link to="">
              <img src={instagram} alt="insta" />
            </Link>
            <Link to="">
              <img src={telegram} alt="telegram" />
            </Link>
            <Link to="">
              <img src={whatsapp} alt="whatsapps" />
            </Link>
            <Link to="">
              <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center",fontFamily:"revert-layer"}}><h4>©2021.All Rights Reserved</h4></div>
     

    </div>
  );
};

export default Footer;
