import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 400px;
  background-color: #000;
  opacity: 0.35;
  transition: 0.3s;
  margin: 40px 0;
  border-radius: ${(props) => {
    return props.borderRadius;
  }};
`;
