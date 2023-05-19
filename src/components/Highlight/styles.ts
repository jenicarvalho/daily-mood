import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.greenLight};
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const ArrowTouchable = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
  top: 10px;
`;