import image from '../../assets/products.png';
import { CardContainer, CardProductImg } from 'src/styles/CardStyles';

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
      <CardContainer>
        <div style={{ display: 'flex', width: '100%', height: '55%' }}>
          <CardProductImg src={image} alt={product.name} />
        </div>
        <div style={{ margin: '10px', marginTop: '0', color: 'black' }}>
          <p style={{ fontSize: '20px', fontWeight: 500, lineHeight: 0 }}>
            {product.valor}
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1 }}>{product.name}</p>
          <p style={{ fontSize: '15px', lineHeight: 0 }}>{product.location}</p>
        </div>
      </CardContainer>
    );
  };

export default Card;
