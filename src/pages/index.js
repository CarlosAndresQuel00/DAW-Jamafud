import Homes from "../components/Homes";
import Carusel from "../components/Carusel";
import Finfo from "../components/Finfo";
import Finfos from "../components/Finfos";

export default function Home() {
  return (
    <div>
      <Carusel />
      <Homes />
      <br></br>
      <Finfo />
      <Finfos />
    </div>
  );
}
