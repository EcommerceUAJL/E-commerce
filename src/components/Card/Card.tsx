import image from '../../assets/searchBar/search.png';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = () =>
  // { img, name, valor, location }
  {
    let product = {
      valor: '$46841',
      name: 'product',
      img: { image },
      location: 'Mar del Plata',
    };

    return (
      <div>
        <div className={styles.card}>
          {/* <Image
            className={styles.background_img}
            src={product.img}
            alt={product.name}
          /> */}
          <div className={styles.card_info}>
            <p className={styles.text_body}>{product.valor}</p>
            <p className={styles.text_title}>{product.name}</p>
            <p className={styles.text_title}>{product.location}</p>
            <button className={styles.card_button}>Read More</button>
          </div>
        </div>
      </div>
    );
  };

export default Card;
