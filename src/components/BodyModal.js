import { Button, Grid, Paper, TextField } from "@material-ui/core";
import Image from "next/image";
import useStyles from "../styles/FoodEcuadorStyle";
import { useRouter } from "next/router";
import useSWR from "swr";
import api from "../api";
import styles from "../styles/ModalDetailDish.module.css";

const fetcher = (url) => api.get(url).then((res) => res.data);

const BodyModal = () => {
  const classes = useStyles();
  const router = useRouter();

  const { id } = router.query;
  console.log("id", id);

  const { data, error } = useSWR(`/dishes/${id}`, fetcher, {
    refreshInterval: 1000,
  });

  if (error) {
    return <div className={classes.root}>Ocurrió un error</div>;
  }

  const handleAdd = () => {
    router.replace("/week");
  };

  const handleClose = () => {
    router.replace("/foodEcuador");
  };

  if (!data) {
    return <div className={classes.root}>Cargando datos...</div>;
  }

  return (
    <div className={classes.paper}>
      <Paper className={classes.paper2}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Image
              src={data.image}
              width={400}
              height={300}
              alt="Not found image"
            />
          </Grid>
          <Grid item xs>
            <h4 className={styles.title} id="simple-modal-title">
              Platillo
            </h4>
            <TextField
              multiline
              label="Descripción"
              minRows={2}
              maxRows={2}
              className={styles.textfieldStyle}
              id="simple-modal-description"
              defaultValue={data.description}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <p></p>
            <TextField
              label="Precio"
              className={styles.textfieldStyle}
              id="simple-modal-description"
              defaultValue={data.cost}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <p></p>
        <Grid container spacing={3} justifyContent={"center"}>
          <Grid item>
            <Button color="primary" variant="contained" onClick={handleClose}>
              Regresar
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" onClick={handleAdd}>
              Agregar a mi menú
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default BodyModal;
