import { SafeAreaView } from 'react-native-safe-area-context'
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  font-family: ${({ theme }) => theme.font.nunito};
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

export const Content = styled.View`
  margin-top: 140px;
  padding: 40px 24px;
  background-color: #fff;
  border-radius: 20px;
  height: 100%;
`;

export const GeneralStats = styled.Text`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const Box = styled.View<{ bg: string }>`
  padding: 20px;
  background-color: ${({ bg, theme }) => bg ? bg : theme.colors.gray06};
  border-radius: 8px;
  margin-top: 15px;
`;

export const BoxTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  `;

export const BoxDescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;