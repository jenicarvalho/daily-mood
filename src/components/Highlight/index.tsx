import React from "react"
import { Container, Title, Subtitle, ArrowTouchable } from "./styles"
import { ArrowUpRight } from "phosphor-react-native"
import theme from "@theme/index"

type Props = {
  handleClick?: () => void
}

const Highlight = ({ handleClick }: Props) => {

  return (
    <Container>
      <ArrowTouchable onPress={handleClick}>
        <ArrowUpRight color={theme.colors.greenDark} size={30} />
      </ArrowTouchable>
      <Title>70%</Title>
      <Subtitle>dos dias registrados como bom</Subtitle>
    </Container>
  )
}

export default Highlight