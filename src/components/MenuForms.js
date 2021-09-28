import React from "react";
// import Image from "next/image";
// import {
//   Card,
//   CardTitle,
//   CardText,
//   CardGroup,
//   CardBody,
//   CardImg,
// } from "reactstrap";
// import image from "../assets/images/1.jpg";
// import styles from "../../styles/DishesStyle.module.css";
// import Link from "next/link";
import { Button } from "@material-ui/core";
import CarouselMenu from "./CarouselMenu";
import { useRouter } from "next/router";

const MenuForms = ({ dishes }) => {
  const router = useRouter();

  const handleSeeMenu = () => {
    router.replace("/SeeMenu");
  };
  return (
    <div>
      <br></br>
      <h1 align={"center"}>DESAYUNOS</h1>
      <br />
      <br></br>
      <CarouselMenu dishes={dishes} />
      <h1 align={"center"}>ALMUERZOS</h1>
      <br></br>
      <br></br>
      <CarouselMenu dishes={dishes} />
      <h1 align={"center"}>CENAS</h1>
      <br></br>
      <br></br>
      <CarouselMenu dishes={dishes} />
      <div style={{ textAlign: "end", padding: 20, paddingRight: 130 }}>
        <Button variant="contained" color="primary" onClick={handleSeeMenu}>
          SIGUIENTE
        </Button>
      </div>
    </div>
  );
};

export default MenuForms;
