import Image from 'next/image';
import Foto from '../assets/products.png';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  margin: 30px 0;
  grid-template-columns: repeat(6, auto);
`;

export const CardModel = styled.div`
  margin: 8px 6px;
  width: 225px;
  height: 300px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 0px 9px 5px rgba(43, 8, 37, 0.2);
  background-color: #ffff;
  transition: 0.3s;
  ${(props) => (props.animation ? 'pink' : '#3c7f8b')}
  &:hover {
    z-index: 10;
    transform: scale(1.05);
  }
`;

export const CardProductImg = styled(Image)`
  border-radius: 15px 15px 0 0;
  object-fit: cover;
`;
