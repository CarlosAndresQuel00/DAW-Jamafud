import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaControlCard() {
  return (
    <Card sx={{ display: "flex" }} style={{ justifyContent: "center" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://www3.gobiernodecanarias.org/medusa/ecoblog/clopmedy/files/2013/01/lupa-300x300.jpg"
      />
      <Box>
        <CardContent sx={{ flex: "2 5 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Proporciona una mayor velocidad en la rotación de la mesas.
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            - Ayuda a mantener satisfechos a tus clientes.
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            - Cosigue más clientes fieles.
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mejora el control de los pedidos de comida.
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            - Conecta con tus clientes a través de las notificaciones push.
          </Typography>
        </CardContent>
        <Box></Box>
      </Box>
    </Card>
  );
}
