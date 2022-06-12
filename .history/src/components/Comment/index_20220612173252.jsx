import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/guilhermecardoso93.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Guilherme Cardoso</strong>
              <time title="11 de maio as 14:44" dateTime="2022-05-11 14:44:44">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={22} />
            </button>
          </header>
          <p>Muito bom Dev, parabéns!! 👏👏</p>
        </div>
        <footer className={styles.commentBoxFooter}>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
