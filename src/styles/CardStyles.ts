import Image from 'next/image';
import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 15px;
  margin-top: 100px;
  width: 200px;
  height: 220px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 0px 20px -6px rgba(43, 8, 37, 0.2);
  background-color: #ffff;
`;

export const CardProductImg = styled(Image)`
  border-radius: 15px 15px 0 0;
  object-fit: cover;
`;
