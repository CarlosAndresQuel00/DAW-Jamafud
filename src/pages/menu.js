import React from "react";
import styles from "../styles/Menu.module.css";
import MenuForms from "../components/MenuForms";
import Dish from "../api/dishes";

export default function Menu({ dishes }) {
  return (
    <div
      className={styles.block}
      style={{ display: "block", textAlign: "center" }}
    >
      <MenuForms dishes={dishes} />
    </div>
  );
}

export async function getStaticProps() {
  let dishes = [];
  try {
    const response = await Dish.receive();
    dishes = response.data.data;
  } catch (e) {
    console.log("e", e);
  }

  return {
    props: {
      dishes,
    },
  };
}
