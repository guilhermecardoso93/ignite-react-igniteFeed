import { PencilLine } from 'phosphor-react'
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div  className={styles.profile}>
        <img src="https://github.com/guilhermecardoso93.png" className={styles.profileImg}/>
        <strong>Guilherme Cardoso</strong>
        <span>Web Developer Front-end</span>
      </div>

      <footer>
        <a href="#">Editar seu Perfil</a>
      </footer>
    </aside>
  );
}
