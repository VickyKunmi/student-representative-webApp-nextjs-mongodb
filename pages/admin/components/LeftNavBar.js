import styles from "../../../styles/admin/LeftNavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUser,
  faNewspaper,
  faUsers,
  faSignOutAlt,
  faUniversity,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

function LeftNavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>CUG SRC</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/admin">Dashboard</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUniversity}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/admin/faculties">Faculties</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/admin/executives">Executives</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUser}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/admin/src">SRC</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/admin/news">News</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUsers}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/admin/events">Events</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/admin/login">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}



export default LeftNavBar;
