import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/guilhermecardoso93.png" className={styles.profileImg} />
          <div className={styles.authorInfo}>
            <strong>Guilherme Cardoso</strong>
            <span>Web Developer Front-end</span>
          </div>
        </div>
        <time dateTime='2022-05-11 14:44:44'>Publicado há </time>
      </header>
    </article>
  );
}
