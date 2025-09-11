import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <h1 className={styles.title}>Hello world</h1>
     
    </main>
  );
}
