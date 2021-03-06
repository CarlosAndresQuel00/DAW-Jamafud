import React from "react";
import styles from "../styles/SingIn.module.css";
import { Box } from "@material-ui/core";
import SingInForm from "../components/SingInForm";
import withoutAuth from "../hocs/withoutAuth";

const Login = () => {
  return (
    <Box className={styles.block}>
      <img
        className={styles.img}
        src="https://duyt4h9nfnj50.cloudfront.net/resized/1536848394603-w2880-fa.jpg"
        alt="Girl in a jacket"
        width="800"
        height="100%"
      />
      <Box mt={4} className={styles.form}>
        <SingInForm />
      </Box>
    </Box>
  );
};

export default withoutAuth(Login);
