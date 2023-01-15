import styles from "../../../styles/admin/AddFaculty.module.css";

const addFaculty = ({setClose}) => {
  return (
    <div onClick={()=> setClose(false)} className={styles.mainAddButn}>Add New faculty</div>
  )
}

export default addFaculty
