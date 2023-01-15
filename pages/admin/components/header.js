import styles from "../../../styles/admin/Header.module.css";
import Image from "next/image";

function header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span>Admin</span>
          </h2>
          <p>Welcome to the board.</p>
        </div>
      </div>
      {/* <div className={styles.profile}>
        <Image src="../../../public/srcLogo.jpg" alt="" width={200} height={200} />
      </div> */}
    </div>
  );
}

export default header;
