import Link from "next/link";
import { Grid, Link as MuiLink } from "@material-ui/core";
import Image from "next/image";
import Dish from "../api/dishes";
import styles from "../../styles/DishesStyle.module.css";

export default function Index({ dishes }) {
  return (
    <div className={styles.edge}>
      <h1 className={styles.title}>La Comida de Nuestra Tierra</h1>
      <Grid container className={styles.gridStyle}>
        {dishes.map((dish) => (
          <Grid item xs={4} key={dish.id}>
            <div>
              <Image
                src={dish.image}
                width={400}
                height={300}
                alt="Not found image"
              />
            </div>
            <div className={styles.moreInfoDivStyle}>
              <Link href={`/foodEcuador/${dish.id}`} passHref>
                <MuiLink
                  color="secondary"
                  underline="none"
                  className={styles.moreInfoLinkStyle}
                  style={{ color: "#fff" }}
                >
                  Más información
                </MuiLink>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  let dishes = [];
  try {
    const response = await Dish.receive();
    dishes = response.data.data;
  } catch (e) {
    console.log("e", e);
  }

  return {
    props: {
      dishes,
    },
  };
}
