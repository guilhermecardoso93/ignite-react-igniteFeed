import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/guilhermecardoso93.png" className={styles.profileImg}/>
    </div>
  );
}