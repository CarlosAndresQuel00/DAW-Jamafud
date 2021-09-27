import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3];

export default function Album() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>¿Como funciona JamaFud?</h1>
      <Container maxWidth="md">
        {/* End hero unit*/}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={7} sm={3} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "25.25%",
                  }}
                  image="https://1.bp.blogspot.com/-Vo86UuW5kN0/WDyYETK2sFI/AAAAAAAAAJU/r9R34279qJ4nP8_4RR7G9CnzRHKvYJYVgCLcB/s1600/actual%2Bcomida.gif"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Descrpcion
                  </Typography>
                  <Typography>
                    los platos mas ricos y exquisitos de JAMAFUD hornado,
                    guatita
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <h1 style={{ textAlign: "center" }}>
        Beneficios de Utilizar la Aplicacion{" "}
      </h1>
    </div>
  );
}
