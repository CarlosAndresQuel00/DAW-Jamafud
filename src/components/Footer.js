import React from "react";
import Image from "next/image";
import { Button, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "../../public/images/logoJamafud.png";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        backgroundColor: "#FB93FF",
        border: "black solid 2px",
        lineHeight: 0,
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <div style={{ textAlign: "center", marginTop: 5 }}>
            <Image
              src={logo}
              width={200}
              height={50}
              placeholder="blur"
              alt="Not found image"
            />
          </div>
          <p style={{ textAlign: "center", marginTop: 7 }}>
            Come bien, vive bien!
          </p>
          <p style={{ textAlign: "center", marginBottom: 25 }}>
            {" "}
            © Copyright i-CodeTech 2021
          </p>
        </Grid>
        <Grid item xs={6} direction="row" container justifyContent="center">
          <Grid item xs={5}>
            <div style={{ textAlign: "center" }}>
              <div style={{ marginTop: 10, marginBottom: 15 }}>
                <FacebookIcon style={{ fontSize: 35 }} />
              </div>
              <Button color="primary" variant="contained">
                Más información
              </Button>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div style={{ textAlign: "center" }}>
              <div style={{ marginTop: 10, marginBottom: 15 }}>
                <InstagramIcon style={{ fontSize: 35 }} />
              </div>
              <Button color="primary" variant="contained">
                Publicidad
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
