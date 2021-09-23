import NProgress from "nprogress";
import "../styles/globals.css";
import Layout from "./components/layout";
import "../public/nprogress.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ContextWrapper from './components/ContextWrapper'
function MyApp({ Component, pageProps }) {
  
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  const TOKEN = "";

  return (
    //<Context.Provider tokenValue={TOKEN}>
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}

export default MyApp;
