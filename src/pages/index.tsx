import HeadGlobal from 'src/components/Head/Head';
import Image from 'next/image';
import Nav from 'src/components/Nav/Nav';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadGlobal />
      <main className={styles.main}>
        <Nav />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
