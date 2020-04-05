import React from "react";

import { Container, Button } from "./styles";

export default function ButtonComponent({ title, ...rest }) {
  return (
    <Container>
      <Button {...rest}>{title}</Button>
    </Container>
  );
}
