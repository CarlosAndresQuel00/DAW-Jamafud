import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import logo from "../../public/images/logoJamafud.png";

export default function Navbar() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div
      style={{
        backgroundColor: "#FB93FF",
        border: "black solid 2px",
        lineHeight: 0,
        padding: 10,
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <div style={{ marginLeft: 135 }}>
            <Image
              src={logo}
              width={200}
              height={50}
              placeholder="blur"
              alt="Not found image"
            />
          </div>
        </Grid>
        <Grid item xs={9} style={{ padding: 10 }}>
          <h1 style={{ marginLeft: 325 }}>Jamafud</h1>

          <div
            style={{
              display: "flex",
              marginLeft: 245,
              marginTop: 5,
            }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                Home
              </Link>
              <Link color="inherit" href="/singIn" onClick={handleClick}>
                Iniciar Sesión
              </Link>
              <Link
                color="textPrimary"
                href="/foodEcuador"
                onClick={handleClick}
                aria-current="page"
              >
                Comida Nacional
              </Link>
            </Breadcrumbs>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
