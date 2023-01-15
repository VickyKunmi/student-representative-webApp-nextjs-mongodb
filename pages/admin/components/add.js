import styles from "../../../styles/admin/AddFaculty.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmkqhochv/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newFaculty = {
        title,
        name,
        desc,
        img: url,
      };
      await axios.post("http://localhost:3000/api/faculties", newFaculty);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add new faculty</h1>
        <div className={styles.item}>
          <label className={styles.lable}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            className={styles.textarea}
            rows={20}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className={styles.addButn} onClick={handleCreate}>
          Add
        </button>
      </div>
    </div>
  );
};

export default add;
