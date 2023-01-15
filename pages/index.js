import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Footer from "../components/Footer";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
// import { useEffect } from "react";
// const inter = Inter({ subsets: ["latin"] });

export default function Home({ intro }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout />
      <Featured />
      <Intro intro={intro} />
      <Footer/>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/faculties");
  
  return {
    props: {
      intro: res.data,
    },
  };
};
