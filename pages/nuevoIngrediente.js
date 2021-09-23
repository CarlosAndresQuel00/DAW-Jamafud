import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Ingredient from "../api/ingredients";
import useStyles from "../styles/NewIngredientStyle";

const schema = yup.object().shape({
  image: yup.mixed().required("Este campo es obligatorio"),
  description: yup
    .string()
    .max(500, "Ingrese al menos 500 caracteres")
    .required("Este campo es obligatorio"),
  name: yup
    .string()
    .max(255, "Ingrese al menos 255 caracteres")
    .required("Este campo es obligatorio"),
  cost: yup
    .number()
    .positive("Ingrese el costo positivo")
    .required("Este campo es obligatorio"),
  quantity: yup
    .number()
    .positive("Ingrese la cantidad positiva")
    .required("Este campo es obligatorio"),
});

const NewIngredientPage = ({ ingredientTypes }) => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [result, setResult] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [valueRadio, setValueRadio] = useState("");
  const router = useRouter();

  const onSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("cost", values.cost);
      formData.append("image", values.image[0]);
      formData.append("description", values.description);
      formData.append("ingredientType_id", values.ingredientType_id);
      formData.append("name", values.name);
      formData.append("quantity", values.quantity);
      formData.append("typeOfMeasure", values.typeOfMeasure);
      fullData.push(formData);
      reset({
        image: "",
        description: "",
        ingredientType_id: "",
        cost: "",
        name: "",
        typeOfMeasure: "",
        quantity: "",
      });
    } catch (e) {
      console.log("e", e.response);
      const { response } = e;
      setResult("Ocurrió un error :(");
    }
  };

  const handleClickRadio = (value) => {
    setValueRadio(value);
  };

  const handleCancel = () => {
    router.push("/");
  };

  const handleNext = async () => {
    setResult("Enviando los datos...");
    try {
      if (fullData.length > 0) {
        for (let data in fullData) {
          const response = await Ingredient.create(fullData[data]);
          console.log("formData", response);
        }
        alert("Datos guardados correctamente!");
      } else {
        alert("Ningún dato guardado!");
      }
    } catch (e) {
      console.log("e", e.response);
      const { response } = e;
      setResult("Ocurrió un error :(");

      if (response) {
        if (response.data) {
          const errors = response.data; // Return .errors from API
          const errorObject = Object.values(errors); // Return array
          alert(errorObject);
        }
      }
    }
    router.replace("/");
  };

  return (
    <div style={{ backgroundColor: "#E0CFFC" }}>
      <h1 className={classes.paper2}>Nuevo Ingrediente</h1>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div>
                  <input {...register("image")} required type="file" />
                  <p></p>
                </div>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        id="outlined-multiline-static"
                        label="Descripción"
                        multiline
                        minRows={4}
                        maxRows={4}
                        placeholder="Descripción del ingrediente"
                        variant="outlined"
                        style={{ width: 500, backgroundColor: "#fff" }}
                      />
                      <p>{errors.description?.message}</p>
                    </div>
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Controller
                    name="ingredientType_id"
                    control={control}
                    defaultValue=""
                    render={({ field: { ref, ...rest } }) => (
                      <TextField
                        {...rest}
                        select
                        required
                        label="Tipo de ingrediente"
                        size="small"
                        inputRef={ref}
                        variant="outlined"
                        className={classes.formControl}
                      >
                        {ingredientTypes.map((name) => (
                          <MenuItem key={name.id} value={name.id}>
                            {name.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                  <p></p>
                </div>
                <div>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <div>
                        <TextField
                          {...field}
                          label="Nombre"
                          variant="outlined"
                          size="small"
                          style={{ backgroundColor: "#fff" }}
                        />
                        <p>{errors.name?.message}</p>
                      </div>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="cost"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <div>
                        <TextField
                          {...field}
                          label="Costo"
                          variant="outlined"
                          size="small"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            ),
                          }}
                          style={{ backgroundColor: "#fff" }}
                        />
                        <p>{errors.cost?.message}</p>
                      </div>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="typeOfMeasure"
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <FormControl component="fieldset">
                        <FormLabel
                          component="legend"
                          style={{ fontWeight: "bold" }}
                        >
                          Tipo de medida
                        </FormLabel>
                        <RadioGroup {...rest} row ref={ref}>
                          <FormControlLabel
                            value="libras"
                            onClick={() => handleClickRadio("lb")}
                            control={
                              <Radio size="small" required color="default" />
                            }
                            label="Libras"
                          />
                          <FormControlLabel
                            value="litros"
                            onClick={() => handleClickRadio("lt")}
                            control={
                              <Radio size="small" required color="default" />
                            }
                            label="Litros"
                          />
                          <FormControlLabel
                            value="gramos"
                            onClick={() => handleClickRadio("gr")}
                            control={
                              <Radio size="small" required color="default" />
                            }
                            label="Gramos"
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                  <p></p>
                </div>
                <div>
                  <Controller
                    name="quantity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <div>
                        <TextField
                          {...field}
                          label="Cantidad"
                          variant="outlined"
                          size="small"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {valueRadio}
                              </InputAdornment>
                            ),
                          }}
                          style={{ backgroundColor: "#fff" }}
                        />
                        <p>{errors.quantity?.message}</p>
                      </div>
                    )}
                  />
                  <p></p>
                </div>
                <p>{fullData.length > 0 && result}</p>
                {errorsList.length > 0 && (
                  <ul>
                    {errorsList.map((errorList) => (
                      <li key={errorList}>{errorList}</li>
                    ))}
                  </ul>
                )}
                <div>
                  <Button type="submit" color="primary" variant="contained">
                    Siguiente
                  </Button>
                  <p></p>
                </div>
                <Grid container justifyContent="center">
                  <Grid item xs={2}>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleCancel}
                    >
                      Cancelar
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleNext}
                    >
                      Guardar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default NewIngredientPage;

export async function getStaticProps() {
  let ingredientTypes = [];
  try {
    const response = await Ingredient.receive();
    ingredientTypes = response.data;
  } catch (e) {
    console.log("e", e);
  }

  return {
    props: {
      ingredientTypes,
    },
  };
}
