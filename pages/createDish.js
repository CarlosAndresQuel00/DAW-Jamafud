import React from "react";
import styles from "../styles/CreateDish.module.css";
import Stack from "@mui/material/Stack";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

export default function createDish() {
  return (
    <Container>
      <h1 className={styles.titulo}>Mi platillo</h1>
      <Stack spacing={6} direction="row">
        <Stack spacing={2} sx={{ width: 800 }}>
          foto
          <FormControl>
            <InputLabel htmlFor="image">Imagen del platillo</InputLabel>
            <Input
              id="image"
              type="file"
              aria-describedby="image-helper-text"
            />
            <FormHelperText id="image-helper-text">
              Escriba el tipo de platillo.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="description">
              Preparación del platillo
            </InputLabel>
            <Input
              id="description"
              type="text"
              aria-describedby="description-helper-text"
              multiline
              rows={6}
            />
            <FormHelperText id="description-helper-text">
              Escriba la Preparación de su platillo.
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing={2} sx={{ width: 600 }}>
          formulario
          <FormControl>
            <InputLabel htmlFor="name">Nombre del platillo</InputLabel>
            <Input id="name" type="text" aria-describedby="mame-helper-text" />
            <FormHelperText id="mame-helper-text">
              Escribe el nombre de tu platillo.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="cost">Costo del platillo</InputLabel>
            <Input
              id="cost"
              type="number"
              aria-describedby="cost-helper-text"
            />
            <FormHelperText id="cost-helper-text">
              Escriba el costo de tu platillo.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="typedish">Tipo de platillo</InputLabel>
            <Input
              id="typedish"
              type="text"
              aria-describedby="typedish-helper-text"
            />
            <FormHelperText id="typedish-helper-text">
              Escriba el tipo de platillo.
            </FormHelperText>
          </FormControl>
          <Button variant="contained">Agregar ingredientes</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
