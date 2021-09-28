import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import Menus from "../api/menuses";
import { Button } from "@material-ui/core";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function WeekForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("desde onSubmit", data);
      const response = await Menus.create(data);
      console.log("response token", response.data);

      alert("Dias selecionados con éxito!");
      //router.push("/menuses");
    } catch (e) {
      console.log("e", e.response);
      //const { response } = e;
      alert("Ocurrió un error :(");
    }
  };

  const handleMenu = () => {
    router.replace("/menu");
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>
          SELECCIONE LOS DE DIAS QUE VA SELECCIONAR EL MENU
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
          <div style={{ textAlign: "start", width: 140, margin: "0 auto" }}>
            <Checkbox {...label} />
            <label htmlFor="name">LUNES</label>
            <br></br>
            <Checkbox {...label} />
            <label htmlFor="email">MARTES</label>
            <br></br>
            <Checkbox {...label} />
            <label htmlFor="password">MIERCOLES</label>
            <br></br>
            <Checkbox {...label} />
            <label htmlFor="password_confirmation">JUEVES</label>
            <br></br>
            <Checkbox {...label} />
            <label htmlFor="password_confirmation">VIERNES</label>
            <br></br>
            <Checkbox {...label} />
            <label htmlFor="password_confirmation">SÁBADO</label>
            <br></br>
            <Checkbox {...label} />
            <label htmlFor="password_confirmation">DOMINGO</label>
            <br></br>
          </div>
          <label htmlFor="password_confirmation">CANTIDAD DE PERSONAS</label>
          {"  "}
          <input
            id="cantidad"
            {...register("cantidad", { required: true })}
            style={{ width: 40 }}
          />
          <div style={{ textAlign: "end", paddingTop: 20 }}>
            <Button
              //type="submit"
              variant="contained"
              color="primary"
              onClick={handleMenu}
            >
              Siguiente
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
