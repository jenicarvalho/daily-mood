import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
`;

export const Day = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Time = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray01};
  `;

export const Status = styled.View`
  background-color: ${({ theme, color }) => color === 'red' ? theme.colors.redMid : theme.colors.greenMid};
  padding: 8px;
  border-radius: 100%;
`;

export const Description = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  border-bottom-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  padding-left: 14px;
  margin-left: 14px;
  
`;

export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray02};
  font-size: 16px;
  font-weight: 400;
  
`;

export const Item = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;

  padding: 14px 16px 14px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 6px;
`;
