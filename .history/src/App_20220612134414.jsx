import { Header } from "./components/Header";


import './App.module.css'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>main</main>
      </div>
    </>
  );
}