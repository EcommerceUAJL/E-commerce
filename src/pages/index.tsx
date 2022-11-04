import HeadGlobal from 'src/components/Head/Head';
import Image from 'next/image';
import Nav from 'src/components/Nav/Nav';

export default function Home() {
  return (

    <div>
      <Head>
        <title>Your Store</title>
        <meta name="description" content="Your Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
      </main>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
