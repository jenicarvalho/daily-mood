import React from "react"
import { Container, Logo, Profile } from "./styles"

import logoImg from '@assets/logo.png'
import profileImage from '@assets/profile.jpeg'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const Header = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Logo source={logoImg} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Profile source={profileImage} />
      </TouchableOpacity>
    </Container>
  )
}

export default Header