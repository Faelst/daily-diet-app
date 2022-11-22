import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.l};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
