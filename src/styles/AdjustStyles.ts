import styled from 'styled-components';

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Separator = styled.div`
  width: 0.9px;
  height: 65%;
  background-color: #d1d1d1;
`;

export const WordShortener = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
