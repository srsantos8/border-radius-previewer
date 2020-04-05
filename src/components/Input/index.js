import React from "react";

import { Container, Input, Label } from "./styles";

export default function InputComponent({ placeholder: label, ...rest }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} placeholder={label} type="number" />
    </Container>
  );
}
