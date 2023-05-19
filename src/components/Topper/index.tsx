import React from "react"
import { Container, Content } from "./styles"
import { ArrowLeft } from "phosphor-react-native"
import theme from "@theme/index"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"

const Topper = ({ children }: JSX.ElementChildrenAttribute) => {

  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('home')} >
        <ArrowLeft color={theme.colors.greenDark} size={30} />
      </TouchableOpacity>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Topper