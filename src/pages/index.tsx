import HeadGlobal from 'src/components/Head/Head';
import Image from 'next/image';
import Nav from 'src/components/Nav/Nav';
import CardsContainer from 'src/components/CardsContainer/CardsContainer';
import Card from 'src/components/Card/Card';
import { CenterContainer } from 'src/styles/AdjustStyles';
import Slider from 'src/components/Slider/Silider';

export default function Home() {
  return (
    <div>
      <HeadGlobal />

      <main>
        <Nav />
        <CenterContainer style={{ marginTop: '90px', flexDirection: 'column' }}>
          <Slider />
          <CardsContainer />
        </CenterContainer>
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
