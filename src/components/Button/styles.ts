import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.gray01};
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border-radius: 6px;
  margin-top: 10px;

  &:active {
    background-color: red;
  }
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;
