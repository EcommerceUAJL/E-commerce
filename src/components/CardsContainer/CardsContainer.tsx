import { useEffect } from 'react';
import { CardContainer } from 'src/styles/CardStyles';
import image from '../../assets/products.png';
import Card from '../Card/Card';

const CardsContainer = () => {
  let product = [];
  let total = 12;

  while (total != 0) {
    product.push({
      value: '$46841',
      name: 'Kit De Cartuchos De Tinta Hp 667 Tricolor + Negro Origina',
      img: image,
      location: 'Mar del Plata',
    });
    total--;
  }

  return (
    <CardContainer>
      {product.map((data, index) => {
        return (
          <Card
            key={index}
            animation={true}
            img={data.img}
            name={data.name}
            value={data.value}
            location={data.location}
          />
        );
      })}
    </CardContainer>
  );
};

export default CardsContainer;
