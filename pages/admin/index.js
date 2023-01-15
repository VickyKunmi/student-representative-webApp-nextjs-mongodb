import styles from "../../styles/Home.module.css";
// import LeftNavBar from "../../components/LeftNavBar";
import LeftNavBar from "./components/LeftNavBar";
import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
// import Content from "../components/content";
// import {withPageAuthRequired} from "@a"
import { getSession } from "next-auth/react";
const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <div className={styles.container}>
        <LeftNavBar />
        <Header />
        {/* <Content /> */}
      </div>
    </div>
  );
};

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
export default index;
