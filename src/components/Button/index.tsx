import React from "react"
import { Container, Title } from "./styles"

type Props = {
  children: JSX.Element | JSX.Element[] | string
}

const Button = ({ children, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>+ {children}</Title>
    </Container>
  )
}

export default Button