import React, { useState } from "react";

import { Page, ContainerInputs, Container } from "./styles";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import Preview from "./../../components/Preview";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default () => {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);

  const [copied, setCopied] = useState(false);

  const borderRadius = `${topLeft || 0}px ${topRight || 0}px ${
    bottomRight || 0
  }px ${bottomLeft || 0}px`;

  return (
    <Page>
      <Preview borderRadius={borderRadius} />
      <Container>
        <ContainerInputs>
          <Input
            placeholder="Top Left"
            value={topLeft}
            onChange={(e) => {
              setTopLeft(e.target.value);
            }}
          />
          <Input
            placeholder="Top Right"
            value={topRight}
            onChange={(e) => {
              setTopRight(e.target.value);
            }}
          />
          <Input
            placeholder="Bottom Right"
            value={bottomRight}
            onChange={(e) => {
              setBottomRight(e.target.value);
            }}
          />
          <Input
            placeholder="Bottom Left"
            value={bottomLeft}
            onChange={(e) => {
              setBottomLeft(e.target.value);
            }}
          />
        </ContainerInputs>
        <CopyToClipboard text={`border-radius: ${borderRadius};`}>
          <Button
            onClick={() => {
              setCopied(true);
            }}
            title={
              copied
                ? "Copiado para a area de transferencia"
                : "Copiar para a area de transferencia"
            }
          />
        </CopyToClipboard>
      </Container>
    </Page>
  );
};
