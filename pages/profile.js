import React, { useContext } from "react";
import styles from "../styles/Profile.module.css";
import { useRouter } from "next/router";
import ContextWrapper from "./components/ContextWrapper";

export default function profile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const value = useContext(ContextWrapper);

  const goPlanner = () => {
    alert("Go to Planner");
  };
  const goSeemenu = () => {
    //alert('Go to See Menu')
    console.log("este es el token ", value);
    router.push("/SeeMenu");
  };

  const imgExample =
    "https://scontent.fuio26-1.fna.fbcdn.net/v/t1.6435-9/228264629_10219742109918670_4682210610645637462_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEVX0ml_f0w9HCk8hZftRHl9tGel2ZxaDr20Z6XZnFoOqG1qEfjZae4cFqPZJY89uo&_nc_ohc=qWruPUqlxucAX8rvLPJ&_nc_ht=scontent.fuio26-1.fna&oh=d2412064acc589ab4c422353fc10ebb3&oe=615E95E7";
  return (
    <div className={styles.profileMain}>
      <div className={styles.profile}>
        <p className={styles.txt}>Kevin Morales</p>
        <img src={imgExample} width="200" height="200" className={styles.img} />
        <p className={styles.txtInfo}>
          <b>Correo:</b> kmorales201314@gmail.com
        </p>
        <p className={styles.txtInfo}>
          <b>Edad:</b> 27 años
        </p>
        <button className={styles.btn} onClick={goPlanner}>
          <b className={styles.txtbtn}>Planificar Menu</b>
        </button>
        <button className={styles.btn} onClick={goSeemenu}>
          <b className={styles.txtbtn}>Ver Menú</b>
        </button>
      </div>
    </div>
  );
}
