import Image from 'next/image';
import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  padding: 10px 0;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #637dd8;
  box-shadow: 0px -10px 15px 5px black;
`;

export const NavOptions = styled.div`
  width: 1100px;
  display: flex;
  padding: 5px 0 0;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  font-size: 13px;
`;
export const SearchBar = styled.input`
  width: 550px;
  height: 35px;
  padding: 10px;
  background-color: white;
  border: none;
  color: black;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  margin: 0;
  padding: 7px 12px 5px;
  width: 45px;
  height: 35px;
  cursor: pointer;
  border: none;
  background-color: white;

  &:active {
    padding-top: 8px;
  }
`;
