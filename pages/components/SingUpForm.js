import { useForm, Controller } from "react-hook-form";
import styles from "../../styles/SingUp.module.css";
import { useAuth } from "../../contexts/auth";
import withoutAuth from "../../hocs/withoutAuth";

const SingUpForm = () => {
  const { registerForm } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("desde onSubmit", data);
      const userData = {
        ...data,
      };
      const response = await registerForm(userData);
      console.log("response token", response.data);
      alert("Usuario creado con éxito!");
    } catch (e) {
      console.log("e", e.response);
      //const { response } = e;
      alert("Ocurrió un error :(");
    }
  };

  return (
    <>
      <div className="styles.form">
        <h1 style={{ textAlign: "center" }}>Crear Cuenta</h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
          <label htmlFor="name">Nombre Completo</label>
          <br></br>
          <input
            id="name"
            {...register("name", { required: true, maxLength: 40 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Su email es obligatorio</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>Su nombre no debe exceder los 40 caracteres</span>
          )}
          <br></br>
          <label htmlFor="email">Correo Electrónico</label>
          <br></br>
          <input
            id="email"
            type="email"
            {...register("email", { required: true, maxLength: 40 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Su email es obligatorio</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
          <br></br>
          <label htmlFor="password">Contraseña</label>
          <br></br>
          <input
            id="password"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>El password es obligatorio</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>La clave debe tener al menos 6 caracteres</span>
          )}
          <br></br>
          <label htmlFor="password_confirmation">Confirme su Contraseña</label>
          <br></br>
          <input
            id="password_confirmation"
            type="password"
            {...register("password_confirmation", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Debe confirmar su password</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>La clave debe tener al menos 6 caracteres</span>
          )}
          <br></br>
          <input
            id="birthday"
            name="birthday"
            label="Fecha de nacimiento"
            type="date"
            defaultValue="2021-09-03"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("birthday", {
              required: true,
            })}
          />
          {errors.birthday && errors.birthday.type === "required" && (
              <span>Debe escoger la fecha de su cumpleaños</span>
          )}
          <br></br>
          <label htmlFor="image">
            <b>Escoja una imagen de perfil</b>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            //ref={fileInput}
            accept="image/png, image/jpeg"
            {...register("image", {
              required: true,
            })}
          />
          {errors.image && errors.image.type === "required" && (
            <span>Debe escoger una imagen de perfil</span>
          )}
          <br></br>
          <input type="submit" value="Crear Cuenta" className={styles.btn} />
        </form>
      </div>
    </>
  );
};

export default withoutAuth(SingUpForm);
