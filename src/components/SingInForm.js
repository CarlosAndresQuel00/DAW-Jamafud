import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/SingIn.module.css";
import { useAuth } from "../contexts/auth";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Ingrese un correo electrónico válido")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});

export default function SingInForm() {
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    try {
      console.log("desde onSubmit", data);
      const userData = {
        ...data,
      };
      const response = await login(userData);
      console.log("response token", response);
      reset({
        email: "",
        password: "",
      });
      alert("Credenciales correctas!");
    } catch (e) {
      console.log("e", e.response);
      const { response } = e;
      alert("Ocurrió un error :(");
    }
  };

  return (
    <>
      <div className="styles.form">
        <h1 style={{ textAlign: "center" }}>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
          <h3>Correo electrónico</h3>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                variant="outlined"
                size="small"
                style={{ backgroundColor: "#fff" }}
              />
            )}
            className="styles.formItem"
          />
          <p>{errors.email?.message}</p>
          <h3>Contraseña</h3>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                variant="outlined"
                size="small"
                style={{ backgroundColor: "#fff" }}
              />
            )}
            className="styles.formItem"
          />
          <p>{errors.password?.message}</p>
          <input type="submit" value="Iniciar Sesión" className={styles.btn} />
          <br></br>

          <Link className={styles.btn} href="/singUp">
            Crear Cuenta
          </Link>
        </form>
      </div>
    </>
  );
}
