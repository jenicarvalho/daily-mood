import { Container, Title, Gradient } from './styles';
import React from 'react';
import Header from '@components/Header';
import Button from '@components/Button';
import Highlight from '@components/Highlight';
import DayList from '@components/DayList';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

function Home() {
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

  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('stats')
  }

  return (
    <Container>
      <Header />
      <Highlight handleClick={() => navigation.navigate('stats')} />
      <Title>Registros</Title>
      <Button>Novo Registro</Button>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <DayList
            data={item}
          />
        )}
        ListEmptyComponent={<ListEmpty message="Você não tem registros cadastrados" />}
      />
      <Gradient
        colors={['rgba(255, 255, 255, 0.1)', 'white', 'white']}
      />
    </Container>
  )
}

export default Home;