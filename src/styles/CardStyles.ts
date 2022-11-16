import Image from 'next/image';
import styled from 'styled-components';
import { CardProps } from 'src/components/Card/Card';

export const CardContainer = styled.div`
  display: grid;
  margin: 30px 0;
  grid-template-columns: repeat(6, auto);
`;

// type CardModelProps = {
//   animation: boolean;
// };

export const CardModel = styled.div`
  margin: 8px 6px;
  width: 225px;
  height: 300px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(43, 8, 37, 0.2);
  background-color: #ffff;
  transition: 0.3s;

  &:hover {
    z-index: 10;
    transform: ${(props) => (props.animation ? `scale(1.02)` : 'none')};
  }
`;

export const CardProductImg = styled(Image)`
  border-radius: 15px 15px 0 0;
  object-fit: cover;
`;
