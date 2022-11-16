import { CardModel, CardProductImg } from 'src/styles/CardStyles';
import { WordShortener } from 'src/styles/AdjustStyles';

export type CardProps = {
  img: any;
  name: string;
  value: string;
  location: string;
  animation: boolean;
};

const Card = ({ img, name, value, location, animation }: CardProps) => {
  return (
    <CardModel animation={animation}>
      <div style={{ display: 'flex', width: '100%', height: '61%' }}>
        <CardProductImg src={img} alt={name} />
      </div>
      <div
        style={{
          margin: '15px',
          marginTop: '30px',
          color: 'black',
          lineHeight: '0',
        }}
      >
        <p style={{ fontSize: '25px' }}>{value}</p>
        <WordShortener
          style={{
            fontSize: '13px',
            color: '#000000ec',
            lineHeight: '1.6',
          }}
        >
          {name} <br /> {location}
        </WordShortener>
      </div>
    </CardModel>
  );
};

export default Card;
