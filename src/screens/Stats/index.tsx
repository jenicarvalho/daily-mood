import { Container, Subtitle, Title, GeneralStats, Content, Box, BoxTitle, BoxDescription, Row } from './styles';
import React from 'react';
import Topper from '@components/Topper';
import theme from '@theme/index';

function Stats() {
  const data = [
    {
      id: 1,
      day: "Hoje",
      items: [
        {
          time: "20:00",
          description: "Jantou fora",
          status: "red"
        },
        {
          time: "12:00",
          description: "Se exercitou",
          status: "green"
        },
        {
          time: "10:00",
          description: "Acordou cedo",
          status: "green"
        }
      ]
    },
    {
      id: 2,
      day: "Ontem",
      items: [
        {
          time: "20:00",
          description: "Jantou Salada",
          status: "green"
        },
        {
          time: "12:00",
          description: "Se exercitou",
          status: "green"
        },
        {
          time: "11:00",
          description: "Acordou tarde",
          status: "red"
        }
      ]
    }
  ]

  return (
    <Container>
      <Topper>
        <Title>70%</Title>
        <Subtitle>dos dias registrados como bom</Subtitle>
      </Topper>
      <Content>
        <GeneralStats>Estatísticas gerais</GeneralStats>
        <Box>
          <BoxTitle>22</BoxTitle>
          <BoxDescription>melhor sequência de dias bons</BoxDescription>
        </Box>
        <Box>
          <BoxTitle>109</BoxTitle>
          <BoxDescription>registros</BoxDescription>
        </Box>
        <Row>
          <Box bg={theme.colors.greenLight}>
            <BoxTitle>99</BoxTitle>
            <BoxDescription>registros positivos</BoxDescription>
          </Box>
          <Box bg={theme.colors.redLight}>
            <BoxTitle>10</BoxTitle>
            <BoxDescription>registros negativos</BoxDescription>
          </Box>
        </Row>
      </Content>

    </Container>
  )
}

export default Stats;