import { CardModel } from 'src/styles/CardStyles';
import Image from 'next/image';

const Slider = () => {
  const urlImage =
    'https://www.registrodemarcasenmexico.com.mx/wp-content/uploads/2021/10/shutterstock_1108681484-2.jpg';

  return (
    <CardModel style={{ cursor: 'default', width: '1408px', height: '400px' }}>
      <img
        width="1408px"
        height="400px"
        style={{ borderRadius: '15px', objectFit: 'cover' }}
        src={urlImage}
        alt="Publicidad"
      />
    </CardModel>
  );
};

export default Slider;
