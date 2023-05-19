import React from "react"
import { Container, Day, Description, DescriptionText, Item, Time, Status } from "./styles"

const DayList = ({ data }) => {

  return (
    <Container>
      <Day>Hoje</Day>
      <Item>
        <Time>20:00</Time>
        <Description>
          <DescriptionText>
            Jantou fora
          </DescriptionText>
          <Status color="red" />
        </Description>
      </Item>
      <Item>
        <Time>12:00</Time>
        <Description>
          <DescriptionText>
            Se exercitou
          </DescriptionText>
          <Status />
        </Description>
      </Item>
      <Item>
        <Time>10:00</Time>
        <Description>
          <DescriptionText>
            Acordou cedo
          </DescriptionText>
          <Status />
        </Description>
      </Item>
    </Container>
  )
}

export default DayList