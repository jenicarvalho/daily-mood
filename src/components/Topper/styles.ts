import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.greenLight};
  position: absolute;
  left: 0;
  right: 0;
  min-height: 200px;
  padding: 60px 30px 0;
`;

export const Content = styled.View`
  margin: 0 auto;
`;