import image from '../../assets/products.png';
import { CardModel, CardProductImg } from 'src/styles/CardStyles';
import { WordShortener } from 'src/styles/AdjustStyles';

const Card = () => {
  // { img, name, valor, location }
  let product = {
    valor: '$46841',
    name: 'Kit De Cartuchos De Tinta Hp 667 Tricolor + Negro Origina',
    img: { image },
    location: 'Mar del Plata',
  };

  return (
    <CardModel>
      <div style={{ display: 'flex', width: '100%', height: '61%' }}>
        <CardProductImg src={image} alt={product.name} />
      </div>
      <div
        style={{
          margin: '15px',
          marginTop: '30px',
          color: 'black',
          lineHeight: '0',
        }}
      >
        <p style={{ fontSize: '25px' }}>{product.valor}</p>
        <WordShortener
          style={{
            fontSize: '13px',
            color: '#000000ec',
            lineHeight: '1.6',
          }}
        >
          {product.name} <br /> {product.location}
        </WordShortener>
      </div>
    </CardModel>
  );
};

export default Card;
