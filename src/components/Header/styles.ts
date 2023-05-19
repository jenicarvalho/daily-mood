import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 116px;
  height: 39px;
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 3px solid ${({ theme }) => theme.colors.gray02};
`;
