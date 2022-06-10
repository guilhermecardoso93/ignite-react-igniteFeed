import { logoIgnite } from '../../assets/logoIgnite.svg'

import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoIgnite} alt='Logo Ignite Feed' />
        <strong>Ignite Feed</strong>
      </header>
    </>
  );
}
