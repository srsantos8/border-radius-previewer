import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: 30px;
`;

export const Button = styled.button`
  background-color: #000839;
  border: none;
  color: #fff;
  width: 100%;
  height: 50px;
  cursor: pointer;
  border-radius: 8px;
  text-transform: uppercase;
  transition: filter opacity 0.3s;
  &:hover {
    filter: brightness(80%);
  }
  &:active {
    opacity: 0.9;
  }
`;
