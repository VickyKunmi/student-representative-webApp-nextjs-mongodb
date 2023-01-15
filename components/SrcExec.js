import styles from "../styles/SrcExec.module.css";
import Image from "next/image";
import Link from "next/link";

const SrcExec = ({ project }) => {
  return (
    <div className={styles.container}>
      <Link href={`/Faculty/${project._id}`} passHref>
        <Image src={project.img} alt="picture" width="200" height="200" />
      </Link>

      <h1 className={styles.post}>{project.title}</h1>
      {/* <span className={styles.name}>{project.name}</span> */}
      {/* <p className={styles.describe}>{project.desc}</p> */}
    </div>
  );
};

export default SrcExec;
