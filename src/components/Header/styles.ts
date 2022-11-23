import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0 20px 0;
  padding: 10px 0px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.l};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
