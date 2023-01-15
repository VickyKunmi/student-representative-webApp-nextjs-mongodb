import styles from "../../styles/Faculty.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
const Faculty = ({ project }) => {
  //  const [size, setSize] = useState(0);

  return (
    <>
    <Layout />
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={project.img}
            alt="pic"
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{project.title}</h1>
        <h1 className={styles.name}>{project.name}</h1>
        <p className={styles.describe}>{project.desc}</p>
      </div>
    </div>
    <Footer />
    </>
  );

};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/faculties/${params.id}`);

  return {
    props: {
      project: res.data,
    },
  };
};

export default Faculty;
