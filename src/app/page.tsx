import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <div>{`WELCOME TO THE SITE`}</div>
      </div>
    </main>
  );
}
