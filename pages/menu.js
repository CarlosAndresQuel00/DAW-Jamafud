import React from "react";
import styles from "../styles/Menu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuForms from "./components/MenuForms";

export default function Menu() {
  return (
    <div className={styles.block}>
      <MenuForms />
    </div>
  );
}
