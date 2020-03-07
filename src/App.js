import React, { useState } from "react";
import styled from "styled-components";
import { TextField as MUITextField } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const ContainerInputs = styled.div`
  margin: 40px;
`;

const TextField = styled(MUITextField)`
  margin: 8px;
`;

const Title = styled.h3`
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #424874;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 25px;
`;

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);

  const styles = {
    box: {
      borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
      backgroundColor: "#000",
      height: 250,
      width: 250
    },
    inputs: {
      margin: 8
    }
  };

  return (
    <>
      <Title>Border Radius Previewer</Title>
      <Container>
        <div style={styles.box}></div>

        <ContainerInputs>
          <TextField
            type="number"
            label="TOP LEFT"
            style={styles.inputs}
            value={topLeft}
            onChange={e => {
              setTopLeft(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="TOP RIGHT"
            style={styles.inputs}
            value={topRight}
            onChange={e => {
              setTopRight(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="BOTTOM RIGHT"
            value={bottomRight}
            style={styles.inputs}
            onChange={e => {
              setBottomRight(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="BOTTOM LEFT"
            value={bottomLeft}
            style={styles.inputs}
            onChange={e => {
              setBottomLeft(e.target.value);
            }}
          />
        </ContainerInputs>
      </Container>
    </>
  );
}

export default App;
