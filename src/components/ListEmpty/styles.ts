import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const Message = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray03};
`;