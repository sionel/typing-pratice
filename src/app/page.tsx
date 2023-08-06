import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <Link href={"/practice/location"} className={styles.box}>
        자리
      </Link>
      <Link href={"/practice/long"} className={styles.box}>
        낱말
      </Link>
      <Link href={"/practice/short"} className={styles.box}>
        단문
      </Link>
      <Link href={"/practice/word"} className={styles.box}>
        장문
      </Link>
    </div>
  );
};

export default Home;
