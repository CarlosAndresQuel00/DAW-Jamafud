import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "../../styles/Week.module.css";
import { CheckBox } from "@material-ui/icons";

export default function WeekForm() {
  const [checked, setChecked] = useState(true);
  const checkChanged = (state) => {
    setChecked(!checked);
  };

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("desde onSubmit", data);
      const response = await Menuses.register(data);
      console.log("response token", response.data.token);

      alert("Dias selecionados con éxito!");
      router.push("/menuses");
    } catch (e) {
      console.log("e", e.response);
      //const { response } = e;
      alert("Ocurrió un error :(");
    }
  };

  return (
    <>
      <div className="styles.form">
        <h1 style={{ textAlign: "center" }}>
          SELECCIONE LOS DE DIAS QUE VA SELECCIONAR EL MENU
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
          <label htmlFor="name">LUNES</label>
          <br></br>
          <CheckBox checked={checked} onChange={checkChanged} />
          <br></br>
          <label htmlFor="email">MARTES</label>
          <br></br>
          <CheckBox onChange={checkChanged} />

          <br></br>
          <label htmlFor="password">MIERCOLES</label>
          <br></br>
          <CheckBox checked={checked} onChange={checkChanged} />

          <br></br>
          <label htmlFor="password_confirmation">JUEVES</label>
          <br></br>
          <CheckBox checked={checked} onChange={checkChanged} />

          <br></br>
          <label htmlFor="password_confirmation">VIERNES</label>
          <br></br>
          <CheckBox checked={checked} onChange={checkChanged} />

          <br></br>
          <label htmlFor="password_confirmation">SÁBADO</label>
          <br></br>
          <CheckBox checked={checked} onChange={checkChanged} />

          <br></br>
          <label htmlFor="password_confirmation">DOMINGO</label>
          <br></br>
          <CheckBox checked={checked} onChange={checkChanged} />

          <br></br>

          <label htmlFor="password_confirmation">
            INGRESE LA CANTIDAD DE PERSONAS
          </label>
          <br></br>
          <input
            id="cantidad"
            {...register("cantidad", { required: true, maxLength: 10 })}
          />

          <input type="submit" value="GUARDAR" className={styles.btn} />
        </form>
      </div>
    </>
  );
}
