import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import menuItem from "./menuItem";

export default function Navbar() {
  
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image
            src="/img/srcLogo.jpg"
            alt="float"
            width="32"
            height="32"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Welcome</div>
          <div className={styles.text}>SRC</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          
          <Link href='/' passHref>
          <li className={styles.listItem}>Home</li>
          </Link>
         <Link href="/src" passHref>
         <li className={styles.listItem}>SRC</li>
         </Link>

          <Link href="/executive" passHref>
          <li className={styles.listItem}>Executives</li>

          </Link>
          
          <Link href="/associations">
          <li className={styles.listItem}>Associations</li>
          </Link>

          <Link href="/news" passHref>
          <li className={styles.listItem}>News</li>
          </Link>

          <Link href="/welfare" passHref>
          <li className={styles.listItem}>Welfare</li>
          </Link>
          <Link href="/events" passHref>
          <li className={styles.listItem}>Events</li>
          </Link>
          <Link href="/contact" passHref>

          <li className={styles.listItem}>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

// export default Navbar;
