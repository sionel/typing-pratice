import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>자리</div>
      <div className={styles.box}>낱말</div>
      <div className={styles.box}>단문</div>
      <div className={styles.box}>장문</div>
    </div>
  );
};

export default Home;
