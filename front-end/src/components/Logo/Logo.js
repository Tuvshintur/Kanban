import React from "react";

import logoK from "../../assets/images/logo.png";
import styles from "./Logo.module.css";

const logo = () => (
    <div className={styles.Logo}>
        <img src={logoK} alt="myLogo" />
    </div>
);

export default logo;
