import LeftNavBar from "./components/LeftNavBar";
import Header from "./components/header";
import styles from "../../styles/admin/News.module.css";

import Head from "next/head";
function news() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavBar />
      <Header />
      
      <div className={styles.wrapper}>
       
      </div>
    
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
export default news
