import React from "react";

import styles from "../styles/Navbar.module.css";
function menuItem({ item }) {
  return item.submenu && item.submenu.length > 0 ? (
    <li className={styles.listItem}>
      <button>{item.title}
      
      
      </button>
    </li>
  ) : (
    <li>{item.title}</li>
  );
}

export default menuItem;
