import LeftNavBar from "./components/LeftNavBar";
import Header from "./components/header";
import styles from "../../styles/admin/Faculties.module.css";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Add from "./components/add";
import AddFaculty from "./components/addFaculty";
import { useRouter } from "next/router";
function faculties({ faculties }) {
  const [close, setClose] = useState(true);
  const [intro, setIntro] = useState(faculties);
  const [edit, SetEdit] = useState(faculties);
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/faculties/" + id
      );
      setIntro(intro.filter((project) => project._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = async (id) => {
    const editFac = edit.filter((faculties) => faculties._id !== id[0]);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/faculties/" + id
      );
    } catch (err) {}
  };

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
        <div className={styles.item}>
          <h1 className={styles.title}>Faculties</h1>

          <AddFaculty setClose={setClose} />
          {!close && <Add setClose={setClose} />}
          {/* <button className={styles.facButn}>Add Faculty</button> */}

          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Title</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </tbody>

            {intro.map((faculty) => (
              <tbody key={faculty._id}>
                <tr className={styles.title}>
                  <td>
                    <Image
                      alt=""
                      src={faculty.img}
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td>{faculty.title}</td>
                  <td>{faculty.name.slice(0, 20)}...</td>
                  <td>{faculty.desc.slice(0, 20)}...</td>
                  <td>
                    <button
                      className={styles.button}
                      onClick={() => handleEdit(faculty._id)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => handleDelete(faculty._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
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

  const facultiesRes = await axios.get("http://localhost:3000/api/faculties");

  return {
    props: {
      faculties: facultiesRes.data,
    },
  };
};

export default faculties;
