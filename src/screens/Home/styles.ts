import { SafeAreaView } from 'react-native-safe-area-context'
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(SafeAreaView)`
  padding: 24px;
  background-color: #fff;
  font-family: ${({ theme }) => theme.font.nunito};
  `;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px
`;