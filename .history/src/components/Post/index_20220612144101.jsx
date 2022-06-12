import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/guilhermecardoso93.png" className={styles.profileImg} />
          <div>
            <strong>Guilherme Cardoso</strong>
            <span>Web Developer Front-end</span>
          </div>
        </div>
      </header>
    </article>
  );
}
