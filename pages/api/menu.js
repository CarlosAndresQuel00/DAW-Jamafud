import api from "./api";
import Image from "next/image";
import Link from "next/link";
// import styles from "@/styles/Ingredients.module.css";

const IngredientsPage = ({ ingredients }) => {
  return (
    <div>
      {/*<div className={styles.ingredients}>*/}
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          {/*<div key={ingredient.id} className={styles.ingredient}>*/}
          <Image src={ingredient.image} width={400} height={300} />
          <div>
            {/*<div className={styles.ingredientInfo}>*/}
            <span>
              <Link href={`/ingredientes/${ingredient.id}`}>
                {ingredient.name}
              </Link>
            </span>
            <span>{ingredient.cost}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientsPage;

export async function getStaticProps(context) {
  let ingredients = [];
  try {
    const response = await api.get("/ingredients");
    console.log("response", response);
    ingredients = response.data.data;
  } catch (e) {}

  return {
    props: {
      ingredients,
    }, // will be passed to the page component as props
  };
}
